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
    "3fZF5i81DHUE2HmsJBwNM5iDtPULqAHosNYYDsAqXoUNRvj3yoSmx847VX9WfxvGBikVbfRM3T6Ut6NqRv5u5Jx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNFaG94XDhVZJYuzTRbJjt56E5U2EnxJCoqyaoKodKUmrXERP2w3qUSXKzeTRnZ29gpPg7cNTnCXZ5aM4g3Zc8W",
  "key1": "29G5mbpDkqotZoqCDuNwLFvBPCnCCxSZX6UoFxPwUvhyPXcTQvBE1Hu2s94HeMoEho5bdGGXRPD1PKbWaz2mm6Wb",
  "key2": "2hCPvFDWriRTc8D4ijnFyfZbkC3frfbBHkSF8ZmdpJN5MLyjJe14eXgnExJhUAg9gH6wvUpQymcFFCBgEDg94zSE",
  "key3": "2UP789XKdjxLevFsHwrJ14JQmHS5t5KzVmVyoChwFQTuxPLYvRgZEKDWeV6ALWDgV7WUWWW1aGC87NPJyyc2jhTN",
  "key4": "3rbtgStcSh26GaHge2YmQjY2Q6G7oczg5u8kHijqx99AVsyqdmopa2Ls7UMgjBA3fhcT1DLa4g4azxHyGruPniyG",
  "key5": "5jkpw8WVAARnuod2WGKweHp8eQQgDxf5kD9szj7MWePqy2Wx4vVfcq3q3V4Kdt5wrQEhrEqBtizi5SnqgEQdHwi6",
  "key6": "4T6LjSjNjc2ftsTsEfKqbZARhJWYrtYtE2JiYEviFXbQt4p4kFbnaFuUMxAvWxAFRAgHcegLgX2GoNZnFmUnkVED",
  "key7": "RWbMHzk6u2YEoLYMdoWYJEAfTYEMf1emHiM2xsk5ZnqtrhoGBmK5QpMnAjdU7WYnHfxRU78s4rjDDmUUXuVeobZ",
  "key8": "2eSUu2ScNfiwJQtRntvoJi4Nv4KpqXEzSH53DNJF44f5PoPwK2D4mVDnJd5jm11XTfkQ2DmoKyXHuaYaJKG1DaxM",
  "key9": "mfKqNB5WRScjmWwTceBzogjL98uMaCsmeotjhn9wXhxTd8Njz6uL35caWC8Px4p4f6tPGPVFk3DfJSkiAac1S7F",
  "key10": "5io6tU2PMb6b5CxnyE48p3w3Q1QSLNPC5NeEiWVmmbQXH1zwXp1shdTQtKP95Yk6S2Fk7pmGnCymPSqz7aJxLkTG",
  "key11": "5ksiqBFtSkUSD9TyyqTNGkxML9cx9c8t8kQAFxKaoCNHfTQL9YeNKPji8D2ZWu3ibzo1NsoYpSBBkqMoedZap7JH",
  "key12": "5i9EMSnejgBSJaBGogE8HARUEoYNnEfopf8btQMhUjL7uYYgKGzHQBtQEaF3MqrVQ3w37xFsRSh5fKE5Ggdx7GQ6",
  "key13": "4aEwQQVHcd95XVZ3xk6gqCgzKBXmGYWdwESWxFityPo7oPK59oVKbTxn4qdZaRK4ycobFfdcdWNfJv63oz7puG7h",
  "key14": "3xcV3drEyey6rwskKLqihumX4qLwAhom4LVsUQqpear94Hq34AXJezY5BgUNpRT9xVWzfv6S7hGBJrWY3P5rKBMB",
  "key15": "5qMMJtQZw6Gbp65A3XwfyaCKns3cnhLXUvW36nTTJswYxrUA9fsvAAuUivuUBcezLvWyWkmSV5hYrP4fa9UvMohn",
  "key16": "gZYbYSpmfFvPjnK3phzfQb2MMyR578s9oVK9aeGi8yZUiKNq5ie1GRRLRwccKJJSdH8d6bPQG8k7DgDpMzk2Bv5",
  "key17": "4dDBYJhtQLBEHneRhkKAQNo4YHc2D92QxPVptknXhwNGvfukpVSM1K4AHCopEeh6GdnNAwjHyrGysN6EqWEXbL2Y",
  "key18": "3cced3QKaHS1hb4p6X2sSxGPhpbBhW8pc4A89yuZFW2kfADGZ5MS3TGg4of9o8hLPQ6KQ4uiccPRANcAN1NAB2cX",
  "key19": "5wEFAfNqcif1faZBiTa8rrndrMHxiZ6LtCAdy5RHdGxkjnFPPS64f6PdqXuMfeGby3Da4GbeSuHtz4927ujWc2AZ",
  "key20": "3sioZa1kEPeHHWD1EY6aAwLGDVUNrizUg3LdXh2NDjPp5awEd8nEqXkiY15vi6q5JiZJf2LKZgFWNjphrroxBXuL",
  "key21": "5rCcT1HivnKGLhG9Mrm936Gmq6h7aN7QDa1ggEEMRdbAp3rXP2TCVG2Byh2SSGeQj7tZTMiPuyfBzCSot8gwjzt3",
  "key22": "c8zaqnx9up2KsMZ7CryHi6vinK74VLbZ6oimRkfLeUEgaYZZrH1pbECX43yaJFaJcAHhBLuNGfsb8nzsrNgNqi1",
  "key23": "2BYHWeo8ndFkN8kCD185nKoQEkm9fQ5phZ29JbYYxhShjk1M1YmWN2riNnPgFP3QK4217CX8Y5UfauHSfkuSnYjG",
  "key24": "2mcvE8PDmNjknEVaoNt3LCzRgzQhNje3utGUFyZYF9SqhFBHFMSHgvGYAKYW5J5HhdNtqHiH9SSz2tkQhXp72SzZ",
  "key25": "5rskaJeb9MsZXnd8Ck7S1j6tX6kgNUiJurytik9r8Pqqni7DJ6Jm8TvXrepTsktnXLsb6hmfVsBbMjySjZ68wo98",
  "key26": "HAaqZmzcvVPuW7rW7KaTWgSxbDb2vGJxm7kCpuWe9VhxCzJgBdR2zR1L9Dk9m7qwBnxWBCf9UpbhxyazhpoAe2K",
  "key27": "5E3yFTKGHDLL28LeMfvEjKCqf59rSxr14Dh8T3NtGWGTBK72RBAPxYZSST4QcUNCqb4pvCFKrEArxj3knBcaMsrs",
  "key28": "3E2HPahGgnx9eTSWpCfZkrzSKCrzThuoLzBDr4rLjcQRFdtkSYXyR1Vhnp2etFN8GPbv8iK3xsLsDwqji4zW1K3r",
  "key29": "4NsvaT9i9bSQHS8Emqwo9CPmXjgUcC6aTuFHTLq55GEzXWNvvzEq5B4wEgcVa3GKbuCYTX54pKLjj1dCfnxfNDjQ",
  "key30": "5B6Ya4tu5yjRB6kbpSDkcbGdvABvU4WkK9Zq43PnXhZ832okSehZPEmZAJri3LUKp2ZLr6nY3Kknq3rZmj97WDWB",
  "key31": "31RzwCUgkdNqRqepHdzGre16Uz4xBNrKpeJ3ZsPyNU7PLgXwkTaE34G4UGW9kPD7R2VqUGrJQbVMjcNUHJRLwskx",
  "key32": "2yTEBbvA6JoYDSAGaJ9aBNjR6jjDpqvM65ZJT8cuV4HriQdRNT2XGi2ARAuoDFgbjPyzehcPxgAfiG9p1pFP6DLU",
  "key33": "4tPkX1QJQAh1QCaq3TMSaUZJEMmVGrx96UNUracUn9uBWx8BvsGgvzUrtSFm8uY4YTzjow4HCYxcUV36N6WDRpFn",
  "key34": "2b3WbHtt2UDECi3LSNrm7Ut5DGX3WEhiURUgcDsDYrtHpj7eDJxHPVLQfeZ7ox57sneiieKC6Kcu9D2FjmsQSzaz",
  "key35": "5uNLKSuAYG7aGFHRCbn8oCL4EpRRk8pBStZZzoa2CADYekrWPCovPymtz7EoVyC9ikcDBLDdMVQJgMWAaEEvuc56",
  "key36": "5ZvXwwJs8mzK2AaU3SGSE9YTPWvCW7J7zm2p2PX3ZSn57jQGrZuuS8f49gKA1CCetqXbBoypi9wyyUpQZmnk9Moo",
  "key37": "5VdH4D3z3durVvzJ4x73Kggy4EzZdS8TVeEZ97PZDhZD1o7ajvcXJ4wiEksFhsd7eQx6eCFnVgxVLuwEmR4M6ejE",
  "key38": "4C36UoRAPALBXh46TJ3A43s8tUZTZWKa37skm1YXMxQYifdFuorje7UW5XkMxnFLf41WaQ5QjnrwBbhHRqnYpqZ6",
  "key39": "5neCzLSjVadxE5bGTTggH8xXoDQqznVxjkgXoCJHDNZhF76XMyL2qRMqSJ5a6TFceNjodqWk8qJbFRj2dzH6prGs",
  "key40": "2QPVDSjEemRfMhPfNrzEVwjJnNvTnqGjGxUEHVxZ4ujMWLasvVhMZeEY2mLpLhFeJwJw6aNb884tsKpHJv5ddQuX",
  "key41": "4trnWj2ZUDJ9XAV1a7iF5vt3ygPzkyp1H8i9wkSVWssob4r9Qd1B1bVbmtsZVWdCZQuHJUhBdkaX2DBH5JGKLssf",
  "key42": "2Phmu3WgSpA5WPdKXX7QYU45FXL9L2FSUjTgt2XhJ5rwBwzJZ2DE47WCFEFDuV5q4JiVhYuqkE9zAcJ9bM6RpErN",
  "key43": "4PFmhvGJBHWxwwbx3G8jqDmgS6ySN4YHzUoVR1SRNYv2JNZL9wy3QcSHsYULqDRb5bPYz29b7nfHwC1hrD3nGnJy",
  "key44": "2dCjKDthAk7QcN1DMwwvDR3J9FyogTVknrzNcJJbLYkfhfT9nNUC9W6Hm2wwk8S3qupsaukCn3cosbQMojJcBLRA",
  "key45": "51ekgboct6i3NvfFiGiWN8Cdg2xbS3NSvgQjCCNMG1HbYPrV2Sze6GKuAZYVHzDAswWQdn9CfEvDswyXrGJRqDop",
  "key46": "JxeeMGBjufSpBg3SoQkjRHNs8tN8YospUKKSPdqUMSsF9kKtN9cfJ85H6waq6VuZXqazM9LVkJ5f3XsnsJsEoqm",
  "key47": "276SBMfWwzRpj48q8oAJXbvpLY5ytcBn3rGdmJZY46A1xSHQoERK9tTQanjSYCmxrogfpJb9choaKyTdw4ECTLXd"
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
