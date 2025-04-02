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
    "44MyASb5Ao8QChkcLnCYq9ytUtZfyjPwxWqT6BohrCcnrAbZLtEsNPQsCqedzQLmR9upv4eCwQsLYuTfrc1gKXdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47VHFRAz3trzbFQzMZPim41SVuFmQekZ17pGprNxdKnC1BTFR2bRr5F95dQF6Zbi9gdT87ysU4nGy32VxvdYNmD6",
  "key1": "wm5eaPF8TRUXCgSArZyQv7kHJffoasjt86iPXj2rCa4aj1KcZsz8rE6AsDBu225EhMTUZTSW2Fps6EvuivNsQQE",
  "key2": "KU9ppEiCQLcej3djh3VzDRwdWp9MyzKt9Fdjupm9wmj7ECFJgcokWYY2gdmfYpB3juQYYXXkAdVboW41ViwVavb",
  "key3": "2UuFQcwxQuaktbsfupioJGwhMZVMihFWJZzsftC2oBg6v1BJnqzFCiGojDhf4NQwQfZaT8a5qxvMbHFwx5b7biiZ",
  "key4": "ADzVqWmxFRZLxYq1Ku3EfrhWmZhzdauRY4FEsQmyejxiAxJJkcVUyMQg3v7TkYNnPcYyC7m4kbUnFfpSm4dgXVk",
  "key5": "2Xu44iCekECdusB9ErHn8Skvr18qGsBHR56wS37mmdYQdg9r9oWYnNMhByLDCr1FNxrxKZvRuZk6hhPVgWxAJFiF",
  "key6": "4xXVrWkU3BpJLY52bHXuRYZXoxe5DTjXp7ss7CL5FZRDHm3pArL7wi2849ZSLyiAcEk91wrr2RX3oxGX9fiLXJyj",
  "key7": "QCK4JHeYUA3o2w7F3QFt8TFVCM8Cq5bYrDiEEyfTFYPW6Xim2YYP9nLqvkABuHnLB1Jyoh8WL82k38ZStSsetLA",
  "key8": "4hz97buutfXR31yA4kMPQ41rymdQpf2J7HqBQvnD8SrXS7RATGNNz2ujfznakv3YiSTR4zK6C3EmC9ct8faA9bcz",
  "key9": "47kWRJVrLLAkQoECK8R92yFu6hADrxFadqVEskoHXtLgYN5enDF2WXy5SFkLhyFUMdMUEHZ8i8NpQyQFLxYvnMcT",
  "key10": "5kiNnje97uNJHBL6KSqfRT5YMMdrUc7LFYSpihc9erPXVPgrw3NadfFBuFx3i7kaaGXKaunWA3g41xtVb28kX7a8",
  "key11": "4We3zzuMLBSNYzBJatRuq4kBi2fnRRDa1vxG5b82VjqYqoujsQLkjbzBd7U9XHXyHVjeaSmjPVaUPbjuoWAFWCYt",
  "key12": "5ZNWj7PCMR9BSXHuvyhfzJutC8k6oc3Y1Z1HDvVGgBpRLooo4B5VJUb1FagiH4hCP4Uwey6S4gi6JNcU1ymoXG9i",
  "key13": "4rS7ctGKRm2nMA7vHMYrcR4uut8TmoYcjFQ4kVA1FC15UhVgDo3AKrWqpT6ziWWpN22s2KjTuKPpsM3AWwjiQbtE",
  "key14": "3u62GSnB7jP53XdR14T7EQev3pB6YLDyeaCgvfF3a6mSW54CTDeJTd7xsHQfuDcQc6zKSoRCmw8awhSox95H8Gqa",
  "key15": "32wy9GnEoBRkHFvUyLgstPz5hGoZxi1qAr8obgGLQEZtvgPsQqiSHqbKzS79vB3KpyCScRWCSyE1yu4iBTNgaikE",
  "key16": "5ATwRc51t3se7Ynry73uR6yFhyRZQ9AhM2mCfWt3X5Kjsf9dJ4n1qFeBFhiMpPTVG4FtujnPPStD2BGdZ6QZFVPa",
  "key17": "2RdK3N1TF3q81Sx3kKkVVB7QwxjpkWsmyiTytSRfydYfdcHMawuXK82KodP83afUBDuiFUtZ3omYgcJMM3LeVpHH",
  "key18": "fb96G5UDSXXDJxknsSKyhS6M8ZLLPK26VzpXMrXx8WytHLWSh7Ktgjn1Wz1gqMFtRNWQ3YfKxsGHQKdaXPP9n2u",
  "key19": "2c9D5cCy1pdmWsqG6tFfc8nVWfoTfyvC573ubSFmkFWQnbA9KzLriGy9qkquqssNXVK7byTy6jQ1veSNH6Tp6qQa",
  "key20": "2SfFwWkVcyaAGc5nLDxhRenuAsmQhFCZxY7yLBoLFaEJPnpyQsoWJ59BxeGBBzS815rSmPKrKAaeRhS2gNN29CaF",
  "key21": "5HvKUCBy4ubBWprGSy56HCj2GQiL6jxyPrnnBBN92vqZPkCQDeyHwfdbTyeobmFNmKQRfoU3aNHWskVx7CWSWsMu",
  "key22": "5EgMQVJsXxKx96dFnLeJ5eznDY8ZvjmeRdsxiM9joiJc6CWWVmysJbEDqbCFUTQ4Tmi7XSXrCHFA5TUkyhzNJj4E",
  "key23": "oo8YYr4NKJPHKAbUYEpYzqrTn5ikKREZMAcvTC87cYPsAoCfeaj32qMuup1UbUrDYs2ocFQHtTMHw8jJT2U9Kvw",
  "key24": "4thXELGuuj4V7SZ3EGD7TDXrwyqMNAJ1bNYmnZTNtpcS4frAprsxNTioiR6KWo3Exa6L8V8LFEp9Dz6MVx638ZRz",
  "key25": "1s8yqhbUWG7cUjVFJoH4U76qerU9Gr1wdCR8GbFiSwCiW5Bq9i6gwFMocW6pW2iSyvfCKonZoTQYxsC4CW5ufXn"
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
