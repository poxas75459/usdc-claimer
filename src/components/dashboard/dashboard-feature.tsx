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
    "7PXMemq5TTXx9n4SQ6qTbohd2Q88Z9YSgUpxr22abAyQggTboqubhd6KTvn82bwvk61KZQMaNow3YaHxBTT9h2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdW1M13PwaA4kMQsHncVfdfAb4D2qXcQdNtKFsshcAgVu4M2p9WdP97yXFTAdTDgQ49KhnQNR2WcFgcCnwbDXjH",
  "key1": "2sUKchzYR5EGFqUx4qEpjTyb9EHumLpuLT97PcaA3tjZrU977VLbEXAt5voAMwrnsJdWanoXtFbhDNPEtddopVpz",
  "key2": "5ehhC7F7NLeFUKq67Drtt4TxjmWt7LxieCYSCTWyzVUDCnUUX7HRjjMNtFFhJJ5jgMo3LGvrNkHc1APhuhpeCQEB",
  "key3": "2HsGyQHgY9WC7sd9x9rREXYyL4D1s4W2Jjo8uDj11pvuDoWeiJ3bYf3Ftf5TyUWvSKsRzpqL23xZrcFUrxFH9Gqt",
  "key4": "2ekh2dc7HmcYNscpFpKJ4fjTFzMqRbnuJDKPnZo93DgTSi5KoBJfzbKyqgmjK98SU6B67wQRZ77tEHLWkridSSkj",
  "key5": "5Q7NALcTtfGy4ZsDFXdt8YcJWGM2PCJbTDdDTtALFnE6K1SLWkv44tNChSgJvmhNSUs2C9f5dcToHi8qH4peyfMG",
  "key6": "5JSdjrBQoJeLEBFCV2oXPjN2rTpVubLvzw9ZUNwTD4HuEDhaTQW6Lizb9UzqnRqwiYv6fpZaLLNpq9d4xPfxY1Ah",
  "key7": "fXHEfg2wjoJbRsipef4XUJTNHn8hHLScwRom75TFdLktaY67eu85sfUtgZNZKcunBebHw5MEyCPBpqFzXrGeyRe",
  "key8": "5NfTnvE61zTmerqUq75HzEP3zNLwTZoKpwCdUAotBKBKbAc6HYRvmLe7VQucW4DoBX447ADeAxp6cKpkxHnTe89U",
  "key9": "5SXhWiDaXbwc8gFJecU5hVnuKY5vBkFGvUVxktfPR8ZmXWm61Fpd3R2b37s7QSLpHdfw8fRX1Z6gBDwayjZcXUiH",
  "key10": "5Q9cYhYReeCq7gtbVAmkzR5NtDUxpd37JGMd4tkiZK5PBVoyJz8xgn6ygq5H39QrgXPtHFAH1Y45X5LGhkZZSVvC",
  "key11": "3vMbt65U7UMqD2DgPnA3inabhAqr9FMWeXqzznhdGwtDqmHdmm9Ho8H741NfAzSLVbpzGpFTv1aFSTUkZSyobBNy",
  "key12": "4hMPw63sVMm4mXe4trKp5jkycmDwHgFYjENP5T7NscVkPUA5dfYuqfssNWAmq347Jd83JdE4g3pg8uuTiNGGTWi4",
  "key13": "2Y1NtKk1JENL6tdURqu6m3QANBe9aNYdYJ2CPmRPaxKugPucydsNFKXhc27ejEtRrJeS1NJkMRufq4tc8eCqiaZn",
  "key14": "55BjjyxTgjUd6X9gjXGFAQto6Ta3GVvVyChkRu9DNwFYzhhFHvuZYtEMyCD19kotZdy2xU2FQMMyxvdrKvchjNnM",
  "key15": "3qpyXUNv2v3onzcnDEffsUTKCnsyDjrG2bTANnoZRVxpK84gP5sm7stnoWNnUUrk2bLUoY6d8VwPFZuncWtkx5y2",
  "key16": "4mhBeNLLU5Dj2i9fz1c5GvevCz8GLjdgq2RaS1JgmYQReW5FdGy3ryChX3CSfJXvoucADGAudZAfzvGwVNwNL3K9",
  "key17": "2inUhUw4Mrp7hJhDkxsTPExQ2mB7jRSBUh1SDGRDTaCSYNbuLtFTP4WcLZtCe3crBfyX9tFzFMEwxziXXwisw1gJ",
  "key18": "2PU9WXkf77wg8iavpAZiC9gsNXRLDqwdJtGe4jtwmWpxbSH8QGoqcRqReA11iYRNwm4wLgJnrkK5NBeJfJozHUxq",
  "key19": "56Wmk3wiRF5Z6zMBc56bj2Snd5Npgn7kgKX83uygxVedeQhqUac9aSBFvFtFc1mCipzF59WZ37xXRjw119LJBVvu",
  "key20": "3FGmLfee6AYnBqFm8kAGZyajTSHJR6zUyGSE7Cn8YtUJi9qqVboWm5ZUuk5apfjyXiykXtidxABWahw8pB1FbNSY",
  "key21": "5hFKnUAKsmL5QPmzE6N5HBn9F7irk8DTucWG5UfoR3y3ik639QcsdsV8wCUmP7god1GyGP5mopR8kQ2ZAmNJJ8dp",
  "key22": "4m8gJFNiycZxLgVheo6fwWf2R2dnXyQFeip78PpAXDbx8aEpTBuCMzgzWmd7gUwHVryxNHDFr6Nzt6GdWdjuVEX3",
  "key23": "4aQkJwQyx8mw4eiw1CLafGTAGPWPUzRMUvQ7Ak9Jt7Dy8oLAX3JHoR8dP4WjaD5FKwt97KshHu9shMXMWWStvx2U",
  "key24": "3D4iuLwU1sXD6LmaS1du2QZp1B33BZQj55GZhKuo3YScrfXEQAKEZGc85tUxdXaos9zmZnGk6J8B4GSYHGenBDw6",
  "key25": "4NymzT32CxXMqS1GuUDLzabEut4JiLK46i5edFyrwrgVGVTfTVLZ32rPmjT9iGniM2gvo6fmbF6FgrYmBqv1UJWt",
  "key26": "4F2V8DPdZ58wP82mxZ1NqJapsj4mQMXA5aD9111nJg5PLe3ac1NYzCvWWgpcuQbNesnx3RsssxX9AxsrsiyrN8E1",
  "key27": "4hYrfruCjwF4f36PBzk3jLtWDwSAUSmj2NsjxSJCAedGdkivG9uMQFMKQTarAJg8WUyQ7CWB7SX9ZGyourzpdhgN",
  "key28": "2wHuxd8MoHAqctuFrepLsHGt4ZYc6mAvx7d8Zoo7TVX25T5WPrhPqe2jqoDf9jMWDiEm7aRTq2QYSKfmmwG4pSt7"
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
