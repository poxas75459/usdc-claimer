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
    "5LjzahgFQcaKzgKfJ8335FHXkiKqHxLps1xYsJqCmTsiq1y2FjXMUg2mUhdbabX7MxU4fpjL64jMTVF6szKvwJXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R491P6CKBuXj7f8t9zSbKSasK3HqbA9A4azKyy7xURB73FNBef66p1A16aqiFA9tXnF159bwMHE9Uqyhnk76dkN",
  "key1": "Kc1F1VpqJxTimCpDMaNW8yR31FL15NSjn5Dp91ZW3cd3XHRMraT65SzfxN3drHBDMSwgG7RxTYLS6uSjP9SyoPa",
  "key2": "3zEjSrhSifBeBPy12JeJxycvdGkhHGwUkJ5isWJhk3EdMsLV9uGj8MKdXowpCrspdFeEjDibwLzU8K3GPkJaJFmo",
  "key3": "2vC62P8LYwnp1xh1rj3mSjAne58GTrDibXp5cAQ4xZ8YKgD5XgLVxDBxFPvUsy1LkmnwcUBpvP19kMYXCFAfgaTY",
  "key4": "dUgnHfReWW5oCmkZm68qbdwQb7x4amHErJWuxirTDZ1poHMfVowpMqXAy19um3TCLKUQUpGNceCagU5L7oTb65b",
  "key5": "5dmbzL5ZGJ4nXL3H2X5wHgYUrm1Kxgtby2d3D4ich5A1VKKc8fRRE5ibD6qJDc6xKALSBJDvLkRMiyKfomCB9QmG",
  "key6": "341bxFSNYLexztHK7tHziVifrHEdAvAdPrrR4JiH3AbpXhgemokh1FEvLzrATReanRP9G2dVctsuUzbcuNw1SJMi",
  "key7": "4CimwQpn59NdpvfqRp7yMSzjEUD1vqY9gzPSie9tgRxwjnccKGxcEkBvhgZ9McXXz8AbNgQiFzEVJTPBBM9NmoBB",
  "key8": "4ryaTDTuk76UEzkhumBx3PLpuHbcUrXPFNLE3nXziY7fj7L7N5d4Sfe7jRHx9rBVbrkbky3b5sUPG3TbRS2L2VsC",
  "key9": "3e3Ayw6BpBegPgKnVyeRJcGbupqSHngvprGnMXzehGC8XWa7wNA4gCKfSfHwoQ9vPZSMbX8sieBmXoZ5A6bwAurK",
  "key10": "4bAPNiA1teMZEjreZzHkQ41MgYBhqA3Q98ksJtTTwhtrZ2ofqx2LypNuqve7nFBjQbaSp2aM5hQDDZyLZp1vkcC9",
  "key11": "3myXbYyMLq7teHvyKU3busegrNt9NcG2kc1qsSZW4ocmf5FD317sgijKs9K7AMCRfGkQbx9EDrDie8YCWL5pjFPG",
  "key12": "5R4TW3vJhH1btxbF43z1DDNZNe8KkTMfQ7pZffLhuq1bjuvrJt4MU2imK9bBfWQMgCGK8FxtiTpCddGv6xwfkrX8",
  "key13": "4tLYRgeyQNPkTFNhhNrii7XGhCgJPSYqXK5FFRPJsdV18htH36XL8hNdw1NTrUJZXssHXeDDwGSdwa4qWA5MFrLt",
  "key14": "4ACiDVe8VmG9LpgV9QbFX13UDxGijWzrQLtmAFFfZ3w2Bs7VpHn7TwAoLTZMusgVC1dXGXjKiJ26zN3KagjW61PY",
  "key15": "4uohsRJkT2SYRnJpFES7yCRMUcnFabEw6pWTVVKzQEXYFay6HcsYMycyXitjVDjcEsq2EGxbCkdUBg3GPsX2vybH",
  "key16": "5hsssfXE3EhV4nZU4JmBM73zMwoFBXU99udFxXVkKKnsmv1Eeg5pkj5D9pfXjgmFFpTitzpkbaWm7YP1DFmNnQQh",
  "key17": "Q2v7v1mJ7jc45m8833Zpemxrbve625qyL2QLZ8jjUvxaGRbeTuo7WHjRMXmqBdgSXB1SXZWpgLbaPFjicZ44fca",
  "key18": "EjjuLcceo9bDqBK99PvHNVxWSvc72X4hy1cY199RRv9Xo2QuXMUf4SVW7FGSTejyVRNJcSLB9jskRDKm5PdEDSH",
  "key19": "5qwVAGzve7mySqUuNPkU9sHf2FM9csCGPq3871xAotojx8bGAVM4P3Ud6oLZJSkyRSA8Gfe8ZrwRYiYD9pqoWQMw",
  "key20": "2uD6AcwXFnDM29ew9hb3NesUMQi8orhXPLSD8uTCygssLSW2ZsMqT5KNCp994uteiHA5FCexZKMagh2xEDfqDJEv",
  "key21": "GqCEMHQ1iwh8BPaDptcdSVpNNmaHjV72svPWQuEFYmiu1th3ZFWX2rvvw8jQX3MH4UCyfXKCbXnUkzTNSsnDRxK",
  "key22": "QEPMXtB52rNfVKQUHAjVspRStbnU7hpWgcqbzLesvy7BZiv5Qd453ZmFkT2akEjDx5W31LufhaLzfNNaGVuaXyU",
  "key23": "2RAbJB8m8wa5i9H8Q3ksrzwrDiHjWx9NgCyFZqd84uwKoGXSunC2uomivxd5mWPKNf4LiS8RGXv1Bm2SJC1WbuA3",
  "key24": "45BjSSpGTTcrcCMcX6E7zxWbJ7nTNZxp98jbstH5AsB9bpZ3xB1uWf2VbBkcLdbgTHi277XW4EoNmu6j1FzvUmn1",
  "key25": "TBwbfekAeNWRWshBfHYSoNGb78JrYmszg6BdRwx6D7pVSA2pstsxvHbrQwCzsGvufL9Qad5LAA6k9be9B67RD3P",
  "key26": "5eUuf3pfaefFWF9BQhN2KHgc5DNf87xyvHVDY3QvW1SMeBFhviYYSnw6Lb2QD2zCVacVg9Enhoqwi8rfmQ1RRKui",
  "key27": "8U6F1cZWs3wV8DsZYGyRmacYEheVVg8K4iFAB7yp7pE38ocfB3iMi9fZWjpmD8mWofB2TWqm6boJCU77JGmSHBH",
  "key28": "5hWjB2ii21JmCZ5R5foF7uZeM73Q5J4dpnyyGFDqVAJfEy5XWxF7H4YGZ5SnvRhuwZkMVwyNZFiQJG3NavC26bzS",
  "key29": "5PUPJzJEYJveoepAdAXuJxCG48SCojr4NkeLRmq1VQXX99uBMCQxtLxB8qtSJ71YZ5nqJGeqRDqw6kHfFwaDNnwB",
  "key30": "R1VvFFhtteimu1MUs4TYnxp6hjoyy7JTaZLVkvhq8UpKqhJdBVotBXcAqbmX3Zgd8DVeB8cJ3mKmHEJuDGm3yYL",
  "key31": "4KteFpE25Hyx8f42CN25sGvN7GXggGodYbjhc2ADkx8WwMwxyyqotU1iajrV5jPKXJhBauphmhqJLQAwAeyg4sPd",
  "key32": "ZdKfMvxUfgBWC2Nsesnxz1CMfp7Zca5q17iFue6f8kM99NHCHhr2XmZ9763QW9iAVt3h1YuySRdyKicHBSSnZrj"
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
