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
    "5TAkcEHcePTtdi8hT513sTD2NULEhtmkXZXmTTvccAxDa3juBrg7vYch5egM8FLvLb7natRuKXwuMuqecJGrWoVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cdFaT9G7EhYf17Zra3HmeDhxeYRmJEpM1AgZhgvfDkUYpD7ReiXJn6d3DVedjpT1trWyDibKw7dTrmWCtWk9G76",
  "key1": "5P1XSo4AyJunUCSeGMsFkFqpkuT9vyMaHTp4vanqNk3P5qXX7RtwzJS6Tj7vbaVXG59TsjAorVff8XzPd9kcKchM",
  "key2": "25qQcVMvGqxzAs4EQ5r2uVo6mq7Gnd3rwyzTZ8eQB2guyEXLwYacFyhGpFk8GibPswJCpdCYUXoAS6pYsxmZ5THo",
  "key3": "5Hnt4y5DUSdq6PrR4GDsqJjTtDiPenqMH5owmTL7ZjGbmobHQWjGD9k39an8BstSdND1M6ur6Bjoj5YD5BoC26PT",
  "key4": "5AyYxY9GzEj6FrmTSXLWKwDRuhpR1bbQVk3LM94tiorNzM4Twi7n4kyHMdL41tMeaZqgSuLsFE1RD9Mw7XHCssYd",
  "key5": "2ut6M77gZ7ZBekEWXvdw9QbBfsYVJH9ES9uwA6ay78b4hpDWyvmbGxBf5JhiwPARAn8TmgNJT31ruewCpYNX26m4",
  "key6": "5Ks3X8jNaVKyndtq18AkRYr5rSGs2BuTMaFwXccWE3uCcVzZdZ7FFNo9ayXNfxGtqB7wavtyXDzzBsFSJty4jJ4P",
  "key7": "Q3DhM2YFzki3utVMUgQ5oWn6Z65WkUguJDjjMwgGTpVtzaBF9E3H8KW4GqGhmDuCTz5e2XKYR5RRUbKfPkAmGNk",
  "key8": "X6QYAZBVy8na41HNYWuXjG9VYNShJhPBC664yNusdrNJqVBXhQXbnWHC5gEbfudmTBsaPykEELVeR76xgFC3CwR",
  "key9": "46mCSziKW1qyfJjonn2aV1ES8hsC3rBPZpZVj5xuEw9mmgJXJPtKc5U9KXKiX7rQYN2RsmPdjQtA7XQDr3SFJFbK",
  "key10": "4VSpFpQKodk1JB6mBfuiMkrFhy344qx2d85SVS5rELCgYYBif2d6svt1LGNNYFygPjHyoXRHCnkbNJRp44vYyqVs",
  "key11": "2uo7nBVWCPVMP9wnJV41vXczkZoMLaqL6UnV7V7J3DyZA45eMm7Jw2JCvY57SnYD2pX9AETAHuaSosyKfinDvTTE",
  "key12": "5qVrtPkp27oMAj3cT59ppKWsMDrtYhRvTBtAJh1faqJkrvp4yWZcVMiyF5nZDmszRWS8mVgBJkxgBQGH71dAEqXp",
  "key13": "NBVPPE1yVY3jk2pEf3oNUbQcBQE3jt2N7ADRFkHtyqHUVXKN1RAq6Eyz47V9CYxs2RGcicMzqSrMzuhJZ2EMrAK",
  "key14": "5ArZPH5a4Sd2GwN6Sx6E51aTMvV4iH8AXxWmY4yxpbkpjxQvdMDJZhZKo9aSGd2Km34PM77n38Aps1Y6be6x9C8v",
  "key15": "53tkfBEGqj5R83C9LKcFL1Tdv7HHzVABe4BaxL1maXhn9KGR3fkYsC5UCNnoHkJrR5tiHCv1FDXCM4k31carzytW",
  "key16": "3NAxBhah6Mu3RwmMDUEuqFVnGaXTwcZ1UUfa3PnBRwdjtqFiytYGk2k7RaKSpaE6zvUBumYbjZ6QwCkx6V9DXQyT",
  "key17": "2xeRWWAnpK9Nkg9A21P1JZ51YyrUQikHh8yVdGoxPfm6TF9fScMwxCHHzUPasZH4JshYGEP4nc4Ai4sd9yG6Runh",
  "key18": "8bkMCMHasPDCQymKCo7kon3NTKNDoDmh1V1h8uBSWyQ3efWncQ7DZemNkvnSgmN3FYjTxdWmY5jrc795sCZH7oU",
  "key19": "5TppTARM2MMeJwDrP3DFxJp2uC6nbThWvEbpqaw3y5NEDoZsV51VThDgzg2edUeFuVrUyobTA7eSSb9Pueb6SHtB",
  "key20": "dxDrtgGGvZR5ZxpzM3G24inzDKxm83bPeAcVXfBQTF7bDVih9bwcyQuwQHnwF9JvupN1rsb1fpCKEQ9GR7PtM3r",
  "key21": "5XgfzWuHpzWuWxguaRyr1k78KTjQ7UGUepHkXdCJgVPVRcD8FfMJnyHwRuZ9LXnDHEEzGYQ3dNFaXW17drhvTyfZ",
  "key22": "3H1aW2FMxJLkXz6a7SfnTcozQW1ETRxh5uPuL26KQjTbU5yzs2TvPR9g2oVQ7CYV1FBVjFFcvkqwwxEenMBhUkT7",
  "key23": "2botf2AvVQWA6MKzHJjKKDeBYnfFW84v87dJNotuysmy7aUWZQzjb1TQm3CdHqQYRDsxyUAPfcDAy27ecWE85T9A",
  "key24": "5gHSv5u8Xs6ckraXyVDGDARJStPj6bozSV23PCkDrPVzNVKofEBsCPKkbxS86ngrjQZxAqVcnkHanNRdpT9M4G9U",
  "key25": "2ETxGEBkXRZFL54JSeUbZZACrLoSUs4m29YkoRDHVK51js75gWsBQLJ2FaEzh2un4BTWu1VB4XZmz8hbnh2ikj6u",
  "key26": "4WmrR81ecPKFsmyrwxNDJYm4dCoPJRnJuV1sRmgnkVpHTZnPoU6YYpYMnE1CyFHT5guWYYdfV8BgSxRyL9PCf7XF",
  "key27": "2psngHRi4tzYjmXt9ETnQ8xVFvwdB1zcn7Yq63r7kPGKB7bUXD46WxhruxFvPb2XRgmPvYiK6xEN2gBbb5zR7sFm",
  "key28": "5refvkQpqe7MMSVnLzwFMPeYzJ64S16KaPy1aZeTAfjvCAG7cE9BxGnESarnBvFooyYsqKrgShDsM4SPH8cXqG45",
  "key29": "XruhsxcwMhG1Y3cqxqxtdkZHzsTSQR6egs9ER7dJxp34NwxwK25jpgHAcUqzq7KoRn4mexQ7ULS6hb8Bgm94pDW",
  "key30": "4pGnSZzX5Bgw6sTATyd8g5NGgcpGuL7aEJ6wYU1Ua5LoJ46MkroeAdUzGYp4KoKrseamvh2STzPKNqSTd3EWD7JY",
  "key31": "4sauhoJ7ScspMSFmygfxx4QWNvMuAScNpefKD4a8o4LsWqazZhERtZoRx7kzxFkH4VgTmFe6k96hsZDUdXPPwAqp",
  "key32": "2gSpD3rZVm2CMJJm4t6XhngviNda7Y3yzPhMVE47tFcKYEtBmiiBombMa6SSf1eoQkVzzx6tHucZbHQYkHQAUm64",
  "key33": "22f5N23uf9pnAgQ3fBSJYHrSqWSr4NgP73jvyLHeoBpYW3sgPPve6Ln5WrSU9GiAk39eaNMTmf8ByAVqt8ZmoQee",
  "key34": "31RcZwU8otz2YB7m7rJd515T3xWkiCjSwskPkWTBCWAVh93mz7F2eCW3SPWhfbUdYMtnUEGt2nuL474ctyN756vi",
  "key35": "5hf1mcGdsZxGRRJ9tzjSa2QBrV4vWp82gtmZN3ETSbakzKWTPSasznimguHWzyrKZazgBxVWcThSS4QAWTtjAtbv",
  "key36": "56hdsTiSJ8DR1QnaeFg7W1uuZPsU7d7sxn4sC3YeBdDwurAWGtzsUjtaH6NiLUGxgNK5e75UNMC8gBXvxbatKzaD",
  "key37": "2trH9g2TsuYDaSeSeVMRo7mAWeqic9By2W5MAcfSU1bG1sDijjXxhKGGX97WaR4ZkFpjdtM6DLmhoPhHk83XAnBe",
  "key38": "2cQKAjeV45u2JXuxs1rRhp5mph1eLdvUtoyGwxaoD6nFEyMCeb8S1KEyy91kbVfSqG4wRgYwSsKG8QrNWv6UXj5R",
  "key39": "TtB8CwPPh9WkHcN58ipkcyGYLBjvDf9FDUDMNduZb1sjjG1NnfCfVcdCwuYTXUFnNC7AteaSKBbeFPFUS3AGJLQ",
  "key40": "3N9AAYikxkrSU8a7bXpaav8bk5gphdKB6B9ojX1WbtGBTCkVYDprRCfX9wVZ5rmMKbE19A7c27pHw7s1Dw1Losxf",
  "key41": "5KdTFgteEnm41L3oxwpwhkBbnvGS9YnNnm8ciC9Ueq656oxA5CTddR2atQMd3BekDnzGeCPG9xYCeiQJxVKEMQzd",
  "key42": "3R814KEUFiqSCKzeQ26xhLxxfSzTnN7xys59RYjtSWoVBfqu1ixj6UtqQZ7EbymGUGZM6PwRPcbtACqkaLtmK6Yk",
  "key43": "4WywuFzK9VF3m5HjUSPuStNAx7wPbZuBfoG7REevBuvVucwD5ZrqedNAtMAuJmTcb1JXyr1ng6ocKhikvtopFNcp",
  "key44": "4AUfFuoXQZn6EeA7acTQv5WjB3BDNkj9aDRn6pP8wkxkNVjmsbe1PC3cSx7o4Kw9LJGZG11LNR15aSmENCsxfRAq"
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
