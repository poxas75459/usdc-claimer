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
    "4ps5HXjJsf3w1Epznz2es5ef8tZvyhvp4cWTQcAbptQecJ7b2U94V5mQhgUeEbQm49M1bduyD8dk93rxCzAFHWSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpJ8bqT6BpPDuG7naVryZEirA9RLfsJ462K4XieJHM6Y9jGNLs1h5E9G9iUpW2cvavZALm4Uq9UzkkVAbUERSJL",
  "key1": "5gZiPMG4gFFecR1BxhjTSHpHDcaQZ2V3qUQHHsE7GCzV9PNtv28JKuNh8pKSL2LVeEuw3LqSDgeXuyd5c3avtBxc",
  "key2": "3Bv5UTqQQ42H2AWhXv91FnaYm2A2rhm48vHXhoSTjDpND4D3RnwXyzyGh2Yfn9fe6UNJnuAi43fAp8XYqq7WA2xp",
  "key3": "3q7utyGqwkRbNEwj4VtH41q7xDPxTfks79jPaAa59LZTEVwKXVKhRGNaZVw4vasj5XGnYZi7LMRvRk5xqHKShzGf",
  "key4": "2iDs9JUowCtTxtEhkExjqvYHdj9NFXuKeb1oytX9n5GTfnDiXAvWcW3QnowbY6AWDs7dTBT5jWv6LKxhFxoGYoq8",
  "key5": "3yy8PjBDEexaWHjF1xAYqEZxdERUfNVmqaJUcS6f55iqwjj71ymSekUFaoAzpDtLcNoXRNzu4QkrheaxnAvuDnp7",
  "key6": "HnKsXCpNu7ofwUYZuu7gs3sG59c3vKwEq82QFpowp6Ar4aHKfPMmo3nWx7CTkdqmYJdZabfDBDtEoXqWFT5T5WP",
  "key7": "4HnKEuiPaZ5EQVpKqFB4Y1KUvmCfNEVpU5xDGZkaU5XB9ZPcApc5VHQjhpG2k9k5o4Swah5mSNx2hGAC3S7fmkZ9",
  "key8": "655BYum5Ris6Vb9fzTEXA4QY8yaX5EqDBg1EzdyqqTJUFDMyReKTySjSByCbCUgmveGPDTD4Kn56vZbmkfBbXqpm",
  "key9": "52YBDiAebTeTHci6oTfcnnTf97DN4zkRRoWf5svbs9C1gkH9hPZTsd8RdtCTFZ6apeCkMqJEJpZkozvhNcu7ugse",
  "key10": "3jS9yPU1azs4ZkjsmzotcMrxWKwVA176np8bPB4hien7gDMDjvj4XvQ5NVHLRcRdkyMqxsUCWMYHCtnUQQKjJpfN",
  "key11": "4BiEhP9Tj2ehV6EVP4YJo35m1dSfw7DL8g9GbAdDfXjgogUXVCf1Zsx7EDhAaZnv87uqjTQh1K13EWyK9fTwc4mL",
  "key12": "2MhN5tkR8ufeAqMdXBYJivHzPQLFmkwh95Vg8esmv2fyMrEeDaZmHnPWpSihAo5YHL2Yru9567GLPo6GZoCopKeA",
  "key13": "boTjHanyeX6d2e3y94QhiLEvmPEyihaRLn3hqgNUDNjws5jSdSJZHoDukrMqM1gRe5vztiYVPA7gdiUrfEoTp83",
  "key14": "5kC2JiSUN1J9vEbu65QwF3A99tfc49dXSd6gJZCD1FiQUwznC5qHngw2hLmPNnNmqK3cBxqcYa8sbzVw19NkwgGD",
  "key15": "4utBiqxSiPrhmCHt1Q1QMDeLTNUX5vQvK1ShzcuFhfeynm1rxN5qh19KPWFq1W4ghFB34rKS9JKRxHtipcMVYWai",
  "key16": "5RMcHNJdJzt5MgEBsjxQo9avdsuykKE9AYDobGVnPEp4VvwvTuzvEL7aSGBvhsyGExEhtcGbNSBkEW5aYE62RNjA",
  "key17": "5Auw8Ek4Cn47QMmtiiv5QkM1Ej2UJff2b1sxfKeLpYKykPehxr16AKxxM2fJeoBeTHZN5omUr72WVp8gKxvULFhQ",
  "key18": "5qnVezNWy9EzhtAtZasnxU9ksmPiNWUMtW3Af1sufV6V45h1SmBxvyS5FiChgvpheKbsVfHhVGy36G61VAvVH8wh",
  "key19": "2Z7eiHht88WP286VfVymYMcQgSYs4iwYeCtVNpqgMhev3bq44w53MkyFvmTdXAf9NcrRERoeK5CBVQngtAKF97ZU",
  "key20": "DXMWnTBr7TjCPmPL3dXKUm7jstuHZJ4R3tYNjfo6zBm3PTwoCEzLC5ofijdtf9g4WnsPrUkFDXfgn7aU5JwswwF",
  "key21": "2sVsyYkp36CZ68tjKEQS2zsE9CY4Pjoop2FCKr2fUHjJgnz68Fhk5vHyDrh8uYQPPJjhYEU4ukvswn5HqgKTGoJN",
  "key22": "5ymcVNVcK9AkPjUSjyASt1x8mjSrw6VD526BqpUEYcjvBo3QdmTZ4Kd27ZAMppPYnKL987uxKZbZcvKrE1oXywt5",
  "key23": "2AxcU4F2MkRqehjnbNydeHLMZajVkyqPKY1fVt3ysCQtwxQvwM1sHyBogK9x87du3UFywYUagGkpdKvABUFYXPXw",
  "key24": "2c4r2CSDg9TEFYM6xur7SJcEnoRHMpZC2QtYNzHDBTE37wdPBeFbxsAjbhf6JT2kVgkMpFuzxPt2cBgoYRmLKQm8",
  "key25": "hZowpdovMAtKNX55jTC7Mh8rKZJKYGLmV37rwP8zPJEE9fW3XdGUJM67JdsJL5cZnVi1g6MyBqNFeQ158ivTPWL"
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
