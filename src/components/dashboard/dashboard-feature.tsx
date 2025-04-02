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
    "2AQNeHpJBJ6ao6spLtepskTcx9Kh1XYBECx6fPV1kqzfdVwSfmPjyozBhmiUHqTejsQpYuGGyjztEpy61GMTFFMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RckN5sK7P2xg7AP1Ai3VRUD7e9Ak99jN2oYfF1Z9NLETCPBHU91BhtCd24DXQKPsZteh8Q1uHXMP6kPVgXdRTHP",
  "key1": "63p4Mz1b55iVrDbH26tFVoE7FvhpieYhhXuczhWbB1o1DePNtJQpuDkqtQb7Lx4hZNBneLYSgnh8Ldct25Zaomca",
  "key2": "3niVzcDVD99yEGw6zMt9c7FVxBpDH6ZnHVKg2bd1EjcWX28Tjw3MBrUgAKSCrfHP4mSWG2HJcSPRroBDVS3a6RLg",
  "key3": "21wG8ghMgvtNkGLQLMoRjCTXWgd5bWFBpPBwhAoCRmrT66HUipB9eQvqAWw9LUPpKS3XihiAR3HWzTSiUa2eq47u",
  "key4": "39UwoYA92n9PkwyLckZTc4P8Zp8bLRAsyXLKULD9WZ2N2xK39d8uCBAQpRG7pDTYGt1NYECVNaELVBLGRiG4ULjr",
  "key5": "4FdyHC2e73Ac1B4K4SeefrpgfnRbbRH3mWmctweKArAteD2TJ5zEa6QJqouLoNenoLzYXdPxWCTk3eFzChbcVFCj",
  "key6": "5CrHc1yeZqcXmskRjhaSydWAEmAffPyXuupLD8ugmLM4yQMebokuHB5Z1RYb7cG8ogoTSF3dM734dsZDtkw1WsDY",
  "key7": "Gjs1fvdT4oEjChUMMdpDaxMfVYwKVzHw3NYKCntQdsWJhKgmTb27mxH4uhKyYZBZXWJjPbsuChPP1X8RF7cuX8P",
  "key8": "CiBy5UUpXMizx6JKpz1SuEwu9hVcveyoFGgnPofNCTtSggu9BMQ4USUCPuouocM3ArgvH319MZRGMbrtXKFXuiV",
  "key9": "5KjGX6tBUQYGowqve8YHZi4DhKPaeFhud8MT5rMVbpPVYWFCJHx3XNqGrKdZnJjVbrjQQgCy9PerAmKQsyLc1PX4",
  "key10": "2nHx2GfXVnfczE8dq9r9yiKinwWpvyYWFUMwmrUD2rXqwFrzgfvrBL7uGsmF1iMshu83DYsr9FqGp2Bki8zkjUuc",
  "key11": "FwXJatVVPFseH4LvhdxUKitm1p43WKUTkH596X4eZ3mwt1bsBfE7u1JAt6bu2rs7WAqyHD4SRJyJiT89zrQ1Xm2",
  "key12": "3mTEYSFAmQiaZwErfa2vFs29VYrRD1vmbXC16hiEBPcQttW66eYGG6r98eQL5Bx7NJcUk3GthnK3dPcoWG3DNuYx",
  "key13": "25nokKLhFw9Fupim1bLcnNVi6kNFsZaRDeM8GerQAtAK7jsixZTWrZ3u9oX1FNAi41XwLwfG2WqXwQuy12gcCoSd",
  "key14": "43Ysq6jqyRtzr9uzkQ1MBhGwKJAez1zfsV69Rp8Uw28XBVLSM4t1JpCRQEcmLvzhXFAxM9Qt7Q5oMa1cXLZseH5X",
  "key15": "3VVjvxqmmgb9P8Jm89g1Uuws1dMmGtQz4DR9n7usjhSAhYdY15sLYk1g7F9P8LyAdf51jXiztiq3tyW2fxB34N7G",
  "key16": "ZqrHJJm8KccCSEDHQtCAYbC8kzFV62typQ6zmxKu2UpnVZ3s241n9wnNh4HFZpuziSHPxsY4g75H2GLf69xGBeY",
  "key17": "3ZrA3tN6pYMmkKHrkKefkXmSe3kgXD8HBFp2DLG3hzBwWnyiwrRiQrRhrHTqe9fLmbzX9VrW97etAnKRDfPJqRnT",
  "key18": "3LDymAXEpGdhsSvWs1XGv7L3YAHi8GJrLH9Ks5jDo9Rdmcs1z6NHwqsFJEUwFhv73HjPWd7NJytXPP2mC69vFHCh",
  "key19": "5vEQCDPhWHLucRF8ib864fLL957wvAp1EQFXCyqZvR8yivfj57bEJMdgCXi1ouexjuC1mS3Fho8UTgRrQTbNFgm3",
  "key20": "4ySkuH84yHR5yZesutiq6YNq9KdT32irK7boy3ikNRpNL6xm159ndAybSquziv8G7H6Ek6pcJd5e5ABHNB3HyhoD",
  "key21": "UbtciY7rxHoPm99ELvJggNTVe2hWwy7qk6FJckRoEtkFKu9x5KfT1geaoCfoFyRpobBCCTaYxBhMM6e4WgWT8WX",
  "key22": "3tQCP56daskN8rLhUQsnSUTnAkF4EfBuzTQw37dEz8QMpHzTyeocjQPA8ZntLpuPULxBPJcy4kZGaTsT52uEAs6",
  "key23": "3sZrdGZ5N64RhnXYwystYn5HTDzK3o5oDh7ZMEzecsKoXqRwW8yQaCAoTuZMyZGqYQJdRrZmEgdVSd9pSzPoegpD",
  "key24": "5ocj3GKfvxyhV7JYTisrGRKgctGcVNdA9X3CLK4QzrjvLtzCPNQrFDVxZpLhjmAKLgcnxJ6ZJmR3xvbAff1VgmYr",
  "key25": "2drMYefMgPvdELKRoJ11ZRG8LyrBkGy8aPod9yHiekfhic7oTDXB7zBaDW4hw2E7E16LF3Pk3m5MwJ5PhdSB3eHy",
  "key26": "2hwvbs8G8Arr3F6YnTU8vefWg5QL2Hhx9ahqhVpJcFioVvh7gsF8dmYVtFxYztJjcMuuevLEK95TwhZ4ZKcmQEVa",
  "key27": "kTtZXzBQkwBr4k69BrpxBcsY9kkLbsefeYUP2YWD4NmDV7Q58vjYP9b2BL3JVjHCp6Q2YGjmKN3g3yUiRGa8Qjg",
  "key28": "2XomtRf9PkBEEWnNFQAL56yBwPRybjLdBgGEKqLJJ7JtauE4tjaqjkwfbQ7CPGhqZ6DEqJyxP9MmLAs9CanRsH33",
  "key29": "4rmFTeCELNUHaPAhMdYo2xH6CNzwnMQpiGmA3of25Nxjy3MHDdo3ayVUnthizgmfwoozpri1MwPwTtxNaRfisugU",
  "key30": "2LQ9yzGHrVqo7iCWBvFNi31Sh72qyL6BcznQ4f6GG8F9nqjTF5bCfWqRaZcRBff6Vxn1PnDduk9t4Ba69GKfrCbY",
  "key31": "3DisBVRF4fJtdYYZ2LRY9xoY4koP3oLdG3ZswZNZ5N1GHboCo9yiuPnfcFktjDXa2xGGxCGCFQwMY2wY66GLthvf",
  "key32": "5UjBvsLwRUvfRH3kemAa8N8eEzXvzdCKXQcU6Rcvev3xtazKZ8TMToA2rGJyM86ST51k4pH3Xn13tkdip6gc8Uqt",
  "key33": "GJTfNsMPDbZc12r5wac9w5bfjvxntDsPn1phGgxdG2FmbAESjymZ35cD4rX1sttDRtYrUjTcQPZpJCKjuv4PszK",
  "key34": "3x2PF1Hwz9sCG3FzeWkN1Km1cUbnNnSzrvNbbYZ4UUtWyYNLuRVfpYYW7F9jih7HsfGFBkKQDhWfEFAwvq9mgC8n"
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
