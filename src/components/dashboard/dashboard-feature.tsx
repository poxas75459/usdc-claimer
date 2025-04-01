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
    "dFspcSaurJAjrJju3u2fwcw3JV7MRHpW1ZkJAdpaCpvWPhbftQoU2V9YZr9PZXRFkwTvqYzYWAgM15GwibxuwAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7ePk9kKHQh17Sdurtkz1HeZFLz4jKQQv59DwkbbGnMWGEXutea6miP3He1urx98ZozXZgzXzPyNHEBa6Pf9av6",
  "key1": "5GmtGNHfawCmLuBjsHxbkF13KiDQ6fEVGQJt6eMJLhVk5we2aPxt4RvnUsbNM2csvAompvMeEYWGejbXyGGLio6J",
  "key2": "hiaBs46qdsSPSeqzdYBBzT3gboLf2czS17igjSAEJzxA8eqAjjLMXp3SAsj7VE2J361vHnKFbzyLapqAq6FBJDA",
  "key3": "5uT8ftwistxshpff7bDujbRjZuvKSiXGAcTiNTfYCjGxshfE81fXaaCySAy6XUHzGHfWnd3iZtn2Pp13qxy2x3aP",
  "key4": "4CFZ1e6gLYMjNqJoLQ2poz8VxScTyvstisZmPmGBLMQAjznxhaickjHyq5oQCApbiLGWsjyMME6FV8cTT3y9Sq8c",
  "key5": "i8q5KBWAAaqAWQmFeAm1dmrmUFtTbpKyJBsc5DJP9dsdygAKNQP6be2NDdq72gTSrNMae366DXFSdbSsQSaZ5Uk",
  "key6": "Wg3pGevNSfkQPXCKKNgBLMhVHedPLhvAxPobJffkA5HHKEz3J2MFTp8ZLp6kR1xocKy9GkKdfYihTS27L5oEEpp",
  "key7": "5fKjx6rEP2PQ5bBFZ6cjeRVqSYohTagUGBAE4GbnDE4tMVnw2TwAuGtEwHjGNejBpY15wZhURFWxBiaf8kQGfZQP",
  "key8": "3vFWVW5htivh1Lqt7rTo5h9sXheDExeZMPGAZEPStVEjhiJZTPhHfyyxSgYfQJL7MDEfKt22FvZnWfG8gehABa5a",
  "key9": "423aGu7kzUGRe35LXAGokYVUvH31mPL1HzFgTwNhsuXFpEuZ3WJTa1j2BeMunaCsduTCPVX2ddYBTbX6ggGoNPNj",
  "key10": "4wsbwfJUdy5b3vZfP7hikMkNagLQEUofQC7aTvqsFXMfSjRs7G7eMvTTun7mgpNZbo1r59SwEFPfzsn49iGUpTK2",
  "key11": "617LJeQS67c31TjLhpHmGUu3SxHCRbyZYo5sgPjmUCvQ852P98E845mF4iUaStxmjtfn13fnEjfUZr7AKDjJA7A",
  "key12": "5CpcAyHsXsvN8mwXrZAehaA7okShJEVmQw1PvaA4zQssTMbfhWWeeUjKvNLx8YfMQkvhXmM9KjrzovNyhNP3WzH6",
  "key13": "2TZ3bXzkyyjaahWbr1BRt9bLVMQu3beMdewWYDqFBAnnppt7yDPknjfMzbH4yf89idXVyZFcLA5qE4p1ifrMPoV2",
  "key14": "4w6PXshEijNkwtggtkGNKscvcYyc88JkrrETDuBnoaxmxrD18Us2EyKDi35t2WDhxjdCaKN1Jhxbs42zeuHBw7Y6",
  "key15": "4i3QADQLVktuwsxYMShL3RUGPCPq1LcGiVyYTq2W81sUMsoh5C8nMY2U6hYPgxZJQtZ3mZMNbfYte9V43DJFttSe",
  "key16": "hrT5GP3L3Nvjba5P2nX1n1zUr4488uPfNweGWVScmrG8Xoxb5Chmz8UXuhKkGaGoHsEqeqLWxr49QcrCMVAg9DY",
  "key17": "5RvR2A1Gwmy7FvP9bBR7WvLSpD8pcSgXZ4beGoeV3fYPVUoBrFtLwejQgHrycLnM8jXwi5o6ucatSqnCw3BeNCiV",
  "key18": "3aWYwuFwXkvwEXPMDC82jU5Evn9hmKTvVQup8b4jLXNJhqwNpsMZzrxu6RDXARQdyYGCvteTx565qArxW8hNw8Wr",
  "key19": "5XGj4R68ybxN6xHrQ1zqdMCvNhA3FnYPbrBWNr2tRY1f3XwfExPGbM3osb5EK5g3kdQv14RjfsukKJ7gGdUeejaS",
  "key20": "28FtFFoTy6T1fnVtta4PzUR7bjmSQpVTicA5qYWwvjP8xJZ2NXFy68NcGWsPuVbwu52B3TdWeVQNvqM6QKn4pBwk",
  "key21": "4x14Bki58cRG3uL7W9oAACRqtpxo2M93gNTWxSQr5Y9GBREXH3h8iTjPEtZ9XfQuGkZRh6Wx5jAr2kduNMg33S85",
  "key22": "5DdQswgs2gZz8xYPLfohujSetSzMreeYaAWChqnW4TpthanP8N4LcL8HNuRaSsySAFJtWxoYRCVoF7LSLZ84nfm6",
  "key23": "5HWVGnn8F7j39AXkAMwR9boNn7m2YMqnqVpTDeqD1ChSHXf2gJiYyMg6Ya9FkHsehdED6Ehk3VQbQCNJx5GXo5Fu",
  "key24": "2GSg3LjYxsAJgkph7KBQLDdVauzhFHMYsdvNa78jZeSTYAJ2hSfeGByk5cPybLJ6VAnQ7N8qPS1KeRKWKNbrJV1J",
  "key25": "2KFXEfRxEDoyJzGpujcJi2wBkuQq6tqNfYBj22Cbetj6bpH1yhcZA3oWSo5qCWCVXbmeuYWvTE5e8HCSvv7w1tKT",
  "key26": "4Jvq6fgg7R1kj64pbwUJsVZmbC78ZhJj4pxDqwKaeCwgrKCPbpatyfum8b6DuCTxgd7hUvfn5m5sd3tVQqyLtk2",
  "key27": "4hs7Bz8gcBSEfiydp1w3F26wE9zcUzxBSsjvw1FRTGe3qwyzbuRibUueuGbvwaVwEGHFRqnKZdAG7r3HgJAofTDc",
  "key28": "2kqT1XRBPad3pE5sEqPqxQVwxMaaQkCCjyuPewvhsVEUxkedRuxXQ2wqCG7P8n3excN2q4wNEXCsfVxJdEeMjA7j",
  "key29": "4AmUR53sZX2ZjBHD4FrzexTJ3ku3kHeU5LKhuzwRgJsLuzdnoqFzoWXgsbdirzV8hgFcyURQWC68uZPq6nLsPtcV",
  "key30": "x5MupyLuHqc7PgRfS44weXNm44SCdrdFsumsB1XpUWf7G6uoT7SCK5Ec2rCdNFH1UDjmNiJKDLerUEDR2aeyw6P"
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
