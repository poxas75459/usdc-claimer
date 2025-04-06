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
    "53JVhBTTmWVqS4FKoqrJ62s57Q4QeKY8d8mtkmA574P9xThfpxQ98GW8xS7ZBshP8bpkpsZwxniACBKPPySfKVEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJ95h4Vf9QznQ7UHuCHPf1XkcFfoXsuRKH48ky3vqiTo4r8KG4cyu2hoPKEuMMgAv4cWxrSTCuLg5thWbnMtK4o",
  "key1": "2miSC5EFcaijkAUuGorbBs4sk3cSEeaaBP9P2jZ2M6AYubDFrH4chAeTTBcoFVV2N68jTp5WpQCKVUUoT9Q9Di9T",
  "key2": "4Jow8zkNGrUyTWHNUq2Y1rzUbt9htj8HbkHzAWnJWGCsC6ytHb8E4cwad3mR88Ur5QP7rmVg7nqJvVWsXMsD6eAQ",
  "key3": "5zddXMyUGVz4T71sCty4TsFB9Lgov4JYPBHpLzPwttGGPsXFstW4f4Q5DGKKYNJQEGX7SE45rfyQGHus8X5sSgs2",
  "key4": "3qREQpU9WsXW4G51K9QN3MCtVqMAhDrsfb62SknEjXiTTQ1sqpU686DAAQ82HMwEppwFTdMBgM8kCqvvTVvz1uXX",
  "key5": "5o36jy6s58JdV5YdMqsCNk2PhD7viibhfmrTkcQDPwQtfXhs4iv4ejbcHGV2RjxqaYprprFrBasdQwazJycSVvaU",
  "key6": "2VCt5aruBykNVjBDEpRdbCZUyaa69KrUh4e2MCZFk8oYxMez3rFtNiTNiKLRbXjfQU6NXMgrDaYkwWsULdB8s3zb",
  "key7": "2td7MbgbV6AKPT8ADTRZh8FyG4w7Lg37kgS9KByp9FRbiBHRBH6pwNDXTc14fWLwwzse2hpMPE7pj266VQobL5Cq",
  "key8": "4M7RJ6LePFEsRz7obKAdU3AdHwsL3DE4uEuUq43gkPLh6gPReiasab9D31LGwdH98cpcMRQCYadeZbRBfJcZjVC2",
  "key9": "42gJRdyHkdgY9ws5QV72FvQRjrvZ8vJDRLs2KbidsYzh6yV9LnMqabxn8GTGghYGV4JFAReZv8E7Zq7ZKHhi9JZP",
  "key10": "5xoDqMg9rmmWV22JAi5sKk6znCEgMNwbGaNsw7ETv5Sg4afgvn76F1Vs6QwNE2NDP1RdxpqqzqVKAMVaLgMyHvHt",
  "key11": "2hzwjAYN7gNRjLfjbYLFD9hCbwFTiRdCaLqcucER4az7ntjkSHUzJLRwjweepQUP8zqpbLDGLdoTvJEVHnk9BXA3",
  "key12": "zS2eZTPc87gRDqyjikQgEVLaPYWHx5Enig6doequjPDob9hxpXJWPqivUK1tHFqxMB1k27AzcZbCpZHPLH9zppJ",
  "key13": "kdFf4uP9TJQvSyFznH87qCP4qtgzmYjwcPGTzs6poVjQfWfjQ4Rdu9L9PiQbEaFEH28EgBxmzpLxEzu72mXZFBs",
  "key14": "4khVnadxJzB32wVMjuqVGwZq2Lz8jMbXMznY7Hn4E34aWVFPbdMjggZDzk6roRHNvb5YBECQxkBiCcPczu9TvTTd",
  "key15": "389bKqapzE79CYDR7KZpFFC7icJiBLyLy8SFSy8YYHQwkvcdAJrL3jpdpqYfBAKNhE4PpjR7w6iFJCGtdmepnBXV",
  "key16": "GSGRiZT8dZivk34MBXtfNzdYTbPnAS8JkfHnbWUZVT9ceTosVccQtSbRVq5XN4fQ7BPidGAKncbi1neN4jLgefc",
  "key17": "4Jr7gLGrGmnYp85PM2Xq3Chdm45WWMyviJ6q73uWNYsqzYdRiec4fzwsKma6X4VasLD9cJ6DveAwYLeAc9ovVfYr",
  "key18": "4T7Ln1cUbNAZLTatHx3L2ypxUAjhgT4YmcnYvtcrMpBdeusvZe8DPyvCExS1GFUQGMyAxtv2bk7pESvJxRxBxvrv",
  "key19": "2yGzvW3AvbAHF2peQMYMD1bieZhpU2Sju9sSPvV5j27jdXtmgUFs9rLqnaW828rYXHoapjCmYmrZtSsitQLr3WSt",
  "key20": "63UMcqAkkzvvsRtaBjJPKbD6D2fja4Ve3ze8nQYrNVh8Tb6w6h5AG4k3XZgMYf3j6fNKTqVFsLLtjb8eHrgikzJt",
  "key21": "3bnBXe5jhB77ryjbMixxUcpR9RfnQDEC2gwbv3AWxyXDFA1yCSzixf25KzRer4FXHXe8B63tNXfY4GJ8sVP1G279",
  "key22": "3JujSdRB86ZFREvVrAnykbJhBGNTp7tWMrmJnzquHHxcBJugKHQYvLHnmcRLSGsLb7NGd2g1bXcJY2RXoiE3JqzB",
  "key23": "5XahJFAHsLMx9x8wa7jJy7ZTXRcfMgEdxThmoBsu8bUCFcCKUtcT2B9fyy3k7oCbfvNtL2akxmwnZvSEn2gP3EZG",
  "key24": "4ePC8TSxQP47GHQidYwGPicBjC4tbETU2DPpzSoCe7ppwJZzrgYZUqYC3MPjtsTc84YCbviUAdLJFpNd3fxBcFDa",
  "key25": "4CtafYtyvJHAMEGvLLkcA7Vi7G4n1GhhHCGYrvK7nYPVcqD9rFZmvkwQXUCNXN6Kg3zvE4vSiTSJyjchRrWNbKgG",
  "key26": "4nHy6GJFr5DrK556VFAMtzZayj4TmcQfHpLyyVb9Us6djQSymSa76RGeWkJzqof2Xj8KLBJfJuRzphZysAexDK7b",
  "key27": "5NWmg24vP9QEF1FwrY1cYdC3iPuUQx1ujYSStgc2MNizoq87RWr55gfxTeQUDb5mTpS8mFb6bL6cbLcWgnGDeFWT",
  "key28": "397mJbvvw9a9cr1UrruNvSxbr3SnTrY74XjKmXrdcdfyVDHaf5BhtFjJcRFzojNQc9EaTrXCkWRkYEyj3p5FEhSp",
  "key29": "4hRmCEjrvhCuxMcHM1Thr5hfSZFJYKry2f77otdEtqpVTFonxSWgP9DRocoa1aCcAkmDSHJgPWSduGLn4emfpvip",
  "key30": "3PeDUEtTZkRYsxaP3q72V4TuD3vPfYf7Bdv9jyw8NLdDjFjFHtEZfNBbVU2SYG7GHWkqepBn9dXv42AMY2pBNmWo",
  "key31": "GQBxBeeLhHxxwPG1g2rgANDaLvQwPdbt6b38B92ACKij9jqUGJCqGG3Mot5PfXDWnCzukwmMYj7MYYBzChwbKuv",
  "key32": "3EGxRBokgLRBp1XGCx9V4SDQZ4H4XwCTLbnTegKfAY3bmmLjuWAbJH7XL6PxoCs5KfkQBCGiAFEs9kAbpr53QP7c",
  "key33": "2o7JgFXbaRsPDzh8tQWburyjL7icBS29UZ6ymAbHac6uB4Y7RqGvrQLhsfWJ1AwwrfLKZ9yB6qQ7kEZTm8AXf7y",
  "key34": "3QVjzkddErGW9aDLpgTCBuWxLWA9KiFTfZUqiG9J1XkJGpY4kWPiCGQEfzHjrQ4xgxUNMaxVknJdjLkyfdBnAGKZ",
  "key35": "2AhHWk6MYtM9WP4mBQX5JhjdHdXm18ST95drMQBsmSpkhwuKcp6SDcLXdZK8mFBtMrs7pYrLbabyVhg7prgMVaXd",
  "key36": "2JvSJotxCd9KPYqS9LXjCjZrhDDt6xS6LTVuRYAjtTn1D9yd83bYZWtSwrWzdqqCuBp6nWa5RADbQHV4fGmbUWhe",
  "key37": "ZyamE51fXgp64pgmieu9UXddos3Aaj4x71xicYNEY76Z7C9EhJNcRGXroGLwYpTGM1VHNoQCsZPPEn7UBajU9Su"
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
