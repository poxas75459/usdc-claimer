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
    "62RTuJQUP82eKTxLV6LjgkGmAjCVqbiYmwtWXw6nkqGzsVSADvakzjYwAozcBR4eFDNQFsNbJsuhdj7czsjwgF8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTqTyNn4EJGtfJXc2wzdu4DWrN9kHj7twUezQjPtTCNJDTe8ZQL2ECsAuNpEJQc6e5nm9WsiboW2gcQkf2Hnb25",
  "key1": "5wmP9PAohKqnJF4JRe8tYWQBWHmUYxjmpnRnmnhrFoZSVdD7XY5BV61PeF5eviTBqFNmVkdqmJX1hJKo69EJhvDL",
  "key2": "3jR3coK7dK8kMAqh86Aa14yGKv5C8rnWePcNZvSAQQUKqq7szYzFhdKCt8Q41WvJoSNexG1MgiTcnXp3p7yZuYPr",
  "key3": "126fEW6oHieQKX6NUdKYRsTvXfip8hPcvA5c7RAaT3H1ccPBWtyfpWs32SiKzdJ2hXAjFDhPzvwuT9EzGkfqCogJ",
  "key4": "Bx1o3V1mRM6eqz7U9BCTKzoQ44bu4LynSAXvKv3PnSfTNTK8DG5AfMmVcMSCgoDpeoHdsEXUNuZmvckZTtMZCQe",
  "key5": "J58iiATq52WwDgW7ooLTuk38dqnd7Do5389QSBzGuH6hJuNhmNXJo3f34EWsrKULHp3YBbySZ6cgUiE6AzzaNpV",
  "key6": "4odRXfkz3mKK4kTniPqDsi4K8E34ZqPNaufzETAcJ4x4ArHZFRaZnJh25Ucb5c2XdhXan2hMMygwYGp3Gxtx4xeR",
  "key7": "2JTKnfWydTHsGd4ijyAceCPaLMvSkgbtCfZveYS6THryeHRcnuWSpQPWB6WeGYMEKJL552rhShsawXzQacKtmmP9",
  "key8": "2LHd4uyMSUBpTsAjYvt1M4ubZ8yptvR5a5Psbk1WaEWUH5jFFBniv6rF9reCTjmAb6Fv7C2TbM8zAnryZz8Wsi3N",
  "key9": "3JG8y5zT7FtddDUKkHosJxQxg67Dvwg1VMXW9guJVRRu4j8C6WAX1rL3fRmxsQe4cWFNYrWUTUVHRkyGq7RbteU4",
  "key10": "3vU7Tx8Pn3KYZrhJqfR1VKNLqaasRut4v842LqsddwdrhjRqs6qX68xTdy1Fw4EVx2dHqKzQhXxEwXb99tXX8HjE",
  "key11": "SWpPNB54iUQZfjrVdCoTNULUrBBBZqiF3vJaWU5ZHJ8KWLtsGea8sZM8hBUSTF3swxJDMhPaEMDsXVYdMu4ihaa",
  "key12": "29uGVTFmYKvqpiyEBrnmdXNz5GnRc4QHk3tgQvtLeC58jdAyJCLzgjLaSuYowv7afPVJ9ShV2gGSCYw6SQmFp6tt",
  "key13": "3yYKwqnPsFgLnWrujNQpgUaJVF4wefvVBHrqzyWCbV34g116wwd6uxDddD4dPSij9VTCreQPzkHDq66jUAjeijft",
  "key14": "4h4FGGhiHT5wYmjDiMP1ZANzW6gaEYRwzXcgxk6waeitUwnN59N4LofyFuvr9mr1JZEPgkv9UED86AVrRrf3dBiR",
  "key15": "3xSL2oLzYbyJdKTfmkLLXht4HjXu6LK48TVJPBSEpTaAxgpUskmSvwiZQZocP5Gf6Muhjq3H9217kYFUCb9beFJj",
  "key16": "4v6stPqvCyYVbhp9W7VkNMEpUnsgoG5SWtKzpC23Qz1EVPjwYEWQhmxoAnMKtuHXoCDfSAP3uum7P3mtVgVLb8bX",
  "key17": "3snFw27VNrWSEUmgRAphMZk4qgtHyk8RtyYCwLRz1geoU9ufPmdTknZ5fxvD43B9GRakJd2w9gMbkdAANKMuxCeN",
  "key18": "62L9kGE1sMvv7WoT4FtQnj5j9ngLe5vQvDE4rQ2hc8JrFtMgc2Cs9tA9WqVQwkBPWQ4xDrRzE68tXpm1gQRqpATD",
  "key19": "31B7eVYHtzNdH7AHcXAAizbW9mn2szyoAfWhi5mZGfyqzbRm7fGdThKSBZetrY67Eh6oaENuDhim1LzedPdD83Tf",
  "key20": "5MnXr8U2myvdkYeiyzZojRBxSAocVKbceg6fnpnrGzTA5hNbQfqnewM4KWKgijEhby1xMCTAsTv9AdQdQq92q2u5",
  "key21": "yE2Ygs4dgPgikFFXGBZ8Cb1F3bmeyzK34qNXdCppU7ffGBTioCPADF16SGxR61Em4LtsaGjJA8nhxbYad8jAHqY",
  "key22": "4PNHZLj3fsThGU9Ys6CEJu9CovzfKSdAKz1tJUv7SFA6PyDhgnszcK7wiJjh7WbWQgWV8avFXgYUDW3WCakjv2jn",
  "key23": "3zBaRei1K9gvMh7JJC9rt13nkiVKNdUmCzesLvs2escyHkZypDqbApwezYAGq9Jog3is99aTdxytGMaH2j4ybLfk",
  "key24": "4gvgkBYxvbTq6ejrWbEejNx4yxz7u4kA2nQpCXFgL8g5DsPQjCdF33mWhy9XkjUwWebtWdw1DfovRSMVmEGyeVFe",
  "key25": "TD1t66uQMx8DkmMAMcEZVrzgQiAPCWYSebJmUrQmf4wFXPwhLFQNUnT3HS71keAqCPY2MN3LUuJFMbXSYebriia",
  "key26": "3Y2XjcWWjSkFoAwADMredgouvuVaH92bUoaV2RoMcFyTHQpbY27nANevh3wrP2EeG7BqXJNDJaa7891G66YhVMTM",
  "key27": "2JSdTdgpg9H2iypSmJiPrsDi9jaQUWxvMZskpcfe6WBWMriVtmSqFxAA7bnRSu45bDG8qnYnQrzJSHi4QDcZEwX2",
  "key28": "4Tpyfg3KC9xS1aZhxkusgyTcR3Cq2x9zaicZ6DJnJr43pJQjyGrdCcCuxS79kmKHFZ49BjJw4Fi81nvsrRyNNeNZ",
  "key29": "33cRMsbcpSP7Vv3DWueS2FLMFYhAL8oEBNmSJ6Sj7YixbnH14fUCpFE8bNVn9u5yaKt6ZWGto9AniChXLy4np6AB",
  "key30": "RYvHTfCHM2seV9Frmt2h73XQ1qHV1isZgzuoFNTgmHPWZGnjSkskSCfj7ip3rwd33UwS4zpCWAFDc87E5U2sycE",
  "key31": "365iR18NPvjyaj9AVwEaFKbvRfErKuZXTj1ezbMfxwSvAw5ttFJd6xhNtFjQjLVCRFLW4GZtDxFUL8vCHTn4cBx9",
  "key32": "5kSDUCR8EMpvS3nNiQP8iLMSddCXWuoAgaHWC7dekWAyJMi8Fz22ZttqcdcLdneCBRuYG6Ysiw1EJwByPNgg6Vkz"
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
