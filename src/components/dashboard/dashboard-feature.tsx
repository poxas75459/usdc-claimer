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
    "P7LN1RpAriv9pb97ZMhnbyKMRKY6r6MyiKX4NyUbWpRzqipi1S6HHtbE4CZQ2zLLm4WmAh4Yvw1vsoifXRG8L9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zkUMYWHw6ewBsWvvAeoiSBqhc7Qsyj4Kqgg64nTUcczWST9Po8MvT9viSaCnp6GBfbbKwk6hiJHziNBdHCovLV",
  "key1": "2MBzH7z6erK6dmYc8SxTe2bjJJe39WQD5EwxcHJi3z5mHEQ2Xy64KDKEo7oNYp2wTtr4zDwhERVi8U1VUxQjvpYh",
  "key2": "434fGVNmeb5dveSL3b9wyPMX5VudL4CWqfnPigMyYtoebmYQe1RRqiJTi85sTrBRKg7JK3FFffRomv7PPvjjkXC",
  "key3": "FVECZDDxhezRrQWkjDR3k1FS8bCTKvRUsboRoo2qp4vD39siaiZA1x9Ki5mDiTWoJrUdD4xTQ53D88nRm9JEoKX",
  "key4": "4A2p89iBfriHZ9QL7zZM6M112i5byMy2SPpk4Fx9UXEtmnwayKw76K3Qpi15sC1QCRzwQwvkW65WU628wBpzcUZC",
  "key5": "5i6uPYJ94UcP9S5XAPK8QTXEs9A1T72Dz2kr4LzADNbUeaZQpcjoj3Zx1tXppuCbq8BB3K13xFSGVxhD3vw1xc5E",
  "key6": "3Ex8WDxhmbXB1F6wwhjySko7jRLEFHr6CXEwCGiiDJArVTFgeV86PEjWMZWx9jnnjP31i7625tJQ5sicFdP8NHSs",
  "key7": "2mu4BqHrruEepz9hVA23ASPVQHwoSE64HNL9o8CCbWawhu8R2S3WJLBQifzBVAonijSjNXpVQEbR5j37eSnF4pbJ",
  "key8": "2CrYCUM8kzvt4QKR9cjsxy5An1jXPAUSQVrpyxdhFEXnWh3JVF3QcUBofFC6r8VPum72nvMGEWFvZvoRzdga6hm3",
  "key9": "4PweYTu8hkF7c8xRcwrqZZjUShoNm2ceWR1Ay8Sd4WjFgC1Fkn7scBs3DDgGFLkKsXyZqfYE4ShekncU4d9Hfa8L",
  "key10": "3GdDVptkGKzpbmLChgDrUEvaFh5kkBDeaUPxeV26nsPbWQ1oaQ7GmKFY2TYz2Ugd6wPP3beDDzVnYXyGhgmLk1M7",
  "key11": "5EyoUMEMgtjBnu38jjXnR23WWT28gSzTH6YQ5RESSnvuJzUyJFoxwoYV81LbMaH8t6Yy3ZJB986ads5e2APCY3fH",
  "key12": "32yNogHR1u5oSqWwVCnPQzk2h2yjcwdxScomZHrAs2CbMPtRNkLG8b3vQPiRNZ26cDSFsNhGkDmjhVCNU2jdvsVx",
  "key13": "bXJPDU4GWwtedjez1jVS9pTwLLZbBPh1o54YnCdCSDWj24yJTUZ7tS5VCh7hSganwXmaR5o69rCAy4hDh2f4P94",
  "key14": "4rXdZcvnYFoDjAm6j28gUJo6TYpZyKrHD24cQSc5LBB9o56y5xw6EnUiLzYgyWH3hUTuSjA7vY6oGvsU8eCrRUzb",
  "key15": "5JSNviFKXWWRDSMfsky3MzXgbYDCBvAoXbWzi5wct9pNcVpnBTtwjTpiofWGVhFJPmPjiFQbWZ5UWVHjMtYXScsQ",
  "key16": "21X8WXXTSsGbRmgiC5ada1Qvu3QJcQYQqZWSMnG1RrNqpLYE5j2FL1D8TxKcnkj1EaXpyJmQZmEZMt93zxasHieS",
  "key17": "3xW46o6J1w3gSjsUSNNCRfvaR3bR2at54Tt9R3V6p7gETWMP6WAq1jkasjj17WLVMqNb8PeqWyRh4zMstMXWLRUs",
  "key18": "3p8gPCEmC1mNCwNceBRywSzoxzwLbq8G4zQJvzU8eQLor4emb4AYk5YTZsgunWxMRDmicvJH7rTVdgV7PX3WrMu3",
  "key19": "3kUqxgqYc9SdHZyfFoDZK14Fa4ugGEkDFg1PW3srDuGwV9g5MWrehiEPmGdzg6ufu2cxQtkZw4RZpVYhDozR1MJA",
  "key20": "2qXN9eqLz9GbeEq4YxrwbrPzMA5XQHdZwfMAu7v3y4GLiHb4Kj5RyfRDZK9qh1ekFoiJ9uFQBQ1FjWuECoQE4or5",
  "key21": "5EkoUFX25xMXXU6uZSRdgedo9YifNVQpiawwWCKggaRs7LdLirNfgcMrzWWyih1GDU7EJt7kEK2DY26r24wgbUWb",
  "key22": "67QkQmyT7AKq8rfDpNo4XBUrTY7JqwoiHSdaqe2wFeV3tbuVX5yvprKqGkiyqXL3Nti7GhohbnPafAufMgH47zsA",
  "key23": "2cXoaGs13oxTvBdHyxkeLLNDdXSiwBiRdN75kfDpw8UxFuxMwvb1uVwDDziw7t488Fnayh6hKWTpjnsbm8pVvL5o",
  "key24": "5fzeq95S61Fh3Nagx51z2Xd1S1Ec7L7wa89V38BEcKcEfWvDFWRLWauRMR5ncSTDSzpEJkRxYtGCottheg9YxZhd",
  "key25": "4UHJGzySVJLBpg8SbNKXs4fVkXgMTyRUpiTySJbBmGuhPw4qnXeHUJ3hLHEzkmHVuFoMsZVKcmYvAoNdanWtvZrA"
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
