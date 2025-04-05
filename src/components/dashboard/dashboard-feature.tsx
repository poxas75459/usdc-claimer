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
    "4m2Dr6MMkBGGstdLF18e24BkmrtKmqy9abqGVj6FtTq7JsZGfGZBGHS6HLcLA2sebT7JsDM8KAHiEmzde1Xo4Haz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RSycM9FJ2KJsou7Yhrov42oxkA2NHjey49CxChshHHiwRSd65j4E2mTdUJaSyLQxStaR5irbQmr54p4dfhtWj2M",
  "key1": "25WcmtYi2Mu8fqTeuXzam8pT8iEoEzQk825QBypPA8LsqnHp5nnkdJBLehihwzUVvDH7eGFVuSfT3bkaxaKrcXD7",
  "key2": "4Y32XWAweD7XsN7VQTeaF1t1NfZ6NCusruCh6GjZvg9PKJU7XCvp4dphk9SJSjt5Fi4TfrYp28JxfKwcTiYiFDpe",
  "key3": "2ehqNjvcGY13Ge8T3nABmvj4VrWRjbjVbTYTnGj5AdX1U7VhsjQ71abJom2EJ8bDcbv6p3MqtM5LYevFQv7aEcPP",
  "key4": "341ZtvBJDAYNKaBCuZNfui752WF1RWfS7BYyihCUtvS9T7EMzaW8o1WHb6gTCR5CcmoMiw3LajYFn37UqUR8mQZn",
  "key5": "26qAxteN3c575PSW4Zq75SquNrqTdGhUVLZjDfCRhmMpbSRyZ8HFoHqe35yjmMwfWFMFPm81NDt89Shw5ejQuipG",
  "key6": "SKyEtoqGVtmRan6kwdWZnerFDp2fvYfxK9KiMKLPVVNhKK6V79JWqpCm9WdyGRLVHSYSBLU5nLRTGVfMwicLVFa",
  "key7": "3gYzo2bnAqYHSank5drmQ4MXGuw6tydDTRZdRRwxinha91qSr3Bhe7xGdZortJ6mLkbaA3LWRST1UeJYxjp6BGp2",
  "key8": "iPPzJm9KrHy2LNzF585VFLy4PP2Mo3FErFNFKckJiFQQ2bJSikmJkz89UwYihDEJAmKnm6ouCrADojx4cm3kGv2",
  "key9": "2nxbPNw9XYMLiBXjYJ1srbPUyh8hqewYLYjLcDKAz74oxY8yMEEURiJ7nJvNTUKUzFinZDTcZf9Nrf2HmkJPb1BE",
  "key10": "5iAd318hSqGjsUbc52eF5bboJhXYzcRMjWqRBszSSEjKTwxEVQTwH8WUPj1csXHMnDJXXT8g3NwoGF3ioi6n75wK",
  "key11": "5t9TR2ge1S92RAhHbDGofK4gM5UchC18EeduDKn7LLZuDP5FvER2w9FVWGSF4yoc3KmDXxvVczyu52dbReVkPm85",
  "key12": "3FziBgaMv2n8SadQ5PTFB7RwgoRYvQLAz8z2UvVrGhonk7urfkJaPHyAnxPqWFJt9pwXXLkZjerKE1tWqtqTiun1",
  "key13": "5AwrRadPm3EBVMBZ1Fm5gJ9mn2LEPRvXaQqCmNgZK56EiYzCHtdPdWuySNyREyQf7FC3zS4Qb6yLV64d1tiidwdK",
  "key14": "5XxjwzomZx7wBcqh5o6FWDU5vjycgbt7RUPfraSaGvNgCP1hE2eWgiwPHyaJzSfebcxH2kQn6kCaJLv2JgmPUwQd",
  "key15": "kgdcG9cnbg8PxPBgZajEExKz5ezNvLVd1xTV385pSfqnP6TQsXXXguNAu9wDNxf29keqenDXSehFcRr9nbYeQWb",
  "key16": "3LAMf5sGdcNYsrkSxPcPzSLQoodABc9CfdzMoBwznH8zcZbgJXWyDYgns25NfaKdmvszfybu7XitWPGPDmuGSHzi",
  "key17": "54RUspA78WxpMX1Pk4pGwyYvsuiXbS5UdgAKXoEVc2PkTZuhwSNLRiJWCw8EU4CwWD8gZLFA1KvEb3TFfv6aesx2",
  "key18": "2Mz7SoQvJ15BbtQGawHXuQYSBUbA4zLr4gdGisJ1YBKthy5JZvJc8P6MMZe9o53LNAh4kJJsio5utEQ8gWf3hCNa",
  "key19": "z4AgBwo6hp7YgwBqf8FPQMjLpGRFq5rbCDWK1H5HTW1fmgRUVa6vXs8cxwaZMyG8Rn2ABxrgwpSPiqHjniKSrGe",
  "key20": "2ziABw9h9YhR8E2hcyrcFu9Yy2dXiTsE3M2oB9HCJpAfZJAUBDHnCjaYWUCU33TWcXXiLZww5tCPqUBuGwWajTKy",
  "key21": "5YaLw2x3kSvZx2o2FNQvmtVMgEmfEhbzzNNTEGCNyUnBE4kUxUhk9f9zXwMWNs6TcNJKjkZ93Ytfa7rhv9sshUbS",
  "key22": "2PT42iBVLuyExpZXkExTQuLuVWkcMhrHUDJkMNJAWji2y7Yc1e4ijWRbUDBx8TFvUTTfJHdwtz4vU4fKU7qsQaX",
  "key23": "5VuGF8q8hutsBa6kSpVRfZq5nuNVjfkmpWxdZAndbJf3i71nqWY7Rb844mj1MVtgW9KpKS8Yg9YXMEbGumcUJcdn",
  "key24": "4rjs8431ShS8QnLdWs9KsNZwLKE1iuUwzHDE9m2AA2XAf6LKLZg8TsNJhbJFkUsEiYmDZ5W2XDcfuZVmCYMhgb7t",
  "key25": "pX2nrGYoZHiaBQCB6yUu82Kaow6MnbH1NgJ1xrvXSns4ccnPv7AbcUrRyBxPMh7t8L95Rj1op7dee8QjJvU5vJM",
  "key26": "2TsnUaPRmPuao4wto9m9DK9GNtZpfm5EXzngYpFnz7NJrthcg2ZWsYGz87mhwhRcidsqekm2ZmErcqde5z5t3oj1",
  "key27": "4DBQmnNC8o2RAqnBxC4qtTvany2j47qfjJipopVBwf5m7cCoCPy78PpyePNsZhXL9V76cdGrocMfHkNJREkawZTB",
  "key28": "39HG7dLc1zkJssQawfn9DZywCeHu64LGEswcvEsdjefHV6nGB1iJMoCZdttTHKVSHEevvJDTqHEdMQSi8ktiq4Vp",
  "key29": "2auoajpJF6WP2fHwZbuXAfKE7BTpZD1YaZ7cLJSLm3y1dCpf7mezwvn8o4mKjPyb5Jxz6f78meaucKfgrzmWWuVu",
  "key30": "3VMDeD2Uu12E5VfSabWPZgmDDbWtGPGLcKSA36JdvKdPkSmHtTJsvWe7CvkTCtD1ydL85xB6uXZ144nLnD2zyDbG",
  "key31": "5933EsS4ePmLUGri6zc4gtUynLmGaU4tUgTG9kjENCq22gi1XkQYtJGy4Bz1Znn8JxwoK1Zw9RnyHhSqzX78BWso",
  "key32": "5Lk87oKktGfmvyqpqJBgwxUcttuNckmQatQ5WpzJnu6iaqdEmGsqzizZW6nDix9u9jHCJEWEZbzPcd1k4szVLC3k"
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
