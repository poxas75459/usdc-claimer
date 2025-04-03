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
    "5j7y1vJnzQcnKSiguo2SNdWMkeWbF2ZfZ71k1RzNPYT1HAKmDAnjoR82ckH2Vzfg8TA2JFJFZ5fnUsXaBXXgt2tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WmapANTJ8kXjpWAdPW4LxjaU5i4NmvKHPcLNeh2PdwbwbF8RjZM5GBmfUhYXCjww2icuDWUHEJYAWCkDSUJKw5W",
  "key1": "4Urv4xQKpzJiCSfqsB2ZEbRy21avWELtoXA3vZFSZViT1s4EGx1Cv1YttoF1xDJvVmYfCRpKLwz6YNp9nEY6bEvK",
  "key2": "48Ud1BoTp3encvUP1XjK3ceCrq6x4yuKFRDbPmc3p52sVfUJPxVa21HSr6pSH9TXK8Wi3HmoAq63nxpTdLGRgvNH",
  "key3": "5Q7HFHgwGA3zfhrhj6KZoc2Lep4mxFJAqCEcCvAH97wGrx6BxrSrUPFCCXhFbBmQVomnv6xruwJCayC1Po6dbAZv",
  "key4": "3TFVRMCsq5YBBemTgob7TvJts7jDKYvjaQAaTZ7ypwggGMXen1mECSZhfegtHFzyiFfkgSsFXBV7jiVgcoPrMaKJ",
  "key5": "5Fix6FXbSvqUGkeqf7TELgpEw1WKP2ZZ5LjrFi76nTqEaqEtLdpoQHWHsS4tBrkq9A54N9J8VCP2RPsAJeTZPVT8",
  "key6": "4iL3b37UhuCPWpHUdVsvrHbT18R7z39nTaZnht1HnP8AiNsFtw3gWD5vxnNmRMTkoaBvLoBLii52uZ3FNs9iuSaA",
  "key7": "3Mi8QMRWom3FzHaNSU2aDqRj917vyMv2pP2i3PYHC128mKAkAeh39KjEM6dR3a4HCuvDLRwUTmB5rRmbwodVWw1A",
  "key8": "3HGkoMDSASXPTb9ZQzPTQaKuys8LETw2uqAp3wPwYczTEFE4VBVDaK6yhS8dn5H1ctkcxTyc52cGXoYb5S6XdUoB",
  "key9": "2NW8gCLQmgSJbkJnYVi8uPVsRX32idspekyGyu6vbCqKNB6wB6vf2ZLTHd8t8acM7NPwVeT55GfzyL7fr6an19PW",
  "key10": "DU2BpPKFkKzt7Z1KZCM8ZJdMLXfi5yj7hPYvweSHGoyyNAonQWmUwZN3sTade5DwEdwQcv8FYp124CBFz3ZQwWf",
  "key11": "5JfmBW6kk6jzk8fn59VXqGHcjc2RTaCeLkQ5SCbjw6FeWe7vAKQ249GZDxwP4HYxqdmeJDBL6oo2KcqwNL4zcXdW",
  "key12": "2wbxSrzrVaLzLFcqm5WsBv9tb2inopCAXiG9WA2ZJUamPXv8L5NVGhooaQm597P3v7xg4nY8t2r91dLbtc3c2tS",
  "key13": "2byNNSbV896PbxHcazvopKg75rBsiwfxvLR6Kx9uL7hfsSHx7A7TxaCwtbYmqSh7exQpET1kJtE5fnK43JZvfVx",
  "key14": "3zkw7acxiKJDuEgAW59B7MBcvccsSf51VPwkVaALnggsdTELjZvAcdJYgEkiADFoJiHwutpQGQDgmB8q73orU6co",
  "key15": "6GbPej6JEwSYGtZTT5uDVnjJc1ETUTkgUNg64wX6L9KK6VD2S5cXMhZjhijcfHqJKe1Kb35gUykjGiiC1m76d1A",
  "key16": "3CFMFsg479CYfZfWbsV586rDa3iJ3R1qXhJxXLzxfzuWFDaWJoB2ZXuigzxJyWQiGZjcHDLZcQekHonyon2wFdei",
  "key17": "Xe4JKugrVRePWQAXMMGVM4MvwMfnV7YfFcGLN2DsQFnP64oJEpRZDSbPGZPSyhFVNg8144Kcor5UGnZvFqKh6yv",
  "key18": "5B9ySdKet9BccpZ33nLBbi2TkEDJmxrYLkssBZ5tBwf3AfWXAc2zPj3FJWuP2qaP2p5MYxikVria11ZApduNQfGn",
  "key19": "51LANzJP3GXib1BNGQWhvuEtTY87wUVfH19PvoUNPJFwNehkhAzT7gPoXN3Ch3arMwKNgKD5YUxTuxuFuqwNgKWU",
  "key20": "um8g15UMv9ths6G4Y2sq2H7yESgT7zVsnkae1M159DTnEMwAUhC5J8V8N3fxgKW9SxCpGzL3awMcobSoTk4Mp46",
  "key21": "5LTHhQ7R8DAMcKuU3yK9affvkpWkuocnhWRkbQn7w7UY298XLzSAkuVn92MsyGJVSupNwHFXinYqA8Vv71cWnAKz",
  "key22": "5XiTbPRGoYiwFWsH2GMzGK4wgKprEf3wyEPEgP7cN7wJCxJcmbjFxPa62nc8jFg7an66NkM3ueuJ4NRoyoSPGHFu",
  "key23": "4xoym91YRPHraKw6eiSWNBVpsFxAvkgh5znBeVdmKvPXrPUsLA2XSfnPeSS4qo8TTqjs8EqyUnx6ScnM2vYzmTEk",
  "key24": "4eK1nWUogHPUGc6DU7JqRTjpEMWGfjwy6wUyj4eN2YFFT5mVF4kea3au9nuUbyS61ChJVAaWDoaENkuwCe8cR7nv",
  "key25": "66ZrqWBuKo4WqKy1V1y5QbuztUFsXrZbSfmAbp7C9qENw5N8HzJyt55hF15QY3eoGrr6b36Qp8xZaD2tEWYuPjym",
  "key26": "2BebB7BCdFfpBXHniSVGgfgWWmgqGizyRH5m4aJQdKBiphwCjmvRzVbjXj75udCqGaSym1tBoujHx2C6mDvyXY6",
  "key27": "2vAFyYHLGuxoRuFsE3MP83o4aTLiK6qV2X7ncB9iF9FSEn4gx8x5NXU2eK7N6VequEhmd9VgCWhpxH2gYczeg1ft",
  "key28": "AKmirjqxVPN83vgMKyF4mGQEPd4HjLrW3iiCxfk4fpSZEJspv1e3y7QkfCnTaxNL8hPLdH5JXTyoG6txfpnA9tj",
  "key29": "4ZFhov3Y5ue9pEtC9UguZBWNpYwfF4xru2SrpSqMiGV2DBB4NPFsuUzoG1kqxC8121YNQcQMEkvkgopcmBVRJXps",
  "key30": "4q9GshGwj4H3kLSvQvCYVPTY2kXfGC6xyhKFPGNtnCMcKbBF1Gnbh2hVM1ETzvrxWTS4zHf3FYDxVpm3Jq3MAqGg",
  "key31": "66nHhLcYf6hVDjd9rcVJN9oU9AJv38JMeTfofL8Qhh1xsAhJb6v5ck8UBnx5UJxVUBST1XqrL2eqMW8e3i1G6oWS",
  "key32": "24boz1PMuiJPvNCS3t9FsTyNgCTBDaqfjCbG9CEPrQj1dFnezVFYB7qcRhzZaf1a6xoPobu4fR96kzs2E4G2dAfN",
  "key33": "5ke7vEpDJ4yLHttJLC5TecbnUSFKSvzPp64ksRZhEi4yuJrQAQhD96BGA3W7g8cusjB5oueNqtLwPynpFBBHCpT3",
  "key34": "3sXriwcu4PcFEY6jyXDUh6WrZ7UioA81MdKhnjA7912mmdYEGFWcBVRguMqdzwV7kwYyctBeBFRSc9Uxk1KkPNCj",
  "key35": "49CsRxZfKKNRxMU8UBTN9aeSMiRr6kG5fjd1abHsQeYSKKubt4iXYwUHFk9UztobjsZL3kkxdDxHcCuJDYKm6S7h",
  "key36": "di53nvHXxnvxjP1YijvL88MTFoL6FHzV3NhCdGP8sRnnzxjm4d84MY5WGqNczFgtPF829CGbHhoTM5RNuMagwgT"
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
