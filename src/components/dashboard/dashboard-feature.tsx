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
    "63e3qJZjqGDpwu8XZxo5xJmhrKqGCmSfMnvNwepYMsWWK3uqavvwbABdpN2bAkPsxeRiUsmcDzsbE8CxEkK6tP8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LT57qepfcAzPoptqdsWeJpWP46Nvo1YiizN9MGerKaN2KtxLYaevF8MkjVgPTx1mbXYdPinF1epGDMDmJuKDhUQ",
  "key1": "4zRu6ySx8EXRn39PiBZnmg2Z3Ejm2U12G6rEq9rdoYe64gsecvXd8tjZ58a8Tztb2EstCF9eHgVLnrbJPnm8sNsD",
  "key2": "cH8ZjmSXJn6TCyZtvdo2SMDkfAqpHrtU4ZtG4nUN9njrCDHKKUuhLyGbavBtCvNL5Ukk6puSkB4nSRCKuyuKg7z",
  "key3": "4ewv99N4DPxE2idwHCtYh7bVwHpkmBAaBMxyiWcQySGFNaABdx7anP64FwG5NfGBZQsSQZ62RufwSb7qgCm3nxHB",
  "key4": "2133BVeXk34bsz2u6cFeACoyYMGiFY4do9thzf5QZyt7BJooiz5Bggr1Zost7qpoBYKTbWMzJiyY1UwT6B75s3dR",
  "key5": "4ZKCi2B33rajHVYp4C1oYfWRGx9oVR31nKBkDGaNaJidPnK2o9QSZqtVR6QcrCBU8o1TTstEpbdDuCoR5x48Qzmz",
  "key6": "3JLD7Dkvi7oXEKrQTqej1RL2wWFnMsPrxu8LsYVK7LrPHhFscHJ6ybq1wQKUL3asufxYUeKzKNcJy3srvBgVcFkY",
  "key7": "2aM2xHyhUKfdkWXEU2GyK3nt8PHSUyUepL2g7VABhjKAn8bNJphNNdtNCtZJ1Rqx2Vo1gK712Nq2X4Der2M7DafA",
  "key8": "23FPcDRYCmuqjM9HR4fi1hiFqSREVBsEQoCDS85Cb1hDsia5AoEN8Hjpygfhwxye3HS4HunHLrdq9VPY8NZfmbNB",
  "key9": "2MEhghMMBhBwS5YvugYjvZWuwPwJU9rKBFGVhM82BkPLNbVAHq6WgrsDofUE73qhHVLbFXMWbgNEun3judTafqeb",
  "key10": "8YmZ4xNpKK3Yg41CrysnxUx5LC6YKhRiLBG5fsEAdYNXxRKQSpunC2Vg9JTpBGvePM4P4uL1fsfkrrw3h28PnDt",
  "key11": "4xUYu4y566aLg1N5DFdCXATWWo5rnKWBbRU8bTTQVXFBBNdqUJayhwdSshw4vpp6ogzXMuhEhdYctUBCKoUz1A1Z",
  "key12": "5BBAEdMcdkUCju3gdX4XJw5BHMxbvYaSxNXGd4UppYckUQoShTMgBb6qaXxfCW4yU1JkNT3FDQMk4j6fwz5ZbuBd",
  "key13": "4YjzK3NewyrpRfWJbWTLrxjTydC19CxvELs5AHFtUpN1vwmTKiRBZ3mX3cguN62ppMBzNc5yx2PjRGrBcwiNbP5c",
  "key14": "4cYURxGfF21u9onJj79ceJxytZ4SHqMQzqhh7SzrmZrWJfDWy74kjS4iyzz6Gpuy4GDGhtLV2GK3vMKrpzWn5pQt",
  "key15": "3jjCdVPGap4K9NQxkKuvunM3JQ4TzSBVgRCzqmuvNPPwdDRhS7dYi7JetLEgf2f8TdNTBu68c8bFVfGNdkeKcdsW",
  "key16": "3SwFCjHMdv4eTsiA2xvRvzn6kfaLgVHW1JFLFPrPcVnvBjBMTn88J9urfMjJTzHREABNXWryGx5KL7jZf7WwkH3L",
  "key17": "5KNMDKZ5fHatXE7977RbCLDTrSVbtDXnhD6nkxd8C8J9NujTj6dyBG1uWbscB1XhNGxQrNYEdSMGFH5rJbNyV6LJ",
  "key18": "5M3ZV7zKDtjAZ6RC5qeycLPas5Vdfu1z6LKa4WmrZoi7gU1rZkkgJH5LWqFNgaM7FT6tqsNnTbSZ2FgjSpQGnyQq",
  "key19": "3ue6bk9Q8svKTjvenVUGzABh3Ud5TwDPsVLbeYPDXEooLPY1AEHRyBTHafSoC5kPHFBvb1hDRpB6oWBWHdNt3YFA",
  "key20": "3aJXLu5xEo98ZJapYr9v6yUi1M4dLQCdBdXN4a6ngwRSBMCFY4Zy7uB39aE4X7LznZ93UXXvw4X8W1aXf5cjzAf5",
  "key21": "3Lvr1Fr4fJVkF44UMgs5HzXzYKxVsGSTS7xUGh2qcCmSfCgqUw2DEZTBoA8d2bYHpBQXJLWpPQVHbBRQAATYUqdr",
  "key22": "3UeRHFGDYvYzpv8b8mCjTQT1GezfxBVh9rkAF2KR9WZLEU3m3JcEpW713tTvRZ72TYxFo2NhQtALYofjAzJ36bUU",
  "key23": "5H5zquEWkjnwQ9u4YkvzGi4WsSc6zVUDGQb7H3NWzEGrvGSFA6gKMGt1tXxGvsnickwSCsUtWwAWRJGQriR1aPSs",
  "key24": "PtxR2zYmkGqSnfHmh8de6DpNrwd9b1qZSokFuKDwGDENzFSd25DtkGV5HGJZLR15EdtFiuyxGaJX7SoUfojNmU6",
  "key25": "UpQsEoqJNFna3DFwyk4vmvWQR9dgtzaAaJZbmdXLGvRHLkebw5FDML5Zi9KzY9s5WtYcFSocUVNxN3SRvD6s8CG",
  "key26": "5b3MVgxxzA6UVsKRGSRmxaRYN8mxi4zBFDGDDx5ifs2nRbqiiHihwQW8kjojKdm6TQ1ioRes7tMJm1SaGJNXUQVA",
  "key27": "2PhvnWcTZ7YN75HeBproMEX1PWp2JkR6r8bQWHEZd645DfxbK6LavfNRLamuo5cAfd8dTHdDxGedXFyVjfxLtVGB",
  "key28": "2GcNAPtXcS2DiZusNvECi5dvs9ptw3U8teTS4ZX2i7KhZjQXJgKsDvm6MtvC4X8bq7nuwZHNDSUm2xdK5t12BpUA",
  "key29": "nPuL9i4e7NhuxFNPQWniV6JsgA6DDpawtfrLxGt1ravSnyarWYxzf6j4RaZhGfaih2H8EDB5pBiZFmTjpoeaVh9",
  "key30": "5hxFJhinbf8dFLjMVp9P9vMxjyaHRanf76ys1QjbrjoKquBSnxGwGg2UzbG6EaLJ2Kivj4XfNEniVwTfzUmJuiJW",
  "key31": "3K1nAy58FZXHDxnZk5cHBsz4hBAyfALWEzoa8bzeJYFCYQ8DDtT1d7bWHumSkeWJW93EdtEj5ffGLUBHLXfMwkq2",
  "key32": "5RY55Xe5c4hCELhqvWxPF58K64E4fE7bnUVhnUFicTYb9dhir21SGa5ikPa3NLHJsF1CLRTkVKMMvJosQeVgxZHq",
  "key33": "tjqZB5JRdgUZeZ5JsSNHRNjK8FAe4HXnbEMQbzVeV7QZxzmcPD3B8UVxgexNVtEEHzxepLbfo1QCSKYQHuz3TWZ",
  "key34": "2mLfqvDiyfGUwxp5Zi64wd18iupg1aYMehpCEfuD7TXQPqbv59ctArka6gfj8qvnCoT43CtDJv9sWg1SVeGrgSt5",
  "key35": "3th7cBgLDk14FCE9Jng8UADV6YYjGLSFeZqnQ9GQGFf8itMDN2T2giCFfib15n3ZGU1Qg4CaByxJ5JikwTfdhs7V",
  "key36": "5wxn82U8F1fv3bCzjazsCgYrbrV9Y3YDmcf8VT9eiWDXsNBG4nWgVKMLGPcYJNxQSNPsSDfj6uLstXN3x9gkx6fm",
  "key37": "5ifzoyp82gmwTpRUL1Z4HxqvsTWfpESpMxCn3pWm7kmsnTdpGp7okSod2ZCUHn4RYKAWaumVKzhxeE26xeGrm3v5",
  "key38": "5hsDUKjhf7UBLUWZF1E8sR4gNLjkr19EEm3qQpWoNbZptRWA4x5yvnRAsSYY1E9hEjqb7URTBiS37mBhyqEqVmFM",
  "key39": "4PxcBgzBLJyGr3WK1nmJGtMRpCwg4N1RARWV1RdCyNpchxoAyoy96rkYXaUc527N7PeZZJTqAGuYgpUAPKL1r54d",
  "key40": "2T7HfS7qn3rGNAuvBsBSg8Fs13VhLtwUmAu9pPFGW39a75Ni7yFLNH5hfVeGBFbbbxhy4BCWseHZToXT2sYot9p3",
  "key41": "2xogGdZCfsgYkaZgBsAawsN3UzKrK9yvgnPQCbaiPUNdJrU7tBakGMNxcyVJHFQirYJ5SaSWBWsq7nDq93CqV1B7",
  "key42": "2dvQG2D3rSgg12xPoLMU5V5euddfBosk8ihQiEjDuBb66XHN9zAW4qz4519UW1ebDaNBdpuggbCwtk7Zk3KHAs39",
  "key43": "324xEkARk17ED9SjkjLVFxPeWjXPksrNufKmvRsarmRFEj85eCY1X3NXKEFanA36oYhSbh2SBNVNnfeadHoA1MFw",
  "key44": "cs2Ezru4QTKPpx7nX1kxbNq3aackzFN2LpRLoFDuXAfC8ny2BBkF9cERiLpyz8oKiWhdBP5Ukx7uCZBbNjQEc4L",
  "key45": "2zfCPCv9a4eWyNzS23e5bit78v9nV7qrnMYUKgSNe8acKBDUMy4FAfXjganvRSADgBxhpnV1C4swuoccCxAb7WTB",
  "key46": "4N8SJJrc3M5Vt8DBTnbUvEm8a7T6gUyiFAz3CbkeFwHb9dC6Q7vcfdXzAeERdwCcqCy4tNXgiyVQqVTxM5nEFZtu"
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
