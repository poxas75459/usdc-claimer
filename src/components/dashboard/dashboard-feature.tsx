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
    "3L9Eh7pUr3L9oT2iP9PSRTMYvr7va6hybt34pk4y3h4CS4mTeL8VHCpfzy1BJBgjBX5av9AtkhZmjfDYxBBgMV9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Uzd87dhhwX3vzrjntArLNq1dW4MWv4dXiD27LdxwGnKnSbhNVeSoXanVKJKP8eFDTSPXCde8CYhMHdx6gx6eRG",
  "key1": "P61AibzXMG1a8aZf9FaZg2WcEzsXWFTwazxy6oUbNnkmVhsPt2i41JxZiBFLcv4cU4GeZaVLgrpojFWZ4U4BPom",
  "key2": "5N52eDAZUvUytntHhday7HR6KQYg54FrY78651vqKvNPkE6QmhRKEV27bb3Bwcr1L9C4FUCKceJoTch6vvyc8gp5",
  "key3": "3cxamgs2FNw2yaMASbU52hfbv7PAH3j1oKRLyQdiqXAgH9QjHEzzKqvEFfDMgGVwpyE79YCng8gNDyhyz9J1KqmL",
  "key4": "3pUgSjim2HaYaCFF3RSqidNpT4XELsu14eq6Zz5wQd4mmnxscezPEFv4TTm9GEjTxN7XQwtbYw3BcVqLJ2GMrZzd",
  "key5": "4bD841S4GtzppjWWiEsmPPkxz4evqdksWyPpafJfszrbwoQpiRL3uSGiTVv8A3nCTCao5q3PEGu5ZUph6gCLFwvv",
  "key6": "4keZ57qqf3zHNnxeD4ZSeS8T6Ec2ffg2rwpKygEqZKxgpMdDsN21uZyVZ9txCECwpzvVNNVHjFG5qRfx1UwxKNLK",
  "key7": "KyHDr9n3vpLfPrvHiPsmyYYaHjXbEn45FPyf6ibSiGahiWH2Ga4WEta6ZRVhQbbqWWajkkWjtGzHmDFEhCVwBM1",
  "key8": "vB9zmZgmDnAYeZp5FYSrPGb81mNZxTcu5waXYqmAt58RtoUDuRchako3J64px8eUvg6pqc4fYQN6psBqhoxT8m9",
  "key9": "52wnoCPjVJxE7wTnrSDY9Vqvs642idJCK4EKCifS3sfcVJkHjgawC4Q7eWzuUCYkLDFdq6LjxmptDNBhYxjWhFaD",
  "key10": "3pBTDA9T4FnGPuezNkEjn2ZDSzSq8H8gcLdNATWUdy13YvzS6Q3WyMvaMJbWZ4U9hjEow6vZQHkohZbFnHhHhgsE",
  "key11": "CbvWTjKXhAwtnkjb9cECrz5Ujd7Lj2XBGMUfDyZYGSqTW7vm5DyQ1buRdATNjGtnnqwMD5TB91jLRSLSXPSGbgC",
  "key12": "3MegwBNtsdkyhj7Mmb9WbG6grNiAjqzBD3k6CEHCe5gi6iNsWxL8SEF7eAMsmEy5PwPp83aPgnC22dEFjDEFY1Xc",
  "key13": "21AoRwSeoUdrF3DnrkLdBUzTSCM9RYtFXsyEhwXWxZnht3cgZdutzwqLxWNjEadfBPJFtYxyZMMfveVV7CkPLN1W",
  "key14": "4tWa59GCaY9rNXbJTBdPThyXNNomfpTjdfsZYPpDkBjVsE5pPpUt4ckmwuqmQhcFnu8WUorXTHxVknCvoRzKdSPG",
  "key15": "zC3DS9YuzoTEf8sJ7zsCQmvowtDf1z1DoxHWE2GAHRYjNa2zCdymF3hoYh553dPjqUQwocCsMmJXsXoY2oVefoa",
  "key16": "3XmzhrpyuYxGPEcR59eHDPQiH8BhYDY7Jxbj6VH2tPjT6MJnEsN9XUE9qturQaPzF1LnhuKhBTgZpQPzoHCLnHmk",
  "key17": "4HBseXYvygYDUSKcoeVKzPT17pwZ29LkBg5HoywXHTAtwEvVWBdvcYfYWPWM2zzFotu8p9RuL2XmBzoHhVUHbR3y",
  "key18": "4XfdEjQsD7oqyQATCYzoWnEdVavon4ZVyPHv4hGDcWtyn15cc1xR5KAQiCr9TkjCeKsLccsQJCeHipQFVn5oofpT",
  "key19": "2pAZXnL66GH4TB1NEqiqHkC58cMVVcgE6DCf6JcZ3jcXyE7r9NyhAjmYt4r5UjF2C8EuFmX3KttdGVbPyikum8RT",
  "key20": "24rowupb4iwifkhFN4Japwi14oRdhiyc4B8wtY2etk3KLYEDxaeCqFWuG8jzzvmfpYKNZaFex2RnkU8GZgLmj97b",
  "key21": "3keinrKwS5WJUKVpERijmn1BhCMFye5yE3SJHtL7CAWRzKbvMGXRWmmXGPoTdvs5zUJfDTegDJ1a5oN6nqqgLkzg",
  "key22": "2uXAcPnHSe64mJHd26VTp11bCDwfYpNDJ9VweoiuaMYg1W2d8JieXvzJhx6o5txDTLHULoJg5pbU9oUkHahQS3m9",
  "key23": "5VkkkH9FAXR1ARHDqpeG2agvPJs4shs9NWTaMh5nSXSvZeAN6af6syJEjzNEossCewFZ18oBGPmSQo1PWjxMsjcH",
  "key24": "2Pp5dMrneBQUKoGrFvuWEqnCF39xbhr764FmbD2pjNvwufgSid7weYXnraWzBYwjd8CQd2CvC67KpXaepv8bmzPi",
  "key25": "2heeXz32pFuKmAAQZ85bGz6o1GFybawDXQdZ1mPDHsbU7s3b6xmgWqgzogFTGsAPTMra2iABzW3twib5fBySqJVj",
  "key26": "595wwM646fTUbZGkGjGAzkYY3RBumkPpzuF9TKhjmpVbsHmQXwc9CUAnZYpiEo4bhnL2DtuXzDgET3p23aeY4TgQ",
  "key27": "64rqdM4hC2wRxRcdJz2zg48qbTkrrAgQ9NE1yenn1Q9aXSf2MVrLoPWuNYYdMd6iQdsUhCN7S9R1M3wKGNB8dcJU",
  "key28": "7htxFKpRMvyEAoxwZJKmF736au8W7HgBdut9xE6t1rCoHgFJWeM5MZLrVY4oZ7XZ2HBxudKFgG2L2CKbF3DVbXf",
  "key29": "4bzrJyeD3VMeeDXKTm4k5gMHE2ruZ4f6jwqizaco5ijzqnto1hUwFxefuT5dy7EYSB8XZpLt7Hr3HptvQLFdGFnv",
  "key30": "1x3wuQGPz6XN75co7UmX5nYbdnhav3j6BzUiT2mywKXgoWMTtwU9UMyNeeBiSsgzE5oswQnhYeZxKKmAFX1z5Lw",
  "key31": "6k7m7KX1W5yHgXb8azsYDnUjTJsKLR6tACbvbcU4bXBtUcnAwCabTvUq5szfVPeZBfQdaBeSojkWwfWA5C7AF3Q",
  "key32": "4r7by1kwa62aCyKw3gPJkPpbJ97Jp5ZnA1wRAWrroU5ggicKeEMNjREZbDnvFbD4vnZjXyYTuwqKSJPS1hTsm4FE",
  "key33": "3KJoP5ahK77ih8PViYmXd2nmB4FWfXiUxNAzPyLnxorfsM9EkSrGip61t8QnQ4zVHzqcfFnNjoCLw7Cip93JJWVK",
  "key34": "AgsEaw912qDYBabz1qG4Jsg8arQhWxQGfywT7gYm4Fegjo51Nc5Be898ZX4krd49Rzmd3VWwnFh4jXkVGvsBwvc",
  "key35": "4EZd61zaaTU25GjUJ6rdcFWtVnTVDa3gmDjkH2TCjCFcTs6Ci7HqhvF2UVmTya1tPW4H3NmM969MbKvsbaG73k7a",
  "key36": "4bdZMXWALjGwoFL6ArLc2Hq4efKKf4ZxK1qYNURiJB1zmj91MJ9AZR928porxN4e6z1uC5vFu3L6dHTQLws7PrMa"
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
