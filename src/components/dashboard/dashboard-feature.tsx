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
    "3V4xkMs85FZvUPNn3Xw63bKQcMD9bg4WQHA89ceexFezjf87eNPyia8pkjoFfn2qHCfHUNAnQEx58xSz7sMb8Fkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEYyse77qvYnurLsMPxtoVXcZi6apmQkgCtdjtuESzKtvWb95KkuVjMNGjdnzWP7U85CruWdrQDo8YHSNioBbe7",
  "key1": "5Sxyhb9PRgqFmcZLk6L8Tqh7hmkJfVcCrWmz1S7ncDur1UkKRErAwvDJtqkZrQNiG9qwbAwNqeTE5HQt2EYtzunX",
  "key2": "3NQqVvDZoKeYFtpHpzmQ1BJ2QoSXh36VnnPbn59GwbDeMnt3SPRJPCeSk7knPCvsW7oGTgGVa6j3SYzVsSVEpBhJ",
  "key3": "aMF9c2TmJoztJyeBqw1DCpagY8q55cmDn2pooNNQ7asq9SLm2TgGMJD2Pdu6afhoMXSJYB6nBDCXgcNBCEybSmk",
  "key4": "5byNzW2jyPdZBF7DhU42mA96dzRr1JSAYKeHBnnJdkbk3P2JPzRsPdKbMDVPPmAUpVwTXMqCHSnhgRsbnpYFQuqi",
  "key5": "4A2SRZSPN6LCEbiuxfcxxD8TsMEnjJfq7kcK7bhgAfX61EfLCjuG38QiKRaEQDoW4Nspt534iHtG9XbkgaN5d9bR",
  "key6": "647TRn3q33cZZ2NLvjHmfDKp7FrtFtqg6Pe7bJV1rSdWxCq2VR9BmtVkJqv15STEcFJbcxDhVs71VZ3NWT3VsTm2",
  "key7": "4Yvz97Knz4EDfff1TLqRnUqNxsxB5YsQb6X6Uwh8am7EYZviri3ToXbBe8MXA3HJ8BNap2wvTy4TWCoLfu4BGGQw",
  "key8": "5JCoEUoFUPexmhHnVvMzxVGkb5jj3myZ932LpYVwKt5ZyfMioCKTJVxdLsRJqvHWNZoy3XoqiMiSuDSrWAx9VWEu",
  "key9": "3X8AxNG1RRrqp9PvPkU6unY5C1gQsjQ1hbJWkVAP9NYZtfqGVUw6J6ekDV9WrBLi9gmsVUwt8R24GGL3hDAJiRjG",
  "key10": "3BLGcNn1Ni1ZTX3mJuu65dwyJMHFv3L2WprkiLgewgfrWEDYQqchRr81SRWZy3CbDvCCrtrANAjopFfoCJXdGv2A",
  "key11": "48Hi7NzTfLtB1Q4mYs3NbPhQt5AUJCVf6XuBEKQD796XxPBrSn8u9DtPDbAk1iwbveisoVpmH49PjcfcyZM5Lsao",
  "key12": "2XYWU5gMUGyg3eGEw3PvTtSr19W4RZTPE8qWjZyZ7Wt8oyx6AeUQMuTAFnDCoMu7Z2S27qLKmtMcD5hBeG9aGCdv",
  "key13": "4HAkYVPmVnjfFqTDfiFynbpqz9sLUfpyBtkpeubTFxFyq1DJ9VhXLpG1rFC47uCXA19qvJbv1fqYBKgFDBTQPxjn",
  "key14": "HDeDnkbSXsFKnrYspfdBBrXko7ZxvR7r6vLFjM6H1BV4ebWdL2DvPAVzZKLJqEY6Eh4MuFQVPhsLdV2K1nC7uPP",
  "key15": "5tec8xQ71kL1CFjJ23Bhzdzxd8ougq7sFrcMkjygZnM28af9PU4QPr4BZcia5eKyTxm5qHSwQ4f9G7sj3nuZfu89",
  "key16": "4R9WTkLMXWJK8PahSrpb5yNyNVbxNH9djGRFm9PhHFFVH8Tabr2zWhrXLW2G8VWsHFRhCZNREHnyErSPvaajV2P4",
  "key17": "4SkocWQ2sKLh5XcpsxGctVk6WutV3iUHKtp94Zr7V3YEwvAxgA4DtmDuT2ExKr7BFs3JPxPwYDTWDM3wQgSDyeWs",
  "key18": "57m41zrfBCb4ovQTTctN8MqKHSTotsYL1Gppj15ubgG9g24XchNVj1RK9YKgL2wTAdxKcPV4UnYthNogDiXL1KqP",
  "key19": "3oJy7zqedw3XQxLWZcMbpqs9mad7dpPqGi4trydLZeyrRK6DyyJ7YVWJks53BasRdvkcaxgPuJ8q3owYSJk64mUn",
  "key20": "6zQuQwXprvWFvUzDD98E49cstV5j8irGBKKD1JLWA1JZ4J9YrbCsKGWVX4KPLWj4hohMcRLddErgQwB7MZ9PLPS",
  "key21": "4ac6uU8ETpGgrRX1c33UWxper8uKQQnEdndrZ5jezTNfJEzJ6cvUVCKpSAuAfULeYd7tWgaKH3LkvxJ6wuf68KiJ",
  "key22": "3tGq3ENfUaMbeJvBNv5n4Ce4CV9zfi5D6nNEAS38xDUpNT4543vMNy8EJFRMnFu2BYEQyzEunAtEc9QA4KH1K8LU",
  "key23": "3athGsCXto5Sf2SbXxbbyyvZKSCtPSGseRGsMLZYA9K7C5Dvk1zyvXEqA5HTzFW9btjBSLTv7DjirdRHNX2AVm93",
  "key24": "3Xepd18bZ1qkyTZqDPT1KqiPb5zWEPaQEENTbr4LcrSf7ppBHoYLiHmFKD7FE62jLqK2HEnqLPPFPrcjQrB85kTi",
  "key25": "3dy4WPv7YKgKRrsu21eeMaHKumbWZYQZtQhrw6NAq1cew2dRot72Yf5pN7jrqKEcgKujcWPo9i1GBRPDujDXVZQR",
  "key26": "ZvthRVzZnv5Fa8wx8hRnWHhv1wT85co8xQKfxScMrZw18MNWTjUdSx49qhCcpArqsb6UNUqw6vxTDSGd1AtEWy2"
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
