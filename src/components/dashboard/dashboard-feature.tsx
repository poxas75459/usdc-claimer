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
    "5vo48gRQaojE84HxhqP4mViaR5YyoChLS4qgVhKaoMcUcP8mTscExPPGJJhrrXgWhYo3s1vyNMEFWpRvSEnm8F8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NFMFtQbVMMeee3vGft1e1kMXTjX4khTHHEPMAXXf6oJ1Gbqnwk7QjGdYN6FiZiQAffjLSW669SqNi47G8iKBHZ",
  "key1": "46KMXAWPU1X8zcHDA7dJj4BrFdLcRjMnheNXDh8k8MoerEx6pMdJDM5Yz3h1Roj35B9EcTtesaurKDfrsvrGyHDj",
  "key2": "2pQEE9mDVZpveATrDA8hy6DX3VVY1i96ojxRzR2989hFk5RSFWtoXwzHc6VJ8uvU2k6gfXFQSTFF9wNKvdUWd8Jx",
  "key3": "2oxLB5ZJutUMmEdtehBcpzNSzxaMTiAEtMZnAQMVhCvEfPuYMW7wfzr5vh5XhztH9QrvmQSt56qj787YXLcxUeXm",
  "key4": "5sofBWVhXkcmmzT8LkHrfDmuXMCXEgkPtSi2z2SmjLNRpiFX83UdH7C8iBNmGLDjuFFJonZ8V5FMV37kwBttYCdk",
  "key5": "LkenBP1mb7njKr3KMh8KBakSVaAPiWYqijGrhDEKybarukjV5U2GrQMDYG5T1fCedYdpW7awqG6bCMNRc19ZMun",
  "key6": "RTov9Hvf5irm4oMyEa884J9QGyPLNH3EfuMt5rorFwuXFree4C24YpcvNTQgC4cdDmrcR2agQCau8wd684eBxtF",
  "key7": "4ii4Tc8smZ47hmzEXXXginBa8Y8wM6oqpMfU4FME98H5E4uADeTYjSnJBZGsMHzWPXC1fFFmvTYUMy5TTLCVk7hc",
  "key8": "4CT6neuYiVrrYh7bAsZkEKjQEK2sCYast4ARy1zccaADUSBYinGcykxzSDf727rx4Ee4ThQnfei5yfZXpcJRgxDW",
  "key9": "W7K59jgjV4C1QCaXowUsA8QDMBATYFAcN9K6vrPYtshCrhUdXPDV4NgkrjBrDuS9y2JsxjKxPPH967kRCzVoyqn",
  "key10": "5vPEuMzaqgptBcKTaG75X7SnD5Zaqu17soqM5yLCm5zLqmncX7pMX3d8MKLg2QorAJue1L72HsNqVDUQgRG2aLVb",
  "key11": "5XbbLciF54bNraL2NdYgdUnETHd5odbTkpv2e9kMrhYkp9haK5JXNoAAAyw3tYb4jzL2eUsMQkbzFvehWTeLA7af",
  "key12": "oYG6H1zq17TAL1JbKRosGEs58StREPxviU3PVYQ6n8uCyxCwexaXggQdZ19agPq6rRGG5Scc8GDZw6EBvftnf8a",
  "key13": "hYqWzT1VJqxFXVUR4LH21J6sT1MU6D6nrPmfYnyvpxsDnXBxNiBaX1VqiCj5UkjypxqdPDriLQHnpM5cGnN3Zcf",
  "key14": "frVZLJJQydaRyx7N51D2dKnHH8MnLVELUYCqoDyuhFP4otqFCE4digqQogB9DKhT7j19rGVSmBzMdiiFiJrCABC",
  "key15": "5tEh49vz2XnuVV1qKXC2XAAVcJKBQwem4Qa2n1Qo1TfpmqoBT4ZTUz3Vb5ESCNRXTzxzpCV31eNtXm6XM3mwQ1dC",
  "key16": "5B3h9yeLHiDEi91WmCrdr9d18YrNnyyUTrBnr2xm9gdRLeryuMHsRNDZ3NkMxQNFWZp7Wx8gDjmKh1VMQ26SK8Bm",
  "key17": "2sM9gtke4nDagboqgbKBc1waUdNTpwyUF9xY2Wu8YPPGCQ82fBixS1M2EDsBKgtZWFGHUZ5edf2vGL5U4Qmr9Xu5",
  "key18": "5oyCxByBtxHifT6qAFAe48EXgBN5StgVQRtwB8RFGjdt77cfxQSmYeLXimM5n9Th3pgRQ3NW6X1FeNjq36va3Fxu",
  "key19": "4TMB7mN2TY4nfZC1GWgt8Tn1VR8tx48UGe8fDm55DbxTmoTG9dEJ4UyTpPYNzA6i61GeaZxgUPPkdb1ij41F1huU",
  "key20": "2jVySZNX823gKMTRdTMq7RKu2gzrYTB7APC6U8dkUoKCsUsr7V8ozHhwW24bM1gYzvxymmFoYoqMLWWgppR2GDDx",
  "key21": "5HNdvf5iKjLGSDwpHzAfMQo3XUiGdfoMhKT2uhYBj9y7hkBW8L54PHnB1WmYMdpU9bNqfb4tcm4wkw5MH2hbpeuF",
  "key22": "3d8tmz6VUzb1pvTpndDHSi8JPM7qaw17oE9BTtgGa3Buc32E99EuFa2QBrLtqv8D6UV2kBNHDNu68uFNsHEUa31E",
  "key23": "5DraLpEHmgQ56FbZCP1TKAQkPaFwoVAyBEhq37cx2DSdHC1VXrrvkZakoqgTy9fARafka3oGPc1hMtVvPJqsHPRt",
  "key24": "4VxugjhAdVso1yY2jZgqno3pD1yxku13ccpurHDEdBq5dToruX8Zr3Fn1V2RN16iDvsBDsXHHXUbSQ7dpDy344t7",
  "key25": "2CyQEpuUcQyZCkrL7DHMAFax2rfbtfYK2fyGtXkhft79sztmyYXa9cpu936hVDX7NEegSYcAsecLfCCCmj7ipBKG",
  "key26": "4yAtomUuDbX43oqLBxZAhHDG986ombJ2G9jtdr8yr6LCrnG7eN9RpQjQ9u3pnHyMzSFjydDdmNxTWKT3a16bJ72q",
  "key27": "5ezZzLtCcMCj68BRhhSLfzBrd9PWJJwtHwhmMYPZQS4A6ywJqQmALqDExhUmur1JRJ9HBzaKTwytp8jjaqvpxoV6"
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
