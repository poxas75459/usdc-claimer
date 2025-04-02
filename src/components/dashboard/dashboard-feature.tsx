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
    "hoUqFQqF3ZwUFfz3AF4kG1oTmCKjYcdt2cyUc4WTsn9ZxGTG5AJj3QBSgkks8ovJNWfobGzfRDtq8uvhYx8GqjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSRbBaz22VCjCSdPQYoSSpApWAwhAHzJL54AeRe1eVaoKpGaeLL235e5Lo4ruqKSVgDjYfU8dnUk9gmrgjGPdXL",
  "key1": "5fz9JZd98TZXAPjbQGdpDJeE2R5dqHdTnfpeWFXc2fMNxUKU8W8pERUvuqGFKkKCFNB4Cq5jPNvRfskcC9aNqKoP",
  "key2": "2fvzZ7pB12fYw9FRu4JsAB2we7BaZKPR4CyHgkcWaCSpc6CiUAHH5D9eiXoMHhhPtVbdi6B1Zg6SpwN2F1e1729f",
  "key3": "28MGyYPzRbVzaA4pGqseb8kyDjU8HhKXQnqrsReksfh9SfUyPJc79npaVuZPn8Ppix7sUs5s7nS24QGXnppGv2Vf",
  "key4": "2BjzxSKV9uYVin8fD58SW2ZUqAR5nrRKG54cEVEfBspkgLzHzbBnNgB6pgiC4g71RKS4qmtDp8Rcbvm1sTWcynBX",
  "key5": "4Ga41zjbNrYf62FVUjeXW8h7PfW4aCBWvwpmak6RUgfoT1j71xcuGpfSJkiBVMCAPHZp4ENRAvim2LQSitKuXsHX",
  "key6": "3tWihAXL3YPzmQobC9hyYiNAkVt1aM7p3GjMcCAMaiJHYdkmybXPfDYD8uRY8W3CXvpkpZwhT3TQ9kHwXwFMnuCV",
  "key7": "3mo35CEjqghqv7LL5xZncwXbWxCajJnUXPn3q5R2Wfq3J9xkN75e7xqSbhVX9NaNBcM6NuxCBUJtMoGDhTNfTxy4",
  "key8": "bNyUvK2vUKbxzEcpKi6Z1QVPxrACwB6q8JpWCCe851nNd5PGX7J2dcjZJi3VbVmZyHdGUYocaFjXqj94TkLFwK2",
  "key9": "4T3z2ED39j8xa4dvkPEwazedoghwUdaZfbp8iPm4WrUJJQVm5sAyRcxgyrd24gZEnh1mzu31rZkDQ1g7hHeWJM4o",
  "key10": "4gvaRKJkFSnWAb11YDe7oT2dYuMWV7mcidF9izPfNd6BauybLtuEmDahCA3ouoExr6ffVqy1o8osLABhgJxp4rDG",
  "key11": "4ubvh1RwtTSSSMwiYAeRmtme4Q8rWb5oWJyyRBBvTJ5mBp886uzGPnx9zrgiXvQrfKbRh4WiybTM23X5M1g7KAuC",
  "key12": "ZHiJYb6dYbZ78Zn8M5As3RGhxHPUxYXF5Pc6ASDUkvLMWF734GPuQFGsTEP48qkwbnnRFqstefXSHSG9iezyTFV",
  "key13": "GS6EU6kXa7EzfLjwvk9RCTCLjPYE1rGYLn3ALHWSqUWPKcicvHUTPCF1agwvSGViJDv85AcpDdk6jGy3GLHrtS1",
  "key14": "5kHKHFBkPsMM75R7yDxenBcS77Qc8kQ5aCRCSfUKfLFkvLgfgA9Jmch6wbCtScRMmRWRua5X8bwgQiCS3B2U5sLp",
  "key15": "4QDxuAyqSTKgjArGdye74kK1zXxw13SQYZahPZgs4ztr2C72g76xnR6wNPwkKnzifo61dyHe2Yodz6QrUP25Xgf9",
  "key16": "2kuWVSKY9HkptFHTTfTtVvmkTUxRswDFv4Qf5ekUp7oV6QKe57FrZoKSVvWtz4GGvVERKNuwiNELPaDvZsxkV1PY",
  "key17": "4GSLFcACmHBmHvPKrVSEGxrV1mxgC2F4R42u2wecxoMjDbi5pUNjtmn7tFBdpyFD9zL7AkFjEzRJAY9bK7aEqtvi",
  "key18": "o6Bgb49Q6sKLqVXw3cMcCdF57Qe7Bf6fQCWWGDsV43Yv2uW58pxiBQeSypGMSB4hrkuVY5ns2CeLdCUcchij1Xu",
  "key19": "3qRSLpgAsB1m9mbx2Dmb5heei4aMDvNC9JV4B5Te4sUoM1UbY9DF2GEN9Rk5k6bHmtyBYAMR8hV2m6cQgG3LuX1e",
  "key20": "4RQwVApLTKfkSCWMGcDnV5Bu1dXLwYVmz52fSFRL3cts9tubtacMcN7kQgBpa3xdwn4b5adzKqp8Pkghfuv5WhTo",
  "key21": "4gnsRktDPFaNuXMhQt1tcbuNhUK9BLzVU5WG4dqKTDeKpCKCQz3KpTs8shJ6TBBe1tVxZpm67gNgn2jX7KsGcrVB",
  "key22": "wqWwMEaPDAAGW8eZkvpKXYq2rnmpw7ZQCcuExQPfmrJuqZqWTwimbdUXjEdEntXX8NM78yuLs6vcNnzeJ6SZnVc",
  "key23": "5Ek2vg3Q3aUU4rwmcVDgcaZpbxuyb7VGLv84tgBoHSv3E7KKkqLwQc3qwXekirLeJbQqPnHV2aFjmCaohpavwPRa",
  "key24": "2hKVcRBtBhPif5rFfSzrt9DZuCHLJxSoCGdiirGGP7ZJH4sbBudWb6UWQ56oNMhMBCEGU4XCoJYJFU86VAnzH3s5",
  "key25": "4JVKFArvBMobZe7iibZkt4jLEGUqE4KrDTCezfkBoXF3BFPMdPqisPXufcxQEy8TSFvKHgEwXHd5cJzekLs79UNL",
  "key26": "5aoFh71Tj25SWh9SXWoUdeChcxsD4Hsga3zSSgA18bdd4jPqjpu4U8kfJaVZcEsgwwJjp3cyTNDurHS6ttfacTMy",
  "key27": "2n3uM1rcjEhq7tqPqqbcVqfkMzc9hrFgYnZoDSJ6z2AciALeF1J2FnWXf571RLGDU9kB8ymXs9izVxMEwodyqJg4",
  "key28": "3BohQYL3AHt3ErmAA3yEQxamUcdU2xxxwDiKqEXEg4oZUFJtNRg8sHfMfc5vNpUfoR8A6U3bpLdpDZNp3udNeC76",
  "key29": "5u4EZoy5uuJmjLTm3oqZ2BumM3PFSS8tS6YSW3ADE9zi2uzF5aNWZwp2opufZEHgPcKGPCQpKs2nJ73TvLjA9g11"
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
