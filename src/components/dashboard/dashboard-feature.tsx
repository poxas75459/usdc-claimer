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
    "2Tu3gqk1njXPqfdfFCY3MvTt63vsh8V9um18mRcMU5gamsHrF5KDuymxUZjwKDpm197GkXQkkJ219dZ2rXYCwPDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KxmLDAWm7yXSfF2jT3gCh5pmvWYDHwyXACe1N7xvoftWvBjHUwwNjLkmW8xGVRuVJ1pV13nvspLXM6MB9rAdiek",
  "key1": "at9AN13gLSZiSrFgCd6fD5rrzVkrEZnW5voQhCaNdAe9UbVJR9ZpQYxyWMZmqvHiL7xXkmCTjuM5SNXKwv1nbqn",
  "key2": "579gainuatov6ir7886oayqTHYPAv3C1pTd5sb2gUkeN3ds2D8FWw8F9VrXtJTg5JZnnxZoGFqE5ihNUra9Fikw5",
  "key3": "3kvaMR4B23xnQvhTxeTqhv3kvqCa2KmjJngugr3PYmkpogbGyBnyqgpaEm9KkdSQjUyhiGuqzNDnrq7mdo6R7oT",
  "key4": "2F8Txu2uhRQ3TmMf7YoW765PH5B3v7fuEdFQZfoRAGQbTmEh24PZ8ME3AP7LtA3a3Kjamx2W4nAU8XpQo4b5zP95",
  "key5": "3vAtMVs9Wb4zVkJtoLqmeiFFVZPSjSaDtRPy1azp17YnWkbcn75acb2scWQrA7Lw1xR72G8AekRDQfpEuzYBnxto",
  "key6": "5AXadahtwk6uuFb4YWGkEcCZh1KJo99HzWxi6vRgMdpJysG9MJJr15b4pNnMwSwNtACK4dj9Q7RuNbQ3hftgbRYr",
  "key7": "43BZdwZUzYtEGwJdegZnmKpfNqsLBHWjHu58SfaGYKqeCXBLyF3uwYLeYg5CG8t579NMwNVJ6rV6skXno9UhoQHs",
  "key8": "2fUiqbTiKQ9i1Qmt8ZaQkyUn8wZK5Rdp8QnLyy5aKSP4reKiQTeiUVAJm7prJatcJuzJNeBg4BXJMb5UCrL6Tyaw",
  "key9": "4oS3d1fNeGtD3CPzFyGv41AzpegU41WFUjeMsn2AVWoikLS2AKEkPYsyaPWfbST6L9gExk6wz1rGbkGBwhVaqJAe",
  "key10": "3RqCrHpbij33GYqQ863rEPTeMngFgYsYRFDpVDRBAscNPeaSnR7RKGcbFZBEbKQScP5MYkFg9j8zD1KMxi6ruXLb",
  "key11": "5G7A9PyahaabsvKxunAcjJauBPxKMotqAnU8QvCYRZZ1Y412c6JzQHaUGoQintjsLoT1rkbQxNHBuPUvJTtZDPet",
  "key12": "4emD4wPAkEzqZkEPz982qKWtMBUiAXUijJ1WFN2C6P7qgqtH7bHH5p7YhQaFDfUhaDjshjmTaEHSxVgSnx2oUaNs",
  "key13": "2pzxHnFfpJcXjVk57d5u6o5q592ctyPdRSCQx7Npr4kScDsMsoqzLUMMyTmEuqHMJYd6Zrgn7xTxmhYW5YyzQryf",
  "key14": "4uZSDC7iFfeSVgBv9Lw9ZnaxmcQcykXFsvk3pmnKTAifrGQz9whnH5gddTpWwUBdHmr9mgCitFey9ihipfwwTdUL",
  "key15": "4YZcR8Uf49EVPdMfVB2Rs6Xb9LjTLbd8MQkYYC6uceQ7g9Qb3oLjXZHXfFd8beTaSYg5888oS4A6ua3efdf9Exc3",
  "key16": "2BtG3pCwsFp9VQajxzVWLuQ6KhJs48ZGegxfC6Dzpv2WXUYNo2uoA2pe8YaqUu1NPaCKRq1PaoXDaPh3GZuWqpFw",
  "key17": "35Y22JBP9sMv6tm4FMG14PxoBZSL8Kf5QBFquUHgGHsWskoVrVLcT18kLgeuNvBWXchE2VTwjzP98f6G3PTQzqeU",
  "key18": "4BeqBSKxPppGtsRzCJd7nykgn9BSWgLZAoLQYAq3FSqj9yFrK8wQGF9WbKQL3UQVUFS9dbDxZ5Z8F2QPLppGD3hN",
  "key19": "Vy25d7SBFw1YjCmSfuNX6aa2A6KGfW6deAsjACXNDmpCfTmpMhMW6gh9hkgQCTobvWLnGZdpxWz121H9DAfDn3w",
  "key20": "2XYE4JhGcmDeGtkGVn41surrjGdUPuJkzuCdpcb7VNRUqvrormpbQ4T8fnGEiodUvDHNp8o2gpJYLhCELqsv38DJ",
  "key21": "65F2FBh3hKhyNH2fF98c22q9h7jy8GRmomcwoTHUbcRG2sRrHayt8mjzM1GzLUEShfkofAb9UmaLmF6Q18hW6QY5",
  "key22": "4FqkCoBKACUCmo3aTxnGGZAkSnfBcqLj5ojPeZLvhMxhFe5wWq9rAeNpYLLQBRtJ1kmQBDFVyzX6DyBDV4VvyBHK",
  "key23": "c5zmUoKEo7pPgTLQngvryyo16XdBNMUzjDFEpKEph2B1Tnng4cZzCqhLCwjuNCLpiDrCwfmBsRaKyLQdYDJmCKU",
  "key24": "2jko9Z8yFrDTCdKQEM55WnNvXzjqxf7kuWmHEXDpWghjM3pUaD3ngJ7ZzKSbxt9XudZkDB1eLdMQPDjNxEm2nKnF",
  "key25": "3FWx1vGwo9jG9gc4TY8PJ1oKgnhnk1uvu4DsGgF7k1Zz9Tr8WthuBvYa4PrQSLzcv5qWSJEfMs4Gwom9iMvhgt3x",
  "key26": "5DehCCa8ksUaAo6XZN7PFL6cES8Fk7C87wUfqZnBL32SMRUEx3hE6G4A2aNuZEw3vd5bGuEAvSJByvvpTGzkhEnr",
  "key27": "5N2sdha4TRY7QEhgvixckDbuzxLnpRYDtkEXQzB9gmz1SFEP92pymuH8QhmvYc8dWGNPap2mcKeK7uB5u5UGBpNr",
  "key28": "2d9xq9gqqQqVeXE3RaUm1eWFoEnSyr76K4rAAGcWPwNJCw2RUmsSS8dq4fcDfCRWCiHCF51sdm8y9iTdDP3FZevm",
  "key29": "43hwZLZbArQSf7bZNqR4sCv4rG1Ng9XxkMfgVCN2648o4r15KwSbVSoeudYP22mQ7qv8Tfd5n5ivywBc5Q9WFRJ5",
  "key30": "2F5sUG9x4KX6bLxKKmvhRwyv6qCFHgY3QJ5vw49c15Exhc8KZz3AEp6zUTA63wFDAZTTRWQea6iJaWZMmWB2VrA3",
  "key31": "5QeQxbz2KotztWJorzdXQExBj7hMT2zoMWdjKJjotjLnoZ9XeFcixbXqE8nrmvAR9kCcaZhGrT7ZYoRuJ2Wtrycf",
  "key32": "2e9FrSwKXhFA6wJ3eQG9GKk5P2AcxBNyK5aUzmM2Mkv8DpztwZoVrXdYdc7rgqu4aNfEJJfjSLZXF6gzpN8ZKAgm",
  "key33": "43Ucc9TU8o5wpsMcDi8JE1nuCgS98ywjKtUxGjNexvF8FuoDkesYApRQ1VnK9p1B6S2QJaC9R6ZML6ZXbZLvqfVa",
  "key34": "5ETiXqjYgwaVvgnReADA7bwHPY8JuuFcwhTevgwNovB1bvox3ee7VmjhcC72knNXs6DuruoNX2kpMNEDaJSFd584",
  "key35": "634r47BqLvNpXbFy83VMcqHpYKr8vsE4QnTJyf5zfPfBBizYN3MUrfMX4og6vdUMJwHnJdKdXtGPrMJEifyXkEJi"
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
