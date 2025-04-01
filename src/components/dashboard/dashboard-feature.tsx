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
    "2pLuzSSDVyAZizDNz2fh79SXyPNnP7omrL9bQYNWXab1nu4GTiU8uQ58EfdBWhJdmH1kVVGEJJWpwgFpGH65dtp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbJ7BcvyeQ917peZkAVY7RZYfzTakiAaJJUHyjBr8uYokVyQ8RDM15gTwUzRJDnrfBrWMDDvXn3mUgGcvG8sSLi",
  "key1": "4yGPopKLMpzAGLmdNpisUMmpNC99j7xqQfJCZhSBJ2NKbDcnrdXdRXSiYWtaDwszb8K84qg2LHHN8ptLF4TeRJeC",
  "key2": "54t9uDDPT2s7hX5d4ae3Uf5pZJoMCSoAmKirmovsnWHXDkEGEX2ktLGmgAH9wLSXcJ4ahY1F1VDC7CuFGPfdjSCk",
  "key3": "4LKBLFHLq9UKfLndaA1YBZpvGTBvhkswBnZkAvQiXzSD8M9499AWEvbajfr7C4wsuVerXAQQ4ngRZx5Ki9RHXwed",
  "key4": "f8gxMcL6heksLr7RhKkTQqcGp5T4uBmwdNFFm8HS1QdJcMk3qTP6JTLuvKW4fyqT8hJpBgSbxXV1C2uWHatfCZg",
  "key5": "5rNXm6Zf58i2rQQUSq9vfkWFYWpXAqaXkbCScygYTvQqvE36Bj3xYtjrtYoxWst9UmRBiAvkPzGjRuNhgHM8wRgx",
  "key6": "2Pny4ewomDySBkR5kAbFqgBv9rmswpY2gjAAqKqBC5jytaun6PqVNx2bcdkyXV9XErixHmmKjeiyT2gKPC8qiHFL",
  "key7": "3LgTW8BbLQPj7k9hdYh2AUDBJMR3e4V632h5cyCc1vu74LmpjU8QWsVXWDFvkUPfZQBhcCqeMYcwueGCg64D5mzB",
  "key8": "22TSZxTk4NEkBDn4wB1ZogdAMw4n4H9wC6kmC8BaJj3prKfCwLj6gv3bNzbxF69rqMchQ2dCdbs7zH4eTcCTjp5w",
  "key9": "58ufJUQRBFXT74GVc21fWPoMuAjmvJ2rCoDLw6QkZ6Ca762662Z7YLobx1RAcVogu5AM1nFmsaf5gzpWGra5YgtL",
  "key10": "9Gzp2EhdZs1pCCKXprLsTci3m4mqxoGydFiVBe6EZRoPAi2WzjAj4Yo4tSHHFNdp9nF7gwhBKGqZqbUykungQtj",
  "key11": "jQtFumi4jc5S51P8V6KxtwYphP8GVU32nBrmCrRn2CNFhmYcTWuVUQW9MGFkobdkn8b8AsdDWU3PKLzhusAm7Ve",
  "key12": "LptT9BxA8UemnSi1hetDDL22SvrmUWn16y7DPpCbkPrbdXw17v72MY9BEToBumHySsYT6JScapohoYns665HyrN",
  "key13": "2HFue27Q84wTC2s8LFtRFFAujrku3YeMnK2Xxqda7fUSrpmEZXF4mnJS49fhCoAcoTnE5ELiknndgbdTLzo7ir8C",
  "key14": "2LvU8p4Dk3YbpZsZX3rRTahwwY2g8B32caNfiPFvVYUssJzLaqXw32nNLNvVvpk21SRup8LpwKQTCDES8yuKZCYx",
  "key15": "3Qa72FMGZMyWUJXzw3n58PoG5QJaUQ6q8eRuh5shBTUD9g3Vt2v6goKgERtU6k8KjMy6c5LexgJuYNpi1KwLeYAb",
  "key16": "FyadPnxTYATubesaxXfYJMoLcpKURBAVZEQD87gT8G84DFgW4gvA8i9oWFp2q2myo6ERXNiZy2dWGULsegVAUqG",
  "key17": "3XynymtiJk8JQVtTZRT1GrCjbCwhtyqTmPehnZZr8Pp1zqFSajNLWXocyKQxJbKFoRPbSsZ6EP9c5FJ2TuKMuxPn",
  "key18": "4uvUsdAGbD1LGdCoQxRv9ozrRMzXWc7daP6rKztMjeB6HZtVz33bQpXuYkAoZkgELuyKu3gRcicNFrQhGXyRh3p6",
  "key19": "2XfKyCLeQdPDgDmGcDmpWYTwZJ7Wa7wyJoEARbX1N4aNkBiJonFASSb82wFPpUW7TTdsXL5Kypo9nxTzE34MATtb",
  "key20": "3smm9GFhLoJRyJXv15f6rxWyLzquzyW9Gu3NcVZsiwiFshuzCFMa9zxTXbfZEsvHVxNYDkZrN3rL2v1RBf8GHUtt",
  "key21": "5VRqqx6zZQetWo5KWEW9NnwFUhcnkojDVG9HjMuGjbsxJVNLqPc768K7rWruY9BRNonb6DBCprDAzntSGJoWwSKN",
  "key22": "5qpxe5SvHya19K4HdBXbZDCqkLQKnVunSgcG9hLUHCUJqR2yvXDp6VWC4DWCJcRrCo6RNqjUYg7r46Djb6Wr91J6",
  "key23": "226CoEP8DzN2PgFHy6R8Br38xvqUPGpHn4MUcxV8rqSWgfRcWGkqW6ymapg4FsNGmnDH4cESiaPhKSjXig8sycAT",
  "key24": "2uWQdE7ymdXH8QCDWjt66nwj35CnsjXkPN25tV6sud3bVQMo1QZzRHuVXW1asfYRBBxL4R4BH9UNr8DyDCeCwiZu",
  "key25": "56GqXgkpNuCsCJ4ggjSYv2keboSWMzfV3EM5HFCYVM29EjzZLtL71kanD9aZwRsZKZxkZEoFfjLdLCwYaBQidNiP",
  "key26": "3VKLUyVRUEtC5qMo7AobfjtUmNj7EUeGtG3CSg95afUihUApN9GK1xuG8M3ShGH5zNhuJTBvMu68E9tXsMcs97Ly",
  "key27": "3cM3RtQFLrB1cpuo6LBYmwXx2ewxRZeyqJnCADqhpqo69psBkCFtNxVNVaH2zQxJ5nLhJk9aE3Ud36SQkdhako7V",
  "key28": "41N8VkGNiBt8Mq1VC6j5Qgd5hVADnXtxQ5oxztSVP3WqGyKmsEeh6RLQgvychjNtQP2RwJnRrQcMwAyszbCVfBov",
  "key29": "2Ta6Kaci9dbUX77fuAa5fPZQWoeZmjZZEywGnecShENSHq9oaAD2XrRXgUG1ShSfRjkhmnHE58HGhGbcuy4zMrLt",
  "key30": "2XZGsMs8oaVaySPvE3eZpKjwkZfQy49kSdZkjgEFFQZ9is6Rf7gwy4Nv8ggviT7ezrJ5QLeEHzUzYTv4zdUd2cRk",
  "key31": "T4N26CsmwCfC8nioZJ1xyNrAdV4ySSKe6noXKYQMPMQyDMx113HvpB15dgnr1cF6CQ9JCKJEArrdCEPSvvmX4vF",
  "key32": "4xjWw3FjFPDnpAvec5WKBn2Sr8qp5N3hHqNec1AA5Arx2FMHBJGJ4REWcf46UCrb7xYUEmRv7nNQmLkt7wYjf26m",
  "key33": "4V9gnCSeDQjoHotjBHQjD8k94vkeZqEMgc4TdJbjdhrq9RU4YF4xLGob3repKu4CZ1bFNwq385RGceUnRUA21Hvf",
  "key34": "5RghFKc4RAStReuGTHMsJfkZCHAYgiiz9dsjLvozGEy1voMgJ64BGEUYY9HD8ihhCC4fyQtKBK92CawzJy8g6nBh",
  "key35": "2jj7XjELTVwC1am2bbAykcxQd59TPpMTABvgwto91UU9UpQW23QCEKVMxrFKEm4SZTNuXLFV24ZQALwRK2esuCGz"
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
