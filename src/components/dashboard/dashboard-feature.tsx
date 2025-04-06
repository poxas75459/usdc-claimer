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
    "66tZ2DmuwVEprJCMGiEaXziEHyGpfBXHyxLDQFB5cSzKWXbv992oTNqojdmYcuwZ8aCTeApotY6mUgGBSsXqM2G6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hTb6AxgqPbBPB1Np33XvzrBp2MhH83FBgM79L8canXrjaqEh4gL4nC8mrE1b8fD7u3iAXrqcov7bgLzZr8QpVnK",
  "key1": "2iZPZMCFuGWp2TJuQ92aEnh3TJNDRWwus2agY9atnfH7NSMUspwuzc1AdyE4fftocZYubw1SvHQNYFrCgHyL6rZq",
  "key2": "3H5ADz8dLk2Dmvjm5iNBQhPZCGfCeQ5jpHA9YzQZF7FRCs6fyxXUbbtHRkFPof2GSdBDJX6wamhD43De2N1pi6eh",
  "key3": "6kBckWAqGzZC4cdkYig46ibtY58LGi7sGKZrhhxDHdoxyHeqiG1eJwvHBcoxCUkTYCYn1W7t8iz1EeaRNdmdxeR",
  "key4": "2d6CtEEvnUWX8EjS47tPgp3wzYefk2f6gtNfFv2gyht6pFnJ1qa3Gvv35pqr35ALNDQbE4XtRceY3pxvs2r6xSUY",
  "key5": "5MaFkhodPZGzRdM3dorq4AafMpzApjjZd6mpL6pWcogyM7qc7fbi8H2FmhYgkR9J2rASt2TDgSkCxGoCd7auX7ff",
  "key6": "4N3zk5xrYqvJhE5qcaP4vUN46d7yHGACJVxAmcjjr7REh45jxzzeyC9myfTKPVVxFi7oCYSZ1MZbrZo2FPiRELCi",
  "key7": "4qCtvztc7kHVAMzqT3HoHbsooCuxTWtjR3xHQQz122RDKoLn9HM176UWh1KrNQ7KZsgvefduB2RvhHQbM7361s3p",
  "key8": "bn2286AMpqrpxmBoPcxKu7nPn34ixpdeij8jaPXhGL8hiC6kPUNqhUmzS1KRXpBmUV77pNJyfD26nFdJBTPVUhy",
  "key9": "4KcUjywKxDnFHLE6zs6sPPUtgGhdQaVZ1AsM7j6phWaJCWQYoQ8htL4ir64tNXzPXgrTGkFFmNS9jUNWzAstRJAe",
  "key10": "4cu5Xty1BdNVuZTPGCBrYXd4sRCpfcTYpVRkd4nynktJs1F1zA7k7PTBLfkVL9Z6ZXycz95F2vy5T4vMLyXjZaYu",
  "key11": "66YgPDoZnUuXacWdgG9CFyRhZ1M8gSzGXnqfRM4jY8uX7hJj6HpQBkwXMgsRvM6vEgTd3YZqzcmXb7QcNG1YAyeS",
  "key12": "2KevGzbBFwj2gTZoMrRhgZnqaohkRLPPUqsx89NMfZG1fLgm8xZiaPzDM7NttrCFZ7Rzr6TrgExkB9wrsK61e7X3",
  "key13": "47RE2TEwZW4gmfYaqhnVgrErH1qXZY2YfDBCJPrscQTBc9VdrtdPxG6jDfrHx1WSuJUL1bhB55bC16f9ps2WJkdQ",
  "key14": "5HWiu8gTMnZaJgE9nEpbPLC4nGCR93jqvFNcQ9fQtsSYRSFZe8TNYAJZgxYLHBE5EcC5uST4jBDEGrdip8KPseRs",
  "key15": "93VVW3ThLBcVro79mopqMbUS5jrZGNvsQztw9jWQe52Z7JR1NCRdVxw2wTNZuYj8nxs7qTGWHfwr1gbXPJdKbM2",
  "key16": "3oTtAJGFdBmRduFiSkksAaYeiEeUe2dLTHMpw35DoGbHCoeTBJm4FFJ3WbsiJqdhM4trkT8UHft1SPYEsnMdWXd8",
  "key17": "4ahSVp7yqDSfU4dVHLUexzvCF6m3avKqjzZwpUWnuLzjNf7pFtngg1b5tWsqPdKnxfhY5zvnCv4fLrprh93Kwm9j",
  "key18": "5eUNVG8m8ENXwHtKfi1ZssxwLt1twRRnG8efYcU2FPGEswqkCHysKWYXhXAK9qEeYA9nwpHfhBp2fiBrHrH4nwX5",
  "key19": "3L8n4trWH1jfDzfbxMxFbbNrW82D4bCXyaTC9o4kx3pmtqgYAHNMHByrfY59KYNsinyrbvrXGFaMbbDEfWUsq3Jf",
  "key20": "2GKFp4Ams5FtdWqWKHt4NZLtV5FMk59SkNjZiQ9tbRZfeCHTaXTah9M2QFRZM285w75VZtk5ECDahFisigiXjMna",
  "key21": "4YUFsXGFLfXeUFYSD2WzLFjb9ywYCis9x9VsVrsodCPoJbuauSDxDAhq73nvhK1mbkxqSmzaHwKBxpJ8LWCUpmtG",
  "key22": "4bXRhVfcAx8DBH36iVRKujoiqzMu2L2cQmZozPsoRZFMbJXcp7c3BdjmkcQiu9DjkAM2W2qtK58mnwq9t5nREyYt",
  "key23": "5BH4GHj5uLC9yBwHoWHNRR5MzHnYBbMNNxcEn6uHcWVDJoymqYo8Q5cyDYeh7LHE7XSrYLjkquZ2kiHZLHmdhYfa",
  "key24": "2SzTGHHsyRSPF8LF84X6H7UNHFYefQ7hV2kzteQroztrdvYmNB6BSodLda1GhWjpZGwDd8zHkNkjiTyXWdnzpczu",
  "key25": "snD4UsDAysXxLyyXdQWyyhHnWwAGdaxD49zAoEfV94rshDyrEPbC3EAY4shMjbqGpiyVwEygSgswVWtVwXKnVoN",
  "key26": "4GUgT8Z9tZG15DyhY1P1CgtY1UuujKy8fcdo9CjgRFYWiEyZL8TzokL9YDWvYXoJ7yGcbzz2Hf5gVHUY5La2KcBo",
  "key27": "5igfV2YjqP1tFr3weniDJ4dR5XPC579yrLV235CQPhkETxRHMR7NWNyMrf5Fxrpd5BxgUhstt9xsJQq6eNEXBfVx",
  "key28": "5L79W8UipCBL8MTfXN9Gg3SeKnWPpAbunbJqDN8f69wUUtwh6sUr8MggVWCjn4Gmn1dSFFyDZ3NmDuTYdmmCNGpW",
  "key29": "6ZeNbVu9H1sU52n1ws1N7EfPCLPifoe3MqmSbK9wNgTMHL5VKo1ySF8HXuBxNFyk3WVkspsCCGnXdxxB5agXSWp",
  "key30": "3EJ2sXf6uEohVouZWWRThKHnWSTEZz4Vka6kWnuKR2eUG5WZ6ZL89NCPzCazZATKexdKuurRf6GZ5NLMoNoCPwVF",
  "key31": "85DGYbeDq5XbMdrmUWTFCx994wHwAjQ9MeRg59ebCeJDbZqkNvRg5PmwwYHM2yJp9CpQVBoc3aRAWThjSKARuq6",
  "key32": "zKLj4ysoiAQX1U2sLT1EaeLtkbQXL1TgwYoxcsjXPfqJPDtcPBNSmqdHFttev4dxufo4VhAVMUY4FbD931tvXqR",
  "key33": "4eSS7dwYq4S3rsmbJp9kebPuYn1nDX7K1Sytytqh5Zz9Powo6Mgpv5aeaJrsovLHFsd7cVmv68uFUCq1fadTWoCJ",
  "key34": "bCsztv3UjNBPaH67pX76rtSF3U7PWkcyNsvehwSCoSbVnvwVE8qgYczQo9Ps6MBr7HMiyXG5auJgFdTivGcZ467",
  "key35": "3w495pDVVyjUBHuEFmxCXqZXHbV1kZBzMGahN56j5haaJf6mEqFybLo6m4ec4FBtf11trdoDPwMMxrh11k1YsLNi",
  "key36": "48FJXtXCfMm35HkzC84L4GsY7SvwYRRwcfxezsKrEcHqsSXiVq8r67LhPmgCjsPb54hson4ZtdExfwLpJ4Yo3i1K",
  "key37": "4d4zhpHe6zM5k3EzrsDJP2yYSoggJDKy3SYCNcAESSFANnPetSXKZUmarNxnpWhFMMwCDhMqCLuQpQVy5gQNJ7MH",
  "key38": "6zhRKmtvZ2kyGBhWPRMeJsTgSAkqKSAyn2iDqYYgQ3HdcDHjMbohkhKcch2Ybpja6m2u9sQuyt89G9SDdn656Uj",
  "key39": "2xQVTLMynqm5ZTVJ4tJHGNFoYjrjgqKQ54g2Y4jN8WmbFoSpEmU6c1e9qxLoLhaJFWSbCaBVmFYsJnLUrX3eLsuG",
  "key40": "2aotdHQVGSpsbEbw53cxShD3ew7SE8vghVnc6BHCyqU1Ujz3oPyNb7hzk15YYr611TWjwSE23hrHSEAkRefkgB9C",
  "key41": "2m52gd7r1FGgga5AqMT1A1XCv9rjDG7wiUGoALzUUyU7b1APuSB4VmiHfhfdckbx5de9Y2MM6Ds73fnLHPAbVQDW"
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
