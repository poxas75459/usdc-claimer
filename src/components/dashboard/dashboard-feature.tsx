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
    "4F4hysN58EU7Sn8ct3VkvXztMnLx1RoSptuRqyBtWafPf49YhiZem8m8vBs4WNRHvNshHcngyHW1bNMvUPRroFzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HuiKGK5kcZ6RS5vjrpmYcRbTBGGMy2NtKXwjp7eRUnmTBj5XNiBm9UuwziAcxTqgLnqDwKWRQt4hDUftmPm52Vj",
  "key1": "3Pzm6rLijx1RRxJJ9mAp7nueynP2FVYUiYwud2mhL5j3axUAaiiDdao4WQe5nQ62Su1vXg3EF4SuxmwEEGxigxRa",
  "key2": "2ddTjKY2YQhBGnRLCwvYJojMto7bndNyWptAcqoLfM8gmAYndAw9SQTP2o3jjUuwcEwopwCRrV5e3ppsfniEMPzn",
  "key3": "45hqdjpPHhF54TjruMDsDjSezr4DkM2qPTkgs8USFaw6wvtVeuSzJfbx78gJ9uyFKyxmbRV3L3zKEz1YQz7HFxu5",
  "key4": "343Mpgs7kXcbYWSUgBt39tS17NRQpEa7h2NnHmXzH6Q1R368tmrz6Huuu4uaaHSz75MF97dbHZsSvXEFsihKy2Ud",
  "key5": "bLLLoSf2SJow3g2A72AfVPovtkZr2zJ47weBELfK9YKxK1Y8KoVxMd1w6rPzVRA1R3b9MxMV6AQEosLKanw7Mej",
  "key6": "3ofbC2yLhzQeX96W3qnJcdemzactcABAYMFxNNvdC3oP2Nu26RVaMiqa2n66nFb4mQ4zvnLCF2oWcVog2VMyfyxM",
  "key7": "5p6bnLwAYGhfZqg8cxXUaPgLJsSigWTdMigdpqoRktsCsoq512aby166iWMJVcY8vrB82fwP3DJzzuC8kxbygUoq",
  "key8": "4V3r2n3Thj3qJiJyABiifY7kWc2UKme3tvCm1RZwbiDgjg57DeG8ipdNno3wZ8o33hoHyTDa4ihD3npw81XWs6Vv",
  "key9": "2i8cd1d9R61PoA8d92Jsrg9KR4g2F74Bo3T5E7buUiSBcF12XVJbUYyuSjmNGrdhDk4E7gyDperC97vhnXs9DMmX",
  "key10": "tKjDP8XRndVxyVhbjktckxwWwrw894AuN8MATceKRqXzgz8v2jwm1g4BKsXTqnccUUZQQaV8iw2cm8UsY71k1pA",
  "key11": "HvUHvSraNJbN5s7vDWQZq5REQX8VMGhMpScK7kgn7rijUmFtNXwv8uTpyqZgHwpLHGKf5nB9YGghfhwMwNLWkbH",
  "key12": "5TJbdcqvSz3VHXzGyMkZLgidweSAHgbrmJ1wd2Du5Z8ERd6WwkxhNx82DyiuL2XpfAdnofbx2akffqTbemFazmRx",
  "key13": "57WVKEgjkaxAUu9PRebcetzfJGbA8aFSBVHv8BFrjaQDx2tJNS3RQDDp3w5UfVYcACLB6gbYU1TBVok2gSemTTXa",
  "key14": "4wZS2w16to4mRDQpG1yDjbL5JdRVDR5JZS9J48JuZ2PqVRTNXA8AGxU74fcrYJa3PyqzwadNBYmtTuyNTk5bYVT2",
  "key15": "322R8m5CN5EViEa3JhEqqpDMY4UDd564DmybBKUaDbAG9H8MCgkf5z6zatmg8LCGrni7G1hGiYw36sDfhzqe46VF",
  "key16": "5b3a2pXftUBzp3MQ1xH2fYJg62BozC2s3JatfztWRf32YUWoHXAkRmupmP1iPKc7xheWBJV1fqJgSyCUb5Y7YkZJ",
  "key17": "2vJKWC9Rb1yfQzsntDW6FDae8CPxPfTfGxMEt8jBgTuk24D3o2Nk1Pxi9oAd2b22heQ7VdJ13Lvpf8ixN6yEswKD",
  "key18": "5hYvNQ2NCB6xutU4o6Ccr1ZJbQN4w1gYDngrKWMB9fXsZfUstfzjdiFmF6TPiUufiE1Nox2TJJesDLfDLCDbMd7m",
  "key19": "2HLYMwG54fBbGzZ1uAvJ1kjqntobw33EiihKUftakJ844u2PkzN71UQGPqAL7tr7CdY1AU2RkR2qJKxncxgR74dm",
  "key20": "3HufsjmygKZ5EiktMtkNP1F89CPyRqfGxN3dLGepZkkAvGo4vBEPuXzUpkPoeSiwGf9KnCrCqiRSkENAsiaMdbNp",
  "key21": "44pVPn4JmegUvPRCFKL7i4dXpgHcSRhp6FDrWTFEHGdS8RyjYzUKZ8N6NQibQyUhDru61gyVYmJfccPnqUVrDTLU",
  "key22": "3rAQNbFY427PEdziHwru2qh5YYQntv7p6Gm7Z5iAxRuqM8nGq9U5cN9TNCXaTnxTfyMBoCvzhB3bqEsdMnoQGVKe",
  "key23": "5WSfRhrVVXAhmFyNXcGPipNmvnR4RpUvY4m6QVCGwGDUqPpdt7z82pcnbQzk2FL5MC7N4zDntKQCzkhNfXmDHTXV",
  "key24": "5m95aQ3gWCssA6CT52chcK9GzFfrTrYSmsXgbsTNerGibQNtW5H4wvRwDtiVFMZqLAmqAiYdAGsD9NrFr9nR62yf",
  "key25": "5qgzuBskc7DpN3G3r8SYRt7dbKfCHBU3PgPeWRMN8YXoB836yVq3q34WajtZ2PscrYonCtHuVoRBdjKJ3zfxHQmn",
  "key26": "3BmK3iSHjeBN162uTYzqKESnfvBzNroDA9hCpQCy7mfL4jfFFyvPz1YzoTAg9xMjohuaBByp3YQkmwFWEPenZ43G",
  "key27": "3AWGXwjxzh2e8HxxTjvk8C1kbBeBgeagZv1rbAr13yghU1brJjQxZRE7Dx9rmR6vemCAMRZid8dtUUSmpvpXcZP1",
  "key28": "CGEJNKVuGkfMM6duCcmpgTX7szhnDwG8vzFxz5iTBwQcsveUPJt6VbYUxTKcuTjEWodE9uYVGeR3EWhtZTdjRMF",
  "key29": "2XSSBc4kLZRvho1MKaV1z5wD1t9iuJAEG6U8Ga3wotx5NmnToW9ZP6mxTZpbFbsa5wBocXfkqNdcBmiN73yRfp97",
  "key30": "5EAyZK73iB7AtXH29rG6RHWyp7zQvC9CEEZthUUAYhbRaEgcWyWBJ6UyW4MLKiqrv8gi66rx5ZAbeEHFsg62dPMa",
  "key31": "5TL8MdoNW721YG9c6cnMQbFjDkCbdejwpAQ6rddCZVxG3GEaKecoJ5EpXzjkpvFWyX88x2LfQjLJryLn6VaBnqpc",
  "key32": "2B5BHerk6nEQkeAHZh5HZxu4sRq7kkHk4WCrxn9tL71F9RJZ2fbHMLfUKzXHobqJa4QFFty163Wvij3UNqBLWq1Z",
  "key33": "5qNmdAqFFmn8hHCjPJ8LbqAroriAskS69JdLVQ3ZL2fYfHdR8R11o1zjVpUd87zFKDDx4BQ1sCoQRH8QWpdWG9E2",
  "key34": "Z3NpQrMEKsetud8988k3tPkRwR6eBKjtq1UUuN8GzM4mcXSdvPKu9JiXhSNtU2FpQ84Z7PeRoABa9fNmDL4yx4r",
  "key35": "59UJg3x3nivVtnAMn81HkJdQGZhyEJip8kRe9yUKG6xGZX4nsyPC4Ax6kf2xk5U8ekPC3shz2zicmiGY2zW51uYm",
  "key36": "3GwFZmJG83ZFHCVudo76m6NikGZQju1s5BcDo2JBKNkPbE3n6gsrJJoSAtz9A2wFBDeRjdjjtwdiG5Qtr1WN3UjQ",
  "key37": "5RrobHeKyXBGXD6F1B2QwvBGbcdm4vS67HUD89LWsG5QYe7RCZ8Qu9hSDn85aaBR3jLhZy7j8h9ADjY62D3BJ3ax",
  "key38": "4fxfk13EbhoKT6AsiovumEvafPEa48hZcw78tHVjiSMGwKAuhsc3rmcxkfVPFb7FMo4k3iRNMkN5Gt57dGcBSVa5",
  "key39": "3uC5xuSvgJ2swV2wQVpwFwxfF71BQKt6fbyqM2dFidpkLmQrKLXfEZnTuSQF5Dga4MS1Qvt5CjLkz1MCuafpaXrH",
  "key40": "57Eo3xDskZn8LuGUYTtCMEcSsS47dWfTLiy68gLqyLFotHieLVvd6wZAfvtc8Xsig3zKW3K3xJ7KrBUAtwfgyLnb",
  "key41": "3zdHPTMTbke1oRu2BVHjDYKm5J54CnfBdtyryqgBZkqUKfvbkKVmJ7k14NfZjkS5wVvcJSF33kZMfmFtjJxgj99H",
  "key42": "2FcPQ4hY5CzPUHr5njohJDFfjdwtbjZ5gMmxpA3EwNnJTD9xfKzBAZvuvnrAG8Q1D9Lhs54q73tyiK3JhjzZX4L8",
  "key43": "4YviATBbUqedeCPeqiSDgLNAFEY7QfF9i51xU4xKPbLC7yxMhfDZMdPxLA2aZp94ZiykrmT2cn3yCdmcC8ABJvQL",
  "key44": "37Ehm45C7oUm3ndWFHaf4FJNNEpoRB6KwSt4uM9endcPBJfR5vx55Du7tAM9FgRrMjL7vY6PSY11j16ePvTwQGwo"
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
