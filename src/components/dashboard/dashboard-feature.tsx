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
    "3THHvjiCbFuzEGciVbpoBTp1Xa2bCEJXRhcpDkiSuyPeV66aG4RHEKAjsmequLS9hRt1b9zzcCfcB4nVJsumgQHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUHVHVdLQGm3fo6pfuxHJD5J9sQmjpnn49cUKY3F6iLGidicoDbn4EZNz66aYoDcrdptoZxmoNv3D8aEs26quqq",
  "key1": "3XTgGo8WSxNHNMii1vhRsmnionq8vEYaXvPFkFMjuWDLV3nnYbUiAMNgp2HcnnGJ8kDv8dAZuu5BZRyPaZHjZXyt",
  "key2": "vP9UCw7VqKM9WCNwcr6EzP2nRjJAdVYpxEfyLC2MS8FiZF6jupPwddW7xF6RHR4PbA6XUrSaTv7oqxMSQ1sk27b",
  "key3": "42f5CyzCZPixXx8R259DncZbqxhFpsk4wkonncfSF5g6yadrj4hX3eRGw5meLYKVJzFJ3AJ4Zk9bbTtFWMAfNMtg",
  "key4": "36QSvHfsZuGqwJVEXzMgkzwVxGekRNtiUzH6hWuVfqCWR2RBjWa78L1MeZreBEaxWfj8Xb1BSkhXd943fqKAowAJ",
  "key5": "DRzvtp7vMiYG3EMysCnZJ2WtBrLrnFsxycQXqw3sdeULSwGV36vjrA1AvzENdqaeVLNPqFgeqm8NB9XQH77z5SA",
  "key6": "5djahcmugpRRvCEjLx7LeRp16D69PosXPkN5YBbbnnLjQ8pGYoWg5frCf1NqhY32oiU7YK25oAX5s5Kuour535zC",
  "key7": "2DuNUWwn5q6Mgvu57YapRSic3nFxJhxqQSK65o9ECFxYeWtzynUf7MTbvMkvnwZCKkd67BwMwPgT2soC7jiPqZWy",
  "key8": "3Ug1yfW4CXXQzPHZA45F7ckQCnJYfSvundWNYJJ9ZAWmokFb5PAtpCRrTC4pEYnRv3KALrefvwm5aVooF1UHbSTU",
  "key9": "29ZfFDpuqcFXQarPMXNBLEStheKaS4t9Hsjn4jiVuYViwtTLvRxf2MbouDtP17HJAK5KDXAJqo4iatU7WnzP4zqa",
  "key10": "5SUC8ZqCwaEYzLdaqZLyrntYdJgDpLZY14qsc2GtBqwnho5ChubaNMWt5XpCzVcpDid8eou6be96K2r3PUZoKgLY",
  "key11": "4J8dFiFq5RwG9ZYhktVa8H9Bt2nb5dLXid7mGhAEfe883kB1dEpw9CnSa2Z2iShTHsvDj6Cm5ZgJGquN8aQxMqXB",
  "key12": "5n4AxdMGFdsRZf7zF7Vrb3rhrRGSsw4q2B46t1JGCWQonZcePcfGNDMnoBXCzgoz43FzgYuvmqBSzq8Uq6P8wQBo",
  "key13": "T51xRetTY11qCtEBpEjuJeXdJc8tPkYVygMyAd2PszYJ3W8nZQsM5jKzqyst7HrDGN1YYLNptTTc8ZjdxMiEBtr",
  "key14": "3QPqxiF3zBHKJdrqybS1TaxfVpbx6SFr63yRFcNUUn1XriQYSwzpDrDouAHVgQCm6LcRe32uypwbDCECsoX6uJ9B",
  "key15": "NcHGAyyh2oPU3ii2svUC1CKvtirDX5beuLEZ2z5jFEkjXQFfFPbQSoznUC7399zxMm3Hz6NRJpPf1jYQUwbKNhU",
  "key16": "5NUCmRYRvCyGpvKF37gMoNviB5pZNvrKh9TFr4wbmhF6McHg1oVgWcEjo9WKe8VTGJpx2LKvTQWQNjFz1sbAsDW4",
  "key17": "aZsB4t4cpZRfRdHh8GhuCsxmbMWMYeXrefYvAyoX3A2BWynF5svbbHCWYspEYtvmueDuThL1Zw1cSeGdbuvUk6F",
  "key18": "2d5yyCEtp5a7tdh6Pccbg9HW1ATimczjvAL2Px5o4CFi6pfuRijgrYkZgiKVqcUuyLvHTq5UMv8RBeRbxVivwxHS",
  "key19": "2aNDE2fcHCadYB84VqDRG2yGtPSYv6rbvNAGQj8trF1QPy2jKRDK1USRaRPNoRTYtVWxzsKoLGS14FGEAwS4VWWb",
  "key20": "sq6NpNseM7yEoYptpcXiv57YdkFqHi1tRhtAhCa47AXM5ZEetWUBqXvssfAkNDagM5qHabTDrWfQkaMNpxnjrYg",
  "key21": "4mjJsXt4BRXBq6ph3RY5u3SFBeokWHzpYUrbFVoNcEzafATDCunFNeLrvBzDbwN5kjiBi5zsWphcXzEzmjcfLyJn",
  "key22": "3aisqVmdg6jas5TYpv1TJ9EL65CidMsx2mUzDuy6LsL21f6vkgNysmFtT6nDdGL2vuUX9mC6gTQiofGWyPQzJ2aR",
  "key23": "4ttv3rgiQ76oQuKCbTvNz16kN3KXSJyfzsihyvT8knaoKwhxL6yaKPTssNRbLgmTAGGn3cJmm52CGP1XqN98BgqQ",
  "key24": "5ZuBbFyXmYVUp1cKSoU77e2uUmbgcaXsyTM92hSDVJUyu9dP9MEMi7Fsd1ufDZa5eZzV2nrnR7ynVymGm2nTBnYn",
  "key25": "4u52hnk1f2N7AKRuKPa3Eme7ba2WztSFXmikR4BWo73YM2zeV8EvvSCdvxFhSV6ktoYaVEHwyK9jDvvHKhn1qRXC",
  "key26": "28zzVqEiWmadQhaKiQLxxJbZoeX2fMMG2GKXPPVBrNrookeAJzCymo788Kc95McM9Cxx3nA1xSrcFvfHedddoQaR",
  "key27": "4ETEKx4TZgwxywGnJM1esEkhKXKxrizxHB1WEzS7XBUc3BC1hN7NZY3wsdazaehE2XZxF8gxWCZQnxXCFoH7vLTV",
  "key28": "4Fb1cVCQe2GbYnqcakiqDbZ7EH7MU63qio4NZ8FTMyppF2Z71YjoepgS3nCQmSKrjfvgakWGvb4Rp2DwbMPxtmCW",
  "key29": "3pR7YMz1oxJvHfVQA5R2Aoq9tijLNG5azERBN5W1zNVxzEs2dizZSaCLRG94q2doyqRcFLvn8uCyytZKdK5jVzjw",
  "key30": "3F6YM1VTU18gvJ8VnppvQrwJsUjy5GHWkJeTXS5v1nEQTRdazhQnJCsPQgMRi4C7NfpLM3kj9RaqoV3WKMh7aXYw",
  "key31": "2ZHu5JGMQGkFq5G9Y1Q1io5EQ6mDZ9FZfDDXeU5SRsSkyfpk8hHqMEpbsaByn8fYWTodXxJ4Rq7p7NBJj9b4owKe",
  "key32": "4Jkmrjti9QfCSKYJYnnvhymwEYvthjRCcFWYqpEv68Ubu7aVVNRRVnYip4B9BVWZ3LVwyP71Zg4Vzp78a17cLSBH",
  "key33": "4QvCAwiMi5Q46uY3VcHSrynNwjTbPPt1LfAUyHLUzVFu7WrhLvK5gcGJ7wp4zTPE6ybMRhe3V3NEuF7jSChbbTcs",
  "key34": "26y6HNMkNH8DYeuZhbebXr44VnMtW5kA4PQGSdbycXDrRkFUTrEwbVUTwKvabA58y42846QN86mUPWbheKZHmXVy"
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
