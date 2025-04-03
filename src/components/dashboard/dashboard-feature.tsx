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
    "4HfaAWZ7Rjs7WQxn9zYoeFaHeMKQGGyMtEXDeEXi8njouE1CZKLtrdimp8hRFvfYgugCw9yZuw6TXQbEJ398myhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gy91TXqNaSG856fCFjG48CeiKaGCUvjDod8QVYdZEps8p94mtTkosrGGLPUzA4RfnZTGCiwKYNqCfVVrzM4FgCR",
  "key1": "4Eh2uXqdg8u9Wz3pugksoxVcvZSRvuwZHZky63RQwuDKBz1xdC2VQ7kWyGd8fMDEY32T5XxZ3EQUXNmhtFLowCJy",
  "key2": "3P1FZEjEfp563jdQZty6bZ9N5jfqrus2xwRhRabuz8EUhUbMSGLevQhF6UafnNBdMGJ23Yq3XiLTzAf16kXVLSXY",
  "key3": "4BE3sKhA1U9vN6GDHjpREe6pneMobi53oDwfG5bxTkYxdDs3KwntgQS8xSRZrLL6Ys4k5Vuy2jeboTAWdAZkyudt",
  "key4": "4iRcXunUojArgrMXJgPovvrS26hn4Kzxy3f2KhMjByAb7ww3gJ5BT63uX3nWEf53PsKKPy28jmEEASUrYCu6v4tN",
  "key5": "VqxEjuNHybBMgpyj5kfFRi3fhm1F8XQeTfa461dPUWsMAnmuvLtxS7FnQx4ftgZB1MsAaZrWddt7gDAyQ7DCqy8",
  "key6": "55ztTtsyPaujHdimLRDsPiuqdT5CNKNh2hwpG3KiYtv8JEmAnoUZ1S1eL85eFe4zccofgFzL2fUxWWYRKejDRPkX",
  "key7": "nmzjqAy2XbAX8GgEqS57DUMXqujEp8uUCLR8DzgRgypkKqRrVGYAyA4Jt1gEPpPdfGeobDxVgZxQFG71p4BYBph",
  "key8": "Cw79r5gbEwgYcRwwRb9QsxrCji2B2caPW5WZa1JeBRW1ChRqkKpKYUiETjnbcWmSfUSBYAPaVR2h9KdUgZquJG9",
  "key9": "jUWiooNMP7GCd9aqqowx3wnREGDmWbTS9vVGd8zrNQqxFTfeBibtPhQBAwpw8UbZ3g7h7Fiht1xk2SJ6MzELyXF",
  "key10": "4bPiDHLhdovSWwKkoZx6cTao7Bx1o9xQ4i3KhFFGPCRrH6hkkQcHRaeKjrUqY7ofGXP5WKW5AXz88ARtGyUxpNx7",
  "key11": "48J25DT17fn9DBEHED5WfLYJn3Cy5bHZXUJoxqTTZenST9QsnwtmypBfZYYWFEvbj6s6GqEkdqCiUfiM4GRpnT3s",
  "key12": "43Lf3WfKBKF5W8YzL78w62SRZdiyaH6RpcDVzb9nbZ7iBkoBSCp53BvbcGFF3W5y4D2yuLKxeTtS5WttM4T4ASPx",
  "key13": "4tVy1xVp6rx2iYPBssD64wB8x8PHKDawT1NadYQdTirtWo1R5SHpeXxqAosPxTLsNhG4pA6ogwAzf8Vvtw7TZmbp",
  "key14": "fZ6cZ6vEdcWMnnJqvN2nyq9bpFKYXY3yBhUDhp8B22h8ZWa1JsHfshW5m4rejEyWumRX2BCVNg9mV8RuFYdfAGW",
  "key15": "5NKFe6QjsLVftAjojNRYYKoowg8dasDw733UBYLuCM7mEZLaMCQUMUATKeVde5R1r9KDmApYApV7yF7PuzSNc8Mz",
  "key16": "3AfRKST4HM8QASJMsvceqEEeoQretPiNQdnKA3kGgo6ipAxSRnJbvb24GeryZrXtWwusywKCaXcEf3rzXjhV6rWA",
  "key17": "45mck8N328XqGidgTkvW2z4qb7JV8imscSdGaCA8o9NX39oR3avuMz28kTXksinkMr19xQ4R2xDV7NJmpCdSaZw7",
  "key18": "61BnhFBNqvaKFYQE6QdDsu5L6vfUfif7c3Te1tLZ1eTNzLzi9RuQbHA44b8vGiEYJUkiTF7YvSazfkBdvzB5Av9x",
  "key19": "58A8FyNLRysYoLPadCg3ECWd6ng1LqUrKfFbbcYka1iYVUpwGQaYa2chwtDQMtoKHXyZp3KLgEprd1DKDwEEU7BM",
  "key20": "3AT8mj4htZkXua7NsKiC3hbgvXWUHhoF9YUkUYzidxZKa2WgBdajcCYybjDZrY7AxnDdnQLwyW3UcNTXc5zVSkqC",
  "key21": "5p4sPQ63wnu3G97SuYAMTDdts92HvDeKoL9Xi7FRbcT6RNJUjxViNBorcFVLZP8U1BiRt9wit6SscWJnfYfhk9yx",
  "key22": "59eqHJQLWz1PC3vYwtCb2wrDEVxHHk1KUyq8Q3HViWuYbiPTg263EoMw7VbLdPmwHZNVFzoBUxLHo92w24SJnqoe",
  "key23": "vsMxR6AVdcZbUS7ov3AefENayVfvyaerDfs7H3BD4CVsdifQAgKPD6fYHfq4aQSKhm4AkgvZDXyRM12AjhXJy6j",
  "key24": "5475Fpu97Rod9BsSxJTdBv54dvQufetV4Skb8hWXWsPU51RsoekQR38ixwfNKapNVKLBt5UhK8KT3nZUmiq8Z7ou",
  "key25": "WKJyb9FFYW6xkaNYGs76EHQvgC98LXrn4q5ubbdCCmKmNzdLKi3SQ5WCr69jLh9p9HNN2LUbH3xXuv5kVZExVSh",
  "key26": "4RTfa4Wug5UQGBZNFvmJiGrMFuwwhP2wdEEoJovwTGGiDFqcfeHnwCSxJWQHHX79P7FMzYN4HsC5wi9gpxDjfFzA",
  "key27": "4S6dvG4i2fyysaYeohjcoQe2ABmo8Bc891NPPoBURvPsyivs99Bi4uQaKDT1NQvAGT3pzvUznAtycYCNJSqCTjf",
  "key28": "2YLd23D4iqZ95JZWhz29yF9wFTy2YPtpz7fffVu14wm8aqn1ud5PHifSDQRXqXAAipX5pXiwkhhXRiDtAXgrQsoV",
  "key29": "2dQtaNXa3dNo2dmaMTs2YFaEEdNEV7LsKb41gMpiq9rKQQrXGcpYW2yDCBqTGde4LDiY4qrSKSPeYrX4Dcv6ij9V",
  "key30": "3jmWdc8bg6dNWJxsqbJYMB3VsziJuTh71ZfyuWq9p9LixuhNNKP1XdHzQRKGJY3Z8HNpcBLYEmd9VHqvPE7zn8GR",
  "key31": "2knhjytdu7bTQfSiAzSdz43YcgVx5XKjt86pEXgXvLbWB9GSUqPV9PBWfF4gitBoaUwRhFzrKmJN85hKMKuJTtU7",
  "key32": "2wFZpK1wfoWwEAFtSfytiCfHtsYaK5xTxJ3w1brawUq1Cu9gLTbCx6YgugBNCnbk8vDSnbZXKZztqHvJZmeKHSuC",
  "key33": "4f67q4ZGkDQ1CPPtH3ZUEdNrcfoMwCewcsut57XhxUa8x5KduU8xxEpjexgtF73UKqXjbmqPytPF3HsFYUwsXaG5",
  "key34": "2xZX6Xo523ezPJ35rJjQxkiH6b9o9RSSVgdYpaR3FYgdjMMnizVxsijrnTNMt9NEmvLVhoyRpGhWAskfon9CNP63",
  "key35": "2wm5UZAGeDLfWZVrLDVYfQX98Fi7CXvrTeg539xNRB1k5uQZEZi25aLCjSXM28qWgG3JBUDqxdJUUsJokrV74d4U",
  "key36": "474mrES1qTmxWNxG3iKcFg2ffmjJ9V7xUyhmTCHybFZNFbsakMN5gWyVXSNDAUXQCJTdgCTBtYddnCMFFNb48AQZ"
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
