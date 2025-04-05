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
    "3HXBgwPMPNrNEfHHBR1Gsqzj6hYFLAouSz4tF2KTh7fMqRcQjYBUxxZV4HNmiHwpNzcG6ksyYPcA4fWr9JiLmtt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orUW6NmUndD6tpR3fa1VTctPdSyLUsU6i9zdGWkTk122wPDP4sKSrowvHNtYehHumCU5asL7rgWqp6Pp26rJ9av",
  "key1": "2zMFfFkQWH7iZ5QSs6KX89pktTHSjXx4RZmKGcgzXmFMd2LPjafdxVBuZMW6yXpzWByzqcmZjoeRRFSYQ2db3Y8K",
  "key2": "3HPr8U8A7bqwB1E4okri7QzULjVtSBdWWAi5Xwq1k5rq9ePcogXhyQLG5YotCkArXTJssfy8xKPoDxC9iFeiLSpa",
  "key3": "CiUBvQdqHMb8RXCXCCyoScZfs4q7jw61cD8YWxmrVHv7KeZkPGhMr3pf3QfS4WqZ2WKizWkkSLjrBKz57aPBRSy",
  "key4": "2ZkrtFnRE1GGa3RCr6RZsCr8VCL8xy8zt6jgkAyj59q1f3ApPVTXGSt6btWbLorV5TsYLJbJv1hg6Ma5FTJdsCMB",
  "key5": "3vn9TNC13VD1qRKpozmFDyysdMJqRUuD6HJLXTBw3a8hLP71QJCpUyJ2iy2NP4P36KST9JU8jh1MVzb8AAMmdsX1",
  "key6": "3hmnruW7aVCgrairFewpX9cDmfVB6e22MzCAJmtUYC4f7YuovRYGEzSjVBYKBNrLDSGkx2N9a1UDfgfrcnYnxnFC",
  "key7": "4rqz6Mvy6riaCNXMyyxso2jh8vYG4oTMd26EgvKDTkdcnP5GZPnCjPbmNj19nVJwcSvUqVc9NDvYDWqQYmQzLDhm",
  "key8": "kSbvJeAkWv6LTBt2Mvk7r1fuAGp1ZSTcK8R3yLYCcYjrYjjMmAQNd9YYc89PRchsTwWhjtusMyNkS5yZoCPzrvG",
  "key9": "35HjURrfvC5EjLJjDvf4qQCPybos2N8Z9hHcguVPsmMn8WKjXGQv45HTApb9XyyWZpq6dW7ysjv9Zd4v8ofkB4w5",
  "key10": "5k2dzxSmHdzoFdhEc5XHfzKbeLpTvs8ricjTN3q3F1Z2nSp6vCLoynvUFy8xh8oLX5Dc6smKG7AqfgVmv3YyT7F7",
  "key11": "5aTj45myUBnr7mfzWMqimrd1eNESSNpMEfQKZcvSArWB2LPQZqwmLDqFNsaACSG9zwJyQuU5YHdn76cmAHZAHBiN",
  "key12": "5s1t5DFRjSnoyfaSaWQb3UKKrCZAPcVNdbjwWrPQQPEpgasuWqqoqEeDAaVmj6adbDw4rJKxozbcTRstTZmSHBv1",
  "key13": "4dtuBkxDj9RB1cKMgQrVp94bh4s97QkQqZHe9FM76VqDWj82oT8higxe2xzPJcZk3foBd7pcWZnuhURzj1MfvGT6",
  "key14": "3dZZCFX8ACyceZ2fMWpm84CBEp5ZibVd8DBHQ5hBQyWaq5shPGGmRGzMDL1E6BkFfpJJCmGjJ55kZSmBNWXHwT9C",
  "key15": "5zmD49xsZ9ieQqsr7j4AvAv5HJqUJoZZrhjDYFAhFHzzsHHuwmKdLRau8EskDPpkME2e8fcTPjR5DULKTTkDGbM9",
  "key16": "2GszG6D5sRFJdWnuQk9KnQJ5D6z2wSv8wpA4q1V3vstTzqFyCaWNkkLRca3N3j61P7mwiMCdmBGudHTmYEujazsG",
  "key17": "21SsVN1nVdEyAwVucyBYpeBWkH8rHxt5tNwumgZE1cv4zQoJ29VQNjPuGF84F6wLQ2EkXS1qsX7nJmEvwjzRYum7",
  "key18": "5tY1Lc1jAmk5oCeNDeb1ZTAnGLtdHCzEnVz2s8YhmkMc9kGj8KstK7AwtDEFJzYeAet24GRiYzg7M6UaBRw1YWyb",
  "key19": "3Hm9PEkNCSNeDo8Ed3xgNFTjF3b3Y5FgJS2HtYLd4hLAkYwN85fff5sUM77AJehJTJHEwyTHurJ8WCBLohUqBcCn",
  "key20": "2XD2tqdtvaNMpTgxcNHdR6iNUR2DugUGEYgmKiYk8sW6o5uwQBdJZtQzrAyqEqtrAeJqQEMzWHDMM2y8fhoenGaP",
  "key21": "5xmRChkmMhRDrs93Rmfoyfeq3J9kety4chRozH6MrEX985HjHDBf2ZG1XyXFeRZrXEKrxmZyLPFUdFYjx4cT1wpZ",
  "key22": "3vWuQ6YCW9D3MGMZKZekcSjAQ2HgvWiXNg3Y1JWR2x3VjQ2qLpgBawGLgSC3WsH1yedJrj9Res3H5aY6a2phAE6D",
  "key23": "3Z3XqHVJ5MQb9fFd2FVDeT68E1ZK7P9xVmRCjANc6EJ3y843EkyYusLHLTwjN1MWKLuWELwEXVvzo4FAi8vpoAnn",
  "key24": "3PfRz9kA5LHjQFcT7iDuBUKz19SMSsJxZiMu2ejT7nxwqCskFB6L3ZCy4JKHSMDmhAhW8PpiBaAG3mdSjnh4pTJU",
  "key25": "4aFbC49V2kpt6EgL8kxauPvooXQV5hKByZdiCDYbSnkygoDCwgwYGHrH9Q8cpymJg8ybYurtK2BZsDnwqgNWGrx3",
  "key26": "2yCzHc9QSRqzwuZ5emvtRdRg8eLyrn6tVX25vtG58cPS4EkmrQ7C9oib71y82wn3hg6k2T9pmKJv78GiooJQmG2Z"
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
