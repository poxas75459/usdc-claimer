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
    "3QNHvmExwiZdN8vzrd2MthzYGCm8hxqSsGFUAQffXmYTw8YBodovu3A8KcgHQqMXciynvu3GLcdMQ7SkKtwXNEcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ctjADad9pPdB4z8JoHYsX1ovd2NiHZ29sA42AJdNxHjZxo1nFcHbxrA9FHc1dqNNQ32aajNYLBu284nhwtYh4K",
  "key1": "5hEX47K4HQw6tT24ixbe9bmTqyNTJkMvTnJfoYRZewmKweq6Qmg5xaAaw7owVi9jxJDn5iecuZrGMT4QDurfHixj",
  "key2": "zFWaxJBGCWBavknMWoTGUdzAmXXXhqLAHd2Xwc6dQKyb47tXxWsgVYpTxvTUS2DsPGvwAZmKi8bRaGMghQyMFdv",
  "key3": "5HXDkTLcUYw56i7Z4DLqBitnZWUuEzwhsCdwUDKs886JzyU8F6HTyg45Vk9hujrLgHsjRWKXhuW74RbCKwFz2W2J",
  "key4": "4wEwgjXe8EstDt8eRsHXHfBmhLhCaCBvpLaEnSPHmcNQ4fmofChPmLn1eJcvtAHjb4trF17v48qvS4c8oXHosPF4",
  "key5": "2Kp68V2t5432nik2NC8UEkAiMpWWFudnPwP7rNWpX2yCMXNva3JoCgw9qTGbsiQgRa1c2Gx92xfAXbdrYYZceXA9",
  "key6": "3w8ChXssWrCBcDgYcerHdiiSsLbTjgGcZqQ3tG2jaUfcAuHkd9WvHZWyMLpFZqKBBx5FSur6822b1YchrVjigQdm",
  "key7": "5eN8orx5qacBWpciLhpVNpgkp2hSZP6pUz8JH8U3suspzh1zu4qoZEBbGt6MfMHz6oK9hgHBp1JJqDMq4joPqHtw",
  "key8": "3RexVB1ZzDhFUsbvCztnYBGcssxqxVD2PCJGm7qQujE8xKJtrMWQbFbWhnekJyqXpBK17YLoZRybfuwa2y7bvY54",
  "key9": "2SwAs5J5HwDQqUXd9C4TMUo6F5gX5xq3gJQE5PLp3bTssQ7LCw9BMMJemUhFq9U6jUyR4yQ94Qnir1X3qxai7LhL",
  "key10": "2K5vLuERU9HddzvGnYCkLL527YbeRRG67icgg2wLpwvDUEFr55bKV6vmEx7XnDaQwq3Fq8H2gSqpvYudiHxabKu4",
  "key11": "3jcGJuA76ViaMTs9Gh9CNKSvNR2Sw4RsXJPisWF7uFGBjkgfQzdsqBPrWiX1T84GFhQ23QPkchNoxnHxauxi5Wfr",
  "key12": "3Vwa8wWMXWaWqkazbqHYbRJTQsDjsm8HUbQN1kBktmfNziYxJUUtYtGNRPoyHFSLUQ2dtG1vVUmE8FjmYLciHTVZ",
  "key13": "3cvgQkpvTUawtxwksLdPA9ZrfFJQMKei1o3qhb243aVkNkuNvc7kzuxGqVfvavR9sXE4BvhiLtEF5dVJQRuhv3Q8",
  "key14": "4gucE3seb452Fz3n2nxYNr8JY3KaYxqBTQN4h9vM9R7RRRgDxZfRNjh5qiJnMtUGJ4Fry9mdENNvE6QyvnK8ygz6",
  "key15": "63jKbtDLx8xJA3gvm6yN2a7ftYmuZ9skZZoFgnR1tsTRkQVTEE5GzWYuxdt9VjxURmkqvs32k8AxqtBLPsm6Nftr",
  "key16": "3TvWDRRmA6bRUFTLDvqvz7Wik2eNm51JVT2d1jkmAZM2nd2Arxv4K2RyQABQ3EMBryLa6m6GDJydWuSUCMUX2wWV",
  "key17": "3ux219ZVyVHTJxrKjC8i7QksyKzbxRqosbAzH3jmajgueqfsUz8phEtg96fzobfQXWyp2CgNyqtD1oPhLMdh1DRD",
  "key18": "Qz6nn28YdpxRGZxJ8ACL1nws5gqb1XuWU6cWpnaLrpk5chrrdXPEChGrT8HkREKDRrMj84YckKj5GgYvv6XbxuE",
  "key19": "41MW826GY6LtQbk2vcLfWaEx5HCByyxg8vZMVSZwUxg9vhjX4Gn7xrj52j89BfUwcZnLPUXFa39QgzU1MwHYigcZ",
  "key20": "5nLMUHQh27cibNhnW7Gx3qhrJEPVjMKYvhvhaaBxdb4dJi4Vd3JVwEayTSYCdDSM9hBCTk1pQPHpH4oS5TyUMMb9",
  "key21": "3M4Ug3FwN3mJV3Ry19CP4czpKSDEcZChGUd2JWp2RUWGrNuG5Tj7jCaBWg5wqpZnXC2FCWze2RJQc6bQPfoq4Sd8",
  "key22": "3NTrqNB8i2vYpBT6Yq3p8ASppXixMufAhQZK38UScaYgbt8jR1NEpfrH3TnTpsKL8SJyaBKodDXPpdNQ5r9jVuE7",
  "key23": "28qvvqk1VymYiE4KThxib4e56coouZMoJbqxEauqPWYuQVci8T2FsgwW6Xap2bnMbM82VuWeseYyR5serCTNfRcg",
  "key24": "3MvwNstDMps48xwiogoVgeVSnNbnXHphYkP2tHsKgYqBVCV9FGzjojJ2BNY2agAUpfzpzc12xa4gSpCNdPwMKEn9",
  "key25": "3ewX45EM2irbxLjCDppApgHQAXmqQS7hnYHaS5ztUgi1zfaQxHtMuPdLgL1Jo1mFF4xd3zCFfngnAi592nAzikz",
  "key26": "5X7FMSzsWjqHdzkot78igiZoUHbcXUXNBzVM9Sttz2eAvNPh7ZzNq2Hps1ZJVnK8PdPsA4cvHE6QJ8RDAU5bEmMC",
  "key27": "4cUt282HHUvQkdsMUHwPaoXx7gxggStWVfYH8fR6PD1QUsCtLLmFATPW4jq8jS15HBwdFACw4BHEe2vtEKANqyuv",
  "key28": "6nSdeuCAQU9aeJDE4BVinNt5vQBqncegPQfCtHhm4vrHhuEqiv9ZvivVhpN8eFY5J7BKosem3iisKoA3weuPzEs",
  "key29": "5SMbnmHkhNc6yxuURGeN9ydmXjHDHsBv2xXoyMGmgwduTyUUHbiXuaZH1LfMC4bjqJGZW1XgwZTzBRi9RduvcBKE",
  "key30": "4kADvDPYrmNDZv1bnri4edQP51qLGeBCftmUjUqPsrxZD6E321s7xwLCy6PumgFMxcJdmcXnWN9Bm8PgQGU7hMj6",
  "key31": "2v2VwBvSj4fPsUAJ5bGMQifEERqBd9k1PUwiQ5KhFJLe6DjiH8tKgLg8sFFcAog9PrK35voFEjZ9DFBZfUGJuSx7",
  "key32": "3LsyP8gAEkcad8p6fGVXbComyafrT852Uvb9hQXZYHXwXiW4feaTE1FtzYQLPqdEdkqtuUrGAVPVfEBhwebvPj1n"
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
