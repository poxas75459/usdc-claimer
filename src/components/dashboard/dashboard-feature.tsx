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
    "5MHvQ2kbFWDH1zrhRwECckskDZiTCefaPDisLLmMf6URT6Ju3YsurMpqCcHbEnek8r7tCakgzNsMZv8q9pEwCuSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31mu77kCLmRPfnk6vYq1B1Gf1pEAKNKtoHLTHoR8YwUCGpQ2DjSv1enWQVNY7DEJ87tCznDpVYaWzApefDwB4hDy",
  "key1": "5Yt59Ws6y4QTmcJwzesNQtNdUubRbUcnn7gpCyCxsD9A4TEnksMUtoCGPxJCDziV9AHy5aQDvuKqe1PiH1g9939s",
  "key2": "4ATN2Z8BE4YmSTMD1Edoo8iYfba3hfxX2z7VmBrhxtWGKgnBnEigud7Ue8chL5c4FKzYxwufY54SD99i9FY2hQ9a",
  "key3": "8RWSWXHB83KUqu8185hxYQp9VVRcU24PkE3SzN9tzmt3fJQLEhgzgXpaZ1fVpcS2HG21htHToqZFunnFe8vBV61",
  "key4": "3T1HSXSCopjJMc7KJ2bxkX952rFyHMn8Lvv9JNxRy2QhYbFAk3uTAF3fA3mm6BZDKci8w1BzAATutQe8E243sdGG",
  "key5": "4VXFaz7L2QCorZa89wj6ovUDJkXUdovCGiF8wcvNqK9D1Ju2zxCDp71mMR25Empgjtg6oAToHyT2HmZZemzj8ZP3",
  "key6": "5azbrDa2bPQWemYbv5cEhq1W4UweAQT1LkUAddzAzKM54AU88RDQzoGREbeNthkMVU477DuFmDSRZrCiwzYg8B1V",
  "key7": "oKf4T9nSc3HtvL5UybDcqyeEex9RA4XYS9KTHbuHETBb2SvCLjhH8h3fnyxAb9dGJ2fs2Ki3JnESBFXErdQJSFy",
  "key8": "2mL8ffi26UYsDPhAVqFNkEdjb9bxrKjYKgEoKh1PLFxJxKLdunsTcALcCqDkW2dUXX9eWkYVwYYGCaGSvUsQWwwJ",
  "key9": "5wfqSoxMekCpqgeY6ExL8ep7hpmiVCiZMmy5pLuu9PuNamHqrywwHohuX7LV7QxouTg2rAZLh6DGhvjJEJVVHAx2",
  "key10": "4qR2cSV4hS7gydHcJA9cphC8Tcmgb73F5KapfKGYZgTJk4DtF3Hf94tcW1unmL6ZUwAxWMWCi9BWvihzbKZb1siL",
  "key11": "4YMbKy7pzmhyAv8xvCVYo4aCK2LP5LGsntZTbCTUeo1PY3sbK38cvWi1LJ3xWnSuNXe3PXguhpjoNRUG4A8ysZcz",
  "key12": "4S5UXCnLRGLPkiiVsR2jvJi86tGCyF2CB1XAbG1jMMkrwUAfbc2vzzhoopyQmWFmApwvPTete3M1Hf9QfVTrq22b",
  "key13": "2oxLDCZuLJKicJkYideYGe9D7ZyfGte8FinUMxCzGsiifU1D8CjRAVZuLKJ3zNwAz8U3PWqszx88JeTntJfPKFyo",
  "key14": "3GzVbHKcCyxCMFp7tSEKqabeWRFf932KA8TpDJbto7zAGarAtuPXdmk5exgSmAwzKpdzgRUor2FUsUzRJZKEivmV",
  "key15": "21DQrVfH1fdCz3qWPGaSdTzJJDgedMZbup7VSTdacG3QXqwuFaswT5uBo5vRUZmSw8yiv6iCrEY9GLg8tfUnz4Fa",
  "key16": "4hmMXZ117DZ9tP7D4E5S978Sicuq2KNQHtwuYPC5fNUFwTUsFizEEyouVT4GMPzDaFgstx8DuQxk1R79aDQ19LWR",
  "key17": "3YfTKMiTE1vvXwMEqvFKyQppo8W4opzNaNRPk7JXcCVw1fgAYZ1JodNbw56YToYYYTsQqbHU81WK2DoeQrJF96Zv",
  "key18": "4ZaRgqDsvR9iAc5jFKhCio1tJrrF8TG53ENwdXiSPzLaR7cWpjrWZjTbBQ2WCf5uL98gAEuNTP4Wuv1N6XUtn3fw",
  "key19": "xDqHpkCnoyv5V8hguQMWo6vHbcH8iTsV4C7oyXUTya1s3qdQH9iprsfXSmmyDs2fBNWEkvtZRrCRu36nBs7uytp",
  "key20": "22PxYoTMw3V3fXtKuqB99SZNrfdMJJQC6Te6rPC8J7hrSDH1B2iVG9zcUchjiXLPokbgNeUnF9g8LqWk3rMbugWs",
  "key21": "QcVBTYsnB1jTz1S72RbAPu1EB31gDrjaDsXhzaQ3DqGDH5yKiHDmi51g1Eqz7p4GNSdwf4synZ8j8ettAA845L8",
  "key22": "DjurfcVphaoL4KkA3p8XTe9RfGDHxiMCzzvaaYeeDS7rTExu5QqxCwmPqtf2NK6L85p3YjLo34oHNzX1PcvSyQV",
  "key23": "2a7P38md7FA74UP7pNkivfHivDHsFJm3bKbTZPeuYrky7ve95UXL6atVYgiMfsnb17qH2FoxmnAYgnvocJmeDtBX",
  "key24": "4r6vSeKqKs3xt6ztyihq7PoHJLFeJVsNJttoWvJ1CHksNcT7sV9erAH6PB482PooKuEa1MHoabKhuEse1UDQSYPo",
  "key25": "2rnH7a1cHPWYw4ZmMr9E7pdNtKEAXsc7MX4eKv51TifwND6EUwScPRrb8aWxafJzpJkJhzWLxagmzzMLUzxuQMP9",
  "key26": "dRqYMwPy6EKkHEBhUgY8czkX2CfshR6xRUW6cPusESGoej2zJFk97fGMSVc7TvMUayHJiDE2MekooVVPhj3VnVp",
  "key27": "Zrk1yg45Qba2RaY3yrFNoJtbaJtgoj3nMECmPwBPK98tTvnogpzzAdDvqXDLrqAjE6q9VNtF3M8kKzoG4bF8tGo"
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
