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
    "4S7y1dgsa2JtrqEGFn4561tXsyUQTvcTGxKgAW5dS7DKchz4vYgdoo8osaiwQrvkmwSHv6y55XmZEJCXBtYShces"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQzg4C53tmaAZaciqchKp1cvHfoxdMVdAkipBivJLN814P9QQ8kQDLCbyWpjVejnXBLG8q5VTUT23E33sBsjsG8",
  "key1": "2vdP4rsEMy14oVCUA8cXPRmwMpVa4fKYmaAy31LzBUfgdiYeKZbMmu2QQtVj9ipvzkgBiCFZCceBhkhg241wmVTL",
  "key2": "2Tm9VW87QtLxNoZPowEH6jcqVffotwa3CtnoZ7YLuum9hvV6M2qVhbif6EhDHnLxneGpUAkvzNeYWXe6CAQQQZeA",
  "key3": "2tnv7BPEk6P9vZ6C2XZFJu25amZntXFKRyhWHnJhFzFQsz7apE8RS9sa8AoTbj9Nncz4ggSjXPNU8cgAmc3nAzhs",
  "key4": "4RzfRH6jgn8rKUpLj49zEdtaB9CfsKoEW27u7oYiEpd3ov3W7aVF57x4wF5eh77CWRfmaKWqTd4zTXMHabo94G4W",
  "key5": "2nw7PfsVm7znAsmJ2uLd3rLbE2RarEgS8QsKQPGNEJpMd9o3wYTF9WdCvwDPV84VanWUqpTdbWyfSVEQv9gFpbmg",
  "key6": "TvYMNhsTun62ZFTUoYusxvGGvs8qDH2g5zfDiHP4bTpSyqMmRaX422byx3tLFadbGQvWLLjQFacMY9Du51zn4j2",
  "key7": "4P4eQpSjsun3AEZnj4gdG34RwrkRzPrT7gq44dfiRhEsmFBKF4Qp2KK76xJt1KGjg4N3wU2TD9gaxQGuqeAy6YzM",
  "key8": "3oWawfct5dDSmQBUNLajmk5yS8FoQTYyo4mvQDdgZbziT8hwZLbeVL5B3W6RsF2QgU9xuR3AyUxwnNzZJXE1WiaG",
  "key9": "5BoTD3ENgdyFh9jzM61YhgSRzrWjkf7gM8zcHwxjdgSK1qHLBPH4QuE8JrFu5k4gxqVbvpH4DEEfhNVQ3bkph6yF",
  "key10": "CAHSc5Xrnmc238kPoaLFHzKrbb2HFuFodfGRcKEG1uEizvkyfax7rK1gYUX5g6G1cQyCwMbcqmJYV2TSYHVDCdt",
  "key11": "3YhLcrrLN4D8shXTC1jbTJ1iW2ivzv6aHvb3HxqMDST934YpDht9X9XdyijA6DCBQaQjph98CdFRYar6eaGzC1wH",
  "key12": "4NNGiu6Nz8wQAzpaxfUnUVxBmakk5YvZe1mcXA879t2TQuMEASmnZXVZ5YLxmwikGXLYXRvKYjpwqSW4yxctzLyy",
  "key13": "3xuhKmEJV8ry69KNHXNoJkQZzKFBC4UuGdFpeEkS8evfFdRaXDKGB9VkBTbyz5nPSbDskKAhHGvRjq7R9i4hbabf",
  "key14": "5kuXz6fHcWvnWXYmVeTMvC5j7VjWS6sAo2EQhFwicki3WsM2Qq5X8Gz1Vdxi3m8mV1RqKw6bf2AhCsqT5frSaiG8",
  "key15": "3WWxbptFAqw85AAR8TooKGcJGud7sJAkcYbY1NGaEofEM9WyGPm8d2B96jJCgdb8c2kFKMZQeKoWpbX7zLGwBe8e",
  "key16": "4dSmZfhbKTW41UcMUEYtbeMsGyf7UjY1sB1UEzbaRihJkqmApKSdHSjFZU46Wx81cSAEVm3HZtmwnUAtK5d2AZeP",
  "key17": "4i4ZMRigAB8eP5yW5bYrLgPCpfkvBFNWLbcx5bEmCajKQfjSarsiLwZpArvSqSz4faeQTWtwFinDBzc14opx3eAj",
  "key18": "1yT5X58bQpnNdj84esLmzS1Bz78z6aN9ji3hyudyJ4a8kbN4X7tYpFnFwnWCUCcbXQChQMnKuY2YVT234EcxWZa",
  "key19": "3uGnLfDjRqLxenuJwgGD6jnakNAwAMd6fpmG3r4EAaXhaXZmEpvHUPFpUpWp1kYq5c3bqzji6sCMhh1yimHQzE55",
  "key20": "52bGC1aE7bhrLo8i5yeFKukWY3KFZ7BELmX6Vb4kd8u6HMiqLVJdwrUzz8JJ59G7sLAec8EqhunT1F8eK9zsGn7H",
  "key21": "227zZYtoDxcdGrc9mMk3FPcp8XUMNxqzZDx2zaWHw7UnvdTsJCJzC1iMWTecjuqEjW65ACvfpKVDk8bnEdNZHm8X",
  "key22": "3CC8gCXcYoDvZKaAhrHgCeRabjxKNKt2Bn4cPrZ2WS5RGk4E3zGu6gj4SAUStNxW8RAgDqXHXFyj9DQ9K9LiU438",
  "key23": "3hhxFZATH7VenxBgACrZdchGUkwxAUTJm5XatVaWs2HJzR7oaajeGY5UAwjWhqtNfh7eLryn12at9qEopzd3Kube",
  "key24": "GP66xSRre6TbWuUmAUVFQ2SVv4Li3WZX5fn29LUp8vqQhr8GnsAhx9siGPAvaSaiu8FvCgG6LcfVRSSFUvMHngZ",
  "key25": "4uFU2EEaBsKt91p6ViJkVLWHJPQKDZ7s3kKDbZgZwzBvwtNNTQprHDN1S167dhyVors6xccbqDkB5AjXgHZyy3gN",
  "key26": "Mm87FoeZUGHtDijVkeAJygg6h7CaBzNfqAbrUGwwMxhVjK1tjyavFbF6dsM6ZMBEiUyAm81oz8WPMFgG9zMbBwB",
  "key27": "4ztQdf2hXkQyfP9GJ2FBYKzCXHGrir3NMVnAB4CT7YUzZuwKnRXNeLKE3SagE3J2LcuSHym2FwYjzeVKvutZVocb",
  "key28": "xYVjT35yUrGxv4aMzWGp4tSHUrQ4JiSniPdGQLyLihmbZwo3BJnm4A745z8Z5BctBoe7SEuY13UFx1TWiGsoAGE",
  "key29": "2FMe3sj25wLVpAAV5E1L61dN91sQeTWVQS9onfXhsRSXdzaMEyf1N7DS4VL9exYr91binrbZWbzjsFy2FkNtEwej",
  "key30": "3F4bRTAUFSuYuwGWfrxunRsuyoMpjp9jzKWBtvUEdh4GfCzksznJg819roN4Hr87sa4QR4UTmzDTsKm8X4zVkbng",
  "key31": "5wZqF4r32HaHxuc5iGfDMBgNzoefNUsYBB5YwcNX13A2BZDwPBEBRTL324vWh1DqghVsFyvSdn13ouLU7YrY5gzx",
  "key32": "VyH3eJ3fj8X9s6XUkrfS3NtgwBdffLxXyoZ1XvoBFx2fWGZ8BMNsc8yC5E8RhqusfVr5D3vVTFnrB5CGJeEDgLB",
  "key33": "5WqpfKQ6n95MwzJRE13CeLm2Xd1FNWK8bmGRJKQD1b9zvwhc6KQVXhFtnuHcNpkUJXQFSFbirzhWJSQu6XLDoeuD",
  "key34": "5vK3bXHx33dKUMJQinEYpE6DsqqXKXRKeckuEDw34YBZiTo9M9tmLsqJiVoVWxKthkZyCYQhcqYY45eEFRr5JzwZ",
  "key35": "3jrBqjRgRuhfz3r2wEbgBvXcvYNpi4fhU7UvNHhguV9J6JQvYVj54Yc2dhFMZxLF3AvUrqk7nwnRfK3BN3TB9Vzm",
  "key36": "oHn5r7JmiQd43KtN4oxFiBzr4MidVK5dPdCYcZDD2tf5GRG9FNUsn6qMW5pwPJCoN1Q5HPoTeEVpMaRrEeajbNy",
  "key37": "4WTwEH3aY3X4QNBzLULTGEQNBTinqxkktLbpTpRwhuXmeW6R6Jms83kX3Esuobzp6TQDXULmYGFhYtsMNdTWSU5x",
  "key38": "j9k93HYcrUaZrH5jy9KAa4itW3B2dFJsCxWdKanRp6U4K4ccvNZcaaPEtgLAQUotMiv5FNJUD2w44cPTaWtHtVM",
  "key39": "5kQWXuH2H9oEEi7r7uJqeNtk1cAJL8VUjsjh7oDdFzZUURW5Ec2TrzTWUdLKZLAaPu2ozjHVaGbA1KfquuCdqDvX",
  "key40": "2oVnkCGyuF11pTjFeTD1xXrzj1B61r6kZ3CR9Mc8Ds8PTQbNi8Sd1wJgKtnu7Eb92CAKccH5KwmveYFvcSwCiHCh",
  "key41": "4gDUrM6qLZctZcpW563Ydx18cQvogwS6fQK55XCqCSMMQ7iEfQK4WBKFjy9EhWGb2xsnDkP2PZcUezHhPHfYg8Lf",
  "key42": "61vayW9DBhxjrSm9YXG6pWZEkHzL3dx7d7a9XRT96Yski1r1vHJE76uEZ8CU8gwNfQZKtH8uwF26fHtB8aUULSwK",
  "key43": "2tDnVxvHowCffkqPTr8RokiwVpXXpcQSm4bRAV4LdB9WrCDnXbyUR4me94prKvwf2teHkHJjqLkvon8suL9FKRnE",
  "key44": "23uxWfCfjG6VwRPJCmXfGFFVfBKVX4kmpdRyTAfHhKGmYzfXwWx1TH3wBsB89zJULok673c7vmx6dYPrNixCsa2y"
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
