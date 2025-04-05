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
    "2bKtVVDCvhNFd4PFQNfQoXZV2kzN5j33VodRQ5Pbijo83jrxFHz9NnPWhZqDLrffc4mobukCmrnpmovTDpZJytfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31LZZPGrzssTxvVnBgvj6UXhVeY3ARa4VxrVjqKuk6EoAuyg6kjp1Ux6kczvgRBEC6mHihP95buYVCa6hzMBPaAR",
  "key1": "5jQhidyWef537MeJoTdwnXrFX1nGQ9uQh4UERu8dCpnMnaybpAjr6mhwoHAEDrUm9CCikvK2kSxYiX9weVZHxXS2",
  "key2": "2gdj5S66mr8m9haQ1WNdPvXmX1kDvNSzonJfhq4MUvUSsDWnfQcpbvRhioPZ5aKpEpDUXga2h88rvAzYcmb2PJ1X",
  "key3": "4WWxJ1cfiQX8A2FskWBonQgvxFyAC4d1AUMfr8EmiVgRiMAk5wmKvoGEL6nUSaMh7vQXYr3YnUEo7cD2GqccXWpy",
  "key4": "4WLDQnsbpt1U4qdho8JguyfjkAnN6KXnKLriLm2WLDbw1ZY9EA2TXC2BJ18djmXGD391RXdcdv23V7zbZjMSL2tM",
  "key5": "38fcir7UQbKQCYSPcx49FcmgS3zFGEKaS8etWadRgr7kJpk65Ys3TwLKYYcz8kLejV7bydHfgs2LVA9Xq2uE5Wio",
  "key6": "2NuyyVeMWg67rhVsLrNzSKCnDjvoPQ3UvXCdhyTaTjvgMXQ7qn4okPHWypUnVUZtbCzHXh3KCA1MZfU2pNk9mgMh",
  "key7": "5LUY7Vs5Xb2Yq9oF8xg3955jDCzwjyu52Pn9guqHW6a9w5ry1py55N5AWY9qPaB5T4kkUxexRBAhHPHn7ujiWLGT",
  "key8": "4HdNbHgrcFG6sgbpXjWB7aXnsE17WWxrVFC7ESroNXfSL2HWoHFcxcwhZMaDdtTb18Zf26hLTtQCivaFQ31aMeTJ",
  "key9": "3aWRzpzWZ3Cw9oBb3onEqd2NgoWXbPkKanomorpzkoqUVZv5pdr8DcRnWGZuVAdZ8Gzu7igXWZexbsm4tmnBrQBK",
  "key10": "5cCxoah8bjRzNrGoAiLMLinLZqgjDAw2HgCLq76d3X2aghHremV1Eh4oexUQiw3o2wwb3ngpdkAvPwP2rZKfEmTf",
  "key11": "66cKtjEMe7p6wWgxMLCKC7bbZUiL83YRMZqSqVUvoftRbPBKnYbjMGYNZ35Vn8oPud5bc8SM2sB2ctzm3mXVRhyW",
  "key12": "2WB4616bWuYmYDGLC6drZWrpPYruiW216sZyzo3q6wDTRhFZm9qGbEgzghrZE6LkaTs674ibQ7BnJmWrBzAedeYn",
  "key13": "ySEo83nTcBKXiUUpdPv4ZSXqbPUUFmPtzZmpAEhv1iMC4yF6zjiKJAFgWSMfPkCa4wvTXWWZTA5mGPApNRx3qbQ",
  "key14": "4WEXdZKePeM8eVwUfztXQc8xAokWfyTWPoV64fcvEmc8v1b8oWLiRMBKBuv8SbapGKFPXnNTowqk9w6SR3WYKxdJ",
  "key15": "UuUXV1MEwxikCmQRUXAzCRNg6ZSytjwRbk4gMwG4kcLBVfZhCyD5dYcypG1byRQC793JMR2L3qKxg3NRn5iiNjQ",
  "key16": "4Un9jXrR2WyymfM96u27TzrJLofDtxwuCfuLabtCSycHFTsXWHY5bJLHLYeoN16bK6Qrd3qDmZdntg56qHn3ydoG",
  "key17": "5PjbqX9RbVPwMtiWKr1AWFiv8hdhPTgNdh1XZAjzy7pxdFe6eecLZSd136mhisCnHb4DhStnp36boR9R6z3VebWZ",
  "key18": "5xMeU6tk4TqNqRqb8MAPdkV4SeDxTCXYTQB85uP5JUs3XdRTGMBsarJ1reuGtx5cHcvcwFz3kkwuRysK9rpXY5ez",
  "key19": "48x5FNaacWxMSonDBCrPGFyjRX6DLJ16iMvmcrzKMSfVHHbsWhswvta2uTtj6MnhAyWCaxqHvGcBdVoQmKyEc7Cy",
  "key20": "4cbgidkvxLtjMrqadg6yLW5gPhdwaFSC8w5yYaEEtrxGCjVSYy8ajSwi3A2nNHHTCsvUZ4HgVhkxVExqcCCwuGZL",
  "key21": "2RBXjtLrxD3foaKbEn7GLSno58azMhokBME3afwYCsiYEWrXAdRRAsv8YLiNzLgYhQwxgMFyWiqgZQCDjN6GGbDf",
  "key22": "4u9KaaHv6qVHv3CZ6ZeXcYv1iZ2fXv9tstZMC5WmLtS9y8yrahD5AEHdj6BxnoiLL7L3wiMcTXMKip8JtMyha4oQ",
  "key23": "4P98EGEUEVfyckpKEQy85M7dJMxovP48Z7TL4Q7XRGqrZig8uKSQe99jYwr2yfqNdSTK9mqks6CEXCgiCJpmjVrx",
  "key24": "2z9goLJh4MSBaAbnwdJQLKVey9CA23v4zGPrcdfb1gyo74J5jsdnzW7bsvpdTtaNtP2N9qe6UMStQA4p5HWLT8e1",
  "key25": "65ejTjQmB7igZMR9WAcxaW8UMgZVkJ2ezAzgRZgm7fxfrM55JHmFR6MBQS6gGVMGiyw3Km4ZB2yNc856m6BMaemN",
  "key26": "4GPtghQs6KBBmmgQ12AS1XudDrApoxPPc2oZkx2kCcE8ndUdq6Cfw4n7bBtRQYVVLp2YFpR8EFQD6WefgvS2yrrC",
  "key27": "2tnUU1xiyDHzUMebBZih6WqSdE945xBLeu3hKHWpTHKpKfrFLb8MdxzJogGCdsJ7udnfCtqKPe8PvwzzD356C84m",
  "key28": "41HPJEZMFrqKE7vTtj8yhCxpnazciRc8rTZt5etbfcjs7P1WS56EHZxAMGymjpufbZHXBvQxLNFRWhz5NgK1sBN5",
  "key29": "63nDQS7vhi24sT1PDTa7wxDZKXniaeggT2nqpjkxJJv1uSrStwAFxFE2wZxSrr91Jy1W7UwbUVZM5jFDHDvh7sAW",
  "key30": "4z97Men2wAzb29jompxGoksgpWTprq3TJ3234ALL4JCmPpfxQ2pH57cXaMX1yn3GavMimCYmV3uEkuhkLcoCovgw",
  "key31": "5m536L6wTAyfRN7kvE8KiJL55vscsHbvtaeagEZrx2zs4Vhz98bR9kTf7rTbjzKhYhMA6WZ4uZioPL1uQkVrpB3M",
  "key32": "7vDyNYLbxcBKdm8CUaDqWMbrR8L1Bwt7Xfyf9K7gHdVLVDMoT6Sqxa12UdC9ffwQ2ir28LdJryYEAYNqsY4K7Vq",
  "key33": "3UrVAKVs7U7QJ6L9Wx8q7SV6Jati28ea9LKQkHph9Aew77aCFXwEXBL3XiRf4C6V7nVpNucmXqaxJB5HTpUDLRC5",
  "key34": "2vXDmcXS3mtkKMsZrBUykwCm6E15jVmp1jrZqsquwgnquzkkiVY4yY6pKrTpFDcSJ7QFBtdSWSevzkfHBQ2puHBR",
  "key35": "CKXDKSYsZzmLZQDuRcixCYi6ZxSSqDJFADGDXwQKWx4VhW9knSkYyU4k59ruBu2uq8r91LpenjMuX3wSnY6JWSz",
  "key36": "4hVc4CjwFr1gwQRnL5kSob9qMXZeEA67TTbnY4kgLuE8aQPSRHco5cfgKrRPryYfCi4t55QfkBgb74PehhnprgAu",
  "key37": "4khAp7vYgJ5tGBai9svEwHC7KyNuAt6n4xLt6yn2pZ3d3tuvfdCDWDAjjiyqWU5nFcqEGkJYYq1t39GK8iqB8iT9",
  "key38": "5dGJMYmGaEovRXaucSfBbtBCjsFFXSxoHu2NpyzQzWh3HtsQB4vCFoxZPQUuCvQrE3A69EmhtTGtSUpUN9cmP1MY",
  "key39": "xrH9SJW3id3gTtjuwJqyYekjXwd2WoGBYVFZoZECR6drLrbSdurMCcd68zrrgxEHz1aEDZirXnCfVcySF6rj7m4",
  "key40": "3VQZ28yMA5jVDuyrzGVJ8Sy5TNZiuUR7pFiPffYsexwSAoeoC2hYiqQiJiKYP8ujvF7T11T1TJYgZR6xB8cjJADE",
  "key41": "4446KceJQ4t2Gkuh4HcTNnp2wmcAww9SD7tKN3mCHwD29JdeXRZk7TzKh9zu168bkjB2ocGWg6G1hdyTUqWqZigb",
  "key42": "2aRSdKhapRvMDg7ojsXDYPW6giGUYkiFGHTwYQGM94RigsLeAe5v9foBUTxr9etj9D6iWWneKu7oyH4Hozquzwco",
  "key43": "3g7u9xuwefVs4NDPx4YzCdizrKrwY2p6wArWAf6NLT62Dq4FwFtZNFeTBwg4s6fLbJ9wnuK8wjkjPQjWD35zjb8S",
  "key44": "2W3zj56dPK4rcCXkBBiY24jd5oZWwShQ4AH3x7RAhbnvMEcwy78XFd72EirjePX7hJAY1Tc1VzbWgwdKJ4CkKXEp",
  "key45": "3xwUDfNKJm3EKvb4oXbwX92VKduEtgC8xJs9JxvnT4WTgr7hjNsRxkXDhFFpovhcKnsomRaoEyxf49tZ7hbuQmei",
  "key46": "2zsXZEcHVLY2bgwDhq5A2wDoXBRcoCb47RfA7SfDBsUBm2VyGcMxNnKv5T4d7dye4BStPdErrf7caCERUYtbuBWr"
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
