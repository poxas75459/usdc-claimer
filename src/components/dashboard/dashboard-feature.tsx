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
    "3fF7u8RjcHdQuDLeDYHiczfNwWTHHLEaHsyD4rkpkUNYb6xoyJndBShs14waAQFeVcuSh4UhyxjVu2icGbC5KFce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwGRwdrkxrvdeECfY6M5P8xB1km5is4Djm33iRrzGghEULh5LnGSAtpA9K7eDqvPpPETuSNnMpHKonWNwQtHstr",
  "key1": "5qv4zdqq7uqE3khLGaTWvmC2GP3aPvCRyxqLxxLHCgWvfhsJ54o3uEBSWWUmAVndhrbHnxR2tYzpjtQkWpqkggbL",
  "key2": "4CMQqhoFVwd4V1jwZP1tGdUKeTYDfgbKgxbGeKEvxee9s4VRDTCuD8Nbi9uCMC4yDZm7y9SzrMRNsBGqt7H7L2zx",
  "key3": "3jLW7d96bAapGS2GBveByX3sqaCBeFJMCk8DqdzbD1o3t3EXxE67xFi4SSTioXqrFNSvETJcnZCfzrQGHMHJgkWz",
  "key4": "J3267aLQM72WEE6Vvo2TAgW1gKTyaADZuvg2GdJTEtEAgNj81FJaH6vhmQLUYTdmchkc4T4qyTfn4843b22E65h",
  "key5": "3pdrMJEUxWd4xKvR9TCM4CEGs3in2SqBBDpz8npq7dFYfN6Cph13EPH19wwtt6nH9WPuyCqEjmJ4sgPg8PuDVtrs",
  "key6": "mP7cW6K5mo82cgj1maYD6D5e6Xt2mdZ5C98jyEaLQGRWXvV7JhpyPPBBXvZudBNuLwBVATckFxnKJ5xVYBer8Ss",
  "key7": "3rF1sCfiY7L1vF5CBnJ6AFotrtH5z4PcJ21MvuvLQxqBW7vwT7xEYKawdg13g2zhHEwzzwzqy1KvjY7cJv3HAp3H",
  "key8": "3BZAMuEmJtaopNxrK4pe1oU6S4YQNWoHsfCzSWeTp6PtGrLgG1kAoJNux2WaXiCGAX3hevRhXWdPSwHpSa1NpbjT",
  "key9": "4ge1t2ZStJkamQeFBZMCQa2bxqU6atyuDQyeuwRrn7vJiNDUWgeFCK5AYs2HPwPpwnRiLF7FsvnBWhPmUSXsw6AW",
  "key10": "1223wFiFdxHWfY48CeGJ9QxPtnQ4YJ1jHdq3RVpLpGHJuupmgyBg2hW1MWsMy5mfoLP1LTZXjE9RJsV3W21Y4eQq",
  "key11": "3qBcvWQtBXrQn3k9Y1o5pNnMJU2ZpTV2m66Ks7fMHD4NFEytwGjDGts5FHGKa7DruZCHQDf11wVSL7MAWVHkouQ",
  "key12": "oUcH99CWaes6bMgoLgRzvH9GQJaeqfgRHfrrHZkPVEEm9zowVnbp62r7AEHoWz1DcooxW7uyJ9AENQ79dwdP4v5",
  "key13": "2dEpMh6a3hEqFRYTKerPXH96SbfaBU9Xsw2D6g4M4yBrJBzb5czeZoFNXrycu9QjxDPPxE8GSDyyfDMnNGkRBXKV",
  "key14": "3CxgZioLD92knkR91nTaYoWmfzFWVUQb2qbcfVkmuDZ1Fa7hoDHpFWi3XZFwgHrc5PL6c75j9HL5yyKTQKuFPK3W",
  "key15": "3dteS6QUksNamHHLdXpf4U54PxjrWNAcp2qeFBfTCjtQShWL8beUcNTiRbXA8j8nEUh4qmf4Q5R8tNgKRuqdYGCj",
  "key16": "3mqZwDmyrFs9wrcpqSyPUY2LqYWzsciAxNXT7zayZVirVTfy4bhKcnZcZb62yyXDbR4EuUrwYTm4HsWYQF7sjFfM",
  "key17": "4Rnv6bTgmWgGrYF2XABxv3uYoe9vfZA92neo1niy8vj8dgJe86MdhJbLTjtnkQpd6WoUD1BFr9u2aBAJ8Ayupjp1",
  "key18": "2AY7ZPGCy9MHR26fjNfNPq3wJ56tmathd8KD6iuooPHT5W3KBTwMPMhqo7RTnw8i1rf8xcR56Fkgib3ginSXZWiD",
  "key19": "3TibBtpQAu2iVhhG15P4fdL2iYMpHHrQMrHv831jCFaFrXZ23R8AbXxUkEijHftBVHhRXC2krpYsXU6ESr6b5agA",
  "key20": "3MrhEfEKDvtTQENGrnQRHVwTe8qxCC3DUfBonujKaf6DGJyL1arHLX5fN7oewHndoxwkr5GonpXPkW2vrVQJ5CYs",
  "key21": "GEGEi7BPXkd4ExSS64yww3kCatmWjetoVe9Ce4EEQA9THizjDU3i1zYiJjy6FZ7ij6jjwksouJa5BgW5bHqwSVa",
  "key22": "4m36nxxaQWtwtBKfCxXGvao1LjxHDPUZvxLqCEsVniTW5H7SJ8zzxPrL1KSFt54TEL4FPEZx2GTgN6aL6jQ7qAGK",
  "key23": "4mcQ8CUpBj2E6mj4wnL2pn9UCVgUTyNnymne8wo9djJJ2CMFKwVr9tPNtnWowM1ivsFPJNExn7Lp75KACrYr1SEB",
  "key24": "5R2z4VKATGywXrhaubBN4PpBMs7iBkhvhHvJdeofUfUavRA8j6TRwpLE7JSZpAi1rSA8rnXADWyEZf8ECAShjqSt",
  "key25": "673eRYq7UsmzyCbSSU83wZ42zRiyPZD9PxwJ25WLFMG5R9fsjMeVSQzXB2KkKD7Ze9oHBeBHA2Ymbe9sCLqYiZjo",
  "key26": "5cKqfxynya5uakZq6XiBM7G95NYRDH8KQYa2BsRYzCoNpk7ThyaV75Hg8qMpJpRgCTyv1bJccTompLKdcsP9ByQm",
  "key27": "2MKw4LfuXSZEiZGAHESe1q7ttxVwzSogZuNTtUAv3oPg4ikBavvgRqwQaQx6UHgbZEmbKnBSeBqe7GHdc54jBKux",
  "key28": "5FVGwFmp9NsGwVjkFLpiXUS1gZXQmNge4155kFkP4gByweEEEULxc9UT6uECFGgtDgcRCEdJM2aqEXUkJCu4Lcu3",
  "key29": "i4Ab34rJrJ8VZimM6JEYRpyke9Y6LkozWGcSvs167y8vUdrPK22SDxkTaiLKZh7Q3jbftv2xGGW7YKDybwCuXv9",
  "key30": "56RYhuJTcpevW6aFv4m8soTNvBNUuFKj7ff778QTMbmWsjJ3n1Tu7mM68irRe4aHkyHRKr6gYQjSeaBDspGpbjdN",
  "key31": "3duTVx9oib1H8c6L8cSAyGukvgSjiHjvzxbu8tvWQUg44RA8bchw8fYyvXBLfCH2VwZVZuT5HbQ94vos4jFWKbtd",
  "key32": "2xYWxNp9kqjmLghtjPgxsaPEahh3mj1MwjaPo9k6Sc1YwTsz8vtydsqPefFtjhrZ6VrxLajhWAasQvtYj1QqdMxA",
  "key33": "3jUJN68YhvhKPcZiTvd2c11TYRN9kLgtQt99bGbbb2mEBfP7w392JP1XVKtnE3ZMV7NGBFfD63Bk5p96n2zh5WNz",
  "key34": "4R4Arn9nd9wdiF4fTyXkXh4maSbjzPQkF3cQDDAkykaT1t7odQwCMR49jVc3HA45RZcwarnXKkUbXPvumD8kXgAo",
  "key35": "5GD7YuwuWe4YqABkW1hx2E7qyfpq6Tg3FgUJTw9YW3L44xjMXFx6jiAV3WPCHnaDNQzNJE5QRbGApekfRYgs1v7w",
  "key36": "3d89sCbuYB1k5frVHR1FzecVghgqELf3gyXbGaRzYhA11ipRDZsoHiS8Tnjpg9n6NzvyPeCLvHGZ2srRbDUVeXmE"
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
