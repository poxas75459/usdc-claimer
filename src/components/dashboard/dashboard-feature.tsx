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
    "4U5rVda5aJLBQ5f52914YqAjRdhfSurgnu4q9cJA4ZiMAcHaqnt4Pnrc7m6qFJ54CVLWxUgekB9ttPFfkseSnShA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QsUsVzN5s5QFXYQtuxNBG6XLCAtdMwzjN3G8xAQsLAu9McmmoYnqrATdd6enEcyNEy7pBysSM52U1AzfmeD4BzE",
  "key1": "X2gWctVtsUcnyvNvSDszBBqBNs9A4UYtfArnDTRupwCVU3j9btjixpNxWbbrEqGMDyB6pbWQ8gh2k2fvB9t93qP",
  "key2": "LhBQuSHbPkb7xjKyfSe673vdrNHnnNtsRFUshTr4bw5SHVtKaXVbXWN1c94pKvYxYXju3XWifn2ophwHr6ptcMv",
  "key3": "2ashvVFbguicYXhvrfz3GJY6B141wYd8PzGG6nx2QJK5srULFSznHr1iyUU84RoUEkiQ2sHkLvBDf91aS7kgeGQf",
  "key4": "55V8bgTtiEQrp9H2EKjtTHuKU6iJR1EdG33Q3NWD6yuUBtzAPnCA8u8iHFnSHui7GQR8qaBtArnQk49bRTKwBkBz",
  "key5": "bsDiffQCaTyREzujYJmYDbaVbitfZ92J6p7JFMRyE6t2BBs2FmM9FixkZJVeM3jp17vEDWhV9yzyVHLsxVqvkWq",
  "key6": "29eihazicyaVZi9wisN4xCRBoBgfQjsGNfCLJC8iCmgGej7ipw2rF4jHVqt6t6cJmqCFbxNHxzLEMM1vDoAx471y",
  "key7": "4MWx6H58WUnxbdz7MpqXX9XznPQiEcKDJwsMNjgn3UCBCAwyaHmiALbGBNbuC2MV4KA6qALKa4Ea1TzhbMmkvVmC",
  "key8": "5DBnUNpt72AQK9WoBrPG3rnkF7fpKuDSYzxbKwCuZWUkKzsVartrxPXuhiFYxdpRhJCVJ3SrFa978HMqvieapWCa",
  "key9": "5qAm3pHoJVWr12wtCKUtda3ECzxniyADCKH9jXMdh39Q8ig8fbbMqg3ii222AXxdwhHEsrDxFzBDGhf3Hgr3wXco",
  "key10": "3vRK6aWpj4kFmrEnWxFi5hZyzJSx84hLBjsh1jx2gfno625TGKPV9v32g7QhvNKZKToQJaNwMjgb1jmkYdCZUsTn",
  "key11": "3SWqCbfWu2R2iZ19W87rVC9gN5FVYGB6q2PW1GsBu1XKrJS2tWuDCESnvUxbJkoxrPFcLLVxE9FEqAYtC6nGmMiC",
  "key12": "iRK6imhUccJzCWbHCCsLsa9JCGtCqGDxS8MswpkoVFhLDUGY7QN9nw7bjJP8JtG5VbmxFTZkij6PL57ZeShP2kH",
  "key13": "4azY5PBeGmQ3hWRQuwyBDj2LT8tCb7TRUBaxbHMFqhydCFMCgvoBjAoqw4SZtbrsqTe7owdC869MtDCYuQrKeZXN",
  "key14": "4AsT24ZqUSsRSkzCXFVJmsFe3qiabuVTh76THak8HNSFyLumcYHEPkujitK3LA5ryLNoEi3va8o3R81P4GvAJ3JA",
  "key15": "2Dj8ausVUKkUeWTCwmH6G3ee8Sb6dqB9kYcdc8Cb7QSr46pDEn7vQGqizqRoUAzJEE7kJiSW67rrfo6AkiAEfy7A",
  "key16": "2coecYxKQHyT3iCExWSnvmRPESjHEadiDNgtBpeppMFeCirCpJBzRYAAMGMxuGagaeWFHYzZfgpaT8ENnP7uuQjm",
  "key17": "5ruDLNSmYTbz8zCmH5rT9uDmcCr55adZEbaXSGS3xnDSpL1BDdA3684dPzJ5RprpAR6gbopY5ke4o3BjTuQrvoYQ",
  "key18": "9zfCt9WN3s4pF2GrMGRFtgfEmyMb33nL8YYRE7wQStxuMzGAKnynTyvs5eAjcoHudwHmS1NprMqV579DwK8ugGr",
  "key19": "4x6aoF7qKfGX5iAVCEGp7TcNYGeBLj9rLRkYNEk3Qv4MUJnnEbMseb9v6fSzQoMMFMGvLwQrWtr93WBmvRXdnQYd",
  "key20": "2TXExsb9nGLcu5j9GHyc2BmSr6h1DUfESwdvqCwEgAdSPew7xw4UEYfDmSAiBGZ67ABAtvbhe8fyCCEH6MSgcrjb",
  "key21": "4Xp4i7HjdkdGN3RKwUqG8a7a8PtaDxtN1PKb9atRJUDBAy5LcEHUtgdKjqz842YYLwTmpRKsrksuNoNYP5Mu3XXk",
  "key22": "2beaCuSFNokxerZNvwydxVAY95fk1ndmEqFxy2FiU5GScpRthPY5L2b3vmuZ715UKd6QRpAiiCeEGxwroCvnPUfU",
  "key23": "3jvERRwY6VDb6TXjaq5ZpRXB2BJGTb1t8Sybib29k91iddfN1mnt82unRtdCVPpyNCWhPKtgpfenWMzRDUePfKQo",
  "key24": "4n8GHqynogc1j9MeHF15iNyMKthy7Cy64B4WRLf6xVCS299XVX4ZnTZYdAgiEF1tiVQWcNb8JSP1X3ksuyKp9YGp",
  "key25": "5TbJpiy66CmKSw8wDyw6NSWjvhcvhP9a97GGd2dk7gXNu9vm7rUFFvL5HJN8iaQuakN6vMG3Zt7kSGTAczRePu61",
  "key26": "5NjoruzwhuGvkWA4XWvujeeLb2CgCDuavb8HTjr61UngsvgLfNLFY18ifhcxmaRYZrXYgAaCF6YGqsSH3goMgSH8",
  "key27": "4x8MZQqu1MEcg3ZH1oGoRW8t6t3dQzojv5p7fKJwQEyhTyhAUZJ7tiJpJ5E2iAZdnvontL7ZmSK3zRAwwCm17c26",
  "key28": "2nwsCwCqKhDiEEYtc6ytjmsRoa3zFgs2dnvSkGq1XJLNyjj23Jb7t19hMnWQ9WCwUdKW8ATgkJ7Lk47sfMMF7xq3",
  "key29": "4GMNNBFs59uBDSqU8asWr694jbiYTSmTg9q5F8Yg69v1i1YMgDyu5D8PS6cpzMWvcUhzvMdCJWuGPmf4biz2Cw1F",
  "key30": "4yVatEuxVWUFCCJGL6fKosrQymUhctcfeKySY6uNXxTo76WohmHVjvirfdmeL2hgWdtsjtQSpisfz7U74NjT4CVH",
  "key31": "4UnCWBJFH9pR3bLhioefP79svsRSn9d1Fupk8gr3vruPizCncwjZwpd5NV3MnQRUDgFR6SoTCNW64rVvmMT7vCxg",
  "key32": "ALnf1T4QgHrxpDKLRFZvRt5ndm4ZgwxFR3ayigALGEEJMDyygx7oJp8BMWhm1VEcKW5i2pXPtbzegwUWsKZKZmG",
  "key33": "2yopug4zkyByVC5rnxcgte3C8MfDHoPkZVM38eAYZLUJPLjGSsJHkoUZeLyjLVWmrJ2yfy2XKum2akuYw3GSRQBq",
  "key34": "3EgXqtuSak7wSrYuzRS1eGkzPHZuWLF6PcAEysCz3jyUNy6sQPBxNCSPS4ePirrCmUGsPzLd1RoFujmkewJdrY3s",
  "key35": "2Lfk4V7KwYMsxXP3Dt4qGThmjiCEAszqtkq7VtCBN74M9LPUgCB9ST7BSj3fajPdJ32so3uCMTugcmsW6piFmpdT",
  "key36": "7fZgoxBFYLp2gv7DJR3PYdrPpNecmibbx1DRg1VPLEWE8YFBPMi2Fpu2R4ewsGit2Q2rxZ3QpuCQPCZF9nDmAY4",
  "key37": "3JgNd3akCDYssjh6i3rXFfJ279LeRZ63RLbN42JskCaLs2pFaJ7K8KRVVWyjuCEx2HHT3iqymojo1RW9YnJaFtrM",
  "key38": "4oyU595w2Zg66yMH8t598XujGJqy9xgULTWkTKrdsqnQabgZyZgk7HNhHkVw9J8pFGdky6AeGAXy8ssEr7gX6JE8",
  "key39": "38aKCC2mED2LnPRMjAyPQfuD2g9fFNVGpBALLcgdBqUrqcvfSRvf7VnAE5vXWTVrA36uTqpm5ECWiMvkTDvU2ysZ",
  "key40": "2FXgqQ7h3rUdzywUdfM5N18TK9U9fMn9ejmoXdNbrwNnPQP9KbgAJPhin43X99zUdrmnjT1V8aTZwJS29SWqtoUs",
  "key41": "4R2ip74DHeFhuAedDBaNPGLN9ukCj96Xv4q1EpDc7BjtqvpudTeVE7cCmxLnaDgcPSiQP1BFTk6rDJ9rS2QR9pmx"
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
