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
    "Ayy3cftJwUTSum3oApcdcjfZpwHRwuWmTavuVeKpj6yXKegXTtaM9yufaoU82TzRpKuhUf8iMywmJiJcXATFGBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcHd3fJmZCqyZehEPp3YqoaZtwrTac5DGnR95irjREysJqySadMn3ifuUsasVbnZKT9k8T4ce5UXdAMmQqgHfJ9",
  "key1": "4ugPUDFffFMERDKpwmMmtzFArqn2YUjypgCrqJ8Z4aqbazp4TL7hcMimfPydG5GsqP2oj2HqGyDcXq9f4hJ4utNZ",
  "key2": "2FTwArjQoxHPM4KtASMmbqs6auFqrKSuTPRxH34s9aGWEW9H6ut1G3vy26PgU9ECkwgTBur1GddraLZpq7YA4etU",
  "key3": "5gPSTvzHKx5CHmkUuQYPLdX8LRGa1H4XgR3Q9hD54yxA9Pn9Rk4HSpEEhD4NwpreAJ1UmKdoFkk4Jzi4Rf7gHvPP",
  "key4": "m5cE8vM8FYM3HNp2c1Npx4aWP4wYRK2TQ8TLFajj8YU2B2MdBYRyaMGQryLmRVxt7JHgZ2mbLZ3gPoFhTNHkdZG",
  "key5": "5hzenyMzLnKkoXH9iRYb2x4r93D71zbDXWzGJsrYB2dXgPq99QVp64Bk2MsGG3y7iwqgTrvaArofFaEyBxtGNuRX",
  "key6": "56CRmgdGaN5D5V47hrebKQgFbG2odXqQVdiRusXYSgoxSpPshjFAkqTUFyxsDCG9inzVD6sGRpAjCmPyRLZcb2Lu",
  "key7": "5T6RS1ZCRxkYMz95gbc8HjZVN1G68hedQzD8dAfvMcQwtV5UcLtnPjhr3srEr3XpMTj8Lhxiq8hN1Ks9GT4fkJsh",
  "key8": "4t5ct3BHFbUu1pkxPr5yKiePRo8TLzqAtYqugXXrHo8ePBuwDEyMurxyuohshQr1J2MsrEQnPYBwESGua8Rh9ZFF",
  "key9": "2hk6SrtCQyzU889ZH9rBnda8k4z5HJ92pFQcv1u5ps5t8Q54yQbMo2xdpdy7x7CdBs1sw4QJFbNqFiDoLKwzfTME",
  "key10": "3SmmZF25y2wQJVWwViSQuHC7rNfN6d6rPnNB6b2DAcwpVhPF9zsLxhWE2DjWSZ9yTbxfiajbKchJutsWpCpTfsJ1",
  "key11": "5vgPpbkvE68d4j24aqHcmrSoadEKksJLNtoY2QWc7Dt5PpWPV4G4P588UkaZUws5zh4LebcY5JqfDykxxrMpFcTK",
  "key12": "4fUeTrsvpMBgnBtZPEEgmBcm5DYVARZt6ns7AN2Ptw8CUuufYaocw48VWoNrYzJ9ALzLk8Agvh7KXTP9pbSERBGZ",
  "key13": "3cA5qm6p2EEgEhDqZ7AZGiPKAY12cWVnWLHR75LMLXXjtr8Ue9yLNqe6P5zQhUFTvoZqcffKPEJzgecXM6MwcvQ6",
  "key14": "3c6QXK2mEga5J9p94UrgQxo16YQrUUjSEM7MdUKMkf8iY2MTHPFj9X5NxxCBkYdTwkDgXJG3zf1Pr3wCzKdEcWTB",
  "key15": "5Rzr2k1nX9CMcYThC9qm5GSmW9xpnMB9M3MAkvSV6yCk1zAXUtawUgd4FS9LRGV35gxfFgtTccuf7APmFvxMMfZV",
  "key16": "5GD9VqY3wNmZs1PAM69RV2CRjaGmg5uv6R6iQZ2ZVh2NTbfCMzKguRtA7WQFP7MbjdUuxTcMvPLY7JnQ649FrH8H",
  "key17": "3hoisc3pohQi8VsgG2PcP8MnzctwgPLUm5WSkxhwCFWzSxjWTx3gjgAhcz9WNEzQxWsYBUMvDw6tsjCmrxUSeCC5",
  "key18": "LwNosN7Sty67XZWE528YVFaEF7fP2XWszDLFVNW3bhwxyhQPbWDmQDaEnipGXV2tp3VP1eQL1gHdSabEtaRcRgv",
  "key19": "4z3zizzeqQXaoPFm4KHzyoKrZQGEWtVfqM9Qz7FvJDQzD3TXzcB4KyRRjsSFKzKriwoi16kKhvcy75BN3NDaSWDc",
  "key20": "GWREa7m1tb21ySGtyd9rSahTJgQwz7sRrhTJnx5SChyMGPfY5JMpNKGA7kB2k7pjAF5CV2HXpfH2fZP7p2FpVhG",
  "key21": "sL5eYEVpFARAt2M6p2rZLVyc4STjh2X9Hxd8uveTAdooMsY8ndL3L1rHGu8LA6gL93TnZJr8Cp3sxkE6PTScdry",
  "key22": "5y6bwAj92NnBkSgPjHTQ11ZkGhb1tsv1ksbH6LW7HG4n1eVkNSgvqc3HkFZG3Rc4SVQpvMVEkWBJoJgZnQHsdimU",
  "key23": "3axPPCTgM3x1abgV9QhixPA3KPC2jkRoCdbk33NjvFNABt3NL4oBVbetzfhG2KTmW5arXYRK1AGFHtjgyHh7sqPT",
  "key24": "2SanuqLGbubjQ4RytK2MRFLjq9FxHu3wrgS8mmCR6U22n4T6sqjtcBzsz6cxBLhqAf8ZUpZtajtnZt9SfDrEQiL",
  "key25": "5s9SKHtya1BwEBv9hxk47UuiwF6N7FG2SPQMaNWvmGZewLFCnHMcPdmRBuBv4zX8wFF3KFyAhSiJBSQ3VQQvT4xx",
  "key26": "67nTETfqX8ssrNWARUJQBbPue9BVztsyiiB757kdRWtkgfVwpYvw6XTro1ujosAsNtrNM2KxpiETeDvddDHCC4K5",
  "key27": "qGzHGdd7hXeNH68DmBhgHjLxhS3oUrz5zBt5PrG74QdkpqoK6jbgEWMxJGTLWp2wTmX1qsePvTkat4mTYmGF3vG",
  "key28": "3CMdpXqQpPLAptMdFiwPJTZ5cfcpmQDDSZh2M1fNPb96DRSZbhHE7Z8XT6hhrXYjwHwTrMXZTADV83sJRcoHjHuP",
  "key29": "32AZJ7XkiXdFgGRLsLcVQUWxLF2iDCk7KCeXsJ3BXJ867GnTiM1VtP9DirN9bGuuCuW2rGfLYcFoAoEV2Ax3dHxh",
  "key30": "WVyxQuw34cK4B8h4g4irLDPGDkL6ujsS75VByUpXur1cEe47XHoCneGSEbsQwvFuYTLuJtPMKNMDj3bgbk8T4we",
  "key31": "FuttAL49VX6vLbHUYsUD174y8yMJYryEKneNpvKr1WSTuqTPSe6jUNLytu1LjM2jz1p1HBCqddgfPCFW1i49kgx",
  "key32": "5yrSCAoALRCB6pUTLu16kD8JCvzb8xqzvujcfjZ9iiDCfQ6EpZ4148sLHBRiE2cwm2j5kLJh85MWtd7wE6N8LsYx",
  "key33": "kWMbFy2hsMWZRMcZpNPwF92oAat8y8jRQo9WrvVczGZtGxPSgmSgw711exxJDwyt2Mwjt71FZ593ae8YjKBigEf",
  "key34": "oc6w54hvWpjA8kTbm5TSHbKSCLCBdP9r1vzKBW8gZc368GGBsvSqR7sBsih7QD4YQmKHwPoHjCfnFhPosJh3KPA",
  "key35": "21VTSTKJPhgjk44F4L2VNRe1X4N4sX2sgbV2oJ1qpMFakNqZijGNeT8KTMudWe9581gKJTCKWnngW1BaY9EVmsbK"
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
