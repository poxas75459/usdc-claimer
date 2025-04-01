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
    "qZpHSetCUrwnfZfEcHwns4DU7nvXkQAuzSUmnonRN8oFQj7NY36UszAp8xwqT1yttWLXAjNLWD1dbAnDDZCdoMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bB98EvJAmuJgq7rYDe18ssGuAuHoxz7RvP1AtxxDsnp5sY5g5w8U8MAQJHtUBP9qFykcFYow7GU35cWL6VJZBiA",
  "key1": "4mAWpRcUKvXfveNyg1GaSyPhVgasY8Gcf2fRBKWdVh56Sju1UhgPC2fPxGMC4N4sfyFZVWEJnpyfEW12e7mQnGBR",
  "key2": "585Z55EumcFRreUmeZ6wuonTxH8ywYyaRW2RVsQJ5wfVzAfRknsZ6mPY8FUpkETMWERZoVDAAiJEXxeuiUVkAQki",
  "key3": "bMyYrMAH9YP64n3nbmWW2ApZuKLPvS7B3vu59Zb4GNGyt44TDLczGyz46weR2bqHgZ93JiiXRoXTGPBX7DZ7rDm",
  "key4": "2ZZtFC44MsAP5m6WFZuGA4FyExAzkgLdCcx9Gxfz8FSSS8oHJ4VaQy1VtDg57nqMzRXpmuu2nk4vsUm2hc83EVR5",
  "key5": "45UpKXNuAVid7Utsn5aPRUPX6JYmNxbai25veM4Y11RVj8swGikGUvFHFYhNWKYRL7TnU31QNopGMMvsyPP7WR93",
  "key6": "1fqkpGagxs6Ce62S3TZcC3HvcFGoEsMr5SnJifVD7LYC5N58YHEcUT6qDFHgXMcm9Zgigw6gtgFcP9FYYxV6xYN",
  "key7": "bSsM4ydPv42PDQcDyQsv2617ezvfbHhRjeCMPqN8qTDb6uj2HrwSsE3kucY3EBGwEPGiEb47QMUcWUhwveekfPb",
  "key8": "252v7yuyA9CPZK4TAzNPA9aqRqvB2st4v8bhBjGNoK6t3T6c14gwEVxthrKBQv2i5k7Njqa2SqkRh32e7Wmi928e",
  "key9": "2TxhFD7MLndp6zoXK6S6jPvLDggoQS4SYhT4AevMf9Z58K12EHxgXWL6eSqb6de1sByA2XPWb7cgkPXeWLQ9dbVK",
  "key10": "34dGyisqVdgszmjisdoxL3ePdAKGvKh6hJXHuGieLSd8xtkk9QzthxUpeYpnMP5ama6TwgzdtkwyM3xMwHhtzrTb",
  "key11": "2LKjyAWeD12hhy38QqvN4XbtKkJY3VviVwQF7MBKrpLqtvHU9Mprd3kzsjCGKB1SQh2w3EcBUAFTQp6uKjxUPZzV",
  "key12": "4MZjdbKyA7oo6YDdyqn3Bkfx9oZNLfMeX8AMeNcf7DeMJ4JAiJRtZzDZPN4WYy9TmBeoPezFeAC3svA33TNdyF1L",
  "key13": "5NQuUTqAU3YL5KgjGRTiHUWd4KYxS1Lcw4EhFTs7p55AWPwPwCEkqrzLKVx7R59yTPf5MiJ9u3Z7XpqeD61Q7hQx",
  "key14": "514eH1v3vZZjRyxKE1dHhjYU9JAuKJ1ZavJUW5PWSekRSZUWstie99cciPTvUhoVx55XbADcB7SmEG4is547oH7F",
  "key15": "LL8CdQxDc7HZpxQwvVgYEK9akF72JvAbhv64ppzaeXC6kLABLcUZZ9rCjRof4cSKc1dY5hG6fe1wHdgAYTS7sJA",
  "key16": "2p8VsC7fi8ZZQw7ZFcypVKUhwRwLfg7LcBDfk4hohxdWzLcoTwP6z5vY8uy7H9BbSG7KNutLki1SoZuocUyEsuS7",
  "key17": "26ppNtp1LinPPtKBfECDLbDKkyXYixg8qbibciYGcecJWWR2pU1LBjag74hRan2hxm5crrjL9Tst5szM2kDFRCeG",
  "key18": "3q7kHDQ9mBhRRihSGJgkkWxEEcFPUz8MkaVQKhPzv1kcqMEXjBi792YXzASZtEVZdrhRguBu7isWAZX1aCJTCH79",
  "key19": "3qrAKhaRpxyn1p4hKj26Sr83FBeNQndiMXGWBAZFwBvfBtuiarHWnArx7wNv8PgNxEbE7VguCqiMnwfdjhmqhzig",
  "key20": "5UrhdZpFXCKgTqHGp8YwBiNGGR4ZXUC7hGUmdGocrtMzJ7tUMTTVDsY9ou3AH7MFcmwc5GrfUkG5yFffP1dDbZwN",
  "key21": "5PnfJbTfTrhWFXmnoXYJ8mnCC9988AtKu9PsuEmHWTezD8G3RGgP1LULRH6yRC3bdwKdPp9W4QKKPqQKLTf31Eo6",
  "key22": "JCuFbVJ2AaMv7Gi2t1DntKFzMBHoHrd62ewVS7RBee8Za8TGXuowKgkz8cbsuu8yYfBa68F3uujhUeKsrMNZeXX",
  "key23": "4D3rZYfP3bVGZXAwdLBYh7npX8ENdc2rNvcmH7c5zQGGzSNyxor9LjUmxrDYMaQhTmWEJYcjqi4JerN9igEU8wTB",
  "key24": "3v8a8gpmQobgh3veR9hyBtRnhPT8QgCskQjcpSCBhZrZ9isjPS8yxpwpLC2VczaEqfXVpT8mJC2isYKE7NSGD1rJ",
  "key25": "3v6sw9GMQ1epMZDnATBuigsD86g4G9fih9UNrbj6jTirQ5MGZtL1zDWmnbuXy8D2LPCU6CnvPX83Ma3mmNii6VUZ",
  "key26": "3eprGQwmdgUXzpoSbe1DE15zGyxfEcXvkRttxTStNWFUo1AhgpdoyoVqx2i441X3TcQ3nGHEiWtidERND72i1AuA",
  "key27": "5HgYdMAAgjxoZQDXtdKqx24pDgu3mLS7SBm8QQ8mReqdGX14EYeogjgSRSNk154ruG9LE7vajvj3Fiwz21rNqCQD",
  "key28": "5Dfzkg2T8x7U6SY1oH2JJRb96iwFGNoVLwyie1Mz9DUsBRjTYVqheYRSc3nwQ33CTRXGGLvSUS9cT4YbJCafq4uB",
  "key29": "MWjAS9hrwVFPPYDEXWNWV5xuT1pDKoL3xuDTxFSQXTFzDfe8ddLLGRHqgrNZe6UxTNf3TTUkRujr1MPjXz588WF",
  "key30": "yQjSNZMZ82NE9Ff2d79XRRsyUG26EuCALZ3FYbgiDXpimg9wTk98xiWgTR2Toc2yvu6N7Fgpqdu7nhaxTVZrMjZ",
  "key31": "2oDpCUzyULczowXZPqsxzxvq9HwDBsw19uCKy5ZndBE4ePvbqWRpUwCeETdF1snLwefY1zYZyAiKKMQRxMxvhexA",
  "key32": "Cis9yipGANMP2NhP2Mbjgnzae6hkTqthetA6e4oMD8MtFEnQ5ypQCLLzyT2yxC17VHdYmRrjhWWWKFmwoC5E4Mk",
  "key33": "tsYbhuJ6euHCSzQetFSPNM59o5rB9T6EhrrktVP4UkJY8VUsKPVuUXgvUhBQiABjtdAwnqwtXbm2dfgFbCW5AiU",
  "key34": "3YGoBD73jCD4uRA8XtKuSHPMs31qrNBEidokjBjBSmq4ZuauN26cQ4GuPKq92ieTi4azXGLtVrg96YEVEiPJyozi",
  "key35": "67UJtBMgXaYGcJp2SGsSnwQWpiS4VLenvPNp6SwwCzdtfiBbFgwzmxmydznYkhHkEFJP21yPy34iGDSnPWrWWn41",
  "key36": "5N9LqSZDCLQfhxG8qyGRsUDAFhpuic3MrLiz4kxZ5G171nHJGZhSvZre4GCJMoPE4ZPf8mc7gGsLHdYQksGoMe7w",
  "key37": "jzpbAeAE9ATzd1UrMUnNVckqzKceK2hBk2ZY9D7jAc5DjMr7bBGMQHRbHTimH2s1XDNxizDDQYCpsxtx9vc73ro",
  "key38": "2PCKR7hKQJ9GHSuXdUygCCbNcUSPw8gGxMttR2jVqVEHePNSewPyHN1Yq9gyG98k7xxK8rnKRwrEpKuVBeYq6oWy",
  "key39": "QtANFhYaGzKhL615Ua7Uq8rbTXL1MbWxi7iT2eNKQP29EeYDjqagHyESVELPYMAJ9i7GRnsG5vRTNwH7cFw9gvv",
  "key40": "4q9pHwHRYjTtNDC3xXYqkvPTmFfcc6ffsURvtwxeGfmHsnCw5JVeXSTa5VqT8KKcxQhe6cZvcmaEQk7tsEF4smDX",
  "key41": "5cbAK8GP4cvUc54VuERwFHk22sCqFsK434uzP9ZYEmzbDXbAiLEa8zC8SsEV3kyTwgEduan9nuiRX3QmtgsqTDke",
  "key42": "2aPX7m6Ze4q4zbwZRMyXL8N8acSFFCAGWMp5TTNDqY7wZjy1STpfzcAH8GfUt38jS4twypuqZczcBabLdhJjgtqr",
  "key43": "5rCkJC18H6KFU9kkrGo8GM6kJz7cTFypNqxzAfDvzSUAQSqGBpyun7B1YoLQdwEFLk9YR7j1KHEC6dHmXavnAynS"
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
