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
    "2uHDgczdKQqP9dEbsFYrH6yXSoPemR31bz6PVpk18AzXRrzyhcqWBZNATVkB8GVGyFr59pzHiQKMZGHt7QbjciPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n3XBSVbZNMVWT6aHiRufpgD6iEfY3fkDgzRZJ4RBE6KWDaKFXUH8bhFhhvNer9XZAAKEV4Ubb9Sqz5dAj3RWom1",
  "key1": "28CuMTWM4jy4sj2t6hENmaKRenZv1dH9SXrdAdur5w8fkoWdQU6jVKLRz6KjVaLED2thicwFZya2Wrpk1TdVuocm",
  "key2": "2sDZ3rSUZjZMXo93XC1k9bFkiVvxf2SUBHPJYeYtQfqGRdqTzpHh1ZhftUfpJYiok3f5ccqXXwwA1hBece3UfW37",
  "key3": "8k55TPbhrpVvoo6vA9fXFLGzhdRvdESPraZtiAqHkZuQhpLh3EnDNYAsb1m4UnLvzN88pQgnSfqr5w7AbQGz5CR",
  "key4": "27KA8S4ueSHZ9zqTaJfxV19t11DEKCr1GPr6G8cN2n8jHzzsMjoSj6eEFL5RfZQGpoK465x6QKfvwhfQm83z4sZB",
  "key5": "5YsZUKBdU8QyxLdrWyME48SZk13ey89SX16Z4Lrx37y5bYMq95x3EoVm1QSfEQJERgPRC5MXKkAkYDSabXRMVcPA",
  "key6": "2UgeBbd4oVypcg6pubmxk4fN9ZC6yJQrZTkLbLViqWU9i1gBYhZDzpsu1yqdHW3LZhD8RHWjhkmzMBrYcnR3p1ML",
  "key7": "3oj9FNXG6QANBqgV6h5PvGfYbpztEz494nrhT1XeTzqg9HzRCompoVoSua5tvYjbdDDzXf5gp8VMpk2rArJEApAr",
  "key8": "5bJFgXeW3Bn4tJEYixtiXh8o7V7EcVq2EfMYSjYVB3KYgJEPQnGjez7kffTiwdVkvLZTyKnm5T9i7sPy3byoVJb5",
  "key9": "5GkrtME75hKnTnU1W65Fi82mnaB5NqSBj58wNeA5ADWJXrVRcB8mj4HVgXuXbX4zCjcqSuv7jeWd8GRYi8Yfravh",
  "key10": "uZBuSVeajeWJcfGfVGsuBgeq7dRd3WxQ77X3x6gPPLEbKCQ2SMU8dcxY7C9cU5E7JacBushNfvoA2WNm1X8bpYw",
  "key11": "4LNm6GE15RDaoau8aNHMv6jSFRv5YKXbenCAsAJQdbaNPR2CYJfbTisx9vpTAVEWYDzj1mhRVAEpdbhb49Lb2iNc",
  "key12": "EVnKevwgvsRtppmGnREeEywRFagxgeJRhb7S6SiWj68V5KzLrQZBNpeE2nH8ncUC1oSqVPYqWrGiXP9w3ytUwth",
  "key13": "3ddrMSaaw2YAFMcE9sHjQ5ffYgQZ3r5wGdu3frfpspPiCREGhkmB7naDsKzdRg1cYDjsy7k61BdwVWnCDfqvDxpW",
  "key14": "5GsjCpWqa2i3RtMi3TB8mFpZ2A7FU8BpqhuLv2JeRy4BCJYu1qcv7TnMKBJwRErX1hWmuYBpab8fJqAfe8iSBkfJ",
  "key15": "KmY7ow1u1kVcwdC9sp3bxpjpvsFTT46cYNyYxXiHNmQxHjosQjLVPhdGBp9miE4pn5RCd6RmsjbSpEGy2TKNEzf",
  "key16": "2A6QAkezf1Sz7gr18FwBWZpPLCAHoB9RJUmU3cqYX31BWouGdoDp6pjPgk3XkqEPtfdGvsLjLRsEGh5HWXA9py2t",
  "key17": "63uEiVFZPQbrrt82QiUQXQ86H1mVPKpz68RokrZ9NyBiXUE2bizShVvFrqgdG2KsJ7vUaNqHAJKtCskJuNgAkcxt",
  "key18": "3gRG72H9t4GNQJMuuMGFU2MGWamGgQmk25U2oHCwsTc3NmEWhHBX7SjzJYMaB48AQ9ysD957A8jc95bGSA1njprq",
  "key19": "5QzpUTrF14p3daYNN5MMeMXRHQJVixTwQ8NoiELHyUhdp5hYXjBW9DbRPogKGFUfYNswxwdmzS5WDX3Xu1bYK8rx",
  "key20": "67EzzJ2Gd6K3LBTVTnFNmAz5hX9ZYsPsyCpMyTTaA1pCzrcMKhEaooQonze99oPso2VSptNSkdSKqAMQC1xvdQ7t",
  "key21": "4Qa6SXEbaaDXpXvFEdJGUrwynGWkx3QtspiYFUsA2HVPojfnWAuhK4HBLsXoa9JJEzweoap8Rx4nDahuPaoXhyE4",
  "key22": "KSVLT2FvJ47p3sDvnbhkSdhbasJ4ZJyq3HZjo8mMj67QEG6M2tC76h631tqy3neqxptwjxXiHoMtsEexMmdfLoP",
  "key23": "SFxnYbxgUnxq5W1Kwr6Q4NMxbzRxWSHMiEuA5Rb32Srw7tXnXQfE3xe3kXjdRdtrrvrrQCgeYXh1nGd1DuJVYn5",
  "key24": "5EohYXVoDmBSDfwneBoRgwrJQMMfzkidqAqSQwTC7H5q8CPiw94zpTBzTBtpgqZp2nwrtmZxYRGdz2eyHJNrAd4T",
  "key25": "YN9MkEp7WwGVdqNEUuckUNc7K4N8udmJC91DPfEKDeSkQmQRqgFdNCnsL7en4XJD7Z86t8wDYZyvHPy8jhzycme"
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
