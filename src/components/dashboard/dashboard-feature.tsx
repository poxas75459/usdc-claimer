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
    "5JeMoYZmRoX945CC2NPKnEjAFVr5oSx5eq83m1AnoUAJi8DNJ2JmEooLaj99Wac2CXEZw5cUx2sfzzMaUt3ZNif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGebLG5TLW14wdiLwZPTE5m5bGYomBYGBC7t4WjE6dTAYxoyC88yw5ohaZYuiboTrB8d7ZrrQtKf9ASShhzZ6kW",
  "key1": "3GP4r8NAs6JSdSg6D91dVFr3HYVVLNuc6iUuCkvnU3F8NaNmy8iTqV9AuJemFNNonWPkdtH2NzDpXty3GhTQqccy",
  "key2": "4brr2zQNT1fJQvSS85jwpeRnAJq7fpVmNzsHgbphjTwW5v7CwzES3XacGCciPteNJQrERHzhGmoj82U2A6hKGgqj",
  "key3": "3wfa3cbWRa3zfuyGNGmpq5nQczQYTTYoejear3xcu62mZa3aD5SnsfnBbY1B4u2otMeEYc6HmNrYppMmLmKJcggq",
  "key4": "3Nzi5CsnxhzcqdBJv7omT6YsXiqahb3g6nhEMK9wfNhKp5neAWcmPRNY4WiEUY677XN5Ck4dszVXZqfQPqJZtyK",
  "key5": "2WjxYKxbQkey194u5CFScMFt4YKs3iDgYP6vi7HdiRP5GHzNGvaexMsfUQvoDix379dWw1zsnQupY8nKnWL419wq",
  "key6": "4ryaQXPi9djfM7YSmHAUMHtaSg1fQhQ5q3AqAX7sxQNBeimqx5eZmqXEJdKcJ9NbgeFD8LaUntkkhN3kUs2BzhcE",
  "key7": "J5xLpdi3ZvmRXqaudXkcp3jJgJSgKybuqPTwMfUKPhkXCs6rntRTubn7hcY9jURCktZnYH9W7wR4DJcmskoJuY3",
  "key8": "4B737hSVN327U9yQgqh1WpsBhztGWryzKUKrkWnXWpsF7ZxrpV2M6sb8X3zJeLNQK2pshZ7UtSoRWFhcZvkjNqrD",
  "key9": "5p3Tzi1kFaK5EoQby69KUfzz695DDbKuXXVi6BQmzVnS981JEjqjn3ASR2XmWa1njBY2DhoHCptBA4CEpqd2yhVd",
  "key10": "5VZUjMCoAeB3fDhZZxAwBbujfocMcV1VS6Ktc7PPJaKdnQPkVdvoJBoru3A9ZbhGf1rytBWGKbhYuhDCJPY3HZMx",
  "key11": "2JuBmhwoiAyReoGF4jc7PGyVquMdi6Hpnzoa18RkLNu93i7ifM5eB43Lfq2u1Ypu8kcU8XdMJPpS91Uhic5QJ7wY",
  "key12": "55WTaRkmVoDuy6b7uctAkjfyBbwrjyuq5hXwsMz5fvdvW59GRedpkKpdPjQCiu1sSJUUr66ByJyzyRyR8dXsvPnP",
  "key13": "53H9XxuGzHRbskegjfxXjrUjTBnrasErcZi6psVHDzSRp3opezNCt2gZQvcEsXf2a8agRwWEazMyecwVY37KaRnJ",
  "key14": "ZzaCsBNw3pVHkKDFa9q4fmLgAGmP7VscYAPDoTZu9BkZDbe56NRHwiNPNuS9Sf4nC3UTx9Y9Re4qdTYqv3r2BSp",
  "key15": "2sX4PmT7unFnoEyQJGuTWEJms8GFhg2twPtHPFFBnxkAwu3hNtFZuRSup2DtaiJ8mCTf3wgsZE4bfHKbUr2H7HCn",
  "key16": "3Tr3mfRKQi2XyBnSSPicaCGsjmRHvmDurB8HUxieMnYhcBSW3EFxNgWfLKzjAL6F11N5e6HAkSRmpcpy4HTNoryC",
  "key17": "3kLNor1Xu4es9aNVQ8jH9yZisUeqvWMmDBx4bGEiRvKMeuCiuBCS9rbEBLonWikppb749od5PAW4BhNv2VkvAdGz",
  "key18": "2zNVJtEsLXkAW9meA8nghhpwBJ6r1Nnw4EuCHahnkde7BXsB8eDDztFqNnMqdWCpEpTeDoHMKDCNiEqZhAAxdX23",
  "key19": "pMo5FQdT5khtv2Rq58L8X6CxnjpWjprtt4xTs6FHAMkWSPHL6fnB5GQxRKErzjpfPZjutbAQkB9BfCvjaxvo8ym",
  "key20": "7zgCSHSZWcrGxRLhB8uqN5rbMirCbqPGS2emiK93pHxsa6RhvcnnHwivgJC1hwjuyDYt2LATbtNsX4z5tbaHvkn",
  "key21": "4p4ZnJ7PNzomtpcDnCHnPUQCdWcrwCuGDDqMnVx5NmVKvfQNiYS6T4Xa1vsE7hNQSiRbwhshkU8Fzd5W7xfsB78e",
  "key22": "3VLJvzF7DVQMpvSdpKJFNUyVDGpA9Y3vrgQgc2Pf21zJ9TJt7UovXbSuop8qgWUmb81Vg8zTrtfk67YCuixK1PwA",
  "key23": "3d35VBq4wHCzaXftkNipJGuRXaXRrtjCmbj1feG7wThWfRCq8yAEn232pRbXikrs4XEyXxsm4CqTujb3Zk68JLJf",
  "key24": "5Q3HwWSFxUpqDKzXCpto6vbBEWATwac8pHreUFAGSBNQwzACg2Fiok5VUU135JdH6YR6A4zYVcSSDPZicuwaiXZo",
  "key25": "3dPy5E8DJfPde34gs4cxw74iY9imUU365dMoCBm8LDgJjqGjmuj4kWKvHWpGDA9iwCPuvDZkR7ekedGpweuocLh5",
  "key26": "5BTqXDEc3KTX95mZWwDrptpHxo2rHaQjwcWsB1x27CTxeFasqHPggtXrz8y8RhWUzrFVqNUYqiJsnzPj3S5b9Mdj",
  "key27": "2TCPKQ4u6dqsRSBAQ8DfcznimtRYjXmNSxBBNVfuUomVHe3PYJJDqGjAAaQ5gjzHwWjHJuSBnt1ARLWLMxBmquLP",
  "key28": "4LqDfqrgDXQwr7iUzs77jo3UxSuJiPyaCwcUHaKu5gvCWkUnCNKWuWCroNJf8PAGmC7fnAKRkUV3uAjmKihAHF48",
  "key29": "CP7AemeDpHHEHQJmB2MhkkcHXKxtGrZzHNwYBVp1afTBS51JZEHrUYJ1XgetNqKLy4CxSF6sPxB6ySgUK2hHxie",
  "key30": "3F9JC4wRAZPvV7piApioQsLRhs61zdaJyuQpgoxU9hXRTApYpMaxeDWdfcywAA5t9nN9VScj1fCDS9x1Xo55piBJ",
  "key31": "2bMwjULZNA3prz8oWnp5ERfB3KyGfb2JMhnkfeunBbz5qQxjGRDK77Eofau7cyDy4PiqUtoquFwj5SzEnQBWhLWN",
  "key32": "3JkN4ZMJssRBEdfx7EWu3fHBfaHVMiJgRXNunFoWkdctqKzC11Lj78jxUx1euLpmy34Nvk5LRD8wAYBpanWLxbcH",
  "key33": "4Fv3vAW9frJXsfy3MH8E6WjQoh5Ny9HeL3nFtWoqJJB5m4g4HRHapn4WE9vTqxK4YxkqVyFSqdmg8ADzw37dZqkr",
  "key34": "4PwjstgrX7YSMLQTKR3K5UR9szRNnEqkLY6Lxkz45WVQrkLbhpFzM6bxSYEuNxpkzs6hWoJN77qDxYRRodvg5z4K",
  "key35": "241RsSaw6dPCY463cH7MvegEAs4Y3Zgxp38u8Y8jcovXPEJoz3wuaqVkT7qujP3pj7q5XVyk5hZ2mXWRPEnHAx2x",
  "key36": "4wP5pNQc9DYT8XbxsdVX4JXGJHuhDhzEKA7b4pqaALLhVKJQrajdNQp1FXUNbwhU5Bzhc5FdoQT7MBudTM93pPE5",
  "key37": "UeiGTYuETzJahABXGnVChTdkzgEB5NuQdyRwpZ2y8UomE9yb1FnTX6KXtqCNxG2W9veesNqafNcjSPFRKtjkPRF",
  "key38": "3KAxJAX4cv4zxNqjUQrtoJtC4Wm6nKbUn9fALGTHQ2cqWryK1tpLPwFj25v3yBbdqVRFnY5d1F2QrkYRnPVM9BL7",
  "key39": "3TN3PdDacAEsjV1X9cAVg6A3iQkhpZvcUo3dVaQSuDTNJDJ9581QXL4idN9JeNijwkJCmfq44ZpC1F6CmhHf9AJu",
  "key40": "4qGLbJtmkKhbu2QqgS37et9PbbQvvVqFcHH36ynDFUdYzhLPytA5C7i4bY7FVCC5xX96G8haYZqt7VTzmTFdJX6F",
  "key41": "ruENCEby5GRMr8M9x6cjqrDuyMa56X4s1Ve5TaSbozAqw2LFPBjw5j2CrsaHgbiho6TmzAJYt2EQ7jvmztymUTi",
  "key42": "4ZQSS2YpoqenDkNgZgKvZS6gehQqB9ePJZZi1beoYs8sSDGtALbGsmQQFeXrXAGJV7Ghm7iC456y94JTEZLsLqKb",
  "key43": "2dYETVb1GgsBzpfi2W7xbwZ1Jycr2hTDZQFvQquqpWt94rGYFZssvu954vq5vnDHD3NSpnSQMnUDvYTgaKwYbGqS",
  "key44": "39idpvTypTuHwha7TDjMBcDmCNFAEfMb4ocaopVqDQekrqP664Stiupm9qzjiQPKmBmtDPHF41AcoGCSvmmJYT3U",
  "key45": "5DuHvSBgL5bJyex6LAYw1V4FNcEyU1DU6oUu8gWCtPmMpxPGMiRAa37AYdTqQFh8GdEsdftUheKVfjtS2snVR1Aq",
  "key46": "9u4QgWCpajJHm1YV37j6zY2WKPzKhCwgSvxmdPkpB3ftZKiQR5qh4X6GtFoXdW3wYAJzYsmCaSYZKUBxNjWxcu5"
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
