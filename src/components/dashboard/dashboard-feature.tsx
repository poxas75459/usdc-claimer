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
    "sefENGFS17CSQGfErG2Z4anUJbNK9pgxpxDxsUNvTuDHiEiDsBi8AfDt5E77nYrGSq5e8xcbYxH8yc7dB6PjGkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VEBSmSnT3MG9bhgST1G39qeJzvCZvFxHTKHtgpyY5MMUDV9nk1ENYc6AnwDfmfVmjGQZsV4yShs4fqspMo9LCP4",
  "key1": "3s5rbBWVy797NgnEBTrZBRLsr7kpSKy95Sy6NEi9bvhcHZa9LGJ19HwPfzvo6YDYpgEGvXrThxZq4tVRmMjNfMTA",
  "key2": "5HYU3cTB7zmNkqMtKqgpy59uFq4Asp5j3j4WJmhHAia7DAxDNhtiJPdQKhvzK9XFJxYxhN1wsNAkkWcoSDYSgykB",
  "key3": "31J2P5kv5HCTfLYzxE1iAVRUBh1GBnhpHK5yArCnC2QJZbgBqEyLWyVC6t1ZtRbLHy5ftzsv2JWYogijqf8LFPpQ",
  "key4": "2sMeg5snqqvbEqptGKJdqXFfGHJmh83sNdyE1fas6BA9qDzd6LK7XEkrycCuZe9gN3TwXR45z5btV6nUipYsyvQ9",
  "key5": "4CH1TwEqbnX34Qx44tjkCHMcsT7NCS4KKxx4yr9dPdxLN3Du214JmgGtr9LUmzGLG8ARktP9P4sngumxdc9oyCHr",
  "key6": "ykqf2jqh18k3c87Jv2xhhq2fEXuRQzNyCraH75gbcq1dFJBwtKC4TdAcsz7fDY8zn1vR3eRWFWfDBRomXQgdT4X",
  "key7": "2nHgruSKWdmWKiT92V9dQcbHdbsHPYm4iVJDo3CbuAmLaRSzpLDhENEqNBzXGSfAaP8QzMuZ8VCXFnaZqZbZugoA",
  "key8": "5cDSczKRpLdm68AnPTbKvR2X61NoUKK7gsGEjgBKFGjnz6PYaGSCDCdcMEvU5ExhN3SrcCGBfXnH8fKFZLoxEFMf",
  "key9": "YMBxrFSrsxuGiZHzdBkzaGQ9979xBgUxkXsMTiV87qMfGQspB61Wu3u1wKc1TZmCDqgpdZbdW5CgH2fH4oJRi2k",
  "key10": "3W7sErNTSQatZCxwxLjWSQpjuMWHghwKUwK6eEgyw23txhHNCUaxZu47yW5oi97zfefURLzasn6LRct19ETHLpqC",
  "key11": "4wKsHqDS8hi3tWnX8wVoxQBBuPhxBSFwhjz8a2WFMvXy4PX53XXmCU5QUN79TWL7uDV7cMGATLAzhBBH6RG2w8Cu",
  "key12": "2XKqV7Y86hFFGfF1ngTu7ncEdvBB9c3ECABs1KX3zYXhvnRsxrhokndmhY4adCiujKQMrER877CQxHFB7azjpjgK",
  "key13": "2AfiujBSJjtrEV56LrPSgsGdM2Tsn2xjh9bBJtYpZLZsv7nkG7DgdqmERaS33eESrybZgDTeBN4C5C4sLt2k2kfr",
  "key14": "3vZf7VC9fqK4N8CKJSbG4qKUhqnq1VYcJV4wb54xUMRaUfmanDDQna93BX9whmr2kicyVfJAmikZhRfB9MME8pLD",
  "key15": "2uWLh2Gny9cHex76xR2wgL2gRo79mZCNnw5noRZsw3VGT9kFnPWhcnTXmioJ7w4UWYpF9ZErFR7fEvh3wkK3GKZm",
  "key16": "4cnWR2ucLDGwesZgKWKiA3mkmGCBx6gEZ7sMfyNU84wSxQPzcMjnnDJv8foPwXrDexdUTUWkFXkHvNZkzjJ7hKra",
  "key17": "BopscsPdhGBm9hJfHRJR1VeaUQnceT3Pom51EJz2T1iSeQTTzpUYyG4UYf7xNmF52cjT7PjxmNREqYEURPnYpr7",
  "key18": "646BjUBtMvGehBeBhdmooWic1263ArhQEyzXhHfmovHEu8vHi9PrGc5EQFBk73EXetyLPUCRk4aUPsekdddMEHVr",
  "key19": "44Xz7RsGo79ZGVE3h23aCiwC3JKGDrCCV9g78RtT9ExbRGZsrFUnpHsebz7vgNLF5XUWEzq4p34eBm9GRDyHTZit",
  "key20": "RNzCeX6rb4dpWiyruzz1hV9ELCXn5cJ3ZBJi5VsX4ipzhudfHVxbaSspSgFfr9dga3iUQvdTKRdsVpXGtqTGaoJ",
  "key21": "2XEaoJNLUB2xHHcxBMhaia514nVsNoHoVo5diubz9AzvmEZfr2XDAJDTaQzpGq5NdtYPbFvt1hH5ofRsFp2QNNoX",
  "key22": "3rZYbk9MuDKQh8W63DbPTMckg5pntK1hA3YGEEShfKk6Go4PCuvezKxPCAjeNrPTYZfBfYkW2pnyUVNRcWrGq73e",
  "key23": "2CpWEEutsJKwBX3sXWDaXHnxiG9b3D3NWspyCPeSKwNba2wuWp1bhmBfXaeJWMbPpRm2hoXxn6Goi5aTxQUh8fxD",
  "key24": "4bh7iaRrRF5etJGCQ2sQUpyk453YjCt6UkW56bHUUmefKTawLSp5Kju5rc7A5ak19hD3afcEtUovAJYovDuXtYFb",
  "key25": "5E9zy2NSaisZixBSZNHJETnBfkThFEPYqAz5waSZjNnv8ytzLa1tkH5ueMshGnWntHc84jhQCNznXqcrcir9UAEC",
  "key26": "5MGjniUmZYAHWs5SqEwhEnf3dyF6CeyZ78Kfxe3jsztrsLzeGz9nbEGGfDZYuNnAnmAXbxYRraQeBEzDSRrTx8ao",
  "key27": "4fYPnXU25EUtaYU1acmweutzRGfuK1szupNgWrib8ZE1fi7zoVke1wMnvyYf8vTwnYTX4tpsDE7b6yC9CiKeeX4d",
  "key28": "4WsU7viNf8X1SGucZ9qUMo26W8jTjA6GLMFrfUxVFEeob2rTcZW1YoGEUu76SDvnYkQfv1kqYnifDcC1p4P76ypD"
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
