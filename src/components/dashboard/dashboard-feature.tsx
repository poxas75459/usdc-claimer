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
    "2FfLptsjECSeT2N3BEZSJTfS1ud8M6JZQ7DCysCWj4DLE1j7DDJj9hc5ja2ZjaotN5DP7XKVQDxp7VH9gNbzNS52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fzTu7YAUNZ5ztunD7rqQJd6mMERfgocMeN1QL1caeXs9e38Q8gaciVRY4h9sHujirF7v322fy8eZ6C1vohSEpN8",
  "key1": "3CVGzFkHp8R6hPUjtsuzziHn2N3Sqyhw3GnnKGGSYCyzVHXpKLqjkAQCscmrYMrMoQ4jH78dnHsf511QCwi6BLdB",
  "key2": "vinFYUKmDPfAMc7MTgnzevLR2MnWRuHUGWsAvDJiHxKCaagMEGoBXtnXgS9woZYYDLgMeGDiVSNpBaeCzVXpeVJ",
  "key3": "dwSdeUvP1fkCvNFNMJcyxB48D6cpz9G5VjmVjV5sDAG88Z67nBfcJACK9YmqgUTkXZRk7VNucbQ9YudRusuHhcQ",
  "key4": "2SpEiLcRVPGUgShFcRXVHXGCuMkpx4BfsyhMZTqjLx2eXd7VpgTZPUMDvkmqLLun9mxCGisT7WmQe9S767sBEoqu",
  "key5": "4Kdu8UDsPCb5HB5yRtEdPjq7cZuaJVsdSemsMzUzL8J1Tw5e3Pg2fejsMc79SsKg5ycCoG6H6BPky7vQQD9ucnze",
  "key6": "2dkTmepz43zV7xa8C2uW7atjgdGCcCtJvZATtDv8S2cUt6nvfGLAjo3QwCJ85NMzeRiB8TcQjgoCGuQhdzkJCrun",
  "key7": "sCP8fGtzHJq6YfBrbs1oSMNGtAEJgWvqb7SmEKMbQAgxQZEz7ACVMU3Ac35XYKxGFkt9zVc8hsjpuau4A4oras9",
  "key8": "3bjq5oBjbtpeXdAEhiGfJdF6wp17qfTbWWiwwuJzVSpHD75Zs2HHJVyJeFS4EnDGgoCYyM4ihn2cQkPyu2Crsduu",
  "key9": "ykrJ38WWcA6w3C1Xisdo6uSTTFotmJG2EYd9st3fTqgtEjW6u7SYUYBnaXp8wrPirFZJMiPFBELKhUMu8UmrjNm",
  "key10": "4t6kJsERxfybizcqVSvvyKsdRSkVZgVDcoZfeNFxrh2cK7e5MwsXpHZ9itcJiNfq3NLecG5PDi1JTuF1mepA4oWZ",
  "key11": "3nuKdhZ9GXarzNHTEL6MNufkstG3N1EVc2DorGKgoYh55z4Khd9tNcocVjHzfojgH9XDwoshpq7qdhPMf6hhS6Ha",
  "key12": "2AqbNJZRzdTUo6BLtaE3nZMj9DhzQ3AaRBc4vYoMRrfoJ4Dzi3T2bJXSMMtHcxpZbntH3GVreB9YerAzU2AjgtZR",
  "key13": "i3WKu1Z45Bycjd9Xgc8KUuMW83dQBC7TmeByF4EPUiDw2Gtsaq6N4nwgff4gatbgL8KWLhStd8ePV25NhdQdaQS",
  "key14": "5s5y2LY1jos293YB7zwZZeoTC6VgTJfcrHqa4Aoiot7YdAGYdKfCaK7jGLKZxxtRwWLVoJnMKS18NF7HQ5D7mDvu",
  "key15": "5xRp8axnryTw1g4refiQJVknfgzsgAj32G2ZU2HuAHTmJECrGLvL4m7BnKDzQRjWS8CaahDnd6AWnxDBYtJTirJd",
  "key16": "2beVEwGYeYM1eRz5NrXtYDrdcqg9TCCwkuRk1Vr7bMsLokDPTpNE9x1Ja8UGDqSU5joSMVEZUvCxPZMr7oiNoHF2",
  "key17": "hWkxRGh1a5WNg5ZMvirxsNm4CFKQ564GarKnuDEsvgqZSbuf1RVx6Bmzch7bz3Wb1stpC7sC6Dksdyeh4xW9Loi",
  "key18": "Gf3vfXrsYvTuimfV1ZoksqWbXdGkFP7BtBuijdm7JX6Yuco98Aw1PvVjSDv87crtCfE22Qi9x2RKYw24uYs79wb",
  "key19": "3Nh2J9NQQLQFycu6LnH2oGJBfnCH7N42oKSvWKvMjPs8nQZgpqpfzwDCLzSY5sH7cQgaTNVhFpydg842B5dtF3vf",
  "key20": "2ocRN4hPaNNRDkbmkZLXNMdyfePjXPq5cf5kMfT4PmrCtdu54mZkUt2qgdDRnUP3BH5YHRUoUg3wh6qGrLg95aSM",
  "key21": "GuqjSdRGCWzJ8kYR68EiTZdsSqvTSiZ4J7EtjfgAyEtbFNqJvkMDDd2AERSpY9ogtiz7tNNtCpTQ5r8nFobsS9B",
  "key22": "avmQzz5kvym5DVMGZjnu4p3n19RAGNus6Ri7kSgHEWZ23vyRRAccSFoEnKLvgZby3KNzrF4PXBAEB8rMVYBRTer",
  "key23": "2TTL1h6q93ZoBWqR8aqB9vxMvo5i7tFYgrT37nH31pzefDREZMhRSS1YL5n9232XMKesYQjkS7JFxwrfs5NmvwBG",
  "key24": "61rd3AL3pnGu3f7Lyc8r9iRip1UeCRppprUhozppZH8RDJE8DRFQB4J38ACe1Zyd3uDgipNzD1PsbxMRzY2ZHmeb",
  "key25": "3LJL1swwdWS76RDxyLgEXdy5SXJE8nNfasnktFnF4SxDaCNk89uEg5wcXALmDkhv3v5HXyMP11JmpEghyFypViQB",
  "key26": "UipwrnjduGjokbPhDTgtZQcjkKuobfGUTgy3gCaToHPph7shb6ChA8KFpUBdiGisF2UcWzLJrwbkz1a1nR5XXAB",
  "key27": "3mzmjGDCGhjWVmHADasZqiJo5FKeXDaPubKWDjvBKUimLus2JhrwwehQZv7kNxXn3dt8KQQ9RcqdymqV71qBiDQ2",
  "key28": "2EYEf6AKrMMnUT47MgGZJ5By5d9QU6ZmDHt2KaytkATWbnSQBWrgL3JsR1huejMj3CRhNBK1MRSous3wWVa6iTq5",
  "key29": "8oucf1SRmUNehXViX7T9VNpiNnmtjYNrWr9MVFzg283XD65e5zh5TzAZYVFFZ4V4JsfWgbpPkqX7drMPFVx3taQ",
  "key30": "5sH2irEkL4MYgWUNqE6q54d93pakozxU4QFpCyUig7Awap53QsSXhXrYdrAs8369Z5neuqeJnVocZYUgeQAJwMV3",
  "key31": "2JRejBxmDNubeuLmp7ZSfYv5eGYTNmfVJQCBu1iBMsLZEnE3LYxLJvMAq41RCYTveRJf3yTZoTGaK9LWjE6zyWKc",
  "key32": "vyVZZYCb8qbza1fRVwzYWkfrCqcVwqi6D6sL5iWa4gswGww1YWBM4c6mCy2EMYQPNfeQnHMm23sw1uUWBzkSZC9",
  "key33": "4dSqWZuk3U4yUaZtnLnJsyThsXkqLTmjRswrLzdQLbDZDjNy1vzGGSBzYEb6zwxUKigPGztGsibFbwgksNwzJKTi",
  "key34": "2RWkXsYppnYgdPAcM8oQR711vRtwqhsnuQw4ukH5XEK1oS4DqFMAAzKX6LTajZas4EQoyLVAXBDoUi7PkCTCAz9C",
  "key35": "ymhrGKrZLQ7YFpT97u6Pz1GieEWcJ7Yhzh6R4p5YiGJGDsBkKvz2vyjn38kmxMHHvrVkwyB4GJwAoxW7vbkYsEK",
  "key36": "2GPddbNLAAse1MAkQSNHphRppzpB9jKyqf2JpXYeN8jvXxEaXL2YnKq1aq4qj4YFUMZHU7sXKyHpvpZmccR2qL9S",
  "key37": "3D25u9siJnsBz69TBenhgu2vFoZt1qqdq8t5nFNQ2YAE55EPjU5iPTBxHPEoVMCDxEyjVQGNWtmULEMew18SYM5P",
  "key38": "fbZurkbXqANFWN2xPkZLeKmU8qbrVGo31Ndw11wGuTSCzgKFpZVpnsEypgo2VFvp17RnCntMxZVGkCWy49zHcio",
  "key39": "4nPr65KfvzELREmgyaZkgxoaFQBsJ4nXmUjwx3E9U2HqRL6PFgFQCTfqWZRDKPKBFvUNFtzjLRpsso9yR65hckUH",
  "key40": "21ZrbPSvZeikab4LpT4RPZwGMDyiSBrRza8Yt8HK8VEEpNwFy7xw3VFysBiqnJ7rgWswsxaArJykp37XV2z6syhM",
  "key41": "5iEseWCsZTKUpzs2c669BzcMcdP3YVGSBoLcJ5kD4RDenpzbWQvLwf1qhuLksxfCX51KZR55YUgbXPGWnKuiASg2"
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
