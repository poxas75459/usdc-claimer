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
    "5KHaLpt11kzYCw7xocLkSrJwdLyCAGdruu46gHM3tGQBfFGJnQLGUF7CYk9gFDQEPMk1MKCESZbJK9tEJgDsvnBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41dPsnT7sdR7rrs6NLsmp4fkVWM5gcW3qdDmVLPeBemFpxgUcCL9k6NYZUWXmFLb17TrPVoohpmqsu314J4iprpz",
  "key1": "3kcrKnm4rdmRP8gcT1vESUipZeNox6SCVHtAmor7oubyNtc9F7uKUEgbKy7nBdQYm8gCfo73D3WvdPNeFpWWEeaH",
  "key2": "5zr4KKtfenpZ1swcGaDW7D9HpZD6ywN6dHahox4C3wPosgw9GS8FDnedyrEL4VMEL5KYk9fCTi18wUKAJNoF5cuN",
  "key3": "3Zz9EL3RRoMuvKvXGS8yUbUbFCDYpTXv3fSqoDeeLPnLTEy6dABT4BBQcUEEsxsq6ozkJCLoGCgrUnBrrZ9D5M65",
  "key4": "5SugGJWtKj99HBWjCkMjvbKmrrfuzKqtNMMs9nfgJV5apAf8pXHADEuphG2eMjaPd4dD8s8Jepv1QUhWHmFFFQNs",
  "key5": "4FZg1ZG7GcN2FpWH4VR97kPBPzTT5QKNfrdvvXLbE3c3zFiTs8dNApp6C91vryTnm4xXV3PH3DFZHe68wHPCvtHe",
  "key6": "3YNgzqGPtx3msa4UFXbFvV3QV81KXVNVLFecpSfyCJ7GrQfa3oPSqkHMEu78D4R2xerLaiwVBtVF3jc8kmUojJUP",
  "key7": "bLkdBEaxfX3bDSFe7CkN96QMuPTQyEW5Sp28iz93GT3NS1JLsur6f98Jwg6gigzJfAjdCTLsiUH2poxXCTv2D8q",
  "key8": "5M1uUtkF3W3aHPLHd7BbJxf2t2eEqyMuZV57uVWpyw6For81tgSC3far4rdfkpifs8aRRsfhwxnp66Lku9kSZVHg",
  "key9": "3RuAtXXzGa1uJpfvg5pC2mJEjg24WnhUcepayVNxWLJN4rwd4bF9NGTRSvm3R8kaqPr4y9ajHLF7BLcHfZSExSQt",
  "key10": "4tXdK1WuxszopYoBk37JATDg3BBt8XvAhM9rtJJ7uu3ETWzvoGas9odgYhD9JJVpcvvyKjk9bXyDnUY6mtYRtrf6",
  "key11": "2NYie2JiCUCZCG2qJWtTgSF4ecyYJtG5so576RiDnhtR5wq1oTjPbYut9JorxUbdBC3gmrPweSxyDy21gUK5rbQR",
  "key12": "mGW5PR4aDrZEvNjqipnSMdmxmcLt9b4Cm75c6PTYDa81BazUaJSjAJuqrMQPb7Xbvs6mexQfU8cMwjUhNEgLWzu",
  "key13": "2rau9az2t7LdsVjsFb9epfpzuS8pBEY19DKKGLyj7dGXGuUJGKVAgwjeGvm9PZ6v3qEGpw6xdXhpQEZPpmQe1js1",
  "key14": "3iggNbpCLFkYLCzjYgxGLmjxGE5rTkDXPu2N5wJYeU4mvc8bvRRFnLg6qPwSREWtyihuQxK8x9UNFCvWpYtKCFZS",
  "key15": "5c1HmYdmLQawzRnedP2Vs6VENvzT8ta9oyvfRTtvbN1pMMABGWRN8KGSggG6brkNvv2cyHL3gtUWb3uDaJxsFgsS",
  "key16": "2w2QakNu56Z7FgKwXkAPh3aex9qqhNSwRBgGYGippbnHkTmoyTwWKFt2XZCaZLk5FJiLQebK1LHZgGFaX39mfV6X",
  "key17": "3G93k2zdW2kTVJiypRksbx9NFD2MD221euSCUaCXkvjMGYcDEpZz5Cows2ktkSUkCyYesParAkquWQFKRChjiyie",
  "key18": "4TCHtHYQ7gvLtkL9J1xePHyZqsmgNZqFEr83JLhRSX4MkUbxB2nYAtP5kaYXiwHhF45gFU113FsRdxMYUsNVaREE",
  "key19": "3YgjPjRKupN4btYAKUMZnKPo2DegYz5hSQAZx3vLdike1VYnyi1XftZvYHDG4XYjQhTutWe1vKFSwQRZ96yGFbh2",
  "key20": "4pkQYtaV7yfn42SvndEDmfj4imBxCGcQcmkKvnWn3bNoYr2W7GVnsJW95qie9Da3L9osmj93VauaY3Xk6fGfopM",
  "key21": "QjpbF269m7hYR4n2J5uAxa25XptaVYH5nKTYwDDMyih7KL1zp4iuSsCUUapeWnihQteUHybjFndTGrT7cMofRnL",
  "key22": "5LRfNNsnMDP2phF3EHnggrC3wPNLTJL6hmoBi4uCNzb11CJ8a8kJb5fVDvEhE9hFKg5wjbZ2hVxAXEHGwiCBbzwN",
  "key23": "2jwWj1WXozjrHLjHCpq6Efo87N7KzECLc1fxPXwesDhsBk3h8aBuCx9apHnoptw7UDKSZY1fwn8A23mkg5s5H38q",
  "key24": "G2B8y1r2D3GWZwwwMaUnrPuLYVUvpaUy1n4HqbPpPaBRQpXKHCf223v3ZHcFLPvcW8oAbBFLY7z39RDbua8myg3",
  "key25": "2yXpnyGKjEcLt3GDRewyqJ17PsNZ95YJ1sDww5T7sZhmKgZjTyikVUqoW7xUtEHV7sYGxMgaNnk7UQgAXrcM3N2J",
  "key26": "2ZH5FUs54PimkEquHfLdoBL29YEpco3rNpRA396TTy9oZ5F3vko18x4i9dwNxCQW7w8wfpaU2JebVJNkyvX3e3aS",
  "key27": "21rTW16a9T4syiDjdXNUbWJQ1eAzQNUKSGLouG4CxXHHUc8cbHcoPxLBmXY8zVxQ6Ws4vj5YLWNqTAS7h8NnarLs",
  "key28": "3oWLkfD8JyVqdxCgTA3LCrJVM5qsvtxMVHFxVpM1nbLxXWFZqfsBqGStksNbo8z6Mh9JjQHDspf1LWkdApQmGytt"
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
