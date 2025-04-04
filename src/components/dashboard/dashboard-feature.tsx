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
    "64HAsrdkCbaQNnaN9uoLvYSsX7HcFZVKxrpq16PnYqm7iZgGVYifs2L3z5wM4Lg9eMxfot4DkZm1SfMc3rsUS7bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZBi847w67w6cdKZwp5CXyFphTptjhnXnMjX1JTRLwBh7JYhkhRQAqER31xcSgN2k9RyDDZTeMHWyycLXqX5LBdE",
  "key1": "kBoNaVCSZbuhjcEdcVTpks1piQJUbczrVvP8nAHxAvQHErcWHFxWBQBfcanEQerdpYaaHxAmJHpbnAzduLZ4jpF",
  "key2": "W1oyDEnAK39insxWN4tjC7X8D8YGDMViD4fYe8qRuzbMi3KLUiRj59FwzprDC6qoT8c659CpsW7G291JKgt7T1c",
  "key3": "4N58oe9Vj7Hki5179UbcdCwBdCaTeCCUeqXGghTPWAiSzywQPbX9Xo6gzfKAXGhVD5mc9Ziw9tc4ntXd5LH4VbUW",
  "key4": "5DpLifmKzC9sWsMsqQds18PojtRGfJzX5YmDD97XN9A5CNjA4F5PVpAGjWDKLFEFxbmVi2jfFj92Ggb6zLtAadbZ",
  "key5": "WjGsjvyUP2oiDJzFPm5SFycPegb6sqwvos82U25pMCMUoaHkmyc2uu9sJxjmoshiBDEJzurUkzhwu8HvvZaDAgi",
  "key6": "2eEmVt61RFiZMsPD3xRoB2GttzPWqpVBDWjSbZLbs49X56jfteuLqGLUaFub6hRxfm8is1jbqtoDdXhUZHzsbCty",
  "key7": "2p7rhAgYDP3fPNUVW9SUYQhzg3Hd2UzHAYxiCvCnzoaPpvupUP5zuxnfEgL9hK3tDqgsD26D5yffTXcfKFaLT7wm",
  "key8": "C5es5k3xSVp2mp8F6e4cU96m1d4rst4B5QtEKM4rqsU5K45Amx4KBsGAJrJMKLjKqA9CWvHHh8PauUKDgHqx85j",
  "key9": "SQCN9Efx747BeJV5isXcW4mprQn9ykViKn27Nvmq2ZJArEYf4G5ppoeCGgQu17XR2iYi2yb9JbZiT9qW2Vb43sn",
  "key10": "f6UmoozWtfy41EFB5xrLynMZpm98VY8ZAH2XnxkQvCUi3RxCfpVYQW86Ti8QwhFozpVnNe8e14TAFY4AvXkr7ob",
  "key11": "2t67MkX335wCoYDFk2EXs8TaR8vPayAjHAvRTBoVTyykRBpAZmQcQWCY8FrDWJQmPPdepewhMEngNKjU4471Ahv1",
  "key12": "3LK2JKEGneYU2U25nrc5ar17CugF51KCwxsLDXQ7RX9ZJ7U7hYTvA76g3H1v8kJsDn8aYLy9viKku9fHUmimXcCX",
  "key13": "28NkQcCVodmCF98nK3qNFdDNobmhMBRMw7QSa53WF8mzrDMkKV3Ko959WeLWyxJTFbXFJ2MLvuopD7dK7iEvdqPn",
  "key14": "4fhp53PTTqR9Yx9dkFtLRsAA8dqBGxg8ezq1Csxrevp5qNV69f8ZHDasASSBiyWAWJC7BizL9h2idSSYRtyW3of3",
  "key15": "5iKF6oXNgxruxD9zzHFDFYJirmysEsFAeZDdUwQd2P9HNLuZD1C6LtsXVYBkxhHoCrnyKKDtMSJBUJ5JETXrHsah",
  "key16": "4kZxEYGuM4RZkEx7puMKGiitFJSRaPgnrHNZyB1VuhLirgW8ndDUpFACkE7nn2hEfbbXSBE3Wx8hndGtvo2H8o9C",
  "key17": "4PqK5ZYZRDHSM8PhjWhCogmrVD1hCwfjATMgowbupLC7S17sAyGkM3YZ6RRxEJfnjcAHLuLNNckYMCG72d5EQFZN",
  "key18": "53Wx4h2vAmQpTiY4FdALqxkdRqhXFTtmxHb7Ja44SFZqUq3Z6VCM5UUwogYgeFHBrWBd5vhbfcBUEArkfctVvmQN",
  "key19": "3qZecPvS12LrFKG9kSVCL8ST8Tx42UeaLKri2pkhiZWoFwGyZFrXVskXLFctMGe96Y5JDAs4UXUXVDRsL2riXQup",
  "key20": "3ugPHcCJMjDEK9kFHof6CWYqVhwHTGUjNaKSfPMC2VthsjafVyDTyMs8htCcUfCCH2k1YtUwjbqzX5KUWVDPv727",
  "key21": "3atkicFHFEMNosVnaZnT9dXEpD5fQuLgMzj9tYyKHPQ9cwMCoPMo2uUZyhxpQNvbkksSYDxhL9JgZAsHH6ScaPJ2",
  "key22": "2hWiTVFJHF74TCwSZx4LDJ4Scr8Ji1TazPVBV5hJGMNMqzEVjhZ7g3G15EHdRhqoquweJaaDrxZ2mgR3TkoKMgFv",
  "key23": "3RHg7ruBU5Smtm22b9W2nXjiEKHsxg3SxUJvdSf33UC4nfwuzEPrswVMmMMsCvfQFda3DkwkYwL9xbhEYTg9iuQy",
  "key24": "meM6yjXGM8qUQF26LBXWgwWtgsgQbm3ea4VenCzG8iRkZcE4dtLxqGEWTYy9wRQVjP4MunD98F9J6cW4BEFEdGN",
  "key25": "36LATQjkfmznBY6gdDtCFNw55YwKGvCZBFXiiBHdQJMB8TjnvnzQFCNPBrgo5tGwCPWMWAxB2KSiqV79eo62ExUJ",
  "key26": "3kZmqF8tYFywGfgN24a2kh8zesCDQ8svMi49txuQvrcZ4qkW88FYxbwTaqRdJTKuCvrR4AvE28Q4QiycxPkTdG73",
  "key27": "2AyXyr58QjCedPFadedwLcowTdox7Fd7whJ8WfB6QjpNBRs45yK1YjbqVSYuPvCeJoBH7a5XrUEhJojNqtW96kGz",
  "key28": "5hj62A16DZYZGx6xxSap6i41ZVyyxYJSiVwSMrER67xicH4UsF8Ev9eWLpLNMAxnqy6mGu9qXboUptAwMkQWoWaW",
  "key29": "2HmPxWubitYTQTHoStF7orPCTvrjNkGUmuw2K3zi8R1DjARTXaQ1fLbvdvHGvCRebV5h8XJmKvCKwuwoJRYFHPGa",
  "key30": "R26K2MvYwpcFBXeciGtT2W86oYYyRcxo3CaCPqSdZwTWZ7mGb67bNVvRv1u3DpVKDqhB86ZUMgmuzRfj9oXRvn7",
  "key31": "4cq4Gi4huJQUPqHd9q4grtvU5LwdnBmJTdBcypDJTP7CYu29rnQ5X4T2kLM5DboCtpHbuGCEU29NU5thkminfLXL",
  "key32": "4vbvsydw7ak8jZrumX5chu8mBvjJqaZGArpEKQCsoMCSE2zGhGEaSveaqCqurSKncxR8D813BvepzebrxtPccBpo",
  "key33": "5qV1Rd4hKQrExJHRH47LR9DeodHyhfoa2LaUcYjzVoNBPAhZ9ZFshAWGGE4fZ8hXDhjyLrcgjj9czqoZ1NvsrD53",
  "key34": "FY21Zi4kuKMkjYBZUCD4v7itQRaZiuKPvpExEssFtYbZAaH2UpYCcqL7JRgw5wx9K2z9w618DBewA7AszHnErNE",
  "key35": "242zdQGAAzwpvAnquyhWwmbwDYpbHMudsSrRsskyEEeBWKddmNg8DqBHaSUkArFHJerx8BstiLiur31W135pXY66",
  "key36": "5MejR6UhJfJMPVZMEiYDNrb434zSwd5KX5K4HawKbKH8nMKYnQviTHLehi5QCafc5zvPiFi9GUGBmjSGJ7GkPYxU",
  "key37": "5FHt5G2CbP5TjZHHsBFkf3Xh3oAcjhBE1U6cV1LXk24y3tPzJexRwstAxyk4hBRjAGrnaVfbLuFUP5unXri5PjgL",
  "key38": "2Z5FCr4NQZdh2ofQ8FKKd66PNUULeJoWwnbCvK1yJQ3L13rQvMwxmZPLqqwahfC9DVih1a7LMioPB9rEzMQCRQGN"
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
