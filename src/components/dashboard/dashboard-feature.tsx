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
    "3S1n2vMAJFWc5QzqVQVjeD6TzyfyDTa6hfjH7XMv4gq1FmfNSctUc2vviF6wvUds1T5MwUJdeQjHBLHXa7LiH1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWAbU6rsNp5J74enxZy2EbdHbUYdLWbVdhhdWj654jmT9f8c9fx1zfPrHxxN9dCsCjFTZro3W7KhHE1Pm7drz8K",
  "key1": "gkhkJgyYpJGHCRH8rzRFu7qDQZLotQbinzbJPHaWfdFdMGpM6Xi7ZYXthWSnrS4gaLmLtPVzpT4CWtMYzcumUyq",
  "key2": "32ofQT2gXatJbNsw3ij511zTXPuuBRqXCkCGZAnFLLJf9pTDNNSapzyw2gmAZLdeWLwNrz4t6DfhWjeoeywoefXs",
  "key3": "5J73sERoqtVqRAwG7PXsxeuvFso2oh6Mrvz5MDzNLY6xDE378145QtYUc77aWtFFNhVUo1wQGKX2MCGhWpbXVFsL",
  "key4": "2mn7uW7n6ehYE86PEZ5SCnNrjDgSGn3ECb2qsYMzPYVcvd3BGZFnHaEfTbt6rzrDnzAbdtAwXGaPQGWpJB8Cgm8r",
  "key5": "4RMq5UfgTS3ZRvfeMkd75rnRgfuGH7Kvq7DZk4RkaBqQ7aAaZj5i23mjBjxbS9HxNPsVPs1KTLC87EuoTzy6Un6e",
  "key6": "5V4enSPSyQPmJJDEBvFAQ2z9V2wM6qLVU6sNVYoD7Bz8YC9SqKsxbcTQTBNJTzjRu9eWWY2BLAxh6QGQRvxF766c",
  "key7": "2VQikBrgCyFByjjfXcFwJRYiVy2VtqvwJ3Y2oQCvKGNkuoAABUBtJXRLCbdzEBDeAwt4jTDFiDqNkhXJjPWv1avL",
  "key8": "uBchJzfpSLK1B5nGk8eVzbbvZ3PFefunyxgRCKjENUn7Rh8j5jCr6Qj2b2pUrfftjyAavr7DDVg11j6oRhojoog",
  "key9": "RBHb8Bm4Vy7zDjGm6jmRHWyyKaeWmECaSQZqK3xTsJ74o75BTTSsJT8CEM9MsdNEBhh51FoRNKwWXKmwhH2WFaj",
  "key10": "czaRjwz55HBcQqtkjDN9edfqLeFjxJ1fRpG57adu442Gs4fTQpARHDjED2UabRQH6Meowow84WooBNdiHoeDWvL",
  "key11": "2G8b8EW7S6Yci4mCSYkyFFLdfRWrtUn8PMeSjLThtqPst757r1WGgY6fZ1GYFotmXxcoQVp5kgYeP6SNP4kW12Wc",
  "key12": "5zzsF9iUPdPKcjtWn9S7Vu51up4ekFopbw1r56sNq4hVV5HyibUZeR6HLiXJ27q4Kfq958dGarbM3P6k826UFa54",
  "key13": "54nkUBBYn8ZYZn4SsGeHkAtgLywTSbgM7VCt7uPz9xpwNN39YQMJXmDjbVanY8h5m217nQcm94WBn47G5aDwLCeU",
  "key14": "2X49d9epU5QzioY1ufehYfUuqyu496q3xDa2VYcMa1bUjp2SJjjtfr9dgVX6KcF4xnVymVGyd4mjbTXZS5V8aatK",
  "key15": "3aKZcapHjvPG2cx96dG2BvLp7QJMG4iqdBGWRwyiJhjG5KPmRXWf1cfUnbeAtdbebZZv62BWzGy5yuqStD2tFhT9",
  "key16": "S3Q9iwM6KKKs7WAVJUEYSQ86fBTdzCFT7UhFrC5PfJFtVUHBkGo5C7XbssvKKMNgvcLNfwNPy9h7he9nSjDQPj1",
  "key17": "uiY2oYtEYrF6USzNwMo4htkFoZj8K6NTRsG5kkfSxhLdB78gcABqpZVatDCYRLsBZa5RFKcpXBug8vbaZexgshE",
  "key18": "5Kc1wsdTEZ1MHc9fFKLiyovjG36ETvWLio3xWhZbV7fd2qfwxhDmXhuCTZB8pSqTfAqzDXq5nET8GDRE7MxdQpbx",
  "key19": "5Dkz2WbBK6Ps43p2UNRr7mhZdf7XqQzr6jLT9ps2gKbPshwc3isCG6YijjoqWYp5nk99D43K2sXCsX9BNFKwPiAg",
  "key20": "61wSkfiywfPYrpt9KpWTav5KDoAgci62YK338VDyjHkFpzUag86MwRLjbRLkEzS9nyW1HBXmoHVXcjBwerqdsu9Y",
  "key21": "29o1w7r92DoSh8TPWWhNpLcNqbswnifbXXV3kmWxQ8GuTKDxeEcKCSdBiV7JJA3mQu68QBLqTDcFLDsFZ5Sq7aht",
  "key22": "67GhdEGzW81fMx7JoiaJimCGaxcdnkHH9Dbi6nFcwN3Zr23zGMBLEbjezdpPFZtLRcq74DjBZu25wfJBTxUPKW7E",
  "key23": "5jxbi4Meg5MBF9qYRybWBimyYCufjuoqsqU3UoLMHNCLcPhvAR1QbwNCmSqJk88G5gc8oXQKRcvrmjAPFywYNEVG",
  "key24": "25a1dLShhtyQREEvY2RhVTeB1oKNJypfrGX4ky72xzPs2RXuC41nyL8DnP58oVLqAZswFgWoxUiV2qGocL6A5mUc",
  "key25": "5m4bjyaBT959ekWET7Znkx1yxhXnrUMNxa3A5fr9kMXf3CwcrEKKnYWvFbsJv9mokLVCNN1uJXvWHVw13PmFX6hd",
  "key26": "2bTv5cN61Gm6fE8fAH8ZxGqUWQm6anPEQLep2K9UFnFY3RpTXUSNhiMirE6Qvj1K194E17e5VaRbjsTmjcTr6ovA",
  "key27": "4sjiJrux7bQ2SpTyZjuh27jm9oSn1rxVsaJZfYu1MfMnkJBiUQAT1giHMfhk59H7T7zLPjWo9PgQa9RjU3HY9zsN",
  "key28": "3sUAqSuJrxWy4q9vuTUnnQfovsM5hEqoFAUNfR3XzBmHEh3qRwzy9zNGeWu9ruCX5scxixoJfKkVdtXyLSu3niqA",
  "key29": "3YHkhgU6ExMLARPBg3dL9o1imS2kHNZevFXvMu34DpSGKTsqTofCQgismBVz2nMRcnVFNds6dTF517Vv4JHnPFhN",
  "key30": "56vxnCLPQyandGpPNmrbUmbQaYg7bMMLoFCnJWAKkd2XgcTk4tNnw7wDYJy6VT1pt1MwA1DeCPWwubzQUkGafSaT",
  "key31": "33FopMzJZWLgVjdSvFFVeEDjgYKDLoWWzSLV7s9PakQtSy8Hs8mj2At8KzRus9frzyXv7Pf1BSWfDCBovGVmtGaA",
  "key32": "EiP1TunJm2rfASqDvM2GagHVhEwtYHQRPMo1kYZ85kFvZZvEZFgZBRZze5HhXkA84zghgTbfioRT1BCTyZJTMnR",
  "key33": "5GCwuNhWTzi5G2oyUQn7pBjpj8eChjWwUsmaPYFFMM8v26rpco59cNykvRzDphiLiUKhGWvq4jeD4i6piVzpYWdu",
  "key34": "2T78AkpYbS4oMGxTe2zkAx5sC3gAZipDNbznEPPJe6h8vhPfXixA9rMsYoSdVfi6JrDF6quzNuN9sJmUWri6SGkX",
  "key35": "46AZ8hsV5ArPSBhGpaTKoQ5R1hXuqsAxYbz4LUFVaxFsKsrNam22TgxZdJtrP6EaoodLV9hE7y2hkTDAWzNLiDD1",
  "key36": "2Vkdo7yEEvs6b3ayV5biMaXKXLKfhiUxkNtvg1uYFrbQsA3pwMJmoC2VT91BNW6fYj6PWxXc8kwrB8SWfWjbnJaL",
  "key37": "52EfDaZCDjQGon6exxD9XqhGCYhNw8281eGB1sgtZKv2na2kFUP1XZj6BsXKnhZurcGiekqDXBRoysoL13FsK8W7",
  "key38": "bB1FKUcYLL6AW1VYHN5HsZxXgiDyMF7EZVPsd6oftsBgtgo81iBXFaPj23RHThG4o15uoQ8YQSkzMWecmrXiyzw"
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
