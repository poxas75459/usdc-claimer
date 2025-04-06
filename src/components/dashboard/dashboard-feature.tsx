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
    "4nHSfkhLMrfkhFShrvNhZREJ46rNVDo5BWpJiShsLdJ4CzbcVk4hrANf98GnYmPPuoJLafQX2KExnmRnfVGJA8Vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSCJ8dpWXsZgrrpRFAQp6hWSfuwdNyaLoNuNiYeKk3CATP3Zgv5nC6D9kygM7DXAHiYeHLb793Pr5Z577rEgicx",
  "key1": "5Ni7UH7LtEj8Cc76iNvow3Jg9oKquVKThqieWT5Huava1KNgaKtxhukyg8CiyM8FzfHMPP2asPWwFGS6ZnR8hkeA",
  "key2": "5cmXAm6B1s3kaN6tt4Y2kh2hY81BZvtDXB1Gp35XNz9oJiWaMf3BywCFhzYHC8zjJCvi4KXTFL5gxxxTDGNp7Lcr",
  "key3": "2kemoAictPLWaCcYn4sunZsnLMLxrMBtESYmrFe2fcHnjcdfZVNAbTKqtphLtDXeLC7vetk12BSAFAiwuxwafxxG",
  "key4": "5WvGYRw7prkbMciQbSQmKwo8oU19F2NjFnZdYKfndmhoxf6bJ3fyBoJL3BArPjZ9bpkzbkC5dzSGeELgsuiut9Zp",
  "key5": "nE6MYGxeaFV73EyJxfHRX7JCW42wm7ERe6Mxr8bdxMsa1A7n7svh74muCxv3XdHix4LGhCx28zwBmEwaAp7wx4E",
  "key6": "3P1DKQ1G5tE9nu2PTKY2Q1QqJgDhYQ8a9GPq4p3dgjgGGsLMjDTGSdaVniJSf2kn5GX5YhxXZ3QU91P5wq6E4z5V",
  "key7": "48GQfztogtAdTteyYtY5CzzhGNjGYxnjmrCiVxLFabqxF2TMusSZk4BgLd2wSxJXMWtyiksTXmCcFwQeVVK56jbs",
  "key8": "4STVoGF1QnaRXtypLEo23hDGvhTD3wTibXif1pXQseGMEACykvfUEKZJDQ9RmYZ2aawDb3pFz1VUKtM6Hn1GEKNw",
  "key9": "bsMJwELUgSi1EXzoNbJ2iFLXGoHkWhqEk88fqhDUQF2jDsezQt1XEvzQCstUspwju71xmfahk7yESUE9pJQwgDo",
  "key10": "3uaKcmGdKcfKNkuNAPEaTKJ5VNgBbZbp7xaDb77mSp2ajkDyeg3AjS4HLevmU42og9MThSNafE5Q8d7PTP4q9Vyn",
  "key11": "4VnTzuxkURHW3mXUPTqCkmyeHkzsdEF9ba2qGaf85WcrFCB34MXB3VQYWczyhbdL6Xb8xX7AHQt7gfKe4ig6s8WP",
  "key12": "21z6GQQWZeeEDjiRK7KBqLZRF6ETJ27SB3BBXTapd8cbSTgFyjQE1P4LRSsfT1hPvPGaKJfWgPVHGUMBAHdMjst3",
  "key13": "5tf7F3Qgs8DzRStCoTgwGwED1Tjij9WYncC6fdhTy9hrpu66gLTcme96eyACKJLCtJT1YorRsL4hC6Bq813tHdFV",
  "key14": "3Adoax2ZQqA2JJSME9BHa6ysLqia9t3tAxUNjVjNS8K96b24SkzwpHpUypJrpWWDHr9LPA15V39kh9md2NhQ9ijk",
  "key15": "2tea3hDfyg76J1oDi7hAkPoncZYHLnZeTahGsm9sWWfajKpA1j88kFWQ7zF9La79PtL77kX7uixnya4BTMJ4cgLX",
  "key16": "3Rdcqo5d9Yd9RrqcMo6xZdvVprsNfUrcW5AHyTW6eAR29zVaRhoL9HthqYbL6NZKVpnuNgJ3y5jiHD8hbSLgTnwx",
  "key17": "YtZU1DNDGpn5ayX6w67v3gPqXsaBpPM3p3hHEvd8F2R6Fp2a4v2QzNAXNnJ9jUCQzHqMtatk9tvyTeLZWyb719w",
  "key18": "t3bGLKoWQp8ENjUQEMVz5LW8LsstQNmHQwzTXs5cLmL5HJky7BpRQtdTx3aXqXJ4Ppsgx3DkC9wryb6YVHpXqho",
  "key19": "iitQMYQK8926UwBjhBXE7rAnmLQaA8evoG9FJSGMkrVEoiaF356RG2vUxzadM6AVgf78oTXA9caieGfkBdSQroP",
  "key20": "aCYpzC3hEVvpZPD2axkok6tBLR6KEvPSu78Hh8k4SdmkyjQQR3zbYXKENcncxRUpDsRiFcT3Vtj1ngCJBUdDuvp",
  "key21": "5RFVALoAzJ8i7s88DBv8s3MG58QTPVmLmFrdpuDwFhos929AmSE7MSAmfByrTL2tGvso6mukiy7bnrowk3TGL5uN",
  "key22": "WoQDJ5KoHXpNf21XkromV71BniEzHeBizNbcroVo18RbXR7Wu2q5DmfdohkuuYV6fvuyDiJczMeUZJy1d9o5UHH",
  "key23": "2J2pYgng5iibvZRzWGJoyMEoVzowjdFp9QzuuwBBhXcwtg8oMQW3xhjEBkB4VPjQxuZVakxD1XhCkEssg59jnaZa",
  "key24": "5f4phujfNZ1Vjv1jcmmbB5Ln4YTeqgfGHQGVDjZdTFxKc3QEGnXEsS9SJ1rxjkb9ug3QAZV2yKvLb5zgBiVBNuDw",
  "key25": "3dgHf6WdRFyD7L2WAf2WQHYVP2xE7MG21gPK1EkQoF2wf6GFW2H5CC4APkiTTtysuRibFRcUthfmt2WBch69VZTw",
  "key26": "3ssWZQ4oDSUD4rg9gA2uQQa5isNkXd27dJr5oiHfLwyeswaJNfgdoEHPw9VBRzvwDoi9wYvYPhB1WiP8aiqLorRP",
  "key27": "63e5CzKCbTVFeat23eZPdjtGbk7GDYNq2adMq28RQJMhCyMELjuuQMWqcL3bdYdX6YYMN1PebptDTsrPmKBX2cX",
  "key28": "4894k293av7SG2R1944xmddTNMGwwrdL6ZtemGewBmxZJwkDRK16HkxAgn4itjVSdtBHyCrB2vvYwEHeTkyAFFNP",
  "key29": "3RGY5LvE5gnXh7fHar1H83X6pS6aV6ntCHhRfcudgTmECVkU58R7okY7THQ9Y3x4KarutRYvTUtgrNSYt3EAwysA",
  "key30": "4YSq2AP6Cd72VSifhxDYoy2kWSLa4mk9r9KAJj9bXb4E4JjNLgduzBm7DQaCcimZMFis1gyKtLxfPe56rgzr6BT9",
  "key31": "3D6GyMRq7yf1djPhBJZnTDPLkQFSjeTS9uxVj7bYXZ8utzy5dzvY4D5YusLe9vjKPSRngbjjAwewJkPYMdyY3AbR",
  "key32": "5gnswcVC3RwsFGjvJ2eFbd46d2CzKBLcS1R4UdvZp8HCnsn6oTxWE5FjaESDfWY2BhibWfFvCVQo8MmmoY5tRgM3",
  "key33": "begWDZdNZKK8NzowekzsL9YwhPoaGor62tNdcMad7iLEcfooBrurjFL363aPvydLR4QSREVu8ybh6E6eBMCrEWx",
  "key34": "4pJ6Xuuwi8UjqYNFfxsfo1noomnGqjbjpHXJfbA3iYmNxoHv8WXdyzvZDjsRdeCrU6kwtnT7CuXC5DJm7VKMRon1",
  "key35": "4fdWHjmkph7ZTpawrkKiLMNb5u3bVDvQNqPWBjHG1sqKfCoLkwF8LdgqtYiZARhg7HE9E2ATVRbmtU2nWbd6wXYD",
  "key36": "5mkkMqcXQinq9NppY1fbLuJrXW2Z6V6DZQ7p6rVp76Cbo4F1vWZYtmqypRyVEKRqD3mpQnecyfrdtC9qJtdWszW8"
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
