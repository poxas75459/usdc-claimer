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
    "GeABkrefKK1gUuSjnJqpuwpC2pTHGErZAtBLzuVxWQC9FtWc92K4NDGcFCwhVoHEMSbcfdUBsicf6jg2GHi8kVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwZVK3zUu85orNVVDXXjyvqDQYwG1Vrhum9o4EhWV6teurrGCGSGR5gBs8wHpuwE8y4UnsvK5PPyKGtDg1iwfvd",
  "key1": "4BS6GwstiZKBGNnFPwhGahATZYnch1MDy8Py5bzL68K4aAB9oRjK9TsdYQQEiuZAp1WgB27HAEWf322tkjEvxG3E",
  "key2": "wRyTw6BrxkrsYrCe24Z7BDGBpU3aagraKLeK22XCgxwdxsUQep1E8yBP6xqMXBmXwWyQijeRZmBQ7wnhG5PZZG5",
  "key3": "Pk5aDsgxKXCCPdHbHbUEcqpHpWsikks3cePgQXNvQsvq5iY2Q2ufAEkCvWsRsGNk9B2wdAU63qvRDJvnHYmxFsD",
  "key4": "3woZowxhz4j3qzdr6SQyYYFWRakh1bqTxiCyaGiarSEwawwNiroXGDUF8KpvEUbe8tJyrKr695X2MpxNV1Zdf7sa",
  "key5": "5UJZtvvksr7QckmPD2E8YgTSiAP3TXYPZAnxgjXRMXPXahkxc67g3U8deQhcKrogbD1Cx3qxo2HjDsaeDjDoNHye",
  "key6": "3F8JJL4Rb1hhFio7xepc1di2qh3Yuj2hFZWp3UnjvrsGhwmkSDNgbP5bq2vBNgFRDThV4tsi8yNbpjGo8V9H6145",
  "key7": "2NgYzoVheSDYhHwsppzwxjVyF878r8FTXV6j7K8W5BAp8nyWmUC88z3J58daf42595tDRWK8s1hWYHEUJswzwnfb",
  "key8": "FJCLNUTvLAKZaAFb9kwS7vnfwt4QyA5tg6uJaotkQikYUoC3opoBCLz1cJpo2s47c1UayvxEbCWQTH3ARPoKUuA",
  "key9": "65mL2nMiAAXaPTUWfxx3J8Xe7rWTGWzecD8DsjVJrA7huMydEjHAstfJLxDDSKamqJ8bW1Ca3thyhJGY4KRNBXmo",
  "key10": "5tkwtrAXipsGwrQMMxN8FGTPj9PkRK6Rta7t9gJupRJW5eR2zR2gXSNiBzNVqeo9cek6qz8ABgcFA6uKbDnRJFKF",
  "key11": "3krMPuKz7SV7S6N9a2LfV7omvYP9g6bfuFBbC431eimcaZSW6zeAhxgJgoMCCsQPqPT31myToRTTWRFBdUMW4BSv",
  "key12": "3nXi7YfpDsy3y9G6ArCj35KS4NtvHuM5FFimkT2vySJrJh7PxuZMKGxGhesbULn8TyTqrtdqgufL9rmeXZkwPb5H",
  "key13": "2fG3hx9pfWtqyBnqmgfmaX7sKuGA5dDfZdjxQYbR7ozD1BrLNRTMnpHAcUBb2CTx4tGFtfCcSX16T1KBjS6KR6De",
  "key14": "3qNPhu7CdybNJbqZuaJRg47JF3pXxB92Fhz73T1cBopzzBFaQq4JPmLddq8w2diydJgHtvsyuAzGNWjG4nPKnp6F",
  "key15": "63nrad3ncKzXQRMuLMksmarKDYEUAoy4LRtEMuMtxtjgTUA3Ln6psdCTesgs9wkbs46r4ChNdorpumxxaXxBNjv3",
  "key16": "3iLaSdUQqvBsX3VHFrwuUAMpjmnWiKytMkgVSJT3MxL5wjFA7v1w7ubVuZBrsD6QF2aVnAtNsqkP1BhG9HobKaP",
  "key17": "4mzd76up4Uq3LWjPrbt1MzDih1PSHK4Sk4cmfHcFNcrYEvZukuyMsejUYv5StBvZjNP6md23zTDzMjMtJ7Pt63Us",
  "key18": "29MEjfEfqDGeQYp9to9KQjX68ac396Rj7PwWxFJQDFzhZccP3jQsxa5rWcre4SMWyx8AM6D3C29G8dEVEgrEi9bK",
  "key19": "5v8sbnc6zTtFmGcFu89jyVqMtMJ7mwHszij6X7kiYboSbJd8GX8VDmAUt2uAiwGev5mnGAiS4BUkftjPr1WRWdJE",
  "key20": "2wfmtrCVoKMzpAPcPzPJHDmqTRPfT9FCeCm3cmEcdPuKGpGf6xPsznLZcPVLTsyYKuhn6cK54VScgmYPrGtSr7Av",
  "key21": "4U7eR9zEttZBimpZsfp2AZTCV32k8KtszrGjBZ5Y6qau1EuK9ttKbr1ZmCRKHdgVr5FMhAQmKriD5Y45zndvPHVL",
  "key22": "3jrEVxczJkRqCnY1WVsb889FjKhHwfTNNGhfLxoYx2GqnRA2KGfX1ZMtAtNJcLTY242qEteu6zS9QiRuHXSKGx72",
  "key23": "3TyU3Qckfz2D6hZBaLXJYdkFG1aXAxtKXjFyefTQJ2gdjSSEmRd1ToANfjMYuJfmeHAeCRUp92YrUeaEVwXgHYLE",
  "key24": "DL6M4f4MvYqqi9w5E4ybymKeoeoFg1dR4JWbrMyHBBztRqFwmJ3Z67xGNfph8LWDAmzAuSt97rrxxkNwe8iht8m",
  "key25": "3RtPajJgfrHVnW4epo6TevvvPRGsVYWfJKDgmJBGq5tJczWisKDbzg3pKoyYfXUhHsxL3gGCqNMoP9d4Sdr49zo4",
  "key26": "2spMVa9A6ZpwVEbrhMJteq532b87bTxPqFyyKeuX9NxfegjSCqqKhsRhf1dftN9JxvYSAVLZ2aJ5n7SxQUD7PYJe",
  "key27": "3wj2eKAdBNqPBtcV3Db71Esgvfs6MCXtsy38xruLLwU9HM68pdCVLRSonwme46vMd1E14K1xMEpcVEBPgNi2i7c9",
  "key28": "3TyJpDZMHuQho2sJULCSjfGzpFyRb3szTwtgBfDgUSwH5wMkVvnuZf8cmfS6orUNgzbvnkMHRYaitspGkBCFe8iG",
  "key29": "3PkHizBrkUy2PBQVxSVVnaBdtmUgHXVoMfqV2TTWkTZGmEwfYpjyQ4QLoEYQxstUcoaN1ooQD4d6VBPbCFb5XLC",
  "key30": "3MuBz7hgJUXY16a6BzHz4dBBut5HN9stBzd1mn6JXjeYAs11vNN1mHHRmvF4xRBQEAK9HvqL5rcbdztG39xCknp1",
  "key31": "2GKpjaLbASuzCT7Qx6HJRLTe2fp6pnS66eCnwGNM3F6vdfQ5y9Aa54pJMiWrohEZPLQDzxcbecNXCn3hLqVhVDXi",
  "key32": "Kn9NtxqaweznbW9hrWTcqfpaFv6fx3itS4qGBsifjuLcz36ozt1eApVporUdHE6hMsqPivrLhAmc5L9EWXWi78w",
  "key33": "5BJzDJjFZUMPJ682y7kj6ZzXkBmyB11LzN8UR1ozahJmEjhnSey6jbkL5sD4Rg8GpUM7MWnMzDDT6SijeVRAWxpA",
  "key34": "4Z2Q2SUfw4ToAcAjHLQab2tqWJYXxNJNhWdQoQcqPhbGMgP1zWRXj8bAhfqL8mBZfsPMoHvvyXYLsAfqyHSUmBRg",
  "key35": "KuhqUZ5M4AfguYaKLXob6J8uMkKEMyj7j1ENtXBDGhoB245Ns4fmV7WWLKuuoNWwkEJyfkrGD39rLWogooKVZdY",
  "key36": "26fT8DZwW9kAa3yXAdyzBRYKMM9bdPHnPJj47h9xpVrX1XDkzvHQ95oEhuLv6ZkAm5Az1i4ntAMPZActg8tPCxmM",
  "key37": "2r3dWh5czw6bdZtjTpeebTJXkNkzMXyVCajmBQpkCZmX28WdmV57t7PFK7ucq455TQ8Bhj7C68q14WQJ4SadswM5",
  "key38": "4pRnRrFiDjmquT5cdXu1qe5wqb8b99kfAWRS1hjknvqSHKTfxqqhBXSantfmTpJxuobnU9MxgJUyrDiRbGcHHPcP",
  "key39": "3HeJD6sXStQZzE2Qo1zTLaxvgUbGbZA32T4KGrAkX8baK5phmXdj7rctJ7H8cg3HLsrMvMg2dSBfnPbWXeauK4Lz",
  "key40": "5beGrEnE11jy7Jcs6NagvxUAZkbozcLpki9pGGvYroB8r6ZWfNNa4wPZ4YbdZPSiDY3pd8TmTFKWR4JTmm7DELXb",
  "key41": "5eam4onaDZEVxEcNhKqJkfZ1auZXK4hLk1gMetx2oUwjKp2PhJ1Z5GVjYEWpfAqz9qbzcfWMVVknbncQ9PzCDkNw",
  "key42": "4x91k72NJJkHMV9JP2zNymLRN7QMy5vQexpmCoGPYyS6LctCpD4TLMLscCutigurm4RHG3JDYnHHhf21M2VrA9sj",
  "key43": "2LTrWfCrfPfv7eCeSQ4niFy9aAQz5Ws3gyCStp5BiK1oQ4okPcUACMK8HQBUWHa7JMnmfudzGqDVGVM6xiW96PQW",
  "key44": "5wrryhE3L52wFPywR2Ph2rJ8uoEgzqy7JPKuCiq79ZGE6wdNJSXWdjhkyVhbJo7GkssNYzeaCV49XumAKNXQuuVs",
  "key45": "2fndeVEfB6tukifKNvd3s89faSGa8o82HmEueAHUyAB5fhno75TRbvdbTJDXjNkNuK59xi9uYEr3x5q6mGJ9rB7q",
  "key46": "53STA96ovkBwqZVMZP9wccVDDqp4QH9zpgrXgtnNuEF5fpky29sajykx8TqVLYdiUoeyhovoZp6Ez8SuxW2Z7fhx",
  "key47": "LQcePz4oH7GtEuUoBg31uUQRbL2E3zZc75EaPgtwVNqW1ewZs3bmAWQY1J8hDcgapp6XAbSuPympfjE4GySzcSY",
  "key48": "2oTtZbKBAp6DWTrJTaE1KHihup6pEsUqTyW5vKMMaT4cjcSSGjtA8or5z4a1Ki9CznZUsXjVXwrTFbE7krjn1Fm",
  "key49": "57W2bDvCRdY8WdNKxBZBk3X2FmiNzQeaxcKr4WCJVNMfGFJJ5pdbnvriByV4RmQm7i2ZN344M4xqaw12JcznRuzB"
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
