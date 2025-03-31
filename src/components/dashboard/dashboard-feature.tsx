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
    "5sfeA4qH289s1SRgRh74kb68FYctrCVV6R5xo8GoopifodZoWZPSmb8ZcSB1rWsoPk7g5HRhemdm2HXF9xiQDTwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AB4DuR4Y1Tz4qPF3P5XowJQAcH1BxD5KegRUnevgc13J2Hz7Bf8oH16Ki6swPTcXkJMHrHMUBDFRQ31FTJuAv1",
  "key1": "5wBzErrXYXA7pfyRuLxC4U2MeGpUStD9Svi8mHijbYmbUUconMqjaKYg4GVj7RxJZFrKpkRo8hpks58sfnMTmWr6",
  "key2": "4atFgFbJtwQigjpGnS3DEvhjZwKH9MMrPHaDVJCVn9phTas8ENBEQeiTw96MfBJpD2aA7ZAhJjNmx3nowAz8jFB8",
  "key3": "Ua1r1E5mndhiBH6QF2qnTqfuLJmSg7Z96x5qZUYyS6yNmuLwgAEWK3VfXoYtRTN4MuFiSieB2mviqoTm7GZtfFp",
  "key4": "56LsAciGf7acuu95DL92fcY21BRvRcHWqkEnonmpHzK3ewhrXCRFctFyEGLqBX9dNb52uJLbPVMwez9YoSj9ZNMd",
  "key5": "5A9tLraHcAkbC4u4KKAawwgsYPHkp5qwDqQsUroGQbpMEWRDgBVD1i7eSWzv1JG4Tnz9AU6uRS6ATGvB47Gr8qBy",
  "key6": "2FsmvHEPtVrpiJdP5gp1Se7LWoCQyfFyQYDrAUBpho5X8TDEXcNShJM4br8Q9X5278rFHppMGJVG64rRtVhG6rSS",
  "key7": "2oE8SBtHt7SgJmH2j2sFeWTvrorwdvxYsDE6iEWFQoPManVQBdmEP3bLZ5wev6QgWgxTqrwkNm9aFfsvjhC7e7ge",
  "key8": "2ZGdZqDjVZhQ4b3RSbW18QcQPXpXqUbhNvFboSvcrLw2afTzYFfwNUvy5hUuyHf1GADbRqPNBs94q6V5nqyzzwp9",
  "key9": "4Y8PRWwjAVUVwGiECr1vsvrAiHWjSxxukwQ84FXT5YjXTz7RMW5B4Xsjwf1qrNLi1fFBLwPosRoJf2MgTpL7bpkV",
  "key10": "VamkkNTVoDHTkcdgonBPsRXmxvb351cbuuKASoaRgqy3HUWc4uqPgpqHKg3S4FRqKuCR8eqxfk94zaRG116QahY",
  "key11": "2WzSwdGkkZw44zpGYeMxa4EAwdepeM1WuQjWkZLLrYVe5Xviytsuweq9hG64eDQ3RQ7YNPBnVksbFdVcjijQiCov",
  "key12": "2g9EsqnaFVdxvyg6cCzP3N2QA54UzXgHPCnHAC9UsacnHqNWV6yFB9vDagvXnNn5tCxShQHBCNcYgNtphivpTpgb",
  "key13": "5gwLrJZuteU5hBc3tXASF6micoFPcMqoPCNQMnENqsZzM6CgST82Qk39eBdJWiEpnf2WXwcivNkzL4V5PcxaxPGt",
  "key14": "5vg6pkGYEA6j4UHL44MpfS5cK3pZkJzN8roV5x7QmsUZ9dGguVQJWoR8Ts5uHL54zw4Vpn3NozRVq4PWcdRP4icu",
  "key15": "4JvRQ1w9MsbnV1mArrCFiqhUsj6X8g97mazQeP8fFRkYx4ZkWqs3bXBKSeUK3GSYhiCMjr7EiG8A8MEPXJMub9Y9",
  "key16": "xbpPrcME267Aps8T2fzQafUUR4PrRZCGUphoadpQwzfiuhD1yxpSFFoejEQXToFN8gDB3cJ1AfBweTFkRD9As8j",
  "key17": "5rY3yCBtjHfBxLZoYhx2EeTAWt8hE4T3LNxEivk2YALgpCvLctaQMQmWMZn7ztkiRwzGmo7xN42QAHvYCzZ9jpbj",
  "key18": "4NdDKQVQCBrp1DgkFo7TeTdfAJPoKfS3xKKmMJxUgUz2sNkLBAgT41yZaUkRTpA8CCHUexR9X5yBNWkM867oJc5U",
  "key19": "3c3cwjmbJoo4G9LS4js8VXr8HH6bdyZSqqbUCHkuEpmct5LNR6rsgYVCHwPud8Xm43NUWjMxRbyJ5pUGbiPJWaMK",
  "key20": "3odPDqdqFVRpN3qGSkog68sC3GVaXx11vVo3rjuTPq1va61BWHWupMya5cyBQGZiyy5NjphxKkQHiwJn9D1CGc7d",
  "key21": "4bGtUEcAEo6W6oW5mhnXXZ6X9DNxHyXVu77UKj6MDBx8hAMyozbX8zXcjescAjou9XJoanva6EemNAD1Emhq9QCE",
  "key22": "2GZxu8f7jM6wxahDRVn11k7JnuVKT1CCwNcasigGXm4QuyrNF3bz7Nv3hpJdZoPpMmRU9A5zYZu7yFrLX8WGbkgY",
  "key23": "5eKezc9skSBSMEWsE28vgdBwppzDGhU3iZuQkRCxfYs2p7tnrpcqoJgoVp2jnxQdcdnuqXYFLVT7ny4jqSxpkBSc",
  "key24": "2FvMoJN78iUFvWDqABZ1FFMQmBufpTmAit48c8dmkzL6k9E13z92bXzATDpgniq27jgjE7oKvfxprSkpTcyxJ8fU",
  "key25": "4jAbdiGEgaHzXjwMVYjmtFFW73AqXUsWjTtEoWCTJqCvdFPj8iMAZSdCL3a9noEmLxynHChRGVeg4k2rJpjcE6Tc",
  "key26": "5Xw8rDUxqocYUw5FxGJzFZVXCnHiwsjH53YoiP5dkXtNhWu8KjdnDuUCfQoeJ5DuCC35TE8hfUFBytxorNwJcLH8",
  "key27": "2WHKN5bLcQ94tcwo2HwYaYvdD23tE5NjC8pomp7mgPC6Sz4415qsJVvQxJf1s7dHQsMjtZUoovspPZkJrojNuBBT",
  "key28": "8SKq3pLsTSr5i4Y9MRPFRVAkEYF3T61xXxdcBKdBA1b3SYTUDSAfdR63D8dXmBBqDyYZ3m4PaQxtbxxoRVZUXX5"
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
