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
    "3kUmFmdNkKNdzpT2HkXHkTskRa7Jw4PGsbam4XptYwMB5dEcdeFuXrmgir43ML3Fx6Wq8BPaTWP4raEyTkXK4Fi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQ9CeijydpKR83xdgm47oxz3zr5Myv2FSAj7eWeNArJtUt763e29UcW4ZkvV8i8sCkNwjksm6ButbqxL81TG1ou",
  "key1": "3m4iGcDmmjCQEJ3YB1dgNRTrdiw1ECpTs9db6K8Gpnt4haUBZaDfkZK7iZtTiQDXUb3fYYqUyjsEsjNFN7Q7Giua",
  "key2": "3Zc9tD1W73i7BkN6R4MRhUwK1tJZYqHoNBNX4u5tnfgjoqUY48CHTmw9Hq3UNUxdpjjVL1bWjDzU71HCDRdGNym1",
  "key3": "x3JWEy3EXtv1yj8xJ5SqPvGHj2ijPrmui6uL8hyELxD5zfZXPhQQ4CP9S9zQ7rvKy6vKQzBf7DgXMLJQRo1WHQG",
  "key4": "24AWBN4f1x2LuoKemnfc6btThTe6nnWtLnrfnktFRj7JDwE4RwPC4CMtM7AP5eNxwUFvNkSWWM8VYLDbD48SeeEX",
  "key5": "3dH3arj9CuYLzANxzXS5hr6RjucvPKLySLiLwy4LVxzi3QLiKpL4bM3BwcPcPvukAHEvfNYt8SybRceKqodeR1xM",
  "key6": "64kPaZePPgPWGeXP5hE2ps71EshPPn3YiWhboihjsKxFEPif8DT8gbhEiu2feuBnVBBUFEc7MMH5GMMBFe4M2jBG",
  "key7": "4gJ2zvFHTusdEfVsX6PeNEra3ue7tef6Lxiu5tDxMmBRxD4eAvABPRth7uhyeKjqDUSE9Dz3btbFc4SP6Aag59zE",
  "key8": "z8MZdPqgcfqMDqqdLmJPv5tYufjNpzVgWe5ANxd8vVrGF1texuMLpSexW1rK1qnfQ4FrKp11t96RnDvdwNrqGYp",
  "key9": "3sMmoAg9uuNcbfztyS14tWBs4uyKGCWuZLj1egvBWjrovPXEmKfjdxNZjdrmks2VHbUAy249iTbdyTsZ3r6s5MBX",
  "key10": "65jLNsH8kDsokPTznHKna5suFdDvb16QcZQwhb7AfrsgKnNCUNVHHgJEvMfDbimq54PpAKLaj6GT5ujUUUeij6wP",
  "key11": "zv3cABRwA7TTHQ28XwGsjGyyp3jVqi8KYFkaryk2hf8KhiwxQJQEbWh2zJde1CTLCMJtXFV5oZwTFfhzXp25qTo",
  "key12": "STgit8PehigyY9wF1PYmnpymxanb5ag1xN3r8KzDQfKEJ8vbVkDXV2vkUUmb7NGm6TBrUbpP1ZczrDep1r2JNP3",
  "key13": "4xmurfAC8yMeQbYjAooeU61UqeV2ChFbqF2kKWxVpvq6gmkzb2VJkYn4x8h1nXDU8VvDJYGKeQ1YbSsiEj52UY3w",
  "key14": "57Lh8n113C3KQRv8KiXpGwA8DsXWhCoE9avmgYob9tFt3jmEcmsZG7eNHxLu56mVTJCThbkKeiWu7CQjaqHSWMqM",
  "key15": "47GAN4CKNzX4XUD8F1NGNJ8QkR6vR5i1nxpdrpk4tcv6DJpELUdnpLgnbDNkeBzE7jzT6JdqHZ5nvFwzNMqTpNbX",
  "key16": "3RDGdthDAvyX36jVeZG44bt8RTbf3fZsdhqc4mrfVT3YFnffXvTtGzrH8TG2zL3Vje5VEgPPv46A4sfpSuDiZFUr",
  "key17": "4qXesp3xeTQUJkB1uuRAKMsrgCHSmwpKgihtLTz2jk9u5cyGHHfvpLAd4P784EKoycF8RdoT73c2sHoG4jJe8fXv",
  "key18": "LSYGQQyMkuPWDZqRX4pfkfngY9bhAn4rvA61CMrfBmyppFGbU3ubxmWsHsiyV92Vv6AvbcScrLrapyrzZtmmSZK",
  "key19": "beLTHFHWj6TXTTuNnqF7QtM1WssaTD912Gu27ESLCL9oRRDuHiyE4jkadz7fLHdZiYwZiqXPzNtcQVKHQ55J8Ci",
  "key20": "3kgJQmkuLYNsySHtH5EfDkCe6CzHas8to95oFBC7MamamEUmfxAe2nWUUPMjeUmvdNs6krv4DSx3xXHiBHDpqXx3",
  "key21": "Yxe2hh58GnHb717WHhLq9iXfyyPaR6jeR6Cv7aWbiPMhPgLCbTTGhTYrsdZgEZnQvszqgNstb3TEkFzyrk51BFK",
  "key22": "3y4Zt6ZMLdWRBRG5Sc2PpBGhbrhiyezK2hGnxgNkZ69UStocFVtubbzyxQBUbFNebp9U3fW9LfrwXTDa9ebL75YV",
  "key23": "4MYirNyKShuKmGpDjQwjGc47YyR48QuMdjXStmibXYtS7BQtDHQT9Jb2GNXN8HAcxa7mqUfVQmmZWRuCgheJRerD",
  "key24": "3LD5tQAJ1a1diQVLf9gBMzsAtCTddCQQGsxeAvYMWkF1TEh5XVtSEBKHzYZZGcgfirwDYVEEtryFYxYaWq35Ljcm",
  "key25": "4pDCazrwERFApFZu2WDRK6tURhyQqTTtcNz6ziQGDisxbkPjAXzqzqa42D6FfTmeHoGiXp7z3nPbfyCzxfYWMKDe",
  "key26": "3dg5oZZv1HgmGqPukSJkLANb3FxeWsDFxXBptvjmHBTdTm2GuB7cu2tJUd1m4Z3Kh9F35t9RbhLP9pWbDUnpHp5s"
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
