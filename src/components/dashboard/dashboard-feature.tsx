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
    "2gPeagevjTj1TsjTtWLdx8bRv8LeFwXhrngKw5xsPoRVRgt35DP8SZc7Xh5xWiH4Aod3gGBRXpVAKbMscf6Ai9be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8cE5tsNC1VKJbdP4TeeLEGcrkmnavZR2QhJDf4xaysRwst6ZSGBVrosNbXQCzekBp5FpDUDCrNhoamrCKmpr2iv",
  "key1": "5jA2p5eqznazomz4U2Qun2aBPv5oD3spvYCqfSPnEG7C6aPAD9u2CTTrRX5TRWBWA9ja8WRLKq736Mi4kGxyNJ4n",
  "key2": "3zdkJHF3AZnA3rRyfmZiJeb9uUtediGetDP3swH54Xzbco2D3jbxCbmoeKPg6Ft8chKNAghPC7J7SPWg9SC53gHR",
  "key3": "2U1ENf6ba7WuCVU3skjjUnm4rC9jkDVM7KuPTWjmiymPbKdU3ZrgWGAiJ5i6ZimvbpkSNWKryMfbUC52sJo7pQpS",
  "key4": "2xv3jZTBre4pfgtH2R9kLTUcTDbzjkwGjgRS88X9VWMxbPghWuESfMeCpH5vFi8uP33KchhaTdDUospEpPJRCnwr",
  "key5": "4FcSH4buRC1GbaL1imTrrtei1uZ6XBSaeYD4YHTf6aB1QRWfGvWXTduW2nSL7sEaxn6mr3x6vYi49pzPiCEnbApz",
  "key6": "5AkCEFxV19idHjUKgXFmL2YcMKK9CbUd2PJrn6VFfFLVXDJDq5mbKnkvMDCo5fj8PGGzixdPXNXuwRhhoG87RxQG",
  "key7": "5UKXAUAnoFNd5vX4oU3XWFpGAy57Sf3FUsy6LSXMWpKczfxnJPZ9szhfEmizRGHvVAEksbg4KVw6pKRxngrkJqQn",
  "key8": "2hQNxWNsQuLeCqTE9BvS5qxFhJMH6W4sdR9aSb2fccHXpyG6oVE3QTCjzoPRz5Y2YQWojxNyxRrgjvjVZjGC8C1b",
  "key9": "49M6WjL1MQepg3NKVYeY2TWo3Wo3XimQZ1Sgb9HEvvuzEA1PiaD4EN8eXsyz2VESbQvCdh2d5rU1Y8z7Sp17HA5R",
  "key10": "2W7dFrVbqsCvpn52VNyrTimLB3tbjJLYdYi2EiREPpz15qhPNQbgw3HsH2UJAarHAUF3LegqkxTq2fwwN6St3uvj",
  "key11": "qNyNuMoWd8m3URQNpcyC81yjnVfcrauW4SgxBp2fkUiegxRbB5PxPfooWwSPAUiLV8JBoBphiyitxAA18jFKS5r",
  "key12": "4SzgWg28yUHt8FPJ78DgF8DQMM83j11L5bLNRbPNJxHAvRzMcRudbsYDrMKREeZqRyHsmSPD21tfbwRbmWdXzSP5",
  "key13": "3vuFpcQQuMswo3NP5tEpL9VfBEEcARhSXkJgvGEyxJ1GEj3ggN3Wos3pRGpo44W2MoFUJ3zeujnQet1mWdhLNzds",
  "key14": "2exrL3DAisbDJYfyP3sRk3D7yLSnUfakXTmUatnGyLrq4sYwZhJmmo3iTaApQp4kPJDx98CJNn9quMsMm7Ji7QfW",
  "key15": "2q4yfwckr3UuQUfvPRzaKzQK4C9koD1XT7ZgbKhGKzMCCaMJH1rsrUWfiMBBbw3nwFhXJQYT5uyFzaMo16SonqPs",
  "key16": "5AaVnWukPaw75J4jz5An7eWkVCX9y86JedsJSXr3pgamxsWVdbLD8GE1zcTLY3rUvmo8EbH56gBem34btBbVLX1v",
  "key17": "XYbXM3rEPJhyJ4Vxtt5pMp9otsj4rSQtqj3xiL2FWzs34QMPf3EotXuEgXQ91Ap5JvnkM1T8gDW75wv3t1vy69C",
  "key18": "wQAGb7JxRrqfyU33tiu6MckhTgfuYTM25iDed4cpFiUsMtBp6b8cmvrLcZS1bqrkDgtmkG4SQ8BwurjEbW85CKa",
  "key19": "2pYp5UZs6PBNZ5ko2nYYp2hWchFh1jDiRA8bxqCWXjALGw7pc63a2gt4HiUUNsEAmp1AjKnvYSB5hkTJerkypHn5",
  "key20": "54fwtkirKiqpZSdCjUHhGq4NDKGMehACu2GbB3ZP11iACfZqp4XUtecnRbPNtfgU7pRw9tJtsQdiUhpeiErgM7EG",
  "key21": "4AhWbBXFN47JRaCuiQL54DwUEo3SbV943UWT9pm8tMAVuNAc3JHieW9auP4ci2HG6fnGRa2zt5ypuiY6BGbkeZ21",
  "key22": "2kuuQiXeToYthFqCyJr2Y2fZPWjZGjyfwTWDECk4139QiURNGUKk4fdoyG9F6VwZBAJVemYS6af9M4RSpFfvNMBX",
  "key23": "2PMVxMYf48YNDBAXFXEwf5D7ZDPGXM6YvazNZh9K2aFym7LqZDP4VexL8kK85G7b6rc5c9ZfaudK3znJRaojwwwq",
  "key24": "59FiatgoHuCgZ8VNnYKqRKfcUbykjW6avWt7xJ8iqwKUTVRmheBNyjV2ebV12C6tnTrV1amF1noCcQxJwg945D3x",
  "key25": "3zRodizdCBnR7YbnSCCT6crmBi4pjQ24EgWvrGQXNcNyL5ZPPMUQd6sEAxDMhYNBoScjg4cUQPh4HFjdoWAhy6Dh",
  "key26": "3z3deYs5ps4qyPvh4yyTYgJTTmKSE974kiC27EgFG3hqsqipEMA1T34C2VbCpCwDTQXiPkfTG2rBp9eTwiYedEA5",
  "key27": "5wmkGcnbk5nf3VxPfN7WUKeQ1VX9WpNGD6VFpreiijY7oBNvWGW1sX2mZprKqthrkBXkSLHADHZ8yzC44rqjUx4z",
  "key28": "4ZrtbDVKztH79JyzvBeqMTywgn8t5w7iG71G4gsRoECpwAJs8udtUZ67TVVubREDxAzw5ka3HzUWZm1MyrMaFsyJ",
  "key29": "4uuUXiyxUStbY1Y2pTPunLfLUFx2jwC2gyTZoqwyZ87THLGWHyDmFEczmvSd5bPsaPG2ZQjiKjNcHboDAYkZJD6H",
  "key30": "2KPbY1mo9b7fk2zwiFvmnLEpoudc1KM7Mu21SaU9MwKCDfE85hSjBkRfwxMz22ZEJkRKXbUN3cd5j2UJVyUx9de5",
  "key31": "3YoHdCj6wAJYSQC63Qeh7pVSGkgAf9BrYk5atdFZq6VAaDCCp1ruRGXn9PQEzF6UQMWMD9vuvdbPqe3xj35K7dDk",
  "key32": "3WmFRe7Efb4DAfaBWF3JD3KaPMdFzNqEXTVMagprSRha67kyDU7tPqL9P1AgCiHq3ZYTWXPKPux5Q7dzv7LvGp4u",
  "key33": "KqKjgxLc7ny1bEecYiqf355K27PnBJrnEMs1AvbPBqjSPZJKCjJi9dvSfEjoSA4PC5AUuN7ZP2uBdwQUjb74wW6",
  "key34": "2eSoX4X14UZw1aXbDPXTg1hb13QMDVFFfd3PZabptwWMTFusWoK3hTHLaH6LGmutgEn8FYGYQPMS812G2PmHNaUZ",
  "key35": "4o3EdPX2tCZpN4TBYJapQXT4UMYQEtwndeaHQGefzc6D4anZsSFVmUGL9ubbqKLJJCsM66tDVjoyDrqX73asPQBE",
  "key36": "5w6fFJTGmAk2mxidTZURZW32Dmg1eYKLU5MNtvjF7Qn4zYbkpE4NKD95KeD7SUJBRd979LWo1xCrmDqPtfwVLP2r",
  "key37": "3n22QXwFZg2nFurAvGCaMGDaJA6vt2Rgh6JHcS8b2kBktkFLWmiXUTrjYF2hxMMRMSQAF52sxNYo5ZXRdQwp2jmK",
  "key38": "2FmyVKh38HJ6bvj9p9AiN5rsCjjLiQEGEsL3eHhtGV7hJ7RynvSmScGuzabZAkF7goEnSB1Ec3DNDKpWV5TBAaet",
  "key39": "5j83LU1qdrV9H4RwrwPG6PwBJUEWpQPdLHTfEGeGjp2Mw6aAwdQKBtvrjkopsc5CPZutt7ZCkxVCJM2VznPn64Yx",
  "key40": "2Rqwb7SSEdBacaFM7kHu68yFiX3fK3B6TqABeLrats3GCYfhrtAgC5JPbZsTk1PRCSyPT4Z8ZrDNznWSqTDfSyfh",
  "key41": "5fXN1aKgkfW2swgkSYqLfPL71DHuNo5wru7Tr7mN9id1sivQxEtZv4VoSgpqLs5x5NZPdRazAzsBWabEF4yNZwjA"
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
