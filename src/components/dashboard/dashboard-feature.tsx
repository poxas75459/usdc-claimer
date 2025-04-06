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
    "3gaV2ESgdjWCTC45sPqoVDYQ43S147iLAzDc94x1espYpRwJZF3Q8jxAj4SFJcrnjtLuoXGVGNzmrVJ6vR5GiGPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPQNjNLFmNc9nynrB7sn83BBAuqAicbMQnoFJAKFHnj7WiAUSEqpFPPq53duaNFoXmC1vhm8GrQCzQrvG85BnzH",
  "key1": "64j9AokbxE7biE67RtoVJgEAqusJKFfg6RHuofhv4RjYh142o8FGyS5YKPL3p5vCXHM8pdghUy6G5Auwz28tQTHB",
  "key2": "52vSgPHetKJreHatB6p7qYwvyJNXeT8qt3BAoty4BgDj8TXaXRzVMQPTSJXyt8E6GfhB9od6cj2F8q1CDoYK1HZt",
  "key3": "jinZytxMn92npK9tEASfLAecLFt37Uub97bjfNYPaAkUjMmnjmRB7NXi52E2a6C8CtX1S1LHHfgs4V59idHGwx6",
  "key4": "5TPuuG7PqjzodMoF5v5ZuhSnAdAEaDUg4K352k3QvSWDUwHCerRMWqM198KABCXyURtZ4GqDhnaUvUy9rksBtnof",
  "key5": "5byqD5xt7Yrrp7LNpWuKNUmRirQWG4t6E4o2kcPh1g3eisLtkCydiguWr8PoUppFCniiQYXWqYjrAubGQatWfsca",
  "key6": "3yb7ZwARhJqbC212PbU24fb656asCr46DpxdhXDLoqJCS4DpCYYSuXac1nMdLp7UQ57VL5vRE3m9KCwvhVQKdXSP",
  "key7": "4CTU9HRVDJhzDcRgJKWQn2zXRmhRsrPY8PrMbeCBr4b9uRS7n7zpXsxaUk2VezvRTXqATnu6eVzuc8k9rKLDgi2h",
  "key8": "4mQFGqdRcwShfqSUY8XiDpzybDBsSHyuUArW5GjZ16pcSHcT31bJbo6RLUCCMre276DxyceWdXeCMEP7KvZ8dcEX",
  "key9": "3dc8D4DuZKmTUKrXfWvQdXWxyLjpeArfDF58KwMQzadRDUKLvUFJtDX2oAeNZR5zT6w3MExqau4i9GdTQDkZ3Fze",
  "key10": "4dhB42LUqzno5ohDLNiNGjejX4GEki3JipT4uDXjXzG8HHuvwpP9mfN1jLBDBWb35z3meAiXasU5xim4hXcdTT5g",
  "key11": "4QY14RoK9X7YHCCHLY7zWBa9Wh8GAykYKbnizDAamy42BhzK1P3bwqfhymgS2no7N4NohwoSWm1Fg1aTEnEcPPgF",
  "key12": "539QejMyBibKr9dzYTdkJ23oXiwpJbfyMbWF94kjRZCFX349SUqaD8T4Ja9epXbeEGmtAWEFjcYhb1G9x4joAQEw",
  "key13": "4c8Kd21RgE41zVs6qUeM4rcNEtUtL18cFCUoJ2CsC2EDvTqDQDbQAaDGbegA58zvT7Bp6VuRQ2RxEWu6wtVgmEaK",
  "key14": "2GyANDLjvd8xHJdgmCgUUsPbbe3jVBHPJugPmonGHddNshkutBu95NMB5nqJ68E3foE3eLQ5VcsoVdYL6ywvCYou",
  "key15": "dhbGnvUTKHvfZjVtqBkbuQh1HGDTniqyTzVMNmhPF5dQ19tfEcd6QD5ykmT2D24dHmJ4qHm3dfgumio3Vu3MXUJ",
  "key16": "4ivV5MX4mg4WYie7Em3xQk7xS7Wb3Eba5qpx8njAXDZbmxPvFemvzA4fHz8mtMCorMmQ3FXwzin4h2Wu5XD4Qkcd",
  "key17": "5H95xvaDWKj1cMix8ic8wyTQn4HEkxdwoSrwYQ9Mx2hZEAuZkdTYu1vWMGNBp5YUpLmraK6EK76Sayt9nYj6idUv",
  "key18": "KD34Xdu18pCAaK7VYmh7aRE8BHWBXLEXpdiwxWQ54AgaqXaL81vBVb6dzSRkRNTWXqgzEiMekxHMLUDTFHXD5xK",
  "key19": "ec9BQAC7yM6PMKGSVvHmQzLbd71GBFYTQeb9JeqA7sZTC9FDx4SEwjRCoYDLEianPx72uFvKobo26PeFbb2DQiB",
  "key20": "5k6EvBTChHtN6rb2NEproukVQ75CiQgvfHcWP7w26A6XGnP3NPWmHuyi92PRfMWABmrk4FydsRFa77wpKN7N6nU2",
  "key21": "4wexkQwQXWz6hsZhxTMKrSwtYFeZ9mdME5uqvmNGin4FGTmdkggN14YXdRC1HREAbYS4EA9RDS4LpbPeC3wqfT9Z",
  "key22": "3y2BmRHqWYCDdMoatH3Pwg6Fq7Rz2Ap4XiW36ds3uLD7PF4u1UXnLm67jkZYKCN5GqSThW8mYRz3dL6bn7ZQLqPa",
  "key23": "2fmeHyii8Z1ZFF8CtAKWTvnMKRpkB6nKpxf5m1BQYrMHv1BU2GyBZN1z42vQXSDWLA5tURhExyM26xEmrPeJZXaZ",
  "key24": "8vR7erQbXeRrn6WxdPniWvtydhNVJMJGcEDVtBo6TjSFHNQXD7PwGQuVY6fJ1rCLnjCRXmYa9dLmiRVW4AvMztR",
  "key25": "iLJV4pQzWbHRsuFeuGapUyqKANFA1nfefaSNWXRJXiUvGDVTFuyBeXoqUTWXkRpAj1Sw51Z6wxE1fDoD8VZxLdK",
  "key26": "5wCFujodxu6orB5YfaaJGzA9npA9LocFgggRJVynaC3eRCnLZxK2BHWQmPNxgHGQctUPxzf7Zzrzw4vBmVMtZzFg",
  "key27": "2BiNKwnBL51RSsM7gWhQTfHSQxcYyQc2dPAXdxbo6AH67GkUsyQyLtEVn3bAmbgpzKp4yx9e9BGZbUWcEdTG2jr9",
  "key28": "3SRk93NKLdn9FJqxaZMHBtBZ2f26qaQVqXTWQLTEueXD5kCpaHKUs7NSKHHJEjWncfMgiH9Jm1fVhsifcqmBDxht"
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
