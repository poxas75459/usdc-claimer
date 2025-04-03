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
    "3E92AxHBVkhfJwhLqLtBo3dpXeF6wGSG4dUHqjoCcmRXucuEeJRBRgXq5B8XMpafM2xwAdTy168V2iF9bhB25CAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYwNh7V2HXutREYPUt6XM3jCTYmTA54hvQxXeeS3wQcXL6DQBcSwEuVzvMFpPA4HtK7cY55UNn37GYezbbmPjnv",
  "key1": "5w38xJD2zLVdJqD5adLx3D44qzEs8MyKSRyxmTtfZjqUyWCaRV3V1KfnQAWCQy9xmHoenMgodttRmDw6NcnYmZd7",
  "key2": "4smoYD1oRpFgHtVtTeLiVnRQnmugyhiFBeEhNi7V9Z62yzVsfov9MATXobbZqm1fmKYy4dcRpFnYweUxJxQsnKbi",
  "key3": "3ZMRpXXWznC7hnWsP9dptwms6jNUwj4KUpSNHhkpsL8SjEUkLEsNMP5W8mBy8XrvCgSw69Cjeraf6C8M2u8QGAgP",
  "key4": "5bG1zoWqgFWKbruFFrj7uzXy25eAbkdGS6TzkDm88wqbGewAWPzaB2jDpSTTXGWb3Rm7d893KVNkgrCpYX3JtZiq",
  "key5": "3bH6LEkF3ADkeN8aN7EodaHYwXMrutYzw4fMtJYci9mhWro2JSeNz3YZvPkjtCJncR7HSreckBbEfcUEd5zhyqoK",
  "key6": "3XX6YatePEpNnzeqp6sAXm7BtdYKPBVb8XzX5taD1YtHUJQga3JnJXViF7QwqneQRFRFWvkd3qL3D1T3z2NAZKNu",
  "key7": "26eSRmQ8rwwmGth9ywYm6D1LMXtt78rK9SzyB7Y2RyGdt3yCE1dm5QWNqdzVeCZPVWA9KAFPyCxzvprbTBQuqYji",
  "key8": "3yUSiWx4bwQGEH7o9rwEC4Gzc7UXMe7B9CcKNkwyR2xiMR1iLV8m4Ux3jdgB6yqxUF9kUcwnoamVwEbiLmJ9wDEB",
  "key9": "5Yt3arvuKabmUvQF2oY4ZNT8GBkXbuLkauocMqAa5GRrSzVt62bXNrko4nr9CYoJghgWWRUEaNUq73hFjiHMGMSR",
  "key10": "3ETXSnBogxiYtvdELTnQsjyAfD4NdZahdCN5JstTyFy5tk71qsYBAF29sLao6NNXXpbGj4ZkEPrs14AqHAbX6hdA",
  "key11": "2hmFhcZZNJz1mcZU1LtGmtNvWpS72i5cbKyWH9sRoeHQsNDsxgzhcyrooUx5Q92Ghu9F1xnUBcw4KSQgPYAyvcLD",
  "key12": "33S6aEWxjejiit131fAGfwSE9HPH7dwqBFQcsUM2ZEbuKjtTDyLinZFxuJEQajcH19BByXiAgAgUE5yEmQgMD5u4",
  "key13": "2NcQHdyPiJtf1V5dZenA13Hu1Jdt2JzXmgno7o282Lgw8bGCgdXQTxr1uN4gy6xFNgG7NfUoRuNaXGpWhdCzrdmb",
  "key14": "52oQtjtNeU57v824kEJT4KTbCtvdCFTTfAzuvEMZahUwwGf6Lmxs5bcZHYXjBs1MtTGBNVxxiVSRFoPH3jzgmqNb",
  "key15": "4uaHWvdMNK1qHQ1bzh8V2JLzri6CWY9QmMMiVm1pNQc4bisEqUTaUkZeGLuwUvwa3R2YEL7GB3WvSqcPZURHktYE",
  "key16": "4d55jP3fFtF3tsHkF5cba6LhFfpAvG5FfsBZeAHcdDgjXmK4f7FrReEV3eJQg6jSZHC937DYrEkdvsfu5snEX3vs",
  "key17": "3JzVwsDKqeWy9W2QUL9TWeHtpEFjpV2e1TPtRiuWh9SaA39nwaE12AfWpLcw7ehC24KVDEzNephVXN6sCqnd31mn",
  "key18": "Q9Z1etsJUJWJ3dUcxdWHbfdz47UQjmuh5ZKNDcnuXxKZEpd5JUuERjRBdzPJTX7wRRGQQghobGPRRm2Du1JZxPt",
  "key19": "2KcqAExnr3KFuaPucVgnTFHu4Hi7VxsBJQEaV3ZfkDeb2kaGnhKB2HWwAGT8dS3xkaR5Cc9jq7b4qquWEHEMoARc",
  "key20": "41hNsCU1GkVQ3JJ6kpChc7HBrazeQGa1HQe2y5mKGfNsnx4RzUccFs1HBemn7Gpggvh4tBszXiMNZDwwwtpHTdoH",
  "key21": "2bwWN2Bd3EvFVPufE9jZJa3V8x3AM9HtgeH94GbxKGnRgrWkWSVBbr6KvySrbDdCLHZ2AwmJ1Khr4Ydrx7WZoHZ4",
  "key22": "395bcyv9xsQeb2dPuruBfQibp8CRKyMHyKgw5eX5kteRJitoWHnjfUW4rXEfjmjSNx8SQLnrMgTZJxxLBH4pCpYK",
  "key23": "3kft4kqACcBrJCf1rKjr1E11XGm6tLyVEsZkMJtfAFvEYy4d2SnuqfZKiKyXi1MpiuaUCUsaNZzsbJgjkkugxPdL",
  "key24": "2mKMi7kGTEBEtSRVSXQDvBA5yc89jxaKwMpLh9s8wz6KookTnWTdxUZ8HtxeCJeBrzG7p3CJwnmaE68broVaoJAT",
  "key25": "8JAfP2Q9Q5nh4a4pqKhKctwuVmauEZENfJpSgCrG5stGsvf98RsvXUbAWbmnWSAVY3p1aQBgmLrEfFxTUEr5py8",
  "key26": "4AjWmqhHs8TVRKPJAQr6ABdqwpd9vSXc8nk2bT7xMoW5cguHof8j2yLXg3G9kPxNvGh6BQkZVo1WyPeP2HkHTPVF",
  "key27": "4JqxwRkxpZZYfuyCe5m2pz7xvQvUiL2VR9u66qb92DJAopd94v4kvnrBLNGqqy2ZJr9fnVwbYan5GqwyAYrHKP7w",
  "key28": "5MGcHRzxQ4rMF13cvRKAsaaDqAf2nLNYHS49U83VvGYs4jFLfgABKYmMuwvrwDX2yFZgNCHmcoRRWmXyQqjYtdjE",
  "key29": "4yb7KET4BcmVzzgofvgRnpkCJpLxxtSB2MmCSTo7Xh4M2ni4NH69QKWVLCKZuVNb3GvWpFdGMEkpuXpXpueMVaz8",
  "key30": "5B63EegAh61M4dqZ3G4L1qoxSVHC79PDdkAaKZLCYQzZhCrHw1ZNhCyFJn8BidjpuexDENEW1DCauBLHmt1NHDzU",
  "key31": "3cXGasPwYEFinMvFXynJKdkmmmj7cfbSs6b2ac3JGrhK3b7iAwbwuCRJ5skw34aep7vckDxMPcWBuJEETXxbzUfD",
  "key32": "3njMshNeCEwwFgnFKsZ6RdHa9F7WVcfqDxiGYgaGpCfDx9GHfyWWKJpVN5ryFehTc4PMwopDG8qNgUc28W96ZQPJ",
  "key33": "2Xm92RXeVyTZruqY8eGp5WbjpQWznZammFXpG9yUJwgFY1HQtBJxQpVCS9K6F5fb7GfkkjyEKLzyZw6FZ1mM24gJ",
  "key34": "b6vDM1qApPJUqk51kZGrJNeHATNT7vg8bQo7aDgFg1nTXM4seFe2jkqQrBrV57yrkfSaHPSjT39nEoukGq9Rexm",
  "key35": "5Jn6Z9ADvxffzeTZXV5F22cEHdsU3KP3jGxtLehNRmB2jaFyWaJSX9E8zMvcoiHsGNZQn3q4VHDM6isHXvZuWS8B",
  "key36": "36cQrzXtfXXtk58EAa6XK6qemFVMP44FVrEn4sUuq3RFYKejADP8K7VWAcqWUp6bH8ybTSo5hFeDEdRUY5o4dXRR",
  "key37": "4vBuY5PhBM198mtyDQ9qgBDVQNMmmXgxXcr81VrqqraeoFsgHZooN8KDwCV9t7k2SEbexgZAC6csHSGJbQrG3tRu"
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
