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
    "5jJF4Wt8J1xGx6VnyeUsdLxn6wcy8WAwR4giW8EWnKdw8xRWhcvY3ACjyF9aTJhgsXTDc4iR56cDwADduFWyyRoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rnmPTTaoVaE7ZJ62wuQLzGAbETmuReKKk5x7KXtXk5yktk4667iSbzHLfSuyJVveZSwa5P5dPeKpthWmbyLUk8T",
  "key1": "3K99PwpfvYLhBosDxgMDkjhrMAfHQxjF35QSSPRj62oEF31mb7uq83z5KdB2t1p5LC5Yw4ELQW58Zc8FXgMBis76",
  "key2": "2rmTiKiBPRQCyt27WrHJfhAeo9ks3u9HeCZWE3xSeKvcYRgZWVpE9HMh1Ut1Gr1t11zEijMbEsJEZWXxkYcERo1p",
  "key3": "5B9vPLYM1LoGgntAGG23zCekgZXXe1T5EJUgBmrJFH7QJ1YefQKLJNopNnkhTEZ4FSKa8Jhs2gub7AELLm9ZQD3u",
  "key4": "42EVsQXbCVyCCCmyiDnQDpLhq6zHHpzQhGg1uiqKMCjSJLcN9KsNfxXuLC4oQaNTqQwY14w6BR3tUb6FsV8GfFQu",
  "key5": "3p2opqTa897J1Xp4YJkX7VAi4ch88FuV4ExB2dbMZUwAjZXrVr23aoj9tL8BTq82wUyutyePn5c9wMtuG7cdBgN6",
  "key6": "3LsqsvYfMBpyq1UuHcLsJGvW6VxeERfXih7WGjom7eEPEe8aJ9kBsHJzWcipwjJpY2u6cmPsi4Jpkuwt9XfSnxFv",
  "key7": "4aRkZnA5NFY7Tyy2LYkTHi3xaxDKsaWpGGmu44gAZmpJKDpDkCLmbsECHhgsKsXoBH8yvK9GGrDatRTw8HRU4MiB",
  "key8": "5NWmjhHouucBgmh5gGCHu96UFocieNeXXwMBcsj2ssCYSsh6MScW3VuCRhrCRKD9qtY5PVcSAXdpG99NfkuS9ihN",
  "key9": "3LGUFFKvnhw1xJq44ebFcQDx42Q9i3wSP45t9yuKZGHUtHViEdf25fwqRgPudrTjsepWSm6qGV8kjA4jmk9m2MZK",
  "key10": "2TPJbQyNVVnKRMEc87YLW2nar1nbAAeg2oLWfibR9Ai2EYH39uzR4yok5GFVLoYHikAFmEhWYedBqK9Ky96a6Mda",
  "key11": "2dxTbk4QEPZwEFX1g6g7cQwPAZAVKgZLL3LLj5711XwodSS4HPqQNvA5iCDFi5gwskNH3qs5A7bwdxRiFQrynhpG",
  "key12": "2V34nzaWq1scjnyvB1fTjSPqhMSd6oYf9sDjskdqDkjLdpw35YY9UsVMNnCddgzmSYTHHEiNdJGCar3USasus2hr",
  "key13": "45gFD1j59au4HaztkeFiBf2H38Mo5MPDuGuhR4h9oRgM8VvCG5E4WtEVFxzpUHK2Yr5WZMptN8GH319aJDyAUut7",
  "key14": "5infmSuJiVsYk52r4tHHML4mvXpUubojfU6b3XxgcgRUTg4QCcpvgkKRTHpfLwwfaWhTX9mpPs7nxLKBMqNukYdj",
  "key15": "2sAxfr35Rhdd7dpe5NmF21keaUbqeVMkQevAfJYG5PRVqXHRrtL4neYj7geYjvmPNZPeV6Gg76AjDdCRwDfkUeT8",
  "key16": "3obKdmWsTv5czPJNRBJT1kmU93UzwMc5NWwtseG7KHErmWPrFd5D1bVqGVC1bJHXRJrtXeWp2fQzHhU5nY4zhBSu",
  "key17": "414UhAm2L3c1fzSknUxFxt2SuXKgoLkumPeNSTeZfBgu7JVqZP4HDsKLTYc3H8Ha5pKAukPCD8QTHgP5svwPhmRr",
  "key18": "37Evak4fNAJ7bXmpzw2h8GEX93WLKV7CX5HXnZXrZ89Vn14bPgUHF9oVZogGiJhSK96vUbpQFR5tnuihaiFcnapH",
  "key19": "3nDSwEAwKrMwrZ8VLn5iS6vDiFHdnT5qe4ieE4tyrbMJx9e5tfBerQNZmUF4rhiL72Bmm46AH4yx6K9K1Wwc4mni",
  "key20": "3VhAoLKxo16q9nBc6NSciKo2BFu8x6RkYHtZvsbFDhjQn5rJorKs73pVxz1kP2GHiH4eUwXMY3Wa819D5kkkb2n",
  "key21": "5YX7AzS18riMycfLVS8HPMdY6M4UyPFCz6BprKvKtCkx39W5gmoToyHVVRV9DRM7z8gtcTjREk9PL13nrBL94Uxs",
  "key22": "2UaEffhDcuyJZ9XfwhqGjvPRP9JyHkdALdSKvfEaBC92ho1Qf2tWRiKrk7Cvt8pm2LuwRsgnBVyRW68whohcLyeC",
  "key23": "4kTxBaDDuSF5T2ppVA5MB9bEukT851xxTY87eUDaBjBbKXKycgX2hHf97bnaCzfrvLbRCzAdyneVqs1NVqyt2vJf",
  "key24": "yTQxhGxRz2asKdaHDHqedwdy2evdsrWqsqedEoXRWijLxehk9WpNjVhCkE9X14VJ4KRLFitviheHzkdyfWuknFW",
  "key25": "2dw38Mhc6UncY8GPknw6aAvGAsyizBLpWVh337e1cGD9uPRdmzc1SFtnFCcCqctwmSyFzkB7q5U5VQCes28GtPTj",
  "key26": "4FGj2wSoaF3uX6aJEr1KtsaHJefnXKcZWWjyWFRVo9ebGYH5vRDHS9Vuxu6Kq9sEP6B4im91vfkFm6jXMQUyEkbX",
  "key27": "2JutUY6Dy2cq2ZXk4rd82UecznFgMrcEfRKJkvNRmNPLSnXR9uHZEbDgbPM7MsppXn8XsokX1HyFvEp4myEe8uWs",
  "key28": "56mxvVGaUBeYHraEa9f4apiqnvoEtwT5zb4DkN1osRvX9C2cyyprBAbGsrA5sGtgVCsQLWaG55v8EFkBbHHb9DV1",
  "key29": "NTwCVFXf47qaYwiaen1q7nTEFY8r4NFeLjovg3psxN7eTZS8AXYwQr7oPQ1F2ypkteJufXVnsFz92xnJpT9MpyG",
  "key30": "4rTRFS16DzzYSGK7ewq7ZVee1gvk1fhAPtUGCFPixyiWkUNX4jA2CcZoZf3nT3kBieKRsvvwrJ16mkBMCybfjEnu",
  "key31": "2d3KDRoNU6nirAL6PBpeVc6NmoMJEGvq2tkNm5mxJATXmTpAtYsQwkGhimtsssuhe1f5LMyZVsU8xZZFki8HBJDt",
  "key32": "YYsn7m61HpKnScnpGfZ4Ff6MeZrXKYvMjnm7nS5FFniagSyGJXBVWsExtbDTGnLaFmJCnuEs2ExuBwfggeF8HfS",
  "key33": "5quunkmUu8DB4eQGqBtnJ9HxAFfWT3pKEgFctARc2dJUWHELigjDkK1GtHnsdkivpw1rqY2woeJBfwRae37tB4Jp",
  "key34": "5uhzsniPBbyRnhSH8sGb8ux2jNNeFP1M63nBQk5ERq6AEiYqDJQo985GQySeTuBPT4tobcSd9ToRx7vCwMvZ9tsN",
  "key35": "5r99zoyXu1ap9jGYfXpH7gnZygeaVgPJv2VpRbUJXnVxoD8RzQ7FA4J4YrhuLYSrg8Zfd1jTE6KWu1x18MquBLdd",
  "key36": "5KDyV9rPE22kvoBbZUSsBRgnq56s7xRa7t6kDddz8XCTUbEW5Q5X11ragUfvCyQoBD7UKPFb2c5B2D9DC38fDMcF",
  "key37": "5kLVGHSnhCTkqeP3y8Puzu2qZWZFa65yVgQcorzTF18bTajzfGeHWhuKUqqjRseNz5JRhKde9KThjK2T9HAbXUFz",
  "key38": "4VFf9UdNcphPBQBfv1dNvEgjroN32vxbmRdyizFDMmEfehP1Ff6BanNx41hAk6ZpkeCqnHvCjLp5LwzxbnJy8zJa",
  "key39": "2SsGNzFsG8ESEUGXpK98V3anwPEM7jbBYBHSnRRakZzpEFguWSdYqgZL4Ckvc3kydfo2FwCnwanJiV2SrNaUd6Sg",
  "key40": "A6P5MQo4A1e6V7vszWVasaUR2emR34Z1EuCNcaTXnffEDzpZBU8onjGmdc2zj2ncRmhU1dhYwqbeX9ZQ7ndbvG3",
  "key41": "4bLeGnpGgP4aFBuEPPE2nqCAUehtue9EQyjeX1bcgbN4NfeereJLNwMPQs5qUtQShJKyuZ87D5dnVMj5XNYFPWC7",
  "key42": "4zq6GFuwWeNjV4EWB6dZofNp7EZQn1i28YbJ84otHxzTBGibYetQe7exGofsgPeRLCLtrSUDyhmPXJR4d1cfWvZX",
  "key43": "6V6i28JRPw4GfftnPySiBd81cF5cEKX3pCpD9okkiCWTAi1reirzDMSkk6Bia2G8HST51PcQWzKAMnnFqQ6ogsk",
  "key44": "3BuyJtMYc7fQyWxvnDb1JeZkb5F8CYuXgTQABToH5ojw8ihtwUiJpxhc9GxzLg97UXs4tGhyonETYgjXoDugW46f",
  "key45": "uqymFgC4cdrvjzkDczoX4xM8j29RPv7Stji1EVhu5f5z7UxmsGmwjj56PUBvTL8tFtHTAAcuQ1mEbMNjVLgMNBG",
  "key46": "3wTMJucrivrET8sPaSm1r31TXGjfwANZrHsUFTNDLmvErVL9siDVdY6bz1sRSJAzSt34f2xr5s7N1f7o1ypxgQfF",
  "key47": "vJLioAQLNAZj9GQuSr6jvDgbtP4dX2cHkmmZmREtteV1HPrsgbEjpdP81Kq7hykLTkrgYPFCfhpzHWEZ1LFSwzv"
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
