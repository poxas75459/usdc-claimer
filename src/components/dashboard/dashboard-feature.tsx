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
    "55wMt2iMAPS7Dh93Q9rwFrrsSAQSKbZ4pxayPipELUD3kQsArYerBha5dipLJfbDPYkEiWsjbTxtxrSNTVBWv2W3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJXEXPzFYGLfmL94FdLQrYf5RovyyLTV2fzXpZ3Pc88FGA49AddUpBXwXoWjq7rn1SPVnqo1bxVCvu8r9Ak2ucc",
  "key1": "59Z1XucVgbJ7h7DBVFjcjJAPUt2q7Qg96mjNKinjMp9ZTDrEwoDLY9GspNjdqBb5BFx8echtpLRQgKG7XHRLp9Ch",
  "key2": "66HL9HAsDJZR4t6fcUMyHAZuPx4zTT9aa1dm5NnE2x7TcmqDxE9kcpdg6Bj8skmqkvcizA3Bk3KL6ERg7mwcvcMy",
  "key3": "46Lz2A8iZYArPxL1vEiMK2ATxK8fUUycrLhRWQQPkW7WWUaaHUPv2GSuSFUc9S35QMDR7xwS7WsxUp3EVZr7Cdxn",
  "key4": "41Jp3yeMTGrKyaV3oYn6VgEdDXihnXDCMo9u1Vt9syfqdHVCXveEAPM8iA1s7Nh8PMn8dRQM2w7n4prvJJHToXCP",
  "key5": "2hdg4g6DQRsTuWHofSMfpJ2UysXckmsEf4azjpRACN4yUTZ6eDmgP7q8Lcwtcb4ToWZjFMVf5hHqS4MFuTpGxujf",
  "key6": "3cGk14gQRcHb9Dgoopy5X7UiVPPfx7fYVWciFnyfVsjDNWcSmRM33bGh3U1exNYbZZKPZYGM6bxMcnxTnijTFCiM",
  "key7": "2D9KFyA96d2aBNKDbVataHYTLF4EWJzt935y4dnAxiWJrNrE7NhCFqwkfeDE69NXADDW81bdaBfQ2h8NJvEq3V3h",
  "key8": "EamuizMNfsoocaVcgQauFoBx8f5EJpuSeZ22rEbz2wJzgef5x4miMrHw8CWMSPU2DLRtxShRetod7oaEBMs3Tf6",
  "key9": "2NgYSpCJsz1cJ9UhsZyLqnTmYRTdEk3QTAMrs7kHAgjm7QCzYsWsSP7Ef5GqJim8FJTQnuEN2Zdbf2UYqKrP4HGK",
  "key10": "tRBXDDibPWYA4wwFHzm4qK5YJp6uu9WVuJvw9dSwKJBX1b9cc4YdhYypyWFJf4WqZ1ygqYTnahFm13VjFygejg1",
  "key11": "63RUMPDyC4GnhSFVF4sFjqoAzWZyq6Z2YqanxxgDcywLP6RTR1iifsLaLVDBW2eses6j4od1QaPNDUw4meWYYEUr",
  "key12": "2XaqQLm6Xa1ndf2AjgkCA2CcrwUB4jhZVZ4UUmWCYavy5FktgCyu36vTEwX815vjDirapVSJCEfwq1cxD8rhZin7",
  "key13": "xw6ZHo75ctswc8qvE7BF7SyviwnLuz1FUMTxmKFxLm3uBf9f33yV28XMq176zmicdSA9JgtXj41r3fsqM3x5ucM",
  "key14": "4GSnauCoMTUtLvyqKdkaXjgTwbT99GENyery1GEsS5qbq517JmmQsanz9epXvNspvQ2j6YQHLMVHSqhazWxwoeJd",
  "key15": "hiLJFd8hMvSXrH2w1uRFk3Z6R8tjscwLXEadixwnbFNLzNzqSvTme6zVZPMbc4ariqHdNkdiYZqL24xQC9LRGkP",
  "key16": "4vAY3fLJmXu2sgPNYo9JzhSHN5iCQuXE9T66zkHT7ojpit4vKegtUtVyxm9Yiwc9MZGDDdjfkwmDWRMKbcNS7fPZ",
  "key17": "2WhCrtgCMpt6NS1VeYEkeUVhTw23LYD6qe7otmG9VvULd8aUXN3mbrxDWpahWa1LBW8k3WyUj4eUF4GXq4TsnWL4",
  "key18": "35cyC5VWDiHnTjcFX3ATGzcxbB2xMgNKG2WmPy9e7iE5EWKTRQpaMbkxiAXjPVo3sqJKwGK82PvUpHhQ83r3vGLs",
  "key19": "5rwJ9QNsphCmf6ktH2QJ85afYn5TgqJztoeP6BVM72n8Z3htZ9rT1bDCqCAwqHWwHBCN3FJpn2NSttnXomahAFK9",
  "key20": "27UqKAi3ibCJK97i9cJxdRPWChp5DpamXz3pfP3LbSUE12ENrTrDpJdduN6eyzLcaxjz2kuvJmPNAD9xT2naxFzU",
  "key21": "66YS6rhL5XchGuVVNqkDRiA9P35E6FbNNyusEVYgMFRmx6z9pAKY9vYEeoVJ55vYNyRDMgeVX35EGVD4FVzXb36X",
  "key22": "o9keVeV6jaF17ZzMofudHtc75xs2dnmGummjan2giDTM7RjpMrMNqm6XH3BmTEL55SBvEo859gqpQDED3rZeN3N",
  "key23": "4WUGcsw1pt7CJAgH1M8fma7ZLUg9FtCsLzDdy4tw5whNCiZrUau1Rb7NkZqdVLjzS62CXNkpFdSVazrY9ejsk2SW",
  "key24": "58aiZcMxR6mRq3Mj2dTgVrZSMRjh4TaMRu6ofuX5UJbjq8NxE38XMQKpncL7MPwCcpJ1vReq3pVGpGFhCgpBB9tp",
  "key25": "4n3x1wQj6stGs92dcNut8VjB4auGaZKP8D6cmPMaGYinjmgK9X43yUiMxttbQDpjFUXexAAWh7fH6EFkLDtZq9AC",
  "key26": "4SJjbqkwUWLPA9SKwhztrTjyJZ19iRfBrUsNG8cTkx9FAzUXiNejk31rgEtRt1tgZFd2v2hG7dRkceeBXG3MLFME",
  "key27": "5eMVCpJR4DzvDkf5ao1mqVZVKXQja1StM6bUCuCvZGZgMMSm94zJLNwemNKB4WNTDLiroqVKR8b3aZC8t6U8Hovd",
  "key28": "JJXo3tzCVjiXFH4dBnFyFV4gneM6tXjuRXugwgmJFSwrVBL1FqxtMd1uh73t8sSWwtg9hn94jmnw9hb2jVEdJiP",
  "key29": "ZmxfVcmS8ZsZH9s791y5Eox26oK9A4DVnTQAVqNK1i1Y92BD3BirBwsX9vQWnGefHT5XM6yZmMv8WA1emwmhUM6",
  "key30": "PMQc23AvuS7toeebsJS7t67TnNnd6FvtJUvg535Maegc1fGhRmifCiwPkCWqaEYB1FkyTJVtXTaGdkKoJX91Pqb",
  "key31": "VGfhRD22AmEaQnd2TcwEudb56A4KKpEWTUBWaZyToitAMEUvEQcMCerz8UMDVgg5ckw8Y4W9vA1PRv4imBYeqBG",
  "key32": "37QBQiuHYW9DM8nbnhmh6r3JW2ookwi5U3kDAfjq2pEypFtMmALtN8wJeb25rcXDRnQ4BpWiiMDVwiDrxWbJKmEY",
  "key33": "4DsNBhnT6bhwztGFyzuEZSp36eqc4Y2DAteN7VSP9uMPNwUbxKHmDg5WKSKSTKDKxyCEhdtEoyUKs2PFYmi41kPf",
  "key34": "2EfDkDnHzUvMpcf8GaFCfGmMGxNirE8ip9qAyWV2B7uDmM6K7oSmNFZfF9EwPQy1novJLQqTmB62h3PSWYmeiDyS",
  "key35": "3EZus8vRRhTCvQ1o1pDCmKEPnxddVVzFDgyH4bXAi8drNvTfbsTw8UuFbn7qbXxYtWQ3HTjotBavu3Heu72FDLso",
  "key36": "44RaPhG1CZcWEtrhBDiU5ihwRKofjYzP2in8C1KyF1UECUvTACP7vCJ5G3SRwFRDkjNZTiVWDvvhTcpHs63DtMir",
  "key37": "32eA2tDe4aJGZ619JhT8yebxYbsHrct4qRPVoq4ToZ7GsnrCgZEpNsmMZyRMpaVzG3bakZhbbyixAN5oUPCY1Aoa"
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
