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
    "4uUaTzZWqCfea8gJFZrWmZ36yLfYFxNbR8sHimkCtaXtG8m1gUBLUGm884XstBiyorHh8diAm3QzLEGhNFFR1RiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rR4wT4MmimSaFX4BsrS5A8MvZHx4wKHStrLDrUMUMC6nfoJPoFqkWrFsgoWn3FjaM78xvnVKyGTLHUkAhNSu2rg",
  "key1": "2DNrGuhxRhH5Wh95SfSAB21ec7BunHGD3AWBFENnjHuRLnTXrsiL2oJcisJQ9inAPGiu7o71oEnBhMXeg95T3Ddj",
  "key2": "4crfEoFowZfbwwumFAsdmjT79jBDQzWJQdnoWLWxQh769LMuC2YgxCESDfhV9wxA48hDGEaCsytk2r8rhzBFS8Wn",
  "key3": "2uxygUy6dzbr5rRfmwXDG8YGQhzHYc14Wen7EVn8EZeCcPww8nxC19T4KBP1x5ixhz4gzjYJW4X3aemCg31BtxEm",
  "key4": "5qNnpVvV84CxJJCg6ey1faX9eewQwUAL1o1MJ1utTumt3YdLxCQqGkEtZWbEU3qTmJctZPh45CqmQKc4Z94MnxQQ",
  "key5": "6WvXEi3LksPQqixLDHWU1H9L2HhJDWKzaXLuaaZDBBNk5HVw3CKKmysdUbxtdrEkaekDj7KMmVGsqksNY1EjjYn",
  "key6": "5URdLdy1H4bRCCZjSdVZQheg5qhb2X2w5f2HQrVvnAWQJznkyjhHfhiZ4ZgUsVfFyHXSYEgbSXpf5PHSfFVXjvh9",
  "key7": "2mV4poxUweD12Dz516GC6V9u5cRTGmrHHoWmJxpoDsY2Y7CdGsgE3LanJS7rbNEhWKVGnu7HfpKHbxqBvHMT2dZw",
  "key8": "5Kg1FW17Dou3bC8CT1KyYvQKi6x68zyU69jzZMB7zGxLbRkUNqc1oYpC9xY9wzdoXkxhCMmizBsBjU2KrVFUbVB3",
  "key9": "MTMxSwxjxs3pRmGDz8NKzMWvzhvt4Kbohq2GiAkEGro9MvkVRq9jRoZpwJCq4MqUqrpb2T6btQU73zPTuZzhZye",
  "key10": "kFCxeEKTmUMjRhDGi5X636PvogD8g6JEJTPfWoRY29PmjZip8ZgULyjwMBk5xxK3HF6fiQkafYKU8mP5VR3rBnS",
  "key11": "2sgWyvEJJpz3DP2a6SbRNYh2BXJDDjXJ6GRzjb9TMXXDVX1eW7Q7cEmqd4n8qEFjBA5QbcV9cTKNSpz3bm939GXV",
  "key12": "2vFMXkS4sW855pMr8y5bxUoxFphQyvsZcbtuhoH8QA73igaBKKKub9mTvttewh578SVAdWSavWEvCBYxJs5SVbS8",
  "key13": "2TRxHTz8EBjKj1Dxm5YJ1MST32PGzYCLJabSizLZ34vuch9gFc1c8sG1JAPMLD82QpCdobD5m1PHn3tUBFYJtY9J",
  "key14": "5VwBpYmcWp13HvVQ1en8RJN2LAYyrvBtPKKSWbSZHE7rrq2NMDnEtJsFHQarzWWnTHgE1oUHusRdDLkFPkADDPwh",
  "key15": "xEC7PAUKW9VuCn2e4mwU4ihR6BTvQxi8FPKENkDq1W478xjfPK8Ep5NLaS6DuZM1qs4VtpaC2Jwh7VHeuL1euDh",
  "key16": "4xrdu1ajBtdCwLz9w95mxejZ7D1VpNiZ6PL6bkpPwdfqM5Q2WZ1nCqUz4AJEeXSGrqf3ZhQv1EwpdccdkYHXPdEb",
  "key17": "3vpYsp8LGqP8fRkoDyDvzk6CZvg6LHexJZwNjaFahGuuoW2oXUneavipeLZUXG4Dy6yFN5ATVUoGSqhDnErxEees",
  "key18": "2vTjDrwDCbPcSJY6CZhERvjQQZ96B4L1uSwhZxaSqKQSJYi5HYPvSeVHdQBH7EgT9Z6bzEBjUrfMBZ6CDc33G3Jm",
  "key19": "3XkpURG2U7Lxnn18pE693fQpK71J2RmY5wnTUvJ5fLuSGJRhKZC6hE1doHsyg84f5jNPBgmDH2MQESA2bnfMh45c",
  "key20": "5mwap9HjT6Nm6hHM2TEQKomMvyBHZgYrZqzwg9JdUrcLQRNEYrKAz2t2wd8WUeBZoMHHr5rQDyWMEvDsBmhghWJS",
  "key21": "2exNxdfmJaBBwdGyUWWxsrdrvU4TETvCWBpCgYd512mbCd5td7jHg5BCyWmnk2HvTce3JxQeU2WsevSKhD2sj2w7",
  "key22": "Huz1tGd5HEQA7y65ZaR82nzkgchgypo4Nr4DLsyMDsJp8AU25V66eNLvkQtNaAniDzNuvnyQUKLWEkLJsuPx4YW",
  "key23": "3a3QKXySsKjBi69NvhNoLB8oVf9MQD17ujGnPxmMcJrx1M2fQ3uQC8VCUsXXNJoqRPC5od9T583jWUyFRLmw77GU",
  "key24": "3L42oyngDBzTHWDYejASLopRwv6c78Ako9m3eMjpEMtBwcAy3ZFWPM92tndH3rRCqYtbHeDHYC8G15HsfxVwNZKU",
  "key25": "5BiCTXxvkBTBexmhmL2tgPjbWk1pWN6ZXTsWDKVKhJLDxRxBpGYhsc2fu8CDBV16xzQfVnphEYmQo43Uz2hhhjSy",
  "key26": "4U7A3YwtiKdTJ5S8aoPy8cBkZad8zbswSYVdKeyivo1CAjhRx5oKRLmrgGhCqCZV8CXdaz7b5kiq9mh6UcecVvHF",
  "key27": "3dHjoX3iQrevxEHjxN9yM7xa6tTyTPn7zKZVEdcJhRnVS1ebENKnhJ9dQrBGN6sgnAXj5FZi6ULGfCkMFatRBke3",
  "key28": "4mahtyDxXicRjVQbQVftVGSv9sMWwUM8LyDmmCpCVc3Y6zBNP53dDh9kZi3RFfhX8DbvLr7uikRS4iFgQZcUdBf2",
  "key29": "VqBKmrx9kK5ouUUdCnzyduscMy662YbKvCjaimBJHXNAydruga3z8Gu81AndwXyX2oEtALp2RR2c8WMcgYjaF17",
  "key30": "3gV9QLDkVv9au8HXvQKLtT4KGVmTCN98zHH27YpWrbYw5MBxP4H6dPXLb4xef8RcJttwbK4fqAddRUP2D76obwPS",
  "key31": "3KHbya3ofeGPhcZkCUunmg3UQR7N2YfN4yFNTT5R5bHPZgUord9JCKd9H7pJ2cJmKgVFx7kgyND22oEKJifmpyFx",
  "key32": "2RRDi6xuLBCWzhq4ni9eWCpmwmMd3wXzQhqSqoiaJfm25zxUrW58U8mT571FSxoGvWQezUQRrpkn6QsFzQJSofvi",
  "key33": "47CbTMzcdkKqoav2uDqy312ezFkajKgUKyRDma6BK4JPTd9xx1tfE5m14ADWQstHxpuEbMb22weumxX6uvCZYdNq",
  "key34": "2J8RdfKkyTpoDm5jwT9E6mY9rtJMpr4wFBvHFXtv17y7JpXh4d6jk4nsgq2f9h9u4tv5kSj2GjV6yYtgaGh7yJCn",
  "key35": "3kyurP4yn4oqA9ZT18My4Ei7A8HUqKD1BKr9oZrFuKAc5dBCCxUrV8uT2L4d6vdZCYQV8FdaJoV1o7LTFvhwd3cc",
  "key36": "2UJZC9EwznhLzWDrEwckpjxWKp8M6s9zidNxSwJsuW3BLzEw335Kj7VcDxwnDKZVTK7V8ChKCywugMgnRBpQwkCw"
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
