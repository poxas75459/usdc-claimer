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
    "2uZtmCiwKFHAgYXPzK9kN3C3iNYgmPXb24m9B3Dwh9PMTDTof6zNSai4JVXZzamcXZ3mu4Lq8KPABEzJBurF3mVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MfSgpRoS1JhaYFjFQMBEZohw9eTsf69unSWkWRu1SkGRa2oqo1Ac3vWnmLnkQkfCwAZc4bmPhV4HLKLUHFEdLbK",
  "key1": "4o7cPScVRgWoccBi112paQuxbgCqAwFwuQjxtkVxLz3zs8StGaQPEdG14bUymPtaXXAeeY39FiBs2tkTtNGChHnJ",
  "key2": "2vVAEQ8GoAin55hR5YnHFo8bwuyMKuWXLoAEo5B6uwqijGHjsfDxiXnLba4xDaYbNoQq5dfSoHCskkyueYBBpPEp",
  "key3": "2oMKaaPM9FNHCiyxz4i9qh741QqJ5Q6TrqHQRPkvw2dJENVvyCHjKTEoMNGgKB12G2HD6swyfGKPCgHdjHAryHWs",
  "key4": "4QJNo2Li4qE3Fd1aXnZNuKbvHA9n1cFL8Ne9PheYSDjg1sw2wJSj62E2SwnfvQeYScWcLhCz1vMwadJNBeTnCgGt",
  "key5": "jWgdVkXNz3J2rc9uXvLL9pWmASK5j2sfArpYCMxgx1oKQKc42D76Rw3CSeqzJMW7WPqssFUsyoAEWspf4vYsvoq",
  "key6": "5UJsjBYCw7SXx8MANhcjM89tBxPzQGvzUCgBwuabKCycwUSBFhBfhhzZbHcFvfUTJUMNvKRE6ctqEPF6DR7LzcNq",
  "key7": "39Ks6e965gXN2vCuX2s499S4i1XC4EheXuhk4WyK7S7eBg8PefjfaaSzpa5ofAFEX7je1HSazSXG6CM2vpghPgjV",
  "key8": "3im36LMi6kLeJyBMgcw5cSrADkgPLFxeH1Ks8T9GaY4ToobLZJBEZZrBQAo7dDm38fbBkNZDm8WDcq5m37gGp8Ry",
  "key9": "5kVsjoYbxnPeTdTJZcD45NXXsZozRih4YfPgP14qy19GC5vy9XNqiUnv4Kk46PqNJvzAY7EHBqR89oJ34PD97oAu",
  "key10": "8bcb4BrV6Fx8Lm3EpGHRKN1MjBGm1hjZrwYbEZBTK2GJ8xscNvS9Ux1h2ZpqgjkutCQxiNTNsWQV6kuBCoaQaWn",
  "key11": "4WmZQLURjxaS4TUKLQYKpwnGue3pWanALPnwNRsWpzAwBCUvTr25bAPgDNMqBZ9cbyXRfCK2RXD9BVVvzuRQYm7w",
  "key12": "3Eq8vLNTfHuaUVYAEBGB5S5gbvMzzhn673d45fT4fXdtKShqRaZyhbSCCTzHpioFBrHVgATi4WQyE19CLrduZhyB",
  "key13": "5QV8sFgtC27N9jxnKhyT8uNtpn5utDV8y1uok9oX9PaYb1ijGH1j594Tb6Z1UFjy4vUAG2f8bG2QNk1PiJaTS8A4",
  "key14": "Drgs7Sh5eHY3QttHxHNR8g36AVEWi4vwows6NpLhznFx69ZzA93udnUBRDqJmCShKVA9JdbkJzvyt2ZR9oiPNUM",
  "key15": "5j9FYkYq3m38PXUw6BCC2Fk8k7VWMnVMNGjscwzD6kSZSx1ApjaZ2atpwyNgMX6vGHybDyjFHSXn1dPkDZ7tL2Hq",
  "key16": "4mZDiGeADnZZfYDg54feeVw6ti8YpBkaagcFmkoc89DFqLpVMJtV74Vuhf2bUoBMT3xTTwqL5VShpxKSv1JD6obn",
  "key17": "w7eahvAdE4CFu4wDwLxDJ5TEgVBvnrG3p1TaSip2pHH9zUxffrgpdbv6bCQJvZboGHvDcgrRcri2K8Lqq1s4UtD",
  "key18": "MacK7soZw2Bs7hxPpzv3aSKt6Q1CWqrQ5B8SUjk7rrMEu8aaQqgBZHrY4LnEC6teA4GMMaQy5aCMUEKC2EUozJn",
  "key19": "7U8JRVoiMVy7SWCJmrAXCRE8j7g5taFMH2tDCYZRv4cLFm8geLLxqQnspcV477FEUgYv5ELx6BZRVEhb53kE4TP",
  "key20": "29KuZK1BpVVVsaog4cVummKtfiLUCx2UD1RJL6Zaq4oui6jngKJjocDDSYJDMVv6ckhgbbRjqrGiFGCQoNoqy8o5",
  "key21": "3dA1wXBS6rwhoVrLEtgehPujWHJFFA1Reuru9TnmxQWTc8Q6eUABhddbevuJo6Rf6ndcYKokaV9KQa3z2YCJ95Sf",
  "key22": "2wJ8rAPxsxLYBcJvPRwdawcUqRiVPvjM8mioT55HD2k6RoAoURV19iLTpMNNS97VMzD4FDuRzNvqGaGz7qMoJTDt",
  "key23": "3P7xyws1ec6CfHb1V2FWJu3RoPGLdKExA5wEbYkTpsLehmVBdDJ2ytALSkXXqF7QeJnMR9WfEF3jeLFASmYhJCzD",
  "key24": "5us4uANCQb9c6wy7xCgyUi9AJ39xyRunMqTb6FGRPWiq7CZafbLhtffDZrUZyMJ1ASPBVaahkJZBzCwfDWCm1tFf",
  "key25": "2LwZ5bBGMzj5jZx3XDKgq8RnCtjaJdr1gpA4hNB7QDyq2eTa6mUTKZxjq44aHV3vkaVSvxkNvngRBPGq5H39VYL6",
  "key26": "Kg2LwgWkAqEkpuQPyAEaLKYbqtwpye47grhDE7NqyRmTZtbdtvJDAaRMUZrHtTLirRQAKf9FVLKCiC8LWpJxojQ",
  "key27": "5qyBEg7nMR82gEjqYqotBJP8EPL8FpK6DwTWy61fHrATwNzH38oC4V1C1kiCQaykcMsdP7a7Hn5JogXs6nk7Prc5",
  "key28": "5m2cskH4NkYBgCPV3DbYL4Eg6PyRX5KfWwAfhvTkaxnifoAYtwVExEmudk84e4eLiUaFuTue7h1bAWenrUds5wGv",
  "key29": "2uDi3LRatJJcoHkG4g3Wdtbd3FP227DTMxTZSDp4pVqbwjJmMkLeLBJv2kSUni3co59ZVaBcnS67s9PHvyYYaWZ3",
  "key30": "ip6nJzPxPWpgiQHK8svU5NZy54SWQAqrQXBgEuZ64USeRttewA5kwVBEQabnMGzGt5vsYsGHNwhBmUZDRVFYXP5",
  "key31": "2DPriGhJGUiJhYnBVQTsXGEoTLcubnkHFdRMzzxCNKVAjC3eGMy2Yw9CbccbL9pJ5op5jr2GoYtYQ1brHPAfUVbd",
  "key32": "3WLHErd1wZdwaz79J1ijteFvcXvbXnJAZQdhw4Si3vMwc4aWYVe19Nz7Agt1egdkbixBMLxMcvUJCRGoKpjL5q9o",
  "key33": "53KuSjh3rGQY9bakrSchDgGXQDbcewVRo48hBFoGonUdca5dBxuuGKUX8mQFJxLsJLnh83Ps1y4TF1yFa5TVzmiQ",
  "key34": "sNuENbY28fH6DdbCvz6HmJ6sWhiBzLQcSb5EiXpCTGtwrHevCu4MFrSMQLCJYoTR5NoQFUKHmaE1CCuNF6sx3g1",
  "key35": "5gDLv5rXrCPeVeiuUeQZQnHb8e6Ytjt8KW7d48nbEBgt3KTRCZ9cqZcpbPm7dDVEfRmkyah6oVSfegahsyEJ3nCL",
  "key36": "3SF7oSiRs7eqkBE5o7cFBczn38WGcwzkisx8LLSAWmFrCP2mBU48D2ubDVWgAQTFufq86QuNkrW7Mqhb1B7GZbfv",
  "key37": "5cftxJxrxry76A7m1HW3maC1qiHtfbkmmiKYpBTqqejr9rGBAzeYT9KQ4yp2e1J44o9tMQ6DsUpehxPQNPecPot7",
  "key38": "29UbdytDWSf4QSbPc7fQ41rNWbtPcZp2bAraqeiQubzEgVBJXrYbHXa1u39GUwobpGBupBcsPKcFJS3UpALZf9Qb",
  "key39": "3wmD1yGQdqGSTH6iLxAanua6fbkWVkoEHfkwW441gVYwXBAyFqzm2AhDYZkaNb2T47CJMjxuNNCVQmKBiexYAhXj",
  "key40": "4QvpLTezySq6PWWJ6ZBmBcJPU1X2nV7BQgGNB5jwRin5zyd5e5rDHzTaedEpLzkPGhiCC3h2dAbnFM4U2juuTNMt",
  "key41": "67bFWHfh2LnBk8ssoSJwfTFsxahf3nqMdt8yHtfjSDiWodpaYW6s9Zo5Rwc34eNoAjMFshvcvqak1yMUcUJBvd6V",
  "key42": "56nzj3mMaowaQ6osK6jAjG9jLDgzjvY8HEPWdhNiaKubdXRDzd4ohHPNLFL1Urr6TL6WjCTijXMr4UF7vXEC3rTp",
  "key43": "29DyyRCyAmkfDAfzCxtdbZnLcnZsd1eZdaFM2HPhvx3kmofboDf6a7fn5WqPyuapqGxNSvYpRc696skQCcWxd6Tf"
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
