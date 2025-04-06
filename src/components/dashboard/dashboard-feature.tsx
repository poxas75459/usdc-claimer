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
    "3yFGkRqXJsvk7UqWEv664gLKHteJmpUEjyaw8JZnnbKKaFGQBQ9NkcoSTiWdHZCnVS5yzmxdE2KNBD5j5ho8kXc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7r3gPFz1DQPWtyenzj2U12khzZrK1WsnJTkkKUaAiDDsWvjGY8wH1p3dUVoU7n4Wm7JWd2vAuQ1e75kCc3C9KP",
  "key1": "j8k6Dgvv9Dn5vvDuFL8FCacLr5xTgozRUFtZWjH3NDdAxB1WVtGnEeiYqybpnV1pKXN32ZBbksGsStS3Li6FZFu",
  "key2": "4Jq74m1cKv9eGpPXJDY2Sy8ZYF8CAGDGr7jbN1RykjveNXEiwfnLtheMCjtLbMJqV1qcCdvFaZiPs2hxQQ9sKiaN",
  "key3": "4fZfaqTJuJ8YkcBkfW51kaGG2yVCN2wXi8mBEJFQ4XHQpSCJ3AgYnVK1nfVEHMmfvHvtLySDoD7vpgvFNzNuDMVe",
  "key4": "4Ndy5cNaSP5avYHgwUvfVswNsyRjZD8yCLj4ofR3mtf69vFMALxBDS5TZbE4U4VNWZYWhrB2GZNtEVATxzs9ce2h",
  "key5": "57P6YRsS5dUgEEVTWLDHSvzLYY5DfjZ9Wxv9eV2bdpUtBBxQ3pHhYTCf3tb7RHRMGMHVvPeEr827FSxD3QxBBKZM",
  "key6": "5LYwA11iM134NwsYczTLzN1FBycJmUmMq5s4F3wmAx7JHhG4nYsd5AiHTZrSrsvMgPUdLQSMa564eSyHhHntKbkZ",
  "key7": "AuEnkUCMbbj6YnDe99hrsiiFBtPWTJEgQMBvu5WY54sRKmRziovBXce9sYU8JYWioJYyFRfqRGwhmsM8udEy6Rc",
  "key8": "5HPrT1AuypeaiMFNXHLAoyKXHJsqEeY9AjNCn6e7xvhR567Z9jAsnKsS9hvV48oGxHYN4qrxQKWv8vAhkX7DiWFt",
  "key9": "4v4QPNJUj2J3Vwzx8ehMZy1MnL3tvvbkKaikXwXJUX1VzvkANtFqomxyCZMRjABnj1w3B2xwa9BnLfA1xUPsh2eb",
  "key10": "3mKXPWsDqnY43F9xrvqtycEMesRDKri5BjzbPy2okiwKp88jBrAs53RypQLfjnnXxHFkV8dDDX7sCu6NEu9UGJNq",
  "key11": "2eVPs3LAnzhCpxgT53XejsyxPXyZU9YMDvSqU6tFkm6n66cy2f9TDsNGHCkeDNB6jQaHMzz1mZ12mCYdVQnFEtXu",
  "key12": "3pCp1ztKNwK4gv312LDwCE8h2Mb8NpqbovHYnbuKobbAM6QytQdWiZXsbG2THyZGZV9aiNtX62jwSq2RUMefsWzD",
  "key13": "3qrzPj7uJQ7fsXngW5hPXeeRmQrXYUTxXWy35ZqjQjRtNMgiYZd2XcjhxpQEXf6dQrhfeLhofYT1jwTv2DmRtdje",
  "key14": "5VNsTu7hFfUcs9u8nbtu8HFDVkP1UNV126Q385DEy8gJBaK1xuoXHdg56q9TyZpiwzSBP92qeHqvnEWDXyfWaotc",
  "key15": "2Mka6wRxiP4MQVy2TH3PgYcNrAE3P2DMGfPQQZtAZkbeedj8TaP1rAmsXYqYRbLjEEjyqnLnv5jCFphmY1zjAQyB",
  "key16": "6dY49R6S9HvTbjY9BgGg1rvrk7X5n5dm2ye9m11WpoV6Sd1Rv2tUZhD28BgwWnGQVSrxQczFtg4cNJbepSdH6zd",
  "key17": "4xMwaBW2nVrJgsdNcabeA5Tv6VYZ8ckZp5CDbQDVXoFEBSExB93yt1hE9oY1Woo7gJCTkZewt5b3duooX7XTWYFy",
  "key18": "4wBnKiwKpU43anapo9f2qR1P6fb3FpDUAgJubopU1RJ8cwkaYaYCkQvBJZX7g6ZrWgG5AxQmHAm4C1vfVQkDqPWK",
  "key19": "4AN9AUVaSLUdTuKYSojS6yms2VsoX7wRxwBgLoq1NFk2srVs7axNW1LeB7oh7nDx1Bbj6AHwCWZ5Fugc2EriCS6s",
  "key20": "5PCVdrRSX9NobZUimJXDksan6RBNKNBsRZ8vqhn3hghvMMVwVpbVkMjRedmvjUxXowKWHhiKgRSMcrnn1Uk5WigD",
  "key21": "4Spu3LRcn2mmhKtF9zPnzBxDrfFLzMaronXUCh7Lj9BnsFVGRmgDZxy6szUQ31gafxjDf1QVjNUMwfZREWq42SWH",
  "key22": "3mQVmNLhfvAWUHdREAYYhztVy4nBRYWAjSHT2PC6fvdrGTbCWLXRXmLX7wdGHBv3Sco4R8YKBbr3tZngSvHky7z3",
  "key23": "dk36jKZ19urJXhxNvYLDESMRbvxxSHvQ55FYxKFavefywYr6JjNgLw1voMfdmaE5jHsWmcF7L8dd3yM56dvPof6",
  "key24": "4KqdyUGAccB4FvptgYUNwYHKm3Lvd6MnKJ58EUx8JsKUy4eskUvwiGyTuoErLKjnHz6n5XxYmKDCGfb3RREgrBrh",
  "key25": "4Kd7M1cEfgWtnHXPitZTbNjLByVDmV3XjRAKYJJWybMGGWzgp54qRRrVFCYL6hGsAFKNmsDdKFsfJWswV8pCU6DX",
  "key26": "3y6P15vDkM4Ee9cDARturpmkudVcs9TrubBHdBdYnY3dXpuAJBCivPQZbfWuGWxTaNgAs8sktLDZcxcfVy3Yyhg7",
  "key27": "2q2rA9LwDA6uiNyU7RmYuaMXmm59yyRK79ZRB2stXCUP7vske4pBetWxj19aXgBh97y8ZxBnmkgcgS9VWbegkZa1",
  "key28": "8t4ggKEiAqUSD6hArd19P6Mbs8RHqaMyiwM7pmETBKCsAGox9ku5364RekPKpTzhWbViCvbajMGWjboMvsiaTmv",
  "key29": "37xqAZ8PtLVodk7kvsQG3CTUYoUQkFXws4iD2mWgkvBEqKnmnr5hRF8dSZDPmu2AH1xWjV56mULXuUtJmX1zcngN",
  "key30": "3LfcCdjjd35cUJLtsPmFs5ozp7NUHqRCEzruWnGF9wDeFrtDwbbguQmQNeb5zkgfCz7MomdEYLczKhAPvL4KmAkA",
  "key31": "5WCKjeEDy8NbLs5YGD5Ziy6psVosnMY15LZn8LDdGBBbLdoJNFfEzi5EKMgrXMgyw67T3iBVavbutCzehj35XEdZ",
  "key32": "3xmQLFhgXzzu67qPEMiv2w9WKmCSZbMXaNtct8hfH4cstwUdrP8EUhPoPfpow2NbfSSrVi9ePh9VWrXWgevAfVVc",
  "key33": "3Aa6CvLhQhhTira2BAEj4RDvjo314e1RbwtTC8hmHhBN7G9LKVa1XwXwVM1DTsaZX1fUeudPzUX7FCv4TRuBe44N",
  "key34": "5vM8XioG7Co2AXRwnyPsdsJaLShrKQqJXhZDQR6aZPCq3QGvA5wUCRQNQGzAuodZLzrdHqvRfNZmPVptgjEeVsQC",
  "key35": "4jigqWX7d18Tj2eCdgdzk4cjjJWWxTkRdFhpxfmS6huSvGn2u8RhhDNX78fg2sZ2i6DWF5kPdmBWboaxWJg28wps",
  "key36": "121rYF7x7a6EJHddAdjNVSpYxAHe9TtqA9P4iNQzQn31gfkP5546jJ6xResxnoPaLtnTUXNNRZnoF6kGh4oFSEvn",
  "key37": "4k1FsyxWZ6fHLzzoAsoy2eCSBZt5K14WER4UnedgAoWGsfh4ypNUPF6jaHMrdGtgDSnJ5YJApLFiaBu5cTbvQzVp",
  "key38": "4S3z4oG2216RypjcXVYF2dzHH3nd184MjhB3ggdeLrLEcasoSQJA5PkHmU94FQSyob5BQrd1XHEaiqqkwJskTMxP",
  "key39": "4ajKNeav1dfgM7LDtk1YxUUzHBon3uAmfnres6JeR71m8QbuiYSzaRUGaQpk35DmmE2cGdJ47zEhX59Jdthiy85C",
  "key40": "3ggch868samVRTA96UXQS9viDP2eVBSqzvZHXNw7innHnkoLuWNbM8XhyB1vAbAMkpfr48PYaqKk8bw3moGSEyyB"
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
