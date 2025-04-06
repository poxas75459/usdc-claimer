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
    "dbN9rb5JZixM653HVhYp7a3gqXG2AhTi3as6s95vDoEyf5kRTJ23kxodvFXvr47YiHNL1HJVJyDNM68egr3HNnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZMrVBR15ri8QuLCHr6XdhAYBPDhSr2fvtHowSNFMRrutBxXnUk6XDEPeDMNzVs88ugdTKSnyrAh3NYiHWKYCoG",
  "key1": "2FnWmibTrEveE2v6dDuZJTBot4sPXMsiHV5mL7Y4qxqyXJekkGWxbHTckUvuWYu5LcNY8ravE1VtHBqjaJSxEAQD",
  "key2": "idVThy1Mpow13vnShY2CDHeubnXzi9hw56KsVbdmXjMpCLu5veGuWn74pAZQEsK6EddrMkYzbpu2hP3iNcgz4Jp",
  "key3": "31xerFrEPrYVT4FBzBkkDkzPyUBjZHwtdsFznYDMPVcXM753Uj5Xp5UmwjxbBUcgnQcWzw48nEs2He9zdUNqcS6a",
  "key4": "h87CZu8wPdHMjkeptVRmWmckNENP9BnVqKdxmWoGC97fRLiuBj75nP7sGeUo74f4jDbELsR4CncqXtTJ7VhEtXt",
  "key5": "3skSh9tgXVneYSCh5Ae6RMJAdGnd1jeySZd8hM67trU3evvLk8J6F1xzfd4kh5si2CWre8MikbUrtgbJ3ae8Zoco",
  "key6": "2BdC6DENtAiegpP8Bsbb5eR4YQKzB288XDpzyLdVYZPXh2SgRaKzqM3TpTbgkKxWoX9pWLEBW17A9r5NeTL6Lmmw",
  "key7": "5whq6C14D5LyoHSmmUWeRTCUJuWbxErVAVfeU8ywNpiZ5PL9GFuMnZg8aqAcx7CTBszx3SicmVY969DWtZ5kHV5P",
  "key8": "nv8M8HU1Unt5VMMKEowPUQEC71BaS5CEbXM1Vckgf6reGJsQTHibM3YNmXF1Ae2QAzdTpTkQhfhbtyveBcX93Kk",
  "key9": "5y3DQs3ieaGeq26w8GAa1iHYHQKvaAscbDeb4cX3QHe5L5zQUEmMhYnaZa4LpWoWrXZtc4X1m5rx4rJLqCgSxHpq",
  "key10": "n3aqP2XDfhwd39akt5mVzAkoxjh1rFmwFSkCowGFZp6NmZV946xHSexFQ4zxREGV7K2gnpp52szdhvQxP15xCbQ",
  "key11": "4kSWWj5q3HiNnYCqV1vYgcok8F79ioEb5Mp55oZjWuMkhqYfqTzCxMBzQxXBHNbo1rWT1N8paucshofi2eYt2eQJ",
  "key12": "2cQJejVjMRoX5DL7vD3UbLVFEBT8NAhfcMpXSRYRhg3T7zfMNMTZSEJFcJvGsvAFGvUikdrVo1Q1j2mFcKhMFh7W",
  "key13": "2D8iPsijETo4vAPrxBn1ZBb3bsfu8gBsKN1T7a8F8nCQSWJNm41U8HnRbxo5hng815wrwZPf3ELQy4Knyncuj9e8",
  "key14": "fSfAb3VZiZU4YJo7WGj1zohe957HkS7SAHCxuiZitqWu8hZ3XSnXDQnw9mXRqj2Bb8MbnohgruL5j3p1ySx4gMG",
  "key15": "3U4twhtbsHMuLQuxLaccJR6G5kyaUWDnVDU2dLTFr8msRxHGGzwtB9uzUZfg3j7BeeLphNvBj7gG1Bm2nPyxXUB1",
  "key16": "5W5JTVKLdoDiyPBi684k4QFLL3kDiUBijozvp46B6ToqqLGTujkQBDaab4Bq5r5DkeV3D3MaKd6CxTMsTJ4zBZer",
  "key17": "61V4SLtQprJi9iSAQPfxibqUUWBMqAcj8fip9CLfxEaB5Fst2G5hhoZR89spmTM9LLAChYKs3jYZzfUbnaqniu26",
  "key18": "4Fmh8VSj8gpJQeEJNB7UJJY99Atzyg3kkBHxR9ynfrutgrnnX98eRZbBCnKJXJreUz5uJH7KdMeEjML8qefZK8QA",
  "key19": "2e3QDw6ZJKSTtemCyGNGBekEDvr2Tv4qGxAeDEtCdu2UxoGqQmd8Fecp4uEHhSytKN5n9Mp9ZY2mQNJ9RPNBFvQg",
  "key20": "38y1xRt6QZtKBuawVEg1zdduEYUKzotqoSkaAbCv7QB7nUVqagqC2iDwNe2VSLvLetQMZj6fLncHVWpz8J5idkWc",
  "key21": "3bw8Ya5n4DjWmorj2sK7i9vaMxuNNQTgzKkKL8f6deDUVe7bbbpSg25yeFm4TZmQJtPzuXDmqNfexqM9d3oNdp1K",
  "key22": "3hfmDBCGz6QLZwG8cFP6sCqY6FA2UFRhinzCxNQrjcC5H1bkFRyzMGPBP71Bv35wnHoKn7A4ayUfxxrmocy91Kgr",
  "key23": "4yzCiA1DXzSgupsZCLteGWSVBxobjpuDT75AZkat5sqdQFN8x1aBW6jLxkv3HVJxri52wEGkrGArgG6mLVS2QFk8",
  "key24": "5RiEpLnWpZ986LAea52imyJCtfChMvtAjb2ECSxSYSdJG9MCUG4bZmyhCD5uwKBB8d35sbz1T7nv3gg2An8hbAYc",
  "key25": "jMa6PE5QEmTJ7fbD7SAEjSoK3qfioBg1NwcsWKAtKSz6hkUi1qkNx9KD6LKhPjSynHMqJJFgvjBXwo7ezwJNLXP",
  "key26": "5g6ybhvFj4twh9yP2QcoWcfDw7DXozqxUEMTJzx7ZSQPa84zMKvXxtvf93je9Zm1aeDs5xQHsSXrMmeJ2hUTMsT6",
  "key27": "fJiqmDDYcAooqMggS3z8tBt4V8MH4EQqA9bEESEjr7ry9AFhduByBYZKWr2XWFd4nPoeXizXHEbfnXbqDrke7RG"
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
