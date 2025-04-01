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
    "2uYXmYiGuLN1oTZhzuVg6aSV6ynpsaTYc2frjZaXD4LE24QWuUZQtpsVgYE3NC3dzZqLfqjhUC5fQhZriWH5u5D2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wy9EwtfP1ULyCqrc2Z8GeU6dcFR6rWFayiae5Fjq6RDwtG9VoeDXGxbnf8aedTcpAwG3Yu33p1asWKY89imABgc",
  "key1": "eska1y3ER1Rt5DjrmKZhKEovieywuQvGS5v5XE122gyXwskM5cDbKvqpC8F8HdijtB69jca2y75sGEeFHwsCcng",
  "key2": "6iomoAA5YNFQfU5dJRF2Cx65Q3Kd9WbdbAcPBvTPLsRiwut8mESt59eH9B5MQvhxMm1naJgQKbniKV7MS4nnCv4",
  "key3": "4AXEmWmPbM4CWM9Jf8MQh2CwC2Wzz57TQEvqSzw455PDqdWNg1vys3RQqnmwjyb3Ju79sEAonGr41fanV76hsgde",
  "key4": "3bqyUvdLonNg1k78Kb54Ueh5ZdmcFAtUprVtQGwh4Sbx2AZgVBq1mFH1adNRTXU4GpEhLypjrnHjpndrnV6zZFVe",
  "key5": "2MQm3nJ6oYyfCxz91ZnqP2eYfSBHmpmoH4eDbdnD5nRsofbpvz4Bv3pSqwwbRRCFBaQsWikeEqoxZJuMzegDk6kz",
  "key6": "5LzVyMPBr33w3hrgduPGKBdxevW3xQpHciY4icY4hDgWp3rBZqvaypzfeuXq9HM2fLMR8Z4ChUb4iLEbt9pFD5t4",
  "key7": "2xiH2JAFmCyFd7pCAjUFLjSXUbPqxZq6vKEHK69EjPbjahBWVz7uRMF9vDXpKisrYuF4KCpqmEy8EBqwhEQDoK98",
  "key8": "2sPC8XHPJP6f433Z4yqAn4cERykdb6RAqJnb6kiSAowP475w6VqbD5DwGj4ecqWeRMLyrr3yZhAAiwqDaBZ6HovQ",
  "key9": "2QVWDhXLLrURFqXxNQ3sntLioFCa4hE8psF9N6ac5P6JaKgA6vcrFRdNHUzSF28HY1APZGWjpZdrPAsJvb784qeB",
  "key10": "5xeARTJht5VnDr5FWYmFRNswLhqgnAExFXyjvd4HfN7dj6yhNKwVZu7NqJhiAQRc7ATMLwPCX6XychUg7TUc3LvH",
  "key11": "3h9a4mWE3uc5Y7wM4M1pufR86fKRms3o3z5bjyRBN39GTEMfinwYYqyVhCfJdB3J1rkRoK96VTBSMp7ybyXUAooa",
  "key12": "593yJaz1975YMqTcVef5u1VgwZ9eXvmgbq4jg6xbhRutYBH4qckKL4FpwtbQsxfen3Dqj9yXyFXc66xVbykyZUgr",
  "key13": "3NPWxkHzWRvMUAY3mJWU73jLLGQtEqEnkhPhsZuRjgRTfTYx5gZqae9CagbHbwhfBV1u4yeUNjY7nxrLqnJ5jsaN",
  "key14": "5fxNnPbVye3fT4PtRYrVTDUsDAAgyoEjmRXx8zfzLsm5Xqeu5eRPEM3BKbFBwz9K29hbHTJg4PEGd8rNZNyBpC88",
  "key15": "z2E1Qr6r8EaxwFUh4mS3ooZSPjbatuc6EVDxQodf4UqqDVMH2jyNdFgVXmYjYCa6beXnn2pxxYkmRVVEvUSaZrk",
  "key16": "2oes97gkBkTWy9a97U15nxC2QwBDbMEcGF4RoPYuYPQKQJegki5bfYfhg7XgC4PWKWwUD45s5pmCKHzx1jyG1bkK",
  "key17": "4pcJKDAwc6CVGxm9ivUZ2tBBeppsnajTci7LYxpDxvLY1z8Y6Smsix77mxCgSiNbBKASwTGZ6HdP6zVbcvyqmZ2j",
  "key18": "66fCBKxo7G1PKkxxkKmzKhnYRs6EcAai6GC4r7QzuucYzdgFGHmx4iHwqPJ7EJ1idzw2squWUexZhJADdF8MbY6m",
  "key19": "5Rdwr9ghKKrsQ19A7KpARsSRKzJ4yVaDXrHxASzTzwDn1kzqVffirCGEKabYEVwUNFs6jZ5m4YDd8CPv5fLKV8Ff",
  "key20": "5JbwjT5RtKpSmhqea8BBFneNXEgJk3xfY12AEL6PrJq2yTdwW5Eky8Z8gKcvrGTfVEjzMq45t22QkgN7d6KtpNgC",
  "key21": "5ykEcWeeZwFLe1XA1QayVzcc5tboPVYGNHRZHMxw6qurECkyiyUdo6jFqvbeMr3ys8R7NiRCLpHJKNVMDtjg1dBq",
  "key22": "5BeTSZrHL9BxDXT7HjoeTssQzRbNm6tMvLRBXxo3DJz6mxndrkTqWahGTPT4X3FRWcpDNQEgUZr9sfxZxHuDHJU9",
  "key23": "PGYwLP5hg1NVZxTcoPUF43wrmTV3vAtQkYrKjdy5aQ6xksRg8ue4g5FZ2Q998eSQ3rtmuZDmUk1z5oPNW6LRqyP",
  "key24": "3MoHag5pf3s598wKmKKCcNZPnaNsHg2BEuk3JCVUR2B8vziSFeHBE6ig8Zh7wbZyJ5MascNRdDqqK1T92iLHcVnK",
  "key25": "5P37C3QzkiHJ211bvwe7VMtVtyza1DkvAMKWgnEoDx5pXQQWNMrpYxc41BJ1FdQkZa7h94mtWF2GMREaUBbjMSTL",
  "key26": "2xkZgnRq4fNxjj33FYEXPY2LXjVmnjeThJsumb197DdQWCqX4tPQbDJc9jtbz1XnGFR4783DHLHYRHie1CjwJ11v",
  "key27": "RV9Y2HvjToQ6tDrwP6f5S4DAvJLwg7PhKjfhWBgScd9Y47VcpLJnihZNgqMLYrfHArehvKgbPfiBp95Z131XXZE",
  "key28": "4qEZPz3C18d14U4JmaBohBtN9Yu5MAKAgDsLW5iEnnkdxqaXwTcWL167ZuujTwtvqBETcTJCFRTN7rf4QPTKLWDH",
  "key29": "uRTi4c1iZN4FiqdWJkC5dm98TJkmgSnwc87tPr9eCfFnzy7A1iMYdboFCKcGsvkym2L8m7D63fkk5TNyJgQ9UW6",
  "key30": "4RUhnf44aoFnejr3jzRCupoDt5fxtbjQTy2tZnPa5G59XB5fJsF4UwY6KPq549mzdJF3gzZMphU6ozkHJVwJ6PZm",
  "key31": "4FiB5U6iCygr5ydm47jmnTJVyoSEUdZZumUtExCRtrfRWYpVbGUvv1H5fJD14yncmKAfY6fSfJjpiz8K7QC8nHyQ",
  "key32": "4AUMiEjQzrC69nTCnHSD5t91dhQRz2GAQUR27rgfvey4z1NM5RdXmKh6a2QXxUMzFNMy3ZqECpd93p3RWTHiu3aD",
  "key33": "441QEUjYCWmNtbw1Vz3qbzymLuSVCZmci2SzwAKZsKuSPcWxM6S1NiHg1vDARxjurQcfum1qd8nuZGhsZsaAKJfy",
  "key34": "pkAZkZqfABPRTTbeKTmQDsFmKDZtmx2kG6Uo1j2eh6ShTLWZ9RqbBcNsTTWHSka9GSZn3AcaT3prmMsuWRMzHGS",
  "key35": "5U1fQp6w2wr315G8WXcQ2qnf3gsMUEHCjwEEtwL3XW73WYW8w8TdFY72vz6gPRxwHEXVRtG3wejawSMe9Ez7fPFc",
  "key36": "3x1TPu9HQmD5meWKfJuUsxtXvtp8yBKozm1GCSDKJsXQtjekmT6agCtJDdg3758zQ3W3o5zqA5jjG3hPapwMBmeC",
  "key37": "5a7YcxZk7LYtbsCAJmrUU6FrmsARUsTA8Sc6841eAq49f9QTS2KbX2Abdv957SFiaeRhAKTSSxZf5jXf6v9jhDxe",
  "key38": "7jZvaA2yt29VrNHip1v3Yw2vLnb7hwt63aQ5JSN8anV76mNqaRfX8rS983tUr85yEFNo7WctRaemC4edwvThTxt",
  "key39": "4gP9bndTGFKYHVaGhC4EQhDyKsCt6siM4kDw6ZzjWxi5RcHzq931zu7om24ebQ317BF6mBGvicWz8xQC6xHpSXkK",
  "key40": "tRv5SpCzie9GwTacntsdk5ykAt22Tdi4AiSs2p8wEiYwhRTc9ukJACkNQq4wWwUmf3SWCUDwD4vf7D4nwE7seMH",
  "key41": "2cNFHu3gYfduwicKtgFbZHi16MKUN1pzoSNydS5f4hkthw4Rj6q8PycEDozDCZsvxkkWkwPEaLtWewJDJ52V4aJb",
  "key42": "5jVMajdQY7FnqJMcRYvUVoMCtRYtv9JupD2vtMDTXy3aAF76LTeeiUi4Ctmhe3DiQbv4GKo7bFxmZdZSdsDZTsi5",
  "key43": "3Gnp4kLfr3n6euizSwMLb5qazKqC866f7DzMD9NTrFEZpTV9zFcjJekL4Y7jy5p7DfZzz2MrUNvnZNqM97UTuo3n",
  "key44": "Es5FhTgLghYpacnzWo5vCiKU2vFtuNQcQMM6g84vz7n3MUiSjg8TmMtshoswwzU6ettBpQ5ZmRSkoNcz47iYCzD"
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
