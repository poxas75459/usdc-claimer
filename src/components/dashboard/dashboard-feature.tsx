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
    "hoqjmHfTPHAZdSZyvaETfo4uvUf3enDfoZpAqr27YQiy6uyPnj3cnCcuRSiUNndYZ4w94rpvHhpbk387GVGFdfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43P3NbQUFytwR25Hs8XBkCCe28kyFbvWcKbD476VHuwSBRzFzrj39i4tcAqJgYPxn3teHjJUdnkKbxkzD6q2NoHj",
  "key1": "uzV6JpqhA8jVkSnjja5cnYztzD81TJigLCwqN3KFNmjgWCb8BiEXn4pHmV3epvBjSdR1GM9F4GQSxC8xxBKocGw",
  "key2": "65vjrL6Jph5tBp59KmPtCQ5h6NH8cqpXnKfyHwE27EH6SugrqFFhhwvDzeWujKsRPPo2VQcsjhSCu6Qe8hQ8cQ4r",
  "key3": "3fYCVAFRfmjoVyZuvKF6NgGRnCCtrN5AD2Y5VvpVSbzJWs2Y4PDBhGQ8iT6UKUzRv36yB4bmKRywQh92BaqXXs2T",
  "key4": "3xVU2ttV2azF2y2aVUuzQrdkvmnhx2EUvKcKs3nPAXhJ3pg67QzDrttmsbihzks376m1kqkiwHJ3bPQWfrvTpKNx",
  "key5": "4hKC9ya3Xw754KmnnKG2fdAoZXwb4PoYmuCDkd9AN17tsHc8W5qYQ9Vmio4vBq6EezS1uBceDxCfSEi8JuhAeuzL",
  "key6": "5m37wB42D9omPJ2XGbpsHDGjmv5kCnaCsDevdpauEVwntpWiESCLSoV8vtMvhTtzxp7DSuzmGubAJfPUJraq5Do2",
  "key7": "5Kw8h69PD2SPDULxokyUQ4fSxKCkkzjXa9kL2fmimNRBrMgxFuN6hMR7ct2azgAzhWVnFCPu1gu3vppJ2nfXHCK8",
  "key8": "5j3cGun57b2AYdaCN9vshpDrETwXfhzJ5eK5t4xUG4UykxxbsJ283XoEWjCpajLsKeb6hFe7FkZmeKEnThKdJ2ug",
  "key9": "61oMYVm9xPaHu1S7qadyetJoLAnmUuKs7tn6a3eVLcCtkV9Sft6LrYH9PaiEFhGuWiWiFDFzEDxD5gMvvcna5KUB",
  "key10": "ZUhPTrjjNVT4WcxzgwVZYBV4UA9trvRzfU7bSGdC8g2EVQ7dg8bzLcxGNCoUcVdoTKttYA6z4iXMQzgiHn2Emam",
  "key11": "5YGR5H3FQpkuz2bq8Mcomrq8nDRxnNJKCcuUxHNvetforUH75qmVxTQKDR8KgSWmR8yVvYftxJXXnhyStUcd1VWX",
  "key12": "3bfB4vSZ6vXVikffmBWDGXmwRwNEFTBfV5eWpwiDtTTu9Cw19iyXo4igKEqhrnjnRACfuo81tsgjv8hV4nTFLurf",
  "key13": "5p4ptUDNyZD57SPBfZyrCMU7jG1qKwpnJiyQ54Xo8uXNyB4WqW3uiLgfrQuVPdvzp1zmM8MqhR9MQR6ZYkGNyAXi",
  "key14": "2QFv5BmGgizbyw9SCgej3tdk6TRzS4dvHyVYWECJGJsru6VWn2HQYAfydMYZHwWsWeqZsqnLaSrnJ4SKPAQkX1jX",
  "key15": "5Rwe62wyhaZppdErwiZn7U8M5J5iSAgJgVyNWov8WApbsc5TDnGRHGATSDtw4grLxLajsAQm4G9GHFQq5Ngibedu",
  "key16": "4Wor1AaV3nSGx3JdTvQgoTNHVhy21MHuBF4zZKqKgWBWsNatvqzZuEoLrFuLfSmVjy24mHnuFc7i67uFhuNWqLFa",
  "key17": "2CsBRosBFLV8Kv59qqajjYn3SvVT4mpanR569wM46LBSmETEtmBXhtupNngoJ1vFRxoQwyd3pmQuyy5XX5n5xMe",
  "key18": "3URVB3LzDamy9EFNEVQyaLP3AbbNY7YnhL1f7ih649JfUS5JRop9dUXxHXNZ5xFRaQxmuE8YnEmZaV3yBAkEqPBJ",
  "key19": "3vHirB3rMyFUJyQfre1Wb4F7CfmiMoP1xWjZPsNwKzMkbwoHH9wbgXaiztShSVdE8mJ5sBNfXkjcp5knvn5VzFkB",
  "key20": "5kWSpEKgfGvPk7KfHCioaLPPZwcKwZy44eJMJGBG6bRoEuG7iLcDmgVT4m4GfDBFw91B9JViCnQvS8uxaZoxwjEu",
  "key21": "3rxeBPaVLviHCFEvtTDT5ToBwk7HaGZxEiSiXa24HtMcQreBba8NLJ4azJURc5GtyYkSf5iyPpLwkFHRrahz7YNk",
  "key22": "55tLsusqszywwPkRm6BBurHhhvC4a98fa4Y6zLUsumAPWxAPtQvqhdqquV6a97vTAGoKND935hti1a7ZSRNNxp6s",
  "key23": "4w8wXGjMFvCMsLhkzqhZWfQj1cEo67FJ3fHsK4NLj87Mgwp4bUAoGmAGLHrdLTnhB72dPe1UGgeRjUa4utu8yv6f",
  "key24": "39trYCo258mZ5a6KktQBVy2Yaegb8iVSdUgF2p1QeYNR4qGfimN8x7DxoFrtUkyPkuZXqEKmB5tdHAyjSA3DSBXP",
  "key25": "4Rh1EaPKPoNgphRrNexpEKHjFwZFBSGKfwJ1baWoCiXr8fzBv4dfRumPWHsYuHsAzxGnNuNPPyrHsL3A9Zk4J792",
  "key26": "32SigbqpGiqUW23RUnEyfj5mrQjvNNgonBSZRApthKx2jrmGykiTbNy5Nkftko872Ex1uE3wF8JJ2J8aThadWcU4",
  "key27": "2cLXu96LrAjM4LMAfMybJifwmrBpPQU9uYZZi4CYa1e73h5BR7L8vMZTBVXJwprcq27tP3UdZqQgn4XY9fVohHKg",
  "key28": "4cuBXeoaUigiUWKxngPZ1vq8VBwvvPPNji2mEEjq5P88KMFGoeku5Rdr87HpuD4htHhXT8uT9eEtdzioC3i1d6Tz",
  "key29": "2TndvTEHW9356pjtykrXm3jYDh6zN1K7ybtFW2ahsAx9zanRrEJXXzWRZ3LPmXnuq7KbVucT6VKeMhEL4onnX1DB",
  "key30": "2HE3CK6XSR23BiUp5nNtn6AjMyTkX4uSqfDxzd9ZzqhjJDXWWRAkSF4THkwNrgK9yZNsqV29hbgvcqPiQ4EZmuiw",
  "key31": "531PcNboyxM9b3onvptrhEbCTqp4M2vxhP1jsZh6PELK288nSMNGc4fuoL43WF4PVSwZPdH3SxcwF8H6dUyW4KAk",
  "key32": "2vfbV63kNsJqjihKwpsDoQCTtoWZ33fU6zPi92GUe3k9uuEMXfDKa8PN4YefDChEkHcGpSB4QNFxVhsm9AWVdbZJ",
  "key33": "38ErkxzwDxj5wcHUvcyPaAQzeZnW4KK31huxbZd7j3RdUHK5ngXgzjfchxbVtUMLg1AE1wHKca1szNHBbHV5oRd3",
  "key34": "3FWBQvqH2g3VZ9aDmmTWqJaMEvwbPLoi1wPquCpecQmZqHtF9ZJkDjDHo9tj13MLfFtYg16Ev8tNCtoUUjn5jFFQ",
  "key35": "3UJAUyeP21byGGhRpUYTJLPCMk1jNihMfo2Q5vzXcMoQ1NvEWuMnFFDgxetSVp7wZ96ZVVD9EevcBDMDksXQndwu",
  "key36": "4qCA6nrUgjecWbx9RaW32HQMKfSFMHkCkcRAGKH5zH2M4EjMgyhZsfLi6ipiwC4qKZgKshyGHw59MKXcD7XR7inw",
  "key37": "s7aEB9jf35rofnY7cJ9sJx6yYzVPDmeKzYBydTZY6sdnQ1ocA9homGavhY2YKsxZVTNqgBovRTWhi8Y2noYEQxb",
  "key38": "KVyPT8yfMimCBRrxZSZ93jkyBzWR9EmFSJQtwPTP5t7ZBgTEQo9NztvwZRUoaYqSYrTd5BNk5QKTVERQzez87jA",
  "key39": "63JvB6XQocUP1NuAgZQZpqLGup76pq5iTsEeuAxbv98BGnFmKwDP1Yz7khRQwvmZCELBm2j3EUfzoBakztXQY5qA",
  "key40": "Zx8AevKMYXiWCq7YPn6pqYNZkiA9yiBwMQTpoAK145Lm5o42PLLh5DS6KFTSWeG7DHY7q9a93RtXkkzwvXHgES4",
  "key41": "4iakk9Cj1AhU4wJSJuPmLvjbZwqBREc7nGVyQuAn8t9ebLo1V6mLLB8fPsTAt2U2yz9MSJ636goz3kJoJupK3Nab",
  "key42": "4Tjbt4S6aRERVWxK6VMZ2YNweei3x27Ej8rfPbNhBE5WPEmgPJghQZwTdLyHtqxgofqZ9CeUGQqUpSQ1JkCyr3sb",
  "key43": "3JYjBCeqeUTzgDkvMVcZR7wqutYDgzZBAFK9LeBYxfAaC884McFaq6VkvkUcbfLyartKbNe8kAb2RnvyKEcvXEYd",
  "key44": "2e7nJDbGMXfH2iuFSsxS1YYp1rEQXxMjnHQo79rLr14amvxb9FEj5WLH6JompGLywDGxA9ZtCuvRaKo4Xo4EuB9N",
  "key45": "5X4667vuNRJo5XXZqsE6wmqweG7PDmvm13TcsaaSFBkpjKWQ4TxGBEtCkx3VawFyXNFGsvJzUEKEh83fRGjmNCSU"
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
