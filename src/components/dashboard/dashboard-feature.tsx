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
    "3eujB9ih3fv14ZEv1n5uBw6w3B6C479g59B4wZWiJw2P11o2s8hw9tUKitdBFwpfM6eDWHen2qxAspjSi8htua3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8mnEKM7oPmR9NGdG8XYmCD3bi8gtfKRo9ZjekcrcRPkpdQa4D1PaqcBmtxBLkqt2EdbMPFpwM8uCNdRR4NTxwc",
  "key1": "2YBudqsFkdnmYSwLXEYxVNVTbxutugm1ppihQTXUdiNvgJy5mqhLFp4NoEv9cz9hsy7oN7JUqo4s5W8QNzwtqtZc",
  "key2": "BYQBHgN7xkBfC8syTpTe8Ab7oivKiovWjqkw27bXRE9TrarexgnrGJ4eH5hLhfHTim7bMbNM2ixufDiHX3DMUkn",
  "key3": "2gUKcuzsTrPuu52h6ChkNtdPY9tdSooMxNRqghjY6XsajE4mNNcfQW7BD9MLWhdwboeZZ4mrWHDmtL9RtAuYh94j",
  "key4": "56xcthEgGjdUjRRA5phSQMyMq2DJ6Kf66QDNMkcsZBHvoJBEA6uYPZJoCfrMo3uNJRTc7cSQtBbLe2SJqDKciFhP",
  "key5": "2TJhKFTNyyp9mtGmzrJWkXX8VnTbBwuu6zEeNPczoAGF7GBvjGp9m37h5Bc9GjnGwZX4g7mkaPodtHLpjvxcdnYw",
  "key6": "4PTfdp4knVFRsg5XzY1cFUyeGEKv2PbzC18RCFTUCmLeSeHx4u3oeFw4CcABnGUHpiqQNWHy51uBUjjT4KSSdSYg",
  "key7": "fRScthUkSzhzY3HLvgcEsZVjuzkh88vt2jGvWcVdTuSg347EKns8d7Y2fcJ5QR6rjBiPWWy512a1E4AuLNXsnXi",
  "key8": "2Qq5skE6uXyDwuqW5Yy7FHNvZU8YQQk9dmjfE1jvreER2N8W73uAB63LGUXiE5bVq395ZZjb7ef4J1ZCCUcxZrZu",
  "key9": "4jRKxqw3tXQSi6md3T5bqk6VNa91bss9PZ9a3cniSgytVbFmihjtKvZB64tJhRCv7yHwfrk6bsxndAMsM5RjDPAa",
  "key10": "4jbfnJD82zCsc7J7VQNkMU9Zy6gVAqoRHerNDv7TQUTWNDZV7Wec56hAr8MD6jbNhjm17eqKUEkKavkYNwCiby7x",
  "key11": "2Jd8hwsPN66GmercGnpaeeJKdqjFJNGJeW1zfin14qShuN9VYRFAJmHNCqGg5LM12MBBgPBJDYGccA66ovERQ6s5",
  "key12": "2D7Ck2kMX6EHNyvRVJgtULb4haPiAc8sHUeELPXCiLwMb52XFYyHbKY1d5fomcKoD51gjRfjDaCJBAe6vqq4s93v",
  "key13": "5VjGbQNy9bwmXFur5ShAg95JR7oZnb4R9PpxEcXNmtwGNLrFddm9u5L1V99vgxHARbhfFVvyd8pxJfSp8YrYsPyx",
  "key14": "GU2w3mesvXA7mDi1pgn12gYKS9JVPYGzBu4eNDVbtHjRbBiiop5Z2gf4C4EQfo1SF3juYFimHJgPML3X6kk5knQ",
  "key15": "ra21qWcEiniVajdHzVssYifCATA6yVeEB272uewJPx8twTFkBpC8GMydqcq3LMKk6hiv7nZDbGjcx59STyL738y",
  "key16": "5Jdt2Mh641y5bvPhNcP6mw9aNE7mMNmsx9u7gCjKdTi3LqUjj2YpMMHu3Z8K1RxzHQKam9bfqzBf4CoSYcFMjkEa",
  "key17": "3FcvDengyNrbHwgBRzJbYfk6xqVNHbjjhVauHp5zdjrSGeEeCFbZ75Erwu2h4QwbeUbbgTN3CWbdHqWjMFRmS5cy",
  "key18": "4EmMMF92198aDoqw51B59XtdgRVd6scGdwKWc1RwaX9JmZUZtmTemGjrecJu9mN8veNyacDmA4jUCptZnPfiv8dK",
  "key19": "32kuTwss9QsBTMWFpii1C33NgrpozJzBrL8tXnK8jMuMNd3S8LZR6phfyqi6Ka3KPX5uTTqDWfeR4XTsqusv5bS9",
  "key20": "3nAvi2c37yXwbUXoTdQUxxqhyhmrnXJQ2JJB45K4bV4vyp4PekJQyTRN7n38QVQ2QPF94y4pa1zYze9ufRuY9g4c",
  "key21": "129AVHbWFe8zYyiguE43BuUoyBkE6oHxJLZTFpMgbeJ3MSqKV6m1bZpHGur3Us3VRRGtbWmAjs9FX4BfCx9SBwK6",
  "key22": "2tKCWFpc86iDQjfhujia3S7fa39wvNqHj2owm8DuYcS7gCEd8cSmzdBmjMEGGw32uNg61KLFNfxwQduSivQ8sozP",
  "key23": "4qENGFhtXfoAokDcWLjbVtmpetNxdMMvEiZEoKPMUoHNYDzF59CA5yLoK7HaxwwaK7DvC4VQ24WpTr2L3Ld3HPkH",
  "key24": "3B8wPtAPrVLhFJe9giZjTJfaGS94v63GGqjdk94EgmhPfD2L1e4woH5pHL1zapMfKVAF4W5j9ngAQEEJnUvsHmYq",
  "key25": "34mtzSmpVsG7EEZGcKwfrDdr7HhUJ28xCn8KRmmFbni3yHzsT3mrDLZEGicPLMpKvrZV9a3wpjrQ7hJvp7NJSgNN",
  "key26": "49LxhF1fxUjtuvWqXr6Fvtb485m9i1LcUNUi9du1v2GU5tdZaHjbL7ikuqSZdHYE6h28qgdbWVBLSF2wxWg79r9B",
  "key27": "21Lpif2V4Tc2Vh8tv4ggWzXHGjLMxaHUHjbuDAeU587a6rD3b7k7tw5uVNBiY6EtPQNwpz6SszpbwfM9df5WpyeX",
  "key28": "4iY5UQrtEWz3Pz8Ec5BstrKLDmuP6gkvwnZNTkQ5DpvrryXTh6ie8f3zEjNC3b8W8cTRKjviszkxKsejuEZ3jS1j",
  "key29": "4bb9mAfKVZVmVM7zR6WWD9CwtXZxuLE9RvKXw5cHe5vMag4Nb4ZwcsoP15hN2pN4hsLAi4sfjJpRhSkkg4NioHNu",
  "key30": "3mLGvC7WFjDsAF1GLmvcFdJ9QZb9wpsmSjtU3xgPhzNzUPnopXoDZaaZwHVPbUgD1LVUNiZktpXVrLTcq7PWfUYP",
  "key31": "48vodhXHyYd1gCbX1Pci5Kw5miC9XXFXjwoWyDdv8ace88XMh6jMekvaPZGdnGB1Z4vzrZvWoS4RkhZNp5UJ4yGi",
  "key32": "55BRY91JrM2uQCf6GWXwAkwaFMQ7X7FtqHUKEyb131thNgsw2d6QFWk7Sj2di6R7y2iSDJWqtbCw7Gayv8UFvXta",
  "key33": "2ivaMPWjy1zA3qNfVDu9b5Q2KVx3whfZ5ftzFD2f1kt2S4iLGHFovwGozwGmwyYLDskvekwn9Vkn2zjFwjmuRnB6",
  "key34": "47Nirebz9JYfXjy7wbr81m2cY4wPMQFWVxdv75QmWYsFUf1VePtysuDDjxKKpscZGAg6DgMPxPXrWz4iY3Jij9ek",
  "key35": "5NfnAN5rEeogux39Wihvc4Bm8NY9TnnRpJZVXdtY2181XGoHhzcQEKGUMj8mzTZETGWvS9DUKYYriFmKhQ3YCDv1",
  "key36": "2KQCV2h1mBCn6kkJrDnTryqoCBA5ungLhz1EFR3vBYftSGR6j8NRnJRoWaFvcZ92tWyssCcxwzzgeaZxRJDvJ4zf",
  "key37": "5yKGatfeyekoYmvQDMdWUWwfZWgYLfGPDcLntxbR49LJbQdPLeTNeq9mrmkypny3dRYFrrqX4jd43scba5qyAnv5",
  "key38": "2QdSHjz8AUuYywgQbNvjvUvuhKbgzaYjBgfZzntyfvVXBoNUuKXZAq8WzE3SUg7eso5wxbeQZENcmqbggK24QLHw",
  "key39": "3NAwKc1nB8xzzf9wXAQAHDkVLqhJoRxBzK2S69JrCtPNHqGmg3GjipmhW4mtfMoiK5jBscN3sRzC8QtSnDyFESSu",
  "key40": "5jFcbBrQrT6HusgxiK4cdZB4i3m8UeNMc7WgrhqFDvcbQGMR9fBkqSTdcjf4RoB9LXjPC3nAKTZfKht1qmu2eQDS",
  "key41": "yz8WTM9YDPWBSdSFbHzmMzFfBr3sFnjCFuxQMDJ7iu7Fun6aLpTCBfWHj4Ha59fNQBwuMNUPinyGZSHUfmQkgeA",
  "key42": "5cEntEobCbUcpcGLoJtziqiEGcoC3UtAqMgAnSUE4v7SMMjRv9VykRgavWmiu82YCWiUTqWKXgukUydkHwQpG7rW",
  "key43": "xezDsr9C2MVEThkCC7cWAnL7rr5ZHfVaxYpLpaL6DyvG63fWiPCgfCwYHj85ZtPC1WDVzrP4ULvqZTSuMBb9jPt",
  "key44": "2Ee6hnwtCbhXGtQihf4T58WdJUanaMQmQf8w4EFcwJfZqdT4X1BZdUvUZwTDvwPvuStRZKw1Jk5YkL2gJz49ZF9c",
  "key45": "2LsG6f5BeEW4LYcfdLDYx4MtWTxf6GHowtEp98tpmzmqXFBRXaEu1Pq9bzBcESF3Rs2tiUYkicvVmgq3Ujj7Z8WS",
  "key46": "3Gn1ULzLThr6avAoFmRaLEaK6KDM21Rz9Ah8XGuaEtazb5RGZgXJ4Sjz9uHpzyzJN8PgXYzyhoDzuBmVnRohjzoZ",
  "key47": "rAtCS23GYhEh36ZQm2Xe8FdTSZpW5rfPeQNA7GFZH58oV5C4iHMSnzgBercrLWtxDPYHVjtRHPZpEGk33BBCZ4h",
  "key48": "569UvUfrsaJgJnicRGaEzZAQrAuUkiWyGEgxC4Tp6iwEirtm2aXCVqFPwQZAgpPujRhcsbypWfvT7jpgB9VNT99z",
  "key49": "4dy81Qo9NY6bqh1ko5MyRDFL82nRPJajyfzchZdNAUE1unFQxBpokhZ2HR49X6SudwLA4p2FKvVsXVsYh46nLj7x"
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
