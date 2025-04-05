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
    "5uYs5AYJWca2ucCRwBh1RRGWXCDhYAWKzPSUmavVLXFfBUxh2fmaDyCVqTxQLXZ4USdzXKXHg3P3sUQKsxMdNf9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWXWHvMhpDsPKJHXCrHT6JJJzCQDTBzQ9XreP2TMUDJb8avYRY4NS3uCgyDReMYRMovdGS1UU3HimqcKmtJDaSg",
  "key1": "2kpe5vVFRJqwH697S9yttiXHhXEhMD8CzsgoubSqn5Jp9WoTtk3Ads7hjmrMmJNNXmBET5rsQwQEgFSpSSCsR7Sm",
  "key2": "BVZrZR2YE5AcaRkXWtaE6Agjrvffpdvt9QWPehJqBXGaoToGYGQLszrrzkvkgYe74hk2fn6twkcF2RdaRNagzF4",
  "key3": "3SvBLVfcUWFjhxPiKJZjr5iafNG9f1BwgReDY417n6vtBHGrXGdhZkg9n51syd4eGHb8CzyGHVd8vRPquoFJqR6E",
  "key4": "A2WVx2sK1KM6NbJxx7Eiq52CA5AEy4YpJb2eBVHqwa3K2jnskMPz3QxZDPbWuzTfSduC9qxfGXC6VyvZuu5QCF7",
  "key5": "61vb2AzUQqVwk2QJ6GPkzhZzE3yMJNhGFsdmHSLzJ9iqnJ38K14u6sm9tT1jg9grTcHFdfFemDqJdyvUet8otEa9",
  "key6": "5ejMduubrMZuYFbQ6DRQRLrxpgrhEKiSK1rtnP193kSQyzeysYP9BaGf2ASYK8c13jcDLgNKUobqjjzZSpFirP4e",
  "key7": "33hDHRXp5Jdaoi7ePRSt2spwSVYW42wYNkMEC9d3BYwHGVad63EwG2QGc4uzL58VTzTF23WgSouBMuT4zzA9KUfv",
  "key8": "44BwcTC8fktQi1i2dUo41nwoVqUfWVa4bWXqoCQFb3Xx3K3Zzv2xaN9pz6zEm2VX6dbU4NpADv7v8z9QVddFCBuH",
  "key9": "2s28daWbEVtp63XZeoQHp78Z6oi4Q1DdYTmBXuMJw8RtE2kgXVEgQba5CceWCg8GwzthVgwWScX5rMVRLR32PLR1",
  "key10": "PSWT5qLPGdJfxggSwRJt2oT88wTxtWY5xZS3AN32oNqNDcZwyVwz7mtNKSEPvApiFPu9w3jeDA2KkWEDL2knwN1",
  "key11": "5S3y5xCdh2qEXKciVpPhLZFEZq9DG5eHujyzSepx6RUDUCikCWhUV4b8tUTZGcW4uZk2U8vobKMGUGEKze2U6L9m",
  "key12": "33xQoQtwryZyunub1Ue436q1fyVDxWSoHj8JpZeaUfzT9Hb8iKPRdqjFfr1YHE7X85M2YJmfsXnPCinwUPWwnxxB",
  "key13": "4orQTfrR6fdnEJDDdiyKxKXTCXXwecHmvP8RfEYVkmXu25xA4o3f2q24df1PPZYVeAeF5uGHUPjvtH9gvotLPSyY",
  "key14": "4YPXFMfi5aWv77VH3P64GtwcDhnMtjZQdT9n1TeomTyydAEpLTm7UXVafZsj2WbHwCgUzcvATF4o86QW1G61b8Fb",
  "key15": "2vxmk5aF1SS5bUSKW6qvobGaGibC8TQvPh8uQPsJih53sxneByjDVX1Cx7JRDSGyLytwsMUWjCE2Vjq1UBDjmcwd",
  "key16": "4FVJEr4MVQJ7w5Ed3nBHE6mmHZKF5nJcTWmqjRNwj9QV4yuYFw1EBYV9Nmd7xm9DCGyptRypgwCo6guPQfqB2fb6",
  "key17": "3zELv2sp1gvr8T7G1bJn6toyvnjTKW32vPXKmt2DtSJoYZCr49ZPyzAPhguWfPNxDqZoo6Wajtue3gHE6qTmEVXe",
  "key18": "3UtXazZcdv95gT6UbSkC44UTHU53zEqcQFTJJ9cghDL5DX7FBDVpYP1KuFemWyRxzuX1jUTh6eUdGfkQEQHMyGzm",
  "key19": "Dwgxhp6uDWnjpThadNUMfnZWPGq8oj4KPtX8HPwp5puktceCQoVrDZcsc6zXrzSZn58gDV69epA8qbSbjLFfJ8g",
  "key20": "g76yxwN9vJYPo9V9jJnMmJfxxYyzTx8UWwVmPti9ZTADzNtty3dVyVkxa87S9VuaCh6iYx2M8F3z1wD2BRtsKd6",
  "key21": "4MPR5NML5g1NUD3GuisdmRxiQmL168jjcwqXBFfwqJSSjL2emnMcucMqeRfaRRKM7ZvCLsjELbA7zd7rGZ2GBqS9",
  "key22": "4csjDzpGzpidyvbjXujUPLZB65fA6U672EbmaQ83MLhYEjSmNs8khV8uQhNFtYCFZkaeoXTW8SesuvbqAqJxNj3g",
  "key23": "2EJbv2W6N1uZPWN27mFKLqXErKh17Zmsy31TpvLAwgckQE4nYrgDqszFiY7PZc7tucxszWePUjpVRuaeqNt2XSgP",
  "key24": "puFqQTSSYuT4xEeQ1J8eT4iUWNXMLFywhE9Vmpm8j8oczpPxhn165rXBcsZvEctRwuMAcv5GqfHNLr5LrhhHqND",
  "key25": "5wKjFFp3H9nVHnTMVddToSjYCFtixDDjtnkaSCh5Hq3o3Wyr51osk6WhpxmKQE1QMTmBC1Jd7uQK3f3AAUUnWFx3",
  "key26": "pbwgigxfFsgEtj2rAoXVkxWB4UB6xXoAGCJWkGVeWj8bwbaAQnbev5RJ2iNFExro2RCo3qaQ5oq5oojd32L4oHP",
  "key27": "4NAUKMragLhhhV5hjR6ePmbhkeK4SZUXyRzhphqcKsyzyfA4SSxwmLe7oz4N3kMRSLguCdjEHsTv4FD4bsELwiR4",
  "key28": "5NNyY5TzFPqX5QdbW3UCqbv8WPrwgygFQzEjE6FKmUhmKoXy2DpsAHHjQ7YMy9PxaZppLX7x45owpdvp55exnZvh",
  "key29": "LvdDDLYNejFZcURBGNPhZDJxWwYz23hb96yHkGAe3mx6eKdAAeXbsWeZ8iF2HrETvc18BfPprFdNxs8GDrNaPgX",
  "key30": "3RC25GYBE4HDuseekhquCLwS85h4GZoTNTE67xgibG23s84iv3sc4cSdPMKTjqLVjAD8jaSCD3KjF7nyFhXZzdEp",
  "key31": "22hXSo1QNW1HzzywmMiE1Kpv9VBmhnG6E6PFHBaDNoRK2aYe6e1mHGvzy9tNwaddyWy8uvggPRrEeD1yrbTB1N6w",
  "key32": "3H3HCCN7eMuZggneQDWKeTLpqXPpbKcCWhJRxV61cxgsH8jj4iL7LtFT38d9TQiMM9mwcrKiiZnF1essfb7hJ8DB",
  "key33": "5TJ7eLWUNScTzkQ9cNUPPu9fjNcYygPqGS6GC1d891jcmkZzxTqjtMqpWRfPbvUbnzPKbgS7RHWrDKPFuVph6dGf",
  "key34": "2z3ij4J9BvVUAoH1keeE6rKWy6WuQACoetAjEtR5qnNCCFsXUihZPgXWvrtmdiPf8eC3BP8dD1P413VW2ivb8GXZ",
  "key35": "126KZRSRBgrBpRpiTKqCmjrpNcC7n7EL5z2eP2FTZC2G8eDQ8RiHy8fQRuR4A7Auh3xQg2ScDbWfCv1jUUWn3Xab",
  "key36": "AKoWtZze2rjtcr76773B59TH6peLFVHU7jxuAx9iwnLKbttP4rmabLddrVAd7NCuDGEzMVSUZUNTyDtd9fJW23z",
  "key37": "2q25byZ5EQVH1L1jL62yaPQ6Y5UNbZBLBjXwonnXeHtVUFkWyqLcdoKs5wtNJ2sAWGcp6tUeMFEgKoDtkVPGpfS6",
  "key38": "TrpAvmJxdLRDZeaJYy4o1eZhtM39VvfabejPhK5BqpT8Wahr6PBBWLtQmFrvupUB1wi1MJLrMecbq83FBYfRTAJ",
  "key39": "6trcqWVe33Wz3BKydKEKMU4RuVkfXPLc33BKTsym9eVycP3mgWirv7mTC4HpbVzizs324LBeWJ5mHCWUP6AFbbK",
  "key40": "5H5mza7rqPnYPnLoSSSTmhEtP1Nr2ZNyRPv4aL4GF6Ui48VhZj9etTZKwRCrnQsS8citqpVzy9jTWtjJQD34KdCd",
  "key41": "VsxS7Xx7xg6TRUHFAiAyZzTce8JX5FCnwJ98ACnk2v3ix4KWDqnWJvTgNdSAkhv4q1SMbuefJngxadMVJ4GxrdH",
  "key42": "4t93jEq8AZ4ViuNrLp1WPmNnonmqtzDyALQ7L9HqjiHSPjF9YNEhrNs3ct2dW2TQ1DCaSK45HaABPzysGN8VTW9x",
  "key43": "62NLakck8vJQt3GQ4T66HDFt3qJHRAZobrGEW2EfvE1utV5NG2YrvbUx4Et6k6Fv5iR55Xd7Tr7SRELUNPwXRwHz",
  "key44": "44Fb4Tsqubf4CFr71WqV5iH8LtxDrGSmVaoJBjTb9yDL5Ry8mtsXGEmDD64EmtMSfmPY3cAtGNBsXMcGzskNibqq",
  "key45": "d51XYEktEHymQZ8eaSnCSdgAQbtvrPrqeKmJwqbuxYLrVp2d5p7QNop3nZHWqwP8G2ZomFHv5mTN6XoWU2MQPBw"
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
