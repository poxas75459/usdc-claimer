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
    "4fdtrj8ZjagFy3tezGd27xc7vmoL1bD2cqGKtYqcLTNJ9DuTyjRMAQk6eDNLUsRBso2f32gwFXLH5vhuXjp3ukRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSkMb8Ts7TpRSCsahRgFW9KaZhY9duE3TqPrimEoRzwbaM8Gqn38PjLnTs8BKZWxoH8XVjatZDXrv97pxfFKimz",
  "key1": "24bESYebTnrJ8bDQkXbjbPacNdK2FF4ptKwkBQ4kXCoJcmNmS37RxHVqjxACpGfC26nVEfXQ5EfCAJt5ytJYTWx1",
  "key2": "3H77wToGCfmR59bFgEQyNsXmTVMg9XLx4HUiKXkSW4mkteFXHNp6DB7PZfx1TH9ymxUqLEYrhtjJ6D3xnqeuhEK8",
  "key3": "2WcLHe8hZXao5cvAaT4jkDq78c9V3BwJEzvaxyuSasDL4mX7JQ3KQc2YgscekQqzjcu521pHqvejuf1MBTWRGip9",
  "key4": "2dUqcQZ6rY7FQi2K5ZKE5pmraaDBZUgTHsa9PFNZvEjWN5i1Ehsk4ax3sxAt9B9H6DnLxo1GjDrJ1KX6HxH1undz",
  "key5": "2joKUK29CTpsMbsNEyxAh585QWDi6BSegyyFr15EfCzmA3euDLUzgfXmfc3xaXLKaogEzkFwSMb3rgzBC9SN4MPH",
  "key6": "uH3oMShE87dzEER634JtMHeT7G6WcdeZpwKtYbs8iXwZ6qKLqJcdhwg6fxeAH8t8qx4636hdDwpt8CBLm91nWnC",
  "key7": "56XtpfN4C94YePuXU7qY1jKMsL7p2dYz1bHUewBcyKonstGEdnndS99syjWcfhseaZx9pNbePmxegF7gjN6f4vx1",
  "key8": "xqZgyfjdHdSjQ7wqYuJZ12kqiZGvg9MAgZ5AnDQtXWsEoVwwZUKAdVAYYSCzYonQPPMbsB8FXwHhepmCX13mYnh",
  "key9": "3E2UFJXUjs658kKsyiwLG6WCv799ybbc1ar3AoAMJP2tu6WBPEtPrK673gQabKFtmtganNpFaezjBXWTUnERx1rF",
  "key10": "4SmniMb7iqEshFfH4pXnaxGFhpnsSj7pzyuL1cw8sDt6mNWaorSt3WYHAQjLqB2JLrAvnXSNGhQUf7EcB6KGgzLp",
  "key11": "4uaWM55e9Qp3YH4hRaNcKH4rDw7rTHrKLoV1okmP9yzAuQbWedAvma9s1gUy3pUM2c2izNMwoeddFssaZ8LYLYyD",
  "key12": "3549bZ4qYFizfvZgmLwSwf8rG261TUXjBoxq3bBMC2TNppMAGqvRayMJMGgK9aJW7rWPeyA2seT2S7uHQp1WfzmX",
  "key13": "5toykM7iQH9Nf3oM4vmSZnKpD53XnsQaAFQvdNCyS1FQFwobeivQRgwkkJUtwtE5YahRPneP7cmttEf23wePfobS",
  "key14": "3Y22WLoEPXfuHL984AqCYSxqH5x2CAKYLPa59dwVLANC75kdWFgAYJ1uHoD7w13FsE8czhasnWvZ7v6mT3kSZPAc",
  "key15": "5YzuyoPp7kz4pfsmN3msduAgKzXpmTJfbttMVHcXpz19tkYqv7QHQVE3fiQE6nSfmCjJun4RyPgRCqrgzXiNmW2j",
  "key16": "23mziRzaeJaBjtUrpCAjYYmySDhWUYRpfueSPU9Y6EYGgHYMTuqAzKCB6DGvm6ATgacPtS4giDufuN9YTqsnZnbh",
  "key17": "GzvmwztDVFuw6TRHbeLU7sSnhxkUNqrSGTwyECYCEYd1BC6C4bh5VtjPCfcquFiy3rgdG21ZGyJe2WqRajicYA6",
  "key18": "5rq3YgBhcwcQVUutBJgfSgzjZtCAgoHzRLiC19dptvDuqa3FVEV7HrbtcERpHwhZB4PAKyZDwU149AqKeKHDbiHa",
  "key19": "4ypJN5ayauJSfp61zCEv1Hy6uh83mev9usLWNJ2D7MFFG7GBZEZHnYfHxocgGMLhmAfkEXsmkoa4UuU3bdCsAekh",
  "key20": "5HXgWHoFojXSyCbmJADKqTEJDj8Je1tpsTdgEStXntiLn7mYbtCeMDQqUdGAFnqP3ZUpiS8EXkqqb6G9bdm3xogm",
  "key21": "4is2zdw8QQvuJQ2LJ9ZMHNkZivZy1mPpB1xVgFHBAy6vx4cmnZrZoxZ759ak9iErTNW7VejQay5PrbgQGHfbepBv",
  "key22": "4E2qyfq6U1HTmoW2vY2jZH2c6Vuie5rAbgoMNhzC6n7EBfWrn6rTzHaMV9Vjq3rri8g2GsVCpK41w8jgWhW4RYnN",
  "key23": "2gWwT49TmCCK9YCumChHyuZ68v69S6mrHiBy4J6quGXatmc7FvEUawQWYLJfDiWtFcbU7hG2kRVLGCJD34735tyG",
  "key24": "4WkaYPzZZkustJZ28AaDVi4QtuJvgDHjF19BJNmUvmLEoKDP3u1jqYgN1yqTckCdFuCK2x2hnJ5K5RVF4z6U8HoR",
  "key25": "48oRpMVH8tzB76kfVPFkQLmCtjSbTRM7C8yruBy9oC34QsraEL3YxMkF1x3D3kx2F8i2RyRSXDURz18TqbQNrs3f",
  "key26": "2eNvuhhP8tt8e4wTVgSUUEAABc7pyrPF8ZYJjUyjNsRZnSu6bpPEKkZ67M5G5kYLkEn5GSxz2PwbsErDUnQCaQaf",
  "key27": "WQjebR6rUfqyoJR8X3hkNqfgvUXdAK3PqgVLkpTroGbyUYcaj1LHUdFdjyQ4KfwCekFoafx4sNgxL77aU7bvH5q",
  "key28": "z9x8PVEBrTfYSojSRjWnU8VCLNe7pBh2Dxnc9Uwwzpeg7NHRF9VzqucJGG65cg32u6U7bxKuwRti4hoDtVEjafg",
  "key29": "4zaXivZtxunTqgBaXfEcp83jjmbDGnS2MwjwNXmjyh9tzaTgq2xT53cBTG68FFjFi5wDRaEBwkTUuunpsWyXstAX"
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
