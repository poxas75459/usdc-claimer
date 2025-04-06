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
    "3DojTn2k5TpqHko4BitWFHnfVY8baJpuukSe2DEHADL2aFbpgEhBUozkajdazkAKaBmM9sx7E1wvqGo5kuC9paTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hcGoTatDAM3pXbaPoLrFn25wTns399wTsVb6rLFfAEcACecgSx7ak7bV3vdWTmBnikwJ9BXNyWPJjAHRfvVqBvw",
  "key1": "2kKoS7pioyMhfddaNjLCiE7aHb7ikqc1eMGDFTWYXCt815FAAMQGFzEgxbfG3SknsNnYSAfjZqqUeN9VTn4n1cRp",
  "key2": "5MiTVYb9bEwDRj3GT3BK2tJcrmk55Ei8r9bwme47Yswv4xdmuoaMBjNDWeVkQPoHFFKUdkYHWTVsidfzjVsarVTF",
  "key3": "2qUn4w26JsQTCu8KWHQZPwMbjDvVEENcnDZcJ3uvtC3PVykEDncNvvGjwuYzGyKda5Jj9TxtaDa3TEH4jZrgd6VA",
  "key4": "4DHNi7SMsoYtsXvHBJVYpqKhzmgFPerAKxBbU18yQMEJiGa8xRwZEdT2hN1wk2AASfKzcXx6Lv7uytGi27eb8mMV",
  "key5": "4DaAfD5bBdGf8vfpEQzYsdyHXpXYn9TVrGeiYRcfEfFm9KDss7kya7WmeUB6twJipsXFJbh1nrKGZD2GNBx8EFbE",
  "key6": "3RVdeEaqHBHmyL5m9hZ1exiAyG7VJX3ug8Vy8G9dL8XcRKVut21yNFQJZThtKGAeg7jL9kcg4H6aM5ZHHnXMWGxp",
  "key7": "65ftEoTPd62JixH2nsGgbAWYdg86cXUj8fZygopB4GJQj36XonQYspZG5z1iXXJ2GC2JH9Zaj6VWHxVW8NQumdZz",
  "key8": "VAWAKeWPResm8JJMotojFXHspfcN3a4mRkSsyp1xfxqE8rjjZRx5NEbCLQJe2hwXMNR1P18DPRsiqBzLspCuJ1Z",
  "key9": "2r5WBaTL8mDsx3RHxs2PDmhYKqfKwVH2z8tyLeuN2Qyb9gRoAGWwC8Zcso4GPmoeLXAMF2TpYrtNcVTMrHsMqkJG",
  "key10": "wy8Wy93ra1ZMFBU9ZE8fhLjEmMBwBhpn5kiC3iLPi1qttipecdcSDLYGBy3eUxGjirMAsozppKiF1NteRK3fXXJ",
  "key11": "49TUCWRJTHahXtnt6Lu9KzMM7nhS2hFQxHJHxZpiPNeWnWw1QPw3whWY7VzznEGy4uWCqCNLybYzowVypEJYsvdy",
  "key12": "2b757BA7KJbxPsDs3VtzUSBUtAQN8zRMxvujiATFLJaSuuoty57DfV4moDNJmwDZCSdjkBZ6uZogTw5ysZa1zZ6r",
  "key13": "4rTGKGzdYuXTX68ZXijTK6Ez9JdvVc2uQPGZL4pwEEuLkKu7BeZ6ANnpudg4v61qsfGiNpyadHzBqmC54nzVRhCT",
  "key14": "33sPRYxYAsuEQaiRmw4oHyhd77o3gcNvuugnXkYJoftEoBC8ftbg7jwT4p5Ls5GXiAFjxBTWpG1nxmsXTemf8jjz",
  "key15": "4iocackbr7ok4XUhYTwohPwiwExgETTui94ivVSQKdPeG7pYbeQG84ALgdeaVHJZ7dt1xdeydJLUtXYkDUuwotYe",
  "key16": "4i9D6avbYYFwQnMtiCQbJSwdKHFaQpMwu57QeHMxVqNdhqexkc5xRD5Nf2DBmUmoyjwcvpnrGTGfhKb8Gtth4k1d",
  "key17": "5Xj1BbCkkbRsoPeJc4otr73djxQp77HShSmQgTLaxGz6NJiVpJ6ag2UVMCtRPv11FUhLqCbtaDZwmcjZR2es58eP",
  "key18": "LdTeUVm5uqVdY2kF2N5XuuvfT5YeaNP7GW69WcgW7nLiPW4A1FqmjR2GELiLiCXhBreWv4sx2CfvSe6vsdf2HqF",
  "key19": "4VSS2zRd9SZpqAdtZJRGyr1ebcaa85uwKX8YMyCdn7wYzZkHxfVti8YgmJqoMPfqjKpPgefcoKgaD81HxiNADACy",
  "key20": "65a8brtFu78WuWbVuUg71j7ZSxC8Kk5fBAZuoxY9Wtf74bVkx26afG5KGyz3S1bBUHFTLz8Rv4VFyp8ooi2h8gPz",
  "key21": "2GhgYCgV5d669yLBSY8VFm2KWBU1nTKia73DejNXHZeXaxLtMt8RPvMQGbsPFbAw92ursxz1BUbeFm7uy6J7ycjw",
  "key22": "4znFA2ZdBv67R4g2TizRzYma2L13a2uagdgGZ1D7i9agoMwceQmCHLBT1FRZMTLGKbJQshafxSvV8YGNxeyZkiS8",
  "key23": "5fSLSQZEghsyyuxaKpJ18NfGterVS8nx1reqkwSqhUfqPtpgGSm651HPm7RxNCvCxdjVZjT323BRvah4jFRRcwyo",
  "key24": "4wvV5DRS5yrqNvYfJfSBAHMHafG9MZHi6w1oStLE8bwUpG2kQHMgjDafv3cWNR4n5mq1GuZxbV7AKPReMGLxeurH",
  "key25": "316fEssimE3C56ake63EmoB8zt7Wpmw6dCMLg8L9nCbZYA3JKc5VQpd6UEqS8fAaV9TF7W5Ys8c9Sr6EYJ6iwSKc",
  "key26": "2NznHmGVqdGX1CjdCLUqsMC97SewJGgoSMwGw2xAcx21PconQsHeuKQp3rTFd8CkaEBwZ7DnuJtCBf8iatqxJJxj",
  "key27": "4GCR25A49regQmhMRLDGsGP92Dk9CQDvP27JTMa5igxuQLirwzgWkgBd4P3RzraokGuvG7ERzfAZPmqF2p3iMdNL",
  "key28": "bjKtPu1VuY3PptL2yVRMXdgkad1u7QAYKbQa1jDRdGccoFVXGRhAKt2pfcMtrgscW9d26AeZwCr81GX7hseivXb",
  "key29": "26j63n5McVScz5exSFWHKVEZ5276K75onDwLcadkwW53FuW2CBboj8pRm4b1DezXYhxxgRNTpTvs8489WJ3igEaS",
  "key30": "62dYPaUfsGTiGmhtDi71NyUxSPKvpANH2MRSmZ7KZd8CzQSguZXJUhJvWjLzFtdjZdTSafxoG3QkPuEWafvDT8FM"
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
