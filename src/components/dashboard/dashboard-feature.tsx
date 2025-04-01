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
    "4HqXBhgeMoXRUcrasjgMExVDbnTq2dNovC9xGghHMcvSJzkCimduDBJUeX2Bp4oybFquePjMjrBDJ99jfPz4esFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ayHKYTTgMEvmvDfZNAFWCdDtnW5xsVKapp94nUqTXzYXV8Gcw6RzWmiSqNTiEzvu2esRVBQNceBGiyqKSesSDXp",
  "key1": "2Rr9RAKFVh74qpDFCrnABZn68eT8KG1P7zRYC2S1xyj6WcJedQrSqsP2ub6kfEJifuZsxApfRpCmgdh6JYy3azzn",
  "key2": "2rpa86Wqcch5jgFdYjTMPdR8EFw1dWwDf2sAisZTFjtZNwoWVzVMRNnLVGB6ufL5QMymZRndnCsUPM2LafpQ7tpe",
  "key3": "5nNTuYcRz7M2RhM7FaQENUsjrFxzX4cdEpKLA52H873TxJRfBcNDQi819jwJqpgsQMDMTDm8Qbce4Pk3uvNN2Aff",
  "key4": "5QWgVaGzcCseifahXRS2r7xf8ue1vXCN6xBBSxZVCcsg92MAwTrdwmmtjTnpq5ArH3BQ3mP5dgwpHd9juwXVUaDB",
  "key5": "GEbC26Qm4C1eR2rsDJNSUttQUi28V3zQyiDFhkPhJMYA7scUbJx6WyzTYRd2xRDjFawGdGFBGriNCqhfye5zDUG",
  "key6": "57YNFRFjCrLCbfdW6NbTzgruAYCXJSn1CL1gVcXVD79TFUfk9N42vWm8huKvzZjBBhUTEU61XZQXVmBNNGTGiSNN",
  "key7": "dLzph57tmMCABvP3cGcxosMnGBQ46Hq9wQxY7bD6h6xLs6dzFLZ28YsDcJzkzgjeyvaqbniE3opH9Lpn55uXEXG",
  "key8": "5LS9zreG56dHkVFQdKGpkseK6JK9UK57fBHA4ma88bgV2fak9fTJmnyjRsHPufHCBnyvgvR1t4iPZan89YYUWBwo",
  "key9": "53hdxUkRoQdHzVu8N9bNSMBANXNAe8mVKbGnDMg4tzn8phBCQxeNrMpX57qGPUs5B62mrFTUYKQd6Tm1rvHoChjq",
  "key10": "3xf6XbFNyz3Y12PtajiqUq3kn1ndj9yFuMtaYDfxMpgBvgJm6WhSjrL9xw7tfjLDF3hJvHSrhyST8NBF8bRPdX35",
  "key11": "64joLVBbdw2S68ePuTvmByfoQRA9YG9CPFzrx9q6Nh2cAE2BhStMc7r61dVNTS1D35rEQ2sSgVuvH7JTEugM9Z6n",
  "key12": "5NuvAVzEQZ4iD6VUtDwCPASYrNfQhn5KANjvpQCrsQAb6bRWMJiYtf58YBhpv4sZuA7yPCvtuAxeBqPdX4Jb74Fh",
  "key13": "2hS1wdBoAKPyaJQuMfRd8qdFYxb2SE27sPhNdKhXhUKQgjQSGVrzztZcpDDWX6evZhhW1vgWXWcWBL1sdsDiUxe6",
  "key14": "46VPYY4edMhFRWyFr98UVLSTRiRNiagAD4oAGJwt37Utu6e9F7LXkjP8hbhe7ZAu1G353dXzFHrJd1S2TxmSBB41",
  "key15": "4zSZ2CMGTiNTfiJMuZPdokfP6dwoxnjycGEa541EFYdvUGSPULsdHe5MNZKsN3QsRv7zmy6JqiahBpCymCA5ygu9",
  "key16": "3HHeCzt3rtYPfnVzCNjrhwYtFVvdpD7WQaGZcK6zp5tdwHhuCkXVytDrSeDDEEmfLmho9EAxsCdimhyAmWTcegNy",
  "key17": "af6wNoxhRc25fSpa88vDtAnFhQNfj5BFRw54joCsQrLVhwLb2cA9mUkenxVUf2jCoZfk8vep9A6ThLG7UBiFnBd",
  "key18": "2DwDSvPpZgPM6V2n54ZqDxtRRk3f15DG1NSh8A5o55UGCpkbyuaUdNTetUc46KEqzqpw3cnjek7KukDD1Tj5ec1r",
  "key19": "4j3NnKuDYCvERqzhVAWfhF5TskYRHUL6LQPpCNM6y9822fYrK5AWKPzUG4jaskv6tsiQUBneDv4q1fG95xRMmnZD",
  "key20": "2VnUtvTSpG3MvSJNboycDRrUxrvTi2KNR9dnAx8sqURFdXES3M9ztQJpaQ7wkNzpSbpvufpdfxujSvX1rRKHD3Jf",
  "key21": "3LFC1ic7U33gtjz2BDRiboYvoMMuSJ2Uj19A8UZaS57jZzmCUVnXVdn2zxrN9a8ewLRhaLGQUdWTWN5xmngCtqbd",
  "key22": "fCeUWeie94La89BsSDzMKbGyGWgE1PMpqerortev6P7qBHr6MeZRUSojrA2kYVAydJ7suezVeUEd3DSBNjyUdTf",
  "key23": "5p1HWeiwZAzjhJTXgpWBG1jZPMfxHh4ezfbRro5hR8HFqGrbHSMRDUyd7x5S7fEY4PfFKbZfiSeHKkG2TSLzX7HW",
  "key24": "3db2m9iYfVbL9SHyVaux8DG98khSWPzZ47U7y7q39FVndWMTbkcQ6Ynd2wwWnHzStmhdMP4wzTNg3MfHouTWbuNm",
  "key25": "7c1x5MmnzVhUrrLyEQ7nuFqmVyquVXVZUQ2xFZhqPgXYjr4PQCWrYy2pruekZdnWEEqJVJQeUvphVsvQpz3mo6n",
  "key26": "2DckrcxVMXwFgrNUWXckePKk6txsbGYdK3ueGnVcUUbD8WmgJAz9DHnADpX9TnGTcbPVRC7UnbVPJHh98WP6TTU1",
  "key27": "5r6TvpzfKXqgu2EU8dHccTxRV94aqKpntkCNpUyhZeAbjfdKDzjuZPFsDjcCuWNXE9nJwQXBCavUb6UzRBLjP69M",
  "key28": "Q2LKsBoAQfGCdjJbvD3wh9XWAWmm54mb2TpdXoBWyhxh76sQLMHwoAP5s9BsKRmn8XKCHcfTbnaggkPE2MWoAhy"
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
