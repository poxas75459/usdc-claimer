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
    "5M4QSv75ue1uQG4nM6MeGKSgVrBuWCfTJKZqJXbJQcgSiguRT9WYbe1vpy2kE7RVHrMSyFKB67ihJG7TpxDtDEbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YBa1TKbZGUvzX9bmg7WRJE9kMjLU7xrSqHhaAyQ979vDHnZDnfik5KD56F4mkPacqkUs9wmK92AY3oLN8RUuv2j",
  "key1": "MvegioQEZfpP3McbyJ3JEBccmGsj5QDgZ2VYeVdjMttd9k3A93xqbZmGBX85eDCYn7dCa7z5ozguDMBmSAAWyqt",
  "key2": "53BKnNgG36a9sAn9AHZEpKF3o9KrGC3dPALpboVEvvQ1frKT2ANwtXCuAaAh3KP5VCkf4tk92Xhh8zhBLyvjUVrP",
  "key3": "2k7LfALroynCbFkkYXzGkRJaGUyn1BVgDyDfznvaAYapwhs1xA4UwWi6Bh3DwcdrsCkhTMLYZg55gxEbPCPR8Q9p",
  "key4": "3Y5q8ZEg6wZ5R82syuhy1p3k9NWSjoJ3ydTCjKMbM3N3gWCvgr6j1HGbdXx37S7U4q2CXnpebskA2BUQXJrqvhXA",
  "key5": "2NJFdZikxVfHdbhS7EDSY9CfGf39RkodBUtTHzaScggBLD5yoKoWQcnB6KQqpvZcXumqorM9RVwZcuccPQ7VSbn3",
  "key6": "3LPdUmFXe7FGKkXwXLTSFUWDC9JZXdZiCogGTaDqAj5h8UjCf8DE5t2MS28eHbjEvsFYaa1tVHJvRK3hFW7SyLHw",
  "key7": "5uKFktbXiHbvqYAMAst2662BAmrjZYSzk9s1uHkbe1hcxPAP4wkeR7hcadWqcZXs9nG44va59EKwJJHyGAnDNBJP",
  "key8": "64cdGej3Y8AWXvhHmbiFuzjF8Na5aAmjLc4TRU3ncwBrTBnm9XtKKLkNKmBjx8L28r5N6W7KbDyK27XRbEKQtHr7",
  "key9": "2t3nXrQ7CdJA3FW9zaWU67MgFngQuMqFZQPJMRg9TP9Fa4MiMmQUSzptGGrMm6TnDNKFYQXEAdHS3X19C9Gfmz3H",
  "key10": "25g12szYo3UhBcePHwUm1iwUcVxXe8MshC6ecnMiXWQeqh7V1jMwVgTtb7mc5VyavCrJkqkFSnzivNmiwRvUJbHA",
  "key11": "WyN1LT8ETsZEQxnD97svJfqEKGKM63DmB8WwMpyHCWphcjCSmX85bJGydZneiG9zjyRJ6cavjzEXhQg2LuE3H3h",
  "key12": "4Wt4b1Cf1r37w3kZKGiW9hTEGx4zjkr9iZ5baZhccDqZnTLW1ALAnoD5LTWeDZcqzggboVBZr7ZCQKYQCJq2vbtu",
  "key13": "E8EbwKwiXzK8TXio6ztNCuyL9FMXfYgq6KfPBKBXfwJ9GQt7ztQ3edfRUZRRJ65wkxFdtR1JLKpboDhTbiBVK3x",
  "key14": "5s2NTsMZX4xrGTN6shQivhC2qdmeTNhbFEE1BzBxt7VihZkoZWyfVhCn1fnf1uLUYQ5tZzVKoRNebkUG1PzQun6u",
  "key15": "QRxDmk1jB1oaGAioUKBC1Pmi1SihgDRxFyp2DqpUvjDLz1okDK2kugTKrmm5Pxnbij7S8dFvGYmLDdprk2MNroW",
  "key16": "3vXHbLAx8Wspe2GJBXuKHnhLMRvxgp9xkFa1VzeWsvQqAnHWuSC1FH4FbQvpJ3ZU79Sw9JrHdasz5xQVsEsjZgE7",
  "key17": "3q2zpgZLTUmWqg5pBbQxAVWGWGGHeoktnYBtykkc9eamcH5r9yo1wbjdMWW2X8YPiuxi8kuFdcpmmhhSEMLgdAec",
  "key18": "jvNsBMnVqXR7svSqBot2zyXqqGEnz3pwbnMJsDVjVbaDLwNDoFoB81FK4JwzPtooYAZxomz66Tzbsv7tXR3z4vH",
  "key19": "37koeaWABbGva6VqhCuirA3hzR8BfQh4TnPH832b8oUkC3TC1L8FjrKDmxWTMkC4fxErC6VbPHChfpkvWXKoESjy",
  "key20": "4WEWigd6mwvf78QhHgFbuzUQzczLyPCbq7kJXsAPsHwt6qE7m7THtWuUWsMncvPUiXJG8ah85tNFMaQa6pJNLXK",
  "key21": "4QDMprUFL7x9z1cKmTvUHcruCUeUY6bE3codTZcxeBDkv5S4vCk2z7UBq3vMBrLEecEJH5LE6BsvnGxqNuY4scRj",
  "key22": "5evr8kEBNgFomo4ze93FnZcUsi5ZqdFfPvsBrHeSxoePwuaQHB6UbYCKnMnV4g4tyh9TurXN9m2rC3GjNDcjiC5P",
  "key23": "5cXhY6hx5eQJJP75L1agYRvCSBRDuU3KdK9Xv9CdmgVLSJWZ7ZM91EM5kJ8S969tPMHiQVQtyzpGerjGSmDdxgRM",
  "key24": "s7gq3okjVFUdebgDAz9e9PScBu5bHU81mv5P1t9mUPKBQkMh9n6ohpJm1w7ukNdoX3K4Q3pgFfgMy8bqae2CkKD",
  "key25": "34Xn4dbgdcPqEH2jwcdbApQwa8JGZTP1bDYnatZ9D2WS1AscaxTzQoD8mmtNzVGGdMXJ9XRSZ9mvjx4biHoHkxMS",
  "key26": "21QVDtf8bkVvueT3Cy8PWFCn4gWHpasfjguR6Hkh22fxZ68REkXyyjc5m7wGpXZVX9MassG9DDyWPTiupGNXRJX7",
  "key27": "4VAEXRLsGBJ92SMbVmRUK6DHNESkYLeYRq7x3fVZwV74e84jmr1q35yxDGDAg1AHdRnpHBN7fKcKANiWBksZeuHp",
  "key28": "4PEsPN7fpqbc5w5jmHaPdTJtSjeNbvfHV8rjuXtgCPqh5M2ETywiP3yBLy11DHfLv14B7Mtz8E1evwZC3EnRCCzo",
  "key29": "4EgzmQA6ND3Y2K1jMo3NuL7hAQzXKGMAHPiREGU7i3Yr34QhScd8E9gMVj2nijUBFa5dHA7unTPu6A2KzQJxNd4k",
  "key30": "2gcqxHK7AkDZEtMd85RrdkdmaucgzWu89N18CzJzJUeXJR8u9CPpRcxBgq5nFymvBvF4updPAib2X6PdM2UrGb3L",
  "key31": "LhSepXsdNVu5xYFBfBGnGpJfLQ8Xfe6euUraJH1WDD1dTEL6SNcCyqQPnS1ZNeNkpThNjrUTFDUah2edivsHESS",
  "key32": "1Dvykj4Gt6tCQZYSjV3Rnorqp1vq7CzU4mia1L7ppWNqJhrjDnYku6hnu2J9ybSFmBn5GYd2kWFwESeyauz1mJ5",
  "key33": "4agU86HddmgYkDD1fpGt1PUg8UiudXBn2qqb8XdGGHuLz65esARLJjRFFWSqbzkFD2weFxiH9n3Tnqz1svDYFr4H",
  "key34": "2PS2f2ixfd2NX4eN7kTpaqAHbHwU2dz4q5EU3rHLYzGtX8kTgKYjTgV142K93y1YPCaFKVpdqNqzu9YV6qAdyU7c",
  "key35": "3xF9PVey1gapfWArtsHvheGNE2WqJwJ4ek532ZuP6bSEYoHtGARq2E6NYAkWpujwrFLf4yMzgeka5xecSHTNZSVW",
  "key36": "UxPuewLyjCA1y9BdHFSbrFotLSXXaWRkg3zo58NSDfiwJJj34tQSxnuqZgQJRib5a62aEuizVUXBMMAVGYTKuqZ",
  "key37": "3pzdF4PAQ2PshGgcqZvE5Rb5MZxdFcrBRZkbCGSwNTdhiZNarU3DHJ68H2aeCRaLHWpfaESpMe1oQUwcznuz6uHf"
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
