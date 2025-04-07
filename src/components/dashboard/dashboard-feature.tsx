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
    "4X2onu1nNHQXFTZGkrbhYPRKDhQgu675XS6VKvYv3q3hcXJBhAU4EFNhWYmwiQ5ouGcbTNFkKfY2cz6uNro3fmB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zqqvsUqAm8694qSYUQcX1MpZ4gxzNxsn9u2LVJ9YZ2ZRu4wfWTqwy1sJLoSgpbuBxW9z6Tn9MD8DPUVoAdp8wqQ",
  "key1": "5ZYWf7SvcaSoZiaYStniJJ6vt29uSyhQzjh85twD7Yh2hmXQuCVvcUwRn6dPkg8fFNmjjmrrBWcGCKE1Xsxu24Rz",
  "key2": "aagEm6ESnjwf2JCFWRVKpp3unexStsT13Pwyw5ssC47g9eqx5LGg6Y79S9fjx9XMm3Xdxx3gFzb7fXGVHtMZT14",
  "key3": "4sTMEArofARreQTjAqMMpvD7YsqzWCoQzbAgB4AMvEZkCf3mnQPrhCEdTug7tj6EExXDxEZT3nmb18dF6QszX5aA",
  "key4": "BpBFG6K4x5iGaAnj1NN9ti61whonzGhtyYSEG4XC3CNxGGChyDnrCUb41WfQ8ENHGRjBkGDwwNBJLDP11v7RV3r",
  "key5": "rUFTLEnXcUzhiJkvxDNtcnQUd8uaddU6Azun8SrKAKebdrRtvVX8C36UHNF52kj7gREVWMrVzFMmo4H5TJS3K5e",
  "key6": "45kkSFVJsjvGWevGiCcGi25p5r2NQ4pc1NNNguXc1fg67twPujUFYnRhSUaufEX7ufR69Pwg6UxTMCDrua2kmZ7H",
  "key7": "3xbuptCqJTMM1fN18jC7P4AmHY7BYWfqSmuQJsGi9CtRW58gPAd4tSnWh9zHmv4mZVc9uHKRNYciC9fofZGP1DaN",
  "key8": "2GvXWkBTk2FaFaLeBcdG3T1daGWwruqAduafukgQpGtRaU7tSV1Q6TkAbRe1X66DCXRMpwcnw6maKB2BL8JHLvWm",
  "key9": "5h53shZDGNWrHZoHVqkyHgSRpnQ9LwpBtsobUvnBu21pAMfaa3dhpXt9bWhm7vesPWoEBSkg8fpjCATJ6cLsd8e5",
  "key10": "5YxzB9CKQYixbBt4KcWMydbPm2tnC1ShpcSLnfGR3W7QrfX6KZUa9shjwu6yBeKjxjx4jQoCtLdcW5v2mL966y8G",
  "key11": "5jowuxr9QXCx1WWVQgyaPM9GPFFeknqyanCtgX2ojWzQKTVeADjcUMoHUwkHi95QucN5NN7fpih1Z8JmqDceyzEn",
  "key12": "4yjtHczHSgAyz1V6tdbM3fqSUzCPHf3P2s2wtXkbQaFr7zbXRr4efReraGaBfvwT9cDyu9g4CNYNAyaztVjVS75u",
  "key13": "2ivGymtsVRi37fZaqw4uGQ8ZZ5nsoQBwRzFHNsErVj3msDqzhsdcbFcUQ7ghuxZ52NB1hkaquVSXxkH1eyL3vWvK",
  "key14": "2q8Me72W397hmdXHeEWRnEZ78L4ByEVaiHRUXTVNVdUhYMihtcaJQpGU6FouHx734gWEDnuWivk69newi6JCDKZ8",
  "key15": "3Ext5JwoyfwLbg4tub2L3ThPjDcMGh2XjfcnNUJvxbmFMRWjPuVCCu7CBBgoUZSPNvgpyBCWBCvwrEVxgKpwtjFv",
  "key16": "xnKSaVaa5kvGp2J1X2Sg6y99saXWwXALYjq4TdtFNNkytppDdCXh82SpJNxTAAasLTRP9wGnEScmq2SQFVhe44k",
  "key17": "2Y3y6A9ktd6jUBFczFbBiCjpisZNHUmac5semy3hiwQ1UohHHmAaFJeKhF5x6dgnsawjzCzPHBSmyxKsCmHyCf8x",
  "key18": "2c231Q4pgLfyiqDrPXu8yB4on8kzCmb12eMeJBoVh92e6urryF9BXc34SS62Rn4qAgCfLZ4CNrkuv4GuCAfSjwvM",
  "key19": "5XRYohMnbbKi4X9WkJ8h1Nm2abdbGvrB5CFBLjLj1Mh6mL1QvjoriJdZFxF5TuikcFc4JgvgtkAsXuVMy4wTwWik",
  "key20": "3SwGhNkHnRqGgRzn8yY9Qnd7fefEbuqbvbzeEz4fyz94P97jwKBkaDt1HGAPpNxMrn1DJ45pfSWDJR7Xzy4G2vdj",
  "key21": "5nLPu24jffweetsS63F1KygXFCM8m8vPWKdy9Ud1ewKxpekhzgw13Sge4AjxhoA5hMJpr62p8VQQVmP5zEL9sqto",
  "key22": "3Rg8v5Ad8UWkzE6wfx6RcwUZi913EPXvfQ6zfsHq3bjEMFwB8JfSWNG4DXJ4hQiaf6gikCMPSU1Xf9yfbSwb2VWb",
  "key23": "vSsiirr7aRfYREaWdwjQdpvMoNqd8UsFoMTBtJ5rJmAQDuDZ1jb9FZYzde4CM9qMyeyezUxXJ6Geg6kJ1jh1QuN",
  "key24": "SQP3ZrMmaddiy9TSsnEnHL3KN4Rj6MHZRX3YqxVnyzvEzceWd4c77R39E6FJ6aMjT9RhgSpFVp44N6hW9dDaWvW",
  "key25": "2rciVbhsUzDGYuuUqhtBeX4mLRLKEpJ4YeDfru9igJmLHBfTZKsBsQrTkCRQUMWjk59dwL7thnQyioMLb1mKeUnD",
  "key26": "ThPpoLnug3ETL9UKGvdoemCGQF6Z9MY6DQZADnqekGjaVqRR2ovWZXwTqN6HywJxF2qPqR2TCg2QrwCjYqs4RvM",
  "key27": "4S6DvX8d51Pk9xfYDsEQv5VnvoEx8bAEyrviFUHn9XN2Qp7586fCwXuDQHHijEY72fJ3gL5GNyhjYEP1caEQshe2",
  "key28": "gDGyqtTvP35t7k5Usc7FM1mWHgFL5KiXSoUG1UBWeuSGW4KQwWocMo5aG7GiF2UY2Lg69KfwHGPipzuC9WExKNN",
  "key29": "4TZiQhBVSvH8WeuPPfFQi9HgzFZremnZivZ85uioYrQbiPs1rXiMhv2xuepzYpbbULSsWLHV8G3yLWe8s4WfLoYV",
  "key30": "3D3mPcT3hSzxaKUpo2SZFYxkXPskzuAGDZmb1XjWLxKGHmRJNJkUkwbMJhjiiDeHm5QzkhsXpkFgXNFGNw69cVDf",
  "key31": "3wfFvN6crssyWSDMp62YiUVWRa6SQeSEMN8YEcAVu4N8GrsaaBZtuZ3aaWKA4ozjfJRpkt9bWk9G2cszySAn3ji3",
  "key32": "4yU8g3q7BF6T5eWB1nHfAtgUQb6doCYHgneXMviiuff94Nwwzweky6hcfu52Y5uPgrWvXnkcGL9MdU5XHe43qMEY",
  "key33": "m7mj8bkZJQM4hGGQWgwg1XXvX2PcELDbX3MZ5AHzeJbRp2qUwZPuVDCoiWHHrA9b5yx1H91DHBd5eAtsrTPUicp",
  "key34": "3My5smcMYS3j487yLGzEVsrr8ygGH4swSTheGYU7gshq24w6bSzVWpG62oXUyZQxGVzWPVmyH8SmcUQ6YSEb4n3r",
  "key35": "1gWX33P3XVRv4b6DpR6giptU98yaVudmo7Skx1r39L5Jztp94QvEefPSDeJTmJkHThyuWpY7sykHTXxHGQvQe68",
  "key36": "Nrh7HU61yrfmK8PYQitwiE2BnskkDi7PnYQhrfYt8moCGz4WSr4dEb6gkboEYgXFU9APeSKAbZ8cjCfRU4wmi3q",
  "key37": "3YiTDzVK8ovejze6DETEkv14oGB6Nt4SAHdvft1rkcaYzVebJrjDQQ2kfF3mQM84atQ3Gyo4h2XHHXVS7A1mzS8",
  "key38": "HYSLvqxPBZkKVaSF3JxJjUWZyzCrE4DA2TVhCpk3tNq5uiwxeDxnwo11dC6pLu2sXhdFdrf15avpL3UXxqDC1cK",
  "key39": "2PAn5g1LLJEV3zcSBGLTT6Z5RDXEXeWErePDG46ub2ooQCQ5K7rFbqZ5LSCyL1zM2UFpnmEmGAXczYbkDkH5TKr8",
  "key40": "5Sz37Q1H8bmq9JaReuDrYUp1cGYbJeQvsXccseUHpzY9Td4pjeEbU2LcpMbQZXm43Bm1aqpAXgPAM5HKQW3J1gEA",
  "key41": "ZJ5urYsD2dMPaq1Xjs63gcJvTfhpxgjJndUKwtsjFwMyF5en5qpiVCpgbQZAGHVoeh9A5AvvpeJgZ5aN8MY4Ewu",
  "key42": "KbTdtYV2pctKDVQ9qQM9U9X5f3Kh7MWLLctLv9RqMhzBEPq3zknfjE8w9a7rX863zUZnYq6JtdSENCubuRz5nJu",
  "key43": "j58eSTLpF5ZfEVvAByKa5JwK9JvRUyQarph4UnW7inpKzixT1uwCr4bks8L8y9GH7LhJRNm94r8UwAkmn4ngLox"
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
