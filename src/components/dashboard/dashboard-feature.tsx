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
    "5ZM8ciQKcucMqvqADp3gxDKLhpY95X1G9KmMGEKbYrdhfito9qqpwDfQLY6YrRLu5yrLRNAXCWnYdAVJG8LSUT7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLso3RBhD7zB9VXacCXihbsoMqkBm6ajxD4wwCvQtxbjdqtDwmPgqreB3oP7XPvv4PyGBrZaN78hqszFx1LM6y6",
  "key1": "2R8QPXyQaLugwXAVaEH9dQBy6kzQ5fJWcc1L5ZtSqDvtWr2rSko8XYovDp85rvdTGFqK5fopj5BfNG3UTucpaWUy",
  "key2": "2nDdy2T7TCAg9F8oyZt6QcKQ126eQKCSXWvD1J1ZK8BVMqvXAzsTXiKtEMBGV1RTqrDqrYgmBXknkgJaLEF783o7",
  "key3": "39n8p279Lr7A2QxBRcE8MsKZdYA6RRRfLKM9J29bA3y4jikZx4CRbux9YTPGFmzodLZg3Cbcb1XrotAaTN7UZFfk",
  "key4": "2PdjnDJZwni5q9P2aTJjiJNzTWTiPkVfMEFDP4pxoATJkrEGrFjTaKW1yxPkFGjSYhrMr9X5m4b9QT2GEQuDwYHG",
  "key5": "3KdJk2KN6a3ggBWUhnFUUnfugFgN4SRRo8xCoZGWh2ZmwoQcG3W3V4mcjwTymzxSM5LQKc8Ctwwstm75QatzBAqt",
  "key6": "61C3brLgmh8ZpUrnA2rCVSrvmNWhVMDMXVr3d17M9zfbQ5t6srsehBSo913ekpits1MvTAdnhR9wZYSDdg8Q9YrV",
  "key7": "vGyizUcgSFe7fgBYSv7qGSxhJQuoDmQwo3GBPKEr6F5Qg1qND7vpqtyRQGgLQU5Q5bvPtegYeqA8uHCeMhN3vPT",
  "key8": "qpL1cr1gb47gL7p3bjRY4qyor2vjfchcpR8aG7CwrgBZ94VLXis7vM44GDxqS8dmjGinV8CifbL54DX8X4cCqEz",
  "key9": "4o84QAykcg2E8HNB5FrFhxMbVKbc3DTfoP9P9fGQjFcWWo2N1NumkyCVQtGv3eRT1kVRWXo1TvTCEXyr8RTkrDc4",
  "key10": "KphoVoQtSvYawuvupJBmMrrii3r1P7Tg7Mo2HNAGam5GnJ5AXaswcA1y5sxxUocvatWgD4JmpHGhZKR6z7tUjiy",
  "key11": "3q9h9hWUaWfrVN9dX7sJe3eCZBLieuHKxtZqkS1D6QhNPXhJSPoq7vpNHW2oh4WbP3Sxeby8NBSEXvjvfPhhQmAQ",
  "key12": "3Dso8PA23rkVPWeFNmKWyLWquJ8bcDrXAHYpGeQY8Q79SDoSkbJzU7XzzuxKDcNGZRjZLwmL3MJAPKiAe7yF7t6K",
  "key13": "2rmopSA1S43HBXThn65EJ9mZFwBN9fTHq3ac1kS36icEsgztgP4LDLRgWq2hkyFNE14A3sNhe47VpCcXi8qZFBQa",
  "key14": "5cSRNdXWC7L6LpqbvRDCq5adm3X8j5aKK2uSbK6EYoaT9TtduXckpZwuici6b6ADsb9Tem7BaxfqbCvpgpheJ9Mb",
  "key15": "4nZxtLVYvvuqQRtZ25jNPgHYKQ6dSxbfMYsZLiosS4Pk8tCnSjKCZwHWsNg3Jn3UL3es7teni2hmvDHdmp4Cjdyy",
  "key16": "5bNGTpYWyAZyazQdG2TxjeLMDqE6c2y8KV8mdzUscgT7c58tHwzMtMfGx6gpJRsDkGv6Zq86LhNzx4m3iWD3BEwi",
  "key17": "494eGaM2f17iD4RFhYHTyj3PsiTrAFDe2ADqLmFZcY3EkRE9736MFeDuvjYwRp1VMQv7zRTchxSnUo3NNTJ5qcXv",
  "key18": "4PZiS3QNJPvSg5MCVXESgaYYFSP5wjzo5age1FdgLK5i6J3Lnu1u5PiW1xo15PMPMFz8atkZ115gUhEDHCJSDPiC",
  "key19": "5NDoumCx3iDc3rw7age4Zy14dJBMpohmYFGsnMKBAjK4g8sc44FobYJGvWyEbQ1SCjexBHv6u46j5J4PcwcuM8DM",
  "key20": "3B19yGvogEFAgk6yzRXkGR8j4NKwrc6bxtRGZkeuYWMuyZsjVXGGyyiQBoxkfQGqtCmQGVM1U3dZZZfzHBN2dGug",
  "key21": "5hUeiKoAncQepZe8QbTBWXShCoJGDhBoaGouJmxTdknZMYQ42YuwKMx5DQhx2RHSTDtANxNFWrB161LAxNxFgY6A",
  "key22": "27f59yb31b57sjBhf2ZgyexGqqVZMf63k4ukn4FH4zTsqZviFLermTNXRJ47W4uum5TaDL9bDHBfEnmdnCDgRTTP",
  "key23": "2fKUnTmBJPuBNnnXyTGLSvakx2gycCfoj2s7MgqUwWUDqHCW5AKMAkbRLdr3yDpfXNQC52zHy9cXESriH9c45ukS",
  "key24": "4TobxPibnVmk89dcK6V4hbyw5wAqCXb4CtiM86Z8rWSpLy7YFdKcM1iCUsHjxoyHthAoNrq8Eq3SaLUStYo9Pfv6",
  "key25": "5HZmQUtrCoMQopP9DVi8fiicPoAxQ1qhVs6kXL5wLaDHwUiQ43RRp5kB21T6qQ7QXYUZLPZJ9XdS26r4zFqeVLLL",
  "key26": "3fzHfCz3db3xFMcJmY8dGDwdcFLJvpMxhSXbfyFsYNuTEe6Eb8ZGEBGzsk4sVzBRfrZMNB8PszDMWALVXPjnmL2t",
  "key27": "4gxkyBcKV4pvBUJzJbmFNvFqk6sWc281ZmfDLqbD2uS6fUV6ccy7cDiHZmJvtAQTabrkbMe4vpo9EfabLxND4ts1",
  "key28": "nHrM6ed94BVCyNGEACBd1ybze3sgSckARcW76kGrgq8qovCc7X2g3na6jVZ3JChuWdwZFhbd5vupSEo8sFK7bhK",
  "key29": "3xGNK9atakUTWLHZoGzAjiSo4nmFzQASvJdwDJaTZay4XX4tsH3sPG3RdvbkutpQ9AYY8Fb6abY6Dd6cPyKDT7mv",
  "key30": "4tFAzaMAMF1FwTEoJGJ6uJmmgkkSdKtMYK8SqfzfCPQt5CwrK9Bk3XMhAKU4s5Wzv2mogTkutvNwzFQ6tUsLqzL6",
  "key31": "4ZKxSE89gjrXv8FaX1M2JwUb2Z8bEYHpT5iirutvqtrn89DAkDpkrFytXTKqUQVNZQU2gBmZt76yoQVfPWcbZmeW",
  "key32": "3aoDvz1CATpHuayGrixQ8woruE5c4pC2fNDjNbUAf23vxNS6tQrqo2b591BSXY17CUiXCpUf8AiJ5YgyzzVbCQKY",
  "key33": "2z3YH5BiUWg14FXHCBxzioZkUKaAxWjehRrcctye5uazm3WX8q5zZj3yYzLGsGYXEZwMVGQwWcmjqC4LdppxYAFZ",
  "key34": "4R8P5F42p47ys578HV1hDNqDsggZe9uQhT4evMaHvZ8pQLBJ5Vkn4nBxibnPAr9eUBQtuMfmXPk9KsrhfRNe3eFY",
  "key35": "53eorrdtKzNN4YVffyaPyV5rYf4rDGqkAn6eVSum9MfCxpZFH17kz66ttfynp17yjCcb81ubodZH1NzUqedWTmxK",
  "key36": "396j3AFW2cUBMBBz8PbiVWeqXyjAhs6DWqcn4twdfQWMZ4XThazXUG5TGkq8bgFqPvs1xgZFVr3epUjTJn6NSPmf",
  "key37": "41E6CkJbhEcL5pQSxhdHS553ygSfXp4839AwaVWMTkDanE8e6NzrhsgXzpQGRcvv2F5hEovDDZyKapdB3Udj3yEL",
  "key38": "4RENQWXQWXYV9VhhTbH8cizSP1XsCLJu6GibS1FcfbfrXFk9AdQrHwsCNyBpfQpUNst15Q2A9Xdfpdeq5i4waMbt",
  "key39": "2UiQA5AVLnjaWriNjN73LUh1MYiP8bnmGH2uHQKUaceFbsxakL2HLCP4zYMbNW5QJwt8GjyXEb6TvYtMQp88g56o",
  "key40": "2dK5occ2naA3Sf2gTUDGPFUM2V6bXJwzhAFrWaiivZJsFT8STZ44vrjcYco8Am9XHSyvSjmic141xLtoy9pa1vxJ"
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
