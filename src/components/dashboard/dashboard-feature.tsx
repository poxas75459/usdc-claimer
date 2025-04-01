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
    "588k1X81TJGiozLERfqccqNdxYUwqqNgYnd32fkkKG1X9vDQ3Dp6mBccu3RiEj5DtVZoismixP2A6gbvKxNGFfuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ao7ENa45gPfQt5Mr5qqLQ679pJKgmEG9gjddiE1YMpHo47v1AhKyKgiqBjRg6kLohhdaw2WXRGQzaRAcnhMrssu",
  "key1": "2hRC8mMc1YCqomTzGsPJjhcVNmT7SWsTBEqZvJSPjt8NMFBETHfnG1KWxSKM5Cq5KKD1JJV2VnVXQ4eCsjE8n78s",
  "key2": "4TUHRrHaaKtSBtQCJeu7ReHPZyMQismFfs41xfsVQKUJCaMf95CFsxtQBDsPuxw6apsUhYXedw25CoRWt7NreAG1",
  "key3": "37zdv9otCtGGX2NCBErwYFCFs7obQC1AAW9avQTLvXm6LSHLCLs3iVNg9fHGXRdF3qXzRGPqBCxbHC2dWPjhSUzk",
  "key4": "23nki2KtNyuzbWmKRUuocAMNXxnKScsTRXhgbmQAKRmqhumByTFyNHgV71xsqjmyRYbDwRet2ibJWnoegaEtkpUH",
  "key5": "S3anLaoRKJ5eSxWUhfkZo9VMa57FHNWTVVa8A7WTVaHKVT4ypDcEecZN5vsYPDsoTjRzeW1Pi43ZAeyxb58ouRv",
  "key6": "mYZPewSuzUHWTXa3j3izzXH2X4beKiUEV3TGM4cRjFKw4wn6zAXxh9fPYybQtCVimXSS53NpYDAAemBRbx1uHxE",
  "key7": "4hfFkiPVdpauQVedPTtEMxi6G6KoAxJFcN5s5PZZ3KsBbb24Eqo17dXkNXNMCaXXq2sUFEcwh549v5mETJu4ueFQ",
  "key8": "4DT1A42VnXSWJNBtsNEWWzo9wHTadYdoXCCDUtYeECaKPxLHRrmMHyAZ2acMh8qHKBsh8vCcTSm2v1veGYpUN9zu",
  "key9": "3M4TAKUQeLNMw7uVXR5TbMCe3oXykqrfNWEBVmUsrZaohx7Ma5ZmF2a552e8ciy2SxqZrWwE9youdHqSMT8oxk6G",
  "key10": "5HF2hNPRLGZHCB629oumg8GMC3K6yWV3yWTu8tcpRz96pHR87Lnp6f8WWhW54Qv4XfDPvuYQjC21S3ZvQ71hk9UF",
  "key11": "kVWiBhiTaFJJteasV6vL1nun2oLrprg8dW5FqAJk3nE5XZdH3abyFnjkPvX4FtYzkjSbDzi537JKd359LAGnXr1",
  "key12": "3CNjaR2C1NFGTfWHe5vzpgSTBYe6BcGiGsnaQ64DrutdHyGkEhV4Uok49TAM8DjYdMenUN8stPkXJUzjno3drJy6",
  "key13": "214X7XDL8AqduyVgnHq8wQsWrHPwCvUbUFnm7JheJW5XkHqsX2hoMYwKnygtdKcBsN2oeYUccZqUiPANLKatR3HL",
  "key14": "RqkiW2QHoVnjqMFPnUzcMegMjbPfvvgZ8DsUu99768eq8B5GEHGXRPReTCGRXf3nFg7Sk342zevPnbsaoS1NJay",
  "key15": "5ge9yZwHmnBfp6wEBJLqNAjSQmVYf2nBAuEZmzKNrFDQtSirmwW1RcrqbrzMVAWSRYrhpsJPE32RRqKjJQfvNKUr",
  "key16": "rceW2vjMEm3sbvuFFtnwcLxi8VhH69b8RCC9GDq7LCFMzW5YkGGW1qWSowG23C3HsywkvSazouq5tXns79pJKzi",
  "key17": "5DJarDvuksgF56ioLGdcp3mg5GmKyKcDPusPfqv1CS6J2By8Z1e25WfahyiSPgQdjCYMkmYkxP8Y2MJRsbrnSJtv",
  "key18": "3RFWTepCHzepXvk2Bg1ej5YyUYoLmXd6E3TfAHtobsD65FqiTFuAsUuaRWw9jGejC4UjmHomr7QRZtQffTfWwbK",
  "key19": "TzFywA7z9XwyExyuVkheZ5m8XtruoG3o9N88NgFeQ6yCMvAwVz1aehCwF6mwsVybVXCjQiuYL3hzXoacorEbK99",
  "key20": "3t5VeuwGzs4ZK9g2qzhUCzX9k7Ucnsm2R5UhipUejV4czyCN9sz6WSPrF9FKP3LiLGRxwFVm8rZTCF5QoqjdgKtj",
  "key21": "Qmmft1wCm7ftCeeZc7Rq2n3Yu9srYZX3k249gs8Wwd12bVtZfk7ZTwLt44JF87g2r1AqZ2hzYAZYtmzXMVEkDX4",
  "key22": "3baXduiUDu2ZgXUBeVTFs1BBbxY6WKuzM23PqhKttRhH4RRMRUwRyHb6XusAmyoVaJJ3ooxm7QWCrJm5ErFqJmhd",
  "key23": "3YSfzr8yB7LTsg9yrU6DDCPMUaha6RPZV2T52aA1ECgCHUaBqExaAyBeBwzz7NcupwFQxdpwZz5VjzUoDgXwZ9Z7",
  "key24": "528gqSV1srkdnEzrqrZuivxFjYNhekQYV9WYJriT3ADA4wWiE54YxKp7YaNzmsGcjzpTAE55TiZQ3Q5fLHaCa7J6",
  "key25": "rQ1v9iZUJ4b1ZX7Sh7mrojKQJbPNXVfb12TfBbpSvLN4nhm99iFbfUQBVjJZLLKYnvLfFHHRGBkgCZ8AmyfRyvR",
  "key26": "4AneQx8EhGyGnjgzwUg75pWKCnXfBx2KbpqLhmtsDftWi1TQoXvuGwb4ZkbVuSKM7Uha2UwQhtJLzNVVTnRM7rFD"
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
