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
    "2ESMc5ZsKzufB3C3xrUNaDRfySV3NwBGST86cpp467jpr6Qdc4VVWNPKuF4rj3raPpwPUQycSTPbWGPUQQmsn7Nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ch7guNEPFtu83jccGs6aduLKyZJLjYsn7h9Lcs4uyAyhLNVTbhzKZkaVRfizUMPJF9fV3Vy6SMnM2hY8qDRFc2g",
  "key1": "3W7kDeVR63S3RN71qHXhzEz9EYwTwBTvrTVbWowL9LbCn46a9iPNwaYvrWm1kixx2f4hykkMtjogy7mGxnHRiQ8j",
  "key2": "42uZsQoRVyUEXrGc67KBr8RNoyBeaQuBJjSbbsR8u9dZEZgx5i2vivUjHt5g72NB2pxTJrGkfUDaNEdpHAYxzjio",
  "key3": "47ctmJeEAX9Bh17edBZFtrQJ5ARNHekq53vcieUUJn2Km6XZMySR2qGxTzXFakJCdUPpgemQFQqxvUTKUwdTLjYs",
  "key4": "5LeanSYEunyvLazhMeDuYPhRY2z4aqabNVEfitZUcNkyShRNpsiY5P2HZHYweJp1iTYSBxypnqmoPpwLcmVNfjpk",
  "key5": "G93hL3f7XTqMKQWagqS9LNuQSWqseUredqFoUjFa9JURBAzuWKfzy5avxR7CuDo9iYt8FyDUEAtWSE9x5XAqj9L",
  "key6": "46z7ym5A8He7Ma3nRpn1FxXLtXpT84BnXdzubxviaaZZvDCqvhboz4hvSV7cg4QaZ24XxBNFxLZoVyuLhjJLVN1a",
  "key7": "38xe2ptQFD6ym1TdbjXh69dBTW4QoUTbgX9HfZmVSqRTFS3CMAwHH8bBemtbrq6nqwhb73jkVD7ZWNHYM837DLtW",
  "key8": "5KR4MAWxbZ8p2GpjoxQsk9TUZpPWdwJRAQSK3TuCjzegrw8cmp8k4rBFiidxiMWtS4CtoN3GfRiiye3ZJxTWmJ2e",
  "key9": "2UxND6gX9LPj9M7tEMXJPq18kVotz2WjQmkqnLBQV6ngBr9Jz3UHDmj8X653oFmpjJ7MmBVYWosevTTdLP4m7wDL",
  "key10": "62czts6PFWLKpRUB2byvicE8FUdMtD4DuxstrMD9RAsqjhNxqUCaPqCe7o7T2QHkeqoDQMYzgZy6bnaEERQ5wM9j",
  "key11": "YTBChhw4Xa2arqfMqyAmhJFZMThjvnytos5trsAj1mMr48hX2DT4yCb5VjvqHAzifdmtEJ4pNAFKoRMsGABVKpj",
  "key12": "4LgY6VpDcbgxHjUQQpU1wcQTPLAo8j7nD5DT1U4EKKDfTzbCPPXPTSTcFBmXxmHigqBweAWZedjyfcxDxjLVM28k",
  "key13": "4t5dXh9cGaUhbAMk8cKuXq8Pz8YpqES2MCaAsSzZk6JtA2LprCfjUn4ya2yreUNddaaHnE7eNN9oPg5eaKsGmHG9",
  "key14": "57EWtTj7iGqFioByBxzQWx5A2HfVWaGHtE7qzEPq2nQHdDAV3kSCfzBdNXstvcyHAN9LgatwPatnCX8Ho3RuJM81",
  "key15": "5oMpNwr77qQcMzBNfGPa825ruyhUUe2U26g7J5F15ZxzjTLg9yJeWbkx17sseGAXv4vhWcoySNXgQqjjPPgxNCZf",
  "key16": "3PZxT6M4BfnkVTs1ifdQBrJDC2kh4Dd3VZBwanf7boGLYakckGa9L5sUVsswbhhHBtQNEsdpAQ11NVpJpc3PYYkz",
  "key17": "2iwyyNC6Uap7gHVatRk5LCyd5TsR9PWH7C3sbjCYvpu8y51edPbfC8PduxKQpqkp59qN6XupcX9WBqsa44Rr4PLt",
  "key18": "g4LsSqMRj1sn2CVazn4P3dYk1t4qHRxUdjtqvozUFvDhUVM3mDVneknL7ejQF8VsTS2bYAM5GPrAktEyh4ANpRR",
  "key19": "3gHYPBJbMKHPYeN3LXwYzrLbYGF5Jb8avrys58YgLWRSysZDquGtXKnCY1Uw3McJzxCSeWvtjfXWKbTRKeiHUJQK",
  "key20": "2f43kDjcfubBUNhauvR3bTxLxMow8igVMjoYUyXgtLwfZfdf9ZfWQ9Vb3iqGFz9Mf3NXFuHJGeW21zt2Bv3KSui9",
  "key21": "4YKR6irRrwPtGfWCK4cEASXW3g4KrRgtTBcYU1eNUipwj2oSUQ3zojy3wXDGe3x3547dRJxijr81jqEAhWXzj4bK",
  "key22": "5h6TbpyNkKB9NDvRoBnWUUMPraMBKxkrUPJLEB7hSLVYgnVF76qXVcn4BknHrXqiw7SCuF4175mhK8s19py8qTRZ",
  "key23": "33fhBMzhCyUwz3q36GpBwXT5a6p6uh2PX14iVQ26bG3mepLF99ReH7YKZxba5LFS9QKotsxgpgfbioQgzhasZtSZ",
  "key24": "AANUAj6DGs3aWmgF6Zb59V22EciF9bauXkkKhUMJmwWgk5C6EC7JNAFmjASJzrwtSBT7UpdM3DJKN1qH3LjuoeU",
  "key25": "66wCp4px5jhPW9HGxXMzyGKPQKWFDARbbXhjr6dj6NwxzzJuBA2CMmFgRJqo43yph3R4LjGGAjNs8GHKbVgnU2Rv",
  "key26": "472rbVX21zNbfx1CHtuqzBPexr92xy91w3jQReofDNsoQvDj9A146AiFQCUuMXUXRuKNtcuAfUzK9N1RCKnvpUg2",
  "key27": "3X34dmNMTouT8x23mYaPvbwqNU7jhEcFtfssHz4WKWiMf4Wqjsi2orc5nPpNHBivJL8vFqrqW7B1sZRjRK5oFnCw",
  "key28": "125DTkXFtssJFkVtSjrUJN2cgPMq529sGcX68k71Yesew5uQwsVz4yZNCqQBh4t3YXm56tNzYnAx1ZpfpRMDGseZ",
  "key29": "2mqCJXgAesd2nBRTyf9sqL3Xp8YmMcdn7hjdeGVnvjWoczsrCSTzNZq9QuZ61U9HoufE8HKZSWccVQrPsq3MMGhn",
  "key30": "siv5USMwsx6m68Wwj4DZkiVbCa3UWqnePdMENsTdcyHjjRJCr8oBjaVrwpyhREpPGqpXAAxdYcXNA9NMnCJUBBE",
  "key31": "2cyL1ebngPy42m8DLpZ3WFRTBLqqFLGzcv8dh9LbTngfKm2PodSsZkeKGTvmwUDqnBo1W9HSC9qQDC62wQ3hEfT3",
  "key32": "5MJh9NgC1KKN94CS3X2UnzZjdJwMpYARd5HAc24va3fm57ZmNnb63GUtdtk3hNRyY8YMajUkEUeAF6VGePTzb4mi",
  "key33": "2muJNMd7vfvkP3BTYrXuqBaHVGJdhiRgtkZ4RKgEhGjsSBQD89ZRPpwuLGj4BzkMw266YWamC7PzAL3n5TcJjmPA",
  "key34": "5LTWduGNB9zFQagYpexiYbyHMG9EDr47F5NXD1emEugL5agrpsudsi7fT6GKcF37A7R9Ri7t8uwreD5Eif1HepQE",
  "key35": "6FPVNqDHcKg3Su2sfEV5o8oRW84fZshDtopr6Q2813cQuA9Vc4zVf8bmM2RBDom4M1sXzT8dWWRBMeaLu42dazQ",
  "key36": "4cLqNhdDnWVbPn5Z2YWdB8zGZ5MjaACRGRrxvm5y4sf5BkDZ7p9aeMphHJpyh9CT9Vwnx1jjdjQr3GX7Qndc3Tdf",
  "key37": "25HPNKi9n4MEKGvD57hEFGXSdfH9beBBCmAupqpzy2nXDYJciLQx9j2Rc1e69JhYtm3A4utL1kn6w6sJSB1DLDtn",
  "key38": "5ECvyakiKQAdvfj6GoScGfAopn1ZCkZLZSEKkfhuLVuwVQp3SutJcdoxowd7njfsW2vMnLjPsdBTaSqYH8qS1Cms",
  "key39": "2QWw7jD76yrbtryVeNEKKNVyf6g96S1UyyTGZwBEoVhS32GkXkKsRFVt6FMoGS3hWRRPm1NfJkmCpFthtvqmeGLW",
  "key40": "38deYjggbEfXycaZaHRwx5P4XG6MyZGLMNYnuZizsMFhdrvL3TnWz3kYFmGhMi6Y9KeQdZjGGPtXBugL8RAxKE1",
  "key41": "32pFK7U5GEFbCPCz1ExsEKysgwBS1eRfJB57VnawsmaM9H3nxoWKRAGNEkDwGXN2rkQxSWdszoq4gLESUK2d2DR6"
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
