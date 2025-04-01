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
    "69V1YVXmAxc9xK181sJGJH4PtNTXNoX3igvkQg7K5LPfmnuFCiYAmpiiABTQ3p1tGxBdCddLDirGQrqphBo4Vif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P28jZ2JrY9uRZ3mz69An4vTDbMfVtE49iDmhnKnEqsNJRfxj8oGDSmgURU2ELd2JAKBZxXfAEPuh29vxBksEufb",
  "key1": "HgEXmcySpvK9r1rDECVvFEDXPM5eheD2NDNfgCLJ2HGvYWhH9biup8FGvyTHPLXxmQMGAyt8zJKxgFkrDLMgXb6",
  "key2": "Ud29gpBAhkWpZfn9VA8meSwDpjJSkVHJiftGjsavYAsmRCySntJmcL2Fj4eH6w3BVALYy9X8BnbM8txr8nMsPWF",
  "key3": "4gvEzdiVYKUg8JbwLMzhY5LrCe2pQEpNQjycv39mcyJEVHu8FBvpaMe8vi9VGt6VpLt8DcGVMUwvoQtaEg2Fakgf",
  "key4": "4k7UM81ayVUWcpaSM8y6ixxwxsatYZpaMEYPhhd923uYByDp3SCcW9RdAApxvdALZ6KNN2zKEkXTuxf8CmhuLsLi",
  "key5": "KXh4yvh5YXbU341eT8skUK1d66vTTo9w5WpHxzJbjz6gAbk5VFj5CVWqxBnSRwBaNCA9XPHYSxSK8mx3K6f3WAJ",
  "key6": "67WqKzo6cyVSX2i4fAqrP2BvuoyBificPy1v9FPUrKKLLV64WHaz6ngADDbmPJd4g6RqetGf5ECHTtCn8ch8b9WX",
  "key7": "3q3TCC4GXBy7FcBHF8NK186aTA3PA7YtnKeZaRTzGGnjBZ22cXb85ZfmfRQ9fjBqUBxUfMZdzZDzwc6Y5wq4rrFj",
  "key8": "3j6TRqMQjqyyroN5SpDCtgAGh4nDaAfwaYyXEis8otovkTBE8A9CbGjrvj6qtaGu6BhiU68DN6FjHM6bVBpErUg3",
  "key9": "3zeSsAY91wMXUQfkoBNjBvVd4QoqziYtJ8abLjBS2QLP7TscFwyG2Ye6EvW665EC1Y7pz81ZK3pZqvJpAwmnZkM5",
  "key10": "46wMEBsGDUWqLkQAJQLUg497Xr26bEz4ZhCWKy4uPPdHrfLwRDS5LxrXN9C8ZGc5FzqpRnoNUfGhj3C22v2zkvgd",
  "key11": "XxxQ8aorkWXkZU7zcFnTgB3VtHpuuM3jY5n5yTAa8aLmm3e8pNxaAL5jNbxHXow8xbJsibFu5WAqZoVsDsrspqM",
  "key12": "2U687EDbKA52SQwbUPxhDeCHzWTB1wLyFFMYPcGQvDHgCvAEvZ2p4xmyXdsY5nb3ehy44Dnu6ohGGbFSNrBtKtKs",
  "key13": "53zDcY86aN1unys7ibBKUEQNXiu8jFsySCQyuvN7c4SdpVvU2yDiaH6WD3rNv2gy9pPAXhBE71iwcQoNXwM4jQk1",
  "key14": "246SMJ4p5ucZJHTnHYuq4sTFo54zA7ieLW2Di1TF3A5CJb9FHKpvrJZBH3Umo5ty9mfu6yBqdnpLFGYXxm4QTEFi",
  "key15": "62v1czyZAxhuMS2ns4GqH2QssxKe8n6ser3ewTfoyKh28EJcBeDxqHAtJFLWGLc1e3hLcc9LLVoQwNxneAW6rJDc",
  "key16": "J8jXVSdtwbAEeXwLRpfn8z3WNtFnYi2dNBZBnYswyPG5ZVEgxE1oZGLmqcaPPmTvzqTZDCfoqqQwH38WanL3o2Q",
  "key17": "4eML1YX8qXPKJ3jZiPZvKsyNyz8a2kLUEYHWoTrYYh3Cqam6o2PQCGT3LPgsgDRwh6u2ZoJicXt3oUj8DxadCsg9",
  "key18": "yEY7gUkxsWpFDzwU7riV2Yfug2Yfa83UniekGysuxcAtadNHTXJJpTbSj36x7aQWqRojZoLV6ufkBvA7SKizyrF",
  "key19": "2asa3pnNGFjjfysoTvaoShL4nodvDBT9DfTzKtZ7H7MUDN27tsNLZEjuNqoS3HKFsDpjKyeFVAxcocJMShcVBC8T",
  "key20": "3m5yxdXU9fxCQsiYYJ6LcCMWxTiPEDaRtmnwEHs1uKT2G7Vek8frTSnxzVfkhhrcEVFCvABFaFecEKyi4wgRQ4Mk",
  "key21": "3nmyAwvj5KpMFtC65ExsWCbJkgFrwWaz2CLvHCDkdQCuKgknaTqCcMi6pWtk1P5Ps9fe6h7XY1yH6R4MpddFdju8",
  "key22": "59dcmHeE4JTLeDGXNfZMwz9EXYXZjNX3JXWviXg7rshJeeMtqrd1VvKXKscfr4wDpXGjXRZwD4L68Eo53oVs4F1d",
  "key23": "5gwHXFVRHJXwk9EhRGisRazsFok39Tp1zbgAP5GmgTxDxXLxG3RAUzcUCCtZBVi1XjcYj4ZfqDu53LonU67WbLws",
  "key24": "34MEDWVY6JmU1u8QTCGqLyPPaLz4yFtJsK17SQspHHcDUqTxLwik6G2Rtxqk3MwQ3zeiFwDDJo8SebGw226cpAJx",
  "key25": "E2zbgebk4BRfrorYzhBKTDAfo8iZR79c9LKTMdd4ZsVhfmubfER8U2XfWFh7LmRzij8APNHd6MTsbeLc9EEHDjK",
  "key26": "29gAh16wJKJpQMpf4hDThtewZKbtjyeJtniidFE7NTbsdnV9HHy3zGYgnRAWn7T8fxj5J7tGPwHMw8rBvwd57nf5",
  "key27": "5D1SFWae5c7tDDbDQ1RiARrCB1iZGQBrPdS9hukXoEg5zxjCFninphHohmgZo5cMvoXnS9DjTHHb4xiksNkEbnkc",
  "key28": "AqNqun3Nrop7iASZpjQaWKmDt7CmybeeJAG8cdPTDhu2kyfwhpc7spsZvvrW1chG2uGoDu26oQP2QwcHHaw4A16",
  "key29": "2aNT3G1HvSyVDC8LXkLW5vwfEZBFjpQxMogZ47bTVpjxMTa9hdsixo5p5P1EacvvhGzs85ra9TGuDo9htHXJYRLz",
  "key30": "484nyzZRBpdYYtF5J2qSka6mn7nTGEKK5gz1ibxS7DzbyLEggSbNeebcpnnUX2G6tejfPBdRftwJgfSfm75mC6vi",
  "key31": "4tG58r4SbB5YgBj4EVA1UTXzo62tcGLZfCNHQmuz8ZLSL2xjGntzcozde2fc7ssBassqnJVmQYWVwhVvPsJaAwNP",
  "key32": "2naWJ8yQZ4g53RzxgbP1VHKSUABW4JqufjPv8ZaawiguUh9ZYSfPa4brspWs8PQeMfz7sxeCgGyySEjeBaX4MFxU",
  "key33": "3Uk3GtraaUEJWP1nAiXMknXP9skG8QJZJdoHNrrCeLeBK9sFdNvCghsy3UsMA7jpQfV9u263ZJWReqfpm9F2Yyk4",
  "key34": "4n8BxJhRbvwj1QPXxWACJcz6FYS1EycFzmkgGwwvJmxJ3nGKNMSJ8UJ8ewqWdcvw3umwk4BDZpQmjxBfQCBhfj4U",
  "key35": "5N72A4LLcBkXBHebTUoNVLb1mixhj9neWgHTzifNCSjiF55jkTQeJ5QnLoqBVqpT2gRCzhkGxYJVoUJCo3CMhvpk"
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
