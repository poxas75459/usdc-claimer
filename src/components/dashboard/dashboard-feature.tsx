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
    "2Fij8rUxkNCTmWWYsCJcWVtVrigZWRNEneJo149EBkDh7Gjf9axVC1T6dkSPybKD6WCTqBB47MLjmkhBHTwiWaco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BzYkAY3snjNwWfgox5FoQH5xJh1anmSYYyMwYQ8ip6UnguAjRuSheQdFdrSoybY4zdphhWR5jYNDb6zXEWiXe6F",
  "key1": "5DcDxD7mjJwL9fB6chtqZktXGJsfMaSRZkMxdLZGsZVGQrNBy68hotw7K3xwZEfc8P1A1D6MDwrmySG8Tb63ESeY",
  "key2": "3isp5gtf6Kw8ShbTyJLTWUnJ1jSMtEBxmpU6JwcxJM5NxadZ75naMeyDjar1tKb9xSty7tp4S3wgpEgKmBHyjVTE",
  "key3": "aRCfsogE9t3BTdgf7PNvzT1wvy6gzmtgsA6vuZMvErweybKh2zEK8zgD4RCaNGWnavxfBm9JZSPxe5zGxrZxybV",
  "key4": "6vbv88hLJBNd7H277msc6t4AWYfe5BMFiBAXQQALERuQrwTBxb3at8D7C4UocErFXq7ceDUVs2jTHMBmKNEHpph",
  "key5": "5dXxs6gsed22cC4QeAKLgFo5HbpsrXivtSPTeyYS4n2VeWb8AtiTdqimQw9PrW9YqUG2GV3AQbtpSpgP8Xk3EktC",
  "key6": "1cmrahC4gFjLKeg9mAaiiDVWvoZNXyEh4b1EnmhAGZu6BcRFSXNoKjGhmtjGZhdjHetLZvD9BuhqhRSv1i9eqgH",
  "key7": "3GMSK8iqT2q7dufgC9tdcw5d7xSqGoT7SnhNm2ojQxTrNkKy9q195nMgTRzNCShjmKn6ZBiWABwE9tEACXfk88ZH",
  "key8": "SiNJmkAz3ZktoPUsxr8GsGLLM1n7Z4SfxDjhgWAs9pCk6jBemJoy9m5xash8WAwHGRYgg5D613Fat8yGjWXEHv7",
  "key9": "xyqt6JcCAV1oRM7FgCwSb9RyzBC25FuLvmKsT3JNgDL3zR3NmxEU96HE9CYhbRFe7sV6qC8geb7QXwC9D4TsKth",
  "key10": "4dBQpGR418fJkZD2M43cgpcX6KhAvDnCbC7XvLkgus8836LRpwLbZV3sBzo8hAQHFTtcB1WCuJqaRJSDKaNGH2t5",
  "key11": "2zRxbhvH9ot2EPUcXDoW3pUsVMxPNCkSFVzh9AJQ3dDZGDTysY1c1fAsGvSnK21jXu74RSvpTX4VTWtr9krNX1LP",
  "key12": "3gsjyo1ngWFZHAgbAKRd6hkBX3qibaQBx4w7FnXqBXPz4mZMGEUARt3G4nnzjXPv3g1XzyxHJk52mNb1pw3ron41",
  "key13": "5bZdHXpWLoWQhAKRDa6Xh4KBsmCow3c66vaRuZSk6eTomuBU3yWJDg1PMNWLS9CK2aAFATYqLqJExN49tj59XszE",
  "key14": "N8ssBuBXEiU1SfdKyQyhWZer6gU8JbnTCa2YDDLLghDQbbKa4X5i2tdxMPDcNZrmmRjqXBYnjbMQT4zK3ZodF56",
  "key15": "4GfZPhSPXgEGrZ2zFuw77d87LYTm3r63yUkHPP8wtjYQALj9XRhS6xv2dWmh7mQdsycJKXx3avyEogq6cYFbp75s",
  "key16": "3qfv6t6pofDBnAQQu48dXatSVVfpwHpXY7HjCWiD6EGMkJ3uSGj7MDRfuwed7PJ7zbamYPMRMXkHbRNZrxUnMrEg",
  "key17": "W4zRFGRbZCnaboqe5MEEFQGdKHJtkPTsjihnfwtGxhKH5MXALMAcvNjG24mbjeN13gYi9rHj2HJh4bEQ6Ux8aen",
  "key18": "5dJ2rn9vb3H1K3fvtVfqBTeu9F8DEFD2Knkt4A3rCgpRTmhhF1JiiAJWddXNfX4BC12wxyWtd3Tku1sVS38W343y",
  "key19": "4tfQdNkaGMnLMS7FKad9dFeLHMgsNmJ6e6HktCRKyCLyS2Ri2Uy81SHZah1WQ5kUHeiAkbM9WdaCxq8Xuyb6j4j2",
  "key20": "DXENNpZ8XQ3RtS9ZkkEvcwy1KHGdtTKMhc2d7uKhKCyJz4CCDGpJ6TbFGUaikG7ihMesBN15WNBsyM6CPurDLyZ",
  "key21": "5ZSjgTFgRitmEn99kyAKVX8vZCxTnMjAgE5ZFhoLjqSH2XeZb7tDSadwrwBLV9ukjkpBqchu94qXJRwtmSk6f3dD",
  "key22": "2GCsrZBKQvSW5QEB7psH3cmxVoKYaf5MKNkhW4LvzAewJvzCsdTPSvTrgfoUi6wKoSWFb73P71pWtWDGSuSv6CTL",
  "key23": "5zTuioRXgiaj325c9NWkgY3DJdPax3sBZYP6NqLVccuCpBs7XRQnih9m2DrEbK7oHvV115x4XSdrR4DU4cuRDhQK",
  "key24": "3efLSddT14oVPKKeQPeosiTFCrEsVMt56oyaJUDPrkngxH8mpw3VxxFFarcrv9fuQyqrw3a5nthQzLkzeZ9wJn1v",
  "key25": "3tbK9Ti5KaFFPLeEuWAACiqkzZ5b9PRQJ9vyGfJAYUQoas5SVmUsdDbGp5neNTzmC5XDEJiLb8WUdHmA9XMoLh1e",
  "key26": "395WNXbFwrN5SBUwUnf6SyWzoARQUuHVAbPxrJC4NW1EBSiUXcGqbaPcC1jpuBuEgwtt9eHq3U6XAxzGbDoXFVay",
  "key27": "wicQGthjCS3WgHTxeZxvMfSxbvcL2y97vgNQU4WLmTEQAttoFrcX5favVKWuzcXZ69nopNanfz1XZsJMLUgsRst",
  "key28": "4yzAT5Ji8MBWSXs7NSr24XZTkJzcrFWxQfRb2GWe8GTPskF7yuavExrMhsEDbnkYWfpJtMbv8WHc2tdTDTjJZ77T",
  "key29": "4uE1NikSG8q5y2k9b1rFrtZVhPbaG3xdPMcpxZLsw7V7ofyNqU47dzmMf4vbHb6uS6DZmjvFtghoHAFY9E8zNpkz",
  "key30": "RDxShwcFEj27f6NgaT6LqD8oWZnnQ74k4nFNHhHJU7hqMgqenWTA3TsjYv3YMaAqYv7MGgaH3BAS7TF6xu4W8hq",
  "key31": "43RfTk1jaLKncag1xoo9wMdy3GxHeJh4VoJ9J29JJjheBDDuX74M9tJKXyFv75E3VhX7TWDoCZkHryNm9z3fgECp",
  "key32": "4PEhL4e4PXVREMrYLDkvR3P46SZUFPTZMGhzPFgJgRvJHP1TDcyGpWb9NBtDygAy7nxW9Wz8cth1Y2TWZ1RPGx8e",
  "key33": "2k7tAFERGW9H3fae4ZWXbZrz9dCZtTAEygY81AkPE7XVTs3zsgvvQxTru11uhBf64mhYn1PHfsPvFVMCcRKuPzrr",
  "key34": "2QRXHcTKrYVxwJ1MwHyjRpvBtMmHb3pmJoyxskg35tjAHKbUCXdyUcLzTDkLxwkHPNqntzARRNkcnwSfyNrZ1yTy",
  "key35": "5ZwebmZ3h3dBXWroqQRQqx6o1PsAFcFCtQmThJmGsWr6yKnY91HCHucMc1ErUek98ZtxfnizbNV2Tq1o7Lo1F2pM",
  "key36": "5cokeggoE7mAMCzJSFytwLFdsxrtRTpuo6oRxAzFDD3Q1dpreM7PJ6WxqXDTP811cpVzH6AoqP3FXMwRVrvP64j5",
  "key37": "2Sop8fLQu6fZYDgpMSeECtcrpQKbGnjiHjTQGMjMHjKBNVE7KKqg7Jwr8iBzqR6AKBifAtLJJjJeFUhFDYhUMU3f",
  "key38": "2GJWgqhbtQA8cxzEZfEXWCu5zdBLakKgx97MzNGvaFWoUygTphuKD6xfatLYT4ET5YX15NYQ5DQ56Xbiy6zUpNtR",
  "key39": "duvpdyMgH3GSudJLQNor9Jhjp5dPoAVmfACtpMyshDeUbZBkAF9PHDnSW3BvaTFqvpfEcSYdKHDFYrFYCM16bDS",
  "key40": "3ak2AKz9H4DhSi42DvgeELWB6MLgUaRLs1zzq2wjQyQMKrBEPZ68g7c7S1Z39phx6CXoJEZxb6w2q9JKBc7djPDb",
  "key41": "3QKguu7A9bUq74mggv4t61MrvrjEzeMs73ceNThxsWfcx5q7u4h4ZBfskKeuHd8kVkd9C3swV3frMrnYJcDZcrqk",
  "key42": "UBSwxfnQd1xxVZ1FEjQugavFr1mw1vijDhykdHgVJaBDe8RKeAcNqp8H3K6rPsKgmvQFhytSJ9giAE4y732e9Xa",
  "key43": "5ydbcmYKbeBKD9SJNb64XAiQ3nmZdGrz36xRN5HqFXcuyTohJ3TmEV1yUt7ZWNh5XhtmEUkALquPeQgzYeq9SvEt",
  "key44": "3jHYws1JB8Sv3gYookQsb3dY9hL6bo7QDsobLVis8EWnaWKX6QYyYMmP9YYNFWXExn36B92sfH6QBskvLC1iTXaP"
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
