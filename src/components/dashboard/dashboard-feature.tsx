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
    "4gMKGP9WcTpVcsTrJBSiRKJgbNdd7QShsMLgezYrnSBqh67hsM3REFAsxhhv1KAmbtPgYaswo7RQcv8rezrEWc5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23AAF9Rcsm4iwxiTvmZZQQKaFGqwiFDnNnHgXQuB1ebJpkRXSEyToVqnNZwgFZc8m9hCreQJddG39HJxzqQRUFi8",
  "key1": "DmM7o6HndxACntjhvKY9cZgHwZ8EExJTrR9w475sM3Hqwhe3vn2jjE81gtU7QnUhm1kZaqxzQojt9VfBQym4ejZ",
  "key2": "3jXG8ZWz9evztJr8BtwbqkiCBb312k4a6gocrLEvzUkmmJGCDpfH7Je68ZTQAW9udXkUgqY7x8xT7i2aZqVJ6CnH",
  "key3": "5KgzhCCoziV9vW8NvCVxcmtNFbU787nPSCy3nCL17Yg2yJoKB4Qan71wjPdRFrjNnjZY2APJeucXD9PWp99dkTYy",
  "key4": "2vqtRMTJAU1HRH2D6sC39aqhuFebxdShCSfoaY6v1YrenWDqA8cCDoi7N7FTWWSSGPB8fjFu5Uk9yziyD57wSLbD",
  "key5": "3RAvt5mkPJw3VeTifS33WpAQBAgAHfZUpSLN1Ld6xuz5S4FsUyeQgTWrh63ACcDKGoBv9NimR94rmYZs9R6NTUfk",
  "key6": "2imtf5LaxzahNS4n2wQGnUm1iPhQdfuGrEWGpauVFuyxAe1dRyEcpkYEC1HUsH6h6Cpg7snDvB5JvtTn64uV2pf6",
  "key7": "55Qqs1mnJjnGn7TbJXT2mFxYRoT8D4uMTPp12n6tJNWxMMjWsx73fvrgeoTthmNibnbU5193pY2U1vLTUMJ8N2tp",
  "key8": "4GFAJwFfNN8CANsAMgLJRyji7vegt2tRvksRr4XWqaArJxTLUkyotRVE19yX38bioLi12JqCLVw56hAP41kqz2Ey",
  "key9": "46dt74G7kKtiRFxkUGW1Eh9TTx3Ny1cpajS3NCLdkGLB6oj7aJVnWmMFc94SHHLSbv44KvPvPbgBkC5MvaGaoAeA",
  "key10": "3V4ED6oGpRfSvdoMLydXuU5qCAXwXLTs57i9upZpkGwgorSuve9HSHyDavim9hfPjuXb48VM6JXFEmv2cpkA23wM",
  "key11": "4ob7iTKbxn2H8osm2FbJ59v7QECNKsmwfxYu3zcg8BSZmnSRuYRbGEKPL5ebTB6GahMScymZUn67APmrLk8ijQ5H",
  "key12": "3rZrWjm3WPauvmYs6uedEdkVR7XWUD9MZ7wPgaAokqsnTPPJ3yoL4edy98FvHoxczcHDerNMj9JxLsTbk6KRgwoW",
  "key13": "5AocaLV5iNvnLmsYaCJxnzXVTNzhAYWSMVjeQ4vGur5BMmpbVCTXNJcWNcmidjpVkRrseuGRFQ7BcwR8U5EZks5T",
  "key14": "2Zqm6iPScHygxeS8jF69pW3KkWbYBN6rKgFreCjMPmFbwjEkLGhBZnj3BwdTZC5TXACtFJBG99MuiZzYMu1Fq62k",
  "key15": "5NYEoufu435th2psieYgERE6cm4gGaywjoH1nturdibvkEAwPc69WTSY9GEthVxyDGPfLiKKMn2zuFFmd5xX29oN",
  "key16": "5YeamfdVDf6qoTu4P3Htua8ZnmHuiQhx5dYbBxJqchWAwYWWn5hPQwHRaWa6NCtBy6ntxsQ27Wv9bHTmr1CUfjSS",
  "key17": "55MHWyEswZh7xZqXCqDdoNsvH73GQqLGA2zaZdfBVAFywmSwHNfbCbZSoxARmsgM6UDURD5cwmwtkYTNSMX8uUT2",
  "key18": "5vXNLQ2zrwqPBguJjK5da56H1AK3KQv6QjqZYPnjAhxxifUZ2FAcjzAAHmzQ8KQKZcQKVU8yL2fXS5mQAPUBHsLf",
  "key19": "3FaW7UnwX4pNcJyFjtfddGv7Uafve4wvVaYsxnD8LeKrusZzYqXazTkhodsk6dLtU39onpCYSgFLm28sDYxN8wtf",
  "key20": "21Xf5YH7rv4Cwck9uRGDmtQKTQ2ZSCv8MsWhavLTHANfARZr9yAYnEbNZKikJDqukuPJdggdBv2gU2f3SMdJgVBU",
  "key21": "67PV4SvSjWakp4tej1G5Y8dbPubgVy5NjAKzNGXZo73n4RyRstQJ8mgAkpGk9kS8zYmzuzPLUpouantWu4S1vZzL",
  "key22": "65h4UW5hYkXcPVKRymc2oTnCpASWzYaZ6jpgbyh3HNjQ7kJTeaJxvhKWdkWkGTTkVF2XfZzCYdc8ogZkGkdDSNwi",
  "key23": "3eagBMnwDoKoBaqfsBVgg9CCYMjSu4fagxyRTANoMBYN8jyUPNTPenGJkRHvyfDTtkrSJuhuSHK9uNg8679tzYmP",
  "key24": "4FtkPo1MyUM77yoatDtj23xxK3cqVP76uSNpY9j5uaFFe7LARWvTRCx66V1qu6T1F6y8jTBXyx7smyxoQ6QuxWaj",
  "key25": "62s9dUhw1ddmHeWCBPJYKLVSTNBh6C5meToRyLEvdwebtVUGvW8DPwKDqzKPFAZ41WxJU5C8HYv8RuFSuosUWk3Z",
  "key26": "4wK1oxn6iHvB3cJfDwBDdQLqtTRrUALptLxdMNsVyfo8D18tVLiLsWNQ2Aiwe9q4sXcfUwo1mrLSwwKstgTGNXNG",
  "key27": "4mbNKGdLfV8BhNHxbbLFakpQM9RnMmbMWBUcYk43BNS92F9RwZnnSRTSvK8ESJPR9HHrFp7K31x2kKeC6aVSintT",
  "key28": "DtVLJfKFZDFG93BreCXaWR5oZg3eq1BpXFRhXuvz2LkxsL4dpPEev6qEhqoxC7NETztVJ2cLBi9XCDt4KaKYRxq",
  "key29": "3nSx2oHdGnDjKMGtQKnmgRNhEifgVxMERspzVfrgL8ZVxW8R5qkLJPfchjS1eUt6Cp6yoSuci2auBgeEEsaRkkEr",
  "key30": "48SWRJAiYpRuLhQ34Egsyrw68aMJCbK2GiTH2HHqQa96FXwiks3KsWrNBL6hfxB2iurNfWbuZkGQzsNF5wDgAgzN",
  "key31": "4KUATTuFbwcZdzA5ZMLiFmBUsRDcUmSP5gQgDfyXj7qn8bJefRZ5jLnTEVMshDcVGoCHRjbFkbrCHX9qivd1SDQ1"
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
