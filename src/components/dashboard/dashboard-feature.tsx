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
    "3QxBKSn4YospkQp6CVvBAoXAZ6CxJrri3kBCETFbkFddX3NCeoJJg9vK3SQtCcRwumMeR5A4GdZ2N8UV2MHeZK1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B5AKCHWULSjrCphwxiAZ8fofbFn9LEMpTJfM8z9UDPP1FvrpWyj2vvMP3BEx4sb4b7k8QAV5AZwR9brxUd1wTsE",
  "key1": "3PA9ogZB3t4JvkychkjZCQLG1VuH3CMHgA2Txp6kqLbALHMWb6Hx7Q2eFLxi7TAWgYzdarFnZ9psugUU7nXsJCKF",
  "key2": "4bVMYEm2Yyhp1NYcaKVTa5TRSUaBUrzHf93xUgZ4TnmvJfGADMN1N7rMjkAX1PYuuGwMsVXLF1TfBgxjapcpAkLY",
  "key3": "5u98A51BDFBm7n3bpJ5DqrzsjY7V4TawaWgvjN31VvNgA2Dmxohjjinaf777aszHMHtnEr7xpZjZoaVmrVJCTJM1",
  "key4": "5QkoK3HRSWkLDyuUzbeddpiSzcDCsvNmnxNDvNFztSGX39gzfWuGcf7Sktf6QkCh37A4aMZVTuaWxbQ3shpUWEGL",
  "key5": "5fxw7np7qX5pBzL2YdmYqHf6YYCWwidgu34PwX2CmAvsEA5Vd356d1aPuDh1Pj1qYMJDVpQRh2WXrR7JqXMTX5fg",
  "key6": "4J3awDsGka1G13TPBtYgHDinA48BDMB6652fNGnTkdX4WwcRGLf8WmcFzeZkjTJdTBXFgT48RcKtDDuGM1PyPhk9",
  "key7": "2y9cNhuF2SoNHAU1kArVJ8UZh4XXQontsUNBYEoEnP1C2dGEbnKmKSabefSo1MMtwD8VB1GCNiyNCS5s9jY8anY6",
  "key8": "5NogbqNHaNhLginFugqf9HYxSVCsNp2wF7gpU6kVcdiGatq7BS3PrwcYPbxnoCSwV1RJUocLomtGsgHhR99WZQBy",
  "key9": "2kQ1TWXz3Ts4BBTRtxLDYSFALCHobmD6MWoxMpXRjFyt3E3ptH8H5iE1ET5nZnhAAuLGtbsexiUvHRnqMK4KuDkS",
  "key10": "rPX75JXSdTvG1JL1PatoC4YsRzrhyTcyzugds8gcne77zxKWZixR9SguHEUR7s3Ter71XBaeAUzYaXFSr8skoe2",
  "key11": "34CnKY2GshBYqn4JKoq3RHoPLea65MDAhKAVwWFVhuLW5tHRzKxspwGwRfWCEDSBJE8ZgEA1UBxxPomQ6AdT2m7d",
  "key12": "5pCmAkUbv9jNogpmjFrLhVS16sdnekXqX7PjaphbhagnAPm2TsSgp2NpdXCB2Psw8LbrLPsnLuEUV9BHQEpyei4w",
  "key13": "38NHgivPTFjG3D573kourYnwv8tAu5gok1U5UZs2j2jo1zLFNUAeP54xSChgbaGE8ZvpaTjsL4Jf2KzGdWcqN2d6",
  "key14": "3MoePH7fcrnj29XFMaoem2QhmvTTFoeejZ4afqEnE248ZdU9J8Zrods8juuFYnW5tQ2rtLiR6XiWjrVdYqmNVXS2",
  "key15": "5zskAse2Fvz2MHfWuuzFhdWER9PrB5QSJQ4ZkZULDA2gzFFxKeBd2RuzdYtR1Sjx35CPvHuYW56KfyJmSCfHcSyn",
  "key16": "51wcxGAVUDX6NVPVYjPqdZeAwfdxw6vQk7CXfmuHPpMRD2yEwYNbVmSdKh92pKmUrpXNZoUDkE5xmqyTWyPhKcAP",
  "key17": "2PE7C1QWxNCH8QrDfQAzPAzncgesQWN6vJSNDdznG4HsCeNW3XY3otknXySQ6nJ64xn62q9kQFr2juVH8p1aHfo1",
  "key18": "3kENZxsCBBAGHwLis3frrz8iiRffmGY2KY5cARnbnNaBYmxpoK7Lrx1CHJcPKLfuM3LLypnYbnMyj3YrjePdxBMZ",
  "key19": "5NvrvNiFymYAyUvAmzZ7gpBxkKxcoFcw8nNdUUW2RaPrbjg8mC3VD3Lo3xYquHRYoBoE9W4gKJD2b1wWUnSqp9Ph",
  "key20": "5z7R2PC92nVz5pTLuJcLkXhvDfkWvnhDsG5iJx1XyYYNVW6gJys42tL5kikG32nXxq7Vwda3KsvAvhxTh8Mhzn9c",
  "key21": "289KwJUGfWhEUJHPXbKASZY8NDAxQhvy3NNZe89fyzoTSwavzY1jVTReZQqV1MJycJ17dDjiKDSXPqXQXATRt7nG",
  "key22": "2zLtMqhYaQXvJxfZpPxhfgoVuW4ZGpurYGen3UHUHSXgYNT8HxQd7k3J7GsdLirNrv6UDQsom9Ca6tzNPpfgbvx1",
  "key23": "2veELiuw5MyL3qmPWdwm1ZuQ1nTciy962CVqSc358222x8TkeBDU3f7aYsuKbqvTzHrmWQMo5UtAGP3rQy1QcvfX",
  "key24": "5TnpiLFLBTpbWPsYxybBVr5trHT7L2y4eqwWw95uz2t7XRNGgUTSBTtwmWigbG4Eb7uou1EwUPWLxGx32EKhGDL4",
  "key25": "3dZfiVkbXDXsbDF73rgEtkcSYHodSE7TdniTtna7xUntc68qgSpLR8bhxWkt5yk6Wxs1T8uNM3ha1jhUhGN2wii1",
  "key26": "2k8cUab1TzhVnd97dgCtowydT95y2yvEG9NNEUtG6WKRMFquxD5GGKmpdHBKyowKu21ZGLbw2dj4pRrVomXynwg9",
  "key27": "wc57xzzJCNzRtjsyXGHbKsE2eQbRcxScjbb9ket84REEQtueMou6dpH1dyamv3oV8mF8ToZwiyoDPMjtCBEJvFE",
  "key28": "52JmAyS1yQAZtQ9bbigWNXFcoCKQe2R1hLczGcvqAyy8a2UFV4tpFFh45Wzo8MmZYRpgFq75tC2Nnj9Dy3qvmB9Z",
  "key29": "4uvmGG9rg9yS2hhPF9FELQfqC1wJGHB9Y7st5SkjhTgwWxG9XaMgcG3QYefdsRgRxDo8B25uKrd3E2Ls3bAGN6fj",
  "key30": "32rzEr6WmHdCTHy6hABU8yv25cPBc5QkcHpKfApjjFfBS71c9c1c6doEnuz3ZgQdkXaqZChB94bX9E2w2sM7x5LV",
  "key31": "4HpAWPXnX7Xv7BZDqpYYabBa4ejhDjVhr9BQrB34GMh7HuYJkvmaHWNaZCxTA7V5NYdAtbUrms9BzCKxz9qVAf7P"
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
