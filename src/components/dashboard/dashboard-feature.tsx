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
    "eegXzAaEbzvDrUnXdTdLWpFKKjoGEjTn1FfgGkumRgW8FEELtmB54qAE89zCTkqyXS33yeryqYkSFdgniA3fGPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Cwo3PdpxU5Yuts1Sx5iyWUscXP9N1ESAMG1pDNwgPxqY2syZRTThAXirjidk41PGLShKWkLT9Zcg8YzhTpCK2Y",
  "key1": "wQCWG8td9dhEDV4EkNFJxNJVuctr9B1bsAVghGvgtxrKBReYmvuG8decqbjpQcM7qHaHbhNCswKJFdaEPW7Wnzw",
  "key2": "2avVwwgDpVpskRYwNp6azRu5WSnqb8s55vLXasqLpMjo9eba4p9XmrDAarvtG2ctfHxqe5GS5hsgaKZcriDCUkLu",
  "key3": "3UWwnwfz229iEe1Xfg2kkjRwc5zVSbgAw57WnsyH8y5yFV2fpJy5fMYhasEYjYiW7L6ybg7Pp8BWaaskKkQ2aHKR",
  "key4": "51jUkfPNJuoG3w852TkBRVdRErpM7fEfWGiEpxDfBHonAKQ2SsheMBuSTgtABXsJcyto6LuhcYYNaknZU8y18hH",
  "key5": "3Fq1e5ZFs7fAopfqCCmm5meCRXKU9xEEo4xRoRb5r7CrbQTn9yaDnHh3DjD7AYzQyA1gRG6KXMAftnYM7bmf8qR8",
  "key6": "22VFeWtMg1MFtzDtq6gomYR8tPubFb9Vd1Gjy6KminRwJBgoS2L4pvReLYwp1WhN1JiVmYk6zqDaGUuLKUqs2X6d",
  "key7": "4mSfDPhzh1vQDeAuvo7HHrmMzd15DkPUByQiWMvB7ynNBEEjkTYTgMCZTLNPH9iHixgMwRzFi6rfnNWcZhRygQp8",
  "key8": "5uEGoR7sqWdaXhejLEvMmvhFsrSxAweh9Ns9ffForge2md2a3G85NMbg7BZfW7eX6gd1QdkLA36JUGpQVwh3waeM",
  "key9": "4ZokJEX4jVE8BCRU85uCcDHinUnwD5jKtwNK4oTbomXcLvnziJrv8VoXoqo1ndaYcPjD91M5trk2HcwDG74kZktM",
  "key10": "3DfDXUtTBosvQtH2moAY3PijErBPpBqfgwmPWZ9Z6gP6cs5R4vJzAg2pugECzVX4TWSJWHAYFD3dv8xyWDfqhz5E",
  "key11": "3ekcV3a6Fwi1B4HUJ3NyVGxV4evtuoBKbJHRtGCqLWP73yoyq15kWCpE4nF5P29z2e3NrqtENmG7kQBC5koUyf3z",
  "key12": "2i3cUX87Ko6tYrAgHWM5aCXCb3cReeQ7dJfYsbNDDV8uEPNEWwJqinaC1nmcd9iRvh7NoTyLgqwMhczJQJ9CtQFC",
  "key13": "XukeV9oX22GmmoE3FHvB5ahMjjTJ83s3HAmzDeArGxyBTLqvzYsexa88oB78KsSLyxzSqzewiSgiur7EfjY9pma",
  "key14": "3vEQdMB14SDo7UKGsjEdCMX8btE993qtkZjNzDRwMhdhS6aVWr86Gm7amVJaozry1JUXBQhW1nP1QupKgRAhN28B",
  "key15": "eoaT8ABDrFM1mzzptcch3PsHfy7v5Shj1TAPsBVskGHL5VFA82efrhg29ZVRyB9i416scaHMFmEw4VhdbMgS8xF",
  "key16": "4asYM1SWEHCWdhqyvEXazKm3eVM4U3h1hTi8DB1hPnMBsvqBRSmpTqPErQ3BcoWRQcFeMUV8edpha5UVgCMcxHwT",
  "key17": "7w2URiudsLWbsNEAEyT7xssmtJM1X5HCKWCoJnDXiDgcJLjZ8GajJSqFcRiZZq8STcHuQDDrX9ef6KK9u5SvLM6",
  "key18": "JH6qLLptCs9mHd4EVJNZ3CeB9DFUzjN5qrVDaa2WUaM4HLQH1ip45mVWxWTBhLpE8Yk7VgSQdmAKKAcAZswk5mT",
  "key19": "3MfoWKEnnVGtdLNCwAg9AjKFfZ6JuWeWUovDcUp1KzcLj4LAVzK26VKVVrdfrRxy8hy5mgkZqYDfdyfTkMXokuUH",
  "key20": "3XDofLcGgr9LNFkBDQFkLAfYNzkh6Fb6rcqrb5pSyZuqh2X2CdwHomZTCXwBfVpq68aa6rNrMXvXALZMUHJM5T4c",
  "key21": "5FoHSWF5cDCTHGGKxEZCWKD65xDcXCTjTDBkDPQD3woYidsM7T2X8NcosGYFNCetMgQRPZzHaFxuaG7TngAzbTeG",
  "key22": "2u8uTcKGjKXAQwVBrK4cE1YtvMQfdRXz4W6E48YNsprbmY6Eo3RgSYrMGS2K8XAX2j4RLAzkvjTxCMWtCZgCtwQ7",
  "key23": "3W4SYmv9GZDWbEsPgaKKG8ZoNExAsiaSdfftbk8weKSFamQuKAuYgTMBRWYwma5UPfcqK8LavuprT5rqFekREdtF",
  "key24": "5odXsYpqkkPuHHyUPdr6WrrpyFFqg99gtvjgAW38d5wmw3dq2zj733d1XTwfESytJgHtXH6E4UMcTxP6nwmXQYX4",
  "key25": "dTwAfqE244s7EEPfTQAq6hZAvrf8Y4VU8zkGNi71rH6q6Q5nMeiMhFrLNdRVXBXtrhQYcAaGo4xa3PyNueSwDxm",
  "key26": "3Xuqb5ZcXiZMcMy9R93TKZecgBs84t9FsdyqhczLqx2NiE74UXGqmBtyyfu8KZw1yX3M5XD1By7fRX1wKXhSGk5d",
  "key27": "4s3uHHV5gBYNRWuZzoLQuMBipJzFsx3VeYC8dTkkFc9K2gGJeQ1eZ7VTKbrfE8kfNT77GhbmShXK7yhFHrZ9Ug8W",
  "key28": "KC8Z6Aur14rfTqagWtx8pXp4mvoq9SpHGBrGyRQDtE9DRUEHPPkJ7GkahFGFqesxP7RNRg3Qn4fWDrXs655v1Nd",
  "key29": "5xDZZxxUGhmN2wSYMMUsi7yrM8rQKTCnTyaXWJR52D8FNFqNGFJmXkcvihSqctzLSQ9QBn3UZF7Mp7EpUJj9Yy86",
  "key30": "4cNMYxDjLn7jgBo2641yA8c74JEvXFowvrdhmCDuQcotmKKT4er8JBWegu7AqenJNcU4QFf9bthUwUmj2kk8MXVZ",
  "key31": "42HNAx9RkJYSha6NbfMcH9Mp272xJQRpDoYQLQ7sDLeuBjSbY8WLcjzbJXYxbkGrMY346DqXCstx4QiczyBBscqE",
  "key32": "22JDJhGEYCvYfiaJwvZdKKJZCmDHANAKMv3FRF7cJfqC8dMbE2tFrrkpFC8zG5vmNmS58r9d3VBWXjmXbUyYbzBB",
  "key33": "5F4dNTzvHLxNmfbHSNKLb9cijFoppgXmfuzG4pLtkc9ZVufSeDaeLGGLUW4rxy6HsaXSVDWQu41GXSeKNuvHg22n"
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
