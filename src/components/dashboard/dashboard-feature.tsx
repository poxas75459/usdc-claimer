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
    "5w6epCxpgnWtHwrxMLfjB3qsETkgXFEqUv99UcJyKi8dga1q2q4LwyZxhBjxQWMuYnwdjBWkoDzHJi7XbaPhBwyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kh8BDs5renZrr88vjj1hmCc32t1DVMCqyERFe5dX8FDNXHEWfsjkFHc6tP8tfqpTN6GFFkUtp2BjD77qSWRCZw4",
  "key1": "4myx4Mja1uPpqmaj9SEi38qapsVcmM9nG4eSd2an36ebd7ezxxZdD8yxxeTrsKTySSDDWWg788GMAPEQMfRSgky2",
  "key2": "3XHu4x6R386LSYrCBLw7Ua2BpBhMFMo5rTxFpHtZ1nqYRUoSnrZQbnphDjwUTHx4ddfTWT7mrNFkbQDcs891my67",
  "key3": "YznSakvgv56NRGdLvwcGhkBZEPUu4ifd5CzsfDyJLNK7dfEw9XN58izTx9Hqi8HpZfREQiiTHGEEEbTecbTco8U",
  "key4": "5hBFNdGULA8yF7n2CiqCc6KcuUpqPX6uG38Q5MuHmNzycq9HcVVey7fMPPzNQ8VugrTjLZ7LwcpovjizqXaXbTuG",
  "key5": "3RJP8SwzcSz2s2fd1fCv87ZMzC8as4sKCyZX4WXRBacGDZrfU16BD7AShMf1bsqkNntUQQJ8sLEzCdvGhzUbbLbH",
  "key6": "Je3KDVB4bKBdnQvxSQeQq7UVrWVbwWS8t1Kbdny37YkfLMBJFoEees7XgaGK7jDu3zEqrWRPs8fBb5T3CY9fdtw",
  "key7": "3EjFaUboAn99N2p2znb6DcFrJH7ZbscTjnQv4ziAM8X7NxYw4W7bhVtxBwyichNth6GSt1UgoGmDjyvk2KR9preo",
  "key8": "5trV7LwEtnWrh48ZikSf6PN13u3THpqZNgGyWAZB5R6sdHT6RNVZucZYyPqFgoZsxYgVt8DostpDBVKAafPFbJXw",
  "key9": "3RL2njRrWWwcgUEarJUcVjDWGAwSRjuw9ZJPKGUGqqK4CVaxX4xZTaUHvhTJWByUHKz9UfJwyMKC1LeHfHiCdXqW",
  "key10": "XtmwNtfgB6hvJ2WgXrCDxgzwhsZz7TZ6KNng7E8acnwvqbzvd5JJbe6C9rtjfKgjMLGPNiM8WkbtishMctsExQ2",
  "key11": "2dyKxa3Jp3eP1V275Wyh9orWBSiCm56F3J54e5838UAxyBeZcBnUCMfMr5Dhh9cDEZhqsXvTq66VWuUjf3FbCkFR",
  "key12": "2vKEKgrK9Pt7cE1VTZMAzXiJYjdjri1d1fyk6qUr3nFP58jzojJEhg1UcLeiRnuR4kQmQUet7EVqA3QZWXvH3Cue",
  "key13": "BSkim2DpYCBbH5AKrAx1mBAqNEM7DVB5e354qrKGdTeiyJrnGJNYwyPzYqCPM1EjckdkmqjVcygGFeBaXij8Mnq",
  "key14": "3ndm5AvirZjbe77ZQs4sc6PZtpCshZSGoWVrboH1qutk6KSLAcbi7peYRPVPuJinQNWNmExjTmNPm2Z3fB2pKWUL",
  "key15": "1y61N4A7oZxjnp7Y3REhacbVnb7DjsMPmg8BfQnjTWUU33wbHE4kxwznkQAk71g2Kv6HakTcjjMn6TFM42ZHRxd",
  "key16": "Mjw3iiznJQ8MdiNG73ZESLqAYMf4Bogd5HdpLAPQXwhN36cUtZpgDNSjLceTh2iQSM8PqLHsy1NRu4UgRimbEzU",
  "key17": "5p86kgrCmqU7qKgwMD6XzPkxqEeAMWWHfrjUnFZvXSK4E4zYzybCpUxtYBj77FvQVAvSFeipVzkKiNXyi6nTsqyG",
  "key18": "3Pucj9eWfHyjXsK8CXTSyxdfdATyTCCDWviAGQ79SPiJAMZSvLC6bBgHm6RU9ak6oV3qS3wCcs7ykb9aqJaSQwNE",
  "key19": "5Bf6HV14598aR9HTZ1mKEarZFaxDVpgdHiSyhJzmXMzspCUt62zQjx9K34zHBtMUUh7vAd5V3CijHL4ggRrcrGQi",
  "key20": "n433FX4cpXjxtj4qQrWWhxz1y6As1HxCXmFnaTdM4sZ6CoyJbRT1ftjU5o6Ehk6641a9nkafdqqopxdCa1uerxz",
  "key21": "4uUHkHsq2m4JVF6vnx87f6f2W4A7EEmE3b97sEYQ31FAmBQS3L4toTBDsQt54MU5GNxCuicjEcABJa6Dn5uznWfk",
  "key22": "3MfHNZ7GTRg1R9ntUfz5WVMQ6wE15137AszuZj85rEYcDEUtkjUPrdCybqByAMddeRxu1XtUiuLookPKDQjHZwtw",
  "key23": "2FzPaTQ2hyGyhqufRx5huYQpfWGnrKKoQkCQ9YVfnqdUvrjmpKt1t5e8yiZXBjMFj1riunCHJeZvE3eUjqjTYqcA",
  "key24": "525q5jJWG8ggZLR2juDWEG8JToyHx8Zs5BwouNZ5U2o2BHZe8GcyxeM535jLk3auBQjg9hdjGawwb9FN1DpFsigu",
  "key25": "3J6FomyxK13gtSce1upmzuuqyxdmn6v6rQkyV1drQr7G1XmVAorDufcAESBAj236awqu99qG2BG4Rxzo4sZhMpCf",
  "key26": "4TRoRiGVCJ1ewrS1zfg2vXTTMkHH4A6usAcB6cyiCMf3wUEkzk1fAJ8M46KXKZYyzvk1hFPjbTcncp1mbmQ6cnRe",
  "key27": "h1jpRrg16JHbuzELBaahToZUdKdDx7hfBEz3L3QQcyYjneuFnUU1KWFcScQ5733bH7rwnjkKeaWkXXVwHeuQmPE",
  "key28": "5SURQuUD5wUuD97Ep8vq7nbbZoUrRRTK9CAC9QrvvW78FA18Tu4aWnvUKoU8LVxzmmbdURFs9HsCsAGR5QDnoauM"
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
