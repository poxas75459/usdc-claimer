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
    "3pe4tvp58Sit22RjhomprpDxYD92f16PkctWfVPj8rNaeZ2y2UYUGKaLYwoRfZxepFFaEDw7f82Wt85YQh7DYhaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLAUJqEvcim2hPgTWZTDTHk3TTsgp5pJ25neoCHTcAVVwSZW9FS3SpTDn4zsEAswrpNzz7DVsmiPSLquvVaseaQ",
  "key1": "nYKSTNqbpEtBDBLXYfsJUabwnbPnvn13qsbvVeMby82KH1cVqZYmK6c7STbURK8kEppHNey9ZB4wMcWy3nf9cEN",
  "key2": "3T1JdCZnMSpPPeanzrJ92LQBBEMJzYVsq74xswzEu4RgGV8bGGras7cv7GB9Z2GAgSp1Yy3zCmCuNaVQ2EX22miH",
  "key3": "3jiRFD9LoLXnzDAerxXGc3GujDGfgFHHHcTcRBbg6NYqiEecUcdSdAZBkkavvN9TSZ8DQuBGn7Jo85BSUKcbd2JF",
  "key4": "2wBa5H46hZYM7y7Vbwui3o4druaDzbvTeigUxVdmWpRtDmvjmBamW9ju4xf9JFNLVcLUUUiGbkGtjxuqPGpmvuQz",
  "key5": "5ZtK62rdh1v3Myr9EaJ3VhpN1b9EzwYCcqGBu6DA38cL9JHBDGugEAzPQmi1SLKYGkgX9591HqdipjzQs7MoSEMA",
  "key6": "34f8FPTEAxZKHFJZBpUAHirNt51D6Uhyvb6c1fMJoSYxobvD2sJMLV43pL9ZB69uRfQfsafphgAvQQbQLjHNu6EN",
  "key7": "GtQYEVov4nhMLrFk7cLBqVKjyzHy1bPHNveJ3Ev3rBCZjsFW3ELSNNT5AcEBLRRAg8vkzWdpZesbrrdTrGruXgT",
  "key8": "5E4vW1usPr1fGjeYn8Lvk7hMkQUvyFZi2uybNiCPmLyziq3jE9fpTXDq5vc8LXYv27y48JAEeidY69rZrc8bgLmP",
  "key9": "4huWbHcrzzr1xrvVHchbCcfzbtNkXNB5wr2bKRpLWHX4YCt5TorKF5U9NG2Biu1sX9Xe9Gjx9jtctH7rzwUamW8w",
  "key10": "5YVEd5gzScn2YSBNCqb4yXcQM8kuYQKf3Ar22bTM7ukPMVx1dqbbZ2kwK1z6zcwcA3fgAug53TtfmV2HapotQNRK",
  "key11": "EW56tHNoGiZGQukEnTaAV7pNxhimgA9bXavnvAreb8eaXcm7SVR8JA9QN63AW1dLfJsWNWMckcT4xV3hKvpbyVP",
  "key12": "29Vh1kDpdvyQXJw1V3B5Bu2NCeR1q3Gb5Txrtxka3rtedf8yk4AtgVoTeWvyvhXvZict99NzCr7NYWT8fPACESY2",
  "key13": "5t6edSR73GSTTaUWjid44ajjPfKwJNxH8GNNYD1QH7AmwYswgWTxF7oFKHmjp6eTDGCPWpfrUFZEEUJQCnQgGNWL",
  "key14": "3cNAXo6oNezQ5LtXzSf67kKyA6XAAdWP8PTaiupZYPDHLj22UEX7qcXohEaozhbsvYN835PNGkdzyzDyhoEdcLRJ",
  "key15": "QGowVUTeSgjPfd9b8sj5fY7SYr1iP55NAKbsfhLkZEmukApHM9BPrHzTr6rJS5xUbisJpia7r9oXrvnEMyqv24G",
  "key16": "5ybeF5qetFFMKTfXUCCw2sERXQQzCXbKw3CGu7JpojU6N8VuxZ3AXeSgfNLNtGweabi3UyYwhWEfstutA3arXefu",
  "key17": "2HKyFvanJQPonbZrmvyWVtvXRKjkZAQDpNUcxjucLirAFw7zZNozLbKviustBFcKWCwekabXrWqTrvQuTAu1a7pp",
  "key18": "4pwkYfGB7UhJ9XNB3FcPFjimWkbXiUwTmALr5Z2RF3Dz56zBqtGV1fZXgukqVDgfg7ws5fz7PEpH8KnNA1nwA5rC",
  "key19": "2CkqEGQzFcDMWMjhA5moVRKRHXFUxLUvurVzDXMgqG57d6vU6E6H4pYaap9zZh1stZDYpKxehsu2YbhKpofUeZY9",
  "key20": "2FfxFF2ML9hK5WfzB56oa4fLBvKpcPRepSuEF39NCdnhtiJNzhFfxX7xJ9pTXeBTUdzkMs4ezxYJ6y6epYFKUE5Z",
  "key21": "2XkqGDBr9AY97YyMyVPjU3v8iPmqQswHFRgZPAA4uwaUuoQLhboYCQKxVMCbKU4oXkYV2UZAfcgkQihjipSVajad",
  "key22": "Q2MZ7cgqSpbGb3hbt3U8X1jRdeMMu9gLYpg3X7zU95MHxXNrtK2tRUVoJS7S2odzLXPGooDfBMM3nFA1wuF7TeT",
  "key23": "53TAv3ziQjADTuMAbfVNvsXvkarwSvyrgYqu7H8WMtkfAMWbq8WTGjnJfdSNgbQSBGc6vs23YwhVYD6F4WJQByhc",
  "key24": "4t7X7pzokuVDMjXHK7hfZ6nGzXz3PMgcgAaEsdaP6mnM4ZLwynMj6xkitDtZuThxiN9NeReFynnccLNyr5MTnpWS",
  "key25": "2GEXzop6WKskMNBtLHWAiypseHbswQU2XT6CHPF1g2QFXmeEHRqNyrhMCLCDmSHNaA6JUKm48g2bSFgWNH7EwDGR",
  "key26": "q97CvNeHq4uAe2TejDp3QYg6XEcLFfZ5iECFonWVpMkG18xj1tYATqnW7eH5uQs22YzamrkPymfiXN2bjFgFVxm",
  "key27": "4vt5pFunG6jTbDbGRrHkggutFcbLMrHHVgXdm7LMECaDhkCuHjVmGb7ZgHchmYspo4T6PKRsbfAPJ8ehUhExVjCq",
  "key28": "4srn7EEzkmK1EzeBgdp8JWxfUUPhJRXtSdY9srg9WmvuZJzfnfcU5ACfnh5yZo43vZUn35z93NiidY1UJRcxNiLM",
  "key29": "128HTd3X7XXjQP8fptHJYp6WHf6oWaUR1N1Afr4sY5HC8qf3y9FQkk2nqBYwqBSTdxHSSGjwvNyRm7AdtU7iko81",
  "key30": "33eCDqEg5s6oFawAMwjWvwjdJiM4owZTtc2V8PqqEPXGMfeq8EnCajbVidVR7M9giiTqEMLtzVr27Hn33Zjdew2B",
  "key31": "4nC9qyGvX2yrJ6GwV9qoweQUXG3CJigwGMt7qzCnJvJg2KxrzikYX6Fosr7MSBgD9Qh67WdqVM8kNmd8sG5eLnJr",
  "key32": "559xn8nW4735NkLkZeLGPmvdUoaWENTSBJkrBkWaLo4xKGZvvzt96qASg5qXz5jggSjynoYXYrZvfEyQCEqYvNXz",
  "key33": "5GXkwMfxUQF2upGEUfKric6cRrBxGmRfRAD2VSz7oEEpVPyaDPGLLGPw9n6VhEUqkiKeZ7YcWDznGXthyTmYaeMq",
  "key34": "2ENNqx8Fmdm9c1gB5grxwpLco8D6QeprBr21na8nj6m24StCvz6Waxj8pmFfE94tvNDPBj8qYxU7CnvLMVQNSoxR",
  "key35": "5hG3ah43A9kRJrSVn8EHPb1WZZexquGgCGUWXNyTuud2YfGJb8Lxfbj5LgdJme7zCq6N9JWHh8WKwhPbXYEdnAes",
  "key36": "6K85PuZZnTLLR4P1UX195PJhMKpKpGTPhYuk3dnXs8RrXxPJ2berPhe6BGBS2gwdY4x2zGEPcWvKaVA6N3ScLzF",
  "key37": "4GepX1wxFMZjS7WME6vXvXjUG7yd72VaQgtCFdp8MuTT8XF7AoJ4EvVizaGkPNwdNrM6sad9RStuEwd8MSvrj6yx",
  "key38": "4xsKhsVCKC1o787hsymUUNWQSaJuhvspuPP5cJZ1RKejrdyC13SJS6Vs4ge4nTpYMux3xemt8r3vpMZmB1yQhAMH"
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
