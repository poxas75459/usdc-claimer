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
    "4TEZ4h9rcwGfDTKKcasV1GiUNhiTjnHAep92gahVALAMYdtkBjMjDtfk4kUFJEvZyx26hubQYD78h7jy2MwHZQ5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7EiLSjwRacoxoiJKCYGcsqLbmM5ytCkr77448YpjvbUxkhCJoXKLNrxHVCNBrJvkZCtdFS7iufY5Mmu1Y4nHii",
  "key1": "3epZYjhEqeneu7qRcDeB7DK3zw9oatLw7DSBoe7K9NVJCvW7Skx5awZVLig8fQwsSQwnYexvpqF8uBWgvkpNySq",
  "key2": "41MHEKW55ziLRpxWxrxFwCQQfq3nAvtoHC6vawe1rJmGEY291Jo4U98jVZnNKuJ6BdqcZ7wxuGpuorZNuUyxgnoK",
  "key3": "2H2LRzE5zgZ8jA6suh6FToPXr9zXhC4P4qzD8dZCpfVEsmaqZx8UvsonWHBNoYKtpvXfsN3s5gkPFWUmDjy8YTRo",
  "key4": "3nwPNqtsNjcFh2zMvtNkF3hJ5SY1s2TF39WHwLuGsQxBFziCYvLJhzrcxLsCPJCAUFz84bvrAoGKmBjVeKsPyyqA",
  "key5": "2TtQEbUvLahLe7YJ7M6WdaeGfjHYyqUBKP7Lko6XEyUu1MX4tvJ31FfPxK1MmnXeZdYzQBPRUJKaMFnRf8ZQkKWV",
  "key6": "5xm2LQe8XpwLh9vsSmy6e9gPvjgPv1JE7NzafR65SrT1kWi95ZnoCJfqRC6gQesmLRQ7EijFGr4nnzFmBDFxhchq",
  "key7": "PmfgefDtci9iCZXqYFGXqMJ8T9D1FiKxp5RuCSnS4n39R5hR2CtZPP6e6YePiFJxCDqmfQeFxDUvqvW29zn2mxM",
  "key8": "kzdhXVUTMrVAp6NfWcyhcchZiQVvC1GMrAMBnirEdWw9JmkSzQ1Q5fS7xHK1JKWqkGvWQiibvyEQy5ZWYieUqHQ",
  "key9": "3hyhe39G5Nprfe3CbZyLTA62X1KuiL5Kf4cvAgDxccEYbuXA2gC3w1d1znkfLM3EUsD7qYvnEzu4MMD621CapfSj",
  "key10": "ock1EsWL6TFscKjW4v9BUNsTn3Mz4TdxJgZJKRbXacQQZmFmDMhotMQ4N8x5KKuZkkZep2EC1MvmneuaMNPmgVP",
  "key11": "2rEYsZVdXk4Fv71BXKJfPSH6i9DQUaicMAMPBE6J83Gk2yYHGUyyefQEGqG8xeLuftMHX87rjpcjizJkspX2NzeS",
  "key12": "wLudajsLJcCrRLknzquojkeu8ZqcCykXqtjbi2agA5YEB1Fj6boBkcePnBtNgGT61xTGXhhi2ocB5mPudTbGz7d",
  "key13": "9tZiHDiccPVuJAqtCQXXthc8vdsCx9Ha1ev1A93C4ATybJ7rVY1tq5A1YJfrmhTW84RpAbLPAjCz7PH1hSzq6xm",
  "key14": "5B9SxhnkN6fEJ5pGncLE1JGpgS5cGAaMcovjf99e4RPjtHESNecuJSkwE4pin8xQ5nCapFdCuNVB3CSTWMbwDUUA",
  "key15": "3PcGVCdmEHjDGYdXjJ1HbBovnE3GjtXoXj13gDmJpst5QNGYnjfsRFEF6T9iqPWttLZrHw9DJCdXvzfsFn59PXsC",
  "key16": "4yJbCFUjsxuUmMKpjWmkh3iyHrz3RDT2pzRStkBPQhH1owACWkWSEHuveBv7FDgkSTZPvEKGFG2bPYeP9iTB5o8W",
  "key17": "644QrnR8ThsvKQWPoc7QHe25tj39oCv87FTD6a84cS7Aa7Fw2Xm5p7FLh15xwV928eZCm9WzyTib1QoQFYoe8kvb",
  "key18": "32JdkBu42Vu9EJou1ygJESZPw4MU7EMex3SqRyk6rDHn9ipsqHREm6eN6x7KTYYQi1RhCXH8LxSTiiu3w4cXkACB",
  "key19": "4frJCopGDCBz4PbL7GjE6zkavi6k5UpD3DzihcWmDCeMnPqNHbDxPkSSN9wUgDutfdLhex2fpZ7iDAvGJKQgnvYw",
  "key20": "47FPiqurg73154xpxRBbDHkPk19HP7SFWdwxg2NwoAGEyWfoGRe8bBSfX7f2zya2YQq9yv1cuWPfBXt3JsEyn5jw",
  "key21": "hsSb6ArbtLxkQMRhSewLd5DNAPaxdxf28wCK5toHiSthGmVdtmDGobB84ZxXrpnZLpo5GeoVvdTwmphTwTb5qYh",
  "key22": "4bedfELYo6PHoPjqfBva3UydxNiZHcb4zYyHgBnqqdaepxDXFe8oBN4WDdGVtNmQUnaupSHRwNGB58mEFhVbBsyc",
  "key23": "4z28PUdS8prAaFD8VecviAhngX28EJjHzMGSEspA7MyjXJuKHGWj7HXAUSxJin4WodB1t51UJ1ZQ89M3d3TVTwfY",
  "key24": "3Vh81QmzDQgYPb1Mt3dJbUi7cj56szUaeey6WiXcRj2QC4pcEbYrUpCy96rfuqyvnuKeCF79uc7X21msuGMqaP4F",
  "key25": "5kFW9fwhF5Dv8G2GKRVTUUNmyKDdZnE7jXMwCKPKVuvg95beukfGHDdujEqDdEXjL1VZZV996iVswKBoFft262ii",
  "key26": "2bZSnvMd3wDwCPAnyXQY53m2eaUEc5Ju3ojxDDfnj1HGzp8g6SAZnBZTjttSMuZW8zfaxAuq373Djaaf5jiDeavT",
  "key27": "2ogv36jMYydquUdZ3JLSpRT6mc9ZxrSecVuC6LZCGPDsDBoeNeGXGbRt31KmRWEzbVvu9MnrKRmySHNrkiDCGV9t"
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
