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
    "3qs5H1VP12A6b4CpjAdurUwKJFENMMmpgxuxoVj4XU9yCmsfRpESWmSoGAVCvn1iEbG9SHJUby8w2x1DpVSadcf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQzEEt42u2Aj68YmnG5rJgxTZjQqKsx8zx7emPZsLAUikgrfQxo9LgACUDAaBuaK5mosAvLhhLWveQN85zX8CAH",
  "key1": "5HQtSKY3A7t1Lq6QgrEe2TXSH2YAaisV7k2ZSGxPF5hZEaUJwJwCgn7VFzKWxn8PYtjyH79c1zRYEyeCxkX6h2Ne",
  "key2": "45n6xCQ9ENY73qtuJQ5EaUoXMRZpydwTdRbkBSpBfDxANiqN1i3hXdPWsbZGPmPrJWvozg3ddm8gyJBQ9Ek8PHYe",
  "key3": "2y4mqusRzxc8ZgTipy5wWns1VEZXrLBRhorBUFEKQvr4Qv8kNJjoL2MBmdtNHxaeAb7Pn63U19Cm2AyhKnM9UTD9",
  "key4": "5BiimWVayAFnTwnstmLDybt1bTf3g52wgUW6XuYLySTR1UExxtxUxwgLgYyc31wBGdyCa4CK57KouNwiegVV1eqW",
  "key5": "Vy1vjeaVjQgL7aMnvAwAMPQfEy99izxsS1ReBhrx8rU1fHJTPh19XNyHxBLBwnpmuCJJMiCQpEXzEX2r1awkY6A",
  "key6": "4VxTAZ3gsfKQ1iSaX5ykEMHaz3z6LHiUx23QRe9quVjQZ5EaH8TKYUrRxDZgEJxxAzhuffYJ1hM1XvxHsFaHj1Gs",
  "key7": "427NUs43izpRFyG9TuHzewGycLrDAxqTszuz9A6jXpChqSGCzVoQxSPeiavm7u7ABzZoWeHowDvqn94UBomPK51a",
  "key8": "3bDDNZRbMi9YXKT6UrwkUPHjjfEcwAYtndH1RY9SWxJtiRrKREXXG2GvXr5isneqgzU7BrmuTFMd7kiGqhXLT7Q5",
  "key9": "3fCLWadQViikD6sBdbXJeGnUe9s1w5q4tsaTs9tjBEuXoEpYeRJBdvKh4xXAHbfjrqWApur8Vay81RavPkAeppC",
  "key10": "4ZcgdZCRuB8SaJgUWLcXiiDheSPcAAcGPFk28Ak4VMPLpFZXK14R7Zvm8V9R2kQvdijN3qVuRtE9nPpZQajopQps",
  "key11": "3NHDU8pPYTKHsFgmKKTX8mKbyJJEcaDgmvL3AyNy4eEN9DkggEn5c5rg4NsPMoTuHdfEgu6rZxNzC1aXKvJoLJSu",
  "key12": "3N1Gs13whJtFQK6L5UVCSVTc9n5S6XmBkcnn4nokjDx2xhibDKhpMPa9QNV11VpAsh3XeDRzsHtN7ss9pyW5jHVT",
  "key13": "2JFiLp3SNnfvSUjA8aaAejpVu7cePtcki7CyVPqFt6giAgnBgKfqqJ4XfmxKjATQFDbJ4bji8HG6eJmSJNJTLy9q",
  "key14": "2EhcfsQWgYht6Ne2EhK1VspqQ1o9pmnCEBj36ZfxRR1nZfCRdBAz2sRC7JqaowxKiL5Hx9AtgHBmpQWarN2jTTcE",
  "key15": "97qVDTs6wCbDmjMcFGk4Gvt9nnt8zRxKZdnWLneBcSD2Ur6oNWSeFYQnUsPhEg5LwPeqPN7rGmiKSf94NGCjJNd",
  "key16": "2fGN86pxuwZZovEMzHi21zZeHW6T9sg6xS48BEdWAp4hzQfCBpwgZX3QGtm4RUa76ns2eneExn9kTbY2PDTA9LWm",
  "key17": "fqH99XXv4As384WU9H8pMr3N5CmDTAmCXqvmMyb8sjWPgLQeFvoCoose5o4iibpn21Cb6BCKTFMm5y9W348hcgf",
  "key18": "nqgFiF6qhcwfpUV5jC9BqVcQGKWgNRDSELQ54WTYAUiPcXX1VsAogqqhm66E6Bsk1XR4CX2REMpndaJjVtZuWds",
  "key19": "4g3VTQiATkvqaVbXq9CP2Dnk7zmXkt3xwrRnbEDpw5Z96ipi8vTGcab5gHQXJyapjSGWN6GY5ryb1dSnj3noamP",
  "key20": "38epYCUaoAXwPub2tGX8Jaix1Co3aVQ44Zcg7whyzaPSXpTABaJwEP6Mnq7EsRTRD8HUmkTSyT9dPjzezdsiufc5",
  "key21": "3gVDHZPVGbWffipufBsQzBhQUVF4LfW3y573BVAdBzmvka9KG16Q2bVxMFSttFc9pA6t849wEp8oWUGKW2Tcz6ah",
  "key22": "4WCri5E2mtHNvDuBSBJwT171hwgMX4hLZt9HZ6CkKN72Qi4xqXSqeTkFMhrcbe6JieMZjPaiW1SfqZ5wkeDJLc9w",
  "key23": "3p28TkBWMt3BFhbsXevAQWyMycbP95X2VjivemUbzJaNtK8yCwS7k6WzBHgvRQvFRbBYk8JPLnf6zKxrQ28ZBuUR",
  "key24": "EQQC55e2DJjvkSFFQ46Xes39QUjWUQ6TuHYBJEHx9jW6NS5LBXPwwT9hSThZhTgzHUJc5DQaYHjsYpA79fqmZEQ",
  "key25": "vryRvLktctozBUwMriUcFqJpt7jXA9nTHmzBacm3HUmVsfdGWnvjycMbgf4WcWEufcq4T6DxpoXNeczmy9BWNhX",
  "key26": "4242n3mhphrhM6sZyftz766hrAxcHVSrzGxCprn37Fa2XpWsdbdtQEx7uGYmGgiMSAjpmcoVmpee9nufVW1tPUa2",
  "key27": "3ZVTJEDhPdKoTqDQoGC3wdBBbWj8KQ6MSxmqxkPoJicM8BSANmSArGoHJXK7XozWZV5sNcFTYyNxcCqoG7EnyuUs",
  "key28": "3sonGzJAhE4c3YSapeg1WVU3QLmu8YWcaKapevAPhqjQFkQ9qgWCp2pdLLfyLhWkyUL3AHE9BgSCWy4FReHhRH2"
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
