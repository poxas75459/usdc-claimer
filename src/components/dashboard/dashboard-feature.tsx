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
    "4GX8YJ3fnWBC29zRsh9urBakTpyfFMj95ZrcSPFE7i3CxQUPuu4ZjjQc3Y26tVKWLXVRywW3KHDTqpC665cU6aHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o8axxzkM49nhhAP1ToBXv6Zn4ns8EFdA4MrWvEbb29ZopBK9kvGc32uzvzrH4Kjx9C2bHCepdsZkgybBaTgDcEn",
  "key1": "3oS6fDd7XFTMd6xTgebnVtHMT81hquWM6L5Vt6jkFAvW2MKx9C4nTVBwkB8tgTRhnKsv6RLjx7KiKm6DoMdK44jq",
  "key2": "2HksXVRAJjBAhwAp4gz6hwNxsL72ja9Cb6FMGj3ypSFrF8rqzATxMfxnbF539J73aVWfdu3VBtHFiZeZgTMpueiF",
  "key3": "3ssS4GJred7uz25YLZJVA9JPUzjdj8xVNaWRG15DxQdJV8ki1onzrpGNVRxcgRihnAy6Wffj6sM1teDBE6sM6i5p",
  "key4": "5AUmiQY8cJbZEj5ZaSZfs8aJPySabTwBoGKYR3oGuJAJJXEwdRWmhcgSuEoj7hYNjKToERbSbMfRsHq4Jk3BeGy5",
  "key5": "5LhKCzebVM7jhQVEPtWKedEKJ9ySsYN1PRY6JpbGXadPZ1F1zVDGywev8Sn4sRSaCk7savKe6SHeCSh3LH8S2doB",
  "key6": "64D2jMJGAQkLCGhCbUDUuPsuSkLdAsv5eXNv6dFDhcjc9y8XBSCMjRZxf4D9M2rvghYCMeM6wjuXsoJgWebwHGSR",
  "key7": "4qUsjwQKPdhcwnmcTLbYfLYQVEmBLUsgzpsebZX1YMwQn3515YyXbX22XyPKFUWs6dhREU9SA6VYFB2pR4Tnjs1p",
  "key8": "4U6zSpL8n49NXPsme5Uj9dpBVtk9iJd1mXPdEmqpFeWoEtPPtSjq92Kapj8cpLseP6hXjU8JRPcojTUF1q8rAt8q",
  "key9": "3i1MmRHy7Vp55LFJEdThGxtaV5NWvGcCK3rxumQZ4erSX4Rmm8Sz16hG1vswArr71FmExHNiHGqvZ35yLsDPB2Xq",
  "key10": "48b717ngj9QvpJyx9vJsDiytdLCv9rhNkQK2R1KAyPLpGxaUDGK2ore13JDpiS6gq5sgp57wwXo413e5ZUc6m2on",
  "key11": "2Et6JBRxwdxpNCkjTqwdU5FSmhFbodL46zB7CszQBYHPdNKqasEeAQ7DTxcAmo72QGV8VkvtxpSfpwHuCuaeG2Fm",
  "key12": "39jxJ4irUaUZNKVFHvXAhxgQ8hr6sAm3mBYeLLKnyUMqKgdgGm7r9F2bUvh2F5w9qBB62Y427Dv2KDGSbw35e6s6",
  "key13": "4nW2YUmDY6gFqSi56rjZC7cLRRk49U5am37Y3vcnKSW1u5QpaBCo9xTcF12sM3jSGYhHrbDcVD5i3JPxBmdipKt4",
  "key14": "5iw19pTBPM95JpRaMdHQz3HZthSf8rMhKp6idmaonJrQ476TnWL8cips5TWzcBmdCvGtAS6LnFobwNvrcrGPqMDA",
  "key15": "23Xjj6UG5innNGLY3idcsLvner8WRAfnqX4ttSS4GwqhU5SXqCZ4K8uJJrH9MxkcC4DjffvTvaXQ3dNAtkLiL6hN",
  "key16": "uc8F69uZbSacQujpyxNdP8oP6JFvaEeMs5jua3N8v74gxixAb2RYJTXD2mbez22veAWa4VPmFEEvbzdxaHBtxv5",
  "key17": "3hTFmEzgKi9zFtM5q6YpPAtrWgvrh1YuRWHWeaQMoqWhafsMeymjyG9LxhKhQKwZ19h8Z1u3aY2FAf4n8PQKH4kD",
  "key18": "63puDJQqtyGw4d24DXm81DrQP9ix1qKoTmWSqFP6nuC5ibFzzay5hQzffZT2WnBxzvMGYWDVYsTQbN3AqndCLJwx",
  "key19": "cWfmdUit2usV2gRqDp9vhS6dLAJDgUQZGiAk13vsM9hiMePhY56sSsLsFLQqUSQovWttdofC8vHBqTfkQV2pwLH",
  "key20": "2RAvbFMVCxpYTxBRL4eHUmtzhanCX96sCaxBmTmfeeJ5CNdrVK2pBzfXzzv1gMDze5fhVwUH7JxYUzdsCUq1ELaZ",
  "key21": "2yzgMK39SqGyTBmHKGNQ5a2tU7RW2uTnNi4i6Q3zzssePQV6Fd1ZgqV45aqQZ7hsduzwBsuu2gGciYJRHorkUuh5",
  "key22": "25RDKAKy48ki1g5tbwYqRfwvF8isRn51dhtZkPLj63taMsTodoDeMrW7bshZFBFkuu3JQxynuBb7spxqvypyMQrT",
  "key23": "3JT2VCrq5RnXSQu8M2gL5zVTU4GVdQmegyux4NasjJdgUFLmVCzcxYbfNcTcMeoahsgohtxEyjjkXjmFSQ78oPcp",
  "key24": "5nfVHPW67siFF9qUGbjSGauniiLEG76YhYgfX5d2qjkQEfPJmgF9wzf5dLyLVAYb7FFfMWvUdZxuC8kQEwpS199M",
  "key25": "4BipNVMgC7F8LmNayyV7NVDpLoGdVR55X6LR5Q1VFhKyCz4zCCGwzunsgYbbFEFSGoD7qfj7NB63AuVNWvKfJWKq",
  "key26": "618p231VHcFtH36zwtViUYq6oMfQ29xuvfEDV4tfk5YHtWcG14Sndcqgo2axNi56tr7JPTdRGPgqJJ5L7c8PFJNm",
  "key27": "xi7xRvLCmUAvMT7gCBoSCQGjaLEvmJgcMN4h8YvJhWucpS66mZd7Rxdfiai5mcVHmSVZvAX937hBjEsGtZUoy8x"
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
