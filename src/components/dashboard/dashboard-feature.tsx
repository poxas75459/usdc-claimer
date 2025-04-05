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
    "4odDtoTGN7KaPp959YZGtNfvGpRC15yn5933VrGmNXAc38TYLS6szSNukbpVqTPddKhZrALKbeghAJoMWA5tYDW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zf3HuQuhmx5wwU946mf8A9nsZF877XEdk6C9GzRDzfcQiBQthnWkp1DScXTon9N9xeVYPz7goveA1Vm82QMPbYh",
  "key1": "zWSZBKM4meTfbWnQaDWUoYuoC11mBgkEkyj1Bn4FUYfJTXmujLt9torFDBcRUTCbs5ZJsK7uYhsbTxwLxUCBAW1",
  "key2": "2puDNcP1H64mvxcyGN3TpzmSNmH1zzCtiQpQ8SwDtYT1kqVD5jBXhJ4LriCGfEtbC1f6tcKjNDHybyoJS7VQ3Ruh",
  "key3": "4dV49Bqqqi83QNPeXvwVZpQkg8BD8wnSpqW8anukoqpt57wB7gX5AB6qZjDzK3xBdxFu52NnX42fKnnTZRaFWB17",
  "key4": "xDFoa91Z1MxWUfG1sKgYFy1fWrPUwtKkz1x4HJLRgSu9bJ5yaNLEnXoiMWyAWLdQ4XwN6yzt6oCqYXojVDNhL15",
  "key5": "2WTasYKaZ8m7jjdPRSZbfgecacZ2ZXPUKxVt8ipTQRVEyyYBA8KNSKUf8cgm9LumLgw1fAdfPZRbomnGjs3YeXwH",
  "key6": "3EEWV9AmRC9sZSPzCaVHRJVhNBpXusVCKn5TCGpt933bNSsFKEh6f8Dp1BrYzwDFwLQG9QDXdjNhZBZNoE3LdYny",
  "key7": "AqKtYCS6wKvd1nTAZbt3hmR8EXNhJXTx7DNE8tTjkwRmjUpyiZiibaXFM3gHuEEiq23kta1HWsoGeCY8BYfPq6w",
  "key8": "28YBwzzDmHfBydV7TzetLuna6ogQNMc2XdSdjaPhcnAeTVAAnb2PHcL1GrLH3zKXWjH2nHeFjj11s1StTUjRje43",
  "key9": "5JWUXvM5UhPYsNuKzA6Lmg79ahVdH7scBBEZ22KvXqKT5GjvLSGxMouFtMMb8LejZ3N3hpjTQcNqrjTECbe7m97N",
  "key10": "3mX3iXU2qNFeRcA6VTCJqNwfDQHEr2KVrfNUM6UEsRgYYbAGJyb9rJBGXGNhVZBVxqYagh48Be4dCXshwWWny4uM",
  "key11": "26vVZLLfqLXgHwPSEuG1dHvBpNDGgCGB6qGvbJCUy1zDoEq1Xbn2SYKtN4KGog1HaHNW7mxQHrMRVKEL1Qk6PLXL",
  "key12": "ti9pyuzTcgMnN1yHPswGBidJQtUwLE52DbU1N6bd8fWCgioADCKVMs7D4xzcn2YkhMsVNSqSdr42derUSFhiGmN",
  "key13": "5kddzHSZpNVvoqpt1C1xvdoxS4iFavqFD45f8XGdatAURApNNyQnS6wg9UV3y9hXvFJEgChdCYGFVWYG14hV5w8E",
  "key14": "39FXYjHxDmANTv2GdXacSQ9XjMQokpr1b2W4kGEt22vpsEpQnZgeKx1LtwpbdD82F7fX9zMPrrhi2oDbpKaX6f2M",
  "key15": "2GS4imbxQ3p2Hvg1PkZkJYMaoGWeokTGe49bT3VhgZV16QdeW2etzSVnCMmHaZskesPyLuxgv16xe7xQTtYqPsHA",
  "key16": "3ing78GBNHkM85Ahk1K5gy7xK3aLhHDmJkbMut6fYfkodm672Bt8BkTLgoJeRAcFQte3mYwJuvUWs2kn4DucRTKt",
  "key17": "3ys6Fnkv1msowU6r3Vwxq278wWnXpfezQ5kDqJjgxdY65oi1eRuiSAo7qZ43ShWzcogLWrc6AYxmRWnifmmAiA3L",
  "key18": "3KxWAYt5PBP6QzsgDxsaSKF3aNcKjRUCFrHLCGsfhJoGQWg9FbSX5n7ZjYwRE36Ew91asfDkr7FTN5R2e2HnP9jU",
  "key19": "38qWQtk3pGqweFasGsopGyKjkQRrC6LPhcxNm2d6NPxkWbNjT689JpmLEPN2LowyNvm5EbQFy44yQj6qzryUHRZA",
  "key20": "4TWwh1G7faqL62dH7GGnWzTw67if5ffUh2RLir8Ta98yJTARgr75g3APk7ZQx73SnpBSmeUbC2gTAQ1o2Q8pLXSY",
  "key21": "2iUySgouw1CfGXzGGun7DWjrB5EZLFRjWpUYxyEDL5mE9vcLToX366TwPzSMb3evkmfXfyR691dtDV81qrteyxwK",
  "key22": "6PTbakxoXp5Z4mtgo5WFoR32SR6d79ZbRq1sWEvZus6zEYFjjYQn8NtFhMe8d39to7xWxk1mHdExyy4C2P6Gbj7",
  "key23": "GLK3fpwbNzpKw8vczMdAZrmgioz5U4YPbUMe69wT12khxT7BRiJ3stDXpA19ew5Uta1RZH1F9Y3P1QpYeGkphHH",
  "key24": "4CHQobEoeEXF8Zy6J4pbxBXPG8LRJ7fFUeoDq3K31A59ZQbqZnKYukVK3S8BkWxNmNSu9hrKK3wAnEPTefq528zN",
  "key25": "3yLK127BadUBRgWFH33ZrGnekUfLsHa2CbDENotTTQuEjTwGcbBER5YwG9G61wCcxy9LheXq9uczXwr6tUnZhVeS",
  "key26": "35HaYBRNvpdf4mKdqeGZiAPik9mVQgNb88cgwxzADucSh34LaFfPSgX6Mkf6oJERSwps8gjULKqofRDWcVsziLhS",
  "key27": "dFPg2XvWKTYzxsMwcC1fY2adaR8nfJpbSkbMSbeyTpM6nbJ4xe2nT5WFc5JkCeB1D1wAPcRcbmK4Kc96iu19hQi",
  "key28": "294j7W49BDzT43A4tG5rHoEjgKkifU59A8nmDAchcx2RkvSrNzcB3KDdNjo16X8a3z9qWCaDMsku8yQizDTFMXGP",
  "key29": "57429kSqercLfZavV5BdffFGEYyr2td9CFRjUf98DBEMf7jekPyY37dZBigggDThBvsafKPc31wYXjm3kC8BhH6i",
  "key30": "3oo8j2UFKJZQbbAW6nAyp3wYkB71DKfjxy65KmyTnWmBUoV8bF3aff9Xun1omjjFXWpxaeLq27ZPkXPn8qyv8eE1",
  "key31": "3KtgUGPoBSCQEYuzkNV8uzxsAaBQ5SkopoMVEwt37cRu9gQQHaMs5BtpJaRPLYXUU7S6ntU27FHS717ycEbZkngY",
  "key32": "5pBQ1vv3sn26kqvc6YURYL1KNU6dSS8hiXy7eQjusCWDSLNgRUSuVZCrjodxy4ke2bAMFVNKqekqF8jwFLVJMZKz",
  "key33": "3D5caGHkxz9sbfisrnKkR6qMdKmbKYgbYmcy4xAGG678HaubN6svVkTWB6JCPe37jERy5PsQe486JMd8UFqmUBiv",
  "key34": "4Pj1YNTHWYmGhunvTsHfpTYNcnAsfvkQNwnNzMKp5wKQG1ZxShBF7Z2Xa3LvjdYCZ8KLg47wNP8qbzULEUticfbk",
  "key35": "439x4RL6PNi4BC8vicgpUFM5bAAywnFEdSVvSq9qJyXPd7cbuxFWV8xZGwkwzJFH4WaUbwmJ6uUnC86ZfqZpsLsh",
  "key36": "2Rvy9hRDokDbtym5eSnJFensp4B9LU2jzJ7BoYKtZaKA8w2ey4PcKnVdkdcw8KJj56Vq7eCDEG5PfMa176EHfekY",
  "key37": "4epTSARPv3GBeiX25Lm238QgFSq1BkQanpJp6bcLD91zUASVvL1LoKBVyJgBPqu6cDitYC2yKUwzqgN5mtB71TSd",
  "key38": "7Y9KojkKbpPTGcjAUtts23CARQunpUffcrW9Ei1mncZ37aHUaayMewFzr6qXAoQbEro2JWXk5GwWX2hjopY8tkx",
  "key39": "4iTiWfrQPib3CqDcdPDr3A3Txg7hvhbjQNmmK5ExivAWENUuKJouSDocY95NPXvjNX2m2emStMynswJ274Yh6Kt7",
  "key40": "3m657D3FDR8YPPgp6foYy7An8839Q1jswUSNbNUhVCYxRMjNrT2CZUDmuSibgtPR3qGiKEy7kYCPLycXuScDVnaQ",
  "key41": "sajdouyuFeqQNmpTsARMvywpEW21NrWJXT9qJnYXbkS5F8fXqnpYPeo8fWCpotR3zW4p7e7sDSdJmWVp9imxQyx"
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
