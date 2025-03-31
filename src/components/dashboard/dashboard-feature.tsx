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
    "5MAaKk23nCfc8CvwJsbsVVfJthYJQAyjLcCsFDYBkvdQDc5jbxzgBNpnk9eH6JnspHuRe9qkFip2gbYZkMorSBKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W71uiXCvj89uhpsV8BiXtCnWtJFo4rndrFN8znBSSjCLpugcxCPNxVUhzbW26vsLHwHR6HMGWicBYYVh3QDR9Qd",
  "key1": "28ohUVybjsssRjwMwJ1wRstbShV34RzNoorqsRCgY8XrtYdxmiHC89dq8hhGvmpxkLrB9fimSy876dYCMJewjY8Z",
  "key2": "3MKonCN5fkvr6Wee1ZGbPQ3UWhuyo7dMsnSpgdpUrwd3gcdfAvuEtzKZMBQW1GyUzqLzxqYgvPDbyKU6M3YXSZC3",
  "key3": "3yBrRGZaEPAFAr7Sv8hkVnAXLYC8wtKGbbX7TqJGxeEW5GuZjEgt8CZcewQj4pX2n34gznoHyYeFfqd5LySogCy8",
  "key4": "2NkcWfv33sRy1TaNu74N6h1zmEyHKMimZJysgS1JGZdm1AmksjU4CKSU4WsPo4pwuD1tCXWv6khPUbbG1HwmMpZp",
  "key5": "4Q9FRwh3WeUAr22WWzNS7uE7FjgDbEQTwEV7PvF44ZqS9jb5JG387XzcgxC4ovfnMWDZpWHyFfRWn2RnMYAjuf5N",
  "key6": "2kr1WZshmpQDz4TXT6kgASxZCH8Dyt9fX8NjpNsRv1sZHud7YLjYUaMhPFf2N3Pm37Z2AJfrp3FGTJsdzQQeLSMn",
  "key7": "4dNPip4faC88DrSqsmAxQCt3q3bPGkQD5tsKxHVns9veBJodmjEhTM4hvcvQWtAntdC4DzUEECv8q6qkHJeJvAyE",
  "key8": "2joSU2NS9mn5zUTS94x2WhC13XzANSTsjJEZv7GFsvPmkhmq1xRRLBVaa55SuTsAf2GTqhhDH8Ehia8hEuKaFguL",
  "key9": "HMiLeAH3e4VBMYVtygaURUVk4fyzc6s8E4XL7AGnPxWyQvyAS4wE6TwJVc1XQ7hKHSMG7UWQ5PLTq3MahaWpdzX",
  "key10": "4cr9nQMsJ7yE76nLr6g7QYEj46aZ1Y92kGcV13315jEVZiwuC9qmPh7gMNni2DRViGuU2LqmdwECep9T1MFMphPQ",
  "key11": "aiFgSaRgFQt2pDE9mv3Vx6nQvyWB46pARUSADfTEuKfgLihWmipLSj47kxycPbGGAqAtWVJPrNVHpwsWGWhGSeN",
  "key12": "2Gx6NUHHXstWs2jpeBcZMmoesAizRThaLSmjiPQA3fKCEf6qBidVvtxnZrMYigPnnrT8vpM1nd4Xead83tyzVPPo",
  "key13": "2tAzpP79LXq44WuDS7JnAxE84B5vwaqkemQpU55iUPqCHKvxz7RhdVv31UxTRfNJCjB5htTFJXRp19fAG5tZ1JbH",
  "key14": "CBzCmmzxziFxYvALwpvM2Wcm5X22LnAbuksfNjHJD9uZvhM1TgkvP33aRy6yKNcNU3mQY9UpVkTXJHDvNfH6jFY",
  "key15": "pWbYtfqCjrAFUoK2BKAiUBYCGB2oRr4HXyLi2KS4GX9yvwwPEax8HvkSBJpjQ2eE5vDmnefGV6MUafxuhLZPaws",
  "key16": "218pPPhVbVtccMy7HUT6C1f26DT32DpZ17CFbDXCLgraTCZbXsnoDZ5CaofMNwmBt3uXZcedkDKcYMvKba2bUnTS",
  "key17": "27DyFcydwVbKG5igHyH76zy6QF4Li9yML9NLQt6oZx7KFm5RwoMqoH9JW4RYHn4CM1srRhDguDtLTUpPf8ZMSmM9",
  "key18": "27ApXB95N8kKCVdP5SQ7WN2wbAoJCr1rwwab8WGWdFgXUTxkNQvsNYKWLsCWfQ8vNHAPfr9nYbkiaw9LpaDBuwDk",
  "key19": "8GVMRY8hJUWA6og1EmUM5VbhXyhBYNj1bzFSAu5UmiHDANMRQmbLcHa6BafF2rboLAz4kQ6zgiZfpMfgGps71tT",
  "key20": "4JxGfuGb16gij5m6cQDoWi8jcGzmXgekCzpe1GCViNjuLWUFUnYDTJjS38zgkFMPZqnbfbKa4q1tfcZiQvrwo7KQ",
  "key21": "5HWWQFWSQN3EsZjHNuujrW2d14aqDFCNeSamxYgKbWSgGBhGUccjAaMaimhYfEF7xNWdHG7g33pUxaFg4ife4UGD",
  "key22": "4cyvGf3HbCNfpU1BoxD8H2g2ZRbV2za2G3jsDSp5nCyTXx7382YHejL73JBTFm1aWyzjXT4b3wCcP9eja32cgBZp",
  "key23": "vjFnfa46AiZW83oN35jRPpaSGBzNffkuCAARx7M1hu6fnB7TMBb2EmFo2vZhWLWEu8EdH6q2dtgYwRASH1HBsRc",
  "key24": "4bofxzxruD3RCNQTjstjcLCCqgPssub3pzzeZvVoWGZVwxTPNLF2Bny2Hj3pBrzNyC7JBHzTmY6GvjgZp3Nk68ji",
  "key25": "V2wt6Noug47sc1nHBdL4ZFofnxsu6CCRDZGaFoaoSYo45npqpAsEhpJdTKvW2iJY7wVXtvFeAXZsAqtpiWRsSwG",
  "key26": "3fNWFWf8scDLNCu6gxV66TS5DwhCUAj8MuPbb8XUBAFBGQppPAQcrSDWtRxuKhqFVrbxXt5FnG1BLYhTnPzHG1fJ",
  "key27": "2xtNhCLn64f46oWArUzMtX71XuM4nJgmst2ngfSCz9zrMkWVct9Xy6pBst9Pdqc8uYHASNqg7f6GGLZhGo9k7uv9",
  "key28": "44m3o4EFYPXtiP1aQDnHDrka5gaqH9FYu3MQqjRwWM2zhyBktNg9zS8tMmQo5368aR768FmSHYY5vjpmMogdoN8e",
  "key29": "3hdFRKBaFpY6xfQyJ2hk39pFwumoJezkCwsfr9EybUAFRG2ZCAZhmjPHreD1jNjPj3JXa28FLJtVRC3Wa6JyaBoQ",
  "key30": "43vraJQq1myiX21kB4jqWaPZRTsbKSnJh76bALZnrJ7U2zJcjaQBJ9f6phgLiTudgVLsBD5omvRLJWa3XeYa9df7",
  "key31": "3TAkKxrfNvQe8Zkf6XYvGAg7XSfu6HHUs7hykven9soYVtT7paXMKGFAYD21wjuAzZLq6VBAhvfhAXnxetBKu5Ny",
  "key32": "5zjPkotGneQwo2EzwK4nnAGL3mFfpZzFDBdnWy9QqctbQrZyj7z9NLncPtjjpYDXPJo3opez2y7mVqXxYJxf8eia",
  "key33": "37kXZv2B69Bpd924zrG2aQrgnFF1cnxnPZ63GX9U6Pk63eDoHdYBRWNWE6RLuvAZwq4bwSA3vv7oakYBoFqnyS6d",
  "key34": "pJTwfwmYxfJpf4Bk5j2Eg34SkujVUuxbpS9po1nytb3kHTxp8Cp3SGgwGjFspftqDqqLxpgzLGcgYsscE4Wn4j7",
  "key35": "5w2yB4XdCjoa3D11DxNF4LYi1idcDPrGEhkesJe2n785E4AaQgkms6esZhWAuDpQucwYhswjMZ2YdoWz7pJoMpTF",
  "key36": "pCWha4ZXb9gMZ7etSyLEzR8gNioscgNvx3aHYr8txBXwybCYs416cr5x2Jz26ynaiZs31WZvjKXJThQK8JSxip1",
  "key37": "4ymStja7EXwSmX2dgJPHfTi6j1Z7sWdeK5rG4dDGq8Rm7paARks7PQzJWrXuySpW6gyB6vkLqEywt7A2pcx61aYw",
  "key38": "4ye4uXFkszHEqaPRjm1vqbXYLJNnNvzMHX52tR1bMaMUU8SjRpiSkGfQt2DXhfPXAMj26XfQirBnXFJHEJGQbUoH",
  "key39": "3kpE6TQmCBjT2Xu5YCDHjj97kXtA5RLb9rdEs8KQehyQAAyDiYAeHFEXr4oZ738AcbRUakMLvNuatrnXPySFNQQV",
  "key40": "33cdehELTWxVvMZJoVU49T2GJUw9mL1N1PrcGfGUoG5y6BCctJfk4Xcyeecb33JjPiawF6meRK4Zf8mz3ffqEmBu"
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
