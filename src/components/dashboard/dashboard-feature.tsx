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
    "41vgKAYNHzpQf9xEWkZjswDNjEgk4tSiKYtH6YXijZrhjBoUZJh6pmLxVZK9f9c4itu1LuTz4mFHcgfeG9XC15k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dsDHAW5ccUhmt4b6e3m1uoBGynVpV8vLwFBdyJhJHCMn1KBZPecodMi9akeeJ8cs6Xd9agzkc5vNRnhia6aMJLV",
  "key1": "4JKtSBsJHmZyrdpQLJLX6qmc8T3uFUdLPFmfb8bwqRMoGMzaCFNJ5mY15XEBLZEQA6ppSW5Ny56nu3Z5TgCdc7Xh",
  "key2": "3z4G3ZtxA9X1AYYbQJGVfT4JS6FEj8kpZLyDz16ozEEYMTuNCi9y8sts7v1x1R62C84ZqeuxSAcMGjo5DnZa6X95",
  "key3": "4vB5BQ83rSUDvMPnDGbAJxQCDKBVTQL6Haeymw9nrPvEQZFF6GxV4SWPqXxFkTb6XjGhfLNyiMMGEAPHVL5S6YSz",
  "key4": "5VPLDAqeoWPmaAAnQxDKnYQ4xrtM74Na5yyggnaD6qMuuAaQdvyZZhEbTMcTFX91kPg1vteHDPbHgQLneQsSKrHR",
  "key5": "5zCUMoGh1mAA46XmX6j7ZsQpyQFtkV3KWgQMkS4zvfzTmVpwc6iFEcMRNgdejRPGDGt8MKDy2TfUkNVqMxSQJqsJ",
  "key6": "2HSC3qC16mTixv4VyuQCPTWHXxMsytYKcjHZH1tRLfFzMGdHY1AFqoDdnMnqx6TzSPUABX5ddZLUg5UQpgU5XnZX",
  "key7": "2Gu5iRnukvEkZx9Y8E47VDBUL6ey9EXhUPXCwfiuGfdHjcwhg35CppsmB8eVHwVf78Tj6cmAsxRVrWv8RSKjc2Ry",
  "key8": "4ZPM6v1U85sbb22bDn7bMZDWT7kQnM3i2NJbjmGeHfb6Q3KZcHE2pkSU8v5wdXMjAowuf8sDaqfuwZqceEjjcfKX",
  "key9": "uiGLHUr1FVtspJzVrGc9cGFosQTA7uFiZgbXbKSPhnLVRee8wwoSshnM2XV48wEX4NUNPvD8qQ6iPNjKNF5qhwv",
  "key10": "4WxhBj48UTYmRVC6dP2Rf1RqjXU5raiKcyqLEgkUSKx6vpDABGecC9nWoWe8dVeue3gPH4zi5GFCdmJDKMzx7L1U",
  "key11": "ZKvqiMWBYPvJtD646jMKQiLMR62ChZPJbdD3m2Q94zRwZ9kbB72Gk4HVkiAUgTb2VFU4bqVqxJXxAwL1jJRE3zs",
  "key12": "2kkxkjTXSybhDpzwexQAaNnMXCaacUG1dZTvu5GMRFNmEBe9mHACM8Kg4AM3eUDPacaw2NRFwnKzyNuHKQpWCbSk",
  "key13": "5WJL8WhWp1eubGF9AcPxmtPLNCoufMPHTpY6zwhxthJ7PyNuHbmweee43PjZkhgqkfDEbjmDm51FRvPPLhSLsHU",
  "key14": "2PojjnE1uG7Kx8wGW6jGz2L5sDykxSktMYTVsxE1ZUfYqGxuRbau6iArJdbEt4jt1GLoWPXcta1GYDFGxZowyxYs",
  "key15": "24AXeS36Lw8bvPncUuWoUrcdBHJuGchHddTJEuSmjwsipnbs1ibXvd1oz2i9wVC9K2TkKfK6BGmnZCNBky8ppaTK",
  "key16": "isi6vwzYL4AojU1kz1MQ68t63FSjdj3sqVTEoG4ufzD4qoPigmoqcPw17Bbz7bViQSnYFwqyP6rzrx96bNgFaPK",
  "key17": "y7NzNEvZmLCXrbvjykjkrpRPtCqMi5AaQazhiMrWhH82r6fBTKwdFPWmhtYiqZTq77rzxJuouDV1QetF3wDRf3S",
  "key18": "3uyHWykDzHYsJhgWuxoCpJmM4UwuwpktxpsRGMV8LKsG2CzH9xhKyufEFuqi1mBQTAMuQKMvr1mJcA6At4am2QS7",
  "key19": "HJ5yoVcH2sPDRzbMTx1P1bMgTTxrdesiV9uhNbJimYwF8UyKFxzug6z6ZMimGTu2TzAiR3kpb4nbNYfcemUzK2H",
  "key20": "ohagYM5tu74f5tJmYPdiLSfYqfUDfDVjUrn4KwyJZHT4gyYidp3JZejVNUoBcssnrCnpUmoLuVdN5SnfmwbAadn",
  "key21": "fzzET1PwXqVCwc4eD5guSN7Ty8GD8AUaoxborSmyQvPuNe8p1khv2D8DixAQbgYWfL58duc7Bii3jbq91mD5ELf",
  "key22": "22PTmgcprxS8kEpnxrDVEKdT4BxvHx4iBkwBB2yKUzuTQESfHTXZXnbiNae6epCakbScXK2ppzRPhgoU9JUpm6RY",
  "key23": "5o7Xey7nx6dnx2oDeesCs4XqmmNDUX4gn6DHkV3Vzwio6guV2Pta2bBkYq86vbtj4BysayzKieFFvnr2TTE7rqML",
  "key24": "5Mz8CcEpHBeKcRCKgNeZbo5SkLZdVjhM2J1SRTr5NtUAW8Fw3NNoJmwvrC36LWweqwvpf8dhhv8UCVbv2ofN26ZV",
  "key25": "5rMZCNRAFEvobiHcNdcgw8APQZ4YsZ8bfGmWQ5CvqjQJmfazg8KUsrfytYqqADUS11fnVs2J2C7mjGW2pehCJuqh",
  "key26": "5h1mC1oK5dxbQe38jTyyCPZtCLwRMgXJX53vBK98xMW1tTAZwM5UE1HqmWVLeRVng5R7V2cLiHPwMcLAQ7jwjTwN",
  "key27": "3af4QduAEM96KjaXYnXZJ7eERJ7ELWLAzgpcaZGXD72rR3pbZ5T9gJEfS1UkqZSb9pPHzDpgXZr8ct3Zp1hpo2cY"
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
