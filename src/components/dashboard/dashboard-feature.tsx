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
    "57toUg1p37VuH98gD9XGC3XwksQaFc7c6vMdPsywa5dqvUTEJepfAYe9X5cV953oro8jv13DwjXHc4uhUZtBLh68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UUB2md9chj9aUCmykDM8YbMZFG9q2vLvJcZRWV9oHsucNHeaFc5ExszK41FGNXbaHZg7AkAQVsJUYpcJSYA6GbG",
  "key1": "56XDxgsHufAGwrNkYPQeYWFzGAjsDsJj4YH2fqFgXj39hj1BHWAkZMSz1meygsLBBZcvUGoHjbqXwddxnR29BAZq",
  "key2": "3YeCNSdkgBfAMXGnLU68DQ7G7ZxsPa1YQZjs6fF6BUFbooGuvTi3k5fD3ZPUzaUTtevEmNWpFLHMcFxvpymw8eTA",
  "key3": "5YFviVHjreFLFB5F4rjAE35yZd8pNZ2dsSJmbyhAZsNQYLaPK9gs7HaJXNspNevHE5aJgupUWKAnxKjea7wh3JNz",
  "key4": "Gs53cVjLDsdSnSHemXKZqdg1TtDyC7372Zo9MWvMCGRtHKz75yU81QrLbD5cvovFsSE8wtFczGDuttu5fDaMTW6",
  "key5": "4X7Hg85VfvwHwBuHeWiWBQfBo9bPMHmqnKrMb8toPquwzu9dpG343X6RsYhYYw1iE8AMDraMVUdCSeyfezH8ydGH",
  "key6": "4mTFmixyTurNxzudLwiD1hidvCjgvyBvYJpQRHuRgP13y6SK2Lcrg656CvN2DDiuvzQLbyXMpxZaseU38Ptn5uAm",
  "key7": "3tPW5KyDEjMBTZvVwHEKb2hDpAKgNezWNRbk5B1CDJzUwS4zT8pzqXrsbghsqTfvBW3YU3HjCs2sq27iERUJesaD",
  "key8": "5feeUK5qFfncKqfYVYZStr3t1xuEC2Wvc3VDYFxuvc8uAC6FPit9YE2HUNzhYhYWyHuScdmbu6iGw83zdJN7Ci3p",
  "key9": "4qbx9eHWftMgSXry92pQdNQ3381rZb3rGPuMCsg2Rkqwn1YwvFBXm5HamENBmXxsMJEXVr2BdXfjhULarR73NcWT",
  "key10": "3H2hNcyRBnLPtKmteFTag43H4LF26kvcrzP9J67hJrfY6PxYopGUKDDFTUE9RJ5bF4MWcya9tsRQwmaAMavYUXKT",
  "key11": "3D5jh9TbrGhiiHH56jgv2SWH54ps4HmL6xgfRP2pGnLt4KgNsh1A3QYUi7ukRFxaek9nRbXEjefoqHPspS6LGAZv",
  "key12": "KBUhRMPx1B7BqEmv12cxcAizihqetU8oZ3Kk5dEqi2WaKdCxJRW3uTkW3xnJyWjo6DfgZLKnnXzYu4gTdGFt5mS",
  "key13": "3Kuanazmnds72DFL2c7PhVUkrvdpb5L9TfeqGgMUK6swKiEHsdrsKhmtQUXJPeuRrZ9te5tJxrMGRkNQ1K9TbyWr",
  "key14": "4rLo6mdN7eieWFT35Beei8XwPfALb4sqiyi7ZuQjitkEdWJ3mTSyDF3dthjcQY1csNfacHawkMHgZezWQcL3cJGx",
  "key15": "54rV8BVwVLz7ZSDPyxpnXSBGZ1Kck73K86S8tYTKeQMYLKzasRpj9xeUzyZ4dKFkZbzbMrwKffFXDBJguWfPUXkJ",
  "key16": "2m7V4TxXuXJ4UUngK73wJndkfoE2fMt1eWJm3Hn5jbp5VM4ysr3bWEA45nzbXhLp9tQoTTXPUJ2MyUUq6o25Zzu8",
  "key17": "32z9bTTnVHUuhjzfQmJCDMQJgc1B6P7riQg3q2GWjRCAVk87i3GzURNr7E5nmsGQJG2kP7W3zH566guFdJMcUp8d",
  "key18": "BssGb3FiQKYTiZ4Sb9v5Z5zGmitjuVa32YkpPbvjLaDLQUvS97A1KufnoTxavG8Vh1Y71ZZfGiuCtNbEYdCM8dG",
  "key19": "4c4heyfpiGgWsebkngvZVhcUdXMN37KtANpPPUEjbCUe72ofPS5E9Gu7XkuqnVKbWFWgg8e9sNz4hFA9aPmHkWhX",
  "key20": "5EQWtkC3JbnqPrqHBV3d22thoEFcfNwFyr7p4giLwQtCr8cR3Redn4J9jvAYpSd83pJtTdJNE9d9GzpogoXzQMb6",
  "key21": "3i9y5NVmQdq8xDeBeTM7MNuAQdmzji8GBbgSK6kHcjfDc8b7J1EEJmxxbTCs4vErJYyZhk5P2MuTLQVXjrWHSseB",
  "key22": "4TkFQK2XDwSieWCsmHm6JadJYW9WUUbc1zrryKApH6viCMKy6ahLSeoecKSsbaPVTGLn4h7iWpH961yjE1yvFvMc",
  "key23": "5L4mCjrWdA9wpR97rjk9NGdfJ2L5voQrxwsikog7Wo6R4EULBsee6TacCW5WKBjjxRbinA6KvAz58Qcf4MU6VHSs",
  "key24": "2QzjppNyfXczCoNqsUMZsXp8KK95x1iPQXAXSyPjoa7aePuh6NWpbEErQxwcbSvTXCBonPsEGuRvCZHGVmeuZgRw",
  "key25": "TmWk8qeYUdY5i7YPwUrpSBfzwqEqeDti65Mr9qHdXENTQD31f1x2nT6HDArRMRSirpxcQcRUABXCJXgbMg9xQq9",
  "key26": "66bAKECqeBHEacXkdN9xThRBngZHuBrVdd6JmmDc3WC5c7GVmtFGwmiQALAEg22yX3mg6svMBSQqrX2ZHkvxmAiW",
  "key27": "28MGpZGj2SHrBzyK1BGt3K7HoK4MH3ewtd7cuBPbrKV5fg1XpdpBrXjLjkD16MYbmPiFv2j85VuAH866AzyHpEGc",
  "key28": "ybZPLuTa4UzUUuJbnVnFqS6qhUbPCUT66pmxppPQLkADqcQx2W8SR4UDsNfW9PngfpmZPmdrhT34T59TjQqyWG4",
  "key29": "Q1dWbkxaNfs4g4X2WTybsa7SKAWoPxpkFHp92ePHNhReSfN5sijddRmE8X72zceuji3xNzDasoBcKntZgSaFGzf",
  "key30": "eFjiKKxWAykhu8zfdkjN41afop2pf5XEAHMdwjMvK3iyKiMP6FQX2y4LKb2B9g9ofWz951uHgzoxyt1PPywtvqG",
  "key31": "4tgau6jYUpHijDiANcXSmA5jmAHwu34CiRgqF1r6rkrch2AVMbyp7jNyKNdLi44eUmz2w5vkZHZCkUXJUEsvRbpg",
  "key32": "2EtbbsecXsosaNahz6v5LMdqccdxoMBFuMXM829RJeES99gDcErStrB6zJyeNtoxJE76gG6Te6CBSb2gYbbxsnAw",
  "key33": "4E4XB1WgxgAbZ24C6SGHtH8d1ZZJErcTca8fon5kmYS3wfDqxjjrM6CjGYSThZXyzipoSfcYyNJD34QXLyEjQfyT",
  "key34": "46ctavEgMQQF22gEUf2dRfSVK1shm6BYDtz2XRDXFcvKnPJdtPq1xprYYkEidnmmZLCWZcqygmQ5t9KuzTWUxMyc",
  "key35": "543GSHKGMa6VA7pHYr2dThgDLCkjpRQ4YpsxBcJ4WEbom8FmT3qg5fwK3neC6XyrfPL84A8AQtEfUeSP7iNPFTnB",
  "key36": "66Tm78CzDkkNLGgw1oMUvUa1iBr5ihmaYwWG3CimzYobjzwb2HkJuHQ7vmZUTtNc8PfaVvvzKv8rbegePjrEdDmo",
  "key37": "WH53EpRJ4aZ5BaHSSRDvgMn3pbNZqU11GZMBiicLxFjgGzK6HCEEJkjmHTLEd74VKyVKMpiBiyWQgURC66SYdvh",
  "key38": "5x3JouD44oxdxbQU1VDLAyxZ4G7WWZUJ4YKmqSzY6bhmVMxFdLRPFtqr6cEdu7zB5yrnQRPeqZT9VZWyFrESGkYt",
  "key39": "3vWNvoKu9pUZ83VBVYxno5Qtud57rMibDuucbSqy9DSANeKq115pd6EZnnPAi2ttWM9wJgRQzBCJ5qKMkJRVo86z",
  "key40": "3iCh9evLt1VSmfZAvrJxkpPnDsr8bzaTnUYRoaCSuGMhdnKzv1n5M9jtvw9MNoVXqYFhHFtcRMYs123D1CBDLg2r",
  "key41": "4GMVbEg7R41oXYLJDk3cG53xjdFinpNM4zcu8Qra3svtVzTweEmMPFsNMZ5ib5ipwj5bhHR24ramaLR5fkSHxZ94",
  "key42": "38GrVub11PFLzCpZjoz7nGZ6vLTXD5kPdmuLnTsuhPcmkr5GTiV9iMVeqKZiF4KKFFsEGFnMHLsPxiCNJbtqMrmS",
  "key43": "hqWDyfD65jXQaZfuKfmmSRGyBGrGTEaDpJ2nCGH5o94hjTy3pWJ7B1V2bb8sLf2x87qTTcLQ6u1eEcvzUgSbpAE",
  "key44": "2HMfpTeJKPb7KpCctHHnV1YU9U8zt9c88M7TNCC3BECC3dkSmfMQkkJDhAz5LipokUVkz8s2jYBA63s22dUebusk",
  "key45": "2JBVZG4TjZoF9XQTBkPqcr1wNWNtD4SK9j7v71ftwMcTbvEDRMSmC32EBktBwJshkWXY1Gx3MKxNu3wGzGDb95aF"
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
