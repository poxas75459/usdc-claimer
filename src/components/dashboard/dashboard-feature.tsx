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
    "iZnahPdLKqYvqPVViLtnDPNgQt8iqp2rKYwWB2465baH5WwvsJwAv1roGzUTupdTkgNxfV3T5UuchqaCD2AQR87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7uuXb3GzfouScMer4WevTbkyRY7Mv9VVJY2W9gt3maP9WinicKJLwpqM6GQ5wEgzx7nSt27drBxxCsfs1cXfii",
  "key1": "3W2WniQqC9asfmWDwtYsBZi1meaYaF41bwgd4To1vgTFEVi6fAegvZ28fp6Cw6rscarZgQJir6qtNY5RqfTHvgRr",
  "key2": "47gMYv3efAwueBCzKUj6Ehzb2jXDoAvwbZiFUnvkq6fVjX3emapjttHZnwCPSC5f3aU2u4NkEYjGe5KrMhrTe6kb",
  "key3": "4uQvV4Jr4Dj8Wd2xzqu3LMwgVz86qX98WqBPh59NtcRUT7Yj2mtdrqHXa6wf99zniibVWXbv8uLK6UEJfzzK4dQK",
  "key4": "3xaUdMnwewRDFGEUKrD6tjdU5QQBrKNHJfe6KP1C8tXMjN5pZJoLJNd7hdChUGrZpyyQiXtNtnQH7sDM596wg5RN",
  "key5": "26fCS6yuHdRmCjhKbtMdkYfc9Z7VufRrv8vKexADmHuMVwYFutKE4aCS1f2JdPKGBg1BKt3pPUT8odyjxJMNCs7S",
  "key6": "5Pe3HBJRHNdQw7zkorxudiq4vQPyQEjV8Hv8KR3KDEKtvwEkSmJeW1mysdmHGJ6sTxabzAfesmNPbLXqrmVUKKs4",
  "key7": "4dGjxGR6wTqVVrkfcxTScyS7RmAzQbA81NgvgrF8BJqTF29jvWNX9JNucN63sRsDqj2ptzWAXQZVTdDBvzZfuwUS",
  "key8": "4W61dPf9wzFzFxhs7yVLvjUAVMvPnAzhv7Uof8qQPHaEpaeroKGgt744sF76Jq5GoBqA65h2H5njLA2sR6t91yTY",
  "key9": "H3QsEGbPziqTPnKTRvSKjAR1Co7fogVNEg1D5gWN2yUEGjhZFSxkRHjZsgNVRun2Rkmj92pKvZE4wZSMjzoa65L",
  "key10": "5RYPHAdD4zyFuUfUXDPq2H3CJefAQsn7wKnQTBbXNRc5zChLdSpcvxiPnNHaGj3BPKwiwoWeNEEJ2UD4aSjiUnCF",
  "key11": "4QfpmwFzoRaEdweWAnVHZqwy52EjhJhuWf3PST3XiKLdYiy4RSeeVhcrqPfGLAg8CYjUEYGerXGYptQpUA5zXaTJ",
  "key12": "3K1fQsuZ6Hkmnx3SmiEMCLLFRtpqBmHM4nQXy8PyquhFkdBDySHRkB1AnPgE4RnBia4VqrEJzxcCaz1QhDKPxEqN",
  "key13": "122wPztZrbQuQXRa4XMrhznNSuTQyn6m7BF3NotxyprN6wskoqJsonVHkx69v9wVvmsN3PxEA1pyddXqA6mgLQWJ",
  "key14": "3NnB9oBrCMjzMPrx5M3CdHzwo1qhDUcJeFwzYT6mNxXksFJGAMvuj9zhtNEdgv7Kwz8FvBXSwpjM7354S3Avksa5",
  "key15": "4GxhFmmabwmYZcMRHu5iE6uemnS8y71YJ3r663PxKAYfEKAprGfF9gKQkZo3uAX3HsPk8EV5L1bdb6GsBA6zJHTy",
  "key16": "Lmq4TbX98UoufjGumqdKLdwqqW8YCiJQ3W65gKxAqCF4SCA4sqbsPZ8z55yQZsY8WhkRqwrqymr7zoRCRYeXjjg",
  "key17": "3YiEtp9JeC3V2RmsvmK1SRmygG7DBfEACexNJzqJSkSws8ry8PSXchEgkNBA16TAFX11eLknWc9SuFVD5FM2x4Zb",
  "key18": "4bZdG94XuznNr6sNHijAbCrV65pPByPxU176jTakhLLRp6BpTBFDSzE6kXXBsH2n9R1BZ7SDmYx69in4P5xQyPSn",
  "key19": "Z2UJh3VzkguyEimcuNsPPQak2pChFTHUkX6snvt24tVWPQCY3MGxzmrdfgQ8wQHAXY3dHNKEjhQ1er88uMP1gSd",
  "key20": "3P1nfHUgdEbHnstXQ1XCiWniaz5S98dAcaVqVgkt59ijCCwpuqXLf1jTBT8gQzT361vTe2M8Dbunhha7jif12DeH",
  "key21": "5FPo6gDv32KrUUtaRLnxgyMyMU7e16PPjE8u9LorqEeSU5rzqwva9NAVhSH967QcuVmu1pChfGDEnscZffkUtJnx",
  "key22": "5EjJZvUiAxMjcuTETu4P4rKkh4Lgqij5gJnZhyYCkaGedGY4hRn2jCxomEEpnnU8x9AVhaT5dtE1SqVpU3zdTY23",
  "key23": "2GQkVhyfA2RTNDRzkbPiZpNSGLxfAX3WxHqsqmU31Cky1yaAf4yRWkHaRPstoo3toKPidyb5e5hFbdcaKThz6aXC",
  "key24": "5rUcSDAvZPZ8ceNPQySTnXE9m2H6WujZ2SoC9oUqkMGV8EpynTiErrrx2WQnzWaxMBXyUcCjoCogyBjm5WJa2uxq",
  "key25": "2hYgbW4R49wUQoxyopzZwLtyHaqg5Bbv7QhGp3HdgSHZJ1xtpcj9ECRKMexhvCCGFzxUDESHZ9qTrA49UL8mq5Pj",
  "key26": "5gY3e87Hn7Z1ZkWY81uPcWJxrCZEPN35B9ZDfmk1z53EDgKeqsPq5RbVWeg7yJZsHcnE1CdknjnMSMepReWuJtFi",
  "key27": "5SACC9LH2L9sxrC8mYthoU9bKEZDe3rYsJNF7wBeeqncELr2iYJXpn4s1FzK5bWhdGQEUfk8GyX8HY1NUv9hVh1H",
  "key28": "5fTi4yKrQLU7JyCd5ygEnkk5ZyfnCiLWJwsBkbbqMVPqNUCUuteCaxSxCVsb4C4qW8zv2Wrgv8SyC1toGMvumreV",
  "key29": "2mQykKBwzhaSWtqbXDgiPzv1jweHMMQuuArhJ8UZauxa6UucvPGT8ojh829aNCaHP7baToUgBncaDC4drb7sSvee",
  "key30": "5R8tYyKtngd492SsnhhBppMT6mDNgGder7aGdDabcAxpnKjWZUiXgwANSEWrNCY17nQUB3hXjQp5DaogFLyXY4Uf",
  "key31": "2xQtYJyUKUUqE6paDJYEYQq47Nt4MVsNECWHvCaHTwCmhBKuj1ECrRm3cV9Jau4vwc6RANiWXXRCsZhYxwcETVmF",
  "key32": "2UmXikz4RueYX4crezYnyL2UVtAn42i5umWKsFoULH8WWnQ1EKBcegZ4y16Y2PtTkVJBgcPy55tgRMBXi5HsZqda",
  "key33": "2RdhPd6qC3MMp7ZDntFcbTzy1yDWutg4VLF8NZVSj9QsExu4isEYuQyWxQa6Eaaqu5fqXD5cC6tEjC3LZRm1Jxaj",
  "key34": "fsT43Q4FR15Dx4paGAw5yjs11UuEtBZpPvooKvYeiW8akgxS53fLiyegXKswx9KGbTwoconr2C5cgWm4YcZB7y3"
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
