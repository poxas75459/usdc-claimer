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
    "2Yyx29zke1hyWHTAArRSjWjh29p3eTSaxJ4zDyE4qZcW8SBhuEY9oK87eNEkBtfhFHWs2Ehi8ECZ4arSSFamRoNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJdRXq4FpiWJJwpm5NoeEarTf333mf69GCXNJNN5N88sbCUykJhzJMkQZeqjMrx6167C8XZ2Tid8FKZCq79JtxZ",
  "key1": "4Bu2Q9ikz8WhAQp1vvF7ix4X5DzYuXWKFP7LuP6N7Pxkq1xwy4zSgqeV1zJUo2HE9kSQomNPhk6jP1Ksaj9Jvu9H",
  "key2": "5xHdgFJWZCa2waisTdB9CbUizQb3ng25KXepQH3mf4QE5tkxxh29MaxMnrjs6qFiHHDLyMw4XQT2Rvc7ZNjZCdEU",
  "key3": "2cZxG6MftKCu47G8io3BtTLsTS7obVeghaAYEn43kKJZfiCMLizdQvxJh6RsHcqojbvzus2sXXJPWv3Lpz2gnd3s",
  "key4": "miA36CYed7hiDaa74RRHVFs3zpQgmTtqN6Jzsv5yVLzuJcYtWryoDrnK1FqGdKP1E4XGNPA29pjqcHXLzQWYjDt",
  "key5": "4QGUUKAUSfUdLveWiP8BugAtjwVCtm9JvNt75NgUG2JmRvtKQ1Dy73JQqZ4jPgvndn9LMaw4PS8Lef9B2uC6xKL5",
  "key6": "46DcbL5sEYDfzu9wHEbSZwwRLCr6PE1EGPyEaTudukBus2LsNDpLKYhMt1yiZZg5pvQ3wBqDHaTyrJnhMH2gc6r3",
  "key7": "3e9zyjjoWBpkFDWpsZRZTWoZTyR6G8941JFRstMtyAwLSLnBchdDEKAFWjs28zrE28GjZjzbfUbnoFRhHMU8Vb5N",
  "key8": "2SmUnxSPh8fLVGK5khxWF5CE3Uq48nekfKrbEXq5aG5hwj2JQ32ihpknhC5d5ZzFcmniy1w1yi13dPEsCDg6nu8P",
  "key9": "3HbBU3PnoyHj2VMVWPK72dDW8PvQy1PohQzsvXDV81mkw1cecdT1jfV2SkmJw8nhMtmuZQmJ1QtzRdXi6skrrxJe",
  "key10": "55GSTF9VxVrQeJ3VFZLsygYRGp4TyotNBDVXRHDeCzUGPxeXZgqjhZwBwA5QXuZ9feovx9ETKxzRNX1wEMAbZWeF",
  "key11": "3iVdsYLhfqG1YnSVqnNG1KoH4pGqSmpCF3YDu93QoeZcx1nLN5awrUhqmuo81HPGgLhXfhMZkaKvdQE5mrbYp1qK",
  "key12": "3G9NtgCeum7CUqkJFq4qyaA2yHzLnZEjQP63nLFv6WJ7aDKhJuxVMsqfWCZUbzTiGS2xoAZh47e6TwjfyL49jYgK",
  "key13": "3SeeDcwj6fPb1nvS7iv3hMhaLUgFshsEiYLt7J2gNEmmuT4tDE2NFpNWLwNv9aRgU2GfafAQKMSCrySfwKG42nWS",
  "key14": "2nd7d2QnfaV7Mkap47x5DW7hw1Lau4PmaLCF82WqQFfCKquV85FtdRfro2vVSrCkpSZj5JXxxJ34up13vgVpw98Q",
  "key15": "4eDu3MRrHP9jKPZt5ZrLwJ8bhsM78HjqamdT2JPQuQfkMek3jAMTnNFaw91QT1guvt8nV37GfpWLdThQ1CJdCVXD",
  "key16": "5ThvgePC3qUL3psmduhMi8sN47e6VejkVecSS33ap4vc5rttPoV49aqDM6ai9bwAGeEA8Kmkv6aCc8tmgntPaawL",
  "key17": "61ybu24UjDCkuFnDyJvEG8njAXxi2zi8h1XpgzNCmYWspaRv3NMCXxtALBA1njGAEaeVqW9m2UYSzCVudfhrA6SP",
  "key18": "4m2JuKb7jy1sShZrZoAjYZ1MCHuUdEQPXzPwMQJG7ihcRezRyDenHKQfTViGT5fGnuc9rnXT8jhfWtprQdg8YNGJ",
  "key19": "47XasdVvvzpNixvLQrRv4gWbrYjLZEmKpRR6mHYjzQdaFPmCpyAohMBGTtLqwWBeMRc4n3BR7JSTKCaEY22dSnbL",
  "key20": "ezSoShGrdXGNGMDqgF3MjAmRFaEYqpA2GiwrcfBEiJK3ECo46izyWWQ5YGvcM7wXCdfn4Qq2H6A3RDLvbD9HfVi",
  "key21": "4bfBWbrNNhbZdXHjEXoxj5k77QaTCcDav8SnfioSH6NtM2haYrEy1GiGGfqXjUYmapmvGVXQwNKdJ8wUNq1Gspfq",
  "key22": "4W323zoHVc7K8oow5W4WHkiWKaAd5Xm48taMmBmQdfTkmc517mNCrAHdBWSq6LNdyj1kcXmQz75VJFatGW6sCz8Z",
  "key23": "42j9fEv8GZx6FRUx3jmEdr4Qw9UTyUFWmKv4XskfaFFK34zHsWUFjjPQeN5ptgHrMQVfaUtRAGJogb5MrDZVbM9x",
  "key24": "3uT8P1wQzYqH9GEknkHYupUni4CoTYLy7VDZo93ygYADWiX5ygn88W7NFBYWJAVCPqoXG6SqErVL6BtU2ZhA6khb",
  "key25": "64zdSrsohvq5zoofK9NKUdFgVCnjhX4idde9YC3VLbGAUKb1DFny1sz78aFoGQTzh85brxs1FD9Q8UDfoVd1y2MF",
  "key26": "5o3jEFFXsDTTwjb2yYHHf2BL6nW67LFbFC6sD54UCUHakWe8BftD7rJhzj8AxPirARLzHruJJEEtC2AJmrZoVzmn",
  "key27": "3LwZQdZmvL4jhgF3sNRbNwsBtA2oJEkZuomu5Cms1pbz57R9tjsh3KY4Q9CvCgtxbqm2pV3EmRZ8UpMBddjEeaDZ",
  "key28": "SFDnJ8idVbgZd4f6Ljsbn1xPmz3T1kTA8Hzphj7YwgF384L4a7rfpcLLs8aE9KTk675rZt2BDZvwCoycFeMiuiv",
  "key29": "39zZFGfVet3tsVrS1PS5wyL3Hi6hTVaEsSeQTApc23uzZWuDcAfqNxJ45Uamy3cciRHrwQsUFFsQsgqePun393xH",
  "key30": "49k5CHQkgrzESERxZyfUFasxjHo5BkkFHhzXfEEiWbPVSnrH9K9SUZTq8QZZ9JbVtUzHg2oyT5b9W5NzcGNR5Z9w",
  "key31": "PNKEoNgVfWqgeEZim7HzsLgVFntCGB6mxpoAma1FBwSsrZUQxizfK6AhzK9JwENNPDKckGvXDTyn9EfNWU3RKhf",
  "key32": "3D2EB93LFYch2XQGibUfvCZZBFM1FzKYEHdFSqs8curT5HHUDsjAjnsvpoUfA27CG9Q6G65DvkHGBpJTnUTPTKr6",
  "key33": "2efB4WqNUownCogP5AX7h73SKmanqyk3US1rgdBUwuAyKnQyV9uuerR33gzGvcip3GQdR3JM33QMhUg1UFpFJUUC",
  "key34": "2cFQhZYB1efmmiWsfqD2TsbcrtxTXojcaMjyhFjLHzERJMr8pzzzU6XZ1Zk1Eh66jwDUTtt5ojZ6jWUpoKUyGHMd",
  "key35": "4NbNziPw23ALVa2xVumhFPUx1eoXryw4ZeJ4cfoEAgMwQYocgpvvh258GD8wfk6Pynm7eLpSeLc5YKXbp3i2WUEx",
  "key36": "qHF3xBtEXFE4dC56UbBGHtRpG7eYnqMg6j56KTk8eKbQ4gNowKkEs7LrQn8UjXsbSgpBGEt7EswLj3rVkiNek41",
  "key37": "zGwpEo4Zy1xzi3zZ6Qda9qqxgmYpdoYpZ4uv6uspeDJhrJVZoRZJpM1W3Lb652tSuA99Dfwq5JtLvvCxHayqvFJ",
  "key38": "3KPcpEqBbi8FEefAM98UuKQ2mxsRUiBSi6maFqtxt786e3rGcA7zxvggP3n81Ri1r7VVneFTxRZT9AgyhAp5rr81",
  "key39": "B1ELZbGDA43LiHB2wapr3Uxe3SrppPgYfx2mu765mXaH4JSKCBBReEDQJaEUbWyFMX8wwiSJNzMwSfwi8Hhy3Kw",
  "key40": "4jHApi1UAUkQj12rhgzXnfZuuoTBkGnp11k7LaHhDDE1o9DtVr73M7nqaz8seMuMPbw2HwBWcYpmPpd8pwYNoqfz",
  "key41": "RP2vZgJhMCsVKsL7vCgUs1KUsNfQcUE1NCyjXKTgihShaEcB5pTCtvVuL9sBQqn9mPGFd8YQKqDagk5NswirKtn",
  "key42": "56TRRjPThqjiNKwXetiS9Hn8j9N1H1Z5dV4MCZgRtecgBrewhpJqXC7axrHmbyustTNrtvxPFVugLABnnURYdUit",
  "key43": "3nZ6nJFdQJxnWmTcAGyyimDh698QUcCfKfCiQbGPvok7AeGooUXqxHjiS4Ps8GHag6MrEgczh8DhUxpTajXJVUWs",
  "key44": "61xK1QMsEoD8gvEWUe6mtoKawAnYudfMP2vRAxkPGYhhmxVZW4RVzpnKS9H9Mu99HvwF4Z6jpKNF7rx8sieFbJyr"
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
