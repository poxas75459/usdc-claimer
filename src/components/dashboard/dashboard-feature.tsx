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
    "5YDbV3b57TwwzJfjTAhLaSdCZEdbRnmvDF3kSXueDjt5QrFaokPyGvnQWMQiBRCELq1Z6UFf3wH8L9RutWBA4QDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57BqStZe4Y9GkXgVyCzWjSANbJaDuXKC7Ccw7ZQ7jaA6nusQmQaeBSED5BHwrEuNY41EJyyNnejmTdDuUZnKkNfA",
  "key1": "4VaEHU1eaUaBv75MB9NmsdW5z1wvnaXd7tXYpoMitDR3S49LdbXnfM3f7tNLTa27N4unzEePxbHSEFpzkJYLzt83",
  "key2": "EUrDnLs5A2o7AmytsNCehU5Cw1VrV68qBjMacfdv57HeHQdyCQ8Td9bEqv4FVvKPjnW9Htm6TbbGSKD1F8Us3HL",
  "key3": "2UJ1iq95bkVE8EbfHC62RcoS6kgqFzipqASD2XyMNvC2o2PMtNDJ6SBc9ZweeEk8p4655urTAS2CisE3AMzmarsR",
  "key4": "sPTqzYWCfRyHLqxvHs8aEsHTaDuQhdC7swNFUrEZmYVH5Yipy88YBjZNqb67pQkUncCBVsRsFc9TNoosDHa47ZE",
  "key5": "3Tdsa9P72AmWTGRZ3PzjTEXdfsmk4SYnjna3thXXuXiF3Zga7SoChoPpcMi9v1M4L4RKmRV6dLJ6q3gGR1mHn9eR",
  "key6": "5tLz1FjsCvvw3HqgwstL9dCGgJhZG672UrmCQXJzsFS2YR83Y4D5JFgrrPdsPKs595ZoYEYAzJZX8GKtyTEpseEn",
  "key7": "2goXgw716f5FtPEbtZpEtbTbQP9MXveYikUeFr7EXck5jyhwykM5H57wU9yrvLzfgyshZ6zpF245sh7HTqFx7Zvg",
  "key8": "26BoH8bgEKttahj4cvLjXqoMM1MPJdfwCjdYqxMMfGHifQ3u9PCktbGn1pnq7bBuNpCJisSyBX8e4n51Bpdzybdu",
  "key9": "2TYcSGzWXoDDo2nrtbpVjzcU7xJZbLUA3s2MEw4nRdKBhodMiwtSAAztSYDNGCTSbKU6zZniKz5Ha6B6YP3ck32y",
  "key10": "2N4rWKZXbfWirNx7DDc4JAtdgEULUj6LMQs5AuJw8CEuUag31PswT7czDToh1jYjUMCQ2zzvoL8maXaQZMPiLoGa",
  "key11": "65K3ZNXSyhgz17ZEKBSLE8qXNtYcXi4MaTx7bAvRnZ2R5uBct1FAdZP1srkj4pPqoU6nbbMedyu3zmLrNgMhaY6D",
  "key12": "5AQScSvFmAH3YYdEC5sVPQJeUA6HFVt7ShJ32L4goq6ZF6rkkuL7tveNFUwsEb46ExJ2yQ5Y21CtSJqjYi9B3vaE",
  "key13": "2NQgNSFYfREMrfiDw83PkG48UwhxRiprjWoQFjA1uM6pHawjJoxfaRupkaAdvZCHDLawEL6BXsbEP4xL8PQ5ZtSv",
  "key14": "3L4BFQPi6VLXs4ruemrDUD7niRoYJYZXXVYLd8BLAf6zNC6xEkLpNHAhBErT58AN93SE7zsnurS8874iCswFc9t4",
  "key15": "24f9MXmVi5LKR6yaJT9iqfUaHzHmWxYib61QLfwkm9EMzwCPK69aYm923g1cwEzCf2yoZnGEp6v1TM662U4zAVNw",
  "key16": "4zhPZ58CjT4iR6bdLEgtyfPtPhTM6zWrNYm62X5D55kHL3s1qu5BqudEmSaoJZS1GTPSo37shzbah6f2tqSG3zzf",
  "key17": "3YsYi8oVg8NBLNPxsVw39haWwLfQoSb8Q3dLUEDJWyWHRSvBsVFpLDnWUbzRfp8QaGtCWNQa69yybYgpJLAjGwWS",
  "key18": "3xai4mWMbLEubtkqNUgTe6zPwCGW54pEoUy5CDMd6VQWs3Sj2F3yQazkjsJyxvP9b9KPa1XGyfEwoTq4mcvopEkd",
  "key19": "DkYdikcJqHnkYMf9RWjuG8SbyVdJc3FDHEnozhD7jwaTSeRooyVsd6iSFEy2TudxrvFUAUo2rpMTTCGBQXV3r73",
  "key20": "3W97KuVMETPgDPSnhn7zE56yvXtbLRSEEQ8FsxvuehPq7gC1sLuhxV7USD6EqLkoM9wgm78NF98Ua9e5HLYdgqdk",
  "key21": "3gMysqraN7pAzFnzw3aqaEjnm5g9nsv4tsWd1UgWuYUVYS1m3am4k7aTNL7AomBeug7uwtZYFTUp85EGAhAjSRaF",
  "key22": "tAjTui9LmPacuJVewCS8R88X9zgCec3n3Qkw1AS8ey25w7LtMVCAG6FLj2zM3YGb9kNABo8E7yoTDHhh19YiyJZ",
  "key23": "4PyjRb3XXb89X6Pgb8ahGFKYA7BuBECxLhXgU3jKRFMMKqYn5HsPExkrLpyxJDbhLhiZrxfLAgLjPMZJjhLDhdd4",
  "key24": "4f4mdp4LG4ab18EEmxvF4i7LPS6C2UA3QJBUedF4Lg1xPgv8bFJsM1UBre71Erg7KwkWbPRDdtLB6qBN6mRmJWSW",
  "key25": "4eSaykmGNbhi6rtACzxhP6WPzwwb51v7RN1X1FwY9RgXuLeTWYymzdYMLHKAuABC1WMttG9JG8D4WegMarnFzS8L",
  "key26": "Zc5zPPct51euha63uungiXnQ5hPMm4wjmd77pKkLasVogmpSJUyVtki9ShpQ1x7MNpJV4Ju1JRdkfyLCPmhngQa",
  "key27": "35cLvfX3TNxPLWnedZ2bUow1gAKwLpFEBq4hcGjVw32XeGQhkgadKPpDL5fU11t1EBfybKTtcvS2e5RTHig9DYHf",
  "key28": "2Q6XPKRAoTsFFXpgCsHASBHG2auHCgzGtFJcJpoLG9C3UZM2wSqQn17ChosoEuWXnWBrggkKnhUtDwnjUtUhav5T",
  "key29": "4LWzX4HRKqizBvyiom3GbuzbiH1PCpzjoiZB1tTzYHHZRbWJrhmHNiLBAm6N7DyyTxAQsPvby999E2sb7TiNtgiY",
  "key30": "5bykWoGeCCpaveWBS542dsdwoKiYup7eYq3RSH49YDqm4gkgc7zFozdaUGGy8oFKqetEV7pzv4ij93paFckc9jKB",
  "key31": "53QFJBentW5o4ihJquh7QJA4jRfrrrNjQpkirv6C7a4kjbPQ8jxafo4gCpcUtUDzT1isjcdQ3tSUk2UA1u76RLUX",
  "key32": "4Ac4jwHhg6wGYhestSmD38gUHSxK4N1LhdK5dfhfbJ8kofywuHrxRRvRUwu22pkr7Mky578GSSauEHA2zBDQbHQo",
  "key33": "4x3jQk2dJ4eaAafKcpkFmhyAseCnybVoJZa6EpbQwqsew8bczLewtRffb7uRQwjKAckRrtGu7UM6dQTncDPQRQeo",
  "key34": "2aRBa6mLA4AfzacVhVjqUBaGu2s1imNobdKVDSjAWuqWwPEfeJDp7XSTQxwarkK6KysMzJGh1d25U3ZwX3ZEqyB4",
  "key35": "YTM7vxoiJNdAcuc5YkTjB7mN9Xu7h8jU8B2zaM4NWjWB1J571iMkYvLWaDaKEnDMsrr3C8KppasPKAz2P73QyAg",
  "key36": "3dktixLLj98cA73ZVJVU2B5DZ3AXM75J4BJNByt1KMcNe3oXjFa9W1rKiYmugf2TYBj8pnN5GjZFu7KsfNyJCQyw",
  "key37": "4YCaTHdYne4WRJu9Fpru7BkWvVm9Go2FMHJJJBuqzrUZFaoaZFTgLGicMBX8kLLSrzjkFk2ELtG64WrEccY4JCeR"
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
