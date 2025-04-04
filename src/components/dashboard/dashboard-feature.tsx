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
    "5waapMiz2K9eXSfUZbrx3aD3HQQAh4dgoifJv7cDYKLXmKyDxVyZ1H7P2v7U4YPcgQ9u13YKMRjTKHQ1PRYouoKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39dn5QSLU67bQNjnKKwMCakiVkkMLeY9iNUkdmv9uviYkZrwY3WiVoXJ25gCEcRrVYoSEZXaFiUCsHzbb6Xc2WDc",
  "key1": "3G6FCCKsDxfQ19SxwviSbBQXkgf1TYCfdyDb1B7KnATd8Tzuyoswvg7nzWKY6JLWYRm5xgVskAkR1T277sar5oDT",
  "key2": "nXPTMhdw6sf9rvRVWtCbuftGvypByN5jGd9HN2AtQVgGNHhG5QzYCbG4ypsSx7BnZMHuzeTHcguLzmUC4LC5aKV",
  "key3": "2FJkCLgL4vpAHmA1ktQbGcvmXsrFe7SDFdMt4QVaaHDGw7VHp1AVTgyDdfd6H4axz51yK8LcQnodbbqCHvg7zt7A",
  "key4": "4pqVbWzjtwgEmGQ98xnjF5eqAHh8xugWL3qczAswSZgX9kTipHmD3jvefyc2RAJV5eTScCqkeN5NQt3ubUFbWUe9",
  "key5": "478D9jaM1JfuymqfBrJxw1o8FaEvvCtFoDvuSzqww2kTs23nnRqeYFq3Fqazy6w6ZtYSfLxnaWdAyt7FRgLbhaqX",
  "key6": "3KR733P5S8WzQakna3QDa9Tod6gdhsVpPy1NjMmGcEdgkp8KNwXrbLo3ach2mom7Ar5Hc1hbctCw9odE2mv4sYJL",
  "key7": "2Ye8UpQFSTPLHAsam2k6u9mZNYog5CwM7HiZsR2MKfRGDHtQoHD7ieMK4yQ5UtoLdiGMyXhRA2JcRRqKoizJBez9",
  "key8": "4BiNcbbnYZ7NoDzmFkswn7pTAnkzcVCJpdreGyeRMvoy6uBWBFUxktmQodzcpTF91GLNiK112rNL66o1fqH4K1BT",
  "key9": "4cqDMgPE4H8sWFXyt3kWUUBA6KWkEDesoy4PqbdjTEGvZd6YhfMbpwDhPPTHUS2oL8T1Z2MqfcimcjxszEovbUQd",
  "key10": "5EYw856buMbSRB8xsfD6iopFzvHKFVqbFipqw8UxfJv5PNCAKGvAfNHQC6BMdzQa5hXzwghkKXwNzSTQxhwSKU9G",
  "key11": "2eZbdYMVwnqtgW8m7qQXM7na9ifscAyeevbaY8Uvwgv8x3wTNwHx3bn5dXNhHWxmNfoQRBckvkzfiEnKtnaNLtNc",
  "key12": "2vDLjjCMGhARqyY7Vjj6uPfRmYF7wH38B7KkGkTboQpfzszaV9y3MajU88odyQNoDnAQVjrPD5Ld6V8cyxPnLKbN",
  "key13": "4nwR1aRJuAebbwZVMUrjbu7xTotWnE815HviSRCngG3FGhHe5pSjtoGQNDPVGqV4LRyeXm3UvtRDGZEkpmPL62w",
  "key14": "5KM8Ccp43r8WDa3tMZ1o22HNeBchcybDF1er6aTrkajb8pckn42iA5eFy1Xb8tDT2XkjAM4GntvEXcaXWDv91L7F",
  "key15": "nk9fxgJVUDMpGEhm7DdqVj2S2X5GhdWFCKLY4KuKHp2ApPTXgPunBeGvUw9vNKGJ59ifA4SHd5q4uqExSnrcJvc",
  "key16": "2wrZRXV4PZJUA3v2KkmX4dDvzPTnyP2K5cQxAiC2J8yWDXDGdBWKda43WTJMMcikUJmt9sgBywFjwymPVixunHio",
  "key17": "5Adc9iMcg4kVQen7WvTZqEt6RPrfCUGFSXfU2bn1DJCf4PCzrWspnAkWTKwWzhfHy7t3aWUikbk8drQS1K8dkMTX",
  "key18": "3HG7DfstiYEUbmbpqKdLmViT2fz8H4Y4zukex4CuxRemeefiUFAcyk9RVhGb2yVvFemZindwUiUdbTvVJMeut1yt",
  "key19": "3cWKVTLhNW9KUoNt4bXijGL3awMqRkiYd25R8MuBmV8mAVgEZhmptJzJGZvRjhWSJbzvLzTMqrkaWsS6vixcFM6W",
  "key20": "3okARnFcLHJxkeJRPBDn5u2y6agho5FCkWCDv38La8qoRXhT3YkMjAzdUa3Jtjwkt2ijMZefwpKujAtGR6hfERXv",
  "key21": "2j9XRuhkXD3D17eCk6n58pBjzk2HTKvFnhHQvd2ocyx2kTZBmCJ1hifA6Ag3Ex6UtUUjCpRQsahHdjHwBdjM5pdU",
  "key22": "5TuRBicyyDPwtY9oy1KbBaSCXMZMLSu2yWo9Jun5jJVJvKMZVELZyivPNFbBqgzTv7t3Krtto5UKqofbfDSfEZsV",
  "key23": "2VviDCCzaSEsKD3sKQrfdwUANjvsJvw18YPhvheEiqG73mYfHyFU13kijRQ2hMp1PSRFGKfsnjvYQAjJ97wM5ghc",
  "key24": "4pix2m2nWnnm9NmdtSpyxFrZS27bQMunUFXntsE1a4PkCBCbywmJy68h87eqXyicPyvfX94KzTxK6fYnZt7Dq32j",
  "key25": "2a7Mtk148s4xbk77eQRCCg8GSjvtq66GU9maMKxtChKGqb4auTwm2kApn25VVwPRnbWE2PA3eCMnF1bJoyLgFZHZ",
  "key26": "4BbuEH1rwRBmj6ZLd6gSrgsY9LmX3mbZMUUWEPrs84aoDVjL3Z5ofPNbuj7AVFipNDyuTwnMMznefvuDwyHyaj29",
  "key27": "cU1kz2jmaJRcfsd3NWWmdChfSz87eyK3gXiVg8wn4imYUYzXG5kthjDdzNv5mUNe5RBU2dACD4ezmNQXjr395iu",
  "key28": "WdJFLu5Vd1ZVQTPejAPUQvLxHdDLwvt2tbJtopz9XoorHMvwPddRWR3XodsxdqD21FYeNY7FvNMJt6RkoMTZFEm",
  "key29": "4DQhrDXdkqeBHS8n7ohssrVtvEuCSniiM1GSsBumrWTjqHDLoWKepWkHLWJXNKKtVwt2nx6b3GC5gF4GqxmrAtPf",
  "key30": "5DmKEcVH2GCamoj74Xvh1XgRV4tnL7TGHS2NfGsgoX93xxmXMvMbD3UMkQWRZ3p4BLcmkUU7ZcbAWE5fRF5EkyBM",
  "key31": "62TMzxSWQRzDynBF736SbPL8daqVPW6fnQNG1T1An4shmGSaWP5ERrVtartM19diB5wMoZskL1CfB8N8YYWqAAk",
  "key32": "2Pp3QtN7viHqhb5i2oKZByZJuoGoFjdyTH7M94FnDUhJ7kugrT4QytmBnH4sEiBTb2CrGUWdQ2muvFjnkUvSE2eL",
  "key33": "2tXtrj5rHEriRWYw3HJtoU5yaaSrkMDBUS67bMJ9je9nKuSvXsiqWPwMDkYUdPmusgyC8rDnSiFChKkxBSNmCA8j",
  "key34": "2phA4D5sLta7pFP2n1YBBjNWC8CuKJE2zpk51a7TPbRVcRnFtbhwZ8ZDRVRTiHmvrLCYhNYXgTfsMchc8R7QejNN",
  "key35": "4qEJMJe2gMSA8V7uTWnRpfAdoum5udrKbo2brdxqWXazB4Rc9tJSfPA9pybPzdCASoaAtCbXPetjSfpa1B4zcLvt",
  "key36": "37EjJeUPKNkaexyPVgnWHZQbsQkhpKCNGFJ9jWZHUeHw2v8nWT62kZAe2BKxd11kBu87FC2mtz1WBaK6b2Pi91Kf",
  "key37": "5MrapEgkGQQuwZp9BaybU7jRFy7PJPWpQFuttJLi9TgZGAdUGgPNsdsSFtPmaY3fUt56d9CDSJg7BC5ogRnmTZm4",
  "key38": "4J5agoYHxWGwrw6pZFCdvx88RVmxwRBick2MXhTZZEiaNQE4zhHDZGkMcKT6EGMDyze8pkcTnz1fc6Jtz5iqmC3f",
  "key39": "4bsNVyR5q9vJFTudgJYoCE8agpdkySmtuHe19vaV3AgTG9mTy7FMQzLWxY8sgoYjod4KCh5LfrvWdwZLZvQMS3ys",
  "key40": "47zLgh6A9RJjuKMhcc9gm722FBSvKsj1jM2RgqcM2pA2GyXL83pfTWWwPUhL8jw9v5ed9kxkDwM4syQRcDSSR4sB",
  "key41": "5JJTDQ33JQowRQMPZv4CZKGiqUtRQKoecwusZ6R7nmXttKK6TFaYYB1MqJppoMvRDzN1HMPTkEXUUx3m8zAVZ4tL",
  "key42": "3jBXgTSmNEXFWMB1wjswtnXERwKNip1rVb7QYbe8vrwF6ZmyxAvMAnSyJNPdfSGnAFeibAuFW1r7V8skvgszSm9F",
  "key43": "2kVBVCHeFEPYC6mtD7aSq87XFdbTviwdMHdjUCAVz7qhNNj1KYBYhx4yZ3dFGntybMxjqvwR2pszduMFmeEg7vX7",
  "key44": "2Q3zSJBEsMBUJcoG4nnnB8DW6DNyEsgBXxHGHu7WL4M2qLGG4NJwfCoRcNWBwQuf4XxQZA2S2PB4ifQVdMFBycaQ",
  "key45": "3VQiksCZZQuM4xtSMZLJtvCzwpRoyZQwx2k4P8n3ZsgyN5gTAqT41kRDSumUseZy8MeQJH5d5uv2Gpkyr7t9xUSp",
  "key46": "3pKaC8Yjmm5RncWkHKahcQtTyTSGoycacnz4o2uzx5oLW7vauXGeJ2sNkYApdwyyM3yF22P3U3mEr8Cg7Zuhrmgn",
  "key47": "4C4SAEppwXgFJZ4aVMyxKM4Rx49NEfNxj6T4ZNY8NtK8c972vdXb8wwba4UVzi7cQoTJ1S9DajtorATGkkXtW9VK"
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
