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
    "2HzNDdeyuaHmYECYYCjFC7ZgofdTwB6gawEEdtZDZ5ixCM7vyyPnqzwRuweK5M9Rwirdn6yTxA2cWK2ch2sKMWfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bnHyrKHYSw1Ped5jrPsiJdBD6tREUqore4KxCJV7z92ZxGdWBvokREwW8JyZwM6pb16BkV51yQT8efs8bPChaz2",
  "key1": "3PEoGxjSpoFxZG3HgNmfeiDszgy5i4cHMGT2C2HUVtC7kWP6QxjMHF5erkRGrcA4nmGBBArpZVLSjzbZ4BtPEC7k",
  "key2": "3t5gWVU8fUg7wDVxwrjKp2qdc9DZN2AGJeU7famwnpFWqFSzNmQ9pcFwR2c975yJnMGwVp71DKdUQefs1Pncx75F",
  "key3": "4gmjUFnS9AGad4ajDBkS2vdQbaY8o9hSKKAXw3fUPrnRRmQKDcHDidPN3WH2z8jAK6PT2zFRW3dGbgCatHEDgrjw",
  "key4": "2CuBKtZ6un3BKh9x19VbeqM2C82vK9s5Vuz5paCzQhQYTAnySxtq9qUy1Lbdh6r5W5vmEapAgdeVPEkxj9AzkqjF",
  "key5": "w2ztGhHL9oq87jC6ZKWTxAKvSMQacrL2S7MNGBy3cFAmh3CnSZAzsuojLMA7cEAkhWqkHdHU4edAdzvwQJ9CrDo",
  "key6": "5YHaZkMieJYzYqM4VJgpQU3nWpKwRkCtGMmE4T6JhNPj9ZhiW2TAC3dxUY9vMLTiykG7D4vpRW7xXFPRJ67CqMUq",
  "key7": "2GBoJp58mxdaUhJjz11r7SBgrqagregZGfiKE8M72Zjckokuxcw16hbh9bKCxK7dmo8SEe1WJnpg3n9K5WraP3BL",
  "key8": "2Y3L4VNDgBwqgrmJr35jaJef1Uuajd1j3PFvvyjfc5FNh4ZqdoAbKHwqxZmUE9epn8PyfeuxEkbU9nZ8wRPv53Xh",
  "key9": "4cXczQSB7wNVMQFZbwV6Fg7qANs1kh3VugzBqZc7YrfK8jXTyevYHrMCRj4Q9wVAuigpFoUYfJpriQfYNnxbpGDt",
  "key10": "3ipbNYvVBYtCSxSYTBzHv1gy7k4zthmshe2jSHrxCGw4FhGEbpcWyvSPK8X38vU74L71zB44HfPAByvnYiDcJ6B1",
  "key11": "3ntEChT2GXMd1aYkWL1zXWo5mZLX7fngYRkTMXr2GxYQR8xQjK6YuLCdPwtdf2EFqymAxd1me6UJFF9ZoUvzwQC6",
  "key12": "516bweYrVKaYoaFF33SDGiwA5ZqEXZ2U8MkMmrQ4QKofKLctzbZgLqXFt6K2i9PGn8T114Gq8LYZibzwRnYbwKjf",
  "key13": "JsToJxB8MTNwsUBbLgwCg2wZVfymAMatWffZPrzpNpj4Y2W81QJcqWPwh4H23voTzpDLTnpVAwiHDkN2x8KzKRb",
  "key14": "4uoYwKzVXepHGJbTZvxPwXjHXEj7W9rwk9wfHS1mcr4PHHT1RmJwoy6GwtSFG3YzsnnnMrNU84dCrY4UK7QKjPfi",
  "key15": "2yedKvB5yDfesp7jZSoQ7K2g44esFuvAzkeA8GSMAHp6RXKVSsRDHH82TiEWxkubX9tZmeK8hEY2KQkqctTAdKGT",
  "key16": "5ivXSDpgZ8ZKiWUWA8Y7zvP11uWXfB84csecmwdEbQ7kpmHANVjxzDmEuRBTsrjAAMtx61gJTMgdFxJiY9UyQQK1",
  "key17": "HyaLymVPChAFx4XATrDcnHbKNCgWhUj7QPeBgnkJEZjApVUgzkDLi5QWBtEfneRtK1V5JkuPeFmfnCnrz7g5Vgi",
  "key18": "5Y9x2JE6pW5bvWS49477rXJTFS3FS6B727QnU1jwAmBERjpuaQyw5rD86GqjnQLqBbNaDmyjLpWSkUwconhbi6cv",
  "key19": "4DbK4hAdXFX9uXrXWJSCYBK1EbTuysJeSUYVMSmoGMkrHKV2yw2hYc2JwDsKMqXHPb2pVMFX5iMtWLmnsjqyEhVQ",
  "key20": "4Rrv2PPTqBijYuSoWgg6qfkzbphCDxR5MmNxgt6ZrXFmFjmAFi6Zggjx7XMfnDcaApawMoNs8imHTs2aYM128Phd",
  "key21": "3fVLkbgrmw8gHCTEVebRN7nEAyz7CdfyD3Qj7CSXFa6DKFqyHGVDpBPRgnz7gUwSSzHrtXHFqp7dAgNBCsRRU3Vr",
  "key22": "Df3M8h3WPKX5BYMiVVLL4m9CaBK6jwks51iWzFvesooHkg1rxHrADwWEkX1Y3dDMenES2nkQFRganBZHc929NAU",
  "key23": "5pSmsLN4LLrH6VtTboMhbACarrjwpmLQLrGsRiiTdcbfarkd3sMij5fyktuwExuu87hRT3sioEnMiaBCpYSq6pF2",
  "key24": "2mnaGfyAqD4SQbxZxnPvj5Rq9P6TCQrzjPTdwqdrM8hCAjcQxzMPEpZqqC7Biq1W4XJR4i2RPmcFCMf3yFHiKp1G",
  "key25": "3HdUA2Urc8drj39NE4FdpWzBkKc6baLXWRKxdyoSByvm172GFnyd16ywoFB4v5N9FNjey8bc6KdcPsfAQMUCoMjz",
  "key26": "2AVWkotqwSPNmBnKt5NEewB8osMEvAdaNqBFiU85nefktXkbrWLag1YKxBMNqy2m98ii6woxG1gFxmeUQsu4wfbr",
  "key27": "5vWMj6L4f7gcCxxtA7jGaseMaKjekkB8ztPsSeSMpNSR5n6jpvPVmhMykSU9zdUgzTM3x95WWxzE69wWL2Hb6tv",
  "key28": "5meB75MKApp8zbJ27szh7m6YgV7M6TpSsT2LPmMZ45DRdYuGA7ocEvygrvRoSkhY6YVuY2UXpEyRn5pZ8PxLNVmM",
  "key29": "4mZgRcan2xkv9iHfZg8VubqHAV94NT1Gb6ayrhVRYwmQrVUrvjLxTMgu5bZefV5e9MdAzPCceUBKkmfHpD1LwfeG",
  "key30": "rsJKpCjcvNPufW32fVPH4KXwWhqVxuUZcsMZ7dMCkJ7pdE1Yd2Bc626a9Vhp13a7gAgkhw67KbZ6cu2wmXjjSr8"
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
