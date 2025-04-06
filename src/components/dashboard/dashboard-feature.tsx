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
    "5DwHDsGTfPeCkq2G2ZDdKdP2ywesnr9BE7DMxERpeibVxAqBFLBMWtLbJkHzsA9aurF992td7S3Q4xMMUi1hvoqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APuwJi9M2FjPxjd8MqRMkFVozcf7NFtBpiEhcLrrQaoBsXtLRuAboW3SKabuK72G49AoRQnH1vBxXirYjkmaPFR",
  "key1": "2GeAWjp7zSW8bUjfmh1FWqKovkhwUGw8nT4j8fsQ2MggA6wn8Xsg4p8vrdPfoESGN1qUn3Af5Mzsdx7iwfE9gNQk",
  "key2": "23iGdYQsMxfYkmjyhf8hv7vhtBnxyu2pRcZxzTpHaKTRZNhva7B5JgyjWu8L2Giu9679sqjZwWCRmHfE5Wy6gydo",
  "key3": "4A4myoATWgUribRadBL3G1HDc1s6o8b4WL9TJSDFXVAyCyrPhpKkUHmREeMBP9zrdpen1dL88KAhi1gyKppWwsNM",
  "key4": "57a6BJBNdgTrCjRu48i4EhTqrJjv5fvRuyr2KU6qkJM1dpcrafV3bbWxgSKt8ob2h9e2Zm6nfo9VxPjPp3gucHer",
  "key5": "bKyCboNWP5riSHqCKxNfNcsjbJ9JojabFo3kjhJJoVBG59hPSShab4TT8o2VCVbaHrhwLwj4AKRMoWiXUjgqYQN",
  "key6": "5MhRc7cDh6owmwpmokX1wZQGootq9C1AGoGb7EGy3QKXrJLJMDF1ixtTLG4qMLz8aCEsTrgoquuFxNoaWHH3hTJA",
  "key7": "zY6RvxyGNvgNjHvyxCtQQBBqQ3wyCNQBC4YGYc5F68CMahQbUHRDNdQ6FRLUjAnRHsLM7RJXgFAijtsnzKoY8tY",
  "key8": "59kWdViba1ybjky9tqw4BAfAS4RaTjUQQUHp4bfXKh1e6Lts6mh9K1zoAiJ4BffBscnXM6RDMNoiFyyjNR8dJkGd",
  "key9": "2fY2sAtqxcvZ11qwXD8xP8tFEoYmGnNsQ4XdDeeTyVEFcH12NQ1AXx6SJ8ZSWDcFJeRKHJrXdU9MtF3dpUTHCTCv",
  "key10": "3vXbrE2deTTwPFBKd7biNmXUbmLLCpmYVqzmy4iYefKy55gaqtxPSU38skR6UUfkir9QVo6pXXsRWQAPsFH62kMp",
  "key11": "57KPRTgBrAQ5KvxQw7k1yiarkjPS1qVHDc2qVjHo6LKdfHL4wqaZWb3JfUc6QMNqv93oLhEphroYsvv2MssUXJLS",
  "key12": "2UPsxSA5BuVpVdMaqgqARXDhZkndmeTAx38g12AKsaxwiYd4miF34Pd5zF69u4225ZRX74JvDQas3qbi4zYRZhjD",
  "key13": "2aTA49u9GKLB9Ytc8k8HGJZ8jW6cMj11XSSrkg9LDhej3nPg92ucM75H6p2YRjBQQjLqJsb6mjLzLrr4rLxrxFHF",
  "key14": "4AGzVjdDUbh41cfHDWfsCR97wcmDM5DULMHL1mA48d2Hj6NUoPrXmszDSSQRYvVKdEFcbLsRzbSN2KxEvmjf6W9R",
  "key15": "2xchFPYDFe35FK9dafBzdZPKoHpeFQUmBtmCwrqAaQfu7cuaEvNToeTFtEoXjtxZUhgQtcQPD359vM7ADLFwh3R9",
  "key16": "5A9Hj2W9zaoFSe2YXxVMijakM22tDN5MyfsmE5qy5krAshsVENpKQXtWyi54wZKvgVHdjehWC4efKsxjYXdyDvZm",
  "key17": "5kB22EtjTBKdUfcMy63GAVBy2EY25Zfzq9TBcXURi4ioraMjVpaDS75rQjv7VBJMehSLae8rf26oKNgdLmfdGBBK",
  "key18": "51MwkZgkN4BV2gfNN3EESxpizG6GaE5eah9vC3MbQU6T3kqj86FnVHKFTtAw4cWVQb77onoZiKDTP4VmHuNfPBSx",
  "key19": "5XFFrUQ84HBtXfLEjCPHEHfV62qsYKnJrLNX1oVZNFJCDn3GLJ6gkxiKF4rT9o1J92Rqk9nUrC3yQjhAzQCz8t9g",
  "key20": "4RkhpCb6VCAmgZbaZhH1o3GrqdPWTTVR7Yk5Ji3Z2BAqoVMiKNJqaM11e89R3mL44k381frVYaPdB7nwxgg1ijmn",
  "key21": "3jRbRFkh2MAtvDdujrKfLKxNmVmZT89dTombUVTkXGVVQHM7xpqX4oqDYWkSPBhNPBw5GrVnVnL56ekxeiCV5qg8",
  "key22": "4ixaDfS6EF258GviQpa5a9URfetkqpLHf8MaA8x6K13ATb4vrXGcURsLHQHewRk4Vm2NHgruAS3QuC4qxnS5zvMC",
  "key23": "4pVyNn3EjmnBFz9t3EHbrTZUsqCXe5xi6UbF7tGMGCEfqsfapbN1iNBQjP6C6DxoufHv752XkoXnvedZLw6d2xYS",
  "key24": "3tihWr9LPhCV2zFDaRDEBNpQMbkrxbchpwa6Nash1cXS1NK8DXK1PUgpLgu26rGLh23Nv2q6QKsEmLHuEo9oSxm",
  "key25": "244WRxiQW7uawHGXWJcvYUp2EjyQPzz9GfDUt2kG1N6GBmL5ZafqTre2wEp8HSFN1T9tXppJ8Yg4x4ZUNLenJfod",
  "key26": "51RD4Ds74jmcvPmPFZKWRyq9RFPXxihPZF9vribf8DNwvEmtWt4nvMCLibkZ843t6rYkfASCNKXLkJUGwyZD5iXx",
  "key27": "41Ng3Lt2dxPTi8sHdWthTry6MPMTVHcQYBna7sEDdaHFSF3LZe3sH2LyBjPCGTwSRr45pyRU9zGgP59xBNmekBTG",
  "key28": "52FLnhDokGQwjsn1x9VMjja3x9o8fVLYx4upMtvMySCt3bFXG1h5tdagp7VuU2DPrm3NL2RoY82bjcfc8Dda8ALe",
  "key29": "1om76xnrnXKpBBnuabGCts36o4LhALjUtTggTDcqFbFGT22UbZ5KA2AyMDL4FpkM8HcZ5bu6iWzT5uwVyqmY3yr",
  "key30": "3ppobu6qoeCdLYmVVW1Kf6Uz57MpXUzfmwxcghwuE8gpEDMXXG31BGuvB9oftAUQNhodm5EhYxVG73QBwHSVHyBw",
  "key31": "2Db8h8avBfCyp4fRHTf597YCuBYGGCPrFWnfeT6jRx41MPcL4x6FyXf2xQhDF7Dq5qzengR7GJJEtdPfo1shNik1",
  "key32": "3CtePiyiNYnkeJBagartPwCNPVuTjjPbffMHAYswXYJ3RPC1dRUMHTPRuM9PkKmd9XdeDZsmjweNeAnHobbGmXiW",
  "key33": "5vsQau9G4JL57VeiEeErvAFRmVyyDu6DP4Kg98nZTRFWLnBVxYQPPpPkP8EbnMEA5snDE6D2D97AAeLrx9sCiRaN",
  "key34": "SMFES8H9rzPKZE1qnWXZsv2AYx3DSitCoDSKzdLQQM46Mghj3mYFfvgzTYJTrz4KEuSTrAopXANBzsEzuHKZ3G8",
  "key35": "2jCAvWu1AEBQQf5GfQk7Cq5YmfrYFtL4cxo4A9GgwfmiBtKw1HsY4myUUMQ4Af5mMavFvVj1WvPwsVhBX5Pezoum",
  "key36": "2EgooNQHVW2UnSJ779HrnVddbyiiUVWM86Kd15p1aukMoGx1bc5vcF5GWmjBXxV8a7CB69BrNAFhZ5RV3dvHsWWg",
  "key37": "3YmzpWwYSGJbo8Xas84uHYcyT1vJcaCA2YnEQ1wVNZi5BwLUzGvLsgBJEuRgyxYeuV78T3v5XBsZJ1mNfNpzrpio",
  "key38": "2LBV1gv1trrbqZr1voNF3xLVk3DYPj2zrbLPAiafzLHVpexq2udBrWmH94TY9WKKzHctuoM5aXWxvr6PTFvdhZyQ",
  "key39": "2k2Wvy2iyLXQfgrZNbSZEgDtXpor8XCAyX6V4PdNPuGnGhpoWqzNFYxBdJZWffbGhWDYxvaLSi9y9XTQfWZEWpJ"
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
