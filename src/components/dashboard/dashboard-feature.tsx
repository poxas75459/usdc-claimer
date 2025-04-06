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
    "4LGV43UFSThHGG2pgeZdtX8UG6LHxkosLN4BevZNqcQctUTyN9LorHUuwx2WFv2SitzCqxWTPFZLTNpGWKYci24w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kgcQiqjMEtpDmvu7dyiBVUn6PFQiN2F9ZzKRYwGioKXj8zSdPYjRvMQB1Dcni1m2Z9jBvNirMX8f6VFTRBLie17",
  "key1": "4iSdo6zx3JUrtmEsxKfBsnZEZS5sjF8w9CRDSWBd8YE27fM4iCKxz7HmrUwHR68rQan6qnnfYX9ikutU8N2DEC5r",
  "key2": "t9ywQi6LwCuYQNPPfyL6KEHSP6PQdpNprao2QuwV9vAzqaLxhLaeA5T5jMUCQfPEc1nSqwFGn6HHAe8V3bLBEfm",
  "key3": "5i73rczjzzJfaBqhm3qSSg5wkVzsVSr8yYU7ZdbthErK4oCcc1gjKxb9mWGjRfWbAtvuzvcrbb75EH9ZVeGX8zA1",
  "key4": "4Jg9g42iffft73pPsdpjUBibidDnBnoZ1uQeN4oC1qxsycMrL7geAHVFCoURCppC9C62ibBPt2ZMTE4fQeYtitwt",
  "key5": "4DYU2Wim6r4QCs2oZRdBsjbCRnedSCiFhwzjfrFCRWrgnhLpCEDzEn2fru94PKNWeeoyUMGT9iNPD1nKYaqmLnN5",
  "key6": "hNTPZJZ8aRzdkJyxmPwsoUuZUQc4a7QZvVWwX4oJXyT7mThGHABpmWdkkBAMBwEDHEDN4j3QYAeHrWWVXrb9iL2",
  "key7": "2qF8F2V1m6KLBksPaVMSZ3NuPKHejqtRQrgwcH8TRc1P6ep52G6kGf8axfGQXHbXsjB86uCVnynBjnU3Gn6q6jN2",
  "key8": "456t78CJCLj92u58gc75fPkKbGryQNwwov892cf3hi2KE7b8Zk4qsUkaXgWYz5ii7MNeSVf3biFMFiPALp87cLMy",
  "key9": "3QQ6LUJYALxQMyWB4EbsZEm9zaLrnLU1M2XePSpCA8L51ardSzxAfy67qbyWk5vkXqnzmc2AzQYzxGRwopUSTn6t",
  "key10": "izeoEsGHsvsKVzrWBS5GbCGpA4ZUydLMAemcBKBzJHVyRcGLnQXaHcXXFhnF8rjBqSzvNmB3p69FcdFo6R53qYs",
  "key11": "62vtj2FiFSUbg9YfryRXLLTRb5kYHe9J6WJ35Q98XPV4ey7B8bbwELRvcs53cfqrByckrDwER6LaoWgtfggNQ5ko",
  "key12": "ofWLaKgofoP4MafoBhEKMDC2XsU7X7Dc7htogzAwnUJjCQnMFSKfnihKveG8xXyU5BUQAVLaFq25wJboSeQjG98",
  "key13": "4RaS6w9uzMhNNSYmy36jehxMBmabusVt56fma3fDAb9tUh9H3WyRWu5AJ6zCUracx5wn9Xfu1gfGxzR1ftEW3SXQ",
  "key14": "JmF2caaCN3JfjGkdFmqCf3S79VK6AYVng98Np82HZ5S3ZEr2s3p38pV11wquQ98BYiFgeqatt9JygtBkTVYqhEm",
  "key15": "2Z2nn8FhLgetHyLhQ8HPdx31o5EdEF2LHsyfEp2MeRkCFUehDe28Y5jGE6bVPKZ47nvUt1nux6aFet7iimZ5jTv2",
  "key16": "rLNY48hk6ii9ZbkYQpHSzWrvzUihWfxHPCKRh3khTxKqJPnWMQZQcGV7qD6z1Y1zd9WrYfm8KZJLhcJi2kpZFBD",
  "key17": "5PaCJgZ3Pk4k89eSnTFVXVjbsnKsiQWizFKby52ai2vXr4TFDQBP1KDAJPScJB5dwNJrFSBjb3EYBYxQGxrufWf",
  "key18": "2pEA6xzPZZ65h1chUDzZECz4SSLzi9rHp2frxw2opCXCKUBLMeQeg3WUFAEW7XAcpfePQHfsAAvm8CjknBP1KP3y",
  "key19": "en9kYrck4NeELYVGP3vGb92BHc6MWYFLjAT57uQft1VARTezrtgr9Pq6gMvXBiKmJ1L34pbNJj19CgMAZT4cu8B",
  "key20": "45N5L54jUrjKvfCBDqXtx1SfJPq2Ve1WEVVajv7cjNDoCs33BUuVE2VUmpPL2B2ftHH3qSXSa3kmnMUz1wM8jDzZ",
  "key21": "3qr8JWF3aS3mreiYFxnpu85kH3jPRyvii1q7XiqrJaQ87pu8YRyF6qLav3ibcyDWC2JCwupeYpB3LUrrXhGvBvSx",
  "key22": "3YGoq5r7Nf8mawAxijEqDtiwh8cR5CuryG6WWQq3CAq9J8kvF58kNkg4pUmHR7cuRN6fsqnxUSN6UF9JtNvDgByW",
  "key23": "47TvHrUE2ybaVE9pZCCdXcspof4gxzdeBXKwLFQrpywVdUsFSw7bzeZRNzDX8wn83WFn1y3Win6Dhup59AiaSdHs",
  "key24": "4LvSn84MNrVWBR4UnCvc59QC3FY5gytfxbAWBjqtiFSfpYpEsr3yif1wEbv3TLarD1wYwLibX81U9W7YSxfRhq3v",
  "key25": "2kdnTc1RwcdzUGKG21WKyZXZHiXvJrd6LwjnhwwVTp7XcaebqJt3WAiCKJG1RDqGufazVr1wnc1aeE7UX1vt7Kws",
  "key26": "64bhb8PbG7pERFU9Lx2AzM7qXgvGKoLSp17eFKZ8ZchqogtpMGnYd1sg2vb28gbmowzQyseGQydTersMYzkuTFkh",
  "key27": "2USDp5rSx2TpyPfb7QTHwfapLUYFD8qXR3siZvmruCGcvGjjCmcX5dQqzcj9YagreuBQXCKzVavhvfNgtA7fT8ki",
  "key28": "3FJ2BpJqXoaSx3EUHo9Nmew7y9cFnrZ7JCirHKjJWL59vU6fYXLx8waS4iPueHwm9fhukSCxnrcLF8g9pNpXAjpB",
  "key29": "ZCJJEMuDV8em32CJ4taqRabLx7rnAv6kRdzKBzzFetv4BBbb9JotNzW2NU59cvEVci2nuYkTfMGK3z4b7WuZ2ry",
  "key30": "YQ4qmKYJYcxupytZEr7RTywYZDiWfQhnaoRR6HFYgzKN8eZVChzAuejcrsFiuC42yjg2VKjgquruED1cD8Ec3yp",
  "key31": "3ng1nxnkDaLLjpvhHVnXMzcJVZqxVSDSAMrGvYV7EACKboUwbgbUJmtGWzhXH4gvWfM9732Bk5BTAoqbLJhjobrW",
  "key32": "57Mw3VrkLJjuK9FjXwSmi5HNzNAED89w4NXeakiTpgXMLGrk674HyxBJ9ca3rvTpoxw6XFk1VA7kYo9GcRmgw81Z",
  "key33": "44QbrE6nmH7TuKmpDpcV3PxDP4A579PmjLAMSdwZJJTTFfzdPJfUu3znFtycWMBAbhCf2pYcTJnCxawSUukHBwzq",
  "key34": "5GDEJ5pp9MdowyMcud382ehd3pmXwGsXaCwsYCUjSnomjSuqhsPCixTJAZjrnCQmhMhPGgQzrq17hC8zvmiS8wZY",
  "key35": "2jf1yexSXSijxd6Nk9NpWYFw5ipThT3cHYyE1aSiomnt4QSkiiAjomLaz9yk8e63Nwen421uN1MpNbzhd8zc7KQ3",
  "key36": "2aYxf8aiaSSHPynpQFLE4at1HCKpeBKUH6i3gHYuQp2NdrbYyhXYxpEVNGQFHsF6piXwHi3kFLCriPjWPQmnFKp",
  "key37": "5NDPJKTwP7oDKQEMp2UvezcsTsYitZMtrQ35zzJZmMEhCVcnN4cFUACTXTousLUSp6XeqZgSYRFMk3y4rf5KkxG8",
  "key38": "3UhKX7eBBEswPjAG3Qc2VGkjFe2h96xYjjidvcHiGya8LKzrwNjqjRdNTe8JssBWZjWfh38FC2HTorGJi22pQKEv",
  "key39": "iZyn965u8NBibQhYxhgfngKX1jye15DYSZPuDgv2zC4eiiVEyh7gHzFu7cF888ZEPVmkHwcmcuC7BvLscfHNCGm",
  "key40": "34dVGGSuk52RNLo8LzcUp9giQmjTVhJeerYChtHKHBK99LNpUcHwsbfvZf8gsQ2vUFcCq6vMA5DLFo3AvdNuRkte",
  "key41": "5zjmW8o3965GeBHpXhCLMUMUsyYyZ5QwkdT3eCP8ozoDTb3mFLXVPodrN9DCKzQdTEk6AXn91S9a19DRXowHnZTj",
  "key42": "76B6FNUVGhtS67DY4HvY8m1218NZVpQesFAdcz2WsPXViGu6maWisCM9Rwr8CcnjCp1WD8Coe9i1KTwBwFtiRqG",
  "key43": "5depaAHn8pP5wPW8zSUWCtsv4VspeNx8kfmv4apuGzcpRttFmou8rNhyXddmzCSyuU77fG8nFY3JeAxy5K5neoJ6",
  "key44": "3xGqUcaYt1L4kx7QLcRxiegj4w4yQ8aZdnQgiu2fMD8cfCLXLAFSmGuH43GkV5xTiqovWTBGbvizngANGgvqvePX"
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
