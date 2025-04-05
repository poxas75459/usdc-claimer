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
    "BwLKPrMGhdHbNuDyPSghZHkC7XVdpJK7yR2dmdFwrAY5XXW9MJBcvo5X1nW36pBZmnRLTWbfBnrvcLi9ztCMcYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r4sKdajrSp8kLQsr3iFPA5eUiHcWfVBjL33SUt2zQviErYS6qQ3kTiLUPj5i2Kno4aRSAKHbW5HJAfgaZE5Dgc4",
  "key1": "5o6NsNkw7TqVXVL4KKeoxnASL2zP3n6rnMXyWMMWtDJawTVQqWEhWNTuQYnVSGin7zqicBcfDahdfErc4Cc2CVBc",
  "key2": "5AZw5UxtS4tzzvTREW9GiZieUtxbNZ416rCNy53cq6mUDXCWZHmQeJTV9CKsykn4PXj6EMGRsevHp46YcQfzKYvu",
  "key3": "4CVg7F7aehSGDo3b7wKD4asKFpNxoYUfh3iYMNYbD3ButDENXLjWtSfEpAqNZVVMRyUNHVdf4LKuJYTHQuum6Tcd",
  "key4": "43au1CKFcdyjRK8kM3472j3Q2XkFf7BN2ux3svaEhGMupkjgEz6eRxa83KTwLB6f39mshGnft1G8KjovMe2K7ica",
  "key5": "3FE1bnwmvt17spKygEswWd4NnCzNf1e39B7wRZhkM1WV3QRyidd1LHh6SxH1r2Xd19RpAHgYtrj7QT465jSYx8zN",
  "key6": "4xLu4wzyo8ghHZ8X2XobYvwNC2BS2DUjvq6zQGtUhD7Uxy3Qgb1kimPrsBzoPmhhj7gq8E6z3aRHWEReM9QBSywi",
  "key7": "4hvSoYJPibccRtYwx5PTfNGebiYnRXpyjU21GkypE5Z4uXscDUESLXcGcXwkrfPZhTpt7JEkP7x8Jje9iZqvhTbD",
  "key8": "2LfmYqG9wAvcLQR9E7x7AZnG4TJAjnErSy6QTmj4T43GRspPnSnXb46egRyBPFVQvkMCaqjZLUFd97jsm3sdnydi",
  "key9": "4dqZ2DVrD9SCA1J4j6AFGKPpvNRMeek9BU2nAhi8SzqBVrn1RpxUBpfVAzZ4gyStfVpGw4mMdUA683iviWG8GY5S",
  "key10": "27eRczPAFZZ7MzcJniwHzN5h83grpqU4EHbV6e8z1UXw8pFckuS7Q6jRRRHFtBAxmvSTbCbDdugKM2zHpeAo8mKR",
  "key11": "wYn1mhATK11S816FdoKhqYJ2jCde759Lg3JGmmqg3npE1mqDoURywe7ayhe1RHPHoDHUYJ1ucdgfzh37pLyh2JS",
  "key12": "2btbLbW38GDoJDMBLkyQdUS2TKQLWjzXYXps42jaHXE56km8X6B7piE69TMnEpE3znrxM8LsHpE1QCr2wXS6PCQp",
  "key13": "3Hpvis2YDQHoKWntH3mmrRq2Uv2azZPNPiSMZeUEpPA2mvqcLSsEMYmTk9y3dygMEH7mQbcVTXeEnrtVYr6fnBGP",
  "key14": "2A2Y4jR87kCBwNTfhQE6sku1hkRnnZYYdrGGJvhoCoRG6E6YPmf1kMgY9RWqYK1sG7UqK2yeu6Xu8RsvSgZX22uy",
  "key15": "66J33pRn7k389sp9k7KqCWh6D9J9kXNPfSFNjMisuzX17ccYPHXhuJB2yQZ61rfDca8DeEmaCDRDMWdJfHWNhM59",
  "key16": "QCLuy7bKJTFTUgs6z2bv79ggC8nyQ9mtZ1zucsFgnpqDkgazetwfmTC8fv8Dg2EWoPetJd89T6YFhsjVP36Ng7T",
  "key17": "4XejqhAV1GVLCCPhEi9yJrfRUbDSX5GdbMRgvHxSydgvPZt2yPfq5nZeofQdqk1QU1uhbnbr9MZzrPkt2aaJuwTY",
  "key18": "26uEUyoDWG4UBfbP1GFGBQib8ZdNtkrZLuGBZCLgdX6XHncpHP45CwT5dGjoMypK4kduZrAB6cvmqz6SuqSdGx5T",
  "key19": "bqA681sWMkmXTeDGaGA137cx9A8zJSwFrtzm5XqvUEwySoRo3dPjhF9AgZec9qPnpEJwWvbEuHyanZ51ydxHZSo",
  "key20": "2T1hZDjkcPCZmnrRNsHVHKRgLKSizFd1paR79DWLBnnH28UMHCtaKPYNNDZX5ckEd59SkzjaV2ctcpXtexjg8mmo",
  "key21": "2RD7RUyXNmLxZpcWcs9dLsqt4DScbaPVCPR8bc1oRjaovvqxFvzMimgVNJVfLRtvqj5KnuBapEQ7nJh8Ypd9gMSK",
  "key22": "2rGEQSCCuqjHfXi9c3kc5pvvRcqvpEEvB6MFsRh371ERUxkkaKriMUd1jg4LXjT9rEH8nfFHbzAGvSiwMwUF7Yqu",
  "key23": "4AwizuaKtSRuyLmcr2dKQ3dVc9UrSirK6X2ZYggj8PGfS7PBzCgQvfuwAYfFpQtzm6QZipdGod8iYRH8apUFQaXK",
  "key24": "34NEK4jrQDENEZVxWjF8GLRmF6destYJFDNWMBsxQrFSbzmWkYigrgtjuuoyfw8yYY8pXYWfduA4L1sNQj9dyDxq",
  "key25": "57a7b4a5UUhL5w1X9Yv5i6wbRXqNhaPjrPqDn2bshR9qSvbNmCdwQ26d3rdpUadncxHDz3pjF6qc9mFLbkxnujon",
  "key26": "3MwmJ5vZsmMsgAvaPH9BpN9ZULr52qZc7JZ7mcfHDU7dkW1kVwHejweg92E11MCKdfs9f3ok8pvkWGzc3DwwHpBG",
  "key27": "3UiTsDCxSVtMSEUXqtP43edj8jaDvSVzuGZH6MFxTSg6sETzrDFQSEiXU7NjeLWQ6eDeKy8xW5KNkeyVvkrppfnD",
  "key28": "4Qt8VBeGG5sgV5tXL5W2znjqhvPEbYpqxhQRBCaKoTgdX7DD85iaAqD8Xw9Yz3UcCAFBiKuSQAC7D3s5MsRvtSEu",
  "key29": "2ixoKYdvLjNfRxMvtnR6todT2aJjp1JEmLt49FPeQrAoCkFW7rnpNruw6ctLpy2sVWdntqSGdy3jHhXD4qRwXhuN",
  "key30": "g3376McuotAsf4cceszsd52Na9NKCPFNkBcNR7BkBpbpbiL7oHMbVFSvjQd4Hut8d7AhhTXC6WqyKsxncxcB8kg",
  "key31": "RGvttn7easV6ZZsU1ZouRWQvaPqm2dyCwkjfB1742Nr1F6hTCc53KXjF172jMCxxhLYdGQimxcm1et7Km7BduQs",
  "key32": "5oqQkScJa5gNSLGemG71nZzbrQDvTuWBru5njXPWv8frLXW9Dnxtt2UMHMDQKN4qrqkLycHBxE7Knv5NmAWSFVEq",
  "key33": "5aqLQFsMFxjQDHCg9kZMK3ffaQC75kiiQWEDKymYimo7ogbqMwJZMEAE7LsVFp6b3DWB3v49gAbKmbPGXhn1qQzN",
  "key34": "4CAVpfoaDL4JbJUPgq65wCqVTuGACVUfQpgzni98xYEsZP3KSc7Cj2VM3qgGqoHnFTdyBfiPKvLNxxJ8BZwRaiZh",
  "key35": "3i2YKVFcuZRHrtZxmjgX1PjdTwCe5mc6hgcUHznQtGnrVuUNWiH92s6eXarh1WtP4pAryGQpADQmWuSTEn6uuH72",
  "key36": "FocSC8TMAHD6Z9aoiiQTMXYy4B14Li2mRJCgdpMCCB13DD8KAeHSBbSHwCDSFc6tiexwyUgVfcUUZBs7o1bdYcg",
  "key37": "kNbd9cY281wNv4qzZFWJ4E1Vzuwt8rwQDLkeN85JsQXWF9xLCUroeSaktxeJwRgsw6Cf4fraYKgYRDt8h2uegiy",
  "key38": "x4ZWJwCXy9ZWnQPiVW5yZFA6qxeQ4VFjP7Ynb8z5of1tBWQwkV884K5DtF8sVdP7NcsEARjSkiBPtkHNSGUPZgL",
  "key39": "rqi1ZTt52WER8Zt41xJfzTZdkJfv1Ek6wBfLUy6JW5tMvgxY7u1RjC3aG7KkBHs4LWsx6LoqDgMubdsseEkMwSP"
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
