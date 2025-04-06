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
    "2GprNFWcdiJaHddTup3d87VjC9fgg2YKu9iMtsSZESNiGuFAcz2ZLpapitN8E5Jf9gXd2NDebz9bzi6czfGbhoRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ka33kAB8kwkovH6a744Cdu3NA5mncJAtzbf19mTN4NZkJxy5E6cGxxsTp2LymfYzcttT8WSxCJVJ9f5m6DXUiX2",
  "key1": "3C2HZasbtQpcFE4XH55krnqURvtNGh676HUqREwqreZikHRxP4C2JKe31x7vFjzVfWVeUGp3voFUE6jKj5wEwQVb",
  "key2": "3tkEQRVmfvWxsL4btgoU4QxTpdEuRmzoKuuzWHUDVg37YxLvFsLZYmBYr8kUTxgi9csChQFz6c36FEbtsaFgqgzG",
  "key3": "5PcfUe2koryL8JWXKkH7qhP22u8QcASmuysBU5Rn9vgaBTWV2zm56hKK3Niq6QZHHuXVJWzcivWhcWHX8cdPi9fY",
  "key4": "kUUucXNWnCQpy4amjBQnQjR4t66D5AKwbwQC6SMGApqUAzL5ZJBPekkAWJR6r45M2t5TWMo9pFHySKNSBJTjL8Y",
  "key5": "48Fi8cTG4o77V3RNbtJiyiDL4KujqSqSC94xNMMS9sia91GyCFAMr3pKez8LD22Ccpjrt6URpvPfy5KWQFmWACXr",
  "key6": "5UN82GGLmdyVLD3CcBuLA6oKH4W5Eai1NPyxpmTyDzEQB344HjYigV853ZzmM3WcckcHTNmvPjgsRUrZfQ3D1hZZ",
  "key7": "2peG5pvgDMQ6f6nk1BreaFLJoRZzM7ikaKTHoJ6cCa7sdkjmYBceQhHHgnCjvpuKcj49wBtpkELYjAxxoHARA5Wr",
  "key8": "4Ytjee2ASgDtq43hfqFwEVKxSkE75AB9jSyBFErUTcPKJPXX3SWs71YPdJsiy255HGC19TYmHPdjGgJRp12RJe3U",
  "key9": "HMF3jzxL2puLtCQoT7xXC7ZJ1QDdehRE97czhUTRadvsFif692LKeizDu7EnV9fPfXZaawRczguqBwRRcPnxv9n",
  "key10": "nQKw1ueWqDMNYWCu37eBWCEu96euYsVGS2byw34gvDFLqn1fY8wYYe3Nb4qtdKSgHFwwBaAXx2WUn7Mk4h9yQnf",
  "key11": "5wNjzrxjpfa4EtZVooswP293DH6eaQfyYKEwTFyXG2EZHNLiLG1V6g6prr3AhuLoMS8wvg85wF6LBzmSKMvgb2YM",
  "key12": "2qCUFJtzJLGNT6TB4YeRQex11Eqjv88ginVsqfoBcDXsBjMXFymaMDGT1UG1aoWKsCAGcuB71XM4xdfDez38fe1F",
  "key13": "2usFcyDxcA2N6BdzFbidbrfd5JMgCv527ftaiVi51RDETCL19DfJcpUMhS15u8srmVQCbhVFGD69vDZhPP5XHv6m",
  "key14": "2XvQY81qmEXPGjDbCGDRCfvQGE27CfGXdQYNNAaKFgS5KKQXt8xB3w6q3zRVoqgeq5JUq8pUyMZo5bK9f5aSRZDH",
  "key15": "3f394Cw9UZp8zwQz5eUehZkgRP6bfN5Z1fvRLY3WaZSTHbUGEBvkxTzC14wDQvaZyQiAAPNERVwEUB62vV9j6oU7",
  "key16": "3W39FjbF3kJttPhXMQtP55afvxVXGEgw1DEpcvXDHFqXM9TrhpGtWLwpdPh8dS97V2zsXTCfPSWtDawg7Ws23z29",
  "key17": "4VdJkV8ckmP6J3EKGj4pt1KnhsbpDbk5ykdNtHPR26rw4V6pxkCrieD3r23J7DWLkoBDQncCnY5ZGQPfQ4ab3bkk",
  "key18": "5TXA6n1mARFh8Cm69EWxZYekJkLMfN8vpgfkEVvP3m3m7niddhziM2BYEJaxxMLQKxBx5jhgsKt9mUHSTzxfNZWc",
  "key19": "x7Ju2GtHLkorTwiWWGR2vhhp776m72Q6WXkB6usymu8qbzVDEuKrKC5oJGtZw5rkNtxXwNUgNSw6Ay9mPp7aVfA",
  "key20": "XxPLD5EdqrBKNnvtmZeXG9sdJK28BHDCUoYipnr2U9tNuBRidgNJQYa7VhKakK6iVVsvi89H18qFAXFJTzanPRz",
  "key21": "2oPhCsaomAqdd56zE5dE7ik2oqCobUN9uAwqU8Kz3d7v33eonUrZxQLxuH1J1GtWg6u3mj3h3mmDNANsB2kMmuBM",
  "key22": "TroaaskL5omBrkHv7aSAZB9PtER8BGRiMcRVun67YNYcW2cTe5KZGCfhrAeJMb1uPsPhT95f8CEDLSizwmzm9Yy",
  "key23": "33YUirAGGA5x4aXTxrfuav4h2D9vpDwD7GX11vXW9jTTMmAJBDmRMX5oEwkJrRmwXx1jPXoBYXaVLgZUs3TMW4kf",
  "key24": "4YNsEa6nGoC1sCBtAxYZseUL4veB8pyZTP68xfiaHxQnJErfQoUiXxh1A3XjoK9CBe8vUVXKuYTqhWmX3VSDn56k",
  "key25": "4GPh73tjm3NByyYJopP5NmzJ7jVxB2zUGtFaFJqasocPHNH5aY1bPz18LFEwCJsjFkSjEoRxDD7XHM4iYp41XsQt",
  "key26": "4Gsr1EBJyFDjs6cSXUwNinh3xR8Yn79eRBRkC1VzzbTuxw43mKcXvjRvPZWTj2fJgrwNN2J3o1iqJL5mQmTbJhvg",
  "key27": "4wQkgtCRtuM4nkos2xc5aELsXXq2ExYzRBY78ftbfKP2hzCamKACVYd7i1fFgQr9L8QQwSP2ZbvzFCMxN83RPAy",
  "key28": "5znKfDWs93xHSyRWQvNdoP2fUAi45LRbf9PJsmEbCp3xfZoKikMoxmNbgukyVQEjXJJ7CrJ7cyu1YPPRdeURsDYu",
  "key29": "5eBm1VgqU1eZh7mxqV7mpT85xeVg9oCzHcPNFxoNxNC2gFg53T713pn1SYuKrwCtp22gakSDR5WevJjTsnvC1spk",
  "key30": "5Bj4vbF5TeES9pPuy2SnTskEnQRWYQpX8ipxBhDtaRnRpWKHG14hLJoukdn8TBJrYMwhqURgAu9fMHLBc492uEFk",
  "key31": "4W3CYz6ENuyywhsNhfTC8rVcuE8eJDVDW2m6S3efDru6M5LmL9vSe6UXwu4qeREpbXd2hZ8r4NwA4CnbXw8Yb9kG",
  "key32": "2uLknZSyZ4D8BTgQDqV4wDVSeKAmMBTM6Gz9N6AXUY6HbBpA74noh8AU8W7sBzZm9WeePgvq72HLQeCsjCz7KaxF",
  "key33": "2e5wsLTVhpgBpByJVHhmuVvbqvE89Ee72pDbTmTrsngxc5tUQ984iWVGgEpE8uFM7f3QggXweryhJQLenBR6JbMb",
  "key34": "248J2thtxUNddWokth9aQWJS6g8k2LCGNUNXWzDABnVhNdxJzpxr5fHyoUrBs7zSgzLqAKSbbo2wDGYTNkvG5BqG",
  "key35": "2oDukgaZ7aR3rFDGCuhCpy3dbVY74DDxNoGo3EiypW4n4mgHx6YPun9bNJvUBvVaigN1idyko7jVsEmEhzjQNJzC",
  "key36": "CJYKmHjgDoRjLHXhAEaDuLsfojYjf5hys9uhZHVH3o7SoyC7ZVqHKJiZmuW2YPEbLHbS1eGP533kqZxVS3RfwxK",
  "key37": "28LW3rYBfhojETaUi4CgSMc9hnGKGsUDS25UL11syCjZKUF3gcMSEHvNjrSYjMCjExTRXJo3sb2TfRky8cDn51HM",
  "key38": "5aGMbuk5xE1J2dvVvsA4PU4vM5EgeDme3KsssX7trgArdUpd7eRFXnKyQFLdye5oep64xKhUq7cdqSbC9Dj7b53S",
  "key39": "3xKaiUgFpCPyFU91y3XrBkyDVhonVwQCd5nPh3AZ1Xkw4e7FS5q7wKTVFqeNTNoSMci3LPwqaLC5VAe8o2zR2mRJ",
  "key40": "65D8TmH8r65kgRrN1zyo3iP2Mq9hRmZGyWo5idMAhReyMZr2a7FM6qtAh9dZpWa7vfA1YZei4fzFuesh8TPUZYsa",
  "key41": "4oPYVqFu5tZ96BmSMUzJEmyiyuPqCfbAyjbAM1QG6opTrundvb93dwtcvzhK1b8aMbE2cuev6CDRgnSj73X6MvJC",
  "key42": "3BQjNK19ENpYZNsNrYrjS9RXZ5fhiURmr4w6K7wejea3gntb6q1635BuW7QaUceJHqwc2EzuCsUhuVStargDZqrb",
  "key43": "2Sx5tr4YrEqvidPf82Mqhpxrk6J17YK2buyySo2zFZ8eDYKBuKvdonzEFmqE3uEe7HHAhcH1t2bw4DEVGHcsi1oV",
  "key44": "2ZVCpwKEMtGiprvUYbmAkoHAQKTck6rbxzAw8C5BQgrxjo2gSqBZJVnRVv6sWqV4h1itgF8UbGFUZGtazueCC3TH",
  "key45": "WM9CJeshKeoJAf6X4bt7nmqk9bY68xXpwzJxkoe4K9oDtyzpwosHVaKaUVRt5NcdVdjkzvk1bo1C6dSzAP3yZxH",
  "key46": "4DHxLjYVtcUuYdxSubn6Gh5f4cEexBnKZdDmmtNHkJGrLKNazxmT7MgEEoDo4A5fBkaniCPfY3Hrz7JWzkDWmpph"
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
