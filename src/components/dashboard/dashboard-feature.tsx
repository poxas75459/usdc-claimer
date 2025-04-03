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
    "5eDAAFexzR5kwzXpSua7gH3a8McBXQebBjGP5L2EhKq3fF5F5Y2z9ZAtePZF9M5deysHHqczjfku4AYbjKCF48dG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kiKXoYoTm3YQzuiDjUNxKDxbu2WfucVzA8C9u3B9yfrjLMLar4Q7nJoviCKhkvFKW7FVBHetE4V2TcHb4araaEM",
  "key1": "5pZA1UvicSiXu9e6KLdCZCNogZ45t9V2dNvJYfTk7YW2NHmTTTdKSuKjEAECFDwSPAmdXMPXmw59D4ZZhYUyNQAi",
  "key2": "5vxE3Jis6RTrAnuofhbRPN5erd5x6AWUdEBwuE5QPA5PfKyV2rPty81gx1MWu9aF4Vuj34uh2DJRocDTRVLeVXpo",
  "key3": "21PsvPnjSwLm54TCDpLK8K1unwyhWvmB7DGPAaGKEMJMpqBrqm72MAduJq9SrvbUzbhQz3omvCqjcrEQ8WkYVNy5",
  "key4": "3mbZkwwYtcF4AhJFEfzWRZeBcPEQgCTCBDyNVtZWhZVLSCHaT4DGWwje8MPQvpDFK61pvykXJW1j23e2EAJq9t6a",
  "key5": "5SPQ3mfWVmksHiQXRWrGDZi6BB7zL7euEgh1UUspdpkb2yt9EeqwrH2hmy5uQ4oiQgwWb8KcUMFSu1xm1bFiVEny",
  "key6": "5XbHxNRdY6XVr42Vx7V4GD2naro58iC7E7DhQFbetne7Y3hjvY22BPmwy3zrdgYzLpfk7ZGK3fjkniYHNERwD6k6",
  "key7": "4YRMsGJgPd3rbh31qTy5LMSFBPDDuH6j8W9yMQFsqjkcNu1gpBNoWShvArgbbCBuh4isDKWzrX6aFS5qimKi7Z9Y",
  "key8": "5W3sPTXsfFNSEuJ7EhRmoKcLfTxf2RVEwUvbWTqARoiDK7ozCCnDjEFguRp15oC6FjrEPHvrtNTorSq5uUAp6MT5",
  "key9": "3iCiMzFBghKFXn3GaUvV9uonerNpvNLKt2Jykie62ZwmHkUar3k5RQ7KwmS3QhAXxxBCDXTENXMHFidzckbrwZLy",
  "key10": "3dt1Yyv8nM4JRkg5Wv2c1iZgKTG5uzz2zMYNxZb7Q86ghjPBNpkqDpP5MwXd7TJqeCAEdTJu27VyRgk2kWQAZ8LU",
  "key11": "5J4USRX8xh3Arj2YD3tBn7CxDeRtSNZswYohtPc4oNMeSLpHkB2cwU2pDdpwamdVuofG8LRPmxh966b93HxvzKyb",
  "key12": "yR3bw5h96D66MfhzULTtYCA7mmJpFmS26GV8FAvwPHLjRaoEqnBLt8tmcf9Ufvzf78gQuFbA9dbCmj5N2iGYV6T",
  "key13": "wWgWFy8Yvp1esvS3RasoZcYLvf5MsPPKzTd7byvxiURLeuLKfPJbWYGrfWMsTFwNGWLZMKUZbaaY5BJJSS489et",
  "key14": "38Hs2c2fx6Kc7ctUumygqschfsjMeQTtFwjy6e1f7J6sQW46Kf41ViFLbJc2y9m9nFj5ynkJYTuJeQSiWyqhwyKQ",
  "key15": "3U8RFrJutrim8DgXU59vDPYowkoFJxUmvVx4fn9Qowc7XNGZXmLSfDETVDp4asfeGuS91pPj6Kh9WV2g661SfhAj",
  "key16": "2kBm82rY6yBwyLWqqt4LrKe7iQVCx8J17omZFwaCPXxwiirhG2pRjqQWP5N1Bs6ZNSqxK875w1eDsqeXxYZXDCx6",
  "key17": "haFa7LZQh4C2efrW4JR5RMVQpNyM11xRrDPSwUXBu5fHesDtn5cYuaMKBxC9YewF6M2uafEyJpGXxdSHeit4Tnh",
  "key18": "2YQJZrxzPbgvFnwkDaMVSGYXo7PASX13m9T9pvsb1jxseAktgzy3wSGLbLpYi7mvRGUKdaJkevpEHKx3DcHbKdyv",
  "key19": "3vzxaxS8ERzAiD7HvmRxKa4g2VJCqYfNGHVT4EWe1vydpbX7fEEj98Xcmv2j8NUGcUd7DC7ooxatBUvqzm1kEUJG",
  "key20": "3tb44d9akh3YAUMPzJijkwFrYhXme5dehjeupNzbdkzCABFGRYtRQ2Ku6VZtXF1rP4nptDZS6FKyRZSmM112teaz",
  "key21": "3jfwyC9yKiKiJV5dFL2DMfxcR7FH6ZarMPabkXyAJ7AvnK68gX2zXb51PVjuLRtJrXsQfThbL1ddBkVJpgpM6Qir",
  "key22": "3V3hD7hLr4QrBYpHMDBXis1B2DVP3aq2zv7VvANvo3XBKgFS7PYxSB1rgQLnTsQkxvrFcb3TBM1jYPus5sPDd5Vh",
  "key23": "5DGZzRkcm7N8dxPJd9429oJpiqe7D3ZGZvtdbHHRAKGFZjAMXvdoBAA4HP1NH9pDxxm8gkUgvpaA7dDvPx7Qs63H",
  "key24": "3RTF3FHBmgKZSUPdtWz3GiEqcACmhhv5VmwcWjmezUymn1e3ZxxcZsSNpKmRheUwRGjeks5e6w2s6xYU11hC7c8F",
  "key25": "33uLidKbkZQ9mBP74n1H5JPps33bjfTnytjq9yrZR1QVvq85rcopCPUJtX3CZzSAKPoFvWPKv7pm36Yo2Ejo6dZ1",
  "key26": "5FT4Q9oQW8MenU1GjzNTjn8rHvmZE8jyjdMU5BzVDjzUuicztZhy8pdWiWQVtSEEmjEiJ31UzXEHNCPubQUtrvia",
  "key27": "5tN1T7G8yqWTXTin2wCwG8rb7JDohb9VUY3ajqnUX4CyysBcErJB9bLzmaBW386XzDKr5usp9GMvuhSkYnkFNLhj",
  "key28": "2bQFqus3vUZFrTj9skk8RmBxTpePFYMXTHV2G4vMQduFHNBr9ksqzkhrLVpwZ8MeduTDQbUoS7KS96FGftLtCvfn"
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
