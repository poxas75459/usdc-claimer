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
    "2vVSS3p8W6zcE8DrEVQH6zhZWAWUxrR26YESrLMmmoRK9MAVZc3MFE1m6Bq2kc6CgtSGWiPBXDsTUUhYHfHtuBRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3Me4K5hmYVxTdetL8aDEsyqYcuZU6sL5F3CTiYCxzHyNTFoPaieMKJyoFZH5zHW83Z1Azqv9jhX2p8uZrQYj5V",
  "key1": "2F4UGcwuRGHBNe5WMwZXC9n3wrU9TfeSQaxLWwKcUaAtMgXLTXTKDWjgUDoYMLv9GuiDebz9VGm19hyfogRASqFg",
  "key2": "3f8N879KG3jF4kFzxvCqvDMLc2eXvZhzghYSHR7iYejmRWvvQjk9tFsuNFBE3jswWsXUK657YJQ2Aoj2EsrvV86j",
  "key3": "2LrgeWi83STDJXpt2J6hFPWY62WhUVwn3reCf8dpGWVgkBkgz456fLN4wYoqcofN6sKfbWDHE1tZGW7QwFUpcyJk",
  "key4": "o6ys88p6tA4Yjxxqp9gbtghZHKLTgVyhdipJLBqeFLQrwymBz7TEGQzUEEvg2rEgmSdpqEVGWDWaNVha2Vyf2hq",
  "key5": "CKYNcbwxMHbcGyrAhmdxcw2iqko1xVJvG5cqNY7A6R553YgZ3rM6xjSqMBe6oTThfVnSLxNC6sbHAPdbXBQea5D",
  "key6": "4KovrFTmrNmGusfE1VZz7rusBZjxfYhReXT2mFVzvUNQQUmTeh8c1atrTbT4iQ3oxkYPR5EJ5E7kour433ohMPnf",
  "key7": "CL7BW7Ro4bJuPERroSdhn4jWoVAjHXLa5ZCZusrEGrtMirDH9TfDEnfyLa42x5xPNB6VR8ANWa8ZxDxV3wuu7h2",
  "key8": "UEaodprixwVAPptwgmKBn1gZGmczSKLH3CfS3TVbpGXtNiCZeF9Ej1sn9e2SPDRQSsEonYj7xmLzjy9QQif4hGs",
  "key9": "2mUyBGvSeTTzwCyjqbKUxu78L2NMZfrJHQSgqBBxSbjjtrqN2TDBjvYwaBjQ1BFkDUqG97RgVfEVAbt3MfxFYpwW",
  "key10": "Ee4xpd9gUajVhofDMPPPXLY9eNA6e4tF6skzsHNFBhKo6mUpHYvp8hMDkUr7B9SncP28R56rUdtiq3TdqfWi7KZ",
  "key11": "28qzYL9S82x7kEtAA3H5M7vdR9vzbykdcTPLxZYL8ESMWsEKezgH9iFdyiJR1EajkEYDJpB9qBEPf4M5i5ym7QMd",
  "key12": "2tqQF3BjBWpYCR8ykaMHkubz9WeJGW9BNghcCqL4kh7rpPwEVFcYjyzf4prC1eDEmH2ngPLhYyghCixHxtvQsj9r",
  "key13": "5TqDs3HcGk1biWWA8Vw5MiTLF1SPGna2pZNsKHS9HMZrCtfy4yHkTFviCCJJ1xeYNtMa7oC5VczGNpmKg2NQB8ax",
  "key14": "4TudPx1xTHosviXdBviicQrtg7erEit4nQpTfyWtYCCmrX6YYrpBTMoM5DsUagv8ifk7TmsTjpPsUxLNNZexEP8i",
  "key15": "357X5Q6nw6myomY6NVfL5L6JoPg8GBARhiNnPniq9xv5SodfgFSZfGx6ogx2jZ5Vqq9crd4tN9hm1QKbhuiCYNtE",
  "key16": "3rBhtBcDrvZaAFuFXA8bZbDsTb6Bduu2LhWJeqkSgc3KfwYddEVttUaQN83e8NyfvVKSZaLB27bwYfsYyY2FYXAs",
  "key17": "237FjrvRYsopydKmDemZwSnPHUNjgpZqJsBqwFx1V1qVvdKhvYQs5uZL7VWn2tHAmX2giQyXH8aMhQKVupQSQVZK",
  "key18": "35gDLx24ovg5BpNntS1gfXQSAcDrH2JDKfYPrycTHVadm9CobE2vT5sEP2RdB4v2VB41mWS4on63xX6tc9beejsA",
  "key19": "vDV9EdTSPdDGqDnoyzVcb6SKz1fQm9gehojMuDTKBSFKCQvHBf18DvCe2j66DwZseZbvDtfRvMBXW7aSF7fvXbC",
  "key20": "4wtaXVWknfpRpBpiN3TUVwMdheyzs8PX8Tnx31N4s1qVCYrM4isK8DkEopijKqbZddUfGbXHo5oLZmQA9etV4g6X",
  "key21": "3k1MbEUyo8iJDX9EPGC7h7JPeS3mHkBafPbhEyiN8iPM7r7ZKMpnsWYwgc7aGx3wMYesM1rRiFFLRrj9xWvLcHnK",
  "key22": "3Tj84GTMouB9Tzt1CHqdio1eH1YvsW5aewKCrYhAUugRNHpx9Rhx1CNGvUj3BoPb8FXLzjbm3QJqrpDa2Ew2KRPP",
  "key23": "4Bh59fBkJhm3N8M6beTxXRmAZRG1dMhi1uVEQB9RS3JK5HQ9gm6vcd4S3C3PC7A7gHFgtv44BSmsNw5pBnccPTQz",
  "key24": "3xAqiN87QVoukmj8SgW2gY57zFcXr8RS54z6KBPfjXWaiLcw2zBCuRoJTvyv9i12iFn2Qzv6wnVmHADeQbMNDZwF",
  "key25": "8Mq4LWfNBdzzNh7TAMTtLDSStRpC4x5YeJRFZ53221dnPcykBtaZo58pxMqNS8mGtP4FywLgp8BX8G3kJEDgqFZ",
  "key26": "2NSPPvCbF7Kmp2Q7dTywDAzyratfrScUnhf1TMCP8aM5P5QDmKKAAXkpHZ3RzhFKQMXoWzTvqyW8wf8SKB7YtBgr",
  "key27": "37jWEY8mQ4reGaMgBvBtpUzjDWFA7UfpVxKh1nsUpVWnDMWbWPikWfNsqVHSVvXdJU7SjcV45qY5NFENvUrBTmHM",
  "key28": "2g7sU2HoUSo6QC4oJizdNzF4i1rFPxA6DFuKq3oSpJazPAsucmCRXmWad3MGRSiKfR3itFhbE11mrfxYE6Z3Jfq7",
  "key29": "3e2ocf1PAKe8guwD1rWFvTj9WrAoGK2YaohuzT5w1RJqKnuy5ntc7FdK7WxkYu4QjAyLauRwRvbJ1b1n6E4w4vuQ",
  "key30": "65gCN2nqYfZaiAjdfuV7V1brKYVmP3YBDkY4vgsuwipvF9PxJQ2dTg7maaCXPeAhgdbjxR2EmEALwWwwmNLwvW71",
  "key31": "5taQweVaWnvN9tTX4jPVAuLTJQ86DR6CaHHasDRzLsYnsLxDQehQze4HpKuFGkg2mzwQ3wm1NTRHxwWPVb1ddHuQ",
  "key32": "3LCNDuSCjAX9tcFuryDxkPBwK9qfjeB3Cs3aRGFTA95wgTiu5AJMsW3iJhDkGf1Dat8HzfPhC2YXncpxnJa7XVwu",
  "key33": "4D7mB6Nuqi8TrshbDvCvYfuGMPuFYKDgjWMzeExLiV7FjceRKFzyvv2ZV3MMNpFh1NTXKHNX72Tu54Tut9muBBv8",
  "key34": "49nsHbchQaMLqsX1EhEca8NQuvqaLzX6NB2gy4zXSY3SgHMiKmfy17W7FcMGB6famr5Gg91Brsk4cXyPS6n4ZAEH",
  "key35": "M35ULz1ABoQh9yQ9ePGbHJrtUjAdbmaECFBHvhsbPVKK88JwdQEPuNjrtWxRoujiSr7BkqG9QnpmuadKzDyj8SE",
  "key36": "4iEEmGQE869YcYX6rUcCWb3eNcrvpxRRdsdFLuwgG65Kd52x5Fh97oJEnx5DvoBuDVMcVxVq2KBDzqKRcxj2vE7m",
  "key37": "2qNWDa2zJTjQN9hx7iqiYU7zRN7JDYfETAH7aUJRBfDDRxrcns2U5V5h7pi4UTGqkUcMt6Hsaxcgkjfu5GZnjhL3"
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
