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
    "QpJ2wnknWnYHW2iLgFL7oGJEHpbgL1Js97RtPLHsZp3A7r1q14WS5R2oLopCmZpnA82y5JmV7gSe22GTKPJg3jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ALVVWXu5GYioMvxNid2Foxqh8CVXW3Yneu67UmGUaZTnzNjAhxmvscX3Fc8Ppqjx41Ro3CDdJQ7SYphmZtApyF2",
  "key1": "4omA7zR1UpJr5sfEjEsdAs6NEdWWMMEkoQKxWCdgxvwKoZDmmPdgcQSCpFWy9xSVAVz3E4E9fqL8axTnjcQ2YPkc",
  "key2": "4PcaVmJKn22GqFgrx4fo4KuLbmLZiho9z5PeWBQn8b6nHbdkk2EATpXskrweqtCrC5iZjDdqKPZfRW6fdX5Gf1Jk",
  "key3": "4WRai4TZoWxPTsKSfwdTDCM3GTw94T1gNorSbvXhpaSKpdSaG69WvFA3MHqeWcxJZWcXnqFLR9EBDZPAAjV9og8t",
  "key4": "4665zMRfm5Z6tojpQe4MZ4P7nG8WDTDCBCpKvVavicbMtBLbEMgvNehX5SwCoqa9D6fRJwbN9AqhW4NfWZBAi5pL",
  "key5": "4qjYjAJag914hwmxSr36RQEYHR4EGrYJhuGPVNE37UFYJdneGwTYKcJhaZDfULKaBQ9AVRqQCA2te1PdcCTrTC2p",
  "key6": "4oS5EAMjUDxxDJQajNw5T7A5mYuJr2D7tFAxvwFNpEpdoH29jqAc3tvt9UrhSoC1NvwNAfTXuvF4r1gTsF8NPti7",
  "key7": "3m1hgmdPjBrUoVWzGT7LDZ3Ywc1hy4NEsDkmaaN1uFUb3gvcBZUDJF7bdkYs2CUvr7GXpFeamPGmAjvYkQFVGTjM",
  "key8": "5Wu3A16SzyPsEKoeDCqMP7ugtfGFmugixvvg8joSwqz3yREnvk56MAt7LdPfquYrgf7LH4evYAnq2dqTyXChhhC3",
  "key9": "ceHG18uVarBKdUbgkZNbzAe7Dvk6vFoxQvLxAQQzpummtT6iLforkyKfsWpeEa8xxsGEvnPczics8fc1N5yVVL7",
  "key10": "5yQD48j14b3J4wv5fP5yNmvhkvFooGzw4GT8WickVFVN4WZT6GXtdLJyvtxad4K2df4Bpz36g7rm2bBgQuMtyHbA",
  "key11": "2mMeRyyaSZpGQwBQLEKXDPv5pdZo2Gyu6Bv77dDuYCboYMcwi9K9ZXyfaKTcjGZ6Axi9yYaP5moCFcz8NF8LxRgA",
  "key12": "4Nutn4ftaziXKE2XKfd4whhZGkKQMRS4bXeCXENxkd5i8opTz6cgHH53kVjMDaV9JHD2321CagJ1uMoLsgXWcRgP",
  "key13": "3Xs2bJuRqpWfLu5WgRc85G9VMLU8LVBJkHmaj4UrhWebmehLi34yo7rApCP3jtkhgcnD8CDy5DcbaKYrknSehizE",
  "key14": "637FdYhfvEqDAdgptRRP9Gz9EYMC2pHjifhAWb8CNTiu7ZhvWqt7gGWLRwxHpx9ZzKJ1ZEamHsaQu6E8X6Bpfgz4",
  "key15": "iVC5H97eat9UF2EFPkKU278gEh6QnMBYiTiPpXLspavsT66zCMcAUferU72yPnr9BH8vJ51UTBAagzaBQZ7CFVf",
  "key16": "2Zi1cbPsE5mcxSPAG1okwrzNKXuCK4Djv7bvnx9Sfmmt1TZSVEMcq3gDoD2Q5jwPSUfkBMWnLbHKC3nQEkKBDJxy",
  "key17": "3d79senNEC8XjP9jniDNyPGtVxFgbwZu6fiCptQ6eLEwGVq16BXpQovPpTzbEDCbjLtU1cVPxRYshMaAsHQ3FDs4",
  "key18": "3EP3HivJ2omaj3Psf19ZnY5whuT9cHf9LbSe3P56pPh8HKCyRUioFKBv8G7ZZivpW9px4Mv5KERL5zcybW16JpPt",
  "key19": "LfZDEBLKvxrjbPL9pZj5563769QkcpHq7PWsTYpZa2Huda7GKStpKcUFk9F6DwSWHrHD7MKGazauAUFQn6Fv5Bs",
  "key20": "SAJKBA8dGx3hzEQJuB1kDvmnE53sLE1EF3wJwhJTWQmyTsapFhYXcBR55wkgeAL6ZQJ7Vsy4Prv7bdsGo2NEeV5",
  "key21": "Wx7fe113q1gzNWW8jhMVvDNjNdxf9BSSUbsbNKjgwCPQwWwUcA2oj4VRUWcqc83D6MSbTJ3g3nygFDK15G4fDVb",
  "key22": "4jQyqAYoBBtd29ijx4e2Fuc1dexPTu5zayuoGQKYfMWBTsUzrBpygopuyNttJ4vmPYt8XNASEavZrtMWjZrYfrqv",
  "key23": "2bK6hjxV9kGp4rB9eHLWrkF6EtDdXoonVqVUYecgk2jQs5gnFqz28GS5x39yFP32fEDgwwYqc2QkjGSHUkq4nYNL",
  "key24": "3R56RB7MK3KUYrfVD9BBPNSM6aDDtUacS1gfhNmjEsJnep6zdMg67QXxEeK4xUMndfqvj2uNkqYAvMaRVxA3gvHk",
  "key25": "21uVgCMbMxakJ6xvNj2CGanbAEHsHmvKcckPe6iZjJDyoaC4cBZhDNFPQemSvroRZNpcSzJ7A78XiBvV6Rfa5fLu",
  "key26": "2Dmb2uh3wG8sBGq1obqUiK2ppJ4mexhQCmb43jm7a7kR4ueBiEbBFnWw5cEfrdrN9E8W5tBrarzVKT8FPRsmBCXM",
  "key27": "4z2MoK9khZvLykHxwSo4MZPU9DMv6mYbutQ1Wg1wkDAwK9Bi3pv25tTZPKGCCDNqcWzGAkc6HpAgByXVT4MYQAXv",
  "key28": "1dgJc6gxHJ6VG9HyBJ9izFncX1BFMv1BY5PeHVPtoRAniwi29BNgGLCD57GtKJaPa6tmot81Cc6GDiQMzkaB4eo",
  "key29": "sPW5Qsh8CrQL2LfVnitvm3k5Nu9TN9PZ9SPEBSExHN8rs3rLUYZFV7qruJejmvnWndeYpTf5aqT4pNihR8vKx5g",
  "key30": "5B4i36sW7arHesuFQ6J8LdxqV8BrCr6YgMUWrCM6gYE8tg7QRKvDdmuWG2VWixeAiQjQQayo1RBErYKb4fVRkQv3",
  "key31": "3CTHvVAQQdoY7cTbMAAcAEexSSedi1tYmL1gR2Qz6WrSpnvFCrHELJwg4UUEGqUjBj79t1QqT4b6JhU57srT4X6Y",
  "key32": "3pG7TBF6hUadURSJE39ayGtTCQi4ikKpe8dWRH8JJrihGf4V16x8r9BKsDmhZwM6EQqey2wRNGTWA67bDd7mJZ8k",
  "key33": "5hNcia5QXZReKJHojJpdtTudNm2Gu2X5etwdkeEMeaqMPQedJSEEhjfiegsFzR71BntGHpg85iUGbgsK5p7gDnWG",
  "key34": "2xzc1K3H5HmcFmdHWRNL1DCLN8Y5dibH3ZFzatfT1twgij2hMANZzMLbA6kUQaUJdzo53mqk3unjF8sAQnTPnBUv",
  "key35": "5dCLWwvKEY2Q6FuFrhjCquURnvNFPgo4DmCFWrz14DeGMFGGgiAci8iRxTinneNpXA4h8XEsPsfaaTKQ8e7RvFJK",
  "key36": "2KJMNPfYta3ewQFodBETpmPCMU411unM1LYaFWFbzH7sNJkAExLojqtPve9hq7v9RQdhQNY6oYqKAeSeS5a1y57G",
  "key37": "cnC5XBMDd3SjXau96i3W5FJWd5b6QYxagsGbfYQHeDmer66PhdLeWJXDEgpG81R6KA6WGzmM2Q61DU4E3sCQ89m",
  "key38": "5mXxfYwvfAyVVispcmLfED3L2DpTggvYVADLwohmvwuZttx9pCbw2Fi8mThk4oeMVcvX8TnXZ4h1u6XxQbCJgjAr",
  "key39": "3yoVMo5LdE4PW7BjvK8tKTCNQKA8hSHx3DpNgJaFvHf2er56PdYkNum3x5sYprhsynzcxuA8BD69w8Bk7iYjn21k",
  "key40": "WRDWjmkLMVen7HEBBr2B5KJ5wyoLxVTfJnCzoyYYveW735zPN3GBTNuprUmKdWwcsYb43CPHypvcxkYMXrMyVeu",
  "key41": "5Ump9r1THJxjTMaKWTac5S6Mz1kyJNbcqAH197ZcP3hnLR2cGhSA8oujWfxVamqc5g9HPwUuVtFmNB5fruutBsr4",
  "key42": "5hh6TCH4AE59o87pVVPg7AnzSUzBvptyUknrrCoAxW9JTy1P7zrYJBASRby5jThGzf2DqXoiYAKdEjzXt5vf3Cu6",
  "key43": "5LGvfdq7P1DV89tmn7dV7hVxcEeAJQTQmSA6XDKLxVRtpzpRAWW6xJTeDVxC9JoVQ3bvLbGcxpYFu1nojjDHUSD7"
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
