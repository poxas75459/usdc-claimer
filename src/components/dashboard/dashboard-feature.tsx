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
    "24fWkHymuR9bX9pK3CYyoBSrioUAaepexuAjNRqNMcRVTKSi46j5aRZ2BhsSG18ofD3KPCmL5nkujdXKKLwXTesn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wvpJ4mKJSV6APGWUdMjfPK6mJ3tyR2WbSADVWZCXYPqXnJkLjN2pzMXqHD12fqkvPXMArmGb5XXrYfe41jdwjrV",
  "key1": "4K9upVkrSMSZZiCSFSuUGzJEVcgRr5L4Y8UL1UoZzav64uWdqWVFTTTFfqPRyUYD3odefRziknjNyydtRc8XESGa",
  "key2": "3fTP1tkNqHkfg8vsQ8zizrddyREj22V3DESNp1dsspm13V11JDnHSZn4obhBVpPY3eahBvb6adqLtvnjRDjBFEV1",
  "key3": "2WaHog3MMLuoNLkxn5fGjYAqsvRCJB36cu71MxWLV4ugobC7LtGNBKr6wSGfrK4b3FimJ2hp2vBuLhA1SZ7KsgQY",
  "key4": "2MbwicfDcP7KeNNb1rbsDgxKR7VyEh5MK7ff8WJawzjNHzAwUADEVDRX7iMTGwwcxt224WFBphuv6GMzkduH7z2V",
  "key5": "54D9YiCv9JCY8BjYWTVgA4isLMVKb2fLydB8UXscNW657pPVQsoAWPEPCf3yEDafsCNSUXQdzPcUwxPov7G9VWD3",
  "key6": "3tWJgDQJZrmCSvFHMDbeHyJ8hW3xSMdt4Pon8FUfosFZvVkDWVGSU3u7xN9UtPg14qkaBohaRaBfwzhdLeV2RXJk",
  "key7": "5wsZGnSptdEoGAvshso97u6msosMuRXSrfvy6gDdg7Qd9G55b94Jy6A51G2fpYSJLoUqjFdEqykD7bcEWkRY6stA",
  "key8": "3mrqBjv6PHQHuVaNi2hNwGdWMrngVUtW8ivnF8vxd94jkaUnSXAb3HGN9KEYK2wNWv7JY9ukuNixXYS1JWgkUiWw",
  "key9": "jE8W1ooPjhJejbMc2rqaQw5omsRxJkJNMpLtiQ7yN4aXoaoB86tgRTPz1Qom5uZLwiTUNHaK6wQdWXDoVo7jBrf",
  "key10": "46eCBUEXPqmf4TmySuu46Dh8jEZvf4sDcDP3zme1Mn2VJmWJwfxPiiKccJNmuicBMQiWkUgxQ8ymCqRac1LqX9mB",
  "key11": "4T7YekSemGdkeUBdMEZsDnzBjoex4f4ktjL76CnFXv8D8Kw3SowUGBqxuQ3MKqrDdc8ETHPnzgKwAi2ps5ccAnb9",
  "key12": "5XaH7VEGjg9xsp5gFV4S5BtggBfPvcYUE3hCEkgCkQoQhZiKuooc7ZzBN9XyTMuiXikQwiemcdoCQYuTRgbd4rdo",
  "key13": "5xJni193MScXJiN3p6zgg8G5SQJnfLJCHCoiNMaxC5v3rg6xg6VGbxhYQSaAwBLkqVxdvaQLmMxhWipJkhxwdxN1",
  "key14": "3YBRFKRtYbEjURyvo5aK8aaBykf6iNdgfy2M3QfAgDFQtu8ZfiHURkcUWSnTSp8FViLcnZvBtngJxjpVtTAtxr6u",
  "key15": "5ofNEAkQ1HCpS6C2b5ys6ydZX6NHMNj4LFvRAjV6XDjuhSBi63xNA5B9ikQF5kgszZbSRKDsNbu9EKVHu2wwSc7K",
  "key16": "Yra7S7kgoDLfaLi13zAsdc6dWEF8Z4PctgziRbwTQvQrWRecB3SJFS3DEuQtpffCipLscXAUKFJTDh1KpbQinUq",
  "key17": "3DcPT2dyCTxnRHpnxtgaMikerHiCTiTNabvLGEXS8aGzurpEsLHDTY58R5CVBt3FHagAMPBQ9gq193KsZVHmsPsT",
  "key18": "3RDpTUPe3TVEyJsckdcCcxA75AiC61djPs1Ez9sQroQ5y2Vs4fseKdPz5H34n9hJHNKkp58HxCL17LLDGADidzEV",
  "key19": "7K3zo9pXVJC1h4GB8YdbcwXWLiAibmdhf1joaAaXcbLdX2MdYcj36gD4ZcVTPXSowCEt1tMtSs24KGc3pgVtLvR",
  "key20": "us3dHb9K1iH9VX2U38CKgZWcJKymwtWme8w6QHDAxpRNmE7QNcpwzVE6XUnvHtUQq8rARPQGzYv7MgH6QZFvQ2C",
  "key21": "QVW6wLPPcuYa9mEagKNRCWu5Eku2j8daLUypo65TYfePonAL66CmDKTQS6i8MUzUkVpCktq76n2YFEeyYGQ2W1Y",
  "key22": "3BkXBW8o4St4nHajaghDqv8LUM4NEMXmWBFQKKa7iQS96F5iPn7sBptA88ubAUSAbrwLK6prggCGMDewsY8F2b2Z",
  "key23": "5ip5SsNxYC5xDPVLknYQAaDKSEGqB1tSGSbeQjy9rSbACmsBMUn3nDN6qbRn6ecZpB2TmYrwA4G68Cu7Gz7xBoo5",
  "key24": "5fVoNrDQ7xQH5XL5cp3gtfy8f9mmSQcZULaidGhi1okTqQpkTXNNkfKgUs9gSpeKQV2mpqftTF9rgFEwnRG1DteH",
  "key25": "NbvLvMAXBxK8pLXVLvtsMYAKhKvk86TwnHfz6HJmNYd4wNzV7cFvEHoMBuM58kCa82HFfWgwxf2g4nKgqtmyKa2",
  "key26": "4CVWeo7mJXmVosPWrFwNnUhdn92Z9uP4qhxKeQL1hZEYB8wsfErYM2Wtovxq61fF1qtF85zyXCeLb3mAq7GBWxjJ",
  "key27": "34eEHDr8RqknLQYupwy3LzCUb4MmATKPBKFogMxDjmfaK9FMzNCtGPtY3DY2f87w49J2puMAER2QXAfiC8kDSzZy",
  "key28": "baHn1o9dyDuuG2PkpWLJkERzhLn4CmZ3Nqoz1X4qS1iCvTvpMLZ3rEyknE3n4hZNoaBnNMxJJccz5nZYtYdx7r1",
  "key29": "53PMxMwaaCGiuYmCPCiFuc64iNHfevH7aAqheUUV3vWGCWNqdhoPnoeyu1dKqvyeN8MrRPLVdti2UKjyRpeqEBdx",
  "key30": "5CAYsA7URMTVeaUGxFFNEEzgvUdq9fzV6MnNPar4Aquz4x66AbXtzsM9QZFVTmPei6fia1B9VaZseENEo52QAG84",
  "key31": "3QSEN27wHxHw946hUj9LRHsYDeuWNuqn4pyNLHiUHcTLmqvFuxCv2faYFSxm2Luj7eXgZ44zd3aPkCRW6EvWTVS9",
  "key32": "4826CFvQY3H27KAgpznhJRBbHZW8ZWHrq6o5TTABQv1TDKPU8vwhCWUZtU52DBm6F4wjbp8dNrwqk2bPZLsrwmdY",
  "key33": "3AXCP9hEfboxurmLrNEGWnje8uFEQSd3fdtVMoVSG6AcXhs31x9oh7QAtrmGLdsgmM2hL4pt4Fpfy1vvBDhx4rZP",
  "key34": "2KtEwyZpKRmG3z6Ew5HMsnBNhygGNfb48WYBg41e4S1pnhopaY36ZitLRsg3eNApy8oCzZoTCRzTmBhGAiuVziVG",
  "key35": "5i3ePdiGnGqbUDBHdWaDaQW4fzTSatC3ypRaLjrKWwHzk8zHhgD3YQBiWqrHNMhtT5g4KvZzxHgmf9d67P2qGugh"
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
