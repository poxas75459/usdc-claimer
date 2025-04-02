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
    "5Rm5E5KSiZg2dZyxxFBZwwRoDUR84nEN89LLXzYNvdE9qJk4iyWYvwy5Vgocf6oJBMHAXftinr3sEGzeYMrDSr1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XZH3LkiUysKQkLz8zNNW6KAMY5jHxJRLhBJJEwd5FoFNygv3UK1qJeWnare8JWEbrbgwEyVkXaMrP6RUw2N3YfH",
  "key1": "5MyPpLLhxVzbro5fziiCLQFeoWHoTJYevRbGuarujJJMRGwjxr8KXirUSUjsNE9k3y1JuqNcehZceodQMDw3wVCA",
  "key2": "VGt5MhpJmBHHHAbFDsDZvcjfzRPJaJGsa83hDywBL2C1vh4T1SWFQXe8wh7ApyPgtrHLNNyxzAb1qgavmFgJJup",
  "key3": "4H5NhBzfsuc7YBQiHohAB3pydtvecE87QMnUDKoQd1Qir7GW5U6aLikp1re81xqybgsV16FpwgepfdWNiaEvxkxq",
  "key4": "3UBY8FPxwcVtMJ9ih6ev8pFiPBBQLyLHYvDPge4Bs91wGomZH9XJ4wKLcHdXpQXjye5CSgEpiMdqf4dCm9Z2SxX8",
  "key5": "3gWxDjRrnTH9wCstg42VhdonBy7VavcrZFAkrRSEvbjvE6cBmaxNyUMremHekaekAxWqCPpcdvntnQpKaD5H1neD",
  "key6": "3vW4CYdxzra6FFa2UdNk31JMMsGQueDMv2s5vpLVUrQgGcCHMUq39LCm5rb8AaERM3EY9GPyjxHcLbqT3ZwcWjgu",
  "key7": "5Dr2oJ5Y9UuMG4yHzzaXMsz6rRm3zktRN8YnuQh5kWw4NhczaW5bosgMwDRSjXiQP41wL1xNEuPpsNymqZTmu7YM",
  "key8": "2xjS6tkQaoasUcW5edLZzZ2QkMo9Lsov6XZMbuoZkZ9DaJQHbm8mwj1muNDcaMqV56zVX4z3A8nmfjpABciEzu2Z",
  "key9": "2T6x68rDAUrvfqe2xbdp2dRck1rH6hHofgtAofm72JSGwiecBxC8f9dbtYziKcyje9TmmoewFEEtKFxxRt7Y3kL8",
  "key10": "4daHh98n1rguVBWvVmUgJssck9upoFLks5Mx9b5DoeeXkipv2Qn6SRtnVdBVpUXxyuEMRhL6txa56FHDMxUgeiCJ",
  "key11": "SqwihEUdDeXgRVLcs4LELNcS2uWojTEiK4ySWTXmbzUqV1LovxsNT3XgjzdEXeFbHgGUZyh7moJ8wFEr6mS63An",
  "key12": "43P24orH8FKqRZXUqKp47K5w2AnpfLcoykhoTHtkhAmb3Z6ByLANKh5w7s9SeN5JEiig7rBB5fAUMXcQdaMtvXNV",
  "key13": "2yGTDzgjVhEDsQFM93fnc9op92zRSAEez4FSZGDStDdAXnBxjnkaThh3SEUyAKjTL8sDA4fMFrthTf3WWLLrVocP",
  "key14": "5RHyLzY3JVQk5fRbnnbgi8Vj5f5nyMxRauNP816iGqGHWaLUchS6NpomSVfCRc87dAW5vaXnMvjNzXzGV21W4v3m",
  "key15": "3gZiMA8WCSNEHogCJY34b5sj57oFaXwXYYvKVAVCgjLq4VVF4qVaS81tyfzYVoacZ4hvCcRv2cGSfUidF8Swk2Bn",
  "key16": "5B8zgbCdJLajtU4x6pBP17EVFkBBdXzoz8H62n8w7rKCdEtdRzw9M4wpVwjPWzfcLt2183xzVLfJNioizscsS7aS",
  "key17": "5ahPbhF8fr7XLrMHnmHbiNjrV1mkfmx5c8ftFMjcCEy7jVRH82hhu128zxS8fZnhDbQ7ttphKCXJiCv7zFbXdyBw",
  "key18": "2A3gLDU45wYS4ecmmQw8rFAWna7a6xYwQuhzEiey8qawaoStkhSsjYFqwCk311ddSG8ANqxhQ6nnNZkBG4qpearm",
  "key19": "4HCRD8iUKimhdc5GbQZcAHk9EHrpLyXhxQKgpLjNSnfH1tbZhYKWheHhBrd67zFzm8bQeXjRXs86cRJ2FngWhTMA",
  "key20": "ZPaaQUBt7PKg9ZegGbRyRVU3XkJV9sER59Qvb43KaD6zu7DBugVhV3NzmePTgqEK4vfBAXq3vEyYzccxyt8GyFr",
  "key21": "4ZqgyDTZqyz114nLWaxQ1SNNTnV13uzYBEAYGNqgDdzTyWKHWZi5QnoKAeHXocXhfpU3LHLutcQh2k8EFe89BaMj",
  "key22": "2EbDs4YXFMz42XNEnrMaRx9aUr5eXjmQ2rUB116PdCvngnJVwMJ6FvCfEosqzLNHoHp6JhggoA4ffuz3uQsaHmKx",
  "key23": "eu5vqHQiTNYPtJ5u8mji3iztj7SR8BDzZssLdzFRiYedaSZSwVQFUqmSdGusKAxtnBiaAc2pGPRMpszpSE9poRX",
  "key24": "4CQ1nKzMK1jZS7X3shBM3rLxMMASnguyGZZRP7BdXNqUcsAvqbTW8SuGBPRi8zHpLcrdxnauJSvDhDYMVa5TpoS4",
  "key25": "3aFex79Lzrafyk13S5okDCmaZ8zfpPAtf3zZRvxEdbtGzyQJibZgqttkXcsVVcbT1JLGoQD5H6vpfxWDX9DningS"
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
