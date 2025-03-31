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
    "rpMJxjERvDgNWc5SYMGXUGpsBV88nkQ5matr9uNBCkPmYafAxoEBvWSoRNjzvR7C2pSRwKPWMj7orF1bLkGEvKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfuRH3ioPfb8VbqajwWCQkLpqZaTKHofVQq3uk8dJMhedCohP3K2tQ9P7FCcW6r5uvPqBftvK6w92Kk3so7aYNL",
  "key1": "fZ5k72GEZs5ova8f1wwxzBHg2ZNYJcuWtgBBdszHMcSNadgX5N9tu9hAcyzjDPDwKUwenE3ugmNykBL6DwAykT6",
  "key2": "5fB8fK7p2nMAaA4eg4SfvwfhwyWW2aVZnbAT1imDk6FNYyBKmSPmodNKjnB75uB3btB3V3ew1C8rin9PRF8H65DZ",
  "key3": "3YVYA9s7CrY249qdvAoBv7ciEhE4T2p7SZG4kEZg93Wa58TKB5neyQcsc4F8dn9HQYvtpPtmgedjGGGjmb9CGGG4",
  "key4": "5UYfiqfdpBbcPeyyQti1dwxvP2wpSHWZjRsuQapq5np9B5CZ9jQFYGasrCotxZJcinuQvTDRSbatrd73CQk8Ny4R",
  "key5": "hwCo7YWq3fnNauaFtpUvJNHEiDvVeSToaz2Fb2rYxyj4ktKXFRA7wVyYRrvikfKqThr4ngcPuRWdJenKFw5kSmK",
  "key6": "bT7dAWqiwexHkxpwNaxzzsK8J6ZjNFRkjKNiUrFAmmxhFh34yNsiiebLGoQb9nxfQr7FZdVX2bntHCmeF2kyz7n",
  "key7": "3sUuQfJoxXJTUdZV8z1Kyh9N3NUScdi1BWyPqaSxhZycVfK1e2Cy25YYS685bLyvYh4dUUz9kmvinZTH52SEj4Qq",
  "key8": "4f1WtyjpZXrmzHMqVAigzxGH1ZGsuqbsAoeB1ZToSwa62C7dEN1iWW5GboKz6uTagNmZmFV1c896hD8Rrz8dZCG7",
  "key9": "KvayM7cMPWR1txRqXZuVmzVxuddUkP5RW7cEmJW5JqoaKnNiRFyx6b95fShGxqpBtmQNTomfUZMafkJAkQbFrRv",
  "key10": "3nKbWtv1mR5VJdd9mgMngfqD5LqNX9VE8EbwzhAYCibBtWXdaUMbmpW5YacTJJosKATR8mh5bmNeUrpq8KsJWu5j",
  "key11": "HYzQsRrBfHbnrd15pi5nDqY2erSjaQRMp5wChSK4dcoHmQESm7rAFhiqVrDdCnQ65zuydtd53M2tWQhNmNDCxUU",
  "key12": "5dXMhTFhtj4xbWttLY9YGbMvYF77PzHfp1QFaGqRaqmnaPDVwQbJB5Goc3Du5w7swcRgCko2VPWfHhob8ahuVbA2",
  "key13": "2P8eiMgdpxDMefrbBkouKmHQSaXDLrmuiAQ8RMhoDuTdUNGjokbLXdEFHFFGNp8Hr5vGt8cxvMPEbbRtRLtpVhuF",
  "key14": "3dZo3H65mW8j7FNoJC5MBLWJSby6dVSCQfaRi3m82sda3rEtf6p47JABLY7yPf3GNCdTCVnTXTff8rvdUMdGutZq",
  "key15": "2e7z2ZVGV8P6DgsJSixNnc8qoUBM823MY5nGy5Az4sYQfEGuj9Pj6FRkAJyxfMdVceFxRVahriJnmWdbNND6jU6t",
  "key16": "4DqSeSK44qU8qmmrAw28e6EGAiBpUiVhp1qeHhCPAKX36kArxhEPeVy7WyRCQBg4UuqPczdgNmJ9wvKJPx9AwBaZ",
  "key17": "5FeHgcECqobmxvoYQbwBcmTin9W4HLepv2ZWmFJMSpMLWMgevLoA2wudU2TaR5XnDSAPesCCCQZHehsrRXcSP2pZ",
  "key18": "4fFXsDrV6EgoDSFjQmrNYse3X9ob9Bj55z3vkP1fEpfQBeF8bAcnaKmQhUXkQUEon7qzu5mNkwwXRzpTrrqbPGCw",
  "key19": "4NykjfbWGtianpAEimN7pKQuEopYxJxDEgRenQVcXKuYwmtSHHCL6vFDi3RgtQ9Wcj3Zg9q2LpBoBVZ5sQ525dRE",
  "key20": "4GChHWr7Y3K4MYyrG1pWGRKYFextsyC1U4ZWCas2qkddZbq2tPfNKCfDjRyd9xodPxJ4c1Ms8ijEa1dyrimfE6jB",
  "key21": "5G8TqPA4GjV5MtuhyUv2znmyCYPAaHBXem7dXpfhXyc934QTiSiaKDnx7CCxmnSRaUjXZWKN3KoDjvcXix8R6jQZ",
  "key22": "3ba3H9dhdzJ2s6AorJUbgyq7MnjTmN8LuNKBg26m3MyMj6Vm1MF4hnQJTn6hHkZwv7k8N8aKj39arpRqXqxUk2gb",
  "key23": "3PtukohCfkjo8WEKKkX6KatwYThBmakEScTRStXsUabuDQVbmxj7A5wxRzrUkXbRStfV6NAdkKcgzVLSwxZyQgPx",
  "key24": "PTComkTppW2LxEgQNwVFyGUMfrFqgyAmMYh5ykmsx9wStMnEYFXH1j8EAj34fpjzP6sfp7YwAhkcRdRTLR7CUMK",
  "key25": "2W9idPKztaHu7eBy271wA8efkbhkWX2jeg9Nxu1N6orsmkdMUGipsw47aRrP2eYmokvfQypPNxdTrhSPHHADbeaP",
  "key26": "jjoqYTWJ8u4aWNGSD67cDGwK4bLhAuVoCp72Hi82mDRBbaGKtXay6W1vcRG2GjWhBR7QgV9SiNmWfH5GRxfstUk",
  "key27": "4PJGz9YVJFhb3xTMLyzjqFk9ZF6G9SmWLwbXVUe71pbXbcz8HyjHT26AQsN4vuLkncXPGGy3ZojmNwqngjKNySnd",
  "key28": "51SqERfGNESsBoNihPaBioogXkSnosqvRSPnVgMFwT65D79t3L5GPXv8cHAuPEmnj7AkyM1gABQWt4KxRZXsXC61",
  "key29": "45dyXLU5doZYPQ1KDdMpy83YJy852khGMLDa6gtbtdZuHeT8X51rfjTCZuS4zuQ6xHbjV7gGCiweXsdJFc4wq19u",
  "key30": "5zKpGFVKvao2K1QBNPqaCYUEdPMTJa9HuLMyAD41zF8DeWKMb2w6b3Jfx1Hx2VmxTHPC6FeBHZGEpoZtvqLrcWis"
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
