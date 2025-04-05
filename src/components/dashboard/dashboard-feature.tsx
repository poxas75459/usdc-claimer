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
    "2jK8LGptcTKq9n1T3b2MV1X9fWnaTvwdyujqoCAULKVdvRNQWFqTP1VqYTQPnhZzWT8KnWUfmmWQDrXGp35E9Eco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NLfZTzoz2yLu8A35TcLykB2VoFHUo1REvb7nSB6hVGVFGNTm3JNvEKgLTP9FiC2abeMJPFti5Vywi4U78tBFpUb",
  "key1": "5kZ4iz96LSUyY4qCw69Y95nK3D7AuRoxu5231Q3Jh2n7MyXwowmcgQbboXcpoGDTCRVCqvX8tPPgR84xtLudTK2Y",
  "key2": "PobZCgqWxHvCYrdYdm5PcrMWTZ4jBzRM5e11cX1un5V3qYUDt7iTxSHmmpksoh2XK2yXh1xc5ZierWLXUovJ927",
  "key3": "5tBCFRDY8n5hmtBDonMNmxpmE1AUG3mxQjXFZm47Vdgsy7bvnMcnaSTZbyyPQMcrm5RfWVRacz9mcYnr6WZZuX23",
  "key4": "3Nue4cFihKfcLzo6VjAsasmRmnQyXBDaz8zDdyyzKsyuP3zx2vLEsB4KBoHu7Pk7ryorHhMJfStMNjYnzbry7RPC",
  "key5": "4hDeECiSegjxRWvSU9YeeZoyBqQseuJjnCzkt6LM4s9gZcBxoj7u3CQQvpRycWF94xiAyzFEvoxEhGAs6Dyb12FM",
  "key6": "MTUcqMQkLFMiu1eBd9qiQrLHNY28qSqTeN8X9YVZZaAQGP1w4i98LdxLKvGjiuuFmT8x6S4GU4JqVJvCBg79esb",
  "key7": "5jJBCa7E6wNFfTTd8GDiJHRY97fLLYgUK4TVMYj6useB8kCrKMFnLa7Vd2ZhDWr115aWvegGhdYqSUNEfrNuzA72",
  "key8": "2yJgSKvn7PuVvGVXPhdjcoLAVV33PzxyA6aDv5KvVngwRiNdw6Y6WhGNuconGpjQkcXuubMmKWQYHVuAfupC28Hu",
  "key9": "3QQLXcz3vc3ZyccQ3QsTfLtFgpUTphKyBFcGPDXbKFMxUm51kWpobwtA4LmwiiujuRniqLaUkiMNJ2sTKi6r2288",
  "key10": "4VmPttkdYtNzLZ6YULZ2GJDQSPwtxHb7PjZFUFCkuxKFVEqwFXFX6YGad4eqR1p72RMk9iHyraN7ACECXVLnf7rG",
  "key11": "4KoneetuLY17v63TY6kep8Z96qXgDxdhqptmAWFfdxz5CdPbVrkRCRhXEq7KLUkdgXcP5KQFZJ3k6jTBRUjUoTPx",
  "key12": "4pe7LcyBbvQmEPHtRJgjsK6S7NSzpFwGWWX7VjRivvaVemEUziziRqnRfuRm74q9o1S6WXjEw9X1NJwipU5kGvUk",
  "key13": "2ALRhQFqKTfmr8p2D5mSRiyiqPeLZZ6s4J96PN5cocdTC7QwBCxSpZWkesSQxDXzshvqvCH6Jfv2m5KQhm39a1uE",
  "key14": "42tmuhQLF8fezaKxsYRCyQobXS6ZMqUQK7sMjg6ufN1J5AVzpTLZFnYtcFwa1FVTAn1ZscMu6zPYZwh1gouRSa5Q",
  "key15": "3ck3ckGUsLSLL4KZdFW6tyGte8te8yuZqFpqphY7yhqVc5aBbu46vtN1jXQWDycxCRQvC3Vxzh7J6mjjuehdMfx4",
  "key16": "57CTfoMjBAHJoPcuQL3yJ3hmcytPmGAjSKLnjo6fQoHVN4qqsRVkbUTxVGvKcahRDR92g6oJz7n4jUXpegwmkNUJ",
  "key17": "2LDnieTbxuBYmNzDHpeXe1em1Baai9nomiM9Zo8DPFUQzQa47apW4kXxGDGv88KrRwHqRc9JQoPe1iMznHi59Ad4",
  "key18": "3cGc4UYqRtG1JcL8kiTnpYzBS1oJJDpBy1QKNYGgsVpLio2byrB8jj81zFkS6zPNA5Kbbcxdpx9E79FBEJnhj41n",
  "key19": "4WZmy3nSJumQCJFtD77o6RxhckTDfpFae96YyJAGscpnpqL2avt3pyH4f4ireQsCwxcA3FP7UYwXA8MaiqKZEA7p",
  "key20": "5m7XpaXwzvRVVaW39vZRJpZdRRwjRJNWCPz9mzcqi1L9d5YViLvSU3E8ZnH3MughH46SgVuss4PVmRFBK1oy6oaZ",
  "key21": "61XRFvjzw9VSuhiakoSgiS2K4FtiCrDKjJExJVosdogYNNpxHxqMwjL5dykY9FMQoF1retfYNs6okhvGQNcccMru",
  "key22": "kCoMUFN9k3X7VH61Wf248iRZjvXkPrgUthKGdWkNn8KEvYBQ2nCyTcqwiF2NseAzfaoK7DowdjuibZPsksHonBa",
  "key23": "2tBgfzYKVjoTKWH7RxaAKYVcniRr1NHFs6rFosxgH3BWkoqn6syg1vEZW4yTp3kzp76KutzhgeB9NMwAU5Szp3C2",
  "key24": "2K3tXhqZdDANWcWVnvRQmeLXTDiEFX7RgSZbzJ8TjcSouBEHhvoAfDvELEPHWU2zuBFDE9YJaBUjEo2iYkjkEu8T",
  "key25": "cf6BsgWkDAdagBWedrQ7NjGKK3geMbv96emNwx1WjgovXUfs1wU66BmThDnmP1fuZHEQe8Syd1zvW8zV2y3J39v",
  "key26": "2m6ynDjDiZSzMZFNnNATHWnoBTvQddK9dvMMzEXoVzWiF8rVVkmRTbiQaSVnrwFpRPZD4NpkTTsB1Pc7CjWwiKXw",
  "key27": "3x4opvx1KVKJN9V3p2VDD21R5nFVtXuYnsZY3U9RkzfeWSGF3r7ci1iLKWiGWuAxjmpqwaKb3ffkbReAuxCBQp1W",
  "key28": "2c6Bux9hHK5asbCSKtSjAgfZ2XkHhcgSxePHaJJQ61Pt4j2cXESaefEU43poajt77FpjW4JtKjyG6Nvit5PSaobs",
  "key29": "4WzqhGSYbVnaX79zS38eUBDYURLBhCU2znF6RT6oGE7zTzRDc1UN5KUuXoA4YhT99Uw9feYjsgGegpc1d4aNA4SX",
  "key30": "472KEmnceSf8eQSMYa9QFo4rKZ41cCsePXZ6UmSKTGT8qJAatdb4VNvnBFo8WZNntuu328Cax9A48Zng3MMAkGms",
  "key31": "4DeoRvSwj1fgw998Ry3gaNkqnS7LHPxD7WY9obSvpdGn83SKNqxcLqHVQr8qysBy1TQtiEUwuLzcF2GWwkBkWHjh",
  "key32": "3wnGp4Ru5LQJGW5AcHDCLxoc1WcBW23bDz7uS5KH5d9SBETEzHKwVrYbMcLpWQwWZ72uvgTKCVSCwUJ6aGmAjD4d",
  "key33": "447nLHgREJkNsv4B4FD2taftoYjDctF1p3KnA1Ls4A2k6eaiWniwfz8mF6U3kJ7kWZ5uknp63esWtqMPe3kaxG9S",
  "key34": "3hYPAqcLAJAzkQxQGeGNPxVwuan5ZD2s5nYkj7FZxTwvFhxa5xJCUeVnBRaAa4myC7b74asmjKmdJN24Sw3XYXQt",
  "key35": "5r7JdZufaLDkwpcLTssQmRRZbdAXRfLiFWkj4zSePXmmqmUNTXkFr1FhyWmzNPiEsrSKxhPutXRWeyNeyUroEXNz",
  "key36": "64kR5nQh1bHCsCRzsXypSAZWQ1dFdqLaxEDt8DzLJs53RaP3kHu42ZbHwuRjuWHs6Vs1EZq4qF4Y3Ryz2sEJ8gZi",
  "key37": "3BtXDhwULKKKYh3VwqW2ZZSYS9H3a4iA7FCvg99xT5z7TQCV4ouL44htdDiREKKo5M9K8bnrFNbE3MYyeV1ittbm",
  "key38": "5ibff8A9BKWNXPFpVjswiBF1xmqUeGHDGPacqdnUZrd52Wgekc2DXe4DWdETRkAMtcGWYpPnbiZj8KtEBmTfTM2X",
  "key39": "3afUm72NorwDRLBJiLvBeXuwe4TJHk7zXECRGrBtw8zk3VNME4EKWQmcfc7Mh4NfWTE1vdB1q4wc7zeb9RmeH7QN"
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
