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
    "2tc3NfCzzXD2byabPArQQJhwtPV2M9kUinTF1Md5nyBqa5arJQXXPW1c1bq3sDUK142DegvR877EhV7qHrBsAA3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BtWaVrgCTirLJE3hNCB9d3md5Rjz1jty7qPudnQFQvodmEoASTTVJTt52dctzTyj2YALxS9S8vpD7tmU2B4jim3",
  "key1": "2vVLwuiPG6Kw1br2BRMdN6yhGVwCa99Rq59fRMhcC4JW6pXHUxZz6fzV7qUqp9Wbbis6qknHrshFD6FZGhv3YMEs",
  "key2": "2UTJ8BwfVESnaSGSDe41KxiNnMBBJmGm8bKxDGM5gmTGPjuPZHEFvc5E1qKZEXhRZMu73FVkK2zQMBhJNGZmY1Aw",
  "key3": "3T98q6E3PwMAR8vbNELDei5NyPwa4bC2MSNoxkt7SrxVqdAdX68zwCmCDLaPbZFh3QTaUSaHA2ZXbME7JP4xMEXy",
  "key4": "3KKcABwsW8PdTw8wCsoNK1i4BsAn1aGbqj3VQ2pf2MTYWFafpmHTr24cuQJyPhUK1skzRBdtzPqBGfzYx5REkK3w",
  "key5": "4o2QJ6M692eSpbQ16ypZNsvBhZqhmBsTFbRQe2HU5AEsoBwZRfUBLxGXMMfzjWWbt7YKBYHVPYgeLmByX1UmWqhd",
  "key6": "4hjtCTefnPBBkp1AyUBQgALkbXCjqVYv2xwsqd9p327RGSgnWFAFe6kPBKUXSvrUTBWDZ7Mc8EhnUtgpzW4kxBXx",
  "key7": "2M8FgMNSsCGsXUjsjEVrZLJRrjjnTT664qwcSakbBscTh41zjzf31fgy4gahCtgHQYtbjuA1m65tEwnZWayXG8xR",
  "key8": "KTqs1sxYjKe2Ep32FMiLDEHVheyvi1nuJ5Z9dTqRB7hDYszEdtw2NcQuN4p6BUFABP2PSWQz3NtLBdmB9b5V5WQ",
  "key9": "JJQZ5PskDsPVAHVST1sLQkf26CGTDcxcj3cdUrJcnPpmZtrXQvPSo3v8kFuNSGvhnkV82tq4R1LpQCKU5wYBuVw",
  "key10": "2k9usjVBcini7VLegqt7Cj8a4KoYtCfJ7vBU453AQCeQx2zDWb8VNbk2cHi2AAVzZfXsE2aS6SB44prnPDEWpJKA",
  "key11": "2c6zTmU5zeYzTDJKzKsRAnp6UXNGfgT2xfZWzNL6MPVcuM9Zf9dfBwRmLCs4dS6GeWexvZnHN4ceuitAEf9bKgGi",
  "key12": "2LawntU9uzeMrR5BYcjfB9RpBNPhMFV6SvNtYvgPHDHSqhjccrX5em36Wn9YVxPv3yTgVP4fpnVhp5hPnRCTXbBJ",
  "key13": "3dFmxXqKjyGDV1HaQnV7cB856mrnTaHre8npeLSNgsqFW5JNvQRvmVVjZcRSK9sg1cfgbU5S8wR4qHdEdVyNUSxv",
  "key14": "33Uge4YiPfaHNVcAJo1ydDy7mBinwVmyovzo6jdzTRdjcoHdmkoQTaVrbHi42W1UbHcVtu8Adf7mvbTMSagJtEyd",
  "key15": "5UnpCQFyxKpP5HdyckpnXHY9gYTTiiyW8h88spfsBzjkLRXnMWjrDSVCYxT48vEhH8rvxhSW98ANUv2zm5uNgD69",
  "key16": "3SaRyc6y1nqkWpWD3jjcNyQuZZo3XA2ZJVe3pYHfygPCp8ah25mgrCNPuDrD8pSWYKynPiGtRb2gYrWpcU7c5dPq",
  "key17": "42FJLKRNzbxvR8nT63RqxA5cC2X4siuzzwy8toU7J3mGBBRipKvXZeqftVUr42s8zkX28gLxMWQkLrs4jN3VvFYF",
  "key18": "26noQb2dqjyqC6GFzRSdMiYveVoLRXEcnhJia1LJjiWvzUy3PC6tknuTcP72qsjZPMEgH4PYR8bc7ZP36m35exLi",
  "key19": "2iZLovuV2EqmQiTEg1DvAL2Yj3JnRAxX3kGoqK8eeJhT3wfEb6AG1Ap8hPUovyj7CqpprW9Qsgy9TkjmwiRkFYar",
  "key20": "3JzL6q3Fuc51964kgqmATTnjQHuuXo91BwL4KJSwQSuPMxkKgphAYifPFZhvRoDWDFkqWM29TLScivwtSB48g8TQ",
  "key21": "5QnCssf5svZhMDmusfc6gBtjGkXjSsvAqk2kHbU1e5g7htb4q7VAwu6aUzHb5z2ybVsJeqAvzhmwu1m33oaMRkwh",
  "key22": "gtCDqq2NHGSBjuoDKbJ7oK2wg5H6cVVNynCHEbeUv6xMMEEo7TrMu6ztNFUjczjvsnp5jvJxJ9ouxxuDSBc4vdD",
  "key23": "2cKv1oqrHDzSKzoMdSV3tvS71e8rumGZZtzwEx9Cpce4PYLHa5gYefTPKZwvkssgJK2B4zQiebLUYJw2682SmUFE",
  "key24": "2hkrGN3Xj6rUNDKE1EEm2C5dfoHh6SMx76em2Yj5pe5fsAAuaGw5HfxBroLTZAPMSA5P1pfMhhFZwv1yCGUafgfc",
  "key25": "TdvDCWHg8E6k8UX8ahKLyEJLW7bQuXEx4FcSqH6iGpfMiPXWN81wB4fnH6yKnpHq2SZ3yFpvnLNwmH3sJg7kQF2",
  "key26": "3Mpa3uu4yrTbG2u9sDWC9yaZ1sST4cMQpcsdtS7H8KrTbQGDwMXqUDFhYY5iWHqFCiAuqjVypAmHKLajupy3o91A",
  "key27": "4uCVSn3UrAnM5MYBJuksrM3iPt845Y27XSVe1WZ4PN8YYcr4rEnS6ruxQkXTTcyGb4U12TaArAmvzngucNYEDXi2",
  "key28": "4sGQ5PphbhF7pbEobBBZm2MVntkXtwje3TPtqDnYC4ncgtq9R43vsp97gM4VYixB3xPHN3GSVwNhYVUJ92NF2LSy",
  "key29": "5niJSi8wwgTqQSbUZ7WLi7KGMAkGBHxnaSPuX6GBkkrboovkMrUtU2sphvaBanY6jVQj3kcFZe9bAazdjKaQZgSa",
  "key30": "fF3CLhRpXXHegUr11qgX9r7GCHxrYuDkm1e9zeG54P5hfEfJQSpMVZ37vRo3bzew1Lbp7ikoDNzEcsCBReWiszF",
  "key31": "3Tcoi1vSECavJshzViFfXwJUEHHSFm2z15geJdjQdzHRz4qaT36mRxoAREPuuq2SQxintVbHe4YpbYUXC3raEQs",
  "key32": "32p6JRCr4STLw6VyPtjHDmebRGe67oMHt9juNnEB7GURS6nQQG5888yB2wn7ZWqwLUWeC89XryWtrCK7jKZ2Airn",
  "key33": "2gMYX2ESkpwpQX3j2gpmNm9NDV2AfyBHVbNARHHUQrVbe1wDYi1R6C1DDgiKbtZrzpCtjaiLP2xmLj7YFLdmgWDp",
  "key34": "4GfCxp9GmKbJheqcU6bneHJhyu4U5ZM2yDUo3cyGvtgjZTQZEvi4V2wXbBScYAcKRf9LFiJQWsZNKJWTrm4smyps",
  "key35": "dkHNkV6kdkXSoSmj7ZY78avvZ8b27UzVwxPFRiZBGaYZ1CA83vNqsk8P6EVnnuhPymTsvHCRptszUpvfxBQTr6r",
  "key36": "65rKYgpb1H2d1Q41NpzdPno3rDHaYvU71HQCzKoTEmpvYsgyUxXJCpqBymfunN9UV6CXiR8G9PmcDhowKuMkNi7u",
  "key37": "9Ar8GcxMAA5SbrC6LGrgo3hQFx8Wyv7jQTgr7TFEGs2MKv7kBR1G6TWphnHwYh8CTQF8MGH35SKdoBa13JpmYjv",
  "key38": "4DBww79uj85bUyC9G3VAWVWQCHDQNq3q5BwsVAJfmDnwgTgt2ZRwGKd3gXVGSiVgAf3iDqUHirAmyYaHeUY47VCU",
  "key39": "2kYGe7nDAYBdxZ4vmJ557e8xrrWfTN2UMPaMfnagS2ksGiKH5g3RkW4svpPBuasPqKtzwaLtuyGTUprqvwzS9RqL",
  "key40": "2uMRzHmGZbc1CyP1gcFGrd9eMUoZPAEAYSYcYg73iiHp8Fdxp4eZT3tV6uYDsD3w225VynsNrkqFcwzZXitWfpR3",
  "key41": "2sjGkiyH1YycUuEE6vaRZhGY8aaGTrD6MKefrQL3aLmY3QAksDUNkEKK2C9eS76prpsUXWXDWKXtSkCYiJ5SyvvP",
  "key42": "4GaKwRrT1wRieZWjFSjPa7fd6fEvFxcA6NTWwDaUUG3fY7rkt6e151bDwo8Cdoj8RkFsvkhnE2Dw7zTGqWEx4x2q",
  "key43": "5PbjvYHZ3xC2PoDV7huPU5RCnB39ZUEU4Qjh9NMAGogMSTurcebPzrmNQgbFLJKgt6z9NT1ivAewEwj5PMEQenzE",
  "key44": "Vn2AxyEjnKj58V78GXvUJB4CnKR7fEWm5Uj75zgtzWb7Jq6p3QWfTRp8sjytrasKPapP9jUS9jSayzvQvSzqXHn"
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
