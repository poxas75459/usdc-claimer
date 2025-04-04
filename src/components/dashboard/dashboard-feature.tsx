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
    "2YrsEzP3CwPRkomnUvaVeNFa9m29fPbEDc2GgcqRtKLHfNV8xspmNbXWdAhZDv9CjR2SD4zMUSK4gmiwhV4VZFJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48u2RFcLJdqbk7Hcj3S1hqM255rBECAiZucydji317raq3tRwDWpWnXWZ5qDLpQnh2sFaoG22w3h42gEHpj4KLR",
  "key1": "3f9eHL1Ev7zDXn1F22ReoAgruZw1x81aT4fqFvT8Ce3UEenxnCadExaRwYCNvkMsAuT3EdYhZLpZ4qirXGZFk3d3",
  "key2": "37wmPK19ie8952bomkfZEzsKpbpEvgJ1CSdkH8YFmXyBFns4RpNRgRAvBnhm36LuSeVVa7bDfHyH9rdseqmygkUd",
  "key3": "HjztBt4ZMb1goDsMTiKxmz42952v22gfmcKqqTVhAmz6W24EebwuGvX4jiH43VzMZPnRrqbeg2RWsfqS15NAHTR",
  "key4": "2GfzgBC5otQPmUtqs5DGMHaVEQwAZknDQgyLXzyeWcm2zUm6m1Z8Bgikoa8mpDrjdU7wM2XcX9SVqEYcjSSkQZhj",
  "key5": "4CEvtijQfoDRZHfeoJwY1dh4brAcjXvPLvCXQtraGV7c3CBHSvbrZBpCHTmCFKVKhwAzRpxFFCu66Y3dmqRUhkBP",
  "key6": "2jajTJyLr2DknyueJ2h5JFZTCM5jEVTVrzocegsTtWFYKphutpWihLuwDC3tzSVa9reQ3dqgsm3rDjmU1sn3Empy",
  "key7": "3LnsJbD4oPiu2Wayf4QjhMW7PfL4rwpdyfq3Y8eu6jLnWt8fxq2egaGbw7tJHGFeQq3gvZhccyvkFtLVgjFZUAde",
  "key8": "64X9KzCzPkjbeQ7C4WypiK9bzT995rhzPX6Si35MUFmjaeHgGxXL24VZeejFjsf93rEDGs7jiBqPMT7R6HSMrVRW",
  "key9": "WnkkSQ9C4YQDL3ih947hM3burqhpAuXeHeqZkgu1qFHkbTQoFHqcL4FFLJRouK742ufknByZahTRrYp3WHQJYtM",
  "key10": "9DDEgYuCjifwwsU43Axmqa4PM13h4uYnWBefuN8DuBEybf3bHSu7XQ3mPa4xrwVoecFne2VWM2gZHHBkNqsWiay",
  "key11": "4d5QShogz3PXSLYpyAcap5ADM9TvSwnfJYahR6GJnXs3cFMWZ3gxawoNJr52pF5NGriAKQ4QVgYDkTpfvK2poEG2",
  "key12": "5gnkNGLA2phfQ8r3rgSBpxLVV7wbtVWWrPHCrVaimKUkMGtMBsBVfTyWqemgEW5gDk9k5WJMqUPhjFk7HAKrR4UK",
  "key13": "29KPEsVrfwicwmVBEi9T8Yomu6pzn6V1e8wULCt3dp2DMmnLmzm29CxkdNEFTyaEXkDbGamwtZG3aejH9vgBUttY",
  "key14": "5bMEcrjRKXqYNG7SAbJu9s9rk2QMfp6vcAx3rBbQUTnwRQME5DJKvMnUKXrUHw9FAe7Bt3FnFJrLRcHiV4jaF7MM",
  "key15": "5X4usxQisjfJZxYna4Sr9uAA7ZnYKyUZ31RXhJYEVFTCLbt3UHEAguKJZYUv7U6H5Knd1orRvBBPM9JuQnCjGDg",
  "key16": "T2yCkd5YkjsgWkvzNXMUjy4vvsc6c6BSKbg7FNVegrZ3kKw6MJreQGn1RxmbU1yF4TLdWWpbe2LVb6LBwvMq1tG",
  "key17": "29PfukDEA4X8z6HQTjub6G25wHk1zg9t4jzQvknaYcPgmiaWeHMYfZ2Q73ikDdrQSuTRRzEjT8JSeriWo4HLvjXV",
  "key18": "2UcJ2Eo17qSiqgcHQxcHqonLyCo7q1dVrpdxbHuTsZYok1CoM9hmEoDkxZaH1C2p63TFetjRQu2NkozDxY52pvbZ",
  "key19": "3EDn83EKU8kqX6py2ngsiQkfitMuQRAhvJiLCJHi5peVMei6a6UTkEZ5CQ6gyGsTPFD3ebxvuerCvJhWeJCaztHq",
  "key20": "232azpveVfQDvtjb2gFAs3SXJ7MsHYQzeUJBvAM4kG1Gmcw4Q2ofkZww6SSqDzXgLXTBZiBVqSd8CnBnn4R8muDt",
  "key21": "4MsxCBsNgdSPXp54NG5hrWFZyLjLsNBvMU3EiocTeWfekdDX7SerANYwdi1jzpReknNZc6QyEg8ZpJZwNikzVft5",
  "key22": "K7dDMLK7hQkC2PpS6h5NThLjypEtwx1iECPfhXVfFHe5zzeKy1jwuFFgLUxd2sxoeHmuD3D6vNE5dquSFVg6AMS",
  "key23": "35oPNDx7QNuUs5VQvMkEJ1GdQovvLnDEYUNpUbGrKu3hn4RKPD2fC4q7q2FCof4gGLPVgirzxQWvn12Y3vwjFywo",
  "key24": "5rHSzCTjVuWhQqAHGV473ynxpJoTapZ7fa8zebobo8Ct5sZ69PEinrWRmfYeAvQvumCubPLCAsb9p9cDEcASRop7",
  "key25": "5P48C7GFT3SpQk8TZNUhUdZusUVpS2dJ4xwnP7raBGnWa12rVYM99v6y1gvhGTBt9E4ATtTXjbzFHgDy2LyzFba",
  "key26": "4JL3CuAgwoKXnQQspcvnwewezTK9wajqPzLunBX8pdBUr8GCifbhGeFeeQndhXdnKnT3hZWibRE7KuEkMBtqztz1",
  "key27": "5kWn9ViegRSkpoTUfRqUAantmdwk7oJdBRPGa5X6EWTBZQv5B1A8Axx2jqjBTyoPxsYMd3RqfdTnethwjFjLwKUX",
  "key28": "CiG3muRKkt94RmTPkkyYQVRJCou2zG53RBw6y7Am3wsxAW5YadUobdD9WLdzKhqng3Xm4j4whi5hTXQR72fS2Wg",
  "key29": "sSWKKUFY4EdSNeSuiKg3FQ2GwKk8viKZt8Dp7RPP5xgNbd541Kyk1EhkiChh1qYR4qJCprJMiFHU7NiiwdZcJ3U",
  "key30": "22VtUiPmRsT4P5qwTXGSZpg9kqPmf7tCKVcntbQeqhM4y36FPRqeVx3VmxniFQuGuw2GPLhBYRMotEvkW3B9MkWL",
  "key31": "MgE5HZrcquX4ckT55NA3Z3y7QH7ozgoSQDW7WJr8NbHb8j3FK1UJj6hYwsWGV6nij1MwAgZJcvhBdZR6aTKzyyL",
  "key32": "5eHLqXXf53WtLfdiiuYe5RvtnhvJVbFQ1AWWT9ijbWKocwxe9UCfPZpGKrBo9rSk7SFYMd1c8wLhnR8h8MrUEMFh",
  "key33": "3SFsnK9bezQeQz6NEzyYaaqFh9vatBuzrHtKw7sd2NKTSngas2daJGUEUYwr27HYhNbZC758yQFmwwLMVojdYYNq",
  "key34": "3YknibG8FJ8C1fYMHJSjavZpmDKcAmY1isZjnedKnLBrWiRsGvdRzqtKJUfR2DZ2MpytftcTBDs2iF3YuzfTQqYX",
  "key35": "4vvxgz6w1jYt2cCMrd6pMuCaYApsAudWAiuiWKo8GiCCvWhTfdnbGyu76w1dgi6Rhe1pTci2Y5rzwtbwRSC9pxc",
  "key36": "mGEfVxDnPDpNN41e6h8Fkq1Tnshhds6hSgVdYkoxxUfiETnNVMHdFJnQUaaLzNya5Ugzt9NBWjM3tfbKrGAVWZc",
  "key37": "3YqWMUed2XPVNz6gKtPLfbd5sitTnM8KmoiJeMSP8sKxfchdnso4Fd4zPJQr51kEKZS6MB9ApdeUCV3zjXfPpapp",
  "key38": "2XChrtp7U3tcZYBqRciGrBp1A63JDta6957SQkU5YqUP4yBkzNW5pR4wkzVRVVTrWBW2QvuZNrre2bi9HUgBsqZ2",
  "key39": "4m4RGotcDtoGacVNzjKwQkY9K6VtXaaJBXBNQTziRLkF6CEbHs1NycUtwFBuuSXZq6Sot7dZQnCRQ7TqVWPHzCvN",
  "key40": "3fRji4SPaFrmyJ4ACxQQhUj2ZXx8P9x1W1AcpEaN5GMoFBKAQHrSRS3Lb6LXet1y7D3NLsw7swNX3RrfnQ7LiWwX",
  "key41": "3pBxQLSAGsCNfF4UPmk17vDHj5sVpTfag2zSw6Wc2CpqSjuwGFdx1UW9j3buz2pnaUXNGRVPKmS5ub47rs4Ux8jW",
  "key42": "4WJrhxoan3KXioEF5UeXNf7cZijxbv2isuRkRhDx6AJLnc1rmxKry22LcHXGqKDNRLAxkuSTUMjGR7Wc9StCdjYD",
  "key43": "4Uyj8DV7H9hjAyotk5krT8eMp6ZRPNNd5WUL124J6DKgMoc8YAS7KV1hgvvGK41QTAy2yYhmVC3rQ6uatdJAvp2K",
  "key44": "2KRJ91zrveuFKZTTXAv12zus7fDoQ9g5T336yECfwwHsfSfSnFsKpzgFuV8C1sbgnDXStRCYTjePRBoD3LKMmDHG",
  "key45": "2BHFkQSqntFdwhibcJqkSBAauMyUXCcxy51xCMp5odvm6pvzDBc77s6kbP2ZSi9LCzkYB1ea32jKv1VpvN4uFQuU",
  "key46": "5L8mD31XsY68Qjpur4rVUF2rSouspsxZiizBMuobo1kgoyqftCkqWudfQ3EkKAjg9bML5twfdd16j8RmmbB7Vtif",
  "key47": "2Y4yQuNoJ7btCZ48VezcD6f9AteQ1pg8EdUtvfE4qYctpv8o19PSLZ4h89MRbWfqyZJwE6EvVaqCD1RH517MHBi",
  "key48": "3Gr6zzBFGCd2Gd8NDj65VfWBiTeGnHjKTsVWDELoMt38N4FfzGjhtkg8nEtZt4GpC4GiiisyG9xrFXR9TJR36sYN"
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
