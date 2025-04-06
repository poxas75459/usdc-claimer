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
    "39w69SdaE7Tj7sJnzsaBcBTxxheLDHDdREGXEgkVMC6bhbEa1wyVPsYhLDBaKDLxTjWtLZguYtmeMhsvujCikTWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xv9FRJAZxpMGMFGwHv2iQ9mKruWXtxtBcWSodUB8gFiMBnNQvGKzynNbsCdioux2MGYjFB9fHZrd1K2rjorepyn",
  "key1": "2uctAtVBWS6qemwP4UP7xpFk2u7hBnrMEXTf51QuuRdNj7voKRzBHDGNcUpgMszTKqSDMdKhNcQw4zJcxho55uru",
  "key2": "4D57NV79NF4b1Ck6GsQ5wAMG8pL6SmZvrVjFrcgbimfJ1gFANMoDXmSQHc8oLWvTxV5Bquf3XuaAwaxzVyLToaHd",
  "key3": "57wtphknG1AAeLP5bY5Lpk9NgNroWE8TzVdTHAwzSVdgwAUTdshhnGwCpmeJvNV6Pu1NtJU5HVbH8hWXM4rWiWAu",
  "key4": "3Bmt88vXkzEgK38GHC9hCPDkcAW382kXXpGfjmqvxehHhrQziz5MkVG74qvT5LYYtcmQ79vPojiUiBQtvSAoRRLj",
  "key5": "3RULDadSYAJH61qTPiJvjdRpokBi4NvEN1s95VAPZJ4WSkDZLHiBf6SNtk651FbPf6rfpma3S73n2TuXjSkxr5Q8",
  "key6": "252DE9nZwAZR4YNKkKSx2JJbW9bZsknVziUjH8LTYMBMFcXVwCgPvHur75aCZdynEXRsiT3kZFwPugks6s29DyMC",
  "key7": "2GXwRMXWadZbebKqmZQeditDGt4CtnRDuPG9KSPj6NxhBemdaQXhv8Bqoggd9nPYCQzzCWHKzLJPwq1QjaXke5kR",
  "key8": "2yGtit8QzhW1YJoQxc4hFdjan9nX5hs4deXL2i9xUDHdQ9eAcBnHpKVpq8BGvssCawxhS3MMANZjhWLvxUjt7hFW",
  "key9": "5LtnuzLhCinCTPgQwcdFfmpfwXkakgntEXRsya29Z3Tgtx6czKCz5a9C1qhyJwjHgKpUvhMBdV5ZeTyTBeACkXQG",
  "key10": "ajzBRmVRNzYM5W2jxDH6qVaqsYge11V8jeJ3ySwxPqz713h3S3R5MGnU1asTsUJA1HFnSzfgorBh1bWXp9Jz5ak",
  "key11": "5dCBjJ3kfCABCQB5k61nUPkQWvbB3wSSeFaPLEPJGDiU81ZkgnvmQNXtqRZsYU2Ui8PUGnTGM9hq9JB6YRGBP7zv",
  "key12": "5mKKUnDPMuLHCKB5bUJzgAgJZoeniY1fbexQ6oa7oFeq6bAWv7KhrPmTVnvheM6ZLDEoGZpKLUGb2zgeJJZ43BwD",
  "key13": "2d3RCEfs9WaoEQiMRVKZf2BEUFRXvud76hYpTMtDWCKwWTd6fPcaYDfMqEy4Fg8bMENmTJQ1i7uWFZySBTBkB8Am",
  "key14": "2WHnDoBDc6ePQ78qUeZDAGBChEbftUVmbG6YX7jWApt5TRE1iaPYgFAyKGbLe3gjksRrjN8VtCE1wfXrxe32zxLY",
  "key15": "55TfcHm7BqBqFubkuTi7C2j7RTwfuextZGpM3hxrDSsBqw7A1atwfvuEuBGo3WerRRGKPed6LYXJPygWDSeY5g2i",
  "key16": "3qdW2ZkkY6PWq81ohmPAJpH6jj4Sh5qFtdffqXnRcTn3MtdMLexX2Ge5YYyiS1QofgZzx9phKqU3n2QcKkAWJtMa",
  "key17": "5p5svkuS2bSAjJqFmbjXFgjqPmfd9yNsS7WVmu1zVNg9er562qFzmdBLFKuffNFt2Ac1XSE7gJWrEBrUFFLQUFLq",
  "key18": "4qVzjyNbHePydXxxASNSWMhpacCm4UFLq56rGiofeirdXn3YNtteMMb9mthDwbELQwoGiMZTL1TLJmNY1fSfvWHp",
  "key19": "3j8AQr3nTa22UWTaouCUHsquiMTgFywH4sWQDkJR5Q3SCwrEhGCPCv2mKZSn3hWeJPAwXZZ6RorqSBqy4fYcK8Fv",
  "key20": "3F7cZXrENzFZ37BxoUA3LJXaPAKqqEzzM7EMtqDoC911bpe4CYV6ynRYn6thZdbVwnLASeCTaKu3wS4kGoxqFoM4",
  "key21": "4Y1PYb32cF2U2FmZyZ5dqZ78mR8ULYrytpaDkgu7nVrkYBgUK9DhjuSPkRuM4aeikMnejiGztbW7tEjKrXTDVuwZ",
  "key22": "5X95hrRZFGuXi5qgKSWXpzZVQvQoWQg2FMmqFk3DKLEQ1gcShgtDjQT1R7AR7dZ1yYJ5yC9jSvXgjpDch1P1tR3n",
  "key23": "2QsGhr7sspFmuPSiv48Dp7nJJyHizrmYYE9JZ4DZ5yVGMCj85GhHuxwf9hWMVubf5omLNPWQY57Nqwk2bSzPTmCK",
  "key24": "3m4bhojgoxGjGQWxV1mvXREoStCxBTLQGMcoMXB7CJ6RXWUbHuvT1T6emooQvXfBB6z8D9ocrJvV8sNMBc5t5a5B",
  "key25": "4pu2z9xgqYE46DcwqZCKcrMKEM2WxrPvf91QWKTCbwF6hkcMTKZnXUBPWUWFB3f6pENasrwiAUmyTW1NoxZAW72P",
  "key26": "okLosqjJPUWD2cN3tPxBTyXwSKKMHebTriWG4rJYUqtVirL6WbyKkedXag99HC3MPWA99xHiT1NvpTVTLbrhQKU",
  "key27": "2WmEpQf5nCFFBUGz2tWt4g2fbRcrxbxLKJPrFU21Zm6ZHPhZX1Y9fnnziXJSLa312pM1HBBzLQ5it6dubsSsXJm",
  "key28": "ocdvizKEQ8jWTAN9V1Zi5BzWeTZJ6pz64B6ZZdyC7uYZUAM5CsYyfiAyysKQbVhirYduB3yPd74gPUgNuYQaFSQ",
  "key29": "m4n95GkaPp8xbWJzmVgAiQyPXMnpHWR3gY9etdvfiHLms89BqApysFJNbj9T61B3XivtJ32XZkHWBYousuApmL9",
  "key30": "QpjL21dAFnn4TGRXrdiTX1TpzxYU2dGLxkk6Nua5CpXLbj1QuxnqR9cJ5Ys4bxrE2AZNbucq1pBntqFuCLQJyLM",
  "key31": "5QRH2Ybzg9NKq3v1m3pmZpa3H62wR3RHV6zeMBrxDoneZMyUndddkUoBTfpf3R4DLRrR4Mh4nA15zPQ6FfAftm85",
  "key32": "55VxyjF1MmQkC62Qk85rcj18c5FofMaLc2PxepCcpC896hhhFfSWfjGj7iu89qdSaqn3hjS8zkLSkdo3uKDkkncR",
  "key33": "4LPSxmtLCxHu9sF3CxtyaQeDcPst3Z3iSfWxstoojCgiHZPNnioFZt2SuJwKJKbTfVGVwRznm3Gv8Pw4K4475W93",
  "key34": "xUHusAxWcUWndvEoLZn9kffKivSa22NJdyWob3KWQPJXSPSPXvZXhbkP9hHKV5n7M8HGaRULt5aeyGCkgyvUkgG",
  "key35": "fJgMHfvuuCFWA4JwTf2VdCyjn3UmWxkbMRV5Nsdt22p64ho4gfkiJAAFyK2NHU6DWGo2yQ2ysbYwzpr84R2Xg4t",
  "key36": "YEQKiSMzkMrDTPZF4gE7ejNE5aCcSQGyGhPCwT7Zyp4VQVfihPDF47HFRYMewuQRThYowpMWNz184otFVhTPfEz",
  "key37": "4RYveWJmV9dA82KTVQF5kQkP8L3P3ExRSfAE8Wmuq2XHcf6pPFNbJg6v19shiXRCPkeaq89cK56seYGeLbbYFvap",
  "key38": "5Cmneifx5dYE23tiepu3mWkN4HjYkrKnCdjoGZV4nj8rqzKgcPK4d4LqJtLuuwNqgjLspH9k9uUcSsxG9Xe7pBGu",
  "key39": "4QPBqw7U4Tj7qEtkFogaN4cxMuzHVGjyBpZPUJTV69qr8zgpmQ13eaxDyACLeAV1me64zu8QTpRTJ2QD5WkHNHEe",
  "key40": "4MrKdSZw4thYBcqr9afEKGWuL5PyGeczUQDRhYNHrdbVxRqQrvKfvbP4R2p5fpWG36kCTCEqAS38YQ37XPWLUoBC",
  "key41": "2HSiaE1NMx1bGASsg6bVA4AzUjfoiN17UUav63ZQbYZKyy48g375FobPuLxtma9n3PgCcsGSUfCrbMVKUapdHmW7",
  "key42": "2bHKDNt9S7K5ngPFMymnzMKgPGhm1Dos6kkUJmCBoCk65WAdKmJffx4p5egicJ5tuqS7p4r9YBDhtmAyNnkndYfv",
  "key43": "3Kkwtmg1vgdrySti9AKhLiifiLDSAXUhtahXSC5Q1xQHpv4MuWCLrvjWKTZWVJeHMiyn4YF6WxYumfPKY4NGpfNM",
  "key44": "3QJ78pytoK6vruohDhsj8apw5MuvGD62dJjPMXLJqmzKN3fNQXE9i4t7saF2N8FRhQJtE5drcUqUJnqs6hYzzhx8"
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
