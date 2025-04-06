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
    "3KQ6CvJtHssaEtSraZmKysSo6D813ftKd5dQqhHYFaUk1gvwJpjiM9U8Xxbeaj1u8V5wby3sYoTNh4qvrf8nHhR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vawrzmati5qsLp8GzdoJwjv3chFGTiW4DkMMPNoRiShD4xRMFmD6gxjChoc4Zhh5Y1qYFWfpam7VZUiXDvCP8qq",
  "key1": "58JqwViBMnwGcotAndp3pMiSSHJroupCdhNeto4PrVMQgg8ZRuTccmUwJKP7FvRXyzVCcaCDokbfahANcCE7x9VW",
  "key2": "5CYULYiWvHNHxWBfmvxaYofgpKMq5rcA4hxVWyxATRs5VfYQGSswKVLL7vVeCgS9piJeixhgMFjj9yEQpJkvemQh",
  "key3": "5d8CdBY7fs25GgZafy8gW1pXPvxMgNS42qApKxMTsC3nWTvwzC8zrgG2oVR4V36K7f4mrW9APeWqrQceRdA1ZKtr",
  "key4": "22dFFDZdgjwhZpUtjYRgxLgozEpp5NPPnJkPfUrr56FDzDmgw1npSnoMgp2hCTp4v5t1bTPYcwmcZhacaqKv84pU",
  "key5": "4S6GYDXQw86rJsmEtL9WAf1Efj2FkJG9paXBYePAk6qE4rhZMkF2KXvwtSyjDcbWr1kR2Z93GPvfQaGrto5G4bFJ",
  "key6": "4grPDuxjCsj5DtT9QL6RXW1tUhQqPz7eL8FDjUFcSJUmiym3nJu3ZncTi1bJ1GPMAD4LKtcpKDmjNUdjqkAUUrbp",
  "key7": "5e69TyNwLQhRAoZbpxiVu3e8KootatncFeAA3ErybhSZfmwZXR7ewqvhGeo2yD1WxvPWXVKwA8seg6ktKjUSZ3ip",
  "key8": "4r7faeRAKWJJcJ2duCexfEQUi83J9Mo8N3U6UsDp4QyGKKYMcKANwm3mTEZfGfGPTrTMtFFQmHBVmcanFybXdkKw",
  "key9": "sEv1UL8oPrR1t8MaJxj8KE8yKhWPwtvgU3TzNiMZiNspjsFfTbfhcCA9TUzBmuQK6QsvPxBcWFbnLkdsy6ENKZf",
  "key10": "3mqguSZcXniNHXf1pfikhcAwRZfSomJExWr9xbNRHSSXis6oNUiKdFTsyPUStnC7zcJ7qA8SrB4txZKbHKQRNrQM",
  "key11": "4iu6cQd74UX1jJXCzoi3641UCRPbEBxZs3twfDFNFP5Ya4RMo9FdQmBud1AymE8D6xZgPQx9Vpp41HfDS59ZSX3R",
  "key12": "3Cti4udp2KuCgRriDEmYuCFPae4FoFctGVBaMoCjEXk93DCt2HioyHN9QUGDMKcoZQGD1rQSraqt5tBHWoP6GwPu",
  "key13": "5TKPjFuS6ELgWsHWyLo5FeLwBjUF2JyJa6NEbCkd6ZmwM649RhWRWZGz8JeNwbJE3Wcu7fbYTgxg7tMLdxq6CDXV",
  "key14": "5x4SCxLGHEEtMv12GqA77uTYc7oJLCTh6ooP5Gy1DCQhLiMr5Yq2FVsZvRvnbfqtuhMtMALxFZKNzPgaHGhNFcvJ",
  "key15": "2ffMJrb6PLDPLaQV8FSf8PrVcUFrBHeGzakWcXsQC3hBnZmDnS1f96eKtbYUGhSfLqB4k4bJRmNGuox4C6xm5dB6",
  "key16": "NrrHF9a2Zo5TdUS8bYzmSk4XJ9BgB98vKcfh4xK9jsWmcrtNgARf9Nap19wLP8aBeq8kawYUc5SH3S7vtny79G2",
  "key17": "4iz5Z7FLQ8q8N9rFSBeKSsrNMVN7oeP1muHh6raHQPLEw3S8GkZLiGCXcb5cfqqGgSmdCS9zXyC88GASjccwTq2F",
  "key18": "3yyXoZ1YXqZ42Nxc6u3Q7jYSYNLhrUuw1njU6cpb93ikirSJRxH2u921prHAX2iLp8AEhaNyMHkDraCJ4X5XWHJ9",
  "key19": "4HmAMY89FZPMDXzCYjfJrHTty1eEk9daqXMaMDeUKRo6FiSgmGQX4FWFxBSD9UdXzNQDqGYCqRRu84UrWkGqBoAn",
  "key20": "3tEJkQyioZQRuYxUGyUh24ycBgQp2GSENR7toQnJvMpXpWoGEaywd1viMMYuzniE9eqv9LkbvpmmpogXQrtxHxoH",
  "key21": "xrXeJJminHeZPbFmn6emQuikwnt2yGFHwubj3RdXYDbzKdLTKZVKcSRzqAnpACUmkT6aGeKmSTSLbxEQC8CWYHP",
  "key22": "2Hvggk8gqYRqsHmn5xpMBtpDT62GvXz2X9gQWnS53RajXDwKtm4reT7dp9mMLnSmpq33hUsDMvFA6SGGyMsfnNBH",
  "key23": "s24WtnHVGJxAUqZvL8qw2rzemWF4ByTQhqrUV444y91nWCdC5aauSYFeXczMzKXPBajHn1vVKQsmHrf8P2UJmVj",
  "key24": "2meyuZxgc3MoAQCDnPyEHgZPDahseCPY8HarsXSV7GZv9husqoBzL7u7Djre3xDUaheNj2DvMvoTszS1QNvXShpz",
  "key25": "5c7bFSdjXuxVNQeK5U5vbUERAFm7n6oX7BN7Nk4RqWq4JbNQLfSYYAuNiscAkngn5aGkhxM9HcQZR4igDYsHh33L"
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
