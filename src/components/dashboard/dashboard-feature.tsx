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
    "5DdLxTLPx3vUkxVJk97JqWbgmf1rAgcRvTeKfwEnz4YJtuwHrNBDBiyrhiSonV9KzVUyecjfsdNVc48aWqwuUtjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3naUWSKeNPCqrNNvWeLa7JdssagoxGQNRuFYJZRHtdo9gbpdHejdpZpB3xPguTKGegZKiLhV1w6ZUhmc9WUxVyJp",
  "key1": "3be37ezwebe3dFtujEihf1pCrbrEidyciHF79nnXNaBpCpRZdg8mQYSFRsrr7U3WMrDhfmzEDbFUj7DmECPjEizz",
  "key2": "rTdTCm1eEC6irVWsTMW6Mc4KY4PMXz1KCQoegbtbKuoW6umrqfnpsirubs71GtYd8jWvskfVahrsAhNcwxH6fJJ",
  "key3": "5fHkPmmgHyTQ81FhwLq19v9DBq99Pt1Z9EgqXcf9JLbZVcJTipckwtq3rpnd49xTPs41L4hyjVN9oyekE2kcegSQ",
  "key4": "QZxihsfggfaPNoF3yANsaYsugTm2K1WbiS9uCrqv5LcjLKMSufBbwKrVLkp4iaRmKwnyBKoVSX2n56gjs2M97sU",
  "key5": "2kdf13GCq1fLQBMftcBucmgqfsCLzXabE4TryqueAzLiveE3XiWyJ7KRspX7dpBF8fYQa4QJvtTjaVoUgHjEkiNq",
  "key6": "Urtr2xTmdH5xHdPioFBa8GqPoSWyAttsvVxRe1WsZPPgkhyTLBaeNwh8zzMTFoyhzbvadZVQDG2Z8jUi5kKGsCf",
  "key7": "26myfXhnVzx54euz7e98xGJuRXXXEwoi1kkMSzkRiA7KxDmf4VRigmYJUoTDigSB5HzsDu9aM4Q8X6LwBrHNBPNo",
  "key8": "2DAHnjuT6D8yq6R8jeQVRpG9qDQVpiHhD4DGjn9H6Eng6dMxpJjBDD62f2epANGKu9dvLhqipSS768DMwSRzv4H6",
  "key9": "3UchPwYokW8hnME7GvNCcKRXrpC6x49WiZxjom3JAYh1thdAVUAVhnM97MouTt9UUsLcFdrtGd58YfFgbbhUQG68",
  "key10": "k9BXXSgMiL8vtGQBVNsZaxemo4kin5pa1XmhAhToBgB1gx1HRJJeXxBLb4Ha86vMb1iPYv8Pjz18oVdKo4oxTaL",
  "key11": "5RJbo8QbS8QGQRM9PmaJkcRkca62gsBoYMuE1xnBNDPC3xekfvcDekgrj3afBf45mTpqbetS9hBXLJgicnzZQkhu",
  "key12": "5WPAotd1dEiyAihZwoZaz5f3mR7FFCdPiEaruAZrSLfZC2E8i1mw9KzZLDFiXGGMQnDieaSEuxZjHz7a2zqtd9jz",
  "key13": "2PZHyUvbfjNPLymCm6gn3157SefvJW6tYwKFrk3tb4nokvHjgXJejr5n39M65r5oDcda7QSwaanGAT9RDHdcbU22",
  "key14": "5hDyn8VZGEPxBGPhCythdaD9ETzFzcABZ68bciwHPDG3nwAWPW5xCc1kmVravVhKT3g6taNuM2yeTowa6uKVhDGL",
  "key15": "PquRLz6PC7E4Jst4DAAk2mKbqht8MhN2Q3moKpf3WdpMejkF1XfaAHwKMq8evP1Yqtun26JGPkWFecjpVZud6zV",
  "key16": "5VuKXMrFXJjBe2r5Y8SBuggewukBp8iFRJWkvBfKPZ2S99jhCDKhPuzXAKqLKBgzv1pNTXmxAaE9HbvekDG753j5",
  "key17": "QTMXAxph7RVB5rD5342xxBT6eHLUVPxHpCtuJy4dfJuTnWKJqq9EX5wpqzutJJJ4kWJ4dJfHGHNfdow5eoeRpQw",
  "key18": "3BxLDiF2cLd7PzMN2Fq5ANNg4oPhNss2k51nGLRjgfjSMZPJ8qoJwChRtvLgxbeAF4M9rerMtaHUJuLfoXJs9rb3",
  "key19": "3iEyeFdrkW5c7sdCLPYTPfCC7k4bwHcP59xTCorXAjijNVNYKFtaCbXfNxNULaL3FuDRfUgEvBNjLigJM6HVTeTk",
  "key20": "3HKpSSKWJqo6rGPRApk5qooAmyByKW6fi8txn1EWjWMLkZxwLX2quPmLgtSA8sRHQGqkJuM72X3DjgcDooWANzTb",
  "key21": "4R1vxDne5QYpbsLQBH4HemxHVUZiyPyCAuoT8QikNFYFsStWwXA6trFe6URQSX17VBu8meaEdtW8dqoAYLkWMifu",
  "key22": "3MRpcEh5j1VgWYQsR5wphm8FxCR9tcndc7yMQSt6ZmLrbrV8ovzABvHKj8kkY1XF44fRZNjRPToVw86LxvBsSFZV",
  "key23": "4uNdzAE8hNoUrnRw1b8wN57gR4n34nVWNidW9WhL7npswqmcfg8TF1GFJmXRJcDaKq8PMjPU2JS45uhGJVNTNfyN",
  "key24": "5YsPwUbgvfehyJayJBxaDdwPtBnPYNCSWDtBdK5Q2RYbUo7i9XXGzevZWAAvTHZKkHr9Kta9pYTYEUHubdT5PLDV",
  "key25": "2SWYENX5SDHGnvGzHhbhpAmjKsQ9Kucqiq3mv5bFTdGWx8wcaZin5QvYkDeu8RVoYtcjuz3aH94EASvaLMb9rD42",
  "key26": "37hZWfCFqke9WR9kyqsNMMBarKxU4utVekKfbyYS34Fpfs19Xkmv9yZ3TQrZkmYUQ4VqVRwvjuvRAHC6LbGM4JUK",
  "key27": "2FWey81fyB46RncUhCvN3j7d4hKiA4Ye7XrveAfGsaYeiNV1tw3yyGnuhjrtAp7CJagdRQNzoZrfD1Mgb46dhocb",
  "key28": "3Rms6GxiPUMZDZKTtd6WdkvZ5wXmBy6isnCeVZdPt4TVauSavkpRNGMBVSdf29U5pDQQoW89USxewF5UCYTcSdmu",
  "key29": "4pMwWqkaW3YJrTScBv2DfS6H55w3B7iGSzbNXVyZLWvhtYVwpfk5JGn4mc4fW5q4t9xP4zRGKSeCfSWhPzx1AGEx",
  "key30": "5hATHxXSToTabLWNkzECGRAZQ57DFTSnk2PFyTnh2rfLsgW5xdp1Krf8n9m8e2nrbPkEumfVrKmNjKekGiNdAFPN",
  "key31": "5JfGcwvZjqXhZqSwLZzWAGDFDavN4WhghSfxTntzdSuPQhtX7VaQRq4PanVHGgAS7Sp3H7x81HBcMtSREE1bfVqz",
  "key32": "5cn2LGmpsQthEN1ePtDSasfSyUuBf4Q4sn2JKhj5i5Y9FRdDEzEBZLmeCiAG2gknRxNCtfTmZZnL8smFMe92dhaa",
  "key33": "3hckDPKzbTKTsnaWx6H32Goskte3JBo5J6T3tgJRtbB8Dt2TLE5Lk7xKFY9sJnd8WTYGAaSVBoDYA9YBzPg5M7r",
  "key34": "3e47azkXSVgVyMTgk1cPR6xphi7o3txm316Ch1T7UnhZNFNnLGHKFsWhZQsanyhNRD5aMU2gcWqPne6cnxFzpWws",
  "key35": "3wdShpTJuEZsX5J6FGCKFk3ipceHAm9BHskWULkAns7PMwHbupV3yTXYxFahzZ61RXFDWbzPzV4JxWVVy7qC1Ugk",
  "key36": "4GURet49QHHJnMWmNDGQeDjEv1jWmFBxRabnh8UN8wq2Rvbtg3fr5np9nfmHXfXPWmjgBAUx6XMFzGiqM2JvfqiS",
  "key37": "4SP3XVukkN6oPFKfpP14N8CYkCUWRv17fAAhAJRp3gX9i6nMF7qtDcWqSxAw1j5wCxU1sEUcegjZB2M91gP6D8zt",
  "key38": "5rSWEeqWMM6demQJF8go43ysS8PKTAo4ZKxXNXcckRRWRFbVhJyK4HJxVjcLuoRiniUVrStRZEJLAYuEaTbTkeUs",
  "key39": "DMN5EQzZgBKjoviyLQ41NpkxwB2H5r7hMRRfRyVfwXDeA4jWWWt7RQDSDbZi14UsCMRLLqDnuZ7H4dJZaMCbGPL",
  "key40": "3PE6zJtras8opqtu3kZ5GAYWXisnQLhbLk5EJHRUt7AK2GjEeVgSss7GnsfaUZ8cyeYCX4kAX8VCTrnt1pqGY92T",
  "key41": "CE7hPF4TboXeRyz5PE5jSEUD5zcjBTmAckutVTQwiuvhPpFv2p8NxQtXctXkpmzDaGzcZ3aTBhEXb2JB1hG7r1z",
  "key42": "2Y9YinvaJzQDZTnKaaakUyKBDM2SdHmjd1V26JhREqu2Hjbr7eoVpZcTstRrjgrL1fLTmzZbe3WF2khNiHFg6uH4",
  "key43": "rbnNehtEGKDFL3RLyz66oq6R4KupZGVedUmKrq9tjfZ8BP8tnaTaxkxbURMy2Anh111DHVQG7uxQEkJxmvNFQxK",
  "key44": "4gxe7eApqpH1YzdYhQkWM2EwNPCgqLJgkLWVqVB3NGXpqLeHB1kjVciYFmLyeG5jubkmac94dTUR743ubovQTLFq",
  "key45": "3cV9bwMZFdQCgpZ6Avs42oZoViBFduUpb55iAnCeMexfWRSiFus6RNNGDx43FkwkM8BwnR3HZg93FWmrNaHUC8N4",
  "key46": "G4vBHQripMZcu3LtV4tN4nAC17TjNnHppxrHgZD4JwHSpp3DP8aNVse5DmkfR36ooZ3HkDBTrYPkBGH8UrgBhf1",
  "key47": "529M8ZvTgM61c7f4xqmvQhe41kS8pTwNyqAfXG8QS14XK2JCPuVnr2a4AQPdStjEgYTmxueHMqFxJCLNGTWgTtn1"
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
