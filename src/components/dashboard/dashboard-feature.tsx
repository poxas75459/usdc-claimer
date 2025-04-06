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
    "aXCPrEmRCuCDuLATH46wgr2Uyq57aPS3LP2R5Ew6BSKAMKPfBQps3q64NLg988xN2KGxtuum9k1etZyzAwff3jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czjRrYB9V287dsTwZvDC4khwyKjpCC1C9hLnhJxnzpvuSvJafqRFEr6D4iUEgbjxGcEHHbJXeGXLYC36RFMVsDA",
  "key1": "5ZzLTNJEG7beviPDxN2hPLbXqwx7FmRWdXouv7oD1YDTPLZVB9EZShL1QT1nr9hkVxz9ThbyLdzBXbV6yUVRrq2D",
  "key2": "29CpkX929NRDiZdxxvArEv5V3wrwciTVjVQEWCN7gaEfYRBWtQcgHbWSZhUozcTdVJA9skibpd6TFjmeuhTWxpHG",
  "key3": "5v2D5Z4tBfdZaFUpniSaHogksDVyLp5QCfNHaoj7syQ9BtB9D2gxZLTnYsE9CktWP3Q49YJmSaJ91g2gfiXtacZB",
  "key4": "5kKZHjmto68NK5w3FFrMBJEsV4yrkiU6siDWL3a5Wove4E9HvqszJPz6Tom9fTR5gdr1S2Ta4CmSxXJwtK5g7LSw",
  "key5": "5mEAt3SB3B2ThN3Gu1g4we2rAafnaMA1MqZo4SiXnd6QnGUBKLdaozzYGiCzt629dSfpMBw6ySqgg6BdZNFqGHPb",
  "key6": "obFCmTZyYRM7WXuUGzFyxttJfrKjAs7JUJu8FpkHSeoqhMnpwmW8gPuRMPEzw6JfSxnosaRWgZ9bksULweokMhj",
  "key7": "4MqHJudZpWvbKQCiKSFWbALRDqrKLP6PS1q8Tpu2r8Gpqa2utfByarmfddMpbGXbuTbJwezjY3UkKQxCdVGB1HjH",
  "key8": "5hZYh4sQEE8jzaTVE9o619rQsPgx3VFG66yDfr2ACyCM7LvPMVqKtTDWctje8oKQmDWKwcbhw2z1H6kh9GbWDfMn",
  "key9": "5aJZXXGDRns5ktsV1zHvZtNUA1TmA21PKKDLVhmW4M1JGRaxoctZo9LndZQkgNFXbQ3BpTMopSmMuZhTjZpv3uh2",
  "key10": "31RdNVXqFooTWYGLpMncz7uhZbdFpmQCG3hwQtRkdKxy7abARjFu2ZnjLvVMh4BUNXsELTEoQGEY1a2YxvMFmyGw",
  "key11": "MqiqWFTVFoB6vMFzVZCCwgkxP62yy7Pa4Qjy44pSEeqYPgWASE1fJ4jDiunELcyM8or8KWAqdPjsKA9jem5CX78",
  "key12": "2oYRXjr83huB71Df2UwQ6DwejTMcuZ1XET8a8CVobxrqccfEMXfAZXXAzvi4fjv31rPifNbAfmh3ho61sphvwCus",
  "key13": "v5eqENvmUcpGQr8s9Q2CebNAkEyQREY8Ngo8JcKF5mJAhrKVFsvmoD3HSSpA4E2bh1fW1rNcBTFnVWYVGnGGPm5",
  "key14": "2j3mxmRp4EMyqaXnJQ7PhUfvE3NCQmFfntAzKgc92iUmXGPAQ8pHMQbz9Ua83AwunVUY9h4hsvXR4srDwJg2jYFm",
  "key15": "5tuwmbGaEdbMDCHFRQwP5dyDRrstUC2qTD8RiQdhF6xGWAT4h8M64u8HHjWq5Qp3Gbse83VVpfLf65GG4shkgsnM",
  "key16": "2QomHy6M6PEJSfRF4nj6kiR6MDMN7f7cVgzSwa7vX74N9DzVeRDdBB5chbCYgMLZpuFJ9B4GAHvKZWz8MzwP9uLj",
  "key17": "62VZVoQgYowkupzzzSmb6GpZBPXvnVG8rBx1jfDFZCREjrXLadQhC5VLVPqHparUKCvnbbLb5cmTG1ccMWkGpJEz",
  "key18": "3W31NanpMhNUhn2LphMc35bBQSdq9ViAipu5u3sdmBRRgbCBiGaG6wpK96WEVsQxsVBcAVghxuvZdCTmjZoBonzP",
  "key19": "2y1yHep84wPWpCnc935hv4SU4TCVPoXm2uUNoZpbADd8FS6hQgYUuMsj1XWxsbyQydB3XQEadCTW8TSJWgEwDsVe",
  "key20": "5Co6pi5noaeQAznfGV5ufE2iCjfCjmjnGdHZaqdUSA7YBnGoPTanh5ZJj1frC4nN4X3zx48oHbFb7wXoREVf5vbL",
  "key21": "UJnRmLsLeeDjX4iVofYBhWCyVu5U4J5zzHNp5nEKhDzeXQ3N6aKoKM578TtpRTd9qZayeN2g5a3iTbk7uTANoYw",
  "key22": "HdxQqefw7fChDEzhysCDwA7P4WibrUYzrr3GKdGGBgyrcJP3Fq15xgSm2JBmB3mycY5zhNksZrzPDLRroptYjJr",
  "key23": "wCiM2pPSULwDzDrYJxQQ14Lyd7oVnE6gchRRR4B8H7fDdJ1wQ231ogtmSuXJTitWt9uV77fsccKhgSaMpUNVdNG",
  "key24": "62cW8NQmToQESd3wX27n7Cq2VK5MbHLDbGNfroLWtd2b87kyoG31Qx4Nwh82btuw57x7JB4m8DprqqLzEWs4WXzv",
  "key25": "bm8Dp4yngkrhb5PYQvQhXZQaKun44XYAEF8W1mD7jZanThRoAicYtBxpB8D5kv9dBzRmk2kCKPyimYxZJEJrFUB",
  "key26": "4V6kQaLAnF9WpyRux4tbnRsgJGX1wqzCD2R5a8oX8ViBKggr5u8GVhZESqYkKJZvsa8fgNDZQJUd5v22grF9HGXr"
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
