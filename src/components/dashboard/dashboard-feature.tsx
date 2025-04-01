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
    "3giDivoz7r57cQWT2ZJMYLdJk6SuQMR82dhhuz6xEMCuwBfQTTxej2xZ6Y6V4DzcF1fd36GafVvdbwxTvgvZu4w3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WxbpWVTaKU6Du6axQhFN8D8dpwQrsNS8qkRs8qxJou18vo91xK6kut2SDR5zqXtz3kPyARqCd7ovo3nCnY7rjbc",
  "key1": "3jb8nSDBmpFUW9vxCbNJo44a1XaTLxvphs135iih8Bo3jA3rVngRuky7MdNydgdvrSdiuBt4toKJfhaP2QhFBSHM",
  "key2": "4krwcG7KUqJkDxJMLWSJ2hBmLwNXGVfqCb5NCM6RD151vTLnC1kJFRagLvz5kLE4GbmGabtUVfYT5sKe9uiyJWdo",
  "key3": "MMWfkHYwaZgkqNQkSmMQG2ZMsPcVtiqD2wQPREFp1SucytM1KsNegju6EYjpxWKmqodAziG77bLdqJv53hXMSB4",
  "key4": "5k3LSg4sGLZzhpRJ7h3gBr63JbxVBbsEUHxf35ztQ9pNKjbUxSizvqQVBYJwx8eSeda2gG8eFJEkvT9D4NJzLVdK",
  "key5": "5Bu51Yi2R6dPpnzL7XUAcrhTbupnif27TzsYLzSub9MCvUoj9QDoYe1G3wnGCwT3NnA9xzFA94C7Vyi3M5xAtJxY",
  "key6": "3NEMEUfxebxSTHpv5mGVh7tm22cYsiHVaNbvm9Z2izki3cX2oor3uR8tuQKsxdadhmk3CXfQ7iLXySdGBBbvrXXs",
  "key7": "2ZQGfaTq7HKbdbrDazPDtoMuMwc9LofQy8b5CiLB7Fn1nBkkmayiiMx8UVLD16TmK1FtK3ndoe8q5LH65G9AraYb",
  "key8": "owt96uE59dotcoByQgvxAAe1s89yAvvVP45p2LXrjAw3Yvr75qJo44F7NKdDC2reuH1qPBFMCfby29jJE3vBszD",
  "key9": "4Jkw58tUUTYyTvgohKA3K3QBF8qqG6fVQjTjfPe3GLF56v9sZhh1mEMfnAL5Hj29LwWZDmzqvxYNJhGQt4gvWZ83",
  "key10": "3KTRq1o3mRGTpcqMMyHdJEPQDeJLPUFRCXPRxFXDBuRsijTjnvin7FYbVLd5e44q529FQShuQoS33CcockboubFq",
  "key11": "5oudsZg2ksyj5DgmcxpDeEoWJhPQRb3ZLQCxur7q84Q52KDvTiJEsHyA7ggdThBd4xLL2T6Us6rCqrZFXxWbtmVX",
  "key12": "4bqGumg58w8U28AvHdckyrCRCoEgXebZ2jCCdkBLzjtKnHDpMMgARqSXnikmaRPA2Md7wtJjbN4KgrgQ2hHsLukH",
  "key13": "3qX1VUQDasxMaFpS4hm37Dk57MYCyQNdsbVtGkpcJ9dRdxQzoC1qbM1jcqdcivuekr2r9R4qnmiy8pExwnNdYZZp",
  "key14": "t2CsKzUdA47Pn9ALJsnK88HAtshecv91ArR6rLgg9Jsnawgc6MRbjjRwfD8N2ciuzaE5k81W5XffRnfmjc8d23o",
  "key15": "4G5wJB6SidJcc5xtfutmC3Ds9k6knugpJVyAPT7ZmnNb14jEQ8xA8SqJ9zp29ymxT1xSr388xpw8LEGHjQP3Zkk4",
  "key16": "h2z98KKFjwtPgoQRWVH4EtXkKtgb8Fzim3yLHH5F3PLvPUWCjGvnV4GwK9Sa8FNdHLzMdWnKiQzCUoSazWAdPdw",
  "key17": "47U5QJmzVkrHCs1h4RvGcT8XyvBu9QB9BWKEMRm5e551cqAbwJquPHyH13bHr8UQzTANYWnXBKkRPy6uxovh8mDy",
  "key18": "3XbAmSNmmgQ1gfXEoCoknvLiKdqNspmEGuFd58z9FWuKyFEkBarpisAdUBdjGEFCFEVg4UTnLRpmcafQxSjNj7db",
  "key19": "3Fy636BVKtJzGzkocRuyMhuY7SBFdBe1KYSD5M5DhNoVLrHWsgfaz6JLTSgYSt4yGCgUXcmn5MmjvPkQkHMNPvE5",
  "key20": "2m6NkrYxMBdNugckhSjTVKz1eHSpZY3CBY9Hf7v4rUNuM3GrLVfwomjUL1wNcr6wmRX6oCDdK1br5ZKPcXW4dj16",
  "key21": "41wMy9Pmco9pLSNr7ZtYXUEH8eSojcAgyoNpLRP9iWmY3Ajv73Fgr8rYP26oGYsEurPP7zNt3eva8mwVV7E6641K",
  "key22": "3gPk3RnRXXSf7Vm25Jp3UXXu7rKMciPL2CkypZRRpNWh2YSZhkXE3s7uqwXueVUXjRbfh11w4pvAVMarAEvqGGQa",
  "key23": "3D1V7sX2JmY7NjQwEgrqQnaVs5Ny1Hfz9JhemitK338tpqeMyjAuENnVFvwFwQVmtA89wpHgcvRchDrBRXrSxjtz",
  "key24": "5Ls1EvpE2ACVu9wpT7U83G8ft3ssSJhUAk4D3VYYZ9B4frq2En6nLYKerSB1Gf1D94qXaEnqWqrhNab15SZmw7U7",
  "key25": "3JeR7zbSqD48MJe7KvHMHfygqMm2e46oCp7EHhvTy88QyAsapRFxCy824VvVL2P3ZH9mzUUfDnyFf6DScBbsg4My",
  "key26": "2vFg1Vn9eCLQNH6AzizdLXiw18hmTfieyDwCt8THDZHbo6zza3A26GVfCDSviK8KmaBcF3Te1vRFausbd4uf7jzH",
  "key27": "4ETmfvfVhDdKbGBtY9FVJyHA81x4Y4L3JcZW4JEzUEh3ioojGYj1byRmcx3W81SWpShGBMfVxa3W4BmDt5UTPS2T"
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
