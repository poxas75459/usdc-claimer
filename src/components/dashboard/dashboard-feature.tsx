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
    "3YWtzUWrAyoUzmVyFtvWE6RjpSPgw62Pthac8hxm4yTL1kz5pzHJewgWvEZ1Fnenr1CWG7g8S4thk4hAK4d13kMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnxcB15NkU2oBsv8SKGLg9r6XUJxY9Qpy3G8nfyxKgbBCK5vQXzcKixbohfnvpGE6Xw2LRLpTc1oUpB92H7z1g",
  "key1": "2rcJChGqhdvhY2Nbfbx7UgGYr4ASmsB4rC5UUEA4mzv42ihN2UnU7ettARmh2vnHTdLdykHxVSZ7d1ZLwCVrjxMf",
  "key2": "5jv2uKPh1zqFwKVEjyqiFz5TDnnpK3iuGmaWfcMySVJBXWDiRCbKwd941CUUCmbsr78AUEvYJ1dxvBbtFjeXRMSs",
  "key3": "482KgvFRPXKA6zPxxNZXg6e96q93wznJAqitB6GzNZcpeWjiijBm15YpnKHpGwVLThPTjHAzSaWmTTiwWDYKghGH",
  "key4": "2TGAC8hrrEhioctFHKpmoeEx4bM82Xeg1eoRDMHSkKk3uvT81WSpZKQPuxcNbds9TCS4UsEPHReHYaJRH9VQ7DKS",
  "key5": "55unM6Qsb8HTTppFRTgSWoVrgAUzs1HDQLk52VvWU77UzerMA3F5ELk7TeHjFdD6rVmnbY5DQDY57r5cdtABMLe3",
  "key6": "5RDUh7qBc27CE7BLhafghB9HWboS9VjzowGcP6ozmrrRQE3kancTEzkwYCVa7CVVBdK82e8VbuQ6Dapbw27mEfiW",
  "key7": "3SkxYVjzfpRD449zbZkn84GvvT73A4xboeTSJ5ikgBAZkH2hQbsJFaUkRaXAfpHyZmfrV7Dei6G4ojM3mcct15KJ",
  "key8": "2cX84PvUWq8L6TKP2aqrWHpGURX25vow24eAAULr5Fsyv9Frbt2geKUWKLMN4caMRXa8BY5cGvcH8KhgjheamjZ4",
  "key9": "oN9Nf2K6YuY3NcPtqhsHSBqv6Znr9ZH7QZL7FehV9Fv7LQQid8DcrbWH3qDrBfNvnUE5kQ9Akcg9FmkjUqLwWiy",
  "key10": "2BYgYYjVxwZecECkKez3jE4VT9ruPM2ufy1dA9FRoo2tg4iGiEeecaq5LRDPSbehQEnwnwg7J1qz9hjUCRZuVUyA",
  "key11": "3td9gwbBVb1Gq4a2LC2ZBfQmz9T2X3HjPhp2R9k4uGVvJ9aFX2bq6jmPRnoSJcWrqgMJtDFnMkEY1bnUGpgCeLhn",
  "key12": "4ZkpdWHc7d18oNW9VaN4BBGHp1i3UXXzUjEpn7hYUERcqMdnVAWEE6yacGY5mvMorYLS3ag18gNUgbt8EM7uGk52",
  "key13": "G2yxfXLbqSvJFYpoikZriYhFEor8SQdrLWb83wxhMmaMHkuACh7odHKgs9jYmaxvqumfpiVLbesUxe2L8jPDa5A",
  "key14": "5JVbGQAEejpn6E4X8MYPquukbKoKE3qcC5YBKKqXx84ab3nVoLVCickhAUgFnV4FhvLDy3wDAiwCaSNBiXShGkFE",
  "key15": "4TusfZMLFh9JuD2Psyq38xoo4UxdLiCzFEChLJEERiAvQcRZQtmmhgDBv9AsdcgmGVLmPKoVbsPMhaH7boc4r9JU",
  "key16": "2XNt5dkMPDjzajFCpuNz6CzAXHLVmY98QsM5K3QZVY7HY9Cdb9xycfMsBcGwZcxF3PtN5nPb1QqpsJtmnpSvVcoX",
  "key17": "2b3zzbrQoTp6hzjwRoUAKxwU3rnQrQnsVqDAowvLbJT4JVapPYF3NGuHwYuaLfHh23zFB4ZQQDSKiEmA8LG4JXtz",
  "key18": "hmmSaGE9cVyCWTbFoGN7cP12NyjMbTZQ4CmFepfm6BqfMcBpMc3LqPQchYHwtF2RWvM3dEmWuhg223o4BNEnVRK",
  "key19": "3VNEhC3MAiZGxMiRigFaMaCJwMYMsaio6k2JkpuMhNWPndGBW2eX3ZpCbubRT1JoWvGnrvm25TM5TQQdssC1q3Q9",
  "key20": "JvxzdAHbJykrGGKvLiZ1WKQn5bJV4uWerDTPTMgpB3NtJAFPkLs6PegcD3M5big8naFpBLNYU1KerKHfmhRwJn4",
  "key21": "4s7sYGop5h764Lto57HXXwB1MiaY1UBepJ9o9gGgDr4QofAPjeKmJvJxCdJWGqxUrkD8xtfefinChrvXUghA1EBu",
  "key22": "4jFkjGkzSDsKxh7p96Wb2RJQBynAj2iwQd29y9G9evrr3gUbxWkDDtBzMAwKtV56oxgH4EybDJrKQmTUsz79W3f",
  "key23": "3cEYRNfjqmHypswLTyQXbD6xjXG8XSHEnyuts8RNtBHaxRKfyQjGiKwoMXWa4t8d7deEWM2SetVsvTGEL4Dhvrfc",
  "key24": "4KT8xfeMWsYrKzg1LgxnZ6MLhHhBNPi5cZEc2F3qcUfxd5pEfb1x49iZyZjEY3jmHqNumibxGcWu6gA234mQAer2",
  "key25": "2PoD9K5GNbHQ6wZPDgi3oJLQgGdkKqnrVcPAw984Nexcu2PhxrWbDfxpupCd9yTBhGHRFv6ZzXAomr2SYFHZEUJ",
  "key26": "3PUjiAT6tYF8sTMEyEU6xYUV3y6iyRzRTFWp3bY2eom4MMAFoCn6T7uxYaqqbEhmLYD1mj5wxhky46hAKe7L1J4H",
  "key27": "4FmZsWVpq1vRT3bijLuHe6HTDSWAuC83H1Ru7oM4AX9pneLFdxZ6R7rfxEPmS7mFKijodGfLxcGkVrN3eghwG8C6",
  "key28": "349icr8CLpT1eJ3tuqiDbx254Nf6chKVrMY5CuC6bgJErq8EZeJkDfvqeZgvkuSDUUHJ8iKpVV4s8ZghWsYVZKry",
  "key29": "2U77fUDSkiCK1ypy27MDFAXAZXyuBNA3JZZHGXyJNsYHS45Ag4rvPPbh4cSthPRUaZTawEf5MkQ5fpYPqttohpXt",
  "key30": "24CGztTQD8XytnQMB8bbjFNxzfyAGgaCrA4n2D4WT3vraRv8ZPeVCxVFButxQJi5LgvESfgrcbZhV46SD7oYawGQ"
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
