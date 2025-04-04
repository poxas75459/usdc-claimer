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
    "CSYHb3cMt8HjVFYVAFjgtpUweRSkTjHKh613Vgc8MEt1Mdkmzux6KENkHVFz1M67jU2F8juvS2xZ9zBaNHHxMU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421RFEspVHG8YTPC19JsQs52S3KizLDZqy2nXeCqCbc9j8pTrUxwEWuKfuUYmTXEBb4moBHUzkSpz34TmUdx1Stq",
  "key1": "3jqTmVCcDWLPzYmQHCcWme548qHPgX7DNYdg1EExUChNF2SqUHVtFUBE3iAfPbH3bb5LWWJPgi4v1MxzKnkvQ9PU",
  "key2": "rvozGhqMqrxHfwkXuKvn2Z9bSSxZbzJYtVzseDs1oZTfdHpQQn9aTEg7yQaYSwj8RzSeqRm1rURo4in9Dw5eWid",
  "key3": "269jrXFzV9BBoUoQfYHSdZMq9Gmb8dSSDxrqR8jG9dSS8RARAvWJwGPXYLEFmwNunk6zSXBnqFsjWwaJdG2Aw9qw",
  "key4": "27ziGUBFTW41rDApLy3DzMmjLQUwZJDFcpxKEuPe3PNquHNMP7Rd1KA7JnXYKnWvzuHjaAyGeEWk8VkaujJNbhSt",
  "key5": "nzUx2bFkKtzQbE6iZhBwsqSEAFdfPS9PSatjyaiKqFzkGHiK2FQLTdKJM8zLYF9usfzLZki8D2Gfe1rxn2CAfLH",
  "key6": "5GsXjdyQm7LJquHNY613PR9sv6VPvmmvsWsRikQGyLwp5P7JErYkZdonfREvzc7t7UeWhS7DGmJKFV49P9BD8hyk",
  "key7": "52zogrU3EhVfWbW46pwnAKQAjTYGZRC2h6ZbB81k9aXpRSGha4M4FWCp4Sw42SkuPq5KbAycDPuSEGxueVLjpuUE",
  "key8": "WcHZ1r4hMP2HNunffnnx1x7vniAqhx8HZ5bCdtr7mirhUgtz49CoPxUiPETHr93U36G358CsNNvQgiFxd1aeRGN",
  "key9": "3Zw8qUB32TDf6LM9uzMKuZa8arpYQFHGoqihgp2FenPvWSKc1egJHkUzXARR6v2SfS63qcmveeWhXojnfH1xBuYT",
  "key10": "51PK8PzMkXQkaYjCWdanrFVuwS6M4PeGZe3vnfWvsQmBxXFpU1RYMhVp7cQB5zgwNvzWJ8GfgU13uscXcfye6Qxr",
  "key11": "Hu8KAjSmDRcRxURmGFfdtHXfEkKgeGLswwkg1RCL1dqcpaboTbsBoGrEQfD5Ag24d1FhvmjvVsp9gR26H8mt1vS",
  "key12": "3zHVbFQEHuJwuFTZjtqHVjd5hYPQV7PoR8pMEyiycwpdsrqamru7xixJD4QDiriDTvPqovq2bN4EBZR7ctKLBpzB",
  "key13": "3vxsXrdtFBjrvyqvEq224rjqatdLEcrXxVTrNHB8coER6pMKku4Rq6X7mnakZdEa59Ty1CYEeHWVEJtVKoEyQUfN",
  "key14": "2xmxoKVbR69cAGhzVGFjcmhJcQrGPwo2rU9NM11emnrJ3nEz9SUoE53YbLyZGgykkZXMuBzLNUWzCkkyPYSZHQLc",
  "key15": "64NNsM6tcZcyGKbgYm2sTzRRGmxnUAzHtpwfv6CeKcTuTFzfS3WxeZNL61eB3qZob3c1LybYC48BMMPB4rQHMVLe",
  "key16": "e4EVKpm7edRbxC2WTdiKBAnrJ93NfxLigxfdrEqQpNhbiYrepox2c4EMpmKpLbMcB1LvhZdA6fJEYety9tRMXyj",
  "key17": "C6zQUGB9sCyiNU7zk3kXNThBYeL1QE9shRYWQushcKzhhRrTfiZDVqgZt8bHBQ9gSrySq7JT8J6BGaHhnPQZKLL",
  "key18": "jy4G2UgTXThUCPS9uGtD3e1w5Xw6wDigtuWn9a5sBTwuuPzdYkWDyLeF8HZxcdNYbuz665B5raK5uqp8oXGWbzN",
  "key19": "3vmKPevHVMSmWnTwezxMSjDSkFUmTCBFDVS6aZscEsYegiuGsTAXLHe2QQVomcqQzaKou9sF7P1ndHyTXcdQPbbJ",
  "key20": "3HXbQtYgsmv32rtx9LZAELa8mpv4CT8YgwnA5SFpnDYUcqKiRT92FojAVvBvZYx8XjLqp44sDugxdq4nAJv8Hsxo",
  "key21": "NVQP4UucGdu7MbgCj5HJMrtVNTC6qG8V8LuaYVb2V9W4dPEahRnP6Sr7mBeeMyDv8w4cTgaoPNsFoERN2MKpnd6",
  "key22": "2aAASapq9cMGwUmggEo23qFWKQNcTFnt2ZCdPs47pmUAf4V913AoUC9YUfCBHcwRwE9bvuwoWoErdXmDzkT7JYzX",
  "key23": "35QEqs4BFWJWfVhv4WfrARc6N86KjcpoVEQ1YcrsVn7FvXDDphEKBMbdp1m91BThAksXpDAQn4noFKT7hdfBCrVC",
  "key24": "5piBdiBVPrRbLJENAnNHTSkwRZVueS6XwtvLX2D7AYZaq2ZCyCgABRPSsRt47vXdEB5F7ZgLAQtBcjP6FkjvSSTi",
  "key25": "2f7YgHHMTjRrKHRjvFMFr5AqwzsnxckdkFspWrkpR6wrD5H7dpe5PWbbqckidrwj2TERdLjNFfR2fAkHyZNF32zE",
  "key26": "5XTTHiiUmqnsv5JWfKKR3b1QvPnjCQfDmXs3aUxm6RU5DbCGKj5bEjVx8bsFgNksZAhD7jn8Ay9NUzWgZRL9qWYw",
  "key27": "5e2Maw1zKpe2XFMrJZvoj1R3VgfdBshfnJjSnDZ87ZSm5D15sSW629V5BjT5TmoKAyQd9E6JcsjyVdDVe8nBJ5nc",
  "key28": "5CCsZPhaNJgRakDwoREDaYGs48wUCKheyAXiKJ8CS1djdgUA5J7Cs3ezjp3QTYFoKoeHDuMbJzgEq9xCuzUKTXvF",
  "key29": "4agGiQoezueaJaKNvu3rh6VquuzJNJR8Y2gUAwopbNyrnK8RCUKsLXpa8bmbp9TgSzR8FQ6Tf4ihNUGDXoyPjMXb",
  "key30": "4yz9uFHj2rSEMsSsynMHnvzyAzpwPb37c8PcShd6N7WhFaC3grikTVoAVwXwdCp9szKrn9C3SLygGDCoQ4qnfw5f",
  "key31": "3VrEpLuRuEwX7gRdAgxW8SFkMHNUkm7q1F7Azy5mpxG9Upq9xUCExAyYRAZZFdV6NQeHmwrViUvpBeyJ3yqhwG81",
  "key32": "4bg9DVv7fDBBoKgigwLwMn62BvrT5GyBWSo4Lek1LdYYg8qkM9rMou16TUcsCWsmzYo38rtfKAHTXq7yN7vYj7kT",
  "key33": "5kmJm3vTWnzHKxAWHNv1fGi3idKyAQmPVXaFys5LbDWZR1FNHfMVkXdBqSUjaNkQGxmvEwaZ1mRJjVmcAWiC7pr6",
  "key34": "4NR9Y7DDogdZBXm6geVJZWZzMVdDVfojNTdE9CiaBx9iPN4wUJsEJ8A3UDWzHT6ybNDsoc2ZbJNUWraMM2AbgYcP",
  "key35": "2ijuY84Bh98GgkDAtc3EX1TxAVKidRWmxM9Hs9aXYDDPyZVszSpS7fiqLZ9ybJ6MoYTUASqwN9fH837rSM1ca7M5",
  "key36": "5MG8DtxDixmB1iUByhcKffErNgJxPzGFk4DcE4sLksFjs5jcXxhJ5REesQN71pJ25qt3LvMhCvr7k14ntnn1edxi"
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
