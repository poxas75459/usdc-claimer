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
    "431FY4Y9ryEYX9kES9cNHtMp1yvZziDaxjdCECWZ9FqNU4VY9PVQKn43vxSgMNdwex3QwSwATD2Rhxrzncm77eY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWuJiTi6a9miTBRnDFEqpeFmf2ovdnvSaocaHFkt5Qv9f1Ma5Ttqt6QbCo9wiWanBsDrkD7HqBzCUqs8M2xmXeV",
  "key1": "MEVswp8dgwJ7WLd9YAZLEM6NPC7G3VktoqUwsfbGdi1Lop3RnfyhJha6fxwKNsEojqbsEc696V5rq92t3nsDryQ",
  "key2": "27X1d2nPEbJbr4o16oQAoyR5xMrhHmJQeJABqRHCkHUcZ9zBDHL6NfXf8rtkCMTiGgTEKpG1GUJ1y1ArHAXzsV8C",
  "key3": "roJKVkPfnJ48eLhvPdcAfQ1pDj3PdsGUJ1mLqLP3Zca4jQAFB2X65y14mceZigWdX8UDEgE6Zrn85nZcysXbTjz",
  "key4": "4qmaEai9FRdzS4v4pr5ygiEjeNGWw6Rd6dmZ8vDMxDdhV3TyHmjXRW8WFAPX7sGVdXA1XkHy6urj7SS3bHx1nzsM",
  "key5": "4iBLPKfFP4pbxH5QY8M5D5UyPxdRS19q6n7TuD4sNne3ZsNXtgpVSYc1XpLFSzmJc2N4D5fvQWcp3C8QhGJAqfoL",
  "key6": "26qbCu5zcouR9sQmCe5roj3Chtgzd4z4i5yCbMG3sYTGJjozep9GfwsAwbx4zzZU1XtrjqzgqHW7Pq3qpxtt5W2q",
  "key7": "5bf7h5yoVGRmrRiyB4qjbhpfcQspdZtQJb84HE1wH5JxU7E99n7H4699wpHorzEJXGn6kvJZdbpFXcSoXNjD4ye3",
  "key8": "5pTfc2xzh8CtPJ78s8cViD7XGZGmZE7NivYmj5V1SJk4R3jkAz4N3ywcY99qVKAKxhuZ7i9RNYYiffCZhNHAKtZv",
  "key9": "28jZ5nF6Sw8XZiskwjgnWeDYVKKTvrsafcNRvwVrRN9gEWwdeDpzZ3dvLRfJknVvvmMURfm5GgwZhypMoCXumwq9",
  "key10": "2ZdBbVLoT3HKJsojnCBJBR2FXpyY3ZD5juba3GQq5LPvjmFA8yeTKhrBdt4iiKYL6ruH8VNXHaBeDUkhjRK2GhhR",
  "key11": "2yi2sKfAsTzyXkPj1FbjbsSNsrwRvNvSGUrttFozcACULTJoLUK6vNGJYaJgo9kfPbyFHkYM2fVfpVgbEh9NJdgM",
  "key12": "31JUNX5ThuutXrRcHM4raoXH2QvErBe5oXUmh8CgZSmzCjNXWrn9wkG5gFXjUsZztx89LECjkMhu3bLo1nPh4WXS",
  "key13": "4bj2rMBNiQGUu4RWVJv2FGAHm1gs1bJjuu4HamAb65HAqXWftwdnje8AZdeVHqEK36fu12bjCBw4ijyRsbrb779Q",
  "key14": "2DFngDV1BGV9ty25a3BBX4gEDEbtsTu4iavudvCN3gN3gUk86sQ2cSt2ut1TarbBRyeMC5cCe6omPaxE1hkjcvSs",
  "key15": "5dJTW98YDWRk5mMifqTMdAXiRdDxGUBpsagEzEzXpHeijH41KpDYnkcpfavGTJGf4xeAjP13BLE7CGjuYnxfRzSP",
  "key16": "5bqfEsQVs5UBghCtr66n9F8oYENXZhs3hJ855PoLt7PAc2mejL4peAE5jRUPJsdUcg5ij2uWD3SSX223w5f2hS7o",
  "key17": "44vxhqqMGbpMaVg4FYUSxZKKxdEsWej82qm9M4aVsRuDDWzwmuKRKTHpWCFXgF4FCh9rAH57QPH8mwL8uXcEDynp",
  "key18": "4XuwvCM4rJRqtAqGjAQbqAokfZ1nS3MQFVa6PZRvKDUjGGFr255F7Rizs96EXXPCMjx5VDUjKwsFi73Zcpi5n7Pv",
  "key19": "2m396QVH68VGZrAmBiBhofDie4YmuGNWCfhEDCBHjBsZ5HWJfSmsLGwDyMEX4TB4ZibYKTGiKK57mDVDgsshxJd7",
  "key20": "bu4LVvkcFn6ykJuNef9CC4kvrAdeQAwAPXdYJFrdkmUMhwmPFqRwkwXHFz1kBdH3uFMFptPpnyebF6rZ7pcHGLf",
  "key21": "43RGTwJpwVtF3wh3jjSJM3N8k2JDEhYTvdhRm1kPuhbLfJgRiPhY8x4p4CC4CxKFXzBEfseq7WNiZAkPVNE56bj8",
  "key22": "5Xx65KEtGgS62YQqJmRi77JCWhkpLw9hi9BrcE7FHYEDuT56jQziPEvV3iCmVXgH5EQNrVvUGbjKmMtzs9j5Ew7U",
  "key23": "4T7dkKMAAetNaqRkzShFsA5deEf9VDXvPTFHWnNBb7Uk9c7maqhSbP4ZndvMYymQrpdaiVEgNW2WdcJywVrWC2mN",
  "key24": "NhoRqvM5JejAVoQzc5Bht3Zsu6zR4E4J7wfi4u3cga7YLZTsmPTscvLr4XnhUqqycHvDPC74tgEUJqPvLYWYGfv",
  "key25": "4C73VqjskY2taDT8gXfDxktQNrDEUoGPB2Pj9sREzVB7jB775cHc3UepoprNjsVCi3sS2XnY1os9m5HioUjxqB5G",
  "key26": "4B8qFs3jsEMYFxBXsMUZocop3U85eaToohgtgQuqp4sS9dut9e2RED1FK8gRhBnfzgwBRTtZdgfe53uqWESs2io7",
  "key27": "7dK7APqLx2QXf7fHd443jzMwCH4xR5omutMBkoFnqBe3VZRzstfAFrwjPeWGpATBMYSEQYyQSKpS1ZWNZ9bNfcd",
  "key28": "vHQamDYrLDR14LiAh1qymMmZ6TAKxNcRW4ZRAt7mtMPM1bBny5RtvjPhT48PWQJEaFvoLv4Bw4BqBMPdZzGS5EE",
  "key29": "4zcBwrtALFC4iUvNsYCgmG5r4NFnCB4gHnzu5xnRkxsHZQSWSLJ5hurjz6VEDRicg5dC8gzhWubHEGPKf4EJsnXi",
  "key30": "5Eimn3AgpQK73yuEgWK4SLjJgn1vRKHky4nYYmVvqM25PeiaTi8XTd2ZmvbiBwzK7mwKcMocWzM1NWVAXVw72AeK",
  "key31": "3Xb3vdUHrJWGF4LaqBUVjkgnPBKzVmJ7e3Z1xjzTu13ZV7YdREM4LN4SKKsV2woGNyVmN9yBRcsJGBN8DrVnXdXS",
  "key32": "5xGRPs9Ya1d2kgaypePL4CeiWSgPkMRxUZVZsjZQEbwTnaCHWPwFjzvwpVJ6fhTGQj25vxge2TCL2npHQq8DHnhZ",
  "key33": "3xkhZ29askr7Sh5ngyFoQ5sn5QsoVVtgdSu6n6x3CpFcJY6WScwqtuA6pzDecTPtqbTszDLGTSALHpWvy1BghgGi",
  "key34": "3eB8Sff8bgQKqpooZ1PBu2jhtwzMeJecJTUGaz8RYuHLMzFzJaPKqx8fMc4nbLdhank3XT2yS1wdKGvP1zRLsuob",
  "key35": "2G3cLeYdh19p7hXhAY6xFWw7BPV11tRosM2kgL6mQc7EXk1UQ4zQuVCjxedjJkFBWi6kZpNxcegyvwW5JPX8uJzj",
  "key36": "3chEzoJ14UCqbaiMGmyQDzE4V3MoStaChFDDeGFTvDA87w96Hq5FQQbeqeAVrfHszvWCdbVJuynNeKxvJs27gdLj",
  "key37": "4gCHCRBokY6Ye1b2fh1EH5ByvzVR2CMcpXRuZVYyML8T9g3fahQbRKtcYWSCv6UDWzKpewZiKDYbH64CcGBtUDLJ",
  "key38": "5k7Q83QkBBwVs3gFJ2yQhsGuuzC1QbGELM3UV9wXHggm3H2fRRmqkKtaFU5KJ3EzLjAsxASY43jbFeAZsS7dhu72",
  "key39": "43w8Q9yVNZpFn8cGf27VS1Vr2h2r9uRgFdNDLa8537zpfnUfocxXaeNeDronj87KNS76847rW4GRE6YYhFr4SmRL"
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
