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
    "HKgH2s2q1HcGMsM6b7zPTwr9rUNtweMKVLTtsrFJMvgAKiTsXKSaTVGaFb5gGvZ8sRCLLn5Es3WVUL8hDRwYL52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Nq9u4HsHB74w3izxfg4sxHu6sjzPZPBqPuDm3GubLUvWKqgfhrCggH6XPEekbGnCQ74yPjM1uvLsUndrX45azD",
  "key1": "2zRQk3TbuZuTdjJbZvLzF9uSPFoY6fhnx3Ac5ZSZHrFUmqH5GxxN3skqyvj7Bc7d6t8JM9yudM6AK8z2uEsqkJ5z",
  "key2": "2NFALBdhANZoVznTnjSJFAkCHVTnVYAXYMkrftK3MDoBUpu3MEvHm54U2hgqt4mZHxRdSKaT3C9Xdq9JYA9fSiQh",
  "key3": "ZYdBNsZjj96oACNPAStj1L9Yq9br6FvcGh9soxgqKKsgxCQ3vp5VJWRjGRMikECsAoTNonZDTEJJGjKfTvbZqUF",
  "key4": "zbBH7EfmhQG3nWs5cBxWn68KW3ZR8pbnjy5TrGYuwdYBSKjNjkkH1L2XCx8zAC1V2G9KU8YhtXr7JN4Jw6FSf2S",
  "key5": "Pc6bwjwbob8JtDiuNaRtJeYbDuwA1nSqDMVP8QoJ1ktjcXzEg6M5Ts4Vkz6aTDS2MZjPGtGYSQEUEELBKFF3srQ",
  "key6": "22abLdzerHefdex2RSmdtvccHYepYNZMkeVnaRnemAoQP2KoSXpzH2dUCpWnCL2Pi79sFfhUZTjfDBRjWcsweSGp",
  "key7": "3YQ6Grb8fB14hJSncYJvn4q1iVv2ok9FoRfmgvJoavgmJx2q37FH6y9jueBFVnsZScSEzTyGLt4EnzTkJNXPUUMf",
  "key8": "54f1F4HfbxGCffQ49BiqMYd2cJuPKgLmP8Ya7FKrD1aL8uaDakT67trDQKBKXJ6SwdRkv9hcniWdPVyG8WsTJ8L9",
  "key9": "2L5JYZq629RS1vWkFJozXY7bRyjX6awqms72uVnFbVM825ZQ6Mrurei1D6c3bhy9Z5QcRcejeYvcMS7UJ8aaeJKY",
  "key10": "LjSx5zE6StJXf34iBZb1MMKJ54i2hUMV1n7GwmitEC4Dp6fvj6Qd78hid8RuUQyKfdFic8U46AaLBky9MY7G3LL",
  "key11": "dAMCPMWnyXWUCZN6MKxJmixfetBc1VEPfSDYDjyoCFpYrejxirU1GBXdLbxCZjRDwvj5e2SLmi3vqbeP29tQF9b",
  "key12": "2NwgH7YuJmCAeRzA3czi1sswv6jFhXaLyqSRiSyeSJTRd4MPNucvXFGF7VdxfXRhHRB9BVaksQP3X1Gv6BBtHC5o",
  "key13": "3nZXupuFZjmKeCUT3QxmVJC55MYDqM4L8ZRnWcmDyATGNHbzmJHr5yRggVhrjL3XjB7t53SuUwqtBTZrrj7X82xs",
  "key14": "57UDR1emmBV6epnmu8pLhsTUibH68DdVwTD7V7zk236u4JddL5HbDHCYStytVv3AM3gLmXVorGQWEieCNddTvcdM",
  "key15": "4FruhLurgaCtM2YtrGZxX5imGhMJ3sUFBCmUzRYLMBAx8Qj3UyuS91MCDDU6R8fmoJP54hhqCKbPAKwUQ1et4Lr7",
  "key16": "5d3PgcWSfEczajnX6aQ2qey1cYbWKpSt91vVcxkzC7bvcBJ22WmpQnN2GuXSFtPLed6W6wprqNVHyZeJtH8yJhVh",
  "key17": "4ro7dRfEjHrZ84AN212Fehp2QH6b83J6t35KH3viRnLtXZ9aaBKVCGYbTpktwRcxYdsMBhyLE8CrZBDuCmaFJMr5",
  "key18": "2uGxFe3Ez5R5V5M71AZG7GFNDvf7tCFQCSm5UVtnWX2rwVSSHr5bS1U8Uihkd3CNYdetmTwFhaDWcAvwmEmr7ia5",
  "key19": "3SHvjEVsRkiVFdc7fiGJugiQfZ3jYBtBFf5nyjvAqvq4dMQJq36n5xgfBQB32waggtEEv8zrE44EmmvC9bACCahq",
  "key20": "2YtLyqJqCUqCiutdRFL3Esbcptm2zzfsdjs4jUzwdoXtEWY5kYW1WaXgKiYtZXZ6Ph6ZaMhtNJMtDn1PkKyDhmL1",
  "key21": "3b9EyYwr94MptEFJc5aGQvVgQJKgiugN9TmHNfJGBDctrERixAT1g8CbpvZcs7q9iD8BTjmUgggxErqwAvcTVfhp",
  "key22": "5synWkBt9m7SMJ9tmrV4MyVnH3sYjf5F79tb6E31nmwQz5zsNb59sS2MZ78oAreR8EjiGLgkDdv8ATcP2fwod18p",
  "key23": "2yno6K2raAgfDML1yTuo7BHhs3LiHbvrMF6RLxdhbc2G768Waf321tKAyzTQs6KcEwDYZ3M1WHm7QBJgdbNUjdjn",
  "key24": "2U1apAMDpQ1T3EuZuDgcFzoJFgtqySUVQjNa9vzFU47NoAGEPRRVqbTeNe1Pp2JnX26q7PzCZ2UPkuP4PZ54wLkV",
  "key25": "5GFY6g5wGBnmLjfDbkHiRwL8SnHuxdpd6ZU31CRECkryHnpp4CfhuCazjEvd2LvFeFsA8UHD6s4bcRBeRsWCrTuF",
  "key26": "3Fa5QK7UsPNq7fktvC5Bws585pkYdD92rETQUWo27RXPRsMmMMxuwX9snp4v9hFS2mj1gxKkcAGRw2HmMEWgH5CH",
  "key27": "BFUYLU9JWGAfUQiabWBbgvbDwkR7yR4DLiiaw3B7uFCtWRmFmsJn3xzBobdufq2tZ5Rar6f8d2XgpQevcFmwooc"
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
