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
    "2KWu4SoPqEnT5XeSxUWsV3g6bXmBHQT2VrTfdoFoFfCSBSFmYC3GmQSD1McuKGDknm8mfdAhekEtkYUvYhLd3gzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5RDXaRGo5fMpkDhZX1SbEfeYAk6En47VSk4SZVLhcVPmRoZnueybsrWMrqDDhcMFBFgNq64PMdujbi1SvLdHwY",
  "key1": "4LBcAJ68Jjcf6G5YFjJEoNuQMk4gpTxftuXNXJoaytYk2HVFiGmUH9SdkhhMKycHd8Pm6gHAsxqzbMQrvq2TRpWg",
  "key2": "28wBRHWHFr6nEcWzZa8Xtm2qH2ZkqrPC9ykd26p7NbuHf4GccppKVtwaEfosp4gV6z2gQ1VgdYguMmbTTvRjYj9S",
  "key3": "2SdaXoy7ZLHoBERLpiTwpVS5ycSrvHaAhyYTgWSTeKS8R18xhZmuTeYaGaFSJJqojj6pT3eEhPM2xHP5E9x44bu7",
  "key4": "4ZyxMWX7BuZcz4odJpR6NWKeehUe1dWdv6zWnWyykeFaFUix7v8mvapBWYfcQY2ga6ciXPwD5k4eQ77MivWAvobR",
  "key5": "pUmUrUcteGya7zGycttgTJWXp1MdWwF8LVSrVeXTRhFaqkg8WNXycLN33J6yLnsWkiCVWe3juLgxJPWocFbXPZz",
  "key6": "33quJGTiAwbRyGwE2BSc2GQzmsQBF3VQDvCRy75fwjoe5t2gZmRh8rC9LR33m9GW8vtFonHdVLtjxx7oj7KZbMun",
  "key7": "QHM9UirZ43aWca8sTFFH9NfhMqtitjjBxcxLNFh83NDmrG4nuYvi45aVXiyzDzcXEkuuW9TCiPFZ6J2j1FKuqP3",
  "key8": "4z5heCnrF2TZJwPcaSYqbUKcYtEUbvgqbNvss8jNPG6jymgAbBe3MW15NB6AefALQAevJ8A9PviUJQD5Q8btJcxc",
  "key9": "3Y6TL5D3pB5SwK8BWSpYE6CpCRR8iZkZYU7LpyJJzazHwp2mkaBqHQYEJoknhaRFbsd2sxNPFojs2ZZCh4ikHMS1",
  "key10": "3JD4ec4aaxJWGfex4atMf5EZE9i9xtidot1fjXv1B3AX7yJEv7VxWbts4C1u7DXKCHh29VaG3NZgjhDJ6dwPpXmv",
  "key11": "2jPcbkv281x2bYNAFXv5cbxfrMR8PcY9hAZAraUzH3zVNgKSuZPqufnYMAoFDmJJhJv4CYvdjfF29yhqXZysTtZA",
  "key12": "1NeWLzvhv77Q72eAEg4ioEngeaF17NS2oxB5iQa7WESAgSYN5GLTq5QZuteknw4vy7weQu3wis1GpyY2ohcSE2",
  "key13": "2FavjpcCUjLo5QXtG9srowYTjApUMahFTfv1J3GiZ1eNswJCZVhqkmP4NpEA5aVx3Go3zE5xzmKeNszyH14BZv4F",
  "key14": "4EyQv73QYZiWzeeZ74hCyPshGJMMdsrj1X9CaovtBq7jsYqSLNcSRfTA77qKvhNHvQbf1Vi6ew9eVZxLesdB3oPv",
  "key15": "Y5yGeMeuFBfz1ToKpWihjZpPVjQozM3NLkJGQ3k9gHpcXqKqSdMnNnk4Ts8Sk2gXGVDR8KcF2G9gvFnYjVvhXvp",
  "key16": "2Zxeh1EnPUDuz6uFBkQWSp6gLp4Zqd2k2CMLQbiSZM2FEwiujS3JygjsXNEPGhiDYJuFXxj1SkJRAu27WKYLbJKL",
  "key17": "265TNMduGEKKQWm8iPFqd6qwHYhv71BJEVcmJbg8cB9F8XJ6gLkTS3SVQpxgoenwHxwhhGriutWJ8rsPgffFCKKF",
  "key18": "VGtDNy5GcJb8tNwpQpxo7nzqRgYoM9bZweStijtvjDR9qkpmWxXXbRFtgKswgS6wFQ1xHcKQxRUUvStKwZXpojg",
  "key19": "2YnFcrKtShAkdXjMuUnV8cizv25D9NZsXk9bn7GSAtXX2PazANm7mhAaNFAMMV8n49zzNAQKqv8FewJbw3EWmkm5",
  "key20": "2EapmkZjv5SBAmwsRq5oR8CuLJujrPZF4HQJ2E6HqRPdw12uM8ZnJhnzb8NSSEaXsBeXJDBEzTYuodG4cez5tiXr",
  "key21": "aDBg6NMeCL4LSjDN4r97GaSfFqk2KWNweeLCevdsQ5ct6ta6kTQt9p4JB9yg829NG7bEBMNSYR4dEersKNBZfHM",
  "key22": "2KneM447E7AjtJR5qaK7jFvrzTgTWiQqurCYyTEFk4A3J6xcLXAhv5j64affKDxGboSjvTcMKdBWxYMVWv1dpe9X",
  "key23": "3mpsnDsFo3j7ep6RbhvNy7jGKuNgQ8T6REiQ4W1LNTdAsdLNu7hFevHBFgKvvtouh9yFLgmaG4hk3oUUxF2StZ9T",
  "key24": "48VV1ZKaRT6MdjYzrofssq4uohLgS5zDqmHT3xR87QgW5dpApfuQ1HcnyMFRsW95iB5KjtFeWH2RfWbw8VjmHJwz",
  "key25": "25i3Vpp4xZxBVSdRHSA3UTfzAc4qyRjhULsfD4nAQdDxsrPZYY33sd8qXSMbYwXXWU5oTDyN4ft9xwz3KuQempks",
  "key26": "5AF6PcghBuGwzXttF68XhgVienXjP9PKC9RNTxM67PcBVAyQwT81dJZB73RPonjXZGcfBrdH5iSNHnJTBrVYdaZV",
  "key27": "2fzCDvECnkrCbQa5mGfA2vSkTccrdwv4oNyia9o4R4BX2Ne5sQ4iZYQXPwUoavuunqJUx6Af3jKLJrfPnrgUJuim",
  "key28": "5tzZ3uJVwCN2mfDr2PHpvxTT1haW7YpaoZ2uRAtBFytVFZFJuovV6Nk3cdiwDEijTejvoaQNRPQnh42iTVVqirG4",
  "key29": "2c4S7i7xB7oBuuYqexoCd7weWeRV26EzwsynoNopsgXEmK7hUr4NRycRq2hQtyu75toaVkUHMFDyxhGur9ix2bH8",
  "key30": "4JcNxPaieTkCs7C6okDXVqgcD7wjFqpaEWCjtvQkhWAa5ptX5Kbu7o8zgbysj9iWMQgMhn4JE1y8223MxKDz5NLp",
  "key31": "3tDjNu95RXtogwpBCHjXbYHN7ndGDKeVaBryzQnhromQi4m7Lym5F8KoTQzjmpdNTHi9x548UoikpqmdDS9gqzBb",
  "key32": "5r3nkCURTpYHSbAgQCsV8VW1Usej35ZncrzHJioAuLVAZ1faCWPi3aDGuHshBTbAkM31FggVf5TxyZAFBKL4dMGk",
  "key33": "3AaLY5QZ4ZuAeLSoc5E3GLTZEKNaMZxUfRD4nnkTQgNRLoDNz1fMLcV2sVmN2YkZXwU1jhTa14RZaV1hih6kTsYe",
  "key34": "4rxQSvsnYGgtV22XzQoWQC1pphXK9vShMUpRb6Vr9xCyAzmYUqbbrmRmSQXtFDMhfVwm92WrokRyvcr2YQngNKZg",
  "key35": "5Jp3MMoEn5rAbEkrZ3Xax7FMW3KWyGzxvFaK6EXTzimXNrHfTbPELq5qeV9poFVxLcsyvq4A8ce1yPTs2kwvqg2Z",
  "key36": "4Ysvxcer5ZyycxRTxoYLGMqeuHkfUb3zQrLf3G2eiQzUen7uWkvFVG2FaX5Tazz5H1Raz4B6EkzR9b2x4FTPJv5j",
  "key37": "5qyrgX3gJuYGKGBevM72NSnMyhT4WNnc559G8TX7FJ2FeuhECmoUuVbH5EHgo6uVUUbnYc2MXvMCXAsg9cXQGMyv",
  "key38": "yaa56zmqVbcHMd8izdmrVVQRVVJdhEEz55vxUX7WpRahm6PNVaZS33hZDQfEfHjzNNhQeuGac2xEkStsCfZKSeM",
  "key39": "5iqLbQmrpztskKiHH9ocRM4DJxqFHx7YFyvCCYGGYkLUQDSYNPLfM1DHx6EMKZAoqBSVXcUd9D42p91rMKrCLtiA",
  "key40": "3BTi2AMnVJLKkqa4hRkusgmynEogJ3ubAemi2CoL74U8yNqNLzGNbgfWQ2ttxz86rp9aMVk2sQtbEkpXbaHLxbzd",
  "key41": "2aHBo2NtT6DBis5DwkphDrC7YgZC7d7fzARhivzxTrTNC3XCKEkhxTULfEnsCmjqhHccLTKJvFZ81WFP3Dz888Ck",
  "key42": "Ks5wxdczvfsP5iXiGAG44midZwLbxNM4iPNSxJoMBRt44PrZVm7XXAi9X88sL1WCvb4kw5JVzDvYB8MWX63yyDM",
  "key43": "5cGJzWnS7yHm6YB6WJEKPk5zYhHBsZjaNTf5XV65UudYyApTVPyf9Nhggb5dtJLXgTG4rANruG1q61hzWmWqAX66",
  "key44": "3b4nmVcxYraQEw7xDUFo6hBnycLw1K23Ev9Bm4yiFTsFL7d6CcMh3viaUE7N4MdpqcQqb4NBmGuJVjuUHttZUUQW"
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
