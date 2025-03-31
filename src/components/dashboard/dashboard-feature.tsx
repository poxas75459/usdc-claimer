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
    "4ofgv3SDsySHBRuQK4CWn24cPwTtUH4CzqhTLeuSqDGCD5xUCueMBDyDNsXZkHWdUGomNYbDxFxrumH9pdRhUJ18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ArQqhZPQMQXWkGqg891HHuanm6yMn1s4LrXRV6pQp4R37nxcS2F4cKqrd2Dopu3VyLvG4QgcLeywtYWUSVsNLbQ",
  "key1": "2fSSEevDGb38zcdTDhQWo7faRgMzaQCqSaoGqdGfQ7b1FRuLh7wz9gvhTj8orP1vBkcikY55KDMNDtRArFvx5V3",
  "key2": "5d16FUpk98teDEjA7KHs65zcFW72acMu6zwWekzMLaEsTaxgvFKNp7uD8MmJ5EGwvYrXkwEJzBkzE6xiaWJBfEPu",
  "key3": "3VJ6eSuty2qjkp3bctK8wo6yWWZyrEUdmczudBbneQfrfXnbNXZb14xWwA6EW5G9dWHBurcE7EcXnKXJGZ8qggbM",
  "key4": "5dxGVhhDZ25tKzQZnpCZZ2DFZmoVmjfAFEiUSXnRTSPZXpC1bvMnmUBfue2JmBxK7iXKKmQqnW5p6woqPiV4Dbm2",
  "key5": "5eqaXodE2XToKWfwAHDivBSyuHYnCdREhbHsCsgmSRseLDugEdbwNy2njtyFMAz9tdBBhfFFgL373tSoxggZU2bG",
  "key6": "4sqeH11Sx9R64ueZZn3MPzLr6Yce1vhkXCrW6rPLcfzyQtQUtc8oH22RGPDTSDcuNwSZ8cgJr7ZAVfmtADZLFnvr",
  "key7": "2vVyqdZFoEEgWFisbpXCgXxvfoEcj7qksZDkBih8RmGGemqf8qR9ZvxPpRxLJoahHhgbi9w94b8sz6SfdUkjucua",
  "key8": "63anHVXGDGKEG7gKTt4BF6Jh6sU1qFf3CaFb6WR2EySkvGU4z2rvj4Z9ABQ7VNdaxB4r15LCGYgwEY97HXuCZwVW",
  "key9": "4MdTumSYe9Wtv4ChBPFhChJYwwXDfofuK6YiMZ2fnoFWx9F8VCNCcmNd2kBmNwu4gXQPAjqGpYCT5rDKXoWADkrh",
  "key10": "5X2EoYZ7ZYvmkqbcBgJs6K5GMD24UyQuHMNFq1VqZBvQFspEUoscQ6kWSi9fxt7YBUMhcT3yStgLpkJyxVGii3DH",
  "key11": "4MYyRpifa8t1P9iybtLX84VVbX1ewLo9e8F4D9qBos8xYsqXSoab3GJkS3roXKq11s7oiKwm6cQ9cttDccdkhSJq",
  "key12": "2mcZc3M2ZCSwD4FmoMKZZU9Z3emNbUjS9SaEJcGpyrZBimZ1fV463Ji3tsUDKVJNPNFQy6w3Fat72nssoQimWAWs",
  "key13": "5Nx63kufkqeLdhwXLJqwSrR4Lsb4KPV8hJRR9uNub9qGH4sgtmkkWjxpuDt52V7WUD72z3yZqQHPyb6ZtuamkqhH",
  "key14": "5EU4EZ7Se4DcUfj4gzGKNsSpjXT4GMagQLNybrxhxntuSGrZ152n6hJudGkqcM2CG3JEGPU1mPDrCCe42wYLhdry",
  "key15": "3WP94AAQitNio1ybXGd1hUcoNJUpY8m6f8wry7LW78QHGw75WqNmJPkthQb2ouK8Rq21uhBNWUs3EY84r9EUxsrk",
  "key16": "3CZXWB7MU9rM2jru47gE1eeg87FghPqZkDuZHX36zS1eCjjtGc9Ye4yCAYrv6st47ayyKEDBs3T6R2wR6HgRNmBE",
  "key17": "2XpdiLH3BpQeNZF33H25fDYGc5b65iQammnEUmRCuGZvytmDQtGgJSjCANBEL4Z6qnDp2RWnUks3GC7NMkFeA8Nj",
  "key18": "5oiLxzMHhsTYQMVnQCeCga5hXcq16vBbH7chnJL5vXKcXq8kD73Tx4sPHkpbkVrksBuoGw6Z7kELTLRyVf6mKwHX",
  "key19": "4ZRdbxChZic15Dziw3uZprj1gMxyQKQCkVKVrgSFMkncRrvMSJugWV8rUxp7ByqgM4TSeifDjHoYZSQZfWKiWKvy",
  "key20": "2WxibvQfDjDmMPNe93a8yHgHmqJXDr1grGhr4cztF9gBtBSc7eF3eGd247yYkk82vSUXH8krv5HxEvqTbPqjxPWX",
  "key21": "5uYWst3wEukLFL9GZju6i6Kn3sEJQf4THfN5L1bff9tdt3fP8c2ckR1H6vvNYBaS15dQayfK5HHSHfEer173qvFM",
  "key22": "4gzFnzjxB8VAvpsX7qRL6WzrXN38LvPhAazsKPq2e7oZM9eQULKA1XhcbysK6UuoUNDmzU5bHzKTsywPPQLQcyFd",
  "key23": "2hRXAvTxBKmVNBpHkkuJkk5p1EMXrARzemqyLp9G5YkNQ31j67yay7ET4aewqc4nuHhouvnqG4rHaBPXfL5tNAnK",
  "key24": "4GZGix4w3YpQsEDkWEpe7LaC1bW8q2Nr9ArXKXNqP1UXQcSyJg982sK5JDgehY8jTZprVjpA1XXLRyTTRwjpfzHh",
  "key25": "4FwvzvFCMbd4ZFbANvPCw7fewv8w4uVx35767thXKQY5E2HnA5wWUNWf8rXhmxZuFYXQGxXEyx5UFHFL42Uu9gMo",
  "key26": "4eHiekNwmvZSCYKYSzzYdhxdzthhzWpxUeHXH4UKg5BfqpLPS8Bj5uAtHm4NpjM3tKi4azx3RtKheTqTL6mpJrnr",
  "key27": "4ddqeATRDC2SaNMAsoSLf3frHMBn6w5bdztYeJUo1ZwtXM6AZkT5GRwUjzTEXbvpXTUK94EcYK3wKybcWzBSHwtE",
  "key28": "4kEcPKkQoCKpngMLY3AmPuFNXxwYWwkBd9FuVz2LpQswzgVwRC91rbTKT1QEBp9YDDAF6dP4c4CRxpabRHJzWCsE",
  "key29": "2BmJ7Sk47ZDmN6ACdnTwopEDGaiYfke5JHxpn73UL6GcAd4jbrw3Co3TSxdB99Q9HqS8GAzkPWmVfVsbg1qcRXbU",
  "key30": "2LphMhFhi2DeWDArLEdg6DEFe6hxm9jcUaRD6ExS8duEoGYcFcFFHHzeUaULWz9pLAzLK3JQpN4XEUZmVtmuUe1e",
  "key31": "62UopJpPAxRtd9XMiCsXvbNbEbdEBHgXkoS5c31EFU1oHL9WUr3XDbPVvK2drxEwLjM2PGJJNnqP9g4vche7f5ar",
  "key32": "4yXEFLt6ZWmnAWUvQWiU39TVfcww1v4khxZmeM6hwh5vhSXEHvnWUgxcc4VFJHcRFnfwecGPWHp42aVva7E7i5Gi",
  "key33": "4KywRDLi9wBU7hiFBnvtEorr4AixuHkWThzxuDuXRoMoRHTsVGAWy2emMnjdk55xgd8RZ7dGXW4A4Sn5F14zPKNc",
  "key34": "64Ydg8bpsGhwDaHwDQVyvtWDEQTFwSN7CkjbNKMvLAQi1XtweKrEkCadVYtEgFAfR7YW5RePQcHjsrW2QDXTfnAt",
  "key35": "pnxQVGSAVvYdcCcm4Mf3Q9JSCj28EK8bDgQKe9481Q6V9x45LYYzutcDNAsohuYW95S7YHNARBN5He7xZKaWAgH",
  "key36": "5mdQaqB95vGGmdPhAVsTnnMWEoNUP2FN3m4vtKKuNFMrfoKmfbJ5Ep4nib8ijgXgTJCwxX3ydGEGYYKYJRdakaFi",
  "key37": "2xAPUtPkMtMUNNmYrrucHphA269FKfAixuhFaFDBp7EhVzos69ZQAbkuMu1wAfAkYCbZZKz7iHTGCiWm6mXGpexb",
  "key38": "2F5DQbnWAyYx5dpp3JzTLC8K9x6xgxkaFgZnUbXKYm15LsUQJKwx7jRxDRvL71hWuAoxfqR8jcgjicCkodz3gHiA",
  "key39": "57gFxcXGa1djJrWuo7YK8v1KWVHahCqVAbDuvJbo63NhwuoiMokoQP2VatfPdBcSKfDh9HBKqPJ4DL4NaGoMoVQg",
  "key40": "2SF7HidjUZ7H4H9ALPg4uMuUUuMtq3JSdT3gbGPR8MTuCzu5hc4kDfRUGoc3CYnR4ykK3HVxkDpk6krU3ZrSL3iL",
  "key41": "2NVYikU7Mz3KtdUD4zbSvrqjhZ9WSRAivVR5t3C8fYdJok5QTbHFdY5wB3427D79aLS7xuakBW2m5FUNvh3Pw56i",
  "key42": "BjSaTaZBgrPFLzbFiDMFW572HnkDNZBkrQiKeq5Tu4Eidhupkt5LSMiGcw9JS8JnpMAoNB2eP9rP631r7EuTx31",
  "key43": "JpzkjZuCtdRkmjJJSZaSCvjAUrL7nCdZraP1N8nbQ6CbNrmXPcDZXveqtVcSqH3UPiH76Z4PJ9VL2RdbQH4iEzm",
  "key44": "3tkPDusC4SUsNZqy2mVvbyfHHmDyEdKuEWgEH7oV46oJ6je875gn2LiXzBQneWNnGMoFQJkG33y5VpB5ocwTGUqS",
  "key45": "tbzZauc3BwGhxcgA2BLuDYsNRj7GUV1sZQY62U651ZDz3t5fQozofGh47FvXpgnrCwWoy1P5HxHYRU66CYNTTCj"
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
