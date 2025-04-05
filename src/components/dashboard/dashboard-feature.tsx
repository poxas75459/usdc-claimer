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
    "55Xz1nEK7GgL9RsbXiKDkB6Y2PR4AxZuUnL5az8BSqAndFMXim2yuQEj2UgUkWRJhKzrnjyTiZqZsq9sgth7pmux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N9GwRkTs7SfcMSoK236kDDEbv66LFvCjugoE5CHiYtXPt3nrwG5uiWChg2mPX2HEVroXvgeRnLGh8RBFCUPEXAS",
  "key1": "34QvhkfKcgqWUwjRjRsNhMd6ZdjRrJLTFwDzDPqT5r69SJQxAtdZV5Hw2nzqfJRiQd6cHme4cn53CmU76MWGgTnp",
  "key2": "2EkYmMUPnbcrS69a1fS3eV6HHeHCKLANEvfxKQJe18VkvcGuypFgjYLUNxzAzYd9WQp9nZN982AnbKnntyNzP1X9",
  "key3": "3PvENBUXbuDNGFiQXMqUVakVVxRX4Rpz8ny8tovPtKB47zHyn1DUadhWeuaosJ1WS82Jss1Nd6uKVnwBYHgqUhiH",
  "key4": "34xgKAAUKwhHw5tV6MUk5L3PsyARLmXB2aee9xGbpYuFgH89sZxwrtPuGLqJLb5f6Tg1hbFP3AmnQxGJo2FznDdd",
  "key5": "5xSQTUM5SQwWbXxw62xx2kF6wijHKGRLP5GVea1tcp9goxKDeS7EAQSy8snSbkmAoNKjTc8mrDnKaw9h7fPftShX",
  "key6": "4EiBgzR1crwoPnyWHx6jTLFFRRHvDv7eRFCV1qVKBj7nxqBQTe2vig7GKrC56DzbrqDSnR4U5nydyQHBkXS5h4PB",
  "key7": "4JdTVD2xUFhfUHRusoaYMbgp53uQsNhmQ8uaETvXvdXbeRQ89mqw8PaWywXaVAXjbZApF8HecvfHPTEpCKNuv2uG",
  "key8": "4WzgUbFcAS2QYyNnRS2VjCNyWjnxno1vtihbFgNTNuogVX39rJefN1N5V85UsS2FATWrnNaR282Rq9ShG7WpS4em",
  "key9": "4jb2QSkhT5poqVCsuvK6K6yv9wbM551sLzRiy1zYnF11hk2vHMqBN1GSEpKv1fL8G4noX7rgJM9u72Ljw2vvCce",
  "key10": "5F8o4P4LZJ1g9kvW4Njdy2RsteLFLhffSFqpjfEH3T1HYciqK8ueXSQHPwanxqgFSSBohNSMoU3zbPZBnYvAvidb",
  "key11": "2qH75Km7dww8Ep9Gqv5ZGXRcaeRjBzBr5ScRHaSxWBXaY3Wu1EfTHsXQHiTdcJQQwq4NYEn5QFsn4ecLbF7NJbgM",
  "key12": "3ZWmKY4wCo8zeG6dQou9ipzQZYb8cTxUwrvyQHi91JLNHmKMyUqddcZERuYJpbMwdhydLWidrSshWWfe6bRkbRdV",
  "key13": "2hKdenSJvJdQEfeAKBZiis4jAqYhR4N15tSuAG8YorSyyDHp6YKeRg5RsBHzYfPxSfwhcdCjXy5fYPxFw4u5egn9",
  "key14": "7d238Dh68HfYZq126jUgzHFR4ao4Rs8SMsw5GDpVXB3dHCZcnhQdznxfi4zQBQQV9veKo8ybBLZVjFGQcg1tzzU",
  "key15": "1AwMY6ztyBGqd5iU7NwF8XSpsd3NUWzASDMecBVX3pqHMC5aCRqkwJxyCnkizzGgSgF9oEeQKrxhqXycFM8TSfV",
  "key16": "26m67cPYEG51ds9iXv821ATBg2HNsaEdkvoynyD2Xk3ziJUrZ417Vp7xK278zPZXnbbxXauZ4XbaLUzEL36ugqB9",
  "key17": "5fP5KaXTWqNdeFMWUuofCD27MrYRi1Mvyf9JCDhtoMFgAd4A9wY35zhT1Dzmhb9vwny8dAjnQi4jvpofk7w84JUL",
  "key18": "4d6Mtrn3MLu9xHLatn3C4tMwuuwFyCPDC3cEdvVewUyne3L3Hed7FbX1dc8UCVAmH5Hq6Z4NhfXfkzJfvmvMwEnq",
  "key19": "48vJyrKfJrH2JPU1T9q6qiGqzkuTa2dokKtcBNcGsmZCVsBoXxWvFmxKYmztR9ASVbhtD2Wnwqcx42ACiV8BYfF6",
  "key20": "4E4tmioMjyy7WEDwUZKwnmZs3cVRefCEJ4qrBywRsCKUzaCeSEGP4ujcQsSvzw5QghxX5WCRLuLnYcrfBmN8K28X",
  "key21": "4i6F3aEGhUu8a64wqe9C7rZkXbXQ9gZunjfB3Te2buynwbynvQQXMXRm6fu3HP98BNQbrk3smeVnmxLj3k5EznWd",
  "key22": "3FmYZTkHxzVBWGPKXgX9DnpSJDF1HLex8nJohDV2hbNTaXuDhdZmhSJJMWFE2Eefa1A1ekFJ4fU7YsFrXf69Bgwf",
  "key23": "cQrbYHLkk4k4mfJKFrZLN8XunRRCquJMpsQuywHcjFMH6CDAe1jTwNythfDjHuEgPpZv8wZR8vSQKadpDpRyKRr",
  "key24": "YMKWATJ3zMajo2nbEu9JRJ6MQm9C5eFLZN9jJ66hkqNUwwUCY26fyyKHxGybmcsMvU6BcBtpMmzeYZnAygX2oRH",
  "key25": "2BuJi3vhUqydBucVBw7ryQ2Tk5T2exnCFhkq6rMAWRbdqe8BjPQpvLdAZf7A5AYFLL3czv1kE6SiEe5Q5oPwcs73",
  "key26": "4rxToScTPNLCfQEKRjFiWnm3oi4iMqhEp6CfH1bUDz35DQFwG7bDAEhcKBUFH9EU4XpAVGycG8UBh7V48CYPyvQn",
  "key27": "429fxaubiqUw5CcscA75XdBLGDsbNn7QQq23221ig8uGeipGb28GRUV5HCAwdQAK1wb45erg4LJTXyKbLyMAe8rc",
  "key28": "2mCkF4NsfjYuCbVLDMvBoBuNX8WT1fT3yKxqG7Nxhnpu8ScgBmExCH2iraumoYscHAjdUWLSXK8fKxRM2MA2CxDC",
  "key29": "5a6LvGZ94e4ZZbTeQafZ7Xrsgz592JLxs49FRwN62nMcwRaCF3NZwvHuKumWqM1hUXwSEXikuDnfgYtxHtfhXVBR",
  "key30": "2W5TbgPvLZGX7Mq9HyzUJ9WFDpAcQixsKE1ntd1qnPmxhgEgDG3bH5k3fKSqimoT7TQUrYGdzDCRiXqnL5eWrSoF",
  "key31": "3T8SUcbEwq69JR6bCaxm2jKC5PA2C2r3SfMQatEy4FqNHPkTWPKtrhEEqVRdgzdK6ssaBGDQFenUUkKcXaFqe16J"
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
