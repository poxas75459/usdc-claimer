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
    "4JMb8PyB1fzKkhXFMPQ6ezfnRcuGuCkhujSE8H1iKSX7UyZqUd9UYcaCWnGxkc1JmPkaj3UVC8LYwq3QrSUKz3RZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7xh3gFkAqCek4TTteCMAkW8MQBgLJh2q66AB48XVC26mH47mvPojFw7KE49bxXZ3VcYSwzzt6NxRrBiaU2Ho5i",
  "key1": "2doAU4A7JvKbksjbRRFm9s8dsxAEDd8EP7tTUzxMACnpgHXNdemiU4cN2XwGweMKnDMoyZUNTDLdi2FYZgDCyZqG",
  "key2": "2GgNUFY5fviLHqZSw4VLXjBVkqGEHATSHyAqVvwfWRioEmpSoLfkMKf56vMwiQnGA6DdDW4JjfHD6CUnQjQ7iZH7",
  "key3": "3yvaEGBRxu8CZXzPBz37WnRm2oUxVgo7mwGxnQ3EiL3dZVSfYWzCiCYeDCtaFzAoEKAn4fw6J4su3S3YQ6tvCoxB",
  "key4": "2miSXZ2Rw5F6CPhaH1ygB1hLavyGU6dbPg4QFD2shrkS2btXdPJ7whVv5vqU6CuxomVM3to772xZxEFEyujevXu3",
  "key5": "3rRZiP3r9eJc77WgoU8HG4cch1Rzv3AdgwiJaEzowNBfY2yPfCNijzjyLA47JJAs45jRVJGytsUXUV8dyFWr3iHw",
  "key6": "2dQkNMpaYRoa1KpjfA4jQhVS2RnfeqdS6QEfvfvjnXQZUznciYyRW9pqFChuTR1g6tYKsNYKkVdFnSQrbAQC4BSB",
  "key7": "678U7cJrtk5nv5W8ux9b8mZHniXvRWagVXo4grgi3dDGi4imDB4r5NyydkMYsgSiwrMB4gRvJW9xYperoi5BXCFb",
  "key8": "2GwpiTb3irp2GYkm2bHtHSzejoER7mnCv2cGQ5A3mjvFQGvLCdYgKZTJf3Jg8Fgk2G4v5MabNcMaNm4YDMmKYHF3",
  "key9": "655xyx6qkGxFvcPDXbEGB41Ep9g12fxVeRd6k4iUy39VT482qkWe2G1k3D8jnDpSacPry2EU8793my1gjYTPVbXw",
  "key10": "63pFrruS3Lh6qak4E5mg44a6aG2T16SMSTaoEuEjof8pRstK2SeuryD98FSA1hvq4C9xqJRi1CutGMZQPh28voDC",
  "key11": "5TsKU9TcWUYaUNdCJdLxTHHkZ61UPtvfP2Yqv79csXpekPVNdQb7mtUEdJTmdMrEdqQtU8mqoNgrWh6toLLxmqmk",
  "key12": "3mZtQbSmjcQww8BcVXjEqsD3JqYN5uWbQEjKyQu3i8vGY13mfjVa9Lytm9SqcMbmFyrX3CY3MP8ti6ZKuf7qzqhW",
  "key13": "5NBCubdyXVf6jXfaXd3UtTEUL6HWogU44jWRtaZKp84fYPTHCc3MncoEBYDAjMszzdfbbLHAj1RFdvKwDAMSaJUx",
  "key14": "4G4McP2NH8DnzR5jNXT7ScsvfJAgYNyxAwscQZgVzsG11tNpHifHs1cEaanEFjLUv9xiMLZXpnGuWtDE22aW7z9g",
  "key15": "5mGpsVsQMAGmGUVVeKGpU2h8rKfsp2aJ8gcwhJBPG4WMCFvmw82jjjU7NhCykGMEuasuHx15EfXnNzy6rz32nvaz",
  "key16": "2BZad8r3FsmDiNghjm7j5W1RYGNv7DFsKwRJQHC9e3yL3QcvZZ1vQPmfWFVuFH5omRcWpfnCdEPbdL2STifxGGmT",
  "key17": "2pb4NGsXoRF419J8voJds4ygeE9LaWLzHD7dcKixMwvW3ixeKBdxwnAyVgKT5RuRKbSFw1mL68PeB6tXwmPSavm",
  "key18": "3Nf42NUA3n5iN1jqiABn7LoHYpESBAk7ELG21rae3wZDZ7gncu1vxCw7zbe6ygHLB6FmzRqiaX8Sf1LGZS9oq7zg",
  "key19": "ULvuMDdZz4oeVGc6RmVFYAAxQRxcthvGaJjBjjvqxYe3p5b88cTgy1Bcox8UihdzvdJ6WE2GpkHKbxSXGpxBtKJ",
  "key20": "31bXVgBRe7rv33jXmch5aB4Fm6EU1cn3nvmBsscHCJJKSwThhnGqC4Fdxma8bLpsSue1qHftwYbGscpbKz2Y6diC",
  "key21": "4DfQztVCBY2kNePMfEhCZoDDPGCjRWExqNtB7ripFer3igfDNBAyD3ge7suQEdXNj8HWYMxtx9cp9V2ohvCvCLDL",
  "key22": "5sNYtSmvp5FGe4RGJDcUjw7FkDf3zMThZ4541RvQcmr7zebAhL1xV7LkHURWBpjKPan8z8CobmuLk8y9ZSWDL88m",
  "key23": "2ekewJEKCA14ESv6H5JAuxA421VKCW9twb5NGKpGmdoTTHRJK4RCFM5XScJfFfxdPjubFGT56sbK1d5qnMXhansS",
  "key24": "mrTcGXSaseyqfQUcRPtGmbV2mGFcAtq3WPuqGBGKaFAcsyzpVcHcCJd4bmEv4LiubxXykAznaJBTjWckbDugXhB",
  "key25": "3FNTJhdNYcdYeVAnKekdkHVnU3U8rgxBcFeW1icCrRfV9Xdpc3TKBEhPoEy9Q4FyygrsUxVKqcYe39GJToMaQMeY",
  "key26": "2Pyj1vgKD8HZmUJ22TTmrLtJritexetcD3frDipEspct3aJM8esAo4GdAp7gcJXCgA4uNu7C93awTXGAUtv18iwZ",
  "key27": "4LbCEhrjPCM2gzvKfLc4YSiFtRH3UarfLv38uDaHpb43CjNJgMWBk6VxJy8wobJQzwYDLQ7nHNBQSLQQvGYNfY9e",
  "key28": "5U2BRqY8Rp2NrA9DvToHULQWLazFJFRCDTqQ1eYsxyHF7NUtFQXNkxApdAqKNCVgr35fS7k7DjFeDVEm25PF5c1w",
  "key29": "5Dhb9ra4wK9vcnbsLwVApuzw3aeYGDohAPNzH9TuijPkoNxycCsBnauBmbJEPcWZZR9NdZ7BPnwxhFAxLCkhJtRD",
  "key30": "4dhXXVeYEuQnLUZzRPw1FnENdH72v7BBfTE4U7sjkRiMgxYH2bbdvwJVpvrGy9XMtNR5bFw22Yyoe9yfoDbzaX57",
  "key31": "2kBuWFk8aDe6Y6NK16smZeyEmss81Z3p87sb1bPwbRPUs4rMXo6WxBSV41ghop2uj1LY4rYmBVEgDyjsy7ChaX5n",
  "key32": "2TiLAbr6h3FcAQSWnyQeEPYi2f72xe1SjjxiBBYPps8CPqNfJ5LsCoUoTNfUGf28kXoiQJchmz1XCUH59m4Ytong",
  "key33": "zvo3rKRQ6kbP4srHkkGKy5tL5cKBEdJAjDSieRPKi7kvzYfu4UMF5qupoobSUEDBn6EoznJf3rHV94gVXQ6MJsk",
  "key34": "3sNoW9ZSLQR66YbbG9fBrnNxPAi4728KdmJcNXx69SKsAgc6HQAseQz7WgVDMQSFzmFyNe5kvy8trzCoKQVDbowD",
  "key35": "C8TaUTao6UaHeh4WsvvwoSk3FYjVbpguxddUeoBYjDfao1cELvh4bptMxUKSKxKWyWtKDXKQqo8WANpYLh27Z1U",
  "key36": "yPHUjAQBy32yqiSpK4Yk5U12yL9hq6xYRfGmd4yo82HNf1KJ883ycg2BJAMkXHJfdGDeTXiWXbaW3gcx4HEav1Q",
  "key37": "4B9wgeeC8bhbDREhJgzoQvWcdNXZXmNRryA48WFK2RzQ1FwsRa4iYfbZpUCnGB7tSPanQJbr3dgPni6tu6Ln7Ztq",
  "key38": "LcxuCdHqzTL3ghXva7NfMemFFKNPdVpCbTACmbNgLPqy6BMW9i7PH9SuxNXVyvZ4ffKqRhcLU53aXMYcYkAN2tY"
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
