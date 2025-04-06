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
    "21wUTxyyCmzZoKZ89cRbiLTrbTMDGUbgHDzhAai3aBppZtTS9PQpqDWatZZZdZmvss3QYohZVgaUp4J4bi6Y6gfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28gNR8yegWeZUb8NvGYU4byUKbcW4z5HdyktKXQ5PtPe6AbyNTZsBNtNKRsDc4kQzVZ4cv3dEQUB5PRQB968UWF5",
  "key1": "3P2KysDXNLFfqe48EWYsKpPtHbgVDqJFT6XMAtMirTf7vxXTp9uqjRw9ZsR9prYEUQcKiCsKD7AWy48xHag8trU4",
  "key2": "378tMeSAfenFhh94zAkzVduBxEwfQEwRRSCKtz3BFX5iZFBmjgKNS2Y5F7YmDndNjeHep7xPXg57Z7vbzZztduD3",
  "key3": "5EqRknJMk8YD7umKwSQ2pdDjcBBq6sFeznLGx5VXtPAFXx7Z5H836bCXHrMUqMApuBMQaMhDc96ymgh9f739DjoN",
  "key4": "5K6tFo4vbvFJX1nkM7h2TvjxXdbBNRm2AkygVvzjWRFnryq2mwV4HhBAkPnhywM5rMx1Bm9TowdaTtub6m6WoaVd",
  "key5": "43AboVXV7a4KnKaCczYN6dSFtK7SFGysBvHZWTJy8jpGFTpvWvwYVeGLQuWrP7ywwyPCCQ1F8rXD8JHdwdk4S9iw",
  "key6": "32vrdv8GHpGWkejaMmWgEBNfydYDGhAeJTeAzAGAhK3dPhZkRyPtmsQqqhAmvMFNwHHJsR2QKMen47wHmosDazCx",
  "key7": "2E8KvqWKCRwyqixXdCWfKP7yGMGw1koejCeHeVN5YmA2StPogXeG2snbdDdgmkrVmrN9KxiksR2ZZx8tcf5J8sx6",
  "key8": "4pjcnaGdo6poKrHYuLT3mX2kYBH7TuySJRBTiEvtWZGgbbuBqrQv8emygkygGN7PhTh8vnuedN7bhQ2pXapGTqc8",
  "key9": "4nFG4Uy9mtMBsJZRcWcT4pKSGuRsCd3toNmiJjV2LHYd6UCKQ1FTUAd7Vrxg3TNGwtPpoY8MgWezy9prt12JxtaZ",
  "key10": "38tPxsKnBMjkBK8rHQLTmxxVKTXk3nHduEv92SyKcmniw78Cww1L56iTAtjKuVMxuJ2FvdWEATfEgVxuK15diTy7",
  "key11": "2u8zBM6sCWZnFTJGqGzatrz2SYoEAjRUS6ik8XQpEWrgq6VeGdmiDAM4U4Sx2646vaXvrEfwoB1akLFDvJRsk8NS",
  "key12": "sjKXJsaGW4S9JidyPE7WxK6EMMCC5uJB93C3P2aVtt3zxfHgmEATf2Lxz2mEfLaexujJmGHDaCZS43b9x1Z1gCT",
  "key13": "9jcXHkZUwtfB6zD7oSM4ua3ep7gn9CaiazdbnQPWSLrtJEbzZX8vAbZbWLeLScSoTmiqmm2NKn4RTdDEGtvifzj",
  "key14": "26FiKbQ3mGvfHyzMVKR9JoGiQhz7c6n8yZTfLGdcdGUZkcyCKjjgAijdNajw7D2aAWhgd1SanGsoDQjtFH7xjs8J",
  "key15": "28BMe4czLTYYE6TN3BMWRyZCxkqBsbRzseCaMsVWtVypMWF6DMFdpnZ8fNDP5MeWCS81yTrqNnFuC93CdXxWsKhm",
  "key16": "DesiBCzUgiMir2ZUmfPtsZckn4drpEuMbwf2XTjK27qTaJrfnnd41tqzG4gFFdD7JRrmnSMREPrqynkcGwQCDRf",
  "key17": "CLUMntSH7zuXF3YZ1W2Fx2bmDadoUhiqwtdfaeE9AsnFzHaRH9pgrDYSVSDUd6xAJdtyEjKtqgRCofJ3L4iWDZg",
  "key18": "4mp4MgZA7T2hiKSNXvyLJEs4PnfBfXxPTmQQ18Wx7gYk1PuutVRKRxooX8hiuSqF7dTcYZtPqvYo33tm1qqZqPHS",
  "key19": "WAQd8dfk4CBKe5rwzjXU6vvHsk7DmwPxbrjWWgdoWBzLpS5v5dwTGa2bqMKZrdLswYqNVkcNF4iqnEyF565SYHT",
  "key20": "44BCgMSzcKnnKz6cczDY29ZPBUvnb3Hs4tCye6dxTGmMjej8ZbLf2JHTQruaEh52vPtCe68VhjFPytf2HMgAzng7",
  "key21": "4d6YKWKAQy5yrEBcPAhPfNhd5SGfcRXifR41q4tYQUkPSyU5UiZ7t7ExGCSedB36mA3gxCv6xp343QeiRNeGn2j4",
  "key22": "e1icEJrwqGj6TpbLwyibrVYNdHph2a4EBK6aZAntMKV4chCfGFeF3HePB2g3YszUTV4nXXxZdkdexkx7kfNMNEp",
  "key23": "mTmkuPjBJsZ5rpDN3i2Y7jhsUUT5k8pM4qK1koiRzgXJvvH2AWtkki5JyrztWB7ocJybukGa21Wdrkk1aSDymyD",
  "key24": "2nAiuYwRwrou4zNDs5Q7NYQeNYVzVvYEepkS6Wnsngv5hGavgQpDve9SdxHmw4U97fA7UDzm6gNG3rRd3fB55nXN",
  "key25": "3tkD9TASGV2sMtwXJew9WNiqMXAUE9yCn3LWzktLZaDejfHUpoCpTnoDadTbBBZjf8ESHd3LpQQpBkGAujjXhroU",
  "key26": "3CNS1YzW59E8YMcTqjjafxrw2yVGHWCwLyC31e3JP6iMSw7j3voxGkxw8uP88sxPyhmMrMBvU5MPqjsBrN83N8JU",
  "key27": "3enBpyV9rRT9exX8AiMPozVZQ2RVa67gjW5gR6uiyaVwki7tPYuQ9BvDryPoHNqBdHyAoFkTMRFVmpG5Ps7SHE6j",
  "key28": "38Q4xDgKsvtusyuGTNnqosvueAotxvpfeRwMkE9zVa65uuB4nuwaAXS9MvVz76SyLU1LKXKYtRCQTad9xdD6j2oy",
  "key29": "2Nyj2ZVCZQeXFk6N2Tc1sV7b53B89NkUopzKZ7Sw9qMdZX66ZckN9ZnpJfdiXXJqcenCUsDhouGz2Uir7CBUpP4N",
  "key30": "392UXxNBgmCV22nqTMSevpvM736939BiMgn9gd1uou1FfACkQsjHtNgow5rrVaDiFo1Y3NGAYmVmRp4yAZt53m5U",
  "key31": "3TEuHXteUjkG7gWyzFj2N2fNAye2VfKEMCxDUVM8cYhUNAFkg52Px3ofzKfAwL3dbcMSe4BT3eXPfTWuo9wGbE8c",
  "key32": "36s1RAkz8c68jkeFjNMpNMKkoW2dk6bYh3gMaSgBXZNmg2iHEqZwYMKwcvnXdCSoZiLs1vhJZSas526VzDF2F5EX",
  "key33": "5APK87nhNPv81iNomAUfyfSACoazRxAHXWa6CLueddAn1REv76oGJStNC85n6XyYYaFbaszWeASBof3cPBdGRoEx",
  "key34": "45Fvo6XN5c3gzKQS4mHAe9bpoJEHo3pZM8SVGUCXjvwAAkkoVa5sjoUwxAHbw8ZEeX1LQzcgvkyvRcUD1wz8tVf"
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
