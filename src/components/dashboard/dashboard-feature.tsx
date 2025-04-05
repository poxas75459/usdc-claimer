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
    "39ePdFjVA2qcS1CVZwWdyKtYayuzZk5HQ1MVKdvBHmxW8Tcuuv6Q36ZR3W2nA6RMduJU2QbuKh6d7Uq4SFZFYDD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmAKZfgv4wHmMhDiA29UQo86RcoFaR1dVfTM4G7fPoW9Fp6EA2NHwT5AZNcYcDPxWAdX1NZNfJgXwakETT2pAQy",
  "key1": "5Pdr2y8X4GcbTDX4FubqntPEzKXL4APjr351rzia7kEdNN4ydf575ATkqHwqVNkoh7z1qETiyBncghHb9PK5dAh6",
  "key2": "2W3pZfL9gX83tnPiHiNAGipXX4xA73sFbtupk4SsiVyHo8feYVEmV8Q5rFynT7r3UwZmXFrRho4KrjeR6Dpp2BKA",
  "key3": "4TP3NrgmDoegsTvgAigMdWhAKJoctpCpYXiLHB7PX17RpKA1Wz3AKNtokpFFfYSnFKhQXD9318BiumCooAW6XApK",
  "key4": "3HwcPjmm19QqEPh3Uvk5PZHawUViR2EjsexqPQz434rN1wDywAKdCPVZ7pcsKLfZ2yBzK5aV2ftT7zpogYiGjoxn",
  "key5": "5zXtMzHWmjmGfKXMDYkPpCXsnszM7HUTGdmXYB7VKBDpgNPeJV3DnWfCddVRm1xC9vrYepN3tDsxJdJJYKw7RvyJ",
  "key6": "2oiEyx3WwujbQ7b4Wu3nK5g1PQXjRv3LCNcBsKNzL7ZmeMoLYZhCkuDHZELqGvgaFQn6qEy7kANGFq216ewNQ71x",
  "key7": "LebBTe3eA4tcwqcDw1gsciZb6qbMzRGVp65GkQexY47eBn4WHhdoPYoEDUQH5bYEGD2RWR1hgMD5vPYXbmBauCi",
  "key8": "3LP3ZmWnLTeg8iFu2oCVQ1ihYjJyQKeFGvcfebv3BiQBQP84Xcc9WxEdETcrMCFt64UVdCV6sNbWc9CjYptiexxD",
  "key9": "68v99Jg391QEssn4ukoorCDsoiSU1MAbJEogeSQaf5TqAcWt7Y99rBXbHtX2TgxuRRqGhfVo7p83293Tcgv9tfA",
  "key10": "2nkvoXftHwUzRwqKMKxx2kuQpaduUnXmEsQdApXA2mQkeXLNMNjvXAoXLENnHWQoabrqmatA7WaQJEqpwvCNKZch",
  "key11": "4cH3nc9mH66rvFPwf7CXhhrTMua8HeUc6MPuN9xALufFjFvmeMTVB2ADkoUkQPCvmmMdch4WBACHzqNwiXhrAAC7",
  "key12": "5SZC5XiQ7d6ixRchPszoWqJ6xzZmDn73yq6v4HFMADbaDuEr8t1Nzz7xTWoZcsQiUZDhd2xKXUf2KX6q1Qk2NTqB",
  "key13": "2u2krqNrEcFGKnbNn1cx461L4dmnja5MQDzJygVAsZuvRqp94K87rLautAZsEv1LqZynJyN1FBWvKDC55BGTs8Uf",
  "key14": "fZj43KtL5rGPAcRf2qC7ZtGeUH5zMcK9NAKQBLQeFTCHGm9AobJKv8AJEdpoS7Uct5QZHZFyPoNBW7X13BQ4kdr",
  "key15": "2Du2aeJVDyXthqU2hSNTzUpmixoi1WzkKujL24WA8FPByyUrV6HrVRqnU7wtVrWpKUG2fwLkBemySNfdFwmyUvmX",
  "key16": "5geDYSQVYbWHLspyoEnL5qwnrbPyGgoSebJs5EfRkrFwsm9mHB47n4FTMUYbKNGUKsp6mWH4mtdYnQYtwMNGQY9G",
  "key17": "67RgaWwa4ujWD9fsmyJZKyK8ZzBSX2KuxWRSBYs24z1arTaPKFZi7ckQUcKqD7nu4X9yAF8qRk9Hgymyabs9zxon",
  "key18": "5YVaiomrKpUZi9M8JtekW8sJ12RRjPvBnLN6DREzJnhmYk55kutADtwN4yM9fjem5Vz4JE4jJt5QVtLWwksosADX",
  "key19": "5E96G9hWmc8Dwy58PfBPKhiJVNscjTQ8NGLqXX9BBj9mPR2Fv2bAZ95UxaoJmkzoAgJBFC5QDVJvmXuhEro3HMFB",
  "key20": "WadGTiKL3YTU1Di7NDLX9wx3Dbyuvg3EXgUCpeoGKnc1fokwMyoDWvwQwSQY6a3wpjGJdxsSXuFVNJSH34f3q7X",
  "key21": "4GThapDBPJpH9qJXdRmWDK9txAmCd4Vg9BVckirKoWPnifdttUB6bbfbX6SUqW6gWmByAAHfHTmBD8C2D6yLFi2N",
  "key22": "27uaHqq8d9R9gKhx6bmS8ncMnewis3CtxLn8iwsMUMS2s8dFEsKMYerVCw12AgrafsKLSxAMjHGYLtmzgKS9386k",
  "key23": "4oKy7gmRpCpHmtXnzDWr9fjuNDgVNvDU9qpujJgVMuv62CfYrRDS6dZjQUhNn1K3tQZLginW1sV5pr7DixCGHFtK",
  "key24": "5B86QzsnNF1kK2dGVNcHTpURz55WqoAS4YbyDauq1j4TxTaj9AAkvkoFP9ZwVPaq3usufhaa6kz8d7SBJ1qQqHxe",
  "key25": "2PvT55jL9SghtwqXXsmRVQrpPg2k2TzvkRCnthhqisjaLWRuLRF7CkS8n3PotPCvhBmAsKPUcVDksZeCdPQDsPDy",
  "key26": "mCcE1V7Th77dmwGHfap4KfRk1uJLkhoRZpckY5C44RHRvvwDLmoM3o22WYk57yB3uSpxnouQyBtUTYEWYX8XPZe",
  "key27": "5Q9YMzFDiUvakDRaYJ88gozCDnnsXxfS21GqyM1g9jdS37dKWj1RkK3BBfs91aLkiFJpcgytDAWKVdLoDZaC7dNe",
  "key28": "2b3FRWoUDrzSerutGamjATRhMBcB4JimpmqKXNfT8611T4WXjMC4esp5qdadnA8gWwjSqKL5txMdgEkCBSVYCeSi",
  "key29": "39DNnNuL83GyqWotiUYpfrDzcZU1GfXgHBpQYvMGrcogzDywWwUTiwm68m7NWdQS4nfhZ6VZNZayM5fQRPjw8TsA",
  "key30": "3k1vpJek9KiM3My1zNV655QkXM958gS9J2mEuuG1WFditZ8rbqtPcHu2j6Cv8dPy4F3W5ECGBj83JaemrUGdpKHL",
  "key31": "5Nf9nyXcS9R6UphajjeyJCNfbKHMhZriaX4kiQaWM8dJtfsnyLBvsWEgVmYXabhVZNn6s129gqBSC2Mj53QzjRHK",
  "key32": "FjNdcg6k8235fUArrYcGo9Ju6cTX7s5VJvTaPXodcoLnWDbj7cocoZFK4GHcmHWmWjdU3wxenbCRC1M9RDtey5v",
  "key33": "4QGYLVHgyo2AbNzRfJMfhxS6Gx4duvxjENdaNvT1Y1xv5U5gsofgCbPePZ2CwquMhS69ubiZqA6fRPDDgM1NYAqf",
  "key34": "3yLkEkDsAKUfsegR9hDvMUL13YFNENzUhF9tdMtXEJN4Nj4WGF5M1EyDwvb7GhwD1RgAewX3GqPzYzQekBDe9vou",
  "key35": "mAoH2ihjsfRgEjevazeS8CcoABjX19D9AjrerdZEduPnZD5R7QnFzaK6nCo7kyqFFc9BiEiyeEmApYw6wEjbCvy",
  "key36": "BrvKsLoY1chSUjBmZj8B5tF9i5c6HyxJWb6aotaLHqHX6qxHHVAtvbkScAnujCPQNRFCAQx8eAPJsAuuT96kAN8",
  "key37": "2ML2wk7C5b4qahVq8WcyUQoxkX95xENGkqLyxHyqLA35bUaixS6RQ2RbjGitKc4avH1SuQJ89fm6CsSiA5bUHEUK",
  "key38": "3MoL9fKKuz3iLuVjA88g2MANDGc2jznf4JQXeVkbeusZLdyyUUbxoMcdJLTxB9aCRwPJrNV3ErwYN2aMPkLtED4c",
  "key39": "4XL3obKptRjXnajSz2epSZPyxLU7ZLhrhKjmhRisDugeJbR7d3qjgYJ6hmUcJnrghz9zYezGzWXxu5MubDYNEax7",
  "key40": "3fVcHBkoPBUJ4v1fANojjHhcyW2xj8GRZNRZNZ2E7LwM9Y39a8AtfvZJVLbfeLMZuEVCUYBXmQvkJV7etDPmzu2V",
  "key41": "22eW9jqMj4NNq3rdpcFNCRk1dBY9A8MkY9FMsDAJNoZmuQ16nyBJi9xnGQ72ZKkfYux6VZzbSqTs55SKqhRfFAPc",
  "key42": "589CWwyGhJsEt16kzCMJ3AvwLo71cXKM4WMRamwyMcHRd8c81AAUKHPJQPyMa5vmhP1BVJCtT9m9ssS2eFrpMqty",
  "key43": "2Vn4HTticrAaGP3xLojHnjQ8vjt1FGM9Xp2JZLtwLrm29wfsXb5xKpxb1y1KUjKZ2ye8bbbwxcxo9kf5iV96K367",
  "key44": "3aBiJL8Sh5NRA17oR8roHcyev8iLXXR3JRJYYRn38u4pc53Xti3WBtnGRDkrRHaATsqrxTMNXxWwo5yNmhKgeHYo"
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
