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
    "2tLcmo2TmqckkRRja6pLYmZrCQUMoPhshHEvFc1czcmX4HG71tLwUYLXaHRNxCLq13zqzeuD56y6VsBcwQgtb3NW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JiXEF5TqxAVt9G3W4xJ5iEZ5RerLXpVsTwrewtNMYYP5cYs2UCtoFRDup3s99ZMsqiU66uQA99w3YwV5yBt1F9C",
  "key1": "29U7DnCySN6z53LWx8S8DwheTksy2DgBckLVEWv5H3HMW6icB2a1M9RT9YGZpEPZDKoF3vxadDgocMuza3mUfm7B",
  "key2": "46Lg41xBtwFuJ4LhwesuvPqctJWhYFfViMn5giV9QnRx4SAzVSj291jjf3E78nC6mcPUX8wZfvdjDn9p5Snejqnk",
  "key3": "4xJaX4Zesxn9zKukLpFTzM5yMhh6fzQzSHeKooLNXEfJ3H1j37Rcz7m5oe5yAEwYbBTdrDxCd7uD3e1sGQQ91nwV",
  "key4": "3CzN1HhBfsrJwLeXrfwehzipkPaGy1NGeedu8d3TDZgYWLtHzvYW3z5xDMiq4zYu1vfPiLRLFeFicz7LektmJ6Fw",
  "key5": "5sQKQcFUawxVDh9hpBEomS6E827A2VYWcyAzWMpQ49WscaM3Dh3QWPxdrXABj4bvQtwqmBkHXhPPqrc3wQdjSDEw",
  "key6": "2gp1A6cwuq5WvtbMeYnGEn7F7dmRuBaKkPfbXEeuyuajqPgWeGJBJ7d64U7cRmoyskM7Sfiwbihnzj8VztFfi41y",
  "key7": "27Ui69ZoTir8t63JhGwY87RFfTwB4bC8GRYarwhmDYvArQSYGug7X6NiaEx7p6rZWt2i4cpg9uZ9oX2dE6WRNr9w",
  "key8": "5qskoncsWRfBUHbLX5DS1msZ78o8su8dhfhCmmSWyNa43oMwSt1Uzb2cMJsHXtJQ75iA12pLpT3XRGGFF4J4r6vV",
  "key9": "Uu6Po91U3CWJz8g2zRAEeEwpDYeYdmESvVAZ7QmX2qMLhg5FMkQZz9giJghsLCmQMZBrgRD4vi6zUGCATXDufLC",
  "key10": "x9YwrwNyVbd7tyvnmGqZmKURTEqP314M82VCjp9hAfWteDbuiyqAFvBhu2qHWfPWFU9AYmfG7t2F3eLky8WpaGT",
  "key11": "36CUkedqFrxr2oXAJXXE9duurBU9pVSxQAn9Q5Fi6vUPCXPgqPvtHh2vvLwFzVhNh3daP9yzsofDnkwpVXvJJNeV",
  "key12": "4qQk2YttSKYUCKuAWc5zixLXuKpzg9toJZgSodsZAerAHMSNaMooigci9LvbGiC9pyes1AJRK7eo2LaHbhAg59F5",
  "key13": "53PWaVoYiMZ9e2WfgZqZvcsPouVo8Sg2eg5LSdr9AQ9gfibtjJkMozcyhf5bTxLnxMbvtXW1EbjSiTzHBVUT8eLs",
  "key14": "29NNg3ZUJ2sRJTAUWKhqiU7KXxLsxQf52zB7ccx2Ld4jt4UC6F63ihqY8pk2ceGBDEFAMNMbDfnr5vvjvkTHWuK9",
  "key15": "5VLTMazzLKjCZYipEZ8unENVZYnLTCdTZL7TkShRoJU643XPCXCWee2VznAqVntJXUmW2eJhUphnqqrG5mfFPR8A",
  "key16": "5sdnJTkqetVYsiwYy81KyWXuWJa2QU5wTkUwbSXYR6qgLqreoWycDtQLYY7r1hycipPAWccJqnXV6tdhhvkygEkD",
  "key17": "5vt9NAXGC9APMu1jhVgXK1aYxaBUunLCc2wXLoZgHWjHxpCxUxyxzL1FTMGKmVQRv2wXtjq87yDUPPE4G2b4nGff",
  "key18": "Le9rmfNvnAuDY1Zhkt2EV6mWQ3vZVxLcbuCXNq4bLTaWnbxruVLJ1thtajGyBmuSCk4paQDndqsLTg9DukYNC4t",
  "key19": "3G2xtBRLrimE7arBxkpzXXQQtFY9bGuMhaRBqHLHucF1gvmGkJoLCXMR14pDAz5LcHn4dgTqRtfiTrPieGSUitrj",
  "key20": "2qWz7aQ1nqdQmKcsM3H4JxC2ZMoEJdJt6ThZYf6mDNnDEaAhhk1vaA256KEDBf9qWxNLFjox2s75w3AssupB9ewX",
  "key21": "2eBnQh5hQenvANDPEZ8oPXzNCHf5iFMyKAYV2ax4HRZ4bCkif4zovaMJD4P4oYUrwfy2pKbYKCCiwNjSvJHFQT2o",
  "key22": "2ESXfhr3MC23dGHAFuUfuTsfsy3UTbPnKFopaVRigG7jTufQuUr8KysKvHt78Cpy3avzR4Up1HTQTDhNnE8x6LxD",
  "key23": "2KXkbVPoXEhbvPhgdYWY7ddngJfab3WptzqmMpRy3ABT1aUUXsp4Zi4GCxf6p1oNbN3SZRJttoHR94UjfFBtPYt5",
  "key24": "K8uppgobzCQc1TZfyCrPQ4w6w9ZTcQGYLijSm3yVhda2cDR173sbvUofvGJjFRL4crfS4AoMefQ4r8QAcYkeciA",
  "key25": "5MGyTHg6TvpLzi6QBVFz6U258WUmqUt6GmkWDkkB9z9i1DYrYb1JP7W6a5nRWh7DBsae4FwYwrQcMweZwY6h1FRm",
  "key26": "xU7d5RG2S1StYtsdZmZS2ddCXxnEoVptnrsXvpyF5zcz1J8iadkQo67DjWGnFQmtD2vtH7Z9kk6U2Jiz5s8jLJu"
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
