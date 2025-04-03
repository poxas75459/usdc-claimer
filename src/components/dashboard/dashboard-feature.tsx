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
    "4XC5huQxwJbojvbvXawuXv9KnEjvjUCtePjbv2JH8QM8DzXY7jgof3Sr18VP3Y1ZDmEASFNPRAirY1D5x15byiGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65dPNCLoQcBmJtSuawGPs56wwuDFgTdxF7hc2YgWvq5hiVhzi76oJUp6tJwbxkNDXyuqbqbZfWUD3Vvq1cFa6fGk",
  "key1": "2eEmLbf333nNDNpz78ob7PzaLCWJ4mBPK5F1fkvdBvewDJnv3pbzNhthonxx2ktPiuLbrmhs7sXkdAzU49dDbFH1",
  "key2": "5jT16KaLPJze2dJRLo6yyZcwZe3V2LZCtPP4YsRVXhJYMFiv7GJgkewKgECjMAqW8DfQuCiqLZFQLtCNBSm7uLJi",
  "key3": "2RfWkvuUUcuAzAQVUyw7m5YW66QqAFuw3zCaCyU5kbXkU1y3MhnHEkUSt2MkLbn4mW1yPxHr1sfmnssv8mBsB2ty",
  "key4": "3rZ3Yvso77QMsHboZ9dnZxMcKR6vENSHNCaRnhSMYYkaVBDfs1SiU5SyeGLrwuyxrCCzhCKxuFxmdPyZWpisC3eM",
  "key5": "2N8m23iGAxyBxCHjBEDCa1EyxNGCELdF1y7cXepWaRMZ7B6NiLWi1DpsLYmVTSMnBBasxb3RUxKSgHPYbhMmxMSt",
  "key6": "iA78kzfvZPw9bbenioo3p646TC5QxMjwEbriiarqfgGt7cw8MUTzC6hZqpxpQwdegZM2wqjQJBpJQGPg963vPUv",
  "key7": "5wMtL47y3Ugpkz3iMYAapPsPfkjm8xyoLk4fXbfBPxVpex2SrPwBymDDNom9B3BX8wotvWaXMWP9MB4aYE9AZng6",
  "key8": "3ZCi3ZRyGe1EwrfJX81pNGg99or1PpZbv2VVkbm47ofh1CfjyzWCA6SndUfkeircrtVersjLr6T78i3ifyp8Ri7n",
  "key9": "bqPiR8gcUwQ9XKhqsFENaNxrrLLwSpWETahwHkgC3HVHkaR4v2kbaUEC5EwuJKegSJsntiTWjuFhP5vrdNhY4M2",
  "key10": "iR33Hqqbd3GYuo11AMRShDYoueDVNRPFqBA4sqmMCWoNSVHJC5YtqTBTgxn22jSaQ4jULfuT9zKTHzYfEjbQUAa",
  "key11": "4GCpCu4vQ3efRm8tZzViBZt4TNXEUHhWiowkUGHX1er5v9fDHdUX5N4QchsEQEa6p3bSbFeDUumdvzrwn13Zm8sj",
  "key12": "2UjGdQoPH6rRRWuhYFhfTfa24zZhJTqRvtNw8ybcFrUR5kQPe1qpnZv28eENc514Teng7H6ZYtfkxnPShPe6NRMU",
  "key13": "3eQkXyL286AZDAR9Ku9CEaAMwrPan5jXj4Ln6gvnnimsc9X54XVhnHdaVnSSkTnU6jtEsA8PGmQwvh4UBMG6FaMA",
  "key14": "3gmppE16fGJcyywNYQJhoMh7D9YqLEAtmNXu7VHJxT25dSYFBtCSFCjuQ5u7A9VwFgiVHM6unFACuRuqvm9rngLN",
  "key15": "CwRuJVdfoBYU3KSy67NQMgYP9jnDQ3AYsPrQtLhnpLYtQsMuiZcc63WzvUT2bPZhgQY2vcXB1m86WQ2GEbCm5m9",
  "key16": "X7YeZnKZ8z125nXANoDRK93tLikSykW4XsXRFLWwZPsf22yAHYJzyrNemw9YjQVwXx5sB5qr1isZbH5JAjA2DKH",
  "key17": "5eGN9Un3DuKno6KM8oCBd1gyykDM9QNuMTSn3zNFysNxUD8azq6PPoFZ39xTBxvuZPDADhmdLGy3aJoe8r3azsW1",
  "key18": "4WN8bCmAG8pXfKQz9Vm7ueuN9wqXYSeokLKe9hbHFQop8o1xtbYwuFnr9HifuY578AX843pJR8DzrH6BXHXsZ1bL",
  "key19": "3QKfijcnjGfy5t6SftuFEKtkAav9f19NgjYHiD4pHYxFZ3L2Jzt3wk3hco7xZ1anGvFvNdNucQccG7DwrHZTwW5B",
  "key20": "2kN3GrLQr1v392Uoe9Pozj5dYkwBLBy4A2uNenAjC6s5RTsCV3o41QkS7eeNGQM9ZfKizqeva2ZMQBPXma8ZZFYb",
  "key21": "2ojanES9FmLp979sdmRVGfZ9gxcuWD2ksvZKaf9JYbzuDLjNJ8YGzHP2yWMUwWnJZ7TbRTrNeZLSg1npxU7HJgVy",
  "key22": "3EZ74cRKY6b1ghqy2UqeSEk4gn4So25jH2KdC4sZxSQgV6gMwq3Kv3Lqmr2y7WvrCfzW7idzCFWJ9ts72qUskAGQ",
  "key23": "2XvqYnWYmqt5JgYW96JzaCYKKLMhNb5CZw7AeHzpKHAZiaoEuYdPCw6kNcTVvoQ7qPgj6d1FPLDfZqV8rEoDBYhK",
  "key24": "3LGKCMzy1h93CRozDiy9k43fYhWBHsXM5RjrAjrnwEHBGxe869hSDe7i7CNArnmeAhjhsGUzwF6gc485fPSidBwW",
  "key25": "pbdzpmCXiG4jWBftu2zRQEuCvPTG3g1KGKKuXsVWoWQyzP5n9mMpU2eS6phGyEfC2egbn62qrUDzbBzrHU8fdMx"
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
