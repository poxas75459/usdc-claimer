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
    "61cvZAbDqkDzH5wWiftyHGckezuLdoKL95AFun1wAvGGmAcTfrwi78Q3wGUuRiXr5MfTPZEabnJMhi32xaSxN52G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33QKbtnn41MS2kCV1gsm2K8hUWykjZmfAbWLLrsarkbFdBJD1VPRpf4fm7WkTwxwPM19HSy1Yg1NfquiY8t7cKeD",
  "key1": "2mGNYhNnppQkpdk3SU6KgtBqUsJh2Vbh64uTxNQ8FTRe1f1N5CWUXbcAsv8AP5eqhS8hRsyNcQSfXuyoKG7BRug9",
  "key2": "5RE3iN1VQT2b485pdTVvB5hMEX6xjqJuESGidyJWtgnPGACNXAoMbsF9uhUdjqDgBicAvpLxgUc4FmposwWeZbp8",
  "key3": "62raPdP2gU5Mnow2VC79nNGitWL9opzEoFDpahB1wkPdbxaAvCCYJjqH1wpKMW95ABNnWTNCripdmywXW5iEcFLo",
  "key4": "5zQrVbJp5DLiTPFPw3yA7vxhFDe9VEKyQUxaizJqu3xmKRVXtxuiKjsQuNZg9wfF43wxzRqyGh42eDr4B6dwjT1U",
  "key5": "nGmPk3UD47DCUJkMsGax2A4qfzM3Gz4nSdpjoojJm1jexw4x4FgL4by6jj431BW2Ftw86hv3SkKCn41e6PRjztR",
  "key6": "56dmybWgL43K4P8iGZXyw1PCb7GGD24GDoNXbnrcLZmzBVU19jcho9jVEQpjPhWPbtKdvrcyEFZ1PhpS3UUhvs3G",
  "key7": "5sfNP2L7NgGWvuVyDRhbhNNGXf3ArB3XNbAs6mbnmjC9aVgtA9oNZskLbBpjCEvjka7Jjs8fPVUjSwH727UqTqs6",
  "key8": "2MJiNorePLAsx7AT9WTe5NvQaNuPjAV6oGrFpppLu4LWAqciftDCvfbpVZkFYx1qUF4C9H4ZoXpyMJBegZHiSBk8",
  "key9": "57kmwvKEZWugx5nuSBQjTH4gULTEMs78LFcJ4ehVih4WCb4Rfmmn7yvGUT3hvBiBMVWCqT3zv4un8Xw1aBmCwYja",
  "key10": "8HYctuUDQyQhXYP7qX9va8F4JoH1qXzMztexJEeN8VDkKFxUyhY28SYKShTuU11xhmcxRawNAbgnY72PPuTt1KE",
  "key11": "4rVrFjovqAjKatcFDg8oEeRmC3Swfvki48J5Ww4p8MUEWYetL4sHBLqdKhHDKn3yZ4sUkaQF3YaXYwKs8xZ9wLu1",
  "key12": "26ecJfrkJxjxZ81727UYhoSi96brj78FZmm6FVpfmjj4DHtWSvVomFCLANPxUEAfEzP1QHs9aL1qZ6em1LPVfD52",
  "key13": "4mtxPLmUCLne2hvyuLNathvrE8H6RDqPJVqgQX5PVSA4LBffkz2vQhscSuq19BRhBR6G9YXUEPE1nxxpWrZombAe",
  "key14": "3dSj2jnjAD3WHTB9ptLHw5xfYeoXQzDvpL7Sfb5nHjV3MSschmjPzsGneiHSAyghL1WDZc8xFERbSxiMeFpih7q2",
  "key15": "GqPVasbhNuQJwX8doh1VcR5HEXgUNeGHKUZe7SucAwgKahyVHFE2nCq5ysPwu4BXVsg76vdSxhYoKdbSLc9tZAZ",
  "key16": "3HLmxejqGVQmS9LoTcxbgGLaHo7sN6uTizhUJ9qz6ypK3AQsWGNUKmWmGrhwnMs6RDADCeyTKCD9GcG32Pi9C8sm",
  "key17": "2fr8CXYsK63ExRZjruwk4wAj9WquxVnCB6TFhhXX7FXhq1rmvCvm9ahftRPZHdHVRHzV5Ye4iCLx4JQvAumzG23F",
  "key18": "Q4QeV6vV7n8AAXi2ppYgHJ3cCV2bwHHo1yoLMgs1ZPSKBsXFQk1NSnm1ZZeWUmG3bvP3xfLL32aekg9G8Pc1GTn",
  "key19": "5Ry1kzGk8tQmrCypBY9VEaEUzxeVW7ExMw4EHXswXo84f8ShhbteJ2FRo8HB1c2poWYQGMQhrx6N2PB9xW3Yjkf8",
  "key20": "5K9MMLTRHrY5kKYKHNwEmcSrGD9A23Ho6zjgGRnWZt85bZQPDxGkuvCs33rXLDnZgcYy1XRZfrpN7RB5y7paLcxP",
  "key21": "3BDj54diSkw4ZMPdJok24HBXAieyzVo1UiEnS9YMJrBWF6zRLXvcFTXTpZrogDUMJZRwiysoJV2wrSuoagk2hCRf",
  "key22": "osTv7ff43xM3cyf9yqr7cYG521h9qYFiMKUjhjwbxEXLLrscxtrvuypfxpCTWLkYbWSDTvVVUS9ysXSusxvNcuf",
  "key23": "4bZCGxTh5GwLhjDEEjxVhPzUkqZfUk5NkGUfwWNs5BZko2pZV976LdXdkMXUfXJD3QueUmvA9Ai1MhhUJPjQB7oH",
  "key24": "2DxgPhjPRvS1ckHHW11gi9yJqKoLNgbZKK3YVLUr8m5qXRBSURiAaqWppscxupFBnmgh9XADgk6sqXRt3Z2dNVTZ",
  "key25": "5jxnLKcsLrkeyFtzj1QXhKsM1HsBeNhnFd6K6Ya1khueSLpZdRaVTMHyb5V8h6TaYdCP38GCrWqzHFgeEDS8Vxix",
  "key26": "5xaNtCEGGVTE7Ua2E2B1wFBiWyPavqjAp1kgYYA4GdkmUsCgR7RsFPD9pUvXJNCqrzwGJECHFg7yvcfcrxbHdQVj",
  "key27": "66iJpZdTYfxK5qaoLLWroBnquD2TujGvSPhmHKvZkr1Pk9QGHSRkmVhLAReMgkqHAGdesk7KAVgPYCZ3xXU67cYA"
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
