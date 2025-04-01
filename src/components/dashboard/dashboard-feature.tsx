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
    "4nBqsTBD2vovSaqN27MeCUdaFKtgnjHRSENHyrN3y2keprovevQLXVQPaCKbjNLU47EQmnMV7DgEu7ZHSFtjk82Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJqPCEiQvqYjQDqMdw2wGQXcEBPnJXVbHAVbt8azFNvsAwNwveRaD4DPevKXLpsRp8iojNELhiXfkh4VgePQ93d",
  "key1": "2Jdo2sy41sXa6htguSL5TG8t7mjQTBg47gp48uDRBEVTdVmojputMexCSWjvweEvPkbXU8jPn2JtQSHUvBm4WdkE",
  "key2": "53ivbJRi1n1nbVXd2iite9fKX3anDnR7haDxgU8bJgZLFbue4SsXqfjFfCDfa33kro6V9QqE5ricZrRtyqE2gC6U",
  "key3": "51HRw56xJPPxoNoy8JBpZqREAqDCQon21zGV34xBnVM5DQKwrAJJXRXnFELJMZS6p6U7XNLjCmFCpkwL1SuDjS1M",
  "key4": "2HYDiDuGCEUbdGXFaaK3j1c3rMDVyyCGHf1d5mw4CDH1DunfrPbG23fpKV4r4gpSpcKcGogjDmXFYPasNCCXz1xY",
  "key5": "2yxLtryr5bFA4SPU2GSxVzuFX6Cw1g6VWNdKQUgu2XeF11jNY5rjSmxdUJaiyFLiqehuYXNXELTSgCXgfoc1Xcs8",
  "key6": "244i3AkUa4Z7UsCMiPr5XZAu1wCsefaU9bHWtFJxxbPZ6XyWCkxiEuk63tJ3GLLSScUMBPa2g7kVWJDnXscmeCjh",
  "key7": "DThXkZEN6gL1CyKUwRLxHfiuTiomRWocdAWoyFyhM8NGTWz6uRaZ7pwz7xq7ggtRT4Lh1n3fRQA8fgFgRCYVcNc",
  "key8": "4JUJrhRFMmNbAn8iHZWrRrD4FAJYcUgVYzgoVe1x1yBre4oTuBKqejRANaUg6rEZxEwWxb3RJtrUCQQHYe7zMC9k",
  "key9": "5v89kD2iT6uaa5QYsbtsQoDFkdx8YTfz7aUaC43PrP1wbJRneUgWdjD511mRLWSYTKc5Mq4tL6qRtPM385F5jbMf",
  "key10": "4TdjiUGkQpMZBGDfH9zsTXg9jYyEf8tU3VrBf4dzSS5Sd3z7M6wBKsy1WUJJWg7ppxfM9WGGZ6w9pGtYh7ea8tzw",
  "key11": "4MyHRhAscvB9MdfBfPYSLSSqTuVNfhQsvtZRDGuMCCwW3yDCvTxhw9Zrmp3YGe3JJ6skZ9wt2zCebpVnJSyyKTpq",
  "key12": "2UCKxA4yBeycnpC3PTjU1jKNSTYB8Pqfye1fzeyDuiZLdENdjDmfuaQPAxiK2r4dUecfMvEeVKhp221KYT6MYNGU",
  "key13": "4PqV1edEX7vdqPkfyLMA9baTxLisMGxCUaSCLF2Mj6WZ9DtQ2y9115WeoWyGVNFXMHk2shz4XZdFRXkzSqfzc134",
  "key14": "7pFvPLfCRbAuaFs2524ia1tj4jygVScB7rMSZXMcPrtXdebvcUcrPPcP7ooJTePnyAkkHJU2E35bevD8MVk8tci",
  "key15": "3J7eZEUu6U5YPYhRwot2ZyPpUPt5qJFih5BNSgmdgGUwMjQf6CYVj3g4kggyEWfwPnpSJxGTy4GwUE2Mk69my6iw",
  "key16": "42wFnBhvSHJnFSarxMKfpHygriaypmomhToPCdnnDVXMoSWV2vANEsE94ox5KcmBdrdH25ciHwdgVtYLsiWC4gmm",
  "key17": "5QRWNGh3zJrR1ZdU7p3HZFvZooP5vaKeWtrgpHyQB9jzQx4bxBbXS3X5Gi7WbZ6pcrPMUzwBfcqqtzAjJqkCEvpG",
  "key18": "4tEa6pXjCPZksH4oBZiiGGB5gSUx7XbU6NzfMUcJnXFttYj5HMn8uZyTYAFbQAXGHBoUJ5K3JvekWqpWesX3wQ95",
  "key19": "2bNPhi3F7HZd9bH3NGqDajePLkfRyXDqgMwzvhEzTje8pSyB5YRZsseGebFMAEjydx6CKfhsabVEMNtXx8BP2q8E",
  "key20": "WaaF81bdooMeJC5X8uvKKPUvZSq1MaTFXmC7SbdWuwf2Vv9asQXsRJkXVcFBtYM9c9Vft6FVqd96ZGqfTamsF46",
  "key21": "DTrvswGyykWrbsR8YQ1x7ErQxYhFB2Di4oB7aBMYZNfWEMBZCJY2XDCjV1SsNhs9JGWTLSy4M8wcMD15KBoxuCk",
  "key22": "4aKgYxLgS5F4j58CLyFnvLyuKUNotTSvXZw55MVYSUq2JdUcfQHY3BngBGqEqWfS53kboAcszrZssoD7Xh25gLcx",
  "key23": "65HdjsAUFZFNPLoKSkyrPbofgmTUyRuNxrdjiPnZW6jrxPgJWks7GhPQuSXJrBfXiw9U9b5Ag72nH8eA9dQfYD9q",
  "key24": "3WFj5JX8ofqDzfE7sG6oAwJAMFQfDPRrbp4YxyfcdVoVKRcpGBAdKTxg73XxSkggHdRaydXvbF94dEvpiezzd2Eq",
  "key25": "4L7nSnfhzCyv9XqVE7gN2kMVAz4yczK53LLzUmvnGtoCT1CA5vLnYaVDLc7NecrX9DPyzPCsjp2SxbYBN5o3K5mg",
  "key26": "2oV66HAcnkCeWn9rTkGcD3FDZMVHHYLmm43HvtpKkNvnM5YPBvqmsov15YpoVuSUdjRGGx67hoTVXiRpHyejGwdx",
  "key27": "2NRrjEX55M1biP23Lu2Vi1UHtmBHhbpqU9ctt7QPLA1geGsfnvWu6ff3mVt7fiazEFw7jvdVMpV6VPMdD78Aoo8S",
  "key28": "67cXftXb2NtVPW9Kp3T4362qWFQrfRCBDsdH7LATnkhidgxLebDRSz4JauMyARyBgGZqUUhZozQ1RYNxdP3gGL4u",
  "key29": "3aK6boQsMm2SvrXyhNJXKzxPYrRuQ6bh7QhcFPSqg3ENaGU9tepvT5mJW4xaqmGkXhKEohBi4pCov3XMrXBEhZVd"
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
