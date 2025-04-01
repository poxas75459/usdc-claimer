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
    "6AG1Jp7bDunvjQmngqPX1n9qNDuNHfFp7VBUxsDvrFR4heLbwBHVKYe7vuQRPbDfJkXxQNnbrBYCUJZQBEHL2gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gj4VEW2HZB3h2UsRiWz52AQVyAz4qrWj7W1sg8atf1jtkzYpcRZCFzNBF8XQs9ZkVJemqw8LYVS98FpfZ5Mjcv7",
  "key1": "3Qb4Dv98eGTm7GZAKtxssP65nnpqzANijn6pR43YX2jZ8qPPV8VCba8rTGMFr5qTQ8adQZP7KADw345S7xZm6mWi",
  "key2": "5Zji2qv8XSwdjSPha1swFcSLPL2wBzUC2sVFso9mcx1HUu9QqkikMpHfKUG31YqJYwFzkS2GzfyEfDMs1Msbs3dT",
  "key3": "5NzPLBowVhbJhKNCkp4JodXT5DteNyYp8WS8HgM921Yneqf8Saws9siCMga528FWkSxMCRR2oQCqEoXdqai4tqhW",
  "key4": "5xfUaprEKXafijY3v7yHCqmua1mcqE6Mw55vMZ2Laiz5WtYEwyZV7pa6hezFNxqhiNKwWPV7N3fgqM5G7LqK2PU9",
  "key5": "3jkp2vpob3B25Xu9FcAi35H6VHmtJDAqeEWpndwqULcvGgumrBKwDt2EG3zX8wBj9EccNdH643Xt9VBKxdRsow3r",
  "key6": "4A88kvj6YvXxC6YZeAdAXAgW37Jt3PwXR1Hoe9DyF4FQU1ievWKAUUqqtEHHrSbNnNntxEUW7Zrrp1n1CaUcjc2U",
  "key7": "2qiyJd4EF4kKe5jnCVYDQ24X3M1E8w8EjNw4A5k4g928N2syNyRiaeT9FEAEGCn5SwRfQtyAFacR1J9xMpoDLvMS",
  "key8": "5rwJMq1FNkUvFF9vpTgd6SCgXLmtCpuqUDCk3RAoX1oMLozV8qguYBSQCCYTy5WYZsT7TWrVhkXwQMwbNhozaEQR",
  "key9": "f56resPxcyqFYepre6wUdfFMNYFMbTDmgwQdBvHG7W62ewx4obsrcvFpoy6kSAA7KCU2GcHHhNMPSTq7V8X6VBC",
  "key10": "FRZ6yys4oa16F92itZ37PrU2fzpnic18XSa9UomxP1tz7Vx999tt4YmycBEbZhvuN9q78PuYHFAzqzJ8sqhY8kB",
  "key11": "4SCrJ2P6rGkRHL75jn4mJWF2vGY1iVV49mqP9FbWBvhAPkBTwkTnLbeHHi4FtJtHYkyNrAj11VHqvwhEkFBuxwRK",
  "key12": "RJthaka2wjZVnqigca9j2bfWaHWLiyt8ZTNgfpSU5WdM2MVMucdrzoVioYcHw4fWthVmGfURUHLHkhcWqg9HNTP",
  "key13": "YrCqSP5uo3YsxtArCqwW65QYZzBY7gMtbSQd6w8xUseYkRRKxc45HnMEnH82i71HwoDoUgoLLqDfG3rfpJ2jWHa",
  "key14": "2HDprfLchhuBSvihNeZuwMwToLbTkTYu1Emk4uxAk7BrVKGCWxcuVEDsqJ2cz9QW21cQRkBotesLpYiaJRExVSs3",
  "key15": "4d4XhhYvdpTgiWfKfzZJrAzdELSujcsuhnMLyEbcm9oWkWoo9rjirMbwp79qs1XchuqFPEnj1QGRpgQvuu4QToY8",
  "key16": "4ds3Zvm6ujcPnaWSX3y6f6KtLEwYkHPffrVmwpkt9StfjdN29v2oZ3fMDBtBMo6Cwo2nc1GuXMeBAA9vzyX2pbvi",
  "key17": "aiedBq4qXERoxToeNuvZ9yZLAcw7d4MG8iPgV3tZ5bXzg4KN4yYL9gyxnZDYkcjzxqzrLuDzKxM3dZ8TzsZ2vGR",
  "key18": "4NRxj2SH4aAN7ujnwiovZceyhXCnR1RC6UDpMnMZb2W68Knh53BhStXFLmEjZzD88NUx9KFiFJRxE8LFY8s1kWXU",
  "key19": "5YkuQfxtmU2UvkLxuDGGs3cHnK86nbovMqc4pensyynb1EjLU9iGADKe5Krjms5uQcRRQc6fXYDtNvtSmB8nYJcf",
  "key20": "62XauQyxM9uWKrvNaecC4SuWwkVp3xBbEw8FN34DeU7KL1KhNqT1EJGhSUYieynEueQLCR5mikdQgupJh8pkL9Q5",
  "key21": "5x7PvtGTpJ15ojgFsNouVZNN6X3jYNZwzd1T3brPdjyc7TGW7cTfxYVbKAxieUQJCzWuu14BxYBUmDmQLbeGSxcK",
  "key22": "ANijr9icF4GDarg4DFFQVqdGBvVkGDuUt9KCsJMnGjx5J2Fse1u3CySMxS3E1r9B2JRNTSj6VSib5g6DSAZFZ9j",
  "key23": "4PHPWcLssLNsWyoB7u4B5jnBowL477XL4nRwCWud9HMXeLpgxkVrx7AGZgmxT6tGB3q3iq8MnmMfY5WErLYiUueD",
  "key24": "3ZAsAaZu6SrjxhxLE8gEMmhe3ehiXhWUS92dbF31aPirNiv18X2rjHAH7jqjn3St89NobGXbHS82YikTSD7EFimC",
  "key25": "44481Ki2jfbGHZYoEZv3Ws4cqn5zUYZDFZA1hQBVR2F4CdwXKZ3x6jTQR7xdddKwCN8goczauHm7tgwvuSiHZJnM",
  "key26": "5TYKx5VevPpGuF1zXEaJ7ScrUziNPRxpxZT17zAF2kuPWTn4gZSpF8RdNa8wzM3yF84ojJb663fRjYSAng7fyJLH",
  "key27": "55Xeg9bxuMTGv9PtMxcCBwwW6tcHZV4z4uYsNAT53U9QovK71ChTLBoY6nsEhDDirhSi3Vbf45MQ5xFGD15G5hJR",
  "key28": "4LnUKc812Udk6BYXrVPsHUJPa67i1gBhYnsD1LuJYL5Kw2oRv3yJTLtHATkgZVYBtjNXGM97fYwCiu7xm8VcwnYm",
  "key29": "3q147h2JdTei5oSjFD8xaJXLcFstBewoZn8v3ELnkYbANa4vtyjLwqUkFKAMJNbxZdQcagNpZ3wEKCEDTGdNnvZy",
  "key30": "4JkEH14rmR5WxQfs9D3bmArmfetKUMA4gQRnPvDwsUBvv44fr93A5t5yKV14xmLLJQu3F1niAMH9hs3FAHTkB29U",
  "key31": "3V9h1Uenh3FzGkZoj6ZtANS4P9ZJKwzCDQhb5vijz2jsXKdSY3uq4PQZJw9fwbKstsBrUhXZptQ9QFpX6vUR5mXe",
  "key32": "3tsRqdwFwgEadJoVQThaoRrGfkdbCyex6ZsvxKEJDT8iHjrirvE6FQcGqBuZDbG2whhYnuSsrmyiqRqKQ9xLZLVN",
  "key33": "5A2MAMeho9bRrLaL8bq4TFGrjDhpj31GVezikcaDefrVpAa3hB4VdY1JNVJZAy6EgjPXRc6QkbjJYQT7V2aMptCy",
  "key34": "2VC1v4YbfjKbPnWUDtq6p173QvbmXAigES5f742ygUkLh135kfH41X4jXKL7FqYCPNwh3nvkHCitVyEXUyBxFox8",
  "key35": "4n9h8eMzARWWBv9WocZuQPARo8rECA5L4MB94ESdxGuZmb1sDsvGeFReWX8gPsRJ7j6EqihBPRYfydwz4E67HdcZ",
  "key36": "3DD41gsQoLffVRt22pPTjMmxnomLWCC2GZgsYdPu1NfRFUvxej84EccfRztBNyzyGVUuq3hNC1kS9bi42c9TgfEP",
  "key37": "5LysQYxSeW6rQDQJG7vL4e4AawLQEEQXdbjnqu1BvfqwwkdV6uLUNSPXn5dwT7DL61Ti3RFWBotKHqmieB9DVxFa",
  "key38": "373vDrh9XjVosD26RM8Lp7Peoig9sjBpBPQfTjxQazLSuGWAdYizd3Z3rKmGwhqU5sQRBGsDq5KwGosHDUxmr5gC",
  "key39": "G9JVtLCVytiKJbfz8J79PY2ehhMXztXd41p5fYzQzmRnCk6ATyGuiqEem8z8Re2SnhJu8qA84i8KZRnxwmyKwNk",
  "key40": "3pgksohZgMxc6txsUTB55UPT9fo2SSzEqG21fvYbEZdcY7o7vFMGbqenbKzuC39DhQaGnFpqKrkbYpDv3e9R8qMr",
  "key41": "4x5G7BKMxir4p6eL2HcfqYoo5cy1uToFC3F7CZ6WodHv7tC5YKsJQ124k8uVbpkMooXkubFhwikyhihutRKVJ62j",
  "key42": "5rnDEFvMT3dAwgbpYynKnjoo3UsKjE8rGmLKAekZYGyDz9FxmDSdnVYdzmmwn7kPwVxmvtgXuyUgc1Tgdqe7kwKH",
  "key43": "2QmjAnQQvVqh7uKdZc9txbdjFXMko6TntnDA8wACHA4fVuVFr9ca5PcovMbSveXbTmRjpzXQ3cypxmGAhAv4kSUw"
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
