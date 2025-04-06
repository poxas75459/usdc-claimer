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
    "2AbT8hSbrMQRppGSTdQX8Er717BGLHe694cMJ5Md9viviaqHNSC9mPAn6McfumW2U2pbSpYzsBKBxa8Be2x39mVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6o3Aer4xQCiXTDyys3xzR1eGhBHTCEN8eyTQkfaPKcWmeFWGdzXAJJ23JeVjUyocnykcybSrvWZ7GHeid4pGYz",
  "key1": "cx4UEYa8gT8QqXudkW2kJVEARFQWAryHk5Xqi9mVEDrn1eiD4nEaQVWDTXYvy5W3VNqew9SwkpzgMvgQgGf9Dov",
  "key2": "5CUB8RMcKBxyqrsYDtn76ue8nVQ7oxCpJfRRKZ9Bh2iQc9VY79GgcQdUu7dwh5mKCxdPWjA7rjNMu6FCALfPmFw",
  "key3": "29QDUxyokC7HzoyAbw7WoGKvCFUkTYqgzDTKfRn9xtHZUm17b8n2rz5t1CwPGjou3omZMMBtM242dMfS9Kj6Cv1P",
  "key4": "5CVTQLnCDuTYr7FfMzYjSTwxnR1sc7jsJPN4PLie6sMxXbeBoNPQ585BpWEjz9ie1XLAoeDPqMxEmrpe3z35ENKK",
  "key5": "wkaiFdwLKZLRi8E8oYQ8UqSs1uun9gUpdVTaYcfYF8BuA1FuEi5BxRHYusn1ePLvGdub9mgeRAQtJXx3V7o3Fri",
  "key6": "5JNK1FqFzHbwuhgukf9HxP7bLz3qdDsavAKRXpRDxWzTSRMzDxXG4TE1bvjFbBpXDVsGCFpR8E9uLM1TiGJyHydG",
  "key7": "43TuoEJMsdvxReZggupt2p2txp4jEPyc6sFzUDnvRiS3jYqjpUbhSyMchFtkzTCtCVpyk1wTA6uqfirdMjqsmNkF",
  "key8": "3Y5nh6b7vouv5EWggK3UGgWoSsNkxz2hjMGahLxAEbJNSFRGvyjWWkQ1MW85sybJQVMuwUdMPuJcph5H3pEpxF3C",
  "key9": "6FeMDvjQeLZ2hvFvZh1bBG8kDZufJao2uS4Zp1p1NbVmqfGJMkMNj99cEgkcgEPsPMjp9wVSwLn7uCGt2uDcyHP",
  "key10": "5Nmw6YuPL48cfH7nXzZk7HDQXqJsvq7hump38iy2dfgSiX9x651FvUkL8UdYqcskSRb3yicaZor6Lf2ac6S43iVb",
  "key11": "5ksG2priBkMBGipubKjuNs6dupRBoik65UXLW3BiLYA67iqzCpmhbDxPdeLqac4VBZF6YiHeHq4eWtATCnBq4d3D",
  "key12": "5966CuiGyRCdJQM9EZSqaHty9kkZKJX5VDjEXtSjZMLQzQjg2zzDsCJJ7Ne6nFeqYXoVMUqCPinNwwbzcoa9miGW",
  "key13": "3DcujP5nMGy6WkEiJGuA3icGFqvYoQenFPdSc4UTAaLFE8gQ4EhNHdjFVm62LZTfzSvfKjpdwbzGpdTFcBDmd3j6",
  "key14": "4baFQTf4yMLSXsgrUsNp35ogR37VUPpYm4dtihZru8AnA3EvqCTDTN82mzadj2dPBAsivyqMtXKDggAPJrTwf6zA",
  "key15": "u7DGwhweWt5CiWdkPaZ3fyvkBV9Qw8dtNP4DjSETCJ1dSYYGpcLH5fwxq3BtU5QT9c8xrcNdNTBTLD2VFgSDNap",
  "key16": "5hWpgPus57bjDwEUPvqBdUZWR7AhmmxzTHfC7xsLAoGfrXXh7n3MfN392veDHeQgunbaTQtps3okGern5SHtCWb5",
  "key17": "wSA6MSifresDAa4vrQ82Z1NTgN4yVxWjwFDyvKd3HwoDXtXuRFMHT76SrYNJ5ozTYmSwxWnKznhwzjinDeiDpDK",
  "key18": "3DjVU4VhZdWK1zB7rpM2sv9b1Bz8jw3ppu17utGwxxnNgV6PyBh5r2wjVTF8RwwJwQoqH9y7QKVDyJYjKDfwUcWc",
  "key19": "vYc7PyjVwd5Sd19CetxuQFYbXW9LPFBd7KdpTUpqsUwqT723nmyuLZGYoXAtvs3gwuMeTgSc3aAoXrh5ZUo8PCu",
  "key20": "4W5d6BxdnmGWRoVAkrecHL5gcBRKrYGHoQMapUdZ3RbVx9a77D7mtVsdSkeSyoCPT2Rv7U2oRWdkPQoikt9emQR9",
  "key21": "4qChaimfv4bfacCnGACkgE4rqxKPjraLLKUPcSW2nZnUDp7pTAKyvJBobPHXie3BmQJTFqWjzeoFoCB4EdafU81W",
  "key22": "PkDS81LjrJ8HadYSx12xQQdWU2AbPP5YGamKh396itGzErq5wEEDiBa4dCd5eitKRYV1DU8BLM1CDAFXpLLsKcg",
  "key23": "3AksKn7BKYc9mgJeYDNyEPzytyXQLTq5HvgLGHcfibanvRobT54FYrQmAuv1A71FNBfLKc9KXHTvx5F9yjkJWUPT",
  "key24": "XDC2itnLpPBezzXDZCYtsk27npHxFacTNdrpYdqq4CcVcDjeizwdrga9Wq2Dn6giopcSvQ5gR3utUNmXWKuAVWB",
  "key25": "3DGmF6dzG8nMmUDxu8r47unUGF5hdrQgxJ4eut7uMMiVPfsnoSLEc8oB8zCJte6vACmApw4rDo5aSwcYuVqc2uaZ"
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
