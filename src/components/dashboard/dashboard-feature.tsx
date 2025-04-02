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
    "K57tYRi2CFSH92Nstc73ommKTbpnsvnynMXshdW5JzMCqeypzB4VoVmmWPs2iEpzuTHS4yFCBy7eLDv1Jqdo4uP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LXXLtKUHmvZ38M1W56SNzX2Twv6w6ZRmzyp7a3ao8jHBHiiby9KnCUxq51zN7c1gGLhReSSUiyYkQXRpfustJKU",
  "key1": "3YVtFf3vMR9sMDrim6xDZFxecwxhKLzdfBu11gYnQ98JkgrUcJDoZ2vfTqHThoUoqg5CfZnhQoGnVaodtj1UPLbD",
  "key2": "5CaDA1C2Ntsmw5qnsdsPNGGxwrzqs1Rr1pEqQHPFPKYjbvup1NAyK9RJ7zsv6trieaW55caStSpdAGaxXxsBpbFg",
  "key3": "jjxdATJv4g4Cr5rG7RVMErGvEB1aimeAbjqVaWGeQzFc2BF3tQd4UMf1hKuwQmUd3C3G1GR9BDy5UaEDzWRvG9B",
  "key4": "5fujXYd6W1tfWKjwJXeEHxS6KpnbrkRK97AUwLdm87rvyXGYB4NePY34DFWE7wQZcDfvbsH1Y5ufyK8VCKbLNKaq",
  "key5": "4mmCqht6YzLuEBWXeaEHCGeRs66vswovWXHdpF6iAPwJkwv7khW3rCXamh4eerSL9dJEXjWKVsoxAbZYJnxUxLwn",
  "key6": "65qW7NbYDQLVv4JGRM51ohpkiiykVUm9P3JSqj9GMbNaKonqfFAtEkhKmh5mmzbTR1ppYRPKZ4fVr3T5C9L5FhVE",
  "key7": "3FeUc9q1kMh9bvxMHQCmp5g9dhhLq62Nc9HRXQCxVKSt18eUoRK3jnosBreWeRNcwseqFUh1ixDxi1rGXLL5Tmhv",
  "key8": "62oR5W4x7F4Nt8HdzdogQyyktfBY2H9fpfbofCqVfuddxYmfSiB3ydsuPxwuKJr6KYomXZSgXja7uQjNVhG2BsTC",
  "key9": "4xDKs7F5mJTDneZCB7J77cBxnQpooJk8UWYEvsLuUZWU6tsXqqcwS8FJRBUhG7GUWsYwb29yZ3U5dRrwx6hsBy4z",
  "key10": "4Xi7LFDEG4VxEgdtcCvFMY3ji2ESJTYorCxhbrXVko2J5St2G8bvzUBv9DoE8VpX7PAnFMDKamfaBnCHr7nQmqhn",
  "key11": "CZ82sLxov1am6TqmGH8NxuUsA7vbimGymBt8oDit4GCiW3WGrLoiVN2jt29jBmHM47kMPEX8TZVSZf63yuEgYHX",
  "key12": "2wtH5N868nofSSbRezPmsJCVj9rqQUXLWfFyRPn8iaX4b6L8xQQr8dPpYLQmhZmLQtRvQYkbWFTcJ3sbUv9knnz9",
  "key13": "4D9zsroPuDkpmQyQ3tFapqzg62JiZpzPcGoxuram1Aw7A4diVo2fSyDMVRhShZd5ws9UUFNmZKtNKKrNZtpMGrqe",
  "key14": "3cRds2WxLnuw9sQkFBv63aa6z914HyGqN2975kvmTeNku4AbUz87SatiuVAqXBRFu7xJUkZ4NrquELMYjfca9imR",
  "key15": "w4ppZrgMZzLk92hoRUBbFAEY2Y2ThTZQJfCo7C5pQqgNbxdG1wCMLsB6sUJ7zpoYVGJ3s4q6zGHEYvkWhYPU9WZ",
  "key16": "3JYASjA4aAK8pYHnuDys1JGubGMDNyrcREa9R1u6MrxZH4zgREZFvJEd3th2cHX36qF9nweAfGGVwM3uUTiWPa15",
  "key17": "3U3emq2Hf59xZEysK4iqd4eFccBntuQ2cJgdayrm7bX8Ayb2TrrBv3v2Hyp15Mqk6TJ1dFGf3D9PnDCnhw97bhpQ",
  "key18": "3VwdUm1k5gABUCxGahU3zaY3k2PSpJw8WVwqoyJfaQ5RsJkuD4u2cEkx2PggED2N8QwwfAVMxD1dDhNpVp4fuJJm",
  "key19": "AT7sHGf9iz3mNBcFhwhhM511yHvLk9jLgVG1SvgnQnNYEvkDtEA7SBaz6TXhEQ65U9VPN3kFtG2AGg4Mdz2mm4Z",
  "key20": "2wJQf1r6RvEWP9aHKwFgQiMhmFSgH4aLTzqX8cutFJfjdLHG5JXpH4dM7tNnCaptL6xHtqxe79BUHDf6UgR5ASHg",
  "key21": "5XBBdwMC4diu5KZmTy6x7ZKvQWi79joViiH7EAE2DEoBDgJrZhx7rGNQFf65qohXGgRQjaoBWWHe4DewCxBVhRAm",
  "key22": "4yzamMtHnBnGDYf83UNBG2PoFxuouD8ajC8xPX4xf7CXe8953Vicer6sCoHyZbfxduqipa1feizTXU7ZNTabmXSi",
  "key23": "3HGEBXc9UoZLxekN6JY5b5b5vmsmHY3te4HHHCHNyw1ysnX2yzDRv79N2Q7YzFW1tj66dGNvLxpayzSiiuh2UoYv",
  "key24": "vg4ooyy2Ekn8cUyA9oqn3SutiUMu2MQefWLbgaQXP5Vhojxf1AqoKaJ523bmMCTqFzUEtxh6YTratjdD1hNH9HC",
  "key25": "5tv1dBbDta7iRQe8AEyxpQymLVJrhWLgMhPtGHxhJ5aGEA51vTtKEB8txQt3NGppJ3JhMaQFVbzB43YLxKjb34d1",
  "key26": "3km39KQT1gr4YiDPfnWudreSUtxDvij3PD5irmjzeSuUHBihvfaQKm7yP3PajSUXG672r9fZrxS46xiKa9yM3GUu",
  "key27": "3RoyxLrtVSurESqyvXaQ3eDC6ZuytHyR8qwC8uptVDVFuFyEvJJsGhrkijERDN4dbkHpw5oKyi1wxX5d7ar2armD",
  "key28": "2t5zmKtKwuLwu64a3xrXmHgaTX9ag6aP9p4YCdPNFKGa5fjSNAG93MBoCF72w8rq9w68tUtAdrYL1NrJDRx6KH2i",
  "key29": "5ccM94JvF5uDsMWLRUfcBU4gGpbX4ZzgCidAkQvxvsABy5faJaKzFecyHDCUNQquXe3Hn7oVpfmQHMmrEU1Ergsz",
  "key30": "2RYZnywxtRPCnPntLXMApXNh84GB8W8nfErSmnUeaxVFkxM58naTxcCDaNogMyv42BXaAAfibyty877QVc6virGz",
  "key31": "2nYYLrgCYrzCqeXdo6NMr4J6UVGHLiHKRnA8Qv57ewGmdXX4i6vSJiz3pBtpNC1yh56VcuzdGdEmXQU8cjgVrzDA",
  "key32": "4Fxc5nEegx2kkeHNCy3JwXqa1y3eSHCDg1mCCNKH2ZEPEa44QgA6r47VcjYh9fXqEBAn87bsWtWLu5zTEkpPFPe5",
  "key33": "2uCewkj4FPc8wxjFnfTbZ9pNGrURtFMxAzxAJ6ZoSWoiyE97CHSPukQqyoTV19ohCsoxZR5i7V8fJhMXkbVQffWy"
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
