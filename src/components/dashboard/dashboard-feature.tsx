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
    "NuexhnkkNuJRi55dsDPuN1gyTtfoDQs67ve5e81oJ1mnrJzT3kr3xwuo9eUbviRSAkLZSPBj141jvnDBtrtPLqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ksVgdRshLQPmuze4AtfA9Vke1GQtR1n5dHshRA3VMXroPjTUmqHVFp1o4eNHYPZGbhMqT1bHxoxD4EkD5dFi4At",
  "key1": "He2TAawq36DWVqdXZhCBXqNkeoLRMKFexbeWKXT6WFmGkSavxyCpVKfF3VbxDgwFJPXio4F9ULuGv6mJCWgVdRC",
  "key2": "2WbNrY82uzpXPHUwfaPXZGHMYrMZQJ5V8vgHDLcYFHsEK3gFedrzrLqYaEwcJSvAv9nY8owJ1Hh3E67urG6s4Z8F",
  "key3": "4baWW1MSfMB5owfTaXFCQEL1X3PJ9sFuAAzR2xkGJ3fSCMpww46aawGsFRGW3xaZdBnbxJyVCFwz6gsfnQ4cKMkV",
  "key4": "2Ah7FNziwjrB59maSiMjs4mkvW9WZH1gWfsExdK9FY7AE5AAPPqyfwrFVXTX7CH65E3NEnwP37UVRDxd71EuExjp",
  "key5": "27k4ZUyN1nZy6DFCwUQyajHqohKYyMTWVSxRU2kNF9wnSgdcmymvcx5HV99oA8FuCC2NQPt8zsFyvcUENRn83TSe",
  "key6": "3QrPFuiNRp793JG6xL2Ys6ew4ATvrnUdo9xtYHmkW81uh6BiZ5yCWKpUeYP2xpBBXxoReAZckLZK6XgRaafJQTtd",
  "key7": "2qin8Ri55f6bsAhCBiUojFvdUFHbd5Ku1dGiiwqyfTTyC8WiLBqfhCoEuCMRSW9ZdgMrfYZQU7YZoF21XBy8KHnQ",
  "key8": "2LmGEnhEjS36t5B5T94VSCRrhjWdsMjjmQ2fj65NCFq1vFJ2LZhnAqXQVLzMccVYSnMktzFqxvg1CM6pBUr6GyyR",
  "key9": "3RAyBrQotxSj8CqSrhuEfKesWiYKZWN7SMYVd3K3i3ifNoptKstfHLNkeKjY4VQ19PfB2Xq73YUN6PbX8jeWTinj",
  "key10": "5cgJis9TzVnGSaHyAeVa4D9R8UgYtVyoLzxp4ThQ3GXihYNmaWjtXKxcGUDw8e3KpEZKotFezebzWce1yhVN5VRW",
  "key11": "5gnqbKnxesnrz21DRoNnTWUbnFHkPEChmBqzEgDHYeCvGGMFAdjR2iXqsejJywtND8B3RrUgkKjj5dPts7MvoGa7",
  "key12": "kkdEV6reM6xWjRNFwJERctZHNok7USMjjNtjZYg9HW8xh4AG23AxXjsTJHdUpkMorTLTeUDG5tQwXU27iHzytJ2",
  "key13": "65Q3GKGRc3Ye7cr21SbBZwyiQBYsL8MRFjLgDwcZxL4vgAtRJosjCf33xfkMULYDoD3qNL58jXmtauRukfEP4SWs",
  "key14": "2zhVzd6zhtR33A1AJKpjCTvSXnoTwPRg3N9vpuqMreZAYjdTVCefMgreywaYRZgc6bU7dsnQAmYVKW7i8vajGJWw",
  "key15": "39EeBx7KSDZg5RLRJi2Cvce2JVHjgaBE7TRKyYaAoDQPfLU2XGCU89KqEB258m8pisW4j4oFhPfvqwPokXdmLmYL",
  "key16": "4GQrFhaREcoYBwx5fWHsEjtzaisG579pr3QetteTm7UAFzYdwtByPsjzfDsHVY6AcyNcN1KLMmchfnkmZDuNnFRe",
  "key17": "5HpzrUkC8WdpNGNAmZasFzZrHK7eoY7q4YY89Rb9rn8nixA149S91a1w96fRW65U1J29SHtCNjXjGFQuFv2AoH2u",
  "key18": "mjfrwDLD5PAAgcPeo3HNMKHKNTuXb2ZaXtEpuYUh2HeTijUT5voYKDXZvm1EgQxbJdUucqdhhG5CepyEuUyXvmn",
  "key19": "5d29Hd6weAq9DVRLT5c7Zy8cnsahUfktt661caSwSjvkLm6tpcw6Bev5QuAZ8b47HDLW79DjiGgHMMcUr7SgALQm",
  "key20": "2RgwCuPTVmS4nko1AyyV4wKrgENwSvSACH98gZHEy9uX7ZpSfQxKjv1iiRQmh6KHRs7UkUg4P1F9nbCkjrvrM6P4",
  "key21": "2QLAhh33DeksgKmNFFG9RYc9VAddeJH92Wmr1nDuNPnL9CPDuCSJGDMNp7avsZTrvx9gvSrDzy3XJ8DdBhXu5tg3",
  "key22": "5reXdoogra9JAnpX1DD4jBi68FNqTEen4eRNiEPimgoSV4wXT89ab3NgaYjp8FNGksVUn14RHR9g98hj8sHoV3No",
  "key23": "5fiSyMsNtXD24hptYJc8tfkyZEouponvWqY9i21LMKo4tsfSHLEBZg5voBS7LdxE6zkAbB3sDY2cEG1817jkAYg6",
  "key24": "5NqVQJPeRPr8yLkTVigexCyDETRRS1MX76dFbGBAXe5hY2TxSWTqJGhXSiEcEjB6UvLg7KxaZQgxD8o6HadCUcWB",
  "key25": "4MYTeJ2oLrjv37LxqbK3DmEMu1wjtnG4eUEk4vh2yuaJnKEt9aeCLLj7DGrKcfcRCqKDSMNNvy8iKa3nRm32KQmA",
  "key26": "5ainwVgPp4R4Cs8DkPF3hQ7mUgqjFH8o5LuwKsjmJDNdUikTi36BZg7WLXexiRwkh3m2Wh1HH6fTnB2rJYrDbceo",
  "key27": "4zHrBc983zyfTGyUFUhKkEBmpCyGck7MUrQFu5NxDbe8vbayBnMzbDTa9CzT4eeewkfjus96SJfM63MJhNcNgsZk",
  "key28": "3Dvenaf5PHoiketfPEVWF1k7FsFJw7it9dYiddj79Um7uqvJvHX1RkYaa4MStiebHWFvyeSHB8KLG1cUv6mLoJyC",
  "key29": "ko642D5ktwCXnsHRttFaFAMGE6YfWgtcD31unHPR1RYMdMkMfMgiCvmtK1j8XuujwShLnkaedALJM6Z7j1nSEoj",
  "key30": "2f6SjmXZbggPYdGkRgaB3me71VSeTtzRQdD4qyvTbwVDDe4HCyJGABaG2WGSu7UbJcAmcn9nSL48QnKHpeTjfG7F",
  "key31": "47AAy59kiFDXbUdQ8iiEvthMisB6b35z96mMV1cKKPAet495hiBVzCqKxanZjopkd82vGymjQoghBnFQUY86d8mf",
  "key32": "1kkVQcFWaVWBUq6StkSkr1SbAoobCvFkPBiKZCNzbsJzpZ5J5dMVdvXkDfTTXAqEkVgKFbBLCqYZsEp7UiFh7Kg",
  "key33": "2QP6dMsEcY4J9KU5WJAiBTo2M5nceL5syqLYV5nVuQEKZvuQbFe7fuN3bnpXvfLQ1an2NKT6pVGJvMUxaX2YLPTL",
  "key34": "5MUM8MDZux2JP9A4ppu7VBzwGHiHeYBkp9nEZNwEuXSMThJfN4kiNVj2AhhQGempzetzUdPUyBadUSP1RhKDLG81",
  "key35": "4Vca4fAki8MgKfNf5bfDphYx6RxLPKbK8SHm2QDkhZh5TSLjL5gUDLPPfJqRxexDPG4PG7Uq4CXQAefNzZJmVWPe",
  "key36": "Q9s5UrJxx9gkNZnzra4AhDdFf7jyDbpXqKxxBvPCpvKB3mp91aiaHnkeGeyLSkAH1wZpGpSrxKqSqDsieSLHCvp",
  "key37": "5zn3EP27QEb8birA9aQnjvrbSobP4cEGzmrVyThzPYkVgBdkQh1xM5ej9SXcdDN8xSrpktbvSvZKC6riK6zDwde8",
  "key38": "5A14dr4Qp27P2qYKtk9mTvyXrHz81JfYZPUWXcUYErRcA4h8szrmwy7SF7RaX7tDru3gMQXJPMCjwrNGm7xegarL",
  "key39": "2Wzq7rZsfRk3DGJPvGFLWjZ5ihxcQNU6vQNyD2kX1zMRC1mtwYGfpzREgxH2aF61unCUFuacjY4HnpNRQcQ562VN"
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
