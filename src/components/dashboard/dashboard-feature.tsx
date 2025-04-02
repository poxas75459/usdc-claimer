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
    "m4YrPWwiu5XWiPJehM9tfULYTWZ75YtY9nU65Sn4hW3A7gxHUEpzGMnL7P5SWiTW8unTmsZTGNbHdMgCGJS4gYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ceF7P3Gawa5UWKh3f28wQSEmmmxCQagGQFxBtNbrwWAAoV1MXwmSfbWdxdEgKhsxojcTquXM4FV7PbkwekJMbad",
  "key1": "5KcEST15UVPYpHmGEzLfKAsJQKBY9NRgsYf6XLZckXqXMqW7JKPQCxPfiMs4E3tzwY4tFcFtW5vmMuJzsCoZiX7F",
  "key2": "4PS1DRSfrPUCLkvtg4c5f2x6vUaxNYV7CXwsiMCANrmKZDDJAsrS43gBFXh2BEu6U2PZhXiZRuLFBKDoJRUNCrG2",
  "key3": "5vYsAsWLznkTinGiXk3MtdHrAFmnZ7qfDFMG2J3SpcL6AcWrFEmm1EMLs4AMoLMDUrf2jM5frZHnbkEvmBrSsgGp",
  "key4": "2yYu5VTh4tr5mZ46LhTG7exGG32eSJEirvovvtxotybVkWjHXuwoezM9emg2c5yVrwBFzjdoNW8xgsdTQEpSuAcL",
  "key5": "5rSmWe1jhXgmPVBTzSBQKZKXYJo8GGUSzZuQm4pr2QuU5EWNoDLLP1xMDCY4S2wqe4YEibn8KvUVZWJfidvsXtQt",
  "key6": "2UGzYzswowZytcNY73GMevER6vVyqikm4e92Vyk1oyN2wC2tVGBtxPxpdiKjxgxqTJuKmvLjcLaoQNBrdHawddyX",
  "key7": "4BHV6WdJahhRECarx26Em1KNKxk17VqoGmeT5bHeh7b1g7uEqKPswVALT4oFGA3aH2scpPGzxyW2vy6H8hYAYPkj",
  "key8": "3rhSMeojKHyQkJ3Lk4brTnQZZQNRsZbTrRufV2gwNuTghALtCKZ42ictCLAhCYJwtgyzcri7UHWCErE4fzMoTYQq",
  "key9": "2voL3eokjVSn9K2hCDg9CfaGwVENeB1Tbgwd8QRAqLcXiUfhLqHgBgcC2VN3rBBtu5rZjApzEb2fVRYKeufYXsaV",
  "key10": "HkBUHhmUSRwowzgGtT8wXuTX8aLSq1B2dGGowkZSE8sbaozQtrcgcbz1UfkLbBDcRJMNsgg56X35Pxxi37xPwpE",
  "key11": "3wWvyVLseZBWoBTLa4Wr1wvaxGnB1iEfc6q6R2jxixuD2JDYCsfWZcY7VoftcfTuZgknvhoBXkJBqW2dxUs2m5eZ",
  "key12": "4CsR2JcAzDuMSqMn635NwCdbbFPF7qvymEKxrYZvZhVsuFk5yCaHWBWSsjLMXxVfjik2zcbgdv7oPUgWNPEb3Qiz",
  "key13": "3BseaVSJQZqivPcE2mJPDuUa7btcxQuPuENQut53BXHZtjpiP3WDcebRLkQrfS1iBoMMsdFaiXh9QjD2TLpLSn43",
  "key14": "2zLWQnaFzmxCot9NW4WqyUGL53A7bcasPACxZJMeC4xmA7xhon3LztmwB5Ltzii2iHZZmudoyauRxxVhKsySbfJN",
  "key15": "2L6GJTyH3f4pxPeYjTJPnRcTpDFpJYVTfmR6iv1qsAvottS9eNYdcXubdfSYfcZjdXhstxwZmDcDSAuu945gyVr5",
  "key16": "2BYgJFJqXBLX9vafFqoump3s9FgTqEuwJzLKfex4zDy9DJfN6udcRvgYMFto4dWpjHaUXELcn8mozNmqtK7XixY3",
  "key17": "2dqcvWL9aEPA3b8GD1hxQbYEmcqraK9Yd6qgwXsvxZy9amKQVpYRP3muRJPUVVDumka8y5EE2WQdsDbF1gDB2LpW",
  "key18": "3CAbsS9Cd7APZU6VrCipedMQAh9B1Q7JzqNoRG9WWBwEZf3vPhGBZgbGSuZbzmYwXeE3tEzwtMQ7iRNp2ke1wMYW",
  "key19": "3TkmT3KphvzHrF4vAH98yWZnvzE2C4jXNVWzNMBUPRhckatdRXr8qrzpm34b4MvpjQcYDuf6JLiiyXsdfrtG31vV",
  "key20": "2x4s3oNfSRvZQvGeARjEg5UF5P1r31q19rjsB5HEQNpmZ1Jum5xNConXnUD2Aqgi4ra7aY2LezzBqvgnLsoLPMjF",
  "key21": "3No8FPkQLvcRjQ2msbfXF2HmKGLhrE8wgahD39VsMBsPDmqczPA1wD3oksQH8qeZMPAcUbvUMtoaRkjT56615Ysp",
  "key22": "35xhHFu8dSdAepQ9bhUH1wisqJpqyJ1agrRQrV497T4F4N6JfXzyse6mKAHYZhvWkCyPaSPahRvVWiYfJL6Vmqon",
  "key23": "5NmNDfwrEzg8dPbu6jnd5V5ji1D1fX7Agm2UWHY2qX7d6MwjAGnXQFiat5TUQ3navu4WFAsMVhVTCUp2u7Q1iVkm",
  "key24": "GQu6FoyjuGiWjwirF2881xidnsNfCvR9CDvR6HK6ygK97yu6e2iJLf3Joz7ySaL6wMLuMm7GC8tbEPWZ5hsEghV",
  "key25": "5gLhf49AMkeY2EbJMqyJymHADnfXYJzhxPXBNAAP6szRRRfmVTXoVgZLyeu3XAHdbAoLS42CuJRQGbWqV45EyBxd",
  "key26": "5z7nCcefV5bDsDVEpRTjSFJYCJGFFscLv1WAzREvazkhMZYrN9iczde3hiWifPiixj4xrBNCM8zEjDpVjvAiG3K7",
  "key27": "MEvJGMEdvjVVxcAou3WeKKGaZPujNLjNKYDCMqd83r9PswjzX8GeMGaMLL4dZcRxYkJ7qDTfnm2SybtRQ7BBH6b",
  "key28": "5bqFWyYkz93cmCpGPVACsLAk4PBEw2BSU4hPEnh6HLrkjJgPucEkMoqv91cZW6QYf5SwKB7fZ1mzEDk3CrWQp4Jq",
  "key29": "3Tv6FoqU25zg5p4ubG9n34JjpEtYdrLMyHaXPHSJxPCJRUpivyCHAemwFtjhpgqX9jNMUR7yqVWg8mXHnp1DSfAw",
  "key30": "5nu7CCVKrkEPTUYB2PpkE69nMns4XPLdpa23hbYFYfVDNXV1cJ1s7Np81yCeWdS5n1yy85AUS2htoQJrXxsscgxG",
  "key31": "2RGBdX83tT55FUvqjiaMB8dJx9KXaXpMdiKA1TrHHjs6WrdSAnSe4EJSpo9CXCt3kgqodbbr9A7ccqMe18rWWwKG",
  "key32": "5j3Bvj5evqfDZT16FnybQHYFEXf9MiKZ4Ju3bjeGGsaQ5P4eY7pSi7Kf4k4g9Y6jao6TNy4JTX2TnsKpRDjceMFG",
  "key33": "42nxtpKDscabrPqkcnNxpxz6zkRYh1TgLEDCeqzQMx5XjiGmVjxAZJwHyy68XDwGWGexXEbvXMyF4dutVMcYSESo",
  "key34": "5KgFZY1PFXSEk2EjnwewsqgdKDaWrumf7G7JpAn1kXdMCYcgfJiuGxAFsXCAS77b8fUGnKsTo1PSAVj4CboZCjtP",
  "key35": "5RA6gp2gwmYSqaq5j7d8wMLLzgiuYkPUuC94X2vdheswLMzY9WLWr1eo7E41nbASMNDqCB358e1J19YvvW28rap3",
  "key36": "36kmuopKiKmthJF7Ucb8AMJKi7zvir2Rsvwd6FKafhXS32ecBaVYk3DBeSXPXCGghRYii5kjmYQnxBzH4qYvP9x5",
  "key37": "2PtYN1fwg9FHcnKZvdiz2fEeH3Jg9dyqLUGj5ZLT4pZ7dL9E8DihUycV9T87skVdndy4tDjC42hWCUVfVxp8K7km"
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
