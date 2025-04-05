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
    "sc58FjmbB4RusYMpJEsxjNWJckjQXhvzJHiR5LywhyBxFsmfjT57d9tPJaotDg698GfAyzdc9qjwX9kDcN6nDFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YRzQ6WY9ZFzCmFLDxgnTrS8bArn1ciCrfGv6jfdaDMMieCmbpovLFd1t1FfMiaPKQDCx31e82AgNbLiFXkqpgxa",
  "key1": "4f9a5GBL5srFAXW8Ervm5wRt3QVGgGNUbro2k3NL3PYZT51TX1tuTfffvZvbY78gWtty3TGC2GtRSr3Krros32E4",
  "key2": "hdCDwmDSkAa2kLUXhqEP1sKCS8XBM5Vw9vg6G5Xb2zzG7TP5RS2kSb5K5ycnFsZzg3eRTrUR2zFMENwRN2ePiLR",
  "key3": "HeRP3RNPneaDGYizcjnygnSDXPiv1ZTZnfzHSBrmP6Smwyg5jbWjt2y2kKXiMDpDZoAmvM4PU7c5wP7snE46gcF",
  "key4": "56gfvMky9PYaNgdQ4gV436nfj44XcG5mmmr1geRehDrW6GG5hTd9vXeMxP9ZTNee31Rtkjdo3NjEykQkePftkSFk",
  "key5": "4FhXY1tpWfyQ3sGAfKBkVZGyWBUBNRLi8RFXR17tUFKisBN4skHcKywcDEHbXNAcEX4KRnTxKMCxFmVBXtmLEyao",
  "key6": "fBM18Tsu4gJUX7XV7VHXH4feoMUFrkyuscdr9js6F1cXrbGP9dak3JNR7pYTkkNTaQUEVZKss857QXoUbiSqwAr",
  "key7": "4DTvHxECm2t378xwp5tukeR1KuAtnbWvRFBJZoKnfR1mofoHa3px5ueMcTnPXUtaVAqwVNBp1Y6uCH6sRG9uLvmb",
  "key8": "5dHtoa8otr7NVPzGPPqxkJd179zxagYVemRj1eTp7vLWRWF5zKWMApPhzdHAVLNFBtwhf6NfyC4xwh8zUsWhenS8",
  "key9": "3YqN9vL1Vqv6zZn7GMteWgNWjcaJB4baXTHYdZx3BSGfxpNYWfohtag3N7Dwm6cbQUFiRrHYxyCftPCBbiRZtteU",
  "key10": "fpHxL4FzwGUvFnwUgXaWkaU4phjEL81K3aKoATmdfC2LtVJmRiitRBa9uh73zZTQpg6SpBSgmc9a3a1tE76Vs2D",
  "key11": "4LQ4Ka5aYhuhgpuuXJohTmMVbNz3Aj7v92AHPaovFL33P7W4eyfoJnPL6wW9aPd41zrqUntQSsb8AkpQtrSvpbkd",
  "key12": "4Vmf3GNvSi6cWbUMWqQ1Zfvf7X4B385ViEHUpmo6Xv2aFg4SdiZxTjVjxNwXgguhSDcN6GPqVEwoKGZ2bTe93VzE",
  "key13": "3zTojHbXNpQR21fYrQvY9DWVomVo5YLoZkebwBkzpDCsUEvisNDmkQwxydbroBBErj1s7BEoCfEGCFraPfnQrXAv",
  "key14": "59sG42ThfvapD29zBWj7zG2NMhB7SMmREQxrNZiyxcNkxXyg8fX1Mysdp9YAYkUBXnxo8ybBxSkQJajA791wgPnP",
  "key15": "2fTUBu167FP7KrVx71QwKtHJ6jGRwVyn7acGg5okbHML2A6xRhJgh9Fhp1SyUPniJS58ZuK13nyH5LJYLiEFzBsF",
  "key16": "3D6zHdE5m9MM2qCD51bRUqhkx5tLY2uLaivpgoXAaPn26H6RM3p7jJUathmdubYjUTXj2wYUMR62ws1ywij58VVX",
  "key17": "64tXDfc3wgx47Fwfc3FptemzkKM4y4dVvVyUmiiMAT1n92e36YjAKRyy81wW6rdqzPHp1zMR73YfLb3WCjZeQ8P5",
  "key18": "3kHXUYtMxEdTT9jTJiVW6q1DX1HGBN9wx2RYPdryUH9AyjYjEdwt2Cvo1ob2oZZFhPrUVnQ4zxtnkgWVajYF7wMZ",
  "key19": "2y6HQ6iXymeGqJXx1og8ZdDYVMb7mGVY1vN6nLJa1ZqMFxuXeyojZ1D35Kb37pMHZY3SE5Ug7RReeDcQSmQySMaE",
  "key20": "5yhztPnsAWG2jRQqDzEg8PViGhJ9R44FGeRHCRBeYgtZ7anwBBbVU9ga9TuFEMN1RAf6u1jF4BJQBTWWFniNupQn",
  "key21": "4E6QSPFDQuoqg2EWb3quQ8YCrTGh3aXMG24HdgCoYUJmSeF7ZPE1JnDwKeuiVxssZiUdnXuUeK3ggpUWWYDuhuZw",
  "key22": "aCUaKV9fih1b9MLFLMkRkmDZimj2sHd2EvqeYLMJHydpFfq1Fr1qnR8M5J9z7kPqQ1J4B1jzSovektgdggn1uss",
  "key23": "GSy6CrmTzCSnga9hyHdKFa3gdgYJLbaNHeFVAupMH2XgetrzfdH53xryPFMhD2EfRsyT5jNAch8QUkR3tBAMBjg",
  "key24": "2EfzPAAhEvjhnfyGCSzbDmi6CfqazKrYRXYw6nEF6vY21p3WpDq9Pwj5CzBFJgcC4KPk7bWzJwSq89pAFztwzzGg",
  "key25": "3dkhgZVTGtbzezREomMuWhBtk5PcTDyhGyboveKb18A2d6PyUneXFzN8LCmBzmrE1camryJKAoLNHAzhqXqgfbGT",
  "key26": "4Wu9K3u9wmzgeZMhF4yPdNjtaypMtZtAGSqnqehn2poPajrKDMeAwoEV51cqX31P6CtJXNk9DPbZjEktXTQZnNfQ",
  "key27": "4curK94rJyCxjPppnfPkwpseuuJXL2FWySfFhnwJrDjD8ibXkhUhkxoU5pkw8s6xXy7fzrFjTLddvTtdyPTbLBNf",
  "key28": "4KNjFmyd236GyaT9cuCKZ35YBLkmGRaGZ1Yf4zqNzNMxsycu2cB2WymEb8nXdntVQfNeCDJtvW5WKvNYi3Z7XmRg",
  "key29": "XwqJytMuPTbPCNr4DPSVQYgsYTyCHKYDR49Jovo4STmw7sDEr3CqcTCDCBYFeJJLXdNo5V8uXpVTqkQ8LQPi81p",
  "key30": "YF7dmuveS9K1ouPeeSkPDY28WTu4sM1B88SGjzZC5XgSKJbhVf7JWNgxwTt2RQnGswAvTdgdsUwGVcWT78afgQb",
  "key31": "22pgFzZpzwqo95hqMufSeW7dpdM7kFjMhEKtikszjhEJ5KKzDcCnPXFoCd5FrMuoBExa9SLrK4qxHM69QbBbLKyh",
  "key32": "3szvG2TkRVWpJYxuJRv4QPXbBUJo2jtTup1oaCUaQY4tC8pZJKTgo3v56aZH6rPCFJ5sjxdvCAUznQfk8AZGu3gN",
  "key33": "5cPhkWK5ZZvBmBjXpF8jqLzZyegT3srKbFbqvKYSRyG5MGu9ER1Nzov4Ai3X6HD78TWuumMSB81SBM2iq8G7uQiB",
  "key34": "5QdNWvA88yDiw14mZ6cCcDj8WkckBMJixugWadMSE3pjAEqmnVZsvUodLspJc8Rgq8pxMhgD86DTcxuSTYKiTH4q",
  "key35": "4DqxYKzknU2cDq6pWGP2mWpLKEAXmnJLETCZduDYaajz2ywiYUNpKcEZh7SXcaS323ZSA6s8EZr6ApJXNfa1X2pc",
  "key36": "67UdKrdPFpzKj5dFrH5N93KNjQobEhmawqtTaJBQ31rR9iMCqEzHAPRCvw8LNGcpvGUjXwRVLyjMmuJrBQMYjwhy",
  "key37": "ryYsBZHfdZnWJ3b4B8GzbLo6GVTgQKgPK4XbyBKffU5NEL5E1JBQNpk5Bs5WmB3d9giFRGXWG2BSsMhMphSSKzZ",
  "key38": "4qJSiVfWpw2VxCkFiWWsxymT6WQ1yCJusQv8tQj7fQcRNACjpctoeVBLrEJK4wjRTuDGVr6xkAmfoN6PFHkDqrTw",
  "key39": "63CGG28VYoGWzbu4qADNsqjAV9VC3WMF5mMR8jFLbZhjjYo9oW62rWwpFv4f7qx3voeUQ6kMzwYAzzUpCzK9kRSc",
  "key40": "5XTcPJM3Phw1uxu76khVf6rRPTqEVwSVMXPZ3Wsp6xybQk2jDNEEnjfsbySkpy5Wrqyi5Rfx8SL9zwe7mZMoGTL9",
  "key41": "XMvT69H9BvpuhHM1qxEQumYuru6dMLAdFNpdZtsRpLKCDcDu4oALbSJJQuXq9T3G6Q2TLtLJrfJ15Ny46jy6VhG",
  "key42": "5ETDYNFCmDTjYgakAPsfJcNiXtZoQX9NbCzGsoiP2ZPELQeJDwTGn8HfFcmNU7UsBBrE8Bf8Z3vB81CWUsX1USoM",
  "key43": "3JJ23L6Qs8f2T4mPu6g5GP4mKxzG41cwRNn5c5bE8AqBoDTzPs8yo3pmU2nc8yQqoKrWhVbKBJ4E1cBxfc4zbHdk",
  "key44": "41PE2TPjbY9qErrrS3kUnKz2Pv8Uxc5jnvWEY7fMeQaR8PDqU721cVyxD9aMHk9GZYZ5B4Xo6bJSqUQSMa6DNtje"
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
