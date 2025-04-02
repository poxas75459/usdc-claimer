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
    "4UiK7Ev9aR89WmeHt3UDdvwH4SbjPSPcRZyMJaZcnV9t4MumdyProosbgAXcYPUvccv7bB82APv2YpP9uUk3ELnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42w9vbJsRnBXHbkvgDPVrDTZaFh7xx56vADdFpqT4WhMTgkD3JJNDUo97eruUfnRtRsJYK6Wu1wZxU1oyzPeYsyK",
  "key1": "36KDWLvvtPmXx9j6D1PHGdXigcdsrFL68oLQmr3RvjsGFMkWRjqM8JbGoQumZG6a8EpPwH1dDyuiYsjLJF3T6gNw",
  "key2": "4dHehoHDJC1SyLQ1roEA58bZydZeUvPFzRNUSwXbckkrYGcTnUN8ghbSFNrg3shPnVzwp3mTmGDpixkkmDVZuJ65",
  "key3": "xWDDpWkX4S6VDitj2V8QCmSuBzdAyQXSGhKQnE74AcBykxoxQPgg4oaXm24ZC3o8FTeGAVcL5vmDSq6eLi5YyGw",
  "key4": "3Bx6iQJBtvXprmT3vfCctnVZHE6b1uaEhpMbwvMgdFe6Zu53sN86Lun369p419qBnQci97buaYiLpNdu7WGd735U",
  "key5": "5qFwj8hygGKw9pa9oz3WC24cDEyzwELaaEHQSSTXZT53u2m9kX6vPkWt2oPLUgGBCnzdQxwfrMqcz6Ax7XJ7ytT2",
  "key6": "PyxmsMDdTb7jszaSFBfNa5u7hZvUY5Z4Ra87xExT3GTgPCcb1qhm393ygWK6oYPi5fii2TNWypp5Gr8Q29qhWJQ",
  "key7": "RxDieyrdnrt96rCZYpcbMwbmWR3zFNsUb5BP43exS5p5Cf6AhEjbERCRUHY2nK5YfLua7HHAVvrZmWBmDpyHy89",
  "key8": "51V2ay4jDJdnKCz9MKGd1oDRFhQN1rKjdXtrXuLhCustcuim14qiowsjMnqpVLfLV486kt3qixcyjy2NhQSr6LN4",
  "key9": "4gZvgv4gJAbbYUQy9NZX5j2jnBva6AvUjwnArwBAEYE2yUjbSKGas6VFPU8LYSajyeYqURErVvMZv99xBwhr19sr",
  "key10": "41nh7LDgGSprzHeqxemKnKfo49zJr88vcHaMeE3grmKbMJ4pomw6DbbtaSsxgkTn3jpcz9J3hgn2w7J6UXCE4JLt",
  "key11": "2jNNGEqdr6hdu6nRb8TWtGaRk26R7o5wrorcqfBakgGiUx2seUPQeMLgo2ph2xJj3DL5gxSKXWy31iYjCAFqapu",
  "key12": "4REAVVebr2ri7bTASD2UEcRwTehrUsBNaLLr11QtanPG8qMkQD4dTqgZACDS8vGQhFqQTieY6XdqgmPR1feGwjpk",
  "key13": "3bLr2bBB32CRY1teL47YTmhfHWYah8uWhbCrjLbe1KWNqqFTNiJaHhpUzvCPLE1ActmotGqvRCrJk8pPgy3zkvS8",
  "key14": "2wrmc2X8ywUjYNoTGRK7k5CMyBjwyPHtTUYRMQB9GQb1p2DDKeLVPk326h2VD3m9Cgw7c9xWHMhopcrGykj8NZDi",
  "key15": "5bG3G3RjrS43rg8uJkrwxsyidRrD6mWuRrbq2p2Q3b6Z7XV27znYnQrRoxxAjqQptSLjEERNDgf4F9FVv7K8azSq",
  "key16": "jfs6RtZhfcqGib2hyaH6b95Lh3L5EeUA7xpHu8n9D17y1m3epz6AUKAU7reHrY67UBe6RZYMg8zkuXByiyaxN2d",
  "key17": "3m8Kv418hkKhPos69Hj4KQnYeq3hhrNHbj8kGULd3djbwkjvFxqjrKpiWj5Co6XyNTvS9WkKQ2qSFWA3c5PCSEgg",
  "key18": "2jjk1HxyKw2UumcdDRz8g5arQ3vSxB6mTDZy5rvrJtepje8kCJmkbou8vfkrX1Eppfc9rW5cZDL9EVXNqZ7hQ191",
  "key19": "2mUrU6kpJq8fGjUV47oqjad2kTpo1cHtwtKMgyd4HPrspnsMd48EZHBSoCGm9Bn7E5UyLJ8cBXT5pSTfQq5u1M4t",
  "key20": "52FFTgSL43iZUfyXgf8dR8XEdQWhaNYk1gTdzLxLg4njXyVKBoWskWjX4oytZqmmf96Z3Zx6uFeM4p6Q6e7N1h4P",
  "key21": "2WwXxnTspaUjmuzwFGHFjax1cMz6ubHSwP9cgAbdtxhYiW269WGzUUe1NRoDPczpJcBgoBVGPDjADPb3PTFXX4Cf",
  "key22": "5Umt4JaQB2B4JqWxWMWbgftetBjADpnLvov3azMhArb3pmc88gZkvR4mrRiPDs8KsrWUyg3xmF6wfrGHreWFL9TA",
  "key23": "wEDZGvaHDnzu2tYtpHGPACm4j83LBxj2GVBYscNbeBBj1fUzPynnsJ48ffTe64H9yiumW3YErdixKRiY58rSy1s",
  "key24": "2RA85un3EXPFGriQ843iRw3xDfrcm2qBdXKVXvcEXgGdsenpfc73BvrM1pmmdXZ6dM1krJ5HNSDq7dcVFzwu4RSJ",
  "key25": "2hLpshVXF2MBgnLcj549kxRrySb2moFvwX8wuTAczwjKXEYEkSBXqqcTLcbRDDw1i7ZtGoXUGuYr4vVAGh32ssN9",
  "key26": "2CAQPZnC8wvzeMFiaNr2W7g94atj8CXeo4XM77CrqWQSc7WkgLhXBS2d6n9mQRSdLujWYbDUrhPRgidn9Zv4G9z",
  "key27": "3BkkZ5BYbcvqTQjU6yX9ScKsdh47h7b2s9rCtqmWx8HxpeoCggmSg7mT4WCCorWpyLRjbGAmU6sT4FMCzEVKRNfx",
  "key28": "4kEH5T5kkSTEWMUewCQ2ioNGH2MBryutySD3yzujk1pszrkuKXG33anGf3jFmqUnNphsCigTtHFbxLWHghzWezcm",
  "key29": "3yZRsuL86DpnxNpfvjo6SsuhuMGSndua6rtRZv3XAkHVpdFyH2vEiN9LTMmUjxwYKwS8sQRLSTFVG2fojViB5sy7",
  "key30": "2hdTY4AWTJVEMJvwp2xzKauJbM5wzeGpXiG7MRp6datx3VpsPQq3oEFpcfqEXdoLBXeeFD2WUSiPrbuVaHkLNUZt",
  "key31": "d17cNMUQXm146KYqcadoBrsAtMdm66ibqAobzKJimjAXrvU1moiPQG6D54gjJU8pfuTjbqCUw23LQcfta5vFpWZ",
  "key32": "2RWr1t75PsHGFiGXnpDPHitDw7aFQbXFdxjAwaYJfKkSQ5LgCaetdGUSnAX7mpZZXqtMK8C5a53eqC76KBBMVtJo",
  "key33": "453mXuqJLuN4gUUzSVN1MbyMGhU8bZkvp5UGriRLjoaxkoAkKGdzeF8hptVAaGPee5fKDUN6hbk3sGbH6XJTAU8z",
  "key34": "2LicrHWsGKWWFk59hJMsKQFkXWUNJ4QAi7xpM6XTEFsu7MhTR72GdyXotN1grwt7GU4S6QcRxFbKtidhvJBnyZqR",
  "key35": "2M94mjgodDHK5E96XJsujhPSqJwHNxNz6FPoTwKy1VmvaWQD9gs5mb517bo42uKEnzfBR9Pw1hyKGiGtbuk3Boso"
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
