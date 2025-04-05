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
    "5h1ar92HiPowd7qCJb8EhbUxe2QqSM4DsAAxXtVWXHUeQpiwA8RndHLTNTcVgfn4XbhqJnUPcamB3YwWQuzfcg9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rm9PY9GtvFF5xvvb6T2ht3uigt4wjA1Y51c2Jb8nVzNEK5nwRW2MjfRqB393djneimCkm37mT1gYQcv892fpTtv",
  "key1": "v4gbu6shgV2Tr313qa3Sd7ZtdM2qgQ8M9K1ks1gLK95isJVcig7mffmVAHtowi4F89E4FBXSUN2Y2RWVVtigenp",
  "key2": "3JYfqGDd8jdQZzuYAuvuB33KMCbM9hQQmYgXeLVb42vPzoWywHdzqPtqE3VDPhZUXguVnHRUhaMSYUBXLvbAfk9x",
  "key3": "j8cKZHew35U4XgELtXgqGshb59j68RjbXDFfSRdB2pwjMLQUbSV2G6S6z4JXbPyqyd6YPdNXCSDPpE9iCrGJ92E",
  "key4": "5S2VeCT2jr5nn1ZeQX3werNcqdCYMfHdeF2HFCZHjXiGFM2hMgPvX1bPhWvLeMVs1pWgbHSWwWEHAe5DQTg2utKb",
  "key5": "gi48PS8kwUdmJriUvwZuPUH5SJarQXLxDsN3wa2LEQarYVBQLzjryNpF9kWQ2ZTZz1n5sYjJdc1YzbQkyqMZuhG",
  "key6": "5P33CaQSJn3gFrKEetcjKMeFvhVoKGE8fNNgPXk3sxC84DiX4Q8NGsNwKN8VAMEeiJF8oRF8T8RHtMW2Ntm7ugXs",
  "key7": "8bbzib7Cp83hYXPrEvHZQsmxesWgn5qFX7RDXvWDWvX6TxnwkwuH178s2sTbmwJaTbZcuxDFixKri1jBRPsEFeK",
  "key8": "6EBv2gS4X1szY8Jctsf1FcNb2MStzVcZsv7s1BsYpbd2VBPjD3SLRbG8b2RGVhMoMYySfJdN93QpNU61DqjWoS8",
  "key9": "4VMZDHHf3F2Cu2eDervCF3d3TEmAMFusck8z7tSXVCeASiumRfZZoQPdvMMJQ7p9VL2TpmnBs2WPxgZhFRYvFrKd",
  "key10": "4UMQ5QjM4Ri3F1jSpSjZnQLv6PLxAjPWtDWVMsy3LqYnC7PSoRGZ3kZ7gWMgVge7p8Smt5ksNdkEKcrD1GbBSa9t",
  "key11": "595sN8SFmpJo2qbdNhV6NvzHYUR3arwEsSX2sR6b4BYD2NDcm2HHiPQafxLVDoKiFk1WTYjmtLjBFuEGBmzTB5RT",
  "key12": "3t6RnD3T1hgVajJwxddRJ3sa6vzF7ZRh8itwgCCVtQVJDet6s4JXNPCwryfvAxuiukSCAxGe5nAtbBx7jSUxzATk",
  "key13": "4naaQnmNP3zBogyFvRTnhPEyNfpS4GVshmbQppnKmzGTrnFeFLWqgG4XK41odK5Kh3SUYcskfQqqupAjdvSkfqXB",
  "key14": "61gshGXmWken8KfWcyTn9WYrKjEnQFq3YFsbnvnnBC6HQW9pEaZg3Ywg6JBp6RNKxu3KLANsXeDV5KWoW1Kogbyt",
  "key15": "5LnFP5zEm9mu8jG8V2NBSQeFR429BzticgjHaUthk7EbygpoxK3o5s54LG8HJVCtjo3bEnnPpnmA4n8unc5Fjjzv",
  "key16": "4Z7uxZjBWQUEgzDxF7KMF78GTVi7aQuS6u5K1aQYwFdqVx3Hw1VkR15tSxY8vrvoV3Pd39oeeMzJV4qVHJVpRtQF",
  "key17": "2qb9SZRCHLprUbTmbvVt8KPSsszR3bsfxtjr1rSSMiZPR1bYuW97Y3gyX6Bbmy8TnhjoYdKDZPmF3Rxj4etF352e",
  "key18": "44qzo9dC1gtaQwKY2ABdQFqniBV1QsEUWasaqE8kcXYm6f29NqTDz6n4ujFpanCPnKZq1cPrcjv7afRYKMeexBiv",
  "key19": "4FUxzSc1teecBWzUbarAE5bPeeWmsiooucPTTXiHv5mBFgF2Z7ER8t5mmp3ESzX6jP3eAKyddACW2vmvxS2wCgqN",
  "key20": "3kUXkvBxtRRoYCt3HXQEFU1bZrBeLCeAMasAmiVB1HRx6jPE3cKkyjvPFKhJsfP4G4PihJioDxmumJhAPHTKN3xa",
  "key21": "5GgAoMiaFaeRdr2TXHPqeAS7C3qHCuCLVGBipF9dJipJAYMtSiosFLCqCEBLJSqD4voCR9gvLQbNgaswDPa2CEVk",
  "key22": "4a81jEEoKbiqY6YzGjcqxbBzNZ2Xn2xnmsvdoUXSSGEgCwNFu4XJdxMEBdpyhWh91FKAZxnY1E4KFMJshHQ1XN4j",
  "key23": "2ouXcBjg2hPCA45WanaGift8UJfGaqzoAvdoQm5sutDyj7ySorp3ZNgw4dFgpwc3hjBdPDcWF9kmJekTVCgWRnZq",
  "key24": "SyZ8Z9Ef2791owA1G7h4Eom89KpfAA2JxNtaFQEwCqQAhucdqbTXVysGcTMpC3F7JC47CVNnJeodeeK6iKbWsCw",
  "key25": "5ESrbic57YS92XGxc2ZZEpfJQAtYcfZ9DiGptc7j3Gfs4bXCAr8RUz85VZpzNnBEYLj1iUx2hA4M76UgMzYVTFz",
  "key26": "4iqex2UzGGPgikpHm1h3sRKNtWna8uC5cKfKNPn3nfv37WeeBmBMRGKSsNft2pGJjVYaftYJDWhdvkHdS13W1G8g",
  "key27": "cAFq3VzruNaqutWP13ur2E4xKGVe9TVGR8saMFwr4UwN9jKTcKgtWbCFai1FCQ82A5gpPyqtaZyhbrQZpJo8Hwb",
  "key28": "2uTDU9RBZ3zg7fUiuHjMNQR6MtxVps9cdaGHpdytSg81MLhuZWRyKg51Yub38DqccdT7eBZvrkurk4kz7HD68C3h",
  "key29": "LEFWKFTuEi58UhrFx4uywp2hpUiKBKZLciijPHojvUn9Rw5VpWioffn56Lf4oop7K3nr6hSbVeTNxzJzKUr4vUh",
  "key30": "566Na21i6TDUpkLTiFYhUut4EWrcZxZreLbxKVfEA1f8tLv6qjHS8tww3hraiBJz82XCvLaEvwxE6G7YAcSqGQdd",
  "key31": "3JG5QbJG4vFm8xZ5AHapcoJqKRms3JhJm3N63MqqD3eMMoj3B2NnexqAX9bpjbGwCQ5iu6U4hgXFTCjoQ2WkRPXv",
  "key32": "2H2LafzGEu4ccsQkXurhkb99i5X7FUMM7xdqzE8yp3SSvZ2h5n35nhtMKppfoWVv4hMiZFc2QadB51EvSsTeLVki",
  "key33": "3Ett4T2hRgUHofmLZtCc8UbHLEs5hvVDaUxmVktp9WeaFDDZ8RwWAAAD7AQvnDvbNRdaiHGZAs8jjphCHJCmR2Ry",
  "key34": "4FsBP5WyiAXEao6VkQUZXNtPwSYj9YbGnjqNs4gVtoLJmaZC5smziJyuazDLY6H46Xy1exbqJ48U1dSouQMg9tDJ",
  "key35": "3Dyantf8k4iPp8A5k8e3jqMEAApddQH9vBSaoBumDiWKyZ9Tvz3wauW4NB2mLept47R8NixdXm316Mz1iiKhBqGB",
  "key36": "4rYiizz8f9Wmis5aujAvzBztYQaGKEg8EqEtchTrvB65syGFE3gtdeZjMzDS4ft1vFVXFKaaCuM1CGfJ5Dp1j7MC",
  "key37": "2gUFGMjSd1xZtJGHP3Wmb29jLvdBu6qtx93h1LMTNRLFh9VFSSgKJrCBAAHxCN9RZCgMkbTBuzezWGqVMb1yq9hr",
  "key38": "4c3BLt5ZkKxAaUk8CpJiSnVoUEhArSuL8FAL8K91KtHh71GyrctDPeGxdBSm9aHYJKtvLfXPEFkLeijesFYgxHNS",
  "key39": "4B3VrSsvSJJeMB8sAqHiFXvufkN9gYw4BmBJHzU2NMfUmgbnRLBwBtka3U6AqEPkR5ssyo9sWXZV93rWvkzX15CD"
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
