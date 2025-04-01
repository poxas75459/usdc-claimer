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
    "emWrB42J7MABsjd3comV7Mvjx6vU62Twgd2HQ6fmUcTs4acCiEWz1dDNzBPfhrrdFpeAneFzXK79pHYVeCaDXVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDWujuzeNUoR4jYqJdeGx9U3sR56hSpSLsvB2WonzwZov6u7axRbNwuCYsMpGbs5UjyyzSiVVo1uVhECJctP89n",
  "key1": "2pQE3W7kdUQCsaQh8G1Y9j8zka887i7eZDfM5nukgBgkXGCZUbcTTs1NreHqVFJu34Nn5atTbLf8VBP5ByTuWsVz",
  "key2": "5vtmYPQjjgVQRN2AH6Xmo5spp3gysTEBobrqDhXwuXa2aDTBw2Lg2yig2BXA7tGfAPEkm79VwwQg44YhVZXntDoQ",
  "key3": "52gVECt7bRUgego15bfJgW664h2Q6MF7zcjFbHt2Q9LmYcQPvrc2aMLVEezTKrDssEVtoBLr662Qdv3j984sFQJm",
  "key4": "4KX3hjKMY3ZcPjnndZcQSPU5mkSYz8tt3JW6WxioMxKDhtzi6HhH7otyoEQ7SAESBpRSvZegFJhWLxY3mYuvXDgc",
  "key5": "5H2gZAzsw8TLSckexWBPkyMC7DVc3w8yTXeeTgBBs7dUAphLq7kTmGyCdmJwmMYyAL9Ykyv4ZeVucbPV76Bp8ndi",
  "key6": "3jM1B4YarxggPDrxsimCTZpBrtEk5VV9Mm5GaXgk7Ai969tvKs4Ro6Dm197Vvv12n7jsSBeNudr1Ucxak24nYvGd",
  "key7": "hqQeix3dr3tyBW3fwbvBc6pwKTQxWPjnMFGALqkKqC8uA8cP374boYqVvadRMF8wdWqZuVYwQ3pAb2j6sTbhUTW",
  "key8": "5VyKSpwZsytvp8T6SgJGShaqDWT5bY7BaMEggWorw5i7dpRWUVuqwThERCYEUfjMQo4dkcCakuj3dNvAJje9r6He",
  "key9": "5Y459ReGBqP7ifQEgZCKMUtnGnYcEcEAmNdsE4nmU4gzdjZs5hSb2gRqLW5xqeeYSscgu8SwiqAnErDRQJaUa9C",
  "key10": "5wFZwt9eoGgp66Gpw6WyHwo3emvConne93arbhsAhHbL1ArnSW9qisGJgqCLeCTkTUb8q4oLxeLB6BxFThLMnV54",
  "key11": "2mhrAorpD8bjwGxapZuTT9Caok5wMR4oUeb2u9jdKGb5uhakapPpeEeZmQsVwG7vDM14abfeu5t3rmSpictpSofk",
  "key12": "5KJWgBVuSqEvxNLDH614qs4eH72SuNM3wUTggU8tn4f2xYYEqQtRQdHrVQMGJvRvhbtjPAofGaGFjKfGMswFKnHY",
  "key13": "4BDVZBhNhgD4jjdRQmeGyFZNV5hGNBsyofPK9XNhd8QKnTmHxsghQgZWyFsCPqxMudAEg7isNYxCKygtTHmhZE7p",
  "key14": "32gvpkhAstFofiFSCEYJmTW5uN8TaK2z9WwdorR8k7FhWc3v1AniW9AWqLVdWPgAMaZfR2cAh2xCPLffNmt9xupH",
  "key15": "5jbJGWYDyTKz3dY7qvTMEFe4sRwyYT69sc6gJZEg1W7eMh36NEYQsaXJvvQMoKpywEGgzywignCEHxzXSnzSe4QP",
  "key16": "2azoAefPvSJLUFLAF2z4N2ZsteSgPphDVJE8J9Xsz6gwhnS4rGuFAmcRjG97u6s2JoC6tJF8XtKgbKVgTdD7ZYog",
  "key17": "4LDfBdmBRVdjVowqPYS4jL58GFMpiR1ELjr8UiVBHWRVA2yot2qYEknsnxHsom2W7yCSJ5WCaatKPvu66iCdubiN",
  "key18": "54kPdZmzsmuD9f4iTaoXGMBTDAySrighQWTF5qownuRdv7zYqxVLCyqbJjoKyYdExWbz6hMC9Rjw5mVumVw2UVBH",
  "key19": "3ud6EqMucLqFGwQCcPPizPBQgWJNXGqJZQNTogCzSPC6gX2ixG3wH8UaoGXuUL7i5Qz58ZZt75yRRGTXCoQKTLzF",
  "key20": "4FHBFYAtzc7YnG82KtQieLbcVb3u64kwEGe1FeFWFwbdBS7xuuJej2G6TkY5baXYusxXeticMXHtzHVXXA89aoLz",
  "key21": "2TFqr54AcWBfWJSeTaaYSH9wuCtVKtxNwaVDVHoh4LteDAvkY7QRZhAHw95VDvtoi1auZyb6Vsz4XPwgk1yVpdaL",
  "key22": "4YTBWvgH9WncegMnXj8d4Z4KF589pEAygDaJM3RPZuqobg4rKRKLUuCAiJpVp1WvZoQtswRKSmSjApces1ySX7hg",
  "key23": "7zKTfHEVSR2162XqfnJXF2nBxvL7Zx2bC8do4tSGTTX7MeN4vfBvgxgDUH6nepfN4q6HjU65oUYGNbumrB4pHrq",
  "key24": "33iDa7wbxK1roDsMqDNXP3jdToKoA9mWDQgzVc8MHjdW7EsKwkcev8LcjBz3HAN8FFjsqWaRbQMyxRcTUuWcqFdp",
  "key25": "5Lxnp9gYEt5M4r3pGj9CKHGV9pVhT1dWxurE1Z7xqGkxpZMAxhc8Q8UWBKxSjSvtoqfWYVbefXgGE2873B3sJpUg",
  "key26": "r1oN52ZyXHq8i4mGcH55v7K3eBZWguR7GhYf7dHN8V8qkV8xDLxjG6uSfVhfekg1rF5PFF1whaP7AeZChjSvZVD",
  "key27": "61VPQ9fUT2gB2tActP9ByborMR7FskEbUaY6f6rNgRD6MKV7gHmkYxNvWRgyYTf3XyP4xxQviV6xK2bwWPSK54DA",
  "key28": "2mnP38VzRSXyHgoiPczJAL4GAhtXWSQe6Q5vrB9QtffyihsWGNViVq8nanvF4BSiqtWtY8UtdBJiEodiRRQm3btz",
  "key29": "434XbwDNvAtuWvnbCLLQUWSDWiejpKvNKnnj97wpbW9LPDjHmreu2bo6VtTdonFKsbGfg9wgSCqBq7N1efraKRWg",
  "key30": "66pcEYTggKqaKUhVWGF1dLZVgJFsAPLvnYYjLGrudA8ZZTMKAohinqcN8x8isSLXjxwi1CgQdNgDYKshHxRQtyC8",
  "key31": "5FLqewNCDfPh65qkoZGDx9pNisnMwyFqnW3g9iPZscNqG9CKqdrwcsNMXLD3hDADd8AjGhGDtG39xNyhNNt1udtQ",
  "key32": "2Z747tY9CsZuHD1KCYEnfjyLgyUqZKiVYqrdXFRcxyJUSGoh4yMZxC7jVHcdCYASgF53ycGzP1bUbwSFUanLxqS9",
  "key33": "2tHpirUu3Vkcde3XC4V5SAGNyLRVJrkG61SMyP9b47aES9srj2CDmLWyBANkfqVNFn5tZKjvSDBDgYaQA4gtN1z9",
  "key34": "dRbPFZmBf8zknrp6e7A6VdHewTTxxkzUJeUw1ZgeZfRJ1ECbaa7xqXo6r5ZvGhVeppP18teQWMGeH7xQ3XXmqCS",
  "key35": "pomzj6pP4c3RaoLG8AQEtyt7GKYgLWFupLaGofX45mnb57jJsnRZKcSX7Lif7xkWwhzMsipkU8uFdjbXiFeuCBp",
  "key36": "5NCxox9b8zRv9YNJgTgqRGSEMjGKgDLG3KvzFF24einxU5AV39ArbzdCqzw4uv7nPkfwTeVsmVcHVEJ6EBbbf97M",
  "key37": "4uZ1MGtppiNCiMit9u29Uq73SNxcRfBDkjaK8NJzbmd1X82i3nFFs6RSdrPtJH855oUGxhw5XXnEcSY2oW2Aodex",
  "key38": "634rtQjyaCPP8PCkFJ8iA3MqG4mi9JiY7ZnCbnWCVFzZyDHo9QZnpECDQGquPZAHCXRu8Hkejp168wgenBeGPAjo",
  "key39": "3BvJMZckh2URajrENK6EGZ7A2CXrHCkqgLFdY2bKinB8NNLdofP3CJtaDzbeeHWtUbd3L3M5WbBnWJQoHLdmu5A",
  "key40": "ZqUqbBMEGF49fdFAguD53Nk4Edqo7e48JcfpoJokoWArfkLFT3JcsasHrMb6NiRY4rsWMdAXExkHKTbiRCkEp98",
  "key41": "3E3g7WP7u2tgE5KYuWd44PVMoMC9uQxam585kSyCy87mbebNDD3mkHVo3P82RxmhQM2HMB437xJsdzGcBC38Xv2x",
  "key42": "5BvV4VjjAJUEHv7a4uhCJRXM5zwYEQ3wD2Sb8oaJ26ZKvKtqEdZ1B2RAG1m2zS6y8pa35ZRti17fwiQvuUG791u8",
  "key43": "4XSZFJmCCB2dau6VRukyDeKVupt34KFsLaU9bE9FP12e6DGR87CAz9KNRY2f34GfW7h5ed8bGhHZqwkDZPCkvr4n",
  "key44": "vegEoW9qY3tiiETLZRV8BsjTCUkwLFucqsZaq57nv6DSbwMan619KsQqRGjQsrphfZkCgTibySEviFNRjM6hRBM",
  "key45": "FdEQ9UN79U4v43rse8tzVpn3UhTavRyUR7bE8v1L7VetvXkdiPYCTZsKvk41HqDbgrBmBc5p1kJMijTSB1sMTCq",
  "key46": "2rxGjVrVCFR3Ty8WRL1x6bY2EyEd1phFTt4uwqySsvpP8TGEmYpxdAgwPsffPAWjpgjR7iNjM6sY9Vm5bFAMomo6",
  "key47": "5wfAVCmzRDiUB79WTN8zae8XMNt6m618JSqDy6fznY3ds7wE8eLY7dCvPKb34uZg34FFWMiEm7voqjfxqUAzkkhT"
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
