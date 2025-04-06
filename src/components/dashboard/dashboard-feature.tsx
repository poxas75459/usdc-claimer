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
    "63HnZwJH3NvNBpMXZ29JawDS8vZYUkC3VdV16w6s8RGfJzX6oQjdJshB7fQA4eaSjN42VqTTPg6phFEmpXyCTd8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EiXzJbwMgqR8kw151chXRPmL32WqSK9YKaeiE2bbDeVax12pRWgSGv1RLuhdc9a9DyaVu2FDY9rD5iVJFuZGnnh",
  "key1": "33mc71eEbjDiaDktmaP2EKj5hnvMay8oJFnxVHYQMkapygpnGuu56ytkTQcfhPK3PfvpKoBDZmeX72NqxcMFYWpP",
  "key2": "2BqYPX4VpKtryCj2gNrBHLoKFoeRtVJxeEb5a7DcpJrU7DjRpiXFAVhFeTLe5kfE81aUJAVdaoa45YcMi1ZLiHt3",
  "key3": "4LiaXDym3hZiBTLDjrP2h4U7brNUscz11wMNnvgDDttcc5LFsE2gdUYfDKZXxVfMoT2aHhfjsyHy3611vWi4cJ2b",
  "key4": "4pPsoNBKwC433Q1uiLEN5mLdBhrwjypojHTWMhRumz8H9ryC3KKN25aiMMD2J2ZnmhhPMrQWMBVTPrrq16umkU8i",
  "key5": "JpQ57qTEc6x6HGF2X4oVEm9TEM1ggAntZuQETLbiFLnKN3dH4N2SJkhL1DSVcss37dJbMuKvZPPBxWsLYmbuasu",
  "key6": "7XVL4YU95Pz18bXupeTQpTV76dJZq2qyg8BsizYqkT2Ptni5wN5cbVBV5YbVnBxuJmW3Cq2mgqnMY2xg25kivb1",
  "key7": "efFwnNJqf9GRYKLkKsq3ZpJrM17WkwiWVBQBppBQ4T7g6iPEFAUeLP4FCZQC7JE1i4ZKBLrspmmPec52yZsvXpP",
  "key8": "4JvDUZQqHyniPZhtN1ZBakZne7JcsMyuF6kh6ZS9VCyKdTgi93ZQb5ZZdZAfY4XFHSikGX7fopNiRNAUhfQyczwW",
  "key9": "3Fyn1TAiVckT9z6FFfXrZMehPkPAkcCeyE33BdLuaaYPApjwrJ4zEhkECZJLpCUK78DcWBbnA5StYkSaLNF5W9bu",
  "key10": "3Jif9ktc1nMJthuK29PhZzv6FvYv6h7ZvL8BCptu7EfP9Japhi4QDZjijdPxD8q1bCWBaV152QzVUbN5BqfZftyT",
  "key11": "3aietUpg3vhD3N9RhuaPSUXdCwKQ9f4Fg69oWeKEH1SscVisx9evT3NeUaYAC67LumFt8qWUV9tU6w4YBJi1XpuE",
  "key12": "5v6RxjrujQhvihrn6zydjgNJ1cYKgVkBQZAmpjQP4dYhgNrhsZVTS1CxFxg8jTYH14zZHFRjeGWKkvsdnqgd7RDc",
  "key13": "3fqNbx969PHUoAoHeKozwTYw1QK5yGGRWESzPRFxL5ogkcFnNGsPtFrhUSN3c5idBA9njtDMTm5R3W6McraUPcCU",
  "key14": "4Qy9ictgoSehLSK7jwKECRxqSF9vjBFckYa34ThfSb6J3WQ9J2wWtvMBquNy8jdbe4hDVTvau4zG3vijccPnubvH",
  "key15": "XmP4s66D8HjzZXK1NAPjPbopapdrsvzqfeKMxH841Ew4UTBLii8zsfQjATAAZEpzaTHt4XbEPaJAaGUgRVm8JmV",
  "key16": "5PFjKcQeUQJenMNCyHdgKBnacEG9KXpWmPbHdcKXzM9S5iLgpUcEJx6xYm51YeiLmF6ZmzgmSwXuYzN1bLRhcDWf",
  "key17": "5dD1Gjk6jmPL8VGCGVwSEsktin24Te2ReW1LjChQSePw9eUanUwVqReqH74c5Cxo5QA9UTHjYczXaRjB5ywSy88V",
  "key18": "5QFL5BetHZHCcqNkbc9oeyVnCUTSRfKttsdVws5tLmkm6NcG8KX56AmMCZxPj7ibUnpixQuDBeTz8XJHrphqN5u",
  "key19": "24YiQPGAfFfBZ8Zgc6m6vNQdsM89zQHwvG3gpU8kKrK8rJUQ8gnyCUTbE45HoTxgX7N4fqZ3iwUBw3q51TaV2z13",
  "key20": "4vKjDijPkc9k547URFf7BwgMHN63dXNkTCrhPgc6tZSvS9urQ29qqoXrNiPFAq2ZtTT7ZjmL6onNfY5Tmr7UGEjp",
  "key21": "2v67BLuoPbTn9mfKS9gFkN2FrWNnYukj7PTFAFaDrpm7Rf4vLHPnLmHhvS1wyUHovpAdGCxQfmhxr2FE1g8Roi7v",
  "key22": "4XjF2QMTW8D7STQJdBETyVfkN1pKRiikZ91FyvWrvUHVA2duMFarjDdv6ZzUjkYZLtfwCsPRJf1jVuzzZ7m3Szkm",
  "key23": "63sevVM2CaUyidxhJL5j69LJZPxrJf1cBNT9pJiBHyd3AkPWmu1wDEDw7oHicPcob6M7NYb1mdjuroQCg2ArJgrg",
  "key24": "4H3mCqsuezGnV9tMhgB4L24pFDWEuya3AQLBGeYma1v3EHN7tH9k9iXUevxmRmfLZraoAP8fF2qHvCAnPYZankAH",
  "key25": "zYMUKfwDg84w8HfCsafWY6Tbx5CnkRQ47MpDt8eGAaMASMRDjR8S5ahHfknDTdYsE1HPftBugqqQRVTvCGK8kXH",
  "key26": "5ABkRDAKvA6r5yiPKXoFg4yFzAbWJuvkscfkvQNRFMtuRkj7BHnQkpfcfBV1hjhYCX4vgv7DYY8pCnyAMSMKHWPR",
  "key27": "6521ZyDXYKoMpWQmfYi2D9n6NV3tb1fn2xPtDo4QZq1StcNUfCML35fkn1A25r6j2Z8rdeDs8pmBq7vDrBMCgrzo",
  "key28": "46XPC9AW2itCDThDVXZhtiRFuonZpGppEfoBPs1wEwLGQoAMTMWGs48iZYXKxqQrhdBkV1xMAnstGtQxSVKZLMjN",
  "key29": "5QqL5T9izN4yk4twrjjRFGBG1agtxfv7y11DJmVAdNNup3ZzhpYAe7M3JF7vKNWSifnqxMU2MSdJ5tZPsbrdJgy1",
  "key30": "5jPwePgQCr5FKM5hiQzTzbkDT7n2vA2mvDFiCYiydEpFB6d1cJG6DrcPXgZCKc7z1CGvownXyHUdkLN9MFjjU8EA",
  "key31": "48NarDBCaMSNLk9itXDvG7dh939V3C4PWMqPMddXSPeGZbxJJyZWJ3CSSb65QMS4HUMXPugsbzYvb7cJYRJpkNVi",
  "key32": "4wrAsfhooySfbJg1ejZxgXGKwZXEEB8sDfHSq2gH3JvEjk7VJtEW4egh6qH2tXUCDrTNee9nxf8ZmcV26pPwY5xJ",
  "key33": "A2d6jhqD2Pccgzh24xS3FKvAJQS2K3BcVRUWBG7pwe9tpxgpzS1ERqurNLphz8uN7nJRzxjbv51QponsuVa3VEw"
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
