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
    "gQ53XwCjZQ72F7JXtkCoraxZNa6UFT4NGcwS9hvqE1GGxUiqVQPdfVhzKi8wQk2YP32iL7fFva4usZsYeCJ4JcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61YTa3UV7oexceRwaZiEzJ7hjstPzBJWTw6xUw4zFugFNDpEGThwaDKSxe3CtQ8yp1ikuKM59FwkWbAAFHMaXomW",
  "key1": "5vzqNbMWhVyAmw9KMDnz5icww6dtVwajkAF7E7bdtmYb1pdDDXhaaxvoyUf7bFRS8ygAJVBr21QJswfd2ij4Wgc7",
  "key2": "26GfuBgo1ro69JTQozvpBU4ff1CJqwHeo88tocQ3hyBhgvPnTQ9f1YF8NcisZpz4G3C4RYJeNEN5rUAh5jcALQFz",
  "key3": "5JeipZWKp1XdtgFhgUrqzCJt2PVTZ5pKoTFg8p5d97tqaq1WeNqc3UGsHJxNf8T3RPr3ckrR4Ca8ZapNLpVA7u3Z",
  "key4": "2CCW97P7MJzkUDaEAUdv6Chm96h1Tz8tny8iYDQ2Ai6WdFsLR9mj76NsFu7kP5FGB3TatWepvqaCzJB3rhycYGsu",
  "key5": "5Ed4QKMyPbxSaoiNe4BkUJVyx2tcJpt291bZ8xWPdnRBw4v3MWQYHWJuPbu3mh5rWo2VK2rPn4fmFPCq38kAXWDD",
  "key6": "4zdYVro3DuQEvzc9YvEJvZxmCaoQFaR95tmtZGMyG1TG1cfS9CACqrXVg5vPNq7Uh3FyA4MxZAnmdFVXmXerTEr",
  "key7": "3VEVgEW9s54q5Gi7k5CJK6ojS2Lp8u5hn5xbM3p7FDW4n4MxgTRx7XxNuCNN2rb4JnCWPSnBrTZekL3Kj8fx4Eza",
  "key8": "2QLJ8cc6QpTw8e3nZbLq8tX7KuazcTrMGcm9ah2hcQdvhmphVvDdoF3FUQMBM4zT9PDwVrBcWzacYi9pFY9o9ij9",
  "key9": "3vzyMGtkxX6oGKoPGpqni1nYbY3PGK5TZdnQi71kmfaWujkKQpMN1Aej3N4apKFJ6iCcsKdP6w3M93hNJy8BPa5s",
  "key10": "58zLV5NeR4sF3WT9XCnQ8oNJKYyN2xqS7hL77xxMNuysEnLuJ5YuMyBJtzLwkjie9A6QVtdh2Fb3uBKWwVoT1nWe",
  "key11": "2BP2C6Hyc69EYdvip7dwRRxmdjzsXrNNx2nTZgaxoZTfe5e6VW4HmqYNJvBimkXNWxksyN6Pnu4hzGPAD6DzDsrh",
  "key12": "5T8UjihWoKefwrPnKGintbcLrAFdR9NBwkdsLnxMfN73sYcxUmNKqhzNv4PkPDxiATCmdJbKB7nZQtqg4ZtKnBFp",
  "key13": "5Y1UpwPdDebz1gggYaQn9GanpqV8LU8augpwnh7qVttXiRZ1UpXnCBgTrZ5F6Xfqa3a4SjZZk3cRy4PPmn5abJb8",
  "key14": "4gt5ZCAMbD76gGYqbaddd5nKUo1ZqHdwCQZnS5BFTdRktUKKgs5wDGuKC1SDrJSWAmZCTrohrrphpvcmqYmiUbLE",
  "key15": "526YtWP1jvfyUFW86w5QcHudbPsgfvr7bTAX6o3qWRHresXNZSJi7oRB7BimRy1VgCYfLjen7yrgrbQ4stqWWgCs",
  "key16": "5nftyBd28dC8LDUgZkPSYk5z89NARZc9yJ6tsANWALKkyBEYkB4arDuwfD4CsCBNbKEVVx4hndp91McyqFSJnxYz",
  "key17": "55XB85JsPnatLnggU9DAUJ5P379Dj6yYxsXNTTFqXDHd3AWamWPQ3CDxbmAVCCUQ4Kwjqxt7Uo5EpRmgrNYDGmGa",
  "key18": "3M1UEcC8VyNH5KVjwY3wHW36MvU6vKM7WuhV4icr564Em3H5MYE9dGhYH1bEaFDqccUoVAqd6dfU5C8PABdTRMwy",
  "key19": "5e2xboXiZd6BbbWYz8m2tCNpNuh382cnH7tp1FDkfJVoEqRsZ6ezyU2NQEsEyJ6fsCzP7cj33k4csA2ogQCapyix",
  "key20": "5J2GRpb6VHtCFrBk39ibkpyZ9b3KqCEchk36F2jTJuzLAU5oAVtiQBT4EUdMfNJbt565NGMDfBnfV2uzNokdZzu3",
  "key21": "471Yjtr4aMosTfZymAc8TAd71vVMzETui7Wetg876Q14L81fziMFPNTnyRi6qBD4SQ9RuH9Zn8MKG8oQeJoQ83JK",
  "key22": "3Sw2qTx7HqvFe7iMhdi2NTTeFKF1SDut5Du4R13QACWaQS4SbKay93tvCDyDWNsTxtnTyd6zkWPhUCD5HMYT1d8F",
  "key23": "WewCyhyusbVnEgbtYEVxfaF2y8uwK33CCj2cQPHALUc19aenit9jCA8yy23Ckhp88QZKVjtMj2Hu32J15CjMXev",
  "key24": "35BSH1KYDvy72oDMDnfsrJizpoMfpSjcifMscBd1B8wf4reuP465q1QWc5zDPxis8pa3z6TDHuRmjcM9JU7ZUinT",
  "key25": "5pYzCTUzNDUbMbi4PV41wbp6Z9SHgAAk64nKCN1PrUSESLKZkHZjahRZaBFETa1GApUkrXt28mb3EwvosLU9iC4i",
  "key26": "4VFooX5NA7mWsjiL7ufa7YkDa7ZFG1T9ksa4SocmP4bppgFhH9eb9pwCk46n2PCEr2mQ1M2cSH3AMfHbCgpJQwmw"
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
