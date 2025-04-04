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
    "2S1MoTEUX1ASw1CrxXbSbSqLeqqb8iQtcuVxmP3HMwRLq1LoX9Qw2EbCYyYXJiQWy3xpe9Qe1JrQyLHsH7HyJXMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YrvwmdeZgiDDUJbga1tabFakoSwSpyXHfJdCWKQjxjDc6pmCGWhSM4Z8nyLAXNvtEPiFc5sP4MXEbmg3qp7hYHi",
  "key1": "4ySik7uv4sBWNfBfayxMFDxga2kQFZoRXyQ3t7ECae91gRBBnL5oCSUJstcg8b89pQnpsSuVGyyqeCcuPQ282Tsr",
  "key2": "4K7gqyn7NDMMGKaZH3kZE7GnJq9uakSXTfpCcqLr864XMx8gcXfwvXSTAf3ksL6DvxTt4ABnBWKu7FgaU788z2Sv",
  "key3": "3GNnEWKnMwXMFSLGSAEwoeCQeKotqjYUFncSi2ouWdPSXquDEh9MCDTsrPjdY72j6348zVGsc9ZZdSgyA2UsrFrG",
  "key4": "ZeW8sXaJuBPvecDAvV2aDHtxGXUtZbe9gVMVg4pHQy8QaDJkbfAwb1NZefbscFrNQ8FkSSXr24GztrmfNUcocbj",
  "key5": "EbxqvSyEd15eUYTV5g3hgbkuQxS2XRdLLpDqyXN3p33WgDhn7VDasWZNUc2EhExiW3tQFAMwDUYcqvHgLXPLfJC",
  "key6": "4pKFwJRvQw66xjLYymRtjUvy2xyz4xW1MsbHAxJMDcwMpaBBjUGv6xBQ8yncV8LeMXSCrX3FiTYaBEoUSfUJvFtp",
  "key7": "3nzXk4hY3S6TYZHCsSTuw7y77zE9Gy51fmSv6C22A4F39w1JcJPMu5wBRszw1UKDyuyC1bt3T7Q2z2XrCSnJPnGj",
  "key8": "3WDQQ5H5g3yPQavkjvTwgycwpLZ82i9gaw1uw1EKsQqMTEUrKetQgSWPeg4oFrEaLnidqbUQoD9GqSUR6mL8ydHv",
  "key9": "Undz16knqQeGJDRcdHpL4WW8DghmE7J4T4dvfKcPcqn2DUbNjypnxPnEscn6z2hXUBXxXoQ8ANSMRsBcgzcwRQm",
  "key10": "4tRcgwVjVgMYBpvEoqaGYVrVKyoG6VoT6kGothwBdAUo3AjbcUjV57JyUhYmfwyGftUz33duF38H1wMqpGsG9qBk",
  "key11": "92g4sKUuN6EYM5Xe7mV1KEhqtg8sCDWXwPukDaaPecmLUvFAN2PfvCfNXwCDgQL9ChDJcesFDGmUrLpBcqYVfhQ",
  "key12": "2LhYaa3Cb15bhiqPckofv59Snt1yQA62TbF57hQLQuRJnGEPkpDk9tbzGVzDthACDwAFkyfg3mwweM2kSsAFGRLY",
  "key13": "LkgRudfek52jd9evmYiD2RAtdgo6N6cdnq5WUF699cRvQAZ4LeVSf8UpnGpyurDNS9xA7u2q4Eoh8aqjobNLNsd",
  "key14": "U6xWPhDCSAVVTqAe3efQ4vDYFXKEWWVkdcZrQdkGqr8RrYXDzfuLiK77eZR1Wk6zukGoJA37iVWSmEiessXiWqN",
  "key15": "4HiurFKD4mcp3ewpxapAa2L7xNUmNTWBemnP2FuVLGKrdemwam8Ubz68hY4dWXu9NN6nHX4NMFW6fB1PwMY6hkyX",
  "key16": "4PF1Vchf2q275xknwpPpEjEThosv5tyzzbWwXk9ezDHH7xkknLF7Xhe6AynLsVk4zEmggqwWKogLgqgqXJTxqmFv",
  "key17": "fbo6EpSWdEhZNwTwDHor5GMZnyRThfhfLnmUSP9WzCoe2w1GZjYjgso4qNtZ7asnyTEkBeZvCFNPv8rEUHftXZB",
  "key18": "4iAoujmuKSpdZGASVNQb5vtvncSXqu24H4HAZX3v4dVpP5Kfm4vg1pyunjUr29osVHaE87AoaqA7hxVJTo64EupC",
  "key19": "35ZsEYbfT9W3oqb8aWGMxSZ9SwXhdizYWZ9a6CVKYeLF83Zv4LSjYz3SyNojtiSHGJyeKcqhi1LDYtaA8Dyt3ep",
  "key20": "5enXEY6uo8HddYNxU6fNz5Byt1jk7fMi4T7Xom6uarY9PsEAw9XQXyuPofTr8eGhcT4KVXqDKKanxeF3B6vmu37z",
  "key21": "3rkKye8uzksZ54RKjXk2pMGEGtAitYrMx1J34wfphWtKpoYXKjTq6qBmhXotDZDgzycKVxygmfE5NUSomZmdECq1",
  "key22": "5ya2aadbxx93KevzggRo18o21s8ZKoXNGtBtgxWnmWuS5DXEPjpG6e1ipcPYZqBAmaAG6XWFitCrz6J9219LYmWY",
  "key23": "33gSURSBYJHGVnQM1ssparDnkY2pxLS2ZY456TAPfPFFNijxuuhz5QfMxGy5ec9j7RaM36kwCHB5WD5Uha3RqZUB",
  "key24": "24Ynduq4zruC16rUvpD5n7MyeBCRT1zKmRj5twhpqSXKRBPJS8qHozvAFHB4omfSihrXpxpuDx4iw4EYvpRWPWgB",
  "key25": "H2RiPsW1JchMPcVREPb38tQ3rdhUXFouVzLpLE6NLZ5z3xQ3rJ6iewDj49iG6g129myNye3wEmsV3PYhN56gVNt",
  "key26": "xEJ3R8gqYqNQgRWHbGGNZmcQHgjGSVpizYEhrSyxTqEYwgc4ExAFdmroK2PreLw7s4vZ6BG3LJUNbNb3kg6vyER",
  "key27": "29aUXj7gqNpr5WPBgqE9jvDVSrNu69ZXejw1BcsyqJEyhMkEjgk5nXGC5q5UP9d3C4uVfojFtARk5io9EqNULu4k",
  "key28": "32r5PS33UHcikrTvdtTAV1fi8PFbNGqzjKh6h6etspQWX8aA7FafLwH7ZpFbsjL19paLKqXTCeiE3xsw9TSf1q1e",
  "key29": "3KoiygsHGgP7ENxdJdcZho8ZkKRZdK3poH8grm4i9ZApnmvufpjF5wihGEfpdsmcF2Z5XeMBxf3fxFdwWKwCnyht",
  "key30": "3hERkAwAwfSHyJTsejDbYYM54hpgHicEN6CirF6UVTiAD4nFZfXdSfJpNtqpGZYFZW6vCi875fqk7JqTvhHAT6Ww"
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
