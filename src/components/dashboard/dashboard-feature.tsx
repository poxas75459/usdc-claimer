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
    "N2qYDmXZbsB1iNNhDx3WRssir93Wb8WJSxwXx7Ysc9AN1wsqrcNE6mQErDVSAwuCWqPtjgBqUWT7BhWY9iAgYqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hw26odTk25fqUYdzWXZ2R1aBT9k2K8e9sbBbXdNum3v988TtD7XuCcy2b3C63eyq2Vg2DT5LHUwLdRhZGXBxsof",
  "key1": "3qnuNSqALf2YyX5vXA29xSkCrtDa6MsLGUxBiQpMPP9sDz8hCsXxtaL9iHtLGbDHaqqBdYigwupwebLoU6q1Gooa",
  "key2": "2BJyyJ1m1t5CcABcrYmZN1etMz7HaJKBJAPMHQWSpSaseBSnJgvCN6SAfnjLkodfRcB8Cns4gQLBmAxuVY1ijxQ4",
  "key3": "ACTQp8skaHskPe1gK4B9yDXLvu93WwJiQtbGcQ6t9pZMbNGZwsMXULmjDMtq984krHnhD5TpKixdNic2SrcU5RF",
  "key4": "5j4FmdBVF7e2hLdZBzxK3KdrczZBX1PoCtqyiZG9rhBfngRE9toCaewX6wQJZZXagPf3bZ5jMXcwqZnJvhJKdQyU",
  "key5": "RkBkvE1L5TSHFeJ7oFKgnJeUFKX9cKaoaGuZeWuXwrvWTUnqD2pEVV5TdudmcQ51oT7UFK6Pk6ZJU7KpxaorH6g",
  "key6": "MXe25adErkYcCk9BKFHhNg13AkNZFmACiNJC4dUot39C4A3La4FxEHjtwALzKtC9fHSjxkQS44s5B5nAHWsq1h5",
  "key7": "xvUsFSAcuwzcFky65GA94KotSLSwyYm5EkvtwLnfzrTLL8MpDdvGMWzRQpg3GqoDXq6hJ1B66aPXT1PZgeYaL1W",
  "key8": "3WqkLBnYFksqAe9xw74gs7ZYuq9MEtkiJftbozCeTJiJtmYxPzzbFpPppt6WKWKTVBjNAdN7hfesroaZpB93Yvup",
  "key9": "4PLEpktAW6htQsn5u7AReWNPZhQF5BQSYdnbhokD1jxmJBvVyKMp6rXHto1r3v3juSQmbUgZLQSfjUsuC6NQZs6B",
  "key10": "t4LPPWHuUs1ZpYaLQcZrq1GbVGKJpw7EYMvD2KdHHu2WqAPVCPReRVhXfgkE8CK1JNEU4FHYqF7TNoasaJEN9T1",
  "key11": "MLVHqdTsDih1EhQnLrSqKcPoMGggLGtsdotxbZnqVdZvMB7tLWPH9KBDwrNfRUsYRs37ApEvrrS9JuUmForanFs",
  "key12": "5SMe5vK6uj7No6tpeRTRDGsLnLf73kbXuK2AVtjjYYMPzFdGwZkTTsug14oBZHsQmuLLW9ZQNyqTR3iZgZJLsqjE",
  "key13": "3uBVfxcGoD6fSFjq4eUg2UCH4cPJfANFCLuJmZeE8PmivdavwRK7ASfTX48XV7W4jAgTcK6bSc3WMBhegsGFVGvw",
  "key14": "5edYpssEdGG7LCtX6rrGVH7JVCqrAPZ644zgZnd9AUCC4cM8q5o4HFfRzgwWPMLcPci36CJceUic9nmMYNMyTNyt",
  "key15": "2XqfPmd2NTGZTTXjR4C2p4HAfo3ELXw6UzSLfqpPLrCS7iKCiy5yTmtCbTZpptf8JTYBvXJbipvNFwnQTufDqu2Z",
  "key16": "5r1RYXUX1UwA6YZfH7D9YELYA3uu6m68DZoUfs2bJoubDzAJkn7kpm8utfRQoiDry9Uqu1ambWniKN9bhcR8g4jJ",
  "key17": "pcLPhF7Hb9xDvEcHTsE6AvgyToPKte7U1LFf9zftuDaZ2RHp7TBCeMaARKQrZLjscY6peJozguamVKvXwPPFXb7",
  "key18": "43H3irH1VNMaYwA1VPkZZ22gxmPXoJmxhxPg4r38N3r6fBNe9WNwZrisYKXTTDZvZX6PeCCkj65D4wXyPLuLfVEE",
  "key19": "2uAMZ9Fqrcsy8RDiQqadzJ1pARuhnd9mUZJix4NUjjCU7J73wqR3z4rPWrkkHX7AxGkT5EGChGRBHXyQgtdVrLeh",
  "key20": "4Fpj38MmjBJkurXS8vSe8L5VwV6wLZjdrDMCgrSwsmsPsZXCmNf3HWPDzEg5yt6qAc7hsNMAshHJJUhvPrAPshXJ",
  "key21": "3jz7FKxHVmqeqpSQDTAEWEdr4GzxgccZdUkFb3Niqze74591uKbA8pHrsHpAupodhL9R7vyLTLpo8tzJbeGWWZ1j",
  "key22": "uk7aHBTSAMRoC824AQkoWea1uVYQPNJgvwd3B2rSSvpcXH3v6cC1o36TfFaTDr6eiHC48UQF6kfU61eZ7dzsGWi",
  "key23": "2xxvGLyqXMWsmnPitNLggXAJadY2iUSAXBqXSNCjKm9MSGReQ3kzNYP7Zi3xRrfxx8VyyA4uz8U4KKXiz5wRTcPN",
  "key24": "5kZ5edbJcahUsx8GJeQtDhVtXw89UNPmq6zDFHk4oy9mPQq7JpS6rJQ1JFNXJXVQxkFPn3E6gsge2tcs6nd6ggBq",
  "key25": "4gtTzHuyKWLf7oinQnsUAXHpCVQbAh1JzXEVhGmmtTYpUF1XmU8XvQasCELrpSE2HYcmc84WogsDpcwSjfdUExWm",
  "key26": "51QqqShEwPUza2Ewdv72NazhXdj4DyvjjpqkPWasc7ha1qoBY49ncdxCsK1ukDTXGJGR2hy1dbPzMHNjgZvHAu2m",
  "key27": "53qLhsxMt6EiwxkG8F5ZFTp9VvHg2e9yK1VfNwttmXPvkT17tXvLqqfQyeXKbZ8job9A1k5jmuvNk9wE3P5CnmGN",
  "key28": "4AervGrgiN5PxPsjSRG4CS6TDDSrFHD4p8rsLQrrkJ7okm2CW5koVzopR4yWHCfbzGy8EpmSkTnkv8BYxec18943",
  "key29": "5Ri4Hjc5HgeVLYFM2HD1ZuMdYAG19HSkse7vyLvcRxNjaEVS2ZKzjNipodkQCm56FVZy1vLgY7Q8VfuwtGqeE597",
  "key30": "2BZwiSYrJzpCQnJZkeX4xrryB9Fjn5wFPBydMLExShR1hDdxHT9Wzu4niY1eCShWQAfe7aVVzoE7vDyyPRkNsi9o",
  "key31": "2YFmuxunwgz2Kw1No6CnAijmThkexu7t73894bnqHuEjSqFVoWPWBkPkvHe13RujxPqEYniMXXqVcHTPLV1CwWvk",
  "key32": "2gpdnv7KwL59ezkFzHw2h6A9QZ2JBY72HYHJEKBH9heykVA1ebFLaHgjySsfQQa9KUoSaZwKeEH8askHyLjU4ZyM",
  "key33": "3S9zjN1gcZkEnkCb6stx2TAKXeXexh7cWkNNyMT6gbRPQFrrHwVDcmsxoCsMGQD3o7rK5aBq2zH71qTqPpFvJd8m",
  "key34": "4PspvoDcCxnqLXecUByP3VcisKfvuH8Byvs3bcXwjakzrSqyiJPeJyvFqjhsKzVBJdHEaTVAUdTLEM3rTyJ7vCn4",
  "key35": "67TrJdxhf4j1dwStHXGgZjjuCskmHwkDNCVYBiV3hMg2uvhHqRMJa4vnKGsExTrMY9u2sjTPpPhUQLNRgnwQKW1a",
  "key36": "27nTnDqKPZDTg7xzAtnwHisMZUVzbxw9ccje9EUtQdVCqyn1B286t1f56xHuP9qhhSePJsDiUA27eYStysGPF81o",
  "key37": "5pCfJKZABWvYs64VvyDADqtwSUsXJgfEUgfNTYbarTXeaCBpCDueyEnZpTJ3KN7v2eFEWwYeQp7Bp1h99aSE4izw",
  "key38": "AU24PRHCeijfTJmuqF1NxVJLBTD1yJMhVdaBz2dAVgiv1ULEdkzkSPaKcs4EAKQZy2Wr6Z6fgXGa45axLCrsPo7",
  "key39": "4Nh6y454UEdVKvEMof3UZVBH8QJYgaDtqaZ1crENtY89Gc1pQxCMZ5ynex1mN2Ub6xCjijnwriV5pLN1efbtH27p"
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
