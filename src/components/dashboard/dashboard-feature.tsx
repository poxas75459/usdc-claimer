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
    "zL2YXAafgTWsthAAoX8BtFrCCRQtsaCd2VRE67BEuPAp1GUwtRKJqqK4qa7Nay5mRNfXaBEA35a9dwwbKbQ5tHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mu8QqH5kpGLybnxXJHKBBMFjLn5eexr5ttKa6sFxLnyYCrF52JcQDXDd6g5ZhQYsK2VLzXtsec2vWPw6edCoz3v",
  "key1": "4vmUCCbXEFidVTFDpWLTNnsbhwJkLN73D79jkmAqHoboVykJQRTbGyzPFQFxUcxuoE9cgANhox5og5fJt4mgDmEc",
  "key2": "3XbmosJET18Anni68mXFv8fLM2TC9bZkpnBTQQVoAwFhXtgWmAAQ7ymEiTPgMN1EU82hT4AR7GYjmeuPLr8QRLb1",
  "key3": "45f78MDVcX6hftEPBhFZE7PyiSBqrvS2QpyunyXVe7oaV618TczWN5PegLu7FKz6eUY9kxM5QaNDSXWErbM2iKQk",
  "key4": "ZEjqE8zuVZ18jirSEKyienFs6Ri2hVABm9sTP83GY3DawD2CQomucDgzLgpDc16DzRCQPZWJiEwXj87SyGoBVvv",
  "key5": "4DJjRWkK2FP12YGJF6Xmza7Kn2zenziXkvA4YvtnhnKMirbJMj7n1b9wLxe4AmWkfeGsuVGncE1g5PYW5xk1uLJ1",
  "key6": "39wM1mA2faZLWANhNMv2v4aUunoH4A9B7KFS6hfSXk85Psqg7UuSbkgGWg6sKpYbrZZVL7jGx1Q8GAMr8L4RmV3W",
  "key7": "4KDVNRSmv9k7Xj231Dj9gQVQvRy1LEoVo8d9Y31GG97s6J2yJf8fNyS59oTQzBY6qAJjgjYhzgBMS4S6ygfiKjsA",
  "key8": "2voQDx8oFzb6FwVaxSYH1HdZCY8UrdQmtKm5Wyr2kLy3tZpCtBXS8hcAJs6bLqVCGRa3b8ajkZpstT8jBeKSxDqi",
  "key9": "PDoWnNtFinYTHRX2Vu8NVEwYgYbJupB7kRtgPDKs4up2w5inmw2KsnCZbMTRXuBmoJVY2GQKoNsmVQqQS8EWPrk",
  "key10": "2Q2KxLWAtyHAa5cX1VWkYJHYz9sZD3Mcr8ZGPy9GXqbq9kY1thEMpuGsVrL2TvMF9JWeW5iURQxMnmKvH4QhpjUY",
  "key11": "51nS13CpsviiK9MhNhpheKUKhwp5yTm9u5zruTWYxDTTedRAxnCAnioFvYghZoMq4CHsDWcjUamWm6ZwXaGBzwZV",
  "key12": "3eaD2SsBhY52GvLYu7Bbys8FbVMhzRuGuW2pzZGcNproSzkKDjfEg6WjU9GeSdBu24EPyfbMq1TNM5fNZQntr2Lg",
  "key13": "22gxaCtHwCtTFwSqj1azri2CWzjmPYz2tNPKugtKwrdb8QD9gx8eeBtj5v3XhEn5TPEvtgwsABnZmLf4j1SZUkJ2",
  "key14": "3e4Nk5ZV3YjzZE1frN4fUrksSYXAyRnjUCD8uGZVYvVMEnBSQugRzuhNWrHQHdvtHX4egQGgnVFLmRZWV6mSMXbr",
  "key15": "3sfJepZCuQdMkDJwSe6hyzYtzXsBhvS3SBdkPiEJtfsKhxvnY89ACkcZBnDMP3YYAffnoqDweQACJbdJkhr3eVhX",
  "key16": "4EoCPWj2PpSoXoYAf8wMsGRxBMYRPm4xPLCKjtgxFxtyBguHuiagr9GmAtc2pkfuCJWGsAHEEU3jXA1JEWVF98C9",
  "key17": "2RukkB73e3g2tNZGRuHnL6u6D3GfLYQsUxB3Pe1wKj7KtUGjyjpymjfc4VLrnwsboMcyfFE945y7iRT4EWWukYN6",
  "key18": "x4oZrVcHD1eaCFEEvsVcZy2pjKvhyhBVBpDhH4k9nw7jHF6bJeZQS8nUtP76fwuz2Xzz7H6pfjyafhwf1P8EMLT",
  "key19": "4WA6QCJjR9XwnEYKs33cf3GfXYfBLqWfAJv1qiHPGfDqn1Z1ZsNJB8Ap8k3E7XXTRMHSavjsZRDUe2fwUZwFvRt9",
  "key20": "2bd7Ps87VGnqHe69VmmNQPDhavCkxMZ4Qw19JqEAzSrAnEntDqT8Hz9qYGXt12kS1XohPefaDkS91TNDhr9UahUZ",
  "key21": "Q9zaDYeamu3ZjWECq5C6Rsa5QxnKKLwgmDidPg16N7Ey5oZTaAiF6QJboMjHRKQx1eyYL7asopvSyADjWwD8GZW",
  "key22": "5XciohgDLNNbd2xhtUThEgxZDpgVahYuVFi9wfnDek9sqRXWcZjVAqyb3KShbqDECnqQ9qQQ4Y9zj5difdgG7KRe",
  "key23": "gvJYEwTMxD3yzNVLp2KWromgMb3fu4QpSwnUYXwQdy6rhXJDCrqL6Gc2LpvM1hTbjMN6kTPzbgJSqxeDAA4C7re",
  "key24": "KhFg8estLS1EGf63h4FZW55ntpiyfXqAzcHsiPAHitxxuAtD3SrkUEsSYggu9HTfQawaZ4ZLXMHAyG6FJkqVotv",
  "key25": "3GMdzmBiuoWHGtUkhH9SxHcQAPoukAGMaAxFLLx9uVaqW3HD4c2qj6wgVgpKkrhqQevv6NAfvuQqsVp2grst5yy",
  "key26": "46ufaY3hjEY3sEnsSMeAVNKccuf5iojVTpLSKvoBQhHsHstqKx9i27hRPa7e33pAzNVZKDxYarDVnCNmaaatGWes",
  "key27": "V4brGQnafBsTnozXqCuw9wRAcKeZNaewyxJXwzDAUvKTaDTg9aupJdffZp7D6E9XfWkpcDp4dr11uVwDb5q6Ppj",
  "key28": "2GgVx7v2dawtrWJpsWLSwzkoAmotF36YR3rdje2fs1Am33jFyQyBf9h2wi5k9mtvyxH8CqH7Uwi7ZZu2ceZWYqf2",
  "key29": "5k8euEJa9sQwhEyhcJbrcjfmN1HgJxGc8YXPPebcXkktv92gXTSp9zhF7DGiDVsSzabodjno6SX7Zf8N9D6HjUbc",
  "key30": "46Mvsg1CjuAyfwTxdzjbKypH2je2psT3xpV8YxDk6miU2VJgCEJsgESKnj24GrL6h8cBMtsAKqsg8hLNjtpZKzix",
  "key31": "3VRyFrkJdNPRzFZnZkXMViemVuM8qyLasWo1CUcUya8h1AkY3Q8533sLdXcbdgXV973iTbzdozgQpxGPwCkv8tpA",
  "key32": "2VZRSoUxtgNyzCzpmFHAWGEJLN1VXL4UECdYAAhFZEYTohwam4FdZtf9TeR5v7a8McLtiCzJjtwkoiH3P7kHY6wk"
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
