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
    "3K1tKWx42DkjkK9tNW26nmUxoRjNVKgCpDihCX2pK6QHTcEMQtmQDYtYWS3zzRL2rZ2SkVZT3mTEnAJhLFtXcZ1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XBQWoqpAxzUrjQ9YRUedKXr8DHb8VAxKFH86CSLDpSH6K3cABMCWnv36vNxgniQXsbpgcSfChyV52Ku19hYGgi",
  "key1": "3YdNxTraxj5uMRdH5tXDbMnFzidMTZ5cCjXge7bRf8w9uZvfRTDuci1tsZf2E8rR4hrsx3oV6ETS4czJHTG6zfej",
  "key2": "iaEXDkwSmUuNS62k6BDjWGWA2o9MAsqpx2rkanPBK3MSx2D4NpMc89h8FyvK6TNit8fG2kwzF1VJAsHyTqWHrUJ",
  "key3": "QaGrM3zt11mP61bys2p1UHwwe7acY7yN3H99qyBu8TBF3hFmqkbxgL5vhjPWTwmmzejTakPHuYXoS6YYUSuUWxj",
  "key4": "4Pfc875ekcYRjJcqQ3945yFf8thPcyUCHpqUkUuUSmLFA2231266vYadWoGBFzg11TozfE11Z4HxJ2Ct674Jtwks",
  "key5": "3ynU1QJ9jjt9ZjGZHZoF6FhJCVEmBneFtiEmGQDYKr84jx2vbhmwofkCeCb3fBS2eE5d2d93u9G28QsgezUaJQTJ",
  "key6": "47cPjnx77UK2P4F2oeFQ5vPs7fsHjUX2YEJYN784bK5zawTEqEoZGmS7vQM9HCviSdbPRD8gP46oHvwuP5osBa2G",
  "key7": "5SqdspUbG9616k6tFMX2YrkgzspHFytu7kqKMZUChRpCYEfYL1YoiHWacwc9rWJWpEKUbxVKGBcYb8vq361VUM7D",
  "key8": "3adVb3GuZDorFLF3tmjCzCimMGyBEgBZnZHQjiAETUmK3Xe31m3ttVqsXgwtGE2MnmKyi5VnXsxdDEzKuSZRKExw",
  "key9": "27PXgNfnaW67jC6yt8pKmJ5eKFkShzXKSYY6W6jhZRVsBXc1jFWztMvXYzUGJbLUBLNf22dLfeRqMUKhhvAVteSL",
  "key10": "5KAgUpjDmqeEVp3ADos5poWUhjHUoZxmCgN1mQ2mdXhUju4RMdZfm4p5kWwRW7Nsj2YwssB18FbadBTsb9ZXmfzQ",
  "key11": "5m7HZ632TKSNVpAbMrZoind25672SdxjVvQjPfxxdGdiqncxBQ5L6HMX6woEvTy1ntgvyB9g5ZbHVWJGC4Vj6JG8",
  "key12": "67Gi8dFbfhBhxSbNWVghumVKH6yWos3vktXKxbgDdBPmLjzp7ZhXwbY4MVpxS3QARmfWPYT1jzmTGT9VyN4NNYGV",
  "key13": "3ZrnZYtefF97qAP6r6svqwVsJrptvQ8SP9BqP3bnH9Xfbaq9xSQsb9L6P38kMZfoYSBFQmPnhPmjgezWtMsBV25c",
  "key14": "3nqM6ZSmjVBUDgAAdifuuu7QTmnMLJX8DdTE8PCyfaBYWHNfohxcydiJAnEJ56vDowYuSSYpcF1KamGMt7ud49fx",
  "key15": "3pkSANR1azqEbhE9SnsZPUXqqyczX8TRAYt2UZtLvry6Qd393yES8hFXtEoZnqdauXSzbAhrMTpFC2FhdLJEaj9r",
  "key16": "8bgaCNgz1DKJu7ayjiBtiW2srUz9Q1rDQZXcNMLia85wUvaFSu8c8VtXQuwoiQ7SshDj8iyDjt9tHAybY15WN3s",
  "key17": "3PjF49XqyMnbfHCJUotsEwXBgdC5r1vjZBEZd5LpmW5gNfcb1wZTWuMiktLAKd5kL2Ap2jtdxw1r9eq9VGW1BuGL",
  "key18": "1uCE82FQxz3Rxbk7g4evvoYp4pJVu2AUjLJKDUQhTDHLKsPNsAp6yEM6QRAizw9T51fyPTkVv14mFAEgaViN6V8",
  "key19": "21JiZdeiVKSzhPYS1kD5X3A5EJWSUgG5VSxkixaCJJQ3Y9V3DGhnNZR2wEzWdDYM1aQDGb4U6pdcD6kWf7oMHR2Y",
  "key20": "4yypM452Wwx4XMTTQoia34VfAe6XPLB5nHRQULhqqfJ32keLcftCT8E8vEyGLv4WhJvHBxfc7SfFTJinbjkqHyME",
  "key21": "34uVWTycWcs7fXqwyRoUP7cVGCvQQXimVHRa7YXedVRZT9CTfmnAMt3nPpJNh62LpTDmTZD2T2D4oaQkUo68zCLi",
  "key22": "3dXnUGrvK232a58eMxcs6qgxKKhA45EGkDd97cLnBvoeapyS53fgcGQbdVrVrmkUasynjRqvMJRwkseLuWr4zy5D",
  "key23": "ofmnYUNMSFDMNCQ1eDHqrggwNUNwmjfgMZuAQtRhvFrxjvoVAyf1UQqGxHH7wx31xSMQZEKMvuDoocrQTvUsNqi",
  "key24": "3oRiEZv52V56F2qu9rUd5KAaxABYUb1rPtKdattUXQZRNH55HEeWJDJU3cpSU5QwvY7U4EojKt2LaK5wPKwXZdX8",
  "key25": "59CeBZimFt4Nt46hfDJMuRoMGCgwjFS9a2R8vtDyTxiWcBRH8kEjJxprDzc2umpPeoudK3YSz7XA5YLCRQoKSkCg",
  "key26": "5AT6UMrQE4SsESTteenSBU8pPLHXegAhZdQ2EFaoz1dSwZsTGXvrhaZMgUUpmK8YkkUsgWe6qSi7oX9K81a9A8PD",
  "key27": "23kCcLZLpW24tFd4928fN9sTepzfarXcfS3wwH7VZMeGFn1zkZi7fq9v3SGzXXyHMBcgtMqNBVgTrCsNM6dURZKq",
  "key28": "3bAUFbwPWddy2QzjZmanFZ3YAtYpu8Jra3pSHmZBq4pHcnpqDdDck14baWtkdQjNfEp5q6BDtiGgn2pEkx9fDCG2",
  "key29": "3maKmpgAoWMvGHsnTuP4jMWCQAPboqdC4KZCjC4EP69CKDH7X7KkhNEf86HFckYAw5ckA7guDpAzN5sHiWTAfVcT",
  "key30": "62HVV6yv6LjjKPd6qdWVAXXzibWuwKuRma6SbrB4W6ZCUEcxRZYZQcrUGEk6v71G5VJunpm3Kt2zh1ksbGQf8kh8",
  "key31": "4JxtbQyu2xCp25rZJrhJG9YJXja6QEfMeCJMQzZas6E9UC8qmCqAeh2rxFPesuSw2pQaykpGkcahU8EUbHJ6G8j1",
  "key32": "4FkJTtssWRQWruGYfxgUbpGkBNQv8MmoJzZ2UiSgLtdT1YqFQqKyYQERVwEm4nsZnfQUpcKkXNijwB1Nn4PhNCWX",
  "key33": "sxm2B65rZD3VuiCSyTekGn9XBsunjebpzSd1neNJRJjAHwVr8rEHcVf1Tp4rUsspX18wJXdXRysiWDxtm1N39qB",
  "key34": "2TtUXuzwpAZDegka2tkBZuj8aF9qm8dCqw8RctM2KE93KRrFutBVYmWAhEA7YtHqRaaAgRZrSCH66E516oETyuNa",
  "key35": "2LPfPphtEHCDFYpTWzP5AyDJH4JE2WMVvYhr6cAE1GsFeFrHSjPQfWaxbsr9AmTSPNpJQ5ay98P7aNpJ8J4GvHRS",
  "key36": "4U89pyUCTU1SzH1Qb42db83Ly8WviZyz5MGAvvQgYQ4AmLey2f3p1ZC42jjsuAMdC493qSj3E7iKVFUWrXqtnGRr"
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
