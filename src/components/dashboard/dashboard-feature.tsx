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
    "4qC8W5G9Znqspdue2ieTUTa8aRoHRh6J3J6H4t4yWNQ6n9MAZ2Vi7xD1TRk337EqH937sLe8ELGeKQ7BcY2vW7FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HkwVmbEt7FAALG295kwRxJvz4S33We5yHvqTaZft1wxccAeeymiLc2SL4jDc5zm6R4Ymc9vFAhqtbDjGmWH7nDu",
  "key1": "2diZtEXbDDTC6AkyvKduyHv1NhUo9YTTad3wiaHGfKwfwYhBCyx14YU9ZLSkLTDkPDKX3kMKBLDC8QpDMmy7387a",
  "key2": "2kpw51cieVTqGj8D11PxNKbsgyitkha8GUFufBFw3MreRehkFXvN69kPGw5r6NF4nyXdDDDKC7CRb4dzAyQVBhso",
  "key3": "5tX88SstVHW3GhJWE6cji4EjT4PT6nbhqNmgXE1AT7bWAGd2fukhx3ADLY7sQKfxDVrUxJrvbiVFQew44X8zMSxu",
  "key4": "5PxBgpeNWhXccCyCvZTvMXyiEDUi7UNdqE8fqeGxp2aWaVMPMDiQiRgUBDbTY9cRbCF4nnMLMToZNsmBoRkq7N3c",
  "key5": "TMB1wQQVjYGD47TMqzx7JVVPvt4w42rA9PBwPVaWfzpBkDHtRUre1nNyKkSzQq4JTB6HRvrxEvW4hpA6aQezr3b",
  "key6": "AifWAqjgqgoBuG3rG95EmMNbeVyX43ifbc1VXPBSkfj7BQwZffGULPYpE7qzJLaYMrrgYmYPdACGda4rwMKz3cX",
  "key7": "65DqT9DVVfrDntrQgEAh4UdfrmNkTNtKq6ACkbNVHzgKMaCZnCKYKmhPWCUtJS8jfdq879XrdiARj9XoE6s8SKNP",
  "key8": "AR47CrjUXwUTgPxFXU5jt6JwVS1cfBAZzmyd3npsNGLwguSeX84scZNkfR7yqxDLjo6pFr8bFqtV39Cgy3EJE3y",
  "key9": "5HhiTycSPRRMzbgtoZzFKdpMCLXv7FwKPqyPj8uyvJjcsu9TK6mVeovTAFaYSrK51NbR34QehYtf3AqeWER3Xx6S",
  "key10": "2XaRy38Rg7N8FNugSxczPTcvVgnpK3CBJ8KnQKAwPWqjsdYWwHkGva3qs5mq7LshMJ7reS11xRr5Up3UrjyA4DHu",
  "key11": "25ejH9apMqCjdZegmEykKAmXpUuJQGBuuxGFJcBNY8n6nnm8CBFx8ScPdGMrJnivERFU2NZPrNnU5DgskCYT3NR3",
  "key12": "5pT7VmR5JZk7nC4KtANz7RmCQckEahstP5JxFZMvxaSRMF3MSyFzzWJJtSuiAGhFqTsRxDtMsrGrPDrPk8Ls3LcN",
  "key13": "5uzNV6NJXUFHEFaKhL2X6MgANqjgpUcEsFYMoVQ94mh1jcxDkKqcjqTxC51ppwVy9VszEf3AWhCjUkd249gJDiL2",
  "key14": "24tPGFkSyytqQdgdwcDn1UC7HNoAJ45f7quYVsemTjUr9RXwqNcD2bG44BBeiNnjiYtSog9EyjXyKJpUJA7rgXqH",
  "key15": "46jTEcEKa4hcmc3DqT6WqxA7r1j8dLetLPCpKoQdAWtgCe5bK9aiMydLguaumPDka6W1uu7YPTUe3m89g463TNEh",
  "key16": "4oMiFMQ92FrABymQ2dDdHQm7YHfVEmDVfKp33vujLJKNrRBzxeV2dGLx7EaZtjT2BGaoLcg4KTfhk7Z9MsKpWkHE",
  "key17": "eHk5psYiNsddZcNq2QN92mh1AZ6B7KADd2NinddfKF6UQifAMS9vr7B2sMXgSqKrTuuUKnuKBkhWocBfXmKUzMV",
  "key18": "63EUqx64Ai3PcL1xE1v53ks2mECvAfFUqbPagmtRcnQf1yrkeJPYCeqDG2mEzfU11t6qyJjLsTw8k4MbKV6g5JTG",
  "key19": "61AX5hTP3nR9vNgDSvxaHkdtzyAZTBez6Yx2idHuiwfERXrAbmsBPPpz2KFaATaWtwk4gnU47nhjbPEL4t6SkcsC",
  "key20": "2X7xk6C2fxUUMCEmn5pcCSaoARaAGS4Wc4eeW8pWuYbvWeqvD7y1ipZhSWjGHNGRSXNsWv1Cmm2yfNrf6equUVwL",
  "key21": "3cgHsYk11vaWN5ymJRMEjLoHr9JH8wW8AoqMFoAMjV16JsgJx9a9UTD3CBw9Nz1UGtit8GrjueDijs5N3jeMLAq1",
  "key22": "4ZEHcKZtx13TZwV1R2q8mPkDVL5M3jsE4kSPboPTfsekP1dx7q3Un3YBa7xDpoiBEPUe2YVbjFR53xfBvzPUyj9a",
  "key23": "67MreF15UpjXM6DWLNXEUdsK36ovXY9DBZQsy47puT8LtRD43HwrcV5aEUSv8fE3UdHEfzoGUBi7QNL9fV1uZ5e1",
  "key24": "45hD4nNM4gV7rEQMHvuv2c2c22uGqEPdn2Fw1QEa3e5N9oC6X9TbnQpugsgmQJJxyJVrNougfJKUN1ftDXMopT4F",
  "key25": "2x3XkvA19EKJ5aCqEMZo19sgwsykK2ToxyGRnQBuMbUEDKSdc8iNRE95XEvbL9m9FMtCubJ1UVRRV3QRf5tvKrqp",
  "key26": "2XpZyDpbGDvW19UEZ1JyGGxtaiLhAi6882DpZLsFvUbeW619HSPa341UktqvamKrd4u9s29bzB3fjiccy74Q7jo4",
  "key27": "2sjMuQtHtUgixx3mx8v4ARHuEH3LRESGWVYRSswSJo9ECpDUBaFjyXSS7PxoR9eYTTMY7kZ7i15bo229ZCuCmdhJ",
  "key28": "3Wu1x8bm3PDCRWA7t8Bpy72FwAhJkCzFNCAXBATtDwNXCsNHNW1vViM7aGSJZpEXZvRYSa2TqWwDZcfSzjdaFS5v",
  "key29": "263m3YNRGHopjaA9WA5mKrve4PyEoEMt1NnveGQDN6NJ3ih6TcQkGmkMgS83pPDhw5dWCV8SrKat8Yf51whUDX99",
  "key30": "2obYDDW9HppUQjWnFiNdLgEqFtmmDzG65KfhjLDk4rjDVUjMnpbbSTiBSqi2XPNcEn1BzEohgLiNQDTdbvgpm5CC",
  "key31": "4whLTGtj79A8TijLihFFN4dQFTcgjQP5NHCtCwTPXWdxTrgK1G5yhdkoZaLurfsUGL7ixKYr4dJpEpRaMc5tdU3G",
  "key32": "3zEBqWDoHgoq5d6VqtX5mi8xa7YvGS9yN2cwfJ6bjyfoJQ2kYvkkhwwgMQkHGYgscQb1BBGrcH8sfrSPmPfrduqv",
  "key33": "4acVZjvkSXXhnVgqx39qKe9o7bACRZu2rrZ3g12TUq6Bd5PEmEhR2tGizRTMoA1UKfbuXsr5CAqVjRgfw497SykA",
  "key34": "3FM1x9dsESVxLgBVc8xgXxkSwXMdZG4uXDLUpsnwi5WTtuRoA8jZChijSvocM6orXDeTtmUxegFYdQDbWUK9FzF4",
  "key35": "5ecMSSPg9DUwEbfoha4FG54vn21MTo3AePtGLTRs44dSJ8K2FrFCGSJv77paL7KNDBUm72tbYxS37uAcSYEj1mvk",
  "key36": "Zw9UWe5dRgUjP7TTaSr5HE2ooTvf6aXuXXv9NmYsYj3vXjecvBYR2zd5dQzLEZrv7iLxmeTWjerAdb7dYermQG8",
  "key37": "2gShNbVU4ESVu8JLUQt2aVyfMpDHEAkMGxEHwQ5XYBdHgef72WhDUu2sGXhiEEWGzqoz5uZYRbsytsr9qGYKCeiM",
  "key38": "3jUSyifpmUKUHFexi1ssLa3PVkSDzfmb4nf46oFDFaKu9d8JrCbPx7YJPyoz43eLc4F18fdN5urcYGgUuwBC51JH",
  "key39": "5wc7cvziGzLqsTNM2ZaXLGgT2uvfeTDZNVbuDXuybgk3rhi96C7eZ9M2WXKPynNeDzMXShEqyvB1dddfrBPp1urM",
  "key40": "2RNFQbDTpoddrYQLXFGzwPrFNpiiiomDQLAtNVRpzSabURvw8Q6GZiKRY2ZCQ9m7EFXoHCQsrc93m6ekta85pVpX"
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
