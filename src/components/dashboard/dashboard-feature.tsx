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
    "4vKzp9wivoMqUgMqiHTz9tHwBBcYUL2y5vnKQYGQYR6LrpwZPQMHJsGMgsaBQ5ZidJDgBsZzGmSDZvsEoBZDMmdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tN4r8RQ6vvZBD4k6thosotGJJUKjwqcS6eDiSJUx4wk5JXuofCFpjSWFWCEwz9pSqwsYqf4pjR4BCxSkoK3a2im",
  "key1": "5Yv6CVccUQ12HbcsGVQe1PCAtUwutR837298YhyMN9SmijbC3Ed35UWgLVzqHfbEXAg8F6wbL4s38hSi6b3FUYsH",
  "key2": "5r57X693PfS1zTqvptUQDB5v7cScS5rK3APW58KBtvo2K5ZGUgQAhMYmqmqoWk556Deyhwo996jViQ9DDbphXv7P",
  "key3": "4wdtWTTShuUNjCFhZfM5k9XMG8MhnsS2K8uTSfDTmVGs8bMTvsEA4gPfQ4aqbDxHk2RdCWgaJrQmKdsqX7SJgN8D",
  "key4": "3yaPAPVuJp4Y7xbwSyHoRsNLozBhALuaKWVXchj3BjD4AyignxgG5qFwRJfFNrRKdLTmbHEZJaCzgTCYFXhATk7C",
  "key5": "Gne3u4EgjkMxSHLKF7f7CAFbmw1stXUgYrUBCNXG6BxQSvLpnnE3Cby3fKkqjYdC6pXnnFTBJqJofq9eH6SJDxK",
  "key6": "5A9VKuv2qVN3ebomHKb8uW9S8ea9d7Zft7FJboPvbNCeyMKffi2Kgt18pHtZ67ythnTXSiXny3CuuDLmQb6kfZkz",
  "key7": "YvuYqSJ8SkRE1RoxQ1QhDGi6kdHSJcsZPbU7gFqMG9f7Ty6qCWpLRPP8xZG14zmhGjifra21Km5DRXr3yUB84d4",
  "key8": "4Nx1ewfxKPYXxWLe8CU1QBvMA7Kbyt3trFCc6oSe2PvdjVs2NGuv1oKwt8aAUYk9AiM1vYnY4vk93b2F3XwqPEzi",
  "key9": "2ZNL8jG2BWtgbu5fo1vmnPyFfGbsvA4aRWQxMeoeehUxxe3ePZGSVXfzapPC245aYaya35wpTebiSsSupJiJpVMS",
  "key10": "5fAkBgkHtPQR7DbXYLrWArgAEEooFvhXRuRxTgn91c4B5WQgBxWoAg32cwoR7HLGNecwEF8AvbdrhbZKbSMCi7xr",
  "key11": "3ctpynnfVWGtXwy3YiuujUrrZJYGfJ2nav1snnNhbfcwY8DaL29kUAGgqHJthEJM8pP9qakF7iLaZViKkYszsVMp",
  "key12": "41rSnrahwbdFgWjo42rtgUXEQeUHRUmxkjBnSLttHYpZzEhxSF7WTiviwiJh3meJpRkgUWjrG6PdSjG1U8nVMsta",
  "key13": "eukLLb9RTxdJKc2oeSh2i62aUzQkYCBPgg4ii9B1cmc72iKt51M7dX8g9iivSFG9nwMCcXsjGBPrZkUmUVda9Ys",
  "key14": "2rAqVutdSX5WcpQ2BT9DmQDmoXhw2GBqXYCrY13d9b6Z6KzCvt3dNNqvKZMvyE9DzsBy6Hpb351EPYwv4efnXaTo",
  "key15": "n8HMseheJWMPoZ5ehQ8LKz75Yz5MupiwCViF1s8hjmRFPexRQL1DGpKc1Lo2S1HzfXyUqMx8Ra5mXFhT9j6HBod",
  "key16": "55U2cTRKLfwgHnf8ej6RKynYCpuv8trLSgfBgUNrtTPPDPg93NuCnPRBiUHZY33qqGKssmP8zEYGaP33XFFpzyhy",
  "key17": "5UT2tkVqWQYHQjtm5tSr1yfbKAg1m6SuYNNDU7DanBGdBH37qNaGyMzKzPageN5AzgQFQSwQ5PURSMgSXKFYGuqy",
  "key18": "32eSs24VkbQh5Cm7cUJEyyY4MC4n5B5toaRyWAXEBB16i7ikGy75rCwuGv4TXDuG18NAc4LXhChfWzJ2PorHnMrr",
  "key19": "47dhJ1pF2ZtxjMSJMHwp4cDLLD6th9V6edNXYvLZuFvEZhYKve9guTuP8SfPHbmD1zbguasCqJcDspRPxgEvh74z",
  "key20": "4u2ibaqEpVokhCnUdQNr3CM24ki94ctCDdZgVLMJamFxeQD9c2EF4Di3gWTv5sLdcbYQ7kWrA9uG3Y6t9Zt85tJf",
  "key21": "3KHpU8TcDGLu9HsgTz5Q3T14mQrr2EP846tkR9ztzE1QMUVbT9dkHHnTfADrGbnJnqt6BH83HAsd2xrJH99U3nPo",
  "key22": "5tv3k1ZEekonoyDWr1FxtnT3szy6SBhyZyeP54XJsKbPH7JM1HaRwhCeVK18yJVaGrabD4cAfuLZMwdzCKVLpYjr",
  "key23": "5q5MMpi3H9uk3vs9SWKYHMatheFjco71qhFSeiVeAQ95SMJaY7xTzTj14qLF1ZdrdtjEgfyLrCda9o6sByGTqsrH",
  "key24": "51V8qmv1RcH8BTVJz5sMDwLEKTGZN7SBDUVXQ5u8HFXC4MaSzFmoT1HvaUdr4vAwgm3R5uGu37HKqJzEVFosYioy",
  "key25": "2Q3dhRgfbCsYyTKCS3qrf7NeVHETuXL6zuznokggWgAB5s3hYNAu7q9BdRS3pnUmZjZd9a3drtT3dzXr5zt6UgNT"
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
