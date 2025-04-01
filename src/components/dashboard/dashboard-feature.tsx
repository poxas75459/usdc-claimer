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
    "2zCB6GWVFVR5LfM57YhcDYywsXyUNnBfEwffT4yKMpmz9yaVPdEU7ufYHFU1N6vH44V6Ftd7WoyZArfBbAGDmT41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cRfhtdEQbtwBfWLQ2FT5UZmCy2pkGEqYbpSsdh8PSdqqoeXeRA8w5Wje2Qa8Qcn1sjfkdLMNSg9tm6pPXZHysxy",
  "key1": "4RBNCtqy49tGX8M1iMiHwdqzp78mEBEMzjgxgYYcuNyDRv3byAekdy35tUhRLApnVGDntar7iTdHXqcR38mGRu5x",
  "key2": "2s7p4gqCUZ37RQ4SgXeNakeB7oSuwN3tBwPXZMEQD9LBQAERnYfoPq6F591qZXMmZxQcCFuEXXfRgwtRU1bfJhVR",
  "key3": "P7p676YHD4mjifAXAXpuxwAXRz78gUBcyqG7mBYiXTch9kmCkeDcLUuXC9PnK9woFhY1n7SJfuHVpZXnSV9DkZJ",
  "key4": "3WMZtHQz5sjMpC4L3ymtTaXwTddXi6NjifubF1WpN2znzepHuDyS4R2fHERktF2GtcvoRXto2TVigEj5JczZse3A",
  "key5": "25Qaw4jTJbJ9c6BJCGXnGdotuWG7WkYoiPxpjSowriLdyxqf4v2rz3foYfD4Hion71uYStHVrSD9XME8HSBHSu2a",
  "key6": "3skCVZBVuKL6jMyn91bNYrcRhFyHk1PfCBrEkR9sCbKpQf8aA9BLdTKkA47arRWD54YXkmhBNYhSGzMBgQrHoPWi",
  "key7": "4GwATQTYTTV2jbQjzhkVQTvmZV3XFWt7jxLhnmDntTd3LzNS1JFEciHLQFFkoHPWyVarRcUZUFV8pZadVgVUhCmb",
  "key8": "394PFwWpwnTfpF1SyWPP1Ui212jmhZN1LpwrqzZoYbU1dKZh7Rfyk4BQ4WywMMyS4K6oFooo3J1LmVpoCy4wVW15",
  "key9": "2hEkXFsmU5Xtt4VV1kWvTct7LnxtLbMgVZjH9bjWgWb9nqAPyTM8ehFcfgra1pYXyGvc9VeafNeBzhEwwLnxdRTf",
  "key10": "5Qc1HYdzQBMxe41dUw947Ko9qsMoY37myynqxCosJyCLqbpc5MV2qFbWmGQn65g3mp55KD2SM5D8TDjwUxB8ooyU",
  "key11": "2s2qfAbgmDEEJQDm1ibJ9TKqHHHkw5VuoHCMWaAuavPR6wj38novxc6XEMnQ9omCGfenrPcq5FNtQEhc87GBLBgF",
  "key12": "3KVyBZhDBRAa7sDnfrJghpCJ3MMDkd2JnrLaBBSo5agYBEKdkQFaPXDxN2grdPo7K4APyYjqEWEEyT7JsjKNkRAG",
  "key13": "4ER5hrfnudhVQTpf9m9SjSRYDYkxgGWmfcSM2fA2qvht9EasdzKB26HJ8AczJ7vhT6hBM5YMz9PSr6VLP2JSvGTw",
  "key14": "qR9e9FSfB7J6BbEjDzVh25yVR8avWuSC2Nfr5dh1GZJSqZdQJ4ktEjpSHS38irfycUFYexdoNLQnJMkAGwvH2oc",
  "key15": "2QkuKZ2NXDzHGx5BxXUhgGiW8kSUL7Ep3vn2PaurUmeXfLW1UR6VhuJ4aQb4H4PgDNVgGjWVjcbJvkSE2n7d8oJw",
  "key16": "4P98miUYkssedehhPvLSA4dfKa7wMPo8nr4sqbq8K27NrrYJUC1xt5PSRCHrbhRTZFcp8MLZ4ofDSA5D3MEsVSPk",
  "key17": "4wK1W9W41TWM61QnLD8SgAJB4f8rS1uAtMxUJirmNMY3jqWQuysQnF5HHvZepFcFuyLvatzg2z77VgCEa98gvzS8",
  "key18": "zfDZaAg9fXCRVVY4sxJUg9M6zZz6YWJRJoHbYdpJdSM1sBt1BFy3cm73WqVQweCdYHumg54raifY5yfcwaTamjL",
  "key19": "3kjtJdFTzRUJ6SBKxsiGbZos55VdqPmjBJ2yETZaQB86rVitWA4gp7ChtoCjHcDmG3uwMTX24m2kvBjj9iD4M94H",
  "key20": "2GMJLzVjfyfVJgGj8BFsGe49PENoSM8qQCvFYqQM764cHC6z1soPVLbvsij8ed3SDCmBHWabbM2iDaXqcUPovLcp",
  "key21": "4nWrr59i3uQB3AxjU1HR1jzseZkonX3vJT6pStDE8yTVQMvHMEr6JcmBnitdibnnvtSnu4rdYzw4BY1KXKLhkeS5",
  "key22": "HfyDsNe1RH4eNcg3CLgkAa9ZgteqCYEG7H2kDGKw8SCh4ephdZHHtqbMxzj83kDT7XcEm2doNxnyHgcyTDAtcvg",
  "key23": "3F5S37wLaQ7wmzoGYY73zEH9uQjCB2R2akhdwGunsBNNKQ3tfqry1YvN8hsViV7wGs1wfpxzxcX7h3G87hvN8VLL",
  "key24": "5hEJB9VMSheXGX9TNdSaKAzwWPn8RbL5QzKQdDeJBUDwKbrv1EF8dYWiiBgA9ddpQcSUyb3T9a2BXtqQy7qnpJju",
  "key25": "3AtYSv7vouBrk81a6VHHa5ABpfnVLEtQME9RTfjtbJpHL5fAwEF3kJN5od2B5zWLezC1P8U72SkUXVcoZ1KSz9aU",
  "key26": "2m8tTZQWbzWyDN6nR6QsnkBC4bnkfgi8M3d9xNTujDfau1S2jMZkngwQsNjBejLBw35bwPnpudQQDhs65NiDeS23",
  "key27": "5AKKThw9yru8dSnZkekviNSsw4ATMcdP7WrEDxSDw84fMJNwEcbBsBrtL9pR6z9WcSFkWuJF8hwxM5pCBH23q9a9",
  "key28": "66qji7C85AmYh7eL9iG5znJNZCzD4iHXFe4yZqYs2PzDRFWTfZahnaY2FjrU1SU3cbL91hdSKhSgVPXLsyGr7V4w",
  "key29": "4xwFqJh2KoRNwK4xAQnfxY6kTe5fzYgh55bZ8o55EwoEUNSmtnK8Vfwnwjr9vnsVrjrpahVQva4KYdtXnxjmVYw9",
  "key30": "jqbQ27E2fSBq2atRhWMgMfW2EzpPQ5pcb3cRgiYcqt7PgS3JB7cRUgZfB6cfqgBJKxS9YhMsMk3s48eBXb7cQrU",
  "key31": "319ccuWwUVLUVKAWfuPGHk9ayCeERVBP2DUnXgVnaX2fKkUoYijb5wxqAo2g7mwKhgoZVj9ZLNSyYYTais51wwcd",
  "key32": "3cE3YgrJc6CzZL96mgkcrAEoAWeRkStCbst4X7q5HRKvPvApUjs3u4urJeSUjiYJ7DpRe9vBuBzKNcp4DQwVrn8p",
  "key33": "3b1Taaecj6WaChA5sfiSY5qsE834Pa9iWDzyEms4PoSLJySwuUdk4kQKmCPJtEMA4xwwxSFeD3yZD3Cp8KxXWx2H",
  "key34": "3XE8nxy3co2NqSTV9SwCGi1LsTMHv7DRHob9WmjyDXVFBZN9jP6KSX2CjUqXcrsF3dYE5WbBRWVuGvzd8TkpQkF4",
  "key35": "5qG4rDvFq9TjCPhjKSiGQJmVGAaBQoH6UtZxkpNWyLhaTCcWvjQRPMapueZx4dGAHHdZovQ4MZu3M1f1YYkMhUtb",
  "key36": "3eadTuoCUmGQjn3FZjzmzbgm5ZMXkNKspEFrMEqn4nA1TbzkFX8uWJAhoDMgVNsaNtgn5DvNyBNkQvHwvS4jbJ6k",
  "key37": "5KjuNtCJ2cXWbzeU44p3owYJC4CUXZAgvh9tNNN47TKN5L8msodto7JSA5LDEHuusYNPLqFNrbU4GRGv89JTmisY",
  "key38": "4ESKHYNiYFWCrbRkvdzmWqz6dtJ2uETp4dRtYEiU9SzBTiehQWLLLRw4Nq5x7gvRnV3kuALhDygHgy9KZYn5vHpF"
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
