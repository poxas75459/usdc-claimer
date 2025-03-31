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
    "2Gx8XWDSDQKcMFEVCS1YoRHwHJgvjChhBkwpTt7jfTkWicC2EKVj9xU93aFHRFS23gM8siZ2nmVJGZfabHFci7YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLXuucJixbRp3doZRXvjyG2qUWyJNM1JxhXXjyM3kShvkbJZp2jpidqrTYyzLT6kgjFxuMu7YH5gtTjFMYchUar",
  "key1": "2cPco4oPh5bceBe7Sez16E193WCELkrpjYCRkXhfcoq44QSs9dA7M2kHqzCVgKwaM81DwQAg7fiinXtpP3sMpom6",
  "key2": "4BS5UD8hMYnqTypwnKo8GaxT6cszpo1kFBEkzPP2iUSFseFDtjfh88V7VFzZPkYEEnXHfZtcARNYRVGU5gh5kusi",
  "key3": "2x7h9SDPQR2DMwLCXLPKA52SYqbfaLVhcvciKEGw32U8LbqdHvyRmNpC2c9eDpnvFXBrgVcigwXzHH3T5bjJVLXn",
  "key4": "5oXd8xbpYN8zEvezFbBKeTDTRcVN79MX98MWkUzRKXjjnREqAH3RVhFvrazCurS5dRwtBgrdmNdxoEKxzn34GGzd",
  "key5": "5tz5Q9nB3CpU9A887MNP6LEYM1dsMupdd4AAmzCRN7vN1ajyRdcZg2rVuZ94fQcSYEudrErW1ZpvCKyWgBitiLf",
  "key6": "432W1ctJwRUP223woweoewzEPdhX7Vwhr4EWobtxTUpzthZNf57nmroCUbVzZoZwbwghjV91A6mhH5DvSZARZx9M",
  "key7": "5RqMmYmxvVhC5CrnKQ5WRo9mDitnuz68At4WfuB3vVWWgw9Si4oaVU2raFwtLYt51aU7EinSkcaGXerz3EYTiwcc",
  "key8": "DPQvgSPGBpBNy8HDQSu8b2mtHGw5St9R2ZKFv18fekTFAdaUniewEMgYhwBLqSM5pLY957ZaZ56jGfjhSMDQno4",
  "key9": "5NNhSvEwuLQ2pNMHk8suVWzurswgqLzu9PeKyCDbAqmyqSda3iabHe7cutGrGtfL91KVmpH9AVpd3PTyRcvhC6w6",
  "key10": "2fSFiSNuiZW9YxMHxvtww8KuMze3XA46mYbX85mZYkD65og4pwVBhqW5j73ZhcJLSkmsx31xo8P6vmRgCRunoEPS",
  "key11": "5Baw6gC3J5qcLzFeDC9Ddwrr6ZU7dmv3zEZPEqU7QokoLQHQaj25B5wFKhiKYMFbEiZTrkn1vCqDQ25D4WDeqDEs",
  "key12": "2zZD12MLSpN9NzSe8nSC36ySu4vDCU5zhz6Gg1HpGjw3y8zBAT1PnXPNUBMZ8PTXvj68m4pAagN69kfD9oYdu3PC",
  "key13": "iURSxjPq5vPvXAjnKHfez9p77XESUqRPzZLeoCwgpYt98XfCeJkkYPUj3EBNUrEN8EDDZmbZrYp36ix8qrku7Qr",
  "key14": "46tJ3yKcmgJKoJvpeD1C8enLT1cF4dHw3SZpZVUQzYhJdQehY5uYT9HW7twvMvuLESnk3QJBoYparzVq3dT91UUg",
  "key15": "56MQK3BaM4nEBXXDj44xmh4iNX3NDkNw8y7kCdp5R1zbC8VxamLRZvgbr3NKLQtgg8Vd2LYGmJqZTH9h2sHJdssa",
  "key16": "NRViTuemUnNvthFBTGQQ1GTDmvFnHKNqH3TKEwkHZbUvzXbG5fc6nNmVfku33dhQQoZ2vHZRgzGLuJYiMj6XVLj",
  "key17": "33cpygdYjPR1acyT7JH4dao1syJtG3oUsLmfWZmjYaeYV3kCJ5wumjSkpvcHChZR2icABcwVJbAg3Kjq7vUse2BM",
  "key18": "2wq49QrTGVuxoiPu5DsRMZdwyL1cPeH86ZbtVrpG7XaayexuuJg6PMCSB7rgrkySQo6Gvz1MhixSBWL2jKXmSbmv",
  "key19": "2ntyFbkWd5gDXT5M8UZAf6jrEKp62ugsKPWv7gA5duyygHLZErsEbbvhbqYyRgEG8JbTJjFCKLmo2bJc3ABajHQT",
  "key20": "gJAySHPH1nFKyYrC6eYNGNUHQpaYb9fk1EPHmdnRNcjLKkqpLeVFoSXW47PK9obiMCHL6R86CxT2Bi2dkTau2R3",
  "key21": "4MMgnq7kLQguWY7VMeCNBbAVLdGQ32PcHVsq33RC22ULqiy44yxDfvXkcUFWc4rNVvRcXYhdvWaH1pvvX5yzZEM6",
  "key22": "2ggpFrU2Tk1fBRdMpR74GXhDFPZ6zgxfzDJovtzpqmMh9nYzoEL4kdLP5kTqjxC74YjN4PW5yC82XiChfLMBjYYw",
  "key23": "4paZT5wJVK1cgmUNRULWVDrQzBC13CA7UNCzyRd3Dnp3ukuNzpMHsUwZuQXcrk9pBiQWyiN255hBCnDAGA1qKZ8K",
  "key24": "Zi5tN5F6WAzsA3tBFLd4C7QGAcfQzYBiaou1PxHjRYCYqHzNCv7XPLtV6gzVZcc5KdWR8489zT5jQtyggZp3vzA",
  "key25": "2uB5rbhmhS7P26ZGztAaBXvK1HQSdK7PxJMJCzRiWRS6znmrySTk945WYAXUhzRZ3uuSWqwkRZZ84jvfJAgd8avm",
  "key26": "3LmkbCEB6GEpzN1WKozhU36LAUNbANBpHzRgG5E5JqiacLgAEsyaQM9Szr2janvdYtsfVTTo1D7nZ5YcPfmoc2Gf",
  "key27": "TJ9M99y15eSnGpAEgofK7rq9TdZZq8EwycbV37su69YBbqjCqWK581hi6AVdBLNy2AHRKhqShTM5CTu9HYxsmrq",
  "key28": "4wcADR9W4XzewkFHTh4P7yR5Ksxnimm6LNAWSKMW3MaSQDdSumrNhtKjBMq72v8NJvpAzYxDdnreBikvFeCUw1qN",
  "key29": "2PpYHwsbYBC2WrdN87LPoju7c9onwZazPBtQansHT3hqVJJR9gat5jnufuidq4XweWwm9DTQLXE8FL5EYXeMQ59q",
  "key30": "bRh9K4C7PJQtV1LiFNc568S2RYKrpUWwPCfZiMVSMUphXzXvnKRsZ24j7vCsnE5c6FzzMwZzjGWRciWDXkytDkW",
  "key31": "44Bm3TctgjZqhWXook95qfJB5M7VJSwgYfE8pN5GuikBj6QaFrdP5mjjQJLuw6sqQ6sWyzLKtmzi1x1FCyhucSGt",
  "key32": "Hf1jeqKUVqW9oGGSMnanBXm7nPYz823GJKR5ULJwqPdCHaCg3Q8zmAXC6PAhkKm35hPkC6C4pCqvWb3Fai3qTgi",
  "key33": "4EGw9DmAiF8BZrmAQ4kUUXd7tewd1oeyFih1cffA67Z3FuyTVHcUYUUhRm7fhw4mUadtdnQT1Rbvb7cbao6ApWvA",
  "key34": "61aTh3BUPRckArcoVV6ZDTjmfC9pXzA1ECue3FdkvUih7APeyXzFrtQWDAb4LRJjS5HEk1urzEvJWBq6QKedQi5Z",
  "key35": "3tMaudkZEqUJn3D6dhjG7xaNyR4MpoRVT5Geudk5oh9aHgz2aTGspqdJZMJaDFMy2xPQG5HK5nxfVNRHRVmgsR5e",
  "key36": "2Nj7etuPbwBLa8uKMCXsnQXaxj9PeLCJ97QgapRktmCqUozM1PGZBxELmzPhaBsJzxv5AcTYGkNEMMF8XGkMVBH1",
  "key37": "4yp6t6dRcE9suJ1MwhG67nNnVNJZUZ713fYpXia6YN7piW92swyDsQuCVHteqPDHixQ7XYKW1oZj7i4kUVPcaKiY",
  "key38": "66fL9tabadWH6XqDvtdiFzKsVcWVx2dwSu1VejQ3PgPuxEGcNXLBfBHwHMwUR4SNZzHZXaCALjVBctKxgm9Vx9Yr",
  "key39": "3VB38SpwgcVj8E5KdEfA4aBM21TVTXVKy7pAVVtSVebhyMb4hcnz4eBYoSUDCEUzLxPmj6cKjNVPfVtNyBasKGR3",
  "key40": "4egLR2sdeKeCbzbW8agi94368NLbKPtc77LPBAZmQzud7kc4i4wNLGv5yyRCvMVbWt313FvRdtWRyTTXNYEHJDAe",
  "key41": "2pVAVVoFB1ZnHtfv83SdoWb2h9puiracw54vML3MMotv6PpTFaUbpgKjhSyoJB8EPJEE7m6t3GbDXFgZgEBn6472"
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
