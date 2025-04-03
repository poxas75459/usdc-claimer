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
    "3J7TNzZ1VUoui4U2T62bEcaC1mbvKDDuZ6iokPBPRBbthqVNCcnWW1jRy86kvpcezH9PfuAyPWq6Z43aybhaLrU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5NQH55GCwnGVUSUFKaq4AycLEZRHiWEtALtTWUqeLeFZmu5BTzbkTXmWR4EFbHj2kWREB7faimEouX8o37Tr1f",
  "key1": "5kpaRc2AY2k2q5Tmu88K9CD3QSfNdeZtAoetxc4YxSNdQ4HNz34v8pHNE1nDjpTk6Pk8yKSuzegiWVgUeCVkReQH",
  "key2": "3eUgbW4Cfa8DSEM2KdVgEUyARjQHc4EsZjdHEu3M652RAUiNQn7sPXBzPQnxTCL2uZXkzwxsNWVWYtjgNEK8JfLR",
  "key3": "613M5TVvbZA2By1vzDh1NDP9V32phRUDzuCzzQ1nh4UzczRosJdn1XqSB2j1be51qApRcFPCHA1fLaezySD95gTd",
  "key4": "3qGqbwoKe24GDF2uoxjmpva3xmUGGi2eeYJD7iScxomjjzWqrXCzxUykMKSuS9jiVkaQQQEcCysKGAn8BH7hFZCN",
  "key5": "3NzyPScDBvvrS2ijEpJNt1JYAHAKQct5pwvJCfWtUahdHwqDdGYDZXVG4jDWWQBzK7KMz437QNsqDmKiq3iHRShF",
  "key6": "23q1TEqumUE9WarBmsemqPZx68kR4urCva2CQuNeJVc31p2HyS24NLAkwX2LF4q2sgWgjwXEU8gjqNzNGtHQRfuL",
  "key7": "4WnLGPhxBZeJPkyhUcDNrRFsBCuYt5tSmQ3e5udrbruHCnzm6BCFj8d7dCNZ782bge3WmJrweTVY7Cb83yYUwchp",
  "key8": "4kda8K7yBV8FCi6uiy9GYwteGtFEkBiCDTM8oiUEvC3U8mka3RT7PbAwknnkVsNDhn1AfvmdyYupz7d45zUA9QgG",
  "key9": "4q3ziEGQPN3iEZtsXpiHMVX9SNsBwK4cC667UvrXaChgqR3JVL4MLP5oghc9c3B1AprKS4XQTNvuV2djvd4GAb6T",
  "key10": "2aNzKtXywvEnsmKNBc4qeiipksJCc17Eq1W1Ehei6cozMr7bYmQ8BHM6XyRur9p1npTMfUKcx2Bkttosyd2Ktc9z",
  "key11": "2BREV36VGtwp3XW3bHwGLDoFUXnEXjRR7gdMnZHNfoN3RXfPhj2Up2AxD6j2pYHc6tncSYUvv8ffQ6RihtcdrsY1",
  "key12": "2fw96spQ7p72FETj6F2W2P2HH4KaGFv6QsHSScucA9mSwwPaJjHZ1w8q98M96MTygC7Ly12Fh8ghAYFFnykdaK4C",
  "key13": "5afbdzaUzuR8HQBDmKppz6hj4tueAvFNTtSFCN4Hagw5g88pkB2Vnt4fKeCuKTgq1Cuc8DPrUpNh85bqSkq8UL2",
  "key14": "57FaSrC2biGKfH4UMcBCw1g4j76akSVNSnsk7iBHsk147sEfawLALw7TAsz9HSCQLUemSZnSvabqVouvBgDXTpgQ",
  "key15": "39iZAnhpqnrTuhf2zvb5RWZrpPUBYjDWEF9QH5hr1gUMxsmP6QEnxXseFhmsNNfG4hmarrkiKPu6DmTHM3k8xaYd",
  "key16": "5FXHXLpYDNeURi1fuNBA3NFTuJd6oGEMG2UP3k9VoMFYCk28pZ6zS2jLzieB2diCbHt32bVqNoTpmZXy7AToHAsN",
  "key17": "5bSAwiEFqJzWicSFVH2vnCueMyiDc3m7SamqjCyKopQCDcjKrjhbkJaDjYXAsGUqPpj7JjkWsdgnrKtMUwSUFJDP",
  "key18": "4P348nGMu2Gt2cHMQ8X1YrxMuBNwLHDU5kxfk8D3aVEezCiKz3uajP559yj9wunekE1pGz9nmDDHSPTDzDytWHfc",
  "key19": "2vbSjgNYkvvpzZQ9HVoqCos18UqA94sg66b5bbmNaEfvgid3aYrFnkUummwLCCQTup4eDAEHiR3EjEWesku6cFds",
  "key20": "3mXiZA6xCMsVjBxVuyQXxwKMUpLfRidSL6uHu5zu1TituPFWoiyRxNVJhq7WrganB5YdpNCeqScWiZsc9WfEBzQb",
  "key21": "33srdj3pzqyzcRLapBFFDUSoBJorVLudUGY6c2s2Xxtf66URz2epFeDzCyZZyh9CdRiDyGQGjGRZckPGvUqUayfY",
  "key22": "PP1kc2fbeg393yRPbS5KmEku4pTKE4aYGyBWEfjxtU5Y84cVQeNufcyghCC96vDs1RDX3jjcGYkmjDnGoresnYe",
  "key23": "3bhqXmjqsw5oWXhHU6JafFxPEa1eEFhcrbm4mDexMNuvReW8EyGDEw1ydfr2JQMXLSN1KP2uJDT8wUAzJvGwvqkx",
  "key24": "24VMuGy7oSCb7K1tT3KdWQsdH4qPqd8vH4CAsjfLCHj7f2EzRvNkKtWefUiavyNiRZyMCpDQN8GqKWT6FD5mczLa",
  "key25": "2aqewiuKdmXBZcHPDp3qfbxtQEHsP59m5FbwrXoY8Y9n7UFpJRxjMHgTCW5HaZTnLZNx2nVtbGVj7rPUyFp1yQzg",
  "key26": "39tSRhf4aEdZ7NNHvA789HvjVotoECN22Jkev51MbpLkngdFviXHiEvFZbFaajK7hjUBtreKFZQ1uuEHj9rh6YUR",
  "key27": "2GsT97MkTDZb7jvgDZ9tmF8rVMswYBWsSSeuTFb4ddJsLYyxeCXSnVQHSVd4wdPUhAGkfeGdjo8Vm2RsQK71t9cg",
  "key28": "28hMdsppxBVMR2Ze6hwJDABtTjxWUYxhWtri6thZz97tysyoc4SXdvqC3naCHp3DcWkT9udJSm9GoE2HjeBaSsSZ",
  "key29": "5ZhzKDgTjbmf55GWrDHCZtaxVw1JjbkgEfWiTxha8SsYGw7bZff6pshjn4YRRtmG4mMeWAduK2TefuTD3Mw5Bcc4",
  "key30": "BdxdcybseAr2LFzHnJex4F4RdYBCJbM84yPDAwEhs38oop6hVwWNnXD418mqETd21B3QeDdmtMEFxgSBvunhyUu"
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
