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
    "2faCLBnieUaWZSHz1ZXJZEkCkDePqXxjAATtia7NvqauWNHBTq181ez9TLjTZv8VLPKktsyAwEiF33BrjiMBWiLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dSdCmBzJpzTd6PjaxdT5VgYz8ca5WduniaAo1JPJrtsWz16Gn8c7tkhffmaBJg2tLietrvXunyX97mhy8LcDYE8",
  "key1": "62wGiTkS116LFqGWNS9aYrRSDupnPsA1P8McS4NNoWxPz4RWVvenpQjjTXqqsdLNY1rauBEffic5Wa65wkGQ8xFh",
  "key2": "34atUc9LdkiUZ3CvkfLLFwqh7QxY996CyFqrsW3quqVBJuYQDEVKqekK3tvZnRwomBmamGosuQfVhjHx4rA5Xq8",
  "key3": "WDyNwo5DgxRapWHV6NpuxJ38Yw3ohKbJCRTEPs2ikiMgyx8eWGS9bCQks2v8TSEa9zJgTAnFnST5TEDCMk2dddd",
  "key4": "2zTBkTjgdyNzp6shNY8vSQEo1doEFwfzfsZojbXibdCbmax4HXoEAfmFRUdEdMHQbGBdc44LBKYfP8ouLSzgUDzg",
  "key5": "3B7SAZnNiBM3k72WDCERqcgWWtgW3VamtGLWYWfUS5247U1gf8QEXTepb2vAdvfRHCotNNco66NtLzMeYv7tRT3K",
  "key6": "5ZgQysmyhV6ws1gu6ZoC8ZVeaT83fLvf98KvTzpcW9qdjZhHZFd2LubKyWm54BtfYpWEdGmPDbQRHXPQVVKpHTC6",
  "key7": "5Fq6hFkBoTHjzrzXkiNBeJx4hk5qv45aFbFCCrdyoCuzWuTaNZbwKGWGrHWJL9Qv9jZUV6AK3MqSiDV9DaVB5Dww",
  "key8": "5rwx3UvsJH28bLXn5SycdrZ8oRzCYqhRq2u3dLseZWcNA3gt4vZmJEbzK41DJqkxutVeodgTirZrECPADqtqq5Yh",
  "key9": "2Af4ycCwm7QPrgJP7BHF9ofvnVL8NQeVKHWMouwmLvKz3Kp5uTFqihbvFtPaoWsCN6hJAmPG61oB7XJ4UoTnwSAz",
  "key10": "UeLg3zXvyAYnBGEH1Z2dk6zCcW9AknzPh7YVMjEWSuCWHhpuyp6By1ZuZoWb9DUXjtBwU5vmvLD2Y9cJoC98RxW",
  "key11": "2QwF8wE778yKwEKnToDAeAkoZXeFBjNQxbBxmB1r9a9qqvk3pa745wKxRyXbcG5vcvBfm4MbKy8SbWSdint8as8s",
  "key12": "pE5g59FRdLvwRhG9GwvqPLkDtiy8BwKBhqFnooNg8gWpxcdgXGdCQ3rYJYqBr6GhLXMieuwQEMrAUwADoUyn6B4",
  "key13": "3abajMHwL3LZXJKRiCStEn4MMqNTbHGDpgUdpVERb7bwnrXQrvG3HTEgCmCJDX1gpRzBDwDBoHimAtdSkVoTW219",
  "key14": "5uZzmoRvJETXFiy4FeZGfMkZiomqC4PXruUWe9CxLmeqUqbBBboEVGjkdCJR3NKH4P1BHhcbqfE3gd518strWdhm",
  "key15": "49a7YAGjXkuecckARnwZbZMKS4VEPoCdksy87RMVAuuT2oWRP6AUyNEfYTJvdQUMeU8L9gpzgt8V5eAo3ytNjFmM",
  "key16": "63kYJ1KVg73nzK7Qp9cHdnqDewLsxfpRtdMXRharFmPgwmv9Sfv2rJrPRJh22ux6V4dQhuNbs9LSREnmAhFZmhgA",
  "key17": "4uoewHPgw1BQWzjRTrnT8iyBzGkC6bX3Wuwk4KYmYX1Ki6fycaGZM8dSofcC2DNc2K1j2jF3eseU8WVpsny1D4J6",
  "key18": "F1nLJmmAKkoqtmZyrk6AuLpGpYgm48qLXZFMVfrPBkE6WGVm5aq5ii8NJdCZ2D1fDy4u6wgzZ26LEhFftPFy9hk",
  "key19": "3MX4J8xjn9hfZTiT17R1MjgjMTAaYNE8yh8SBME1TJoYkwn4kmummQCrksUPMqfCgxMsdeKT53vScD1HaR1ceYiz",
  "key20": "45JxYAxWGd1Ayq8DhQ7LW4hck1azVnV3k6gzWGkimQbJ5nq3nnC5rvC2cGrgNA1uTv27BsWxShAxPjCQfZWNA1Db",
  "key21": "S2xUwsuaU85FemCQGvbYe7bsKrUkW4mu9ZiWkBbs6hxfPgoWSCGNWCytdV8qnMYj3NyE8AtMwCnH2SLC6BKnkB4",
  "key22": "x4j6CQfBT7e3xkJFS6GPLDfTAyAumG5USLivJqzTL86GkoAT795r5fQs55EDkmvk1TnbSDD7R15kp6VGHzHHs72",
  "key23": "58i6LM5YJDXysUHA29THTg4pQz2mhbgcfYNsaXbgLKfrDWbd9eDnXdpU9nQoCXbdXGSuwty1QaTXZSMHPEDEZei",
  "key24": "5KzCqPLgZSssUsCk5fjvc392W35egFnjtRKDMv5KH1EnGbKZHjkZKfs2SDjfnnoMNBuwhJv95mD2pAX75fj3vLn4",
  "key25": "4SA9edysdY4FPsHA2xh5Q1ZeyCQzZZxf6MaXraadP6aTQ7CbUAG76RXnTJ7LACKWUSpXnQC1kCPburYKvkCsqyNm"
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
