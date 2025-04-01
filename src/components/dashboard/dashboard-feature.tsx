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
    "7MKbpeN83hn74Pk5Wwmyjt85ES7VhCuWDYjwnF4bixpjKezn3TPJjzn3LtTGatcyn1nTUTEJjCWuRjzTrqbZVoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Fz62tpHF8v2u7pW23DhCCzsQwm2iVAdmHEYYZiydjF3MRf7gDfjgFPkjvYCD2GVUBaVHB2Yg11DRPqtu1VZ9Au",
  "key1": "4Y2seZoCz1QfPN7kdyEBctpsbTuUcFMAr5hKnwAKYchayLYPvnWFRRyE49JUHVy8ffBAmaF2e7sdBZMUZHa28t98",
  "key2": "54qwPFDopdxVfiEC6HbqEhF9ay7genWEJwbwtyYTaz7nGSXDzy32sMQFJg989BUmbZtgVGNBb22vaJ3jGxQGMDRq",
  "key3": "39B1EmgfRbBL3j8b96XRvsaxc79FJMr8PUjXWAGGNYL143a8ppM9iZegfJ2dQznatyz4kabeZ1mQfREhAjGdZ6ss",
  "key4": "2FDWMwp4n3HYeaSs1Df7jZCfq1AXLM7rGVC97f9WTBsCCQ3Gqgy2zEZktG4XREs6tGMveNAHgygfmpX9fGm8ZFAu",
  "key5": "2btjFT1JJd2C5njYN8kvkGyBHSMkE5GyzafCxnzQ2kdpNVnfBg5hPfH4PNAYefB52veJorxDKj2wuEmKLatPYtzp",
  "key6": "3wvgPfzjFRqFWdwMr4veFkvnZMvqaq2Zf2sP6EokNPNCP9LSnc18rZ4hA3U6fakcwNijcbZ5aRDfZgDMzWyLm8Km",
  "key7": "uUtd4iYwacVZVBd1PqsNCbUSkAgV213CVVHrYgNimRgPzvJgWgJecetc7vhjMNqSmpL39n2ZEuGSrtZPe8gmsRA",
  "key8": "EEFtzfQJwWsCSy28TWQripiAvaytU5tDBEoBM3Kd1Zk166tsLLMkV3ACahMjx5XJQdkAvpwjKGdaDbXTqbJ9rRj",
  "key9": "aJRWuQ4a57Mapwjdsj3JRk3A6HmTYfMqn81mrRdeDZd2BZ7YAot5aoFvF83WWzDr77Gd5Dz1DuMCJtgH1cL87ox",
  "key10": "3wACcTqiPQ8YB5aHabPMXDWdJ7KNLBcUcC9jEf1pM3rc5dRJtxrbCRHbBkNXWmQzfDxYTFpYzC3RPiHtQQEt1Te9",
  "key11": "5fzzgi2uQjGic7v6fep5CkYnZFHFgHKR4JfJbTvYzin7TPEtmMWkXfiScVZmmPaXyDTRFXLxpMqQ5wfpMgK57U56",
  "key12": "2RavJ2kUpMyn5UaM2GqWvEgwY7yCQ9YmsGrYNT2ghL5yvYqDDCBfYCHUdyNn9DE27mjCG2vBAmE7xwGQkYZbNt29",
  "key13": "4HkjK1z6LFQ8Fb2zWc9o5XsBr9i2jz2ZYMbKMBrCPZnJRekLZKKa5ZLWdJ4j72uZSH18bdKjcE8xFNmBsqjowS9e",
  "key14": "2QbyYc688GaRpTjkqPgLiaqhcnXPwjpkf6uaiCzecpcVCb7csBKeNYJoLF6QAvwq1FLbfwxcjXkMhedQLjZ8gELF",
  "key15": "64aj3juPNV7cKanKJys2nDXsgwTFo74Nzix3yCyd8w4hCgaZvaWAht81W6goMiv1A3N7hG2sUfMEwB1wzRTPiE6g",
  "key16": "3phrFNoWPqvbkpPJXRVHk9y421DAtDtxVMKn21VcDLEr5mdWE9fbE2LpRAtBiAjNrZoysrvb7yc3Lmerihpef7tN",
  "key17": "3WW9WwqVw7GqfmJgJceQyCDMiGVJPSqfkRdPijQc6ei33LqMSgQJ231HNYiJv4o81CXY1ps4DrLi2n62CKnbbEPq",
  "key18": "2e5VgkpiRzgbC4GNpQyn9BqZz3ysimccNs3VeXqcwhFSvdBin7WnTaHWtmjGAzvKwVqSuoPTJPcrpvMJRj8ru9qd",
  "key19": "3cs9maEuJ9E6pT3oC6EzERbiMVGXJgdusw7CwLruTcCQ7oM3Px2RLXhT6RzPg6UZZqh1R4i5PhnwCMB1NfRwJaBa",
  "key20": "3exW6B2zuLGGmwbrcniiBuMaFfgrcB4X8pi4eisLKjgFZPfUxH1P4Rryp54C3cS7wjQJL15PtnQoaukf6jEEyUE8",
  "key21": "4MYmyLEgsX2donLhJLJS3CpgQMbTAPSwJ4utxNqQXaCwn4TweU1wCLR3oc3m43FyJx9TJoPtTkE1na6HgLvnQ1qN",
  "key22": "UN7sj1qPn6iNaQAqVs2cZ5pQYWrRS4j19pbBcunsoJkUvqkXYfLXXyi3ci9UVwGSb1GYsFtpYi1pnX8YQCCqzzH",
  "key23": "2zVzKcJW8HgCrKLee7hTQaHGaU6zq6mbpcthZGeqcrc3B6WTzaMobEvBBVHXdAr2smcb3mxcbjUhjMs9hrVmyDAY",
  "key24": "3n7YEL23vYuECayQ6t2hB9wBqRw3Ns2Q3BED3ErzWreadPKcdiHZLShvvgKVRR112neB4VSKUaY5pbWyzpCBzxpj",
  "key25": "2Utyo3Hy7PkkupKyjTtKUjFdgtymTQD9dHn4gH8hW6dNrbqyikkhZUWLoNbGs4YhEF2dqcnhEtCZn97Noi2GdZS3",
  "key26": "4cGxeqky4maW1TEZ5uVB7cDEUgnpEEMyXfwV3DwhXGxnQhgToRshjL68KKJnphFCR1X9A7hF8hnGhp2q74AU9BhW",
  "key27": "4K8akumCvNKUmxLCr5xaT2o4D2TGAmi3z7KGkLMG3CMruG38frZi2nSNbbfCqLbkrgXRPJXKYyqspypgKvGwq9Mk",
  "key28": "4UnquD5QaJgkwRfur3WxphQAzGZeKTsVcPpq1yVb2tAHLN8YxdSXPPU8nY9AsvkFwZAM9Kx97q1eebZ88XVZM4uk",
  "key29": "2UCCLAp8xEW2AUc6ryQPnb88XGyCmc7BVxA29gu3LNmZLdQfK14BRz9JAytwZfFKMdG7wxy7bZgR2ni8WW4Fn185",
  "key30": "vFFsNQxFZ4QoUiT8XWXryNQJJu1FLRcN5PRrCjcunYopGq9MXo7D6ogqZVHFcLvKV1VcDeK7LWqGTqCQVxrqtRF",
  "key31": "3GWahsucUqRv9Hdz39DJqaYCqTqYk9vbnwfTToGYUAGAvMrKz9tHsh8aRW9NT9dte4zdeq273a41YpqAK6oQTwbv",
  "key32": "37DU8tBojfHPBPg6cZVDLwifVB1WdVNngjCVKkPThC4wKqvZxq1KDAMEU2bS7XBp9nz2KpiKwyf44ZAj2YdFPV4D",
  "key33": "3WZ14V6VpcVC7Syk5tWDwo1awE7Fm7RvLtjzEDgVGWGnZ4qu1ubA5mXN4vUaK63QkffRmU4VhJDAQrk3nHVUomBS",
  "key34": "59AG58p97opvdydgqGdF4yAvEePKJNJvXcm8zd2k427XNy7xDX1ASfy8cCSWvCBLXvEm64zAgALHJiD68bcaDLkV",
  "key35": "3Fbm3CKAAJDbghUck7R3G4gjDdfn1qjNNHJAYScn6V11pNS372bnt4D1cvk6Q8Ayb2dYpqgk8jnjm7wAvXeznjHA",
  "key36": "5GvQc7hciojb9JzQHba5EFwBtTkyX26fay3CP8CGidKbehjZ5pZ7K2HjHYZV6zeTxRH8pkwtx5b3XSH8dCpH1y8q",
  "key37": "4nrqJQfpxRmD4yTbZfEV3xc5wn9ey7kkCZyxq8KgVxqtJqq6GrLm9ZKUtBT5cctTvr7iGrxTx3zayU5W6Rz6QNnC",
  "key38": "3bMMgWuwH7WmM5iNC71YPMigo87FriGNuxsWd2y61TFYV71TaoP2ycntr4zS9gC4XbQFmfCRrC3pwUD3DSrtjjHo",
  "key39": "4X6vLiR71psrD3Z3RZXKfZRXAfLnkeujtDp598MAeZFcLUEiegHX7q3mfTbisfLQkNpZ24QhdxEBfMSkKott8dRQ",
  "key40": "5eTQn63RUHBeq3iZVzZotQKzDeX4zCwKrUcQTNbG3eKLBbrKxwGEEFtJKtk62E7AnVNqnCMFh9d2hkyBpY7Xy5ap",
  "key41": "554i5vs53zUyA1Czun5H2mBcLZBfpzyCzXXXVoDuNht4W9CMsQ3RTepqacMgFAUUBdER9ZiqpRv5AfRQaecpfULD",
  "key42": "5LVEWb4x6MPYcSfdp4JxHdQeYV6EicEZAxw5msnsDTdNQWaHfBMBUAmwQbW3B7MkVF6r1y8FyjzDpzg1TMw2YmM7",
  "key43": "2jgxq9si4igSWjPoqD1uvpic9sHaHCVw5BXv48B4xpMwcpEoyaKU9w249LQhgMXTXAYBx7bEo3bsDpuentLEfujt"
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
