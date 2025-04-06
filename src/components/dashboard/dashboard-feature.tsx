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
    "tC9EP8UCXTWNxibbTcJht6LC7soh1dipTVu85YMchZJ4bw166geZi1fBU2ws23dEJXjxzbpActk6BdMbgezRRvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gX9UHYGEmiPDntr2UaS297Fi3D8RdoAy5dKFenBZgc5A5KZ6y8yWK2yvm4UzTaW3BxfVHKdanKbtQMWhvwAhCCZ",
  "key1": "fW3CCJt6icZBJbDBNeEgg9DZtLQuzbfJJWFF9pd9zAbBUSt26kapQtoN9JbnYgn1M8Fj5PQN7Vrv4GreYXdMKNi",
  "key2": "5J2PHufzxdhPSQC67FZ1nKGgfQMbuMCSpCTfXzYrohdPYnk84tcSDrTa77nKJe1H6RZ9iqZvff6KanjQy3jVtZAW",
  "key3": "KraQx9JGcDFYYp5khKMNK3Jij29rNaUQdRLaFeEQeXVSwbFaDqZbYnTYWogUzndpVMB5Kazo1f8Ya3XpZErEzBz",
  "key4": "3BRaXVTHMk3N1cc8h3rZxpaeHt4AZYLPXbQcRcEY3QqavQJsmLCf4L1vzkS6PeWiGpVcQh4nYUZHgkxkA1LRnpC3",
  "key5": "5XiFzryVRQ81NcyY6A7U45yjfdGdnaJB1qUe4ReRvvyPgssY3BvJ5DKsx6N9qTxmTXtiA5TmsworfavoLZLp4BJD",
  "key6": "5QopRK5VL4LL5Xz73RAZs61ANVcmgiDhZXp5dYigG7uVsWHPLgZnnrH6rK9SwfisFdPeghPFUQnMdbQb4VogKZay",
  "key7": "jNu8Lx9Uw12p645BeTjEdsVWGhwtPk6rLXypCqEdvX1N5c1jpMgkoqrjm464rbzksi9UrKDcUaC5uyFwGW6mPwF",
  "key8": "5MLvkieqEDAo7YuUAA2fG8G1f98fezxw8HnaD29iNET3n9EKq3PKL9QEgDCqtoTKcUQqGJJ1esw5MCcvWebMrusJ",
  "key9": "4tPZ1SG8YoEMXDcg19r9pgfQwkv54jU2d668RQZ6f5a1Ndbqvk6NyFv1i1yBrF8rMmkkevDdWKHA4YrcrNiQ9JZb",
  "key10": "yJc42pn7vUNygRmTjrnEfD9PMooWWw9wUpLHqqNRs33zSP4JXoyJMBJcCeq7ukGzWEDrEg4BHokrft2bCMA57zk",
  "key11": "4GNcpD4o4BqNkeBh6RyT8FdBU8gb9qMhpdpiwX7KH3wDCdvWwYkpAtLk1wb81p5w6u5BBTCHydsc7hDkwafDzZdi",
  "key12": "2JCJv6mPfmyvzqrVimKGxgLB3Qu2r16UQBTwVBEqF5puVXBi4sGjZ6sYe2XiESvGDjYFikauRruvSw4agyQ25zR7",
  "key13": "3dNVBLZQ3m59Y81egLEmhPSZTzB23VGEpXpTybJX2rc8fXvMMauSeqbNUZxYm3qvGHy1HUwMY2esLfxzKYFr5WRR",
  "key14": "41oJh3cDT1F3bpgrDvbvBvBKSut9AoeFFEw1Av5E23TvTbpj8wacV6hZq4hWSaLcPkvovR58KFtdE9D1JDueQ3rj",
  "key15": "7tkjbW12nUJcubohagzKnLRSzPUizybaHoHU8HZVw7Q1wR3zkPCPcNaBLTuMKM7xouQjKLnvGR1s5ywj2dEqatj",
  "key16": "U1cDFnGpCay2DXFWFwiXTfF5sKFKWM2qWifbsL6iWdN4jWiGhigoujQsHw3FCCrwNHyGFh9Y5pTdPHRSRi4wcV7",
  "key17": "4hVDWpwbtdsMZkBEF9ehwWd9c79EhCt7xYTJJrNHydn6tfLQEfpmcSFAe99woVeR6V27Bwt4MCGLhkGFj9eSr5RY",
  "key18": "41WdBNxhgxPqJ9T7kHpgSy5ACv5rtKSqmXD78MdCtr2o3h6moBwuJ13xvyTNbEnbid4YEjhEzczoPHknxZwxYquR",
  "key19": "4tt5qpbJgsK5QdHCPmtUijcHXB3wjaZiyhZkPRc1C7N1xLrJt38U2DRPHrU5vJ8UiwNChjDmSQ52HzuYuTqjxH3Z",
  "key20": "25Uhs1AzUyTsBGwgk8JodBpJ7BNsDGGTfsxpTFALtVuQywMu3fQUzagJSMWAKodwkF99R4P9GJD7nAjPybyyFvWi",
  "key21": "bY3yLYjeV45TN879prATjsbdUfnKQfWCc83LqcHSt2kqDNhXtsJ8LibTNdah1g1wciKQVenjAZEq5nroYxwnJan",
  "key22": "23aWunE2dAmrgar3ooJiq1RExCHUaw3DL8k7APHCwXFM5ZEDxmp1bk4i9mcwSUSzmMRys5yKwYLRqkWpHB267wtj",
  "key23": "1PkLfuQPT6RHmaffx8reNLfT6pxpaWBdWM3qbAt3HEhHXeF3G5nz8f94TDcQTk92fsbR5MzMzNptVXB3rgKRx78",
  "key24": "63gQJF63kmLqNGqWHDCaHv8yf7ce5Gg16kYsLPvDMeGAnm6FudJR2m5es2B5hPCEfXLQxHxVgearjD8uS4t5R87h",
  "key25": "4dix6EcKQ26aahxcPkC4faTFce9SMw9GQLdn2YsMEjTDhELcZFLPvHy9z4ar4dJheuy7sa3B8qxMr3CTKMPrPQEa",
  "key26": "cYEEiXNU6ksZeRd2YVPcQDSZPNRTevNYcV5o33NK1TfTnEZmYaVvoFVWpKQQrJawCcuah3SV6mxoQrK5BbQf5eS",
  "key27": "4PxXMccLvkj67meNJo4AL2Gkr7zEzAAVwQE4iwXR9QygWKmeYjmdCgSbtE2yWwwP2pn2pzGQ6CsZsWonqm7zHFZP",
  "key28": "QVTsCpx5yx8QnEgRgtxq2AR4XA9S4XNDaRnPiXLVJKVef2wdJ7TFemXjY8HBhPYL9rLD1QdLabwkdsoJZYqT2W4",
  "key29": "2UwA2duFDBAWtcCazgVYfYLQo6aQubfSZXqcHE6dFYmfYVFF5D8SQF8UBgtrwihsYpC7UQ1X4347PrCdRWH9jAA1",
  "key30": "5w1f9wS6fQLCtGRWnwponswfWxbmoQVDBpTVs1xE7VeALgd2seVYZszGP2pYawT8zpCGKhEk1jU4L3WhgMRLYNvs",
  "key31": "kpUc1iMRhnBZ2G15rjpVArdxngwY9vZBcCaqbEnpBpBPfcFsbDAb9zFqsiUJkVQsh8C3MQruyKPNQFo7gvqidTX",
  "key32": "4Dv18GZ7KLh6j4XWJMe6pXdnWPAWNsCa2AqeYdNaQEMfY4DVNZS1vZLNwPaWdL62UsHiLJHs86tERy24Fy1jjNdn",
  "key33": "6RugkM32rMKvcYVEx8t3JATLbUqkAoM9Gv7kACtyAKzTcfCUCPau9LTfLAVsDDfAoEXoBds5AuKFbdJnZSv2M5T",
  "key34": "2zHX6o1DLj3xBuRLUJAuR3QyX48M9tdrYZY276pRJAQ1hBQNwKY8CSGPTRoUguz8ZrTsb7vzdbkf6r4gQE11tT3g",
  "key35": "3xHsHUUprcWfego5EfnB9QfAuPd7XYtmc685CEzX3Ghr5aTWwDsBkZVdjTFRkLpiAoSdCjdqDNTdmYt855aS5soH",
  "key36": "5ob2LJgriggvnVY2mefNgaNZ5EDvzri8oBi3Rzhs473DGwroLC9P98WJhTe9437zK1QcNcjARcDETyTB13koJNEX",
  "key37": "5oAV46t33Ar6oiL2u51MZpV7pkBvZy2pDoqrme3BvMK1agfqEcrKE3JmKSWLPTWqNfpYkG3VkUQq8MDSuohWS8mj",
  "key38": "2B996mZ3QdfczVD6eJ5zcmDcaQsFpaUiF4Ye15CkK3ZKP3GX1gyCNmPpsHjhq4bxN7zjEWjs4vAco86qroyurSPH",
  "key39": "5ZrAwwfumUXg4R9XTAwvQu8Wys14an7mMifCKTBRgkfF3bBuKrrtoTpetw8obMrXVyFABevRH3CzQrnCtmb3ucd2"
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
