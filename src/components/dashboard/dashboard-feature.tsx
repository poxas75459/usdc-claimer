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
    "mtyaPF5BwhyFs87QfAv7MwcaXyK6VmNhM4pyvZmm2HtwBoZdHxwVN6ZxRKzG3DmzFyyP5pQiZyfsAvY6E7JHs8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJDB247SyLpyUez1a3RqkAtZQZhPewyq5ZACcjxJ8JesWUEJek8qXrymTzrhJWwmYf7uohxQsCwKqGDSQF9Svod",
  "key1": "2Q5FQ3yKDRAsRyvGR4qzwGbaPV3vZSadAr5oAfWKe6xwAgk1xLva2pnA6pTtwNsGSLKUgbH8Uc8xTZP2txcunwcW",
  "key2": "3BjASqRb18Qea7G5Kmp9RwhCLmz27LeBeAHPy4zb2Wt1JVYWPtD5oa9jx563N6ywCM94cQvbBBL3MRPqbUH1L87m",
  "key3": "26yxp5F7PtwKFt45yMYXVgg9QBGCLcY4wTN51P8jfZ86zeZzWGXFsQ4YRcNitfoSUes7NEnbbn49RLiLmGLfRZWd",
  "key4": "eFei9pwyqrbFNgH4i4PeTdb3kaYR5xh8ENr3M5oGZDzL4p3g5GigE4USD9aSNXAi2MT57nmkass94j9BCJBdDtq",
  "key5": "4V9Z4Tkcegd218G2VeNsMG3FeYWZ7GkiReoAdNeTmpanEPsu8FAeZ9KPqc88NFyvsjkvgSY5JhCt5BKDW31TmqxD",
  "key6": "4xnaiu714VqegQ3hmQfEWMxsTVURcN4vbLJFoJNex6ngSsgT8WWUUoc4kKurAsPHaGJwQRs4ctR1wN7yfHGDSiAr",
  "key7": "2Mq24DPRcfrStGwPReYnediKUMZD3RrwEoWC2UHDXjsZa8WQJ5dCVohgAXfFxqkXJNNQy6sNE5uvbU6sPScimiLU",
  "key8": "3bv6a7pbxrrY1osRDo2z48vZEAd5v4YFqxuYC1YYjx47BCcqSaJfHk1XPkEkvJ9wsxWjzyAhny3hJdaY6mW1NYvN",
  "key9": "3HLSTFE7XE6Kt6sHwbUW6Ms25aDhzo3FQXtCM4sikBdnMXfM9NzZwERVU5nRSz5ustKZ2Pz5MdyugvjzNAnvgr9D",
  "key10": "25x46r1e2PmGruUNuUZ7TZgZkGqkTWHJQL3RfCKHbrEJiSisF5nb2RQJCyF4FHptsZaKBNtZAo8PxzAc8kJg5HbN",
  "key11": "4YodW1PaZyJJvspt3b67DnQD3Astyd8XEfbmKwSNmEsraBbgpmkZP6YA3AkwH31qL7T14h3EP6VV68ebuLQLPkPD",
  "key12": "5xShQgjYYhbXxsWCdRxArQFbfgnDKNGZGUUCaHqGdYvLQWwSanE7NYwyDPtbjiFennNtrRhQxqPxKNJcCG3VUiqE",
  "key13": "2nhGTZ4zoLRyn3NPgtZXHGaaMyoxHztEq67zxwD7prFLW5VZdmvzGKwHvKEGxPgNhhdVftYeHKes9H6RdbvyFVmr",
  "key14": "5E4hcowph7QXgyHTzKt6DUbdNSBaMyti8C4h51yLn5mZMc92fxhuobsrzcDYS6ujKKoWMaEnyyt7smGbvkAuTwtX",
  "key15": "52e91f3et1QFo4jnV9i1N8MLw9WLWw35QrhvkhmeVRpdMggtjnLRCPkEcsdYTEtzU2kj3YW2UxF8WTFMgSjHoo4b",
  "key16": "vxHLCKeBgQyB1Scsp9Eg1fiya5CXqr4mu9vtFbVmXg3MJdcRD7G1fww71eNbzovWFVoCYn9fytLgzdX2FLsqmre",
  "key17": "2bE4iQ9bqakmHKzgUww2T7SJfoqGRbvRQtgcMp9pWf9MSnvQpKCdSkEk19g4iL3unQKQhBk9ENWftiX2XVsGRGPC",
  "key18": "2Jgcj6Hc1atfnLvHbnbcEcMiRw1WHJeZHn7Nsw9MN5TbdL9KL18Qr1CrDMM7prRQu9NLUmt1ZWhTrFkoZuNcNyji",
  "key19": "2JNapBXXNT4GUwBYqg6YAa9MyYnCfV4CkLKfskPH7i9gQErqaYVz6YFS1qCxDB74yt83dxftom1yqQZ5Fjo651Xc",
  "key20": "3qLxK3xmj2tdVJGCQ29cZ2NTZ485XEM4ALdxh7BcFzs5TpnUuauXCMvSSWe8BwgsYadjybWWSbW1G9VC9QffnRdQ",
  "key21": "HT1m6n8jPUorawbMkc6XnfNF24nip4U3ekwgqUr1ddzn5c1n4Q6QK78C2En7Wod2EasMCTESVh8xVuxa7N8dCZZ",
  "key22": "2Am3ivGAn4Ag5M4XJePcLzgV2CcK9FiM4AS6BzGrXd1X4DJGAkyt5qenY8qUWFHjWJBSLHHWnoURyajfS62BHQN5",
  "key23": "2moQiQ8U8Xm96kvqnHWUqbHoenksvNxtwMUeZmvBo57qBn5gkHaksQL1Aqeu4ydx4nXiKf9VaFbCXe2MUpzP2Txv",
  "key24": "3frWuBrJAQ6iradEh4ifziNr6i1rEpUZ3n3tMKHfkAP6fXVPQGTkMa2d4UUbbqaNMGNh2Ur1VR53H6WzLYHExCov",
  "key25": "2jkiuvoKSt5R7zKd2djvKFxYZJfV9GbbK2jD4XGWwhYgErhEiXUi3ZowW8rLrXxkoicMaYB9cRHWL78DA9Q3gCkm",
  "key26": "4oG2S5W2ev8Hd7dE7wVtxEFpmcYv1ctHvvMx3CfWbKanKxXjd18YnWjwFWnsd5JXbLr22Zkccdu3VcfK3kNbJq5s",
  "key27": "3p3VCyzX6P4hMR3eKfWJ1mGmDNa6qGAabCtU1g9gHiBaSeRsmN6iMLYkAHjGUaE2EridxzFfG8fy6tZUf63w7ASF",
  "key28": "sMFQD3Rwt7dGYZcbLeKzKt38oFhmYdRysBND9dSGT6ueohjGATKeVxs1tNQ1nHFSEtQhdX8Q4bf65ByCsVpNpRJ",
  "key29": "2uRfykrzrrXsqWLadAZs9dyTXgedgYhAd173bpkjrB1rDEnvLY4jgcwgvjjEcFfZaewFmySneT8Hf2smgdbQCY2B",
  "key30": "4pGNkz6qL9PT9Ck8Vo4sgzhCc3Dy8j8SteQ77CfGvG2Ni3AgEVtq4cQ1U5TPopiKz7VkG8qLkfwauPYRaBJS6DZn",
  "key31": "2BtYBeTWNbmRDiDhCwaVTwdgTJsiiiCA3kRiYAVwCbzy2zdXJjTnztq7MSNMFWiu3zmeyqBCYDDAshDAWxsuBQ4z",
  "key32": "4mx42AuoGLuvjnVhaRjUn4nXZAAjhbrA85cLpUNyow4q4cmobDr2fLwq5BFtTucekDDqqRMrcEifEJfBTjTGri3T",
  "key33": "3f8BfDzHKs4aUUvbJwd5Vko3DUTiP4YFqRSM9KetoQFj6ZdgKtts7m3q22wL4YwmVUbAc9jKXFrSEAiAHZ3JGzG6",
  "key34": "3t72WSmQxufWs9qWGqtCCE9p5UeSc5KABm8EqtXP38c88wKCcNjQUT4DsFsfSERJ2VMGtP97NRemvcLrgatJBG6"
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
