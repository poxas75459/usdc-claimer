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
    "jmqHtdmzvvpEZQA1AUcJzgyZfEKzMAmm6ndtiHLmZZs3P7S9nMmdw3zx8bECYbdsaEDM7jubqHhxK2x1BmjfxYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x8pR5tvdRvMs3iWM5DFbx3ygPF9rBFku8VaajmWMfcyX9CaZM3FjRKx2CrEMMLCNLWsX8PB5JP2dwUmUk46E9zT",
  "key1": "3bsvR8nsTxj9A9urboXWuG4xxVCr71qh62y25sYe6K5P6r5X17bnLLtxbe87n4EKfbsSXWQNjhKiuzEk9xjrxPLC",
  "key2": "5svS6WyexZpMGjuLV7vmkygYTp7P2oBAerthMusFPWsSz5LQUm3pshNyGnn8DVFoVdY74nc3jLkbYmMzZuggyoCR",
  "key3": "5dAPT1Vi47HFQuu3DTzt8qk8wVGXHegNLfiWp5Jj9UH1U9xAsaufMKyiSJeEevWXpkwD1QSiQPDZ8eFFSb6BEbuQ",
  "key4": "3QHDgQdHS5cCsrDMis48ZKmWvNLUNX9UVRgNXFJ4StzzVkvAkHAsVGccrAGZGdeQ6UkKmjx1nxFm8nEc6HQRvJR7",
  "key5": "36fPJ4NMUjqTLqMeFKgDa7vXGcuL8pzjoqesAaGMYWqQsXVZM7SPKSqu7TXUM8VnQ2Tj3vk1sffkmKG8NmGCbqPm",
  "key6": "QEFC67e5r8FUYvfDhgRtFjggMxDSP4qk9KwDyP7mTuNDPmUabExDQP1kSeU8SGx6aq4mkMeMGM8sUWn1drTjmmj",
  "key7": "r6bCNsztqaGKhs47o7CkHoPCipwS9Av3xcLGfMsMCwNEWJBUymdo3kpN8WDGfNmV8qrp6ji7CHSPJVdtNSMKKcy",
  "key8": "49su6g6JPtTprdF5bTPrz37uAjbvHrByjxMQSnVCaZwZqfNWCB56vowT2dfxqrP4EJxUeyvqVJBiYdrXm3AoU7qA",
  "key9": "3AjYMdaxqvyB9EkAaSimfRVwnSReYwmLd5wpz44dD34wJ6toWGEesV45YLoYwwanhUb2ZbgGdaued9VCrueL7UCf",
  "key10": "2y8ZdbSJkpefvXaL5Kvn5XLfAwvQ8ckTSuPzDb7A4VgyfBD8LrAdZcU9eWavYPpWd8taKicvUEEMkh6n1TqEkDhB",
  "key11": "5SMnjFxoWmCuPoFBzTC8YAoY1Ft4BqWyxwRPLnbrNxHNRSLQpmpMu1G8M2rRLyM7qx7i7AmpooQ77U78UanBRsbm",
  "key12": "BSi5LMmKMhn1jpmMWdKZ2tJrYqESs75naE4TL73JSL7HLAWUPXvwHzEnW5Sp5uW7LQnWgu5DwWKccmH9ZhZYiCz",
  "key13": "4GpLYn7YG4xB98nECq1JGcfYVfv3AzyqdykP3VtCV2XY39gB9qJjdp1Y16nviUzYK83E84LWmxLTpayxwMFJBTeh",
  "key14": "24dBJWaYgoT7AjAghYBJjTqYUan5BKT67enuC2WEXw9efpNNGigf19trCeD2DNncjzvFpuD2V3R1NWabjbbG6moo",
  "key15": "4YKB2NjLAzjPb6A25RrDiHy42tD3eTjqpZDfQCES8P4yAu8p4zbV3Bm6gCCPkrcbbLazuYCyS5DbupiCx7cpCuA2",
  "key16": "bEhFurrdRNwPYRuTibCBYK7WrjGoABNpMdg8Pa1pW5LcJpbios4pNw9Yq4ScSjC6LDsVkdgFmrRJKkJtVhKZ89X",
  "key17": "4m3gZCwnWCy8UtMDkGofudpgpjT97MPr8optUkiWWA6mAv4Yqnv7MU1YKDX3XmPxbe1dyHYgFAWma4PUUQ2DXsSY",
  "key18": "3RMgxYygyhxbyMfokgQoegNsZcF14B8zDUasWxNtLXb9J3B87vDHD9Wkgt8aaTRQRtHynmjL2U7Qbe7KrH34R42R",
  "key19": "2311zQKLx4231CN5dVi8jXhxEPwmc5RTy2L2iEhXYvq91RU1miEngogkL91etXgSZxJkYEDBAUjS4yZHkRGFZjey",
  "key20": "Fzvq1dEP2oPggGhfJcQmfF36jm4HjGhUjmoD1D7ZcT9LoiX1cJApTa1CeWyyZfbfH95QUCz3uNfHUYPoyMv9z5T",
  "key21": "xFxWdE19C7in5bjhErS4zoML4qmM32zkdPPArh8Xir4grPvRDosu9SBof4uNUePPiaiiSTH8cfPzNfgc28LdBBv",
  "key22": "2A2uHcBqsXBnyjDsPtYmWQhsTgwPm4pmf2qKUzeBYphhDuMY2bxCNMVf19VYn1Uh9yZwPkY4Wq1KzV4ejhwiveNL",
  "key23": "KGWPBD59bmLret5mkNtAwEypu1YMpoWfLUpXdyw4VoSTxb15wfYU2DFhi7DZoqpxEc8dp3K3oP8MnWArpeHn6HX",
  "key24": "zK5XgetABpyCPbncfVzcwujFWWuFNDynpiEjeMQAVuqWMkxrjFATF4YgXSZyVHaECgvvAFMUgr3c2Xach4aCUhq",
  "key25": "gcR67DT2buzbJFHBm6rcVrwCzNu5f8xyBkBwq1pAtJx7AZ89uvxnEA4g75Va3mWUoapKBn5sFhMCmymV7sEyoqB",
  "key26": "C1awkFpWPVrYjyKfQLoLYzUYQLHgGHKJcQLdqcj97uabnynukAuprGWmjqTKG3XjJaTcyTGyUSZiiN6hi18EmnA",
  "key27": "5JDXtU2nNmb3YgXDd3BAfuoteVkUSRUHCquDxf69BNFP9nNjMzLeWE2D46n8WWQm8NoiK6ggREFCW2JXLdvoygeg",
  "key28": "4No3huxr5oaQ1mVtWqsjPSdPudnKkZvuFjy9VeRmcqHMuuDeUhVuFdTGfj6ksLvcxnGZB9ZPm4fXZJXc9Co2S54G",
  "key29": "5pSkdoRsNeXw5KqTrb7DhGGmoVVUud5DVog2WUU4S7XGwtsCszmSvo5mEMwWL8Aq9rkrCHqAJZAAhDRE1wo2gec7",
  "key30": "5nLdfVHLwndrwtz2qp6JGShCNqQUncfvaeMFHVNjDgDT517v7jQcEipC5Av7TXFMA9kHNeKJ5aeMNMzrUoYsKx2w",
  "key31": "4F5T5WC6oDm6BJCKHhrNjgjTjmU4tJdZEvBv56KfXfx2NWaMgUtotTX4EgE9vCa6Jb6KfvgiFGZiqo4BtdGgv132",
  "key32": "4ZqkGX7kVFpykufnVkTyL1Qedya4nbJHyQCVVPpfMimLn8QZCSRN3kdLzeoDCXAMughCydj6fofKwJ6JzKgqgF83",
  "key33": "63NhvNXii5jPKvA7pTZEkcrZiKj6Ct1k3x5GWLtW2f5YMdaib6wLbMUzP1AoSvcZAgCZvr42QK1ueqL8ddhgZK3w",
  "key34": "2za8gGnSBPuGaEPFWqsUx7XxHz3ai7detJ1msewCphDPekK2rhNJDM4AvnhVummMR7EScw5bsivuQxfJsyPAeUCz",
  "key35": "4v4v7hwrQykz1uBbjfw7r5ArNePt8WeCrj72A1EQca3SZ35zX9hNnMquyydKYiTmn3HpgzJAxvotMFJ7LiMJqtzN",
  "key36": "5LYeDx8TGj6jDqTKDTDUqDtWYMftdT8k1YApZ5YxbNLNvUAvqX9BEUpija8VrgNTWSPk9pJDj453AtX6SF9Ytpqn",
  "key37": "3S7YmYdU6PupgW662czSLnFa9yEKqnypEoVniS7VKPTYTGyUTvvcz1JMtU7SeasF5vbeKdkrsmBUWMHEF7nyfpwZ",
  "key38": "3yJJw5PaevoTVUYjzh4PbcaKCxAj4GZF6aKhTjzzEpwwLuK5LYcX3gaqk4jprhmQTLWUYpS6NcBajsyXmfCGy2ZR"
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
