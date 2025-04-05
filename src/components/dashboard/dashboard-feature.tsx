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
    "3GPAdakifFBL4v9jmWVVX78rEGHiUgKx7qgXn8kwofLaj4QWzRg9PmV2WuvsVnTFUHVxeiS8s47mkYD5SrCEnb99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gs28oKrPujumxEq7xp3kjzvzpwgUAdkGNh5SdBBmGUSaQ9pgoskgFqWiBBM7KurAWBTeoeJp35shdXxRUmA7tJu",
  "key1": "3Y7GvrXjWgkJPKs5J6CL1p6n2VQ1vwyUVr4XUPWWSQ5ZvPoJQqdQA7TLxwamzfBKRazYid2R2h8hsjZStU3qCgyN",
  "key2": "5CPCbmHifMZd4Ecx3E6asvrVo3ALhNQAXBUMAd2LdLKq17GKPGTW3Tua5gf21Z1eVfW2qiTSpkANdoEYJrfA47Db",
  "key3": "3dPz3SR6ct45MdrtpC4UUToe68E6Vy8TqKS6EVha8LQejyCn4kXzczS5pJzjb8hyoznDGWXrzWSVGvrjod5fmNYM",
  "key4": "v1E1nsTS2LfSDgxTKGZLfFGTBUv7yTFEBqhzP4AFa1H2AukpB5ntheXytb9gfQhErE4RzxJNFGKf4Q2D7nCirNF",
  "key5": "5AXciCAAvNzYzZay8ZF1aLBLn7L2CriaikDWwbFXRX6B4GRY9K9i3UEMvia8XsByB8egn7Ea3sKWznpPCi8oCHAN",
  "key6": "5ueN643CranJi7KV7QeaD9Nyioi7o7GPRwqZ5RUKtxtp5CFHLKBsSe3aMVadmosWqFFW6GajRrRoZqPaeCHNyHy1",
  "key7": "5gvoc3zVn5zyzDxpFjRsYxVtVDLhYyRFwc1MkvfkP782jncUNDbUGHCT2mv1yrpFAyan2m7B6jM1fhaPpdQpPQKj",
  "key8": "671oKySqBMXHDTpvodzLy3ktv97jLeagafb1bgLqtP6RjUPwJZ9YQaEky3d7j6EuYjp7McJzuaiSzSDz2oPrLCKR",
  "key9": "57Ha9TSokf5CUgrHqNc8HKdn62fLTEWmPez5dzY1dtmSELdETPznFbURDNT3hcqJgQK3jzyWNVAtxM7AcZzU5tVf",
  "key10": "3WnpSkWyVx2LaNiJKAUr4aQhduVXfc5NokricJhzxCBy4BeSkB7rvx8pRhzv331c1gacpEVr7fyEUV5xZ4vC6QL6",
  "key11": "RP4fEufHAzvcE1Drru898URwHPaR7k4CAMCNaiyN3SHdAAxAYJea1wjNno6DQTyM1vv452oyVGoU93hqxgteuG2",
  "key12": "5JvW8EtZ9DUk7k2gFSHefpfJ4Z9bAxC9uNriEkHxuYJkSE51A1G8uWKNFPCcPMWDruLzVyRWo6yiVR5MRELCr3xJ",
  "key13": "3cjcz917CzTFgLGbiuNiunjmkUhVvVBi5nWavcPcdhqYpYyeCmJ2UAGqtpYZAY2GB26TACEHncqF5oCk15FvJFd4",
  "key14": "41zjyGXnM7f5zCWcLkHQuvt5Big84ZVhN8WTnpww5QGHFPcGwcv3bGXndfmDxmfQsA8bBvcPWJsuuXPgY4F7w1N6",
  "key15": "3oL4MXhEdfXKDghP66oYVJemhG9iwpr84vgiEgQ6GqNkv2HyUq2if8gMopXu47k6KvRqMeUdA4MtpT6hrPXBoVxg",
  "key16": "oDqy9HV55dYFrFMB4C7dphPt4PR1DXR9VxUf2X4c39KgzuCkyjwHcCfxPPQZLDvAiRTpkFMAxZSFGcUfcvdjbgw",
  "key17": "4EyigwBKyPEyR6KzyTgwZrerjejP8V1LUQ7bfKt9kAYYdzBARjiHC59QTaf5UoCL5BFmhVMMYagzxSqYnwVQpQkY",
  "key18": "5sGFDNdGk1MUbKsYwTKN53cYA6KB2C7soXQ9oqdPoJ6L6wj5uYTpLG3RM9Y1CEo9ttAD79MJzbmSrsv8YbVXcCx3",
  "key19": "3RMCmb8hfagVQNuvczPyWXqWJeZKUp8W4XZWWexQ4NTAWM8dxutQAN8Uv7gwgEAaR2B5LdxFEyQMowaEip9hbWLL",
  "key20": "48bE2AbKXK9opKDGEW37bGeeGCvwtmm6orvpBbpeqccm3M6Zp4gUx4ZknqicNyfoavPC4nd44LjE6m31ZC6jEemv",
  "key21": "4QBe8WdPBE3hNxhxzK4cW1M9wZoLa1P4FQXTc17b6v1BQcQsZ5CdQnSoXd9sQYZUCQNfbvxN95iP2W5FumM2iGkb",
  "key22": "XRJSrWoyugYV4Z7PbbhYdmmeu5MTbzao1sqftSYEtcZpBJuoWZEf7SwDeQiKbfn2Wjsk4cbTEMp26iN7FZxbBU8",
  "key23": "2bb1YYshtnasTtdiYRq1MXPycWzkLHC8dnbSt9PPf9Qp5AvcnXnzmKPsByPLCVG9P32djbQZJUArGcpuHNrrC36i",
  "key24": "4Pnp6uXEE9kBy2mHoNUVzEF2gawsXdAyA5Zyt59X4wr5Ms4h6PxvTrezgVkShW1fSPC8xjtF9yQhFMeB44tLKSNR",
  "key25": "21hzGfxSbKiYpStz5T185a1MG3rqJUhPYXNYBGfAykFz6W5osgprCrqgT4Yfke6zp4ZEGfP6qxyw3eALAVjbBh5i",
  "key26": "2T5jgXRTqLVLukXn7P87JNFX5nWdDhFMFhP1kXZGLb218MUTtggKrDYcF1xai8zEgKbL7bQjy6fJU1CWt78GSij",
  "key27": "3Cr7QZHbnFoZNJDsAQv1ZQL7UgWdBTMTyrnLPjaRqiiRsdF9axNapoRLGo8Kmvm5kM32KRktGbaKA58QDp9kEwDP",
  "key28": "3JYU3CwkGLoEyWewwqLUqyRUk16pgXuG6SbPiCuQbAtzV8juKVwFFHcW7i6p2B8pkiM7TPCJAx5n8guHWwA4tGx8",
  "key29": "4wSZoURAuWF8kXuLSzhRcu4QL8R2X4u22sAnCZYj4PmcVjCxDFg63jUNEiu1YBeCHLaUtQuGEom92GZ2gcGUUpU4",
  "key30": "3B6ACJBytHRxPZrieK1xZR5hgNH2eMnDmEUCUnvRJq14DJM2Z3i7tvm91mEyzf3BTPYKse2kYEhXRqyVMtqNQ2uX",
  "key31": "H4Jt9aDx2P8v2RAtoANLweMxd8wBzADr81LGQ6QUC6JaSKF7jS3tVXy8V9fWj3gbWxFCYUkgYKEsSDLNU1AxqRa",
  "key32": "5Drgn1pud7D7nv2FWoWVLsJbXuRnWfNiHenLD4fe5tnYFg3RrxnY5QbLz3c8ZoqkT8soChSZZ3TUotxQtdCXxBvU",
  "key33": "3EpCAHz8fCL2gc3oB6c5UfUgkLxHKEtuAJbrcwZFZTiUZWsPwGRvXwhcB77Gk2mC7qQ4fEhAACjJ6FSG4DZdDAz2",
  "key34": "2kBQYcqMy4TgnhcTLjQRqHmDx7ZPgNDNHrCfoM3WgE2ZMrhVxEHk3YQsJCH4RcbX9pPwYX4f8tDN4eE26UHk1qHt",
  "key35": "63RZT69ei3p5BMTzFRDWwRK3FRk6rDrLeZx4a14CFmYYsPbdvZd2pWxcSEDaUFeQrjQNZca3NoMjtVLK3N36gAvM",
  "key36": "4AZNMuHiDNwQbgnLXbxXU1FC9VeRc8vUpwT45gyHR9z77VwuzcKLZVM6nZByeL27L1Qxu1UPKkTG1RSrCRdc4Aiy",
  "key37": "myfP3qyuMnSfSVe8pLdYzsaqLsYKKtBdoSqpMdxWhnmsQ5GhvtjmY5zNFqS2REJc954WTazYbVaw8z6SNuNaxwU",
  "key38": "4zuZYf8EBdjE2DdSYPj6KBM8iKsvJsRVKDZHD1g6rAaa7NL1iPWfTMXvVpn956RLEqRpUGMezcFMQtKGABX2VTpB",
  "key39": "4FdMfZrLybFsoJxt6uufWjtW8oNpzDMoHa4pbETM226pmjUPyujJMxWpBUBvaxpVrbx76MJxfSzRbJLqph3k4eeX",
  "key40": "3M6wwgSH7pMcUFoG2Bd2YFUhe53jzjyTUpHU7aGZ5h2DDAKB4RdF8hjRhaoMtLkieUCtM1rZVygjLjU78Tdsqur2",
  "key41": "5553jWGQsmBpBaoqiSsPGWHFgUpvZaCkTDF8yGQN6WgKaBWiddd1ZrrikzWSuRRUTgXgyF86bQwAUESMP4KJ1Qqi"
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
