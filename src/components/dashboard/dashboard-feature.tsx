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
    "5cscwZPuivriEtWqNmp1RTkrdDB3zE4fiUkYeSnqdMWhyo2VPnCftXr7BRf6UmrpB3gJFzZymuPpqGK6UoK3PQbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44KYho2xwnnCA198QC4ch9JSayAoMpg3VFhqbvpNf9GRNvBPafLGhWvXWp9CgWo8iCdBfs1nLqu8JuqojsZEmwNN",
  "key1": "39JEwQKP87GX2f4uTbHVfD2AZYk3Y6nGf69hhfeKh4QzbxztmH4YQZ73df5ik35mT6bACDwd1541F1wBTgkfoT69",
  "key2": "evueH3MCmzbsgskq2xvQPigMu3ErkjiNBx5pDjrupBoiUngp73e26GPnmD8fgQJTbw8MvvTeAh2hK51JMxicQAe",
  "key3": "4GTwNeE4gRgbHfXT9C21eWwfyu3MGvuVAU2hJqycvDpBhvBUtCWWyeq4wNresKD7WSennSTdECDGdxLseKxGCrJ5",
  "key4": "HmLr2stdpfA7ZFXTZGhJyMBtu8YF1FRzRHKyRPTx91qEuCHDPXsYzqA5Y5X66Mh3tCzd5ehMCmKSYD6UaYsRscA",
  "key5": "2FQxTufcScZ2ef7qh2DNc8obmSErzWskwZjjpEGtHK17ouhZGUUhvwMqu3sPQHoSjyXXvjYR1kE6YufBDU248j8j",
  "key6": "CaN9xnMC2CB3uoRtjub6dcymGd4jP96qqmubs8CpvGxJuUjEjcqTbgKBoWhTHFKvNbzBZkALpUPTs8QrTpU7r3W",
  "key7": "57D4Q8zAoMY1utRbEQa37Kj1mUzbFDrUPbw4sjBdAuoE1zFJdHaVFaomq5VCRyLkpbdBeoq4gy3yFgosvCepKY3e",
  "key8": "5jUygWBRRaULeoj81Toc3aCa9WAQSpRa9UYP6p6PsKDQu82YnbgebXiccGR1UHUfjxiB2tbLSzLvhpr5yDbFi1Sq",
  "key9": "4YZoMeL3PBWZqAtMgr6p6FGprmxXnTxRAW6e5G6SovZqbyvC2w8RhxMySSxjZaVfMoruJ6NChKE2LAh5fEBtFgQm",
  "key10": "4QGq9m7UwkW7TPssYZ3WhiSyTwiHwDN5kEUwiBRqychfjH8VzBsgXAxxhZwsmKT3bNmRe5yLVS5Z1fpRxVmnZYDo",
  "key11": "4yx7YbqV1gVcbZDDnukkMYhmYc7cehUsNqvd8PZb8odqGX28dHrANtP1wkFeQhkXmFibQpiAaKUf26p2ZcLM6FoR",
  "key12": "H3d1hx3ZxBStK86UoCjiXvQa2PK56Js3ygn1uoqj2U5xJudQN7owWfWmZr4FUMrtmz88B1K48xmhUKZzZTdXXYU",
  "key13": "5MWphvQ1GsHdBzAxyuYXV2LYRKL9UTnoqmm1T7sjHQuiZ59ZxxTpfHvRQAcmRoccXq7WxEt9WqqQUQHgqzEF9Bhe",
  "key14": "pNdQYSQNRSnFR8qeYnwH7eFeTEa9NhD8SzoXworqVDHUKzXVZAVkU5YCKdvYpvdEiqJy56znPuEKhgW66rdFa4Y",
  "key15": "2QDNfTLFR1CqpbapxdGGCc8pGbzNFACDebL1ht25VTejmdM2vMVCcXUDGofaiucqztUu12ZLDYNgDBhCyUJwk7k2",
  "key16": "54jME95ubmVq1QebkCe3NA1LzGnCUBCU1nu3v7nsYKfSJj7aeKuNEYDYKhHRBhzSFgdQaMtFLGttEijMNY676K8",
  "key17": "ezjTxhmuRSeMqf829qtLBYWz5vF1BJr5LCG3i1wbXXwEqeBs9xssXxNNXyyCHmn75ZzYwoZPewJBrY67D8Jg4JN",
  "key18": "2d1sSKziYKthygjwqsMoLTiJJNGzFp5e4Zoe2dymAooTNeK51WrGxdomLPJVLEPwct5g7V3bFGDgfHg8wkwQ6WKk",
  "key19": "4UqKuQvG8rcd19jwjcGhcr5NAhPsUPq9yWd1kDoP7FYtDQLSV3TVecdwAAckLcZWVQMsqbcYxPUzxVzFawyp1DJg",
  "key20": "UrY6rx9aJqk9ab9eKmWvVqsNa3h9eLdZxody4vr3TjMUaZNLW2NSMQfYAS4vbtRaTm1kTzevBoYDZRyPZ93KWVZ",
  "key21": "5tXVVNbAW2Jq2vmBVoNBYm1wdYhcKBJ94YNBrbDhw4sUKkBH2JdKNVvzFyeWBbQWBXFf9TGEaMRZv99pfzspDvt7",
  "key22": "67WZr5FAHmBk9VkqH1pziPuegmKbWQAsTJ2XyyFPzB3mMkJ9ZQL7591EMZooG8nQTdcGygSiE2qy2PuJH9zsmQN8",
  "key23": "4eXGHD7ryfiQuBvAPe8dibm6s5Gh1N46yCSwXNaEQn6zk6fQHE5QV5JpcAXqXZC5RReuyyTuKE2wKNp6LsPYJm6U",
  "key24": "3DLH88usMU5URJzah1mK4HwiiiWBS8tu7V9fZ22jnbDnz4pwBAiwBjFUMe2ZMHYTVo4fa8eBBgzmAE4ZNJHqCqBk",
  "key25": "M4J49qwNdvx2fu59AUvarSk1iGfhbS1U8RrusRF9J6QnCH3qSZNnovRQCR5TLMfaJCZQc573JHCL2Z5Wtn3rY8k",
  "key26": "3JYk6u14bhWbE5A5FzvAnEkdPDEBhBDELjVgVrzxzhvwdLH8hRsx6EZr9XHUfLNrgypuNmnoUagEYfYk7nV94YCb",
  "key27": "yaAJvFXB9vaXKEegEecrfwQmCqN6RvxCpnTjkosMBFCkTotNWjt3DFbnmEDG4bKzRHL9xck4mFqFRHbdmK1XWGG"
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
