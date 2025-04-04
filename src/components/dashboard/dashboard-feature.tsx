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
    "9uv6ffF7fNuCHG7y3BQmVGUBLLzYqTBzVFBhMYwNucZVbPmJzPX4Bm7tzUMv5mQSm6LysD1UntuDVBMPB8v9JLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45SQYHhCkc3QcUcQuQYLHTBFKzaoRSLJBfqkfj6CUktDYhoZyR3uwaTbPasRVwcyoZSAXJuLFwXhMozt84RWst8Y",
  "key1": "jnLwCYKKRo84AB5Yp7TStFmwEs81JQBPue33H2VE2xrtUrnydsPcPsVJSb3RQWvaFCr473KERG1McfprcrmwkzX",
  "key2": "hrUNc72LfXqLJvpxoRDwek18wjoveuxmoq5VD7UBVvHFVhJ4ArDtSpuNZxDPMPTu5pbQmpUEwHe5VKVriRWfdcF",
  "key3": "2jQSWXRgxih1xaMHsdVBeH4L5KQfWYvQ6usJ2KZ1xrrHKaNUJwSsnhcgFGnvzYN6hfdv5F7wpGFRA6DJGixSRewu",
  "key4": "3s9izHycGJFXfjCtZsWj4hzVbU9jN2sJ2bkgDfNuMDb4SghJ6se5u2E3vgpnAipSqozjcU1tMG89geGMCnH8WKwX",
  "key5": "2wzWt8gDqACGZkA33SKiZ95Ec8PZDN1bMcn7optSG3smgPGdRKEusUEbm1YQUYqDnwS4gxriMthyhTtec19ap9iC",
  "key6": "58UUnQePPYR2EmMogYU187aw6mJhfqJgbiH6wYqLBX2HpuVxiz17vXEsH9HhvZPFLndUeFQKLKLMLhBRgzD6zKME",
  "key7": "2tyiEHn9HeU6odVHLgxEXyqunRtujEb1VRXcg35hBPDqu9xuSQBrwcdtb42QtxENVZ1RJAyZEHFR34tukGqqjpCk",
  "key8": "4moS96LWgBfBf47U4YuuEgTpbgMPGDRMvWXaFYZfkmGkrTFL9MSmG4JpcFx7tStkYmUsBDEUk1bU4VTZp1xg15vj",
  "key9": "5sg1qQD6BXQHAkdwPfHmScSP5vfvishv3GVZdSqyak4wZuwqNNaCBFN2CjtbD2hZSH4SnN8Tayj6PddaUZBYx2su",
  "key10": "2sYyL6LtAuMEGD3D9BfydsBA7KaiSWhsjEMvoeNZAdPMCJRyc93bkXdXUxm7o2LXpQ2B5L2WDsq2us1XCTrPz68x",
  "key11": "4szp91hxbPgtTX8gJFTcc7mWsaXT4tFLiWB3kEwodG5KbVy7yqvKTp8SHBAYpJ8MNj2eFSverLz6et7t3w5g7HQc",
  "key12": "4BfidkCUUBuUrg6xiKAvyWncDCS6umUcNkbR5vxSuzQbWUdqeg4j4fhVTyd2PddcdTZuwRsenU82xm31Ep7JAaBe",
  "key13": "2DzrogLZCUzq5L9xeBcF5gShmUKb7emyb2HKDnxL2KgYXYduaBaR2LiAaGCbF4Y7NShnFXwXy1HcALKwJSffpHH6",
  "key14": "4trLw9zy5YyeyzVBDJG8TKyUDfT2AdhXEbErqTcmGCMW7cPw29SJCKP4yvzHG4rT2LjkURCsjc6AHZcmK8xbYDqx",
  "key15": "Hnza6oRuJttyB9cKXSY2xDmy7pmGsuHMem35eQ18z6kiE1uLpFJLETiCrgeTF3b39YwrXfWRiqhDoi2xdrXStRd",
  "key16": "2tNkBac2Zje6y56Ee8RTWpornCMQtzj7X6ixVwSnGqb2YvVhKqhBzkbe5bTefweBaovNNYWkzhJ5qmGjsdW4zR1i",
  "key17": "24KfiJT7PmTALvFknECfqkXFbQPrn1zUh9e9Prr2SFaimJMCCaeYuvv17sShdPdHBYEjRDrtiXQ9V7XshkuNjWvV",
  "key18": "r5m9QtB4pBWU4z1XzWo29DRZebp2RhpWmQNmrpza5Yaq416MhFowm9LVXucedQzrYSbcbFC7hEWx3kGvHPJMULX",
  "key19": "61bXwzoyXLPKbdcqhZnbxqB4nzTYST9Vvw9DykUnaamC5Cfv7uTiJYeE9NRPGmkJS5P96W59oqY4KeorjR1k2T6V",
  "key20": "3ys9RsDPzKZtf7AmD7rdJH5ZgYm7CoKvauWcUzp8kf3upkWntGZnxZgBR7mvQNnqBSqZyZSon4LFxkhFMLtn8kV7",
  "key21": "4ssC1fxumJCbjsz6rWbz6onYhNKxn7aA74RU2yEHs7AjQtdygS7HiuPkEWPSTHumj5XSjWnP6DGPxnMRKddPyPPw",
  "key22": "3nDGqh6mZ8USw19U2DaUkpgEXSYwt3J7d46dTHGsA6au5eecx6ekseHFrFgowhxxMqfWtXLUSio8Zrx2V1AszjBj",
  "key23": "FPArUNe9FXie1FqTFurBKiEMhPop2J4Z5R3RsXon8LUhkrC6G19vxrPzrxU7TmXN7Mdu89Asksm5aP3KK3wcegU",
  "key24": "4oQaAn9fYVeGmptP4Y8q7Cy7wZyax9atDwVsa1gzqgs5sCDZDW7GtTEuPSydaiJq4dj2vpKwWtpr4eXD63rRhDYh",
  "key25": "5EpQJcipooa9estrSKXxXWTrGxvfw2uysMK6Pspuet3wufsiYotTJ5ZCZZCTr6XQu3Y8XyAQgYVvKAysaSwmvqQh",
  "key26": "22rc2yLUnAjmjh2GxbXL9D4AUBfhAYy96kMhBhD7671xp6368b6kVzu6jX6tqfxGQNR2wJXziwogYj3U5Zk47ayW"
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
