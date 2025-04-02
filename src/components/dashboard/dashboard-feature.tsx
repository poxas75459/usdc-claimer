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
    "2afTcRmJBqPF9RCaHddXFibmqvMeXaNG2pWEHaS7q3aVDqM2Bgx8pJiTKexvHAfJm8EHR3j1riBPkvXsP68hYCZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54BzApRutKeuUc3hKsbX71fgguQY4ZHkTvS4bW6FusyG7AhQzKBiJ5JyTvdYHBkoRPwchpsx5bssXcjk62wF462D",
  "key1": "2jcAc4EqEXez21Bagh6v3uhCh28i1xr7X5jQkMXAJ4w7d8CWPB62fNGgkJQFFX3ZjotJ52Snr4fzYnEi9o3Wm1ZS",
  "key2": "4oAgSMrL1GNSYFQw4kGwqp3vMWSkUPiHBCXwa24yyovbUVcWnPX2yUG9YfscWkoevpDCrCjEumzRYpAjaQnFmjU3",
  "key3": "51vTuFwm7Ki6w6EdbX7ABrgeXDUrKJSJQBQMhmwCoV7yUG1fDWhSgcS5yZVE4nZv1XYHbkWciBGPFxUGBkEyeFoL",
  "key4": "3r9RvwVvjDhUYQecwhVTqW7QCNFrSbAAFaAbsz7TmGv5WDT2KWEPvemHqtTUbnSXUHa2WoXixCc9TEvsp6uSt2rb",
  "key5": "4FmABMbBM3JBhbqd5L49NSzSzpmTb7TH3SLwHrxRhSuTRf47EVjsisHddEx5dLxqxVyJ6JBj1gk5xi4TJhrXKn9P",
  "key6": "51XHjvGgoKyxo1Jevv1Y49LXgBwESuWCz7PLoTw3tvQaSnV9zwaSi42JBRRAKJcbX5eC2wLXsBEcGLmcHEVxu7Gr",
  "key7": "2scWbd2neaBUVFq2VBXTzkNYyP4a9iEhbNEDGZ1TcjVoZ7MZLi2NQiaghAzeHpLThiLdB75Vz6SPJ68SYVVWyTKy",
  "key8": "2HDmqvB17BctQH4XoxcDZxeGsjFiRf5rq3qM2bU6JtJafiPKD53SJdMh4LqwCoj3mCZDSGRv87HofRbvt7idukM6",
  "key9": "2Uinxg54AGiP1Tn8aeoVQkpzP53TCBrpKByR3gkebrMEDZAN2mvJ8TwU3xTY1AqwJUNHgP1gH9FBrCJERnTpEdmt",
  "key10": "3rnvj9unsTxVDxDJDnXNUdtwTja5WCdKhJjqfgjzR9Yfq8E7Md9PoD9EUhfhqVQKEZRwpkcrDHwAr5qvsQ31SLzf",
  "key11": "2cGGTQNrW3ZmFufg1FSiPRrBofPG7e48bMqt2RqYX6fXwjDae2D4baSevThcS59AA1vUdc248hPYCNZhkYiuZqiJ",
  "key12": "2CEKgk38PAP2n4tMvpfG6eM4cf5e3euknGWKLVQFN1zvuf65ZRjZCoyxjZiWjUEHyiZ3dVRoGisM3fnmTKvXdmvS",
  "key13": "4nfojwSMkR8CDkMfqdCUMCVitWpiQ8KgyRfeb6jALvQcZM339MhuQkXQykZgFoeAmdfQvcBo6YcMFG6htXQUK3G",
  "key14": "4m3VVe2WMAK3LHe6hcZzSiDvfqvGw4Hpjvd5xx5Uvf7x6WPVN3cGY9Q27iqg9A1iFVyGehj3J9pi4cPLsLVsxPk3",
  "key15": "2DFhzJkhyZoMzEsGry675nC7ieraEqQdphKLj3vNzNZMzLAAy1pRF5MbKAuwvquKPknBfTzoPEnLP1iPhgzaBFyr",
  "key16": "4R1Nx345Ci1RBS6aXsoG2x9Hqy2JCuPQvHQmYgZmL45924eFTTNbSxJHz7hwjE3XBPwanMghEWnq6Um52BC8ZTUf",
  "key17": "4dvNLvEo6oyRRjoZ9zu1SV77duCtaw5ju9EWSSvKSZWwz5nNLEuCjuCLqVvFUwJ9RHkqDnwBgkqg8tDFGnkcK2mt",
  "key18": "Uy2i2H2JcGbUG8RGQWe5TqyE2T65XDncp5dRC46ndwsNiHwmEp1KDuUzBHbFGpnthHM5trjGA1zX2Ap7GzuNzxA",
  "key19": "2zeLSknM9aRZ6dcqZSVYFGdQGQSV9ZN7JZKa2o3PCxjzZStHWHuJ2HR2AVLnG7UBeVpD7dVoVZb2aCEYkKWC6uSs",
  "key20": "3vCrPgyWiDLpbUpvfpYbfrTSxkw9fKe38k6AxbcuWv1UWKbnqgocRdUYKbQKutudWAd92a6vKsdk8UsKdxeSYFmn",
  "key21": "4kcNmzHdzs6BgRPeDkCv6vQrTTccB28vWH6Fsd45E8uyTiTgCBikdHUqFo8HwwE8pfkNTSE6RVgHPFiYfpYZFhxV",
  "key22": "2HnAFMWLMvKwroBfqt47GQanyyjDRbHZfCXyBRZ9juCSg27cuR4zhEfk3zbNJJwRsTjf4DRJYheCkNZwgV41tkyR",
  "key23": "2EMio27uxY6Lgk3S6kKHnazuQyt8oBNFa53woSrAgqefGG3BveHVwpAqYvjofjGWyw3e8peomkASHmRUdUrw4sAP",
  "key24": "hLJLXQ8T6Z8QjKocNjw1h5cNqocgv4VqHZYv7q3jmtYu4bTae4unTEKAskww6Ptj5LPeZ6NnTb8MAAopbugT4iH",
  "key25": "5HZaWf92RKVHAsY9Rg13DN2C6X6bEqdzSvLfSFiveKQj4jwWxUGoCbkPGadAD1S9RSqhPZPQFkwKFCdAUEAw46mk",
  "key26": "2YD133cEmozHrV2Ries5Gq11QTTEoxFwrSNydiJWcUGyMBhWLARrE3i5jyUiLtPhzt5fFN1E8L2SyVgHLvFwZVcN",
  "key27": "2o1pQ3oAs9JGfyvn5G23yuUo7sQkUjkKHqBhF8h4CSkesMB3F5VtufASeiRfzBJPeaWzxdoRSFGTb5qavw6zsNqp",
  "key28": "5eXGxVpEnY8Spm1iWUMjy6ezXhgA4EqyuKt5rpKDiL1rPhTVu3PEzeJvkcHLi8fsiaUEksFZXnfVhXRheAqafCbi",
  "key29": "vpVUG1cGq58rUmtepjkAXAkywqGgG3SS2qpd2sgu4rvNUotp8RiHuThnxtL5sNq1MsREGSwuRJRPex6vq6L58Bm",
  "key30": "3tVPPjpo12bS8DFyKJ8ZETzbkE853jwGeXezfTm8cW4UQaQ9bc8t3tZbg8MFEp48sf8Q3izHgoyFYg3UDTMnNRJY",
  "key31": "2gCeNQW4e5Ure7KQhHu2qXwiAo3WdVFqFLwkvqpePUsvsNXRsutYJT6B8S68W8A3Qa4tZb1rhRYeNAudj8j3L41E",
  "key32": "2yiTtTGKoJHapCRDaWzjNSjmQZigv44vDGWjBUjVD62ZPf54imBCkL7rykLx8sFnYUBdMmm4wr1LHofAGoBJSNVe",
  "key33": "35oSQABRagADXbNqEnnT2QeyojESnnfR5RYy1pvwLcXr7o9KTtLsDWWS8YhGgSRaMQ8da9bu8V7dUWvrusBU1BHb",
  "key34": "2vJ9yEgNphDZs8Gabi35oyDwMwL4H46WrQpNiCJt8vieQguK1Q9isD4z9csBduQgFC6E5YKDeANownxL8QdpvrCq",
  "key35": "5aGyKD5AMMMGWEgopKDmtp5z8wqJJrfCWw2HwDduK7RN31SFeRLWZRfDhu6BKYx9ksTs5dDPuFgRpNHZ1yk7XWrz",
  "key36": "35RBozujFu1NsAsdhJNZM42rKUNFRPNeRQkbjgVvZ19XiCZcnhhwYGKHw27Ljyy9upiAu1k8fcsW9gcGj98QuV7i",
  "key37": "2fAtqu4u8VSVvQerETTrtYWa8RrCzfnvd87Qb82YgEPcEBT4yk9VbsA4BtoT4Sp4ytL4vmjcHSKYhHykHpaxokrM",
  "key38": "2PuwQt2saNcSoVByNzedgVDSgqChspzzeLZJ9ePTLFaGdcP5eF13z2p5MT9Z6qLr6TqBzJgXNkqZmRdpPZDKiv8C",
  "key39": "ePcR6R3dBfPUxANwB6yAn8Kp6r2MscJMtzyuji4pmFtvYLSFFMMsMbJS2YjHoSwVhfcQtmAFrjpqPbz8LYpbeti",
  "key40": "5Mix6NfMjrowycWxFn527suZDunxfTwi4Au4SGkuemBCJ4kmDPfvHjyqxmbNp5jo2GE4EpMU8vf2F3srD8iviJs4",
  "key41": "3krKPzF5B7rFhe6P2ScApTaFRPmbnZ3hFBNTC5yd47MQgfLyLTdNHZyRFhVgDbK2PLYn5jk1mRfzoqKitF14REi5",
  "key42": "5YVX8CFaYjF4rva3TsBgxnjd9NPgPGAJ7H7eJayYgcxpiFNxQf61JFV91cC6QQGVEvaUtCmco6d5yaQLEsQ74oFB",
  "key43": "2NrHsu6ViyapvzM4NEBF8m2t8YvkqC73ZFAKFtW6CFvDDf9eJxUiSqLcRmAN68g8K6ta8bWoWreeYTjNUisWUseN",
  "key44": "2YwfgXwjw46BanU3GJc3hHzcUNDJP7ipnzbdRiox3J3HvtkxX1P1QC5uwnHLpXPukGGNFyD7Hj9uV6NY2iAce9vY",
  "key45": "4TfroNsY19WWcLXaDeAre3SQPz2As92qm4DLsq1mAa1we3opixyQ3xkn16CWiduxoDwAzZGHKtsHo7czpFmUmsV7",
  "key46": "5pFo7fZp3J6kkT1Kf6XFCKxZGh9F4BcbLtNSxNW6QPxMWsRFWeEyzALMrBLuwtV89qnLinGp41nx5UCoH9akY14Q",
  "key47": "5ZutpDqmkMYM6jMJEWKgYdKaBmtsKkgXxqgJkR173qnL4H6RNvZSmCMG3ENtmDAkLJmFXGGZ48Ly3jX18uXWDzVE",
  "key48": "4LxkMzjNYg9jdp5C2cPV9Ns9c8iQEehhC1NuuVkkACizA22m9X7JfzUb73QNTf3tKSFbecEc6DbsXgnv56LoFDFk"
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
