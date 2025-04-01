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
    "4jjm6h9SpSeeeCeiHtRmiLHW9RGGi8xBxALEtx9sTt8VnxjWuzkFFZUsVv752daiXpjHoyAxct7WfT4KtDVRSusD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDHj395KAB7oQHfSpZkrSTUnhGErueuZ4kvNM5sbDxVNAyERvxtiUhhbi9fAvWFeDkPVjhkSeNQrTvGmfLoV8t5",
  "key1": "3NH6XYvFty1PBHLUGUh78wgb5dxxmRWAyiMAdohx8ykbENsNerVzhdAmcjNESXqzF7BLvM1scsruNNMSfoyAXfHe",
  "key2": "4oWLWXoD6oMa61GJgxeqW6KnaVtDnDRHiABprUuL55TsuXAGJ9pPQPrgaGAvhsBTqVoPrbfP84gXYd7z1XgYUuoo",
  "key3": "5NHwgLCKzgT6tTkjVpA52T5MgksG3zKGXyNesmCS136qmP8VReau4LQw5DJwfigF6N2pwv8bNnhmw3mwcVALS54w",
  "key4": "3NZCwitKhvTsQnZf1g7Pd6bQCjEYDkJAp6nmpyNYgPyysb8YHDhV9RswToBDmxqoRcJPv5MQpaKUNA67NzihsDRT",
  "key5": "zHVudp6gitZ4oMxTLzVYmAzdJivVsaQff13qtqqpV1WNRiP3wNQJ3ZYTgGgbqZP7GK6QfFChkncGHLmRDV1k44P",
  "key6": "5Mqvjm1rMPXHVijTU3TQ7Sonu7SzMaMe67QR771YhoVpchARv2NQJmz8hxN47DBVzqEWsu4wtMzQvpVQpnGtbcQH",
  "key7": "2Kh4KU7zqzSx6yGNSup7DktBcgwJJhKMNNWVuvQ8vfYmW8eLRja6v8UeKLL8SH22V7rCT3wMPaHVHb4W5F2JUGSh",
  "key8": "HULESCeUABV2UGEZj3bHQr5pHQRKwWTMnYmTodhUJCcEp1mutJsATRRPPLJ9TsoVF6HaBPDdskwd6ztZNdpbKm9",
  "key9": "4n32u3LMmxXoVNXnVsqmjyiKXkcdZueGf2eZpied1dYx9XDDD4FwhZUgQacawLmj35anUQQ2ZdDFrE1fcKt12wQT",
  "key10": "52bWUCtQ8mtwJtYVjsFtbcrKa3AKPSQT7MH7PKPUoe4RkiL89YicTaopix3Vv5p4j59UE5omhmprRCqRhDDsDrPx",
  "key11": "27BfSD1TabGRPz7gWCrdXDjhQJD4izssjEVr3iJHxU3LJXwFsMxdhouZCbzuu1J1S7Tm5iuvLkSN9DCDdeh7QksX",
  "key12": "2r1QvZ8iJ4KovHbZxQ2zfLjwJQ3jZgsNTgmWDxeZxWcNryNSc3mryjgxN3whPjHxzFS1rBQ6kpCVKYZnYNxKkahN",
  "key13": "2ovvcpHzB2GnbrUuMmu2C9iJh7Nprnr2h6crpvisg6pzWChNCf4yDCaUtmcyfnFTZjdV51M6CkLd2X2WXJj7ajNs",
  "key14": "4vSDvHUmeGb9WihbfMDSgePnnwyfQufuz77WwnHNh28hsHSZ7EQxJ6sGvXR3KvHsTnfWgnEcyaLaz44MhHpmiwyM",
  "key15": "25H8avgYYGDbYNvDQMhUameP6EhDJZQfR1zex3e5dQEr2Ugrxto7nwFtknPxQGgwR5oguY5kpBxXxB9fKWtzgXHV",
  "key16": "5DebQP2BQTgx9qwZrgMvxHodxL6NTD5PS59H6cE4RTcSgTyB81SyFJzJbxEUQE5e1tqbdPiG8TD18V2T7sC2YpHt",
  "key17": "2y6iJ9fSwXdCbBHG47exsqgtXJpowL1f3KEwtwYqwZd5t7gzkEVLJvGLZEG5dg7iCL9z43p8BbBbAoXSfNRYpN12",
  "key18": "2ZLWxzDjUom3EV8Dxf72f8bH4AM9xA9t4uNGhjETMDK26o51Hn7CKyn5hxiWPpWZhiqg1t935NxAqX1digyetack",
  "key19": "2VUa67V9aWzZaRSDE4vKad5uuw8zuMb6s9WhAyaPGgy3grrVz1S7JGHxtEkyB4fgTBAJ8fVSFBRS4zgMSanrwzQp",
  "key20": "5y9miwT3hjc8GHiQSAQ9D7et4cK45P61NTsZbzhCAYL3AXRHEfmzrbqosQuwYA5nTtDRXq4LoKjKBGgQs5BMHcLt",
  "key21": "5UBcQzTu3NRD1uRr6X6o454pjx8k4QV76p1VsX5yLsVYz72LbMEt8VazW8o1gwgWuMDL3Cr5XD7kcRemHAV7L6Zs",
  "key22": "4tv2sxhFmQieG56W3wkdX1ca2waPon59HNJyyQwHCePXpXxL4apCFh6Ns1VN7P73ZJ55xnFeqZovDHU1vsQS7XGc",
  "key23": "4BGyDgvUjEF8CN8gi3gwzb4exTAaj79oUfNEXgDfW7R6Wi2q1wbhLwAaGy9WypH2grhtGwExZVpteUe8jfhayvDp",
  "key24": "UPLSYdAAZVwv34TW8N4xTBc4P5ucekhQH22jqLT2tENr6Eb1AxkwAhZMSTXfVck9wg7vHwCcRk2wp8pZd2h39Jw",
  "key25": "3wy3DnBAfkrHshcNVBYMndp8LbjN5uydetRhEwWXTnGS3g1ZKKFhD4cSRe7LW9SMz5Us1XgXwwTDShtgSUDdYyQs",
  "key26": "4vANdxWQCGPi53k9JtMfEttiSx7YAXzpDm7r263fKQraL1DX9neQM75QXJmK8vwxaPvENKNvTGskpBxs93swB6LT",
  "key27": "2cjMQ5fhPqhQ8NQ1FmDE8RGfiTAf3Dc2BWkKw1b7jP8qPUNtNcpm5WP2uTxviiB6naQNPN1M8ipTmNzVDnG2sseh",
  "key28": "5Dyvozwq4EBtPoWazk7zgrTamXywBH3rgJuv6M6Nf3UqjRMfbaYLKHykspBq6YPd3mjfTGVKHPYv2gAfxcQvKzS5",
  "key29": "2XvkorQwi3EMNPZKnmDDmZNyNfP82YRAgZ7Q6pfFEB3AzAj8kuSMmD9Aj1m7R6WDq65dsHkHGh6pMoXnPNTBPtvJ",
  "key30": "53DP48iEyD8aanVpz1t2qn9Cq7URjN1HZ3eaYGWsyZm9dD3AyAxB65ip4bYqagGySx3xFkDMGNSbLx3vf6YL9nJ1",
  "key31": "4ZNEHHZryf1hveFrjnMq1vJKz85ALR6afFeFgzspPtsbJ1vsc4kQcLZNFMKAH6MDGcYzaRQBCsLBAKtWuwY2swJq",
  "key32": "5HV5eZZQ32ivhBPTi2gckCY1Ukz1ebrAfVVmA6ktJTwML8ye4gmdA1BQpZtnh6gHiA6d1z5hgdXN71tv2pZwcDuX",
  "key33": "5wSwbfqeEVZmisyRTKGiunBqeiDqazSWx7yUB1uufdq2nrU6MpkaYXydyEZR38NUnzTPfXoW7PhAvjh7DPRVKqHu",
  "key34": "3veY6zwMSahagSkAskNsXfZsXdHqwwvMKmPrFFupnjyD8PoBAZbe8F4YpqfJXTwXKZCUVqVmm36Lm5tngT67hFKU",
  "key35": "48fBDSq6hD9DFy8JTJ8jZkZXgL6XoTx7CLQTCZEYtrU5Bb8WhHA3zjro1rBJjPbFk3AEBuG2hqr1hYW6B6ZtpmAC",
  "key36": "2Wvdf97e3wR95J4k5R19FdPmVrYDVwgUxZnJf3pvD41VevATeN8Pa4yKvW8eFxt3AwwuzXKK2vSD1wekHUPtbhLU",
  "key37": "WgeYx2Jh3iGsHTmXPXovMaC6LQ3ofwDcfsJoCWaRWPzEBoMSFvzLJvL5TK1ridGa7x95ncmdyuxSh292aRTChCh",
  "key38": "45XkkjwLQFNNUEwacnqXhZkEHNwNLX47DFaHMXHZhjmcmfpjx2k4PtVaTmDzbZ8Qkb1HN25s2BHtZBFUN7qEJaxe",
  "key39": "59yggsM5tBUhBYQtvpKcBLeQskyj89DxnGkGsw61dz5vQZVviSbLavHEuMnsBd6C4Dij7UvjXRhBqeBsjXti5v17",
  "key40": "EzAZHUU1fpLTNkxiTzJZZNgY6HF1ay9baASFHz1Asc4UcZKyaaYBJBP3chFQoF1XY8wcWaWhkZYQWd4nRZtZZuX",
  "key41": "2VzU19TKffSUwuemZJ2S3tMawMTwSZVmeCkkoWyEBNngHK85ZcxVgbToXcz9uquC7JP9aAEuC4PpWpfnQXhbRkgh",
  "key42": "5ysSrCPeERZSRc3acUZDbRTuzjJ8UCHGrA65ywrR3SeCDwEfv3JPsewTArDxjBT2Bi3Z7ywAobfSibb9c7hqLHn2",
  "key43": "3JeQzWRifqS6qBVE3qQuXTibvBgkwLLeo53YFvCR6V42MvtVp5eoBXyyzUWjg3MtSFUDGJC5nEGkbsUdw3rwKJUX",
  "key44": "SbMfoYuR6Z5RkvNBEgpkcLBaUsLvTBYziGdQ4kEKTUoaa3gwGgFL48xzrApY2cdC2ReKRhSWQwv7dYxctUY33pN"
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
