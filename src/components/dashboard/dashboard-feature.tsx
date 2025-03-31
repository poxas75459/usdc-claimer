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
    "2oU61SKbAo4VwAhJUNhg1ocqwThMgdWgov9A9e2DoJaii7XChFrH8hCsNp8j14ibESdm7CY74vvNUmZC8UqPYqRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BJnzLLz4Tu7qeweCGUu6PcadU58apqobAepBXFdkpV8dw9Shw8EtSR2GnbM8GysiyjevWVNt3CPjHAEH6bShFYy",
  "key1": "226znVXunR57nfM37TaD4g3ApiKBF1HnBsGtBeyChXHRGfiNB5tfRhVzoPuBGSUhuFxxo4ewQFKrQ4ecVyCVYZx5",
  "key2": "5DCK2mXjhAyXVXxrtrzhEDHuZ1VzPL3ee4D4c3oaYT1eMwgiAX2FKuX1q4rg4V5XjhAEiHhBCUDKG8U3gRaoLHnN",
  "key3": "4VaaqK5jp6mhEsTrXz1vcKBAmt7o5bJSoWXoi1NaiHFe4x3QTwiPK9nmic6ZTP8J3wv9k24jcaq75xL9UrxLfp5G",
  "key4": "rfDyFpyRq8LaykCqstXWELNuZbfk218aTRSiZg1aJwmkhRqVmD888SNjhgPM4xsAdKH6BcyBoBXbhiLvfAUEYBs",
  "key5": "3zMq2tMcSdKFEDiHAQMn2WiNdz2pmq3Mc6KnYYeeeGcquStx7esW9MQEqvxcMmmwouUgiLZwEKSVUVroBu2wQhRV",
  "key6": "5EUMaaMQyW7GeNKU65fhf7BuktApwdPH6YDwC95FYht1PE4zjTdZWg95Fw1Um9pa2tgeafUvXMgoXgZ5vYdYMdFb",
  "key7": "2p3kCPLr8QgRip5Jg6tcGCAxju7EKHM4zhrBhXtBHyGW6AxoAkt4c3UZXBkwnz7GS1z6Xf14k5yBkkCucXPRvSyT",
  "key8": "5q7p1qgwZYHNU87wWyn1rTpWNzFDxHy6GDn1Et34gm2zA29saW51UEcvjShMUpuDkRiF5VC4y2CnL5z2iYGH8Tkt",
  "key9": "59sqR5tnCboNSftaZbop4tjieq3XGJD4XB3zxjq4qKbQRhAL9KBxu8BjKeR1Tr2jbdmvPijmKqeXfeHM5fHw5rr7",
  "key10": "4mtBPXiEsde5C9xFvpbGazjt4ehCr16biPQyDWxzJV9uZrvKiRCQjfaQN7qs7H13Gb6nKGKCUXJ52vt91X3dt1hj",
  "key11": "3Afc4LJqYLGYEB8Xev25XTw5JfKrcnovM5eyhCMwkN9RtNP1SaJ6WK2jY83NGZzskJS1DD8nxzFyqqNg4v5AtzvF",
  "key12": "45jNzTLbuSZNeiTKwLzG8tp2LVJyvzFtKR8CaRCoPhNfuKF4BeBzd82HzsVEGJDqSBT7fVsoPNg83ZbfpunZcvQk",
  "key13": "3Eg5w7HVDFeyFiZgXch8hTghLKFP4BUEPrSdLArsCk2ML4TdUei46Kuohfm5QTdkc4AhH7ga18fLevooSt5ne8UA",
  "key14": "4Mo6RhFRzGfxTG61UeuBkTuLnfpKJp2tSFKV5xng8PycELhexF1QMvYQgcVWX79DtL4X121hUf16bA5bVS2YX8eb",
  "key15": "3BnGsMbgsj8hRTDPhokwe1fyffLyjiZXDYDQjNvXYAW8h75R63eCTBqztffN3cXvPeRczVP3gTUb8WWJPoDwYHac",
  "key16": "Eaye7uDEk5P3abTDRbf2jJ3AbTSE3XL9kk9FPSabaKqc8YXUHfdkXpD5gaN19D5dZxeGiaC8Y7Nhu2vHgH1icBG",
  "key17": "2h2KPECNooUiDwQmG4WYa6eTsAZ3UovVgzWz3EH82VsYkAiAGm2CmD9qyjTnLSXXY97bcpqz6SeyEkHSpWk6XJfa",
  "key18": "7W4bJK6FTkRKxifqmvKkZU7Bi8y5JveC71Qucv2yJZ2gsjEZPZFwdWLfGJNkKfYk7Ki7XGHE9Ypghbbz4W6jhkP",
  "key19": "5eXmqhVfxdhrb8RKDmknN1f5hacD2KGfiChR7vdxH11yqLd8Azc1HEACDWwDbWfCJP826xbGCGfmUCq5JGzZPHcd",
  "key20": "4TjdGq4BzxHKvjeQVQ13mkYiT2FiT6XtKW8CMDjqGS5DYb4qgXDzmAb8J5iYR4R6gtKy73qQiLNibD7rj7zzRijg",
  "key21": "2KtRvwgCa4dhYQw2BVburcGdHmsbuqmdbE7usv4qb1ZR4SQpJk3sNcdDEepjazMw6eqtWraEWjbfRqN9i3xC5fQ3",
  "key22": "t28XMFujd5gT5HA6es5F4qb3kDBJruiGCvvaPsJTDik8E69cYdRUYU9E7QsntmdTZzUuETFdBhXJkZ4oQhxNXjs",
  "key23": "4QNAmibF3dFFJ2CTRCzrBVti2aJjwUEaJfkKxsQGBsT8AV1csMRw1kvLkmes8kWWtmB8ewAG4UYXah23Go1ufTRP",
  "key24": "JhXVpd2zqAPqPgSYMKiBA53qSQNov8DSjVh8pYChVfnEAePKacXPbb66wWf9EJuQwGTDjSZ383jb1o41ZKSgx4a",
  "key25": "5vfhmcGsHZAnnSyoAgxfYjj87epHn6NSd3PCk8q7JZqYrQvcisoPEbFGq2HiLxxpkG5E4XPD66z6Q8NRiqxqhYCX",
  "key26": "2vqawmT7jBRh2qA5Jt9pz9sY3QSAfp7eeiiuZZyT6BCFZ6Gk6RnXhvuof8kzE7S3BYBc4t7M8axDw2ECmFDxAJEo",
  "key27": "2ss94ngfMtXpdyHNSjE3u7qtq2MUNdFy1d47CDYuuS1g4Az7WXLB1ePf3rDnoPbfZ3hx3DEMUxrXcJr5ZCtUV3SV",
  "key28": "5PzSVeitX8YiXQCxgpUp7zBMYSbmpAnZYbBznQL4U96iTk18Lf1PViG2U6vy8ez8ACktXjb9y9JjbUWstM4cg4ho",
  "key29": "5XPwCm2HPBCcEstTgJ2cAZ2bAkiHYK3LWAebB3Mvdiehtc4a5uuFgnpqvCZEnK7ark4wk8Uh9s3dnzdzfeBR1ejh",
  "key30": "2dcvo1o3HT32kKirSXL6iEWYnKUSh6VMcx7StdAVd6RovJpCVTm4pyV5Vp9KrhFiGFuj3w3AhkrmD67J1WgicpmW",
  "key31": "5Gt79oBV9yYAxBPrx3AZPSwRdcqFQZHeA1cLNWWzNUdW4of5RytJdtNkfELcTcE7LCnwMAaDMzWth1gRzJDTuWHX",
  "key32": "25Hvy2WSY9r9NJRV1B3rauBsk3vVevvk5zfEiDuW8xTgGnxytZoGGbonPNU6DdQGhMBeE6AGmnKvpud6ZDJtTRk1",
  "key33": "2j9CBh1zoRxR7rsyqmhFPfCB3vk4roWzRzeyekfU5Lh39kd9TaLdvv7LVS5WiepG3UFTTf34asqAhXTxAZpzjybc",
  "key34": "wZPSctAf9G5zRGkvSe3Zq4VEmgTzqM2sQkcxBP9a57LNhr8iSWR13zRB3KjnZMgQzwbGZqTr1ixunigxUUGaK6X",
  "key35": "ZFUphD74Hx6rmAofDKz6P6gosE1jpVgnibqkg9bbBgp2Mx8F1zZpFANzKZUzDaCkKdkcjG3YtsUZLwSCb8jFs4Q",
  "key36": "49D4qVyuAXGFv7BDCwvtvWsCLt5BX4WjEzniaStfCH7Rxbh4tPoyoMo4fTtUW9aJW5AbhEZQPtJUQu2q6QgHZRSi",
  "key37": "63GXbxUGH57hPpQMDB4B3hs1cpTNp6GqRHSq2tUwr9UpgyAJ8zG7j4yLJAUWL9UUjdnDWD7FTLhH3kjRCg591Dck",
  "key38": "57E7hEe9qYsYR7etTEVXLPyF27JQgoUawLPXMhcdGZUYWvLA6oLm78UXmGq5dFQdfuvpnSAzMEL9hhYJbkNC4wYz",
  "key39": "3A4MZ2M59biVM57gaPvbg6Ua3vnoUDYy1wDAvF7sNr1Tbmp7jeFWwi28EkAivm1t6UcnasS4Y2P9BCGSc1U4GWgz",
  "key40": "2VCXRpkNC9RBbcf4ik9R655h9wr6ZjwajzVN3uuL38SprxaZbgrLiqs25XbTj9WaTXW3aPsoAHAHacAtEhRDDrm8",
  "key41": "55ZmGDZejP7o44sKGKjHemh42czUiHvHXMbVoKwWzsb55a8xqC4tuuQS6bciR2a5T2m12VNoogDcksnaLiRoQeiA",
  "key42": "2UM5K3Brihya6Q26JGJ75VezuHy7VSwHfg6e3dzDWTNeyR9L72fjhEJutSM8j9g2dBJPbTjr1SKs2sCsCtiGVNGd",
  "key43": "3qqRd6G7XgUiGbhRnqjqhkyjJSebY5EMZKNwoKt1o2wSqq7zgTmCnDp23rBMi9AXwhfqt8xB1i5sZzTGxUy6Zrxs"
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
