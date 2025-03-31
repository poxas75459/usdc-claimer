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
    "35qjzN3rvXBz3CVnHTaX7Ras8gnpWvV386PNxyuJKBxdFVZZ1Ago1W8w8Vjbyz6aqMQU66GeHEehxFwMQMC9shiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLUaGmbYGHva9tCoNgDoLerBNH8icpBqxNYAHsBGzDuJED4V7SKLKZJMKxMy8YwfdeM1utQtoCNy8WQK58y76HK",
  "key1": "3sTi168F4aowVSVdkvhAtuMvUg245sRYMshBp9tbg575nrFyiwzCmMpHk4pzUhSyDsptELCZfQuqbu5bz7Tvyxck",
  "key2": "gDWtBgS5g114E9ec7AXG9TyDjxkANG8DpFrQVn5stHwYGE5VHZQTCNFs7r9EB8QtYiqPzkt6rQSA4oW5pqFpqMM",
  "key3": "483yFEYYk56sAfppm7wyuNRL8kMRjjq8Kiyu5LzRjqqKrTowhgkv8kNCKaLnyWYAVQb8t9L1acxJPoNbWU4wymfF",
  "key4": "5sS4NJhzvZ2N5U2dkxYvRbKP7DwThYkLKaSwuRqUMpRRxMw4qzAPMP7WyqFMwAQHxPqeg6mR7r2uaLBQxCVhCtGJ",
  "key5": "MzfUkAPcBh9PCoBTomkrnrZ3d9SSptqsGAjQ25xeFpLBKtx4DWgrasfFf2PJ8WFBLTJ5yCRhRA6Z18eypNnEN4r",
  "key6": "3HNM2PjMUWc1MdbEEYqfiv4BEFsy5GNTAPzi1kWbEhH55eKUdWsBSVodboGtFzRw7d9uZ6DpF55ptHaZASP7kTrY",
  "key7": "Ew6Sv9Da7wwr9uJ5Kth35tLeAaFAvqLfUKJrfhcHKBu8CtDRWCVkDL9rVQzEpc8QkaSkKMojsPZfJa1iStAieXH",
  "key8": "3G1SuWJsDfnDgF1PgPQ1SswZZSwuLNc1nqmgFrTFSk15kWc6L1W8oeJPxzp35fh8PXzPGa2fAqyA2qDPzPav2DDn",
  "key9": "5FQVa2eqnD7wmr1u7b2PK6DedzX49cYzkrfBxnpv2y9HTqutZG4CgjGcJ3QKjGqXJd7VUNTSHNtgPUXRTt7Vk9GR",
  "key10": "3NwcQzMErrfzMSHeerbGqE56Eno39zpdnKM2qRKf4vbHgKSUUg2upuXNGHZUhA5apeVV492fK3SUjXobNbWaSC8F",
  "key11": "3W9horfW4WsJesEU7WGKuYEDt5y9ivftDZTUwcAbESzNjrzJsrQoEXT5RZqBetaAPJez7DcitxY7CEa9FYgPPHzp",
  "key12": "5UNqJiKL98qWTcFgWFJtZdoYVYW2HjtxhjTht5d45vm6S4s6CGjX6RiqNMNFqQN3d32LGUkkL4TERm56sYKFjZ6J",
  "key13": "5wYnRsSqFWEPaTk2rUvH9SDKFyHjLmwa7E1rZzRTvsDDQMniMVjoUk1cgLxfG2FRqNzyfCrrMBt4qSEdh7aeuKfk",
  "key14": "3Y6sm7UR9Z8qMy3ELkXE9VtjCw7JF8PQyKWhf5UZjhXbRMg8N2u8mXbJjr4wVDhUaBxQvUx8Mj1gTJqZSjDZWwA3",
  "key15": "4orcHgTdZjerv6bsKYuWr5sjF7CbjZ878owhWU78KCyzQZ5WHcLYdzPix3r1J2D932jni3Hfg6iY43vQ6mNMvnVJ",
  "key16": "31gF8nv8dQRHLfYqzEJn76gkWccjEb7pR5RvHK7MVjLDfHMi4f5EYe7rSHGafU2bPkarg5Yvk7YgX3mBzPytuCte",
  "key17": "4prmZghefgRraSTzG3zkhFbLcYWPJ1YtFLn5VTmjCzdgQhrqJc2zaUng7zz6Ea6Pcqd95HifeXPkq7VfSNaGqNHn",
  "key18": "3HFzmWcLyryEpcD8p4DfandTB5dcP46r4Ykgxt9vdrCyFJP5YP3NrBieUY8sYjXFth6suiyHdH4NJYDYBj3n13kG",
  "key19": "2YTZiEUsrnyMMmDnqjiGFnDH7hUbpAVmBWpu8hCecrd2fTVVDFUnztsPnJyg3gbAjHUu98pSGS6vG4ruxJyZFESy",
  "key20": "fJLFLfE3r7DfPXGGNmeoz2KnniYftbFxn38oowUzW4XQMbxdfUFaGQ5UMKvzqhvmyUVjY3mJThYSEAW4KrUEEqg",
  "key21": "4WaGFm55J7x6zMEdhRFNMorfZo4CC952gVhg7MVDcMVrEnY1ciY2pAFGTSuZLcetrH9Muk2RfgEUaV6NFx4y5gyX",
  "key22": "V4dMj2JUEjPCgem5bRdMyU3RgfVbND736UgQ7iJh4w9d77qxTkdmFLxnd9XXyjASev6R4TwCWMa7Miz4kDp8yVv",
  "key23": "rmbRRWF9px77Vu9Q2MxJbMoTM5wx2ybXq7YpPAVQNfTyHtS35n7tQeTLF6bn6Mp3uuYro2tK8eF8N4Bs9A9Gr9E",
  "key24": "2a8fFdF4JgLrFebUhimvnLkkHM9PRco3LjLUvBHBpL9mp7kNLRTcL9dbbXtndArHuDmv9nhGngNU7Rfkj6K8rmNS",
  "key25": "4upbYzrKR19ATimzJQcZJiAsghg9QGmfMgw395SVGLJ2ssGGE4YSDT2jmsPaZAnMFatU24kmcSKssCTFoVVZgbw3",
  "key26": "53Z939wXFdWhXoqryAi2fqRMEAGHtR1QWjH7pnE8nUkffSB164x8JjTokEkYBDXV4tSTTLF75bxpyVACx4bkG75X",
  "key27": "2JAoRKu3iHE4uy1V5WyBa2mJidH7yeQzC4QJ4j8VU2W9uHhzQdiveTZZ6njpmMRXwUcaM1ej4nfe8pEPU1vFbQDT",
  "key28": "3K9NGQxrsJAEF8i6p76eQNCLVHXKrYUQECF5xmfs5EnYwWhZh64hByw84tcgg7GiFCTknzqjnD8qhwMymQNdhi8m",
  "key29": "4gLz5yu1DCzftNtmGyLVw3u5cFe2WCyQwT1t8g2Cm3kHkp7mY3A9qVbKB28PGWFx7PeshY17TU6BsqHSTan4uDQd",
  "key30": "2QitD4dh1QeT8QVUn5aNhQcYGeJsroUZVA1vdTY3a7zbfBcVraThxDKZrN8R3K7CEuWn1GvdutpkGWbbJUrsncra",
  "key31": "41rFBPWaU1FUCtNbRgWdRbiVhRD4yeXkpphsm7wGbFBnjKA7CtdXzDS65ZZgKEC9dhx2J3H8X1doanCmShQ72sqG",
  "key32": "5SErvpkpSjywzWhtFhNFMPcdhG9tp2JbVvBGSmhrL42gaZfLUcMgPG7F9JchcdCjV4sApsfwDsQ4kjSqf6b19MaS"
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
