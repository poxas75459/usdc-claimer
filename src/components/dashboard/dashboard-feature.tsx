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
    "2uknsTb5qxnqfqpJereBNApi5P1U99fUEHTJ35LYjh7R4Pt4y3mkRY1egg4uZdZ4tCp3BW9jneT8TPjUw8FUjC76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFvawmNv9EnBrqMszW5gvmeTJu3TRGnnc2ywK1LBM1tDwHgCaEnK6Kmb1pCqf1T3ef9EktfHqvHdVqR4zPruTKs",
  "key1": "DJkohcg3JzXMimHP2GFV5Faw32YaYZse9DwET5MQV7iXvpZY3h7qjCwWidraVMsPrwDJbpLoBLpBNsjnxuNSzns",
  "key2": "XGQpmW4LiN3pXvptyGkeRtka3EEanTJGpNbgv4rinr3X95QEnU46z5vfb3m2yP9aZHrpPWGSJbKf3MqVvu3peb2",
  "key3": "3JSRLCKZmfZc3gVpHbvXkoJaWi2ctyKhWXzxu75L2jJfwJ7GBEG7bQba7B2K5t4A13dJ4j2tuVY7KuYwbSCeMzxo",
  "key4": "5cbZJCGAHWFfhm1RGSHxhbcXbb8CqzJHCVHqEsFTd9cKMF5cP6FKWxuJ6F9M9QfuDgKq2ks7jg4PoWL8vqgB7CvK",
  "key5": "4BrrDRPwkaQyLPcSfEuoxGh275upCtanKeiN81JZRMixZbj2zWz962rjxDMLwcRLpitUh12EyPDbzdWm18jBsCnB",
  "key6": "3WDdo9VKwNtpZo9i6eZwowydch3HHvodX4QHf74UdnkFvNWutLDVe41otEbLcr3y7jHjURwapmULdboMdLsmTS3a",
  "key7": "RV3YjhW6donoCPDrkN87RnZ51Zy6iaAg55G3dXqhPaMCmYiYgzoHDJysjVrrojb2MtH9iZS9nMszbMcvYGXMMpq",
  "key8": "2T9J3W47sa74mBrCAtEGAEN7d2M6vz5tfKabvp4F5jQ54bj2z38XAf8V8g1uQRqWHoKGy8eaEQ14PwboKSBWHBS6",
  "key9": "2iyEbdkXrW9XkzPLGpVS4mLXLsDgAq66tCzPQrrUZ5mtUB2GoAh3KwonyTY4PdQzenEahRXMuZxMXPqw1eeFnhAD",
  "key10": "3b4TFu9aacvvpyWw5R9MQL3hRvcai5WXiCTAnKFhKBqJcZN9nMynzNzSAekRv7zj9h59GEqUnPFSKsFiuDKPVGgm",
  "key11": "jKViKsVX7GnWRpRCqfoNxPp8hkqbrEhUW8BrJRCuuaGUTkuJxnTNsXYYyGekyNsSRBf5wuX3BtGfKdAJzc9xJSc",
  "key12": "723L8EUYAdwgZsdAVRjMtEG7AW7tm8ve1ZT5SAqbu73MorC14DbhRREzDPJUZvzxhPokgxiBsu8iNfP6y9AD95d",
  "key13": "M49jnwuYJKonXpTeiLnwYr4Qix5gKnucQUnaAXa5m2WqhCEy35P3WZEvvMFHYM94WvsBrDaa78SCcibP2KjSRPX",
  "key14": "2Ez7PbPcygZ8Ewx8mvYiXKHNJMbchq4rBuSDAGQYZCGNHdo7UEss8Puqfzd38BTio3nQvwe29cvXRxk1nv53HJgi",
  "key15": "4TpTXvvX9oeKftzNqW2LfC3ALeLJSea1G2ghRS7AJpy6STfsMSTobyEPTyUq4LwCv7hQWAmCFkVAyohDyb6hZzZn",
  "key16": "4yUonQKgnZEk1oq6ECQyseHBgzNhwmoFQH6BT37rbAkw4dyVjZAV4dwEk732MCP6WsGU5M7q9TBctNJzwzUvVHrG",
  "key17": "34Jdu5UvboB7VEH44oSpt3LZ3WePEUfz2yRDX8szG2HwGuxFEJbGYw1aC7nsYmGq4VFVehVqbEAhxnQc7H9mWX3D",
  "key18": "3y5Qys5iesKjpmrdPu5kTpC6RAageCdJ8Ku55Qpr22Vs9EAabXMYP48yFF1JyFSUQVJcSN7incUvs4ovaN6pddnS",
  "key19": "2eYibSacQkCiDfoFZdmdwQMYBzHNccgmBeVyiNH4cR5vuCvb97CMUn12fqvuLArAsQfHQJqafy1mKvmwQMfGGrzR",
  "key20": "5m9PVLznhMSxALJR3tuBM7HhjN9eMySMJZorNnRNRW79Dh6fZoAgNy1o4uh71wD5vmMwDs8Eswgr3JX2SBGF7qkW",
  "key21": "5X3wXfQzgfkCf3ZUF8Lnf1Axtq7A2pDMyfrWGRpcKPZ4mYABXpRfFKkYiwz5pc9XzpZKmRL4wWoNWGrWheq6mm8V",
  "key22": "LmL97YJLLQD8Yuz4NNj3tdvaqLDtpYws9MKFLVCkZAnEp48tvotsAe4WPDYpPDbxSVKBgCttX7ssuEohpF5YPrT",
  "key23": "4sJ8FSJ4bEhyiZMSqQyUXoh3yrCcuPfba9rLobhe3NwyvaPpYeL1wcMfBz2wiS8DEi4WGUCmBN1m65R4aAZNWW1",
  "key24": "33p4fUXxu3VFigsJW63cpup7TLEkvQTezXBEAWuekorHz6jqisAMzAmwqHcUG1tmzzZDVEPizwBmxXvnL6ppJKUT",
  "key25": "57kb1RuNyVPHfnk1AHzb1xsosps6rC4VtkGzHeJ25j6JXnh8xY7rUUhYMjncDsm8N5Fi1Y3UEo2ZtNuckCDsior8",
  "key26": "3SEfN5udjugBFZThM9K9KABXVeSyXtxti6Wkuy5aMVHbdbwMC2pcz2AKWFTDTHwW2xGegphvb5PcRUsGzE8RB8p5",
  "key27": "29tNGcoXkRdNYzzTELHRQCrrAqhvAYNCmqEkBMAv7w6ShXBC8KKEi2uMT3sGgXFB7L1JDh5Az8u9Yz8NZpyfi1D7",
  "key28": "DVXJGNVBRq9NKAJvmnuhoyCnRMdp9boDpijxYMqykvqwjUMd6WnHVVxBfe7DDWrjt7NY3FZt6ntKpKgEP6wD2m4",
  "key29": "Qit5X9f7vepsP7ZrWuJWp83g52mbbLHqkXYMFb5ZJyLPkJg5RE2vkzyZSdPLi4HjUMhFTQR47E9aT2daXjpY2JG",
  "key30": "5L44txY4PgdzvuAWYH3XUNLZteViL28L852ZopLJFdsDLyQxkbAEVoJD1rXBUXh2nPJqaWQxNRm4Nhs6XB5iE295",
  "key31": "473QjQR9Po7TcfQwkwjhAK3YNNvCTC688GbVzV3U4bXKCkVjR1bpeTGCsUuX6P2CYW2JPChqgWAZ6U44kyepP9h1",
  "key32": "5XgD3LVVPzNt3QsBeFF7MLQNjhjA4mF8WVsdiPN29GgH6ZSqZiYaMEpWwG7vPZqzHhfZVFfB2Tt1etMEt6juduqP",
  "key33": "KzW6W327Qy25MtzXNBpm8dHtc2qsFt8CHunUbdTrvBLp98hiGAfh4TpK2QnGu1xSXujmXKDTGLKSLTZMYxxr7xc",
  "key34": "5NzWF9pMC9FLTjESrAjhAjaS6B1objiZuJKjeAksrgJye4ZqDe1MkKesRt9Q41yXvdQ168h5JC9LjSYvnSU5ydc6",
  "key35": "k5D2SEwsrHfNgFieRpZNgbjL1JN4RkQVvbGLk7hHjoasNsvHQFJ1n4be4iDJ6gAT8Gt6W9FvPNS5eoRqWyn97HZ",
  "key36": "2sudvujMsQuazJoprnCMbFDzdiLgePbo1jVJ6H2DC2wytBJXTZchfBunZxA5sdnmNL9FcsbQSvbhgHeuwt3TxU2R",
  "key37": "4aZ5rSLEyLH7xmZQcGTygj7BqQDgrMuhNnaHJR7QqYyCT5RUbWo3a7bDoeApdgCKp3ajLRjz4FK7DbNn3zQ8nYGT",
  "key38": "3LCYgypnRcbtCmWpwdKWEKWaUBTdz45mnmWKmZiLbnVdDxvZ7LJNNE8eXsKMaH3Mdo6erzQY72PALtEDUTpBCgEJ",
  "key39": "2qqopmqXnQHPaxU79D4PAREpLfYbdayaYqduTj7nHui9w49oBFQ81ffn1buWn9uyYU8p8ZjTBBECXFjxpJtcn2a",
  "key40": "2NHFoJYnmQdjENLejyumjMtHqukKbp9JargMzsGBTJaHVRH9XzkwbAhKFEqqCpEJa6dk6c3XhEeSguu2vJDTwKHQ",
  "key41": "4NLMoriZsW3cxJWwjKJdFDYKWmzns9mPFV1MUHLqrf96r1JqzobtvtA9oq2VnZrUFzvjndxTe6Bz2W7vJSWM5ZXS",
  "key42": "5rbRkhq4HzLZRhgLN53Bj6ArfX1uVQBbu9eEmiXJ7ULibDwWtJvk1kVRx8oPoXXBWnNQQHd45o1HQnu5omMDMpH2",
  "key43": "4StnJALDfLm4wzHpcJFSSLY4acLM3TJVUVuV8DFsE5wHzSLVrsrqVDV7ZGGzgqrWraxG8oAKyqUoXKKGTC1JCbkP",
  "key44": "39znqm1BUhYxExrw7FrTWDpzbd9P1QqUvfVJBc6GA4jzAJahBvEtm5Y1pMeRfCKWwJLmgnZBnMGQAgF4DG8ncSEi",
  "key45": "2MCo5Vs6RxoccN8JQvdfKiuJ5F5xw8Z8WHjFZhSoQNG1a5zo4RiewcnjKtafdJSmavVAEY19mLL6P1C6RdmLzRwU",
  "key46": "2tD8JKfTCvTKwn7LYHA8tBJneayHBqUdcDGf7z5tRjxvuorK9qeQ3wwyPJ6iGmwNR1u9MCZhrtPb5ESZKhae3DLD",
  "key47": "3pcS72sySVvLUdhgGqCEBu3xjcy4gYF42rW7YqGmYyp8EYt53QAqcDZ9DCQuyrCcW1h7ux6eJjr4aN55PWwJpwcT",
  "key48": "2n6uyahsWv8gicbrfXQQa74r3za6Te6bsjepeVSs1VaWfha88gfDUR4MikseHZZEEMecaQZUoouFP8oAvwapCGt",
  "key49": "2vtYuuE9pqPenmdipifwFHPnGe9WSUvH1AL7eQPW9Ld9orSqfvzMMQPs5vL17PzhgStexQnj7vi1HmzctMtEYLUR"
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
