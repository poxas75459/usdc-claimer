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
    "3H61EYUi8RDta7FoMng1QCemysquwyLz1yPG195Sps6s5wArtt8PZyBcJMJrfCiEq2E68n4sJK2D86qo5RVpesm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ytovvuSecMePsUZtoFE5teky7LBTuT1uc3vz1ag5YVVjNm3T9pjqTotGWxe12eYaUxfECPicjRJVy2VLGjpd9cP",
  "key1": "2YhCD81G7tXnVe9MGXcrAhmJqNzMRu2zVvFqfU79c5cHHggAuiBmrJXsv5NZAGwHqZ6bWb2Dk3ro5wmqPRCZ7oz3",
  "key2": "5CYViSiJ5CcUrLug7Lap9qEckjd8spG3JHwusCJFUqyPfWQermnyNKzSbn5J7wTGgc8dZ8Cw63LN7x5Q9Vc8uoYH",
  "key3": "3V4kGGSwr9LVP5brgokpqpRvjG53VinHgcb6EGUpcafp9UYpsCZ5hNdQH5xCfN1NBM92zSmiY2KueYLeeniwcwGe",
  "key4": "3AxB8qoNrWbD2zWwZ91gf61hEh6BF5rRpT4ENh6JoJBECRvvu7aVvswyGmWKKYTtaspFEVgBfbxhLKF7NnPnff3W",
  "key5": "39YSgUn8aRaBsz1rYS87detbok53SwSTsGUUK7FE88aaJt7jjy6kS6NNs6hGGyrGS8FfHk5pCU4d9gYf9a2P6Ujj",
  "key6": "ECg7t64BU7acKx9jpY7L97Kqzo2iJoZKiNkpAfbh9va83Bk5zwobLTvX8PzmgNQUJ19AvkoYNdnyvfadrjWyGWs",
  "key7": "5dKEnhjG8zUaZ8iiP1SMZYEUCy866FsZo7g7nH3z18U4DxmunWnqBfiGbt6xwd8zuYRQTv3qiTwEkjYuZNrY4HG7",
  "key8": "4LJZJbRKM7gubfxEx3RbbEXEApTQvcCzGMWLA21zhwS32NNdtwM1HNQe4Pgn27AQsw8bkxQtQzGTcC5Fj6rd7yh2",
  "key9": "SNrBCwVvcJVpn6Sqk1BJEoUNcz1S9CMuRiAWVNuuuHn4brkMpQKe6R2EgWPkppx2w3VnNWUrFTdDosrAaJYSXEL",
  "key10": "qFrVDSdeGeRRQRhq57qL5sQpX6LSfQTgrMSurEP9d1r3JodTqmb1FvuCqjdz6KbRJCvpRvfQv2vm2EvgeGqtS53",
  "key11": "5MxKyQm99tUVfYbr6XAuwrsfJHVGVePGwBiHuD6BzKp2eNFXVWZHhD2AxmCJafkfvf3t9cBSDEutLmr5NrHrFv6F",
  "key12": "3YD8PCC9RJXcx8Z1nBwpZinySvdNz3qGHeGNBAZRFwhEvnEht12w53uFosvdJk8HGQfkTKDZLNdEft7fDLEzhDNv",
  "key13": "4Hb4aKfZJuiLfrDG2kJARe3MWb2ugdXxHguzFhideT33XJUperD9tP7R5Zy5HpunCy93dr5zT7FhtzzFzfjoCCbi",
  "key14": "4y8FrbRMRmE9eyx5mY3Ge5RwoKruQWPDNH9U3dNqnJKZEijpvaRgLxHMBFsYt6dwxzMQG2pAW3M8rcjw1ZU3PBEv",
  "key15": "38A3okzxjwwYy7Bp35saDKpS8vob83vSiAay4DPkivbANssC2ppxpXAV1hjsphPWtV1FjiEr965Lz4UQVLrP6vQK",
  "key16": "5nbkh82QGSSjKTjZ9WjaYzqDyiv2pZDAJkK6wDkqka8rhzuc6tZiEhHnFvfnTiHUqexgD9K7KfasDb6G7EnhzoUv",
  "key17": "2Jt4XWS5yBVkoMmeLA7RhrMJPS1diKZPVotHpK8DW4U8drVKU5qZfinR7fQq79nD65f6YtqGzknPeXUiQeCK1Tpv",
  "key18": "3Ge19fsD1T9K4zCUEV7z47uhavV1anQowDjYR12qRk1PXV7P3zFDpGpXceUs2dt2oSoFzw9A1JJgSt8tHxod2uXV",
  "key19": "4TrWrT88nDkFeaY5hsuKHW9xBvKJqmFzmuPP7ToBg5LwKmvKcsdUv6J3UMtyq1x7VbXT7FS51bREtVn1cywGxTWq",
  "key20": "4MNsnVqSztM2jkTKajFs2yTtn8EgTUNXtbsfHuCbqcZnf8VtSmK8HKVrzcRicVRNKuhVZs98ZaXv3Mw6jJV2QRmL",
  "key21": "422484H2Vr3nEgWfTFymSJyTQ6zYcZGcMZBVSxNuoJ4HCeuqquCwzMvkYfXNeS4LP4ATu8TPMam3K2pZABCLMM89",
  "key22": "PEmZrorXBEG8N7g5izMJuJ9udj8jC4GyzmuyAEe2Snm5TFnK8FJbEHJkdaSohfhVaL6s37h75THiD9UJTVeD4FC",
  "key23": "kRKm8ZzAKaAJauw8XJmzqqvvkocg2guButd27PeeQ7pRrUHkmp2PmFFcz5tpC2Uc24erCC1zPw2ix19JNeHMbxP",
  "key24": "3YvCcdeBmWQsyeYZoZbJb8C9dizP91i3o7vRQH9XEECPHhKigGj47ra7reeZgn1czHMPPaHk8gfLH1Pf5LrMbF5S",
  "key25": "5bgewX2q5zgVRx4JYGD17A6WrYsYaL5n3tqQqBSVAXxVEai8YqUEJC37HHU98jEugD7j61Qecu2cvUjPaEAaPDH9",
  "key26": "7WBnLRmbzyDYBhpgYE6jXcT5RxwjbXFhABCyRoYMhfTPNe6acZzKSHa8YuUrGfoAEhzL7zsoxghEvooVgzvzcdQ",
  "key27": "dxj3Mx4enr41vub5T2Huzpb8erxB5BqvUKT8mcxKPvD7AohgjtKVgsb7H9CWq4C28zHnYB8mEzZQtCsob1Nd6Fv",
  "key28": "3JYe6qJQMEHBpzKP9Jryx7RMFEhqtaPYW4dv8xa1aZXVW1MUBQhYMfojh3CjAqQ19QVdGpzfwvRuwXCk4G5bW9gE",
  "key29": "4qPuQ3LpCS29U87wTfifHyhcUBAoiB1xZhPG1oh3nzWiLoHeX3s7aFKHxaHyGavrXc2VDLRnSoeECveovSzyvBYm",
  "key30": "3Gr66dnktXjBcRiqMHLkQWB8gKHHdvhzYE1P7SqoLZXfdocnP1GWP9PmkKgDHeHZg74ZJmU67JnRPDR2WFrBw2ZJ",
  "key31": "3p3QYrhhKhgFLSALG8KcJqj956ufiSExEyn3oHmeM11yYxYqC4cdi1PdUVeiQ7oD635t1BaMaPnDQdZSMcdij5h1",
  "key32": "goNadfG9vMLfLyVMLsLwmin1ZWMhPWeQUK3HBdmEVbHVMppg5i8QYTSKYrJbQSSVMPVxvgFP8WQsFvjkBjLD5zf",
  "key33": "3gnLVzVNG7j3yYsSKmu8fmGYqpTqWLbnHbJhTd6aCP5NmqmfVTotsBYnWDHYWr4LKK2krrDoq5P8xnmTePYr86Ea",
  "key34": "3T6z5JBhqjFrLTdbnzSK1UTqyvyoL64ChtyM4tuR3hvHeiJQLaanW41BwaNcBA4V8TSLg1xjRRLJwEKp7kNhWV94",
  "key35": "4goaJZN39UR4wMmgoGjBsoQAi7PcbUTwweVyyRyXFRQ7xJVfC22nPjdBa2ufSyTjNq2E15cutqDZozjAxEnd9iDo",
  "key36": "5ig37CrrAMMqyRYE66BvqQN1ep1z7q8v4yRyTt33XPEimMD3YqaEoXXDhAVFwmHv4orzLPJ7WKDrL1fLdYffPZ6i",
  "key37": "5AWr9snvmzzLqE6vqXuW9kUgrVtu1iWUn1rv9DzYrMU8r7yF5rhdVgkGgEDrBMbCMfWkZxXjPozw3XdgTtxTPH5Z",
  "key38": "3FW1xawLaCRdDHYQQppxsyHdhWrYCQD6nxwq2EPS9k96AzgrXwwnwwsZS2AGR2XxTRrWqbmNeqh7MCYf4ekrxC58",
  "key39": "5BXkhL4mLKRFYf8Td3HCEvEHhgj5n7VYBtn27KWRQvdLxW8u1QjJmWtoED8vW1xRqhLqsrcP3j14aVVS6oEbdTgQ",
  "key40": "Dp8g8agyzKj79MQ7yVNVAQGvNFBmRmSFq86fyBTFNSRrzy5RFpKweuXgpyS55DzbjpuLeqmJVX5gBMm46Eby1WA",
  "key41": "3SFEe6frmMWLDmN78C2Uu83G2UcJYktth6T8ngddw8qdwyn27XfMybjReMBTzpKWh7YzKcCjDHPMxQJTs2xPpat3",
  "key42": "wJ6KiWmmMAg8D4GzFN5jbQWf5iXbkq7VgJ7Qm8zn8Q9vhLjJUXPVFdeo9FB37TykDQ1PvkqqfaVi2Q8CwnPWGkZ",
  "key43": "3xU2ftepYXLTVpb5fMBqBb3ZMXFokNPRa1Snv44S9tC1gzWNkQUngUjsefy3RqDqMqiHMxuc4Zki8D76tUXSh9mo",
  "key44": "5Qvqdo7e67x2D6cAgpBiNTRfqJbSbau2EGAQGkL4Eqg2Cj29cGjzpe7vQ7m54PFaBEkhgNq9bqmpCVHCfncE7d6P",
  "key45": "5wJtD8ZXP4XErk5AMVYaUroeD9sF9J8vuZXKzicE1xLeVEcBfXjRoKgEjAQjt1jivGtfj6TNzs95WAzx3X9XUKmx"
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
