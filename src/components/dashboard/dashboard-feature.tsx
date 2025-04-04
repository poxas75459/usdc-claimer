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
    "8n9CaYr85wHSBcA8zWDSgkLP6x7TpukMGYRWQSACrEhEQjXSsLoYgxhU1M8quvB1sPv4XTFTXVak8hNinnd4CV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kjND1V1k1wnD9bNUFf8xCdhhNveUm2qUcxG83Svq8gUaAFvSrrUohWDXMrr3JRt7hEqBUFikgi4LA6vJU8SayEv",
  "key1": "3obbwpTF73pNdiCvx8nGWJquBF3Dnk2GQaK4yZLFx72NkMmvYLbszoXkMJjbpXqFdLJLBFQSNuKyZudLmXCMeCre",
  "key2": "4Df82xAkN7gaCnRBY8KbGYsDe7Qv9RTjqXC7dV3Se4oeCL5A2gfhXXUUZkRQV6Ei4NUDtETDkVD35oizDdAN4VnX",
  "key3": "5KLBTPLTHFtZs1G8tsdNCzuVLqKEy4Uz5phbJjndDJ2YdgnY2iQSVjZ2G6uTeW2mgDQ5GLnw9wALbs5sjRLtNUAq",
  "key4": "7qUQrcHVZJxD78pnm73EqvbREvqLWR8Bdf38XQdub6rjhTH24cY3j1AGGSehZ8n9DVDsidktUoY6TPVDzPhTrWg",
  "key5": "5kXp3Ef5ZF5Qb6WnN1CRXAKz9ebAzV2M4duM2Kb32oXVjqfEMaF5FU4Y1kMUZyjDPUuGm8W1oP2aEEeygYiXu6jq",
  "key6": "5525M9DA7tXhVNhzpjq35WbZLqhWH6JP8iJXhQq8RTEvc5gW4dBCriS6vxFYEJk3GsBCaAekUhoundz14K1aPSv2",
  "key7": "5ccCXJRYhEW2q7W3s68fCaRc4vtrST83hZhUboYN81pZnmifUbkBXJaQHY81HTBSEQvS95d9eK3ifaQrE4dk3QuD",
  "key8": "43nuMcyXQv1h3AFgsrQvvYmRGHAgrwNYFgMG5CFudTztUweCBzJGSvS3ALR2gr4wfAGbYkkp3DMBcXwW3J27Xon5",
  "key9": "3JjevJUYsxE1ZZYDYdBQL3jEU89divxzpUFWWeVgqVRd29EWdZHZbtQ6WnX6wFLvSKS1EWHf8K2yRug492orZSwX",
  "key10": "46v8iuPoSAhxJtDLQUBvoL4oQsiPu4ysiy3Ex443YFwvVrtaB6GcuXCSC2DAYsEx32HjMCjw8zY9jEqWgufRaY8U",
  "key11": "j1YgynXN2QFUXiaCoK7yoLDhbBo6CyBPmwriWUiNCierCfmVVhXiQbDji2AsCNJtHZRUBdMgFMgpPNj2LNMSH2Q",
  "key12": "4R9qYBbDpYkgF8QmbwmyjvrEnj5WHQWiaEYAbix6fikGZ9ra9VjEEtGE65vi5fDixSGULKek7t67WzGL7J5Vfoe1",
  "key13": "3gzZincUVxTrWemh7cZPK4BHwfi8uLiuEVmYKKQvrQgBuTv7zTTBznTFNvQzPEfxaZ2UMnGSjztHYR1JAoUCMX3m",
  "key14": "36DtyjuxgQTUQEohBzfTuLX4sHipifoWTzwEx4VsrBqELbPjib1rNJzANmKq6J7fHhRsi8qzBaPC9E6AFQdNWkdV",
  "key15": "5qzqZkk3Db82XfEP7vg2ZbsvMJeC7j5KYNWGEwyi2KuP2TtyHEibtCaBVBvLxNw7PmHxcQgbooFzoto5eCo8m9i",
  "key16": "3iFkpq17Z5dDGYUAjJZahwW228gCUPnvyyihHigvsdkLqAkVQ2B7u9wZSnqnswy2ExewNkRCP1tiSyajEYfFHztV",
  "key17": "2Cb64jtgegwnMdrTWA43XwFGJNZzcHWDR991DwwbUtgR3QhiaNpthvDP8WmCDKuByVwQ7bnJa41wgfeDkCyFXQYt",
  "key18": "5SeXtbnwhRpMJFE8cup9URHVPyDN9795pDoKPgkJquRDfFepVoArqnx3qZLyX6WzyrH7ZT6ttdnCicSKxdoBZuQA",
  "key19": "3ZsraVaBNZ57go42VWBCT4knnmTCY9dmxF5JYNLMQJ22dfn1PTXiKxyrfKuBR4FhFfx2h96ZDgvbKnEVa9ubSuwf",
  "key20": "62sppa9FS8Swum8PRjAXnzrg1cj3VcxRkBnZXmy8tvSvqFGjDVNEf2oT6VUpcHmVPT4aKuH6JX94w4vAmbYCC1KW",
  "key21": "qkfwVJjuH2f2VnMG2JRKAFRY9mqZ14JCv8nYdgKF4e7nZ94ZRYVRdh9bhWLsoSFmQx2bWbFWJepM8vMY1rM1KyF",
  "key22": "Q2Lycs8ncU5kxVsC7h3KWrAC2wDbCCGJXja7vxscLS5FeLeEenUBCaCvFwCjCZow8VsDMwjJhSdHYc51TdDYPUK",
  "key23": "3Q4XGdrhWWihhQTyXNJP8dwF1wE4GT2vQS2SsVTNcsLPTTgwWd9AH7QnEVCYxwnTf5JKzaFVM6EUiUb5YybES4JN",
  "key24": "4amCjwVDLoZ3QLQrGC1C9X8wUu4UZ1JzoVvTpuwcQeDvshagSGdu1px72NnCZPZi6jrdqwEJWceho6rqcP6eFpz",
  "key25": "2D9fzTiXMEWwmuBiHDkcC7BsmMnyRzyLqjpEaT8xz4gmLjJsMVUg83PwY7Q2B6PfgT3DdnZSPumgsm2nakZjsUp1",
  "key26": "5f8naPcHxoirUanGcHLf2w4nsLLjD2zpFWP9ht2Jkn6gjCYt8cwfUsb5qrLMPSjL6WSX9MAhcD7yAATiPZ7FRiQ9",
  "key27": "641DGzDaCmQFf5yNCqzJddS3yTbiPo1HYufCuCjr87toVrzvmmBWbQVRzEc7RuvhPdyy95BPmjqH9orBvyZcTzxL",
  "key28": "4z15tj2odQQZg9iZLWZARmFt6U4KZeWHEYoSR6PxJ4iDwHTqQ5yHMm26F8nQJPJANYMhznoexmBbb4geeYnNu3BR"
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
