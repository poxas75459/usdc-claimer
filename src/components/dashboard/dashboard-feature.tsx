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
    "3ewrp9q5ciexmMrpi5j5hGkknbHCek6t63d67cGRMB6Ycx4gQcQDUt9HPewBJykamAwAFwhupd9FvjSSCu8GmaoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RX2nuWGohgJPRhsJPTA4dqq9U56V8azC4o88xtDzYnigdAWDDCdMpbFMHDSuJ61LyMDcM9X6jtkToe7xKSpQJ1f",
  "key1": "3VujutajkGQ2TtCzmfwq1TA8SFfdifAd4cp1qbgpwyFvJ3D9W7GtnzUHWFFvjczarvWwQc1GnF75YrxmqsXbZ2M8",
  "key2": "3mbWZFxfFD8vFC3ocxZr1oVL9GFsvFX9DR7J7SRY1yDPn8DrgAMfLUfnx1nKs6jgpZ5jeJa3VP8GMA1tUcttCkVa",
  "key3": "3TNa7ZVfJmFSqSrLutBcbeYJ1F75GRZWppMSqR7nSVaDZiXNx3AQdQDx6wKokL8Ukx2Zx4C7SbGDswNcaiBrCazX",
  "key4": "3jSDuPERhSrh4PVxbAhysX3hmTZdCctDqxftjUgym1KmRMKgaibr2PNvyPc37GBLSUwfJBoVnwpWSfF8vzFkavzp",
  "key5": "4cKELuNkPfBL8dG3v2YeANUbrwoza3TZ2AQhY8dBxXoJKoc3LWtNa9am4gnJwqRQ6krAoB9AnEgcBLRmePEKzMcY",
  "key6": "3F9KQuP7n5g9BR2uoFDWCCnLvvqqauwzJ1PL6RrsfxWGxZsTYWafe7bdw2UzWbqYroz5c5SSo1qVTDexSPYeYB8d",
  "key7": "25f1M2WAZ4DkAupdPejsgBxPcGv1Fo49AWB6xJVDKeVkUVsTmyyXTfNn9i6mD89kEj8Zv4zAYhDuKh6wA9C9jwhH",
  "key8": "3EiPcmrwnK3ZrpNQASF3TVUarvb25rp79Regf8Vb1FYsouHXQyNjF1GXxbKadYtEZU5vwq9R5aJxAa38zFZDHbaP",
  "key9": "3sqpGX5HSabdpfsFMahQXKS6yoGkTmQh14PMTS4ydTFFBwuLYAvMdE2CHCUg5Qmene8ZDxxFbJHH4PT4Yr1X2NTM",
  "key10": "3Vq2E1EWfGkNTWtkNy1ZKtPST25Yg78WAUGWqC9SaUimvpXjq9L9hKtABb2epcPe59tCrM9wEBPFCXpyS3tLcFze",
  "key11": "3mxKGASNDpRVn3AzzqZqkTBZoZCdW1XzUk6WEfh4C1bJSWqF5HnLRzo4hVqeJofPJJxMEK5SEo1MHhsx7SKxos7L",
  "key12": "3wf4FKNxxAfcmyidAkm1Ksagzp3ZK3AndzRCE4ey6eNmJgmRSwW3Wnnt9ok1X2xyWyLfRu5C3nQKjzf9bKgi5hzF",
  "key13": "cBKy9t8wDrDMiLmeae2rUoe6bY4wHzzNzrE3GpW1AvT5vgWGiA5FQL6FV3yNSY3xDXyh8iLRicUhcYwsMGYWePy",
  "key14": "37KaGd5G6Wbj7wEejTAECi1y8ZLhqyZFRJ99HStYdmhG5y4aMeKZGNhK3Ut7Dvy2jsLeo6EW8T1MBUE48LyUXjpJ",
  "key15": "45ma8BXrNqdfaVH7V53EmkPGcjoNPCLQQKvtzgsZgKbrS6mhSNAfNcVJkCQ2EnZWiZ4BCwpsLDxxhhsrHNqV6d4D",
  "key16": "3NWXfxk9ERr8mJoithbwfpG2zwxiriu6DvjNvSFwFS8xmjCeBuoxtFpQGiYXs67e7g4QRsqZrrDVJwwCzh2favRh",
  "key17": "4r8osbmMhasGEdqsZZhJ2nGcSqfp2JRvmTy8VWxgNcc5BwoQCtvEXRkWZFM6mTypsZrUJe79nS5mookqrpmdxFx6",
  "key18": "JAwZ9vC1VKSQN6tgXE2Mh3yUFWR1LDXLtypPG9CHZ2yKMSEayspRA9TyVkvVtSuCQ2p4au3ZZDTD2AtPHPR6RmS",
  "key19": "3pETNcW8Z9FdeYgTDXrLmhrbBY19DX6vC4RJeC7Hf1nwZiSxDqHHDq2jcwnXQHLyzwTYU3ykiQUPvu5JZs7miLrJ",
  "key20": "5E1drJHUpXyES7dvoF5VPabLJknX3823rJpdpZwXfxMfHXthgqQWdDQVMB6z2JoX471rtyiAiB5VGo3WZH8AG4mQ",
  "key21": "3gaVJbabUZ3gRggYPTfDcCgVk8T8QbNLuk3yX4Z5dYxUvrAGPbFd84qUspoZ2GMJXDNmKVEA5LnZoxKTdiLK1Jgt",
  "key22": "3hnrNAh6Fctzr9jtfFDnugPmXhrdnkSU59JymY7RyzdweBzsqYwvcUun8ntZLygpmZMzxZpbXZS64tUEJ9X7nZpf",
  "key23": "3xd7gLajCcLTncSKokJT8W4sNKWAkcndYHxSeR1fRDTqcsJ3Bp5RDzXw598LkfVEftV89h8Uc526vGYQ3gcWRWvR",
  "key24": "3ebn5UxfVuWa48Y6n4B5SC3sRF3exU1E7TdeEbCYEvzT3yssz6KA92bE2Y5P1wn6AxidAYrNixeEhBnYEC27V4YS",
  "key25": "u9arKMugiZZRtEtaG8a1MPC7DUyYRrFnBdEZDxJmer5y3s2kf86KSwQSrXzJe7mvbabW83TVd8wup6NmM8hpo7A",
  "key26": "3eTpd7Qd12RCmCEfnXcrBkTukjAcjb4wLf9F85vdPVuQHb8AdAT1MBYUKaWsXxzz5eXb3MumTyxmeiCPzYVrZWb7",
  "key27": "2C9bow2breYy531P9xj3zwhnZ4VXBY3c1j6ScnXm5fGKzusTnVVvUgCKeC5qgSMbyrQaAS6ALN2wYpuz5zNeKStX",
  "key28": "2BbqGAFx5KHTcf25UJ2pGxSS7NBkanQU2hyVUy818eBj1qDqrKTepmDNq9CAR5SEyrb8HWaNbHGAeJMiwGtgBMPL",
  "key29": "5nCCUeTLBfAYomsKnuVWNitz5LW61bbXpB9AFzmMjRsrfS4UFsyLty2jbPWk4N4d3rdLf3Myk8hQdecoxx43HUBN",
  "key30": "222YnavnzykMdoNkbXn9zMZTNPfoW2NBQfa77RkVDUUEscrN3VKqR47w8aPjdVT4JSgjL1AHxZfHyuai5aiCK5r1",
  "key31": "4AGB8X81H8V2J7K3HpTLMdHSQeUUQPWKVFWLhSvcpQxX1VE117y2u8kHaniaSfedXxA8Mj6jJC3EnqrJCD5Zxehp",
  "key32": "2x7V6VF6f3Fn53sZqoStJtKgCbuSpAF2SmGztSAmSz5pzsgL4jn8F3BTKzhNK8QuuwCFuuwpqKYK89u62pMbcsKY",
  "key33": "44XnbyQAC5JMUH4QoTopWrqZUnz1LXzzbSXsxytzNpdaUNHAzSYcxjejTQ2i3qVoHkZ1h7nsjK4QCHRfyiS2NofA",
  "key34": "5kmpY16kFBgxaFoxc21kqMNuNViFsa6HRzFhCodvGYLi8A56N78iPtJ5UtwTkyh5nvgtgdqD5xL2GDsRwbfXhi1Y",
  "key35": "56wdmoL42ssgQAv2sWFahsTJhYm3dFpw72ugYhVCu9b1beB3eoMpiJFsqQZ8WVTSwq43K6RTiHyReoo7NYJp8W1u",
  "key36": "2obXUrkkNdUr3YUFmmpW7sgQEffJb1GZqzZ5GstuikFmYxpYKXBzFRMGKqYdkzQa7zmTBozByjfEbE2TmvekCWLq",
  "key37": "4PwsSi35ptwoDijYm14aFe2hjVszqfDncbKekxJKF73Vmkr7uMMuCrR97yqNWYnzrb9KeYLzNVcfaE85xdo7akGd",
  "key38": "4g3wRQ7MFX9fNrmshPPHfvRaK7HfqpLPAAhCuREPBRxZ9pMEEBkCiCSbACaqoNYwmSZS1kW6opzR8B45ChR4FNgv",
  "key39": "59JpBErJnBJ45BS1LijCGEcnizDaGsXA649w374Pw9dh3bTVyKcupK2CjkAYfYfz6RY3SNfSxo7GhKoVUnvRR63X",
  "key40": "3yRBfcK6ToUUYHQ4rCcFrEYB5AuyHYASGQDY1xXBL5hegb9Y2UwsESF5bB2awueof7qtnG3eDPFiEVmuXfMeXEQz",
  "key41": "2ui4teWKxj2apFESTdZqNX2JZoAYBwMGNyESvZdjy9b2xPwn2THmYB9y9iYc2FZiWsBbt949AdniDobuEGEgP7s"
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
