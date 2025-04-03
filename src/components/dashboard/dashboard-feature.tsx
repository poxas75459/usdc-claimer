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
    "3x9Ej4JRQdqG7epEerUoTERTRL67vHFEKxmd5PJPVoX7cziT5UbjDo8uz4b22iiqRNm8X7vVA6e1zqie35zrPUTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57e5BiT6U1tbqmPxQA3usWoaMr3vpAPRfEhhVDDLzNdGQBkc5uJC81w9MrTBfNCS26wwdML1WLdEd5JaB7tYgUNp",
  "key1": "44V66qDQXHejp5QY7Y8yXJM8LN6Y7nsuNTuXLzZrSutNLGectCuaoEWx2NY5gkYYjXEGXPWan3MVYamknRn3AuS4",
  "key2": "5F4F3EMzfrevDdRS8HGAViPk3rTBPBbiu4ZvZ56FJ6EKseX5gLxB2moeL6KACxMwcZxEz87f4DcNuPtgrWhJDyiX",
  "key3": "3knWUhX84iC86qHFRHAMY2uomtY39tYDwo44RBgoCa5ai1mBnfukYaZ6TeMGvJigHAoZvVBat2h9LuYx6gq2cM9b",
  "key4": "3dXmKPet1zSH46Jft5UKiK913uZ9aqvr3ihpfurAKJcWeeTPCQ1Xh1KTVLfcKDzW2eJkDqNPcgJPbuDCb2dYgxPk",
  "key5": "5VMDGXkSJWUihdHDasYx3zjfoVUsUTkzkNLBKuVdrRkamqTFVNw8rhvako27x7QBc3KyFF7ihy35KBJt6XxRpuSh",
  "key6": "2gUhRZ271QznagK1oT8gBk1jEjsfnrk9PPYiAo3WtDJgv2UheZVnLmexP1S8dzU7dCfaXUm5hfCxHw2vVc1d4beG",
  "key7": "vAUJip5dTgwwxZU7F3Js7xveTGH2NyBqg5KjJWWwR97KDyAHaVv86XA4EBmwU1bgDQ42r4bvFAWwbbvrSwwis3e",
  "key8": "2mhCGs82XvAEh5amgd2rNzP2NE6fhQR2Qe6mtcnexkzrmsdXcFwTPxs8Dq1x2WAj3RXnBAexwTya8t6Laodw4PaC",
  "key9": "4jSkqFZ143cNwjNzXYpyLZeTQr9Rpvtw5RQHrCc8WrmyeWp5Y47pWqiZvQaAJQ5FD8uxPAPPiUVBKB2S8TSyV6ZA",
  "key10": "4J6Q4DgazWQc3mw5sK6v4vDWWjURBN5PizU6infWPtnjS8jQV6sy39gaZRd2toouLnubbEYf3HAtTHQ2p6XTnwDX",
  "key11": "67HtEe8nNY3fEBK5sdGMGokrSWTsBENQ9U42Eb3zaijkjFNawLT4T4XDB5bgpEjxHVvgsZZVhZe8BSZcbsghfK1v",
  "key12": "3asQUyCTpu8qyave24SPvrErFnHt9CZ7GqGrsEDd68J7qedwGjeWPa7x9tYuAJWngQbB7FEFywwzgJBPQqFokyRn",
  "key13": "3ijD9QGHka1n5Tzr45U7hSQWbBxhgke7NswSmGc6WEgL9mP68y8bzwpf1upVmRVVU16UeoVPcZsKTLBX3wep2Ubd",
  "key14": "45uuRdiTd6kycHZ8Dvhgo2BKuMG7LAaSDYZfAdBkieR4Rnq4VbrXXJzUoNS4TUZN3rKLYfSEzw9zwsWHdUbNfbTv",
  "key15": "2QphwdLStSrVbQZ7o32ssoUxNRY7htmVacEFKyEMSd7EgneyjSTUxfdRsStnGJaeKF7TbWxShLkPyZBzvSjfHXDT",
  "key16": "3ntqx4rBaRuk8bWTsPB25vk6cpx551cRC2exSkWh3hyWdTRanq3xVWEwZEGBuWnd51uxQcGU5a5HUn7ojzJ9fem2",
  "key17": "5GH1j9NF4NwSX8wbHkGy7KRL3ybZt5nb9TLeAPbQcmxD2PUQ6nNox3Ak7PAWXKhVjrPrZ7gz5mbyBHanRzzViuog",
  "key18": "3t8LjMbNAxfeSypohViGdiRQ63qxYZ5sQ5ziyNWMFAa5FZzGGjBxzWeGLmbQzxN4jdsWq4n4YHNJ9tar3ddDWZ6T",
  "key19": "4PvX6qv15BDBmzEsr1RzkJmEruFFzoRG77JwV9pBFu3U1QffWNEkuKmTrtuLnYrEy7xwPmqBTyAL6Jdosr9H9nST",
  "key20": "64uGxGUrnscQhcu6EegdFdbo1eyHxhgw9DgZWccZR3gZ8FoxS65AAvY5JanJQosDAiEDRt9Q9ctvByVUVb4mqkxG",
  "key21": "D7AFj6Ja3XYyvc2yL8W7RkTFHV2g2iitmyckVmsKvqYcWxRGEvotxxLiQ25HqTxNRVYnfc5gACJ9ngq6PXbQHws",
  "key22": "2eNhR5a562ZNXHWCj2xr6SVeqjLa8Ji2AMhDksRCdrfnMWJaAtBghjjrtdmvMaiGzesJKnVT7vCW3fhcv8ssUmtq",
  "key23": "3fu6FJ9iYaghuGzMq1cdzvU7CZZhxwQRXeLPo17ZSaBff88dqiKKUq9SoPT1qdmPLbPnX2igAuaredr5Ze5gBCmu",
  "key24": "2e8ZpNWndi2dpAtmLtdckuQSKY66RuF1Qq1X7RWx6UEciNPGtXrRfodpU2N2Txmg6L84sETMJwabVVh4sYvHzcw3",
  "key25": "3488FTnxwXGc4nyEmuQkZxY2SPqWHuW4j2Gxj4f17SjPYCtLN6FwMicT76Tm1nG9U4P6FemsHoo2Q8QDaFqZN9Eg",
  "key26": "3iHiN4zg2hQZyNUT2MY2SXqewNV2D6qHNNYXLztognk1LSAJW5KfH749P3qT5tuc5gpYtLfQYodJ1bvwuWU3NYPG",
  "key27": "2QTLUAtRz5W433z23bXGn3ePcRSLV9mXSBEKHmeDgPnxVDBX9bUQe9G9S6u6ysz6QFtvcs3Fyun1aQgrETbm1C2p",
  "key28": "3CkGh6p2qWLBALjuZmHsUohqLqbFKPSLW1Vx8XR6Ga6HJUcKjwec8C4wXCJJuw6euc2MSibgFZyUzuuvrBu8sYeZ",
  "key29": "2bki4fSbSbCXJFQU6HZXvqBdm8swUhf5KvBtv1HLUpcmVmNaTqxiovsh4RQfhiUZj1axhDJ7qTTUkgJMUU5iJQW7",
  "key30": "2USrNPVrNRPmL4dyipg8vD472AwSghcqPNXLam15r6JGzUgzLHYdqhbQ2hcZSZNShTA2SPmg2JRjJWHpZ7fCQQXq",
  "key31": "2PPMQHEvmCkKUQVdihSSDySBic691pVvw5JHroLJst4hitKS512SPxzaLe6mXrsxGVb3Kpt5p4fjn8knShSyMVCf",
  "key32": "NzzU2bFUn6jJNJoXJ5axovu7AgmUK8aouGdbK9ggbHPtXPKpk6nGKErGqeqfvBfgxg3xsSSLpgziQ3888feXmW8",
  "key33": "5C2HFJmu9Wiu1Xxj41VMutWJgTJq4h9oZ5coVTDTUByLQ87AZuH2n98icYUX4ModhaxPGnBP13WhNea9R4DbXjCk",
  "key34": "5kSgtMubf8TwvCeydDgkmgTzC51pwFy6eY9yTU4VE6Rh3FKzo9Y7Z7c7HobKNAGZnMxGSWs1z5RTaPHQ5L6HVY3t",
  "key35": "yAcYFxMZn4qhjGjCyUJjWYjddF5MycCcuhQUMpwbQsEhqDgCyhpTGW7EojiUBFDgHQDZnxGXTvVLQ3CUJGdLrer",
  "key36": "2RDSr7MbY8kvPtX8Kyfp2WiFyH4J35qvGpFQqAYb1xotUPU59XHwdKFauDRprbiTNe3cx6DZztvNLB1bQbkkfa1A",
  "key37": "4TkWHvSXRjkYT1ZzKfdjYpkdNswVQHA1ZkAkJTKesS55acZhxQUkJKmLWRPfvWSWWEqBnnrqi1djTgAHzSq71NJK"
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
