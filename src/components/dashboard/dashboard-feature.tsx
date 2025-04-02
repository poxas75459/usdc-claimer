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
    "2JpNxVwe6SrN5wJLwqLzzvwosPoaoANHybAMmBVhgXSiqVU2HvL29EA9X3icSjXur5hb6Rd43LxBKEYKvor7ycG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rtn9boNmTG2Pxs1vPxWWM69KdU1EZSVvnbNtT7TM2DSSdt9cNx4Q188aTktGNr7M6DpKGTByKBhMKp5rLZeJvDv",
  "key1": "5bozcxQEAH1XXPaY1WRe5XScbHdxTHrjpsa82ehtQNunHxGgCQtHEbMjzhcPQxcJWnemsi2X3vkgX8RPM3buP847",
  "key2": "2UiEYdhEupfVXyWLhsVqnvHm6eGZUPXGnHQLtfd37BtnNSgVzXxymfzMDvHUWNXYysm6yXy73qoErokMYqXaDVFr",
  "key3": "3yvC11W4TkatLQnpC6rKDJfUGAgp58DTy3bRwXdN23SRbJG5yR3fhdi64tEhsPhLEpEo1uTkg2B8Z8tAoEB3e5eT",
  "key4": "3tpYVmsgv7wNUzqYK1Dzb2zVLSNeTdH7nLWUiBXmjqtmJBhh5FwZ6WgV4PufuLsjL7p9BVPt3iM3SwiY5SY7wD7m",
  "key5": "4mghoMfsVxT6tCaDC6jMD6bwxmiY9mzyK5N13TX9uDf1e7Abo15m818xhoKqchuFqr1qKePBZTeiZZUhcKpDuV87",
  "key6": "3uyKbmMdbjjHcmpA6HS8RnfhBaDEHxR1zmvwacyTFvYR8gu8u6oqkhQ7n1KBfHwcGyVgQ7pJWeVCkn2GPUjcVZZ5",
  "key7": "4ehre5kePfQ6RQPDqDhmjErCvMCaCuosVAKSns5cGy7jm9qKAo94gpbR7cf1VghyQVjUd8UF3iEsWKnjeQqxdNNi",
  "key8": "5UfaZ3z6oNSuvwHvkZvygJkExw8tCwtAcq62jStkT8bLmxLdYLB4vhLaoDx46mUcxhaHiyPizMAq6W2X4TCH1k4C",
  "key9": "4x4iQCViwrZMsZzjGV3EC6qPyUurXX9aDKJh6zosPmPH2NpujvW3hgpinZNhQcZ2TA17DvLxDrnyx7GqJVDvzGsi",
  "key10": "2CqxK7qLiCLLr4K48e9TC9qTH4jqq8wP8sHfWzGaKs7HZZs26bNLR37fNFgdmkXyyRJJkDzBLLnrjrKqvAXhD17G",
  "key11": "23de6DdmFbnHq3UGLyozLYS18dY9wziPCuFHEvXbDtDajTvwpHXAMaf5cCK3RWwZza2J9kw5W1LtFhNojWPqAWir",
  "key12": "2qjKdmwixPH4njHNvGqzimyKSBgf2XhbPSaQ7u6rNW2LyW2Gi6mundKvuiP1xWuEzxtYZWRz79Cwt7FixQ4UQzaY",
  "key13": "5fXuzaWyeErrZkUpDyubnH1xfPWptBr9JX3ScvtiQZoi4htTgwCJ7yuV2XPF5cPPsEPFdygEyfxqr1HuY9HGph4",
  "key14": "5UEY8Y3UrNz9GkMYXx3rif74aEHu8zKxrRzKmSfnvQpZjwLWJjyEoDaYNkPcFXD4cwtpXNXhx9Tftp1RCY8U38Lw",
  "key15": "5DmNbRH98rQa5SNcL4Y4Cumum7aqhMi6U1Hcuwsz6EYdw2YfuGXyzHXfFW2E8UBQQt1o9NE3A12xttNipbNyeqfS",
  "key16": "5hrfyous8ud3Vhfmznzimu14ohMsVgnZUSKtgkbKYvKgrdB9oAe7ZxoAW87DahAwdQ1Pm3h5xFgex3u1kUeFMS2h",
  "key17": "4MA3xFhPkygMpwXVYSgzmdu69Jf1R8T6kSb2LX7JtKaqBxLNtCikpiNfos4H8guDRHLQfTg8VMHDmxZu2qSjDrP5",
  "key18": "2QdZbNLR3RsfHFQuSNah7Nj5cGqXdYbsnKB9hZJLvP6JYqEkLc8SphvG2tnCLwuBePpoMEuAn9N3eyy2VDBned4K",
  "key19": "e1AQnS1haCxdcH6gydDHR2dv526KLFBCWx23SRsCHc6Bmsdp23NC1REoqr2XeQM3ef5hdcwXwJXda4NWCKoUPFw",
  "key20": "3HuoTHSh3H1PHE6DXNZ2thZ99gckjdzUXM4arsCbPwqdjEppwzHUwT6fnZ179ZgBr71HPxeuJRMHvgJceBFVJHF5",
  "key21": "GHGYFgT6QdV2oVJ6g8CVXhF7QKNg9s76maKbPcWinJPTfcUZtPqezevSS55W83JrqvwY6pvV1boDoDfPLJSfMfy",
  "key22": "xvv6qFXV56QrKBDidyddeLZPmx6Vw9wKB3rySWN1M1dgZoPnKTbqePmfPNRUYY1dvKiWJmgJrQXq9b9BEvz5wzJ",
  "key23": "5HxKZs9MBEaa9MbpnHu1FooAcCXCy6M8J7y7JQqmSrjH988eD6K1j6td17V4TUUyN6tuGDHopyh7gjCM7vpkFcBJ",
  "key24": "4tYM31VoX5knWwC7HnyNijfstv3v67ZZ8YTUXxZvuBoQWPGBdHGTzjXzCcMbc3nDtRtuijiN6ETGf8zYV2oRucJw",
  "key25": "4h6wbF1Xf5qfMHvPA75oNgRuaRSrDdSBRFrMcrhPYLYiW7WyCVi1ikBFoPCboBdag1hJRdtXDpsid9wpVxbHoCzJ",
  "key26": "3QgKQ6VqXbFCUv2xa1nyYj3zgxJoumJ9RcMFKHgT4NUwVPCrJ9AoDWCR5Egf7YrxpHmAyjeujqNnry3P1Q13ZjXi",
  "key27": "4BiC3RtaEpaocFwzogRmQKjFWQvSYKajPAwXgotwfY6KUQ1z5p1a1kLyPLtMsoayejrcryL8YSgmdqZURA13E8jL",
  "key28": "2PNDhHgb6XA3txyJLeX7ydcWAJoskMPT4bFMWSS5UX37EMDgPRXcABzu1DNzzZiyMwT2VfywUaWPf5uSTeSgTU2Z",
  "key29": "46nfqm6mUvaxHE63JcudLanh86BnJ6JocbMfGCpp76Zf9WcVA3qWkcdYfqn8oeMfKCFBK5FwMK5kjx3tar9zoAc3",
  "key30": "23YjpNq79hF6ppY5RxZPWqh49G4dpXwsmBgzjvhN8MVKNDUy1HV55UkwateNwesFFPZi8jh7FpBsamQrkYMw6iyF",
  "key31": "3SF1jJYFXDy4i6MmLTkkSnAaJCxKJep7PJvKv9cXT7eWSasN2LufxYYpGxZ4PdVsPpNekQGJ9EAvPEiufbJ5smwZ",
  "key32": "2GqRyyLciXLdbBmcWYmgWfv6ouTfmcsdopD6P3oniv8GxDKYnbU5s65UUSSovndvCj6aBpck8CWBobpGDuMkBpNX"
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
