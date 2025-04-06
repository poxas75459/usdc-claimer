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
    "27iaLU7mo4i4etRWeSnWDyQCNi1g6a45mWP7wY8MEWak6NScxrTsDaghSzNJjnwEmNHn9V3CQajeULdQDFgXv6EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m6gpV6vaQr8KfQqAuSKUuUfcqeDe8XvcxuiPVKrPfG8MnwsKMavdCLeBj49iDFptJrh1QQnzHmZwKhPRSXj4b4k",
  "key1": "285Vv1TS6bJRirDufUASr5AUWMEzUhNPiECdcJsWVmcdPV6CwtdXWGS4JiJpGFxTUgvF1WoSXL7HwRiGK2RiUzZk",
  "key2": "3CxMSxtnQRteEjEGBBoGnHE3RgPkbgAkU7yRYthpsMwnT4Dk8EdNrcdg4qjF4bUGUmZme7MgvmazNBK725u5pvJj",
  "key3": "3ie84yQLnCcWrYXPMZsaVoR979vyxMCzV8XY8Tg1DzA5t4WGafmGJLgnsGvKuQa24o24mbaXZNtKEVUGZLwgnEz8",
  "key4": "2RFmeCURBwHYucQEzUiHkFs5LjeAGza7orRa8P4Yfgw189iqz8bxjpD9okHbcbnSSSpMb5Q5V4ZXQ9YXanB7g4Hc",
  "key5": "Ucknh1vi5sCdfggPXgg6gKBz9iqt7E5XLu1mkczZbdt87wUSro6YmxqLhWtWbzYT7PSLVFVpbHnsPkX7jov1ifT",
  "key6": "3iBnWDLRp693gbhEzhDoMQmLdp8tERoyrBBa7gkgPi4qeiZuZEr7hKoU3ARm9GmuCVhVVwjxhhQnAYpWuFM2BAtW",
  "key7": "54SL5VoMqw9FxL4Kk7gSDqprtSgNwaxRZjryJxAhugakCrCBM4FjGqGeCyGu5FU3gTzksyGMmQQDm7YanBXhQJwj",
  "key8": "2dR5ctdhQN2AoYMH7oJMEvZ2KKwamZxDsMkmGJ6aPYkvJVULog2AyWA4SLgKuqRu1PvGG4r8Dt1dQDprkYF5U5m4",
  "key9": "5T9rP7v93h8sewU5Z6RaNWkXHEt8sYFt5drxYJG6KjafACwVXD1QQaGtXyj9hchxY7gg7ciivf6Eg8zvhzYXM7Bu",
  "key10": "rVSqyDjt67aZ4riTD9EhjP8vxjWmrGNPMi1zrK2WDoSJNtB8RmKabNrgKwr8jUssFiNtNoXtZdJebANbQDdGhJF",
  "key11": "4xTFKtw9ZvJJdcDfn8oQL7KkM7WvR4F4JEFCQHT6qASaPv3ouDWbz6jZE6KvkNWEV7H3qHBGmEsQz6NKBjut8ThQ",
  "key12": "3Xs6YVo5kWAD7W5HHcQLFNfWKvjYq9pqhy5MgmsEGMdvLvUHyoHSyifTVC7As78F57VvwKUf6mwdjNwF8nCuUqde",
  "key13": "5TPntCDsESkFbd5pWNvUwAtHsbevN3j3wJ74MMfhtRKHfRu5iitpqJ3zLEXpGmkKmPSh5zPE9dFVxo5K7kaKRQMH",
  "key14": "26YU6qLpmZFamJL7UPcTRMGyPoeGuPhHhpWxLy5VZRSpjqDwjGUjXDVtV3jwZ1T8hg7fKrAZN14Pa91PNzdS4uqw",
  "key15": "4mAXC6DPPiNZTeoHVzwrNGR6NMw5wKMK7CVJXFvQTybyarq6GFBaAcVUJEeCY6VSUBLcXLXPp2s1JqeaXgy6F6zF",
  "key16": "3dn81DJ9RnSA5EKhk1AwaTPSmaFUJdkN4Ze1KwCmGmATvo6B8PmoLrSBozejsh3R4GGf2d1rMwK6oMzN2VhsXzEK",
  "key17": "2w5wQSQSZhdfUwuBoNHp5AXDT4bgviwX6KTfi95ZNYdZT9dmmsppqCu6Ywrq4wwv3KjJyQqYRjwFBQYpWvPu4SVV",
  "key18": "5Kis64AUpCsWFNsf1mb169cXPnUqrA1NJgD1aW6A8pwaMce8A75wubwW2gjZPjz1uHmxh2jk8WKSo59JVyR3sSmz",
  "key19": "5bRR4BEXUcK1Cp7xHWiQ6mxsQ8acii6jxsXYpNknbnWhboqNvvviHwzN3zpXTBTAU589Q6v42pkGSr6Rbq9EXacX",
  "key20": "2pRjFUFwsWWVZGKofNGgDhNMftTrMF3WhZeXrssMuvWemLdZaDydKBzZoedJtrQF4Sn4aShE9XFmZH4eX2HykSQk",
  "key21": "49Bwz2tFFravEXTNxHsKXTuwM5TEyBkUHYcd5X6KAMWzwyG4XjsfP8xNbH5P2pY1r3vbRnDjxciZxCToYFRn5yTv",
  "key22": "22iLfs8zbtqeht5wrXELMxPAtrR7SoxtNWG96brqGm2M7CtArJDm8TVopvk9A4kL2GTbJaJ49G157eTLUCK5tNMy",
  "key23": "4jqb1xXUnTkMojf43Gta62aYQT3nZvx3sLZbrZGtsmMk7XzEwKLxoJaZuczETZPijSF2tvFJdWjTxDWQZqYGGaVi",
  "key24": "5G3mWzykzLNebKV1hf2fusTgkmXxQ7YNDaj8k9NpiuSPTqbBTGmDevYjNc4oSUeqpNP13AFdjXW2D7tBWdG8owV8",
  "key25": "5bcHx2maimzpYazdeNUMxagMV6sDZyJAgzviY3iHpNBWgZqLdKVGtmtMWVKzUiuuq15K16caMcrBDBb7Bv63EGEs",
  "key26": "26Esq93JMXmvCWnLVamc6ZSJDyeNqBHJ9TyTRbXbRYWvUtyR7kLDGMKD7Uz5BV5FaUcnKPRk3pg174eCYx54edsh",
  "key27": "4HNB2Ajb2Ygcqzm3BAgu83wZJaQmczfQ2DbRY4pQdeFDGHXMdQVMmqmRDqTtL1UhtxVrUA47QYaLbg9b6m2XtMPk",
  "key28": "4vAxz7HsYCTEXfNWy6eZBwMeWWkscEeSGPvcdroWqykfy6t51u22J3Lzi9f6DALMMJeV1rBMSvBhbWnhcJnYCG8H",
  "key29": "3Xb7T31EBmLkhUiStYHTSpCWsUD4rQcCev3KaPDdb4EeCVC6FGGrva33W7xxKK3NcZUmNs33Fgdb9vGScnC3HmPP",
  "key30": "2KKVAu5kdx2kFTKsSEDd2g3mQuwG9ReywJzRScg6jzowGigLGKFWEm5f4hinxzJfnjSD8pE997vnvbM29kADd8Ka",
  "key31": "4wTX6EqaqWS1wU8mxnTHXrGKrSTB8iz8vHfs5YffsxQPybHUgULv75KJXL6JQ5WCcMG8v5tiG8JueavYQPndWds4",
  "key32": "3inCkfNfegr3Rch1NeUajEZQyiSQgncnA8ZG9pKzsSXQaKQMoZ6pNE7tjVLzuebDGVkSNodBMrjSukWD4vxE3k8A",
  "key33": "2zzsbT7fL2YJ3bsEEcE5kkTVXp2RDfekK2RQY9gczjHSsUgHs2dQTyadpG5h6pcgLgiPJEwbgV1RRFumxuYx2u5w",
  "key34": "4zPvVKFiQJBLSYieFsE3yRcrGkfbUrggwRS3KepavS7RhxCXBpGGUd3DomVyEczmeaKxPuontfCDTMPHCMJM81Md",
  "key35": "jMYLP1uu4JrRWZudW1dUi3u6XGuiaCpj28SBSdLVN1WTCAgjPrJNFvTqxV2Aj81ie4E9ayYqGKBkaiM1aLezFvo",
  "key36": "5ZBtXB8AAiLg1UPEQ42d6KWVYp9fkHTWa97C7oXuLsEwZ8RxvFgMJzjtwYjJX6AQq4VWZJdEUmfxhfK9XmNDTkd",
  "key37": "q9aAVyNMoE1VExQT87gBzrpgMkAUYbUCTYSu8fRF3x7antv1saGhUbP7yNu4b94XGXi5uaqDFaC2AKjXduuaL9Y",
  "key38": "5Ee6cJNtF6XfLVwZ3fgV7moiQKXQcdeHhZJkQabDh2G8A4AnCREGkQF7CkU7sYtYhcxcJNf6e9PpWGuUirLP4isV",
  "key39": "k66RFxrJciEQk1tuPFz9FFK5TXL2i3tBE84m55gRH8Lzq3qZQAsJWzPs3CHKYZa8Y8pWniCZuGbreRpV2xu7te8"
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
