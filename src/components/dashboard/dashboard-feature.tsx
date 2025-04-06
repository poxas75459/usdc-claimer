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
    "5G4t4VzYU3qGwHGgbSRM56B2ySm84R7xnCXf1122UKCMcyJMEYLbtNE1vZHxEquTi5JaXQgvGZN29vY7mwfXz5AJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63fikoKVK5AMWaZqYpKy4734WaQdnJbPNCXfXThVGmRc4htPG51bQFGAjW1xtEzBtU8CsoeYjtTT9npy71PvKH9n",
  "key1": "xUmmdS4yjtWiQWN9VAHE28VjNd1ABsw9LNRpNLkynnsSUX8YK3W73B3uNTZZWuq6EJjeRXTFwDgd7uiaWhm4sb7",
  "key2": "43YDTFmfF6oLZjT3YDwJ3WMMsD8yvMsaLoBuwhN4bGqwSLRqxRYaTZyavSeFvCiD2YTuqpkQMfG822acnzKmttr8",
  "key3": "4H225snBa86KWmaJgBQGSYv7E4T63YTGa7rkYvReLfDDafLHuQEhQuwa61MH7Cy8cuCdjb9rXi3aTAGKE5w9BkcE",
  "key4": "3aS3eUZttugVHXwXzCmTWhsuFfBeMtfKwDjuoFXPr7nwVoWt9jRvhZedWSuPpN9De98oTXdMEnd3uRb8v5Zozuc4",
  "key5": "4DKXqWcaHbn73YBA7jxZ5AyUq6BwKC8oqKo8rehbG6pXCx6kB71x8VFQCK8SqoSmT17nnxdxdjeoQ3KQwk9J8sD7",
  "key6": "5QJb3odjah6CqUfUNENxLiSR2xy8kntfN46nBN7hmrrjrCgGyCfvcwAbcPbykjhwb4D7La7JdrdNWqE29gJiWaLq",
  "key7": "2SzWpCmkcu7C5xgNzbekEi9qEN3iExaDJawbAkugwKa21zffRBGfjoThGzoHjMknTFBv1od8LUoFiAGgk7yumfx9",
  "key8": "fKbX8xedsfpiiLZUiqC2zk2N4SYhbmaSHuNcvRC1513RcUfXhYJaQsfeWpgemyPbFTFRhiFKRVryBhGStMgATST",
  "key9": "Kda63FopTSKoUetKdHwqvNsQhNPUNJAjTwjoy56bV2saW6TuVQWS5zfko9r2kfSDXB6CN45KQrLi6jWRaMWMGm7",
  "key10": "4Gir4h15mn5oGFbM2JhvkV6Zi4q2uvj54ETawGrszV86sxfTfN6X4LxmCLKpesC4vXsUbh3P5ux1VNuDdnZ3YXqo",
  "key11": "3mzH9iVYp9n3L4nBS287c7ToAbRVeYk8VE8JQNeHTZczLd8XB8v2jPcw4xBRMq1PY4JLw6AwRQxTQnfLP38jsnFi",
  "key12": "3t5zE7Lhx9orXENztag4Qr9Q8f5ZHaDgRTRcfAjtezcgTazJDZm8Wmv6hYH3SNDx1WRXxYitPNiyaND1WaE8H57h",
  "key13": "31RtxSwowsYmsp2dgqV3BHKwFgGP3TFJ8H4ASGmJNM7kg8T5evGdPJrPwuyXKkHJfLWAMASDJUiJMpM323xkPyyJ",
  "key14": "4uHEpo2tDFkn5MZy5bozSuYfcNeFed41fyzTjRJrqMoktapBS3X8tt6RoyNSRhouiCEBFa6txhnPj1Zi2xuKtDud",
  "key15": "3eAh2QEWSPKhASPzLQWGtRRerdtAYBqdVdsUK84DV1okGyGxiE12ux4nu1kDndhdULjwVGxLRea6cXHMpsuNiSGt",
  "key16": "3LsLzhQcjz7eXECz2DqS8uGkFnhkVYgptvF1kNJgQdJkzLdmYPT5BjTCwCJeZaym1SPSoxgiDK22aJie3xRiN4mc",
  "key17": "3JdgWRdnMzjaeJtTLUeVr9MsDMvGv2iZ3ggXwvcWnuqBjjxbZLKggtzN5QwbQA88m7mg1sQSAZuMy2Tq5q7cz6J4",
  "key18": "4nDt8xc6DGzdUfYqxznFkRLFws6rrpyNgoLrXrjfEmLGJhBDne5ss4zfcXruuwLCKDbNEdkwQtxSUFBz6GqCqn13",
  "key19": "2hoR8EypmsUqMsqTPMLU6QsBXwZKE66P1efKyiRmMY8RDpP4wM37wYQ8ZH7URx4VG5LGQNQ3a9G7oUCCM99ZTRPS",
  "key20": "5yEjPRhiuqeZciLmZavwnGj3iBXVu24tshc8HA4ykStjZYueopi3qB4V6gfYn9gpUctUYz3FtCXoNoUUhcL2MRis",
  "key21": "GTjNJrpmAPAWkT4UJxQngjka1kWDX8YzVMs5UW5qe6GcobcwTxxBpcwdVqxMQ84ezPpgbBD8vC7kHiZqKz5Vq4Q",
  "key22": "2iUrJnHgcqWRG2y8fBkeUHmGJw27RhkEbCPCt8R1qQXzJYHd7ty2XXT7GyeGnn4E5hS4CnwwTPR4AZX9rKYL5u5x",
  "key23": "wsAYLMHuWZVETVBfeQqfqvSexNfymEaRonpAjySQQkUT2fFFWoAfELYH5zs4S8UNTxc7YYwDHKtmEfyDnopSLYH",
  "key24": "2HWqoAJgt7AtWupp5pPMc7Hhob2KXjPtXpf4iWeX1CY3zT1tmGSsog4c9rtSLxzdz8kM5fFeyNtbSqbyKEiouqY5",
  "key25": "2GUWNAxw1JiNWkxDgGMo1YBHqCKSSa1y8fMt16hHbc9hX22n26NsRrpzKPL3NsFJKwrahgAmipLzYv6sYRmZU1Pv",
  "key26": "3F7DQoJh8FHrNjdthT9r3nBTdpmYZAcsxzh3z9oqo6R9WZUgdSAdmBBvmaSbVFQfAkfkaE9pfh8Et7HSvjw1Lcs1",
  "key27": "HHJ11HGrtcttAELiiKjHYuGYvycMmU4xrGUVqdm4FjptTDWeocNKoHHTDqa4aSpwtbUVoirPv2uLMN9fkZjWJib",
  "key28": "5GM3n8s85M21WuaWU1BtntEYwqkKWeJvRghDavrSkBVpQh96UtamE4dA6WUycfFgfBWq1xDbzcToVPQXohZky3d4",
  "key29": "258syRrDstLDU7h5YLWEPtr1dcT1pnKmfD7T8iPtqz7MtarT64TTovrvtCrVQQrczDmQwvJxUfcHREV8xLwc8C6u",
  "key30": "3CeLXS8Kw4vzDQKwhnsqbxBikPu3cZ84fsqqWfNZMxrVV394sDDoqxbHgU9bmd31hMNHRhXQE7gVgPE8BV3xZMiu",
  "key31": "SCDYuFakhWJApvgBrbtigkUEAGwx2yz6ujWFQ6GrhafYoz49HCyZdhNRxsN34hLBa2EpMjtnvDz9mVrZiuHoUgn",
  "key32": "3KV46UBb6SkWGwrydbVVShRVaE6xHuMvZYEqyib4DVSVrR57CjoFKgzipv8dYry2wyHoXAot6Gvcafpr8X15n7Md",
  "key33": "5Us5a9zuVFz713es9mbJhLigNP6AMm14H68vX2kDcshm6hhatdE6GnisVVD46VcnixspTkZZ29JMFD63YCvchkyi",
  "key34": "3aD5EYHiuTZxyLedFhjzcsqdywP4qE6jqkpuQ8iQSMtAdzqYATcvHSZK9tpNqKsTLjavTPPeWHvAu36KS4gccnqG",
  "key35": "5USu7eWEBphXsyr7qMBeHf8RqCCMeMEjYNW2A8J6qhwkE8D6VjWerbAXzFkYujQpcM7uzGbc4XUGoQyy9Vjtcv9a",
  "key36": "4bcHwHJaB3nJdfe94UrHnFnJFgNrXGybBA1ycUpZ7rEuV4NaTQdoCNjJFoqPu36F1pRHPPRDvaF3PxwjpoYC4EBu"
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
