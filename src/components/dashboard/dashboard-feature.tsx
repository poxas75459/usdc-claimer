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
    "4Exd6fThYunzW5ktzkV8N67xXpGJkN7Dy18RrpoiKUDM2qGqoJeuAW3MdKGKjTW1qkVUqZmCbWjy2o3kosB5SBAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L273uXZ63VdiThCrb6zD2xnWnSuQNKR6qHJ51RvWyFkr2fLebbyVCqi1Krv3UhBuFB7dVEi2wvQqZtBhRLhQ6bs",
  "key1": "3ujGELF1RpqXiqX9H3DmUU3RFMzHhQqmaq9aNTMjMQZnqBhvPfv5gSv5nSrpcso3oaTvtTDCfNCR1b7PwS6cM4xq",
  "key2": "5Cjz45aCLbDGVw2F7AErDjC1z26Z5Vi2iPKZkujZDgHLCKcdekTD87V79RbzWsoBYRS6H2NVFTsaQRt3fok2RGuN",
  "key3": "4RsfQAASazZCR17ru6QR9wgfP8nn8myRycyVnpJ52QSZogknxYUY4YvbuWRmarpg7bvmKMfSr5vHGVMc7ogZS8rF",
  "key4": "4yDAZLQvWxosMpJZYKerdyLSX5gysaQW4LToVPzFZbmviMMKjk5XvTEUZuTbf4FHEiD23omfQ3BvyiMMmreA1BED",
  "key5": "5t6E5sR9WZMjk8Ro5JQVXpScuWdL5oyVC3FatBfU9yiQS1jwEcU2jCmNatSm6oVXjr3hUb5fXKvVmn99RoZ9hFqp",
  "key6": "3gbEkZdmZeK2JDRNnTpiZtBrdXpExjViRUwEMvCEKPqwuCu3wzenzy75XVU3zQubYdEn1c1vQsTcrLw4zViTDpnb",
  "key7": "3adfaWGf2Ywvj8bT3PbWYG6Y9mo11FybRA2wfacLDp9g94QpqJ7tuma7ixGkMqb4zHogB6xnHQzYBffvsyhdJ311",
  "key8": "2z8gcG3wmHXFMKXfAumVGABhKuLgrGpJQhzuo5yiANDKsw3D4kU2wa4o5DfSgo666BQVwYbz796CNNzQ3y2JESpo",
  "key9": "4XpjAaTtwMRpaTe2NDM9TMvB6CeY8jw8GoE3qrtemoZcobhnU9QsXumEzwZvP9yLAvsPAyLLZiPZM64VovLrdfcP",
  "key10": "4zTJgcwfpUTuikqaSNLcfiWU2JwfwQszq6Cu4JJ61GvLtrzX4ivG5To4HPUz8ty7Ld3YUM6GvthinGyZ4gWpMULs",
  "key11": "A8h74NxNUGCycn5BxErou1dZZ4g9CiMK48JshvUBVTvA1PhdseZ7dxzrs1ZUriyRzobMy6kggJtWfMKufi1eWqN",
  "key12": "6Fq4Q9ABgH1NyxsRshXRPWcTJvpLysubW21uA6a1d22FyusWsfyxw5Fy3MuLJDccxSeLx4SEoQa18BL9upXEywf",
  "key13": "3RjfG7Z8JPDyXHcrwf1V9JihH7nm8tdpcPDJpKE8JJyggxyEsdcHjRoVEn4ZarKfjXyibtRReXXug9ZpZjFnUmc5",
  "key14": "JMNixpgCTjzg5fbhCHJCAw16StXpYN14qP7mq4dX8HTcMp84jNDtEHw6mpAePHJMCnHJgAgWndNscN6LrTF9psL",
  "key15": "3yRPtSermVMgoy5FD24XjwtsDdaibuGGR2HDM2pXTxwzBGWkxKZZDWiX41sBvC9oz8J5qcGiNfYJfVbXiTvVPyY1",
  "key16": "4eRsYnw6zPp6eDtqzKMy1dcS73r5bXtXWfsHD9Nkm4yG5YwyrymLHvgjyvDXPX48z6Xk1KVxqGPRHdiN8CQ1qJN",
  "key17": "3QwFrL7A2WHTi31qByHTgxi3wkneHpkyPYGozNqiGTFhVdhpiDpQBYWJM8Whx8qW2HYpwbf9Gka3HEbD9C3ZBmeA",
  "key18": "4mG6k6rm5XYsSWZXvhcUHhuPY25vfCReG8jkeRk7DLyworCVHyaxrWcwfCZ9JykoQFE2FAkVn7rGXT2rcwzgTzw9",
  "key19": "5KhBzifbywfToUrLoYeUuHzWYqM5ShevpJdiNTZZVKouLdt2iDR2bWvniHn1f7Fc3mssAxQygKT4KHN5pTDff6mN",
  "key20": "5E8QcZAaqfuJZzt232FSvm6UNdHTwcumvgWAhwnkpfmXWojqJSCxUw1oCqej27B8v5nb8NhQ4bt13cKP75KeWeHE",
  "key21": "667JDDRUq1tm1i4K6HbBGEcEWP3YfvL4Mkd9DRCTv6c9DEZaiW3BxgMht4jqaBPJX8D66i5w6dnS2fRCTC3657Qz",
  "key22": "2f7QtMgCp8fSmJaNoXPivNJAqDm513G2FmuKUEYHYEN5p1AtgRyLmnCDoATfkMDEw7osWsygLStm3fR7yTmGQ669",
  "key23": "4G6XSGYvCZhgT3525fdAAFJhXMea7f8eR6AG1pFzax4pMyEv9SuX7E9mSrWQPGwWxHLzPazM1CjpZCgEoqN6zx4S",
  "key24": "4YxwcVqFu5iMgojzCKTKSXh5rvRBeqSHaJhpqoYCpc4pkWayDsrASUYQDvQ4NuZLa4B39C9jciYpJZSYh4jrUsjd",
  "key25": "JxxtVUQD4Ufb1BRf9vZbuizqRuhME5PZzx5fb1t7Mj7X91nG8yT7doXPZnTqG3Kaqhaz4pu18V2s5qvKxpgQAm6",
  "key26": "4WGCWJqMNgWP8rH2UPYQkWryPQ2nzTdozbFzDDt4Z2cBMBAUpC5TMVy9gW5KgJjRjqBgN8LMBTrvkyN8Apxv29cs",
  "key27": "5cfpSiCVFXhPAAyTP5m3mAEAsRuA4yQy46UX7LHdHRhCPb1P35EP2yUCuE6ey9zU3ratnXiiv2Wed4zEHYkmPyC4",
  "key28": "25CtRf8c7vYqss443scbwhpcnHaJJ1gcn4isud3QrjjJy21M1cmuhpmAeQ4nZirwNZJBs7AiFh1rpVSVtSvspwhi",
  "key29": "2HVoBJCygYjg9yUGk5ifmHTu4J1ePF8MJtqYYAehvNFXKMHK6rij1AQo4BXtzwy1stnBP56VLixAi9hGEJZoR8br",
  "key30": "2EVjwg76wMnYeUSr49HCxDenvuCnSzRhpQKnVnPYcsxZrNakpagRqUWMHMd4Ca7imaVRTSCeu8Heysg4wLr382rb",
  "key31": "3BPZcqic73PWE17YgqkfB8n9rRBSXgQMb35GzZwMzrjSa6hx7Pww9B5b9k1N3sL6vj9QPP9MnruMPKtRaUJHbKBA",
  "key32": "1ohhHJwJbpvKcFVnqZcwPX5WmCGiRoqSpn3DUzf7xZzi6j25WGnfy1VwJMM1n5Cns9bJTPX3Ln2UhnwwoqteKMf",
  "key33": "2mYGYn9KrUL3vuz54SeR4V9mZyLaAZiUUGKg2FnhDv2aMN18L7c3KfrcVY2sbuBpXtCYFxzwadamCTCEG1YYKcEr"
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
