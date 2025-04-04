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
    "Bp61juuyFt5LN5T9sg5kWJZKMKUwqF8Qx3Y9wQNfHRwg8qUJZrXsasJNLnD4JK6sscB2sVyhNRLjEtwaftBNG1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wyxg4Jw6PNSavTwjvM5BwSop4baxB65PzvrmWG7LfmNbgGMA9ZMHAkD37coxiCULwCj8okXshysGgGV86jNBtbx",
  "key1": "2XGM8dXesmUskWSVbYmZvYsbrRKp6a1v3ohpZKc9AfYYiDneACS18p4Q1mivor8T7WyWxT9fysP9yjNLBiKuPjpD",
  "key2": "2Kdsukv39kXJVc5VU2YH8r2J3fq8MiUpMZNSpxzdYkXxffXzzrdve4J7x2jxQkHhr2ASB4Ji5Qgv1Pn9o3Eh2Bo9",
  "key3": "4CDfDe3chedv3eVjAQdKAkzBMzKtw1qtMxFrvBKFeLoJuMSwhefhDuTvaSw2PkCEEeMRp73LNUBqmUz3E5QZWXt2",
  "key4": "1iQR1oJx6p6nGuNQas5fhZmDXzfdN9S4gEzfARjdCeqdVtFqY9V7RP8NT1QW5nDSDhnGBcSpweu7ThTxvy41ZeG",
  "key5": "55u8cdPsiUManqLq8eX6M3NGfzMu7YGCBwtk5SPGfW7TWeD5LouvZA4xHT18HqwWg8pBZvCWoaXoo3o1Xg8DFeDP",
  "key6": "41d4xq8cK8sQdL38iXaeTRMk2S7oMMEKLCJWckVpBYFA2rYzmsmor4wXtwyFhqQuE53QGUgm4R13an4bHr2tTRA4",
  "key7": "3zCmdTuxkUFZVzPf3FQjvkQwo1yxeWncdqpUrnAHK5sahULTtqVdzbmnDReVqcWu4TJ1T6CyrdvGSUVwcswsYNXg",
  "key8": "5fFJVsMk8Cn2vGaafxLAkPRWjiYNWSPtBtX7x4mG3rXFddE7vjuBN5ncZDP8FcirQuc9JdSf5d32QmZ2Rp9qwMff",
  "key9": "3SJUAV7SPX5yJLuqf31YkxMJcTJ3BuYuRzm1WjXomdwUMd49sjR7D7SVD3Bwkg5vzDQYrtUUyZM6qhaEzRh7WZYL",
  "key10": "44CGHyGgSfhGLTci8yVGPsHyyTkh5KPfWwcTiF7VRh5ynTryBAyJHye4gyxgJ46BQ3u9TmRAsiWr6HJZGgQpadto",
  "key11": "3ghWArZMp1v2m2t4RZufbeBESSzt8D9DH2H6AxBwJSkf9EsC9pHLDAizUHCDHY8bqQUdygqdNkpZ6iNf5i9EHYv6",
  "key12": "Z3Kuy3mY8KDj5y9JBVRXCNoU8osTaatu51teG6mMkNTtoUW6keD4NGx5tyMq2CRp4wqcFyWskfFPGASKPB7ZNYH",
  "key13": "2R9qe3UKyVKBUSfLusKeWTypj3imCeqif8KzzSgmhHQqcbphHCFstXjAqb2RtjyiQ7qHSEHMgNUrDFKWUb5snZ6j",
  "key14": "4wbvkKQC9eYp38225swHvwofFQ9kbKK3xVg5s7a4MFBWE4zRojniZi9spkcX41y4PsMBBniorJwqUN4JCLLuRV52",
  "key15": "3ZB4PiuduwzYf9A7rDhdD6SFUFe8dxMuxSz4aYd6re6yF3VjwX6rdm8ognjsxjwMHp5yR7hsAMa3SMcJNkzLXH3Z",
  "key16": "65ME5V6PhAkTRpxkHyPTUHYW8xWih4YTcT39Ezem5i8cy3dpVUcg73HLJk9S5emJYNq2od86uVVPFho5tGD9Qxfb",
  "key17": "4LMKwBK5UbA2A8JcPL9syKDBGceDbGKEcFHSL29vH9vborbESWecFCu5ioxh8P9ceSMm3EWWEwreC1gEczKmdKcv",
  "key18": "52koZ8yxUkvk6WBPokip64JiTos7ik7z6uPdPJbv2VAX2WsiZhcAAA7e3LSZGfwMRSw8gSoCfvewUNssyPCmEsqL",
  "key19": "BECp5UwjQC3brZRzh1xoEXcQnt5JBAnfwxBN3TKqqXCMPVbKJEJQ4YaCcMQMiZFyy3UALQkpdBq19ENv19VR7JT",
  "key20": "3pkwA1E1JmqbASXyUASXV2d45ajtDL9tAR4N4AM5skSueBBhTkM3AcExuX3rvqxuKt4ZfkNbonuvWu42trtcCSNi",
  "key21": "5rWxKMzYmraE31zBJ3x7og4tHSxLQT9inENQQwDouqTiVz9bDkjian3u9e4VMjVta6D6D3nkDbCkZBhPB7HLqNA6",
  "key22": "2Sp9h6vWR8DUCexsstQ3yPYrLEvJfG4ZrzCda9bsbytLUnr98itLHhUxHVmU5jZ5RuUrzGcj6JQqifB1a8kRTGc",
  "key23": "5ghUeHyDhCD9kXqn1AuW3UXPRN9Hsr1pRfP8Hqd2ewDmpvN5ojmos1YuScK5he3ZrERpxQxQB8cw4TMqcCN3Zha1",
  "key24": "36gDoLecYE7CNYoFhCDU8wShAk5rBnN1ZPk63ZHCKQY9cxqzBXoHH5EPCHUE43CEfuSBm16hyqJxdYwQeaPhbYsK",
  "key25": "4ZH2RLeuxn8JGHfZHv6gyqZAJXtxy7YCByFAoKpCBfceSrwcTMB6L2xbsZSxqxCUaukmUvQFeKN2nQ3veaMx461m",
  "key26": "UdD2wReQd9hkVTfLPkEJTj7GKWSVp1i6vD2B1jgVfNZ8n2eDptJ4KaPeKV38VrEEgwJck9hGjjh1P5scdrjxk7L",
  "key27": "53ztR2qhkbUmMVcNtpZNxYTNJLTppNy7nuTkmmHbwPe81jKq4WUFxBp9umWUjkfgsFbsgmB5cXcEaVC1aidysKdB",
  "key28": "2LKPag2XCcMTyraZEtFvncDoQrGKfv3EjXUrNu34wEJGN6byXbGoYVmp9yiG39vABWWy56zcap4bCEzmdvBoxzxA",
  "key29": "4sBNVs7SCJFUJUFM5vqrCPuiKri71YFCySzehmERmhxG9MvqosMiKxZUT875VW4b4CadT4RN9EQJkNmkUobqyWXr",
  "key30": "36YRD3zufqTrNVeDjarscjUXmpCuZAtX4MZCVmWyYayLRLUnqiuPzjAhBPG64Y8eLjkUW18LcJyJh4sqHi1cSetg"
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
