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
    "62JSc5YWia1CwtmtSSieyzKUk3TpTw8psaAF7ADPqh6aD2k6Q3p5Da2XJPv8Cm2kvtGG1fQnAMPt4p7eBbzMixPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u4odHfZ3JDgGxLKfeb2mkYJR5iqkDQ6zr2Py7bqARBdxk3ycTfYy4dYxUHJSjMPkmzh1MEnAQLGMgkSkyafBTEM",
  "key1": "3BVTevZdnSYxTNV7aTwXWzN7U4R4BNTdnATquULGrkXcMiWCCAvtcZEcoM2rRkWcHxVmZyLZXtjy2C8uxFKPKhge",
  "key2": "sb8Y9MnsTTw57sP1a1JwUUyEGunhQrNxPWkQLhMwhMFPNBhfjoj3NhHVmk3vzqafs7m4JWh5hj5G2phT7mzrcfx",
  "key3": "4QwRr9e3b7jSTnkMaLKdUrqHqYiFJtMnzRip4G6bAGZ9Z2LdMZt76U4NtLrZQ27EyNL8jsuZZKeVsiEwWR6ffLvZ",
  "key4": "3pWueuMjjTA88tZo58vtC4Tt1pguqmus3dDa5otdGrWoqPHk15h6Nu6dmVjUDwmTfodhCECiLL4C5eEdtVvFuddU",
  "key5": "2wse58hDgTQ9k63BwC97hwUgf8wSbA81nUii8oj6yu69Y5ajQCARpxUAGA5NwVWUWYZViTmDLbh7nBpsE67m2J1c",
  "key6": "2sz7QJv96zn6cTYPwJ7UHGK95mGvF4TEt57EF6njDAJJpQogcwEg2EHismzASudcPCyktqtaUZqFdcZuxG8p3H5a",
  "key7": "58SUzzowoiEND7xRwWmkByfBP64XCeRN7PVBMQUnbheLJaskj8FmACFiijAT2pXsdPzWjSkq9ynuxbHaojgB19if",
  "key8": "5Ti6LU6tL5isZYG2cjeFyCxXUU6dbcxCdCRZg3PMFuSSA1snUptsudiB45yJSUVsMHXtpQFrvRLGXKZkuka55Wk",
  "key9": "5XdrziymPqZFiKJafojub1L1v1j2rC2n17A42sNVM3gZTgChAULwT1kLsdvEvHv8EX12pQ4xCojKBdnT6tHsjiU8",
  "key10": "5XisVT3DXgiYJmZnRFhcac8Lx1Jd6uujXSc1qgzdYxs1hVWSmtChonEosCQx5dpSWkcSDWFwrK1bb5DxAoAcSSgL",
  "key11": "3WJYzRY5K4qVqaWeG4H4FSV9KBbiC2c4UJUBjY9JNn2NKN93jswEMDA5DWWtLWhK6gVrV21k5GRMeK9spWbnsVU2",
  "key12": "3jbuRyAvkYkEnKFDZUra6auQWCY43R7oDa1rrSBganiBofkpKi3pX8VPDRBYsXWWtaKZjhWL8yX4JhtX3DZQDruU",
  "key13": "58UKtkRDf1vXyYuGzG1z8HMVQyamBPh6yehPjArszAMtuHHm1rS47hpRh7pvUDNwbL1p71grfjKfU5gDUsr3dMAZ",
  "key14": "2FAjRq6t9JeqR8KVMz8tQPW26voQRRFAKJNC78G7YFW4j5Zi7CQqwmov8voitMg7zs4CG3bmrn5CzFxwt3FWApSF",
  "key15": "3d19nq47kzsrcoTLzNGXf5URTFa2bgmQiaS947j2GRHLDmPu5f9SPxqnvMxdprrihdwWMcAGQdM7AEKbhj8Wu2MQ",
  "key16": "EsscTYtgieUspHGf1oKcJeRQ4sN2yJcpTFfEtjbPXM972ftX1RjaKeoL3Xjd5KqsZYJChGHLF7v2YcrSChgJQKX",
  "key17": "4BZcWoos8pA8cg1UyikNZnjKaKeg1GnBQ1JjYZ23eidgu2SLnxkmh5959U8g9icc8QstqUmC1hdfDt4TLNG81Tie",
  "key18": "4Aj3KtmToPbueQiaUAEfsp4WsMaqFMbaca7Dha8wjonQaRA35f7m5xnofffMjots8kCQ8AfjFT18Q2EYzKTLWQtj",
  "key19": "51vFyK76a8bt3b9gGHMYDnpnnndge2GncPT5xvWYH59Fut122BLwoPWgxZRmnshKL2jXsD5YwhZNC4V4sfirKLxC",
  "key20": "5ycMMAuTxSvAEpUppiWhW5SPhVjFioJ6zGubk3QGpykuAWEZVhPYgpSTVTvzbX31WfT3Eihv7cnwwQ1JFWdFEJoo",
  "key21": "2SUNXbqRSWzEkyiGFkyuZYigNv6h6tvLA4niDKD8giVT28S75ggpckpeMJGeAxYZMz2rV825jPMe3kUg8AVtFM4X",
  "key22": "537Q51PxamCmCRqBzVUL58Rpj8nsdXNVDK1TSJGgC2CfVUxA6Sm66hNHchXdoLHtKZ2BRMyxDzgirZvhz7mgW1My",
  "key23": "2K9ABYKMYDzckaJjiZtyj7JvRb4m3VAbXGtJfLVSvDv7aPHu8e3rvkjyDsFnvkrprMgEanz3ymEhdKuCewheGprQ",
  "key24": "5BH9Sx5oj6xqPsamHavjdLyvPQKutKdo4NjrW4ArfYLKy4d1dDdATgauzKLGaZrd3iRPBfwgKKqjo2K2UZUUmqDP",
  "key25": "4aDrXBG97uymN5jSE9VksAURRQFsrsB4QtvdKU6mdvAnDkCBQ4bBWXMVmCKZ5AgyobvjDc3bNSTJ3YjcySWXFUhr",
  "key26": "5UaShhabU4Nqw7SviMksTnzKZpA5cVrfe3M7UCWRYNDmp7cH7uze6iAnfJcFSGLGoQA6EkbbBV2ZhqRGksmw9n12",
  "key27": "Hpm4Km9ux3DfQaAgXcRZoEWEyQ7vut28PErb3guodfKuwtUFbHwHAN2DUyfqwsgVA1sciiaqM1eJLDf25Dib2HN",
  "key28": "3XnVdsGuWs5fysDCipPKawgwmcvha1L7RG2xFGjXWGGLCk2km8CKw9RoGz5L4mDqnwKycZJ7GBz9prWe6uWdertR",
  "key29": "3QPcFiCPLRv9wXbo1GWK2BqWY2Eo5e58U5stFyqbCogJ4UGPWjvmGieWpKwwwqPFTHQmHJcQ6XXWX5uBE6XCoiNx",
  "key30": "27BAXM55NSTnUpkKBx2Z3EJX3ifSf1xT4M9Q6bMoKoqhQkS937ee6bWaqkYH1YsLNo3Kacre44Bd4fpmePC7gVa9",
  "key31": "3pH574wvKZ3GNr5KY8dbaNqyBoVL5YyaYG71Yijw4SPu5pZgnq1N4SjJKgCt6SSadUSGTbqvK66jFosQ39Wy5Atc",
  "key32": "3Aij6sLZuWdfQw9HNoVoVYYqUhGa75mW4H6AQ1qebxWLu4TwhqE4qLozxLc4zHfxcp4m46HhhriVrjdqSKFiNBqe",
  "key33": "4zc5GAeeUBe65NvaAZejWzXYxzndh56fHhtvhQjZLdGgYqiEJVwEY2C9w8FiYTKPWYepGQ4ocKWbgspK7uTJFaXk",
  "key34": "3zQRTLEi9a5dLtkSu8pEbLdRwkzhoxPGztnF5gqaCBnrvKc71CoUac6HfZn3QjxraDhniCnroBNFbHTCNgVvbtBU",
  "key35": "3fUBgPmRBU1iLXG5fxLRQC1vddQhr5aWfjmpFqYvrricUxmt6xyYvovEaavipaq6eQGiY1N45vHryoePheDiTXSA",
  "key36": "4KCAuqxU7G6UKCcSjAdYp3wN8B4T1MCAkCTZp6Q9DQ8TMN2vsDmCjXAwq3m3iPTCyKSBV2i8urmnjZaJKQ9V9baP",
  "key37": "5xQwZLGgfQkQbnztLA7duBmdHoTgw3TdTwYny3pV3tC21mpXyH2zLNmyDyL5y7tAcyKD3FrNSr2wrYqSu6fwAjHg",
  "key38": "4CCuNSWieVSDSJUcR8Nt7BoPDv4zVDZbbuxNrABH5JYa95DNCqAryLPamR2vorrp8QeUJW2b2YSDCGt3CGt7jAzc",
  "key39": "2k4y8vWaXLrjs5og5DcHnqeSu6XooPbXiqcs8j9njYF3W1Kygzh4L7ykbUM1i647WZoXVuuFqJEyctLNCTF4J3Jo",
  "key40": "2MxRkNFxxADzrkHdRiZNLiLZJ2j31EdGyt1VqY42inATnZiuuxsMChaSFLmarn1T3KogR48gWS1QAecAwSBebGJS",
  "key41": "55d1GpoScN7X8Gb1xTGraxhCtvcEyoMjAiQwksmR8BddC9S9hxZ7SVF5yLVgSbQVrCH8pBkk8T1Mj1Y4udM4bUMu",
  "key42": "3KfZnMABnirXXhExXd7mcYbEbUPXoiCgqeZa43W6iP4C9891cpmVg7AYDy3B95V6b6PYmqqdnffeWet7413WWoB5",
  "key43": "3SoB5SVT9Zqz9RHiSJi5L5Yh5iTLo1pkbyk3U9FwdeFL9VwFyPbTVDHtgwdpa1CCZgTCpPywnqxw9hFwUhhhFsan"
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
