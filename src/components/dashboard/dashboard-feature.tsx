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
    "3fuXB6suAVQkeqNo8vi1wWChkKU6c27B6Uezhr6zSQT3GEUHzcCuM48W6NLkmKxtye2HmMppZ3xPPLRzKN3JPwj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TBCbX2ncoaRK3WqYBu4oz5EVmnwsvACTztxBx9Pv84boHRbn9rFmqdrfiwBeeuHXeV9M7FkbK2o73AqdnHU4bUM",
  "key1": "2h4hTXFqo1V5YwuiKDFyafCMpF3UN9A51QzTB4pZmgJgozQfpfcsRBX5wBTJEC6Z1GT1jGkBBu34rGRcubWfy5XT",
  "key2": "2QwkvAJCwPgEe5FSSynMhcbS6rZ7jApEu4UwyerhsZVWdYaerLUtGTdBZTw3TCJ7hp6hYFzj7BcDSUyj793SwdSD",
  "key3": "51ezbfju1PNTyFQUV6xsML8xoMWPqcUUTjN4DWqxDSoJPK2Ro8xbeEwgHMNZDjVCNo1uMW3tZ6Z1JqsTSZb2eU2P",
  "key4": "5FuYLVPRefLd9JgwnUHV6rVg9PgUYUopfkLsLW3gSf98RnS56eFr63B1cLH24mtYLs3FooiNZY6JbK1MMg8n5JR8",
  "key5": "3U8GK1kNboQVQYoFEGRbCfy22VKwRJZh6z5tGxnTit3aLDj9kwLvSqQ9xWBao8dZiRPzMjS2bKGD3341XBZafwCd",
  "key6": "5jaP25wkNJzFhcsEibF7JFB9S3yMx1cF7ExysmRsZwjpJ9nYs7DnXZYs49TJuLiPfN2QvwdEfc5TyUrkT1jLzWg4",
  "key7": "5RTg2jE8MEdMTqfv1wUThsGnFAXRXmrndmfg4SEY6ZYK7uwUvBfibECjEmMoXAAdvczYonpUqoJwfNE4QYq64oEz",
  "key8": "3KfuHv217KC2aNEiWv4cURWxcRFBLcK6cF3ptzHCEvi2uo8MCSU7Ff8NE23L59MfdavAh3z75RJUWi9cHms9uUs6",
  "key9": "4RcJSo4EvbPnHUBoTTKo8Yk57UjPMdEniHatwqvbUN7LyEPGvgJwCqihSyBsXavpZszvtCeenJSiETufijrsWhAC",
  "key10": "4rBqEppWbMmKs8p29A4GpoijyQz752sRww2wza4re6HxDhW3bnPs9XcHJ16AhFquLykTpbsCCkX3oobJRj3t33m5",
  "key11": "88GKKbifg1zSmYS3NYwCmPeTsSpMRcMDUYWufJk4CAN5wmiMoXncYDjZ1E1Nyu2JL7hZ9euzgXQLGGwDGcMPz9f",
  "key12": "s4bZNibuCqDiLhgjcyzbe1JJjrc96w7aq7MYFitov9xawVUBnWmvvyKRkNR7j3ZRs7LSUPVHfkehR5fS14FqCWS",
  "key13": "5dDhEp4CekmGkX7ZwPuBLZQUuzz98PWbKfSq3zKtoiErkpe8Tfoi1q5nz2QrJA2difYRCnoMoWjgukjfXnPqayTk",
  "key14": "5ZcVYBkNoCgZe96dw47Xdx9Q9akUdVk8uhBwQwgYKx5uoVqHAbGfp2pLKFZLvjusGB24PpRtjEdbxHWGK2B5TUxE",
  "key15": "3xoVYz5pMQwWp2qLUcfEHL8EXp8YikwCmopg8dBB27tEZaPZ7n8R38mGYiFgKHjojoDFgSDKMgXgDR3amnMzhF8h",
  "key16": "2par2ToGU3zRsEUqGqX5B5vPCF5cMMtTqzDG8Lwov8xGfrfPnZvPKMEWmNA6oyc1sRVjpNLUjwdT2nuwhB8iWyCh",
  "key17": "1bBcuhxFuBpCdQHyqviexd5Ht6B2ASZvws2P6YXJ1S55NMCVb1Qm86ozQoYa46yN7zMuR9smRNNYQh4E9qCdYoZ",
  "key18": "ArEpF3c82SpSSmDDGtcyU8fTWpvjBCqz8h3UWcH5FyAc5H5pvquadhGBxyQSzFt3hMTLq7DoEhvxVgU54MRheXF",
  "key19": "5sWpT6ttbJKcr3DzrCGn8VL9gEwLvVHuHbSeDqkxjMa7dW1C6zdeQ5MmxTCLB7WMyXGhSEKyiRnD5iL8pTYGrRMM",
  "key20": "4Uen32zXffV9zNHxjm4eEhvLxFfSpuhC6e1kQKZJNbp8xfh246k8DbYsMGJmqdPCSEtnQ7K27xvt8cDb9UvoQCrs",
  "key21": "BUyMSQTGBGLsMPE1r1pCdq9yYJDQHbrjbz57mxupvcdgWv99Du56NZt6MLKpKCJ6Lnpj1ngRLSTNdBGpnKEp3qw",
  "key22": "51CBj9j6u35Tcf66si4Ed73ZehE8Wf6cuHN5YuTzjACsi3kCiu856M1D9Su8F8KN4tbaxrXcstmboUgG4z5dhAzT",
  "key23": "5AT5pFGVYGMWZ7QWiL6ebNXTNnckqksere14qvxvRvG7ZvzyJPygLoai1JCCeb6N7xpm9wcrJm9XPufxmFmovoxo",
  "key24": "23nivPC6w5i5rLCBrKRkwVuJj8AR48Cqd16hE4jLTq1r9oiyVbqKAkPE4xJ5w2rNX484bfxe9SBkAD6Fsz8TNJrP",
  "key25": "62zpVt2UkY3JwdSk48tGHqKiyCwsThRAb15HFAHppNfQXFTDnrJ2EfU9g8bi9zrcqttEXC79hw7sXvXo5J4uNJp5",
  "key26": "4fKWuLpw8ETdreC5Q4qftApWsDsdVqzKTzEpdgKv2g9wPFsfpxY8YNDJSkt2Rg2vckoMAfHK1otoQdMvBqSmhMJm",
  "key27": "2SDA1aMCNj6UmwGyPCv35d7WdAvvv9hNFJwohDAPTmi1V5qmaJp6k9fmyjy2fuM73DwAiYBk94KmjH8Ga7r1xiaj",
  "key28": "5pEikENHgDqsmMPWh4KeLPKxDUTzwNeSKHheEJok3cvJbCvXBQmFbRjSCsgmjtK7gjDaijLsX8homP7ZC5L4sX7",
  "key29": "3ho9sEfMXidFjAsuarbTdzLpc926CZxsQn4DwuXfwo4V7E9Tkvmen2Drmda9rnzLAgFLip9QAVczQLyeMW7TDDKg"
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
