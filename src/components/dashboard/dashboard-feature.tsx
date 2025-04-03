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
    "3LVPEEnv5vX8fijEDmpj5kLBWfcPLU65rKNZ7UhvriBtZymoaJWGEtWgfTQ8cx35UDMJWNo971ozeqyjBufBHMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fo2GeT7Es4VPfpmZbGexQ1utzvpc9GgcLQNxudnbGKb5VXgPz9F6DS2i5KU249Xwb82EDJnfDQ8FXy29fkD1MSm",
  "key1": "41u7TXLewtnLa2gsU9itFJpSYCCKeQKq2JCrZmuUMbCbhv3Qr1HgZ4ci1avuiqyWUth32Rbea5jv78Z54dmBz4cg",
  "key2": "4YoSv9KsYBGV1Dixnj3QZZyHxHdAi5KfxCU1G6y7MgqwsPUu5RK3SGCWwdQoXvqACL78ABZVmbMv98Bj75t4oqZC",
  "key3": "5ffK7JKKbsdTS2si8Cgzp6iCPtTWwmdaBQ1ERmgZu9UYnEKjBS2yd1jzGqzJVeZzMXmA5LcCM2pmaDRHgTT1W5AD",
  "key4": "3EdYzJ7ZHDX3KtBYg6KZPS8oaXerRXKZA3ZMuxBL3muQSQyBcqdY7fzFUkLq8kuM5HPGKta5VCuKBabcUC1wSp4v",
  "key5": "5JSUqdCqanFKJ2Xji7WkrdFs7avBt42N2n6cjzmT51BdtXATP36NCm43pqEzkUT5in4n2AoJyGxfB1nC7La3NwCR",
  "key6": "5AEtDoqVBAYMQz3nURmWLFGHJKgMbvw3iZpAPtkKY8ffTdFKufaWxJ4SFQmyM945LhrQhMjCGrPQNv6Vh8RF6gsy",
  "key7": "f7NtnxzHEQ7eXsmHnE44hcEe4HMxySYmaja3TaBzaPasbQea4JatCYTRXanyYBKnSgbP7Zzh3RqJcvwWfmvnmh8",
  "key8": "aa5zTeLEuUYiomQdFSfL8RveEjxiWMqtsBvRiMPqbguP94Y7Z3n3ug8GbCaa9inbBcKsPbFPk9tZoLNPUC5P7TC",
  "key9": "5EPwWa8Wbwp8YHJxGmDwXEkGoRAF1DMMcP7tQ3sdDQKefuVsGLNyiz9F6qtnqcjpPtqXWf3vaGx6wxUEvQKwdZCj",
  "key10": "4Z27uhANfjwxUdDWYqEfMDNWks6Fwd7LaQnkkAxZbGk4q1fqZ3Ytgccpx8vLiBSowy3aVGD6A9NKUsPJwbE36e3U",
  "key11": "3a6uya86oYTn5TN94ngkirZwGC9AB5b9qRPeC7ceAcTw7KJ52Y7y2j7m8ZMgzTqmJYE7pUBzcZDHCgTpidVLbJJ4",
  "key12": "4S5wLLxqRJYvmG2iqZsJucg5yHKuGo8LsQaAQ9dpNGEDpMf3vd8fdn3iDg4uEp6gNFTLJp8q9EQb6v4u8fA6EAct",
  "key13": "46CArNyK59zWPg1czxams7kC736FWLCJxzsu8UyWdc6edqn1CoYxPbu8pzRivbfrSoR8jxzzgWsUCB73tbmQTRzs",
  "key14": "CjSBvQDRPQL5V9UYiJsEYq5EJfH562ADJtb3Ma4NJUDNNaKx7WZXVUsdQzfAu5u11erkDnheajA5s1RjpK3jABX",
  "key15": "5TEMDoyw38TWiK76dTVypqNZ44kj37gp2erfu91wBRCktQUV1qxXpAAtC7eYQqkHe4YJNG6GCj4ttDnipb3SBW1c",
  "key16": "3fURzGM2F6QAdckWeujFK6hCox8wxmN4ympKHqFGAk8igTzXRLYf9oSCMNR6x36A7SjsUpE9yRDCGxvW5bQCs64M",
  "key17": "5PZL8eMzXeGLASaMmyxAxcDPMxAPDHgbzxeMGEtJJpnkU2MG2x1jFN4VYrJER85ZLroUndWH62QEPJzvhZsqWrgX",
  "key18": "2RhwVhGaCQsXB31xKP2pbf4fFMEG9h1mFBe1ErnPKXtxexx3C4zgyyBEJjN1wsqB5cpHgP34ALxyhsBY9AFd2uud",
  "key19": "2rd7Jgc3aCLb3Fv6G23NBiZjz8Sxf3a6hyHDmNALafULemcGeGLeTQjkqhjQVY8wCr4RpFzAR3tQKNSdwfqnTptT",
  "key20": "5add6Wp3VJ97mMbUKWPqac4xXmYjDrvBixcVTwaNeeQhxFDNBk5tyWnsWnwjkxpnPx8evHh8PKQ7zijF6Si2fFCm",
  "key21": "4ZgX3oZPiJidkCWLd4h7UiPCTXnGpNtBwb3s3UCf6MD7PmjBgtWRGraC19Z2TpRSTwzwXCfpcYcGr4nntsuMK4eR",
  "key22": "3uRUkjaafkP8C6HohMAL7PaVpezzS7qEnqbzfNrHGKPCPkdqrDtFE9BiEA1SanGAKoxhJC2HjZELqvumnE2E6fyB",
  "key23": "2xLKc5w7vp276WDhFEQYn4KwYugsrV2vKhNoXxNYRduCqJ1LyYSBR9ypBzr4QTt5MZUW3U9tJtGHW8Z2T59meFSC",
  "key24": "3dKjfD2gofs6htqZWTucFmLZFqKCYawaVwUuDVb6hgT4BKG9cbL8pFa6GJv7JHtUSXYkYdhFgu72xEQVbKWHWMrS",
  "key25": "2a2GxcpneUxpv1iv864C2KbDTZQsJu79rbj6ngMHuRihSVbhBcgJttFTrT1MCeovj5hFNau35iw59QeTDsR4BNtP",
  "key26": "XdhjZZRFJ8M8wxcg2KytbaYXDFg91fRvsuLS54nucwqakJDUp7NFMzX5MPP91mo7waiXVJEhpziS28gcgTQutyA",
  "key27": "4ARe75rm2bgAypyKhkT4epTy2eVd6X6JysG5xqEqmmAReA8NkEKrL1nRYoeU6m72KKtBeXvVqS6UDCKcCmaSfR6b",
  "key28": "26GWWiNZwGtz8QEsZDePGkxKMRcDAfWi8MvNeasoaDAwfTgqsqEP3UntU7CBVXtikTKk6ynkGGNYKrSxo6go2YPv",
  "key29": "5eCCeEycKrPepJNcVxiPQYGWYbPSre5vfPnzZ4LJDiC89qQrde7jHmmXYNvd3ux3HMR8Zqt6UU6sUhWNTH3ND79z",
  "key30": "sazZAFUQDCe9SrJYnAz5iD3nZVhCqyqviioestgNyqTPSBFpzHCokCeHQvpLA9iUjefPoMSZHtZ5gBnpBg8pjkF",
  "key31": "5m9eAs8t2Tx4dRuJa7TRVXv2nEFoKcsh9Y2PLeEhKZDK7GcSFBSduA9RrWT5oEHVKN4xUFN5HAFjyAAHfL4soXax"
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
