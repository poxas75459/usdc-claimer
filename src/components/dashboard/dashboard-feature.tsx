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
    "5698BkyCtwaWt4A5A1pLG1uF22BEy8i7hd76bo5iQtc2eWieuBx9zrxhg3BDrJXE5RJj6RTfrCdEVCPN773T2vm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NjPZeAsUFv8YwvS2F8dCWdFTKCgGkW55tpt9qR7bLB7L4oA6pyTdfLeLuC6xiCvSqejbej2GnSaLBX1PnDvPEd",
  "key1": "8EQA9AEGNt5yxG7znSt4Y3ziWhgAixJePiJCwQfZxZjNRV7Wub8gbK9Av789R7b7mtmP24eAuU25vFRHYNNyT6D",
  "key2": "5U1bKotKstBJ1XkvWgMEaSYN1qgngboaaEk6odW7iFERGkstrzSDLqsrFEyNoTdhWSg2MZFSayWNNJ5hrJ7WUah9",
  "key3": "4NK6LumE8Fh4TYGpTFkQHfvUJbTtaskLAPYFnirK1WFAieic3f6cQKScQYMD8gNJZNyRBNEaWjnVetWFsydG7hoC",
  "key4": "4pMnvGg2qVB62A728XzTKbQF4uc28waqFL1B2DoiURBxGFwLHUU7wLxZuEUh6uKmexF6qNPjJSXAtW9krBXg735X",
  "key5": "55QqgZuf6Wj8EuwUcy5NzMR12SKxcU1utGAHppB64VFWRvY1VTFsWgTtnreYJKiaHLUyKroU96so4eNrumKvwMai",
  "key6": "2Wwr4ZHZ7uP1juDQ9kP2EdFhSNmyzNfwSVu55pScrRj3C7z2BSxTpFACg3DqP4fX84nDYfVQfLbKy9cXgH1aDWZ2",
  "key7": "6693ebhynY6KynH8Rm6uFEWbSzFg7oy212TE7vghiZyn6wY1HyMKBFTn7i1EhNN1wCYbFtXj3e354mickgPnjW7e",
  "key8": "2yNhLBGff4xqJxRcSprpQMVwJvRy6UUuWZRigYQBymNMf67KqhHHVpvLEsHnH5LbfrVfWqNASqy1Uo25mNaFx19k",
  "key9": "2AGSVfFPxZj2jeTDPXrij3smERBa1qXQQnTNGwTZwUnfUtxJ7WMqVHpExWsbrDJzKVNWpDTN6kPzK6JnPEpbnVdd",
  "key10": "3cGDj8ZcY19G7TmRjLQhm4hrZZEdsZT9eMBNvuiQvF1q1HRe5wDGprWtXcyJtG4NdE7Dffwqpipd4nP8CFiPTncs",
  "key11": "275Qb4nnnKzC59JYtfNKwhsTJGzQYsKtaHjiGJ8EachYBSzbNSzcSuuzHAfnouKox6j5yG5A74tLpS7BD7kApw3N",
  "key12": "5iVDLcWqYiTs7QmVUWm6nmexHXMYq6WPtfCRtFNBcj599Vs5b9krbcuKyLYca8EmqGjDsajnvZ1cnbykhCVvtSDM",
  "key13": "1hc7azmfSBDLJh65NFmRi3mvwP9Sb3RdsvVyePoPb12XcVx1ZZzEsAbwa94kCCHWn9TC3DLzavRHHuoJJsAvUhj",
  "key14": "3tJv8EoHcNAL3TYU1rURFgFJ7m27H62cbmEkfZDqEkQo4KkmopboNuHd2wWEYNV2FZXXXGhvhF4QhZsHWVmHZ2hW",
  "key15": "5t9nAhdZ4a64qYF3QCC8YkiiCzABoCLiFwxSz5ctBhBvMBP17EEi7rQggETwB4UYBZQyNbPaincQUyhp3bn9uPjh",
  "key16": "2V6AtqkJQNW2KWzR4JNyFznRvER5KuiQvn1BZr8LePZvRpngVc83u3BUnW2FBih2LuEFYSm8dhYoaWWniS1phjNU",
  "key17": "3g18nnX5hKv8U1kK6EAfPkAbK4agvh312SQoV7drV5gaVDUkGKzSvevdnQV8iZqLWsTALod1jaKjEtXMsZC9nWoy",
  "key18": "5trcgE6GvuacjPVor7DQZXVdPGNDjeaVz5AQxQhYDmA9ifZHbeucRpiV5EMkSmm91K6eQ2GgFJ53aKQCaK7HUWhi",
  "key19": "5W5YzYM3rxX2nCefR6hEm5QNxe56joBGQebNYmuH9vCwRM9Lb3n6n6dR8eLJAbN6hTVFhctkspbWwihkXGYZpkej",
  "key20": "5o6Ppfkm1g9EYHDxQBTfeJYdUAP2BMoNVQMcPKZeKBrvTW7iahXfZ9ozNvR7yCpwhofxKkN6C8q5HPCAXaX3SYxy",
  "key21": "4PaLf3QNPriKUB85YN3WfM9Jm1b1aZu6vp37WkEYwC7jzjt8DoPudR99ysezsnwCxjez9PkivAJAd9h8P96AvP8s",
  "key22": "2ejBKYA5fkZnaGwFaDztKgXNERWEifA7mmxPYzm8xuraMpHctWRnBgQW7Gf3vZFYmjvKAQZU7wNSFnTdXsy3Kri5",
  "key23": "3MDpb56C6UdJEP8pPZucjV1KUPquYUKP4X7sEKYEo6VHQsX3XmD8QNSv5U73ep83cdpGwU5hB9sb7MrnTMYGVLHs",
  "key24": "4SsTxCe6gPFiMd6CYNszH4iDmKtY1cFowTdVhRBciGnnFWAJAYve2dmars4ifj8r9dWUqJKk4V99RonBK5mz7WVy",
  "key25": "4YKsZWoEJSS2s2KBG7bjYahfc75NhZeVq7NDHfhMRoBNaiexUDVVvsmQQdB6TpEKGivoEotJqz3ayMfdgyPD3woF",
  "key26": "4MVt5ouieoptvUteZXPtHvCMbhVE1xNuYTUyYNagPV3NTPeTVvzSUu8FsKmNcgWE9WUEJ7SRGjSCQu89aohY2Ucv",
  "key27": "GBcnhZ9jFKn7Wx4Jb1Q7TbCAthp2g63qL8YEwjzqwotA1xFG6gFy7srN9NMmuFV2ZoyKpWuJfTjkopydBDG3kXK",
  "key28": "5omcEgzkwaxFg1eMmrhSMRhnSbGudLTURM3pRQQvAstwNwfkuxHqReXK2H8je3ds8JEdodEgxYVUkVm3EVNmDEcb",
  "key29": "3hWhKprJWd1KyZRRvpSB5Gomw9ZU6WSoFC5vfgaUukLFxFUbymkdfqnPoCNeouLdxiz72tYYKm4KoFATZZC5Xe1A",
  "key30": "4M1rot5U6Pzj5BVEPFKQHPMYs9ftM6h4FWeA35cVx65aKTowXdyzowPArt2WuYAAjXhAdoXp3EXrwtsrZZ1nniWB",
  "key31": "5CWYMh4rfVFAFnyrrfUpu9PF87gbHQaQ48AVM7c6AbN3ZvQBqvqPz8KXY2z2SrDpieCUS81HGiThtyxgWjK7btCP",
  "key32": "5LBLp2egYQUKNkGgWRUMdqkRiSAPLiMJxpK359aNdFkRnmow3M1VTC68LtvfP1JDAKLvBGfcEZQKDP4oq5UF7rxr",
  "key33": "5m7QFf1hpVRyuEDNrPxEME2aqpLMdzP8znW18gK9N7NSvkBnZ6oW4L6JA17zwBiX1Xs8v6nXi8i4pHmbaRXeSATM",
  "key34": "4VH7g3yAq2ad7XVqLafHorhG1gpYY1LgeDpuFMbfHJamMy3SXxqWuqQtxUPFNg3SM3pBW3PkjMNe5TbnZQ6tvPm8",
  "key35": "eRwbd2cZKhkRqecvZZXztpck4xgYn27t3jhip6bbSRYsrrvybT33XrLMmpFGPuuyt5XRA3kqkxg67puVk4Zgsvj",
  "key36": "2PYmthdz9KZHD6ncF194YEprWmr4RKo5psK8WdZ1zAKYzUPbfdCQSpRvtryRsyAsXd2jf2qcdxzhoUevFqYPEDHG",
  "key37": "5md5qGV64MymY8MTkBwL1qzdZ7kwbe6NDkre6frzohkgfnLWZcbA2jfHKJhGivifVYZRJFbRRucRb354eKea7MqZ",
  "key38": "4bugn6PAMXMijAZpjbw4VXoW5Q5wJqA25FK15jAYDPggohnEWedHtJfapNqAJnt5f8khub19pUAbCr9uaiDF5d7D",
  "key39": "kyEq8fvM6PGBy9GK4DkcUqL3SgL3CtfML1QkWf7Uzbo7AkJAd3iDmNb8i3J66eXRDkU6265rAq5VMc7GjEKLZQ6",
  "key40": "3FbynbtGQNrv9KtUnWmXejyb5gRXCtM4jAznPMMdfsenDvDfBHxx4S79sKCBrgeryHgJAcZMyy8FfxzeJFS8YxPX",
  "key41": "42HTwuvzB6Ro53PCebULyUypFsqPzgdtJ7H6NXr4ZEbfiXB5hrEoVUSn9XD8CwqYhFuDgW2ru2VuewnfDrHYzC5m"
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
