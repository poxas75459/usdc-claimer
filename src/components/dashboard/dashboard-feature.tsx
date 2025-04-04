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
    "xVypxLcygaF67i7nPg23EgzpQ63s11eapCBFgVjxT3mNQzx1uoZLRRUvwuLsJt5amPNGYpGRiGNH2vRtt85dS4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o62dwTf8jLDEoLLoaHrhwz177tBF78hdwn26weB2tedKV1yzTJTAnA1JDxsyVjaxWUuCseQpfSc57tMewiF7DJ1",
  "key1": "5kv75JqahSi1MDtPvcyyaY9LSwMEZEALTjB8xt7jAwRgWwfJNaWHC9kwdqR58XYqdVMMwyHV22uqa2iZECqXZQVt",
  "key2": "3fmgGdneKoWsD2X9fDViTKDBF7EcHTkAdKBtuH2E4bpRTDZBxqtPDKy2uEbwsLhbQFTUSYvdQBFEfWGntHrYK8TQ",
  "key3": "2tsPWDm1iwLEnNjmnGSbLT42oXucYFYe7eHaQSGSJzoZjvTULe9dwJGCZYGiDhoWyU7f1YdiEY17r17YqkqJwSXU",
  "key4": "3qT2nBcyQoixAMpuMSCDCAW1vcDyfdco4UACbgASh2523oyVKnbp6wAa5y4REoP52goiqhXmbVaq2GsE5HpfTxdv",
  "key5": "4RtFiDGvVPjoj6gf5PdTrizj4hpavA5LmA5Mq7vsHrsoPWkg2jode3EDF5vm7dBnKUv81P78NNUTpmzFFsSUnaXL",
  "key6": "3h9LwfACK1ATut64C772jaGBiX9ko11WeX9XmZS7hB5K9A6V25TMdATCaoYijXWFnD37EgjeZ4MGiMg1YoGVJ1fP",
  "key7": "58sdVfu7N6sCbNn5Ynm78wC5ANigrbgiybwrTKejqUQn77iXShPfsi7VdwvG5AidnasXPXXjZMj1U3dggV3ugDJ1",
  "key8": "5LhZGavR2gXJrzSD3fwmEKi8xaDpKKC4489ekyshfd1zXhpUR7NmCdLg2vi7R4nmS53CPyBojmXBEzhqxvCp9DNv",
  "key9": "5Hp8w2x2riYHajZSL1XmuEK1Ld3THqHjfqtcZNZvhgqgmcBKziNR4Nj7Me1pCGDynqmprHtXYZQYrAKnqufjERrv",
  "key10": "QxWdtNL7gkms1aZXidSZUs1nXGA3tBe2B3jXwWji7Jb9CUbgmQkaAHGkMQWzhdQbzWKiXEHeF8f5w1AoSiV1fzQ",
  "key11": "5FHS1tiquhZZe5vR58VCNmEsQiq9ynYZZx5UY9jyP4wzPWL2YQyC5fAkMsTe8ZYuFhbNHqSXWxvvaHLApUepS34e",
  "key12": "2nja9HzmcYnimBs5qpSXanrbzbpCtpgHfnwxByzjFBvvcBTJLmeDVvLVxraVTp6Nf8KkZqTfFdhnMCqZ4yBGiKMz",
  "key13": "4SAd6kLayaV8eGu2T3giC4Hpv6RhDd6X6YvCZpdne4i2HDZQzedKYUvgddu6LgPEpnLu3BpKTYMKVNmcrEQEs9BJ",
  "key14": "4Uvcs6nJbrRg51zsSvas8eaH8RgTnMFbzeXuYW4BPgoXW4rogwqNCMtHA79y8WTznP8w7MgYpCZSeLM9MNBEoh15",
  "key15": "5x4A7NSCkjzmums9Yp4aLjem97YK8LHaXiVKmgcvRChEPPHRzsBDaLewGp42NuN3gS7hADBQq6iHvQjdTqQm9d8T",
  "key16": "oiVPCamsdMzRodaaum4Q5zyacS5Z8dR4aww6knFZX2qBqJRxhmr3yvE5xSatRD3Lk3etDH8XGrc4B2yvHuQHjSH",
  "key17": "2cXKhvd2guxiCrSpZJaBjGmhRcpm52XCQ5ZDAy2SVtubFHokE9axkGcZ8A7pqmQtUsGuuFz6RHep5RTrSH7mtogy",
  "key18": "2zytAYBErhbe5FTh8UKPAf6E8yex6rxWnkUaSzjtNkp6MGx18J7VwrayB9e1W8h8pGdozDF2iiXH9NvdPUg4mRm8",
  "key19": "1C12Cg6jjbHbYe8KQr3mEV9jho1t69iwWa5TgrpayD9BjYfXbHZeRfUeP8cupJtM4WktQKE11S3gLTGZWememWU",
  "key20": "315FGZymxGmRLvpDwDFW8texBWuK9jkqxMLJ622ti3P6YxREDvqkrYykENisGPtwmLhkwTpFWpwh87WdshKCXjmZ",
  "key21": "PracfYQS7nFUVJ24xdqMVuYxLdgc5sUdTNuVHQ3cqGpyhSvZSEFtxex8LSeV1b4PmjV1L4jfPBcvhRdg7roQdiR",
  "key22": "3SAPWLEoGVo86AatWJfJnTc998WZAVAmTi4YS2jPP3gZoV1oJh4FcE2hBPrVTGrUeywXju6ubDorQCx4PoyW5Z6a",
  "key23": "c1SXEgruZ1HcLBQaECdXFW2mFtYc6JFvWW44c4szV4r6rYZvrd2s3BXpiEKPHwEcUVCvC4TkM1bmqBru3rdGume",
  "key24": "y1mfQvx4NyTbUddrrUgiCENNEDetYZZEe5DBkNd1Y2yfabqKFTdEB3ye76q3yySp7gmHbcxgfav4DDF3RDRzfoX",
  "key25": "4NLsS7FbhmJPSSVi86A9Yw3wu9me8JPcvJfHr6ZMdPtcbLTCXn1L846vS6AYgg4t1ZhLiST2YudNadDznYDZWf15",
  "key26": "2RvobdujSYMvPhp3rkothFqLjZYaon3Nygi77VBjmaAcGjqy73r5V23dy4JCB9eFVGGifXAy9mqZn2oP49THch4R",
  "key27": "237MnfZDfHL3SjZaNSSPX7uMzkkXPwLXYwuxQj4YYoYB3XJ8CZbyyv5ndJHwzVPdzoZhC9N5TtZG2XqQvR5EQg9S",
  "key28": "Lbs6UaCAiE14DWwJpWWsW48YShStdUh8AmfptJUAm5CqpGEL4uC598vicFda1kAxEveDwTKBdxgUM2PN4ReACyA",
  "key29": "5svSqjYrq3YiQW1ZZM6RSwadoEkgCdk2QmxipMbWe6GdzRSg1HMAwgVgPcu7PQkfuH4daAmHHKjiNhnNTVkFYjT9"
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
