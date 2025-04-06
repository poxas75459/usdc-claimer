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
    "5npU8H763XUKTM3iqPbN4sWZ5VVaXKLUCvzaBntbkxV7Dqma8PgLyhkSTJhVesTSk7zLMyczkm5JCDPj9yofpAht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d7MsyT5GWLwNMYc9uN3pvc5FZteVB5bLujJTets8be9YFozHFtmgLoUHxUiAM53VS3JE3Pdu6Hc6stkn36wdZob",
  "key1": "3o2QaTHTFCnhMedMUYAiR6rbmk67rLmXDJ5jmt7PqtZnyD1xgaLfoR5LncA1p3Wiwm6QP7a3TPWcYvb6Q4iSzC4e",
  "key2": "4twjTL24FAUe4ogQsE6K33CgcWF6fDPmkiEksdaC8BWe2pj5dMXHuGeR3GkDC9XDm6deH5hRWJLtCYcQqqGHc4EV",
  "key3": "31rQeodQBKvuJz85d2VFGAZnSphhsJqAC53E3ZXB7sNdbf5nhim6h8irhbBPjAu37FENmjbXcGcYzBS83tmGwNSX",
  "key4": "4FhtPc5FF6ovSfVPv2xCLBvHcrHrp8NqjkmQQFidch3sMcabeiFQfFiVYudTG3HNA1daVfoKPtPxFmu5izTh6ZaP",
  "key5": "3sFQpfP36ombveF7oa9PaWtcS6PckJxTxeLLQAHXW9STKj5YtReqqRVdvm8b77Vf6e5eCznBmAWmfBwNnv7uRgrb",
  "key6": "Hvk4UUNX7NqTDRNgVw157fHXWBmkjQf3YsGKHWTaD7ANkqqpDCXJQp3N7CnpRFuLWkUYh4TYrw9rgud6wGq3Xet",
  "key7": "3wo2k6vZ39TFHbwCtJQc6NTNXrvhRz9xAumNTU5ePmutsNgCKw58MqbghMjadpDBXqbivSvFEafvrhb9DMKW4m23",
  "key8": "4UdNQADKTVjoheoQKbjvc29KAg5fnak9bYF3k291FS58YzEy2AvRcGkFCEfR8yDn5X3KCuL9kZxnD1SyDiBUivVp",
  "key9": "rYHB9oqWJzh6Lyq8qmgHCuuRP1bJJkkSeiDELscX5k4kWkJcHRV94zZ3cuaUQGNqcjJqBbHczBQo9XBjSJwvw8p",
  "key10": "4iTDYV2QjTu755pjfgosZj5GFSrFJ7vpRb4fQgSY7zAcGk4HwBwBUCz6tHUEAZ7qCehWFTYuNSXyrNCMZusgU6Fz",
  "key11": "3PijPYh5w3QjEVHodhEWgQmjXg5ZThHVhu7tfhFW9niPVKsVZwWSztuPaqjwtisznQQsFDi1Dzgp2pGh85FB58Lv",
  "key12": "5MMzhoHddKSkQLuaXyhThA8KW72z3nEsJjSLefcnamRHxtCuH5WZ2rNMCg3HGi4smghosxVLHtTwcWzPzqM8gXCq",
  "key13": "2C4CfE5qEhi4vjn5oWb3H85c3cNYEMeYiwLTP9yUAKEbX9Fz9pJFNkCbzDM6APzfkLdMPzHkX5zTKwZ2KQ281iCX",
  "key14": "5DpU56khN2jZdckpKjmbupK1ZwBkfmkVYUAAQZXG14VqS8oVRfmYhCdayBbTK8wD3vAYAV9K48hrVfB5uaxMu5Nz",
  "key15": "3ggN4kc5r6bprGqxNS9vZHQyhiyP71t6cbUdiJ78mWmDk9rpGcUgAYKiC3ZaQPHvVJw1EmsG7DFqVJ68atrLKWqB",
  "key16": "4Jmey7KCcJ7jndQPNVVuXLwPBCHSsHuHpXJQtw3fq73fLDymKt3ETuL1STXFZwMdBStJD8QVFXeGF5cr5dCP3rQa",
  "key17": "yPByzYMJsGnZTt8sqaSfGZXh9PWdWwWfdRQ4X44uoxrhvhip7USsqerKTF7ddGtBmhKAZJEy4h6vt4fNkhA5RHh",
  "key18": "5DRtoa3HFMughjUDPMDfmeynTDA5G7x4yDAWX4ty4ocVfFynHzLmh96ULFThGrFeHxV39Nm2GiD1qfG2qteXoMx4",
  "key19": "24UbCD7twNaX27umKaAvPNgUhc1wBiUCBuku9XXDjkGt6Y52rV7QrruvLYtu8pYKLEEojmG9eQooBnZSwvSDRL8p",
  "key20": "5S6KE6HH9Vowep14w3W5UAnW1UR3WqaQcZyqhRrSVLxeQbEKiPZ3PbhEfgyY2D5JpR8uKkMSTe3mWTSeVsZrKb3p",
  "key21": "5EvpRANTZZY8gzJzoy7gp2aFtz2c9AZRdgTnk5F1b1PQbUCWRrRGUADJLuJkKMWMabxP5tQ79BKeNnxamNVnGA4Z",
  "key22": "5fBrWBJLe659GXvWEaNPbrGJdWB8UEP9BGMZaGFyjXN3seYs4zf6q9Ue7mfPfvd2WuYj8QBodM75dagCYnL2RPAu",
  "key23": "34vCYjo5koCgEwSU5m2TGzyZt83a2oyRWQnNe2XZBmJVQjjhWQDKUXWGXmW4mNE5bHPzmyfZcrwUvv7id4WTRXmJ",
  "key24": "4VPHLVsSTTv81punweb9i5kRN7WAhZuxphneZRZ8H256srz9TtcGeLPNvvYYqT2VspjWXwS7eicwosMnb2WbUpgU",
  "key25": "XgBcSroGdYzZD1KwvuixUhWpSTpfNDZuRkvF8QnfnDWgUsL3Ssb9NSfbmS7zUJqJZE9RpZiDQGWCJvjisknNSD3",
  "key26": "5tw4tANeCpdqSqx3yzsHjhs2SLK4G3d49jcdqdgZzvnNQ8TdFDkLMVsXCVsXfzPJd5ana3N7qrcsaTuterEtNidH",
  "key27": "5ufWfAPeGRba7FC3xkSA2LyZ73J2vq8tLcz8vWBJyXZzzb61xNVe2daxpNfBgtkGQ2nR8Uvv1dCBpxLNQ5bFnZWf",
  "key28": "2Tpr39GanoSnfRVBqWs3wa4DTmqRJPneyJzz7Wc7VSLQcgbQGM7mpVHaaaYBGtzuq9Nh5mdwD533V6U9aY1JuPAm",
  "key29": "5Yz78pBTsBTLfY6zp98JUTDRxwLArq8NVrnJVw6qkecMGuUx9V5tvAhuphgvdP3kKuaCj8U3NnMK97LqDP7NCct1",
  "key30": "27Gzpr1L9HiDeFg6zWbiuVrGc1iCecbNfnUa4GTmTYdgJ28unexNSnLvRsAt5UK3LczYWhfhqWYh8771N12mUeLT",
  "key31": "4645jTMfy2kQiKLTHKBmo2XTHqow8ohRDDJE6HVFeiws3sQPncDvFag5tWSzeQWJFwci11draL4kkyEuwRDrHfjY",
  "key32": "24TrHTHFH969bpPqaX1YEwEmpW6WZcm5hvixramdb6qunmJeNdnA2zYwKwEWVKPpCeDmjNAALoEQ7AWzPaxnDoq1",
  "key33": "64dzHw1X4qRNHZoue6CXoNpHvCcRQ7RK6ae8mvPzYCW64WLDoYKKAfMCLRojVC1MFcFqptWgUR7yU32Mwad859Mz",
  "key34": "5GYz9eXRUGpNozicwYeXzED2UEQ1XdBEdeuWnh5yYaCRGem4XXNnuvnxrZqW5mEj1PYgmhKzwgCBCXPCG59YeLu7",
  "key35": "5X1k6wWC56SZewBpyeiXoBfHXxjaDVzk9aCjMp5Y1ktnYpzic82bjoBRVM38p1Y3ogKK2jYZD7hTfwCuisrup7dk",
  "key36": "j6wJ3kJgRjf66NSU466UksuX7nJnBoxSotDy4NJnAHuhNQG8gQjNKfPvVUSudjBE1WGGDtDv8jhCeC7FwDnwPRJ",
  "key37": "2qCsChJQiGJRUWEwmFBTaADprnoPUMW2Syx8uqfzcKWRj5ZuZWG1HyiGUGLk8CtLCTuv5m1gKLKZumsVkyfBkywd",
  "key38": "539nx9C8FW4aMerpVT1e9KoA79DYm18DP4pPFJeVEge2T1NvEFcvFLRUWsy8oGbVseSEWQJx5a3TBPGwDGTDzsqS",
  "key39": "4hvhJfPwyoVvZZN1TNGdw5e4Pj2i46egihP9pAzxMHUYJ1G5bVfzpAQhrgUDQJ21hXCqYGmXiiG929shFsUpS9tG",
  "key40": "Cj26NVi3fcamHTLoLPjp9YJ8UzHk723Q45yPbqksS67YSX1gDXg4amrVvCmjgXgWTP8aguh732ugTV14dfCtecU",
  "key41": "4W4cSLGtBH7Q6fthnqSjLmA1ut6iH73Q7AothjS2kuJYbqXkaquuQZuuxqMAq4hKisy4AX6SQpf827etdBGwDQnB",
  "key42": "6LbupEYTChrGbfbLD9Y2tdUtRUktn1mvcMXk2d7BiGbyjohPwNFCZmbypTDKxNpx1vxtasndDnt71exvo4XPLh9"
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
