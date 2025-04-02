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
    "4anHFVDLMGaHGSVpdxQ3DhoXNz7V5AngVxD59ysyd8yJM3BnDjkz4sMyvsQp6o1UMnUd8xyunZCLaUfFDCq2bQsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jaSyQZShx6CQAJ7NKvmjZZ5PTEftCB2D4CcPxMDjFFHwRnxQuuSDwB5kFDwCqmtSxk42K1kFzb46AwJtYXTttV",
  "key1": "3KGnzYQcJnTQ33vQHyEJj5itpWb3DvWA11PTZwfC3jhv58h3DB81ZgjTP4Q3LRZufGYSKsGPHJ3N3QfEcuHbtAGg",
  "key2": "4gGCbzB5yqCi81FpLqkPaH5eySvfmU62hooDfDtQNX9iTFU489KgjczFEydVzr7zdHpwCAfPunMEzGrw7Fy1BiGB",
  "key3": "47foHXVpDxKDeqdyR3CL5ynmuoZkdjJ7qvBcgHGbLPf3dwyuuzMEJnghYzYJwfdFd9zvLzN1VegFnn4wEw9X2bjr",
  "key4": "SaYiauzqjH1CW3CKHaoV64PUV1zR3No6rT2hRk8KxgsouFxHqNuzfYNX8cEgY6MtsCuKzrnESCHv2b8P8FCJ3dt",
  "key5": "2UsKG1WMvmywTCn65onjEAdg9eXsjKPGQSvZkhR7nWfcVHaMPavmAh8Pa8rXLPCycAnm2JjT9W1HcLo8u4uJsmpt",
  "key6": "4FHcbyYeynnXZggdfgDGYq1Zg5yS8ANqW42iS49CCpF5bZdip8HWgLRZY2k171b3hdJKKrZ4h3JiKJsDnHkbmY36",
  "key7": "3PDtgNY6A2FbgJvE6EkscP8ddN8KtomaMxnowpiJqByGwMJ8dPM2WNqfy37uKc3CE6n84xn2aRd8iNbTZUZ4p2xK",
  "key8": "2tbCP9MSa9NQqVdeYbCFppdsPZMFZQqLdRRH9p7krFnGAgUEYj1Ti67AsmabXATYnv3sKkn8uWtXr3P8D17cCq7p",
  "key9": "5VdHRyWGxEYJCv8WzTTJqD3qc8i8eBDSmkM2Wjp4DaJyK12xzzzbyKuiAn2YxBxgPRzoxnNWAYeVu3nQxWFi3FTU",
  "key10": "38BRm2H2b5QX22fCEbappLFJLmhdNUFpQx4jKNPGGb7w6xKdPZea1F3bwTGYXGVnJsJnp2ypYSH2WVVTL8SfBvQc",
  "key11": "57R2vrifm8L9PVRYDVYWXT2K81uB8gQ3shdwx24eoTnBiGR1vwi7dDYuRRoHQ7TD4ymn5m7PqArhVxoTuxKgf2RX",
  "key12": "5GnkAdFEBFVcugbQj84sa5BndVFD5Xt2Q3YxVL9116xZgmCXZekRHq9DdZ1W8jwZnrmY66wQLewY9BVemxetmcG2",
  "key13": "2J89uwuCwYzwYq6HfmDeCPt3ESRd9itrhrSvMWsmjwkuT1ztstoHHnSZDMU7VSYaLzdwWYxRoqAknZC3e8gfgxK2",
  "key14": "2kyX5CckB4VwA5CwihYZq3M9WDjkm7fMX9Pb7S3HZEu26rnttG5K7By51tqUJQdJkbzK88xpc1p6jhKNGmK6tHis",
  "key15": "5iWejyNv3rAQpdv6wQeio2TugRozPeDUgMwwoPpVH6a8gNcRgvxxzaLYyRQdCsaUFB8MEfpLk4Kku6WngBAtx929",
  "key16": "22iu8h6F8dyjo83HKpc43L2CPFwSKoF2eNJutnvg81LUiXV8YTv9VCxrVgMd2dLdXonrmBc6igo4bBGBGxwRhKdn",
  "key17": "YMgrf45BVEUMxY7aJRYf5RqJKFD93nvyXeYHRfeyLtrV843XFsscFpvyRrRRaK6jJaTdpuV5DF5c7yjELpCYZav",
  "key18": "27k8oh4FPbWAYsKFmrQGTR9DVkQnzgT78xo5zNRZ3J18K5kNVD6FEzGqd6K66taVghoAntiQ3gvMZfU85gae5iY1",
  "key19": "5bJtcL9VBDAAPHdQYd4q5apBYfmXGWZKZ3LBvVqYNBE8aywyvoGFrQFtfdDhz63aCF58AXDRMi1V3j8ZBs8Kraic",
  "key20": "2qnG6kkhueuyoM3r3ndSLFcjc2h18oDTV2RNqassGRFj5jR4HNrrsEfF6nAVU5bj71KjznGTEqPpTWJo6sLFscRH",
  "key21": "5ErbJ2S2JAbbvNBvJDqNWLfA46N87A4ZvT5TRmDZ4oeFED5zSkRV6uJfextXgUcoAvxAr1wn9bb5bJb8RVBiPzu8",
  "key22": "49LhgJQaycxDMbDL2UqoSX5bFpEMz3bYoCokJiaAwcS4RmWeXDJqDn1oGyQKqRFYfdMQ9ZkuwWqkiiHRBU8Xrc4d",
  "key23": "39y5SZgjXqJzvUeTEXnb9SLdr2N7QkXjQgWunR6AiWU8gEi2v7qWSJEkc95Becj9jqNwwpyy3rgenQcfeCFTQKug",
  "key24": "5MdBHV8sF6AESqXjMjbqifqqNzAbYmDthkehtUKuCqwUypvhkXzARorVS3cn3wT3UADo7vtACGD1gzEPrEieNuJq",
  "key25": "3TD6FzSATMxKTKfh3wxsZj4irnxb2cRFQbnaDETNoL4pBB5Wvuj6QxMd66MhAQrPx1xo7m9yS3Xic6fNCAQtfLVv",
  "key26": "VnopopGpBnFFn4MQBaPyFtpn2hYNdykgM2mwn4Km1yr25cNxntonT9Hawgqvh1qn8Z7FjgvTYePhH7Qfhmcnbrn",
  "key27": "5d4Pe9bY57dQt6WatLwVSbJ8iL4PHhvnf9sF32UmLdBR3zjomqFGVNjGDMycFC7yBDZxcsqGjQcH2CGti1wP1tcK"
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
