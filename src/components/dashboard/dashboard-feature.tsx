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
    "3tsiexZuj7PKgUx2pH5PmrpTxK4xnYxJQijXUCdnbmPQdVhufGYYj7vNa4CLu8JELcp5dT7J446gerCQqnWHRBbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ginQ4ygGHfHrSvn6VjB2GUkm9CaC6jVFP2bUGpDWcWrmww5oB9FwpgWjqimgV6N67TBPun77Bvn3kYp1MduuDtA",
  "key1": "5rkH3L7sBUBRNgFPW9qWDkqZQfUGAwR8RcNLNY6adAPaB5DMHRqc6vSLLhC8yPR8ezJ9E6BBV9gzSXhWmPe5TGSU",
  "key2": "5ozjj7ThaqdU5kVKm479jLMRdmyZXgGR9t8tjFSSApo9Ckgpfm3QJSJgo4FqttVKaH2iQdLVW1cdYTQzErKFBCtZ",
  "key3": "27PPEF9SGNrEYXFUWX7W4bnr1ogv5Gg2DEFfAkxYX9ivCV1GEpxV9ZS23Z6vCPvu9GoTXm8KhcdeGnFYXZzzrd7T",
  "key4": "5ZEkD9u4cPn7EZFB7S1MbitZdVNJPuSoxUne1HuAJyTp73gLYHaCz2Q4RCsaVUcCu6B8pLLR5vTTXQV5AurnYBF5",
  "key5": "2Cxgm3rJ33crbhQnLNjn958j46vtRs2inuiYsN7RofLESNBWtAAieyauEwrrcNc67wvrUKkWo2ncprTF1aMDjvob",
  "key6": "HGygr4GdtvRzQVPa1CPT7QcJfBmwnEmjzM1BewdsecymRkx1i5xxAt1mbRV98QHR6b5TZLR2pyvga3Nq5TE2tdX",
  "key7": "5DKKqfXyUhVispwoPiAhFxEyeU24zQkDSgRjkSTELdPCWE8tZS3pT63ijYyc7fngvjeh634bZXuU2eE9euwBeNop",
  "key8": "yLkbqHSQ1MBdveYjaoZqRH2APhhW59dtRJzhx3zhTr4ksoY4DWwMe7TguNLco3F3Ywoapo9WJTKgUdb5RQkVy65",
  "key9": "5TrL7fCYdJdsaFayoS6Y5x9d2Wo6Wa5YCYFXmNR8Cu4MkALCP6yP37LcnDTn2NzMAcRf1KFPn39CdFcYkdX9p7Hn",
  "key10": "3Rmi9kUA2aGEDmSNSo6QbdQCZyj5XGfWU6vobsrro7r7eNGsZjTHumUhbqm56eDPhhvm4pHcvNfzdvM5m5jA7yrv",
  "key11": "S4NwqwUP6Yv85wYuygCxedaWvLjAzPr6nY8EUq5Mj4unCFFEUQHxDeHYpkBi7WdKyUJHpaaq2Nrh35mzTee1cPd",
  "key12": "3qfWdZq9fc46VnVR1BRPPV452xRNjxji8TerXym5kcnLCv3pkWkQYLaBf9VUt7xaXpxs692yktauqmovQbAha1y4",
  "key13": "4WtYmKKBmFqjsSETMppDNYzSDowKyu1zkxceDSmZEEceDH5yzieVPMF28NB27Ewhojzsiqu6sYnFowFMM9FF4N3D",
  "key14": "2fLpZZUkU12pEFQkU1TdoJT4e7oJ3ufNXiWuCy4Z72ibWmFaToM2SL7yJtea9mvc5TFwtUCkWdPdEHAThQWET6VV",
  "key15": "46LaSJyop18zffvr7hDtCzb86r49dGBBtQVRjQCUq48aDfbXY24ZHEDPbjJ2f3ARD39TwEY9DariAfjZwV8SdVKD",
  "key16": "2D78tDUhCVc1xSRarTeUbnAbGoorVP1bXenRRWjwjyG1QMkR14rjsaBU26hyssHwnQjxjAvCwRKSTjYdchYWneCb",
  "key17": "3gLk74xDEdpMrKBwhw4iUXkN3wTjnS6BBUDeodz9FRkN7tEA5jysDpxJ7qABHAfbDbLxHHJbmM51PNoBehHCVEWR",
  "key18": "56W4DbWePjr1EjxSVPHYE7E4NKXGCrzLqRJEyL5hXaNwTZtmz24L1vdgqh8tmjGyE73Au4Yanb6k8JGvdTtWSTGM",
  "key19": "21R79gaphLGy4QoE7abUdPGagkvvWwB1N6zAWraTFyajkjTENtQLR9e5GVVFkcVmuUgQSWc7CakgUprpLkDhnhnZ",
  "key20": "2igCJzZxF1GwbofopKGbwrfj7WjZjwidsCjcVoqCWPoV856GAHiPMRUBdvzpDLEC6fG5CPdRM8La5zcEZ6qZeWJM",
  "key21": "2TBqbHrEXq3Wns1Lk63udUdDffmBXbwW1iU4n1Ygpxa12gA74B8tjndZG9go3MQyT7EbNAHaZ1R8vVQcJKhg3e4",
  "key22": "3nNaLHZrRMTf2HoSE5Bn3QkNAUCpybzzq81jgz26YjhXKUFsP9KQh5haC5AJ9Pwv9ZW7azo9m9Nu47oPcHboi593",
  "key23": "5SRLpR52jjL92WmGWkPWzc67Sgc62GJFsCHKaw4P9nxwVqH2HkbMoG9HxeZUfndNt9mMCTkc68vvS5YcTacaHWwo",
  "key24": "2JK8KxGkEVMLBK316CyqGRWsKWNjuxaGfVPXZeXsrPkxvdPGzVuAk6jGLhQAWUu1UZCTszvfjfqHdXrGK4URBFpr",
  "key25": "Ga4DNVfg3mzQW4bULgTc5XHr757J52e2dBpVuWtXPmTeoM5GdLt3g3aoY4dWdJhcqPsELs3BaT9yWzDHTaUtQZF",
  "key26": "62oqYzrg29m2wkWLVAKfuHcEP5HL21MZmxkXTHg5zhMuMT2p3hGsYHWfrpzgcyG6a3V4FFJWg6cYhPoJdz9LPguq",
  "key27": "BzETJg13Sg5Fz42L8Zr1qeFqu3YyMrhoLcF9uJt2b9atRGnh6bGBAvYZJNDvkXEURc2aepZAaWpkK3TQjgE9zeV",
  "key28": "6aYrpnTr7focNd5AvKiDEQYbiR2bGvsyMRf2UEjmJthEGk8o1Mp7P3zMFxv5huSwdKRKsVBPXpCoqK8MZwSA6Dr",
  "key29": "2kmMqss8bKECUrNhZnbVwaHgwLQAkGiHtjvE2X3xSSwmMezEsJUSnSNKbAx3yTaL6LF9MLDTRhAZsiFTw8LM847g",
  "key30": "5giHajX7VFp35g1QBLpQB4PyRc1zMkKkUcNrn2pcxM5xGesthbuBvWS6H1DE76EmFKQzPM62HmiDzXWvjdiQHPMY"
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
