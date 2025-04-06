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
    "62VjbcFE96cGshDkHY4AG8iAodsBeCAT2q1exRbWPzJEX1tN1e69NsMBDhuTmq2aiDogFfUkVfE8xH7K7DVSV6Z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SNW4ty2tR8AoEFceRcYVN6FPaTwprLQLg4ZCkiEE69x6fvU8Re5E41GGk2TMZ8LG4s8fVRQDjvwTWwqxEawFSZt",
  "key1": "5Mvr7FCB3WML9UYo8z153z6F8iS4aSkn9K8XGRXcsGAM8V2pb2yjqaA6ACxJV8wt926uyCGAH4opJxH12HxNgDTe",
  "key2": "5xaLqPcvGPu3J6F6MvmTetJqHqn4kzKG9c97FsLE2QDCd1CRNJ9esFwpsQahShMtJT54dAZV3w8Kkz5rNz6sWuZN",
  "key3": "4igsNGka37hRUyRkHQzJKjjBSkbXM8HsGPMEQG1WRebHK1sxfbYFpKztKA5dTFMRKEoYQ5iRvfUJmtLdYsSUkef2",
  "key4": "4bn5AW146MNJDgyoJUqDyY9EP6fYQUM2CoVaRDQarapbkC1LQgCLjtbH7NKW7resnPtDZoCCAxc9xQQTofAcdxDW",
  "key5": "4GqJNfEhK1wZ4CeDGeXmmXkjR8JJkA6MgYLgfeeCfD5WEJQCaX9sFcpuexZLeJ8dPPHsDysdMkYNmjpvtbRTTRLJ",
  "key6": "5MVat8VgwdUuUF45vGEHAkj5N3BR9HH6VtyWXdpUczz7Z9ELBv1oGCobq6EVXWRYJAiCLB84j9htGTw3W8YGd5iF",
  "key7": "3YERcTuD5djSJrfGyv7U4YYpdwu5pnB4xTx26ns3icGvqgKvJAVBUUmuQHUVrFACnEJQNMNH4RQBSBXT1pb92cW5",
  "key8": "2GP3WKDFjqSsv9J9L9czc1zBYm7uNCknF4MuTVqx2yJPAKKceVeW8UWrd55idCtWossyBSQLXNweRSU5L2RbyLhH",
  "key9": "2goaBNNcuttJgWSyd16HjBJYSNxv7sUEaip3uq7LKicaGFijQQJ9cTQzaLVARyigpxhBpiakRX3PfLbiG6VPdc2N",
  "key10": "2iGAXCFxGoGowp2iDHrnUVT41fj8TouQATpNhP4mmtUsaNF3hDW3RS37s64gjQkKok6LsFsyrPiuNfRYCeETjyRP",
  "key11": "2QNztuqZBPoZbT6XvtufYW5V5J8yn7Ce6V7btJLinixqew4K8Db9aUCjCeGVAhs7F1vskiyZSmLCEF8jdr3sQhcq",
  "key12": "3WVeqKNqhU1AXAtSyYPyUDRMZXhtqyquAcdURxNV7oyqqPQSCZXyW4qKgNr4nrcaxTKukNsQHnNTvXam6h4dpD9v",
  "key13": "SNYuzxtkHF7peXCBKYA5FTnQrZEbVyVUia4iADy1uQQ3rtbhQydESqqFRkp1WMDxpLtqiPWzdysiGChF7cAowDm",
  "key14": "3fBLZ29Lb4Y41xfebQ75a9p1cQcwFvXPLULxH2W1kk7rsXQZ9GmQsM8TripnQxDNwBASQwe8phpqkmZPkNRASy6N",
  "key15": "3TCqZYxM7F7wxqhVXQFoH5U3LZVznmiiCdaasRor8LFnBn8jJB591cobk1x3ez8GQrqwJrziP3TEUrSmHzb1ekkB",
  "key16": "2foq7Tc4psXnSvh6mqbj5y5joiffP4rimWwjEtUmFrZczg9aVSK2uEsoFusa2rj45WMZBUoy5TQDpPzD32S9cykP",
  "key17": "4Mk7Dqm1wgHYTc31eTES4L7FfkGrPfZ9cyrTQDL6jWi3dk3mr7MifFabprtZkJXF5BNb7ioV9KLNBFChvh6naW82",
  "key18": "3ky4utmDBnDGeryPaKBhowKdfvZNW36sjStmVxUCendMieennkPPobzSi2QzrYC1xKuSY7dxQEyM9LWtb1KKXjxE",
  "key19": "66XGb9zLU8DXEht6EYM27X27Ay3PAksJUAy6DAs5cYkju7JjyUAj8bEC6fhLYc6vyCC7g2TTeRCTikx8VS1v7bEy",
  "key20": "3pNaT9d51TManr47c6ZUhxcuBK58TRQ3oHuY2RfayTufLSAEJPUcne81DNXMFkHy7XpPPuyunQLYsmTBxirk41pU",
  "key21": "3ZAjya17bYvyHEqDuKAHUN38mFTTqqGpdqpxwdUHuZYHxYX6HxPocCPp7xFhN3MNhTv9Csx4HoDV9FRXxdTYj9AA",
  "key22": "2Y8cwUhrnsrYpVW8zrnRLxckVw1CuByvjFtAoj6F6qMdKmb7MaWSpdHxspZQhqDATDY8YWWfnHmLVPWVV1igLnQq",
  "key23": "3MfJ8uSNmCqnJzTzv27P1NCx6aPBJtCiTbH7oRFHHNJAbjigW2UhzF9BN9nxeg3SHtfdHgnRsFdxJs2kvaLdqBT3",
  "key24": "3TmhFS3xA5mQctN63mMvba1AyjZCB8Jqgj4a9YkBQJ6yyGq1qBZR3sg8LZFEoWKznsxHA4tUKx9jJutNtfJWCxzx",
  "key25": "4VJ7raRXYBhicBkZukK16JX5uaY9LNRqfhrcGKHa3WnUCcKTj6ENQd5ohSwGievd7zdcFSNhUNoYhLsnceXEtpYU",
  "key26": "4mEuGCv8Cfn2SfyRrKa81UF4DcnySzRCP5sMuGoxcjAzNcdMf8XMYPZizTkntAwHSgY7cHifr5JgeMo1dt2vnFUU",
  "key27": "293wBxJRR12UTLRq4HweVL9nuMbjZfoAdoujJJuACnifafjURXDz2TzAjEG5XKy9wBHBmNpSeCRhwfU7LcJ6JNVi",
  "key28": "63F5hEeCDZNgAEgW6UMs3BXf4oQPPc1127TuT4iiVikH5TpXJkZRN6ZEL5wB2TVMzSrFxnjBTZiGMGTSerGh95yr",
  "key29": "4waEiPKmr7Rkh8U1tbCNcUQ7koE7jjptUjKP4ZqQ9aDzRkYWsQKAaAWCXQ92EpQLWwi8PnW4ixTgeMVkaeeHDPvf",
  "key30": "2Zz2vRZizbM7pv7pGLg13fJUoQDuUrcyQwZMfEMS9oARty6S2WXHW5V9Vt6tKgbg5ExWt1EWPjZwpkuXeeYaGpo",
  "key31": "4n9tyhSWitzRkvD2jYcu3xnHUrTuq23erJLzDfCsPNjtPzyNz2oxfS17RZBKCqVaQXrQYKasBcVcxJnCNLRUeaCK",
  "key32": "2saiwDQHPd4iWenomRr9W4EvVoVz4WRJBCL4k9LA9vuiiNGgKWoXYXdRss1EWqFRx4weZfWu5fm2h4iHqS7j3z4f",
  "key33": "2icE11q9esWW57skUg3K51c73h6fZwLmG6RCmHWXqHQMntrWGNKZkLhW2PoZmMKBhDL7tZUeQGEB2BdKivrdbn9d",
  "key34": "6YL7w6BZoNeo9gAeHcLEpG2WvciMWFwRxcP1Wgz4JurPPCa1qLhHmj8ssPY63E5eZi1xGxcmxKtfjR6aFSrWPWx",
  "key35": "DT4126ajm4pWQ4mhr8xeXzhpXp2HKJJZU5e4YHqJt5pYR2oNiTJXoaZtPAc6KWa5Nbm8wkvdxrhJH24Q2Um3Pcf",
  "key36": "34sABqHKTjH2AuUSfKEwLuczKpqGUHvzbm5yRLLxmqeq7NipaFV6Xv2YstF6XG38icTCECJNosz5hBuMa8aA2XPh",
  "key37": "5eaZRJhpASDhpxkr56wbv2sVm585PrzdN78Di4rzZ3EidxJvMoV6sLFHCaAaDdDhk8YA8UdD7VTcCr8bqScDMDmU",
  "key38": "2uky9D8G7dr2smqDyVKPGduwVMQLkFbuQdDXCh3Lu3aZPtmkNXUoCqQt5mg6Z94r8i8NSRyK1sJuyeLNwwUxauuj",
  "key39": "2neEPPcmCiZM8FwKhULwtRHwXcNMfMmth51QxmkXNonqXWBe7wzLkXGA21CRLBiprxFw3i8Kh7NQUtJZgRYE4ubf",
  "key40": "oDKwEgQrBnEmo7AeLq5ARuMuh2aL8hBmgoQEsG8zQLeW2PjkW3QAUYiRgT1GtBUcCEMRxCHZPojChtXUWcFJYTj",
  "key41": "2LLuZxQq6eSB1yETK3bWpDzD7NTV8KiRAgsKGvMGhQejJTnRqKm15QvQaGawHxeU68RBd4yw8uWq8JicrNtiMSAT"
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
