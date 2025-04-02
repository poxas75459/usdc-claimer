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
    "4NWrKBqpvMvSp1TpDXNuiav3i6Ynur45rRENsky6MArkKpTDP1Kcjz2Pyb43psHA4w8ShEsALp7Ab3PyescViUw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wb2qmq8eG7jrRfb8VtR9b3Q9vtmyoCEPzEV3jTfMKfyroGdfmAimd1CibAwW6VLrRFLtg4NK5ceujvqRushQhYJ",
  "key1": "4jsUviVi9AEUHu9jLVBkPZneFW6iahBg9R1tWuxuHUt7xLxjpzw5F4TyKX4F9t6xXU3pmGqwWWZzDUu6YJSHPM8U",
  "key2": "4De5S6xdP5WW7Qr7q8SiXoJEkrptuC9dkuXnrLSKbQ2gyJiCranTFo7X4YA1SSHMc29sMs5znuayfbVDUPsUxzxG",
  "key3": "Dg7p4tgSyHSoVGBPUFWpKFKny9pgoQ7L1eLA3mFc8ChciPKcGP5AWa2wNANqHrTLMpFaWTQJYJUaLR1MyzWiohb",
  "key4": "SgowYot8JtB35Z2JWU5szoV7maLyn5ENzXSuXyC3gqLYkkbZW5N2fX9eBsBrbSeVTD3U9bHKuYebNgobvBV62H4",
  "key5": "34VT4YCswJvH3h26Fubg6o7m5Fsg6n7g26VbZ77fAUsukpQe9fLhpWVLoCtsGQW26kDHJhCiLDEWhGUYDcjmMMJs",
  "key6": "4DAMaYtQ6ca66Rfc9N2o8WbqarfDh9VcpUkqDTzZgw6EtDyEdJnWeCUsdBtnHc2WXtMfSTA5FLkhJrJu8GoUWXh3",
  "key7": "cPPoTrvDAMF6A5ma7X3NWotmXLBr47eYVFesc1rZAxFjYMc13cLSwhqQRa2y4ijLTUjjjxjb6H65xBmzpM3nz1C",
  "key8": "pS7Y2UsAiS6wtVFu425iLyaJinDhbVZKSEDHmRad33KUBDyjZPbfuJvSxGJTdnYjKGPyAMRssuSuRk45tJtq9jd",
  "key9": "3M5GprAo7nfEcE42su2uXGy1piUkPxb8bS2v858kUtdAXneHrm4hD86SBwSWaJZaHRsWLFbKHr4zkL9xon4fPssy",
  "key10": "ggbNi9TwSX2Ud69QcLxFHMQ9YJpMrdhcQhnxC49VQycYC9zca97gQU4PWZGJEDDQvGBQPXYBxMmQab3XQ2nrYap",
  "key11": "22aq32W2p55pf2PwPZj93kd8ZeftmxeyxZSS67kzVDnxEVBTfmMjS9MLeZJ7Xd6UsDe4yFJTJFsx6CmBe7DaN2iB",
  "key12": "4rHrHK3QxVpviceED9wCdpwhCs4L6CNR4e3WFAM6ckhTSdxsvf2RfdT9aM4mibXypFbza8FGpTPxjh65RnA17Fo7",
  "key13": "3rsZWjD86NZpJ6uq6nKSvmmwajahrjaVuRnLeZnbiGojiFPxqa6HmPSBzYvrF7WT66QAqcQiyE7vRH7wvEfSCw9p",
  "key14": "3o5G8iJuuWPT5VQsUpg9ENz3b2CeKxP4Vt1ZbGLRcHMjoBqwvTMrq4mB53DrZutMvYPwPdaF6wEpacmPp6KnNrKu",
  "key15": "5RNuTxoCKcmTS47zqt8quDidT1gVagnNdKAuybxKLcjjz722gF6VjCDVmtQxBfQJpYQ51t95typ3AhXbpPvgqJZ2",
  "key16": "Eggp4mLpyDaAe2xRf4MGjuqugN2p8ZrFwzYy5hjNPu1Ma7D64dtFaorxiTVunzvJ5FSw6724imwMb6PqDoFWwh9",
  "key17": "5do5eXSkk28QmV5YW2aBARVyNkqX7EjoaRKYvjCRJTHww9oGDZ4Ry4z19J9yrbufwJ1w9yHvjvyxGBWeRdSXEqR3",
  "key18": "5UuvEgqyzJhE3a1FdVG2tzTQEwJ6BBQiyM6AF4HcQzy2DgURrEnAbLa4kg4R9yaxgJyRGhq8CzoYmVyh2XR8NXfg",
  "key19": "242yjurAhHUv8jkCSs8fbPK711Rr8BSZ7zEE8KkmNSxUJQrtWo5wX6xV8uQqJWMQAaAhqcBTaG5o6z5Ccj94359S",
  "key20": "2yjvTCBM6f66erYYioU5PT3zhHCzbpkGtceuRWQPi48Dj9ZP347rL3WA98sZUPUF7gjiN7BFZphKcrLbb7Uqrr7a",
  "key21": "3ajEMPLPSjqLufKabVVzG7zm9of1ibpJgjFjzgkr65ca2StTFrZ1hjPbpRVZoo2GuwSaW4HY5KZBpPW4EocqfUC8",
  "key22": "3He15SsPsLLiwsWF1sR5FzFmiQnn7qzBkJ4DZ38e1WBHYXx6FLNDcLRN4eNr4HhVh9vyeveF6TZBk3pHhNh6hWHZ",
  "key23": "3MobhV3rubRcHZkdrp3VVSHVurFd3WRNnn6LiHPiA2RKwMf2p5qixvZmVLijzaFC8agv45VYcwotz9XN5sBtkM1N",
  "key24": "5hQCiv53ec9d8XtDKZa4qt4GpqUv1VrqTumEQhDcB3xq3Lir3cJ9Sg12hkeHZmy6HUFKeugPekgKQEG6WvsJYudp",
  "key25": "3qXzu8Wv3v8Fqcys6mxKx4kcJwiMmNPskCJZdfcDZhYTn3zt4JaFzhq1ccmR5fpXyqEbJPhvS97jaeJRkoR8zRQM",
  "key26": "5Vbpcqyf9NNax2iN5zRZ5tdjbMuJ9FLUE2kWrGexhYG1ed8MfqUmt9SHAEsDq7fnKxfpEHQqn3yrHZdmfRyudyak",
  "key27": "3qBGkDf924SwsNnALjSG7o3staYucW6SWMWggorhxc1psmdWd88rMYMwzfVLz4ya54GzAwwvtN922TrHdGgn1a8o",
  "key28": "2wvJHkSJ76QKPTYondgyWYCatwSVEG89n5UTWUwn7EfrHEwacREE3sa7ZSXwAm1fzVNpMa65ieiu4ktu5fb3PtsL",
  "key29": "45L1RCcAzWA1XD8sZZwDErn9wnmMbCfEp76uGgoKBGik8fxsM9krJrGyyKeX9bup2nHLqL6AhQfaT83GsvcohbNW",
  "key30": "3kyYt859uriPAjD4esfwzm1NgFfgPQtXoJpPqGCS1sH3RsqoSpSwi2FGpppUL379dX1FPwkdX2mMUjJpy6S1oXGW",
  "key31": "4u5JHuayNV4ZGhjkms2n3vfqHfo9LPf7eKR1JJPPupNZWDNc3JHYReXmn6F2WLKLPtrPio7JDQdgEAjYVeS981wm",
  "key32": "3wBkRwq52jKVRhqu8ym8DSVH4V4dn4XaNFLwb8wDH1kScaGu8LsfR8A4UX9gzUNFXPYnwXavqYSokcoLR6fGGqHC",
  "key33": "57yqRVcyE8Y6qyykGHFVnBsQiQUMNjvEc9dJadxsYRMaCDPn5616pwEU7w67GHLT4Fvx1DsV1itkrgyqF7G8xTc8",
  "key34": "C2fzENfm8HpunWgyya5UqpFvBf9NXGFS4T5cW1fD22QTrqcvXZZWU8JJtGYetZHfyBJM85nTXajcBKBBF3GE1Zn",
  "key35": "5E7ZeVDbYWSAyReeDQEXvmT1P4ByntDa8JLZZYTD8mFSa9UFQ95FwbqPFyXj6Nha5CSaZYDL5cDdMoBqKRZjcTDn",
  "key36": "3pHBvgToiPThGLzH3MAY5emcgE5RvJ5vuyHCDLKWNgMuqzGCkoKJGMEBXTmwanpfBrYohdAegJefRDThuc96bNtW",
  "key37": "2sk5HeJLzwK3aXUu6UHwjtHP6c9ET2PfRB8q6a8rRAb2aVVeaf1PMvPPxqdjcHMUFXLBGPiYhuETMZD9hDNHLSyQ",
  "key38": "2akiYEioha9BYWmcPXNMf5dVGppNjUKjc68V1VmUTs7seaB1d75UZMCuN6jdu78iwVkxwsSAAH3oeoNDAFexUKHe",
  "key39": "5xkGrkhRT2fkN9qSpMMAabuRQm4DbniRaykzD3rygyMwKiKwuKDEzc59cVvECmmB5N25QwX3oNZtxavm5kaNEDW4",
  "key40": "5fLuTboCyHMtaCcZGbJu1SnRFCZzyYZLVGWqPcFJE9zTk1iBhKnWcfXZ99p9wkq9q2YmuT5MWTAYErLdWffUP2yF",
  "key41": "4sAd4DveEwyyTF9MqK2ZKvBAKLjcwbpg8bK6WrSBopefer5ZJAaXEVhsS6dGHcPuJYrnQPZesniJbK9SGTnNiZMq",
  "key42": "31E8hYEi7dyi7hjJt6apTHaZSro1sJoWnT9dmj4nga2yWekAeM2bavZ3WS6HjPrvGsvFDzr9k2cdJTh3JWjJKA32",
  "key43": "y61PMhDD4FnTAJHVJcWMAgy3cyz1PY6SsutuFo2kbY7DuaorRnv8YogXMDG6ZVk9JgPqQ3NEqd1VoeyENLN9EbC"
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
