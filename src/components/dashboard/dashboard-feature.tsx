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
    "EToaeE1NDURogNxiZAcHxQUtDtHEEqGYFK8qS969qkqDEs2UpZWhetXTxYhN4C33JymEFHZfMZAQaDfQ1yrZTnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34f3oNWETGwVQvv7eNisPfMTSeKGfu1ej6eYijXcoKiSbnf6zhFLzPtMyANRmvuG6cPgiAa6XPuSev3H6U6wcgYC",
  "key1": "67ibvLNXSyEpPgAvw8NpfH99mbYRkcyV4JuAMTfS1fyi868xemNvMMQuMM4psexNKViAhFEaw7xUJChUPKBJPKC6",
  "key2": "5QdGVRzuptExpT8X4RV2R422yrVHjPjmgNYVxhtugr7Wf8GZB2haGv8s8dGRzroseAXxR6RZyBPNVKosq44kLjh1",
  "key3": "58jKfUqQ99ktqbQ59UevG6E6q3PV1hgjo8cN5aTyKmVpcAUsnC9JVXQEUwJtC1RAgmWfPmdr7fvjhEu8f4Bdpuv",
  "key4": "3RYxxS9isQFxkNp9zfwzZ5C2R9q3zbVECYdUUdXM2xNUUkFPrmtayKv53EMutGHHH3EgQwsYwoSeMq8W5277bDnw",
  "key5": "3fCtcKPzee8ZxSzzjMPXfroWBD4aqBHmLKjC7G5LC4PN13969VXEaPR9bZLi1aV4WwDLT58b46o1DFmu46kkxoF1",
  "key6": "54A9iUwf3xihfhzWPh8FyEqJxdC4nuQjTXcJHVTwL1J8S6hcKUnyDnhK6zbbAEYpTnpzBbQDnHVgck8ZhwsCRiMQ",
  "key7": "4JD2bPZna2G8Hn9pq63sdcULZNVbK9mKBcRHJf62xASCUX9czezoYs2UB2AeTCr3oH1naga4C5Wp6heXmHT2VxgY",
  "key8": "2iJ7yS6dWK9rfyaaYxnBGD2m3ixv7SVwgKnEviZHJc66Pvhh2uxn3kW5iGVWZQ6buKu8XM7o985aNs6cDkeMzxyA",
  "key9": "5eJa4kxCvXNoW6FZVswvYDb55Qw9Ft1p9wj9XSd684BGxWhjczq733Hk6xWmgg53j1YVR4CVCg56bqMELxe3vWQ8",
  "key10": "3QZZACKRUMmAdZsZpX4qdmXocrhh2XhYD9nAxGNYHrvbVjRRZ86tKsmSVbUsj1VzU6QjxWcfb4MEPNnDduwRApKh",
  "key11": "4teXCLGSkma62RpUy3w3obfqBUCqBXWXzgRKWiod13UofGQK57JDmKEi8fDmeKGDZSxYBMxQC7MyiHz5h7RHod3v",
  "key12": "5ViJFXfs4UPe8mcKqbNrAUQqTpiixUULsjUsR3vTZTptXduDXkGeotRppTJNJA7CSoAJowBfLvshTEnY8vurFTxn",
  "key13": "3sdsAMj86m64KsMJkSnBM9XmDFHhdaYbCr4Tns2gVur3s3aUU4zLGSdx7UtSEM8GkTme1hBR1iy2KpdemaxZknVX",
  "key14": "4hUob6hQrKTEwgxa9LgFnNs6UyMgxTSQBMJtUHvtZvmcX5ycYqPYGh26veZefRZ4CkUbdwbbrMASpJyDtnWwnfEY",
  "key15": "37hLSd4VKNejRS4TzY4zdf6NHKnG6SPHCrzm1ewYK6aGQSTnsH6XAWz1deYNvjCERpMZuafE4HGyk2CPUX5Mn9Gt",
  "key16": "4r8EJqeyouFyTw7dYUK8zHJn34DCahFB1zVQ5rW9zWShQvyKh1TWNGDB5P1hqZExvLkUCdTzRVyznQb6ecVQsy4w",
  "key17": "53CRPow8UJACEYy7fkdRgjBuDePUToA4zF8p5X3MsuD8yf5Ghy29nsrHsug8ibbAACwcqkrucCqsEcAazTP4Tfkg",
  "key18": "xCcobs1nVkcHHtunHtVLggPfvAFMoh4FdT48rPWKYBemTB8QVp4mgHKDk9NpEC98zJj97pw57gN3FQygMhr9sYs",
  "key19": "5uFPMwcpj1K5MRaaETEFPyC2NmVW7fm1A9rPXYyMowQ8FGh8bKFRkEAB5en7KCVLWEzUn4tbYkj2nBsEdxqgJuMr",
  "key20": "HMboULRRdz9D7JQxLnfV5eP7EmPwHTYaJftaPowdY454PcZVD6GW2pmqDx2tBcELQT5zuEGmSSanBMh59xstbem",
  "key21": "3G4n1Lxpia5BpkcmkgVdGpfdPAeBD48GbMyQoAGBFMDmtPdapNvh9HPRPKCEYyy9bvVtEgdTMGcfuWEbSgAJFbnQ",
  "key22": "tntwLWP4epPjMMqbz61CT4CDpBoM7xD6wiMevKL5iJiC6ZDVA2k5Zju4sq2YVtTtUz7VjHQXdfMUKaHixUshQbR",
  "key23": "63tj5F6K47vf6bLPUP6GJzzRZNEk39nH7BBNXd8gRXHr459qs61WCoDZtCZbgbpemCEb51zYZ3Yz7vRkb5RsDMz3",
  "key24": "5U3XV4PZj1fRoEoozH9M8Yrfb2WZ4E38kFwfd185JXWQaTZVYxP8ef26Xx42HkSaqnL8KuTXkoeT5pJavAirzaja",
  "key25": "584Bj8FSencn2uQo56bJnG1tXMgn1XK3yHPuKLW3BGkpDwp9FPmWgDRuSk1xXWxCc3LwBABWhFo3kWgQL2SfxypU",
  "key26": "svnwMcwMpg2haD56CuYyrxtumJ5iDkowB3PxEPm1Rd3hrjnhnbsYhhXFUYXtLjmrsgwxRZ3DfddrbbujnYHgaxF",
  "key27": "3TNgKV3bpK8Ye2R3TSTupnxEmNZDRCY7X22gAb9bCE1U4eohQBDpayGA6sK3R8mNh95wpWuPDDpfAD3thABSiucp",
  "key28": "4uHSUTdLDfzLfrpPdRZPayQevbcdHYBdUFLxrdzzecLjXDQuv9bWnjRprL4zMWvKrGZZ12TD5xEGBXxuushP2fH5",
  "key29": "5X4T7vhJVWLPdV448TpKXRQZGcJWNmmVmWpPRFeFN9j6o6JfkJz8cio1M15PAxvAkN8VwWWjz6fjnfNsZeT8UPar",
  "key30": "33Yq2vHzpzY1nkgBPQsAUMyfX1PmD7VfeZBxP3v2DT59B1WVvDRoB8s2DQUbGmvd1gVyDi4Uf6CE5EPDmizESe7R",
  "key31": "4yuG3tAwxRzcVDTGfehHBLucogewhq6KEfas4iCxhjfo3QVPcAspG4zQ9P3WV3X9SyZmxMC8jcMd2SQJQNVJizvq",
  "key32": "tc2U4wTXjPophVTU2QV21KZjYhemj9fEn24sEnyKisctFPrW6jwF73WstmRMA5Yw4mxTyrrQ2xixkXKxAb91RwC"
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
