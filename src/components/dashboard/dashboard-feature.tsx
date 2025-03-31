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
    "47E8jw5DiKcnRm42RBpdpmL8HYSm2b63SMLX44FDTTRQhZTs2JYNPhqP5GN6uCETV75JL4FBMJWNkUkPzm37nkGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67i9Q1tfKFwna4JVjiwrGwQaXgbAmhCyMSeJbM36a1m34BXdiiH816qf4yLVc7Y8EQq6rwVJkr9WKXy2D78stXYk",
  "key1": "5JZspDBwRdYugmaZXjf4qXhJcSfdNu5VumXApGv7KxAmFqdbgqd9AJvLsduZ4eWyNbn8VYUVDTuejsu3r7xJVjKF",
  "key2": "5p5jrihFdEf9BXPA5way8pLvExYUAQau1o18dA3uNmZfJtLuSEAtFLzi4itQKk3HE3otS3ocBdQT9LWSPXD7gPfD",
  "key3": "nQV8CqvC6cgSf4abguXqRaKcXGKq6MD816cyEDyr3phtFCVYVPm9NEwYgWcf4stJndGHmnB1Mz6oa5eCyoqdEEX",
  "key4": "2yfyKD5XsbBLeZQRAm6zkuQyHRUXEHBU6XvBPDNKPVNEbG58XczfSPYUySCsoHrKPyteuw8qVYt5UeZ6GYW8PquZ",
  "key5": "4DqrqagkGsXTpP3Pb5vY8FXbAtWTJJQQRsCFCRbYnEbySbfdhMNLBZLzhGtE42vDCN9S2hBx8edjiVis6spTwdKq",
  "key6": "54zxnFjURHz5qPLQc4BpgvQHJ1nbvbyeAWNM8qdTsT3zfjz1eXnSjLwe2jcrNPhF5peWDPBNumt5S9VZNW89YJMe",
  "key7": "64zzVX59vFZ9Psws4SvtDGAySyvvzUvhKBdqZYwcf8ZctK2RakZT14CKBceRKeLitjNu3Rr9Urq9DSw1TY5itzut",
  "key8": "2z3NutwARiVRXAZu6RffwsBSKxHFBWSmBLKXf5ipdBRH4G4yKnu2qox9WR6QP45wtwGvZisBtvUnavN81osxmnLn",
  "key9": "5dM9DtJzCcdu2NyEJ7cfPPy1cSzj6i4Zuk7cDvqudfF7tVYcKVkohtHHJDUHGY2S4tRtTNBCm5REZW7vXLYK3K9M",
  "key10": "3T4HKcphz7hTHyE5TvsExyqWVvfKiNBXNbq2ftWapZ5rbuEhjHZTzPXuh1bfpmY79uwrwDDLm2Q3NeHYQSkb1xS3",
  "key11": "k87z3J426G9DxUrRer6wrLEWqXEDoVqRTqeuRkg3gy8Rs4r75XhewMph4SS2Fmjj8aB8QLyvgd4LrQXjZm1P4bT",
  "key12": "53zAVKcFjZNm8YNo8A6nn5CpWhfNiYyBcYycnkex7rmchpgYMSGPbLSt2wvMcMCCKYoN59Q6wMXeguA8kvPkeHiv",
  "key13": "5FDWMnmoB18X4Q9G3TtYErHVkKXusBTgBDVbhJvbVnYcZLpbw4JQJ4nPNdnQ9QgN7CE9LtiifZXAXyoywYb1Uihv",
  "key14": "54SaaU5DJwrL1ZP651VYrPcBS8vczpnCN9cGizMQsAwdiwMT4rXFbPY24zgtpgPmZQzHtghoMWY6nRBuYW5sRae6",
  "key15": "4L78k6ythvrKbGGN7x1DxhRudzhu4D1fVHv8aeiHaVCUXMeU1Art3To7LB6iYTF7iUcx9hhoc5ADUyhzB891DfWo",
  "key16": "E4Kop5W3UXrbHcyxNTDeSgxiHbzq9iqKVL8jaDY19rjwyMdbGYstSZYuPCyDBbnekczitDTaUdRLfQiqzHfifLr",
  "key17": "27xXPjCiQpcm1DicPxtYjW1GUDkaR8HbTPDSC6KhmtRiST4tGPfT13MpxWvFHrAoCqX4Vfxrwk69GSsEJCCj12Mk",
  "key18": "dAW4UzPSYvTqohXB3YNawduhSXpfzk75NARs2a9GigJN1TjrELjTsY36aN3ZFQjDL9wnS5mPBFwxPwx85RtTw9h",
  "key19": "3edmfXPXn6k3tKUGLTUW8bkSaUGu1neaDkJnysHAWXZ88crf5HcnrGNzYLmRqgqCbzc12Y45QJnpxK3YjQy6Yxgv",
  "key20": "4E7BixauQWV7fZ6XyftgnRtSZP9u5qqPRa2aw9mKbaFpAzxGQ38st3i5qHq4e63tHC21UHpqwAC2J7HDrSBPpBj2",
  "key21": "2gGULBKFYp5bkyrSXjRmjj5B8B2bj9Caz7YTLvA4mxHwQ75pUMWiSZMCvarSab3Y1zCAQ2Bn6ZsKDAZ5K8xHnmh2",
  "key22": "gJRHmLv4UQJCxZFDCmhZd628ATT9mTRCXensg43FoRz71k4mFPacimLiugGjkNU7AMfxUjw73XE3wVRvitiRQbx",
  "key23": "2nbLAydUN5aZ6P8fBfR72WF8jQrQDn8BN6bZCXnYEgR72mRcba23AKdoAswMoan5LLHuWSncUBPKKHWBXEMv8sEv",
  "key24": "5SHtdbx9taNoRnH5Mq5BmLhMcJWJgMT44kDa2GKvyZeNCz1sMzrb2yY35cPTEqypLuvoxgExs7fWz2pYzU5rNtKu",
  "key25": "5irNprnYYhRGDV6iDkB1Zmeiso3dXqZfooWraycb5u2u5pRQMuZ34PXypmq1FQWt24RRBpygFKiDE5NxLHbrLRti"
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
