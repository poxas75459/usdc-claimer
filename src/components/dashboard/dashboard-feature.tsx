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
    "2DrPjcSHCzWd9nKUbXXjjnvgBM9bDFZ2FKdLYdcwoXyLJkSFCcW1yKpihM87Avq5Fg5KWNzkfjqJGejBKB1X9oKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RBoy97Y1k3CguL5BXWkfheSaYqD1KEhdRZj4trDcNQfMtWQcH5uzucp8t4J9p8KTmhYtzHszYJScxAhu3JEaTDx",
  "key1": "3NCkPuA9UTrYNhzW1AgZEbmtc16eEPyx9xqLtbBGK3fg49m6Lw9jULibc4EyBM8MY632EkNEgoGhqjx11WUWAbxB",
  "key2": "3N64DxDZag9jmC5rXhSXgZ8QExcaobc2G8Dp3xifCGDofHJFYjVQmqgrxafo1QHbDjjvhrSbXz7Dmd3Mef5xnu9v",
  "key3": "XZpXFSmyYsDMcNKMuTQsLB6Tj9En7wVaJSLLaztdmDnRe9Kz7yvrFtsBrXvUqLpVTqMBDNeNyCEzhtQhadTvuaS",
  "key4": "3frnt9zRfV9dG66ZnhWFbi731cCX5gx1QAGAHJtS6UTDhC3CSuZN7TTfdhohRWXPHVuscg9E37RL18Hcdn2fnacb",
  "key5": "h5X7DQ5PF9UJw1HhQjwwRDi1CSar4WCmtdVra7Jooc1e98mVLvoLqa6h3yf9ghi5ssUNtpVArEgWYCwkGDBeytt",
  "key6": "3V2zRHqZ6RjQuchGcbG1qSosYzvd3vbxifiYamUMdgtT2hsZdqA6GYVS1o3rdaY5EB6n7wSN4sqmbGfRC8o92rDD",
  "key7": "286QmxTPav1kpJEMkxafnRu4jSmjHhzqVzCPgDLL2KcqqbNimCxhvuzimEt5jZL1M5oKS33sLDTzQ4HGjFCr1uut",
  "key8": "5YnPwX5mmRchcurvkRDVByW91QKydA7VJZz7XNCaJ43ASkTwYvJUFf8S3N7azST1MGxPGXuQtoM2wzEkw5CBbxMe",
  "key9": "3C5e7Gbbou1wp4Mmdky1UuB368FBXzZdqdrPssUFNjiWXBp2NcxjcCiJvQNSV6ah4GKKwg6hjTrXcTvfxebLH7nr",
  "key10": "4BSoJG8KAgowAhe1DSpiyRUaNChfY6ipYyEMokx7czq6YnoKuKJNDYD9J4G4dYt4RMKb69SnEAjmDQxme3KQ3qTF",
  "key11": "5WWJQqFHRRmbm5GkkrFqQQxTmins12CHEqbVj4vwZcYSafNAbA3YEHP5guamBAeVKwULTwcj2tTShc48dxp39aAM",
  "key12": "62pdY25jCi84QaiGbMaSAzG3g6gBRC5yB4yui7nPcRs2cWcEFsPnayt76G2ykNJMniuUnzwJNNFEkWGgdcnzaAKt",
  "key13": "2HETEMSxPbfNC5JZhLG9X9M6hkV9K1AQL6rtubEpexHdZj3No4ZqZ8dCxWoJ8k9i68gevT9TJaGpsm4NHPfZfg5G",
  "key14": "3u7bieaVE8kF4Tb4nFNNsLpU8mAzK7NLvNphb13YWYknbuqA1zVv5uYgPq5oCwCLLtp2guvAvjVSRrn597AvLsKs",
  "key15": "3aX8CQi6wjPmTjUrn5gZrAUZiMz3xx5B7qbkaPAYBE8hyj5Am7HiBgyCrSw2brsKM5QnkWSzxa7rAEHwckoBA9mN",
  "key16": "5yoqzY8HbLaivs1tR46KVRqLkSojGeF5eVcivfVga9PnjNHUVW5AbHhWDweFyEpVk355s7TeZd2CKeN9bvQ3u1ya",
  "key17": "3EJXEJ2WsjCVearHe2yShYgeFjup4vXavUyHpFa7hjpumAcGfcreoJmEwgdna5SrshSEqsJK1RnjqpcQZn4dx7Xt",
  "key18": "3D7DQyWpBXJatJzE3JSZZkUudbEYrCV3qc5xjomHmEBhtUWeixYVJb6RY9cchdhPzxFfUu5d9fm6RFEKm3DcMwNh",
  "key19": "2Z7zUNGJP5YJShEKK1Z3TmWoCq31SqYAvW9yJiM6ZSkBynaopaCrYh7oHMNPwQBQGvAp8xH55TWpSubcSCHPDanR",
  "key20": "2Dkmtx9K1Gma3hoHj4eSmCSrB8478tr8ayu6AeS8tnJvRmNqcuLqW5YvSQXckzrw9cbGYPzC6RjqG6SmAFdudp7Q",
  "key21": "47YXV14oiDeuiiWApwTCj1T9eGNa98gzJQ3ePTcmqbM4Y63nJqXsHh1J9H58iYYgjtA2JvhodGY2S8yhJd5BwUYZ",
  "key22": "3Qwu3NkALC7NrVB4GeXeJB4eTMizcyNVS7EdQ5N2DDt8SJbUA3YXLEieF9ttiLLT2MgLL5TcrpEHx2tRZyrR8H1b",
  "key23": "ybnSxDRknvS47UMGMYVH6NgbHTx7vq3H3q33QNxHrEYDRExCfJiVCA3x8R6K4NRzQrQL7XrFAbqTz59vhboB1FV",
  "key24": "52numG168BYyraaRNQtesFk2WWcizSLqo8vNdfc53zxaefqxNAFA2uzJdeAvwCTwMYEz9t21h1g52AEBUbkHEVbv",
  "key25": "5TiMR1UrszLM1tCLinxGe3z5zrqsYa196k1Qx7Zt62vdQByed22ML5jVbkBCGbfU9jwqM1bMBbbiE7bjE84cUCwW",
  "key26": "4asZNxyXaDxHNtPxbkyxiP1Jd91iFaNEzBcuXXHNHdmGYBFFnwoqZjaJhXvqZpTxtspGmYCtveBivqGkShug3xYc",
  "key27": "2KxHjp238cPXv7HTskk1uRuycLewxDpnNpahh7KoaRQHtQW8wDyyN1x1KANaWZTBmJbnjtcspYjZE4qG9Ns2MGBx",
  "key28": "5anNiB2o8D7zhTUmtVJdcmxXM43GFTfg9SE6K62xfTXd9mBrXgkv5gavshsLXw5bKBe6qMhkp9HzV7RS9YncuF9c"
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
