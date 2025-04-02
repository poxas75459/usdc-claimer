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
    "31JpWRdd1igSx15mT8sxHKFtF8uA3W3vvWZKRKvvejzoncdazGHacg58qhfVvvkRVR5q2nfhib5ER592YRJi8tP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3rMW2kioCaxgGYYGGryt6JgoMnNSvusQe7FXdf5hSGFjEAVJKPfQ9QKgQFTaJcdUgoAbAPZxQVYCmYUwcoVzdR",
  "key1": "2scMmFy9jigbFjQEuQijeYGpCKALNRSQ7Y8Zj4gwMhnpK7Abvmg2jYi1JLwKsDpDp1wnkQ4HJaMMWwCpJM2UJwyw",
  "key2": "5PmcDf34VgSDG3NhWAaYQdRy8gBwp8iJmwHZfDD3Pf4ByWuczR1AuxdsNyVDn6Cho8A9jJRS8bfpChwPErTnXMBh",
  "key3": "2ZKNxexHPK4VHipGqVphR7n6AprRLT8tMbuStL6FgS8LiAK13HbL495kmCsGXSxJxRxmLvAzbKs5wovBgq6hndZx",
  "key4": "4zPcjTEHy6uJsZUEQAFbKjy923qw8NdoUdaGUjcVB7bZdmbmA94HVCdpZwhonisaazKUTcoqQGiwh4gDggehFf5o",
  "key5": "3vPjiGa5iYzaGNWDrVhVBpT4T5KimwqRrbU7xUBUs5kp8fqbLqBQGPDRz5nP9dHDbCV3vosS65AmoRp9qU6afvz7",
  "key6": "3uuevd4Vnj6H3hSR7GBhS1AoLRWm1u4ZzYSmYURKwjuzUTjDeGmpDzzYJHinxwYqJLHtsGmbMiaMGjny2oV7vQyZ",
  "key7": "3JY63ebYV1DghBqCUMmD7GxD3Sw1CykAJyNt7edvZ8SPKiJ7PcB6DxxxoEgAxFPpng8MtM7Ujtkmwb7CFNRsq86b",
  "key8": "CMFLzMnNy8yhJXN2Gci84weVkkbZmKGcw5fYBcdQv1nUzvdKZ2i5rNCbjkWf2QmfSdVdVL8oNM7BAxrm1e384C7",
  "key9": "p89qFU6M2sFfzwFBCpVAJPhPEXXKrzx3KRKgbVp1yu1hJaKic5Y7CohtrMZmRRazQGEGUss6fb7e4xycZnag6fF",
  "key10": "4yvG48EcdsTsuHCdxFQn4FcAEFEgZw27Q2dG6cVLwiJcmjHaGGxWWN8e3r7Mhk6XoLRjUt4o7zdZTFJ3DbPVRq4k",
  "key11": "2hZ4Fp1NXHDWGubMMwCkg8Pg8hDkB2qA3idRsmniK63pyiWU7p7ueDitvNS8CjxYEJyH5A5gjTsdpC3GysHVp5Eu",
  "key12": "5yRcn4qKBtNobjmdGxoG2g7SvCnZ9LqfdoHwkfqqu1NrzEfnjXywM3aLDAN5oon6NpecmXCTghjLsShGJduCthkz",
  "key13": "67C2RPUToLofhZmimqzGt2PEV4JqBYfrRaLXV7EUHkNAC8iwC8Qc71oYDaC7up6V5ShuRoj7vbk7a8wULyarpmyJ",
  "key14": "2fe6sqpRUUTdytoVGjBcoFgK3PMvUJ2LexWwKWBxc7Bc9Lv6pdbyL3BrXWF3vMisRXbPn1692DNvRa9Yy5HWbh9x",
  "key15": "3G1dn9xwjaBn2r1K9Ljw42A6Tz3xTwuGW1de5XK7mnWRy4sMsZxBsW9QvRwEfTAnSUcceNNN2AXWhaJ92f1aGwQS",
  "key16": "4bxnFm5zetMfN4WWdjhSmWurkFfwQbSR7L3jxgVidihwFoJmdz1LJ66gYpgXgjA4ugDagouGQLEpVNnG1NCwz6g",
  "key17": "DeHLLmb9KmRCQvaG58NrErxnUafh5ePfWS8MTrCtYJjTShWFuGi5rGJCc6ceukZPcyfaPEw6RVfqGkdvJ7kin8N",
  "key18": "5PCqC6Q3CP7w9TFiYUsK8xCyu7LGwxx1vw9o36qy7U5STpYE7G1hdQWckt3wJKpWfpo1sLU7Nv1XHAbPbBd16evK",
  "key19": "2R1aeUpCQDuQrxFFhFmGESvYhgMUqMtrzyzPMmMhnQerEU7NRKorkdfviuDgLD33jUwSPKfC9Br1UXYVLPaZwokf",
  "key20": "2uAe9WNw3FsAeKmUyrTPzQcpiCRJYyceTJJnj6dkm7zorCGvFBaYAUMYqyzT75up9FBef8mySo3Q7yWPA9Px8596",
  "key21": "Q3cd2MVyJQSPVJ8djvEPnwovUYphkvLxnh3WDq1tyX3r5fpTuHLaiWh4MfbpHW4QjW72xvscytYyZgLm4jxoZeS",
  "key22": "4kmYQZTsgiuFqboewPBspFw3emEjBATszV4yfsMVprY6XgtJxZqsJekuvBKUp2ZZ3Rp4bxTWogBwdk29r5priMTW",
  "key23": "4Gh92LiAAXPXn6BcEHAULmiV2YsLu8hWBynQh1A7XH2JJ2PmL95jxVetNpQzshWDhAtuwn6WwMMoig7dGMamj1B1",
  "key24": "56y6xe3zutqnd6UpmhJf4d25naPFyVtk9WhHmc2GsDU56SPZWRnMxMJiDNaTmP2yRnoMEGfzHD9HJLNHwC1iJmWN",
  "key25": "pZXABrJwvqypX3jGzvwvwk7EBtLyne28vvsVCSXdWNwbS4KgQJC4wwTRjxA1XwbV6LGhiznFxEE4pDiNMJkm4vP",
  "key26": "291XcUSgrS5krEWahGm4jspnpm6pZ61vVRA6zhscuiV6X6YHvSMBzVb43urEjxkJmZhXcnyNiuKnuiMb8GHggvRi",
  "key27": "3PY2s9MsnqKEFxEycZ4THH3NEfYpJioxNbXLNt6E9Nj37FSDAWvhyCgS7duzqcjbkPSbAS6s7DXC3pURxQRjs6RY",
  "key28": "63LhtaMe5b6ZtvHQPn37kdvz5Nvw1vYmkcW2PqQkMT9C6zC4HgAGU8Ehs6hpz2iB587yjDqEgoo9pZGeSRTSbHb7",
  "key29": "5c6bZoGS1rLK5NbLzyti9eyTqMUEyyvT3wmTB3PSDqd1kWfRUgLeZ6AVUqixvmPZTx8K7Z9GWZtjJ85pjVgbgXwz",
  "key30": "2RHdE2pA7saj4BDGvZpD4KAbE3F4wZemiXpVjWT9sfJvKspTV6rJeS4MYRJNZPopAdPA4AC4eBcgs96uyZGkQEdj",
  "key31": "21XC5MHGhLYtDPeJG7nTKHEyzeJkvZFJp7zAXiyPFJKyrVrixLGZCYaKXXQEGz7u36JEzzRU4TNbLPwdWdrqMtGd",
  "key32": "53Bm8kWw5hoiJav6kWqZ4GrxreRXqzJiNScGTx5pcPSHhe9fwmPs5rLzMZNoZPoTdF8UfamxTu3xPrQELjyrcfry",
  "key33": "g8QHU3CbKTiEE7SR56GuRQ8uo662KN1jPYA7hjE6rm9Fxqf6MEsvfdBLE4BvBBZ5me55Sf7QN59kd94aqw2zMqQ",
  "key34": "5U4EPeMK5nKyAftrmn1YANYnPU3YDbKLcj6SXaLuTjUHFWR24jAW7iYcVTMueSaoQhXbQXagTmFc51Vtf4WsAY49",
  "key35": "4usmG9hzdfe6NWTWMb5ScsSk6PzV7eq9YtEXdW2gnc8foqbi29k14cYs5QM9wysYsPR528h1b8MAVJU9GBeH7T57",
  "key36": "4HSg79wXzS9psHDufoLuoc2ckrbcaYMqGzWZLNUojxN4cbpHpRQHR8MSMRFKutYZwBshrtHrzJM23MwBL23QB5qe",
  "key37": "2MPxoJMmNKj6hv41GdvMDnL5D4Gkk2gS2SzJtzCqjHAPDy2ezHsgHonkY53E5JorDw4QWwDtJAo5Kut5CZpSeGNa",
  "key38": "3aMcCR8C5Tnf7M5cRdT8tz4qn7BX9RKBuu9YsQNguvW1HGzxR54Q6cL2mguNMkqiCKFPBK6XFcnd1hybwrNRxBy",
  "key39": "Y1aYuioMVeC9tKFoJC8kHznnrrM3jTXHrAzNQ5KQziSJ5K82sf7kmD32qokicrDuccDVYwtwVRmTYhj5avSwk2J",
  "key40": "2cLp2jaLkaz4vgZUcjJYcQfEvVaq7nASb1UUdEHSfhc4SVvJX3MTDLrQ9c3QYXpVm5rK46SnTnpr6M5szXdmunco",
  "key41": "2ise69EX2BSh8pmyadzW2kUvpvCm9LtxYCvEcY9LUxeMRf7BqVQyosVKLBWHkvuj2BvLozWHk5frMfGmAfVqAQ4k",
  "key42": "4fTaWtp35v4812onL67RJPmS7S9ctf3U5CuKofvYaTXw9Zx1XFULFUw6CViJoMuA9vXVpzwusQp1piACH7Df5RDa",
  "key43": "56FNs8AuZo1xFcEsmao7M83o9t9sEJ5Zs4Ry2QmpEnajNFMCivme8MrGWVYJ3X1H9XEgGPi5EZnQCHptKSM836Pq",
  "key44": "2hCyjcHGMdRHe94z6svUDvUBHzbsiKh7LJ9Y8ukQ9znXR5YCd8hSosuTPgkWArAckqemGxHoo7HJs329jpTFVvAJ",
  "key45": "29hoXVXjeMfxfWrCRMHgS547FbHVhzKzwZqq1V7RYJvLYkZTwb3qWZZopkEaXsBhqeF1fgmpqyKTc3GVPaKgzM4a",
  "key46": "MKjsxfAk9ZpBSBCfEZmaFbCGiQzz63rq8fDAApVrZfyFf9AoU9HtvzAKGLVCD4pHtGQFCcyjoDcJdfkEhCfc4w5",
  "key47": "3By7bRcT5AVUWGxnc5T6TrJ1UeM1NnPHL9zgqTG4XxGoT79NJNLavT32mdAqKK5wTvbVnqrLTt2rzAequQbDJHsP"
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
