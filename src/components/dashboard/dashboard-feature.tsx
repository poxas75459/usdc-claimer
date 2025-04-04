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
    "4LogCL4HJmEttMjXGbASxgjXoEp5h2JRxKxXJnLjPofqyxsppjSSqy88g9JASvv6MgDeaF89fCcif9HeJVihva7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "372s198ABokAj5gaadb2YxC2LbHjgMMz4SsuWuRq1FvnZynwRx5XT1VmJg1htFVUeQVSFg6Tu9U4gTSN7uxbjXMo",
  "key1": "3pYwKioRyVQdXoUiE676554Ax94UuDLzowost58FPkxtZNQtCV5DRJNLdDhS5x6naYyTxTVqSnv7Kf6LRjiD3hAn",
  "key2": "2XKh9CVH5jvoG53EZxrmhqmZrsjWrGanojf1qhoqSK8dcCALb4zbetQ5Vc18f9zbXk1rmoyK6zGJWgP52b1mYJat",
  "key3": "5tWvriwFsF8uC2AwWxGpq4UAtzqSGcGipVjiBVTg83zgmVQfyoUwfsHYQS1mPS2BPT7WytDCRKU5rPuoaf4NmLTH",
  "key4": "2sUoiapUWjUyP7cpnyGwTGky9yi5YnBtTc81XSg7Jz7jXTUVTQwvMZPbho5XiwkAUsuPRHoYQfnxeoqqP5TVfX3R",
  "key5": "2Uoj4JCxNvCvJJdDrsqaRoEqeJUr4SmFpBa3ps8GnAJcL6e5EQANyNHsRKZPU5dJ9eu8AoGX3ZwKsqkfnQQ5xAKb",
  "key6": "3TF82Tiqsps34aVGEtM7HJwiofFfeQNmK1vBFZjhUpr2DiiFK3bLZWJieFqD1DYSbCwWCYVnpFkrvmWBpHU3SfTD",
  "key7": "5GWEwwxKw6pgUVkhKfQunCtwkDtoRxshwHnYVhSEoex6kpDpUUfyFGjYWmdTqKrVXiPcWsKsnafAXFrH1YD7LKwS",
  "key8": "2Pesj6dtxTN33ewnCXUEGDX7k1DSNqp7NxRCe3TmgiZ4NU1dse4z6Ppbisdo7XsyoQhq8tFoJ7mVFM5WSwQAqPpz",
  "key9": "2dyckRA2gf8czZ2fJ7yuxyhQ6gzHUCE11Xeyg5tm1ZrSnMsrwFBNheBQqccMtv9CZ5PpkgNmNKbygj8qzHrWvgJm",
  "key10": "2FndjwwrfjaoZCxegBANDWpQKHmCQXoCfm8VSPd2w5V43TUrzPD5D9VCKL7PH6g46tNxJF7HvnHx6z1Syxctgf5E",
  "key11": "2RcEXW9b3XHZLg9ydqADPtZpycpnb88MxFd1JtgaRKz5wcMPk1o3KmqShQwHTUXuXxWWPdFX8zAu6C9v6Zdizrpz",
  "key12": "3Nner9pqvbMQmB8yPzY7UgfgEUoXSya3JQMLC7NvLG9vSti4jfzRKgJJpPETKPQZzGqGCuniwHPzLRu9QPZB4AG4",
  "key13": "4kT1MZX7bvGr8bTrSwxyc3doQBuGTiyCwaNJP946hBtjHP3zjbaCvQFeaqM6PrhzgmvSkAvBcfewmo3aBi2Xdu53",
  "key14": "5t7Kg1Vru6CrqLjC5QpEUTbMdy253aF9NYvuuu8FNZLU2Cr8YQFEVWYUsy86T6rZsCTLeruJgzExgTUxz3uFQo4T",
  "key15": "5zf57fZ5oZYtWrYArAk45gSHBY5ZMiH6TMn7aiPwPAQNv5Moy99ACJGkXsk7J1oyeRcu6bEZQBCoJYgQopxqCeDV",
  "key16": "4C2ZaDfty4inqfNGV4nrFxcgUQUFet7yUaMhZjbD13eAN2pGeVrMFeULoPuxEDXZ5VT7djErh3kVV7tXuUAYxrSk",
  "key17": "5xhncx9mGQzxhgRmixNGESHVgvFdNsz7zuvSxi6L1JK5QKMYsK2Ybgjq8k4GP4JG9AvtPGrFh3FUx3s7vgfCNjC8",
  "key18": "EEomg57ftu1n9iMvkuuMKH7WPmwbTCBVN3qSBRWaeWaZrrByKcYUEBeM4fM3fyxqEgkaQAavjaDFjcq8FeEMaKY",
  "key19": "n795v2pD2N9CfHw1mYu2LhF5KbXoxwbQv7XjASLwmewTnnrwNwswrmzruvPfYBeoMynqFiU93gGNGiHa8MUteTr",
  "key20": "GPpJdsowQfWNSSoCNWaymKTu4iWRDhtjcoux99g5yGHFeH6KRazCcoifMVhXbfdGyDiWfbze8jimfDZXRku87H1",
  "key21": "4PJUF2tNVVYCbF8rihAD7EnGDtXCyD9kWqmS2o7b47k9HHJACFfN7fnJqJ6bM1PxtS4nERF5qRvAPezoSZjFTmKD",
  "key22": "4eUDTphWFdE7U8RcgdFVTquc6dN7DAQSWkXNyazJVEHK55wJ4AXhJCf3sZAXcKFVLZ2T5kbyL7q8QYjLvhfjsquZ",
  "key23": "5h4LF4G3gLHprEByadn5cRCQ8GB6F7vwizjjKuPwGk2DWBLsGGA2zTSQSzSy66H4RPPAxbpMWqGXDpUDZU1jhB49",
  "key24": "jksdZYYjBgZrXeXR1scEf8cSMxbyJXrs7b57XC5cuEHeokKbtbByTaApER4WqqNymc5vwQC3e7VU4pxsADBQ4JX",
  "key25": "3uRahXyTgDpBX3oLevjsMojFYzbqDr3LJYgxNuHnJJCz7zHSenVrjxVDjawfzH2uKaM8MR4WmDr1nZiLZ26foajo",
  "key26": "5AmcnkWzQAZXMjKo6Fr7QbGykgpjoFSiqwmdj5eUAKsH1K2ESocvaX9LhFzKQDEyDQmTJrwv1CtwYFEQ7hXUCCJn",
  "key27": "LiZnp6431AAmeiPd9tF8M2Scbs4PT1H6nrC1ngcLU2a6LnL7C5DfNa6RAZbM9HBj4QgnmKg7ebKUXvpbKwZ8und",
  "key28": "42P3sFUtmsgfYdnHqeHtgUZP4FjxGNKyZznXDhfo1jd7A6dXNA5WMi46UU5QCAnGAen35qUJEhQf4eDoPqziVtzC",
  "key29": "5Z3dvL9rZManphizijuj4HQ35gX38SVEyWw7zqNzHBTUK8Ha5fype9H7UzQv4MRq8FjDHbwLUawhMfW67jdE5iyq",
  "key30": "5StQcMminqHENL7xTwEwPYySphfgLNRhM1JxGYtJELzsegz7DNSSzQt7NHrbdkv9byQhSLiFc5ZdyjnDGseUvULf",
  "key31": "3wPPN3ruu8uhFUunuJwcJLg6evCTVfyJAY7G7ZwCw3dcega3PKkcfemVKmxWdf5NBHPzedP2CVZ8RVMVxTZx3j7A",
  "key32": "DCe8JxzdCt5vb8g2wEH63VhDbUNP4y5MCMTknqhrNFXP7PW7FuRMMpujqFjWBVjN5u3EAoyLhcV89UJK1GJhLVH",
  "key33": "xrfRRBaJrbBevPkAmrbJmaEyFmxuz9WVg31hDuxaH8rSk5bWmBH1efSbCu6ojECSddqMrqCQKYNSugK26SY1S8a",
  "key34": "64xPWK5TRTAEgdQZhWFJZn9SkWpf1FMgFsc2FC9GRS9txcVpntJxEZHPfgu4E8UKfh1wHZF2B3Skifg4CSCGDwHG",
  "key35": "215NKuPGLEkB4kbRwqzX3NXSPUJLDK2tQsGC5rsj2nhMJnsSJ5ZEdd87MudiEmmXfCHQgJUQCHB3oHF8KuYDs1oK",
  "key36": "xwi3PRDdnxaZ6vZUo9jN64ixHafQYe2GeMAMa5RrxdySoGeH2yzjFuSGFWw9AaD68BrPx8FDR1nyWboaQRwUz5j",
  "key37": "42QNRRs1eeEP9U6wpeRRUrYYawvok7VGKNgSp1e1sa8RtWPN7b38S83Dhch2cuCvHKXVEWqCB3M6V7Cz5jKTsozL",
  "key38": "53QcG9fFVvfcze2yjGf9eEcWWhEa46QEC7NGGmchGWShm6h2VJgwzD8iJJW2zHCDtY98C3yFWnoMHAWsB3cfEqzQ"
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
