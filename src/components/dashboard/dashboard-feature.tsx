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
    "fFMqk8qeBd33RcvRMZ11vfXc5hg31cXDT6yTPhu21kVqmmYBRK19zwWjSQdo7Ze4CRNvFK4UNp8dXquFCHN7EdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vjBqzdP1GDeeHgotb4etiMe4fvyJUFTLsVXMJFPTr72TjycVV6sbYu2N1nrPvcTxa5uuVkGKSnnTdDCHZbzE8n",
  "key1": "3uRbSsqLqpYYGez4SHQXRTWXY9P1gbfBTGPrsX1bXCk4kAwWH97jqF8TMV5r73d2Sxqaq4rtYFcoeASVHQc4VUgk",
  "key2": "Z8uCZQBs5L357ntZMVDvE2jojgRaB8xHjnMH6s6z2v625GT6h9sqLY4a8JBB4isc4eNUcCf3fQumtNRAaXtbKsX",
  "key3": "2m71aLxEqN9sTrBLopBUm8txQnqLpk4jDKebDxWNXvoaxsxEaJFjSQz4CH8byY6y7mr6Zm9WiW5erZj3Hgq1j6up",
  "key4": "41nvrZL8LfceCmHwRKrbKf4i8Nsgy6WvxW8p4eR8wckk7DxGwkV7xJLgT7wMHGuM9AKipVDJV8baq4kYc62GiepL",
  "key5": "3J61HeFt8ByJgtXAmKNZYB3u2eDTxCmpUVqMZywaAdW6DAzoSyGB2tNH3QjnmWRBTafwcDod6mP94HyrFSxZnLjE",
  "key6": "5K4DiE4E6m75fxAhu3MZ68KiGgndmgs4jzBoCcF9kjTN2jh4VRnC8bryTYXpYjb5YQyA4qQLE4Jq567NabrG4g84",
  "key7": "5YEDTHDNAVNEU46MBWkdwYKLDzFnRJgtXbUpqQftwrtvp3TDRuewJFRmDqoM1DqnHrjqm43V2rwQrCLpCbdqCRcD",
  "key8": "3K3rwTaCJSdoth9DWUrNZqajUAZJRySa7sVD2HHVojotWfEgnu2kRtCgidEhwtMgBACXQSTWPpbkZBFqgX5LKuhg",
  "key9": "5atYmq24KYPu1nai51RghTW6qfWCRrW29nsZuJ1kVgVW7Tr19jNy44m12sezSVPrX5M3icSRnJ9Mo9s3Fm9tJVm3",
  "key10": "4itkLbvXchnEic64WGvtJgEyUFwTAo5eG1xK2rk3jy3rB6t6BEWZyUeFwLdhs9eZJmQfsF8QyvMndBimxvW2JawP",
  "key11": "2ewb48AdwqeDNcR3yjEWG14Drn9yBKxFGRG1PGFFtDxwsReNYN2pHQuEsisPRgRdMg11GpoMEq3eYpmUuaseKSde",
  "key12": "5RM6YJKWh4xQBM1P2F1PDGNo3ZoLq7sCcR1B8z6jiM92GwZg2GMDXuU2k1iRaoj7LmiHP2M4ZCkL9VJDFNzcMfTS",
  "key13": "3f2ohwMmFTsWBBSTuNAoPH8gCurUxP4f72qQ839ynUFbD5aMfqEKZewJQUXd38EFgkR36LC9dXQLNRyYL9zqK8do",
  "key14": "jm7BrL5c8Ri62zpzX8CQGiLCvhhCN8p1aLaZs8rQZLsXgcACm2K9hmUWzXdWX4847VbqqaPt4RWrSQ821y13u2f",
  "key15": "2c66DkHVJ5sihFUYYtHMf9Q69MrdiUUrXrFfmxpmzgsaeymEDBGgB59AUtwPQj7AZwoUV1CdgCVvBE3Sj4TXPV5",
  "key16": "4tgKy25hBxpFZyHb81pxkdyJdMqqtMYDJk7sBr5WzxDjfcsC3AZeK3VvyBASpNu76F9msJqbg6AoY7NGVSm4LCqF",
  "key17": "2JBFxP1hKavtjpoJ6Q7eJmzaqcaC92i95CXdRLGrNuEYB9t9qdAyJ8jF7gzsGuhwkqHmJAcqPjA65Mk5rzNtBdKr",
  "key18": "3bYzRbQE199HQJfUQrv9VT1otdcDi1zJRx5VszUEjTucuZCMKzqrkYBpemaReEiGM8eYmSzxmYGLmSEScyF2jd9e",
  "key19": "4p6npLpf1pPh5g415R8cUk9WYyRs49GAVPGgVRdvymRoq5YBp24PaAtCz5FFjziZyDP4EZEhumWRR6xS9K5mP6br",
  "key20": "5B9TUgBmxBUQ8yEXAa2X1s332FrUyzb2DuhwGs38b8kizhJSiudqHaMSdFcdSdmMfC5k8hzxvv37ySLortK3xfvn",
  "key21": "25eaXsrGiHVrH3tHQVzDQsat6o52WWsYoFrDnwnVkZ9ZV8751ZN4fkyo1TEeFrHGXS61muWjRmgoh57exsMs6whE",
  "key22": "omWRvMZh4n3qAd8Z51xzUAnWnBGF69Y7HyRbpSgC6Qa3Tc1yiSnn9pFVCPeKmqvyiRmDuPKLwBVESy9Gq3XGwT2",
  "key23": "iNQLX2Ve1AQEXn3YH24w7ckdmG19apkwXq5q7uKaM81xfDfJjQW7FYhjiD5oc1Kw799cuRrv8ySWk8Mto4fQ72u",
  "key24": "5VcxZwXnFG5JAFU9p1umg6JKLsSuHFHBwEqP5Amy9pdHqy3ieHiWfZAYFh7PhtkZw4NfHyKrGkjzS88vVZ2rttow"
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
