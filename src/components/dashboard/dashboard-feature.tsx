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
    "3ZipnpCRgHf2YkJxdkehEQCqZ95zeT5ki9ZPfpiaifpQLZtw2CZQwJNaP5CTsDxxzpePHMZLNsGGdkfpAdMtJeSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvJwz6Y1rrHeNDQscBn1LnrHFvCAXYg8XtswJ55XsuB2oFQfdiR4sbhbLzGU1DEE86qDEuXFAoMpjHYTpFzvrx5",
  "key1": "ybRrKkmvSbpbaMYXGrED4pjyA5UfeRTNcVhbWLBZr4psvLeyLCYn9HwtXn3yk4URLRpzDX5tAuwwmY3p57iEiAY",
  "key2": "59RquT41DqpMZgXvxXqRKQ81zwTmsMFCNFjVAnmds9xPf2Jxs9AeVZWU4PJ3CF9JbmnJ3AE5zar5hQFebwpqKgUm",
  "key3": "2D4ojdekvumZ9xBoaDy3Hvj9j4yKBRM85rEXTzgwE9M9VN1pUVNRSqCsmFZbPWqmv1CgA13ssZc8FS5YrpQwz2kw",
  "key4": "54xj3JJArAh1KKVUz2iaxarPGY62wjLuzCP6BBvddoRe2Xw6GPUyiHD4ha7uexVM6WNoG7XbQWM6B3q1Azc3Pp21",
  "key5": "123JPu6EA3xF5MVVmhoNn6Qqi3AYFEvCL6FJjPDK9EZMiJh1CXi86GkaLwBpC1BWPqs22nubn3SM8WjVLYdgaoYY",
  "key6": "2d6Ltfgqt5AqjjszcgQT7QFCqjkbz6XMYfQZta4bokZkgyXZx9RRYfPRXgdm7e2DbypBidWHq5mjncQyJH62FPRw",
  "key7": "2Q3MFj3SFrhTJ6cGpKXWwYQkfBmyjex1kM6PR365cWdN21ux5yaKxmVtzj4FRxtic5caDKZMfvCAFbzH6SLc9u7K",
  "key8": "29WkhFjH55r9TUWK444pLGCf8dPxa24iAV7ebbaqeebPrWg3tAdqWoZ1bEtpyJVqZVU8x8Jkmt6AmzEA4P82NCcE",
  "key9": "zouQRzTSb5i1JoEFqrg4xFM3mquoMZ72FhZ22GdFryrEhXrw1bLeJWSVNmPkq9dHgFxk9W8GALtXZDFU5JqsmVD",
  "key10": "5h3DmGYPm2HQRjWmLHEop48nysBWuEhDeasxYxAJEoqZ8PA7EWc5pdMpc9eGxx4YffBCweQRfTpuxcMTMiKdVgU9",
  "key11": "47Sv3XCnbWG3MSc3RyG4tXt1qYMCzTsbZuKTorT5mwxwJaUBQKHKvyJPxaEakqav45os8QS8GCfM4E5KutuBMA86",
  "key12": "3HXvJ4JqfZfVAVpMnDszW7yBEVx5RYkSYWPBnpX1GZNWJd46Cwze1qK7jUAEWwjax3k5pu7ZKrQdJKQHxMKn199G",
  "key13": "3NMsKRGCekh2enGcE9ENSuncqPutzThhycSpCmrdrHZxJedmBTHRm5b7MsUWYfifdVFnF86hr35yFu3vu3mnVZq3",
  "key14": "4LFqChf9byU9th15DFivMJSdSxomyq8iJFhjVzYqxc4EqM4nEknqsUW3eW8TK9uesPqjkTEk1oUdRj6dBBw4DT3v",
  "key15": "54cFGDa5uAVMwh89xSibATz2LWxd571Ty5Y6SzniHc2MmwoZKa6dF3aeJLpXUYTMBQiy8xfwnSouZ6QN36cjETRJ",
  "key16": "2gKytAwRBLXQLkQopvU3S6kNeGvYmmMTr8Axe16D6ubjBT2wSyt7Q5tb2EqrU814342n1ft12HFh1KTsM1MSCyHS",
  "key17": "oE7oBnqgUMNZEfk7vRp1HHQJCB36cpvi12NVhjVCvq9XpNWjjEmugKKvtZbkzpP8DUmAYaRfH59Dw8czqKL89DB",
  "key18": "3RApYnwbpr52RrKHnerW3crT8qgVVRj2QYPyMXTw7hxLjkjffWE6Lj2ADD3cKSiXSyHs2RYgWzEb9cVFx7vRJhgE",
  "key19": "5wQzW4UKcT89MoVaqVJvRVYLYTPKgaVDn5VZCvDadCHLRGSQmnMemX8cgxNKn8xM7oGuqwLbL2c5KN62Si5dkwYS",
  "key20": "61UafF7MhLkz8npj5FpvtVV4w81ZzMa6eDRR6DsQ4VWjsH52V3e8zSgSCMiMwk4fHdYt2odSeZgMacCCrfqnqiBF",
  "key21": "rpcqnD3yYjBDYmBTRUT5A3VFeiYcbgSRR8zvqENpu5JNiBoiHTLVc8KpkC7SHofF5PMQndExstQe5PoAK51wKUm",
  "key22": "28mW98sCQmzM6p5WDYCyiC2WLHsZFMEMzuD7hfBPDGojFrLcaEoXHGPqBeKcCTYvX36o6VjUZWZ5hsaywUVW5qZz",
  "key23": "5ua7wQy1jzRCUputoswCVynxZ4pFTsoWd1qxjdXSr9uHPcacc6MQ3CZfMg1FpKxRmBMnqay9iZvJ29yY4VMpU41M",
  "key24": "5jWaGh2LMREMGC3v7Zz4AoYuaunEG1n7n7bAFeGbqhyR4MPyAoWSb9kkcHAPDy6YBWqRehuwmQEhk7CB65keUzrZ",
  "key25": "3FV7dR5oBFnEAjhdgd9BTUooYyvS8mid8GaiHYryi56smcivpURqEqfXhDZLgWDwwtseeLrW4aHbj8sFm6xo4uzE",
  "key26": "3i3sZzEt1VTsNRzTpccuc6PtYWBR7NdEnxKBDo6tr7jwNmhUWohM4AWGZKGoYZBRjUzyaJFnq5raegbTScm1S6PE",
  "key27": "4DgRLyDufknRsJrWrqfMSP2tPDhfN7ZMBsdKRupgPBXqyHXw6mqfJ9d87jpnzkJnj2qvtjAG93JcyebXbggdGGFd",
  "key28": "5GGL5UFhE2j8wfrTpbKdFdJtTpywjERWAALS2tYxJK2Mym7rJB5jqiVmXhLrp9hg4A5YSLRJYKneA5SonzH9uG9g",
  "key29": "jQYbETbdbFoFQyNMXCXZDZDT59YL1nqZMg5xHpdesTGLwvpMg5Jbu314Yz7Zw2s44bpJGokgbuY5qaG4VowvGbR",
  "key30": "2eRoPTzkgYqXE5x4V8UpsMYQBGofU2XZ1GPEtVCctEQEyPxCvQqDqeG5coAdQMqNjVRuLsB5rJ3XS2yqmBwfdzj4",
  "key31": "5U82c6DxksjyCC5h56evsbndhLb4kqM2fYUeTMS7TyTFBbhbf64jAdj67Yy3kADKfZN6Zyd7rthfvnvnv7J43vqf",
  "key32": "FVoZeV6eTmvsA5AcMr5rbvKo6kmrqKWp4wmL2nveZXT41mrTjTtN9NvzL8UJUokWbyFVpmoWcPuXL9Xqn3JeaDb",
  "key33": "3SQaFwqCUGnmh2cFZXqZ1XYNkD2FUCVMsApVcc5NEDPznnDZQcrspPNFvMYjp2UL3MxUz7edDwCRbUuGmsep4iRD",
  "key34": "8fMn6kgKi4GWK4ytDtyrn7Mj3TKkbacyR9RKLgwwd2mbZ37ucR6kqQWF3yazH4t7cKYsiijGNRBKheMii2yerTf",
  "key35": "34QyM8HNeJjZHhqC3pRnmstiPu44Fkap9k8w41g38bU1kx7yydNqmEQaQfz9QgAU3JpbGLA1mqFqPJcVSs2c6o42",
  "key36": "33CbeBdTLm72kFcZhoDn1QPkE6J9CwWkPN9UBG9WLygZd2P1Ny1fXUN6Ag7Z2Bi4QcF91wCwKFfSp5iz6azzvUUy",
  "key37": "3KCLURAmVkR6zJEgikUwCFDF8kz37enW2sEo62g8cZad45XYJ7zxQPNFax2E52p9cEmhzYfWwyzogzZFwBQLGRsA",
  "key38": "b3f8WMfDZH6DEwoN6918aFMJm9XFoFZcZpp659g2HjbRG79opCYaqtJkhVUGRtAWbobSf3uM2gTEKyoknA7B1Dp",
  "key39": "1N8Fqs5HDvkWKEpmdQM4djQvNAS27K9UrTDW83VRE5y6HdM5mArRReKvwvmHzXvw5kWJmYwgpj3fp6UBxZoxfcf",
  "key40": "4ZuvGi5veDiP3pdmJTNmxihFczUUUSf1CTnTvcrwauzAcExJRWTzsDYohoZ7A2YsxxSyPA3KtdAkKYjLgQGx5P37",
  "key41": "59J38LJCPEsgC4QkBKrqXRJkMGJ3PiDoedG5ta84W4anLbYomckxemxPcBseLNSDMYShTgL315oEyg76nCuJDjhe",
  "key42": "aaFMg33YQfFcCMUZkcwuD1tykAcLkJKe3SfooMouL2sQEtPPhEd5nHnG27fp6svoks5yK1K1oFMtM1f3aNyxCe9",
  "key43": "2cnFVeCiAWXPGM6Yba33A4gfpqZVHQ4C1iFSKK8CCdY1Qy3ExYN9YXcRyX9emx8zU3fVAkUt8v3VP5iSprCbmeDd",
  "key44": "5zsVauz2z6hDJBBFDKWKccWMXNqWqAwYeCUnAru27hmLxotwxVqxWSReW3WYvgPjxrEbKKKxuXFsN2wUvjc8VcBm",
  "key45": "2YFWXUZudi7qrgKoPi3DVyVct7ZHgKW8cb2jodhcqy3QR9ztQ7CTxi5xFbGpyTMvJD84WuDtPsY2ihMisjigDAWm",
  "key46": "4z6DDpMFax8fJnfW6pWpB2VTHagDASq3VtFE2PJRhV8gGUkTNP3P3dV5ExyKhzQgRZUEU36bo6Uv83agHDsARTa3",
  "key47": "2mFg64qAZ1xmw1JPVBV2TnWPdwgTi9cB4wPZmPy3sPifkdNCtkYxPBNv66YB7jTYrBbDapVHyqyanfAUfJHPsjiE",
  "key48": "67poQpoZFbnRDsuEoEfwZqZETiXrRB8Ct7dhHNNAWniDdt4QB2PSaQBwSG7mqrD26AjhyQHTLRDQwEK9ZDRqrge"
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
