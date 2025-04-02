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
    "miTCXeSNkWriGne5MVxF2ib3sAHyZQnphhbTx2pDfBP7QDL6Wig3iqdCAwrhT57B5e6HdMFvanaExaPFQA8SrWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EoFxcGZ3HEbn7dXBfYSkwXjFfL8WzBQcB9S3DseR7kecLweFaBvfDHtg44JkakzpXrM2dZTqXEzBAzLzyrVuGpW",
  "key1": "3ivdAMEDfntXLE8Hjnj8EiMFgdyHdvdKTYGVkpVC7UqeADgF2eHnRyLmhQzVoLoDLPiTkP81woaL5cRS9gTDUsxN",
  "key2": "3zmCfpr9pDPcYA5YVDmm5Ho25iY2HsFuZ1AD6LTdxV5iUhefe17ifaVjjpAEtXWm7qBqd56M9WPDMY7eAYpfP899",
  "key3": "3bNJfzzYJvM6oPASa7u9ExrHvJNMYmTNDctuk5bEoGXdgujzwniVUPurYBBbBakrbWSdd3njd7US8CGiSMvEMraM",
  "key4": "2G833DfTspjbGDbg8hGVamyiCYf2vzLVysTjZyPnNVQcUPNRs69YKoswU9SPfPD8pw32SBGtrYrLJdtY7xys2Poo",
  "key5": "7muDKL6GEdNpM15PM8XJgBaWDwzvWKJsVohHKT18H86WouuJEzsF7BVbNtN9xpe7vQDKdJYUGVaEJUj8zR5Wa2i",
  "key6": "2uLgVbVUcVUsdt4PrqarQcHEqNcUwMzdQmsD7Su17xEFUjGtPzgsLruLgHnNdN9d3JSsxp4ewrWEAR3hCuV3VH94",
  "key7": "4CaSd3NZe8DUodTXVbx27N2wLw8sHzZiknjNddUvARYD2tuuoFV8MrsgamYXmDv2cFDkrR9vym252oDpQWZkaoez",
  "key8": "2xnDMMTxB1tKFraRvRrE8SFMmNK5zDPxLQhJhx6u8BH4TBhNfwV9FWK9AGcXoj4oF3c6wdn5rBwuTAAw5mMaffb5",
  "key9": "2NZXhojKPfCGUUkSDoBNG4bLMUPM4KM8sSmvAQheJakusVKS7eMRva7DmXsvw4HmaXFS1Sq29pYNvztUt99kivvE",
  "key10": "5SG7u6dfQAw22tdsEoG9eytfi9NFEppMCf48t3wxfT7XuBeVBKKBD836TFSq19Lm3op9oBheDX5MCSj3kHTSrFZ3",
  "key11": "3KHZhCm5px1Ndtkya8zhaAxW2p6h56KWnqiYJgfpgyprAbyNKUatxHWeEMn1gMBVY1tW6jCwsDrAXDV2iNCiEXYz",
  "key12": "2i3SLYhQWHsysyiq47DHcPXVRpkQsx76xvPtoLRDc8MBDV3jHsApckfwpBuDe6krqcq4rGdy5NjVp5jCb4G78Dex",
  "key13": "5knfBcBmw2hu4nUgiVe1bBMe8aP3obopTtmcGrUZ71tRSVWgWPeng48U2HqrfacZF82389fafspNxDE7FAMf37pc",
  "key14": "5pv5JX1bRK3Uz4L5sucSyvGVunoNqTMyx3qKGZXb5eA6LMTWbyWctLrbJZcZA2H7LmpVBuLkiNJiU4dQqLCKMnJc",
  "key15": "3f6D49gT5jinyfTFnf67FhVv9xvvrniNDQeeRjGFkGq83VEnS93VFDk4kyhdCD463zHcvv81QABHqDVgMw4kbKVU",
  "key16": "3VnEXrZcFxAqAvwrEC7yztZQ54BoTDYXkAHZZeGaDbDpKXknkPAminbri8VDvGgcXgYtAxvWh9erZLpEr9PYYFWA",
  "key17": "2mSVyheXEoBAK5Cq9Kktw29nZCqzT3fDqwNaYQXz8vkrS953ua1jLBgyPNqcAyD8GdiEsfUP2iJAEjWmUnEpbiXF",
  "key18": "398bEUnJTH9yR24SJJ6uiJJ5rhy9eE9BXJnAEpRwxRDTKhFYgo1vRJczVUDfsTCywgvhwvnEMPdWFP53gXUtoz4F",
  "key19": "5y3VnvMsrXiBnuhDpAABcuFoDh5wKzbFfYwwZHp3DzALLvAkgk7tV7GRYHydskZWM7PyniWnf5mPQggv5L7qQ2dU",
  "key20": "2nmQXyzWGB853rmcsKycxdER3SjHKqYVTcgVjEF5TnfQ5JodX2rhBAStm2MCjQDAZGBTAn1VkNSFQdGGy68hUSs3",
  "key21": "8u5ToNv6cQ8X5o6m8kz8YbpUnXyKY9JV9BYQ1Kzhzp5j1wtVSmypmguYDVSaotNHyBuM58FXxXo34Ddvafw1pEZ",
  "key22": "3yaoHZxU5eX8V6jfawfADZKxH4ne5Fmvisxm68nYwdT2HjPF2BY1aUeBB86xovEJLYxUADKmo1J1n9vmh7xu28U",
  "key23": "5gTmK3rTq3xp7kKBtHUySS6wjc12dNqwe3Ecgt1AJ6itWyv3wKexPyf7iJ6jaadobWi8y333APw6zvVAeYz7AtmV",
  "key24": "GKxyAqXdGZGQm9rwWJWtJhrg7Do9zUtuxoa1Kr5MrtbpPDdhSJL5KEEVKYYHCuxSJB7aT4TXGXazEtJmNNGrPHV",
  "key25": "3Yf2bF2FxzLK8NAAwT9cVmZffxqk7qBvuMkJaTazib1JPotMTMzjU2ySrrYaWVnCjfS7kmfZcEC3jQXZfW8gTEcf",
  "key26": "3gpoS2VX6fR4kvWt3We3qvhsSWcqkhzo3tMoX9K29QiFqTFvtUNjnLxvhmKKsFuTAZmbUvtDt3p4wYqL3cKeaFVx",
  "key27": "2SrKDKK3Z3HDF1Ghmuqy3rxGqhSBQvuJQGad1TF2MZeQdAK83KDQRQRUSkojFu9byYFFE9vMXW7kE74NxHUdmeZ7",
  "key28": "2UxoQXbFoBct2pTGDbbdLMn9QjdZsapxfLTf9TAgiWsN8QzEo6PSTM7bv2P92NZHMPmio3CxhxDisC7eWUAcGDkT",
  "key29": "2yqEJP3qV4WpCP1xKZVTVJPifAzdUhRm6amxxkWZtH9KrQ9dm6KWn353wh3xjDynJxxi45Rkd3mtsgya2T94SxC5",
  "key30": "5EZti9aLmXNpZhNub1SFjtJvaRBMZzXx1QqAEqAsZ9WN3iEhi8zuAcqFPjH5aqUykzpaseSSfeRkHKJfQLyTUrXn",
  "key31": "s1AeoPausSA4DnJy29MaqLS7bjDmw1U1FdsSJEL8Z8up1iVjfUacDtnWBgjpL1UkYVBKxAeq78VYy6ZZ49nQGpQ",
  "key32": "4oNirjcTj9j6B5MbVaweFepkemFdvtw87fGqrGnYXYncRA5nW8pLLxCEtxoTxgn2j1fxUAkFjN3FPzcTravqv9zf",
  "key33": "57GzSsSc12DeuErp4C8VtiSe9V5umWGAkB8b6RHpRDE8rGpG419FSuoqBbt2f7uquWd3Y7jpWoKm9fSKGbK2cZBw",
  "key34": "vqz247sUySnZt8mRxTagm3jFpf14JSnhMT7VBmhf35h1yfq7VMdVHsRGNeg5DF4kNzhcQCfzt6dDaKWRiDKTLGF",
  "key35": "51CiUGpwA8hSgZWXD46WgxMHQ5hrnyhBfoDJZt9Ya2od7zPvHENRyKmdRbw1KPEzvUyRU9tDXJWTJDyEtmBdg7dt",
  "key36": "55jKN4wFTe4Whgig3d3wJaCwGQnL6V22mh3av43HBzPWBYqH22QfNyWRyC6FMmAdSNPDmk3qZNuiHDBuijKdyxvr",
  "key37": "4F3uQMRjt3mohrCxgc1F3GZeMr11wcxoaGdJk4rW4RoAJdRUNNw9Pf8SQ11LA9DC6ucKGemNZk3PFncjpQHy1uEU",
  "key38": "5PXbKdNScYHUN2UAuAY2onDRHeoMawf9WKwuSHxtvz79CB1vLkpZbp86JYTJAMf8RgGeFkbNikSK2GeXXSmEcWDZ",
  "key39": "HoiCkie2bV2PA3cccj6TT9uCU28Vei7szYM43ULVapCXss8MTTSYKTCVrW4XJDmWfVAbhE1g2ULGAjvww7Rbobp",
  "key40": "56HLQJf8X6XkunNerZnfDdv4JRgKmEwe3gMoVSHGWb8uxXBfRpixe9HV1jn3XhEeoNeE2yboroAqU2xZfuBmYb18"
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
