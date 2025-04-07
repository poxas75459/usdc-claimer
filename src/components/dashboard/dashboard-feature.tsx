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
    "4iJhU5jEVMYqXDgUmRCUTCSF1xSWNspTgVsXxQzp8CHDsA26rgF1PUBCiBMjEPEDLdunaUQt3DU7pi8htowJJKey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhPAbkL5HbXNp6x4sRTTmx9xe1VJWLgkJEAfpLjbtWG9Uza2PPEFWK8rVvtVq3h7tpy25ycUzvLLPpnZZMDJxPE",
  "key1": "5H3VMmGiAECQbruccaRjJ9TP67KXziN64kXoMoXqUQANo8CQvfJi7wFUkm2Fz9jKzi7JzEzaijRY3beZhuxqEnEt",
  "key2": "4ksS2ARADVMirNbkSgSGjRejasrjFBhqRXUo3ubRwvW8Rs2Z7kSYmnpdvLXnX5CSrKSzLNMe9oCdsGak2sZGES3Q",
  "key3": "7Rk9iszGNzraaZZ7ZZo9KJn6gb4NgHt3abGm7Mgddz4tJFAZ68BemvSmCQd56nPQa2ZfHWhnjtu3PPhgy1XF2VL",
  "key4": "2dwqe4hd5XiUJFtRmgcWVJiiEBGheCj4hcSZ3k4EcFvknAyKNjmwCN4FUPKnBiLZ96xHouSM9xtLgd7oe6MRCLAG",
  "key5": "3aG157m9FUJazwmRemG1wgUK54LLyBWG2F4kz2JsE1rQfF5MX8UWUVMXAGderQzHBd8jdw1bfKWECBMDbFWmTu1V",
  "key6": "35Z6iK14XkhF9VTP9aSzDGQhkz1UjTeAbfHMzrdyQhMj6Tzj2RyMNDgioiQvuoJTgKZadsRgn8wgAU7BavwYrSTW",
  "key7": "2M5j9oNMk5qHoTUZky3y3MixjiGCCKcMFDMA3o2NFgRps4nX8Z7bBmYTuN895WkEgssJ45LKPuperPS1bEebXKck",
  "key8": "2EXH1kqrZatZECt87q1yo9AiEz4srrqRkBdry4ojAVzahmMiTMJ9hGiWU9nnRWw5ChA98gEZHsD2YWLsGvgZFj65",
  "key9": "91Ca3SPwRMzi3dh9drCuHdYkyfyghapH8YJimaLWxZYGMNGPb74z7RVpTgiEKohX916sFQC9FeTiLY2hyeUia21",
  "key10": "3qu7WUnvrbJ4putTa3KLFEinoVCcuMZJiVYjhx4J9giV5bf79dsfHLgpJNC8JSeYE5pPspZNE1e2Uyn9nTBCZnhX",
  "key11": "4wc1Sr28CSAuzCLuXq2xSao1USwVq2EpCES9oivMBg3WzUoDLVtWj1QYM6XBoWabrrDEuuBwR3HgGTFmuKyTkYXS",
  "key12": "kQLk9C4vsNvuL4293eHmxz95QNri59UNfvYspWyv2AzT1X6XeepZg8bis4HANBwvmGjKkVtBi6E6hXtraT4mL2Z",
  "key13": "3arP12wUCWBWvxjFtTcRMeXLJmr9ch5tHCCJYxkmJFJNPmtBYGxKhRxEbQWvhLg45ah8JvRrht69DqeQYeDnKT8V",
  "key14": "3NEy5BSRrmgn9TfVDebsnPevFYmm2JqcdHPgLc9UpYi6Pp73tCHzHFuNeVCi1oMHkhJW9tP5p6bM8HcMvZfZ9t9L",
  "key15": "2NWJEKMVvbkJdx22NM7WDro2qEiq7g734iaDc979kgftZyTv1spm2fhfMuxnNMwEuZBbn6rW7QMynmyyYGEDRMbQ",
  "key16": "4p3JmyGc8hWAZDiij9BFUM4dg1izU7Q21yV2MEWN1y3vGivHxJVAo8dBJ5f3ZYVyj3qZZ4EfoExZdZUj91gt5qVG",
  "key17": "4WdV66ShBNqcN9cF8rNWzrhzpKUB5JcT2r8WTEkQhx4wK3xw7k35pFTBUcsQXJBLTgzZo9ZeKE7kWGjkw4YQFVZ9",
  "key18": "2qMUth9HaNF3UD5m7o7kbXrNFyqqfvAymqsP1vJ3eMp7RPhC12oTbNc3nQTKeAmanwqJbx8wrYyGDq5YRbynAGDo",
  "key19": "495NrsUpppg4yxXMP7vHAKL3ZPghCfTLqKBr2EwnJNi45wzxnup1tjFSaBybLfVPjjjLDKPiVeDDwH8KySovc9ht",
  "key20": "3FPfi1gPTh1TihXJtvqK9gdsn6F8QQD8tLguWKqGx1FyKffhyhLRgF9xNgVsz9ya8tcUUmrmSrfwxQsmxfakNJi7",
  "key21": "3Hv4JKYUdudVoppNKtnpRaFm7e7xbLanhu6yGzJno8JPiM6pSdStoZcUpzxMECNFpQtUh1HNJQ51pnYNA7ZFe9Db",
  "key22": "XW2ApxxeJhoSfhZ3NiNkgAiJNszTxa3RbxpnV3TyxHKLuDVmJnqm4C1zgKNRTiHqz8Zvs9zwRYZaXFbNDwMsQdg",
  "key23": "4xixKYv8xSUiUj5hhEwAyf6EUumZmw1HpxPQF979Ep5VxUwVatV3PHqzCw2DXAbSgVNspaSE76U6vTj79G4i5Wtg",
  "key24": "4cU6VezJ3tpMZJTUCHrMRnho4yqz819ewRz2aeYbGqb642j89snL5iMuC6CjfpVrPXwJpMvs8bh1x4Zy1Rf1uMrW",
  "key25": "5vrSq2Hc1Teh6B2YxNXM3hGdBURXvCPD7TVq35NiG8LFdqGf73W2Voo3QVY7P2Z8Y9rfLsAf9EZKjsWKjSRery1k",
  "key26": "2MnQahBZVvuquJnUg8GQuwhHdnFdu9qzQfKvJQFvPLhZtKUthgJmH8uQhseeyPabmkxJynGqRtPHJ4ULEXVH5YQe",
  "key27": "2civq6TUpJHp4MoS6qR6bgpgZwopsLNhf1GDsukccgwhGLdf6bkfXyi4SjDcn3k6HDRBBSkB7G54ndqQgCdyoKiZ",
  "key28": "2K8nkkNPGqcpHnMqWpTEJuvPyu4DBepFggPJgAjFwKES3zoAuFaooG4WRHLt5VsaWgjPhw7bcHeWuCHqvtH712Cg",
  "key29": "JiWf3HnxXGNjZDuUozcryippNiQY22cMwh2C5Zw2HQnHZDsY4y6vt8URQH2oSqHw8UDZf8XxeE3cLEbcYoFHfa8",
  "key30": "513vvByXVhk5Kuk45m3FAK6yGikim4RJhUjQYNEbEWzeKamzxvzRdB69zYwjn7y159ADcPKSvyga3dZEMZkZGoSE",
  "key31": "67GhJaqDeDGUQQe56myGE3pCZi6X849GLbTmS9CtVAUMtaTQJVeuDiRFYaxMDrWmpsrRZf7EvbxLAF2obxqffFzn",
  "key32": "QvApCiZ9ajYGWJJK6w8YZo97hotPC8nLTtXYtP28c6ntzcyGVYDbu4Q3jaqvjBc9WufABT1YwPxamn6Z6spMCTq",
  "key33": "4iPJxU3nJLfUZoYXFAZwVJDRq3Fdz58G5fS6TWcdCWFU5Cc4i1VbFmPAaXHuiTstCgib4kUTj4ArGpMQFtc813GY"
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
