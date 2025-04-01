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
    "3JopunP65janbdJ4A6ifTu9Na1Vraoih2VyJEzb5E3K7Ubj5rzRPNv2WqLgZTLgKGgYykP49hYStsjBh5jFEdJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fkpEtKZHNg3qHqXx8qBNWcWbpuU4XPz9RUSESoCXisZsdTt54sq1dFUksZRMSPNYc66NjCetGjgrsyGbYugjze1",
  "key1": "4pnjUFHsyGN1KXiQvdoqbBD3pyc7mNa6zw1RgtJ5o78ThXFVbDU6HJS8q68QThYcZ7rxQm7iqkmy8xTocnkk5bk4",
  "key2": "2oxp1ZgLS4tEH7QDs7o37sZ1rSj1Tzm85n6u1z5cLWfjuzkBjL2Q5aToqYRkqEqApxhYCXbWBWEhb7KGr1fFhHH1",
  "key3": "5mTeSJYFqQDM2YxcKHWnNJEai6AX9d1P8jzd8pscJQ1WK8Zi4acUKk8QYuhmy7k8k8mcat7QX9mES98jawSEGYmk",
  "key4": "2QuYk5FsypUFFQWCpHcNAeMrcL5ndnQZ8XgJbak9eUuxpXHb7GcnKLRE6t4xfYGBVvYb9oM7345mYZ6aDHbxQtX1",
  "key5": "23porW2u8w19DTS6N6jiZkz58ApNaomtexnTcFVcUPyBz5zoFCSSuUcRrgwNKrVU3EDFH8JJDJL3gyAswyYtvP9H",
  "key6": "Wd6TUapLJH6EepBDEWJtvP4unjXvbCeZ5v3zojPaAiVDZeyB3ZH9i3GsSgBfdxH8PqJrhMzFTnKZtnNJW38zLfS",
  "key7": "651MWu7tTkNEwgw7WqZKWMKFnNBZZTGu3nQzDEnbaSBbguePq7x92aqFghCggKZNxTxQvsebFVU2Pxubp8YDD9Gm",
  "key8": "4LN4M8LMWJ5u6b2U1iTdbosJ4WDCfxyU7oGVETmy2ptV61zoCxhPaYvHAX1p7mqtmH5TccrCu8jtXBFsiZDS2N8N",
  "key9": "5jMjBDiRXNrpJavvUetEpQQuJmaSPXQyNM12rRDGzKpwYjHm4ipBPnK71LMkUbG2kERQBpjJi5P5CY586XPbhnx6",
  "key10": "4uHKS3Fb2w9BDrwKTAeuLcrUDBqsFcpMPzDbyjr75KA9jZMVb72u6xQEhj2gXAE62MhKngmTKPmJ3noBGjL9BAg3",
  "key11": "2Q5xffxRtxHGhegtiQbfXwLLyrkPwuHi8QYN4xxvLrTejUo7NTc5FRyhoi7TfcaWksmQtxWRaezit2NMguEQd6sh",
  "key12": "4T9oB3z535EqEJvwxdYccMZ6yzc5tchxsMXe3QjQ35LVeiyMjhn8XhuNLT7zVqFDADXeqecbmYS4jHJTcbGdArvq",
  "key13": "5cFaA27NFtKZthJ8aNN1VncUaP1WqPZQJbyeNQQCZgNF7bpbk726MZjSnXQkQYT2V9GCSGRK1tV8iJMM62QJj8LJ",
  "key14": "WRyWYcdcG5EVknoH5m8uLkWUCaiVoN1gDcmqiDPoe5Su4UdhbSwRtehhdt9eMaCJg7cHkesMFcSDd6ieHAhvUke",
  "key15": "4oogp9nvqZV5guQiTmgjEU4Yg35gXvPYTCbt94ZepJJtu8yDJkCfSKcj5zERa92McufigEMvHpiUg3WvwoKed8aZ",
  "key16": "HmwsGQMRZTNCRUus4e31Sw76ExDkyJcaF4jsaEnhYkcuyPYNNwrseGHpcwz1yCHLLeHZu23Ywz5S2JgnYLj9dzB",
  "key17": "3fDUTMAYNkTxncthUcVf4zXkyqW1cbrsfKYvAo8qHemAFYYRKmKkXJnWhQk8Z9xvjvBg3Sec5iyu5ajL2jxxUhPY",
  "key18": "2Pyg1dnwvbEJjnevDkKnhtFu23w8BWZbAdf7kvGd5eNuMJzM7d4KRqDvSUisKQEGuwsg8aSytvxMPcK76JqcSp6P",
  "key19": "Psa1PTkgEwWkY61TcFtcZxo2J8DNJWsiXDkPpWhupnyEypQW1jWx5bY4W74FwVinot8q5YUQyNBLC2s3Gmc3zVE",
  "key20": "4ht3VskbWyUSTZXiYPqBnMQWFVRjKW8sW8UTMLtAdbdR7DR5R22QnFfuEL3zBHcuJNQoTaXNBhrPxQSKj1vCpC1Z",
  "key21": "65QfrBm686fzXhyb8t5AXC91Z9UMX9cs2kQXN7Z6fBV5wJZkphhKa9PvD4dn6qLiq66ENyiuguNPLkws2Tzhb1dR",
  "key22": "5FVmMnHqxqpzBERPPiGBxkTmRGZp8mQci6b4NmjDpVzLrKWcPiitif2H3pqSBANfKkMdzPTpZivzecHqxrxgivVA",
  "key23": "4fgEYfaLL5dBKouDjb2UAXCcZyc1vRVgrhRZe1MHoAsRQs2zUijFwRdLrmZhP5VbvPu76ivR6nz1HkwtheeMrodL",
  "key24": "2JCN4Eig8ohNK4Mg6zD2coDDPKrwSxGgSnD3wrjLSFpzwzCaaiJoGeYLrubyQNwGujrqJtjPrhW9AKTKaJbq4iS5",
  "key25": "4YLBwQoZQT3U5tEmByUNqL2Kyz3534eoWXnqrhw5vFk2cSBssxdFC5hb3WbkehJj7beoHZwQo5LopxHrYAgGrTf4",
  "key26": "4QQm3vbp2SVwA7M4sKJX8MhcZCfzL7VavHiQZHGhpYhBcSHgK29QgUfqpkwnyWPzwWRsB3yogjorZE7QDRDYh9a5",
  "key27": "2c8XT9dwvx9vFXxdQDn78Mt716rynBZbcaZfPVJ3GZdPmQbakWVDMY4c38UHxEZFe6GfiJESngjRab48i2uFWGYm",
  "key28": "5sqbT1NvxkRet8ZnB4mqQS3jwsGAqBXYaJL8PmrYP5yB2PTNyrL52cs2K1MFvcZKHEusHZ5HZepC5GoArn8jffyc",
  "key29": "3N2yrZpvSDSAXVQtUL8keNNufuuhPk5bcP7E8AiwtJGRtijoEUEJTFn5rTE2hiUwnUFexeM27GQFSFJ2no2dYFZX",
  "key30": "4AQtNwrvgfzPX1akYSfhv5MgjjgMc9kG9VQYrDj7vYLjDsa18fkg75WbHhfCVVHJzycY5VCZxeu9MggQCvD9hyF5",
  "key31": "nnEV2z6VnNyxbyzjUhXGkfqhd7WtnhrTB7f6nSAuR5YT8Ppu73brVpZfjsiJWZrgEpXcCno9DZinTUX9kmGTmzf",
  "key32": "5tBXXP8jv785hMPruqjgbFqG9FY6TZc5MmzBC7XEuJMCTHbha1RobvJkX525aY7k9LtmpXWG2BqyFYRmuU7UAg38",
  "key33": "5ovLox9PxiUbWCyL4q42Q3rwjwUJd1bJoeNhwzarhXcupxUgQWFkrvD1UGZs7bgxFgjSM9inNB4vk6waPD97jAHi",
  "key34": "2ZSwYV1NXsAbmqqw2tpAB7mtY9RvK49Waw285LjqtDvGdttYemKN73YTTUKev2LhsBWYB4CUSefGqLJVTgZSQxEQ",
  "key35": "5LZiPWK5KkQ8CBcrXNHQbsQHF78nJuftg7KKcKuKAG2kXc93en3U4XxQGnkQMvVmn3qgzw6zryh7Ysb1qLSShmPM"
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
