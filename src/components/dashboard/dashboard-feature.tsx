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
    "47bEqNvogK5URUmeehXr3PmnxDVqMRAD6yrfPV1bPLow4o4b5vLoWwthLtRrt1c6GoAFdJ7dNJipPLXXbqbkKXHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PzA4xoXv6x2SMNxt527nMHw426Zxk8mWTdLMY498DZRMPENNkE5eavZSh6axCnYgmDCnJyHtdV4fEgod76n6Crw",
  "key1": "aaFwgsDrQtrQYjSfuJV2r9oRqNq6gK6kpKuNtrp49NftoQrhjRsYfmqeBugjgQTVygKahkQQSpampwcVdvdfqpz",
  "key2": "5x89TR7j7NnUAKiMRoMbcsHpoX5n2VkHsdLGRoj9ZBGrLFxXuNdL26UhAyhPJqik3uiuwZbuorFBTJvTTBVz5PRc",
  "key3": "TC9AJeCSGKJU14iwwsodXeiV2tUMgNCxiBnXGfxF3KSRh8CrafFR2eK48xJsg6AXJ2kWyYmuJjVFrAintu9uoUY",
  "key4": "ZbfFKmvsmfSVtKF9hsyJ14WfGQpMBELbYB1bqvhvBvXio3nShmeR3kfAEHuUkKaFS6iEz3Qp8Jipg5VxmVrqBCV",
  "key5": "MZHFZciU8GngjckP25SQTnzo1QvUTTkZ3xeBRrykusucAmq5kzrVVZBBjgWQbvNY3Zru232htCpkSbhaAZNvrEF",
  "key6": "48Nm6debAgbtkzWVpwqiejgVkmj3H98qQ4EDqKUoDpvoaeJTgmJpdNMgLCv3U2oUp4bcQDRJ5Zm7vRaZxi96b6U5",
  "key7": "5S1b3k1JPWDSCoib52F1ar2g3joG4iAm5Hk1JsyueXDeBrqyphGcuzrGLLX8sDfXMggigCQPvmRKv9fCKAGqBvKW",
  "key8": "4kTWgpbY88zEzSMwHmC1EPe5Vy8JE3cfJb87VCnFySkfRj3v8RFFp7mNPhyiATXWCWtsyhZmTnDgm3QV584e53w2",
  "key9": "43w3afam6A78uk1K15Dz1mAFjk1LUmWA9voYvLqHRUWCADWWxZurGKcXCx4wWbgXDanyvhdouDp6CrHQNR78iexd",
  "key10": "QbWrJrMw21eiwNygkdjRkXZaAscGR6NpfDkMd6ddW8HigeeEtnfoyR9s7Cfin5uXk7AyzDQFSLngiVfBj4y9Ce9",
  "key11": "2veRbFPU4TSFQYsafWNbTpmtSZnrN3UYmx5oq8uGwBMPryhutqDDafnD4vB7niQyZ3ce2xqHnDwB8T8bow1VaRLz",
  "key12": "5cNmNcVujPvrRAAihMpyE39NHnSxw8Mbo4PDoXeDwtDXgJUo17C8uSsLN5PNNinoCMdBtjp4X7RejiSGvdAhTJP8",
  "key13": "32zddM9LJ4buBUXRjAaZSTDcscP935JMfAV7mrfzdrNuxxibRukhDnVnh5MZkWbC3KV5tYLAHsgAm24hMywprpk4",
  "key14": "2RxJHhU75qNW1Hx3PdZ3KbzJfUThQBuuEaVAwh8MSUwZ9GhF4oTNwM3zNCUVB59M9gWgKvFEYP47mPwHhihQ1c4w",
  "key15": "MvcbT7c5RaUVozJpZFkFAX83gpNysduo5hVRSKXjkJzXFPL1dF7cHSZnb1gw7APnkT6vwVCnuGrz5qeFEUTHXmf",
  "key16": "2gpE6CbBtpyZp38B9U6uCEcJSz4XZG1viZHSUjr7QoYc5aQAE19MbiiiAZSiU2mQtj5hy2YKYdszjJi99mgWR2ck",
  "key17": "5fasyCvWWjPBDoj3QSdUJiACcVSfKu87LHgNoyV3Eo28po7JHWvDGgxc5kVWKZ26G3MfbacDgrRfTp5nSZXkYgTw",
  "key18": "4taqsmveXpweyhkme4KwrecAysGfLYy3kXJ4GH7bNk3dzNfvro6AYUYndnsBJpcXujHtJWbJLx1V6ScG5qG8Ko9o",
  "key19": "2mksGum5ChPsbioajzV5zuUPEfgxCVxr9LMLP7XZXMend3pZ7f7GYcdBjdjsvYwDPy7jmsBJDtiaYkwN1BuC6Yua",
  "key20": "554n3z8CY5zzqrVaYEQ2BiGjqiNuKomB4qqCFjxpHHW4Uh9NEZ1nYDwuhySxxCkL6momwbfZZwfyKBmAxDuCG2M",
  "key21": "3An7dh59eAF81H2o5H4XDzxMPcUNjMc3NCDAUXbZwWqvK9EXnPU2yLXfe7eR8vjCSNbtBgnaWDntnETdxbWxczZG",
  "key22": "RuBnZycoGEc5jQy6pDcrDb1U8sZ9ZHsLGHXh6dBtaZpGd4VEWSo8m5htmMLyazv61resS3BWhCVKTGq3vnqfHyy",
  "key23": "29VcSL8NkiFjqNKzmNdUxccgPkQkenyRPNFubWkKxQLhcHdJgh6nopjzid8hTf8czEC42rXU7zW4nKfxLXT4z83C",
  "key24": "331aAm13xykrzSxpSEthTVp2qT6FM3cdnD9gCRkQunVwwipjtHE5Pv6STyuL3mqqe8H7JXHsumuPoEgfp2C3oqAQ",
  "key25": "2yZUBUCcXW3Xt4BARgV542qso1UwJ5LTSSsjmqLnFstRUhbdpdZC3P4HC4P5CDtpa8nJdRvPTXo7ToY85xGRRwTG",
  "key26": "5mrvQiPRwbT5GzRY3wkU7vW8cBmsWi1SKxsumW9L1baLnKY5kP9ryqady98dhKhKYYratsJnmqNvyBUrJbm6EEd5",
  "key27": "5va71pR9aZHjgQPTQ2rq937pjS7SfxahCnkhapNqRDGFHmYBCrvXEbGNUnU875fgVRyJFuGRzGjdADRELVPptxWs",
  "key28": "3669TktwRqhquQHwQuNTkQCxw7mM7uDwykStmKCa9HSZqSLKuBvGPgWJPBnW1nT3n8ioEu2kzyC8Go8vt42aXHDv",
  "key29": "4kRSXeUHXr532ndEYkAzneKCCHEHXZM1NVWGc5cRs48KktBknbaKckQY61979rqy7ib8GEGVhbd2XWBz91YmpB6w",
  "key30": "3JNFYsXrU5vcq4x5exuTkMJKzBhHkz4UteLXaH52j2JYnWLDGwysUgtBTaTxpZgiq6NCkThM3TMRakxpmfvmDu17",
  "key31": "az34LoYUqZY6mXiKSSy3nANe2KkYLXw8hDY78ZNPb9eHjhjsQaNGgNNrYhxnzn5Bj3LiZabuLnYR9nvNWfg8gSa",
  "key32": "TpujaENSHyZmXTGCuiN8qzjc4z84nTsRuX84rfCFQLQoaq5Y87kRsXCdRFGh1RCJ5uyFafpMUjBiE5ZAM6HhmMm",
  "key33": "mUBpZpRh2fXYbSKfWNTJc6Ui66pj9YfSrDzp3YyWEqEvjjdeWuT3ZstGeWentGYAXedYYT8hfWtg8LcbjcJ9AhG",
  "key34": "62w8DhJGzweYKLPnkwTgVLk4iNsBWBUZjMZWGb3fVLfqcHzZa74KbjNC8wvSVcTz7X1c4jFcxSGStpqgXAFZfPnT",
  "key35": "5fMf4t3XQGKRE83abfbHvVByyjXPVL5NXcUmRd4ZMSMNjJuQw5rRM6T666Kxv44VpKexh49HocpqwQ3jyA4ynCv6",
  "key36": "2Hpw54CzVd4dTJGxotSvwaM8evVP9j78wRfzLdr4nF3ertVHtYm88whC4ngreqQVhM6uXBDduHx5b2iAGDjQrQ1n",
  "key37": "5XBLx6TAYj3F4vJx3MXSaQXfKUtEULnPxqE1TM8voqXnXRYrwwTkVBLPWjsg8MHkfFAs2pNE9XYaT1w8JcNwWevt",
  "key38": "2BENz49Yjrz3ohPB88Pv8U136V29dTuBSuwXCd9HMw96kXMJo7Z8JT6hDNPVF7UU23Rd9DbRqqn8vcdDd6zWXT1V",
  "key39": "4BFeu8NKWpGhogpUBZaQn1Q275atYFcEGj8fny1GrtHCBu4RgVcWQjri4arVPC58mdZuKE1P24xmi5KmedGeLs1G",
  "key40": "5kctF8bcSsbKnK5c2QE7eQeEXvrA36CWChDMiAZjiWzJ3SZcS2i6yAN2ZmrBgpCKzNELV3BPj6Fci5CdqqRZQ3jW",
  "key41": "N1RhfAA32ipL4XNBaqKFJCExMAxZGVge1BTF1AX4UFhro76ac3EWkBUetnDSAgXrqQFJ8UtCGAqiPARy8z5EbbH",
  "key42": "T2gZEoLpqAL8Mpx6XcVSHT1pH4BAbtoUYusvqRA3uZ4gmGufpAYn3XMYNs9uuZqgFf6Q9XFV5toQEurBEmuCToG",
  "key43": "5sVShppXGxs5mtU64Pggg5wxm91jrVhy9TBgZxPgLubwG7asYnCc8bSWSkhdaJE78VehhkAuQ586GR2UJ6FbyZFk",
  "key44": "63SyaSBLfVbMsoELa7RKXBQ4CKobiAW3RvB7seGNnpFaAEG3jmEte8nB3AtprcwTW1bh2efttb29j7J8rxxKhwJ6",
  "key45": "5b7WxKTg884e7gZ5qn2dhTDxjJSVJmncvd8kQQwF9iEjpn2ijxfbBiKVcKvCGgE3ygoXiNmF4RFE2NRFq5am4Vss"
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
