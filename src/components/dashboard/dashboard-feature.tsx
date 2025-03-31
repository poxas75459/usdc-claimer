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
    "5pbc1xe9zdJx6njkAoDXGbkbCie9CzVed1EJ75XxhY5ksfABTuC8AE7xwouXUqXiZH1CBXWpZNFBHug5Wfd6MME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S7x77aE1Kxf2y7aUjX64kTANpKevrEfz4bmtkjWAaDMcYY8t4ipkCUPMtBJp92YDTipi5SgveRKGc3M3m2S2kxZ",
  "key1": "5bFyiniivVZadJvYj9GeXYWu6mzMSbYePvCTTyxw1WrUVgv5HCwteHiskJi8R3bT8vDoXjJrDQnmT3WBuUWQXR1G",
  "key2": "4ccMFB6huUM6BWmPBHNh38bEACvnsQWpbJNZNCDNLmQ82b6eXuV39147scmtNkXaychkSgTSoKSKEk3UnyfRc9mX",
  "key3": "5PEksiDLgPwgM2xwBJfJy9hcrAZ6NivccLwaTw2CtAv991ttZqk3juVMppNb8fha7LRw6LwDRQm1mMtd98ct1fCX",
  "key4": "5msP744W5TiiZgfFzZKsCNHwnRvfE4y63Au1wpmNn6SsJu1nhxeukugvaXuweBLdqAnYuuNkYp1Hypye8THbRpDK",
  "key5": "37PPJKE5sVtRR3ZWKCaiqE7n9AW9DecvU4YM6z1G798L9WtFhRdwKosvcj4UwQ49XhEHJVjG6iC1dx9PTEE1G7f",
  "key6": "5j7nxRPE1CKVr4MDuo45oDgdP7ypd8b8NU6iVwbr2z43zBiV4Lc4pe1LRjdHDyjd7doRVvMZzmvHWfQvZE3FjWeP",
  "key7": "5hN6cynH6mqV3oJrbVv3312NDJPK1tM64QH28JY4yPvup9s6x6CHvvu95QL8E9ExRYEwC92fF9QLeXioaSjZbUAg",
  "key8": "5o1ZTgyupBoQFmMxF2GJ2EPLCHF8SKz57TfXmzqoprbtfTcTapzsQ8JTcB762CmmWLj4mUpt9GAcFUV2Hub9aJZM",
  "key9": "3BMjiff49D3tPMWqXuDhCjRthMDKJesogxp9QndYg4dRg69t6xFixMAf2RQYmy4E25qh4nkigA43mawNPCHrfk18",
  "key10": "3Rv916KaGByFinnrouYMG2RJXU7bykMQkdvnkJjqA7A5tWHuQbPGrdbLGvc65DgLYggYPr15o2zdNVU1ZU5hrUgu",
  "key11": "4xCeDw63sPeF1UXGxZLENqCExAFDgiSU9bExVuU56oQZ1mrdFhFf2gQxipv2p21MF16dsCD3DvonSChgan8wwjUW",
  "key12": "2DLyPjXu4QkGM2PohX1CFoDkVB3gztFbg1s5B7rVibQ5xvbRzHfFdCCZ6XQuaXyn7fckngrSsuwMLa1SSamcyzib",
  "key13": "2XH6sdWV77EHEkVSBJazzXuwPAcK1iHP6RsUzHqmfUqoR8PjTz68H6nYRyheoUbZwrFGapMPz9rGQc5FzZrP61wr",
  "key14": "XikfPP9UWEnth3sitwUcK76Ft25z5eXsPKUXCVGu85bp36t6WAvhbq9VrZND4nwcd3opB5FN7t8miGTCQMmT8yu",
  "key15": "ocpNMgMUpjTSPPfY9hXJZnc1LtJ5bVb3jobWNKjLVALfVNjJZigXRGVdqeKjywCbCB9up5TqgugdafXPsMmb3bi",
  "key16": "2r8eSADqg9HisdafxMWX8WeKRFv3qvKLLyuNrX5GTvYjKDygvHQALFfRYrsGazJWaijRkUkJ5PNgcqVDGBZ41EjN",
  "key17": "3EtPGZ643TT6GPXq74K8qmGyjczfEWV1CkjwxqNd2n91NsFQJk5ugbQwBDjP95qMbjtcFxm1hCiXD4UVysWNTb21",
  "key18": "2ZMMwM3wzEctpboQHjrbczD9RqdhnDuorA176MdFq3pYhwP8R4MYkxMvWpakiFm88qgy3p5oNm9qm6yax6iaePL4",
  "key19": "4ap9SLauJVsDAv2C1tmggFTLckmfksZgVf4HXje2Labt2tcy7k7NwHSeBXs4pWvXYPTEJxHLgzftz8Z9xcAZoL7s",
  "key20": "4UXuua7S5b3cgXXFukW9CmZM9uhH9mExh8tGHfjPNenavKnCXM2kjkSX7rop33a6afFt1Q7oeUYbSnz6jFyE6BVa",
  "key21": "4X1wYTJnL1KRWbpzVgMoLKphKtopW314AajtehFazSDVoRAEyw15Gs56Xz9bU7t8M4s6ZNTbHD2msj2Ntr5NzRUb",
  "key22": "iQgkMEE3WDu6KojKQei6hyDckKauZmi1U1Xs51xvrR1oYBKANixpvVNVYLchf6w1JeXMSmijkGidq5gE3Y9CvL4",
  "key23": "2mRDX2n5qeyPHwMDpBn4sQhxbzq9YEyGiovh3u51oNfG53eXAxJmsLgVdaQRwaKxbdpUa1TPyLziL2dkhsk2sWRh",
  "key24": "5KyV3GRRL14fHZsShNhKMnW2LNeAfiPXZV8nmFJekM4Ad2k7oaiEYrvVeYrZNWeNrk2zjbozn3pZg2SiwAr6SgNP",
  "key25": "4x5MKiWSjvY7JdScwoYCMXnxASgj255sK6d2nBQ2b8KVUGr6fpeVN9ATpqSUzTrRyx7uxerhzmuEfvxXp1NUZmg",
  "key26": "zU5N4dNzNy56FyknocQQE27cbkGWVPpvpwiExhVsCtQY9Lmr9EnYWMEHkMkgJYLnwAcCU5Cnofh8vqBwXrD4bNR",
  "key27": "3uHKwMad5NALy6mGKFQN8YjsHJoDstK9jsPLfQMhXpu7EHTkha8MwtppMpf1vv5VYgj7bNFQ4BkBVhBTERLpxCuk",
  "key28": "32nmaz1BqFTc5qotKshKGKV5A6uSMDHJeg2NtX3Ly6ArPST9aW44Gz7ZCbDdSUXAjYVae9HdH2L4oCBMMg34oq8u",
  "key29": "4i4iSMepADeCeXjzee1Hkun4fdt7pwGNH9k5RbeTeY6Znpx2dEDhRvxpE7BrH5fgLhMAhupNwvuavMYRXdx8a9Uv",
  "key30": "28Bn2jSB6zWisEafU4AjF161BWcjuQHsakVd9YFQEcZfYaVTpxLRzfUbyk5DBiLYWqQE7NXVys1KauYUaBpf8oQZ",
  "key31": "5MAVTeKDL5goHYHqdhCioJjhdLRLSVEUWhD8Q6YRCcCUsb1Fm825cqRxy4D1B1QD2k8UTGC4wRUeSbJesfX2eFi8",
  "key32": "3zxWFzSY4UpvnNKCUHBp21oTZ2PuVFChivZnzWV8rNaQcXAUwNewein7i68saCULy9GbxKjpRLEMK7ivbEgwRFzi",
  "key33": "3ssfUQbkiqE399H5M5wmdfE5Ucj84LkSKjYZFmhBm7Doce7S8F1GbvCGf7LwShgBsN9n52FgNZByFvRuoqh5jum3",
  "key34": "3LXrqQhd1AraNN96D4rKBiNRnmW3XWT7WGJqzEyiadQiKYGSHLAJG47Nmp8XyD9V3FQAQwU8SZ82YM9atZHDLon1",
  "key35": "LAnHbgPVJc8AzB61o6XjYtTgLRpc6PSESF8N9AAqpiMvEJHrGaoW3qHeVAwcRxCwg2CVo27cnw4rkkziceLYbeQ",
  "key36": "2L4FC7JEUg31BhsMYHZdNe1GTeEFX6QM41K2fZDqyKdXT1JuUZ8P44Es2Ms6y1UV6RJQD94CL5GCzpKxwvqF4Zc3",
  "key37": "4zzChBFKWEW28vUvnW77J8YStdLjjd2hF1WrBSuYSJhAABkhXEK9V48z126csHLM2JomXjSjZ2XypV1A3ADhMsmT",
  "key38": "4pB8CyVACy3UEkjVoxfcWi3gJKXuHqJLgxhXPAX4eYjKWPuY3sqTpuqZdjJLenqmskb2NsBrvUGkJJwQMhwiYJrx",
  "key39": "2eqYdSN6VCjnEmhGsEJ4kmrZsgiQScBnNY1vwJYqZawKjrE3y1SLYqwqqhqbF1BGJ21Cx8Vrkk17tGNPGecYjVQq"
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
