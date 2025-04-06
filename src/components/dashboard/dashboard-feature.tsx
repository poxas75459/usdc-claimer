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
    "3nqY8sj3Es5yHUK6dBP5aFjArciprMACE51UW4sfVMyc4SwUcK2UfUkHG727KbNppFdhnwoiVgjGLtYDEm4KfZxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGhLx2W29PU5TCEy2mkFPShxUDn5ienqXBVLzw7qhTxKfyG3Pt1bgS8QeZoS1r2RgFS9xK7dptikoTFndZpzocb",
  "key1": "3NJcy4oR5pBH4gy74GLpz5tu8RZXt9P5jsJKTwokcHcRHeVdk9bbHVrtSwB7mjijoTNnrJrrppPkixFzeg7YBMQL",
  "key2": "5P5ZGwN1mz92nXj5CgLf2ruwVQtU6DVmCKEavoP3a4yWfoTsvZXqkQxzcp2tQwKhgkkNomW8bRkyKM6YNAN6wdsp",
  "key3": "4BvKi9DX7AX991iuSEMMuQs1D5YAmfwBaVwWWJGtjztKfTenrEKY53YxG5tPCeTcUPudyxm5WoQiAWx3AXWkqDku",
  "key4": "27trCTqrP5k8xKrYxMKCQhAnRvGDaskxKFYQA9311KGErRMV5TyKFrdqHZjb6rczzx7ETMbviPEUEdtWkkiDzyMb",
  "key5": "ifWAcpGqq6wFZdvFEPxxEYSpRuwaYHDWRdmBTgJgdaDncVTVV2YmWtf6ZerDpZMvb2pob34QVXH4QymNtqpEPrk",
  "key6": "3qPmQHfN914gRA8kx1KA858ZEAS2ALYdPG5DEkHq1fiQnwrbevs8uNRKX493ZMfY6SKejCMuPSZGLGJaSid6EAuq",
  "key7": "TuCMhVbhMxoSdsiNEgFU53sA6RXjZADANcvVmmxLQe7yCygRZZZPcdtSU89W6sYQWNou8kJ7CoWyNgQDh8VhZsG",
  "key8": "31jK2xkELyS798jn3fMEMTMmhScG1kmc5fYyXJUBUdKAqyBwKRRAG8MRKQWqGy8wp9r65y9kRGutLURQegKPrpci",
  "key9": "2JW8wiZsYoLk4G7Kka98DD3dAWgi5aRadGcGLpZQqoyjrprJBX8WXppmLPDvrPXxXLaWTbHZJ4xeT2FWnsbELNcZ",
  "key10": "TF3ZFHXNZCF2b21zDNA9vYAVrD1Q7EDgTzvUKjCYK1fhYXbbd4DX82JaQLjoZd2bejEU1x1RKsoNynNrnJDs44d",
  "key11": "3ZZWspfzYAMjbkWuJoqb1q6wrgvztdnWwwGXRdSpwuHpzuNFEPYFQ3t71ES5CF4GR4cjWKpxRo2anvPYb8Kt1pCz",
  "key12": "4s2szKkdkEQRjBjpYm8YF5ruSeJMbDMU16NezybJZeeKY9264uwaHU4oFErQaFtT5QrytcnDd5qDiEwgHz7kXbRE",
  "key13": "t7dwvbtu8a8xZELcyVVM9Gto9SQUtfhCLDrZuPDWCemVE7kKWSPK4MRvMmDcbHy1pUcTDbwLgSNmjK8RhEDr4fA",
  "key14": "35G1JaGB8KUKTQrEyN5VmaMPp5bbY8Cdg6VuXfL79hbQCPjGnfg5rKn1paVxybRSCd8Y2uwRwWXoRC8U4Uekf7TP",
  "key15": "Mu3qYShGraDQdQVn4Ni4uvcHq79CAzvYbv5VAb2RFA9dgTZd2Ced5cGD9PvMs6umEZkqoudJW1MQ8DjYK5YXznq",
  "key16": "5BeXNAh12tcHGjYunPXT5ce2avgdcH6iN86zoFEKvZossQBx1AjxcLGCyWcHAgoVDmQnUcqU33bFCZ5z1WWcoXHC",
  "key17": "5TmaV2ekEh75axAJmHgmE5uuYvmTrvXRHvdLCYykYV2uyfGcTHvgLR3AgeDhoJUX3FdabT9yKG8VVsAPnZ6mGakf",
  "key18": "ST78tXJDbVuXq4vy8BBkXCkJeqgvBBFh6uWBqb5Gqw4a1YdeTxUajfykUw2HA7WwRx4RRDPR6JPzgfaeQW4XFGf",
  "key19": "4DfRJLQjNHWS3SqVnsAZFAVeTUR8qsLvs7ndaxySgmSq23beHp4k3Qxk8FtFHDPP23gvB596Lz3X4DrVP3XKJdSB",
  "key20": "2RpPU3YpSJNfYKeA94JzbQKD1ndDj5EHuzmmMhfxNrKXCyYLTQkkAVowY4cXpyxbn8NxNwiE22iG16s7VHGaWKgn",
  "key21": "Q4GpW1bPi93i9ausJ3PiPi3iSd5pbzSwhhoaqomrvQK2v1tSExC6KSXsaizUqpmqRF5gptvgCQg8rBSGvdAZz4f",
  "key22": "4we5PVtHyHDudumuiu66g6X6g3LJw8x2r4CH7bQL5D5DrSV7g58sqWZ2rhoqG6qFA1LXvTi3edqNa4BcuwX3Fh1K",
  "key23": "8kJKn6MLwRDhWo8UHkr2VwPUiZfjL2eh5ZBG6oyQxDx3ZRJ1BRnnCYcf27rfHwLpVA6RFCMXNximrcfrz9FrV2E",
  "key24": "4EdZ5SC3hc2RCLahrMT4LosaVuZkRBTajsf3LLnszMjp24EsoninXny8sc4PNmYbF2B5hWQr5EgXTyAU2ajpudGr",
  "key25": "TDZCKLioNG4mNckaGovRfjP6bwGatjXssP55hbC94oW3SJdFbJLN69GH6uPaQJCcvrtDj12wvwNMmbf7bAnN5o6",
  "key26": "5dUFq3EJgNNKr4zSuBUYN2ox3oVccsQHSdPWrxZgiGTyBVR6TgSDA9KWsi6u4zxyyJg6FQcYLBfc2RkKfibkYYi9",
  "key27": "4msyBcN8ZCAGDbdUG6qmm3yxAGQEEE1ZqTDZF4VVkVZZtMmANbeqLpaNz7CbXnHCSfdiMpVWCEECvrTbxp7m55kT",
  "key28": "4FZkgcNHU7HeRJ8hkNAtAkkbhkiM7tWB9J3DPm9kX7FjArfdg44Z1dgwpPeXCZDmFJwxs4KeWQbKH1TWd2hvasbz",
  "key29": "5fx2uCHJ56oUXRjEGn7CqQM2wW3ibgWkmZSz3x6mfkPKesEsWqtT286RVYNzDFAuJwDhvwde9m3p2VGWbfpncgN8",
  "key30": "3ZTLvdH4b8tZMSX5RSTqNCBpL92uZ3A4NMrFNBq5AmKtYHS7kRwqbiuZNR4p1AgRecjNHwvLAK9tmVLfk5HLewbn",
  "key31": "gpiZmS8YiAj7b3b8m6BQdfCBzR5esYEi3hb5MNwiN2WozpdbkRpUQvLytBCNcns7uqivtFR1Mg8hgVZ5jDUyGuG",
  "key32": "5U98X9tdptoQBMGnar8qEbcWZFXkHvXz3c9c6qvLNMr1kV21MX7bQ4fYJXcUnoxs6C9bjjq3iJWWqPTLpMPEs9Bo",
  "key33": "4kdMR75xZ2bJ4SGkVmapkUQongYYvxDXZyGyFYze8awexjbP2mFBt1XCktTsTtf533gLjWPeCiGGiJeRnuE7L7EH",
  "key34": "6RXfn1cHQ6mjRjumZbuCaNCS1NGggSd661SdAykX5oAQubouR8DMjMo1MzDw47F6weMrkMuFj4ZHtLC2aLPZWaw",
  "key35": "3Yx1wPcCGNWUtoHHwYZeLuGc3AnTTstKcaF7pwHABMrj5XqnnNTYsMwnATxypdskSyZGignBGnJ3Y2q7YjQozWR6",
  "key36": "2fDXFVDDvci4xGnPme4kk7ifYVBhSkaMMsnGjVq9jKqNfVe9gRrjEXs93KXZpHkiEUGmps9SY1uSgt8itt1ujNni",
  "key37": "5h5adksNnYXNVfWb9vGm8fU4YqnVK7wWwJcusV6FzFAvRb9Pe3qExXNgzRBukvnRDDaciNMevC4XGapXytbiFodu",
  "key38": "2CjWPSS2vufnjNATAGiSDFa9qW5oEtRFHQeD5fFk8PZMGDW3nsejK763xfMhqMq8yEXQRXgA3u5MLDasWXtBg2no",
  "key39": "34TYfXgWRpFENiJ88DBw5T4VM7N8ypRf2j6Rd1uCFUKM9CB61aBnKLNwqgEvejcyQ5TtP5Hdvy7NWgP4oKFmVzHM",
  "key40": "abzs2YjrLJ1jyCLe1uuXJzPPfjBmER97rqLP6W4FyHTQH7ZFMEoYJaqGmzpTdGGkVLxCvZ5ENYYYvFeKqQqcJ1h",
  "key41": "5MyQASP1gLiahd4mi5QkKNigwndQMXUP85jzxBwMePHYZ99r3Zov79uMrsFqN3zznX9r1Fq1vwKbqtAKh5KCriEn",
  "key42": "5QrcvKN6mi3fyxy5Bf6jcNsSr49f4osoYPxBCAGb5ciuQPs4sMSLZgR3hhMP7uYf8VZAed7WmVKvJ5KWMGiFWfsH",
  "key43": "ixewX4DPrZENw34BU1ZYCbdDNFDFp1X34WzswGQC88CYywSrnZ4xvyWuwtvZbNxSzHwz5tVaWdtHwCDEZm8jwdK",
  "key44": "5jdGXj5pmD8BzHnvDi3ukj7Jdxd8G1v32jX6oMSsqTfLE5G81jPt9QmQWhZSmPugcGW5UNSW3CPtzLbcRWwAtz2Z",
  "key45": "2nui6LrxtFnjy1wHi7xoEMb2rp1mxRFovpfVRukZKD9UMetsNrQbY4qnCAZ9ejurZyaBKjTHGibwNsAx27eVaJ84",
  "key46": "1n2oDt2isHgAdxvGkCWjCXNDZ6enFsQkGZQyjN9KPz3PNBjpMchiPp9T6SVknKqM1MSisNTSPNm3PjxNDAAWzFb",
  "key47": "2o6aKp9wMETc1aMJq9k7Foy48pwRRrjEKGAPAhsUt2WpC3XPthzN5QQdzmiJQD1u4phwVfPimLzgA1J4AokqEZoc"
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
