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
    "44syzjvAFSgfqkXeQPus2X2Ho79bWSKJXrtfT6HkjbXLG2apMAKCpBWHRvo65W5RCugsmxVGDZYQLAcVFAGDyyVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDcQU8Xv1m89Uj5kZ3PWnFm5ZUE21WGNyPJDThXqiLznXCvkoSTuyaArgkPMXPxcncUSfKxdx7FJWwaxGwrb2Ed",
  "key1": "3fQoa5ZMXYFSJb6ykP66XBtXaNmu2boj5ywhrhTM5VmQumCftgmjD9W2vkZDTC7dt7B1f1Ghz5GKnToV8ZAL6URt",
  "key2": "4qUmzD5v5qmBmJ2eUrYvUyfJ1J7dUBknFjAD9kf8MN8UBL4JGC6an7cv6NGwuMaF34MnKcBuaBMSAyeHzWEoyh2q",
  "key3": "stKfSCV7WH5XnPkj6UyAnErTbpSaBwBpACJZQK3RauLnVX1beGxAVtRQq4s5RFWJQfuBS87D4Uoh9nhR1bnhN3n",
  "key4": "49fJcXVKAEm4axMEVHuwJ8SdK42etXLVyFojMkjVJEwUSQFixWEcEDzPRc6GSsAEi2WUL4JUcpyKodgTjoZQ29Nn",
  "key5": "4Ega9C9Cvj1ZXFKpNFSRWGA4GVXakqTyqkXXFVmfJf92sgjey1xUz5TrZNFwnTXFZS98ntkrnn6Qc8BPiSf3ndGS",
  "key6": "nEEhrqdYpb7tcoWHHLyHHRCaJe6TG1poKSwttaRK8BGCLTAbqVa138dhKPva3EfhDwausmUrkKhAGKC81mwAfuM",
  "key7": "5b1GSgm9oSc2duVaxhjtScrbi1C2QVcqo8xj3BV551N8bVekriPvqVe3WHiM2Akmhdj8aLrT1aFQXQBMbw9evbRo",
  "key8": "5T6pFCbG1Cdc4ZYVhp143yXLnPZSubPDdHyuuZJ1Pdja7tnbGpH2tdfThxcPntwkpfub7tuuhpet7mZ1GP4BqRtL",
  "key9": "4GTZ9YLuXSrU2Scx8VcdVBALqHWUiMqcRuuctsWGfKpBLjEQfX2Q7jtqZ8XHD72HmbVwHtxKQQFZAkxJS6C6D5pG",
  "key10": "4ZZk4FXzRexTR45ZhxPwrSGQGdcqEVYyB5KFnvp6xNCB8Db6A4Z8FsTzeqTdHZKnPi2JwrqRzXRqaaZB752bLag1",
  "key11": "5nKztUnJ9KSykurAX7KbXG511NaCRNb3ArMDGDy1Yj8XjXgtnZemuh5ezhqmgVSZEZtsum2taW28pigYo4JMWTuB",
  "key12": "2d9yRBy13EqsAvpb32vJytT9LZTgCVCTR1SdTULVQpoJoitxpWgHftFkZAMCkodwFtR12XC453G5EuQaVrdSXVrp",
  "key13": "3dtpgjkSxvgTV1vgr2Afp6qhNzDumwxDTuiJSFFEbu1FNaCoNMZsXyFhVvj1g1PB7R4irbDWUTgvK8vh7h3VxXTa",
  "key14": "5eGWSFErqpqXjvMkYEBBanMU86QcxCmiywNVSUU5GMJ2MUMYtHwKznbnhWh2pXzxDDZZXPvRcZx1csqYVohc2a2K",
  "key15": "5keUFYa2cKfW6tbWuqfmv8c7QKctrZ1dVnPukgF6J7hU1C38eHLaeZVCzY4xNxKn8rZ8kvgckewjJZLgpHjbStgv",
  "key16": "3AK49ypW2TpLevjZzJ5doxL2RJebhHZFChxkDV7sgXzvC9Dc1HWJhd1ZQMcHsVdzFWvU6HvYwJaR5kvYudYeLbLj",
  "key17": "vmWvAkbGemakfUsjxW1jbroYHLaHbAhNYd65zdg1ueKwEBBP7jbWKoCQDQWttPBraH1YewHDnvvPYEUUPDjXpoz",
  "key18": "4QH6tCQbLSFkWQP7MUJGjnLQqLQAoJ5DRpegsbQ6GgAMFxZRBzFN8LXKPJkfXWvyZvU24SWsVWftDHKwKBSuRgXo",
  "key19": "4HSJDBWbPPMJHAMPbuuqB3znRcHkd351GgrSyu6e6vsiwif7Lh3tQEDYXCfk9MmEZNeS6n2nQpNWBdhoP3zZeBDy",
  "key20": "3x8uuc6c9eyGEgbzW4fXMuj72AFJx736NX5LLrJvHGgQ1sJLHVKMPHFv6tPVmNAjHNgLug1BuTajHQEXFT53AEq5",
  "key21": "4SSZ5EUeHKSeRSxmTNZvRc2hpwNU8kL68vjiFsW8JZ5FXGPp5esy9wMXtQAH3Fahpxkio6YFUSvPoUffhVhRLNjL",
  "key22": "LvuM8cPPTbqTGgHroz2uPFi2RAxQiAwYx3m595Rndq9Qxd6kmxr6xJ8qEbDK1YoKPXbhpamydPRophkXnScNCiB",
  "key23": "4zhUMCbPWf1NmLzyG3qJC9VsSuXhCww1rFhf4cLDnuGM6b5pNsfGkSXsFPMTSgLzEW931xcQR7XzGfENeCanNvRc",
  "key24": "26v4pfM11bp4fNEqwWtENqFD6pktgUktBZmW1cUd5yRsSToywsnnWTxvoQBdsvCaZ4sxXwrK6JbdzoBGiCkR9h6s",
  "key25": "3YqmN7jfjgv9e56m1kngw8NkaFvFE7SyhgcGtBuYGz35EaPEYYsP67iCTDamc2iW2E3xyhfp7BDPgYcwC8QnsC3i",
  "key26": "4dDmKovVH9eV6PYbfhWjz79VX1YSThsEHejAoW3YeLBcBpGYKw2XAAMu28wyCkKE9ohHeSxzbTBpM7SvBtSRdAfD",
  "key27": "4yrfmXfNvT4xn2Q8xs2AFnWhD9aEJDymiCywxBzQq7V9XTcLSk2bPrJHTkCXEQZ6c4fShDkfAweqyyuHMQPXvVGR",
  "key28": "298WZ2FnBYuna3hCzN6V79By4ZDNpNj71gpGV79n4hCqrRDY2ntp6X33JHUrsM5gTU5wbkwoWchr8RPw1oFVGK4K",
  "key29": "5Rk8pvUDngjjPHfiPSyz6QTAeyNVdAPAWdZWmxogjSEnHexcXsYJQojzjVrBQVPBfcuphHAXmmbeUEoet8csWkwc",
  "key30": "2WAxQ1pcGfnzdUX79qRQ89k8BbTRG73Pw3d73e8VLsPej58vkHbZLUWhVHMgRQ6houPGgv3DRvKcKjZLUypm2xHp",
  "key31": "erYYggzennBc5X8CY6KBo1kwdm6Rby6jqA4vQj3NdexmU94w7MpompjcQWppwXYwHAV4X1QkYHTfbLxoUDgARLw",
  "key32": "34hc8yZ6a8RY4zBLaZjDi5drwgwa14DHjs2gWshu2okF1eDGz7a4iinp5z2fckpiVPGm9ReyYQYj6nV1L9BT4cag",
  "key33": "9HYAy2KAhxBkdCotiDS1eVgVoSxKQDrgQwUvwfpG9eVEEKAnDcwCMn2WZChmcrhZZ9waAZTFbmaK9AnCjvm13e2",
  "key34": "3dNyHtxdp77HXMNaHAoYoLesYhTMGCDwG5TYAtmxhhRQTFGnxJ4oYmGECm8S5HH7SD2BUAA92Yc1L5jxkVYas88i",
  "key35": "4pouKY89w4Fq6eTEPefFVafKf7uDmvf9fj7rFWAUZunWR5V7niDiq5fXmuMaCGW5faX5Ss73D4FHrQjmxBSfcv7E",
  "key36": "5VRQ6C7HMiizLfz4BFBsKhjX6DPTCA6QHREokYrgPpNmKAqpHd2Fh4meGJtwPTkfT5getzHfMHqdWwy8mHoev3iz"
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
