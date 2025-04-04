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
    "HRNFrPYQgmUDMBsA7qy5BgqGosW6XhPD8t5a9xEQxemXWtMdfEJ47jMbXyFWGAvhSuYFh9erDk87WCtDKhMwsFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5anSQVdC2pGo5j5GhCfyL8uBQjxAM4jQnbF6HV1WyMzVDxQsXFmiERxhTpJnMsMuhHXoMuGUHbWMAaeAa2LxYa",
  "key1": "4ciUX9cMY5KsXfsyHwwbQdigFBwTYPmoFsN8xbVo1fmmRVbFKfWdkhpDa2KiMi4FWtdVZZbstXJNVc4Q8BpxEEv2",
  "key2": "4UaMyKHJSHpcR26THq78R7yzVh7bZmVyq9vzcRk9SBN1DXn4wJ92eS17FzrbApLoStM2rUMVX2f376Vrzj8651Df",
  "key3": "3tbm3eY5hP2XHyNSEvUtVUNiZjVVxt8FBJ4D7b8Bop82Ufq7yj7FmybQqS36pYsou7ntT7A8NLzs2C8E1dXKhCBu",
  "key4": "2dMruPd88fYRNZed3zyYfi28AojLWFoKYqvsmuW2RHMGyyixTDrxcCASc3izees25vzJqreSiS1mS7PF7fX62jQm",
  "key5": "2SraWB4oTXAbDaaGcBJCpmpphFpJEihthvFiKYQ7J1b91DJryPiA9vXYKSWuisBEvz1wPhZou9TLgCk5nBaeKsJs",
  "key6": "5Rqhc6RcQM6nyHsC3qFCKrFhmG5WcibMaqLPfknhi1YBmn27XKGV2r1kNHyFcwja4cF9aNrPeK9mNyHDveTChmmQ",
  "key7": "43U5kWZrxwwbrYGBmmFncoEsu3nmDsgXuwWcDkuURD1nLare7J7tEf9MtPRKGKci1pExriHamXdSHDW8EytVuFNj",
  "key8": "2jucDCTT9AUb5DxQDwh9eFQJLxAArUHLN5P8ktqJSFXrgH347BBEUFTEeAW4YxLtwshnjs886wdaxkn2ZkyCAphm",
  "key9": "5XjHKjhXG2vexjXcF7E51HuZ5MvTMkbuCqR5F9n79A3AFZWPdE2f6bnRrBmNRByjmovfSzUJk2LnLEcHosxMuCQx",
  "key10": "ggCu7ZyYh9fkgjj2DHVH8Yuzo9T9mx6w2JGF9LPrZDqtYdkXx9s7ZYeiUtxreZrw9BdnXXojhpvSy2KVZt9mcdr",
  "key11": "vgL5H1UdSijCRxzq4tQ8B1xciecp7dCQjm6HcvSUvRqSF21cvZjoPF9pkTws6krTmVsLZg9FGSbrHFETK1htnKH",
  "key12": "J16ftvd37MWWBZ43qngetTafGJYVj4JK4FHEtkt4doJEKzcSP8dnzcC1H8YoEzuGowHHaj5vPf7jebqMx2xXQAr",
  "key13": "3bgV5apreqQPEc2KzSRCkxrEneMbGbQkDUSJFS7ZAbn9o9iFNsUyLQrJ8tQ6qCRM6zQxMf8ofd2h78CRp4ptEi2t",
  "key14": "3W6mnyN2NgvWeyvb2e3WNNxNZY7E6Jdq752gii77u26WzESF2frwLeqWfeVSof8BMuAbeHsdpRhjdB8GnsfN9JLY",
  "key15": "3WzKYmLixWiaXdsG6yQoMhHoHzqgAM7oiyKpgpW9aMx8QKNntrTYy2qUJfaSePfzT6f1EPEp22ikyFPx33Vze3zS",
  "key16": "5oUNgJAGdow5cQKpLurHo7QqquqXbAiXqyGMgRqCxjfhofe147FLQcEF5WgvNCBAv5q9ycxKYmm4vzUdDwXpnUVf",
  "key17": "4JHt8Qt3Zg1Z2aLt2YQmhXqLeQhmc4XXi4x19xCG3aeY2EpSFoUH6tSkrLasoLue5GDa56rz2aQ9fPtDd2oHwJ5L",
  "key18": "MXWuPoRgdszaYwDJEjExSLz7AS8EhGJCDbPQz9K43bhe5bXMQn8o6TQNCTbkFVgCwueNDX3hGxGsL83acjRTN5s",
  "key19": "3JHP1YwGDePpbMhdUW1vavUrtARJX1TxTiK4qBoAD3hxh6aNKchdozZBVii8TTg68BF4E37PVsSkGyy7UjDZ43FM",
  "key20": "ka7bAfzTS9fW4NGFP8F3wFDBtFRPU2QjgaPnZtn3qhF34a39ghhttkdFJNtjEaXmYq2tAe9wb71rr93JEunXLLE",
  "key21": "5L8UbgnjAnTBg1UXHB4z5qaTHPXwyciAsUGhwzF2JgT2iE8zux73dBg2MxQv8FXmpwiJEf57MazvqZQ59e3KsZ8P",
  "key22": "2VpPL63mZ7G7FGFPisRkPqwWK4JLnwuaAXEzkWzvvN8zcVngdAKsMax4KUHtXuCLMn8v9VN5j7icsJWfKc2yGcW4",
  "key23": "4ehRSicX61WzGwmXEVKEv5AwBnYLDGiEUw1pXgLHHStXtq3veMLjBDQTSVzcVEivLryWk3UF2Ug3UfH5QFLNR133",
  "key24": "32dBum9B4WUsZhy5Fo9sDKdicBDRjQEAL2TPrKBHchbWqn5GipWXVuzimVxNxrhPodmKpdiArBgzKvXb9mgg6JCy",
  "key25": "5o1gqmKjAgyhwB429iZ5VHZSUjmjqv3qcBTmsVde9Mgr87gjEoRJ32d9kwdxMVymqVDK6DQGCacpjcZT5vfqkbAN",
  "key26": "3ChFNrcKVQ2KEcMhZ7XpGaa71f3eHRvtgkF3TtYwid7G2sd5oTWGgyurRGdzVdWU5eoEi3Re9huUmZFHyBoNBHft",
  "key27": "6uu5zPmJZWkAHujCRa1gSZWtQuNETPgRSjziTVV47PRMUGVbMe1m7H28WCqPx85W6JAdKV53Ccoxyi6oWnkQD2y",
  "key28": "5ow3suVFR4ZDWM2gPWrNRfxYqLAyZZjma3QQVStfGeYJ1W1JGPLpohqytyf3oNpq2v2wbvQzTMXtXFcNh7DLiCxD",
  "key29": "31FLFSwG6zqLfL72E6tnnRtYcshgRemvUpLpwrvFcYajnMCKHKUBj3cDtT4aCVWSYzyLkzViBhQrEREwBmSPax2o",
  "key30": "2oHy9XQ1ZdaJYtSdWqn1bQojkVANBVQmCGoMdyUSaAwCyuKv1tBo4NR8qJNDcaDqpMs1cV9ks27oAQKpXzKcTyL8",
  "key31": "5dhbTi4ZgWBwn2G5i5Rh1A45oDw233TjXRPTN9chAqh6QhaTQbBiejQJcPiusXQvBAQuPC7mMiMHHRcBNEovYdpU",
  "key32": "23WkNrGuMb3tEkSaNAyumrXR7KXRKeXSWWmf1LVDCCYAQEfsCR1M8YsqdxGMEQQL6Uxiq1UmHKrMpMkmC3o9chK4",
  "key33": "2i2FFRE58FWPG1qXbUxY5BaXWqd3MAQF1qmM8bgkcBUQJvsmxgNuaHFfjagv1RV4CgbYe3LV7z9zYF16577ewc4D",
  "key34": "5YCqNcQiJ6rVjDoraGbTfaJvtdieLL7GkzcapUewaRDDcCN61X5yNjyFBjukoJPywneKikUpEMPa2pPXEpFAKryz",
  "key35": "44KCaz5awAZmutQXwPLwqyQAGT22KnuYhSiNAPBGkQ7LmeXQGjqFfajYLosRv23xvvJp8gc9SMtNuAzrLQKYansj",
  "key36": "55THXoNVfPNFkkQgYjQBHXq9thwZBBr7b31fZitGRJpHsPAKSGDySq1oMkAy53gK5ZdSQugn8NvGYN4ydSAYPYCY",
  "key37": "62pN3xa4XTMqDDbdiPmn1UYjShf4YV4dEqDMQ23dpBo9kALqgpWHcYZjVAsZGHTmG1e9DQHg2ntiP4t1X7gt6tJr",
  "key38": "6zizhCc9xhdLeThPHZtNSJkkvnjRzSjQPBKpG5a47Pyev6ij7qn6FRqGFuXQY3wYC3Tij9rmMY45VxSiWwyz4Cq",
  "key39": "2hqJnoDVWDNzamgADAQFFJ4tAVe4gXMX4QZ64YEAAuCqa75UkWwWdRrwERjY3pPG2vUDdr2VJnX73SBsFFA6tVJd",
  "key40": "4whevKSLM19ftGHW2UmTa7JFJ9sK2viKPzZvUY95gyNjff5t1j5a3MPJC4DrhgWkBPLMfhCjbQttoGwFe23ZYXpT",
  "key41": "2PrPHnn5Beamde4KFbkwWZEm6S1aeHksZZqn4BQ6U5G1UpTLuoK4uNRu1uLceacH9DMms2pF8gG8PPeUidf5k28F",
  "key42": "4gkFP2MnCbiH56Sxd9zwnzTFTBmqRkM9qCxDZzGvQ4vjLyWgJo6ubCnsTHHc51FtkMWh5WMxreCEWUDrexYigCzD",
  "key43": "3kSybckd6jK9U1zMgNx9e1uRym9t6p3AqP6MiSFmsSBNz4GcJJadWUX4Kr4c5Y5fzDjLN3SLSxo2w7JeWGe2B36k",
  "key44": "22hCsTaKtFuTDmJDxdK5EV5fNsuwoPt7SKFyjrQj3dpeJ5eydXoWB2pSaQXNotzthRFfwtto6PR1bxB9dAggmUSM",
  "key45": "4ykC411xuAWJFvXM8Wxi1tqtR7cTkCxWmzezNNhCSKohoVkcGTmUNaHd6rFjrQsXEzmGx8ztLMhq6Go4rrdpDJoH"
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
