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
    "z6aRTpfPV371tA42oSJ3mVi51LqRDtUjP5ioTEjUcpM1BfemmmgJdJ7bQeBbZXQCR9CsfprkFveQGwmSut5YBDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FA99kK7HDTteUfMFnbUYdjgNF7QVFbiwYZYn1YUyPRbNEgAXt8CKTq8BXYNAS4tJXFqg96xTJWZpyERHycLuYZy",
  "key1": "3sgz2JdmcmQmUfGhcrw3EqLc2gPK83M4kHXCd5ovAnKskvW7HjkmEX3G3cvZioewXDwuj1hKRrAR4YnrjU7vTyVa",
  "key2": "3R5PDe4j7c32174tj7DobAkXZoR7fXz6dScyrxqfdKEvoGaUnxhCYx3XAAD6hw2jU1qQxnjwccs24bZCkELkfhr5",
  "key3": "4DgDutcQwiEVttVwrMCS68XGUaVQ69caUByDQmXaUiJiuCqjB7pQ3eWVCmr5sh7fbHupzff1fgrfKvw1EMF1FSTF",
  "key4": "43b2dhz2Pr8fq1hfTpz7nzVRHe8sZthdZLdQgrbwhtvYr1wNuopFCtA64oYU9wuxdQ7gouvA66vcQJT7P8pzrx5V",
  "key5": "3tU6EYnTSBAWWsTKxwswjyFGM1PipDDLxNY4yp1w42NdN1MiiMwg1U7TfmP1pbgiyLZvmN4GwEHV6MrTj4jBa1Tf",
  "key6": "2E1CkS1iQSsG9thpHxn99utTH7jH79apuMJpgVuqw8EvSTbcMz4FTWhej9cUdJ7MXwSRWfQLxVG7QqjEQX16NW4a",
  "key7": "2D5QMcTt7raRbWVVeKiU4kVyfRcz7e8mH5FZ8CrEuur2murKAGfS9mqPQTcowPD7B5hRFk97e1yD6jiwfeYXHLoj",
  "key8": "49KyNwirnXm2mnA1XiXKcU23eioj8FPWiQdTKS1AtJ774eeBZ4r8bGw4w9QQy9deraaC8ieTLMFXQ7DWD9C8vurL",
  "key9": "t2Q33deEvuPFZvRDmt2hwKQonFxYXsQqBFryGFrjC9zAvGUi7RMH4KPgZ41Ur74EAsPALv3iRKafFYZFHjZpw6G",
  "key10": "4UrmnytSzSspKNFQ3QS4MZymfDsa7e4CZzkvtUWeKiw2hsMfTvNFGftAu4FkGfAFTziguM3kE2bxLZdkjpGdh2pE",
  "key11": "5XiFcPQJW8qJWbxR1duvBNt1b1HeZbckAyVyEGjwTnQswtjZdksezJAQcJUPaFRrCdcWHuUdDpP5iByEA6HBBRLZ",
  "key12": "3LTjzm3KLPKG3MmCEaFtAczsES9S9sVXDoXQxTeDYr8T9TCoY9YNUwARo4SrowrMJxNj2y95L7EnzhDo1RqRWLBN",
  "key13": "5cnhLiK7mKJWXcP5uvgnau7MNBF1YBdw8BEzvx7trT4dRcHEdBYuvzGstBEM7zQqEV9aBeXswGx55vJ7MsBWb1BD",
  "key14": "5T8CHVTXJ9UuHauYMFsdA9cN6LRS9sRKbKf7s4q6wLwDGVJ9gEVtWZTNTAbgUuRgTk6AVHxjygkewzawtKF6XnhT",
  "key15": "56JSKL1EkefahQJ4epkLLWaNyRUBqY6tV6zCDu29G1vU3upgvVcZgaZwXK9qcNQiJ1ZoKiMwFrRx8UEAHwxttaS5",
  "key16": "3KAdK3f7GeNdjDTBpSMzYRbMTCqqM1biWCu8yvZMTpp4QGtG1jTXxRY5RkG6BMEXTwmK5DPAKkoEKwqbZSr5KnZJ",
  "key17": "4sU5TyyWD7o3rXmdhEXPazNpZwNkKdd1YCnjCzraHzjBo1peb6ScTSYs5b4KdhE7jPtZD8m2YQtNDYAFm4KEGVWa",
  "key18": "36njRMcvm1EFUYxxagGYXPfubm7BuJssFWA732TJgr9zcuNh7ux2DtW1668hSdvoMdmwYYfkqahETJ3nVq35NtBN",
  "key19": "2aWNXYknJdd5bRq7dfhBMWtZ6QVeftFjPr1YMpsWzdUwf1n4WsJsmhZyzyE9UZ1KaU1aEUjYSFR7z9783Y3o53dV",
  "key20": "2fADonCJcvJ9k9vgTti91XvQdxJqwHocVn465Gt5U2rw7k3ykDdhLdw5afgckxsQ9rsPhtFmSF9isjqyaeVCN13B",
  "key21": "46zpj7a2EyApqdguVt1P1Wqz6wfHeuKEg8KVeGawuAQiYmXguyhGeK1c32y14nFkAC8h6NTw53Yqt2Z8XkmYYx27",
  "key22": "4vRWjPN5upD1CFCgddCxErD3jz59S2mf4T7KD21jdmzSdQcZt6GCKVuokgZrkHwFSpRhLeyDqndi9TTohMiBF1ja",
  "key23": "2PpW861QHzCs4LtAGg9Ju2oQKALzbYb8u7j9UKW6TD6m97T2xcAU5cxmHran39S18fbbyugwfZHDtzxNfgYUDy15",
  "key24": "58bLPhwVhiCs2gw4Lu6CC85EhfqNzHgKqUc9yL6dgWVP1xmNS8sFUqQb1SzYgJxpRi7GNSraGseSDkckT84JYPfY",
  "key25": "3fe7Ec9pXw7XBiqmK1VQrivLbVqt6wFMve89LHJK2XkgHt2M7uT83z9sbapPq5kqQpkKhfHnzykYowggaYnBh8KE",
  "key26": "59UKu1bRv8r7bp9akVguwg2vNRHzpdfLK3TxiUcz7LUkE1g9sy9HicKoKm3y2iHf4pyJCCnUHA59xbNyM7f5viau",
  "key27": "53Pbt172AEQ3omatVi9T7GHs7tE6D9DLyiZKYMdQp84aee8wuzocrgToKNQTZcpEGgyQPqazPT2GZ2jxGUMfP2he",
  "key28": "3WXV7rCccxuSNjtCx7XKTvLhbUKADN9X7a9LdaeA4cMdPCUNpB3ckr7ZKnQ2qWBLiLWVfXW6t4NJ8NqPiigMMysL",
  "key29": "2ja6gqZavVCdwRE9i8TnsUJcjcWAmx1KsW5cPpEKiNcxnm7kqhABgq8btdMZmYNZCrh8bjwoqL169nevg3DNQ7sE",
  "key30": "57szfS54aDzFRiEwseh867HU5yogagtZiYirttFtb83sPTtPrZ1wD8HZoT3HbKhcirG4VCjgKJQw6i4Quh4ax2ZX",
  "key31": "3B6Ja9TguHNJARhkZFqp2hXz6Y1wAgwAeDszJUbWbCsk5mCM2pfbrVZrZnpCWz48BjUQu5pUbxAEv4T1Wq5WE5BF",
  "key32": "24HmbXSQPQ75HrgLdSQUUWJ94aKoxs2STNpr8doYQkM7dTVtF8Qq4cmZmkDwBzqJ1TQxHD8ZoDXPjD3AShxowGUx",
  "key33": "doMeS4i19ZWPT6wbG6KYbHSFbadNZ4cdHnaLPd7V74uDeYkKG6V934ddZCeWbMcMQf6GpyK1ENNQBCYS1Kpkv3H",
  "key34": "3hhvPHfzu7QEnQY6LDmW1fsz8S47WVdjckgbRp8m31214TLBmLjnbeyQS2YrJ5Dy1bKvaUth9CXtkZR6rhRVTn2h",
  "key35": "2QsKAGFbSi9NLFvZab1JKVKxAzxzGZXC2se4gTnmtrmwtZcVrBfidQbV7TpsU4CECE2c3GNVDzPEkGQKjY8Rjzsz",
  "key36": "5bJLegPazwtJxuMratwveyUspZym38yRg5CKJaJEZRpB38B49XXPYtu2efV4FrtCKeBZEJ5zF8zztbkZ1DPG51Nt",
  "key37": "3sCcBv7WFD87otUp7P2D6EEZdkeTbeQXGvQQt7rSDppbMMEZ7SLkCiJ9jxbueEj16yjyQAiPwybmioNqoKjHoSMD",
  "key38": "4BkRjvRkmmyLoqVT7KVZhNw5vDvbDi3Rafv31De4BRZmE3iMtffbCP4FGcigSy8xs7sNMS7pidERN9KESpT6p2eX",
  "key39": "4EfsvfpKNMERsJZLa7X9Fif5zjrFq74SoLLGSRR4SmTWWWy4etTTkaBFyEhTfUcTiUdeGiMCpqFipxeCFVBTxnkY",
  "key40": "T2d4LKcVVMJvAFaKNP6CMxHDi91mWF6fu4unfBpTwKQiVX55gcCAxSUd7VanQ3ZJVKxVn7EV2GnPckaxMYDDLKW",
  "key41": "JkmHBK1wotH5FGv8FJn47sY2GWLRKb2PuqzhX7hzwbiddwBywVVwe1m8uUPwa5UJ2M14AtjH8CLaPkH7sdjnTog",
  "key42": "eban3FqaxkHS4P4DmwwvvX1zmxFybE5NMLdc5ZPzxJ9tDsztsJSq96LwVZxAEncEvXBQNdGXo7zSazRCMZ3Gf9k",
  "key43": "2gLBTE1kw7GBRxzEC9WERC6juTARzukyYtcTe4UCE3juaD7qiSbz3eWVUUyQQ7c4FZ9eRLXEmBBdQcgdeMbqRu6C",
  "key44": "5sDi4k822HBJ75maYN1dsKkZXEbTvcE5YyfpowWbnej4mX5wXxdfRnybn6NydaYC67u9ezkyaErGenR9P6cWzeVb",
  "key45": "46dnmzuS9GmirNSCyrQsj11ydtqxNdUh34DUW5L4WQ5YrMjTKupbxbjkUQVti79BQVaPRsWcUsJgh3eHpvC9KYQk",
  "key46": "2stw5UfYYtW2azJsAcAqfoBjneFXXjFMQAb4AimXyZjN4aexhoSnXjK6xesLJCnMdm7h1kmLzEsDu5MLWehy2Ar6",
  "key47": "51fN3yFhznykbModmBtq5RepWkTPwx9fAqUpz1wX4gg4ECPuSYMQ5esuzJBffYMU3NSAHkned4dzc6nHgst2akzw"
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
