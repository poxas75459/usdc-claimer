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
    "43ZHgjaTTVtyGM5zCb37LunB2EDd7PtCwouutc7Sx6fGwFwGAKq7FE1F6964FTcXYw3J1MYuzjhtE3tRt4Q5PRPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcNV2J3RVsG7x7KBd5SazPbxxbwiwZyuyKZjqtZNvYVWPxw7G2rPP7MpqZtV7V6YNajWiE6SfMr764B5dtRRPkM",
  "key1": "5gmzgsC9LLRavaEACrcHq2PdqGyWy8xg4JJoFBR7KEZLh6fSBZMyX2rpeXDrmQKx5zHzXQcQvaK912SRs8ovdkUQ",
  "key2": "24EpskhG5qzqocY8T9ZeHwgz5bpxeCaCTQwyQRxKCEeozPdxUqa7jQZNadB8xpP5kKr45GPDgbVgM8vgRmL3grcr",
  "key3": "3enkbh84KHuUwNUTpgXArw9JGC8Tri2SyUSQA9nFJp9QyNrm8ivdPFdyJ5AVXneiGq6oy5GEihucaeZoRzsfuAZ4",
  "key4": "2xhmusBdLCbAzWxdHecLsdnvoLguKnthtnKmhabiNWBSRWkheXRweN3vNmSiXKUBFt8RzMU95pwvxaZL3BiDoYVJ",
  "key5": "59RBGcmV1VALF9DgcgPu5Zs7JxZMBFGwynxaSY9SE1yXEJ28Teccp2SV1ZcaBumQPXAFxq9BsaEGftyTP5bjp9ex",
  "key6": "4vMEHroCkS2bptpEEX4HzQqYuAUBEWFhpqCMsDbQxJhphdhBWUHQTpVbjKEBRxVd6u3CjkCNjVxkcKxJtKB5xsCC",
  "key7": "4jSGwdcGUQjurNmKicoLFfnJAdg468ehwCkgKod47oJySvkN3WH5N31rhTzyLqgvCJmdPJscA8Tiky7mMjuwE1C7",
  "key8": "4Xz4p8sHJ1kCyhasok2L4pxtnKFXiLoD44M3aWT2zbjCAEk4dyHsbwMtTuzUaJn6fGGdwyVFogh1Avp2jRFiqKPG",
  "key9": "5XUVSgD6FMQMa8qXGXHs3RwxhDkq314jmhZFj721LdpLYqZoSFTsLvzYhVuTLEtrdwzjQtkTVNsYuRMPRZ44F1ip",
  "key10": "2WVR2CdWVBXCRutiyvsw4UPAxEA3YjsKB4ZrGknZaHRQGwZddzJ98Szwga2fNjYWr8f2i9LgYHXb8o6oMzrCTx1C",
  "key11": "3CXR2NsjpaiTdJThZUgeJc6M7D19h1NGTzDXWwf4zjrBr7YWnQuV4SyghpxVkww7EhtXxsZZAM245q91HnQoAP59",
  "key12": "4KJTHbsxu133tubFnCo9gavvMHn1Rfo3HzMCVFgcavusfuRPYNMXU2M8bhNYqM2xLk3Nw1EREKBxykwjQ9AZ7Eft",
  "key13": "34aonCuJA9uc8DGYQsbgtvbFvVGYC3R73ZayjujWwcJpY9ydZJmHrzEontt3nGuyZ2VTGGQG2ZZ2KY5MBXvJPCmu",
  "key14": "2NJgRLGgfjVdpEa6cL1d1aGj5ML88Xmys1GNkNbuTXifucgwv4Rj68L3yyU2kGsNDbL3UnHTZqxABx5Dypib2mbs",
  "key15": "4S3fMJ7V12iexvHLMMMKY26HnqoMaYnYTDAxpKPiBrp4LhKj2ZnZ7MXAPtnD4wqD6pBbf8xBVDFNmes9929koEim",
  "key16": "4USwiQqeFftVGsbAVobpeAYpUUWZRh7o6NeKGuxzaBUxyQYGijARDjZaAEcT4217LpKfhgfNN9naMdDkqnHAJgDu",
  "key17": "2WPnwAq5vWHN1U6JWf1YhpuuNKQEEWMCCasGjvoF2tkRCZZJXH1GrmyZJhqcW8BqGbCAMBEM8P4b4LJxVZ7hu3tr",
  "key18": "4AckYnkAgXj8Y3mYz6MJV7BbeKr1hnDckugWkmKhAZ8Pd5qG3hobEMncaJXwDXUw7MA2XqLdc7dReE6q3T2AdzDU",
  "key19": "4GA2dTdAPtrnonnvKUBr6Wxf7KX78ZGVbQz28u5toUpLFvwuhxW1bVVweDYA2y4UZa3P7XGBQBFksYTfqcG4wiB2",
  "key20": "2wMG294D4RgNp2j3Gh6M2hpk5RvDob7LTdLvYKZ1YTNg84momNhMho4FoCuHrT8myWDkxaUvMNpzC16LT7NTSpXP",
  "key21": "58PgkVNoHx4XcqU4AFirSrXAqfiEsrdURhXGSLKXSSFWf6LJGS3HFEeP52isd1q4vzmuzreEGrs9Cin13Gp8NjYG",
  "key22": "5bxqdAfpd1T4GSQK73CDwTtyVp5c5wsQopRjuhuXLQ2f3DpBdf6sApY2swCAaKi1MgXXTpu6yaKoEHMjVxoLUYTf",
  "key23": "fjscu6egKi5MWMreuKJ9yQf6UiTzG7mnaZMfkFm1EnXMrDLd4Zsyy8px847Zzsfm5yiSF2jAj2bGawZPKtkgt2r",
  "key24": "TkHewYvbcgDXA9nmCJxFmzqVUA9qjfRrGoYvQB9MdgcfaPzZaeMnysmu8YtXvuByJNNeEr9eTdvu5n9V73LGYN2",
  "key25": "3NS1j7JZpS9Jkqrf4gti4UJb86t1qD6UHX97ZBwhb34Hd7JbrWxqqtBBoFiYQrkjXB2HYNK19gsqdu5xngZHoEQk",
  "key26": "34hBKVZfwZNQyhdwCDDD3mnDgdEv1D1FVTSZS6PuJja3L7VnvnLzFYuf44TZHEQFjmPyU4XCVhroNXCiX6aHD3tZ",
  "key27": "tfG3hH2HDpiqusAyKs5XnGGAmMMsUXZLWyUJWyPybQ66zWhCQNYtxAt6TzvRMitp2D741scszbWi5TvuKPFNVwA",
  "key28": "4eNckneFxJqEE4LDYD2wuC2T3nFGrkK58TSGmnF5NSJcrCqQxuKaorQHwgR4DWisiBtMVQuABHnA3npk5ZjqHR2t"
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
