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
    "3T5VpC6PJySN2dthN9hsaYpYpXCkCAvQWwxGdvRBJPzt92QpddSCaBCoYaeUrG4Fb6BxZDmLbTW2uVotzvo59L1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DbhVXz3Ad4HBVsTjxDJ54BsW6RbsSjTnTCQKPU3cJTZzhFK3Ymyq6K3ydhtMx2CgCNE276BS4CuL6T83cLApsR3",
  "key1": "4CE3KFpD1UY7HoLdtAuJvpm6ngA6pT6ozo99EvwYpiTYXhgMh99MLx99JtbHAHR2rGfda2Wzizy5Wv11MD235JGP",
  "key2": "5eSCw4vTSYFDgUZ17iw6o5haahVx6876Lty1k7nLgvX4HRqiqYGiBmWhoZFyxDnhN5u5qfLg4d9CRjKutCyijPTz",
  "key3": "39sqn1gzgekaogxewh9TKtd5QUBvdqcwS1AD4nf7GukEMSi5VjCY9xWMUFkEcH5gRDGWPbnb3EiFXZKtsAgMstws",
  "key4": "37fPUrVxHFnt9APEY338ysMpuRhDNWkCyGDzDdxzpHeGFvrKFmhrs951hF9TLZkwAdPWqM9gpMZ9jAXJfZEf3ZbS",
  "key5": "5UeJMuo67QFqcFEXxnDJaYxmVYNwkt398SL37ZbBNnMnBqDtVxAfbPZRLcriqTY3zTKoNttzvMoFL5NUVk7SdcNH",
  "key6": "VDRFuEHwXG7V8JraVQuJb7zJULXxc8WEGGL9w27hL9CbvKBKVgHDsZZ9kuNSuMWtVfQPrqsWnWjQPsJMpp7kMiT",
  "key7": "9aQZmCQbpbjgxuQZudVCVNdiwAcjZLbiVk2bXsPBUbwx7tM53ifRFtL7xaqrHds2Azyc3NCya3aW5GhVWskRziJ",
  "key8": "3om1b4oB9bh8owAAd9ZbryiHqmia6hWJ6SfLiJoDuAPF7pEwZNSaYZkCdq48KGPjFjaE82hB3yEEPcunCSJx7JaN",
  "key9": "5R57GfzzW67VjFPJt2nTLeiZCHVa62GvJpS3ozUCgAYV15cFNvWKgoNvEdJ9bwz2p6xvmtbVERj6rcgeMtKuNGwV",
  "key10": "2cPLuFWTpdRUsqrJ6zEfVQDw3g25BkodMU9LeLoXPsgErvcmbS63YuAjY9yGsZynxyR5d63qkh5MM4nfpnz9DFRW",
  "key11": "5hSJh3s1SDFU3xveUADu7rFtqCgmo3GJgv2wFruGhi9tgmNdk1QqeXzPmcFQDPhrqH5yyXYB4J8ptuF6dtA5KMpU",
  "key12": "5pU3guTPwvxfBwEJnK9A2uSqSh47patbBAiFjHwDWHF6sB9pLPfGmsQ3siTCqasJjYCZiTtbNJ5DeKqSbte5oFc",
  "key13": "44rdQW2CoSW4R71CLtv4F3jXLabPT3rd4Tn9DnngVrUawGQi9gJgVST8GygzTE4W2g9VH3k1b1VWwkhhF4WGR9i5",
  "key14": "5o5vgDRddUvw1dPTgsDh3iKEp4rUpqLCyBpfT4o9LvWYcryxheAikjzEtj25UA5kz4muXQ33t83jKjhtBQSJSW5T",
  "key15": "5VaD7mmDeXAsUuNLddGNFwBaksCb9mNomftNtaYbVyX5vNg79fsTZ3vqucR8kM8G1KYv94ZmHFzJJcxH6gXUcWVq",
  "key16": "3e4N2ERDqL5XxgcsiEWD3jkth2JNyMiZL1Aaot6fWj9mr5j9jJm9EiW3Q5zw2sST94vLkS1dHbPbuWmTevy2ofRB",
  "key17": "LdsPn39A2EdYQeAhTwY5qxasmL5TA8XxbhtmbAsBEAwcq9abMJ9m4K331aEdYFZ5j5PVgPh1RDmTtzibG1TbXwx",
  "key18": "15TpUWcsdzU3nyREF2UvxTJUejKx2ALAfBzxrDBoFdxWD7ZHoWDTWC4qMJBqNbCVqKjFDFnWEi3KV1DGWZcDAeZ",
  "key19": "2EKPbeRfSLP3Q7BRDHqCjvnJcskppxgmxLzxQHyq9EdFgMkVJr3eRxvWCLk6z4iQ9wtSW5iYtRvU5BSr2i5kyhrH",
  "key20": "5ddE1SqRA2JWwEFRTm649Z9yipaZXHjebB7jiF38VLysQVYCTJE8v1rn3hdjRL4E641CezZgWaPsCchtM8KHB9Wd",
  "key21": "D62q1VHbjoBcABiSjZ4cW4BoyfDemRJ7Lhpm1N1vsvqxe7XaLUseZ7KqmD7NEMrjuhWwiAtB7CxKAyPWgvwpDJx",
  "key22": "2GPfyPJzyBsnMTffCumUShvVyxSwzbjpGxNf4i4HsgYaEM4phxNHDG6nsFdurehRtRLSEvYQzV3eW9pJSjRqpJY",
  "key23": "4P6iiwiRRyy2R1FtjNJ35qLCtqnpUapduy3M216fz65EJ6JZ1rZn8swaBw2ajTS2sT25MbV1ngYRy7e7pn5YYL5Q",
  "key24": "4zpiT2iQo9VhD49QDAdNaVLVQzvM5GCtvB4m7SqVj7ctoGhL2mVwfgJpqyohEd37r4MMxgKsXcSuf41LVp9RtRFK",
  "key25": "3fbKUWFn5bv8wnDjpCXCPbN63SaaiGYFiisWwRtsL8xX85ujewfSKfhxsazHzadjQnRgpyRPaFmD6JdoY9d875x7"
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
