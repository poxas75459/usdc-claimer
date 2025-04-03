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
    "qk9TMzt4kxUfsC1Q5MA9pQ389riKZnxyvZx6stJq5piqeCAiMyjapumLjvRXw8o3gELmUHp62QCmTcwN2iNW7AV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPLU1pxL65A6gFqpw4sFTYmjMVnw8G6W9quyHV6743ZoVbou6eaCp9o9StgxhpQ2bi9Lt2nGoc9sVzYD5KYxvFG",
  "key1": "3M81865rqmxecTVujcGcWMPwZGer5FtfFXRZENskJZZQ2GkBkwRsKQNwp8oWJrhgbEhTTM1U7kadL6MQMXbGj7o4",
  "key2": "4TL4mSrevrkE8huBSSWYwmyqno5CsYMeDGDFHHfrNxWjjV1PZVskFzCrsgukYt459kZkuqUvsuVmFmUecdsNrkck",
  "key3": "58aADxubzbwQRzRhGTVhZp9NENzidFYodnjg1vwwyJXRH5RTDzBS1YqqvDwZotCKUZ6zwR6t893PSEwADquJde34",
  "key4": "48HqAK28oMiwYRkk8rgKejCJirzsumBZMTgrJhYQGdVSXyFPRUKRaheZdWwNMyGxM2SXkvvAuUuZAYcLyiaLii4o",
  "key5": "TSh4wZLJRbEp93nqTe3uLgBVRbCwUTxUAbWvsbwRtFom7FHc4MRxzddXk1m2qcHh9qDNGZQndKEN9VWvVUSgGvA",
  "key6": "614jqzVWfW1TRk12JXGrAM3vBYJMxC5Mbjr3jM7a77aFVV5LjztUZtRy3EQnn3wrAEX1cjCB2y173WMwfV7cmTxf",
  "key7": "34ueXXyoEyaTodwBfyXKTGf7iwXANWzUoj5VNHaGnWgJLRCzCBajHX131eAPwPWUZa46Dkh4XbqXgxq7T2TbLjBG",
  "key8": "Se77CHcoPLfAaXdgzQGdNzDyWiUKfEKfN43oiechtnVk5yoingr5LDou6nnfj1tCzrbEvvT7FVY29m1T3K9z7N3",
  "key9": "5ve8o4qeJkYMPMTED1SacMce2LyekFciAXuH2emmkJiEctH1KLhL3rXJ5ZRtEtZqobjzGKKQakKZfBKcSoGs2xRZ",
  "key10": "5CTQdoKupdTjNVqXinkmXahJ8sJTAnXMTBgE1eKkksGJn1EjTRrsNr5NgqseWLMMWMbk5xzKVtnh8z2VDTRZ2K8Y",
  "key11": "4ykvhFvEerAJbe1qZKtBobGSGXkR3Sk7yrDTPhYv64kPjhhL6srD7eXzYCJk5hJPVY2i5CTfX6VWWCw4asD5fXU3",
  "key12": "3UbVA8DpoJK5gkmj5E1KJ8f23xsgJ1KHLA1Sc9mNXAwK3edcZZPkUfAVZh7Wu9rGPa2Beuk4pffDKMFJXykP2U9u",
  "key13": "3ayGnA663oER2GK6FbyMyYjurhmZ2fdeuM8DYJwTd8wQSAPCsg26pYUzfKij4Nc78DPGHonVEWCyPsHTc2mfPwwG",
  "key14": "5zvh5oCbrFpbYMbJiXTjHupuRuk1vPL2ghwBjgYtNLKi2RMWAZFGyBSiMe4QauYSnC6TxFYCikzR69fScBDYXMcN",
  "key15": "2rZByuSda3vyKLTg6XXRLXiQGR6AkVHMBuSFEECtzceeXdFKefjWUhoVTzjJnVKJ6r6KizeBwyRh3PiYKksTQGXk",
  "key16": "4Ceb5NPKparsjmkqkSvyPyGpBGH1CqtknihtXrgqNtHc4EMaNNPrbE5SGVMYX8xCk5TRtUF43xznvEmV8kLxdSrA",
  "key17": "NU3RoqSXfvaZW1za5EfKYsHk65aqxN79uBUCgHKUKDBDngVe2eLdWbC9WZW6TfgMw4zns86hmyfJFTBBKMQeJ4g",
  "key18": "38KGmsVtHhvvLuzU9j7ps1wrd3bPtsmqEuiYryHDmi2BzBUWW8aSgZjPKoYn1eFmYZeLYR8jTjUbZakMMgjsj2o8",
  "key19": "3D38HtYHf6eqCPZxWQBA5fcxbdQ5RAiEoZq4KWDQ6ahuwebCYuNZgrmgvPvFf2DbCgwNqy7UDsiL7eTS4h1GdEgy",
  "key20": "5x2LUkgKQjHR8cWKvnAPwxnsnkBqS2EWzDSocTJFq38U3gckQHJ2RBE1MBVX1RdqV1Xh8uZJ3NJU1tjH6gMKzkC7",
  "key21": "5JgNtF13fKjn121HwZzbSTTSRkEL17UpjebyomxLsSxQaFo5zPBg58aa4WysmvHnig3qDJSEDTCoUDTw2WnqhXBA",
  "key22": "5o1r9pDomh2Ub7ntr8kUseJE62ZxB2nus4vqTEE751QCDVMcGFmmvZkSBSLdNbZwg6oHk5kV56AyeDiH8dGUKgia",
  "key23": "41PRMheCXw28y2bGFrSdLmsRr9JjfdZrSCa9BLF7FnTdwpdPViaZ5tQrqskzvBDVzcr6uRezeg2ukyC9cqXMrksV",
  "key24": "5NbkeSQPoymdbbxEWcWQqqNYbovY668A1Au9FG3BFcwfMVcA8RfDkHy2XX4oyAcqDq5x4efJkarJHFyKijwUJUjX",
  "key25": "4bWnMoxS1vZCrspnBfB2bt2vnjdo8saXCcCNEog7Esw2grA1L4Y6RnkeSzbGaMM6AWKRweA4veTLfm5CZEj9wodX",
  "key26": "2nNsfeQCuXUDHXtmpw457S4rv68KCrBETMsRrP3aadww5Zd8yMSxixdUfGZTN6SXvmifLhKnmSPVptZG6j84zN5",
  "key27": "2T7FWPMQUy6hUtKHoHNppyzmukz49bsVkvmA5mY7Wscdm9xGquhpBN2BtxAzDgKGFyJJzwc23FNd7FFFsiKsLXjw",
  "key28": "3auMdKQNX7HSQeCDK7kLMRxX8d5KcbwmUvEqr8hG5yLH46ypWCXf8YYPrC9RpqHQWUQeX2EDVWXCnzbvZ7BTdVfd",
  "key29": "4cuRYL4QMePp6QXmj1Jwh57fUfG5rMAT6ixvNdMopTQV16VHDMNs4RTur5ebzXoWjHCMn2MireBbLfuvRBbNg1bJ",
  "key30": "2aZgPZK6Ft554NmtQncBHi9XZacgTK74pvvZ9jgZ551m2n72qFrTnEUUJpvK5HqUo3rScB5Kpgazh654HEMJmUGb",
  "key31": "3UnD8P1BD8Kt1RJUU8RQ6KYxttU9EZgBz7ZyyM9TEeCoaXARJ1LjCo1LUVSHrnbQcwpntDpUgeXpfkeknH3Q1nzT",
  "key32": "4pvFMXTDyk6mLqZ71RiEWaF4sEafpPXYjy4LFXC8ATzSap5HNRw9CpQdteUEJk8JrhjXNRv1XX7qCYEF4hz5y9K4",
  "key33": "4djXKYrCq5uQvumpj4GNYF3EdLbfHT2P3uvhB1ptTm3sTytRB4DvfXXyYj5czTZwevR3sM5dR2Xz8dkkqCMB9bxS",
  "key34": "2MGCmHUTm1srctZA38tcnaK3kYYdBWssQPvJfdMroQ6Q2jweGQY6C8oeumLv3FxfvtJDRNaFduiAEpENSYed91Ac",
  "key35": "5BTUMYu9Zh4EToSU4m1qknUSCAfnrAMC9gxoomVYEh6nbzDJDUZUh4TMVPMMR2zuSXNtwFdvagzYm1rtPgAcwxbY",
  "key36": "54q98KDLsY3ZUCEcjFkkAJcrRYbbfFe5D5dJQf9oBDTUdTmZ8EPLtzMR9DPpDyVJ7CYz1Bhh3tk8bff6PxxxqzjL",
  "key37": "3hSFiaDs127REo7o4M9BkAUtJqsJqjaDSz59vCJwzPgyg3Deaso5wKSxrnWKTDcZuobBTd2MgJFuGCHwgGoieid8"
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
