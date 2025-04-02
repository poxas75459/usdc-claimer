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
    "5qyZixa9Cmo64t6kqDTugTU7ngiuRyfhSEwNXQMCkXpaSiWm2ham8CFd8njmMzWmpiDqDEyiYE8RTza3VmhwxNSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3KvWGxMWwroBJBF7KzyeV5SY9FzG3Bu8odfQypti6U4doiPgU97fvAGwcta4bCp3p1e3cKk4kcxfDmPdv5VhbQ",
  "key1": "38t1pkoGJBmcViW27QyJLi9JUsKic2wUq9i7RJ7HJHkcCAHdNxXA3pmKHmPd8ppep8Xka9WiJmUYarLNC24QGehm",
  "key2": "Wvu88QzAMt6SrimzyBEVdhPiYGmojYkasxuTynQ36Uk31xK7qRUMy8jdiSgVryDm8mjqH1M25hb7pZdwJVeQCAr",
  "key3": "2s16wM6JaCi7PRru4sKAuHecNUfhCDHcV28nhVPreBvaidyLVt9umM5wYsf9WadLwno1NuZZhRkTAWoVGrnzHQPZ",
  "key4": "3uKnrNKiJkQ65RtNXPsNSVZ6Fhv34wC4b3Br28YRckxLUJKMXx1CPUBsWygruBM5uUgTRWeBdBqWGvH6SEa2JYgr",
  "key5": "2AMY14tE2LEMncU1BpUUfb4USGJNBSURZkVg3AtFwroGVjvynQjsG5jAiNebVXmNYJsXK4SQGMoXRVquLWCxfakz",
  "key6": "2uXMVqiZmGtsnjJ6us2g4ARjHxwGjsFWfi9bEe5fcwZcygXozRMSond8JfcEiY9NrnoQSNJ17ahENt2zKpnpkzWp",
  "key7": "2QdJNm1DgenmNEXMFJwyLXDCjBLE1TzrxBVbbyZWRqnFMRAcE9ivZaPZ3ut3NxqaLY6XyEjdKinPj7pVk83A5NM9",
  "key8": "3ZRa2HqvCrE8ie91tQ4Q3jEEybbPJtFsi7U59pj4TfJpxsnXXWVa7FckKhagiLAkEp6echpgBhe4hiCWWW7MSWKE",
  "key9": "48pBearuB5uH1LmvsSGMXxdXhLZswfP65kyTsmnv6GpiQ5JHawmPz3WMsZS3i5YHdaxWPD2eNUG5V77oix5j2Mbg",
  "key10": "4XVxfXACVyLktVYj589WRDAyDc4oAzTZtYioBZUENKbgFEXakRfEs6KtZguwQwjeEDeZWh9EeXws2UNv483xZCMe",
  "key11": "4JFaMEnBZ6avix1KKTL5Q85PrtYghX2yrE2LeN1uhSFNAVNf2L4kN3FuUhLvNHvivXjsngwRM7cXoebpnfUKGtSv",
  "key12": "rbj17V683ubsU6QDUanGeJn8MHELhQMXoMriySKppyMNU2FXCzzxBGrqJ7Xp8UkJivmCnjL5thERxMA4KoyWYJv",
  "key13": "5vxkMvcEvMdp6tB7E7VZLVCntmy5dbV45ommCtqGfCVmK8bPHKe5ggWRpZ2vTZqrEvtEgnEPkAJ9wHV38dFE6xiC",
  "key14": "2MWjWngLXMaUGq4K7LgXCeRu4KXkQd82qF3zYNi9ADX3qkntSBrubdJBU1Xxc2fximuYVA4TfdwTQPdyohidHUtj",
  "key15": "AprKUoAQoR9Hc7V6z61Hd6nsYQ4KYE9cz92SLMa6jtrw2wHzHGPzCws2iVGdbw3qmUZxxMRW2iX36sJ2BYUxXfz",
  "key16": "uX5NCi2oHHsBnoCRBaP2A3LAsBK7oA5TtJ1CWd3vxr22g3Kxu4YwQ91RUSyQhbSfHbWTd4YsNvPiHGJbicQFSzx",
  "key17": "FmfW5LE4x6JyNJbLkGgpfgtRKJSgWd7uvxD9yaUjNyBMfGos5CBQMxdQ4AhrWwsxE4o4qjPGcvrUFNbuuGbzceH",
  "key18": "WzTW6ReEZpNCmt9qc7hrLpW9bLuZf6pPszVFDDka4DKLWuSB3qMMjBz1HkisVLyoQJwUGitQWKPoUHtY3ArEg3F",
  "key19": "N9zYtiX6VZcnfPMoLUGWyLTjBimM7gKVpKbXHpnyxPFTQd9sAKibgfPpipfRhYaLVii2UJGpdRm7QTuUNAHiavH",
  "key20": "4g92fnd6JzKoU7HNrFLqUmh3QGMqVBmVDxieCuwmVhN9drMDm4gszmL7qgMuyRCDTkiRxcNawMkEcptuhU5dx1dA",
  "key21": "4kXPjPWd51pa1ju3MH3L2Lvqg126X41bvRYfpbdPt5gaPzX6VxyYGfmjieMoQuM1ArQGErmbXBk12nsFYXqNZ6xE",
  "key22": "37vZfXXMnzQQP2ShnQSTAZaj3WMFHu9t9UoyWhTtjoZAT64EB4FFVUPMD2KpYLrk2RrL4doeQCMPHo8zEPEBc5DX",
  "key23": "qi2oW9GnFJnWYeQc8f8d8u9bJwSndsPGrPg2mTQgRnBYhXXVDuWhBE1K73HvCZJnHPEuJiABmHhq8Yewt4RkJjR",
  "key24": "35Euuq9g2r5X5QZXiuiKGruzcZzszWExuyxu9oCMV9ptLxNykMTb6y3Z2qBEo9os8nebcHu7eK1ppsL3K98N7b5Y",
  "key25": "mVF67ktjxai6YazEszY14SurAF9Q1wfwZYf4bzxknrkbVVwULMVhbK9KniXEPtLFC5wN3hUKmYzLe9W8NRxzhoT",
  "key26": "gjJ923nPE4YBSchoPfckyrBdMFHqmPxPvPurcxkP5DmXUCuB1m7aAr5u5XY3P88dcAhPh9vZHGFysB6UVSmqVRi",
  "key27": "5fFhkjs3bhryrD2AfhBHrEwRj31MMA1WFGSbCWisg2vxJ2dReafF4wGdu4nNkyFwMpzCHT2qxtNGoEijFA6HSMxh",
  "key28": "5jg1YzAL1Y1u1Aa21989yrBaNFZb9XVTvpLMR6CFThFiErZNjSL2XhxscHKnGjthuVQX5v7NFLPbJgTC5XUx5Ls7",
  "key29": "46v5XB9SKBHB86G155v5D7WGpHC6BKL7ZEMu8cE1aHFnUZvSPpLoSnY2ufz3dCQjnDGWQRXoTAUog2V41odMSUGH",
  "key30": "Ru7DXvTLE4VbtS8XnSvLxmNcp7cHXN8mHcLmjwv3mnFs7toV5aWG5oYn7duuqf6vUvkwg7ojhXrYTtzjj2KxjVC",
  "key31": "5hTK7wxcHg9vVvp5v8idWWsLVoaHxC7dkkWZFM3PybB1PRYasekgHebX6sUMjyXPnpvopYjE8cgyDshNLbjAXvoC",
  "key32": "b7zNqJDzC8jUPHnLqcSm7QStyVU6DMggMrLHcJL24HyoEag3pE13DAHJvHPoPKyrf83gHZUYwPF2YKYeZ5k9GUu",
  "key33": "4Z9YtJutArsd4ZcPesCE4cJM4hnfiWbw8cCVDCqeEF3zSB8sBjv7nMnUHSTpcqHbWv2Q4qzqYtgqRJoc1PnXiPPD",
  "key34": "5osTagQDCgSEzUZJTQ9Du7zJxyzv8yRb5Nxes4Pj7aPrmt7BV18kFDMVsdysRti9muzgsv7kQ4CpoLVBhN4wgzmq",
  "key35": "5NM7ReP8hUtkTyX5px9R6Mpgh8NwUsEFY2x76RLQCzVJmjWbv5z54UbG8Rs14Yhcv34kecFcj4nKLhPuMmb5Ya3A",
  "key36": "3s4W1EmjipjRNkFnLwGQWMKu5t8Su6Mv4bqiEHyGS3qZTjZBBy95T66JQP9vKsUK4bDxBzDwgGRYLC5ULWyZ65XU",
  "key37": "3ULoXmq3QXFYGesCYGmpnnBAo43aZPaHWAXeHf1gRtRP6PCifX7u7bhozQLeVKKL5QRJTWJvtWsixeCFQbPobJtb",
  "key38": "5pjiBAdwjWyYXx5Pa1fiwyoc7QojyjDvpbrv1YURFpYP5wmUFtdRbXkDAcBu7ZR1g5PqQJNupRu6HjVsaMrP2Qdd",
  "key39": "2GD6ujtY29TvH4ikUY6HxFqkQdJNH8x5DAKohyjr7SNSRimFK7s7TxqFJBkbWqaciGHz4qtdXDw52neiVBx9RdXx",
  "key40": "3DSkDtdAD2Dcpp4UAnj6UYLsm1BNRY8iuUkpjuAwieh27hn4eyop2znDz5xdh81psSG8CJejLUy4XKh3qYHb1wCD",
  "key41": "5ZDqJEb7Mg7GcqXovU4zLceSK9M4QGT3h1ZDAGrExM2rFRSp4FVxh3BtqAyCECjz9HqLM9k9f2JmsKW5MMK148Pg",
  "key42": "3fJzFcYKYKLpkiKAm9DG8BrV3zFLXtRFNAgSVLdPPuerTP31XpBC3HpACe3GbNKJVirxApTrh2oaDHQ4ot4agXBq",
  "key43": "4wVU6YuriM8k6MnZHBE55fQHGchGJR1X19p6yDshby2UP6TFy5ABeeRPpELuWGPaLDdfwgzigkZ1oaR3Bv7fvjNV",
  "key44": "2SRMyNZtdrnLFdgUDKeMopei8MgX6NanBFX5ViiMkLnNVWCXDEU7yC6A5cuDgj2YVoXsyaYLLBuMjNhckdv8C2Vy",
  "key45": "SZXA9R7ecCj5sSutjdZDKf8Z5JR4DeGa4cxVHJj1hFkcNJQjBnZiWuEt52edNynsXdK1N8x4wvMkivSqFMgjPv6",
  "key46": "5Tc4xaoYBpXFQp6JyBfKu3iFPNYu15kYZqdWAfWqq5wnLJdybKav1YBzUnd6HCaZaLfvomQH8zGL4ns2Z16i4yix",
  "key47": "jE3xp4iLf1vAekw9Jun6Ho4wqKnFXJviZ6fvspsvXC7zqPhCMPLQm8FxEXH9aKua7gaes9SfTEuS2NDH6yFfD7C",
  "key48": "39wA64AK2CXV4htdqBCq64pBSQoX4LiUHrwgpMsRk6chMty4hi1ehzVHHvC2XTrPtUm3zBx5wwRNj2U7nr24TPgo"
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
