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
    "4Ami83av2aRKvFZcYf2pX2jouWG6Mrfpu6LxqohfTxtYJDmKMYEmcFfE7ek3boKx5z9QSbT8aDdxaiqzs92WqjYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dXv1qAjqkrsFpssUQ9igkhcBzP4NbY9RrRjngGz6PQqgpRLS6YCSeDrvb2E6CYK2DYdvgpHtesJs9Q5NJ12ugGQ",
  "key1": "3JUjtFm4d38eNCN5eWAthdLCCCHD3eqANfrz1J1V7KtLjHbQmm5K5mjYDAyDRgKWu4v2Z9bq42aTYRcbo6KjfASy",
  "key2": "5QyJCbdkHvzgtFqigJ7fkSJ6rRGvrTxziWDAkDMfS8vfky7HeALQJs1cT9qquRYJZWUzoZ3tfnEGt8VRiV3BAkt6",
  "key3": "5VP6PZ185Pb6TPMVF4MX9mzhRW5K8C3a4Bt4brv1YN53q2Sdp8jiM2o4d1A6XWSy4dymKymXtFTs78sBLdPMSkek",
  "key4": "3W7ZXkAhojgk32vB44NFp5L1nvKVviYujqSu1SqnEB5iYiFtmm81DqLPxnV335BGAeg3Ud8PWpUHm9EMLUjcaSvT",
  "key5": "2wurYHtDBinozuMpxJtN6kHd7foeV9v3nwnWqGFs1XKTfGPsAhUgZS6bX8Du14NTbCjfhWRWAPeiJfoytFEhZZHm",
  "key6": "4RJz168oFjgYvmiE8NqCikpg438dymWR28KETCZ3b8Qxx6dAdHYeapSptxdD41YZYLwRmQMca5cQSBDGVs1KAKCy",
  "key7": "4VGPbSGAwj9V58MDJbK6WjrozkGYECEZ6X1QMAwPSpsHa1bM6R4Wb5icGgvBxJo9Zthe2pMhMUEXpy7aCv2JgyTf",
  "key8": "64URE7QHmdZ8TqMXo6xzEVAfhYU9zS2TpFzLTP9RipW7efz3JuVidewc3GxTWKcKphmqAhpLqdCCr5xb4kZQXwEF",
  "key9": "2TCrrfezeCxvXLy1t5SnBhXWdWhbWyLdfq23xjgm7ePpfMxU1JZrTHomTXRsneLbzSmEBg613PXSatJ5LuHNSetk",
  "key10": "4kbaHUrSewUxh2tJyJ47fPTvexZVgy7NWjiniBaEyXMV1waSWmNihggYRBtQTzBni5SKcLKMGqw89JfsNWEAx82w",
  "key11": "62Kt7juwCTYYvskJyStxBwtwy5cNCxXyAkEaEiVnMcZsXe7r58TpDqNhfXsZwUZyCZ9Qq7oKWAEVVFrvX2JR3nwq",
  "key12": "31Jqtt9hRaMdq6XCAuRkYZHsQcdLYHHzzony1gZrwztPCK8MzmcQSBscXriBgQ8P1DEh56B2EpZizy7NwKM5un7m",
  "key13": "4Qaz5Vb86mrbRch6CWW2mfB4d56rT9qZCzZBLtyyobdASSPiuJUXnEQcnPFzX9qpujosE9ETSxgCVnC5wdcuUS7Z",
  "key14": "4PCk7Kphzxybhv6tSZciNGDcbYR9qrmddT6bnNzRnwkMtW2A9c53F19rjZ8KDCBRWE2AE6PHKJKUoGXvRHfzGDdB",
  "key15": "3wHssV8XPWmgvVbB5y4GvBBg5L9uGgztTCLbrVeWJMcwjYQwxt3pkJbijmhNJgWCg67nx2jmQTLBbk1aG4NxpZYM",
  "key16": "2U39f8NwDRTYGbMTJZKkqLnEiELhT1tjVq7moNnCyaQaMh7x7VctZPNbP2VvwhYD3RJStDDbipPbyvdGQQYzkbBK",
  "key17": "2KxmakmcL2gzv6goNq1ek5VbrJzzheoDwGRCZnYKtCp7cE7zdX21q2jKH23xQ8oEPeVjJQ7x5qAgoTLA7a4wTxQh",
  "key18": "5HmjjGgTYX2SyP8VALLdisegwqQdfNe5VyDcuiMCnkUDWjqVf4Jd2TF4sHBihKToMivLjKdLhCUdHPRQrb2UCSeZ",
  "key19": "iEjStjUQUNbv2Ligdx7eApCg4TawKw8KZGHSfR3AxHLMN4kTUyH4QE5jptk3Hzw1H32n8FfGUihus7NushyCeuk",
  "key20": "3bt1yA835ePWJYsi5ty364UPMewSRHe2xdMA1uutJ8BWdw6tcbvgeS83UM83WPkQzY6mdbfLFEVgeSKVvFZxxum6",
  "key21": "4KcFfyWzPhSm82PcgyEPin7cAE2r2Xjxe6wUfG88apbRH6TnCFcRyVhWp7csWZPuua72DAg1kFbzLmuA8CttpSYT",
  "key22": "7zdpzbSbQEE3LN6Bgc5ptmLKvZe153QnturTGCM9doY12mGSkp3f93N3zDowBJwv42cEL6FZnUeHJoysf5tspB3",
  "key23": "4cSXCdNPsrqsMB6EJKv7nsHKHHj177ds9rW651AhuUju1sAUDYfbYrs6fGXuEdUvQfbV8t68tyeEKceETB3BvVNJ",
  "key24": "3NJzi92iVHGTjLqVZbf2PsvtLQ1j1eGxgRzvLbmeN5yUNi5Mhoqz94sfzxiSQ8ykuPp8yUon2jhHC88YxutdfrPo",
  "key25": "4jqDz5FyVcdHcFYHe5aAFBgNSznMzeJ6ZnpUbHqV6AmqKX7apmsj3W5XpquHri3inzchBEiVjoB3YHAHRonWzFBD",
  "key26": "4ss6MEhxYDV5uAqPXnXq8GLCCaV7CV2AALCFayYQttgTh3vRyjqKK4P9mxmMw5gF1KGzRKnDeWaY2CGYQkoKCmse",
  "key27": "3Vjd2eHGq7yqNzcZYhppUmf5afUSM2uheDYezZWYNQdgbLrdd2ckcm7n44DSMMYdw5AbbQvcoj1rnWESYrjh8t3u",
  "key28": "52Q4pDdUb6qS3WhXvXicXCxugJaKJHJ8GC7AnB7C14MUBNmBpuBWHxiqNqtZVX84bCPCGMCCNoAriD8prj5Xa6Pw",
  "key29": "5XevdSHqVkNoRWKhj9fWHNHbBh51KhCy7vZrPyCkJbw2UcVFY45aazo7RKcy3VVWpCUoMZtkZkGpuYTtJqYzCpZC",
  "key30": "3YHfrxEtJEM5ttbdmgs5xPuKZWzvk55V8B3Q58KCW96ABowYrHMtrbxNS1Ee1L1r2vodnrSGQCqqFqZGTHSUm8us",
  "key31": "2o7fQhqy9ycXEY2d9q81qsHwZGV5TNm333heh8e2QPso7yzm3oNPNR7kpj8G1HsqEbto3P1zRNib5mYQW7YWVgrP",
  "key32": "4bBmyNqMC3ytDHKesasJLbrx5jZBAujYFHCK8KoZd7TEuEtvu51vdvspVtDzSCHyiv7nXQ1g8PH8bEBsa3zTefoT"
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
