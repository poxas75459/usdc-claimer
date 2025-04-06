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
    "5nScsUEGn2nbtfjsdxUp9wdc5Uo15M3YJx1akAcjsB3XKfCkvfHKFDy1XqPFAKxzeFbbYmuwYpqtqV4A5AVcKqSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33551owKi6tRFEue24k48EJkzktw3zpSyQE1eeuUyT2Sn1ke2rwwwSygciYHEgCCwkRVybS9zc56sqmkw7t5GFGL",
  "key1": "4RT2X3ksDXcZAed9s6gc6ETofpzG1s9Egdwms1zY61uULQhedWakJ5Chfqo31V71Gp5Krw3b4NfntxdnGhKMyitC",
  "key2": "4YvB28CKjFhSC9PtPMTA1DWarBAdzFRyevH1biLs8ABMynmrTvif2Zt24RoDw7E1vPqYgi8H5nHifB5qY8jKnqA8",
  "key3": "3GSHZrAdSfjBN6x5gJvrkyi9mWoHa6RT912LKPkDD8h2wBHmyyx3dNufQf5CMSNcxL3MG1nWrJB6ykkRsNosGMWB",
  "key4": "rccrQR7azpzKtCCCW7uw34xrbDzN5MYQZnC8au7pbXEcy3tMmSAsHr8vw3cQzWg94dLBWGMNXf9gfjhbRxyjuFG",
  "key5": "5eAmLyAZkeeMvSaM24nYt8uMbgzrPXWek8kJVjEXTCftquGBYmUJd869BWz4guy7KgaZ7Rqm8ixQuXMtf5sVeJLU",
  "key6": "27zsdRnMTZPvXX5tppdEeUZB33oqjbRp7LejNEQFMGpgUqZygxCmF2SR3jkaTPpezyVQHYXqb7mF5dF3KKDkDfe5",
  "key7": "FQeEAzsqWfw8h21UVKCbwHsUCgNTFyQCwrhPyK9Pzk25rvM95rbEBDQDyL8U9ZePqwaaTdP468Y6VRjcv72R3QF",
  "key8": "TbLFMPmGxSUUdrueyaBoWDcxT6JbP3zY92en1RJgo5eppirTTmR8UpfJkEUfzn24bBubQD48eAyoh44FoC3fCtN",
  "key9": "P2Vnxsnf1MxJQcTER1c677G8naBDaMo2a91tbbnxfNDPkNdcEPYUmV63qwgdxvywuZXArnbwK4xDUFtTjxNvk7Q",
  "key10": "5ChruUhQ2tpXeRbcmFTioPqD31KHuUHQf2CFDJ1ikPDRVRRjcqB8jXVoA3Rwhtp4wpBACiUwoeFjKYKYefizTko5",
  "key11": "2u7p377TSY1Kc6JBUiUbby1SeTJmN49Mx7asg62BARggit386G1ZLrfXFLbVdZkZJfu2mrYbmASTAzwCnuN3Pnep",
  "key12": "57z4M2kBuPjTB8T1z7TZENXdqnzeLRdig4xAL5z9HZkFA4uTeMuthWzwS3mn2g38thRnoPeAk8YRfYwswN1v91Qq",
  "key13": "4maRBZj2VEw4zc1ouUvf9YZ5DY63gXCRwRdNaRwHdHnDgVhU2AzV2o9cZxoFTDvWxXdD32qU1pLV6uiKmbyvdWm8",
  "key14": "3Kb5MJ59oP3NnmKKfE1CCarg3TsGHyLg41vSq238pWgkEgx9LPfrwbsUPDmrHzFRfHg1wujMecXErjgd1E1RMBjQ",
  "key15": "5RHrrgnJCS3kVLUPnkoezbEdwPn8dZpET4xR94tb9r6zrgXjtqk41xv94EQgwz2KV8ssEyw1Kjs1sRMQtE7vdTFp",
  "key16": "2MgsLMKMU2RGPmA7y54TkrursSXGYf1F6EVFRVP1zWPCwVMT6yLoSWvsf8Dard9LCXmvyqtKbxzfUuAQes7wQbRN",
  "key17": "FoLGHckeHPtjdA6zpt9X1hAh7TAHAFSgxZ1vPxajP6dUTpxPsznWZQ8Nmc2GfQZ77gtbsfFDd2xVjbrLRN1BwWG",
  "key18": "4iFXsPxz69Ftrf9iPTiBB1Rko4y2v7V31jUrPL6QTVFwoqKKwRUnWcyXRS4GAnivKNJzvb3FvM1WncGLQVhGNBns",
  "key19": "44qmxqTkifjVFJV7EG6CVU3CXwFFLf2SGzPg1FmKEuBGaQST1mF5cvWpPmez1oLLitDcmUrEad53aS9u6SMaXhfP",
  "key20": "4DMsDTBZAqbcBtWdrGgJiCxV4rwoF9hVVtD2vTNTQ6NiYiFEijcHMoDCgX9yN2c2WacqWqsJdK1Vafwwm4hEcGST",
  "key21": "44PvcsukGWBqA6xd5btLLhZF5xDY38gvUwTxTzwKsHWtnNCUm7hV1CBvBGWsz9soiog9cgMwdZz3CEEPboDEbRJ7",
  "key22": "2LAZELNnkkgW2uphTywvkKJUC7bdr2MFYdgR4ALuLtGQkB3SPvESTMb5oGwsqsQDJx2XSWuJgA5Cx4d2qHb2cZVD",
  "key23": "42WuaBgujfXArU8Ad6WeVb1ej1U4rFUbo9nGoxGibGzEYRtxshG5PWmpkemZSuzzZ9pmWijEfHu2THwUdAXEMzoM",
  "key24": "4QCNeejc3HmoH6TKBjC5AzZkMBfoebJu1ojfTxz28cnmdLSMPACGTWA23A1iaRC2Ab9N2DQ588yC1a7TNAbr1zjm",
  "key25": "PkE7pGzH1j5A2S8zwLErfxQMj8KdSkPkfVCUiAU2pD9MCGqFBXQzebwdaJZ876EvHeC1iDeVrNwNQMCF6EZ6Kek",
  "key26": "5eKyyFkppwgbW3KRESXN4dLRnHo9YKsHRrsTWctcmVJwyzpq4JyKVuUXgruYGya4MXVgLhGtBMEhBrtQjzojJ4qd",
  "key27": "2wQerNeqMjKyLQ29CbyLTsZRgypUmox7r9xEbeVaEx3KkZvTHnyRPhFRuo6Yr2WoZoppozBUo2urZ2HfhgmHfMPx",
  "key28": "39GKkK98SwmT3x7YVrbQgjDeDz2fHCQ6wASHVoVnoKQURBkp78uiiqRhvse77ZMbeDZD5iR56JZre8UUdt1C8YWg",
  "key29": "4eHtvynEyoXgEyGjANfm8dApcYQMk9yZS7mwyVNnCuG4A1z9b6nPPtHkVxAWjkNc6ssicFkbYDgGJrXUnJP5pyhn",
  "key30": "KxbfbCY9E9N1r1w25m9nt7EqAAkMruPieS1jrYECrMbww1Sp3WY28xFECKnqXcs7jXSGTsNtm449UQvY1F5KE2U",
  "key31": "5sxwp2AMkziDS8ZiZo5ZRDWqKLFwcMqicYecZ23ZJpgGN3o2HyocSUuiLcoMdRELPLuww35fgCCTX2oHeCf9e934",
  "key32": "4398brFfQ8Q2iSB94MKZFRxa4Kfbu2AJZjrtsYvisqM8cEwGUmmaUXwD5Em5LFvZcDWamgLojzL7mx8KvHcnEDdk",
  "key33": "2YfB3K2MRnU5SNDGWn5jCM6auZGiqLo8t2QAxBrFHvDwokcCSMibCFtoxyaC8MX2psVXeMhzuaJp4rQ6t8f4RL5G",
  "key34": "2eFWGCVeu3w6uTQ9ipXAfBXQKkpvwCYNjqHapoAGLgVXdRiAQ6T39XeiG4gAnHn4CSc72MRxwp7TTLQtMyD75a1L",
  "key35": "5Sy74jciLKwg6pw8qgXMcBFGgb1ZrEvrz6LoG3utEbfCBw3eidWciWS1r1kbHnwNdeYqfFgJuZ3aqwGBmAQRHh8a",
  "key36": "28BgQcgLADD1sgotZeX9D5hZkRH8dgoEfbW9eeVXjB8dTDVAo7QFRfzEwpG3ppgvuttHFfaSzkQYSeQ2vMbLyqmW",
  "key37": "2bJ9QWEKx4s7bZvrZCUEWktX4oNtUpDH4TAXENZCyAihE9brc22goyVKtrGF1SetAwxAu1zBfWeCGhurSSj6jSSV",
  "key38": "gq5f7bCeXFP6AuLE7pfWHNX8TM548RCY2jDYD9BDrQ4z91537CPZtopcURWMNNPfiYDbgN5gbRmDYeRVt1Qh7bV",
  "key39": "5cVwc2mXDzNfR1ggFXTPyrVtfGoNV1GXg9LpFpChspbjJPN7kUDsRDh5RQMvXCfUMkYKfE8pZWv8bJ9oS84T3ASJ",
  "key40": "4WrhQqUA6eVJ6YSJqYKKYu9nvifuC6LjSgUDktLLvYdKKNxuv426mkg3fZ5qn2j7r92UPmZDspHm2wr5qmWdSEax",
  "key41": "5R6Qrj4Xd9r3mR5ffAGikB8QgHbCyt9J5sUkt4CKTJa1BfvQxg5NtAmwRAVHQqdHwDL6wqBP1eZVDU3ZLfZ4nkdy",
  "key42": "5RC7trwehCqo3fxscDo2ua7wMycq58Jb7ddo62cjxcbiBmTsQeYqhPnPNVoGZWMyyivpeHmWUvTPMLoaWYuxiRGu",
  "key43": "2A6vDga4Fp4HfqEKrkgpjyQFzyMHDrYxLPn7RWovaJGcmSeL9VzYQ9tkCoWsYCar4RNjBPRbtdASA8PgVCT7MEEo",
  "key44": "M5xZEqEGkeer5x4hsTUzjmSRKP9mXCme9SxopZpUN4vQ527M6ACrXUwQwoPhNyzcM5vjHJUj3b6TYx85FGJpJav"
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
