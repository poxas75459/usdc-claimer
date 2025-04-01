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
    "2RuCbVhF5CdmiucY8hPQojJENGKKBDtybQjAwBm3k8jfmVQjpVqdc24a5BDPrggTDhmZ65JinSseQQ3ERBRaENJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mUPfxGqbijavXwc88JYK8iQvTGzG5H5oX4xwVW5FyjrYNGZNG3aEnGEjiSDaDFK8pczp56N5F2PDTfJM9VPb4YS",
  "key1": "4KuHZfBYghEUSgSozudthuNPXoKfAzG9tcTTqexgwxV5NJpoaTdaZGCvPNvUJj9CVZc6zuqaqb98hsXuSWTXz9zv",
  "key2": "6167ESvBahEPeFbtPbWDc2m34jmoXastQVsU6gtGCo3Dcqv3KsE94yH99ZpijwKUA5RpuFvJstuwYkHFWJwPtmRr",
  "key3": "5HH1pcrLX2p3y3tUsRN2otAUf2SeexucdDxCejBAXUduCUQF4PRdfyAtfvosTw5JSQJh8eyoiZU79NpsVCEpG96d",
  "key4": "43oVEiM91LHVd45Lyw8e2Gy9GpJHVp8K8nMLMMyJAgSM8s7HXvfAKnfrbHVSLtrLmKML4HiqdM8nonqkzL3gCCrz",
  "key5": "6DKjJTiFU4aVS3L2WdYcrxyzEsMZnpeR3qLzAvLWE7po2fQmLNoiKBCZjaCJSkBzMK9bgk6Sf6A7QNSzZXXPMHX",
  "key6": "2roaQRLHCYpVvjFgXxU7vJTCFcBGMBK4pAgGdx6feBU8p2xLxkAiQn2iB2pR7vVernreLbB2zUPK1ZfaSAQvxPiK",
  "key7": "fNsPHj3ECFpL6gCiY7C1ThjtgekxAGJKd31us2HDPBJdciFyhzGyeUzJj4afdTkdSsWuE5vJp3jo7CFyD2AfoMa",
  "key8": "5BL948iXmCiKXJTNcV47wKGDcfUnmY7SQXRTPmGLNZsYkyNdXkfgxHsMoKHJviJ8F9fDFa9XxyhLAsSxaN8hFgYc",
  "key9": "5EGo7ZrtGtTkMEhjngQ1uq3j2qmh8oykdadBDGBmcYfN4ffjWAwvZuKVo2xL6So4asq4z9z6CfFh1wUXmYFmm3Qp",
  "key10": "2PgNeRb4HkSBS44GtkLQ6FqubeM8FB3qZxNgGsu7cEvASrwSqtAv3cAifr68f7CExZQQ8vsTavUF7xNsV3oY622P",
  "key11": "5E64GjqG77KJyyTHwRBCne4MwnXwgycR3hobuK3sZEYUJrwCtNPBbB71Uehq3QqQdGCtkP4xSw3XNxAzmdszztWi",
  "key12": "3LTdSbSsjRDw3x6ocTZN4pQsY3fCBwHsU4m2Jr3DGwBt7nozC1BSzMTmvo8aNHkRczP5wBjLw7XGqmtptbMBDJpr",
  "key13": "63xugubXSGjXG3Zfq4ky6vDttQcJrffjTS249UwDiCu16Hx85pT7J3F4FF2z6FnxmdaGLyRyMAPRvJzuKECBrvUd",
  "key14": "4Qcn1SYL4TxvLz6cxNkuNSstjbzsXvgsCsfgz2iDktfUdr16B2F5aK73L9Tty8d1cZV2SWrwrGgJPRYnYL6crn95",
  "key15": "5tutmiZCfMh3Tb9AXM9V56Ng56xko46mA1PfPidSAUXZrZfGkyEtBajCkCZ2193hLPDgEiPGskBpvowdsPe9M85u",
  "key16": "MPg5nTBUSw5Mjriw5aBjWNyNfpnWWmp3tQLq1Mj2VSRGfvsnVt9Br4mcEggdYiz43Q557q2z5So1a59E7nTCruH",
  "key17": "nVvfAJeXaARXGduEg3TJL3psacL1RtchkWj7E3ABZhHzG4Ai3nE7nfxUpCy23p4aMYTYidZxhpqGp4RJJQdpYy9",
  "key18": "7ue62txMvyRijyoDGKasuADtpt39PHXUHhWjuYBMTA4QM8TEaU8mcAevcD3SWE7RbD3jzDbwXifeXAgAxSb7nu3",
  "key19": "3uJTcD95jEkmoxjdRM5vAcFd41w9EAq4H5WEnSD2aCHiHEtWw9aWGUS1srvp5JDamgVujzaqPczGRYCFT8mW6ZSw",
  "key20": "67aA8bu4vEXQfQhFMa5bPHgcLEHbJTSDn39e3KQVv3a2KiU82kb8duLjoUKe4ytJgdKDekNP5SMhd5BLRE3c4n7x",
  "key21": "4XZ9GZqvVEQZbb3Gtpn8UyhD2ryMp3w5LzWZLpt11ff9c3zyatfCobwfcWyt654gLJVHoZRQnK5xCEbMJM76eZkM",
  "key22": "51Hr4c2Atqb5CCQEi7hYw7H4FnMwgC4DZjKPV7S1A1ZkCRMxp8cPv9YrF6gAeBzBCHoGXfZn7AEHfXVvPiZtUwZ5",
  "key23": "3Nvph2dfMwJRgDGKiArjSt4gwbryJyGHPwKe7G7GFYibSaWQ12MAjPR73Va3NqE7RzydT3Wtx3FJRLxuMEVgaeSh",
  "key24": "4xU79gYfShru6oQSkYiKMY4Fhn5jVXHeinXDc7SpSqMeY2ubJL7EQ4VAoTFaB9n14zdiLwuBfN1KeEuBReqX3FEp",
  "key25": "2qtQmWf1RCjnUosRwQeukEWWzZ4hSuyy696gg8Y2rqq3hQ9FNx9c9S6rAMbabqMpK3dGwoXUQp59SuCqCs6Mkm6u",
  "key26": "5rHNXdA9xeXGkmZP2Kxcf88CSTfEhYrYRypFxpwtvtR58KN8Shdg9AxjhQoZHHmbQNDRWiwFKgN4x3kKqqKGeywo",
  "key27": "yjFtu44h7XY7h4GSdydsikrrtB3qdL55b3PQ6BgRUDt3Ycy53eioesjGHojgYFbpLXsTtXgHQ8BKc3DqJsKLtQ4",
  "key28": "46dCNumUvpJ6tpmGHAxCAsJNboXf2jZTr9qH1K6nrs1NE7FXmGaPDwP5q2ogERa2mG8ZWEDug2aNda3Zd494N9TB",
  "key29": "5GGspScsY7Sh6v9FK3R4dYT3F7QDEDwLw5EotYwPgGJmmLoFUbAbAHms1tWMXPgLSoJJ77SE2mjA6GD5au3p1st3",
  "key30": "45ZjhzxL6CQny2k3zGfCPMDg87MPLbeupwqsTCmfxgZdxuScBk1QoFy39KTSjAHXY7uYNofARMR9T9RiV5np7C5j",
  "key31": "3raSEnKUBXPNHtWxo2PZ25zC9L95CGqF18YpKPckxDUfpEAjYe2K5UFdSCYwqGmDu1pv2bjm5xJ1pJ9qqVe7c16w",
  "key32": "5X5vrjYybZW6Zhog1i949SYm27zLSBnb9UEzWxGviAXwkXpjJoGNXzd2C6d4M7XfwjpGkABTDan1zYobQtDeQ2k6",
  "key33": "g4zpHfbT2yxxNvv6yY8VtSR18JHRyuy4fwja2cDQ7oSFeLWf6bQYB5oJnwSQ231bjkBRkmnxvssiCDQdpYtNpRW",
  "key34": "5oRrV4BbtQegoYZqtPcBxyq3ckwZDUdWUwqY9sgppnKQs4kedVsh44qqzwFNnsMdKtvKJcCz6C7nmKRNuA2iCHtE",
  "key35": "PyjySxkNeBt2JZsNvgcG8toQxJKbm4XHiUPG3uAhDcDKuqExT2ZQbyABevopNhiUXG5GDjbx22vDMuc9S3gpgfp",
  "key36": "4wJLa7y7eGPgCniuBPK8N75jMxt5ERkf9k4QUyBkuxrdxCwJCutCvaJtdQN2qWPNmUiNUXPn4ubqrEfV41ZTMN7M",
  "key37": "65eHm9zgMSoNPL8VLBkTpp3wQ2AD8vgzhinexaEMGTnAY687qBd2XQE7oDMttiZwRZP3g63yHogjNQGJCfVF29hN",
  "key38": "2cEp45Mi81vUMBxMypPzW7y4oCNvXHcewRkJx7SoX63jZUThq9ynBS9Pwu1H2VsekKihCWJH4jYm1Xjhey8YSTzC",
  "key39": "4CbrdQmSMdNH8ofygr7ouGUupeCeBxAXgX9FGrrrFjYGhufapQGA1hGqUArBuVUXs2v4TRyJrAcioKH72d3NrmY9",
  "key40": "5TVpadLa89DDYknPKsDJyYzfPp1snzLVEqrGebZ71LSd3qvFd85Gvqo4bovYGQjJzZkhpuE2ihknTGvcVPqHfyFg",
  "key41": "4gZf35Eua4CBytFMpyHZJu72ssdtTr7xs9VvZyfPx4u8p44wxCcb6QLSErDZc1EVQPiE4ojbaZcZSAh86CXu3EuZ",
  "key42": "3aMfhiQGDnL8s1ymthUkfMk2ALKGyip4yAcBZgVWEzNnbjzybrbF1p7arXM9QsCH26iCaMAw6wbH7haNWNXG2Y8r",
  "key43": "rMdobgsFanj4oPd8FyJXkaZ9WoAZoX9HBnTsuSbZd9LrwG3cyAUignwLhWhYwiGMXt94YvTr95Xn7CSQZ5r8Tzx",
  "key44": "3SrsQ9DjSfRnK1VyYnHZKNRWBzcNXEbHzhmha4XCDa9bd6gNxwqq2t12wVQcabNZod2EGw2WgaHqdygubEF1ZXQ2"
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
