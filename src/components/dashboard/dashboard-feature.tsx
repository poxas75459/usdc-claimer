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
    "3YeFD2MH1gF44xvacF8pk2x4EMvUDmhmhxTzn5SePsyfRL24A9aXxUv6So8KDLJ6Bp7zvAUToeTQ66t5eBABLq4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n6GQWjbw9HHm7hn5CymvDcT42bXe1oD3JYPE3fwsmrKfgowUPYVhmzyCJy4xfhuwnXxwu6egy7v42EHVqT153Eu",
  "key1": "boxhtj2Vf3R88ATnjX522XPKEwqZpGNsyZHQ21uKMeL7em5vgoDNVSFKUVQprYwzGnz7PRiU5kdddccQxm47DNG",
  "key2": "rENfEzrcRX3gnVNmSNezsjCZVoyPw4YiNQVyL3YKrAq3WUyfUYsjE5z17wTdYmQBiqUtsufGKpudQtgEQD8bJND",
  "key3": "ML3hsM8aEMu1ebBRUTfFkivTmTh6j6y1kyuDxoNVF19DhCdeMUV2W7tgDJg3aPdKAfN57PhppksJihNen5PnVm3",
  "key4": "4P3xqmshqNcnvDyfHU6b71aaUehNLbgNN84jk7NJxj2V4NbANUUmNgjMz7W3fR3of6ZbqpYZfe9TkosNd5xVgGr3",
  "key5": "5rt6LhegfSqYfQqyhRvtxy9pK2HFKkKvTFD2UwSebaQtKNivi86uZAhjnjLTvDjpQW2tGDGRwA47NkFAe2kEfrxZ",
  "key6": "s2me3MXjYi76qhHNttJEaRwayKUWyzPr4SsWkGJ6oCMAPLBZDm9q76HFJas1zX77F4ukxoriwokvMp5r2p1hEaS",
  "key7": "27Fa2Ufp2LmZ2f9XkfU2YkuvMWx4tuqLLSKsSe7V7T8vhzKVjkkaPFNzwFfrvPBtr5AgjzhX6bUJjdDwEz3hzHtU",
  "key8": "3gUQdEpKLwckbveL1EiQP7LKXn8zc3Zq2kpc3yeMdokrGke9QzV1SmvnCLKWXSZAzqjgB8vEMYkHeNmp4eWxXtek",
  "key9": "5xRLvA9QJt9gCtSr4YDC81hqkAD8SvpN6ih1RXUnJNsjc74juZY6UiLnvfNyJjHvmKJis6Zn9XQE4Gasw7WDZE7d",
  "key10": "4LrZypAumHtmgoDs2qPzhusU7aiWYiTdYAehyHYzMMkG4jbYyDSepxnjrMhtCVKB2GuFsYeWz9gckGFf9Zkue2RB",
  "key11": "5ohunymyJDWa3BfWL86qCYJp5gmKUATEVqabPkDYcxT2tY3Wx7eKUHY6NuubAEyEswD9Sv1BPxUwt3A8nbABiRXv",
  "key12": "4bh6AtC6PAPuxe6kVmCfUJgFLFmjgMVtn2gFcUBZGN1cuUsqJUeLJa9ScbYAkvBBBxdXrs5UMMG1y8JoRiFHok8a",
  "key13": "4kSLQBFyg5kbqwKdirR2b1pKRaYiM49xiQNSSibpRyHPyBHnrqkJbxRn3Y82pf8H9jUSnhjvUDELnijPjaafi8K4",
  "key14": "2DXyNSgRNuRroK5Gq7eopgASJMTQwgeP3UaWUhLrBmKtroG9Bh5fecK53gm7Q6f971jfz4qYJJ9aLyWrtuxB7MFP",
  "key15": "4BUGQJ1V5c8A7ktusmhBMtm9nJsdc5pcmu5oY2KLPR5CtBXQWnYQanRyvw78vzTS3B8P6CDS5heB99HdJ3CjbCN5",
  "key16": "4iF52sddZxurJgTAJhVuLk4ZYHtWdSpkuwQ6UwkJsiLxasAFMb2xgBpZ4srancu7QRA2r8zeJULseqAiMVcG7GMr",
  "key17": "479LNP4SDhYjzKGGJGqJ2t43neWFAaEmoRjQitiFikVLw3TWS7SNMwrqjJFzovW9Psi6bPvFYZxPiX4a5uCAfK73",
  "key18": "yECHbBbmx9sVEmeSBQTKMUcoPLeFm5NbZcwh8Nb8maqTwt1MFdv7ue7RPDbFKb5g1Cu3DkfpZJVCJvJYKvRdzbH",
  "key19": "2ehyBWd2dmMFXvy6MHrvW6JTyadg98ayXBHgNb3eHSH1VtuV2WK5aiEvgmJDLUxMt2HSxU88BSin5C2BeMZPXfKm",
  "key20": "23ZSEbQzk6TtMvrnhZtQwBSivUrxPewk4yTBJ4jnVeihGHDjRzTDEEXodcxi5apBtxgVQhDckCG4Cn3VTDQ9Uq18",
  "key21": "FGfzVcz1MKq7KieqWNuvZRHK4et8geXuyyKeCgPmDocWnncraiTU3eExxwD8fKXimPqQvdMcnzEydtfQWZpZi5P",
  "key22": "4GwCpwZfRrXJ6G6Fe53RxChoAHJrM5rjd1RXeF1QESJ1uWiEnCdAPreVqfX12Nmpe1f1feSNtd8asPMXkd4Rw9Mr",
  "key23": "5AybZTxf4siAcA2X3HirUdeaVMRFw95YECDWKb3fQFhZwstgjkg16eGzY9K9UYreVx4cQaFbxMeQEyvZuqTUK4CL",
  "key24": "3DDffRSxWgmrKDRB1sdsM8Dx95g6ix3XTHeEHPFHhCNs2vZVD9ZeMLwauJdXS3AX4uPjFYbrNbBowYBF6FjLam9P",
  "key25": "4yVgYWUo4sM8ABeTsQMwmRRHjmpWn9vNn9dUdXseieahS33X2kEzZ7ZGzTDkHJLBMgcRYbmmMaLuAASTv2xk6StG",
  "key26": "4Ebio4ZKuarZTYXKM61kLTnqoH2UNejob9iudib8e5YDc3UQoq74C3SqLha1f5khqCBe6xTL8M1xQ8T8ondh52rf",
  "key27": "125CBiqy4vw4BPWpxEioCERhnuAytTQ8D4tqrwESgBxWKhUq4PPUhAtkwwgAtcS92tKaQk298jds9bCq4XYVkULx",
  "key28": "395zVQ21BrBDzFD9bZtqbU6BT2wLmKJG3DadjwZ8B84BoPGRGJPZhvY18po1DxT3a6KmMNT7nutoc8CgS77AMfMZ",
  "key29": "2x8nbRU611z5ArtwoF4T5UCUuMofGvfzVjky7qycrX1DJoB8Nng5ynJ6xoNXH76mLPGudS36AFQQ9SYuB25JgKgp",
  "key30": "4n7wHNPuHM5fjedPDQgPC37xVRcsQBB883TeWY6qyE5CUdj5K538spx13HgENXNo47ErmAHTH7na2GeGC8XsFoCP",
  "key31": "5gyu6hDsmmznLYcPngxMfN8QAYW8C6gq1EJM8rAqkyf9KT9ZTb31RVaqD3HWugAQiassmhKCyxHZjLqTpWvEJvi3",
  "key32": "5RQeyzoUURzxbAKSqqWrwaGhG7xE81RJdyNnb94LtvK4fyWHSPQQAnFpM5HDF2XMgrcXL3ZaXzSQE9TBo6kMSDmJ",
  "key33": "4zfWxW2JpRinvZS3KyRMK6jAND7wh2xzqKYHtmDBdZwvQcDcqq1mawnZ9GxtzCZdyGqiHwhHkP1EAS2G2JARKyRo",
  "key34": "2MGsaUGGy1AtX1Vp8gTmFxmBdQeEZqFgTxqsd6KDBSBuiDGCQREYfcEs9fzZUYUrzveaQgsj5KqEK9x8PpnPi8ny",
  "key35": "5gCxAcj1gJqtBNNUwv58QSvdL2iDPELbK3B5nfduiX2pNhz6WqGd5ENcMuERvCHP5oc1Lgyn3VTSL5k1veaJiJNH",
  "key36": "4dq2VkbFwS9QUF2C5w5azASK965iuBwbf4LUjp1iFf3xQhrd1h4QZmRseLj1tDbN3sRKxPSJuo6namfrFJMNmAUA",
  "key37": "4aiGrexHo7eC1fiyT4BXyNkgpzgD2Bat97tzXNeKK959BhvyrQNEHrxVrb5S6LzNtfivz41ysxQLGc1WtUaBrahk",
  "key38": "5gGrzigTdH3f4bzBd3CAXZ8AsfnTAPQyTkULC3xZkcN9RLcx3yURh9U43CT2oNrAA9XpYebkQ91Yu7XoGN9nZDNo",
  "key39": "5cSP5gxG3EdUpBZrDii4zmnQrYX1wycn5H4p3LhEJJGUaN66HkHudGkz3a5SqnHw5dYaiNEWEQidba6aQQSpb3sA",
  "key40": "2iqJx7RGE79LHuLNmeaFBiBaakUHYhc8nEwVdNri76kLcLDMea6uJVYg5UnX3LVGdYe12mur8tHaGVrNE4SY7apy",
  "key41": "2GhVCm6ZiK5nsMbGtHki6zQ83fV942CH4X4osQWJ2ZzbWMeogWS5aVVjXemexWqN7T7dut4HVSPUjXKtPwBxC1Qp",
  "key42": "4zkwRQyqTb3Sna7WbSsBrJ7BAUUq8QH9qCH6wYsDoK6M6yL55Zqib4GkQzZ7uRwnYQXTMUA2rVCKyEYyyvTZgZwM"
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
