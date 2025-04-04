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
    "Zkvqeranp5KMgrTMQRyLrUpb5HKG9xjFab5Vzzpo1W2p3RZDKeokRm4EvcRupCToK81wNzfqc9ftZf6caAdJTWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RnksbxSQBwSTaYcRyCmeuXU2Y3811oncpUDtLBv4pEkSVw1Nf3q9YUfVfQ89qvcDxyTkCkAcJzSovWxNijf7TwU",
  "key1": "568vC4pKovnS6dopapoXofYtUFwmSQX3d421aQDUFCbxK3L4qaQMEoNvxmKw3cWtWGDZWXYCHEqgiZb9gxg8HSku",
  "key2": "YYutg6Kpg4jYdcMD14kRjmc29QSvTFLZrcex7rUHodLsw5e5g5MTpLQT5EopqQg18gL3PFJdBxQnk4aFcXveaxf",
  "key3": "3G2qTsjRNhiAJHqStZKoSaCvtajQiofzoHpMsBZTj4Wi7zCYDD4LMjvmcKoh7hSiBvSDTdTaGVGKJoHbN3znLje",
  "key4": "5Y2mHTiH7yfNHzCfCnoGQ7bY3AWHy7H6izKgA7CW6YU8sn9Qtv7GJSUDMdswvAugFhwA6ejMTYpRnXAQ4PiESnMz",
  "key5": "2zgC8y2nnNnZqcGQapj8eWkhoHHKdF45HCVvLncFCsHoW96RYpmgMihtRmHtUpeXTtPuEwVbHp7xUQQuHPxm8cHa",
  "key6": "53uyv2QDaFgA535pQEkQk4mCXRzJFHpqRZdRTfPtf7GMZWnk12e54iZHXxbnCX4yeJuir3MTuE7U431YhY1czQG",
  "key7": "5eku3iXtLND639iBjxxRUHfixE4NZb5M8c1mKCHc4m3fMEC466czuLJbM7gJB6pTu18NzjY46uFBRdLAGUVjvm9L",
  "key8": "242Q4XQM2z1oSnZbiPJjje6FHbQ2W2p3ygW2EjV5ssKdodpXYgMLc8y4mr4xD7XnBjLLjVzjmstv35f6nYURem5t",
  "key9": "3wXxbNADfFYS3kSPNTQfN1QmJzGV4zvxQbtfvNNinEsxyQGPiWhRyKRtHfrQF4ViNipUR55U22YPRdc7SpGtxdqx",
  "key10": "6KktHSJEQMiK5odcQduCtwGNU2Jhu7RjD9N5NsSB8BkjFjUd3P3YKcFJLJUkjsGk6KrURepnVTQs9T1o46NYszw",
  "key11": "2iLhv3wYKyy5PjnzZ2zyxAaiPweZKkbdDDKweU8BGC6XExZXVo5kxHjNBX2f5qmefwViqkS2sevU4T57mVjGaMw8",
  "key12": "4cwfijvvc6noHrDyBytzLqraDWVYrNkHWx2cjYNRFf3Ju6mzcksbhE5g35TxaCpCy9XLR9GinUMFnftM8XHMoCRq",
  "key13": "5PWxRbMWAoPnnNzcUu3CLLSkm1VvLhLwsLaH4QR58JMBf4E4kxASAwKqan9WCZEPdij48Jv7W67mvVkmzecrH4wD",
  "key14": "CJP9Yuv1Zq1xR7MYuC8TmbXjCPFkvEbURYPDTjhmQLVPtn4kYhC5KbW6Z4Bm9PChERpvzYtKsNUCfqPvJethVES",
  "key15": "3Nq7EcT3rBS1DrtSK1Pg5JstYajpfkqadcQAryZGqYF8dm1AzSC61V9HniKrmkjsGUYWrSdmJJ7gHxuZHy3evqb8",
  "key16": "QGnwrNn5gis8M6BUUkuBEanEw94rRHWyGWq4UxTU3WW12YVH1sdn59wNoCcFPKb9gb6DmmN2BrF547VfJuQnPBi",
  "key17": "569RiFAfKkxHta5in15RQ78m2D9Y5Z2sHnAjyjrqzNjmoko7bz2nEcGRcEtStXNWUwMfvvNsXW5qaXhsyYbaHi8o",
  "key18": "4PSRipcgPyo4aHWvnmz3cw1UY9hLg5KsFNuPdh62vCBwBRxRaDhPYQyUfadxfuntxcuwM4BT3vjspzi22BoKJh2j",
  "key19": "4c575L4Xy7eJzEfGneuqfaYy3A35DkvBmRom5sPnUXUucL8Yptgc6Cb39hAuYeGbjukcjHFvc6RnH8Qpu5jjN1Pe",
  "key20": "5ANzFTASH2FMBbPwWsnbztE8sz2Y5aoXmbtPvqPB8DoZfRbEepmSXmNbKHaigQHHzPk5ErkpkaEsUdkVNBo33h1U",
  "key21": "2ckjM7CWND2dAbW13heX5GFfdhewyAZLE7B221inSiJnVYYL6VoxW6paFTUcjGYNXjJyhpMqNGUCfnk4r7RoXrh8",
  "key22": "udDsPERetdPr86Z3obD5T5xBMYZ5iRAWdHmVfG53mCqrcL9wZiEMcvRhzmBbe5LadZw1PnTYxmcWaDVJZFmrioq",
  "key23": "4QvMTqjN7qtsQWpWnRayC73vzvKxbL2SyA8DbmdfeWE9nbSe3qx7HiUBH9jKoyeJRSkBA17VH6AcW944uTSifg5P",
  "key24": "2MT8Sd5XjL2kGWFpiEZ2zwVhn2q3rJfgmeAuTNizBuH3zLhc9vJQmLPtkhfwXRE95WkG1sGG3RFZUna6nRZLNbh4",
  "key25": "943DR8r1JVBMiw8ZUZ8z2KK2CQbfze6xhu4U74vFjBZoxzUEdhMLWCGU9pzHKaZDGWEtFsLWGLwrjiaHLWrKz8b",
  "key26": "d38DXdRXEwrmV4rSxjrmiLZ41KHPSj8dLrx9RMkf7oH1dSHmKPDdXiexD3vk87QzHgFH6TtZfrWSgjZHEJSYDTU",
  "key27": "6DSZVM1unud3r6z49jK4mFA4VqzQZG5C5J6qYR3qWybJkVZAGr7GeJVehq9XHRyBy8QUpH1BoMRhvQeQfmTi26P",
  "key28": "3EY2vcHwcMB5Cy7NcaVGcQdJhTqxTaLeVk7TRtxg4TaMJgspFK6qQJdBkMbfn8XMpiemVrUNiFKeLL2Qdc7toW9h",
  "key29": "3PZbHqr8roRFttwgiQLpPE3cWJoTFHMgSU48mVL6XaoB28H4A2XqyqehzXYPYS5BefG4eiS93effV2KKh9KkB8vi",
  "key30": "3M5papzW1yT7EH4x8iYJJDx31JWN9sAmovi3sXuTQVcNqSf31hfqVvgna2DVj3r4eM1oSm9z2fzEQACmrVnTzRdM",
  "key31": "LzibCGAHPWLN9UseEsJrVQc2pVExYNDgbErHWw3jYV8VdFVUS9jDwJHM7ZQ4VTfiEjLfPxVA5wrQ2HMJsYTq3QL",
  "key32": "5ecvdWtrHzM25bN6E4EXMRbpNs1V9RjD5rRmkqwJWa99UEDxjkxrX6eY4uNA7dUrSvwu379NzBZXx2Ln159WU3jt",
  "key33": "mQTSrWr9Qh3yUAr7MxyH6ZM9U5iW6ZpovHzzQbFsyJUWtzEZrvT89HbgDVmS9jURuc12PM1kDx6dWmNiafrTM6H",
  "key34": "58g7jGrZZsUro1gtryMtg5192uYfETkDWDBN343wg4XuE1LV2rV2qohodPD6Huft4d4ecJ13ErDfxC4BnaeFpdhs",
  "key35": "4n2oFXVsP8XPRnwxyZeAe1H3eEQCyy5jds6RcWQsbgASG5e2FzQEF3jeQPgGw5PQECi6CmXrcLVBEoJAbAEmSDJ",
  "key36": "4MeE9ubC5Gs7mQyk8JCR6QZb4CHxXK9wHgbpY6B7WVZJyGf2JzfrCBktnKDfQPh3MmrtVXXuRquyy7G4CJzPZRb6",
  "key37": "61AyuqMGhBB3kzf4UnmSGHiXDVxp5WpNxR19WYTUmaNrnE3wgktbaDEXFwMNF5ZRU2YCWmBYmTbW818sxgTeu7Fb",
  "key38": "45WaqhxHiEdzmU8gaBUN6Sghv9boTxYNo3NU5YLvm2xWkNgXTgJTSagDC295AFDevtBatxJQFj7dE6GbCfr8sL8e",
  "key39": "3ETeVu6eAeve1K3Udz1wdRzt7DftHDrJj4hw2HRxL1Nt7H27SXgmBmR5YcRRSJbukEaevj3dBvwxwrjrVM6qp8mz",
  "key40": "kbpjK5R5ppbWQqS3C2kgefJq8VvgPg1ww2XVBEjaoDRZQRMzuf9bUCDHgMbetnQeydHLbxcwc2R2fGUH75FT83d",
  "key41": "C9fupj2uYvwE2tZ2jLDpS6xuktLNDEYAXgskLJ57JbNx6M6RjYMNVXa7GdVvD3q5wkZyTEuos1sWsLuvidRSPo3",
  "key42": "2FoaYewmd8EjP2tH9R9TaYg9sUDEG14FvmgJZj5jsi7a7KaXSfNVgZHonA1sFR5cjvAL54uQpG5wpKC8zCXQvrtA",
  "key43": "3cySFTaT7ZHrGqqw7Nf9j925wd1yhVR5qQYP9wQC3DP5txQGx6tPbtdbnjWZL8o9x4sNGF3fTBaoHguTrEszojkk"
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
