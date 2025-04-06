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
    "4UDme9XmqJdirZ7CaY8uYZhL2dkeFStYsKYeyC2Uck6kDiVaeyoXDVLeVxXzcbZpveuW1ivHkKXq7Wn2zvVb1dSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bAEa1gLkhfCVpWQ9Mx4kFaCU667d3dvpaEAbdZwfFQFwBBGL9RJaedkT1pHDqEjJriZQZbsj8Mr3cSzWQqtZVwN",
  "key1": "2BRfAStbJRRZb5uLavrG6zoiFWRpkWg9GHYtg9XpCJ9XvzFdmwx9Tfn6iu7No4FpB3gMWiTLYHzjoV9XEDuvhe4K",
  "key2": "4CtKyEtxwiVuRtYAanoyaWCJoU3x4ERas9dS4SitxVqmo5TPtW79WhF9ob2VXLWo5MmaQ9VvcjAviYqdhKGxFReh",
  "key3": "2B9sE7eFVeqiNBud7oW5iEf1Eq7HrvH49fqJmgaDcV2G3CMJZDJXjHepLFWnFFyCKPNbjMWEbxbYEeQmRYNC7yTv",
  "key4": "5nFid1p4JD2rgvcMsivejWaKtVJdXpC2VSQu8Zqn7Cz3FtSL8n46aab4YiZp6iovxVkanbaJh1R2QE8prWESKPZa",
  "key5": "2UGubLXgfty2ZyhNb1Cyggejv7ynp2jZ9rth6eHpHjAL51MJaJuVKh6XQVgsFmaNNj4UNAcNjk2tHZWQSgZ8hm6w",
  "key6": "63yyKGHihHfAtMN3eNrQfwiAdk5V5mxVpixKUHZgnneMyY1veVSZe9GDXy4QuyMYgc7sHMEUYWkLwot7HSxLMr4y",
  "key7": "3kRz5MReFMztWUn2RjJJ7D7tftCPVpYXTzL5sbjdvdZ5oZKhfBZM1sc5y2FEGgRCNRcfS8LPi1Jq2iasAnkkrmzr",
  "key8": "3uMhTsukC4xGDcUX2MXq3rBzP2yE7FCUkTMzAMzp6C9ocH1tDw32Pm9rughLitnym3gxzAhQdFpgP7kWMezoqWmL",
  "key9": "jYg6GAzSpNsvFAeJpQRbA2kea3mKDJkmD9W8FBHVVqm8MH7W9uropqTGMmPa74mvPJsDhG6WEAcA21V99v4ACK3",
  "key10": "64ng76ic2peQBnJ16c2sngRsXU16z1Lz7eM3NjPw85TDW5ZRKdQ2TkFn7tNKt5P6F7AR6BfK6YKwWQEzm1zfViN7",
  "key11": "2hsjpwgxvv1SAPAYQhbCNdTbU8tk7zbdL3xhPZmxzyb1Yf3Vjt8L9DsLrayyY7hh5StsDYxY8VrxHoGQHFTPk4pc",
  "key12": "4uGLLGjxjdqFHhhtYZzy8rDaSv4hUAL914M1mvrYP7KjZBVPJyjRxR92mN4ywgQrz2gS1BG6JN6Gz1jzD4w8DB2B",
  "key13": "bJt3A9N272kfFbNA223pf1ZHmmj2rTZ2XZ58ahUw5LcNzc4nRpK4LYvxv7CANrX41veUo4ByRXqP9vA6k8KC2c8",
  "key14": "4CQuJvS8DAm2FVShio7XRmRsWoXMBeQi9LQwrAAgy8BJDhDDZF7ymFcNduhBTo7twLF9DuHmGeYF4E2BKJB6UeRY",
  "key15": "zX14mGzivdDC9d8gR1sgehHZgWo3A5D638Bf5cbAqQAn3EwH2qMtvrygkFspdmG1Jy5Z7oTGmXU5UkUro3y97EQ",
  "key16": "5TjjXHeR7pJ184fjaSDjejQqbQGuNXgV1bqRfiCu9onapEs6wmDtwqY5DKJRyRBsxaLvYgwHeTugL9ke76vSRcyb",
  "key17": "3u72KX3cXhgHybFrv4Rouzkro6jA4YWbNXvqNvVMfnY8oBsAVwKWkLaE38LmdQ7nhqWg5xxQPUWBWkTfkY1dEwkv",
  "key18": "4XbsaNRdGqCctQbeSuuGUFYmrhdCAio6RdKCY37LzMhC3jSXP2kipAKnev9PY6dMxGP4949Yh5oYk6pYCE8ZrZTj",
  "key19": "356JMSZwg2RJXAuRRR2cuAJoNqV8s6cjf7cvhf65dbzX9s57F8wJoJQEMs7idScbjXRnLzYBDKy6hhMTcJvgz5tT",
  "key20": "3ceuD6rJyoCxx2vXRhneYzvgwvsB74pJ6n32U2Vk9zBhwNuak7xrMbA6SuEzuuJWPxhK51ABsScP337y1Kg281HK",
  "key21": "2PP8Dp2XT9NY1b81eeQVuYwZBo2uRrseDppxXxYmfm164zou6pDbcjiE7AmJ95SPMp5KADSM38rPVu952o1wpsRp",
  "key22": "5gkgnucMR4FpysBx4LxJRopm6B5fBYYtXUfNsYvUB6Vm1Ut3C6AWJneAaN5UnwQcfiZGDMeNsSxC5v8Na7jyJPJg",
  "key23": "5bcKxJJL1QxUZjPc6FxzRYgtUHmfYo5q9bGiPGGmeFfUJb4FQJdZ6sLtPnW2aVzRbLU64iqczBk47NSQNt4jX4RM",
  "key24": "3wXtGDq1QtkSpW8wRMg12itHxnenNBD9rWzrcieVURZR1hx2b8XzbgiyRY6451gTTSzCuKRN2iok8Xbhg9yBmrXA",
  "key25": "44wTYaBV5hWL3o19ZNGd9dWmR4pQWHjJXVzx4Ya3C11i9wU15uhAp3WjwKnA7ok4Gg2sSsbsf3rmLDSTXg4p5agv",
  "key26": "2xESGQ6kwEvuubV1CHnyPNtVpmPJuLSA2eLpHrmtGVA1Q8FbJRtgLDGJcA7SmeVUzPgFpRoQAXofDwH2RbdwHAeb",
  "key27": "4c97uqteAYQHgToK8RAacvRu3fJ71jtQCdQCtRAqP47qpGhNdqhhUmfftfFPimwcurHQPGRbiKo6KUssfKZZxGcd",
  "key28": "4EvogAE728eGQpUXrDEPkWE6w2Q16gAxboi5aCh6fQmzczJp577rqUYhcXUKNZFW4YSxgLjaa7gksnWyMK5BrNmR",
  "key29": "6S3pZ9FmgUpsMcCFeUkhTaU6seDvKv8YJ4p2VUUogkQsPDLKqSeUT3QZ34GZiTDxb1nk9dSB1W2739avjyK9Cvz",
  "key30": "qapDHTuEz7xA2mqh35KLpZheRmf72aNq7dp798BPmS32vNoWAtPd7vNCgYuRxovWb8c7JfPfXyZeq2jU4KeD9t3",
  "key31": "4vTSTeHWAqkRBUK76VE42iizSjiEC51Tio7zyZPeGEtQ9kU1peBmX2hDxZfrovUkwufS2qTSDLR9mJCVAiW1PjpJ",
  "key32": "5pcNwq64qQEQge9zVVFNxba7k7ctvpVxVNU6KBVko2wbQ9EEM7TF6N9DwwBgWtbjD512nc4BZ6CT5t9FXUf1U1je",
  "key33": "2oQL78rMomDPCfsywWoxa4nEjwp9Qet9xPcBTtu1KAFxCYrGvuucpAp9eagPB1GH9aWHmePYgujUMrzpocAXLQwZ",
  "key34": "5PiXNY8crnhKsDJCmxe7s3DFWqc2d3U3daxazB48NxLD9ZDtaTeKR3yG716hiL9gsT3BwiGFeoRWvuFiT8a4kp7h",
  "key35": "jiyZuY3Z3XyiHPUBJcYUEXCzZPHn1p2AyUo3W3PJhsuQZcwZPHWShwxCE6eBzXdiQr815Pjz2rcu3jus6seNyfS",
  "key36": "3wkcaTV6432q2mNxAZoAKGdE8JQhwr5NL9Ngf944Pe1fgynXnr1t9X74THtpUGPNnp9xzCrD1y8CXNsET6xNm7RQ",
  "key37": "5s5vwWKHgsB9vpryjjALLrgCuK6w72VJitv5N3PVSxxAPfn2fBaPPHr4C8Ub3Xm7yCXUXFwdMWAugWdimkb1yw5t",
  "key38": "2FQZoGHYWYErbJNE9hQ8hY9GVc6ahRtQZVQgHkHKs37urZYA5uT3W1dMTMdyKpx75nvWz3aC5Daar5EyjXPiraXm",
  "key39": "LSQNuymR4UqNVDLJukuB2UFecfdZY6HqXSQEgjjXBbmMJmWfZtTsmH5QTEDjBXHMxkKRViWngTWdzYHrY7SB33b",
  "key40": "CLy9Q5WUnyo8vjgRLKzdueEdXEnUcFdkXmFe9mbcS9pVc2G5D4dvFyn7aVfvZbowKfLhe8YAz1UzZQ2XfsRqm8R"
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
