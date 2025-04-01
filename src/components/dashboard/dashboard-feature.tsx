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
    "3XdrQVKbk7JHJrTV8FNzR311JbgMpQGjkUgk2pUuScsJRjxfcebvb29i2ySbs9KTP5w5BL3jY91eUbro3QfU5QMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z2dUJsRFz5voPsEsAECguS9hFtRD24d6Yqp6QgEKetpWe5mfgfdoFrRUFpp27z9URjVpnKsgYenZs4aP9YUoxVi",
  "key1": "5htSVEpuZrW1YP7h7SFhpo4k4EJ5W7rRwaMu4Jyn9R6ogLMT9HrSqLh8R467HBZfKxKhiA6bc3DU1cTbYK7jsiJJ",
  "key2": "4AhFZouMbbJ4kkbrZhN2xFf9s8tMu3EYhvU28w8h7WXRTS9yvy7Mm7pTxBb1gNWtR9Mgv39E43i8Zdk5fsputzvk",
  "key3": "4fGKB9xFmszobZGhhCuXmeDdqXxnEuFh6QjM93rcnApyrk2475153iYahoYBAiXhwoJV2TAo9LR35P6sFpHJCRRa",
  "key4": "2BoRNs2fUBc1g2ALkwDSQJGfGfHWoPVXaN1B8H1fVpKkgBkRDqn8uNxtPKetVPgQVFd6ysyksaVus71grLXFH1bf",
  "key5": "4w6CEUoBm2xzzPSRGEZtFUaLAptuWsSm3ePaqEK4LcHekhFRmknJt4q4XDYy2mmEvW6vvh9VdU554X7FcXzocnn8",
  "key6": "3ppUdSiyLThsQkYfWczkeVLrVME3yo76bPtgCjnnMBK2xvegnZxSGXX62hBSSiEBG8RX5otRdijpyC9zTYweXAYP",
  "key7": "NK8mLcCkioTFttqu8ADDfJmUi92ojY3AXC8nWoznLqtpN4tvCe3mVRWQwpMbWSJxEeZ2ffmGkRg1nwf6oBBWi8r",
  "key8": "674SsnRpY4LTCVXuerLCLhjiovfgYJeHuaMWRBXE5sGTM6ittNgeSwBAwWoPBCKVWyBJt6d8zZuatu5d2rG7wccm",
  "key9": "3DBQM4Xiuv31QWFpRKdvGdcSQoHAN2Adjz7DotCQ5jt7ijNZDLD91hFVp3zMBRKL1qnxs6DakqFUD3gXNQvrppCJ",
  "key10": "3PfaqrEsmcQ8cSZwhNFN22g7SJmMUSEf1EotEnSnSsMrYAoe12Bdgu8r3JGgcJvZYf6taBndWsN31vTMq2keNVBH",
  "key11": "FxeW44Nxeoyf1jQSvfRtDkZuaZJCJRFsE7csXteDfPSFbevVHdRbTtXwTASbP7u7wwMYXiGoZZJX1UN3SajWDBt",
  "key12": "5sg5XrgYysgZk8dxTsmhdiyFCgAkrytuwzjDdMRYFHnqsbKttQkWQbGr4bV11VfufGi9ETFNQpJTRVNRs6URYMpv",
  "key13": "3vb3bNAtS4BiaGqZahPeALBssE1jRyS6GLSCtZQ7uz2KuE7ffbZ2xwbdHQr345CEEXF1snCADgTiGncdUY2pmwPU",
  "key14": "24qUvQsg6uYtdSXzfiiZJivJufuqU7FkeSg65BVXkz9DhcEFj418bo4eq9FbHh2B1PSSRgFLbid6kTNUeKuFhf8j",
  "key15": "2GJT6n8CU4HpuWYaUAht8g2hjLyZ2DcQYWGbUA8fNwKweUEULzbY8BjesZTduJdWp3nHXcRTmBMn3WsZymcJYZk2",
  "key16": "5erwqaQzfeezGnL1Wh8AwT1NTGW8jPKquxE4dB7EVAc1HXL2pcNG3t9thCLMVJduLQYFVurKcbFJViPReykF7sns",
  "key17": "3eLYVnNoNQzmMTi7Dv6zU5yAf6haFX9C2vAWq7E3NHrSdXm536F1YGMyeBLefGePtLddEVheqHgfP3xVuHkj91NA",
  "key18": "psXJZrQUhF48h3jgoUMUfgPp1yLYYjFQijuY57odipZyLmaQA6LfCkqFnFgR1CgsYZ3a9aD7GkWkFE7i1R52Exk",
  "key19": "4oR4TiKXHmbiBz9pQZhD3HG316G1r9ok3PyQVqvDYqSAjZ5mYaFKAtw81BDpVckmxoMjeKhHZEajC9Bm6KvzUJYq",
  "key20": "5p9z6zQKNYrwzQpRBUKYt9r5EvkDH6fMcsDXcEMbxWhyRihf2GyM4W5qX4ZguqQpo2Mp13oxLRdAvwoq5wo67SwS",
  "key21": "4AtfKAjbezbcYJcguJ4itBrSJ7xygnrQ3qh4bGu3yujHvWA5PF4iN6BMmVpZ8K4YKXw2VHxsx298NdY2y1SEVBAd",
  "key22": "3jujS5dd4oZP7y6po9AiwDqVF5vcC24Kfh9kqvZnfh23vAKVqw7xYkih4ZccyfZ59L6pftHE58J1fz4hKQ22QXtj",
  "key23": "F5oXqP3WoAkkqJUG1cm8LyaMPfCdfXCPBQkMh4P7BFKrRroZDY3hmgWckbnJhp46YJ3GeKUteJ5iUR3ta7Er9Ez",
  "key24": "tCbNN4XcKk64JXKmi7HrSdoDrSnJ3virWtpJwuLUwEFy4xBsyAhGK2jqF8Y58vEV9kqpax79JixbawtiFWRsZxR",
  "key25": "4PGnPtAJnZnaMS4QMXGHBq4KQajfBTYozFySCc3ZSxCTWV6b4iLdPb3ZAj23a2Czx1ktrzwYmfY6LcYpWoU9wfm6",
  "key26": "61oEDJWev3HzHsSe8T6X7vEGWPtMPHNXCzp1cqHXkiywKnNVMBZ79PsnxBewch74gH7jPg5uxAuhkLbxYpQJibdr",
  "key27": "5KXxuQKbDabxCb6Gh6tYasQ5osJnoE2V22Pbz16GwQYhtPHJLbPZXsm9djfBLwSUMHKx9f4A9wbKe5BYJY7aw9ro",
  "key28": "3yteD9seUZT64MZZizU5VDPhV36vSbw6fYRQHMzuhLUMuTABKNjbWaLTB8khqJQpuqXJ6J9zTutMdULY65k1iF6g",
  "key29": "5L9YB7i2xLtDgG26vSZu6e1rE6Vi7XnrqCn4KicBCz7TiKyTmFMQDLgu7fr6CnhXftKCa5pRCWNuTzA3WNB7LgjE",
  "key30": "3QaAxm2zLzowogcmF78aaZ181LRYqxe8Yod3YQVu7kb9jAqm93mdKjZJ3MQV65N5sTBnWy2XfGZFYgU7mwwH6vu8",
  "key31": "4aocGhRBCuCgz3dwHAm5AFEGTqJnzfbYasw6rofwTmsK4KGtTqL2xnzqTiqKxTAvkRGseix2fNdgiCc6Dn46WXYT",
  "key32": "361wsiH8w31ci2GrT7esgdjU7PGWKymwo9XXM2RAiHZPXV2ZKP6RDJX732xKYtVR9heLoAQXARWXEiypH4Whs19q",
  "key33": "55H1oQiZLxcbSpXKyNC43UTCUn4H1yQibmPBK6W61S8qAb4pBzrMmdRM198RxijPXHvgZ8KFbBSupSA8Ku2jUB9g",
  "key34": "4e5ouWkT7j84cnpqxDkohtP9cBSKcE9YvpAMzSvBCenHdFxDZLppwtpxq51CGkj9HDxbKZrShVySpeQEsCk26HEd",
  "key35": "2xTNXBT335f9swqnKAHLXV4rY4eksyxNUk6E1ArJMcr8mGKvMNegmeMDbFjR7BYq74RcG3XwyeASGjgvqMnvTqbh",
  "key36": "3CBRXcKg1EW2q6KfomG3G9SF22CKkf1SYFr6DQ8trxbwUiXg3enk9L872guwjtXf5A65yV8GDd2gFpfSXECRCAeA",
  "key37": "37RgSvUBBf5P4kA38VFNWEDgk8btbE8QgpkBy9USbjhnoo9YhTjsYVcZLVkvbZ7UeqAZAv3xeGfphJR6b3ZrXHzo",
  "key38": "56i6NyXnFQ4JYXvNog6W7inmbvXv4QijCP7VhixqcYDdURto5xEnvwAqVosTer7QbsB3gZLtoRdSBaSCL28khkwn",
  "key39": "5cjLYST9BQzSXN2ivXBqFHfNZpqqidBipgXgMaSut9TogKGCYgX9uj9hBNLJs2uidPXv7gwoRnjtwZ83FMRECUzQ"
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
