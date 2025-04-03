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
    "2Wez5D7eDDscKSjnUrqyeCr1b5D9TkBWB4CMkpQ48kD2KjumSWLHs2i7c29t2m8qyv1N99XM4mwA74f4G7xappbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xttsKpmqw4fJWk8t4Qad7HQpExirPxiA1ear9We1gjS5bKzJzSesafiaXmwswsyqL2V9PVCgs17KiANyzoxPn4h",
  "key1": "5UZfrRgxudpQ7yKMeWzZ9WAtkzkDQhSWQac7MGXGKUFKBLiTbTAHBcg1StgDTro3FehPMf4m1bU7uSw9PNUPgWAb",
  "key2": "4L4qjQtTMByYJTsHDN2HXVihFYw3WUmrAL5MvJYeWSWSAocGme7LQsyAk1o7Xx8LRhc8ar2qU19tT1wYcSEeiAce",
  "key3": "52MaFQ4GWppAo8kdfjcPj8KVPuhXFfJHCtWDhqf7Wx5zJsuQkcww2rPPSi1RczTsTWRu9Nt8VX2ZDv4JSKxHdtcH",
  "key4": "5j7AkQmDCaprUZDa6asRYPV2mjRXVUuqDnYbn297rgjUJExKkShxVnJWVKv5AGft6oyFkeSx8JQ9H6xU1zR1j7rU",
  "key5": "3tUgyanx2tjAfT9PyFaZkU7Rk9vbSt4cCdVNApHwzPCi9Dyi1oG53ZNAeukYDrFNaptQP9y53FMJhFpfxwyLoKZD",
  "key6": "2pUqcFXuTKrFZ5D3kebZ8JW5GyjMPucbVC78avdStM3FvLFLtqTherqX8DMBPAzozQcudRvbe62w3eA12Y7nb55a",
  "key7": "4sh4viQsWvaYEfDBihxSewhPH3BaTRELantZYSJ8spzsvcjHEA9e3LL22KM4KnS5XhCQGtGX9tc6UQdFjzAt6oFc",
  "key8": "5fKtaVY8vjZMUsvwEbc16J7MrJCbf3Ybs15wiKend1WT6a5v21iWa2fhPifVzKCoUgG9CDb9hnhozKSsBRDq3RnH",
  "key9": "4wW16g3CveuBmXYBmLoAJAZcSoz5Rs7PgUAAbSBi8aSo6uz8kAfp1h11rwdFWUpKJruaqcW5HEweiPNvic1tnqKw",
  "key10": "2hVtB2vSfpSd1nsweiUXPQVz7zDjBxkVNoXouKsMgeJcW56TnXjXoLNVpup7maBR5xYumNArwaYsWAShx5qKVv5b",
  "key11": "5Fj52oTWRjN6ZhUm7npLZAJnznvXg4cMM33ELYmbeTzyyGNQqHtEZNBv1cCoVGjKnjHtY8j3GgJzQKNfGM3tDEtG",
  "key12": "2z48vxeGiTWJNYvPzZFUaEdNj3GUHeUfpwNU7c1Dd2j7mRhBJP6bsk1ZY6hBYvWM7stZQyqTC6qYcDXFE5ndJMoN",
  "key13": "2EcaxyF15b6RmLoA91TZTbqDGpYTGq9VPaNZbTM3KZBzJwkNMux7F7kiBV1EexsSZGkDWGKJVxjj9Hxt5zR6jjtx",
  "key14": "3k6bVa8SpH1rsB3cMjj7jh9jbdencVp14rxZFqLuJeDsCVdFRyMR6fQeCE9GnBz6JsNuP5Tt7K3iESUenw3nA7Jr",
  "key15": "2JhHiuxdiWhpymLrnrHW1ixDp8zk326joiR6A24XgbAtvN4ExMPds5gCcy6pTYKv74Yja5RLdsai4Jh86VJDz3qu",
  "key16": "4wW7VTND565RYTpywETBoEhgHeuMg3KWp3cccKoC4yaafsNPzqwiZ1FRZdbE5gST7KtRNeZMcCbk8dnBh4EGkzch",
  "key17": "3XVyVmM4hi94KpD6iGbpYJ7fN6cn8pMGGuxQ1rQ5owwQysJD8bqu7VMC6imdobawH5B6ms1qHqzRDZpZkYp4yKhA",
  "key18": "23U6My9Hcdde4bDg5BeqqemxcDipLCU9HKyDHZ21gbM3ytCL3a7MxqwERtT9wosT3DD5hZAgN5XP56KWCzJa8ejb",
  "key19": "37SJHWeLJmaC3T3oNAw4V49KRq4KtrsQ2q5e6BaLB2raA5ZyCA76xfPK9VvPqYezeVXrps6cyz2y41eJmmaFBmvv",
  "key20": "5r3kt98d73iJUYoRepc8a9RwG6FE19o1ddBQ1zJHdXQFMszEVibtMygxZo5yjRzzjvZQ3augorPy676GNHowFHSK",
  "key21": "2RM6GYW3R5cSKb4KrWtyHKUphMK2TRR7o7SgU7FHEjz9KwR57VDxUbGbgHz9udSQCbCh79fsYmkiUbQWdpTwBPYd",
  "key22": "5KjrXtaTsZTWVG471yPiXjGc2wvdxs31aPTWoS9e1dNKXeuqzvxzuNgT4ztEDrh4RzKa67ZcURivoxknQP2164kK",
  "key23": "4gtH3wkRtgFy1ezHCGvorTT7b73FgyBf4Ejw2o5L7WAB6pcWShCVx2r12Bfmv5jQVFdLXG2TLd6pmFn7gUG3Vq5h",
  "key24": "tBUYZtG7Y65BcHsG7Adw2zJptyg8oQVQhmdvyGU9yF73mnaRTLrBbh3ZdkxYn5FaveAW8qfMBprMTS1tFv2762Z",
  "key25": "B34GigRyFJ5uPrQ1qctzNhGmw1XX3Lf7Y8Zyb86dDxcGrWM3wed8BPsaYUYGj7n6mmoJndMCcj1DHMCtBqhwtNR",
  "key26": "2PzF9WTpJLCfSb2UdSa8JEzYZaT63Wzjj6wK7CSKjcKaTQs3ehv8TB3cMDpwqnzFzhvj5mVKjqX4C6spzJRKprjj",
  "key27": "wLCnVaYByigFp3LydNbPsPjFmHUAtPe5pcX3Ywy4CaWXB8XDxBXNvbDrxVPtwchh7EsSyXp6ogjNJBKsroP5hp3"
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
