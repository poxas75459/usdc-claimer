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
    "2Y6uHnAXxdF7uQUuRy4RxmwMynivpMxCZD22UnCDLLJpR3KxBzg2CTo9fUDvMActfczStN6cRi752tw4ScpDi5HW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJENsBp8JxomLXgSd66uKpzeYMAXKdzAByH4Gq9W7xshifwf3syb5C8224FoYmuTGkHYqv8NS5W7RbzmdtDvffX",
  "key1": "4KnY7mnk176Rrut5Db3s4pzTXjwq88Yzq3SP8uh9Cm9zfNmyzJhuTB37w1HET7iLkLRxHbtEW6KfApWkfunst5QB",
  "key2": "2Mf8w2nJLjY6TY3UQnrpEKo5Cr3eMwkB95T9pra7PHTMELyJgCnTVexmLMiBxDZ2hz7RshQ8b9Lf2MKau8JwtG8e",
  "key3": "35SpGfv5EL4D2mpVjrMvJZP4dekQ24jWsNCdxZdjfAKb7qi1pyPc58iM7Qg13R1NBMri8wagotrT36MbFkcLbxMG",
  "key4": "2y8TYzYQ4LGNPoiF9x6qU3UaDC3qo7g6f6HQYoYsC4MTRyGdoYZs5z9AtjA4kCoEnEHXruZmUZ1QEESvucJqQpwx",
  "key5": "63Pz8WbtEScUmCBS7YF5ZGSCCyddCfYybYww7wR6si6ZuduRdd7VPWwf9xGAQc2L7i6FxBEWvdBcgVmNSYetQUBH",
  "key6": "2Nnb9skNCQ5f6Z34RFBswQsWLC5rbyYp8JsfeYGTqAuHazLqcsXwE6EWnX9cYHyDxRwrs52Qmqtzs7LLr8BYE3e7",
  "key7": "4FimFkoTFNapqPKPB2SC6vLjKLdVGD4K4fHR9RXbpMJ8R17tnAPUxqeN7g4ZhmSZwWwY9f4FJYhuVuzaCgPNNSuz",
  "key8": "2stVBcSoPGGvMsBXBr9mDATk1SrQYcGYsuhxBnbuYbhehBcbMTCgLXDHzTpa5KKZNYD5Zjyh3aeo6QBiMC925i1M",
  "key9": "2HfZa2mBxmqVixwFLvc5kCjPctNvgoConsy3DtzHctarHr63TpAbDkkAvwFJW9FypbFjKas9PV4T2Lyt6CRwArWW",
  "key10": "3DJu3cZ3NcrTZLAZnXB7nkYHrhz96rLKVmkV6TDGzisKtJ5KWC8avTbh3oJKarDd4YAdm738mvUwZbsJWtDZBaJ3",
  "key11": "3XzKPpHRMP8BYD1d4mub9tLdJ1YbgBf6irK4GtdYKgWV6W2Jf8uhZAk8oNR6FuMPiDUDaXmPey4L8URxHRuHWd1h",
  "key12": "3gxSR25oETUFYkPKxdggVuYtKGisS4idM2Spnfe2VKWD84UZacLktKPPe2o2uSq9YvxoJDxystxXvA8ZyEdqMzZC",
  "key13": "sJCGCxunRuWzNRy9m2ougizKK2aLgd3tJL67DEwry3GsmKjhBdyZLEKbezRrdp8qoSKWAsKBXoRvqk4umZfmnaE",
  "key14": "4FrQ9sTBNc2agmvuFCK6Kf5K2vAvbRVuJRZx5yoEMEb4gHJ4N1mSgikX9mvo1x38bcAK9rCHtFqLY5byWCvsp9Kv",
  "key15": "58GaFKaCZnvdJKT7DMLcJJfPTfEeHn2Sk3MDTv1fPz5d6oxRre6pbMhPDCbUt7AEV8vVdJNVTCTRMcrVMRct2wYS",
  "key16": "28wyFLVaPrwfmTU4EKyZfiUHRA66koSVG7TqmabWd2C5YFE4M3W62rCu4xQ7dkCLe6tBCLZqLXMZqN7sKGVqc7CT",
  "key17": "2N71kxpKEqkFe3vwAeDNxaqBwttijZshJGUrhqfS3UYLdf4mueMftVDwRn59Fj5PbS4LPNXJ34qpmMTr5mghbYwy",
  "key18": "3HGLPi8h536mcBQXHeoXCmRpSvup1fWY5JD41F6m2DjjHUkkk25vKMQ6cD4oyNvXYDN2nA96SJ8q6bBeXy4C8Lz9",
  "key19": "5jwqqi1FaTNqihF3NrYq1cGXJyFaUTv3J8uN6qT5HMmUG9NU9q8pcCb2xq4faiuqFM9kh2ASqVgyTfMfFmPoZQYg",
  "key20": "2c5TiGvy9rYVi7zeTQDH2CvYHUGaJv19Lk6xWjYpH9Eqpmab4T3WGQRuduvfvwBw2qNxQUDAz1kK4L4skfLoebLa",
  "key21": "NdpbXsxxxhffzpEoPjXbbWE7TGCXSzPZf2zfT1ZXQmAfAaJiaq2YLPA8ThtQJDYnqEbTX8jdmdk5Yey2hjpFe6H",
  "key22": "3nomBtc6Laz8429H1RnNHLKWJ52fnVWhrh6GVLNUru8jiBA4wXHHb7Gz6V2gewXQdGbNQq2bLNPkBPG4HijL9epA",
  "key23": "5omowmXq4ZtAGw5uqFTfuwJrJ4Wx4SbCYQ6oYPR2JdqA8gNbH4YNUxzbeD1kQND9PXHSmqwzQsQhoeCXGuesD8cZ",
  "key24": "2Sk9yUgckZ8uYiVfDv6sWTqzoFj3AYMZ2875Gf7kc8zUBUqBkneCyerKAXD9PSjEqkPiwSyar5qGd9iHQjHRY65i",
  "key25": "4KcJo3LPUaTGo1Gc5CMj29vSLKMBrRRzBtJN2kckSSgQJhuM6ikSCUxjgdYdRUoW4GYpsTGrnREsATKwuYC9JTow",
  "key26": "4sRbuWQuZcXRWGwqtVMXm8DS2zqSvRdFyTisq9DVehDHz3Rnvex6ivCrYj5X5zEShwoZBzRcgSYRSDBxi9fbi4RP",
  "key27": "PAeLT64eU47NV9e6hYWbtQMXaNWyAQEmTDxFagqX1Fq9xRv4JwztwprBaynBkthsXJwfY4ymLGzkuN42y5i4EFi",
  "key28": "3RQM2iCDu6rYiAspivQ2cxAFdBY6jVQ1nvCx2X1wXoFeoGQGuenwd7SXT1SsfmDR2FioJvczYtPdo9z8Fb9ykMZN",
  "key29": "4ksyCcrrP7bEjvDZpgjm9Viqz8PsLN6vp1My7m2N2HUhar84ETTaxjEdVaDcvYG1ntQFWcBPrpYht4yaJW5Dpuog",
  "key30": "4M3sstGBWkwsQHjYvwZw1YyJpArE6ZKyhN1568mPUBDztXdw2mNgjLg99PxxrMBr3rhkD6v8BE129EPpUbkJ5Hg9",
  "key31": "5sL7tE3EohQrEqJJeGWsTXbsq92vS2uzyKBYs1uoVzNJPM3vEHpNJsBGcEmaCM9TNCSWKd2oB2a1Wucio5uhpLak",
  "key32": "2d9SG8rdzw86pkRbHFvo9wQbxTXFdzh2GzyjzuyGk8o4f26eDg3GdMgzZMMDnCZeqTAvkzzAqmAw1MXR6ZonsnSK",
  "key33": "62MRN5fbh4j4PRnWEfFSVYb2RWi2Wmaa4RrBGfPR9oWrDjcSG8SRxoocBuSJD3d9UjbyiHhsnZhqDjMEduE5fdeC",
  "key34": "4eWf5GAjG1XysD5xDJwkF6uDQgMm6ThzE2sgiD4xAeSXvHkPNpVDphtDeq6zuXcCPyG3pVfR4ohACUaUi9YaCfFe",
  "key35": "4uqp3AhpAmkoDyuAYqGMRBMFbmDKvxUHs59FTBAgrBGQg2CiNz7TvPov5upgEqR3R7W49FwJEPVME2iUAUFaxBnU",
  "key36": "4dcVun3gm5oiVG32TsvcKCci6QLWRPZb5gttBj5WzFAtUJk7LhFbkt6M1RPbsMsEEwemiiecBHBJCDV2zvPMnMiS",
  "key37": "2WrX62AHcNL4FkiVHeyVre4ZUNxfDLGSeXdjj51jijof7xE4eHUHq9jru1DZKJV22inn9DcckorenD34xPvpBXY9",
  "key38": "4m8k7Tzyd7d7ucWQymLzqoBnDvXMpXmctRY4sAgWC3UrpcTgmKqptbmFtQKQWUTbx5pKxaKWRyVSFEdedNM3oPyf",
  "key39": "2N6osGv8nbLk3RhMZBd8VPftjcv9VKeXh7VCHYdmGADeoSAR4mrhUJrhbqozPoDJiZXA5F9o8PejVJF8xudHaPtE",
  "key40": "3s7R7bnEJMb3jmWS1Q1aVBtLQoC6KKHs1XSvQA9KT1R4kpnSMkV8b6iDYiBfxActLs37FMRM6dD2fBSFrbE8udrb",
  "key41": "3aZu5ND8Nbiy8ks3XG47LTww22BcoSu6Q5YBYoydvFLZw36tBQsL864z5nMVVq48oTm3nxAsyWb6kUskUnkxsw3h",
  "key42": "32nY79QhfLn7tvFfx3MnEXiWMQxBeLExbazmjzSBi25vAES1VGp9L39nFUo17LLqsVAsvJjLoMiwYQd3Wq655r4z",
  "key43": "2Zk4tfLwZ9eqEQDmHNpV1T4F5ehc8JgBiuUmMEQtXXspptvwP7fSgH7cnC6VKXDTjP8SQZSq378dAbP53pgMLYia"
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
