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
    "3T8yWEi9pKP2ehAMwtFufGwJUj6pVCD8BRcvNMf77VpMAv2TXESMynpP9RhYobXsJNJJsaoHgxfZCFwdHVNPaU7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AJTtazDj8hQ8WZ6FS3wLVoHaoydnaWTc76DwFp13XQFidhv4zuds2TSfEof7ATacza2LUDqvGmDzubXn8BTrZBo",
  "key1": "5zaRPfRda4KhBomnzYqyf493NQTdqtB7ktrvmytR1A9VG1Dj2t64CDwWxNL97aT1rRTNg1oHj92F96aSjo4Ef72S",
  "key2": "2RFK7vHKnz6XzpEeTb4zhBcW1mugVgVZxJ3pmeJuoEYdUD6JKupx6C3J2ZPQYYFE4QiMYhK9iThkVnPCChuPFm3J",
  "key3": "38ZD51T8qjanEiW68GukEmEZLDwhuzeRNUjzBTVH3HvK6Du9dJf95Ytgq52g7sRPNWdxeL5nZBSdUag8XvTgfAMa",
  "key4": "4TzFNjrj3GuLZA7rgdx5H3Z3EoFTXt45RBBxPnZuqxZaxLobpMnWqE4zNxXdvnHXjxXyTmEmP7NiArUyECD4u4q3",
  "key5": "rsfeUbE5Vnrxz59CDwWnQNHFs9egocv53CwAzYWL5KXHx1KfDZYwVMyNgmVycE92Nv6zNnwbEH4QPMhmqgy1Gux",
  "key6": "2XPwHrZTdsVTzjgyR1RKUk8ysrSHGmbxmZLyePgUC8XijwUDuBPb9Yg1mxruFnRMZHophobrNRNKzvcQKcy3hcC6",
  "key7": "2yoNWjFrn9NQLTQfMZJEMpSWtqkd12mLvw3i3odhKvVBSiFavtnvnKqooyGi71mEmS6BQYSpUEuxKtLcG9ZEZHPU",
  "key8": "4ShoNTFbda1kbnp72V3ANK8ro6Ju8wPYCB5XxNBks3JfFgRmNvFir5etRwuwfwt1nJBWVjPw5FUxgnP3WFC2au79",
  "key9": "2pAsrcozhiSmNv7nYz9XZQYZQFtodkB4MLjRyvQ39ujsHM2ZDfByiznCrCFhP6HM1CydZvdJXi8jTpRJktwbwG4k",
  "key10": "za7rzzADFrMNpzhp3KDc2ofsDTBsU3xv7pNMVqHoogVqFcu1cLX6R8DRywMtuD9pXctpoqamQAQnHYq73q8aJmR",
  "key11": "3m7JipXh2zHCqkueY8HgDAB7Yk6wiipkAYR2DCaazpd33E8hSp9F7HtKKBo7SLzj3rYmbV8AxLHe7jriXZFk93UE",
  "key12": "2G3yqWKXmQKXfLYR7Pn8U72o6subHi3DkvsQqcKvTXVfwVGA76RkU8PrBK8MFrZiDbCdhWsmHpmruCPQNhjvqXes",
  "key13": "rDp3ynYKLvz9Wq95oY8uyvZTVNqT52q42dDUhXcTgfWVzzwTwXEGqd4bPW3x5fmRunt2D3VLkuAPugRxMgsqen8",
  "key14": "3tQ2d9tWzSfsGpZrXvECq6Ey7hHr7mwBxRagpFgBrfixMbCoV9CeeP3pYuvDAGvRjPXf5YjieAPNaBxdiPWcfVx6",
  "key15": "2uQFxXCZqk3Mb6FjYv2YJZ7zQ7QYsRRs9wtwGPQNe8kf473KqK37k5eHVb4eMwvbAYiFLmiSnNpPR6RPgdp4MEi2",
  "key16": "4prJEyaxjAgFatUuRXHiCzXF3wfPSg6bf9Bf9tLS1tyPt7RLaCyF3WtF7RDutQf2LbugwpCArzFgynzsYbEWHVq3",
  "key17": "3uwJjV4Fwm4Pq8hyveXS3x75KyugAtMxoyNwoJHSxtC58ESKvzGNtRRvth3azoBB4KjQ1FhLBM4rXhCi38s2xapK",
  "key18": "56P2jbYbE3C7F7NTaZiEawLGkswHUiPuFuQsRgFTqwhQxyj9xFvx5YquS8nwjfWnscEV2SQetVHH1ZGZGv2phNVD",
  "key19": "3BS62m4qdqYXZtrYJeWVbV6ASknkV383TAuWdC8SmLK71nKDgR5QaP8bmF57f8uuhhsY7sEeamWnmo7XyJicbomq",
  "key20": "4iQx9WRnBuggDtCwmVTVWMuemGizr73smtATMANX7rUC67MFDd8X85KhQAM7GtYsoQnqcXCvdavH5is3TMfU4HqC",
  "key21": "4jqePUwgMcbawTGTJLJrp4kzSgXQLg7ijsh1h9ijYocbFU5YLfbvrtqWjgtxax17VTfg37hDyuuvs5NGJHLf8ULA",
  "key22": "K61vQiNFwgC5jchvw8B4vfrLc6YdoFojaAVXSJ2L9npJLMByL6YAnfszmkeWS4YDb6QRZMDnExGHpRjAhAKzJ7j",
  "key23": "3JKCabmXo46h6wyNX7KKBS4XpaBsCx29JgBgcSmn2Tu7yv6nekijqpsLWELCULw9efQ6ADi4qqKVeg15g1Wd3qAr",
  "key24": "3ttrZt3c2S84JCQT45jGL4YAfhC8a5LtPCb5h9rjDMsvsVU88kqgfLzxsYCSwnhKfMaHi5KnYuncuH5rNauC6f2B",
  "key25": "d28WpCdbH3jfrnVnmLtRhBC4GtoS3qDaFPnQX4UAE9KkggqfeNnWjKAm4ZbFbq72LkioP1oK7n7PUpxam4vUd1C",
  "key26": "4bviy8he9E419fh5rkpdz2ZaLe1w2neDScjNWX2pndRTowQB4MeqSiPALYAPhnuDjYBxmgHHbTc4Zvhm4uw3rYXD",
  "key27": "2fuJw1uQ4FWJwTaWrU9bnxpyHdqxiULYNWVb22LAnLy9LdqLgtiJvXftUGdMn9X3koYffsce8kFCSXsXV7Gnugzb",
  "key28": "3DC957NJB1KrVnBY9FCJCK1BiDhdHozGTZNWQw6EdsPFeYnEDixyX8BYebXmidZGpKxxAfCM6ymXqC6PSupDrdm3"
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
