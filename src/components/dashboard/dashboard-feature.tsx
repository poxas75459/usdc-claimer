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
    "38Qz1WprTJ5eqQFsb1AvPbumzhCM5HcCKNeCpMx8XSCNwzccEt4kMs6wXELMC3VV1KeHXrtruFXECgvC3FLkcrM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fFihe58JymeNXTzcX4GLeKztCg9o6AfSTTJnWSMF1SqnNp5B2GmwT8vST5RDaVyCjGCVfzoHyMRokRcSEguLirG",
  "key1": "3AarUE5dVRM32M9U3nRCUe9pYHvhoPzgDFPCCLNRSZvBKhKDrt6m1PiAFZdfQ9yiiFamzsv3bef9rBcNCLnXmJLk",
  "key2": "66XBYSKmqBW12VFxVXfwqDdLyKZiYuCqAxzUvTpqVz7Bb9FpFwtXEoSMh6gXkSFmvMBwcUtAYrh1CdUpLx6bHhjw",
  "key3": "36iCP2AupvXPosqDvxvWB85T4L4Scg6EKwninKTUCPpsh1Luz5WpWUBuNMDfgBdAw7bKWWz7vR3EFprf9S9F2hdb",
  "key4": "3S8XUkk1iDckPPKsfh79ubTddmYcBZW7ULUw9NGK5K8AcLPsoj7ngfCCwp1zfoEvErkbCq3aBiLdx2kRzWYh1epi",
  "key5": "yQuiCD5ZcqPtJJmGSneFBaNt7xE4Rqmur41HwypjMoDaV1wYpv3ofTp5wBUYHGCPJiQSDiTRcrs4ZxZxPeeTWmw",
  "key6": "5U4aPSNKVjgJBAXYjDRxzf8qj27bSwHm51bAX8ikVMhcwerUXD91mWBMiSNM48YvpycdmLFAYFJpMUSc35mzWUW8",
  "key7": "3DM5zvhpRiSNFiKFSNCt5Ze4jYebKFCkG28tuwUMWi3KxXdB6R5R4X1BbukLphbDsfHaQLtB9rhpbh1bxczpxicp",
  "key8": "2VUVTj5jGPXUtrqfCS6PnRLGXRXEJNuEg4daJhCRUr39FpDVLunbmxR29CEhV5iiVv8Zhgekj2bs2JtcJ3tbX2eT",
  "key9": "4r59muHKjmAtvipvBhDatKEwb4RpWdxw2xz4M4wk3AVdch9dGcWVePs777XMwNhasMphxNbCqFwNCwSoJH1L2c63",
  "key10": "4bDMKT4Xi52azXW8ZdefuwGUVcvp4WawK5QG7ww3ygGdXZktZywJjDoqCXrEaZbAs1WJUr5NTcNPLVX98ebsBkbQ",
  "key11": "5eDWKnvtjtViZTYbHNA9LfQNYZTvPaGCpHqsKEupBE8jLwcGbfpKb3mcsDEJ2ioyhXMrYhqpb63oUG1Q9QUzCrRe",
  "key12": "2vZAfMWVPLDcimbKwnNvtoCdjs9ay9J18QiWxk1Eeba6ccwhUqRxHVLkkXGMH66ZBadBo2WmCt64uCGGmLu3Rmer",
  "key13": "KtQ3Wk4efMdpw1JVgGQmbYbMN4hHeq7qqSwRgRQLEhKgbLXEguz4yFNLKqcsCpiRtdytTWHnNLf3uAzQJ8PZrez",
  "key14": "3XuNvtscq7dD6dqYUzfGBWHF5T2LyNAy3PjPTyizadNT5FWsvWbqjjUgdQKWRoCkhqPSsA1Kz7XVABkeut9Wiw3c",
  "key15": "3XWjvhaR7Bn7suCy938JrBiewULRje7qrnPG9A89Qhde7g2r5LnamrPhuK6jgxXqVNYazLB7jfEmL3Bd1gdFqUoR",
  "key16": "5KEXgpv29PdusVsCHWSVCKPufgzWTigLEt5wqbzUeNXxDzathpyrQ1maUkbJ3WKkScy3vNGYFeWS8DWukS9z3puF",
  "key17": "2ADJGQLFy8Rc6PBwiMy3ygff6NVPjYXYUWC8u5ybTVHKxgLMpCCxANYM1NRveKCV3tKGXMYorgQbcWxNYd4FkU2f",
  "key18": "61dFtAduagUdgCSn5gvHyD5VmY8FVdXgs8mEFcsnrsvTkeP1VLzEj6cV2kU9s84CNqtLUsGp4yG7Lfq8SUYFyjwD",
  "key19": "5efCj13pFB9Sh4eyDK8htcpMZuoujoNuYVpeyj1jnGMsHD4neHrLBj3z99mY7kJ6zbCqJqTjRrGCvvLJHTk1kANj",
  "key20": "3Ym6YonUJs6VUwSTAknpskpLdLYq9VLKHyaATC3bwLX7hgiCXFqaLnhKPRVX4rdt4Ek9sCZNWuxfPjRx9FFZH3Vp",
  "key21": "nQkKvTcK15Z8PodAEQZnFVbosz9Z3F9X4n7SZWavm8V4xXDmedUyLBnKK1osUELKLmZhPtzHjGtdZeAnDhBjRvw",
  "key22": "571ZCisRYGg6bVk1Zmf3uEKK2faZUyT7NZHRZswAMEDWL4WpLGriHR919azTqkKYieqrgiVydwKc5q326Uk5vmhE",
  "key23": "FBWzXDmNzrv9M5jwU6ude9vkqzMnH5X5Fzcyv22mYyJvzMkBmHiF4YckSKVJbWqiyjSXZdyDVqe63p1yTNdaK2c",
  "key24": "5fL6MGbkyXP5Js1hPPreQECHQgsGEcXdYUSJydP4PXjUtsLB6h7cGxjmcvrG1v6x2yrLbWifSGwKAXwHvCCZEj8N",
  "key25": "3ziHWwWVpZwqNmUdg6K3TW3hGP6xEU4HkEkiBeHdvaR5ZnVx2wT56J3RW3eRuHySwsSnPVXzUKtZUsWwptqntdi8",
  "key26": "5LJg5LHNXVXwQSy7f2nPpYHh4aXSRDTdqAVySvUBjJQZoXNR5rbZw2yyN6cXmT59UnA6LjWhx9yeVfqubaK4aYMm",
  "key27": "4iamuRHdo6j3eVbtgE3KXJXo6vmLNLLGo9igmv99zPt696y9WanJGHiQTp8EtW6hEm9pa5EpntwtGsmv4tLZ24p6",
  "key28": "5fShpRi1Qupcjd23Mvhb9BFvYR2otDjF7khHFzaDbbrdWz3Ksiz7xfX1Bd45RJHK68ZrP94ikAT7Ny4a2Fapv3Vw",
  "key29": "3zNsLEV7igbrgq4vVSmhiaEbmUYsFcqLy9zNmQRNbZ7vWUtcncisdUUuEdZBQR2nT6n6N5aX1WGgK2ucKFwy6uuF",
  "key30": "3Z3jgdMtgoA878fxkt7insMpFMbd6LoffcetvAKr6RQBZnEihDdMiA81915r9APh5nJMSprMEWv8eMEwTbjkG7Hw",
  "key31": "4NpPetiXPBCMSuKeJEjwwc4JdMKvbxGR9xm9NXabuFNzE1uZoZcyn7LLQJJ2PEVWpXngLtSEx2xH8ZaeQ6dqRPvN",
  "key32": "4zMzJRTyE6F6TNdZkWjz3ToVinzZQqKn6EZ15QeinWB99sduQk912kMyS8Ct2MMMZNzLrBBbg79vaUVVvZFaeA3r",
  "key33": "3LrRdDiTAckrBqjpfmMT7SytS4fLLNhSDeV5NRPAEm6dGikqiUQYW1SvLbWzJBaut6t2hkK69VB8YrSgpdwALwqw",
  "key34": "Jzpp1RkFkQoiaxVUvJWA4RdBpP5gqksogg9xBCgcnnoT3GJ6u8quhEsKEfTST6Vab7QeEuwkGsp7sfHt8RiNNcG",
  "key35": "5oshVo8xXWCNJYMvoEnJ9YUdrzr6Hcsuo6r6PVsAQ7e8GZwSqut4gkpgjtzSjacG6KwpqFJh8RZy1x1nFEp9tRYn",
  "key36": "3eQgDYwcdWBq89Yzzcoq9h6j5QztmcXN4Vrr3Cvd6dt83uuQEf7GYWiJvWZVvGY5qktwUYeNAaggSicsQN2ALkaz",
  "key37": "43qEqV7jDSBqfqv98otMkMB9mQXPqEnSiG4vgGVcaYehJqXt1igA5K95MbbqqJ6oZaPF9HHS62XQD4R1xDWyFnyy",
  "key38": "5Gkn5bSvzioYNSt7zbcS5fbQMvEuvgFdvFpZd3DRJ8u8KwTu22UcB3NikC951sNrARpH2H5uES3yjTzVo2Q13F8W",
  "key39": "4hXyFxHArqvv5NDKtXBKbHgfmSpqA1CSiTDnsZGMyrH1T4nUANnXoxhnzvfG8t3Nr2ZLxEH9DoDmB1Wc3gGePFAi"
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
