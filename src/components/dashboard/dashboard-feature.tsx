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
    "5gBD6Sy3reEFb8B1s3No8BwHKKZz42Mq5fyytEtWeuAoZVE8h4s6Ww31TQ9x2LFATZa3UPinqsZCjQA6ryuZaYTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57BSMECM9umQQR1r3QnZ8khSjjAKuj699Jwsnf76nzDGdb33zDTgkXanczaN1gWmXPKJAw7qb6ENvjgYgifyecim",
  "key1": "3Gb2CYTEcDcQ1VhWe44Mkfyc7sRi9y6ZDV9jHA1eyMDbnccoNdTXJmnJuiKEqwiQy2S7raZd5PBwnkW5ktEY3vYg",
  "key2": "5wNKyjj6zbYULGm7tPnr1xXCbrQ15Ho5SiNzL2ByTHJCjzDEJtwGF4JEgBk5JJMf4dUW8rHW9jaX1dxjfzHahh2C",
  "key3": "Tb5A3Vsz3H62AE7fzYnptH6ZexcjUFRrGqQSzvYovcyuaTrQaYXQDVEea8HybqeNYR7aAvJkMJX4343RbWDakPE",
  "key4": "59pDJha97pVLWU4SEfrDgmub9FeAa9Hhe7J5Sm7yuwpy15oD4ujyhUTqmhwFnMswZrGtBuK5ajvXnM5fENe3Jatf",
  "key5": "3F5QPZzfLW4bVjtP3B2YQjHs2egXaDgfAuMZYdJH7NYr9JTJFGZQHD2A3ypeRziWjbSNz6S7wpkY76NaW3aCmEdR",
  "key6": "5Dq6Upzr2yMqFYEgps7JTJ6Yozf93gFgcUvXUN1fWKUvBTJn3ssRKbHfuR7wLFNiKrmbhBYmACBqX5JaJXtxqgnu",
  "key7": "5zBwRNLuKC5aZbWckGigtw2vjDbB3q3jzN7hKrWvWPL8SvR2A8sV74HwdpVhBQvYYMyuv5xqNguHSUG6HBwDvgSw",
  "key8": "3SNFE98MuLuKv8f6ETzQAG5RBAWCcdp9VddEE6bcaUj6nV4GDHmRc4SwTsYEUsrWzpeVs7ArxHiaHFaFBWs2Kx8N",
  "key9": "5U2ktW4B4rKLntvSbv3RjjuP6kFWDLGV48z3VefDYJA8N3roFfJS9sd7xv3M37PUd7Y7fJCfzVBRJbV8MVrZ97v8",
  "key10": "4nRimX11zWf3CnywVkLwrRokPcpYo9LXDpCBDLvZckQ5XUKQtSGLdHLdr9Qv5mA4TfddZYiSrXhvucmDHS4uoMcj",
  "key11": "5wtyYrk87hoQNu95TFhtePmt3t2o45xgLXJa1eHorULUWJSgTZwsbWSPpUaEWWJZLNPxxY2bvmbBgnoJGcqSfZQH",
  "key12": "44fPgSbHXYftodE7K2NcKZYgJhQsPCZG4AkDzdos9rAbMYbyj6YcZJPb2oJePVexeCCsw9jCFxEZnXuDqKgaMJT",
  "key13": "3qxg3NHzhnp7yC2BipfiKhJSGFxnAcHagwrcmWf1PqNDi23UQFGGA5PbyWFwA1Km8bN13vA5766gvXW5p72ww2Gj",
  "key14": "4KKns9xztYYRecW3ZRVJ6G1d3odJW7x4qyxBpxWqTaVSTEpXoozvLBisJGfif7mRTL7RrZWRmU3YfqwDahV6ju6q",
  "key15": "4AVBEBkupgWcNmxWYhGMMSeH2APE5cua5QmVKxEGj97ovoimT5F47S5PK9aia9j4r92W3mXypQWkGJ9yk3qwMpoF",
  "key16": "4W8u3hry4w5yd4ACmPi7e6pe1Vu6PfQaeXqvY2gEGKnAUCVsrdiRbCMuyJLXNqEaXmi4ze8nycqk8VhRppUU6D8K",
  "key17": "4L6wiTosXqDM52k56no45VwV8eizDP2W738V5kn1vrL7WBGMnZvBQ7N3sVkP9YnoNs57MiNsW9j8iBU17bLaWSrv",
  "key18": "ySBQZzsp2p2ZQYk9Jkd51d3ogSFN5EFwr66Bd3L9EstcqLEpvzLMaCr1zZQqWi1B3Yz1n4jYCHZ6kBiCf2qpktb",
  "key19": "39kDJZHE5fdKQvxTnGpDJBUKFiYrBQNaW2Fzip5dQpuhsn8xCpRGVrQeF84FG1x2BdzLoihmN5HtaqhUVPKTnoN3",
  "key20": "YWqYAiDbQw5A8LrTe9SPYRLsfhcfenyVzL3XWYUWn1NPHZF3KvtfPyBPBis22aGq1zXaKwarn4SCSk3Mq2SxoQM",
  "key21": "PzAmhMyH9LutTTbn82jExEqU5bPfCV2mNXVCE6RY2o1mvzLHcQ8xnNoSDeUT8TCzF6Q9fJh1hkyaoQCv9iY5qm9",
  "key22": "5q2Kv3uvntGvF7qXzK6t1JL2b1r7EYKSkm3E4cdkYo7GkKwEZNCSPW8Vh9BbukHb3RqHQByFaYaRwTyNcyZ4idyo",
  "key23": "y8sukDXZ2hygPbALNzMTsDjFdoNuu99mN6UZrJ4BZA2Ugd8mQY8L7tHfjy268YxAnPN9pzdXCZUt4g4imt2nPbw",
  "key24": "5hPXwF1PZwaz8mr4MGbP2Gj3R8QpXzyxLY4CCystKprs6oncPfj5r8go32Wm7z5yYWhw1xvLyZtNerYMj8vDTUqv",
  "key25": "92yARaNkXvnThguBvXFX8wMsJaEwppuLuVUDRbnuN6pDZt6bZqNfteb79zTGDF9DysrqxsHWAZnJe4Y3oCNwYPL",
  "key26": "4PVej4fEEpNSBf8g4jg7kQ8dCSwHgBepepfygMdH8KxEu7pWNSLmZBXs9QvAW7WRMLTsAmmQWk71Wu4oLsU86UNF",
  "key27": "4tWwhzAp5DMRfmjfEC1mTDgyk6Zkohxwdg3vaYAstpkS9GfD36Fy8tArmBEYFwSuiE45LyEALwDPHGwKd4ujmSZw",
  "key28": "3n1yC6Ur8FppfpqViwjk3MhbWbbEwQSqpmWiCdz2AERQ8xeS9Fv9cNMg7FngJRNavXyn5H2uA2MsU8HMohAJ3cSD",
  "key29": "3dXCNydiL5FbWpqMoPacvsuvANonhhydZrwczQfee3GD6v5fdX8yYW56hoBQDsrmNZ8P4oZ3PahmjutuosdFqQR3",
  "key30": "4Qf4pysoCvEQqThgUW8mKkmKpJEpjwA4poiz8PT4pdnu9V5ZS8m2EMcKskHHFUk94UmHQksLSXC5rv6wfLHnmk9m",
  "key31": "3Tz1Px1ZmgbjBcgkWdYfBVDGzRePpjbadB4FM14KV7YJDpmMNi24LHGXEg8c6ra3b3QqoNEpsuWscWCcExQoodKB",
  "key32": "49wQTP6nDSorRUwHqg6HWF2kQXQ2gJHTeTW7N9rb1TNVdaT78rb73ZpEdqYR5s7ayfbRcupQvu7tSsmWxkn5zaLN",
  "key33": "6zShAhp6St7zC31d1sorycX4KkXG1hF7QViocGiStNbP8RERjvJuV5hyykkSit1wjQEeyhgdfVQP4sgCnHFKh4Y",
  "key34": "2PZhFPxkAYSYLJ8VQoBG8UcEtMgtjKHy8ndPEij8FszT5dhVGm5hX5WJuXCAKWcZyQKmHxSjsZsBa5p8AwgrfGKX",
  "key35": "2KL6p4ixNzz5DApSUAu2J44oymW7Z1verZJLMaw1FWBUxmXBo8wM35FgLrYwkPNGNEip6uuuPmoYk7QurAmFX6Lg",
  "key36": "PzV9hNrNyTJS4Si2ZukBnMYLcT3pxQiMzHqxsZryAU1Z7H1qR5ERaPd5qoRxoZXjQWNja5AAkBY8HYNvPAziooU",
  "key37": "5DtqLtNxYaXZ1A1nMV8oBRi8Y6E4CHz64Svr5aDNFDs7KE8cVjJvKj8Eg19rVqyaPY9KRcVhiH1AQmU8rpWJFW1y",
  "key38": "5jkg1wskMfRQeGg8Ki5CzET6wJQuSFVcDry5MsiVn2fRgqn4hadZ6coHcuMecTvhSudZMkRPZv9i5qeiZqQLX5es",
  "key39": "GT9Yqhgyzk1ueCjJkCo6qzDpNsNkVShoqbfYKrjz2tGdMh5VhtR7jA8HQizhJiMoyPDcavZEjZrSnH5cizorbq7",
  "key40": "32Q23vUmx7z9DqUx8rTQH99d2STjRWiAvysWMTjv1eyRok3zT4rjpx3xQ7z8UpcoyFukcbJdSvJm6zLasTUQb79U",
  "key41": "5LwmghhXTZMHAPbJQcNTa6XFFpWxvYqFYjxaodkkoT1jALDUa2ULyzddTFsEP47chnWHjcBA9cATLNG5TaTSs4JF",
  "key42": "214UUyr9yGiedpsjzTt5eLRc8sKTGCQLR52Rm51FE6ZKXk9zcjnd3XRz7JzYPdhniUupveWCywvDadCW4VmHPXqf",
  "key43": "3iDAwrmadgDJb2BpcZbcoHEsrMzvhs8VtCmFZW1dKdTGMp4X2zg7WT6Zw2XpNF9kioRaJ7wYUwmmsXzYrwMdsANa",
  "key44": "2Fij3yffXwbmSQ8YfKK1oabEG1TfHkjg1wy642Z6o3tKrRNjDJCNrWEFrHFN8VeFbD3wKzSBAmB2XPJjdzqmbEuV",
  "key45": "4rTbR6RaWUmv3BK1heifMpoRY3kj8XvHMRs3xBrxvkJempT5trfEW5FeQxoBCAv9mK7iEWJjcM1uxSvj5pNTT2vo",
  "key46": "21zTvDrS5PCHbza4Km6stHcr4xp1PbDXmmvVaLpkNuuQfdbyBfdbz596UuUHQZwhJsQxJoPYoQo2qPJKjxdHDRhV"
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
