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
    "3vKxDUfgbg4bPrrAHBhw5oWhoAXpuSgJWczP7GC7HEEvN8G4R41XM26tGexkiYtgh3Hvkf8LFJeQrp8whB2o9eTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jh9sYmVTkhZc3kHatNHt81FbVrmEiC5BfwLPGu16H5RuUEppxQbxrkmYhnDgxZi3s58733JDAfCh9wu4twgKHnd",
  "key1": "5uXzDgvNE9QCxrZ45VEchtRxdUcxk3vYECyAEERuPmtGa71SVM5wAvwBYqXFYRxP8JUvJZHguEYPXjNE5DeBr3Hg",
  "key2": "63HeggHx2gx67UvJiccvK3oNSrHSNwkcuasttjZrWtHdXLvYdsiJPhWVkaXW2J9HRcr7R8L5WQUTvBFsf7H8MHNi",
  "key3": "2XcndhY3Two8znjftUFBtKPLWjRz6yy1FBsC2u4ULVYtFpwXRRfzpXHDH4XdX1XCzHKgt6Wcm6ZhMiNbVxU7sQxh",
  "key4": "2LXRpgPweRgsSecnt3cHQAR5MV1pCMzgGp2zLHReT5NEDrbHjtwtoXgMu7pk6dBoDNRmc5mGcQGN6meYgmtfYFVv",
  "key5": "62hu4k5VJTjzLtom12s4FHL11juwYccGDGLYMd5C8McKr5jcUjqC8LMAFhwVjCxb4eckwyt6YCSFHtCsap6T8eRy",
  "key6": "4JQvSKDhw1sUG9deJXTaRydNxDVB8tyoTs38irBL2GSc2xh5i4bUeCvv5VKaNwNU7MVjqC7sMoabne9vJRCEm2X9",
  "key7": "PRrPqcCGaAUxUrVCYL9zctxChcZdGVHuwnLHKhMD1v23DjyU7iavPxbBcAzo8CTL5zVsS7QvJDUhywv1rkQqZPr",
  "key8": "5XktBoySA7quiatxMgsV5UrYqBQu3woLYca7WwtHkrUED7VGvYh7svVawS4hmk2hm8n6was267a2TtkP8VKxab72",
  "key9": "2r8Xu5QX6kB24ffPn45oqUjaXzWFeKhDT9rJgcL2JVLquzbEnJSbTURDGTvorvEt9eFQZ6FYgrhq5eT89dhX16dP",
  "key10": "girEQdfKwYcwfH6Hp5AfrNEgbucg1c5Fsp9Rczk9GHTkXuDFxVN6WusrEQXPfLQVULuFaNvoHtJv6RpYom1hmLu",
  "key11": "5WcfUwrH9iLsjQJFB5s1ELGwvgnT4CR6NpudAXsZDQGphxTLnMai6PHAccDVjP677FGyWq4XhLCkp5hu2oqaRJmE",
  "key12": "24GLVsdwRLQxL2jfWFLRwbvEFZjBwLnmRaySDuKEK92VbS58YP9CxeNnExuu4RYfVXiTZT9Zgijg2VDFZHd1PoJJ",
  "key13": "3g6zeWKMKhwMjFivSBwi4xfFhAU9tBawEhUE7AwUE2ezKXjxnHshYJSkxdJYKFiaPHYg4G12b9457zf8CmweA3o1",
  "key14": "3s8MdP8P5b5uLnhvfc2hZc9eRbJA5HLWSVzgoeJRr38t2YquhwPUsELxv3wk9gD7jnJduPhdpEFou9PmJGX93rYv",
  "key15": "5ZPcpqMZZWFFbW1ZbdQHB9jCSHci6Ju3Z2fceCcsJvq63aYb41aporqnFnuhPeahcNuMHe2LFSYw2xuYnhtaTBhi",
  "key16": "3q5bPHkXUsNjLmpnBj5VvWx2supc4E2Lypbbt6HWzaxPsDYzHHWVBu4m68X5V7M8n9WUPWbPRdbq8kW5wbapbTH1",
  "key17": "9QHa7NRFCxhuiVC5T6rpGQrsRyS34DrC4dEcmcBasRYEnJjwGA4vpWMtFEENQuT9z7fqvU386oB9UZqnuL4PruS",
  "key18": "2jW4bhJDqSTCArgNHxquM1DMwDXJanykgdmNhf1s7PPpicTp22FVBHL4Zdf6CFvpYe1uPXMCSNRqjmSuEqAW4h1x",
  "key19": "3x9VyccPqNWbGnxbaginBgQ8g4qDabE3BED1nC4JzFxGXwwWjH7GEAhQTmMHjyeT8ibYiyB7tqk8GjihihmPPGBA",
  "key20": "4TPNFzNPEEvcv1jWdWsiGtx8UKg16tZX3aV1ND4QcxrmckDb1pqZwGB8ah7MTVKyRmv6SBoMvB9GSyTzL9fL3Cku",
  "key21": "2F7pVoda19VVKJpD5XbnotG9icP9XhHx7i5ppk6EvaotuuYBU3GguK7GX2LpKFqmETRPbcUCfcdervwBFcbAF6x2",
  "key22": "5UdRnCzCSUdev66QAx9giVLrwb1hTcRX42AaT9ZaqDVixNRtRHqwgNJ9WxMbfKyWMY1DetcWu72KjM3JzGt2twcP",
  "key23": "3g4NsDcSmVnDzmqgoo9Eu5zPhLYGaoAtfwgtNmSJ4donCJatWSQsryrdA1h9nf4KTAtLi3f3pf2FbHsi3h8ZQRvd",
  "key24": "46QuGy9ppyPsrdVQvj5TTmviz1jT8eebhj6jrMXQ6Besqi8pC9yZpzBSasJ48Wa7Y9dGg9MA4UieDJ8xigoZzpcf",
  "key25": "38d77P3YRZqaq4Hm6eMdPQP33pKYYRGnmXMb3YPF4k8UrvD4n6R2A8w9mM7renUWb4DYeH353BPMBumjECXt1bnE",
  "key26": "4c8rQ8iXAyVmMpvnx87X8EQGLBnccsKqoh59iWPgcwGvnpnRP81niLSB9bakkS1KicmECNL6z7YED9ifqfRUPLj1",
  "key27": "3mpP9cfMZM3VebPfNk41PEc7bsPrRZDRBcK9rZW2U23xd5xGTSwQYwPoWAWdexfVqjGTF4KgXugq9ojYxuiftXNW",
  "key28": "2kheKZHYMghqgGr5M8uAsd1GNhz2wUJW3JqCgKicu7CGnZMzAMdBqSeiRkwvntFP8bcMEarw6ErE7LU98pArqswT",
  "key29": "3TuGD9pSx9y5XJXxMb5nzLYud26wThDbHorcGeKuoHNb4JhdwddE4kUKXXbNiZraf9gcvsKqedqto3GXoNRKextx",
  "key30": "3RxVjweYngabbqxkwwuEr1CGXSPcUR8nu1BbZuMR7RDx2dDP9xdBFzD1WpaYa1EVWN8XqRorhYtrm7snNVaq2NS2",
  "key31": "2Gs6GpbTPhvnnZZ4rygH9jrZs5gJ8m3bVixzU1TMJAPyyQ8ZimSvh2VJEGDxEcHtFKjxv1D4mhwU8W94ksLYm2zY",
  "key32": "3K1Uqfv52JVfB8me5fJXjtPP8bz5r18MQ1jgcDkPvndupUtRwDhNfV45r5rsbESVjACnzkabY5PP3yu95iA4VPvH",
  "key33": "2EqaUgzKdamGd5PnN27haKDfdMBCLs713Yq8aw5RGJQcEvJCPMLyyVDRevnKQWR3M4FeYPYvq4n4JBm3aUToUBu2",
  "key34": "2RPVPjgVvaoM6rLJq5MCKPEWABgfCvYmPSgpq8428QGmQtfSAZHGp3SX6xjTSdF45uhv7uVUdqjFumBXbx4eDVv9",
  "key35": "4WZRTmeS3gE82LvN4cvPQijYL8LnSNamd9hEAXYEMiV8zSreuFMkK1VtYuzqVcMVfH93g79qr59tVRU8Mrgq7wNo"
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
