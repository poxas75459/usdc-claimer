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
    "5dbBdNsg7ecyrfizXR87fnNQosCTvcFxUDJByiCwDTfQWEsDip2ZWMuqsidrz69QLFAWhNCs8xasYEHPm5vVHAfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AwAkjRQuzyzk1QNoJE431zuPd8xtiTnMWwFCa59BtVWxx8xKZpaXeFMuCiAFat7dt4XVE4giKLLsudnYegXEhd1",
  "key1": "1z8W75msCfUEX1ZDK76igZJkD91QJZd4DWGe8yCSkdt2vCSNtNfDvEpejp9pfPnUi8H2TPVCg2nHeDCCZmLFTSf",
  "key2": "5LLU31kiVg8AfPD1KiDsj37ejSaq7MsSQhdYszmMxLSxLPozTm5618C3u5LY5m7mGYXSVirLHWqKuSWQ52ddrgRE",
  "key3": "2ti6KQamZKB6GkPzwrN2tG5rr6udkxtDiCVZRFXCfgXVLnASBR8Hhwxdxzvub7m2Wv7H4pJvHQzvFbpbY6RY9U2f",
  "key4": "4xLn55QB3p5N46p8o8QXarNZGF4CLsr3rz1utcWQ99h8WqoS2k7ajbHVSf5Gdx7ziigjJtsoFq7r9AuaeKyhsdtv",
  "key5": "5FwZucWSbFHjmfJW3VEHiNVwGmc7EFhDxPqViZ3MHwtnM5dbsSK2z6xVeLoioeo3jZrFpnC7onHwD9qJDm7TbBmw",
  "key6": "4mU7H8j8pRnPJwLsiXT7buHSqdE9cs9Mfdr4mjFti6JX2ckxz2JiHhBiVhjyYp9fhTfRMzo5kAyWNpsYypEV5zRY",
  "key7": "4AZKCbKgyNkqZt3LBHYMAyWrivpPYLrBL2EgZm2PJENFiAKqqCxzdW3571QDiHGaHfhVXAe7fpUAX7YGz2ztdEX1",
  "key8": "67URJr6JTCSAAHKYDowbPSvPoTYY3B5QAVngoCJRqUjQxBij28hQY2h2HXwQE23LjNq41hVvJLcVh8DSUVnJS22G",
  "key9": "2Aa7UeRh2oUVJEBm3ynUNTs2b9S52vLo8wUofs13ZR3DC9hwbYwC77EK2grTYYAmFShgVF3SQqqK9pix2QrCKV5U",
  "key10": "2owuYrGUSPoa4vSTXhXniiX1ZoXqBjcn4QvMxWMDrQhg38kLiDh1nRkZT54PfSPDybVaEiVWpSsvkydsoep5atqf",
  "key11": "3Ganf8naChpjvJcvg55mpivpJGD3e486ZCprNFaf69EVh3FVvhVTafSj8d7QjToAYKZiX7myETzBNsJZVKqpxqyk",
  "key12": "q2M82q6hRfWG5RS8GXrdccDzVxdv5G2Pf4kgc9mGajoBcufVW8SyRvUSQyvohkSgVRfCRjdARWFVL9H2tTm6zUZ",
  "key13": "55hHcw9Lju9gnqxMjry8guxDKjizHqwawT3N15HxeWpFsbTwqzzJEFSRrxxs6Z6sYXUQT1zSnQ7NfjuvtwhzZn1w",
  "key14": "nLUpmDHKpjzzbpAN2Usf3X8cK1JkqKMLfrSrghpNWUgPuq3U67UAVmEhpsSMS6QoQPEt5wDVM8xNpf96ss6Z9ur",
  "key15": "keMmN5DRMYiAM31DzQx6tQrBCGKbGeEx8Y5pq8xSoFeezJ2Yu4pxgdrfwdj3GGVX65MkwYHmDzHtxFMSWcDivyq",
  "key16": "2wWwbha8eyELFNwD71WeqCr49WQwrzhGmtE4QLeQGdzqNHfefGavrB76yKYEyPV3XNfB21yMh2oeUenjv7Kg8drb",
  "key17": "26Cjjm7BFyBDrcydpgVCDM6KibXH7Wb6fDfFMow2DMs8Wt3PwoHB5vZRe48sQsUdfjitUSa2pug8kzkTupZto1xj",
  "key18": "5EGb5tpjbczMxF5zkTRF83yRnVKcrhvyh44BkHCsxgEucX5Ud8UYkSmVtEWXyivsna8aDbekNZ3w9G5Zkta8c9h1",
  "key19": "HnRyZmdxtxeSN1h3PEiNCFnd6fuguRuajJF1CKEckJmC6EK1PMHmNyP4epVVphQaxeESpeN1zqa5eRHGcVQYR7L",
  "key20": "PjNiUsxwd9d7NJpGmYNhWuHTV9aXCjYnrCiCfdic79Mg7ZThNa9Dx3UBK5cCP2HvifMoumUrBPdRwuzu4yLhmXF",
  "key21": "3nEDQ2nZuWrBWLAXuwtRNFBj7uAdv6UH4baDBzZTRaHMpaCkNyaQxrEbX7UAmRwWKXQjv8D1nUXH23wuZFoQC3ju",
  "key22": "NCLNS7RyNG5ampkWJzJuLDZH2WHTvGQDCGXuH4SUZUQc3W3EWedSiBRH8oM8ETTWmac7RAvmSqbgp4XRkLa7bR6",
  "key23": "5PxFKwbabQKKnyrxjSpp7f1372FUBN8HpHBe1ZTQBzBmxEWuR683u44F6G4A4awb8bFCoWUXFbfkfDdhszHUh5ik",
  "key24": "2T5tUqjV5MhKjzV5D3XQ1q1r7SZU6AKEXNf69ihmLNzFXhXhnYQrRSG9QDgujAZdsk3ebSQnVrJwPfzjCQDcYu3j",
  "key25": "3PDUQoAkJvjh5esMaiAMmCm2sEhJYoaY3HXgSZj8KKCbeERaXcChQXKCXrDaU6ta9nJtGRcC6ppTGrxBVLWy2xag",
  "key26": "3wU1tzbKMXXjxGNBhJQzX6xS98xs9zZY4tdoWu1uumHXWkMzfvb4VhaMq8gHgSXoEGWWpiQJZJvf7hSBNcxXkd5b",
  "key27": "4MM4H23hDBAsmpy7M4LFZdEkXqNKL4V9RDaDhbdcFaziprb1UmBjmVsnZ2Xt8CoZ4wXTzoDe7rPEP9L3Upf1VcB6",
  "key28": "5M1Q7AXDpwcV4TzLutohKbyM7vHAxXzYzhxjQKG9aL6cPF9utdmH3NG3DYf2dD2xf8Yn9MrGjST6EM2vDSWnYjMm"
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
