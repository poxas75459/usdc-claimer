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
    "4s28gg66tcuW4Wv6VFFGJMGYar1LkyAnnaTD87xcd1CEGFMqpmPAUNnZyvVPyMyuUb9XxzWv8hGpoEYrLBpgad1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5tZpt17k8mDbHwsQ6Piu29pVesvhpn1dpVfg39NtdBtSy9gmnqc4vkxhgbACJtg92gTR53r9ktQjAxPfPzGW9Q",
  "key1": "5sZHXz7iG86VxUNHkzydjdGvaYp4JF6qwYPmQ9sPcJJJpoLWZXCaA5Pr5DRQCxVaw8gmvoTiJAMof3NvFFoYU41T",
  "key2": "HvSYNKCBW3yZwzJ861EYE19TWhr63cgh8PXVirS8gPp2Kozv5ed7sjyjHuUuuKRocA1Yu8sh6cqv9sBE2Y4mFix",
  "key3": "53R4mxXhBcxMR4DVXsZXi5LMXX9JiN3Ud5Gk17uo3exj4bkY49rFaQ3H2Vf7ZcDHy32ANoGJ8wJz3xnw9pHzCQ2X",
  "key4": "58JK6G5tZt2EN6K7KXqartMfmQAYQNKgS8GjYcGcTsY4SfEt8FkmgFqUAkcDFZtqeQVBgyAuSJ3cA3WzGPrRitbk",
  "key5": "2cNwA3scNoPU4hQqGRz8XcPKbZra61LourUuRsuhZYiSDAQG9AtGymdNCAxvrGYynqkiSq5asSaHmRHqqX6cb5av",
  "key6": "284wRbMHpBjYWZZXHE63ngPNLMvkzSMdHVSeSRXzLrVBY3hMaxhZxQedEHydQ1Yx98HWgkgBKTyivGLc5FETSEEs",
  "key7": "3cLKHbifrhArtjaqE9cYvRemozVTywYYCpv9uyTikUHPhSXKaAnaNLYdy5QagjhBxvM2tCdLJ49smpPGXHsvVHtX",
  "key8": "2vgHVRBYYeBuLR2DAN8YAxMHLnsrkGDGyju1ovDPMHrpz5navnna8zbyGYKjmzB8pL3YpF7AwTRQ932SY8oNcbr",
  "key9": "2QPoQemuAjijNFCiubdpRFPBDYj6YndCXkJkSsvehorST5EctF5DGENn3jtV5DLcxkkxEBHdUXHPJNTgmMyUfu1n",
  "key10": "25QKhFXZJuR9kvQNa664w9F23LuuhbNBhS9TuMx6699LdHvktVg31p7Zu5zqdTxCfnKTUekvFTsqPDKT84CdGpiD",
  "key11": "3V6UemXJnduZM7iwyMjrZD5LbSVDZfS4ryCvudzeVWwTMxXKWsfavvV8ZUFR8p2fquYT4p5BqQEBKB8AVSt6eiJm",
  "key12": "3eXbnXibucEtnsu8Cpm5YaujfdfFj7P1xwSGcVEh8MRvGYvWCeDedKDHC8iHeq5Fvdr7FE2vpjJssLpagt7dDkne",
  "key13": "52TZoEzKpVek3Fjg3uGkbRHirc1cg7oARB7BVQMC9PyPCyQTdGjrmRRYLRADt2dwVvpB4tJkwCMja8Nv9SdBhDC1",
  "key14": "5iY6zkWAs47eVuBGUvQiQpASVXabKANYFzjHP5D11JUpVMQL52aeeHSTr6vZhNJmNb6mUkaKH4285LD85vtTVx8a",
  "key15": "3mkh3F1qt2rzCSSAr6B4ipizgm3zak4KKevtgnx7fLU6VLsXtWUZsJorDrKBfTLwch24GjU27iC12HXLVQh9vXFM",
  "key16": "5ZBEZxmvWNFnF1CRCTSSo3cYWXXc3ZuNPrT36nbRSJGbyXvtVnxAuZ3BhWfY2EoNkTqCisYySnGuVpDw2aycDGd9",
  "key17": "Se5eyhMsyc2SqLcBCE5LpJ5BnQosx8bCe5yDDF5cZ77jtz7n5sYRBYedSKtB1Pedb9WQCS4DXGFz85oENY4ZCkA",
  "key18": "2daVeRkrxVArfyY5HrUECbc9DkFBickLpfC9GBT9KLC4MHvtEfBnEYDxQ43rGWrWSJv5ngnUTkHQyD38kH3kciBe",
  "key19": "5gEtbKi16fbYsLpXm2jrFgbUhkqi3W4Ca7sCtW4xzdY9QTXuYeVRN3XXg2qZFvzQGiYH2SS6xP7bCex7btzycR8Z",
  "key20": "2SPzKJT8vc9xzVgKHSjRwpxCCfBHpVHSo2q9M5Z2jyYA4sMWQMSfQ6PdKrhGfC9AWnnNuyQypu5nzz9MbfcYxg5w",
  "key21": "2eLhMZotAEvy28qHv7QvSFytPjZEyGZauqAzh4wkiT1ne7xucdGnWsAWGFFwyNe7hHwqXeCH4FwqRViFaWXRCfx4",
  "key22": "oXccX3mr7qyxJt5cgdmr4cbfTRxTKezVkj3DPEzYkneuQcsKt2KLg1kU3PC9fR5xtjPKJVFE2z8UJ3QbEjSJEtL",
  "key23": "4434k9UPvQGT5txTUrqwGwFpjPmw9eBFQrXcz6fHSmpjSXT2KeGRZTds4T2H2LzUrDrfAwd8CLJWELMuyFpbgZXb",
  "key24": "5Fv12iGNVnaffKbRZh7dpJCANC5iQg8ZsFeHBFaHJXZgwXdc8vyY8Z6FRv29V94PRPpqoxn6uEj9tkS1JxsHTMx9",
  "key25": "2WoVdGpRtYG6HdAZqbM2QXbwStkM37CbJw9HiBW7z5MRC5AY5TfdN6CUetrNaHcWSf3TAjwZFxR4Yx4HbcYmGNwz",
  "key26": "56B3pdabq1QFPrivYjcexWLAk9MJyBWYyP17mjTmVPaeDdwob6oBDk4LqQXqrzgjgByAppBaTZNiWks7LhegzuHe",
  "key27": "3qs2txTbwxxBFtnrKbyCJ91jiHbYHFjGjFk2mgJBykN2dDJWcp7yDdAPChiGVJ3wR2b4vQoBiVZAPfbHhzW5Bsmm",
  "key28": "P3dMQmYZJ8arvUcmsBGWwVKaYR2LKytgaxG4dHC6yrbMEKtkkY7jooVDpZGDpYi3V1DbAgJPYxLpsFNA5wLGbkj",
  "key29": "537Jad8y2Rao22J5A7y2YDPKcaY8nrqUsqfKC9f6WL2rhJupA8h6PY7aEBbJf2Gm7Qz9fLnngBuVF1wHnsCR6cd4",
  "key30": "2euhyNqWPaVstJstupbfAu253SZw93VfcyYo9mrGTP8CrKqoB1BTLdnWpWPKKfin8vETQbo6tw4kkUjttfDwsi77",
  "key31": "3c5YV4DzteEBUCoP8QUApH7ELNrtsMPyJMdgHXojY2rucVKZunoeo5CK6XeYvJaE2yejzN6zHs56H9xF1vPDPq7D",
  "key32": "1m2o89kUR4WfrBtg6pnecUWSNMK7eCnd7RDzhxa9vchZ6kuQgst7Lch9d2s24WJkQ5q6jg1HEnYSNFjApvB7yjq",
  "key33": "4d7Xfmc9GmS8fEHQnXmnrmv1Qt5dQQz8BqSouPRZ3Syeh8TziKyPyNEFxA2MtwQc6qWFbuykQL89kBEeWzQ16P21",
  "key34": "3cjGXPbeL62DmS7hFwA8aCrfQztz1kwQ9HNYLbN87QJ9mNYt3ZYV3Cy94ppzRkGo3kPjuEzEirsBpXPhC5VVcD2k",
  "key35": "2z8cau5gqfWH3PvS6uNxTA74cqoX1BLQ9E3MNMhpwm4Rab16kzCJR8LJjwG37JKiVDLmN9dWZ1N5dSgymN7A37QQ",
  "key36": "2uwURswxdJxGuCPULgvbHyrwrwvb4e4nzSHAvzZmJdPhd4CS2a2fEGsutZXLSgeXECqggsE5C5DjoLuq3EY6os4Z",
  "key37": "AgT6jupydo54YmVCfwoAW4muBtJGuWursahz9aW8ypNqfqjxiTAGTh6xphPae6jqJvUPSb83bqkoodBiNi86jac",
  "key38": "4TeMpRZUXXJrxt1vsTdLqQ8X8DxRaVeCJwfQUgzyKDsvkNZ5rAryCds5esbosxKzzJ1KntrJBB8vueTWURWtNP6Z",
  "key39": "4Hg9J3sjnDqFHGmApctvN3G6G9uPhnUKwbi4JqZFZuqi3ZbqxSwLRjTYnRt13493kLjzRiMnEWrrM71Htdo8MhR5",
  "key40": "4awKDk9diK4SwcXbioQr15QeYyuzTtf6MyLTSZPNTBAGzbj8YM6NjUshHK2BYu48Cr8f2MfNQ47eaf5EfuJHetmz",
  "key41": "3gtwLMFDJxadMRXWWsyQPHejHUazCogYJmjoRBFmf7H8MiuLF24Qd52sQ7XP5zbmevdRBmYziTS6Fp94g7iNpHK7",
  "key42": "53gwiRBvEwupLeo3wkH3PLPMuNXphVVGWAcxKDVKRHU3Re3TNzApTXqP6yTQMtA3JsaNYb2bkrbnNZ6i728VBB11",
  "key43": "4frkQksSsKuu4XzEoEg7ZEHykNsTCmt9J7eU8WR4KfzEeZtRnxRfkHVfdaw4VhABtJCyer3EneEWyhVSYX3PudZR",
  "key44": "5cU4qdY9GX5SFaKkQzwDusfjaPZckvyUCZydKcErWQQwCoufzvRzHxNrTurPa9j89YAoJ4NKzvGGEATdRxygKH6y"
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
