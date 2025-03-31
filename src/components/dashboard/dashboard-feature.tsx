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
    "5QPpaikTdetCZFzYQseVBqKFRa4Fttt26fKABcBwB7M6vKdpCdDxzrrKLiJsjA8JNnLZntqC5KLbqncb3Ve4urUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1PSZdvKMeqRubRarrpd5cn9YtxDHomq4kUN5BDJRxn3X1ygYrosJhMXAh9e4fDLahuWWQnSBdyi6wdsjs9vubNA",
  "key1": "sufGqywfAF5njD2S6n2nXjrGJhvZ2FJezFttmDpacDsVWNa3uqQ7i8kPc4cCiNwj1LdVxKH3jRM83TCqrZciXEh",
  "key2": "57wJyNK3mvJji3ZMXuVYY6N6UFD7mvim5RRFjWwWDSfLUjEhqSvDbZZCoVE3356nxufzYtSGrqiQ4Zw5GmNsQDgD",
  "key3": "2zPQcB2CiT3MuPezkvzZJNDV7XS1zeF7AqL7k7ZEsrd8ZrGNFj4tXy2it1g6E6VS7fy7UY3pf8HD63kV1V43YU1i",
  "key4": "3grPSusaZHGazEdpgCHnqpMjPAmrgmE2ffjHV1hGJ6zQ3s4SzSETxJCuk4LLcQoKqnsNZXhMsiMdwZ3y81Sy46F5",
  "key5": "3htTp7CkJuqiJ89oZssxFbnBYSYCqSMym3a9NZCoecFijALHSfLv4pwaDT5TGFh6RMAEAkpbBd212feLwxgh9EF6",
  "key6": "34p7VMRkTrJ9bKSKG65W1F4MrrYmj8b3EbaAoZ6yvUSNoAiE5peRWoN6V6GYmbMUyJurBk57uCREB2evFVhkFSNP",
  "key7": "3PZDmrYuJS4JsXa9CLvXqmmxUEgDZcRsMc3934TPmFqrpsqGVmDegVeTudCDqw15as3ekF2kFhnZDUrf5c3DLfsc",
  "key8": "2kEe6RiVnKV7t9awS1u3wu5QHfY8PZ7ngaGSGKpTTpRxEWuhy7RLQodD9bYU4RGmzx7kb2P7Fkp7vgaxwpEo3sht",
  "key9": "3LZWEe3tmZhuWYP9BjjWHeHUrRpBR9CBkArEghVvLhJ3XDvv8XQE3yvmBHUVYxHPVju35aqdWitZXzbGDJdbReDH",
  "key10": "2AGrAMEmgodnhBBh1crBsTCjqSVci1993veBodrsdvyijMBJgcqGWSg6MsBmRtTbkPRJURTNKL7uyMQ4MUvW9sVr",
  "key11": "4T6BUpfXpXB76DdzBb8enZY8HsWojDYAB6DmaS7Seoh1Gh2q7sBgTVwxMCAH4GHhdAut3TbXHagFsSvQRgSpjZwf",
  "key12": "2U23Q8RT8Ef6FWdc9n81ZWNqzV3nuPhdvxYcWaXUTUgK2Fwd17VDJBJyn57MXr3AjSyhf2GUePXqVUJmX8hYfxV7",
  "key13": "3tSTwg4HyzQTHtmXcexRmaMHby4UJQzmEpKFtFdAX6p7axmnzfWgNXM32Cvxu33Xwaop9XmRpgXUYenAWWhpnMuZ",
  "key14": "YQiK9hRQGqgVEWpq3hdo2NMpdWoawJp8vmMRNCCJnsCAg4VNN9wrCLdZkzsqjex3QCokkq3rrLHYDDj4xCxXDv1",
  "key15": "57HZhhwEfXajg9GKFLwx4aXS7qRwRH1Wk3CGWUVeLYLjSvFum5ciGdGnHPLjXYPivFKqheaHQyBnZyJeZkoieUMW",
  "key16": "o4qTT8p3j6y8msDCTAT1JcsAf6J7DnU8whBpYPYG9GZqYiVfsm4qCw3TScAYiNH5wLE1A5obNZE1BPudGrE5YMG",
  "key17": "4benGVMHoep31yaent6TNP6YY62ya2APu2DvQY1gB1pSyFypdWzQ3cT3hbEUDVbLpqDF13HPPGuYjBgmYvgAzBqD",
  "key18": "3fhnV8QNwhQ2FEbZJ9CNuBsH5BBhAiac6DdXL6KEGHCi8AnC3Ud3sX6b3ZLeoQ8WoVGakpnBnUAMzVnEoQ3whmgh",
  "key19": "3moPf6tKsecMvpwye4qLSVBsgR6cmsE9U9eoYp2CvKhRkZUJJsqdps1JezQ35feEgXp2WXFYDaRJT4G1sp7VoLMZ",
  "key20": "3A5m2SjigYST8TLaVr1MFY24wmxj6yRPBvUoyuCj48igR8veSAn9S4VJJQwA3hY9XqtgTjvwSs5WmfKuWwowPger",
  "key21": "3RCtnrsgZc3NHZNps3aeLcn5sge9Va8xCKjQzZe6Lev5nftgno2xdufJHGYfK6btCgiCe2DzAxciwgfpSe2kcpzF",
  "key22": "2cjLxEUm3aAcU8EtsavWk1YekDxonePmeNf1XHZ4HmxH6sjrqU8gnbVBM6WURntrUDXwfnzJvqgh9ahNeeMa7jpy",
  "key23": "3TkffVmb6S8CzwzkwGqXZvUhi1DcpwUoS2e8v5GoJQDGSFUsnf9z2R71xCczVPj5ydUvKvPRKT51Hcw7utYfvt9m",
  "key24": "4RbpZHXzYVCLS3PZFctrsZ2HDiS7wT8YBYbfQvkvjjePXrgfXujkx8S5ZE7iT4a8cegoDy5mHvEuw4DizXWsSgTm",
  "key25": "3vzJ96NVuvnBokVCNaSVk11G9HJw72YFRhsPnBovMWAQn5HH6RXZhTs2wyHDifd9XjWAVkmwfq2L9ByEaDqXomtN",
  "key26": "2KyPEH7RZPUzViBgzoTfj3xiWqLN5WPZ6GZVwFJoZxBEaSz5GBtvo3NRzEhrJzcFmoxA8q7u5U2tcCusL4vjJsWw",
  "key27": "2KVBpd78HEJ7uTFRcSy11AJ7vaqsAhDcibJDtd3Pv61j3axgbi2UH1QJA84VuEdNoEPryCAJ4Pc5zjaQn89PbWcg"
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
