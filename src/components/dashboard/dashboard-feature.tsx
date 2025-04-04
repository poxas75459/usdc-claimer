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
    "641Ze8josWuPbxcEWqyrcXQMKCpnPcomVvxcxvkpjxcfYP29kw6zfeQ3fQw7MbGjWpwKpNBzUMgfUDcyhGwYdf75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1yK1vBGP6E2GhUNPtry7MagUeyw9EsAgZaR6iqW5uuTQnijVrGCp2mjDm5VWumgiXfv7MnkSEcRPHUHWcXZvkym",
  "key1": "2tFnohfxuzJqkzaQ6kczkASEaADLRUBtSeVjH4RVyZZmYE4xYvVgfrturaNs9CEWK95wtg6iSNELFVmbuZtJaMr8",
  "key2": "38JQKEmWwqraXSXogzk1W9PQHAehKjJ12ukJrinCay7kTR2YnzKgzcJTp6B5uVqqwc2BxN6ZJNLSoHbggLrDVvpb",
  "key3": "et1Xqx6EKyG1iNKeDgsJUTxVo2b88fYGuNqLei3rHqUBGDsENWpyXbVnj3RuXYm25qKddLL3EJnFJUNAKaiXYMT",
  "key4": "67M9Qu486qdhrq9oCAwMmeiYHty8eb7AUW287eANmEy4ZjKjSQ3hpAitZ6URRNvmnq9y2rwa1oZnbJud9hMxaybH",
  "key5": "37icW5E6sDN5yBLKFrXL7gxjBdV8Aw3U2hrEbAa31eB5SWKKRqi8sVvuxC5iLSLn9jgnXka8mvpB8zAfLwUwRpjH",
  "key6": "2xeqmF6URcEACvAaib9oeMgyTkPbKLnFHccY1MBNwHMTbZYNaJ5YVMbc39SRReL1nmRbnzu6AKh5TWTxnYum9FSo",
  "key7": "PtR57gzKmTNoUucBUhdbmUFnycQqny5YcAdgYudMoJMsqEocBCz9UTt6JV2LXX8DzWb1yUJP7L6sQd5Qi5GAUJy",
  "key8": "uEB3dkvqoMNN7xz1ZATQD66tPyYXsG4d8y6yLDFHmH7gfr4kE5LSfgCoPjcPn12sQYtV4sf7zfiFWujv3CEEqBY",
  "key9": "58nKPC1QDJAqofZp5eEhT3ycPCjpdhWjKCvC8oQCWN2yR7vd1oAibobBuEnnNoqf9vdeDgxnJCwABrfWWKUCHgY3",
  "key10": "q3TrSNMRM2jRFVcSfa89WN73neXEptA1qiav23MMnkwGH7MarsC3AiS4xanfGvDXeGvvCNhK1yReXs72cVdbJNt",
  "key11": "4q2uSBs3KUQagBSAwS4DtyAHBfHNyKpFXcjcVXd8cJFhfcWduDuQ6ASApCHpao7euEHcviT4GaJLXarZiH31jbdA",
  "key12": "5LTx6NM7CrYuFwR7H8SFFgbtePrU6tnAwozX3ivKfGVHaiUCQvXf328VNwFsL6jYzK4uoWGAtT1pPwJyuQGTUXgm",
  "key13": "5Ej2RCpeEgc7U1JjdXh51fuDGTr575JPBXtdiuoi31Zkq6V3JvNjEY99QJnjAGLs5zHZttcooLxKoHp4JPw8akPh",
  "key14": "5VkLxoktmXbGojo89gBBfhkrFbnKSwfpmoLfcDRGcaips8pw7QFrEr8BpBtwSD3gbbJKuthUAx8gSPrSC3vEbLAb",
  "key15": "4qmCyeNDBvHNMmTHKhaSMYrBR9ndYFXbbKq8XyiTydHUUeXrFAtKr3CAbr9TgpPDkpD8qxVovqKtMRRHfCNvMd53",
  "key16": "58cbL7qEKNr42bWSu4graDqzozwwgcJZsYPY5FcRZsJFK1vd6LPKoiMNpSu7FppJgVZY3g15jnBFsi9rrs4ZECBy",
  "key17": "4ksVDUVQcFhQgSJT43znk5dUvqjnjbyvxJuaPS4bNN32LSwRaaaFDXCYLxYTNPqrdmtQi5fkZUjqU9TYjFVW7TFW",
  "key18": "5jZftNsvb8UiaGJ9n7ZtHuheTtCB1U6VK3DQKG8Qn73jSdyxN4VZ6KxRQoH4XHCreHiKrabePiFXigJ8MeEEd3YF",
  "key19": "4E74GV29kasZGb7H9geNLv7W9rLHskywvKhCnYVV7ahudiB9v2L3LgZmRwy5XDWq9Qd5d1LpAky8TgjzF4zfAWrH",
  "key20": "5VKAoJHttXmw4JGtNAZDKwPUCEkEhGKnVJpa3GCZzLkMfrcvPPnx9ZpoGPEQbEEmc8Fc36jAHKA3sdycv92QGh8q",
  "key21": "3R6SwgycLgrNuEexPaMnhM2u9axTUz8756YFt93cRUmHLbkNN53fFF81tpjpxKzkUXUPaUBkqa5DswVPdaWnBaaK",
  "key22": "3wGiN2aijykq3B7Mr4BogHceFUe6k3Hkj3P1dikCuCv4Vn9UEiaMjZXQeQApdVcqGn2LWPLi5if5iUZoHSmqES7E",
  "key23": "2AWVFLEvg2hhn9KuctMZS52SmSvo49D61FTeQtRowRuB81UcvS2jZSxFtRz3Wr5jtk2NhaTBpVp1XygLcvPZog85",
  "key24": "4S4ohy63FrJWiZT67bA9B2iJN2AdVwxVYozc4x2MFPZi6DkTxo5rcPZjKfWrLjeq8Uo3mDz4AUzgwigxXrBjipdj",
  "key25": "6132jWRCyqBsPQvEzdSz2czmVuKVgFtBPUsd6vjWP2YDzjk25MXpZezpQo936p12rHS9V88XDJ5cKS5Wr1Mk73eq",
  "key26": "Q6k39seTUdRNkyWJrm1Aeey3T4jknBW8xzfnYQZUGxmuo2SHy8HomCgB7qza9koos7MnaADzRdymz8V2b2yQK8V",
  "key27": "J2eJMwDWZuudUjiqeSDhoYWe9chsJU69DwJMmTfHGxXQ5rY8HwADamrAaeDmzAwfPh6xfJLFtUknbHathRHWRFp",
  "key28": "796CyFJKH69C756DyQAv6K6peffeDnPPZSEFcr7QYGbt8jBz2TCyMXbLTkYVUtCp7a6t2XyDU9sXuy6nVVebWTj",
  "key29": "4es6inm91TSQJfT8tARAAQQbxgxykgskJNPznnuN93fJvkqpxCqt7eFnFQ8ZtGoxRMtAeNBuF7DdhP26z2X5zvPz",
  "key30": "2o5sX7WnJjJkxm4gBzCft3ScVbDk5gZxzTNvU73Jp9tnowPFg3gDHHxipTmUmMQQHryq2wCbYeeHBXGmbEScBfpN",
  "key31": "5ZWP8bpzF2n4rRKaLxQiNrhSr7YFsZ7tBaarSEq9k4JAuqgEjAnF7B5TeANtneWm7J1FGE3sp8totW42X2x4zbps",
  "key32": "5rbzfiPUz4jwFvN2pvXtZ2Km47WLZ77vFYeSJCCjchzLHstFUCCuMrszZdnSh79SDhehSNFi2gewBNibhfeLbNJs",
  "key33": "3Mt6XgSek7qjb9hEdo2n44sYfULGT6gfNrosyLzNTrpja4a5aEG43N3tTuNHfLDn5h9upFkKccMucRpHY8prnakb",
  "key34": "5QbXczf9E9bz2jMgVHTrBjcaXMeynN6Q5rXYi4LtMFKgEZdcgUVxcmRwkc5GVYk8SuEFj5qEwuetAmCXuFoTMuuK",
  "key35": "2p6wgXHhfyR9jkPfirDnW7QnyZ2igifc1kTont6r3yeBN7MozFo2LyiS2GLgAHDqKfvNW6uzfqonRbhyt3JYNVhA",
  "key36": "RTUYBnCTsMHtxHjrmwvywQxcMuPC3vXi9dNa8cyzfRAY1vXK2NsW1nqfYRGA7KpJvGpnLmjC2Rr6iKx7rzMVy8a",
  "key37": "5RyCeuRcQMEAGWfKk9KVonWAPM1WmvJ8bfHeVjemdpq2thyaARUU2qjoCyGULJxymwphZnQLaDGJUjAsCcdnb2x9",
  "key38": "rGF1JQ9cG5rC9czRepYANDZ6BmDjP6wGixPx7fbW5WL2DWpvLKwtDRxJp8euowSpTEmpmeU5xkaR6pUsu7QGRES",
  "key39": "3BK3bhVHN2mPsbXtXBHCrTJpfSrupeTsCMEBLVmhborAScUWctVotVKdvnGNA51ntYFgPa6YGzqeEbY1xJiaejB",
  "key40": "48ZVHmH2quSpuxGpACPZZ2yF1t9u3z4AoQ8gYYNY885MNmAqrdvJBmvVB367ZVbAZDGTWWuUwYvdqetoNLinzJu1",
  "key41": "2LymD3C2iJUsu9kvq9pewXsHZHCAqyCrEfS4mEPwntPcScnJdNARx2nEeKMQyEzDY4hdYW7KDd3jGWjpozUMw13j",
  "key42": "55eNzTHwLa3WbnhttWMEMo6xGS6WBQZTsWt35VVTipcwF1B9BPjK4tz7bsnNvP7sz1hH9HWi71EcjavVgNh3QnfC",
  "key43": "Rk1mXYDUcwNESbQEhJhpYkTjhCpaBXRAM4HDVxh3FZyJ6sbUHTTYXeMTHX33PV16qbcjsM3ZrThiCdESBTLQqHX",
  "key44": "3wrUYn7UENaE7RbfYu23h1k14E2DcBAL6QJuzbWwua2DD2jDUjzMDaLCXo3vfn6fskgj36VGGDJgzYrZ7sakDxZc",
  "key45": "5p5ujqQkuUHDQHEXiNjiTPYz1wc3M3UbFBZTXa3Jr7CCEz9jVCHY5DiU1VvgvbGUnGS2WoAsNFVSXVZQBNcwZQb9",
  "key46": "jbWVLYTiAXTWuFbkRHPxup3FVeyvXraD2cZD7yGcJbHWjzGxkiuxhvV8MLTCo54iG1kU1Awv99zMh2pZPWPsQga"
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
