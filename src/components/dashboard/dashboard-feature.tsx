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
    "4egawB8Uvb51jxcYP2LBGsUvUyM8T8JqbWECVoYsjjCHhTUAQibYLLnpqRSntd8K2Ufeze2nQq63N81JkVUmJtZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64TCLh7pDK6pULa8v3fCZjxXjSktsF5tQaqGWWorqq6wJjjaK3bK7tVbRc2UCsHkY2sZitQo6YiuGmS4FSVEbV5N",
  "key1": "FKASVCY1TaNohTXZkEDmPdDvdqvyTyBj59LdbD6fqcpSQqWfhZ1JkfuPXkcpZQZovqnBFGZjhGzK86FZMeZxNeS",
  "key2": "2NDtoFEFZUZEsognYRLHKUfcrnoYErAHn9iSo193HvMr5NihRKijjPrS57xnjdJKkzvP1akKvmpJ36JULRF7E4Lm",
  "key3": "5U7si5n9fFgTv9APH5UDZf4o7wPhmDkcFQrWnLbboMuYJVMM6KKMTft6fW9CmKXNdg8rsrrHzdoomnXHTmmS2bFi",
  "key4": "4SGQ9pj7GaxfscaEV8eu9Rj7HdLw1p8De7jJjSXgxH7BD62ektoFsWR4WYi1zp8dfPPgGmmMFkxcReVib2kMja8Q",
  "key5": "4T1J66FnHPfA6PmZGqzByTscRghdU4ZJ3L8vHMvbuuMhncC5oVJH7GtDL9k5ceqwTqy3kdjVEmC8jVimJASnn2Ym",
  "key6": "5wGVZSWMwTs4LkMHj6DrijLj2VZTx7YunDM8rUNHCHZaD831AVqyrzDEfbEjhkYQzrBvZgV5gxSuMkj8QmoK6k2R",
  "key7": "iWrxgwdfx6teTQFKGkFr1vm1ZuhwL5DFZbp46cKGULWdy77n6vbMKYFWUnRmpFphTjts9DnbQJGZPV1xsBE7J44",
  "key8": "ADWPYx2eUPXdKXBxFgfEEgA1HN7ErczF9EQdLNB3uLEubwY1563nPcKtbZtR5WhVam76gt6xcwJGkKNuhJUPKCJ",
  "key9": "HCxC3G8kuJWcCRfExzQuPo7f6pXoo38hRKvaZrK9maaU8LUzQvBqANbmVdGxXGjVaWBTLh3VZeo3jGaX6eoagfZ",
  "key10": "yyVdPto4XSPRXdB4V5dzkWNVk7GHhGoAyHcVxeZK5FTDb5WS83L2d5nGUQ1WAZgwgk6c3gj5JsRnRTzokqCz8LT",
  "key11": "ecrNv7Ck9a6Lyi6x56erUvar9E9GogeRxU886mcYtMcyExvEecYYv4frKYf7cm159UidAfXJahPbWZZkCGqJrfV",
  "key12": "xntx8jS7R9E9wmEPfA2zeM8Q5dVnUyR9nweCj5nJJCSPaB48LC9sL2Eq47DstpiMA69Qou17ounyArL2Uez4Cpe",
  "key13": "5c4CHiV3GJHAj6jtXNdCzZXQC2NQNEnASKSvvW41vArYY6TRcFHY84QAjMom9xBLUgJWkWupVNeY6HASeYSYLuNw",
  "key14": "2GFkKJN3akPn2kBkaNjNsD2BjVZ1c7wtMYQa6pDtczrktWQBb5LsweCJhovh49xKuo4EeJnTtHKX3zjEuGwkXZzz",
  "key15": "4qfDMa9ng4L2T1A1bRhrWYZuN6id2ZnFpsVQziN9178PWnzdqqhCEaYQZCFEzxtiFfqbG2m76tQ91K6i4hUzG9Ej",
  "key16": "2eyfvSwY43wzuPdTXsDPgudqrQEU885R5Tiw9nkTTqWPa73UTzkarTwfFfptsfhhHeqBTTDeGUrYL2ub1WVMg2NB",
  "key17": "4L83GQBAjjC1md7D9Hu92BDpQTmi5xaqn2rrKRVPVrmqJJVdGvXZeTKGsfYHxBNT7gciPzTpQH7WMbsaEgSZwNkD",
  "key18": "2Nw8S4TqfQdwBbx43iQLoVpSxwHMaFwGRZVe9hf4Yt7EtRCNSriJXZXZva3StWhFv9tXGvZ6RqcuLVWDg3GkEP1o",
  "key19": "63P6EYEhkH27krXNNP7xqX9PpGGMEF4CLWSRwLfUEAgFz6NtYWi69pKtXJWifzdqQbzBJTvpEoGnt2fPZKT7W4hN",
  "key20": "5Q13TQUxFKRSK7m93JGMfk8AAaVkhZkeTuk247t1ZtUBg4T8nPpLQKKw1QUWgCRnsKmmYk5YDbMWfK6Bz4Amtgr6",
  "key21": "38qnEfiSj8SZVxAhbzhroWYWbUXbNHHjSnvas22PytgC1tvDJRmcfk46ZyXu5ZmXYjHXv6uVG9ebjPw6z63H9Jzi",
  "key22": "4u9pEBqtHjZH6LeHjgkLNyPZFBaVSkXpvSUEAowheaUBLX4YMSVmzUR4x59gNyRA8hLAeUJ7JmnNVmuC88RoMNNF",
  "key23": "SnRsDFui6bNEq7TzbgBDsiNxV3NDWRrsBKmWKcWFaAz5DM7CvAS5KRNXXwtW24vjjF2X8Xrh59oh5jMkAF39Dh2",
  "key24": "5z1939xVcGB4heaLwB3vxrCkCdjBf8ZwimzUCVzD5VbNmdgKUHkXJnBJH8Jv8wV44LqsF4iwayfX927RtJCUGuo",
  "key25": "3TbCzaeYiNT5XtpYSheZxRMHDrLFUJKKDMonJGD7AhT7r9MfQfxCK8P3kHph4PbecawqRVV9uPwTUaEx5niqUAFq",
  "key26": "5zSJwoNW4QoSBG5CvHv7EmU2i9AapQAo2AGuNmdA9NYmRPBZXuodokke63D551hRprkjd5fYzyX4vCJPs7oVNiew",
  "key27": "bUsLajHSCT5sa1zVjoJwJvzSzxWoLHQwuvH1U5FBfz3Pb1zo5W29JLtN8Rfr76xabdkpfi2pAUQqgXAgH9eUUKR",
  "key28": "3JFiAXnKst4yaPXxH55kLVmZwsTezgz4zPzy6p4kep5AyxavffbdKgDAYHkAzNvX7B1WExium6qaSZGEfLUhPpUK",
  "key29": "4fL8EWC7eXXMDEjcZ9EKsUK62vm3aHHxzNaA86fPTk7eeiTBXDvBfETUELkF779x13oMwgTK5iNZFEh67Ud4UdZW",
  "key30": "4dLd5GUmwJsbB4AE3isLmoZh7AYVA6n73JwHA5Xw7q6XJJVJ4uqLKotMaCWhn2HoG2trH4JMpMYiekCdTSYtXQH",
  "key31": "3SQa6E63Q4yyUWuqFbzeKwPLNeBaW8ZpjaBNatK7MWgTDzTeBbUgc8hZi12NUDBVTLzqQAFKtobTfjYmAf1FLtkX"
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
