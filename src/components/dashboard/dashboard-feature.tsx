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
    "3hT7Tejm5V8wpGo54epRBc4r19QPw7F86JdNS8zT84pwAAAYZsj8DofrKADFS2Umwu24jceyPwck68wYiDQadak1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mW4rooakTQrS91nPgbANsEyE4KUSypQxuYEkUBbN9FmJQJUwpMMVxFYiaKgy8WVu1m6L7Ljjb3KcSrv2nk6r3BN",
  "key1": "656cHWoWy2EM6mTdg4eaxnrAkeThLdgtGZN4EJS34w6cT3qCP9K5bRcQxRdXc65gBQuUBiAreTvK2n9uDVUi4Jf3",
  "key2": "34GEr1X6ERxETMsjfJkpvkogf5TDEjMqGRzrytxLgK1ukiC9a87ws9PqyKgvwNePE7tZpF53X6QGkBXAfKGcoN2J",
  "key3": "4o3xj92jFtWkLyZEYPuftERXnSpXoa1o693x6NrmJg3fZGdsZE4mMJMWHbDsPg32DxTyqoU2oZvK7Vc5fxTGTeT3",
  "key4": "2Zw7aMoiivVQ981evgfrBX7L8gd3uzxfiuVWWBTVA1nQWmafxzvdvqA3hUQP7v1uX8NERn8ESFviJcHm3oSKuWaB",
  "key5": "211cXaSy4dUWE2GQn4vKksjmP8g5baqCNof38toZNrHhYs1j9Z2kQUEDCiFsj1ckCvgAcRUrmxWZrN8F9hgbu1Sk",
  "key6": "2VUyoHcRAhpcF2exWCewpyN7MpK5z6h5kjEXtDhNtsGQSzcavDkM5xfYdUe3xmi42ej2QfeUizhK41twvGnNe77P",
  "key7": "22f2EjYdw9C4dN3L1Co1uD7RHfeCjJ3S2T8MoHRAhZScpN2XApTLTArDALfrc5dm4wLCUxABo5QdibBHhzpJK5a4",
  "key8": "4t9KmczgogXXE6jZUGq3qDEQpafwLgQyAqPGbisz51Cjpi6qvubJ7sgHnQwrdYf3WJX2NSFECME8mHSWuaeTcj1k",
  "key9": "49J2iFEaJzZajXB35dsLsEDxU8q9GTpbnbnVrSBi6skrJvf9HG5bLCjyrCbxqpPqAWMXKqMJcLdTiBJBtE274UBw",
  "key10": "3v4TxPYvnHjP3JE8eq1yNsGAhvDUF2poBJpmV1EKjKBxnt39fdSxDAMP8qRZfw8QZrKwquFEuUbsGbRQUyCvFDCo",
  "key11": "zvaEEXzdqpGp7HyVwYvsbUNkJ4DGCP41RmZpXHXTpYKiRVFYgFdim31GQ1qCgSVrVw1xb9GXgUjNTveXKW3RAbr",
  "key12": "4dLTAwKFpx6wcmvnD1tQ3VrPzK3cSHukGyZZ9VgYzeZZECFdy5hSYjngHAycWCGs7gSjQcJXNfz1SHKBipf3we19",
  "key13": "5kM97deyTLu9zRpcFZm7TZogaA3cGUbHimv7j27MXK2zB7zvgnkyNjGpZrdcYDGKSwkXjHRyDd6PLmNK7DiGwB4V",
  "key14": "4RTgHPGxqH1VKa7KP5D7HJmhtD2EpGPcYBJUqosmdr2TgKr3yWgTN5eNzAobx7AvSBZCoGenktveceRwBzQrXDGt",
  "key15": "4W8kzuy5j5cCXCyDdzfC4kxChZNxAVruWeFfA6xQFrDCSsp6U7MuGsMhsMkKfbJgkS2dMgrTuFsn93Vn2JKepQEU",
  "key16": "59xiCYafzsEwogeaWsgZoK27uvtv3Q7xKP73zFg9pkrmiVE158RLqjokFCp1dbCCPVLtWTtM2MrpKjoCPg4D6Q6u",
  "key17": "5gzrZkqpHX1E54DieJEbMZQjVkDnqtYov271YuPcYeFmttXF27YPXHyNeiSmaszDwLSrMzJyAkaSqWEysFUq8n4U",
  "key18": "2KdZ3iFuAQuPJB37eQjHE2QMUQVqARtusRdJGaVJxDFneH26NtpPV8FdDMYXU8DrYhJdmBSdcXvSyqsbz3UMPZkF",
  "key19": "5YmQ6doBTuJFo33Hni8duJCZ4cYvKj9y6zPcTLXt7iSNqJNhCsSsGVtCidNtSKt7ENvtEvSKo74s3wZDCJJCKhsh",
  "key20": "4hD3YUKRd4djCmhqRwsvH4NHpiYx667cq2jmPC4sSckmnbtKHhPzkLB1sTTXt8NPyoVxd4MSb5nm7VGccbEcdkTb",
  "key21": "4LEDPhkrB6cCj9Q6boHSURQ2kKdeBXF53mnqR5f5RBHmmdqjkVyLgHPdMrju6phzwfeKuU7euZywnXef3zmpFKNk",
  "key22": "55CoiNN1tYys5QtWyXba6gLYnQrmBeuYxUY2yGrwB3PXsnMjD1T5CgxehXRrqnXgPZnPN6oTK72dYHCkuc6qPRPJ",
  "key23": "2rM6xciKke5ZE7j8Y4k4F9V4bPnGno26rK6QjHnguVpAx8MCZf66q1gqzo2Bgsf84SSfJKj7NtcjYUTfy897AwaR",
  "key24": "3iUg363sYnHmUCwy1mPqKPku6f8oJpAoBddXCkyiDG5cuZpWy2UAq2AKXFQByVubQzdJ128jkGKUFoDqLFYCGWsi",
  "key25": "3jmZ1yVdqawSbrnmmBfER8216SB183UhNSGzJe6tZ3UCsmsYBTn7cvZYqqUnJHxFg8G3NFrrzqWv59yBfw47kUSd"
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
