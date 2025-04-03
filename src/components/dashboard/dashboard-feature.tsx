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
    "8wrQu5UdZpRPrzmXkZNJft2iHAiNryeN3JaRWbdzJpppSVU93fgdfhYYvqdUhFDvMzR3ru5iPqoTKC2SjQ7sdwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVUPdjwFNNCrdVWp7V37FHBgD7hATJD13BKnaagKXTQQty6TAuifJQ4fKPx6NA7rUVvan85yqnnG7TTZLSj64ji",
  "key1": "ZBsWX4XJJZa8U6y8nDWw4dH3ndzLfPr1RjXD4tdDNeGSj7ZABL9MQvdPxmZK5sMQSbqmJUdZ2Zpcj8gY8VRRL6g",
  "key2": "2jxZRCMSwWjQU2vdf6zb5456PHHuQP571Akb9SXSP7oMP5495ZXSSDjMJTDWUJnerLaP5EtAha4k76cMh3szvjY3",
  "key3": "3KL5RtkFG1yvV9bHxuFs6SnHX3d6xCHMqBLmkYJqKaTN2mjzFdF5qdUVpcfr45kgv8PpeLmFXntxuVXVEDcqy6Cm",
  "key4": "3LpAehvBYywBnx1nVNDuyQPCAVj9fcjWhMRVe8Fw74unuty7kwaKKMofpdTPM7D4CjLUJNF5sM6pYv2HjAVcrbE2",
  "key5": "c3rthn5y8zyVwngFat3VV3N5Esa1BWVmFSTTkyqwHvFQsPPmFB4pkwRN6RsqpHi7QtTT2Vk4fHpBmhmovcfsi1y",
  "key6": "5pkMGECUuemp4Rmefyr8XXknAmmihCyB33DMiBYq3rNXiGRFW1xhPVmpNc2zaM9bRKvxSJ9NmNuj3ZRnFPWknb1w",
  "key7": "52JTprSmhiVZihGfjjkbiUQhFaZFXXYHenB5KczYLsKNSEsL2n3xKoanppZaWgCSbrLDDrpjx8pwe6jFKBnKsbNK",
  "key8": "4JfSQVM1v5cWeauY15sFBtR2n5Bq1vzYUDMUiPQcgdAzuyyGcUoCSo2gtMREuSpn75a5twsKGjrBweyJvpKotATV",
  "key9": "2F3KFjPBcFTYmFLfKoXdzGvqpCBQqbbQSf8U79kJcREELtkhpyZkFCAmPAJ2h8NWbyBPEeLDsFqUJqVro8WNb27T",
  "key10": "y3e8aBnGCvbADEccVhTv2ZRGwvAbDYEFEd8dALyeQ2JrAFdodWSouhTis7wvw1mnNgbu6rLAwTALqqAjn8p9oQo",
  "key11": "5FeNjkrfpMgh9kWiibfdx4s3dBqwh7Bairg13VFXzZj9tHvAKR31vmH9ue5y76hfkfhweJz7RikEk1XRbJHLQ8cD",
  "key12": "3e5i8Fr65i2XX4yT7D9DH2caAXKmAkKdYHon5KsRCTLU9PAxdUwQNDZw28GQd4pURY38z1jermdj8ZQuWHJvS7DC",
  "key13": "4eRpqpTEqu6iXH32pmpvbrDniozThZzYcMUcxScmsomT86KuYcERGEMRhQah9bsNBwfWhaWqKCgQXU7zN2SVK5oG",
  "key14": "gPWzM7GSrwjfjMZjPuyWywoxo8LgkJZJLZHhjugn3viBAJ6EehpKPEZp2u5mX9iHg9wG5AFbBfmYvxkawgDSB6r",
  "key15": "3ehvM8UBimpYEwWZWB9rcWc9A4GGic2c4Nie9iM8mMmUKorty2ZSKzo7mHZ65XAQsod8c1ePGEsraCJzViRPgC8U",
  "key16": "4gqptbjdpWR3SaoFWaXBxfxtR2AMcxC3VD17AnFLHV67n8WGEZG8awuQj5cPZ7mQNzV67vcSXQmQecF6ud6F3fU7",
  "key17": "2EdhZ52c43CMeQqxFm27C8Kik5oMqvmzwejJ2xYjcv6GYQtoKUBUFyfsvauf4d3j95yegQGabhSPBx9wz4Pn1J8B",
  "key18": "24FWwcT89Wg8jQRaa6BprtQ7s7bFxwLBzgspGQ8gjcQynG2F9XVm4kPaQ3Nm95cYSAWhvjEWDe65sx47SkgSgKvc",
  "key19": "5jMJaehTc5unYPEX6PfpRnFAJyxrcv71tKPTvYijrfMZX6YNCWUh7MjMUGDAvPfFXYeGLsEc3Zh4d4NPUUZuYMk5",
  "key20": "CHce8fcFUkgHRo5qgQhC7dLpvBtw7cPKFMTQRfBwYyEhCWCHzKKHEx7qyKYp1Efuqz9ihM46nztANqNGmwPboCY",
  "key21": "38i2KAaDZxXSx38Qe8GymmFvdAa5W3FraSv7aZpJr6VXeLaw4uVrCB2uKvFdzN2hpW98dXHmDMd1Am7jqzLG5bkV",
  "key22": "4QERiPRED5FPnF7KmzCBNcwFgjrUPqV8tbBCfxFiA8iL59NxSmYzgY2QWSCQf5KbsaJk2DedgxFK8mH3zDQSJ8GQ",
  "key23": "2JTGq5kXBbxqKwtFBvVHBX4ppYmuV2kuKCVT4F5xp3SkFBvmFcynKxJcbfpMzFPBYovj6njtdXsX3NNCi39oZHTH",
  "key24": "4Z8vr9DS19iEoDWHj6io4EnQhM25rTUz6gd1az147zT4eYiT852cXUPX65reFEfU5RRdBp3cLhcVzq4c5vpTKyfH",
  "key25": "4cY6x8BrrkbUgukAtm2Mo33MaB2QeY9ngJUMhvAW8m4dD6x4MLJcrkFYLape63Ff1Eccvj2cZN1Yo8knaLxWwuhZ",
  "key26": "5ykqCCCEBMnMUnzsRMa8Sx3HnQphFzqU3E41hRhTBoS3E6BHHj57U6a8wjQjcj2jXR4ESUFz2dGVVo7mieSrRUgZ",
  "key27": "5NtQFpuopG3ZCLgnVqnYKGPserM8MNMcz89oJoGPqPWYT3RX9npeGKvx7dBZjKrexN8JcM1cPQs3iebUQzKxf6jS",
  "key28": "4fMGLuveJxUDkkzsc4csv84xLHSfEcoXKbLxbzZoCapS23d12PusgjMnrGazKZfZNqGYZCuf1HeUyaxuc7XcCJCT",
  "key29": "5fdPSn937XAHBiQDptJYQ9fP1e4jDt83atbe7J9KRaprALkqyVpf3yEXT1Z6H3GGqWAQzPFHUyUKNzFiqYMMCCLJ",
  "key30": "3wShcARpUy3TRA26WQQd5pA31MnDQpDkFdwhdsnJpcV3esEG8wAg8pMVHJ7UVaYaurx6NZN1qhZ8B1giUkrNqTWK",
  "key31": "4VjhWebLeHsF2yUwdnS2d3kPNtcS29nTSebXoFpk8C8Em7guyvkz4huEptv3MsLssfHe1xCyHu92XycBdJ9sV8uR",
  "key32": "3Kv3AKtH9PfuwsDcBJbrsv7F25uysVmY19P9knxctxH2zMNPoiFXpUVi1u8GSFPVbidEgij9NQcsb7jbQzsepwRG",
  "key33": "2HZEiMY7SQ7Rywc6iwpGAZypDpkXXooQCFX3Vh7SQksbrKuV3K5SeFwRX5Ndw5uML69LRwHUvrHQXu7oCTJAnR5r"
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
