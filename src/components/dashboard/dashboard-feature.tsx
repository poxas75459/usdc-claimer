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
    "5bSLmgbbXiPEeMvVKjNM5EX7cpGUqZcKWjf6NJQky3HvUezEPcGtxphsQmrrZkmJQT5CDVjEvbsZDgogteY8CqLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52No4oSumZNfoJRvD1CpWJNpHdhzcJc913hVgZkL42fjxyccgpFsRFmcELDWjgvNUuhZwYojvVsFr8Xkqu8peaNz",
  "key1": "5o8yAh9HArCahGZbN1Wz7EsdbcE1MjPgGwbNjGCA2G62rH8yeUZBTU356ahFLdXZ5zJhSJhG9mCV5mfQzeHA5BE5",
  "key2": "1vSRbHNgGwMrkeUcds6oAz18XWdon8bQ6yoRzFfmb8w3pR45P1VieRWq1gVxH9sgL5FmR1tNFdLyfvSwVvDyVzJ",
  "key3": "5w5zH1vewXHZq93bbhPZdkVCnjkDbmyYuoyNdxfHSuScz2kyzUgKuUCP47FpRefMHcR94gFrCZ3it7ZTi7nzKjsi",
  "key4": "2twvvA4bTMAFvDTttWnTZF9bgRArWfc6YDEj1QguZkndBeMDnk92y5Cpdpg2h944mFAUuYntQGq39oPj8u6J21tU",
  "key5": "24EEnUXdYS7PGLYZeFMkAcMyWvq1cJUwUmpRmSCH9fPaivPjMaVRnFLVyrgPUSfEdz6qJnVx8NksV9G11aanxQ9L",
  "key6": "61NrCgcWZaQd2aaLUxAHYMCZnyBAnKyrWUW7YH2CVuKkxC27YgXBpBytccFQsongzkAokE98wjot45eVrZsbe3LZ",
  "key7": "2YKHNBy8Z4QiskKuzgV5Yda4q8QuPe8oXe8eAMMMG75jikbN1aMWzDiE7y4rm4wEqtAXsAuzQHuqTYcgyp2yRmTB",
  "key8": "S7nV2hApreLw5cvNWY99kzTa55sCX8KeK7qk3Ws4sKa7Bn3FgpnbMT9Kn5kffJdHkegQ4oKvf8sTnZDPiHFqgqn",
  "key9": "2J7irm8Zd7kqkWcgYh42XfUtNx4LwNfdsD3F3Q5KtHXZvqZ9jMtwgYV6jCDWPA7qSKf1Nz4HbLDLqXvb6qj8dyei",
  "key10": "cBysFDWmuJAGMjLTbDjqzrVTz8AwJRaWT829gm5LaqvZ9vLcEYhHVNWkBrgidRiVDH3ogyDotc8e9CNPDrPunVJ",
  "key11": "3jKhHiHX2fPNsesM3NhtXKM7GUPfLV9rRNCpS5gMfEhVB6UK7q3foRQVU7RECFPDaUVpcGcoRopWUQ4zT5uFTKfU",
  "key12": "2ixP2pW2ELTdJGknSz97uPPYmNLPRrS8HLnTHQHpXR5BSiVhxumTe344jaY9U5dNz3LRRmkd15vBA2LkjAivbRVg",
  "key13": "67BRk2xxPgaDNS7ntBbSQrFZfwt2pYZMx4MLJeyVzKJ7nEqozY3wSpZdKgSsqicoCYkPEAJYP21ouPSvc9LfUtDq",
  "key14": "3XCnPFG6UbcgFMgq7464PkZLSZumUpr4GJJpwpCXC8tL13m6rBq2kJfrQbsyyGpLKydM97BumfYjTktvrWSA481h",
  "key15": "5v2WG8J79vnCMPAPKom3RAQJ9C58rwwM3ZkejCWCL2tTe6reJ7GCWsV2nn6QYEEkQjmfcTNbQMjJrjR26WdfXDek",
  "key16": "2Qu3GF739NpgzzTcs4oySD2FZMvDtPUyiFrMYykPSju38YvsXoRZa9ZBsBdhBH7JzQgLx4kkF7xZKFAfqeGVdJJ3",
  "key17": "4gaPdRQwXmQTGGAZf8HzeQbnhn1BsPmjrZyckhZgaDPASq4JkXLapJfF5uepRbU4DSN1Y22N7VSQBkEc99ZdFtaj",
  "key18": "5JDo76RNwdZTveF1HHwWbFzmLZLYuje3S2gbNphbARst9rD5uVmXdsnrwQZpgLaFQt4Q6mNgCv3Rx3wYnsbe7ivE",
  "key19": "2o4Bv3vTaWMa97ra7qh679miWNxr9gUKq8CitQE1xCLmZfh9huUchbc454BmgDgw7ZdBh2k3HixWmoqBAo1LXayD",
  "key20": "3CHS7ugh9REAJuMLoJBbYa1XEHT8JpBRkbRRsRCpkevW6Rp9MF3TfMckqTZV5qTaQBCJGwdKdvFo17YfVrCknHiQ",
  "key21": "41Ve7dVKLwr7AL9W72ComxVDcWL5PRY77FYhsvZH12AocwbTi4Dyrwx3unrorqjvEmJmyKWk9k91iCp6kZF31WcW",
  "key22": "RZXJe4cKQN8jnPE3V4yTUdLLhfVU4yu7CNb3PkD9eHshZMKdv3aSvBUazRMCdJE2NoaxdmDCmzKhijfnsAELzLn",
  "key23": "FybYS6Zq3Yt9Hj9vzs7X6MqRZFyreqdSPSgvMvPaopCZC3e58KYzRyTyk2B7ypWX12xZNJMYh97ZPZfJ4gTivey",
  "key24": "63BruEwFbrHJ3ELH2oDfag8biNe3jxNeckcgVhTWHUtQGUEnMGMA5thWBsdZLby2DVriRoMgpBvnkxhh4SaBBWTA",
  "key25": "5i1y4ZWpbon6mfb6LXg3QhNYrAHkiojLxU2WWXmfpJZbAZ6NZ8NXfPA5usc8qmAaABbjS5kpMfaqht3rJ4tqNxQm",
  "key26": "2QynEAzbTpfkvFb8oRrrmpCq5WBK1SN1drw7jiFbG3KWDas6Zs9tGrAJhW1DG84LZp4dCEi14m77MjtPZPN7VwZb",
  "key27": "2yVo3FA3cKXpPye9XXrpL2YYBsk2siH8zLQpuoXiJvR83HkqW3DPipGxhPTEyPKHb2zBD6Kc8FJkHPv1ZdAMe7Hc",
  "key28": "5NDrSiTixtkqDDytYnrBxPZcixVTrBEpPUHtYdUcHWAcN1JqoDKgA7NiyY5AU2KzNFYN6bB7xjmr1nqZ7SQZnmwB",
  "key29": "4fZbU9PFUEx1ZRRoD8bXek2GoMzFFb4ooGPnDPmXVvfG6wZ3CdJ4TRaRZrymtCpCKQwSsGDJHnbKiwQBf2PQ9Mro",
  "key30": "4ccFQ6eq6xLGD5vfUMoiB9zoMLmnshkhCZk32z3ucMEBJrsweQwJksE8CWuaigAZxhxy4EVD8zSu9DwnJY3dQ6bi",
  "key31": "56YwXzNZsJTUyWKZFBmFzwoyjn1hEQZQYgppVHu6WGccm9ajKQr25QEmMjRCLXgigiHeE21GUzBntuz3r9anqb4n",
  "key32": "5wGtGGd6pgRDyXgMvHNSBG9QdLkJMEFojB1LStUEuYi4tsZxjQzRHz1FFBn9KGxPnPktHpJCxU8ah3EQWtKeMsiR",
  "key33": "5G6HghNTPacCBuF86znXb6Y1ajQV2GEkD2q4sjTcT339imXZNcizktZHGu316NSoru5eGs5b5ninRE3rBbKqnMv2",
  "key34": "57CVJqKeeuhw4e9GwWSYZWWEQDeyUEPZ9V4ZjuPvABWpxYCsLYJ3DsExmiVy8N3cN29jrSKZtr6ATod5AEJNk1xF",
  "key35": "4NkN711b4TntgAMBbRczpqagyBXggh5qYBRYvzvAF4WE3dNgUUquSGU9s6iScpJomtZWEz3Dwpfjdxm21emJh5Dw",
  "key36": "3uEZrHVbWpLQ8EwfagEHjD4QQKSBR1XqS7BdR3VQZxGF4vtqah3x2Frbz4MLh6xCaRkZDnkTbZhQSm7cq18v7s1L",
  "key37": "2ghuQDcabRrGVppEfUT5yurqd9jZrnVBe5PspG1w7eXKBE15jHP3NgfVhwfTL8cGT6CU4EyA9cbQfHgG21hAQLS8",
  "key38": "4kW6ezA6MWgLJSYt1Vghk3GbiGNBD5yLgs3C5L2uPqcS8AeYhMPtbWaDmzapW4Cdy9rrGuS4uNj5FgDFHvgCm5o4",
  "key39": "4wRmzhzRUTMfS9J3huPW6sunrkPnjEtJF319f2HpzKzDF4JUaefcym2ajmqRG4QnqEVp9UiC9E26pSBge4sieSGE",
  "key40": "58p2ETJdCdZVnC1SzXArUWLdVfTAgygPdGzu6GeVTqZr5hyDDDYopC3BnqUhVXYgncAXsZFLqhbq2suWfFAHzZVT",
  "key41": "53TFB8eDPdv3gRLFc91ALZ9CdpVXHz5ewP4uoQxSL3oVF5zQHihX1D4Kfp7e5QtcMn88AFdi6mVRnfJosudDUoeE",
  "key42": "BYeA1x9myuUbgum8yHfWSktzsXKnBB66ntVwysGuwyWoHXCUhF71wy4WpN1airUum3hCFFbfNR2YHLeHUSwomk3",
  "key43": "441DrozBdbaoKWLsQAU8LvsAaQZ3jWMWMaDvTZeaQxKjWyCKufAw9bD19Kz8wTHjvqN97gnDpqEQc7NKcUtEqcw8",
  "key44": "5AKiyDq3RA4512rmUnC1VXUWBYd3sufbHWw2R4SStQGWuA7kv2PTKhwSxPuWWgGENSetokZfgVvnKEQg4pbB2bEJ",
  "key45": "5ViTrpL9hdTUg19BX392VL9FmtNGyrqDRZEL8tfFc1FPFGsff1EzredoinZUNEDuqMw2FLVodC1rVmbRK84fT1Sn",
  "key46": "3N9fyreS5gnpH9txb74AsoAQbfYQ3FsByVkuQSLGutbj2Z7cjQ91nEiX7BKruaaXiFpRRqVbfPMuubbjLcpCqto6"
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
