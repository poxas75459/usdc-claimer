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
    "kfwo5jfRY9T35atDYx5Z6rbhUbfPRoRvZTuAk5d77ydC4JeBzdv9f5KjBagBXZNcQGvoR22pw1HwF2TmnX3wEu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42QpVHz72HdDE87r3DpdXQMfxcXFA4sFajB1BpBYFuJ7ctUCJWVwARE8WgWYFXwfd2dXrCWR5YTUhniuvUwFA1FT",
  "key1": "3fNJc8xEVJvqGPwz3cryFA1zuhTGdM3EHaFJHwpQjHyQ1pHvwAad7BgPttFcrsFDxZwHzAPWqyARmHM5qRShPKci",
  "key2": "dKHc3bAqCbY6qShQv6BPozQb2KzJJWYwdRS15duRJxqRwPtEPNtkbSR1sjzXYekSSbgTFYcbYL5hWk1LP3ZMuYm",
  "key3": "2PQ6U2BdDhzmrctPBxxmJEA54pHDXvMgDroCQi52p75PwQhiqQy7WK1e14j42q8WT2tHwixd31w1LKwagBCgWQpd",
  "key4": "5Qo3mKBjaBwYuH16bABCNVdfani3dLKRkPFUiG45q5RLHqjCWQQVNjxKBitEbb5KPQtVnpCKyFHz7v9yEashJPx3",
  "key5": "5kBj8DUxtontcgdtXji5zd2S44aU2UpTrpishsMo7hyA8Yc54HmDpHYZ2KHhVfv7gvpMmampctAFTGfoYQUBUiZ9",
  "key6": "4eYQQd2T4dQw4bjP3XqviTv4DAygAoT7AeE758UK59ZKmmLa4JYianCDQzBtxqZcXvvgxcV18ikKWQJEg4Uit3ry",
  "key7": "3fdTjVv6ssYYmkNKw5pyFqgj6wcnAHkFpqqrYapmezBQH2jomLwjGvsWhN43huPG5wi71YV7K99quMMuCEi9neJ3",
  "key8": "66f7qudLeQLLJocxqW7utQPFYti6bAL9GBRsqg1bge3xL1ukHTQTKKzYx5H8ThZfG8cAxtgUhpiRGrBfYc35Phhp",
  "key9": "tKebv4y5SEUJ2uhSB3Ap6LejoUrbR3CP1Tind1FqwENomWJHqpZC1Z4TLSDZVML8G6DdR1eDq7Ld9dYwpmLLKar",
  "key10": "482RGfpzwLYQjqHczdUGw4jZxN1FtwoUzokSbyLtaJgjAt4casnCVsxoEyV4uURHYseuVqN4YhnCKarBckyqwsFh",
  "key11": "5G3KadqcmnUbjiyRTDSpZyBNq6foiQDzs8CH4ABc3kEMdUAMqbAaYCVrEVWiLoY9KU7WbZjebzni2WL3NuCJLCdS",
  "key12": "RuuXjQtxioKGmh6Xcqb4pndT6sbbEDtGaHssSrpnLvXhgdwpEeHArNiUn6VrZnZCdCYxDJ8ajjtVHvGdohr6pR3",
  "key13": "2jxkMiQSdPY3qnMLse3z8nhvbQS6AN4iF4TJC7PF6WGRkQsTYjgH7KmNVehbBoEWFhoLqwEDTHnxNq19ND7Sti8h",
  "key14": "4oLn99WxWhmhdY7Y15h3TzeFSaGAWRVgZJuVT3RwZFtY2u197ZKbKxfzYw27RWXPNG5gAzJAFYJDBDWUTnwVVTmF",
  "key15": "5AVy4bx2hbGcG3p11rtpGuCiJjEcR3yMFBTQ5geMSdqBLg6W2yTEAuaytFfZDf5mshtz344Lzt7Rf9yvPoL1AyCk",
  "key16": "56V4NfqRYjHWPrQfo35ZQ9KnHbRVxMxvsNqMz1Anh8CfXgh5vRceM814i8PX4BguYStTcQKFuStEAQMTgw651zBA",
  "key17": "2rg4CmuNbCgdKFNXrj2KnCy5ZWEb8RgrX6bznDAZhmVTNP2mL1sAU58k7nZge9dKjyWtTPWRE5qnJrikA7s15LHV",
  "key18": "25sTzW6p4wpWQRjppkvAvVxgoN9YtHQg7QGuyD5EEDpfdvtWzpoDGo2sXJerXQ2hmy7YrSZr86JAjAqhrShHyoQC",
  "key19": "SMi44rZJYjJdiiiw47sAzWt8P7jA7G6EAHTfNTcdkphwn59MMztvT2xPPKw9jTqvRjtmKiYCRwEu2MQBqWtRTmG",
  "key20": "3JnUZZpPCQ2HfXU8FyAQu3Q9pA5rZ9WEfHSNrjUSZ7Dxu3Ds1FKsTCbEVemAUoXxatx1oksNipZf4CNypkDkQUb6",
  "key21": "3tBA4JDBBxqhjwVLk7gqpRdvbuzba5KHQio11nsTuy8SnmRNhRnhfkbCRAWysfg1dippJkTZFHDHH1nNittPkbHQ",
  "key22": "ssdmVxquVprAK7zrdbHed8j2nBM2VmLYPYn5tMrnnjw8ZwfoMfRcThpJKeDHP5Yx6zyeeM4z76wVPopsgnaDfkU",
  "key23": "3jgfbN1iGgqXf7cbDp3cuyhCZKpLrec23uhypoRk1wXKtmNdBEPoE49UTihfrjeWvWdydQD7vgxfxkcGmt6bt9P7",
  "key24": "4vEDKBrN97nubkCnWD8K9LPwWqKchF1oXBcQTSudgLbscAGriyUsaeRj6JRRfSTWqpGvYiBjBCSGzDc8Hb55iqe8",
  "key25": "3eXBTfa86FhWa8dBKEzK2T2mXENCA1MninAAz7YY7AuAvM3eDbM7coxtAJLiNz3DfRZvpfd1hiRcpyYcV45uPHFW",
  "key26": "2Fr3tFmvHBMufcHfnWQGyauzGcSDPCi85kzbkUvgg1hVDQ4J9nXbZAdKRMjVgLna5gcHZcKsDBgZyiU9HNZFjeq2",
  "key27": "4LQ5YvTbc1xgtyoj5bqySTFtEtdiWpG6FNwtL6XmQp8BRuPsxpnigudh9b4JkTVPu3CnbZngJexcFiqF98ZErJ1S",
  "key28": "4n1muXJxQzDcbMsg6zaA84AgeXNzqCRe5C9bGnPezX2vWYjVCHUjfzzoUsjsgNiRyc4fLEKps67mD1sVkMn4HAH2",
  "key29": "4NDLDCtdXhWyfAqQRPBfNwTZPmHucM9tfDgtFB6LLtLUPzkTsc3VkEWzccqF3JZYpTuBdxZ6D35QAFDhscRc5dRU",
  "key30": "2ZBnMPEqTUruDaZbNs5j1eMNVUGrT1h3on4n5cGvtGinwkxpK1pY9PbjgHrZMzcZ5tk7SqMXgr5xkHrjgAowbcPi",
  "key31": "3Q9nCzdXxhCcfCea7DcccR1j3QzkLo9urgb1wdRQtDKQhuKRKChX4A5JcFG37UBddcoTRSJjcpYsRUQwKyza4i9m",
  "key32": "VCXKNTfqsMZemsWfjfKH9NtWzqMazA5Y7NpV7LKVKvwEq8XMMfTqfRz1xPwYEZb5Jvjsn7twGkf4gSmVwbzzqEj",
  "key33": "NUgHma8D1ibT2DBiEdGby9LYFEW22jNuHLP81zHjMkr5aXNYWrmskBgepiwXAMobQUcFKhpsJJ2xv8MFK6knYxC",
  "key34": "j7zTjokrUfxH91fb26V36P98hHX5jNdXBRYdnVGLSEZe3CJy1TNQnrCeWFEhJsJYbmDc3B4p1t47Cbv6uvvytqg",
  "key35": "5FgwTYFeCdNksiM7B77KG69Pt53a1uFBQF9dk5G7hmAmCnFaCauH7PS77WtFdDQQKmVP89wU4PzZA362thj58Rcz",
  "key36": "3B5e2faNLmUZa2ZB2jKTT5kKHZS6qAcvyf5jsWYFncxckgD6LGTcGpYr946YGhEdi8d3tYedrbAZD9Xk7wYvpcDe",
  "key37": "5mp27X6vZcYXu21CCbTZsYdqwTRS9T77Q2YrqnNkgqjfBkdqsFKmtdd5gTNuArUqMrF1PfJSv25iWMVXAxFZCah3",
  "key38": "2L3UFoBjXJchgVmLC2dRsPn2yHJJBH14utWXw648nFmxNx8EdqrsRdWgdU3s6m6ebz82FxTvnssmNjSicbWKMqDF",
  "key39": "4AsoEw9dfQUcbBhr8mxRYywSQj4xAaR6CLDTUvQQx3ZHhApA4pn8KGQo4kYxXfVxHAMcrP7RY6RhFwxajZHXRZHx",
  "key40": "3bqW1vypVUbE7TjNHDoeNVsEziVxfrm28yWFfGpL9gp4B6diLpwyD8nxt6DYcEyCJmYmKKfCHMWKP74FTcxr1Lf3",
  "key41": "pEjBbNAiaj23gqDWTC1x6kfFoLXujLoCihrHijmHgJNy5yL4V2MjPZ9pUhG3LdfNvsgo57D1KN8P2zS39HuQx8U",
  "key42": "nvajXyBpBUrAAVuz7PdWPJkHLhzNUwMqf4NvNitMJkDfEUxhxjFmV9WpZaJ2DyWmcMhgQYAoBVtWLrbGnZz4Eii",
  "key43": "mBkU9C4xsAU82VRBobm1F5cYN3kcQHx3ifBA1zv8SzGEaBwe3KP7mMoD5BiqkvoduWJXNTnDTp93R2fiaK3cGp1",
  "key44": "366DMQYy5jid6iHHT3JfAGA5RnULipfRheenhKbAwS6JHNroenUFSY2CH9UPk7EBS8qxtRdp1QmXMhbcJHh9gVKg",
  "key45": "3NZnjMeAhHMPK8X5dGQYkVRnVouWavrWofKN6UNzHMwGPdbV65nqLDEGyEnQu6LJYgQvRypkQnUexwB8hso4dkTp",
  "key46": "23ykm9PFxurHEDNff1C6WfJ4UxVMALhb6eB16aNDQLYFcxn2Z29yATam86zCgvZpBxvjd2n57ap6wxuaCMAXWu58",
  "key47": "4NGSALJpNtyNcEpccRd7tWP1zDcY9qgt8T2oiQ9mCT9tYiA1FX4Ss9Zn3Q4m6aCrEpjcM1FMKd6nhnLftLALmFJQ",
  "key48": "2i7wv9swZseoe6mckAD9tb25MdSvkk8XuShCymWcwLDJc2s8M61KvA65VKmdvucjrxrYYB5DtoxCs9q6RyhMioQP",
  "key49": "4UWC7zq3Y5LGcKuheSLELtYpbDMT5bHkeTuMoEeMGamA3pSTpERoA2B3Lzf8LtFQoaTdAazWUd1DobjiEa3KnpS6"
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
