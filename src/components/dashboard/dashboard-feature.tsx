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
    "4qNGhTtK4JBmFgo1cq992S1REmKBN8KskVRZNeLFh4ncvdcKhqvrYCcf2PnuetQoybtTfx2RXFAQ18KYg3dGWo45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2in5k3faSt4NnNF5yjpAqz6wcR49QKcqx5MAWwedPrL2Loy9fDCAPx4YX7Gcecg2WhhYB24rJGpGkC5zLJ2VdXpZ",
  "key1": "2dMRWCh2r3CqiqQ6VNty6i1v9RP7NZFwR3EpyMQEzcqX1dsTKr6HAemaTNLXYjmeovqK2tuLdZsnZJDnZfmDbTML",
  "key2": "5ZCxPKN8391KAFRHAiZszEvhpWUmd8v8KTrkz5JNmgwCAepEfmtLYrPfqbT2kFaVSpfaQ7ovXVhi7Uj2bxtiDdXq",
  "key3": "25oQvLgos4wehQopmD9qpghfRi2npSv3TXnTZXrWP32MiCQBQEVy2FNQaDQJErF92nV651TYH4g6jrkYAzkj8dMR",
  "key4": "4nL6PWtu9XWfyKZ57niDDVSDa8fxT7adULp5FeHkyXdaWeWpJCq1boQmkLo9eL9KWxZpvT9A6NimrRuKahXQjMLt",
  "key5": "N8FxR3DPwrcoLvAc3xVFiFzJpD1DxqgKjvCrEsQPHntMNzXqMafQAYJ6L6s2KoThWooSfa9fybzsy3wL1k4qVkK",
  "key6": "2zmFqGfXgzfKUJyFf5Kypcr4bSfD7M3RxQERZSvRyo64t95TF165MML2dvLvjuMQzZy3bCszMZpQ6c1gmLVtQaKG",
  "key7": "4S44ESFE7GjHoS5HnoJ6KSwDADKZsULjGuouyUxwLyMunV7X7Yh6Aw8fHpJC1FNjkSnukFqBFhZxj7XWbmxPhTti",
  "key8": "UK29WcVzeqQ5NP1m3rwK5muPd9BUkaPDMHr8LnfJMWivkq5mAxgHibdrTmy8EN6x1qUYfAfz3xvaypcK4eGeGhc",
  "key9": "5sPyzRccEBuGMraCXzas58RY9pJ2YyekbvgZUwNANFPDAdG5dbGmN1Lqedwmz7x23hNnKUbHETP6chAZ1KK2rwzk",
  "key10": "PvNp2u2QiPz6p4CZEyzK1X6cuvcVzWUfCxmBwJYAidLVt15Xx7gLWSSPxUTJ6pvDnSCXQSb7JRFECz81wLJygGr",
  "key11": "3yWRHKsU9PEiDQgTnG4czEAYxmzwrGCQ55tJVekARhb79yDwXWzZuS6tFnRj722gc8YqmVeYdun6zgaVFpaxojwH",
  "key12": "5Lm2VR4yHk4kX4HrG5BjDLGaxFWgHdGxQ8kfoFD17KWzqw2Q2UvZTVUy84dnzaFCBN2HwzvBatVpHF61hx4Lc3AK",
  "key13": "gQpo3on3ViX2VvvYoqDqwjLv7FMKKmhiPQGv9XMMuWhRTUonRXH8Wn6wSUvNRxMawdbUbbjVGmkQvYai8jiWBLX",
  "key14": "5FKjjsVjn3Yk3AQR5w5kwCNVQtgZYueJe5rAbtLFXhxaRcNpQ8ijoEvHuWsqUsC7Sz9NXeKLrnsSNYoH7p888YGh",
  "key15": "4DPBFCazBk1RMUibfQ76AteewCgfvpmRQJMHrqfwk5mm9TqbEzT65cjdedJpzbovy6vWqg2ZdXcJ8RrPGS5MQsuS",
  "key16": "4qi3FHPar5t7MoWMMfxxrDavS4nx7ikpTbWAbFzRsXSDRyhrAJnkue54fzmKWAQQGtvA7efSwvRLGb9ScUNEpzbq",
  "key17": "2CAcQDNeT2rfVB2MBwYEy6ncshu1KANBGsPuzUCtFx9p7waxzLQ97FLGjBifWHKu4H44ejPcjMvqjWohgXnxCbKt",
  "key18": "4GquuHBPT2Dozn8tnQZFmTBiiTdoJtVHaBVfemTVWfRKhCJwrbB3kzU3XCsB9G2SrJDMNCakHbFj7pg3xwWd3kBu",
  "key19": "Na8YARpPuWJwuUvG6Jb4huuFJxZWhSEsyruED4Wa3e55icWsLtvqDmoTV5rMZbbhaVXGZhHPhsdUj5WULpZU4tP",
  "key20": "5RDTNychgqHy4vkLRquLQ9pcNSLx8bc4ar1iprSovZ9f1M6DnT9Yf2ieGJZiKypocL9CqJkexjFwu64XzfjriBwY",
  "key21": "3Yjq8DgDA4DcfzMwZ9rxwJz6nce3JvXXtFgxRbt1kDMNWA5XtsmAamQrmrAjtGuTMNTnRNLh1PyJ2dvUEc1kcXbz",
  "key22": "4ceMxPg69rwUp7sB9noazEFjAs8LAN8aqRx9yNPHmcXEz4w6ZjMb4Yp8tVqFf2SPcPpyHmzcERhAkXutAAxBwSLv",
  "key23": "3ZRkqwDQVxZBAHjqy82wy2iSxa5Y34nrB5cPW6aodG8dmRmpaGfoDvGWLHeEmH1kkgH5GvpLBgZz3hmHZeVCEFTA",
  "key24": "DbdnACRHc3AWTW7wmVtSJBdh9hPKUNZoP5CSqrRVjiZpjrGeUhz5jRdyb9gpmussfnHfCJb9wYW4Jt6kpC5XYyw",
  "key25": "aQWgPNsdVCoNo2tpgFUAkEyEtMvnhYDSLFAAvxg1n3XXjTuweSh52GgdeNRJj53sttdxaht2gQheStH6HXBddU9",
  "key26": "dPXVHqYdQbd8WHxTFnhC5KZPTMKB1U31pCA69JDB3xx5MBMX7zHKcJdAuBA7JbB4NNy9DciiMv5WRscCwHA98hK",
  "key27": "4qVePRKc34dEhF2wMqKWZvqvCz9aYo5taFRMVJW13318dZLnpkiXNtnapVj4z4oc87dEGguZ1A6afyv6orSP7WjB",
  "key28": "2WJKzPEixdtgQNDLakSkimPgEZN1VbyBzJiF5MULtqHkENFqrTE8EJb2fNysTcLdjNkRosSGB7vSep8QUURm2PcJ",
  "key29": "28x5E9UonZmUTdRBVqJZD6ZPtso37DgRQq7TQwAP72UjArW4H6yE8nrchUh9vBHoLepqpvwEVYBwckYkzkFAEQW4",
  "key30": "2fTcNA45ZDpQWMY3wdyidd5jSqMPTzR6T1snvPRmufUr6jGW8pxJR3LBuXF35ftJpudbVnS5MQGrZBYRGcN9HYKa",
  "key31": "5tpCWt98QkN31FoKCVEyjwbpPpvsVrdYsmbMDpgEYTeiHCSqUP6pBGnmAjvHjf56CtG3zp686kJPCL81JzaGNNkY",
  "key32": "5QiQ862qhWcTFRrpXWXQqZ1LkVhJ4PLH164Gdo82V2bEC6gHS5oe8FtSuXKVrXZr8UgEDMVN9mSbtQTpVKVcvcHQ",
  "key33": "Ac1twRA2yNkMeX6TJ2V91pbFE6wxTQbo1e8VtTfjrAj3Dhcv2GrN8tmUviSkG3pjK1Bf7mujXhd6uUd2cbcgwGX"
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
