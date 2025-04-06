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
    "4YBFRhCqJXtGsGngsxDjvkXon59TfaqTEXBMSULRnHXwLSBZAyzJ34Jfa589XBSLvios3ePuTyinQDNzkhzaKVw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37FSJkgymvyNXWoo1K2vGDMUagZFWqFESNtATLkPPkWbc2A7XvxQCBtUiEEpgbU13QYSnJK88eXjKwHTG1phD6XK",
  "key1": "39vWvPcQi1aiKKPAnSV2sarqDYEtbiy8A5Vr6M5pCooWqBiJgS6n5PKEx8MHichne1QECNH4XqbsLVxe955EszSc",
  "key2": "5LdWzNeGp9gnZF36kbQbKRthvLrqESR9k69jhu8ctr6QKeUZUYrsAbzGqegzdWkQhr8Wk6iZDtUgboYymQGW9CND",
  "key3": "37TCXtgfMkeAfYFKsEESXxU1UZ8heeCWp7MC2QLZHtqSsh3n8E2BuUsNAqyXATgxCGL8TLEDkjnrXz6cNWs3RFUE",
  "key4": "4vqNxv7DBuUFGtK5DqRkk2H5HrCcEZht4PET8yFVyhfUzundQA4XJAiLfcfp24ZyvxJMhEcr6hj9tKCG4t8KGmi5",
  "key5": "2uXskDyp3f6c3WaurqgqNcz9Yh1vQvVD9PyfADnyBFUcvSkPQpduo2mWrW3YPwXJPXn2yMgknchreHoFT8kTK5FA",
  "key6": "4Skib5z46eXsdeaBjfsYQHhwC75H44gm2rGrtEPd5cKsFYdLkGv12Nd6YTWNfY3816ujoXg85DF6YJNjBa1grBbW",
  "key7": "31aMUeh8Q8mUMBRxQJJcYhujiYgnZ4bTVyH6sguj92eNPTJ12BU1Z84ot5MBKHMKwYLTnhZ78zr82Z5Ss8c4nQwe",
  "key8": "bW6Jt8ggFe7DmAqCJKnrhePWQ8eMUqQBQBAcBMPVBZgzu35sbdp4NMg7LuWui9szXSANJEWVtAg6eR72JwjKCXX",
  "key9": "nJKqschNRo3Qj6mQSYckeRaePR9H8WFDiY2p4jSMpbTfr7uuEErPwmN2B9SdjcWJeQCFm9bDRQCvQLDgWTnJG8C",
  "key10": "5mobMSUPLTucUVtVCFm3zATTKriGDYMv1pYeDY6rDytmGKy6WAz2Q7KdxoMDZApM2bTivhg3LHf1TgBrtYW8aDVr",
  "key11": "5k8meJxAkAYKDFbq3ZAJoMGkwL47kzhUtCwJ3gZqLom19DjRcQ3s67mraeJDc55825SY6szZkujqaegM2rPAiMgX",
  "key12": "4UfiPBj8JoehXitx2iUMvNg1RRAdhntWvihT2Bynbuv2o4vWq7d23tasm8jWNNU6BmEVZjNhuAcfAC6SmJCwpRxD",
  "key13": "3ryGbFpGfZoWVVx4iMG7yQCTCh6dtAjWePziffnYepB4q967LRpegftnmH5vDKmMPnaagSUusTQvyk6nR9JaNq4i",
  "key14": "2xJqZrPHX6L6UagEHCFqQhBx9Db9Qb2SQhP9Z3aGYSHtcbntgUcgsGb1RQHuuFhKTPL75dwrdnnY2GcQHW7aooF1",
  "key15": "3h3gJjTJEDmrr1aWbw21YjozT9hQb8q5NeLAkWFbLigzoVAQvY6ejJJSpZqW9BSRcMx9Ko6Sge1PyD1KfCyBRmL9",
  "key16": "3HwZMqdiBLP9yTiufVUN95UQWgjmsZaCFNzV8ArKmSubZQkNGSgX9A6Ew5LDUBkThnNQeQ9194Wp2SxrhVGHwQbF",
  "key17": "MEqEa218KtZDi4BJ9ENhmgbZwR9YnUwPpQghxLYZCB7AGCsGR6y2nBh21G953YiaZHkDtT1GWVwXLayWttWbJwf",
  "key18": "3jMuwaS1CdwPPX32zz9YC8xjJveE8BJt2nxfLbLDhQWhf1z6V3hb78Vzb9HLrzbka8bDwm2fnqcwFVbHb6xaV9Tu",
  "key19": "5Ks4VFmStTaKMhh9ZERM932DUKSpNJMbxuDP71h4dDmNCuUFPNTTZTG3cSkZHBKbbnZh8bvKkRdkoxRD9jHhJgQx",
  "key20": "66WLReqrAQ8SbfdEa9Kv4Tn99LuhsXzH4VicfnL31LG4QqCw5jmkHvMYh3wJNRFbbftKBjhvtGo1G8JxvUNNwumA",
  "key21": "32vW9cqhkfSaeW8PWhvLaenZd1nogLfUnBDmJu5mYUoF3eq8QNeSgQYnuuyPTzsEhYmP3CHb7D2t65gZK8dLQBX6",
  "key22": "3HaA5Bidobpr9Ytf69dD6JCYo5SWeTqcJMahWjyWSLDMHpguBUsyxuBFdur3kNLhEojGRVqPr8gCahxjtFZHw18z",
  "key23": "4Q1AbDBBDJJL2SCJnVU5k4U7EWsBUYxRjY1t6HfSASYWB5PGGv38um9i8AseTcZWALCnjqDyqBrf7yx2p4BPSP6w",
  "key24": "2QoL7JeG4u5yTpsfuybQSsx4zgDaWJmyyLNHB9PZAXCpqnGV6KyPRBstmAZVrNSxKGxNwFMAuU8TUB1fX8CLW2o7",
  "key25": "65WqQXfRXPELUHD8Wr4A7H7Z7vKeXo7AzK33Qg2F35vFrSzTLXNc316E15UcQdDyemrA74r2L1WAybdfqrG5XArF",
  "key26": "RWM9qmLGCayY2CY9CGDadQZWaxdVQ16zNjmk1Wq7pWFhvkxhFUVQCuFVQmX4FeefrPdBAMRkopvyV7jiiTqbbda",
  "key27": "5AFEFg6LGhYfCXNxZAUVgEAjShpLonvZwawqzu5VLYoNLghon57fnWbJ9sVuLbTk5X7xM9PDc5K35YpZmuqtr8QA",
  "key28": "4nNmkarR3Lbkz549WjVemoesFRcPETZR11p6xt58RhFrdzqipRAQAwDWFYeuz6LT4vfLwZARsRBqQQGoDP7ANYtr",
  "key29": "65hkb1EbqkFbDmhC44yhyhFbGH2VBzhxJfQr2nCi4Hoi6ZkbDWV6N7kRDuGr7adfMkq92WjTueMkjHebeA9Fwp5S",
  "key30": "27kaH3aG2WpFFCLRiCF4ejhBDB3TQUhRo9rY2uwXmReiZyyf9iW2WAwnYQ2ktXUEZgkpYnanX9ZaKkxHmBR1aDdz",
  "key31": "4v2sZRsor4nSP9YtaekY33ce3TdoVPBGWCbhwgQ8R6Do4vxi4vZjRSL5mgWTFfWY5VcrRHfVEjVrnCBmbhGaMjUz"
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
