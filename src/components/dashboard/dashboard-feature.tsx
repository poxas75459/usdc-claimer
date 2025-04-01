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
    "49ivQK3eUknkGpfCTp8oaWMdA1ShM2KmuxvFPwNJaakHCztWaMTjZbwv4xj7R5PQ4k3qYt16aaVKTBh3Jzq68GMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62AQi14Cs9fr3Zco5CVGKKmowEjLTePZWgM8JhSHrLcMCrqNf4KHcrgZ34MwQmeKMuCwQB7VqNjvsMcWEyGAbGiQ",
  "key1": "5PjE99B9tpvjr1uSTcoVpphDDfqdeTix7HYUMSNBKMxRxUrLoMqLvn1Wr2HqWzSwWmxTfmeeQUJ98qJzyKwEPaLY",
  "key2": "4ejzpw7L3KssY6qqfkX9op1J82RovaqsEcEyvJYie1rPZ9fmRzipBk1wtmwFtMYGu51Q3v2m3XbpdnRew5vaEE4B",
  "key3": "5EsZnhvAd4muStaQG94tbEafsYuxgtha2CLMALi6C44egCBd1MbaVhfDHkHx4F1t4XgSMMZ33zrrZd1NoFWJi9yL",
  "key4": "61TnPLTNkvpWZZWLzV3VTJi5miYxgj2tKT1VxPHu3praXpbeqEGokBzNVa7DBsmNGrGCUcoLrGuKnRwKnT6xemQq",
  "key5": "2VcbnfjW9qB9bvwBV5kQdea44PNoCXQ7jMa2whq7B6ws2cU4DYVEWTWp5ZhhRy8EkScQwrSkoieWZPMBC8YEywHV",
  "key6": "cYL3MYh2JDDpjJSFewkf9Wwu6E2AuZW1gTnmYJYzdgsqHxX9c4ek39Gk5T258krmAz9g6X2mhrcLyPFjXFhgwiW",
  "key7": "3XkBkLBorPZH6NcFLPeoCc7HXvvyAn1JEeEQHxBJ1dMrEDbkk1QKYQSbGZ4VNXHvPNuMYq1BYKb61tDjAa6P1NUL",
  "key8": "3AVBwpeYV2E2xboa8GtgjYXayy1qaYwaGXPftx7BSoBBzWSj6zXQaqQ9qUcoo6zzPTmiBxagvqXC5nEm2vjoja1g",
  "key9": "4W5P5qSHmWvfNEcEByts3qQ2Gk95rN2rXZ8ci4Rus4YcPn9DnmXkLRKJja1J6eRMtBjL6hoiJBJTk7x8Dkw3AJ7b",
  "key10": "8qcQkYDToZi54rfgEiMS3URBJjsNLNgQJZC3joFBaxsZ9u2BMLBaU8WjhsJNFP2BczBBivqFMYPf1A4a659CqPc",
  "key11": "4ASWjz9uxhtEmfEw8vJGh36QdydMuMf29okVU2KBgUursCfJo1SJiqb3h4FWpEjXXh5rKuJKZSpr6X9LAJPQWXHk",
  "key12": "tNzsKvkg8RtwmKrJD9kZ9GaLGqsmK9Q4BxCduTbZ24y6nt8AWS2WfLcsAfv5aXGR5azdjU2Grdumewv7bEX9eF5",
  "key13": "4MRBM6H5dTewMsiatroYzSG8tBEKpK3gyvcu9zYwhk7RShQrWV96tHk8HTHzbFSoyNX4JsdkxB5CHMMg64oqr55K",
  "key14": "4PhbGPsMppyaBt8NLb34YaNVT1S7Mroo9yfXp9yoSfrAh8MpWaLtT9fQjM55Kay5D1TgF2ZjLMj1yjHfpsw6BcGU",
  "key15": "4u6t4iWXWc8bBAh83NtgquqBmQf57nUCZhgksq4KXDmQvz4BJXVS4eeEupgoQsJRPBTRG5Fyfyg6gKg4FGjwpZXz",
  "key16": "orE9Ln5vFu4SaJtfciUyTDtYm4ssNM5ifGcTnbyxL9FVWJ6qtFWd82MqJ31sV9jC1uMu6YxzSv246x7MPBNa6iH",
  "key17": "E8benWYDTgZtUdBehkqkmy9dN6t2Q47tX7wv3uBZpPxCnGA2AHe8F1bBzihQRCm57pAZxuJjZeB2nnBMF9muwBf",
  "key18": "4ZhdnHMkjfgBYviHYmMAG3Wd4CpBeZuhF98mba3yPVDGDd5Nek4j8qh6UiNa8xWaRaiKA7ouQoDZkxfny3W6CcAg",
  "key19": "EQERAdqzg7XSBpQet86atUXyspMpZHQ2oaBnKasaf2ZmTsuvBrjLWsRGAsGjtfVCeYtopfij8WAxEpxUmRXQKeE",
  "key20": "pcAD2zt5XpwDz6tmCjSFoHsmb6VDvMvXzr1SM8GEiMY89HhVzfavcXDU6YU9WwzNEuJzGEnRLSNk8D2S2r28fDQ",
  "key21": "4tyCWZaJjhR2EdJZ7Uv1MGbtkmCdxnLpWHD97M1FeYpB1PcqPkUzA91PUbm7rNUCkXaY3JBiLWyrt9JGkQJ1YeJs",
  "key22": "4JQCEWDNhumReWQnVwZbrSrwPsF29CXpGMdJrbMaJFpxnS4ytdq6v9tWNRLyS4b9yNyGhQjhzeVnBLrJjTrCF99U",
  "key23": "ZCw9pqKtXoK3YhHbuv4JxpX2Sj6YU8SNmnHNdAW3rnmvD2WTx1mBTdYKiCDArdFhNsg2JMDkJBUP3Tpq4YxMo21",
  "key24": "abUgNX5pWo5GSE7bv9C8giZbqCvHMY8aruWSRF9mK8G3Sy8c9YHw4HjpPYR8RGzMrfpcjgEfxWbSpPAU99C44NJ",
  "key25": "fCqxAdpvypvUorNvSEnmFQBuuakdteTXYuEvrEYX94Sc5XdJwbpHjgVm4BPFDk7AMr5PbwKsVfkN74sXogsS9H8",
  "key26": "fFNiTDqJCP3i77GCF714Zb8w3at6ZCSh2hdwEUYwEiNoKHh5JPgWUWfje6yRPVmiT4WLjiQwE8nR6NvSa1HdHM7",
  "key27": "435t22wV3rjgiRgo5CwQ3qx3jH9yekp82J9L6s3Hj8S7VyT8LoofL9VpyvVoz6N6bQTgkfAvi2x72qf8cY6TQ7an",
  "key28": "66ZoVxj2AhMZumRXPC3vJtmYYKfaYWxnCRaeTuBNYDkWmMdjKWkvkzznXFfozj6zzR6VztZ7HTFtFAxKevQKtKz6",
  "key29": "3JQUxPbpA6VuKE362ZpGcDKDhQpKL1BL4F1e5xs7rDjYHojycjwsbfuz4pZewuodJXEofonch4M6ueNdtTgaHwsw",
  "key30": "3yyeFXjWUWBddiqj3LHeKaDxTEz1Pghj6oqjAtDmoswcvy3VkK1QWiTXkCtBFdcRxaw5nA8uexKTe5HQysHV3ivR",
  "key31": "2f9StaX8p5qNYX7UxMQbtAVSbt85vZmN25RZ7LirRnzDneJs3L82xfkbBdRSmes8hBEqbx3C7WJ4bAX8BLFCsqj7",
  "key32": "4wWv9iMFPvvLyFpnF3oLeiXnQZgZCytoSHaexQcnAJshijFZ3cW6P35K4RceH1p557SpkSxf2skvEucaCxqB78vc"
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
