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
    "ZuiS9UvdVZ5TvVWyQr94jW9EtDSvvyzdqMVeP8kyzGwWPo3rF2vbVA8rB7tcM4MJnfb1sfRFwtWZVm7mQ3BQp6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fajQzbz2qDHZgfAEe1tcVByoZseqKCYwXrS2tiiJtn1ToR85AQFNrPMBVYUjuKSsH5Mv1SYHY5pyM8UQLD31JYf",
  "key1": "5c91s3B4zfebEdNyrudw6njzkPPUAzkHJJqErXmcYsznU4E3G1pS5pECh7qQd7ywacURNEVmTmYdJHZHBjuUmkiq",
  "key2": "5ez7tNcLFmvB3UPH9vbJ7jXQyqaH6RBdhexr6GPk8rCoWBF8LCNv4FgF6ryGKh71gEh16ai8Hw4WFNKNgrVW9UKF",
  "key3": "5gcVuC3DgrU2zSgpjQKr2mczkYBkiWJx3uj5qFD1VB3eK28Yv7dwaowQgS3nLa5MU2ZmhPniBbZGhqtRT6Jb7yeW",
  "key4": "3PdCXp6FubtWjwLn9MEsXPiZneoJKv9H8EWViZSFMqbjiexEZmoxy4GuAKYBN1vYaEpjYGg9RuLh3QF32YpzQBkK",
  "key5": "3S2WCVj2MHYRzBhv5esEKzBkUnk2TkX5HmbC4gbQn7F4QT1jWtejJsuRJoSz53QpzjMBiXvEVvbiUAjGDfrUz2ZG",
  "key6": "53TnERR1ExG3Jt14SmfMtod9pp1daxNqKVsYSKJmjfC2262qyx1YB8neajkJwTFY7geGbNy8yyrxQzZdFS6ZRTpg",
  "key7": "Nsc893VNffC24wpWpS2eD7uNV2jh7xYMixa17ujGJtSn4pYWX6AuaTS2NPoJTHZLWLEBJs2jM1mDiqaSURec48c",
  "key8": "4e9YEmTdYnaaPjxZHBB3gdNtoDn7RkVHk6XYs3aLdsFTveD8CxguoGmLmacmU6TUq9FHYfwZRoC9VPPyg6fCmc3C",
  "key9": "3f4fuYvLrFTNxxfjc2qu3sSACyQNqrLZ8fXyS6ieP7LN4qs6APntV8XCu4FtNHGDBfZwyuZ4co4bqvD1FFr893Vp",
  "key10": "rpCobojf7L5msiereVrr7dgWpyjrLcJFeBDf1m9zU3CRot5qBBeXuyWrDachkGCJhTehsDtyi6cmK7vVPQvvwNa",
  "key11": "23g13yuV8KsT4TLXqhwYqqK8s5uLSS3qTci3K7zcVB45NqPy7tv9f5isfY3JQUtapjpFjhfuaL7Y8qhqhbLKL16f",
  "key12": "4VbCAXBb6GbqHof9iy8tiXLiiqbheJLKwZEgK11j7kmjNXiK8LGQwc19uqXcWJgYG3a41JRudb3qJa8bXXk3eZyQ",
  "key13": "39PZLDCc8t9kvATD6C9ku3xbMRoJCFH24r9NHsW5fLX9KzApLK6Kd7GzBHooPC2Wv4Ls5Vq5ZZ6DdrFKFkbNwP9d",
  "key14": "3gpRTJVkXCdSdV4sDEQDj5m9RwtVVsAhUnkntXbQYQHdjxweiV9RDXNmHKKdvepxAvyDvKWj5hHoiEwiuQz6QHaA",
  "key15": "2VmGULbcYCh6yqZuQ2cWPrA77ZiqAz8vRkCkWeXrxVDkaAm6wf3SuoFxqjTVyCVrS2M8Bcy5y7d9ckXAg15f6Ata",
  "key16": "5PscdmRouQwf3pzxwqEFpH9NdJtCTr3opufExs5UhTDT3m5ZHA3fYBMMzWmCsonqJWyCMNHV3Mh61Ks7jDrADpjR",
  "key17": "61YNqzdkB2fdPdM1R4jQmSSvMb67nqeo2ZWx3Ve4eyMN6ny5jCaCZK7iaVm1vVfqxEYZZa2LM6Ufi4aRbbyLP7rg",
  "key18": "3xhgue1d5TFUv7LHAoiRbhHrb1vF3M7v7sFoWE8oM4T6syV59tnBWJrwxxqHRGBotvKW5Fuy4N3uEY3LxtvCJgRj",
  "key19": "3sjLCQsztjzJzS36bRccgLtKfFe58sWJfXuS6KFtWYUXeRDNwNM6G5rUvC5uAYPFsxE1BWhm2dEnQXwyrg1eUz2C",
  "key20": "4PnmLDUWWTaPC2VFcXW6NChoAJNafZPBxNXUeK3iCrM7ddKjtnZprB8mabq8ZepbWMf9ta2LBQBw53owVtwoV8vQ",
  "key21": "42edqF3Yd3Y9FSoEh2aHoocuyxQmBNh5Qd6GsuAhJPJu5YYegsXNnM5CQybgn9Wa9MzCjTQAAgmzcWFFudV4XUgV",
  "key22": "5zAdhPakNscoar9ivmwR6BQKqPGgzDEETiZszpa8oxa5tQKTf3ZxPwpA3ecFCPXnVEF2aMQHRbT141eLgvd8gGP3",
  "key23": "3ptrD9Che8pCfg4SBdyxBYLf57Nui6qhYkf1u9VHPjycxN3Ji9M6nG6nVi8SGsoSRfe79mqZEr4jaeYxBsouB63s",
  "key24": "c6TRtxLisi1ZjcsfR5QVM6S7vc4p5E6gWPCwvReXGAqKWueLfh16WHXrcfNmiFf1WQWE2ppZHVRGSuAFdwN9JUw",
  "key25": "2EG7u8njRuif69Xs4rNAUnYjnVqfvTZevoLrHvFYhHrFrmgtLqNnd9rfoAi3NVbR8M7jwP5vcdUDPgDwewKEPhXT",
  "key26": "5L9xbkvgcEC574rmpxeuroD4K9Sv1Z4QWSYLb19jeMN9LXei8wGA53Gr23J6X6PH1s61GR4myKVYb9qxHSKGWrT4",
  "key27": "4WwJMhgw7gMnSap7TvGSbr6A6CoW6PrfhAeYcSHMJzm7s2R9JBZLzCCyi2MCLfKvtnrUCGfoWXg19vVwTDaaGgRZ",
  "key28": "AgQwb8dGYMh5Kitdo9R7qGEJz79yaw3k5z1dtSxBT2i3wxrMoJzFCdX4RhYb9triVUChQhEc7ByRtvwn8AMXzed"
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
