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
    "ZupMhzMYTHxaDoC3R9khcMayzi5rtC3HUhjbD4c6PbBe3L11ot4B3BSPkqUgZv6hzUikCisk6iKwxNqZFLQxDpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jfp9yavxLLGFic7RSZajJrAQFS8vyDc7FLCfUegRHVHk7Fa5EvmoaGLDDeK18FR4QPY8fiAazsaMWaJYHSBcriH",
  "key1": "2aoHLcZ9JamURjUrPvzwJ8rD9DSQBhhRQn1XGVJ4VMn7DPmDML76pLi73pLREnEDSV9gDr5JmNPGQTYHvrvRgDMa",
  "key2": "4EYP6HVrdLYa6tJLMsVpR6SKPCTCRAFrEqp3tUTaxm6BNYb8QnPa6FHiYSasLoivreKGHEQ1CPNC3NeEfSiUCcJP",
  "key3": "GtyamPNHTmu6JfBDDSEKD4db2kwE5MAg72U91sGM6qjDi4TuGZQqYxyPY826xqmeN7kacGa3jr8CvCs2abcNSCw",
  "key4": "4jWVjTxmM76NDPgih7BnaaC5LoYYnqYuhLQFrawRG8rY4UsPbR98cp9Eiz5PZcvrhWXYu7aVw9z1TVb1j3qbAL1v",
  "key5": "3jvG12a9eunknvy9XduuV5LsLVwU9et7C7tnbYPaTApSKNKFG6bNZ5Q8E1xRWzQtF93iUkcAmrmHu5johreK88Nj",
  "key6": "4HEfkweQH4ErM3Ti7Ju1xJbEt7fwGLhS6wEeASJHWx3aaJLPn9RhibpmC6wLTTV5SF3nLo3SfNxc5WDaMD3pkpYv",
  "key7": "3QDtb3q7trMm1yYBXZHtS7kCxV1NNt9Q1ABetADpm7AeRGYF811gif9qMW1sJpshakN2M9VRuNaTMXcks8pAKUZR",
  "key8": "5XtnfYqQmiwr49aVYQEz18hwujTXxsRCGZVX3FgSz5awVgtFAy5WgnXGR8yJFxd5Ed4hREkgeFsddUSUVbtBBmBc",
  "key9": "5XHMTekjCSeWpu9KHyzptJBPme2TXF564Fp59WJ1969kTWUGieV7mg2UHJJ2rHV7jUbcW9mvGNGX1G1k2ptafhk2",
  "key10": "5tSq1S6qA6vnfJSSKyagwYtE71vfE4tmcMJTomA7Q2MdcJMJdKb594XCatnuPNaJWDCBz6pJz65UDPGUsrgwziah",
  "key11": "2AkATZtPauYGXqeQRgEGjd2XhNugzQAVtRfW9WP5WNaDBASokmY4kdNGT45x7bh7HQ5P6vtW6GEV2P15z2uYGCLV",
  "key12": "Gk7kpm2jZaKFH3xU2u4zVRB32NLdUWym3TJNvkwhpxsVVeJVMeqt593wfVccBvw2viDjF91QXibzP6yQ1FH1bTb",
  "key13": "u4EVR3SAgK2heNinq697H1DmJG1HmChAfj49V5A423x6HerPhmsqvBppSfxn9FVD9D6PYQ6M1fsx5amy8N7wxCm",
  "key14": "5pAiLirKmXsWKCgfhyupApWjqct4G8w8r7GZDXJsFTAB6JrQqrLjgFfwWgC3SX3ZrvihDN9gXRzuXEQZM7SYdfG6",
  "key15": "5y5PTQ82nH4qimYscVejkHfUZbqafi76bZCseM2AthJ7tinceaJ1Z1A5z8Je3cYp5FiMwehXGM4CQMA5pq9HzgEH",
  "key16": "MjNutma2A5Qz4LNDTgBmuf4wKwtRzT7rdChoaj5m7oAHu1FohiCChRQKzL1wydfLEFkWmmg52WghedAq5XSUyyv",
  "key17": "3owVsKzdhhFmnj7UZAFbHv3ovhWKZ6AfBYmgsQHZJsTFqHE9NEtfSePtTFQGRsNr7s712xBNhZixvtRh65aBkTh7",
  "key18": "1rfEypKbd9YFff724zHRGQ9LfGjDexfWoL9KKF8EYswgRjasDwxUBztNAN1iYAxF5acFhf5BH7BJUEdyRj3bHfF",
  "key19": "poA7mXj7XoyEFqdrgahKJScwoj7kJmeEb2X9D7ox5Wno15cM8iGv6z6Q4CkZ2CkzsxQX4n6jc9nwBWn7bCJJ5F4",
  "key20": "NxhvBNPb19HxfoL4PKkQkSr17VpaspTbRTDoNQ1xRDBrmtvJWstAgKA8nFeq7HarzoH3wFse9HG9g4BahP5Y5Ym",
  "key21": "3e2UVHMk11iEQXXn4yFdnUgcfxXCJNnZdkCz9iFa8Qq282C91Lk8yB8KKYfPYpqZyXfR46rD6o6X24TUTNtMiRE8",
  "key22": "YgYUeS5z3rZTanrtBejSBATXTHBSBLnxVvD353tkZfvKUVEaQu35y4F7CpUyuJyG3PnvBYWTM7zZQCT1bNkfXRY",
  "key23": "3nK4ZscLUQawFpiVG3VZrqSkuuFCCpuNKX9NkCSGiup2gUm5k5Bd67Zx7fsvb8cRSGRuC3RgBnskP2mayvcNctV6",
  "key24": "5scKjF8Y5qchSV8s9bw92Y97nC6usG6MW6BbEpzGDq5vcU2HZc6gYeUESC7DYN1e7tiDNibsaQbne1V7RoYQfmoJ",
  "key25": "4QdAxY2WdvVnUEeNHCoXYucn1MZRqsQHLd2mfKGgK3LhcW3UXVd8Rn1NvdupZrAds72o3HttE3qaLrnoLvjSgCQ3",
  "key26": "243gtQpcY3wAwFUF1zASMSU1GgiNqbMKuKH3P3E4R8WtocjJkBDYdxWaYdXLctoGLF57sUoQJLUKdAkmj3ZkWGKp",
  "key27": "4E3CMpJyxzhdge56KqXqYRKckuiLughJTrrVu489biqZYmoxDnG1Q83QWCgnJFZx3RwGhTF2aWXYajnx5koykAja",
  "key28": "2cSqhm6mcLyDaskLtij8NHyRUQ2qV7akWvBt2D1HxVxdVULdwGnRpQJ3EQc835Tp9EFxzRNsBQZaStSqCR3xhWzV",
  "key29": "4JYqQPcWuNv8ixsuTosXnQboVAnb45WbtspQVapyvonCNfcCFoqaSL1dJ5iaH62jN6pck5vHT4ygCy5MwdiFsjSv",
  "key30": "4RpJoSpBL1b25zZeovYzKXyhwjANBH2EEs99X89hxZV8uriaggcpvtuy6afosZRH5n9tYRWmRnxnRZDArmfPSaHT",
  "key31": "29nrLVDgHz8D44cZXFArQwzvRghGqEokhQ4r4ubLZyZ5rToTpatdkLsC5zJGKu2PVorvvMKx4BFKa6CjxXrUjCwK",
  "key32": "3gMv4ua6ZL9Lax88V3bsskXkf5dVDgev1daKiJqzfTohDg3mL45MSToozpZZmWSLKwJ6NU1M7PekP36ZSmvQ7PLs",
  "key33": "yKAdiehEvuYyivtKbSSPGbCgWC2rV2QmpXTTpA5LwWzVWwfNWiHrLdtzrCp6nAUgwCpab7QczpLnJ1fnduoph7q"
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
