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
    "2xgeThS61mhDmYXkbsVvHkLChHNJwmNwi2m4csh5JvPRD2DEfRqznu764Lse23KPHVsfV5vKFZGpogUN3PrU39kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5imkL1CoRYzSTiVLc5owRADL2JrrnC6TmF7zcaZaXt833yQA89Cqfdqe7aN5RXEKL9Dx9LSMgpGjwMX5S8YhfBHi",
  "key1": "4nPjNNqjMe43pgUxuTQds81suvAzEmqHVJT84iCSdDxwPbmPubjfPJU3soYz4v1KGJuwvpTaom2o5XGT41J4gmow",
  "key2": "5ZKtp61CPd2sEEEVijD2g2wXPXywtNkSCZ7kcGsKbSwBtv9BWD5wJaUQn7Wda9SCmJ6wKZwDg1bWEGGAgVofCaJ2",
  "key3": "4JC8aRG7dRwwbP7WqrtnwGC8iQkvDcjekiRmpVvMmBLMHYnaYt3PqAfp2X6m2rwp3DtUHNSg7tptQvenotx57VWo",
  "key4": "cX1HtP5tNYbhmt2fHjetNa2svYg8bbmPBEsqKSZmxpH447286hcspETBKw7LytbDXZU8AqwSY4eQ4HanXFwabmT",
  "key5": "3woW9jRxRrSCdXtJzbQsRYhLaoqWXDnJHg5AmPspTqGSjyBEzzC6VFmQ1Gy4gFNyCFNFQLRfQxtJ1LYEKTuuJu2p",
  "key6": "24s1ys9us2mCEign9vSFgJsAbZtpzefL6x6irrAVUiwmPdrQdXvfCALn13jEWmxnFFCRvRZAZtVfJiD9whWXFreX",
  "key7": "xuyyBGT7RwcDGFd5u8xjXqK79NCLKLyHfcdZzQEFWbZvL6YXHG9mQg3G7xvkZfcq7TjffdswUsYZffPvSrrScrh",
  "key8": "21H4SSZWdGQ1pRYeMW4uBxZSNSfeHoGvSqX4pEKVZdkxCn2Nnm8ysNeL4JHnJrXEeaCXRxkedVs288c7pkgkZGLV",
  "key9": "Ymx9REsb3oEtsvnPh2Gzpi7VAUPtvycb2qZYi19BVB37NpsbDBcXnZBrwyfvdemuWhqR224xPNLz1PVRwvEkT6z",
  "key10": "zeh1V9XD918edBDnrugfiNMYAnkszY2XQfheDgCqoFSwiZTevgWEDWyKPxB19tctJKhK6wsQtAC6LikZhRDwSkD",
  "key11": "2vjtJpKMTZpPxE1L7QLkMGWL9THVH6kVJ9W9tbERKFKaCpbQ9sQ6B9dAiKMsVcmKhNJMzqMM2YtEiWHUSDqfSJUH",
  "key12": "4mYrB2gUhMKWcd7eJKEdcuYGQRC9qx5nZFNPNLNdWCMdhHgn3bWX4DKNC5uGMUSJRz9pZwsSF2K25apBNvbagrGL",
  "key13": "3CF3dZMtUPfqBmrrYygQ3DNmmux92NAbAKPPNVoFU2XkNtiBFSWVzrXJEVJJ3HpmChymuXCtB97zRJg6Rck7rT2B",
  "key14": "4rXG1Ph98QKGyBSsQmJJsRCjcqS5QYBaTw2CWCzMvm4bANKNorLbLq72U1e3XUkCp4agJiHZdnnm89osv2LRJG8z",
  "key15": "3Th2i4PJJXefcRmiZfc1SZXfQpz4AFvmPTPSCBYLQgjgp5pUbVupuiPctT4vmAmMA5yUioM3wXxrEgngEGfwNFL4",
  "key16": "4JWXSv1DWaQrqBd5Er6EsAUpnniMsXFuqHQe6h1PEf2KrkxAzkiPBwBeQavHWEDSLXV59tqZP2jjskbBFocrhiFM",
  "key17": "43rjunoUVKrXqYTKHKAwFB2TjKWpJk5d43k1xC7q6VVSgVi5ABnyzc1QEyiZ6A1gGjni6ya7TKLZWP5LRqyeskEz",
  "key18": "DRP3Q5jGX8Gez37WgsMegmwVofvCazZvKprSkjZtTweGFJ1GzGXzAkFKUAHAwasCSvEuMj2tey3Z2kKxVuF8TVy",
  "key19": "62jAPSs5FxrZU5Xf1sN5Z5mJDKo6Juh3CmzyrQCMLHunqXDniSAkToojExeRmTF5LdYqdXUzefZejqjoF6gBJdNt",
  "key20": "5FFHkJwHAzUVhHEBD1UfNNiESVx6FSbi5K1MdCFh3f2fonnrCsa4Gdn2RxDikDhi26BDuJhn8THGiXcfPvdFGxtN",
  "key21": "51LW4gyLyvjGDUYkWKP2qDg9k4hhxEpp2RWv8sHqs3fTDUTwyFPDsJMg1D1PQ9k8GHpEijmk1scARWcngWgpkzDH",
  "key22": "5B5VCLRVMTH1biu5wo14ZtEYnT5Vm1d5xh6EXaL1gEWEZjeYHaHSVr9XJXYLqEWHaHm3PnCN1me9p3mo2q7gpM1X",
  "key23": "XfhF5cFK8mrH6zctMAKcFmLz7KMdus8y1hSYaA6PhUqp8SLJcZuJtKhVTyBafVdFbmuvNPdQdXJtjwkoLefL9mc",
  "key24": "4qQZ92QV3DEcu6hTwWShSaYE7Ka1m7tfXiv2fHx3wqLJALf5MszxxqbDRNzW2zMsExdxDCqmc2ffM1jY1pn44gKx",
  "key25": "56gFTECAnxUSCXgPWcW3fz9ywT16zgwigeaDejFFoW1iLND1bRS6B8ctiobkVVWpAryF6jeXnuGzrMXhYzf7qZ2m",
  "key26": "4UcY8ALKco1x1EdEy93SnH3wpGLFLB3v9DsdtobAKMALcrr9fx66HXbayJt84Vf5keAsCSZmTjLhkSkqBvb478xy",
  "key27": "Yy5SQZ1cG9FMSs6cSpCjRAbn31wQbVMRKmdpxppQLTpdmvS3jyrmprUTXHyzDPoGtU89yfLYfxW5jyc8kbWUVMD",
  "key28": "3vsJ9iRwRLjmJEfww9wnRugps6paMTeozbjz4u38HQUHr2k7xC5VpmgmspxwqrPeaAq93oyWRuh6gpCm1gXMD4cr",
  "key29": "3xKdUZ7xQPvKWHJssWTKaEhMBQjoBaLi9yywcHnxxqieBckspjVqtupRfg8fvWF2vtgBcn1dnZk1Uuped5u9CXbM",
  "key30": "qRnGRX1yJuhYZKJW1zTbQEJEbqVfSYngqfinZT2pF4hUEwpfmxbdGLpggqxkeMQsWDn7mowjNMoaMuR3fcvATTY",
  "key31": "v9KVapVxWQkosvAszgJF6iX13Y8H8WAUjh4paiMxFBL5NBnyDE1QXSFyZLaCX37U3qX5dqHocGNbshJb1eY7kEP",
  "key32": "RNt1ikQxDWpFz2UiKqUjhkQ6DUhNXJ5cqZpThuE7HWWoEWfZqqDUztxmtjXGVrDedJC2jfEnhtQFG6UAjyz6uEg",
  "key33": "5iL52eZfz3WcE9ZGGgVTeewNoszUFHV62tNozDFedtMUrTeJ7Et8BbswWCPNrQBXjzW5ZJnXtZmak7C7hRAgPSTN"
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
