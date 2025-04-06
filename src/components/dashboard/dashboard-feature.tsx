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
    "4MSZNvS9MgectK3G47bahiXCKX55B8Npjb7rjdoryfta2QSqkL8Wq7o3hLSHHCK1gGpuiZfnMMGyTkRs79yzUrog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7frA4uAqmTmJYKrSUT2qcJbHnfEhG3SCYerStidCqdKsvwqSRix6jzg7bZbqk2ZUER6u9u8PTF5MjZWtnwFRta8",
  "key1": "2S6XDfTMPCsdbnsrfz7vMvRpTQhqubDCQoaQPS14AihfXMAMFwHsARrmUsS1esQ9emYXY3NKooib6zL7ivfsjKgc",
  "key2": "27wbXmJhfamc2q5FvRpjfyDZ6kXajKMXFJiFbHbAiRMR5w9pdGDWqdhLpwgRhbqo97QuzjtGMNEd53Ni5AwiGLTz",
  "key3": "2yEgq5b98AUVpby92ApR41bSWu5jJJTvriSdofqQUnEPMnZNBAEezYKTWxj8YnVyxYkbPzwp6nmKRicDZzXdUhzs",
  "key4": "4sCC6BWSdm7bNhZBmC5FnseJdSLvmnBeYXnKotTCdbQxFwQGsyh3K9JRu5GqXfrLCRYQSpjToN5oWyeJvk7ULrY9",
  "key5": "3JGxyKbVxe55nr91zu4LoqWrBB4dLHrfvCq3oyLJxLnHtpsrwHNvQvgyWGcUyKpCoZZHmY6q12WP2Shw2adfmzu1",
  "key6": "4yV8KNRNGrAWpFcV41QGHhmRAefC6KSou1Ljpchi2yvFxoukLZwHft8mJonW6UobsoSNKV2Nv7SKCA8KkUESYkeE",
  "key7": "Xw3rQZ7HT4rVP6e6Tzs4CpAKhznfJSrC3q8PRvYFAq18WyX15q9fdbuChjEiRxw2LDEHmJEE4y5HeezuWptudWF",
  "key8": "qcd8PQpVx1Wv8rUR5Ep88Nsmeyt3vMKL2Nw8eqgYASgk7htsVPVLvvFLywfgbxzzh1GsJprYQAyjc8whH9J67Zj",
  "key9": "2irUKiWdYk9rfdmRTfqRMNzMsQsZUN2gnGhS33usaNAVEHkf1idSBKAimyXTmYVJL5ULEPco6bVkPfW3BL8MaySm",
  "key10": "2Ljs5ZfmK7zv3mYkvECe9bbayCKw16CJifvDr4CNBQuBH2xi7TXCGziYobQWyKvhBHxvxzmWcpq4u381wbX5WFHJ",
  "key11": "3rYTTDfRUo9TGcuP8KYhjgZmJaqF95ULNu1TQohfX1s423zUR1F4L6MEFin3V53P5XXUWWxmMyLv5gjaUjcP3Uro",
  "key12": "pqbbbD3SewnQXyw39yudrCYk59k7Jwx7kGMakRYkwTv5Jzj1AGnhv8ocg4kskidXnYJ3NJysGXM3XXw8wU5GeLU",
  "key13": "33XtPRAgW6c9G7LF32DXyuzPq9qX3XdfA8Jr7VQnBAfWVNbGEBTpAoFYoAY6n5AFjdLsiVQFJ7S4Wyqp1oXYCUKr",
  "key14": "5V5uv3RZebggt9EMsEg3oSy5bvr86azGynaxq3RmbhvTjKiBipAvXzBm8G3zBG8LG1sjfH9JGijYgT5QRb7DrofP",
  "key15": "4kELTTbVuAkitd4UFZmAmv5o4BQtDJotahkB8D4eeLabqy9dggKXikom378oZuPVWSHLxtJt7LQotRKLWUx2FpxU",
  "key16": "R74rF2v1ceT8D7grodvSjkedBd1Eo3vUmVmdEASJiSq6wMBKxUDqyif8vY5VChLwPC5EfMespq4bpHiRszp53Hw",
  "key17": "bPk2ncn3FzAWzi9CqKyrHqMkcSrdho9nEbHSjW8MJUM493dLbYMknBFXt1cpyi8BHWwD8b8Rfmv8sRmgJK52sSq",
  "key18": "3y129fmYcyDiD4SKYtpwEDDeTBVdxtZa9zNTE9xC7s7fwCnfFG9jMNPgk1t6QghYHHTcjpwLeEaLEZgAi7dyh3go",
  "key19": "5Mo5s3r94o7ogYrBXZ23NWMEAEmeKbJxmb3REbjBTfvymuyuioFAWziNKiKuxNKPL9cLtpP1ymhnCx3Qdq4287oY",
  "key20": "3XtuH69cdPBah226Yx8G7FcwMspadMtf6wa2b1gfnUXs5K6jAQm5cqHdPLXsAYwvvge96SYpARGrFirr16AVdhXZ",
  "key21": "5DvMQA3hLd2VaLKEtW9DFeY9WP27Gyn4g5eqVadjignrRTR8VmRvT2e3JP3jUhRX5KM2HqTsPBU5X6jFsTKHk1Rh",
  "key22": "56SZiYZZZSP6cwDzq4GRyGFANVaD2dwU6jtn7qMRUPmNZAZ4iJdEb342A5T83ZhZvMiX7BykkW1bVanv3J623veW",
  "key23": "2n3qkAh2an6NvhN5zQnBw98XSGkPuBG8KSu4B6ju8Nc9DEpyL2VDYogyYv6kHatjNrcdhqp3FBWx4VyFXb6zF89A",
  "key24": "54KNJQx7cKaqhdjhyQZmumcTtc9rhGTUQahdYdHM1N38NWgbgjyRVhvn8pDhuRmC9WJ7EZwBUV5b3cAyoUYqbFj5",
  "key25": "61vmDQxf4GLmHrhLotVF84sRoA4x5qqUYuX94nAEvix5W8sXD69LsjU4rZK9rUsVLc2W53NCotAtidAt3QZQifqC",
  "key26": "3rt9mddg97HEhGqsCmTdr7sTWLDZphGpp2XkWyRyX6qMcmU1qT3g6qs4pQs1Ww21oWLQVAsmnDohxTcsAzHS7Csp",
  "key27": "4499mdgsZ6tdNeJwSvWQikWGsjtHUawNn6DiDasG6v9k8pC3fyRAutmWg8ka4bMhLQutZp1yEAFnVoeZryhR5KX8",
  "key28": "3CcpbkcBS89qeNigKao7h1W9R2hiHGTyrsBgw5jFM9UFZgjp6gdh3d4UuEt9yNnFw5fkReHHkntbRmCQwsKwe4SY",
  "key29": "5dgRVBZwtDd1yYrMuoQTWwFCRBMyvseBbUeNdxikWLqLKeCHVjzZCgfnK7Vc3CrpXJw3hW8jp7x2mnoLN9LAG3QH",
  "key30": "5vNfQ3jcYYSR5v4J4ibvtDGW6qDGCYpS7e1bCeZgyGrUPkFETA1AJSdpkPoXHBzx3AmnAwfgfXcwBcwhuFfrfcoL",
  "key31": "W25xJ7m8i2SGxdJ6Ey3o5GY4LtxfuTbJavK77GZq9iH71mt2Eu5wrZJ1sfY96zRGfCZZcvp2tDUCTKpJKvXN9Qn"
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
