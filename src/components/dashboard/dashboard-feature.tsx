/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3TwV9MYvTQvdNfgt8J1Y1FFWyVEENwusSMak5AgV7QNtYfZtydvfxKNRHw3dshdBoio3Gfa1HRFNfxLdCAt28UAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Z8gZTuTFSWXRm69cr2b3qsmaWhwwCQTdXsfKizjqwijg2hQXwayiwGzv2XZu5BkNGfWwVWn99DsEkrp2JGahoE",
  "key1": "2rr39MytRAm31wqhWXACxdhuJgPY6eZs8M5MMAYM3WbmeKcZRZYQJF8RxzgQXCTUQ5cKWzhBJDvaytBXUJQC95LH",
  "key2": "2tr2WwjgScVqdSkAEDf8NP6NVWcqimQAWEvmmW36ZxsJwBETFicJSZ7J8Afn6uidfGcVhxo8TPVzDM2XMrBb2187",
  "key3": "2WhVsYezNgfH5MgHYGU7xF6ZZZTMCzewsuwJa3pFQTcgqsQsXu3RdXLsvUVgiYpBiRmZ2taUGJnbnpiTsgBNHFcx",
  "key4": "4ebXgEJH1E53n3ReY1dqZthwcNgieGsoZoZk8Xy5QD7F1mjzcUyEtqpWEJ3JqYC9D6E4DrUZxbhhFnFEywaK1STw",
  "key5": "4zvnmcTngLff1yBEefFp2DHmw5hdvdhiE1bSYFAPfLS57V5y16UeP7A3L6ZBxr56DYBKshK7LwNzpYAJuj2pJSpR",
  "key6": "3mC4ZpYYYdsxv2JwZ5xjzsSHUhFMb4qxHVPETwxzxuRMSRcmfxXByh3ZqT96AwRhfKUs8dMphQFcqwKTR5tdgJwe",
  "key7": "avzwfDseNELBwypxcuw13YLxXQBs11KMxLvSHkQU6RvkDG6A4PdngE8p4eTQhqqFcBtj1urMKSp3VB4pNhBubvx",
  "key8": "319qVmH7g9Dm4AQS9HBXBDuApRimrpwd1BZPNFMrUccoQ2LhgHpRQAJG4vr9GYChHW3ugvVV8RrHLs1AJVgc8VGV",
  "key9": "5YdKTats59zmfr88xao64mmckZvP4Mc8Eb2497VimbJ5LdRVHfFhn4AYg7AzkMEEjRPeKEdfrDF3gKdGc9yTzRRk",
  "key10": "31D8LBP3Z2kaFycT2EzaMTAurYmTNwg9Tv4guPgsesG18FcTuS9jStTTW8m55XrbH6t2kCs4ReMPWk34VSbiDD1",
  "key11": "wWWNWfUwgAoSPULf1NwzDgHTZPDvqkVPqJz5NfmpArXwtWZAi4hwjp73Pr9qefeM8Z2vEBkCaqKyamHPpSEbR3V",
  "key12": "2K2YVb4kTGq3i8u78vsHuQK1ofYTsUMBRC2FYtrHe4AtoX3QxbxxkT3puStyX6XhVfY7bA37TuXTE7oxFa7pYV5g",
  "key13": "4WWrzL7tMeo1z47P414X3oZJrPXqzhF9zHZepUbeguoKquiTbjkkppNxG71b1PUUwBVrow7ZZJXbMXXGtXKBMBFr",
  "key14": "4NmUA6BxuSDsy8xPU3eBjge4sVBaoZ985C1bMfEPDAm1SfmkpMdZxP3Gq663BH1BEGnjaGNxJZqKLRAHYCNmXqN3",
  "key15": "58u4EUyKHA7y7BAAEDEsguxHFezddyS1NgYp2XuNv4CHxhq1a5Q4oncyJP3AqmwMdE3S18s8turpXkPefRMYB6ZF",
  "key16": "37ehyJdm2SHjVM9kLy21xDDpuhrHrP8vWQC4NwYtBTXQkVj8yW2iPM7G2gf5Ts53HZtePT5e3PTL2ffSsLpVirtR",
  "key17": "5pmQ1svYFC3gtX9LDBTvGjMr9K3u8tSkbWz2tnsCgQpAsDvM4mH3EtzwUPoWUDr2f9ijGrhxZZSmP65N8tTUm4GH",
  "key18": "27b9jiBvP3UyxXLvcg3a2D5mH3khjJLF4AJKzWDxZ7n1t2jE2yCNLnzD9idtZkHyGx87vjkErvRv1jp6S2Cp6W5T",
  "key19": "5y16EHr3VhTQCZWBzU1Cs8ESLFLqpFkA6u91sDR5vPCprMzaSEGgMavSoBKRVv3FppNtmX7PnZq39HkA6a59WGhe",
  "key20": "EwdzRpdJ6yp8qBWC6s63eLMSe7Hh7aMgcPWUtSt1GVL619dEXfWgVZnziGZmo5YJS4qj5XM5q4qngYUb8QBDQVZ",
  "key21": "5pS49mQXgg4jwSPZNebGXFaKYtxbL38ienr33LBSDZS3s2KuXo2eqm1HjhX7rRpPNqZzwKpb7KP7DbiMHv3eWfJR",
  "key22": "4oA9L9UtfwmYDURjwiEFeTdh4zUgJeg2UzmCvsw7jy6p8bZigDtWXQNHZYei5nPd22yr4XGRV5WKCABTbmLNreej",
  "key23": "3ryYmeHNyZmgma835qScs6XtX55uZ1U8uSDEtbhtJ79Xe6cdaGb4MFxNDPxodUEhaBD4MguuqP66MWn18PcBaTNv",
  "key24": "4iCgLshhVxfrfAmL97XqVT72tsZ9pVUpmChS4MQ6Dz45Mn7FFgxMEYprRRMoEeNNsWftrcZS9hWN6UcWwpCUaEED",
  "key25": "5Zmydm9rpBmuDAjU4M553a5CKqqDQ6gpzQrGzJFDRZ2iiitjAekJfKtf5htsq9Dwq4WF3yMaCR8vXA4XPxVmauhr",
  "key26": "2UVFXJqqhoAcSWfeATXYDw6KWRFkfaDKn4F2VKk1nVdWKdV7vg9nkqDJjkTdXPiP9JGDbpYb8gSZN72E1tqiPR9j",
  "key27": "46wWRfvrcRj9e4DNubms7hmBjSMgigHPYG5xbRPoY2r1GHLBKL4dnQYxy8X81qJXJcqpKExMaoG6MVYrVsPBcbLB",
  "key28": "3WSZC9iUPRzkaawrDCA2d8XGCgkcWPzazxkvCxQPpKxN8TtLfuZokx6bxyqBB2Cyh74xm2MxhtuEYziA6mAxQKCK",
  "key29": "5Q5QfXzMLHfWSUKmtjsMe1wt2XvZKTNbC3ZE73JqWU3MEjgPsJyoLHGf93psD1igP5u5cvGDohh5VqYuNDQbfJ4a",
  "key30": "5f6aTCBj35PCdoiHARrvjuAYhQ3SQzcuEGzLJuCQnVzc17TpUUDu2oqqRdMjXE4QkoKu2u3TBb9M2rpGcKb9dSzE",
  "key31": "QfeRft9NVXSQfwUpkACU19xWZAsBuaLJYpZHH5AULf88GgrfoQDyvoWqZdgjdxkMUNQFKTNj9R2eRdeQjSPKBdZ",
  "key32": "5sZ43gf6zuQ51CcWSw3dLvHXocK8xJ1BBwfdRQ7mveNkXUyVuKyFN8g2cCDTTMLVEHUcqdvhLrq86xn1KDe1SLni",
  "key33": "47rYDKdU7cqKeYLcpJtcdPdZy7DxxrRFbvrxZb8aNgA1rB7VJcmqcamp1nBGjfxX2CZo9YVRq6Q9Ua4CMHCNwh8H",
  "key34": "2B399rrqzzBLRhicwq3RX3NZ2fBbuDiYVXVZLFeEFLfqmRZTiX2piaAJHz3iNU4hzVu7Pua8uZDAmpNNm7m1hu7k",
  "key35": "THD8gmVYm21hsstGM12gtAn1oQtf8UxPnv6jBXAxP1c8jNXXezxXj1Tf49xTEx6c1o7akaG7rvjLQH1NSZqUPtq",
  "key36": "3XiaQDfNce9ibCtMtgXZQ6x5sRsE3dDDazkEEwgyddgrXsbsx3jX2rSNHQMnkVT5wR3KNAHmWn7HjmjFKxTwxj9m",
  "key37": "2Un2SzB73zM4ibkDdxyDJQCg5ZxC9UgisYTEwqRsFzmkXnBLMD4quyjyqxpr4Y9FBkgHXpv84RFcgFyjvLLzPq5Y",
  "key38": "4WZzPVGznCBLSCZoQ8WUgNwRfqzZZ4fgdpUSLC54H9MAevwWykwcfNM8VQsxHgcaFnTwjwBtwmJ22XywGFKWGjFz"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
