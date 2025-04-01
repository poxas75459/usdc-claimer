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
    "WxScLF2M9CrnyvJoMi6CExE16svqPNc5VhUte5mgRZKwbbiYtT3rU5Xhrcb3Jw2oTrCki62xjxmpRb1TtUzTado"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rbUs1Px2KDhxi5eYnySZxdGrXZHwWYDivMMLhKX49i5QwZKGmbUTEiTb7rfXsU3jKhf9mRvfHyKPKcpo6stQPVC",
  "key1": "4Q9x5oLkVwPLhHMfZHHGnzRUWbpiRLGtNzyyAVo1BnqH5itawzLH7VzGgMi2P36AHsfQwvLawSkT5b7isvGkVU9k",
  "key2": "2V7jzcy6fuGEaTKXGuQ18XbaJYgjtLdRhFbTLu5RR7Hu7X2WYbg5mHbVoTvWvAuZcFsUBjXm3225XMw1aPP6CLo5",
  "key3": "3Nx7Zb8uTcNoY54jXeAcXgrd4v8dQJ4DAT2CawuKa7SWPGpxCpgpKf9vQMDmkPcZgXVceVz3arfc6XEX1j3uMJz7",
  "key4": "4ZUF25RLDCGjpcQ1aLw6k4R9Eskiqd4ti8wyb9edt1MbAGq81KhSrMyM6cVCJdNfe3Sfaj87gjNap2aqhD6p2T52",
  "key5": "2jLmhD3mdy6ZBD8yhRyuvRupXgjzPUtfJdDP7ky63iRyLPoyurQGeXbnryp5VVdy9Kd8pWPGtwYPLzpu5y427fVH",
  "key6": "3mmRs9KygwKf3zoYTpsG67RWdsfKjssRKLDuZVu1HEnodCKWZWtiYZe2dV51rM2MhR7f4bCoRpXkcP42w66TRw9C",
  "key7": "pzdfC1XYBG2j9dhguKERyjvgzxeRq7uiYyVaFkaiCfN2ixhJXK3J5HcbcM9J7eHU2tosmaddDRmiauTWneHw272",
  "key8": "5G1v3i6GgbRjkye1n5bFUWj3Fy2enPGbjqf3xzCu6oP9mbqgz9mWQGp8Yro9nFgf1nPWoRvKMLNiwboVVfQsDGSW",
  "key9": "YAXcBU3snGGbMs2nMtAB7BMNLJnZdiwttU6RqPdfneSJ8JrAFgSoER8k3chKNsRRELRarBfPMCsZZe7V7YFfyp9",
  "key10": "31vf9QPMUeQqsV1ySRnuncAxWjstbjtU6rMXSPGYUVJ26j3mVT6vSVpqRnYL2zDUm5FUgLd9Fopr7WbVaQcrxyqf",
  "key11": "5F2ZgZ9APzjN2iwepw42tFYdEJD5w7VdkcrQcpdfa4QRRFKL49VPyRfkdR1uAKMVFz8PXd4MWeo7uf5V73jAaXtg",
  "key12": "nVdXVGZi7uuyiB4UHNb6gyUXuk7M2HBjxVMvZ1i15iGJqPd7B1bkkZLaSPqZBBH4ssLVeVoRsJkYNUw9tcCnK6y",
  "key13": "5sTHM96izCB2fNQf584JzKxG1MDi5EeGnweyRJX9gC95c9KRdZZVgghx84eGEDqdns3EugQXcebNtQHejox8WjoV",
  "key14": "2Wo34NFnwYMwjWrtXvyobxvtRYUKo3EDYpv1TTjMmU4i8ppHGHmLyoBurP4mBpDEFCWHG8fSkFXTUFmwVAmNNaJA",
  "key15": "2q9Kt8jYdd6eoF5TyXM8ZBrZMKgwx5nccgSS4SwQ9zwdEK7WmaJfAEEtum3ZwkVpPwrz8QoVB8ZREFaX8LXXL9p4",
  "key16": "4Qb6b5WnwunJ1NBv3eU7LdSE2psbx3VDEwTS3tu3hwnkU6zXf5hwe4azyjW5GbTZSxRMgFDx7zDD1xEvjgNk9seP",
  "key17": "5bPcK72MSnK7aztu4HkQ4k25gKcBgk6T31Wbhm8wrUXkCvv3R9ku4TU8U4nuLzX3btSLJmwLzWwE7MdVR3c69FeT",
  "key18": "46gwqFQEWSeBvGPtyJNTXJ11DwJBCULEQofXuP1VdwUjeSZHAa58gr4D9T4rjQJS7XdXX4eoVfD4pyCAX2FyiLHf",
  "key19": "4Ujt1AdVgfzrSXzdiixWpJE4P8Q6pejM5q1Zokb9p6bgm6Y3TH3TatXUiDrZ47bCWw4bNFYPCBWVWpreZaoVfJ7",
  "key20": "3CvjFVX5TTjgFRqWU7osSsmyB5c18r1B7w5Q9faSNggm4ZZCz91S2BYBx7uPT6iCpx8xKj4LRrFoHe2a9Gz9tXUd",
  "key21": "59xdxcqWEns5xURRyRrdaL9Qnm6Mq58hvYqGXHB82vj9Kjj5mnwC9AHptz7QhUNpmHzVYqXpF33n4ihJazb34toY",
  "key22": "2wfYFEdGb9aoFtKKgWw7gMy6CTXZrD2jZB5fo5KhSiCmbMnzqegjNT7feB7vAriZg3Udw24G5YHTW5bVN4LCeYQ2",
  "key23": "43mxUA6bsh6kHux6kbVwjQezhdzhjMwr6K1ChubQdD5EZEnyniSowuG7okhibFd3pZNp9qhRTp7zxq5Jw2idqHrT",
  "key24": "4h8DCDEJscnme6marWtLwD3GdxyNnbNCpX2qBafn94YhKtx99HgKvnHK8zSnxM8kAmotWEwzYbo3WAYXrTKWwXUf",
  "key25": "3tTFHKEDm5t7ykTawTGPdxEL27ZTxqf6QNAzHGuKskr5cLTztS8e3dNqEQjrBEPWJyf6FwgNUk8QTqQSSs7kjM7o",
  "key26": "2R15Angcsao3HMyuq3ExFMDNbUauD3fFAT1srHd3R5iZoWgYuETCgTpHSXts9CP7AHMLDRBShDxD7QS6qNFLKutx",
  "key27": "37pPkR88VRXQiZtuzKyieaqMCPK2anheQUrsmwxvpHdML7tn9WyE83PPFjCompbhu77CX94Qo9SDgf1uFXago1Hc",
  "key28": "5myhEp9D3XdS1PSDHgE1FbxF7BVNPFiNPki6oBSoScPfTa4KmfUjWSrd8tfCoBgawAHBLbY1mjgaFChysX2qbAXB",
  "key29": "4M7eekwHanpChmYPC6cYNWP7rdThqsiNg6HidBSzWGYDWUyJp6CZjYcVzwBAvTM8SChVtp7Z3YRaDgK7QvjcPYQM",
  "key30": "3y1qhWyjaamUVGiZvLj4qmCTZxVfWR8WeuQXPscdht7QhbPkRnWJG2QrDjiPuQtE6BLAeTjGsu3hVfusK9Pr5fV2",
  "key31": "2kEofu2CCFiW68mJfP8p4oZC18SayNNnyJpKWmk1g8GxxGHrEt4FZx6xp5gYAzsCbjFS3FS2xdQrC1WjMXQhwpp8"
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
