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
    "3LNerQ6XAMAytx5FryfEJzQvoJnMfTYXZkzqsQiJ1G3DFaYwUMW6HZzTgLtydkaVaVrN1URgbQ25pLEDYKK3v6q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQKnxWeYFtpbYm6NLAEim3fHNRZMMY2yYFaqVHnrBAACJPusUsXQfxKpAQdxZZQqJHsREuBhKXXrHkyhFgg2TxN",
  "key1": "3eChKqhCNyHaGFfmbDZsrHzrRKLvgdHxyGYJxkPj6aVGrKkMupwyA2x5gxQTcH7EUK7gHwbRjB1A57yxdoMtatA9",
  "key2": "5kKZNjkkbfbdmLpntAmbrYPRBs2qN2vAZ9XdYZKFSmg9KBU2xVim1x8xkC18H3cJyXbqNGG29AuRgJoAUTdghRfU",
  "key3": "55WXQtw6M6K6ynizsT97vhXGm5ZGKDyrjeDCr6nvdcTESh1Y6dQHpB5H3Acv75jMQdChzmHuVhUNs3im4fb2gMbQ",
  "key4": "3kQryS6SeSCKTZ1rjhfPzWAPRpT188BSxmWcvo71Bo1Md9fTija9MLSa8HiNS3cd4nG8GYGK13mgTbfdEW3nRTUJ",
  "key5": "4maJX29sFvXgpipMqXXUbJAUJ2WEomsiGVjySUgsy2jeQoBiQzUGjNQ3S2cPWjYSAWQEbTincV36Bg6DoTJzUwKB",
  "key6": "2TCRQYa3UBF5xQLfworarZ4VwxcaffxbGvJ2VfNSfoqwvWz1RsYhdLuM28x2gixGe2c1ZoEH8mfvuEQ469RrjEeg",
  "key7": "22RR8nHNweXgJoJ6K1eLen9Ne1swC2jxc3oHwZyDVMxtDj3mf44kBRrSzardhYZhpyWsE2TVWwLHumJUdRYcqraZ",
  "key8": "4fdZPPiveyujg84hxteVmymL4B8ajqDoyrYDB4GKn49eyR8x7bwuVhE2hSYv367ZQ7uN8G4fFntRgTDKNkbGvvZ8",
  "key9": "3McyCXh6z4hSpmfW97nRT5his7GZV6agZLksvkfmo1vHskjD4RoZzMCcuxkoVB85H463YHCf5F7otiphsWUktw9e",
  "key10": "4UoaipHcBiGhWLWMzpCmnz4nYQ2otnSBSLkUWXXP2hGnNv8V5PCxiV8G5WhLyqom4hNasogEPvHCL9rwm119G86E",
  "key11": "2uq7uavPmHcNP474aFmf2haWdVQ8UmSYFy6Kji154cmp9wNw3N9hs7Kp8EPEBFweRVzkpQdvZVVhRj6w29QPMjNB",
  "key12": "26VmPnYTe25jmVJVmTXG59YVZs1pTsLdnY7Hc363FDfLUkTYqafPHpzW1DDLkFjaNh5GWCz4tF9vGt4SiQFgbWX5",
  "key13": "5xpXMkScvJPhEHLrqapgg34Psk97zezKufqhnzzQBBykRJQxYLBJx9sJNLJdKYmLoST4spYVkDder3cFLHyvqRkv",
  "key14": "5XUbrB1KEabTnxokzX5M9rYDFXJXB1wyqbnmriZTUtgtxhUR3YocJhLqUwWJSUhjWQtTfRHByAEYiZnL1eJxKGC3",
  "key15": "2gBci82j2Hya2fnHMSy8A2VdoEGCxpzzoV2UdQswpEbjfdAJFyFYNBanriwDes2huE47tTDRhntgao76zBjYqgRK",
  "key16": "3heo4fngBoEtuQSirytJL8tusSEwDrm7nRNux9EyvoZ3Xucg5hWgchyBuqNfX7dHyXzTaBr9A6AHsXtpCc9UeCZr",
  "key17": "4pmNERxmiyaorhePK7SkQbTZKus5zzZx4PeuzmVg96aTm1ZfmLbbY9QMesP6qYV4e3CNxFifUxUkYnfB8pWerfJM",
  "key18": "3Wt9M5iUbzNJ2W2Y3k4y4fq2djQsnzLTv5dF5A2NvJhN5chRQfq6VwZ5iCfsPHES4CqjUAm1SpbrRYnkyaxGNqDG",
  "key19": "5vSdtgejAXSX8hJmCPbjLU6SqfRCQWAaNG9N9eMDMVAtm2zx9b5pqkBFd65xUctjHPPmAD6ci4SfVDQEms5CkA4B",
  "key20": "5qwtMseQAvncA428FKesSvCZEi5JgpKcMFDuWhq8DEopkrAq9fcXifZfny1BEutCt7bXK8AHviLym9VfA6MvAXBG",
  "key21": "3efjmtsFiuomdQ9W8C5ZJ8ZRvy94Qyf3UuYTxV8ii87BnbUZTofYFBZvmfWEXms3XGDaSUSZTw9HGHjg4eztnPfV",
  "key22": "4bErkU9WQKENyyFKKi1meJt1e3zPKb4Z4irjZV72bTg8nd2PjrLgcb31WeFvuCC8FVxg5mSrrBKZWKHQLN6QGsTV",
  "key23": "54J2WjEbY5AsufXT5No7HTf1an7hA2KYjDhtFGh3zFnsdKPymbt16i6HBuLqDCtCWh4ogJfzKLoR3PDMKuCYCp6i",
  "key24": "iN6LY1aR93Ry2gajPihQSCS8LfE5qyWzyC5EUMMTsfSEVDYXoKkqhzMpk7uGpMGdQyo2zGTjU7JPgRH3xyfH4uM",
  "key25": "4gStxkwyNmFmYdigRJFrXaCiKk1nitov5brCDaMqZ5MtYzU2EX1unpSYDtHdzzTLfDjx65C8J5JYETKg2FABkqDm",
  "key26": "4vmrRYzdghTCaEtUAXq5BD2oeA98oGyXKex5EgXVcV2HMX4Ts9GFCSac8JC3JB3ia1MxybSUEo6FthAmiGv8vEG8",
  "key27": "125hA1WckjzKhTPFM3gf6KUJEFuHTGNyaYhoCsZU7rfDjoMK3zhUMUm1WhgYBnW4DbE3tH9JvYbdDJuLsUdNZcuq",
  "key28": "4cxmBVhy1X6iHi5W4qsRSWhsP61AbM8SDUKLRbKvjuq2oUD5DxavH7QHHoJ6kkUwQdyv7pT85vsVGB1RhaH8998b",
  "key29": "2ZYdnbAnLj8ZW4FmCZqBdkSz8r1qjVj6S5nJUDisFFwJBMMcY1C3zkVfPXbEppHCMwcaHQYDPyNL78wWbucMwaoy"
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
