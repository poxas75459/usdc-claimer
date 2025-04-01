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
    "2uRTsuJUfBuMFQ9s38xbWctCfmgvMxEFZqhgYiBEvubALrQVfaJ6Z1ZYZwRMXqhGzu78dZboBymt64DnJ56zFup5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41EYddMqaBw1Rz76wooB3kuM6w9rSHsidZah3Cm7PJVFMH6wr8EpJd78ftVxKqFSRVfKEbjbYaTAbXYvodEe7Cd7",
  "key1": "3h1y1oC9vkRarzhWpBcKR6KLm4TVE5DPUh6Lm4zpceYLuFY62ETEkWe2u4wyuzpCpm9LJ5QcZnr9c399S6HaaW42",
  "key2": "3LZTQseitKTyr1QcZwAzhv4Cccm4WxWPJGJ3cKhdwZZDm8fxeuTacp74Fw51NQ8nn4NpKErLHJE7dxDVuMy97sLF",
  "key3": "2P6T2Jd5SFpPyeRxX3b593xpZvyJywqCRZmur5ygryBv9NQwivrmvHMcbUerdrFyZ7AobUFj462Jmuduo4NdwuWP",
  "key4": "4QKxMMm6NqHkXFYPiNEnXTpHX6oLEygj8VZBMMRxENa93TEErqbh9axbL6G1FxE1Q5zuNqA6m8W8JvpPyuSnRa3D",
  "key5": "2f77ankT8VFRVUCksfLtzmQRHLesQKEYpKkBWQFTCiwKuxShtS8tqizhTBjHyqDgeyEdiEhT3LtRmM2KKmpeVgp",
  "key6": "2WJf84oyfvBsSw2TcKt5h3AmzjkXvjEoiF6QKpesEh6i8fbBKTdKVCDqBzHQnzDBpXK3yvkErm4E8XsHjvaE8fDY",
  "key7": "5cc7FrYFdbjufAgTYLV3o1PFEuPwdPZTWS2Ex1EtULACegjTLQgRSnEWF6NAaaNy58c1KLDT6Kdk5xfEVEh1HoRU",
  "key8": "fsacnFmFcCybx2PfegT6ZiizmGfBRraAQKiHCwfzd9dqvFGNDwd7ymJUKPMvo4xnVqpi84My8hLRNNC6rYrJkzW",
  "key9": "2ZVJEe8pLHiSEvisEctbbPmy2eEPp24Zvmt5SYsXWmwJheLbKqNaEiUJzpdYqnCC4xCvMkdyuzTqpXrAgjm77vWb",
  "key10": "5T3km6XCnFSD63wGWpre9MsYzz6X5UtwGV2pcCmT3zPUWLrXhqobxEkEvwy7y6ztoW4eUXiwSCPW6QUrR6rFnEA1",
  "key11": "43E1Lnoi4yaxZzEZqK2xFzi4CfFRzFWt75FCRLaveBrW5mjG6NqrMFzenBpwAe6tX2KMUhSPQy4w63M8N15zmAec",
  "key12": "zuePbpoVC9aJfiwNb66vpd2dXEWsAhVWnco21tb47D6affjpph1qrbrZGLZM7eFV8QaBpzYJBm4YMzgRxkfHBGZ",
  "key13": "m81xiHjWpcpLNbeVdQyEcbvcc5zJkMjnJoEaCck9F5qhWEHty6vShW36dh2mskWSmW611yYPqdc1QJN8ESVsLq7",
  "key14": "4ZqiubFjr4BWYzvy8saoSjDyobpj5MLZLi6pVTHBM28cwZC1ExaFpPhNpTEPn3oNHXTX6VMo9Y5Hz2zeLqVDDQg5",
  "key15": "5X3MS1fTWYp2cBPQgCeq9MNnS4MfYdmuT4BiLay7DzUZmJaBpxA2wVunZW5FdcNStZsAaGpQ2UwwCcVwTq5jpRwa",
  "key16": "spxfjUibVKoi6vvgAK3Gam76XSQDtGCUSoaa1oPWtWvxNXH51PfB7r9JM836743TBMMFX5p8n6KVThU95YUZvu7",
  "key17": "42MW6XXPXUMgga3Mi7Mn9atP9v4Rhjd9m3fkHhCSuxhjm4Jv8Lg989hkPPvYeEweXB7QvvdZ8HmrvCKGS3D3fy5X",
  "key18": "6ue2X2kJ4Rxj9WAL4EnC3mSvbpq1zXYPMh8wPEDDEYDtn1rxRuGnrVdjy5x9dgqABSEMLvML2ZNcwFJnVjQG7Qb",
  "key19": "3Y2ztBjbUv5A6RC1vNya6UdXB1P443zVVqoUdKmgLRncxupgyB3rfca6T3urYEfaQ9BqndGqJTMuyGwCBQRXVGan",
  "key20": "29G3fjgUibogMoF1pfPhLhpfM8r33qm2wprgrsnyKh3JVbXikRxUeeCcL6PVsCYhjfQHqCj1iXN9CpP5ojHsvrte",
  "key21": "ZizSvDVcNUkUtC4AVjhnWyHTv2UrqUuPwokpo1ap5wgg2Nm32uZoMYrinEP2Le7sqU5u2EauNZAbuk3suL9U1rj",
  "key22": "46GkZke5CYrypfimVTJzzh9uiofd8Mo7boGA6t7ssCJb9hto8bo3FDjByLDGGfgTtiEpzAUPtG6gNdd9cqJtc5rf",
  "key23": "5EcD7iFVmyEKXu4bDrX5QGJAGMBc76mzvutBUgZ7J7LYo9V5RiTReCXgRrsA9pkUeRzYJFxvQXxmoW4s4SrEL6tk",
  "key24": "poeKcFAs4wixquZ9s8DyWX9TjWR58uUzKnuLeXvxdtEQPPRQypN33rc8UG9cGvP45YM68CGzAPCbFuLpyoyoLYh",
  "key25": "2rrjjVfHvXvnwkb48C2ubm3Kx8M2chVjADHVcf86GSDWWpzk13wnBdNqDFHoH5BdFj1LBon716q6aGbVY5kH9vVs",
  "key26": "4ynsNguEeV59rDQ2MZEpxhAKhPtiYJXZ5MyZNn87goikbHUQ1qZKaNVtpzE8fbBbrKMQxzvn98iMCffSa1bBaBc1",
  "key27": "4Am55fFGPQbizuNZwBB1t9gshgUshz9CEk6CKoFxAoN7MvVXp2J9qzrXR9qdhVQN7ahvL6gRC2wLXKbyPytwQSZs",
  "key28": "3Y3YW7M849VYAwrDFmA95urijWtSHJmnC1QV9efkeQiKjUDNfyfa7AVA5TNHag6AJ6YYxovia2TaZkQBmU3Bjq8s",
  "key29": "3PGZpG64o1c4JvNxUw4TvpPzZJW2YVuLKTxdXwJhpZkZx6oVeE9ybZfhVq68rxFZUH2qjMwXPy442UWPNaLLPrZE",
  "key30": "61G4cZBGNF2AFHUGdoP4PGPUvG4WFtNDykv25LCFocCsNXhbfzXPPhifzerPqoLi7rokRVkfNiVbRZ4iszDdyrQo",
  "key31": "2wDJFBd6yXFWQiLY61gkJZJuWnTR2BQbZogJNR1FUx59rSRRcwfwHw3mYKEdZCogoZuriZyrXcQnL9hRXngXQNvV",
  "key32": "4sAUzPFNd3aknzo6wnfDRR1tA9PBN2wrkJWhLXX9m7atrEZRBa8D78xbyUPzhg967qsPgHcMuVHAp4QoTURWBir3",
  "key33": "4dcZnH2fd3RFdatDVh8nR3rH4uFZLiCJNmPStsDF9Nu35grM4E1bpoZnNqmQxjHgmv1aDzCM1tKSA3EYqjm4tHCG",
  "key34": "2H4XaegdUXe7ain4NEBWtLUvGWAH2fzkqW3jtzHAr8n6qxuiNwrS7157T247FcDueAjB5Rk1itrvMoE56U7XGWuq",
  "key35": "3Gkt7SvXBzDs63xG6uA7F9RU33dRLqatdct8bwzzzWwwc7q2AngyBibT5ZUnbg4Gq7njhymrZDTo8vfsbm61Cpio",
  "key36": "59GREM2Mh4na6DXvxciqVuubgXxKv41Yaj2GdyYu498AnFXmthfSDq9uYtaXPeo5qfa6zLSTeAen5W7tU4buRAUU",
  "key37": "4K2tnugfMV2JU2n6XjPGpRhzLvsy9mEELyFpq8yZyToovQSjjeDhdny72AsnbRRiK6tAVeii6qhL3SKUoiJQDkFp",
  "key38": "3YbvbfoYEnYDRVgKNYmpVMMvqQpzU33kc7WvndqWc7MmP91Bu3aFy8RTsh8WRyZ9mq45BL61VAFx3BJGFLM4fhia",
  "key39": "3oREHiW4KANUEymjTrr5RAdDXNBc4NXHu1tnaRzyhoii6ffsDayk8Mk4cVawns7wv2hSzhpXjD9HnV6EciykeDke",
  "key40": "35gCjCY63AaTWsAUYzaeNJw2i1PexqjkT8fGjykbkGbHRaHQqWSN9qCaSzKeXH2TYV92w59xePAeCF2GmZ2LBFme",
  "key41": "2jisk3eBUSpEZxFBSRuwZ59yYc8FB6G1TTcfUrhR32LD3E4n44361wcnWBk4pY8y7rXkUhSK7ekW8p5PuE1ZwWcK"
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
