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
    "5JwsyVyV1Z1qN4Bxr3qGZooaNe8MnSxpz4H38BtB8W9DtJ2DgcqGQii7LedWHbzYvzSmBeFWADrGwh6y6tKkpKBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31kvz2NQDtovBJQgz3geEmDnEG8FFkeoG1mHMTqEG8yJuKNvp4YtSrRUQkj4PPXjeLyazBduKtHHAeWbS7TJ79FP",
  "key1": "2aYwGNpmMyLG43ARFLfGHtzNGmTGtENXTfP7x32MqLf2YiusbUQHsEAjEpEab3pF5j4Y4Ho5ZnT5hf8erE6d4uSN",
  "key2": "7JZH7oZx4S5Sd7vGA7AJssBSbp1YuWsErHxVVZvbAaNngkhQWVDhY8UCo1pXC6eKTvYM1vP6hkiw41snv1TS1UN",
  "key3": "39SQTupKxGzuQeunUjqGHpTPNT3yvsE12xjm9Bns9L7RKmpU8EtonKgBqxdcgExK4iGnX3JBymdbH1PJMH8ZHZ76",
  "key4": "4NW3AfdR1csc1pXmnPLs1pfBpjHNwohNdjTJ3aAA4BDNAFMANBjubSvproiS3niJJfiztcer8dhTLS9wWomYzMSG",
  "key5": "271aFBGCSbFYhkKrGeWcgyojzdPVzCrwujmNEg8nWTFZULXyaqnbxgwXjBLR8VSiauWVU65D3h4n9tEcnFTwhuBh",
  "key6": "3XEGSoDxpKyUYvPXWfMkbdowA9BsgNay7GkrR8jqnbnEkAqKmQzt1nScBVo7Bdb5GCyyDuG3vmMJJK4LR2uFBq8c",
  "key7": "YxSmZCsnoDVRrdihSGFHLVUz8AYA3LbZEcCpTbJ7NhqJ36NkehtYo7Yg6BtpiHx2wxWgYK9pTTT37q1tFc1hXGp",
  "key8": "3dKocpTC8SCHKNvHry3jKj6PPVoZnGKi6qV4cziFvbg3HMmV4ygAB5XEqhLvxPnpG12hZ2PUiKyRZ34GnxThMCb5",
  "key9": "38mkxCiDG1rpPcXRwSToTCok4MBQHgZ3kUA7eXCqz4HjMezmZeCo5i4CSNB2Gfo9ZWJtWBRGq6ZGSopiSecYZ73z",
  "key10": "MdrYfYbXxcmNYvyt4G1rZuMnLH7pYCoeUzwVuRqiPjXCQGEhvm4FaGUEmsuNLRDFUYk1PAH43V4hAKKzLr9WHpp",
  "key11": "35ohiBjtmGA5kiJcJrLAwcdhGrQAagW2ipYgPNSCvFF6QU5QwXmtu3ggTevjtWB83ontWp8L3brvyUeXhR54Y8dR",
  "key12": "2nTwV2qWRC6SPHqXy5PqMwzVV97gXhZqko3hoXfRF7mKGadtJghhVwhduT4FaVoxodRuwTV4pvvmFfaUwEs2m85j",
  "key13": "3VkHkywfgFR3gBtRE4QzW1u6ZCs7Dph368f9b3Zamkmyn2dqdHhtWrxs7VY4e1F2sR16n5WKbboDeqhrTqskq9XK",
  "key14": "53QpbYunEjgti846fY4n6AssV4HXHLtLj6dv1prnnxfkU48cA16bGCrSv68ArbMWtCaTvVkYk9Z8NNQQCHVyfq5w",
  "key15": "5mqY2giEKemtepZq1kdPsLC8YqoYQVdNf9D8rV6LBdnKT94X4QZAtvZjt6N6ejYTPTFqwrf8Mg4SAPotSexMT1cL",
  "key16": "4W8AD24qPtPqrHu8D77Hw7NHbdQHAibeZkdKEP9eCjMUqveXtWQYweDS1uqEdG3tDAwYr34AHnhwBLGTWV8aSAMm",
  "key17": "2vEKUaGYgNvZtMsFL75JWzhgvk1wMb5KvXQUQmJ2GhH7BiyYTNvrR8s5kd5ZC6WueBj12ABnPCEMhwDwU3TdnLB4",
  "key18": "3X7zJqQca9f6iFKuoJT1Tx99vxvhVZq99MFjncBcoLSKnkwWdJMYTYnHZNFBnBPZdvgPT2sfPTPF12GMZB3RnnuU",
  "key19": "X4cT5FJWudmoPR1ZcVsowtT3b2pDq3oZ7GzNSmF1XD53fo6tG9z57XYjN3Mc9qc8zAMh5YkQafFfKg4taZjetmP",
  "key20": "4Y72BwwLgr1GTumgYHXUUPWrSrpkpd235CUPGYjJ4iFzjbHqX7gFk7GgpzsVPwX1uEFfT3oKk6ieXtN7rx8wSeeh",
  "key21": "3bMh9A1k2wsrgWn1tct6E2bUTgLEUSqetBLezwR3qqRXgrJs6dSCRyHqAmDaLgQDjPmB5M452khaxWgCWvb7ouN7",
  "key22": "2Tq1k3y8As79Snw52M3FZxyM27x2SHehddwi6UX9rThE6px5yPrzjwWGnMNUaS3RdHbahEuYqAC8fUASbbaen31h",
  "key23": "61FANQCyjHPENndKaEaY74w1wynh3BoHi7hdzzApDhb81xUuPkLXN9DpWuToGk9dpccjq3KU3xXeCjbf15W8eTBS",
  "key24": "2fTkqPxys8zLPjv1WWwvZ8kb5boFzYuntyTQu8yEQs7F5vWAZb1TnB2LSpobeHgD8Tz5Fwp71z6LXroYapSADqRz",
  "key25": "2XNmyBcaxpu6PZDy3ZS51hJbZDCTHRfLViPBkW5SxCn1pNHF8BYb5A1neodhUytEqiZJnPu9FLN7CnmdzcXt3BmA",
  "key26": "46bqu1hyP6pQW384xEjf5a85tsC33FgV6TySUx2q1jKQqntE2S9R9vyPJ6Gjx7T5HzS8ajq91koDUk6UT6h8mbG6",
  "key27": "Dbf8X4pq5536rwyWnv6erraUYV1nUBfXxzA7d1mGHzBiTmXcoH4fhvcydhf8igZPktaKfBU7ynspdTnqwi1JBLM",
  "key28": "33dT8fVBbLhjbiyj6Ks2QQ9uSnsFoYbmebb3ntkbrPQo245hzRn8jQLoVtXc7QjRzLJxhyukYC5XJCQxWnThWGv3",
  "key29": "27JZvexi4jdxxchqTEqjFY9rpV8SC1YvzPVhYqYeBxWZdCFXpRDMu7Z5R6NVdgwp5UK1oo6ahwSprv3c7AhEhK25",
  "key30": "6NWeY5F4FGMpdPN3mGzygRC7CC5bz5tJQhPjrKjp2EpGX8PwJYBu8mpGSpwgpktZJnE4J8iTmxBEKiNSops2cND",
  "key31": "4cA2pdXYGtSrDFSWxdWXSqTcRbUVQcgbDrcvwjHTERBuToGgd5chE8JE8K5u8d8PZ3gV8kArF1iem2RrnSoCMKx7",
  "key32": "5KWNCLv4KhkbTVsDKNJbN7azPBBPTQyX1b3cWP3tCLa6PrsnzAfHHVjCe8VuZKDfh9b7BVU9fyiEwp6WzAz1i4T4",
  "key33": "2zxsmh7WgHz8VfeMnUTAZzWdbpDd57Eyip2f1A98Vv8ejuUfm3UYtdhUGVQV8q4Kw1aTvRpi7vAXPXaSKaAmxno5",
  "key34": "4gkx9GwFQZ3bmyD6H51J7CkM8yygbwuT1sYH6WvuQBWMpk6d2dLLqJzewbFRZnsSyVXgR9Z7mTRUYk6BzSBgKmz8"
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
