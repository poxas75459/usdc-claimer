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
    "4Trk8AAC3ojqVQsm1A7uv8ZNZ7aX7gD3MHnyRj7QUXGyrZPqWs4ymJTXVTck7nZ3iUZYF1K7Df9MLhH5PY6Qvk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jSygQV4xSuF63qjuEUsq8DcgGkpdhXaeqzcqdKCTnxdDGQqFyMVWjG1utpXAtxuv16a9iUwALH8fA7VuwUdoFEm",
  "key1": "4ziy1iebuy7ey97VqRGBU6prUBdtKj8vxdW9w6HMoWVfeZmTfBcqmSidmJu6fkUn83Dut4bPcoakYMg9qQjSR1cc",
  "key2": "4xULM956JASKjsGjrqSFHedpSshy58QuHJqUjcegGs4i5PGTvM6RurJMXEwp9pdc2C9G5Zbr9RnpySQva9QE8oca",
  "key3": "tXvuwBFUD1thwPMjrYV3j99quo4SUPiuAibsndWwQpomPR4AKDXHBQAg7SS7g6YzYpPXFDUcvtYC7aQ7okGJ7r7",
  "key4": "3fDK4j1KxxehK7wpEK39Ug1XQvoXrmBseRd6EzuawL9Emvp9Fq7jLj97hF5g4zqcSkpuUgiz2Px7T19e6Pn4T4fp",
  "key5": "2iD5xuVQgh1icBDCUkmGHeSTS3WTQJB3ePUNVLheZph9qjkycSbTVuec86Jgb6ygpqLWrbaCEU6FYRv4x996ipwf",
  "key6": "5JfHYjfji6RrZ7dCPyxAGbwC7YnagTE28ukZMs7fS1WQNaptRRPbGg8tS1raGJrn5XVqu3pfkMWAoritKss97XcD",
  "key7": "578J3RvgsoWu93FZdmRFQGkJkarXkTjG3AHBShMsmNX71m87XgQQoF8rgRsjhEHK8qh551haNpN4S8uWb4HAXbN8",
  "key8": "79sdXZGuE2hWA8UyWFty5j4Y3xYmi32zkRysmmD4ADsiPRqzMyJVdTVDmhJfyBuqX6vkQCo8eh7BtP6JMvgzBGW",
  "key9": "3eVonu2Ri28uZfTnfZYD4SQo7XpyNJ6MAtS3UAEt2fDWNosuGbCK4rtoBhphD3YPWrrXEzQMmApYudJqdC97a1Hz",
  "key10": "4MmJJunMTRj9Ndtr5t2hPJ5jA8aR5pD1gWsKSd9D7LHiCJswV15tAuyhGrMEDKYXGgCN9ZQAJsWTVpXyCNRZpqAz",
  "key11": "3oxDFskuBaWzZwxcmyv6Z9orwZufvyrjgx3D3nymvBkGEaxwyrqFJsuRoC5LywphSmexbDeXfGhEtiaTWXNXYjcg",
  "key12": "2bR5p81mASk5cww6219kJUdoAzxcvDpXUeTUgVrD3hZagXdmH76wn75k4PCbQFBUYpZaEYLGzvbKGecDLz1c92cX",
  "key13": "AQutpir3gB7G5kC6qQVzH1mng6J2FotBkBAMn1fzqx6L2KpbwedP5MXXU4murC1ZgKBozAiwAYzTb76Z6voJcya",
  "key14": "5NxB6eFLucor2wbaPur7BRmcxMbqCEqk7vmALMFBzebq7fThkVz7KK49RKrEh5gVav7pSovzJ3fbXYBti7f7dq8i",
  "key15": "4k54oQLtdU3L4GBKHMGHsGWmmCUAPnVf2oGuWMaT5ghvzkJAv1QMjzuiBuQV6ng4ECN4GMEhsBNT1rwpZPh4js6s",
  "key16": "226mwNqTE1AVyjMGse7K12CFR4feugVYC9xcDQ1sW3x6XWgctt4ogQ6cd9666kaeCEviBzr3PjQimVbaLsxjLk7y",
  "key17": "5fBP8DqKmpKR5adzP1DMAtxYFYe53AHs3MeW46kqr66bWYxPNFvsQkq1o7RGk5cppLFHTK7BhCEJSv69WCYDbeDi",
  "key18": "3up1b7NdaAGXyxC89PWP9ERkitkvqGxgCg1aCcnr6yvnkdkNzQUtUYe3zoyCzSZqCWmP7xh3id2rhKTAXUfgUZG7",
  "key19": "rZoV1cbvYTTKeZML3kGToejW3BRBw2xnf8ofe677MmLciR3CSdfsr7UCjNRsphM6hPxjaquuVbrCqeVgh2GYM6V",
  "key20": "51xKD166NPvisdbnH8JdLSBGBBNykupy8CdENJiXpD86Y2vkPpntEsKj6EopGvwsB8G5eorE7TFvMVpFX5ybJeof",
  "key21": "33SzzwCrEpqsPD5kgYRLey36iaqf2XZV9Gxhvbevqshs4xbX8Ve6ph76kAHW8N5dShU3ZkzFSDgaAyqQ2zJVS4v6",
  "key22": "3cVLxmoNLQL94eKDsXBseTGQcBesH991pczY4ApBp1KWQsHmT7mB49u8Eh6Kmbh2RkgdJ2uo6ymFG7zzgrTdhK1m",
  "key23": "3pfW1YqZhTjayCkqeXhvZP39BDmMimJSU1o7bYcXFQYRD5EkF7ydJreF9o3zpPPWqiZcMTqS49oX1ZjJGemHxdUX",
  "key24": "4dkAvGiYEnoxo3n6MUNMKwkrM3cvm8ycre7JXGtZ32Kk39JgfFpmoQG67z8kzM1veSmAAPJii919tFxQb6MRuhAf",
  "key25": "2SiMdewrsnkeXXPdTE4ifSrapCyxakT7vHEKV5BCYuLNQgmD4ocP9NNMgNWkrBJYqXhyYtui6F2w4Be4SQ4jsY7C",
  "key26": "54149JmoY5aFczsjSwdinV5J4Vro9j3VfyF2gfGifC24eJsmufpJsSHxmf81tYUwsNGUQ6ecseMoRr3pYwEG7JxL",
  "key27": "42qqmbCTMmcC3Ju246x4XNSMzA52j9hfYMYPSgnfYjrFkdP1BBFvqc1n66jn64YFyZo2Do5fnRHKY5fkqmqbqJSB",
  "key28": "2bQVL8EAKXikTq2LGCPuJLAsoxjTcQUjoAAaJWHFhrFFJ7dj9n8KFNDDhnLATf2AnLwr3dzQYZodktHchVpmsfZk",
  "key29": "47VxtyovxiEKvyShCeeThTfmPivPEsbNVTGMPitGBFfD91AD44mCEKYKMKkyyJoVXBLXVaTdvDsYMAxUdS2Z57Py",
  "key30": "2o79oa2dUrdXzz3DBf6HKYHgbm18W7svF41GCsGXAktfzyNoTvr61ViL3GVsyM6AkFrSTvQMi4npCWkVb2TQHKF",
  "key31": "4LZBwv9ri91sZojckNqy9mgGsiDA8ZjEkopT8rkLrBxqxxK7PV9yeJC5rpMKBUyRfpvQ9NkJzkNScgJoJLsVfjjE"
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
