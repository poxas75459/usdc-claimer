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
    "3TmHbYFU4QAyKob5UQ7unzN1Qm7MaT99riSwA966wniWbpomWkMAo7pfhr8pqLGbY8PqoGedv2JY3XChqLMBbkJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZnoKo4PRfTo4C1nSLJYes4ikeb2UoVm3EXEFos4ZSuZAjdXfMDnD1eZNcze1VSTzJeAuodwSuFqpNRchsE6Bwza",
  "key1": "SYeCFsY9xQnY6T6KvWWqd1vqMxp2uYAGzAST5VMJK8KKBLBzxAD7Qewow2YvLwMZaHxvUY54Y6eNR22YwUQocrL",
  "key2": "SBantw1nbUCT7JmFuU5xpy6kRhKExtWM5ySJheFAUWX3vJ2cKtTm3pAzYfqNWGn6JaLoxeM6B2Q63VWKYC6Dm9M",
  "key3": "43NaV68iZEp41RRXD4X49wBE89Q2p6DGF9g54ivRAq9fFiurLNUM85WNme7raXoG1v6L5idhpdKkUvzrtj539PcA",
  "key4": "7kymQSgQRLavaqWHdNPQVuYJ9JdtVayJFptUQHo1MJHqvAYbTnK6mrAKSdeM4spqGP1XMUHuwkytcZzbNPQkn6o",
  "key5": "THP545gMuv4GtHEQjGFjVFr8wkE2m2su36A1E5jcAKj2y65bHZSnEReoSpKPhUQgRZJsqJyrF7NTce6HzKWqrJx",
  "key6": "nqs9weVukMDtNNiqYprBKuCSnj8ErKaqeqG9izpe7g5VWukT2U9E29ecgGzYaunetqUgE5aEGfohQHsX1MUmEvz",
  "key7": "3zR5aELDAm52PfWdSnxMJS1xbXY5mJurA4CS8enkqPWHKRXi1Mm1RjefmV9zfyNbuSjp1pqLu53PTjzfBaSnebQP",
  "key8": "217BgqTX8ZrjZhGR7KCt2bUtZ31apPdHzm76Py1tj7HJkAVV4GxXVVFhWYrCCgZ2spbmNrm5W4V18ikCorz6Dy9e",
  "key9": "4MZL45dvnwzYhXyi4mME1AX1g5eKY568PtqV6epNhXqUrrjTCbo5nzK4JUjxKLGvE4MUj7SCDmim3eVWiU4GDo2V",
  "key10": "3f2ujtp5vNCzcJt9KnLF3jxHhHCy3TmHTbVM8cn43EFgpMureK63VvX7Zt2rDnEGkiN7wyH1u3YBspjmwXZXFFtW",
  "key11": "3XEm9jigCJ6bgotH3HE6vZkJz6TsX7c1dspDZDFaF7pNvhaxNHiTLXBNrM9NiKTt99nyLpXkVKNX36jrQgfB2B2w",
  "key12": "3us1m7jpFQSDABi4wrE5RqWHofbGqrfRau66ZZce2JKAF7CrThVxAy5R8EZCveFeZEPLzW24njDNPjPxC6msmdst",
  "key13": "3wqCHxcoEr1TUh3p9VeJxUz2DQ1yksbpfkB18Uet1BWDRdNr5LWWvcNdQ9bBnSjwYwVzXRuvmHpXbbkPVBSec5if",
  "key14": "Q6zQAprXKPjpdDj1UzfGZErks7W42PBavEJ2JFNJVbKgLKiHqfvMNhJevHByRyzeh6vrzguSNVasFeF3QxVwKC6",
  "key15": "5ec4He7GXAgcCprJc8kyYMr3vhLT5CytnuUnuPa43fh9HCRoKYmTBduNdNTaSEmVsrLhZMzCjnY8S3zzCZwiZgYg",
  "key16": "31CmhB2hSqKe6pFJJzCaATBRsdgpFXYgHgLgki86dPU3qu1Y2nmseE9RN3pLw4rTXrAVhpe6uDHD1vU2TifzjDX6",
  "key17": "2ThCUSpvpWpith9Th3J3kXJfZmnUCajig1VarGhnhx2BjhwaaeVXeDTmGrQNB6BoeQb9LHbBXaLXuXjCxxVLJ12g",
  "key18": "5CqCRebXeNDbvN7MpHgGCkKi9JCEitG1CdpzZws4xpPNMuARv9hVTZZ4W5zsSg95RmVMBpyKfhMewUnTgUX3muo6",
  "key19": "25KnbhWDQsEAHaRgnYd5njz7i9SUvCiQT16QYGYWwBwQ6vh1n66PpydfP11LuwHjCpqJsPmm9uqN1K4qK6Mj88zH",
  "key20": "5mpuQ8xstCMZzwHXaCzeugVEm657aSxQdTjJsi7WDGq8xw4X38Fz5986QHxxqnio6zF9fvmx79M1sUnsBXoqXmjX",
  "key21": "2whMHam6gbhgZRzGya7qJKSAN3PKkUbBF7u2p8ZwQeeP5XuqJVdTrPxtAVvTEHRM6UygsHX95VghoqYp5eLQg2kk",
  "key22": "5Y1sFxY2WB8egy2srjmCe8kE6adsJhd7F51gDD9LaqHe28i2m4cLxmNq2fvzUUK7nrbFkCb6qLgbmdHHzJuGgjmd",
  "key23": "59BJ6AVFjzTqoedT5zFxW7EHHxju86LrXrsMnPXoSQaLbjLZqg2AunUsEiMmNPgkmnV1udFTBSkYFcd1u7GvLQmb",
  "key24": "3YJmTHBhWoeGcfW3m8ndfSwELDjYovkCaCENxTSq9vBG29xVuaB8mwxAUmfmw5v3QwVFbzo9rdgbrxmqBR5nxDLM",
  "key25": "3zdaF4L3NsVPxUJA4JVsM6ULKC3r3UEjfZVLzpxc6pAVFHhKimVaFVg7tynMg2sY9xEpETmhMy9trDHdwBiApR5",
  "key26": "5ENGvN8G4yBBYkZYKyFkVSP5q2UHpPuTCSNcC5xYucdTCV6kmi6WD3CR1trGcfQnodhwgULRbKHyx9smAK8sjy6z",
  "key27": "36reaW9dEYJf6jEW9nrqaumnh9Z1bzHn2RytMKSwSBKdrXtzpgFHtaQiEGTyZVhr3jHmtz6S2v9XpkToGUHGmzDm",
  "key28": "5SnJ4aWkQH5cc9noEB7Ab7dgVcc5SFeMWjEENE5yMapwhSHg3wkwZBMQ4Z6MWNdrrpBZ6jRPwCQ2eQQVaFY7H4fm"
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
