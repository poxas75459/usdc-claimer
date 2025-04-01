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
    "3w5P7GwrhDeLzP4htDiAEX9QGbr42dK7DPP2fkTAc1H81D4WuEjffGxNmiQtf1eD9tB86iDvkud5jSNqzsxAxbiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTZ1sTBwMQ1c7Ypr1Ta3yjsisgmqrStTov51GeCK2VTFjiMUftT8TAdf4z1eCkwjv3tHbaWSF5WCLrCadTjd6j7",
  "key1": "5HV51eaU2H19UsbKBdvM419jUaSPaGgTaUXKzjQ43EohhDhokFk8g2iz98ThBpPCtvorix6vXrr8VjLEzpM5YkSS",
  "key2": "56YuqkVPdAPDLLnqNcBnfCS6XX4QZUrLmePoWMpyVENSJuQMNWhq3CBqUJhoimdyt6RNf7v2yFmpHgG1wZw7qhTs",
  "key3": "4WgZ7XTotGHG4uwV71EaVx16ZnMERYbbupoibs9HaaUnCPgtdfq8waPo1bZfCC4uBMXo5SrqQhRq3BfTDXQouAhY",
  "key4": "4s5iHvkWiKtbZrbWNsc4ExqqVFXY752rSEtm4a1XVrkZfMGrJac6DeGQbXDpMgsHmoHrh33SpyrVqMs9YHNhx82o",
  "key5": "4Vhpf9cGSKVRSdaAeb3eLG6UoX6QPA3iYzHjL9QtF45AMYcd7n6c1tf8W4rc8JTd6oNgCm1LXtqjvpfE6Jpr9337",
  "key6": "2ZT9z7yiXyYhdFEiufyRqjgrUqvLuBmzduoejj3cC6akvpbKw33oNuwFRjLoa5GXEs9SJ3d76AkSu2YqY79xKamG",
  "key7": "5qqhuQvKrzapK2nVFwRvvayHP9euoMTPfxWScfNsi6sF9RDzAtLcuM5zF4Qat2H46oGms6bMf3YA9uyzte3DzrYY",
  "key8": "4TvSYBrcYwkZPczLDXZ2SuGMQLDcxLiJfWs5LKycB6iMLtcEEFJvhts54pnLdFyU56wRjhkWwqvuXyT6CxjkduxX",
  "key9": "4g6cMD2Hqxa9kKXzrRcFAKTRaSKBpai8JPU8eEUBe4PJFvqgesDgKyW4A2ZGqW8EmhufPmdCwdJUBd1t494nFdbm",
  "key10": "4kKDGYdaab3VxEdYFhGhjcv2WRWh2CCj3qKwvjkqWtmnqp8TbUqLUGFGfk6XXmfUroCAzyFpTwmkHa9L4vnFgnbf",
  "key11": "3uPHyDmmHyoEnne7PiDH7QsHXFFW4kFcLPrfxivCg4Q2hauCsv1Ysrb5DPhpBboSyTRYniFsU6P1K6gHGaqAscU6",
  "key12": "5BJSNy6sLW5itohPceZHJykGXPtiSnKg5s226QU7jkazgR5oV8YVwtLjxVZfUe3hT4HxzyFoe9SHUohsD6Bi48dA",
  "key13": "5ESaybBK1PFXzKByoXM3f1AumHVBrMkTmStZZojD8MpG215d6rpKkaJtM1twvHgyNUSQY8sizXwZitnbrgpwdGv4",
  "key14": "5TAo1kDQJMUWoch3P1LvRhqknvXecGviPyj9QReGa1XJufjgsBTS9x3RAwRrv1sGC4BALtR7WLgs8VAZLDfb3o7D",
  "key15": "2k5AVDPiqFtzKcr5r3urE6RguTuppuDc6cn3VGiuUJb6MyQfWckdkTfNbiQBcNzDFCxmKaysRfaYyfNXFHgWCV5L",
  "key16": "2PKpy2hYEqrfZAAB8GDwdab8Q1hGyJuMzqSfHtJzSU12hyugJwnm69aYr9GjTpV8Ecem5CBdvpqZmxJxLCgwUn2C",
  "key17": "qvz6kuCgLbZvoNooGpgCesPoiWnxps3Y9L1obfiTeQcZwuH87SL43nW7kAtT2V1bHFF5o242onV38wwYDdSvvV5",
  "key18": "m7QtYHmygfqWDhhZM5Y1Z3H6Tzkb14bYusUgGbYcqF4MRvkXJWx4vPQmgbddQqn2DAc3UznX6ord5ajvVDfTgQ7",
  "key19": "bdcPg4U6QVZJZ8oEtG1X7PkrW3P5sG54FuALWaBa1jLLmgDig6SgPh3yurrAKZTqLtiPuEZDadeyES9mVcZGaf1",
  "key20": "35oZCjuYuiwbJPy79MQoaxNa8xEA9ouY759L4EGqQvdj3GFCK4Svpou5s8gScUfrQZ5AcuyMKaMvjxCgkoNg4Xur",
  "key21": "5LJZKYZFqiyneNc93Xra2YpRZYLkuFWGkWbGqfq6wjr8KP8tDRdUCKsE6m3DgE7i187QiPJWUfkArjqkbxvEKFWC",
  "key22": "5rv8UNE1mKaqN2KcQTfHUxmEK8K3L81jtQW8qzXUGdsQDZTLKxcmHEMYT9tWBMfKsmtZLv2Li5dSVTscEHRsYDop",
  "key23": "24VyaBzGz1Ey3ETxPL5pkX2RkiRaf3uptBWzygCrRhH1yDCjnhVP1jqAQYtSxmSFf94Zce38w2jFoyyNEeo75qyB",
  "key24": "KYJjKYkptngjaWhxdmatwfr96Zy3ySSpfXH9YZmDuBdPRf544CToiqWtTz6qjhS5RWm359JGejwooa1CuH4MfBT",
  "key25": "3ZYgTjSwz279nMiQqCp2dLQQM4pxxS44F22DVw75YYhDCda7TEWpERKNSSrFdCG8r7xtynAxNUPzcav8UUJu6DuG",
  "key26": "4DejpCtAoyVF78mAKxQXho3T4b8A2vNiqJrtNDfmFu2iEk5C6iHSvdVMDKDJraZNNAsFjM5o6DKQE4JkEP256c5V",
  "key27": "tFM7SHAbo28SvbXztJq8DRhvMF7SE9fChwKdWzX5B4AcRxUjuJ3UAt5mxfU3cD1UxiwErcBVpfb31fKhhkzAwuM",
  "key28": "5f1FqezR82k2vwNZC5FcieJJN6swdtwEpLY9YAQffz13Pmk5Gu6g3EQGDmqrmfP9rk87XLMjNuC1n4mMABMjfwtz",
  "key29": "3LxinmaCPJGK6AX2vpnCiJbSotTUiWVUuq3XEM6EQ1QPCrQRdtC2dnpzRYx9D14sLBFXGUYrFTsnoeFsonvHfmt7",
  "key30": "4TcMzXA3JEU5Ru5eqLQqSy14dpydPE2qo9eDTepjBSvvKHM4D4ANvq7WvCuCCZNbgP7r5yTENFiP7bejHbr9YTKJ",
  "key31": "2aQbHdQ5YMGKYWXcg3a6sPkLRTS3cN7zFbn16uZ3ouSZDPQc7BjQXJLX3r7gVTck3UzkS5nMNfvTJUee8ke91Lpw",
  "key32": "4hR7XUnZxwuGYegtsXoeR3M6hahQWNRoDRbr43VF77EHtwnf6vfgMYaErLV4Yp1jGXbfH7SYFuYkXskHk9QKdFZ",
  "key33": "3YQHinHi5sh3vXXd6tj5T5aTosd6Z4LZxoE4dFNDRt387SPzdiPor3RQgH8sUYESZrjSrXvFLFBw2bVq5VromnpV",
  "key34": "UKwU3MeTsNtNzzTvcJvnURNV8NohTVVHXEnZGMM2hwa5WWEW6pXDktUS27QwtHtPzghby7YfJjr3SRhxeZbgXJs",
  "key35": "39XKpeaqTNsv7jjCgTVzsrFHneMxCBVWeXmQmRjpoeNesz1QzPvVoqEqbox3MrgXProjiPYLPNY3qQuM2Uc8dEsL",
  "key36": "4qASoBeFYvdk5XcQ25z9GuRqVCqwghgCHhQWBtWSL6iHUzguqMs3ZUGaViNEd4zNwC8eg6hnLGcTjPTjGYTfJGHD"
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
