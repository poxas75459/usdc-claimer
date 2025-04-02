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
    "39b3M4hjWAPbcarinrxaqNodWWi5WykvacDMJmd3qEjMYLRFnMDx2G9qXbvXeAd2Zd3RPWuLNA7akSK3tyPBi97M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24nmtt7jzGam6J5od3DcsEZ6FqfBSEmBMeBnDLZQ9EFwz9e1RHa67M76KLiqT89ZQ16tUftVFmQ1Vvjvh3Fou5xz",
  "key1": "2jnZeEsGFg8ej1oCtyGihaxkDKuTSa6QZpboFXXvaE45ct1A8eKyAXfufmHLHk85AatzRjyXQh1F7kqpprGNvJso",
  "key2": "3FTAjRdXsRCuREaS7bZyeW7QEeY7HLDi6QfMsEyeD6UcPF9oQgeN2z6CSaMPc42odgHPVhSo2qrNUV3Rdgux2EPP",
  "key3": "2yPwZDUoVtUn4g6fhPnBuoyszSC8dNk3458u8EJaDhUkLq97JUimA3nKygTLYVPfKU83JdsvTrozPckUqfAVjPTt",
  "key4": "5QarptFzCQhB47JD2tS1pB3yzCd57pJuAvvDyWs7eypqE4sGTU9HXtVW2i5g9fqxRDtUYATKLuBzXaMUdUNJkdN6",
  "key5": "26rUN2VfnmpUw58zYtnjdWNZpbWNB6fr9UF6TMJYqaLkUaMEvKbDsaTruMb9fUSxLqUMTQ8yvCR38Mzsvn2os7zw",
  "key6": "2Jw3rpWMbXSUzZt1MdHzkNQLXLKhagANXmTHHrVN5pci6zxz3b9KiqXpdGRte7JafkNkjiED3abbBtaJCGmEPgFd",
  "key7": "4aDQB8et9yUEZHboY1AeJi9kPjQfq94Esbgfaw9YJ9XQw6VpFV3f1VbJahGnfK3v8AkTyGC1smbypjdAa4ewR9JT",
  "key8": "63zWmYJ5tU229ag7iefsKwBwuESjHCR43oTx93jc8PR8CvhqRfKujS54pSbgawvPCMhcQ5qyikH6ciduFAh5myJ9",
  "key9": "49cP8HUP5H8APBqHHLv4eKFGYxfwB4nNWTWXEr4p75sAFVQvkZXZMoL72r7kXmZSUSnTRfkUWmKo3gvaievTZL8N",
  "key10": "4xVvXYpyoeBhcFctW3ZxTK5xCYewwwXJ1e8b5WiE5dbb4N6dXU9txsvS9j7wHt5gqWaVx2AxuSbWby4pXQQqFtdE",
  "key11": "5YDqv6yLxpGUacskTd5vY2tVbMr2UzWYrkBH1z4N2vwgYuJrmHRKkhj1BwA7zF59HGMVAvyNZpsZVx8YiTp16vyx",
  "key12": "2tsn8bdc78mfKPZabNoXK9KHjNCBTmDNwxHZrLrPzJChgBrsGrdzvWAAoc3ESCWhcwdSt9VM2iccGjzcHsp7mzr7",
  "key13": "5PrHXJVLpUzHQDyjSgpX1MwMnJgTgX9fYeKZYprkqjfSx3LLgXh2Q6Twq75iqsfDZ17wYsqozhHN6mDiY7CezAW4",
  "key14": "4M6rDCWehoecxrLVfwgxv8A2dcBSs9hUQxM74HRyMPy9k7uVtK1C7HrG88gt6tPU4ehuXHHxJEJ1LQ16bqfjrYHh",
  "key15": "63tqzTcK1qgQwVeYsMXWoHSjpevz7JfCtPwHHKP7zBmbPWe4i67Ao3aHsrfCZW9jeryQhNevgbwgm1rzKXKSphyP",
  "key16": "2tMbGZYTGU2B6pTHvNqHPMHMLM4tTbvEunNzPzFugzCuRW373B5THbXe3yPs5dRuzyC3rit83tyuStnXq2KPz2Jo",
  "key17": "3EdXxRfh5mo5mdbSrPTZ2D9pp3p2D2Q9ZgdjveF2T7RMz9RPcBAezS63K3yCQ44SsYWC61NoJXzNUb5qSRMmJMDe",
  "key18": "NK9d8nC8fsVVbBAfhEcdjjVar9TFDBM4JcTaQGzhXvtBMzJatdahLqfByW9hna16xPrPZT7EoTWu5rBdjd6ryed",
  "key19": "4JMrWxApGRUtkWEtTqWzJ1JYC92HigCi1n3i8xGVxSsu12ve5BVNjTjrg6Bezh1JodRi3bejCGPCmPTTFec31aF4",
  "key20": "5SdVPoZzSBuNBUc56ftDSVKUP6ac5P1dHCymMSb7J9d894gynxLEUqwAzH4CFjeAoCEuYzRgbKAH431VKpAzHEwC",
  "key21": "65EtyrVd89DMQgssrm81ejSG31ENq6P1xZszqi85ZBXSjF9NaXdfNvnUnz1SboucSUgN2TyeT134L6cZ1iHbpomQ",
  "key22": "n13Ekrsb9kLxfywvvvHAgo3FnmywnKEu6JZW7kCEH3kiwfMs62A9B8umXQqjdR3emnC9yE9SxygbBybRnai68ah",
  "key23": "4HDjndA7RviWWDTUUY1j2EJBGao51Vuv2kPgQaqCd6etksp3p4FDL5LJNdZZnGLt4hjTgGudvq7AJfb9uwYSx9ED",
  "key24": "4YN5sLQiN2QYJdiwcTmrNZV7GWXw7RXLYgYmRLDUmzMF3V9GYX2GaoVbqmyojpddg5gEETZYUKShtMWpiPtrc8oE",
  "key25": "3VNoSTZYFkFrQzA3cdHfYLpRbCGaqFRbkNr58uW5seeTzVYrh72vjKqBw7GsW6mMaugjgn5UcecXaxi1u5Y3Pb7b",
  "key26": "2grEqoDQe4HiUuUwDvE8hUA1zVozbgiG8YMDwi5QnGnnc1cL3EqCjqwxihCcsuZPCo38Xj9fsBH4XcxaWERq1PQZ",
  "key27": "4dSpq6UD1dWVRobsmK4t3R23QjXbAfFbNvfipou1AmHHDZ2WTRHyyJBHL5Y97PfRNgACeoUaGkgz9kmwRgJvrigY",
  "key28": "2YRBQ67ZSr1ReKpgdh8wPEbBNagfFbPdeRX7ydMSH6tMFLrkbGSdzMJp2FH9iWUJxSvmJZYuVkH6n6eJiiM6NScB",
  "key29": "MEUNHnXGkWWH4j2mPGGDydASVkJXDRRotQa66yNQaBASzAns9HzJNaydaoRmG6fp2k5DC3Ed98AbqpfyPzvc52Y",
  "key30": "2kkJ6Z6as1WPiyoyc1Ljvr95f6hXp2wc21WRiwaGL3CQv3WQFCuDPHDZn2PTX9zAmhVvJBudtrwBH2yKSCrxNhsr",
  "key31": "3ryPAHXMecCEpmUjNFTrLUUKQ2yTsnbb13NXXBSa4j7ARQYHmNtMsaNgwcMeNoYEzte2vDwnokr448RgrkuEbMeh",
  "key32": "3SKQF6HmWUM3VBHXrLEh5Zg7DTabduD2Hxauz7Q9cswRQbaL97gonWhxpthayYpToBNsgsg7rF4ZWzYXTUU62bmc",
  "key33": "3ABmT7MgtE3YikLDXUNk7gDs67zYRXfvx2UYEXQYX7vbzLR7Hkv7K94bFdtEoXL21MQDm8jtJLHWYfcBcJU3VB2A",
  "key34": "5AKCdqWWzdYbEPCMyZy3paWg7VEmK4C9JnvKMkrwco1Bk23A6HNwb7KWLDbwjyWMvMAB3xoQqjSAWQBPcyu3pLD9",
  "key35": "Sj8KZ2EZDqiNzhEpgpGSgkcL4hSXSDKCDketUaqF86r178CG5VP5Y6xv1XDYm3YEdszse15gSU4R3nb3QeCgPrx",
  "key36": "3HKPcLEyX2Mq2SFhYrc64euo6oVECELNkFf1XNXDm8RrxbQAejFJVXQhvDaWnGhF9JcjnXtFWU95UfrY9A94vR1T"
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
