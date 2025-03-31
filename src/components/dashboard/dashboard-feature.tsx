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
    "55VTzJpHukPQmXMH9SPxUXWjpUGho34sv1wZbAsB1Jq4b8K4DvHwaVpFSZNFdJnawSaJKxYVNMxt9HaLsPGHc7Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fujgmC5tPcyXDnes9Vm5ahmd9CyupNNLCr5skTUoxFyi4wX8mSMjuNcDtNQWUjfs87R4UsyzKHJmVwqaFrDTVR1",
  "key1": "MwkcV4ZqeovrKoebhF7zpgtaYxvFoMacK5ooLUov5NJdjXSgTes1NEKLFyRvMqXmgXnUpxgRxJvBEmCSv1RxeBy",
  "key2": "2eZPpJ7Ri8EQYL7HKsk4uknNwFNgc7FBbxtmeCPx9wfXcq4rbsQp96dQGsySzNiUXQ6tzcgnpLbrXCkteMXeKYxQ",
  "key3": "3LhzXbG17vge5AoufRnEXeEUBJfNWKqBopAArmJjKqtqjns2mJLpXi6tS9L4u9LbUwMShFtVM7LuhjrYLFQCWVoT",
  "key4": "FEEmt8PEpjvjoSNfdyn5yd9pYXMw6oJymcsZJG2TEJ5xRZ7JZ6zywFvy8Loi1b4cjmTDHe1fFEMuQj296qN2pE4",
  "key5": "3meYi6RZBXZaivZvt3FiN89vQfckbgHGcoLw9bkCAY54PaND1m768CgXvcfqhYzzPYXtXxgi8j7qgAiz8e7XR2pE",
  "key6": "5PDQWor2oU7qNndyhWNujM5ivtxHGL6mtiVgrci14x3cEyg56nsa1DDh3tV3MraWnF5AaXFL7PsiN2fuTjvrMqPV",
  "key7": "4CDUiKYw5VRwQhzMC77gmAv8TRmcZ7S7bLK3prENsrUYSWYdizy3VgfeePs36LCPxczSFvErTwLzaCtTiKaieWCx",
  "key8": "27movAVwnznrTWR8MpresBjdW1bWaJddLTvJFQEgNaXgReJbGWbzKMujevSGQwN4WzgoGqeBMQZTUJhY7C4rDsND",
  "key9": "3EToY9GRPFETmLvqTZaMj7MnR7zw5QsZAPKK6r5w78yaNBvz3UoC2xbdEwo9vA888oQm2gSZ7RKDSUm6WUXWqFHA",
  "key10": "2os2i8GXakEEwEBiS65epb5FKXcnFn1juTizHwPzitEeQH7BCjYFCYTGWa1BAVeiZqpvPyGyaAyyatrSREpKJ2p3",
  "key11": "2yiHuvYRPDHK8F7TS8EWKLf3Qax4jwKqaeNw2Q2oJgAiXkJvPVUzxYDEyfaGLxDtXhLKjJ9ffZS4bupfqLDBiVK8",
  "key12": "2CfNWt2waprKtkK3SjkTCUhh3k6REBv9g1g17exuEk7EXx8ged5E2DSkbAqAwVrmYMNHdW9qZRjHp78kuhJ6b57B",
  "key13": "33rE8XP9R1kDG3ydEk4mXbVLcRA4cGhmPweoJpV3UneGxRD3kB4ygx12im5gZRKPiKxJhjrbrXFHLafNLmUfXxtx",
  "key14": "3AUUwJtZDZDhbnqfJH5fL65kMoNjoQGnvfnGhD4ACzJfxQtXt6gnnq4NP3C3JYSGNHBXqkniwbLuXBTmVxrubVms",
  "key15": "39QCDQXBApHUVSdpLZ6MVuuJnyFenLhMhw3dZ8bS8ZV3EXjWGVbTyTngLRfeMjeZ2Lm5afwwqaPZCM9Xwue6XHpM",
  "key16": "rX8Kpk3iWVPnHHgkj95RRktb8WW8uDkASSLjZNJAz1ThGNohgDDBocf4rQs4jUjTdDKECcgTZLfArPMxHDLPc48",
  "key17": "3BovoUpPxMB6aqPY8btNgJmNv8pboJYTfowRuPh13hTtQ9sh7sgha2ihbAad6fXC5U3Z56BSMnfrNSP7D9vA7Rh",
  "key18": "2wcvQJJVoF2Sd8m1U2mVW2cJYgmbnXwTBJt1uKzZnjfJGZzKKcPBtdDqsYtPU7N7gmZgPoXZmq6RTcFnUa2CV32j",
  "key19": "4UFVrxBWRmZwqhSwAeMzGZybCQXp6pSFkth9YfhVcJoRAJJspfC1G2GVXyUiDY1JC81CY3WKUs8CW9gmEtwePmju",
  "key20": "5UViExtSEvggt5pZRpYVuZdLiFokuHWNyE1GXUERzFdho53JpkH6em9PT2bjqJGvn36cfSN6FqmwDwjuy2PMLhBz",
  "key21": "3Ab5bkjV3cqMZ5DmjRZDeZXhMpEF8tYMxs2WsVhqFjaXmRkspLjR5v9bnZwHomRaRcMEKNUE4HkeveQrQXryTYzG",
  "key22": "3EzmkbyHW9aueFWajb3YGJWVaHMZAXvqM2XWDMtszyhALooCs5AaNLjXjKvNZGRvbaD6XRaGjsUdfpREsf6iZex",
  "key23": "aCGnRhcpRYVPS3yHmWKVG8svSqcq5N8WpSrwmQAmBAAx3nMoboN4731nU4CqtEGUqR4MWDB5Pdspf8PY1ffg6wv",
  "key24": "DMPz1hA6YnJx3Euza9VQB9GT6sZnWsYMtdufieS5geudgEkby6Fp5t9jMNn7k6eaisNk5xAVkbp6utBNdPxjrUL",
  "key25": "5yGFXAWsfL6sJUomqU5Q7h2YQaF82NvF4KgM9BcnUaxQs3JcC9r68UTs8hEfBCVveWgsAG8zCCPGMCfXmgCMfmGT",
  "key26": "5yugUaTZVPJH8AQ7XfbuDZuSFyED4djgjoX8XaGHaKeisLMVqN37i8KbFxwoCHB9nnd5KEjaEfDk2P6DmNCzWHvP",
  "key27": "gpMchxcC7XZnmc47phM76Zw6HviXB9zKcrq4nHDRXgLXVmkAeXCzBiA62CohAywwonPAHJzwM76rsBLttxeXyMK",
  "key28": "568ZhjaeuFZfXRcTecdtdgnVywvXFTUzfC1vfUeZavp5cp1gRgnUQEqpXAL9JYM3spRcZKuhYYDtKTFAcTUVSesn",
  "key29": "3CC8tNfBt8r135ERoDY51ATy2ucZVZbn8b1TjJzh8K9CyB37P8oBX6htZLHLvUKkpGuCLSMcenjAuJJU2KJoAZ6q",
  "key30": "59j5mYQDsszmR4Akthe8HRnX9zJNwqrS4772jWu5txpLzu587xWTZdvuHtXppE5NqTMkpHZQYe3unCaLrqmrSbh7",
  "key31": "5qrtumbYQv2BEb3ngAMjVQHMgWBh2kaQfMKJ3vydfDa7cvxXLPV8CrxVtvUi4h5YZpB6HVk1TVxYCNYJn7ZvtUGZ",
  "key32": "2uEJ2tukoCwQnmtagfNE9bViSpAusGZK5Kuu9BoP2y3Mn2pssWEjpKmbTcsx1YaW5V1dyJajTSS7fZv7AkBC8JEe",
  "key33": "4XceWXXMnbRuAaHv7ifRZkmQkFbNyQxU7Hd2JbEuvBTJdg4zo4sEvbCRkHnkGKeju3GNpWF48Xhi6qSxH9EsN4Jb",
  "key34": "57Zg1CVdAeEdNUTS9Xcpqt7NiZHHixcGVsXbJCo5JBGbY7GicwDFHhYfxUc5Jp983VHUn14QneS5dJeXVHzpPHi9",
  "key35": "5Gpi4YvaMuguZW25D6hfAyVbxCjD7MJ2K1jUziG2B3fqGxohg2kFaPs2dbkCk2GEC8iDnydTgbdZwPhxieZp2MVc",
  "key36": "4jADq3KDRXtugWkVM8vHeaVmsKMzMF3BYhLT5bufVQwZaDNSaJsh4puyaaiB6r2iY8vtVH9EtgzyiweinWqbaYLo",
  "key37": "5tmMsNSwUP6XRsGT29LfizfJz54M8Cfi9TQgYgP9y7JXPo33Z9npLPWJxjzeH9j9DixgsTW6godczt5CCGMxtydb",
  "key38": "5gCEH11LdDkFJ9eD7H8DPcKevwCdgzCctFCpyQ3j3QnNb1UD81NLafhK6DGpgsNBSHNmRWbU7SPuM8nNLVHWKFbv",
  "key39": "1emaBrQuQNWWpy2UnBJXXkNnMSXUyGxv1AmUb3ZBuXT4evvEZE4PtP4Q8gZHwTmdnmwbh4nKeSeM6bU7bejFurq",
  "key40": "5Z5mRuZojSAi9VUpoeQwRJS2iVPhDNjnTLXDzppf7jv7nbSQWB1sFLsEhTTJWhkHsn4tnCHuukdFHJRLyRMBWNBJ",
  "key41": "CMaFxcRmTcUUfxqwhu5xVLSVHpr75cUtcftBqzEphi4g2quWDXVWBn7J77qfXXRa31pMsNixPx5pphKTT9WgeMw",
  "key42": "2R6Y1YBm8hzRsSXmjvLmqjQb7dpZvcAiagGS5MUyZ2VnvyfE3uxmg7A4YmwhwKfPGXgpvCAZTVvZCXS9yntNidU8",
  "key43": "27Rpvzq1MJ25uThp5b1mFGfHvuGHoLiUJFKMVtiFKszSU2kUbGkDMykMd69xXabofbf7rHTH6GaPzuE1m6K71QUR",
  "key44": "4LwNv2CgHTXDdSrwQyYrA6sMXW4cmW5Lzd2q4S6ekaV6eQEigfChAioEVJGZmqQ1NDY5yAYLX5ZfyhrpUVCdTcki",
  "key45": "67CCPNngwrYSrj63Amj3FBgV6oxTak7e81rAuZ3bupuh99FKk1wXUKNsX3exy5n92EqfUMgWKoqkDTnDMgvGXcn5",
  "key46": "4rQanXC3sfampru1hmRtPGsHQnFSSmNuPsAG7fqNWAMWCc8kEhpdTML5gkgH8TnDwdF6DaiFwYMdkrTiHowkb6q9",
  "key47": "4nQCZAEc1yeJi4MkVT7F9NgrrDmXNL3TJBrvPg2JuQnHRn4gsf2oNwtQkcbW3J8kAz1kyJFJ8Ya4nNFMzs2ZYS55"
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
