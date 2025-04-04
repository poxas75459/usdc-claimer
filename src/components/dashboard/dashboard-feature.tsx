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
    "2QXDEEE29vW1KeHaZE3Bh48NKbKMRMDcAdDHvcyqkuDouwSZvGZYvYrjQN5j9X1VbSCKtzUrWaCSDxap7ZaJmZKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rbg5GF6xE9Gh73Wchzir5yj4sFrKFnGnt1EwovtSQyvjNdXoydKehcEWnANT1KmipYu87gZpkyzccaEPFWpYuxv",
  "key1": "31AGKcDCYZWYSKdq3DztT5tQQqjWdqjTYvo2dTebqh7bA6UPgyKjQNZvatFxtq8GwFWjqPUscARDbcey1PsdZh9j",
  "key2": "4rPA4J2NSr8ASDFS46RBaaz3iCrVh4DcrKdhv5aHczMnP3zXUwyu8JHLRuhi16uwdRnVRdsWEqWvAXhusdzwMHtJ",
  "key3": "21csPTDUCUgSRR2s6Kx6UPQBxrUBCtRHzK12NEgMYXMKpZsPKzDRkq9zntoLqrWBkM2TwSfmomuMRzLSHqBeymu9",
  "key4": "m1nMZUnzvct4mT2jS7ZP1AfireMmfd53tktqpxgXUL2wLNxSPsfwiB7TyxGnhMxrEkBPbwvcZbB2u1FHxDNxEAP",
  "key5": "eSttji1wQSuJbhJgPYUWLdCuBx1u5QkB6viWHmm8i7GWP1JbtGNxEbmCLq83NKe4Q385nR6GEALcQhWjWQRKwBo",
  "key6": "4V6JnXwswxGLRCwFzmuQb7GJrkBhu16vRfhR2i4p6VuGtNcXw4QcbBWczb7JVGXNuquDDh6kiHWUERxZdorTaDSF",
  "key7": "dyNUNso9mBsJuSG2XNDwi2m54xMQkfniTx1V2UMcUSvULDhPcpe1wJ67nLLYXeAHvTiencPZvyNZSuWc4Xrs5nc",
  "key8": "3opoYUNBMXq4649qxsZTPHWJz7Y6BQNhSctvjJMZCM3vpMaDUSZwBmRfekD1iV578YFegjAsaTNiHHCe3mHvntdh",
  "key9": "2ZbANePb7BkbMkJYtJ5SHnC9KAKJqVeCnoeMELWqoHXh85NhAVMuji2FRMW8pqwQY1Co3vg1JhpmiyhoBbaNkZSL",
  "key10": "3UYjZ7uEBobECEfkNaQXGk5PzxXSpxbn1mcYQu3962SBHtFSvfuRkkdfG7KJJnjzTZMGCnsKn37LaTBakpJkqyjF",
  "key11": "4AUyXrqYsUmv25RvMFyzEm3r4N1SSLp1xAS57YpEcUqeE9Htp8vFMovH6V4vxXe74qm6xho7JY3Pz3aQT8WyNFDD",
  "key12": "2JpoRurjRZ37uZWJFajUgtyLsE94LpdWAf4t47jqgWHTH4DBcR17txbXDaXoGToFENr77UbJ6gTKt9pRBdqMLdUg",
  "key13": "4BMtQDFMVkQsLskuddq53sWHTb3uXuo4bEKzJzcaAvhL2A2YEoYVeBvaryJoretDWFrTorkL7c2dwf7qPy7GBfWp",
  "key14": "3igxutrGfdFtgjUcXKFcxaGjgdLxbouJrwYpA4qMqpWTj4nz3jtzPqFTmiWJfoSMuCpJWxwpDyKVuWZSLrBbv5im",
  "key15": "2LsUBcQBXqP8nPLCq7vQc53ZiEMGjR5ijzSi6U4Qh2Em1adanMrd5QG2Ghbxa7a5hNSBNQKVJ2n2ZeQqE7FvhgbR",
  "key16": "2DG6mDRMZv8HiRAn6wDG3uE8rfqBCRXb1Px72AtAtKjavunsfprUZHrEFWjjAfHjbB1xYuXRqCoUdm5bZ9dtSuV",
  "key17": "3tYEtsuWvwB2pk8M4AALjBmcGM88tksBqR1yR6b9qR5AgFCmswNU21qyzzRQ9kFtMFDfybmAef3UhTqGgnkxsKXf",
  "key18": "4KxZJBoBpcyMyDZw5ryrYc58izi1ywD9bzTrw9fd6Pi4ppM3RS8qPAsgdpF1hn5GxuLShsFegid8UkpVjqNjmjyp",
  "key19": "2NEU7wbjS13gAD7UZcXi6FFiWPSVBnxtQQJ8dNkMgjR7EhGAPoqAbsqhkdED7MDFADUDyQKRKoKYSoJVKRgDKWDQ",
  "key20": "3wU2X8quJ5WtJKD8Lf7KfEdcMPGjYrv4CEXCJMRysujGQ1otzeusUuoepFxaXWn5kHcY3u7pdCig99PxSKftgSPU",
  "key21": "4paKSypjq4BzrGySxefK1YtDaYjGzSpihEVNTm2oVQFav46hTG4nrJB4P6j5oLmpA4xgZTxcjZSzH9YviHePGfnE",
  "key22": "66wGMKHvUEGqWWBhUMZVvytp5c4ZREYM9BY9ivBbcfpMiga6m2QJ7SAcnwTSxJRA5RhwV3t83GoBSWDhf9ux7QzF",
  "key23": "4AxpoHFnCdMVZdtXkavfDeaAUTuQ2xyCpveJEtSTB8s5bNuSTNzudMVbAWudtArumR1zQ3Uw4yci9nL3FyJnDG1K",
  "key24": "3S4XntRLdrv2f38BkHn4xgnCVJdKv6v4vfuGBhAJgjkQwp7Mbk9EZcYWp7dcXaTDC7BhDn47NLrxWydgfoZhf19c",
  "key25": "5KW9pr5RA5y8Xy7y5dchLotw3PLE7RDQTpCNfLCx3o8829QZe7fn7HHTfzakigyMJHYHFJ46UpbZNxwfjqNJaH1g",
  "key26": "Dp6cuWPCAZo2hfcjcVkds6Znmgf8rkMGqR8k3Ur4otB2BgenjybdkBTXs5E4oArfuiPuVv2j2guQXbrUnqVqMZE"
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
