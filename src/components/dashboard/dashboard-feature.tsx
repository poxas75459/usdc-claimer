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
    "5cQH1DMvDjSnCpCR6FAy9ehS1xCBABoNgAT7g1M1NoK4NsN8fybXcqxHvAoCwiuATX1A2v3sLCJUH4SuxSzGTu4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bj1eZxhX8BLjLDpkUYpfiydbpwfmSWdaac2o3xngNkjoa6j8ryr6EYuti4gvhXsRS9BgA5u7DTmiBZvV6FfY7y8",
  "key1": "ULpb1xKJDihDcZCLC2Z3XgrF2Fz7jz9YGH8E491pWpkEFA23H9rmJnPK46PK7sCeyQmw5DxtoYeTDHrLD4uHpbq",
  "key2": "65u4jd9NZFY3R2sGUzwoxMTSSin334PdW1e6rD8Q7Dn2MAuYsR3RqEk2ekvgkQTkYfWhwEQkykZmUgnmTeCSXe8r",
  "key3": "5BUpwjWj713dLQDQRw54EFcMRYjF8bRJQyf18i6k3EA7ihrtj1qY3iwa3QhwmQ76oKGEuaYseDXYdxQATdHtyYeV",
  "key4": "3vtZLzQffwZtBJfUegcd2f4aBrHNmpXT5RcteSCR2F3c3wvbuxz1s56QQiAdBJCDzprHsLR3qpCnpxaEaSZxzz23",
  "key5": "3fW7W3VDAsfen6Wom49yjKUXrfTSPGo5JTXkr5et48ZABbfYfqVFVz4VoExbFgZ5c5eoDFYfjcLAj3QWGfWgdvUQ",
  "key6": "55Ce4t1oeakzQrrLSDwSsJFnik4K9jAfgACgA4vssoQSTaNjXj1TFar7j8wedr79ynKtiFgzCuiwSHxzUFLt6UtF",
  "key7": "4iwMa4e5qpa4Q9gqUbySoAuhUoFuiVDRVhjbufiYucnJNNDZrL25fTp5F2xRtRpqCkv1oE8xUxa7dVyykWytUYB4",
  "key8": "4yhjTFcPY97jsNAGszUtqh9sw61fF4DFvyoDjRMWX13KErvsJp2HZ2y1HTR6mxdBQUSWuXbed3RziJcVtrGmf5jr",
  "key9": "4XSCYz2u84kh9wjAyrtV9bMApNJFmoFbfjV5pce8otBJFUKRbzej92DfsJpNWguFsFMK1axzGJ56aegvGUR6RsB3",
  "key10": "5R9ETsBnS6hYWbFQWJR9uC5ZfP4LreNYQjE6CXrYRsLbrvXd4vC5hWSFBg3qXcmMHyjGkdGvfcHXRyjB9dY7hvTL",
  "key11": "4RGbKVRcrhxVpD6z6EqpiZ2UndDKA3faPW7jXno5yprdaKf8xNXp3CGDezjgXXVgbjjAk1oi6JiddufECEbEt6Ag",
  "key12": "4LFRRoMvCf7YmfqMPiUiZBYmzzZWHn63ra6hPEejiPcW5CGw7nXHaaC3mgrtky3iaMHHrFNX4fGeX3Eo5ZgrfUnZ",
  "key13": "4tapHuMJbQskKqVADzJoFzPT8GXQjtd6yBUN41aWBtaNVTATdd76BJ9igkWNyBkMUBupJRKc3rJfJUqehhubVT2M",
  "key14": "59JAQXEYpyfxPUy7mQmR7G2ecKF9Q6xpkoqgmCo9dokoSziBZizE91tkGgXFQy27rj7kb1ghaue1J8rZshj1TorH",
  "key15": "4EfiZBKH9N3dsky5G6311rACA87q4uHND2TdBT256g5sETkF5JAgZwvtTjzoKrU5cNnf6JJmEPXuJvq2CSPk5cNq",
  "key16": "4kV4X4ATZ2pk2nLitDehvZEuwXYHCSwf17PmW1eTrmjccvYbuokyeoJy1V4PwX2GZYXbV5aPspGTFvQ2xLouYui8",
  "key17": "3F7Ui1ZM5ozfTAPrSVvpy7fpJ2pudLhb1xe3aYpb7Ajudk2z285P81f9cKQCTozP5yk1Quv8Rb58yZpbbX4w8Wyx",
  "key18": "4pKJHhfpSrcuJzVTqjaktVSDKzWeybg9NvjCBy2wTnEjizpa4QF2bLKmVBeLpgV9JBv3SbSmkSeCDMj5x4sXtsaq",
  "key19": "fPTwBCQPBBnedtEZv3YM3EPhSTg7wYTN8qxhorQMdHqZ8pMdQPz5CWAc84axKoxAmoV7eSCdSiKC8YQv6JgYXj1",
  "key20": "2diWbPsZ27gMxVJUwpvD7xZRjfkjz582AT8MaJuTabSnZ2xu8u9rBet8cdS3CTgtvKwRhBrhbBCRiyRzL9uBsBzJ",
  "key21": "5k5R3aaKU3ZaT75TjDtNnuQ7HypXcdM39qwSjHy5u6JayCa4ZbvfY3kbpbhCM2FLr53MRVxjtPUPtiG4eEZKmKFQ",
  "key22": "4UEPerdAoftzpbHno6mck53GQTHwUVzupcndBpT4ymyqCRyDP9xPuLqYnhKYrjSDyPpaHj2brZGFLw26AH26dX1j",
  "key23": "3YnEKFQUrHaA3xBHdmK6wisDBExCtSfmqYp4YJn8Nm9Z3kRy1KYAV2xScUjPU6WToVXmK5Hoic6j2QXLaKAwi9sg",
  "key24": "pvx8Rn9zwcrz5cyaR95PagqGfq6ek3wNDdhd7rQov7soZ8uZjCZwAJL2TR3hfvhnpbVsvG9gj9i1Rzmro4LuTqi",
  "key25": "28xFt576pRmSbybqko2SvbYgvxprPqUyPhXsXoo8yyNn8632Wdqe82Hzo8JmsBKDsXQbVxY6NKEcLp1bvG3vfpnR",
  "key26": "4mRGTrVBpCDjCwEKYVfqammkDWS5yZyoXPbAx7EMw6xv8wHa8LnFgiMp9upwqFhDWPdXRFgzn65shPPJT92Xn9EV",
  "key27": "4gxzoMMaa1zTjygxpaBwvwSZfJnY8MgNCFDLMoykgPk4vyASsVksJefh3iGSg9YTYngDiSoCuMit4SWXuf98Ma3S",
  "key28": "3kqNJt88HKXALcmToiaqA84UTyeaU98FuN4qGeXkbmsv454N1aWhgJkahwSq2yYiS2HaQjLhKJVDbgqLz9kLar7f",
  "key29": "2VM3DruPwd9dunX1RuWr8riZysxeoeyXHpjjTrZDdHBVbARpZcr8X1CbKQXJZat6StY49FwArKvcUry2RBHpd3A3",
  "key30": "48tSqgBVtiCfqo2Zxp3CV5B4k1iWBmQf2RR7hXQ1EJVjGf76dQueasE6vtKhMGmodjvWJhgrWa8RCXDH2Cr162pN",
  "key31": "2ysP5iAEEvnskXM9aSU5MZrg7V4A26Wfep4vU4aQ5stYiBPF16kVZrfFRvJuScoKpeuBSbon7hRaY5y7hanwcHhm",
  "key32": "4ei6TZw9yPME2w3Pha3pQrejiXo4hcbZd7Zfyut2ww2rqefUbqYZWAbprMFgC939KZJ62GyxovnBYopmtfpwCKf5",
  "key33": "2UpvQC97GSPr7TAz4SaU8A2rkYfgar7QS4Nyv1JF32xN7trFGmh23wLNoNZQ4EbqoAiRAEAc5YHFHAmyUYqzo2qc",
  "key34": "5JksPAEUXuYyGEwHqZpGLE4rmaoCfbzuk4gHw5tDGEeywzuhva7MSpwwwPkyrzWTAcUkbBCJDC7Xu1MTaxfhFpjD",
  "key35": "2ctp5NTVcYr37PzqdfRhJP6ESRdayuthoKsrAxzQRMqULYd4WYXXKdEMjkS8TvoSmoAujER4woS6CukFc8kTcf2P",
  "key36": "5HqYB4jtHnm3BSm1DAquiamBBXPHYDtsh1rgFZkRzxhZjDuqzDhv6n3wFashahJ3sVzCZUagwfXbYkeB7gvFZ5Yt",
  "key37": "3ntogiA1mUrhdR9fNALjZk5EKWUsBxr7ggE3TziwX8i6E1yVJTw6ce47qcPxwecQXCacxytyzaq2zrM7j18f8cSc",
  "key38": "aGA8QyhxkrNveoKdUXkN634jhtZQ3HHaTEJeKpPZYg1ZfbdFWoNwVHfrBzD71EgaxZmQttaUdAFccgfe2wBdoij",
  "key39": "3SJ3EeBSfQHsm9R7xyZzwbLzmB1oU3xeWFNtFz71syYJqE5C4YSB1HTWS6pmvEabA2EQsE8JaYyqS4oJdRZrvjHb",
  "key40": "S7Y3FhomCN8poQmqJ5eVyboD8iBdM5x5qEQyCWcGPAgJKMSX1T3jXCjw71dPdEV5pRisRGmmVEunwx8wzumiuSg",
  "key41": "UBZAQskfigWrNc99bVEuh8TH9jhbxNUE4rBoXB8Poc6NzbyBRZY1Y9vLjiBgpzggoUW5JnhWaByxsnxbgDn35E2",
  "key42": "49dH4dSotwptDRHhkr1vzUihegiytZfLzE3WAMVQDE94ddax2rPQnVGJSuviCmXmmncmEZ7HkWR3fsGDve5f5fyQ",
  "key43": "24DTrYgXWK1r4ZHkqz78eKyBTSffiE4Q8R7areQuGVM694qHgFVABZBNGMbbCEzgt2oFSrewwT7gBD4CR6rR5JVH"
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
