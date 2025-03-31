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
    "21mTc1XdCnfU1xNVQ9PQQhYRM2iGcJhpFRLMvpAeKU7FqobiXNwFjb76jawmL558ZanUUvXjGGpAxVbNZBreYpPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViYdnet9CfmdbimDp1XwEJRrnBCKXeCcknjvHJ5AGw3LszBuk7ETydPEwmJPSipMHVeHhRzLw3qSGpfRNKFGzRc",
  "key1": "4JZ8zsyuG2qSPGvGuT1C82wW3NvmcQVLP63uFYTD7aP3BS7PxudKFGxYJnjBS9YKnjAJJZTWC8BCM1hEXgm7chBi",
  "key2": "4r7bo9hmaF3vT2misTqSHB8pfA1EMBsHPtWjQhF4Fg223QABww75kJpX3KAjF8AuGVwBpGEkdQXtaGfr3vKU9HhQ",
  "key3": "5cvSxmWApcQ6NxCeCKG4yLdcSsaxBqSMJMcpGCybMBxLKYQXW7uxQAsg2Gwgn4gSW1YQ7Ubi7C6ap7hzsS6RbPQo",
  "key4": "o1L6H8icoSoLyaRWXBF3aShDDT4BPYfBpnCA1ZFDSnGrdHPnWxMJTBvGtKdXJJUZK5EoVHJue4SsHnFbEPbnYok",
  "key5": "gM6cMMzfnSY4VS1cG1WfU9BhEW1VTQERKekuQvz4puDWmCBphXJLwZjMURLTMg1HrVCggyzxR2FbEmHSxBBXdpj",
  "key6": "31CMy1bwXENimc9JL8cRgjbXAuA9fSfvhjf91hDqv4YXNLb54ngwEKfE2zAqJEEzMRsjunKsz2BxmghvdafN7maH",
  "key7": "3UnBZQg98yTJcyxqm7wn9561yU4Dfp7ZnDxfiE3nHgyfn15gdHg1HVscpNHfm7nzFn7ZsuMVCJGCHs9xZh36fBeR",
  "key8": "3WM8znkpFMP8UZRAWDmYiYDCKYsmUgLT6PmPfDfuxEQyPbMmkA28TvtGYrazz7Cv4Wmjo5ExMn5CJeUWAECbZskX",
  "key9": "5EzF48KvNtBAZWWJ9RA3RaZi5aeuhbDXrz5vo4aJ6uc5t52hFP9vNhUzqPgJuLn4YpcWQbZNr5NnByJZU36CQquT",
  "key10": "5zjFDY8uawub261Wdmu2Q71n5ccCooV7ymbAeLkoBUE7JSbWvipGEWviPm3seUyy1599qU36tEa27gTHqh8K9zDM",
  "key11": "3NYHdGqWZx8wgRrMFt2rsj21e2wjVkKFjWLHGG3hEmNAf5Hvazip8NuS6WCS5uCkAh3x6SnRur9rkq5CokYquS7L",
  "key12": "5BdVc8zurWkqLnUSwAfG5ALV2k24GDBB5AmhygkdbCWYysV52SYSve9Pre9piebEXP92Sp9HRb2ij24NKTtMZSQn",
  "key13": "4zGy1FWRNd3bAn9AjnnLK8M8jfeCsgMbKcz5FwCTLCnyvRNLf87VL3TdcDn6Krocyk4YjYdyfBvN7TihSMR6p3GE",
  "key14": "5ytKnib5eD6JG2kHHaoCUruEKpTCJrzdo6PN5A6N29KdsBeA3pxQEHLVKGhXekrQVnhob2b8sd9sKYu4Cn96LxR5",
  "key15": "p61BrJLYSCEWX7yCFnrivKMWLPjdTogFGMePuUg67sbcj3iju2yokbaCn1QauSXUs5M1LRso6NP9feEvDWWMvj9",
  "key16": "5mymvrxfjvUDLr61LUDbEeW7i1yqsZLovkmPvYyxkfoV2GfsaYopaudgXS5Gpk4Mfb9U1U3Kx71Hai2zCTuKFgtc",
  "key17": "5zA3Yp4jmc6Au5Hqgqq4cZTygG8Ny3NY7mCUGtcUTjD71tJGUPScgFHgf9HUuWTXqZeTJdctYkVVzNHKGnybmsgv",
  "key18": "3fmuEDTW2QNaDU7dqfPXJBTtyYVjursPMMg7cR9cwu9LryVKifekNTi4J5SKLroAB36wUmMvpqExnk9iMc3wfpWQ",
  "key19": "4HshSU3ZexGoWK7YDVTpRRbQShvijh4VmCbQpnv5ZVNYmESrMhLRQrTv4b664Nb7Ac1ufsorV9jNA1MJ1wXK8WaX",
  "key20": "8xjzD5xMFS8CRJ19biv3TaXMSGjw9zeZGjWWmVa5t2HQDFGYcwDweatSE49UfMcrh9traWNSg1LYKXhA77KaeFD",
  "key21": "2Q8SJKNqXjWPTtafbnjVySLtrTKnLrzrHxDK62qyfkhY7UdsuU83R2oh8FSLQyaaZSbhXztG7HB11quaprFdobgP",
  "key22": "3xRK2kgqqJ8RuB7bsPXhgSdnT1LFcWhwHgQ1yRnBvDd6mAuCTtcSXyfF1RoBJXiXALwwAaZU7Wh3muAvebR5k511",
  "key23": "zKbBdE3dUotnBGqr9Q3xKKSfWoVTV6BwPZddbGh8BijtbWBNFoe8EKn5xLBeDUe1Q31ATHWkXF3DegTtaCMSZ7a",
  "key24": "3avDWrhTcMFJyNefjfvak4iGNfCNwWkBFPczKE7WhACWywTyABbYE6PCLYhfghNNFrELRkjvNxNdAeHUo4t2ntqR",
  "key25": "5GuHQVCcyBwMicB27WCiXyuKSe1ZvZRozCt98oLHcCeFqimJscC8sBwZx44kHjjT9ymYXqHeUps8NmwT6naVDmGA",
  "key26": "5gppzzBa1YRoJwnbGeycBhPaotmtvoNnUEdm7a8Mdr3wNgy4X3FEoKVNnTUkApC5xbz9H8Lh3KPrZJKmEM6C9TNJ",
  "key27": "3uAg97b63PqSA4Hb3UHbw8qPJNGNuhfhzojfoaV1rgNX7gWKrbpsMgS2Qe9WskuJuS2EHLrnE4pC6BxKoRoWSB1p",
  "key28": "4axbyXp6UqcXTp4HH2HXZQxnLkesbrVdL7wuLr8SnhJwCbBg2mU9yARTFYWVJfNmg7FH4enpSdgUagsYquUKDg8h",
  "key29": "3m2XRr9d7bpgQQnhE6eAhd4QpKZYyy5mjuUsEVf1a42BnqV91i8cwQE2bF1VowNN9Duki4onajHHyApxJUkwU5tJ",
  "key30": "dTeBwEi2iBC8rUkCegLiGVtYT3EjSCCCuYmxRZEHxvX6sVozQu125CTKW5C7H5E78g6f5esFi4n7pf8AvLqx2p5",
  "key31": "2QXrU5rTomAMGt4n7LacHXStqkevn1ffWXqAFwYhVBYF89EcFK6iyDUMzUHo6GVCnEcT8xciFAVLtfFtVc9xvN4H",
  "key32": "5FwFQ98BHjZHYensDZMZFV1kVEEnZBJn4Mk2KRXr87TPhcHyfKWhm5mNuHKUwRB6T91MatSsrDiUzLvBT9S4gMb9"
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
