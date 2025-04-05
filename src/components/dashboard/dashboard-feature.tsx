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
    "94XM7gBRXmRw5xGjYpxLF61ENtG6Hh4fRvGWPtKwddhcsaE8fnjTXAAYH42ahobk6aQDz83mRAiMCi9zASCeqSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MyUYpMJVp52znWn8YZSTZ6zMyxYN5cfN7rqwDVyraAsWSvEDECu3HoK2Pzb7GipgS8hqhX9SkAYScfFo8N3FTzq",
  "key1": "55BConTaxwJRvd1tZfUuLUzSRpQx3aEnrS3GcUgSNNmpWUznhQAmZN1zPHY6xgAcNRyYJoCQVjoMgRC7pyGbwEe6",
  "key2": "2yRvdkwpMLErtuJFahGxAeaVSnPiGpQLYjmyWJ1bYHb49v7qr7ASBSxB4tiJxWdmVDiU2AkhY9aUteVhSRXH8WKJ",
  "key3": "2w12rfDAZsBxwAYiEDDLSRm8dTKuyS5eG3bYMGSJ9Km88fJXDQNAkp7KJdb1zsgp5i4gp5XoazuXdjXqdCt49zhK",
  "key4": "LysfQuYCG8Hfam8TMwJcGSEhRdb7QuL6CTM74kujQvkJjNn4ESGEe5ftsQErw2MtpTxUD7kQrmagNpTNYaituy1",
  "key5": "Y6T7UMSouTzYo8sqS1Rrjxa44tcKYVLbupEbnfs8zGrNz11g8XYeumYZZonp8XbdyKGwXA2UUXxsjssrTqosQsP",
  "key6": "5RJYxdtKvbxr9C2Ja9ZAjMxthPqACs4Sm7WYGXMcMMNmuUErWcvg7uAbJtGNY77kkgYPC9XnkhE2SkKsbsTUCpKu",
  "key7": "3S4cdC35MXb9dYc2XwKHCXXaJ857jyPPY53wLtHqLfbAKqvCPgVbozUHoagtD4ok8GY6wp2174A9Gdiqw41MFakD",
  "key8": "5a4eRC9mRCP3rRSFquuQFDCmFr7ng3yoQCtoaqFHNLpsQq3a2sxbpLyMfAeRJYJUaPFHbZjSXxNuRsakpr76H3h2",
  "key9": "34D9sP9ABUbaNtJKjCDB6xjWqqKUs9fbmgqfLvrue3sr3NcK3nMtipk1Ag33gTbK1rEP1XG2hmRvRewDhwZjfpMK",
  "key10": "32atZmeeivbk64EtAdxAurWRdfePozucG99kcJxQZdp5iqgKJ9SFTwsgri3GadAzHRu7xbyKVYNnib5Lgaq7AUMr",
  "key11": "5JVgNsgPLJQ5uDESoWkf8t5CT4XDbfYY43giosXy58KVjz9Wgs5eRnC3ERFQgwqhdwijFi7JwrueeTgAitnUpXhR",
  "key12": "37AdAfbc2rgwTG6YRcm6GTZyXXhNk16Fyc8cnRGe7GxbGDkHTqBc4ZCegvtJTHRZxhg31yJJ83p6PU2WaaVaxMhj",
  "key13": "51TfhTryAjpyYNBFcRkQtyxPHNpf3oQuDUa7YxhWiRLqQdo1Ly5mWpUZSo9TdqdnJyNCUVxzNMALVwB1wS7PP345",
  "key14": "4nR7WuppqLFg5mQ68kutFEmWFTkfZKmJ4yz8Y291YZERmGRp3DvSNXyWAwtDxVA1mR37QDQn7uLxkfjtHBmZesGC",
  "key15": "4V98QnL2vpHRKBomE9yRoSLv2DbGHXLY1iiT7qcFohfFeUk9xbpBpyzyixRqa99bTCNjAzTYCHVycwhXMAmztMwq",
  "key16": "2PCPqh3sPdbsATdnEnwdt6V1G5yJm857f2hS3rkZozKRmEorWQV4oa9XVoRHWe1Q3NqUkdbp1ajdFaSbH9actuD",
  "key17": "5ndzJspytgpV7aKfn4cG2EzekHvjirr6qGmNzJe7hb2NM8ZmtuV4tG1LGQGQVwCM8CJ1c5QnWLAJxYZ91qxPbpq8",
  "key18": "3b5iabcMPaEzNPhyHzqHsxz6nMQVF5CHYyzDhn9koFCAYpJn9z3Eg9Tt9aiJLEzZefezdVLBgXWuhYnBLd69sCbM",
  "key19": "3i1Hufnjx2uYXPPYgjHQjZAcPPvzUb6rBJcvWUDhFuMaZ1XYHy7aep5MiwnbD9LZeVExq3NzeBtGQ1FXapvTPVzJ",
  "key20": "bChyU69Vs7oWDk5AJ3Xxgb3TdJknq4iuuEFNQ4FugBBuWLJXsCrrkqG2FJm7SjZyJ7aig6gTBCr2x78J8fxNrCg",
  "key21": "hPnkcSPRJFz6CCcbPuH1kz82omn9LJxJhLRH2VGF14Tqsuhae5nqWWGEEvVfrCmpvd4qTsktT6XTiapNQpNKeEo",
  "key22": "39poTfGUUtaFk3dTbuWW3S16fhbGC4z3cXryqNWBAZtg8Yrx5sfUBdmaahAiDJvBuZKwWWUTMK4VJ5T1mtn5LpVh",
  "key23": "3hxGEWUFGn15z9wWHVAe4eRQizv1e3kNhg8SbkyKBSH59f7pXEYgw5yDjQqjSVH66f9qPCD7vAuxf8tT37TtL2PX",
  "key24": "4FUaXdtMfHSWDNKDPo51C2Lhwpsj2bhvQtrX94qw1BULuMbM1oC7wsey3KmNUqYsjaMkfnU3cUgKV3VXrEZQaKF4",
  "key25": "2cKxuUDvfe6NxazgicPMfFdr2VMHmjgGqNWVrRZTbETqqbWpkaZBp5Nz2zebQVE3b7JYWbJZCB7togFcCzEEzGeg",
  "key26": "sPTwM4GcgBybe6C37dkhBrceVtaaYNZmTGce6qdrxBf2DzKjge4AbCAfWMiRncy7gSFUc5ZTtXkGxco49FrJysD",
  "key27": "DmmtrgorSfysdcRxXy4C7iWxNunEX4vRwHf2vwfXsoatnUYJKmprRoauEi87RxaaVyZdpie8G1ipt5YFKLqUzea",
  "key28": "4s3dM4UCYafcEc2vjDunJqUcghwpyJCVGA3UH9oEeSWLF2nbcg3Py2VN8eR4RpeGmCVuieoHFnJRpzZ5ZDet4MN6",
  "key29": "3ddi5BEKdEwEd6JsUqhj46jQiDr7GPX2nrsAhkVzKiyfQJEz5dU5hxbBTgQvohCh8c11ME6vPraGmvw3YqsfYPK1",
  "key30": "5itArTFrTC93WADvVNPgprvkxJjLRrUCCZvJkHWjUKkKyNqqRnn5GDG8H9D7GYaAmurFp347KMyyuc8gr28SYFpX",
  "key31": "xK4QsM8R5AZGmkpuQy1vCbvu7T4F1s1TpztctxG4JMewkkKSjc5hrRrR9PXN1Gq4ixjA9guMhPHcf8AcevaK7Rj",
  "key32": "4v6WjX4y4NkM1kQhDWno6XzFM8JCUGUzk8z3dd4qkYwzSNbQ4y6hmuq2aEr9GR4nByU8ASQcwTXFGB1hrbL2ouAS",
  "key33": "4hXjG9h3qxwMFotomku3ZwYW3PbFsxbhaQ1YY7ifj1PGNmVQ6VRSKZgDhwBFHKL3ZFkGWTp9gXBVLTQZrh2xKKpS",
  "key34": "3DDhcNxwMvt7UR9Pcpfzh1mi8iDgRntQG7NQJmVGvPx6WjmGhHbmjdDxgCXzcG6UdGW9TkVJe2MkTASi4tJWkXu4",
  "key35": "5r35VDrPavvhqH2LaVDkzo52LHxdXqA5bzjwTbjt7oDnRQZDty5EpK4fSrmtFdvTEMCTojM29QLQMWm8dNqHJk5f",
  "key36": "2U4jjUWeCj5W16WYvUmxrJVxg9bomUUQ3q1R5SqaQ1C9DUKdUuEtnFnAgQZiDH3PPm1HjeHMy7JdyKZ9eK5yJbcz",
  "key37": "2kodmWqi16AZ1chTwbCbTCapttSZqsZmbRPUg6Zq1DXb9rRCT52ughx3A3rgR3LQSadr9AJYXZWEiQ9Ghg4hUDV",
  "key38": "4CjcGk3pqg1xAWpbkdTaUq67WKonQTM8h8u3w6ogqqY3NJwWM1kYE94GSYtJvTcJbGFoHiEAaRzNV3iuLKkfkuvK",
  "key39": "4kaUhgpxjCWiHpS77GR4BHmRXXiVygZKdQiT3Z2o693fTDMEFpRZkZMPtTuiTSmHHXg6A37n6ujp8yfYuVt2RLkx",
  "key40": "3kaQTDAn7dztDfDcMMTQzZjeFnjW3pkaqkqUWxvVZAhuijk4kAa89aKE2WwcgoZKDN95mK9PsSFycGLgBPm7EJ6",
  "key41": "3UBh3W9KWzMXwF783PveYjBkcJpV1BSMCZXhWkFZKfRorWgprjjrcs3a3euspgJT5dsUMfKutaaDQ6vT8zJzL142",
  "key42": "6DpqHiiquV6XZTJcK6uqQMX77CXoDpPR4izybBNfT747LLxg9WS8Vc7cyHD9F83sfHMcCSavthLSgpYxseeajTE",
  "key43": "3oVe6HTcH2x9ok55RZLphv7o4Bsk4rZ38pffY3vp4ghxkYHHjjvmR2tTamtNcg8ewKeyf5mZURtzT3NwuqzgJSN3",
  "key44": "BRXLQsSRVZydd8bxmR2esWD7EFtFoysAbimgKGsTF2mniWpRVn9Dcc5S5ckyPsiprzm9DDa5SmZaUDBzddK1Tbq",
  "key45": "4bouQfnMs2KnxPdjw2Ze6SBgrCgvbtgCgNma58sqUde6N5a9gyuFqzXdLvpAJX5buHvYTS6ANzmZCryB8bpkna8x",
  "key46": "4mYuSeV1Dv2CpaWt57gNTintuM5QR1y1Mmh3WUYdMr2xkCfqpjrUYadrFqDAKJWHdfiuTNnpbQc6YDHAmN9QbzqR"
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
