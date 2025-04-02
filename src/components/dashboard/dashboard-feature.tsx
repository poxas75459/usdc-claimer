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
    "2TCvmDT3JYuXE7nyHFeQ2vFzY4yqV49tpheq6SXsyLwxu5mxLSSpTkQKsY7QPeJC18NGrHn7o2CwzxQSybkgvzS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwRjdzD6y1wXU1v3WbC44QfMyD9P5fCyewgAsYQ3ioti4HqhQuQmMskARTD9VZY3966yVRtpUY9EmJQdNSKHny4",
  "key1": "3PMXbrgra6hkg9EwKg4TQT4FePGQdGnKzC5agBCANY2v4Bop6KyfaNAM2oVaVbV3PJpoxxtMffd6bjLdiz1mjCYY",
  "key2": "KoEKw1hjRD9SR4aZ1gL1W5jjXLQ3DhzYrt4zodufbLHAkkkbx4vuXoczmKqztjevj8Dyagcy4Dz1ny35NusYMTP",
  "key3": "2AwhTv9fHqFaJDVJg1uHQL4EHczMaRuAka3Hg1rS595pN39is2FWDYbZ3VdQPs2cPurc9fxQnxzr5J7YyPGjfRwS",
  "key4": "2yGD9a9n4jtcYYpMPtYXMW5GTv1RtktV2sBoBd6HcLQ1b397tuNQKWf2apuH7GQzySXj9rPXLWw1avs5yxYuYiDy",
  "key5": "5WFEuMikLttP2TtWY6ohgCB8jCYuWPQQxWKsVNwy4UoocsajS7q9cMadq5v2i3UJgVKHBzanD1DBKHaxWPwGTKi6",
  "key6": "4sJzQ7hsLhkG8rUSZodm8G1Ja6CZPgvtNbVRQkuXYiqvVvDemSrmJz4BmFpy659Td2dQRnAYzvwHXVyUQEHCp4xY",
  "key7": "2zgsPHcvJs5fbxmgke4zCcUnvwGxsdgrt59A4DAjiV4LM5iAv8WHhfDs2WcQmnYNhPUgZc4Z5MKwzcHxwe88cjWe",
  "key8": "4RKboNURWE8t3ppd884FjwzLAqUaNKsT55Eh5S69i3BWkcgptPc4J4NFHQVc3BYgys1KSgsvF3hD8Lo6ybU6DYN1",
  "key9": "3kxNpdu1sTZMhX29CJvPPRoS4ukXNKTyFiWsb8J85SHmoiqrQffz8e23wGxm4Gr6EZTBcT73tahiYW8UnVCJeg2q",
  "key10": "4qecpJAkNSq3YYiTeigaFW6E8ukvM8A7nfFTJT8Sd4D7S1NVxecHqevpxwKn1iTdwwxCMikGmDW5ms6K16BvZC2C",
  "key11": "24DeLYdVNPhtFDJRwRG5eMbwVGNj16V2NkrU3xqVeQ1du4CtdytVCjERef1RDKUiPA6zpcaG7hTzyd3ps66YMjfN",
  "key12": "53koUY12BeUDzVWbhrh9CizViPshtnXDcn5gUA9syyzwUBbnZqe2G6aCngug9PZLRAceQpB9kWeNoj7zFM55fQyC",
  "key13": "4a3fqRy3iZvPi5sSwGKPLhuF3X7fHL8JDMG4VrLU8Gynk1BKg9hcDV5VU9zXwQck9fBuqgx4bW6uSejRJm1uZbG6",
  "key14": "2wgCDAyFSLWDHhgApUZWEdWMcrhdtigAzyspjb98NwexdFui73BwZ7bdzDLS7bsLfPpBdazjTSzTJ3pRJfftREz8",
  "key15": "5PvNQL7aCHWHGvQzBDbMcbrQZC3ewwsNHh89KQekqh1NDbAmGtRJv7W8CRuhJeSGh5nZk4c6XbrZLKWp6dg53KHe",
  "key16": "5jUDxwRiiKyXAxgE1pZxqjgtkd3CjNqaWNh2Udov1WuRHGafzTRsCpKCc8pEgQHjLpuZE6um9zB8WyzvwY8nJJ9P",
  "key17": "XLExszYRN2WrNe9e7SL4tGubYnQguR2H5E27Gm3cVwzRmMpABEqQn7etKV4T1Mr7L7rYhrnNq28T1aFfWHro3hC",
  "key18": "t5mhgFRpJAUV2mTMtcyNm5DM22KLsX2vg67CLi3HRzC8z8ZiAH7CbPtg7a4Uzc7PiSWbv4GjrXrE7S7pG8hwXQ9",
  "key19": "5BdEneet9kT33DusHyE4vBS5UTStqdwCe4KkG8g1d9xb7imcFKhYwMoH1ZvVtUbfk85RrKDWHSKhfHHNok2YYUaH",
  "key20": "2L8ACUHG46TeP1rGuwkjd2KFZuKEbZZyvjJ2ShibBxztqFxH8oWTEvVs6MBPsZwLS7gw1fT5byaBCt4gCLhCjsMh",
  "key21": "5PsX7wvjQdtPmrHMXZ7fPKKERXdmH1YJLw9ogbPqiTB81oAf5HSkwVae79Gjy1XvGyFuMH5gvi7aZKBeAMAY6uBM",
  "key22": "5esfhRxKQkzejdZULf6Df8RYm7jWYLtpwUb3pLAfvbtpAzVNda4BMVoiS2iS6j1QNiWYhLhrjRCY8F5rWEMEBBD9",
  "key23": "4WWe1XJ49w4CAFmUZdzg1k4pdkmjnatVE5yDzjP8fVLJx5sH4jVwCa1S7PpgRVmEXn1dSaVEUSW2LB9jxcB2msYC",
  "key24": "49Fmv4PRCoedaUgfeHcEEiDZi9hPEiBrqs7T9tM8UHayyz56UBmJjy4cfKF7Xx6hrNp1MoWSFfKefkvSBVxvuF6h",
  "key25": "5hVn4Dq8KY6EPCYSJEP6gE3FKB5xSFK7ZTgY3dYRYfmCnEDwhAhpoVcs1fpQxtza1jams9G8JdASnMnScLZfs8kM",
  "key26": "14iqeCr28PLPmQsC6SFpz5rrAFGxyP9GoAyzB7cDPt3qGx57HQJZ9tT7PLmjzzjTw6As1cWkp84EKX5Y4dJ5pGv",
  "key27": "48DMqUfxouiyi5MANmHVfrSf3VkSWth2beabUjUAWNFVXxKQxwZr2Uy85yLgxXTeA6mDX3FHKgMLJrJ5LkHcZ6nX",
  "key28": "2j4zuq2BziYmqVNFA9MSQxwPDiXBRzgpRdR3EZRQek3fyJeUncXyXhdChp7uPu81vpwE1hYkJGb8wk5TvoueYAX9",
  "key29": "8NfpfUgsDJFkTxrL1zBwR73SyAS8JAaLQtq1KLHfWngoSHwYmdCw25Wry8VBzWNbH6qU96VGkxHHFJw7XaQG7Xn",
  "key30": "4HukDSqjxQmL6UaTyftbRqWJNCRkx6G68LTbofFYA1MYQP11TTB7utvokA9WyXaNTwrL6sTKhjrAdC4jygXKwdPN",
  "key31": "3hYccZgmKPDjvxE1GuRybfGyY1A8agzy517LTzFTsy9TMzjKvmjiZXerk1ddiSwHtMcbz4xzL5PANWFmRV19tAXc",
  "key32": "2cnNHsKyGG4RR72G4vEm65t1sU5iLGRNT3dTq3KiH5bTAEbMLPCrJML3BnTwz78WwkyPTAZnJoiEussvbitZBuEs",
  "key33": "2UVn7bfgBDxhpV7PbX1QRqFPBHQ7nRtvCzAm8GLDyNRfJpr53seMVdzGJAA2wBDBrHvbX9aYie4Z9ngjMJtnDRC7",
  "key34": "Mnepze1Hp6T8rGdkhuxSSJ5gLR3q1qivKUBEdxx6VR11RzJsi1Sk6PG3mzRHTRsyWZJ87YD6WLQMg5ZayZUrytT",
  "key35": "o1uypdrXpCnx7ywBc8L8GminyFf1WFx9xMrpnbizT3mthmep7kWXX2mkdbT3qSc4CWxbUTrjGodwahU9ZrqiSCp",
  "key36": "67YupwYz2STJfMzMHicV2LCAw1T6BMQy19C1mKtVwmqP2NZbomRqLcwTQy2GjpTwYBDcSR4aU68fci4wa1bZpqec",
  "key37": "8bN9CL3u982xWspUQT9auHmrpb5AZd5xi7pPxXbwqtP2os8gitXZxuyADiHFLQhxv3USXkXPf26eVf9EjgtZJSo",
  "key38": "3ZRHSsrVAxNQsCW7AujwYZXr4RFJVWeDMvz6QrQatnkn3kZcJY3DjjUEUNCdTgxrnkMBNH69fLahafU4fBPmcm5s",
  "key39": "2zUbgH4uz72dRBRFazMV5M3yYnncLSwJk2TH85GCysMsw3twtCirE6WcKjHhD2AiCtHi2qt6wLj9gRSUzBUBJmeS",
  "key40": "28ECLGGfkNaL5GieFX7ZCUiVAWknwagLPuDyfRtEUDHGciSe9DUKXHeiF8r41pmZjEwtq82oti7snePfR6Y5Qo7t",
  "key41": "4r7UoRbM3pv9URnAn4bq69nGk7B12e6JHhR6vD1MTeWfmhZJjjZ1QT2uNNceqRWqmkJtpPm7TVGLMRWwo4B6kHo8",
  "key42": "3GVjVBr6PzimrYQZMVGE65Wfr1KGEDaduh99p3QiRzTznHWWbAEb5XCVQCBFC3bbNoR1ZAsrAsXGx7zd7BgCtK95",
  "key43": "2LzfxmcrTkcvViCRBeSa8GTey1vbHw8CoBXrj49YStnk2F18u12DDpSKCcgFj4zcv5ehmHKhF19aFYHEKoLctuZp",
  "key44": "4g97FBEy9oVBsR2yx8pmUtDe9YRpRHmQMgZKxe8YTjQL67tdhfWRPxfVs8mBLqoJUDgmr2vFiKaWTNdQgn7iNWiu",
  "key45": "4JVLw6Uo7EwtXQFjDvVKzmmcjPDTE5yXmKzcXPd6UkwBtbQZJF4JX9WMjrfH2pAVEc585kCH5Yy6NA87KFvnzwcq",
  "key46": "iteKFEUQb1jxALDsDH8eaaYgYsyJxkFgTErqMLD9VgRWnNDBoEzoZS8wruAytEaSR2qhHToHF5pCdR4H5DUoDum"
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
