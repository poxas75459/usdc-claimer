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
    "CcZGucQS9mT27wmfSxfvmtSvi8d6hgADdz9RuKFpb7hxtZ1Yn8mRCuDk7XPduhomX6xCZZPpERi8XBcJkiN1666"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkVDd5CDcDMKTRaQW57hNWP9ata6JRcgydF18tVnUote28dT2xRbrMbi1Nuz1UYJ3FHWkogn38pDYMH9yQsMXty",
  "key1": "5ELkqQkwM7xdtJbiYyRzD1kJSi7x6JoXNSnKaL4bK3ushhf5ZmYR6rdmyqAoT3PEVFvGkBCZ18k7xsxXQcXGNkUm",
  "key2": "4JfeYSVSPynz2j1hoNriMwMquc15wTaTZoiBiNSBZuuenRX3S8k22arGisKoTS8Gr94EmZcD44LgCzzpMcrqDMFk",
  "key3": "5kM7Gzwuq7aPPd3zg7ib7zTiSrkwPjcMYTUGMDbY4dYMgwamYwnN34LQEKAq4QkmRk21vgZ6Faka8uJWegvUx8Mr",
  "key4": "5SeAX5kqFHsURrK5G1q5UKHTSxA4DBvFbAoKsmrTEEPiiK7EjLWfXHPzPHRCS4JzCC8iMnhmWPbpg72WR5RbLyVR",
  "key5": "5qVRbXHXNR46EUYpTHHLsnE8FwaxhzizJ2R3FMmaV8DKhkfPaYZsot2oR1ehfwSgQVpmKyoGbMkAoYR8uABWY48a",
  "key6": "xTdtJeD4ttqs4gVLUHx184Hon2mjmN7rxPe9q1vxyAC2orBrn1CpoxGDaDHJV3g3hRdG554W4XwAPXGRSo4LYjx",
  "key7": "3ei8AEHFcYoNTHpKXvGDV4TwQ1dBFgKtvz1aneBX3LViXysizrCb6NRsU1KnKPXWh1wQuBHkupE9KAhdw3ngK7X2",
  "key8": "4ofoC13JJXFfqqxrSgfaxriLcRCbeikMKX85pkte3zfijUQEiBjs8sFjQU1na3XbT8tRHg9UK3hwcy6Nq1EPUHnj",
  "key9": "2VHmrqYMEMD9VTbbKdjsAsfhapdpKdQo95aHjNkbjnXdrFQXMF8URX5ACb7jiaZFrYNmgxyrUwiWk7KA2egqUU7Z",
  "key10": "56NWpx4EMzb2pF78Gmr8CaiQ8xo89Pky24pBvVpCtXMfRbApZU3EkkfWzuJR5aye8bXPqWquwk6bJ9cvnTr679N4",
  "key11": "2ZrphghtizkSvUrQQ2xy18Gw8wpucqpM9Prwvr8K7FcKi4ECunwteV1hPWVn9tYLTFMekbD8AHEZnqfJZkN75vrt",
  "key12": "XsgUiyubxFygGuokBuPA9BZkkjZjX6isGTdqfhTMM69KFbKocrNmwUt2yRnaowYbi3BQLc82oBYpmtRanmf8mMK",
  "key13": "5mDEbjdA1gd5S8u3KvY7rqyZ89Vm5GuxSNMUUTbQRXUTSENETR3FbpDyKp8F3N4Pbaz1Q7zEVEUTA6G7FgEapADo",
  "key14": "EX2DZeE3ES5vjUJ5mz64ekr4jfCSsR2u3Pn66BxrMa8QzDYrJ8e4KGoqMCMvnxZbZs6CodY5FU63kCjCuH9qDJr",
  "key15": "2uyMd7uPRXA4FaU1xdM9FdvhGimm4h1ScV5ccDWtAzX6TsqkaGSfRHzo8TeVc6aUYtufaNbkdQrb5C2JG3pkmJUs",
  "key16": "WiX7teSYDXgArVLQCssuEeNAQnX8d4zYCggwvAgTKGta8nhAG98PejWVZDnT5XdjtFZGCJpaeu8mhhQDBfbQPis",
  "key17": "4QrZY3epePyLLLkHehYJCgAejq6FoiwtAWTFcmNGk2KVYqb8BUYfM2wo3byLRXB3nUC7mSoV3FEBhHdCBRsLBrZx",
  "key18": "7GMv4pdrdxCPgKjshCRXSc3DBcBN2cNZe3EipfCJDtmJLnekKAEEiM2XzaHPbi7mHxr2LWfKkewdGNmaDHEt6rU",
  "key19": "5GXbXZn2nQ1zk8UcYyb3Zg9UW15Kj4pxbbUmv2gjLAWC2KTsht8nRbD8GxNLLCddd8yniiCJ5kCVHLK91CkzpqCX",
  "key20": "3MrSMfp5FGvU53VqyZDWR8JCr1saJehtHqX1kpYH2kqHNq4f4RS4CzfZob6zPDiy6Ln39ciY9VKBpT4AVVsvzE4",
  "key21": "4gAoh3KHLdE4Sdk5RJo14mXLvBts6SVE8gvLvE53XgZdxSzT6eniz2DXAxqmpnG8wEP4fHAiPEDydQUF4buEVWLC",
  "key22": "5Fm2ddxaLRLATwXU656L8BK3rN27eJCHRMd4MCAWaY7tHo5Ayr5ubcpSQbFoqiChoctaxwKuvBfEZiJkYGUSFq31",
  "key23": "3oaVeRhEgkUYRaMb8e6ZY2GmrmUwBH9qKAibikmjrZn3w6L6T1Hy4FNwMqs4bxTkC4AbCZ7XkKtjdsUKL9wjwvzv",
  "key24": "5jZwXQyPWx14ntbo4S6neMF6T8yBRF3Ds6kMbJW2inMrE67bQKNzTKVAzFhyk1zM9DNeTArTXMEgeC3pDsoNFkKE",
  "key25": "5h98US8XVSGFDZuBAc28DWuMbAGwViYzuqwgArtGTezdVhMyNKTg4qjg6QZtA8xEb91bbdtHd6u1a9yw1f4ks8t5",
  "key26": "3oF7gYbfQ2fuU9Z8oGJGJZFjNw5q8JsLG6ZhunmbzdUT3DGmKK7dkqCDQuDcMR4EnfFoyUaGJwiwdtPRnyw812nU",
  "key27": "4gJ4nFZCC5EdUNJ4ViAQ6Soohwyn6U4GkLDDgFFDmtigjVV8kgKun7uFZq9wBiJd1mq414pwBN3LbUUCGbJrqLU",
  "key28": "4M1rRbxbBUhaR4Nov4qT8uhd3zPQcJGRjZyL9o2WB84SQWVkFHZj4tNJMptweYYNMyqXy3zbKHsuHVFSipATzPMy",
  "key29": "4rav1cK61km7xwGEfYtwsgg4MGPWyJyBdaEp31wjnUYLuyGrC8m8MEwYvzbb6qhCCC1twEmwYUw1eTWRYiP5ZH3m",
  "key30": "2Qit3KWAhfZRtRpk7J3L2ceyVahP7RGSkfiJNgbhEMv7r7aVd5D96bsdvHcAY2ygyMD1jHVuGBAoa3CTD1HfSswZ",
  "key31": "AKMzdEhg8VULFcbSm5on4hHcGAGMpP7HCFGWZJCFNAyq6cobQhLGE5ozKHZg4Y2tDvdnf4psE1fyKrnMRVvtRhd",
  "key32": "2MVUsLZnZekrwSnKoi7Jb67A93fTDPfvqA6bu8YQRbAsVaBX6uW6dfDVqww4xoex75X8qxfWBfeo4hjffv1naH85",
  "key33": "2gF82bZwSXxxDLoEjuN4Ti99nzsp4Vp2ieG1BgaAfEBTfk5VW91Yh2mxetDZdd6RyczWyiUYjAyYbWvGf4QogK4r",
  "key34": "4VG7gnt9LFjnFE1ypDQGHZVGB6nNoX67zZgit3U9CWgM4Vu1miRq4QeFVMERNmjRRBUAFcsidgpAtNq26vv4Z6KX",
  "key35": "33hA2oK7nb7JgqdLpDvZ4PZwdHuGE1wM5YKaF2YZmWx4n7bAgMVzFoN65hx4cAzW5dozCy8xn8ZCvZ6qVMVwFVwR",
  "key36": "2uftnquykqRzHaim28WjASQ1a7YcZyq1uL4aeEEBUdC5vwVNmxR78qsrNiKuJgb8KjGniTnbRSQnpaTSP2NJSPf7",
  "key37": "38GM8yVnjVesB2NMMWjr2KkJQLwzYutkofruacyaRi4eXv9U2wVoC6PhBTp1q6zkBrKRCsydja7PFWmP5rLdFFcr",
  "key38": "2wP1qSngR1FV1Bft9yGafHLuEN59ULsw8nVbAC5dXUifwMaQEUprWLNgQHxSTADabsqBhV3CRHvTAjHBZjZUF1Xd",
  "key39": "3wdwZ8xRvsLYX5KAjfTZ37BuxhoU9xjqc433pVgS5nsWmFYbZWVdw7uUNd7AXYjeEMMTEWaFJRmq8m7M1Ve2Q5zd",
  "key40": "YPNk1mt1V48hVwPiUTGyQwig5WJFoQkLKPcSGAFRNYvEYiadgrvAKCrHBpjby8Gpp9cvcgHhLgMahEhABiP97rz",
  "key41": "RowTB1CsG32WJ4aUbSygCRZibWQ1u4tZmTJq5daxUckAz5EUzj7zna9Jbs2XVUV9LB1tATq2CSTfDgbeakor2sR",
  "key42": "4Eq2UnnpkyZto4ojB1jZ3CMgsbuMHXVL6gg3EozYsUkj3ykN95DodmcY4onGLJiX2khKXJ8t7z3JAC8SW1E2otot",
  "key43": "3HEkUdcLKzzbH3Y17rrFaLiUgsEEhm94x3UdHZhygbbXJnpm2uVLMNHmmh8h6rhGa931KpgcDeibzCwLwjf2JaAZ"
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
