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
    "3JZZJiDS54KLn5VtWLidpDvMVPQKLHetbVcMc9cnZTnvB9vAcKTkpjbffaXikM1W8u58ULU9ub5W4AaPjWyQZw3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K24YEDjwnPNYKW7zvM6tZ5ioXKY9cHYz1yVRk2B9z3QnoQ3o9fm3veGqggLhLb4rT437W4U6mYRh9gxBZzBcC26",
  "key1": "4JbqGU6bARfRcbhHtaJToaYoyNsPgEnuFnEb5FFWeL1yQzSESd2qaPSPdm12uneGNquW3NGoeqirsYpAYQCVywNu",
  "key2": "2ySHy6mYwuUXG5WermXT2Ed9B4nSjHgn9mdETXjfDEc2xMtANoJwQ3MJnzqXTtnJ636w6URBNY2RKbAvqtcertLG",
  "key3": "257ZVcVTzn8TaLK3m1CZn83iqnE6h87DLN3fF7g4jXim3rYDCgHKRdDgdg2xfozmaAp7ASSaQVfvWSDU8pCw1xeX",
  "key4": "5hNWPbhbYH1yGze4tEMAPbJ2PHxRsoDgYiBTomtYxbARX8krF7oN9aket6KtD4vSefnxYLVS981ndnAFewgFvphb",
  "key5": "2XhRG5hjV47MRx9RdcxkXw45uYmg7fEcx3gyXUgBLXshUk88ovrJJi3zPY93aBg4d8rfW6jVbHHmFo39sXGbRmcT",
  "key6": "jFe4zzhgEgmQbpZ1YR7ugXn9aUERUA5yYeYCQr9okdCfbrs8KGTNDpBju2GxXD7Mf1qzkVWWXSqLndycP4pDE2Z",
  "key7": "5pKErLLT9HTEK7C6k5Evu4JKRAtwnokGV8rSo6mU8NE1wKiVkrEruS6t1Wb6uSEfNbXpppetjfXEZjK4kEj5EL5P",
  "key8": "LJjB57X1yotFGEFUdzzxiYZd9WzxBFDsw3zaw2mWRtf94med82HF3TnDviGDHXDPKPFVQ24iEf735EJQgJbSzik",
  "key9": "D6CJsTVSEsqKCDVp9jsBi3fTEriKkzWEjqHYDGaKgtCmqWDe2TU5gBquSpptfcz4UVQYhdK6zMAkpMywjowdLtR",
  "key10": "2sS6Ri5T6e2Me6p3QwjWagcR4d4pd66hHv5iAfGADAWfWYpjn9kPQRch8YkK3zKvCM12omjAs9vMxjhVXHTCRLgW",
  "key11": "3FNXUfh7ZfWrgj9p8KWmEkq42nXjMC3vVBv9RhxBARtVGpmdhiNJwd4ZjRCeDesvDGWoaawZKNpysvtHKJEfnNKT",
  "key12": "5Db7FDsyASNgxUUFbtQArEboiErTSUWShts9Ghr9Ww9JLufibzYJPT81g1h8dMaSByZFDQWieCpc6VVJiCjQ9MYS",
  "key13": "21kMTNKXc6DsxdG6vhLFKKejVBz6ztuVtJBszaYnHUFMj4xXZXgtGJkR7fkGwt7mYuKhdA12eDF6SBDMkvM1LDzx",
  "key14": "Goh7HAprD561heYRMVFK39PK6D66eZebkU5s1CwUV8CDiWwi3n4XBt3zxBaLb1Qo41unDyYvGtvmW9gPah7Pc6f",
  "key15": "3S1rDnGuoYLT7KHmN6cL1b43UGy7qFQAMDkSCBhci1K3MiqB5trnVwpAc49mtmKD1tAPNRdjAn6ahx5GyPxrmizR",
  "key16": "uC5Xpvfg9JFMxUVPxQR4eRL73989Ab4vsPQjBgsvaKWjFxTQsnkPSW3wzfSK6QGUzewLa5Rzz3xMDpZPAcXeVKf",
  "key17": "7DdNHhvZQJuYnPbF9D7MH2ncHNMwjtKuRTRx3kM1L2sb6mmpz6vEba8wVFZdu8S87mp1XK51scKGY1r8uncizmx",
  "key18": "2me1tcHtNXVMCWpLRwadvovuFacVzJw3PKhVLPFAbRHv4PPirLepRtCjq5bhDbHnqLn4hMZzVLR6JGxcmjCotgby",
  "key19": "42vU8rNaQHANUTE8evAQv5ML9tvcCL4nSwWBDwhYs1LBVxUoGoyt1hjdXwthwmrkVDaeWGfLWfEMgJiAkkBa6hyh",
  "key20": "5yCFYrLLLZk9Ej1ELCKCNMu44ZBY29ctRfqcYzKABmafGiiswkQo5jn8fCB7rTdTbJSvdgjsyq1RzrHeWG3FT478",
  "key21": "7e84wQVViqueU3fKR2KERQGDdMdEv7F8VP8M2PDTS8nYmXyFDgKgLR5BMvDbGacJ5APS4SsGBj2RosmLSTcNkKC",
  "key22": "zpyZLnv4PqK3kkmtjYbR4x56Ubd8thoLmBrjASNA5ZPAxar2HxNFxDdt3Q3e8JywedgbUBhuHgXtRyHoB2HE6SD",
  "key23": "3dnPA7M2qsSnbnguN8Bsy1BBfCQRqpU8jx2WdV7KSh46X77nGdARkZmhxCh8EhuyiY7wVSvGqfTQNytmCq6ZQcrE",
  "key24": "2q7GMT6jTbqL1LewmdMKweYjLC5G9x8c7SicrULgGJLJG8sVTaUEagekC1orJsV38jV8sSQMr6dBebKnE8xmj76L",
  "key25": "4QcSoDjT5psSzWm1vqXUVQiUzw1tLbWhu6oboH6ZhTMrLr1eWspLqZdRvCW8nBoGi7U9jU6J9n7epwCzrFW9YSgZ",
  "key26": "Cpq76QctHYd7qfbSbi7EHk8p5MVudheYqJmdiFsUb91hK8dxt5jWg9iSHsTrgrXWVkAcgucvH3brGiW2BygbmXq",
  "key27": "39udAuDwLKHeQiExtwZZBJKs4c58Q76nsnEQJcnXAj7n4V3V3XNUp7s68uAhXx9Py24wp2xQyLmV3DbUJcZAp1NH",
  "key28": "5rrTCTAiMRkLwnwCKKSKXHKHGDNuBwyeWVJi8sHCYryWutan3Kg9cmYYQoaXsKyvuxaSYjwAhU6JsvdedL3MLBJL",
  "key29": "3NSerCNz1fBL7oaCgYHgqQEtni9bVZ24QqDry4mVuiGStSRmnbooQfwPirmHd3AJc9Bkq6omnCi8UFBGdmer5ucy",
  "key30": "KhEYxBYepoRtFifRqwLU2Avonij5bdYyXRy2a5h62NqED4dCBaykFmCvaCek6EAQUeNUMH7F22MDNJsdZEXfRtA",
  "key31": "4aAbqjbkEdYCLH1TNgAwkdaHHfEaExpKC2RTv63b6yiw9b3KmsaCSngMPeJCqhhZMpp47SjL8Sj8djGxsKxbf4kU",
  "key32": "2DAxRG5ZmPdV88zRfdj2V49cGsL1zB7ZfvkxkgH41j5oY3pbVNyXVsKNjUutJTTk66JTzzt1MWEAPSpKqXyVoEd5",
  "key33": "hnUrC8aTFQf6kd2HLj7GmXEM4XN4tqgmZhwQqhws8iVZwjZfFFsKDfnQGHQ36E5Bx2xvZ87xTZdfBN2LjtDNFYy",
  "key34": "BpfKPY1YM95cxErjYeU8yrZJQcPUbnoHbGZsPKuV9mNeLrUfccxNdfiNc5mcQYXVnYU8AkaCkxRLiaxrfuwrGqE",
  "key35": "3feqXBQbxYNvD5ABjZhANNCdhh3mo6JzkCBNchcVZREMWtjJ5eHkc2LsTtPPGc56Z6WYNTTt2vxxXSjY53pc2Nmn",
  "key36": "37yyhh5fqoBobLonCCpBogV3njsxLgcDygPUF3E7UxrNcN5WuEgBxxdsubouXaMcJ1dcmumpFiPb7Cxz61aKqhfw",
  "key37": "2teYkTptd7C7aWsiQ5tjkfCvL5oUqGYuLXtJW8HXE7yFQ5XrtLb9BNtSEQTUsYoee3RajGjnZ1aD5ZW3YY5FzW3B",
  "key38": "3qXo8ZLrbHp1bzWZGaK1nQ7LhTdAV7G9df8j6UtPv8DtBxDArE1ghZCcGGVEwU7Lkt9gKa8szJ1o3CbsEURitun7",
  "key39": "2sPrvFHC6a4SAvqA22QEPdTNP5WWLjU9bq3UDSEqxHv9dxmYZmP8w4w8h48dXgrtZrS3HN9BdrmXLErCe36kGkwF"
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
