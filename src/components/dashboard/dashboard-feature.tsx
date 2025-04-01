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
    "3EaWnYnG1phEx2CWfJFGAZU4SZZkXYHkfhdT3ReuYcD6wjyBcMPYvMNR7JaMDV5daKH8wv7WG61LrAbBsGwkSjd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DJPC8PLC6cnVmTo23F8RbTuRn8XxAnAhJppZ5MbRGUMPs1Nt6SY7SCzdtGcKEYZyywCqGAdQnDCetbRDf8zBccn",
  "key1": "4hckxNBtrv8bkFD8mRK8pNeMJhonGsWEDBB5ipMWz2JdZBJknNoLxMo2qk4aSBjhf3vi3BZ74pPq19A2vD15rq1K",
  "key2": "2ZNg5xfqgV9P5RMs9N5UFEf2UF7R7rAJeWHe3nvVT1AkFnkQhvsr8dNQ39zGSLLdB4QT7bFJw8qsN2Ak6Az6MNn",
  "key3": "3GankyAzMkaqHtgrrix34cJ2ZVPcnbUvb1XnfMiqiorqXUeHazDbqPSq7EdYswogEhfjGUnHkrPDmadrBL3XN3s1",
  "key4": "3Cp6586UC9RpqtDTq4aj61pEXZphRKws1TVc91opogSiWuw1pm3HDUkc6e4VQCLq1LL6bCdM9xaHEGkhMjfuQVPp",
  "key5": "2z3Nyravuw36t8ezcfJeeGvsv4Q4ENVwyew7GGRL4sooPP5cjCeWFo5wgUPD4DKfG8DHJuruikSiYdtqAFFZjBq7",
  "key6": "2tMRQyYsReWWxr9Tk2YdFnfAtoUvkexLdrj34NUuPUsxeygV7uc6xS8fqZQfhvs6HMvBr1BPSppgc6pQqRocvvLi",
  "key7": "288wcSL761sW9sWoqDRyEBtSe7WPqSmPjFpEcsFv14uabr8hLuughoibEUYQuWUzU53owoUHczpcivABHKo8WuCZ",
  "key8": "2we4sipnitBkHaKfCSqCCPmhgKgGqRVRJWNxN81YGVV1k2JLsdDgEnPTt9jenA4dnNYM5FrznZeuwbQMwXG5EThV",
  "key9": "5ukjVqu1ZWSpjHztidjWcKYFSWjgFMwNRaDhxSCRaMKJkgrBmb8yYYBxCtF3RpNcJFjXdTxGSRkisNBTmWgFDFy7",
  "key10": "5nT6ecQBmc5PKrB9ucqqcUvms2uTuSk5KRQma1kPgKefk1Nm6PfJe8qJm3xFGGZRQQ67CLovBMhxEzoxfNVUGjDS",
  "key11": "vDGXkexHo56LYLvD4sm14wvZFSxJD5H2VCfy6avH5g3rUoE9CcvBZuHxdaUy1vHZD1Hodqd2PkpdH2j2qRZk7Nz",
  "key12": "5GV41GX8aKHx4qQvnbbXjPouWLDnfgFJFSXEPhCVeAi56WPTiKK7BeETbvCxTgYfn4peURz37KpyrmDtEWawaGpe",
  "key13": "4LyMoLtKQvaU55pNpqUsekSPwvLzwdVKz7aUVDQ6mc5LnT3hMyKq9fGuTXLuQbXj2F2Kt8p7wiMip6V7yfT2gumK",
  "key14": "2db9wErnAQcYoomcyuS61ba9NZmxSLftNXnUWbEb6TahvpB1cso7EZiF3G1p3nzois1XAMiLCNiuaxfx2FRjSJxf",
  "key15": "43etkkhVUSu54RXnJFQYqj9vXbYYxVm44Rpd8iXu1MnoNjcsLBiyP5oePWLuZHqKFBQ8SDPJQmFKxvxwr63HHEmK",
  "key16": "2AH6DbPKcbycL1xz3fsbg1nSZUen3BLsCnfm6k9B5AmBf519kJB5LxdqRgyBs9dpchno3HrQN1DNeLCsv8wQSLoh",
  "key17": "3A6uk3Q6AHWb7dyuBABY3XUafQVzNs5FEVmLgbMFTdAE57AzdH7fbL2mtZrvEKuGyXJ73dFfBKFPhtoDkvZKdFTJ",
  "key18": "4uqew4T1Pf12VGGmN6oRUVf4Wv741xw3mwnkbwEShUqsKAPENVC6Y6ukBgFPSPF3CdfceiUhmpWFvL3eNQh3H5UX",
  "key19": "3oFdmv54PtdwFhacpxTZTPb1KPP3TZA7vPLnGkFCySQEibvBrmeCANpBM1nFpwPuixRcYpPEXuTs7QsBfRxCiJaV",
  "key20": "2R9Sr2VbwjNjHRQuYpRyKZ8j9efZcvRGHUY3ebgJJTBDochNTUvJvweK2Ya7DLQzfRJGxhTUzKR5CHLGkFLaiigV",
  "key21": "3o4771kjz57gE8oXZ5hKbUeRo7tC7K15ezNc5wwWtDG4GtAs2VgBdimFDFgDEfrAiXWWihib7BEwzgoSgGuypKb",
  "key22": "XJRWP6cuf67DwzsdzEuVe6tGwbqCAtGbMdrpXDJht8pCyMkqHbg2YUuso8djDnUkR2WX4a2WGqKRcyPrBAgcz9r",
  "key23": "P7LF4o3Rit8yXNdXFoFGTE6Sx2LpmfTKUdHt3pSch5adGG9uJgX7jyce4pW1crAjTpdiTpEBA3yauuoHLB4Xf7E",
  "key24": "2BGsZqSVmgwuEncFHjovg6h91v3y5k8ti2Gn4myBZ19hYXZ8iuUjiLUasf5DmPGjhfYxaBDySkyvYBubNhBFJcsW",
  "key25": "47kLNMi4LEcitwfvaC24NgMpbj6odXptEub7fAcnp2AB6C1cEsgC3mJeuzE1JCUJor2sNHpZKnnvZujPU4k26WNZ"
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
