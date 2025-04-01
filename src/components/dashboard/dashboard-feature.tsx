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
    "3xqj5Cva8goKscjJAdiw7HWE64LdjPppVXcAvtZEq1AiDdEWoMKV9AedFohsZ43fk4CYcybnk9WAa3yVhctTu5PB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYydEeL4FnDqZp6ZAzqNmCey3nY154dXXfVsbZHyPUpkyQV4sKCGTg9EJCgxX2XUBsLiGWj38Jby4BsztSJx7ax",
  "key1": "2gYiV8VRuCn2zFCxBW4ApGnBU4JEQGvKeP8xwiRUeztBnU1HE1VknA7nhDg5fHGqrHgf8xytrWKL5WDFh6EKhb4n",
  "key2": "3MboNzWWcnqjPWJJYSWoUmnhY7UzpTmYFiKbe5ySJTD6FP5RTk9rxzHVNVnGJB22BNUkfoUwhgEUcEwMghF7cCCP",
  "key3": "4886XQHhswR3UPBpJGDKZLxuhmj3pqHF3nWcrg17jxWmNcaxC4kvXtFTQxrxdw7nU33bxo17LH52Z3AghXY8PYFG",
  "key4": "5HfhsbwFjP4rQ3Xr6nr1FwzHSQjrzZjRyE3zxPx6hWAqwTQC1cGAKXzGSLxQmLwtWduyyZXVJkkNG6QmNFLUq9t9",
  "key5": "5eFMfowZ64Cis4JoM2CMeP68bkyQpsSyE4mN9WHA9oTZHftJid79Xc8MpD3KAGSXmud7n3WCuTxUcvSdGvS7ADX7",
  "key6": "3MRw43vRtBz9TPtAt4HSKT6sAF3cqYkXhD7EmtHm5DpFnYgeNKd69UUmq3a4V42JcfZsQt9qH54Ajj1csBFi2X8h",
  "key7": "4jfQbLoZb7A377sMyNpxdTUkBkzyU8AAFQtAQJ5aa758jHks87cJGW695SDQG6ExjsNTcZPrC8A3PBxxWto7JBC5",
  "key8": "4gxxapzbygiZKQZCfWDyRfiQTpUM77VrWCfFWK75ShgtxQY6USvCCamScpV5m6GXyMtu49mqa9kTHuqFPjjH6BqV",
  "key9": "3tp2cDVEd3Wbwurfm1HFS2DsKkjxkMPCtrbqet2pvCnQgw8sHpVMD6R1ZhpK3W53Kn1EJvSPyeyKhfMyj6suzqm2",
  "key10": "5myawkZRnnJwgW2KhHLWnVX7ehTYwCeXf1xdbMe3rHMNiodra8RQ6oksoM8Hjx9HEFwdQxMXXUWTomwMxErmatrU",
  "key11": "4jNe24Tjv3EqAkJunVRURMfyDsGtodQGxo6MaJEvpXQ5bqnsV9Xe6h7z3QhFCVMeAY5ERFLGXo9Bn3ibBoXMeJnv",
  "key12": "QZyApd7yNXYq3UW4jj24LWVrMgaeMjmFD2GnWvo3EFHUtjVwa8dmqPurAruknrmMs3U613Kw8u5EQqsv2RzYM3J",
  "key13": "5G6fb1eCEhmkLNWZRNf6vNdCMSgu2WwRVNaKPaBNGs1bdf26gE6PvVjTyZGJpJj81WfLLeVbro6xQkXtStuKBd5r",
  "key14": "VNtr7vv6AyiUdJ9uDa21oSL2ujE6EZHeAe4JYUPdg95Zs9yzHNHyA5fHRewTwDZ6KCVh3vWua6otbnWMeoD21qh",
  "key15": "2ZahrK4nYAqPCbXYSgaMBfrBAjN1h1JzdshhaE829DmqWWbMzj1i6wKyX6z7tHUtRKVAD6HqptmJSgh6Xptf4wVa",
  "key16": "3KHtDqme8RspEjXgARZMAaHmtTW9JpqbVH1zfHU3skaQmx3W18HrkSoqNcXYiSnqXydmA3GTkKUPs7bn2sZV2NtN",
  "key17": "4g74Zg1FGaBeqhkdFSve52uEsm4oKfbG33rS8ihWuzs9X9nxYjbXgeRYkNXTGXjjHyC6o5bMsNyrBR9oyfACF5qP",
  "key18": "fhhEXPHdeohPKZMjwaDAajp4P51Jpys2RGtMwmoJ1fwuTdwadSuBaU1KQvLojiBxjSVuzdKvL8PvVxMr4TJnaZk",
  "key19": "3GSxP3wnrWHwMCMjgBW9nkjir8qX2C8Z6YA7THRBCtgQyCGr6UQNvcR2TQKyG1kCWSo8V9evE7vnsmwcdC4AQrCj",
  "key20": "4UQtJihij5z9D8sCTXRKsSHq3Ssv3FuRxEw23seMqyPHe1UtTu4MADRor9KjkR3LsWyfNvez2eyCXrxQAdV6QgtX",
  "key21": "2ujeMNuzMBGRPyfjouQkQ4kzPz3HwhNXNS9rHW6dnbTV2A1wHvEywQjgn8452UJWv14TMcCkj9XmyfCsjN1fyhuy",
  "key22": "5BygBCYQT8yVMcDZyrwdhpcygoQkKu1X8mNe4oHQu1nKenoeKTTnicXqdag197C2coYe5KE3xKCxMkwxGCAdrqbC",
  "key23": "5yFhysK2xTh2pg6geauxiPzAShsiRzyf72T1T9StxxB96wDwS7E86KjRNSdvZW6dn32q13HFDHF7W7by5vE36RG2",
  "key24": "2JHfuD8kxySoQtoMA5rdnF5s9WpcoFUoaEuktJqJfoCDiz5fgxg9M3L9u3RFtxKNrn3Afn75JUjwTN2pSwRhrsJw",
  "key25": "92ZAV5MsAJv6t11ubVKg752oEMqNbsWFpj9B5HvgCvthAv4RMoMQW3HhXQdhg24Q7kbjjRZ2gs2ja8CTT7tTfCq",
  "key26": "Tg7Avn3VZGASCZMfGFjSyWmk9n4o6jC6SoLodA6p9tepGq1y8ck8MusbFCKjhqN2H4r5T54u7G2ouLXvaYaAwqe",
  "key27": "Ejp7ZdzUBwuEsHxoQWD82ftdP42pqSpim4fBz1ta9jSuxupyVn2pTFgfH2PnBqLbetNzFHYpYFpLCN9gWZin6CA",
  "key28": "4LuL5jUXRhnecjoNnLzrkzcjwCGGGBWk9YD59dUfaoNKpbCLS2vPAD11WA93CWUF2YHPpny2NWaHqYgGqbsF9kc9",
  "key29": "333XsTLDkAp7K35kPjtFxgW9NiwjhrEih3U5cFmtcyNPaRewi3sowy4XN7r4njiwe5yvLjmffRaUR8ouTEB1NP9q",
  "key30": "3nUGZUDJEMxoPJL3faZU8DHQPsTqAJ4ZotG1mRiAz1VypXWhpEcKxXLQV8LMvkFCABnirwYFr5BeAjMzRDyix2Hz",
  "key31": "5Kbkv5TgTzFaMHy6qMQ7cXqtRKAPWuCdPc6rRYVt2UZ2YnvPeACD2NpFLeX3ptpnnrno69tD7GjjVw4PHFn5HHDW",
  "key32": "5832Gi1GPau2n6jyRD27jni2BUGNUgr2p4cgCjNq9t5DYsNWDSecpu3CWer96EDV2eVVWT24Pf4eRxystmhDVGVA",
  "key33": "kNv4VduLvAU7p14kjqgHMv5pioKAUiatCRmVgTwtA73WCcESJQ94VB1zc1oojjyaREN2GHRr1BKe4JKexjV1tWt",
  "key34": "42qrFUvhafvV6VZDWLG7dio3FmxMRgqCewRPiPVu5PJV2b17ww3iyYqnWM6XMbAv4DSpkPEdxFzs4SjyCFiiGZDT",
  "key35": "5iy8WapJKRhmQeF89nShbAd6rSLwhZ9KdPoT1L5yaH763EwB474vvjErBffn8Ad3Dtf3ZT2vJmp2qhzkmrJeouzu",
  "key36": "2XjA9tM4aZ6yzK7WENYNpZKZfg3ADtLgLMn2jM7bZYq3K2YfN4sFco5ciJ4rGSNnPvzowMwpzWvVpPA1gWjR9KrF",
  "key37": "4ufQRxqVCK68qX7E19mtqsETWY5t7Kc5mK1DyWEp9aPLe8CLjySkHVYy66CRoK753fqdNLrjB3UkgwKMQWdSbb8M",
  "key38": "3FH2fqCF4V6Do7192cKT5pz9Y2zAxg9mauGaATR8JLVFGZFeHaq3WfU7xhQffYWKc9Fjf7iYm2oF4xwupS5kH1nR",
  "key39": "4F8HnBxhbCoo4oxPZmHaf2jTweY71EGQKnHeN7BE9QBxMXZ4GBfoDsU23eQD7iMb2kh85W2ZS5wwE5PXiGZFegrx",
  "key40": "5GC6zbH3g7Bbq9x4NPfPFDswTnVWV1AZgYH2HLhVrsexscnsrbypRfMozC15ytmQTCydip8TXwJxqe8AwHVSgQrQ",
  "key41": "2xJgdGxixcqKX9Z8gPS8sXS4jPA7Zb3D8FYxvJ9EH17j1EV5Ty1SpCijybLueYypDxwzLqNbSca9WhRTV3ciuLqD",
  "key42": "Cpxu66YESP4tzFkw8ms2VRsATWhvSXH8afFbnXNVr59D3P2HTVrocbVoTVPtEwmwGZVpueWgtHuPivBkTZZE9wP",
  "key43": "5k17pP1GVdhDkMLV5ebt4uvTz9HhJ4sQbbzBSy4E5JT8VLopXvRc6AKYEAbTwfqU6fonFkMkUmf3pV6tQPEBujuo",
  "key44": "3JBuxepVa4QpdP4ZofbCtHmKndEKbGQ61D4t5LmNKKypkbSSfEAukbyGw2uucdgSV44AGVgmSYpgiwzuhQ499W7M",
  "key45": "Uzs3PyHkSbo8ikq2gyhQWSDFSyDQfzvw4GJNEWowL8xAwcra5G3awt5QLBtGPtFBzE5RwSNrtLp6gkLDme2ejYo",
  "key46": "2h4GsKWHXvQWuUYXJHbxSp3UqnNypP7GU3PngmQuPQRxwkETVAcGKX5MbnACrTt1ncwhsRdhPUDEHNzEaHJfpfYP",
  "key47": "99YGN6dWcoGABj4194iQrGpTydszoBVhZWD99KB5cmiwowt8aLzgPbhLEWATyVXkFDz5eWwirCRasojraKtUK3K"
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
