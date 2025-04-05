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
    "2C3r2cgboVAsWr9yk5VBEhqyAn5bhYHZZSpqhN9fkSuixGV6cLKYC5bqFujLEHpcQQBHbWb89sipBYNwhnzfBqUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5gQAZ3RquHNozD7JQ8E76X4jBxSQmmUnhoWdwHUEhkhNfG6rzLfy8asah2TgHWqCzrSKZ5FgKRJu6zbsWxpW7F",
  "key1": "41qoZZrzBRpyY5hKydyN7aEQSyfdj5kPnHkSLjmeoh1txWGkj3rqUCJMQMJTdMJraDVt9mP8AsQ9XN8gGLzNK99C",
  "key2": "352RqFhFNbCncub1Lrw9Pq4nxFCxzy3f8CVe9gCascgNCEY315ekkkuzqiHjkaLHqQ6aXuYnDdx5rmRjzpJVbEvp",
  "key3": "3PwX3HJKA51uZwtDBnp7d9JAEoaBWLvc5urxoqRyx59r4QXxSYb4M76AfF1rCPWUMVKw4DgBSCB9MCHYDNRndkKd",
  "key4": "2CZYLmtnnZPexDe3AXcCPhaxCAsL3W7f2GdGQjZHkxPevZM2ig5FCCSG128Y763VjybjnnFavDh8pR5SzQx5BWwV",
  "key5": "4JVcNemEgQv7w2ef1i4hpEsMoqYfUZ5hNcQTRehDkpjQrEUcJT1QvKaymLMC7HNbytAwtdNSPrBquWmnKCxknwXi",
  "key6": "5eM1N61w5jajdZEYNQG15jw5uaUFr4uN2dpjoW7QmymM3eW9dJYGVPCVHV8RUXxV2tVMEN2XphunSPpi6UFuEDuF",
  "key7": "2z3KiK8NKHEw7pk6crz9tNLgVKL9jVCuAqVKTkJoBdk612ojDvyZKAE7CBMV2zuCK3TJARwpYQMRrdv94g6xUFUn",
  "key8": "j1hWsjyVpqBpSrGgWWBCbuuppPHw9b7KJJhgkE2drx4qqhBi18SJe6e8WSHtZUEQtU2vmjionAXjB6TFX11t7bw",
  "key9": "5Q2hdmcM1woZ2NSY19CrF7W3dZ3GGSyLGBKz1DDoNUkCnYgiBYpKSEND1xmWrpZNJnCEfrhEjDQf564B76SqXkV4",
  "key10": "4Vu2ZAzcstpLowZwz4RETB1wyiRdAzbivuKQ4gbKUUykTdECJk6c7MkLv1tqWHSTztjZmFpyE5QcAUEpjutFXhTB",
  "key11": "5dvqq51GW4RXgxj2kMAHaVmcXJ27mKHxrVebzLciPr9NyxJLqBHt98xyhmTndhYgH695xX8DXhLAtdPHdxyf7pxV",
  "key12": "2Q6a1rJpx5VEorEDtsUUodUBACiMCB5xDitEyKDJf585s81JdV8sHeDzWmjBpmmdTE8kdnWi2ykGV6HjamLt968K",
  "key13": "5rGjWNqqumKrhRsvkAGJw6pyUTrcjYgZ17Chh18W1HrvZGeKh7jJRaDjP1EccSfXJfi3dagGvtxxmmTYYhiwgFKw",
  "key14": "5fwXVEnv9f7P8jDPY9d5L3PMNYrbEZqbNzTnQhFtSCJwibEA7NYqatVEcWPdSQmB72cruAGsSixcJ24gYL1vgwhH",
  "key15": "4pkMvzxE3vRe9TxTT1FZN3GRqfdYKQuDfJpucTJmBLRiuxjRw9TA1Wkn4omFhtnffTYuKezxhkArM2ecWq1yN2eb",
  "key16": "W2SqTj1KkZBn33TEDRb7E3RzyEKg9KyFHoWvENij7G98zxmmrLg6Zofm6WecZykNLhtB3VsabEurBGqkdAqfEEH",
  "key17": "5soemMH3djtV7mr5Frh57ktBfUkCYoub38QmcPBCLWcZxKh78hS4T2m4jUD5cCKfVfJMWT1aJJMty7wbBV7JY8Xh",
  "key18": "4YWgojdBZcWk4qQWpJVSHmE6rxnnUj76hEVTaZYj1rUNDNhpiWwh3m4aHdn5VaiAHpJhsC3cZWi1aNK3pzxHfZX5",
  "key19": "2QqJgx9bBekzxPNJmS9hbrhKGWmT81TVCTM7UjfcV4pFgmziDoaKsdPQpMU9xXiWKZpL3cGPG53dgLrCdghgQECu",
  "key20": "5u6C2MAw6Aqt6adDjrHCC2rB2uYkAKZwdFxMqzx92AwNPaAc1QEnJBUK2Chu4SLk1T9tDMGpAfNQ2ADbRFADZk2x",
  "key21": "2YhKStt3JumemKM8nv1dcY9xYUNNvsrKTpqjjkpAKi8AA8cJJyeY6ZqEQfYf3P2b6oZtezVeopXKLNsCcAy9KPkg",
  "key22": "2Ub6QWLnfJcnS5oYQck9hQ6QragEH9AiyYHh6eN3X4ro1zG7tbqNdM8o23DdCc7XoSgoL5jeSGUAweDPH3KYRDGc",
  "key23": "2U9QbRXm1cVjKgSFqudcVdCJsFg9sedCLuyL5TUQVwHDpd51y3msVjCCChuxNJJczwmJJSdoVdXjXGwPdzMjDhAv",
  "key24": "588geZ9eSqdFQ313p2PYyDtivTHEa1DJEt3MDnha1zcvXDuvbfQuCZJPf9h88yMfraMgUVJvHjko4rDCfv9uBhrN",
  "key25": "4wRckD78hcdomtW2MYNcsVNZYHPh7i1PXefyfgUpgRmfpyiaCfYPwczqWhGTce9C13rojgCMF5fbq79MmsnbGovU",
  "key26": "3FxdyefcixkbwLgUKyhDPxtB4mvptLovfg9Lz3Wm5Qgq6v8ZhyQ6Wjnv4oEoLBuqDyeogDkeR9uM9PRY5XU8N5p2",
  "key27": "5qJAHt4GehXmoz9ZPdNAG5rPX6kKyp6nG4KLCBsifWaqqsd1FGfVWEbrnBi5ohm8ay4HMMhnHnrod8DaKokHNK93",
  "key28": "3ALP7mzQ5NY6dzWdp6eQxWEcQJqPrq391dgwPDc7U7i2hE5xf1gnHyvFBo4bnUUMYfMfjoAsYtxXPm1bSr7xduFV",
  "key29": "2aLEQk7vNL4VxHNmkobcKc5tRN8cKu8KAovRUcvinUJZFamSzuThAbMWejdQbravSXTvkmxUxYQdWPF67qimCceg",
  "key30": "3CHjmYoqY2BxQSWshp6DHejFUFeHTMR214QvtYzWtoWEj3kUM6rEx2j6YnQrwxvXG4QVRpA4vzw8Si6y7e2TtZqc",
  "key31": "5kbmia9jgk52tUj2wtmZDThVXitTBW8ygAzanGCCABGEpfoGvn2m3G267tYWsPKhDu5XojXaoSmBJ4tMzHEgGzNP",
  "key32": "2kdiV6KsYSgeyroqbS2w5Lfp8CKLBKg43vDgVZ2cr2mzRJEtFvjxpUa7upqEm7zKJ1VDiZkg7nhZzYSCmkY53SFo",
  "key33": "3MmPTXs3c2ZHvmh7BXLVKXHPfJsDnZSZM1bV6Rcdnrj6McDNnpJYNgJTStnymESbD8bc3LjUWSBSNpNjxK3o7RGg",
  "key34": "54QZMG4MFs3mdtDs4cooFEsfEebVv53sspztyP7yn2KLg6BzdsYJBLghS7UubdChXcamoibcJkhBg2htiJgTuV12",
  "key35": "7Q42baJFM6X85ieB5U7Uuxv5EUQzqFJmrPgZiT3XNkBGWifrGeRGeTvjtjLBhwGobqpgHQsrFB4XM6LdYars5a2",
  "key36": "4wbbBfeUU7JfR3fCmrvthucrtEAzfHJDxZRtLFYf8Qb2vxZo41rbAwoiLb9YTa2k6LWzAem32TfVB58bU2zu93pL",
  "key37": "3mXqxQKrBDo4NZKxp1MC9NzBmMNPcd3KJkKpMqGMXqfb1JX2Fg2Ln8yce3xg5wr8QPjGG6e6bKyQ83EnrmRH5VUD",
  "key38": "3pBXFVCgELvqQakkyY52pGj3KJJARyiuRoyafAk61GE9yZ63nbTqHR2UWNB29hTCrXboBFunRkbQiH1YyLJt9B4s",
  "key39": "643uCpYNGZTFTsTMzmaTfUgMvorPyxdwHsjJDzQ3KXMX2cDn1XWuaFJ9dghuQeP3NxaTfFuCFWuJdbjCNhoFwDR8"
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
