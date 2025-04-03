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
    "5JozZMFiratqxoio4DbGKvQo5fSLHKCQg6gtgbaXn136XoyythJa7w4hoEQGsQKo8V4Xx5fRbxqv9pBDwdgGgMAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RzeWWDvvKTajA4MCHSc5zV2JEzWtgjny16b44ySAgL8fLoHjW2gMzot6BUGhtpRZMmKmEJhpfh2mSeRjrrYsgHk",
  "key1": "3ZecHLT22PRQYNSBzuC5Abv3ZWwBon9Z3PmwSDAxCHBdiA5SU5Y6WzvrBcoM9WXNszpCwQyE3kYrZoS7jnCTv4Vg",
  "key2": "4MkyKV6EbT38rwW61vqEm3Pjz77vukokPqohvTKR6Zbyx7kBwYpUYv5gxS6AmCvE4N6535EW8BjAv1ivsrMn4oJN",
  "key3": "34TAU1Kp4ZUPxQ5GuAZBHMiycsRyid8z143u6DkAo9Vdavxg4cpzDbdmkenMj81xkUrENTSaGuwuEkT9CvPumLyj",
  "key4": "4JVNWXpMGppeznB9K2RZBvDqvCiEsNy4XwSAoi9WYM2xc1EBEZD5DYh2Zgd2WQW5tyBsV5gA5igHwQAuppADes6R",
  "key5": "jQpDHMK7jRdSZDKyYDrZZ16PyYEcFzzEJ46KzYPDHDJ4dHJrEZk82tF8ooWE3ruYMqctLeBRq4do1dWVFRQb4Nk",
  "key6": "226PiXQhjegFQiztTzhbgPA94WBu4ZBFmufzxcDbxg2c5RW63fQEwEzPNVQYuCRAewFZq2jTYZh9ZeZNcZqN1QyF",
  "key7": "3oMoiBXHSEJG3cqxaevP3irCCJkuVDUjU7qNt5PAigaGuhjDbVigZNJruLBvG16CKtxs8BJXRwEyDs6EGpYgJVJr",
  "key8": "2QZ85AodbXTaBFexMaRFvGyFuzbapdswqmxQnaAvGgEmFmQLsqZvemD9aC88kRYtakjRErXBjdEuLghKx8R3Y6tf",
  "key9": "2o44pPaELedxzX8fPTp3RegMksTHX7BLr43oUMzaGaoQP4cBtdLbDzgAbDx2XRzaBk5uNnvT1DhqxhU6a3HZG2UP",
  "key10": "2BLke6jqsoVk6rTvWBGjUP8FGDRs9eEJNBgmEQfP8TcKnMVmdFm1szNqMhsRiPng6Tx1SoWfWoU9W8zXjZFvwkmK",
  "key11": "3X4tpHY7i99GJqA3K7k3XWCWzojb7DSAJKSFumBLg7U9ioBKAUJGHNVeAtLQjZWHAFqjbtqbqREFXaTiow8xL8nd",
  "key12": "5mGxU77g5BZVB3xTFASY2ofegmjgDLSucYLHVUbuExyFQPfsbwavpJB87nAbXVLDaaSjzwZKnTKxUQg4V8VCFQD7",
  "key13": "24F7q8LSddSRMtPk9gQA1NDtRNW3HYiBxfxP7ZhyqebMS9VP6rTa224bQKzj2hSHNv8zbsxSktgyG1n89ZNG9kW3",
  "key14": "63EW2xWLLghRFmpQzfQV8EBGBF7Vw9qGyhmRa2wGAG8om1rhoeLQSp7auvyeHcGe4LtGikpLtZ6tF1owfwXdzCE5",
  "key15": "iwvfX5EgwmiuhTd4V1LPZGUTEuw5aQqywXTSppr2AZrybyum6jb7oz3csmNb2hGE3aKv8SmJsjwKryKAw5kYFLY",
  "key16": "4x5tbS8kJxhjnJY4yGmJVXTQkasgxzBn77hSC3SnGiEAWStyjcGiymYTNZJiYywG4E9NuyXqtkHE34ma5CtZeLNY",
  "key17": "mzJQ2UdHLEen71yhX9EK8ADmWBvtuJDhmxiuijZGfsh3JRcuRNcaASntWdUX5GaBDwNWZVQXWMewq4URjKew4cn",
  "key18": "2ykFsCmbQ1kXK7VCRVWLKqFaHNoCSu2HiAUbHVpc8eFZgi9yFcQNo2fQcHBZJHHLh3miELWyxzXRf3d9LTCczD5K",
  "key19": "kLGtbCDWFVngadbQDWUcbQ7SvPNcomk7fjxqAcBma7N9StiL5gzhnQKFTDhDwRHc6o6PNZYJtU1TPfA5GRyS2D5",
  "key20": "5gtZviMW5SH1gmpPWSgCjNcQWDdpPEsR8svg2hiwuAo9GjpcE6V1U8mpLrdCZkphN5rksnMAbPj6VFgxSnwVXSd3",
  "key21": "4Tm6dDwzsL2ckJEA3A8kmAmnK3xguikkMJFqmPkVQHPacgR5TVTBMmVHXzxqYkHjimLoXkHxL5QyXJSGTgsdCr6q",
  "key22": "3qQituJSqyfwjS2JTmUE2pZ93xDaHeGAMpj6k8eYMGUQryh8PQrGXBoVaswQKsjrrnAVDteZzT9TkVEKyGzBDd8j",
  "key23": "5XjZKa5VjSai5YzdhR86qucw7wKAZqaS5xd6g9P2dWQMLVcZTqEoY4bu41mXnNjwDY1zCUAZr6a8zFpCGfwZHibF",
  "key24": "2Mj1v2ui5H9HgwnsBmVVGA8yWiDXeyCdqNBNryDYtZWCfJKLMPMfwbWedszrzjzFWadPRG7qY1SEyhBvVXsWg2nP",
  "key25": "3oy5BJzdTgvcNwmjecwyUQTJRVkY7opHh352nvdRcLcYkdw2GKaweD9vrK7TuQBioSL43Nz4uvxFPADayVzDDzei",
  "key26": "3cV99P87Mhf59VFUspedTwtxCZBvJhNjxvm4SM6xj7L45CtaHv4GJpASFMeEmYtxrB2fXfREMFxLwwbSxWRDGwv9",
  "key27": "3yYJp5CyGsgcxZqSpXM3H3KBvXsrMV6F34JFwQjbRwzxTKjDUbJeXCGYGDM4yt9CF4pGeTXQSH35p5jsnQdNSeYY",
  "key28": "54CM44NFCvrgZzkXNUaFk7MKBJCUFQfUk4Ls8ykYXSJX1Fptos7vM6EDbkZAnhtUzDyBYnR92XSuBvbhvu1EV966",
  "key29": "2NB586m55ebwuTdQPhCoPXs5xgd7tPQB2CtkTs6tFcNjYvn3qV4RGSQU5V9z2enaNTsbWazuSGMkoYDK3JQ9vMYN",
  "key30": "5PFJ86A3DBuwN5N9PBbLzR1DD1km6EMYib1aEqxi7Gk2kcyyLnTspZhQXtydymDePvtUVwgtWeog3NPJp7oTvNpw",
  "key31": "3RPXEKBW6eyczfwRxqMyrVsquAHmZWS4NackvbQGRGaws5TW9nyJxYLa5zWs7A7evwNLaSBpj17sfyN1wCM3agCg",
  "key32": "5DZzwRpCjxtK4SJdmyX13CMUJVDUdj2eD6X5ty3W4vZP2ueXX7thLV6NCUGmcokzWsghjsSxGiwgTcwsRkDrGJeF",
  "key33": "5vjNtimmL9prT1LivwiCYNRgtSbXdfDbJgJ2uLXf9xKz4aqADWbJJ3wUeLXMjCSHafVcVo4urc4pGwhSgTDXMUX2",
  "key34": "3aB1BRCTBVb5tmEGJs2mqGVP8oyDeV2wLUtyCUgisgiD3wcPm4XEiz4aNYnZutGo9iK7CjcwDCogXQUPunAKK2Z5",
  "key35": "gQao6cYhUtBfEYhW5mfGmZzq6cEjzRZXaBS8DhPAfqBtYcEZvQu98hRS8FxSD8a3UD6EM7J2yve7mzHSX3NXuFt",
  "key36": "5Q9NcZv5i9Ufy4wjcMkHRtnrpxTcaGpPUkbMBGBRQDZHNseKwUAXYYUgZgTKG2g2njEHe6MxaGxYFqbzeW5JsS8h",
  "key37": "4FKGf2KXhmNqP55pPJxuXHbvYUwUF9yTgLY61LnbXagGhindxk5icC57QBWEbMoTghgRiGXRWcipTf3fsA42BZCz",
  "key38": "5kFUgUhqZKHNgLfD5ATr9RWVydw3oNrRNMLC6Q87rXKGu4nGZwz4iBfBykC6nwc7XwNT16Si1mkG3gaCwbkLQTtt",
  "key39": "imzDD7u6YFuT819GbFMSpEYYRVowDCvYjMKN2FEjmqtnS6WjQtSbbTVUP6nDKuDsEFYBbRUgCzeE1c1YXLKMVQY",
  "key40": "42NhngwonKEV4c9neqRFrCC5g3mhkQKZDBdzBhR5nDjHz6eaSc1w9Lb4ootE6gXmnFWiC1mTMU8sLnUTtLpDq7cX",
  "key41": "5vaa3CHps4671Aq9xPWqvYKbQU5hjt4Bta9mLufA5cx5dgEFJEqiUBmFCMGYomCYwLQxduteht21qNz4J7QBat8r",
  "key42": "TD28M7scqD7bqhEinKzank5FcvJdRbNBUujBtHn9JmMm5k3K8so6ifjCMUJ2YDvAThemMZ8KMTHyxA8fzeSySuq",
  "key43": "2vDGWrQVg2US4SRm2qiJDyrQ6ZWjG6fwVNjNQYsevmd7RpBnXzMh4dfofgAs9R28sLU3SrRP2WtqNrocx6CxCQXy",
  "key44": "2Cd9yY3arEtaZk6AADxyg9AWuDoc8iU7FnSAVfjDzsv4m9M1N6xGigZM1UWQoYcqiR6u9yb4yxbppJ28Bqfkc9Js",
  "key45": "5XVRMY3d5cGAhkRxaMMszB9VzNZxANhZY66D7fVQR6A8bt5L9znh1wKH85MBfoF5182G84hDHtEJt6TZMpX79Ecq",
  "key46": "22jmeX8ULeaQCSdHh5pkHxDvGCGmr26ayiy523yZuNQaVVxB3ZjkxaaAW9YD3xK4To4wwT2sFxtfpxpwDR45FjUx",
  "key47": "zjnqgmB1Nbr9CmiztZ8MEqusRMEQD3rxBagkWzEBNkuMYpXU5SQDzFHY8z8ZiCkkRgVJuvToTMUASbMEPmtNRrj",
  "key48": "31nDsU2ECAemMBGUHuGdDNMqrJMfhC95FFx3uVFiUsvyXzVi82wRiEYSFsBaXEoxRr2hJ4a4StPXryF4E8ArLEXF",
  "key49": "rbj8czyguFKmQKUmTZXHWBrGk7rw8ZPKFyzqDKAg9EjDifZazjAa2VjdDNq3UPiLGcRxUQkXRZmu3asUGPZ4oGX"
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
