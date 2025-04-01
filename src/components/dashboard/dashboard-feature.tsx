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
    "4qtxQ8VmGGyDTgx5NeZNMhneungXKGvuRfqoshDtepKPMjhBg9k5V6RiFAgruawSeRjPsiuEdkFcSGrpBvLaKStK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TdLNN3EnTZd5mXzFGUDoAeoJGirbYqAnwYqdVLEGsu25PwYTfvX7Hw6kYwT5BKK9ux2AoJfmGCx2KmRVbXBb8c8",
  "key1": "1i5k55TPx36ACkMcN29Hen84QYUygDmmqFVmaD67AYWWpevzKXDHWfmyqp7pS17m1Yd58faZ1yYd6jXXReVzs8w",
  "key2": "61Fvgeccweywcwo9xvPJLqkzfotd1XsKg4Y7xXCrk2Fvu6QRVqi2iY6E1EfXhLnRUs7fLaz3xjrRrZptzMQ76VNh",
  "key3": "2T7adzNiFfS5g5R6WaFNCFjFr2J53BLcUXsVeopFRwe5ZyvRLA4Qd9S1VaQGdEkFwW9S4hMTrCHLVxvkkZvNrjFS",
  "key4": "8UggmvizbCndAv7tjHZCghEx4PebQjjvEWd6CLkaynmpKZGPEbbNX59Xg7ByLKBCGVyQN7eUh9RWwTRpYTutbVd",
  "key5": "3e5ACrzPiCt9RNMC9Uzn6Vvd88uwuRtr3KQsZ7J453EYL9gLShq9UKvd2o6jEfKTxq41zgL7XM4QQp7CZq3amJD",
  "key6": "4CPUz2UL5bMsnWksYkBVjB12oTXwof4chypidem3bF4KskGaXAE2FaR6DdCYF4WQakJhTgrZabo6YQi8q3qM6Nve",
  "key7": "5jYVq8Rhoi7nFLUvkcJUvdqh295buJD5C4jdyN942xMLrDyUSBpQcU2qDf74rnNW3MLBNTiaR6DzvKmTKwoWRURD",
  "key8": "3u1cHbN5un3s1PvYGmcemZMEzk2TMZg8zk1nECifjiBKz9UB1RkxknzzTuJyp4q1r23fvcAeeMC8X2QCbqqq6MEe",
  "key9": "24USXtrxBGr7JW3wab7nfUdpZvs5MT59rvcTeMjJuBFDjLfiagwCBkX2a1jcEapqTYZjZBox97mpu9nTDVFRFrFK",
  "key10": "2mHsutqR1gqivBYUHr5Z72FbC3Dw7E9V86oFejbhWxoB91sGAX9spwvqv1QdeXHoHEx1CAgcBGMc34bEbdQW6xwg",
  "key11": "5Tfykjcmesp8zLwPoKxE3p7EWPMTm71VYXwvyR7yAndWMZ6drkSonJE5db2ehn4jxYGXmz49iemtBEBtaVJgSQ2D",
  "key12": "2ZcfcG82S4MqqGLr3TLB9JM7b9Vf7tYHFZuqAeiN6FfYWfUdR3fd2NfKiRMNzChiRGhkYjq9nPmxePAgJS8b7ust",
  "key13": "4dUHNkUZUBD5Ps3Eb2tYA5svwkx7kDeokkGHmfABisGYPy4KpWku5df28V7pTKFn4pbwHP9J2k48yaDyzQdRSgFo",
  "key14": "4pt8EeiCPGHZnVk3PmZJtcp6y2wWEHay6pR1XbXaqMAwhTkmkkZsEHLF1QASDNgXsTWCA5BKcn19VYDDohDC8nJ3",
  "key15": "i61RkxbuuyuuZYwXnGD8RKLGfFA2G5KZZi3d3y2TqGmdSYVGDTLvacQbHf8M2v24WUk6XvBbKiaChPe8EJjQW1v",
  "key16": "2YYMhMhPVTQdnFS3nar1aWUKPCTiyMnjw6BWqzr36ee1C43LWEwMbueVJQn9YEh9RjFT3P7ETH7QCXXfrb34NA4g",
  "key17": "4TZrf25BkZTHUUjNGgBjMa8xMq6wy3vrQPpzFq8RXgZK9o6JGuzyL4HG2nXn7zg8Hq9h3QYRBp4JuncwmVfQx2J1",
  "key18": "3C5KCpNTjAZexaovs6Uo5LSmPDx4mWjKkyHJBYyv1qbgJghBQaPfWmdJaM5rPryKbTaoHGTe4fHvgNZbFtfCMBMg",
  "key19": "2CHD2oedsW1C4Za64A3r9xeoMsCip7M6UzwFP2kbGYNUN9Zdi8RNRQs3BDnVmXEPFvGqU9JRv3ffcPexfhDEi5RS",
  "key20": "JaJvCz49A1Byr4NtkgRk8sLZwuR9NudUxKN3oqEcYGPGVntj34xcx2YvckmWyyLSpMD3eZLoPxQdEvRQwQvVDLm",
  "key21": "3B8Xh4B1kXzUJpoPioCkZYcPpdVGNF2zvwcUyirQBTJSQfPZGify5isc2ZnN7f8vcCmqTcK2H9cfdJwmQtDXK8PP",
  "key22": "xvcQo8fxsPRdrwu9M6WsPByWBbG5QUywRgKG2FfXwT2gTbAvEjHet7m96tk7cVfWpaBbiwzEwJFjoSDW3tzJ9q3",
  "key23": "2ujgxK9jpznAWVQSQX68gSrh677Wm8tq5UCTrWo1vVTMsVDWzmuXNYBctqUoiaHsRWBhHsPkCf2f9jRXssw44zjf",
  "key24": "5xtNz9Bx69id5BeTDLDY61VTiE4mbdSkJNk7dyabbq6nTfhkwXxY1VZtqKQmsaSNVbGE6YcREcnrmfCt3aqhPnpk",
  "key25": "5Hnee7qTtMNXqcJn8DiU3aJuVfsJ2R8RGo96qzEvVbSy6KCZwvhzoQYxd9xkQimp2gcVPN5RLvcdzDyBcgchKgHF",
  "key26": "5S6N2o9rdrBc8V4QDPehKC33woWUY2p8Bf5HoATorea3M19EApMCNVDaLrW67nQdjtVfWEtrkRcEorPrfLoS9dYc",
  "key27": "LDTfLZEeDDFXcZWRic2MgX714u1P5WRjiRrqAqHZqxASfA76m4hGseepFQjHKsgaMtwkjnzjV1shdJLAU1cfc1H",
  "key28": "5Rqq6WgfWJNnc5N5ReUQZLKe6hz83A6BibPQu5rSD9FTmzNv7hYbo68tfCHaoNreDHn2SmbVsTn1qWbGYThsxJUi",
  "key29": "L5MnuAZWwVrQTst2W2kUf4nAM5ToLEyMZcoLgd7jjRnx5ykCmykfWY2bwAVwkGPiJAAjEWmxGbm9K9oekRC53Pd",
  "key30": "bsj9DWxuQFUbAwur7mCrxJTVWJSwt69Gfkutx9UzFKWbRzq6XXbSBbzxG19whpxVgnGYhbXghHZfNQvfgZAm4q4",
  "key31": "2U2V6XwvR8B3bfQ7vrU2yegjQvfxBxjMmELv8rvcVKDFHDSEQfcFRDyDrkgD734V77x8sMg6eXmEuDDichVfNK13",
  "key32": "nmy3gn4QVVdWUvCPTsuV3jhh3vepQJJEZ1dSm94WqNbEG1nsQg6Y2zYq1xzXFYjBVsqo1hw5oW2vxK71isxRHPR",
  "key33": "5hE4DFkrRa4cKwiUWpuNkTY57SVc8j37WmCyZzQ8idYRD3o9iDxz38tBAVbTSNdcjHGyNPmPzncRx8k4rJhsW7Qp",
  "key34": "55VEoy4dANCcrWPQ7uWf1LvmNujpMCC5DQFhYn2deHERNps9zAXhy1gJj5FeBnTVYCx1zh7evbh6ZMaSsFxatnvV",
  "key35": "3ACEZQoako9UfHqyXqFxqLUpGtKqGWwcD1n2YQ8VT3JEVbsjs6cEgvFzhwThE171sRmGHsFBbhdZamGFxUgPGTnf",
  "key36": "5ynopXqdqYaj5GDVQRraNJZDKjuYuzpjtDFzAgeiJTe6iWkM1E5xAwLHfYaC4zoMMxNK6L6P55zFSdHGKY1o2skA",
  "key37": "37Hf74soKh1ethqn9CnybU9WtF83N6fRKwpzjRBFstQHG85zwQ8fyMwavME6PC92JZxGZGPGWfWPzvwpaSoKqrtf",
  "key38": "54DqrbArPjujFnbvDXu7hgmqoHAfhWJFt86jnpuX1UPhgHmozWHFMe9aV63Gb8TNXNT5Y6Zcm4SSC1Yq98enT6Tp",
  "key39": "5eioLKdp1EFYnF2WQZLJ2UxH2BYgRUTfBBnyH2W2ATS7Qvz1KnuU18M2GM5A1wLyAdCW8mugByDioKsNLVpD2qW",
  "key40": "4wATHShwMP7raKdr5ncoXe9qU6xqsqHwXwhsH3JePAzm9g9AmcQkbdoKCvcVTGUigYzys5qtsZiafMX95WbDPGuS",
  "key41": "3fPre6n99yhqF1o9ZfV1vKszoCqsnfuzTxY7KoNxZzuS1axcx7rrnb2PaqwA8ggKNRgE6A11QnakrkGEcUnuoaJv",
  "key42": "3UBRHSWxSDAekxHUJyrjiw8h5oeAXEAYixCzb3gCsv17hAmoe5Gdf2z898gU4KRha3teSYjnX6XN45doR3eDVAGn",
  "key43": "KdkTaYwo5ZFJNWuehNiFAPJjLDMwNUDF5v2BWrUDTHbavfD5DCM1bko18mTXfqC3Ehyg24MkuhB72MzWvbjFjvT",
  "key44": "66RCKsesuuUMgwdWjmXYihhJWNwsfnPyod4DF9o25crs3gJWawioL1UP4NzfgN1T9TiroBSSELpZjFvL2YBxLiNs",
  "key45": "27zU7YByx9SgX6hMkc4mB9yvZch2N1uqamCnx841QWk2ipEyMp9GvT93svMAnWEEEHi8w8o4w4Y4bnBqf5Tz36Ft",
  "key46": "58nnUMma3WPCTM8EthzW1AjStyiw9aB1k8JwHGabG2Mk6xit58VG5P49yHVgcr9uXXkyKHf865M9cKf92p5caGsk",
  "key47": "XRGcnZzq5vBvVsgjGVQVSG8px4Z3cWknqp9LAZQY5HFNEqzL1vkKN5NTnVbdNsXU979u6zrL6HoofcAn4xxyVu4",
  "key48": "2s6AEg2kv9JL5GrFCj2xCNfMyrqb5Fu3TSUGN9GPbg4NsTn7NWyQHiALeobtwVFf7X6GQFapZaS2RaCcUnjMGH42",
  "key49": "hAfhEpEY3k4VhQLYRN9ht8Ns8etmHebZBmzBz3kY83JeNCyP8bidnUcqEiU9cBQd5AR1EpTqAEX8hpzpiD9nCCH"
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
