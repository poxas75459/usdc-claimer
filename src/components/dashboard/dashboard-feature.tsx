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
    "5uFifmuV5hQceVZxZDTpaxDt3T8Ye8b2dZg2SYjTas67sVJoyAcVZtf7hXk5Lk6iFrzRkoVDtc5JyBQVTgFqHAW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2McXU5qxPWruvYagi3LFw4Qb7tFxwHusvpwz5cifHACh3Jzt48w7BEGKJuJ3sfExEuZ9o21phMum9EaakKktqWM3",
  "key1": "5481xQ6UUvswc9njcPjttoCwXbLbM2ZShy94bTGFZCHEoZmhiBmtY89jQbxaYqzJrrL2hDjLgQ2Dy7WHrB2k9zdR",
  "key2": "4iLconHHqUs6F7GX2Xb8itUjA6HubL8i9hqz18feJb4Tu9ws4bEXAExyjUsq4vEsYu9PLUkEegkniPgQRJe6J8Uj",
  "key3": "4bzD1ZawvuXnukGkaDUEZzSRqx7BJD2sjbwPsynpU9NT8Sdjgxijm1oLLtvW2yL6AbtnURtZHKq1S681y39qYVTE",
  "key4": "4XuZt59Hwij8dDtn9A9TNbjtxgTTAXspCPdvhVdSRYGBhYereTQ5Fjd8sfTAm9QaXW7SdNgtZGssUuzKCpdNF7cX",
  "key5": "5f9t2tMyWeNjLgpACdPBNr1KmwjUomMX4N6VGYtota5jwwBf196WvnokfAocE3WgNF2pmAxHw1vTQMa8QXce8DQ1",
  "key6": "2zvuwhnhcfbLahaeTZJcVTNH6UZMn4jS72X6ALKkSQ7EBhge4c3YPhp6CgoDXueR2hkoBBsEhPWZsu5e9NPoo2t",
  "key7": "65retqixdm6FjUZTpefes8ct3bKWxYLGikMbTi1onZBZaX3pA8P9tvpDuomCNaA2sLgby2JkcrKw7GVnDY5MT2jd",
  "key8": "3B3cJABbPk8taBCkqYwrkboX2TssrPGTnQ7VSQRW1XsaYLTZmJeHsPL1HuDyPZQDe6sFUCeH95bdjFGEFEaXv8PY",
  "key9": "2BkQ6VnamZJUtLpBVXh4vQegP4tvhepErX2aqrcP1t6Q52QCbKa6wawrv2MoebpeQu5K74YNxzzsxJHRGwaw3LvK",
  "key10": "3dBQGCFw3ZsGA3QYXixUDC4u4HhZwE8dvfEh9JPFQc7iXbwf99TApV3cAHzJiEriZyjtsferQAPrjcWUqG95i8YN",
  "key11": "4GyssKW67Q5CcAkELkidexKizqReG8ekLEVsTvvm28kCceJq1pHedwCjKn9FWx791Nawwi3XEZ1WzKZGsA1rQCV2",
  "key12": "4V5qaERyWyUnKuYg7ko5SVVQBtqKCfzxZ6jwDUJjjvhobKJz4ivtAEckmX2QVQ6KKGqzT193VEwbvGozW6tcdUoa",
  "key13": "44jdJ6ChbzCKAiE4TEei8sdpKhNY47pScuucWagfADHsvbgkUafALSzDxigXxdaBZoE7vv2xWz7y4bGVDDHr9TcN",
  "key14": "4nTpdYYaLAe5AjqZ2KazGxyVwjJsbsXeSAvhQxxqm8vkisUu8yPL2R2ZKnFZoGuxp5ADcpPkj1xqJiFWsujxBbHi",
  "key15": "XTqrWQcxBzd9Ume3JkL8DFBDBnWZsiBWJKmtdGft2pkMzhFdepjCa4YPYYL5Y2paXdUNUrHEkdqgsowcE89VhEg",
  "key16": "3NnAKbeqvLK16Qb6ct5QbYRJtsC2S7fJKwAnwuqNY1DdWMugYrmXUUBdiiiuzvn2WEgkMSeK6DXtihhMEdNzoLuR",
  "key17": "5vL1q6G9YS6kEUHHXKovQuJpfGMfW419w9qHqTXniv7TqiuWFFdCFffYTCQdKVCJhE65eUQwZ4eAxFoG5Wt6r9Cj",
  "key18": "oiqU8HkPXjQ3qMTEzav3inabiKuDG2Sa5WNoip2FjNVmxE7w5jpZGzahBGJsX6yhJmqbR4uPJAkdLCJ1uEtrc4G",
  "key19": "x8psxugBr1wCSqB1qAeYcMYaUZDGzC3f5q7GZinb4dPZ6bvynAcq6RMXKbWkEHTBC2wvUUwqQXwjZEF3FM2WNiv",
  "key20": "4rxbM4AjxNcJLwwPWncUwBco94Eqtv6eGgSasW8kiy9mfonPPJJ32DJjVpeHtcy6dhPe5Yrra4iNUTeB1RD8BEn6",
  "key21": "4pmWSG4SUPcoS7j3g9QCCTpsVMtYWMNLs8e5tgJDNi2LaAKqoNKWmhZPrU56ReEp7pxrJnLC8zqbPRS6mSeUhmLR",
  "key22": "2h1RqVf8kC9QDSDkEukLfXHYvHkLcjc89gnvkeH4faVLK14zPANiUUDpJQcGMrm1BqAWXmFEXdXBCkxdapjzKexR",
  "key23": "5L96ZDX1WqJPUoSccuXEzoHLhb4EH1jrbCZ3EF3Hgiv2BSRDPf5psE2koHjcd6LPtQVun9VHVVR8Pvb29Ba1j3g3",
  "key24": "5AQUvqbcDy3HQvLswJWfg2JCYjJ3fBNPJUctJGe8oXS7MLkNc3sZW9myAVA8mKYfMMbCX5Q8YZFaLRHmJJzwpGqw",
  "key25": "2pWd7QaeAf2Zfiergd1fiEYw6W125uAKCydT6xePV8YQG5A16zkpkNBoq9BRRyvvkUa2aNDhxk7Dgis33p9zgUti",
  "key26": "2TwyxRBBchmm3WSRxtcjCBiGTZxyuku8jyUGG8VcENpMv27DYJbx7fSkXY88vFvAmQ16t4bMnYL2z163fjC48sGo",
  "key27": "5VzuzJJWaaTLfeywQ4aLeYtxgwCdf8LT8UikM2fuoYTjS3kBUR9sbWWZQ1zpFGQQuYLZUAxYesrw6Cg5s5fzpdkB",
  "key28": "2h6Kq89F1zvwLb9uBDm3aui3iRauFAVXeePSaGWkUQ7mzD8MY1ZkHQ34rUSbMCWBHLy5yigCymEJdsu2sSMKiDr7",
  "key29": "7wpfGoMAunb3pcUB3T9PonYpaeqcnZofwLruChy3tDiP75anMWiNvyBHBwwT7Jm9PfUQ1aadxkPs4pt41MGubbu",
  "key30": "5prd9EHLBzFM5ZjPgt9oGqfzo1QGKLEQCiDtLs67JCu6rGjpFwQiojdf27AAmDLeeGpuUKnSLAteTyoSgXrrxrwh",
  "key31": "5RBRbiLFaCTZiueNzRgw2JZ4oHbGT3p9GmtbxyDxMCSYxugGG4c6GrjcBbrhYPL9zpAKgXjgwKGCfVsXSukqZtyz",
  "key32": "5jmmg5HSjwjRxRYTQP9s1myB5kLGTuxFjn2wQuAZELhVetbGQRJsryFC4b8zBJQkY5VXD39vwAuohamNR6q1TVav",
  "key33": "4BSqQBdp5pbZLEPVkZtTjbC6DLtZdPdd6TufshG2EcKbUAXgeX5eKssZc2tJEdr5LMDmudTNUdJkkkbPiUPt1dHq",
  "key34": "eamhnGMC5iv6x29DFA7HJ3j9ReyhzrExjVqB1uok7XPbVLtKUdNLBQWhGTgEzPpo25LRddWtQTtjPWQqj7ZLhPv",
  "key35": "21AB52UKacH9yWa2NLzyfqXaLg7pHP8t7G2AmwyQwBo3bFUFcBr8MtLYqKAuEPGAxP1HTE7JVYuGVndcvPBVBJXN",
  "key36": "2VYJgrefLXY4Z1XFkbnWA8d94YC6zD2Bnr7krsFP5YL8UnkCcMBVTJedpJ21JHL1tf2o2xb6qDHAnFwhhqVNAsTs",
  "key37": "4CprKkGNfRiPzpfnAc9vcsHABo2NBLs132qmtbXVesDgGRvtrB6n5ADE7wK9TBHPwbfU464LgFD73KpSx8cC3bLx",
  "key38": "2bwqZ5owQekyefSykbfm3VhYtHCGwmon7GWnYgCET96jrgzjs3gmje3kKL28xyqXRTpAWuszptHV1AU2cihTuGd8",
  "key39": "gGHxiFddbzUPnyQSe1UhGAQbj9DZ2Xg47yzoKHbfEUfLU7h8joYScejGRGcmPSTKb1Vhjzk3mtv4AsLt3NJNXxj",
  "key40": "jpfPXjYUaekpJ6xaeJKswWcHpcKmNZ8sNpw6K4vHfs4CFgUhJuicS9UCdzd5frvpeSs12kztgMf4m73HsQSCoh3",
  "key41": "2Q8pUhu792B34GcECjqJeKTTGvQ9qsVzHHtphWsUPzyuCDZRDuVmzRi1eHnVTXPUxYo7SqXzG9L94PTPEPaXLiMs",
  "key42": "4hXCfNBvci2Q7RoZfTZxSKB3ecaGSDmDyDpKthPS6Fxktwgx52ZeV9SPsNaGptk6LnARcET4JPQuZKRB16sYsGtW",
  "key43": "2ogxARoFKiNqKQjgZfjp9wLSxxUmUUPoLSL3MkpGxaMRmz9g9uvG4rRF4hZvFcKztcKrfJe5YfzX2TU6Wbi2cYbM"
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
