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
    "3zhgM26wzbMxyCMWqSfmRaH74LqWYms9RR9jZfNTm7kQvwzgFiSuLjZgXh9wpUQajz9Ky5XNcfyPHpF6FPEBYzMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ksbQDp7Y71HDjev5MbK7tsYufqJyKHE2NsegzzMAAhWSmkPCw2fqqFiimzoNci4Fb6BeCWHVoj6cdt4PD4Z3SL",
  "key1": "3UTBcnK1rg4zHhAJevuhaW7hx3ZW1HCg5wuMHBm2Y3LZJcmugmEQ3ucRJcvctdc3SKp83SUsaLErLU2kAKjNpTSo",
  "key2": "2wwBweoVVPMWeZmtkFJf8Wah6GTfoyBXLJ8ihQsvnMH1xYFYQSKjBU8CJV5aBfEgJe2d1sw3PjREVHoxPsYUdfy6",
  "key3": "3eMg2LmZb6TGCK29kY4tgzUyVcvSZkPQ2ck3RFXAeSY7vYdM13xeBWtrczhf8LznAWyNDEnphhsQ3TS6RexXMcxg",
  "key4": "4NzpYRJnhHCrD8VvjRtDGPYyT5j2cbaBR56B4Sap7Bjk7Wdz4dSwyyfpwAtgKywHCQ6qP1Ep1HXg66ZfAE49VddD",
  "key5": "R5b9ifA2qyr6o1KkfUjNCaPeVNpxSxGzdxJqdWQeE6MTWiy7YJcWvVowYuHGkD5uG5JzHH5ZGmgiTBL9CLEFxZB",
  "key6": "5uPhYViP455At2xDrvgL5sAUKf1sfo9ja51isiJgYHabYkvsKKMxxyLFusTZhY1jgU7fYuc2fk3BoX7RSggQMRLF",
  "key7": "7TP8gW7g4DAF1HPHSzhP2urNJE3TNUJSpSSa3Vm3Sq7McAhi48RqJQ2np8odLvVvB43ADC8sJyQHqBZduj6YsrZ",
  "key8": "3DBbNgVkuY5cVbAU5w4aw6kJMXznVdA9A27WBZpBATbye5Xu2QPE5P9XUjHZ2UREtpWusjuE1oy4cQ7tzPD6Eugu",
  "key9": "61iBKyN9DWCNKeHSZEJQ1e6maZeJXhS2uULA1MvcGAndmwiMZ2c4GrLVUCLcoTtMzRJenaiXFq2BwBKwh6yXJJyi",
  "key10": "43VEVDPoqbjqh6iFJoF5VzR4Z2uYrJzffmcvZRyawcTDLE4od7TQe9T6qCi3kUrv1JoXJ8yavbRmH4XHrjvFSAKJ",
  "key11": "4mf6ndY9MuX1KjBHcoMCEnkkC26mBjbzwoqXUhhn6PVwN4TP54V4hwmRB47Py68BCLxSh8fg89Tsei3eMSZfm8Ed",
  "key12": "YD94tfLDfzVfx9CLRog4t3maneZcwrNaqzWkuTAQfzrzgkoKRuu2GMZDxkRsLfmCqodLQY8ZFHKAddcaKQvmJg6",
  "key13": "2ahVGnLrT4p3NKzsC1v7xxWiXJNSzG9UsrCAw576FvFpeRvxLcC3YPVv96AduD2ZaR2xL73fxpwNPNzTrnWcahr1",
  "key14": "34yXihk3tfMmwrn8i63Nficgk9Scu2FvFjmLQpjVLnyMmTvymMB6pDVWPWpRokVPx3kb62KarYRaZa84aiBAyqys",
  "key15": "56f66EoPXveXUb1TFgc1cppCnp4yak7PtYgArk75h31p3CHtPvVa8EYquBjCGbQ1mKiTaBpwSghG2PBqUqXtQTYy",
  "key16": "TCu19NehRiXZKz8ixuqXXsP4QDuDPCbhDy91EdWkhjhyXxoyJg6EWUDT2vSgEPpLJK2SaK9BaKUWEXmstBodj7V",
  "key17": "2ugv69XX8ogSMx24nAkhRgL6woooBn57Na4N9Qesf6t4BzxfcJCU79vVtgwcRYe6XuSZN1rTBZc45QGJoEUiBxMb",
  "key18": "2Kd2YfufMPTSPZcz1C564s8dTSDB6vqFP48jo92UnwbjsYojyCMfrsPuZe3aWaTMmAY6eceDo1JKRfYXAHkzNUUC",
  "key19": "4LNjqDk1aUYnvoJQiXDJv9SNdmq7PxXi4abb2D2Y33Y37WLwJoMe4hcWDvYuHhJqz4WvFyrEz3wqfCdw2r7ZeBwz",
  "key20": "eXe9sNXEWCpPQKcZV4GQFBYsQ3va99yiBw37sn6Nt2KNqzjqCEnXZJxgHgpsPQkBYgJoN74TdMFYBiHjzscqMA8",
  "key21": "36qZAfELUFsjhtnZnU3gajxUzuonGhFxS4xchDNrVNGxATybK5yQP1hpCsU3yLwJnyR8LqmC1mHmjpeteRpXsBzk",
  "key22": "2qvNDKbE5KnJMe76b6gikteX1vAnudaUQrtzTwxLQBoBZYZSPNXdgcBFFH3euP34muamNbzyazNB8xk5orXCmn71",
  "key23": "45mgdJNrrR2tpfjC9H9UvsUkuZe78F6h9kuH5TNHU4wZhPfvg9JpihaXEoNRq2iPYBbGj8MBEJSZ3mej57kD19Ec",
  "key24": "5HrgMj5ghDALGZkM4AudrXozMWry7yGH4Zm4JYvS5ADB18CDNE5ZyKa6SiGQ9JnktA7WUZ7aVmxuxhXt5M6vv6dp",
  "key25": "21R8E7Whex2ricCmyx5eq45PdsLJcwgCCw935VPXg5mkW8N86fstUb2KpVTJeHJvnQomhE8JiLPGHw1rJ7Ux4jwx",
  "key26": "3AYTtuB5mqruSMxTWo6orNYYL2D18sAgCs4Wabcyt6hLHCbRes1JXQ8fj8cK9FLXxrTQQreRXP9iu6veV9tYV7YE",
  "key27": "5vuZNg1yRWH7VxPbT4dSsk7i4AVJ6WDjQ1ZLnY2cYxmTChCdiBn3c6Wabkibpg7UYijyHJYmf6YKdAGSRdxTwH6p",
  "key28": "4M99c2BTnhpmW4miMg41eEEgnEY266ihoRkzaJfVYjyySr4izfXMzNU7GvoSxfoNHH5zitu9eBrFCmG5F944c2X7",
  "key29": "2u3KVrxugy5wP4F2r9KHvWi31rKBqNuyTBKm3WZ1y898uqtdzpo7mazrAw7Zs44QrWzsrm4YErSmpbzP4xyf3baC",
  "key30": "Mu1H2r4LxfRA1AUmbHcyCqzquzWcwvKmx5dsd2wNCACBuUqXWrNsxjYeLhpGFaoYDWRg5EXyPQ9QZa7go1DWswy",
  "key31": "2YUJKETwNJ81onqXmoo3aPVMyW8W6CrN48W1vxDkmCofNZdPEamNF3fTwRCF3J2M2SX1CXcdRoVPMRYybYVm3oJk",
  "key32": "5iZsW85ysuFpouuGsML8rniimVmfNSb8X9GXWdJ5ih53px4YX1ZXFEeDnTF1hkNUb1msA7FFUM4PHHMfnTSnobvD",
  "key33": "3ozBojRnTZmtp3tyJxVe6baLQaYzUUeivVPJCJxE5EPEiA3eVF2Zfq1VMqZXCefpK1Ycne2fPNQHWVfayaYAxAVU",
  "key34": "5ATs3A5dsgqo4HH7ty9D5BQhMQZpqZ6zpKNCr4gzBN7Byx3nvXPEB5Jk6J9nvkW2Pq2B7cUCwcibWsvLE15tE47o",
  "key35": "5jeKkS2ftwFAYnfg9FAVge2HsPiUAPANKuiqkhPusQhaiUxBmCqaLgGUnDjTRzMREBQKQix2MNtu9YD8zw2PPfPX",
  "key36": "3k7baDJihnw3zv2ZXNbnWRMyFPgd8nA6xFsWxLtrF5rmXzusjjoNQCcAb5YsC4vpzk6KKCitTRKCPvb33KtNo9Ph",
  "key37": "5hxahS9TEqaUz2RLQs7b5waetPdn3TeVVNfrDAbNUwts7AQBkgfnmb4wKbegWcKbFbrQ7hjQktiez3FrK9AAvEsG",
  "key38": "2PPoHgMFPkMaMVtUqmybfwtBgVctFQnK2LmNz8KsCKscAJscwYKDZkG7EARa8Gx1923XufaucsvjPxTaKstGHmJy",
  "key39": "581SUVLv7zuoXkiVhTgpXfSP9fULe6eZwbidjA52Yuhn2HeKSGVU4N2ZW4oqukvUPS4R9KR5wD1XHm8QRQu7BPTG",
  "key40": "5abtnUcMDS78yABZfH6qq8PZySBQfFBBQxj1Pe94rzXLqmaypYod37bHQR5LhVBpo3MREq2o7qCMnTiW6aeaJKX7",
  "key41": "5FqnKtvqbFCmKqiyeT85fsXcLUi1nN3Vxg2TbVWRFMvCFWZjDUL7gu4jfpSVa4geHH3C9LVuAxjo5SLqVzXp4f57",
  "key42": "wbBM2BUfRAz7CsN5bPvdcVrRThjDi8t77CHkcbLv6HHWK2SPVDQtmFSJZBbhaFNbwLAuLQBwHVGRDxhLYstX7ei",
  "key43": "rsQ71CtkEXu2esarmfbZy3PxcZsrhEq4pjvDWT7WymvUD2SaTmEoMcYRbyvQA4TBL1DtGEdYLpKvMhQDp9ADhXe",
  "key44": "HNkj5jPLaFqVgQrM9Kke6pfyvJHCeJpJiuxnyd4rSzxECrkrxB9j9RRkkuWAka9gTmTyqqCNAiegMxhWULydYLE",
  "key45": "gYRHxiV9Hy26L6GCS54cJcq8s3sg6DNRki1xVRfuxHnjD2Dte3Gq6jxGAX3ibijpyxYuoHT1PStgdLijygU7VE7",
  "key46": "MjqrkNNekM4pgSiqWwJg2rSHMWxAcjvhKQqABf8qG5hP8fRgkYJyDgf3oHd7CznanPZ2kgM5Gvrgh1d8uUSuFMH",
  "key47": "NwPJumMHkushn4FkZkBzNnyqxGqXGGNs4WnLhaPuRhdZa6mexnGD15hu1XNALXwsPh4XvxNFvHPRzicfzZq4L3t",
  "key48": "333sCZstaU9xJAyKFMGqYFyJ1UZxQ6wMhq8GhZa6gSEDadQWhAtDzUoJpKutdAtLa4y4vwhFTVCNSb2TJqBQgLUh"
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
