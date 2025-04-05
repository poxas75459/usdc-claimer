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
    "2VVx8gne7hvng8YDSdVoEtWiVBAqzz2L6X7di7ySAjDNB7Lz3mx7oytdG7oH3Q5J4oLZJDffzcBrc9jybFKVnQXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fB7eoAjdtt5DCNiG6eMxxyC2GJcoxCWx3zETBZBNeQYJFfjPfXhSDBqugU7dXxzyerTv9GcGcBPxzDzmyVTPibV",
  "key1": "66t9FXPcSPbfmbMaFAAqXyRDHjbepzEA9dZLdfpDJxSPLGjfu77jdGRHdJ4aQ6fsCk53Jhw4EUMuN3nxitJBL4Lx",
  "key2": "5uLwH7ZdAXL1HRAZoojeJsRHGTfjZQ3HbteVQq9W1QcPnWE8rQ7GbKdszAzZkTYvRdPP6TEyQCoCyCtR7igGtwmf",
  "key3": "5xw35qQPtTEb5tik2EBoVM6gczHuepoPKoRiouawP2iPAUXrjBr3BVMZgrbvnK8DcPQakrLM5UGPXJiAY9KWwQKo",
  "key4": "4rcmgn4rCkYwJc2wzFZLtU8SgoNjFjGA4wLS7VSsqBBUV62Q74kjD2CVmM21bagidPLLhRvDJw8aT9P6WqrvDggD",
  "key5": "4iVW2KGUjGfTK37uiqg6jDCL7AKnZ7wT1zvpJ1SnQNXdGJHh8Cf7ciSFiF4SFuAyKt7PSuUojAFH6ky984917fL5",
  "key6": "2X214femkfbjfyD2eeuU4DpvhjyLadnBgX2pYrMW7RkD8H4sZSCguZxVEg7rYUsmNzmfnjaCTG7k4unZujYePvds",
  "key7": "xecDvxPSPxZFr58XH2Tc4sgbiGEmT5tFz1AAMKWGMuuv3fiFKb4AYAonQLq8yM1NJEjAFpnfjw9NUCZxdFwfrqS",
  "key8": "55CTzsvR1bepDZK5T5tmBTbjzymeKfjRbf9BTzjmk5cBQCE8VR9iznZg5MVscvkCUb36DrXACteDdUzU6dPQPq74",
  "key9": "5mB8xcmzSytjth12ExNVzdpcupLk5uCH6BaGAZDD12RqgX1WqiGe59vrdZ1MYjfw1Gq2rB59cWHuyoiVWstvqJHS",
  "key10": "Fe6HtoNn7D8SS11rmg8jRj5dAPdEGmMQsy93jLcarR5sXxEhGucYWEgGxv5wEWzXNEenuEqHM6j1iKvyYGJsJgi",
  "key11": "75n3SWbGgKZfvdqhnt7xHGDowVhTiwWsjnBU6QKvXth7TTSmo7GBNZcWJJLnLwbZcSgcsbAsGDYFWU5CspQwz2W",
  "key12": "33Q2Q7CBtyatMFfpfwimm3QKJjwgFRfRbxui4RJd3Mqex1HbzrbdHQtdrUwft7JDvERhJBkcy8LmVro6FvqrCT15",
  "key13": "3Qizs7RSy7ZudznEgNRc8pt2AhpNg1EapKzBd3vJtKLAwPsLGe17sgCrrsaqraomch1D9updVJgujvzJLtN3hWhz",
  "key14": "4HtHpnDBemLYoLwfX9HG8htSv8kTLovJXSRio7RKqghuSVgagXxoKhZ9mG6VxiDnKCTThragWubcMg6qemA7Baeu",
  "key15": "3Hm5Ss6k6LMr3x2KVBs6NHw7bG7UJWB79rHhPmQ6ktW43NpHPVGyoRtukhNgxgXEroV1WTGLiPhWo5oXPG5aoQp3",
  "key16": "4yXwsAzAgqNTkT6qi3wfGd3935GiT9fLqDTmWjFumNTahq1EHXFBBpkRxffRXQ2Kh3tC29JREgnMXPXzgVHou51F",
  "key17": "2wa1EEzHaucFjKP2ZRtRDxfxoYaxZ6Z1LQUZ4WkUrULTVRRSwmpLWThQEhN4LXgvY4ghUY2YdW1639XAhnyAGm3W",
  "key18": "2iHis1ABLY4afiFaAyQ2QXpZfsoQHURYan2DdQ4EYu8SUPrzZWWtE1R82gfYQHpQ6MJoJG8WT8i1K7xnQPeK2Xsi",
  "key19": "3zFcYBhPePcGxvcpKyhk41jCAhqksq5qQ84tDMjC2cbWrqUfxJHHp3MVH4NP3SuURkNq1vEj9HxGL4MYAFBAmKVA",
  "key20": "5X3XBg2HmR8MaNxXaiQbAvcv2BeQMd2dhrF89aMhTLrsQnC917HBkS8bYRE6KJ1rvjUoFUwAK7wf65wwovB2azPX",
  "key21": "3Uk7eM5DtXUqf6rZeynaKzSFus3f44n4LBvzKbqFpx4xAuiUdamrXBWGshAig3tXRxuNXtRqaHkZRD7pkZEAi556",
  "key22": "2xFMzisKKokkit4hvakXSzouir75GKoUA2GAwBq6FHYMgJ5BFqfKugJdkihjLUzqsx3rTSJuuP6QgVXrUA6Hh523",
  "key23": "2D8KAC4wjjvpfi1Bio4ykNuLQ9annk6Fzr8DHUTLfoEKU7TWcYZJFeUCwV7KS7zhGdmKFiRydwMDbtSfbvXhVJ1n",
  "key24": "3eFbkfqSi2kbfEh9czNkprqCHF7TrnFq6a6WhPUuM1g664Upert8nRerkUEghaJSaqBWCeq778weam7YYgtEsh7y",
  "key25": "54PZUcdCu9NQjVVzGB9Mj8BpB4eutVBVDNGSbe5uzCJAL5jVQqJC7eGNRFYK4FjrJhsuAYpWCkM3juqF73JNuwcs",
  "key26": "57c9ivCFfe2gc969nvpE7pvg9pvUuhorHkzoJ8jbaML9PKPz2FJvXhVP9MmxK6PDSLsZc6CboAewrhYVaEoEaEQi",
  "key27": "66SkHmDjUNYxhCf1uxPA8qgADGhrx4m3fBQ3EnJPqVAJCpcxeSHTrCFFEW3VDZ1CdaZDUrNJ3CAJrY8UBnVLzSe5",
  "key28": "4qpqqyzAVQzVec6dMT9fGchCGqKHc9PWepSJecJkQQ5gDdLhyjyJZTyByJq6FmzkkEBUM9c8rK9M1DaNQASFTcZV",
  "key29": "4TkmJMAt7QAMKDwfrWsyeZiAbjYMxtdriZyyYVrgSEPqxXDLRDbgJVo11ckmyYt3jev1RyLZKVkhNjWH8B7M8AtF",
  "key30": "43xGUHymxzrg4VAQsL1dwd9dhwKo1ATqSvhoMGm93G3HtHY5C2F5VzhQj5YqNjgtGyzZhS8Fb1n4TAT65N9FMNuf",
  "key31": "2g37oQWJ4YAdMLwyquCHPfgZ4pC7tdsq3GebXL7hGJ7uzxfkKvJkxrE4xgrsADzaUuFNggQz2vz3nCoxe2qoNDBo",
  "key32": "2vKBdDDFEh2Fyh9B92rozMKr57iNqLrBXtr8uAkX8b6y4N4rK2c7XEHcUfNFTS7FGK7uXXXR73ErQ3irWitrZgb7",
  "key33": "5oLRCz12YndBubsqkN6cSzTP7xBdRuxqhPFTWpis3BfhE7vU9Tbby7jrAk4E4HDjnSzKKZs9WpBVes1u5ZUUuUUH",
  "key34": "SuBDNi2j8cSp1RGEMqHhWNQS2MwLyEzTbJwgs98hZnGxef5Z3v2uHAyyTBFuLtJMuCYbPdw4AS3zfKrNoPgeobq",
  "key35": "pLvXNT6d6ivNBt396WUjHbPpKGwnejnd3uNwkaDkKz4fScvzVA58yMJuGXnKqrMdnUdfUVyBpnBAGq4bU585Lnc",
  "key36": "3rTPjnxdW6kNoQ5VXTXwnscAmSiFK8zBEJXGUr3BKGhdBEcjVB8foKxeYfqvRto476Xn2xKmuNixqiKQWHyrM96B",
  "key37": "qaMkmR1ZB2mTMn3bGLY4SahfnZ98AtPWyHhs8ssRj6LDsXguvBrk6JD5mAQ6hVG24MMvpeswduFHb2WtHcfV39R",
  "key38": "4rubQQyQpKCCf2w2ZHkPUqEUCtk9W4Qf2RMMmKYyXiJZ9Db1KCoNPgvVTX1LVxSFbSLT5D93cy3wdrTnQKvS7C9J",
  "key39": "3eZEeYkinepo36ThSTHqyPEvDJFmrLNjBD2dHnKH8QWhX8A6eYYe3JssHq5WwiTHfwvfTxrFYwX73tCwS1WEgRKx",
  "key40": "5f1xEMHj7EykzUnG2jRSUrxZxRxjaQkikx9FGE6BoYnFv7xi92MUiwFpgQRJTbKNnTmNyDwqEyPAtnEm9niBoUhi",
  "key41": "629HxWnqrNuGLDxEVFyUPHSkheh1YeQo3FahQ3ky7QexEEjJuUYVMxnZHvJjSwry58DRxCuYt97iUS8iXReS97vp",
  "key42": "5FED4P2aE1jthJyWBVCpM4iTUMwaoNUiZhkgbqhuYP8G1xDXtmonGJapLxF2iHyzLndqpvr26eyFPaTRw4zZCp3o",
  "key43": "4WC6b5tTitAiZSTMqptQGakmx1FxDYpRc9VY9ULBi4W4zGaZ62S522QzbknfMGotFMca1jyDmHqDd9CYo6qabTAx",
  "key44": "5vVoXJssYYjxNTPyBgY8UGM8di5sspbp7Cmfby7wqvRUugdF6RrUTx8DNturBndPwa24n4dkYSvnLBmGaU8nqeAY",
  "key45": "26hzRhzqSgMep9L9w4rQWF2RuphxKcntWdK3DrENFyYsNWEwwnf97A9AviJzdpGapfb6KXH6kTh4V4Qg1X8DNQ5A"
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
