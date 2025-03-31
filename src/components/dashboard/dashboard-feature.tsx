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
    "3d4AZz7jUbxHkJXQ3i1AKHLL54bV9kNc5PFnQ1wiZrXEhKpS9ryBVxz7s78PGEk1BQ27t1Fo6ps2xirc2d9GE2oG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NRs46GsqkYk8SWZgrpqxQLvSi9WY35fpUX29BZmAHLY2Eh8nzrqXwJWMXM7Jf3T7qaxMCsbuGDWanfyEEPQZStA",
  "key1": "iTUvR752HCMCgkb16yQU7D7baAp4VYw4YRRWrD3VmpcFXvaVW84qSZTNr17CitRwMvHsAXSDf6RWZoBn4dgV7sw",
  "key2": "4Rj7KRC3VSyENSLAAenmWruv7jnjs5Jg3KF2EfsUNFv7V1dXzWtKGD38ckrufBMpdswJsNvCaHrmfgAA94JRiSHp",
  "key3": "i7xAcgf2Rc8p3LmqagvA4NmzC9iXCAbVoKaMMCKNicPTfdJGhnhzf3Nip3kCdNUVT3pw7MLwyBVU7mZjG5rxSPN",
  "key4": "22GQv7EyR7hkAztg4AZFwbhSpeFpUKGRm8yX9Cq8U59xSc3q1EeHcuduFSQreRkZVhjj7cykefrWx2B784a2xcF7",
  "key5": "JtpWtJM2MAQNCqteZJtvvN74qvhiberf3EMjRq3tr8gpwvL33HD1pANx2sx7fRotNh4KYDe6jrW6ovThwH3RZz6",
  "key6": "5TVZRNhDAWvth4VpchyUNQZkMccVkYU7mW1nzruK14TWWtCHWiQbcyuYAVs69d4E7KuFMCvyGTez341jNLTgyEVf",
  "key7": "2rmKC7BQW2yqJDLcqKMD65dxcurHtZNp7tKe3JQJs5AsTx5j4KoNLiKWvDuVpKdtAez3Pu9D13i61DXCt59f5Lot",
  "key8": "2xmoJf2fGo5CanzzkeWVpEaGDnSTjati99CGSxku7aetjE1sVNh2teTrBPgCzukhMjCrGRuuh1ERGEd1T8mFzdCp",
  "key9": "fhg6guk8yyRhadNpHugTArBeG4ySN1grcnxnNTkEN6gGGx49vRtbsLvu842eZBouJPZjRPLDPjGMrwX6PxRUdNu",
  "key10": "44xpUBRVjX7gtGXayf7gWrsGsVgPrW8QVCTmyHe7HLB9fzJuZN19C2s5A49B1Wv3Vq56JXnN2Dr4cb2nd4rTD1DN",
  "key11": "45FtZSJGaR6FEtscqJUeHfSnHZtfHZ3sdbPw5jpet1FxYqWfKrMDBrFnG4fGVcHj5Gv4xzG7CXzoqgp7W1tmfg9c",
  "key12": "5JkyfTh9BFSwRpMGrJycSZv2dUzemR3wdyXALvK179KgGyAi8vm8TN7Q2oAyMbkgWcPkMVxm8yeW9Vk1wUS8xdbG",
  "key13": "3MCQ7fpaWp1skqhE3hBQxsXRtbzwhg6nDoS8W7FEpYRrFgXr2y4UWnSTh21JpQyxsd3YzJNGRkjGP7NFCCiB5SEc",
  "key14": "2GDPrJeiM3ew5nt1FrZ9KbTTVqG6zb68a2HQAqNntyWWXMgVUXpkvY78Pj8C64XcTiUTxZTwenyjtkK6CJaLwZCv",
  "key15": "4ckdZeb1T4DniVcfuXrFHeQHtkdwCwC6LXqLw9SEewTKKrUPD679hP7fuzZp1Gm9F4RkVLBYnTxH3rLHkYtPs21Z",
  "key16": "45aqfQjjjVYzERArUeaAPydLLQNpVkU8WdJTKgTqBXRueb81DkRW4eDgdTt2RENyHafDdN6heZD8dkd2maP7EJor",
  "key17": "22YegkHkfPnGETYtBVEwqzhS5q84BUN22fXGbYZ4NcCpD1jb2EHSfG5KHA45nhyUPyjRQAjo6A72Vwx1JpvJA6sT",
  "key18": "4i1gq3XW2xgGPur9C1B8NLcApW5WUhJevZbrMnVZERa97TSa8mJkgdM3mPKAiuXGPbFqFqMg663cxGSABf4mmRwF",
  "key19": "4kXQk1fF9pZ8Nfnui5unzYajofV2x5GzakErmSPsc6q4WFyhWcdPCmoTPWqq9DegUryyFxeH4put5izbAW7iXPb6",
  "key20": "3UaMaSLSMsfLBEeGnF3Ewn75S4Qs2vjiyCcEuD9s31rbCE4KcQXKjx8cCNo8j3r3hrcPdW5MxdMskFqHMGAsQ3H9",
  "key21": "3TESieAbsK19xgF5xx1gXtnZ2E21hDKhLwKWYTGmRm2id7Kb8dDxc1r6uR9MSxRBMUMhcfRitLPTyF8B5wfAy54n",
  "key22": "2wUgSPqMp9wNmzD3ZtacBNJKkJqbNLv2XpME2a586H7vKVJBfEJviho7u5dA5CJxCbD2FjoXV2injBP1Twyc7hot",
  "key23": "4j49FHyvhGKV48Mr6U5JXxoXutFJZeRjenymBMbrndmWZVemHPyvzbUGbikMowq8vjmYbJ6GMY9rvnnZ5Zyn7wPm",
  "key24": "62dJaN4bPiubJqqndfepYKXBKvMwbwHbM2BHtsCq9c5QYDPdC7rZoBY5rfsJSBUDdfNLrxHUw3S836G7f8AUDiXZ",
  "key25": "64q6YP4gAnEoWMhXzGpGGa4dnCbrCSi2KqQLubLU5vNWvaRXXnTEUvV2vhbLuWF46sCs9pBNEbanYMN7seDP5voW",
  "key26": "Q36xmwkGp2ZQWENPKtdGLk6X7GXAD3rmxxGbmacCu5yQu934HBW8VDbis5WetrnaLg6E9mLfKQT3y5ycThHyRJF",
  "key27": "3KgoXBSPMVMYuCqvQnjqVJyuNqNytDkYRQdAxjju1AVFWP7TzFKNLfab3gbbeEPsTCzHZC9iw4jgbkvAetsxay5e",
  "key28": "23afxc5qiFpZ4jczaBWVtsrhhrPSNZGvb53E1J3zHXqjoHFtFzYzFUuokBkDWvhL53CB4sr8NiL6KuxG4Yu6SnYw",
  "key29": "2D3LepB81Tb5eBFURnpzDGw22FoyNgGDuQ9YjFbnqLQMzWKtAYDdDRWqz1x4faSezEJzjmfURuCCyV9fzFzDxTcD",
  "key30": "4NR2uutNZUpYRCuzioz8A1kVPUCXdYr48HFLZjyaciDZEFqu1WzBfYspH3aVBRCDAFEzAW8rfVzLtzwbkd9MYreB",
  "key31": "4BjZ6MYzkeZSD6NcERcW36oRiqqZByB19z1bud36ttpXCybg8hG9z3MP7Z4CLqP5RQPHiBRrYFLY55hfYCoxNCaQ",
  "key32": "5PdQXMKfpMfe9i598Wzn68KhKQnc9ryrmiyP52RBvv72yNAnXXZ6ZLgd8GmFGYiZCy1Mm3yUijhTgtMmXZSba7Vk",
  "key33": "3AdfygYHUsPQoTNJHuMNdUn5XLUNYz4FnfG5XJiNDa5YfezP1hs7hjveCaZ8mdUcnPWsHnSEZuWEGH8UrTFS69Eh",
  "key34": "3eCrrE46NiYhhzavwFD7zcBaqKnh8HxS4ACAVkGZj9rfbMeKyGbpCSQHV6C8XEAkUSSnrZRyZZsnCAgGyTPtdNem",
  "key35": "667kP6JtStyt1ZfwdGtgoLSzCuzbjwav9LBGguD6iSCsmfZp3RwLbXSMF81aS67U271BU2TVSCyXajzoZr9VQ6wY",
  "key36": "2PuA2nNnVpdudvuZAzcZxu3Zud6Zgbx2PoMX2roQZnArpWb9MFrikAp8c6gJqRiH9VMbfRA3GE763QTJzteaeeKU",
  "key37": "29Q9ite6cgE9a9oshgcQUmnA33Dichc3vR3WNnBU4ozUi6RMyn8TSNHjjBWrMUVmAL6K5PPPZf9jaeYMBf5476ea",
  "key38": "JEutsakZ9zC483KRAhxdV35vVd7Dun16Sub6rAKAS2hfSCk3GSP6To7vFb8KTnjv7DCkNiKo6bdKxWGHPKVH6aT",
  "key39": "qzFLWC7ieTq7J5YS3bCWdHLrVj7h4eJqoAM6JA3ENenjVx8CBcWSVosxRJNQhWX52WeHvSc5U2M5Dw56UbMyALi",
  "key40": "4FVAtd2Bbk1CytPne9h4VmnGWGqzLgD8MPHawNEr9owAW6GqoYLQcCmuddSkrdrWBmFZ9WUEr6PoyPb29TbcHr6U",
  "key41": "4fJMr2ajbEXbWg54cfavGUEiSo2r1dQAR4m5Fm6uUxGVLq8ZzR3yBzPmeVRvJCrdZTjPFQEbF86aNiPz9D96c4ta",
  "key42": "2YwunMxpN1R4mMa8zrr9JwXPeaFBXMisvzc6Gmx95358PEgUJeT1SJpgtmKufyidd9eALu9ZAFzxv3rDqm21mXsa",
  "key43": "2zMvDj8NwGvuZ36k692g2ooPNbZMywakeY58ECL7obtEfz7mWGUDVuSgtmf9rJbn6hHeA1Aiy8MMfMnpkADZtF8G",
  "key44": "25UwmYaLACS7wFG6ndis2Xwy1xw8VGcTjKQnbYCF6dCmL1S96nRZHWSz2fBX34jJHh7BQCZu71J8kB3GFGaXKqHp"
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
