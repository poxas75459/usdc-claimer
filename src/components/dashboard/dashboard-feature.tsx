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
    "3CFG5PeVyhQQWjLu6yJBuaHAY1h2nzAQkyRHdpZ8TobYx9JAv5GVE2UyoosZBg7UumP9125iRksbXcAbgBSNEhvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5svBPZFEGpPyvNXgTDCFWR12Wmifa4BUy39HD4dP3NswpejDtNwKjGAmXQKNWbPNsMj93XbxFbf3YP4CzDYeArUw",
  "key1": "4LKvaSz3o8U9zcd4m4ykQTVMogHMPgAzdmLFNbdGXyASvi1cyVH6Dzxp1pZibJfU6rBpZwKR9vVQdiaNLPKnH67v",
  "key2": "5Cz8maLz1Wma6tLFrxCRCZUUL6mivpx8EEbjLyeowiXtq4hz238RqxSxBYre6WNDBPFq8hxBzVCnqY61yGdsZ2i7",
  "key3": "PgEa76M5sTHp2Gy9RtqdsSrPJePaZ6qtco9hTVnqLRemszH8FmfvJZycG1kULykW5t48Q4h41DHo7VAeTkznbSC",
  "key4": "5EKw6pb7pDiyq6YuWXfHkw2jqfEXRiF2UaJHzhhoQ98iqsuEUtDkDNxSqFGMXFeC6U21DC9cLQimXAvbGZH3kaFd",
  "key5": "Pfkw9TbQHBcEkyahQsVUxizQi319p27NdJNFHRnHczzJWkyBz6bg6bh7rFnLPbCUSXFjoUgxSDKUvtXqpYsmV9x",
  "key6": "55XNTBwhGi2CK7NHwcqv5kY5C2DtwSYKM1LXugfa8bxBFHHhCvbAfCJwMCsLArVGZBxB9RQXFRJoccfsRhLRjdwy",
  "key7": "7Q55cANqHzZR1nu4DNWHat8qRguvhpKC7YH8hjzPo6jVyZuQVVcDTvvXhkEosBWpF71yBMCknWxw4D3BQ7AzD4m",
  "key8": "5DtdaXdhcvBMTx5LqBZkhmGNCdURYUpthUSbiTHBGZVHW4Rnm1tgVJrgyKt1XnbtvVgGponhkz2McNoxbbStHSNx",
  "key9": "2ynnkVdZnd73JxDzrEnFQwnUdwxBJTFugQw7tWP1VgomC7aAaFhmnZBzeL8oMmsbdgQd61Jj6ptDXXs6WwwAPddx",
  "key10": "2NJtod9FLyMGMFS1cn1khknk9hWmE7n4ArMpmNX1i5MXG2Dr4JqjhpJUZHsQz2F7DZghNwxja5Ax3QfXoGPP5peP",
  "key11": "5eQ3BL3FtgKqiorT3XRxG5mbyh73CVnXw1CMrNv98eVqViGM5nEkK27rcusZfX1wMgmWrM2xntwsXJT3Xv8KQCiR",
  "key12": "sE7izcBtqNuR2BFYHF1XLNP3CVd27Rygc7A5HXa4XfQBxdQY6bM65mvapr7kmrUbnzSTqWqC7J8X8ojYbmZpaas",
  "key13": "oXi97GsvtEpjBkgcB31MuzJHY7VmxMJzLkmeWbq3Ac8cRPojCXTymShqtaW44R3xQpFZHpdDBQJfrgw1UQR45Av",
  "key14": "gSjVH9AUPGZQ6foZFvZPoeQC1tA85DtQTfMrUQv3kvGdUp3V88oZcSwJApNKd9XKBoQEim75JjEuujK7T41WFwX",
  "key15": "4yAR6XfWs8iXBfwgedWJsBnDTkhkiHGT2XFqtk4bTxkRQZPD7x8pnC6SCx2eTFVnJtnziNZpBc1BosMU9vs79vi",
  "key16": "UrDB7G2YWvn7XB6GDPeZTV94V1XPqR9GGn36aFpy1uTGMYzw9bmC6TDQjzQe1CETLaLM6xdpPqTmqye8MzVBEsS",
  "key17": "5dorBCeDL9w12hcCgwvEBDn5XXyu5LM9fEbzXu2F9MMWZQ7xhSTKeFkxmy5XDkwPQZvmzPfxzt6d3mdugg3AJiC8",
  "key18": "yX5T3yYnDukRsZjF8evNtEFpEEwkbe1759gsFchPSF4G2AAoQWK7raD4HHU5nhsjZwzzrZpdtXRfPGSqb8jFvL7",
  "key19": "4YUd752dEspRDsd47nsURn8c99wndNKJmteiqXfxpnqXdi6F8eDvhwJ8jyZJGsBzS7ZPzm6kpv9QEPEdrMtQtN1p",
  "key20": "2y69HeFJcTXPVDY1JpdWK3KwoJ4n5RgF5JTQgAYAx8uPapoewFZd8Gzdb68wcMJbmdnzTYhmsRSrzTq761dJaUdd",
  "key21": "3ubmYn2P1KiW36vyG4RwXifgewsPpteeNX2NVeMntNGVyeXV4QovswptY6cHnAN1mc6srfjMqxu5oiDfg7aiYYgW",
  "key22": "2x7gyvAVP3JK6c5udqtyKqEoztfXmxDDzba2uDcs4d9DWB76Ar13Jzjk1bLXgSnFzLwMUY2XvmkpoybZuqXYVTav",
  "key23": "572dd1Ywy6G4HzDSdwDw1vgE1FixuACjTwvk2Kzev45uvpEvZEaTMNTu4MpCqP6grhTUEkMpaibThXv9ZEg3zTeJ",
  "key24": "2tg9MEzin54BV65RAGqasFBs1QJqnpE2KV8ALxVF1P8qFUD4eL5gCWnLVbuzGhwD8awz1s2fJa4JyvejdFXcm7eQ",
  "key25": "5zDKcpWQ7ujQdSgxcgstPhNNfUSJxxzS8pGTFdjkp9GBvhyvPMuqL9SVxFDAi8yeVtS3zGGR2UVH1rpm7DyhoSoj",
  "key26": "41qfeYPYsp1Qaa4VuggVYgdo9N6voqJcx5G3MV5pLqo5f6CbVJiML6vSoqpRSMNzUHFaaW2drm9v4iryJ9YxcpiY",
  "key27": "4BdEbc5VqLTVKskUPXpe58aXRbz7AFzh1faZLAZCwvEpfee3VczongwECfAiDC6Dw17WtFknXYsKN9vGV4bWMu8t",
  "key28": "Zmgt2G3jMiKAd8rZZWpbstEJZ7Jsz8VKAynpCJFApZAE1LG1LXHJSLrwiQTUzLG7LFidd8fxLHsCqKDaLkw4yt2",
  "key29": "znmP2nfK7PxAV85w6CGkcEuZg9sihU52ZhmUcBmQhwWVfmvYQfTQdMPig7EFdmeJp14dCwqWC4HPkDU9Ysi3g73",
  "key30": "5nmz6GghC6MhsZT8RvXqgAq6dmx2txTqwMQN2xucowyMCvjy3BTszSsQaEfsXeXLR7YN5fHhmbzVGF6A7F7wNcUQ",
  "key31": "Xix9gJaNcPKR6yoatoDb7eydCngwXUb3U5zePMGncVfYfq7AzudX3PXsMxxGFVKnMtngjhCcKjRhdrb2pRiA5kt",
  "key32": "5ZYZG7ZR2hR76DnR4zY1CnePQxg44SKQi5NJZe5wxnAKLtP3Hg3AKLQyjqEYZbg5CuynUWKLAru2xfbpxv1FoGoL",
  "key33": "5EJbQUFz3UtPn6wgqUMyT8vAymuyxqrm4NMKN78cwqwiUGYeNMnteU14AN8e3DmbwsswHpX3Leey76oJaT2vvtUf"
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
