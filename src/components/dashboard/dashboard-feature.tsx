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
    "FLmdjSJom6RJSFZwRrqQ7hvAvfRUNDjYy5jsywF9mx4M74W3fbuwDVM2fAtHdVnW9nfw5qsKUGMakBHAKF9yRTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "381NgA9HFHb2zP3UuXNsZrz8WxCVaGdJRiNc4TzMRTmA6BJxCr1qBBuGkD7pjejA75XXjYCiwWUzRqvrJQ15FxNP",
  "key1": "22cLkcw3XqBtMD7rPS5SdkkUavznoxomSAk2NbH1uTq6Roweeq8wryLF45gDMS4pMDjCZSmRWhgcjKgkDPP2Yuz2",
  "key2": "3QgzQ3XrZDV7sN4xjZXQNSjdTut3e6YBAxXdoExMT2sBuPGV7KNdx2HgieZ7GXvffpzSjuT7xHoDWz5UKc1G9DFS",
  "key3": "2Gb3qTty5utx9oMUysV3qMsqkDM5Ymcuu7NYC7Kbf8mjRrxpFWgr3tCdsEBDqqMz3vbfFReTMo4m5WbQapX6R9kz",
  "key4": "2Rsutbzqq7HyEirF9aqovEkTfsKMCCx51JQn3yTadR1zrgSnT2ASk2q2V5zT9BAwxWQdXQavsJEtwYGraxe3pcZL",
  "key5": "3U4gY6VDTmxP6eAET7UqMk2nLsmMgDkpUUq1CnvKyDwLnLUqcXMivjCHDuKb1mgsuKYqbLUeYipTMKgw8d5D8yu1",
  "key6": "22PKRZvtvy3s3kHExaifV1bLNXMf5Qz6GNRUckrheNsUxcGrAbnnkkxLmStqvS1D9GHbztUx7QywkG6SXAguRFEQ",
  "key7": "33rensX8aG4RkZefNYTBPXzQE4dC8jX7e43qoUpDb35AohwZpYboUfpBEDX91eu19uURCnNYT9SFf7JrDiERXECT",
  "key8": "4PLE5gqCPenQqJsescXCKfSqpHDzsdhLFau3tQD3cVFRcaWfVK4cwH8DGnursJPxKJNDKxGu5NVJFVKTUu5qPGkv",
  "key9": "3pUi8eYEX4dJKVY68C1wJSVboVsbmthmLhU7rzAhDMpYvcugAYUhkUAMtn6g62g1Bb5QSMND2Mu12cA8Phc7mgUk",
  "key10": "2LckAzvtVujT9fFiuPQ1cCXW9uFpipsScjsS49d6GFoGtMEvowrzM4eHgRJExbf9eupAdcBSu18U8maT5NvMiMTz",
  "key11": "9Bd47q9ygr7k7qPUqUh5ZRiAazupLvSvBdomhk8k4CRRrR17PpNCtFpRWajvmBcg4M3L9Rr6WhARyhaGs6FEUdh",
  "key12": "ptuW3YCpV5sFFP6HAQG9rpkLw9UeEZ3rapoxv4cQqeQS4hoghCkhMaUBzgL5zao4MnJ37JRxFkFiW8KaqCR3gak",
  "key13": "3krreiLSE4zN173mp1xyPgsuDDtuBMqFkhK24WxzYzWj3MNPbDFw3hqYrXb8SWYpYQBc4ts92dW3BP2JRQVoGRVf",
  "key14": "4Cinpyz3HyLSqZJLqLGXe4iUrAdrbGhwmXpYKDVWUxUk7fwbC3WEdfrcwAnk1mwaj1xKQUac5TDWfiUvKmi2P1RL",
  "key15": "pDa1xuK2bDoJMRD4TG3hqZW5Vg1qt8z1L9pSGTGzmgtmnRFdaWEkfPhBH3dHx7SjtDH7YB5BdHL9bsywrD7WiFP",
  "key16": "2J8MoaLUuzmSJtquxuvBAGBFHZJk9tg3cHXWcgViLhkbBysLXhVFFap3GyRZCWSQR2Jm16sXkkGHfsW4ikDpyMvf",
  "key17": "3c453sx5NWVRj5fXHwzrstbWzuRQmhdMHz66UR2HdLSHLr7vaPgNCVdgKdm4fPYFnQQy3PVqGT2yoFztcgfkmVHU",
  "key18": "5gmKLSqVe19odA15aSWgcDs5y59XDCJY69mK1uB3MYZSbTm39cBeN1QSQ4o1rWkHbmkj7xReDQkrshHMB7V4e3Z5",
  "key19": "5kKPFpa5k7ECiUZS1oQGUBWhuEUY9efMR6Wa94v4RFsb5fbdTX2owz5o7iJ2NVq4nAVhhsX764eJAy8rC3Sh2epW",
  "key20": "4UACaoDeab8H6KRPEAeUZ3Tube4NqoBa8pehPzzLv5b5aifsGDhdJyt3wwrBCpDvmnGmYKKTE24WRcj7kNzK9eRr",
  "key21": "3LtuznCwPTqH2sHjGcZf7tVaSZtRnEH1q3521LEG6EHiQ2rptkNUxiGAU5t1Vi3zkBACLL6jhwSjtSgMtc77cmf8",
  "key22": "Qc4QY6wjrDPJc1EYj1CgBZnx5hPTtgo2yVLhdVQdfw2TdN1Kcn6QBNb1HmWxAn8DRyejxPztFhQG4eFfgbcQ53A",
  "key23": "5j7QZyoLUxoKgbvtFZupWsXesBs3d1sdsRkyDpT4zFREtf43FgJymj6KwDzpU6Evx3EY2bpfi99TbKbfD65USe4o",
  "key24": "5WWHTFpvxNAAGwPcH1DHq86uoh5Mo3iBRYCEVSCkLzwpS5SQcNU7JwWnB2KRfmhFfzye1SL7nz4ryY3gnoQ7t99z",
  "key25": "UrHsv7XZ69jgnNPjtC7DYjWnR4muPojcWmYa5HPpdfMKdN7MKq5MTCA75cSTtdnVcmo8c937TE4tMwo6bU8FUoH",
  "key26": "5GTtnb9tGiYs8pPL2gatyaX3i6VJ2LwbCXaLAysRvzppUnkn7uQmNFeKKRk5ssYsMRtCVGu8ac166CK8HEmdTgSL",
  "key27": "4zLHrDZRRQWEtxsvDn1R5qfu6RKmA7dDXyFKS64HLigCj4VFwGbqyWCAFMxhQhvV9GGw4nNYvXDtU422WfZCF8FE",
  "key28": "m13YnKs55Sty5q6hqws9my9MQDmaRdgp5bhK9gq1g9gy3DtzGFMtfikA7j82uwSwvp3LVqsZPjoqsSdr7i5Somq",
  "key29": "5zgEY3U1k3DYT9zoVTzfnXTYbjP3XkpEL53YiYuJ1Pu8qhqx5qrMiveMkfM4LyXu8RoAY4GjHgPng3aE42rVSCKs",
  "key30": "2niJaQggapPxPucqdANer7B1rZhLGLe4ZSygCZx3ZWd9txhaUcRzS1LdZ17g7sBTgNsrGFV2Y3nc8KcgAkMJxxcD",
  "key31": "5y4VgVxz9PSTX1ZuhZn1siN92VoJ368swUCci8KuaK5mTqh4PRoRDCJo8r5LgfVEkrbGUv59XnVv138n9vaXUNuj",
  "key32": "2eSRukNuWzMDvr5aUzWeDtf5L9eYADqxeaCp31kexC3qDmfJLe6CVAPmH49UxSBwteBnp3zkLupmj4JWxXMjRs9q"
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
