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
    "32YKAR8Z9Bdh7Kt3citowqGJgXrr2pjU6sQXj5C4h9YugRAWmFDkfe3tjASyEEkTCeZocMBBkMvyEZaWTrWFXZGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qrv8TK3F7ovx2v6R4mubMwNAf4TFaLuaBV6YpjQkcfPcpA3EMqh48HCMJrwoi4yVHvsWYmNL7zmYyDeybAQEW9A",
  "key1": "5ctryFAec5dg3GD3rAqrWMtCh8GYYt2RRQxzgXfNZuckrR7X89wWat9uhtksm4GuFR926AiBpHGnRyeShRucaKtv",
  "key2": "3sR42TqXyQWX2GxfiDFdGy9KYXV92EQihEEXYVfiECp5HJ3kYxoZU5U5jQBdzvjbPiR3ngfnBDtbWEstFTVaBnmt",
  "key3": "5R4eAoPeCNx4x4hrFPBMKjkYJu1GfUNWVENFfPcpRBvQKhXUXtnyHFusXFo8FF1PDVxAKgbvLyWDfE1T8KghcH8n",
  "key4": "2riLZsDaTE39ffzbNv2Z7Ss9LRa7nBiiFrNNWPdtjg54zbWGxSe9vkofvLtQRWC3PNz1cqUC9JGoFk1WvUvviEyY",
  "key5": "2EQcWfD5uKVph5XDugtkFtNP6BuHYaC8y4u9KhB7EiUiyVVH1dRu78iBiCoDxmsGDefTo9jAH6FzcSTeLs8Psd4f",
  "key6": "R2WRnVAFek5nH5nyUL1RKjgdCjg4xAooqzMwhq5hCruDLrp7qYN5iSeB8CkMSQ2zEzrgNVYbyhWnYpL5AacvK8p",
  "key7": "2f5wYEfefhjEWfw75NPrDDNKqC35u1Aw8DbCiSZkV1TctXbbUE2iNx5nNvuXgmxcv9iJMdsVx4UhSraKD4W1bHwu",
  "key8": "5M6xbjAV9YumiRbdtFfDdtT2xrfZcdKjAh7gmfR75JMEDyTe8YJrinuUd4GQfdg7D9nrhQXHR2fYyDdXW8pVRFCA",
  "key9": "66fwsGyY9vR3EbJdaKC4FsezK3ifTMrqsy3ZD44YE6cmPbCnmRRKAgQjELhLZGAKJV6EoP1SVPgnz2HAHsnPwz49",
  "key10": "2DwPq4aB2DytrtP7Xgp89Xr51VtRFWeN47MeWMhEax7DBP33BvqzD18BEWzaYwC7NQ3xHY7esZQQNcbvYDGdYWgx",
  "key11": "5bMP7QnF453ZwHmiwZoAu9mCAbffrCeNWgYd9UgJhmdeevnChyf5Tnmzqc2H2qeNh5gTKRnBFv16NLWZCLpCqMo6",
  "key12": "4zjoV2Ait5gcigxGznoBR1z7nfU36GvjfzufUt9dhQUo1CMJuzUQ7mx9Ur49Hsd2tZJP4QLoE8PCuAMEqEJpBnm8",
  "key13": "2zuu95jsKaetPncGSgAACsFFAzFE8z3Wiig16r2g6wMuNSKgHQXR45SXbf1Xc5C7FJELR6zSdND9ipx4QgovDHwm",
  "key14": "5B8zuPpnhvzi4fUwdZGntAwAMTzYP5G27TCvhHMu7mug7u5bFHpaQjnCZ2g9RojSDEqtwXqBgMiFXLLZjVmRYLVs",
  "key15": "Qm9F5CyLmuCEEViVhAoDZ67vFJ1V96YCrYL1nD85Y8ieFxyF2Pofw1bopCnweD4QbUqL2AnX5vP4H28VdHmtuzV",
  "key16": "4KpNEePh2t2Ng6CbwTSBzCkNBByj9KoPfgDnLZEXBygVtEqXNvYAE8w9ucZdEsNaiP5wTHb1mGsmrY3HmLevyuhc",
  "key17": "kCxSXcsTMiqBgu78BgWp4EZZHMTzi5cLcaJvVJxrQTACuiYnQKgKki8hg9m3pRTDMeiHacZS6jKrQjbiHvggTvF",
  "key18": "212P4R2ALsGdrGoLPBKcYKt9EMZSyQbHDxKBQ38eJufbQ5oRDyA5vkHunZmP3AYNhW1tMhVKsmW6jfYEhiXMUJHo",
  "key19": "23oNTUGAceRy8rkCze2P85FtEffHa47F7Vk2GZSQPcc8bsom4d2g9A5uxLkz3jsBkyzYfzCVFM8zYjdHF9nA7Vmm",
  "key20": "4g6UDHHkZrshb3xdFs5B7BNNF4HofhnsRfdX2goRNuFKCm2wbmaob5Sp8DB5cNvxGGdeCKkB9SA7SUhwYJd4ovUS",
  "key21": "2AkrzTjvsmLGq4FtAgGTGy3Ayf5rUGT23sXhC9vBjJuud13Joeh8PVGyv4dxByQexra6hgYJG8JtUX4n69cQNdZY",
  "key22": "4vco3aVDcCXqKWuL6BhhBXgzdGUbqepYq2yS7mzWVdz5n9ZzA51NUhAfXfgt1fnuCDsSevSu1jV6GZkFjC6umper",
  "key23": "5vTc7gG8NPgf9E1ifQWUHEJCqbfcwqH2Taiky3ZyomvUgEqbrAGMEto6QNxmkzWnDDUDBa1GGxguPG9625mrr4MF",
  "key24": "4MY2bfcqBG92rsoLKd3429ofbL5NpJejJ8vKEQopnRoF4GDeX2KQPskWsDsMniEKVVfCAvTgGgsuttEND3acm1ML",
  "key25": "33xy72gfGGPfEB56RJCQjmoqs9rr3kb1wSr2tTrTC7SJgmW7nnTDmrdQPk9NU5X8rCwwPykXaPDhLKMrwHcKRghd",
  "key26": "35fpNAVMsLbov8Tdoqi1CTuXokMrVf95Vm3KeW9SwW2nzj7XhguxuiXf5zXisAPtGuZNaiSiK54e7hoK9n5GVcKh",
  "key27": "3GVAFQ4n4hzauhGfKBGxKnpgHSL9ybongBMEFdf2Xtdv9rwQXMmgyaq4gmdwB2HkcGZjd2nTKPcbVGsXqWThBdHe",
  "key28": "5k5RcVosRYzMZa3rtsYHD3KMBeodN51e76FCLKMH2GdcnQnMBYCzpUrCmpkCoTcHqFejgpf8H7f4MwZCa8zGQPBN",
  "key29": "3vnM97ArT7FTc6dKekWeRPqcsQquf4WiNY4gat4pDRS7xxkv4k5G9QTJWC9FxjCNn8wF83Wj9siNNTPbBaK8W1qi",
  "key30": "3gKCuYKR9zJ2scWBkXRm6evXRogMHnr3tg9EMs6DjPZwqWKsJFfVqEdtVUswYUqmBbH7F2fobMpTZzjybke5K131"
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
