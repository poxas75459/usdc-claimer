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
    "JBpvhFvTKKyckefFeh3yXaTgkzjiFrPTCaz6epfzaqy3uE8Rqu2vw3tTkDgvbrrHgTX1oDMRUPj4DAnSwEQQWJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WENEmyNyW59Zgvae9gQZ1z6RPNu9cXByqkgWVA8MZbv3cCHmj181jTJSQBRiPuKY5irzARDEBcTH5jxgYfqms3d",
  "key1": "3U7nHzdGsYNUDb7U5sZdjUcsFGMW8pk3S25xeZTdSm7bZKWPz6pbsVBr6LhFzfKcA8vmd3KZF53LtG23ap2ZNaLj",
  "key2": "3kLKRxiWk5s5cNvSp5hLVYCxircThQUHYgfDGUaTwQq8vsFu5tkmGDD8nhfm2ctDk93VkecqvAWkvPn9zakg9aFA",
  "key3": "5vcctHnHcYM8d6MrYHqBU6xjctsXnDja4pUvnekUydRSyevi64sFz6V46GU5Wb7pLo38shSpPm9EcAjP7t3XqKPg",
  "key4": "3ytJbkK5NCuM2972WyD1TQisyAzBPJVR6Pz12Gcik4a1KYrSoTJ81ugyXYee6oPV5U4qZYTw2jr6HKGrhLA7FsFQ",
  "key5": "3nfJ3cZyor7St5mQ3JFnAR5t9aqfA3AsiXbA6eh4uhsB8XUMiJrHVbmAo9puAHrTw6Yj89bctkN71MPECM3jcazt",
  "key6": "57a9KDnQXJErehd4cq7WJTwc9XEGdGFoSJKRASJXpH7VFthBJQjrLrSdWRRTS7uCsZc4YYB3MvgNt75jM7HEgXZn",
  "key7": "wUM5D69u9hKWeNWwYuxRQEJQgni76p3kisZ8WabBpexBq9kBk9qpMPHgz4TxwzJeuAL2gadkhJD9D7VFrTXUGGY",
  "key8": "3ST9ShcL364RHc5u9fa3JbV1btaDqy3BWWw6JRz28m5faCew1do2mg4PnY9qZKk5gKaC8QNHdiejrfRaMwJ1A3EJ",
  "key9": "3qqZvPJ8kBgrX1HrRdBswztD9PSpYhFjVX55JA6krJQrT1SZ5RmeT4HKHkLiqK8Bz3CY675nwyi4jygYmXKBuSkF",
  "key10": "2tYJUcYc64PeAKWT4bxVVKfCYVpRLDT7SaT2xYen7ZGkgGbYKUP2jsuqfHKm47UH1PuNwamuLVPuP76cxE54azvg",
  "key11": "qjbehCR2Dy2RpduUjwDXckLT2Sog5yPPxi7knQJbq7BcGzPNv65t6NTpwcPfdUBf9FKCJ28iJtBYm99RFP8ymZo",
  "key12": "37X7AUYLjDqrkwrEAJAnqZf9A9ZMepxKxmTDSrTWji9VDgtUrn4vy4uwhyAb9GmdBUYSBvyerbNrGHpChR9gcAgA",
  "key13": "5gf62wqiFi5MQiCodFYyhDTDfPnXxfCYWzgsEMrSoyWNgd5bgeTYHVA3MQXob2aB29Par5MG7maed2uF3DPxRYWP",
  "key14": "4jammai6WXLcC61uumPNaYmGJJSZw7YkGWDkEABb7tYkfmvW63nww6mZ3wbvAfu22k84YMn7TpEW9XYtgF2xEZop",
  "key15": "2uNrqzmEtn8bN2mfF2e5Aa7PTnntKkzoLuuPNXA1EZX93iJxDchtpJ9o2GCuNkXTV6bvSN9a6oDHzHwupwKbiDcN",
  "key16": "5fdfPZ3mRpoqBEr3zvnk7CrQdfn1R6tXE9RWdge53HwsNA3JEvbwp4y6AQxfkweDa3GKMzf3jttbkmjYE89VcyNc",
  "key17": "4mDzYUSxgg5FutjZ2CiV2gSo817946qJTMsRaaHcMoMtxgUGTyasBqu66sKUq8iSZSz4qjUK6sCfvXreaCbBr5nZ",
  "key18": "3sTkFeyqNfR1iem7xPavTzo3zXnqV6cbfoLRvR9pqAZbDfeyXwLYKZaRQqVjVEK66ZMyJVdsACMaZbhzf3H5qsNH",
  "key19": "2ZJsu3g6xhaZk8FNXNJnE4bvX22AcCtcEr1qVkFq6r8VC4aT9VUpWULVu1QqnCYkSFHhKTQK4XpgMM8uNVFJPd9w",
  "key20": "5xU25aFYNrnREVqkcabwPKNAesPYBdRjFFpe1Ngo5ZTy2f5PyBBa2ayJEsPDjiC3aiED1L9ZUuvpC96AZtNQjbc6",
  "key21": "5bPgc4UKFkdCTwcwtuqLAa1SKdQfh3rBdp6587fiAYdTCEruusadfuGFYAa9xwvZKEnwWv21aKqSAjSXMAyF1y84",
  "key22": "3ahN4ejpAXFyGFyxNKutXD8Y6Qs23mPHSajboZvDTm78r5rXT3Ad2RfZGgjptVAhLhrUHjeod7U46FL4CAt2g3wq",
  "key23": "5kAsBEZmYLzVtveEuuMx4TCfD9MThtegJbPCSaMGhdicmkRBobMk3njd8yNrmFZdLgpHDYUfhg6iAtGAc7KT4Kko",
  "key24": "51qyqHkx8Ej5t4BrG8mGL89139ryY6GXtjVn6F938stCLandcxZXdx8FmpGGHhwnUuEnV7FQQidsoxNfeoNRdwE5",
  "key25": "2eXXT4HUsoEkniZDeE7PyFdfjnxAL6TRgUiBT8LGWs4bLoCnEAGAdBDDHtvuYDcQ7KEoHq9X9rVySmzhL2fcAjKk",
  "key26": "atbLxeZUf4J9RmDZ2DhVAkP3xDMZ8utM6xotbbz8Dzc5SrkRXebS9SgECYx19VipntNsmJCj7djvwEi2RZrVYmc",
  "key27": "4fBhaeiJ5rSKSFk1QNFtN6zE17w9HgpthXReFTGBHqTFGWWtu55SrQNLgfVNvzuwSyAJKKE4WSuaNnCkGVsWGPcL",
  "key28": "QKjJ8Vhvy3oqYGXeCikHFa5V2S3JSAiWpGBiB6N989mEkDWHmem2kF8ZoGfgGYzg5qVfTcAbpRrw3kaqUKsEtoL",
  "key29": "4dmmoAnZQe86b9YG8JYhNQW7PwMypuvUn23DSkmeWm5e95qd6BmXfY1UD6KhjGLhppfibcBPw2DZ9ADaYcRPkyxm",
  "key30": "5eJoCA5gkyCcUcY3VNZ3VVkqwMBsz9EC3p3B6dnshSpqDR5kiiiuSazmwdJaWmh21eRbWWTAtPrEjxnY4QehGVs2",
  "key31": "36P4zJ4zCTu9EFmhwVzhLAezqeEBqqnRzJQmo8CSRwYq5EJ28TsgVqjtsNYgRWoh8JimfdaXadwtbgTZ196TKSkt",
  "key32": "5S3HkGYBAQTmBRKPbHQnAvFU48FsSHttnVEtDKjCDodjaUQwiiMy4ZRDpWHfa6MSf2Ta9Jep4JYmXSHi6r2sxD9u",
  "key33": "2i1kdddEXTRUixEFa5QgEEm1W6sx2Fa9LNMCVNnBuyKmoknXnoDyymdU9EXw3T889BXxQm3qC4YTHGEGGev2Jyq1",
  "key34": "2jzBK9Vjs8zYRVkdQq9gmVkQz2HvTQXQhBBnvFhNSSh2BuFudoWW8Fia4XC1YfcYWr6gWdzGYwo39LmMTkUTorGe",
  "key35": "cxFewwndfrPRDcQmwKtcuCGkv2V18UYa28pFRfknTbcmbLHVGRFDzs1va5W6hQHwAid7ZbZfZWyknNVfeaCwMga",
  "key36": "2BXyVZ4kkrvu38TawgUXv5JRGRNWQhRU8XgBuSWhTzXAmbV87WcBXeuDio5Wjf393XyBRPcPoe1ttR8v7wnwPwTe",
  "key37": "5JP4xrcu9qSu6Lew1W6B191vnfPpDsWeVm4koDUWw3vZvs7FMr9NwmYgrrBFgYaUfakLLg8p8J5wUhsntSLmocZz",
  "key38": "45rWqKxhF1ppv8AXrP1LB31BsxCswg8ZuELE4DVd4NQXXfwE1FxLnzM97uXNSazuq7oVxfuuWY5aiK18tyxaxDE9",
  "key39": "obB7jxHCaM7dcJnVoLFEMMaMYEBSCibVvvbkqN3EXNs5DDxG5kf8bd1y5etcDb5RYGQQzaEp8hTZjMJAxzEPUKR"
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
