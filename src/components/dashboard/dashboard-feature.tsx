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
    "4MfisSuq5Lcb5fCsPTCF6R4t2ztYJrGuefGhWzKuJL6osQcRczydCGLLUyvGcFxbJdnheupLbf4Qk4mXHRBHVu8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtmmvfKVo1DakXfng5MEPSgHB4Z32XxMy4H3UXXJFfdcNof366CwCrBwPvL9ahjvyt9HDvUSHut9mxuqAJo4Dpw",
  "key1": "66Vgg82LnNV26KjFtcUVXGx7Tw9QwCmZb4TBjRqwZGDBm22nshu3dhEVTvub3QWs4V1paTPCo9sWZEfVT8p2G2Pr",
  "key2": "5p4xPsJDwMKgLNtJZedmM3U3WMJ2b1oVJ7mWhA4SNBFSE2aRPdLUB15GehrDkt2gVteoW6kMTCkNNzdthmpeD7Rj",
  "key3": "2vpoHqfUWWGEpceYkhEmgRcmmMmfY7WDQeW2LsK8s1HeXdXMAEvtXvikkzvtaGmLMw5Hty7rkQSjkReDjdPxmxhD",
  "key4": "rzpotruVQ1MDUgBrjMcESWEFBuqk7H9pCPiDhz415DZ5CkmLiaH3Cx3JU1xByVtHkPXcJrbFMQUdpQq3mQ2Umuv",
  "key5": "2wNRdPCfLSRHXpR9i5ptfEgMiTDKHrQTuk7uLz2qgzrgSngZPYsify2KDptozbjAVuwGvTbAFc3wXFgJo1oXPeoi",
  "key6": "KcgBS6R6TAYBYcqVMdM7RWT9gLetJwJFMmwEg6xL8HQ8hYLY8NUK3cJTe9tMT2QoChJy1Cgg74mYpbeTWCBWVaC",
  "key7": "4DeZBEaPeCUpzX1cLGfx9hC2gS1BBKiLmaeTQg3Amr76NawiLg83vDo6mryLHFKfFVV9x28si2g2zjqHa3m7CCGt",
  "key8": "3vKgCKHXRpF4fE84utJ6jYzwSnamgyu8n78hiqonzEZ7XVYtHETasFuBHtS5SjhtUDxuj7kgVXWtGGujL2NvAMtU",
  "key9": "4DnALqc4NL6E3aDzigDKP6rfnaYPGoFz1GVjCQX4NebDFeei8RAwnrHQRLhnndENhTdVVc2PnVtidEDuYqnPgbdW",
  "key10": "4RkNpSmFMd5J3tkpZWCn4ZRsNDvS3z5AbmKRtKG7Z2Uajpr2qDLpVA7EZidPMwHrgkzNs3nuizw8nQpCuTGwgVJ4",
  "key11": "3nMbh9mF4KJAYp2Gu6YAyM2aUpCrWDrVabv94aVWBDuY3bGvkco8B6onzxCXSnsP2j12J7PnT6fjv7wCj1QgR8Mg",
  "key12": "5eSVrU6NSuVEUG27D1NDhMP67aFY16pKS2ZBoXLvkoWA5aM3t2RVdzYkQm7BFtsR9q2B3h8R98keHojkGHck1FxM",
  "key13": "4GnqpugVdm9wTr3kKz45gvnsTwSpJmZiyqtLCnTLRjuAva5w2HzL3WuoWiHe561XQYZXoknC1vdCrKUs4MvfkttB",
  "key14": "4WoGVw7RYiLztSR3Wnc8xorP3ZwcT6mtMRbUiKCyvs4mUaeM1ASCyU1UpsfgYZaHVjY3CqNikrTQatiXAE2fnA8",
  "key15": "22Nvma6exNadiwrMK9D4qSkxGFXToiMxy7uJ3PJr4L3ZDm7yFR7UBsSkKHFsPwv7d4n9WL93vk2xkiyVGEs1Fpr3",
  "key16": "4gZYzQDju2sMVjoDx2mPARrMTNnVKuFS78LviZyzieR41QeGQ4gZHQCvQx5SY5ueaVMpJEiUDsz55vNWZ5r9J4Qa",
  "key17": "2h7avArpmaxT8x9x6cFpoXT3TyLkbhBJqY5or7ZNEK4xTeuwuhfob4P8Y45TMd6VKuznK9fpYGu9p5JnxvE5Wgm1",
  "key18": "2eMT8zsp2wvV9h9Frjo9Ngna2jF7nsxGLjGiYZup6NWxci7C8K2TdpveF3N1s3BWKTvQzsVmRC8d2cAC9b6MkupY",
  "key19": "2erYEaoGQM785gaJ2boT1V3zE6W91ADs55Hzn8UuUuTXLEPwMVaNC8pmHhQ1Mb8nHV5kMDmKJCDEi8L5ZWa5kQvb",
  "key20": "ejE86pZhURRFErdrRazbeSQ3rYBaDe8Jvga8ZxcD2eavYwsy2cLxDC9bNzZxNtY9cF7iNwDvMbn5rxR7y6Efs4T",
  "key21": "3DJ8j1yPfhjo4aFP6cJLhUjtGSH1y2SFXj9pQsK3fumkPDEMSEPRzmCtz1GBVdaR1F8fhEuCVrkDJexhSQhm9pSX",
  "key22": "5vUZj2xV3ZungThcqBFiGxN6QpjFVV8vnJnaDETryiYassaaEDDoSmzcNhDQZsYKSkJYfTgVnHyMbfTb89XWze5J",
  "key23": "5fs3cM4mvREXBKr4NP9PkGnkS2bcpgE4KT2oq9wxFFJHZoLLqFzJBPdbjwXBXQj7UDwk3PLWYGgo58vZ6E4WoFWi",
  "key24": "9Pmqzf2MjTkXoEt8RQGzJeDPhog4vATyZHMfyUma9H6SfZ9fvNFbY6BqijJhN4pNWMZFfA341CymiuyuaSZWi88",
  "key25": "4YEERZoCEH2QkC5Lu2nfVep6AVcNwR6SBDsXvTTBzh6E1mywrn8kPjAg7DZgyC7DdsUfuBgjQ4wNgyPZDxR7SwDZ",
  "key26": "5oP5t9T6sMHeDUjxvJwE8fehcnNkwXv5jCuyLgscy63iDCzxPbAKVt6FJb3fSxgqvY4NmFhNkYBrnn17GeG6RJN6",
  "key27": "5BDJ8toSXT3sC82YW48jLdWev8vjF9aLAnqE12jhaYgR28DaKatwNVYR5TA8uUSF7erkf9EgHsRGPLQD74HkV2hV",
  "key28": "5TFw7Q71DMQpgQx1yhumcievcynpaNxmFWwyF5xLFP45rvvXxQxiksYGEjrG27gddFg1rZr2ts6riqUUcU2gQB17",
  "key29": "8TeVTbkpLSVaMU5LeYqiUZJ7LqW7mtw8FRYkmDAQT2RGofdzu3vLSpjSwadenciojhdiza75jYkor9yvPghLimJ",
  "key30": "Se1Hb4LXSwz9muY1tS1Ps8rTjur3zYKTfYypQ7qb5tYU8mbEy1wpzLGR3TCa1gz9KL44xACNx5CASgzk52v5eSq",
  "key31": "5KPTaAzyMnL2ukAVuRqRD7YNcmVtLEnYLQcYSt2dUxHQJzVgVu9s5uHXiYHUybGR88QHH3QCabaCJsf2vqLmzmrM",
  "key32": "2MFRTUrkXCRELUpSvEJB2PrX1apqW89o9wnphNs6jkjrTdvxRJtt4mFCFyBAZitMURYMPvdhxHtnRieNGNEBxVvm",
  "key33": "4MTVNddVWk1o4AVsBwWyaPikQNVmvxtGyYGTs9LAaxFtqKzTkuCPMUjgRGPsU9nH2Rpg6SxKw9Rx1fNHYf6dM6Px",
  "key34": "4JdLbXUouA5xyn1tkP769sgqGhercna8yqkyHywsY2PaapqMjt26knmSeAURh5zsuBJznKJYxH9knBQStNpCud74"
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
