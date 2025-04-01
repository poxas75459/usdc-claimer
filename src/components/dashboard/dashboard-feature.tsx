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
    "5TtiX8a1mLZEk6agXitYz4LxfBqRAKLSmQdHVz719zwVQsTyQiQd4s8Jy3TdwcC5VbuUnWNawi3hcpGofMC8b9AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cVyeZXzGpFQqDa2J6pYbhmDteRoESpzbRAeMW7LZrYBBdn5FmsT3ew3CbyakoWThNtQMPdxQ5iQ5rLcKU4d7Wx3",
  "key1": "5skbi14AKm85tZwwbidf4mavBnbxbLs6BMWYe3CmvKifyyoSvV4oFd6vzuAwwktszfWF7DYhkKtH8DzPPq22xha5",
  "key2": "3gU77bv4C8yfLYrPxUzM5AdgFtNVKwHia7ATmZbdcyoC2P14X2Hxhz2bYam6iqQedS3bM9ykQQRrrGpt5nwHnBYm",
  "key3": "2L6gGEsKQgHPG1qym9ewhCPg5UhJAfG28my5RoPgmNtnmK5t2vGu9K8rN6JjqfkDputPtawa3kVEfwXhBLfxEjDW",
  "key4": "bdAMjc5njywN6SWwrqrxmAEFccyvcJbLscstRyigv1qQYjSz33RJPxbtpX84X1ayEEcGwJNtM2rbziAiUKdjUsw",
  "key5": "4tT1ztksnfnuJyM4W8Nek53aJUU1Yeo97fvLo2DEi16VGeppvj2hkHzH3tg36ctJd2dNxa8pEyrANNFuzfK1PrjD",
  "key6": "56WdAiCd2CJF3VKsd6SBfzmuJYd2HTgDrxetqRuVGFU8CG9wCksjeX1TAPMAJqVUtLkxqbasoAGb4nGbbj6dwqqZ",
  "key7": "5TXiq8ycciK3ZBgJmguSvQqYoiZ7KwTPZA1Jyx9aSEW7Qgpx2BVxmz44WvjKn6bYyQJX1aYdeJoU4gQnyC899vnu",
  "key8": "32QmYiRjTwfN96tqdAvFJDNfw1LPzVSwzDyzJFgh9mzKFpoqKqeiWLDSzFvivx1r7mEfC5QAxzTdcAuy8jXJnDVF",
  "key9": "3Qinn5vCW8eatPC9Rn5bDAzS8uPWbXJD3fyR3pG22NGBywBAncajUXvECc93S4N7CWzjhx7WdK8hZp3VHhBuBth5",
  "key10": "59MomCBctitEVuf5FEy1cDtDg1ZsGtRHRWu5mhemD5VDiLVPQdydGnUfYq4VAkJ2UpRtsTtAstBFVCn65k3nLoha",
  "key11": "28JAXUJ33NWA3sptTHkjZer1UBuTko5KnqzSm7o1KGcwsracdCPB1Rnxw1Agi73B4mNxAG8dvgvLuLkWwbj44KVN",
  "key12": "28tkrers3PkB6g2NXcEXMvD7sb2uddakVcaMUuP6oMoAh9kPZcM4eK5gVdZDshyWdHtsd9C3ukdqEdfsx9JqjgXP",
  "key13": "2r33GCBx8j2movj1VWH9Kn3XurW9XSphhMWQ7ZH3WGjmuqccWj7ZSU8rWSRFTBkE84jiFXuW9Gye4iT91xD1xCUJ",
  "key14": "3ofVx26g8RqBKiakncKa22YDuLK2GCyLYzKtxMLkZSQ9yHSFYrEj6sJJF5M182qETCK1oB71EsyPzB2AMJUAoAKP",
  "key15": "5PN2JxWLhMBp6zR4k36vEwBQZqrkSE9sT5vrbXorFu1B1NGqZ2FkqM6hr4fe5z9qbaEr8opmpPbkYWwZiKik6zja",
  "key16": "37CKVG6a2ccpykgVuG2AUhWWbpWUHDCqCTcxBuaeUJzzQcMVykthUpuRfdq2BXNEokRf1Yxcy9BBtsgirpvQbKP4",
  "key17": "4YKUCxHRS6G9HMeNmedEQUPZPPPS6zYaRPKRfbeydFrDqTspRnVf8bK1NotuswdSeJJpbKfiGtL9fSEpiDKc4hGe",
  "key18": "QJN4hfdMxqNNx9xgrJH4uB9JjBhU6WSVKCc22Pu6QdVRxZWDTW8tg23cwbo6Szu7fPjjvycd2qBhggQRw2RsYQZ",
  "key19": "4XaSjxYr5C59cWgcfXXsX9gaqW91pVWjJ8sBJUMqczXh4eLqgFnCwHvVLAUzmSdyVSF5sKkmjSRDL5gKcEGJ3myD",
  "key20": "3JkMnE4exGJF5gqPGBjFjduHTJA38sR1bSXyfksJwW4jQWhcZet2KTEyjTEkvMrMVsLwLdSGzUbYwoNZmhvnLx3r",
  "key21": "3niU4RJ4jfyF4psWwG9DLpwU1tCqiVAwZ63T5DvieSPBd2W9sxtgSL6yjpBtmbaARSVXSJbRCEKPpN3Eh8c5fQ4f",
  "key22": "637vCkCX7iTgx9fqva4B9Pg7nW4Co4u5k59cFAhoFT3Sh3nBfrXCWviFsNo4X9J1hQBAu9iXod9ENE2HEMfRGtrc",
  "key23": "4CarhA5ATKFLVijSmCxat58Lete4j7d7goRQV6xzfkXp2oR5E4MRHg4q44f28AP54UGRBnqpAK8LCq7FSJjqi2WC",
  "key24": "JFnpWYXnb9cMEpbEFKXEV4fSxWHkETsw13DFkqtRPGUqS5jPvjjbfWxFmEjE9i2mcLJUEeWXgde6QLnX8m61P2a",
  "key25": "4SsVF5KUEqKV9TabTgUN2J9mkwoybg4UyN6jc7U1FUhrZM5LHfJFaUgaT7qr3to3e2MEisyPFZ4WafcLZGchJRTt"
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
