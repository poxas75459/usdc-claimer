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
    "5iKqm3SLoQ6b8F2hJnu8WU4PbXgbuuJZDSj86pXh11ib8L3zJN9TgLxJnAoU3zFfXKaWe2p5UmzefbW8X81FHJn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mWrEVtCVapuTPRPEQoczxFBhid8KJ64nnM996GiF4w6cLw289MeyzFmH7CX2jhgwVqHNhKxtaQ1fFbH31jFDnGw",
  "key1": "4Wkj9bgKMScBTKNczYiTXpqAepjnYix4VyN98Xkb1WxmAqwwJUZPQa8F8iV63njZMgun2Kq8WZibfSn7U8NRqz2u",
  "key2": "T6WTsVXBRSAG2AcVgDhmX6G64xBbzAawFggoZKbDx9QgPuvW6c7SMz8sGKJFEBLrzv5uXu7MDN4WhLFkWp442Gs",
  "key3": "2nAYwYoSNMB81GM4o5eZ4BmPeY6sayq1S8jDtLUByqGd3SdfB3cHF5hCVY7AfFbRN9MVRrmF9gvyx1xFyk6yWCMs",
  "key4": "SxbwBZ8wwtVsy1qkLEV7o8QSh7737vVqQDQFD4zjJUZ8v86rGkLBMqaJtXidTfHdaHQpvWbyfH5bCSMVcLhMrZj",
  "key5": "5BmYk3waBfceLbiUbvLZUsV5GME1ygPTT2frC8apcGiJ7ZtjfA6ZjMQuP6jHh2iATkMLbFUrwca1LhCF8BFraMPH",
  "key6": "54fD4s5S7b1q7pZe8wvohK5FxTeTiUgVwxh1zfgp49VTPFpKrn3pzuuKaLXJkFtVD44d6P2tjsFLwbPV1x2jpLvH",
  "key7": "5hzFBJ45BCES4WxuzP5SFTW9CQFCzZojrrTwH4CDvkM6PzHMT8gBYhLKwZC6CNqXEpWu6AoL2CQWCX2otk1Jdxsy",
  "key8": "4F2sxtq3q4t4vfxRh2Act4MFu5N49UXVWXgYzqTvxmaUsraVCzmV1NMN3Ec2WFtZJEEAkHY96LVzDifwLSZh9tZZ",
  "key9": "34XCrjwLc3pKBmnDAc8C9of1rMH5VNARiwL4tp3ZUAGnD8QYLCk8h48Mad9jhykJgSKUZs8MGBBwudqVKreXbeoo",
  "key10": "3x7eoABVjfwccUw63ghMxkq6awCeBmWUuBMm9qNAFNfGhW511tRAC8ppQnZCdbwNe8QHG6dxo77jYbmRxVJXFMox",
  "key11": "2tFnvriyhx39J3ssAZhKmCPQ6Jm5oSQU7fRdfaigQuLmCaBaRVhiBJf8WYx8sbVwtEkK18REu45dyFwKKfddkPVe",
  "key12": "48AP22gSEGCpgD3s4bnvdfY52AFvNvnvpG3JSo2bmyphgKTr8QUhq5qnt9i9aCUjvQQfZrBijZvfSWiyTViMJE4D",
  "key13": "4ZAQJFXj6xXFcVjaYNF7RVaarbosBxn7Ru17Z2u9xRh6vZwXmWBbLMkhbKetuN6ujp19rJXPs81E5nTiDTMSCrk",
  "key14": "5wCttZKhXP7QqatPkLsdCkebabLJsbXvL8k3MC5if2fNXqj8vxj7dpaHWT9C7xNKDe7cYS9o4ng55tLMvXkbHeGP",
  "key15": "2k8jut1ZpXCeq1iER5zMBjETUXRggpJcZsCmr5xJLmrTi1LAzyc9SFFtW6eRhosfncAuiMvKTfn1xsWczYKjNM2k",
  "key16": "s6XGPGPZongXWQTDmAmvW1J63cjTXmSP2wrnihVfbWv5LChqY5XwgEd7D4842QavxYhAPvCbcRpbQAWpYtbBuk2",
  "key17": "5Dkygoc6LRSCxYYb9PRuAAAngQZA6bfpLQPJEi7wYjmQWLgoVPntsoP8JG6ED9umwcMY2ZfyHmdBdTri5rrfjXWU",
  "key18": "2AdBxkqkCeYvGEtgPniJwzsuEqhMUnVLqTsi76o2hxPjkoaf2FW7zWGfgGrhyaDNPUPA3mkv3Cq2GGqozUvTDBTR",
  "key19": "wWG7XEppYyGk8m18wgPDY4xR7WEo3HdzTGHBb8L5xMUuyqfGpV3V8oR5jDVyvWVpeHJjdDYbBkrJ96nQpQ7Vcm6",
  "key20": "5bQYtHroi54cuoDuukfQg94jA1buhdjYS1AoUSBRPT1JPn4zHNqR3YaGSWA9MLVzxuMMzKMMdrUBUGyorQ5fueMn",
  "key21": "4z3GkcHUG1Agr6via3oBCNA6pz2EBohqatNy1hsXZbYqkmaASMbnP4YfjjcAV3PXXBcV7HN6b1vTg9TTTVxPutg4",
  "key22": "2gbFH6XSP11xThEKR8UX7EzkBwBsE8CBzwGACmv3YCir9qNdh1jN9AUXz9Dv7DADUh8M5JWKSXdk1rP9iimDb51K",
  "key23": "2dTdwh5Wf6Mw2Zo2DaMywPeY993g7MqtQ3VDqTK9R7pBnLd1tWDQT4MFhibTDSyuMUCeMWxZQEdQFWMWtpGsX54P",
  "key24": "2s26TLTbjmf3fDRbNx4LR3JcnnDsQRvHAxYDwa9oTy2Ea5CArnPUTQ3C1RyXBBoE982Fm8bnUkPtzuZCA5jfE1xt",
  "key25": "2K7ZYa6wb3LmLcQzh4h6yAfWiA9wYtY6tesisQe3M7Rt1vEg7SstFcJkX2jZ3A7CF3xcnwqxsaNjwZGiGUhhMRUx"
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
