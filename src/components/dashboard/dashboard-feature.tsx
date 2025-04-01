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
    "36zvQDdfJGCm176RiBiUJQSs8DVWxNU1YkcvFQD2rksARFNiGQ6V69uPUwkqLiCSGb9F4yTstPQdUxcxoTJhktG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBsgy2hTZqKHQRUVPzWpenxgQUuGZvCuSGS8r9t6mEBF9ZF1YWA7YogFWa2psCYPoL8yFQXAhopB4zm3wKXaPio",
  "key1": "2Sk7tjr7YUNJZN2gJWFLTfTAc8Qs8LHRVoXbWuN6JMYtxahEiA9Y9pwUiaD24RZGfXwPcFeW5GNzA1zfC8BRPKHN",
  "key2": "4m2wkzYc97vkCRm3rMXQ6dL3u3znkNYRDqz8C9eYC31sxEVppzoKj2CTrSNaG6L7RthtUYsczAsHVL669Sv454Km",
  "key3": "2UPgdD8qwzVmvfagqYiW7pWpjzjugzTotn7rWWTPrSozypvxWFu9sKwuxKzkcUWnkvSdRZVWqb5VmNEXErMKdU8u",
  "key4": "3GndWZ9B2vutnMr7wbE7wc7bRLL5mMePRFkaibZXc9KmvVbjNqTfPPAmWgqEH38rD5h6WZHBqhsaapPFcegyhkLc",
  "key5": "55khWtK4Fryq4b2tNGAR3BrhiTc2sHdPHwSsPhVVntTmnszusmFZEZEB2VgTEYz1paqkFiGYxctQ4Abpm2FvpfYh",
  "key6": "55QZhfS7Dpjp3AjreUto3yF7d4DcTJW2FZMcopqm54ibVFiJjdLvekvm9rhUeequyF7dqVPPie89bNk3e3ZQtNH7",
  "key7": "AP6jXD7bgoTCk4GcQgGzmdbwafuKqY18gj781KMgEmM7M12syX5uP5KyRKMx8Y6gq3WUvQtNpB1Cyc8mcyRQwNo",
  "key8": "nauzrp2GYspJdiQKCYDiNCW4hYZ1ajYTM4qRkGGHu53UvZkuHm5f19RJTGcKcUnoHvbEBiiwcE1GJgdwRtXjAv1",
  "key9": "5DgbWufcTz1YzEv19J1FgqZrteMse2VgUnvUPU6NSJmCAfRAM6Cj3zuQKsWzEfnHUrvHPfz1DoETkDcVjE71rhbR",
  "key10": "jWJAYkpk5HhyGNJuDBL7WSaHoJTppY7nskBY8v6MBn1gPu1o41pCHah2HvK1AzuUP5LVDxoTGaXjk3ETMn8ajCG",
  "key11": "3QBM9WqsAokXK8qB84p352cUKaTDhmZneJy51TkUmMky57v5R5WdpfYubG7WZE8WPd1S29LXfHGyDsPsxTA4tSUk",
  "key12": "2vtLz37YyF2DMKnnFLaCKV8SYxS5xsxKgLA9NxrsjMT9dWwiCoJ8sjMr6hzYdsNywtgaG5HpnCJDbmrUgKnVkame",
  "key13": "4qkxCxvQtw1sEtaUYoSrMiG63vvAJHkWR9eP2d89XEomgsUkjDFQjrVDpyfstcJVqAEJgngvoYxtmkpPcy3gZywy",
  "key14": "QRFctNmLPCm76PThz3BapyPxBJ8smFJGNuLw2HFuaVYBWKdBQqw9yPeperSttgqwQ7MSx6G3egmo5272tLSDeP2",
  "key15": "5Gzxzy6BaEuoZZdkCsHLDzWAG1EorRUYZXdok2tXtQgs5NWeXdVfTLUEgBLNXLFDighTmaz4j5ewJD2852MviW8Q",
  "key16": "4wa7wCZVwHzBZEL6jWr9kJmU69civfeG5gVGgR1XiFwwsv5vtj7VYDgZePFBD246y53q1e3HdfZJ52D9Nqm7mWYc",
  "key17": "2NUYYSv1v5aBJk5ai3uirNJtE6Koij1Yj99z4oa6HKbHdcp5Jwcr9uQDwywWxYUWztdE4bW65htewbeqDKVe6RTC",
  "key18": "5W9RvqxK39YbnwAPCFVmnth9ze4yTBJd7VWc5G3osfTGicC5HQM44fA3KnxtgkzNfsycWXjhRReuosNWRAnQc87t",
  "key19": "4E6oV9wUwKHxEwm5LWydZeRD7UwL4rrtesxFP5UFNTosHwgvJBQ7FKUKpL9fZrnayKdG84XhJag7DGTFTt8xBRMV",
  "key20": "4aeHUpadgwJZ7XxoFPSWRwdtZwWuV1gneaSW3m7sE5FB8C6XpnFN7yQDxbgpZorEtpgNvCf2Mc3fXvc3YSorCXGt",
  "key21": "mj8zZnB59iEnLA2mssDWckooqxLx6HGGD4rNNA8GsDS2gGFoNsiJBvsL69fTcraMErqSfgb2z4RUhzLnN3sxCry",
  "key22": "LTYZSsYz1Fqe6M33PuQsm8UUNS5up8pyxvEkTbivu3s3wj9Mtd47G65ztGsYEFZ4MKqFKApE6XXnmdDLTocHFsj",
  "key23": "2G8jVtCppyd2DGptUhah4WC5C3YtL17dgrZLWxV9HJeTXB1iGBU6ruhM8jF5TSnuyPqC8vSSa487GxbWYshKEho2",
  "key24": "5DkU6GSFXqQ8yxaPTMayixMuLhUwkTS99A9zWaVSkv8cA5h2g6cmDcNMU69uDeGQVmsY54LuSUiGWbCA6C58jccX",
  "key25": "32BcrSqPFLK8oJCHPjpbcaeDd8u6BRMS7mS6Ma9hMQboufNmyWmMh61vKXqT1xXF36QgaNMS1EA24NhxWywAG6UH",
  "key26": "53WT53hj21v6KedksaGh4p8Lh5T54hw27HWTnEuWs4DmeGSGZ7NiAzw9gzNzvs3PeTqXuc4CuxRH6cW2qtKHhzVS",
  "key27": "5kv1ScsqXvmzN5v3SZM2Kd1xN9LFn6ddZgikon2e14DBjniicG86SaT7KosK2UzKvbVYYPgZdHGivxqP7Z5RbZf3",
  "key28": "4YLF59rZvCDr6HrG2e2kqRkb1acn64SK4a3M2jQ3fhnhqDbhnSMbzAhDTWoHVZZgj5gvYBiQGBb1ShmfgePo8vnM",
  "key29": "2b43asHFdQYWFoV4mC59vaMHiB6Luy7wh4Vq9V2qWopjb4QSiNPWo4WCAWPCX3Q87mvFk7Ewdf3caSuNHMYombAS"
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
