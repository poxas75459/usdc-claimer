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
    "2d7TecQ2ZXE9GqcjvaABtLHtJTFcax7oVRtn355oCeLgLbLcVthCwebuQ1ej7Zor8ztrrH5739nqAaf3XRQZYja1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJ5vgDJxt4uez1gme95XN8K7BX5TeVuf6e1CE2HKHUwoZbm1urc3C5QxWDSy82X7DoipHagLEwquPbyoccKA88Y",
  "key1": "4MA2hJKdAU9tnWozYRSZru1CAeqzeuiumX8Bku6bGn1NsGJaeYxH2MPWRU3nyyEnHzx51AcDz2gkJgLvh2vzLUEB",
  "key2": "59qFSkZVNSntHdeQvQWf8g92tBgN3jqYqXYC2ANS3EQPgxLHVNQB1Ncc3WUU7zwGrSiMEnyf5X9TDXKN9AgvWRqg",
  "key3": "5HqwHWN5BxBfnxfT1EMbhXRvGi78AggrjtaKCzP1NcQKyGMvRDZuW95Wq1zdkzioNQTQP7mFVsy9AknLL23LMi8X",
  "key4": "4yKqTEaaLMsk4dQ8MjATeHVD5jJoazxWm13ExMxwZdXdtuVxd5A2FYNJCpoyNmg8YovKZsZMgtzHyXUxwRunLFmR",
  "key5": "5De8gAQt22P4dMJyfZF5FvaaF9P6wxwzxP2uanLHyjEfbiHPm3F6MLGYaBAyxNUQSATRhWzZFnneG3gyeKeYAJVv",
  "key6": "33hs6oedih3mc6ZeFfsXY66WxYq9xyNPr4ymGYAxRaUcHhVf4RWBhTP65jYWmjDEkjyvCpN1KgEghbdsqCjej4Q5",
  "key7": "4XVkpPF9MLi1dJJZgSf2Aut8CCbfuBPieTzfREroc4tagmi6EnsirG8mG8d1H9hve8ppLAEJUQvVqAsUrrXwWto8",
  "key8": "4WqLdupRBTyz4vgUftc62MHBV11z8Wf4KMdtHN3owNfg1vc3yQyFK5NrDbrGXPfA7kQxqcansXoL2dBEPPCbGAr3",
  "key9": "3czDWpymYJxCVvNcmuJYMjmzxnDqvfLmN1oGrJkKhGibGqAxJUwrVNtEpZDRrjDG5TymhWGZGQMsRA22tX24WqK2",
  "key10": "3UYUwke3zp7wxVMQFRqAo5JjvvQ9mRAqDnGEsJZP1FL1jVgQDe176WDQVfFr7iiVqimDArvRnHvDojbj4TfnqKQq",
  "key11": "4FhGAHno64yGS2AnxYDP7xsQYgc4DjQL1sTvDHXxoXGiLCutoWVrPKwrdznPyqetfMQbzZ5GKgNX7uXjptVGAZpY",
  "key12": "KjXR6ASJbxfKaTzKTTs43GjT5gayUENvtQvuMkxSkL5bScsNqydfanTJ2d3g88eo4XbAdhDz4p7PE2q5pPGU8F2",
  "key13": "3iTFr6tVgwobevzywpb9NLRCZHZuApc6xVW7KhbLPVdT5NzhZMRF1eGZTo3vmqQ7A4h7ZDTNJp96HCERdWZYaoGX",
  "key14": "1BDZq28wuut62E3jumfQRL5FAZFXazm2HwpNS6ZufUS2Jxf8wtVGKThMpon9x3Lh5mMdfWXfVKcLdjVN3xB5n5W",
  "key15": "2XtVBrqzJc4sUAyqtcD9URabPMThhE44Z6GJReoB587E77XgKqRWFoF3aR2xRSksBXGqXefdSW9GstPwfVUFWqbJ",
  "key16": "3nqJqWyjh2GnfGDWv2xcKWH6jaiNRwxbTpeHMQ2N3HnbXBhWCwmPYwLraYoL4stMsHBATaAA1HB21pTQ5UJ3bwNj",
  "key17": "cxcV53pzqJ3sWfAMpHd1iBBDhjqGAAqoaPFMFdjPwe7nhLCLsQGg73whj5xueugvhBnaLtmDGGHtV97f3qRpxMo",
  "key18": "eCitYf1vzwuVTrEnceAqoCzHid8hjnUBHAU5M89nA63mYFdtffe3wbjhvqL62GHBnUGPCB1vdULNXndW9R7iDea",
  "key19": "38zM6GJDXoZqNPoFbVE2ohYnu1uqAdRD74z8kf97BmMGQ789VACVSBJoHGmVA2mWLvDPzsA8ycvxqpVYgkXuzbiH",
  "key20": "ExvXMmKrorn7FgembwAq7JueCnuJSYq9wbyVGMmChm7qd6LoB1fYzrg41Zj9vLTmFyuLs7fM7Fn3PPHE9dJUUDG",
  "key21": "2hxvqXdugCxwwtBfTuJfg8cAuvMtquQY4HEuVTvNm8F4CqQgA4Bd3uFXG5KRexSUv7oq1f2BzcE8KsUgXoRoYPhy",
  "key22": "2R12s88ME4YYQWLUhgJdMui7ZE4mzWnA9JjR193od3hMuDHzYsKt5Bs52RW7h4qgpKVVPUPjQzzgQbR42LjrUePx",
  "key23": "3P7tVrjNkWnFNRSskxmEER4yjmcVTsoVBAp6oZbsayqCXTuNvHFzaR7etfRLsg1fjtN1duhGJDgJkWY2y1AdqFut",
  "key24": "QXjH5gsXrgqAWD2wBNV6THHEasL32purBefhWtaeaEbfsZ7jGF9PJLDPtwsN9G5iD3d4mQmAyWF7hRAqR6cAgYp",
  "key25": "4frNKzWGzK8yyjeqqd24bDBBS4czErLv7qtZHaqMsDxs7iHhQfSRnBVRAPEcM6tUNCuFCifdZfU6FwutvYF1WZiT"
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
