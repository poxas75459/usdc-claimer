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
    "4qyamWeHpepztLEuiTaYQWDH2w5iEb5SXTTVjRxYnpGNSMiuyVW7Sh6VX4rVTJE9jhx3ejEmGKBUZPeV3L3aMRQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36yJwaG62Pvr7uPti1xabi4GxeLFKaEZyZWevc6e1pA98zjY9YNCnZHVU9uaqPr6aW8YMKLtKc4Ty8RF9hLf1FWr",
  "key1": "jRfXtajajZUYeGQ4HViEA8ujcKQ34usCAQNyTs89stp1YVVnG6UzQwF1KMBcPdVpmsYxHuD2kwBZ13F4Wiz1vyo",
  "key2": "tSDCog3CbExFph9Q7S1y5SzN9AJvD3HNBJEzNJvSDpkbb3f5GWJDkQKATD1SyjRK2jQJv59Q4R31C7PaDTQXvSE",
  "key3": "4Fec6gZes5piAjscDJ2V7LaQwgLzF9TYqiayXaJCrCiebbsEGhWjVWCoA2uTKg4ijzs3b9hfmFBFCcersjt7stut",
  "key4": "3kvfgaxmVzXNwbfPSWGnG6h52YxfaGgGxxcCzr9eyZDDkDbeEJs7P6ELthHrP1UwMPdfPEfrqy3jJ5Pzr1xUTggh",
  "key5": "52LesysgG2PT9U9Xoa3FXk3k3TK9actWH2AqbAtVFD7aEJFSSK3nziGzKzj2hXTbzJy74wDDxuzyeuF91v5Z21hB",
  "key6": "5nzGaTzBUqnjA77ZtNqAWzScRbnhREYCRBZ8ZmaBntMDj1e6z2oDpe8DgkKmo2zLeitgFWaMQTaChF8yuGB3rFx7",
  "key7": "3b66Jc3e3riXKU7bQLMHpWkGDn7gLWLDmXxxwcLnF29DGMKpZ7pQzJdfuuTPZrCs6qsmJGBokfbvGvRjPRHHgQvg",
  "key8": "qTpoV2CfURCaKcxVfJZyPwTEJMS4Z8jw6fd6tpirxkZ6TNmvVCmuqBBC5EoYSk5imYUajtpPttSD8rnhnPpdyRN",
  "key9": "2Kh6eViHrjuLBoWDUuZ4rxxkU8WAkbbTBwiB37a3psMc9YQAxPJTKPjBrTVYgseYgt71j2QaqWfz579sKYQntahL",
  "key10": "4wppHzWCDj8cn9W1jFUQYQixyAiyA5RKbmmKdoaVE68Xbn2SU91YskuqcZKeZwVk2KMnguVvBLWqK4wLB7igqEVE",
  "key11": "64hguJBCxDxuqXrpbo3HFoPA9ic3MKJs53CaLVmw4nERk31MdU2poky5yDWeuxULBQ8UK7f4tLthfS5eE6BKoRmm",
  "key12": "5tFxeAEh4JCuc9jZeLgh3k997EGNFAtDT55EbXncDwrSmnjX7E62vtMt9VkcqsqeMZYkd5CAfZwBshi1ahQZPUpb",
  "key13": "2mTr87uhyYNkpcLGHhzGNKz1vxpcczEownzoT7BPmBcARFiPsVsbEVGqHXvUimCTmXHxto3d8LnZzWNj8GF4DxAu",
  "key14": "2guRQ1Nt3v5bF2rDJfjmibRhNJQS289jhWfjtgneo9YsFZ5pSXJGjSMCrRwRxfj6qNKUg7HF13C2owk52jc1eB9Q",
  "key15": "4pc2Pzk7SLggg522SmYcLGyjTt5zwFhALwznwY3wuKX1Nf3QZ7P3QdoS3MVYhhkARVGmFeyCtfXZ1MB18hxUVMMr",
  "key16": "piBWSc19q36qurAtwgBCJ2YSPRY3Efn8JWQV2HMfAPJQH8dxpm9pkXZSH2DFCmiP93S9Pdsnj1yj75ebRv5HMLE",
  "key17": "rHmRyiwqPaSvUK78zN9BZ3u5FjB28pjK2PUPY5hG97kBCae1vkb5tA6XWMCtMFDvt8RLYJerHKW7t6aDX3X3WAU",
  "key18": "3saqHXnia4atMG4Nk8UiAbphsHTdNWiyaz2Psx3B3zU4TiatPCEc8UQtTodacM26vV2ZGMVYMzq31b3qyPFvkv3n",
  "key19": "3zW1kCqBqcSS5VNMwrPgsPnbeRMUhxBriwvjDcYRwToBtcueqeT7ACXaks4rLXivTEKokDHeD7Ng5Bb3PTa7Wo4r",
  "key20": "21pmqfDfZfkWnwqt47EUK28ckUdqS89fxNhR2rSBcaTbpTXyAThDCzs4UYWuweEsbAzDWa9WU9i9neQgehsDd8FQ",
  "key21": "4C85vURnrPNYLoVUb5YHNe53BA9zeFu4oFhkmy8dYzMGYgJfPNARgGQ2FPgQYKsKWXFDwdNkJuRf8HjUvcCpHEBN",
  "key22": "4yMJPtnGmNU8EdN7eLphqaV4FxnZ2Rnz6Ye85JPrsQNXVLxX2DdJ1bZUScMU27uXpMgRkzTMPV1w6NEwqJnvYyFE",
  "key23": "3TUEr2ut5K3mx7Rn6yKEm2Lt3Tm8nx8ZoP6bkxiCjK21d9UXUaePb3cuVr5PDEMT3MuTgHJUeXBfKJJW3y1jbweK",
  "key24": "5VSMPJUSDhHKBQipJG31wTxSCSBskz5AR6mKw6za5khqDZfYNnjpTgmQLG649tB6ZpdSjXeemfDSnYor9Dy9VVsP",
  "key25": "35tgfQ4QaYwKkfAHndYuRSMKSjddzc43J5q5eJxcG6Qb1eYxMpYSjK95gxbMayBhicAXJ9Uqx5uzWgcmv5b2UCVo",
  "key26": "2h6DrCX1DZpdPNqxTri2bVBhdsXuZsGE5W16fVZid9ANdSFYgZ7tPpw58zoQGQRmafeX3WHCFYxYgBoQPA2SwkGa",
  "key27": "2gSrmdPA1rNoQeyhj6sC1wcH7KGxqjK6ByuSVcziP6ddbCydKe8HYPiBHs1pzBcktHPU9gYncJ93AE72HpLxUB1h",
  "key28": "5jLp9Vf3iiBUUwr39kY8XpxCjWWHuafPkMUubn7AgWkXoLWtzsxAPoXn3WWd8q1cx15JuCjcsCxsZHuYqxjEpdaR",
  "key29": "3dRRaBBpzospTt9sLnZLcbh8EwVUYVLXroGeJDoZGHcePkRxNWHoFPEjYKsXFbutKn5F3X376oj257W5T3ZhyH2c",
  "key30": "2BDmYYTmbGRMcSxSBQYT56b3S1uERW9WhxgsJNBtzTifsoejqyHBbjyvFNGid8GiWTJzRkEmU6kxnqFQGBCXhdu9",
  "key31": "62MeD98aKSmgRyfyxATP7irZoffMcuJUFAmBaMqF4CGBH8GMHmPBmsHMbjqvS9bnhztNjfPmpjr1NHAWeEW4CMu4",
  "key32": "2PT3oQMtJHsWmEfSMyaUt3yZxmzUwWmhbmzuM4XjrKZp4aKdMsTCzMsXbMJf7g6p28irKCS1REdJCVpz8xJYfvmi",
  "key33": "55e7kFKxdA5p5WDEVMGq2NCgXZvvjaXhtdJa9gi4uSDSWURpYwzQXQqCWLLmu3tCSdTLUjUr5eYBDdBXTi1Bjof9",
  "key34": "2MFKxvUx6JHwqBtCbayyhWnMxYzJymyqkk8tgfUb7iSUwAMsYTBTBeXj6MqVNLDbqVfTLmc9ApHK2haSEEBrrKxM",
  "key35": "3aPaRZRTSP718UYtMJM6QXwPYYpWb1hB6zt7BPAv6AQRxhvAWfBnpx96exFBERMBvCm9LeRBMNkv3q97gxKptf3V",
  "key36": "WXYiYJht58WzBswsqcZJvXn6ftfLrXb8G5c5hgH5Rk3w8oAv2WcsiQa8YmundVoufnyqWfyaGDsSetQFD24gkyo",
  "key37": "2on9noKsLsbfxtBamQLe1nm6LtBiUDyMSmESuEphPVZeBAkLoSZ6Ndk1AS9fHGxcf78zRjupaYwLWS8F983hAudo",
  "key38": "47vqY1H1yDjKN439epB5T9khvCYhhQcjp39urA2EzXknskogBCnBFyNbmdurzg5JXnTtmhUEbP52u3GusbFMSUmU",
  "key39": "2Sfcyh6RAkwiRXVLV5UpXYeg4GZhuMGYEsiQyRRTwyLjyhwQmQvrsXhJD4FKDFNq4gD39J7jvrrLcVrdpD3YwxjT",
  "key40": "tzQ5dbWU11FwsVBrovQq6NLg262Ua3xzF3BZhpKXUaJXKJ8wbobY3eCnEQ3e9YjW5cCRkgkWUP5wa5h9KLJoZ4J",
  "key41": "3NXWAzpMbnK5nxhhHxLu8mT7yzN627QBuwtEqmx8HFF66AxtVSYNFBxS1PFQMTdn6nMZB4LjSDoc9QjkGFQPAe38"
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
