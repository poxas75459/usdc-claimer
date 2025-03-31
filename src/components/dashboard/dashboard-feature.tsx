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
    "g3eXgjB9nN6q8JiTNFctQdrhLr8n9m2f1AVu4LNA6LvUoLHXYVFA1x9BDrDaHFpxPfBZE9XjDFhxYV8ZmRid7AM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fnHegxd72HjJPDWkfC3xX8esXDZgu4HeszWNoS8d8ZrV4jUS44azxevyuJ1veUXUhXrXmXRCFTLrdGN7aVwqyzt",
  "key1": "2TtKeTr4yVnKpjjyZypmARnHMUgmRibaqgZximSTTtwo9hphRj1uAdFDwDAyfWCLzNT8dL3oAeWVFfURABzvco9k",
  "key2": "3kgBt57HvtfguMktoF2mhNrbNT26PM38PZQxnPhUetMHUFWz59qdDpW37gB92p5irqgD9uGHTXcihp1FeJZLZE36",
  "key3": "5AAK1etTaZESAYzkKRdEkWxUezuh1zF6rtnerXSBw4XuvpKQ63RxdPXrT9t6Z4mBFTsRXaHTCrFCJoNEG1QB3nTC",
  "key4": "mwVTEHjs3ut2EnpsVYGN8JF8M9XedUJm7vVMQEsoNJ2eKyCUGdGBDNa2QGrtA6pkbjCeozUkUC442kLrkk2BymX",
  "key5": "3VpvGQDv79ChNki7znw492Q9FMtUNy6EMbLzMoA1JQHgcFC9GiFcxgJPaVYmbE58TM3zfB6gXpwAqPrUu1e6E2gQ",
  "key6": "4xg94JSNjbYJPYpETMeVTD8QPWMGNsdHHhRxcC62P2auTCje85MRyu1EgXaAR2LE7WorjZ682e4vJuLhzkUoFmi9",
  "key7": "5Cykra8cX7KHavMBdXUvu8r92CHEYCLPo3U7zt92xAog3Vrzn1GAw11JLyJ3zjL7uxaC3mHiTZz3RRrTqLMPhWky",
  "key8": "KiZqi7oekAdAh4KhQ1LMrzkZAFUMo2LmCW61JvnJWxeVg2cguXfHJ5EbVY288Wzw6iFZ1JWTpUMnGHbQ4Di6YGM",
  "key9": "4Qhden3EL7X3scdNS4fodcXwsG1Nr8f9Ur3X7hkDProcQvsXbY28dfBu3rLv5yK5HydzDtVdhvyb9Qu33VCUcyLJ",
  "key10": "31suwera8DVaXEhMCFqC1dLTFuNQp75rxtpwCiVg5P9rkJaooYZbVw4Ajzkc4rmQJxcL7iztuUAYpcRLoxEFq2WN",
  "key11": "3exuCz4iwMg2QiXn26CMbszNF2uWoSLvnhbb93GG7HwttzkgYKgFKsZNn5VhKGmNqhVkf4C3Nwq9U39NWqHKF3Ry",
  "key12": "NvRNEGtmySVdLoyXyBvAHHE37o8xcagyqBZ9Jzzkgs9YFgpT48DURyg8zoAUL2xL8ndMxz8A1mhby87wjVLJNMm",
  "key13": "62rSNTrDAccgFegj9KM8xJmHfzfFRUQy9r5JeDk6dLamU2UDxQuxupPNMf6aQrfA2RJ4Nae5Q3FXnS6GFRSmpp5V",
  "key14": "4kohCcDXPvoXn5HVgysqoZcuozB2RcnRyHDCcy7aQZ7xA8ADruejTJyZJ2aR2ZPwYH61zkS52WG6jQQu3cp5GpF5",
  "key15": "39yaXMxhEzttnGy8MWqg1mSewDguQkL2PVs8kWAtuw3DJfFHxtU17Nt2dXq3X4tfWnJ7nvxydVRXM9hp2DDv59UX",
  "key16": "5pbNBRozq9b5btRnWpDRQEpUbtREeKTmbgcHBRgeZKsyATjrrZ8bx1gziRRPL3ci3DxHVwDmeCagDTiD8C381pAM",
  "key17": "hc3U9U3rXQv6PmtgWXiFbkDPtE76wobubYwhWnjj18rba3gZE4ZCqSKaz8NotJ8smra7qZVtS6tmqDxLAiZrss1",
  "key18": "5bB2BJEGBsbTj4J2jWQXEEcML6dJDuaDdiUY5LLFfDd543xRvRaYNCze96iosg5UYo3oNS4WRqBrZL47BAuJNm96",
  "key19": "3NrqTtZKGVBp2q6oZRCNnCbEztDhVqbyPeyD4pqWqd21jFrhzET9mpZXqJQd8HzkkZG8HFZXNNe4v1NZYy5amsVr",
  "key20": "eUJYSVBHNQ5GSNLAXZKPPwip2rNLo6PTXMXZFsKWAuHC43k9aw5YG8d4aNsDGW9PEotSuud8iYhYCfzg88kEvJe",
  "key21": "4mgMsCjHsCQTFZ5aqAUmuhiqaTQe8M6WHpQ4M4ytZDsHNB5YDCfAmxyMMVT4hLH5KiFst9rNH1sNR9AqRqC2jc9L",
  "key22": "54a7DbDo62iiJkK9NQ69S3Usgv9FeY4bMFmnMc3RWUwD4vce65KMq9siVFKFatLGJkTBUuJXGhoVwR3XFWGqii1s",
  "key23": "3RMQ4dMJzL3nSR1etXfhgcegzQxnUWpiBA67QnfJqshhrAY2E65aCbQJNSqjTaWMZATfdnFLbwY9EgtFvjhNxfmG",
  "key24": "315nddx3cfP9GF1zozZLUKhxkF55uNv1Scc29aaPC5sj2p3CbWS6S7JsFebhTwQbr28NsP5chaiS8tjH3LC8pcq",
  "key25": "5JF6RFoDT7iTXU1JunPRKEMAqA7hgqCmtf8fTXvLGctnB7MPSTrVD3Wi9rVzQ4LQSvEKhmLpgoBMGUog5YrsKSjP",
  "key26": "3new5TcqkyKW9v9PhKnXtd9aJUFJh5jqWtzxdeVURDEbQgU2oWiFxe2172nMwagJ3MepZ3cLU9fsNBrvEQNuetUX",
  "key27": "3W91DEREtaEWPh5QhePjku9Vtnto3C39eExQr39DJvvHF1i5te9UBhhoLgFnWm21rNj1jECeHKhCakyQKhVDvSEt",
  "key28": "65RumJXx5nxCXF6YZaSK8fpfL2wwAujhBd6grF65Faox2nk49n6CdWt8LW2UMPnA5vd8SGndnx92tMLd8oybuMwu",
  "key29": "fPUtCuidCUZ7U7pPaybd4kXzsYWo2U8DsuFXFt1Are6r6FGQ6QkKXnRygv4uATBbHkoZw7giPdGMnLFVuX9WrxH",
  "key30": "3aEc1xtxiQ9LDUm1dGikYzpaD4pHsHQtLmkUTij5rzF4pB1qcLG1WG6cPjZfrHftRJsktT1GyYKsfBiJDtm4eKAi",
  "key31": "2pWmCfNpsL4Z4c7xuwceUuSqJeFAeX8jkhrVSM9LR9rvKe87YwEbsTFk2u1GxMwizv6W37gwshhTTaUvmyBrNfxC",
  "key32": "5mZypMiAfYU818t181YksZkXyJT2UEeuxk4ywzQ6zddjCTQePKfu1RY86987mK9Vzbmd2vfKvtCPPxMeiZSmEPgT",
  "key33": "2tgZXdRyhfWy9eD63arhfSxntbUn26gbZqBRmGM4BGze2FWjnyCXqvbyyiWja2zmMQkQYHtG3KvpD11UcfHyzoaB",
  "key34": "3ZawvaXaVVvD24uQnNqfMWH3WNy3ULnYbnjKQ1vjtZNufz1a6KpVf3hhYdiy9yNkSEq5GbtFKQzKMPhfpJCtzgqU",
  "key35": "3n7JXHpR4mkqvn1CF7uZjkURkrDuzoeeT1rj3LZ4AL1iEXx951XwRzpkF2EKVbzj6Pn4ynmZtA3No3p9cJK2RetJ",
  "key36": "4fK6cRmwZCsxmU2s6p4m4mJVHEB8WazAfwhWp6cwVqKoE69nbrSxFRM1juCasBRbLXc4YVCX1SoVgZWZZSPsRhUi",
  "key37": "5KNpb6fSq7Q7dRkTxmCMhLnrACo3bejdjGB7TD2rA5f7DNBT1nt6DENzHHFiUAus87Hig1YE7GjoDFA4ry7U4J3w",
  "key38": "4PdjEdcfxYqRYvFmkstNZGFJwfSJ375kxnNfyTeMHap4pjj3rA69VX59FZXMQbPdfkiYAaLRMMKjt5PiHcSMrUBj",
  "key39": "35WGJp2V6JVgP8DMjov1xkxVqPyewuRpgzdEcFNMWmdXaUK89DG5UWht5HKhJSLmSYVkqEVSyJpREEHGFdJG5WVf",
  "key40": "4fgada1HMaGkPNAGMDefQVfoz6wcNAAi7YEuu4mv74uJ1ysZKSrmfzjpqAk5enRqHryzaFxWLtVfY3gw3gvmoass",
  "key41": "3ZA7N2rR2qj3sjTgczyy1aryurUd9pRZuRntPs2XKYYoqLkfE7FCNdNP8FBSP7Su4jTFdYpZNCBK8ECEfmaA8Ns6",
  "key42": "4KAtNNsDzYmy9yLjtxMw78Pkmx7zr8YJZSYVcWuwAhjiAkNHQJBdp9wGNokXsrPu6YzAgbKNW6VyE8rGVSSgaBjA",
  "key43": "5Dnhf6QVHRKdCEVkUBWK4zjqthyntYdRfEh58iD8XVS448xF7hTJrJPMNvnbp2k3JQ5QEuGdz9BjzwQVbMVWVebr",
  "key44": "34LikLdAXCr3CwF8bwG1gLCvjLJb1zHcKbuPx4QvXixnyuZayS61EDHLUVUVjhgT3ZK2xcgtjqkJ7zDK91jGTFEH",
  "key45": "2TMnNvazDaD23uwZa72h7CLtkt9gVnye7qQ3eg11KQxC87qMr9eZ3j7kLhVHFAaxf2SGkf9s4qqM5hm3g6iSbjKb",
  "key46": "5jJcT6bF4hSpeCe2aHZMh6aPzyyywwynYKJd3NLwYDqN5q3yEtK4vNLjrUN4AsAdTSuXCP7tKTY4UhH53u8Vrmit",
  "key47": "3btwJ3igW4rqvJ6oQ66hGZiZW1KpBQ6VVPYeuC6oKpbXzf7RNGLgofNKLa5DQS9TBm6ikpimCmtG6xJRR7URqS8o",
  "key48": "3PC2u9UyfmdkVLVzUQ4EkY9LKb6orQRjHbmMeEUKqxEk11vryEsM1bJT5PcgPS5k1h9vJn34NwFGc6VSBGjJoFTD",
  "key49": "4Wfbzpi6g2Y6T276kshAki6ijT1G6ZiYQWhXm3R4pzcfgfEG3789w4w6Gcj5Z2txSuim29jJKkMvsM1w5y1kKHZW"
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
