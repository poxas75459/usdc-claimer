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
    "4iVaEfTZmaVUCx12vXtBkJ8RLButgkKsae9WXYxsXupZYuv2ngBRaVmU5p4XPBEXCNyRuaLX1MbuWC6mNPqxwBjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kM3ahBgh8UNADgQHcj4QMhgZhuF81tqSnJ8cCNxT9o7j98NUuKLPxi9GetiMcMZ2M6Wabv3iLkJb6e8AMxi13Td",
  "key1": "4xi2hUTqLQLCgoLwcFX2PpEWNmUgzzfQfmYP3mdbRBVGCLgDMPaWe5aKZYDVUFcBtnHoanGFXzCmegxBgE5ugkDg",
  "key2": "UPjVVQemkybz52sgB6tA9RWGvA8CrrpFpaVNYqYgCGQDRg7rBMi3WMGPatynQZWbSAhgma9SAeMNZRGigm7FVx8",
  "key3": "2hhD7v29BdFFD5wTGRHhDXtup41FcZF46VPF1MRGGpzBmcz7h8wFNZPDUcDXeFoD8KTmZjsJ3nhD6aZCmBjHFBs2",
  "key4": "2U2srP3xBCF14gvmqyZmQ6XWgfyq7Ld2YgpskHiSTCV9vXFj7HNuLEd8XLbqLi3vztUNyTNogoL8nV39mbxT6WyZ",
  "key5": "5LPEDuRyvSiND9AMHgFCce4eBAuuZcQfyooGshxMiJukteYpYEyyRWp63wF3ftCVN5jGv84HzA4trm7stnnEQrbw",
  "key6": "3hZEJ4E3qe8SVWadGxyePGmdDz5MbiaoqGikMTRy7eC5C6MWT7beNxhbphgmdsEk3BuxqPccXmNGrMGSMxbuVuMC",
  "key7": "gvzsNMkSz4ZtoWSJ2nkTUUC8awBhVXwGrPjzUtRtXRd4hnMDSN2jXxsFnj2gJpBGVQEwMiMfx3JD7MnyAdhWsiN",
  "key8": "zjWSGp1g7PskLXvvxQBGcR534GwcY2kBZZeErxjKfKnp9EQzFE7JbB7rNasVh6Ea7FC5Kp8bWGRZEKiW4ahqm82",
  "key9": "4hfcDedbeMLWM4FXydCToPxz8SizQE6HNtKatT6bPJgKSaPgW9eS8nCqX6UeJVy8dgX552UdoMa5gZMJpzsyDfRi",
  "key10": "2yFAoncD58pUn8Qry3F7xL3f735EMTwiAkpNeebBt473qZ24qsdpxm1d6X3zQHg3WWjBbCWjSBHmsRsTCEgo5YiJ",
  "key11": "6L4hxR1msyFxSFNT24XRFKGrBZb71YjDz4d1oB3jEQp4Md1FpsvocRbxryt2Mi9TawPZ3G4Kur5YNCqM7nynRgw",
  "key12": "5w2481sUn5ipWRBGkdap3P4vsRhZxZ4XxuLdvz98yAnpLXRWqomQvkX7FxkE8nDc9E3oFNYTipmpN1fjPakF6nW1",
  "key13": "3j6UgpVB62CxXWJYU8Vxii6nanaTYshdqdPc2wigCDf2zWvy5acpf4s5TtUp4v6vgn8GTdfif4wrAeNYP8dwrm1u",
  "key14": "3astWWteq2vJur6BqGvg6TyvzUf1deYYrvNTouVX6VL5onqZ3uvReRPK2NhAH1zEJWrhE76QjVdrgwfBzc8WB6wr",
  "key15": "2nWriHFKggPC3umxh3jVqUNjRhQoLySmha8EN19vaJq7RfHEC7hr623qiu6L9MY5ATRibGwSkhynRnzq2nAkZXnb",
  "key16": "3CXqwbhGQVqhbn32cXfAbm3R6dX4az3JvsLRstaoc9hbvKCH7Zx3pg6nAokzqzGHxU2jRMZqhqFsTf3qcHUSBKgB",
  "key17": "3C1C3wCE5EU1sYWdeN4hccF13fSSzz23xmwTQmHKeZuEHSpLvuQQZ93FXXm8hQBuwnpao5e4Aru2Pe8WHedCLKz4",
  "key18": "4MY5iW7UfGVfRamBAnkekmQgzA537c5LeoT1f29e87dogPMK6GMWFmJTiXxFhjph4myW44rdgn3psDeGkBKCvoVg",
  "key19": "4qbufN8qscDVLETNRwb2HeWmZoNKsRwprkFsQWUYkmHLj9N9suukQ5oQa7HFt511jEFYRJtcmfMZo7nXnFVA77wW",
  "key20": "23Y84HFL4iaDMUZK9KbqoA2Dm2LjdHkXPAWZQoKgCxg2eHJLDK1MK86CJH9uM4V6BGvivQrF9QatuYrWLtKox4Hx",
  "key21": "tsvCxXE8V2riCDf5CLUqofGx6Jz848JfkNJP1PFi841HvTBu3ra74KB5adNFG8wpKKNJQFrhQJRRuA8GCjshQqV",
  "key22": "621nYvZU977VLkja6pZKHa2ubvdAJjvBGBaGYubrexEnNaL5E2XJ5stKvvHk44FokW6QXBdda8qoSc8MEPT9wTio",
  "key23": "4FFF3obfnAZb5oj538LHPKjzU5jvmQqf5DnEkFoZDRMu8kWahrKYERXSE1hHXWpmfx2wfWcRNFJChn9wXneU7ptn",
  "key24": "JVePFxM8FDDxz8b6LWzM6tkpxR4GgR7hoMBGXEsih45cgNfQpAkPcNbaqzXNUDFKW2Z6HR7AQVShHRjgvuTeEqo",
  "key25": "9BEPV59HnHghsFRwNvf2JhPTpyVJbLJji7RWFed2auET7eyuzkZUSjFbwsY71kPm3M4kZoKvad9KEsWNM92zVbP",
  "key26": "XBPWGFycbBnAbvMV2ZBwXayUamahay8C6Y8xJDQrHgrZRfoG8H6EHvGLCvaJANyCWtn5w5644EP3RfSs59nm8D4",
  "key27": "5Fxsbyk7FCzeKCPykcfuZaQQ3SnrvKrfvK9oPj6sHdHk5z6o8omA6Kj2HHfWMgDwhbEUgRTtjWMQ6iWFBCdNKTJn"
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
