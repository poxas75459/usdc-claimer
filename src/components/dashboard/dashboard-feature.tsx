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
    "4pcZJyDu9cwwoNR6DKBW9uzBF52gGuPpY2Squ1LGDcWYLDfiAAFXGuwbid78ETQwBQL8F3EhJMidWCWtJFDog4BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27jQpUe2G5XKydZC5jBYSbvgkKBv5KznaX8ySA3JKw2nGkudHEuMLLoiF73MqByrGLa7NZp91cvnxd7rUSmUyZXS",
  "key1": "5g1ygS798FnpNMr1jXSv8sq5BouXCfkNtLYaLEr12QKCxPsJRtWDFQ8zfPGYWBrSpjaCy3hsyBpaQwex1bfYZXDr",
  "key2": "6zouuV1p6ta7u7B68sJiHt1KWi3FDRUmtcu7TDqaTpmbgxrGjJ5rCnopphze4sy2kkxsgTM6oANs2xmy8k3JeKY",
  "key3": "5gdMko6HCaVyhn1FZ9tsiQPsgkjLVwpVUU3D9H8tKz2qikkgAZas2VAaicK8XThWhENaY7Q6vzZJvbYJc9hX5C7B",
  "key4": "2i532fzTb5NJvspt8ZHyiwMKHhg4zVv69itvP54zd2RSrVd8LoPznqgjuJd12Hpw2NhQ4aU7Ur6i8oheAEiSKQz1",
  "key5": "4un1oa1NTgTpqrNfPKsFgttSjC8vjje9dtK8FnQcpyQqWySEjqeUyPZ1zLrqRexLwfMzGeqcdZ9MVthzsvL9bATY",
  "key6": "5GnWoHzAv3fAXPiEizgy3XGHYMNvaeWWYW8LhRJiT9gyXhdnPQqCYZy5j1z2UNf6CnYEMHNPG8duQmhM7qtFfLec",
  "key7": "ihKLa5MyLx4AjbYshXFPnBfD6dAuxam448gzaJwskW88dg4cYanh7QYhxQvSb3ho49rEMM6xy4KwtwkE7PHHQjj",
  "key8": "6fAn3sgdaogCQZ7gjFPNwoLkDUxNaj6XX52tKRQTQpSJjbbQqYwegTJL3vFwf2mfZq7vd1TVFJCNZ3jGNwSwBS3",
  "key9": "2iuBep8V9cR8vfK4t1oEpBGdVP3g4sUnUzAm7C9Le8U7ebBgUr48bkb6RMVG4VVivRyGwcsSgKx8zXymchHnptFE",
  "key10": "4uVSr1gBSB32MyHUXQtLRUgwwzyPtx6L3QcMZsm7Vwv4W8s4mbFvhv1iLZnxdJ11doDT2pjvo3RL3SJjkb167xgm",
  "key11": "5C5U89n3n3Awb5nddVmrGs5bzLsenatZ4qHCLdho4UU32sXQDUDTQHXa1fcnGmXHmd2jKwhfiMob86Yvo9kKEJ7f",
  "key12": "2EzVHaLQQbXnojfuKK3xrW7pWWqX9KC89affYSCxUKZ3LSHGBVYNc1uNiaMxWJzGGQi4SdSa5ZSh6dpssoSe1TY1",
  "key13": "4gE1GL1AD6nV1xdw6UdnG6st1YHj3exetQdoZzavY5NgxoRd9CTDjiyBrbxczyqPCAjtfFBx3F9DmDq7YSsmfkQ8",
  "key14": "2xWQY2w96DApnvMquc2ttTLk9mgeQwfSFCSnPSJ7rEnXeExVPCxXAHe9m8LGMCQc1GBFrLHXJk5K2XD4ozGmaL6h",
  "key15": "2YoDtxbnHNykeEeHMx2whaDugiYyQnKasAjsCwX6XpBD5uVurEHbGgqvZs2g8t4BPSwHbF8C6ALhxpQBA9Y3VQ8P",
  "key16": "3zev9KVxYUprAQk12VXqribkLkbKAZTeTfmZgurMahk6X7GPbdewaaHcxygAEESkeLkX9CopioT5ohmdqH8mqDmY",
  "key17": "3x9AmoUijc2EW7KrFgTEoy7N724QTNt8dwnG1uwDzMEeQnXfSpdtqP85AJRakBYpmUyM6Txrtv26x1eedvQ1JPuj",
  "key18": "4U97ToQ4tUG5Cpd3ntdwp85uNJR5udKnnbFSeA2Pkf72dgvqoagQT2CALmLGUBkhS4t4F1mFWK8HWBjvyNt7MAuA",
  "key19": "g8KpF1QUNUKbBdLSuotAhpGuH4EXV8H2Ty6WvD8pajBCwLmXsrqXWaeUAaouyFtcv9LdUa2uKmzsQ8X9c1CFwtb",
  "key20": "2yuHQA1cDNoa5xxTuizF4qjFVkPkT9hvrMARmi72MSLGviWbQUQEHYKdeipkqPXWXa4bChMc2kuHCQjJmLs92YTT",
  "key21": "5VcvSDvPdGkkYj9UZeyfRCVXVpLPWo76T9WDvKzX34hKRWCtDfcoMYzP8AMy72CFHDhE2nFKymHoT1FWW6YJZf85",
  "key22": "51UL8RoUQH89tK8kG7nqss3nw5T3GRLTNQxq5CXsGsmz7GGmnZknmqcMP2Lnm4QAkHE2VwPLzJWFi7smHDhokfco",
  "key23": "FfKYjPCyV2DaGBG9CyygoFYufi8ZonXf9zPqfg6niyR1F79FTUPTpCeDgCWvvZ6iAas6PphcuQxtrV2if2tyk6r",
  "key24": "34pBkpUtQUALNdKF83Wr5y7xUx2jiFS3LFHRQU6C5CanLJTNV2U3ZqBpd1M882AttHcW3ME1tXa2qKn9MgRRycmh",
  "key25": "3VhTLszXjSyHj1Vox4N1j8UsrpJf6ttxE4GyPrEJWbKSxByqAVrwW88bsnYmbzHWTEvjzM4W35LjLWdYQwVFXiyh",
  "key26": "vy1fv7g6WKyjoY3G7QTxbtZ3YbcSaHzWp4bgJwP4kerbngTbyndt7oqBdGRviSFHr5o1hcNcKPBdUe7Wf9wx5hG",
  "key27": "2iP1hVTZuD5abUWGB2PbbUvgKLU4YccX1w5Qm5p188Unwi7Y99Czqgk3pFz7shQu53f5zxKyakMsyFciw9VQFUfR",
  "key28": "5vdcyHMcPBjhMaP8ZzyyrYd324zkCgmcduauvD8HAWPeuzL6cKszx6eojVCz5avFdcfAHjHhafLsndWXHhaQUCz5",
  "key29": "21kFi5MyLRL7BVgkMgpzrPRN6miFWCsDxzbgdEKoQk9xvbuUCuUzUNYKa1w8HQmU6xc7mTN77h1fEzRheMtSBfAs",
  "key30": "FmZJz86CstJaiUwo5qsEw9vLbamMz1eX83hHxxJh2axarxtYWeJNat9SpxDCwmuSnoUMS35XPgDjBaEchsYVpjJ"
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
