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
    "2FNpHRTvz6eHyGabWy6ppc8hAtmrKh9vTJCVvVjq7Zez8NBGuHpfpDSS6Nd5qEM2QhqUb8J7yZGWosKgtaq2gbag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gNigZrWae7HnjNX4pT6XBFHsGLhkAhZPwExf2z9MFyDKnHZAcy5yVBPtGtaJbHAJGtjnz8T8kfhzemE4ahkactD",
  "key1": "4sRT4wu6B9kqs3g8ShDvUEJFiub7mkhH7HKydCs6k5rHj9dcjGYbhg4Tvn5DAgFfGeihipGHZDLTmuq7VtnwA8Ah",
  "key2": "5LVP8MXb1eD6uq3yoFMbBCRyibNGyrjh599t8Qn1dJP7Ybr9dUruKoBJUJT9UJVRD6pVqxhvBzLfrmCMWFJCi3m7",
  "key3": "5zaRMtQccLTfxUbddHiMP4p1vc9nFUVAx2aCE4fisYPyw8cLRZAhcdixhCoo7a36hTaYUXvV1Dz1X3NEyZjrV1si",
  "key4": "5TiB6AFed2CqqYkahMN4gCK4SsaD8H7vSiktZYkMKU6yBCepf7ntszkP1RQCMq3zLr5TZ85LmiMSrSXaawBtLg7c",
  "key5": "5kTVmGqmgMdYxpy2BgtcP2SJEnmRWkmP2w8C8xBBUgYGv4mF4KgTwx7ywzSWHD1k7JabCfdGbaG7gXMqFbihYrN7",
  "key6": "4RPP2M3TGmwg8vgFTGqwZrF7qQbPsd4evcDTrfGe93HVzSEZQyc3LZfgo2vh1Bq1Svz7SaNWj4UyCeHGMTifjcJF",
  "key7": "5iVfg1eoToSRjw4TB5k13bU1ybsDx1czzbrwDAboQoHLPNpFTr3tT8dWM2k7HkmyosjowmytQyt6sMjk9mrsR9f7",
  "key8": "4WHWQ5phTAjdNwKG2RUQMHoCHdwePUYBMj6fSn7ZvkbfkkP8eSh5Kid9UTPoAtivVUAUMWk6buQBPhasPTZG47ya",
  "key9": "5jkK4eHQh42hgYbqiSr4pvFbmBGRzkucJGB4G7N9fEsTc7ds4G8V9uqUYz8RtXnV6sxkkyRHcwcuYbV9cmLMWjnn",
  "key10": "3tDWZ6jjuenTf4zM857AGKNYo9UiwJP8JSiJhuo7fMsonozgHhKTRFYEzbPAEz232ZqdamhZV2vUfQFa1492MRkp",
  "key11": "2cE4JzLHtv89T579beGpk14P4n3WyG4cSbrXXRMeK4kn2Vuv9S77uz6cN52DHBTFPPiznRMNmXP7iVUaDE7WHGYf",
  "key12": "4deAsokHRnZmJGtjzjozyrCByFGYwWLFgaYAcWPW17SPDtp85uFh2Azper7ma9JW7mhAHw7JQt3CPpmeMTZ2i7dB",
  "key13": "4LuDAKymYJJ5x2SeF6J89DeVw4Qk4MwMdG4exQrs85TUa7pJoAStCYp1z4r6emHYGRDrDYPUQs95Jeu6gX4ivZML",
  "key14": "2tSJV6gVHWhFCE6hnbnGAgbF3btrcuNQYTNJ4paxtawmkYJBMXkaT4QLoW1BvXmGp7jvkVHtgsSgHBimzFWg1xtt",
  "key15": "3pE3je1udut126ijpReq7quHCQkvRzCFwtQvzBrsVNcBjRHSZMH1R2TqD43yPogfuVZfvJhiaSMNEAVnWKiNG8VU",
  "key16": "3JKS4xiZXtMMQ8Pdiv8qyVcaMKskpXgmLsqtGucpP46cDnPvw5djBMGHY6C8ku2yKbhvrrebSKkm8vUyXwU8rMYq",
  "key17": "yhRs1wmnf2tzf54E1vaUJXg5kwMSNtibHSSiH4jY5FzD6Sbz6FF6YzojJxVpbj5x6jnHqtYj6QLQgD13snisKNe",
  "key18": "jXS5dcgzK7nzPYwmmaEvoZ8wdDeaevz5TJarrLaqct6JG7rFT8Um7n4bdsjZEbWwaaTAGVFxfkfF71uCgC6stY8",
  "key19": "YaBseVj7M5UD1AwZtH8rkM5Jon9kJSvg1uope7z4ZKehFcCJo5EMb251ANvMW4zSm2KTjXwdCWoGnboSqkNvVk5",
  "key20": "gf6JTMVNpoKCbddMdyyMSUNUKgSwFUPsxxkhf73daihKRW2bvFgPxJdK4X7oMaXBdn2k2Q4RbH2qLbiVE8BV8dk",
  "key21": "3XiZATtP8ESKdGQmv9mu2tRFJUJuKKJvhTQSuLkLoHDAGFsCVbho5dUuffNa7gWada8BmaEusaacz3dANt1DLSS5",
  "key22": "2FACWpTj2UQDJUq5xjvqsWuP3pBUi26bWXJQK3EcEZ7cxmJ7C4dfhUBzwhhZz8b36ygDB5tKcRSUgCSSLpM4dWUp",
  "key23": "3qBdpxDkMFaDheT2vMmmXbwyMcAfisk2kudrEA7rtefQGGA7aEQwrEdMyxL17qv6adNKctQ9U7i59LAgdYBm3eK8",
  "key24": "5vfebx6FiFXophM91uY47LSyfS8RsvSvmsv8KhABt7r31c3xdmkG4hcBCdnFJhQUbrfmeb6Udto8Y5pQaFPTjx4g"
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
