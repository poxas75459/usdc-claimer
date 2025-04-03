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
    "65MF8NhpQ3fLuuRmtbqj4S7sFhSVFX1Cy1h2eatjN1Ly7ZLzuYWE9WnMLVUHcyuUQ2owtLs7oNuzd2tR55cwFsxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22AxZTvuVMvcEkdi2J7YivU4sdquK47MZ9bJLxTacemWfGkRrYve2mJ41v3EvVGkBRyozJttCv8hyZRdu8K6uHwR",
  "key1": "GjANaXuGEGEJHwbGwVZ6hKoYgqAZcXp7NWq7VVU9CYfZrQi6io822C9N1DozFcYhMnTrXYPBqwDRrDtMibM4PbW",
  "key2": "mbVv8MRpvLFRAvrgqcNWHWrPKUGAf8H4YhE817WN5Wrv2wUp9YWAwRRf6v6VVgf9TpojV9By1gtRgb3yXmpSd5Q",
  "key3": "4ACsnc2cgFoV7MKw86bZd1NUBtEmnYhQKH4LoDXuqK4QMDQFGyvEb1DEj61WuZxSDmfTx5HXxrA562pFbpqdVgBY",
  "key4": "2g5fG5dDpMys45b9Txqho112XRAJeX5ejuHdZoJKtfQEZhhgAJ5atZbgtSRXfyiX1eF64HFo3mCs4MGrHReCSkcb",
  "key5": "3KVyu2tuKkP834jnN7c3YRjLvdELcRFbuG61ZtideZpZccrm6tkKdbfJGR4ykTsu8ni3XcgqNzLUnJpabCNqTzcq",
  "key6": "3DfiW4YtaWQ932pWp4Eg5LayNUhf1y82rKYUnMZn3dwnjgCtjtokFPxrw6qh43ubszJkKv3Lv5VbhNnyLbyTPQVg",
  "key7": "58xLeBA89ZWzDWjRaZuordAmtZMHr6nDLhBCGjcSUctkj2FoBoD8ywZ1Nwp4zAuAZtj77iJD4pptKhkQZcDsZv52",
  "key8": "jheerLsAKATy1DoCVtFziCskQebvm2n2pRm8SMfc5umZyWjpGcBPmvEFXNDMeZmmBLKL6ocQmhMsZYwvkE6QFZH",
  "key9": "2xgYpTWvxta96E5cFyJPnvsXodXkYFyiGCuBYc26P6ipr9J2pCUWaCmLwJQ2Hs4F68YDix8WLQxyh92MP5EDu5Rw",
  "key10": "x6U2evCLgV7FMtudYjx6Frr456kAJsU6KxFprnjsPj99fGdUp5ciFW1gfqiHKK4XvS4aBdz1mRSexJLjHWq2sov",
  "key11": "4R2cWawRzr4vHZgcgANAbXGqxCBukTYWYGnjH9QkiDehPx8RqMDgUSBDAUYgWtEWQc19YLxp9ppdg4iJXoSSQ27P",
  "key12": "5eiSmRmQTmRGwj9MCZUk3z8C2GicvJSGbaJh5BhUJ2gjSzZjVC81r8UTyxSdhHsZrUU7NC7K2ctTPaK1Vp73j2VT",
  "key13": "45ko1DjzL9vqfSBQsuxapDRUyPGB5nHy13JhVii7qMQL88SY3bSi5YqQ2F3FiJzM1o6XpzGHif5Pt3ZHgbh1gnST",
  "key14": "66WoLmcpavc4LuF2dNoz7MeWPYBH4Wpj8m85j8bMUP8gNvcgo6AEWC7eS5qmgL3zecfCAa9EmGkK85DduFvussCu",
  "key15": "54NsscvGQQ3kgxZkZRYmvkuZUc1nsVUkSgfykJQ9hk6DbfNV52jRt8ze3PDySiA8HaP9gzZqW2uVDaPSeB3BLMYy",
  "key16": "59WRVkKbefmCgbuLwaYuswH635N4PfwJRH67ADi4w8uFo5nrTvQ9YuBTXMTQ6p5ndUBDrjCR4SWXRAqD7uMq46JD",
  "key17": "3BEBgSxVn3CLzYa6ww2u4BYKo8bfHDYLXL6Q2MVqHdyBszzSWjammdkSs9j4uHAo6irmjoYeWwiTHhRd7GPqJMQa",
  "key18": "4BfknvtKgVDvqRAbrYmVZcMCwmUb2Qwo4iQJ7QTCL5zShMPsBsTxVeedwyfMkAFLX4KrALtyaR8zKghqoKVAqViR",
  "key19": "PsXdwz9x9CstyTqp6iFXYn731Us6M1SmCi4KHqYjKscQQpeyqeBCZTtNZeqdAf9DLbeMK6zEYNraLwsUVfxTjH3",
  "key20": "2xJHzN94KVGTTUTzgyBsWQ9kqRTaiMWx8LHgGPCtC9fiHUEUPxnpbGHNzYRjt7hjrwar7VbxBJphgereMDbKCkf9",
  "key21": "2saoZ3j8Qd4QnrGaeTAG17fzfn6FDtbKffvTQf8uGT61SspCfeoahYF7eLNxDVEDZ3AapUsY5ADeaFcHMFcSYFhZ",
  "key22": "3wXQaTkpJG5fMuEW2NXMZNwwQSMKJzgVEQL4ohoqqdcasSLeEiNwV73taYirBUk4F3EmqJhHKhg5vQyM8UwxDzhJ",
  "key23": "2G3Ee56MvkRCE5JkmJDhHWb9FPx3NGJoptn4Uz5VPgdWD5FtQZPP7LAszsntb9surYYN85E9T1fgcJBtnjHBAn8L",
  "key24": "4JEvzzDonGu4at8FrRrBRN1ZFgNQ2Leugc8KX63YTYXvEF7uQ5svDaAmYowGQZiVA9bwqUEUAv91shaRVicoRxbV",
  "key25": "4bpLa2HdD8E69rNvRVmizpujXF7JaGsdpjSeZdEKqxp92cmAmo4AaA1JKLcVCR9GMTo85vnJXrqrPAR6mb1r9DR7",
  "key26": "5mDsZFPTRumVoqg5AHWoYAsYmVLTvfTfPKKEiC9ugrkcnKEJSUGt9hVTNzh3H9pZBkp24wyTyM5gaLAyfL4yssqw",
  "key27": "3yPtjpMS4rXgURj2CNynF8VbRNZHx5MsZmVRBXKkzwegJpTVStB1K2JR9abJH513iL4DU8MgtYTmUrxBrQnCkQVn",
  "key28": "35J7Hs6CQzcdXkuux23kqgNNoxVNScnUFXps8apkdDaCxUrWcUWGXxoEunY61nNgoPzUSFjb5zTeXsAvR5tYRiyt",
  "key29": "43hBoR324nbxfGPYGkcaJh7bSxE4wc4FKk47zm7C44RsNYjaa8uhVpgcH2quTPvMuyc4fi7uhzVTspWCih75uZBL",
  "key30": "4yzWJc3hKd7UaS7gNcsbQTbEBtcrNnb7AKLtME2PPzmHKFHMYsTH9Z3fAYDXwYLAvX7DwvoT4xJ3VWpFzefoQoPq"
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
