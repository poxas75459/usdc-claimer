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
    "4WsAfjhtPgkSFkyvTR8XfFNxYxDAmH2Nwke5xHTf8QgFZffJ9ALxf8jHSDhNJcB2HmtNKvRTM34UhCnjqh8Z7VD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49VCNkZNdSDmudb1Zdjj95igEA4bqAV9WRXjKrqEm18HGFWijnKqXJE4Ht5ToCCQCnKohmuf7JnYgd8GgsZCKzPM",
  "key1": "4dDTd4TzUQH3Lgpg2oTVMCCuBSxJSaBQFPkRKvUduiHwuyCocrNcbX6EG8ySQxSdwVYzcCcXiciuXKMrWyYLk4jU",
  "key2": "NTh5jjKAYDKEZJ5zzwUtG8vkwTzq9BCoWZPXdS6hNLrg8RCnC8AZPekVd2WPPX6RAY5Rty2oZVQUREDCWagzBb4",
  "key3": "HzgKxzTrmHxFU7HGj76aL3uwYykMwowFQMetLN3LwcnBPPuR1zMPxesxnu2HcKiLw8aE1mRRTvJnVeCHv2BS9Xz",
  "key4": "2tpSnSSNccCAwQernEJz2NsN97b4h2vZoTv4kebUy6jwUhwh4mKgn1zqRp61pTFtBcMjKqq34LxEvVN9i1JcBN1T",
  "key5": "5Nvo83TjNZ4x77s7pTu9RoErBoFCaoPqcexW4U7aZHXkAEEXPM8Yec8n7cxVtPY6AKtMhdme3fSLwYaJzBbECVvU",
  "key6": "4mhg9oPLrqvbF67TuT5xqn1BzH1agpbCpAHqgUoMQXP1934aZvMQjHbvg8sLQwNFw9sWLZwbM2zpA7rG6WWPAe5C",
  "key7": "4AWXksf4yS1Dn8grUrsN3bkvEdNEjhqesS9zbVF3eEDhJwCLHAvdJEtzvZ7z1TrSPFQ9xMC7CWh7iZBeJSnrUCa9",
  "key8": "5k54fy9Uz7CWMWmviC1Xs8d8GonxNZVuMt56FvzWrBUuCUNPJdigLbAjk3irMggWsd2geoVT7XPXSV4UWHXMvBzz",
  "key9": "66ZYFjBXtponWydHQwshaiEqFxu9G4SmsmXf2e246f5etfnat3NT6VJ5ZtMmnav9d8JxPR4XFjEdSHkhYdXFv5Ty",
  "key10": "4hZvqqCNWrNfdjhkydLcf66mrEf5jTtPaYoujDvCoi4jcjHDfoepTC16aMMwndBYJHAnMYhaSLcUqsAgm7pKwcCa",
  "key11": "MHGFJ3BSJtKWwXpoXj3ZqboTSf4afHPLqVhkbEJx6FWyCyNUgXpvRXNBzGVmrZATgQwVkG7ujDY5Xgn7Ed4osAU",
  "key12": "4DGFJspUStfv7dQ6QNbhdkJneBnVoAxty2rhQBFuZWbQPQCTzgfGfd3EzYHG2zHGh761RTfHBorFwDWkvnx1zxHe",
  "key13": "5vx97sN87RreJkuwtgENiHqEbNcLj35tMLeK1TmiYBnsAbHTZvFjE69sTF6Yx8HHESQKjURBFuY13w7qDZNMJKut",
  "key14": "M82F5RF84McGW346J7MmGJdBcZyquLJt7Gbprm5gnUu5PuMSnyVFtsQ1Q4i4AL3qZGx49An6kyMYjG1o5xQLxSm",
  "key15": "2UkKg2ufX62NrHjNJVmT5tDu9gJbdCH5fZv8Husx88TXUpJxPwEUZzgX5eEELhrT37U1ZeUNRMWfvDJ3BZwRszSq",
  "key16": "44g75op1BtgQY1eTXuCigD1FjjtUGptxTE4UdkSgRYmfxzpbo7vv41G3NaPbQo3uzsCTvyg4D4rwQUCTZTjqF4ou",
  "key17": "67Uo1CYiDZaNBtCLt6T2UTYVJtJ5UyDqyb6wVNPNpTgycLE6US5R9YW2FMh9kJ5Mpca6XAvgMz6LeAXijVVEV6Dm",
  "key18": "2JyArsiE9PWzDWBt9QFo3GSWRKw6LTZH1QDBU6oGeWtdvPzWjJZLLocc9Z2GGkk2LNYu4Y3gWjQvggz7cD9vczoD",
  "key19": "3PtXG33yvYhzfK7EMK4eGtCaUiqSoqHjHMDx9HRBADwbnUXrpo9QdJ3tTw2G7ZiYgzrurxM2tRwYk4Dhnh8pRQZk",
  "key20": "4VdGryykMxMsj7Q8HxEqyt6fD74HL6hAY3QrUnwFP6c1kDfu7Z4eJ7XJDCkj3aKtYLPh3VssULpjRtBn8tbeEAoi",
  "key21": "33d73awJDkSWEsSsM8HnrQNm2yq84qqJGFt6ohbC65aWabV5AYPGbf2wnsFCThDgWhcNi85ZWyxjmBKFXzddQ9jL",
  "key22": "3YMkqH1jcbPGhf8kA3TDCxZvMxgzTyb1kCyMxuq2yWH2qNQZCJnxDEHRMeESXQ56rVnpRUagWU6W78fcvm9BNbd4",
  "key23": "5zzMWtZE3YPVjLLBUNsDTvtfkdYiKcuiZnsbdfUpY6k7FsPe5cDnukfiV5KN2Vfd6LoqdVWyuKVbhygVgP2fizD5",
  "key24": "4XeYvKs4ostJqL1Bu7yE2yijWwXgrBPM6pbaXNmYfYQvRJsEz7KDU7tPgGaY8THWFaaGA5WZSa791UVERS1MWDiD",
  "key25": "2xhbnMGbXiipVY8mG6m5dNU7tQba2VxT6B8Jnd9utcZ53FUujAcxnjBv2jD87CTe1RshvP5UyzPSjgQdFiEvFoaa",
  "key26": "3738t84fGFidcnjB9CjavdeTF7GLZg9uGZ3X8m1aZYCrZr6Qe7GH3SBLZAz4WKJjsGfZ7tHmNbQBAH2R2s8oqC8L",
  "key27": "5qQyLtQfzV18sgyk5o7Tn97tagkEqvmNTTDKWRazo98TVatmwMvpq4i7LptS2N5eUAP6xMExknEgibrJ9wHuJsWi",
  "key28": "55EWTqe67Hrq3hLpEumiZBwHAfs99LDBNHHBSrgX9zZq1nExSTzGKzgbukz3eUsA5mPFBFyP7ATTGcBNzYwym48Q",
  "key29": "51GJRutuBq6aJJ4wM9XsxhoZzrdSbBk2rUckcqgDFhyQDLH4H3iFoQavoWPoCk64sVuBVQb2XYcpTyHWaGgvx3Wv",
  "key30": "4TYVRHmdevxJ6d3qTipHvJRm6Scn5j4Doz9pxc9KnC1sjsbYx7ZsHzwysuJZsZZWbqJGFQMUvxrDRx4BnTLnspzD",
  "key31": "Y8P8Ry6ijXDyp9Bcrci1LLhzzxRxjfA94CChUdMEwUuA3brTWWwuq9TbTD7iTBFh7XTwwsFUonutPxjnp5AFdqJ",
  "key32": "4RVR2TARSnNA9RtJbnFu5odjEZZFbQDzuzA6GZQCNCm8cKNTYqwGXAME6rkJgguSj84yxBS96ogzhQva8HeXvR62",
  "key33": "5W22jQeTxzme6q3bjnhsM4yf4DjtU3VV6qwUKNMSjeBFvSG9NMECQWbbvrpmcK1kQdK1iAp7CFYF9LFMwEpnUzUg",
  "key34": "2qhrzSsjowUk2Fi3Ku5QeAyzLrYLhnYs9Hjqhp9ks2gomXB8bycndLKDTzvT9532zT4XTCetBji4K7VgtJiAJHDh",
  "key35": "Ek2QsM49W8z9TPMLuVCjsCpGTvEXtQLmBDoLpab9ouQ8pPFZZ9oDZ2d7tE5dvqkpRFexbZVR2AXQ6Rdq7pvvHXK",
  "key36": "3dgZ8Kf4jiYdBgydhnoisquq1xbV2d9ahHqa5Kz14yCgakdDNk997ApAqAuN81terZPGgEPpzyvmFUcczg1dEgcA",
  "key37": "62DhuwzPVHnRhSiBRmkd4jz6qJFe3GFpyRB2hbhZRZs7DxSwQUGvBkXco9LdQvM6bo1zuLFarAqyonkWoHwByaFo",
  "key38": "2Qf3fJm1SBZLteMppuM8EMCvB5pAcDeEkMFSccCQeP1cJYJCviCnYt9jHx8jpWtGcCPuQu5yDXYA5udE7iPn6DhM",
  "key39": "3s5diaQxqmGXRBdwHUYEpRFSpxRLtmUHUjLcab75aLmowaKCXEeN9zQeqSD75jww1TYHWWCU5Y5tQDo6NoKpvpfE",
  "key40": "3Cciuen79eBtJG5v3n74R6usFyStgWVKQ2Fpx3pJqj43YgMtE5hER89BiPteZBxCGpggiNbGKRjLJSrvzRcfAG51",
  "key41": "3yXo2najAgHkfTtfu8Q99za6nJS4Go3bSJKzXA5ZzjEEdq6rhDKc2K42TQ5ox97iX56YazZVy8RUw195pA3qfSCH",
  "key42": "UPrL9nqmTuXEgdrMf5kG8VYgLP5M3TMx2KPfRnJ7NtLAUkcTeHvBN8xvx5qfbjVwFfL9uwQnmz4xv69KaCTrpfs",
  "key43": "366k3wjTV4hq9YEE98L41CzoNYWVZ5JQsjupHBxk4CdNW8SdCiHiJyfxc7ZJHSREYx5EFTtJSiayRLAMMJLdgt1U"
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
