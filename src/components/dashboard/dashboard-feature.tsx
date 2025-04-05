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
    "4h9xM52RMan9MYjvUaKiERW5nyP2JMcwmVEpJ1fU1qK78hmos7fPyvM5UbhY33f9vkt1Kyz5frfLEAy9Z4VLGpyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42KmABvQEQMPrX5bMZJcV4EZVJ6RyJWiHEzuNknrAfDRubendRyxavDFnnJfNvcdDnstFo95GSWf2VVvjh4zc9CR",
  "key1": "zqBniYDBeXQQpz6t7pnxoi1n6riN3sfZ5PpCxnzcCXn4fBBuwqoa2m3azAuYTdTCUCvJxd3sZVi5GsuanYRvuVn",
  "key2": "435heM15rCzw7twvZYmsg9TWM4QDvWWKxUjNWjfSm4LthTay7TcDwBsDv9VAFYdsYkhE1npoG6zGhv2vSTb9R1mk",
  "key3": "5vrHsK8VG3ngNYqV2VDSh4BXBfsosAKuyUzhRUqG9nWsodEBfaXvvsJGHMN5jLvuPfKMde55rQimKWpZ8GQneqJr",
  "key4": "4xyKuHFPi4vr3owvHPUruR36wGF1PT8A9LcL3JRuHcZCmwp1hCK4kQ5SmDy8Vh526aaJpCwaUuuos4NV74Kx2Dk7",
  "key5": "hqzUgKHyUdWmK1Y3GYCtC5EaFgx7xpw2MwToqDrkwqYjMpxgSs5qUJ9aNTWvvDokEk4wMzt9A47ezWwiZkWJefT",
  "key6": "35p9Vtq1SRyMrGTLrWjjozPRsJbpRQpodStQetH9bE18RkmRRqKDjLzSFh3ETJL1LUhGNZQewxyZmP3kcAAkh3vW",
  "key7": "3FKQHE7Mwafe6YX5rJ7AUKbjW9AyzqgcYfAWJP2VzU3neAdcFR9NLExPWgdwwpkU9xZgz13JKuNMCKc5jGAF3TBS",
  "key8": "2KbuvXK8KraGfgoUdTADBZ6rnd1AsmP9bHjs1Dpea52ZinJwwT3yAqECUJ414M8nfgmuhroms1V93jgquyhRTExa",
  "key9": "3LhaALmTN9RzNumvEJuH2XJrizehSUmPw2PqQ5qRSjoMziPhifdb37g3trGxDgmWr8wtFW6UthhCdXyVBzE4sBug",
  "key10": "Bu4dSowxP6yQrCfskXF5rqC7qtxQEMrj82vNKKKNxSkERCMuasVZ5kKzTrJ1XdXpLp6bD8VxFMG9fyrbcLG6b2c",
  "key11": "3z4t946NUYEkKJQBaCc8YG5nwWFwEVpfYP3kVCAnCjH3DoovrhATXrvBr5AvzbPXKYARdzE8VpXszPQv6B6rtUq1",
  "key12": "ELQsqfHFvcqGHgDx5Q8paYKDbSq35M5nTKsJcwNsKTZCjAfxUFQAnoTLK53nQgXKed2iu7kho4TTcLsT2ThK7qB",
  "key13": "S3fqLUsgNnVcDTNpjxxbFHfPhzFPEwcKFaTDmgwA4hdZqY9YUnE58RsJqobWkY32H1u3UuAsZRNnWDerpWKunvX",
  "key14": "5MNPo7zvzPoTNuJrcfRqkvVcnHRU4qPxYZfdqGX4QHvNs6aT6USc2FkCr9qLNSzAfA1E4UYBLrmieYBD6Y5L6qxB",
  "key15": "3KTyGERzBBa5NPR7q7vZohUuGMJu5a39aEqqMJLFg7e2wP4ex7cXMiZ1AqQY8mDiKuYGo5TJr775i4NhThogwTkn",
  "key16": "3CkYkuDDYcRPkYb2cxVeS6ypKGTXkbPLzH11Tkerj888VMxWggRfBDy4rzrW9CHcQcqXHhBBqxTbt1rPsN6iCpHu",
  "key17": "3wbeB2XfdB5J19mfSiuxVHwUoUQXabo8UUVbJYWWjzvbTmQJAwyebkieFybqQxYp6bAEfnAzVeMbs9AKeZz99ssJ",
  "key18": "4hxASf716FrQSWir9K5Ae3YEXTNeywmEnodmcBMFx4YHjgTvNWdF4WTWZwNeQ73bQqCHQp8w33ea29boS6gP8o83",
  "key19": "UXfcxPp6n89NEqSNW8ooDX37nzNiUTNoYj3qvnbWgBPUYT8ijbGtVsSA2Qr4TsCdnAwRKUBXQ5AcYoXZ57GU5r7",
  "key20": "3zYt2zMvCsEXfABuiV7iGSM1czyw4TD7xe4R3ZLPvMnHus83Yd5xDsD4cCvEpHomR85UE4cwWafgtRQToTyQmyhP",
  "key21": "DznD9DfyNazxBsM1ovyw3eRoAvS9n4NpSG4cwWzJSV4pnJAouYGq4CLqH7LAQpLhR3pRQaDq2JqoHTu9Kr63D46",
  "key22": "5ns5gaie32Yi1BjxZ35CpjTMFhB6B8XFJx5Texpv71LAYPM8A4xbHiMrspCJWmMCJdTi37zYpvnC879oFEm6DEtx",
  "key23": "55qaxKnxVR23AKjwJFMJ4LPdUibxaC15DkR7QrNmUAm5TjobTAGUS7tMSxSq8by77yF2h2KUMQ8iw8STPTNvGfvV",
  "key24": "55dMwNZPw6D5izCQnYaJkEuquL7mQ6cGFys6o63ZvLj4ZuL1HBCTMHoDbjuN4Kibp69tQj8KYvTCnjiGchPyg9Wo",
  "key25": "uR2dYhePZPVVrwqqEUH8GG3S6ZKrXefvoCyWRbVDJRt2VqeoBW7vngNw5VmcApX5euHAbHm4k4qxHWSNKYM14nB",
  "key26": "4hcA8EE3qKNMekFUirmM7a4v3cmw9EeevjoZg1J4mxkrFGC3RVzyKJsUCcZr73jVFGh2RVEck7SiXJou9ua5xR7z",
  "key27": "4zedDejn9T6D6wyVmKayHJGY7N1JxpE6ZHe9orDwgVWBZPHmwXidDQwDFmmeEEwvn9NSVAXY7ZmRX1bACYa8R569",
  "key28": "37YdnNkQe4evrP8okDiao8Ri3FUDYXu65WKym1HHS2ysHsFAu5iKppx5YpX6kbP3ssu8JFM5yHmKWH6HfNDzC3nX",
  "key29": "4t45xveCNiZAbYbqMkhzt8CCb5sNuZLbPH5i6XdaFyoC4KzqD4hGD5MCE24BGKYbtEaD2piRCwqh1rzx4NEFjUeA",
  "key30": "5pD2use4hShLK4f48L1Mcjv9h83hwwW2XYKDZe852unbUE2STTVHTM4KMuHuhAHSNUw47pZayfwsTjm63Rs2bCpD",
  "key31": "54LoeP8iMAFjb9FK376kVNWj4ZyYeo6jrVegCjqrq5AauBYMZFRR8EvDLKfR83LBUWz4yHYbiMABo7YJBGKGVmMB",
  "key32": "2G43R8LWuC7PQPjxv2bii9GrkosvfUCNhRe3yYdtbtY7CV7jCXnsvaQbZRZbdrtwoo4VxMwv34HAkbp4XngbTwSx",
  "key33": "4fWZfZZeWbxf6tF46j5yHqM2RyhLKxaJVyNogXu4WwoAmyxw5YpG5bH6ocCtsPi2z5Ca5uHjSGxfvhATvYHyPsSn",
  "key34": "3vp7p9wihyww1RW6J8S68JxTmqmeXGVeEYsHU4BjVFL2FN9ntvzwpvsDaM7dTowCHs5NRLJtifzyAcgVimzAbcxx",
  "key35": "4wXnvWaxEdGdzdquM7YUwVQs1g4uixSPa82sxYC5dg4YQiBFBpzepHc8BSSmBEEjtkyjGxNmrWHUbDcpouqeigpE",
  "key36": "5Rs9oVTf4DxRJugb3dtxk3NTptQiEzgvDABT2MgRjvPq7cMiJQEYdQTazmJEV5XgCGjKrmJDD9ZtVimTnGe3J51H",
  "key37": "3ZQjPNsQrPG9siCGMrVLTxzhFL9HcP6PuR8VfLS7NkZXSsuTfonrn7RCUnbzta6tSvA4sCKLLjbgebnj9qCD2r6a",
  "key38": "5H9yQGebskkjmPYrPfM8TTAYBVXfQSEzRqLYbBtLpuy4AyGgd471vvTLCpwoiEfo2EC3pWYuc7oWfs3eAXZH1aMh",
  "key39": "PEycjg6fFFCxVBgKKUY7c15GE2gAy3eRKNEKXd8LBA1PzCoLw8kMJnm6MUZJ29PzDBLuvT4uupXXeT2ZPkpGcXw",
  "key40": "enH3rpd6dGDXuCs6KhwT1zVxvMJVFtFm8ALhyZpK3SfVEf2NvGYiaBho4CbJXGHmYGKrvBJ62b9dvWhUwi6uPqR",
  "key41": "3S5hdMdMR3BYWErrrMWNj1rwVFXex9XDMX3FhFKhZWPkGq5zrPEVzpmatGYxFDmAA8TijoELNqGh9aDsJpACsY4D",
  "key42": "4mQBYNH7Z9MHp1uNZYi4mBk654e31wTiFYf7YtJJUWnmtavGAeagCxxb4wvFRPAYWyZge9fGbhrwgUpQoCMbyWTG",
  "key43": "9WtXq2XDzHVDAdwuWW9R4TCUC4LwFtZju6yWG7S18xwuk93pczDKE1TmenboyAKnRAQbugEAJJCZuYEtv4vmgCC"
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
