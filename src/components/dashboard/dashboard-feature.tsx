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
    "4KnBJnLuk4mxh66TEvWKzYPqc4QxrDKW8zhSs4nsyY6iWBKP5U2XxnPzjrF1X3N4LdSL9gMkcAc5ergXCfREpy7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iLd1MfKi2Gr8oehJc9qyEJoyTDszp5WzVjaheCTWrHzwNcV4D6oc76akqBnLSAFp2PxVoyVWYvdPVVfnevAM6iz",
  "key1": "2pkFnNMh5J6jc2pxjUmoeAhERpiuKsKUQZ8yZWaZUM53b48iYtHygYskYychFWt59rAJ7RJCYcGR8DZvkEpEUAmP",
  "key2": "32tVeE9uV6wYgGKmyTeCqGfVmch3tDy62dJsac2Ec8ShAFjpcZbruAr22eeXHzRqnne27d8R3DjyBVxda3f2KoWc",
  "key3": "5qM9iPu7K8xQcUB1gDW53RcCf5fA5rXtdzarPFAoxqfmnBkf3mgFda4rvsxxa19CZVU3oMb6r45byAgJwPnTJKvQ",
  "key4": "4XZSADoBgRzDCDrZU5SmamKUXAbWrHCa6N8qcXdJNK2px2mT8VkvTrovgM3c43nMYv9s3hQoKzfMcSWcpEDXmxPL",
  "key5": "5PYRDpPTtPZoEFJ7myZGVzfjDh7YqsrXBjULFKMrkHpSp4dqUw5wgzH7zDBbTpyV3ontqM9U26FoboCPWNyHpxES",
  "key6": "3SJiXcNxKLkibwAABjKee4ijMRG3j98i9a3Jd3XPdva31RL8kvEtGFyeMZZeawS2FKPsHGft5vb7EYSp9NNJXf4m",
  "key7": "3PeEMWj5PVWPuHt9YFdsCNo2Kuubvt87i5Q2ydc95nyWXjGcgFW6wAUCFZYMD2unPzenukGcCPpgvfDzSww5wnbS",
  "key8": "3QZTUPe8cVYzSqeTK6Y3kisYDtQqRaUyp38zQp5NzM1c21hg2Q9dhsCXjUW1Pf7LkVczsqzCTQgVsCG6BQUuQYTy",
  "key9": "4SiAvtxKKXXQgFtaWjXBTvEtaopQBX8KU2JnqedZVQ4sPSEahXa28waBiRghugXj34iP5hhKH2BrsQdNLZoaGfd1",
  "key10": "43sTmKrHkhz1WmfWzjqRZy2rfiaNBpePHe83CHjw3CW7rLBVrxEP4jXXzQZoJciYKyfpqc4CbkP5bjDod6QRHC3L",
  "key11": "2Adak9GkhHTJ5gSDVjZXXTU3E4jdfZ5BzBGovYyv3yr1bKZEoXg2z2h2TVSbnwYmt5CBAA9UMt3Y3B2UcHuUF4mW",
  "key12": "u2sx3F3L278rV3FSFiy4pPNknsJ7h9h99pDTggd3KqxjNxaf4VrNUCz9kAEGXioHe781fvx8Xva7xdXQwdbtuUn",
  "key13": "3qmtJQxnson6XeHUTKTZ5w8qfvN6RZqQcx7bRc7rCRY98FsveXjViKpEt9V6DpgUqQCyq9uLKD9urBCceHrUQBTg",
  "key14": "34t7WQ5a946WWBuVAci5YRA9djbc2Rjuy8hbQXi8iPcCVoPic8KgbMKgTQtkgMrHpq3NN8KYJSPZQ6qK9JeVcDrv",
  "key15": "3v2wWacLXkaC97bU9vDCALpQGCZPh4uGbYxchh9qvxAmQNfV6oEGXXA4h4fzMJX1ZBLxqbVz9swUak1g385R6Fya",
  "key16": "5U3TRuCRn8nhpkSGbLJpj17SMvWhNTnbtjQzXfYUC6pNVBAVRcV82WtR4JG7Ft5ZAQvr9fph1nCPMBEfftc2diLX",
  "key17": "4Kde1Z2ATFe9g87tMFTcNVDBvwcvMG13pQLticSXpqJGWoYgBSgaVNLzL3Xq5kP68aKBBnjbfFcKAzsssNQStKHK",
  "key18": "B75NSpkRnv5hW1tAmZb8KKrWhxC5m6DvXUrE2Fo4xvi66bpaaLciN7BhSdbYWp84Xcvknbj9nPNcpAvSwu2kwLP",
  "key19": "3weFTQBAs1AzxFnVSSFbwmcoZKSHKET8XtXgxgeRkE8UeapYq5Zb1THzWaWaQ28Jh44iCdE6PJEzGEsN6e5JUzTg",
  "key20": "5mucahnnvACB8oevpezFLu3dz55TrofHU3XB4mwhkKCc2avdffB6JWRjjML6kAQYaLH8FX5bw7kA2GuWueLYJAN4",
  "key21": "5dh7sy3tFAKgMJ8uaadMSSEb8R7exz5Gs17Pcy5Kj1Mjgn42LM4VXMQSrfodbvz6fGDbAVnj1cBtRX8Ai22gUFxK",
  "key22": "3gNggN7Fkzqs5RkH6RUDV29fMM8s5Dkz2ad7MLGuR3qNisF5xrLBRLK4NzSoxDsjJbRVPetbxYh1uNGmfz6sGosB",
  "key23": "4we46hLHSn6N6ksUsd9A47gP7qJnSh8k1QFqxqyqRrTUL8RqgVJFkzbWNSce5nYRkTxz6MgU3FfCuQwfdASMbGd4",
  "key24": "5gLDJxBoCMP2rb9mG8d26imvwb5GqRhKT6fpEkUZvXHAofctFr1LFuUHYRY5mN2ADP6SknoVLiatHmWVN8u7zBJd",
  "key25": "3gxxVeHpkP68XBkn5QbKiu6tZBzLq8JfRsKaQdXZ9fvRbTma1T4orRLCcZQ6rYyBx2eBBhjEnwNQKZbryjYckr5J",
  "key26": "4rt8nbhq7BDwW73zjX1qJ28yH15MuRm1tPiX3PSyihyii51d22or2Yj6sEChvjijsVxVTAHTJt3yStAAsaoLwdEL",
  "key27": "3kEAHRruHM1wxt7SREyH46VVLqLgdh4K7N1SMXgMB7YfD5GC9p794BJNZDUHmbj6Zm6rNVpmBxbE6tUCJmeqZExm",
  "key28": "2B5UXQLJWQ8SxaZv5aRwAKWMod2dTrnjECrXbFTJvoHHVqGa7S6L7s76vWTU7u84LcTagp2X3XiS5KkPbzaLgX9T",
  "key29": "2xCXAYwJDbUAbZYJpJ2sS9s5AXk4LUHZedCTeexjY3oF9fByRZAhTkJhcxjFQnmcrpmycKFA6AY5ZbVFEpSc6ssL",
  "key30": "3wwEF7UhQJEbZvA4zNZYi4ZYggLEZDiWt7RCYqY3huXJFecQK6eza3Dx19fYTTyxa3bdXX9jC3GGhGTdhmR7HMcA",
  "key31": "5ytLdkTMKBZccbYcXSJ3qoQQ5XTqGX9cCUZiJLAocR8WjcHWMZPmADrMqiCzRGrzfUXbbtMpAEsWSg8Sd2jzLMXE",
  "key32": "3JS4Cqg1RrkMMpJZ7w5XMPQBLB2Jj6cDcoLz9n2CJx7udQESiEdTSs6YqxFgQ1qoxbbAcpqjKnDdvUUHKW4CAHn7",
  "key33": "BT5m32Ubb1LWB2hM9tjhESwugYAGtvUb26a42fwVS7XPZDMzSaZPF1CHgNw8ax9WarQbj7Z2pAGzMRCAHj9Nif2",
  "key34": "5TB7cBvVxMSrawNwUL2xk3hQJxmZa8SamnRa5NmNSTUS6ctSF1pgxFNjjem3t1dHZ1tHCmyRHCDbFssNqWBCgtaz",
  "key35": "5N2GvKQkSehGvg8Li8LcUvvauXPqsWTumhiGhDMP2ovJdnHHFoow12PYBQDdS5vmV8gMwtQEk1LX3PpQqpe6Htjp",
  "key36": "3Nk8C1qvBp1h5W3JdRrG8mce88NbrydCcMn6KhnaFtSUCqzELdy87Ti6bSD4khumhN1xx6gsmSdArZ263W12zFoB",
  "key37": "4FecZGczg6GgUMawrKt2cNAgzvdWFHVNdWPyodSyoNWDmV8294MrxXBFrhKiyALKL5GmaV73JLTXFswKsUEEoDLp",
  "key38": "47ZMHEXMdov9Knm4igptAfZgyP2y2ZXefY2HP4pTQSvT5WLGZaFqnjVANQntR3cUU3bXtmvxFA4oAhV1PPDEdBU1",
  "key39": "2hMKaKAsTJja5z9dP5ESvsa9fybm8pZnNobMTHnffuHs2UyQ82KThC7YrUXCA61bhUnRTvDgNkEGBR8876RackNn"
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
