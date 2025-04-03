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
    "2ZhFCVSPFT2SogDXsGgeKjX2BVNmm6jXnLPkmiggSunDZJXCejzySuqFPsmK5MSL2UFER3XgCaT1MKJTzYgtpy74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LpLisUFewHnWrtTWzHAsbTNwNKSGQGurGeybEkfKq4rEDCuzU8FtwEQyeanYas1oGhCvudTDPs6yv2LUgTgCqxv",
  "key1": "64jTsCxSu8ZkDFiyuyi8UN1W6coomkSeH6bYPi3ie5GJ5xtAAsL5TTaNR2hYRcFQ214cY1hZCuuRdTSQ5uBTLTU",
  "key2": "2MHofmfz2j5CGUFn2Pq4p1y9faxHVnu5Jen1HedZCAEUZQQMLWDh7yrGbrSAQbi25JYBsxC4maAvx5iAPj9KT2fg",
  "key3": "2dMRho3h3bz2NbNU3rsYmd4NKsc3cWVF3fPMJRS8RXBK7eGcvxQqZXiA7ZnQvjxd85Lr8iw5jRzX4RJd4EyVEUFp",
  "key4": "4UfEB7yDcHC8eBSU8pLnVLpqAy4uZHQXhSbUZv3mEnNX3QoKEXi3r7FxkGQpCFGMVdtKukWvhxFMEzkm7jzUmWbY",
  "key5": "4SM8pGKT2Zsi8647mEnyVLYXM49C4NfWhcc1sMGcdAMt29ExpNa3LmQwYKjp8BqiddSS8verB9saYnoBU7Kgfd9E",
  "key6": "8NvUVkyh6nYdCTEEqvsG9PbqKJKd2rT6aiWZQKCeetJg2AwrfRNWbjZWNd7ioWaT6Jv7fboQTnQNbVRGbibs26c",
  "key7": "2Ln1kug4bx9LpFNi6TNDAJhKJ9mc4bWhDxXCh6cNrevprpZ3z2ub4AokuFRYgrLbWwJWNiHUc9orp8FGDKVD52bT",
  "key8": "65R1YH3i1XXGehDsaHBkRLdaHT1ppToa3aNc18s8j4XpBiHW66f3Sg2WwscAo1bJ7jUyrU2ckAw38CmVJMgt6qrs",
  "key9": "uRtNQ9Vjgw8poumXPFCUanfU5PkbzXCLd9oSweqTTwhuYh2i8945ZFohjsyeLe1Hw8nSC3qAjJX3CXHS96P89JB",
  "key10": "TWj8izbjHK6XZvomjdfV1Hn9e3DsEmfynG81Y894k5K81LBGXULWYUEds1PBAthh3ksaHYZWvuSEhWKn5v38q6B",
  "key11": "5V3MRqyWC8YJAHwbcTbS1N7vG9axYxVybLk5Sc6z3sPeyvE4VNGCg7VCKTFjU6vV8w7kk4jMdKqHc6YspZVPexMv",
  "key12": "7A9ZgdV1ixjnvpav7VbcNCf9e2Wut9Chspg3iCN6sDZWhSLEagGvPi76qydPmEXfQEuD7CaeafvYL3ADTM6FZJ5",
  "key13": "5bLiPG6e43XukAdSmbgVkz3sXrNnZr5qkfgdtuzSegoSufzEqM4zwpqRYmbCvWUMxoiUPXVNRR6qXnmYzJ4wGrBM",
  "key14": "4uZjfJw3Be9mDhcUWe1nSmiHjZxNHAREX7TXRNmtmhghiLcKJ38tce915hQsmhkPSBdTEW4n63X2k4jM2WZ6bo4b",
  "key15": "4F2sRYUyBW3E9hAWACWztNKkKLibzm1FhKiV2PW2xSFzPVMFCqoRj4ECwEfbuWGnu87CUva4AYoXf9PUzTcMH25h",
  "key16": "4djmGrYT2gBNkeZTSmmSoor7WS1EuA2UunyqSzZmQnh2v8uuWAn3xCApLQceGprSy1EgJT5G2ijQbAYAdrxwoKWo",
  "key17": "5xNfWGfDzD2cXcKZTGyTqePmXYmmbt6S1x8Ws9DKj1aVhR3FWS9BThTbCRgb7VweyVLhskDaw8d2iEJSNvG4Eoqy",
  "key18": "3qePUjL8wz7xV2gWPFrYLc79fDThnyP1enaxdzs2fJmba8PPxpx5RpssxJafVePXwhTWdc5RvYfKX6X23dnePBBf",
  "key19": "4c2LfRLvTCfZGfXJUnXVNxxVCBB9624C6T86jUwS4TwDRwh2mBsMUSYLvTgf1Ke6jgpvy4AscWWUz93AaMCNouao",
  "key20": "44ULGGHnSapHPCmskNrPDx7uAMQcSwUDrK7xqRkriHd6MALajXR9iLVMq3nnr46m2X3yqMPseESmDea3rYZ9F81J",
  "key21": "54jn4h2o3FkHujY9dzvUpz8qiDoJsHm3iaeAeLR3ikJoBnyKkpgdqdYTkpqLsLHPrRBytEFWTn4LjK9N1ca17kZG",
  "key22": "2mTgvku5NTo8EQJr8UwQBqKehzLhTiVcGiV4n8toHXsRpNnu74iZ4XJikgFbRNiReQAKwEpz6fj8yxjfyxn7cttu",
  "key23": "34oSiWcXvAcy9AuMjTFfCEw9qzhZciBLJS9axS87ujc9Ku9a7FsHbwq1roF6NDUpoKffaYFeVSnvTegtQ8N4rY6a",
  "key24": "284y3n5XPm62iFayjUgcghuN8Dq1sa1frsxhaTALi32po8Xdk9sMdDU14DLDRexRakVPryHndsKfUAa7ehbd1vDz",
  "key25": "38RVAoVzMRrWQty7hGzv29PSgFj4ZTM8W4LZcQku387DQPcituLx5r7j8zUUerBSKEyKRVh1T8oVyr9pZGkDjcBN",
  "key26": "5LsTLJxSCzWCNJxfoxLhshMjc8ZNa6rhrVkswixkUh9kVUFHkXiXs8m35qeuTjo2RyVzv2QkJmxEztmgdGJZ8tS7",
  "key27": "2pwAwmLRsoFFxyfHY5cc3xMVsKJwQR6ZvhKNYEiZsKbsmwFPbjACXgZVMjkqpQ33kZRdRCLWTVMyMPkfeEGMaQSw",
  "key28": "4f2Y96CyLfFdrMH3vAjC9LUd62PpUAJNbHo6FyydZGEsFjzgEs4vRf62nupV5Jq9nxHo7PXbXEe5KNjxyDi4j4qZ",
  "key29": "uSxsRk5hhTq8FXFHbYajxnxw69hBhdnEU5jWLiuhZmgY1ia7fNjqNxHvVwBX44YiG7bKVvrfLxQZ8MxvPYysNKL",
  "key30": "FBCBeizrmfTABioAptcPa9EMHUmBV6RLrcQ1Q5FMpRJgtJY2N2gvDDTCnzXVRuVVo5z5cRudq92QLL36H5LfxtQ",
  "key31": "Jz28K6aNNReAWtzkEXh1qWN2viZjWVXYi1X7e191NF9Cgyceb2UwCGfcGyUwwu7zkDKogA1QZ6YeMiA54KEmNBu",
  "key32": "4vpkDex4wzansW65do9jA94JaGi5EDb4o4pDVdqtuQuuN4jiUGcUkCuvC5XKA6sHysTL4FEYQcJM9oWY6g4RTMTX",
  "key33": "56qKSM5dEEUPLwkYzSWYFY4VTSEq7BEizq9PaJL2FPP3YrHMCz3Y7JxeemQaWradfNMd1q8oNkuqZt43PYHVahkY",
  "key34": "5Q9S46Lst2YMhUdGcz1tRT3nQhDiXKk3vfr78UbofRPHywhPZXsHjduyeyD7aaUKN152UDTGiyiuJHds7wpsmCPi",
  "key35": "3BKVqBegCVh6cKwemjxsJbDoqRP51tED6crtoAE2Y7PqEw45kMJ6dCDf7gqpiEjXHon4DLBPFzYE3QR5CCNJVV56",
  "key36": "3vxuzsoz2GwJetQRUJGjuMCRYYtbVgTbKYkyWqWjEB8bYpvJu3NXQDQwbCKrpLG8WF64dVX5u1xJNYeUYGRcDg1r"
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
