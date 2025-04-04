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
    "3o199AQZxbfeTL7VSgvpR8uxfAyNS3t2gTjz2PEBZnZTfusvjQNtPAcLJQhSgiykuWCYM7J5C7KTiZStiob41Xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iD2uoFh7Fh2hW4NgQPKqFgzfkeqvu6mNmbaTQYJpGpydceuaQ4v6z68juUsp1YRgxyU8YhFZzAgz6VuHfuzaSbX",
  "key1": "4C6wvG3Sp9qZKJUVyQie5jdudyV6tFct7KcianurcbEVzA77diogk2e6fAvKTLfvSQjdvp2sLKAmeRgrB8tuQV14",
  "key2": "61CAv7ytURBXUxZtv4LJsHYBQdzqZLTVZzTPS96CL9fMMWVtLzc7jMruoLWCUWGy9V8tYch9oNrxxNXwbEzgNXR",
  "key3": "3fnUz2pACyYrKfcXXDXZQMHnUYuBAAQDoXwww1vsndMi2VXrq7sBj5txFEv4UieH5aE841NZYVVJXMCPz97G4j5y",
  "key4": "2MXULGacSBkZjtxSFj8LXBX8ajspf87gS9XDjYsn2W4hD5NS4isgC23CNsrYQCBCvuZR8yCgtefb3LyzDWSSBa5t",
  "key5": "61X47z4hA2Updx9d6b6T6eJxqVcek3GkKLkbA2fJe9Hh4y1eaSwuac8WXiUG8ES3PSAHm4pFNLX6TMDtNjsbxsam",
  "key6": "2q21kx8nQmd6pY6d1owjnpQMXbXoXikxgDyirWUDtUjq4racCuHmReukHLuMusLSDhKww8rt4xuELcrq9c4QqWK3",
  "key7": "5AdH6HUVjZzDNQpH1bQszHKS37Vu642sm5GtVoGS6dioHM8hp4o2fa5WbfBRbsxnUx9jNZCUS55TUT5ZVH9rAFSh",
  "key8": "63Jbtm6zohjJpnkX5CRFkaGBjoXJHeoVfkUGFu5Yp5AG5xzVuj19cr8UULiN2pnzetX4MxuH6w6GCBvUgw7SptFY",
  "key9": "U9Ri97wgkf68EyLchARKW9CqxcKkVf3rVSEVzN8U7mddLee4V1cu9rqwXSoUiZeKDTeJWLK3Umhp7jnGuHRNmZQ",
  "key10": "5b9TYCP7xJaKTj8HNtEmKdrpkCjgMoSPKi5nWnp1VMZTMwwsWVQ9Bi1cw9J2karu8tENRVkxq5W4QumB9YPB5WQs",
  "key11": "yrY6jU14s6Udatx7P7Yp6z93PbGHgUL1oB4Hjtif3haNA5s737PTd7kygqoR1EkuCrm2NscFahbQkUMbNaDRmro",
  "key12": "pfEkFb77FQctCvWJuPET21rrrA874DmPntDeTd1QenBChyGSYrsWMAbvXGCZcyz19g7GGR6gYvguvyravk5rk4z",
  "key13": "3LvmW8pVTXLzdjaHG4kRcuekgAsZbSYbjST6crenvfCfQVaz4irVzuvDF8D26dpjUo6qEvrVgLS3zL9VxGNSAbKZ",
  "key14": "eBiAZvePhSVidXjPzgGJDpam4tsPx75vRjivLvHm8szmVXH1NiKFbzfqJdo68RsvREDWovPwM4cfbrd4BDEJpZU",
  "key15": "4cJpai8KfVyP9Aeq7cnGiFCJj65DsPsSoJiMbU6QXWbgom8JoY7pzXNgkte4FzZidYpLm4s1B6TdXkkcDhPtcqAz",
  "key16": "2EQBzxQxQfKqCw45Cc9JPd4MuGMuWbsbPqRJacvuAHL11mHNiPwW3pEc13qPipV56gGdtuh5dec3s6rCxMCy561F",
  "key17": "hrsykVZZ4HgcZXyybKWhuwv4XgGRK867FEMDyheG6k4G9djt72x27zsGW6Zjh8nKonnZFtLNANXp6Avq6qvcLdQ",
  "key18": "2jHTAz18ecQGcHQYXLqESbVWpMScg1ArWbsG7AX8fhQV4j5bzoAob4Hrm3ZuGmbr18Ku3MTgfWx4tPaq5Qzh6wQR",
  "key19": "35jCN6Db7Gobc6pXRZY4j3aijuERwDibjoW1wRt8VqULMnWuzotFyfxFnMot8YXWSEU8VRcxdF1qnnv8UVH2qqw5",
  "key20": "4uFc91ywJuhw6hnt3FXcvqvrLuvSjYjYuDaWnTcYo1DsEPAddj7YUJ7RZbKkougwSiL218LSq9YgmuPu6dTCBnuT",
  "key21": "5oXQQRMm72aFoQbAG9sGCUvnNXKuLjEbVrcgLqxSDTjvLhnBDQot1Vft4V2eCZPZAAAEyHNaRS7zbRamPPJFa63B",
  "key22": "2BZizCPqki3cC2gCcqbUih3uHe3aWvhRntP5H3fuQGfm9UKxWy88PpmdubKFKrio68DcQhg8obgp2vL2P6yBvH5o",
  "key23": "4uvG5qFd5DMWc5cnxMYdkjPE4fZKpxLoSpSgLeevr9Q1DcN7ipdyACq8VNf6tG67f7U7Ss8ay9nXJw5o1VnKQRGT",
  "key24": "5D4pv7NLMgDBetmZ1isu5DCr6ywDe2pTMoeBJ4J9qxrFZoUfjiKAzvaACe9EiRTpeaz62TU8QJamSLmHctE9m4n1",
  "key25": "jSLL414KMmXqwhV6xc9MpVC9mssmDbH6Hg8ptUCvuwjmYDmNEhfAynjaKAsyBuRjTFb72WiNK8b1rBGE7oUKUqF",
  "key26": "3jkiqkaL5Pc1ikgezYEbbhkfoyPXEsQyECUs2ur9DzqDVE2yE2robjHkXa9mTJB3b4Hqzkuuc28v2jaCqtTEvUyM",
  "key27": "5pt6qo2maGgTHJFUZVusnY8x3YUFAuwYrRMTqmrNG9BQwWG8jh8yjQB5AmAR2Y5K5Y9UnG3Zka5s7u6iSenDNW4a",
  "key28": "3XbDxd7NH6qpJLybjZNaVR1L6UiZsMW1hCwjjX3urnFj5ZZ6gFFJtrHAzD3oJewRA2sSBA24Aa1DbeAoVR6xa5jc",
  "key29": "5uVJCZxReYGPZPC4gYzQ25CZbxQeRuntnZ8ova3p5S1aK5NSouqEkuehqt6igPDefi8QSffCTYQdcV2hdPjiW7qS",
  "key30": "26WvGCpxJirAnXB8ofm56s6nmn9kc6vZH4QsUKVkMDBUUWCtVxbVAh9egG38kVhL3idYvDq93Pr4pt8HXqK56CRs",
  "key31": "2MwuRce3vGrPiGC3nY3G8wYHdfqubot2DsLSMvutwXJ2sqMC9KuhVtFEE9zoiAFHb44WSEcwS7wmZ5Zejv1VkESa",
  "key32": "2w5QfprS3nrz9qBAPvZ28PHNAqvZykQFJRxMww5GGfG1cwz3ADvjV97sBCrxvuhk7X3u8iV5qwQLMDT1LsVHBo1S"
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
