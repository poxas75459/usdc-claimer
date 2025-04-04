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
    "DGwzUxybNfod7vspBgJXoJfqyoo7RxXoHYcSMeHq7cRkf6xWXkRPBEZoMonARuxhbFBdeDWx4y8fGX4BbUNo8ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21QomiD6ua4UWxz2XiVKz5bTyQEb2rMqcEJBHrZgdYTXJbsBQGcszzdDGrLw5a1fGAMRHCTxxStH9ydhG161p9up",
  "key1": "4iCch6M2hZ7ZNf4gkmBhaYBVR7xjs52rQJxRvNYfgs1EhaoWjnt6SubcvBzjeWo5NCjtwCa7YWa9rhH45Daaqa7y",
  "key2": "2cRAv3VMNZxaJDQJ7KPshXjjk9vDLkpMYbkrXGP4wD4yJ2BuhnpMA2DYceyRHNyBKqLd3psG5GXMP36byQfBqokX",
  "key3": "GnzTwFkTC4VvNAyXzRD1wBCTFyr5zb7CUucXvh2pmCd4qCoQssZP5yEkBs43SogShmgzKU3i6KEWiyhB4WKP7tM",
  "key4": "3Lyy4zwFYY2i5fVK4ohn5W9WngNdVWCj3zZfcjtTVt6W5dN8ZYkqjDWrfFRnJWXaPYsAKEu5QP8F9YTZ4X7pkJm5",
  "key5": "4vAjattuoiWVCU3UoyPAxTe3fY97uoa4PQBkgBJqv1GK45upP5epeaLWUEPP924Vhf2bHNTwRtBTZJoY1TLnRjWv",
  "key6": "8x2FmNQVTBCGnXqBeTujB2yyrBoeesh9WveUw9WA5XA92MnpVhDHbsRzk3kjpmu3bj8p9W4E37uEAeN8mpXNm4A",
  "key7": "47cQ94eHKVrYPo6wJGahSdErVxwGmzae4EpAD6S4pKX71W8SgoPukMxjqCdP3rqoiZnLQBCG7DSsZuSQ7yt7idXm",
  "key8": "4sj1futh8t4gXo4YZuLUFP6M7mGWyazNZa681v92GS5374oxnwBaMg1FdFJriMkF9HkpHrfMQDe9DLC1BuFx3inD",
  "key9": "JuktWL4ZCK8acXT1sfzyG8LTfX3QJcXDH1FBERdoJjnVaWHZ2QYJgxuo9bnCoiLD5bMSGPDLQLJ68Gr3QBcHgaa",
  "key10": "2VrywvMum1pDKfqPSGyjBhscCDLVXNZ1KxBYNvnFsT6h3L6LdpgnbrzASakN2qDAzNYDyUTYNLZxbTY16Ney5oLa",
  "key11": "4R2doWAYqTp37gSM33VyxL1RYyAWciwu9Hpem91iYCH7mapxNhT56QkeE66xPFkcwWM2MwjyabLdpfc9PPxY3Vd",
  "key12": "SgoqgT2i7ycX6yKayXbYx8nSpLjhku2wRjrKWLJB2tjHRzxEgnRgusSV4vnWoG8vCvNiUP2eoMjYpcH8nArUkY8",
  "key13": "3ZvJhihgiFNobgjZvcQQmk1Cq6v4U1YqRJtACjdSxMqKEBBjmp65h3sKdrQVCL7XQQXg6GLqQKWn5B7SdYoJzauc",
  "key14": "4YkigSVPnG93PeTyFw43bDHgVpDTvAd6Bwr8dfoctcTD8XadPLomCLHcEz1HjzhfMHUiJBKt6hfmLBxZVsBknVKG",
  "key15": "2XLacx7vtR32iHyAu7acMiffYaaGcDJV664ENXJhqiaeHhCJ9Vdy1jMR37cqFoPkjJhQ7RSWYGQWbiqyj6CrnzEE",
  "key16": "4qR6715FjrvAnP4mw4R8HN2epANuug1Zq5PVr2nafSctqCuT1fJgqQn2Vj1daVDD7exLJjBE5BGNBAbTUJUw6cdy",
  "key17": "5Z4oKE1UwCTJ1F1EXD1bZ7EdXVye1fnhWu7eSThPDWPWDqsxaoTZUsmoDoZGZciAMy8YQSqL3vgQUS5WujxaBk2Z",
  "key18": "YT6EvRTwr8TA3j29BGvL3yWUoojenpoKZspFGNN4NaRjNA1D8dSaqstG2ftEAkpQMSVds2iRpFHEpz4yDRSmsdg",
  "key19": "Rq5KothjMespzj3htxNqB95PA5YqzSSub9LMZHmbamtNsCmfab2tyzAPbfapFSaBGJEeffzisfnwTtCPopwA48A",
  "key20": "4mukvLU7dQ4zbShFPPZ96ocEP6j9PmyLi1EuLqjQgE9ift9j4PNtE3QdEbTzhBsAmdqQRov4VM6Z3rL3ypkYLch8",
  "key21": "4mUWWVwohighmFUznvfjS8YztXYudD2DzyPP8Fw7GvdP5uFHipuNriPta7xXVV2JL7aVXk2eWq7g2nPVaapoCaVJ",
  "key22": "NWJi4sUYAFBxAz3e2wduD5xZgH3NYQkjAaGiz4CFi2Y4GH76quteYaM4h3YE5tfR8gTHT2EcSLPZUrioJBbvbSC",
  "key23": "5o56Kgc655Z3wDeSvG3Cbfyh58NbyJcEjMvRALmQMDZDncSDuzyz8Fo8qdtMinuekZzB2HkJ2dWHrweVuzs3Wcpm",
  "key24": "58qvp1LYyDiVNH4S97v57zW5BtomR5cLeCTRRJpZZAETqNPB76vwsRfR5VNUjfBKzi5sA1ihLVDjTfF5SDNn4vFH",
  "key25": "575NTjHU36s255L42hEFWy1vPdtJiAkekKokBxc4gsW5kbgDGNkUE4HWuJatya4sqiR8reKqz4oYvvmr2SBdz4bQ",
  "key26": "4f85x4qY8atxCN5hHB9e4jnAc1bHxGojpX7Q6Y5mypUbnqirHcKtpQnWCj9PZwU9P7TcaPUycdaYYYMkH4jwBjoA",
  "key27": "3n5dZTYeofKAaiV98kSeDZyJEMa1x1MRFVXZHKurk2913QfrP6o4rWR6hQrUQPY8dsSyAFgN9bnV2WVLtZsF6RYN",
  "key28": "erGpcHHD3jhTxf7hRxQpSirf9Fa3P2JPLwuhz7BXNVFx9qxvQ4GcCiEUGfARSc3pcwqSyTCE4TzbeKSSM63QCxt",
  "key29": "3EiTfmw6uHxHo4yW9Bp334Y5PNbYALdpwVedpnqqsL3h5eYuyRV49cGH5VMiJkdGGvQbVTMh3Fo4pPemnFrvghTA"
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
