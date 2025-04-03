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
    "5D3uMbQLPS7wQJC9tTz8WzUfjPXhLbDzGHBu87hfLeZvLQjNhaP7mLDBJhrauBt4soyMJjF1BP8HAPRZcN3bzqYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSLbzDeqTSugX7CuLNTcqqJ79CaGCd1oW7EEykeWvtwT2g3Gqh6biHcVpdLbcPzDC7XrQGsf3Vc9Q5f7ThEk6Du",
  "key1": "27SC59QWR2D7cRnbutcKd1wKJuNvXED6jKFDMFA5FpgZ2GMg5fb1ad6emuJUmWjdJTm4sDfLKnFjCoCrpP77aSL3",
  "key2": "5YPx6rTUYemgb77F93Cto2EChpfPhNZSCZhrAjByApXkBJ2qCnPQc8tgHNj6icfsyt9XbpHR2JWtGtHcz23qdYoR",
  "key3": "4VihCgfaAtBjJkbDGSTBMZMnHi1BdajnGkfz3iVZk7tCHED9UKPBSsAUc38s6QcWq52PkPy9SAiXR8eTf5h8YsMr",
  "key4": "4CN7hEVV2vE1a9qVWLpWWe4tZ6xbWxwqGao1UvKyfM6rPgPzsmGoNFqEkKBNK4mwejanBLKvB9gnLKXEmrYpSBAG",
  "key5": "xhNfwyecFMf6YNhzs8dj3pzc8K7xDhygKpAJ5BLfnaCJ2Z6zoJZMwSr8BKXT748soueo3uo8UyeiSMESec36gCu",
  "key6": "32uyGyFWhL82cLcdgSTBMTQLPVu1Tdq1TsAjsCn32anoc6hrprUncDG5X6gn2uQ49oYUt2FMiUW9xqnkgSQwks31",
  "key7": "3qrSrW9payToBT3UUayJWQyCfnq3og6thCqWVqviQHpRMf3rjvsfgF2KSnJ6ZZgP98RECUNLoTeZtYbEWMbmYFrD",
  "key8": "4kakQDetyKuTK5B8Y7Rq4gKfz7wdTXQSuXdkZEV42KVwYEkFsdVvgGiffyprq1BUcivT2SQAE2JhV2NoHmVdm8Po",
  "key9": "25PmguC8TVhPSzNppXMiq9XngBrpG4KkAjPt8duGXke59PYhw6kWA8VDcxhxFXEhQ6pdaKatxegwjJvzD6GU6h2t",
  "key10": "4eTutmJ2qA4FdHdjAt9T6qd2Y1at1p91b1uoiabTMNXXThgoeqxA69rybpfF4XvtDnv5E9AJFXX1Geb7XoRoZn78",
  "key11": "61FZtDN5MQ5LaWvhFkSdDBV8VnZ4ZS9QxCDQ5UU1RuM3ww7v6cPwXHyfFnBcoc8DckS4upEuQR6PbZouCvMuzhWW",
  "key12": "RZj8ktfKqmfsmutoDKNViqA7KwnKBoAeLUEJTsTYvbm9VKe9NTgQLmrcgvpTMUqpnudjMM3wVxX7nn4qqbCP8L7",
  "key13": "Z25E173jxcYJ2YJApsi8vZNowTGJXL53cqZftto1ViijP2vVRRDw37doGodSQtjujwvSb5jUMk88rdPUW3bbnEz",
  "key14": "21dckTzMMLUfuPJgtEmSFpxTi1PYnhnPCjnMGCZimCTRLM6Hz7n7dZgSLDtp4neJAQhmAEnNrqNFUsV1ecQSGZkZ",
  "key15": "fPdRhfAAM7DJwcRLA1HB1z6eouAaHFoESetWSspf9zexi7bZxwY6oA6EyWjur4sumjKVR9QBQThuAUa8t8nX3Ua",
  "key16": "3eh7jvvmjdaSKFtNM1en77Yd31DTpBfvKe6ZKjXW9BSJV6Qeiu8am2KjkDewZmkmmY69zwr7TtcGVhUivXUwXZGR",
  "key17": "Mbiwe4hAckNQqJqHofgRqhYNfd5rDNrJCPeF6HGtKbajfkxbSszQy9kY7CmqjEzsHssqmrZ2Qi3RJkH2w4Lpgj8",
  "key18": "3LGvCqeCExVVJddGUa4jsigkWHDo38Y7Szy4JfB6CEqSgi4296PbVAf4pGasdY4zVkciJ3svVtpGBCBrLmnG7pk6",
  "key19": "3BGnRKepDeYCgp6YfsSyupastsfYDFYSyZLHm2afFmvHPBDsmMSchSEPiD3hTZhWa8Ty4erHbwa5GEWJxh1mvuon",
  "key20": "23gQKhPAaoELKrmk4QLHiNaYUu2xSxCoVBfwx6sM6Ep2zv9KgsH2CCzSA8r5UZSn1616S5mEk5TbdFRZtrjqUYWU",
  "key21": "4acmpUUKiYbXWiixcNybLScQBn8JqgnefT7DBYcnuxyboY88PAGEiQUWPnZMAhix2vSFCZdbdZtnfVhgk5itgzBh",
  "key22": "38QDy8HuewKiN5DBzoWGbDWEAMs5VR4eLBXtRCSUwtK4eHwqknq9hS5meo1bNjQprQeUaaq7rUdgQtzozfb8dhuV",
  "key23": "2y7FohXqFe3ZwgrLf8rTbwBJdtYAG9bikYijFmgDqYEpGRuvCMoD9ovdAcQVCmbyTppGUn91P5e4YY4rr8fEcDvV",
  "key24": "5ZwHZqhTorC1rmW1Kjqt2QosZyqJKoNtueFQx9Xjgk5NVRo93CJC8hutkSPAgCcgC6VvjBQL8X7ohPsd6LTSXnr6",
  "key25": "2jQpL1rA559sLogHTXHC9aYkeVZ8evHnAz8pG4dVE6ic2voUJNsszGeiogXytBjxRDRVsQraKhysNJVQUsg7FQvN",
  "key26": "2ojxNQme5HYhPq63X4ohJBVjuo9KSG3TiWZ6PE1vTYuF4VCaFvTvVYPqDeRx2MPhWEmU8qiUuQzuBPfAZU55uRWP",
  "key27": "3BQdfcqoB5PYLe1ahXMAwnF8Vxm7eyXaXSHuwBGG1woGJrmzLANTbgyM7rRJapSCLijBTTt6gXmNG9dPrPqcu12T",
  "key28": "57evibfPL2sJbv2Cm8TJX28wmDB1cY4otGVYxKbGALtMpEstx4DP1Fn4i1URughc75QuYxgED8m2Qo3JMezJAbwS",
  "key29": "244GAh3Qcge4Zn12Phd2naLgqtniUMr8ppw4GdoLePNu7pnGrySaZE8FuuSnpQq7FubSxLUkKz7GgfkteCP56rZU",
  "key30": "64uQQ16Wc8c23CfzcuoZkZ8phPMMG4jrS7q9hspK86LGu67JdXtTufw7eUVX7oqQdVeCPPyfFk1wCk8oT52sYMXv",
  "key31": "c7E6M2vasRpQmH7jMRNhs783YVtVN1oPSByzkEVHJcVCPeS4XfHLZLjg2a5qmkrzfhWhZpYTGJXYmSTtgEKf8xQ",
  "key32": "ZmUVkxq3XdzvW4zdnmBnP6HLjLN7b4AgZDN5ivvJsVpzFbXiySBBa17qsVkizanJxgYnuBfBaxwjqGLhgDkFfQU",
  "key33": "3WwcCJ6GeHpVnZdBCBJjkG9p2UeBn82jow8nK8VnVAwvEBVSg2RiNwPscNt2dW8M7rvaix29fj99Zbzy9YfEYeTc",
  "key34": "nKtGgb5CCn45zFzDVqCSb9x3MkJSWjNMRVfWbWfV3rZoyz8oiLZdKDXKMm12Lhmb7WNTGyRzeURy3FcGWxqKhvb",
  "key35": "2ubxDuuGtxpmi4FdqgW1szQJqJZ247UkrKA7zbSkmy1DaSsjTEzkD9FMTN9WeZSo5QBn6TsuihB3ZXQLs3Bi5xyp",
  "key36": "5SKzkuPG4QkqEgZt3uogvogVtQC9GewuBexst7uQquxQjtaCBNVwrdULVXazbMRCeuz5ujTkbgigFccRoyxm4N2L"
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
