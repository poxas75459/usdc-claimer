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
    "5yS9QdMcPokQF12dm8wVqpnkSEd7te5S1zHFwTQjBY2vHcwtxApA61Mw1RUc57b2vbikrvWYjLRWiui5jdZZNmFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wNzjTWC5XsujCHHdyeut43M6Xgd5srydxwnkQweWEJj9hW5JtzPW3oPDisBZXrvSikHgysadPhAPm6bDwGPVyrh",
  "key1": "2ZLAZuTzeKHP3xrASRipLJdGV84G5xqfRJxFZmrSoy4GL38DJLAc7CnEna5XcYSXzJw1hDHBZmMbMcESRwsQXNvR",
  "key2": "5CGBSoPy5yfG3x4pzhBij77ojMpecKRVgp48bNnKFQBxo83cgJETWLmr2ihPsJaBPeoMX2WPqjohCbvyJgWPdBYE",
  "key3": "5GHWDQHQYXc2ztcZBgLZKR13eztwazs1TvFJJQNFAAPfhKhtqAaYsbuQTisaAJFGpsBCBCBaNrKAUy68SPH6Vzns",
  "key4": "4ho7ERaWAr4HH4dPYpaR4Adcmx6czaEACWGajeCeGx9Zw7C1enK94cv3W3DkJyExa7E14JrmQ8KEB4DKVfoXLXqX",
  "key5": "53CQBYiDh5wKyPhhu3ft6xdcCQqu4VwxYV5mnrhhvwL3z5ENaeKtpcM2FimacCyQipL1ns6afU3VxwHXMvgk58Vn",
  "key6": "5ruvSBxvagfcdjMRH1VQizNex7tsBXZQDySfCHxE2pXNvn597beCqSsZ6HHZ128KFzTaavZk4hdrv9YJAFcy5hpe",
  "key7": "4DEVJRetgQM5H9GGgGryJiU2Ytw8ToFaTSjREH4Vx326pCsXBBzt6gEBFuKintSwqPAC6DzkUvd4AK6ibn3Go4vS",
  "key8": "4RcZn93qRj6LN6Xiik6tG2p6L8xSgNUriGsHCkL7DUr4gP8ciLwMMycc7XA5tiEeyz8SvZCuiSgjxnbhy7aurqRy",
  "key9": "3hNc8NxyGyZ4jKa186gQKkXuFRbgrYRnujxUPDx5HuavcEmqxFTBsnZH6AvPTLoALZHuErpACtSFYjoUBZpRfp16",
  "key10": "56PLYFsVHtzM8U9NdpYZrPjvQxf2inUnHJHLKVHte7vZh3fBsbcAqGDpwa4AD6Xz4Fnxk4Fsi3Zfv7V64atUkiQk",
  "key11": "4D3JVo8fS7H489SGTjEGn3SykgiD9t5HJZtozEkz2dXiarzFrXSh661zXCrLFh47qGDXwA7S9CyAGaLs8nRasj31",
  "key12": "4Khp7rUVWoBJwpNzEcgPyViyYXQjb86zMR7ZJutfCRYF27o99R2LdmEQoQ7ipx7zcrXkMkTipt6tvApz79Dwkpmm",
  "key13": "3kJJtkxsNenNkG8gg5FQ8KDsfx3QkKF8ZvnAMe1hBu8uhUm5k1yYAJmhoU9o4XWrhACLCy62JH8Qb32EApdxk8nF",
  "key14": "h9ouvYktoyf19XzVbZXes3nrtcnUvcPu6moWsRFLr2dm37iJahLSefRZw5CSDJhh461gMnY3L5uJms1TcX66UBU",
  "key15": "3ffifMx5fYcYnbHjNjEZFEutNz4ZHggTSMLC1Z9hrMoh5tx1JqeTDUPsTvoZzgddJNZmTXBEBjf7RS1U1XqKXA2c",
  "key16": "4ErL5Te4L7t4DYgNp8JmNEwD3CaVdNXHhgL88zD5dzhLQoPy1DyHdvScTekUELtoiacBbJER2YccBb3WJ8qWoebN",
  "key17": "2d553nfYWZfM5ZnBAPvydhe7viSYscEKSPdygdeLkngoeBsfKP6Ks8V2RDqDvom8nEGUbKvHehuPoakUCUu72Zh",
  "key18": "2J9zx3sVhgMxUkA4HBW8g2buAxwT9nKSzbuxBuKJmByKEnCxR2mq26WgWRbKCsmLFsf7oCrEfL71t23dwXG8NWY8",
  "key19": "2qxNt6UWazWSYYUMFCCRDyETzdGNdhDQhNjD57RueiDathnywYDo9kvhiwL4KLGCKM1hu6D2C2PnF165eDbdF7Wh",
  "key20": "4uVp2jdiKF59GYJM3cyZaP1BKCKWgSfZzwDbYfDybJMtHwe8XwPgh2FLPw6CoozGdaoNEuX91P1w2cLspDpGoPcs",
  "key21": "3GvzuXQCDf9X2tQznfZqx9tGavE9yuFDqn3DAvRvs4S95xNy5Qp4PrdcH5exZ6b8RQbPhCg9xq4eB6pbjSsU9YHK",
  "key22": "4LTdV78PFddLSLqjjteLKv62FDxXLsWxgG6d1KJjY1WnwArLJvxhj5DaNoiRwkquETGuHCSRgYuEuF2iG6sFxYFb",
  "key23": "m9zraAGB4kE4vwBPgBM5PCnRBKbihhXVtAcfWzPuktqyivTmUDxLnBN6eBuMeAfp3bMSBR9gvgSwAjwUViuiyoA",
  "key24": "F4zz1azGQrgG7qAMLP1FE5rYjosqtNFNVkBrJmp4ddc2U82ST5vgzHdGeXaTst8oCw612g616LCeZL83Yk4nfpg",
  "key25": "51EeXqFZBAe5MNKtMFkdjcczWr1oxULhVmzELUE7dzV6Aivenece4h31ic8D6oHQ8KqiaFnHjJ74zTS5c9S7poPU",
  "key26": "5hU9qxPACYM151mLTMth3TyQzkrFxFkjUXfWvqDCV5NnT3EXAfRr1pH47ZcTetCQH7TJAL3WJshR6aJBCTfJkZKg",
  "key27": "5Pv8xaNQ3MotdTWuD5MUWhSKnXYYoq43wT9tYtLzJA4qqvwAjhJgLjQbokKjBD1ag92ZjBA3TiekVpiHwU7pQidq",
  "key28": "4PcL9VkVvZeyaByiSGCSP45sKe1YJC6DXjx7K67YkaTG1QfaWjBtV5QJcVyG75d9pV5uEnsKCzad8K5iF2f8rr1s",
  "key29": "54TLmPjMwTfyHGQ4cUNg5K4e5QsoZdckCcoQAch3R476zQYdwNHB7egtPz3ueyYaAd4WRMDpfakaaQmxEWLMZ5rV",
  "key30": "2VjCmWJCYaBhUV51YAUJfA34YkwjBpnnhz1ZKZNu8LaeXRN9e98A4kaCgFGUC2nyDKEjCj7QHzfJKJrZXYCW9L19"
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
