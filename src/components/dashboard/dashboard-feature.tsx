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
    "8A7CqiZLG4e59yGHAfC7c7i44JJ2U7HMHoJW8erTMAbN17oxdabCMDM14pWAVoLwPxwhAeyLimnk28YQAaF6oWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2Vbcb428axRBmaqMKEoQK8mPPbvTErHmbYvs62x5deHkRp4M53kdsuf1n7UnxjppHEuwujh7nqXmr6mNAAJkWD",
  "key1": "p8X5ET4VND28Qoo3269rAvmUkuLQpyCWPC7ghFUm8LbmJrBtozDisfLRtvyzMiRaqAFrCPyy6G84maTqJG1di1W",
  "key2": "2jaa1P4gKRHw3XZpppUMjfqTtoQcpx1N8VAuAFSW21xLLQEmk6fJ5jfyJjYymCDzwnwAVYpNSBwVfV5VajvK9yNd",
  "key3": "2tjhrW4esTxNzr3qcm9cJiWxpWNuktgaM7mFepuSEoD437puHWH4DWqzN4w4r8GPnwhrFSN57GJFhwSsCZHwb4QJ",
  "key4": "5MZy1VX4yf89GdpoJTwHMoWajGRDCaf4PEPDStLqAzwRgNGgjnLe3h2VxxNBADcdcgySF1VrUVeKMN4xXXgnoEcV",
  "key5": "4YpbRDh9KihtDs5Fz7b61vki7CnYyuJRtBuXAihfCG7N6ToVenukmLSZ1oaVGTX6GwSmBHD3mq6Xbj9kQbgjg92e",
  "key6": "3Q3NZHQpGkGMNVtEw1se3SwZd9iLYsc55zLvT9UcU2gsqu8XeKS8jquKbRcjcy5kAnwQb22CaVWv27PZMWD4y5Fg",
  "key7": "yenFPx8ZVWhZTfKBx27YgukJtSUyeocNm83cUMYxfJVPkkzgmDThmQBwRbgNXJPwo4mT7ba7Jc1RmrYAaT7pbNY",
  "key8": "hZhv8thkeuarezsv1WwYx4nXexxxfQWCeHVzQaBsnXMrrJ7jzLdyVdv99kRtZJKJV9FCTdfV357i8KP85dK9VYr",
  "key9": "jiBb1HBT3jQDgmZHepYg8CG2Yi7GZKhmnmgqf1kq2EFgmEDeMfUfkGsD1CgRU16kKqQ5Ak789h6voqp8P9tKAB9",
  "key10": "3pb9VPatBRARBYLX6rxRodTB814MvaWsy2rXc9Gc6FQhX8Wx93B4ecKjS7Fcy1ZaPXZVut5gPrHUJq3nxNLeEDdk",
  "key11": "31yzGUAbQTz29TGAZyTE8RiTo7TjYfV68PXXxjz5p6qW8TbxNSnr1Y32DUsQMKnffgczkzT321HMh5oZCjWuW8EY",
  "key12": "2VejRwS19guaxNyLwcFxdMxsDCB6m6V62o37nVBZmgrubLWxhTTvtd53i6RvidtQnS5AjPg3RDLUPKWjzXGqYzTA",
  "key13": "CJ4AfFgAQghJA5KuSKEBtBFSFP2XCVrY9CfwVXS9uBYmu4oF1rkfFwPWq6bCoyUekCqtdkUy3niDNoZyV55xsad",
  "key14": "JeJNxhLBwDRpNaGHA6EQVBb8KuVtgLKqMNDgYe7hTZMh2jpzVPjQy9WLu1wPEizsjcLSyW82DryTT2pJDoZSNim",
  "key15": "4Fyxf9ho9VLHjTvdh23GPZwe4EQdXJ5xAdBAtMR3hnBT7vpdavvkGZ65ah35kzzMGp7pMzdRb5e9mfDCCXyQFZGD",
  "key16": "49aJ6U7twVhRdcWzHcMH5WDiiw6NSTteoR88ANH3vVP6GZmyfnDMGrMaspAVPMyi9SCetcSq9QQ7xjztmRPxDZME",
  "key17": "3t7Ezk33YVwKKixkaJS9x12HRK768ZzCiSvFbbsAALzGbNDKcFtYi9na8d6vtVxq2A9GWdsXDboJKDvSPCtCB3jx",
  "key18": "2o1UBUFwUn57zJqF3UJugwRGyeC8niNdLcfPj3pkRhh34T7Vs2aiA5NQCirNY9RYPjz77qYNjCj7EuhKrLszvcsy",
  "key19": "369qhpCFihL1USFeF4CGrob5ZEsaSf4WamEbTTfXNoXUnoF3X39iXviFuEp6yrMu2tpVAu7xkvxyxJZQext5D7Xf",
  "key20": "36H638GaYGWB2B9ZRPF3P868mQMy7nVC3c4w2f8kKdi8wp3CosemMS82k3sRq3zFeFwspPkU2CCf18Sw9bSsypwX",
  "key21": "t7T7XWXVRj6eVrBQKBbMHUXRr136jRdqNC6afcGFdUHoSBZkQTCK9PWqi8EzknaT95zGXJ9WsCKf4PxSLVZyXZp",
  "key22": "3orHv21XKnpzSeSpF8MGFWtE9SD3ZNrBXCKyutNGwfM89S65ZwvKnPTMyF271dC3NFA93fLEmPEsHsButBa1crnA",
  "key23": "2HekFXz6YTcW4Fti8sbiwejiTH51m92xoo8XAdCYRynz4EtGzXffiPotSPLaXg8brX2DkL73cFrgaAJLPEiP7x3Z",
  "key24": "4A1tY45K5BYagm3Lea5ogwguFYGqHa96bCxKHWDZKsnP9Usi5aRhawtox7tseYcDgjV2hastcTsoF9xv8uUroZoX",
  "key25": "5kNfqLGX2Xz58z4PZkCN7PZvaPdw616uxsHGD7mkHTiodoKTpEVdXB87nEGGmYBfoZNRzs63ZN6EAb6eKHWA82ss",
  "key26": "4qpJFprRprZjrvdTnQgKyyK1qdYg7tQoK7qYsvm2uGqmaGQ5iyxA1Y2EgWa159196ftaxHsN9Pp8Jzc9TnRWeTk9",
  "key27": "5f7bsr9TaCZfCqpnMmKrw1P1LoqRro1zrrfR3RLs3u3BT38PNumEtJqVoxZp8kJAEvRY3BWFNu3qTNDKtugfZwMf",
  "key28": "58ex1YdL3xea9HMeXuzgSfrWe8cSHCUyx2mGNmFaC4qFxuqy83LxQ4DSCnAaqAzebb4Hk44E6AMLHYP4Vd4Ffczt",
  "key29": "598MbcSrppDVCjPTsoLvufMxHGpvHqmFVxMo33CgpyGB8U39kzzoLvCbbsP6Rd3rJNoFPLvuT8Cp7Qet9uWbzsH3",
  "key30": "RFiFVpRq45DFbja1pyJP3coxnLTyGubbRsom6Xw7UAhyE3CBNqefvR4j3Rghh3nx2NJGUUTvWG5ndJLnXDtWSFD",
  "key31": "2AkrdF467JvNvdregM5g2soNjx1dXrEaBDsc8eyE51hWWRBXNJSXqU8SiDjbJaNx1JWg8hA9y4ytCqNFfMuyvR7g",
  "key32": "23MYZxrKLHLZYTDHg1c87TXEWcFrByKQbavUw8wsPHMvd8NA3zTzQcAUaXvs8uPz3PRU9mzH36F6GZ4Xf9SKBffy",
  "key33": "4SGyRJwQCvmUpcdpxgqwPizAFzXhzhxyXs9bEYSSFpAKZp1D96fkL6fXcFWo7ZjPz9hEHL3Mk1qbfCiUTcpLB2Y3",
  "key34": "q2eArpUkrdzwEcLh7xVZhnnTRjdz9Mh7m6v4gwgTFhrBSSucbyAfT8DiSTy2Yss3kKEo3Edgwci6VYkmf5RnrVT",
  "key35": "DU7g461AKEKjesYHzRJGuzVzApaCFptZ5XjxAcNSuTW91CRTbfk5EcTE8jadAJGqEKJgTSowDiYiiMq37SXc48x",
  "key36": "48zcorGiwXkUTWfxgTWiFHxirVZncTFfRZ2u1bqYeLkSVX6JA4ifT5VbgyxCBiwiPKimojm3dexzhYHqx7jRfXFw",
  "key37": "3TeDEQMYagPcgK3ga4QrHHkMYRL1Xo93BCVnRLDGnXPz2pPa7CUtsMsNcH5epaqhost6J7kTsvEq5TJq8bg7sqPr",
  "key38": "2TcNDXGAbUECQWPubBVk3vcxzbhjGaYC9mCT5g3ZW5PAYWkGM9UwFLeRgJx3snuZ8ax7J7reNrQDZ9HfkuVuN8Ei",
  "key39": "2DFcLH4sqrybX48HFkGbDqfVdMsaisQHjDTBUjZhrnte5MREGQ6rg1UrGqMAD6wrHhayyHdFCahWjHPTDVPAewdy",
  "key40": "4EFAjJaheGBceK6sgxVU9ogamHv3jLradd48iTxnBnvgvphu1meLXQgDZueSzsvXL6vxy2K2HqY4QTGZoQ9RsQSb",
  "key41": "5GjQigdiEKWYSntBns89JV9M6JLn1CyqdjcVSy3ADbrNdMzEZWLKbfEuNTYxkPHVZve4F7yskd7sgY5bGx5h9Ea7",
  "key42": "5BcCFuHaLhYe8hFMMg6XRAdDydYKsbVgFXdty2evwyhy1pyrSRE5xiCGtcWzqpeJCnEXabant4WAxPxdh9BMPZdX",
  "key43": "5ZWvm7jbgfUBAuurKPTKTALpyoN4gumEKkfEdhA8u8ujGHf6bwa5MVhSBKU49XZq728nN597xZPtPcDgCaQuLrPF"
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
