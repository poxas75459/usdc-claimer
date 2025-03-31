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
    "4tKfFyn8rkJMLXg4a4oDDgLRRoCnG968o6RoYjY1fr6iohNjgkpcNCsYf8BrbhfadX4Knmv8HU1Vg4fnqkSXHNBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B424tnJfpt7Zr2jAt6wbWARTHVuXtzHN7Je1GPBhtA9vja69ihDHLuLGv3Zcs5yBEbELp1j2kmdQcPpiYYRzPCN",
  "key1": "wyQph198przyfaruWJVKV3fHEexCejEMaV8yFqxozj8uLR8RsZcgpjz9v8wevcwAr7UxM6oi6miTP9txM2jUpE7",
  "key2": "32yT1FymtvtbYa2QEFtqoqbGWQKtn4kD9armEjgj6HK5R8ukca6r2BaAYzM7LRNkXww1LtB6RfaRNHYx5TeFGAKp",
  "key3": "4Jwm8AUsfvuHK1SawWT1J3nU88jSuyvBYSRAnVmyoApiNK5hnzKKu1efx3pKW1pp2ekymHDHtc13CPKCMLZobsdz",
  "key4": "53uFa2vVP7yneF7ci73ehLE1YhdssPd8hMnMw8MEp6DT2UGo4cyXiTyehR786BtVy1t8EBxFkwrBpgWL32YEJDMt",
  "key5": "2zLPqBKBSf6Mf3C4wQpeKCV8rvhbMNec4FgCja2wrTdGYjeut6xSSeAQTZmfLTyY1o3uhGShiCkLSZizuesULGb5",
  "key6": "5KBAM1MumKNeHcsMiFtUNjZGMzpmzqXNbDc3N85cFMjb7rSBFRBtvpxroShho84QLyU2mKGxwLwi3oxEzmuZTdFA",
  "key7": "3ws1vCDi43xqevf3KYJEXmiaytVx7Cg9XDJLCacww9jKFRLZ8phhayWLVS7oWsKBmgtFy2r7AU6Y5YYVfmEYZEpe",
  "key8": "AUrVynJA2rs4WqM41im3FfYpaQnG2MwbTLQt6PxRxvmp5M2ZZQTXd3dxyAC19oSEfo3KxmQtrQ9Seicp1ZEi9qq",
  "key9": "rXPgSTPfpC344h5cUJPd3VyT1TYtAiD1EBBJ3mHSLuh7FVWqnZkhptSuBoRBktCCCpvtd9q4KLgdFtCPenMyNgo",
  "key10": "39oyLuy6YbnUMdPSN1zJCbi1xqkGZVjS2pDJSvtHHi5KAoguyELdi5YLV6UDfzkd3J3ZMjThEv2CQ1HLgPvysBdn",
  "key11": "3qnffESncDmkjMJDuxe312mFmw7Fnp2nDanbTRojkEUQgisop8cF69zwAbZQi6N4bM9jzExkyvF8sk25iSAeCCem",
  "key12": "5npKSyViUFpXo8skK8S494aWRi7fJVs8SguaTQ3qCLmej8MvweWizwjctTzEtVgdF4HxyTMcuiJLNYPc8P4RppkJ",
  "key13": "2sZ7awCYZ48xVaCT3Chmy2tF5hHvYeFUAndCU5F1oreC9hBy13Xxyi3aevA3YMvbKAnkphDNKE6nq9CFr6Q38Kjd",
  "key14": "2hnb9vCXPhyQrjjkmwpWWAG1ow99UjLdX37i4ET324nzrPGm5v1hoDomA2mAeMapPaQLXNQd8hfPLUveHzkTYLeZ",
  "key15": "4q4ScvAW6Lb1mukoSheUWo3Egy9qHX1zJ2L4ytMFnwEiYKpDXD2neDWDzhU5s3tGzDL1SDPNXw5jddntssNKGRVW",
  "key16": "5QQWfddmMiRxfj1hrCUHiuyqGrhewdZrMksKhuaJnPKGiPNzaL1PLU9pKPetbCwjWuNQLreV1hx3VApbuMttWapH",
  "key17": "3bHZxx8mF4vQQ9HVaVDA79rx8J82CVaRdt9Qw6nR1xdRNDiAFbAUJLy5J3U7DVSXJC8gaDWHuGLeT6xh13VpyLYo",
  "key18": "5Z1Fk913XuxwL98WTjPocHR2qj1EMHkQzkVAjdiuECNo5K2HyAEfx6ArHX9EDz3NqJktqi3mpK7DgQPNfYbCmpm1",
  "key19": "3kC9Q5ZUC9yJSJk8mpmqPGoSuxrYUvUiLbFUHEKrvD6kb5g72SoTCRYTcoNhSQd7hPrHUn8DaRyGvcNyYPD2Tzci",
  "key20": "59DE2BLdeVirUfkDHqhmyARQtTjkWH7yyn74SGT6Ey6uVh3WwsVweQSJNVihtvVfQHUehpo41j7TUqKvu5CVpYnZ",
  "key21": "eBu85kFLSYDnrXY4LAPHK8WMmKpCJuKAdGhc8aP6deFxAxTy4TQ3KZmg93k31NFS74NtLbELzRpUQsGqoSfpHmj",
  "key22": "2cqQeP4aAtDGEB5CRnV3X7oMivYEZUDRCwndhr2TLxqJy4cQFc9ANYF6XnrFMrPrkupGKATdNuKs3eu3jWYEq7aH",
  "key23": "3ey7kjWrJqzvRsKKpvvcHsL5fKGDN7qxWHLYwV848s76uWEQD4aLAx7aGh9NM3pdqqmF48N98bmRuAeEmGGomorZ",
  "key24": "4bUuQg4Ngc7J7rTgYfMjzmzWASX9fUgyfFre7wfC15YUoEE3R9aPpAi44hBozJt92SLihk2XjTv4bbzvfQULPMcM",
  "key25": "39VsX4AAcMASoYMqKi9B3M13LSFQ3QzSucKEEsw9FfYx9Vr8JEqYbEuzF9GjW5WmiyRbbQLoTEtKf92U9ZQAWtcd",
  "key26": "568UTrHU5hwEEboVYdLWm53UwuQUBGrLVK3MFYXhhr8gPGqWtWsgrXrGuNnbC6GUWkYGB1j2Qnzpoxe8e6ZT3gP",
  "key27": "2m9EuPAzeZjkb9QHmV1LFbNnAGwZM3DTTLcC8duCaUB7K5cGRB9pJC4vWXBbNStmekji2HtvYLdb13kbBm8k82o4",
  "key28": "4RActKubJiZB4ArHpxPh4MYxbCfp3x8J27kEBzkxgA7iK4k8wt7DpndeUpD6agVv92sP2txnvqcfdtauV8VPKgYx",
  "key29": "3aukfcYxkYbX6Qgmw8EdeAqTzYAAcMkN7pWhmnLa8ci7KKcxg1bj2g7usifWP9HHXssFevsrZWHZNLDJXfcns4s6",
  "key30": "5cKcR7T8ewWSGEKCsivtYSXZzbi3wgLD29QBZHhXvNMGEnT8jEToh3yPhv2YqxkCmUH4oVqNFwYTGSciWFm31Evf",
  "key31": "4HR5bRvXMowBbs3TReTJtdBAoAfipgWck2uo6ChxSWuBJbY6Z86fYuT3rr31v6Xmudnx1YkjbCr99T6VgGYkK7EU",
  "key32": "2qfZSimbDHvmWgek8ahEWi8FhkFUYTZ84yyHcX1gyAX2L89jauRuHyqQeyxdTAmAoTKHeue8eHQ3g2PFzr1agZzg",
  "key33": "29CLjbyuw5pMwUcLETeFRxemiYq9c29bKL8xNf9M5ocijBeSrnHEAAVRMHRdbfVZuXyJVfCCuHLyKUVnXi2KX8dA",
  "key34": "45GNreAq7DFrJH8Vn2Ng7DEjgZ9vJxiAHk6Gy5VTTGkLVZc8KSoNSaXxYTZUdmkD7aMakbqrQ1S7SCxTQX8UoiyR",
  "key35": "L7Rh3BDNxpZqXWtUhadncSrbxRQhca2SSJcf8aN7cxaKxshTkaNLUi2yQp3zSJc7KcZxjiHqsm7xf9SyCE1bqS6",
  "key36": "3aS4xz9YUrud8w8RrjKyNxNNFCA1DpGy3xi1bLvJetjeFLceaU2JStaSTkJqVxmrHMgJjUwPzRu6GBtxTZj8UGPY",
  "key37": "4C6wAmyjg6hMFJqnGne9SyaLn8p5Tps8pbfDBtsdgohDm5otogCQTt2NepLwjssJL1VBd2Sc5UcNBddvhLJdnkTu"
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
