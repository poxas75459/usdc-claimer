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
    "3vYPLnCxAmrhHvVdWeGwXmJ12zk1q8HVApJCSGanveCLrb8q6pupghXnT4xEJeGubGFkDnv74v7ZQQJgSFVpgWyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bEVw7qXzMkgL7k37Keymz9DLgs9xkHNqjzc1pZkbZhdmfRKmVH5245JT65h6fuAyiRQ8sJtcunf1fYBXQajcmcz",
  "key1": "5B6YkRq3SoPnmf1mhSPZSS93NzHoHSbBwbCktgfmicvc7u8CavK7QrZZ6nhRrwV2Kw2EXfAvxSGkDhoEUbwmamV9",
  "key2": "31S8rzYnPNNrEWac8FpUdQKxdbpJuCyAuH4PbmzamAnTYz5r3ZzLCFcCBZ3Ydomp4zBaHao5DZBdCqAb8EE8ib3k",
  "key3": "5M2tAYBgQLUqk7FwN3Wj9ENvWQmgFTAQdMuXnyha2571MnW63tUwNhbDx2JgBZDTUpGDhCCwrznveHNnacQidYNN",
  "key4": "4TNe1zc1TVY4xyDEYxr9QDNAiTE6Nb5qJ3NtuohActF4mHHw3JA5z7Mr7em9sYHkD3p5JAAwXYpNkrJnRb4X5NzD",
  "key5": "3zw9wka3ih5HR5k1kM1kTX2D8ANgwSbXaHPKLqHYWiedWbuDkhvn5GAafbHbATKi819wRE4a4CNdbfcqJhweoDr",
  "key6": "3JpKwL3PEsr2c39RsGdEK5tcYgL2qDsm3qBm7Y9Ce8yJzn7ezGdbeTEfYC1sKAx3bFdt1ae1sbZpEBJCYPippcyx",
  "key7": "2eHaWzUAQFB7L2riWK3ncTkS6c8SBuhoAPezqC9mVMoAsc5wy2dzN6uNsyKmRYBhxU5NNQwYCA5hTmX7xwnwCD7U",
  "key8": "5BZvPypRXdrDHnppnQCu7GB6PE7kTaCibztqd3UW1sZPajKHnk1X58reXnKwG27GTKGKd3uPQzsfJ9VS47XiP3do",
  "key9": "3Au44zJWc4NAsFUUcNMAhWpQa7tTmvKQADbchXXjTNqBcc7ERkUgBHMre2bZVbvHFh3DKc3bBLoipyTTNeBEWhHH",
  "key10": "438FaNRZDDRMQkyMqRoowJe2c18rFzVb6GaF9P69oUrFeZpVmHsbp7HQ13DFhsrAZ1RiNxxfEtAiMj9UFQ6YnPAY",
  "key11": "5qrvboWDQCmNMu7DFEaUF8CsYRgcyvvzyytCL5C5hfw5Vuxffz58FvPuwnRNp7JuieMAJoksA8YNpaSGvAVpEFgZ",
  "key12": "5go7pBnzt1NMhgEhCxkN1nzuGkDJ4qgbaHMSfGgbFAkXEZfasGZvaSYLFLphLQittUzynjz9WqG7qwtahrQK4i4Z",
  "key13": "3ZgnVgD9FB2N3Dxb78kUwtYYPK1wqxP1xeURaQLzno5WLbuXuRHKjmcAc1jgfFQHyEWjUoMz4kV8PyqVfoQ4EHnM",
  "key14": "SoqE7TitHr17vNv15sz7TYi6vJZxsYBqpwug34jaFMyXh5DtbvbaLE2FZVcpsZr8P2PFo7AQLroyetXo6Wvw8Yg",
  "key15": "5BZV8meshKasWTM8vsSzTPwfFp4FpiKZRdz5eGU9eCYcqJHHCU5HsEwuBmNcQfxSksihzKhQinCjRkNtvDdVfate",
  "key16": "Q1Xu7vixcumGC4b3TWwnViqUe3438YfNzioy8D7TsMpNg2dELNnc1NE76146XPvWC1a7NvQhYZBw7G3PjWqp4V8",
  "key17": "5jiWyF42uu4yPY2ZsjVamVBRFcwnB9DLjSCxPy1xR4ba6gEBb2jm1Ai6ympCZm9gvgPnxVdhozhUGM7j59kjexmi",
  "key18": "35RdrQpBn8orE3Wna7m35crPMijuDn8KZcQFMCJxne2tkFqTtptQEVd7gLevcebqomfQWRbN744wC9W3mdVPiNpe",
  "key19": "39WmdBWjAHD8PeEqLNGC2gBMbbyfyhjPk8PM6Jd4zd3E7JLceWdGpApwvPr5937qhYV8tCX3yhHyi5mZCkDCAaeC",
  "key20": "66Y7iP1QXVAU7ju4SZzfVbfdKr75Tf89txBgNCumZS4kBuZU8Gx3PegezudrudnxUDdtRbE6i5Gm7Hbx6s6Esohj",
  "key21": "45vc1ZFDVePMYARge3LM9Y4bhwULhxU3rCV1yjn5PdXeCUE817kVYdFnMwvTdgDBHUaiGpfFyEs2wwH4WbL4oi1E",
  "key22": "3rbsocozY3wkvC8Q1ZxDCWWDCrrfMhGnvEAcVqhXB8awyUk3CQcktAYvLVGAAhhptjBGHmFCUt1JjeKqYBiCpkK6",
  "key23": "3d6kUnrY1T7BDqsWvh874ABNSjXDXwKa2vovF4b3pVbKYrj9RQgrHVXnzBCRqxmMCAX2iDWvDCeyqZD3ZcbtfeMP",
  "key24": "2Yyt8VpK8Gnf9KQGr4BuuP1bsy43ibNix4kkh87rtn4uzHS7WKHZrGPguAzvow1y3MCTFL56eTuRFhaL4u6wLRTC",
  "key25": "2Q8SZXqMEtY5qpr99KX55jdaBGNPkWShJwgwWzRkbqz7yoo1M2yGPDMABmLBZ2XV6Z9v2GUTvYRowXtuP5vhmFUz",
  "key26": "44ijtaNUiQRayLeoStFHkJZwpDCzt3mdDtdNrdJkGREvYuNTJjjBDXdjZYGruMMswpjvtXut8Sc8e1GEnAWibgDu",
  "key27": "R1TaJtqy8jujk89TYWNnkxBF3PjVP4ah4eEZvWjhmWb6Di4FpMFJiruABscjZAC4XHm69LLW865cNhXEG3hQPKW",
  "key28": "4BVh2zGeWyAiGWt54PfThZAsdpQgUEs7dZirjTUyy5sioAvrWKGUVQEV7pc188UpS7LLDbEdeeuRGYDsWNHnoCsG",
  "key29": "5B2H95rbenuTBUw2HHeCQgkMfQ26QeF7R5ingjNyo8Z7NXJ7DTnJvQmLR9ftPPtUmBP4rnXAeuGWZMP9CkuTpfD7",
  "key30": "4YmavbwFbKchgqJGJ3xWRqsfWjxaMeDbBZQRSXprJUWpnRyz9CRfA7Yu4ciZCzj73Ququg4i1nRytKQdBq9Yz8ww",
  "key31": "5M7LSzcLFKip9rMrjt6uCKgveqzj3ZtfsAeftzxsFx5D8kyChLmcMkTmZU6dcjh7iVLT8Ga75AybjUcgqfnocnEn",
  "key32": "MyKhjVFycyr49WW6MmFkFDqqfGKQsWTXYSNsZaZvgTx2HVBCg8TFPapqudkviFhQaHxkR6xQTffx7VLYDJXQMNy",
  "key33": "3XQoc1dkTAQSpFZcSu1wWCpFBxekRYGBafxuRZV3kX3mUeG3mGVgZkAS3z4Ws8erLAZPybqgV49X13DpBmae3DHz",
  "key34": "64eNNt1FF98WcFTE4n8PbEnFqPmP7Pib989kbjWYaDgsYcB88qzL2H4RL87eGcj3WGzEMKW4aKxod5xvgP8poryB",
  "key35": "2qyRBVKKZxgQm7WMXmNrZwdEbpdGxnG1wjjn5ijViGd429xCmQcEq5XT9MfNZZk58uPCJAPmk7nhs1Bd82TwwKyB",
  "key36": "2y93q8V5w9nQjzhYH67FXv5P9qrvZMsuCfhWoUQuyqGKQJm3vFLYSdDPKaMBMw9ghTbdLRbC4Vgq6oKRJuLqfvLt",
  "key37": "3UqMKMKnc1dKKFKL8EdJaWddzyvbXJ3LzFwQpHvp22jnHKLMdE9tsSvyWSEUATJkwQoxKXUKLyw7eLTAdxZMu9QC"
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
