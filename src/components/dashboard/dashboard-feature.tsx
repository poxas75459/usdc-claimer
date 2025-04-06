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
    "MZgzgqTChS1Jb4oh2C8VD3MMtNNKfvTc9bcWUhB7QM4tHk4iPSw3W1gChahvicggh3Uew4jF8m6Z1RjNjN6ToYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VqkM3rn8KbYcj3kz3X9aKiBm8PV2CD9j9QgeofQdwiPj2mJUjTsMsLmmQovc8RmDua2DaA6chUX5RtpzU5yi8i9",
  "key1": "3NekWJ9NtLvWmjiC3Q8JrrdRD9gwLfuzBNc3RdsdT4KfhYWsHWboQMbjrcw99nT6mdFZAswgn4MJwqVJwU2qiYuZ",
  "key2": "5a4tNGmVVe7ajYDqYyBcnkfHxVgUWUQKVDxvykeG5yNDtkM27hbKgQHXfB5bARP28fkBTiH8juhCyAMxZgsEWMqw",
  "key3": "3hP3rVvQf42JCtvopnB8zWcvNs7ApB4uoZHGPTqqWXvVaBF6ehShK67EywzPDZENZ2HCmkVDbfzShCRSB6HRhaei",
  "key4": "5EH2N4Jp68duC8bypHjqnmky8Ecai4TUfMJBQVPkbTc1PZGdfY7LKs5baHcHUBAQkczYoCZpDsJiEhse5dB92g7F",
  "key5": "37jxvXQ8iEd3EcNJyu3Qw6GpP1FmAEuKXe11U3S8hujT1oJVCk7uifS48eeZMSD1na7Sa3aJih1wviLtgfjaecuP",
  "key6": "3CDEMejie4c3VN9jWCQmpUCAa4Y2mtD49ZWFGCGccabDQUyeaMsLXvF73NVttyqvPck3iASXgd7b2q4iLQvRWtPg",
  "key7": "EycAoiUEv6vpC8yXjBGfGqGcyhc4uruPqGr9hXjoHg8S9KU3K4UAm9bMsrZaTTmB1TiHBLN72v9MuCMp5VFWGhZ",
  "key8": "9eJLErCEDMS45AiUf4dGbi6HcsTNyGzVMshPsQRjFH3ffu7CUAdGz5teXPXSDiBp7svQwP51rW9XdvrD7rS3M3N",
  "key9": "4QKhhen95HjRgj69BfgzZjSTSAskvXT7YLVsKj2tynPCH17NQgFC1asfKz2m3EusEWFf9d9w1eNHGh7a2V1UAPy6",
  "key10": "65kWuu2g42J57K1EnWe6Q7ZpjLCgCuEaAczxb8Rk8hSr5ZdTnt9rbTNeYcHjdohEiM819riUqmzFmcLYb7Uuvctb",
  "key11": "3xEGpn2faz3ui7eouvLN1mEAqNfrLgmDzAXzdC8cQ446ZugrG89LN5jNexGEqW2YVQzggJLG3Hh9GqfMBkMm8EcX",
  "key12": "5qCXTnDA5MSbFeTEqpqjaDBY3vSFvY56z5fFu45bCY4g2f7WEzsnCXs8HYeg2shffWSBMxfqz9sezTrk6XLYzy4n",
  "key13": "3ajsdTfAVw4L4Mt6sG8XdtZDdL3pGjoSGu6fZSdb7P9zxP48z1vae2bZWySgpce7Yrnf9kUm5JQ6ea5F6Gq7Rq2b",
  "key14": "64BET53jPLdqkri2tzzh3CSNn7eu4zCzqjqxppKNXAi7cS1DfHY5fVc3SSEyP9VogY4nKn3u7zVEkg5HwX44iibh",
  "key15": "UTCQwGUVnriTW9yMN6JsJZaLiiCKSBA2quNDmC3BSnRx8hJ1saEyL5gif3urz3KBHVMFGU9VnyA91FNiXJM27ko",
  "key16": "4P5Y5n8rXTFLeeA2rDy23TSqAwgFpTx2BEqQ861LJ32XM5VaHA6EKkgvy7JudJYCQJzcq8cd6CjRHup8sy87ra1D",
  "key17": "TFnrc7w4jVAPxhcV5jRdetpQ4kgmVhNXXQqEC7jYYhieZehuBoseASVL2KxuKfahzk3gM6eKdcL45fY6vUa4rgV",
  "key18": "49saPdy4zLBUA4f7YNKWQnv826bXxMQzHg8Mj4umfpAWVB5kZMh94VLbP5kHX43E5PxkQaFwbd7nmweijTasVBrS",
  "key19": "2nPirfRVB4cZn5p9tUnAJrJbpsrUxWechvo9oB523MJegh2JRhFW4mvzKDZVvefdP4z3dWXhrB1vTzirYvobzPkv",
  "key20": "4tdSVQoQCahGa7vgJUAxgVSH9TKY2u1LCaxvZZ8EKtUpGZEPadNDmn6XmwoCRK23n1mdjaiWGWEE2WvTKucoVyjQ",
  "key21": "65n3wPibBanhTqGJYmyjioRipRyzB7EaQ6iRfToHPZAZb5GbhKgn2jRCxfo5QheByVw4bc7vv6qL8qgD8KVggycK",
  "key22": "XjdH7KD7a9WhEstqjRynMcz196YvbfyAK2xJsA829PqwaQrRpovtZCPBMbVFDdZcrR7XTkygUWXaCpfge2yd8UB",
  "key23": "34eGf4xGso2ETDVoVPauTPkHJ7Z8XpeZsPpfFTG9KmVdGGLKDnqqCnYk851YJXxJbvWeVnJCKv6ZUisw2ELg4FZC",
  "key24": "5ALeqFVJKQG7iMbyitboQWDbCJJavnRE54875GwvTruQ4cBcntNdsSCDfuFditjasQkrBtAY8C7Spb2MJBf4zm1v",
  "key25": "4oechATBcAfUy8qWCQjVFqJY8EK3Hai15hnBkxbhR3REiDJzK9qdHuTgKcwus4JymE4R4mgW4NTErCWSgiFrkUgo",
  "key26": "3vJUnJdqM8VF4wm3dg23a8r9mcXhb4PYZ7Ky2zPpm9fhRHnKrBHVczrUrfKm9TKbaq3jGx24EQFhp7WZEYQut6ct",
  "key27": "5NcjAiAomuVByorqn1s76rFxBdr2fzcJEwmz8nKua8jZAxP5CwHqZc72YzZ1VqEJU81PNdXPyrZ4qonMRHxdyvZW",
  "key28": "3LsjBHVxE6gbRekjR8oMDcN8MWgodBU6i2jGJA1S9cQSJh2SweE3iZhcuQiXmQbfX96rQFHp4fAP2YJDCNPRNVAe",
  "key29": "625jz2M7nwX2HZXpR3fGbBMgLG7bdDCCdezM5KQn23BFMUR1zpzxNdKPZNexRZFXhhiEvAhXvJNwK8TagNZauWuy",
  "key30": "3dt42q1kXpQoBr84Pk6f2rwGaJpcyvxVFjSDpjXTtKQEut4rMJ1L42Y2cUfNAwxFfy2TgxfebtFgraXdsxgncffr",
  "key31": "M7hx625XbPEYu7NjwXicJ8E1XvTz6HtbrcJsbsY689s3smmhdEAUfCdvaLmWPKKJ2Zj7SfoCCydVHocZquobQeu",
  "key32": "5JV2YcR7RGN2AyebTjEBuk4T81vMeSWMeq8qt6nJNAqM8RhcR7f5fiWhTaS1Pib17XTCDT5sK5VCPNX5ocGapWjo",
  "key33": "3zY3JaDuNEkUMX4myWAcNw1rRJ7TpbBGRCyd9LJ3PHvrY9DrEYJ8yGLBNzTbPy3uFJ61JuipV77s1dWQrQcGWmN5",
  "key34": "3r5sN1xw5YvUykZVa7NXVNpoYamAk2jt3T8nFprMot4jo7JkG4ycG32xxz3UHDvDGsGvk7SmTYisRn4EFCfrTNHf",
  "key35": "kTK74MbZucjV7u8FqnWAZ7qdZunxGJv1UEEg9z2PwEkSeKhwLGryBgFkrhsL19WPCamiVZBWWsfHeUdYrksNaaM",
  "key36": "2bJob6Lf6HBKCrF9C83LWfRNQ3SgjGrTVwzjLaik6pGz5bVjnzGZVjKNwvZHXJ43dfGApSEXbrU9jsqz3EqGLLpN",
  "key37": "3Y4vahM5auJN2PtEsq64KHemov9Lu2MB2rBqkWmVouZActxRexHZo9GeUFDBU7rrT8PDJ3Nwbj7xsxLtsqoTAH7M",
  "key38": "PQZdiBRhNMMkkDrMMggSVg3DNMpVAzFdnitjX23kL56w4QNeLAFz48tzBW6V4XPHjpjqSKo7pnqWsM3TRsmEuey",
  "key39": "2HwtA8BnLv99dBEgiRhJooJNhn47bPMeeuFZCL63zEGQdYMd6W64QqBhtVQWXPLeMhv9oVz5CqArGVdMae91J6QH",
  "key40": "kh2BJW8ESA67XuzmR88ge68VSYmo4kcjydnrqcfoQDSFRzBknZp5MKYxerELNqkxvGhCpFFe5HgmF7M8bdMvavp",
  "key41": "2smyzqjJFPR3z5wc7q4AhNXV78rAXsvDHcV6isR5ZKmAGBFiJwXtHuNpLcGKMP5G8PRXGGHGW1Csgj4qbNCz5JLg"
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
