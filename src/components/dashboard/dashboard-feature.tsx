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
    "3j7m1DbhzgtyK9Qhy2owpbhAVqzYQKNkxM54UvGtKyg1Vgfh6VhHDMiaQhkdyZdsT4GWtxBwifowyQFDTFMRKfpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24gYmeaLdUpnSd45UsJCmf1WVxuGVvyhrPK7wC4RUf3TWuFq8De766LtAdx8Q5URvNdpciV1GFAPjzPZ9u4aVGRu",
  "key1": "2KGzazemAmj1JxxFFzAKmKde9B2xLGw4Rguhhfcn6hzikYYGJmEC9CFiqMLNvDSBAnuCBPHLT9ZpmUA9XT45fEAD",
  "key2": "FB3R9Jg3b3Gz6nwmbGkC2E35EGbK8RZsqFJqSEXk5Qna5LmKfCALzjWPoD5UGVxaRzPNiKVhXS5CckW4oER3u3c",
  "key3": "2dpMKnqsm5d8b9MD65PMtKx7KoDx6jBRxK6NRrU1koYQ8dcqQQdXH9tga6W2YfFsk2u4B7JgBuPSVcAf2BmjfmEn",
  "key4": "2hdjrd29g2Fx8dh83McGJXx27B48sCu8KJ5wvwADejiefvnBrq3YRseNT9VdTgEaBzfWVK44QQWzqCw8Qa9YuXJG",
  "key5": "2fq2eF9rz9r78HuBfZ2yYoKbg7CeM1JVvGqVd965LwmDsfqDBFDuv6DJB6CvGo3cdW3UGiH7hFvQ9vVnKw28xgvq",
  "key6": "54z4nRjCy13m9AsR5cUAMKNoYEyUgNvs8N9MueESLW33D8CH5r5yvZ8AQDk2FtjYWZvjxZY1wzWFNuzrhAyYmHkw",
  "key7": "4VJ5C3Hh9EDXAfMSSq7kJyWKLMkTT5NYYLpG2CpPZo86z6i9pPFZ3p7shRGYB2i5BxPwG6e7FXCJ2erAPRCvsBam",
  "key8": "5bs7azYyrTxPZinLjS9vXN5refmG9sYdBnpJY2o9Wxiit9qL9EDf1wsvjKibLXxhHrUaW1PcyxTsQAz8ydRsZ2Ku",
  "key9": "44UuZaf9YE7eR3yZVTb4eQURjUhcP5nUfaD5NfD4oCt3BGsSagdquW849fbHD2zwgECnfs3VgyqxD3q2Y9Qxs292",
  "key10": "4663HAyYXXQpu4Q2mzFfURweeEFxhfFA1QWpBA1A6veLnufe8gpk9SUkHNeasyzhPmdWQToeJGU4vGpfyB47hT1g",
  "key11": "5cq1Rnmjok3gEbtvyqZ57ZiSPSvCuSNi8f4bmuGtqYxqWn3P44M6A1iQ1pmoQKXGtrnuFS22TuSoJqLRJ74UDEAU",
  "key12": "36pj57AkL44GP1kGXaHLnXVJNJcyAXd8Cx21uZqvSydMP66F3T6LY84vLbsxYZyKugVMRsoLARss4D84Lhq5FQm2",
  "key13": "mw5qjFiyuGXRPojbvPwjw8BNE8bhvQajQ1FV8xuhm4WTLLaQz5FfXE6VvzP1RWehgZxVhMriBxECHLUTwTdDzux",
  "key14": "4ceu7dFjM1izmtA6RJAWre1e2Gpnvbj4BnrSyRanv3WSDMDZeR28R8usL9BPuckQgtfNG73wetzgTkXE5QhNBBqN",
  "key15": "dMKgYErYXEfHDaJQsksJVP4h5QT1oY3eTTLCgvE3nthW6MSGWqannWGJjyuHrEV8TbQYjiT4macGR4c7QGxFrZ2",
  "key16": "3AXiGhEwVAQ66Yt1xDPLYgeBw5Yntu9JttPCjgfAeUGZqmJqzScUxRdAWXokAeo7sZPzFS4Sada34h72T3CyLyDD",
  "key17": "5cyBYevBng7fsV9VnNxWUhEqnbQVTeFDNhWLLYerm29LLfuGgxbtM4rAkLAVPtyB8AvZAKTJijsHFdze7Su3NhfA",
  "key18": "3wDgWonqogYUu8uzDb23KisdauBXNECydAKyewq8nCbi4xrbpn5Usx9tN7XJZPQaEUFfUzvi9RkFVdYHp1yDqXcM",
  "key19": "2XU59MJQLZucfHyQXNVRyDuykxRNcf4g5PGAvDQNEVh59vLRSvqK67WaX5YFTgQRdcLSG58sBES7EsrgYtpVD6iZ",
  "key20": "2F1sU72b7x4bYUVedS5NFtGEXfpDNtgcABWVudUQPjtDSrur8yWzR19JCAmWkGLtwq7NEAY95QqYYZMyANegW84Q",
  "key21": "3u7UxyTavp7t88WmJshPDdYndYRWNF5GAp3twTeTRShJ58meA8voB9eRsZBjrftMbtc9sQc1hhUsNPFi14RKQdYt",
  "key22": "2ygmMH2JmG3v3SsnzWGuZYpkCVWCLoiZ4AnoLJ1FHdWYBWMcV8F6p7QkGrSiNYX8h5Wg4WM6pmqhRwbMMZGBw3HH",
  "key23": "KcfRS5dHDCAQxdCgiWcwAycAGZauKaPGLEPcgPpYH1YMwhKg4KYUmSug2Nky5HmqKAVkuPgHVn45kSFwh4QhwW5",
  "key24": "36oGLXZEroJzdzDdB1qT12zFpPGCzsf3s9tqaHzjiJtaD8ZQ5t71rDq67zwuWa5cAj7kKrgWNnEeZ9A35WxN9zoa",
  "key25": "5jBE4efP5Bkf3r9cgsAZaZmFQ5P5ZStEu8aXHvcAZYj2NULLEAD9dwZxemjvA13waoj1GkUmyRTmiQiZEQ4zfuwH",
  "key26": "4JTFa8BG4kaahAGHp7cFhCK7yJgeyuJhHTXUF7q2cqL82ZqDv2rkkct9FwQwV5zqUcHFiWKSPBfAw7eZzy5WufuD",
  "key27": "2LwphC52kLT59qMtjNGkCYJEFL32CExx3zBjcsy64GRvGiqG5CNEYwyVgTeQWesqwxro8yUZLkLk2JKM3yB2v2x9",
  "key28": "29DJWHfyR4FSPHtaa7KG3hByKBTpaAKUwj7oMbz8n6aXwjB9dhZrQfmet8aZqjsLPjnepNcePhfwQurtYmucQgq3",
  "key29": "3uMvG4BefTeCXdtzZqZcfqkdwm4DamqWsC9KaEWairhZmRixWxK9u7BWzpruEfDiQNxnowEiYTEJ91vQQRfeKWVr",
  "key30": "3houqvYNgRV8cfaPuwrVaewf5bJViHeeTVL1aJuJHNkkT7GbjXNPX1wQTWwdsmAKvykHybDoGADo4J4CjTpv8kKm",
  "key31": "4LBtdgARp2LoNcFCzz7uajdsT6Pe9aHWMudQ4onLavxb85X8oYGiYeufdWquVC5iBzzYFMfr46zCVcQTFVP4Lw7K",
  "key32": "nkiZNpEjGdjfrYt2R5RdD79J2XeH9YYjV3oQMaAX3qhUbBY8iBkk3a3gMDyZYVn1ahdR79giRk9aSyytAR8cx27",
  "key33": "5Z6cbDSTrxeAgq6LeSM3HTS6eGvRKpvNtQ25978oiuHYPVUnB8akcdyFttjSHGaT3iDXtyxwYF7XUvLQePGVG1Ye",
  "key34": "4VXMYV3Ymi4o5oGwxkNbv8sfmSnfiBVrLiPnd9MMv4bbGXJvLVNYkGArB2p87gGFBHhTAsKPbVRqgYD9gow5yUgL",
  "key35": "5xpayTj5gVFTjSXgAVLBTqinCit2sweguHYNVt3MDEe19VgMEutbf5pAvvDNkHzNmxRjzghjatjGkmcMM4sL3Mun",
  "key36": "3WdnvM3t7Z1PWqiG293uu1yTTeXDFYKsDaAgzM2fQeEfSqhBrobbF3ajQiLjmeDYekMTQVX4skzKmDxkUiLznyEG",
  "key37": "3xDbap2kd9ENe9pmbsWpyvxHzsadEpxH7VTiongnGyeDeBKMWD7vzzuL2TcTN2pMYaLcqeieXz9hpisRUwujYVcm",
  "key38": "2pDrEkU7qPhCiHXAVyBJ8txgA7A4wwuwdJsvoPoADQzmaesHF5RUrxGEwfVLr9iDtrxmhjotzuapH7KvjEd9LwKM",
  "key39": "7oLPN9e6gzbeXVRrPhnzgPKkGLMbzTGTJ7tQpCqpgxc4eibYYxBDj58FCh4vR7gRtY5PN81LFjr9EoSPgmLXAwV",
  "key40": "gm7Q1hR8qZLAJasEG4ihxRQ3aEYxmREPANTkDFn4MxMhksnsmpRZWt3YAd9cVxFu8yXzYq6qs7NHkdQHggJxUaw",
  "key41": "64bkdaassjbfRqXhM4BbCQGZNF2M1QfQa16oidEap12k1vxPMjgP62Dai4wq2HrZaGXuMkxB1B5nVkWtK6Nd7Kx7",
  "key42": "597rXkhd6HKVhXGo3Koau56iYGfRMWKT1nJ7WU78qLNGtAVZ891jC2w6gi2nDPPRQ7jHXHTnyCokfLadh6m3Zzi8",
  "key43": "fx8pmym63PUxvizss4m9D3v7BtfxAFvC797xGfsrrey62hpLDSCoPV6erb2SXP6w9eNB7C5KgfD3fGULK9Nuz6f",
  "key44": "38CqZUL4pddrwcyFmcemjS2ZbTDEyZDZv2hoy1bwJNqNb6jWe31v7Ge1utHbHKA7B9jTc3GFXvnYUuVCiTAssBCE",
  "key45": "5P5Qg4Kng92xqeUZZwMmP5ipx7gwK9jCKnd4yrap5eCGXkpBA64nJnvmD1poA4JkqoDmDQCBJ7EMnH4DGNRJxBoZ",
  "key46": "5U1NDQ8zr4mY8DhjfyQW3wUrMJ9e8igNsERmCXhxkNF4fNhKh13B2GiMirnymBF7RWN4kjEGSeyrvnrGXSYHLNmF",
  "key47": "3VZ3KwPaPtbDhXcbraYkxwGJr3nPWrJXdHsShBffsWgjBHwSqPzfjGtru2st2KqQKnNioeEQWteZbgHifqTB6oFP",
  "key48": "49EnL5pKd93KGNSM4jsVQWRD67YNNoybyXPM7bcDqAYFBBmcFj6aSrR83vxqSdHUU7peP8bpWEXDTXJnw8JEqgmh"
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
