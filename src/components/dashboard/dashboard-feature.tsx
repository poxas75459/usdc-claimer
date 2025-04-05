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
    "65cDBuT68V5qwfLgmTXMiwyopQUinx5UrXVywb41YFeU2TPRQyCp7xRuD7WHyLTRqrFRXdTf8QhU4gDZZUx3gPev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKmoGvcWcA3Rf5CF2rpB7rkWCaEzyn1p4aedMDGX3NJRHpVuSf6HQFoNys4kfzUi1eRnuNy6iRdN5syyyraD3n",
  "key1": "UhpSAdrJxdntKpeiNCHE1FC6gUm6bJfnd7qV8cwBjng2wCWguLhSMZkjD29wUQKjkfduQbmvmc8NgnXTmCCxAzy",
  "key2": "3TVGL8VbLsGB4iXWbBuDz6iJhTRP3gtfbR8W9T6SLGnG1dLbPrZwMBYv6DNKnsVscdXXMnPLdqer17mwQ8GHXC7W",
  "key3": "2TVZ65XbcFBZ232HaUhWSfoRGVqjdQLRvANweBzskN5Sdfcb7xLZRfRZTrLfc7nBhroTkQoKwV7czN3TUjH6SqZj",
  "key4": "4P4pCmKWSYc6y2NRZmyg6cPNZkGhFYdSrrQLzYtUMAKHm2ZjKYFxVRMLFtjCzUaNN9KgXKJe9rcVkyR7N7tFZJjn",
  "key5": "3t62k8cSDibr1ZRjPTC52P53ykEKzSgacTUDK59PNC6oUTT3EoxQXRLqU4Xa2dC6G5crLK77NgxywJ5KiegsZvcp",
  "key6": "5mwSDPbubavWNLAxca5BDf5Fu5oxGmFcCqXqrMMmAcadTN2qJe2Naa4UNfWStBfwVb8sHsmU1hYLhpGxq4fNnU15",
  "key7": "2DkR5K8FsEjyyQ3Be9JrQ8Xyvj6yDqk8KLrsaHGdCy1GNSRdViBMuHxNibMGA8wbMHHLTEb9RFpVWeKZ2t1FUH6d",
  "key8": "56NpGXef8G7Xwbap2sFR3XYuHKDR2AF7sx2u2orraPFkFiQuPhTCQcs6veSVmgx1TCfGaqhM2DzQ587DbJjVv5dv",
  "key9": "4qBa7yp5L8jq7DdEW8KgYqmkgiM91DAHnjsxLeoHHuUc5z9LTcena4eY7oEJQs6kK5mFU29hh1y4cwmjFBREaKAp",
  "key10": "MRj2tUPTz4gDH1opx9YaLH7CkBerhxKM7oarzxS51QgnVCsiED1LerqvywEtoBDUsN59p8gwrXngK65ACEcDrvK",
  "key11": "4p5StoS7t2YhUyiL19sLY4iLVxZz4CdxGmEXyKpabhUVzHVoRLb9H2VyokDEaGYdgEysHsphZE6MnTYfcJaSCGWg",
  "key12": "ydyuJfgYssim63o2kBMx4uBtzdjKxQPoHDDe3EQ5QU5jqrb1PxApfhFkFK8dPHRACcj666tkEFYq81weT8Qnpo1",
  "key13": "2uu5B6ETtsspHaVjQ6zRqLQCbT4AwmPkCLw73ZzcdYbtDCbP7XKNYGU3EQkvb11LyH3oaqUcRdkUkSwhnwMXq1wo",
  "key14": "5Xmbd1mD2rY77WQkA8bKiBf7XQEb9omAwzkx6XhSCx2eTXJPUmmsTg8Q5R9YkEypSumP4DEKo6Pa49S9zEgtCMaD",
  "key15": "2o1JxQtGjuhSY98SJ9dGKFStx16Xi9jGUM6XcNsu1giznUTRLkvfAHWAPaioQBTZ99Apc38DqWSApDgpfc3FX9WN",
  "key16": "294BhMsBkYrjvmV3mzZYFnBUjyxhW3jtsp6rpdKCFiCbkZKt8H6ehvA68CpVS31DjDXTmVt6Q3VGnMkTFQke4CdV",
  "key17": "5uX1qjjEED1oNkDw9fwKTsBsYPLp7vev6VxciWE4KxjeEFdhRqjufkLcD1UwefH5a7PsoVV8FPUhYbVYnMTPxqGM",
  "key18": "UFgzCrTugmXHuDvw6oPoDD4Y8JWyo7orfPyzR6Y64A5uPvpJyyeWKYTwKEskBZCxi3sn45XTDiRvvEzw8aCq2RP",
  "key19": "5L6VjGibuXAVgqyUPPZzYnv72Xy5j4Ro1SWPxMbrkYCtovVyHevyCGRqgTMPrYSKSBpmBGV99hLNMBLrcDLVvPfB",
  "key20": "2piTSGbxnNBkVMTcqN5UQNABYt2g9Ne3xhcEMhuGnSiKkpw1qvma5DBsa9WEwFpFDN9F4Ca2RZcdtipqXBivKCYS",
  "key21": "63qzmgCZ1bfuFsfBTUKC9G2bnqQpeeMzPGp6rvGh8AYwF9P6ARtwWDnZerkRxxSU28ZDUn9PwbQEZFjnAVKUit9s",
  "key22": "54xKFMimkeKX6WPuAsSMLvwQ6K26FWrgm75uSTRQmVKU42gWWq1G6dPrXs5ZvnrW3sS5v8jGH57NLWXdtzGGQVjN",
  "key23": "36ZUxgSnSP7qr8Q8mNiG4edwbzycXsR5Die4hEMXmKEs4XWswAPaZZqNHtyyo4T47UxHG3thkq7NGyJL4Noxv24h",
  "key24": "2ctxDNc9Y9Nvrnns9gpNCQd5xQ3XaPviti8tn5SoVCY5wQqPRvFVZNJqykdtwfPFfiCSXuvSBpePRwDYB4zV4CDd",
  "key25": "2zKtsJVFJZMkrkGWMnqfXj5hyPczw7i9FGxUM1pe5JhAdBsL9RJyzdRb3SRkVFvZzbv9nAxgPDFLtdEjAb96cs49",
  "key26": "c6nVfZW1UJ1AqEwPGiWKt326cikyoiALqDS5M7HAKqvxMySBWMeoc4BBbtREuqxSTWRW9b19smzR5H2VZAUxkPg",
  "key27": "3F8MrYSMvtMgymuZCqbTAVuYVygAj9RcEfXnQqnUeV3Y77NwTvxNdWPiuq7nzvEUkDk1TU56Axn8F8fujwugU7FF",
  "key28": "4oRepKjNiy8f3HRfqN7ByQEo34aoeniFXZpaBnM81tEHa43d7W5pMrRXniGFAZxH43wBBMMCurE8sfiT6iXN86uo",
  "key29": "oYA9DPbQ4iSV1vH63Q1WA8SU68L3PiM1tJhJuAeHt6LU5CN7CLDgi2BWim8Jgcz7dU28hUjwxDhzVDLyPCuMiaW",
  "key30": "3Zm5vVx4YUbnj9EvtgdjR9zLsEnnrUDmGfsz7g1edV3YMYCv6jR3YK9hvKWvngQMx1dFwH6fz1qL4MFgYv1vSVF",
  "key31": "3wHqA3Lo4AMcPXCk1tfccZ9UPxFzWYAvcoFEgCYDE8YeAh5kSMbJdRv8PuYuSK9ihcLCFzZ3UWS1JYDYzXcb53Wt",
  "key32": "WyDT3ykAT9mNXwV3c6XfEcKUtByxWWphixVLhQUXujFmkajexBCQpbNoaZDV8iqYboCQynMQXLea2YG37swQB3p",
  "key33": "66pEeqf3SLVTuVmmkpL9Q8HWvLC7MQfKqNGRmkUKKFa4ieWzcveVP1Bgksw2JgPpYPPmgR5xHtV84kPPRcRGrkQ7",
  "key34": "gK2SxLBDMp2DEUUsset2fFTWpbpZnu1rwUpjQrP4cJpeSgHYcsc75PY86S8HEvqzkThx4CEj3f1JXio3vmdmy28",
  "key35": "48uFHW5zqvd3J1CyASeNFsofr5PfWzfsanKk76nEpyzE1MGT96XdKjXTwWsZd9ptofWim7Jj5y5cAaewq1SXSRg4",
  "key36": "3qKdLmwSeW6VGV6XJrYMbgPcdtt7cKTyuWAXVC4FmYJHZYzDEdheND2JDzoHs2fMPtzNsdyfzw5cii6nqQA75ykQ",
  "key37": "3m4f4n5XpPywkJtTt3iPwEo3mPt3yHhd77zmP2NAjgVJfLxYhdyxV1yhQkAtjFuBhsfM7ZHy5Juwz42LWkxfedEV",
  "key38": "5NNdb26F8rmYZjZCCpUiGqZwjduidhqXiaGthbbQbykcVmqfZQn87h4aKA5tA4wunzUsNgHfkkZhbp62nCTZa4N9",
  "key39": "3B2Lj7aZx7YsTHoGNdxZCa59fvm7fkxZrgEFj9vHFCREju8mmvtZR3sxjue4BsdDtJ5oZJ9vsLfdUM6D3Nv3SkTy",
  "key40": "5bJdbdXFJokjohM6Nt4tu9ndvLMfRLXxeNUFjUfRg2kV3c4rGVoMrTHKu21q4F2bnZAstGLX82hZoxUL3zWt1aVe",
  "key41": "478w89frcZQPowkah43ZDfCGazH4J7zuyczLJ3tLEq6HTNFGPEWJ9RyBrKyJPxvD8jRGE4KnnqMM2H2t55QCqL7j",
  "key42": "5aMMoh69jijLNEAHp3kasnmHNbBoM9ojcFjAvTWuwd5ePnrQFeHp1eZEi6DMQtGCxdZ7eTaZy6fHwLEUpSTxLCQc",
  "key43": "5pVRNtVjP9oCZYww5aAPJ2c4jsUHR1oxzmvnpkmgi94My8r3CYrCoXjgPdC2iduZ4pVJB4dL9HmEqiyDK1R8t7mp",
  "key44": "5fa2rJcEfsafpQprr6HQNABaezFWgfWQHz5oemqJi4bK7yuGudXBGcPUpCxduSNpjFT1fxwW6gGRRed2CBR4AShy",
  "key45": "3SN8Z7JRBFs45HorSAWizfrQN2cjsiwnzJtbZmTiSWebYQEKQRjfs6gk9CXDUJCdNMeZViJhxNaA8vQ8xmZjCgnu",
  "key46": "Ksr3SJ3gYJJMpiYPYfJeFkejfL9Rpa4bD345RpktLLAvuaRSjAd2m4MQrkpM3CtBYddPwYW8JnAtFsALd9KYCrJ",
  "key47": "3XR4eHYqB6QJhd7gJNXt1c2RchXitEPpk2xAF635hJ5epJoiLsQm3xQ5WdKaQXM5kbXmqWvE2MMAQ1s2VFDLBQLg",
  "key48": "49f2VomtLzYQF8ruXDhErgsvvc9x72qe4z5AQUzvnnM9eBEg2NTcPDm76oYgukBXGvS8owZg4m4pFYAty5qgrXSX"
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
