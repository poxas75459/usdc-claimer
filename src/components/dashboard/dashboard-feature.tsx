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
    "24QohP2kW2iX38BbrGUpSjUuCQyzCWpFkxvZM1DdwNqKAzTZsUxo82Vsv8QpVagsDg7hhEWPk2WpZdm6oN6cJEq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KbmtA4irSKfB9fkfEXSWtFaCvMQd77zpPoqjmu8tLsdYumf6hwyW9tXTfHeeh7v7LiKy4i1Poup3wXRWXjanpRo",
  "key1": "5CTGEPyoSeKZbkkDGz81nBWbRRbYaWMTjzfAyrHDRvoyXP1CpwrhWrvhKreZ18o8eBwcViFmCecDt22XwK2SV9An",
  "key2": "ejZS5M4PdMHoGP91SNAF7U88BxNcXk9LAvgB5PD7KtP1dW1bKgtFJxkqWkcaoG8eUWSW1JPzKbPFtWCSsH6obV8",
  "key3": "22o4gYJyfkSxg9oRrRKW2HQrrKhMvdJ9eqVqYTtLdfygEAb4YsW2AhGLzJmcS5rbKXa3ocQnFeDp1BhbwkGVkrih",
  "key4": "3WRrxCdsVXVbq45UWGT5AAPY9HAEMcLcbLHCCCpHL6a9rNqcst1NREfJ7oWPT8hDwjJyKV4H69ddpYAajRBvKM8f",
  "key5": "xBZ1EDBNg2MGbGVhomAod4yJBAdoVFdVHtpVZaQVqxwdYyBb2ztWmmafo66i4XdLmXXmsdya21uo5eUHXvhoH6z",
  "key6": "FUW3uquZ1Qxk7g8nwW1SKdmL61gBbVrevYNKiQjTGCNSW8CWZxfM5XTzXQR8Vjam8ThqmXbSTw7zUsRCu1hUtPK",
  "key7": "276CoH5GVdnL2pUYeTCB8RwQgz4y6XFTz11De1yaHqgSv2whmEnheb1WTJWDyZoQkbiA62Ek5JcEDAUG1JW9e2Fb",
  "key8": "2VPHJwk8yBc6PyDRv6ELTRST379itUg19CA5sZMsMyW5SadaFcU88dbyUYnp3gcf21Ra8kr9uPkfdTxJKhU9CLzo",
  "key9": "56XYvqVZHBFFMyYZ5nm5BvBdi9HHkMzkbGmeiWB5vWBV6mmZffxawrMZXxMnCKSwDvzNhPirzmc1vnV3vFGwX7iA",
  "key10": "4cw9Wk5hYmQnc6REXJ3Jg6b8si4SeynfaUGXXjRmRnHBfYPgbumGnJwuQ7L5W1s5tMTsQGWMPv6yrfVgBTvjvTvR",
  "key11": "uAuCvQs4cee2gMdd7LkiVhZSZFKtQTUBvkabSR8DbSAPyvjwYjauFsRSGjGDWH7KaZx414ixottqWiEzXnrLJWv",
  "key12": "5T8h7GA3iDMBKRAsWj18e9G73ZW799XSf8omrLTXVkMHhYUHvHUPeP2mPK7DWvoJKyfYTzQ89pfMTQfHfjsSgZ8n",
  "key13": "2myWjG458f8q9qu7yhkFZP6wtSFYpTZT2PMFPByMPdbKnhLTSaUGiFRMACNUJNuv7KQH78RvqRHoBcp7UxCS5dvT",
  "key14": "6EDwXWjR1rToZg8uSU7TJx3NnaM7ttWCFF1Ez75NBPa5rSLHPTk61YJ5dPZ4B9A3MAeiiBdLDR8ioewQnHqeGdE",
  "key15": "2ybJSQbSMkP7zUJwvH6iTc6DDQuSyWiQ7UtHRdQChCAk3fEuJsTASYhEtvwLXipiJhWMNBAGyh5V8nzWvwuVpuFG",
  "key16": "5bUdBRYos52jcLU3kWwNwaJi3vyXmEoV5Sx2CFmuRZwJR2QdmkU2iMNBrDzSxXsRj82MKZKcFiVXdcWivLvhyYbf",
  "key17": "VmdeVLzQV8PFJLwfXF4hHP846fJXDzR52HrnAdA7HFbaraebhmDiecLgDHDcAaG6zz2YgXjQY2wnxAjXvBiJAS6",
  "key18": "2quWo4qykofvWjgiK8Paw2YVXHtLfqoHCvVSs1q5ksC9A75GfhiQv4nYe7DsE8g4Y71it4Y5FikWLTCAPfmDejV4",
  "key19": "5EFzbKXw1HqCDBPaxC4sUULDTPuUP1sCBQ6U8xYMWJraKnkBsikeu2wBA1nckFaEi8bXfTH6FZifCZSudr7Zqaox",
  "key20": "mjJUr8JSgb7rrcQAJq2JPnY8SiaeR5PFu38yBzC1n4L61rY5R6bCrnB9T5MGWXowuHz54XntYWK2FWGzuEDQLK7",
  "key21": "2TymFptMksX3xggxXwnriTxNsW5BfgAsJJeZ18tEBiab2zaXjWdgREK7UhuChZmkSxp7rj5nGK7vyHmLYdX12pex",
  "key22": "XmWRSMGp7YfnAfjLUeyXaw1ZVsAQ4GC7k14iCaDC5Xj82CneNbWFYUcTLYusKZVGb9S5j8biXMVy3oHjnqs8V4u",
  "key23": "3snNxbRq3m5uoHoi6Y7f1Qm1DgZvcEuetuGLTKcAssjopCtzbkBj17jDMu7XfXRPq4op6xGcfRhJ2jYBYqnAcuuX",
  "key24": "5zNSse9T4ETNuEpq4NCnK3JfnzUHvYV2TZ9bKb51ik4RRHkU629StM6oDejPyBC3kyyZygEVwQawueQLxFuZgvXc",
  "key25": "5gC7oorB6WxDwkp2qpwBBHgJhQBrrJkrheHNaEvtsqet8oabBDJH8BximDrdaxDqcPwAaWtto6ENf1nbjAnLTBxe",
  "key26": "5zx48a4BAuZ6fdyWfT8KEkfQXhqH2PaMDW2PjGTuA1xx4Ew8DoGSkFaAGdrGBE8knaNhG43wfT2xEcCML3MbKaj4",
  "key27": "5vz1KY9pSYgvZGMshPzXbiDhXg8judjzPB4e5LuYZM65md6AsjmvNJ1MbeVZR2WGAcPS2WQeJUhCMWpFYpGVpsxg",
  "key28": "vv4gmxvcsdNCxVSx3z7c9NBL6TdJXqjMcw9uNkbEVUQ17frdKjrVwn3HVWmg6QhB8Hmh83qSYeY5iLhGm9n5Drf",
  "key29": "CYLgougVAHVP9vvK47MorBLQFCkM8mkQpJ5h73iLJ6KLSGbc7TFkLqTKmnrdQTpVJ5Rs5Y5NnhS9RE7rrMmiGjC",
  "key30": "3UKQxMkPTC6yccXVJuSzcbj2xxeMa4mzNHtWU8Kka4K16j3KDPS3jzRg64sjPitfUkAYKLkxFk1NRJz5Etsa8Bki",
  "key31": "4kMkvz4WNWszkPAtaP8u8KtsfECdiDP8K1YgVEtKwkBQwHa6h7aWfu8B6p8d5pYdsfBzNEjpz9EYfTLSUB9R6Lw",
  "key32": "2Ri1JYCckq2SJbj8e11j2QXW4dtcBWwBXQZ56ds8cRdzANM1HgVAghdemzx97fRNThH7XkqHtowiuVh1P3syqjH1",
  "key33": "4xpKco9oeiYykedZQpTbCjjwDfxx8y5NR4D2pHe9bFhHM31QKQkbDxQ9ztC19cuhuFYd1upMUKixbhJMnRL9qiVU",
  "key34": "iKZG5BGojQpPcup9whe2XqCneGghwKXbeLY51KwavGva6MeoiatMV1Ay58L3zVD4ogt3sFfSwWPn1adc3xEDWij",
  "key35": "2eaXfbNMfBuEd28v9VC8DL8kQYxyqSruVdqG29WNPAycpHwc2h9abXcA7YBE4qsL4aMRxeuFXE9aGVkFkrc4LLyG",
  "key36": "MCPTtxgGd7CZSFQJZZBATdkzPHc5pkgCJELKXvqTRVCPAiBkz7hUvrHPnCE16nmYTFHBwqbhexQHYPMgEga6Pqu",
  "key37": "5yHhNSr6XiojynQeiQ6dk7Hd9TvNz8vcXqJ3mVivLssJAmVVM8aENfEwycJk9ZsFwoNbehB2fqZA56Q8iCLjMA3o",
  "key38": "4EHdX4aLtXzkZdvf5eWKmJ6c5Vg9ZsbmcXiW7eKkz8KX5kq7ugTLxafLdv65bSdgi8tqYNuTm698AqnfnTJ4JvX",
  "key39": "66dd4ZUBV8TsoBN2S8szPFd9CESGDCnWitaHqtcQi1YZgogzNQstuEd2SgE5ma3mQ1bTNeFQfmDnrA31x6bJveJ3",
  "key40": "2WRkRDsGeYWx9gQLwfpKzEi8oGUM3F7zaWKSnTrAW2WJ7kKXs9DpFkfgTYEPvnNrtQaR4WiPN8sKXCSom2cHEQho",
  "key41": "4eZmUAwiiB1CzGAWF9z6K97WTfJCAK5FKCNZnLKXT8sPTtanB92iRM2Yzf24Ezi81M7ENZRgGYgy7QGM1BTHLZKu",
  "key42": "ZwHQ5SReLxv1iwao5NgfPBZJn5jpdGEPTSnVekhcSJQBTwjrceS1a7XW5A3zhXspZcCe3QfKVr631YdyYwbF6jm",
  "key43": "5S7nu32onXXkpFy5XfqGNVD773AscJY7MvazZQvzz4ijsQEdnuAXjND4USK4spn5p2QRN6xcJu28syhFTW4fWXrZ",
  "key44": "YyGaSK5xGrMojSLkHdsQC76T27a3ZDJUSSzMFpWb1L1QjedwmXdSk8XgpP5oTs9mByX6BMu1ihFr4tqqtTieBMD",
  "key45": "3P99Le2bv29KGdF6wpFQAd1ncS191gBfoQruTsHwdZe7d4R7nYtKbRCKYkoQk9pfRKw2eyhBS6qFEvwPvTk2Zcsr",
  "key46": "39Eqa6eKcUBx4JKtgvD6Bh88WqcmoHXk9FP2VGuQyshfMX4A2WQqeMjHXFvncsuLAZ9UG2g8qCyysiLHf66EZbFt",
  "key47": "3uLZbXUTog8HUPdAKFAMpwNmMfDoJDEafQ9kNebBpJiQjcY9H7mhihP7W6L5G6gUSVxcXpWvUVsUVMZBPGMbmJjn",
  "key48": "3jmVhPDKBaHR8ZKyXBnvTL65RPYMyYxLSVLTvH7Ckj1uw6Abi8capM13546xuVcx7eHr5RLZb3btcbc7eStsUtf",
  "key49": "32soBonihuwjAdr5pJRGtEimmFFmiqeYo6AFgYy1b7qrNp83pUyEWnK5nckEu34871a34xPoFEjY98CdRhF6m7b7"
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
