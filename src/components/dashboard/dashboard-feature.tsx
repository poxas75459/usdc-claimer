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
    "5UJ9FQyrxdToyEmyymdjsWen5gfQBPfDd24qtqs51P5gSq2b9KkdhtRMj2w8HBjRmS5CHW8eyHYyTSfezbruPMyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZC8YNDoi1AgsFvX31mT2u9nTu6bpxmJRSVrnNpi3eYZbwaXt1uMSqsRDuuHHzZRgthg7F9GDmpVzfF8DLnUMAH",
  "key1": "21LoSC68njZu9WQMRWaAr8gF3ZxbcA4RUZNnaScYS5WmLyc2jpnxmAVp7ccbSyCv1mTYJb3h4EfubtEXX4DwWHYe",
  "key2": "Tn5RNwFCyMNoHFFyPmQxcwRtuwi6N5vtqtnNsTXBDF8vNjJLabyhXxKXFiWwox8M8jNx1qvheSg3ndcg4MqJ3oJ",
  "key3": "22WQoKfAgYJnW1fBzVe3EFKE6obeWhwFCrG6tPSY2jZmL8xXPN3XSj7XbGzSjWQotuRYbCHVpJQMRhrDDhYqYJgm",
  "key4": "4ZwczoZx6bvfsM9VSwte4sTAUzXQU2htm2Aum1L9nWoZZvYjkzFwsPDTfbapsF5HPpsE6R2J4bJc25ytSy34Mr42",
  "key5": "3cmNxv2tfR5TUxrJyLW3iLgvD6g9tgt8cfFjgSGEMoRBYe1cRsX7dFfWjLYiBC47BRTE8tynvNAXMNZEp5qvgGzS",
  "key6": "2KB12toF2CdkciNJRWfg8LEMufD1MVPDVKg4NTeqjERKsece7xq3dhNhkTpA7aWQKowUpCmYPh7CgKvN8fFsfhFE",
  "key7": "5srzgPtZJmV6HKMngTPQJZGDKcUf851WVfV5LSeq9e1uZh9vpizmfqXvVJPTWFhbGPyfNoRqBxF5hyPM2Vz2Upd8",
  "key8": "2Vtga6AwST1pLptLM4SE1X8pLxkBfRoEsiZB5CTsRQPBVjX5PVXSm7rCw3wp2gB119CpmAJX3FtsuNmQ9oRAiXaq",
  "key9": "3NZEPXHfUzSRdmVqaei6BGgxqUJTqVYttH6SFNbMFnZJfLDntzAJD9tGKkKEWxfu2JxECxM1rCxtQPgrsgTbRokk",
  "key10": "2L8bxaCwdK1ZcLmERJjEM61hZLmjo4uJRqrGNK5SCWB7iJg7e3EiLDBa75E7WuXeFjzGeEU5SuC5LDovhdKhB9wz",
  "key11": "3yA1443PMBu7vmFi5YYV5BtnXZbP7dxzHzneEQiWFcK3rxZxUftBA57yEhSCr3YztwmSWH2DHDQubZxZ6G8aQEiS",
  "key12": "62dikScQQnumanKowG2srgw7q7RKLyUSaoM8aH3dNDk6HvV783mjWA4zHm7Eecp8ENcFHtsRx7PwypfekhGYon7h",
  "key13": "5i5aeKzV1GotPYFHD4Vuxvjs9UwLTrvbEzxv9xojPvTS2PYdWXNEFAdsBXsAx8eZSAiEoLGPDQwgeCwuj2CwYCB4",
  "key14": "2ZpSn5emByNo3Rury8ByEwCsQ4c31oMxq172SZGU1ejhaHh5nU1v49ZpKrzFtY4Tjp7v1Y1pLcMqpEroCzu7rXDr",
  "key15": "2GkpZg7wawKKihDPkVyibTGcXYiQL8w4nWqLbRtz6f68qBafYCJh46AoSjqZhBnpMNUVyPCi9B5LXCht3T3T6h9B",
  "key16": "4Gv5XaqXpgqNpkbb7E3S6fPd1akqRcGkWrejZWJzQeVUZ7BuJVYAtYsS3B9niHTCrSNbeFzHZZ4eozd7KgyQNe4i",
  "key17": "5ntTFSzoVcffbpCHxfrHrpwUP9SSjeZc931GpjdWo3KLLZ6tVM54ZWukHQDpkGQJKgEV7Yx9YMNcUb9cBPVKbJfR",
  "key18": "5BKkJaxr5sRdRedHZsvpCmYzXWpCRp2WCHkqQVoLe8td5kerxgXoqd5oBA6Aw3imM5emTKZWdSAr1xH8hVxXrmbi",
  "key19": "5m1sUWfjywCCSdfUfnTrZu57py4qmcW4DiVM3AF1riUNahAKrt6nmnygykonPfBrqJz2ZRQ7hP8V1ZkgTdbGfJr1",
  "key20": "249cH9UjRtSA8XQfkXvvyWEQUVwNPgnBso9Cfz9DJd6J3KcDNKrmmtrYpn3B6GopjZNPuX6hHHyjCfgXF5zD8f4L",
  "key21": "45m5uHLfiCTH2K8ombCywKRhyApcc28FTkzMqFsfeRe865WncPhJPQMkYgQAdL5bVb2uyZVb99QzabUUAcRU2nUH",
  "key22": "2gVousM8rRAu16JpuovpzYyjcoe3bgmwvQsYJG2KchFe7xjUvvxkBiGxwp2UyfdgcSwtY8Vy4wuCFsRib9qh1SgD",
  "key23": "5iR6MBS2m8N6NpiSJBafiRs5zYF8AyMfmGdyB2gSU1tcBpqFCvGtDMHJoC5erx14PxMS7vUnAoLLP5NWFPhzvJnJ",
  "key24": "vyuK4h3PY9FW88jcJH8PAZSrkD2zzYwWzzreDB3mfRA9aVKY8EnsKodgXJf6LgCn1JeZbgRnM4tPzK6k4y7WmXi",
  "key25": "3QkyVqnprgqbbpxNEKFzKPFquNvAzUb9wPNWWF96Uy1qJikP39xCsCr6kARWtT7NT2K9DJgUK79ai6nGiRRwEYND",
  "key26": "5hYdACVmZ76HUmP36LjkYiAP1jMWfaYE88qHY6x2PLzHeyJ73s3wuCiSvjPPHcSMegjPYymdZqZzGkKSDFG2G3Tr",
  "key27": "43dz5fE5G8gdTsx24NXq4XTLqJ58FQ7KRrjFkua3nFH6er6dT1J2V8XLRMuSMb4J4kmoth1BEkDxdxRLLnFhHbpB",
  "key28": "xF3rQTBeeLFG3cPceRfdgEYLByx7hs6xRSdCLs5VrKV2JgAWHNAuRpcUussuHpYHEcSnKdoxfYqXuYF3Pj6bZhj",
  "key29": "2rY6Ym82LUgdfvH7LQ7ttaZDgu9KxRRtsuA8zCkjSXqKxVuRPtNuH84B3jHkrtw9b7a2ZdqYSJwMLAJU9capUbsw",
  "key30": "JviB1DZ6JFvJLBhkqtjgkJ9T1nCjqguBEYrNe2zBXkYxtBFJiv4erUgce8kwmiTixWWydcySSgxy6Z1Kai9BjFW",
  "key31": "4Nxbqu959D6BqoCZBervGn7uEwbun6mMRo77hcaFvZwwoACEfQd59uMJqmzpWLwPVQqkvDGNSHBTuPj8N3TPYcEc",
  "key32": "5f58MzbzdKqHrWeiexAe26T1GvM5UwsHZZdfs2rK3PPdDeicFpsNC93VMyyZKxkoe8VsaqMtRTd5FxFr2f134wDo",
  "key33": "w1JKzsd51qg7S158vAV47vLRAenWEh366Uifi5bQebiwUa11rMVpBttU43Mqu39AyLxu72q41GysS99WoYd4dLz",
  "key34": "hB2WvygJiJAkPQ3gXetomY5Dt4p2aBVg73c2KwbEhSgGYMtAgQNxME7tRhrDubLatKgWD4w1igwyMxejHi8rTgj"
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
