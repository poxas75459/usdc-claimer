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
    "59xsSBDNxJZskg9ERhTz2YbZ29uXm6BzS9DmXhLtGCZfrd9Upgg6YjdeXE8ArKFbXkoQTDkDU8jTWbrvbbjKsFW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64KQNKbnX4Zz74s44sYzjhbVPqyYr3qgDLteqVzZbLA9C7Hs4woUXPvB4ohnFU89ffyhKKYG1C9zs4rjRk44Bcy1",
  "key1": "3UFUjtXjUT9aoeqhyCtjhsWRLF8P71Nk5yhvDySaimALhg3jxxhzarQbzwbzkkxR4RD4jfZUNV85NkJ4pWVkPMa",
  "key2": "URV1kbNwyk4FRpLfpgK2Ep1Pc2FtNqmPeRnkbKevnqfVxjri21VeB6NAZRL423dXrFBgaRpjBifYNGUwrVufMQy",
  "key3": "MNH8sCQe4hFKhcMj7WA9PXT1iGFevG5ACko8hAjrSa2xNjwf66NTLTq1Bjnz4vhQiUe3mWcUq6S4yhnZBRGQERC",
  "key4": "4cF2Jx3tjzRwrDov4CzCbfhEhqyco2vn564qK1gVc2uTQTT9WnbRZ4XiyxwBFHmBXdZrPZRnupCg4Mf4MZC63kLN",
  "key5": "4cPyKYCEGbZ7fRvDMKFZrNiZDn6GZwRMbkQAJmfiZvNFJcHTZRdVXq5DW2eHv2166tQV8746PrCkYhzojXRaTexi",
  "key6": "25LbV9wLKnLRTmUsnS9Jz48hKZZvttFmyNBeziy58BumK1Jrkf8zdrn1BAjDdTUDjJdmFahXLjmt4bN94TherWNh",
  "key7": "5F823HjRuFTE1WXXvdRjCD6QwnEPgWXwbw6WibLArtyDAj7WvXYugY4yJL9aPGG39usumh966ye9t54uG3SVhEBy",
  "key8": "3RcqEjjQYW1m7Mr12NoMqdk9AhWr1RiM4iNDxB8HEYhBn8QtHPecfsbaGR55XvZ1mKrrAskxoEo3eH3gmknvBWeS",
  "key9": "8jk7dfxPs8i4RztWRzYpRMedV3629y26NEAuUFgp9AfNWPHmdJuVAhhNop1XkFsXCAdMyQQKDt9ZoP2aD6Pc8rQ",
  "key10": "jAkFQms2jg1q767kymUWz2nN95BURy9uH6pGzhCNZG6gk2R67LuhoFqcS4KJRK4EAsGbTEL3q8BtFWvVNsvazPM",
  "key11": "414g1vgyC387hBjkoZFjLsNow8VzWKWdXeehj26sLFvDXSRycZgC7WFXSpsLkoRMCkJZNuonAEWheWwWHUTQ757X",
  "key12": "5gZAouDVAaNFR3LVfxuLBxDXtqJuWyKeJfS8AbAv8V11Ycv8sKErtD5dK6zz8EYdZKXzVYeDxAUbQHX3zLffRgtD",
  "key13": "WDvz2bZdaifPc7icP3VYRHs34i64dmxagkgY6g2yLge8KqPYTJjv5uJTc3tfQuqZ8YRFkkZ88yHd5tKqi7Ft4mw",
  "key14": "2ijmUwLwSpBQjSDPMLQQ7cfH3tgNqX57b2ga1fdGFCKC8mYij6ty88jk1FTaWpczb8FBnWXGXNBbgdHUCGUdhuwZ",
  "key15": "TKShw12JDMvsmTJkR2M8HpUeuMBC3wR3gj1tjR9GrMyG22iazeGwQwQtcSuo2vqtJTcio9eAh1d2oSj29qRy9EF",
  "key16": "2iT44JCj6bDUBYn8fUsAdv5dz3uvsi94tTwv18RFr8hNJeSjjeGAsVao613NwwmaCE7XoVqezR4LSAtJUsJdXff4",
  "key17": "2fzuQ5RgabNVecNxiBzZxzuKR7AzmFdfDigQCW4BuXbkdDnKic7vTQ6CpShYCmLe4XqTZDz6rxtzRkvt8P2rS1ri",
  "key18": "2BAj2x9oHmj9uW8XWEZNSC8L9xng9kGoeh5hSEWD5oC9ozSg1DgyyJneXjE4N5cLePargR9zQRsagrmgHTTip2vM",
  "key19": "4KeEK6snHHAT89kHn7hbfum2AuDqUkrDbEFCiF2gv8aCASEBtg8fBHUHspVzRZbwkLPbcJ8HxTqMV88WHVPiA8gh",
  "key20": "4ivwfGNMrjQ79buzzk3iUzcqmpBLr2jHx7Ec4QsgfEnoQm4GNqjs8ctN3rmSL1NuYE44ruCueyvhjMDka59hBf7U",
  "key21": "5C9pCsATUhxRHMrg85Ww9WTCAftJMavL4dpNXiyntqkf32Xvn9rq2MRjydCDP3ddA71wBiHCbv2DoY2YRt2Cc6SR",
  "key22": "61P9KZSVLXXAB8S9rgHwRRh8q3gCctv4K2TF2v75BB79dCSfADNpdbk8Q3XafyufuEq5fjyyeJPyVQa7Poksonso",
  "key23": "3nzAnZhzBeaXdgvkTR3eDPg2DN8LThba61bGPFD4FfJPWNpJosoQymy8mmQMF2ZU3s95QfTx26URFWJTXmer3YrZ",
  "key24": "n2fwLZyS2eB68eUsmbeYTT5qYbd7UeQG32dKXvtBzJr7sftibUVUD4CZxyPhyzWEczMDcaeZVPYUDXpUfehrDd6",
  "key25": "2mkwciRnzK6ZCTSEEC5Fy123r2Sa9vtx822XYYEwDQabgsXXGtkgHpvqnG7FL8jXJPS8nwd4CV8F577xXPyCJvyd",
  "key26": "5tTE2WYANxX6htjCViYUc8ZuCj13wuLPt7cAcTSqmt7fbicCKjHtbTwwY7Zb95F6EBJHT4TGH652Wky42jpyQdPG",
  "key27": "4iRPRSTojwWFV8Jr9ejSm43xBfqCWB5qvydigAQxfaRGodeMtU3RU6ZLSVbh2CG6q2HwCaQazCjD7dZiY9hLUie6"
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
