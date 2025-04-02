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
    "5xUtjzQ46koa7TaHDWYtM7hexoEYfCo88GjsXdGzyvpCoajt7azffYW9b2FngEr1dxs3ZTc8GMeYkto5pFdNr8aX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MysdLyhFZK814JKP3Put4uhwAYMGSTGEnKick2zKnwnwE5nQuEYL3BH4XJ7qZdRGNVSJdnztMCKPvXPVCYA27tK",
  "key1": "VppvB3GZ7DQzXSaKbyEAttEToURM64HG4f5sXDWQcx4wMNrt7pkGGXP8uPucL6fhco3QHjBU8Qz9HCg2D8wHDPK",
  "key2": "4VrBSZmTs71kY5wJaNCjrQrDPdtrkZvFyvbYb5zK2wYWXd2sZPtstTCBcKUJ7Qm1MBkFv6NKP5iWbbYQCbhKmbYa",
  "key3": "3cSpBvNw1KKEJpgM2VZoL3vWswsAzgpay9fuJwKy9Ncs9CrrYDKCYryiHZnckz8jrbcTDTDYQBSVFiTJAMKjGJUT",
  "key4": "2rqNTKTzGsqoaLqzyFQqAyFkfpccU57yz35TqJtFjopwLcZjWawrcn18kQqsATdij4LkSzhZDBmFHtF8m5urTQPX",
  "key5": "61v1VugDRb1xq3FoUYNnKzZsLC4L2vLZ3R1hAVqHkCysL7V6cTA8ETL7AWjYyF6Zwqr3EsXuW8L9Wws1essYAP5Q",
  "key6": "2mJ9Pu2iqPUpbdTcXmYwxsnADWQXKBB6iQhWGbeaPfU5YzraAYkf989ZCsv5KuqqiKTU1H9oEAhizZZ9RDbX5qSL",
  "key7": "4TLogb53MQncmggu3iBH73GjxVjwnWv213cb5cS5JSWXFokZ4y8pkxk8jSSTj7Vpo7wBPvJ3E8T3m2wwgsWTYmjW",
  "key8": "5XuQTLnUP2C1hJaMszgk4TCrk2YyaoiuMaZwmW1fKjAKim4bTaPo8N8i7FgDy3iJ3greSjEVj8RoZdQLiJjcBBGr",
  "key9": "5Sc4sXk5zkcWvZKrgzWtBQALvJwrAVhhoBfsjALNFNfX5mXSuZLknCya3CpUo7byXTMwebt85bSoarffgnrUQZYZ",
  "key10": "6524Z9HjdXnv2LaNiDgomEPzMaUdy857ihKn1f9HmCnZpUa4dMVgnCuebZYcEKRCcsLdtG8mxVG5Q3RRgnjQvtvQ",
  "key11": "3VVxz9Q4D5R3VX4Z5NCbwHpzN1BUAqvTvmXjFdXBNJJ4tBg5zEH59gTqxS26qJCo2M6SmNrAWjbCM1urcarWb5nm",
  "key12": "3dTDXUaWzAfamSAmpHV3eXUr2TEQ9TzhBsRFnDB12fFCXVodBWmxn14nGtfXngq66463vMWhqMXdwKVXVMTvyJwZ",
  "key13": "2vhg5SXVxJq6NjNEXgyqsfBLH9Q6LLvGNNYhrrMdS9KnM6u4qV9rBDqusLEtKGTcaKypHAr8UWZwUup4pXuGrqrp",
  "key14": "2nD5Pmpe34F4vLfbTwfUmuYTb7tpWrvMvGdXeFzJhgm8kkszChSNafF91bGEKifJajPYFCrzzJyRkQk8vEiEsVNn",
  "key15": "5Ea9Y9XF6nKzkqGURiq4Fi4Qv2wtDXEwtBwkLWB4yDpo21Bezf2X5z2BsSEY5qAwUAMXEbaGLNepqaQ4yycSWTd2",
  "key16": "5bdexy4MnsoaUFdaGr7pcXwu6WyHsycz7LkKsninCtyfCyxuNEJv56wCq5Le8PJKghz61RA1CQgCtG7A78LCAE8o",
  "key17": "4ALEBMdm6jeHSaX2e5pcMTmWhtfBMz4CTt6rAuNhmKM46X5Js3Gjeuo4UoExXiL6dwhsZUdz1b4VeicofXVGNNnK",
  "key18": "4Wt4BZrtgEPZffVF7eo5ADDmozaNyRxtaEC7o8mDfoQXr4KF765jqUYHVQkL4Dq2s7rPhmkbRrdfTprfdQVhqChD",
  "key19": "5q2TK7EZSfnxSMiyXK5oXmDVTaWiNneZCRM6E78E6nGXK7JP3AquKy8JYxDbEcEFPEeQxh87Kyn6LuBfn48MkRHa",
  "key20": "5u2M1SAdHVqtyMNwQvSbavzRafWkpMC3asL1mnKKUvFPNYenn2hRGQ27Lapc3EW6o6PH6XnvZopDUZEfFD5tsjzX",
  "key21": "388k8mcMbtStauTDVV5aLFQ3LBi5LWM9iyN6aZfgFJq5y4V2JNKNJWkJHC2ALa4Jg8a5Fto7jic3faXbW1EfnP1o",
  "key22": "5bm2L9tVtX6QCbUBzGQReQee1V1Z39tryMeXgYn79xfAoab8p7QMtjYfZg5bQu2f5Ebv4EoRswd2wxs8YDi2ZYud",
  "key23": "496GHmi9M9vfggF3rPxC2uMrNH9jCviGzT97f6WxMc4tnkeEesBJfLgYPfFiv1jLNtteG885N1Kt7F8N5FmqrmYA",
  "key24": "zUWwdMvd4h5Ck16UPniFa4M6sCVLkXyFNVcrHxcvHGveRjqWcKNXwQfumQ63ZwbHrKLcktbuGRmg9Htfi1sGq6j",
  "key25": "5aFmYCHWq4AYXiSCBq2twW6vMWGoWrd4tQ3zRcSjUnV669JP3NuWPuZhbo5PyuNsjqPZScKsjey5FQJCAggP7bMR",
  "key26": "2Q85PzPTEDxiPpX3Z3X8iCz5Dx52k5xnv7fMN6YC4Ps1eHLo42XD8u4x3HR7DqTH7AmptGaWp73eeozJnZZK6pNg",
  "key27": "2GrnQvnc8niyTFptgKAr5QGRNdhhBrXAxvzECijdViv1iQGtX2tFcSGUxL34g3rDAQxReTqdK3oyVqSoGn7AaC2t",
  "key28": "bi6jpUCRFJu3kTzPXmeSGDUcoRSzD9RbvqDnJNtrSdMbwQ4SptB7SXNafbzQ4PSfLxfGtF9qfojfLTinJZLEHjf"
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
