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
    "47aKZGChTvxKznADVuKwwADTPvgPUkdCh5uRUandZqTPzYBnuhNKBFvAdjjJ96YPZwCLXyYNSiBTZsa6YCbN9n7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48p7mBgt8wgAafnq782s9774kHdnR5nH3uixgcTy6EqawwicDrkqiG6evZbtmjyJB2NoeSoicgKR1ojccqTkDcXg",
  "key1": "3SEQqF9SZWjvPErawqS6KtC82j64QmNXU7U3T59cEEQNkkkczt8sAoWeSabKeeQsGHttLdbDptAqAnuESgx9mLCr",
  "key2": "5euGNS2zEgkrNC68nG2NdbFtZzmmRiNrtUVPgLHLTXCAKULk31WRfyScTxMafQRt5NLioJeHNpfdxhgmvRJJGg9E",
  "key3": "cnM8Y9K8vLERZvF9n9ZrfeHqUphE7Z8UGhTJvgBTwywZtMsh1354kXQT6EnnULBWT8kSebDitzP222wvfzmaY5S",
  "key4": "3NXKRQRkT69LTgY6euJ3xuQJsEDURJao9CbdX81sJjmq28DNp2yf1JNCjn6PtxxQTuyZmDXHLcivdyPR3K5ZMVxc",
  "key5": "5ZNhW1P9A6ueDopsxqjKXomUZSsLg5SKDt1uzk8UN3TXG1phBZFqySsYUCs742iv7Q6cRTQAxfQWxDS85q21ah3H",
  "key6": "3rMHhRssBHhVdw443FfaTADqnKGGx8cA2zzxq2M8MRMExmopuAaNvq5oinJxjxBicPfmHtDueBzkQ7BnmkVLP65t",
  "key7": "41kVrmVE3guRznu9aYbCD5yfTKZwFZnfCuoJh6ccGSs2cUaSZtNANGthLjym6qJkUVeQtKev8e4Y3EJrjUmV8gbG",
  "key8": "3zStGjLnohn6DgueqmLMeGpaCj436sEmyTZHKnKX2hw2YNYzeKoBXNqvzkbXJvAuL7Cau8pAFEskPDjPq9hfmhNr",
  "key9": "5aBemZzNUcDgtEewiew2kAkMwbGWXm8RE1CBuY2oajVYZkgC8hHsTXCjTT5ALkqaRsEzNEWAaNkgYRHYeNzFJKQ5",
  "key10": "3U5Xhji74bGRkFAczifBhQ5dxGwGVmfZB6L7XyWL8FioZXm1tXUHZENSjXHjpR4Wjmx4iXyWS9CkuGTjTqga9nZu",
  "key11": "4ZyZrYGmTfetqESZyjiwMQArcTygW9usg9z5PsDB8sAzuyCkALGSm4vZkPQNbqa6UP6qkxR4qyrAwnhj7yWugSvM",
  "key12": "2PTsV4fJcyXAxyxmwGTJSPdnUFnTRPeeJxEuTKXm2jQHaN9wnfWuqaXMiBPJdECJe9LqdZ4F29JLoXspPpuvovpA",
  "key13": "3DWkvvVCL4AvBeerVEPdvPkxRB87QHietoFm7WSvNkDzDSPg4gg5PTSCyCaHMxw6Lh3FBRGZ1jTjsfprccuNdpUg",
  "key14": "cUdsJp2zSaRUdTUv1YNFHMsJhCMEGYt3BJm9dPYURwPn2CjEs6KRLju42x9r9cbhfiCcFs6AR19DPgtQBY9Nfcs",
  "key15": "2VuDm7xNMUpKwM5cykYnLsWch1xmox3YvD9qo7r52xedcSDG2btgimgoPdunswhoK1V3cidUUuzijiu6huNEx46w",
  "key16": "4LXzryZk8BxEC8ne5jZuxBq1QCNeL8r8bVhcW1nLfoY4hQJQviC5ctutYRubYsTcZVDKNYXVe75rz5rEECKo245q",
  "key17": "472edeJkMQRcCY3TGSXchFCbhuubxrqpRvNDBkTZj4BipdnCGMtWTzkEbukdyA6gFZFTyjxGQyZJa52tne5nJvyp",
  "key18": "4NLHtwQF1ojEb2JV2gj9fhP38ooSxv3jzEgbCtc3rFDPccpRZLWu66NXPUg8dFN24D6a83TWLQiR52XYePtpQGT1",
  "key19": "SYfeM7TEkQiU4zBKaQ45ZyCJ8gznDxbXrTju3vpnBXxYxRXUyKuhtBAqfMmxgvNvNoeFyT6Am15ZA6h36haoxfE",
  "key20": "2qTdJGeTs7hVdHyhjmpJMEXwVyvCpYnQaeWtCtUvBNzkLEJDLwi87sTqL4ha1NxTH6zvMedYGyyq3XksjJKbij9A",
  "key21": "22XYPQKiSGL2KJLCWksRLkbnpFCZwiLyD8cdEjWCePanMDndUykxXuJR9Deff4xKvuUGVEp9JNcdiXZbEqE37MGo",
  "key22": "PwjCHoznYxxApJ5fpu1Se6FmKqsDmXnnezHXg6c3tpmvyJbG9F8hQbQhX1scMtipdtRfccwaRu8Vx7vfzabaqRg",
  "key23": "4zrYH53MF2AtsnoqdsDyfEjCFGJE869hEDRcewddELUAVLuUCiHQqx9ak1JGpZYu65SuGLzX9fkM1EydioP4RFTr",
  "key24": "2RmRPNqkG9hA8zoYFEds4WK1kxN3AiYjaW1cR9yp7ocom5Y1QQ2woxhuSAi4dZqpfaZgggcbWEbHXvkM8duA7Jyf",
  "key25": "4tJMsHbtRfPa3Uv9gQSxkiWuPGvVKrBdWco7gdUZUZz2rhnH4yfid84DkiUdupNsxDiqcyhcrwNouMTsEpAqnYX9",
  "key26": "478mdymHwJk5j1gocCxB6iB96VqyqbKsa4QPcgw2s2UuYSaxwuTVeQXcqWbvYKRLzNM4r6yNmVCkpkYVdC2PkSxM",
  "key27": "35iKBucMxBx3F4r7unz3jA918kJvgSEUTrBhnDoHS8jyQ4A9naE3iueEPx9Y7vWNbJ8yTbFXDhoYUdWrgWA6yYxe",
  "key28": "1BAadPzsXqYzprGvUWc9fFY3ug2ePBr2Yi4Q8SgLLAsuLJGZ5kP5E5homdihrw6RxUhSCnuAdZQBS7DSDuQmHoM",
  "key29": "3tYv8UNccg8DXNFAArt7LD4isyHd4CnYtBj9m96VrNRVEuRkzzkEX9t8tQA4f3uoVeAmJavhGGoxDnmsQwjPe9ng",
  "key30": "2n9KbNMWRDoPoNARuWs6PitPQgy3xhie2mdscmhPd6qsNy7mABPcm81EkuAyJvnJxAv3eZCG3RvpN1J5tsNm9kD",
  "key31": "oFUsC9yXQL1jmNmzpG7eHjYDoyc6rzsNAvxTJPEmHDV4PoeLWreoJFNoctFMjXsv4rjUSpVBbd1S7WNk2LusQvP",
  "key32": "3pcSHbPmrhMsrfjGEZovugmsSyCXeB8HdgHhY2C9GYTQvmWTUfTxBamPGXSzGeAM2qKSE7jbcbw5xYkmGJ8L5Xaz",
  "key33": "4ncpj1nfdRWLq57oqGqoxSSaKvBVhqcsG1MJcxu4vcZGSvEoDAQ7coZTA7TNaYGqrESJV5ryvw2Q2Dgv3xkAGL7f",
  "key34": "2HTTBtQHt8U8nXTvUZigfFnLvMULGhEabsEnUnqaVvieh31gaKcx6sSKW8wVasH1r8CkHmoHn6FZtLQFAQkZ7qPi",
  "key35": "k9dWBj8D435pt4ZuYf5v8LpihCkHJquwg4srpaWe5F4qvvN6ov8jK9goTeMLECJWUHATS5zVNftg6LX1MW784Yv",
  "key36": "5upUHpRwGtnSvyvk9xfJexiLgKYKaqPW3etWn1sLzyahAacTixeaoFqvzCErRDw5GN8gEba8SQe8ZNXKmFjf3tJU",
  "key37": "65m4Xr4KAkzDF1fRSxUeuzvTC7xtoQ4pRLJWjMhuvrGLv4S2yv7ZndxF7ZZoqc3oPFZFPLFFKwhrHQnnPj78XpBV",
  "key38": "3UVcK1CnEeZkatsvPWjE6kjQNQSGNPJL8e6j4N8ueAz2dwhFtYtZ5LpKFxSC3eydvqTENDzHCV5Rsqmrw6w8HRHu",
  "key39": "32BdMho2mNHjicYFUPLjxYH2kbPCu4SogdKZQRFXQCisPVrTsNofBUYodcjkmfXE8dbB58cnLk42vVZXT5ht3JFr",
  "key40": "2NbaxL1GUSg2phrm7sbRHxhFLGsBvxKFNr24RmiYCYh9SeKRSQJXPcYVGvKC3vc4efvcXPhyDUifNvdnjf4mDA5s",
  "key41": "4vQkeCJo9UksWVxuhARYsDBn3kUu5LUBrL5vtPre6quLEjtGPtzXtTsipS7jfiAN3Qy8ighTqAGG6kFcRPTaG9mS",
  "key42": "3asntNLPp9GkkVy61ySqZf3aftp1HS6KnDWMxLcPSBBRNHQj2cHXR9Y4bkAqRu7B2KXhhX8XH5EXGUVNqzJVUZfA",
  "key43": "2mUygLWsUEtkcu75FNub5oaSgcK33Uy6BkuwXC6RLNYo8XtfokAyZcLgcKuWzxPCKdCtnnXcgKK4RKFYPUF59CHs",
  "key44": "3MjXwbEJkJCAvpDnHisMhRDEwU1d2y2usjFMeDhzzxJ7m3vmCVtoEB3QabUcpjNrnozc8Pq1yRDNRT4Mpqh4vBGj",
  "key45": "4w9eu9eg84xj5snV89mipF2kkEmE16syt4kPAWFCqyJ885Vgxk7PcC8jmATqR8yfZZxNKrietMGkN28qr9r1RmVf",
  "key46": "48XSX7VghWKXrbc4mvwrZUqbVA4Jy2WsijgCRXn3N1nqnM1tNxULX9G74x5arspQRntabVsiwr5hJK6Y4L71Er14"
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
