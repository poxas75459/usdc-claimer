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
    "5RdRP1GUwQruqc9jeJwC69UXipiiXtLP2NLz1f8fA4qshdBTTQPWvgb67LzmWcwJp2ne2PTrQtavvWf2D9JS2fAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9tM6EDmPKQjA1v4vN3U5RGpq6rFgELZtQMdHbhL78xMWMv5oGnCs155jPNvCibqtey4Kc4erieqzHUuMPH9iPV",
  "key1": "4JjDKgkV1d2h5a9NDibKKMQBGcYP2uAtK4E5WNMMRWFJoFW9o37LQHxfmbvAGPWQoCCD3pVURpz5vkcYVx1QfjmN",
  "key2": "2NA7XRzTpx4YyJZ5ke6x89obrSo1xyuAfo2dPn4kXdiHF1CYNtCz84weJ7ppwTomSn9UuFi9dnVFxdoAwGGybkah",
  "key3": "2mXDstwJ5HomLRNbVJTaEHvzqvn4qGa1eHnA6PZLAEbg2KtD7NKLLuZtZFumngKyTmAkLU6oEnqx1utZs6vx2uhW",
  "key4": "3CiZtyBu9CGcU5vDwNp1nA3Ac4NgKHupZxJWna63yN6N4tWpZwz1bqGePfgX9MS5nnoPTfSQdnnrMLurAKB2wftP",
  "key5": "4GaM4RGjqw7kbgpZqia2qKtG3FQUnuvqbjjRRpYsfUk4DJMiEB91FnTjdJ1kym54CSxamtnPV5qTVigLMQiDZC9W",
  "key6": "4gbgdfWaQe9hgt2rie9jYfHLYFapL5kZzQf7S2nNj72F8diNhKjiemwSsvw5Hh1Dc8gAsjKVAUvGUka36j6dsxYG",
  "key7": "38ZdovsoSTLpZ9rZbLG9vD8fF1mxQiZRT9aBjnGSdiepoJMxx7q2ahEF1HALizd4YPk5qVudhByanLk9TfypeCvB",
  "key8": "zGLXQgu1izdZUooGTNogUkMLpS1yXBEu6HTp8oRg5CkGXbKch6VHfBtUcf7QScRs8ngn7dZ7x6j1tKq3i2pt8Mq",
  "key9": "2qimWEUCxSpLyKWdPUvEkbakJ5bN6u3m8V6jR4g6KDHtYsci98qmxL55BK1kSL1KaSbLQRNYfxcaucjeHNrSxQxt",
  "key10": "4z3f7J62CSTyexYdRsKXDUVjs137XLTRaAL9tyhy6yF7Dpb1UoiPcWQojqNCv1Nnbn8vBU9dyyU5mFUnYrbDSERw",
  "key11": "Rodqqu5JWV6iATAHXK9JMMRmMMVKzk3eQctXuhFE8y2kdmvw2hdeQBvag2ggsXj8L4yJCuMggUNwbjJSA8hf7MP",
  "key12": "5eCucvPbAHXBmoKMEbQkv7fwSYEV6iSRqN1FoAZEhJ6CrTndgYCUaR4rrYV3dgaiRvUkqTRZZ7Q54c4zdtZrgTy6",
  "key13": "2btHzDigJv85BpJqMPRdK5WYpxcs6DXzbm3q4ynoN5tLb13NeUa5iGLbMJUdfgzzRtiVKjM2xuWXHiSKYvYEvcoW",
  "key14": "4HuiqF1YywPRbKFZcmsTiL4wSrL2adMayWagPvvMkeSi5qHQLSTdWJhJwWeHf74wZkiN2wVCMN29wF2bZe1aJzdf",
  "key15": "2uHHPmsKAbY12rtui3ZtqW4hL4rfAYpSDorBUNSN3x15Q6W1nBDPBxsQcAGJpkApWFWdL9rotHKRsjb6Zz4PTaV9",
  "key16": "3w7YPdY6CwefmxKqGF6kA3q2a5wcmW4E4Md1nLbiy6DAzArSUeSmH5rzvDVXaEsNnsMwqGX4GP8LsaW8qVRrZZjM",
  "key17": "4BBae1dGvwH9QzS59XEFj2X4vUowpauvpgGfXxnbHYnKptxPwDm6k324EjhNgTEZdvYjVDAxCVwwYRQd6JXooXFA",
  "key18": "3WX3N6S8daZLny65gBuYePjQoytmCTtXBjLXgNDDUG8iRyqLoLQtWWRnHqbmHa3PgcymkyaQ6BC2YYqyUFaqrjB3",
  "key19": "67japPogcQaEyPTG4ukLHWSobNczC4PRLaR1CrpPKMhxK8454ETEiaUFw5qhSxRMWGQSWdVqzq3ntA9Z9Magru57",
  "key20": "5fMFWqhy5Jm1KLx274qb5eWgzxUuNFDUCUuwV6nc4hwF1cU4D8zNgwXXzznypsEC9Zb2QtqGradpx5Gm5hRHup19",
  "key21": "3L5utryiubbxJh8uf7WXTofrbNHwAFUwDETxykys5d6mk77ZwQYGACbi3bEC6tWi99YUHpqkJpjuA54mNkzXQPfE",
  "key22": "4E5DQGTuEfPAKpJHknqCZPD34gvJpVqxMA2SbUYbKXX1VY5niEHc7ESK3QBHH4KL1Lj1Q8ZTm7B19mnNBGnj5eyF",
  "key23": "5v78PRbr1rbPcaBfDYQq9Zif6bCd7rmZ588XEFvJ8zCz75RmtaCUiLpaZ2t1czeMfhknEb8QXwpdX5ytYjQpUmn1",
  "key24": "67bnbLoWfQojT6R95yNiUKnk8EmwkLcZ8NqMnsfKX4xsPxCinBKmZ6FSaFXEKZHFDE1Mupy4moh41e2cj6LeR1p4",
  "key25": "3VQRiDXgTYupJiKfKpfmE6Wby5VtwUQGUJNVu2XKLhuYozbmzYCtMB37okgPuhKBai2pXM1p7NfUtpoKwj1vW8x2",
  "key26": "3njtJoeoZ5E8tJWBThf5SkDQqyWK8QAARhAG2cJb1MmdnR4hyERNvCNAxLPV9ZMeDHUJ3KUh96rKgguMMKrhah9m",
  "key27": "2W2t4rMkd9hmiiQHBRS8fVFB9AQ34LWdyt93wgfuBy2dbqVA7vaPn55xYwp3Hfua5C4UsQuPXiBx7UedU9MwTpda",
  "key28": "n92hp7onoHE8mPrc85966RrWzZcSP2WxEdNCYCTsfWB9XEVPNYKKB5QnHbStAHuxwJdiHeW7EU2bmUifXsSdaFb",
  "key29": "5MD5LyvH2L1CBx81TX9RgdhsMvrNxBX6B6sCLJVsUxfBnHVTQfop8o3xysbMxru79eHuuHktRh4r51epQQzB9bPu",
  "key30": "9fyGKTLWrUMdyhfXisaoy3Sx5kXGwbGzJ2g6UfavDbBgdoDwnCnENEWtuVwEWBfCRSY69nZGFwonPyzt33MoVA1",
  "key31": "35qQFtrQ8mU8F32iNKc7SqSxkTdkfA11Gz7LBz5f7KpDzcLGXm7gLCfSTvc2qtpf4dnXDJEZoors241wFJY4SRrV",
  "key32": "5jLn7oQKyU3aZmAXYuQiujLEg9EEAmyXtxf7Vqy1jajb5meaT5ChHeTNERG87h5WVGCizuhFFZmM3q3pAUqTM5nF",
  "key33": "3cW5qo5TJtM8S61gmF5CNyNhSwg9SpuJ1aGquWWq2EEt2uscLn5NLXkGF6XfBK8yGody8jsCL7MSW9w4qHhU58m7",
  "key34": "4r5hTPj8sVP2WKssebZko6RsGUvuwR7ZRvpHJahkvVkCbJUqazENLn8HkTpgiAB4G5u8XUuCjkDQUw6BXLbZZdhc",
  "key35": "3onDQGJixktPx4hprqS95dGMNXqwrkWzu8fbXBNY5nUCHfKzHoT5ForHx9VGR8Zpc6H53mXnwxgghMgmxb5WfoYb",
  "key36": "3rQZX2EZ5p5HppawWwBJ3b3uqDjqSh9uNg5bFos44Cs4ZKhCifWc4D3wmJdkqMto9hxaJd9kRjRZ1E39r7Cw1CM1",
  "key37": "4Pm2C818rKf8sVVTbRvy65vRJ73U3yGw5sL5x5ufPhrj9s32PDU4PnJbxAAsHmDpmwj5i5LFxvkcpj9AYtJoaSvd",
  "key38": "4Qt8vTGtUPcC6FmJADiuu2dKrA4Ze974KEGPe6i39P6gSZHmeft876dpGEbRVCrHQASvDy9XV3YHEE8oiru26HR9",
  "key39": "3csPopMht8jAqmB5aVSv4txxZcNAS55iMhspPjjfkJ4KuK4bE96KxhV8yqbLrodwMNhaJyvVqep1Ty7AZZDqbiaV",
  "key40": "4gK1Z5NsDUaWztAVLS4FGhn6vy1RhSkwYe4UqJ44V2EuNFJt4E3eXMF5yzk9WyAnnMtrYDsVDQ94c1J3SjBVDATB",
  "key41": "3fb6oZjh7ZXku8m2YRAzhStvZXWunGfGzsu1FYmnFnPZ87W2Pj8cCkuZF5msYX33cA5LXCvDMH9hUQodWnNBNyV6",
  "key42": "QFf8RaeugybFNSbsFi8wNmCcRdDcdKphg8euvuttb7P4RRuNJWfef63RC9KUuyQ3F2hA9ZWhjXodwSPNkT8qpB2",
  "key43": "qC3XewCFQ1Q8hgthNE6T4fHzuYLNo6w7sq16S53ZcoKAaUqNGH1aQiGzVf1DpRecH1KzKMBY2R8pHiSPLEqrwNG",
  "key44": "5jHZJ5pe9W9RHKz6vZTrR5RXEWKxgLzPFq5bX6EkpzUH3XWQpxScUykiCKYv2mjbpxsNkMyZrP6sVXhs4g9EazdL",
  "key45": "5RAhswwsvQotQdoeV6BaAKfoU21gGbPBGoorwqHjKREtyw6AwXmf4kL8g57Qfcs19xfFVgDLtboVmJ7psLAKKJd1",
  "key46": "2qKoaEWKhVrNiVYxD7nEnF7nPcZEuSbVsQfbuXNBtX2LQZ3RsLURrwCbDkcCBVwNMzSCxMGvQEfw1xBBpbqMwNeA",
  "key47": "24WfpDQG6RZv3JWqc3yMRpvnKSB2FcL9LZHyJatC1Dptcpd2NUK6CpHK1vcJumYzgqKWLuH6Ktpw4ttqBvNFGdqU",
  "key48": "TL7iaXe1dcEWivJyfXtshPKsJ2XzMWyo4fmL1yD6TQ2xfZq4Xz7DXbrDbGiJhUoF54hCjFuuFg454Rx6NyC8Ctj"
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
