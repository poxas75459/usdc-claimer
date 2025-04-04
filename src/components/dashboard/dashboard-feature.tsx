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
    "3WRiahJAFScgVwV7CxhDyhuSWahKYD8uhoTR6aewRU4yjvaG8RxcbiWn3DxVBE5Lfnb81Gzcn4TMBztje9g1QmaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iwvFvPVxzFbyZrWnNXHSbnZEE2M7DBnHDwHPUFyGZ6i8uFwrFYiuRa5zB9UwGunYkEhBZXdgDXkNEYQt2Jo38de",
  "key1": "4NzNaEjHZ5eJNAp5HaTE5mhEf1JAYLLqUUmHojdfCkWTXKdxPWbftzFozAr3DkXb3SjZwvgbMVQ98DLJ5HfUCLTK",
  "key2": "5DoYKjcTouAoor4SF2vDrkVTBCX33J8BWRndd9vF34M13R93j3doXqvtFHwJrrDaLH8LH1y4aXSQchEDJsFo73ZW",
  "key3": "Pkxhr2M6U1c7MXU2hXuWh4iyACknXSyatYt9nmAJeLKWtjK1ARv2o4GCq6yFai64dZQLei7u4T9aBi1wsZD5sVP",
  "key4": "4g7rc4mBjQLhQQbTetmQ5yrgmbXBDQdMp8dJL7tx7fPNcgyiEmTjk7F7o3auh3q4ANcbecfQaFxJE1ZsKQvVvSuL",
  "key5": "FdYbQcDefVhkTnWVni1cWJqJL467JVJu8C6yPRvKSwrAviAdZSvrZdN6UtNCkSk8Wp4GqwuzdHbF34FcN2ctcbu",
  "key6": "3aTmfoKA6773mDdY6gVrvqBvvpXwwpyzS4YLj2eJVz8C6hgZvKUa7u5Pitd3sYpnZ3mn2CvbcgR5wa899jo1KaNh",
  "key7": "343cRNF6imr5b1ScKtxZzYWsj8HUvX4ktiJL94dbnoVUAGCA96ugQFdAb4kuhLhdJNfnb1AYqbPo2YpFzGK5zUdS",
  "key8": "3E6oeRQFPY3kmgsN2xGNJsCKjw6nm2tMxYn1QN75b2Wmh4e2e5pYUxP1xjHhdVYn1CnsxtLfqYa3XdmZwwx6bcPn",
  "key9": "swS3ruWiSCmRTt3BJSHzYvxwEHwND1YvXPURyiyCSf8ymJoWnBmtvnNdnuu9LU4jpAwVkogc6DPP1g25sdVGWQV",
  "key10": "5fYQJpaPbbzigkoXPyjAiAatMPGKjUjmdjnxgTgXbrg8ngaLccBEQxHtgnSpGj6dFwrdu2SSsPkSc4ydjVGWp3rf",
  "key11": "68aKVcxq4Z4VafxgT11QHmtGbRXjEF4Sp2wTbGHbtrbjxRTJtJFooEbN1vvS4V4UkC14d3knAeGkxvqQbHuY46t",
  "key12": "4QEjYcRsYyVrXJsjktURqaVZqTNHHthQA5B6Ku2MyHSdxJsJQcqT3LszAbWGRu9QUJMggnBgvFTtJvg5UnHAPSvD",
  "key13": "2dbpfMqEmNBwFS55Zcg87JzakvKpkZZpoqKZduuMTpwXpgFg7gMA8VPKbB6XKCxhaDUENdbDjD3uWWrgnWyZCBmQ",
  "key14": "2oCpt8fcd1kdURLeC99jwqd7nY1c4AZ1qAHdDF9q5fSfyTFbW6DdUMK7qkoBQrEszGBS1quX4uiPE3UXuYwj3Q5T",
  "key15": "55ppYFgWiCHg7rFgHqMrW7GSeJTr56pEMShjQuRfkYE4D3BAeiKvLFuHmwtQZwqYwYQAw8dBqkrdAsQh9MfsWrDm",
  "key16": "Jz595fL6jAtSjQSRokhxMmudJRq7kp3kMTjPfvEREr13nwQ62u1DYbSmkBGYZSF5NNq41TCHmDhjB1eCjAwXzcv",
  "key17": "3TwPPbTWEgwv9RSHR6m4T47V1S8aQGrcSjyCBqvei3eb2gXxBSf8L9nWBF6LZa8ESLk4CedP5S1GYRpBSunx3qCu",
  "key18": "Qipjxq5bsFdwnH1BQFssnJ2RUtpK3TvrDkWJZ8otJjRePuJixgx1vQoRDWVZMDFgzwAbx83bYyG73y6StgrJddZ",
  "key19": "4txptFzJmvCF2ummsDoKbjLTh7fjVGnP9otMyHSpHfRYZcB4pyTX3AcRimwL37ECtXcVRqZfBVQuB4YPuF1oFajV",
  "key20": "2xyHPafpeMMibeL8AkiywWtpMDxjv94V4Xz8mgzUzHAweGXn7SjresJS56XJW1pRdBKqY7YFJSKLrthWpDucwpc1",
  "key21": "3Rg3ws8pXGK4PA1UfnoNwpZea4TbpfWV37H3DHxsjsxTD8rMPk6vwWxP4pGHS2y6sp3XZV58DTgib6PowxeVrbHr",
  "key22": "46aXzWS57NGmXinLpFGdABZmTYKAu844QKeLRr53TyhYHmgQMwxfMWU1eajrADS5Zte7swLgHxXqatWZiT1cuSML",
  "key23": "BjWU3c5oBPWxrQA1G6wM9unpPkPhmNdkrwJk94GMCJJbDPr3HwEsLH7vsqKCj2AQn1NwaGBoWu6Dw9iDXebF8Kd",
  "key24": "3jiDaRF1WFCT4AyRKfLkDYs7fUPxQcNDLdnuUkR1dkcofU2E6AC4EKNPFQo2b4UtXcJgmRqq37qQahuaocD7YTDS",
  "key25": "5gmUsMmkUtQY8qmhyozfygb9uC5PXzuSBfdRxc3xtxYADRvjqnQy8M5Z5CHPkWHSRWuqyqBJ5WVvr61dJ6Z1bmH7",
  "key26": "2MSumzcaPdVzcuLmJby3BawCwXvbvAp295qEU3gBMyW6d6KqBkt53dFwjcM8fLmmZKbqQnBxxoQAtZrCe121g5nk",
  "key27": "4LFR2woNfpUD8AdVSw1qNg68V31psSVCDzTGMEQ7KbgXzXMdCnU9A2KWASu2AaSuT6L4rA27dP1YRtTvUvviMC2b",
  "key28": "Sghtx8iZE22Z82fgXgJMU9ftzpgWTtkEdWzjWbj8ohLAkKqYk2Srw4g6vRiwd1TwVxjYVHz7UmypPuycoQMMc37",
  "key29": "3rrUn5FMSgaRrG1YUqVr3mgjDRZ2AU7qftCr53Ryo16sox4ZvKHF1Uovs39VxcibUpGkj8qFfz7JCctsvtx95H9Y",
  "key30": "4crh4E7nDXnEm8WTnY2WSEa6mmhmPh4U56rMU5vJGdT94bHDesYu5B9axGToZgnjt5tAvhK7YV7TjGDvC6kXQxVn",
  "key31": "2YMbSNMVgC4awoCK3iTnFapZy7iqa8ompXoyUUut4FSKrjMLGVy5YUBJy2Xg64xqMEobd1Dv6n29NSqqwnfvaX5b",
  "key32": "5FgCRzNnWnyk1GTpExzsc24s3wk5S4h1tqiF9DGWUXF94VkGUFdKUBaXt8EgiU5HdCqTzjHEXDvy1VcL8MmYNmN9",
  "key33": "4Us2f87qfbro4yZ4ZgkD6UheiDveyjPdSxRp17eiWUwUJcMHd8vpMe4yuQo3butVAecmTF9KbKVujmsfvsibCVtR",
  "key34": "3aedRt895c3DmMQQBgyk1zKfzPtf2p1gBtA8z1vT282cZBVAGsFJvbf6h5e1Lv3PPCNaCkHjDviwnKCVK1YV3iub",
  "key35": "sjgA87FsLcjSHr6ory5MCrStousYkeD7KbWVFgFA4Rgt2NPYfuSdEvR6skbr6Ujh638XAd8m65gx4vsWGikurkT",
  "key36": "5xAgUgJpx7o2KgyCvBGJz981BzJWhZPkiM8R1Tz3hDB2ufvgEmqzCdqrunQ8qKEhG2CbM2r5Z9kDxxdnBjbdQMM",
  "key37": "4yD69NKMDd22xX1HkN9Ugmu2uvBWQo5xumSWaiDK3gVdBJvZFdTm2JjBG72oGVWMZBULtoBz9tDxtBGFPd3DTUrQ",
  "key38": "22H6RVxAL7LTJ1iYbLzokiWdJti25PenfpmSUyUwBet2jZUQryx7FxdrCngQqJwLayJcCwD5AYo1xyzYQfPtxuDg",
  "key39": "EegXV42jigrK3qcEtTuQE15FVF5BSXfPo65WC2foxT9Ve7YdM1J1aXSqWZvXq8oKkAdt8L7R67h7VdPmPvSvSQF",
  "key40": "3wCEsYZAWUv3kzWYVWpxEmRfDojLALoqtFwmbwBXGz6KByG3qd37ysJkA3GhG6YwYpfkVJULzuSXhtSvEmwuH9RV",
  "key41": "5FqAqZQaG9o8N7DTzj4odnw3qmQJ6Z2KUKKvYxtUD31fWJrKHZZo9hNjtgSTFN598erpzpociR3Vmb2RyNHWA28Q"
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
