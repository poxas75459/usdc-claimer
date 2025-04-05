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
    "5fzGma5bBMzeVqB25HNfwiCg118c9z5jXX3zeZTwQJjSwcGmqrdempb2Tsn4ZWt3psKYuNtmnvLPqnDwrjQBeHLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDDAP21kjpbti7TB8nXT448zyDo7qsEBzB5PeFbFuMbBz8hDY9nsCBEVFzLoLmMBdUSba6r2ksf9CZXkeDKM8QX",
  "key1": "2xEZ9N1dphkGUh1VeE5vSMwnWXfyJ4Vkfw2SeBGh2PoAdsaCHTfVWvdGzpLNPsPxMBwAv3uQXRVLKVkvXQjdbkgQ",
  "key2": "3Ug3FNe8BZEk2jDAiadjvLPgC2EDWuBofZYtP7utCBByNbJ8sWh8rnSrFAodeEyaNMnceM8TDPwSJDJWsaKH9TNS",
  "key3": "2NE2cNMJL6885SZLdjmsW2vJiVJhVxurficPbkr9xQHeD81nLjcAwRF4azLsZ9UkXn44vZjE5CHRDV1Av937E5jd",
  "key4": "29u1dbpesT2LhaENR7Q7oDQuEuwf7kaKj7kYAdobCEYvp5BzxebaQDn1jaRrqmnALHhUnSQdCPFV9NW5QhLKjnBq",
  "key5": "2KWDz2DVsZYLSNQw8HjXhwjo1P9aZEjtiCoEMWT7rcMrr7wGcVwRnLboGPw3yagb3f5aEFpt3FVVC7NKNKbVsCzo",
  "key6": "2zJ8VY1b6PDYq1RtjymRjacUfc5botXzQAsFKTF9v3xwMck3WGA6PaP1dBQxmGwccyCh8CuMbX2rg43R2mpyjyxD",
  "key7": "u3Saa77U8tuEmwak1fLc2nMFTDyt9CsdXeESg2XNigsuwC6zpQ7QsskjKt2bwrPWzB45XftenqKv5kxXy56FUTL",
  "key8": "3Si7CH6T1m9FDkMw38ZsmkhZJhqd2bHgaJViDi9Vb6Q95CQCGaATQ2GgW1fmqMG9NAPe3yZUQ33VoWeVCcgoabvA",
  "key9": "4XaeEmJu52c9awkfG5WRJKbgcXLTmbk9fpaLn2Nq4FBivUbgaYGZV7sG8nHB4JAeFAr3Ku2phkBnu2pDLEupW36a",
  "key10": "2c8SbKQzBmPVpWHopoQS21a4L4nkghqVeZgmA5fr33A8ddZM7EjPy6pm5Z2By4pdBB446ZnAaeMbne3FyVrAS7rD",
  "key11": "3wmmPtBh3Za9RfuVBjGdRtwoF8ZMmprtkxPdsvPrWXFRJZQ9KZ49WaCZqo2CFy3dfFgpm9jjXoBjtnt5XKetFzMM",
  "key12": "3AdLJe4c5YW6giyLTXK2JktHcfgC1iXsFe84VdZGeD2zdSXoJEWm6JBQCk99EJP3WJ3WB7a2j4kRiR7TY8Tyhkas",
  "key13": "2RVAfjoSDiXxJVd55AYQ46EJbrRnpDjnW4759aEGmVrFPe3a3iLDjXpgzQHbcmRv3HgBYFdwkXFbBz5f2E8Submp",
  "key14": "24EhCiC9Lt8MghB8crtAkFcTH8EZYeWus45bgaFFQqb3USKtYvCNGXBobv94GajL2FAFx23uJLXEvk7NWvtj3Y5w",
  "key15": "5DkGpc4jUU5b1cpDBR7rwKLmZrwGxGr9Jy8qhPtAoXLW4hpubLbwqoQhv78uv7z3ZdFG7rkXaMURhdnT5QhgkNeq",
  "key16": "3yS8TH3NNcdJ4NQDKNpCKoNK1TwsGowZJHjadZZXSfBLbA6hv2NQ8oMVSs2ZUparJgMRhZZgQt9qBQRaZY2ZQT8L",
  "key17": "4gPahqVtF5gYNkzZeHWNWPtuX3qhTLJiZuDs87wwggAr2rWsaQCWoDbAyAyoc3rB8gyHvaAJxpJcWeuPcTyWpvcQ",
  "key18": "Nh2vw3uBui6XsJWCYSUTj2fzBY3HaEiPcmspEwE41GsGDQ98atKd8TdTTa6hbkoFYtK5xbWwEcYkBRAMaRciRf7",
  "key19": "47L3BzpzWuSrR7zCzmk97kU6R9PsURfz4msX8hDCHoRDQJDwUQRpZwZRvTpcxU8Pppt1oCesSDLiQwdpXmx8WHcp",
  "key20": "vsqjr3rmtG1e9KkTAvcFVv41sg53BoMMirTxUQDARvgfiaAsdq3t8Jc4Hx6aX5UVGnwXbmCLYvgCGV19nVr38Ny",
  "key21": "4mzSVtYvqxe3Xuz2b1XVHs1YPQQJM7WLFz2FvzsQujKMu1PWt12Z61VEjoxQMM4y1DnY1UEBG3cK1WA9gd8h3uWD",
  "key22": "vxX4inGdmS8DCk6PGyPRiLa6MZtiRQU1tybpcACh2wex9tcm53jZo2y7Y9eDX394k4G3nFeFxytQrbsNPvEm4Hi",
  "key23": "3munGhCvsh9FtyEhwfQbkzsAEtxDNNHmBymSuhoNntzh1dmWueZMpnw55RaXYR1QQXxQxYsPu949Wm9nqETxtLD4",
  "key24": "J2yeNUmNwox7VMwHMV1e6v4M1uk1Gf5UfYoS7gHULjc2eKXeL5jdYBxVVubW4uLLyzXzm28RazuBeJLVZxx8vvW",
  "key25": "3f1qGpherURQ8uVc5ESvkWpLgiEGB3fwrcrSB8q6PDNUKcBYq6nsLqyj7XsZctEzZQrWf7x89PnLoXJwePMm8aXQ",
  "key26": "zF5QFaJ5MK9TT1eotEpCrK9Dd77muh8keXsP3PvpKUFAbCQ4mWdUhpP2mYFvfBzMiCPZhR36ymMsECcgfK12BFW",
  "key27": "rTPdZub6Zu963sGXXcB7dczqNmZJJ3RrQypJsaJwZguvuKLr8isqbK1RF6kQH9bJEEZ6STAzbs692rr55Se55aR",
  "key28": "2u2A74ud5RxUiEHfyaiPjRNFPCdk4WMhwHgByWsPUxPqUvoxAmmEa3HbRbQpQxVj8y86MW6hQaxJtTD2Ejoe1t6h",
  "key29": "4dAzbhVhCvTAMqScmRyXunhhWz5BzwkhpJx7kfmBRy7apqbYyUjEEuT6iNTbdFLQTqQGdTK3G8hBGWkyWEbpaGzu",
  "key30": "35MbbBSYfx1EURf3oTUA4XWjT1PUQtESuN4vciLrYpZhSQdtRHUAHAAaKBcaR7P43HwbHhSuGnXvrHbydPUNqida",
  "key31": "2Ce9ET2H2EMQi8k8ZAiLSuhmRxCJp64pvexS8ZXEVQ6rmMTZmtL6EKNn8bXeD3ydDJJrmai7zhiSzwrTBB6ikihD",
  "key32": "5KGEchdpSA2CmU1VLEeyfMJevV4uBVCzPjJy2Ka6g8b32Bpy1DCVMWTvK6AqBEVUiFFXDTWSxqAGixcVRHvKnZ31",
  "key33": "4xBYTbeYCE2UEvzesJ3tYVRQ2tPN3ZpBcuoFGrqWJFLyPm4CCsYi8ipBmEWyvMEbFdTAChZDgdxVjMzGU4715oT7",
  "key34": "tHLLSGuLfVrgZ3j9cvDb1HvwW7mtf1MoGDMFunEHFGjJSkmgSXGHPwHwSx4taN6xP9qgPsisuzzhzoJrvEFpZno",
  "key35": "2pzyP23Gtb37bnpTdJV1v7vxJciuijLom1pn52wTLYpwg5Le7VSTJ5GKH9ccvJ7kysXTmQRbTRMwpRo2AGznPMiX",
  "key36": "5s3XroubypAvEraezFDk4wijBnJ31GmsuCAbzPuFj3HGKsh7th57s4ncXdGHTxAEBRrtF4ccqGyGhbGMeSYiSfqw",
  "key37": "X2hShYtRShjNZZTZed62pHB3VWNYvv2xDDhrZuyMT1Ut3NRuQRygemRZ9nRpRBT4x8YnvXyBxYGHE5da2ogEjXM",
  "key38": "5TYzhczYNRE2XMec6wNTpd8vKTcJbHDf3iz74p6wDeGVUP4PmUtLJp6JQwowL3qm2GwGV59JgvJR6P1RT9duEbFZ",
  "key39": "5BraiyE4eD5gLNkKc3YwJu7TzPQxnbxf3RCNuSd3zxUW7KqpPrUnFrNo8dJHZNHiStpjf9hixShe94Kw8JmJch9r",
  "key40": "3Cre8YXzycyzUDD12mnAzXdBZd7tt11V2rXCbsENPHH1dSiJ1d3QEUiNVwdjB2rRC9FVNXacr33cciRpgpqGNE2R",
  "key41": "E9jAozAonxdpstaxbwEwkprjJpf2p1Gyznb6QXY8N6zhJQ8gygqdyGhz7zyAVMos1Ukk81ZhCmf6reNELBBsXBy",
  "key42": "r3mprmcGLwYAkZiSGiBV2aLvSCS2KBntvxtt67CB7hU1pfPPnqQskZPaBrutHhf8KNj8YMCkNii48rz8xfVTzET",
  "key43": "4FkBTkg5V9WUK9jTJyYVVFGsfJN5dqkiQWynCVqcYrBYsACAKHuCBkW5EgXEFBbDxNpCj923Bey7qUaXzgBa1JCh",
  "key44": "67m2cQBKiSWRRHUMZW3hZCtKRpYX6eAXupF3znnWbjLPM5NoV6RM9gGvZKNFWhhTunSTTnrHySeLYzF1BKMWghtA"
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
