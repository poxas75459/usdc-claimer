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
    "3GwHx2i6kkAgcD6J5uMVumgnsJumutHPnZ47EBuhrnyh4bRygWAs8461JRvnFWzRvuJuowo7ksaTxh3JMb3ZJcKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nd4N8eBgS36X4bYzQ4dmBMqHvCwrPCc4AVc8Lz1VmwvLie1kW83dCpnv92wwhJ6syp7rhstzTDN5RdQiWrobXtg",
  "key1": "2N3EcLPfG5aX9anR5NssEYNXdR8WjpuNCjv7LkA7YbM2ySTPJJL3BdVMj84CpXcFMuVEkfZu7XA5hcYRoAKu8uFi",
  "key2": "2Stw9sspRKegUbjQk1pLeNXC86WkcCKMLTMi5c8RyraSeK4TWTXHQwdC76ipa2GkmHrh2JyaHvwz4ZVTPbGxipQu",
  "key3": "45seJmv1Pxbne1a1UDjFuBaUbePy2Cp9K3Mkhr6zyDbrGZj67VLotMd73ka97n2NJXvaZzj5dSjMCHvcdEDKMsm4",
  "key4": "3UKXrrnCCFnY5QvqjHbJuDUZdG3WpXpFXZCpdY25QTWZtkPBzAkqfCHh1PE9DUPuYkRpYyGGkVoZxJEgzGasxQ8i",
  "key5": "311d6S331b46ob9QCecBHawJkhAFyasmQyYvcg1JcG4BAMYdeoiL42t5s4bs6woMG2H1fFC89uoDXrt98Y7au9h9",
  "key6": "26Lx3cCLqp4SxgMMZAiSJFdonZpFuXdhsLfEKoDVV2bQQqTg1fUi44eHp4gPY51wWk22CZbR2mYysQQPCmNGoo5F",
  "key7": "TfoXpLScpoguCwC9uoNE22c8MCd1w4fS6soBFHpHRBt8Crc2DwRTomJk2kkSB1mnxoV3PxU6eUGokRntXCB2qgW",
  "key8": "5WBR3Uief9ncBYkRsWbBxkWvejP22mqQcRBn9VMCnRoQd8F9kkmVhKJcXF7D7jG7Aa7ZJKpGWTYWgWPfmr82SSnQ",
  "key9": "5nxdCkj64ajay24iZTDGALSUXMePgUgxH24jVtSYUmKJyD7bNR54CDWEaYvaHJP3bPEnJpAgFPPaERfmXCZvH2LR",
  "key10": "3Xy9dkAtC8rLf97mHJm9UbApEHcvaaa7kP7EuBPViVnBEcwfzombymhFu7cNBE491QSqP1V58fNuhBjJoqxYUU3G",
  "key11": "DWLJNgN9GcW1qewkwbTCDFVGjNNtVK6vrhrfya3f7sD44J2V6uJNQv9Wk2vQoo2iX3VdzhfxmSCYvdRek9rWgAf",
  "key12": "4hWa7npAMiS7u1FFd7NCQtkD2Hb2njcomtSrg47f7e7ut8P8p1KgWnByvBndPDb1dhU4zn8oPR13jmdQHTQWd7tu",
  "key13": "2LUpq2ukkgHZceFTzpGAfD7Ltp9ufvh5wrornNJhAyDqthEWmiWVA5oE384kVQbfBKg1D9LGojaSSNB3FQnbVxgg",
  "key14": "2uJb9Smd8hzj3VXXf1J9LkbQ1EDRy7pvJZdCkt2wSYEkw6GN8R5ARN5yt34puQsoA9YPo4DynVpe9N4Umb2nEMf8",
  "key15": "4tPXxvGvveDx7wEbsoT4GnQvznth5G1WaygMMaoARc54RBvZYTVzz9hEzC4pNJWHbjPuw5xb6C7LpavKqZzy9nsd",
  "key16": "4ggbMyUKQTPRiNP1xTtPpcaHeujrh1B4tquNwSXcTvgq1MYDhX24P6E1o3wGx88z4eHKjrVuHm6tXt7N2DW166WH",
  "key17": "488kfJKFbhM9NKx1JkUfKbGbvxutduBGe36C2KDzk348SB9rn77fctjrKvni2D9xKpiUg48F3Gu4RbymDv4tWA8y",
  "key18": "5NGYTbGkYcJ3HGtwK9N1RttywWPbp3iBDkSWvNuromEd4p1hRTSf7mCNZWkS4C9vp3BKkLJszzdHihGAJw5mL5yM",
  "key19": "4agsyg39DoP6tmQ4BTxuK6XYqaa6aJcbmDDEJq8GvMxrYr8YTp7FDawqFDbQ61r4HgJMUNenqA2SJLz11ETygDAp",
  "key20": "51p8fyDUUKs22pnt5aGXGSr8NbuGeRkfUnpRymTZHaHrFEyuwezBV8sDenW2JECbGgNfjuDjF8rytj5N635pHBS9",
  "key21": "5av1yK6gAYHXURxzTqnZMsrRebYgnyHon1kVhdpsgCoWfscp7pVoxXZa7VvRZQUEfRDgRLGoXwPrPxyJ4Q4VCZCE",
  "key22": "2gScErPFYkovP3BbRJ11LJxvZ2R2947LdgoFk1jeoQp4gJivf6YFwmTocgwJEQNT1TzedY664vtjsRAXWNGCetR1",
  "key23": "4KHxNf5hYgELx7TLyVcsx2XU2XtW9uXdYMWouVpszAB3RboUgsSph1sBtJ9H9rAH4q2ZN5YLvpq86eysgdtv6sxe",
  "key24": "2sRFPWst4GT2uiv63QCseRMwLSVQkdU7DuVn1pdVkZ3N37x77qtBVsopLyzuAMkbCkpouUG4vdGCoS8e97AbBNxR",
  "key25": "55RhcbjARtmUWxX9V7ZQp512iBvxTsX3YZdoG1BYrhH1mBvqBMrbqjV756zPKML9Y3egXCWNoAK5FQC43FyFNxLn",
  "key26": "vRFTdJe7keErirWR3epmG7CshXnFagWtqKfVgaHcg1QmSkKYreJ53QykHPWtCaLPLR4SHEUMAnmJ7pE6zSFv6Y2",
  "key27": "65pDysriyDwtfXJXEMmdsQJQ2muV7JV8zPoRG4REmcsf7s5tEEW1oXWJLrpk5ZabEvUhzgxXumEmvTKK9eep639H",
  "key28": "47MVXhd6oCcKbpLRw2em6UFBQiucPuszSp4DzXJY8Uc6sBFT61cuGsoRHXodEdVjrKjTFoyD2Zcu3vo2ocvvqJQS",
  "key29": "2fKYej7xYL7vUCgXrcB97qHnAmNptUQT15dzvZR1AMtw4fhSrkTmSUigyHMDwgyJQiVTVK8XNDpeqie2h6XCyBoq",
  "key30": "65e9mfK6K8J1CFb7h1SMqD7SjJUo3vEUwkHAD5ZweDEA758sxgJ6y1TzzUDHL2pNRF8EjYUv3nmWTEvMNLdSyi29",
  "key31": "4B6UFX9nXbE6GycP9SoR195TPM5JRQydHkryQiutq73dNq7oPhGn5xm11LZvfWrBFD65V951h4SciDzte5ttBZ9j"
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
