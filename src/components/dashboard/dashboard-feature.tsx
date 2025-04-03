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
    "3EfPN5cS1bAjdp2A3mBrjd87bdjJLF27D3DrXb2MJzGyvshmWfYS7K8wFKWhzMdm1tFKZr3KpuztXPb4jvGU3rYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CacPP7HA1fgpAV2EbxjPCaPrYWBsB7dDSHd22tBBmszo2Nj2cfzrMJUoyfMD9SEg5N8dvLXvixXq2wBrT8edwJG",
  "key1": "5gGGVXFAefni2TLv7j5AXox3DMTMmHUynnTqDeYqAbpXFMEnVrFMZAD142216h5CNyFpPBS96Y8Z7sTZTTkgFib",
  "key2": "yU7WPFScCBqqHkW2cgGko34KisXgDKGg1cxpdzxodRTkK41hTs4nrmRqYtezeWGaST3BPVCsHCWkGYuKi8g6QHF",
  "key3": "txRfuZCzfg4Yi9aGPPP36Zfcz2Nx3Lm9zYgXmmkpoTTqjShXBRSXDaEDoYqa92EZY7fSLrBFZ5Lj3wsbXoBxxUc",
  "key4": "4dw1KCTFWvttMo4dsQJYT8FXGc5L1vRmB1j1DmG6oMekz9hQadPRJMx5t5YgDxLH37DD1u1tiXcQzpggDAYEKVt4",
  "key5": "5o7svSyADtK4GFZDR2y2wZnfb5JUukpczp3FTDmdJPa9ksa9sfAt3bSWuvgSDZRc1hTbYFbC12FhyvoLZAvSFUFh",
  "key6": "5v7HNLyPV6qkDy3qDfQFjJ7kRaMMdQ92LYBfy8Ezk7BjuWvdi1VuyopJ321MVBUTaczn8c4Qns24ZQDQM9CZKJs1",
  "key7": "4WkEunMtLF6YSG3Enc41jbhybfDKydsL8H6GV8d8z1ZPaPdE12F7nT3L2DyA8JL69VxnduBB4szeYq71KuuuFew8",
  "key8": "38hsKJGdbzAwVVGr8421vUf7c5uF8wKLxfMvhZHx74EYFNSCnvZuTbT3T2EGsXSNncBHDWZtoJBgQmWKL31UDj1f",
  "key9": "2spVg6WQ6YTsUJVAoxN8v2G4LQUm26HcwBkNGSdGBHsjNF25FnCth86e5QEek48yE3PeyK5bQv83j24rSN6fL5d3",
  "key10": "5kCmcJLarEz5FgYRkRuDeKpPjn6gNXfQLVYwVfV5YeaewsPBg3zNHtyDvA6UsscgmqC28zb6tG4AzEP2tds59iZH",
  "key11": "5ypJ1dFe1QX7ceLeHLPZt71c8KZnoMWvggBrp3jaBYUDSHXYd83T28sEYBKHgKPYTbtt6cPnKWgY6NPFoVomDyu9",
  "key12": "2JiZTSmTeRdtTUXigdcsbiC9M9fk9gELWtYC65CNrzA4VtiZzfuVo7pW4681etkk95zcjQW93tbQB7ds9DvkVRN8",
  "key13": "53FskiYZsPJn1BMG1f1LdTTEULzbqGTCZrq5oyEuf3sRtzKRAaQAZovaL7feetKmGKyGzfCsS1zFRENpc2b4Q1fd",
  "key14": "3uhy2DSMS68DHWpp7Vt3d6Zg8Q6jzPWam6EtTnFA7pJ2akrvko7K3aBKNhNZSzQD2yhRFHjYnsXYDpTSz2Zh8Jfq",
  "key15": "4nidwQjBMWQED16cVwXzXsschmSZyf6y73X2g6kHuHioU3LWFUkqcLE6Yo3gfoqBD3cMSasaRjcYJRVJjJHzV9g1",
  "key16": "29nHWMC42GGofp3MtuuxkZkoohNBn2eNiWy39Gt5r6TZYExp36BbE3QdtWp8bmEEK6DcLD6t1357TRs1emqQ536M",
  "key17": "5GUdKpvJ8Y9U4Jhv4fNip18EwznePrGFrMRyBtVS9GEdptFcEj4QobT5EQSVxShcmqhMyLQinuQyJcSYc2cpfN8w",
  "key18": "2m7mmEPX4uqk7rBFb9LgYwiGiwjJjiFZTnYJDSZ1YWqXKc75azppRGDN7wXauuKbhUtm8xqG3UVQGpRw5NZ1GypY",
  "key19": "2q1z4Cgzyyd6jTHmcK7MQM6FDViVEopczUXgcSpXgRtuwHfQQsGCkkUCh3pTd3W8cCzExohdJYTQQjcx6yaovM3U",
  "key20": "5gX9PYbR4YVcCYmh4r7vDhVCX3WHCtro1UYLdh6r1HTxri5SK1vTSTB4YGnZZocX7nKvVhm2vsDVmHBk1RparGuw",
  "key21": "4SQKes3XtjxK12BcfskAQScA5d5KB9qArwQK5KRa63sk8gHBHxEGtaAgLATstuEsVqihWqVuYKQFcqMk4ETRFupv",
  "key22": "u3gJ1wqCW8e7eMYUo2yjdg2CHqUmLRzAh8unbC2PhxV8fs3GE6Bv8pWoeMNzxwEErvpF7Wxcqoz41Jh3o4339vX",
  "key23": "2Mb8Adk6e5x3RHvUpodSYJ28wbZ1ggmC316gCq1M1t2DSC6LF6PsNAhmYAb3upfyEGXqyPsWZ8B4yuXLAx2SmndK",
  "key24": "iohkL5FRduvDbzaMhg1idW5DaL7AfB5wtM6h2wv9FKFq9icykGtDaRdsfhHZPLJ9zxBy2Fn9mcDrdXEzWmxxxGU",
  "key25": "3xUnT4Z2i71oARk9W5kSnMvqrtyfJcVwjuoaePhWdz377BVZD5cNio3y9y3BZjihdFup9YKykrvUL4LE4G3B8vbS",
  "key26": "dv17fbxnqRVSXJHCn6MznUtAtAJqMP9LHicb78vWMMLem7ZZAeH9qbiqfb9h4bcHrbaysEkyNHXp5s8pv9bHvk8",
  "key27": "3NT9gznaXmxGxX1ehZd8n1WXyAuYSkupfhrF5dum3Ce2kCeGv5qoamLEWRiYeo9Y4qaME1Xk9ivUkQkTsBGNBNE3"
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
