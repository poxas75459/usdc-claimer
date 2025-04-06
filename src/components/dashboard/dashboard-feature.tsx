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
    "5Br8w8PRLaAAb1pvqCfEG9T1knNUAEpyG3yYUGRzvab2bQVYcwzgy1aYs1ovpidsyaUpCGu96Tr78TrsUtZqYM4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "itRfYyb8FMd6qXb7ymN5hVhnjGPvykMwuLSFk2vwQssBwSzsb7TrmNd6sCcxgZFdDJpTP4YDsfYifQwpLE2rRFn",
  "key1": "4t1dEJKEWaUqT5BgU4arxT3UUn7YTymBqmp1B1baG3cwjcMkMBxRJpmLbxcXZoeCPjKN4bH533reRZCyDH9pKLnP",
  "key2": "4HVWhZNPs1N3P68LsYwAb48kHkJ4d2HGWFp8kxuC1PEsD65PeTXvD1f1GCvKJKTG2qBQWhvgfbRdGMD4FWWBadFZ",
  "key3": "4uFjrrDyWDivevE6aEm9auWmzcVwAacAnpYWUjg6HrWLuJ7h4c4Vp6U7J7ccV4iTn9CS6K3fc3eJnChpsmV8Ptm9",
  "key4": "3MULEFcFgKzA8HD652TJzLhJk4zsiUDi2qoLApmuHgFTVhuCrj1ZojNmtdDoecxVZnbXNpEzXP44gb7EwUyWDixg",
  "key5": "3qjcAzVSWdiTtT6svJKKicGRVcpvSYD2JJnHr9pQYTJNggWVPKZU2GgQENxhZkQnDAvXGosJe6Buxdrvkqm1roQ9",
  "key6": "3FYdLfLjFYoUanDgecRKAmhU2uWyheyoCQCVLHbDF9GVQ4VhWvAB3Mixvnvp1cgJty2ToPCZx3CD8FBPpYTK1p66",
  "key7": "4pQkMGejGrzmgo3XHWDNtGbyqRNdSNoNCpvftnp5tY1BL15PKw2urXTknpYvJzFfDG2Gf7crqERafjFbHy8xjoSR",
  "key8": "67FMF7UbDFcSxKY6zLkAp62JGg4f6PA1kQd3Mem2iBSFJ7ZZ7CxoyPqTc88xstHqMtWQctEj4VaUVMcA9wswp1VM",
  "key9": "4MakERgBBCVXtfxqFMydxFE5eKqCkHWxVUat5Cw1hAkXjiMVQAxuvXF5FMoixb16HXCxbodwHQ1RXDVKYDFebpSc",
  "key10": "5yseVytAS7EhYzvShWf5NUfbRiopZb8y1YoPdwBVSiW8uq7356ruooJwRPncttDWbN3JWcfx8n4tWg5cR69J7nex",
  "key11": "4hrZqTnVFPsqARWWTHMabcP9ASaAQLUWbPaSvLt8ioChCSCYGJgQ2wt4UFqphq4ivRxQFUmaNTJ8Q41Z9D6AhT5q",
  "key12": "5paLJwG6k8zpNku14ytWYbY5GJF4xsQarUAfi4uewCcBiqJKZsYfnhXZUk7o5g67cBkTotkm7ahCKNTiURMDy8h5",
  "key13": "23Nuu4HDWZfKDjuAU7pVgx57iwfcvvTpEKQrqzeb3d4NAvBPXbNBw1o7HpoALhnFY7WF9A2EbgHwX7DcjxRo3zdk",
  "key14": "DJkQRr7LAbZi1uipo4nrqsp7urKbf6tWFkKyP7FQSRBUx9z4z9kx7RbkC4EUhQSTBrmhjDzy2hZLpgcmbASX155",
  "key15": "5yi8hddmwoNfZ835LY7Xx2snTzES7W3eQvuaw7VKMm6Z8PAZWJQ2nEkdHgi1bkq88y25eetDhXS9exJWGsv1kGhB",
  "key16": "3JKQqGK3U2zcDoW9uUnmJFJNU4iHTS6KsJ1hhqg1KkUqKkvif16aez3218XKeSKYoqf3FBVfiPssDdLuyAaYPQ4D",
  "key17": "5bQKWZQpQRWLYDAaGqR4Lnb4RdZHrAYbrTZbRhdLkCaeF2u7aUubmVmN9uggBudSufkehujP3H5MggDxBbsRj7dJ",
  "key18": "4iGABadNnZoCtbFPgF2JyjNtcSswB2Z8amJCTSBxSDKtUWFJKSveGFHwUE1Qtj1zQVpBuTwTaiwCTx1WyirkmjDc",
  "key19": "5uHHBSwoe8SiN1xrFssLWgLCbjpbVNS2WtiAUW2kwr8W3SGQfMdXVox6RAZbjrpjXg8cSWVpepKzzHN72v3e85Rv",
  "key20": "2iQTg6qcE6HF17oxcADbKBNqmmH2cXAaFtGvtKqj2VK5WfiwdDGXCsVboY7h1QcHo8hAZMCa5bzxqaFJmApwdrU5",
  "key21": "2jMzqknvEZ1SAmVB43Lk6Rq5q5Mv9AVL9f7tZ34v6E8MTUAVFgbPsAFMjujHFngRpWLFwrTenxBR7agDRpW9UjmF",
  "key22": "5pYkSoEdaEUEuUUoX3prHmMZayt7YNhxXHUrm1Dx6KwkmXgT6BJCBwzSZgzGF7TFwy47b4kpD6Ej3XPiHfk1NxGH",
  "key23": "2hBaUddooutkxrNjofvpaHvPjja6dN6EVsuJ8FsYqshzKVm8i8hJLqNu2h6S2kft78iFVRy23VBFEJVi7SXskTgu",
  "key24": "2sW3CAyTyYsWgWWeSFvFJ2tmJ3qHQKSMB2KzM4FTRpreTun2SvA1rQJ9vRuF3D9WMkEN6w7hHxrpT9E2tsYDDx3",
  "key25": "52Aiw6uQrkk4RmfQf74nQ5kXC7NLDkamE1w29Hc3zTYjpBM66m91WhLVtyG8BXuXg55Kkaha4oF3ahfGwcd6gZZY",
  "key26": "2js7HL1NJBpmE6Hc9e2Tc6FzFcJQjMsLaPysdrLBdJcyFQnD5QXyt9EfEuUjLjFNFCSJRAnaASpyQPvJReDBJrh4",
  "key27": "2byvDVYmSkGXtuQSeJTkxi5pXnvKAUZtQNvKTbwtvCjaSgY6rBUyZ7v9QvLz7fiNGQqTxdHZxK9XNGw8qzqM2DxB",
  "key28": "27JPux71m2cpdpWqh5morWnQbJ189DfNGhDfXKiYB8RFakp44C6i2Jbu9uA3t2mHvWm5S7GeRQZ5vQxRxNo8ydNm",
  "key29": "4YoyuWGaXtXQ7PQiU3esyuMf8JwJSEYKneJdxwtbQXpUVoo1YuTopt1BDJoieRTaTFUpQxZ3VA96jkdBM9xNcirC",
  "key30": "5TZdzLWNzefYoWWcNNwnvHiWbkPqat97muYpVmWKFeAV86ifBQJS4e2Lnwby3KeCzbX55RjTHuEEEpvM7r1L96Sd",
  "key31": "5DM2W7nGXPwrgrXZgbvVFTVfQV7MV91PK9TEebR2fQDLfm6JtndBJRR7cC1S7Zs1RkoaNvNxrpNxdcMxUvRRMG9T",
  "key32": "2rJkQf2CYm4xoWLjqHgQ9tChLYPCErSeLPTgWbQEko16LqwDTWJfMqbbdpZyEASCujDag3qdnAyyTJ42hxPSLtd8",
  "key33": "61t7oSXTWRw3SxC2rvLX88J2im1nKLzCW9ySkLWPocpud4Mt7xhkZFTPXgv5vJPrHjvbotHPSF1djhnbfBQeAyep",
  "key34": "1gW6TJp7tyi3mLxXd3GKDFtVsNQfqtYJFXGRk2kk6nxo8v88s86Zc7ZsTkaGSr5unR7Uo58v37dEQUgw8DbxqZj",
  "key35": "2cjA9HVsxFTVzcdxKn4SdUiadcAMU2RY5SQYii8rNC4QNhidQ7hLigQJ8k42XCFL4dgMK9QULi6S4ZjeB9uPhATr",
  "key36": "4RbFQpPBP6Gxu8AySX2nccFaGFtejjNRq9ckXTtJtSg55vjgtS3BCiM7PEHSCPpkHUgE2wVpJPoEFxKcDKEQjBJw",
  "key37": "JHLE36T8LzcVgXnqAGjskvvei35pVCraxqHUoaUzBEeHeMaUZCd92kcGmbaGW8M33Rq5ZdVGewk4zL5uri9Ckbp",
  "key38": "4f5vNCMATH43ozJ5VzjJ8wouirNKJbm8YL3s7J2peDzstFU1YfsNjhrp6SJNPeVq6Hsr9QEeV53LZ4qCTeoqvpLK",
  "key39": "5oVHp8Sh5q12H8BG3SktYpzZtDp4NF7dBZHZ4jM8X2d2U4EsoADAGM4SMoAKKbUfvt2q3KmE9LEzfy56oBffJfch",
  "key40": "5jmqYc5YcHShRDXUDT9Z315GtJZ8fbb5LVBNUWt6f1KncB9Be8uYZ1H5skvfbVPTxWqdkFiN8hfZNT3BNWTqxW8B",
  "key41": "xZaR9eyYMm3JgVVC12GhGSr33mbtqJnej5gfdbkfhEdVtvykvf642B8A3ExGpac6JhLT38HhiP1vuwdV2bwpwLY",
  "key42": "4i9mc6dBipJjn4wnR721YS9AKJGVP2qW7qec4CU8dtApNveZ2KrpNQmzT6YKeEM5pp9mksQAkGo8Qmc5fueHct5A",
  "key43": "287BL7KCG9Mgx17a8Xtv2a65MCAWGNbD7PWyjjHoeHmA53L8meUBjuXXZPKGDhXaUwkussfaDxJS3bwVXtwudP4Y",
  "key44": "33FxL6n3htGhy92UzYdPK3adsc7gNKFiue89aurApsjSLmsYX3N6YnXM1MGMwS8e6cH3mRYx7o4FFJkQSD6HT1vc",
  "key45": "48m3P4eBeC4ndMrverhtwZTTUfT1ZchZ6vhewiF1ZouT3tmy7ATSL2ZhZiGVSfK9Y2573rF2KhvD8k71SpAVhvmi",
  "key46": "3cgVvoGGvH5Hru37ZzAhLgWBmeVmhPQVRKPzCnBVQC5r2jPaYm9PHc7BncZK1YGLaSCSXTkn8fonr4wLrzGkZN4p"
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
