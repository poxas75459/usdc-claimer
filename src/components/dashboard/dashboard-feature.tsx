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
    "QjnByiNk1FuzkUmc9XqsYpkW1Y8GKUduS6MtcmnCfwgUFWc2QRNexP7pUbWXm7z7HWqvwQZvkWjPKVD5YcqSqVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UmVtpaX2VbLUnJNTmCs7pd55vv2ebUg6v3Wg8k7JUXBgEMvTuJa7ACbD8BjZprWPZtkkjKD9ubDGHhfUP9unnc9",
  "key1": "3NzguBnKYDVX9rof3Xo7edKFNsPv16rfpr5qidTxGPCGuYxSuuiV6yi2gowysgfaNsD2QtygeAXTWuLRt8ccMo2Z",
  "key2": "3xXndvdtFcyii77rBDYSYE7a8xfF6xfpdGZ5XoLSqUmUJ1kfG3rYhTa64vj6YQgRWVW3PRWcrLXcz8dhuvLu6ZmN",
  "key3": "49E6cFsSjdBPDhof8hXxpStYbAEx1eGjqqa2zUbg3LWYVAWPYSfUi9ffAc9Ku552jzRRNGwJgF6NQHGS7YgMf9gG",
  "key4": "31woa6EYFNn3Hj8wVeJsohb7wn4FDH7XwHnR49FDvaUxmywiMB1FxwsyyVxKVbfGBaks77oicjCG7giS7Hcky7tf",
  "key5": "3NUts4LgtiSqQw2X4NPtDHKGo2TW96eDPRM9EK26vToTCq1qmnNPM3Sv6gYXste4DX6PuDtvGmZnXg68sk5fTczA",
  "key6": "2YcokrFexHaunSaDhETHQTQzRC6JzV2mHJm6s6ntVPRXYbGYMPxSSVqyrRGbA76EiPusMaskemr5dHMqx6Sau8nD",
  "key7": "33YHKVunBR5vwNmY6MLShHBbrcpeU3G4EMmAkng7x7Zk8YGm2ng4aBEFYJVLhky7LZruhUWHKrytkMy9JqDfEfMW",
  "key8": "4mnjrZfcEZHZFRpnjN9fmfMCvRmLwELDzo2Fa9k9vB2LyeD3xppbHgskJETNEK3eSDUkkzxXTP77zkbAcLGvovYa",
  "key9": "5wobwmugiQiUde5YYA1f2uykJU7BRDwLgnPbDm7Ykx4L8yMSQD4nxfcUJeXwNe9x9UCeM2oGAwW1e6bYdJvACSr7",
  "key10": "5GrXUjzJCz8qLRsgL5r9qZ4dnvaNPfAHAzAgRA8e7FKRnrc9fr69NtFEfJSg1mF3dNaJ9QSLotP9aAmKr3ukip1E",
  "key11": "3uXYD6PT4Sh6cxVUvLnAG6fbNUEdLWqk376LxGkjnqHsBBNVXThUqoHeL7KXWfMN2Ehruy4a4MEGTLBwymfQjKdo",
  "key12": "4c3mni415WeJLrpWygxgUX4aw7B3tuUZS7JLArGNc8MGHfXcueVBBhpW7xUkDYtVUN4MH5mPLDaNGo99ucppHbuq",
  "key13": "22X3D64grfkodQ7o67Pes7sDVWePK11EmGTQhocfJAV2PoNS3rr9FGayAFxbpvRwCbrNnxHN2TR1Nyv3LxMYmHko",
  "key14": "2m8bVGZdrJVHMbqrpgZP5w7G74frLDgLkMq6818ErV4gjDQBe9F8epAtK7izQDvJSwDsJ8huqhN8KVCSHxXQqiqJ",
  "key15": "4F4ioMKtaceBXm3MJCPKbHDd8paV3qCBMgY43hpeqFeVPL8ffUpioJMRQyEV4Zcxgx2XDQ4C3fVaJZ3cbyRfEyED",
  "key16": "piWHRQUz9MG9z3dthnUohyA9Z2vqQzUnFhL1PdKpPx4Mo2TyMPvDEqwJbQ3Bo3Hv11pKWLAWipEr3gJe7MS1PvP",
  "key17": "2W2YnpMJjAML6CZxcfKmGv7Pk9d9wDno3PKwnH2xXfdCiS46QSWb1MXAaRFZ692wrJaJUgJozEmTWzFXStPTw9DE",
  "key18": "2BNMyugDKmyBStPK6MhbjeXtZBVxRUZdpvb4Uj6f6ytuGcULF6DTAoqXmqtcbSzVgRTppWTDFPTBKcYQi7d49iMG",
  "key19": "48fUC7YWGxeRSK4PUhsQPbjtvrAY9pzujUAJqwBDh5BZQ8srvN47xc3VFevTkj9YTk14Yx54Vm9deXQAeSSvD4xm",
  "key20": "38mJVjms3bSnYdg5ezWs52Xe4rVxpGk6fmpi826gpPBMAkKpKrYzx16QFtsFWdzmTyXbLefjzfBMJ8mccFJM5LKC",
  "key21": "5hRFjU3ZzsXDr1rLs6NajPsS7FqfuJiTLqyenAqTXuNafuWjs96aRs3XJQUTTuoSYPbN4pSBCpzBRAdsfDa9qmP5",
  "key22": "5bqn5a8fUM17uGZALeCxqDpTV8e3JeKae1Umi6WJBp9oenHA7xWAs1xTKvUUBSUa9E8CbWwnF1UTuAK6dW51u73Z",
  "key23": "5VXPQZQxHq7qbY7YsKigKVSEdNVmKs1fiUpTgMn7WzjA7Mhy5qqLQhwMNAvpnsBgVqvH1CQNsFDA4185EB8DDqpa",
  "key24": "5XJMTkzWwCuQj4zcPfTTrxB9hLufZKD65g2zjnPAJjGFW7tAKxWNc1n3iP76guhh2aNqeMPDCzqf9sLQV4Gx6qwt",
  "key25": "5ZioXpduhcdYiNrhCifcsebB5kNTtCv3se3gHvE8HjfEoaXsNpuxYAzwgs3KMNpqB3PQ97Ygcp9SnZcjpgE1fh8U",
  "key26": "61wjnjdWoizVTmD8UeBpXh1cM9nF17MaBTuiuECcfc3XuUKYBZpwTbEBub3bAR5gttNVVkbaYZbMF7ogQaRLfekw",
  "key27": "5gFfUvvzkUPifbgPXyt9pRuJypB8W6NRsbYbrbtApcQBaScNvnP5wDX8uJxVTncv4PyD9qNCVmrZMEFQUszd7Kcp",
  "key28": "c5quigLuH5R896jKpPxtsohBumU4QfVidKfwpG6iLzNX1TdyemPDkZ9ks1dsQxqTBF75Gv5xNXeJyrG5UzVXb6R",
  "key29": "2ApeiEcSLSimJiQxt5mHucxWu5mFRkEYMr3g8pMSKdmuGbH2EvJsepXcbGLPSgZ7p1LQTJenVegBjB3J4gdmptVM",
  "key30": "3zPNJZfLX4aECn83sxavdyN3D5S9gmYGrEzBnwK4CMDSSG3jonZcv5KdDernrL62Ejsqon53DSdSBVQ3pqDgBH6j",
  "key31": "24V59tfXr69MjJjKUb1M6bHWACFY6oNPxRa9xRU3K2Gfp2z9K3bGreT72oWtjKWv5GkKakWUhuw8hfGoSAXEXFuc",
  "key32": "2MDykeZqV3WjRnVH9kHJrGib6zs9wn42azcs3zQRmLkRHXf94gVmqCAXn72XApfsuXyfeHtvEhFa4w5axSXKn9yz",
  "key33": "4ZZJCD7tyLqhSgSxMgYtnwvtAZ2eBPVJHUxvt1daFqk84Sxt4zb4m381c2Zjsatf4PNpXHSADvEEQ5Dfac2rSsmp",
  "key34": "iE9UbRz6aCNZB4wuJuim8u3RMTvvwVTjmuC418fNLuJSgtWLrpcSka94xcEjsh3UQThWU1wpcudmXCgQqPUvskJ",
  "key35": "2WTL8NXov8sCVcgaU9sUUywvp5ALTdesnVwe7YUieAnwr2okNhu5GiYKTvMb6fW8uVr4yaowCkRd2gKjRrFf1yqS",
  "key36": "4Gw1znb9x7do3DC3KTZKdckRsZuKwks6Fsi7ncDd1HqetqfCHqfbkN4SpVthEidiPmVA6mrFRnFprLBtBYowBgRk",
  "key37": "4e6jTW8RTLkvJsm6krTCnx5FE5feCZuj5b1soN67Gu9vKiL8acpnZN8f1tnBQKnokZEmkzTBX9Veza2aYJSyC45e",
  "key38": "4HG8aJUopvtwECNodMGR6TeDg2yLDPv2sbGEpCVpMUEB8xzLdX7HTDgTU5NjxBttQhKTXUbVNw35SyZuwsz62nYq",
  "key39": "3zM6nD14e64w8iHDXXdtD9txXyYz77BS8F1f84j8bBzon5daf6yR2LUkBtuKbune91hXVkRLdpXdj3XF5tK5hvzR",
  "key40": "4fxk4WeS9cL4owKtFBqG1wCqYTEqyXNgr3v2aBocNET7M6HuXXwT1TWzWeJBtaxXsJb9p3YJMoMyLKwc7on9E6AP"
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
