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
    "5JvBTnxK5MV8HwF93rigGqSvGpUv4UMAMvWqh25qWYbLgt6BgH2RkoMY8mYyPCkcA9sRsUQ56eKYsY5Y3F4LHh19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3of5MgZ4uZJJqF3xjctxn89FpURCpUificWyfV96Byti9sMB6bPPLsu24M2csr7Aaoj3bCRTboTm5duyEMtdnQ8v",
  "key1": "52B2fiJacep7EdVGDUm9NF3v7u156aTkwqKrpPvbqpSHrYFiFBfyEDpGGenePAfh8aKQdNn1zGjpQLtTNvzop4z4",
  "key2": "2kbb3hHvdLSxH1q7YKJut9Lq9EUhq6Uidzfi4rcoQZQjctaMo9Bmz4jdWXossnhP3EyJ1bCMoASb3PRhm7rXY5Jf",
  "key3": "39pFwAn4yGx7NWgFnfaYAJ3hbNVvGTXjsVDSvcCNSwpmcXekrRazALZDHwBXGUL26vFFMBq3muTgdhEpivqawgve",
  "key4": "3P1W1aQVDpbdoRUoX2W9xZZMg5KCAsio4RudRr4SeWrxqb1EvbJcwpJGNyZ7wFshM1QjGtTyRpwCm7gd4KYHWvCm",
  "key5": "vyCX7dUmgs6pbYc15SZVAv4qkyrjVKs9oxTcioNNB9QGGZCMbdiNgMT2Wy3axAYqgJ1ZZGKBTod2TWYRi3iD6Yh",
  "key6": "5nhH6PDGL6KbLcTMmKDhYRZ3RB6CaxPnM96CYZX5ajLLtLz6jPrsU12uFQGfXGDZXMQDKDLnYhwx71d9HJJxEaci",
  "key7": "4EfmCZPaoDp5f3nMts3sCvJaDkKaHwZhU1xER2KRbwoV9m9tVLxsezgyApsNwoj6adfWFgrSnRJ3QF8kUtwSvWHH",
  "key8": "4wfUz6kBtGTMNDMSyv94WjFAmdCf7YajkfEP62KcFBUihr2z5UtNwSvfWHXuMhjifFwF9zm4J3SHUA3rmVxoiq59",
  "key9": "23tNZjvJT6yjkKmvLckbstXN9ZNQpfaYxC2FU1wumBXyYN663g9uXto3ZKoqQyX4xd9c5tXbYYpodrLoN9L9LiNx",
  "key10": "xQWfsP5vFdaAaHtXFH6KG8vEqfKW96xicS1QBNrF6je8sQp1XS3pM4Y1SWvSDNDhouvQ5JLVW9zvxyr4oXqxpMj",
  "key11": "5R927xbDBgE3jmDqL3npDS6Uv7Q4nxKFVFqU2vvW8Jb2Q2ixFi9hUYTvCzXR3X8pgPNQHCGy54Q9teoefvNqLF87",
  "key12": "2axKG7krfWyyxXUjK7YvnaicUYSmt8hjuUSrWsV1M9V7phZ6ZNEGriGEiFFyAu8oGuMN9mWG331c5q9HXJfbVid7",
  "key13": "2T7pV1a2UarqaUCUtVXh2fGkLfeiiGbbabn1fFMaTry4kyw7Go3WNXh1emgub85jV8W2TVzQz7441EcCzgUrJ3KL",
  "key14": "5E6M57R5wUAcYziuLSWD5wBo5iPTYY1LgAjqS2SeRAfkoLe7dsb2NUm6UGZg9ejtv3qmWqYhH3GQvz4czqt3tACR",
  "key15": "4PRuxEx6RKcDgLQmdvpHj4gEUy8LhQ1FogaMSXxqLwY8FPG9aDpRRJf64h4nqWNmWFYFGCDZ9p1xEHayEJtZ4uFx",
  "key16": "3SD1t5qAgWfAtysCX1gWDGb3xWusBVgddEWNHzSBTtJAfF3iinQxTrox2dGC5asAukVsoNpmiKpf6CFWq1vsaEV1",
  "key17": "5CiSXUeJqx8DvDCDejAYbXt7nwgcEEZQzUd5DV6mGW77P6ah5o7AoADEiUh8tyP8ACwjdwYadnSV7rpWEYecikUh",
  "key18": "4D1DKJkNQvcohc3ZmdxHPRjFqd2W2smfzcTxne1RWPYMYuvVySqTaNuCduxDyi231qJywb8hSExL67QzXpryqMdd",
  "key19": "3vs3fMwxXjcpJSr6Nx9zASASWTVogWYrdsfMJCRQLWrpNzrtngxZFj8eq6oEm3yVNCoShE2fqaEB9iZgMubRp53Y",
  "key20": "2gDWDDvLwwzs64teZVRw8XesxiKXfjGf7Fxwf4SToBGzTBUcYGLhuaCPUELGW2AjyvC33GA599F6BhaE6znAZhDX",
  "key21": "vcEtjaZAYBe3DpwL5LovQXL15ajysEqPiRHii1LeHtSAH1S9r8gfg5821PY2EeUG1wZwFvrpJQfHsMQH337PgXu",
  "key22": "5JbkXp7eqxwfTw3xDwsa861HwsxMywXhrcrH2h7mL2AdybCg49bMnpRdtbHzmcQUYBEWEVR1QzBsLbFC5yD2fVjY",
  "key23": "4SWSa6Y1kcjsdmMTeJUpfZ7E7LuT9uiWJBREmFnN2GBiR27PF27XK2fc4cPw7PA2hm6vSjYhjwCM2brpMvp3MDxL",
  "key24": "41wi3d3pyivaSgGQPf6XLZ7az6Wai2VC13zx8AnfqkQA2QnhHkP8W7z7PTUr1bGNgv4tmDBe3QGjq4CZs4vN4P4t",
  "key25": "MPh4SduivrWxTwrH6NuNZP7Q49958tW6hML46gk1zFVvauwYTBJkdcMKLzukjTLHYEY1tqWsVDvZe9vKYLuTjag",
  "key26": "4gsqxCL972UC3bf8pgPW3YmXXyKwupip72nXbBkWFzvttdvo2TKNY4A9NSTn76uLBn35vtKmdd5FTcuhguhCqBsc",
  "key27": "22XvgVsv7jQySndjMw2Cy49XBBEqoiMrE8mRonQvmnE6k5biPj6sJoTpdUTict4mphQ4wV6pHkjDrRbjhKC4Yu8A",
  "key28": "3LEysUfrWoaPGHVP9KjWsPc4yTrPD2qwzMVCJo7vu55dNfAUzjok7ZRispF3ceHf6UD6JoA11PDKn3rheRtYqRWD",
  "key29": "3FweN4KvrV7JarcgfZ6pQLqyBSmmrB3u4gAN7ywyaPAf6mA4s5q5EfxDvcKvp6b963qhN2jUM1p2Voxpk1vDCh66",
  "key30": "5LaFCnpUGZF43MVvndooDesbgBZ4yqpm8uw5naxEikh2FWnc5ytNKcu654J7ZkupgLkGgGunZoHMJvTN8QWPzyE4",
  "key31": "3UCAK2ze6UWNm9nQEn1uChBrbzRs3t1HmjCB3zm6pxgoQgmpY5syTyb845pA2FJUWtUkWvync6AUJTJpMmA7GhuK",
  "key32": "22MH73UAtzyMSSuoMkWzYG7vJF9QFiBvs2ZsvKai5jXpro46GG9LN5hbigRg6Ej6z2HwKwVkVqx5yAX39Xm5jB9b",
  "key33": "2aGMVVDDDdTLMYgWXVzmppGkevgK1itQoM2o4Q8ssrY3KrT942zFJhzCT52MDtN6VcRrE9DkVGW73mi8EFhnhV1R",
  "key34": "628GVoBEmJerQHBGtB6uHi8aeahc6CPgh1gLXzoUEvM2CYvkQVYKXWwfycLpWNSsWMSukvLD5tMCF7pDQxAgqhRe",
  "key35": "37MkEoqevaSPjhTAf7FURcxSht6rbbC1mHz83q6dyf3nkAj1j2YJQTNg9t6tidhjTRCqR4gY6PQKcEQ81Yxe2r4u",
  "key36": "4UgarU1ucqYwRvwbuttd3i1SxPSH8J9xuE1wpa669wF2MZtZh7mcYwga9Z3xwSGmZsU48VxvkUX1iHxc5ry3yuzy"
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
