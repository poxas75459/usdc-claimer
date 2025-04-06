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
    "4M8YFXqkeMLrj3bVxYmwvMHVbv9PLZnUYfAE7SjGEovJeQNTQy46e19vAEH1xJKrLxAhF1TwuAdMPi63KKbWzjs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZTrz7hxc19MAWASenmhP3roFS884NQyzpxz1CrzKBtX3L5kSh9WnTyC3nnULETJSUTzhgbp1NhZUfWE7RmuJXW",
  "key1": "FJELwQszgufTgZswNwvxnLRmkKdy8euTbQhKQxfGKwazYbTzwRo1Bsut8buJZjpmq58D6vu98cgy8yVvhGoCdkn",
  "key2": "38bpxSRKT9STK76HwTTVZNeuSvGdH6kRpPPbVdZ74o8uzcDXkLaQrTpj3nvtckyVZy6SoQqzjcbBStfgzJWaZqJY",
  "key3": "xUFTfs8mzxekyY6ZBk5Z84PSR5aGtSPBFXExWX43s9XkbXaWpDvjY2gRNBcajKQx6jHnp16qfvwS7zaGUkvJU8j",
  "key4": "2RXi3vtkATVn3hY2iWyqfZtt2pmvGoch91K1CY6rQZe74FpBpACnvnnT8cZHJG3oM85jj8qG4PUkBM5ReaLD8z3V",
  "key5": "3CawCQS3MFQkTwxdjQW5uwwQw1pnEGZLfpNvWbvKWQPCeKvVRMQD1wykXmkVTPwJWbEn5N3HjQQQrHivTCFqN3Z1",
  "key6": "f8f4V25JqVQmhScoteyFLerCxijc5tMNirPBc5gUftWanM1ESupgQ1Y2ieL1256m53NPn1CZgnsw9smMJm8hYPT",
  "key7": "3Y2SxbQnTXHavpvTNfr7nCmpRwQ5LsdeWLTZcbUcj7q1f1EcbSMCYtqivaHnqkBw6BcLZuMyvT1sZf6hwJai47DX",
  "key8": "4FUuMPnXEzcXWo4VjTNq1sa7FdXG6hz9BByAogt85uXAfwe6DjZsTUUwMktWUsdHA36TR3hzFydqyczba7o3MP6E",
  "key9": "3HkLoR58ekKt6Yg76hufpL79eFJXMRqkqqCPZg6GJUYAk9UqbdGM2GYxXawXZq5ccDtpQ4rfWKXeEUm2uEG9MBTF",
  "key10": "msEqC9H9bAQ9oBEWRKFhJ5oAGYGHzKs5ctYFngnj18Y1R6pdwn4n3YYvThdSVoCNVepjSNpU5zkZrcHiGpET11F",
  "key11": "3QtmFC7bvfMesW8Ps7PyAwaLjwZFikyDqJi4qmMfEcjVhe3DXLNwUqEqK8XDrDEzr2YNgRF6zkZkujejCi7qbrAr",
  "key12": "3dmvSLu7zX2LFbg9DsCSQk9yydaBd28VWu259g3m13jb9jUVNkW3VntxwfAFqUBWQPPsz7MYGrjA1DXPsy4Yv6ZX",
  "key13": "2e1UaMmKdnJbcmKNNJS548PkUhZuK6kUA84htEKqUxwYjk3Mzjk73uUNSNKXBMd9KrEYuL5h3AKGKrt5g2nt4CAt",
  "key14": "4tZrH4KRntiAKExjwPmBtZgK6GqxcrqaE6JQ9G5s88Z8zew35Fh7Wk8bQghJw8FC2QxP3xz3T9f71kGGZGnkAPVQ",
  "key15": "5nQprKvBmgnSio4V1nDiQrmFcGitF46BNuvHsBjKpwq92DkSAdtjwkZSbehqR6GxgVDcU1hwHHQP3PBnnVaBMqWv",
  "key16": "3s2oNvcZZqmXD9FyYJ3312n1QkRM3mMLj4svZQKMi4VtsCNaq8u6NUWQ4WoTisYtAfo25NxKkPrMPJcwM1dV44Ab",
  "key17": "66EJJCkp7fUa12fmSNFoDaX7piCuWzMDQaGTfszuRG3qhhKK9yK5QU1Ye1bCozaqCu4F5x6jrVZTtMKUbw9KjgUF",
  "key18": "eJFszq6kUn4yGQ6DzCVi524zt5hFhwyDfFdkrpmdeCL8wFfE29cBmBc4GS6MvoVoqDKw6GrGu5oGJmin4yZVEKF",
  "key19": "dmFoB8KYBQgS3DdJfp4qPjby5ZSLjY4oAcJNAZL8NurfDTF1xemPnUaDUB2YuLxTiMcXH9hdosT8wZY8pxzBTmP",
  "key20": "5YphwDzTkFZua4mzpcbLbDb9aLMLSPnenPX7uH3Jx8wEMxhMoMNbJST2yPDtkC2oi5tG6Ryz9ocXMa766Up3crUp",
  "key21": "4Cevzfj63EjDt8Z2b7n4tfAVNpBnE4X8DCkfBNDoJsZbkeVk6yPnV92mLAi16TgpqoL4HuVaU1Q4kJsNpbr1H6VD",
  "key22": "yHi2ZH8W4jmK3Y9fiud2K1nyoDDezQy5VxMu4YGGGjEyz46rAVuoLXLsNTaEwiVwH8ZAa2xJnhandPqJfW9ywfG",
  "key23": "2VWv6DoMvT7daqEUe7S9igd3YfCsCyPfkg56c6gDcYLPNf673PxyetXVTMUnxXjm8pXQJDkVRKcMU9RiNvrW6gWU",
  "key24": "39VdQBWyL3MamBWsCfE11Zm7DYSAK6WPALmQuZdY6cZbaijdnp9Y896EsMeZDESwY7zh9KSGKVG9xL8JqMZDa78u",
  "key25": "4Um4xAAsyVMLxkLbvb5JR4ZnnFGAbyt8vAxiPD1quTNCKYjDdSUzQaHLXyC88hQWHjfy51AzgFEQvFjeZCtmLkw3",
  "key26": "axfy9JaYXE9HELvZyTwt83FLH5aHPrWhtKRiuiejnrsbPGrXTEAVQFjDnWCsGB2ixiASeGT7Y53qU9bmKQK7LXf",
  "key27": "5QRZWNcqGpuXPEsYfqpFT5JsBi2RWJZE4wEx6GTEQBQUFynZyLX88b97CVauQuyNi9VGqnDyriP1tZLqYQGmkzQg",
  "key28": "35v3Qj2zixKigLwfHGcaggKuMQ4Z8WV6FFdJWZTwivp9E4mY8wrWt9h1YDeyW4UwwagPdm9BCZS6KCMTJQJR4sQw"
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
