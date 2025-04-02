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
    "2kwoN7SBVz6RzngBpZfvR7S4MLzMjLzozoF4iVb31aDN7B4cTVW13f9VVwDr2ojoJXGW1HKZQTitkvfeRhExNU8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59q4tNwQhzae5itizgFFWt7bxR2jg6bXJvmBYoDKEB6jZjZT1RPtw2wgvpVrBXid1wUrTAEF6QEWvXMPjwNmFbN8",
  "key1": "4aFy165aAXSazGQ9Hr5zAdb5GZonRx5R7XUjAmSxtLyzwFKbYNA4GZBTKPHmpUxfmFXCHX2kzHbkQjfzbcH36Fkq",
  "key2": "2ynjG7uG3BaZcPmFFXbbJgC8dc15TZKtZTsAJCtcPqLrnrE2UpQGcXy4RJvGmyhYgbHj5y8gGn5yAKmtnZ6k81Bv",
  "key3": "EC3UYSkVZYCfqTLcFt3sVEjkYje8uhDtNJB4kiV2gQYFbcis6M9RUNk7p8ScscfVQdMVEcGqAZjuLbGeCVmLEz1",
  "key4": "51K15G6y5p8Z7ePXRZVSSDM6yJ2D2jBcidfqK7ARbZwjjCDHsbdeL2vyji2hx2yLkEsU1ABT7h9NkATxTgyfcmYt",
  "key5": "5tr9xn5AA9kMKMKCGkR2SuqN7LSGeTuNkwaJn6PfKse9pVzvTGQtZ3aGX3rMJNtxpd9rzvtpLdRFe4viAewHmWRZ",
  "key6": "4YWmsCe8B8xj2MLDwaYhdyj8JBB7yRvN27KRP4x8NchtBeCBTKJRW9PwgUHEkkkSs3bktxhJKwpXqfPREppzq3Bp",
  "key7": "3pSK4VzTdFFA9SfqzgFWWdXStgvj63fP6S2TT57M7K4Fmc2FyZd2DWqPnMViBeabtVuVXpsVFc2P4TdgJGDTXN8U",
  "key8": "3fdb7XgMCrziiDzEpdFJJvWDNTyGe697riyzujWozUwdLXNvjq3Qyz311wH5hTB1iXCacuPjDfj9P72mE48vEN68",
  "key9": "W67QvktvYwazMhb55hk8ak4ccF8Da5db2AMhPc6TpbMGxdBLbyx3Ggg4EQBS4asWS5un3Ze3W2m4ejh971pZeVF",
  "key10": "4z5gkMrpwf7NPsTKT1YmPqwAfqA89hLX2GHmjU6kbdYt5woGwVJvteE58SYzinXy1ycconC3aJWBVfRpxin1H8J1",
  "key11": "5RDdKqEfGa9rVruAW16A4NZ5kxfXQHCgesEzKuNZ3oMDCTaU7jP4q1XDRi6eQgiCnq4KzKaewTPvz1c4s9DLFgZp",
  "key12": "4sg1JkL55amM3ssVos9rx7rv7uk3kbSDFcMmvWyrftrZRzascYFvDqJqLTQTpsKRayBLr1tAvHzPGPUEjGR7Cojz",
  "key13": "5p4jiSNo8nnHujuhfubKnGg4LNj9rosgCXieGbfkyahNwWh24gtyWxd5fXvimLtWjUk4mcYyYBBeSxkmd9MhqUcx",
  "key14": "4CPEVNd1oJ8r5FzE4u2uvgGdGBhgRL1uJ2h9uNPgvf5Nh3jssDeEGc35H2AVidyCdLRj2B3S78PLaXP1QapQSCfV",
  "key15": "3FUufn8Ej8HXmd6bgeXsDQRKe1mLu2p6DG1hFMmbrjFx5vSftFvUDaecfSuatNBM5So47GDbrd8DaGZRux56dsx7",
  "key16": "5AQXYdHoqmqdtVTDJwUENRu7YqZxLCbgWz4mhcEK8eHW2LTBMKuK3aXCvbdThnss8QEkEqgFjAzppxXqEfMw8LbJ",
  "key17": "3oJi3BYHpTg5ymEvisd2jYsD3AHoaJ8kks9Cq79YwLc1fLUgFAGKuHDqxyL3ZPEN9jqKQk16h1sMw78NG3ySZEi1",
  "key18": "2Na2v3DzQP2a5wg3jLRopnpgwrcku4pYue8QVjtxMcDco8Y9VE87q94qBgbi7TJa7GyzDNej4XunnqongNKftBLH",
  "key19": "5yHCpvxkianj63eTX2ZdN7eLftrKZWf9563emmq9zQwnT5FwMnBcqLasWHkKHkZmg4zCkwe9zFnfmLqPLYEBxmFs",
  "key20": "3ZuSP59nowk9oyrcfK4qhnGm7XwEFRJfYKzRy1jK2nG3NtwdfW7SCzHHCfX9w59WvNE7jpDasbc6indckngwXP63",
  "key21": "32mFDCith7vGhwivxrLkmzPrci9dUb3kg9v4txkDG3esTUQWh5cW8CCVNb5kgKZjohWrohT5eeQ8DspZ7eAKHybz",
  "key22": "3YL3brwaVWHeEeq2H1E4pvjhp1kdDY3HjxTa33qigA1mjPN2nFKY5aLRveU3k5qasfRB8okxbMJSGEoRD4M5KsWp",
  "key23": "2P9j1yiKWDfsWExsvu5xzZHFXeQpGUsTXHGpFgDCj42vMr9Zt2YTvabzmzhSJrV2JUvpYV2ByDeXNEdxSpM2BezT",
  "key24": "qKqagXv9GrExc9UwqFvyvV8SUacGMXLDnVVdHnSwtrDfqWyaQk4gjvLXk85sob7jMRo77AeSG1hsttCFkdo32GF",
  "key25": "xdWGcpAm68fcVp9jDjRGQi1ySsFcjXDwxjbdJMhM8j85hESfqt8rV3PmMKQhvnF9vmdaVXgZ3W416xFsSuaxwe3",
  "key26": "38bepNmzS3W4fWujkPnuyeUVZ4wkDDnPnn2W4J3i26mV8xjVUKE2VPVoaBeaUwnCoUs17cCBBZSUi7QgzQWTBZ1D",
  "key27": "3uvW1hU1wVtCpKxA47fxwLRn1Mg3zZQaWuicyZTs7uocN183a4SSBFSCtqi6UBY6uigK51HQo9P6fnBStT9Qn3jq",
  "key28": "57XRXbfLXqaYzZAJTdg8jnfLxNbMEZFyhwEq8FQCPKhMuRSKJHhTNzRXo4iyoE6rnHmKcEyY3LN6LosZnFftHehB",
  "key29": "4Lnci9BE8wUdVYoxk9rHCYpNKHveFJvMyzwA2H9U9zzWK4wVomZEmRyXuonh7ckAzkF1CsbNdLmZsEoqHiP3U7a7",
  "key30": "AsjRtzxiwgknP6AvnZLvwxobmHs4fa7fffNJtH5DAhH3xAY3x9faW8bBMwfiaCUXf23Rfu8JT1QETajqDUYZRuG",
  "key31": "YjovZnGjehruZy59Fj4oz76wmzMhsqWMxb1mfuSDohEg77xLxBDU4cRhjzRvHBheBRNdDCrtrS1yYFj5PvXhPhB",
  "key32": "JiRzU9PUHyXAmbtL9AnyQ5g5aKpXvpgH3fsfzFzyBu7zk2agKqCVMLs6ZDuZhmVo82XhEYuxBB1aqZCdN8e2CtY",
  "key33": "3b8xGPgC3nsQMDh8JRUiev6LxdSFWGn5cwc6mVZYR7nxM9kw2w3Pua1zgw2NTPkJpYW35oYBbsBrjEzJerP3pHVY",
  "key34": "uXEWfPz8Uj6fTnmpLgXkaaAu6D6VQJb3NtGXCePnYdbdCkAS7okxd4gu8oDiSYdSUytaFCGFjLkF415xWrkwLFr"
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
