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
    "53yv16yTZkHpTkUHRY9PYwqGAcVjRXKPxipeBGUeR22Ez5fm4r8PBEqD7avxuFCLyPpJfoLWSDttY4ph5f8Kabip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PyvPTWwxQegmTcJKiAS2BNM4NMrzXgY6eC4dqvRoeGeJG3MfYUjrHZtkqk98rSPGW1Fo8fAPppBj1sUVFmtvxTn",
  "key1": "3LNco3596nXL9UcnJrKfXZSSH21r8Ehg2YqA5D8Q1AwQgBFUnwQEojyew2LcfpaSz7sisTwmZkFT331erRqLmnQS",
  "key2": "2Jmi9QU2seyYySFJwBZgYRhwyknVLiZENuTxWyCKkZ444DkjKbgm2qBkT8yRHneQk6CPZEbxrn9bWqjjhedagJ72",
  "key3": "oiu1UMPzRn1FQ9kZcK3pgddXLx7LWZbziytb5JeYr49VDm3X66rfKVpgpbyKTByfFbPy75P9Jf1jR2sRuEq3MS5",
  "key4": "4NovVxKnEEz5Kw8KZSG8aBTxHif3vSHMTs7dwa4CARFbcuu3BG5LAkwogGc86ckWpFP2dtRV24UG2rMiko46unaA",
  "key5": "2r3NrPhFxBCR4WzDHAXQYMPC8oFSbPmJxx1Bou9ueTyN75iFE33NqPhBMW2BNgmxBBKfXCzKEE68TYcVWj8VZB2e",
  "key6": "4QQQThjn8p6fqHw8fV2KZBrZuMEh4cgcCWUgKJi2m3T6uw7muML3a24Bs2DtM3wjTzKFPdF429GSFMRpvLd3rxRm",
  "key7": "4QVhggRmjYRFkmcMAhSDk6uDpLiX7G77aRtNbdPDmWeWJX8bYJrvJSjKbNgvXeHTsgi1DRKmexXCUtxAydHnhEr7",
  "key8": "2CxPb2m86svz3LApZsDiRgCXcgzyjANqEGNF2ynWfszs2fZgpMDh1shkuvkwdPeBDyTUAbDS2RZRVf72oV1JmkUj",
  "key9": "5rjCByoNxoMcu3XUZihvdRojTDauDpRqYJGYbWmFYz9QftCZZpN54P6FvrLJNAaMVe2wYySM4a193HkKPHbTJebj",
  "key10": "2xZExfpPXu2ExVrwJY58mpFze8bxm26aXxiDze2WfkSjNZmVYxf4t8s8m9zxxaM5EWp7RecwucrF8xPFXVUdHKSR",
  "key11": "oU5xqXGJvz76bVPCfTQxpLf1yS9VUkM1m1sNKyFVoF8hieTyut1AixH4Kb5otAHhnvwN5tgeNZTtjYonW5MsgPW",
  "key12": "4riKETyeDRjguhFE8E51Foy3J79MshhvFw4ATFAZwa7xh1MawQsYH7SEDWBAPPx8ofJdTqzYPcDaqKJuEp7XK8rY",
  "key13": "2VjEJec7Je5hJFzeZFMk8fCPkZTPaB1jykbPuijwFJsZdxbgNDi9AgvkTob5arsnkRyG94nM2k35DFksuGLTg7nb",
  "key14": "4KBxTM6kbepprBTUVEt5hWWPQRLt75Brto957mZNL55QTbzNrCQBobb1oQSWR1CoUHtUTj5cbZiMcG92LoNXDcmu",
  "key15": "3ZVQmJQ98ycTpdjKKomkqGUCWHKthcaSmPp4C2N4fazo4mcPLDpVunN6S43Kc7yUUvmwfgTQMn2eAsFevJFjDnwR",
  "key16": "353upA6nYnepTN4TwowuXDJNjvJwRc6GPDHcbXoTrzCPsRvRmzgWzqrTK3H3VSik3QWXBeLTccfsMGgaio1n5qeK",
  "key17": "2GoqmqT8cBHUMgLtVUiTx1T8d3e9Cj6A1mKYmwFJxE5LnEpEU6s9PtmMrHDMZjr27Zkk4bDAW24W7KahPadp9U2R",
  "key18": "3yY285p298WuYRrFP63ke343tHZMqrFigehSCfy5REUpqioVeB69PHcwihQs7CQiCs4vnRxdWWWvKqpiV7uoVYaY",
  "key19": "65fTY1Cyc2Eo7QLE3rWR8arhSF84mwng2x37BnxC3GJyvBme1zDpJ8M37q2B3XEisiFaUFqtvf1izYaeRuMwCqGp",
  "key20": "3oLLzpWUt2niXQCnYV3HiedQh3APZg23fwKb3yT4Cc1grs77SUQzLzt7HRrNF8ijuRfrdzsaV2HhN3ss1oDaZQA8",
  "key21": "cwe6ACEeHKGZU8wjMUzJEW5hoo3wBjxpNtLhsy9PqgC54dDk8KQq2XpizeU9a88jQVB78k2nqJ5FExCRonfZfdX",
  "key22": "4oKfj4TWHGF6UX3hNHk2NjMKt23KdtrmsxFUPhwHpvkQouPvZkpFyRp65qyhTFUxv3s7tbF4TexVw7mgLuytKjGu",
  "key23": "4sGhxqQgmq8jbtPod7VeSCbGNS9QA5d4Wx5EGJqydf7dZAqLcr4DSnMruUM79eYAUNKXZphMKtvefk74Kbmwmm24",
  "key24": "C8K2a6JiNfXiXpGpM6773z735syzU54S46UBYwuYA1pzGU69MVNysqz7dtgosZpy1QQkqBq2oPkYseNP5w3HjPQ",
  "key25": "2dSHpHok76n8mTSAemgfKnkwdAWqDqxDzVA732tPdTkorgvFLGnxJkP64a1WoTGmNuCFnF7pdn87wz5gdpP6VhJZ",
  "key26": "2B9aMEvUw1NnvijYFXfRcky2AQNXvUfVvi24Gvi8TtynC8MyJ8X7evmUviT71EASWTkHtMHLgbN7o1K8Waic2H5G",
  "key27": "2jNazCYDa3uKz5wsznP45SdQBMu6Y3vVibWrmRJmqkL7q3ucaQhXzsyAoRHi9LgG6FLVmRqaLBptLzwVDHeFLjmE",
  "key28": "3feivmMeJEW3prTyW5GujbrpW9aaFeUdN2YDPv244Q8QJUoz2NcCh1oqKX8AwSpnsdpyYNaZ3SC9r4ptr1TjDNPA",
  "key29": "f6bTygQVB6R5PY6xMLneYbnzuEhqhBaKPEoett3bpSE8zLTgUWaXa9iz23pLsPp5xuhDwbaHSkvPjV1Ssq7KkFW",
  "key30": "3xe8YrDw7s4eu6WbNziJCaBrAJdN1CYjSntXwAWDdkKSFFCHn7AHjQbi3haxmnyw4G67zmAtxWeXSD7yC1UvVop1",
  "key31": "4WpgWj15XaXFQ2oGJeMTms5XD6Fo2RK4F9t73KQcpNQ8Fi2UBmSRJJz3C5v9Cs2e3sto5yjvoisyshA23CNke4wY",
  "key32": "3GtqXz4htztDWSGbRHKQw2cmiZ5eThhpfr9PceBa4ckoUt2CquvD558mK21AEQSWHoYnbjmnu9JvXnWnH4wEmbTb",
  "key33": "5ySehm4iouUMNEwhwYgTVaqLtunZKTNpgt7GVrMQxbPxD2VrGQW44YXv8Ys14numCJsZimH6cLw8eF4oRo3sVM7z",
  "key34": "3dsDBDccGd6jUBWey8A1UVgzet4pGd1Zi4kqzXT4yij29B3RfgrPX7ynyBS3DkF832XUFfjFxYm9eExD3XtBesq5",
  "key35": "2UP8qUPyvv76vLGK3gdVCzCr4RwZ8qRouBJdbZyHAsn52jFMwpFJ3TbUAFum3sUrm5QNidQripTa8QT9M5wYQyHx",
  "key36": "2b5cJWuw4FAegrzTdj4yd52Az33z2r9BedEY7hDPzHa4VemHr4VbLCPvH45TRgS67pvX7Vvm6qUUbb7kBcz37GYd"
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
