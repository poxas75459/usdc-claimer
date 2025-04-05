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
    "2iP9vwb4D4GrYRT2vivPskPaEUJrDZEEhof1qLyqhBic9KuFJhJyom8N56piXX9AwPhyeEfB8Q92a25uinvr2G5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bx3dSvbQ5b6nPyDjQdx17FiinzSMA8SzWVMy8PuijnDzzhrmiNyaCqbWiSyiy22M7W5rbC8fXJZ6cNVa5e7FJk",
  "key1": "2UXrVA2rPS9RjTVJ1TX6mZnm6KQa24ApoTJ8AxC8nT1psnfL9b8pWg56qr4K2tSJADM7MMrdZNqtAsqr2f9N4TMa",
  "key2": "EcTYg3tBf2MzpZYWYsquWrUPU5X6gxgPGYsD4wJ1HXyzVWutCTk3PX1WCGRRaR5F4DhMqecihoJ2WUC4xjCGdN7",
  "key3": "4PNjLYAEfWoZ5MuiSwVqyiNstcgktqEy9BmUh4mEdhda4EshZ1cXXr1qDJUaPGG53gjueCUtiPhx1kNvHifXAJD1",
  "key4": "2wtDYe7W1SUpy1FrRyoMehFNZzLJzZSTcHMaYdJ5LMCSHZkLLhbtArYkxsohM3F85m6CVZGtV8dwpqHNbmw7r9te",
  "key5": "2YQRb5epQpxUmRg3h2kDtVkYu4az5mpW8gVB6Yu7SWbT4Mq6YZj8Wi5QhjeV4yEhRpV93L4bE2etfrG8q3GY62mh",
  "key6": "3vAymgodEejuYFo1NYXpPo77j18bpgo9LcpAHkuGfuNuysu7VYbdBcT6xvzzFJTD6j5rdofCN78nZRg8mwwrhWxw",
  "key7": "3QWbtePYgC9T8hsD7qsudHqW1d7a73sLCMK8Vtf2k3uWyfYByQzSP1yJUBKV6914B2RJtsaVUrewdZxG7nZGL9h1",
  "key8": "5TK25vmVWYE1cCYbuvdTwJwkoi7uWsbGBkhiFnLUgsudoBZusz78puC6ULUVVAacmyzcQqLhSrMmX6ZnsiMLaBoN",
  "key9": "2J7RPCGvqGzGDt86sdMZEPogDNRj9MVMACGH7fZqULf1QaNyMNBw1g6vVooPzWN6i5nTUuHwVDE3NWEVB1FWtPXc",
  "key10": "4DLePCBy4pdMMnWGnH6V4BicxCui6CgPa52zBLnrrdGSBMbqv9Ww1H5ZiLyCsw99v1tbcQyh7xvhzK7NDmbVyu4R",
  "key11": "2f3pmhYsXUCHqyTpL9JaMZkT2hx5wqdBVK3z4UkvyKVjJcCKG7wuHbjbLav2sMLFCibn5ErnGWuJxN4h5bfPphKx",
  "key12": "4fTHvrHJSb3CAWM8At2PF5LK9qB8jjaRmLk9KH85brPFMNi6k5uJz5s7XxJ4Nv27FGfkBRmfrbRSxta6heTbJbba",
  "key13": "H6PjB1k8zHe7K54t8gwMWAabkw1rUEXnjybWZWyUmZzzz4Gys2XNh9njj4DNeGy6nfesp9vqnCPxfmDAUPX1iuA",
  "key14": "5cDZgqLLGkhxP8TXFamP8Nn7BwcoWcyuPq4CQfP2pmeEDXp8RBLyd3WYbjRjSpQeyqWBhcyKQzRY631PeHNCNUC7",
  "key15": "2gmRT6q45fVTuiwWgf2T5UF8EMX1JiXrgpMJSrHdLStf5wbnMZo31k37gwfDt39Y8tRsojiSwHfSHoyMogo8Qo66",
  "key16": "5UCh4yhAuzDFRPVJt6EuDVBzMBWVioU5ZmfocLpk5KG7zUhoFJxQchZqCntdb7w5HfPV5ujQAmMfmH5V8NdUUsds",
  "key17": "5ZQwJUw9Yg4wf5pD9rJwgn6wszkhBTptEnhZQ6msW8o6zZyaSzn8pZiYe2Q6Cx6z6SQxxUbjW7yCYs6W64Y6JHPd",
  "key18": "36fBoH3FtaU8tJGttgWR4aFYkxBjqBiuLA97BRgkwcPRUE4FNdMN6M6thvm84BjBEC7MJHiZJx7xovDyt1jcy2ri",
  "key19": "3mWJz8HNoraDS4P6Ay6BGsbYtrDtBsuCCJjaHrbfMWzzXGsQy2Kev239csE5eEh4oPVkgpKAYGobKHygMkoKNf3N",
  "key20": "2jvrKquH59FuQZxYzmVP9Ac8TK6Pm4NyTvf9Xt2Tdj4jMLA1mL1Sr4N1Haj9As45ENbQtXG3TDWB3SSf7GYdn5WB",
  "key21": "4PU2AQt4QZ3gE7a9PH9V6kEqZ7ud2sgKPq1kVUKKdCvuZ5GEVCaKMVxg7BFj9JEpj98YzU9yskh7mSxiZEQVXr8D",
  "key22": "2Ru5VcsFcWQ9QJE5S9crLJWHyXSu12ebGFacHYDbvs49Jwq8NB69XitvtTg7auvwquHLELiW1Vd4RKKvS9AqL1Hv",
  "key23": "57Y6SE9wXCFiMuL1qubcEcZw8px6PfkCEdrjeeHS7nW34Wka1hsDiCZwGtzvKm5PLq5CuWQ1WxwHp6XAGioeC2T8",
  "key24": "tqwbLe3UibiJJPva9e2Uq4zbQ34G88hTu7mCh7i2VQdhunG9yKAQWih12ixAvwJhG5mKhy8noot7KYJXszUuibD",
  "key25": "4PiJiPTymTLWbrMcnEWrAYSfHbiBRjFZMtG8cQ2LBoKV9wLppU9uUGNTYo5qRHPDH2yFKiuhhUnKfPxgLqApsA9C",
  "key26": "EPpfoiszL1p1gCRvNsovkFCTnvCaUSRUrYEq9ac23r4kaGTYMJmgH5EXSaR18ZJLrzobUY5ygT1paP8tSEPDTu5",
  "key27": "2VnK6YFYgzpwMVTsEPyMF6vsSeLvD1Frj4krah7y6qe8BvYUwba5qVdDLUNzzDjPn6PzkWanf3ogC1sgx3AgypRr",
  "key28": "33yPT747i67cFXG7ZekKW54mx7Uupw4ToF9VtDhJxAmrZsgUNdCzT97eZeBiBf6KU4pj3N95hGR4sChRRJYG2wNz",
  "key29": "2CoK6McYPea75Y7BMMzSkPqyKebvYYzAuKr8AjPhkw3fx3mWWkWmBz7TvZGscaodDxyCayRBq5xhsZ4Uy944Lyj7",
  "key30": "4tthUBcNV2mDWqPHkazCGcymmARVqLySfh5u9c1bPeqg89fq5HqsgsjMQcpBdJVpRMN8r7gBMgBB571KJJseXPsv",
  "key31": "z8PPS8eWrRV9pRczMSEcVCq51HGvmyvqmaSTErzPFEnjfkWJV7fDhD8jhoxbasWXipejRR1BmNYQnHHoyPnbNGX",
  "key32": "5PTPka7FiSZ3fgxMgp4jhS4mA9YP66GXYxFrhjokSvYB11CBTeZxaKyy79ECQLe5DL1AVupRsK3xvgeShMhdGjWN"
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
