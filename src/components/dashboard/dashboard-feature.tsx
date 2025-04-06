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
    "5seBRewZpzR7jFpTNDLkURcB8nNZzhvDB79Q9UsaDZYkXgFrynP6GLCkwZXgH1RzHKFFg72iyBxQqV9dPKLZn9Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SctjXCGiK3yzAzKuNUi42rSf5xhZ4BKrfJHmPC15Gi9rSuypiSUtvdpsWxxe77ZRFLbpZosTbMrCGBuYnqr6n7s",
  "key1": "2wbjMcvKNQ6KSbY5bmdTCX2fxS76DGDHq7djBZo5gvGnbBY76cSFkC6SsDd3pqUBhRq6kf4Fm4HLhHLYTjms7e2N",
  "key2": "2XTgxx5MUNJMUb7sxH8S3n4uqEuKN97ZGY8swmp7FYggqkaesBPq6DmxYVQRmCxV3jkrzCTZZw3sNXmzt3aiJ5AU",
  "key3": "5hu3338LZvHLbehwKWPpENiDPyZFNTeebzFu6PDE7qupTquU4Texcewu72hkR88GkfvT2LAwz3ZFLdyNUX8PwKpU",
  "key4": "38gdhxJEE9aDxT82Qjc1hYvamyTGrrGkwgf6ckJdTQhkJUFR8JuJh46nVjvrkPBYEb3ggS4R6H4Bp5uUWQzjJWW4",
  "key5": "4bJV2YbK35PUicsiENS4SfLoyifzTzkZCq4Pdw5mckpe7Anw2ch5ZE5vfrJjK5tgcyCFh4cV3QPnS6EfFasSEYZq",
  "key6": "2NSsMJu3oAsofaSncGKovF3ueFdwPNmXHtTBDR7WMDpGTWyJwEPbSXb2nDPe5jowJ9Znk6qW8KV1nGnv7B6wrBEg",
  "key7": "534yt3YvLFpuiX83VAR4DASQq975mcAfwcHJ7p5rXY65Y9P2HLxW3FiBaQcnEUy35TvqVw5PnLyHNzLhdgKqSdKm",
  "key8": "DNffyFT6QtbnJVA6wPdYByBsAibDxnAb5jngKQNQN4owN6y2ZohC6UdsurPDNnQcYGR6kS2fnB9ViAhVH6jzmfz",
  "key9": "3p7PuFqYnBka38HBwaWyBV89j8EVENxUQnG3zeZnV8GXuCLDv1jTWYdkFYutgoT5Z2Jb9p91bERTh8fSoaoyNN5z",
  "key10": "XiqB5vEBAzrGCgt3UhCnN3pn1AkiZPdWJKeeZtrkq6Mt2rq2M8oVRsxpZSEv7mjHv6TQ5C5KWsPF24hFFWNhBMM",
  "key11": "3wkeEGAqA2jnNcaXRpycpAT4P9etiA7bb1u6aQ3A9kzu4QbcVNuTDhTF9PkDzfrTfiLx8L4WZun2ArYovNn6375x",
  "key12": "3mzEAXb4JMb2sz1fq9WCRqnAKS2w34zwhowm7MbuLmYCwixiM1cuyRLarzy5axJoCWnunbY8tBkZC3QxZGm3Kfw9",
  "key13": "3DSo3UEwXN2GvaS5jdtvaJhjNSQZxzVJMZsVKp6occeewmJJki9EqAV6wnBrsEnYcYcQeqMWRkJexANHQHTCYbzF",
  "key14": "3uXWGxX858k1SQQcQy4nihQC8t9ZNXTuQUuhCBa7mynwfYZARJLqRZ8gokpbcg1qD5A85ET4fPheTfp6mr52cNxo",
  "key15": "4f5hJxiDtSRZFtMJWnrRfF92j5ZrkH6w786BPWmprHgst8t5pPaFTeQP9NUCzPqL1wya6ZdvUTNwGKg6YfofB1Yh",
  "key16": "2fSdGvgiLFLV8ezGDajmBqTMDshgsMMjiLp5vPyrxv1RWt7zYA3ejncUgMStuS3DbHdzwyi3YbMgERLq3p475Ukj",
  "key17": "5pVVfku2RHGZeJnPVrx7Fy52Aw49dXzmBHmxGjXJv7bfwqnMNtqyqAutspLMMTondUqJpQC5BYjkuJzAQxAmWxUs",
  "key18": "57JQGsLA7Auwa6FdDF99ZBBpY2MhAut4ZnDd2VUJjWu1cLCqeubmkDKst6udE3ryxf6C1SyYJuMUDtTXPm1ENecm",
  "key19": "ADAjP2BqUa4hnzHWDxeJqhEp4ud3fVQj6FJ3EdTghGZnde2j29AsTW2bQetNcrNK1KtY3eV8nQ5uwpsRT6zd35U",
  "key20": "3YjyBvd3JJansTm78svPYEarmh23MDJb8uBUcJUuEWeyLnmVX9oEacee3n2bHDuwuPHa715SDqmMHySzE9S5bcfL",
  "key21": "5tWbZ9Kz5mYt9wC2Ld3FBxZFSb2fd9DNA4v2Lbu7BNxhonuS5ZSgVfvugQc8Axr6XhrvfWtsMbNZUtwL66HHPdJH",
  "key22": "WfGLDwRRTebYYJDGEwA2toj3Hka5n6diuogW1EiKEWmPHxSQ2yvfAed9fFFufSyoYL9K3ZYjnAd7paYnn24HARF",
  "key23": "oHT6Qa1zm2dmqKu2wULsF6iERE9tVFWRZSk44Syc6JVmc5GF1EMR6ivPFrziZ1Vfnkv6322UHMw26QMdwzZuiWG",
  "key24": "23hQJV6tgKPb1VkLTMGFjfQ1fa8AbxxZCN7yF6d7xd5U9FEhiCVyzRgqfA4k6RtGErkzFPpY4Ae6FWmnk4SQqmed",
  "key25": "2zGy5ziWe9HSTF7njHbprE4wqbsjYxqYuomCgENeij4begvJz2A5aay9p5yyGCQ1HvbcTghdWSyAV9bGjkHmp7qh",
  "key26": "5DgEeGydwK74JtCQukUA51tQ34uCJjcdQ633U3Z8t69e9TzoXYSAY9jpqRwNNEZZ6cMVkzPXvTwY4D8C3suojhJZ",
  "key27": "5NkcrunLcpUgHoYpZs1bed5x2v42SUoyknVeWA6goixE6zF5PcRCGCk9ppsZYEJwQn6qP6XfFmGm3yNwateRyA2E",
  "key28": "4kK8LxuEx1RRqUPefc7P74N47QsuhLa4NyfcVKMtnK3T3SJGLfCd8ATPx3d5exQ6m6JuaYEZ94HESNysSj5h6cgJ",
  "key29": "387Ak4erC9Z8pM1vB9CQqJ5zvk2P5mKqXD9Qf9AjtT8HD7VRScAA7kh7QtETEx3WJYAaF1dVuff6qjLidM74CLyk",
  "key30": "EBD8Dsy5F2ShNRpARmTae43vYWk6SCpm8L4xmVnGKz1upDSeYVwmCXNoBk2gweotWHC9ZvwpHMgVKsMEZSN8Srw",
  "key31": "4Ei4chsXEckjWsC32Jr3iSjSBhH9esC2cNVaKD9bEJ2TVU8QDCb56AEMQrShHdLbwjr13FzqhSWVYy46ygDxpMTf",
  "key32": "32jPBbUncSwPQWYMhaqrF11x556g9bJLSY9kvCrJxGkaYr7SZDi2sy5hw9oiCgWGenUFoTgkyM7i8xgTiv19oHqE",
  "key33": "5JvpJ5Www44tN23qbFkXSaQqwMUshAr3vGujzZVjveYgQSF7nBwsVsTcYgE12yCYQbqhML5joxJzdUNZ7h7C6Fv2",
  "key34": "2ivV7RDkx1CSZtUsRocHVbgvbD3AjFttj6suj82u1psJHv5kCShNCj11xZYXywrKzDtrUtighYzjtQPPe6Ap7jYg",
  "key35": "2fzhzx1RB7v8RTHheB6z3uZaj4SLV2MRq3PhWFNBzL1mL7ENaSCUGQhx8zMdaC81aGSJVRHBkXbc7DaFyxvoc5Td",
  "key36": "3f28FVERTaZSMixhVik4ASwRiTWjmH3uT1HfbTVT2cDZDK9WJVMRd6jKqWtsxDehYKo8turhbjJMpNKf7LcqhZe3",
  "key37": "5nCwHhNSRPp8ZoaaUfMrbSgEWaQFDrfPWkoso8GfDHiLEvQSCVhnsM3k3Yd3JuG7ffWexpdFvDw2uxq1RxoJ62nL",
  "key38": "5aWoU42iUuCAwvMS4vmG5M8CFVsaiYCXcvvD9tg4FYyywD6SqvYRWsD5RPbGARMgG6ThwK3ksPChHLwXbi7Qr2Yu",
  "key39": "3r3YiVpxEQfhh9Kh4W22BvK7HsAR6zXkop7r8iDRm3uuXN6KRcDg6ntNeFVVX5ULTjBiZb7DsQBvBYkq4Xy8xLPx"
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
