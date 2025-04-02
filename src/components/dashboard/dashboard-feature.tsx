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
    "5UhB5bLYL5nHjzcJWJ54153VVnvXXVgT4hB4y9Kc81XVGe8x6Hr4AjTwg2L96aQpgGGoT8mrP3SCGxbJ8qNRkr5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w23VYmNPdes2wTWm9VZhDTxqGsj6c1pD6TrFmEWHKS9ynHQvEKwfcZykS5vR3hBWzJfEWgDy5HEZSCt4aeY1Jug",
  "key1": "3EwxCUqdcHSiAoGpYQi4JAxWdtVxHJUa7MNYzyRaUHGicunibYwKjo1mc2E1HMZnDKPsXjWJUA6PuNGCAoyHFCon",
  "key2": "3AVTxtTvi1L91ZsWG3aXfiE6kxXLpMfuJg3z4n5boR5iqh97mAHhNCqnwXdsj5yWqSrqVSvYwqLEB9sH3VTo82Ck",
  "key3": "2CHfmKa4xyYVkm969Wwzq57JJK1hLzR7289mjtiNeZpYpsZ2Xp23yBJoCLaCs3xADFdJ7Rzvi7vsSmFxgEpGRSn8",
  "key4": "fHsStfeewqHxyssTgKDh9Cee7zbgKMXjEeezn6pcqA7bX6a37JzjoYkkZWc51UruJLRFXinrdtwe3T9b6tGJQZJ",
  "key5": "4UHTDNf91wWpLwg9SoLRiFDAnsWqj2MD4mhdBkWqm6AAAGW421Y86vJo4TKN4RPvZf3S3WB9H5nkNasuL1rKKRZK",
  "key6": "4m6LJoR4vouNg8K5ozXSXWEbpHfKc4R7r7H87f2DwnUC8y2LuicjoZ6k33BNpUjSzmcAU8mo2UrzmrwFjL8Yrdd3",
  "key7": "2TxvVG4wfW2Esg2pB5oZVAEaiVfnwJpsbLkumEsd6cDskwNtxAGsVsSCi8JRA2ApL53bdpQQCeL1N5JnC9NnXZBF",
  "key8": "4D2BXJkaqPw8HmBxB2mtLtgQPyJT8zZi8SZxqNegdTG4Hwyzj2vbtjCr2WRViMbhyQAi1tuMo2LWeqKSs3ExDV6f",
  "key9": "PAxkTv3CQA1Lc8McMbp3nWB9s4yXAYisfpzVzaXkFCGM2zkMtreMEerM6G9m7ked2FWju6tXqJD1P7NmWH7F3bF",
  "key10": "Xf4xYPq5AXHYKZQaGC9Cd5hFP3N3PbpD2MxMDzcaTdKuCTGN6aawesYQ8jX4FG4WtyWMraAoiRv8QCSeFATjftC",
  "key11": "234kd8QcpDpgxvX3JfsMWGx98BcPE8PuazKu34xpr2HEm1MWhL3T58gRBPBwzsio2Zznytw5KmWXLT7UPDZj7E8D",
  "key12": "4vpovkR3Cex1o3C2ZFrp1weER2d7dSi3RFbjg8AYivTcbQFhyRa2UtNbip2hQkUqWuGJkNWgy1GrQqM4z1USQnmd",
  "key13": "5bucnf7j5WArBrgV2Ur672PiGG1sWqp6Zwc4qPo3LHeSU52ppxdYHiF8eD6Stuin8LmTBqqp783gZ7Zp2XSsTCHL",
  "key14": "9WbxzChTPMN7DcGF89SrUHJmK38ouNv1uCv7kifqWGqaTtXYgvbtGA9dUGWMEzZx3SUJ15iC266uMmpui1HqZZT",
  "key15": "37ja5GyfdJK8xwoiqSedtutHjF15zNeffHWcCMjrWzAoonJVAjLNeDkgeWJ7ZTHyLZ9eT8SebGJDWLErycQdmNCA",
  "key16": "4oWKMheu98g3FKRLJWkra9yakpp7iN1PG2CJJn9UFZ3Kn5aC9Toa2TGipAg5F2WXJxc8SzKqWizfts6nLbv9X2Rh",
  "key17": "kyjipnd6MeoHVdXHvxpezLpMgjzzsLSsfv3iVNhL3vXnwg3p3xqyVorvkKoGk9FUAC495CmWagv66PU4hYWnhNK",
  "key18": "44dL8DUHeNdWsgsTd3HA2TTFmgAuzAXXYmzRQ2FcuKjo3p51tm34vAGh9gmsXMGcBSNhUM5aHZ1Xie2x6xb5CeSD",
  "key19": "2aHewpBGQa5SPsXpzDdRTB5w79Ge5qjFRezT8T2YJJnp1iK8bk1hLsLV5tCQtDY7fcRi6WiHXyA7gqjoRgbDLTe6",
  "key20": "4z4Jaofj8C7xbWVFHT7zrV1dEc1Y8GiTRY84WwG6PxHJ7L8cHgds2Z4EJpqDRTNiTJec4WnDGwLaLXg8LskMVqZz",
  "key21": "6immRT3htp27D8Yvv72WAVEzKWZXyQf9uDi2q3yGaeVLFXoGEDYNhXtNNATURZhor1wwuZpBV7CHp2daEcq7M8L",
  "key22": "2mDvqGnzdTKqU3CACSTb1Z7U45CC9xL29jFVNepKirTxpeYYdtTL15wYEPM3CCyafjmtczUrw2DSBee9TPsQHF8m",
  "key23": "WtNWGDQHVw7iVAPoejRQdH66wBnFitiUq8wrSmLZbMewkejkLZHb2yVGYMtDNWG2i4hHi6E9vKtszdY3vvawoXg",
  "key24": "2KVPGz1McMjYCqMLhqHWkK1gDzfitnXvscCQ9pbwSYuAea5jhPKJP7qypjAuCqA3dmiqYqro1r5Z5Fj2t2JoPKdD",
  "key25": "5HFdqrnM1EQ6m1XJTUQ7L9qhsis9NiiXh46q5ExMycNc5frR8d21uczR3LVut9AXVhNdnoPTb7kyFiJG9kcAoCxh",
  "key26": "5oVFb2eDqrTziPKuVQV9tin2D7iPyNcdD2W1XNENDnKVK99uxcpieZeLjeVVv9aZSdFrwpsLmz8oxtWvnyiqHBrk",
  "key27": "8Fzc24De47JjxdDGYtnuKXrdsSLUVrzcem4Dhbhpk8dZfqW9hKuPWXHuGg4U3ZCMVZP3u2mpgXEBqrTZeyiNkSn",
  "key28": "2mV5JQJHJncstiSztitmLw6ZVaixvCg3GJ8BGx9QSsoXJ5R7DAC3CUqGFJATJYj5bEUPcJ4pQjf7Wg6W8wCcBFym",
  "key29": "5V9Q1Qr232gdyQniBxw4ZMDWmqLsavSUqM2GjeFLmhq5HDdYYVQxKgNvARXQfr9BnrRex5eVdnFSWwq4SvgwXCDk",
  "key30": "4K4sgCTrTAnVqJSerFe74yFq23f9MEhmR4kYwovQRmehsH8TPh7oSRmsgnevn8J5uGrrXGphYw8cFBhy5BreCpM7",
  "key31": "4Q9DtkW5mfuC24kp5C8eWgjVo4XJz86Yfb7bcebq8hGaSqD7ED8VNXHmjaGgniwrD2wWrW1YKTsDwRSdt4nsnkNb",
  "key32": "5EcZZQe2hzpSwxzWwEJGmefc4DMS1tZ7hTfU5euUTTc3UtNH9NP7ubyDznST1itmwmW8ZzEVqqnt6PaN5B7b8z7K",
  "key33": "2CNiW5qvLvU2hsSHrq7fUDCYzYaFJHXda5CuQqFFsGEHyFDDFeXcYzeGamnXQYSLEq54tswqR9C3y7buGFcGq7YE",
  "key34": "5kMjVWnqvihUfyberXFuXQDUhVmPUmVWwV2hUkRr28U8AQAZ5SQCCvKX87Tm1yWcaYN1J3y6a3tNM1uzDAE9rhgZ",
  "key35": "3mjtZ84ZDoHxEGZTj2ivL5SF8h7GX48RLou357jMC5SUK1GTG8sn1JEe1fQ8u3dTDfu35egzjhFZmqUeuSMRqSQo",
  "key36": "dFP1FmdFN7e3yLjzFe6bqrUAsSk5XdpRKfYENbyepB7izZ2Jqr7TT7qh49K9hkauBiaUp4G5J53AEkc5QqB6Ktq",
  "key37": "3NcxAKFfSXkAKgWifFD32qmN8Ewptoe5b5aPkdNBZ1qciz5scbeSCwxetAzjfrT67RmdS6Eo7oqfZZbU4bsJeVkR"
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
