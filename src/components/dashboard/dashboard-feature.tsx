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
    "5fePf572vnU6oeDT3ukV4bDxLpAc3HG347914QGV8BpBjuyEGJgmmsB5EkhmHje8bwAcDXqEHhbdoAQTjNrFa9hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56JFytmtgU5oUifFGaVCPJWfqmQ88w8iYbDDqeGEC6Sbk7GbxfkK5FDkuxrqLRmv7yxrzBRU6yFGrPQyR7nL2wjt",
  "key1": "QN6Nz41nSQ1C5uU1gnvTZQ4e7TaEArWgUS3GJKdoCWDVKNUDeHZq6nZ128P37yxjv8DtMezND3ubcqAmJGPtMcM",
  "key2": "4yBoeRryL7YvVHuKQYjrXauA5rHvUC8xTTVtPvGF8QYnqXcovU9mqcA6Rjk5jdB2xYsznxpjntZ1RxV5YcB3UywC",
  "key3": "QFknzeXp3QqMXRADt69CaxYDAggEeXsrh8JsC59D9duT965Vy7WqHGmAjvivjcBzu8kGNprbed7Gu7LPGMiPyUn",
  "key4": "hyCQJJFEgFbq68MfrRjZdNhGL8jGd1nHzt2GW4mHumtcDYHfSsGMrbb8VoS1rGgqAELjCFeXktxbYsh8eUEaNMh",
  "key5": "57AZfdPHTW5r7zq8drU8GbeUr3QfM1vawreGKrmaSF4tqLEPVSEFfWk62i61eL3eQEhQZbeLQkp6N3gaRv9Hvc1H",
  "key6": "2LLZxTJzAfgGvJUb9RFcKLptj1UxmmkDotunh8uyFYunti8wRVAE41DjJYkHudjtZ5EzpKqHQBmtnZFPTzKozsgm",
  "key7": "2J2Vp11c6USSu3bqBfyppFYvvsPGXgnJm1sdB65dN5grEQGJqXwzKSheqge5C3FGsLDnYZcEYoXEmYHT1rVMyufL",
  "key8": "2gGhp5hm7knaPcQiFumEWrXokipTHXEtgwZrnJbGP7RRWqr7sswfw7QLT9cNMuhgZNmUxFat9RnLzAh2CwRTjqR7",
  "key9": "45Cwrq7iLjvBHkiFwYTqqJ6FRYBtTHkDnZXBPFmyLUNhE3ZFjre2A9tLs7fDCKmtukjCKwhqdFoT42Z8qRKuGU8c",
  "key10": "GdDZaoHzx6XWuhSyvaK2MyCqdtHryS9F3xFfMZPoy7KfPWj9FzJWcvWN9rcVNpZoxTwWmVKPJT5rFqHjG1S5QxC",
  "key11": "ViWfsPs3fAbnKWbpiR6XdYeJNtByHikLL4B9FqGGAWe4XsKzCPSmbyVvvY3FwqfquNfTco1apWTyWpZDnM1Ek4S",
  "key12": "56SxEehqWfsEc8AWtsJHYXTK5D91JyquCzmECiheXYenFFM8SMndvgc113SY8geUd1JE1QPBTsChKJF5bXcnZ3YW",
  "key13": "3YG9LMgGrQFiHhSRpQF1JcTtGBrxB8nnNBebsbj4NU3bcFqGoqZYJCwc2gUeaj2kCX4BR5iFNvddyoVJmwih5Sn",
  "key14": "649hbWVfUEStyM15z72CYZx9Q5dLjRYgNJmjeTY2paUudEFwhgUq5XdQEkiZs2CJEibWaPchrjHR8SYrz8pkqrE6",
  "key15": "2ngom9aXvQdjPyL47PmiEZo6GJh18q4FvaTKp1e4kpnUQJkV8K3M8hH69LpeWFphvRJ9yyRKBAgHQRZrWE9179cS",
  "key16": "3wdf5hGaKvCZX7U7BEjfa9L1GMnRV5g4TsqdSARFsTD2vRUhuYp4cqJmB3KNBmojagYzBHVHmUq61PXF9v9SjETs",
  "key17": "374cTMivDbhjci5DXJC2bxGzCmSvB4q6NoB4VyRTZbGCdtxgJyF7iaKgNLf5D2cpYNht42GiAWJp2UzKEXDh693i",
  "key18": "3n1z5G8incQbquBRmPGEiZa8K21BaVSWYZEXuDMchpUczrsRHREmiSciSuajFyR1X9GiyaHtEANtZB5aqsVqFFj",
  "key19": "RhaiwtQpj3vAfKU3uerHRNEhzP4fdijPFdoHj14LxUCyjauqhH9ogukscyqgAVuzNaRW3mPiVUeWDHXYi2XGZSD",
  "key20": "2LJqZ9QA4H3MrbbCi3uAbu96ELwZpLSKfo4KvvxrPCPL3TyBJBamybY8g7kz7Kdz9z679Bm5rxbhyi6vdXnpJ2yV",
  "key21": "57rNvezSmYmjLVi3Sa3hVcos9PTqiS5p4WporydSjmJYkiE5nydnXxBN5uzwHmnWP7jbKAdJ3Tqb25ayZMHzkerK",
  "key22": "2qSbcDTrGaoF15XzUzQ5ikShJ9xjmPCYbd4JbR7nabJGzbVExNMgisCfaxcT9BvgGmh7hi1h9WwrSdGcaYC7cnNB",
  "key23": "46fQN8o7pnjy5d6e7bvGxE7zBLHgLXh5CUoSdh2mov1hp7a98LWis4kcW9jS7fJCyoNEXkCRRFNF4rbyCZWQz8qH",
  "key24": "5ZVU9vaY7ZsKfLVSJG7nJp6GboTppRx5vP5dFR4V36iAPyxUTJyMWxEFbwFV3ttV6ubJbeBKX8TtH8yFwZqN7mx2",
  "key25": "sattLxWgcn5FShqPXWHCFB1GHMwHCokpqaW3rpJEHzgYcepHc5Pnot2KRqmbYPdjWReXkqWKQzFU624ds9vyUT8",
  "key26": "4jDuktMspJFUvt7c7R4VBmD2xeARu5phxvMSHmFBZq31rvBYDcV6KGWtNP4u9jhk9vt6sKVfxkAngwxqpuLMwBoi",
  "key27": "dzXLhoRTGZ7jDV8xL9yX8BZhvPpF5KfTPGbkM7HTWkEQKL5TFYUrLPdh4fqSUXydpT8jxDLuUQ7gKoj6GzgFhKG",
  "key28": "44HE5kjakjZ5iLjMMFWmcYjE9A2juv7L1cGNQfgwDnKQZmb8u59qDjaeZMFPbh6r8wLYkVWdUySf39tAJagWbE1y",
  "key29": "4EZecYHAnodWYRQjidqP73owHaePynUoYzCgBHhgdVjHpjsr7M2rV3VsuCn6HGn4NJmiVWjGo92pQsmmgN2mRHsy",
  "key30": "2TfjWU2avSZdxatJyk9Z82F8irwJ3YJex7udSXt5cGmQuojR9cEewwjMWk2Y2DQANd7S87B5yRnmdTCPxatrHQYu",
  "key31": "55UWYKfZ6zHoqNSqnq7wkAA8kejzuPM6TmKyFZDWJ42TctQnYNNaY1yzVapuXBFppFDbVx7DncAh15qU4x8hSCTM",
  "key32": "4BekaX5QaQsBGSmk6qxiYFe6owBHTki718j9Q12Ppzbd3wB8jsdQRAcrSLjuCTu6BuMKMU9F2VACtnG9ZfFBkzs9",
  "key33": "cLYvp4VGzBrQQ8S4AU1jMJnXVZKwxhi7RoSfVMLzHamPHbPoVTjT3WFY8yrW7EFsUDxK4FNjXnHhB9B3dD6yXmT",
  "key34": "38AN3LW8oSGQgtbyrizbJQmYayf8XceBVjuJPLgH1kGkB1hF2MCmKPTRN4Js6fhs7NZhMeRvzPNksGkFkngsxmoy",
  "key35": "67D7T6cDL6BP9Danz88mVhJSkQV22LoJF22HqNndauGASDbo6SsV1enUTe98Yfd6CcgchbpdVfDhicqJszvnBTvy",
  "key36": "2pTfAgMtpmji94Hm2vjiLCA2h8mCVvb5cusAFGDqJjSTQcJzs9umQDZ8MGeBHAufPgBw5xK4pCAnmGi67aSZAcYA",
  "key37": "ZXWcACNQENGzdERVmh9ucdGVnwB8Y33chQhvFhSXebPf6H3iiCTms7DyJV4jkTUzd3h7TfftfyLmg2ychz2WnWx",
  "key38": "5zxyE9qk1dFeanAhvFzkiKFnmYYTWAaXTmAJNnbAiDLrHYHBFvACTf4WKeKqAaUUxbKzUcb4WrdTf2674CZgxAr6",
  "key39": "4Et7F3YbEza7HMdzNVaQYAprqP9MwzWMDbQt23W3EbBGjAQkQx1ZVmjh2bZBUw9AKNDNfRoY3cgusNGeNXanD7vn",
  "key40": "4aHfJQMckPpagUywCi8F4TSEQ7r988BCNeQAmUu2NsTskTARJjDaCKMsU5FsTeE7v9znNkqruaSeWDSxN3sgbH9F",
  "key41": "5c9buiXU6cgbD7Zyfcxiz1ofBWPP15GAdywh3n6LiXuMxWiWJnEvP6VGFfe1FcG1P3Z2aRMwgNEr9fhj55bP2nJ3",
  "key42": "4yL2BRcLEWERoQAAioLVZPCSHRdzncWW4hxNYux2odEp9bremTahqw7wmuWDyTbkHFA6eEnjsJwP6gmtLe3kKND8",
  "key43": "5mtC1MiSaTjLKSaDWknzZLa1emP6TRbAZKeMdvJk7cghej32yawBZhhCfmC6mx8u4B3n72hDhbZTFZzzKg6jJGHF",
  "key44": "26KCPC4qS6uDX3u8j247MpLiJKobxWKrT6ChD3ixJGXpbv8b88fL48Bet9dmoJdp5teEXjePsc57f7BZBuC9BvZU"
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
