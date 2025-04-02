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
    "GCb5Aqv9mA3RgzfKnzqSqhYLj7RhwCw6RfzVLUWZEJo6AGuNDSA1Du26ugmKxsPxyP1c3XNHb4tEmp7bH3Q3BGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7qTe18yE4cdNzVKgqaLysJHZm4XgajyP7r1UbMWo3be2jbvWzJoV46SeEA7SZGVy6NxmpJxmNyd5a1fwfmUQi8",
  "key1": "2PefqQtWXLE2duodjvzC8yDCPqVE3YXagjeaF7GH9V7uPtR5XaJuJKzTFEfjtWMmZdQN4jQYzBm95myA7dAR5oJ1",
  "key2": "3NVHQR6e8bgjfM21vaLJFnhviLGJ9vkNa1dYaMmYyJPrHot5CksQqNfmnaR62xqZ1n8AAqATQer6MvzZeKEjQC9c",
  "key3": "5TjfES9xAY1eoydLoYxpa37zaWgFP3PP3DEyj2uEbQuec4EY3uCXipXz2c3RCL7mEuJJ5myEUQ554AAUCVFocio9",
  "key4": "31srpgLNAgnZZphWJnzfRyYu5Mj6Z1W3MCvkKPAt4xTNsiKGBvWei19pRSt56cWBZnbhpVPy3n6KZVUNd88FzL6s",
  "key5": "249UYgV3n7zPbZXnZU2CaZbTJKvdPsvru1mMAjzUp5weStGtPK85YY1KCp3xt5wy2NunLcu8uuqAjeRF4YrShdV4",
  "key6": "4QP6wVa94PBLLPP8ZVeTiEaxciuCnbHCgVptuSoxxy8heZ4191gugwk9ZuVyUVXbyYmT71HpSXPWa4ER6NoLREB8",
  "key7": "2m8jnKkbt9cirkXanVbESvuTimvbMiDpTeEWr276QoD8tJehXbZ3YdahztUK9mofo4L9z9Q3cexQSKkX7am3RbpF",
  "key8": "4Yd1d4F2SyWec4Hn48SQWhBjJsRn6W77Cx4YM4NdLMc5SJHinQnrhK1VRg7mUdNQdEjJrXotcrRvdCM74JRb8qyr",
  "key9": "oUmRExxvg884kPq7R3sjxooAdrJRF46erEciyKU4P1swvabQdyy51b7qpE9GFjewrEVNZAmJprtEkNG1bjWFxeA",
  "key10": "odt6GoRYQav8TZjh8USXco75R83gafT4oPTE4KGexufqx4gNDQ2yVGsyUstN8nB67kL6hZG2bFNvEgZwRJ4SgHj",
  "key11": "4PW1enGfPEPvdBXQBALfpjW9AS2wrqprHf2nUhbPStmksykcVRJCSq1eVaj3LoncKRLQtieKGncStLZRLfBuARE5",
  "key12": "31n2JzeLVLNfXnGH6SLoQ1jUrJp7zKY6wM5TQ1rX2EAKDMSxrXf4daS2PBgGd7SB3sNEC3ozSfBEUfqtWa4oMMzp",
  "key13": "4rXx2QS1ppGipSLFLdXXqLKXQpSLCGhhWzPrX7bZrJnJTSBKq3yVkvYC1j87YPaepjhbxJsDrZdxEcKXhgE4brga",
  "key14": "av4YyquT9BMYLi5xSVKHPet2vwTwGdn1VQi4sjTwGmxoLmjvRsE2CKbVJBkoEEUw8CA5QSxz3L57WmeFkiwJuWu",
  "key15": "5jthUn5at4Vh1e2rn8Ge8gSdN9kugh75aSRriDbNCLuqBtUTFBaaQraXG1Xkbp8MDCPEC2XQw8QFuV3zfc7rwHSH",
  "key16": "91nHJAKGHUk9gVhrnb47D1DzApR7S7Nc58MPz8AEQU9Vz9QW69nJDdJU4cixmwBvPWmnyzxbojfmcxzyFJfhQYA",
  "key17": "3NGXZXwP7YPXHfC8qLppDirnRd2ecSG3BCKCF8MMbEWdFsuLoouLRuDDzd3DGMQ7EqS5zN1SMMtQGEDThVPhP7Gk",
  "key18": "4CpRQv8povJRrQeoP82PAjXWA4vgQjt2uXeGg71ko3NGVJmoQu7nx5zTSGyRn2xdATBG28hv2WLATUyPS91c1QnR",
  "key19": "322SRBE88SCr2sP1vGoLYc4qW8PKaaVCasFoYRuQCKdWv9Srqt9kSomDEqk4Sit9JFfVNg4GngZXN82X5WX8zVEk",
  "key20": "9PZ6BYzSKnUUMMJGQfa1B7iH6KFhRZLHUpE5vS9kNm9tzo5DhqyrpLhU4nWPHQadZEZfjg6x9sXi5Vno1wKsmmR",
  "key21": "havKViqvTLrBPqQ82zgYGQT71LEozLmDbaKHnYMfTssXyxBNSubh6uWXbctiQahpadmxbPoWtMBgUDQHnNdxamN",
  "key22": "BrW2hNUj7kz6SH8kCNfVkWomxjnirXaJXSWgFjzBKYSXzMasgLB4mbujKYScXF7JFpeK8e2WaZVPfjJEg5LzTUh",
  "key23": "5LYzp37KGFhURJDFb5WT3iAaHFe9oVTU3SAP4eLgEsjumJgPjEQqSWDxHXpBNFxZM4SMCBVE1zvfehDC9f47G6qr",
  "key24": "2quPJ19VDyLZwvCnK7SvAtSRz7wGuBkXiS6Do4Hv7FbNUersfMnAixmuCz1vkGiXkPkWVf2useJMxs6A6fBrArU8",
  "key25": "3BApPqUaVvkpPf7QK3MSPnP6wdHpSxRysghcfMKQLJmHALzH8U7Wh1u2GD9gPoH2HiKGw19uxeSfj2LYHxEkrRPS",
  "key26": "3J7z19ANpW58U5D78dNskfNmQMCZ4TM6w77Du3LoCLVbosMJ3xs3wp8JLayw1Xpj2MDqJx8hY7BSww7dnEWdPLGG",
  "key27": "3HrbHFxWsgN7HuyRVVBFdeKMBYp4VwtYgYctN3adQZ4rQLS4xwq9mNC4cYbCtejaiTkARSMh5bkoRgNsccniMvZ1",
  "key28": "3T11Vrbyr75NWBRNQv4RpFVaYfnViujNcQYez6Mbs98KLhspEUZbaQwhCuXHU2etoeAnKBqNpetgDAVZ9AjeLXUE",
  "key29": "4ztuhu4d56k6HuhhvTaPMCL3bJQWTQtXzan1BR5Zjyc6onC64fYEZwgnA5CjsGJo2uGmUv5W7LKT6ocB8WJuBSo4",
  "key30": "4ECwWi3qDnZ7xryZecdkUc6gWa2yn3gWzEjXCkSFLiDxKq6z1aSfDRqwUnxJ8LiU9YVJuXRQd8PZ5nNWEHRDXMWK",
  "key31": "3gdoNVjMLZtwD6J2AD5L3joeVMLasL9JnLoAryyUzJ3nEMtSJXa1EjgvL1Y6Jep7uKqMfpsBD9AY3SqAtFypCtW8",
  "key32": "61umR9e7FzNnTMQNxpgCN2k1Bnwiz9ZvTp3UmvK6aBepQBLenKV6Bwtoq92mg1Prw5N8MgmLK1hDnd3XMjbeYZAU",
  "key33": "8p6ttVL1RcLqGxse9vgcZ9yPtNCXev6wZXwmxwMBYuiRaz8KQdYWB3DaB8K2uWK1CSXw691twiF1vNq6C3eZ7HB"
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
