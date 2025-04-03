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
    "4F4yEAWozAQjZvfPwgi2wn3YwSEARksWwwnmgEwjdXaimErTH5cwmiuAh3tuDzLDxmATdSeHUAuBBhj8eCcPjc4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YrUq3X1biSKpTGgak8ZCs9xGBMCpEzrCUHdNtrFyTwUNQMiUgXgwr9D29kHnnpZ4hCuRQArfzKK2Qt8H1x3Fdn",
  "key1": "2cRcXMA4cbAuvXfKpkin42xEzdtXb6SVf4SowS6Kbrid2HeNKr4ej8GtAksP9SQYUmyFJB6iwyJeMf7XeCcHxcR4",
  "key2": "4GT3H8WRt8H5zNZJ1jbvCh4ztTKnZFJmhWiTL4vMBqfyXqyytj8wg1qedWc5b87mUGSNugBPqn5gwQaCdSB9qpfy",
  "key3": "3yXJsUWXhYc9opmJah7am9wKTCG3bEJ9Nb86FJ5M7g2a8SX9La4f23fPiAS4yZdqg1Bm1grfDKfgE3SJUZBUZZAS",
  "key4": "4wGYSWBuuTvf6Cvf9rc7U9DcPmLVHTsdYZTBApueeqA2pL6641WR551YCY8TCQW7J3G28rpmGxDc88mK68C96xJy",
  "key5": "5JMzw4QpxR6xesGdaCt1CWHjwUgRD1Hu7QHwJyPU7rC6V3WGxuBjjKwzJW5GZRnCN29DbbDMxa1jAGm7Dit4kDoq",
  "key6": "252vrdKPkUHjUD2gbNKyz9FAFdeobkskCFouuRG8gu9yYofxU8aYuZWYCEQZGMHJeqUp2ekzXRUpTMPWax4MARuW",
  "key7": "528jP2gUDJbbPwWimrvbAaPw2LBYABU8eCcmBSri3mybxZWZaMJS18Z78SiSa7mZTfY8k9x5yH3tV74XmfmfLaCV",
  "key8": "3ERmyv7khMvLETNeCiLdshoc9KGP8ja6tDteHtvVSmh7Ae43ix1SffFYrhGF4Vbo4iM2CVzvJauZd3NugW7a8moW",
  "key9": "4GbmwSauwNVKxRW5mjubtnmQzZkf4PYo7vW8ZP14Vqb9RsFD322muKmBs1LyKReiqmRSAkjg9GZ7KxxTUAQKQ7gF",
  "key10": "3uoG43jqLxJ5euW8aU8iSZrYd538ZgUBuv3Tn2qyJn2LryY6pd1G3SZx3VQTipw4oSm2pErggPn8ehUMZxYi5DAL",
  "key11": "djGQboTRCB1KjE3jHShLX7XEwYupmcgMPZtmcFzipzzRELLQtNpPmamzXKSoYDLuGKx1oazTJJPJrbvL5BsskkZ",
  "key12": "2CrSnMTU8ur6X3pgVtLYsGASvZ1ahKBnXWEedPUkNXxiMd2myQPzjr717nShXks2rEWAVm1XthucfdQyuv9xQD1d",
  "key13": "5knNp4dr18oredJaTQUVgmz6BFH9o4jDyAXNw3M7E11QUhGcMx2WK5S2rJyTaT2wWhCGjzftKhUSJ6C95KBNiA8M",
  "key14": "2NtkGQBgJTAoVsbaWwdgTTrPzzbHuc7ieuKdcbSiTX1i3LgaAPRTcSKhxtoG2wSVKrmGUQm9AMSAESnKSVD1cmNV",
  "key15": "4JzV1kT9FLp7RwjTJ79rUj3Vd84LNVUyUwhiW8SAZ3g4ady3Sp38LihSdJxz5CNG1vvKRKqc8ApEg3xFJRnaQTRi",
  "key16": "4v7vRvdtKBTMXbVN4XEQoGZTuRZYzU2uHUmfumUJbZz9cDQRQkNMNV8cCKetcVpMWPz4S4PcR4AM4zGWYMr8mjVB",
  "key17": "5LasxZbm38SckZjwx8jTEpYAwjVCH1567CpaUqaMcn5qvmFe3ZyedrQi66e6avG4ujuyA8VpsyQovGguU3EXzFFk",
  "key18": "2bTJXFe39eDmR37oMWrsA3MVZMkC32JLDJVdJECAwrZDvEskpssoNkwt1JJfbfM63x88qEhyJ8rHt4gqLKWtAH8",
  "key19": "4NSXMt4GQu2Qnm4YoVVmLXyhxnpyHjdCat9X8y1bg9E3WHNwqCofmmKdxLTLAXmWkfY1oVXgW1BqC1zC8yHVBy8W",
  "key20": "2Sy9J9yjrFLFXgu4q3iEgsEQo5DPn9QbUDroa2xuthQvDEJgf99GQqV6zmszwX9we9ccXzdWHJL2FPNNbjeBEVYs",
  "key21": "5wFU9B8frJ3SURJntY7KpeTRm4ep2XGHZcVSmTSieUtY3HEtJS7Zgq9cRKdgUxnshRNwF6waQVPpcgPNUHd61HQB",
  "key22": "5YNdqTqrSM459DAWR5CWi2qYybigroZRBqVuK1VGJ4ssEvHkecevDBRQ9umVzxmeBXRwWUmSKMUegSR6GRySAUi1",
  "key23": "5sXmKBqXTCHymh8KjdxnMn4biFTSo71tPJK5cJ91C8thYaa4HmpEnmmZ8STPkWmYr78pxYiBSRyMooMnTMrVP5Ry",
  "key24": "4mxw9byUJteFdyft3FZAc1Nhn3shdQiTAbL55K81nQ67Wr1SiKWxNFBoqKS4bhRvfSCe9xHBLQxJoWLiJ7YpgkkB",
  "key25": "4ADGVbjoHDcPGpDpXnxeUwh8AgEaxccRuyvm89k3Rgbp3seBLdtqmoCNcykoTcbwRU1BYHDPFvFdiW1mrhxgU4as",
  "key26": "3MDtyfYQ1Z4yA74a1adEHVLaFrMqFD8b11iupStFsMn4zjMQBHWwMfQ4LcCs5C2j6iTm5zLXqiYseUCmBaK2hBnz",
  "key27": "3zKbyU1dyX96NUy5HLtd1tQHjNrDt5Uzzsotq73oBTMebWKzdYPx6cgny4NxwQbs37nHHEy6TtyM9jy7vobjhfHg",
  "key28": "3LJeLLx1tXzM8EBD7KgvMQTu4puD3q1usjfirYzCnRfTuKQedueZr2XHFsQ6tEosfSyqEsSAAXcdVoTdk1ubcrW",
  "key29": "46CAABXqvCR6hQNDxLu69yARZAHPxSMCQJvGtdk3PWU4XgXxcDRVmuWPyL1axQPX2U1KoPrMdubWSxycvWezcM9m",
  "key30": "66AuLDunkaYSZ5Z2Z8EyWtchNhr4jqfiXsQWPk6G2M9ZFuUt2xY3Bs7eyGAhjWkR2c47GvwWgpNFE3h3Peptc9oQ",
  "key31": "5pcCAfZn1nXsH1dDGVyoNWcBe37E5PqbM8LmeTf7VWZ5kwimdkkntxhKHEo9b7fiBzgKzPVtUzFtD4S9B9GEiMXo",
  "key32": "2wr2PdkhPvFfmHkuhBu8ugK7wUTZZLSXVHJk9vCBnbWnVseQx3Ec3pgQw89ukTG3ywXhvsnKnT3g5axvMjX2idQb",
  "key33": "4mbicoVc8HczX2P5hyK684pFdDK6svjVUVUtiRFjZL8WksXiDjnrb4iasJfugpUxWzTyNqVjJiCp8uicYL2GM1JN"
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
