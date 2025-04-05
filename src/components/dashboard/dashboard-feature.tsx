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
    "8noXRkb4U29TySi6sVzhPFQ2bQox35ckXZmWY2z8yEgGaenex2z3yM4xmxCoPoSZgpANE6nF4h7kwg2kSpksEbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AhZ5jodU8nBT5uzogkDoJBsXVQ6FnCE91EENeqmVq7w2Q7tq4NMiAbe8zjRoyKG1QgdD49UXq4yn1FsLgnGGkSU",
  "key1": "3p8ewcxdVCPbVjieJFJA7dasHB1q1GdxswFcHSL648KBdUhnPJCxCVrpzXs5z6rffjZA3BirEVa3NKCy2URdvaKS",
  "key2": "3MzBS2aB9QEmaJfS6q7rmbEb67YpvcRa41zCELF2uLmm2nGvWXj7nNm3H6RGS1WhTJupdT2yxUPa4RVzv4bHd8KA",
  "key3": "52rmNwmuCNRTcoQ1Ri1GGF9zQmoS4xCYUMv25JoszmMG9TqvcFS6NLyYbjPAwJDJARPseuFA2KbYT1LMX9s92xy",
  "key4": "47Njy2NPpWKiePpaxQJApShFNSL4trvESnX3MFRT5NCs6Hm5xiyjGbQWcSy1KhsaX57xFMe1Mr5h6HHYH7ZKvFKU",
  "key5": "4mKoBNSKURHtXgDxzSrXS5RwjmvPdK44ADb5RYFGeLD7gX1SkUtUU49PkVhciTgoKQPfhuQZmubSfPWzay8yyxeE",
  "key6": "4wZ9euWF6yd35Wyhqq2wCdhqU6ZufRJmH78PxAywqWzkX5BE62NbkGJEzTy8gnnAgmfxQXZF2Pp7YUTi8saxCyJd",
  "key7": "3YurjembgN6XUfbAG4JJDcCKJUyEUTFYNM6eKpRHYYa7oEFkcnYxyLgJJ54FKMDG1pUuNNNc5YMkoFyfV2zsE5Jf",
  "key8": "qoH13tHeQyut1Qi98mVjPFMDdk3rW6mcSs8jC6Ai4AqRXJbCN6XWVrRBY1WtRGZoaUMaiNezf5UznyVWdMYKVcQ",
  "key9": "5mjWuvRAzjKrmwaB9JnK6yrtXSZYKWkAbbHTKvGBAAhmwZYj6DiEXdc5p1drrzDaQFBekLedR8anSVXsTMQJ6Tsr",
  "key10": "PK8BvgtTQ1JUz5zmvWwykx88a3JNLbsXyDdfkyhSmWD5aUghKkMu1KxeVHj1PcMDZ3sgb6Z4X65XpQQvffRwWx2",
  "key11": "4a67VqTtdwScqD2cZMHFrW7c3Dv6vRN1jNU3UJ6BYoZhpWHoTFFV9igPK9FLdqYj2PjKBGSLciEENJzQBEmD7RjT",
  "key12": "3b25uvjcUaPSYSXMHSCCuJ7osq2GBDuXyLoV9QRfFegjZojojUxMkMdgGdcNqJEEpuqKGNLjNcmniuXDuiiNRkPN",
  "key13": "2UF3aNmDZNS4FJWfauj64Pz9SevtTH9tH1auLKxgNmfK6ka466T4yGZbwDVrNUAmtq9Lk5ddaDHWjW8PvWLw6ubn",
  "key14": "Dr9rnJaw82sNibEi241oJy1oyYEY1jT42o1hguuGFDQkVHaoiej4UBMQn1yZusr2oej15XzoPAMng61CMV1GiAJ",
  "key15": "3e8asD9q6DLETQm3A8X9jwA4EpYYV1mBuMb1V5hriu4KQVDxeiRTUQkpaPKo3tDddQzYmfmE3AdnfPddSrvT5G3k",
  "key16": "4iEPfx23me9H1hYKjohYacy3t3bw44Q7qJgfLX8UApdyrH7eNC4smh1EDCKSbdXk4ZZsE1b9P5sjX7YzqCiQvXAF",
  "key17": "5FpExE2GnJqjQesNEmwe4uxPmEd751GaPBpdaut9UEyiaUtGjuyjXtN19bZFq4B1oMgaR65fmCnQ9vtYi5ngyp4c",
  "key18": "4PLmFwoUVmm7xaw2saqZ1udWu7dZddLHt68Bcjfxt9m8K8pDoSuDuzNqBfJpts5AVvG2c6fTtEhf6VdiJwTeutbf",
  "key19": "2btfrtyQQrFeofNDdBm8Y27hZ8BMTSWyXYDvCo46arPmG983pZpjV2sSRxNd4gNhtx1Gf6anW7HC5LJYya71BJgt",
  "key20": "UKyLzExDfyFNg3g2MXQCUaReJWmcibUYq1iEYHLwKyg8rYWeuBh1vPzwVFPYnV14y9VuTwhdj9qBbVa6tBmZ8aR",
  "key21": "3nnXZcApCS8fZfUkcFXFZEByvM6QpbfEx2j3tiAJ1NvegRzEZpPhWnf1YXvmHNDiYeKf7FykWZ4SySnCwP1g61Jr",
  "key22": "5rdF18M4QmEca8YropQbj6SWnAC59KAc2EMNmX7o3LsT51yNYHDhsGYHZxR8MvsTsyj7q7SMWA3j7jwte3L2AfZq",
  "key23": "5UZNBbFR7gqNEsuaaHi2fgZUvMWx9PAcABB7qnHDFcVDDcWSnN1t15nAqXx1TTN8TF53vnigedFRSjMBS2N5KRML",
  "key24": "5FDR55Jq6GF2hCMAKL5GvGJbgRERGPwt8t65gxmGPwDosdwVy2L1Q9PiXm348xdneDvMEGa6dSoGsMzk35sxGUGy",
  "key25": "3PgZBiSToG8extnCg3HhB68fsuA3NisJL4sMySyGxxEYeAwdwy6zQNRHhxuyUxMKhEbvLVWZwviCFEkvSUFvDYbB",
  "key26": "2fNsmMcMKJDYBokHZGNhDYFwjzLJMAnPAkaWboWC1qLtA1tuy7ngVgpRanD4EQazAZiJRqWdDe4XmeZn6jetAD56",
  "key27": "3k699jYn4AihNjLy3MbHiLAaRBJv67pZAHw2NNnq1EtKBPUsARMcJ2ZFYAoFUJQ88QnVSeLp4JaDoCGrsZRsCAmm",
  "key28": "33eL8uxwTjMC1HTcw6vdzTrp1urETzA4NRRzQxzLhE8pnCE3jaPBknKDL7yniKtJTH6k9A4QLojKfVzeNP4kN8Ds"
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
