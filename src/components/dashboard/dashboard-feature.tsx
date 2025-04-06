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
    "9qh8qwN74iJFRuDppPCvTp8kbgqEwAe5BPzSgYqk2kmaAzrpburNgYSQiR3YRB6PoKJVWoCnuy5VLqogaTwJGDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43xa9ZsfSEmv7t6JzHAnsRdjqdXPemhTF53Ae6wykHq7xa8mzmTCT4yvxGwPA7kFTerjbYx8FKvEiAkkys2hmLQ6",
  "key1": "5n3Un1cFXHXsQP3rGxjFovUAEzxrqptyLcQWPosCuTLU5Dfuh84pyUbnp47TmvbzVkg7DLz83RWPjxwoML1MmPrB",
  "key2": "3V6Ze9LxLYeFmnpQQ9PvEngVXe938VpW5C62c9GCVvz84f87chDovSaJHeGnMbpJVT1xfbVWGNyyxuLk14f66PF9",
  "key3": "67A4dxDDRUmonsd5P3FE6c991odCnnPBct42hptktXfCeNRKV5DiQeergSGgU7kXHZFd4G2fydeRpy2DU8YARs6G",
  "key4": "2t9sgkBtYJRq15FjMz5YQpGKrjG8iVTp2ryWgW9TxGYfUq2dad7TdfBXLfVaaneARD1ajQgPrtfo7LDQ5ZfQZyke",
  "key5": "cpdVp9aVn9y519K5yygPbcRRh7gRR1moRNPvqJ44DRgCaXx3FJAqwWqBVSAmdFe4hYX5MhNVZSv3FLEuFBnGafj",
  "key6": "4hMY3h1NC2H3t8bdT3WkHycvMBoPYh4p52ThdxYQYWNSGXzrW5tpjveRYt5PRxp5Yi2MyKebcVdzdwhVuCRQEGUQ",
  "key7": "uDtd1BcZ9Wz6EyVWS76tJYrXmweic7BEDSUYy3xW6Q2mexuYF9CguyavdRCzZLQ5JnJA2pNSs5sbhnBgHkgzyn8",
  "key8": "2GW5ST52mbYRnQgDAaUNQGRu1HgfrTuX8NTDvKj8S5bqmiUjSzVfwAAhm69RvogNeCDzAKSUE2Y8DNhg9mpriU4s",
  "key9": "pyA3EVArJRWzP4mbZa5thaviqZWCnUxZvUMRcvzMVkpRcAktcpF5Mbf8vAPB3a1ZdTgeaj5X5nHryToyt6gmDfF",
  "key10": "42zGCfB1e4x713bp5D5TVUnjqCpY5fM9G9nBtpXGLgBRPwGcjTUnAThs1pzrhHCJ7ufwCUZEsMndYW5R5yfYP5ev",
  "key11": "5dsHrtFuFuQdq2kojpAGHvAfHzFZkr6VG7uvDrMYEa6bvBn5fGAaz1zZk2eEy6YLiMFLNTsNW5t1Dew5o8Hjp1Pc",
  "key12": "4jviT8c6iomJmdD4vqtgHJ4NPp7hWqQJ9SbXyiA9KC81cYSBoYAMjYXBpHugHNQG2zZXuo3sxyYv1hrUJGi1wqVB",
  "key13": "2DS3ytumxeM1ijBQTLcvhh4W8xC7G1ZZmuJ74mqUiVJjb1FczSaxgTRjCnCHjAt8uM2bPHVbwjtUrWhE4TV8pwx7",
  "key14": "mswDDqzGkhpcZBzZPJRUwt3GE9H6n936JAwQTK6DoxJnW1WH3dXMiEwbAVqHmE8YR56TG4JdtHWGn5A89BWjXQY",
  "key15": "2Uh79MB462e1By3qYWUU3Vf6Ya3w3vkeMEgtnGbFpeK8iQUYdFq3r2tvrqqxQRHSRF7R2wGARbFodL58SeHm6fTN",
  "key16": "2BeCe4zDh8LyNugKJ24fBZy1JkieKh26aL6rXj1ZDdPfGDkJ6yZs9inbhuuisXTwtXXRSDuJEvhTYXjvYSMGfgne",
  "key17": "618Y42R88kkWdfTppAWuKNZZFPtnPzwJUqeijRKSq6MEt4Rsw4ooNw9nGnF7RsGasdpseA6oDspwJzkqFqN6DGgY",
  "key18": "2DEP75m55s8FuQJRQ81fxG29EvfTWsCqJTpduwHY6VyEwtKzg3NuSUvQercwNvEfukjxSHGxKBrfbxz24b25AxvL",
  "key19": "3cbpUb35F6H6ekLjZkgfdwKBWSBd3vTeY7H9uWcEQQbnnfB79RLHJttPTbBL5YH7HDGH33RCXJsJ5N4Fg19fBqXQ",
  "key20": "3LJArXbU2y4q8RgNLeyZELuBf661vwkqLhzrhLqRn1xuuL5fj2AxLMjeP792KbZswLAys2u1E64MpDBuGme36kag",
  "key21": "KSySXNMKLtqBncykkCzBUiM2DsQnMPZFvAS8jgwRCc42vTcdUk9UW5prpPEGL9T4AEz2prEZCNokmaJtiThMB8c",
  "key22": "4SLtvFevPxmunr4aaYGHoPUuuZSwY6wCijHaGdJYtYTNTYQqZx2EXhbxaj2APvF6VnvwXhhyrucJTuECJD3VDNaF",
  "key23": "3J1HFtpKYcWVzX2e5j3w9enEVZ1QzRqtJMHcg4ADEF1FpVYL1pa1vmS3P55sVWz8UoxjpWLRR8tP1KgFCf4gySmN",
  "key24": "5naztEkSFDxELFbXTiNsXJ8bRnss4etjJ4wyfLYqT5McGxjhcmFmnk2zpDKhAAYqYyfpAtuzR78De1ewa2NrHFG2",
  "key25": "37HQjVWrWWSCvb1UegcFYgtRbjuujfoQgR54oxiPNKPkFCVUoPfqwG9oMtWcdDrRW2Kwb5NrVjkE5vkxpnrb6ftH",
  "key26": "2B9Tsi3sQYECxMyxcXkDofADZT6eqHWbLNWhAFdwfbCGSDqrpnMm8CJ92Gf8P2ERMMGNuxh7N3kkuUSpm2DuhxQn",
  "key27": "31QePRWypBGPmLjnRM61WnHbvVDwtNTwGchzsWjDR4HEZ3xyheUREwr3ZKhziwkHAeoSKpHXjvT4WHTiPo6rGqv8",
  "key28": "4hUkApA5DQr26iQejd4C3JK3TjtY5Rfrxq4D59PusvCLoVvTfo2quxUj7KWHrk7tj6WVG9ei1cU1V9qJ57GeVVZu",
  "key29": "5ai2KzSbN3LmvPSr9CXzk5caH4bcWudss48HJikMbFQrWyWZnLLdguieNQgDuARYAopL33dSJiF7JNWbgyECv5Zc",
  "key30": "3YEAQBbZVYpRUC98SbmeLeVJit7GoUBsXY7TSw4AiuWYk17HTBAngr2NxCk64uQNtLdJYMC67ijxraJc4WvnQbwt",
  "key31": "2WRLWHNb9H4aT2i7cxa9rRs1q4ZDY5jJ2nj8jXL6uH66s582kg5gfVnEcpxm5e9FPrfw8mHXJEu1iRn6Q7JeLBD1",
  "key32": "439YG9McKYUv2KFDfpk9bzPuyHuJtKXMm9KC5xwt5yeTh7yXuGMoiT4qJZijC9RNcdxaabHXfzDwBWmUSeNwvscT",
  "key33": "3ZZfU8jypXBA2n4iiMowK6WwY1gGGtaCpn8DaQLea7WEAP51cGHwcwGaFjLFVcZmWd3jBwjuUHMFsXKgLjHZTZFe",
  "key34": "6R6ZZz75Y8XDzsy2mC8JrL19c1thvW9ZMn54VVYML93E8S4J6Wb9uQ83BddVhGMbAsPsBCMDp5qvNqMU4HBsUoj",
  "key35": "55XR2o1GEKke4CUctJG8NyonjWKELTNkJVg8h7kawRUtknMhUnqbWC9u5ypeSLVtUuxZrjhSkFT3jejNmTuq1Gt4",
  "key36": "25nwsVna3Gk9cMPUcZfWQALXbYiLiGy3BaDJLeUfECZEZFpgAWouUhSN4qaQFHrBMKWf7bZef27pHyWpnSKGaQp5",
  "key37": "3H94tsiBgcNvXaLtWtRaQdH8THc7xt5J2CGXLwmdqX4CTfJUSg44HJqR5muukTvLVR35PFwVM2ipkZYXxCMQsf9y",
  "key38": "4fGBb85mTi7uanjHPbe2Kf5ZdAMzfUXHMmU6XRp32SXM342EqkKwao6rYgWXJCZ6NhXTzF3Y41f99e8Wer3DSQta"
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
