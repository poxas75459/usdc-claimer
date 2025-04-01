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
    "2VpKBST6wCecU2vB9MGaEbqS33DVRxN3keWygZnTfUjgevafRNpfU16ZJ1dLv58GL99xXx6dJpEdNyRfeeooabR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqYFCJkP43HmoScLPyyZquoF63wsTYmu419ZytMVrUm4QqQWeBFDGDxs1fSpXvsGM84psULRe2BcX8fxnr5eapk",
  "key1": "39BFvjzmN2hxt4pxPx4rLnLebkuD9mt33csWqS2o1RpMPR821kXMMJhzPfqW8coEemv69vPwNf1Vit9XwZc4kAzq",
  "key2": "2ZJv7gF5nuxCGr21iAgywQShZCAXwckSzfZPZ45G8oqDGzMCqaRDPoxbQGUtmsDhsH31tRFRFSH4sdSL2BpruNWy",
  "key3": "p23ytS3N9iLAwko9BQq4UPiv8Rr9rpF77cqTp1mooFmfxJyEVYGVqZ1viFH5h7tGAk4w16iUvkQgh6TqvXs4SMv",
  "key4": "gzAEwcbxUa9XbVzdVdygbqXUoCn43cCxq22pJMZfR7aFsQ2trU15NRhgKstM9dxU5tRVTgJxZ7KRVqa7Nhk1QHZ",
  "key5": "5VrJptuP8xhWwJG9ZbnKuSwVr1VRY1QtpHpAG6aPamqoKLXmRd7P7MMQJ94joKfXKWZBM6MwctgKBFwrJpAbn5mh",
  "key6": "Fpg1HS9tv2n85tqobkHT4cbtPrE3ytq4JpW1xSs6Sa1UMG1GfcpPZwv1wRtpRMjSmsKux73cBqeeR58cPhTcAsM",
  "key7": "32hRLkNnhBnXdKQKXuybycZ7ErRXzDCuyeUsFZCrfw48aFqjdA7C7pfo7NsGh23LkwoJGhQ4SsNk16JXdW2R6kUS",
  "key8": "4muXftFWdz8Lpror4Wkmz7vfMWzNf79cr7rPu4wSerDpg43d3DKmR3aT7W8vjY2ZaC9G8DVb4tKJ1RRZNQ1mb1w6",
  "key9": "3VxdS1gGXe5CPsnojH5FrG4zPudsuuCFa5B1fWBYNELiBCGGhCzCBRmyXUGcgjXSEhsihtycssjLbodn3sCnwhmb",
  "key10": "39WNSoeEieh2vjpK3XiVZS3NwjRBk7rgWoZAa6kEmnbMDYpjXAfhK9G5Cdaz7WATsw2Sf8shSKrpnxiyJESE2Rg7",
  "key11": "3gKuaayYHQ9htPgLQo2aRnE7b6yuXMoU6ShrS3N9bs9kXXtVyeLPPoL1G8ZFJdmog76Xtfb27LpoUjnFMDnoZfgX",
  "key12": "3TjBZUrNnbFijtsyAe9mwZ2uA2SgeAcrUHBKxPnuMfbjZ9H1YWAbPVAYURbdAr8Z5n8T2AzY1Tte7gi5GZuXkYSU",
  "key13": "4DCbvyrPb88pfQsGsRj2nLk8pVUe5BxiZVT2ZtJjdUjoWeKG2mkFAc9QTCBCSsgYfA9WdEds8LsDm2wq7hyuC1YQ",
  "key14": "3AXEmN3rhFkahhbhY4tQk47Azpz857aDPqobDT7XGz6bTCEiqszjFf5wuQTWu7JLGyRWv7JpsSyXGGpxCpWp57Y4",
  "key15": "45xXpvp3PPJqzXZzZVEBLoVqZzcG4ApnMcu7nPePG9FboHXk7Z8zW1fnDsTbY8Lgo2Y6nj2XcWSa7YCMCsnkpL3L",
  "key16": "4kwXg5mKYM9bsiUDJMWmQKqVxQdesMtB7EnTCTwQxF7n5b1VSaMdzt549Bk2nnPkHbMPi6Z7NBxXP9W6DnHLZsmN",
  "key17": "2UgDMstddpDD2Dv9v1fXWZWsJHApUmbZiy4zPbJfHgumr2KBBGocYi7YvuLoe3VuCFnUigi65qX5CQ9Np6Mj4aL8",
  "key18": "dAtQNiHyqK6cL2EYDsECpiHYwpnctX2VjZWfnKtzjZ2LJmrotf4QGNQtEfr8SnE8Nusksv4B2w8ZE6eFt8Bz3T6",
  "key19": "4Xp1yzcEj9R4cVd1S7Yh6pzMCC4GTfBgfNXaHBpH1cv8LENo6nU8swPavesrXd9Si29SDD6cHFGsJXxEbcCykXWi",
  "key20": "2QWVYCYRTMScJXKbavMkSj2ZYJbEAfTTryjNzea5adETFFmbjDnCMwANgoKxF7s8sV3UZFNihtcHqLHKddPbZgQF",
  "key21": "4Wsn91cVhSzFzwmLerEP82bpfsGhs5zxqvjSjnykYcTgXtRxqxtWq1Gj7rExB7p66gYC3TRTCFJi8Nx1CdurejiD",
  "key22": "2FhUJQybAQjduBCFFWN9yEZ7FWJaKvLWriqH25GQvQb9Un9zpTtVuUEPBb8GUvHdGwfHaUp3iCkR16zen9GfqBxJ",
  "key23": "3R3yqMcd21Runjmwn13UyEtHDPmrbX5Z3UiDZRFzr77nJbVCXjLofh5NvPU4jqS4eT36jep7du9R3crQgx4om55L",
  "key24": "3qGaPQRcJaiAnEjXS1nPP6qUgroF4Agce1iHUg5La222inC8CjeRB3jPsbLrLqvRvBo9zU1BPiFWVQwzvb34joZU",
  "key25": "53FPp6jvhagWgntDu9sVomURzMPqhFYAWiFf8Tb5pm3oVdnQjUpbXcx5Zy5cxM7xmsr7UuVGHBPQi82AYdPmjwji",
  "key26": "3k36ErThNdNSp9sho22PY8adZP4URD9CvVvjRtJRGixeEPwvjTC6PAVbnGH8UmwCAMTKcQ9PdpZkeau2zc4c2zAR",
  "key27": "wMQ1WnMBD5wQG2BnzHk3x5KhwKy1FGbr6SunLavrueznY4d4KviT2spcYvKTsF8QdAwxxFcrhwvsZAmz4UqMfBk",
  "key28": "5qm3AWNLDzvr65siNR4EQEVaTUuuXj17CdZMHJdsSgG3A8f5pLtMz16Ad4qR2WoNLq5wx7KJsQ6DLwUy1QftgsJQ",
  "key29": "4ucbqueCXyDazo3REd6QjABqBH4TcHgmBYZMyJ9V9abNaYZTEevei7ZiT9eGdtLeStz2DcF7uHJpN1A8steB2y7J",
  "key30": "4sGG36GRZXyt5CMrUifnNq9mQm6bD8vsyRxBwkBfPZRVoiRYewzKjZ6sYCraDxTS1WfpdpVk9BQzq83jUenx6J6f",
  "key31": "3RSuaz7YZj2JBViYT5DVntTaaNrJbetDAUTp9XPqf8US6PbZMx2SxGYMWAppuEXQUSzukcK3T3RGtqzMpsLT5HXX",
  "key32": "fC9poRuS1gexe2adw7CdcMY6pBNCx9HPCYikRmRwE1kQCrNd3FGyPLmsM9iBrUvt7vMkdrXC69hBmLvhb152X69",
  "key33": "39q4WwjhcDng3Hyn15ufK5VFUbShefYFPvuvXGQPXTJc3uf3YXairnXjssq49hdeB3abHetvn4M6CXPJvhNTxtfc"
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
