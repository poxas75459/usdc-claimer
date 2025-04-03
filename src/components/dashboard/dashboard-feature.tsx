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
    "3Krv9vh9Zvax5dt6dZt3A4aKu3JX3QW1uxBU9m8uSyfeMbUUjixTKhunD2v83ZQ5mrrHkK2zvZ5M1UyhbdcPfDfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oVwc4G7keyJju58YaFByDzaRPh3oJAVRC4xLiVQPEJxYv3CpVFip5FzeS48YC6o3RjQ1yfsbKfxsgGo5AjDntxE",
  "key1": "35vKw2F8Sb9K3zCVhVJjs1xThhFCp11m9HBHyXJnPmnooaBpYz11AQLw4grjWHL5Z6fL77tJswj3TVbAP5NkQDgQ",
  "key2": "5jXcT1XERgMDy4Be7szZ39dUBjS6qrPBGSErE57FEQZyCoJ1ku4x5ML6BywDe9inYU8rJtc7wrKS7V9UQCa4b2ZN",
  "key3": "2oe6hmwYkx9GcsXhin6aWQKQVxieoQiMxBm7paNo91jGW2mLvg7Wri4whRQ8DXV6S1T4HA9imEGdBoSiqEqGo9cW",
  "key4": "wF8Wa3FfJZn1uJGFJ6Qo6Dn8RGhm3YMYsg55qEfcKgkxq5fpJVsEaPmRGHGLZ9RMANY5CppUv2GvyxCi96kjTf2",
  "key5": "2ecaRtHHqMuJgKgGuTJzWngvF1zLTHdNLow7YkH24DiTBtCTX1iaPS2AnFiNmwksaGR7bfSwNedDn3b4rh3mTGYV",
  "key6": "hN2PwDmTkLw2WxLvEPbLXU4eSd7hHhpCMgU9ZrYGvENE4uod8BiWFT4Q43RUDKprho9JVjubMzUZoQiTAMDqzkm",
  "key7": "4Tq3MRx26bNYJkswYeBBUQbPuYPFJbsy4fdomJDtnEnsmxZEzFbLdmM4pGgkNoK3eji4yTMN9Z8f29jNgC7QPr4h",
  "key8": "fbJHwVbUjhhinSXUFji4NGksmtqR6dig1gXR6durks1csf2pudLmXWmKdEqwrTqeiyc5ewG8dYgj8jeZYFBFq9w",
  "key9": "4VEiN7kAtfbYhq8LFDU4ogaLQazL7TousaoRiUb18ELmfgFuAgHZWMkj8m1UsMLJgaFQEL3RKPsrbyKM9ciNWwtX",
  "key10": "24PBnmubH2HPxU1g6SdvEomAuoTs2qY8mTtk12hrYCHtnBE5Yt197rabg51qZr82aAULHS7rCCSJr6L72s2ABnNG",
  "key11": "3wxFJpNmdqMr76gMysVbKiAzDKSqr3hEjdjetkxEim2u5z6DynTSPHRQRnP1mmcnrJkSZe2cbsRa6gYa5DWJQNMq",
  "key12": "WSiMY7Nuyfad4oAJzLMZt3imiBUQBoXoM7tpsqPPN8j7fGNNTY1AceMtsK15odgRfhBQKS6kr47JVYiwrseLz2y",
  "key13": "2wLH3aVWLrUr8tDd2D7U3QxWfeh6yYz71bUzfikWt1eBJM3ECemnkFYstSgQrpGUKEmdV8MtXU4QZC7reqCh3WrE",
  "key14": "3RRo8CcRdi2A2Txdha4Z3EpmU8b2C7F2foYaNbH3Hh5ZDhJpUKecuVW7am5rKfPsJBoJ7nrF1YBjDAPFh5J11ct",
  "key15": "2zyKYmkB1nJeFH63mMsZ6FK5scfV6VEbgYXB9uvT8A2xLZEZrrAcuaaJpC878CeinLBrSDsoHKZuACt5axVRfwFf",
  "key16": "5kUuVNK7RuiCBvctHm5yD2L8xfWQzLFjrps821AAPY6tvtrthT4hAgpzAYhGVbfB1cErnX9zQdmwoQcJ2CgobUbp",
  "key17": "678sw4B3wh9RFMVZNLm6m2MuXYMqseWAUmh4rnFC3KhgKDRpMSBJTgdAWPpcBY6avshSvUatY6rskqCMmTD1fvNg",
  "key18": "3B1EhYJrbQRe8jfdbuREAhx25WP8ARbqpWaJo2Q4255nbZSZSNAVbU5j9ArpQ6Rmsxxe4kJmudA2GziKbiujjt1U",
  "key19": "45hbDYcQLkjWgReCvtrh5i7zWej3YEVJLCwUPqdHHCAY8EufiR2HAv8q3iN1EsD2PePVdNNfiB3Krd2m4yVYbV2J",
  "key20": "5FDcf3MqgXsyQ1mUDinr8EHnHMywSZQhSmmsp3TWVNAXFeeGL6uswZRY6Puoomr9FtpW5bBh7qfWqPa3BteHmiva",
  "key21": "3ZP1aEwkyUMjeSAngS5qcSvQjxrHL1jyCLkLSXouAMUijdgNnMzdQy5LDin1kkRC9bmvX8ShTTcdjKvJ9ep7hpD6",
  "key22": "5PafjZaUchWeQevzqYcACyxJTf35rwY6xDc1n4iS996FN44HxQebWZrPW646E9wTpn1aKmBFd4PGaqx9zDP7ASmu",
  "key23": "3t8KFn9a8UovSWzSx2n97Hw9arexr1ZeHfrnqADdv3RsGDkVuRDg5PT6SpabiyXYuNMCxp3WRXuUBF7NYML2c2ve",
  "key24": "4jbfswXsRHcBJi4eoNXFBRvupt4VBoxUqtKWuuNTQyFJUj9sCYY7DmVPXGrJqttY2K12T3czdXCsBCg97KgFefXh",
  "key25": "3yxhvkDAiT8HNWjPTV41my77xakToaB72xfbquYGpQEC3szySPb6g8jNMetQN5m3f5nWvAk9ZSQVJtrRGJFXR56f",
  "key26": "5uU9BB2Qp5G5RoHZ5Dnq8FTcjHmX61G21ULBe3vpH74UMrsA7MMn38AEpPePgfKyYLiWUzmvAxDvBU9wvYNtevpV",
  "key27": "5cfnVoGWReuETSG9pN56H1FC815DhcVSM5cs9zZSfFBU1iGFfb7PkWCtEFm9aZ7CnmXaF4azZpJyjbhKAdE6VHSE",
  "key28": "21vioNUDiTabFMpMmX8DR6SG49oG2cTAqpN2e83XpAYGBJW6Cs569hhVq99y3DRgK7jrGFgNFy1EdGAbXuXfRPFv",
  "key29": "4k4H7pgmJ2Me8ys2BqrAhe1XYpZXV4D1EsjNgqdTDbYjvGqEvTP4aZi2zuY15vnZWy8qUibutHFYWvbSu3tm44iY",
  "key30": "46U4eNkyccNFBR8hsAYWrujo2cXZK3VajmuMnHvSeWF5j23oXQsdySBEfcUMDHar6MKiYpkjSgx1F7dbYCcAtvuE"
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
