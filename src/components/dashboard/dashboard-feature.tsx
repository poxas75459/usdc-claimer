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
    "2yCd9mKyKxrVuwqDWmjSgbiJoWrJBVewHwEn1rWGnB3VZ1TpmMmBY3L8nRdotNXLAVUMELqWTR8pj27RaRvkdsQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqBqK5K34gtUQfx3LoyeRsb4TvQ1H4GCQTzU3yfFMnsMXnvZ5oMsZgA34geoJ3CiDBW8L12UeCmFLg9rQQ3ExLh",
  "key1": "3Rc7UA3VcXrjC4MShM8vexRyDcfJqZ9VUwK1aLiPbHik7K4hGpxkUjcdYAhLSXTYS3RpFWwxeMZgd8NuoAnMYh2n",
  "key2": "3XGicWkMAwiSRGcT7CZUjwv9zoyJ2548ud8px8yD7boYKeXB3vcX6kPZFpmAQbgatzkYS5YcKMXcCk8jR75TnmUk",
  "key3": "FQnM8E5mqB8BLA7kskow5AyDDBNot6qd6pj3jyYAYMmoBumPv94xZ2cNgTRUqxB4JkpvxU6eSnq8w6aZEAW8zUs",
  "key4": "3bfx3sjHb5gaQCsVWcMEfrrk4zJ3DTVNVbRUEA6YQmDaHXTU1CVUCFVuvjf9cMrf7BS9cDSrSKupwH7ffntCBKyf",
  "key5": "59n8h9Cg5kEpy5qUe6daQjVH5bVe45SUcCvwXR3SQ8uuBNSQbhux2MyW9yLU8Qeon9J6RDNaCLy12j8qdt3Dn6As",
  "key6": "2wuPVJRucmmVyQL66P3Zh97z7RroUCuTfCSR3UhE6uVgZXASKHRbUv1X4VXShTDAsMrtRNkWVDDoMuQvQftbnbTu",
  "key7": "5Jibo5rxnjAT4oFFyVYn1BXFmTwmRiULnnqrB1w4AYZbA8oqQjmu3tTbisrtTFTJC75JrYVtgudpMhVCbdzB8kJk",
  "key8": "5D2DeraicWeWcbxWwqoeAa6CTd4bM8yMnUFdPPu9jjDZnaExwFq8JAgnzcBTEz54ixPJ89Uf1hwiR6QwgmGyRiXw",
  "key9": "58r5YHGbYjqBuvWYBPnZc6qTP5KtjxGQbFCqby1mSDs769CUA8WLuvS4kTArvjYsCVxgGhhMaYZskKurWLUD25xB",
  "key10": "357eNRFNmV3AiYWSrhQBTJdq4gA4tjSrrt9EEztxm86tYGaG4XDCfnPqb2qNPkz1wFA51uDeXzTnxxKmtcco3Frq",
  "key11": "4tRoJSB2HtCSumtVd6iBsuG1PXivCNiwG8mjTt9CZs1om4GaPVj47yTQLurC8CUGeeNs9gyExmc92KLWyopTWFQQ",
  "key12": "61nij4kG4MAtfZoybcFv5CT1ET6wbWycxTuZsbtzsUiNj8RViJdPpURg9b9R8xz8vVLhCyUvYUarAUpT8mYBznxy",
  "key13": "3MGsS5EtouHSqgCciyfZ3zecNTqFyAfsih3ndnhye3PF55cnboixGh4sEWubY1ZVNdZUJt8Dj8WHsv1sgzDaJYEg",
  "key14": "pxDPbaDXfRRoFiL6BXuS5n2tjNDbDBR9e3DEbFvJGxpRMJhxqbncrusnGpSthmZkGcny7XEPepSrx5p6FqWfnRT",
  "key15": "4CyxFifdKmwowHzrGaGcb5e1AxKG7CF7yeqqXSBSikizPKNzpNZY7ML2ayCN9LVajX7QneWQBQjuf8Ds9uUJNxCU",
  "key16": "3S5usx4JdFmrTZuKdQeaXnFZ8V25mtwtKhZG2ZuWDpttKNxPeM6jJjYZEeo54WY1PHx5WUJQXuRRHkSD9x6LfLRu",
  "key17": "VWnX8NdgEYyXgv8JUrDZnnbyFwCMib36nNUCokcGgpzkmTq4uUMbJWCqeJ8x1ibY4w96eY6nfBQ3M6Wp1KqNks6",
  "key18": "3tVFn4V56sutrfEVUqbNprsKW7k9A9tjTQPV78tNtwrYNhtsZogDPejubY3HQLbwLDV3B9FpPi5LgE4s22L7C3cN",
  "key19": "3D3Ntsofn3fcYtJ8StGdUifCvnjYe86wjkmdyt5LGz9U18QJHTtjNWEnNzV27j42UqbSfpuhH1px3Pf4E5oFSMYu",
  "key20": "61ShwZdgUjWgwi2N34BXbGkWxsKPpiKZ3D7mPvrtqC84xTr7dBPCmTNjNiayaKfp6FYAUdR338h8zhha7gU8qEcA",
  "key21": "RVfu2LCPcbergyXcg3FA71ut2ec8M9gNJpFqrwX4jCGvjt9eJyS7HVag5ivQgZ7jUnLU33noFYQ9Fjam2aHGtqP",
  "key22": "55N2xA9NJNSMZ1zeyCZJdkPCsPvrVkNgxwrjFXBp2nsKczk7fPFyC3n1evWkittan197wmVGFnmZd9aYd8Ckvg5Q",
  "key23": "4sC6iVpg2Un2ZVUe54xQiiKMNYuuA4eHBsyrW4KnVyppxztpGBHBHYuEDVgpSznBqn3tCkEYVuAJxGoDx9B8yhbK",
  "key24": "WJ4PeRoS2SCVq3mWeWbNyGmZPyUh4gCFBfY97E3hwmywFt7knPwbcQUG8W7TQHjr4YvWXhLz2rLgPKfBLkS5PYH",
  "key25": "5Y9yF5dJCBQY7nGp6dj6WuSQj7ZCTVF8Ehz6qACHTAzVxsEysU5Eh5h6X8Y2ShDK8U9RdD8w4D2jZPQN9cgZSgjb",
  "key26": "2gxcbv3CbQioq4p7xFrRWD5GHVY92Xp7jyfymKQzwqHeDKHKMvLGLvojQqJjgfbfAUVditPrSrfJ6fig6181bVnP",
  "key27": "28UuXZaVJaDJxTJcvFSdJHAsH4KFJ1tcBjxSsacyKuvvVUKwfc95d3o35NSb5o2MFvgdtJLwJbmvikXSnLN8FBpp"
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
