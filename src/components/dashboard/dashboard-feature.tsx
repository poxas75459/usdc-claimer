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
    "48EVQsezhweR76uhjzesgouXV6Qh8SCYpgtDLYAmhiARvMKnmKxgKyiTeiKt15upwRxDnmvw9Ywbw7cxt2DiH2sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kW84Tc7H9JJPXM13bj2usFQC4hsA9BdigJWewCB6koUBoqo6ZgPby54Q67qHaHtULS32PfVzpusHJkPwUUwzLM5",
  "key1": "41dobsLWUvN98gyRNria3dtcyyUupdYWEUyoygcPBAdDyVWZvRTNv1ite9XJJm48WnZ4aND5oirG4Xf1THieHWWL",
  "key2": "CF1hnSAwKagZapcZcusb7LTxCL1f573oFhAiuC4d7CMXKceQyRhRVeurT5AgDUzyAPVh1Cp4Xu1YRW6pPxPepiK",
  "key3": "39ZBAtrExYCcxBSBvUGQwHCUMJVZYUuTu9ApuX392UwcbXZnjbw4vSFHcJgUkAjomjfNEyRX3LxVi4mQr33XzXDG",
  "key4": "2Q6xrymgd5uiGeEYvczF7hs1NNaqyEVQ6njSb9oFQEYzccGMXFUxT3qySC4tLWvYc7kmT38xETYsU7d73Wz82NKC",
  "key5": "5Vs9PSyq7P3d3HY5Cu7iXmokdWwgPcCrQ8WHAwmYYAjc9HaB7t98R2dShyPEESSsYfwAYYmZZ3woPyR2nFkHhmX",
  "key6": "LBrfoohjb15ZHyEqt4Hb6ADz68JQqq17RGXHRP1RTayyc325f2NcsWvqRVSBVA2k21eKHGcuHTE7GjW6S381AAp",
  "key7": "5XPNaYUmv1jzU5ry3HyYAwwjsJmERdK8C6aS9zPU91gkpz4AskDKEw3cJ1BCACk9Ws2ZVVJajpguEmuZWR1FnwFF",
  "key8": "3fUgTngAB4VHzvt8SCkLAYs9Gs1AuwuswtwsvDmE4aa8LgERacRYAHVLPvghADYReyuscgTgCi2Hvm2K2NNAcaWz",
  "key9": "5JqzbsFVYzZ7MCtt1Wxz13Nc6UbbFNLPz2SobDX7C816VJ5jygjra35ch3sya1GVhqB7xV283fHjbukuEd6PjACc",
  "key10": "2KAULW8v5WcL6J544NJ21qNaHgihMw7MhTwRJjqUULeY9oC2oGFv5zjgfHQsi3p38yKvfRXe9TYxC7eLktXweiRd",
  "key11": "2MqAihT7KxSqxxAZusFostcYN6Nmqjia7ZvcQWDFRDXai3zBHDscddH51oLri4JWBwCMFGshgZHtBNX6aj11aBNa",
  "key12": "DCfq699GUuJKbkLcZbFJSqN1UMwcFrYQD6LYhRyisoFf7hRXnpsDpN7zKPhvoeRnzVcbj7sEMGmuMmzYnonhbNE",
  "key13": "dwtGGAWEBSgT9DYUvMvRk2e229Lv8XR5qbTyqzzMn1XkEu9LsDn7AHatNfGBiXQCAkmXz46ZB9XDKCQZgxpkBiW",
  "key14": "415hBtFfWd7d4B7nuj1r9gVCgnyExt7PrJKwVHhmeqpUsBoHExWqXD8sEqW9sTSP3XsaU57iGr59RT3DaPszYbtw",
  "key15": "4xrtBpt2s3n4fpQaNUJ69d5YmpX9vpuw1z8nfseTeUFB2VzxEFQEL1TKsrM5CE8REGjqtrw6XxoQUaogbus4XPpD",
  "key16": "3rXiKsLpWk6JudG9sPqqRe9qU4zVnFJ9BKf3pSSRvYMmNkymgY3CUG66iz7emcD5UCnuPkDeh1XPEw8yiDV7P86y",
  "key17": "4zuBdsaHF1Hf9dgt95m5EfzH5Per9HfnJfqkEiuFHaMH9wcYicuvmfM6XaHncEuprdgJD9a5QgPAAjKH6fsAQMbP",
  "key18": "oC5y31sp8JqcNTcqHUbekrXUscrWcupVSCZJMww3tSyoWgxwiy4uzLv4Sg2vUr55j8hWZxKF62M3mp1dkv9kS47",
  "key19": "4W7uXs8rHpMaojLf85hJ95u63nomTHuvMV2kJxEFUzsWkvDJnkmNvxm454kCWtQDBRBxqknKvzot9v75f5CJsvnx",
  "key20": "24783kgdmx2FLFf1fo4J99cNiapGSkWwmC35h42kD6KpcmmgAtkLza9CVhirmAW7aBrJEQsNHS6SQKHRrDFPQSzY",
  "key21": "4bo8e7iP2pPsBb6Ay8YeGTTMUkWedQQn5yJPKZ5BmFJwQsui9WXuM4trmk2Hbi4ECXgumZW29h8Uhj3nnKTJUEF1",
  "key22": "5yBzTiRFPk4SkdwcFVTSbhdvypDQxBNs1cqpw18NHVVufX5kcPvtQNN3Zpp6RWVs42Hq45fu1a5GcxzoMk1CsUX4",
  "key23": "5r8eYUTY8rJst2AkjyfnownGumae8FT5rDMkG2abwtAqiMCU88iFaPyCSJk2fE9jXt6qz5qQ5YWbSb31BsvKW8ic",
  "key24": "2KGVTbtf9twYcMgVQ6xMuxSowQsfjdWB28uusHGKJ5b3bDcpkwSJL4WcuoPaxTDHkHE98pC1hiSwCfcX9jvVXxzP",
  "key25": "2Ey2TEfSJ1F1tkjT2UMsNWtfKKa3ezcXBimzKpdtBKWAbANY7qdDddSQuLuM4qheV2TB2t9rHBWadJV1U1c9unQa",
  "key26": "8uoFjyMPFtfVmtDABcysKsT5ZDnxdATKavGT3vBXvqot85DGvkjfpqEt4jfop9EV7yt7EbUBhSNbLZ6Ykkdm4br",
  "key27": "5zv5AYYJGuuq9jJQsjjgAFGQA9q8jPdWuaVdkM39WsB42vvsoFtuaU7ZufLrD7T5FdmHZ6w4GGFwCHSSBufmQyx",
  "key28": "5ZKcgzi2zfmQYps1dpsRzCqXYuY9RboHEYk9f7uN7v9mJ8Mm9AHd4KGi5YxC6jysvwceuS6GkHmjaVAAPrHEj1s"
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
