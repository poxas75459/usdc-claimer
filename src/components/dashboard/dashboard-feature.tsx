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
    "367P26RCGpX9WoQ2vFjeoBKPwp6eRACKYX9Syt4V3ujohBEsMcqkcptrygS1dSJKChBNSuGDSXzgxqroG2eZf7oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vgpaNEySvNpR5Bkp4tB2p7QXC56HxZg8A7XHeMz8Eh3XELD7gqPdFBK3d6FZPMJWD5iiteK83HEsCGdmeBGdH67",
  "key1": "5xRkLaZXvCqY7nVZJPRzkje1M5qsoT9GXC3ygnNLjfUCvDdoZCk8tgLwFzHW6MoF46nZqghgJzgNEQ3APfHkAN8Y",
  "key2": "2HMPdwrTTsUtKRpZEW8HxBrTGemREZcv6w13672cTF5ohbypsga1tmtjwc7TMc9bc4BRnUJdRtiav86eLfcSg1Jo",
  "key3": "39fQiAKt9f62RTFNej1KkJWDwdZPEkQ9BVKvVzzv4GFPUd7ErCRrC26yUw1jyzfNQFkvDU5CrQZwXop74xNreGD2",
  "key4": "5nzR5NHJGyLH2Q8GUjDtYZ1jjZ5VzPauqvrKR6f8T5NipzahPyW6XTzbCD8Qd46PASywAVXvEkizFXmu8nv4mESy",
  "key5": "5VXRXR57RXWwZwyLiowzzafkMcckQBPo9TBDgotFTvox9yAvC2ewsXsDs32arshQUsSBkxqs2yDiCrVC21ZCQKh4",
  "key6": "4BZ7pv9mv2uzQJXzubvvhvpqzW13h6BCb7CS3KtLVtkXGNx8KWQmS9bKwQLUwSeGHwt6Qb5bnQJRiic8QpYorb9b",
  "key7": "5meGoEMGXW9Ho19UGvqnAaTUMPfACWewdxKJs5zavLETjBb2xEnR1p2z27BsLbEgcWe7rmvj83oQjj5Y7bw9xQvp",
  "key8": "3xwqmWux3hFuptDhytuQNqYsxCkrgggeZ9RGV8Li6Y72AXSBk9vMZSjzpTk6fgvHhB4y7myVAbjgPpc3HtXhbPS4",
  "key9": "4nTix7AFnpWrWGykyeAFbTekBZEjSju2isboS99x15KrMqV3rMBbvCz6cvnCHgkD8YCdHgaUxbrFxm1rYQdBnmot",
  "key10": "5hWYqvLTgpNUy881MyaiMZ5GDsH4wcZRzV36mz2ahWQgRA5XAz19FxkTy4gwvYP2iX6tvptEGVcWfzxDZt4vRMcp",
  "key11": "5mFimHr7im6PSzSeocEGo3Eh7b5QwjoUxRYLKwGht3YncfqeKCqA1Hh16JW36GmDZJgGxwR6RsLLcxCmdFZdFrEP",
  "key12": "3GGF7WgBQwT6SdYVS4hkeFwL7Q3CMtoJWBqLhiDpZ8Tkyg6cPv4x2ZoDzrDWqgZszVvaPgvePoFXrwU14pNxPeHZ",
  "key13": "nzRUc33SZ75uXD8E9qyg6Lbh5Y84eeRRrxzsNDxg6CQfnp4R2veTPWHX5gpwprUpE5j2eHwJBk7Q7vnKiLxmWiP",
  "key14": "2WTPgmgmS9fNqyYFzXCFNrJxy72Efxoq8W2NekxTBJ2PsEQbtiJe556xEWMyRtnEpqQ2HD3EJxKLqTd2ax3LzZ6g",
  "key15": "5DELk6YFZNSVMEcSaNYk3qZemAyDKFhzCG87HkJhRDcgcVMoy5wjpAzzqTR81bDETNH9yc79UNKjKumCPCbmiYHJ",
  "key16": "3YuyLjedN64q6BqpZawejNiC9dXteFJ4DiTvampYajrtBbABBzJosPnwrPvEzTBD1T2pgiUqFVbvekkASBpbFovT",
  "key17": "4KVsfHaxJUFxDCgTWadq2yY9vUwijnoewwXcY5YgbmSzmqKWFcWRS5hLBJSg3Moq9X4RUTBFi9h7iwgjSLP3wQTz",
  "key18": "52RG29LA6RktauBXdQUGbUnYggEcSxeobybF6UeUwZJmPTmAnX1HsEw2xovu4kmHL3gZwKWZX11FV9zpvqpjPRgC",
  "key19": "X56F3EdDGbRfxX48RDT7aL4b58MFBa12v67MtSCxMcYiFrRPmkDWNnbPj1gtJobbnx9KC73DcpxMpPY8ZW8b1V4",
  "key20": "3xWE8dZd3kd5Tpmtg5aqmj3D5vdX72YqEWVwkjjkuh8H6RfJVgkWNLvQkDsCwPHavRVjUqnESpXzgmLWP4Np78EF",
  "key21": "4xdB6x7tAfB6SNx51xWaCgCXep1ycXVnqKCtjGSGvG8D8kh9DLjV9UdGqwgQR9YaY4GXEbpmpiNC8vM5SkcN4vRG",
  "key22": "633zqoKbfEBwjvA37m6yCvhLQhbUBDeSiv2pKC3LVRfuZtwKj4SE7J79EDR9VqEYYE9RwqMGe1WHUK6b8Vi4HnaC",
  "key23": "59SotUDdo24rQP4MdfJcBX6D7jxyo5BZ7qHt5B5rK8tVUGWZd6Ye5EJNehjfuh7TTunxWjm46SSVVRtxzZo1YYcH",
  "key24": "drhFturTNEJjDQeGcSZYkKcZc6vr35Mf8MdMEFTfX2Su2wHYgexL7vu6B6VrCC6UPQgPTjMQsMspGvMYnjH5bUZ",
  "key25": "27jT9YATv5ejGFRCUUMHGngZmwr5N7sSP5qYzHRQTfEg2yFHbPYiVoPD51Dm3MAwDz9aKpgqhfYHGKXJQrYwCzid",
  "key26": "jNdbT6RmfPKoXEcgzevvXj32x7jxwwZvYoPvhNqAiysGrfxHdhkrXTvzHZopMpkYuSav1xYp8vqiyCR7HCkjSJY",
  "key27": "2K99BRtaSwqMoL2D9kXg4ZZcTVHmF2qfiYHFzLz6SsPnaCYvh8eQKHgmP1ZHkYhnhPTXuEGcQZMTToKTaT1a8mRM",
  "key28": "5yjv9qNy6PZ1bNssvKqVouu5QtyfwZhvyWozzfsknqzD5P5LcXbA6uaoMSHir19ZidwN3PdCpL5UKun6s6FpHndd",
  "key29": "57wiHrcdJKsrcnSXi1GsSGCEP6iLKcYkoGFS8ftAp7aM4knbi21shiuXyF4ErXFfZWNXkbubF8hnMaJxsWFQtwtj",
  "key30": "3ujuwqSX8DN9EZynxSAh4jGWTKkae6rfiW8w6YksvKt831s1fuaJZFUV9ybV16Zq1cG9PSLkmnMv7HQHjUiZWed5"
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
