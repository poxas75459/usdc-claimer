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
    "5ZHDNhc1EnxrB6heWi7K8Ms3kiYP4U26ZC3KdAkjhGfbHi5ZHakzPJ761ZqogCYo7XHSBBJ1WsSMiDUpB8qtdgZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R2u8bCFndaeTjE3Gz3oKv7aPWc7wkVSsqJhLYnTL3CiHDtuVFGzrU9SaQr2J7zvTP5VNo1Cbd9iFjjHju6A6Kxd",
  "key1": "81qoiCvbFHKuxjUjnvsxsdhPK7YBD1wn3N9U1GHPZj8EtiebqsChcb6FVMe4wNHWbYh6YhWyrnibDy8dyvvuZsb",
  "key2": "3W5XHsBoSLxw54zU1tz4yJBEM7gvpLn4GUk19cgpJuE2XoytowpqHohX2NxKvb85ndqr7GVHWRMu9cnjb5xyKujZ",
  "key3": "5uW2RChuPuWFfxd19Zq7tAFHbe7RQep9srKXc685msGJNx8Jh3ytTbZYg2YXE2vrLQd9i8q4R2dgrLLvBpDdAegt",
  "key4": "42AR1zxZwQ8UGhipWqfnvs9hn6PnX3uquGH3dC1G4Puq5B5qQh3nCTUECDoukkUp1evDPtB3ZNBm6Pajw7xL3pCh",
  "key5": "fwv8oKRfNmUaXvkjNdcXUhynGeYDZThXnWHLHxkLGNPg4Y7WM757L1hx1gvpBmmjvkxMzcDMUiZJ2UVyrgNUU3N",
  "key6": "2Gjr9p7SA7q86HqSwZumLnDqHQaRW4XyoCj28z6WdtpiuDtNmLwnm4QJDqQiRT9FunJ83mvH1cTbMHWWCpvhPUJZ",
  "key7": "N7EjKjpwpKqKRiXts1CYVuqARmowNDeJMbvQ6CJFWnxSxNetZKKQuk83XpcCFE6uGwFpFEeV7fGDQSZMFFok3rd",
  "key8": "nzDqDyp8w8bHgE2YsEcJ9JpsHDT7LVBEnrPZNo5dakLE9gyZ1cSTMFLG8hebs4Zn7Cp2Gs7uEsWatcbaWUFP2rf",
  "key9": "3eo2kxe4F6vf47wKtcu4L6iap16qcsVdGaTiHKaLTHRPbNf1Ju54DJ2GLHLM2Re17cDxMT1GMfJU9FakBHuzUPDL",
  "key10": "2M2K9ZPjA2K9rXhs6AbjQCEbrizwfH7aQPmywe2gYbkQ3BXXsJ35DnZfFYwzihDezvKdPPGhc6b8284peANDJKUY",
  "key11": "38PRMU24fKuvb6w1QxscxAWUPB9JY5P9ss7fgW8v4geUyhuYTy7EDBcCYZk9U9UM2WwnQZCNCpdxrgjQGgrRbqoo",
  "key12": "aHJQddq8g3JsrJbVgwSLDDRhSExjrVUZL1q9STeWxpNCSYiZP2yCFruignyhAqrY66YYh5xSMCSXXVQEHaNVVdJ",
  "key13": "5jZebxxGm9rYzXL7xqUvfmrubyhekdvpTV7Pv2v7CVRXLomeJbJCpQFFS8rwqmw3sxCawQXyHFPDcUa6JHWuPqMz",
  "key14": "3TKEjFdHdvxQjFbnyZ1fpNsqwrWPh8d1V7spzM75XJEcexQADaAWXgrx5Bf6CpjeBWZF3JNNQyfEJcGBwo6wepoJ",
  "key15": "5rpo5KWeZnvSkwvDZhB8Jb8ZBrdkegyVCauTHS8nxt3imSc9Er9X18Kd5hpTbNdcVaXQcCdVWibFRtfmoCUPx8Ae",
  "key16": "3huMFJ2kAwVp4u4G2rVPob8FKxnWsz4uJ7fwXFFDc3o9acsFVecQVpNZUuamLhAnwhcFGkMgKihbs93wqbTt8AZM",
  "key17": "3Hz4sNTVE8cDuRwS41SJhdVtYGo4JEpzYyHEF8ff2Nrn2yVbptkWkNdwPuATzxiPXk6XdbNjW5SzhDkxoqZherP9",
  "key18": "5gUBy7fezR4h9zuaB8xMD21cbZmwuESGb8CYmr79fsTZjTuVApzKnXNk7y6EXxA1tzziwFzoCTmNhFxGf8KUjMwV",
  "key19": "5E1KfYweYTbYBd8dR2tgEo7yVtwsvDu2XaezKtNQncPoxAegniq1uohUBStfzdX8VMViLSJGjNxvFx99ewus8YWw",
  "key20": "2Rx2edVA82aJcAkcvD4sEdq2vb554XBYRvutgoR3dSrKnU4k5zNFoS6VvjCrJcH3527cLZvxjZu8odbsrpimGnAT",
  "key21": "4pvBryWR9LAVoNTjvn6CyvVEWJ7Rnpw6xtijwKfEgLyvtSZb9rTA5P8EE23tX7a41M5x7nDNgchPURXQmk5ARcHw",
  "key22": "dzNJGUUfbaEuoFhaSac7dWPZrxuCjgawifYFV1z9kLRbB2Aq2CREB4mWJWH4AcjDjVRh6K1XrExmGVN3y6MV59e",
  "key23": "eGfbxuJJJAjhYbVvMMbrv2e5j3vzXLN5eiU6LAFcDGjsDbyBPaWDYgjbnSL5jEBUjxcGDuQoWmsdEDeyQ69UEXL",
  "key24": "4CaPdp3cuBtm1scagphTFekeSV42vn7odRGq7QMSZRvi4wD8reD1651HWUghkJpvpAAsuRKGGRdpS9aaEqK5rnLH",
  "key25": "2H9C4FjwxxH3jj3qti8L2dxwRRt54UVXTLBgnoiaa4ThBZbTiVtj9ncxN1FD1rPtAt5SZGP1oFAZUcjHaYPoWJM5",
  "key26": "4NKhfrJffWcDMNFbSFLraugQV9pHuV7otnJRUZyXzmhiSc5J8dgLUzEhwX7guirJwSpdW3Pg7rHVzEoG5oyxr3hL",
  "key27": "41Ez3kmAWEEid5CrnFH14kNgbigVjApcX4A8PKgZbGx2hTAiXCZ6yZFTuJ7NJcd88NtCUNZX2QbhLLoyM52X62LD",
  "key28": "4XhTbdryWWHokRso65Auk7B8sEnzDs6dVvh3d3qxVgCtEqiobqmg3BKw1iiRp5ZjBtFMzzLWgivyFNB2J9ArtoAD",
  "key29": "xcqPaibhVvv99kLa1oUK8HKf8FxrPPd2gxVaXE6u9TDWKY57QkMXH3pogdn1jLVmbLqtm4hVhR1zzSv3DzMjejA",
  "key30": "49DMVPYkYWbYg3nNsWx6VfwP7R9NEerG4mgq8E24ZCyHRTA2QAYJbZXz7E5EZC896hDm6MTPrA8zr8s2Dy5wmwDH",
  "key31": "4FWcLuGvv49cbNVKDxnc7JsDZCkNZozS1zwoWw6n8n3hBEgkG4YTKckJf8CyRemAtFR7Wm2JV3pf8HEKSdpL2yfB",
  "key32": "2a8P57MRsCXVc18i3YQTdrURg2LSJkCTQDsRZ7C7BiZyVA7k5kPT6YYuPmfNMJUbmmTLwQnmT2RpxxVZrMa4xpK",
  "key33": "5AmiJFVw42jiNbTHVEE5DtMJPgpq5ETPDtDi36TKddHtu4meSMnpVNjVNRqz8Ma8anHZvaiyqokEJqsnZDSnUvWf",
  "key34": "42drNNHxar3W4PgP22Kcp5zEGBDJp1oGYGHRoRLob49EMPU7aijAjXnwaWwKmmYXoAUUnqtNCPSFRxJQzfY2jqDG",
  "key35": "3KTyH5vUViyMzT8wjEw97q9zFdAAknGhHE6GZ5oKkXtedEj2LXCENkGduJ2ZXRSEQYTRji7W5TQUvN5Xwq7skh8n",
  "key36": "4fxu8L94cim7ymfWX7SPfNRx6KMUqVgMTACtsF3x1EwFxwooZg34kKECzxayac9bLnpVC9MHCxb5rXHFMP6EY1nF",
  "key37": "V58DswGhqxE8zTKtHNNvvv7f8GyBphJ8fS94tCGveDkrDFSMui7efVNaGCZEVYJHutAJDjrcarPj4pTVJHdapjd",
  "key38": "4TqQ5vKh3Q9MdUuQfDLR1zFDQndixkTe37qwEyiucSAzY7FQfzFGQsVuAU6V1xw7KKpieLsfVVqNfF5WgTxYr3u",
  "key39": "5aeVJzsNCYUoJwBWki3qwE1vtSE1qC9t3i2R851SprRCoeyjQ2k4djNM8GPQ6sH4p5rYtMZMFhBYFJgLZR7KQe3j",
  "key40": "5DLpZoq7mMDUfiUZ4ev9z4WzphMjrwiyJCvoiXpdaYiD9dYCAnTempjzoLCuBDGMLKak7eTTXdGLntPFYBfuZLB4",
  "key41": "5KV2ZNaLKio3NKBKB31a2fXm8TTZ9GZJpK2iKG4NSA5zQxNQmo29Agjgr5TKvZCP76U6w3Jc9fBfmsuszk4QMcZX",
  "key42": "543QHe1UEPioDaZfDvB7xRECoD5CVZKGbUjgfjf1h6F5qsUkYbnJMgnWq88Nca3rbzGBM8auUxA3ofeVURu89Fr2",
  "key43": "3YwokwY3iqRfRSnqHUZNzK6fHEEBuZ4hnABxteZ51VBX9sRVU81UHUEFM2ibb25oghAVt87xyfy91seL2eutZAQA",
  "key44": "3jXxWM5FAbXJtwgaG89DuimvGzzzpMeUD4U1pc86aRgTLG5aiCv8kLe4EFPj8GCR6mtVAkEHXyhyEosntftRP4Mg",
  "key45": "3h7uVXbqZwVrTq71BXNs76nxtNrcwyEZHMmyMLex1aTJXkqK11hP7WgXpCZJcLUkyjeaQVHjs8GUEBmgPTA33p6v",
  "key46": "oiLB2ZJCADjofm2j3aAHEBPcU2Ntqm2SCuDdRrJfKvQwGXiMnPQX8Yk6HQSZruDShPz4kpApLUrqWkzBpkyKkQn",
  "key47": "BebM5v92jLsgJSBi49PP8AVWYvWK6QykDzrKG8WUoreaqroCvvLaLcJMkCrpXaTTdofUrayTwVyVjvBHmU97Tho"
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
