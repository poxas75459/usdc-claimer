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
    "zAWitgW67PKThAnj6UCZ3HnviCsU2jrB7p3tij8jaqUeDKAQwJ2QLH32NXjx9fTYQSdSZWRrB8qoQKgBrzxfJrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jL5UgpicYkrrcMGigZb5Dkde8FiBtpbWNgwvAaTapt4Z1H297F1uUKz4atAtJgrtegYi7Mft6xgPTEwc1dkp3Bz",
  "key1": "3LxHZ9i72c3SGa5hk49GgoZqBYm7mnFrmpX9nvBXpKp9YYwoU3DMTAMnqaHxjkeQjsahpShY5po4P4MMmLv5Xi6i",
  "key2": "MpXe9Qpd77hCvCGVjpzDsHxCzskJ1XabSikBXAPHPhrbXHynTHPMy89uoBGmmdCcXbj8Zo5Tj3QCho4x88xjtAD",
  "key3": "2BEtpwJT2ddN7PgDnuLC9WZMMVeQHSYWVvvQiTtUuFueji4Dqpq69hfajWKvcqYvT6isfCQfGgP5Bs8wzGFeracg",
  "key4": "2uPYEDYeh3q6BL4BgNoFTDFqqSZgU7eLJefNReyhunMiAvqVzpR8UKD7aGXrGEUD8XKt2NfFyYKAYzJAk6Vp1K6j",
  "key5": "5YRk5KdFepEC6AyCiCdrPbWaL76icoHKsNUnWmDQxwVFGyiGjF8bD8Wo6TUy4XTNdhUkcsGJBkGFHomVQKdrRMNd",
  "key6": "FjxdVPy9QZWiNmeop4Gzxkm9yciGPrqHVeCiCQvgMrdbFzFKMa1YUqYSXY4ZbLJsPnfBHVAtajrBsb9Zs7cjjB3",
  "key7": "3mUGN37F7QvVUXnHto3Ka71hNF7xzk8FqEUx6WKNmkQBmodDYmK2a6JG4dpRgrQaEUCAy8aXhS1GY8LqADiozXtL",
  "key8": "2frCCvEGgjBkumYYa4zxG3sXf3eoPcjTmKsKC6qXGiUZLRhkBP1bL5Hrfyrp8uUgFEbsnhjVE7391JDLg82oATAC",
  "key9": "erkfzFN36jii7TGrWTjbvV2v6hFLCAN9HrBiS49xfffsAGEeKYw4kiaWqtCWAJcGqcCusNWYjAbxZBeAwhrSzv1",
  "key10": "VxuReMNH3ALKStKnVZ8CAZqTkJgRYHPDpaTZ44UStGAwR6oE5zn9JfRSS25GYPnM4sqbmawh7W5M8WgVmPUCfUV",
  "key11": "WEd9fVnem4PgwyRqQwKjd3HtVC9ngacA8cMioYCygEhp9QHfhbUJNHwThf48XwRwBZ4vJ1YH3fuNmzvNPxabknb",
  "key12": "YzqdUUJEDdpBPtscGZWPRUTJFA8TjvdVcn55AM7QJTGVwapti9FccSg1tzapXRNsj7RwQsbmq7d4zqQAVR7PVAK",
  "key13": "3P62FKXDogWi4LjbR9QexDQks462EykkLWtfA5LYGBSKMRu13Po6Z1zdUuBK7CpmjoWoPxL47zjsQ2BfeLZMM68N",
  "key14": "67NZs43pBLzd2SFAEmTizELg9dAjWUqsSgxrTtdDz9SP48TUucSHqobU3AggmwHmbwu1LAnzw5GXgEBagtW845AT",
  "key15": "3MSiBU2MnTEMRNY62uwMhLW1HMqxSNGLXkjqzpfSmHXbm8p6XzahjEecTMPSYZs1UmzQYqMaUFBsdoQFpuNNKgsh",
  "key16": "4mg1nrWii62TKaWTTLZXhbH6nbVBh5vZoR2R2P2WU4dNb1z8MCVnTM3bhT1u6faenH5mfNxSuERxLMTzdaicnzp8",
  "key17": "4tnUDQAWHqUxY77k2Cr49vQm7S4NNeAQw6mDUWUn2p68Bmit77uCDnQZ4epkRW3MwyCG8HRhK7VoCZEijFgEuRT9",
  "key18": "3WKfFJD28QfXx6K1nJNJc8w4y2ZGKGuvQ17EAkFaHhJDs4DcfWt81884BjgqUT978SMGmuiM5oirfjQdF6J2BpNF",
  "key19": "27rSyNSNXDS5XSqEHrmEGxdc1w972NYHRiVid1RbAKvvPnYNk5GoD743aHC1GHLTYj4nAReLv2WxGmaiX5JoL78Q",
  "key20": "5tbeskK862rNKWvnYsX4H8ZFH59zXav6HXrBPJWVsaybBy9xT3Ly778b3o2pZwVk3qemYiyVyeUt1wT7kMJfraMA",
  "key21": "Zf7WCGWXe9n6D4jssHDNcCPTZ4vTnyf4HDE8YJjaJuoJ5dnBrELJ7z1N9USgRNXstj66C8pZa5tPq9DWJRxzQUg",
  "key22": "57yG26W8WmyHUXA7DU7uTMVxzDJfW9C98htYJZwwSrYoxH2YciAsTT2adAMK8Pxa2dBu3Atymyhj1nf7pPnQ6N4R",
  "key23": "3AjvwgXkzX649x65podoCQmtuBaWQ7DohDruanFVuTM8CgsC5XfiG7fhodw31xh2cSoQmbD3hLXuXXZoberqztC3",
  "key24": "4VwuqWW1AZR4VP6TFy1dtJ1Uxd8NRnDEzBztabXwHkgq7QmH1EDioFHaer2MALX7ZuzmuMsVMUaZYqJsKRUCpHiz",
  "key25": "AUHKdiud15oCh2MHuEGtjzxqzC7qNVT8WAcJXzL4QtZnQDjArLspVGLJPEvFzUuathixHdWz37pjVuXVQWmdExF",
  "key26": "5w9vCExKc2M1SpFbX9NiMJS1EAxVEBPBrvyLfGG7V5NypWktqe8NNQcstpo4tQfANMKtEv7ELJvAn4KFiUWjQMJh",
  "key27": "4WohAtP5655TLyAfvNZdJ9tMur1QtNvMV6ooCSah98wjtyanmQ3cfKKK9piJp2F7FeYALoitEsxbbBWLF7oSwFj8",
  "key28": "5HUDssB944gAgyRRB3EFJWKkBV2WCxgXdZbAdnDDEwLufScogqBWHd8Ev2Zg2ydpysmTvfeEfTrAvPAsrwr3nixp",
  "key29": "2ahhiPWeQesRmK22DQRoAx7mAuFmkws1nf69CUDyqtsRqiC7vAncBEVQxQFd6MFy3XNbrsiPcvL8SFVcGSgxpvAz",
  "key30": "ivyYY7QSzWZidGUjKyn9CBPvvBHBdsNLxuVwjGFo9dLBAEtm68RncV48DjdGRbkdmFJVfcwEeiGGG2XAQGBBSpT",
  "key31": "5wkoqtanCNw9UQwGz3yAAHYkXCx2xVGvH5saj1tWgVL7BfW5Bo1YpY7CWy9qphkNhwDASXr789CU1i3qvYBtKk7A",
  "key32": "3PqeTKf8qPpG3P3F69GSNDthKHKNmoLuqVM9ze4M5ifyXAR5PmrpHDvVZcG9aXdG8TFgg12vmfRxbEMrHjQF4qU8",
  "key33": "33PE1Gc9VRpXADdP3EBnzyNSnq7AMbmvtYukDRdMjUUuNR47KCZTJw1Ci4AcjMQHv1wGWTKEPmbdFpgwdqf8vZm7",
  "key34": "3DKqPkbxpcy6a6mjUMqPrFoWKrhDhAsK3sBWjgokJSAPak7EmwttNamnWNnMFxVxMNZZsoENcBcDsXw31y4F3aLm",
  "key35": "29UYLMZzpweP3aNQQ7qszY2Jm3GKmR52RnHY1tQEYDReRChvToG6FQ83t2PTNMarGYC9gyrBS44RwbvdMYwiw7Jb",
  "key36": "kjXvHWQNvFTFsFzbmFV6zaFxkGLiYAvZG3j1dPcaG8yaoBHF7iq9kozvcTtZdEE1E1Ub74QRvxB7MehifjSGZwy",
  "key37": "4DAXxaf8dwJCBMJtwi9dEkHqWFBzuMBUqqVGxFmMQNdNHn4LgkmDKvPPe5zcZeLf62qvCy7QiBWDa3rTbzrggmm"
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
