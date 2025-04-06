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
    "5Nr5o29vjsn4XfxwVS28YjyFJrVFZopcDDPBhH1AVCU6tA7Zko5fbVfezE3DdRveuctEKLxQkpTXFQMyUsgTsFgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSoTNukPt3TZLtK6inBSVxm7Q5T5Tk2VtQeJLT7Q7UrvamwftwRceXBRrTmKtt2Bh27TvWqcCKrcDgmiHTUJ1TP",
  "key1": "5rzUAwJZx7eQ6wn96i72sTAVCeZESdtbAMpHqXSDcuowWb2Q6wvhxFEN7kWNBDTRXJmSWkDztXLjhccatkAUPpPB",
  "key2": "3SQTe61MB3R2ZTwoexx76BLeyR9nGdocuygoTbnay7bez9gCsQzGnU3jdbhtUFsR5x8tQamThcRyoYuVjJBEDdqG",
  "key3": "5AYLtjxmLqCPwePKpFRUeinSg6tDfmMYKiMbwVaKuenxGCtPenKssgot9J2VgU3GVuHpE7Lg5S3JmadYHabzJomB",
  "key4": "3kYjEUNtQng2UpNXgiFccDhK9JaXCDpQqB6eTHNvd6eHGgRhnGjdUC2Y74W1QmqvcjGS6zmyGTjt42DGB7JaKncK",
  "key5": "3A7mMwrHkuNQMGP93n3vXKCQFiHE6Hz3jrhAceX1dSukyTNyNF5oAASKQyvsnSfxF279kYdghKkjk6WFi4qMVEx4",
  "key6": "2RoqekTKpFbrUhhQsz8hn28ebxfVKa5R4mr82qcLHenF3f97SJzXd4TyAejQkFZNEFge7HhAP6po2RTYRsBWWBLs",
  "key7": "2DShUNJv3eQ4Z7Hx95J2FTKVuGCeZUrzNqyYMZExpNu1dqSzZtmMiuHjf4HPZzNHNJ2QDnfhgSW8bktLpuDbqjUc",
  "key8": "433AGQR6AGizNQJY1rncJVGsBRGYBd89JhwUckfnhriceb9GbEoTk62YB2wDqN3UV1Y5FvZDfe9N4bLP376qtsXv",
  "key9": "5rdXNFJ6bpLF1fSSQVHCXShLR34pmw844XTBkRwPHGR9KuzMUuLyUuHpQiwXJhwiozjPAyeC7wQRaKwi9rT4wY1K",
  "key10": "5739rpERejdosspWhGKXjqHgW2DN4HiFrzQbyR7SiuicjGutmVQPHjjJUDS6S6rUn7qHK3y7YRBNrLVw4MZzMbUA",
  "key11": "5Z4e1AH62J4S2JYWKAyCPEu3fEEAneS4qXP8XoUTYVrpW9dScnaNAA8ymL7zFhYfj1udUT4pDovzRs5jseDNJBAd",
  "key12": "63D7d53gPXrewBLbrWHLtYfhkuxsj36Sujmc1kYtH7uXLx8A22rNnJ5QSoABgkimkFmQP6YDw9j74Smsu7BsMyht",
  "key13": "5oAkoW17D9Hb4UvHU7JJMQdgnkB2jZVxRMAmFhbFRM3f71MUowUAmBzSeFFt1q39AZn6RFmxRHdvVEUXCjh5GeG2",
  "key14": "56RXePw16LQmfrJec5VRj4C9VbSgwww9ow8Hd2YuAfE4dDf6yVdneU3Aw9rAWzVjKSvV4KAN21Mio6WvAXrnYSUa",
  "key15": "2yr5fszpTZKDvpRvGsBDy9nMbaKwe7zXFpKpN6iGw3AGF2hCrFBm5BvRB6qBUctLA1FzDx7qHXJwkrsDjyK95wau",
  "key16": "TLxafVYvXwfLgUzdStz8KML3XLXL14ZKG8sBqnpAQWxettaFUSRejEiE7YRQWHwoBuzd8B4oFvsf3oLha2XsmoA",
  "key17": "5qVNCsdvsFDSpar1iTEugAuTa67LTQtY9ZmARhRUnQWojeoeavnEbE4jsjFGSMvQRs3XR7hAWE4G9RrWqSPvdNL9",
  "key18": "3FqxLhbbk8QLCPavahF9Wpx31mkpcworFvA2ArWKKb5xvJfxQ9XMWooczTAc1rWr1zpHAtDG8wuVowojyDvfyeDW",
  "key19": "5SD5wNruzmTavPehftJdKHg8MmZtF4oatTFZivZ8UbtEYq6EzgSR4b1iiaAaSSNYPi6fqVwzXYjLstzgZCL1Zxjq",
  "key20": "XPQWCNpAbtZDjcoP2tCas8C1ag71NVVNFfzQWE9n8cGUzs4xNtjFyYAWR1gYcLkKKkLdFe7c2AEey46vev3oh2u",
  "key21": "C7Qd2yLiRiCbxqkM7adEH5M4pH1rLTJrDjtGqA6hAtdw3TLGVZpSirS5MSorrpVvX2t1fbvAZskfBZ7rTsuUASM",
  "key22": "aSCW3S5KiBLUUU7BriTYJXbDFAbcH12fwpLsUNejCKJJwDR3iVgGeKs2bYQsb3biUkaPs53XNGa5fprhgdN4s8z",
  "key23": "41L6YAspsq9HxqJo5h2vaaRfsyoERLbUqjA7RUujWiQDRHCgKYTwURFuiKRhxkL1GosfBFqTKx71qoWsY9K7fQrT",
  "key24": "4NeGQdbLLhW5jWWfPcPcnPG9ppt4jJbLcy9DTu9Ybts1tdDXxEEB7fix95SSFHMGSrCC2LYrGaL2tZt4iY8nLz5H",
  "key25": "2i1cJJFtxSpV9uvojrygX9raYNv4YZyRhjcmDnomWg7cKYX64firEbsEcSkth5LPBhxhcmzZTQsQHbpSXWjdBsnj",
  "key26": "SK1VVQLUVeQ1A8MnBUknax1RwGKKihsWL9TifRzP2GZEXv5pNbaEZQAD3tiSE6KXV2GLViWik63uFuaNkpwET9L",
  "key27": "57ubDZgfVRpQg1XVkoXptSHktUgdL4Y98YGK5yXxtJAXksxaadnCAankq3SHBB7LGpKHH288StmE3WxaEyqFhPvW",
  "key28": "5CYmEC4CK1w9KPaR4EKDCuBA8kPV6RsSvdAutsjwFnCv4isUunqsjQLqMVR2hWiNDT6CkWrjcocuRJzwLZ52T1zS",
  "key29": "4yfCoVr9gZGmpnwkWrqksNkNCEWf7idWifiwKN9WS8RNqEALhnWZJKBP9cf6KdJtWRaGwRcrX8TAAvPkEdnd1FsR",
  "key30": "5f7wsEr3WPdspCFekcxJzHp66rz1hWT1wCb7fAFxGsBU1uUMhJTNRNntXCqXmxNuTbhuu8WBUqH7L5zVwQLqxaNB",
  "key31": "354Txo6Kuk1qtTjP9Mrm51QLkURtNwR2Yagp1JDxXGxGBym3kXjtXRTV7KzvCHD2FQsZumRUL6MEHTbVmNXV4A1",
  "key32": "3mCj7GXkaJ1NHA2eaHzZgR5Mvetk6GZNiM7qMiaYgY4874PScbnS3jerTwG1Ac1bpQUdzigrXwb5PgtFyyGZHGGd"
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
