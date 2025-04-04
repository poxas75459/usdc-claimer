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
    "9nfomBHEibFai5GptB79hgexzc7Q8W7Nh6BKNHgW7UbawhhAbrBabcNPP7znNxJ9fUxjG1F7nMdzSocbhHTbDpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T1gC1moN1LzAC5QyiNuVZRf4yycq5vyv2coRm5zKxsndm1NxDYK6z1sQxRXadoD7rBesJ3fscP7vKCx7Qx54fY2",
  "key1": "2YaUmkycPkktPZcdUUmzKoAmw8bztfbPb2jKuLX95kVCYtNfDYj6mno28jneud1XN7vXrABZmNVuGBarNMg4nKtP",
  "key2": "5hg47V2p2BZxuwuA8646BQtdBdF1YTrLQMJJLMvTvCiB8Nku1j1xydNSrqTTt9jPovSn8xRKqxYgzKvN7r9rWeki",
  "key3": "59c6J31SPejTqwkWDPaguQSgrSfiGSpDaiueRX2PcL7LN1UGKMb71E7yfnNLbo75qEADuy7u3CEnzSBJcHE5WdAf",
  "key4": "5V1b3qFGqm3qj7uUUHM8HALNcjuLM3L5cT6reYEvVKovxbfsxrxsTumgKEuwtz1tEXKrK6AHtL1jWg4tsz1GMWQw",
  "key5": "55qn1zrnxRcREYJY3pgKpD7bdXTDupwzdjZZA2yiYcQZcgsFoZoGjbskGJAG9HYHod5Dmo2RGiFneQbDMcaqXLQq",
  "key6": "335PJavuutcRFqhFAGvVHYmZKvacEXsDwDKUHYD5Duis21pavEeteaMbRVR1LZYEGhonZy1uRXyztJwr5XztUS1g",
  "key7": "3tv7SqxoRyTLdnLpgFL3mzjimHjhjdfZbxLFd6veZahvRNazZgkyiRvi1jWtma46tfxNRbwhbekC4i9MJJLDVHKx",
  "key8": "2oK7sVSyXYMETjDdHtBuf3AYhbpBjon7Vpg2dL5AiaTR1qKKBwZytjA5Y2F3sU7rmrGQHd1kiSgFACajhu6iuuhd",
  "key9": "4nVMd5q6xke5XRuUb8jcgQTMETfzAoijopUtYu3yAtUiErKMFvkb6wn5irfXTMq5yqZoH4Z5TPq7ujxBKYL66uMS",
  "key10": "4ooQ4aq17cXhjHv6utUtZ2urLE3nBmHge8ndSe5gLRn6Bv4vG8vvcod7h7FKq1NzcgE6s167KUHSAgF7qrRzGzSD",
  "key11": "4PTHQkMbcWuhm1KNDH7HPiUNYx6komonYMGcLZ59w1hhYPL1kd8QetEWgGq4UT5FX4CY4f4ihb5r7wbw2WtXhrwd",
  "key12": "2we4FQZH964Qz2fQxVKrsFfyCWJsVMCYBfjyYNRSNc4LTYuAogBUqiVwH9BgbH5BeNSHTsdZKr9Ah9Sus8RmGpU4",
  "key13": "MELa9X1juTNnGRyJd2pLgn4nJS3zkF5WMoC1iXi4qRvMFXDAXe55cAjVeY6syWSiqcYwxHaDXFTKbE57io4XhUo",
  "key14": "3JtZnKJxU7rfeNGW2RTjkfe7FKzi4wauiMYYZxt5WPnjTX4KD1rgNMDiSyChB6wf2VCWxdbBCqX2wP1m6T3LLLSu",
  "key15": "2kTH8bgLhvyZgNgfVx778se3EPxLzgXftDm62xNyU8xdu9XmEMeihEJPKje6pxQANkqR4s4AGpehSjdciPm2JW6p",
  "key16": "2pvnAejzyHfarkfk1Xg5YJoSXfyL3x9JU9nSxfK8hY5amQXWRbS8rCWKuz7RQjihBHHpYxLw3bj2qggDnJyjKUfD",
  "key17": "5WaAnRNkaCSC7KW1V9iLFwtUvvp5NqXM5gXKmq492S3Jo8rquqPPjRaLvXztcUYKF6NvkHkKyFUhH5yfvtpBdtSR",
  "key18": "5S5anG9rDzvpejmnQ64M2zueowePNQVwR4bBGKtzBppVgZoTVzv13iV5qFFBAyyhSDEh3qNuS7HfPJdKXtdmdw12",
  "key19": "518pHU7iigPYC2fTQiaoUqtBB96kaWBtKkBjo1RPsmQqJV6rNKBpGcHV7ZcEGLNdZN2Fa3GMGB5NYB5tAT1bTgS9",
  "key20": "3dCqqjbsoWDMgYuVPfhvf4Hs4PmHpAdwUjmcERnovTq9ANe2aLHiGKG5q4L9H7eLJjXGniaamCWsBx8iB4Ae2oUn",
  "key21": "2EYsKiSxg5RCJUf2bRTpq8uPaYscgGVER4ZcsTPrSzGqqnA1CeMmTHMTpygtgbqeZERYJFbSmvyHD3iftnqD9KD8",
  "key22": "5Dp4U6BBHyzaChNNc8ssbPy94hPxNsfbuAiFfTZjw2hCQaBcsR1T4T5UohjPz46H5dPsM2Bx4B1MiJ5jox6VSkow",
  "key23": "nNgAigPwENKA8Xm87xt2NbqVXotqYPpXHw3xKZu5fjag6kPgPwKGdyeXKRv4ixpjp8DECtWxpSeMLzhKvs6KK2t",
  "key24": "dvK8ve734sXRky1NhHikJsXG1XWcpSWxAEQnytydxkQ6BPhR5Gjkzwr1BHr4W84q9AK1uSKo7pxZwuYFB1kZLem",
  "key25": "aS6W27SQQ6vkjzwGjpqhoMhk33grG9F2un51akPYsrz1xTS4b2uqoVL23hXr8BrM8QPyyx5NEnTgbrheQjcf9gw",
  "key26": "5iAkqoYnovcv684b1rM5ni9raVL4dQ9ocDoCNrqzK8eBuJJuQcN98auRg8TqaLqGumnFivjLrVuFRyb6pJXFqVQM",
  "key27": "N1fsd5RZnsaA5mRLc12sBqrdqKhULkfc92wMYaU9cCjgRey9fpr7ErYDFxzHYqL5ptF6TzKQN3yV1KVeMrjmJkR",
  "key28": "2ohAFCC4VzBoJLiMge81ahevSPdVVNxrNwWV5T92EZCb3BX5UsZZU2ovSh5i7qemdMEC3uWKaCJTsphiU6tqGCJK",
  "key29": "3gCZyeWxWBk6VLXA1Vs6G96iavmmsW14kmSyfS6oi1NLQ76hSkidhF9oJawZEJoRxjam4UuxrzB5FZ32FTe2fZEF",
  "key30": "3pBSU5VLwMMiWXP367eosdc4a9U4586PJXCQpdhYSq9qtCy7oitMg4PsWJcMp5QfxW9NSBPEYGJeriR2BFs8vQmJ",
  "key31": "5sJE5drjVnVeuD6ZtvSJNdy52RMaGPdoKiRtVBhG7Koji2of6v3cv3jWJD3itHtXJC9LjLZnmZt5kjsNH5m1B5U9",
  "key32": "4UxYUM2pxhoTpWuQqd4FfAj91sewpoXMuH3jdM5QHeQKq3NAPDFnf7vzXskiyBN2TRMYEzBmEn7M4znidvcQBALX",
  "key33": "2VV2xCDMtg8g3pTaCedU8YtP76iYXfdsY6gQzvHtmuPBs3rD4Q53ssr8pbvBKy4RD2wSa8oVL1hr7kB3UQ6KcbbC",
  "key34": "h67y37xbXLVR1RijZavNMzTqSYdwGNFHx1Ldfa89rwN5BexNdzmCBd4YRaVA2YDBZuirFKCXz649C5vNf3pTEfU",
  "key35": "2Agks49LMdtjRYJtdcKF6b92EqENjRfomzAsLk8bzF8kT3x5SKiWAggKmr1VwGPEunWs5QKW9qseuYn2mACZ6ZG6",
  "key36": "4su2CUBP72spF7mQUfoBuGNDQjjqR36SRJJc3kDmE6JZWhbySdvH8dbJEm4eoxw6Jz2PrToShPmmprjKwXJqHBGK",
  "key37": "ZxEz6Hbxm2NH6JA23JaEpZazJbF9zsdBamFSDSKRDy5tZrg2NAdfebqyQ4RFrop9mNVxVMEbqHKk1YEGvpK5B3Z",
  "key38": "51jU6eucC6BpY1xGMmhTuY7YDD663MNwhwRfmgmpjzYjxTsVBg5RezeMjedCRxqRbvfxWe3E3TPsW3RdfSkpAmXh",
  "key39": "3CRTwEojwZZThLG7H8NK9dTFZuZwq9D2AexZrQT6H8a4ei22FAKJyme3njyyQDd6p2WsB4QjbjvTrjCPiuDra1YA",
  "key40": "3ThjkpuEvnkUBbS5X6VadjxfMvjbqeSAE4FHn28zDLQJjQkuCYK6MRLZLzzsEHCLuEaCbTBw7tqkRNk9STrrFpSZ",
  "key41": "4EqZqtE1gb8dqh22ejLa6B4e8Dm6y6CqGVn5M21gyPhi4drACdViex9CzezR3V7rKMspcNVUewqDGviURWTaCNre",
  "key42": "4GKTiBHJpQ6FK7TPBcNRLSaZDnoQDa26ivV7wXBWrtbvU3KHgUE5t5QZNxZ3JsgJ4W2rjkHWDu8zdRH9QqXFVa7L",
  "key43": "4GGPsXeiVWCyNCacKAH6eyXNNCvRuxRfursB2gXTVfz9QhsL7aGah6YYZ4UZ2jV4YQJjZcvJZaptjSTtC9d1DQwr",
  "key44": "vhLu1xa45d4T8VHqSFDXYsZkFcCpTr8tXH8vsUc4cb7MB2bCmsac6P3JXYwBt5dPCgEeqtUdf34DUenYjsTxukE",
  "key45": "3JKQ1tjPQV67Ezz9vBdmMiCioM55TvQLiFgAncqaLmjQQd6yxjRaSFyL7RZ2UFYh6MSmmTpeWawxu9NLZu28jszA",
  "key46": "4Xq523pK2cybFfHktRKtFsn3VWCR3cBAm1Vx7qebvwbFp7Dz5vNsBVbxuEZN4mDMVYMZyxspnyTjYTfag64D2uNN",
  "key47": "2PDBD1D1fbVHgZacJ7yPewBRDEefwBWxGqU3Q3eJJLYeMq6YufCEf2WWtgqSo9zJRa2883rN87tVp3JxxkWMn39o"
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
