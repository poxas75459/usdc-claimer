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
    "sykBWgBYru2zSr1dd11XGXaZeKifHCcyqF8Ys2Wwf2CFd7DkxpwcQYUtua5Sd59uCwdtehQQ9X69DaBBmUH134D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oaz9aue5Ku4QSA9CwgsW6HU9MwsvuMJdLimihZVYfoXzhV9XNsyMZbQKemSh4i8DQsFeBxENX7syrM3kcsJCTDt",
  "key1": "9rTwKj7KmLPSEy9mTJrPczCgMRSvVHsAMdn2ApALXrRXtayRgFhY9tBDqUMVzaoZF3h8vegS27gYCoagPnjXofn",
  "key2": "3gWHHBPFwj47UKCG5stktNDSZGUQMwSU71YQJQw6Laz26HN44bpqyvtdY2Fhtck4U1x9Q6a55hDgHQPke6AzibFM",
  "key3": "2nyaLLS95ejAw1AykjDKNCy3r1viZYeYYDx3dvsnc6ZWJ21wigqcMAjvKoDVhRyvezAf4DLK1qHHrt1pcXY5qPjF",
  "key4": "2YxX9B1BVE9yxtYwarCkosRg9PLLxnBcZF2Ty2nKM99vF2aAWF6jUkVkFFreimoMXyFtMrjeb4KvW5SnhDKn2pxv",
  "key5": "4jJTugr9qyfHkGAJ81WGnqPwfXdJZjJ1dqpAScm73b5a2joAvtCGGU6gpX7TRx69tKnD437McUASW9Fp9RSmJrJ3",
  "key6": "62uXtsYpC8FPJG5muk8zZfeRVtfJnPoeUWVKZYTtJakGGUKNJoBjqFgT5YSQg8DtYAFBW7pHBmqpuaCzbSkE7e6x",
  "key7": "3uevsohjvngDuEMUTfnEZ4HU4FA8bb6WKvanZqw2KTHn13BoG6wEiP8VJGzj6gJAPCdPgt1WCGZm3AESK2TzmPoW",
  "key8": "4BjbqhHzovzBu1zj2B2BwZinoQ9heK5FTpZTvf4361uqe9Ytnu987M8NKjNod2ZK7ibQQzHQ4A3ofy9CL6g7otKQ",
  "key9": "21iqXm1vzCbNJkv7eLzC1z9o5yKeQ11hM9zgHsiMJnJFs9M3ytHW5VRg9mpKHhKW5UHx1DeznUNcPcvNbBfiEvTL",
  "key10": "23SCjhrVEE6bKVVX47BpcVeKTA9EynKNpFrWA92CucShXvB3bXM8uVr3YPjgvBvuHUwzxuTzGt96ZvuFsQFk33HL",
  "key11": "h8xmMtWzFRosbj89yzrSxismX9DREi5X5xitVUubQJtX7THaZMSB831fu1HUAVutFoRBct7sKy2gxQ9yYZ557AM",
  "key12": "4fdjnRogGXxoZ5bxWC7qQDnPCPgfwinEU4pDpcCm7upgphfc2RD6QYXQxgPaiGSx4NpANLtL11Nah84F6cyhe8cJ",
  "key13": "3HJybcyoLn8u16pDi8qXgkCvcLENzLAdEBBeF3SXLr4UHyiarWrRn8N8DV3dw8EUbMH1W8uMyZbQiFFHDsJXAAR5",
  "key14": "shxvhUMDQH7xttoertGTBdFjnYkmD7T91vmryhkwkeJDmp8yCuAdfwXmPUhUvZFaj44n3wWDLmYjzDUWfk32qWN",
  "key15": "UHd8737Fb7jP3tP6KshpvMKgabeqDBZf9NG6a8Vbuk2JLKz623H7gdNeAsuNcXPYxp97dSC9LqXCA7yrm18Wx97",
  "key16": "jRQ2aX3Tzy9kRKjBbifuvFq7vXHaUtPkfZcfWfwzGWoKA39UNABsfShFJw4LuQ8m449dDUfept4kGfYca22V4i8",
  "key17": "eVZwT5LtKhWBTjQBb2FMxykyQW4qEcsTwxxsNFW7iXZHuW2TCPmjFoBE4QFKXcb1VSmE1L83SUrwUGbKhKJnu7D",
  "key18": "2k6Dq2MvcjTUwWLhyV7vWcHN7xUJLSCFPNvaZCwPDv1mFXpoDh9JKWS8igiaavkGB7VTYYFskZMpyuiUaKLaoSb6",
  "key19": "4RR5iFXQMbELZ1azsA7D5vYTDE7fL71BWbQ33mpGaEbhrBaKs6Ura83VakWX5spvYzb5wKSiufqwagj8wJ3hwpBe",
  "key20": "2igZ8CKQ8yKUCSCfJp5GpdQoJCa7JDbV6vEvU7vcFo47zhRmVFwwor8UWpA4HwdLBRfyUTcB18zsWCJMYLivGjXP",
  "key21": "3ztcgvj5xTmntshi4Ui2k9SPbVkv7WuejUN12XGnTWNSyvonfPDwvBg7GkrA6HWqHDGEDNL871wWZQW7SQ7VaZ5C",
  "key22": "5CScVQjYiPTJ8Mw983Tg1zqkN6dqUXJ6s7ejPTfbPGPDdgLLcoqTqS3DKYLK4fyhAwHowCcKZJeJPdrLyoEt8rgK",
  "key23": "5NEo78xwcU6D8AZxTTiYEtXCKDDMU688XU9yHVybfxmkNrjCMHJcGc68dkCR4pfvsmixu5iwrYEv8NjDhsnUDmGS",
  "key24": "q6rWgShigdmSy73QM28B2YcPTAUCmWv7yCzgXveEUGiXd3skBGKbuimEmctFAyWDnmEdoVzRHFWVTtXeTP6WTL9",
  "key25": "2wMGvB2VYetws9so6FK5g3rCAsTPUnhsDu63RfgSYGxgfkV9rqdcKHCB3rk17wf4yqtWF15QXed4TnEvxcMid65e",
  "key26": "mbYRma2qaw7N5oMkUyvGAV2jNqm9d7uXFeBBNVnkzJ3C3jLMXyoV8PfE42XxnxuNem7JxbnWMKDU6hwJ5ZzvZsu",
  "key27": "YgVpZPgdyTqwtyeCLMxwgZHacYctWwjKACw3zHifBQoMeyB7T8YCkYN2rpkg6Gvqmv7vy2s9GpmFmxNLoZnxuAU"
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
