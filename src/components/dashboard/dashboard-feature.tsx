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
    "3MAZAT2j79NzksWcqEwqjr9ffNmQnWMi5UJJRrc3MJtg68RgUQLYZHUL1ivCv82q7UWRGGJ8RThfC37zT5cuKF1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VbKcAzGCx6V15VWXHJn6PSfgVWKGrYu19AQNfvr82KpuRjGM4998MMSBVPznQKsLZukkLbXebKkptwu3CN6Wtn",
  "key1": "AYa3LzksQb1zTHDMKcoFthDMsEPH9tv9iUxVAzEzVcHrhw7qGfTXrScuVGnFLnfe4h8tGD6domjaQscREcYMwBk",
  "key2": "3SzmPCdoJRKZrixHTGcng3ScYMi3hfcuPQRB4kQm9b1HrA7YLjnz4nw6VtzCh2F3SUREX31Wy2979WH3iePpBf6j",
  "key3": "3Ytns5bz5KDgQgJFsemyzywtHmpD1GcrmZNVVUxHbWcHdFwf6r5EWtJoE8CmFnMkZBfUGqm9hQ2PvzyjX91J1Nga",
  "key4": "2im7sAMpnSTnV9d86qvaDZCdw4ub7yZLpro58KVFmttQmdzmg1TKfYFP2WFomdSRDgZcmSKs1WcPwePto2gu9Rr4",
  "key5": "2ghXoLboPDZeKjYwDFVBKYxeK2FjLZHZKnSaUp1xDzx1dcWwS8bNcGtWvLJKo4joHTr7zGtWcJ41fEPWMkrbZJAh",
  "key6": "2kr8RTcsJckQ2U6yRErTvEmDDS4QmiZ6ZM6Gu39P9ysAFomL1ZGARbesUicQWkZijDKHjadGAnioWchL2QiCDyCn",
  "key7": "J7qGp3D4RgXUJ1bQnpDexECiJvx9fNraDA91XHd3UnsjoUWJGUPB5TSp9wtz72xyknisSvjri7anRAegVnaiHAz",
  "key8": "25XakbCdNhFPopEePh5UPGFmyQPJUbQq6SXPYDoiUacFptusf57CAXpohuV5YC6Dk68mTsHZD3s8utVZ9N5A5qZQ",
  "key9": "2usQXfuvtiqreb25dTQXHpNPDMMXH9cGQYNkzkqubFrD6QMcPiy2p9isMGYmAWMuQZVEYSURJTRS9vKRM662wa2",
  "key10": "2bYUS2Nddj8dSTWJd3TaEP1a3KQKvEc7bN62iKTL63iwe1VLUryTNK1T1CHeJbg31LBLSxjHLLfydY5i5XA6wEaG",
  "key11": "2BxW1Srbe1FrG7YSR7NPc2rZNAks2DTrpc6d6BmtjVoc9DLKh7kiMRCfc1shA2NxbnHhGw6ozGniCkuGeCmG6rmc",
  "key12": "4VTqw4AA75XMZ8T5A8qCuLS6tW7KorGbwzT1Rvap64QY4hELrxmWUKsd3GZQSYY9ZPS2FaKjPzt5sfS16FnX3Rh",
  "key13": "5YHCcBvpJEVMksEzyDoGyExdN7Y3Nw8nmp5jqHSNRhysG4BYvW1FgzoWNcSXj2BE359pZJwKQ7nEEQtMJPck6Lnt",
  "key14": "5RKFtPq74vjcKaWhsDNk69a9Uu39FWfJBGQxzAh5rwfknVgUq4uH4R3QfWx8nqr3Pr1L9CY92eR2bXhyt1yeoxKJ",
  "key15": "2QYrT8Jc5FDmNRe9guhrt5g1amK6djEGff9NiZu2VgpEkxg6jm3CdBEpVnAjU1aufjfUC8s9A5Fq8fAonotthF44",
  "key16": "535C9swZ4BKYU1oHc4BfgnD96qFqRofVWQXhMSnc14QoaZrgedfwH8hHBRDo9zhpFwvXEtWsx2tfaoqDt2XxwV15",
  "key17": "4zmAPUK2myB25oPYDSYSK8Rx5azQKkp9NSmFmyckCDRFMSmsWXvhADT5s3EWrmB5mWA7SANwbBauMAHbNEFzm9nJ",
  "key18": "5SmXCrfBGoycLTVRkqMq26svoGKq1boozJok14VhC9rSpygLQcYKsgVUmnbTkPs76hTaNmn112TfKANAVivEz8ES",
  "key19": "3w4dtzWiL2BN7w6RtBa4JvP1gYB6pHCJNGmyutBccBCTSdP8ZMGWWyKUgMpPYD5gMnjF9h9dSjHV4Sp2b3VbFiZ1",
  "key20": "3RZbtuCFsWQ4fJ7kKfrqwhEMZcY5icX42ZXsmsi3ZvT5pT3p9hNVqocHJ6mXbVDvWwZf4esjLoQizpzYjFcqFzYu",
  "key21": "hF9GMFxRj4jR4GXc7Fpbv6wdWjN17TYiJJbijk9zzWLbcoyheDdPVsuJi7VBECVQSAqYYBXzCsYqezDJ7VEVEPG",
  "key22": "62Xw5GonQDsBk6MCPZYjMRw7bfKQ9n6Hca2myayM4pxNGdHrxvBXyACC6VWTgVsh3ZFwSsbMEjpfWBmMPm7PD3qY",
  "key23": "cPQtR1sb93PTQpiCrJuL8hW8VuVxveHQPu3Aqu9ucbjSdXE1j7r6WBEws1w7ptS3ZoY7ampFJodP1pz9pY2wBvg",
  "key24": "2kvAoysyv1f2Dz3PuieCNYW2vvcaSCXWbJPnwNw8UJFxCQh2dNSqmafUwwUB7M9PrdpaKMrhNDrZTFhZ8xEz7vBT",
  "key25": "3pg9PM1PUpSb8bMXMtE2mknwKfDrTC8RtRJAWnq4LvGgUwdxdaFWKvwyc9e6xdwYwDtMjo5F8LBbyubyNaeFDoqe",
  "key26": "5euTbLMsDcasgShsA3AWPWip61nTUxmEREZaNi1WtNm2qztZHzjmbwKyJhgkC61XUURuXiz3LpmNMEf2wqfnBeE9",
  "key27": "4gsQCBLHVdBBwAAcFynx8G2qU47kg6fX43varYfvKzbh2CXJxatP1XkahhtBtwrMtAXXEY9WKMPknzS8VE3dHX3f",
  "key28": "4fzmaK1MEphLsEy1CnSB7uFSgaeL7KFtMUe8huJchj36gaWbuGKqfcwY7Ciz5UBojgmH7ARKPqPsnoSQy4zcckY"
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
