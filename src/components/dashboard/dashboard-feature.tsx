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
    "4Kdb58A4fL8zxQjFZR7LmTnnwsiniXMVaH8YEswSNnXgpYZeg83WRToUJLoCn8mH2Br31uWhV9tscr9q64xJLETV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nqah5zQk7eorBvLZmhnr3bgXzmLZQxvCnUUNg58VLMbKYPjj5JzeKpwgm46TbBoLYc9ZbWbPNVZJnr9msaTDFTL",
  "key1": "BtZ8oqPnEj12E9M6nicMJjyGhDCTpDxVhB52yNkywy7mN8Lf3mKpD1151oV1bnahtdb3qBEUJJ3aX9PWukV5i25",
  "key2": "57xoFw1KYEFFYBWD2TzJmQHswLk1V6vEwEfwFLye3hzGukNkuZ47xYweTroeYjpUNdg1moJGuSPQCkEpE4h4QYPh",
  "key3": "yZubFs7EHNuHGTp5aN7JGS5huWPBszUFfn3oHNy3pvnEA5XB16XohFx8mMNNWTZTGGKnWrnCxQ2c7qL9Uv9hi8Z",
  "key4": "3Rv71eRtNSn7zrRE5BXyeZpEpddPRdBYqi3BbAwmj7FBVjvhfeQkkFgBkZ5zWKwdJcJJy4cNmj4AYbhSK7hau7Li",
  "key5": "4y3xo983BvYKDLX4Yvufum31Y8ZaaujBrnaQTQiQCtpuYU9QU5ww6FmG9QwZmbQytDVX52e2vz7SetQVNqSEynfy",
  "key6": "3FHvdnfViKvwA5fddBPQf6G6z9z9Cz5zHzUuAhkXuzqnNsBK6E4iipX4NhqWF7AdZZtUsinwddSXX6Yq84tVEPeq",
  "key7": "58hFffMLhbNgbSytSAoct1Vq2B6CRzU8VngkPDpyjW1Scc52MvLejU4CjAS9uTiiVQTvLKxhQU54qZcRJ7d4EGNC",
  "key8": "4XYddymxQXDUN4wK61ev96RmkkjMBZhN6AnzGXJ45PPNNVmStPeJ2DojY5r8mwVHQWWGePnwfMT6zJGWdbJBX2at",
  "key9": "31XrU7yVwfrBeLsLQc12Fb96JfY9AiSAS6KPdfCmTQockbhF4hx6vmNeabY7EYN8REfpv3J1zJd7xdshC3Sq3Pxa",
  "key10": "3QW9ewNJAxLv6ZguYjo76ej2KECMUmSwT9nH9fL9em8YbpkBavTzWdQ2TStHitVyBExuvty3muvKvZpBb4ideKWZ",
  "key11": "5tLQXoC1DaS1LJCVJiXp4VQfZRAuzREQRZYZjC8CguzBSvqa86vhehnDFP2oDrAFhGxZs13s6F4wqQGaZVPRkyoP",
  "key12": "4kmZEvXHwg9Nh8yg6xGK7XrsrXEmgSm6c3HAxMtYK4ocP7cLS7FCtbSuozH38KYxFcocj1MCmh4uyUg6pj4YWP1Y",
  "key13": "3qyCYhR8xBhXRRLxVsfEG7eXmUWYeTRNbk6Sh7aw4hVvduVQHiiP5Nk5ZtUqh6JFwR9FWDeeuAossVThWik6RQxS",
  "key14": "5xRnJDjVJ51Hzci3uv3R8SeiWa1qMX5yR6isqEaJZGpcQyY6iLEJ3rr1MAbhkhtEaMMdi1jHDRSaEoPTsH853MP8",
  "key15": "3kV8iePXnPYBeKkjd4UxXaWqTcSJ45V162bq5Fan4hzXBWHq3fjoKpAP6sMJQacpu5PXZYKGFyDRoQpN7FjJoJkM",
  "key16": "frpqLEHmYCVrN8FqnnxsYnh4AMq9DUsanSvWeNvK8NGVAPG3DFgsv9Kj2fVgjfTHMjkBm4hWfTeddoFnrNRzwqu",
  "key17": "32zCKB4ZQKPDpUMJYqnrAAncwdHyZTTS3dymtWjHKEMWLZVVCrrz3rDNPC3MiQQtXjhvq6etkPtEQc9YWWN9LgCQ",
  "key18": "3g22nmzQBBS1V6hDcoYu6UBWLN4WdoN7sWgDebZ9REnLnCCrYU2d4rdhcFqtzLtRx4PEDQyyQNyxHdjD78VRYhPL",
  "key19": "Nrj6oEicRRxjP1HjiyAgDrhcdAtuBqehShBpkbtmPSgW8hHCKxzJz7CMcYVkqWK9jKcbT5pAHajoX2ZDGrZQUoj",
  "key20": "5E5kvzhuyUjf5zRwGhjPYT54vxoF66pMxG4wGGmJQExKEEWVVutKqqjPJtu7vjGCoDqV2wLd5oaVx9M7U5SzZPF9",
  "key21": "4HFbjDukgo8VpYTgjjsjTVnenCnFE7ecSsKfqY82QvqGrAQmfaHJSDkNXZSwGhutcwKbMHVFWGemjcgyhNrhvbKK",
  "key22": "4eEr3ySwAkWXUC9sUBzaM1GTpGNawG56WWDfJt4uaM43bxo79kyqr49Sg5hC7jo9Ui7LDVNQ8753ByRXjmNDd1Bn",
  "key23": "2Bk6od3TLAgDVNrM4kuBUVB8MhjFPKRkqtKcmY2PoFzMZNrYWdSjoCuQ7JMZ6sCXQe2vVCtsup6PaDJXZ4s5xEZ3",
  "key24": "uAwdZNC2BEN6pCaXegC1K9uP8aH4FixzYgLFG32DoqBqQmZhjG3PCrDiVLTDyKVN5APuuK7ccc1wjwu6kf2Uq9M",
  "key25": "5CeSW5dTX95uf7cWjuGQPRrmHvR2wYSKnYVTfiyCz2DpNo9o1MA7ubd2oAEVi4RajvntCAdyHUjjfA6XcCxRTc9m",
  "key26": "46JDfeH5yMZ7ahGnkBPxnqqEZUarG9aFQDEZaKVagZarbdD3BuFiTBDQP26JLxR9wH8uJzJBuqxLrLoMH8r19Yd5",
  "key27": "xQEG6E7FbB6odb1ZF9q6gh1zij3ZxkAgoLJjW6uAbGhKfU6T5jSg2UszwssaFZhoArX1oAtTMz7UpptKRJzHaM6",
  "key28": "4xqhNhKEf44ey4HvmuxV1BUk7bH9RY3VzTPES6vDY14Zj7yA1cHYPUW2HqKzxKtRKvREHJCqcaKCRV6jSeS6Rtzi",
  "key29": "4RmQ7k2Cn8WrgLMpe3XWFQRo3wZwjnyQZ28BArTyBgB8jqjsD3baqnZog5MRvCLokpBHEm9ZV1anCQ8D61mawaB6",
  "key30": "5tkf4H92JJ1zoXxbCM9mrAz9Jpu4t6gJaJRX85FFkkXaKUKQZPDoF6CSGcBZ9S9nfrBYCPxzaPfZNr7jmAM2hE24",
  "key31": "2GkP38uqypHaMj1XY6qU4S9YkozXxzfkhwcp6QuNwDbHTqtBcCrnpBj1bBYeQtHf9Kr2WGFEhcNMeeWugvzokJE4",
  "key32": "3dh8Xy2EFwxDPbCHN9oPrBwJTmv9gEPQPCDZzswvfDfjhb5B3rT9Q4rgNR2CrR9LSXqHASuQ8VYA3tRwzQVo7sgY",
  "key33": "3ZV8312iLRpX2Bn61BEBJx2j3kAPEnwjsYuXk9m1vLm7GwWZ3tkHAuLrkwX7ffcAA3M22Vna7DTAU2GjoFdUJbsf",
  "key34": "53XDqcKYt6NuZmW2Mc9AjfS3XLQEjmkSdpZKe6A4uCcmpr9LrFCDinubVWN18bSBBzJzqhiwABzx2UA3go8AKNRa",
  "key35": "4t84pr9mDQhTn5BfWve9TgTaRhvjqNNkS7C4P7m2HDnJ7geSCUsATmiYEpWkSBX88MymzuMwbYP1Gf6B91ukgTGU",
  "key36": "4v9i2F9AUF6DKsZGR13Xz1n3YEr36DrXjYNFjrFVj9f675X47iL4LS95DBExwqfpz7mgj54PWEt7EBCRgRk7PFkc",
  "key37": "4X7gFh123HEBxppBxSu1iLshGeE2CLuavQMTQhykqAprou26Wr2thKZntjZpeDxmXztA4LfiyrnZArZF6Qo8qUdq",
  "key38": "3KGowBkq1YJYAxMEDy6ZDuwY2AtaHYXXRVh4WqgQiCTsPUibqJaWRTJsTUsvZ73Mh6bVnsqbEzDuD8rRAG5HKmej",
  "key39": "5ogzcMvChjYnDYEYg14mAsdM1x8m2sPRVN4m9pU1PXeVKA6bVv87oQU4ETnFaRbadY8PwEfHnRQMDgLLHTCgh2XE"
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
