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
    "5RDp1XtwtS1aPw7m2FCjfCzfa2T4UFeXXCXKXjJCG5JKxY1eCuGJNfmMsrim6dKhis2Psh6nW3q7Y4L57KzSWugw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HUjWsu4yTPyWm7VJpM5JAEGoYSWjMLWkEe6XTsSPBBiWA566xucSHU8hXiwe3126WNjLdfGsups353Ez34Dau8W",
  "key1": "3YUjtpTaUBnwhBJec2CSVhEypU3FVkSMonrajqQ238h9KvWFVod7bGXJobWRNjAV4iSdAUf5TBAYb58cfXBjWs7D",
  "key2": "3ij9AJr2REgDRtFdW8xaP5UCP3YaUE1hbEWrnP4DaY31u215w9WfEsxdM9wB1zF6TQkEq6Se3nmUk2PhpePiGYuT",
  "key3": "53RZt1p2ynB7bbf6rGpcMnjLZfD5BcEuGVYf2GaQ61Dpk1UCa2PUiSmvTSsUQcW5YqiWEBnd6HqnK7pJseqT25GM",
  "key4": "57Ni5KbLaBzk3H4gGHjkEZcQFZFJE9oujRHyVi6A7ucKjZ6hBrHwkpZpewuCjDcsPkddTTgFqLK4kmqYxM4SJ4rd",
  "key5": "3c3yEYENfSraBkovixZJX5wr8gE6jxQdaTNzCixN9cHFKKUyTB1T1vGRUsaYizj1VM6modbhCvdq2YHVowq3oPnu",
  "key6": "4ynFxhVB25yhb9ofJS28D829d5uUin4HJ81MkMorVpnKR93nZPrrLApKAX677VVUNH3bSZfZkeniW5rTgHbLp4es",
  "key7": "4Yfyi48SsbQL8kJ8s74S3beruNEQMLFQScC6wJY4mjFWbhSxWnGWBdquCCVa5TyPWa3qPh5CdAnyVmh3B4oNh4dn",
  "key8": "5mZxUzMX4Jq8auF8wqkW9VMvLgtg1D2PyKVs9mgR1RvkHnAExUrkAypeDvb6jkN9fXS3UHVPcST6j6Dfyf7if6pP",
  "key9": "4f9MPXADXX7Rbp2fWVxBZksYwgpXL1Aobewn3MvLGuczkS5wb4dqiw1wRNTdUDRutnd4Ffzy7vMia19nw3cmacGW",
  "key10": "4JtknPf2sgGNcNDWBFKFHqW2nbDvf6MJnJSHUxanA5S5Kdx5kSiG6T1g1YAJCd3W7LWavbudmDU6H56cCYL8W8H2",
  "key11": "3isETYnoWsS6GBkbzH1yMjBLkPfU764edCyfKM95tcpfsqVrmVCVmS14ei2HUYY7a3n8ZCZgcPWj93wKPGgnxVdc",
  "key12": "34chhLua69MfYjZwEXLkM6SF5rL1rx5eyMXoZUgtRAVGJ94S9P6VYvFY2dx1jZ9LeGhtKHv9e9BeDKiDqiCdniiN",
  "key13": "7wXZq86nw4HXAcaDUod9GS4bB8xcMyGCvkTfFbpUR4wCYPmdzD1QqAWWBacCq7sv7C5UJsA4dzxG5LxNDseweNh",
  "key14": "3UPKsEKAqgAzbauARq8M9WyXAA2jB9SFaQthC7Ph2wY8BT6QNj3mtMohtJGThSxmrcgSm2FoJbBFzUbPdoVUp5fZ",
  "key15": "2VKzPFN4mFKuLkrJsVpRewZHJwPt49bJeUwT69ab4gYATijx5FPgBrYaRqidBayCtUutZz6z9bURxQJ1CfkSbhP4",
  "key16": "4AnTu6JAc73pNq392iq3e6kFVhJNdz2n3byuhmBMpv54H2MLLYy8Umkx396EnbMWCavXd1ShC3pEsTJc2xihWWoS",
  "key17": "2e6mkvZ18bF7eXtf7FjisUpprJemaGhd2feZDT8onjdF3WwhAKvrXWsTMptJ3V6oCAY6jkX4nZ6EKKC6gSWguZKj",
  "key18": "4SMD1hKZanrXnffa62jReAZDgogTp5RhqkmpPiVikYejunvCKJ9feMVDsG49HyDA7RaV21wRPRqdsJdLK9ioZrWV",
  "key19": "5xFC8BZvx6Zjw9gCirzmi1USzt7rksjqghf8rroSpgo5vtBtxGetsm45ZRdxCjj1zcJ9Za6Vh5id6DUgyh8zNjy8",
  "key20": "4rAiFNZiEQj21rcdp4Yv56k6PUyCftt6tXi2ssYFntuhYQAK7bpxQAJ9ZJDYoxSX8UXEKeJwdxPrZY2242sYYE7Z",
  "key21": "5LyA1mkL8sQk55RE6NX67s6bykTJpREuReoNWwH5uYN3i39bU5KQ8BEuxQfqGasGEh9xr18pbNRNssGz1AjvTUKC",
  "key22": "AbSt1yDdNEjSZ7LmuPzVuVVL8XcP4NnKpKGJe8a8DgzyJJq7vBCxQCBXQN4zZrBCJ5gVjmaxv6bSd73fHbmAfPE",
  "key23": "3qAA3ERTZaLMZZxWTvzuWpuXg7z6a9cRUvndFb3xRfbguaGUXGABjBuKwCne7TXUzC3WeNcETov2yJr5xXke2pUm",
  "key24": "2eVQz6FUeBuxjUeqGezYkWDam22WLnG3YSFm3QSyxRRu9roGttp8EsfBkqxSXiWb6Bf7DBAHiEQcTSzdFYhanfMJ",
  "key25": "5HaS2hkxqSK4jRQxqdByqbRPPkZSg3EkLXqTFKpQcHQbPRUq8zR4JQPZBo34uJuVSAvY9ugBckexHERWgnyCSgsp",
  "key26": "5jF9ZqDYBpX62mbb5a1tLtLn6Jvtb1ir4XcNNYAJXMsNr75o7bymawzvQreEVs6eZWGau8f1SmX3DcXZQt2jKshR",
  "key27": "3f21qCLXxgSNsQjyjTZHoyHnNT3edGo3Gak1RFhGv7rrCRDKsjBcxakbiqhPJBS3eMK9DWPPMJjheUFRzuKGTPZW",
  "key28": "4n6qiFBVg6dGe6pHxNMUiJ6GP66QrmBHYXF814RiQaM3ZMZaNQY6S5yXwCDBchGv1j4qgeFKmTZffgPZXBfjYWPo",
  "key29": "MY1xEmDkB8rvUFfNfVFfsxjdM6mPQG8RAcvRZdYNLW8NZFBFD58Yp3ZLSMWjXeHEwTQx1ZM1xnh9GYrHBvHUq5T",
  "key30": "3CzBPXMGpXxqMmKo1m3XXV3d7ykqoLmnM2BJHBuV3aGcqvzDjZnXhr4YFPNvBwZxuNKgqZkAYPL6kw8pYZPD91xq",
  "key31": "2Bk616Bfvo4wr5uQK3JSwgh5AH28iZVKmRZugnuMwWGhGseYjZGsxw1hi9tPLJvr8TiRjcTWN7xnYjPM3Np3yKVX",
  "key32": "2Te1HaX8np1fE9Ad8gMuVqLq5VKbTUYFa9HjU7zL6utc74Pzu9jPtzW96z6BkvfQGfrvmpB5X6Vsv8vyfDVRVLqB",
  "key33": "3CKLS5TTVMKyFNz9uDGSeYRv3QuXWSPSoZPTumLUcBUg4me5gFkUvb2mrf1FmxYUpuwDdMGNRgKvQkGiG4Amy6QV",
  "key34": "5J4FApGBTDWyyLqt83wAqLie8WRBKye9woPeQEdSGN8CWdqVvk1V26iUVXtyU46ybRyqwnUcFkTeMcs6YRGif52a",
  "key35": "2hedoCbY7QmZfgQS6qDftFnSjMTg7FAgvFbLiLXwsLaLdtCQCHPeLm8PeFMghmPZNvfe7fiqBCWg19aWBqdKjja2",
  "key36": "4NPExi6AuU1xtwCF7C1cvugHqapzWL3QajudEaQX6a7Fv64Y95UyWQonYovayK1y1v8wePUbBnXNDF9vDerssRBz",
  "key37": "33q8yjKNu7KHUE2gRpuaYHgDf3Yw4QVCoYqiivR9bHovoV1TGw5XSa4DCDCHGSiavHBAqpkNAEnB5mMyuXCVZEKv",
  "key38": "4q9XV4GidvSgpmDCpbb7EJUfetoaMQ4QtsZfn2NuX9QpnVtLLeVevW2Zydm4Fj4WyPuVURiG8kfsxd1hgcgtipAn"
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
