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
    "2te1WbpjZmySyPwCHzw1PymbfFzUtgdVJ9pDHuHxCBfYbWxK8NYuxENr6CPs1BdsrxAUaQCjhDb46hj71GUThF3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zUuAqPbtRbvpRw3yyraG4ZCfwdXCTWoog3jdZpbgN1262u3jMo4oE92bjSAVKSnFuytVLfp2jsuv1y9ufFvj9b9",
  "key1": "4uiqAHqL8SqwUHjqShm8T6PEPYRBmXxn4KRXsJnbEWendjKux7oBRWgsb5sQWDNpCXa65kFyAJWgidAPaw11Ep1v",
  "key2": "4TpeYQjjepJVNN9LQ93JYsjsXT2mtSJqj9zr4DNTKX1w98cKfgx8BWi6MGtSA4wzSU8Re2Nmy9c4sTm49xG3Wowr",
  "key3": "4Nqc8NmGpjDgsmeTfbBPt1YpcRwuD5dcm813r7G77U2d7rMEi9bZjecv1K5krN4jvJEVwVgjELF4hrs7VRQq3aoC",
  "key4": "fDrfyvv1xRt4wUBg5eX74RS8JoxWSSBso6N8mwuZPNPFjkMCJjtPqFpSmevByWmDcTaEcwyu8dwU1rngeZdaUpt",
  "key5": "55Dfxqh9xPT6W6FL5T34RjNkBJrZgKcDKJ4dEk8ne2VoqN81seKcXCQztUhcyq1mMGNCa89NNeUVTsNNrhLC6zu5",
  "key6": "4H6x8cewaRj4rLhTUo9YV1QRciTkErGnAMMQs4n2TBTSKHcbVV7UwtN1NnNn2xx1Cnea4yT5pawjpShjv7ye77Zp",
  "key7": "ewtpPFQed9DamBQHqNfCFoq2St3b79x7XXfUEv5JMJui1H2puoUHhk1vDiQ4qDcVkooRnzZNy8TP3JkAyruX7QX",
  "key8": "RejZZGDVj8zfN7SmUwnsYycCdU1ur5k7NwDBtCm1gxGKZA8sHSxwyQ51cMpx32taVTToMGZDHpccE27z9Czivbr",
  "key9": "ZETmNoTLRWX9ovY9mfmJGZruTa1StDn5FsD3UQbFqWxzFgtfj28ogXFS2jA4vhxFHwF3pPvn5SwUVKFaAxmJaWt",
  "key10": "5fLqx72UnAjCkZpbb6LMdrEPauzr1qG4qwH88FZh7ZNbbfnqQBUaae7dSvLW6GU6FApxFh3b7YpsaL4izMgpm4hk",
  "key11": "ZrKhRJqpGwisfryBYxrUjnfhQoEM6XfVoHnCpANLa1jhmstJQ7PCfHsEP6oU1Lju83BHDXQX4BSt1FsfG6C3Tos",
  "key12": "2fG8nkymbuvup5FQxQXgpn1b8cDaKzMNzByqE216UpSeFS3p3WQVdqCWwYax6U3jqfDtrERBULkT81tvu8Pj1D6P",
  "key13": "637PaRFoKu1W3gM8jktzqHUpgffRjXkysiNzqdKLqw6TST42YKKveienBE19gfq1NjCxMdMNUpEXvJ6rs2NCeXPr",
  "key14": "fXPYPiANfYijEUAeY13myha8tpBKz3Pu9XVBxMNgYuNxyZ2wv7NkXYX2J3woJV4jyVZh6gxqEG4ZPg1gc9npzPa",
  "key15": "2kg54CJK3efXW6D9Am5AWYiVSm6gYVXtQguv31EH6Vrv5c63s5gyAgMhjKesTQonjfcnTYkAfmqsq1WUvYrqNBD4",
  "key16": "5BwGCmvtfP4MDsMJY2yQZQZvbtTxjLwbaVFsWVaydfPJFcmCqqwYih2cDK6v745tV1S3oN5y4wjJg42TzNtjpikg",
  "key17": "61Fr8mFGPnPAVL6wGvFSQ4Tqnmdyu9WBEJPgyo4hGYCe8TJDhnAZno2WgCaFpXa7XknAbEzWGB4xJKs1knuhr5Bd",
  "key18": "3uKp74SfNLevhXwurn2NTMsTfEsJTQ7JGjWkHtwSogERtrE8TQpQJ39yrpKAACjfGs67W9fPtpnCPwHvJYYTGWHW",
  "key19": "2nKeqiqX5JHYjZMzppy57eCAJfZ5UZQ3sN4xoEdgp5qYhEsBXv1yT6gHSr8UHsRPwZCmvsRrhu4nuPrXFoUP6a8R",
  "key20": "3qdzpkuEEHcRuUthdxwimnhViY5d7XNccDHWmoTp1i5H6n5jFJKEhya4sUS3vVk1bfqg7PNA6fV678vGAjXrmD6x",
  "key21": "S9ZGcjNkajZzd1PQN41debC2gceovykEhf2zYgpJxTt9663csjoNuEGR5aZPHqR6dijnHbhwGPxc9mHTLUNF86C",
  "key22": "4KGkJGVSNvdAbGuwVfGE9oEdD3CHZAN61jxCoPWWcBJ1w3tePiZxYcd6jd6HbhmtH3u4qL6ukvTz1yqjPSFuUeTg",
  "key23": "36VXmXgD1AZiQqMFHmNPNpGkUPTyjT6a8NMTsZBZEUXAn4TSqaE5CcYnBPJ5vzdanMptF3Kaj8rJcR3FLwZrDs1j",
  "key24": "2VPMg7cPSfifG9HZPuRnY2HKshg7ztp2FxJ9ahHVhoJ4yL7NZ3KivJEr2r7EE3Y58CPkRMdsE1YiSpbz5GadnQwn",
  "key25": "AHNfFpmeG192x2GgJvgwxRWU6faT4yzxDStSfmDcMo71Fs6t4Aek14PSCeDHtVGko7GMKjeoQrcGuR4kEvVdd2o",
  "key26": "2EMsUzEtvuoUMT6eXb4vJBdNigSjfV6c5tztrr6Ea79Y4V74e1UM6bqmb87cYkk1YVAz6ov4YLV7LGzAJ7cRM7PM",
  "key27": "55cc41BkKkva14CKQdMnfPnyHkp1aaXsnaEwjY1caLB5kh3pt5sUPJygYQYTck156nHKgRU1hbdGoNfodYmDTEyA",
  "key28": "36zoj8zcUR1niWCwBNypvYiNsL26m4BHUK1VRFFznqHugn9eZ5QH3qfz2Sd5NUiFDs3QUE2YefUYViZPmGioSNQs",
  "key29": "3Rq5YwuXGRrF3NNaG7VH7wKdRY7JBkW1Sfu51hkxVV7s6sYnp11V4KBCyRi9PeNMdJd2qZmptLRKHpgGkvD3qwhF",
  "key30": "36Ty5cioKwTEsFomuAnrtjoUorgmsyePc6JcaMgK9NDyRATnvcCvG1VAHSb5zYLLvoSz6rvCcRyHRUoypzoqbmEq",
  "key31": "3N9sc7WKNbwwfbwLmvDaC1zW7JsuGZQULbgjgxxtTiXYUnepQUiFuuSmLYebUCVRhwPW9FB5z6KD2FaNax7JDGnU"
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
