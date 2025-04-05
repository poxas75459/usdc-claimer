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
    "51Xm6bwzeTWtMceRoqwJQjdEsqCRGCV4w9yVXjhYcFMVH2VV3Y5GZ5FqfXvvMZMu14sX38LaGH69vFDwhEk8YT6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dH9zzwGAj3d6XimpzbtwEwvD7bPwjVXrf27vfXzcWVn9nsVriGfiNN4TiEMKdK5K19M4nz1gzMhACTyqESSerxR",
  "key1": "2LzUossNBMtEnY2RYg7thQKbjRhKjiEgCpHZY4PnyqoadLpnUUVvTfXk3njfcn43uJZhkGKNdh13EpUWTLWqDUk1",
  "key2": "3XrJzrEN6kQHPZ3gqtWiojidPBSKLKhZ99kEFDh1byccQ9Pok96Ak545UkyEnjxUdp2sdbZvwKjoGy7FvbWNFY1c",
  "key3": "2BVvzdZfmyA7E1NXaZDphx1UQYJwzthd5WV3bfM17LeJp7cWSioJKsUMHCBDazVJ6RAY9Dv4jfNbhYqXiJSgb9J5",
  "key4": "43gZG32DCW2UsxMKGxWywWyMX7MFnZPGDc1gPLdwR5EmhbhoKMJUrxNcvXXKavMZPAVoFGfmTWmqb55XyaNEnbEG",
  "key5": "2iZnATLiCkcYq2gQMVG2ozpxwqnS9FJVtS7WRCFcWnRR4gBr74utXt7Z5dD5aYkEg8AGKMLYuMZPFtP39cFs2mf",
  "key6": "38LyESjAtQ6ZeuyV2oXcEzwfvULbTV3goPmtTx7e2Dy6vG2RavP6r6osVPZRngPzVVNivbBbY5PSTo4RgPRKUR6P",
  "key7": "2KyU9WjT5FiEHZw4JNd9XtLm4uR1Qotk4bHW5w3e96A1cX8ouaGJeBUMyJ5AskrmDuo4FWaxpjD3RWzrC3E7ah7S",
  "key8": "53AknKHrbq2mMyG32Zs87yDqpS2gPhuNg69hVadfjDoeLAxFo1Brz4hsdabCf5ikdwxsw2PZGoBzpatiKVvTJbTM",
  "key9": "4MwGGpXkXnPJ5acKArSH5bUMN7rAg4mRhHSfjoAuPEaWp1g34Qt5mX93dDCPtcmZpxXcvGZcH1iNuXB2k7Ywew9P",
  "key10": "YpHZxn42HSie44sc4CChRxcYdqWwv3vgMBafB2rLJ7vkKNWrEbXSm58Ua48ah6JqRdQd4CcDBPqZvAoTMpkzAyq",
  "key11": "2WgsXUxCGao59JXKNiDRpBEzMH5pYKDmxJV2Y4EpBvYENEkEC1JumLW4KGt7RfHorCXYvyBgW3UwXYC1q18ZC4uT",
  "key12": "5Prx2dqk7jFnoBgBeoACRMGPHBXJJ4gyBEAMpB5tXn8aZzwZC781NtR6Jdd5mGFX4KMSVpNWqwDePjoffYu4AGsz",
  "key13": "597UPtfZL8PnFxerCcvzj5CWCDEXHQHfkuQSUXMtC3UbrXZsfLz4Mtca9KXQqRqyF9jUpE8f9oGtDqhdUf9YuAPG",
  "key14": "5re8Z7Gm85u9h3TZWq56Z7LdjswtCaHK61JeyWCRcecmsUzQBi8jAgYrLFJTRDdiqJf5p7kfP3wDefD6XFyKybuZ",
  "key15": "4F24bPsuvqkMdqMcnLRJAZcBBPNfwmBpz3ox9QwXhDRqR8wxb2qRN1yrZYJwhaHtt3Td54Z92vGbvLw8RG4qXknA",
  "key16": "4hrot3hGVwoNeiYdJbQrN53XoBuTUpDTVm5Ut4gc1pfEsydFbasXv8RSexTw2EcBSZdtrn7c5AS6wwr8wZcmoBKt",
  "key17": "4QeY4PtD791C4p8URB8cuPKtSzw5UHH4jq4SakpDL491CNegJfRhtnfvJfUPUW54qzFq5F6kVMfvPPjnrTwRmSrP",
  "key18": "4GoqJa21KGdif97GWZhbkRHM5jKiy5RkDvLjm7D9vJuShzfhtptcUqK8D53qGmD5k1Nxbjs3XUR12XzViwDokhZR",
  "key19": "n8chCHkXPTxUQf7kYXRqDhXzvkLei6LjGK6Qtbe22EwHKy1bJy9HTikYszFo3Jf4mT28GJATeUai6owyVz5uHQg",
  "key20": "2bPWU7KjhGELmYm64TkycowedVWa35Pe8jYDFVi2wjz2CGJHFYzMfui7TWjEvHsnoSmGuJxqGpqJnwC2a585dRV6",
  "key21": "3duzvW61KtPgHwW9mZApoEWHTvStYQuFqop7HqtWJmgm1k9sfiP7Typk9JHpqAXniKDW8PQsESntDzzo7X2vFNEX",
  "key22": "5fPevn4isJvJbvDAH12TyqCpTsPGcnrW7qeCRKMQh6BbYA4yHk8ZW45qmp4xgqsLekExwG1wVcQA4Kfag3jbk1er",
  "key23": "3Xw3NCeyDZjLLsShY4o2QhDztry34vWqTuWvBi8UnDcpGNyVVfbabgxbHGTUHyhFdmP7kR9pr47VyXZa7qfZNhgi",
  "key24": "41QKo8D3rrp7vT7GZkg4UsunzU5j89RdymC6FYt5MkBsLfwABjg9LGNYLJpeFj4Cba1DxugAWWpv1xwZoKubMVMp",
  "key25": "5wHEUT8oXaZYL13ygnvFvXa3zRX7zwEyxFQsZr8AVzCBGYrDyJw2FaXoTpCgW9oAXoiZmK3ABQQrZ6KjszZkqrfh",
  "key26": "3HtvvPcEBgejAvHErwAzPfZVfTDEStPPXEd7Md8vhBMo5DAkyHUdW3XorCKdyqLyWfwfBm3F2bQawS5sja73kCvd",
  "key27": "47rxerkCzJuvXAzSF8ekgS82My8qFigGiJ1z26VWhmWfiRrDKaESu2rpJAvaW2WLjX5T4M93B8RuKEYvWZeqKGhT",
  "key28": "2TwLeryyq9uJv2cGat6cATUN4aZh83kxu6661pWoEmXpyg4vdv6ZzSwZ4ByhptYgxoTyEyQLnfFNPSRshKeHkvty",
  "key29": "28A1FZTtP5AvMNY47PH2DPNeGtZTvaQGxso5JjyAxGbMa3UzuBhPo5Rx9NZA8jMgyvsxiwHi2FghkPeY8EGtgt7J",
  "key30": "PTXKT46f26Qxze8vcbp3BgfTgFoXPHeXChwqpHbSZLTjVcWvBm35SefuGGsoRRc7JfkHdVakwdaCTGuNs3V8qkx",
  "key31": "4ncynyqoR8iiVU9vgwWLsCmJXjbqEFtRKU4vpvTMcAM7TR6o1HbrDLJxuibZ7PgnsWr5s8kRPcPCvriKyE5fcGN6",
  "key32": "57ebuJeAKX8XfFtEoMGkXPMMXAtD6MHyU5CJ4jBoRcZdZrwPu8VjqBcaWyruZMNZ74o622ugpXnH3KDhFKyKt6JZ",
  "key33": "234MFDX57wMY7sTm34RR7bfpdYLwGsgXV26QdUseuhMHoyPtYcXZaNHJVgSh1hFEUf8nEBznAC9RPH78V7n1yq6Z",
  "key34": "G4UQKNRFJ6gRNUikpFvumNZwZu1s8t167Y1XoZLkVLyUSPs3VL8K7Ht78z96YN3forb5SMfinUQGpGgjCvro8BG",
  "key35": "58yt6DSXgZvR4VYHhHUENt4RHNDAbFJAgKCpadxt52w4JDoW4oUUMJubW4avcduKKSpYyTjHGEL9MvoKKaF2JcYu",
  "key36": "WAixe2bd66TEhfsp7Qxuy1inXW5219RmAWocDTwm5rFGgPrgdrifFJd8eZMVPJWeBJJR28ofVp6cYS7m9RZrkJo",
  "key37": "zp1S8P88hx7JeY6TRkNQSCNGEXt46p7mhMUHjzsdYA2Z4Fzxv4ovYpaMEtMr4KnX2GuiY1wP6rbyGsATrZGxHLk",
  "key38": "Rqqo79z6dPgTB56fqhY6s343WRNzcM1eZjPCMksd6yXgVzKguS5XWMwdiencJ4aopFKeMd3dj9xWtg6Cb4xcpGs",
  "key39": "RsMkcNEPWTUXLzcabkKTX2UVVpCvqW6Zqa9QTVEePZ9EUoGfxdCtDxMyFV2SCsCmgFBLkuJdSqQ4JLQEoqypFi2",
  "key40": "4AWXaSvrDXF54i1TUakHxB5FZvoCgc3Lw6Gd5ywkYLiqoru3NRqW5xuNxiwR3Kbnb9sAQuYTrjwu3ajs3pRDNnxH",
  "key41": "2dLtVEQkNB7yrVHYkqyJG34JcAPuUB28BPYa2f2axiTBfV9qaadXtdJCqk2pa9wkV4YEkNTthD2qBd31Ro8qrBjR",
  "key42": "3eJjHpnUnUtENVpF7HYkC8NQWNoJqcCxXxT9AEoyx1gQaYYheu2Zt2eTXLVELM9yc5FWpWQQCk2tSDJMcLJo15nD",
  "key43": "2uq1tSfAZkYbnCW132y1XhLe8rxDTh3FGUWVbPxGVyFKTv24D5WDXC8b6MhF9Jx4QGsTXnSHxyPwyKmoiiZRXU8j",
  "key44": "CdJtEN16iodkiiqyqjF21kTLtHsyUcqBZUV456Hr39ayFTjCCHY84Bd8hMZppG19NfvrNY8ga2qDzCm2gN7otFe",
  "key45": "59xLym2jTsGv6uCFwv48Nv3xTkPV4NLMtmfEGoqR5UeM6X4ExwRmNm9ECYtXzpoRan1cdBSm9CfkTibBpbugjHBq",
  "key46": "aGLfaPPuhdRi9MucfMDmWkkYTpUS81vNWy1CJ9gcv9uikVCsNzpYbiC1Cu8M7HeQnePDj6MskYrhH1zAFK8T7ry",
  "key47": "5vEiPQcwdW1U7yJFJtVYUe6YQjV7b4gVHaUT5WXxzEeu7A3eLaxQLu31LXkx1YP2jukP85ohDHnx5b4vYes5gZ4N",
  "key48": "5gq4tSP8hYhG3rXpW6CUZESTRziK9kvZSu33AqVbsHSc186GYZWgG11fd7i14ujQRF5FfbXMKkLmeNHjLiJDgkWu",
  "key49": "2BWLE7qJGb4fSuTxWmk9JtniKmmia69uXq3Y1Rt7iMPXVPd9dfJ1aqEV2BxpCoyfin7yPnGCoYqHj3EQN5bf1JdL"
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
