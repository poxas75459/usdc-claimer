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
    "2MWq7X9Ttryit3FD3Ga9rBYtYMtvvxXY3ipAai2cVaRkGVA5dgnMebtTttyfSoFbLoYXJoPk2pqExJwrCrqqU71U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57TN6GcKQQX76Ku9igsD6GaHLXjCsVGNx1KYVMxLXbW8P8Mg64miNfW54fZDSL1E5ubrxCXoVnCQ7NfoW7wpVT1a",
  "key1": "2LmEjoUC2mMaWPXLNmwuYSEyPsnBDWmd5NbFSufLkShqykcsGZyW1Mifc1wkQFb72znpcywV1NGTv75BppF7s6fd",
  "key2": "2j7zriErPPvCe4uWUh4CEyPcuv2JbbPAyTocA9EdrfxhDw6bpFZ2vJVJFHqgde8ff2sr5xjAdr5FswNmwLUcASzi",
  "key3": "3MvmBoKsnXuSK3GF6kdVrsE41cky8ZMnRHFLyaQE9FKjxYk2X7go1kB8Fi27KFGhmAuTGbA2tfd4xbWXgVU1ZgiW",
  "key4": "2waoPok98UTE9FZvmcHiwUyZPj3VuKRSCWsTgFtiAMkE8AQ7cRmVybGvsGF5to7Mig3vaHoHUuu4VzJ8WHE1RA7S",
  "key5": "3Fku4BUxfMJkqhMiXAvobQSFzqaRPhy9BwUMCBdGjfKPLWpJwzRVCWrNXBBmC1DmgASL978nVsHZWAWCezVZb4BK",
  "key6": "zLzLiyM76jsJqgUjks4nMtp34xeCLm7RKS4GhsmVcE9SvEoWMZBchGChL738oeUjSWyMvWmQqDsBqw7hbjKPrij",
  "key7": "2NoC1iPamSzCd4ZbQKDphu57f7MKdreYkgAJ2aAFReR5NxQ99MPKy1ZdvNbndU3VQLUeqE8mWK4CN79JTqcAX98x",
  "key8": "4YpiBaqYbTZrhyVooHXh81tDzcdKiJBpkW1stRwNp6k1p1wkJUbEsWkKRdRe28aAvAdXVMaLZWTfy7uPquYqHFSm",
  "key9": "2mcRpCoT685ViNFGgh51h4AYu8wTEQyrHvPbwKBGTXrfDJDKppNPuGYYuPRRDpgb3J6jk6AxDegvjGNFwDAKujQj",
  "key10": "3EaAzAuQfevxZr6KZXra3mrVkAu4nNM3mweHXE64whUssrAfcGU88XEq3PdAS2AdrsFrpPmxEpFpnJDrHGp2wyh1",
  "key11": "4ET2Ces15jGfuS3jApBrpw7wS71oChBtAtmJjTKPagpGvcKReUyXDpynKG2AmLKFTvmtcvuYvwiP4JuNdqGLV5p9",
  "key12": "H66yoTN1ZHaEkA6zjrCQchqU9osHzQW8wuM3dRPDaLSX8hKWNqxD1LadUydfzFXaTQjdfrrtDUabVkHsQnvpnrA",
  "key13": "2g1AvYCHKJRdnbzDTwHcJXAhGqg1JZyMHtcGUb8jS5FCmaxPSv28wA24pcUe8Pmg9nnDdHV2uVHzatbgySY9K4Xg",
  "key14": "2WNJmwaLC62coznv7kMHttWvDciQM4a6jbnD9956YojL8iie7Q6abRM5VBrfFRKQNTnXxUrcMGk3xMs7jy2k9bAs",
  "key15": "6foRwSsbAXaN9axF3xAEpSKvZTybYQjbLHR26LWBgtF4TW2GTwvedLVjHfLmfBoQn6JLjwjxJ5i9V17M4FzeTV7",
  "key16": "3PQ6fTWf8ArgTpkG3ySb7kBLmzrBKFP1zyNqEcvQG7UP3juutxt1taipCYHtudRPsE7DQ7LWjFaYsroDqxEGkG1n",
  "key17": "CtsMznwSojYGx7Qw6Q1CZ4PuFZ8y6rnJkEKr7RZdL2yhpA6HcAQE6zoWF9ak1LN8h2XtGkboiMtNc5a1Us5xMSt",
  "key18": "2GmbWenebM5YPAJDnjn6NfEd92WjnMcimtFRJ5tkRQAfuKhU7Duxg8BfeRQmwV2RGQaYd5ccdaDJB1pvW6ejCnHS",
  "key19": "5oVnhU6pMDZ1ZP7bpJdeGhLiCyD64WAvjeGqirpHtSW2m5HFvK6zArayx1oWwAJyxSTHkchFG4wZfLWdYMp4mmVH",
  "key20": "4hnCzxfmHQgCMJoozniE2HZw8wfyiT78daHLnFKsB4dTEsdqtxeeRiiVUwMvpPajWxUjvAL9tr8EaQemUMmKzkXQ",
  "key21": "432rNV3N3ruAZyau5hH57PwrD4NDAKwWCp6TJWtHAgxGjhh19GAU6XmYryGhUAs9d9NuV2X3vyXsePXPXMNRZgDA",
  "key22": "4df1S7RBZebb9ZKrCKRMdaL56jr5AwRMt3G6S8AXWRiM3BnYFYbq5jtmymgyxSXvBTu7s7Cyx5fiPPqtnU3Q4N4d",
  "key23": "SzcZ8715SPUekhdsfPN2fPhtrgGCW7r3MRuSq7fLr4a4ajoHv6sJ8g7GhKbfiW32LJjA2nC6rmHSUkcw5T5kxf9",
  "key24": "D5zire2deEr86qJpZcW7tBjtJtq611W5jgBPPibgbyCZYtJ3c3G6ybANwV6Jiyyd1Aar5Af9SUHVKDwYCxFg395"
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
