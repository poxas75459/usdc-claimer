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
    "44HaTwVQVMgV46Vz1yCRb6bisSM2z9kmDEZMqcwMBnN89TiDjqXxoKR3goDByYjA9QgaCrLRCvsCFpFUYW8WN3eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x35JjGiSCntWLvj4YMf67kSwqjKbS5cJgCgp5GUeV55wqs5HH7hie7C1ReXvWn47fAyRA6PYE5Amf6R7s64q6ow",
  "key1": "63N6oJ5GovPGgSuB9z4M9KtZpo2wLCZP7DwdNMZUQh2wf3orrR8aiGFiJyDzwT7Pz8371TVA4snekjztCqjrKgDr",
  "key2": "5cmpNVPudAVWeYDZFmUfrttF7Yq76VfT7x55RSB7GstJUKBaH7RZurQxNtuw5tk2s5XWNRRCzVNyFgTRunxnhXMa",
  "key3": "3AMFL29Jr1HidAXnA5oWhEPpswRPYJHt9dChoUUMb4vrbtxe3hQHBFyqPLWYUYmtbcNEwi2YKvQynJPGKyEk9uYN",
  "key4": "486D3Xh9a6MVbatBovk9yrf1dyE5jSoJfeF1c1iGvYosy4GkpiGaeNjYqAsv7hZdhyRcEWjNWM4ezJLnGneW5z6U",
  "key5": "5xfVrNVpfgvaBMMFKNrWzqCR1KF3MLzYS9ndeD1FiUxLR7MDL2YhBUhJ7z1tW7cYkziwEpiQCcSDe5C9H6NSgtJt",
  "key6": "2ismecgw5TAzrh8zLYvue4NNEKFhovuX7e3K9tVHJnAPwqmPLs9c2dSLsXSyVyBwpXYpSeEQVzXrS3yr31h49xJ3",
  "key7": "5hc3eN6zvf6F1HDfPbGDfeeW93ARUMdXjqTB7sBFBXmxf17aF6HZkrh3SABNoGFzjutQoP9YUunmRwjQb9g9R9sT",
  "key8": "2nFhr7siKupC3u6chW9EQ33LtZaJtbwAJKzwktqRaa2KXV18SjujqQA34coePWDFYdsnDMdDk4uRWK3cUrshCBQ8",
  "key9": "3HJw9nVHLS8waceZXfKbg19adY6KuzP3MJnidskrKyXnLN8bgm3QPHFBnysWBWLHbVqTux2R2DmZPVX8pjbq2SQ9",
  "key10": "57w4L54134nBaozD22R8a3NCpSNWcTDBNFYmuQGJneyGxyLF6Sigji6brZkYEjBMEFLUdgKSiqpFmEFG2MfbN5Ta",
  "key11": "5Eu2fDwJb1W8pEKMCL7gLi7wvCT3PmyaQuzsRbFbvf615YZLELRKjDxDkMrF7Ly27bJHScQYn59aFyhjshHi5eeT",
  "key12": "26XGvfHD5LkHDN9DJtqyQm6hTM215uLt3ZFDsxPxp8MzQJ97krEpwDWC8ASPTk3xEvAkx9qtZpqHuihtJD6YnHB7",
  "key13": "VGEb8UaMrdgMSLuhu7NANsBfLu5wTwVrPeg1f968xzsikjtE3z85LAXFsPCobHAE8pgJwbcYRmU3xTxQH11qG7Z",
  "key14": "g8W1HMf5aPZbHUEdZ5AoaysGydgrZcNnHbUbW9U2bWXmzCzVATzjf9vFzGaVoExKkUSGBJMrm6rmpEoYXrHaJsC",
  "key15": "CgRJeDDeHSNqtnokpV3yrDY5vcCr8BzR4K6UfyrP1Qj9HHFFZ9XDspFPhTphp1MP2bfXiwhcEDR6Xk8ipvVR2jX",
  "key16": "3ubR2uQtV82EYfysGzT72izN1Y89CSFd8pJQFjFkF78M4RXrWVqoUJFGpwfbiiSp5xda7d667R7pL9WVYixxmGHT",
  "key17": "234bnYm8bTVCKtukJ23HXyBEa9nDTWd49W5Hy4217EcePFVo5nre1Boo91SL7Bp6XgzTWG9hkT2pMmRsvWYYy66a",
  "key18": "3YRBiTepZWMgWT5k622eGkJrZcwtWe1Qb63c36nqAgvKpvo5kuURxfoi8ZMWEvGKNx3V9erse3dJ5sa4ptVByPu1",
  "key19": "34JWkmkZkB3pkjE843mfzyzs9cqHKYqwWHorfV7STuiviGVY7XgC44uDXpE9YMzrGmtFMKS8AZrCM9kduLLpCTRa",
  "key20": "3S2GN5fexs2QPi5pDBsk1FPpYGzXXc1opUDrKRUG3Y36AYi9Je3ZjaApemfbWwaiCHDouYfr81QkXjpoAD5nWnDm",
  "key21": "3vKkczbhSc7JpjUSks4QYFCXR1v8n1UUyMuELrnTHgJPxwyKDyLtag13eFeYuzpF3EWxEhnRoim8eSKrUfPSDwWF",
  "key22": "37aK9EuAoYhZfdjTnyr9fodRmNXvgTHNr7gW3xKU7oQR2yRDodha7gWPXL5az5oXzGrEbLMvFwmS5bgpEf7aHPc7",
  "key23": "35tBy3XCaL5iE4uaaDub1HTk54RHBCvEQyN6z7qpwH9HdTLerCoPvHa8k6riUhibmWDipBsb4TQfESs8GZxxN8pC",
  "key24": "5gZZK3veqzradt4EUGAXKEWmRMoJYeq7V22R8aUx2DPj4p1oXhzMtGGdsjYLz4HD54aYQGjjxP3KE84tp7mMZF9c",
  "key25": "5WTHP2GNNGaTD4QcFaqNH45zeHJDuxKrMLMDvWxD6jqWgrL1vMEbizbh7VB7339Ry5ECvPKJFA7BmPweqeKK3j2r",
  "key26": "2A2vE1j9UZ1oMqCjwXPGz7fEMr6iZxs5pPdzgkKZQy4q4D2Ag5EWA82fg3ESUaKrWH1GD8MeZWy9LuuW5u69XgqZ",
  "key27": "3CpdTwQzgrgezKFmgb3G91Wq53MMb9HEV9uVFu4isLesF7kzPJdGA8yYFgRxbvEjY5YGe3F7tHzTR72AUCNJtTMf",
  "key28": "3s2THfcV8KzrgjgXXRgjYKBnmvyfztiQ1LHfseYW1wadGcPeTxgNJJbJ62kek1AxdwfRKaccSaWUbMa2R6FKWiku",
  "key29": "4EgPDcfkZBxYYEdfD2xhWHKHiE52MaQEf2WYR1v9fh8FJ8VN8ysFmM8XZu7YSVUqk19DkhzgdisLyXwPhM2gzFJs",
  "key30": "4wCbRiXSnSMF3gkyqxeU1aLKB4XU3WUFQs9Gbze5vz4LYZYvsFaEXDeVH5idovtK9LVLMqYHeaY1m48YGMo5N6zo",
  "key31": "YtSxS3sv7SU4DR2pNUtFXiZqGNXGdzoCtBunxvvpF2rdU9e2WN3tQir3qidr4MNZtBjVwmFeUEFMQEhjnZpWepx",
  "key32": "rYuoMjs8GzrGEJPkGDoz5d1yFk7mC31SjhivhUumvC394tgDneMaMoUANkrooj78pa6u4Bp1sQvtYdCnrgGgdyU",
  "key33": "4ow7JjN17zAacu3NLtL49SLBXuT8Qg1j8nDyJ1n94RASNqZsQy2eqZ1TPbMnZKCsWXYwFsij83V9oLnyPcTRfg9B",
  "key34": "4Q4g1WsTDDa5N4BNCC7mhto64xPpJskwVh61DQjy98XAg6Dfa5Q8FusCS9CVqJxYUJgf2G6WGnF65q7DduvpBs58",
  "key35": "46ri6SPTbCTBste7RzQHExQmnSfMQvGynVJGTZgkF8oZ8ogMjkLqC9oF5vLxiagtA9T3kTQqo214m5ZfyLr9ShdG",
  "key36": "4ctjBJet7cXHX9T2AW5afDNNE8TsipfTuPHaAqWDjLQvha3VD9KWRLXpRigco8WLkQ6YXQr936WsKHMhTRhYVZvd",
  "key37": "4tHuB8odkxk7gKEVLVS4xUTKzgp5UsD569jiPUZS1Qtkcn92pecpr4FNHrSUU3zJFkdAsdqnP3FNQwjw3MmhLFik",
  "key38": "3WsYt8drAy9qgseySL53RudHsjgNTFUvNK6hAX58PfyuLycFX13gwv8P511cj7gJi54MVGNB3QaSvS5LCEdqU9c",
  "key39": "3gLXEnMVQgj2jwkw65JzS4wJMDzcs9rcD9ZiynCigHKTx8rugzBJDTzzuJCWpizRAf9kRkDvNNxb8LvPJDpsEkoY",
  "key40": "5qsgp5PSvV1ccWe4S1mR68stpuoFeDX3qfc2bKzkoZafj4rsH7UoNXi7WFsbAbFM3MLj7eC5WnbK41EocHqvtDaD",
  "key41": "2NHvvDe66zGnp7JySTrCSFMYQLARTenB92hBBRjJHY6Ez4QDktJj226zgE4AqtxDFSUj1o6ivGk4LkwzsKVYDj81"
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
