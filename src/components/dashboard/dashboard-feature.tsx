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
    "3H4XQ3GNZajCNxD4Nihra9ckmM34HzghGEXmY3CCRkC9HwVYHi18RxS3Fsn1qaqzaNZBMP9y28rXddW4FPdidwQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGdv7FFrDLgpKJ9ZvubhRytba9diGzh7ML8Mvc9gdZj3SxRoDVDbhfVdTiZgpJERYRfT5eNHFBxnc3eySFpwjBi",
  "key1": "q4VcNEHdSSaJty7jcxo7UjzA8RPoC5JZLa3K4LC81a5K2Ktfh6eorPNaoTm3tzprQuqETY85rV1Mz2ddWkdsuHQ",
  "key2": "64LYDiNqKp5J7AbrGbzuzJYnkom3Db15wH5skVyRxZGhv9pusPW6Sb8hmedc7zzSvVNryKgbF7s5gUoJiJXtvXiM",
  "key3": "47NJ27tD4oTjYjSaqMne9Eicoi2mMrefz37wFGw7eBt6y92UJRDj1RbS46KLHiqj1aRKzVnGMCXPuukXzdmwTYmR",
  "key4": "s8ixXExwivsnq3Sn75vegeYfcUoypsMLQtEE1vMrRVyATV4rR4UZtfnhfwWNvqGD2tx9B1i2t8NR6LLgyBopGGs",
  "key5": "u1yFzgfYwN49iD5A63riHf51YknwHaNiqVrBSd18RB52H57SSVSAUnYGjeXmRaxkzvTPaNZReexZnQPCoG5Xict",
  "key6": "51mdG2rqNFKLk3VkQ1dCNxDm3S6jSuHagWB8ByN2abRvich4cMFk3AnZQcuFhZtR3D15hKriWq3HVDQra5oehkju",
  "key7": "2Yxun1eWxQCzUv5QqL42Aa6LmDYjdyNqZ3m31wfW7cS1XhMESvaZNDeUQicgy9WtRpX9nK6tzajdCRzpvzjAhHNq",
  "key8": "5DuFsTrCXqM8kF9To6YbT71qqT9RHYQpppbNrYqFUUmsx9ZocufeHGaBTEuVyf6489NzHLPKWzcJHSps3Ep7oFTY",
  "key9": "3V5dFujjNvyxjgenDMRyubuYDfW1J5CcPBgTtsFnWS1wCuXWDMLoSRgYvFLLTJZKMgTL7JWbZjkmaPK166odeiY7",
  "key10": "3npzF6EtSPUvTEHDwoee7PQrgfAvaztwUG75199wBRreEkg33APySEq6eLZwNXiQdYmCSVMpPnbn1dGHeutkHKR5",
  "key11": "cycsshRKyr7uy3q32C85UsQAuAtXcVLd5cTDt6G3JNcC3cxfYn6DffJNzyHEEBoL296Ns16h8UUa85csRXypBeH",
  "key12": "5tMkYH5ZEqWHce3LAc7hdZRpBnSArtpGPyZ6TVDVv9VLEYGi3479rZUdbRyGHAp8KuxwCS7K2M55HpCtfQRZeRAt",
  "key13": "bDivHVyJtkF154MGCkJxWqdzX5yaK1h9Coi17Z84ghAA3nZVWBwyau7nAaquUCZygqav476SP8Hb9wbTRoH4TaN",
  "key14": "51p9YMx134Pvz1ybgo6tYCPgevdprKUwZhSA6gG1MimcRp8ewe3rQfA5FG9jN32NZtTTYYf5azhFUZJE5DnYHekh",
  "key15": "45hW86YwJdtgLfg9KuDirTkWDtFW6K712x3rDEUisEeofpiopbkMTDLHoJ3C5tefi3udcx8AYEMzxFJxKTn3TEoU",
  "key16": "2cHKFNcPxJTTFcVpTNMMPATkGJP6kAYLAeBYJ1EdFbsozJKc5D5ptiZeY9JSar1XTiPEcFvGFUBwVW7ENgkJYeke",
  "key17": "2sPx55hgzUyfjDwkjkomZTGojJrS5HbS2HvJufr6oDUt78NZMESLUirSjAWoqG69omNTLEY4as4q1AHg5LDTMq3C",
  "key18": "2gENNei7NAKKNaiFnyYvZ681JkjjiJxb8X4EYCi3pr7dX12cbDJk6UMResrxnAFv2WEo3hZdiQhEEpJxdZKqUzm1",
  "key19": "2MutsiT2Wi4tygB5EhbyGEARt4t2Ck3SkNpb3DhDKshAKGzboH7CKiM6jRqHNM7X33CrQFczH1rYo9GCwjYnf8Lm",
  "key20": "qhcQvt4Sh9UZ4CATMxXiM82EMDoaXHVUnK5NJDrc4Z9ktMiKQ9Bu94vn9FjgRizdzSpLptGKnrWgKYSBJgvAgTJ",
  "key21": "3DMo5bfQ6PRmAGcgbhtuHnvFf9T7Uqu5WpmVprMno8srr8p5XdwVZEi43jtskFgyUDAkKecJ6CMafMhkEAVAPpaV",
  "key22": "5VBGieawzn4xjnECob6YkkvVLMAjjuw3MmVMfReyWxYbif1WHL7VitARxfQePaTjk54ppR8VJKbr7mpXy9jqH1t6",
  "key23": "3QKH6Ji4tdtkPLzC7sZkFFxdZ4hjiaRcGVV5gS2S21tJnmcwZKYgaXtYJSNtCR49ZYKjLNkx38wtMgSoPpq41ELa",
  "key24": "2b6D1ifubKhMZykfE4uYQ7DPxrwSyAi2GgvXZaSwg4mURvzAd1Y2CZFAmTRibEYkXdXnjZewPT7Di5YytYzu2LjY",
  "key25": "3EpwvmwhS1EM9JMw5HJbXvavKmadVqAtQ6wFY4RJneifBsFbXBHcUnKZ7v33yZTdpnmDYHu4S4nmZFZaMxNpxfGA",
  "key26": "3sMyyadPCkSighNgg31aNoh7AANuUCoMi65PKxiCdjZDhYkXnbZkauAE1qWL3Yan4rmUDRcmoYv3hbT7KvAgHLmY",
  "key27": "jXwuwYK8qDhddJC6M1hACwy8YXmehzYhqSyfbruM6YbD6PmcaB24HAHCQ7AS29AxqFv7o9B579nQ92KLJo3diLh",
  "key28": "3Nunnn31VUpL5XFbQ4M7xAxWCVhqaXfzPT9WWYN2LWtqZoLz73EhG8Z86aUiHJ5FUNWm6i6w5XfiAyvHjU8Wcq3m",
  "key29": "518Pc5T3FZ8XHuBhMYz1RoTdk89uPiV2raumKF6r4pAaQG8K7ww3vHvukehNt37FxVQJ7WXjLhu9koEiVozPd4YG"
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
