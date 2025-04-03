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
    "429AwdaKDonaQz8T796KRctApYdsKn2uuWzkmRX4EuqyrVsDetS3o67RUY9ZVzWgCNee8YBMg6e6cTvM4hohZ3WR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qcfFv3unwdtthEebySt3jwbqL85F2bC8jgZiEv1aizkq6KAap2oddotsEBTVEqhysbFb5Rc1jaqm1ppBY8M3zp3",
  "key1": "3FX54KW8jZB2XwKFAkcX2RrEn7HTEDcwUWBrko1qTEWqjBVHHV1gGwy1YDdhJJqU4ZsWiu9CAhrzjfZg87mbiGrv",
  "key2": "4WW8e3dh3vsyuCk2jYHqwgQw1viW1pmFSWeUDmvtMvGJow41rTm9cMbpP8X1HZdSshhkymgdkFwhPfENKvzdhhVK",
  "key3": "PbXZqvfNq2WoVJRHU8isUEAqvBuyruYh993Wgcn3puz3Avuk4hNccYMWSBXem4VSpPVDKHNqo7anYvkXtXX7ngR",
  "key4": "3WzC63Z8qvLJTa5ZEPURdm8J2U3y6fbYKLUGbNewa6dnvMK934h1qwyVSCGTNRBdsqieLPTReBjLEoYN1R6rXKqK",
  "key5": "r6onaWu3VgSf2K6mRzbg5EaABEpDXhA3ew81FCtXQ5vUsF4gtEHK64g2Y8JqGifeX1ufi4xfHNryMUQpsfCxeTa",
  "key6": "4zCNE3zFTDHJ5B4oC8zfy6wYwmUkuFSYVTYn9okXxRhUW7PNPxMvQL9448nWJGTzMeyTxT7psPLPktga7pXmE2NE",
  "key7": "53sWZZ61DGa3TcPesV417TYbXhjfx9HJg9Uzg9T4z6QQ2EjcwLzpX95XJYDUkS1PXyznmjtMniCD1GpruKHdtMgG",
  "key8": "xuh1PAoFMzR5fNPhzYq4KezqXuSrsRH4J7kjg1Q9bonzneufCxSppMQmShUdHXC5ds4dnyaUJTjQL9maH2cNe86",
  "key9": "5ja9LcTXee55WsMV8q8YECVERs7BBoAH2uSSw4u91z44rpnrCMr9LoADTU6AUhBDqUDfyw6sbypsXRy8PhuiAdcz",
  "key10": "3DNwthSaFPfw7W5khaQHAbpV4qiTPW42E2eAGEJC6zN7egEZv93DC3tRJF8ZkGsfrqDdhRjagsDJ95Bip8EnDeng",
  "key11": "5TCtFpcfyCZG6UgAwujcDRDPmABuqDeeZY8YVPsTtcY9JA8PHo1jtjYsJcvxs2G1MENB2cRtKMBGAyqJ1gAEE7Zi",
  "key12": "2sNnQcgLzPDcmeY2Hiow1yrUNUvpeH223dcx8eCViK8YoXTFNw45kaSXYqd3zMdkBQ7yCyoeqAktQnqNWumGHmjJ",
  "key13": "22zkbVstXq8WCW1HyDhp8t5VqpSxaA4XWmD2M8nMNFeVD3aWwKgSTJspjqhg7wfYvquL8XLxxYpsujPUSPqTJ4Jo",
  "key14": "5a1YUEq7DJX4cKCXCW64W22t1borN9XzfK7kparm24MjAGA1D4C3A1x2vwk6WtJ6omaKuwksGocqXtHpSy18QgPT",
  "key15": "5Cna9kqRXXotmAuE7MqFa37SPb6ShH36FpccwLcodqH3QaTSKLw62MohXm3dSdsrrrvyGtKqq6goJpskPeqFDrdz",
  "key16": "4J3bq1AYVqWLNh8iBH72H1gyss2amtmFoR7cz7Kxswp4dGAzuMx3yZZFKqHgLDtEnaTWVhQMWfRJBSuZTjmPMwfG",
  "key17": "49Fa9r4oYY9WyPsqMtUmgLhGa33n8SJw3ju7mrXoSd3v4eWwbRM7NFgSEFLckBbriNoebGERjp1AbTGdMRkM8vkb",
  "key18": "4z4xD5t2kQVGUqwrCBtx9zzKmmEbB922t3czCsKSsdyjczjaLWH4y1wxjdsuWGjQyiaxp2g8FHsJ24Q6b5TdVrd9",
  "key19": "4apvu2bGFScwJjcX5u5wpzqv6RDQaPUiDdm4NDz3G1aQ68SZgiqL6sKRMfHVz7f4WHYWxHEKjKtv1RyEKYTMHxeN",
  "key20": "428ENMidyE5T88DQBZssZBEtMcqac7SsA62TUdYM38bYz7ypWB85DEvEGP4JbtvUhmtWA58n24aCrdXVivxpB5wp",
  "key21": "3LXRm6r3WDVVNfmaUU5PUqtAiioAzpfoPArFCcS1EL6JELbBmxhC5PiSVK2jPmM5QpAcFEzKv7obbU3M93YRnUhY",
  "key22": "3jEz6abHtHmiNXzSf9VdMkyuE1MkrULP6DLxenub3FS6aWLZuv2Xg4VkdNiETLzdqzmGNXB4FebbXDSbTs7f3ucZ",
  "key23": "8PDnU7pi29agF74rwrLmt6PvCu7CWKLj4KPH89HESqmXS3vnjq4FwU9TDuFCRnR76VXHrU4UQcyFWCgTxRu8b2u",
  "key24": "2nX7CiSXCek8qe5C61rAXuXtiB5yY7ssuaiN9PetBgwaWyWiLLHWgRYwYd7MULiF5yB7LYnDL7ZKkSweRFFqWx2D",
  "key25": "42ZMGVnNXH9sfPG6e5zXEJ5mAFAGDoCTHeHjHVr8efEoeaCJvQs9fKbgUDiPyth3oz9oZkk7ag1vEq9WP3sERhw9",
  "key26": "b2yaKt2q3Sk3YEiCjHCiDrdAXuL6jjhQd56d4XRi4FVPFvDN42UXj4JLaYsB2NsBBvzJU196CC8zsvTS1uw164E",
  "key27": "nXpCWH4ehKuuTNmDvjbUFwrN14FdHGcCh81NKgWLiCuMyX6grEwrfq27qCrtXLy1fgARCu21hrqpJT78U8zLoEq"
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
