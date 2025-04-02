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
    "375KiZvGBHpjYYb8KEieytbWe5zn9nmkfyWZaN45mUpjh2drVBy5iiU7yE9isTRxe5Aq6JDAwDUgvqTdZAjWtf9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oEn6VHk3J6GkUVaXF6avpsefU17pUNL3RzQ1g25kGhXsX57JBy9VD5QtVa9H7wVR9nRPZE3qya9wmtdtxxMoxZq",
  "key1": "5Bb2wDuukEkQXGNJsNSrXoNnHk29yXqVnraS6nrxyu2QzGzPeFyP864gpcVWbyZQQ5BkYWdKD1pmuddwPKRcxo1B",
  "key2": "3MLAfPGRT7GyjYoHtYPCvbYXsbASbwmo7VqJq8kBbf7qtjAPXofds3nZCcMpk1apqKrunQfoXUN71jYFXgrZYBay",
  "key3": "x8WH2zHvFSFWEQxDHsBB33GoTvHLnEUCAt8eAK1hmxGic6DatwJzjCBNuRNsQ6PePHG18wnizpCzp5gSchPRRFc",
  "key4": "bZkWTEcj5L1DhGJjbGq4DbZtcdLKwmgFB39TPoavZWU3nrquhGdkxqjDjuZVvDgcDdCqaJq9M2QMajb6GgRgpoy",
  "key5": "5xja6NHRwFC1c5bDWxQjwUrPcJ1KYZSnSoAouVnhRXwoKy2TV9owUFftKmUgobfSbSbNsvBRnsPyruqRX3n8jkg8",
  "key6": "4y6a1xK2L9cMZtjHuVs9EaFNNBcDP1WrmKaJAcwvECJBQr27kQnxPiaWRWL4gc4E95EKVwdYKtQhUvuBhRTQ2Wbt",
  "key7": "2xFHZJSJjg4MikE7GL7szUBfcm1CLqSZq8oWSPYdENZKWs6oobSec2GVawk5W8u8zvip7cymv63Ys3zykkBYSZ4M",
  "key8": "38jYUfryXSse5BMayEd4NedUmiRrMw6UnimXMBbL7cZeeGse8wM2bmY6yNYny1pgeejhyQvbToEKkyPf93RZky3r",
  "key9": "4fqsg7hq5x2mjVgBaVNamvW6H4wu1QbE8ymGfHh21X77ABCHtUCTmBX6ikxgtTXPgStQ2CLB4ZycRv1HzVMeTvAD",
  "key10": "5VxWsdj6vfikDEeHCr1qarYgi1euwJ8UFA6bxHsVcGrxTYAgrc9PQZnRYUrG2q5cHeXdQzdp74TLhhwfJFRwTHaT",
  "key11": "2kfCsjZnT4YxugRfinsjjnoXZSNqRewHTotZWa1BTu4kM9hA6HBpVwKpzRDa7n5QcwEKFnyi441nUgdr5AcAW42j",
  "key12": "4EAZSSQmbHBtvrpDjz9u2qwEf17zGfxvZKCyHLsPKqtE3vamKecN8LkEa99D4HN5D7VmQFtetGyQf7nbkrvxf9pq",
  "key13": "3Z9Ur9DisjBueVkAgfHJFJrSGj8DFqzRiUV2Mk6UqtWaGEPbFxDS94TsVTzVkemFhD1obWphu2LtYMxZ937xdYLu",
  "key14": "2FXu2BpRHyWK5XLxptPByinK51HKGArPS1Gnij8cySyeRSCsjVXwNniVceD4HvDe9GiPUVF1pNcdxL3PRrqVTwNh",
  "key15": "ZSu5Cgxxfya8W4cGkdhgS9kuNwwsA7Ce6t2mFeJvGwbSGPL11LGVKsssasSMthM4yFCa1vmz7qBNkazSWbygChN",
  "key16": "4roSE4AULex3hAeDWPypi3t3WYqxyyYnxNSH867z1Br6HhRJzeYfLL9AXDaeiRDtf47VakZdvw3xKaRXDXhQHRvg",
  "key17": "2t8PSXtzUXoEAmsTvz1yHWyNWtqNcbSpRdP4MSz6eFripgZ6dXQrvYMYh8Xbr5MXvq72hQuf1rouUVBNCLoDw4yb",
  "key18": "55VYRtJe4dEdWdeaztXwaCQF3Nmh8s5CFH1gSUy4wPawzson2nF43BKRwb9XuRhMy2PErWFEhHgYUNz9RMoCX26U",
  "key19": "GDFLX39MaWEpgGAijEE7dv4DT6YHUpcVTN4KS6Lfta5bLaXzgk6fYzeShsxa7zPCYuHVr6Qi3cCb3VTAwKUiy3j",
  "key20": "3Nb9Jw5WhW62wLaoatFFviaMqKPyqtYR8BtgLEcCHmfd3FpvffaUpkqAb1Xr6QizT45MtVTEbynU2wVPmb7QKpHR",
  "key21": "3Nim5vbwnSoKyjPe85Fk8UyGwKCfV24MgwLNyR83qvZi3NFgamTPTAyYF36EL9hUGy5HaufLK8KnEcsS9BKQ8XNF",
  "key22": "2ctGqMXbTzYrRfdwtYktKHF3iG1AWXiWQdVJCWKEEsdSaUFmZThuhHWLDeK5AD9ccKcZnftq3m1YHcN4dqm7C8fT",
  "key23": "5Ft6N5pPvtJtugoKGFVwnroh8cS3BgLuoN4W5YSQnBRxTyVXZ3X9twKg4sVBmTzadkWxA1u415UCZC31b8Ec4GQR",
  "key24": "58vZt6K1hTauwHTwcXC9pEhfqdKbYnubaAsg1YH9hVg1UzL72w6ukNQDdC3QAMDiB7rkCbNnzed7gp9fhyqsGtrj",
  "key25": "2NNvnmNfbMNab677t6eyTikgGLXGLMHpBPouoKDmFEH5YMPDocx1KKuavyeYNvfp5Stp2FsjaD9mQ8QS2RpbSjxt",
  "key26": "MxHhQb8LKaHD1aKD512Yr3zt1fb8QvKmndRSpWvsWos8AN3vHP6GMYo6Tcp7qc6eEjYCqq2pE4wjAFDNE37NXN2",
  "key27": "5QKR7gjUtBzw18WUh1caAzUFpZVwKH1jJtSsn7tZt3yJpe5jNLymeyHxzykkUV8j1DCtYEwAEMYjf1g5FTJZxRDt",
  "key28": "7ToM5c3my4GkA4G7ubzyi4dFGoxmcLBrFKoigtix7He2och8oR2KEjxkGizkNyFDVcGZeiDYX1Q4nEx265V74jH",
  "key29": "xe1RnGLEm5Qw3Uxx3uhN8ugZ4nfksenHGfadFSRMCBQsRJmhM8pC3iyFKkWJfa1kXkdUgfsuKgwhhFXUM4gztN5",
  "key30": "Jkst2Xh1RZZSsEbzdaRbJEmUoWTepFAiRiSt5vq5jxbbcMBMZ6vfy3cPGEjyt2ZVCAgY6KmorfdBSYAuQeydTCN",
  "key31": "1oHS9cTQ1z4Mt68r339LMqjvsPcNqzNCZNSnur6D7eEETC4ECdrr9GutyirFbmDAZS3nPH27RNLjWkWujS2y8bX",
  "key32": "2uXExNPu9yeKkUaJD7HMusmc47Y46wvzESjHWSpwfBYCrMAnG9JW9zSviuLxi7R8SbB8vh9H93YoWdrxKKqLN5Lc",
  "key33": "5rKQz8CZX6kSKwKwEWTqErjixKWJxFgkzVuWq384oSNHPx1Uz4y5SvQ9Wh77zeHzkJ4yZVQYW89G98SLcBregYtG"
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
