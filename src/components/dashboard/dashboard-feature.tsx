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
    "5m6hqQx9nZD5UpcDMcMVwWrJGQGkjS7qF1qKuc7NDzgKaZZx4iFqAB9P5gApfBHkzQaMsroetEY7HzP5sicfwxPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67pg22gTN85ETfcMwLoQjS6QkQMXgxij2PvjzHrbZt9MqT2Ftn8Gi7kTM7vAyyeGxdchb8ZAccn2CS5FprhAcAJD",
  "key1": "5d1fBXc5ttyuhJ4mVvgeYsxryctZYfdwpZs7v7Mx1urX75moRgBkpP4pcG9N3vBSTX5sxK9fzXQHYwpWzr6rmCNX",
  "key2": "4SgZQTFq58tA9Ur6k4eiQbzDGpVPEX11GRkzASLsmZHk2Eo7Zdf4GQpm1u4cJzCCQD1243WVkUhkGbXLZFDzG4hU",
  "key3": "2GmLvwzYGEhu8NEpUAKWfFy2m5Lc6hCLHRAx8P8iBkX7XywfttFbxZXHRJYvzh35qNvsdJgkWxJhZXc2zQH6imBW",
  "key4": "6EdwWX8ZHEVaSXj6WiuVMbph17hfsm4jrq7ajF13Lq56UTVrWSckBZtePSrEn272L5WdZkPCxuaR5ho9wbyPVQH",
  "key5": "nASk9c7MV4bCZ5CHugUBK86Fe8LzDnCHLCwj3JWQnyut2L45Q58VUsfnuF8FNRf7ai66GjhZhbhyE7FmdZ4X9u5",
  "key6": "3nfgmWii3U6SEtGFjfNLXBRaRcxioW9TAbEhH4LHJupoEn9snVnnmQNA9n2LoVqDQ1o9Pdb6JNT79wegEEAhcHxF",
  "key7": "4LjFeoNuq8zNS2Ey1jFHJpUDhL969jPYK84vpqWQv3meYSPAD6Bogxag4sJF7XYTUUJrkMHJH98yPGpkWZ21yYvM",
  "key8": "37Kqa42kgARUevV7casaooM42YWcyuzNejRxsBr2rvH2su7ht7UaCeFNTqq5WyDi61VXceMs1mWffDqorrK15bbM",
  "key9": "3vJcU6DQUjcxzyPHou4NvG7indtvbr9hGn6nPenH2JdE2x632vkQTY6w39Q7PDvjvzcCrXpWJaCSKpffbCNapeKk",
  "key10": "4KaYuiP64mecpxN1Meiq77jZFsZqfa3pD5CDkP9TBgmFWdLnXGCYddp4o2gARNf8y7ewwRyCAMDUvotzdT1vPiZE",
  "key11": "4EsR5GQQDc1cFDLrijaXTb5RQ7QLmNapRxEHzKkPBfJTTrhvauusHT15w17kT1Xe3BNgDNuhpqXsn4qJjWbrhyHL",
  "key12": "27b3gBf5TxmWFKnR3FFWXAJyR2pZHExPqs2XbeMEYJAWGoDyX3KjxLXiMWSHRoEWfkyVPEiDVkKnywtHLRY2JbBH",
  "key13": "2wTXsiQsPX7deFDfEhXd2ksFNVyZ9CSm4ch42Ymiuq9P83ZNy4GVxtRhJsi3QJaeDKjeXKJBo9gT58bDPA5CUVyr",
  "key14": "2mmXqwRsRo6cDz6GUv7stn694nLyHxQ7zLKMuHS9Z2pYuddHvKuixgm13UBFDS5wmVp63LY6hLhRRz9QLXzg1pFp",
  "key15": "3LGwwq66v7reXTSLbMs7EhU5rZ6xY6rRbWs4K8A75wxH1SPea94KPDwkVk4R5ZVgn4hJsX7Q9MTvpWtX31KT5pjm",
  "key16": "591hCdz5TLhBxGKQnbzL3YNJQfLe5FuSRwDQf4PLt6oTbWPxzSLd8UQpCcpYmqBByXrSV4ngRJz7rMtG1hYrqjRQ",
  "key17": "4TFQib7DG4HTK3UTLYATKTo33hR7SicFi6DVAucnfSAprjQgXsPiH9DSHZLCv31d5hDDQn8fvhAFxZwkioEz9THg",
  "key18": "BHKQyQurdVme5o5wq7beJUd1McUzyLccd9Fhkx1R4644GfAgmDn99ZoRmzf1qbRfo2ub4jUZVXTjx3i6nt7jeNT",
  "key19": "35HSJZiRpZZ1ryeyzrA6EcYtFkNcCcnZK4eN7cc6dv6b3ugfd1ppJq2bD6YLeYHP4dNcsGaPfos9TN6hAwdgKJ2G",
  "key20": "4SfFjppTResQ55uiZM6fm1FCf1YUXYAmfjRsCK9RWCKod6a17xDvoePrAfDmhUXF5PqKR1Dvw2PWuMreZevftbVq",
  "key21": "25eUMoEAV6jdwHtFaDdG4MreARq5chw9KbaXA8we6cxNApBkkn1UrH9SpQaywgFWXfXq8BcCEgK4hortg7QcUr7q",
  "key22": "2HQPRcmjKCRyj5gJBFF6N1Z3E6ccgB6NaPyo2cZ9hFvCoNu7UcEXE2s4pCLbw2BU4tABoJjrV54SfPx1C2p2s9ZE",
  "key23": "3LqPowGqirJdfGR2aQWzGBgTZhqEcCCv3ZTpYafT4zrFPL6czpwhD8GBz1LJoZWW9pWcvWaQzCJfaYMNZ5gCVCZw",
  "key24": "2MmnTLdmtrmLWuRPFJB8a5WbY1p9fgeagzbXSca4uPqx5GdYc88KFDwagSy3W6JNG1T4KoqxTUzsSjMT9Lxo8Hcr",
  "key25": "3eXsTsogXbDMrYeYg4wS6axGBz89GDSovsASU32m4AKox241yvXjNjthGFZh4gd6DeJcdwRxGCVmSeCv2AsCvf23",
  "key26": "3Bh1DuzJBUZR2TLHkDbfpKGRKpz117QFaifUTwN8XMFxdnZviipwrcoYcatWsWm6FXMPNMMw8EcUV4snfLZLNrgi",
  "key27": "48hqejRAEE8f4G7zRypwmk8jBnFGX97h37xnqxqdC271AGJ8sN1WXmmKEpLTVXWavBCEVvqbv7UNamUJYUhc4sE5",
  "key28": "4Y5d72dfCkGubeYdhvS2drcV7x7bp65nJtwxFMePHPM6GujsiZLoYsem3jUueeAiLe3WkZFTYVe5US53xURp2yi6",
  "key29": "48LVRsoM2E8UQmzamuGro2jNncYHpbMh678so7py8zVJxmsNX1udThwPgVSAKm7RY1B8oWUJoZJSRpmdLmUsbPU4",
  "key30": "NUXEwrWUWRRbBSSL2tZne4RWmskWJtF8QqGGH9qVY6iBbu2TjVVxkV3wjAShV3Qw5NRtkTDQgPoSn4RNbGA6FgQ",
  "key31": "2GU1A3f5UmEcZy7ebC6c7gGRB777NtrDWpVum3geAe2bExHKit71ejiT4eoXw5rHbojUnKGqa7LDnxEgMywQBqxT",
  "key32": "5XvRymYPkpek9aTQ25cTGbm9ZazvLRByn4HwasjrxHTKktJaiYveALgQ3bpHbWeLZcqXkNqV2VH36aftsucYMGry",
  "key33": "2zgp7hAWQJ5zoes918RyndTb4ebySx3GuSFo8YWdSWiKE9R7P4ebeNaRf8RybsYAd1gMfmuXonrctwg5zX3mjVqW",
  "key34": "TmSqzrL213FqMgi4g6sc53QfGNzokfKBjGFCTiEBvh9ZZoGXpbZ2SxsWFoGNRntGiMEkmsfL7xmEzz9uxYw9q4z",
  "key35": "3eH21f4ggBrBY1nEjWkcKMPoXyLLE6h3jBS9j4FrnrAPFdaC9usqv5SBNs4mkXs2vJVnJyjR9PuuPJ4zEKJHt6gM",
  "key36": "3RoDCqnMAjitDnmMQ9QAxw1dtU6CRErVpXMisVRQhAdmJkA4MPepRwanzH1eKdwX4xdfHFiiGABcxqEXTRm3dGLL"
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
