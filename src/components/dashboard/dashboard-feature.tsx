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
    "2kHYiVtHLxefMmTLevadckZnB3fFnd5kQjHUXdssRT9cB8WT3v4XXCefvZYKhEYGhu78jfHdw5oVA7YaLCMMJfE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAPFHd62eVZ4mvMoj9zubqoy8K1rv2a2YDZb2QpXiBQ1u2sJDJ3thLBzk3LnThiekNZbkpE2aqyXHiB3Ye55gpH",
  "key1": "529TZBb4FtddxUXMRVBpzqr7twQrRSAdtYqE9FfTU9yvT2ytdQwVbxzj5RYbnjjuqVp4He61RCbFgMJzfmwvBz9x",
  "key2": "2gkWTvdy6zMx2TUYPi6pVthGizVVQXT9JvHK795PYyzG7iz34ZWMgJTL6DHbaAUa6wMeNv9Q35EXYeusYFbYXFed",
  "key3": "246tWAfJkTQe9ioitwUM2VBauZsyBkjcCc6PwpCk8nKNgm26TMBW6G3TY7fraUdzeiF5DAzX2z9ey9KgjXQMohBu",
  "key4": "51g33MRYFQsFyv6mFvQrrn7C7j4ZF5NFEjaDvFmRw26qV5YucLcfJQMYMjS4q7EtVihamogu86Drfrk1EK7cKDhb",
  "key5": "5fTXLsJ849sAY5zufRU7umSM5XKDC16Ty5Jh9mWZW2t6ZExkuRwzRxFoiaGGS9hjMK9iC5XQZoUHK5BQFgbHW6K5",
  "key6": "3kjWJVj2TyAZTKukNtrDPFmmdUNWLwYbfaPgMbKezMahBHvow7eiibwcWLqBBM73hK89fvnkaXL8L1DNAk4NEQCB",
  "key7": "3QLufQjQbZsxwxmeZm4ZCsStX9pCFHbQqwkvV1wTQk7n356LFqS3TvNszK2VkPgdpG4WrinEkBzVZKgQ4MmzHgyr",
  "key8": "pQvUX1i6JruDB6fFUJq25EeoMsXW6MLr5utUEFBjS33rnyL5bMMrb1qwaCSRLe7U7sbgo6UoXnoXtzWU24SKWTW",
  "key9": "2Zn9SSas9JSY8ASj3qH1j8ofaEsWMTvVak2wzjRC6vPGN6NTGYnNt3n5Nnf3ESZiB1edRtrbb1vxqUpUXdim2SVb",
  "key10": "52WTyiKZ4QtpKKGvGVgrdKJWARenPTsDVfc5sisivQzN4fkMXm4LgPAnLWhN1Dh6Fau5zWCMGXLuXA86E7Jvog94",
  "key11": "5z25NjBpR9S5ieX85fpDg59MXShyNqCDaruoH6iX4XBrTeCF2bSWqCkw1nUXyW9nbNs4SJVsgY4M3y4ZU51YhwCa",
  "key12": "5v3XicVdwRtGRkhK51Nf8cjkohaeXSEH5jBrZzvy3ayDhq28mt3NQMX8U38rmieJy6Kp1oBaZYe41EBwpQcxv1mj",
  "key13": "tV2b6ohWDFdhxjzcj3HrE9hpYnojc9zNV3BuvKoLM2W6KfJf9kBEJPsEVZG1rXfrJYPp3yLSDrX2WFzUGzZVJnd",
  "key14": "46SrSx819QtnonexLr4UX8Qjw6Pb3cSTY4u2nYEzcRbMviJWiUc8Ms3dbZkHwtRacZmKEn4mPRSPCSxi8kYC7prs",
  "key15": "xbkD1DymHxhs9G2Ez16CTJuVwNSZkPxxiPtuek7YDe1uo4EA8M2YtCCkyxyabNGtnZBBE9ytXPWqsxCS89srevt",
  "key16": "5pGwR4AA857iVogfTR46SHmPsgSjL5NoyW2AbtmRHmsmwhwtCCckJubKRtuPuCGTVyFeFVLxDUV6tpxHzCKXGDkk",
  "key17": "2QRRdF2gNMw7XU3ccUQv96hnZvAYWg7JEGFk6h52yh3syzr7xbSe6tNScSjSf3yEhsNeyiDbbWpmWWzoKhfMBW6P",
  "key18": "2upPkKs3kpAWRkXx2idpVG1fnu3tPMnKkT1PuMNobVpyT8oZi9NP54ez6Kom2MWVFnjVzJVz6T9sTG7NsBMkAEvu",
  "key19": "5SmWy36iYXmkYEyi82gM7RKY26RofaoukWoL3a4CaDwPtfreNtLJNWebPFCpVqouB14cPpSQKAaCs2BoBqxxfNnv",
  "key20": "3sUiNsdndLeN1q1P7EoWQscUdRBFAqJ4ST2nSte8qJF3J4pyrhJQmxhBadBn8BaHeHABgTyY77Z7qpmw7pN24tTi",
  "key21": "3U5HHaHP9M28GcKoHzgiCRCqRQzehqLqHPeZW56xV65R2b1vrdkn8LokksctXwsKiJzNz5NVRWVGF75t14gx6d17",
  "key22": "25UqtoL7xFiwBd9pdJXa7ZCbEU3PJk31y1D1tgw1iT2fqM5a9sRmBLrnKVsGoE6HtDkGHuotZksLB7zc9azwwhGX",
  "key23": "2i3GDhqfEdTBn6SLq1kTRfUiXs4grpS725WiQnv4LKTbmzKShRToRpL5GmPVBN8PfwUmPGA1uDtkmLWDsMBqJjAt",
  "key24": "5s5cbeUAJjQ4b4HUsyH1po4SfkQVyS6NBS9C85eRfN2qvtFQi97hxENM1VuFpM6uxUxB6N2WPVeYLC9d5axHTMud",
  "key25": "2DAaNjbV7esW2qetKJtpFswPcGsVpJi8abrQh3xCypPZ4QzqUmK3wuU51qbT31ELE8E1cKLfhaZvYqcgA1o53Uzg"
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
