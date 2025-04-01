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
    "2qvjnbKmmURMBf8U1owA6Ek4LzDA2YpMHj6hPXR6JP4vhZpYTCVdun3mMieUdH88TL3stdGVknkSfZCbk8fUnsDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tvpQLyebB8XC3LCp1nCcneKL4veuvSTMRYLbjfwei7PSLD33A7Fo2J4N5Aj3DyWpYLeWfoaVSpXQJqJjtLKMtfd",
  "key1": "2o5PznMseuzzqGrZRFkatE55f63nXSfNkuoVEdoeVeu76C6HJryToRbyRA6nNeiuNwFoLwTUjH7YBujYSKwJde1f",
  "key2": "3a436z9XbpYVRpjKXYtw2RY3Hk2rH68LPX1BS5xsVY6SyFXhp3hFdxhYzXKs9gPboh5YsfZPLxAvhuJdSVSPXV5c",
  "key3": "3KzL7HyMJYKV6nuswMDS6v9m9VXHMftkfVN1JgW1bADKKgvs1RSfeeCLXk9TKvYXBw6AYqDabfAEsMBXoDxFWnuF",
  "key4": "283QMsv5N2gLPJZ7knbUdtJmPcKG4BZjH1RPzGt3T7FWNpnTLSKjv48g168s78vna7pu8jqkPh7Rtpmj2c2Xywas",
  "key5": "2WwkQZxeTTJmBsxUGC5JVP8R6xKSoUHGQ9deWvKVXQWUmLisZFhsuTUeN25C3BzvdAX97MB5ro82PUiFWHeaHkdR",
  "key6": "2V22xpWoyQ8HX4pSXA4NBGh2o4GYDDDf7hd5JAyXiTx2iiiZRsojZvLHejnwY47k2pxW5x9DvbMdMuyKsGar2Ted",
  "key7": "5UbEnYfFXaDwK75tyRs5q2PCASkYw2Q53WP2xEscTKojzD63bSB7sm2oeqnbkb3xKTJ1WbYKJ7Z3V3ifi3R62AdC",
  "key8": "46uKabnTnjmAhbc3rGz7wA5JwAa37VV2Vp35nAfw5N8RRJkf5cGR3HvWAYLLLCY7VQfBGG64CmML4iL93YSni7pS",
  "key9": "uxpixSNn2scNbwuaaDYFHMGQ5Yc9hHP3k8ijoYLhQaJbBzCWDzHwQBrzzrTV26Hw51q91is5Zxm39UEzK9SfXX7",
  "key10": "5kAfBsN58AtLjJoGoE1sJsjRDDBBeiC4gvLjHCywjVQN1sN3XFp7DrRJmJbiUiToRbgWw4uYkH7u5k7AZ41Vt7Dk",
  "key11": "2wNYTx2GBSijp68FfKYDMys9dmsvP4zGC4SGnaT5UkwQ6azB3txNZ6tHvD89bA4fbZRZXHg5mDTtvtPFSPkiyWJi",
  "key12": "EMnt1MFA6fyRAGt17c4GEajyW2fJctx9c4EArAX2n31g9pLLtTgxabasGbrYEp3XamJDTuQJmosNBBkFjsTzxJu",
  "key13": "58qufHnW6cszXYnZkhQPXFz8aDRdS6AdxP7TqDwWPYgatgRYMg1x8dYwKYGTD4FeF4uPFFMmZsnUfGyezNWhgB8S",
  "key14": "4ZUV1umMXNfFMwN1wTqUq96iApr958GnAwE9xrSPFNSr6AzdUEpv5xPBy4zu2BPRu2DzDLnWM6beEGXkZqpmBSNV",
  "key15": "HHcj5mU4WrQXbuE9cghPZQ321pVZDFYs2AGLgMPEcyDzJgRFdkMsSLosM87SzHsjBDcGubnLTaLBp4xTAD6MuLX",
  "key16": "3tmkBA2M5uLojdMpvJW1NJZH4YQBQsPf3Dw4qMkN3SFEkj99rkfR3NdreH5HEasHQjuuhSJ3vupUtnu6gM5PGgKb",
  "key17": "wwKne7dhLwQtAHxRGLbqcJVQEBUjyvHZxbu7sf1f4KubYxMNxr6zwYbmkJjkAdrmf8DaEjYPRJCH1bfqjFXS3eB",
  "key18": "4g8Ptszun6jgqrJWSQCx5dYC7zA674vPZK6FTKkQ1Dyq9v9voQEAZiCy58GvncQCaQotuk1Cz655SsV3Tx8UKKw1",
  "key19": "6GQ6YXVBPt4sCkBeBXyu7HCyfgvZj5571BLvyqLFnUHcTR5nDgiy2i6qwG1CiR3vfj24m1GseCTV1ER6K11yZFQ",
  "key20": "3Z148UHGX16DsijvA8bUufx64xrsDDuEFM39v23izS8sSt989rHhdUZjWah2UT7LKmn9eEUNaA9gKALDDXR8LcRb",
  "key21": "3g17AJQGyREMcUo9jesuJrgbgDSpSweenxKv7sMmsBx4MCei5oZsQCjaZWeUx1XviyGqaAQrVNo1nxF1ywiucSPM",
  "key22": "4Lda3H8NYW2PTLfWs1Azy8i9KR1SkvY1sTq74DbgRKAxyY2tr2GfZNbUzmYCZXN1vCELFWWBHJzraJHZx7xWXfok",
  "key23": "2h7BmWWm51uHhJULBrpg3CQVoPoUBroT9AHZmAZ73yVkE9UhCEsyX6oWBsavY9cGj9n2fPYqi9y2CoSsoFs6Ackp",
  "key24": "5CWn3Nj4a2ryE65kPDDEx8k3iYjmpPSGjxjcFkaxgboYjhLjsNcLtdLhNVfs3TtKVpAZ7V8QieKXXVfW586BHEmQ",
  "key25": "3hMRRLtgyTqjAiP6KjsTJw5pdkGByJhcQ8tELdrBf2vUWhY97nApbkfLRcVB9S4DDYzraAExU722iZUHSLV5M5ad",
  "key26": "5LNGcTT3rCUKDoSjiZPCAachaqnoP22NRBd3Ws9zxA2CBwAomnnvHmMNwXrkHP7Hv9omuSXVkMzgxsBwtMpgSvQJ",
  "key27": "2NMaReJGGymEyYfA9XLe5uthaJBbRrZT4tujGiPUX5QxfUDDcm8pxex7zfpKFxYFgYVy6WsYzceXpeQRkfUmKaZ2",
  "key28": "5nzzp73HXwRVWMjVaoAuQVCoWog6yTsnRKAf54HuSccB8UT5W6yNN37yXQ7SpV9ZfpdaWLEWJLP3NYErFcLEGVVd",
  "key29": "2Rj8j99v3zywGbWRnDhKzXbBDJVuJLcj6sZ3DAd9nkPaynb7FCEwFrpkgdH1fBnVnRczoGqq3eLB5YFztM3akGW",
  "key30": "mqZimeb4YBo2aUpRx78oNPqanvstHkyaLfrxmzhF6waKHhqqv9kcTDWFyaXkuBmmTPAHk7C2FTBxkEi2ei7WZxW",
  "key31": "5MyGbzVchR27Snri4joDeZX2ntF2okxeoXP8x5RNtTG2RPKrzxKHCq2QyNjerWE2kCjUCU521gzYNk1ahhgZi62b",
  "key32": "4FKLWSdBQdzBQCmeWUWSUJokBZAhPv85GDhpTQnNZnLTLXqKeNJftBAcY2LvCuw6ZTUYB4zhUBLUvvKo39V14zjh",
  "key33": "3JmeJEtqpHwXGjLSUr62oYiz2z6Xr1whWabRttLu323Zbtjn7WrU9dLQQPea1RBwkAJ9exed7wmScrfAsz2yxfSc",
  "key34": "4pCaXys2hUZXVh2dbNBaCSN4vbxKQyGvHbcazUF2dcaaSG8w869yxCZo2LjSQPeus2qMh3Yc9WvFgYcE9oEXRYeX",
  "key35": "3NG1dQWAAiN4DDGes25mJ6CrTkXLx2iohtwh3ntMpFS2rqj1NdQqFqQj8NPBhByBBQKjSckmGE7mNxqDMdq3xiLV",
  "key36": "3VuMacx3h68gtoNpge5gpignhfaQ9zJY2XYGKm1XonHTPq3LPxgczojFDQqUYDiGADe3Gm9Mhm5uWBf8Ew7L5nUM",
  "key37": "2PL2jZWaFfb5bQNwkMw4ShfQfbG1Pd5d8dPBe3p9Aft23Tk4SBtFoQCyo1bmQ8xeAjTb7pwkjX8ypKYE8zf58rw1",
  "key38": "TG295TLnKU4F5J4w25D4kB3kq8rvpwPab3aB234JHHtvMqiWjouRRsVxqW38AdZBt8yxstbhvibtx8UHHyQzHgE",
  "key39": "3QfEDUK8KhSS4KumGe6oGwGXHB1U6qnc3A3JBJSL8kTbyZeZhqmyTGAP26cbGhe23JpNBxpaD2TUVF3APRW54Dvb",
  "key40": "4LjZAa4PFbekmARcTqnMMfn5KeN4Pz6z4xH2qKhRVPJ5k7rLYR2ByxcsgXGmBLwyRimgGijh9EmdbM9AcX5F7Yz6",
  "key41": "2ZsLU7t1ppAFSZ5r4wVCCqGVTfXaA3cUsjrEJZuWkNTm2ULHFt7fT7VhyJ2f6RtUc3dZ7z7JMvbbseCdTMRvg9z3",
  "key42": "bRk1s1Fbv2MNVxvnWWQmthpcqdFgNTLMUS4JS6VFC4h93wXXxZHRMe66Whf4DrUfUDrMYm6gytohn8ZXCc5h5Ck"
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
