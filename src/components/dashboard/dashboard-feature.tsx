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
    "51sXp6cDoaVjJpTPbbTSHZv25n4LMFEhyXQ7YZp1SwWTqCFgVW5Kevshf4SeBtzzdy5UJy6vHTpmTes3FMSAtyzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WUtEVpqVVXDbqE5X6MWZ663YhUtYJa1qyWcqiRbXAVpFtf7wbrjKRrJvwj77zMSbtsRwATiikUhrWZxFGPdFx5a",
  "key1": "2Ro7s7ojS2kqVDLHWpStmPxYzSy5XxbmYSnVLANGc75YhdyySPuQtHvbc16mNur2s188kxvYdZ9dDQXXaAZRLSmg",
  "key2": "dLp5BGVxaxP6HsRe4q1T1mEEEP9gVSLNzMKDxvioyrByt7axwUyQtVYsiRTq39NHA9GrPe9n9jgB4nZvVPQYEyR",
  "key3": "2qBTE1oFzPr3ayZHArWkPTjQuPiR6daPuk5XZuoY1t51r6oLRScuE1EhMBCmBoZDBbbsPdRxzCfrn1esCQbdfwL4",
  "key4": "4DVmgqXGZgdvVjC5NwiFBxiRFDWYstPpAoTnyXwkwgiUtH5czthuymPm2ZXokiGh9cGg2gZVAuhGM1mqQPmzksKc",
  "key5": "DfNXNC3xYvvotkWoEnY9VQtWFeHvHEavoEvwwKmZsTNNqkGnP2vrEgRDTu7xHsEKF7xyEwJjpBc56f6NH7JP66A",
  "key6": "4qPMJsY6UQQBpuv9KPTqjtHJGBjQ3BysMbFLezJrpyk2dyvtFSsaXeWuW6LAkHUsj7HaV84spysjMGZUfMGn1Rde",
  "key7": "z5AkBYz93nnsi1SjEnE25kBrVY7DSYvJhiZ1BfAKoT3zbpfug12GKGgQqbBD9BEXjBNRB5dZs1izwfMdiz4vT8m",
  "key8": "63b3RAmDNUiVxyS9gLmLp3DECUyZvfyj8rSQpVx441MoiLTstZCgvenjp3UkTetowZ38sj6t7UYL1sjbX33QFuk3",
  "key9": "3HvBZ98jHCe2yCMosBsTxagnhPwacpDVqkx5pTV5e4jnBwsrLCYZtgPqjwqCR4EidPkRziXA2KVVXYgsjujUDhry",
  "key10": "24yU5zjACY6TU8vTzch3AukX1xu4Npy12ee1ThtTTJpLAwX7zrSLA6oBvA7HyZAkNkkvyu6kraJyirGuV9Fq2u6G",
  "key11": "48gHmPZEndj5qCf8xaYa7joYzbzdxWJYRj5bj2iPVgxmSWCAtSurCvcLto7btZrBgFZArSWPWpEQ5VBDrUdi1Lir",
  "key12": "3BSkrcV5AEGbqWZ2Z3FdNzapeAkoHSJTeeJkqEFrpgNTdYaQWWd7n8cnSauYCcxnxygF24W4VgYt4TdY924Q9vDw",
  "key13": "2Mn4Gv19Ho2M7U9UjStau1EtYoAn2anXHi3F7dwiMeva1G2gr3YCJsF6mSkZuzss6q2jZEoqxk3kCfcGNA7qgwt5",
  "key14": "3yshTQPrbdjhYAnBrdGcNs1Y6jrpuS7B1ZG89dCNE72maAVijS3bjPk3mG21WPF86E1gw7huUVQH2eEpNj5i2dSh",
  "key15": "2aVHQt7UHDzLHSgm43VjDuJFst34wHgC5FbcuygqyUxHdsDFZdcAKPRCqGXEZFpfxqsUVhqFGamC2GuVqTNQRwik",
  "key16": "37jf16FGipt6hUqVVjSSBnQLLyaPjHqS86c16JrVnHM6S7D1r5geka2oo8WHz2yPBW9AThDANSycAvrKJW1CCPQW",
  "key17": "4kSM9Ms8idvpH8bfyVSVtfBmdu5vJFDow8cCKBAXDLZLGyGWqPPj5Amv8AM4EbeZdH6q3VDAxvita3fgCSCgQpoW",
  "key18": "4dUvEvJ4PUepRihJhpitWCRSBzTdqboHEHqmr3JtwG9yTUcbcytckGEpF7MudQyTMPvKcQZkCFeBPTueipddkJQG",
  "key19": "zr7oY99nCziCGyRvUwcUnQLZkCiK3rRXtQbq93rddLv2VFDTe1QuvZF1fw2drJ8vDWwMpdQnma8jp8DFxNSFEas",
  "key20": "JoAakD4uPkAbd5KzUhJVYdgXqMVdsvYrYkP7CAfymQEVeLQ9fTWDa56vFuHep4rrehWiRQLcv6FXCsTteE3FQjJ",
  "key21": "5sXDC9UNxL4wkhxRPf1k533FDDJbvkcLEXYP84L4ApJH3Gi5rbjNHR1nVZ5cuq9ZMEsdS3hEYBoUthMSsk2gBK65",
  "key22": "4PrUn4qTNFSgsEdwgaUyTfYU7hWYH6j1TGYj31rd8mix2Rq8iAFMaWTi21qBLGnFdWd8wz5JWxy36wxVWXfDmFyZ",
  "key23": "3r1nrYm5MNpf7kuzpHjG1Wj6zQgt8vR6Kj7ceUBauE1vHtaxfZ7hpcANrNhcZf2rionJbK9TzWeR447pwo6eSuBK",
  "key24": "subWTwA8sFnfqa4dMwY8cp3CTh5rbW8pUbbGagakgmid9pqQgLpd1fw3mCubZn5XjarN5pqn5fYSWakqBNVP7LJ",
  "key25": "4npFUkr8JWQkxZn7ZTuUX5hppQGNyfXWX5KNgSu95PkqLAg7CWz7UNx1QZUHQuXbpsk6DWAvibYaXNDXAUoH9SVb",
  "key26": "4JRagKs57Kt1e4FSSsQux2akQ7Fj2zCyHcUfgcotdC1BfEgkjceaQC535AoaciDi8843foZvtJPudfGdPUgezWfq",
  "key27": "2oaiiK8UdMJknNkCcuuHdHggR5hZdgmnxoFKenLDYhX3961HwgL2mWv4HqsTBL4DmVwBWVYiYQmttfFihBYtc3DN",
  "key28": "5hwUDf1GByUSTxDWYnWTXdbUnHbYJjgyCEDMwFvZiuTDPRXhH6rk9LPZftWh9Ee7Y7opTi6AhwGzQtb5vMW6UiH",
  "key29": "wuzHjrbWMr61W8hTgytbHjTP9CVHt4Xpe4ZZvbmWs9Mv65t9vU5N2waFkp96GjMpeotWxQvg7NWQXBs7JSaKKtM",
  "key30": "3wXS62YLUEfWxeB2bYGBehevGpgzS3tsT5i6ByC57mjueWgBgZrHSdkABRYDMJJt3jLtuZtQx9sL4cdg9X8Rw4Nv"
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
