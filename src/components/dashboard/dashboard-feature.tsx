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
    "2iRsvePmSusKnHCgehBFuWLN2PKgzm6UmNQHckAsNDFDXFCDPNzwb3qaEfWLfyKNkxLJZZaez1ycha9145A5b4uZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wvd2gzE4xij8DWNkLjDBAWi3hBp61Q1zXMMjWBhbHzb8wRTuPc1iarErhfjWtxi5AH1FLSjQA4pywpGKbZ9C3rq",
  "key1": "3hhwRYoVR5VEMAAuMruk3JCZ1MFdifoPUs2F5gD67KD3faoz3uuyJ82YFK54Y9zwxzuj1SECqTCW5CebXaFfUanM",
  "key2": "2Vd2ofNQ4AuWV26Jaazc7JMTDjKfiztdgKCjBnGUZf3RrP24nbMN31UnE3Cze165b5FiBy7LX5bhjJ2wbKbbjWCb",
  "key3": "3VNbWvXFU3d8ZegfRs46VJk4vsnt8DddBrLgdAs1fdkpMDoxM4HuPLwkwA3krs15Q4mCcawF8xpXMVCM61VEbEAC",
  "key4": "25AHALaZppjcw6Uk3QVccLajgYVEZQZin7QhBNXYXRXBuiwXqd9aiNPVQnTf9AAa6KYTMNPfpez4xn3CNNd4GQA7",
  "key5": "2UpkSfbmGdNVzNf7FpCyW1ZAgEAMqDybS4yv8jFHhAWRWwMSgnNTCxc9kPc3Y5bcNJNcs4PS7JE81HJDKF55BhG7",
  "key6": "W3d6JMcqRE76BqSzjqSyYWDn3yZcAUjAVMnmJppchAXNhSFqpYnEhXf6TakTGjVudDKoJbEfvQZoBptp8JQ2Fu5",
  "key7": "7JM2MGP8gxuwq8TehNAUB8RoL2REE1acsyxgagFgATf8gZ8CVg4PXc4hRFNVs7Ayhe3BMHgyBTRkVwfbQkLVXhn",
  "key8": "2zzZ1rv1nWUqJ9nC4shggs9iQi2XgEDLenPnLXeNMxLWg33bPoSMR4DiS3NznTT6sv1R3QPviNBfcRcUt3KZKsCb",
  "key9": "3aHQrdW18rFuwPnos12jmHh1NNNdvaujkqrNjzCWsKKPPK4YJPdbwvEgBT5FmrwxaFsTK1GGxMdPUFZAL48bgp9A",
  "key10": "2y2r3e8wdUDSWc39zEDpqbuc2jJWD9gwCtHz97P97kaWvP5qCRZ4ANmnW1HqPGSKeRSyJ1zhKDR5shFsSEaS1a4X",
  "key11": "4aQGjujyvUn25X4WEsUjiJYQQgcEirStT8effWFnZrCEZoMQP1NkKPYiaypbfewpBaDb78MwXyU2UPW86ficJ5C9",
  "key12": "3upiDCUovSGKBKrRLzHFcaxoo5grN7Q4cB7vrsh79hyxnUwtuRXxcG5ygZP1fZqm9V8DTyo6HM9xcJQU3ZY3kk2X",
  "key13": "5cnzrDeoBSEnw3D85Gqpk8mUvDDgxPGLh6bjf1q8Lk2cxmCQfL5Gmz5PK2QgUf9rA6aPmLM1pJ7CbzQGqnu1Ty9d",
  "key14": "5MLKc9MR8FoMsysZhWwBWnKZFkc4CVPbTDLwNDU5TX2Zuqtvyv6SURXgjyHJnbhvwshvrUmjGANeFkF7QfQTsnTL",
  "key15": "2v4sea88AVEfPsjV65ovFcYuxTYPjjMS65ZogpFEkdwSCKd4WbB7JzJoL2bLd8QeLKWrvcJ4Cck77DZuNDGLJmYG",
  "key16": "52RFCCYSGwKofrSWvnMfp7iMLAmvGncVjyBx6veEy1ueydVuzCESueWuitdDHuXkd24rhX3Bww3Bwx7rZjjEr6d3",
  "key17": "5KPveSudcVZqrw3MLfYn4SeBPoQFLSfawqMNb26QVjzicg889c5RDTTfixXXTHVVHQVEB5RXJXBKb22aki8TzfrT",
  "key18": "5gEijeU5SSMmGURkNEtP7kdarjzqcXHgRotvBsHKV7iRFX45JYYLG9ptzLLYWCXwGUf7fLphj58GZ4hfUbCEyJLq",
  "key19": "5qPM7tTvQRbG5SyqbHg1fK1iCXoRuc46TGMNSwfx63G2PXi3crkYcj6b2RgUJuSXVSTxgJy9GhMSCQny3FFyUAxo",
  "key20": "383Jja1Mi9jZ1Rro4DvaNo6nrhMGCMHFBPovnTqimWWVJhY93QYXNqHWkGnouUdyRRbfBnQZ1Su6Xh51ifwQKxkk",
  "key21": "291XkxB6bKErrToMLesEbCqMVQn6aChje82E25vRvCtKRkEZFFXTU4w6fgKeqgGN13bHWKGQKh5ShHPc5vAZ9JNJ",
  "key22": "3dHBpVSpMjRoMtTdofmpxbmdZRifToTt6gp14Rs2881gsep5twkrm9dX5jWodnU5UDPTwvNmd5hgw5dmgYfZrGw2",
  "key23": "3BAxo4QE2Z14NR9yfxiASbDZJqJM1WwqbydBxGcG5xtiKQSzUdaFCJPXp34YnJaWgNuXacB1DY35seWhGq3DXZkk",
  "key24": "49HaNUYx61vCxh2mXc7ggjSBUyDmro3KQREZAUBKbPqUwcVcxdcadaLhMEXBpTjicT4vSUiv6jJFeWZpBG5iA2NK",
  "key25": "5ccvhuVnntZFTx4DWP9voh8TczQhKm6BaquxfLJEEjpQc1NRDyS5LxCucGmo9bs21YLtSXJ39kbxWm1S8Qy291xX",
  "key26": "4ULPN3x2ZymYgrqiY86pTLZJkLx7M3uhHHupXTKLrx8iNtLyHCq8NnQntR75Hb4Kg4ygoGKHFjZFuZgzy2qaYbFy",
  "key27": "4PXPUB1b6B2Nzd3q8dXZ5nfUbVnxdarjV5n7sCvezTHvHVXNYyMU1iG4U1No4ekfViPH1LRY4oZeSFQAryQY5NSG",
  "key28": "BqoKHFgEM22UCbH2WF6ddXsiqd4jKUJFBF6NYjxmWN3y7mFyixYWSiDETHKEZMZvMXUKo1rSqPo2m5mk1oQki7f",
  "key29": "4DMWEVVSkYAu5zDmLZm14cVCgC6gUWMHCpfg5xemWqdGZkJLMNynQaZQGTJDezmanXJvru7usap81mFYKYBTvRMy",
  "key30": "2BT455EExVazNfvdHb4puuWuYoKCx7SpvcfzWinLJUrTWS4kPpoCVLS6gtHCNoMeXy2gYiBnWDmPMvwCo2rjTb9P",
  "key31": "4tGZKaH2f4WsYpSfbpRujbHtYatVkVsCeSooTz6ve6C2GivUr6hZXF8Kwur8V6JtdFXMe2Z9U2sYymcUhcxJorQp",
  "key32": "3B28tY1Sn4JfRXQRbF4pwWSUQeradYEKkUfd826YMTGpfxwUnK4XqpNKjJcn3i8p4vrSzaM1hm7AzWnVrnRCRkbs",
  "key33": "2EarDPrqw9yxux6qGL9xEaZ6LFEtsL3fMQcg4xyvR9kjzk8mHEB5MvszPkmBJToN8tM1SopE1FHMy4VPJW1EgqVq",
  "key34": "3XroDh7hU4gnULbGg2SZaSFA8569Ch23DkW2Etrnm2ToGiHNyhQSo4XE3yB6gHPjvb8HaayTxvoKprYmCJbQXQvT",
  "key35": "3BkuinajGuNMY2ZrYmMfnT3aW145f7ysi59sBFMv5kTYX8753xxCGKDcRntYZfxCirpXrhDeXvJ9kQcVnfreJssB",
  "key36": "62Fd5cxGvJtiUN8p9ecUUDsbXf2Zw2od3eLWYNJy1MVx2AddpGr4Fr8tQ9TGDLYt6ELkpQKDtiLJoynC3CeEQHBB",
  "key37": "3Wj82uV4njATxDXHV78UG3vU7FFMoBZEmKpW57rHtxst56tCGbtYwHjTxKHyDwD8Euc8SjVwcbEzeKvHkV2y9ukq",
  "key38": "5LFuroSbpHWBP7c8uHgrCqnSZmFGZfYMFb333ikhNx3skmKdLxyszgqNe7qPVRv4aFvPTK8Cms9D669raU72gCPH",
  "key39": "2KRUtLgwKGk3MSSqP5kqGa68mPFHi5SotPpZ4CHHJW95VjpYNkGftAcAMekeWfhPTHAQxwhdsAyACFJUccQXHGqM",
  "key40": "4aKjBQvkhhnXxdWvNMUGnk17EqYzj4ZjujqYDPEGTpQpRgvKGBf2QZhd3FjySWqoXWrnB7H1hk74mvKz4saJ1Zkk",
  "key41": "5VwGrj2KJ9D3FePKCNUafGjbbfXHi2pGTmhUaTpmMZN3FtgCo3XfjecwRPzrjWBxxuFc7RyebSiXL83ukipq1YCM",
  "key42": "4kNtxauby8c9MwuppmGDXJ256eG4BR3YB63rHEs1tcvD4XNSmCJ3MuLZSXQWngfdQtbMjgGcpesmrG8XTHPcwPrc",
  "key43": "3xuXjueQh3td1N1CuKx8hn9FxYjS12JQeDatod7DxoKJBUpoqmHFftVCqiBToPyNMuUFAHfpjHXJeRJYrijRMUBX",
  "key44": "3kJ7fXQVzJJoDXEeTP8uqMsjDxZoj6CAqbzV3nKRdymCgpPKAFBAAYHc8YdaQi5P57QCSxSXbzTLdtiQVMn74RJV",
  "key45": "4Gi1ekbRbUPD8T1QN3a58z5zGvYKgThc6YkFqsNcSMCaYx33XxGPCAncseLNs7x5VShDMADYpXpgJxacXTaRC1je",
  "key46": "42b2B1zLgoTE5CJ82S92uioeH4XXT9i9qexdsdUYt2ty9WqhQd9Pa6PnfywTpz8eaC1NC2AR5NwLWZsWCwMR8U4P",
  "key47": "2SgtC21LYVVL9hgDjddthB3ERkna5LbA4HzYmmCt4MccAUR9RXqyZM7g7hz94S4fqe1232LZrBKYrJXznMsWugCE"
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
