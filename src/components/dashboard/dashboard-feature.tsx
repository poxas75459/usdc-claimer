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
    "26otZ6VwZMzC3FEk8vAwa2GMGk6ujs54oLPiKLpodFyUSXKHwWQfLw4TRRuPMLcPPTLyYf36S928Yf9ai2ypLcHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCez8hyEgnQ2wPWr5vUUJK6F9XLR1nmSJK6AbWHLfNgVwHjQbdi2MkfBjXbSHpwafj6YKVqudQPofY234FFC9VL",
  "key1": "xwdtAmMxkrdZZMmEPq1gf73Ye9mQ67hJUcCzRL6B6shqXhNsvr7C8uBiGE2PJm9eEcTtaSsF7tEQoejx1kvPc7A",
  "key2": "3wFCeJRv3Mf3WxJ4kimcu7TySmreHfW1i96peGihwSXqgpKhS2mEhi4qsAuaTNnaAQnp6JQANsjS9EKuYgDW7h2H",
  "key3": "3syiorVc2Gr4tDCapAKhshH5MDaBdsF5tw1jZXF5x2kRVCKAkYvk5rEVjNomRxcoChnDdy9Se62L29z68XdsMZwV",
  "key4": "2uPmDmE93zTQpGrvs1ytRiJb18MpHYayvSfmtE1rk64vSyaFsj51EYT51LYX7KNBGWgfh64EfHCi3FRoRAuJGB4F",
  "key5": "pxkdcmeuP84xBQdEnKM5RxzSakLK7i2jdX4XDBvEqYkaGYY86JuEJbAfzR7WLQkxjiLNDdnzBrW5AS7ZjXRdXcv",
  "key6": "34cHL8Zf57sTYCHPaLXLBHYDp2YEs4NdvtFZ8xTSvdBWkaLNHCZJ59x8UVPNtpEaEq5CoVAUerVBHeEf2WD521XX",
  "key7": "o8Vgceex8bK2VpNGcWSbF4P31HW5qWxQc32zxjfqHGG8kXK4vF96CaMhCkqKeMm2u14aDyuBRDUvL5Cery43bjA",
  "key8": "3gt7RPDm536L8ee1GbD9E2mfixNx4MiYCfsGoBR91Z7atpkK25PUGWUaySkpsoj2YRpvAoFqMRVtXDRfTNuVCbqs",
  "key9": "62dBC2KF1spTKvqVBFnFUHCwhkPXef5YMsKDNELBTJsW8oDRKRXjpVM3retcuF8KMJnNGD9p72SD9bpH3vYXxRjM",
  "key10": "2zNEhkv82o2M9mKXEXGoJTSvDtzQJyR4aPgcFpkJCexmAHjEmWgDEz5CszpDuPtEpBXpKUXQJGwZiofDzj9ai1h5",
  "key11": "2fz7uTR3bUSqoUr7FpyG61Kf96whM5WyxBURKsAx3v8R5AxpTH1ywPiaG5sXu6y7XMPzmPZxuQFSqfwXBREmtKLr",
  "key12": "v85goYJNraaCwqmd9XbhwKz3Pprig9rxJx2ysg56TB4iU2roPoAxdiN6jL75XJ9WbV9NYS6Q7WmeqDz5nRVJ4XH",
  "key13": "cFRATf92m9YNVWF7Rj6TPLKV6EadWUUyDchfJY7x1wY97qdGCd8rh7jPmsP4raYGAZP25iKFvCPugBx1as2zM9f",
  "key14": "5xJ3gKCEFTwmhoakLWDDkU1vUWwZMrChkhTG3fnMUyKJfzACUSsKzLikqrojV4QxuZCYwUNhmoT586jBFQ5UBoT8",
  "key15": "57Mmf2gWPJbySEML8uo5azvYPacdVCybGRaJ3FgXkdyhS7jSF6WgocC36VJJ8gqLpAghFDrMfypzDbgbfVnuhWMH",
  "key16": "38d8D3nY9Fhng8zFNaCMDz1rqnZur93aJ6RcozVdCQ5zJncKoGRYTo3xhioLZaRM8aW5jfjqeoWsmhVWvsPWrvpt",
  "key17": "mW1mM76jisL5taP8qiJzzPN4EWHErfjAgmqwtv2K9e1NqAfxiSYkhuWz6CUuT3LbBgfT3xmGzeNkdQ9ABCQA4Dt",
  "key18": "4g3fXPMCM3gicM3BEZfm2sYaafJ9NaG4vyvGYUZL4J6BHDg6DLYiGC8RQhKKqBYJN9P8ZDhjWFJwKg9VFK8AH4H4",
  "key19": "39sFZsTbGuWqCD5rzbuHk5YWG7bfjECJd6L3Z2oVvBCzRJWAHhX1FcAEsePHaeJP2TEGfm7VJ8JY5KfMt8d2L546",
  "key20": "3ATFhavwMMDiAbeLMSzheNzw4LSQmm5D873mrZZcmLfDuKr4GdueCjTFFefvZooDprpqjCrbAsCwPahK9oe9PkAp",
  "key21": "43vM9pLHCa2PuFDnrTxm5i6gEiAGUNMGh9M8LqrPhBrPkGseDMZVRSVV1W3aKD2MQd2JkYAdW7FHwJZYfauw3obG",
  "key22": "C9NDkzSkHgkP8DA9WVEYaxkYm7q9DuNkvCbG2hVsN6peYMb6yeapYTeG13499ZNm8ebcwvkkhbXq2YP6eZ8MCCq",
  "key23": "5GuNxE6d8wa4cLkoir6CBLvymw8e3YecLXtCg99isXTE5n2gKGBxnoNid5sF6mvJ1tAzwvKZMZ3Le2LJHX2bA7gg",
  "key24": "41mK7KpWLVkWjo5FDYpPA4tgyRwtrcHrAEWsLwPhs9haP7m6UWK1mE74BoVKL1AMiutmdx1Puif7ZUBmoukhyvnC",
  "key25": "2THgZkf5YU72Qpgjr8xPxpEQns68yE5qMUtCViprjbbqmyq3zEcEzZJWjUMfwxPEAUzedz85kwTyFajk97tRRzzs",
  "key26": "4iLuqpsUYSWJUBx7qP8QvRTmGRN3YgZnLLmkw9SvzQ4mJ4JWFsy9q5cko2UygUoPBNzi2ZHdN4FT91dhySQHNerk",
  "key27": "62cHuCgnisa5iHNZakJgNxw98CDqLhmb6KpdP7XNX7muSbG24tPomL4mPsnGGYGysP2kvdXMTt4KcyDPrNJDZcvB",
  "key28": "273mqdwshV3fRUZeEha7KB3JdhCjCM8ua1PeYzd4zvvxLca1P2fr4Fuq9NvR2gaARV7dQXqYMZqxsD84QXAPiRxf",
  "key29": "zzWkkCG5cH5RpPZg8mh7Yr3QEyE8E2MaxRGZDgT2HhEcJddRm6T8CboVCMzY9FKEjtmdgMH6nx2V6fo78wG1vzm",
  "key30": "4vyp7nsJD3SVthMbERRWzvmFRxebBoYRKdGQu5uK4tF6X3uCraKzQjb6R8njDug2DYnqHED5dhuUWvu4kQrCBTxj",
  "key31": "2KQQbpptfct8aXvf5DvJ1zCYRx9PpYqqNYiDvWL3J5ouoyZvA4GsiWZo78yZdCTwC4YmqXrkApJyZcwwU9zPmvtD",
  "key32": "3Ci1EXd6DHBcE5W7xZtzJ4yuAyzuqjP3yKsESHUdC5dapx8eyRBwYKmEsG8QWeM4mAHERCCGT32tb58j79tjcLSX",
  "key33": "hZTWoYTMffe21jFDDzPrnmdRA1B1H9svUhTDy3BDR4aSaZHmfnVBrX5uH7x8nBpgbp9DvibbQaGFXjDVgRMfenD",
  "key34": "5oHgsYp2C88FRK6XysQcAcbXETmGaXHESbeQCxE6VBsXGqCbm6ESvTMxZcZ4GAe3qyCmZcPxixquor8g8omPqC4u",
  "key35": "2XcfUkPY3FWeMYyPQchxbADTVVcqMsmqK4dqdCPaBFWj1BsDdaEr2jwnKcSXrzN3ptSJ6AGCfryUmXAaKSR8arGm",
  "key36": "BotYCxBkkuk2uTmXpCZmSKSSMGSNerxDkq8pfc9XSJqH7V9D9agEy4osGr2MQztGPneS5Nua4fFy3NCi53WxaG8",
  "key37": "2cfC2UMaiS2orqXuUYJjFoDsDwyksVbD5iRuafQsWKxPGxNdv7yxzY7ncj1ke8ADHGrhjqhoVSiH65p8yz4C7Tjt",
  "key38": "G9pdFVEY7BSuRu2LWCi1vMsSa9Udhh4Hyu2GKZMbjnpzRVPa6eXE4Tir2YtXTCZLNHUNVjezAH7orrgJLUi8HEu",
  "key39": "5JTuXASiExjd4aKj4pJQXncuxb9tiHQ8yhpAamJF943jKbsA4ZHRqs6PQKyEv4jN1WLnNUaUHq7y5HBLdz2vVLZh"
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
