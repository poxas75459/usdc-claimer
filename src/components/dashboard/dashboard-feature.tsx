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
    "4n3o21BEgM2JjdM7cLdY5euoD913whh3b5ntDvBVjToH6VgtqdLUZjZhMVNVHpXB9eBS88TkHJwuWnLCYy5UvZBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2nTcAGAD38t5fbng45woD4oMZpmDrAAiNumjUNgg2tYZPjU4csziFcziyYGyjRh15dfbSvJZ4JUWRdQwQNEnyv",
  "key1": "CYuuET2x5rKcaTnnjw2VbVeRsKArpYLGEcbCztsbztChWmzyQ8SYLYteG9n4oME67mVggjfFh8dTihKjia9r4bN",
  "key2": "4pJ4MbNDtFxZiuqbKVEzuUkfcw8tupTyddr8TPPeFf9zUEWhQo2wfPqGaESEDm5Y9rhTTm7FZteM6AvkGzBJ1eNQ",
  "key3": "2SNnEEsyhNRmrNPF7wVN7Wr6o8mqaBM7kX61XBWEJ3gfGV2owfbTQ3VZQKmQyP4AFWDtdyFDpH2L4y9JNo3zUhjL",
  "key4": "3ghyF33Fkq3bF5wFQ146W97v4hPPojHWWYeU1z5GWwupXw5w6MjdztZyhRRT5BcXx6nbY3T4SrwcAjzNqEzqogxM",
  "key5": "5iythdZijMKdEZdhXPddd4aMjv8L5MKCnrQQZDBCXaKBzYZMuPT2fmHzNwFEn44PSr9We1KVDioKFXveeWVGHFxN",
  "key6": "UgDMa6EmG4a5AouXaDqxwN6eJz9mr5UM7uTH34eHbwD6SnxKAJsGeirweqPQtG6CQyWGxjG7ysu4fvwbPLp3TP9",
  "key7": "54yDsnhUhxg8nssEA6zd2vVpP9PLnKPJSBEVZRb6HakGzCLWTaBGdUqDixNqvWaRra6RbdDkjfDpcyHDMQ9Jyfhz",
  "key8": "4kmFVk8he76pkUXL35pQhktDRSbr4TNjcJTBPZNY7bPysvStH4dWLZ6vCP9vyYhkxyr62dNrmvMZAaqedtR1NjHF",
  "key9": "2zazbF3rafgKWNVewLTZjBpMc2DX1WsqTYRTNyeR3CEMKiTDU6tVWp8gQjGAJnedVcKwwtNKEjp3hB3prMX4d9WU",
  "key10": "dxQcYDwNdYTTrnWz2aByPtq4cYBjKe28n9j2mF2Gw6Qa9CpJsm3T44yUfriTvkr4HV1Jcaf48EeiWgWt19ffArp",
  "key11": "5bMFHk8XVC2UMVcxTr3KPKtbRkM2vrXJUK4xMfZ2K4JU1FNAaEnGKbCFMLVesE7Z7rpuywx2VKj6VmRUTSdWEQCS",
  "key12": "3At1QDvv4cWgiujrNHbzCT7qGLuCYgLNZZo53WD3nch5HqEsTQ7TKsmJJCCHYfriF2prxe7GiGzXZxHnk1n34hNr",
  "key13": "27hsccWGzAkdhPe5ygiNcKa24JZsH4cU9YJxQg3C6BnxhyksmLMfCYj6TvZvbaRi37MkZFALjBY6xvrTjNgk8PzG",
  "key14": "2vm8TTbLgD63ivNJQbHvupD6rXW5XDeAtvVAJGuFjQhXKN3oz8ngWEujoatUhAu2rCGHrpF4QQqr5mjWZZfDsxNz",
  "key15": "5oXKUnpfTU9fR9PAw1vMkDKxUPYXVR1UDn5QuATeUjVKaGGiHugRkDvn6HT5YzDyzoMVoeiVbwctHCCrPahnvSwx",
  "key16": "2XXPgTaVtRqTiTr4E1MHXikSPR5bGKg1BH9cpeKCo7oXwoV6YC8uTkou7e74EJLGHWbBFjAJQiLZ8UAPX82m6eeX",
  "key17": "5FZNoULeWwKWtxYKFDCR9YHApviMGb8wncRUaQFRs35sKCWeG3zzbWsVQGnWnHhamCYcTPsmQQjv9SdHv3BPhhA8",
  "key18": "2gH25XpnoUnnVAMQTMmsX9jPepC8bhBNmjxeP8KioA3DRwx8oLcsmDB8w1XiKKCyiEDX6zVT2qUmY9aS121Us4ud",
  "key19": "4Tsu6oTQWPqDzgZ1XXGcxddxtk3AeVPUtwisWcPegVg2WJEaUpPNPjHYtdVjcoiXh4eoWpRQMLLSMN5adu65DwoS",
  "key20": "4Mep3swLUpiSy4AW3Q5e4P5iuhDVarj3iZA8KVB3AcDyVTZH9NSK78TFVi9RdVwHe9p4sXSf2Gz4aaAKNLdEoSgj",
  "key21": "4YBAXMyZLLYb9kLtJdLxiiuz2xN8yLWCKAckWjCXZ6WYEbDoCbWycN4Tk773e3UbU8Z3ww9ec4txSrrLt4Z2nQNu",
  "key22": "4swXde8Xy12TXUB57eXvPRH9iJ1FkpqAWJfGLrZA3KnEQQcgbeJKtps3QnZA2kJbWCVDeEzMf7Lj1tyrcrmoHah1",
  "key23": "4BVUodCcdEgRAhQ3CkJ5BX6B6Eojht1NeHMAg7hAfAvrVvZhJuzABfTyUXJ2dDgeA6gfYAjdoPX6Tcuqyvmn3NCk",
  "key24": "5M6C6yesz2ANFNQWc8kGruAmv7UCehcDDzKD1PHDXLRqAeDPEkqNkdt4UQxEEc8HzG7NDxwqP1mDnaG7UxFY8rcH",
  "key25": "5q5rMegj7BwUZZ4mM1zdUjBbtiRokuwQ4NbP1up3pmCW21msxR9vVnqe9ZxcAFrLm24RhfARHC5ECoAptQyk5hzj",
  "key26": "T7xBw8dQKztLEfQJjm5zempFLoa3s5kPLncnc1pG496H3AKuMRJ9tURr1eSJw59DTojSNDs2WrTeT8dfrbetWvq",
  "key27": "3onr2USzX1V98yTHEJM6N4CnryZLS6NtTHuyJmjtSv4ecMBmQ2nfsvgkRGZ3ZfTpAFuJmWEEEWBTHricvcrtN4VZ",
  "key28": "5TSEkigpYxyPNQUrQbGUrAwPP7S5AeYtNyxqkdV79cVTmsKvm3wpeM95YW4oNLaQ7c6P2BFP3PoBn6r1ybHbsCT4",
  "key29": "5JZ3JaHDjx8i3LYL5ZATYGqta82s6LPq58mnQyzfZnDBvfBmPJ51rWhGX5eZnFNgpC7PJfzFSjgGeEk6oRtnKo7z",
  "key30": "3dMr9VpVYHednkhLTrhLjKzaPcacsmfcxmPaWVkPNkws2vdxPsnTgFwpJM65DJG7qVCbaFwPtRQwrxQrKFm4sx1c",
  "key31": "44LvtsB993torx5bg1twUUFsYBTxinQS56jfi6VgtsRWG5p3xWszpcoU4QaM2kAakpJbqAaSVeEShupNEk6MYiG2",
  "key32": "4M2a86gQUpSCxoVN5Yk3PnBv5oUhtaVzusutPS1ZhFediuEMWHCKLwSK72NTaExNm7ZjiQo9moTGxpUPm6iPFMZ2",
  "key33": "o1FU5smRM19LU13oWrMkCxsxjfj4zj3MGM8PbnKPzE534WAahJLu7bjsP16Yp98xCyouEuV2o9kuPSHZupTCyKQ",
  "key34": "4iXyuJjYfs1uZfC4P9NoWA7nMVFUgx4YUtG1Q6rmTR7uFnP7kWvjLYjjbSHFrxhwdVNy6L5F5M5s7hdetAPQY4ao"
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
