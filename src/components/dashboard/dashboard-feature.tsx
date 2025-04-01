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
    "52wuyMPYDALErjnFHaQoG4QWiBt1FsBcrVAXQwVqDkVV2tgCBZNaz5PepXwLhLZYX9Mcpyqk5jqyg8M1dqvEH27x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3poPRo4WSbEQvKfvUkiyCpBDwUJkqNnan77hYf7ARocuUmcwE7rJQfyRSxzdkah39mg3byMPHAaczVsUFpuCooiP",
  "key1": "3R64RTnAoaEpbwffsbk6GvmEh3bzgxhk2RZ3iz2rtK76BmQfhsjQDukSfYb9rdewGutL7Gsvp217iaFEeMiFFvLC",
  "key2": "2MUnfMn6pxUKeQBeBEu53K8waTkR53ZxCMgxSESqVP6iQmJstFnp2CFPsuhuHvUp8wU5yRqTkMihdhqaJoToqUdX",
  "key3": "3XJCAKsoCMGUwodCCdbAhrVykEUk1wiV6DiSQW7jim9VJtEBpa8yr6NDH6vL8T14KzSWEjW35KUzZm2UipqHGsop",
  "key4": "5UkhiwYiJzp1RJEt69BceHxRTTRrp7yJm4iqXc1fU7jWcgr3zieRtewq214DgydL6DykhjH7uVvvNL4uqLXdm4to",
  "key5": "4bi35JWw42zdijS8VfZyPbKwU7uLkqxv4eqnLjwdqWAYWCddTESPGFBjTrJaGcwApxT2ir4yBM4Q4a8oEWLEa3Lc",
  "key6": "2P8QXjvdASGwvwGaY1zAXrzNFrjamP14UTMd39UdpFaC123Y2YrnmaXatDrtebEmXBWNvShbUMBahKb8dBCHCciR",
  "key7": "57oEQtRHEFBs7R7bBJVBt99T6Kt6vHYq672NdV6ufZguDmpREx8fAWEfX5N1JnD2TbCjLgGsBnoWuzCDyfdMXamR",
  "key8": "3dNoPvyQLDadBJoHPGVjaKCVRJcJkYJKk32oVKmSo9GciUVviZfN8P1UDQkpzNTYByxdSVQq1uNZBGrYPPHRfhQT",
  "key9": "ZbL9iFYMfP4Zga8ihaXWxfSzBWgg6rURiYtfSYARbxNfaBiq3WZ2RcnQy1XUfwsNKvNo9yKBSofgUhy8yLDwmVZ",
  "key10": "4WAWHzG37DwoSqLc4KfJZi5YYRYiLQHeSp9kdwV8i2fjKkauRqkfc9zdVD77xfi9ouzFxcomuWbRRut6KxjV2d88",
  "key11": "4E1XwSBJtw2ExtGz7nDYFndYquej1c51DGHnvvTgDLbt4rwNh7Rm5uXFG1cgWh2shq7111AjD8dP71iio3EDNyNj",
  "key12": "5tsgfLvx6nav3YgNGyfzNJKzv9zHwvTY2P1PKP5ZSnWmMmd7svnnkx521SpQpFqvr2qSdd5hPm1nyQEVfbQnikWT",
  "key13": "42RFZ7sgyyQgZH22Xt162p5qFcq9fYDN28JpasYrhLKM9YPWmJPKEfhDgSf716DtqVmdFKJXSXVEQzmnma9S6XgR",
  "key14": "5Qx4j4FArLEnTqbsoQWe6ewmJJSL1nPXTWhychwoWU9nz8NgYHmHY2bk5w414atJaxMtqgFob3GBRKRDguWG8qKZ",
  "key15": "Jyp8UBExZNtitsT4igqzf1iLhbw2FhDnuhzmnKXPF6U6a6rZJE6mRFVxabMU5wEZf9SirK1CjjwurzYsT82cwhn",
  "key16": "4KX6b3tP33Uzg8c3wxWs9j8p3C63hB9ESLwpmtbgexjpbus5sWWy7FNshYLe6U2esKAjnfQRZwMgTh33DhpbiMzc",
  "key17": "4xxXypEZjXKZfojf8ZTdDtGvrC1pqfzvR2abEXdRzLFxxzWq5JpYo8RHqZbDYuH97UBkZZEtBCqJwcPZfAnQZMX6",
  "key18": "2jfLwPQfGcK1f7KZLRjU2EXLrS6SHXzgeFim5U4UdFJzk9M821vNpts6cPXAUm2s2EGsnmJfkWNUBHHg9gTBAS9t",
  "key19": "fnxvNq8dxwUmVJMSfsEcjMXXvYVRvttyvQZ47XoJx9xDxqbRuxFGgn1DRTEhpT1Ey4psD3j7bPGC6oVUF4e5U4H",
  "key20": "5ZaKasmZ6zSPxJdMVpFLkzFuhp8bRCit6qK13sBao72DdPhsaZBhzKkgCNDoRDeHXCHpMJ5vvX4tcJ659cUdGi9X",
  "key21": "655U83pR1wbZw9QSWMFudv8QWJJCpFkce3CMHn4gzjXdEJtjEAbVdNoQUPXvBFPadLDwwW4imA8HbEqQou7crjjC",
  "key22": "2t6KeENjtnei6U7ZFNNGr9kxmBaRGD5WYKUhNBUVfYjMej4Ri8P3hNGPWd46PLRYjwqkwGfqaGs4vQ9rqG6tNRFc",
  "key23": "5jiAURrW27u1QNsYYCSzSuKx9F6QK4BTGx6KTMVUKLAacJ1BDVfPmiKLAfqSgEJoZtzkYJXcGT5UYq6DCP4efeXB",
  "key24": "5PhmR6NEAQqps9V1z3ihQswrRUsTNKDoPZnaVzUdxJRMcsivkrXui5Eq8SoTdqu2uzVAWcozyznndCYMp5twe8cG",
  "key25": "2fYQHj9eGtCeR9iagq6FxCNePUCpi5AcN6t4j3BLvtzNHcf9gqumARptuJBeUAo8YWUgZi8fUYcSojy74aq5QWJh",
  "key26": "2Z2AjZpvKbhEdzPUT7jZgH6kKWgG6qXMXrrMt2g5Bt9PCfB2HpTqKP9BjRwFc8AGNZbpieqHcFeUJZ9G5g36WJ4L"
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
