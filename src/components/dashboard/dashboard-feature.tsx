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
    "3PczMSNsguagGYK8EoR2M4tDw8ZC2HkWG3ydQJvmLrEEqKpVHUQehGwm2mjCJqymwYcgGLL3xFu5wDbv1GN2v9YE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNsXwdqMkZtB4jFaWq4XvjZRLhnjHdSkSPA6G86GEy7CtSDSQrQc5GP1k9SYf2SCeWGuBNcp5NbvqFrNbyimYcD",
  "key1": "2PcajDyyxga146CWXVbwJV9K7g5uWHQ14pWiSvebHu6v7qNTb3H78sZqhpRSoy24NgtoW8FJRsdfoWU3hsYgtqVa",
  "key2": "2radj6HYKGAjgdLaSqJ5n8UEi1b1EtQR6U8UsZBU6uhe9PBx6EpxmhsAatgAwQx1r8Hn2TSPAkrQFpydXKdD5UcB",
  "key3": "3KeLHuQNuSqJnASthMRoLukNui7ABNQ4dFhnR9RfeG2c38zjhGZSdcN29GyAvdsgXQ2yfWzALijovBtPopoZUotg",
  "key4": "3R8dACk9qwTPucUtWn6XSgBP9Kvi1mpJhXZmLBRctHGc5oj9nnXQCdLLKJxvsrD11CKAx9YLhvs3g4DAPLintW31",
  "key5": "2uGC9iGkijDNyPzy4Z7D4DbqRq3JriMsfW9kZ2T5cMsD2kR5ZTeaUn3ztEu9En3n4GFPUjC8f7nB1wFHpMkcXeVP",
  "key6": "M99cdVEw84MVV4Bgq4NhFS3q88K8YpKWHmfqzuGoGSyv49W6bYJ7QLefvFCoDeV1TRrowUc2vfJod2UsBqL29X1",
  "key7": "5nWNCUSEdoAGMMTEb7t8PMX4NUTTcgye6xVYXp95njfGv26vjsxE5argCA9GkN57PFoT2DsXRiMwydWv5KTgCH4d",
  "key8": "5SLBKcMYzQj4qBBiUuKhq35KpB41wKx7RWGNS6pRzqYVNPcVpEr2krDMJmGjrcnTwR9arqE8hPLktMc9wrWTZJC9",
  "key9": "4eMzfs1UMpjPUa5H5NK9vJKhNAbpu1XkrgjYNTwCUGsXGJG69BuRdMxpTw6fR7M3E5Rafv3AuVJCgVynV5JpdSdj",
  "key10": "5XrRYVTve3jWzoA4ZYeC5J5vFSGPwLrQcjUwcXhLt7crgZvPy9pyKG93nAPwNiTk78ya4WHH7yFCF2Tce2C1cD7v",
  "key11": "3EU78n2H5mYyRqBd8cbFdzzbK9KNJFWRk6pRksZUMCfsvjMYMHpdqrGKT5z8sgjkpLLk4EzXbUvqPk6jkYJ9xQit",
  "key12": "5WB2MXMmczdovYCUN5ZXTUQFhmvLhPKkgeMqQB3KktRWfav8Qgi2z9pK6UKN59iJ8QfDhHzAnpihh6V7YzUcgNpL",
  "key13": "484vNTEJoatmDRadytHPqH7M9Hje5TmZkuh57imNkRHfQzkZ1JvDuKEgMU4PjYR5VoW2t78CK2Evh9hYRRWErsg7",
  "key14": "3dPBoz6fWx6bDgmJuK6qiRTgfffpobzVAHZ94HsuJqEXDGDj1hvGAyzx8VQ8YHgtbMLycnAGYPBnJDNGUGqCuHJV",
  "key15": "3N8bUHue5GJx6ppvfYNng175cUk9k4p1xBkJRVoktjGfoZw6igP1pqPNUY4cAbhc6aCxYPLF97fghDfjfRYs8fzc",
  "key16": "61oDGNZMJgktnbmCuhyZbHP7bkHXk11XTyFApSGLEsbdZHo1M2GVaZJUj3ubQZqeBuf1AiSz9meLTgP8xLiw4Aqy",
  "key17": "4rvcvhGrPGHBcMSskLyYKXkKAU6c2JyZh9oRdKhNwK24z35hjzDSSdRDiE2mYkETihrp5px73DLVdNSLUC2uwa6A",
  "key18": "5cgRLUQRUQvDTAywE4KbX8eNbzima5ePGP2KSYK7JdvZmzCguzCsfWSsmGqpxBvBtDsKZKFtiXjq5K5WX2h2ycMt",
  "key19": "2NKMkFj91UrXC5NjFWLfh4iVrqEXuQNaodRUDrwLe2AM39vXdZAruoee6cgv9HvVz9gHgzpAXDsaVGZP9ZiYjeFf",
  "key20": "5biXYttgs7fv9Zb38y5iSzaBwqPnYzXqJd6kby75Tzfy45JQQpqWFZ6WaCeAoQjkvjMydwmvJ9Vu5jku9vsvsxRx",
  "key21": "4TC1Vufm7d3eXxqHBpE5MRzAwUJCsUTNwZoNP2NpxoD2itcQio2XQDHBcgAsjv2yErLazPAaoAmhHSG4xW96HjMa",
  "key22": "2Mr97H7iEtdvYDtrHLLwwzvmgoSYtUYsJXQm3efQ3V23U1swm9dXm9ByH2qr5HbK4CSkZPdqRCsP9aU5ct4KaQh5",
  "key23": "4oTXSYZdeCEkJivWWUASyGmFR7bGWc7SoW32F446hocgTVPjPw9y9toZFjaPgAwmXYfrcaqTU7BkEdXG1EXoCKpH",
  "key24": "4rwm9AFFcF7MsCCcJu6NYBLycorG7BQxkWf6o2854VDAvGRqK5oqbfjn4VWts9NjckXHmgWoCCgBtwUrTbLssDqN",
  "key25": "2qy9rY8fvq6xokTarQEE2qUg9DsSRiDw7n3fwZDYp3mvvHVnL1vMC296NbF6dk9WukqYZVEEUzAzsYdnPxZdYaRy",
  "key26": "4vsUm62P3LkwLuBX7MEeYpZfKJzGPLVYa3CL7rBZtsSPCF6cP4VfDqiBzyLpSDDi9UBRHpXs8jXnskg6SQBScBDY",
  "key27": "3Cbg81bg5LYbdH86mbdKsGkXMjAABvchtD6gXt8dKSNQSZ28rvPuV3ZtTBuj6d2SgG3M9Sbkxa6uYXZMAxPEWKHu",
  "key28": "5ufweXfnGmHxKafpySgkt36igWS1NF1jDbgUVszuPioegT8H83HcqgjB7i1U6ZXt7Xd26SRaYPayZiCp1k9GHTdc",
  "key29": "5gwG43kkv9hMykCnqYZwCuNkUe7Z9EK8ewnMVUNAnBv3AoXVVYZeSTMTnZmPp1vQ4bj243T7WLhKfR6SJAwrZjRy",
  "key30": "2AVB4StcHQQbD2yK6kwYc8Nhs2v48HJNaMU3VzZZLiUPDAsxSyAhwdDdEaCoypGSBa6MqyFtFdXVaYSHQ3nW8mr9",
  "key31": "4MgTgrug1PYDZAnapnbxiMksZ36n6RQjHoXWoZtPRPuUUC7ooxvPGqt7adQizXWCGz7RYK7YuTtK5VgjD2E1BwPL",
  "key32": "5HrhnXW3UM5386Kh6jtZewZz4k8Y2AdVLYRUKqKj5CZURcFW7MJo3fmRLyt6Fb3rKzrXWwQeJnbLtcT29NRGjEGY",
  "key33": "5SAppEwhzUMbsmeDPR7dZEVjzkwm7ZR89WRztUDuAtkpMKiq31wCzDHgrwLDwaiiwNECp4y4cmVjKp2hPtUcbTNC",
  "key34": "3MMV7VivokCWLTxRpHGjEgM9sRGSHzmd7hvp4isQVZQXpC8Np5hREkAb4gWu1mKVrHbkyDef8z9P8cFL5TcYzUyc",
  "key35": "5iFeaL7P92ZUpZchtUvKYeYXbQFq6jcDz3h6UPP1ESfDovoVUKgQb6XMapaKt36cuxiR6uxf37JKrQd69UYEN2xW",
  "key36": "4LbRz5wtTFAy9M2XN9GnSAepUznA9KfZjtJCX5cD8aU2U6ydP7niyDoBLWUXRR5qrUF29tah1x9oACWyRKu5rxqq",
  "key37": "4N3CuEQ1NPmXcCBoGn3NS8YF1gjjtuyNKK2JTVLJGSVY6MUvLjMNa9rmPjqv1Je6MUWBYEJZkLPr9DPUxK6Gy2xc",
  "key38": "4UU38ZmKnNPtb7NU6oqwyJeiTZR7pqjqrGCTDTRfX9NnDJkaSTEKogpGuAWGBBiHxWzAvtJ8gfsoPxPV6j3L8z8M",
  "key39": "5qGrZ2eb9zvUgcXgArPYmuoq8wyQmSPhTQA2XE8Sy8VuYxtubUiPHwquVxLFNduPwLocVab5aJ2b7CBM2fjyVgaF",
  "key40": "5qmCtewKZ8YjQWKFaLrMjFnPjvFfb2G2RrUn6Xi54k21qWgmqtJJHaDeYhMBWxQehRJPzik8kfRfPAkoPdp3F3Uo",
  "key41": "3999iCmm1349CD6C41sAw5GAUQbLbQo8Vb97KLEq8kQFbUEpXBkSvyGuoCK3gUNVsC5jkgijS7XWt7mfpcBkKfNv",
  "key42": "4itUsVx1RNw9ncLXVz48nWEmd1xAtxiPgaoiVraXepZ2nesAML6yqEcBBcGAruQWgPnBSDxVttA92w4d57YoiDqC",
  "key43": "3s3As7AqxLw6VeVSUzsTu57q8uKPTBfqW3TYCGE4M2MM1ZnYWnY431QSBsRw54Bkbm142mN58Hp4KzL5xoCsr8zp",
  "key44": "4yN875HXngXvCvwMyKLas3Rgdi5psk8jumbGLfX1o4rawzJ75Y1ouuesoeg3PbTVfPbjNX69oL7FXpoFhdpBzsCQ",
  "key45": "2tvqxJXmhVy4FzrHpNQdabtiARfUr36kGq9Nz4nTqNTvMjchv3hC8QYtKPVMzfUB8DhnDyzEn4cZ5VUskjsbYY59"
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
