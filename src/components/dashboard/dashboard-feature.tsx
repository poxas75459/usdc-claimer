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
    "4yXpGpUCyCNnEu5NbDHom7FYCfqSnzz2ymwMYd3a3V4xWfn3T9C4BH1Mea8zD1zWNaQsLyViAKKTFxYaoSfW1wUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asLGkJN3R5LwKx55Zti5pPYva2MD1LT8TwXQjGpBwT1A9JWqWAX5PTPKNTxwZJWpf233vVLCxDra7HKBkGrJUu2",
  "key1": "2CqmwPfzB3RikrJLUyFK7TGLGpmgdng1SRjVggEpyimF2dohtVHTeKji9fFsJe35whwyWsWKvoruS6Fied9E8Ebd",
  "key2": "5kqYBkcQqLdJX2GbLMWVk5Jwni5ZraQrhCJx9pveCJMHExSmcEk7c6APGF8sj9CnsLZ8G9tZq35Lj29rHDUHbGxf",
  "key3": "4zWvZVZnkCkowW9HHbuCvB1RZa7Gxafn69c8vXqaxx676bGoRrbWarEfjE5tykHxJfi1dVNWwrDELXcJ2TZxuHFq",
  "key4": "4CJ958gc53RBDAfJ3fBVMCx9yJswVdeUtDWM92XiLQFW7Snrpvh9sYh9njH1iird765UT786Sg5KmtY8Z69M6GwS",
  "key5": "32mX6xVPYJSHvox3NFSKvAPxJQVkftKenF8Nq6QesgNEui6ntV4bCfD3nu8c83McCC6uKfobnWJEVLQsmkSRc85S",
  "key6": "4WFouxXeLZTqsUUN1A6fWUcnM4BCQrME8aoe5Gn8SpjWwmi1WQQKc5BiHStk1UWdvfvsPmj9S1WYwv23RxkWFepY",
  "key7": "2iFSxYnPUwj5DMa2KJwdutYUkTkXuCcRq3GuozNE4fpq969mNcWyETLreoxbtk7VgsAvfomU3S9o2WFcWw4SLVNS",
  "key8": "2Woqfkbp5HDza4YZeLRaQq4GdsuTCHbyuCdHJY5KJLWgPStEy7Eezz4asV7xTj5fyQuVhYnHRrrkkpQAF5UeoMvt",
  "key9": "4VVvs2m9q8E2iQ5auf6qWPTSzPprh4VJSbmwG2y19RhxTYAhEsXWyGoCNU5YPDaE3qfF9riGNisxXDSRfUAtdyTv",
  "key10": "3HuqkXsEUftMrEFKmdo49dEeU27X6Z1dYm8XjoprY65kBzCErL4UwSGiUZsmvjUnN8HNG866S7CHwUgGzGHSoQdb",
  "key11": "vkoFrQz8AgjzZRqw57KsPCk15cVuDaGT38PPTjknXyWaGNbqwNPfh6gJcXvZPLCTZMvsrhitL4wC3ag6zFV7qGt",
  "key12": "2ihzdmVvLdkVB21wd3PWZ4nbmn4sLBNKBFXaCEr3md4B6xa7JE2j72aQGbmeeLoi46udk1xm1Stn6Si6QxUtjjMf",
  "key13": "3S97xkGYd96knWhn4T97yPLBZQ2k8FRNUkWjHyCMM7UKoJN1LPgLcVcxmpb1mAfP2JuxaSDCa4FCbQZBz4hXj9tM",
  "key14": "3pmCsjXDcMnHxAfBmAWi1LMXB8Mifd9huwf85G8Z8c2GX8Ysrh68D1y3am6r58PgtsKmovtYbKNcUcrxKXRLDGMv",
  "key15": "5hW1yWtAEXmJp4smQvXgo6mrmZhhFd1uBD1J9Dc1tmzFAu9gtvCEgDm76KMMvA7uSS7kLgoyb5rvR1GqHPDuADWx",
  "key16": "3ZQzbTmZTHQtyzuoFVFTpiobz1WUYS2oyjPU19Xy3jrVnuJY2du9EXDfLJ7ZTurXV2c39hFPSt8gLXhFfTCQFgNX",
  "key17": "5cw2uFbpaqqbAWM3KB8y23bY1tdrjP6ga5vE3PtA5A18YUPAacCmbkCvHs1pMzzQatPSM4gWorM6npuFK913xwqV",
  "key18": "2DTe9f13VExjSXmH48CaVZhzb1aCtm6iBzaYq5e3r9cSsCHbLbZ2rH17mNb77r8DCUwjhbe5NoAcG1Qp3nDrdceu",
  "key19": "2YsxECpHBuW4ALM3DQ2L8oSdoRFMMozspcGRe7d7FUqDGTpDmepxNU6GxkSdxro4E43QdzEDUaWvRdSkvG7bCafT",
  "key20": "3SXtkmpwgRBsq4tgra5JDUi6jric8o659etiNhbMRoDcy8mLqA4Rg6SSWpc8rouqtVsnswCgoBGyhdXVWRbbWxot",
  "key21": "284RcYhyAkYuMyExqPcZyS4nR93JjgYbiysyLg8FwJw5wDcyPxwGGN4CSgnrAu5r2RrtXQvWX2nAZyNqicbPySA1",
  "key22": "4LVTJRsmVaNh3661uDE8QYMDf8fEZtKrbgLivV5nMf15q4i7ZVwbvf57xSBPEqnkCR1nUoubGJDky3EAqMk21LUZ",
  "key23": "3CM36GZe4BuCMir9iKbJSbMyjmtGkUPAZCCaMm9hSkFKELzGF9GWqByV5cGXK78LWp1qPEeK758noWHmnbiUJYnu",
  "key24": "5YX6kpxgPSmECUh16rAx6S6bCy49Ud3cg89FjRwPNgSYGHr6b6rfkrmsck6E7LQXgnkRzD8NM3TNn3BNoUAxUh3D",
  "key25": "125LQUE4HXGVeJisBWeryE1ofYCwVQeTGrfushG4Ra8azABFBvBx1LQbBFEBXEXJnCUuLNB8CUQSSWRvMobCYPRz",
  "key26": "2fYrM23KYchqQeKWVvAQWsuxosnW1ov7Leg4DTDVwdRDVFBDqekcC8uTLjNGG5kHqXEibKmCXuJS7M6NArvPLYZx",
  "key27": "3kjhmh132nayYyVDb3efgHWNseCLvz8Uk7Rz9FduNto4Yq61tYuqAapokanPhkNsv35t9kou8tkt39ZcVW3Xm3Ek",
  "key28": "4hPv9hV9HpeYfUehnQYGXLXpBJvaTt2ZfnvanEyFkDkdyQDvkBjuqkP9E3e9NEhCbG5pV6VkebAmFvA7DCpqDxkn",
  "key29": "3KDnXvKePYXBWfruknuWrPX8jMzXz1VzgLd3mfi9zxby4UqZHZBMgy2gVp5d93ycYcfRPFjZuLJ8JVWKUPwTujSw",
  "key30": "2RFjpbV7V48DKdw5cSxbgzAvyMbDeoLzqNQnYBvXqBicTwPGmAgSwV94tdmcVT7ZvhxsPHuDtmMwwzg6ujYMX36o",
  "key31": "5WWpRZ5eEsbsxwvLQUE6u9Rr6drhXZynCWCe68X5CkCxmaJNK2ny3cqq9vnjpjYRjbjVi6LD757KKyCjbTHKyk4A"
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
