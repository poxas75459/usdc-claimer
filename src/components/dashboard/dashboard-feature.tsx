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
    "63yUqaejqu5hGSER7euCtjMWBAofBcTWqinTQ9DedREcxaMM9bmTKDbwdGdcEzcmppVhwynPB6curPsftKcyTL6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53xCKVZsgshdR8fTfwfzhFHoSjVNp2Groip4heBHrRbTC1zc5oN3vJjWwVcuhfB2PeTQsxqMXCeYMTymUh4xUYmg",
  "key1": "5dq91Wu99LxtDXKScLgdC8ar8SLqKnD13STMPHi4RwPTYQakZHpZvvjdrifTQH5fkLwYGSqAvVQpKCnC7jy6C1Db",
  "key2": "4AmNK4GeGPs6fYdYWPKF94nh1rdhp3URYbJuJbxLpQ4Ev4fZBeFf9GJ8GijdDH73WQSRN8mp8mtgUK6X4vMmLohX",
  "key3": "3CZ1iJpC3wTVtUSf4Aw6ofNwosEkK9N9Spy14t62jBU6vCqjGYY5NpX1URtokhWffxumNNcmZS5wEg1aDjFzNpm4",
  "key4": "4rj9iyYdEqpDX1HFUbUkXV9Jc8LAAZx94gEKPX6GW4zfZjEY5Cwy3XN7SpuXdpRCEJm51LqeeZKaSXqF3DTym45F",
  "key5": "58JrCGFwes535MPcekqXqEa7GD4Fk7MqMXqLXiM58Q6bKhp6Jdu2EoWXCac1fctQstbLykUt4dTyeKTdj7ERuf9w",
  "key6": "3nC1y7BFQKGhKAApH4642TcDVuM6QjbohAuXRfZsPnSpZcNHEV63vYSXfAEk3VRJxfPqNJWLe4XqWoQDtvz4T4f6",
  "key7": "5f76kyLEwXVESM9cEdwXwRhBXJFmndZNNur7EHV7rRhf4LUhcy9Dr3j32s7km9cxMwM6KXWUjrJQ6EQvZTqGjsDH",
  "key8": "U35ydUs9UxoyqpwUcE8FvKFiSK481bhsnn3HXXDUdLqjy9xGB914kYETNbAf7ZSbN8L3ErYgwuQK5GVtF8k6CSH",
  "key9": "4cXwCfKt9PF8vqaskQWFgNPHdwpCyawCNUpX5UXRnfPwJgDeYYCuFAiRyv395ULJSAM5BJWuKTrD93HBVwzN7g82",
  "key10": "5EZ11fbMvHSb1hCvMxFhaeFQAXbBHsgw1Hg15Xfi2oQDfseZnksJj6gkXGLQ3gDzc2HAZcJrdm2vHgjeM38vpTLm",
  "key11": "2Y1nyDUhZmx49X48DTVnYZb4mKiG6d3yfTHBRQpKzUbSn7Uo4sQKoipfUUayfDgs6w5zhhDwiQqpmtVDaC1xkSdx",
  "key12": "5852neiK9pGtSDWSvzYdRC8ydSRkLw6vigY7fFNu1gDBZbgtdHU5aZUrXBuT3qxJZoUTRtFa34qYKpaJLW56dJJB",
  "key13": "3CD9WDweeuVPjLZ49DBZtgM1EnNSQxnrDKvPZYEbZv3EdfLETdrJPrbQd2dcmBXhVmc3SmcANBQejnN9kXfaL6Eg",
  "key14": "5iJefjx4eCuJizpdwKd6wdqacwCrSSPrZBirjT3YiNo3gVq91CeKezKiGa4bn13JxJYhutqQnhzHP34aYezmYaGk",
  "key15": "3APgzqmFPbrzZvzv4oSBQE6HwFugzxwGbqFiPYucWqGAXib4nu5xRrgkswzjvTUQjsmXVfkprvESwTg79js8wZn8",
  "key16": "5ynnQWB79SXptsWS3hqzqfTRWAYiErCUqDNeeRATACxqprpjUyMUuHMb9gAR5djoEexWvChM5eoS6uXVL2tJFVsL",
  "key17": "5hraP9xmUcSZDrW4y2TtfLU2FRamCFuSVzYDLt5Mbvv4AW9pymPDcRLFkEmJijFEP5JKjxsWs3rvmATL7ZxsAhVw",
  "key18": "4gvomsvmzGrhWgv5WCFf6KjTkPQtvBHaJFtiSk2e61niwxaYouedm3jGDK9EFQDUFfRbVxXwJfHofx6SNGGSeDgF",
  "key19": "3FW1k7PBx6pLDNk8hDyckAkD43B8wdHo2sUVrV1t6HZquZFi1bWoZPQ5q1ToFk5SwAgUmbdyo3vEYRGrzBo1HZPo",
  "key20": "34Tf2BLQdHgw8UcxFvieX2Xfa6gi6X2cSsirDZpqWB65Y561w1izRoUfVd8FBh22ahQYixzkpwSLFHr6aQQKvSY5",
  "key21": "yHwVuA5TpEbfDmqKMydAK3QRbRAbnj1KDz9FekrPxqwkbRSiMArguQZcLigam8zRgcMmnh1n8JVFzHVNfgHuJaV",
  "key22": "2U96sgFgy5VY3MXR9rbs8XxaeFPY9apjvd6FAnTozDVfHKy2DTtc7yyPKDfWAhJUfEz5jbzhPMSDtErMykNx1CoW",
  "key23": "4ih5nozAg8RZR5UHbTSSZVStzr4WaSvHjhGYNN8Yyudh9uGVE6Yyo5LikzJTZeQjnbEHiAVSSxFGEhLujrMR5bW5",
  "key24": "2KqtGFL3XYXExWyMgNZZBZWs7qmCQ5UYe9r4sgZRJeH4PX5oiT7rj4th5zzDXES6vFUfuaH1P7XqUamzy48QtXea",
  "key25": "5t6Duv7omEcc3M4R1xNXHV6xdMWRXsYc8v6YSiD4ue5h2Cijs4kJdeKe85MyEA3RWX4N2hYbXGfhoJDb8vWTQzpi",
  "key26": "2MJSFiG3DgiEo2x8z55KVj1XTAcx2WG1zb33GffaqhRxZfXnVceB1N5ed9nMes6apafk6SWt8ccj1ASNBBqcLSxB",
  "key27": "cPWaaE9GyEqHLFDG3S2883qB7Zg2uvbiXHbqRodnsrFexmYu5dF6HbApSae7qDSEWmXMZhcEbiygPgyUwX1NU1D",
  "key28": "4hmfngLvAFEDm4agwvh2g4cS67fjJ4cS2KaKKWg8eQNxgXCZyj7SafjmPwo7g7MHAeQMXb773qN3aS2hTFb2p4pR",
  "key29": "5kJNfcc9SebGy1oSid93JXx2sDKCZC3jrnfGDdyF9MoRRPR9ShF12Snc9WsxT21HneHxgxYHY1ABGzUdDYBw13F3",
  "key30": "57Xrk4aPSFdyrFR1mgVgUm4uuT3FWfKrUF2JKAYa1aQc5jVFf7qyvT4rW3X1rS3yYLq8Vs1RZKJdNMpQCN4UWnMm",
  "key31": "2NYGBPo1Y2dSJ2HP3KPRyPJdtuwGtC3GTvHrbBtFCCG8Pkjb82QTNNbQ3fopqqbJsPwo1AJxoZYaQoqrbKpwJ8Sq",
  "key32": "4DCQBESUqud2Xnpx8bRKYq2qfSXgJWhN5sMRoe8NvZKBj5diw9jqEG1ZT8uwjXmvWcd1zKQ1AoC5iN691TzyYSL2",
  "key33": "63VnYZiVA5YA1e1u9fKZVLfw1J7SZe5xp9wHY1oGuHCS7inxkw9bND1VFYuNf3LADxgkUV6vxnK8kfhYHgkLrq5b"
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
