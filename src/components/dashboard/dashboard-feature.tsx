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
    "5DyKxYQ3Cp81tzkjUtqfAtT2jHGbJsznpSZtWPgbf4eJDqHn21ZN3Moq23QsKM8u4LGH9D396esBg9HnX58nygLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UZDfir8PTZHyHRvMAXf2udU6BwqDtR96ERV6MiP9UC1n6DV81vkaWmF3tHQuJkmANkB2ps48jG7vQgydqRwfUBL",
  "key1": "3cfrLofHj9T43Vjw62pfeUu16e9t69LxKE6dCXL5pHynoZ1Xz5kZULcndPeMtrjNNUx87uD1Tmd9Siu5k8bKEGW7",
  "key2": "xVcuhJNsjwN1e99YDju8iXMRRGh8C2YEVpgeAYQE9wNKg8BWHDZFNnY6jMZVeBi3Ha1gFjwhj7uMq4MZ7UTLToE",
  "key3": "pYGGd3DwNBuGgbCtsaU2bZdKjWDUCpoBKLkR6a1EPg8s8FasPEirzbp6dmqwe8tn22LNrXdDJpxE9ufyZh8Wv6w",
  "key4": "4P54RFFofSQ8NomK27m7a3vJ46ZzfBi1NSMM8NR8iR9JZELqD8bNzTKBHjN2Qd1aLQbMjEDHDo6vzmU2Q5efGraf",
  "key5": "33a38xq2y4Stnbu81Ygxc7SfHzKbmXpZhn6BzoLHVi27xPv6vQyPxZSwyQV6dMokzb7zCPcLwhfRAYXXurrjMkva",
  "key6": "2RwTEHjKyEHaUfWSLbs2Ve3g1SxXJWstGFGA6ZyhYGuTkuVNrNDkmZkc8UE67aPVhao4bXhkYRSPb5yausxGWZig",
  "key7": "2YkyNt8uWpV9YU3p1pE2AK2ozxp9YusgkxXceP1rY8sqspChLaiptRDBP7aLPnM2JttP3m4VxT36c36ctMwG7qbw",
  "key8": "2WfC5K1Ccn5X1TsH3jyXYKi6wPuT7be3cyo1WsJrHbyPn88ZH4hbWbh6NYsGEu9LmX66yAUE63LCsVTyMs2xUiRA",
  "key9": "3oMuSnPxdFdoqGbczBmq4tqy7bGF624a3MqSC9XvUtxJXWnicCTS1XF2Za8ankDWbCGjsJScNvi3QWWBDTA53JMZ",
  "key10": "2PVkrW6E1vtNeS6bvSWhbUy1avxa9TQ2BTnp64ATygfamR7jvSXcaEnpnTd3UDfX3be9LxUB1w5r4sMk8JmJFs19",
  "key11": "652HA2r2gV2Rxk8TWnXxrUBh9FZ98Rkc7s1S3qjnhcNEAvu5nktdwCCsnLwk4ahpDBAdv43p1wB6TKWaTfxcpKEV",
  "key12": "P5Rj6n4e9a4HeEsehUP9rcsaAM14Puh838YNu5qJoeFp6tRfGQNNih7RtfH9CykaFJYCtTqaYeZNhkZp84hDZAv",
  "key13": "5LEg8tVBbBj4wGgU3U5wvepqcWSnbddW7etoopPRYAnrAGY1DBcUooi7twzcU3Sf3J2wGQB9d8XUNNEGT5cymNSQ",
  "key14": "5uQJ9jsEkcj4JH2BZRC3eqhtMoqWcMrUUbMqmYv3JDYZ7VFFTbM61d42FREhZj9KRWenT5XUECP53KxDs3eppE11",
  "key15": "5Rv7gFEmXH3SaVKKvdoV2MDN34zuKgum5rdPHLZ932h1AZ3N2yc3K6VbErdFqB6h9wmRxZx92w962pKreDxs1NPV",
  "key16": "eDZhBVHrLe6rKzsd1roh1LyeKkmv5xHfysvmFiATZeyboNEkMLH5PRgbctnX6mJiWQqhnqKmfiSihzAxn76NYtJ",
  "key17": "5J6y1xje4MG8GA4DN38fYn6rNdMpbSYGbbjxgSr7VQbU683BHMHssJGb8KEUQhpG9RhANTzUtH3Xts99fdP7Vndy",
  "key18": "3McFShWTWTPb6tnDuLFa8gmRmEdhWGsGhynFXsaK4vekP9eZG721UnjXHUtzwgpNgtZEEHAz787g5g9ffqeKEQZf",
  "key19": "5j44XhTYEi1PuyRUQX1KSZhDPLSLzodf1Rz1yKDhUzpb7Q4ScaHrUBSSMoVq5a1z3vd3WYiGYtU4wSvMiVBPQDnP",
  "key20": "Pb2JPXLf5dUazbe472JhVA4SnzqZy6dKQePtYLduNrro6wFzWXWsyk2jSJKkeMjWh5gDV5gE1XJECnVwvVdgc89",
  "key21": "579xvERhnpeGyvcBvhdb7VvHxG7sLB7RXrzdPsseiyVp776DZXHzQHhEe6csVBoKXqpkDSGFDcWdGkXPtGzaFaYR",
  "key22": "5N9pXTvXpPybuSKYUwJ5xfofYaEd9BUFRWKaiDtMtwsAe98piP8Cd6LvvLn6riWLNh7kB7qkQfYQxbiK5URWmqjZ",
  "key23": "3BsVEnecxmWfb98t93bamgjttxqqiNqrvsPvBFh5RHpGqAxR1x9pGq9VMSPTgviQZJnAPjCMdCMsEm8iDH5AaCxR",
  "key24": "58PjUUu1whVEB1bh6TxzVc2MjMeZyyUZD9QEYdgjFzE1wKav33aWCo1C39sH6CQaeDv5DhQHNqURPJ1Dws8cMH1Q",
  "key25": "5ADEzHjUEGGJp5TpSeaphZjVsJzZ3wbsLECxCAHMWjhgpsN3d72rLiyEyWdwAtNKyCF4iG6c4btLb2VFJNAv2bL4",
  "key26": "2HsDbH6namAgQcz8d9gdzcbUPgRC5c6gHMndHtzTjC34k8DXh78rpzvH8faksUJsKjBKZAqSGta8dPSA7FZKZ8JV",
  "key27": "3JktpKNAC3DRbFm9UBcwyus7PJbtMH51ya6q1Mp2cDhdefyps1wJ1Vw6moL3dPP8h66yZVsekhs947pCY3crCCtR",
  "key28": "3R1qEw4yMr4idvW56vLw4zMB2tQuzgKeeF6Px1J3Fjs21ZL3tp84oJJ7fWd67PyKAz5rdRRuCSbHzbXyuQ3wQSpy",
  "key29": "3xMAxCNS86DKRRk1uxByDrpgLZSxDNqDrEu4B3puYUPWzcmFsw7jkxjkhxig5FyuirSEwUPe2JeBBcgggQHi53aX",
  "key30": "55zRSAfPaPb3UnMLNWqekABzXdokb3uDJwmFyL6VkqytkgCB5gACbg4mVZM6QPthR51evxPRsWkexra7dM7snFv8",
  "key31": "5MAnB1i3KZmXYPjbq4yGsghgWeiHXCg1DC66iNRntZhxg9XKTuJp943cEtBbXnBFtUE6CSAPvAtHhkYXuE8cVawd",
  "key32": "24nZPWXEdumnzKuHJG9FdPBk3yaiumQj55oUy1K8KLovBWVNCfe5hWcynJpWt43U1VzDBA2ZbZaH7hYH56X3qXgn",
  "key33": "mX5L4akZvWTijCixPtA4mFuhYnbYdQwpddZABB3bft1zRvGeQoTRuDbJEHWMEYFkWzuyS7ckDZEdNpvt3CHpqwf",
  "key34": "4KPuM2XJeVYrY9YoyoVUYJisNLcrmCWrZSz3L9Ky6R1S2auAEFJudfFWqsh3MYMJ84wszt78JfXmzL4J6Y177jcD",
  "key35": "2NzjcTHWGBxjJN7FgtPCmJxSZk57xiXWHr4r9wunaUFLTgBeGEU8oKG6mms9VucaHVXbekgvYNyUa3CLRHYSciRu"
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
