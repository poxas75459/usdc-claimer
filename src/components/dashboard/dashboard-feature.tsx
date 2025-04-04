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
    "3PZ3GSfhZGbGJaV55tw2JPFLetXPqHSNLSRSq3i3FLtb1DGT26Rj2id13EGwdjRDna9RgAagPLaDGQKc1iFBWzpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dpCMqP95dVJ8dVTDEnN1upjmFn6eecqzwr18nXGUEi31QxVSjyVcDPVtLDuf5J2bpwSQbNwzedScvZXBoLtoxP",
  "key1": "EPacadXD6yASnaVz4J6bwVXuysc4V5c3e25H8PuLtidMbrq2tsneid5A9tJVLm2rWdxhJp5M8W4YJ9jnj8uB6qs",
  "key2": "3L3UvVzdWmixrxRkFKVDfeWujT3t72gMs9gg4XPDHz8ndiGkTryb5oUvbDFxmxPXnvtSqZWvBm4mbE228JBgWXij",
  "key3": "BP6rykdzRzuCQFKMy6fZrsjDVSZyYRG9NzY5mqBtk4SyjWf4FTTL1iUxMoJeuSnBBVyMifVbsYwR78DagTw66g8",
  "key4": "3cstR8kwGZWKGBUFfmk85WVEaGYx4MECwdUQbBMUwx91426f8eLL6yXed8t2cDmuiSLNGxc7bcf3husjHjys8GZ3",
  "key5": "5ova5zywQqfKiJ3kN9rYrQtEC1qWPb5jZF44gNkQn4V8Nbihy372ECDZKeMZCNuykars2dkz7SbnWmuceRNEZEKu",
  "key6": "27pV9PSLF8BPHt1ujF6nBEyX4YDyVkxtvWDayNoyQcJonJeS8LmCRpmLy5iBukTdykur4VGjrj7aJ5cqzZu6KoqU",
  "key7": "3vpSNhQUbDrbibru8GavmPVCzVmNH6VLb9ZuHYQ8WWYeVgNnXG3npo4LhV5auxdLUnjUFUVxGEdy1fwvgZtBt5cS",
  "key8": "32ZE7kKBZfZauWRwhhpaUvgbnvmcjyjj2dMx9NyUBay9K28e5DEkEFWcpWHk48yq5CAYq4mjCMA45ioBNwoe9tyU",
  "key9": "5LiGSG7peQCSH7AbeerbNJyB9pUszbmL6EyF3qPaCrMekdbK1WBeCkZg4V6uHzAJHxU9asQWYDQvPZJx5xfJ51D7",
  "key10": "2QfUez7yzKjzGvf4Gx2frgKEcrPYwiVoPdjh7ViQehrGhspnaBf3o5X71XNhJLPngMVYGCCbZvBhvNubk1EQpfsf",
  "key11": "4NbGs2J7nh76E6AmLue9L1Ptyp6KZUQ4F6PsWpCj9DrMDcKdr6G49NEoaociU4sgWx88ZDUvBayoL6mUjHX8xu9x",
  "key12": "sn7MDsSMfKzWR4eHiNKRd33JK3woDJnoePoo5hzkbWtW8gzKytutFHzdos57uUC1Ld1iDZh2WFfSnCVkpCsYBvD",
  "key13": "2sEk6QaLqGHQ7ZhvSSYBEKAen7LSEv9a72xiWxxEWDQHfBgR11jXxvaWegn7HroBhxYm4m3P881Jftbr69Hraqrj",
  "key14": "4kt3UKgkaUbz9PtwcNmge5fkvzeKfvgpGwAbLCiQydrsHpG7NhWaDcqwQtCYXhmWm46MQu97fJ9iSKxDLTZ8wgQG",
  "key15": "6Spc8aiPpZKD1Jk5WXh5DiDyGNZmJRX6Wx7tarCmZnLFmnsnef4MHsxQWJcUfuoQTVRDmPKE7Vxj2aMYsyaDHjg",
  "key16": "4cujw8gmwShFEkMetKhYLVv8yLi9WqmT6rfWR1g6a1XnBMyPyNzR1pv3GoFadQyKy8GHNk8eY8p1ACfrMh1EuEbd",
  "key17": "4yApKhSnHkJFo7R13TaoQBQz1evkJyBR6Rtyo621b53vu1GLzNPpoFAni5LUMLQYnkKKbzU27oGzhdRNbpubMJkX",
  "key18": "5cSkK2WZeLaGv8JEonqUkeAkAA91TruYre5fEWQLDvm2L3cmy676j364DMtQ8XFLQRZZn2zYK2s1Mm35EC6TeLm6",
  "key19": "8TNWCzDZqNCajUypwvMNGQspzPBM8Bk6uhMX3FojAmgRiogRaZWqDaPLR5SZGGM4vAWNRKUZvsy4fyKP1npsn8j",
  "key20": "3nNRaSJ4uyf9C8cJHs6q6WrbzJ53WatWRZmGpZw841vjxLHqgPNZYVYZLy6v5N2X29XeKNotqMAc7GL3yU5mLfKR",
  "key21": "26nyrGn1Mb7uddCsZCkXmJi7wEtFWZkPyKSE7Dfj9eds6M3HYRHrey5DLhJT6ZiYmbwHjccnhtoxurMsMnkHWAxr",
  "key22": "5cNzvXYm7evPgQRmpFamncjrjKHN54LrWfXkfnH531q6hdahnyZWLCmDJYVgb3WnTSqMiL8mMbkpSbGNH6xKfEkj",
  "key23": "3MMqfTLYKEHof9Gv72Ghmob4iktw2eowZnoYdJuya2dgJMgLWejVyo2uzQkq7NdwCmkKk8N3cvPjkAZujzMe1QvA",
  "key24": "4kFSu8Y1eCZaGuGzx19sEeqeeKSrcLt373rBoofgnUK3AWhQebw13ZSiet66R8Yrcby3s6A4TYTvpSCAVkoZfCFs",
  "key25": "2jZx1T5rWHyzZhmDXryGxLmAyKFn45jYZ3K1GifFSB5A8bfGvjgHJuZ4QcELHzWZV7iTfzJvLm65EfKbZMwpaeC7",
  "key26": "3EhKEBtKdopVgXWRPxDBeDbCUcqnfeXfvKBWT3Fh8U4uKb6h8e7SfNd4oWaVLvUCS4LE3ETUx7iTAQEJX1g3UDAs",
  "key27": "5rRnyYDmr9pFGbtaYPYA5qqTzT1xXhyd2Ch2brXxBAxzyZ9zj8MaqgfQHV1ReEzHw2AUqivoevj66cWnuGQYJPkW",
  "key28": "4SHGj5hnexqtfnZ5Bpfov3vCghywJEQHjDvTgPbeP8jkMZWAvinZCLqcQWAgxoELNnq3FbJiLwCbKTxj9Kgt6yn2",
  "key29": "4TKKhx3FToHX3Zn1swYC8Z8VNc5PeA9jdobSZzjZqCeZMZhc52ckfoJmYgEiWujZLU5Q9pfSYMaqp7ntcbZM47ZC",
  "key30": "4MqEYy1N24CSXpzN57fG7xhm83PSMb2D3aXbFsUhrgUL6YrT5w6RrFxFeQQEa3uTf8WyuvbBvCFnNWA5tTZgUnet",
  "key31": "5pquuqMoTHY4sX3PwRJUNdjrL6DkMsjf47oX9TLzJW9UuNpLZzbmgkxuzjaU86QmzqfhzE9Tqe1bb8bPKiFutGN1",
  "key32": "57Rjzbm3UtkWizfmR5mJuKAg7dUAr8kVrvkjRTh83cKuXYXUP1NEXRbyCGEzJ7uVSoP8NoGGj68HN6jJ781BtJst",
  "key33": "4V48x1uv4jNcBszoMFPmTMpuv3c63PUUnpmEzkMWU2gBEuBhtK9aJ2HfQF3kRkPP4RL1aHUd8gogmY1YFJx7WPYm",
  "key34": "3iPxXC3VjtQrdWH8K1tEq9GuxsZ28iwEskWey3FF2MvL9PJgB8TDY1NhDZrkkxqtr39p3c6HLY9knP5L3s7H5SZD",
  "key35": "ce6tMQWsJZMNXoiS7nh8n1TRUHRbTsAKYokyqyGjrLPrLf5itUxfHNoe854jJdFHVj2W39yDG7mgrpsK1dfS8q8",
  "key36": "5ZW77fX2A8RFWUzzjY7sT1Pkr8BdnwkvVFLmsNGnAM5rTx7kBpNkKxcpRQEVjZg9GqQDQ4a1KKMV4mJHmqbv5zVz",
  "key37": "2NcUSgv3vLQGJAzMfc5ETSvbjveMibTNXXY4iuNRfXBde4sqJX9hKqbyfFHaKq8E2MMkn8nGrJ7CJCxsjoApoJpa",
  "key38": "2SRaMU9m7bwTDLkbUcAm46AtjWQCeqLsvANnnEX8DKXLF99bzYyNAZsEZYtTSAVnvgepbw9NEWzSbMvYvXAmFw2z",
  "key39": "3zPp61zXYXkY7XBJHcmrcdzqrdQTdnELkLgYaHRsNa6NTe7Xu5dUHgJs748smLJpERBryVTEEEdW9XerWHwmQocN",
  "key40": "35gRy2AakwMmcfPSCuTmoiDEBsyy9fxW2RK4mZsd3w7AsD3HLiJoboWgQSQ9q1pwLuDXhyyUoqNrGCztsM2mXw1Y",
  "key41": "CGdzX99uEX6s2XNYrPjSjbKiJfB9FpdQWUbKbdgHPcYF8G9zeUDsuGrctdqAKmRbT86GNEBnRZSuxUfPKWBkUQi",
  "key42": "5Gh8vnCJfyjpqPipPECZ7Ehe1RzSwq6d6EEdATVrh9XNf9Q2URpi2ho3VtwbxUz7MMTSdYqAs7weeryrm5YSPdPw",
  "key43": "2QgBuhEwumiRgxMbjGkmotV9Zoh7Dvbys21eMsLQ2f7nYgP31nTG3HyAXes6W17uiTtaGxewQoZ6133F7EH9UPbY",
  "key44": "2kC9NSWHkKSxrfLQ47xsWiJ1j5B5nGGkgLb3GGqC3SSu1sxCiJ2jrZoMPGh47bMD4nXhqRvNo1MPUkJYzLCyhXDs",
  "key45": "27XNizKS25Kh7ZVsScZ49tDeWUQR2MpG75w1bFTb9TCXsevuRWnEvegAk1Ja8AjQUZ5CBVUhDSE5Wumchm21MMJX",
  "key46": "62mdbLN5tFn3YL4mXegp58B6NQpjgLDKBnpHJJQpYdjttWNb7VcJBWrMiyc8o8J197qX7JLkvoiBUWcg8XNrCmfC",
  "key47": "33MkJfrGZukdhooUaRbRSw9DuZgjVEChA2N1sWfiwXKtrzQpcmUXZ5pRXGVehaFbVjvmqU7hGyXXRD5kk27fihuw"
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
