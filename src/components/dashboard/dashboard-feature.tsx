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
    "2StTkoppyAoF9bFRF8L3UmW991VQzSULfQQmmo5YZu3PpesAmdEKXqoocw1KE4YAJ2QtvTT2DjC3kq1p17FyV5wT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHGXAbFESRSDtzYJhpk52zSanRehewZuFF12aLJMqZaU6f58Gms6koFketvX1fRjXNU5vZ2kmAo9RojonZfxraE",
  "key1": "2JumvctatRNN2jdY7YLwX4F6qdca7xFnTdMkzCDAbFR74Y3BxnnFTiSjVVCDoKF4bzSn6woGbb6c3wiHYZvFnwvY",
  "key2": "471TovZUT3H8RnSTqWA95WnYbfseYgjmTBsVcCoFmefpxmY6aN6tsQ9uVmUseXCNp4S9Y9rW7inAvW9hbJ5KXZyv",
  "key3": "6CbGnpn9qnLEP2qyLKjBLRF6TCXw7QvxbtHpDicDSLRCBPWgWWLC4EbG9MpzLyVRqQyDGiiWcZYypFwvb8xLhjq",
  "key4": "ZBezGebi3KbyoZhZef21ewZ4pSwfaGG916aauUB7tSUrCJi35PP9KvUkaE5ALoLSzv5MbqGbrSRfSQBoBqpgGEC",
  "key5": "53b9RNmbFpMWjR9VL9HNTTZC66NwG7qvTQC9jV1Fsu82u9syg9ipZHe4GZrpKijk14KPUXkfQEhoTsuEBQ9PLrEY",
  "key6": "2UkzeWVkM2SLEgGiaiDoLTKj2NcttM3xkRvaZ6Hnjw3hbPWcecrZwb7SpX4jfyCF5DbCwp86zd2PMRjqmdwdzcLh",
  "key7": "yrkWgpKRCj4GBzxxPTXq1CgCEYFWisA6hrFVdJYx29jBobKkq7Hiz3yJfuhebCHEGs6poGx2oHZtRpJEivWmRjp",
  "key8": "3vSLUY4rfBvwsj4aA42x85sRnAAnTsAkNiweNVdjacodXtK46wYtxNpUfSUhTBEXe7mjHZAbQeSYSAGBCaWTduTZ",
  "key9": "2mt8CgWYqk5sDA6WouA3AfaQ1eWncDvJLyodxpmiSF6b1hjk38EtTZUyV1r7QaHDEVtJyN1tBZtThVGgHxjkco2B",
  "key10": "ckvcp9eoRG16rYR5JXYqxReFuXrsmgzHRGKmh31dKKbBK689VKT9atigqrShrvLin9e4iZerVL2jhsSmQwzhSP4",
  "key11": "2hsk81LYQqaBdTrw1enpZjcpsh5Ura8GvdNCipUjWEFhBTQZBGwVo8vMCf8UuiUPJZ7xwaLeHg9fP4dbXFHY2zwh",
  "key12": "4q7eBKQ1jEsQMvKmtQLGKG9xcNSENXFzTDcGN3bbVJNSqZmNZMh4kUZBKBcRtwSMDGs4V5EgpMmpYU448mMCPLRN",
  "key13": "vkScdW4zzqAsX1EJ4ePvYFFNhcZje6FToaRnqSqL2wgkX66rSZdBgYZSxRJHCCGZYxphTy1RV6gZtmjuJHXbVdJ",
  "key14": "4owyq9MzTpLKyaqSwN8GHDgu65tDjZfDDdv5cFEoZR7wcyCQm4pZA5pxaQjgCJ89n8ZUrfkAbtVDCB1gPgSASuoY",
  "key15": "3s5Bee3MVKw2iNhwJd5oh7H1unPuTUPKvSCNuit1JyckYovQ9Yw82CnEM9HZ5M8tNXx5Ck8WVFkYF7KVipD4wGJ1",
  "key16": "24xwZHuLkguMGZZVPc7cqMgXPn5cPiWG1jFTi1Rba9z9rTKzYmN7SAvKfEFYqfsrFE5PZnaW8g2d8q4pM5vNXbdF",
  "key17": "hWJ8LAYXx6MmAzrPjK1HC3G2nxC2vJfGzpA23fH51NufQ5sdE61JPhFUvXVouMkQEJtZkFhPS2LKqTSPKTk15jS",
  "key18": "5JjkeCzJ6f24ETUKHWBQcRRonDQ8HVERy8L21YvCVmpePZmyzaEUqHWcnCZfcywzFyZmSDXJkBe6XhZckv9YEUmq",
  "key19": "c4XoS2MN9qJTwKmunTqBGqFDtYzVn2LpSyMqXsLeK2jnjobued1ecC6LGePW6L7SpVpLxDAzumjHw2Vt143yBpv",
  "key20": "2Tn98WRHPWyYXqLBJEc1sphPLXbwejMU7aXjn62wgEVCLDtEdyaGmSMPivHUoVgJwqg5D47ooLFcpq8yJUFm8AQu",
  "key21": "4PomunejXpv4UkYpM5k3zEn6od6pYDCcw2NWcjg57VUxBnMwCKiATyyRi4Cuc4uSbUuDN3c68QT3HfUq6sJoBjXS",
  "key22": "44g4cSstVR9FPTEv2sdDkkdV2aXywBobD5C2pniVue146G1fRbgb1mMQhJoSxAmXzSyZnKx6VhU2wxZe2T9EfzKb",
  "key23": "3DPGcZMChrDTpyiFpdfsM5o6bM5eEpHKGxzR2W1C65y7eYx9ow35tPQsJJt8an7jokmnNrFb9mU3KHk9yZX6eADX",
  "key24": "2TTGtmzFaVXKE8uhZ1pQbqRSrz2pyunS6CiDvL9HksurBPgpqLB9PBqJNvYaU7VKTbNrHgkP96q5PzRZ6DHMFY6d",
  "key25": "4WUjUdaJrnv6LnMMzJ3rm9iCiG1Xgjqycg3MfFfUE3fgUEVzbkB4TKf6L6ZUgp5SRTBSmkUpQwse8xw6q2CUoqdD",
  "key26": "2VvQXRtBpdPptWVjZNGvGEcYmWAXDybRwPjqBrw4FbdxnaXrv5CXJVGEvZiHYj4CwxqnK2F3fcheeojiFjQ6g4LU"
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
