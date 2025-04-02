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
    "24JPBLTTtacCQpComYgis6E3SYrTP2TVgEWAY1chQWB9VCqV6mfzhK8VQVZUmCwU4cgZagePEzBNZ1p6tgFFxUsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577pAwEB2g9UpoUdRJmpzciQxZhMhr8GaqCYVqWny1QF7cNhxWG7SdY46BA6RhYDGtDuw32WQRkYaFHJfx1emGPk",
  "key1": "3j2ZTfSTMEQJDEcRkKKoiTUYLFBDZQLDdpaEuvjDUmbwgPbqCA62CWinyJ3sMktzHFnfPFESXJuSx6o6xTS7NAN8",
  "key2": "2V22jFcoTNF3eX6XHjvmN2AbyRd5gDCHtftFh4jn8PQNL5DTPrF6BPudSrLxsqEAEFHQ6um1JQaSwy1dnj5ajE6A",
  "key3": "4JeyHtFZHmtqxJrCQ1iaBXi9MVsbhb2G7npMib6a2zWtLVvPHebGbXzRRpuR13VHhmkUpn2yJ4F73A46ePLBfPfg",
  "key4": "Rz2mFPxDYpmp8EspzKFJkXkmqMVLw7tmNfGxjwaJsRkg8rEKYEnvRLrD2k1kMeZV9QL99D1Z4DNrMjETPUJwM1E",
  "key5": "YMtDtgobifUjuJHFBwHttmxg53fsBHUZ7FKVA6ruRBafETXcxLrFh1wwGAregdWvNCow6azf6A1VCnLMzPpydZ9",
  "key6": "2KeRt92bGdPC2FZXSkZ5gDhifqthZCrDMgcEfJ58u7SAH4XuSTMHjdrAbheaomwW9gCCer52yFnKFZhfPAn7zC97",
  "key7": "5EYchqqgvtYwdL5vXrS5cquPF1EuQxmyZiviEWfNqkzmjkm64pyUnLtBTGdcCrd256e1UFA6sPwfsheSnsNffqbL",
  "key8": "4Ms8wFkyWiAT7hYs6EGGohhocoQScFjtW8pt5W3Twx85wpCN4Qf1oBGQjLZbyenSftFSFdwJA3Bxv9h3Chi3CxpR",
  "key9": "4GYFmyWVTePZxmaMYpmTS2LZ4jQC4wKGXcshXQiK4cNyhVXRaf5SNbc9bS9AwDifewr6xfASAaH7FoU5ZtAXCnjJ",
  "key10": "TRnU2RHEmvCrbvP6DhQgFdaDdwWLHpuBRiTG7tLycaai6pAnLnFAbJoZBJ1iec2zCZToxrw146ppKBa3tnk2WwE",
  "key11": "3B3KAgj3yVAJFwywAYE2Cj6oJ1gznFd9yGoGXxhhn2pzAGAZq9dnKW77dz36b1CpqTibCVJNYujRnFBu3gq5sa6f",
  "key12": "4ZLJZ89otdMT4LnDfhDnAmwRc7yTMx4SsYJxBP4iTdYZ4Y9TBVCrinbu99na5HkoLPocfPhK8hkiZU24ykvCxLd1",
  "key13": "43HHgNNee9ULk6n3GKw3eoX5k4W2KyRc82MNtM6Wf88WmZX71g5J5LjM7VVZPzVmQR3qqy1NPcr9Arqb6oX3sJn8",
  "key14": "2QxYw1D9Nvc9wgNPKUzj4SNcFebrXgXHU9sMmHvwNexjj5iT78adz36LaVvmF1ADg5gnktjUf3rm9PqoLY6YRfuh",
  "key15": "3Hdwjwzi11v7zdHPBN7Bpyug9sMU4rbVP1xwfmmXFAGCThiGDk4WWKzq3WnR9g4NupHzBjm7vHoQueFC6rC1LAHA",
  "key16": "5e5mHZnAs2aHNoyzMfqwXDuqD7sWQF1kUd2tN2zTyksD8XTYeU8t2Cgm73RFqNbSJRn1tB9ZdoTcAZBsXTw4Ko4D",
  "key17": "49UXCaXd6wg9ZfCY91JzVTP7xoUMViXwACt41FiC13yLgMcFhy6zZLddee6jjNbHtToHTQqgFBiqDGRq5tJnyLhu",
  "key18": "3CGjdW5hkt5b1KrZF5QbsYusaLcLtFbLtSd8spGWNyDgUPMSQHBhhAzSyfMwbcfig6nDpRUo4ysuvibtsBh6qv2Q",
  "key19": "45xwnxgrXtaTT7QHmZwULjFnXNDPgnBjqomnuReNLxgbxWcbf1LNhzkevsRPXAb7u3zHXJUjHHaB2nLCugtRioQr",
  "key20": "5QWkTgkSwEtiUybFWeDj8fW5ZQmLpz1RucFzDFQ3fXdg6PhwzSxUFQgZv5iiSnUe3s9DHn3mtzm1dPfc3qYTEzyd",
  "key21": "3ahNEqCSygQgiqd8ZBsPTLkbQEnYSsdcT9gozf2ffDnVuaK6oaBpUqAkqGeCd2VQmYWvebHJFrTvRdj7h3mwdmnF",
  "key22": "5fokF9TmYx5FoRYRKqUHsBhw69oedqHnSuUMzYhpfxsRNkQgm2yTBbj3oMGED2v8LEo8iupbyvkhcQ5RmGbZYx1n",
  "key23": "2Snkw3BotwMZTBxbAAgcXUcJvsZWSNckjEhQUg2CvEGmA1ragpmF6nbvdtmxJh5Z6dMXiz2yxogLyyrgtQPxsgMD",
  "key24": "5fyGWUQfXx3pEgHDR47sW65JvpHaWHiEyQtEhfuN2T7K6nZJumJSaJEk6s9EZsohmJyP2sFa548MfDDP22k1J7D7",
  "key25": "35M7kbw78Uj6E75sYZKH6uPRMhFkt9TFGJgJYJZP6aMq9Ukem4NNYVTwZUmmjCiQ7gQCoYVSyU7odfsYd8DpyYUj",
  "key26": "ngJR6FzqqAaHM4HnZScU34bXpvZa4T7oCowQgeKjTQ718QaED46AXisWtcdg2T5CWMmNUXg9UDJ1Ewsvktz5ioW",
  "key27": "3EYvAKeaLTngYgifNeJafprBFgBMTzKZ26JEy9smwcK1ZPJbp4oFvcU689QYmqKWkZK4uBiKqHfR9hRiko1QWmN2",
  "key28": "34oHpzzMdBBENWrcZzsFPjGczNsgQkkz8LKgcLRXEBZkgpc15Sdr7m1U1QeQHLJV1Jjqb9VzVv6TPSvDCmymW1pA",
  "key29": "NTnXBDLFr6V5r51Ddd8RV3HTrrtDJmkSXbVBzw3kYycvr93upXu5Tgy4DaM1ZxdQ3Sd1EBHqotL8bwthMwriynd",
  "key30": "4THWF1SCJGEU42UAE955gNwELLn9QGQ2CEisVv61bQQm5ksQrRVVcAh4WhT17gKPjPtrj5pprrNZ9oGhL4PkbQ92",
  "key31": "5EX3hBrK4Evj9TGUqwCu7EQEucKqe1brDavJg1d2tn7jrxrJSj9Rvbd9T8qktp76ZyjXNR25hqVYF7jRu5cq4i1",
  "key32": "4aKj8hNoiqdmCvXTsEsjZkh1bi51mKtUZ2AM47RTgehZNboCtJ3Cj4YNJXCr2EjCqxqurVbRDH2ntTLPdm2zyk1n",
  "key33": "2CXw3B3Bu5bcGPJh9yvELSTYtXvVb6fSHMMFVKYEuY1XGgrpnqpathDADCkysMeS7F7ALKdjGUvbC1NUCY1s1LUV",
  "key34": "5k3Wu3fUS4gpkTjsbtqDrECnGyVMjGBtmjRtwdWVPHQcnuNN5kj1gqMCwePqLTTE64x9ZMrfcwoKv3NaKNFnNm3v",
  "key35": "vgeVFeRSfZZn6q2UYJdBSKkhTHyMYV6uCM82MnzCPo7NPAcS67zkUxqoKQ7FatQzoyctDKxNoWAUHo6PN1FLEaN",
  "key36": "2fyULfWBLsq4RQyYH6FYZNe6VFV1H4XXwfSUWpF38kLB3nHwLwEzbtaHwGm5cLuqBF3sjovLyZkMjSPcY4j5AHKY",
  "key37": "3cNBUoio9GYh8U4KFS591vKFjD8x6L9iajKMtJXLnFVYeVMKi3yH3ycG8qPcXxMoAvEUpA3jGXq1GGxtBNGRQFeJ",
  "key38": "2a7botukmjFTMBiWcLnNBpHF5LZRLGVVLMLVFRcyV9gRvdVnTDTTDFBpYai4KWQiTQf6Tq47DdTbGLSEGLcUWizU",
  "key39": "5gFyMn3kPw5yA8gmSPb4XjwQvVi2DcgyV6JFfP4u5woGcxMmMw588Tu7jZWU3UUEjuxPxHKVQLg3kLy1TPx26UYn",
  "key40": "3w48Jwf3EyfvNVjzdSD538FYBry96rSLxDMN4p27E3K2AfcRVYvgkrR6oMTw8xDQ6iTkDUYoh55vGL4n9kx4jRAV",
  "key41": "4UjS5Uz1ifVZouCdj8tA1aN74v2KW12LE7jgu8MwAjgtPvz9X3m7p8UhsFCNCvzn7f8tvbVYYko8XZdGTE4xwS7A",
  "key42": "5M5qDWpi5x48iF9PWJoaZ2UWhWZnN8q1mJ7vxccvkjcjfoeEfkqfhQNfWe41NnzejPi4arNhoHWD5oV5izTvTTTd",
  "key43": "KrC8yixHMvdWEeZdSN6YRswrkXLFapXyqd5ueeKrNqT9RfuVbbLX8YjkpbW8hcSazPU2xzUdD6H2RGhvgUUdLoW",
  "key44": "4FWapn6fcssWYRkqqPAtewD51YAvACDzH7rEsdb2U3H5TmzbRAtGtsLcyqWyX9cmV2G5JjxXgZXcnMiYYdTadWWa"
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
