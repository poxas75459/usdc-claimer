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
    "63qruCUidCdFTBADbumcDXNXMCxCrKUcqL3DzjzZCf4HQfkWyTgMb5cookMDomKEdnCuhPBzQbrNnLsGdVUnTBKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tGob1N2t4Zai6xS8aYN9tFS5T9Suhm3dVE1y59zAQj9Z64QggvLKEhCccJc63mTfnhbo6mQVXy12phSPAS5TbLZ",
  "key1": "5bRt6PuJhTqXam5ed9yE4q6F7bERfjnyZXVJ1pNXC27JGaEztXcvVFkLkPCsyyQXtGWE4tNqdzhSt5B3deH5azze",
  "key2": "4bhnRdJhpZgCAscTeLQVsGgheNtaxG9HVtCkmVvcy3P6DM6kumPzTFkceQmEZTJPwdm1ANCw76A4tJVF3jfwR9gG",
  "key3": "4yEQ2wyNgs5GJ6HzKzEX9q5kEMoo7XH3oqgVYZyKatANcVVebQLw3RCZQZyd1tK2kacKuU8WiR2pdvSh3mhP2KS1",
  "key4": "5Jee4TiC2s9HhDyoEDGqvStoaYwVaSMCRHYNa2xMNSdDdWgJBz5Xpj944c5yNxKg38qZ3swbc8FhVKQZETtqCnJG",
  "key5": "8r6oWvjK3E13FTPdPcKBPxhJhZ86dXvEezwf9eDTi5jDkTahFuDDKGVFMNEFS2vo8AhrSXmf9KibQSCjmvysZC6",
  "key6": "4X21e87RZEJpsBPDiRxx2usUtb18BaHT5KyK167PmcNN8odzKKWDuim2JeUGSdvr9aS8gtF2UtoAbTKcnXuUKQjH",
  "key7": "3wktKeS6mruBbGn9Jjnus7JuEPQ5U3Z17ir4ccSnbiqd1C95RxuKEP78gnrBtpetQe62mDjhcNkdJspawQhrnyDn",
  "key8": "KgeH6ht5HvQ8aLf6ecUwBhXiRvFQUwHKzrBAQSyM86oQUHSutFJsZpc9vEGu883oj2bVguGid6eWRjkvNq5dYy1",
  "key9": "5Z8fJTG1qXGFQqAuKqgWZ47CUrAvT7TcWmxDVKUSJJiB4sBNNKvbwuzBSGgYwdLp7CqoLGXv5ooiwFHjPNHrLBBK",
  "key10": "njmKv2LKzyamvodyR3MXRSbkq3Hv89EZVwBFDiwXHRafrZt4bYr9CpTKaZHmUWj33nXsMdTNiDtABubNRGTRjnc",
  "key11": "2QdHVVLgPU93fZeu82UpuyUTBQW3MJhhYPQCwJU9nWvKYgejaYzsHcGUCCxTd8NAZayDtGds4bVkLehf9HytVPKW",
  "key12": "27oRmpVwiRj4PYCa2sMBivqiqfcWa6VMo8G1SUj2h6bknrfquUj46VnTttyY3CAgHQwpRBk4SnfAA3THecrJxBDW",
  "key13": "4TjrWhBUimJPQ7Kz8dpzMchbHvv8E8VRskaCidPzfR4ioqArErK5YJag3ZcNK972vgxUnJMU1pugT1SK9rPW2fVV",
  "key14": "29WswVhaoRc45jCVhtXZNQJLtsyMoiDbGGkPhV55RoqGAm4ibeAa9ZMrN6GdWSBzAR8aXon4EXKyNDZCyyqdDNEV",
  "key15": "53PWtCcdYKsSZNScoCpHbSWRn4VMQWwxA8CzsnitF2KGC6scFyeZUYDKJ2vFmeevkqoR4Ju4hbC5kBwgYhq6QmEu",
  "key16": "pMfqmjn7JyumrE2NJb179KVgfRyLepGUHsG2zEhjYhxJZKBBX74rwtvWFckYJ7ao7HoPh6htVeTMw9RHAWEqB7T",
  "key17": "5vvYYFPQzAn6FzL8pU5TEvMvR7tB9t7r421ENc3Ux5BPGaG1DrYu5Aon932NV59eLpuTenezs2UZXCeNUSTycNND",
  "key18": "3KpyMJjco3vRzQk2UUteey9co64bXDhP2w5ouvqsRBCAfZFgfmrLi9UU57nUSE8o4scmQdWzctKTRcfh1urjZ566",
  "key19": "tZJnUkzj6kpjgytgbNLLzqsLgJPtpYYsH94rRat6Msq5327YWGEjxsTofFJSq281bnbHwMEktUc42ACRSyCuRFQ",
  "key20": "3gC2fsmRLq9sckw5b8dsmqGfHVkU6QCRiEmX4pceRhuxWDEtKWrksRdj7hjhhtEXeZaDrKEA1fMdfPFcyGJbvg98",
  "key21": "5ouJ9kPBwAuwGqxZgKJuHa4JGpj68xWHR1GEH9efKtEk6aRngRKN23H8Qvt2ub4ZbfbeT3HTGd8QE8SahczYHsjK",
  "key22": "3egvnjP9RUhfJkEsRgBT9tp78Y5cRTrmT9WRHPLmQfts7yeguMDQoxRjhPwUGqTpTzwXdqXzwU9G8iEr4B35BaNC",
  "key23": "5enTRHauchT56qczMoUCu4Py2jZjceTdUdDWroH95VgZ6ketoEqVfzfU4ymZT7rYCprbxr3hVpp8QfaSaE6t8wtD",
  "key24": "GneLby3z5jYLBQUsgtxMPmCTpvRnAcFUe8VQRBUvhWEL6oFxkZuXdAeQ4MgzwPtyvtGUqDmXKrDZSR6YUHjhtsT",
  "key25": "2SFmDJBEdMgCFBdfjiaUoP6BknyVJcLkjps7zJpVUsq76dj4T3vnicqCM8qgnpLPVatBQ6zjuheVvobnSozdLHtQ",
  "key26": "5GLWAepnYUBBZV5b8h3Yq5jSDJkHKDz586WMHVemQqFw3Je2sEKiz9mBG8rR4th6ciSFgpmzHMVTT9Fb9UGVkhMW",
  "key27": "5ESf2En1VCPofzzteqyCe4STyAXe6Z4ebi2NqZ2pvUxHQDhqjiXnSX4eK6giRtEFTYqe5j9nLwat1xGq1KfTYaoo",
  "key28": "3dm1mHJvEtXywtQDZ3ojUVAPj5RFKbFPuNsee4esGWooYtNvXtqjdKnYZYVWUnemEeQMXJqJUhYpRrjpgb6Bm8T4",
  "key29": "xPyeoy6KFrTUxChtN4CgoQcxFAobZHrtLkHYiAMp5GG1c2CZtzoeeK7FiW1SvVbF8Bq4HrzaoabSKHjtcMN5tZc",
  "key30": "5z331zUVUQxzT2pjxb6xyDg1vnATQGEXh38qnUX1PKZ2SudMYuauN9agDNQwYWYPu2dDTqYjM1mmNrdXzqRutsJC",
  "key31": "4gDXQiqBaB4ShHarvTYNwHPyH4rLVE2Y4ewM36DUEwEutfpt2eKUdtyTGXoXmt1bTtMqGzpBorpnyd6mg9vj7rri",
  "key32": "2ckAYVTMYfJc6S9eCcrHCnXSzCAtcdPh4pY4k6CQowZPhfhztuzStha52uzATNrWg1Dwsk5aYPQMFj7u14Xfj8ME",
  "key33": "4RgTwin24GJW8eFzHjxjAR1bNRcFzVMyb2xjuz9f83nZnTowsWFMu72TdpHB28EkX6YymfPTxys9bFYLTG578F2P",
  "key34": "3dd3PsBbESbeB5Qhy2PwAbxXYuDVGyHMApvQE7Azv4k5ugfNrUAjF3EV5KumRjsimoSBui3pzWPBTBXsDFQRNFp6",
  "key35": "QucE7qM6Qje6QAGPFgBQtjorj6XBn6TiwW6cbLU34ZJLvKA9kNexMJJFtUDivt9uUSKKkD84ttBYUYAAtPmV7ws"
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
