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
    "NRxHFrC3BpfTHXmuSeZGd9Vg469KPuotEcUSQmZmofrmvDYKiQBkdyE6DFHuK9UAApNY9krPgvjRiXA2sjxa6EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNQ6e2HQVhRvBP3EdSb9RSRCMDPKAfv241aVkVAXz11QUDEia2kd7Yo9EySKsxSNv1Br4TsDzy5Ch7Pc7ARPwai",
  "key1": "3tTnGzFguuazQbLH1o8CdEHUhjFPTMGm1LUiwg7CMDWoSV5p4joVdoom11sHV944UnZ4tVWfTKbnhndoSn8Ey8ra",
  "key2": "4f6fsF9DeWQo1tVwBWTfyU1kL4ZhRqDsA5f57hVN4vCv8XEGhLSz9qoFJdKo4ZX7GDMc4M777NQGuPuS1g2iBL3v",
  "key3": "3PP8thKkbjTNN9J2LXG3WRZsev397STpQRbSKzFFWCXN9B89ts9eSF6tcWfm9UQXHZJSCuSL7fNnUnptNPkcvPzv",
  "key4": "2GUJAovGhEm78c6CTGbbZN39dDeaArTCw2A2p5AhPdpj9dtuR9yPaY8Uee81DJRvLAfEbytb7M7wb6TbJaW5uka",
  "key5": "388pnrTudg448CRwTit9Ut1Y3bkYzRwJCLeE5Wuq2K5JQ45671CtTNrDtueZy9Q5oGym3G4tunDEWmpmhmF3zYHF",
  "key6": "5SR9Vot4LEEUKtsCBMsMsig6a2JuXinyd2b4ALnCMieBDbG67AeQ2wPReJoHmqNZ2rY4v9h2PwkVkMMpFxvrTrtE",
  "key7": "3qFiSWZWFY71JLX8K5u3WfcwUQMieGqdctuoL6j2L94d135rrz9v95o9wnEExhgKnP2fNnWRZsVKtBi6eMb6ppXi",
  "key8": "38noEbytpZ8pVt3yNam2Q49qVwp3JKTDn3iy5HWSxvXu8zdNmda6DwvneUNBcjqqfuG9UdZxKLrVsBqX6JTRzQ8A",
  "key9": "5SG2Bs2owBcKaDNttcKHUD4g4didXZLos9SmWptHRQnKp3zXt4dYNmW9sFKRMoPfjzyUGmmXBFersQG2wiD5KFB5",
  "key10": "5Meb8vpCJNKRefWrnKgCHGE7k7LtHCWRmadRZ9obXyoWjojgn1DHTnkSwa6v6VCHiqwfkL1rp5j5omFVhc4Gp8Ba",
  "key11": "3om67mVw5mcLU1UcRsgcjVefr7dju9314bXRj8bRKVjsi86BzTYymgQwifD5UtCM5gjdiDLc84zruktKAerC3FEA",
  "key12": "3wJXkapa6NS1WCuetMDkDeddU99wQ68rgBXcr7BWbYrWBfn8rvNDon5BqzniCSaJxWpPMv7DL5GEwtDBN6rUW9Bo",
  "key13": "2uKdCFi8S6vq4G4DuKUAW1kTjxw1knNLyuKBkUNxKFaomZDsqhcHyrmgmxhVHp9DtNyQ7Abs9KRWLZ6K4B5qeSN9",
  "key14": "4Fc8j9g36PKTqJyeN1f8CKSnMKVhtE8aR12XbWqWKpzUipBnjxik2G5Ph35oSrbTGjT4PoYaLXJTajVaMYKBaVfz",
  "key15": "67ngjHVMxQcSLwKz3N1oYb7dMdqgdSBcMeXYgYL3m3EzgbbAVuJRipvaR2dzj5nLidxpYVtg8MfunJjDkBVhgi78",
  "key16": "2PAiZkkkQepvorigUpviLDrNWyTvzUXu2tQA3yywBHBZxJ4Fv5rhkcAxwCJuzmX1DZRXcrert13EKVfgyjpXZWqu",
  "key17": "2GXFmQ6k8FxW7p4UYDQEJK3SEvuLmwd8PZ2AtAVRBfxcCEFfQQP1mP7oXNDjVArTt28KXqp8K55mqvSgXHieX89k",
  "key18": "jLx4a7w9Xt543ZFMtJNXKYSMD9BVNmN1UonRfMK4TkAUoHAYEzMMWweTAKWtTvPWKEq2MWbvfpRfBsHX2yDohnX",
  "key19": "2JSCDAcV2cqyESa4oC7hm6qBtjYNCA9uacXas5HNyvpoGdZGChuHnzzHvD4TvssR5tMVX5qmEPk8GDgwAuX92A4A",
  "key20": "Tc4xLH9yiAkjXaLAEnWVSpL4rsYRffAgNvyQY9PYUk4C3xRW1a8uuznYATsFSX2mLyGYZv2qbzaDh2zpHxp3YeW",
  "key21": "5bBCUxD81GDyr3rLPjZicaTJjX6E5WryAaoeLxPFihkCaxXDVF22ofb2wvMYVwSz9WaGYV4TJfL4Maw7zXDevHJw",
  "key22": "PKFvAx3rfGUmpoqFiERKDBw2LeynuxZiS7PB2CE1YntBCQ2epVsWQbzNzoggeCsv2AvawVpMv1gbpVkED9sQhUh",
  "key23": "383rXwQhD2uKBJgHMw5rT4Gv2PHEMkNPa8J3YdAvHjyzpncEXpMPYXwyTdPPPs9unYM3zEb6gvd1xeHHTrdpQcnm",
  "key24": "hvZTZxpmh6rUysFCDka12gAbiHAwEdy6nk6qnFn7rdAKrqB3z9DK5VWUPweoVecrzn91dxQ53Cb2SRkEiz9Ktep",
  "key25": "2kiAnt7uKBfEXLFZ6MkLffppvKJbJJQDM63V4Jh5sJ4wPxcmP7PaVy7sdvJvjLQR2pF7VBbbCxafiDFbbVArF7gX",
  "key26": "mZpPpbWVfatr6NhjodX7x4iPicdKmpxuSN5krBpGDUtDeKqGVJM7uskryB5nJB7UKr7TS6Q6HfcxD4bXJFU1Y8H",
  "key27": "3i9pRv1bGegWTj52SHS3VaFCFwMCk9JFAEDb7hX8whjuKEai3nJ8rcVQwuvSA16gxrppuNdXVqEqzcyhCk5tsi5C",
  "key28": "2JB7U31AwPfDAH2Jg5ZJ79MY8TpUrok35gRmi2w6dvQe98cKV92qhL8Pc8fiA3EZZjrm1H2ivKGN1w7HENJ5SEtC",
  "key29": "64ncMp8tHy5jNg14itZgN3txGsNQHJWzJXUkjnsnSVSR1RQnJD16gjqBpWtCUsEfe317zzAVU5e76woiDjgLxB3P",
  "key30": "uFKc4G7Q1dbE8jviGNYLrJ9g5GxnMbNLnbnU8rB1SxboMpnCqJZpEWhKrpCMKnjUjFPKxwHFmTxiRvqJrUPQXGC",
  "key31": "3nNViFqmSa9i72iNi71gsX2f314orB7LXwcLz4WBq2pr9RVWBvQ4ADxTgJchXcfqbFgKZZZ1iSqMcak4U4bzs77h",
  "key32": "L1iJRvREjS31o1ERDgdjTfNKcfHQgy1bwemhm1syUwZQWdssBoMEBeaZSZVZKU7nqYiG6pgd5sQd86JXBhbn184",
  "key33": "zXohWHCXuXw7aXMPj2u7VYdhqBUyBo9mKeRnfm9JxrRtveRS2JJtFNEx8fTWe2jYmnGNgksK4foUEmvaBbzwu2G",
  "key34": "64dUSiCiLptZzCieyvNkPF44t2oCy9JPBMNtN2s1HKe8UanYgUAVbw8yF4G7USAS7B8fhaZH5y1iHdhZTtbeaP66",
  "key35": "42H5DNiCcTeFUR7qxfiNPgQSCQyrxSmzU1qbZYEK4EfZqwuQKBfarGyDLLX2nieQrnKPi374UhV9exx3fobiZtvV",
  "key36": "4y8eHuLd79PaUZgn5wfAi3LKn7tbNKbNBc99QVsTXzRvXWfhtWxq9FdeYWDmr8tx55xmpa2BvL7VA4FC211FYvWj"
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
