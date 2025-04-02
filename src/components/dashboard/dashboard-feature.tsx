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
    "PrfzpFYW9hDUPuS3YrdeScSJQW3g7AftwRHRRuvnJhu44nHVVzv1nzb6RpJN31K9NbDhg8jukddmrZHHURbAgbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6b5kvA3SMAFbNfgazGi3CzebASjBZsdmWoKA6Vcpp18iX3N2eDncxbU1WUNG61ksHKrykHQFnwWi8Tk8yoktcM",
  "key1": "4AFR2YfHyjU6yhZu2Vip6Ud7WG7eSX91biRofehqX484rspw9A6sh4Juxbr88Va9CZqJJJsFn28qEoLibTdvUfp5",
  "key2": "3LYdZ4SqErujr11XfuBFHXthEx1qnD5P78v8fFQLMU3d7d29vhTvNZe9rop9HU1bbohgop16m7CQKt55EKMsbCVH",
  "key3": "3LdgJoMwg6xmyKYi6Rcgi2YxdHLRZhV4xSz1Pko41Bndxss9bpVP7VjUM7aTXFNchnzWuAipz9ntgcfRHbDet2Yv",
  "key4": "3Shp7G2S3AbPZuQECxvKP4m6J5LWu8mFSa2rHUUhcr2ajzcGYWcoquPHqwvPe3yWcbgcVziDnkJ9RHB7t7JFUfDr",
  "key5": "2G4b7v4mFEdNoXBBaZbv1G9MaBZKj7XwroZBVa7TNpuXQ17cXQ9Z6Dbi3EUtCwDoXmEDtgP25HE7wU4cX8Mc6tLd",
  "key6": "5ytnenRJpspdeWMAfQrf9pruU3ZBxnajabhmXnyFMsnGFBGjvD4cfjCEcPmvhHJKKZkNpRuPLaJpJxqARkQeyugp",
  "key7": "511gmZ3i9B1Mw7bfu1rohxqhHiq6KrPvCkjzbDRuy4m2FE2h9CPT12DemVSgHeWPxwm9tHgDD8Qy7QCcFh52twwP",
  "key8": "2DJmZFPaQUitf56EryNYuJdtdgm5JZJUZ2LHw5QEsXUEuvw9LKQUhGXo6Ltcv3qNjBGKtz7GLqkC8FgYNEf4t7x2",
  "key9": "3FBkf44zZs9tW4TJZSRinHVBy7WzKXeirEnKaThZTGzLHdG7YuHrGRHckrZnfYz6UnPdKvYPrsrNM9EoVGRWUPXn",
  "key10": "2oEWfDokCA5ML7DH7r5PXsgrk1tHao9gQiDqxCqWDZMiZyo3JHQ7jkoDfSK4xWasjc5sW9q3feQr8ijLnrFXmAAi",
  "key11": "2FNiozabnjf3yN2LJWdm2u2q6adsBfP78J8ymcSUm5dXEmcFPSfppqPsv4uRCJQGB11VenTKM2cFHoXPTPLVRgQf",
  "key12": "23j9A8R9PuKrivQJvoh94vcBb9ZAURyLMRKUAEsmuJFA9CTbdppS9ufgBS8WwZYBNj4gv1z84sr1NjtGwboT6PG7",
  "key13": "3UMtXqiDkxUpCaj39zvRJUNkcUPSJVRtvW35Yfte3h16rYGd6Y6fu4nqnQ3PyFWavpC531726SqVVLnrrRHjZ2qy",
  "key14": "5dDt4WRomRkBu2am8JstM27Kdn9ny6rxXHzKuZ9sR54A9HkkKb8ScHcy7MB9uR8wspwVk521dZdeNpHkmKwnovvy",
  "key15": "4dtbmtTWG1zvV9GsehJ3XA1HVZV94Uenc2xMWnMtdVsmAcLmPFaAcT1jBLSkjaVzopDe6DWSn6VknU5xTXYtR6qQ",
  "key16": "4BhZVR1xKRgJmkw5du6ss84sJ6r47W3kuzphhKvYLgt6DUiy4QZPzzAYbvg7jnFWmxkDPhL9VbNENuzHJ7QbgYpZ",
  "key17": "67BuouLaUn9xFzKSrT8Rpj3WGXYWca4UowLHEtvMv1kYrsZ4CSXfTLxbdSukpq7aHUisMhuhnmPhgcRDqen8oNgB",
  "key18": "3X5wHmrc2gVrpQQ3NP4LQM7ZDLUdBaCBptsb5im5TUe5ADVXwSg9W5aobRDiBSgoqJMgGrLA3RgiN3NNrmLWbFJE",
  "key19": "4qeF6pRM7ZF5yEhUnV89Scr3W1ssaUUXp3FCAETF9FY7wwvsoNyrVVA1ikTYLXDiT5oasLdRG6MMDueXn5wMVmYo",
  "key20": "35njV64tBvjLrRo6E36Krm2PxoF4pCfHohzt3MLZc1NrdhfkvqbhEkf3QSRfge25RwRucKUnhG6mvrcVW9q9kGBF",
  "key21": "eT4XaN3fWF4ZUJfoaRvaVzh4Gg8ssowwGgNCjh59rfxJ68xMdmn46SiLZqjAo8whkMXAdK2XnZzhqmSoe7eMtpU",
  "key22": "4o3cJT4RC5ZnNkLeJSEnJoXCmSPeKo92XeLB8Xhz7tThZzDsgG2mwSLiwki1TVbFpthLUiMcZugf6VcNjRCBpFfc",
  "key23": "2cUnVzAeGB75BsqkuZRWPgSbGgZy7r1CKgfMspiL2Yg33xWGh87bGfQHysyGfM4qS461R7MkhYZ3Ahr8oU2VjA8y",
  "key24": "57EfcxaHvCnbKArsx1ZvQaSbFFqEQCSu5d7F6Xbwh9GaABzrRNNmFb5dEMmP9aRDjnsToHW51GapqnqdYY66yA9c",
  "key25": "4tHiphYBudUXKfiF9GmjUnoLmtNh4yo7soH3FgqJxNv9c3sTpHYuwRcHJQ2fcHme7Gf9wnmJGt27xL73SktFDHkg",
  "key26": "2iZk53bXU7nmcaapKfskyeLV1KQiVge5wMfoGDAGuXxjBLh8fnESUggaKoagkkaT4maoAUsoB1G8eJLxN2xW8KZK",
  "key27": "4X4M5YRQekP4nfP8N3c1BXJyJdjhF75dPt7PkiBvHrpfTGxRwW9CPnzKNAzT5yuCeJLUKSf18uNaX8VUtwKVCkc3",
  "key28": "41B4MnyxfXFGjnmQEohcNuStoaBUn5rTHCSLjJVPgyVR6cCR6gGbKpCfwe9KNwtva3WHNG3VM6i5TJHnXCoKQnet",
  "key29": "5LVTYtMZhLhsTbCgwSiLuCBaG7Hb4RMXXHBCN8SuwcaTDFuHERtRJU45E3DdniT9XQ9oJDL8xF8naGNnXyE264Es",
  "key30": "5EJkm9dnEx6Ta6cPTx5PLQgfRC6Z3XvT5RVzG7YRGeyJt7kRMEZjg64CiLwuCkrrwyYMctti3roVQTdmGHGmaAqo",
  "key31": "4J83YKSgLRedSEdvdktMj1gDUoEZ7mnAJmDobMtvm5egLVmzSN4DMuCqq8XvWuzLm5Gq89y8LyLnsvzdKk9tZ9V1",
  "key32": "5rMrd17axhM5H55PF1B9BExVoVAqMDrYzHZifcQaNqwibYAfC3n5YEDjzCJZzhjNaD8n47Mp3o1HTR15D7L5tnnm",
  "key33": "2Wr3quynR2yTawNBGFZemizKyWv6W25p9PY8ope91eJzU21u5o82uae8djDhjMYDcdtLPwbHeYhDPnkAUxvyR9NQ",
  "key34": "5UNmkKBLx3VhHR7Ct72ctynSokjSDDzStVLcMfR6got5juqCcs1f9sNcUnbiDyUZh5hhNyFEc548brwJWe6GwkyJ",
  "key35": "3d2ZLo6oQuui2uH7BQaLf6FrzoeZGzyf3FDGY9brFyYEb8nBuiVzxGZii71BWer7wVa9BgQ4HRfbuwYfHALVBGAd",
  "key36": "C7syAnhAxgoTpDdvSu2HvSpDbVr66jr5hyaH6n4fZBtKTLW5QvU1VbS3LpbZS9UL6zz4BDDGDYuAgNXzFTvP9Gu",
  "key37": "4QFmUaJZZt7XLtiNThXFXEnfTAtAFk1dXNPd1Y3ppPi3FXkGNxD2jWkwpUFbXA98HtFSdpeC26pU9ZYJpFsP4jjT",
  "key38": "4NvBvU9QSpeKyodAth7eith6K4egvLCt1N9wfeo5jnHjRVQasuPn6vsb69FHc1sxBhvVoPFKF7nnxce4hkrJZgJH",
  "key39": "4EMg8w12kbXr1azY1hH5pEzzey3eqdSAkPFT1f8gMFpgvYNpizYuYwr8d3HZjwbmf3CxvhUPnmBimoNcSU1vQ7hu",
  "key40": "3e2mvqL9q7t2hsoJnc4Kkti7g8unjKsvefznVQ4dbTrWKAiPRiWgjgLStYprMaHMjgdCdMoAtSR1pWKDuvLWuaAn",
  "key41": "2P6GGuLKLMtmb7JjCUVKK3KtYydrGHxAsCMeArDfhwkTwvi64B3Zk7Q7KgaEpnd2fbsTqE8pmXhXCqkFqxBCh1KA",
  "key42": "5nc9nYEvKNXncVZxeCys1xyWT8fuMo7WN195jW48rUWd62gTrnVtDYRcf9qaLjLrqHAmmXRkMgUd5tgReChdFLHY",
  "key43": "5gdQthyBEBSnj4KoZhBkAZPMefWV3WhChLf25NhhXRAsRNLuqqypx83nLLUqUPzzXUGkfFpxNV29tSgE7u5vwwd3"
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
