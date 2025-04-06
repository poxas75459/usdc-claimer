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
    "2JuLqkKMXrK1WYZh5toJXzvimhM3LtqGjmwUwsb7FCXmMsmrUU1JfjztH1xeEzbxbxViDiND5MuQLFX9bp4TCEug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzYLZpDH4tY1UjuFCFyTSWKr1CypDPhxNBwCGZBNQXQfn2qQSRS5VcdYTD9EtV7Ne8tBtK3Kcmw43ZKJuKH5zns",
  "key1": "5giHzchcacxJaexHcZKtoGob1cc3agodBCTHGGXNiji4V8zvgEiS9Fs2eqreU8JJGGt4NGLYDPBgfirMvUhUKoof",
  "key2": "tfGq5cVeGdGf2XW9yZxdZi3kVhUVEnTW7EGJLU7DBhE8bDieWbVPMZrR8BALUa5mgR54nCZikbqkxkcq1NxkwNS",
  "key3": "25KEU8cbHJuCWGBXBjzHynzuotrgtrZXjMKkrW9DNccF8gah8bgJUv6AZvcEXD2dtCWbwapvJDYJmT9dBYw3Gubw",
  "key4": "2UjKHsqLpNKPvxuvNLqL3La5iKDK71chcyXmibjLBVGaq5KEZmJVYircaXYYENeQYTqS8m2cAtDWptCGMpfQP9qU",
  "key5": "3qbGmY5hysRFRx3TAYDduxC7MjkLeH81yu29ww7GGEyA4uAXLxwJXfVVBLLfRkENu2Z3y2Ugyhscjfhw2BDmTiHc",
  "key6": "3URz3bhxBEUf6rojbhnZTRQ7rmzYazS66Ctfjrbn65u4SAZfa6KgxKCzV5BpgPFcf5CAeSRFqWQKdnsJbdK12Zvk",
  "key7": "37PrxMU8JUWfUm2fd367Y5ZscF1n9pn4qVxBSymbBUPubgMPN21i56znV7JfNLJ9aQ2H2VM7Xeoq9vPqux4r4yYr",
  "key8": "54ARmqi9MEyeY12D7TtNLAa3f3vxvTKEkkbPQCfqmiUuJ7xppeAJDhnzzpJdkfanhG5WyuGDQSoGhEhNBBj7jS6Y",
  "key9": "5xpgkJc3v5SU2m2aRx32HNDfBMakZc7FqZPZcoFsHfUNyW1gizMpkwS8zZKwqGKwMA7h85i7Sdm6o81DUkuAaoDE",
  "key10": "5L3dJYyx8pkumHpxHU4QZwLwqmr8yipw57vMBGNuqRwBa1Y3AyqnZHCL7njnoG7FxCKq1e3gUpRPougi7tCVhDUK",
  "key11": "ax3LLXkoLm4m476hTCaQGLwMJJBXKm9B6v75J9bDMbDcm4h6G2fetUrDP88EqXczg65ssYqVfNvpUXDsJopFaK9",
  "key12": "2K3MdbxNmofMhffK3bW2fzxyQBjpmXagZuNp2Fuet9gsqHAxx7TUfrUTvgEMTHtSK3ia3o6XtkALZsJKj6mzP2wZ",
  "key13": "3DuK6BPqBTgUTMysMgqwn21zuUnLsh3aSMS6NnZeHDZ6CyvAhiURCmT72VdrwSFVvUCnJGCnYsRESPZFrF3UEvT9",
  "key14": "2m8f8BnmN6NPg9mPmLFc8yqy5sJuafZZ4EbKggWV4hZKUM1zBEx4UzpfbcrxuL7vpFVbRNM6h9UaBBdnyMZuT38v",
  "key15": "369EhzKbAuDD3e4bZzG6aEZXoByd8o6WuEBmTXEpxDaZJgEQUfsUnNv7D6mH17a6drKtD1b3KMBkWts51sgm1SCs",
  "key16": "5PDnrTE73tamP7afVY6UYx8Hi9bjNdfGKRSKfwcyF8ksLVYJi8s45BTPWvZuAtFuzCd6gBtBQDMuHF6Tdfon12AJ",
  "key17": "5Uj7KqmD55eEp5C8edqVNCN2WVddXRvCpJdhuV8SW726p6ZZxkzx3EEacyaxdju6FLRxXksVsqZJx4pYFcMkp4Zc",
  "key18": "3cZnnMu6MtZv79v5ERYbAfv3RR3xUTgLMsVmsvCQApJt7ziXVbGbt217ARx29wtQLiJxxjJYMmHf4YF3BodqYids",
  "key19": "4kEfBRG4urZuadfHZDkwnLvyo3YBWZq2erZN6RiiYACi3E2Hh5XNc9JY1qrQ9wUPz2eTyGWBybFkVeMn3VBdBGi1",
  "key20": "2od1BJhJZKPjmWdjXiLPeM58XspyhJe7cWXaQUVmJJJiuygDQqXxxxS6cL1u4NuV7q3J8qiVnqX4qSpxeEexZ98J",
  "key21": "2tdN7RG4YreCdVa4ihiPemYf7FR6tsKq4eqszcGHWfLwWNRMnxXprH7Po5NgkW8vkXZFaz7cvKooRH8ns2it7dXM",
  "key22": "49pJGFPUftmL1peN7PDYBHAV15G5iCNfa83n3ScLDwUHFoBM3iKJeyJR138qEhtSpg7QYiWMDdtU2JkN7k3n8cuA",
  "key23": "4rLPJtxK41bEUwAzn6Qp5g2mwdFjwmDTtRZtCGf5Gq1SqNav7MgHJ55CRkSLbudUCp3FDF4escx8BTexWtYG2hj2",
  "key24": "5dEEZp8A4qiJnm8oUx4N27irNmPLwkQSyJfop7juMV2RPv5rKLSjcnEkQeboKjm83ZwQgvZR9xRE8yUoCvH9z3UC",
  "key25": "5c1DKpRBYhboaYDhFVTqkWkiz6ZXQJ28kGqcemMBK7P12saHdAa5KvF2gUXBKCDLUwnrWX2yPaWpbk8FiNE8rimb",
  "key26": "4ccTmcv567PY9CWk1a8iaCk9SjJDTm1WGFtenTts5unRu3B2RJfsbVbF4x9cFZipueYQKvw8mUn6b3BEL5kYtT89",
  "key27": "372LMy1PxYc5Pro37DcxeXUWEqhVEQQfbXFgxNpsGhpiY26T9n9QDarMZ6fp7Rpp7zQ34Pswo6adL9D9xUd75TAz",
  "key28": "2uputiWZQPvTJUE9ivzUGWvTTnn5qk6qSqajBNur2FjA2jddcQHrm4gqubmjx5UG58dADSb3F3fHPgaJwt5aGKtb",
  "key29": "5crjD9WSKNafVQEVetEcgz5Mzf1hvULdXy1ZkgttBzm3fst1EtAN8235g8dDWDDmArd8hai4irBsH8fTbHj4VuA7"
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
