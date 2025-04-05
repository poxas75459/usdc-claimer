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
    "4BWQrL6mrTVLz9RUBUygg2oK12xtE8i7ZS35M5YjpVooKNXZ1Qt1cW8WJsTeNpUjBgNXzXNoV8QCdhufadRF3KS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AyGFFjyYWSVYuxrQ4FyeDtziid66Syx4ZvcYw2n7j5w1StjNVQfduooA7vkPqBTCvihbinuHaD5SARTP8eUc4hU",
  "key1": "pYmbzkZRkH3784vXWJA8TatBCwKza6AoSr68pnB99pdmaLRHHf3DmBVDpZ2TUwxnZQmZgFC2E4JjPy5f2V3XemU",
  "key2": "9pE7mmMCyZfJpW3RSdf8ZzPChvQHawYHJPcUknidyXGjNuCAkUmzYS9DcL2BJTp2WuTxRNGwTZ4HyG4NZFQAGoV",
  "key3": "4zYm7FFwRWWUKtgRXG7Gp2bcsWTHauCyLjktReTBM1A7SDckJTLjb8tkY7gb9Qaea5XyFjEfSB6ZuhSJogL1RxJq",
  "key4": "479Ly7XeMgDzC4drbaqTkH3g9iPFhW4SD4UPznLAyCuSZQ3qUMLUTzJw6umyU6x1BEkxwuTiqA5bgrNJiF8i5D8E",
  "key5": "3p99DUe79g7V5XsHdnKChCuA5BicDKfUp7Fr7naAvGAEo9oLLdYq6V1ndxEPfXR5YrQSFm9JcqqLC9sFmFJwqDow",
  "key6": "4zsbhsN9j1rpwM65B9JwNsZtKirFnAwnFtyyXXWKuTuoBQbkTghegxGN89geszRSJV6qF1gFPagFAEpdRbYAeGwU",
  "key7": "4L6KoEY6JUeJXzF1BJzrMYcuFQLqgxUmUiQLh919mmdvhYxBsRRQ6a3gHj5xCyeSHsARESXNpX7vEJ97eXdpFndo",
  "key8": "3nE3oBSob8MyXmc5y2ou8rsKcKHDMEtXF8vM26dzoLnmMLC6xMZQdStcVCWMHpmiEnkWxog8NebR9yER716sUEzp",
  "key9": "5N5rsui5jJki2e2V8ouqELyYhbvd2N9TxqtHSzt9w34pvj1B3XswnQTG4Rje8Zkys1GAXaFGYhSGgBvfDVYVTyyF",
  "key10": "5mCAe1Qwi7aBbrkaCC3qkxbvAA5W8Fjw8RTki5s3ndrWc4oc11kx7EnCs92CvFx5WjnZFJsAYv7htmNKwKPuUqT6",
  "key11": "2P2qstnxkahcJjNoXByhvkGgKfsTdhcj8g8iyvrYswEq7f7q8nfFL1Xn5G9YJxpRsnsR8w9hCbuNWBqGq2V7Vgbw",
  "key12": "5qFgA5cNnhwwVNMM8ubB2SMDf6mKikt3XVrPv4pE9L6tGtWyseVqpxLz29mSp5bRUcoq2bc8ZKvJWRo3kGiz8f2k",
  "key13": "3q2hiQk4ehr35bb4qBbzpKbGXZdCer64MJ7eWM6H7EaxX65XNv3uvY5muhMn8QKgq1ERBnTPKxgmUaUye4BVj9DF",
  "key14": "3wq4USZHrau47riuvD7BNRMYiaKrfjKuHvtNH5WQgA2DG8gnadMxZ9KYsdb3APkoDqUujsLdT7KPZWdEKdFG1M4W",
  "key15": "2E86UNtfMSFy2hDj1Z8BbTDND8qMDhM4T88GEoL3RWt57uF3iQkvvxKBv6KaKnhseJ84cssJHFzmzQocg7hHYWYm",
  "key16": "56gyd6NGjTbRuHhZeThGE1rft1BSEPsNUThrtN1ZqUwQNgsZRRKWwhW1tm9eup2kUjrMb73bUz9EJ4g4UVPkmvkQ",
  "key17": "4n6mU9acTcWWmbMhFkaruWVufkGfvxoFEp5H71BmymTdructRUokhjmy9snpp7pJtMZxwByW3hxjkvNmRiX7tw5w",
  "key18": "4etZaDq5f7SpjpzM38LgARHLoyZqvgoVshjK97zEfXEp19NwXhqb2LfdDbacP14NUcyhzbrCkZLn4gELFAS8i8L",
  "key19": "2WuEHJaogUgVCwNTMg6JDBKDEvLriS9HUW1qiMxUvf1y7anATxNog29D9AFdH7VUEVSuCEJQ5XFfsGk3RDNW5dFL",
  "key20": "4vHcrCWHPn1bQNDzuFEm3D43GY8PnuMmwGELUUC1r8PX4SEv5MKsDBdAseR834fbR4czetWYXtNgJJyRNwQMASk9",
  "key21": "5uasMm4cNGRQ8dvjvuVxfaEpf2WZeGYnVjUPdatK3QpThjQLpQW6gLD4yRXApsWsFH6HXoWA999D5dYbfpzLKAzq",
  "key22": "4aABvyFe5ZjBCSHxtPMmWL6snn4Mahs9a6iryzUFUGtgojYp81hdYomybFjBjT3Mb43SKLDbJKkF5cGzFvgSnbWk",
  "key23": "52PjviMJXeMXmcsCm3BXjhRAbrtKaCEqPeFbi5Qytsdd1o2SwHNBZUSEvmcjND7dtDEpGxXZ9naZtSZxihBBQXfc",
  "key24": "5hT1xBhfLzPqXv8XV4qTTKrxoKEYv6NAaMv1v9uCc6PhSorVisepW7rLFWxVB4Jwxegpsy5BjuPGwiEQpVmoP9y",
  "key25": "A7m83nx3JQYuauJ8Dc3haSEEK9QgvqysBB57Kbbs5aQExqLmz1Hwb1VAgenwWuKfZXS2SVqFFjQ47nJr76TkKyk",
  "key26": "2tkqpbyxoXfY1b6Dq1B1HdsjDi8wbpXV3LkMdLJVWc1RbokNnWpcE4gdAqxXur91ztodZV6c5AtPat8J1gUdnmZz",
  "key27": "4558wsF6YxDM4xnYecBtVzi1CEoyFR5tDx743d3AVcwsdKx5b9L4TKPP4PVA9wFdffyiZL19HQtjCKGurWD9NwYA",
  "key28": "2iNDhfJA6ygb6ZkDbr4kANPrTLcCDqyiDGGGjwkGenLCsd68Rox1pARbXaZ4EG4utGPusASHDToAi9Tzc5uYHPSf",
  "key29": "4FkD5SHnovctrTmxJ8UVpjmqSackUxENcqDEaeKtQctLhYgnBQTT3e4pZX4C73Du3hLLD1qGH975GCFaZnfLQbxH",
  "key30": "3jjfeN1xCzFQfixsrWgcTNkNy6artPQy7q9eQZiX47uSDgiUBuFhexnaa8wSgXpanUpzEZ8HVHMnEURZFyZrcNJ8",
  "key31": "39CHX7kg76Ly96jeYj7ViahrfeVk2f1oser6XhuFX1orCkDA9NjjbanBTezroMYzUp1yXdmyfM63keevc5pzZWwF",
  "key32": "2bu4j4BaFS5H7HmPt9FpXXZhErZe1eUCJUAZ6Fr34P3D3PtFBhy8A4VDneDSNPCdKRQzzc3SP1TtzagNWEDYrLL8",
  "key33": "4HkKWEVGYejvf4qVajJCHKsnPHyerYt66jW2ViaH4u1LnQfwqFqvftS9oVAE9kAUGHpF5xFgVm6JKExsJzjBZTwL",
  "key34": "35DphdgCprdZN4mxYs36ZeVp6pLRAyDfZLk7PyH6eZ8osxVjiFqcWPCXMmu8sam58zjm5ELZCnB8yhpP4VrgApG9"
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
