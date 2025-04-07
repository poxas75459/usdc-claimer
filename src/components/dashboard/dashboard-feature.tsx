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
    "5d9gCtRpfC7Ep6uYHAR1UXAapaktNwp5AdHrmfgWuBSkw7KWkDN1kMy6g2EHmxxih9a8qw63KYH2nRBhi1NM6jEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFDMbLqZBXvsgEyjQnE51WQSuomAXs2rphtuPDWsWXP6uVF6nrDYZhtZWk3VDKzqGWJ653SJ1PP6iebmBHgfd7b",
  "key1": "2h6sb9o8MGYPwWXi2BKi3iMZtqMohigzLkL2VSgkBxdWCSTQK98H4yUCyTPeQBvGQMxX5LNr4SgHdjCYvV3fZaJW",
  "key2": "3EtxXMSPyr1HMLVUChU7NFtHJGTv25BpB47rH1JoMfjf1qB3FLFaqouyu6BLMpeubMKkeJSrZSvVzegSYATqkwFo",
  "key3": "4s7BeCsicv6YfCBNo3TywoTCpp23tgLbRMe2DbGZBBAgJHBSPrmPAsym6Qh5DR1hKvmrrW522Q921pi2WDtUmBoZ",
  "key4": "2Z5KX2y6d1yF8AidKHSG3A6BMWx6mPcNtF92hcYqzqumGXpBgG4dHiNxLpQF8fztfuBqEZ9gcUjwKaR3G9hojM5G",
  "key5": "2jBhKneuZCCMMH3PapYbRG8yMZTjzrX4qD3nfviAM1hwfpnKWdCNKMsXYQne28fg5yu8pk6zeLWJJL5Am5BovnRG",
  "key6": "AbjpaF1ve9XCqBp2SZx8hGgUMejZK4RWyNV1726kcSt6vG5At7KZmBaiEapWKKBkDmBnVKmB2H7XhqkLT1bgrYy",
  "key7": "4214pwHqStabR5AU14cQCw3JJcJTsadjErLKqWevcUYcrBuFNYZ2YdrbnGYrvDaGGt4YDHLD3mFv16vj3sKqjB3c",
  "key8": "HY9YSeFKLD8K1U346qJK3P1UmVkzpZ6Wabgiysgp4jVahJJ8wFyguhFYt9zemrNEVjABbSafRK1AttBVMCs3RSa",
  "key9": "42JWjYvvDjqzCKVASQJnasWpfMkUxNMyoHvdMNLnDu5ceXmLHq2quZVjjUh68wtDyuVKU4qpQKMwHMpiJKyx4d7W",
  "key10": "3X5QwY1x3jugmBDwtAFRfSZ9Su3tqEbEHvK4f9FcQk5XJmaguTk79FWMebonkh7nWuMW32GHCSnsnRv24QeHn8kM",
  "key11": "5XwJugofwvmATWrhrqN8ZXrkf1E9Hwqc9UEUCRCkrmwv3fGC6gBLVReHunSiRmN2DLkSbYYK5KG2QWyZhs9HDbtQ",
  "key12": "4TQBqk2JR752KpLmiP49QjDxhEqm6MA2j6aaqL3zFH56Bg51b4BBhrus7s2DCWvNN3tzc3KiUdwZwhmhEn79owUD",
  "key13": "31VRFtvv3Juw2ry7MQ6SGsJ3uLkw6Nd1XM6CCDYe3sN52ByQbcrnL7L3Y57X53FDTQtE3Uv7X2HdWW6DtmfQPkhv",
  "key14": "H56VnQ2w3qKdZJyXbMWozYhqFYehs76cZai2QYn5CFvEEqsSdjit4gpmAdcuf9Y6un5vtri5L5xQrzbocq1kwAc",
  "key15": "v7STHg3VwRuxvNhTRXKSFH93wXEM5SddAfS3Tvr8pRwTowSzS1YhAKiwT4z8peFSctQwUcLvknafF3XkLpbXKoy",
  "key16": "2dhhGKTpd4tcFy7tMWHL21Z4GxsUgUKvFhyaRTvioJqoNM3uqA9LLkBp9pjYj52VuRVzE7Co4A6v9Feo6afjwqri",
  "key17": "2W9VUNiUCCEu5fEiHdH1YLou2CtzV8rtk64iRHHdF7qwT8Zu1VE4vKjy5pfKZ3qfqKGxiFfNRbTrSDsmSH7hsiyg",
  "key18": "3FoaDpgv9ewNKvE2ccnm7zxnAFzgoSCe94BUNPiFWDeGh3Vw2HE16Xso8jVJ5HJW23VA3DWJZnuzfMW5P8BpjVyT",
  "key19": "2D7TZwyF28H6QM2jnpfCPEGdjb8N968AN92mtDWJ7bxpYd5mBrNT8jJGLZD3QQxkCSi8i3QDyYAnNXGeLxL2nMLv",
  "key20": "5RuKKTYiTba1Rr2FB39rP7cowSv8kaEvKDr1kJYmtorLExuzTfvmA5vkud96gtUEJtiCbKJJPaDeUcAMr8JStsE4",
  "key21": "4qnnHR2YiGKAXtcCqUWgsLKexap2GuPsFZik8LuEAoXqso9quF7qj41XRP4DCnWqBkmCuzfYMCaehSmTcRZexVSX",
  "key22": "4yY6BJKi334a87xh28ByAEfsdy7J3Jt9qfuTHvyLzko31cL6t7DLuo3UCgq68RPd59iNgLPNMr2fP7x2MRGN7aKy",
  "key23": "2UQ3L8SpUEKfU5Gt3FMy2VCFPzorvF4jHGdqkg2iaoT6o46ScxuGdGiDZcZrPSgzZjPk168ChH3wmuaVhVTAx4h7",
  "key24": "4FMot7d81bEddDvKNy1LPBybkxafTRKisnNZ6WTdWUNmmtq7SFuKJSBFZNe7G6pc8BXFL8oMiad9i1815aiEYVn6",
  "key25": "2R5pMvFjjmmaQsaBprsbYe56ATrAwGsMxiXqSvYMbBxHond671me7cpp7VonT9UYtX3vorpcA3PVU7N6ZkZ3pnEZ",
  "key26": "3CYPUNSJqawGLMkz9Yjnj5VkNz5AfMndTLvypozLS5tGmhT8zLKfjGAwpHH831EFQWbV7LTVna5KP548E8aUZhVD",
  "key27": "5VzYX1oaKm4cH3nBexNHfSv4zgpnNoC6TqnVKs6kJ7qAvtYiWDMcnYxa7jRTRZwYd448f3BRAwMvruJb39zCScw1",
  "key28": "y6bQtKfgU3rYa1F6sJAGPm5NTotPzeyqNPCgZLaDCcwqSwY5CsZsL61bRixnYk2KpeJ79z6euQX5F3hW5iE4RSZ",
  "key29": "5AjJCoxFD3dsXeZS4WjWvtE5a96DCMdiNLzX7QS53ipi5rPaty9Haqm4gZLmxAsRbhZNUXp5iz1YG8Dc2LBWpoDr",
  "key30": "e3RfDwZ1ZusRvwVPL2jJeBRBbebi1td8R32NunBDbdfUpkPLP4kDNY2ZfUBynFjvLU4J3fuNBuSq1srsF4fWKCr",
  "key31": "5hS4E1c7prwCXL7NFpZcVP9gXSsozyy5NELMqaFbhYj5MfKq9Gt1aujy9hfPB9mHo65fu9Wm8qnqj3mn7Zo5LrvW",
  "key32": "3JxPNJzpbt9e3xPNiJEbgPQZNFa4MVY1CVXkqoLsMaajofz1rnYWzNQFzUKWTFXuR86Kkecx5ikjPZRYNy1cGT8R",
  "key33": "5tj2XbL9jZKiQJXTQiBtPsp9tM96fHnHgpLSr9KFiXTx8V9ofjTBEPBWQqGPC5WAgnmiVm1fgWJekkrAFshEWbBa",
  "key34": "4BCM7Bj7ugAuHFMUMbRLwKydzVaKU4NSDbncuViDWtTcSWJ35xezPLvJ6tVFa9rmwaLc8NuZNrY7nx3rqWufzfTh",
  "key35": "htRxTn1WyBvBKCfMjyqQjPyvPNeVVSqtLDtwWHq8gANY8Fsm426xQZ5PfJRDBAZsQHmY1HstLzw7pbdygQQ4Esw",
  "key36": "44wEL3q7bZSkchzD61835c2RDwVs7kLeu89zKuPNcW6GcrzrTizmWSvpAadZVQr6c3s8QXE4jiU226jUBN1Co85Z",
  "key37": "4yFccPYHNBfVzonQZtjuNSJhvqvac6Fp9nhMkmpMgjxETFHYtPf4wirJtEpFkYGQLo8JKFCNFbQNcpEiDLdHUQ36",
  "key38": "5bgNTxLKb7hoPfAgxKAMyaTiW2jPBG7WxwDdDTmi1KGkDtLizwvvJDc1yBX3ez951PAAmtHUGLj6rWXjEstiyTke",
  "key39": "4eTpeQMDn87mNNgifwHwWQaRZfWdo9jpDoHWi33kLsnPSFw8U8sro2TMRLjEk56oMC5aFgy3S9QvgC27Y2eJzD1s",
  "key40": "4yfPSbeW97hWTxCRKRGuFE94XZMxR2CzewEaWHNcbmzpyZr2AZXy4EJXhQ4s3PMc65ZR7w1HJmju8ZKe5xD78mZD",
  "key41": "2djYYtpivB7RZFRqKAgYVKdkby8QhryNAJu5d8Diuab2XNryqFMpbinkRLTTm62KnFzUBPNkgaTQGBtWFcQXCXKC",
  "key42": "2oiTxR4JDmPQ3xyCc8ZJnqTZCnKETCrY3rY7QS52kLeqTtUTG4LQAGiTfVhf9yQa6P6NcXMgYscFuGUfJaQ77HiM",
  "key43": "DpQpuxhWNHfYWRwxm9GS6eaQQ5cZ6Ay7bV5L63pmpzRCcC66pmJkDnyMzpkhFK8XkfbcK2MXqEbacChwV4GvkXe",
  "key44": "4umSMWV7D6M5DzGBgcmAqmhJwzTrLRGRjewC6KLcWS5EvzD7rsGy7D1TxpvM42Hbaj5wNLKAzXvmEyMjHs84AzKc",
  "key45": "2EnCxhwBnFpn3dWF52Ei3LyVuXTgnstQXDCgWyQsFTPCyZS8z7D1t1XqfbCqnVT9A7SHw25gGJiRafa2krdEYnKf",
  "key46": "2WD5gsNnLbuFWBMpzJdY8SrRv6T473CgHnZbTu6FXW3qiAbuDbQDF5ZpxGN4mzEeFU2goNU3QYtoWSUCkVVbXqVu",
  "key47": "5CjCopoRTDk9wUoMR6beGekCA3Jm4ibYw1Za3t98ZFXEMSvvbH5ua5Ytvwn5zZs9j7eDoofVy63Limiz1M51HnMP",
  "key48": "4noZVGYQ2f2Y6EkdyxRDT488ak6eBwdVZWLL52aaJTy14ZUtxqAA7hkNot2bBktqiCqprP6XkUGTfZUv3proR2Aq"
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
