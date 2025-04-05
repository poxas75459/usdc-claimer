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
    "5Y4sZjL45qhXbqMFQmdZivze64xKNXkz5pjpUco5Wm2jbf2bJpvgftND8GTsqypfJt1LPE3UYN6S7FgaZ1tFzrAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YF2kiAYUyEFFExsykPSbcfPbtvbLvnyNY31QfrCPxZ4wNstNmBVKTRGXMaPXueJ1KDmhpWf4HKFzmaRkN9FCkX5",
  "key1": "sSMFRXnACSSF2fNAptuyDiUmnH1HcnngrmtkBtBCnp3AjvBPYxqGk1LyvASHQPEwBG63XNHGhoxe67PMQkK4oDk",
  "key2": "4jCGyCpS85B6435CPAreNsbtJee1CFwgKKxgTUsCndBwfRTbrCzq53HsXKGDvD4cWjKcnoQtV4Wu26nXumXejyUN",
  "key3": "3NUAaszhfEd4vd6fk1dWH2uEGQ1FaSvc19CxaRwkKrgHZkVFk5f4yHwRrSSqqGFDjKu7b6Yt7T496pJTGZfrXuoj",
  "key4": "2M7nMq86XTTq1F2tc1PwpfGkLVj9eg7udCYUCJEELi8cdXwfkRKGgRLpB1REwQSeKGacGg3Fe7CKGdNoVMNFbLK6",
  "key5": "3tYwey3xrzvrZ6wudVXNjifDBUtsYBX3WQz79yvebRWUmoLce7yXtVCGtGAodZgrKFo2A9i7N2CwqRmPHxyUstSA",
  "key6": "4tA2zFvWrdhM7H8x6y7VvFMJNauLV4wxFVgg1cLT6TVyrRv6MwJ4oaNXT711F77Cg7gYBuo67mtcbqbbB5247fE8",
  "key7": "4NHorrRqds4kFb8kYtLQEFDUMZdbgv3nW3jjocAdYFdkhTJg16pVkjKXdP4zogLs6WMrwfjQ2VtAgNnDPnnn26aF",
  "key8": "2rJ7rm4jWThsKDUK6iu5bUoqA4JTCX4WNhF5ZgLrdjdZLVAid79Atgrxjq4AdJey5KeJ4DVoDdYCAhnSmfZFqo4M",
  "key9": "2c5Brczn2EWzdh3nkRf1xX2gkHYn1m2xRD45WJpZPwVWnfYhy4M1XQZQJfHAQXXiLwdeQV3MGdp816B5WpvBzWv6",
  "key10": "5TupA3yDAF3ZuMNv28BhrfMBxJK8mmwc1EN6wp18558dW4gnjRDeuEFpzRYtXKFtVBsyCx9GpdmDy4S9bTt1W1jM",
  "key11": "3W4yGHYM2oE49jJikUyb1miSx1PE7TD1P65zeZ9fpyrKy423VAEedK5gA87HZqeyDqeJzUpcTDFQzmXBh8AU8bL",
  "key12": "5JQGW97HSVVf36NRtxw5ZjevdcnGAv751a8mzMq14vDxqadpqMpkxQaMM21afDTjphDacRnSd4Pwwh3SDMsyF7hL",
  "key13": "3X27pJL7nENPwaY5oMFEbJcWVZdGJNpiEfHNdVNegRtk5i9eML5VfLKMSfqzci5sjEMvorCj9QV2VthQyHYHWwRv",
  "key14": "2U1uEQtT8FRAVKcaeah37JQGWAgfroWYCCWpFrBg5CTZeH7vFYVZahtiyeb7M9UUaazdHWgm3eC7JvSibbocbCsP",
  "key15": "4H8419m8wf8oD9Z6q8iEhtovG3Sg9kKFCQp6x9T51N7XRk86EMiB8rYJMYXCV4EWgwiHCub5GE6EVXjDnncoiMcA",
  "key16": "597zbwkeQJN7jb3hnNKhtL7DfJmyMdp8P8KKLZ1tsTAqB6XiiiEqdh9MwuRVN8ciSCVobWtDD9Ets921NZssGwp5",
  "key17": "5DSimAdjuMWbMtpxvdFnBe5ePJQNpKQFNoy9jxto6eXkA1nGW2imY7ZXEwePfMKcGSvLFU73Y32YN2AVKzxTDkdB",
  "key18": "53fcBdtRddXtVBc1UPcCbKE6MWzH1iurS18d1ifjgbwzde1XgNXb1EpSB23F3ySTjw4iP4zykJQyRjwkgHmMgmym",
  "key19": "2NN3tcqyHT5PpJn26LtcLpQfaTKbKAR7BDKWCFGNEdg4hAwuZ55RvbzhLmgPfApBhEWSBbjkjBkyC1rv138rSr9g",
  "key20": "2imrD2Udwg84gVNkPTJzZMkPSMTa4MroZWVgN5CJcMbuYBnVQKBeqdWWb7NAN1heVndgzCLTHqHKUbpAurBNy4Uw",
  "key21": "2J47Qr4449u97Mt28NzKK4VSRR6NAPYJb16wRKtEmFkwAnBGC5AM86fnpZGKmbMqHcAhw7eEH4LMkeCYoHCQqZQU",
  "key22": "4gaVXhzxKFXycViSVGUY6uPkreK4Bg9jGZpfL3EFJ7hCfffbLNwWoaCFXY4KPHQ4eA2vADqXEGAqzqFM1feq7u6G",
  "key23": "3mVHrRUGCegPightzQSwaeEcegvZPaU6UouoyLyDtRcqWvxX58BCqddBhYyqGGbMsUqLbX2wyKLPAJCEWNjbXHV4",
  "key24": "36n5nHNWFSLBPst9quxdWJwDLVD6mwP6xTHPRNfLaByS2BRN8238xfeq8TrFdc8dSAheAa7esjGcuQKxC7uc42S",
  "key25": "4ovHZUTJY9uwK4SepNAg28RwcEbw8mz5H6NDH1u3kwbLRM7nPzmoAzP7ZMCeQkj4ZFzmUMqipFyogdDYs4sQP1k",
  "key26": "3oKPfAAf5iWzEXU5rQX7jNfJDEmrthkC3p2KUcBZ3cQxDrx1PB8Qsc9bfjJLssydofGEKwyfLNpSom58CW8UceG1",
  "key27": "5DrFedJtHxZfXm7GUVHXMn84bnsnTPcdiFV5ASbstoXintDdrJCyyqHX4eonTH699DnSZojNritu4TnRQmj7mxe8"
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
