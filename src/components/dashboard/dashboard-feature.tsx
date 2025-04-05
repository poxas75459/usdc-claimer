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
    "Bqivd3HXruYBTH6c2goyiVBUMAV1FQ4VKerxLT52RcP63aPoBfzZAyTq6k5TXQ3qUVtZMgsBTyDdko8cAyZQznc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58jjbNZbk1Sf44ZFHGeAU9hCujT2JNaFLh3wa861PjXNr3nqWEZjrPiN6SPRufFvUCcf24rJXBNrJ14k91P2rsy4",
  "key1": "4cFW18gBJcExiZDwVz4kK6cKeoyitFo1o5Tisin6aWFDEcEj696MKXGtcjqjt5paB3E8suKsgpC7Qv1CDXoRQ3iu",
  "key2": "Uym1jEqdqimRQzmcCMquxmZKfouUG5Ve7Vub5gseFYfAKLdHivJWQxPpCAQy3fAdgb7Zic46W7gWrKvu52yoU7E",
  "key3": "5sMEebSSfZh7vRWzV5bTgNCLU2Jng35KJL98pbE4X89nbkbuLVyJBUzCvYAnxBmgLmvQ4KEF4rAi9FWpXDvRXYcz",
  "key4": "3TxceuHiZZKSdFsUrVdYu8YfnYVg2ZQqZ9KmEB8LKS2qpQf2hham4n5z7u12BaZ18gD6pkhL7LfDjquxyMQJwpp4",
  "key5": "4cp8MAcCLKo7cRVFFRntsXp2d9tesMZr6Ncgs74EFvVcgLaWvGGooGp8FU1iLMTSPsdvpjb62Vdh2kErqRkMcKsJ",
  "key6": "guRtyKRhoVS9CpXYJHyQGCgPb2umBLsCash21MxHNvLoiJcDcnVnzVLGGChLCxfiE4Cb1b1MPGVDLNNJFBBZims",
  "key7": "eYEvZgjzVhygruwD4LL322gb92JvKrLda7yJv4YWS7ZavBDJscVVXdVsjAM35eeBzmjrdj7ENDmzYGGPrn17HHD",
  "key8": "4dUT6JhjpC4ZTagyMnggEQYXFGKVLENjxwQcSc857rDDi22ZpSrAvxYgYsMkzHToKaPBAcoZUdsQ2961oHDaDUDQ",
  "key9": "21sUYp9x5SrHs4teAo4RxB3z7DtmDFgWvt2fUct8aYjm2QNrbGorC1aSopKRgk8U2FoeDso6Q4rvhP1gRfHReqr9",
  "key10": "5581CekuP6qBdiZHWWuWetn42aEq7hPmY5WhZmwSeHDM1neqexCkrZszWpnAQxCZxzj7yoC2PJN8bYD4eTnyDqwj",
  "key11": "444jC5i8cN2mMtpJPMCXk2PrBtc8V4AWHqXgv9G9q6LpbhU6Pbmksku6BA2FNGMyFk6j7w6gwCkqPjKFcuzrK14f",
  "key12": "FUTXK52AGRGprw4cu7PknLVywn7s5hrT9MZLraPj73VAwuECCpGz8hutbz8YNEvcqVc7b3AXWPaukkiBPppz72e",
  "key13": "3s2LtZ8L59ZNB6juQaWq5GZDzBWBjtij1NnVMjN1Tdjgk2LqqTZyRFyLkM2wfjRjJmp72u2aZVsH8784qYjQdTuv",
  "key14": "5CMtKV91ELaaGZpPmk52Qd7pbtt5CQFitV2EynPtGCkZV8jA4JW3pN2mWoLUaoqxcdTD3fyfSNUVvYop5LPtnfrF",
  "key15": "5Xr6fWAtyKL2DwThoxvPYo4LMva9QASZP6VYTeSxSRQLLpozn8kJu5J4Zmnjyz8ViVXYHtKYFT2Z4sZ9zWbc1ybo",
  "key16": "2jA77XjGjZvjBy9eRessbn5qwveWwYWd4aHo3tVibqv9hDit4BMKfHXn74KmT4w8zyJXchDZRuTh9uShnqQv5SiU",
  "key17": "2ThSqXD6BKKUMWFAR6A5tWU1r9snrjrBF2xGau11yXuoD2T9zJ1Msx5pGvWpi1LE9spSCksei7aGzwTv93KFPGXC",
  "key18": "5tUUBRqFxUyGnPhsiC94Er1m7F8y75f5dRmEURgNJoT6FKNjJDMJwHFGAmggdS1ZKEaSQAbZWG9mLvoFFY1AkXoY",
  "key19": "4sSrBs5KKUrZqfi5AVQmRstswGq22AoG5jNFpLWw5UY3j8krAicJz4aK3MroxmW5juupjFfGoQjTBk6RdarZ6sWM",
  "key20": "5hyyTdvDipUgovVgVHHaHysBUe7P92Hp6xwCZZCzqsb9923EMQunwJLZBREbyp4q2PCGqnjS75C2A9MxszLAasW8",
  "key21": "5rgzocErjk9CXR857p65hh27skVoxMjacJNwJB7FbXXoydQDwmX6NJrCVrkk4GwZdECmhvcXysqwGQnw5YxZW8nw",
  "key22": "5rPDcbghPnoLKB1HEUEHVokEZGVVSqk2g2GQkL39BoZzGNjxS9otJ9HCjtjNjUVsDjHVbAwogX65cPWYTucxTPGP",
  "key23": "5phfkfsfJ56WmyauGpzUZb2T8NVJbue9Jphkz7GpJ7WN3Qc5pzipWLNeX9YbHwUqs6icQUA2ssqFLozenKyVPVpv",
  "key24": "4h5ijcgj3A7sQ1p9SFXhYYSMWtsQmdFsyL9V1rB8B3fCcmq2yVAcFgwHuW13JYyQaeZNgTAet6WQEtYCWpYhNrL9",
  "key25": "4nLLK8WsZfdpx2UcMiR1DRntg7NDA2ucPMXhv8YUNNXKCigTmg7vHVQd4w4sqoMX89cX3K2xzwGurx67unyqRXnU",
  "key26": "zwcGMspCZcUJQeS3rA1dGQGVZZRdZ5Duj8jqko2ca79iDQ78qNJh5FfUSDPWqtZApfSW9nFWzNpKGCoSs4uieRG",
  "key27": "2F87avJUSB93T6nn913Fts9Sszp1Cwf2SqyUF2HxgmRGhxfWpooanAgiUUTZhzY2Vnmrw9jELadtm4LDT9jpypwH",
  "key28": "2g1EpujZCnNAmjpvs8ycVAxcYAMnQMHFstegWetyRhKTp5ctoLS1Z4CFxAjwjxBNhjn3amyQ55rMS8xxc4p38iZt",
  "key29": "574Ytxzx5HfxRvLY4CZfK4WeQZWx1LpTUD7PeYuHvaGGToodmZQEhKSvmwZBZ2hid8Ld9aBBLiJrjpuXFFvNfALF",
  "key30": "KGz3FHHAL3TGfUzraaDuscY7ys6BbPG8YXuWoGLdJy5TkhNUEZUvBoy7vJ2V3pQo9kEJSgMqkzUT2yXTiMi6Fhr",
  "key31": "4TBPoUUJVM7jPpn35Vi3UgtTdjR9sxUTfa3hfCKVHwYJZ1b7EzKnoLX3P64uagtoB8W7zqcWzkTFDRMdN7TKWwbv",
  "key32": "4xsVXJuSJwttJFMmukUpnWhL3bTpw32f5sDR6MJJAqgsNcF2v1fpWRB79P8CFV5bgdNqB1a7huuD2o4gTfHLNwrs",
  "key33": "5zpuqZvW8xJxtkejbrNrReot9euxkqYmAi5YLtgTJFMqACw94ZeyeN7TxHomyhP47nem35ybv1ZpfxdWsJxDUxw9",
  "key34": "5YguVkYkixCkiXMRSfqm59SuNbUiqDZFi8h3Qkq8xS4sEU8TKToJSZ5DcPc1GTYjYHoYPKpYwtBYaH5hpBJKTAT2"
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
