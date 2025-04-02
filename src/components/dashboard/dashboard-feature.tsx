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
    "4Jf5atUEuq4RGPBGzsq53935TFRyzfmzMVyeLXGtMh1VYuhGpV9jrFcLNwWD9L3Q7n5Zgokf11ZBJgpRbnghhrxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ux5T8J1UhAbSsfjuyr5ZoqKRAprGhRHiJb5YKcHEQ9777c2sdbbG5adz1oEg7NRfk1REX8vYEXuGNHrheAyJCbt",
  "key1": "MeRkQS5GtTG39PywYqZTg1tJe85eNPmDvtQ5qHAnqqhY4TMjjWLcMKQ4A8sarjWVoKdJybdB8GBPubj1C9nP5yi",
  "key2": "65LyAzwZuCi6z53v34ubVbufmKPD94gjZe1UoHeYB66uSv36sQjy4cRWrwXxbL6vFFh9U5ATjZ6xSKcKS6TUSWUD",
  "key3": "WbpQBrrHdHyREa4ReB8DfzNazqzwbgd7yDw48JVqGQs5e5NYT8itLgYmB44tdfqbembTbuLqumdcfCwkHMzyM8M",
  "key4": "2C9o9UdWzREqmHrz2jRkrWuyRnozdK3hFAgNsQcTQiMCnL99GzAFzHVG2TkUjCJgpLnsQD1h5omx81tgY8tdZk5Q",
  "key5": "obqqiwfDQcDwsdrgmfqkoxVcjnPDQXWLQnFTUTkjGZ3Vc6mgtnWgZExb7pPQES52end4i6YAyTHLKL2wb5f8uiT",
  "key6": "Ur5y6ix849gwzpHkMWzCee5CAK5YdjJoHD8gCCqWNbijRKrDkjzzuGmRk5eDrybJqTteKrSRJENkS6Ab5Sj3Zti",
  "key7": "5jYAwRvz5k4ad3FeuBsToYadHKbejexBicCdmrpDZvZf71WFQFbBQE94WHui9XZWWR29phCPGZZ7h3VUCzF4rjT7",
  "key8": "5gywzh6jmqvsgN6JCLLGkJJ3qJDdaFaVrrbSR5Q1d3cFHHMXc6H2WACgPKQz6Q3SzYhCvznGroRyLEfx9NFSAqdG",
  "key9": "2ZvHvekFSxAhaSdwoFVLZc3s6Ur4T3prNVVszcACcD2MGR1ZZN4YfWHHoBT25Be8dpFXwuxAJwPaUczr4jym82sE",
  "key10": "9NJ6rzpnaiiZWMX7U9ALMLWuaQPEvPyUTQFQuqFtdoX1RHCKz9uNueqBa93aMYAcSzfFT7Uo36soDxLDPxUNiqt",
  "key11": "zuRbRo14EScowSJctzP4Knco4Eqv7ChDYRgWvikSqC3B9syrWc2R994EnryAQKGPtYmjAQuX6jHFzxeJqYSJas5",
  "key12": "3Vt1FXk1DqDNfrfVxuS3LcVf8vbdpXYdkA7v4Tc8HsGaAho3ev61LSEG35kNX6sFnbLFYaFkBJ51wfXhB6VYYYKZ",
  "key13": "vP531aHJyxcK8M2u2TZm89nx1xg11yWfdDi2ogYTPc2eUzN5fRAbidtarGTnsgGRvNCfaYFycb25ZcKTBgCsnrT",
  "key14": "4BGtoMigNcb2d4qbRK9pxpZThMZHVC2v8HT7dv5WuTzVtMDdM2msiW6jiTrjQdVdBNjjKRJf6QmxdHHBAnacSfd1",
  "key15": "QGX2Xniuy2KdcsPMtHamBK5Xcaprq338niWMnxsPrxZaMJr1NrFHUSVmMQFT8sGfDTYApmBDqdW49rXAuy2AjZj",
  "key16": "61XZSxyDEQrtsrydHnRuz2nvb6xoutPTi1d6PtgY9nMxcf1F2ERbwWtJxcs83LpuUTNuA9joYxdGt3m52737jPeE",
  "key17": "HLGep6wirKFN6gijwnevjT5j9H7uoBGMzF4ZK5HASxxcnTzxkF3cyY7w7SLmLyP8bb9UX4EWTuhEeXBRNg8Pcd6",
  "key18": "4qBbhzN1dZcGEXVkv2tV12YNEM72Kf5u1Gtwz2UUJyyrg7qCkncY8ykHKVaos1GkKH79z2JSZJ3wrqbwuFFf8vvg",
  "key19": "G3z63ZxvzkNWjmQe9o3XZNquy4qoeR9bHmRF3LNhHrrB3xFu4mhkc2bcepJ6foFbR5bkUHySAzyCRhKD8MC64Ak",
  "key20": "ks9gf3mMWCjNgx8LoBNj3xydX2BNtnFJiLuvDDyXW8W1Nsr1KCKwB7FAeMZJZSpXGyNuvSqRGeQTuQFnmYZr7Uj",
  "key21": "3ijs5Av5xBVpzkkXoMGxwsq4H313bMJZPnVxnhRnKJeq3QuXSYyeJ1N8TuFZ3PLZcB7Z9W3SRJvvjFiYxL5mFXmr",
  "key22": "4aDWfZq82tYYjHEwwLmbtHBE1R1MW9rBzb8xJYWDr68XGwr2m1ZrM59sT6xhXccPDVayVsbmz5YJ9KbnHkkYzQ8P",
  "key23": "PksSaLPKuHJr9SuwLvMffZ9Y9NxB6rBteJ26Ap2BSJKbzAjDtRXWqqkGj7nmiuXZpqhFXyXZZiqsY2nCV9f4ezZ",
  "key24": "515fVWwgm6ZTyKfGcKQXTBSGmxpt5NPY9rjQUPHGhYEGWs1RrUryrpnQ2SxjVtyV6VW2AzeGoRBpopid1QK9zYnQ"
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
