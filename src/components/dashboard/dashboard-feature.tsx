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
    "kNvh7ERJLzjzi9gwej9eA5wWSXUYpeVLPt39vhvLcoSrMoxHVgB6YykEWXP82WJC3J6s9birn8CzTr6k2XEbSYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29yTbetvMBcuhbeKtG7reHDpRC6gxppNxDRwCSCiAVVazq4qVcGuMxqKkT7P4mC1JZd822jgRGsGwdruPmBQ8bVe",
  "key1": "4MBmNKyC92zGCbVLRBUX21xBXAwtieXsk45wkdk8gZv8PZR8MehZkdQp7YLpMwqo5QtsDrirbmqKqcakpZZANN3p",
  "key2": "3C31RvsUAFv4QzyjK6FFUZC3ZmF94RUuViCxLLV3T6k7qMvC3RJEvdLwXreCE6yRwSqkwsTU4aLV1UkEdedo5hYn",
  "key3": "3GnNUY8CKBtikyFWiDwZiyiBKuzUomcyb6AJ2xXPPPNRYFAnfDcHNv5rVX76SkDTHRMgveZ3hZqwJwRHp4Us8hCF",
  "key4": "31FVwKhc6NcKW22cSh4Y6E4ktdNq8bs6j4Nb3fstusdmCyqQysaW5NbxNRXLhZqARMfE6w4FuSCJDUPC2FoYu1gt",
  "key5": "2oDd2UoQWQMQXE4SDh19cWCZw7HZBrNTzNSaaRkQKxpQKKQrheapZKnLE9KhkHqwmPCZ2uPyv8V2CC8EXdFCjsYY",
  "key6": "2jLR5D719eqH55LAjs1CASyDyCJ7HHpLkn8Po57bFfVdbN7SpHFTncmv6wjRwCsza7NgCKAhaK5xxRHLj2Ud1oJg",
  "key7": "4mKkPx4yRyp5zyvkJ9tHqgLyFaS77mM2DAGuJYHNAwvdaJQLKT1ri1Z3yXHyPxpTfhRVGBn1csbqsHLG6qFSrPXY",
  "key8": "4XXeeAMrU1B2Y6o3ExiHri5nr1zha7CNUZU2KNrxB4UXX53DrTUVAoKr8ohRy9ADvXAkq5wTkgSxiRPyC5YWqT5J",
  "key9": "5JzVT5RRQt3RFgoRTjoiqqkrzAFpZXpB4ZaLjUe53sKxaht5zK2QFT4fzHCiG2GRBjbicKompuSV6jRZF1sFCGca",
  "key10": "3DGdPDAXsyrGgQkDtgT37JQbQE9tm9YPEyTYiAc7pbXNnbbR5M26n3CrBmzFHJawYdh7txKtt7XJov6nzfPyye7n",
  "key11": "4t3fdUYb8M8vNdYsHDFTSU3S1MKfQpJbp9KZWQSmhvtw3UMJtPQ2yb7ZmjK9fS64RYPj7oj6zG2DfoG2jefD1iH8",
  "key12": "3KHXzCYoeheNkBahGgTNhJ3bxUcrtYxXUiNF14QXMVVX8krDmbnvU48CzdpZdF6bpMfH5RrJrUKokYTQi1WWfh7P",
  "key13": "5JjqmYCUV5En6Ts7h8Rc3aFwmTn3cvk8dQEzSjKBjqBxWc3AAtkvQYaA5h4oH9AmaYGtKjiSFZDTggZQr69ZLWox",
  "key14": "3NVpGh9BWDMjXJwXZUeqxzDYQ5Y5pHTxTEFvR6vKDxSyLmwtNkhkTxt1d6BgG2zC21Kip4dpWTpZe1aYnxou5CQf",
  "key15": "2TmskyK5epyTdoy9zemkSfSxWGEkiPTS6kp3SkyQtMmfCMwFwsyNWJL6uUHAg9q6Up2UAYDnmuu1JYeScxZFNuWX",
  "key16": "44VJMYvRW9Bup8B3PtLXEJvsoW3gTD2mBbmXmhMEzmKmj2wTPLdLMAAGEXkkdhkzpwSHfBRYLt4inMLVjNMmWnEW",
  "key17": "5ChJ6Yo19w1XZzDZN6FNKyfRRWcW9cwZvjmXtLMq4e9G6AptNrZ3D76Rvduv6nhvbUTQx36SSKdsitZ6hRTgvRxR",
  "key18": "3L4Hu3E35YoiY6A4KopugGRwFptFfyWNkNu3bqb8dhdKKg6gjuNrLBs3nLHUsxkfLEtUvh9EetQxjHK7QAv8493H",
  "key19": "4ads12jS8MQokgMAgyjy4vJfDjdk8ztAzLRP27Q8Mu8tKHeMhEuCfKJaS7jwoh37kG1SzTjrHjmN3n1mX8uKoc9F",
  "key20": "4JZsJXsimUYjDRPKcZjEDSemMeobcUD6L5RMRaAbTz4gbe9ByHduEmtACqH2bQdQtqUrdVJu1B6FmBMHXskqMLZj",
  "key21": "2BzpQYhu3QoGKcyG9myR2rtyLF5PLDt5fqoWpMEKEhQe99hXfosDit3xuez9yHmW7cPDggCydbpuwqHaWLs39VgE",
  "key22": "2eMei1AF2moHcCtVtrLk2vc8zcjmmDTKwA5yyP4mtUmgJrbfiS4nJmPnHYCrsd4pcc9LQMbYrK5FLNMepbX4zBNh",
  "key23": "3vdhM9SHWS4QbEQdYmVeJixj2mWVyRM6v3o1as5yxVdeWQB1YhSp4dF3FcQZB8tQVYhuQ5nsgiSXbq7qfKMquDEp",
  "key24": "4nEg3wRXYbtjpYdwMinPxw5G1MJSyBaeK8GQqK2sWq2toNWnhBpVsCJU9P1NPpZCp51g7EeMq2YaNFeSYVh8RbgJ",
  "key25": "4M8pNVer2NqraA3vYEnJUdV6GWhcSDqkw3769fRDRSWPYdnaszLJFK9ePcizvhXZu8gNnfDXqmUt5fGL5GgSW7rE",
  "key26": "5gU2ev38R2fLkAEJS5RU2pz1wtwmeKyNetuM7ZscGUpDqf3PKFEpdTW915WXuD6zCxbxrfGZzQxNpDKfoNa4Pje2",
  "key27": "2iTfrgEhAebD9pzqcr69ahgRPu4yvwMUKp8CM828nC36FkS9fskAK2DYZSMSSb4hEbs5iWj5xn2qt8h2wfiUv78n",
  "key28": "4heScGQKJ3TmCRgVvtXKw9HjYdPb2EuKQTCD98aQ4jPYRV3Z8nRSN3NrVCvHwF4tbcYrJHKANMEjL9MMVk6kTSTV",
  "key29": "5MLmS45GccGeD7UdWsEDcX4Q574zsJUXyA6JcCv7gQpmHeysa9327cbSPw3aVmYBiSL3aZ1aN1rHNkvcq4BEWiJ5",
  "key30": "46cbiQEDNkumRmeykKog7tkXgsFY4hJcx5hATHWzSCr4iiRuMxjkrqfwbQhnKo9kBbPna7uPgQtVwKwQksEzk6HK",
  "key31": "2VSc8fLmfDUD97VqMeh2bFFXYze4rhFxxhCxuujDKhNZLqhHnzHE9TJscQw6qg6K5jaYDXHnjYtshr1ACDZYQ4Ha",
  "key32": "2uWesi97ZLifTwdVe3RqeCmVLCj1dXDzxUozuRcUYynj7edpbRKAy46VHQ2SgKNL5vwazpqkCZBgF2cNjgoo5RK8",
  "key33": "4P8sw32BT23fz24tEgFHdEjtZq5RWjnnd87u749YcXRLV72xcGgvCSmXomsWTsvGmA8LYpuyX6FUm47hbwRp9bAo"
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
