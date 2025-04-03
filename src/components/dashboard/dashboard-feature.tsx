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
    "5ZXrWMMaGCLgoj4hXViSdrdwVk7Jf5rv2E7wbmQ6da3hNRUXqwQxhN4z4VwS6CoGkE7n94myKwUfUEf7vwUsxtBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXcsYhskKZrEy19BeuzgAfX4f7SXbUHHiLsPe8hCR6FwmJ4b5DfFb9kBhDHiPHFQfrVUMRmG8URN1RR5jBzRGoa",
  "key1": "5xNtXZ6PkPHPXLhmusWnAKnYSAydfCiWgoftAz6kcc5adS6paN2djHj8JWvjnkGsieaHs1qx34YwMLidhW7wy2zg",
  "key2": "5K3TaX3fzqTzUdRFs1nJfTAj7J8JAv3W2QAzXg8BpLwPvbvUKUuqXSt9pNKpCns4ho3ZReVRdEy5SqRkuvL7bhsa",
  "key3": "4sDVogMwf5zThgW9FxCp47UjABdcmhawRuKL3Y9QFmaKcrJkN296BzrvPBJQGNmTNSERswksbRoT3q5gVdDypPTG",
  "key4": "5F1ks8ATiptM2WE48Tppxc9vx2WZBPjy59EYj7ECLao1bcjuMwtUwt1vGuAUuxKaq5JTfYLPY2Sd9HWLkkeRgpui",
  "key5": "3f5dc1vhB6gzjXmFFEcWYLHMyp5Xkz1w3jhTULZrLCgzA1PSZVEyYoWWFavoph4JhjUQBJVPyubAdwzHbpSu2zUL",
  "key6": "3bm2sZimC3fSg8m4C8debmipiB7yGgMgGKLBkskrZund1UrRm65PXDyxqrfDCV4Kd4kNyT9u83tNvCMhsVudKHiK",
  "key7": "4sFdC3BWkqgk4n6CSogwrXgk6p1CfeK4FcXgDN2Yy2uZiKXHjfVNkvGrTpKQWn5jHse4k2u7izshdonrLLhExs3R",
  "key8": "5JvWwry45gxaZ4pNDyUjvF6pzo52q3AW7LJGHyCtMF7eGwY4uVuNjiBJBVDvQ5rbuZ8oM2oCoyHc6cZ4k3vGoWbJ",
  "key9": "2Qk4wHesDnto7puqtjciVaHx9ALB5NH7tbjwsV4EA2dc4yeHT5RfrUe9fwyGAZtfXvns38VhYabEmsCWW3fqJV8g",
  "key10": "4fk85vjE1CkwbCEW738U85ZTYthLsmKQ8LEX49n6ZM2FQZHuszB63PctE9Xbhi9p8ovwAruSBvx3NpRynpVLzeve",
  "key11": "2r6QSUrghuFxjt2LfyFYRpHGMas6dJVbu83ktMnzCcjnx36r2HYMoWLPgS96SxuPkCrmnwCP7j2531QKtQp6GsNZ",
  "key12": "2d41UrJ7jeGPGPZH8ZqbABerrPvbLw8F4W67oGCn7ZLmERxMvi3An2sK7VjHCGw7WXfoPhfDmnW2EuL7DJ1YpyHr",
  "key13": "k19DKmhKGFb72481TU9ViDkC9ARgLGMSaXYDyK87hdC6qi1arSzbvhL1P1wLAXkvsENr3VxavTaTHD4XFgwpXAP",
  "key14": "5FBgSJANTMX5fK3sgQJqPX5Uv7Q31cLYueD8mCFnsAFsYc1aMXeQ3M3b1g8iomnZJA4sHqVuFx2CsNaYQ52jdcs3",
  "key15": "5kb9rqoa5RmAvMqMQnU7n4NwcDYn7Dn3eLoaZ6cCNTmvXXZtcw4WXuVY6BXcntrPvQnfjTYGCoDJBPLeQG4Famtr",
  "key16": "2zSNL2GSMa7VrttCXwNugYdtGBApKdyqtavQp5BmV8ziZQc4j8E4LuJYRNLGAFZAySy9rro1wjjnzUn5Lw27QM43",
  "key17": "28Ye1vrzs2YuX41BANAMDrG5qE7ASEbfsMW5cGQLJw48DR7tXG87eAg8GHSSVsTBwbQ2B1b8ah8fUv26MKF8qhBB",
  "key18": "5orRkQ9FqtQSwJf9H2GJAsBFmpvUrLw1QC94FveSrPVoTVC9BS62QfzQf2cC8Dcc7EcCkosdmsaJvb8yb4FZMxG8",
  "key19": "3hNX3kZ8b5bkWfHGS2WPBaPSAJBCn3y8ZMqEY7GcrsmPQnVCtusZvejrLtq9UQataHcYi6GVYWnqNatRKUdtFLXm",
  "key20": "3sJVsyAdmWbK6FPAZN4pT2SaiSNE2x6CYQQqLtfaC6eKv4MJFiNDw13VG9XHW64K7w1in6afir3QdG8PHh9xnpAJ",
  "key21": "3hsKwqvgbE2TVrPfnZtHh7cdh9kEts1sUVe2VchmByWj4Ad8qx56rb5E6E7vXZcw8KkA2aSRBZkyvjZ6gi63ssqh",
  "key22": "4s8H4bJwCWDmWRpHwieNPGjJ3KzZRfnEk7Z4sdQyreWx4uun4Ns4EoKuQbxeVjM6bD6CoBhMTT9bb1JS9VAjjZtU",
  "key23": "67euafrvKwVdag3ieBpL5CMSDKYceFiR7YmGvE2YMNLruWrbkuLoF3SHkgvDBMzuKtWutJ9KCb76w1Q92w5KMYVf",
  "key24": "2nS4LcEnetSQTnPc7bUJPWxQr8L4PnTtLr6qcXs2gcomzbFqC9gCh18uNGER7ytaMit3cQHG4puKUwAYK5mdrfDD",
  "key25": "3G3oA9E6hvw2rUcTiBkHF4mjfE12mcWwR4u4f9YNHoiYZntJg1p78a9gEXYnN71hJfN8RgvxPJP9STJjyVCbUPe7",
  "key26": "379h2xBbHoqy4zjPyz77djFhQUtkAaYaih2sRZT8DfFjb1TR82ccaXs9ReoW5QhxfskcrTAvTHx7eMgC8A8jDEp8",
  "key27": "22HjAaE7Pj4phVGX1peRvcLcU1Xj4pE4pEQV3aV9uavkbCLZcQt7bi6oJqYXb7F8p8E67abFnsb9UVtL2i5T5Acg",
  "key28": "4CvzWqvK4y1avaDBeV8qzG88ZDMkzULDWh2TfNHmJxD6LBfpbHXZsw82M53GtAFjwq8qaQ2CEKEAKY7MvFoaxa55",
  "key29": "5trzgZ6Wojr4oqorqMZqnmpnZAnDVaYDebxgjDXa6tKFh5BR8E6DA2NA5kiyPAZSxX6dFjWTcpNbYTzXJcjux1Wo",
  "key30": "2nKVk8MxuUhrnPrvTUVJE1hYxnw2FHkW7KHPqR36po5H7D98GmQ9ymDWczdCa1bPdauKqoAPMmEyBwfiquYxN8Fr",
  "key31": "4s3GKiBhzZb9D7w34Ntu1hTvJXgoFjzWhipuCYGJ6fmTewRfk1Sx4XRigs63UBix4GyW3XeRuDDvnyutrByGMbqa",
  "key32": "4t1Nh6jfkz4LDojHMK6DJiYUR6yBP9CAHGYQjUDE6K9UrAJPhvajnwhkDBQL16sZr2KRhjUxAA1ormnsqE6iRnuY",
  "key33": "5zUVqGmTD7eonP9JdR2yxj4ZyADyFThTYN2pEj2okutpUnwhHo6y3FqrqoVLt4X5N14nZhDCSiJGnJwKK4F2dar2",
  "key34": "5HcMdLYMGtZdD2tH99SNS7548VbTeyef9xPe6xrBtBZCHAu9t8QKh3VKNT3gGSfC68VT4ypoLzuaWDehBLBHrjZg",
  "key35": "4kvCsxezW8z2nk8CM5DzsoyBzacpisEQPXPJM1Y4vJ6urZLXt1CdEXTRNo6yMJRBAs8e8fV6QVWen3RsGMyokFSt",
  "key36": "5JGMTSD8Dn6u5A26roRUAWC564bRG8riHTh5HyieQ9VBnsqUpmnyUvKYauHx7KWVzdWhpgPvJHCvvPeiaTdceZtk",
  "key37": "23nugyTrBjTWgKV4btqskZukX9AX68dY593wMPLEvqocs5Pmo9vkzZee6A8p83TLoxsapbf2qM3YJBWPnfDUk6ka",
  "key38": "vs6yqGEuc9Qp4pEqKft5vcQq9ztwAuLCSLjNmPHPBa1RGvHtwbuF6d5bQDLkPyJ6qqTXcjxYkaQWGgHcFQb6JXd",
  "key39": "3cdwBjsNAAje8xCwCWX41WDei8SGK5wEy2VzdjrpngnHaPNjbkyqFkj6V1wB3AMDx1aP6a8tzRSTBGbH7ScYFQGo",
  "key40": "vYX6rjVeuWPmkAhJm3qL68oP35i3xz9f6CY1fhX4TLEkP1MxfHAWPgBdCTNGVu6UwHMg1Q4wkcdiFMBMJgCeQYM",
  "key41": "3vH6r7Ahva3h8CGoBYTzKdksGk1Jr7uUruuLU3QfEFikQd7mu6MHg8DeNTCYpoNgGCeCHuJMRqnyaDt1n36EZrwJ",
  "key42": "2cH7GGjqXvFesyfjEWv7AXzXhKj4KtgFdX1CjQeEdMoj7daLuiWgfWQwCPq5ds9CL63QQTjakvhbKt696e9nPTGV",
  "key43": "2jQpwHfrxDaFacZJ36crjMt9wpfRv7GRVPdutTjjdmVCYdrvTijShTPhgN3LaaW1cSdX9VcVfh1NhYPcW6GF46NK",
  "key44": "2GeABjGJQGBbvzYQquiCPpK1uLdKnLqnsP5rfH6aqrM398LMpvUDHGB8ezZWdEaqiZLJQTk63hmwCJSzws9MCTPZ",
  "key45": "3D1veU9aRsDchWxuueA6YbuVszmgb9JQKimrdqHsoxzbLb2uV3pPPS3cuc4JJYLSdZR8wNaEEENw6PDrGXxD5Zio"
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
