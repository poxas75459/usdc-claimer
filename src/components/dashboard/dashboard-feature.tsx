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
    "49xJtjnFryfTDKtJwiLK6bh7vKa9r1bQXFDEeGwUW3cJ86z7di16Vyb3t66whnXcTjiKn27m2UoeY4uRTEuyvui4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24qpnVstWxKqLUUMzTF97nmwUC7B1YyQRWWX2FrTjQJYHTipM1aT9d4XSVw5KocVy5njB3oovo8Jv3fKdeVrY5ML",
  "key1": "43RWVvyemt8AzzK35DEB6A1KUSjwZVF3yCMvYQad3AVthkHEUWYf7bAKfJ6dycGXj6x7T9KotSA58AVtny4UhhVu",
  "key2": "4bdfUcmp1mkDZt6HRt9wHeTg418Eci6xWDzwhEiWW4YuqzSUhVEv1bx1C4TYj5Ep9xTTk3xa8USfo5r8JhCNpLdH",
  "key3": "2PBFvgeaL9qSFBfsyAPo3EVYnocaZfecoYxunyb1kPdifox76Fr3ntVyJ8N28TuNN4YRb7PZA1j3rUtbpJgVN4nA",
  "key4": "22RX4jtSTEfF4NscM9CkonYbq8XqPKXpScwQgSz1hsciKprVHtcrXDQt6Y3LBy7PqtArL5qbCusFcfpu8Uh8LGvA",
  "key5": "3XfBQfRa7SSZJj3xiVXv2bR9svBAGdvDazKJaj55hWunzTmGe2xmyWQ6TCwNBPVhSYPnnzgw1pgJg1pNeywtWah2",
  "key6": "5zYtepRokwVxakRuW6hDvdwSkknrFbx5w9YdBvt7fwq41PUKQNnpJEir5hE9aRT8rG6YZT7KeM8bE6Fdxh9uWGix",
  "key7": "63G5zFgGV2DfuTb7zmP1YvwoF7p3QFEosg93cYGcSxVDofLFs5EeHRnXxmvh7ao2bHCThJR2eDcL1BVzYeJgxMaG",
  "key8": "imW5pPCXLQ4sXbtuJkTa9g74m7U7aN3Ws1acj45PKJKFqcNwS85KjD7zB6eFGrLE7E5S2YpCFj53mvycSHoVaEs",
  "key9": "4MuwgQrEQ3G2JuPmyXbqbRtYWX6U2WRdRcU7G2EpgGiL2phrEQHcH9Z7bS5v59HkkvpnnFV5PciFqRyw2PdAJUwY",
  "key10": "3bAnajFHvNJAjcePBAQa8cCNjMkFAQ9LNWSestNxKcFHhbkVRgjC7NLzQWt2hCvV1oLmFVKJRJWx8DUqaFzn1LVS",
  "key11": "FEpWxQNKeToHRT8MmWJDYTCGGgh9U46GCpSceWW2XGzQ6tFJ2PcWPHRqfSowDFcTAz8ZQv4QLAbmimG5oRjHPQy",
  "key12": "3BY6q7QwGxWemVBy6ibP9JJhzNuLyUDpD9hM2vEWhqAFV3AHDq2JMqeEPTvkH3m69MotkZZs231z7fzxPPNx9ozy",
  "key13": "4ATPi22BQVgP84Uz1vRovVRs5g5WU9p7piuay7DRjai3iufenKsfPT5oYkRMcQwa3JsE9g6g3geADwh2ybyoBVkB",
  "key14": "3pHcJGk1GqtAh6cZ5zC3ui9UzwPXKApegj4xdwgZfmMzTgswpjTnHVYDo9rsfWyxZ339CAoDy484BwgM8pnpzYj7",
  "key15": "4tMgy1CJjDGt5PTyqEzUWMteExQiS7ufXuJ86aWs2w5aGNmEejLq7gTgTL9GnSzCprAe1aH3gh4WRTypZH1tCntD",
  "key16": "4kwsD21DhxGPp6vQspsfhaqXXEbvxmorzw1LdVjXqUaALriTU88bWQdbsN1mr4JHeLfT3XTqkeKbSu6C1hjW2ZLk",
  "key17": "4orbbJUkSr1fb7SEsWr1qTxLt73L18p2qzqBPfdeRFERCtvbpGB26nsPhYRSLdnwiKLCVU7q5yKNEngP2sF1o1RE",
  "key18": "5XrmKXXF3UoMtHNTy12ZZsv1VMQnmuLi63KZ37zBMkv5zSf7qH5CWSywoicNKUMqp9fphDUvJtyqCBLutApcpFvm",
  "key19": "4ZEpUYPB8J9sQJ4H6zR4RMVXnQC9HSCYCzyvQkrMX6G2X5JqXS8CY9MbPymKqEic9LCjHty7szc6opFboJ5dUSsm",
  "key20": "2znEzKCxZhZKsAseYf6qmijf1xsHr4YmrWtjAtFdFSqSpmTgwPD4fgBTUAeLXzRCNZJ8xwenGSe2ArzVHEP7Wn9e",
  "key21": "4af6BFdGRKmKkPAEz5jhG7VecGg6VSDJTV5xB61kXtCgGJj8WNqJ1hL8CdL85o7dt43tKhmiE56Ahmj8wopxxFsC",
  "key22": "4SsMedhs3QiNjUPtMACzdRuU1DaddVVLR9d3BgUB7EW9vRVWiaA2VXg2hiYrQawoAUrWGFjxsAs6KLXDqmnCoP2D",
  "key23": "391LfzUgLPvfjKcNLE5vwhm3jT2KFE6f56EgsbAkFTzsiZPcXXyDvAGGZw1gEn3TogQg53rKzaW6PBaxjr92KDGV",
  "key24": "36CzamLZfmcsNofzN6mHRKdTyJiHqLfeR1osvRgLeiZkgCzoAZNBVWVXtfgPuYrMM3mnv55MdsN9V4dyhyxbATRy",
  "key25": "2SsUTZoozeEsSHXVLMjp7m6W4jgHrTj7CDczijwXJjC47qdamJJzRUJZJDLYqq4U46yh1y8JzuCX3KrpqYbYf4wx",
  "key26": "4xmnMqcYWA83EsmH4dsMntwtqcZpWXsEfdsd75aF27GJGcsiBAqbZbQMH718jZ9xLAxN5Xayz5WoLq7h529159LZ",
  "key27": "4S192v76FTNyDKxZcA15Az3BQCeK4R6QtCG3vFrtVKL6ErYWe2DbqPMPeaHcYeF3omv386GvoekqMVaJ49vaBwQc",
  "key28": "3TMWcbFGHKUrgar1k8Kvu2zdfEmgkMNDM6GsTvtZeCZMtJxY5WHzpSgdLJDxpjEG38JqypjdBcyms4rs9Q2p8s35",
  "key29": "2sqUyA4Gdf3ZPmwDd2Na6hdmBcSFFZxRkwCaERfqMcHeLjp1viDTHqTcM591yNhCD75pUicPsTBbqaV4tZsPC8Tk",
  "key30": "4zYPwUYUmpEmmLTAgkRiHttewJAqTwQLqQqDgqSRtDamwH1sgfnENkJmVCNgGHKXCvyZMqSFaM1hiarDi8PJK6dY",
  "key31": "2gEi7fDWURe8jVpedQVNMVVbWAq2SkJp4hGmMHJEQQiBB1bE9C4Lg6qYteNnZnn7atYjZPW1pedgFFqLgz2As1x8",
  "key32": "4uyLzv3un5dpYD9xwoyaMtxzj3BATpo2EAcb3QNBtasDsbipJ28H9jMoRWcgaMa6VhcRffD7xijwuh18Ki4B3Tjx",
  "key33": "3jgtTZy7n45iWJWxUus6EcWoKetHxFiCunKsNWjwRaFsqHXG1WZEXGagfv8wm34JSgSjQP3bS8tcdWtHAVziZDjn",
  "key34": "uJJbTt3q2TKctGPSaKiEmwXnQK7u9mF7Zhtez1dMHN1wJ97FAX6FWNuNbDiNii3VxNs7ZtV8aq7M87JWSt8XRND",
  "key35": "29fJwuRL6oLW4DoiUJbf331ixqvoEfoQTWzWXpg5JBbUgjiBLce6qaVJqD9HwXmV9QDE9zCvGgKH9N1Xp7SBV5JX",
  "key36": "2J7RaP7DA9JMqtSsArkgxYodSgQ8Xh2rXDnFbRLxcZ8pwH9qa7B6QqiKhqRqnne6DJJX5Z6xv1pGaEXeUTLDeT3W",
  "key37": "2XPz9MEYnqd8Tih6sw2ngfUydfDgDDgJvHMQeJ3Rqza74n17rUXvkspqK3Te1x5qRqd5k4EibNkEDFqA3GkMo5wc",
  "key38": "xpDmk3VD75qkBzV1PG33F38suXd9FNJRi6ibXtaQCbJbah868j5rJskZzeJRKDKFReNtcX9UsokoEZiBcnD1a1j",
  "key39": "HwzvDUPgVtx4ue8W3T78nRbFu5s1mNAqaUkbiNjoH6a2hL4GFst5njGsGFmgmxcVfyeGjathPwJaWtVbhmpMr5h",
  "key40": "5EHbs5iAEtbq6yGtQdJJZRoycUNsHGGgVRCfYw8HX2wv8wXbeM5YsjVK3AvTrhscPt7yn44g7xAReR37eYgLE6DR",
  "key41": "3jLhSMZAQSWizxKqCUvvyWbJcnsS5LMghnZrd3jN7JuFyQYwxQx6NCZJMz9zs3W5H2KhBRHpRHLQ176eZDbgnKkV",
  "key42": "3iGMp1AkWjAVuUrfhDD8CL6srxyyBJwuVdRwqAoHioy6RcmUKqng7MkjjoC8oVAYTm93k2w5y6qjZmmZNosPziK1",
  "key43": "ugUPBq347S2yK8kEM7y7SX9K4HJ8FsotC3zZPeVeTa2a9mKBqQjcJdU8WZ7N7qwUoVcJgtsVkPBdsYKSbHS2GaT"
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
