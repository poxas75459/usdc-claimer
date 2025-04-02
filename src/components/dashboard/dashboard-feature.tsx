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
    "5aMY4xVpX1HvE7c9oApisoKKe9UQQESRE52wqcbEmGJrLRfPMaUmKb9zitkWegEZrCA1Q4XjRc2U9MewjkU3gCaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ynWMTnFS2Xaprj94Ns67tLRiDn2PpkBbcfEQkxcHXGgWf1n6vDmSSUDR45gas9wzg1WgRRUm1AARfBgAe4fRTzL",
  "key1": "3n1VeLhDrYJQhP3J1qvH1t8q57dfHeqqSiLfQDYHKt5gvgqcbPFU9oqEBtUrjDjTJfdz8b8Dyyobu8kyZWXduNHx",
  "key2": "4q6gyzUEHuCxe6WaK71gua6sTWoAsM5a7EcjjvQiRAkyp9sw1U66eJcbDWHQS3CYPjNmKdfY1ANDCVQDQ49reWsw",
  "key3": "4j9u2xcWSGFgFbEGdnxLuormNe2YcRRDM9x49Ui1qAVKh6b63dz6VoNgjo2npexBYSzKDKXUyWBgxBYm7aDycqpp",
  "key4": "3RdDS7WSpdjpTCF4zqWy9E2vuHCVoCazXnxjqYwuLT5zjv9dxGzcijLoDJAzDMWUs7TgQQfDzddvjoNKjFPERZYG",
  "key5": "3GAZwtmL5FA23q64ryGbVrD396VgvTpD83p12hWDKsLKj3cRXbXQf3L6oDrRWyQnR8qTg9nKSKfbyPB5tjVEb3BN",
  "key6": "2nER6UYjdWVSHHpoywNEzLXt3H1JdPNKpXggteQrThLtRaqiMxFn2Ed5pdddtQezTuXpM57v9JibBPe5KrX1HpKe",
  "key7": "5CkN4UWFvobmMKyCG5YR6gbjFmuPjv9ndehaykJuab9KZYb16jydZRwGSutoenWnonh4FB8ebkxjPdcL4L2MXvNJ",
  "key8": "2huQVxfnUnNbSb1KtcBBPDAszniebTjznKSQZ3fyH6pymsSBzjYMBmtJuSWbidCxtGfVsp2H22a3DfaLNJ759bU4",
  "key9": "3u7tuMMS197s1q73FjkeGfcGBaxmmqW3FqXhXUBFVNnaZSeSkwP8zwEYEaW2Wecs6YUSNstxLKFJHbGVe6ofpDTx",
  "key10": "NsRJ2fPzsbhPzXqH2gVtXFsJp4NzvEqKCs1L4rEWvQLxznrWTCk1gQCmrT9ravmTKsve1dfLCwdqoxSCe3FnqDj",
  "key11": "2kaWmNiizERW41Tkj126kn5dqGE6aFKREu2EQJnbafgip1cxMEw1527EA29MJ2pqTeEsTTNyAANkWepzwqWiBymg",
  "key12": "122qoYJ3C14Fbd9rz9MYRducfncFjyGHqwY55gvVADxoe8ZQNkrKW4G896s7wbBdqwW6PdxAwqM2w4SfCuww3FFd",
  "key13": "5yywRKLUmgBpvL1ooSijJLKW8FuuKphPXJH3c7DpJ4k8Xq9TPgwwunP3eVUWPBziRYGBTzLAve2G7zUFkeCbgRVx",
  "key14": "5JueZBZ9fWYJbDTs7GvyALntNsDGJkZ6mR6wo8E3z6h5Kk6MQBriXg5SPaNDoV4N3sZ9uFqzq4WU68baNMDfMLoN",
  "key15": "3AZnrAutzyTr8Y4d9JrggC49jjFP77TtjZ3F3RoCmEAa5XfdWoTHb45hVfiT7MR1YA9tgnpkLWXauv1fDseJwV2v",
  "key16": "2hcH87MFmiPHGM7tJkVnygmrsV2HMd9RhSz7AV9sV4ZjJfyLRrXrZVX12Hi6m2H1zvxqejviQpW55uGBphUQqoVN",
  "key17": "56iyUPnNFQgb6nRQdjtn1dXpR8FJnt6c4hEDZTC664rzKWBkSguCWThdXccZgUmWaemVcGhbLjuMrhFSYJcjdPi",
  "key18": "4zgDKBPf8vCy675ab48NBYvNdn5eQJxeS8G4Q7zQA6MVZx4QTCshv38UNC5tZkNT2GsmY6gU2WBjkXrDLhdgsVpf",
  "key19": "2fgV1iLjADs9i5wSvVhyYgQSja5PjF9PaabL9TGgkec42rCHefThxtyjbwDnCvUBT8MTxKhzu5S35mah8iwBvgAG",
  "key20": "2GbkKZ3bS351aPRtrBi8x1M6sRniZs44Zf98MaZvKcZDcupgauh2HfmBvRdWJzanvD1TNqWiYviiJ4Mu69zawNxV",
  "key21": "5nTdvnnnPsgUZn65e53ZUozdmeE33exGzMiLWtuo2EB3EQm8SuxcUrQQZT65mWSjtBRTevpDypu58Y9JhnFBB3C9",
  "key22": "Lyr4Hcwkbburw1dQuDtT3ZBZL1Y5PYv3GwpzHuPLRv4fk8EGqrinuRCavGTeMMY2T3WXSYXcKNd5vypBLs2BWeo",
  "key23": "3MK85KjVwMCZw4LpKuTxbcw2a8NTto7QnqKNtpWcSLWZZmFu555RdSwFSYoy1s25LBwV2jw7DJ14W33taVJccMn3",
  "key24": "EiCaQLQ8RobhnSDLW7mi4tvPG8pX8bMuNVcQZwZ4hgMR7zL8fvfzGtLzTE22tXiwjyVzjy4ZPzes5bmn78EwL8E",
  "key25": "2fSDx1gjzjkEadypryckg8BH1JU7MTC2dFcQtkXutu2JKKbKoBPrzdXSfCS23t7FU35y61TLRgU9xszYBKRCKAt",
  "key26": "3NzQTe3TTrCnAiS6FgKCdkW96fhfzrHXfAhV7tEJDE3i1oB1GP62tmJj4beq12LLMqVEAUAiMdXZkNLXxFaDmuG8",
  "key27": "3QR4dGY86FUu1iyDyPk399qFgqtPmgxAs5UWE7nXU99n6xDrLHDobLeDS4Vqxj3aLz2ajFjTHEnSa8U7emU3svwu",
  "key28": "3eF5ewFpZncAn3cieUGL51zKjYcxxjA2xvBsrisFdebHdZPgmU25E6sDzCn3TLcBXmLtvMLzYC85HwFPxARrgtzQ",
  "key29": "5FZ4g4kAjV5WBEA9tjgboT3ZsyLxKHrDZLMyNvTDPxLut1b7tWvjbeXhBdugWkQwUPJXPqJwz4PnCVBPrsqZgr7C",
  "key30": "5Yv3ZxYBAe9o8d6tSgH59TJo4F9C1dNNEJJxZzZvX3D6xXRL12me1oDzneLdQrZA4tQYt4weVtZToiMbRsXwL9sN",
  "key31": "4dVEiZYbdX3eLKkT3tjLdgxUkqmUzqohrFxja2asW9auSpQjXsog8azS9WXmqYbBKA8XPnSUWW4YDYpiWu7j8GfW",
  "key32": "4rc7g4MyZty5vBU7qGAW9GShdDV7a6b3XHLNmn2LRijTND9dj3prbE3WSEtxWhoaQYeHzPYphbXNq84TqGQGkg5T",
  "key33": "5oqTaycHmy5qsJzVWJc6t8ACwre9YZ33u3bmU7UDXzmio1adjpQMghkTQ7jCWsJbTpQdDXPt4EsgJKE4kC8mSHZ6",
  "key34": "5ijBVr18bBZDem8W2CqhpAqJJHZWyf73ivqKroAB1R43nJtEZZhk12YaE6zH6GgJeipXf7btqeXUuG3iBR31YubT",
  "key35": "54r9W2VvRKzjn9N2NYX8N3kg6dB8frcMk54ouvADThsZy3yYFH3Y9JduCkf9SsuerPz5KSPByovW7HEKCrkAh14x",
  "key36": "4ExHbpqLLkBUbLHSpq95MkqMrHk7fYqmUJzecBD37XN6babTZUKC57EywbkAXxpWq7EjUxf6sHJDXCPfhKaG6sd2"
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
