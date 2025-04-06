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
    "37uNanRtf5MtgyUyzd79D5hs7WUKyLJFooEnjo1f6QcWdrgzp2D7GHCkttHJ7CGAGCsAqr5RqsJKpNzg8ke3ddx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tm5wNKdpYQsmT7vBpScsaUQqnL6MeKx1m9T7VkyttNqMbd9iPmdCpE1UskSZ64KfXkHvTVA6ytgJmW97xEHTmDY",
  "key1": "48JSrWyUsxsbgNZZ98JQSUu9zGdBnpU4AjAqYiTwxaLQRVKPyQcYzk9mV9jtHZ4G2TGPq6qS5mT7qxCag6cLZFzz",
  "key2": "2hyYhDc58eTR6JQ38KriX7U65q8Ew85z7ma5PwaEEJjCgF7Fds89fHU5W3KSv3x5mWHLLWGeYNsWiDcWHPwm5uLd",
  "key3": "4RVU1qdCkUtRHmHmXcoXwrNqtYUvT4cfXPMaJCwj8KtAmuGUg8eEXqwzBYbW5M2NssPRvdq7pZEC9BEtaAykLKZE",
  "key4": "dnPfXE7ZieotxSpQtrroCHexdRVjD1pRXffMRdrTL8vD7gDnRH2ayoidZzjftfchnuS55BAcCzdReoLudWzHZdR",
  "key5": "4koAPiTzzMYDFz8e2R4R4WZ7o9Sh9njrPd9q8eGNQM6N7HXy2nqvCBVVpGX13s96mnXDojaUoq1Lcd2Pp1axGTW6",
  "key6": "5Ek6pVeyi6sZnTRpriMPqayHud5Nyt1x6pvcpcGzY4qPhzfrb6KKntrXXiNVKMLLTko6za3NSgyXmh7S1Hki4Tv5",
  "key7": "4e8pQKdDcNPntsNB1XiAb5cdwbvVhacL8yqrWB29xLZX78CzDUj59Yim2ohgRavQtYxTSS8JX9vHZJ4V2D6ujPu9",
  "key8": "5SDRFBemGoWevNeU2V9h6CgXMUDiFYRBFxMmmAGZFNB2VEWZ4jJbyijNkRDcJNSi7noy2JSVXRNkLiSFPEErR6g8",
  "key9": "5dxdvQ6qNgBUmNb6hKM6bX7A4ua3fCMqfgord6DJWWshwxRrjhZhoRUteWfPAHKGd6rFKMBFUGnjf1QH72c8jzzn",
  "key10": "4zvMLFzZPyCdRPie4d5k9DUccECWyD9Z39a97FQedAA5rXL42uCMxjRTzgGyH31LKaf6j99pULrW34vxHr8FzsKL",
  "key11": "5zcLjVSBrqw19XXXPCpNZQTTLqNSB5L45Jm9Ld1m9r2qSGxXYgTxfoQ69WoGUgiUfSAQxaUX8LAGaEKdu6VuCohC",
  "key12": "3TAbheDXCPuG3z8oNqpxczMKzRhU1feMDkiAKi4baZtfq16HZ5t7hkbxHMzk1KKvznRcTxRUf6i8cSamZ8cubVsn",
  "key13": "osFv3bxqodVwwnqwjQQgUcKgPwHLNsiAhekmzA4mkk4nKtFAeuZ8pFr6HXjtzwLRGCzhCs2z7Livfd5uZGZAUzb",
  "key14": "5VVVYzRuDkkZGWmaiQBq5Tns8bFkcaEL1w7V4ewfxCe44uwUjuUSNrxj8kxpohC7Hat5M6dMgX2Fr3XqqHE8BzQB",
  "key15": "5v9FFgusrzp6uKdsTp1ybkrhAww9uYBZCwwmxfrWnWM5SpsV4oYetHBPsBepY97PiHTFUfHMFd8PswA5zrWUjPGk",
  "key16": "2oAbCxNEdHvcFAhiGHo3KXw2NJJTisnhij7Pae8pZxLBs9UKNHBUTobewxN1xLG8PCgRtZ16aFp91aj4s4Nvtjmj",
  "key17": "dSGWKqYAX8T7kqzkabZhoiGrKCERRU2h7uddEy5MKiK4Hs5osS64ikoRj47RiF1PXP2UNbdq5GtnAskCncWqfXu",
  "key18": "3drgihf86CQE9xUBP7Z28tXcLbpu8wyUD17Twvk6uqy2P12q5Y65gwQc79DXj4yQoGAwNjov8zsHCXVwJqhp9xVw",
  "key19": "396PfshCro5ZxTihiWWz5AvsxgCVMSEGhuSs9dEeC54EKNtvRfXtvR9yXfscMmkmmAMoZmA2cRNRE6crpPNBdJsz",
  "key20": "3YXR9CnRaDY4yHavQAaxe98SgjnwQooFZqZ8mEEZ9CZXthH9pF2QNWRNXDmaii2qbdCKDZuNeEQs4QmCXXwPySA9",
  "key21": "4UMBWzhRctCKWX7R4SVNCe8ocFTwNGRmH39Df1BYi9EFruawRKoQtM7Mo4qw1Esj1v1kcnTQpLUrfXWKDW9uLFe8",
  "key22": "61GNQu8EVVTFs3DN5JBvk9wEPYfJDh9D6D3DCNm1Svo9ZHQpSnLMRVwDMrN2VjXGM4xSGosSp3jjHmRN2gvu6VC4",
  "key23": "255LZfLriKUw87zddxFTdPfqbzK2VAmGCnqRP9vRnXxDnVF5vxodu62B7rTi9kME85nMqVFaNYSzjWnH98DexJuT",
  "key24": "3T99QoBa3dnafZ7VCHCezA4sbeDKjE15GPrf1YxPcrfHtsUG5GwuauMCPDCDaHsVeWmpv9XoZAXfwfKZyqu6YE4x",
  "key25": "2Dt1NZjaPXSnhXZia5JQawBE1zi9gHkFvZEGDHDWqtZxDdWpxgPe4guecsqyzMWdRQoyzMHm82Ztv9krbZ5vQZid",
  "key26": "3SXjqm2kRxwtoXgL14d7wb7NPJKFSAshnGaixgXPjei1HwG7WNspBspCKWrCM2GLncxqbGnG5iDKoiF6SfbTfTxX",
  "key27": "qZoqtx7T7WNRPzGYdTk7NyZFezSRPCmRxV2G43GLFrXiEgRx9PJNFCu6CrRgi2eJTzvAR7d9rKtXMFNrZPBQ7Vb"
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
