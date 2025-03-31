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
    "4XzmA92ydZRp7y6vY9DE9We3v14gGLomUKZQnDJrHNNTC2MsCAM6nAWY9PMzFjjbMe1css7moZVWiyKduVeQLWAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3USrARRVYyCo4GnCJ73PmUvCw145u8HPfvPMK1GdKfF525NzBsaJDZpLN8pbifKpj1xbF1QKk4UxEAFYwayEQNfZ",
  "key1": "RFQoZuqGSW6dL4KuKEEu6vBsV4qerbeVVDazUdNuWm9R6hZsJ7p7wpgtbNRucU1U35WJN17KSJsspMs2eTWweky",
  "key2": "2Sc8KA8KNYygD4S9BJJ36i7W3fhVkvRnjyMzMJLZ1LuwhyGvuuxAPaowrmQd28GQymtKtc6wnpp4nua2Jbw7PtyZ",
  "key3": "2GQ567hPfWP8mYn3NH1PkEuQmUhgzn8TmYt5V1DMDrMGrnfbtBvMNW4KboDE6hNUUei2ssAewZ6GjJ67jMSHhnWB",
  "key4": "4yvt4NpU9KpnngXEAQ971YrgS3inmhrM7KKGB5RciSAd6Qa4LY1TQnHjuN8Turv9S1oBhiAvQQm7pDXjUNCz539S",
  "key5": "4wQYpdE12Ct6wLxkKTmr3TH9SMZ7unFY2c7x8WBZZCirL9GzfZeV7H15uDdzce2gS1zNmFA8M87BdgQaefMmLQcN",
  "key6": "5uEJSWtQgwEdzxzMQHNQww2owzLQtgTYweieU7XWm3BbBVfL9VDtwxedMvoUApz1ZY6fyFRFoStYjzcBgYGignkR",
  "key7": "2zUxqv8aTk11w4ZCdkMFhmn8ExL5T3YvMf5LzthTsSQEHeRQdDXLEPozaULyPv476VDeQ1NSkJC5UMZptaYRUHfF",
  "key8": "3dKNcixBip3YALcvekcVPpV6V3D4js6ksn3gqEhDg2eddWhu3JyzUhobzH5YmMQ4VxXjntqoyfAMb9wc9DLozDtt",
  "key9": "1VwE2CQUJuPN6PwgNqfJ3vNNbKFXgCYZdQU1Fm2kV84gaaNWbqx8sTHriXCjybuGsJ9NedtqUZkinnJHKmE86MK",
  "key10": "5qKv8rzVFKt8m5wfMM1fEKhuZhwrkf6Ku82vDADgxiyotuzfsue4qevr2fFARDQDQCMbXA7oy7bbmJdfpVDAfUNd",
  "key11": "jH8xW8Ro1mSSoUbXNYiQ1oAdMQPfgFJJcUcHZmax1JdiZb9BV3vFnELNNJi439zKPEvakTbzRgk3hAYDWgQUChV",
  "key12": "88jktHMZzsJZGYP7oMRiU7HbPbY57TEhVAiByzeuHjKquiBHBfdKLzu4Qu8QZGmGHgHMUsJr3bt8ZVCnHkCMDSW",
  "key13": "3ZUyNoDsQTnydLaczRQ3J6uUzmVV6j3bUDsVoaA7FmuGNA14msXmVocHwyB4CAh9K81rgZEmX28vRy5ii1v7jXMo",
  "key14": "djLhiSAWWjwea5L3iQUMgj4iQoBEfWg6z8erP3A4QbcmbMdDmLo165yhE1uj3BxHAHHwZQXTgczRScptQXG7Rnq",
  "key15": "4vybjv8DTr8nNENSwjcAo4om7yuiwEhWTsfAfpEeYykUYEK48pCqDUy2UpE1WHP6fa4uZGXdM3Pp4aNXYFtBdgK6",
  "key16": "4jtmakpnMLCz15RpRDRXoi5pvWQwM34h3CnB33YjbKo3AHZgwLfoY441j1NgrFkaQppGiP5oXbordp2KgZn4MSZf",
  "key17": "4e481QK33bXT3yr1WJTTQp5X2Fm26gDdq1fzyCqnedTZEbZYEZw1BvLDe7sB44ZBYwnpQHoTL31mN7gdBq15vkH4",
  "key18": "3dHKT31BRREC8q7qK4Aqr8gck3XF7MDxQc6eENgJd5sSSU1HRViGMRAUT28oKDLm514Vn14acvyMMgRZUpVtZv6B",
  "key19": "4wkFBtgEVMBmVp7vAcRcTQ9yoAobkxPLPFGjnFnJBxVV8avhWR6M3TecaVgaZjQPrdNrSRyZh3k7H7hH938bEZ2G",
  "key20": "2axPYzcZ3hhe1o8uQgihWzgrn1fMXoafPhuYrgqj1F4Etcj23UQPH6H51SHQE2ms541f6hLWYothVT8vSERjecna",
  "key21": "61qnqrRN4xhmzmmgG4LYhpVQAndFAUDRYP4PLDAsfJqQ9bu75o8Rdhi9GeGL9gxELqYLFZpC1rZGKbppofFANE4V",
  "key22": "3kZgfjfBo5t9u63pwhXSKGmb7pv5k6dSKa2s11D9gHrDPTeZx8yMvaveZNNPx7zXeUSYFM8fi4zVMRpDUtt472sr",
  "key23": "4amvqbhpJBtRDwu2H5RCBDdbcdCGfvqtbsD5GXXhAmWExgDpvkJZyxHDBfWK2dKoNEieCYeAyueLD7E3ZArEFGCJ",
  "key24": "5KvRtkKrCoZAtwNTBFmq7iqFbqTHLrmYgodzxjwUo4hFc2UBiKH7WixN3Erp3uqm2YchdyU5XAGXsUknTMQSXJLt",
  "key25": "5zD7ZWDqkoHLYSwLhkc3s8GcThP2jZXxRr2PNk86XPj9e1SPSsqVc7wUtuqct4aGLgbxqqHttzbcuQJm128oFqY3",
  "key26": "4YGYTHZ99csLFowXm7WHRDTd1178y8KGWYtjztyDrqEDNdkKu1rr3EvZ8ntEwoDg48nRVYufuCDrdxZbmM5Aidmz",
  "key27": "5wCFYswdUUDS9ayLpsWBdo6ym4iPMHJdn1W6HoMjCKC1Ast7HDsESRR8bHqgp2EKE27vtBNr3r4qyFuFDVhJnyjC",
  "key28": "4HHL4isHZ5qZCnC12w3fANm5v18dF2J8f8AeGgycaiT9JRu19Y1HQDjGeh11qyQfe52W8YcFRj1GGBQix2ED1E4c",
  "key29": "2AbT8kvJXioA1ioHVqj3ev5TBqUmMvNR76MJTuGadKbBXG5v65nitcf2sZTiVQvLLaYzd7TT9E5Ww9y1DB1YKEnw",
  "key30": "4yNrceuxEzfLCe2coprZsPfxMBALyx5Ttynmeo8kcPhDz5mTweBcMUyPwV76HGKEipuy49qcXh8fQBhCnY1UrKwA",
  "key31": "2SWqSn7AJfDXySrf5Wc9GNUsJcUceCGZks9Aj5ZXD3BGJBjbs7Q1QZaLWW8fShbwX41NEkg3C6WLv837WCK6wbp4",
  "key32": "5kHSmmmR2tWY66sQ1HbZXWgimJznKTBnWFkuYUk2BKVM5U3RV8UjimMAL8hhFSQ2M4AEkhugVG6PNDiaSU3uginc",
  "key33": "5MATJ1hdTuPYdpda3mcCMbgoVJQu8UbLtYJTG4kKQbJjHVKGnoGqnyjkbFhwunYkcHnoogLVDSyaE7mSvrCbA1Vz",
  "key34": "6UKPHuAtwKWKWLprfE7sYrFh4Jq6BBRBCVcD7R5X7KEVMeVT2AVapF6QsYLgBd23gHPfwPwsk3q4DX7JaViCDmZ",
  "key35": "3kSM7tcWt8VRPQyGRw4RDbdojjNAsr718bHh7oYPHiM24rWh1jJEt3bWUXuaCWBVcQLLuzUcuZTJNCJ4A62D4icD"
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
