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
    "2qhQK18Jyv2NxcxVGE1RkrGt8rijTNsnbKkxTdCuwqPAsfUQuTyKxq4ufoTnfw8QThc2eH61CCzdiKm2RqJ3ef39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VNVYZKKLdLcN6sy9kYpGFRz1sFHLy56U41fcnN9CZcMi8cpxz5vhJGPx98qVL7ZX4wsYF1BEFESHcv1vX3spCwg",
  "key1": "2HRsu8M325mBGFvFybexkajxXkxrmnYrDw4JYs76AgobaW2zSVPDgzGSUnmzxorDVncekaK5bnaNzvEJd28YD5AS",
  "key2": "5Bjkh7ZnycpkiRhgLt6Kwrrbmgq7HLDqAznf3RYs19g2Xf6KquhqfWWsUdQLuXr7Y2LTb74BnRf7d52F3gAZVoKC",
  "key3": "2G6qsqZJWmxuJK2Tic1xkrH8aq7kXdtwMPAcchEdf37THE4Cd5PayVT8rSn1ikpA6zy7qy8yVQaifHjZjA3tXx6G",
  "key4": "3ZRd1SGh5RzpgkYtpg2VFJKSmxPEyfCHeT7d7jr1kXNvEurYXMWeE3bBcTjBWpekmY6Mf4sMsYPB47WUU6wM3nuB",
  "key5": "K8jTTHD4t4ncwtLwHdiLZNYJboqNDZYKs4W9RQ6bHxqTjzecY3Zg2kKkZFvru2bh6Fx3DVsP6hy8mnRZE4Wk8yG",
  "key6": "Hgx1EweDCUUqzhJctUf8MGgiR8rnxJkSGtTEvtUpY6k8bDfC3zonbz1HpVeuu7Mdwdw2XGTKR76ZvjXo3QAs4VV",
  "key7": "5hvHD6hwYQQF6dzkZ1bUPTZubty7JW9Yng1UouWXvkFkvYssLTu4G4VNMpNxaBM23CKvQFKhWcKS1fTKrz9eqFEu",
  "key8": "rA2Sa82SLea3kSN1gUzhoetPCJ6w8AqSGZ4AE9KC3CvziwCAB7chRwrhvgqqnRhnpcNMddbCWww95FvLV1QCzt9",
  "key9": "5GvRAHAoGsX7H6BBCt1PpeSiDxsGpVV9LwRjZHeJaHGL7ZSwbZgTazYA8LL1rKrY6NKMJddLBi4cLdGh52rEFa8k",
  "key10": "3aukcKDF1kWinpki6Li8kioGpiHBR76upYXb8kQiCb8NQGGv3xiKMuSxpVPZhmTmDHKFjqNnkVXw8i8m2tYXTdT4",
  "key11": "2Wp4ykf5PsM7XHhMTb9kCa6wHKstcjSzop37zS3j5yKofbtdzmM4RhDaKGkEngPnWugxq62yp68dG3VexZ4cJ1n5",
  "key12": "5MhBEi36wKxGp13GWA7J7sV2PPHMoo5rKFLWExQDPiR7MCdLQ7MKbr4U5Py3JDYQ5yBmeiJBfYYth92GgbUZjrik",
  "key13": "4YygoACE2mgi7gKVnNzjHs2qwZhebn55FaPyJUJP5mXJ42TH94g4LJ8zTrjFK3X5hdinY5crRqVbZLKfmTgWfZjt",
  "key14": "4LrqH1sHcg9W96a3g8jqCoG12D9t8GGmS3BX3VBAFY56YnqkkxM4bPQGhWa2npvWwZyQgiXiiY6e1G6kwiTpGNmf",
  "key15": "ko3A26Cer5ATK55RsN4vnyAfa5VLD5kkJTWCicqAoPUkjk2y3hdCxTFuBvmV6osrPRBTx9nhs392ZLTq6YjDCWj",
  "key16": "5LpSk1AboUSk6KwWzrJX9uPnBDc7ny6ky54WYApcJydN8Pgvm6kjP3Jxy8SNDKomE4Ge7ws8jcQsitdghbarJqNc",
  "key17": "45npxNgG41aR18J5GKic7LgPyhJyxBfnATdmMSNRNWy5bS6C7T3JjL926rCPqwrFh6v6HnZJHyM7JaW7XTV35pQU",
  "key18": "2YrVsoDgfsExcuxbaLrAMdLhYctJpYbi1nWvPWRUyqe7qPPy3ieExiuRANEEFamYzwD24z9YoYPbq8BCSw7nnwDq",
  "key19": "5j7pXFhzgfroDQuN5Y7kyoHWDCLaH6R52WSrdE72M3ksAfAMzrybSyhrP2afHQpV7efyTponiaqdkeXSyVdpp6Bc",
  "key20": "3uEygYVc4DGxAFw1tgzZ8JWoh7i4kHrbrqBCn8pHtQf71vCUwXHDHDrW3ADPWnR9jMQGYeDJcTMB85AvwmGcF7qh",
  "key21": "5i9F4LczVK2NAbfrT2KSAgzccBGAbkcaN1dFamAPLFAgbvkK7go3aqb5vGbj7cZU1R48SoX15hyhWAExvVrc8Eiu",
  "key22": "UeNs7ER1x5WDyTWKzdjVqr9YxcNbFJcdasqC87DUE352BbzeVWZ7L5DfYBNrBNoDGdq5fg6U2pzn8FnsmWxPrrA",
  "key23": "2QuTHUjanepdQcv1fGEdA6QGhcCm2jaAvcpJtNpqezSEn9KkWZ5nnhZeGs2JXhYqeLBkMFPTRziWgy4CGHZRYbvU",
  "key24": "22PqBkK72B4KBjFmXuvpVQTCutoArZ3hTsrK5nfyADWwyaZxMA3deF9Z9mBEqRkn8jotzA6vwz461jvekmYcSf7K",
  "key25": "51iHqK8czdQVDqYtWffumV6nxhtoKqgeitKYgBF3bKuGeB62U7eUBwSiDsLiUBvSRg782Qzi7Vk9a9hN1Hzi9wFS",
  "key26": "2XpFygG6tJ3hCyGA5KXm46QJNEUcahL9F4qMhLuNuSk9BEzPGeaW93LaX1JZ5knkQSEXpW6j8TckAzgEHdNeGVMr"
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
