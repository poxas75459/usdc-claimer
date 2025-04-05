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
    "2DKmS5LsSGrgYyHAvJqRCLUVNXtP4r4kC73egTFJEhcQYq26Ao6sjv56huE88LihB6CvrWisiNR7X9A77S3NimiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5Uxea4LDDpkRVFvn6q4DqhjZ9o9wX8neye4kiM5DJmffRhAMYHo22Rri2E71634iRpmcAHTnxf6Zy7XynHSuFS",
  "key1": "4JMTLb4mD2ELyYwoC9CsXkrSqDyWeDdmuvtugwQNTtHrTs4q3wEht7uBhSzVuJZZgTYzqtoy1JFbVkGoVqcrRsFH",
  "key2": "39zWZ3isKGTUw2ah3Fbcaudd1eatEf1yYM76pVGbR7hBfVotyrAuWgBhKCPWfyhvWgqWHDDHZEEz3KFei5KrxgQ7",
  "key3": "2DfnmDD1LtwuVS8qXGB3NJMrkbHMoDGtzig8ngdtVMksGUE5JPC71a817nPfPpDBpDUMtF79fQhPGj69vZQ15utt",
  "key4": "JqQLgj4X1BS79RvfBwCxxNarNxDX7LTkFCfYVaYUEaGJv1s9nzCHGUK7XabRsvH6aQWWURxUuGQ9yXcD3ZS83yH",
  "key5": "5q2HXBZyDZcByV3r4CGUBt4ks79pfBi6uiNNTPRSQdJKfaN1jok6x6JFCAnMJY6C31mFkkohkFZiYywuJC9nZtMd",
  "key6": "1pv8TqRb13qm1Dnpxdjze1kAX1ZTi48LGGz8NHvts58UNv2a9qZkrgr5X6kTkceJY5gCoGkGsy51BX1N3a5RK9f",
  "key7": "4962f4ABEFdN9J4ztevtNwWvXA2qomaES5hie4V99AGjTMTWpkkorEmFiZjskFiHVPF9xqoaK6bds3FxVqMTTQvv",
  "key8": "3SdCbWkRTNUKBPjhrqwXzJ9fUqZ22eT6y1DBqKmpGS51m3trCKgsJo6qH8JwaZEqNgeG8NKDprKvYMjtnTGc2Rd7",
  "key9": "4MHFAsQ76vzXDszesGdBuEcvaigh9SbpvKq4k8N1dKYAopB3G943DpRNYamV4uRRDpbfaJqLPPaB4dVyf7hCAEa1",
  "key10": "3RMJZBJ9uxUsJ74Cmtc7vFbpBpX6N3J6FXqGuus15mVnYkKGrg4Hxqv4j9QSq864P4csytsm2PQHGFDESDFyMGnc",
  "key11": "2GemxZQaT8QAYXfiUjUAmWWgXZkjTyHUPrWFCvoFsP6HZrWTtoeCFApZYyjMRcZu87n7YZbk9tZK9tdeM3yqizEB",
  "key12": "4GKd8H3gAJX58278H3cxanTQn2Z3MKShC7Eu5dgewKAzeB2JUqBrSzMYAUaeFrb79zBp8YT7tVxqZjmWCuZc2ogg",
  "key13": "4Ry5g4iGDbjfxfUSMXyYKzVA6DpyVUM3UWUJNmhYp9KqrMmb34d154br6gaXdeuxiMKbFD1Y44tBs4U7j2aLb3Ce",
  "key14": "4xBFv9R7S4PQqTRD5zsNfjkPCVThMZVG7zw7e6v6yQkjiv9f6hUVgimE6QrL2N2stJreFJRkoJRQLEy53jiMwKke",
  "key15": "3PgjFQQgcWn6ERh2KAVCKT4DwcUvybN1eRFc68qMydDBZYZS113eHPS2n9HUVFWRuUdiJkCyi9AFkEVRMXiM1SEm",
  "key16": "26Aq8h9XKRRCG2VRAxoYZ7z1zeLmuawoX9rY67EuQsSvCtfPm9vvMoKaszQwGV8jG7Lp7gQrxPQvqriq2QppWbkR",
  "key17": "5nuF8vojCwaURjZTZUzXE2Z9VMTZAuCFBT6fwAx3Amni6UBp9wiGckcKPDvpeYvvA378gt1gjv1U3Bx9Gkx9pfoj",
  "key18": "5MxAqkBgnApnnXYWPqk73bM2XsTQqERX8V1R9pYXPhhXzEU6Rtd6oHRwBb1yxKqpg97WUPybVZYL3VoSVyT567MB",
  "key19": "6Z5cKPrzPe1DmuEkg5D91a5FqdKECNF8JYbYeKKXQGNkSXF5sH8LXpMSWyNC9bhZUUJWfZz7BSFtspDi2B9CVeo",
  "key20": "2QoK9Y538tx6SNvQdB3Rc1Z6PMmuq4NKWDhf3tFWgfz4Vss7nfVpxczr5yzcCMHdJUS4mRfnT1UGjufi4EJVLfE1",
  "key21": "57SZBV4BTnD69qNnJbjC3MRDNXNAL5RFTNpcPfpYqdRYfXQsRihsSYiMTK5QJfpEFq441w6urCyqTgTk1yR1xs1s",
  "key22": "33oYhE5Aa7xJY4QFPUdJQpcwPcaQLDQ2Wmht5h6sGrNzvVpxvncLbDhy9Rz9Ase6aAffewBYR374uVCJZjXhEZ4s",
  "key23": "3ygkoJXMvaFECDCs1wDM82SGFcnsDbCMavTRRyeXXZmqA8zc7CrN2omm5scChDeabLh8ZbFTWk7LB47uTkh1kMum",
  "key24": "34AE8eiHZpdNQdiM4H3TLHGekVHtZr2cYwKcRJMezdiBYdKXS8P716f8qAU1kRfGgQvHjJDXvtvLqxgVAZNHb5oJ",
  "key25": "2LMGTG3r9yC8MCg6sEDUYUvKqhYhkTSk796wxmf4MUdLMuBWwAZhobHukFYEQzXPzBAM2PpzkaZbijCyAFRbsAkb",
  "key26": "32RRsjcoBhq4EbYoGtQ883fWc8ZpVRFgTCFaZCUTWhETRp9E7WJF7Yvv4YNnrFi1HntoZAseLx7gXAk9DqzjJ9Vh",
  "key27": "3LgVeeUJjd5EkZea9kKLucWrLCqjRRDf6RTjfLZQ3iyfhPeiR36JQserdmp9R8ADQMvBU6GaieuvL6PsRCKEwHbK",
  "key28": "56WnqVGQZuYqpNzRDrzRXH6A4U4mtSX8PM17d4WRaDCWPMsiToKUKpZdKRHbqSc7JAkna1rpptQQTTq1by1gZ3Cx",
  "key29": "3f1sZWXR71TYsyt3Qv55m268TkxqcxHKGz7a6KYa6ehnktzkT16PVaWdex8WDPxFqnVxxPE4sua7HKsRpckkH28F",
  "key30": "3nRoAwLR2NT6HysSWTM4DUosd2jTm8YP1ZZmNB8LexcfECSrrD23WyCDHNuzhf3omTjvVY4dqzv5mEDQ2DSNXYcb",
  "key31": "4z3WnMAd1HLv77msFnMp8uXtvtBRyYdZ7Bekzs4s1Pt3Auct6mMsHNaKktBcXk6ooV22TZ4qVoxVHDfdnpgWRqJL",
  "key32": "3Nrm7PaKCH7gaJpEhhjcGAd1tGN71fiWashqxF99M5Pbd11cjHaTLcyZZ9nGs3wC6zfoBonGJEMSrh4KKSgScxsL",
  "key33": "2vx6E7Ba3rD1E2JtRfByR2tBQ6kuxo1EWDNRUxL941gW1gCRSY7VohMsm9MTkwjeWY4wtx11T4xkvFsi9Mt3smsN",
  "key34": "5uVGGbPrerdVTW9FUZjFvJJx5mDz2fzAQn735NWza8JHFTEqThUESAAXuaNp7L4cBPLr4BG1RAiR8NENdKAUEztK",
  "key35": "5y25jgxMUUhqa4PqXL5SUFX6heoZefZPL6whsTr3bJB1Mp9h2qwXVgkRwhzULHJoetfDNawyrzTFbjDDBFNEnJ8W",
  "key36": "4H5pxJupGEoTXhCu8cvBSwn5m1QJvJ3kaWCNa1HrRQPGYmNL4Y5NzgHFLgSCUh4R26ouusreTYVLauPkb27sPLEZ",
  "key37": "wMAt8JtwpMihpBfrf73EfaxpW7C7H6y6RkhY3TXACjrser8KEQFMpPNu2i8oXJHy55XJQWekAQUZ5J2TADSACua",
  "key38": "4ccqKtFfy4XhPMiyjJ2rD2AHtE2eD9eJFnRsA3LfwKPcP6Uw3aDhSzu7gE8HJLDj9D2JJoBLecLnW8D7U4Z6y17p",
  "key39": "3xCkmVd1EQizbqVSyJfCWYUJhgKFZz2i4weVUGoGt63LMoKSA23QsPyyrRjyY53jNn58N6jq3LrseCiBAyweiJFj",
  "key40": "53Zr72DKDJktpWT4C7TJ8dWAq7JTMwydvD1DPyeCef4AecZ4zLtuTu8Gw4PEnCsCxmVr6H1CfhYUNAB1iMSBPFmR",
  "key41": "4xVutACgQ8JfnQRDQ5bhhrxB1JBDQiSgP36UWvDQGRVVEcWcjepCZ2f6NvrgAu7mfZmx2uTFGndnZbeWBmR9522q",
  "key42": "unfkWiPzqse74Mz6R2YPXhbmJHHcunUrZ9kaQ6V3q3r3EH7GowNszi8qHHtmbFRsEsPAaZ5RA3MPU3j1NCrNUtY",
  "key43": "2vL8phsqUZip7pg2hMs7p8D1bSGTLbCb8QbeCG8pHTEuNL4uGpgRvyetdgasG9NuBDqdsyXa9rje3bykpDk7rKVc",
  "key44": "25JhsZYqkWWtTLSYFMoQu2FrtjWr3F8GTvTXE5nQ3F2FoSbWXvMYMyBTi3hCHZ82hbq87rvFMCUMc6t1wxA2y6RG",
  "key45": "533x1RHr71bJUcT79qvL59M3atEJKi7gTj6kC47xHk7gCQvHDTPQJLXSJ7r2aEbQKJ9MFdHxMnP3tgMgr2KK1qDr"
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
