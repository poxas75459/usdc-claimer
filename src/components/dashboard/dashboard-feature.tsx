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
    "48zxQdknHdQoDbEivnjnahcp12yNAcKGuNrX346bKcVwtYKeBZw8X3xXYiVSTkQ8BSPpoBo49NxYTYVCzzdwsqGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yyoPqCMwzzGaS6kurWXHCE6PPerXEB99chWo8LkC5KHj1PPSHatt3L67c95JeHnp9oJBa1Wt3yRuAjFtVYpL9y",
  "key1": "38SXg5RNyx9UHSd7xXRVjnFLz5kAcNAoCemtywfyCLkecv8Y7ZFYCYNdzaLbxNkRT57ztwfBtd8B94uiEfSeKgq5",
  "key2": "L5GdKWTv5zg6Nf6JwfRxJiWAN4uaQBbyJU2heCtM6m7uWtmQ3YJ4T4DVp1tVjaFKNaF2CmtGtZi4nRqwx5fMcuU",
  "key3": "5SPAcExBMkC41Ap31cRrCKPPybbf8zEPBL1nrwwYEih3Ar9TphWbdocoFB44CPeb76S1JXT5duFXq6WJLPJ13w9s",
  "key4": "4EjsrCpT7HXCArgm5mB2wZPXo9bZPhhMo9EYa4epRQnGpGLTBezvoWb2szZb8xNkF9vHbBDpLpnNnfX8nuW2Sbv7",
  "key5": "45ckkPoxSgc5ix99mGUQbU1SL1gEaRqkhAi4FPVapEhT7uVj3HaZTNqo6ENGH721oiVYCG8s4KMJ4dUmDjxE4SQL",
  "key6": "2QMy7C7gidNUax8VJSwvBLQQDUPJyz1UGobTTR9VhNJ5bNPrRwAHPvutGz5SGcgDrhcngiv96qbD7RXDmc3nhaFP",
  "key7": "3A5gstHvFYUU2BA13wTj3NxBm1UE5ACwt21C2jAoc7dYpLSvQ11SEPHyMke8Ewb9QBQFMQjxxsu7wedgBu6yt2kU",
  "key8": "2RUZFCsz2JRGaisa22spAAGCA1i9nx1EUvCjE6Z8K7dzqoCyeRQA1tjnHXowWXA79rU3tJi8gdwVTJq84FraGqJq",
  "key9": "5s18Ky8btMhD6EqFPB3gUXfhgeTTD7XYMoc1Ai6PQ78zDjw8Z8R33JL9vy9VYG6MY8FeN6c5turQdMaxkit4bLXE",
  "key10": "5hmVW9TzEMVtbWpuxVczB9KbVpcqX6nNyuxR6knoCmQ8N36xSdXkZ27pSeodLVSA1NxXwQ1AAk3auw1BgCN2qx35",
  "key11": "4iuHgpEpudHjhM3pS9zbSDVjrFQ6wJGq95K6TJapUhpXCPPSQf97v1C2hLRMj7Xjt3s6oyT6b6pNg2UiRxjoDHnJ",
  "key12": "33YejCvyw54U7uyQgmrDREwgta5TiBEP8rtZjYX8DmGgzjiQ81CDDmefeppJs4VQGMNpWB1z7dhr4VS5UR5A1wt3",
  "key13": "2y3FPR6hh9Dy141QzYrxJtv19u72SP5cLSLZ4pHmYN9sdQPtwjKKKNpZSzHrB2sWkcKcVDnrA6j4dyym7GGUvj1f",
  "key14": "4dTRntxhPNCnxwfRSn9PyTez7k97NcetJEKkUwqPdrLMXXUYHi32cpzoXe7bSht9ru3V813kXvbUFn7RwnPH5Nz7",
  "key15": "57aqkRS8CkDjQwkrKTECumeHnbFZvERCSHTuEo6pDhJ9Yip5MPvCA4QVx2XEApFAENhDJ3WfDhm936qpJKs3ooVf",
  "key16": "5bWvvHLrSQYKNd3w2yzdspoczkoqsfxfu6ji5BQ2Ugt7X9UDYb5KwCEJaVmgtXGz2oe5hnPP7eyBzxHZyunUWV8D",
  "key17": "4hbkv7d7QNGXP3kwRa5tEnYz72tFKPBztfFoHGZsedXCw2r8R35VVSfdTEWBTSH5UyoEEuB4qUQ3jMnmPRNUYzRn",
  "key18": "4P45eMESsu7CD3dsyt5tGV6xAdFMgfWjoPeLFGnijKTALeBcvYDFhqRPjiTCcpTonsTqdYzPKtQytaoiU53Du4M8",
  "key19": "3Pu5tz2zXs8sZc6gLSgkMtRTLnTc5yN6FSSe1qzNrYPCeKgegQNnZsy8AZgmpR5FyNwB2EreqDhGfTehojXMUTmb",
  "key20": "EYKm67mfyi47LgzAG9r4JwA2AAUQogZgmQG1RxikgRXCsD6ZHkSazPJa8T7GCs7pax1sUgzpHg841162uSJU1Hm",
  "key21": "3P7HVaSJXPjdy8frSRaLe6m52nQEDHwfRFMjgzn25jAywmmKEnNEkuaUgXE8ugpXUoLU8KvEe1s8J2xkdKvL7mrg",
  "key22": "64KSqGtCnPiAnMVckk3S9TceFUNB8tbpGjxrVYbJjiH7dSbgHj3MAJkwxa8pQNgL5gmwiLmXT67j3Kdt8WY2jJRY",
  "key23": "3Po1dBonUaCYFzCgpq5QdTCfyN7phfmZnZEUE8F795Tbe6Zg7Lvdmifjkh6GXo5Cuec53E9RDDSTCACcqUjPR6Kn",
  "key24": "3zVKBp933Lxe5XfJ3Q8ZSrsr6eNNcjJUdaWLyD2XAHkJQuyis8Boz5MxZcDpeRdVDkLPqozb9gkY4LC9QdC9ckBT",
  "key25": "4t9mgSrPw39nNgEycKAhwGKQGDH3zVuaxSKgTRuZQofMUHfEDDPRW3CAyxJY5JZhSLGVJYVZ6TpSSHCB9EuDmHY5",
  "key26": "qnVowUpZDJKkcy64aCsSxsK3haginnshDNEBsBsBq8ThGVoHRC4sC4LgsaSvoYdNMCJyXHMvsJaxtcNr3T8q8x4",
  "key27": "AByRz8AK6jzTaip5BPnb4ZrTCUQVxs36ADBPJEdyokwyB3Lj8tnagu7E7p6yetu5J3yyz28MvMvfpprbtL2J2jF",
  "key28": "3j9VW1YZ5LKW9cHARWp2LPD2gUHMWEbxDfBNkCbbjtUpTm7Rbr5rjkZNn7yXSppD8wkLiR16qR3KJQCJMzx8emEv",
  "key29": "HdWFqSyv3uCmTGh53MmrjHPKgiiv9QLXyKAf4Bc7vnqFrUhgpdiuZRFEzDGYKTSLEg4n6dHALrb1qLkhccTKDVY",
  "key30": "aCDDCALwuE2hvTvuZdw74qkwGPFs8PX2vETtnVG7osN8kecPa6HKXumYej4qxtBmrCq7dRVmgMdFCtVScoKBWTU",
  "key31": "5ELXyXJrzTk88W66BuwhrQ6z44AKQN2mf94XqsNKgGXdZUgrsBNch8jEWdzP9CmJ5ZnvgW4XCkBLw1VbdViRSab1",
  "key32": "VnfPzg5sU2heCY3GPssiFALcbBZMxow8XfacS5HYF1ZC3zucmSVQkHpAkp8LWPfuM1Mr1SRPUHhc5kEfgSmWeSu",
  "key33": "3tfF2dTqBGzMoT3ULowNFmvMfdWpQt8LdqwNdddfYizt46yQR18mkTkgWamshYimETNqEKNoCFLQcoNHR7Qs3Fss",
  "key34": "2zggPXphbRtvQXB1VuCpRSJsPgR1hFvHnnXdjefVZeZNz9coGCzoW2ngKtXbzg6XerdsLNiDZfzpC2ejuW4Jpxbu",
  "key35": "46EMtzadWmaZ1sKwmDD2WoAZiVsu23Dt5bZ8DvPDtjKm3qqY5tp5EHfQtZsk5X2PAQmtdWWCASQmGQDk4dN76uXM",
  "key36": "22V7XkyfQ8bSUYQbPzEeme8wzLvr6RKidjA8ofmicoMjAQJofUdetgFMFnW5D18BhwCySbu6BJNevGhf8ktKHFXW",
  "key37": "5SE9CdX3D4fdN2Ntdy96hv6wKHUuTtuvnakYMwTxBtB6MY64YmbHYRzywk7G4SpKfoL2GtskKEDZjz1g7AjHSvpQ"
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
