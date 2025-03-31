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
    "2xXyzPvfWoouNdPtWYk7nBxrnG5Xi6X6j9h22m822DQLih5RSiBKrbrqYsrDCiARUWuBUr2DtaGWN31Y4q5qR3jZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fyWpDkawnydXvsp6g9X6CzHpJN1EAYgZP3RDv8yH3MiyvhF51yeAL7UHxKcQDgnETJzwVXLST7GVvKJj746q75F",
  "key1": "2qCEBS4BR4bUVeYSz7Pk2BuPFR6vFBqyqE6jHXk1sECrhZXTgQkHkVzAPGXQBmFAG2yfBtDDKPjZ1c4tpysHbNdL",
  "key2": "3WuyANBwPPdEMGP2rtbCTgCRTfdiEECwJFAg2EwADzrkna5JJ99JRfTAgKeuQT7hh51c6vJBTMipR3z4dr1rzgHG",
  "key3": "4NpxroWXVFLTMwe1fQkUS9KEo8WfHnndkaWPUYxmfT2mTrJAwTJSKxwaqwWVbwdQAi4yAG2L4ehRPC1gmYcWtE8Q",
  "key4": "4wRG17JDugBU2aH98mEBiXa9puHQ3svgH2RRwW63Ks1hZnM2bBFV7VWsR4t9fUTDTb7tC7s5hJnamfWnbftmx6qc",
  "key5": "5ZFDZDhZiA1iASMuQ3JLEZV5hDiVehcv6p5auq1T9DWjJF8uMheSxakucpRsX5NfXm7e8J5mbRvpGGM24c6mYRUe",
  "key6": "2SVAsWHkeFhcXcE4E15mdvCkAYZY7zogdCLrp61u1RrPRtxnongeHbxzEa8M3YdBM5R3qShZRj8o8n3iRjYbbYEM",
  "key7": "49rZ45ESzSTcLNEfCKhqpZwDAyNdu4kKfWPXdMX85PXn6W96mm3NzyHmeoSzFfavskriQ4eeabxZL4QmeT3VdCHp",
  "key8": "32A9w5ic53AqdJxWmAjhqX4A8osfYifbgzsXgb7g79KGvKddurNpSLjUs9A3YLgGyFKSCCmdc5cghVBU7yhbBtqF",
  "key9": "5Je23issi34A7i2SmmSAayeuPNQmx6sWEokYVtB4ZcArLQpfcPUEK4JHBpZZQbCXo7Cwi7CWdun8dndhLh8JULfg",
  "key10": "4hVKcvjDUAhyCgH1BdjTbmm2LmY4GGbqk5BrKQvsAGt2MoeJ1dpn9SFvTS5vyP1y3zo9HYfZ7t7wjhN6T7CcRrAV",
  "key11": "3TQ2hoRP2o5txocrpQbJ6aavbZUkjAL1eY5HEfmttht6cPfY4XbUeSh1XSVU2ffVfmed4VqjpwrqtyjoyzRwzn2m",
  "key12": "4QJtyfvrzzUj3KuGRBcojFEHitCXgFkYbBdQXcRWXAvRT5vwRrnN8aaNWVVz9ieJ94hmU2LfULxx6EgmdXi7Jak8",
  "key13": "4DWpvdwZV1fmX9DpvdTYCmGz1gumu5Z9qhuNMNxAGxaVzfW6eDGRfWZw6MBjERLkZFqwF3oh3QFewVpy5JSePNtn",
  "key14": "5UyiBiZSwXd8F14u2HyLcGfdWknk9N2ZQZBUGA55JyxmF3gDhHF3oTanLkySmBD6DeJNSy8nL9VXARLuagWiTLwt",
  "key15": "4xXaedog9Xatx2VzDCJsE1XFY9nC7xKhsb722Wz9GZwZkfDoaYqADZmEDfrhp3rEm5K6uqWAxLeZdT6AqMPZj3ho",
  "key16": "1kCkF4W8maWNZTCWLzqSjxhbTddGQPXxBzK1agXmUp5ZfGpafWNnAXNM4vbhmrCYgN7s45z1HdHcyK4tp5Z9Ujd",
  "key17": "4CgmnY7heY8PUtpQ4pLKe9FF4aCVBeXG3ygHxYLRphGh4woieAFH7y3vnyEDLtZ9gU22NScXZPMWZ7QzfiQrXXAh",
  "key18": "4bPzTDJfWhYvhGX63kisUENMzosiYgXoqjCthsVStSarkQ9bE5S2py1ZmpDf6VZFRdvAhiJQHJSg518TWdDetzCH",
  "key19": "HxNRRjndhtVKRrWVk4UmAws9NHBzct6kAua7in5tvbbjsUycxnvYLccwuXHMqp9tRXFK3FCc5G37DqDptsETSQ7",
  "key20": "5Z5bs2iUXowGPgSSJwAA2c4JPSbuaWJxYPrQxdNKzTq9QBpHgoqLj3iV8ZQuTsozEvmGdt2KPgdrxrawUFyVp2yd",
  "key21": "4Pc1DdmJusKovEWVRr49w8Q1GgqoqULSKQYrCLMfWna69PWkoq1tDxi2xC8miz479DJ7mGxapJCoQckwu752SuvY",
  "key22": "WNep1YWGB9AN4KpM26fZbME8VSoMuCkisnPzBqt5vATdSjDkA67mciFZfDAsMCy8aztJXJDjw7Yu94uEDaKrNh2",
  "key23": "2V3vuaQtZgve1jZaZnuzTaAXkjbo11JP6tVMemLgnX1nXtR78kRgBgWbHhksV8g3HeYyVKEsZEFmfud9LwPSr78c",
  "key24": "4k3zGjEozKqfuiXyEEBhwzokzXx1JXcsxzHEdGiMwSX3Eqvm1r2iykciuBaBs6e5Rjc52atHiUL5NW2CSsqj5Z9b",
  "key25": "2iwCBUDo921nLeQ1qQ5LMLz8kwrG36YSezwvpzjCYF3qak37eRkst1F9FBBMe9hfhgzHiTWS5KeFgerXqDNi5MXL",
  "key26": "X3b1b4Tjczf51e3MrewPCWuchuxMWC1xp9qSxpLzTnFcvfRUpx5aXEdzPH7iiYUKhnCLjCN2CZjwcDLfvmKRZ2Z",
  "key27": "47CqKx4yRjhDoBvNQqkBBEkE2F1ZDkA1GZrfp3dwyXkkiKudNx5xgj7KQSEVzmciN1413p5b7FfkimtC2hNiEPBa",
  "key28": "FEyQ9fT1CNdJbGF8TjXQ1dkMkeYty7ZGVRfnw1u4n3wdPkPumeNKw3Jb3mGqNSBSzm26kfUy78r8g3D1qMwRWtw",
  "key29": "XJEgo1Xd1dJ4ojjnWvSvgw1HmpRzQUWGJid8Td4mbagd57Fn6tKxsm1QJAqqHWMmTUsmnf64SkxJP15odEhEwaj",
  "key30": "5E6fZXjiPbNqqKhhPm6QNN8JsVKpyAG3DEcSBZEx3MqS5QtNAVrg2HghvMScbsNUFVLU18xVpPQf7KiV3vw2b2E6",
  "key31": "59sM6kzEQ4ekcKyWGcsgVbVqdcbLHZ9q8d6cs63EJRWa4EygJw4ZE474htcMfN94fJdRSJiinaUyhMHhZVycSDej",
  "key32": "CFQZVG9558n4rNe3TYfnRvhk5jGNoXf9tLWVVwW8esMzGoWfybkzWQNR4zs4T8gdU69TcinEvNvsZDED2MfDgzv",
  "key33": "YVRN13imBxh1TT2GB5ceEcWgZLSSyMLpPgsGUjnrFEtVmerNPUfRkEvhpZjZpzrWxJPtVpdHNLasScntYp7rbWS",
  "key34": "3y5q7eA6g8GfTSYsbmZkhqNBvksKcfay8QrUrR6zqwr9FWvYyf4GL9ADD2devNrY36jamhBt5FP2BMotrESmctt8",
  "key35": "54qD2fy3EVC7bxdTnqVtkpj2DGRoa7mvYftQkxq4JSFbgFaNRf5G7KVtJ8oBrXZrvGfWssBK7kp5Dya22oDCFyJs",
  "key36": "3g8aVBwPhHQNHHddAAE1t31XQn4PKGMxcw2XG7CBzGY3xbFBTaDtfmV8h4diNrzEMTpGdWXAKb9Nj3AzMRPSEVhw",
  "key37": "4voWaM2f5SqRYXhTw7PpeQaB4FTEJnUhLdEVNJMGw6B8FhkEGkqJ3FQE4hYzqfzhuqm3oP8JKsf9Zrt7rnXK6w4p",
  "key38": "KRD5d3nyoiqwqouoYbYpMXALKymYFx1nd8TbVdGw7J8CArUcyBpqzKsc5ua7m2sm3HJxPiV15M5ov8Jxz5aGEf6"
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
