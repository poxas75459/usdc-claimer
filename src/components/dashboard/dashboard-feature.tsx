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
    "3w52degEBBAfoZaqsi9RnUEjHasseXY5vc4hRLgrxs1jDM4s8BTyWwjtGbXEQ4jT4ZGKorN6zEoe7DMNG27d8pYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdUkiwEfvJbrXpAd2s6uYYR5MB3bvQQgBPf7T8v8M3c7BNbTmqFTsH3HLskgUSGoWRtyrAwCYD1RdLZZxB6odKq",
  "key1": "3CvkN9LyK62pTNqtxqjUUpm4VFKaDhg9D4jngDyZvYbf3rpYMiP14G8Qi4qbvdTsrWNeG6znUMcMjxvbEsT427Wm",
  "key2": "61dbhduCi3wRcK6xQqkqd6XVxvJjZzQBuWKjhiGoaVFh6PRoBs8xGKPn6g8aB5G9VcLpQz1BoFdBr24sq8pmnyJx",
  "key3": "3U3nnQQ3MRZ2Ujz9L4SU9AfS3Sf6EQU1Gn6UeoJc8PjM8grurg2b4U1HFFqoN8iW1HfpDj9MsZafvpS3zEy9xfy5",
  "key4": "3LdJeZYpbyimeEXp3BoatMYaKQVYLMqMvJA6UKJSoZCpMwascQQNTxNA9psCJLs75JAccKpESTMexXJwSG2B6Ggr",
  "key5": "gKPFF9b9V3xDgJ65Cwui9oghmhBmpiLVXiUGLwqGQrGMXZ6EBDG5PHbD4FDLThyAEBaenTKVwYXbkfz3QUNdmsW",
  "key6": "5wbdpo7x2Wa3Yrbwqwb8J4b6JKcNBoNUcnz9M8trZ8w2QB8ER9pJao7pwY5PeeuXyzy3XHcoPLbJSEVsnaGT6c4K",
  "key7": "5NvMpcHui8wmrruhVNxiZDmmibMD3RWbrLdKwfX2f2diUHnDU6tLhvkzBsWPjviphc4fBTu5hQsg8BYGXHAFckSo",
  "key8": "2WRJfybsidtq2ND6aMXxzdFKWgAZDWQPU538omBFDwdmwkrqgsQuHJp989Lq7oRo87guded8RJafQ4L7PwaD5TGM",
  "key9": "5e5rZ7jSUuEXiWJEskd5ZqG3dM1XsZ5K5Ftxcf8BX39KKodZVpki9nkjGyuMhU3hfCPEja5UM1iYLYnampswDQBr",
  "key10": "5LJfwYwYTQKy2Bv2om3AsesgycHa5k74hZZ7qJtJxM8t2JdKFPcTx4H2qsC7Fn3cQoyFpvmuG2mui7pAhfoV6fDk",
  "key11": "2DQ5yYAHbcDntNW67NXoamXXzMjFm1UcJnr8Uo3dgpyr2vLDGB4sJuA4yez6saaiCH9wLRaio6kk436PwbpWpsc6",
  "key12": "4YTDVHCTZAAjtBXoPgrWthosucc8XUGjixkd1W9rt8b8cdLUsk6d1WjrjfZN73C7BKZxYeaJboD1QC6vWis74p4G",
  "key13": "45o9XuGcxFPjQcQiuKb1RD2Af5vVy6a38XynpY8mXKYbfKw7xdCNiwx6fByExCCDe8RVgCVH8HK8KB51s1XPXDTR",
  "key14": "JUqJ4Jnt5qN1omPLwzrk6zAygWhUGyGkRBNQzwQQLJyF7LK9VdgMPtdDTm8ysxVFvpf5pDzbvZ9EWdkX1Aj9gWv",
  "key15": "6JaoufyHdxMdHQyh8tqLVB6pjJADTR91stAGtemC1zFES6sgEWvttgk5tsnhQoenSdmFkqtKbBimRzhQor4ZQij",
  "key16": "5TjEEuzvJqv59z4zWZcJuHk1iZ3fUUvL8QvzkWNxLYR4RAjrxEFNChk6CbidFm4tXs4WQTf2e12Cuh1BAJDmXhC5",
  "key17": "5M4ZCzB4hvGh1Kdd4SdiCiFHxW3sV2mdQCkuq36azHjLmS4LxCPw2DhCfLCA1ATBeoFEttm9Jqud9PJSN5mvvQYR",
  "key18": "4TYkYQwdFqzg8ohGCDBtccsBjpTTF2zVEmMtdNXDG6XJDgibWucZMKZaDNpDwpcyMY94o1nBj5vgVzVBp3sEvk3N",
  "key19": "3rWUBgTcf9tpSDijPHWrFzgjXq9wJzsRpnQiLd2RUDjXnN41n7d6y9HKufDNb3s4S1MxA6jD4FpGZRHxk3Q8rWys",
  "key20": "2jQwTXiecSXp9ZSivrRmbAWJRoCZjHx75ttftFqrs29y3Pwb3KiXS8NKez8NGmLhniCMQsV3yTAwmnJaestNLrP4",
  "key21": "wnFqfJVYgotsX852a5ByboMy9rYtioce5XYmShWUwY9en3p4uuqzaPKcCdnkm4wHuvCUF4Not9sDAxNBWLuBF6n",
  "key22": "3r7efGnF2mSCofURnYoVa5eFiYAf6nCxDCeAdidYsK23XgywsrUWCCXtqqkV8H634hFYv3JWH6pz9SPPENnGHkwu",
  "key23": "4BYAWaxRCMUNXaCGfUAB8tfNyNTq1rDFSWfMjowDFHhp59yYcfYh7TP9TFEFS9ZH3YtdDYja4Ezq3RD9QdZuv9zA",
  "key24": "2CZARRK6etyuRqzQ3SL7qxBN7gJPAeVchDNteXkhqB2sctTjUr8P9pT4Vj5ZpMtYdBKcxodXKLWfTsjk6nysybHD",
  "key25": "5ZiYyZMAj4A11qT3rzUXgw67gXbGpUo1m8bra27EXr6mWLhp7882k4gpC3eWoQyk7Bd1zAoBnAxCCo39P6pU6cMJ",
  "key26": "4kqWJ6d46k1NbdpoKmkLw9fWscjCwhd2SoS8HT6pVTW8D18PaxAq5VsMA67Mk8BS9cKcwJeA3PxkmXhpnXsdExPj",
  "key27": "5XypShpkM3QTU8MULRqhwyt8yBwAAQb4De2NvjpxXxtEY1qMqJG6bTi1jKNSWpYL5NEMo7WF8jy4fLyTWEQ7gUJE",
  "key28": "4E59W9z2XqBVWPME1hvjKeHxSS9j9KM9GdovEtuq4SDCNwL1z6Q46oawb3WDzL7mpy3udmfjX5wsxZnSu7J98jJ2",
  "key29": "4s6Ksw4DsY4PHqb1uWcrb2ksqXLtcbN3MsiiNp2VvnKTtV8wEkA9fbgL35Kvnanm9icMsPeA2GopYv8QQRVjp7zF",
  "key30": "5UZTYfXKQY9pxqi3RBAgojVavy4ThiVdB9nzC6NcsGWHi9CtB4U9ao4sKVM8V8XP8qyvCSyNcqVUQpRY7vR168Df",
  "key31": "661nkEtBxTvP9vyZwUkDZLUaVgE35smxMJaXRiL1v3N85CCJKtkLSq2CtMtPqqNac8wkqYtzkP1XBSymhziBYHNm",
  "key32": "3oySjNx2L1si2rV6NDToTfmXGC4oEtUtJdKGg1HY4FdmqtMRaCsvWX4uqYAb29iR6gpTZtEPX7HerciXYYjxjfu4",
  "key33": "4sRFzFEGdejujjKzBrE5Kz5CYpKVGTRSeB9gCNrGuFMosYfbAZotCpBuqjLoW2NagXhkCREou9m6TtdR4Cj18DvA",
  "key34": "5o5QJaBdss5syJEGsKHvSacGbh9r3bUKsCC2byKhKfTnnJ9yxz1RYpSQUosyV5AsaBsVaNXuQQ2owHAsaGT6o2mr",
  "key35": "66cWoeKMfmdz4Ftu11d7AfyZCsVS3uBCwarLJUfF969cZDskwhBbCHcv5omz4QsSgbZ1tXewm8932krPkSPQKYLy",
  "key36": "oBKn2QpfRzHhBXv7gDBKprNFyrT4HaLpe8osPzvMvFeANBAPMqrAKeEWxnxCr6udJhGHcuNsVq2HQZzvYKyirsb",
  "key37": "64PAoturSzC8et4dw1mfMCAaQrwHVuYoDbiniNYSvXMTGBEnYfs7fJaEBbTGeiUNf1UdrD35UPf3PmQXvWfr8Tq2",
  "key38": "5AXAboreN7qjwfLo2Tvcx27PPSMdnsgTkxPxidRWf7YfFHHabi66HfUgwpsKea6rT46vzC9VPo76FAc6BKd4rLZg",
  "key39": "5hFqNMjYiML1wdyvYAPHL4ywintpnijp7xMdf8q5vbjxVWDxjpR7bReroDPPxtyQz4D1HcxhgqjhQhhVoL2Eg1Tu",
  "key40": "4Wg6VwUVpkajSMpPqQdjMNg6RcWzjmMjD4EhYtZaJj3xxnKrsqUKbAsjcui5Pc1SKvEQxHESWXJrHF6wZmbe853F",
  "key41": "YgTVWJESTms9fCwEz73fpX8FMNkNZVWsscb6xWEahv9qKMQafivPrfQ1Jcy1dDrg1wi47R9dbKJUaTidh5JU2Ja",
  "key42": "2jk8XBd5X4hin8DGNXAVvzXduQhGNJhSMQiANjCc1LEo3SNVWmBr677HmRw82YKTNkLH3j2xvBRhK2B14K5XMDQT",
  "key43": "4hzsEs7sokSDUU7sMVd4mnWhwqXDJaaEdZ3tnQd2JjDQ9HCaMVhRaHvvS7EhCT87piqpYDFNgA8Pru2HTu4EsHwK",
  "key44": "5syKWUT3md4nkPw9MBhbzgJSqP446KNNtUCBa4RGvvvscRZJH7a3tCm7DwizfuW18HBtkRLzsj1p3E3ycyaYwsx5",
  "key45": "2NZX3KDkJbnshmbULiXdVn5qfpFYKDosqjjWyx4Y6TLLUEEmobWzCu93TNCHWW1NFSauiwQfAe6KLGWShrpPEYyh"
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
