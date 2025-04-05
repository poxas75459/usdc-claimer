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
    "TusC9Co9MgvphpihdqAuYT5WBaYVFS9JnSMjaGqTDF5QsdCAycrty582YBkXfxv2orzCeNa6vK8m4sHzUVoQCBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZasxGdTgPyfyye5m8w7aEZsKnXwbXpmwVXMahnSQMRHWTinwjF8Ktrp3gqxYnzAeqdwyzMXEp847BoFJoRwsvw",
  "key1": "3YauDoJ271ztZGh81YWwBELTaGjB46FhPXCckaVPnZUwWN9Cz94VE6368eeAdDNWqUSvvC4gL4c9yeqe9Wah8ffF",
  "key2": "2Lsn7H6vFSnDqts2nCpAKgR4yNoxnybkGc6oGeS4xbco2NFF2pgWYJHWZj9qtDFjiuFSTWBjwciJZtS9xG8kSbFU",
  "key3": "fEpNJ8w13cMLAbLMcsPjYWsB2yn9eeeJowxRgNBu9nf1kNyqGKnMf4v91wyxaN4pCAWRygJQy8vnNpLoAgjrore",
  "key4": "3Kw1bQCyExHDEeM771tftf3srgwVESNEm3WMqFCG1DpLeQ8gxes7kxhYnyxMgUwgNUTTEhmcftcoAdQ3qALZW3Tq",
  "key5": "3i2ASVMxQKHAeNqKkskBvvrsBQdAuWvEbJTiAq99u11RgYiJ7ENjqsUrpeaZjv28RVSBMUT6CgZLHpzNkn6MeSUR",
  "key6": "5f7CnNk5aT8yu7AJPnCot6qLrfmZZUNRiuHt22wZSainr6xu5xidfWQkJ9Tuu4rupiyPGWESXe8Tv9ALcDTaGrbd",
  "key7": "56d62zwzFUZFYBMGfiGpWjyyxeVJhMT1z4Z7UXL9R8ooG5E16dXTrYSMLQiyhNNGSb8fAzXRfxpbWvBqyEqTJ2DJ",
  "key8": "4uULBgnqsums6kPVNVfLZadBC4JKMAFGgJrfXRVN1gYnVBFBVsFiXfrfpJHeBM5tpUUEAUmcE6vWft4qKtKNNqqf",
  "key9": "2dLzoQ9REtP6N2nKCUjMbcPayWCtD8qAZ2tPXvfzRW7umh3hZZZXsbfi4cBm2jmyxH3d8u1Xyab8hPnk5gy34wtt",
  "key10": "4fPi72ejfPjEaXkj3UaMe32sXWbuZzAJqz8hTm2HwrLtfTkSi2D6UHG1wL27HD74cwgbp4zh9c2G84h5HkoKYktp",
  "key11": "3h7SQigSiuxP7A3SjUfsMTA8HwaFgqqbACh6fRPaoNkbj5RZvKXhqqUjbCqa2xGtVWrxTcsnuaHWWdZf8qPCXHAE",
  "key12": "4FgGP6SuHXoaYJk9Uxrq3ircNCTsGMoKKnNYpPPqVSBhyUBr3j2zRKMYB56NmUotbV7oprsWwXZuLexvgkNBTJ2D",
  "key13": "54kRgHmJXwkWJuK65hJq71od5n77NH6KqD3PU4VN1Eh5nhVcwMrcABNirTw4dBvJEmYfK5EzbnfwMtBAc6P1cQWo",
  "key14": "4GSQyd5kZSEH71uERNPM13FDKPr56qtpA8hgzaMKg26SZhgfksHy7oyipe2EpzghKKLbbpsCUcr3CbkTUsfuqGNJ",
  "key15": "5CzD1EDVak6AdVTPz2kQeTLY9VvqPSahdNjzRw33HPRAVtVPEQa32btbM4PN6DBCJxtmnTqgFdF4JKtutCzqSEea",
  "key16": "386j73MVJCujXN8KSB8AU1z4yoJcTerACoEQpEubs9exz3P2G1JT21FK8G2qv2dpevxo8pMET2AfpW9cxX47WQ33",
  "key17": "4qutD8ppxC3x5jFZC9xELWfXhtoA6akJ3XaFkQCPZrUgVFdmvx4jNPV6Jb11MPTmtDRJMJXLZHLmGpyNNkPNE6vK",
  "key18": "wVb8qHaRZ6P5jHT1T8R1QJ8vYVaTzY6rjsfyUQFQTgSjxWGZeM2mz6XrJhVsuYceGDPcxHzDvDWbpPBbCGTWJ1P",
  "key19": "4hopMcRjfXCYfmqaHqiMkr3d6sVxWqLdgpUrrkVjuiyohgF4R3UkpSEDJdeAgpwsxjfZ9TNxthGtovbtW4DHTavt",
  "key20": "2Lhd1NfZRHeFL2ENXfh5gvNhiga4XAMcPW4Q7f3L1XoQNp6BAhQBJdTQu9q7cXvAfDaYjGNmsZiGPCcWpFao4bPd",
  "key21": "5PJzFjpLELFRC54v3fH45DukniGtVQ7vmjDuPk99zs8gvfQJXPeDHvFVxfM4pER6RqSZyt1Mm1jcbLFJB4QetWNo",
  "key22": "5SJX6Hts6hwLKfzNVH2PLKKPUVCrkcxSDGPZ9DjuEaVRg2CbSrzNdojzw65uBwRApAfw9W7FTXVFAUvn2zsP3g9r",
  "key23": "3pe6V33w7JLxgouPCADpKqeqhYSJpMaaneYKpJHKcMAfro5r3x3b6v344uV42a2y6fDAEH5egthZNwFukPwiaHpk",
  "key24": "8McnZciqFHi9Gvhud1LgyvQRbWejDKRzU3ZCyFGLHXc63E1SWi6KeRXpNz235WtfxSU57dxfREYnGZNa9JMSEwb",
  "key25": "GyGz2pTkG5KmCjC6JP1ud9i8TL2qc9Nz5KRDabbJtUAJsMkWyqSVe3H152C3YAAzdjPcjCcQohYKfczpu46KaxL",
  "key26": "yiCUwU1yaAdEg4eQfPDZYvkn9tn4c6ctw7FhUmAqdUGzKAvgM7JHVcySDgLXphsrQXJw9oNCpLZkmEZ4YieyRCG",
  "key27": "2ASpV5Nks5hqodJsf4X9nQTtM7P5spMQ6Mn9dqjgJ6JGFYLCskkHadBwXHqhPPETV554ALqUohYBeC8mDPzxVSNR",
  "key28": "5Z7ersyCcVDVkWL9isUNXzy12Nun921GDJdWfhZiMYwnQbVHqxBDei6Mv4D5Dp79xEP7gcXfF7PuYNDh94tFSRLg",
  "key29": "3odR2XMN3Mwp4qYtTUxacycUi656BKrg3ArT87iY5KQmtntU3JyKaqciFVr9pFtdD85aY4qjJKFRz1JZEPFPGNTi",
  "key30": "W96hpQ7fzix9zNspCbPL8m7NzDqTteieQbfzhdds5nG35ht3UiJKtDqLghRDzZzaUbBzJNcK1jt2ExCBU62AmWQ"
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
