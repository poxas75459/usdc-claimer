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
    "2AGXiSQSaPeDPCCw8CihKeU3qL7aPpBDC6v678N6BAuZMZJmFwhxdkwzxgwrB6E52C2mV3cVrhKrfQ2JpqgYE1YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nPqox2UDhsNe4YuofLWDA91NaUC19tmibit9i6VAgFLCaCMgPa4MChtaNh7VyGpCPWigjXysdivwBpwfrnef9Hq",
  "key1": "5uNzawqJmB24PaHCEyHtGAEwFxDjsWoBfW9ow24TpuJfnAaneDdSuktpqhmR5TEpPopemFT5vJ8gMzT6xx5fjs9D",
  "key2": "5HxchDSFz1r4W7GECvdiMDg6Wt6MyhA7gcUUKUCSK9qkYZivZdJSUa3Xo3ZRqZrqeeG7bTNKg6GLFeyVeyoi7S53",
  "key3": "4WsrFyRoFry3xRck8NnyrrK7sGy7ysN9rJWVuKqKbZwdHFgVymZue4rrnpMuXcCscez8rski5Np4vWkNBGMEdbzY",
  "key4": "5UMrewxJUTNmoF1ML3VmLUezVt4rd6aiuWdmWGXDmyLBmQ5McTvz7CMbAU5jmariugW7WUkyLKDxRH4Rm8GAbXrc",
  "key5": "2iPJmk9EufcpfBdMU9yhqJJGYPWeoL3hHVk4nsBToF2HV1rwerNcXYu42yEoAzhaxP49tdgLUvJTvd4LzKFqQd1b",
  "key6": "49qTjYN3MF8xoNhZizhqieJzjUGUQc7bs71A3y9Nuh5KSHiS7i4xywUoY2heEgYJJtKWcLde1i2hFkz2ANCfa9F9",
  "key7": "2nn5ppAdT6E5A9vN2epvmBN8jRg7486F837m6veJr6epjAH4uPaio9juCdUg8K9tRk95FUUmZbhajfpkU81D5QJj",
  "key8": "3bj1JjnULqwMdgrQReQxBBc6iNPAYZWMePvmBZQpUfbxnW1zC2ZyVBy7Pam7id6QH88aBwLNrjptFxSz2xFE4fLu",
  "key9": "cDe4ZeFLaQz5cmVvG4WzakhngXMj6AQfTW1Bx5Af1S8eSAmfXWzresCYSDyJDKyNP1L39ehkDrRKYzXLhhdDXua",
  "key10": "2Myc5XQuvosxaQUNLdHycN3nRjspDHurJG1s5Z2b88sDMEeARYmnZwv3EavYhhKpPj9YWRB9DWnDrANPp4qrMmwQ",
  "key11": "29cwEHSxPFzauTS5PsDVvEkvwixtsEBUaChuCU6GV8JYgKA5vxXKtApKcWk24xG7oVwz3fsoPTTcYprfjPf4hu7J",
  "key12": "2dvgEBpn4hpUGHs3EUMy3T7RVovPi42ZXsdgsy6fTqDFvTfzdQAZM7cJLFmkFBUmXAMkEoqtCPn2q1nWNU7aA434",
  "key13": "JL68ahrHFwZqEQCpx5Ke9k6N3PygPbT3KbwDX8jsRwSAi6eSJT32bk6XL3XAXuURYEDchPkJVMbq3V6e2VXLV2H",
  "key14": "kNvx4HegbkZrw4CVpcFfeAwVXf2XaSk6djmR8Hg56sY3CPDC7WtNxiiqUFJVRhBcsXwUMgp41PWbyyBM3jpJRn7",
  "key15": "ibJjkDwL6hiXAyJo1LZTMb4rmX7MVaTJKx6iAXru47o5jugaxvXMbCjoitTnqHNoz7JhyPSV8KwZwrMTJTXVxmw",
  "key16": "5Kg24EZwdYUABRUiyFjVZnALWh4bDRpkq8xe6Xu5tEkwQCCsNpLefjL1A8LCC3Z38u5qAJDKAyjrpPDEzn4g6JED",
  "key17": "4eQDaf6vLAeBXEEUBh7fjLo4NAcjzpLi5meFkWKM6WGAjDrfGSDc4PRoV1mLfGidJezKwUx6L1hmsiaPWeeS9AJR",
  "key18": "3tDfDQJcRc7gB5utygAmpfQNuuDtK2HYr7xPC6bS4S4jYN5wuVitYUHYKgUphuRzoaFERyLeFAepBxsFcX9zhPeX",
  "key19": "23AzbTCFQVxsEzpYdaAjUfC1AqzTg5SEZun6XSvjPUNXTyMCNnKCNQsAgsLrW9Vwk9TVmZb22mbimd9MWnDxkMpV",
  "key20": "4apaovPwNhZ2FjpFrfQHat9quqc1aXfJkBRZ6H2YRjo96inZtx9WdEer4wPgqRAxJqsrF8wZWRXoBV2Gk387qTu2",
  "key21": "4uwSU8cNnaJupfSBERJBNWFMQ9tyQmmmM5MRDjreA9x4wawEkaVUoH5MFioixcwkfWce4N6kDcFQRrsieyxWmZDC",
  "key22": "bB8QB97KkhXe5bSy6EGBqzFu8AngxWizTborpZBW5swzj4rjmnScU44BxxagSofttJAtBhxKDHLjdsiQBX1cgtr",
  "key23": "2K16hXs1H7dKhPcY8e1tB61isf4GKDYHfqRq54m1LZPG2nHA4CCNSbKzXTvfSEZwiNUPM7725V1GyU9t6nwewq4a",
  "key24": "2xmcr84wk27f37G87Smn8Jq3bsWTXMnksWbyFijwtqvCSMvgGF94Q4QTTUQfQWigk2pPNs5iCef3ynbn8wLhgmfu",
  "key25": "4266dgt8WngyMg6YUfQZU8ePo9yLWC8AtWRgWST86DRBELodvRYtrifEJ6nfvYXeYnc7jMNWQCCHpSwDKGJ49diz",
  "key26": "2krJ9aBKPyGNpoQ35LiNJTf2p73nkLZC6mKULj5NXYDfykFofe1FM97CQnMhNYXARzvWk73AtAm16LRJvHxtQkNL",
  "key27": "5qTkD68GV8ebSivSt4KTvqKFBEL7f84NTinXPS3ejHzaePsFxhbHKtQgCxMP8wzUhisnrMERjjAwatpoSPszS2UZ",
  "key28": "5Kr2SQmoXbjnbk6coBWncy8omvH3AV6UEFnGhwGgkjVWEzV7mFxuBpYKKz9psbJHVpaWGwDKSw3Rzij6NG21TGD6",
  "key29": "3vMcjCTdgqFSvLyJ6kj2Fdm6hr3Q76TDETuRyqB6ksz8arqvCtYtrBp6vzmWFb9P86k59LWbnN3sgEzR4Py3nmZM",
  "key30": "2wporroosXgP9TdDDQDxTK26Z77wKaHPdzYv6VCahTxndYkBgHFdomH1QvNE3zduoBbVa3GoqHd1f7MoXReVhijJ",
  "key31": "33ZLE8ep8ggJf4v5ZeCiTD1uaWsWiPDK1jtp6s7zBXBw6o1BvXzLQQKGPBGqWUD4JeDv9UFQ7tej4X34Vo2rxQYh",
  "key32": "5KK41U7TtnoB27VpKPt9Utt2R7E4CiXSyKBF1BMgYzZqQaZdtKoykV3emS4cNjiPUZWN6QF88GZMuB4CDsQEMttN",
  "key33": "1sQR1q7BmmfSgo5o5qPv9edB32hmcuXo295NpVZL7Unosk8nKqcEfLUob82WBjH5HYeGci7egmrTisXzVzrLcb",
  "key34": "cp9B1oZdTTJmuc5w9xET9wBmTvQpKPCzGmocoVrr4PpF5NmpWybEideAYttuLfV9XfSsiQPApnTYhmLGXrkiT4G",
  "key35": "5KBbHTYU3wbX51rciTkL7FNUN3iy4jUh2NF7trR9h3m6uaTxeYmRr54vnbgJCLCY6q7JSJUPWWTXsFfNBS6iHHZL",
  "key36": "2WBgFZtnkfoKqDwFzEEYxV7qTwVPgf6aGG3QGPWcu84LgGep5bDQ9PkHhtNK3rWPvpnaUJSXM3derskCMsjnk695",
  "key37": "2dAqSgAF2Rdnc9b3nahfUKAgxgeBLbMuZ5sSdEdKCk24YxygkmbE1k6EQJMLfEHj8PmR6JchD5gmj5pJ4vmNgs8H",
  "key38": "3ERA1ADcXnLgFJEiCJ9NH1SwWJq1Fw8iVTv3wztVAr7Rmj4Y72iGZP2Hmq1mXVWGp3EavicKZgZtfzmQjugifmcp",
  "key39": "4T3zCskPnuZAdKQK79MNGLjYvcFnSBbt2aMLnyi5QqZRRvE9faAo21riSkch5H21CoVAMVWcengvbLwtX1SHa4Ku",
  "key40": "aAAevpyQJ1VENktjaFm37RiDx9Rjs3cgMFNXjyJxCbu9t7LQxnp6HshuUMfVkBe7x8dqYJRv17GfgMjUhV1CUV6",
  "key41": "3t5dawUQkvnkMDVmZ3MMeeLYyz72VdTcZabpL6xBHK2woxCVJ1FHDGJby5xD5QamhFL2Q1BGMgf6hSSqrjKz1DFn",
  "key42": "3HR4nTQiQZ7sAr6sYtVVxfr5Dita9Q1B5dFDYPnUa6kRBAHNanc9JdHhbyDmHQSS7jcGJLynTGnYXC7fKbCmFCPW",
  "key43": "2CF6Hj8PLwXCvqavRvh8yoamTnJB8mQd7DrrBfTSRg3ivDQxdnjoXU6yUd5WkLPpmz9FUsJVaJDaFBdA1xSNGfcv",
  "key44": "2PZ3BkaLWnATpZDYCCjbHaH9Fdf7XbtSrCTQ7VLSjXGMpWoJjEoHEb9gLR8GmsNRKVWLq4B5GFUtSHX26myQpFUW",
  "key45": "5VqDtZmJYH2QCd3uqXq5K4gxtyPXvDtPEuNYKafBEe2Tx5Cw8bMbypbH42SJo2Y2u9cKN6n3teriXhMd5MH6Drcb",
  "key46": "37KHMyzbvTgw3uMveB1AwEVp3jkCfxN3vA7UkiWk3uQfsYcbUou7LvGcwypknVoadzzjqAgcU4UxgUrgSwEoocSD",
  "key47": "rta7iVQTzY1wGCLUaft9LmAg5E7kqHnTryXeuhxXqyZ45w8xBDBWMbDtPdyPnqAsAcgxatHzd1jTkawFEkoSfN1"
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
