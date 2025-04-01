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
    "2HFFd1Ro1jd67Q6Yqhvw6uRzoqVidkapTPS9n4gV6Rxyyg38sT7q58QTLdt7xGeX2hgfpgADa3iuGpc2sjFiCgr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41B7NqFGrqbMFtMQExupMVBHDckRUSHTohQ2F4yiTaKMdSYpyNJve8i9pmmb2J6VoQ1h7BQpfgPVLGWg4qoJy7ah",
  "key1": "3K2hv9AhBrhiwBG5HgyurEnUnbSNgk2SSwvzmax8WuEARDkgbHEYCsEDnrQGjQpEqq9PHikjXp8uatDdcyZL8xyY",
  "key2": "5gTxd2fR2pqekucwqQKVaBhgPsu4DonjA9su4ikrf7hfPhF2bJ94xUjeRiHSzzBfj7bqfoT4DaEf1p1fWsqQSsA6",
  "key3": "4tp5XJ7Y3R6aLaqfcFsxeLas96sHh88vbd8ZjH6G7gYig315jzUW9LDTkpwQAr77bCguzHVuXe3pq5Nhcdc9Z11G",
  "key4": "4jYeeGrgCFrx3dsdz4xoaknbH3WZFDT8fdoV9KEWd717FQ8R1hLGtJztonB5kiEnKYMs1TGZ4xxGSumi7kVwG6C2",
  "key5": "5Dyk3eMNfmysJfwj7MZQTcxpJ9mcgTyBXyfBit5rx6oAtZutLHchdfHnTwNENbPRENmHrSx4F7KxDxH8XHqAyaGr",
  "key6": "5ZUMdw6fFfAZ4N8vLpKAYkomv863q1fyn7bNg6drxzi4eUybWVyJHAkW4YcpohPLt9E7yWQUKied4d8ojZoCdq6a",
  "key7": "2XGiX1iz6HbM8EBkUQnFqvJLNk1H9RW2i4nyyqSronWCe3ENNWVkdyrFNr8jrJk7YHtsXGWbGxSRDt9nNtuDB7jj",
  "key8": "UjPCycrWaCe9hpdcN5yNkSu6bzZcB5dWqGH1JzrJhRiBERK89VUpzLYvaASpVuh7aCLp56QMzxgSio1NbULUVKf",
  "key9": "2iWpPSEkiZbNbM1BPvtj4X7FmnB2Re2fvViHYJ2Hum1M84Abed8bJSY9nVhfH19hE3u4tBZacj9gTXeFW12De7fn",
  "key10": "3X8i4QqTa4dfoujCrXGo1C2MMHoGg4xsar8916QL2tL7fZXfFiUNaUMafTGxgdjV1P4BokeCWssFwW5RVydRThbi",
  "key11": "3iKeBjuYeoUnmwJBtNzvBQXNPCAsTFLAYqnVhQWnchotNKminHpCiR13UuhPD59gP3FDuBsjXbjUZRN9EQbaT1Y7",
  "key12": "smaX6Z7sqAuF2MLrvLk6MwVR8ZECT1nk9N8aN837N3d2h3BbB9WSVg5DWKEVdmjpFh4iJS6s7aTs4jsmVmwEUdW",
  "key13": "39Jvhicg34qV4ueYeznd5vfwnidAoiRwjk78UcdBGSTgfhnXTMWGGeHZGFi7Fo29Kr5C97r5MeZao6vJNbNggoDa",
  "key14": "2eg6EQa9MYfkFvGrFM5Ps7xT7CqMUKC9EVdrYSekkvrU4Zd76gLSysECt2vNndktyMkXNFiJLVosUQ44dboqc5qn",
  "key15": "5MvPQVwVdQPFcEVJpjGVnjVMgXr8fHZ8njXzQFkBXK2CMGyafSHbbCQ1v7KDPzNwn9bcK3qhW4syVswK7KKysWE9",
  "key16": "2CUt5mG6LAcHNDbCDM2XwwBttQzwfXbHjPYBWtKp2HdeBpbXZdN9R8E5Wm5L3krJ2BZHida6GbX82STLdXrSnuDJ",
  "key17": "kWMuwC8wy6k5dpwuPaFMkYSYbQLGf5vHQ75jrcQj1BXBdzUgqh4opLCQyqdDHtuCHqU9YBwf2qYo3qkK1r6zHYZ",
  "key18": "P5E9oGLbYnK5AhgNiHKAd1GbNzHR57MCvnyU8DsKw9Nxfa14NxFwDpzsW1xFqc9dApjnz377mtDAPAJ4rjStoJk",
  "key19": "bxUphYkM8Wo7J6NQM7BSqjkJdpWY86gWygVESiFHzqRduPchtvaiAXiojyTtNL9ytfFYSbjcPZHFKZ2YoBaDXXq",
  "key20": "2HzAA9NYPjzxGLabBCBHsUJajcdXSd9DcwiGefqrLR5AcTfVkkYLFWRN6JQVu69rMXQRQqsEFsQV2kpydetGjagd",
  "key21": "45Bai3xsxN4QiXVjBuZrqMjhLiFY7pYLwbvPbwDpDWdwCsYCcJ5tcRPqScHG2QScVkPx6zcwcGhAiCmyDXgX1KmE",
  "key22": "4AjGdVTUv57xD4u5gBrHMCC2z75LRy5zKcg7Z7TRKErxvoTnHR3yeJ4zi9UeVXNMRsYECWTd6sM5Ds7sdgPDxtY4",
  "key23": "4MLLCaouRuR6vFU1SqXq2mzunDgrdVVGW5LCg9AZ5dqTkvRVjycHtdZrs5XSf36UhwPq1xvdcuFa22KUEMopjVGy",
  "key24": "2ktM1m18LEVmcWWazbGvXk4mPT8wqY3hTprbcVAs2S4JxFrwGxdtmHpQ8B4NwkmhQaQ9opfwVx4bV4uyMDpcDxL4",
  "key25": "5B51a7xB4rmAga8bRfKC3GXMWaQhzmRD7MS9HpuJsqxhxKAHKF9bECWKdNDfsPD7yjwAnegGgDTGBLndSPSJEgG",
  "key26": "3XjDUHvcjoftGc7Ao8VPxetm2PSzq7n4MQ7QWh5h44B3tqqZ1rc8x3RwDo81pLmrmxborNyaH6puw3jAXecjGUoS",
  "key27": "dPjMjo9mo979vSMgViLhgerybNW5exrBE5apyzm2Gze7hNzX6XDFEzHwWvm3PpaUjetm21Xe6tALtun1KiHcAL4",
  "key28": "L5FaSSMvb4sqnPu74fNbE9KRazKL7WAJrfC8Qk2mjSiNRtFhUJEgNxPzXGLGPW63FAAL7KDbg6qiNwizAUGyYrR",
  "key29": "5CLs674Dn9CsZeJdpU7Wv8YkfGDaZuxj7Wz3Bpqykcc2GQPTLkjzJrAssFoQdy9MwDFjivxUQGf6GXyyE1m3Ewnf",
  "key30": "4SJYfpDpwRLVtUe3GwocYLECbymi1Dpf4QaZYwxP61kFgVswikD33pQv94EpDQsndbE5NzEzKmoeffLnhLf5hhFr",
  "key31": "2RDYHQgopdsHQWtqHrDGojCFudJTSiHsZRgteGiXimkJgLAqH6rPgjaNhtrYt7ehBHkgPsqHa1gTLfwNT14isEkC",
  "key32": "2zkmpNRBgPyQ8EuDD4wCHJbVKXe4MZ92kBa3mbtCbm5ppZVUiYfiPozWHTzxVywoDpatygDGbDhGijdc4fnztRdo",
  "key33": "5bsqiuY1UC3b41tZztt4bK8wupTFECQQEfbJQCmhvJVQcEMoKENDc6GehnrSjxanxVwwEejWcFqYJYVyakygWZ2P",
  "key34": "5g7mkzz6mYNLmAspJnP1i7j6kNESsmFsMP8jEAf8eptxiMQfT8uCKcXphn93SP2bfjSUqy2MLixSp2aWUDBkUEsQ",
  "key35": "3UDSW3zUChN2KBdATiVMnmH1TbkRqgL4u87WKvasVApM1mNtf9vc6ERNnKWyUJfCNjCtKGLUyudWfntzViQLGSSv",
  "key36": "5ngAP4kUkmimx3ybK2X6opTq8rhrCwi9enJ6dmPJnuyddF4fGa82wFngvyhAu52gSKkBtp871cVZnwdX1tKkmX5t",
  "key37": "3wy4p5j5vaYoTxKMXnmbw6JxZqDeZk1k3yhdiD9yzDe7TRgGMB83sWxJayvGMrU3WVELB4zxF1hzSsMkbNMswRiN",
  "key38": "8kh86G1a1Uwxou2Q3cY6mmx6goumFdd8MCf3G4MfMbLSkm47aMwH7c5ARbwCngmqYCj1a29HJttUQXcVGN8ByF8",
  "key39": "2iGWxNCfwfETTMPhcWfFbTPefqXXtTU2ne5bUi2esgiwNeDxDvCQfa6mPgHNSRLuDoz7ynVrWhnPE2Rqmch4FyL4"
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
