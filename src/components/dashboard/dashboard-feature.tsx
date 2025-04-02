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
    "BXrNgzqiwMtcDVhT2cQBQr2daNu6RyiV4f1bqRQ1DKQjMfuwd1mGVfqohQBiVBbiT81DDBU8ECh3eKKuRxtNPre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFrmNdvXrCtbP3EVG1BqZY3M2ED1kUncRyrLchsSHYKwyRpFiwGA2D7QyYhzXgyBPK3kP7hAfAmG3hUD1Yjkhsh",
  "key1": "4C3EtE1isyd6WhEv2TGRk65fDJxmGafaNuehDXEe6LpJMmvTECzc8FUkD9D2fRE9bsBkSGmeX29knm1SHR4NNikR",
  "key2": "4mRTwWhi1o9DULtD9Ex1TbzxCGsS9h93copUEUn8y6RJvaeJeCZpDsyRe7emg4X8s4m2sbQerS4tgoRw2V5W7xQ2",
  "key3": "5qmpKAudh5oi2aEdqCQ55UtuFCf7r1rYHJhQsHRFHGunXhz6NKeZEjni91nDkcZ1KqEutfDhZPLBfF9cnXoytEo8",
  "key4": "2FebUahwDHSbZFopCQmMopmXHeUGAzHE5YorHBCQP4F1HHAx2ZGuvjeixRJ2gBiawdEyEbiTBDAHRV5keMLHogwe",
  "key5": "5nSxytuqK2f7C8Yr2yJAbNBbHuzzYQU1u1y3XZRo14HtvJt7x6bA6zh3t79RSbS2pqnuQjAZJGFw43xEC7zeAiL",
  "key6": "48NUD6sFW86QXDUtJd8Zgudfa6cXajZ7NdKEerVQWXFixN6atZo5ey4GWjXgzh75EQFXQcnzoLhMUnjKamhGFHfd",
  "key7": "2AEgd4p2af39h6ZovTW6brtTUyUrwyEWMSyuup3bU7N67uv32HtBbLSoJtaBxhWoALt55CunQ6J35k7o5xUUNjgH",
  "key8": "2yG11jQTph8PbmcEchJaan3YvVtuGKZdww3zUWVyZXK8ZvpVPZEatkeLyNya1fDkRcZJ3EasA8xEnsaSKgsbR8hd",
  "key9": "fJoJAopPwjcGwm2FPe3K4rphjj8pVVAPLjKsobCTr6964yKvVsLzmn9bd964wpVevckBVPX52gQPE8u6YmxLZMA",
  "key10": "4jrNaQVsVoUF1icYYpyzfkUg6mffBqT3xazPmRcGtd17wJVP5cV6ooGvZjDQh1qqTYWKLFEhA72Z2wsgLzsLMCjY",
  "key11": "5D9mZzMNjJiKo1inuZQTnMoZ1EjJUTR9mhcD9FhbT5Un5DMat2Y5CBaqo82a7dvrPSeqWGN4bHA7xe2RN3uC489h",
  "key12": "3ybPucJpHB8ZAAAHXpsKPCdELSZJyD9goz8b8VckCAxUtocRNh2VNBLxAFv9BQQa8YDhGDujtq9b96wCx3JEvWLD",
  "key13": "Mf8qnfTLKBkTU2heZPY7165DyTLu4ZnWCNXEAcusBi33typR8KsBoRAecgGXfyfCqfGuyXmciNo6P4Nn5Qu3StW",
  "key14": "4KU8VbGRnUf7GnHKCxgEJFX245WfymeVCPUwKAFXR8jAinm3RuD1KmG2dNatp4QzonLWgNW2ebB1awQjrmFr1if4",
  "key15": "3zEcxepMTLpXoXn73PMo7MtKGwAwJYs92st2xq4yTGDZNhs4JSyBQhNibcjTtzDG8ezZFsShESwaRTuKUa5bSES4",
  "key16": "5VuLP2wboqmzkkAaZRDWEeiLhCWvHmfe4apeR5nFSETcywkKzTrBMjjU9e9nYGXFu16D3YSjcBzJdJEUArvJ2eyG",
  "key17": "5W9DDVFf8jnXsGtKcCM7TzAPBNgoqaQbNUppS8FGQNtArb19ng8B1jkjiMSEtzcTA9h277Jy7UUqgwaADdy7xvbs",
  "key18": "4iHRmnoC6zaQpRj6uBgXBVYXQpDBJAZ9j8SGfRLjkaxvFeZjbcP2SMKMJdPaESLKdfUSPioPJ4jrGrfsSUxpMzAn",
  "key19": "4i3LooQ11NPicFqgz7xyiNAp3xwkhG3yEqHHG7hk9Tq78QZcqkWeq4m3VsFGfafS9YNP9kJcyEYarf7iSaMC5RkQ",
  "key20": "4XfCGnM7eZRGPJrMKgxabn4Y1zJMGsnk44j5nPFSCV53tbyUmfs4rBomUZyoZnuWfbn9wwAqWkYKBoGv5sn14nAq",
  "key21": "53hbdwxsKsXde2usBhxfu6Wg2zMhi49ucYHHFg3Uy1DusCcvB28jJQQVryPk6M9K9cf612dG8HxjjthRXUe77sc2",
  "key22": "2NiUQ2uhizAC9fZaK9ajYmX7S1W4LPE7Tji4qzi8jNH9xKSmrqoLJaTeeQfZhafU3J5VZphmDqvtQFagmrSwDgwn",
  "key23": "4NLNNpJ5ErxdkfZVzFz7YkdBut1MAJjHk4pGHxwSrAug16L8WPBQNRaagKYUvRY3v4JoxaommdfL61Suqs99VsRW",
  "key24": "55DTnjzv91RokzRrv3SvKKRChHMwac3LczHhpPs2KW5WAKaGTZtahVmM6wEh6AsYsoHr8dRdmHXMXgubSsYpCYAK",
  "key25": "2KXib7wERiqHJgXkSFnFuXYGbjAogb614mnbfGEyqmnpNYJDNcGMeVUPx6e7THSmBUAqXJuCLDHvPexDdeP7ijsg",
  "key26": "4uYzPJRCfxFPuGJAx9Ypi4JJ1Jf4BwyqPPhiEJyj3kMbf1sN435PcazwM2NNFHAM4BCAineZ359F9ncNsXkx2Wmu",
  "key27": "2NrTnEmmBNtfdiWUgsaF15hzCyZQdBJAtRd7fxBXq833JAnqz3c4q6BhrxD8bSKRxCp2Mevuow5aXeB5WSVxysNd"
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
