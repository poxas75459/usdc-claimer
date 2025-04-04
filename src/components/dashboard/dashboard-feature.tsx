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
    "3DXWCMDJHbbMscEPcgHfUzvEQ6LTU4KgoQsACmSCh6fgkjqmQK31jESKhnasHzS2VWnNHfVkS6ToMmAqdzhRbb9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1RFRx1PSEBePmgFqfYdgCNEXP3PCXbWg7bVQ1VXxP7oMXfMUfdcrR3im1F2gk97XqrpgjZHQ7k6s6m2GQMDdEy",
  "key1": "4nAiagXUQFac5t6NHNtEGxbTWbS8AaqYMMXCmtAQyQazj38U9Yfm4EA5fywq3vWTpJ1eoudigEZySnRFbAB4BLQh",
  "key2": "3eF2hunhzUqmnP4gpHR8nN6538fFfcsWEU71GmvBzCaCNFnmjAPSScrx4m1xeSTsgHc8ioqYmn5roajx81Uk6pri",
  "key3": "rWThfq1EzY8M75zfAfJsr2yFNqAKe7dnHeAqMtBrTAjZquurJpRGUL4gQ5HQrvx1XDUtXkikuk7cgdDVPeqk14B",
  "key4": "4aShb2vo7EiqnqWZkuUZd8y4g6zUStJSpsLbeDVsExwVmZ9KAata4x9ht8GqpE6dogiyXSB9r8pkW61A8CUFH32E",
  "key5": "5bbLThBF2CKfomknbGSeurFL5tUVECzcg52D5DzxhAniqhYazLyesatVFCJVFRcEnkfUoyUAn18jcDGx23PrFKWo",
  "key6": "2dbYtyks2DcWe1pFcdUmK9rFpYqVUjcpwsT6WabCbPWdvuBJhUcnrJGU4xB1GAsg4vH3QXb6arqy23nzGAoFKtM8",
  "key7": "5LjEaRfd1ZeZWg8vo5rAEJeLDuTejxmkcWjHh4rGkMP9L34RmL1c5c9KWw9P6o1nkzRnmWsJBkpWte6PoKeX6MnH",
  "key8": "2nds79STaNHh1oN1fjHzcw7jWu6gp735aXt9PCCLZve6rNWrAQtN4DbPrrmQshvUEzA6vTkmc3C1ZyuXKDMSZyVG",
  "key9": "vdKt7JJUahgvXATbwnCUgzxyEXpHRkzdgYY2eQfGWGMLqzz6AxuJcwdasy1FYPZi1nHRe5R63VN2Vf9CDR6zrr6",
  "key10": "jVar2nWt9RiCyYEj8XP7zpD1DKTmyW4rk8kVkADFgGSiSLxz6BBVLgX4AjVJMJs6GoL7QHwtNWz6ivpDwXeYrMq",
  "key11": "mtpr8oCrBcS43BuqZxBznKV4gDBQze3bYhXhFd1J5MMEputRdgr78L2KWzAnigh6KZR6gYuq342xMUNoPFSUZye",
  "key12": "4QmHgHQoik3ZF27x1Cj2Z13WdGuNXSXMkTXduwgMGM4Myq2d5wdYDS9r6mYK77pi3H85UWJa9f6FzSpwbrDswPXc",
  "key13": "3WUoXFAdcPRcNTMLg3HNdYGsYULwzbtoMrtXmQ36g9TTtRSev99iZmWL2VSoeMXTsLmixn4YhEKiQ8tK28brnqXD",
  "key14": "65hA4h9k3ufwa2bKUjszBz5DeTWNyFGVhQvT7cTgXpT61PyBiRagoZFBC9xe9LY6HNu55AQLjiBUvxsehe8hd25v",
  "key15": "5kTiZBLj2VQwWXWW8FZxthrv1QZJ6QUvFPUP6d3jhaMA7ySrw7BtetPipgr8Ke7eM6eGdqhSbTGZwVyZBvtYq1MX",
  "key16": "3oFXmoVroLjYCh4go6HvCCQ24Ndc3d5DDbGKZMkdadbnj4tEQqeWwx5ELbV6UnTH2ZTQkrv7Z7sLjUBYupi5tzKB",
  "key17": "3jpdDbnR7H2oyTR5NQEyBw9DP3qLCmM3b1RfHtf2vCxoUarSM6XzYGENHHLbMAWHgRHMEFY2bNKGaXpQes9Ju1np",
  "key18": "4KRPJzuoySvKhnerKViuv77ZGppYMuVwuwMXvaT7ib5EX3Hj5v1PHPtojNYiQfybP3fzzRaxLhfaGLi4ueHkwxk",
  "key19": "3EaSynnxF6eoBb1nKCePni3T6ay4BfC1y87pStcctTMFtagypVyEDikx9trC9TN6dNx2msWVmhhNtp6fXYkJH13s",
  "key20": "3zW7ZmWvgYj3uFNb6oHZX4wZC56smBcSYJjpGsSRkaS4TXYUj1i13FMTYNjvXV1Gzh1z4HExZZdWHK97exKH9Xer",
  "key21": "tcZqqTqgwu9K6g8khuZBULXgiZzYUz6NrQbmKJvx4oqhZxvmMrxZSoy3dTHTkEwcRF21nz2LwJPhkJDWUSJjUH2",
  "key22": "uzMtRc2HqH7hHYXSEvZ3T3ZS45suGM4Jg94JDLtAar8hbCdgukCgD2D9MVXnA6xbYVTwZe8TB3CdYgXuKUn8yES",
  "key23": "63XHJVhUfXYvxMvTq7cQV9DcUbrUt6w292FYpaxG8MnsbmDCtBZeqZvsJMDgQN1WSQmE9tmCpP3CwouGGQCM83Nj",
  "key24": "xKYPitpQ42bKp8tRP7Pi3S1FB3jy5PyiSYK476tgk9ds8ZsNWe93edqoVbQ5WYw3whrGFEBm2S5R28yhN99Pc23"
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
