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
    "41snsy4wbPWRd9rb4gK2nGyruLzkDD9nTJWFM14pynZdZQ4Y23uQX6PQtuD9qcsGCX8R1RmsMfNHeeVqfqMa5mJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PHGKS54czpc8vBvhgzDXVm24EzGaBkKfeTnZvtLRctXJ6B3X4ifrEHvKfocUS6Vc72rL11xQho4iXMhwgaQLNNt",
  "key1": "zhZERCasXQpAeCS4zEpeyLxnK84Uy39CAKGuPNx9MBvNjXsH9FRQ8a3gRPpRMVhvjPkwxpHmyjsFfeBCKmiPm7P",
  "key2": "3c2x9zeiZ683FjyCKrLnPGzpotChLYjVer4goS7qLKVEC1cs5Rp1xzWEasu23s6HdSoztzVebHKTBb6NXNkt1yNo",
  "key3": "xmerM8t8hjRdacqJJSNjT6gHMuw8esPiix8Xa9pc6oNDK86FEjAHTe4zNiy8xAbEoTVRDicCVJ3c79YbtjpAw3v",
  "key4": "9nnLHUN2Y3F88bXHdsqZBsGo57GdjNhT1zc9dz8RWXTs1X5Le6C6odWZH6CF6hXivfW25uF1MC45u1mbpefJeUd",
  "key5": "2cfDhyY2NDJcvjFpAG7eBXmUbVyz5DEvttD9kxs3eJUABP7aD4cenXdCdCrx1r2xSuEioL6s7JBTcHMcBBE5d6Z9",
  "key6": "3nYvYZvCPnRSvM19qxC65QPkL8nEQLosakmAYtyB9ABPyAn2nLECbCFovMgRpqSi3cuT1orAw5JgcrcvGNpoemwW",
  "key7": "35qLyzHyKDm8bvfR3ZoeqGWJTRqvhJK2byNS4HUv5mJWyDhEbbMZYryiTszFKZhDQoXSVmrj53G99MzDvyJNGjr6",
  "key8": "5BcwkgGnZaxUg9Mf78yxi3xpwPFJ9sXXjzGDq219aCmEz7yMVKtKeCMH9ReNkKrTdp3kKfTVuDvm34Ba6xwe6SXZ",
  "key9": "5ocftJ5HmBHArw7ALAA9u5HrKbMuT1jMBXcsXY41by1oYdnZ3ae5HZ8v1EktE1GN73wF42AqjmxmsPuA8ddcMgVo",
  "key10": "UV99dGFS5VkXEmsLucpmiHyjnaRxracU2sFyniSUrrm6riZmA99LwrqsSQCU8xzBfd35oAQmy5BUaZytF2WjQqW",
  "key11": "3so4X8VSmrnMBLasTAc3emcdrvzRyMj8WsCkt27AyTaysFrxgvNDmYqJezySp7dok2b7gwhCDW7BCAxgkVZWhvQi",
  "key12": "3CVbFihFgbMhGrX2CebWjdZEydKdW6TCuBNS2UWus4jrDBnvvaDVKMDncffgeaLqzG3siQVY3i6T1h7uAnCouyXZ",
  "key13": "WgDq7hu6YBVKvzrg4CtoM5t69ijqDMcGXkmh4EMHGTqnepVxtnpWQmtxq4HTRiRkxgqdsP1zyJT5PnK3Pdkb8L4",
  "key14": "5ssCdYCEqRGLvz6LFsLWd4MW8jAwnCAzbBXgkLm8HSj4BAYLTBokgqzsnkhYXy2qZ4pELg6bNgTxjgXvcPfUNbgJ",
  "key15": "5QorVDf4sL3wU7KaUhV3RU6VPXGKiRsJafBFNhxawMEUYqnKqXGViYL6mPBw9nHQ4etcDS1oByL2N7UimZRqDFdp",
  "key16": "2gLjGuTqnNrj8df9GS9owEo6UJukzEqgP6fyyNmEayG4gwY1JBJens7zzMzTGf9cczHE4dCqsaNC1aZsfX56o11",
  "key17": "4xYGjpMrpRRaG2q9vo1a4TP7iBbBuUxKe33KmKtuMeVsnFYPCbRGxCQCU1G4ftuLWB38nXNJ7UdPd1dRbHTNZWiM",
  "key18": "3kWyhVbHURCtRPwKpvcSi6pksbiyTc7N7xPkMrj8xhdfcsckxZ97rpvdpmovBhmWRiBHqwUtDPr4LqzTLVPpPRRH",
  "key19": "2qGniiKriXrbeqZXSzCtqTfb8diJLppQvoa4PaQTSFq3jp49rt8wqoj3bYmZeAvuBdCwkN8pqSGgXfvw9Uc6Y2Hj",
  "key20": "66vefjhg3Ec4xtz3MwKFnQy5DQ3iCgjzGj8NMxwcZiF1pqDuTpbMkjo9egcrXkXzGtvQ5QQpPbPEFtNBKkfSbvU2",
  "key21": "5j2gt5ntAN9hHBvLMX7fTgAFA9tAd6vZxBeAinrigX8xy2KhZEJ6nCduWrxqEGAasXHfyZzUhJu9Rjpbxm9PokR7",
  "key22": "39We4VVyecQE3KjKsqPWMUnC4iJ9Lzbssy13jXQbVDvHXh9FUUSnXQLL2tmn7oveQaCFStA5SFuC5WoknNhzntZk",
  "key23": "h5WNZkHBGzVk23hdGcEPXqRf1UXJdzVTMuLmcDnutZndJmrSwhJoTXPpJjTRjH5PTi5KLGWu7N3FprZSTYde6YJ",
  "key24": "3d6i8Li8ERWbUt74puxrGPF7xHzSLdgZMeanLwZSQj2EcHKLibZM2b7XabdficZ2nt2bgRBv4J96dBZdhLcD4cvK",
  "key25": "5nc1GRoLSQtbYFVjvKmnARzUE17B7VYenWy8sjVNpUFeEkKgbGZJWuiSPzRyRmjVRJCL6BjqDGLbnAuzKAn7Tndr",
  "key26": "3jjWTB15y1cYWAj9xfzEUyxX6UxqdFEZ8obeYdje1eUX7jEppGP3JfKMCbGd58cCegm5vTYyw6kcUqRx6itLre58",
  "key27": "5Z3UnfDQg8dKBHVmb6jakVMx6QXH5s8xyJvAAi1Jnvdhas3QHCPrYShyuU696FToWcG4PJzC6HzfXn4fB81mUqcW",
  "key28": "4XkXbVtuLsXB5ysJSm5dQYBgLT1kr7DeQTD9aggU2nDTwtTyULcwtNSotBWXUPgmMWQdt7ZF7Zcy2opmXopxCvDe",
  "key29": "4qqdeEZrpX5qNnbdTaHVvC3ajbupMEp1WjxV97biUWm3UZck3HEithJPEHRgsi8Yk3upYvoueMhUfUPgdgX2Chxv",
  "key30": "2THtfqRknQ7uJ4DetfnhjrJAX74THoZQUH6ktFeRPeoWhxZdukHjfRNdcDHKBpSjtLjyj8swJ2DD4Pa97pQg3cQx",
  "key31": "5CvHyX1CnVbm3A5vB59zRAeUkeSyVzDKdqGv1hbrN38LqdiTgTmLxsAnQgT3xm9y8LLqcEdsm3dC1VHeCpyRhmXA",
  "key32": "4bsCUqbT5m2LdnvdqeggxiXFqRNMWiwcQRUuQqfuDdgso76TvoWV5JHcWzRBhx67fP8qVsYQDxrmxUbrYZQnxqQu",
  "key33": "2H5r3EwQQR4xLrjrkM8UYYmXzyQCJSAG7wjzVzrrWnisFQ4NkhLBHortCsELFNaabMWGE6pL36pEJCuRHecP9umk",
  "key34": "2nr38DmNwhj2ps2cs4UQDt4tyr8iShsuZXm7dXkF9f61KCpSxhyx6JU12WuoaJTjXBqRYVQC6BzT4TfZee34a5NA",
  "key35": "5Ck3y2mgi6d65PRAfZAmvtz5pJvmWkrhavPqG9bJ3x7Eay3hpodzyeLr5vCZUqJkdTAifCfL7pBJga9GccX9oqm9",
  "key36": "2DLWTEeNeVd3NYxLCYq2XowD8W2cx5hAfjd4mkWBceTDYrncu5fAhNNwGWeXYZS29Wy4YwYPHotAwhdR6DvnqVT",
  "key37": "2F5fLN6UVCD7Xfs7Hpf5qFuuUCkdbECGbJAFetF3G3EUT6DAqNWWoXLVJPLJTgtdMcvQKN7JH1fAqZEgiywFxs1q"
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
