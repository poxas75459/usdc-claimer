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
    "4xagpPTPMvPyfZfJdUZ47DgnbHGGHF7AG9J2AC47SNdCQ8mfnH7j54Qw8cVdbSgWzjtz2gXe1NXLNYmQfNMKg1eE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xF4rmjZJfcJjgjrkipg9KRAYExACvGECNTpQ3vBrnYCH6CvzsUUUnnNVB59qXeHbxA6QtNQj337CK1K8MDJYyRB",
  "key1": "2b5C53ogYLzo4scwh5hds3aLYPfkR2LuaNBJmFRjdNmYNRq9vGHMAQ2qtuVgnPNYLRHsAFJ2ma3quDaeHcYDuw4w",
  "key2": "5vXkbk6PrwN9LUkTR7rjTEUwzDsZ4NFvJtrQ19d53gErvgyiG1ww5CqzN9he8YPY2PwPQNxrnswZdKeRxtscByRW",
  "key3": "vybvNHgVxM4WTo9REFzP8PAJb9k8mjqNGtKyDR4hJxRSjCharTZm9z7iDN8Bh6gdxeCLjtpeRURnFYsy639sgrm",
  "key4": "5vxsXni8aaD3gJSKe17x8QjjkNfssGtZEv7o6KKwWMXc7r34TXpM3YpjH4d6YM7so9TEgRyuMWUMKfNqUDXWbm7D",
  "key5": "5BQrrHGAsLSmTSfDi4eFqPhHcj7w6rXVwZMqi8kTAxX8CEGGmF2mrVpMMc4L1bECf7cUjbg28uJ5sAu3fPQdteq2",
  "key6": "3H7jH5shtpL9nhTMv9jdWiKk9pKuoiebn1TLf5tJZXRUymfYXvbpXyLgB6UkmWk3WjJXf1ZnB6JndorfkNMm7S2P",
  "key7": "3PfhhXoGh4hTE66kJvwMbdJe5f6kLY44uAJ8dvMY4yBY7sF7B9f6izeVGeF2YPPw8cxUEJhx3xb8rKjGFNuKzKim",
  "key8": "3pVpji4XyQSbVwmTzZxu5Cjt7mPa2KoWFicLn1pggY9mFiR1ADacQoDegoy4WtPPRbGVfwgivMoxL4NWFaKG3FhC",
  "key9": "3QmoetYqZ7dHrP7o5TLJTpoU4NZuRUxKRekFrAbERoMN3MjvvQkyrF3FMx3w48vTi9tdz4Fdn6iFH9UvNDLCzVwR",
  "key10": "3PpFtTDAin6jHWsPUPmNRg33SGMALqXtnC4WAJAMzkPTUB8H7HgkSPKX8k7AS4gV44mq9NCuruk2wQXZHMNSgick",
  "key11": "2Rn2nTMBcWPLPXpuKFV4fTsERon993fjcdwsLsLDY6eqkXTL6bgv7BE71H6gpxU3525mcue4nch34T32f7MfkJT",
  "key12": "3rngbRtRmhkvSmRatPoRFVJaJVSEHHdZKWGjvqp3RCES6MfoYoCoByWvTjo8VH1ffQtscdqH3UydhhQ8ZWN1CDoM",
  "key13": "4XHk5YviBQkmzPJKNH1GdY6QNhHw5n1WUfuQWsoEHzDaaGaZHSEAYGMtDmLEahoVoVkPTn9XNvZ8vGuuvD3VKhzx",
  "key14": "EoyUuWmBGj1YNMmHqDqLoPJw4KUT7FvNARivq8bS2WiobMFi9nEDSDaphNDpR44udcUoX9mNt6X4qZBuKUigpLZ",
  "key15": "K6w5b2tfqfEGhwF7t7ToRxbNG9VecZiEsa6MCq8J5bhAy4oRpfpewFpCgU5XKb9aTBCnZSUtQatx2gbfAJBLXJN",
  "key16": "PDkthtUhQdN3a21Wx2VoNGRWnKE2cdstuH4UMSTpsNzwFeVbXXT1HSnYHkCCdA3qjUmUrusWscs9a9BebCa9aRn",
  "key17": "3J1tFcwHuRtqaTdUE2HnmuRkg25Zc7j1acBsfPDChiiVh5gPmitVU6PncBxVMq9hLqcXjyWD5AtuytyybsFuTBM",
  "key18": "5q2F3jCt5CcFSvzCu2RbAhmPbw4uVS76LG4shHBXxozDwx1Dm14j9r4hELiqERABkHazuBNRKdG4skg3z4h1PbyP",
  "key19": "B1KXFDGSx8M8DJ4MFJMUyjZC16GYWoAmvxoATN2R9drtYNngqtbssNJPA6DDsbUvXn5cqHJamUYWJ5d5gruk1bv",
  "key20": "4ybRaPxNYvw5mUmmVtkyZELUF9JMUU8Mdi3DogEX4MRBSLzHnnKHxM6SBTeQVyTQkkjrQgK7A45K9hhXozk6TbnU",
  "key21": "3EJL4mPJAj2dBYNBeem9QsMhh2KRijrM7MqyWsRK6zWReLQ4B3JcRv832yVPGjXSmyFCfZgT43fYtSP1WfWSTKEz",
  "key22": "3isQjNdmwyijhDUVCR4eQVHd2HL3oR44FvLy7SLXg233SZZCUPNsT8LLxxR5e3Zzop47uqLGjsNz6hFTYyZB4zyj",
  "key23": "4hPf1HSNNGM1FNRpuifKMeJW7FrfUFZRYZ9pewz2JsyKgFbknC5VEnJjW4PDEVEA7BJt25oT22Ay9xeCKLp2efL9",
  "key24": "2JmTgA3kj4q515WXVW29Tk1qU5dAHLXcRoNXYVmKFD8Sz1Gphh1b8Ua1vWbLcrGR62uzmk79sAFJoqALNeiuE5Zn",
  "key25": "4meUUj1h8qLWzdWRPpVJdcMtkCxU786rTunhfkF9nkGRcPt8RzedtTiVhqVVBsn3F6xY5jWu1ZUtWCJK2g5XNniR",
  "key26": "66hbciQsuvC9noxmNY52Di75kBGX3WBe8DviotvoFLSjXg233Sm29HEmBv25eLigJNSnJ1xFyKhe2A6EDn4odUw9"
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
