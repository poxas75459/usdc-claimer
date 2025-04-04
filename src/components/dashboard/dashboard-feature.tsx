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
    "4rFXdR4CrSUVWecKyfZkFwSa3b2UdapTvjaGp8zitesffAiMXLBVDNZFU9mzX1YSHzQNpoNaxQpu1n6w23yxCrnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFH4kTu33yciWrP6cUoxhXc318T6kTyv9m4wtnwQm1ycauasPZmsLyyBEqeNcmVT5uVELcgTz7DNQ5Y7TcNTzFh",
  "key1": "4qHfdgBikNThcizinzzQYTAjEx7HkPyGV7CER9R576A99aWDtGvSy9HTB2rPeWCqvQKJYpCX9qbn72DwosLxAyY2",
  "key2": "5xeLMadtsoo8os75wLgeihEJbHk7Q3Cxwu2A6ndqu3BLHPaujRdAGfKydHUGW6ZN6NeHyb9XUQoskaCYWSvxLDim",
  "key3": "2fXRgPvrevwiTMCQAzEeZSK3DosjtXCQhthfyARf5z4FhhVktSfw4y7UFBGiuzRgoS83iBEjYZPCNwG2a4ANkqW8",
  "key4": "5rjYbJsCLgwEDDTdDX9mmUkb8jyaoBJF3xYeG9iP5G6dfUjVoXBfAr9FGKqs3KsVgnjLam4FLKa1uqvYAjDEeAPh",
  "key5": "25c82bjuvWyCXgiMb3yUxJ2etwtKxqBtNMwW7UZB7A3Ypxf4ACfNZnid53cZZkMQMoYGDb1SxHQ7HYvyaLze73fB",
  "key6": "5x79Kci21GecqavwPd7CdpyGE529oGDsxDnCLSUsRKB9iVBMgVA9wgBTFfGDHdRkEDFakTZyw7JtQ9W43zH8WaM6",
  "key7": "2vGHZasAugqJjE8NJUGKw22airbW8UC7nZhCdvKPbifjrj5xQRX3Yn57z9oBmwLJbFZusNcJfRGGgnNxT2TyLpZU",
  "key8": "5k7DcjPGYArg4xrkS1Mgwa7aWFnVeFqBbr1VUuBDurWTbBUQUkCG2zCLx55WVXq9UvyN7Utt4L87W2HgxgcwjMKt",
  "key9": "4SqLoPvHG3dzmpUP3uNCau7H2U5kdNQn1gA4VFVKN9XYQCbozZx3fBmx6KCmJGyWD3QTcKeaZi7xAby86xSWFosj",
  "key10": "nArD9QgvV8oiUiH9ZFtreME5wsNqtdsP17gWU3E5vpBVLLcf4jJ82RpXALUQL5z1iTQTx6srBWvbCJEHLw487Jd",
  "key11": "sV3xifHvD5uLeWFVJKTzUH975ciNnoSWtUc9Q9C9RY2bGrkKJdqLR8UpdQUBZMa7gkbXZ3wGjQSirNQY1v3uCrt",
  "key12": "5SCBZSmup6VXebLzc2u6WPjxEWQPukB45iUMfjk8Vxp1oPmAhWnxRRs5jMo43yiVdjNdDjrUsscPkachuhiddcuK",
  "key13": "2bN5EFXFK4h3bEQzxLn2MDtjT8EGH8VmdgLs4cqiJUuPUeMcZMsJLUKMvCPdbWXZ63KoubjSgzMngGf66e8A99AD",
  "key14": "3e3wPciMZkZ5VBC1kXAf9sGkPHyJ7BxztaJGjvqnzuGkXQgCfysqkt943YdtYHcGZLFr1nLL3F2Q5KUyYq3g86xx",
  "key15": "56z87bsiVmn8YzT7YDYGzZJk86yqKvKfmmbfY1Rxd6pY7DEag3SzLLVaumpoEiUFRFzpJCSyBH3X1BGj4mmvpt25",
  "key16": "4acga2AraQyGXKFKx6S2fJYHxHdUCFSGEns1ESmrGskrDHeab4PhipKzRQ4kTMAhQdKie5YNzsz7TwPjqwq2pMft",
  "key17": "2HLCjoWoEbZzZesMt1Hm7jqU1KYHwyA6o9bwMVQRkbsLH7gh4bVsVMuQyDbzLAttWuiuAkaqhpfvG6cwonuuYZ99",
  "key18": "RautfQACNNAivS2exsV7GifSDB4MZi4m1ysAV6mz8PvYNDQXsWVSYfzQSyAyo5BsZYYLUPSywcEUXok36dXyji3",
  "key19": "3CzX7pRYSMV8oxKSr4XLQWjAMLPNqB4bw7u58P9ATP1CKxR4WPi4bBxABpTTmcsJtAEhCQcC27S9MUeBwC8vrJ8d",
  "key20": "3NB9BrWYdMr3Sa4E8gJ5JtTPZhkuij144vHZdbvxH1rcKjedYoh3UtmdKrzLJYomd1YypqGQBndNuDVzKfYASsUc",
  "key21": "MoLufsyfrNFsRmKuX22oCmtSHJRzf3XK1S4LJ3zhz2ggag889QVnTp4sSdUqbhRwmxAaBhPHybNLntjHymSqx19",
  "key22": "4aBLsspXMwTy2UdwGjpz2wHvuQeGWvxjESb54BTE1rn6ybsnnhzes64yvstebA5tSSaLc93FDq3n2TkQCMQDPWya",
  "key23": "4moRodvngBa5EGoiY3YKUpSTz9DKuXSsyXEEAhW5rD2ydKaDCWyubszQWNb7Hx3YNYNcGVGVVPrq2qCZMgqrT8vZ",
  "key24": "5Qkr2UTfSK8UfF7axqQkuFTHaXAKB9W8wFy96JvshPE27depsVTNMUBKxm8drYEi8BQrYeXACJK21hpBPo138niJ",
  "key25": "3hyy7UeTAjMoPoU1mczu6ZN627AG9sVkSJpqZJazcrciDp87JGMAyinkBRr97uY7qRNr7mWbRWn6bkkC4xDobo1R",
  "key26": "3eapSc7VVSYYbTD3ZzJ5tw8kB8SaL42qWfEdYtyxB9KWor1UruLxLGzgrQmCyQwwj7LyN7Q2nCrZqYDV9ogQBEYt"
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
