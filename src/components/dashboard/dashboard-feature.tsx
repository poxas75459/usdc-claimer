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
    "4D4VgjzAoNb4J6cm4YLH6sjFmVBAVrWvX9PCbRae85fZ3HtpVZJqLfRwW5yFDn9J3KbDUZQQSiNEWwwDxUSFgVvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53q9TwEsoYeUrVzFgTuFqNZN7vQD9u89q4RysPAJNaQPt7U2i3yase7s5y59jH2EBK5LQvmKMHJwBRvEYTtcuLoU",
  "key1": "ErL999Eb48pZR4fYzwpjAoKCKePkbECR1jogeHbJVqGEfa2FwB41uAojZ7aKjUXNCUn9tFeyWtz7PLfyGkFBHQ9",
  "key2": "3iPkV8AdWnrPfrhm97PX9bhPB4boUJKFmXDMcp7bv3MN8tzGknvAEDcthDQGuW2fZwk6adSbEXcruJGqd5i1E1cW",
  "key3": "2EMhzwwkTcVmNzUPZqmHpaZ4NzZnsrKQ1DVYWW3byXgsz4rZ58CrUobroqShN4CPFN8TVB3GkTiNPBR6R3zZmdpr",
  "key4": "h8EzyYmw9yRnqfWQXukYJe2epgPZyn6U4nzwRhXLzbHs38osrid5eh5BmTX4VtRpRJFQwVT5wZ5srvDsxCtvng8",
  "key5": "5PTi3a2AwVZnR4B6B92Botq8ftcxwM4FB9Bck4WeYePnZ1KRnUrZtFaDUv1V7NpD8TUP4Rp1svrunYBhPWmoVoBf",
  "key6": "2daeBzfBGK1SpkE3u3G8wQYR74vQMnTPs5AWYPc1PJdiYJgmjixYW3ivvoYZwzyY5zpPHmUmTAomuaWakMW3TUCp",
  "key7": "2MxYPEW9325BGAAUG4PmMKNxfnm5C7gJPA5BkAEjq7CwX6QuPXuuuKBwRAFQ9XDyP6x1RYMLCFsoSWAvXBxpH5Ha",
  "key8": "xQ5YNgdLULdgQCNEtMfPdFLKSPTbvj1rGWmE2e5agJCgXYVs7yyZTPkp1ekQcdZPJ4utTE5NeNcLV4HVxWGxLd6",
  "key9": "3xygJGj1C4iQ9fnXweVx5C1UJ76Ny3r5hBL1ff7GZ4aV59VnbygFFn7DkTJDFgPWwdFZBDBQa7TC5zPKGER1pyvg",
  "key10": "3nBPCpmbyJSBbf1CmqB4SpVxPdCCLq2qQJiW99MhZscy2yLnbtSFnubCPXD7U9uzEyfoJML94YeoTT9SAk87ibzY",
  "key11": "5ZFpXc8eWZi1jH2nzADrpjvTNwHNH5efTA69htgcpj6wbQG8ddXPAtJECk9tcxzgeNyAZNzLP4uxTRwJAJyS89Zu",
  "key12": "2spNy91rLZG1ajToiT9DgRhQafycofFdbUd9zv7LizZp21oQaQhTB7X5xX6ZG211mWcqBTWgZ1ihwtPZQnU6cUMs",
  "key13": "3fQBNeSJCh8XwcWLmA43zDsmQuUwYxiZDkPbV8aMEFkGqMwRZewMgsdVtybHGA5CKQhmefYDSeNQFt3tQnymhCp3",
  "key14": "4mV3ViMMnU7ATH2rzA1A74u8qEuPeUkCfq849GC6pQSGk3nhAUe2QQ4eXm4rKnPcy7dFepudEo8nfeJkT89eRB3o",
  "key15": "4Je8AiJMSti1FGMbeswH4eLXEtQdCaZ2yAGEnC4ptoAuBnF9SrAPywhp87BWuVcozaPU3tZEWVFAiBCgzNNzPXsf",
  "key16": "3e8MoingZ3gSQL5cQwN3rxV1rjBaRktejCJUVhaZSaV4Ji6fk3e26cbPA82ZRx7UYdgFsxBy8gtnBqHk1Rt5dD47",
  "key17": "3kV29TijRzdBDVggqmg6TXw6gwcvaypzSthT57H6A4fTWMq6cvuvxbBX6XpiADk1s6XE8JVD458JAWphGMKHQGUM",
  "key18": "yUMPN1T5dzSNR714hUBogiHy8vLCXi7sVQo21bE2MQjSn3xdFjnyMKSmxTovDrQr3tkGFQf3D1Tit8MF32Nq2tq",
  "key19": "TMAmw8MGZWbedmJxLu8q5VzZPXMcGfXUvx55UqXkDetqs8sMsKqcNERtUxpRyihggFvAGshB9nwi32DsbsvXFw1",
  "key20": "3AjUVvrHXvZLitm3aGen6RM9E6QiVGS42diwV2DpfNyfsr5xCDSBwR3qiMBMTKDhXK3dq7WUgVp8HGJEAu4qaQr",
  "key21": "2JDQuh8sXFq34RGMsPDwaezCCgCtUx8rmtGQfUD4sbQcCeiDXkArwEv3FcxyJS9UibCLCc2xkPxw261brFU7LuhT",
  "key22": "2YimbFR8cJHmcHYoAgNxgaFXUA8nXfiEuquqR65NbRqn1NzJAj8XFgXzNxfHZLUxmgYAP1hgiUzheT8DXeMik247",
  "key23": "EcsugpdKSBFRUfZmnjVND6jnsSeeUxqVCoNyfuDMBN9QVMYfuTJupM2isNbrczs1jBzG8SK8AzSAz14z9UbyseE",
  "key24": "JnY1BQZ73dZfN2PymqMt36k1SQW2H5jz4z3GJgXGpaYvBjCnHhxuKweMGx2qZ8Vz9tjotNe4uMj6WFdnVpCMzfh",
  "key25": "2sVXLNLaz3qUVmWj8CN3iP2kjYpnW6zaZazQsnE8SD96upuFXwTwRprhrFMR3r1GuBGU8SjLJPdX9NFUNJnE9JPq",
  "key26": "41R9nXTVZgaQMJFYGS1CDkxQpC6xrMVtX4qeTdMHVvBZEBF3noAYkheQecbMMDzSwHQSdryLrKt7rWkQ2HxQ8hE9",
  "key27": "4QcKUaEy69yNJjRU8rk4emfjPRDg1SF4cqMhyw3hxQX4STZ9eAX7uzVvL9JDWhb2nZPhuHx73Dg8gsToXFWMv3jM",
  "key28": "4ug89ZHmAFuyNiFEM8GFjuQczozttrjWq3PD2QLFHM8mYnYGrcxHN1zRAdcbRhcBbjQqP2neDL3LgbTticRAqqkS",
  "key29": "42Fu42Rh17zb1jresKGAUKcHWPLfLNWVjSfefyibFbawYWzjLnP4De6UHSFeqANcrp2WqRF9RiBTZbKqXf11XAaW",
  "key30": "V1Vg71D7Gp7GpvDjZky1Dvhxq9HnvQL6hGkyY9i7WNF3xnQSM6akm3ezGdhTBXj7NhrxSoDbGVekgmfUgY5pvxY",
  "key31": "3hsG8Hpa3ZSdn6AhW5g51VAYzpKj5fBteAG2WH8k2hXJS5ErV4y3xSSNayxYeA4N9L93vQvL1BNLBgorDTm2i1Ei",
  "key32": "zbKDRK9sJvwhAUrWQoDq7gdKBNQjEEdxjXcVrhAkjKPXkJb6w32FfCpkd9yFnhudpKCHf9xaSuJrfrcDA7sLCnB",
  "key33": "iWBtmM4zLFEaDqvDaV59bvtLfN8yVp87b9HKDR3JJ4VeEgJEozqcFBKrSHrRdAw7YmXT1vXiqgg8zg8rueTShiP",
  "key34": "4v7Mv5ZJJ2KLtcYRTNneVWvgZSWCSy3xkPaSEEuBYuanuGMwUizygD1DihgMuhQ4ePrCQVXQpLb4E5AkTvvw6SHZ",
  "key35": "3e3bAbPCEBiFRTwuoqkppCHt5iNeroujS2pESGR3ydHcGXGrVj8FobQVbgeoyjocuRFTYEyFLbDGCJdwDhDYW9gi",
  "key36": "4NQZcADd8UpypB8r2NRt4n35nnzXdeBnZmSxcmzYsY5tR6xw93mk55S3RfbaqPjxes84B61S8rkQizaHUTaeXkHZ"
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
