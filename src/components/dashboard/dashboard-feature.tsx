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
    "3itnSSH9u1ygsuzPdyEab91X3DBA81kknq3BL1qZPiLhT1CiKeriUP8E7xedJhcFbHijbfAjkvBxvcUqXCsd3ji3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7P6AQkYHDnPimMq1pxDsE8A58k8it2RJkvaBA8dTWc1hK5D5myDSiV1aNAPCxdBMTdGLKjmpSaPswQEoLi73H27",
  "key1": "5LqfCQrN9uYXMkTxXSgbhAmaJ2RtL2oAaXuLgFr88YcqsPR7ZZTpgoeJR2w6bAdHkBKQaV5v6eTwYQpuajVE1wbe",
  "key2": "2RPgCbk7vymgdYGmsJvuaSjQnLMHpeZCfkXB9CNxC4B4yRYCEPqmmDsRPPxgggxHRnX2kYo2CSGPGukxZaTDRY9A",
  "key3": "55u4y9zefBpCy4CTnuwXRUYdvaCNan3UM9gT7dSLCJRp2EMCrGF4XFPzuhfeUiQYStBb4Rr7TMZrD3JgmqL1HRff",
  "key4": "RLVob9M3gWbGjawr3SSdBi5zUqkwsh4YWQPg4uU22zVTbkeNfuYts8pFj6ZSZP9CEyKqgjXBiYGvL1Y3ubRmEVJ",
  "key5": "2R3mhAwaYar3Ycm4hAkPDDkz4eDnZaB5L6KJufzG7oArHvb664h8uP9iYMHHnWvyfK2fuYjPn6taxXkWprDNqnRP",
  "key6": "4FKh2GQYv2gUDjr3DAaCtAfmqnjPMhy77A31pxuxJrdr29oUNUNC7vWKupsNwft7LsvPqEvX6uXGrUMKoiccJcEJ",
  "key7": "3x2bjPa9boM7uWLCtNft8fW26DPhLPjw3D3pvFZtF89gsnzyz74g1ScGxSzThyFNs38j1UHUMRqnUHceiewYrodc",
  "key8": "3qLB1FmAmtCsmPrZgCs71EZRs1Twukh5rFeEQBwnaLKkvz2kUp4vgXWCGkbbQWvLApEnuziMf725qnp8xdygN4JA",
  "key9": "5gLMisZB4hXDR4qwCh1o1CgU8L6JERg8mJD2ewrcg4Sq8R5AmNV2d48DgeG5yng4RcBFfSru3wY2TToRr3BugRMB",
  "key10": "5WYuVe1fW7Nt1QnhNzQVefxmCb4mKGwgrANeMmD89YxaRamJLgRgTvR6XC4wg4DSqFCH5qxwqqD1hXR52WyNLng4",
  "key11": "3bQ7XoXD1nCRUpK9RzfAgSQNvxbfj6P9dafJm9CMXXWVtMZ2auHLXt9VrzgpWuRDpJfteizSES8is72dTDLymZLw",
  "key12": "UM6JDBXyXyNdGN45qppKdHvjWUZZbK2BHy7TrQ23vTkBmgM8b4A1DVcUTsX536rW2kpx6AYdJRwME53XpKMLBHp",
  "key13": "8og6PBZ3A8nWHtjGuwdHDWVkCGPmLr9h5Qe4vnF5CpdQgj24fnwgTpAfw3nk8o1WNak3VJ5ySNxijHip3wtRXUj",
  "key14": "4KyxCMUP4UqVKWY3haaME5XwdsmpqbxDunEEp9nfpE9uxnV3m93QG3XFQEQLLCeb2v4jozQFr3SPCNh4kveHg6Hg",
  "key15": "4crpDzCZVVJsdjMpfQiKKT4SNu155Z5kPCsaTLeLnYKh4SxHYBoCCcj5jvx9Nntb2tcaZX3ytxthKoYm8mGpjwqe",
  "key16": "2DjhHwDQEnkPp4EHN8LNwFVLNYWoutjk3tW7jB8oRjMsLVqqHyNM5jBSbJtbKkF84knPddK9atAustjEXip1qWtT",
  "key17": "33d4Ddgg7kgczMNYzCxJZjXM9XZ9Er8RbaMFV1kdpZJx5KXYSu9aS55QGoiKqvSUnYpd11CAZvRHQRphw9zpi1wa",
  "key18": "121ZJo5uUGW62wmyvFEoq5c4AH9mMpbR1WKrqRyieV9oa7iJ9fJnANWvG5nBg8aGrzkQ9K1hXsPhW94kQ6oTZZa1",
  "key19": "7TojSGd1b9X59MC4XnZtTgo5HchJMMmCs1dKjZdkQCk1CrcPrGxoQWT78iC5WW74swy9vLh1u1T81KZ8nRqrFye",
  "key20": "3Pw6RKuLPXKgVfNKDsmMnNm9V9JDVbAN5avGYrd43Wxn1mtC18UNmcm3Sj4Z9ai2oeccrkCmwzGn7PTtwpNSWGRd",
  "key21": "2u8VRW2vSbQmfqGNjDqzVxAS9idKiFMCCrc1Gt8Be9dLm7Gk9ZMcRvzeuU1FizTNFNjAHG34GRrs3Fsc3qBwuxRR",
  "key22": "4imqW4fa1o4jXKZfLGMToNbB6NWGXow4792Tx6oKjLSkjagCoMbXhiraeZ8GsfkXc1iqqt9cmu1bPyFEMHh9PjMH",
  "key23": "3c3BEFBnZyWWpvSE4YwEnW3EBUjebeyT6kZJbEP8mKpwBaTMoAQ6ieQMTTSTqhowsRkL4gmKPAPhHFPfBiiqZLMy",
  "key24": "41QMEmbhF7Cg9j5V5t7FB8GqHEPrjyFADLgFZ5QYRBevg4RtPhTaZAwYHwiaG1oTtkTKx5TXHoRv1GoUSJEa9MFo",
  "key25": "5ntWkUj2Kdpen2oCzcYYc6R71B77GkqUGBZbPUtDPLpnQwoQLtekqgGQTozRRqSGbXbV8dKLUpkdx7ptbBrFRCgZ",
  "key26": "39DmS9rCbDnhPLmBfFREXcyVJWTeaGMRBW8fxuK6qVAbLiEmtYzQ7oGy1W4r6ZiDdMXaeXhWqgtrraHnjTuVSA26",
  "key27": "3CYy1VQfLfFxs1bfg1pNWibXhsmMQeiDo4MfKiyZyhE3ai1G2uubdy7X2YaDzfSgCD1p2RLSVn7nZsipDNXfpKcW",
  "key28": "5bVcQZeCCqpjBJtEbqTJJJnS3JfZGyoLCSjgeWQCLkrZj7rMVN8eUDGCtpReqiDH1M6SrviTXtDqYVnKkhye8nhR",
  "key29": "3WK9DVqQwrRLE5VFscCmvvqyvCpiX54aT4bSMhPtLfmJshLG5EFcxEtKZGEKnXxKiUejzut5NjZwhRhSRNCGHScB",
  "key30": "5RDGJTfJMaCtGDGPc46StAXdfAf7kRqLrEug7BdpoPFQowa6v5W2QPFMAoLy4HuQy8qVMxXzT8aLuf2UhMm5FXWT",
  "key31": "3p6WtrQYPevvkE5tS8yXQJfXcdRxSjigrJycJLLxUsi1Ewb4BbeK1AaP3XLiKgpbjhiegrmSvmvm7D9ryXLfEASk",
  "key32": "2pMsYA8AYyxpJdQ7ZfeByveoZH9Jx8LBRYnTPZ72XKCnqJoV6yusikL9mV1XSqUPxSHrhpQZLqohLaQF1BTSSAxK",
  "key33": "2vTH7MwL9EMwAmBTytFHjCp9q8gko96MRbYHRSQtFLdD2PgXj1VAeWrYSC7dtTMrwJQwQYWKZBz1Y8bH56ueuEPS",
  "key34": "5swvFzxvpLVGHf6cYp46bEczx3qTEXqXfcG1ZZFbXic63VGmqA6YPnjERbwTYZKqSz8C6jDJk4VSxQWSPRNLb762",
  "key35": "4VvQvXjvK3NXf59JjLggEEtUyybAu8Xxq8pccRYH9digdJdM1VnmuKcPxFRAh5xufQMmRVXK7RNCxhSFG7fRPwKL",
  "key36": "3ZgQmCfL2jJ1Ri5QpsNRmuwMAwS7AW9XVRPvQLXPJ6M2SjaEjgKGKtQsZMy3tfSVDkuMtTRbWjEaV7WFo18dxZFR",
  "key37": "598WtvVPzPfZYSx7K9nqZrkmkZ4KvuAS9avY6VUY7nArpVvd2KPcoGfPTcLRt6TjDzP8j3prjmB99QYBLUdpPA16",
  "key38": "35zEN7pBMkkvcVo3SENh5LZQJBzKLi5NPYTGhmvL6DhG2875VmKzjASs6rCzswQFUuEbngVnL4YABEXf4hKYQXNj",
  "key39": "5kNHPdidQ8LobNnH9qZ2mRjX8YmFgvGbsGBwZWk4nX54z3mwEm83PcH4QuJqk7TndU9BFYNnPKN1u36dTLAwRhEa",
  "key40": "urGVHkj4T6PvpCUHxPeUvXm94K7LADktVymQTQTdv34ZANZ8jYH1BGrtm7Bb4yjT4LizZWBWtpbPW1ZgAEyNgJw",
  "key41": "2WLADpjgc9hZD9sjhRKotvmkBRVCPpcpePvPrM2YMri8ucktSTqg94fv4GJGZJwfJakhLJJns3mbZskc1NTSkkeb",
  "key42": "zGrrFtGkedJ1BK17nnpafgHxqmARGHVpNBaq2Du4aobzNsCBWkfb6YUBa2wgUZCxSAaeaa9SuN4sdHDLEiKaMxm"
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
