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
    "5Qq4YAJEAvBQAtLcJUReSHY7w2bY1rCGR5c6n6wpaDWjNJ7atyP6FTCFxEvNeA11g23DvYbgLajFqxt826AVMRw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57kzujiAsNNnaM7hGUqjhxq1pZY6N2kQascrsoYEo5UDkHdLf1Je8oUfeRZ9cEi4C1LDRX3tj1BnMbna6AtpdN4Q",
  "key1": "2zD3R5LBEN77d41w3VqaG92YPaNU1d8XJHaxPsQkp6wcffz3zr43tdxGFTLtSbxmtNZ3rZHVf8bUBQ4fExGSzqWQ",
  "key2": "5RtoG7LNpQtB3Fzce85ri9JDbzMeDQmr7VsVchCA66EYzGKfd7p2DS26S8rCwxVACPuzDi6xkz4fwBnSBGXvMD34",
  "key3": "621uHsL6XZ38jExAoNQm9AjCVPbbHSt8fTEWuBzeggYv1begf7pFiLWeBPUooGDx3wiPtwoL8F4MR7BBDMJWw1Xv",
  "key4": "3Lpj2jy7vaHbfmYUsr8nkPLAysaA8AgwiqLCKLimxUqiF934e5GkgaU8wimF9U9wmCJ2hcE8UadDt44BheRWfARS",
  "key5": "5WfJV3sTsHW4fCXywdpPftdnauXt9YB2QzADLa6BqPPDMYpYTxTY7m2FVi5avgZCwztjh8HgvaUMJ7d2VAGowL2s",
  "key6": "5okP6Hrh1adiaSjWSwm2AnWv2ri6eVda4fpLcZe17XqTB5msaYdHzfwuoxtzUdGwmdMq7gVjGjZwwpCAmUiC1ZVF",
  "key7": "63uJdqowqnPLTbyEJJXvnqZZrGMPrFRERNQDpwJUK5FahEKK8Xtfmvf66UPtNagNKVpovqoQcAuGkRYvnQcwx2yd",
  "key8": "2zEXauWuKyBuXbiotBoCN2nrkZbsAFqj9YngVXb78LNdkcYQgiuwrzaoJQx3hrJ8q28fsUCG1oV35BH3EK5aCmuX",
  "key9": "v7YY1outghPtYZBJtNb1uZNqJUMe5tfzVmAeZoCnnZg1MWjezpHHzNvevwEYTHMcPcuW6cDiRCnXxXZVu1iDh13",
  "key10": "5Ho2Hcqr9jJLVeiQA5VdXMfntbZ4opbQ3FDqwRVeU6vmfE111fEceusrb2f4df9wrWtZmmrht9VsGmJirGAmxJFF",
  "key11": "2kdgaHoB4BQuovseV66XeVgWuDAeMDndunj5nRdhNoWW2us12kUrXfPx2XsfR4SSxjVYsQfK3aE1rYN1ziEcRzAb",
  "key12": "5cUSdFP3HQCLKoooE63mSmVCPHtauuftR3o9xxLip5QDCM6TwTtofiMWcx2Y653Gf9FwJjEuUEEF2K7XVZVZDXmJ",
  "key13": "GMnnTAoCM5iNJk8W6FXU16EK4YXQPuopWbsBZVTUGdLsZQz9xbzPJBABHkbxNxtchQaHYmJK1joN3taishpk4cy",
  "key14": "4Vg62ziqxQq5soeTpNX7NNYwPwnw9bgfwLuqoWeK9kDe83ucyFqmHsoz5m157MjVfKHp2aiLrX1vsh5Vxh7XwX34",
  "key15": "5b7cyxnng7sReNvPfeBrZKLPmxmeRNwubHTvHVmBLS7dKUn9u7ge2K1VDbTWtUZzdfobYwYrJYHArcmJjqEwYheU",
  "key16": "2HjhQURMLsEfYptq7rfC65AzRX8s9GQebVfuqFVSjktGbJ1AVQsUq6A92Um3jTiNRcR31caGF3wPrgD3hmRiB4aR",
  "key17": "2sLWGC7yQf3dAeUhiVG2h9fJvhXjr8R18DbeCm1KX9KFC45cq8FoVCQt3kiHDYXDsoukiPqaQnF1rVyhauDbFkkW",
  "key18": "3MzEvE9up8XSKvKX7pcfqGY3cjYsuU3x1cyFrJj8rFmjiN6eQuEthkNvUSBpHgabRSGk6XSaKer4as4w56MYfckx",
  "key19": "55rmjy8pWhAo9j39QJghLCA8YAcC5AvnBcUBPfRQPe9DerWyzc5PQwTLJMq9NXaAaovSBTYWGVCY7JdKBMr5iuwo",
  "key20": "5eir2c8LYa43eYmPf9dN2cx6viCtRUiZY4hmAPVnqxzFpnD3QXokvaT3tqiygg5mYZWFroMnFbPjUbKTkwgv53QR",
  "key21": "2Fp39TjJhRDgcSDKWiFBDvUqu8reEBDsZdXw9UxgcSc6F3b4zRuMxigJjqXeh9HWkzSWTawLsxpLtaYtoEVQb9VT",
  "key22": "4iv9QrR1PhcG6TZkeshhPZgrgvCwdLfsmkwBDYFmkzR7MFDm1vuV7y7nvCXPiPmcUmRsKTXLLQHc4Hk9vhxcbM7K",
  "key23": "5EXMDSa8MZ2g7Mxpu4dcnc7fQwESCtyeFjCXQ863cNJjnUMfpoGgSMWRp94ekcdiVEXHCUa78aenYsekvrDTd3DS",
  "key24": "8cjd8HyHcugMBcndE74VBdMZ3EjKtpBVMikbYrBBL6d1jtUifgYhdpY6sYwPmUUJoY9PvaFzyFaZxJX2Ga2DfXb",
  "key25": "4LA39uFrudbBe4Q8URdcVBNjqoVaaRveZswdLSUPQnLGv57eJETy4TCgbbXtYLVWJdeSBAWGmAVhAXz5so9MZJqV",
  "key26": "3vEf1wUZh1S4FkhZxnasNJD6x9ebCGqUNpM57mqU5KhH9agQ22zkJXGFA3XpHmJDzwEMhwxfqJBKfmvm8tguZmbz",
  "key27": "35374TqXbyDT9V6sdwv3U8JorxdHQG5WtHaQg3TzWqhPyb1e9JaZ382qfUUf1c3hhM36JQgf9rw5RCsnPmZKTKNo",
  "key28": "4HGhF8MkcwEEhyBu4oAXiZcU7Da3uAM4zXx5D1FKG1uV4CQyVtdtzSD1RySbWJ4MZWny5ET7drbkg3VU125teWb3",
  "key29": "2Dg98xLzqhKsjGFkjfrNpUhgXLbMhwBcw2pgFk1WGSCBorhzC8HncxHQv75jKRosP9oVWgpwhgdao169DzJJ4NbX",
  "key30": "2HLjszyvnAhfQpCkhBxWjmnMVuMAvyFBqx23zuNNTHty9NkaHb2HGC6qQy9PXViYnxLvCAYK2RGsnSG1zGy1mnqZ",
  "key31": "574kjovh4yb1zAypHQPDBhiC5VKTFzLuSLNu7MaReXMh4pzWmPukmCPK7GcrWKsTWLKDnELhQ5HeeC268jYVZzXe",
  "key32": "3J5MBBGk34bA9yJt7g92xSL3BXtKvHiEse94H9g6MCoSRFpCNbNWrd4aiK9tjQfxMdPGHVY4a9u85nGi526TL9pD",
  "key33": "3wkeE3YgE5q98ZBh2Dot2GkJDoVJj3M7LR7mVpds3DJ1hPiYdhopUfQGoWJ9CwBpXtSpZCuvPG2yFsFfeVZXMDGT",
  "key34": "5frsJMJfDpmtcmBPi1Ta7iBCQqzJXrCm26cqrGkkbrBLfFZsq2MhBd3Q76Qp7EdJydtnRHM61vYzSsRGmV2HxVyS",
  "key35": "ooHfeid3eYKP6ojxfjMz22ZwvS34RVyYf4hm8VbKASLxdxcH8pH8UJyaywCjabL5ZnCXjVJfdPzqqJz6dav4uEU",
  "key36": "2yJ5BRt7EKaMviGNPW93QLQEzXiyJZCppai1SSUagcmnPm74w9Aza13dys9EAZsqjDYhuUujMUDFC9PcJJsSYVYH",
  "key37": "J82P9VPPGB1TfJLQdnUsGsV4S9uRJ7ZfbjtMyRYGn8xUFnzFL4wL69Ruwv5WLisNAipDN9DWuUWeBHoPFBmt5sm",
  "key38": "56zPTb5zqtHZMH6opr1qAkSp1ZYbkeKc4g1CQdUGuJQioV7xEzRBkc2K53LjabFW2PCUhXe9rQTVRmoijFT9pfUc",
  "key39": "3eLCXVwwSH5bbjEYviGnmdFGCGTUxUDXm97qc8i46NxpFvfuYCqPGfP9a1FtEtCEz7Xn8suSVv4uY6EJueg67BCQ",
  "key40": "5rihdLmVm5caZfCZapTGNuHPFCFV2vzDVVu4Rvyi3UfcBWJyMxt7VdQw13bb7vXe5b6pXwSxu24CEPaW9YqdyRZr",
  "key41": "3AdHobFiqHwX4hQ2Fx9N6DvJ8RkR87g1q6cvM8fSU4zAmMK7NUo4Mocn7LTmhqvbCt5kxDYGzs93uXbKWTA67N7J",
  "key42": "3UX2PkvArbHrDktCwvWdwu6kcHY8j5GZPc4iWCv66WwSWMCJkz5vFCfsnsEAHr2Jr5iu3XuxnUA94t6B4QXYrpym",
  "key43": "5XQVrJdvrYdWHGYbpyY4AJPyFwDQybQdvZSsqTf7ueJXDjDJaBd4gVoLGsR24PBQajzXo3VkkMcsdyC8jUBBNpBe",
  "key44": "33EgDoz4RfVmgS9AF4gsvGumCd5MLkF2yPJQg2nnKcMM4okQtxsfwmA5VjP5JB7ikACWPMUQ7ahKceauJ6Fy1Kae"
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
