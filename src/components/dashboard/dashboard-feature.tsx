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
    "RNEYFyzPas7yd9NwK8ua7nrzDkjR2Ys4vw78YGKaHj5uppoXgck2TJZwE9hMMwuR39hTVSqDTydeDj8USyX263B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AM6aQYKSjuhegKmrrW9RKtUje4Mz39361gUgByy93SrN8iiUsJr4JYW4QHxB4EVSivb2BAjAb1by99ZpVHD17iF",
  "key1": "3QhNMsdJ8t51p5ya93gjseVifr9T4hTuTYaUkEH1jShDju4fXNGKqta3dmZ6TsnDoy4zEnjvwWkGXpSn4g2kgjLZ",
  "key2": "3gN46vRr9hai6qDN2Z5V7PkTEL1fBwBdgrJ38ZMD7WApQvVRBMXTKuDBM1rjpviAdT9uUq7HYeKZwvjtvHoJoEQY",
  "key3": "6mZbSv2TAPd3fcQWcngFnwnyyLr9KVmNpJTDPkEB2vhaL1GxrjP52nxKJVTZLsV5cDyaa3D9JQnJVArQub6MH8a",
  "key4": "3opKUb7fuC2hGvjXifSkAQvW5G3NXUMECjc2z7o76NppekkrHQcC2NFzcBVsbkxtj14s9NtVY1nxh8AayzR63iK",
  "key5": "4Dq2BX15GLXFir6NLJ3U21TBKEcyrVjvoCamoNSZpuGozgGzzHMna1LTDiSezHhFWmqZEMhp4rkBgh36GQBuM16S",
  "key6": "5qGxxuWdcmy2XHKorMQUn7Dg2jSF3WSJzX5QNNbJPJhyS2nqX65piXcrfBwiDfafP6SSdiLg7A5C1NdJkPHNnR2U",
  "key7": "4Cx2Um1uJFWfNAJBkRkRhcmWicc9oHkgzb2RrrstkdcStHHfZ55vyprevAL8tkGNghtv7kRaEXXLwXxkWio6e3as",
  "key8": "243c6h1tGarU9ThrjudUUHPephvzHFXBLtBCD2Rzipxn23q78v6igjMVyYfKyXvFNGjsD6Nxoajs8eZfUkLV2C5u",
  "key9": "5iGNXNGmKdwPtPGDxSjuCLjtckLwdmssJueQorfq1mGiSKq68GkpDs5oFcEFKnpouKvuqNYhKe3dcXfK61RhBtbt",
  "key10": "4tromiXGs6EPmDn42Ad8tSyrnF58GVYWApDfXD5iKMor5SZiVegyD2Bwt43WNboSAgNGwwxk7fD3a9Bp5eqED2Bv",
  "key11": "4s8rqnr6fEoqSZBSmg1bKW21xUneCiJK2CaSkG2mvACFHp1uYdcti9pAkXPSQ1eAZfGGGnJtKkNYdeDMYpdmKGDb",
  "key12": "3iHTmzGwWSNp7MkvEw3KP5SpvatkaMRYXAXvbkrFVWWPK1J11ojkHt7DhiYwBjEZ772kBQSbqb4nS4YBd1XMYEY7",
  "key13": "5wkaxN9mAhEC3bcGJLxXZP7XGa7b7K7m3QCcUgAPXAePRBGD7CfL154zL64wSKGdDtxvxpSsGmkaRXuYt3qHnNtS",
  "key14": "KAneVnh3SBUPCYX5bchmmVPcLCx391DpSu9Ksq9VP1dLhUqfPcUcN16JFFHqXiiU8pKPQMB14Sxb5s2yx9ShMB5",
  "key15": "3UoZJqecaoiMQJQRaKYhCgyEwwCaBweMU3k9ZN8CL3drP92x4pf1Y7krLym7qXJwKsftRi4ZPcTHKfKA7iHb51QF",
  "key16": "52ycw9WZB66ZkgGf6XEwTMN1dkSEKKA9hDTtA7nVAkBictzSf6wzzAV9vtLbDThR2kG16c1Lt6xrPBVnapkxkz5h",
  "key17": "4Px8asL5hfaeDMWR8D7Xttz7HLHXfeoR1b3Cv6xUQrovCrwDpdcNmLpjEnTUdYbE4GewRcB4Fe7SCww43wtDZMge",
  "key18": "xEYnhfMJEsM2y9Y628WitXcECXUkjJiPb2mw5XwZ3jdhTxki66Jq1u3hfduxxKhG7cDxNfVfTfKQXtPqMGUqgJ8",
  "key19": "iBy6QmcHZkKuzBgNM4PHhMmAqFgCV81ajaFbd2u5BvgTwDnPbHw2nsWjEfhkMjqiZ6jLr3CU3bC2xz8Z2826628",
  "key20": "3tC8xASWkDzgBPT4M1pS7Xgd4fKp8cwmmDWRYBZs38e6rVvSMstZPgeZ98CeC7TmsxM62M49EYjfoNqWy33Jkir5",
  "key21": "58xz1khTZ9E6LmWLmyeN388Y3gVrWUn4BZYrFNL37LyDsaLrKynpdqbEJStAbuvZ9HuY8zQfpgb8TWx3xiKLUCnx",
  "key22": "3KiXDVYAQiMCQ2fHUd11xCf4QGxG269hJ3NkWgEku4JhG33cwpk9ezJu9tjZdfzTcAaSGctm2wSBRLZ2LHg15WQm",
  "key23": "HhXTXwnyBA8iRmA6ViBBLnu72LeY9qZ8J6pjmVoJuiXLuy6fa9mjjB83AeDnBpkqdjCFR9oiDW3DPc6FBgeBdFQ",
  "key24": "5hvcfebzrDk8q6KWfWLQe4eAkasySp7UkSCbMvvcmuj1r37cu81KJhKqZZjFbRpb9ciEdoKQEwUrr4ZSszFgN235",
  "key25": "Djd325zKtmq7QTjFncmHikFMWSK1oK7G83Xot1QCGYmEXkyfunPsh4HMtXK1MjWvpTYDHtpZqvKWAbdxvrz8mKd",
  "key26": "4cFuQSu1CEGkfCmZT7juMCNGtkXveSPySSABhfm1iDZeB1gsE6Jv2JCDMbdq8NbAqrHMgj2nXxTrVM68vhhfPREe",
  "key27": "2vC8zTfYBCTxuVHDK5TNL4dQEQdwb2HTqMQUCKxVSFAMuowXsVKH9J8JaSJS5FukFgZmGDe2NrJS8gDXffXig64f",
  "key28": "2TM8sBk7chCpasD3X6Vk9FVs8r1qXCWsoz2hdWr6fwi65wUUP2qvAPPGvftQ7ZqYAbfGMioUc9pNrAfpSHjeejdR",
  "key29": "5zir98v7AnsaEvdGWp1k3MxH1Z5HnoyKYRWme64aw547sZmpZPswZCQsuWGhdJc5wftU9wC3dQJMSM2pG84aUaRA",
  "key30": "wcCWzquB5WB5PL7PdwRohmr8QTopK6TvRNxV1bphEqvKQZao5bbgqv5f2Zr5BJQfzRJHma7PpX2PBPoUtxXT21x",
  "key31": "uzAqv32pZuQjiz68pfhP2bxWzrqi8514nBZC43sSEnXdsuEWdUfeGBNWnerDs9A4X6iWtNxjLoq6JGRvbgdFTGx",
  "key32": "6brNYSYiJAtJNBe4VewYLerwick6HW5E1eAWHHw2K4Rg4kpox7xXKcKB7DhvVvL2b9UKPEwqW6SZufob845ZeER",
  "key33": "3AjNzzKNL4mVeoPq3b2uQv1MNpaXt4X9MGzko2xWpb39U2HLobHzSR8ZrAGLtjzXQkJuFPF5XuntkUmXEChkt1an",
  "key34": "3iYAoHxVD74ggBCJfXGSH6QpEayqECDMcJvhLcqFwkjAYVuqaomGwFx41YwMe6xhQ7ie5K5XbnMf15YCPZTTcPTS",
  "key35": "oJbncSvFnKRJo91FHV1zWGMmnR77H12SPK3GDrkutND88twb2Td9TfBURDX6Z8Y9MaGdkJXPrf5ZHwFzm3Ftahj",
  "key36": "3ZTtJ62W5ABHUv1zbKWPsURwUGYhuxYiYoCyvyFL5zhM2LdtgXD93M2KFFXoXJxsFfu6ZXucb2D67re7zhK62WnJ",
  "key37": "PFyczFu9KNdqBpyBkyzQ1y6iSonam1PnSDjAenmMprvPQY6k8rxFLSMQvuDT12LYF5ffYVEHmiutbYxnRNrQxNz",
  "key38": "5xRBqBjZTH4b21xBEPktscz9bHrKmEPYuKXnHRbJ26uTcHtCCfyBB8ioSGxG1h2nq5qhHXbPDvyVuHk4DvoDxZ6B",
  "key39": "8JshSTwsZXUkzJWaY5sqpTfU2gGNmjpYr4uzqybBirSXdHhqFAiJUbLHCPQ7ZafEZ4tWuPCsEoe8gq4uruoZSnv",
  "key40": "3aqQiHbsVeZAtgk8XXYWmE83JSJkyG4b84WAc8x8oTNMXGEG4moDFsikK8XZxASv9wggCzjEsj6unL3euRufjkvC",
  "key41": "55YNWo1amcMefs21wcng8F1KEKFmA1mTDB9BtvZBE3uDCpjENdBhYxV4R1kc5ok2efp5hdhNURSWd9g4PZoYUccz",
  "key42": "uCcjFAdW4NxvCTRzGGgzkhjYwCjwFnPeFR7NtRnQQcc3yKUqq83QSzSSe2PLwBcB7EQpHXHKiWW9fKjYgEmg8Sk",
  "key43": "4UuBFyCkpQXY7uvGnZCLPkjcTVvXyRwLxTZn6Xd655T7HbcNrPmDkgeRYP4VVRKgqGiUBuRH2Z7wRDCePcYvyjEQ",
  "key44": "66nJTGA9CrUJE1YTspkZBiMAptV1TmviPZRaGNFLZU7Xc9At8j3xXDxqL7q4EkaGVMhLVSxRaexiWjnxfNbs7csx",
  "key45": "4z8crEdT4K6a6FKEEFhE2ty1PuggDcBJaWKAZVdUaTEZ7kr5LoC61KQjKNtsjaVaiJKwPP5G8jgUN2Fx9rar1EPf"
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
