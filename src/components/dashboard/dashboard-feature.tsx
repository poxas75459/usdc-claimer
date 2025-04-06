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
    "gmPv7zBUepjnDKgUaJiS2PE4wK6p5tUZyoQW7XpxnkQyP7RNC2tkrqfWR1TJMf2VHU2kUyQgG5dVe9Mniin1uhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YpShbNPkCuMZZaZDU2ETbhjsAXarT6NkXuVhtuYJncHXzayyPfPfy89e2eFqa7AKrz7E5AdQVjBJfugEDcJuT18",
  "key1": "5sUU7XhRkMNqyN4EvvgbEPFtPam3FAi3Qs8zcMXs6GZsQQ6XU64mhDLNy5Vx9u1bMSdVHRELAfdJ1rVkxRqn5CVa",
  "key2": "3XB2N96wACD41LoqjfwJTiyJEXtpTzntTjg4PEscmEGkj2hyCeNZDhiMyxuANQYSwoQQ1cK7h32ogr1G3ePqtPta",
  "key3": "5DtFzMg7mtxW837X5wsDYLoVijhKoQrbmwuk4bdauRk4FSd194jpoBsGhVB7k8Zs4cNFPT4DNBtLLruXgnxvCQrT",
  "key4": "2ukbhzxFubV1mYcz49vAzk5kefB2EUC9xTC5eS2QKMQb64ji4JCi6PcegGg6co3PwfphUKqKZjagZ3qjPBzRqyn5",
  "key5": "2YJK8tv5v3ZyVZhwCcuNrqUxjqPLN3UezC6eKmpTK1Lvd9FWET3qVyuEQMTukJArWH9zBfZKLAHHWaZbYRswzFcb",
  "key6": "3KzDDLsUNhNqSgnPPKq1sGHK7Sc1UujBXAjjTUtMVvVoMyrYuYgdBWjJupaLSDEqWS4WECkJ365W7qgEqysaNYiG",
  "key7": "3QGuoGRk5rsH5RVQ3DBFfkYHPf49mtPzNYSPbXDBVvRXcJrCuB4U8sQkeKJfUZbQqMGBcMi4M6kCNRdHgdeQb8aV",
  "key8": "35EnRaBa7RdwSvB6XVQQiMQaLMAeqpN22eayyT6WCP2aDsfdGQsvH8K2EvukQZnTspYWQDFN9cR7hBv8HUH76coG",
  "key9": "58rNmRGXY8yW4EFXineaCyPJabV1WnLBosFroCFNccKyeYWt3CgH39PBPRdvgRkWCmgp8Tx46KyBFAZEaxsz7Ms6",
  "key10": "qmAdYeo56nNFjgmygDvS39vzev2Y2L3JM6fzVDaCgPFfRDRTUM5PvKmM4tTWZ5BAGqBKBS97XYAcmX8ut7VpWkJ",
  "key11": "2reoycEWjWxwiJE2Yugb2RTxjGAN6qU69LCwovLxWS47gbN5McaXs6ZnVYH1G71GmW5FG1ApF9yuRn7mZaxrpe3c",
  "key12": "5Be8XsPzUEUi3wREhXz1rFGnvRf54xnG5izefA3fzJtD7wbPu1j2m2iq1Ve42k5FuEqQ1bdAQKWLEST7pdjAxDF8",
  "key13": "a2Zk9JwqwPuzzpWPBJMgp7mJcATQdtnD3L3w7HSLkJo7qZcoo34AvLER1gVjFxkTMqemM7Bub9GBc6VkC6b4m6W",
  "key14": "43qXYKdD41nnznaVRQY8trMzDLd6RBGqzKqWcE41FipHFqtSPbM91DDH3pSeBxoM1tRBxuSk3RSrukD8gsauRjm3",
  "key15": "3UJ16X5teBVGhhFZffJbcm1LgNT4xphTkhMb3vKWwuhvhntjtSD66Ym8jrNdkCqrwJMJvYDUeGSwsDeGMMBv6xLu",
  "key16": "4yjmdyevsFMhJHa4BuPbnYW54f72MXh7h7KGuSeEWMy4kq7R475SBMG967FZe1YDmNehMUqtBaP7cBwPX5rMjKyb",
  "key17": "3wUVwVk37dshHmdg8RQ67vTiZFEC1S2RY1ZZpxsZPw3y3cXu4rxWnuuqeVCW1BGqSdqCX4GP9SdReYEFBTJnmV5g",
  "key18": "Hkr2vRDppXpYjsRsZwtRnsTN5wa4o1nhKTqX1Au13WNihst61BJpYrtd1JA3L9jEDHK8ti5cH4ZMkX7Pu8ncLYn",
  "key19": "PZpZsG9p8CDmyDWAPZao1Th6grmKgHKkvqdLuBHypAGWXGmiFiSqwZ5qjE47ZNe2pyCpCqhCviM6AUnNapYX8Gw",
  "key20": "5Jo1CBKoQVqZEJfFCZR8Q2WKtePA9RxqNPH4QydiZ5n5K6qXBgpqpv9jZJ15tbon4MNPBZHc3TBD61XXZvnQYNYm",
  "key21": "35pHoyQ8UE5oLmjBqRjLg93bhkbxtkGBhuqYQwxboEdxJQCakBg28FggRnrrcotCtYPADapfsfw5Ws5VSRpHPNK9",
  "key22": "3WBSf7VEZdMcjCEC9dxL5k9W2dPajckfMZTh6Rd6SmAxqZf87CQChrC9NK7DZpRrV7MSZR1MyYXf41JEF4pyyZAj",
  "key23": "5D4uGFxNxPj2FkN4udz7BztCUQhccD1FLpEqkxddxXtq5QFGhVq5CbL7exjMf1pNG6oBiJNzSaecwaWBSqBYXESo",
  "key24": "2paWwA2JKX57ddGAKjEzFqrWBzUZ7RnGEHswreCsKQVZGsd6uYrGikpfWzLzggt4CASvhekyEDi4tPSuisMU5HtM",
  "key25": "2CngHwdaosvRSHM41j8Jdb2a1yA3fnZn5Y3SxU7vDQJPeW5pKika5w33nKtKGUb3igYft3eDFpdL1jVtGdbitYDn",
  "key26": "FWhYtCNnMgAabg1Pd5m9836etHjSXPNfn4Z9iWYLyNzNVaUCCnmzBk1Kcs2pjDgmp8eHshPipmmJ4m8tvojXDwG",
  "key27": "4gYjgRhSyouVqFi1cpgaJ6zyrJdfxgY5Hw5pPenG3jm1ffYhhWcnCrdTWnVLjKjCLMiiqZRAvtbDWsKBbxFCT3vz",
  "key28": "3eUPvHfvyeGPfARmKG3hkM569HRcLrqjsSM1JEZB4uaT5ub4vvmyEtdb3ukE6ksYwwdoC6fY48H1cqpJMbR1ij3z",
  "key29": "5AdK6KLr8Y1SXiEGD4SscpXWsmmgauXQdRQ81WdNQnfxaiQEUYJiKvHHE9uDW7ULZ88cdwXzg7vW6na9JegrU25i",
  "key30": "3PCNKbVjM8zfTkJrf4FcyzPfpnBTYbu4oJaBhquX4kSFq7TkckiSW2BRe63TunRDTdLAH4EJmqzcWXYChCtMByJt",
  "key31": "2C5XRhFUVZ6XPCsGi7fb8tf2qT5haQ8RCEDpofWsj3g3xJoa66RoFL37rRjCBooeKZfT95iMn8DixBRkjKHDMdFa",
  "key32": "3rJaY1o65ey1gVJUdGXtEC3TifGPi89diBayY9z7Z2zrp1hPFiov3YMS81HdGFD1Hhz7tCXrJpEzZwxnYxXMzAgi",
  "key33": "5hZh7W12WQXpXxK73mcFXVjsF79Zxy4RpKe7TppAJnq862DeV83P3mgBmwj1GnG92dPeCKNMnF85KXpgDBkzVpYW",
  "key34": "2HBBDH4jRogNAWgB8naUcKnTBdLawGuPA2uex66gvZB9MbkRdmqui6SxpfVzQLSzNpKYxsg7SvKP92LrhCEHuv94",
  "key35": "xMmBvyRey41HgfsccotKyktERsUeuiRjMDw7CdyrpQUtb3FS1t4fW6LCMrppKTZ2gBuWAtz4eGAaRf2pWrd2iy8",
  "key36": "3q98kD4rUFDrPUoLwnLb6o4fjgMSqjj9jBEWC9EQwDgNB9TEeqXqFNNKgcqCv1VWKC7cujenKiSkHEM8iZLbK3L6",
  "key37": "5w38X3MscamcrGsELnoHPw3pFVYa8nXPLRj25G1rgHjNGtYmfuF1QNiSoL5vNRiKTPEs16vRCjqKrqXk2yvtrnRv",
  "key38": "2UsxtMCTVsMtkrf5YxuQ38o9Wmgqvu2xJCarBAobhXxw7YWxaSUmNBw8Zxhubme5g8NgkfPmJ93WrMYcMPp1cYLr",
  "key39": "5aMhiYaBzzWnkBR9mAk3XMVmwqLJKcWyGJuGrGiAnYZAZ5RXZCApWdqKTudJuxd2GmUpERxFxdHCcVtLd3c7YTtk",
  "key40": "3BLRREwjZa9Rs1D5SJK4vVbpvX9YreKPjoCqe3ogmeQpDWssVgSpbAzBW56UDupbHYRLSxKm7Jj3hwh52xtAnARK",
  "key41": "4u3aq3TSc2eLpC6k1ECXELkymfqsLWS6W3uW3vsygVe13WPcUq6mLSw1EsXGwgZr5Fmw4sPC9CxVUutSNozpYTkL",
  "key42": "32K15sZykLhnMdzZJtWup6eq8ewbCQSAHcGvnymA2CqznPWaPESNyPYW8dE1VEK67YrEpwU92wvd3YuCgTs89T8g"
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
