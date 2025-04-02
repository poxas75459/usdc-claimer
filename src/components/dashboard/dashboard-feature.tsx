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
    "3yTZTpuybpZ1FkrRB5QU3ernGZKmyrm4WsgGX9RpGLHDnbLmB1Wj1PX73rMmQ6ykQCRnFq6QS1n53DNNjcwYcZ7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MaaR1BquoMwaCb1CL2L1c8tP5nC9pM6GoRENKZJV36bWumWSAFP6NeRY1c2R6n3GjHw1qr3xpUExk3gmcuGDtjV",
  "key1": "2Ha7jf3V6ED5VaHdoPfT3NpVfUAXJtaqMzd77Sg7SbF1ijXxgexG4df2XCpxhoaNDZHr5L5ipBBi8H63wbFHDyqS",
  "key2": "615AyYxRyLxQkLVv8Aa8oGVHrshSgUb2iraZRaP7SWE1TKCNpHNvHpxPKrXbKW9xsPx3gjsRcjgrzCcwR7skA8Ac",
  "key3": "3Zg8mmw44BRsCr36dDvqFdnEmNX4sE3Z6yUAFTFffqd4SkrCaxeU9adDVT1dHDszrbaibet8ZbByWNeTqArgCgWh",
  "key4": "29SUuHck1DKcj8wnKZcnpXUYent7BsJ7v1u3DPTAV3kSaU3xugd1tpEx7kHKfiJ1GnN4TxY49UfGTzaqfZLps3tS",
  "key5": "4PePd5WsecrRw6AdU75qp3kTYj8WSahxhpDsWmDqj6b79HNErd6zsc2ch5Cd3PPrstMPb3ntYLFM3QGYTNAchoGC",
  "key6": "3LDeEqy2u4r7WQY5hAAAyMXCPWC5osZ2w7vQpAFbB3ZjcxasYbKuHwfXypQTEmTgJWehH4GSvGiT7ULDEWZFkp3K",
  "key7": "55RtgRyRSnPFEzJ91hmWpYYdD1kQGpT1RHFPC8xXqLeq2qRrGkv5b1vToWJYkss2d54iEE9QhKANVi7DoqQvT18M",
  "key8": "5TzksmyLcn1c5n43DQMMZRLSvnVxwYLaECArtuFuVuWc9TYuXUvTjr86TdQjChQmjP81hMKJjx29R4cKzfyTaYre",
  "key9": "5pFcRkpCLeUXuD2RSsaRqodntWaY7jUgVHXHq7wRndCy5NRJ1HUQSq6Yr53g5KZVNPfrMwWumRd16pCfn3heL6PP",
  "key10": "45KKLbMb5EjRwZuvCRwuNDTCUjfdF1jnGbcuwWPQGhvLesjeA1Y6hgTiPYR3gjPT6AAArN6XtTgE8UeLzM8mmhiS",
  "key11": "2biw8LPupFToRm2MSqmE9cUwMuzjUjvueoRgXJqHDPcvkUwFCyjcfhBxo4YedKB57prEJfDVDKMeU5nxK9DLAgsN",
  "key12": "U2ndCAp1iWv6iPuSN68BWzNLTicxc4JS2QaZ5zBRJ87EU91TQ8SLJV93tdGoTen3r94VmzixTXS4Ev4WuLmT2rw",
  "key13": "2qgq9qbREweqC1qCPM6C7kr726pR97BKmL4rnsromoSThBfufdfxKLLw2XYjAZuXRw9ZsxRYbzxuiBzpHft3QcJ1",
  "key14": "YZsKMQbr5i9YHyXDTGm1UqMsyfbqdGKC5QUKc5ot1pkh1KS9vJXds5xc7zbi1G7agACxi7iML3rDXQZDXGYKKNW",
  "key15": "kQfPMkQgzFBq2guqBmWJZFmhS3oAqigNtk2qWcw714GeioNtMNiSXkGGV9v2ZooGi3ApZr9sW6eghBXndyey8y5",
  "key16": "3bcHJ14uyw9jm6RZpyGmAbRdnNkEKgL8NkHEhVamXhjhi113NwYYnK2221MQESbiBVbnXKgjsdoq6w3NDBGt2pou",
  "key17": "44tB97pWWsU1jrNYAPpEGyDxkxS1YW6T1zdYvo9DyKUy2uGVbiz91frW9iBA7nxsPnga8egyCNw4wRUJFfQNjL6m",
  "key18": "4Uy5UQbYMmqHoo1jGas7N6ryd9FyJkDUhMb47m9ZW6U3WpTZ7pwSpWoj4wiALcYSUzxVnm2e9fZGFZ8S5nkMGhHm",
  "key19": "4K3CnpoZv4oABnWWKEBBkkDrhMTAZvSS1KQ47uiPM8X8yYtK7RaRypaTeQ59FRJReXoXxNXbVRJ4xGDZwFEBmTSS",
  "key20": "4J5a8X8ccNZ4HWgS199HXtPG5vmVaNExDsK8KuvPisrhEpULcKJzZLf7KZsfvs47YcUu6UbEWQv7qPraEr2TfKHE",
  "key21": "34zrw2Y23zFF14Rdr2c9vHZBcimeF45FzGi6zU6xzSTeYHYJE1Xd9JLACeAQUS4vToB1hPAtx7LNrJqNTquut3N1",
  "key22": "5RUBeRE6MGVfkCrZfxaw334nXToSzdSwnSyn7DPRw47mFNzpxuAhWJJBwKGVtJrsZNRTvehEyY9NCKJ8vGEPjQzn",
  "key23": "2jk4HuQ54xQJB8VdXVG6jKjJxkrw4wxoCefx2kkopmFvJqDawXYuATZLwQLMbh479fvfR76bP2AtrcrQWiYJJL6A",
  "key24": "3y89d3GU8VBijsuhhcRfpSmdwo6QfAz4zpfD79kpVPRwi7Qjnh5kzVaRsPJDd9mS1hy19UEk7Pca5bxBcvsgzxAy",
  "key25": "3QvPfXSch4dygz2bVtn4ypAYqkb9BYN9FGC88wQR9yS914f4K2CuP41C4iZKvzbXEBuDxMZvo883Bio13Gb8tQU7",
  "key26": "5whTmkiESjqAw8iqdjgoDsZJXEpmPqtsj5FmhpXupNBGYB2qGLtC8nZs4c8N2oCaj3z7tVJtRf3caMkVoC1aXRL3",
  "key27": "5KHuzAD1hVtQcrLBe1yaEz6hDDpUH9S1LJEuGnohtN2uA3ytwMhYs6QP5i6gPRswj5wxMeLMYeM2DraEAJCPEzDb",
  "key28": "3Awnmwwwn1vzzHudZBMBCJSRWkfBN8RCBwbLMusgNwz68HbbtFAubjdLvEES2pnwxRT88LMtg2nT5bmKzKXyn8Sd",
  "key29": "24BG8btjAWRZDp6E9jUot3XsmN28i4nqmQbegAf62NGMcPGumb9HBQi85ndtZZpnuMhUw2i1w4pLEvaxJA5u6wHW",
  "key30": "5q3hSknLLu8Nko2HVGVSwx7Y1pw6WhJnk9AFSMfarkowhLtTvxaxBezg4cEECSj4okf9g6DFL7euh7jvprfuqbUE",
  "key31": "5h2vYZ3yx7hArr8qL3gwFXgU8kx9Q4xo4AJFGTgnKF65hH6LDJdPfChwzSWJzMT7isBRuFPaFVhPQ719qSrCbo6W",
  "key32": "5Nt5iS42WEQSLgrToY2r5xUrSLektASF7qHdnFuYQ1FwGKiDHxPdNVMJDfPYpWpVDBPxPgtyUgMv4FjarpLPUZok",
  "key33": "2pVR2xYNpYgULomAVnCyVJGtur9DUcX7zHFxfUQK8Q2SurVpwcz7e9ftbmnHuC6gx4R6ufi37rHxf6yqKiJubL6J",
  "key34": "TQ7vHUWK2LiEyEnd314APWc33Wd6ZTFVD4LWG6iGrsLUq4tD3ocYo7yUPcZ9qx3vnfF9pXJGkE4iCvsZoPmy1hZ",
  "key35": "219Xbn8QZaog3KLeDwXTt9h12dDaugdgePBzYtPStNHB161WqhRK7AvNo1WxFRSDeGxohdC9yFmNSvbxQbwoYdrX",
  "key36": "9REzGPGpUo3sa77kED7bVefukH4ueJq72e8e92devfg2yumPR1Uyr9iSEGqmELT6uZUS37PMHdUh8rNUYwM9ELD",
  "key37": "2vHzGDseUud94SPoCjHsJNTEg35fBZv47wmLB2c3yHFcQFWYN4ruDV2m42YmmRxWpdbWefhp1F9qvsseLaE1uX1x",
  "key38": "4GsdMBFhLxLug6BvDPVCUnQWNH2um6surLPieVFMzzxAxkkupt7tJgFB2bPSE5XbfyrLETTY3Kod76Y2XaPQU7Tx",
  "key39": "2FtHeb7xoS8DWyf4CzioEAegcFqNhgNDfL23WG3QHKB3H4RZcbBr6RT4zboGuU3non2Cp73T7h9vPAQuNefFo4gM",
  "key40": "4xxD5ptR4E2E1K53rnX2RSEhSedA8jo3ACTHTZzW4nGV2NdhTkp9GERvzf1s96fERpdLQq27yGnbyQvgwJy3pqfR",
  "key41": "4pw4gZnLHUbZyCyHE6pF6MAkKQo7TKN9HudF4YpmN6Uh8zQk1s6hzhNtCDi2VGyYza5ScwRDz4WDfDCBNi1uqLER",
  "key42": "4pjL8AfCaP4xTyHVEr4w3rvGCKCQddc7cj737RwrW3yoC4Ws7FD57NiHTYBrRDjhtqyZXx8CJpYqMk5ftySDnYW4"
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
