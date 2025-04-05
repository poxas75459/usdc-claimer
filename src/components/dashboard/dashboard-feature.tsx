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
    "4MRqEyaYgxSvi8r8Hr1boSK84G32Jt3CGSxbrXrbfHL64VyfqjrZkfMAQg4ZnVSJgFaCYp4QwNUbnXJxkKBWAq9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QT17GjARuFzHfn5Cr7KcYGcHQaJyrGs5jU9MNgQcSeVT2RKarsTqyXe5XaaRGwmwF3zUfHeM2cDhRX6ges3Bjsy",
  "key1": "gJcthA9yNuNp73quhbeipUnReFkBPXCkTRP4iGKoFQmNXkGS3kbLWqC9k48A1jwKGinQQB1uBBhZsQNXYMmB8vv",
  "key2": "4Ks7834gPXyb4VA4AenwWtUgq2zZzdBUKHnHzN66JdBiMX9mGZHvvKYvgfPbRwSKobFwpXCUtwY8HprM25h4Fbru",
  "key3": "Nmf7o6x3aHCQppwS4fJyr7ZqF5kfwikMPzB9P5Tfs7AXutEZJy2YXcGAYCdX5y8rxzDrZgcNstJCeCbiDPpVxE8",
  "key4": "4dvrTkiPAM4g4VQ2s7sS8SGj71wyPpekjJEBAHt4SEPNqnmCPjuqno2nhdj7ZWtiCPsfwdWSCbwoSy2JnULDKaAp",
  "key5": "2X97kEZFhhfatkGCcEk7ZkRLn1gfH1Y7SN1LiyHrQDVvy2kbzpE2gyMvFHAd28HidrJ3KeGfojRgdsXcGFRW5owc",
  "key6": "4hkgMdnsTH6dmek1VXE7FkLYwGV4hr1cBvHhAfnWx7sdAss6y5ECyRgwLvmwoFo2eAhpP8YHKoQe9UrKpTZMDsQH",
  "key7": "391CMy7vVcYBK3xExAZYYSTZphFn8cfeWUH2N8YCubSKykKWFesaKMEfVpmoYaaCc1WSgaKmoc5ncgVgh7hsoSDD",
  "key8": "5Ru1YSvJNkzaxvxaZ5hhQUPfkR5MH6A6iUEGQqZnCj7Ggr4wCbi4Lahi5hDoALrAHggGVEYa4aT1QiPUk8tMbzPh",
  "key9": "3ih9eSqkmZTs1BQUPfEQSCGmwhkpsTGnuUuctBkNFLYJNkeemhEojoMbBZV3cayvKcRSgKi5vSHN5qQBVb3sEUDJ",
  "key10": "4cyzyqP4ve6Qbbo8MHqVd5QMvnBoRYXvxPbEkFgyeFrKSCf1a7tNJ9JJHu82u9T3HSECUuCg7J3gLHTwm1JCMwJB",
  "key11": "3Nd6j8X91vwCj5pdQrMCRBCNkv4ScVsL5TLMuSyGzrgFb4NTn9Jut5kPiZEFPnDucYqckH1pEbqiURZnADxszmng",
  "key12": "5MzRQ2QevPvsFgDTTqYJCNq8Yf2ekKK1gCX6TUAiHUgZifpRB9SAdJcyiZZhFDBy8HqJ2morBusAf6LT8YgoVxha",
  "key13": "DnMfK787VRehNEaDMNJFyfaEbjvTv837tCRmrgu9KC6HW2GE3aRpxYjhxkUXoRz6YdQ81DhcmjdinCkEdRZdNHb",
  "key14": "uYnQNB1HfZEaoQgt2EAK4wqDSjcfBsCVrHoTjHjZ6dozeXb1bAGKSto7z2WNcF8sn1F7p49kfUa8C6x8E75RcNB",
  "key15": "2zScZmEBDxWVDCZmkk3cx63GfQ229g8s2zDzCYub2tzcSMoeWqvkCsL4RERLrzW4NtEVR7GpsH5U2vSiJawRt76g",
  "key16": "4RzbNZ9hw4gMYkuDa4Bb8iq6AiPdxVgMk9thEZKkv7Jyo2PFPmPKXGRcWxWmisZZJEpaRkyBQonZ3PL6PjpbUEzz",
  "key17": "WrxgU7tVDYDcxRLBG72nQzqvWoTrsSzZ71eGnWZSbiQxbkfNTBGoTYwBgTdg7RKabmdo8tauu5zfeZ1mhnesM72",
  "key18": "2YxGub9mPBxTNQWF4L4MXBcbWFGoNqKjdvkof36nRcc2nw6Gem5ijgcUCm6QTDBrZ3aNYt9VU2wq111jbgmmoncU",
  "key19": "5Kj7dX6uG9izbavPViQ9N1eQdqCDEbYeuyzN94BbvuXL6eJREt3iXtH59CL6YuAkMWQVbzJociEsQXsDwmpUtr65",
  "key20": "4y9ZVHPWvVSayYEN6A3nwcW25fLFKSqW7GKkMuUBYvtuzWRf4F7VJVco7sXg1adq2S1A6UPQjDBZDjnWENkCiWRR",
  "key21": "UrwFa55433J7n11FEgLijNQL9srcexsY9cSQVS5mHwZk9iqqMJeUpFQNc7VRkMmq7TkcN7eyRXV9H73VR4qpmw4",
  "key22": "39LtyuLMaZ7JreeUJnLQQ2SgA45i8yhou9i29d3uwb1vCf6gScbWNsoJwozajj6AwCUGaf2r43i2WzvAim4yR8Kb",
  "key23": "5Z6zypMvy5ejJ8Ar4E77igQXe5Gb2zimaRzvb5iGps5hj9C8gKWrE3XzafMxqbZPuM58fagAkh5BVCbGV72TkYiC",
  "key24": "2tdepcKvHwJuMKDSKFjPHJadmhnQo8SpBNRy6geWrATuANcKyb6W7ZxhBmB2RFRiofzzb7s7vQvdfjZaq1FKsaA4",
  "key25": "in5mdb82FjhoRMNWbSmQjSgfuKswPFv7KXGvzWhfu83MaU6nr98HapnMzcNRbTzDYeDpQLoSD7P4hGbLf1jGjNe",
  "key26": "4bLZeQU7Q5BJkQ4uvoCVW7t4TWzMhdsNGEdRr1E82L1g4qq7nBye2FdoVDkZ8QCw8xwse91WfE9FaETfAGecVtuM",
  "key27": "NWJVvbWhD65FY2ZGhbjpffdexL54SMQxpLFoybBVTtuFZLrExBL4qsUn6UALgZHpKViY639esJyYn8G2SJnWxR3",
  "key28": "2VDnrRbnjPpuCtCjEF51DCkyzJE99YKahQF9cH3cRA11bqfbrtdYngPjyuP4CcBWvDio7gcoDcU147mgVjZciDsN",
  "key29": "3wC6PbHiogJ76vN3Zx2trNc85PoZAqzgSGAfbca7RmxrqTPsigATXg3iLEGSLMRVbqBp72m7KnAgSqrWu8NG89nP",
  "key30": "5mchYCKzoYon8S5Q2iLcoBwANRax1A6J3FHvjWSybNEcxu5wGE4U8jjrY1m3dVfQapihvHhdkwx2vAsa6nmu77fC",
  "key31": "4mpRh7aVKyaHC7FmKdLdcSKmj1r7yRN435PdCceqrAga7HYQZ59pGuV3yBxMNDAJUSdx6PS9q2REnSUmkysGruLV",
  "key32": "4vyKTYtjt7z5uh8y3v8mfH2DH82b3CFMHBtLLxmC4cYP3t5HPT72Cq9SP9a2A5kCeArwP2N7cDT4UiWSYLby9NwU",
  "key33": "2LffLuW3JraHgymN9GEKuMug2nEfyirwZWTAQEiV6LNKj5vZqC4hbnYDt6o8LKyrXbhrmo8BvZrAhjeJeffYUHXZ"
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
