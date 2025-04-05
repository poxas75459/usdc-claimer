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
    "2vGCHGXV28Bw4G722uy8kCWZqQk715pDptfvxqjVRFecfRWQ9L6VLPDBacWSndGyWDGWyZXDprbrR3Ee2FcbbdLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDb7bsWVRPTmpkHKP1MUV8ZthMyocwiRBtwktyFngDg6CeeBhvp8JgHLqMj12p5EETc6Cqkt2e68Nivx5DMavB3",
  "key1": "5Kd2YwuZRCzj1j6uFQp7YGoM4NF7FRuCXzEmfbDrynRhj7hXP2S9CqJ7WMtrcxMdpPHLBWp7eRLm77TU7EMLhXfp",
  "key2": "jtTDA1czgibQbzpm3btvbVQqZ2Ty9STDC5BvxQPMkXcbjdhhmWRavAE3kXmvCzubDo7Abtj41wFLowJ7jwYkKJG",
  "key3": "2erg83eU2uPfSaSX3Yb5sKo7mDGUMCmN8PV2oJo7M73ozEL99CXeRZSMBCZEoigQyMauXz7iWbuJa9Biuff4bW5L",
  "key4": "4HLBDj917D3ZRULGLQ66L5pE512MTyMW4FmLdZrPVm789mXdJ6UNUDCua7qUn7ZBaivE9FpAAU8FBN5dpqKHJb4F",
  "key5": "3krDwKcdtqUyytDF3rgA4dEv9ehfLHSomBiGZ5h3ky2qNdTKEcDNP7FoiRzm9ep4fWvVgtrhqFgBFSpaXYtP4ndL",
  "key6": "3HVbvpet1SaYakFhKyA4EzAQjCSMzBCXcypnD46CzNoam9TYZiSKpAEvaRtvFLKBJi8BVh21UZc36kAwQVK3Csot",
  "key7": "2tu2Wu8sPk7CAu5oExBVF7h1t1LGjdbBtFdqXA3DaA8yUzrsiCWn776Z3xQi3ZWme6MjGwUibf9qgXcc9Jek75no",
  "key8": "66ZZiSgf7bqd36LnSqKzcABwWSsd4zavSpmiRVqXsodEwCbKXykY2fj5LHSnuifPX2KHuFrxdKA2i4GTq2QitURL",
  "key9": "5EWkm9XVsnBoRbJaShYovwjmtuT1dz6zyoMZWioKHAH1x7SfT4SkgGXqDz86vqUqrLp7pSDbFfdme4rJkPhsdQVQ",
  "key10": "5e1RLabmZK4WFSMx3V7PbcYNcUSDAu42VWM9yQaDnikVRCGSjjvD2pv19dC19C9jjoEYeqHN3bv3ZnUesqkLkm4s",
  "key11": "5s9CTwueJkt7ZHRZbPisJnXsKk6rkpRWwBxNV7uqY8zvAuPtvZaGbUMhSo1eLcK6J34ctanqgzagyRM4jpTEfQfW",
  "key12": "4JvU5C1YyoqvLu1quc5wAS7AgQoMyHPHA51QzZMTopav1zk4csidGSWwi6wenUZU5cgCXvbs7qVrjMTw8yWTMU82",
  "key13": "461PsULoh7m6XSmD3PAfTFEoJoQqc63oTmxCSdofkyEoH1StfMULgtA5kYqoNmamckcdiZUox7zBfiXYbpr6JvG2",
  "key14": "2R8BZTQPWsAC4AnCDwg5k9G5cUGv4qAyvuDWswH9A6chA8a69YZ1hkMVfTce4E56bRnyBScpd75GnD8UQpNgtMpT",
  "key15": "5oWwECntMirUmwCjp4rtk4YHPCdaXNihg84bZaJeDeNFLtMaRHaVZ4kY2V49Qua2PoSkJozZnZ55eMQpop1d867z",
  "key16": "3dz6WAH5nBqKWbzCF3AdXrojique2wrHeFP7WWg1x5NoGVsBxRk8DAVAJLRsVZLezNgaaY1k61x4kWqAZiUAfa1s",
  "key17": "qQfWPyCixfA3V7uFpXuDwh3E75Z6Sf1UwTJ94bLrGn1EqYdedhe2EMbTEJ98PSs3HQ13aErwTsbR6Sdk9JYKQLR",
  "key18": "3nbWLtt5wTkbueHWX9JRkhhVXAmm9TffaGA11m9hheC7DcMzrBHP4EHJQU5h4CQuRbqENcpJ9rKsae4Nzz4xKvey",
  "key19": "21izoUpRvfaVLYCvvNA6jzwLeP7G97zQqBrv9TdrJ3wD2dxnGdHe7YQUEAdexvDB46TqK9VuvAtVkWJT5ssiLCze",
  "key20": "3GF598FLFGXqBtX65EQQv7CVr7oenMSXwPDQoVNpzYEs1hUgABppaySuRb83C5cJobFQX5CGfLCzD8C57zWaVVit",
  "key21": "2PmbUPv7apzWVhtaMNkKSab74YKy8vkkkdQh4pBaewCRF7sdmKqMEE4CjeVyVtHR3WEtWnQX57wKC9fa7RzUV3pS",
  "key22": "2BkY7q57W7GghdPQVoFTPLZPuN3wJXWktUx5RisZU6Zzkggc32fVQjDSTDPTpnoKXX6b1NqoZT693Q9tUGfjZfjK",
  "key23": "2wQt2aM39DLtbLk3PWrTgWcrCtKVt3iGSK4RAdambVCFe3AXXUSmaioNdpfrUtmeunBDDpxMdSUGtQ8xDMEtRU6H",
  "key24": "4KNdrqy5Qgxk4qmd6iV8ZEUe663kXVRuM9SkJZWdUPRtMgbDPeFjLNoJLYAPfQUUNckiTHC2MA2opDuZc6XVsXVD",
  "key25": "3P3JfST558CjkjhhcS6NN66J8imfgFpQb2TdCufsSPVBNYbz1CnjtJHbNbJJjdE9xZxQ73ngziPGF1RSF7PNwXTy"
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
