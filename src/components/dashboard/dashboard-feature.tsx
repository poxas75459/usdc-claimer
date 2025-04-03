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
    "2oDNxoLrHxCf6Zoyfi2bpGP25DtePPpe2T2SKDVYktTyP5XdpHUFn6JZEWR9Mz5JmeKF729h7AVQkoUUh9xsP1vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nhZaeZRWCfBPbsCtzugW9JigJRN3sLxWoza5Z1tJgmNDZiVsJSyTisGryco5i3nTguYNDMjQvmxWoXKZUGYfuM3",
  "key1": "2KWFv3GdT4WjeU13ReFCzpzSZ7Kmc9NvL6e2MNXMJY82Zc9pHicS5Dt2L2i9Svx5hhzmjNSoCbuUCSrB98ReNXQW",
  "key2": "W7p6Q66hHbDv7DFFbTqeCEAHpo33JKCvHG9pHR2B1JooWwPXBgJu3njc1THwQPSJ33KMe7MnXgfX3vMqHxigmLs",
  "key3": "5qVVh2yewy4XepiMFaATVZYnQMyMvqMJs1EMLFZcS34Nfc6UMensLYquRE1U33LiHKKSe4upaFRRNZ974rarfnCc",
  "key4": "24tuZTHrYnUh2uHwgnkEhSxSo6TUNPaKRExMNnz6XzwjBQQySXse7MC4NjeU1KbKVgMnmt17Q77jAzdpyRZkiibj",
  "key5": "5yqcDsfjmyQBxGSQCx1wvwhzVL4DfvDQPKnF4nmesSJtUuYsfZrkDnUKnDcBVwbCyPZ1pjTGvhC4e8a3UNhWmkGw",
  "key6": "2ENJfCehT2ERhpNZq6wAQJ9B37dxsNv9LNDNJApD5QyDygTfQ6gBc3Qd5ia3KL9FMioSQQJDw8DxKtoev25eADY8",
  "key7": "5ZGhtgjenTz9vuBDwVa94xw3jdnY5a5okrnZquceVtZHkEMX6ZJn1krE84k2aJoyfnLntMvYst57Zs8xHJDXGpDK",
  "key8": "547ZwekcjRscbC4c2CrzcGHJXddGn3dUpvUex2v8ateiLAdD1Vgwf1hjmNjxogZ5doSbb8Z122hxjTSX1AamD1mE",
  "key9": "3HL2XXLYi9i9bD11rpy7MAaPDFb8RBcwb5g1EsT6veMW5YfHf8vpScnQtUHNqQMEK3wR9P3TebZwAvF6Pxv43mUM",
  "key10": "B5JvEkn3j9m4Gzj7ThFpmumXLj63JBnDu2qQ8EPFakchjWewmnkDwKJDUmxgtLp9D3sih2pcc4poAEwqZcLh3jA",
  "key11": "oe6RNT5b3JF1enACRZEreuzeJVsy4y1yvoxL38JGKogJVuf7QEbdFdhg2f6SdzkCDBmsJaAewKaHHnvdyggYuJS",
  "key12": "mXHqpy45feZ4LN6AgPBYUd8EZ9Vpp8TQ2TJzvBmwPYeHJrwKKf1L8QiWDj6SuDofAPSeFXB3GAmtY7bST91sFaW",
  "key13": "2ToZCizQxRbS9MvmQ1gKn8huvcv6NeetJx4yg6L4PBb4BiYBrfVk48pV4CpQ56Y1bWPBs5gLUhkV4Mrfw4ukdmEc",
  "key14": "4jMCMGqUturzQr9mh1i1RF3euZRQRuK9GqvZ3u2LGBDVsE6AZho7JdQt7NVewNsmYnWb8e3RpRoXa7xQKQETRray",
  "key15": "2vxRkni3fd83rVAECrSjqaF6AvCXsWxxhLSppNQttJeznCtHqx4m8unugC2zQuPsW7yMf1oF4BfYfHqMhbJ4rXiY",
  "key16": "Fx5xXGxmvhwYi6k3o8jNErvz8wD6YLVj1cdegkEQhBoFrBCSiWm9wfpB7GJFnME2QPNCKfrjEqyaETv6AUguvNR",
  "key17": "33nUPANw7da4ub4LexF8dmhz5hun3st9f9nL6U2dCMDQRsufVKjoSDuKfxnz6FF5LMekda1ppTzaHnS14Dok7jRF",
  "key18": "3suT6xYzCSFCyey9HRpiCrkMXzh5NTxY14cdAET6nRhsVokjYvJtHssmdHMeWE6AnJHEbdo2aQQws3oU3GAQizmu",
  "key19": "44aqHZAPDiBDQdvAPzVXkKm1DRfi47PZqoj1CCrYp5yD8oKim1mWdAeJqrwP8Td5Ahdi1jYhwXyfHFGsRUg12JH",
  "key20": "5gh64vpWZdiJcP5KkVapJqN73TK5X118z731KviY8nC7Qh71Vvmc9WzJUmVae6EZEoNNVTwDMHNaBaoCGkP4B8sG",
  "key21": "HDSm7sbSkobXpeEJtBpptsfA9ny8wTXsRPhkA1Q4ZdMeuyAauMhBz6dakuaQwLhP7cpEWWWzsZ9LsuA1Zir3vCa",
  "key22": "3XZibbwQWEYjmamejrUFMh53WUSFZTdwUh8GYA2YjWJBqdAUDarFhuQ5VJSf9uDw6pG6kdSLgo2HakvB6BMrkUeM",
  "key23": "4VHLe1q1ntWXS1HQ2dE7rLptwiFmGY1747UuLDyAfntdQTzU12XHtdq4qtqY9tvhDnosz9GJhxuNaZim2mofEh62",
  "key24": "9P69P7urr9dFReFAhU87vBroW9mGDQ8XtpPyKhCsNYey3DeoEMcda5TmLaPedtPs8vNb3JD8kosyjGg5tNmDm8k",
  "key25": "2Kna3JwRy8ErwFYrYHWKkECF5rrT2agVuQ4tThaXigV5WwBSiMpMZg8qbT6qr5CPWuDDmBw44AFPYthyX4Y6wSWr",
  "key26": "5nrECv7dC6K9KjPnq9Xw2o1ZiKA2YvKwDeyrWhApE2dMgh4YRVj18TuXtAsm451chN5VxfsoQWknLw6yg91XTUtR",
  "key27": "1awR5qFRGMjrC82tpLU7C7tzjVFTK1gDu6pbeDaxUWMNxRo7JDwy35uvxtisXc2VPf4FNUQfsEb25uNzyAT44oK",
  "key28": "2iXMbSbQHWEDZd3yMeDNWVj2mJ6FzuSQ86rFGKwJUF9zNXS1RdANX6WRgdzY5uS5eugRdWjVWjZ2hHaL4x7Bp9u1",
  "key29": "5MeGqnH6sVFXZAasHP4doSiveisPM9RpUrrHf37BMoJDwy6ALqLV7pU4eWaTLsbTWGmiZ1AU4xXQVVCvxd3JkjAY",
  "key30": "4hMDDxjkCtwWKhpoeFDoCJ7n1LM9mSSmA5rWuC1ssXmCo2Qo21QMapWhet7GosK76XCfS36RaxVD8L9TQhAb88fr",
  "key31": "2mdC7M5EhqK3EvUpv3rVAu4DsncLtfhrM3q3UKeWbP7HHFajKij3yJN1Qf1ix615aLTYZ56zgx6t2pBeTh59bMdF",
  "key32": "4Gg2gzbnMz3JnV9kzxyEBWMm698sQL77NVzvzgdcBQDkMSVqrNmDip587ytENexkx5PtWvDpWEiE6MXSJqifaFj7",
  "key33": "34hzf5Ny299egTE7JQtwhm8NSRHSWeGi9zakwwEF2hLzk4na1xaY2KeZuxpbTQZvPTmvfqsSR7qUNBY3g6vP5FJt",
  "key34": "2QWd5aeNCBjn9JbW9dgihz752mn5z1kDZ5dFKk3aaWMycqEBhjhYqc83e17pcCVn58GEUoKrPKnkRpJqxJUp74N5",
  "key35": "5av77N87Z9CLvtHsKaN68nAtkSnB2rSLtrNzxVzrgZ2JthtLvSfBo1sF1EfAjNLQ5tSws8Ctz8sjws8fFk3QWGtD",
  "key36": "agui26qBkMXyBt59oRCeSCHGbb5hZTt32dVPskfTh7bjsZDma8CRJCN5u99nRhoFbwDEGbco7h8GXY5MyDnRa7S",
  "key37": "2SjLsgwjS2sqPbZAmTY73a7vT9dVqW3WtEYvp7PkcD6y8s6DDndZFaaPBnw9UamwyPsmurnK6yooZLgSYqPWyDoT",
  "key38": "2m8UiXeCMVvzq1prs9XKrMb3sbMTpngESPco3sSRfR9Nmcf3LmqgWJNcYU6gZcs6MqDyw3jis2dbZxcRRCXoB5Ff",
  "key39": "2voNGsJDVfeU1qhTXcVpn5kx5GfmspBTL7hAzhUv4eqbcrLVodsJLAokaX3sCBeCQYiuTPb4rFFQ6xk458zSL47V",
  "key40": "z8zsY8qvX2dhye6QyMkZUjrnMEYWzMXgeJgDgSdGVGQczMjCtvcnHJ5AwKwrLZ8zBqkMUjuc46ZYWwnt1iTSmi3",
  "key41": "JCTVCDnn1jTT6rasiS3QD8rxNhTPR8RPyemw2CAY9tJaa3RTqtJF78Rza4iK4HNzcMGc6tWutb2FrBQJXyKDv1z"
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
