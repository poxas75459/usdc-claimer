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
    "4BnWo6TMaUN6QBciVixydRahxjLACdSipGcLKYsujsbPwbmRKyAT9jHn9w1gMZsE1TxhkAK4QLUd8NXuNrniCSeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XYu21JSLcmMF2XmAruKtGFFRw2i41mV1JZDHxgeEoQFaKRibYHFhvTK9UNLHrSbWDhoLrzEAQS89vVbwfuJbMF3",
  "key1": "4bCW7BAi2ikLDC6XrBGUKtEZs7kYSycFfACkQkJRdvCzXvyJeGFAnTtuKAj2ACaQ3Ek5ihQiNjwEZmCii8JKJ81S",
  "key2": "5qx3bCsYNfwbfHp2dhNEZiWgESwASP7AfeEEH75d9hJjjZ5b3HCYv8WDguKQXKfsy6e3byJxhFmM68CZADZJVBQw",
  "key3": "2ZAp4zyRJDZRLCZAcCkifbHbAvMSxgf9eRDWyArCJa1VCbiFM2EgnTvdYXSXyWV3SsQSssGVnDkBEeSZamW1h6NY",
  "key4": "4szqr4HMprheGCu5U1pLWzW4kpmcTGANXxCaDjWifuxAs7ZS1J3qjZDce6V7ueWnvddi9MVEZvarpqyHhATmLkpD",
  "key5": "5uAmmwfDYuFyhZ6q4qNMiJVLddUmQnhoBwAAA8su9ZnMVvmsbW1MEoxW65pi9yodhGswKV7X76yN4dzfmkd69aJN",
  "key6": "dUFcdgnL8RZperjvZU3tZQNrb4e6B3MRPJRj1fCLvUfAvFCsqNFW7WQMiM5tWuPn4DcadJg7sVrt3XyjDCSnEXz",
  "key7": "UEASVf1aeNBddCV9deZ81G6QEdQHFQyXvjDAx2714Xhd37gqioSZoAzVYS97mVmS4eaSF3GjyqxCAUnPspWV9kW",
  "key8": "2QjduJLCPGda24yCyoid8HNheAJ9HiPN2BETDjscyrfDFFhjZvGvsMNnsZD8tkefyNv2sHxtFH7u42VaW2mfMy7n",
  "key9": "4c7pY5JEEQ4f2eCSvK5EdUkMFnEjQDrbtoq6J5YmdQnRNiVfLKmkfizGaoE7KF3wDsF5rLPBmS3WN3nEzzwxdp2X",
  "key10": "3s76CsH1nErnjybpjyBfqGbBoVGrt2cN7x36vsCdh8hdndQan4J3Dy7WwRFoJbxri6FP6dUn2XvSzdg2d8SNj3J3",
  "key11": "46wXuxV5EUdFfikgtedYv7rMvB1UhacsaZWNfUdwS16hydsUYsvSBxRtPyXaYXvt4DhPBvz6dKC97jzvrZNeBfVr",
  "key12": "4N7G45qAkKYuPJiH6tcMKe9ELUBtaaEivgf8Ep9cwgWaVvzGtmjiRYFYDxFv4F5diUzRrPA5ikakiemF2nVqWCH3",
  "key13": "532XJcPZDwzi8zs8CS8cnJzJ9fY39Uk3JRjHXN9uX5JTxvnRzRtLJsoZXxN2yAFs7f3t3z2DFDtaHMcYYDZJTNcY",
  "key14": "3ty4LfpMseNVwzUFehFPsief2nWLndEt3Si5kgj8DNnPCvYZhkKvcddhVBpWC92WhPATZuWw6Uki2CCNb4LYZV2p",
  "key15": "2NiGm4e79p5YwF6CBrYwpjQZg3JJkQRssLBsGjNtTZSJ65nutx2ACFj93sedzQ31FX7Uyj9M2ErRaGzrY8cQtCGe",
  "key16": "3pdK6Lb6dnXXgxbznPpuWzWgzJrrWE8NrdsDNSesSHaYPgJHqgeZqMibRFmHwufdYjKqTyk37QMQWuN1S383NKqd",
  "key17": "oAh9Z718jZenQrMtkneRCLK86nkkH1o4f39TKs7XJXa5pMobSpEhCQ8r2NdWSxktSoypirr5F4yrMYeYFxufNs4",
  "key18": "2D2uMQMKi3adXiKSmSgk7yndFZcTYki3yMNzYfyLgTScCTLERp49bzARjVkSXh84j1en3iRmiKzkkrXk5E6BUgx6",
  "key19": "5aCQ2Bh7QSbijgJ5T7XErn4ZftnskJZVm3V9uJPJLCe7RYRbZXWHtbaA3mTkLVBcnGeZu81WiPNHz3khnVmwYrq5",
  "key20": "3hZumyVbEgZCBVNjgcpEkiSYST2VS6hwUG9zdFrVCUKQDfNatqjEKJdhiKs2wrPZLmmXRDyNspagtqDmy9dvJ5m6",
  "key21": "2RRFHTKnKspZJCRc2qmaDyrZvodtPBKe5rcHfXyk7uh2NNvMj5aHvmzGjTw3yKNhQFkR8RhiPXL1ZitPen7m8P87",
  "key22": "31fK9eTU93ixuFPPuAMZt1ELtbnazPVFgacX1Dyh1XCku17wvop9iYSGFeZMqNniXYBv1GEobFd8CLebUQ7HjYrL",
  "key23": "4sz6LTyaG2CGG6oWXg8yMAa3G5TT82s7aS55JFeV7XdusVYZDzW6sKUrBg132HCWx718r9XP7e1UASk2PPNs26sZ",
  "key24": "32couDewBfWWYiR3BWib16htHNPMjmBy3zVugKppFctkRUk5K8e6RpEZk1vDofiDEtEgpnQmX6sPQMqHsVDfU46K",
  "key25": "4EdtNJ9LDgjpu91yaiUsbB5GrgH5Ga1w1ZrsuDDokgifczEqYoY39AYSnRXmTmBBz9R789WWSQtqmf9UnzcAWo8S",
  "key26": "3NqUftdSiBNBHq7Ab7dTcTMYAb1JcjC7ARJPVadpFxuSFakATAPfBoRgaYXyNu1jygCrdrwLhSAmqc9NvKRwGrSt",
  "key27": "doZ5DTDHoKrb8RrE588g7kZ12hHAjUvDyriQxiEe2WxP8BSG9njAf3GZkE2hHai92trPAgjJBeBgbe7q2twQ2X2"
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
