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
    "erst9gPG5GWpEYf14JafFGNe9BXER1VZ3hg6vsa3J6NcNEeXveCx9zdxDck7vP6RDnKsh1UU5XK8abeTmUEousD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8FuUYtpxzvKrWXhvaqHiiVgkCPU1iPn4cFCMhpbg8cGex4wH8jo8opzV2mpqacvxiTDsuxMdE1v1PTqJT1P6si",
  "key1": "4L5MHRsf2Rqcf8TM76UpKjPzjPVKfGgmw2SFP6UyzsgWuWMytw9gTukdDPUHkz3NNwUNADvdJZ88EkErHm6UEXd3",
  "key2": "5yVXAFpyqf9KJ6guZk8hu5iDWB7JihKJuBdr52DC47CbVYD8yDm7MBSG8S9PTruSvXjaZQToniVUhcXrKmrVdbXB",
  "key3": "jiYi7V8C6gXqfKKVbBqMt7P2HXcQzCbmRmNUEyUHkpvEPfmkDFjXY4u4yQizff8zryRXhoUh7zzXs82BMYkKaya",
  "key4": "41tkfjdJofAcTtVPcbN9kSDtixMqY73mLsJfsST5LATqbRhrGT4bf26HzH6qWp9s6mwGGaPH1VrHBfHmku9kK2u9",
  "key5": "4eXQPPR9dLGcwhDSJbJ7RgGLcBhh9Wd3B5Rf6M9KiETfzNM9Q1wAiKq46312QGJ47bGh8iKs22QrazchwgViwDdx",
  "key6": "5qpNhhQBBk5cmnMMTJEmHY5J3BMZwGWo3KfwSiVesuCWZxm2Ddtcy9vtoY9rJZPqtgGySEemqV49393jy11uvqmt",
  "key7": "5Pf2Nw1MwJNg7G3rKnqHHT6Z6DdyQwSDMvJ5i6krVXMLXBUKod6c4pouHN61PPzP6xVAgDoBr4R6bwqiZqEPfRRs",
  "key8": "2HAsvQADL9ih9KMvb8s56SLsgqU7o2UtRnTYhjZy2fjnEmnUBjz8id84Xmwd4dBoH6ChcmuKnnddvonkNqfPJsF4",
  "key9": "tHESNk89AeZBt8KBk6hUyUQZJ6p5aLQvbjMwELxW5uwE8D48gxSn9GPaxzEfQ9g8NUga2RLx1xNWweGgP8iDCKu",
  "key10": "3PZ3L83cycV5ZfejukqgR1W3HHAQYLRD5o2U5hUe1u3XWwiCUbEEiZ1Ar96NwpgZtSEsrsyf2AotTDAgbJRdLCYa",
  "key11": "4J92ZBkWkDyxjAAkYHcstcpCA6pDrZLewKm7gumUJgcDVvYkuE7Pytaf7KYDRXN1zRjTfoxWLSrNVgx4j8BNjri3",
  "key12": "3Qyk4n4Pd1bSA6ivWgDN2L4S5dkc5uSvaaS5ZNBqt48J5Qcv7nDPEpArW5zfoxG3FXdTzcjR33Jw1v1m4Kg7sSB2",
  "key13": "26wLs9M9RoqPZkmQ1j9ygpFJDtu29REL2yzxTb4k6q7jvN7GHMZ291krLdxgjTt5rLcsS1pVME1usZAMUKstcun1",
  "key14": "ndNBMYp9PWaskBLc8xnYS8ntZutZddrTYWbPHNBMCHXgg2JLr9wufBY6SZBXaAppTFwwcsnq3SKdNqvmmPr3RHD",
  "key15": "5LNoGgaXQNsugpwDp5caQcRsim2cVt8Fq5zfmvnsLBt3qg8X3bC8LbuzcDanVVauinK7QBgPueEQZ3msmD6qyxC4",
  "key16": "4SgzxYBkuzq1d97vedHxAZHibVJJbmsfJEDCX4DGKLqgr9EsrKQkC8b8MwMXbz7UiUZJbuqowVpMT3kKoLBH1YP7",
  "key17": "4mR4m9ZYdFSM7UDDzM2Mt9m7YhNZwo4PxaP8bkzVi3Ajx8yXU7SjPAvDJAJZHD4tmtnvLmTBoVqy8oVxbo24on3o",
  "key18": "2HiDGZgGnbWxjnHuBXU63fGrwLBaSc17Af3KPWPBftqvdVoLw5hBHVqKnKXxbmAfnE6JAEu5C7QGx1xnvRTBMuFG",
  "key19": "ChofLyjX9YJXJ5w5ZthmFMsVjyefhKCyVFz6nyMhmvHJUivBRcxs2YSmpv2bUGxfmuMxk1LPMC5183s14g7FqcZ",
  "key20": "RQPYFmwzobDZrquoAQCmUJ59uhgQrSmKwyH8uh3VBaHJVUyVF5fD7tASntCnnjrLyFzwB73g2NYhw1XJnprc9JE",
  "key21": "39JpbwvBqQPARAgjAz4kpniZqiKVEjWfYoKvZxH4Gm2WbBXoWdXPGUZGhqZTq9FwRF3Myxxwk1BCfEjU78YWFWgc",
  "key22": "2bHwLUXfibXXmvKn8qoCiiRkEoxdevCc9DmsTCv2poXC7V85zc1p6g6MA4xHXEVLNN8H97vGuZbCgf95fsXCzwFS",
  "key23": "4sR4NGjvxbaAFgYPvHdhU4fKdLzHkg4ebnsz3j2HQ44GQo3inW4rU3gDWnbfGKiZSn9EB7Zzcg1dq5SrCj4eFaCe",
  "key24": "2tQQS5qvpFsADSqR5uDkoYHLR9GnBya8MsAcgj4C22kodYkQhutv1y8vqZ5dxePsFUbpcZcAJBjWe17GMkYVtL5z",
  "key25": "uFnHTVhe5sbdkjsWqNn3bdopB722SyjAPGseYZz7sRL1ixtQfYrKJ1DaM9zLJQtGhfQfTxb9ZeaApyWva8Ya9Mb",
  "key26": "5xt4ZEZxum6q9QJr2Y8sipDjJhdqJN3ceYsiiVNmp5wgvq4LuRhCqmWkYdZb2mW124mTCFZEZkRsy84H8RM4QDo3",
  "key27": "5qHedHowRGAC1KZKzGkzBKiY6u31c559Agh64HKFNXmRZmz4PzjbwE8i5yG4B41w4cjFrKvD2xLsewXHyGHrPJoS",
  "key28": "63NLF26zGGVNLNuTjgiG2VKoS4tGTVeicnuksopAwezdAiq3AksgA729oWk28F4QXvQEj9LqtcyfPirPHjLS93Ph",
  "key29": "4pFSXLeU64TzT51gx3QCtZjFNMVZDAJb3oWW4K2G9E6STU5nc41jSepV2EdZAcsLqmoQWbQY1Z9u83YXmx5pHAPe",
  "key30": "67X97xqjSoZW8Wn9DmkNHZwBMmwfY3Wtrm4sakRCJGiBLSt4YLzjTBuF95ggemcbNQ2MrEwYGtNYptMEziHrqhpg",
  "key31": "4tfchZQ3uNSSQaFZEGF6Vx4GouRwGALRnNmGNEirGo9hTCk7kgGS7ern8BSURrccq26K3qQA2gDShK8Fk3RAVe6S",
  "key32": "2PKYVRMTuMDSgQHsnWsyDd8bE7gX9Sgqadv9o6FDh3ub73geg51WPNvgm973EfAgNVepKJCME4H294KTbsZFKBFn"
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
