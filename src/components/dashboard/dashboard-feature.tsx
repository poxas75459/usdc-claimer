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
    "5EVwTe6f8WEfWTV9aBKpcpTXvREKxzWZGnHVHGejTuEmp98tMthwERF5eKgPTzVoK2ZcruNnwsP7jPD11pgUggCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9iQpFCeBBVX9Aopo5cnxzQtiCvretuxstuDnEDazMHhQemFnXbZgWhXV1L1vW6WwiW8VAF1q2c7dAJFoKtXMqz",
  "key1": "2k8BTbqn3ztQW7BMWk5bdfaPFbjJg4mviASBVT8ryA7rgJADEyN6sQsfhiXhn85NEUqaim19wbSY3QZFRghjmD38",
  "key2": "5LJ8vC79YZw3P4EewptyC1vT4JEWAUsirV96pnKDZm6GVbWJ6G2HuPguB7MV2EEwrp9LFaVJgr8iu6etFywQeam3",
  "key3": "mbePNFuWhUZcgpqwHUxC1Q82ZnvCn6zbKgw3taQ5ZvXUwKqqUMusHFiKW17SDF1R93ubEPrW1rzcVrPs9Z8nWcm",
  "key4": "4BrSzSakMWHYGnPKqY8MXPuvpnZ2w1QARUo2hLa3vK2RbCn67GQbr9mckzgpGmUnbdarHRAsmS4ouJ6S4bXpcf2E",
  "key5": "3Lx5W6ouSNU4nAduGnGvHQYNcPXHi8SDswCsbrFrLQtMWH2XiC17eBjJYwVvfDRpuNRcad4qvnuG2MFHj9rNkaqY",
  "key6": "5Examvzfvr2naoojisDJ57SbZvioPK8n4qdRV4Cgo5mdsKarqSR8S7rXAvpWun4ZJuyvyTC5SVeZEGjVtnaSSs5n",
  "key7": "5vmo1Re5zdMDCbDz5Ln16Nh7WEMLar8u1Q3jNonBGrfWZ1KButaKMqwmjDpUuDx6N6t8R6cspLT6c4nQ9nehMrG9",
  "key8": "4JTLDtCaX2gGjgmomFJRbjTyp5jogK68Xe5KKxqNMdXAtFsDRhpqfqEwyeUrTGFCGMBaMGxAP9ZfDh3Mibg1w2av",
  "key9": "3uGGrzDzHfsHEha3hAimpgkUeZtoJRyzqLuwiaqhamEQGtUXn3butzZsAok6NDZ2eQ4kBfuXM8TbJj9rxLL4XFAr",
  "key10": "3yRdcpRCQbtiuKeG9JRUCQ6kdLRsYcUXzwJ1JykMA2HGDQXHXfeAB5tr9xGWtTJiV8VeETG8Ypy9MLuCXavCarCg",
  "key11": "4JhzaFuyHUWswRircFmRPKTbTEtq22h2PwTVEG76hj3zXnaxuejxfePMsiPKBWAf8ANbkeNTg9bZx37jntCH1jRg",
  "key12": "4exTYL5j21qYR3YYkE6Qvwnw137MR7rGz6vwe4n6KmnA7e9nRvXxuwWP9zamPKNfh5m9u2P3bfx84UuAoHYF9Xsg",
  "key13": "25UYWt6xLcngrJKYXchvjA1rXTpLt2tGxVqGiWhhi7tCdpPgdrhNmgLbKyPtzjsHYcgcQnDLYDSCg88GBYgYUxz1",
  "key14": "659t6S3AkkZpZBZG3VZAPdJKhRUpCTkFvTfkcJRovmJpuooKZg19Uf1hk2PQaBxpmskAZbnyaB8dCWLMhJbqQUUQ",
  "key15": "4MGyyKd9EQnvp4TY5MWjTWcPtLCeuYhbpAMf8UHomCmoUWuWSGLtVfFSY1xGfN4qRynqt6bAbeHpTQpE9Z2cmVzR",
  "key16": "5cJdS15jL6XcNtSpY26VNcJur9PB3dKi2ctkDHFaT7Evs3yYz79MBRu5kspW58St1GqpZWB9omVFQ4YK1Ssot3u",
  "key17": "3LiNQooBvCdx922DvuedYQLup4H4GwaCzEFRwmTNPdFCWQ3FffKuc8dPW3VgAgTbjG8ozsojjKsgipeXPFX5AWKQ",
  "key18": "4hLdb7TEjgP3MsZRnMv9Q3by1RdBEcMkiMXBJQEdw4Tu96SvrS3xZhvsxtvfL8JusfxvuDYgtTKGcnAnAT5fn4zF",
  "key19": "5wjBD5C1QoVp4PX6hWT7C8eYatLm5o5aUciyKuqgajKYucmD1ZWzXm1Z9kZpT1uSfj4w2mtSPHctqXXZ9KgVyBnG",
  "key20": "633YiMHcMytZu86PFq5ax4YFtUXqye9sHAaBM7fHKFqCRa3Q1LPxX3RZGhSdkruS1eYerpydTtuCCQoRpdxgbKSz",
  "key21": "2vQ1Jkd35MBSXxBGK3uymX7gHV1ptxhx36ucaES3e9q47Bm25HpTQGVSpY431owgHaJLLA7xPYkj5Mbjb1EqHZVh",
  "key22": "5PtRuqHi8vqBEHFGTw6bWhHi93PzTksUp2g79A8gaRG3KK8cuJY1yAhXjnMhz4tN3EQpybXWU4koaur9wR2ZDUFp",
  "key23": "52QvTocbzHi1pKRcV79zGRDYP6ZCskMgydu9HrbLesCeY21dUJFppubjQ32FhENpoTWeFhxGMLgK3TJ83toD9PGu",
  "key24": "tFQYZzAZqmsd1iMV7BuVoMFZagbhghXRtCCvzx9AvUSWrMqbAFBfV7JaMjJz52s8KrxmnWq35aSQ4a13Bewrfds",
  "key25": "221Qk8jwztmJPqZySg3SLDQXKjw1ej6qhtxgrFJsPWFyciTSyzEgThJfiJHnhLut6o216vzMmEyCXrj89a7LGLsq",
  "key26": "4vA6BDzxpzioPgREKmfYcF3XPFMgApM9SGtjST2wsAdG3DukuqtNc2Z31hoM8a9vLi747eLALkbzzW4gCHSrNob5",
  "key27": "tF7ZpJsfLAwEdvcJwrLCEPzJta7vaxsYP5BUTgGybCdqgrrwhPown3DtY9TyCY1QUDK1G4i4c6xzSxJA6U78gPs",
  "key28": "67H1vaQVxVJV8bjNBqJ4HqBSpJ2stthy2DPELfzeGor4G61fPXqnuKvWrto4jRRM5YP8P2TVGZ5sy8R8WQhoPaRB",
  "key29": "6J3yqQG5tiDGgHK74aXEJtgQghZ3voFNd6dpB8s5wNLxP6HjwDnLTVcLQ6AJhWovvZkwUtpx5kRAgWwacY5noVQ",
  "key30": "2BLMxewxzhRRsDeaWrmzshMybjCYh7bKGQdgEBoEdm6uu6U5MnnHiMLc9iKA93EiGFoQJiqZu3R37BHsAMNM2vmS",
  "key31": "4FJoGeqskjcLRPyKetZv57gRMWZp2pJMdoVRakVEUHSkeWja2ErDxxfSHDDTfCqUp7ixe3ydp2fRX2DeGo3yJoZ2",
  "key32": "gZQnuVriroH5yfxgueqF2g4DKs3GzaX8w4V1UAq16eGtRSQcz38XzqG6DN4ay29KYW3HopfRpWk6R4LAQCXDfvz",
  "key33": "5LV1JN4pCTzduX7Ww1DHsg5a3ndthVoVmXzAWS6LgUjEpczDgjER7Y1yGozb5e7X7mtwUkkHgH4ytVDQR8VbupcH",
  "key34": "2J2z4GLJsccKq5ZrP6FWMxQqAbGiA679gwz3gvw1D7UsqxgVkJ4cc59L1Y3mwUnoPyzzW2o4MXwriHZ5v8aDSFjv",
  "key35": "5f9fMS41QZSGBivp7ZYeRcGgdSL5KgXuF5pJr3LFtz1XT6jQGikxXJyH3g3p8UWPxNt5fKFdDJhd2zLf2ZBzftTX",
  "key36": "4xYkfKQpX6xhPhBG4ipfxw53WTNKzphhLkHSRwe3ZMBgLdncgeDX7G1GemrPhgyWsSp3j82cjWBhDei6pPe8rKsG",
  "key37": "59ww4nBBazD59o5a39LVvRe2hTKQrfYyA3JayTBvE4fUP25gyHXkakFkKwS7fsq4qcUS7W7VmNJ6x94unoJHRYKb"
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
