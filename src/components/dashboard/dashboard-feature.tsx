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
    "5hWt4p764hpS7bfFiUyksbS76SH67cNdVuKj3KFq8NnGSouHJcNimko4bkMPoJ56tAPvZ7bpaYUf5JXbTdYE59iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mfFXudZXtPhLeKFmKamM8fyWYswzMJn79rPnE2jnzG26feyW1pmY1gS9jnaMBvDyZMJqunQth5D2qSKvow8PnVm",
  "key1": "4jdvBZkhuBZvbg7QREddL6ReBRQsQ17myKg1Pk2FBcF4pVww6Yd9kyG3sUoC6TiScJVNvQV5vd6KcU22vUntz1AW",
  "key2": "4As96FYVWQuVsfasWsdVtFd2PqiGHdNitW7zM569cgy2GjtRWuXvMVPkYtoH3GZTsMXcS8rukAtob3nWCmdrgqRX",
  "key3": "4UAcF3MqUmSBJRcjBHwFMB1jzoYXvibJfAbCaibaibF8UecGZiD21t73wFfM82ucsgAqsquVMrZca5Uf8JJViJsX",
  "key4": "LUZZBx7dMUHHcH4oRYJLw4eJkabw1JepLBgDVEtXXYUwrjPmhyonqeL8DcUBBMdJ8iaHhG7BFYzGLo12NxeCZL9",
  "key5": "5XAtrKBcM9XHtgS6JWXk4viZBpjoEar2BRbotRZX5Ld5aumTxCfQYA4Jf8yHJczLxcFeFTd7RpLY5k92faRDN3uC",
  "key6": "3ZMbQcFJ1ihoMVGT44aZK8733XjQmiYRK4NCQYaZR5jESAVs9vKa1RbJ8q4w2ecCGc5XiBQtXMHB5GYGmWB6VoSt",
  "key7": "4eGV8yauxHMez958yH5Lun9iNA45od74trxW7g9ENkn2KMo3XvSW8Bq3r7gX8r2dv44C53DtNppbvjkkbbRef7FH",
  "key8": "3geHcZFhqDs7SwFsnpVjAKaThtt47exiinDnnLLWDPracvLw4APvU22VSNVe7dLgFHnq5QX4dhnSRTzy4C3XeSWk",
  "key9": "4tUgCtjJAkbn18GdkxZou2qdM3FoGxKTgxXiURSFNCPsXA5P7YFKmqPgh2fZTAoCWJFABRZak6bUvgzCxueSNSpA",
  "key10": "2hQkrCoYKqA3t4HnT7mc9qHhbKW7PeQuA7BZvB2Ms3S86U1soTUFiLWS46ps71jofkpNcSaviaj2nLESBpaYqaao",
  "key11": "XKT7pCo3L8Ty6Xzqoic341MKB2hseBDoSFVBomLdQVyAJaAw5ViSz5jH9FZAPSkk3U55MBVffCdcxKkfcBj1Vhg",
  "key12": "rXRAoFhUPsidtbN9s9iGx3nD3DZcLb3Tch1qHEcGtoSAXhad2AmDfCNZi5zYatz9M5hhy1WCErR4UzRm5gNMSMT",
  "key13": "5x9HD9eR8trTnuUfi5RiTVsDbZ6Cmmrqxa4DsGFLNZHLYsuyT8CRELiBkcFSTD3K1yLppdgGywp4AZVBxnkpRCEv",
  "key14": "5N6EmSsqS7V2mysnHjj12j2gx26PCmR6R9H5DWnktD7r6vS3zMFkgDJyFU7kvokUmnBiC5pzcEhyL3Nc8PjeWrC8",
  "key15": "3tZedVQXPSpKps8Vy1UV6MncvrA5kpXE2hPrB7jLkKkVgncZDUmpYEJjAwKrt8pN2tuFwzNABCRNQW8UZ4qHCy6Y",
  "key16": "5gKc1ko3xQTDmzy71E14mKLU3JWUek19P8McTe6PfUoDH5RAbqbDouZniskDKmZ6vzF6eegwbBykUXRVcGJAp7P9",
  "key17": "2NNc1EgndTJEDLwzB46UtSpoUderLJrcsCsYWfSMnPJGLAC7imyyr8yGrJChnryURrDihXSW2ktFwwFaJWnnanFr",
  "key18": "5nWeW6AGKmYBe1p4moubqFzmCgu3zwhJJgY95YYDctk2jpgAH2E5oZZRfi3aSjUi3LR3ixdVnYoMxk1UMj52jdkp",
  "key19": "27JpTy8rZXnd32SjPxzwaWm7bTpiNNhBsVuzrxZduEqM4vJ9N9yzbaa6ewoEB44ufgmh7G2zbgLV9VsrbExUk5ku",
  "key20": "5kRby6wT447AKiEcf6fyPoM8JtG4ckaZbZv7nE3SrUMhT7X54yLKBMBM24xW9LeuT3E5o3gZu1LpfVkAH1mjnrB7",
  "key21": "4soywPPBcuoE7wcW1sjz3zjptNLyeBpfCLRttTDaEzghMMC6Z36sxyrDjM3GqJuSHUfooR5D6SYWiYzt6pJ32UCr",
  "key22": "5zZkzj2jr5ZPWGpVhi6tnYBqKghZAfGqLuGdTGMkuWV1iJW3jBtoCVu1JTrsekZw6CrJVvnAyPU4LDMTxdTV6M1t",
  "key23": "3tiBugnajGSw3LMkxGzRVVWtm6qyTV6MArQZ9PK61jPgp5XhvCf8zaV1D2A9Gw85PN3cUSPubc7mKjf8eSomp9UK",
  "key24": "59Uo1rKUpPgWRsJYMeCuE6LpFiTDyx2msskjYBsi1CjoVDMpiYYZBvNKp9cJrpH54nmsmj7VWahk5A8jHgZq4ju9",
  "key25": "5ENCwEu2T49mvwQ89j3zCjPsciZgeoQkcPj8Bxbwf5qXUkqeLkDG3rDBWuaXfJrbKVj5yVjGKtAasj45LpeFLj3H",
  "key26": "2hTdADma4L237L8TmC7Vt8cDBLW9vYFgo8akN8Gi16eXxAu2MYk4k1oqRmVeVwtJCbpmteeZBY6diQhY2N3eBFJk",
  "key27": "2ySDfbghdPhxXUQ48WBSsQcTWVZmcM7yn5oWex9Q6YXV46m2yCf9P2H4AS2sw8z4k2jtZWcanuu6nzGBE26KDM7x"
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
