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
    "2w1wwBKNem11coh2iEVGqNgBi3aApWhrdZyfZg5bDxCKo3MWKVv2cX6qQ1HY4VjC9d8qoL85NtDfzAtKnwGHFVBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57rP7sZtYFA2diRQR8TJzT42evhaE7xpC8U9Zv9tcG6cTvi4YHwiV1oaufx47ZRNty214ZhBk1JDz5hLC8L8yoN7",
  "key1": "4HAdyeisx19JHgpbqifZn3E3JWoF83qYebqZtMBWVwukZjqWgwNFGtxoTDSGq59v5iWyNy7eyJX9VoJuwzxKUt8A",
  "key2": "2171BTFSZAQsDAWWK2DkFKM1GwJ16Pc2Yy6jpWUHW19AzHSzne1Umef2WqUtoaUwZeNNLEx6D6MaB2Khct2Fj4ce",
  "key3": "4RYxBtXbijfSNbm9pCPJpdNZLvupu4EpGxtpACePYkRe3jm6cbcmPR2YSvnDKG97TwvUnjWDaFM5RnTk4Ca9KBKq",
  "key4": "5YVAyViFF2hqLKwLokxRSuQEv5CV9FtXUnry5XCV9Y5QDrCswBs6G7fCcbbhb8cDXodXinndq9kxUEVkmPxtPYwt",
  "key5": "VbwCLKkHqBrvV9jWXNLkR7rPZWicsg45JBwDsYPHYC28Y9emMd4LbVKdDEmzUAToXWiyVV3Sjmu5x4598nHDAAY",
  "key6": "2GhroDS69pySQ1pw2bftn8QQqnRu5Bkryb3zCHkakg9P6ihYk4ZuUzFikkz4FVvCnoHafTK1uWmMuz6gnuB5bJ3m",
  "key7": "46HCu5JdmT6h5NGX6CE4QhpmCjesfdt53tKdgMNSBYGGTTrPJDVJmEVepx1b8w5oiJCmLXefPCF1qF7op3p9Trxe",
  "key8": "59tkJaUUS7uU8rKXvvLkELD63e4MqKKNe3djajyouh4oo4C1W4pkZM6FAEwo5oCnUns71o5jJPU9JCbmPgYM1K15",
  "key9": "5eqxiqWGCQQgtbaCe1B5Nv67uvy5J4GL8xKwzSRoeAaYzQRHgUCpbNS12HQ3g2AHrMVafRwg5wNTVfi6YMHoHSZu",
  "key10": "3DNNtsNJr44VhT1WThpYeaR3rusq8FC6kv1Cdnm1SGrJ8Ea7K2dJZHHFaGiMzoQDFzp7aLKDG2ANmHdBEDTqNwZJ",
  "key11": "2SFDvBGD7xKh9v3VvJTRJohJCkBVw9XbesYUgg48UFUNByL3C7RdWD2a9EhcUhYGTpFfD8sHPMME5BUMc7pv5hCj",
  "key12": "Cz7UMhfJ54vXA3D3B3wetWQoy95NimpX7Yaqp6gTeEytRgPWFH9ZGtBRX1oZm7vKy4xZ5ogJFsBSodDS7kZEYiS",
  "key13": "4Mr88hBQXhv5yB59W4qPzER4Hf9vK6nskmzREVCnD29zGXSRfYTrL7H1cqB8jojEVNBh21mZkzptoVte247uGvbn",
  "key14": "5Xj2DwNSeKbtjbbkdsG9qWXjYkhSXRuawMuqAnJcnfqJd9CJQ87X7EmH7NsU6UaQN2b5VqDDusQm6Gz57Uk88fhu",
  "key15": "2wPxwQFHwehH8cdBTiXFm2gYVPb8xRJCdfQKrUXLgtt1bnk1YasdC9f4CyiVAEW1RcCSRvYKmY6ptZSNCg5uXPV7",
  "key16": "2JCyDxGEsaWx3Y6WLvcdtpxXncRWLwWbJzVKD2zySTcPAbUupEuCi8LHkXQ2SHyD9EnckTf24nDJDucU65KMAkex",
  "key17": "5qxZf1AhkYhkf1nUSwx7o13F8SQRH37T4DZg2TTZCKzCG9tTyNnZrq3LCarzDzo6im9DuhGEuZP2Rr2vPyDwT5Fv",
  "key18": "3khCcooUsSqZMhbjDUu5kt6n8a4c4eo9haeDdCjHi2ZntByQb79NRi2t3FgoXh3upruGiEMYqmEGoRcmw71RThaa",
  "key19": "3CP9rVbx2Hij7hnVGkjV3Dr5Yrzhz5nWd31AtryaNaM6FfyNYTXkKbyK2y6aitXNr8eMShxiFFaFRcpVNUBBtzGT",
  "key20": "5qHaj39172BAAgDxSePwcnFpWRoDoykeipBebXjwshVVaBNT5vkzQ2YXXswK2vAooKijSnFVLsnYs8ay5e2yu8Yi",
  "key21": "2eLnMTHDgwCte56djV51VgwwGBQEe8i6wjL6yFqj5S8sHjAN5Ez5mP7ccfXRgXv53ktAmADq7FguzLVMFNTVjpL4",
  "key22": "5aRiynG1iKD4dM1XhJfienhU3hyuhm9j3EHjMYH58SwwwLghkaQVc6zP1mWVvvT9B1xHyvxgniLmjvMHmTdEtQRq",
  "key23": "3W6b63AvB2HuptQgAGcqWcpVDC8PW1oXe7fQoTYEvfGP1DKZmJouWYn86BtVgBevSR6NRBVQojrW24vxAZ26X1pw",
  "key24": "3S5DncQAey6P1AA5EeAfhqfG9hQwj3sc1jjBAh4D84fuyiHgursgdTdkxDaoV9GYFfXSDDFQdF5mFe16B2ZQnpbY",
  "key25": "2MSgCucKp1J3VaNxSzM9idhC8yLuFjsvjTQjNEkr46apq7nUDggjXp1jh61X41gWPXZ4bEfi5wdSw5VxUWxLHXBU"
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
