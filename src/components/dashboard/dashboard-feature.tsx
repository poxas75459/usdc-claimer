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
    "yQK9nF8dDwNrNR9EdqArZKKZ6WiDb6mMymvTw38RmTsPaAMadhwuw3gzL6vQ1suts59pe3j7AbgLQ5YXmnrGV6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQofBCK9XoDFttF3P3oruPGnjSF9XfoV7GiWgBtB4f4mRUpR9vPzFH8Vje2QEmLqXik2jwPHm9jtK5Xk5SXds9H",
  "key1": "2X3f3YvTGwCNVLmgpYrrt8rCi7LavncUkTvHbLERe5q5nopcJ1PXQDd7jx2JzHXmccAk4PKUT3mAzPxhFEt3a5ZW",
  "key2": "5Wz7FBxdfhwZGyDrrA7RzUYmtWcgjxqXKydMxYmCBHGuUXZxKyZcwKTE4Nb2P8RfGHF4hEvLA7bmb84V3i3VjUmC",
  "key3": "nBpHNPiPz5C1szZrP8UKWNgQBSVA1zw6b7kxHMsLbyhF3EA65S8EaxbLhcqin255BRK33PtnKV5UY3tRtEQhvdb",
  "key4": "TTAhR1Ua5LmbAbjBQb8iJ7anBzY9eoH2Ja5ZMFUpSCYCJbC8L41LojrTnmhpjWLaUU2a6CByb8hdNN6e4TQjnu6",
  "key5": "3v9FUHpXzcwFixsu1bDxDBrEMH7UrUGFMfYxjjDc8s56ax67vwNDLmFyxE91nVib9QdKuL5sm5SZ2rLWDrTYPTtP",
  "key6": "124Vu5tNwS6JojEZeQaakvGGcFTd3qXBbLQgqXTbURZp5PqB7RW3QEDxuzBouQbJxaUDobmS1Uhi3W466Vk559rv",
  "key7": "2zHFp6rbt4q6aWKsqf7Ue7Zfr3KSWvx84izxnjdVsxusZAD9CUxiQYgrENwjHDNmEDa3hs1CdfoGTbMtE8ogws71",
  "key8": "2FKLVPjem3br9Up563mFSaZGKfsNryzznaJhAEWucKdm5V6t3E8DSuA1Z7j5ciV7mmthvGHiuE8oa6vvC1Hh67db",
  "key9": "575zrjt2aZgJKEPZJB7i3CrWc8BkM2jhkfBvpt8vk3QbTNYDkGzxwUhjGEP4w1ZYkzrzghpL2gpjfPGBhioVPkbX",
  "key10": "2pZK9kpxc5ummTKoUrmeVX4eTVWvAeUZp8Kqrq58UzYwZmwCmWHN4dJmnc9AQHrDh3E8UpjTRpMsdKAiLrHvzdyZ",
  "key11": "3oQULRKYkVe8x5fwCvn2eFzYJwCsLUHgpxR3XCrgJy7d13xa6aNk4yeMiYZZQFjPASQBrhjKa4LTFNB3HoFU9SM6",
  "key12": "3i4XWh51Liuz6Zb1XUTuhzd8oMinWitKY9meCCkxmyeadMUW7THqANm5QTqepiT7rFd2kCTYvkSTrWJ67gNAnhsX",
  "key13": "4Zq7reeSPgdMuAnm2zN7ZJsudj5pU1EWTn3YByuJtVrMAedVjuzGDViEhEUHCDvbNSg8Qn5ZLiHoudMM6oQTpMaw",
  "key14": "2oWgjkfcbXZGeubZ6EiURJ4b4NCsjhBPeQSjz2Y7H3AK2ypu2b68e8623n9bFqgewrUxcheJtBvtioYAVhmU4CmT",
  "key15": "5heYevJZRp9vBM6kssHVupqdmbK4DnPbbCj5y6P3pW3TtfPt884h8n1wSS5JGkXzppZx88D1iEuq4noKdit29UwY",
  "key16": "RC9Re4mXgWx6XpLF25hiAVCHL53tVrzaFK22pWJm3pmNGC8DmSaXwKNgXYtptKr8h37DCEQMvXymdX5YjUfAeiW",
  "key17": "2GTzyqPRoBoo4uMbLENDwsojAkkF4KtNt2H7SRyBdBrQeDVccLuELadg1stjvWnApS4DjcbFumaDTJxXg68YoAaK",
  "key18": "5o6f6B9Q1GbA8ymHcVxfUg2aLSJGryfyUrQNvZCkhT4ao8cM3jmpgNMDCPydzn2a6QbHknA9PDpnnTNG7GUewBXv",
  "key19": "q8nM66bhsBfnCtaR75wtwwjGxXbRdkGMRsNksiGsRsq7Md76zdRYWc6qH8ycW8LqQKiDXGypt1U4prchwm3HZqQ",
  "key20": "5yxY7Ce9noPt77vpfvjeDbeKoAVFsibZBYugC73eSS1qXH81FdAgbUAyixr2TE39hw4DTM7Z1p8rCFX1UetsfHHh",
  "key21": "2fCvQZEh7bCktB9sKbTDUbggB326AU47GwQrqm1sT9zZKzsqGbwDEnM6jCFmnXAX2j5cepmMfPFz4ruhsUpTkVfP",
  "key22": "5Gwir86agdmCnAEC1vpMwwwYaNDDmmERMv4GLCTqobV5oDL3ozwdy7otsjpgJz1FshFPBFUCiEULay8CgG2rBN6Q",
  "key23": "2tTaMd7AcQv7cnh5hLm79pDTXcK1R2P1apT9Ku7QhWP2a7yTWduPR7BR9v18KHz61vUpcsBnfdoge7Ydk72CASvT",
  "key24": "2M6UPb6MbB3cTExWVbdF4w4kenfqEo4Wx2GB5BUhcXb52wDeXksaWAQYuvGUaRYu1BiNFS2K22a9yANLdifwwAqA"
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
