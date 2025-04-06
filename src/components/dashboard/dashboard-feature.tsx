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
    "4G6bnrEdRMwbxFyVBAuQtwNphdFbfPchWMRFsTMGrmsGiYEjbqZhmNeJSc8tkPBnTeiNgdc1aPLDagofdrqNmhHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s9hzFn8nFdGEMwFtbR1fKZ7tDD1ce3nEPTt1w7k2qfGnLBU9W7ottEHYnJaayGdwEbNphLBAyPyWJZxgU27f7ks",
  "key1": "5Fxo75JJboavhMHH8iNkrJ9Cbt6E7jqqLrGM1udEuJTkwGKq5DMztYupN8faWCNMtbdBUje8fV4orEjaSrxj6oNd",
  "key2": "2jzt3HAzL1qCrJqDqJAGAQfFzk3HNehCE1DaW2xNNxvihUbB6n1eB2qyfGAHsDCst4AUCR8TJvRuUZj63GCEAP8z",
  "key3": "2jc3kXPShaZTvfU996noS8yM39Xt7gXaAiBLPPRmAm4oxxNepMgLNCXsLSeqwKVASqXJUvb9husUgJoYw2xCpqHY",
  "key4": "251s1LQavTCJdaNdb4e3QBBq5RHgPpzPuofHRva9RYfJXdt2kNYvcnCKbpH2YTn6cZYJ1YnX2TGrR7i6bpnihhG6",
  "key5": "64vStLRSH7LGnWqzhosZXUQyArnCkrEdJuSxBmQeNMEbafJC4i74L6Fwc1x4qqusA9xn9fb9qTnsWDSqkz6CQZuc",
  "key6": "4hKdvCNbxQc5niV8NLbuR9MbxpKM87FsAbTfnbWEWFG7QE4aERqdBr6w1qpUTrc51NVDkcMLQarpbB7D1fAACgoq",
  "key7": "2vVrb9Xkio5kW8QMe5JsE1TwCDq3S6QXdbMvNJiB5jpxzFuYUg13F3fWx2BKVBgdymC3Bo1ZWanmSs8K6XyJQR4x",
  "key8": "2ZYSNPMoagq8f6rXHvb9u8PLbMSGC314TtkKriXfdQPpk497DncyeKNRpiqN36TSzae14wzSDDAjpy6QevFKZ8Ys",
  "key9": "rH4fXD3G7KZtpdE69Np4sCVKw9x8EfYi2hHBgPPPZjiTWmM2CMMcESEUXApigzGt48nAL742WieF1SBw8mEgWxz",
  "key10": "44oxiAF41Q2u5UJEEHPbCiJRRSuzD3K9wj4Y71KHagjXAkhAsfbM7mvZFzvuaTrHSYcj7Za8AJ99Vj4uUd8QctFE",
  "key11": "4RhRvcQLnF83Kqg5zCAkDjNNK5aqfumsBHv9DLBW7mT2UDj4knJQCNHtY752vEFiTC5YyXCZj7fGeDDdMejzeMtL",
  "key12": "3DqgTWr4uCdyxDjrBqKK62b2yoouHcmBSGU5qb3MePugSuy2fjDisE7LMFaMWjoKWrHKKEpRAEFpqemSgKKe9WNt",
  "key13": "4xqvbEsELjfPSb3nVQWLEfuwaLrhCuDKdZwUXxgcWRsKSjm91bt8Zqc2oZS7eo9g747WSJL951pH38rGYDeTQCds",
  "key14": "4ZPbPZQ6pURSJG23XiWk2utccsH8ud5Kij5kKQghRgA1pCqgkXqASUc7um4xr6R5tfCnhyRYAtmgocLD1mJhG1B6",
  "key15": "2X56S3KMyiAY5GakzuKodULcMyCk5nHRW4ZWEpTThPmRddhb3oucB7wyAnvWuBnbHfUj4qMownPHmjEPB81PBiRe",
  "key16": "5wZ5iWdW3pwnvBRy5KtjGpJ4Pd3Pny1a2SGSwnTgG5ecXECGYDwXjFtkeHHHS48gJCzJQdR2LXpxXUKvAtWrYoYc",
  "key17": "29MQKpVG9TUMJPsdsWs8xM8Y1EPyM5ixftZg4aasq6V27ns9JEzPxD1oztfaq6nhmsyk2d5Fw2gJHzpvyBCsi6cn",
  "key18": "3NZexsarSTN7Sj7wdQ1fLWuLA1EdUFh7ASCzsMc3c2Red9By2WL2k41uiYCEjF4WMN5hjsL9wdhQRTQqQAxiPnhH",
  "key19": "39ZqDHZEbUXmqDbZEaVFH3T3TQEtEiCR7v42u2wiS2xzpzWBCtDYbZgDiHe2k6YwEfiTfhWRseM76ZGAkw5yFDaJ",
  "key20": "3yBGGghaVk98zMZ4qBbVjJuBZ4MWQ9AoajokMeLAw1UxV4octo4NMDMKUZqQpv7aAWv6x1QAvAwg94jYEN9TUCp7",
  "key21": "3jFVZPT1f6zXftoh3r9mD2vLyKKqr1XV5rTRBgdnA6xcWStoob9wekfydDyUm4vzX2PkANhkTGSdM9KCmWjxTSHz",
  "key22": "X7HKo6QMUTYX4yuhqM3y6oyWB93cmfVzknXtENCMcFmkBC4wnh5FrhZNHbpMLhx9eXrEcVvcPKArdfMjwn7BxWw",
  "key23": "amzkpyzYsfMvB9Ro18NkDgrEvMCcfrBqVeP8Cku9bVCYrpA99646vm1XWFyxEtpi2xuaCyKxHUmoLx7j9hqZJbN",
  "key24": "4yv82wzeyGr3ojGbTLZaruyd1GmPb9YCh6M69dSAydqjFUpGBeyWcj4FULRYdo9VsJW1qWDZk8k64Yot5fy8ukWD",
  "key25": "646jLtqNe3deiDP7UJ5Yuv3aGGKXympWR2GFK8xR4naaJqCXvS1cnY4hPkwVuwSPHWYKtWe8wVQMy7L9wCjwoLCH",
  "key26": "4735qR8wnucyBH7C9eMcu7bCpcophzPsDgi29gBdhPmKDiDyc3FB8hfnZ6aH1M4EzXPHea1zT4HtmJ7VPmGxabfZ",
  "key27": "35nStCNFYKbZavPG16yTEYdV3viPFmmRE6E7kiWnGibYMyKCkYYL7GSAitPxBBXf2jGJabsNzAxWNkCKnWEQA6MH",
  "key28": "2uJzgxGjE5DyWWjiVPKujYeNFnnGbvftBhfiUbKPxvNFjqDpjVagYaq9u6JqWYBqoaSNeqJXWBRhQzGtsov1kGNK",
  "key29": "3NcqyEkuWBczJCtb5B3AutzQDKWaLLyV3w58s9aGYs8jvRqtGjNTt3W25PNu4RrwhRo57ravrMqasG6Kqt1MFy9",
  "key30": "2meDsLqxmt1eZsnZAqaejga7U5KYS5Yx2acenib9SbypxQKqkdJj3NZuxjtNwC3Wne1bKA1CArjVfoeuha6vc2Jy",
  "key31": "4nN5aWCZspTdMj1U9TMWpq8swNtfxp9v6MUzmo7wBSvHE7nkHnreyV1Lizo8gx2NprSbHCPUUVXKEuJ4oanpEn6j",
  "key32": "VDf1K3JfKms4zbQorvKuntnFG53YNpACPH5TJVW19Q6oH7mEo4AVZ3rRTk9nLfyKpQUm68QRgSkZU7BjbcMsH1c",
  "key33": "PNS6Sdc67w3HS6ZJaMmxQmwGG5mkqBswSVf5HxyH44ycJqPnfjwUnfzsQFQ96J4RfBUjQuEDMPJvTn7w57rsnqT",
  "key34": "3f7ibi8xyUxkcwecFnq9vxENGsU9z1dhyePj6pJkRQ9pYTZ7dWm4yb1Td4QrHbYcweJBRHaxXXztoyb8672Q9UKd",
  "key35": "2tDynGS8mu5AxisCYCQbKj4DApuVYwufqhurz3ibKHS2H9MKU5gkWArFnbsbkRAaH5huMrAcCs5FCwnDRYn7oV69"
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
