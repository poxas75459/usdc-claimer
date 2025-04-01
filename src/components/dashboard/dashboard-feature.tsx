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
    "5pZyHFQXZetyXY9MXuYfMYGgRZsWSL2XfaT7bypMmkNnwCvFpHScZkjRmCAea2BFxsBZURpw9yskRts7s1iN5z9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TY9nZrudWvFnWiEm3C6qYJAzxFDwaTwiaUWGDruZ8Hkw7ur5L5HdGx9SJFTgA6kGQ2QA9zZY2FBqitUfz4tV8sP",
  "key1": "3FSTWtDLhuTmgKQttRzhx9tT2rjbbUqHvsseT4So7ap1dkp7kpXiTsA2Q7e8pXJZmKbJ8fc77SgdQfrFJMXXAp2B",
  "key2": "1ooxtqYzcPj27xBfNqqccnV6uR4yMQsaz6GcqRKbEv2A3ZkYH48y4F1DrwNUoPhQQZBrT6mREUjmN28yeQSKL9x",
  "key3": "4rwJG3idjSKpbhiVBjEC8SmLqx7uq2q6Jikxpp8d32Bh1pM28grJXAEd4mtQkUsAT5DPbXB6gTCNNgQrupzABnKv",
  "key4": "3UujLQpfee83jxpe2RnyYpL8HzCeceFwELRo4596Rs5eUbJtWkeFn3BNXUd76J9wbQd6iKQSNzW7NtJ4gELmv5us",
  "key5": "2kZBW7D1wXYkYbzyLsEwEXf6munqprFvsgawfqDdLzkNZacJhPcchRgUsLmppKshMgv1KGwRyV3wr2b3UcvyHsdG",
  "key6": "5bvqNXnoZdmS2zRAJzhNteX4rQmU2hYLgAh818GJ7PqHHDRaUbvdR3VM6HRHN7n4My8Nd8wAmAtbkmZBF6RENXYd",
  "key7": "KvaepJMcFk15Axa8GXrzqD3XxkJsxiBBbWEapLiUpq8vCjDcjzFS6A6B7eBqaJUc8qLVGsd6JqAsYbEvL1GoYnq",
  "key8": "4Zf7oYMnqrzhTU7QBJqJJBcs2WcGwmXHvhUcqoZ4Epkw3eU7Bnk9rUY376qD16PQW3bUWGn8DAxa8v4bSkQR3w1H",
  "key9": "4por1S2xqMhLGHxa2CAKS2wcAAjBRMCB4kVXGeGEWPVTwzHhSToeGqmPLdxhsBV8P2GMc6nZTEBsGuqLp7h6USJw",
  "key10": "4boVi1XNacFBczc7uueFXQ8xMk7d73aRwhBdRoscKv8CXQZ2zLknaesjJiXGmMyJ5oHvHAsigeBWSxywdQqA97i7",
  "key11": "28d42xvEhZ232SF1zMR3bo5YSbeXqJFhp3YTYagxLKCPgrvrf2S5J2LWroYAv1fwQQBBZMDPYQA8RnpZ5qs9jNRC",
  "key12": "48XZU61sxYcP585k4MEotnF2rzvZg1dJnFPrKL8fJ9yxMnb4KYqDb5rpNJNeSNh2brsRgVQfC6XAQ6ipL6gSaQ5g",
  "key13": "4C9gzfwmMc4SA8SFUw6j2yUaD1c5hSB1P5hEfxrSw2NUa541No4ywHCLrfLaXRUF2XAEZyWvXNTigogG686e9Yse",
  "key14": "2gd4vdgmqZM8XsbJZ1vggqnDTYBSV5ULzGqxwqM3HM8CKNVokUD4muTQtGQ6kFBPp8G6uXoh21CCthhMxEKe9nKx",
  "key15": "52kkJf9dSASyNRwkvTQYj1GQuxXH6SQZ3U8d3bpk9mZRj9NAR7CesezqYGX7HxptsswUpiCfkHhWCu5DfL2Gn8yT",
  "key16": "3FoKmKVnijdEKE5VRiydQnjs1iowDDcb44TdrU2qoPKwHgWQGNqUkWn23GCihsTT7qUyfh7M1ZdE7JAjHBE3p3W5",
  "key17": "5QCrnHPQAS8cMiKmkgQ7jdoNhBn4xArLocwCNuihyNM6RVA5urpJb3X2YJcfYDZzPN2RE4wN7V6FSnfQ7rNXJteM",
  "key18": "4jvJBQ4AR7P4Gg6jZRNN1XKqrJVB1tT3AddBMdz4vWMeiHTXRvLoLWamkYvKgCEEAN1EmVZSxBU6tzfyD4meuCYG",
  "key19": "3ZjGRvviTTkRDfbez4HKiCxqeX9jiFNAEcnGVETX6B3qa164vQHg2tW7oZ4BYzBRrJEruqTqXxYFoRXQqPWAEfcF",
  "key20": "38Ge98gaM8NCguYySd6SbR7tR9fbMjR8voxb7XoAeHPJBzbrTRmAoWiuCqdQohMvvSdBQP3DKL3McBAMmdnoPjSC",
  "key21": "48mSyX74aBAvfcQPm85StFVMSAJgDozQt36pi28u2C96L6KMZmmRX3cxpD8MsmSHnnnJkD7EA6R9uLi4GF4mcjZF",
  "key22": "2iGcmhNSrbkasWQfn8cD7i8u6Jsi9bGNKkiJHT99KWuvYtwpw8qGeqa2ocKX74xsxSYzZFYFAGk83ZL4VcQh1acN",
  "key23": "2DPZDQzwq9gYT2hZrnj2aPKzJ3YPhhFJJqQbXgu8iyZZk3pPByNR6rtgdq9xR8Bdo1YG1ZR7qBrnNWV99vvMT7Pw",
  "key24": "395FuCoBykckSSztT6tVBGoujnS4vPdpKLVUnvQhg2axWZBcXnjPSXmzgAcZVi97XwprGddbjvVppYspPyJVRtfU",
  "key25": "4o3XnADfbSFyo7cQoemisMezim2s9eLJLkxY5DKfs2uvr3PGwdL8DwHfnbap4h8Caj4Lo7Qc826E9VfDQ9mEgUAZ",
  "key26": "5AA4d17mr5rzrCZNtXtaPRRWwjWFueM3tYxjcxqr7wD8FZ4tQkkBjkH5kQrsweU35btHDMtZtZWAQooEtZvpzT38",
  "key27": "MetTyyAj1ywWJzkLAvF6T8kCAjBVepSyL4AG4kQXSMGfKYFxfWhmxbdU3pHCuAksLEx5Pg5PL5JasHUAHEoQC2H",
  "key28": "MSA1kPUbmte1R4SoVjwvwYZMvvNvcPEQkGjz4e8r15nUpbpTKFmSNk85Wzn7WjQrBd4CjYAfdLgyn52qeBGYuge",
  "key29": "g5ZKhxseN3FPvTyN5AR7LJMcevjkzbEMo3ygpi5HfnQ8NyiwBjCJJzddJ4ZY7ETYE6H2HmM2PnkpL48R1oMyA2x",
  "key30": "2rtEMjXvxrZELh5TWYnJrkc21Nb67Z4TyRXQ2iLiRWCtDhPUSDvUJZpEPXHoNHsTGhYjFT2xbjehSw733mexCLBa",
  "key31": "ekiwTb4V63ezs1T7QWtdCgXVfV5QC4nGcMteXk7k23tS29332aYCKJaKA8wLChMtQWuEwr7sdYboGSEgfBtjAU2"
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
