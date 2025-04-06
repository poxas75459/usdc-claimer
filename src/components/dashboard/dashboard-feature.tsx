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
    "5yJoWZmFgRaGp9NsNfbSPTA22QH894trPAAqFpTwcczZNu1ZYVSohPK2fParxHC3Bh2v9HECmnQjcQm4GeEHZtXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326EiQxMVo8X4ZzbqAxZ2ho6HqQoC1f2ASTc87z8Km1AxPqMRLoRZG7GMrUU9avocm5xRk5Nsay8LyyHV4YXEFF",
  "key1": "3deviNagmgS1tyCm7XnudRESQmNFXBTtY9uWLCN1LS2QbXcQr9qS59Rm3AdaZ4KqbcvrKP3AQxWUEWTWtM7gVUB6",
  "key2": "4BgBDsouikb3SYejr1DA8bV5bM1ehhpfUbN8byaF1zm7NSJu4rPfwx2xUEqKiS7cYEEvvXbNGjPCyRovnTZNpMXH",
  "key3": "5NhhtNrAaf4xRt8GnqCA6qp4fVuT9Aju5Ev7eq66JapkyySj3ZR1LZGESZw1SSddmcb1tsvm2UvpTJ3x49nzs4UM",
  "key4": "4eQqbhu1j7nydru1ETY9afEqnCutpvhsF3KJJHX6rE8WcHHK8kg41JH11TWZduaL79cBWdF3FCrmo12Z1aJZ5eXG",
  "key5": "2AZQJWmEVouuPpNTJETisUehf1v2cE4jsfcJ3oALeZtRuFPNadzUW5uvUR6p99mUonuQuYv1s7cPLHWjYpaaxmYz",
  "key6": "4tG8LMQyFG1LCW6pUx2phA1akEDnYu2q5PfFdVPqkmMBnWC2LuS1LjxKaNvzMQPgif1TaipKbdY2a95tBySDdvRq",
  "key7": "5gAsQHW5WcQxN19qNiTVKt1AzWQeMNCTP7ivPpVCSM45kEoY5ZXjZy6KPFdi7gGc4KyyjeStKsvwcZWe6H5AL8Ca",
  "key8": "3RVycwNtDCKsrQteaS9iLX19mTxvhLGWkA7kvkv3R2SWd9MbKK48NVr54WDnoG4PkhjpzULS32VPdMj37n9moKYi",
  "key9": "axcvybkafhV4yNL2utERUJRfojU1rtYAvcAS4D4XtFQ3wdgcF3DkV3VxU7vA9SkrytAuPgRfbX4xPYeSV1oPhAi",
  "key10": "5xEJpYgRiVXN4gwSYZgzusErKHzZbV8FfPwBmCoZxML89YHxATHFqBiXD6AFZeGss3WUvDoyhTciQr6nt2aQWMET",
  "key11": "LkDeEoDTaZBJzZYWiiQHodF5AKQFc1retooycri5xmaY71A7UYrgMykZdZC15Rw73ArZmpnVLaMpTgxAx5n26jf",
  "key12": "4A89vZdbu2bcZ6LpAEPEp439sB1rxHj8GcmrS5efEx819vEXCGTn8NiD1Jp6yijNZmGhBmHi9CTRWn4un3Kny5S",
  "key13": "3eZLYwHHeJ1URFmJ8shYCaWQzZZ7pQ8TnTVDy47QESEAhXkggqGiXXCRRU7Sqw4qAvcMugD1eRhrPfYgX3LxWgBv",
  "key14": "241q6ZLRhzaC4Sw17mMZ2aHWQJfUkjwysfKYUCSTULgh9KDcsfYfJMYov8dbXhRaVNdZE7tVbT6TVgbXCMz4Ncut",
  "key15": "5L4SfvMJrvpW9sYyB854H1ymawhV8miZ9gzpHAAGs7faFr6anVEhtApNM8acknR2Hj8hZUZcY67JYjwxsFRNYp3o",
  "key16": "2vdhGbdqkwpiTa7gw222Sx7zMS7aBDQiXFEkGpyk2C93gCVnhud1snAHWAV3qqKGnhWymD8qwRcjwrYUtGrdHQyf",
  "key17": "2p8PxzdLSg38KGPsgJ3tYHzuip9yQgbmJabL8wuPft1XKL59ehqumuwGUnPPsrzJzj8cogzBtydEYBJC1Njj5Anx",
  "key18": "4LXf5SUD2CjSX41xXRUWYG8GEBs3xTuXybB4CHPZEth95bAigBD7EhFATSo2C7ims35WgoSqwDubSR9eNLjbpg7q",
  "key19": "5CsqhQRL4tXi8en5EMx8Qh48pxaMsXHGdFX4sRc7MQoXE7bsqegWQ3FXoDRjA21F6fNajdQCoPViHVHED9RyJ2rq",
  "key20": "5PeggP5CBeNJ5VDNWztcLHAEVDGwKiTz24CQ9TA9wxxwTicFUEiXcWJwn2dSB7r4iX1eCrQSLznwXSrohNV4EvHp",
  "key21": "4dkqXaFE4ecy5zY2GfKfMzER18R3nLzAv8H3J4TWT4xSZmeRhAhYKouvTc72icdQiK5JtvyBc75Xnh74p8x9AZou",
  "key22": "PTHaB7cW53xk481pW4vbJq5EBebt8yvjHCi5kaHPwPECnxdRqR2rpJPJXrFKpLyKotqXCcoKLoM4UecUTYdatrz",
  "key23": "3o9JeZF8U6tdLhtgKn5SgdBAXaE9kouPDELMbErjoYW7zWZrj3EQEki1NaW3JTuRJ39aTX55NvPwk2NRg18QdSrh",
  "key24": "2swhLqjBdgjfPBQJwtHb3W54V9vZyojB7nMcKGgm2huMsEZKfvKkBF1tnhP7Uyf16eAuxSfUnf4W73BVga7ehQCX",
  "key25": "7JF837zLygffYNKM2XxUbG8XyWcGtYgdLSCNPsLAAnxdtAKfm1z2TCRgx4REEurUNK9m5c6g51SFQKbSbKCzezS",
  "key26": "5WS76NXK1FUxdEk2ydZP64Zow5BXotUB2keea4MAPPjRBGAGzQVcTLQLkpDhwsKNpvCsbHj2DZV5wNEnBuV8DCom",
  "key27": "5L37YrZYnMzXQSHWTRGMNzMUSPYWdPpUrBdmyHnHssmHwMVVYVpDjw38PWKRmDvXh7PqGqyXPZtYA2qD799QPkR",
  "key28": "4mYRvx5bqWFh7bEVje1BA6dQFKHCcNyeRxqE4uFCJqB8EUoFjLW8WvmDgqEPqHNrZLnUSCP6vyDR77haitUK4Pfr",
  "key29": "5vUYmpp12jeDQLASU3M2Vb9zJVz7w8RUCTLwmbGJUybUBTTEFD4Qka23r27h9cP4yAofRaphw4VbUx7F9fg48Mm7",
  "key30": "2pp7ymJ8ESTkWL5xWBESaCPwnHvRvyCbEv4zieXHxXuka1JKh3Xn32uh8cJXQUhwCJfjLgHPZPsL2YM3s4QuyaPS",
  "key31": "3m1Ln2K9fNJZaKUJiarPGEvHgLZuzNBUdjJbzqym2Jeee8Jd9YTWzpp8pKtdp8zYy2wgvZtjGdWmNy1yakmxYwxU",
  "key32": "3A3nfy3mbbYbVmsLVC2iCNYD2Z9tvWuuoNF64qC4oDCHCiJmcqVcoEB6MTxmkLBZsmeXPZ246kpNNPGG8dgZsojt",
  "key33": "3rbw7LYZf1jL25S65s8SyEHsorYuRmhoUrbR4uT3RpuDoVYNzeWrpnbc2ouiJE1yNaoK3gM4ZTDRL4rHBFTxTBGf",
  "key34": "2pQA1xiXw5jru83NZ9DN4F43Y8QgHa4AExYdaNYkTozKPqFYj1kjyjN27Q4Vp9Pn2t72EBnKebjk3XiDWQ844JXy",
  "key35": "4J5bsLG66D9p8jfELqt84P6XiJRtWiwiUiJrQCHwhPVqfdSo3GBRCkgYczNSwLvPVPq2ipqgjrqtSQ7L7qBKyQ77",
  "key36": "35Z1UT8SCv1QZeMSY6mxj3DMdqSUaq5Gc4aE9pviRMcycvNmx3UczsbPxSE7MMjsJCw5rJuyrrXNXotadnK8Kxgq",
  "key37": "vpV1CY6wFLKeR19LwFPhDm6KLbvaAs465PV119cswCGthrv5mghcURcjY1eiSyJd7hEtD2ysb35dLLs6xHcYbQp",
  "key38": "4hh4JVLSXd3uudbxRbPaAABBrTPNNGoNqrSucLK297KafV3A2iDGQvm9dBY7f7s6uXp4bctgW85Cp4qzYprSHM8J",
  "key39": "3KjUE8Pnd2LcX1vDngdwEnswsZJGzMhtn3R7pi9mp7nEoqCx5AQzA2DXAN59s61K3yP1EC4meAzeucu1uZ1uHCjB",
  "key40": "cPeVdSW8RbvBpZaTKEJ4s2rCnFUSLXUnc6tMVbbTVKi6xGNoQqvQDux196unYvU3uoATYwEKfwYtQxpfZYDjKZ7",
  "key41": "244VJVQDQPcXyPnuLQU2u4ohZ8j3JzGQwA4pF1wxbhmY3VBAe6T4BfKXS9eaNGVumZzoNrEH1665xBuQ9swhgNg8",
  "key42": "4g4CzzH3xSieY5ntqSswpXVtj3sA1EAXsdxMkJusqBWDCJEXb2hi9ZKjnG5dyUvohjaQa6ySbvBUqWgwAUrZGMj7"
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
