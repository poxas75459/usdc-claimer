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
    "3ECbijgWMHVcw12Zy3sGX1E4CuLjG5WQWYgmHGNNBtzVGgvgT1ArQPw3vxiZ5ST7D3yK7jKuMuFnMU26B5rRBkBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvAca54vaAof5ba1Q175aBnbKs4qYxRR2QWrL6tXxe7nkTxP6Vy3csDt9U24hYYCzRfntjRmwjVacqVTgsuoBEB",
  "key1": "3o2yt3VgGjPTgWBJMWUezUpnrtyftnXAtQoc8LrdRuo2ecDj8BhPvRw9MBCdnrqK1AULCSUheYrQdPGPtAvGULGK",
  "key2": "2GMWV3ammC1iNpwofFvAwErNdnkYfnrXKWCdjD7dwuHpNMfk1Vfu7YefPzmEx9s1Gxo5GVM816bkWR85HZs9SKAm",
  "key3": "37dBV6mguNpmWo5FTKB9E2Hq8tmfHCkGRAp6ANcjFrnFCLwruJxSeTh1U8uLWnYDSDwkiS5D6cWQ71ETJhjU4Mm1",
  "key4": "1nXewCGJ4a6nRAM4kyYAwDZEnoAzCuEySEfVmfiQcH5iUUQitdMs4xQB4EtB6HxVZ8dEruSAibzhMe2VQtxEyaB",
  "key5": "3akvpyVhdhpbeoVSBWFthsq2BEwNJpzPAkNZGfGtPNBYvRGQkb4QiyBnCU9h8aTiJCL3YE4Cz5qqjFBmJnessxkk",
  "key6": "SQKkFMiJtSsEPhLoTmZrqSu36qbmddpa5Sdoz1BbNbbmfLZo3yZieLcUSpkheDro3pc5hKfihjAUCogXrD6iCyw",
  "key7": "oAU8TAtXxtHxtMJ6DTSgpM6SkKb44yLuGQyrdeDUjgntXbjP4BVogpETyjepcpKnKacpmoxw4aheoBK6nQS1DjE",
  "key8": "5R1xrZ6AJz6hqsDgTmhhu6Ra4ZQ3hdYGZ4sYddZBr45m6M3qoj5JLwG4nWw3B1ywuozNQ89B9ngWzzEZtLnPK1Cg",
  "key9": "3PpG34iPkuPFUEryH7ss5VyZ7CJ6i8Ycax61jhexRofG1XSJUZHsLC3o2PuQpKi4zzidM9qJPyc2BgTkQDxJEQJA",
  "key10": "SvLqvs8nm3dfpfWu4beBoKpoQPmf5XkXJgSLmW9E5CWZuUfvDgojqACLW9xwNrQt5wT1rdCDkE9AMGTM2VnnnnT",
  "key11": "5DeAuH51CWg1Kr6K5LzjrfJoGyQxGjaxWNjq7Ymz5wLCnqMUozNrYhujaN8Tdefx1e7wyq5hW9tm4ZzdBQZrn6it",
  "key12": "3P68h2AQHCW8ZQBNhQn95wL186kXU3fM4K2KL6TiAf6K1BDeejTnNwPRoZJM88P3SyJZAmCS2GabZGrWMHZaM5sF",
  "key13": "27MUnkiQsDWsHcgcCy5eKEAHPpGQiiwgTvBqe8MxcyMiFNkmuKfzEFqZz3knZT8kYs3DC4V7nopnaP8KShjps59k",
  "key14": "JmFCKiMh1MNyYfcGiCnpTDbHpj7Jmo4dMQwZJaZ3e2pPTq3qd354E66EmeCtM6j3q4T38rQSFdVz97BqczcnQkb",
  "key15": "5PbwC8zeQViMSJoZcCay3cLFgjDzDBKmYLSj6DxaB5ow8KirFvdyjZMUgBqGpy9gXSrPCGX6kzAWHJfGB7wkyGRf",
  "key16": "XKCPPscSKmHeDFZD85uCX4woHCzLcb35MNLXcRVXWCcpkLsZ2S4jjuWfnoPWFj3FwPBveyS4aKUeSdGz4t2GDqC",
  "key17": "586mQpfezTemukEHY9Mb4WhVGkFk1mzcjpiHRC6PGzmdpa1i5WUGgEfjT8VCfRpuFoLdFxjCV1VGudeCWnYCccbQ",
  "key18": "JhEiVUkPgTKbbFYxo2qBAhRFqvp9CEbURXZh8E5Rt9CHmafkM38RykAbmNvPvoUKJzyMvQ1P3CCM49fWtZxXY5p",
  "key19": "34nio4ECL7LoaZZCYbh9ugi6yzntPutAzeVGijuaFbtNR8NLgDjYPTcbmPRcoPjUAZmS59z25N43NKHJk2Qeh3j8",
  "key20": "5ZmA1uBd5E2gXmM4gbXwHYESw4mEVCu5Rr4V3cN7K3aYPAXSApaicxRgrjzS28tdMazKrKEAAcQfgLyJB8YoPrBm",
  "key21": "31Zd3BhBQNyFm4Kk9WgWbourqQUPVHS9goipsFpeBKwvENcQyCy1XXCNmt6Z4BQGDm5j9s9U5zuSDN87m6ehZ8PN",
  "key22": "2sW8bmLwandtDLG5qTTJL5GjToyUnE87MC9TmxZUFhvM5YqxmTjtvuAU7Yc1wPzDZ99BeS4uMhH5uV4L5PR3D8J7",
  "key23": "4xTRt5YwZzunQjMkBLAd9LFPKxBMhLvG36BJioupm87JHeLBzH7Gvc5xJmVEhsfC9WsVFrFQ6DE4z1pxEpXoWuW6",
  "key24": "2f3qHRZes53JzJQQxD3PtrpvP6QtcwEMgncnr7YxqFh6W5K4nq7zwJ1EtNKWE5CjBnhYfZSwSMXMQtzvzSz5yWPY",
  "key25": "TnWiyDcDp44cRGG5EGAbyqe6rVsKgbEHVVxfK8c2N4tqqhZ9W3sRjajdx5asskqK6ZNbzCF3UsUhBqKwcbf1CQP",
  "key26": "5NzYGRGuEBiKibAYoYMHQLtzzvegQ7EyiA3TAxoEsQY326G9vxcPg7aijMByq7YzxWJWUfWUMEtznZE6nHv8BsAF",
  "key27": "212sG4hBN2QHQK58oCqCgTJkU4Xg3jiUFBAGH66MncmHWGxok9EXheFxjKwtShQuXWwxJHVgTgogE1ZFAx1eG9aA",
  "key28": "37yuX2vVxhXTV7fZKizkt7ZHVctgjj5ANjm27SwXSwoVa6xzqiAY8HMXJMEfnZ6hGYWyMRwtyXNCH3JWeSP4MFTU",
  "key29": "35Eg52MoJcNVYKxEXa9cGjypS9SZxcQzKD75LneWYvEtNTyGtxGduC8bNt2BLTt2qMXTiwry8PTfV24ZTavZ3C9k",
  "key30": "2fZrrxjpXKJiPxLGhtoib1jiAq1xWPBy4Qtoni5CHqAbiC7UqdpVQfG7gj7q1Vbe69TArqbyFu7UrVCzVJGti5Vr",
  "key31": "2VnnKXtT9TjwurddP4QVgxqgskwd1w9F1N4DTgNQMpQuXsuMd3615FA7C5JkkVAUF4jUw6tzpTaVDEyxLuYDD2tM",
  "key32": "ovthqsAJ3zrtErA9HptBiAuYGRn5dndvGg73uxXtRUR3vPSLfoTuRqniHDGVxqVb7LsmbHQ6fzDGWf3U2eumbsK",
  "key33": "NmFvA4sHztnVHQoWHdi1uqh5ejwSzoLZr2hPYdjeJShuaeuGPDTeCGDstdVg5wFncSmtvxxeYYAJMTFwVMMykP3",
  "key34": "28jJGsuh7LAe5km2rx3BgMnGVFgcDDGakv7GeJNe4hWyjxrttJ7RQ5K6dFpCEte5F2LHde95fy82Uo5SadMAxLkJ",
  "key35": "4mwCQCaNDzCp1o7Zn53RH3CRFeWs4dAywZxmKiqAEzbNSsgNURsQRRjAfHrJ2XM15BzSm9VsdzQozg5M3R5m2kqR",
  "key36": "2iw1vYT5wKCTTjqQPkn77HPtevQF5fPvJqcg1C1pMT4o3yfRfgAoyLywojbKCiN7umorLvBoYqnD49sV8R7M1CFb",
  "key37": "m1j7imEb1NtUD2M1du4qcfjV1S3epRstBKuF9wtqeaBo118RFgVanjrcR5MutQR1EEWMJSymGN5nmjJdo1FUign",
  "key38": "4sjqFVmw67ZEMLtBB9sFFRW8vheUusAHrB2PWJbvkMaprrFecy7JFMQPUAsPwYercCopDEjZfcCsZU1pMuD4Eyp8",
  "key39": "3bmEFEygBdvkHPn12ZsTY5kv9ThXgQoCDbvxp5B9tf5aLBGSyhfv6UJuV2unYVAnJo3bUbF4fKFhfbkdu2KX5i6A",
  "key40": "5uYZCxeVvxdSpL26xKDD3GoSUccAiLdJ68XbZGo2sVwdGQ4gSpAmRE4u16dN3YDv9WPU8qPTdfSw6efCseKQTu1J",
  "key41": "28AAF7honxqiLRkL7gHqVxXbyHdTT2NPTJpxk6wmknYBYFLNK7BW3caKkdLrgKgaCAnDfwNEKGhUFdc2mkgjwS3v",
  "key42": "4FTeEssaSXrNvwz9wCGxBPKzTdgsq5yjh7sj7uCBzV6Y4QkXChHYC1DYyXR8dLVp2SK92vuDioe9X5taGW5cQCBu",
  "key43": "5Gmje2PrNDjfyKBdBUPRhc9VJ1ow8ZK3DmRjiPhbhkkTuWE66T64ZKazRqCnLaXA85JkjzsQgfMbDntpF5Wvw2MC"
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
