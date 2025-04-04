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
    "SM788r8sFeL4qThsYKyTqQTcBkV5qY8wCaK1jYuYRcMqXkrDmV73fD7qLXhVRPrfaobJyRgmBqSnSJyPQ9EHBwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFspwajAcdgTcqyYHGKbyJDqcvHpX6tUyNUb9WiPokVTaPkT3ZeY118qme9rq7hUzdQwDshtNGeH2i1ouKaxPpn",
  "key1": "3XhPPsUFq2nu9nTnhbe2E6adKRk5jGHSUFyMudb4yeNZCvWsWrGLiRfnnZb9EDMdgCm7X4vVPJ2rWEuzWdKvSfic",
  "key2": "5nZqyg2Nn9mBTL9JX516BXNtKpWraiN7uz1PViGs9woWBYtKM56veqVsTdwjZs1zAmhj9oLbWknTTmwEF3qwCXN4",
  "key3": "eFdtAgPSWA9Hrz9Ze46x8WwwWXkxWMswM3EvR8PjtkVBZMUDd4seyX8G3uzdLfRdW7TKFTKyWuRsGxmZMUGstUu",
  "key4": "22zj5ZecX3DUtkd6UZk5BzuF3Tb6rDfbxXmr1BoRNDiZtBTg2cpZ3cj6NMB3UZevVKWXjdbFHbMKDkwZj8ocFNtH",
  "key5": "2coiYdbP1duM66Gusis1SkG3Q1MfbQkrvsz9L8p5HtY5FFxFnaJ9YN9WQxzvuiZpY2DnZWr5LV4TQMrLP6UJCxcv",
  "key6": "3DL2ct2BmCAferRgrS7PTG4zBkX6EFgagARv6RaTvYm5xr1mb7utsQE929wnnDJo9uhyteGy3zxLikRW6j6P3ojQ",
  "key7": "2FDph7rxz4wXS56wNx4u6Euf8mMsc88qb9Jhrv9cHJh6YXa7AGsRgVE6MT9vMEi6rGMCVdmAMBpiWsfLdDoDtxQ2",
  "key8": "26UMiboeDdXu5VterNCAV1qVgCwnKK54Rcdpj51wuYDd2CRzsNGQJXJwe7ue2eeN5KdXJRPzUoNN5vJRuR4CWotN",
  "key9": "4C6sgKKzUnuoMazg3hKeukFv2ZbHoN17N2dPAi9VYy1puchXswLVU3JUh7sMrRzdu1sThB2QUVDVGe4XhmYVj3e4",
  "key10": "xBMDPWWCV7mgc9oBiMF6aJ7FateUeRNV4CvMKU1iig7woArm1oH58gJfCvBPyAcJf2xkmssrpVgMArsdXr4KCva",
  "key11": "Kq4WLwwcnSGDuZzZ74bBiWYEvaM4uSMNpJehgpcwaR25uGmpm6sef1wMCN1W3E1V7vsEVJ4XAiyKfqyUdJSxM2r",
  "key12": "2cgUyPmAuCp3ma8QPxK17WDZgZxsRJL8WWFeJcaUu7uP3fDHj5o9AVwX2y85jm8ux9XDjTttLqykdjGy81Dsbz2J",
  "key13": "5RPFx6qLLnUpoDe4wFbFLMKMUHZPo9cSbEXboGaMTsiGbECfEV5ugxok8VpyiqsMCsJ4ApNL3xmnJPt4t4J3kzdr",
  "key14": "3mrHAPm176mKPnZDmDzofPeHErvuMs3exMaEXPNVaVVWfenCgfDiFhaau5WqsZzxzGsrZijFDnDcWKmkaFCgRWNn",
  "key15": "4Z11AjbyDWqswQAadxsXX8Bsz8APiPxRqn7pQyf8aT1yydu63qhYck4SHQnd65GiLwytCHAcfkePZccMtahXnY3Y",
  "key16": "5ckiF6JN1ZsiEDKJtquiLXGUJvy5JNyxNhzZ7ehHGc5yXgsFM1GES2fnnnXaPKtXEZQKDNWkrMZDxCpuBoyhxYFJ",
  "key17": "4geprS93TAtzHha9SYZS4qfwSxr8KQ5cK26j5yptnZVnQ54fvfFpQr5dxT6EJuyiZbSC4PTTKwTuKXcx4NunJ5Pk",
  "key18": "4xt5TnoZ6rp2tpUJqq13XtUA2mw7aVc9iGz5r4DKZU6mmRxwEsvFYrB2vbtcTTuSHRKpWejgnyrRAP2QS8cisNfF",
  "key19": "663X6Z6UFBPwZTtK6cU4V4v5NJPtGAn8BxkSmH6p2soutzmgDftVueDMNjP7UTwiNZHrkwwEgjcfXohqmVA3NbJ7",
  "key20": "5W7dTDyVuZqTh9pQiJrN3YsM9tj7h76bXPoGXHR2WB4PDbZXb1B3E3YAHkzmPgtUWecf6amEBDkper1vtCxzRBYB",
  "key21": "49GC7j1FeUyTEVVnbdbSAcB1Ssgz9aVoExKznC9gUh5tmtu8UGm19gk6CvVz1xiJrKgLiPQYixgTKq14zGGXFbUP",
  "key22": "amewwJ4Gn7ZEM5fcjBMuHEbVm17uVLppjiUsSdic4Qt8ggaAXUxDa3iEWhDSYjRBxVBnCAwHxcrYFLtetHiFyqz",
  "key23": "33NsENXLe7rDHkj9LyiMPehciZpQRomb3dpGQGkhGJCyFPMHmoBiyJDucFdq1FsFiaqZ3QKZcD1fyEMW7NuxfRAM",
  "key24": "3JPKphGTV41yTH5jX4CmHptan1pqyH5HiLkcTuf8E4KHR1zBcoKF1b2mJzr34G5wW3f4mumLVmtgpkPfMzpzVriR",
  "key25": "2EATtDjn1t7VzNji5Hgcub3YNJJhLyJainMnQuxnJcfGDGkShWfcprGf9ApNs2CzyL6CGmc5fC3P7he1uoVrJbgc",
  "key26": "3sBKQmpwLGqjGa6nAkNSPEg2HFVmk5vp187xHwqppeKhfpkW4qeFCQKfgJChzHbwqhBi5wohHMSKtqpSqf5yUKDS",
  "key27": "5Y3EMxRwXAaA2bA74ByhKYTENEFXH6uuRznQWW39AkEND9wnKdTR9qRSX5i4dyEbJkk2Q5WsktGwK5tYeYjG3Xpr",
  "key28": "3HRctJPzJwgpBmGtRxQTmbaVmWYhVwwd65zGDPPbNKuxcygaQdbgWtKtdMs8BPN3vZEz5Z64oZCky5JE5ieE7DHM",
  "key29": "2f86tVX1ntT1yfgToX73wYnsmc8PxY7cZt2ZBQ4Jh2S7yWjv3GzFThHtiio3ynkbvkqEDGnMc5KqBy7EU7bfQXgq",
  "key30": "q27H29AFBoj3obyE4MVUDhvCyhdDy2X5gewD7FxUSYnsXdygiq6GxXTH8NBSzfhXJqAq5VjjAnGf9NZZZdGo75Z",
  "key31": "HwvN5fYjoCmVS1bLeJDKwQB3MjTMVaZvusvnxwkdDWL4pVcRCQHpQY6WinTMHY2n8KUWbmi2ducUTcKvrjUwtnU",
  "key32": "2Qnc8qc4zo9eXYzsjPUbxxaVi32bus4nCD253PD2ZcvJCS1r9iAKm9oAohtNSkQArXDmteFRpwWAJBWvmC2vpXPb",
  "key33": "4ZsSeRXPkUckhZJkBkjA71HFsGFgrG3HXwVSf56PerFJuUfaJZbbn7NWXxsKJYhkYPRsAhnLZjhB8wqobwUQnfrs",
  "key34": "YSxBANCAAMgWh2pdY5j5sjwQySVnq8XvQeyfBtoydeJxiPprsiSpq4FAGiP1CBkpyaJbNoqQUKzT2vXiYrFfg1D",
  "key35": "5Bvdvm6Vx7SE2ZQZxY6Q7t8jrqah6MMhvaMcygChkVfzwBHP9z1nuDaXZkwjGjRxd6f92pqyterGCWw9rDK8nEMA",
  "key36": "3X1Ff4CNF9bMSyy4ZMStto7kuoLLehTHnoh4HrYSr5tpUPznBKes4rvqZEA34CcJcQvzDKz17kZp5VsPQyCf8pcc",
  "key37": "3XfdZzhK8qoi78pJxHgrgjbhLkHe6bsMhp5yLHpuVjC1ySA5ZBTaPUuguFeafNJTJMe9d79fH5M8BQxxVdZzQ7Wt",
  "key38": "TLgLBWwHunXkBZdMZGR7f6PHL8X3LKJBwqUwzEYroRXFMDRQrvxoRCDSbeJbaxPrZqcyYBmLRwgqh6PtCcgE8Hs",
  "key39": "2QKLAQuGdfYCWr7eewauNVXucPtoLR67R3jYMTCZHR5xos5vvRuwKZWn1ZqAz9aqzdFed49sMjgdbuCbAGcZ85fu",
  "key40": "4TJS7AzrMMjjSwcTbkq4BafDu8WrRGNzCu6yB2iTMvRUDURUCggspVjGdJYDp452v7qBuKNtEGWDrBeER29gyTNE",
  "key41": "3Kbb38ujUYDCV5JiC8tX9pdkCWq6z3wi8RTLdMyZ1HbM1UU9H87YYaCZWbdChX1yqdmrqRWnttFXDHJXbVUamVdc",
  "key42": "3fwGsagRC6x3GMoam2roU23DxcMfX6ai83y6Zd5fEaw6VMwfysrvtJUm17DeMVvb65uEnfSs2eNX6qE5N5Zkxf5E",
  "key43": "3YgDoyiEhwifpKFFuX2sXzFtRTGND4JufSLqZpGJPHqRNbqcPS9Y3qLSZy1noUmSFYtMsEzYuzYmA3BF5xeZxvdY",
  "key44": "3VDmeUDt9cFFiBM4QgqbLLcTjEMG6kon1EXaqLc82Q3rXr1VBiwmyA5DYcAFodxtSwBn4qioZwetDABSdj27oDdj",
  "key45": "5KUngteQ4sRJBWFP8HcWQhQzKUjCsDx4gQRJw2mX6EuzT1M1DsrHE4wVWnc5TJduvk7dYqyKdqyrKZ4herSR7RQU",
  "key46": "676omprnvN6pAfTmrL2HSeQfKisYNWcMtpPoZQ653D27BEU2vvhyPN27dqxHBzLqbfRPMqSZSrpTaHBjULTtMhJR",
  "key47": "4abB2UNN6MNRpKcHv99F5YAG5y83xtfgCmuTzqyKsoEoWznvdVjcQqa33ChfJ2YiK8RwRfVgcnADcESJ1MH3bZ8p"
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
