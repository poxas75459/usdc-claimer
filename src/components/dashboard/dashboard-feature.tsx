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
    "4UYRTfNuAZFpsmXh65jn7JRs5YEYsmgtNTLLpMQHnLLEZM3fFQVQNu77grLG9b4SStbzmbfkPHGnSQNd1mjCVrgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrjqnUSYoZriM8y6Tb2n9RoVWSsSeFQHujsquQ8T6HrGk95wTn6Qng6ijnFajbncwdT844qo15GCQjw2NZD9gkc",
  "key1": "h2cUANATe4f3SMW6xGERzrHjpWaam6NEkw9NF2dTr73dGuhVfKSzdHCUnCKGBWFD5AgbvyeeTpKVQGcDi8fuU5V",
  "key2": "2oYGsrDGkqXqP3h7me9ena31qq1X3Jdp4hJTqJgWHFa1jsAcCfVPApNKfa1PVatgjCzwbhwQcUDka7rws1JXKKaT",
  "key3": "3uPFFoJCa7QrJftfJmwM2dtUJ293MDxqzdrZMr4gNzKpgWhpP5tGLqoeUoWuqfe8VFUigYjTWaw61zbcTacPjceX",
  "key4": "3BY9zcbBkzuRjyStkd1BwAaDcQVvs7fvF8m3XQiDbf3DTGaCymyA4CnzsqDLsPQuUFPLdLS2hd7rsxD5i2Zrs5A5",
  "key5": "3b3cDqLeskjjYC5EwLppq9SQW4HdcMsBRbZbyffpwvq1ms6jJ7obzqs8KqFPYz5TiRruJhimfzSzfrrjee566Enf",
  "key6": "318kkiKEgQyKPGt8koMiR6HqbYBPLDqBrRg9GF4radFuCT8NT28aW8DzkAvjJgeANcAAeMvUVdskjRcCHuwGctDK",
  "key7": "5LFa8tqYSL4ZvJW21DYrkXq7sm7AGj48MNc1ut43nTmGWwNcgjm2KA62Q3uVVPJFkchdu5Z8fEFED4LeJPSQ2WFL",
  "key8": "3uGJwfyS7RTptyA45QXb9SURgBAoBgk7NxcM8fwuApgPbLUKd5sgcTAzhj5Mn7AbEh6Kkeng1hqFAxquCDCaMj3h",
  "key9": "5DcCvsC8d6y5abaWcFZC1MA8dBdW5X3ziMypAUVF8jukLtcfrDx7Mp1Xfk9WcMKoKSkP8U9o6LtECbXFLTn2Yhvp",
  "key10": "2YXWhPoErqVhVXWRcRr6Mmdk47bzF4bAhhyGS3nUYQAQZr9jkhhVvMp9P6tTKrCYwHjr24DLnL5n2BkaGa1woexR",
  "key11": "8CMP43WW9tzd3zD2Vkm1sykRc52mzf45eHLMGWShfmAK6h5gRgqV8jxJ2tX4xsrnkbmikLoKrwfDV6X9E9p4Jcr",
  "key12": "5zpmtif52bQxKn4asedzNXMBSYPEVVUsBqsSjuGcbx16NJZ2BHT67A4DVYWUxHsYsH7zYou4SyQu9PBUpaZKAEvd",
  "key13": "53iq56EuzE67udhjqrAFnQrrPhr7EQq1VzNhFZdKEZpjqovm2DGAkanko43BPoKC3qpJZrZxSEc4dw1QmXwYJFAb",
  "key14": "2KxFP7mMPkxmNSApgqcCU73n8hDsEdhEu78VyxUnGjjii3u6HQ11mtLCrzjMgqR2BToZ7VAJjAVC5TVyxmCGRntZ",
  "key15": "3GwNjHxff7EzCdDJ5MjnEB4XGJppzwCnqwW8Y73L5kThGRH8gwMJFkL6WX1C9cpiMmDk1MKgqzJVEhVfRuFbEtmr",
  "key16": "2wDkAbzcQm4JLh871jyuL78X22ME8tLsZscDbsqhZ9WahfqY24SDjWUbLJeZVuT7nN74cc4s1dFyzktGKUJJj1xn",
  "key17": "4wCs4WdUnHW1jpaqLUFJFgzAm3RQJyrUB5Ljj9XWLq3LxyqMZU3eXPshojKDynrTbFZdbRECkW6nX5M1vWbYfrHp",
  "key18": "WVhbcBHBaReeAG3W3MzZUb6WtEjCNpghd86Kv1qnovCkxWZUQ5speSuCPZ6MhUbbAr6udyAziLCFUCU9vGF72nA",
  "key19": "5FefuYjoaxcwKyf6DaPwNfMEtRx737chgGpZS7Faf5dYo4i36jcQzPc2d21gMYeKwYKMUqeswm4xA5QJoSZSTqGB",
  "key20": "5VPvV1Az6rZaErtcpm3fPpkFscNxtLDgoo2AVu69E7kFpH2R54yZ2TFamc3sGcSney6ZLNPcfZdM1KMj4z6FAZ5n",
  "key21": "4vm9jEiKUGoXgYhwvkBNfyx5BbqYoFVju2fv2XnXuBe4YMJYuYeq1z4GxPVF82ku5zrAfY9FSa6CLUd4BTR7YGsY",
  "key22": "2tjKKwQ1WbZVGfZViic5wZWyQuh4srE6myM1Hwfqmzy3KuBjhymQnqhb6zsLfVRKYscYtbdvWBUuvbuZcsqFqq1V",
  "key23": "2LN9KifWMHJmCViLNbpMB5gUqamt4a9kZN1SroifcRZjaqPHjEtxCXvtyZFxAtKA8iTRje8rmG416kecJ2PGE2QQ",
  "key24": "4XqcSKhcowd7LrcJNfAxEgbVpcpHv2x52pEPB5HJ7jeuYjnq5JGphz6QDhes52BzzX1VTG9PVoLhVx1iswNvJ2gk",
  "key25": "3wojEuEKP9a4pWKv9sV5Qb9zFv9aqsKDCB5m64it1gB84kbHJnJMcsbXfXV69ng4ovzwBp5EfXpZVhfCv6tgPkBD",
  "key26": "5Pv6rc3pakTBTGnvvFvfH94nyBpnvd5vYBGzAJ9jBQtrxP12qSGafhtwpmt2mw33M1i6GN1vdvUwq4sawwJxea1j",
  "key27": "5redSGKLJx7qqCyn6EpFYdBsDNdtEAz6HQfHoSxiiEskzpdKezTD6bBAAmBzu4hHehtmXSBNq6DaoQfxUxDFnDzt",
  "key28": "45H3rYNuNXgYiEgULnSB1CfRcqo1rFsfPhRobLpZVhiWnPWhTJ9ya1E4qd4m4FefiBVSFf2CEH4nXnwERPcLJT1b",
  "key29": "5HHnWkuvuoN8xHQqFG66sz79YvDEUeWdyZceYNCqR7XctkDNphPjjqVHFocLwBvh6VTkdLzw6TjKN15SdjLUSngG",
  "key30": "JYT8cCnwptGMTKYVUb2M6dN2fGw1p6JtRzCQVgaZFh1VtEGZUpfMuouuTobQ6FWDdJCiuiiWzc34Gn7pAyWv2ax"
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
