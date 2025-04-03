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
    "4XXjNKwFQZw6QTU9Q3eYNffNarMvbTVZ31EoYbuC9KWfK1fs2urZ4tgi5VEV74yFKVhB9uXEtK7CcTxjUgZz1Gjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdm5XvGhM4FYcVGXZSWa5C5Zk8QszvRDK6azj93mQCXiCeLo2MtAQx3C9DxowA7R5bdKxxaoc3e2amSq1Hpt7z8",
  "key1": "3QoUo6r8BGZ6tRmPreMLESCR6MtTYPcjRzUtxiL8QpLfjc3maoAspwSUK1Qz8p11d8oVjbhU8dMeFPTvJ9E4gJHo",
  "key2": "1CXYoGEbeBejUqyazdMTg9JgEVvqF3ZKFLdQUvH8NnBeY3NxLEvL1b66zEv1WfzGnZfqcu8zVmR1qDkUJBsjbsb",
  "key3": "4PVLiALhKwniiPFEhvPcrucoFRPwEGRTnzp1LYCJ3otiyDTmujs2GWkBMc4i3XUvJXrXwVtzsL9fuijNa3yhEEno",
  "key4": "2jCHNeNAxHpWwFAm1jjuuFBQ5jYXL83fJJvr63busmkPLKYVLCcTnsStsL5AgipcgmoVzeNLRQ9bwuicUN5JmpX5",
  "key5": "4VbWaf8HfKHKd4Ybz55aB9MhMZewuqBbQPenqTgs7Vwqpzag8CZNftuAgP25atPkYprhsXsu6ZiK5yVvyCD8VqPe",
  "key6": "65UQHFBjbgWP3kFopgouTvJxHEo9TNPbWdSpjdsQRKBSBhTBo43sySwAiMUy7futWq1JJM6LqjqfXPZPfGzeu11p",
  "key7": "3Lvb1ZvK94wmDMMC7H5pQ2yAfvppdbS1Ti4Uhf3oNah4wN6PoDXhjm3LEWzUx5SPX4kHmtrrZuU9Lh4fKPFeBr5c",
  "key8": "3rTW4rx9SRquc4CUY7BYPR8Jmditkp79NL7fxHbwwse4EiHpTzUufC4rf1Fe9fMhjcL7Rd8d2xeqraYgXAEkHntg",
  "key9": "4oT5GnxhsLAwinGvbVH9mBemxN7vAKTXXJAdjVJThpnSk4UjBXM8cJoHUJunBvNeYWj1AYrJHTkvrb7hwakHLpKy",
  "key10": "5FKzsay5HR5nQ9a8QbdKSeQiM7MCvmivh1JHciMoei6doyvRwvjFqrAjWLbu91bfKXLKhXtCTeEzpYDxPAkEreSg",
  "key11": "2Fk4LitcFGzRh168FvwFe8TxA2sduUW53ooMYrVQSGrYoNmXb8TaYmM587pkca45XrR3YJ6Ly3JZ2obV9QtxTczb",
  "key12": "2AGmf6DEuEDmerPS482beCZiAn2swLxkyMN7kwxhnnXmu4i2XNQMV5vajy79a4z3et6z7QZo88vbt5ngXp9qkgSG",
  "key13": "3vn4rhdB48mY8h1pSqdZ2EnhrNnTZzkuwAVtbHkAjUEWvmJEM6Y9spaRynPj3QKFVho7wmsgiGSuZNXEAfBjj738",
  "key14": "b7uvSWQp13a1D56vJyCFWNumA47xpzq6zBxcGzsHJYZ6UN5gbu8sE9PXUrqUAycQQ4wAB3k9zCC7Cg9xLn2JRHj",
  "key15": "XvLjdPURzProR8HVYwUr8HJWmFBRYriKX1pz2ttdfnJqATxoJeJ9iqM8KEKdpERs3Y9Zmzh2J5QHs1xLbphjgdo",
  "key16": "21XeZGxEyxPGktMvg4uuQytEaNLmb366d51WNcgNcr54BPZT4CsoqnfwvtDUoPDZKWGrhS998B1vPBqFEQw9hzFY",
  "key17": "2SPGizG9LXpeAN5KfiecXdzubvVjAJqYgSg6t8d1RA1TTQtmK62VqwUmh6L8y18sNSnc3kvAQrsJ5m8VLWfdYT6Q",
  "key18": "5vfPZzvU9dPWtj4YwLKigWNbHbNgjd6d4BBAo6GvKsuRZLMZWTrZkXp63AbhFGr6K5h8Ba1mh66uURfXr7t7nEUn",
  "key19": "uEVdBacNFGv4uhinTfaW1BMskCy1X1EiQ8kWXEVtEpzd5uTGZoCN29Ad9u8LNgf8kiXqWqtFqdgD4NFNma5KDX5",
  "key20": "5khpJLUH2p7txfBCjAaLKsro474wqUPRDN4DYJjd5spELnX99oxnFMeHFXDx8YacWHZAdBM5aJ5tEMvf9jVPNXKB",
  "key21": "2MWqJg34GW7u1efaGH9DWJgUUmp6bKaBda4hdjSNEuXStHyMQUMBPkNrjHtS8qx6soyqJJnA8dhCPP948KFJqD3H",
  "key22": "rvMMTv6fnnSnTz5TycgC3cxLCp2WCUubQdXXrmZHH4mP1WXxiEYopGK1fsWwzpwN5iDuV4TA3cggAgyQvaRrZTk",
  "key23": "3Cxc762Vs3SZmEwMZqBYhYB4q7VzNmhhsbMkyH2QFAf5ZCyvCoUHZeBjeTN7EJ9pMzZCSdmnrKz4cEth3tw6MWtH",
  "key24": "5wkbEw7kRuffyeHtX84xcg4YtnEjbBPAyxy44oVS9xNWCekbCpfrMNnj95e1P6n6yBhLysPytR1AyvsWQ2oYyC8P",
  "key25": "2VUEyiwibhrLBciuV5uaWjp7g8XFGd8fHn6hbKx2hPFdQFiHgcT6PMdBaf1ks3f2qJb1yt4RGtzErR3r9rriqL22",
  "key26": "5k8o7vjc55b6cF9aocij9MgN35YkcVyrNVdswe3dqvy9j1n79d1xPMHtR6KDQt7fKJbycoCvEPrZoN8Pv2mfhT8i",
  "key27": "3oUYQAqcRGyWg6xr53zAdiqVjjsZBcjbTEzDmPFt5ZWFMjL8zu4NQcV186pgh5s56msrXwNGpHZm3jYD35QvCeqv",
  "key28": "mezcxBZnyTqqRPkYvCJ8pRV6KuuFRP2m1eLH9G8z1GjAYUL6KcRkyz38UkQdeS8bwfZKHN63ar6L5YWj5YMs8R5",
  "key29": "vZMxsatPTvqLdAswySFoYBsRJMiPgcaVMpJZgJs1go1apJXDx68rqe4GjmJuohGysYkz3QoXrxx1cyspmGCTR5T",
  "key30": "2GoqwPAcqgHo13CStkq1S9bA1EpnzDhtLcoj6E9eD7FDfGqPS4sTmKAGDGHuw1b5p15jZokLyQ9xgYm5abF5NF7v",
  "key31": "gcVp6MBpKYeTQjGhDqPuMVCmSuvway61si3ShBmEkDbBgxErHna8AdyJAcDTYwFqykiHzsZtwmA35dka67u1pF2",
  "key32": "PSP7qH6NECe827ucWTtEwTpwSFdRKXigzn4QWNfqYafizsXPpnFvwfr1yULpssjW1WTqGYfgZ3GmnM8jL24uZhZ",
  "key33": "5dSVeMoGBiwzJPHfPvzD8VuykPsc1jnLyeC68hLN1Yn85Y1RbhNoKMEZVKhHFnn3r3QunXSCqdUYfk78jM7ss5Sp",
  "key34": "5mfNkmizHqbDqJKDso2MuAfUuCu9WBJAFUX4X4Qevt3fT464yc12KgqamTw1f3zUJr1nv2UVmR5sNm4gFtej3p21",
  "key35": "4EegYj9QBuAUsvQoWMtdEBjpJpci35ZT5Qia2h1CwRRSpBwtLKipSHvSXE7JeScizNWbd7Ad8gq5QuetJKX1433K",
  "key36": "5baPuaPjL9paMjBGPuZodWEoV4QXrrQhqifGQiKNyUhsVgdEgptPp6JL4UwEuTa7ALCRsYELQ33WSSB8zp8EBFfj",
  "key37": "5bdj5DHkrV8Vb1RFfYSCcbsTDarhST8zvtdpS2gpnEkvix8mvLUwSY8PWPMjaXJfDppJCp9xybLwLXtVWZxKgHZu",
  "key38": "2aCHEVjcm3uizw35oZXQXb8J17Bb1CD96VohKv5uVSqzixYrnKLXiDHxHXprj24Ny9mm6VQ4XyUaPaERJxge5nns",
  "key39": "FZmLRdnSWpaSMCXyguVELrxQebMnCC1RngyDVPagYoxhoA3KeZ88q5t9DPpKeUnBJWkLeFoBzEZ6tMojwPpYv2i",
  "key40": "o28L1mtDoThmR5L146diifRPzQ1bDtpXbSZ67XGzbb3MfT98M6CQ1Yi2EtdB7e6JcczVwK1omGreM52J96dvreb",
  "key41": "2xDKM2cp3ng2KtonNRsqrHKfV1fqrEJAhXhhsmbZJBvcF6YRjKa67ibPKjJdBtMm6r4syaarz6ne2guTK4fohkD4"
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
