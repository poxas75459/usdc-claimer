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
    "iV88jWtmtnthugwn2Tp4mcqtv9pXoqjEYm5LdoQR6Jua8RyFJwRLh3JKg9rWvzLEfCKSMRpTyZNV6hu5q16ytGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3m3XRmFxMnrf3i532WzSqk3V8LrhLA2vfcJMU79Xzg4JxtUtaPhCkzXvcWNjeE44B7aseJNmeSeXc23vmsWA6t",
  "key1": "3cD9aRFX2XYpYczGxomreHf92nXN8qLhZn4TzDtJs1su21zsjWTWnQLCL7f5YyDFWaY1dqzVceh1cgSqsQtcK6R1",
  "key2": "3USMhRbAz2FB8t9oHjwSzEzRqovZhBVCRsMaWRdRpABG2qQaY3NMgyDCrFF5LLtbKaLKQCn1YTQi61f5nb2U87Bm",
  "key3": "4ZLfYRYirV8AzJ9QsoecXsAchep5KiwzBp3S1V74NnLJoeeCDx5idHUbBmeKJBTrsxTzME8dCcFqRKHF2WrR85Qj",
  "key4": "62TgbVdG4oDvP5qK2ZdNfyCnVZjadABvyKbH9YBdPEJBLN6H7CKrzcyxTJtFwxZHHa9FS7DFQ3VtrGxM3hxfv1gh",
  "key5": "f9wMxJ6eJPhYMPPqRWtt5FdGaUbxwaZx2irbutGYU3erDzMkCmrbFsyx4GAKnkAunNLu1zriKtv9f4Kr49Hnntv",
  "key6": "5fswJD6ntrywnV97HSgWCEWXwGDAk8TZGiNar1p7q1Fgd1PPTYCmA2vFQdPweKB6re24hoaTZrpnSf1zupMxHUj2",
  "key7": "hbck1kTiydzHnBnEpdEBWXcvnQ4S8Tw2ixffWzHkVoKKGQjK9Nmu7FCyeUSn9eXj1Ea5g9HWeugYFEui5B9hzMc",
  "key8": "z3GDWh8WB6eDkYgVJPTU55L3nTV1N9ZzgUvHFEMp3APbUoPbGZJWtAHy6NxQvyGy9m14oygzTpBr9nBn4iT4iZh",
  "key9": "2sNxNtQbn5G7YtuuJfBXjHbvNmvg91WWRZyxQLkjcdgYYfhdSTR8rggbZ8W626kMnAQd4WzWy3wZY9RqxpRNbdPL",
  "key10": "4TQF21D5KbWVXW3HggGXpJnQf3nTjN2EEJLHLPK35Gv8Fnni8gL44z163hMuArjewesdg6a85nTc8yTBLJscNisB",
  "key11": "2b3oVupGNNCrvE2iNmdninW8h4EJgFAWpJtdd6mXGVB27SpvwyvuVRkfPQRtmzLFfmHoHSjwFAyZ7eJeBkarWNZS",
  "key12": "578iDE3nes9LZi9NeYSdcCoiAci2w3zYUEXAUKA5wPoZN6WpK6vuhnSQtYmBfVDSpM4pQxpuhm2sn7kQBJ6DLQhD",
  "key13": "4VvpkCWJt9rUs5FuRLKzHT8tVUaauuY7Lbg6oamBmdat7PcAH6VUtZd1R3f8AirAo3YNbmgrXLYrxicJPyzEU6iS",
  "key14": "4n6FoPjAP3dmxqsTkZ9i4nyqwSi13WwR2YWzJecTNoZWkRE3JRQZNbXierjDabfu5X91EBs1BSscwQdGTShm1wpP",
  "key15": "zZVn9ZZzdYLLq74ZNgpK97tY8weNeRjij646UFXCQfwehu7LwFszdp3cAft5416qUHzJQhh1NEKqdNH4ragk8pT",
  "key16": "eiATX8asihBDCQb1LNCRqvMRShb3TPKhgAjXYH1svtxnDuFvdoMAk3rYWn8TEpug46Ksznr9VenecPp6tK4a8as",
  "key17": "5LQoXcKRNxwkc528NhdjjQh7Wx35aJPNkzHFRN6MfiRecJoiYVbFMH6rLnPrsR9YreU7Z6ZFRZfykgzxF4wWS9uR",
  "key18": "4HpaTrdiEWHRA2j7t3odDA1B4WA5ScDnXbcTTaWHMMNWFYTcAinKMUHMf4d5CRiCWuFUvNwY6TUzFWimMkspVDUV",
  "key19": "2JDcWFYqFdV7G4PPXRJ2DF3kgqAJveNQfsjaqb6g36VhgSsEkDzyniuVcdC7uTVWh7mm2SXfzX23n3WKYpM3yBtY",
  "key20": "4ghzHujBDGSfsVegPCPgQjANAMdQP3jUVNVpFDxfMKQ61uaVeL2rhB1zPDwkg598HzJbnrnTwhbJRZ8u9QcZvxbv",
  "key21": "3vdpsTPsSsdJGdBYYFpZ7HStszofa9MLM1kacrANvg2HopxNEv63tyt6PnwmL8oUVDVBkJ5VBXR5jmgKRn9rud7e",
  "key22": "54jA2JRJjwbZFrSVFomVjsnsf4AaNcqLmbYKQkqQJ8ovetTLDZSQchkg9qLn76ijfYC295FNVG5zYTe1ZiCpmYta",
  "key23": "3cytbQRW17X4A5iCPNqZe8SLfikjw19BWfZRTFnaSXSRmRzntytrR3w6dKKt3DXrERu3u93Zg73jXk9TphakL51P",
  "key24": "39fTaDgcdi5hFm2QF3zPCRBPuxfsUq4nnacHdLMeiyQpuJHNKXcgfdXJPEzy3UsNHb8Qa7JhZZKDzW23xRDVZRtn",
  "key25": "tyYonfNVzrB3hysCfE29GtrJida7jtEDK79DFSAVLo96RVb2mJ7Jm93XGCfe4USqJy9J68EjvK79pxQGmJhous5",
  "key26": "U7nnpHkwnyigPVuYeyHkjLysGaJPh998ENUF99SFSWaqTpuesa2o6BcswB2PCAxqDRL9CiZUWFLGAxhdemEeKzo"
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
