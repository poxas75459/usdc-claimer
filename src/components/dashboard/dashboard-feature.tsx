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
    "52NR8kZkZRWNRV8pWsJbG1khuxLhBftbmS7r2t3MSQVW93M4vHXyZSSW4KjKR4AUni3GGooTfxySwVRJAip6huj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRUn7emfACLLavmZ7VKymFCz7pA3WfNCEFwUhtT6db9ZGuaQXiohnFDxrW19BvcXmU2dPP66LipJXDY2xxqZFdE",
  "key1": "wRAzwQUUCXm4BkgiAWC3wzaaABmEefXPxAqGDGccTctVGcJnn1KxPi5211QFa14CdPLLZMb3LXPonohrrfAriKJ",
  "key2": "5mdgPEJZHWt2EC4749g1QyGbHi1Hakr8cVecpnLTKLnAobmBu1mjfr6X5NhE8CXfrnP4qnxVjwArRnALWEq1podV",
  "key3": "hWRT4ZNE3MM63bRu1kW68BqnC9qWtg66vnPTmZBAN2eSM8FmVDVPfvcVE9SoYYAi7K85nSxRJxWAUEzmB3Jk9Kw",
  "key4": "621fJTyyBMFZwam1ZdseYPHN26MpLXzR7Xa3yukDXfMP2qid8FmEU5uNmdzhxsoUxD7Ldr9qWABaphEDHHgBij6J",
  "key5": "46Bi4yfrvWKpgpfrXfRzxfmYBChskFpftiTiZ1wjrP6jVxKfC112ov2XTyz3Ffdd2L1iQKsgmSBkjVKXkC2fFUg9",
  "key6": "2HQ81eZh65XFtfANEFBGyLKjQhVgY7w4uSG6UsZHKSr52H4izB6Fxe6qEYQhqUZmLY7MQTqcpYn2zfojSfebMxEd",
  "key7": "2SYZP6V5iM6ho3DotAobv3mivyKknmm7foaxys6XXkMGimZiFeWnBaV6ZR1oexTRBRSm18JUY95LL917xcxDXz42",
  "key8": "3nP4QiK7J1csdceZrrbVTMi94bCBwgtBcNfgiuFuYjR4Da8GFDEZjCvizbUokRrUDcB7M67AChk2kT92Pi4gvgvw",
  "key9": "4GXvzvNgVv2wi5MfPtAxGME593ygJsM64FEPRM1Xa8sYoG6JefWDDej8RQXJjNoN3PwJSXR6bzQDULLGUMxK3NDX",
  "key10": "3i9RcpdDG8PYVivJjEFGvuYPWvyXWayEfhP1DDaaW5Q7kZm5KyR8hNLryGueDxGvv4m2z1qKE9uofURdDXbCy5PK",
  "key11": "2nGS7SsqGbrsfSP8unoGnDy1eBTJtgeHnZtDJDMVrqsnzKBRnR5K1KNTuDmg2PzpPjHK7hMzpQxd2LBTvKwhQVgt",
  "key12": "3ZJKPMzujQqq2AB1aXntCK7S8WQnwTednmUTitVtD3pEkkUNtP5iQbsdp9Wmqmr5ZVGuo8Wvf2WbBb3EqQMAfbtU",
  "key13": "XX7pkUT94bBnoa2FmLyuM9NhKpomp1ZFLYT6wZEb6txCCA9827nwdp6J4aPHBwYTT9An9s3TbsryXHJRh2UKHZQ",
  "key14": "4dM1tL24QaoKTZkkKc2BQaCbeBbbQDtj6dwbDANBbraqjeC1yJKvx7r1B9nuLGtbPQTDmdEmTVNwc7RcGfqn7Mn4",
  "key15": "3ArGk5yZy1kDcx4vNLmACRjRaK2tnRDEa1FaByNNuY33ToFFfjvFzZMWBpMZnSPTh4a4MYfsrSsymkhGJLC6VJhT",
  "key16": "5Jh3GtSGvG4GFbXbBWaApriLLufsKjkexXgLadm1QWGtDnLzzxetf8UVKqYYqfc4bNwx2GAvtDKMff7Zz5L3pb8A",
  "key17": "2Gj9kiohBN8K82EStb29cJoxkZ6HDjehvt45rR4RCL7KeL2sZn1bnaRdRBWQZ9xEQ4vGTWfecKEadKnxfUWVnZKb",
  "key18": "adCViin36KjC2QFXCuKxrymGck1CdDzNcvnaDayUX7BE5NURGJsTHH7mLkq2B1YjquReYEEN6veLZvWh1wpJ7Rr",
  "key19": "63zQtRdsh8mD5uLEjfFRH69F3kxFgKVBQFg1dzSAMVhATePXWS3UxoYFXfUwWbagKjSkhY6u8U9YDaau4RpAYPon",
  "key20": "5Ysc5qXW95SJ1ygu9kbYceRoJfnMQjasyXuAmt4FW6vXJTYzJ7PZZEpA56DuZRMXLXmnphnRnCGvs9iBLT7iExtH",
  "key21": "2tDgDkULmAFJnGQuJJ7Z8RyFSp3FyLufYNR2DhLqYb428J5Je1Ja6wLLKs4ztKMbm2Km5ytXDg2zq7SVp1V2bzSb",
  "key22": "3N9CT89ngxaWfiFmac31CfHfLaUNAGxh2A2iodUgTaR7Ry2e2r9U1jRGM1am6duagFZBExWUMQMsu8URD5nVyjVL",
  "key23": "3eTWD6Dfb8orXMySLXFnt2deTRYzfWSKoFX5P3n4e7RWboX7FmT9VrCQFsViDrR5f19e8vZbAKpKt1UsLJc5dtdW",
  "key24": "123zSd6Zk1EJ9SaYWhUMWzgjVogTrDbNQiWxsMsBeSfacz9pQ7zqbwi4kf5rCxk7LMEMpM7gdP3Z3y4ndHmriYTn",
  "key25": "4uZdvzbD6z7RtY5jdZ7PeKUXEaHCUHGyQ6rT3SE92SZnXC7yH7qnojFrmrUyXmCHsVk9Sn3s9oX5UwpvnbVMbh7T",
  "key26": "pigSqfVM7jLcxkfjNptqfLHn9yQsr7iwedVWxKUF5oK5YAkpxCbk7xG8w7i2xb2iyVmrz39uPmFojJk39WZTi99",
  "key27": "2jeW8EC35nMpjp5dRm7QQrMxgDRfrEZrXPM7Thx9fb9S3go9qNgTtUVauzTm4WUkMdBrr8hY39F61MpSSbcGAkZA",
  "key28": "3DqfhZ8t89aGQ3PC5eF7kJu65MD4Z9hpARYySZYfQPq6zhSBHg15rzkrzZT6uURhRnVUBcMipSqS8mXqrxwxFNwy",
  "key29": "3oHpv1s6bbZLFuYd1CC8ukGWwoGnTyo46R5ENN5bL61Zk7U3Nq26fzNtZYmW1aYDBZkEQPMuZjCQ9FTz31G5GZyb",
  "key30": "2nfocsqK4sJ12M34CG3NP2TJ6cXZ8Z31hEZLWPtBa4UTLywrREVoHBh7fi54XihME6brW27zAvZrN5YM1wgExmHn",
  "key31": "449WkeigKKwPWmhHFLMwBNJxsnJ911PBtZaCVvRsDE4b78b6jhKXmYJVDPnGnt3KxNKskabtG9WnsUGPuHuriUt5"
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
