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
    "5PNHzQMihdz2YQHQiKQ9CKBiyf4GfX8CSY3uuhk18QRQEkvU8aTSbRs1Jkz8cydVdZEQqs1h3VJyRP8d2CvjP4Be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46cKMCoeDRUkxS63tSNcWscqYURAVimSR49SgSTv8vef77jD4XXDyqL9ZXKh77PLGCDJshL9cvdqD94vkzzKHhi8",
  "key1": "2tzEvdNw3qLsADDNCpNvHMRtNtjKTSrN8c4PNJ87otPZ6PaBsV4jRED6cCo8hiX4ggn6v9SVoFtZ2bXsQgEKWZg7",
  "key2": "5ZP4fXv5y7Dg2Q6ddRHbCt2b89xPoMHDedh7J47vWdXYvYGN9WkRv4ww96MrSrPKTatdGMjvg8yN5DAhYdq1YZq3",
  "key3": "62NudMDvZ9qqmJRHAdEctCbWYwno3Lbvbk2kP696kTzGJbXDvg52hcKhUtLVWgT2LCKswYSinJVvhg7PWHKM9NZy",
  "key4": "55A2wRyjCYHBBRs5RJoekXd8fVn3XJTx1cLUPkjNk2iT4ikF7CPEyniQnCuZyqKTTQdthHpfCYjgCXzUbQj4i7sN",
  "key5": "tJfXcbycao3VRgdtBS468woB7dox5sDCUTHTkc1Abttp37MebQn5vUrxqg1UZ7tw9bfc5SJmqeVvpLogQhqXzUR",
  "key6": "3PmZCPVKGyQXBY5kx5FxhjVT7Mg7TcWqgUwCvca9q4H93gb2gbVitdGa25GLeC1fxp3yKShYf5U9cTjspTcHbuRz",
  "key7": "5Ef1You7Nt31CUNiCe6EReQA2G9BCxho2RZhiDzEuBRpta1tw1WT84Tk3cxkWdqZSXxxLaGJQiyRZTaxjtQbAskS",
  "key8": "31jtJxrgP4jxtzdGER9vqmxdDVAVQpG4Lkf27Gc5mtfhJ5s7QbwVAcxjkDfEZKUPDtAxLgpU7C38vsbokufwzuVD",
  "key9": "3SBSF91Zfw5XEwAUh26DVjWqfRqZ1CkfABLKkLS2MFTjZUkahnT4nNhMD3ofpabnkmrhYieYqLvoZW2wwFfUBfne",
  "key10": "4wVjhNYKxa84YdXsSeF3d8BtSMRQcWjDaC4nMqLmBQg5sMKgtPfrPxqMUXrneemYsDgQY8yd2VV9zVVoqyjaVG5u",
  "key11": "3FxBZBeYxUXTWepmrbFPj8jbaxJSbkCrJGg5uC9FJdtJdGwC5X1W1HvxwtWBK2pNV46ijMkAq1bHBD8y2MGbzPLa",
  "key12": "5ZLcbacAQwJfjLfXD9MqHNFvg2fjbdaxPH1JNrxyKgiR3H6YySRT3EA694s5wfUT9scwvQeaNjpvh2ScWPYX8o1T",
  "key13": "5KxCrLPRX4cBBj113tUwEWpKxdgB4Y6J48uWKb9g4Jgxx7Ub8yAXja1fnAjqBg3jPk2dtxPRQCLBDRA1E4P3xnyk",
  "key14": "5nda1Zw7CAmV6Bj4S42Yd5pXC6bxZs4wMw8aFAGZKxvYCFJF9sNLu7sGCgHMYC33Ps7eFXEx7Gf2feX1V5ri9i42",
  "key15": "2E9S7AJpMrPcsdwswRFVNbA5Q6CbPiuNWTU2Ka8KoU8bPQMpcpkRrAeVkid7dpfFLetei3dTysphPnDzdU6GspFy",
  "key16": "2AxqwEpLXQ9f1rb3WMt3UQiyrNPB5vjwTb9RZpsMNnseTK8JEASEPGHrKef1hTaYobLbqpNsNXnkrowFMe55P9Rq",
  "key17": "3mWwisGhSZR9boc2sxQBEXQepng1zgr7BHSLZ1P6p5bsNKbF7NGc5tMZ9EaRwe3NiwycX7MUHZGm6cTDFuQtA3iz",
  "key18": "2de7zQ1f6AXLjzXLEb1iryDCJ4woKZeDQZVdG22xLbQzFhnjohEZdJQGuLNkrQngkqx1uh5S38V5EfA4g4mTMdHW",
  "key19": "4Gxc9A6jHoyuxTbWrV6oYGQdJhB42EZVwRwXhQGFYD4afUvNkkBD5YwvW8SaFgDw4KKmDd4CVFs8JfmCmdT1bY5R",
  "key20": "3N9BvjGpQq6CwopUte39iTzMjaUzAPaRZp1GnJzt2YDfktUMB2AfuRqdWiBbRas4s2mjsScYYCkWNhuTfX91TbNh",
  "key21": "4v9GyNRRm46T8m6gK8c7r7dAgxNNZGj7Q5crXhdi7w24TqYPk3tnotiy3RPuKnTsfqKqVBGwER9k5Pqt437FG6Jb",
  "key22": "5QPvh7ZGBtuUaiRtShdgwiWLd44X6Gtg1VaokCQbcvrBUc7w8ebu8hH8yNDmfvEY7yScU546K3f8Y3Z5M3Znfvq8",
  "key23": "65RUr94RAY456kws778V941Jpp7qJZeMzdpdxPThouY8Sb8o75QepCwB8aj2hvmwvjWfCD2A9nyqBhS8VmDzUJTi",
  "key24": "5yx1CGmTv9m3YBW7KbdtRqXsuT3C69ZZwtYHug8hnqbMBrUtcFZ1HbGyQXHsXYsPG6XFDNohLz5b6C7WZoNJKbXg",
  "key25": "3koBf6h51gfLFBKggpteaEz9tPVFTkqxGScdA2zUqqmeH51azPaUw8cuwQXtLF52aV3BvhqCUWJYLjFmrbHYHT7R",
  "key26": "4Hnure3NCu7LLwJDrTGBncXS79PiT3hib7TyUECy6B9hjFSeYUs96JcHXi74fiz69Z89CU89h2iWgH4vhjwVAtkH",
  "key27": "2PQwC4tjwqmnX7kPPyt7iQBXWtAZCJgh9uSw9vFgDFxjs2UA2jFMVBh62CSNitCCtbtnma6G4iCnDmfTts7i8zJH",
  "key28": "4JMmDBXA5n6nzFA8cHUHWwsJhq1UrN7arck6iSLHaecREQqbJdfeGUJ3aGPQxavLH52b9yfh4BBWr1XHnrJ5C8B1",
  "key29": "gZZtnSFdvFZSVmvt2CSEPkgiAg5MEGXisWZtTywSTXEJNZpMLovCT2WF7uvY9CWcrBYKM5wwTVWTpVPCF5n6rTH",
  "key30": "5g13HD25fb8c6fLxjT3oqYWZqkrvHw3hccNnYMiRz6eGXnv5zB36KnDj9fgknexHySX7N9JuT6v9Jny8byzNkPVJ",
  "key31": "5P8AGmKMRNj5i7Rfq48LoaYSDT363Qe3oJk9DzCfZHRK4rS5mL72fvw1npbDD899aQEbfdwqQkLu2nWiohScVCSX",
  "key32": "PnWHbXccKRXMFh6DXLSbaya6bBhUamD12xAXjntSdA69SWChS2EKP4UjDLfQehWLKa7indCqzrfH7BTKcbRkJUZ",
  "key33": "3uj6QWY8NzAmNqaMPs2w5Jn6MvyfDviQqe3btUk64wyw5eyMfi4XNED5sr1rHANuinTYddnWJGV1VwMgs6v83ZY8",
  "key34": "5ejB6w9XBa2ZbyjZAz92svP1u4P2ueQ4y93AsNmv7HtvnpFPAvbdaSfb5PgmrBZUNiFStVEd59QrjHR3VSgo3Hxp",
  "key35": "4kiX5hBeUm5FLJoxzDyrkXYX4KRuMDirQmmxAAMJvZ5h4YmkckzzXBjXm4on4xRFeN2KNuwHBN9mAg9QA9YpGNND",
  "key36": "2N2XSSfVxeX95PrKHzj3UAhqjja6LDniJapJh8fAfMPocHChYF3mrJAf8raeNg6zvw7e2VyKo8yaNUevfTSzKkYe",
  "key37": "2wD8XM5WkoMdR9SNSRtFEBQZ5VG4nNGz3JjGxR2kDGTYbKBK8zpmZZorf3nHhGP71R37U62L45c5pGyiPq6Q7wvh",
  "key38": "2SUWbCBYy57bVkUzojA1yH6JJ3iy4gPigaYLce7rcFbLogMjiM74pFRpza5pTYBa9wDZsbwXYRRoHSEuPKELkeqB",
  "key39": "3hHY6GHvRcvyR9F9xwE9bDLHj2iY8RHMLHZ8oq4kqcR5oY9g5BqmY5xSxSeDaFR6ZFRLsP7oqCdy9U2R7GLaphRZ",
  "key40": "4uD4GnbYSBA8wh43MBdk8xsQU4euN2etdicxoJfsdcFPLDmnmny3iGgCD1386WgZUJUKdst1iFsdsjQnsfxxZkX9"
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
