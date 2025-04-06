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
    "C2L5QFJCdUi3tfaLAfEvtoNC1UAKa8SMtLFi8vVRDLwtFaVSCmYLjzb8jeza81ETRBbSh7wfRGTSVGNJMqXCTUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "enm5DDKsg8WYR5yZS1kEQJhATQfbL8Sp2tkbYHpVxx6Ak3gnGcU64mnucxAsKtvyTKwdFGyJJWcZCNRhuaK5kZA",
  "key1": "c8ppduGz5ErRMYzfkQsSUfAQxpyi5opz4EeDahGTXqtnjC2qxtqNFX9LgpMYT42GcsT9Dq4qK8ngkSpBWEM6YUz",
  "key2": "2VPyh7ZDgkpHJiBmHwyY9JCMhBQJSvYnYwKsKELKPCCVQ9k8bVkneaRrfJ353ap2gGKEhtmSyDcyxKRVrkbk9cFV",
  "key3": "kgx6AopVNg544Z8wxjZi1SJfAw4ZZeJNP3ziHcaGnwUwLesv6C7qo27K4RGnVeWbM35Xc15MUbXvGbsBMWMeBe9",
  "key4": "2QkqajKGW1Npsxa3p883mQ7qvVJtGUMUCEMz3vNtW7FGdwTsHeYs9T78u6LrVLxHX7v3pr5i65U4MB4N4uhavVdf",
  "key5": "48sHKVF2DfGoVg99VKuzqK2z24F6x37ph7e9yKPzJGbvZUZR7SzE1oaeKsVkEb9bv9jyQ2kaYYS6PYqDoMsRKRr6",
  "key6": "4nhPMYEWXxnm6dSD2YoRqqDSmDKAEqToSPKf2t2EtsyaTJbFcRRZTUNGjWQ9T7a7ogEZavUY2o6ijLPqxSy1B621",
  "key7": "hXp5rARCeMG8kVkeZdEVVpT27CrmYyfWkwbuiehF3tfy9oCzY88HoxdqLZDfqAJ5xfSpkAahYJ8Xhnr6PJSQGSP",
  "key8": "641L2QwvGNeL4qZJMgXXgZXgDxfaxPGtiur6Vf6trvnSVpbpganNKHfA3ceAe28MgMJ4jhbhKrckopLQbXhtCyif",
  "key9": "2kzK6HTdG8ixE2iPBfdk8EWEnqtzDgb87JWrBZHUvhBd621ews2tGc7TgJSkUtEebSE5pJSwRaQ44j68qhEJ97DJ",
  "key10": "JPRjYq9eF4CD9t56xPjjQWQmVghi7kujJ8UNNZgM6kTQV4T6r6xAXxvZdMVGSdCnoT2deGLmke2TKWXVDJgPJ3c",
  "key11": "Q3eejEXdCaJscuT5LApguDfwWsWRRqqcW7TuS5djHiDhEstSX4ZE6XVKrwnDCmNzuDJxj6iLbj1tEsckK4irfLs",
  "key12": "PK2LCzcmZ1pDEKukcaqHfaYWsD5tTVvowjKPLfbgaFGdq3iYu8LhAVu98h22m7evB6GFVR1tRYaMu83p948JojQ",
  "key13": "27iztjt2qbT27NaouLoT36fukaAjnmmM3HwbghxWZatDjfUPdNeCSbESDhL5dRxRKPtatsw5fX4neS65D8i8VteV",
  "key14": "4RNs68xFw1HpopCfsxrYzQWAGwiEoDYNzE3WavLqQgLc9iiHQG4tRdCvZndXH7M33nQ2fmiRKE3W4Z1FGbKZunoP",
  "key15": "4bd3bk83ZHxb3V6G572MWAEuk4VhPyWc4HzJUkFPY9bXWG3hyGWEjKDQv93MqBcHSJMBeS1UE2J6PjritMdb1sZ6",
  "key16": "dALEtm1CmsaXSqTU1DZBj8GtLunaDvLM8RnyaMMt5r8darzurkBXra1XKAPkqKnhv5zQk8ark3QSS9TYiTZkf33",
  "key17": "3MBaYfxgfxUKFf4QqbHn1uLo8ZiqP1QxcRjtdZn6rLTuBHJLwkrBdvnWksa85HqWdSxxk4JDK1pFHEqYnrDspqdg",
  "key18": "4J7Pt6Qq2DeC9K36ruNWTATuEnXExHkSnqL3DSpLpbVBwupjN48BpSk7urmibgBbeJmSE4N9FChxD2SJ8Xr8udN8",
  "key19": "4mb7XBmJHVZ1ojG5FokuuYLaBZtEZQb2Ue7KVLJ9sHsuhJeJ7DSZ7yj7r5dyjJrbfER51AQfA86kWpAnxGECVHrk",
  "key20": "5nuuSWL5NyCbXDACiFC97D4tmr7HZrf36hbVPedeQfhrRwfVuVaRVme5729nmaHFz9Jc7WJSqmacyTp6DMvhJd2M",
  "key21": "54vzU2qQYhF9D9fPtiB67vZnw1ircN4tCpaU8qMiynngqG4n3TAZdKJvKQm3fNyYPuv3Lm4skdc9Mcd7ZYbX39s8",
  "key22": "2vSRndvSgTRMLykFfK1CXzca7iSZoCSrEoprMjyarEy7677tMZBCRyyxaj6AGbJZQvGJCpe9sfpSp59yjjd3qTAK",
  "key23": "sy9ZMuzeCWCQJ1R5Rkaq5Ju37h41bw2JxJSU4HQii4RT7yQiuNPu1Ax3LmX4f2JeT9PYBo5GaTnNGRAqeCeoiir",
  "key24": "5HByrQqDYn1WLyCUTqou1xs5DjyXCrdVh8HHtawh1oNcLs2YC1Gfd2z8N8uX5JbAnj1rJobpnkdtRFrEVMyUZaFa",
  "key25": "4k2BWkkfDqj3mKQyvn46ZWCgm554PXBBYQk8u421Z4vj6Vw7st19Bmjm2kP3ZLFyLSTbiULFDHz5SmjAETThFNQP",
  "key26": "3mHD9jagKjFtSxZaf87gHCMohw8HddnGPFxex5xa3ShDavMSYrcmTc6XLEikfEtnP3hRnfsY8gqEmgP4rpTcbUqY"
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
