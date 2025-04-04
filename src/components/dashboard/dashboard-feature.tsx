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
    "2wvU4s9uVcxQyS3pJ3cYzccJUQgTs7bsUVYwpAm1ERDotRT6CEMDM9SN6kcip7MJTkhikx1asei1pT9bKYwv8Hg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u7cFHePpbWCPUFjymBALwxM63jz6R3GQhL5zR66ZfS7Katkd7sZnCemDa4ax7C2eaaPkV7Z5RYcqGAWa2kwh21",
  "key1": "2HPnrb66daYpCnqxPEBY8gQSzyZRqXP2roXKB9K2r4WSTEdqLYHm457qpaV5vu8pP2CiwtGQZQ2hK58JBcrg1aHB",
  "key2": "rGoRNNDAgjompALsfszgmtPEWjKd5UBiD6B1434yauxZWB2PvbsVZ9joScZR8XH57om2dCRrJ1D9daa39522ZjS",
  "key3": "3vXgaRWmrWZySxjftu7VSF9zSH4QDhW36cXmqCpzzesRzET8bYaNkKHfP5iebree1vRN4qkk6728uedikbnFD1AK",
  "key4": "23QcwugrGg8RyR9HqrpEtiTBrtQtSxDqjK1LudZxVeet3yEpHiWcTrsjdPsEn34qfkDUCvWFxhu5AV2L6F9NMaxx",
  "key5": "4iNNMV3U8dqPUcj2wWVdgte7KYKv7WtBpsELwkkxPvF1i6XyPkB8mxvFs3RSMwWh1APeQrqpMwcfZ9LprNkXmsAA",
  "key6": "35HupgvafjtgWt5xjukCv1zCBNTJUtJzKwW14ZUdhAyzfuoh6gkidVaVK45kL1QKkvAVA8ssLxxtHXA8vy8KzhED",
  "key7": "4xtF8qTkmqR8pbGWQATnJrQ3iF9my79UyFBZdLgpov68eSuyQVtPpDESALQzdeh9UyViSpYUPV2tYtvDKGMuUshj",
  "key8": "8DqSBfyQmR3HfPHGECoUM5zPKNYSFAxjhmr5XzwsZkkWnw6bAaL23rrvcfrTjdhRJzhKojZS2MaEia84NWas5CG",
  "key9": "66JRwZMYSWzzX76z7qG1fSmxMeXPZWBeYyPAQDc4p7kyZV6WkMV2AjMe325BTaeUg2JudA8BFe8vSsLC8ZkvGiVk",
  "key10": "3izxVSQyBo3U5tHvwxhKaJdz3xTmj6a11xFxzVwCwxTLGVbqZejT9tbz6GozrknBM4fkhSHPBBhnv8sM5jTrGbbp",
  "key11": "2mSL1Rzo77f56xi7WR4tx4T1xqNYTP7HpPAvSSWw2KfzmAQuJLs29dFuTHuNdiXVxDfMovM9Va7aJFBgytrEaVXh",
  "key12": "578j5xCqLJWK2w8RAqafpwaMNnAco6s4o8irqZZCQw86NLddEr9A6XU2w4XutG55gkXYXQZPd2Qxz7AyDisjpqoG",
  "key13": "heLeF4Je64aqFxAhabZ42hEcwAbrJpURTkctsxRXHGfrCChokiPzPC9cPPTcfnsSonsTkYD1X11dmtrHsBtzdre",
  "key14": "2yCwpkPGzK5owVcbv2GRSQmxHXy2gTHhkDejraFK9CoXvspWePhGSCjYjozsJnrRkTjKJ88YGqFWUH1LrMcWQsrh",
  "key15": "2jpxqQPUUQ7Sktdm6m3s2LqowWBjB9zwbuL6KdMGFBzc9r8yiQGKrQjoiKmDoJmjgMNow8bmPtsfmEpxFgE3ENbJ",
  "key16": "3F35pnxhzaFaGgBstC6rUKkFSHm7hAq3CgJE5AMmhmUL4DrsQmLTdYcvf3YJgpWBV3endMwABkEBDa4sG6SKMgLn",
  "key17": "5YPjD1odkGtthWmbuKyQF4EYSPwB2CotudJhhVP9qKn1W82rpkYrrQEex3inPv3dHHwRRqyAmJzoM4E4Z8B7Piuc",
  "key18": "5ComfQXY3DVJWXECGWDATnRBJyrvfKiA7kwivK5A5aD17jS1DEXoa3GXy1SMNrLiP1CYrDyWm9z96mu5PSnGCBRk",
  "key19": "59dF4UozgRvJdYxsLaNN5Ygzfi5EWWAMZYDQLxNE7Fqvuph4xNJuuzsWZoijciWSyvDLSbSRZNRLJtKND85s26X3",
  "key20": "5fUuC8WPuAGh9jW3Ctjo7gXunXGBR3o4xABeiXgE8AVv9ZoFwpS8JG1PAYsrNgZPP7ViunKn4toER6a1DZxWCtZS",
  "key21": "58f7gdLEYPuBUY7DxPZouyVFGeFo6n8FBdv3m3x8EcnqdQTd3mmJ5Crk1XHbfk6neBNiDjDzqmwQYaVRxYxUbTS9",
  "key22": "o4rGiFxDWY68LzxJW3ksfZHvbR7d9t8ezdJjPGTUcAWr6U2zEZvDmPwpyWBXh66SNwsZtUnkBbEBf4CxJfktCEh",
  "key23": "2o7GuPHXFJX4egttWmAfQCGnxg5hDjPa28U8aPEsgz8ENHCTZMftsbiJqczCGLSHjYQ2YK8LfwNQASTp6b5woFKk",
  "key24": "566uvJhfhgd6QMhW8ZDdyWbL33kcvJL8GoniHD3vmWVk598smFqaJbSYftHrD5CvepeRebcGis4KApTHFcLxz9GW",
  "key25": "4x8a2L8G8CQz9YTCwF3LFDq3iNDVtNMdeQdGLySLUnF29cFY8PZFiH13hELyq8qwmnVgwg3N4jzSa7jJW8UkpKTT",
  "key26": "2ric4ej8oN1heq3raDbYZpT3wG1dJGYZYdcqmPyZWMLgbQ7HDKqQhACPctxCP3KSenyrjtQQwquKiJ4cLUTrNWb6",
  "key27": "e2XjHPcConWDQJ9KuLXUjzH8fEiaaMfCJ28pWSmJcFR2bcsJXskYDsr7sbXYpkpMPMCAdgrPSYwibyZVbMA4B9K",
  "key28": "2mNdxtriqPD4R9tTkmE3i4DUFT5Ay1GSxbWgzhPnTP45k7fiFeViRfmmKu2AsQG8xN8yoZwbjzXL6Roy5d1vFNLp",
  "key29": "4c5YF6BoscB44h78mD2FBPPn5GypGPwerCm3mmaLV9oajVRSfZexf4hwExH4oMrDnf9xiNQZUjLh1Sv3jK473g2s",
  "key30": "3X6Lveajtzf8KmYEr4RDWpJT9T8EbifmaAnHK9WDvKH4ovD33HwLiyBDYCVpNVUAjjbw9r2X8yww8TaFQtyRAJYJ",
  "key31": "5tLMTKQsKkoudd5MbMSophxgLJ5vrBYXBZ9vf8RDzVFkuwd3NZTrGaZdrjD4g7HpCxH65Ca1n4LvWACrtDYRbjaD"
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
