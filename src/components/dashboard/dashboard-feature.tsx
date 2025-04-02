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
    "5SzRfvF1MLQxwkK3X1pz6tubwyn3Z5CN2RZ7JzHciTP2h39MrYjuQY4PNouRiUyff8sQhHrfi8TLfjnwGnqvTkT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F6NiTWk9WZ1ZxsqgmwMyhcq1JygQATXEtygK127dmR7V1b9zTiuCGpqQ1ZyeGujGHB4Tv474PEdaiyMQV2g9tGS",
  "key1": "5u5yAsqsPaTHXnbMXjaokKfwWUiNnZhZHPPjxy1P7UsP423wCBzUCT83XbiR9WdUBrrKLo9eBqwRGMXifgubBv4Z",
  "key2": "4XvRFDpP22kcLpG3UxUpEvwP8XQrMPmhrj52vEwZFiesNLr8F9gFavPYdyHZtYbAZ3ywDkQWYnxytF3pWKkP7ySV",
  "key3": "5tbZKDhzQ6KniJ3nTJnh5yB2VEAZ7YiK6iWRKSVGhv2GKi4bLMYK2ipaZGXnjmkuBPSEpcZqAGzSasMAnZDTsNLL",
  "key4": "4WgLWZYqCm9MDBKGKrdBfxA4TuNcFDXiEWRN6qLepzfP22ccxh3xRiBFThJQfVLjnMqVFmTTYiUyJkV31bt4z9ak",
  "key5": "63eWxQzReCEdqw7hdv5Nc1Yb4JDpgtGCwsBrWi5gkyZx1iQQPUdxCwc6vJfMiW1kGvEBEix2PtitKRrs6j1sYNLn",
  "key6": "493TaDpYgDaCa3GUqtoK2tdzBtqUmucver9uChJ4ijg95HsXzmDX2LwfZDdp3QQ5148Ax1Rp9fammnvvaXSDJzvb",
  "key7": "25Qc54tphLtSa1RSZL6ai2jSAMVX7hEKK4JE2EonjDSQDDHGMKaHDgSqEtyPWTbw91zsWiCGqJxD1RAXNJu4Pzsf",
  "key8": "3B1dSSCzkS2wtnkwoKRWcsAtHzLtZdJnZzQDsaYrcgzbben8EU7utZBvpQyqzNynkABujZTTPCRtJ9MyNPhP7aHE",
  "key9": "2LG4K6f9MBe3tSDz5J8eDvJYUggrrx5ZVRzESMQdvvxVDk3Lp8jhEEY6nAYVBdoczNh5LXbHkDQ1MXC8QeXBnEXN",
  "key10": "2bgZJFByeC3QgCZvgYc2DsJGHSyyezN2JgSaV3fbc8So462HHX4Vf6g4pujvuLfPhWM4x7FGpUpu9sDKhbgSRS3D",
  "key11": "68U3Atvr1XHuejvZue26nYoigtcSERTX8EG11Q2GhPzRnqDHAHC9j9LN7StPe6ENKStG35jZL9zvDiqS2vKXjoa",
  "key12": "5fSUG7eQbuiCdVjp4G4zhLkCVNeP1RF2W68pWHpxb14a7ycCqRFhJMfVi45pEHNuGUMd1dBm6jtPPSf7HYxLjGW4",
  "key13": "2ntCtRzKDmQXNG2qjKA8ruA9u5Y2EQjK38ebPVcLx9H2xMirxDheQxveh9XuuPXhWMGgJPAHXsQwV3ALo5BwXh5R",
  "key14": "4beNmouymmmGrauXrSgG4ehXcS3pBehYd3jf9F8aMra2LYmuvZNLRATFpvXejsmq1FaqTqBu2NwCvPUV9c1McVFu",
  "key15": "2HyFY2rss7M1cjUP4mWjnAU4i6Gzrrp6NzBMrywuwnquGzEUMAHx4brtJ1qJ8AZduFZuYNQ59NKVDyQYBSqFweUj",
  "key16": "LS7ojAtdnLZTAcUcKtdvfM8JW4M4y193i1V8ZkLpdR4woQJbq1D9uAjMujMrmoWrLMpJyiSgyPjGTjHNJB5qFVH",
  "key17": "55sDGjoC6ye55DbTWx9uKu65iommnkmbBA964hL4g2HnFvCr7AnsVcjPrDsNLTSxNUoKW9FD7csmYezCeXujwndc",
  "key18": "3ZUvJiSFWrNogTM6NwGg8prbxbKybDu44PpLgaZUJSjhE5cc1mKraGALEHmN997FekMVVHXJZtyGtvUzbDsjPW21",
  "key19": "5Ri9KFqjf51E5SBK4ESkAA8eCjZGiEivvBeQUxMyrvocXnfRY6QE2ZoJRQvxCCuCwEtropuoZWVmakzG1Rcomz7v",
  "key20": "k6gBn25UfjgCnokn9KjNwLEZii1dPhjDfEd2uGBgxA556WgpYrgS3uxqEenTpb3Py9rc9NrZ3tqLza7CzxyKCdF",
  "key21": "5HEK94Zmn88nCin4TFtEad2zzmvYVCAnAmLHLQZjPMR5JhjuJctfcNAPCLevaso9xL1PhM2moF31GHT6pfu7K4bj",
  "key22": "hJmaNEH5peqUsoRXYxZbN4vGv32waPqwW8cFbm3jXi8zisPaB7BKYoB5eQvTswPEnPwAxVyu8mFPbDXv1F9trsC",
  "key23": "27qqPC4BUaci6jWgq6yELUGjaLBCW98VG5oKFrwrSgPkEisf9frkK7XK57dGcfCRm5STzGa14wNqLdtpFQmbMHFt",
  "key24": "nGNqiUCnFbe7Dy2nQTqcAb5g3bp93LG4sTgQm1ufMsu1Mu1Wew4VKV4riLyQs4RckyxgYZLNwGNqsu6MXHDwYkE",
  "key25": "5mL7mbTsgZRye3WBkukwhfkuabtE1FXUGYZeFcHmRtv8kRGmp5cCYqUqfXFc2DqBtFLeJnc13g5futhePq4FjvDe",
  "key26": "5d5BTq2gLFhmPNrhv2mLqmZXdtzyFEzunncHbnfoHpwdfNR8E6PaQ1a7dmhhzurRNXMDC1VHDknuwrd7dEnPfyj6",
  "key27": "4Hj7xL3QDhsEeaRSGHBvhEZQmdaHyjcdcn9ug3sYXwmawURKHt9ToP6E1dbkYCXYb51hiHCrEiYrP9T9bTB6g84R",
  "key28": "21hCi7f9MSJga5AvutSL6PfBymncoF3Y4JiinEYxC233QYRd1ReJvk9fDPU7qBMuR4j3oeFqY9mbGdZZSP5tBy7Y",
  "key29": "XxLLeh4f6VFkzsgCpfEF3JNLR3a68wqFKhLv9JiHVh8bkw3DdQ57izAsTcPuXqHZKAzfAS7r4YKCX6dDT78U8aS",
  "key30": "5kyyTpdEHcBANk2nFZBq641i2W6kNuqmAiRpkYPcgdRR3s1QgjuPfGqXN8AACu3gW4WdTzPdPHXWRa9VMnyVQ2mf",
  "key31": "56LNDkCjgG6pdWkK3p9bp4h91C8NpeiFoy19XfAL3qdx4veobhSyoRFkg1CyC3LF5L6N3J7GNuZP7Znv98cRS6PM",
  "key32": "5tMc6FVf1BFNaVtHaLXbi9bQXBYgj3Y2GRd1dXiUNryx5qYxeRVeocinpPy5nsr2B8UmhGSGdj46NvPpT9abK97y",
  "key33": "5zUvLjsXEFgQ2QB37UcNAzs6qabpYweMFwj8VaAgCxcxC9GYyySqzXTh8umFhb95tGuSRYUjA5TwjbuCHY9V7cqj",
  "key34": "65Ff7gUs7FowgFmHXeRix751wcJhKiPgFhAuqe9f1MGos9GVtAZX5nYvzRKBsVbUR6qo8ffuB5zpgQA4UqpdCoYK",
  "key35": "34YeYTjYj9vSG7dt1fNMeYfp4AiDrm1eSArd2ZCrj5C2ipNjgf2p92XckUZi3pXofoqLqx7bFgBfBT5ehvh9jc1j",
  "key36": "5RGspYtb3bMqsa9mAh4knFyZFr8Kp59BpYvxy6tX4NTwWs7ob7LVUm3zX1GHnMqawnd64BoZ79bxoLSXijVjCbbU",
  "key37": "3QfZKLXDkto6yq4oXK4bRDgYTwhs27YS93wtjixaBuuqVVfD7so5jGyHpK3WVdPG4EeFTVxwsTTeYkj5BTUj3eGM",
  "key38": "494cHzUwvfNTsLozbA9g5SupV3CZiTHiF2P4MSfL2nwD1Eo88A7zrpUvRYzuzA22U7zrZ7TzCNgRVp7Wk7V5gWb9",
  "key39": "2C14m8FPTaG9MbADm1s2Tto7Z28jEksSuv8nwJ8WyVYpYaqA9ghHXokcdLXzNUra5JKoUq3qBVrifSQkVfxvRu7L",
  "key40": "45K2sCuGTcgcZsnmy1rK7GoMadPxBUnm6xVsEzChNvJnqrryaoFbpNEnowbVhXz9xw9aQtn5eJRMD9drigZwFDBj",
  "key41": "2Yjq8jHWnshEBnNdCpWN5RBCVG1UTRYstMcbVhi3a5JEQYSZt3rnHcDfZ1x1yBYVmdr8gsBAJP6Afb8eZKcAnQoJ",
  "key42": "4iFdW5AnMZeWo1r6hEWudVjc97QJtLkkppD2AAksKofwfjFkgcz3hmupoR2Y2yvqicUPi2aLRr9QnFfazqSWta7h",
  "key43": "47U836mJguwNTfqmr7oAwh3P8UcCNE37hxdB2BRfxAMYMhX48ubmS6StPPjrVRKMFnuHqbtvnDTzpU3f8Abi9oZL"
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
