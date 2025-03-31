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
    "26kSjaafZooXBeVNicDT1p9RGr7RzjeAzYQqwY7JKYioYga2YBcifacQBZyZbkBEsDgkkLoHnaVUrTYxwbTf4ZJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127Ciz2mtSCqTW234RKxvGqjnjwdgYckVJStseqXBGxhQRT75kY8WBmywLu7xfDQcDx6CrS6fZPDP8cNuGLATG6w",
  "key1": "21H78UdZKHCxWtuDjznjcwUFq9aYSv4w2RwL4iPZihGNzZidjp23xNdUaurBqjtaf16edzcVNn45HhFWsk89C9g5",
  "key2": "5WsQRgux97ewaz67hosgm8KMi3Fmz7a3QBZtgf5ozuCRtwEQyLpcRAD9uZzJESK7TpFwV2bqSb22mv47b485duKD",
  "key3": "3EZVkLTPWaRW2hZnXXw7xKnkKtjmcDBYnwpDFmMu39ErSe6YjmGfiAdHrLhMdDC6tUzcGsX1mTH3EjsHvJNRuNY3",
  "key4": "3EMNW75BQpt44gHxuBGkNUEcrNY4PSPBWDp9xjv1848zmMHhszZromQYa35jTcKqPPcRnCS88WxyeLkB5iX5GpkN",
  "key5": "66u2x9bs3fmw2FY1yMQdDQV8ff1B5gBp8fhZkX5s4zFCViK2ZtvMyVTUDVJ7FJze4oG7o9QDq6tpj5njrtC5ZmMR",
  "key6": "EUMCLsp7GHnWENU962jEf7hVdjxsA6Ai7bPNSHJEEM1X1H4UXFjQx8LEGSREuB9neoYecGvfhre7ibNm5ccCmEr",
  "key7": "26FmaFChU7fRKqPwZHzjR5NbsF9whNfyYGs9tLBSeXHsm3sP8UXZG4yMzPJzq5T4E9S4YqVNUYV9B849EQTPgJcr",
  "key8": "4M8NEjTRBGbMSiqPYYedprdTK5RT3RV75XxQbsfs8yRFtHYKarTDzTd34XumzQ811TQXB3Lt5N9bsW7tB1eE87WT",
  "key9": "5G5YSiixVPoKoS9Q53GV2m7hzZBDiTyN4fo6EqwmNk8i2QUn2MDioinUqmE3usSahzRftv3QkkmR6r6z6pkkwuEv",
  "key10": "31iRbw5QwTsP35oFrbA9hbLdL3cNhvSaHCtS6tkTgTy6iY7rX7zH3MZ2NzwG2LwjBSMA69Hxaixqo4MoJieE47es",
  "key11": "5NX4Dt4tnABgzCwJ8gE711uHyCrJHCxq8RZXWzp3VwMiPHdcNCmbQqrcwy9Z93c1zdBCHQwEf9qUMti5khnT9u4S",
  "key12": "c1tFVX2fEj4T2wpwGEoVeuV1hJLtkP2tJUJ2NjDvxLjQs7sF4oshiwv1wYHX5KLF3cSW4GUkM4VCnWMgZhXELHi",
  "key13": "3fTFfSV2LDocsohqhNPbs8dT45WBWb7LV3sPDMXrNGK4JFvueUJMMjicunm5Fn8UsaGFXf651TfLjyU7jN3mjZ6C",
  "key14": "5vxVds3Y1MY6rAAsJSSZmE4ygMksWnSfexKyGUbgCHV6cyBFDvX8dwXn4KiapYoUPyQjR2K2ZbATjsKTKq8aTEoH",
  "key15": "4H63dYPi2d8SLEhosSaf9CJBd9g9ApNA4RXyBvn33mEqn5xuUHC8V25oqQ6eZDzs8DGsVSWj9S9Gpbpbcw1GStkk",
  "key16": "xpR9M1B3WvpaoxjpNpVwuaeuPfaZJcf6rhJszydjPh5UFGJB4SYv93SpywpYpJTvAh8RkjGwXT9pMzEyfNE5j1m",
  "key17": "SuLpaVfgvvb5MziWC7sCUXD1nopwr9onADUmL9bwuK62TS4Pgh1jxXrPxjxfn5ksJsfDNLzWq4VyaTSYsUttRTs",
  "key18": "2LEXqiFDVQBVuEDXH3hnzKV9p6Ap5MvuivgqjSRQPTM72L1ZqcuL5CwnLudgGoTLtJ4YjLNtdHYz6gsxsAFXDkNN",
  "key19": "P5SJ9KzyUeQPBL7HzDPMeJ5PMSNy4FFC3Qq6Y9f9bSNtSqFwExr3qmiy86CKvevuRmNnGtbP8BN3h2wKjG3fdX9",
  "key20": "5PHBvu1dgTeC9mKe9uK3e4rW3Nu9jj65JXrXoxgYKhc47QA3GPHf6kM51fj4v14XMeBFYMhFPQ5Abyp9UsDXgapN",
  "key21": "5F6ZLewXnrfw6wNSteFNDyDb7J658maUw6Ccr5THSUEaZHrzEMdTskuWEMpfbNcuJy1dakA9q8Np8wYdtCkhdnfS",
  "key22": "3EVYtiazxNeDARAg1eLDabhEtF3vcxy8nbdgzR4uPed5EeEoHCpaTM38kfAid1AbyVDJh5BhbpxU4gjVu5erxS9W",
  "key23": "5Xe29gpoJr5VhewdkyTxoiSxgeqDLLRqJTd8NbQefGJnh3mHGJJ1E3TxSw53mjcDRKYZ2wYoox4RMmsa8i8g8CtY",
  "key24": "5bcAFtKSi97fxqWDaknbwH19wdGE6BLxiCekZ3ZygAZGKH4u6B2ZvBt5EKDsx9JkozW8qanTmm5yS2PfCkmn99y5",
  "key25": "3YdL96D4DLadVrJDXC8rZ6VuVtDVhgL4UNZX5Bq1HK8DmeXbERnTdwfK6NgRm8nZPYoqDPEeDkJoCdvRUHQWtYrp"
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
