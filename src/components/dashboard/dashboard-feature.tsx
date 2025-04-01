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
    "2bVXbHf77KErePCzkQcGoqpJiBFB3W5LBiVMKtpuaRWPViavHAV4SithaJut2tBKHMTtF2morJgWxvNyBvt9tYoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31D4qixm8oXqpH7H4HrrFkDFYu5eFCsUPUG3unoK8qqPiA7xLoShyrUvUru8MCVpQMUkiAgWdL1GFYCf9YpVxd2t",
  "key1": "5CZEtErfeoEc3ZLfyHhmbxt1eWmCNxdYMVRm5NWyqhHrG55JvVj9mFu2qZQmVq8fpk8DHbGKcsoha6Bh9Rwxffep",
  "key2": "dAaX9q4Grfa8rRqjtKMpsxpDE2fCSJ644vrMyz6rSsoJQrieq4hVpsNheULo86TrLPHUyH5bFkuDHtuvwnxFYXp",
  "key3": "4vQfWDEYD4BZVZCudRnVoF5xDP8VL8mUZTmvBAqozGVouRje9bQG9e76Dps7Vs1SNx6nPaQTFiZC1he6TJcdXQk4",
  "key4": "2584T2zLFrP79kq8XMsdoGZFx2GLAQXZoJZjy1XxAJPnhwhbFJYyZoscmPncXF2C4oKDgVH9DpPhFMXfboWXPcYK",
  "key5": "yS1LEti4N7DNrukznquna2u6Rk6GPYkXUzVHcAmYZ9R4PGdLrgqktS1CjhQfRGw2ZDdUFDKzNaukhU7AWH4tAQC",
  "key6": "F3hrzUPnmL9yg4BZ53KvzHe9KUydXGohPV1sBAz3eBxA1DgNreuyjuzPqGsWL4KhFKiypg3NbxCo1VBn8Jvw3ps",
  "key7": "w5wTnFoaJZmqAWRQJ9K1GhcSPwzXqcYm7uwopuQ1a2erCmkWPZsPCqzX7PNSiFW4SVWdQBcZrESWfMTc3XvT38Y",
  "key8": "2yevkVhEwDGPXV67LDwkRTDLr87sXtgLS619CCmTVWCB52pQnpVLKQaBVsmVqq4RjS4gQpo2raiWNVvhjDiEf4YV",
  "key9": "HhjNQGjKhKC4mBUeq26Un8XKS2vJa4NFob4BcAhEzim2tX34gWxda5AEWaSoJ4DgVqVmb7i1LLYbRbi7FmBdMZy",
  "key10": "Bg28cQhdCTrA4QZFtZQuuS3xw7ohkNG8NXJnZrDFfooxCCcUwHUs4pPvq2gjLHsMVcqyGRmGdkYwUgsdKJHZaGg",
  "key11": "2dXSGhzr7GEcuHx8kZmmy9Soeyk5VFWyT3dSAC8CtCu1Z6yoPmDrAnysgaBrCCLXRFTWHoid326g3i9aRYS8wfH",
  "key12": "BrjjXYTUdTUDjCRoJ4RfdyTBACnYZ1NdAqbDyC8RgvbmhpXg17b98bVr9EPbvbEBqicgM8k7WmuZ5jWLCc4RRCE",
  "key13": "3iEaKChnzmSZyJPHkxRfqo3PYm6GR46KzjvBNc79UJi6zG4KNRTnBkuzoezqV74bg66zYg5bnAH1iGLUzQeceeTr",
  "key14": "2aH7eNPQo6c4tzFng3cEMy1inTB27WQms5QttFCnDzXqKLo9zsw1DCLRTEnqdC6GMjwFXyi1wU5oZyuFpWiLMWbS",
  "key15": "4vhk8Do2V5HBYXocvWbBf8EeAGgWWdqgUqNviQpiRA5THn4ZBMyeh8dKoXifKLRHce8uJ1jtAfcojQbcoyaVHXZp",
  "key16": "49v1688snCvFeaQstY6L2iCU5WaqEEpCaBNdXtqV1VTUcqbs7UdVSBia9m276SxhWeSrdS4TQGErnhe3RiJiqVAu",
  "key17": "3Mrm7uVRsxbt5v8pTmH6WEuNsJKQRkUwb48c6BoNjrXEGbAGUa6AVx8NEyJKPnpUuU2FgG7r7TULLWteRiKa7i5W",
  "key18": "2bwy6Par9a8o1M9qQBSdwk6jrDL3qcCM7zWNNsT1WL1xmRXES6AgewoX4VQ1gzmKeiKJzD5Y77Gy1PGLNGVbPzdr",
  "key19": "4AZNbyH8zgwHnZh4EeJF9JEUtookogRuafvksrxfGTAPiRy97zzhXqcjvfJFV4RZqMkrbiswDBiS8PuGUpR6SjnK",
  "key20": "3ZpC9xC9nQGMaL1bGatJHrdFPAtd9XXvwyMEZn69HCpXPgGEPJPiWeeRw7rVCtAU8k5TYsNp6J28iC4QZWLUeXx9",
  "key21": "2rHX9P6VPFu4fQfj9PZicqSaEYtHJknQ8NrcBBQ3LVWkdSB7FrSZRSLo97tmTcV373rPvTUZt9bRFmkyipPji6k2",
  "key22": "3XAuixEL1SkTEXod9ceZpXFq2UXkChWeKLLyfYTua5XtbDH8TLwNiwvua9GaoKTGaVR8QArEHKFqFUda81nV1ytA",
  "key23": "j5xmnSmCYkpnsKqkU6G9756kfmezFaJpyE6hMRZCzpcrtwEoy7Pp9oZR8zrBWAMX218UgK371fZWKoqHo6LiYuC",
  "key24": "3ybwNt81HmK4dD7AXjZMDrPCLVtZy5JTUPBCniDQD7enBqawqPwEyHUCaZTPK13BkPLezHrepMDm5njPqShJDp85",
  "key25": "M31btbtdUZeE4gc43JfpjPAhm8oX9QK5HgEqEFPajYZmd1TVrq1SpFvVj24cXqSaPZXbG4YZVT1sg1frZMqYCGs",
  "key26": "2ZBS1YQPg3guEKZmPLKggN1y2jS11Q5oK52ifYkmoak7xvxYhJ27bCx9nt7AwaVoPUdES58pQxUAQN4QnBF2pmeK"
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
