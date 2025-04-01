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
    "4zbiUJmyygkneVhbQk7pHRKDPjx3x5N87DYxebcCNQh2sf6CSz5gmWF94u8pDYuqjegRZs3JNzF4fEZsHBPk7ik1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCxa73W6sFvwXRn4T855phimXzZfxPXqzwtQLr1nAquEaXBTNZMTnAbzwWKXwT84ZrkwGJUhSZ7ftPCUZEv3rsp",
  "key1": "3MJXbLYJGwgh2zd1xxWmXK8RQ2RytbvGKGXhXSZQQykXTDzbKssWfmFvQQnn6AXmN3J9u5Ac8RJknhyC2MJEpjwD",
  "key2": "uGUFsnRZ66MbUm89S2yNdrEiGK8xbjmE3Chgk8GBwBfiWwpBaPpkZssZrkg6pKGnF1qs55AiLTur8AnVwBBvh4o",
  "key3": "2pK52SSpM5SdLtd5QABK3RXhmM12civmqLH9Hmnc4QKksspPykKeTut1TJEZgu5qpFAdMpU4BCnGF5NbU1YC7qzt",
  "key4": "3jFMgEYbckmjrv6rPgDnsoqUKbJW6vq3wPH6S69qg8KDxAVR4C9BFF8ti2BTLkSDgjvyuL6KoogRPhetCTivzkWU",
  "key5": "yKjrxpxa3oPnqeUbKiyVKPQJU6jnqFUm2Tor3r8uqA6XNvBgsGyL7TDnBEkz5DYwMSVDBTjCFPxfbYm5KAZhMjZ",
  "key6": "2VGydMM3vY2uSNMrqZEUmpmCGCWQTXxm7QWcF6iaerSaL6F3bVFKZGHs2jkzNuYwd5d6cujSeDx8YyYRtJok2mmf",
  "key7": "48w4fiCt6GhCDY2x65HMknVbWiEXT7LeUYfddpQRFqgyE71SpJfNcPYAwP9a5oJQ6ARgmMMSSiVJP4A6AgVTpndd",
  "key8": "5P8tdhByNdhUpH4PE8y4cECRPnAetLk287Y4TWgREZJQz9CNwvTApkT8ACWREbiaXAMjgm4Lx1DJjwG1r2dkvooe",
  "key9": "1LqVNYfHs2f5nZyNCBqg5g764XdxHYa2XSM3xtxBpDoB5XymrhQtwgWyfgt5Hv1bj8caTaZDZbm35zaALHH3tdJ",
  "key10": "34MVCJXvP2z9J6UfWpFvdSefPvzL3xYPQ32f2FYbtUJvArANTAZHWSu8mSrPeMDg9sq3nJuTtF9BnRkaWKhQfVhp",
  "key11": "3LXiWvgHtSF7ZveEmiEdnYjudcSkfwPbydm5ouaPXpBZpqScNeJoucG7xBH9gvcbRHuhy74ZYZ5M4zNVXzGZWckH",
  "key12": "FM2TioX8S6uwqac87Es6HEop2QCJ9MMgfMCfeMQBdCGB6nG5FZCqEmCrXZyaZ486GAtr7iomYdTcJjKxjHWt3mb",
  "key13": "35K2V9q3jcpAJocutbKLTRtUzksruPpWr9kaxk9UWbNTp4p3ytYGC6WKYr6dkk6BpEPpFd4b8c9cPPKJRiA33oSk",
  "key14": "4ji5VH1oXXzCFS58MVPAAEDqDkDcVvpFUNvo4KUrd4VxY83N6knAUuWoFBdU1jzPhvHmj2in6eoocTKjdhP2EZgq",
  "key15": "TsiFzCxTYqZYWU87aYUhB5gJsa22MHfcwZhJjPTTdqSb5ieg1QAvKw4oTZNjxUtBNLRbsThcimq5GGGxzHTN8dg",
  "key16": "2ezxuJAmVhWnmaLvn2w5cqLDzBG9GXqfMbAbDwWp6BfeLHJ1oZnENj2B5Vw7va9FnFCG4F92sqqr3Vamu97gFVZU",
  "key17": "3rs3BKkCtn3urtKLBeUA4dSe5KrXmngWnJsxUzkWs1FhK78tNoL6sz7m8UK8z4drzGDQJ9gbbCS31qQfT4hVGufo",
  "key18": "ntU664wFKFE2pjUvVgi824Dspw2LdJWuf9mvSmjDWFoKEomJFg9Fp7NWqqLdmtfHBAETXLFxRK5Qa4wXbGXvdJJ",
  "key19": "xfBdF8Rh9bzi1HnbiJH3SnfXbD4sCkAPs5UaTThT19HbBJT97VhCgNMnirGdbXL8us59z733m2SfZGogdLEjCXC",
  "key20": "hhhQTssTQEdNeXS8vcWGsiWZXUm3ZfzQNrZXbatRxi7dG2AqxLTG8MvWFtTdK25qJKvM3DVr5CUg3JeQ9ZQ4SSA",
  "key21": "oJ2ByKHM2qoPNBGowme16XG8SjFo4JtCVwgKb8nUdeKZyLUcJ71KvQJk6DUwcjkv75K4RozG5Ya52XjXjJhr4jZ",
  "key22": "2beW5fvWDr9uaZYkUBU9BZBQFPKbx9hm2sG35jVftocS858YabKU55tDESX5a7584KhXk7LwkwbUdjzbcgu8CQ1Z",
  "key23": "3LT5FQGfTaoocw5iEAr434nbA9VtgZFHfH5u4HMcDJqV4Y3wHELfE93YKHc5MfradQAGtmdfVnM6Ph9iX7FKRyq",
  "key24": "4iy21N2GS4PTW1j4LmFZ6NHWQEv1Gn4iumjr4XPxQYqWSYdxp1fX9XFT8WqZsWib2Zi6AnXsyJuiZxiNat6tmgC9",
  "key25": "3hBFqv5NpFoFvkZVCecSkvCg39UwUrxrX7vcJ3mnuyfhonA18DSnUrchWhLiuq1xQ6Jke8WtkKcVG7o7NvSJLUzH",
  "key26": "2JSdLRDYqi4J2pBE8eXxdmVpXTy3d5AxRuxMyZ2YsCMdVQ7vqx9ULBhJPme594iKwTFC8DBGyepmfEhuRWy9cAVY",
  "key27": "3CEXTAdR5bzqtDw8QyYtUBC3N9EGXmL1rwjVZ78noTzsvtyMJZ9xHWXSAEdr7SiQgiKyUCZE9qiqhxKqdVdVMpxh",
  "key28": "4DS5x27M3AfFE4e4YKAD5dNFBnAZsZQm1SZh1gCNJRU7jJ4rRYiGLwSB6YSbKWeH5ZifGNahQafJSSZJQidBzHEp"
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
