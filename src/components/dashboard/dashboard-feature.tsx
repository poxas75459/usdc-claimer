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
    "LA3dP5RxG8SpJVhhfDqao8jpJQX5EEPMYhcbgh1F86gPtH2QXurR1R6EtbF1ZTMkgoMDbCTsxmomngsqU1sZuSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EZRSoAL8x5EmJbTcr7k3jweqwwmfreNQ7n59GWr26H8baw2fXTs4k2DjbM3KJrQMFTPZi53a6avcrjeTPRsFyAo",
  "key1": "3HUpFxsrh2cd8HH4rNsYBQZRigPbJwwzuAUdJaAXuaDMummrJDc73DaSSm8kxP89SP7AQBSWNhZYBXVGP1h4G8gF",
  "key2": "2vf9nNfULCN5WgQrbBmEn2YsKqXNnJ6iTSrjwQdmok7BtLyJW6npPEuFFK5TuooAzTc7dhxJuXo4YmGAP2Gf3Cp7",
  "key3": "57CCkPf5JiRGEKDoPTW2dUoS581joSwojvgXmiQRzCiBL4CsiwrRAoLZSeHh9Q4gfZHLzc9xtFrKBRtLJsSqdNiV",
  "key4": "51WMmAmLSKrz6GxbZbv237ihHaecmUStfh3jyebHfya9X6HreWLADoef9KzY2WBYU1VQd9FwLTRMY33XmuQZXGyQ",
  "key5": "3cUREXKXAkdaKE7GfJjoNwfCpzp6gtuahGCu232y5xmq4MQCxounwURMaGNSDp4VZAs73j1rqRd2hqgZa5EuXjVr",
  "key6": "5LX73vAwTMkywc2gWGiVjBq4bQ2VE4FmB9t6j1FnTPxwTBXe5yRUy24CiJpNMNAEz524ai8cj78NjCUrBATSo6H3",
  "key7": "3obhFETTLmiZoSxCdhXGfkVvN2CLtvNdNcQ7noiZc3rJdph1cff6a4GMFVGZof2DxvcNJcFCN2kmCKyzxEFqwrtN",
  "key8": "5mtMfGc6f4tsFQqoPMa4hHVAzofk5RxYcwqS1YjwzHvYtex4b1Xm2MX164ALtLq8C81SZwREWgQibdtQBtJ2pjEz",
  "key9": "2uQerYEPNTQD9qngHi3e7qS6aTDfWtna2sEJKgJcg9ZzhmwFUzhgW53Gq5eFq8RUXa2RqPFDZiLJs1nPqpgWT5Wd",
  "key10": "CqfPQqG4fstgQGw1HL3bzU5jBkQgQ6HTwgkTyhYxogeuZKfn7jEq7yjP3y1KMLSEtY6LCXypCe1hF3vwmFdePBp",
  "key11": "2FZTZXZoo8THStgtA5ZF6hsfAxGhoM2JnPwd7QU3VhN4mnKR6zYFGWvFYTBxyZpwbtVUCpLjw3YKwUEeKV8z8gex",
  "key12": "4i5mnHH3pRUxZWaUwp2xL2gEnaxqTTG7w5MHKjpbNqdshYFUsJfKoh8pSjbz3qWnMjdtCDTpkod6fi4z52RpRyix",
  "key13": "2mAHQo8xN8MYekjfiLM1fQ5UKRne7HhBRLg1X3qaG52pgcwFCeh5TePC5bp6moxyxjvPgzTw7yjWaUdg81YjHwtF",
  "key14": "67dZVBaCHYbWYWpfDj7R7b7DthK51uZkVineyHKvViVActKYiDeBnScAtfiAYmaWbWZuM4qfDFujyJ9VUHEcxSZq",
  "key15": "2gH4wf5sZHr7PywPnm6YRSnM3rQLi3qSdopcAwmT2Rd6V7xkG5numHZ2z7PhzuyuLN7SM3rDDQKj5yedCMdM4cK6",
  "key16": "2kmsBK2mRyhAwgiq7tryaXRXsJyDF6HjBM6zQG1yEX2TuoihZLNB98suCAfnStpwsvbuzRGeSgsKaLsFHF4K42ew",
  "key17": "61jjNDxqLx82enAVYfhV8Nv9hFoCnd2xontX855H88szMDK3GStpriAmX2aM79MWAR7rshyxh6Fhf9PuGunPrtAh",
  "key18": "4zEhqqmdfMP5J47chfrCCB5uk3XeMHPHPUzJ6JPvnnA998ReFoSfe6mvbxH13YbyBgxfAhudNZ4ynevAmmJFTovM",
  "key19": "w8gXDw3VrQjmEzuaUGJo1jmA1XcHM7hsHvamSzS2zm35Yk3oBB5rX43rwYfK8nK72uJE4KQWVACHU5ouHpDq7us",
  "key20": "2jq9oN3pLiDRJYeyYsB2Pta4XGMKKCE1Q1LCo7qwvQoaSWDWPb2FEZrnqcNNNUgwC6PFVwoSYXUxM6vPHz8ro1Ka",
  "key21": "3RyAW3bRoBdKhavpyoeV2spiVxjHncNYiVmf1dZWgWxS2h5eb5GMPrEeQq9ymCGk3KpCxL422peUNxCogp7Ffdrs",
  "key22": "2LGA1QTwBbGQzPE2vUa7NBAtw3wLnkdsrJuRPGNrByeankEazPdwcZoVJ7NMgETXcrty2qRuNCAuhHKBfYG8GneZ",
  "key23": "6637iCocAA9rHBAvLP6JZZg9sMRbD7KHWmGnN8g4amQ7i1emqzR5G95PqpfrZa2fU9dnWJmVwmB1MZcNTabozYki",
  "key24": "47QzX4LzjpYCCPirCLw7CdxzNuumL8Fph8EmpAhw1eFxsC4DUJhuXgkE9hFm8hVSuYD1y4iPL1zXvsbfzLKyS8vv",
  "key25": "DLGLKo1tifobrX8b4apn7i8XfZMkkyUjEGC3VFRtM5xizV6BPGBqJHw12eHnGPf8DSQNi3fArhQvEgePRBnLF4G",
  "key26": "5takkphsm9bpMGobs9hc3vH9iMoFDEG4id9p99wcyBdExArPTHYPZVnhpMtivDSqni6UH5UmRxjNXvwM2U94A9Kn",
  "key27": "3kFt92vgPQxcoi8bcv7orde4f3V7RV7LzAxHXNN2nP2uQwfnkJvFgXYoqqjMD8dBBeBSsG8o4jMfVb1Az1xseM5S",
  "key28": "3PHubbdL2J9xVyiqdpf13t7MVsz6UKaoPutZjKGy4LNKE3sXCbX8EDbyYUhVDMLB9GGk3VpSFm7A2LFfP1wDuHwB",
  "key29": "2R4uhfC8r3nRr7SLEXDmhpU2FBGFStURwDP5kxQDV5YDuriU36tvpeHzXGCGKmT47e8dSrajqUT9FsTxLfnmq7Ki",
  "key30": "hFeQgD2BNFTKDtQsvtVtyfUY6gas8Vh87xvofEZXXGYM7o27hwr8wteWrG5bYppFp3XJuicdGkThkwUAmmBdGWB",
  "key31": "5VrugRw8ejHvMNapSmPm4nyGBnzjLcaGn5Frdr5bBmYSUU9jeemFXG7G2Z2tk7et6cFCHSDE9u7zj4DiBk1zxLX8",
  "key32": "4bWvpCZqZvukygguGJaj8SJjdoRVeQNRRew7TQNRF5MqqJ9iYzJD4FxypkfbvwENmvoVzTJVqzVYijaasVU8tPeC",
  "key33": "5AChHLQtKAHjU3c7wm5Q4GR8AHhiUNNwdkqwhF1VkvdULnafS3iSuSeecZNigNwSAKEiEFymfCEHF26n84cZ6qMX",
  "key34": "2yvjFpw6FTuuqGu9pcDSEcmWXhpGYGsWDrnK3j9oi4UP3iHH9rMbLSnSnbRTTRDLWMUjz6GkxYBh2KGwMvfTZres",
  "key35": "4nfD9gZVw7NoJgwWaH9PGJs5SfnWQVpectLYjTQPBkFkxjfPC7ZDXTrgvu6c7y7MhrBC5MkXZHPWzXFAzT7EtR8m",
  "key36": "3e2RJfKhPy6UoXMSPYCJiEK3Sc6eQ8HXjTspgL46baNirWHiMN2n8UxVLv34hDpL3qeZ5iGhLWTNSC2XxfJ3Zr2J",
  "key37": "4F8t3kBcaiP7j2Pwr9UgqaELBPhkraLvYMq3DboK9CDhM1VBKx6SMHvsm8YkJJ6PSJoUQqUE3BnjnakToudSU4TE",
  "key38": "53YzoUtBuz4eWuPbW1LQDt1waipwBskgKvQ9FYPiTtxWGY3KEg2P6DaXAZMBmjjKxD9PRsvkd9AVpzaesGrj3pDi",
  "key39": "3z97QHRFJ69HQ7VLoCwFjkiDfbdHmNZXDNftSBrpZXD76boh8waMLCCpWLZHxdy5yUayCTmbgvQowVARuK9KcvtM",
  "key40": "3HGjsoJP6xRWNa9RVWqMgvgjmoMukhFqkVQ2ygsK67CJGUvWag8KLQidn9YYQ5MUoDxzDD9UPzqP5X8U6zHS7mhA",
  "key41": "2VR3U7Z8FV2VSAKHSGMRBWzxye1sgXvEvKZGrDnGUHjUVxSBDdZxdqXnpyRDpXqnVWgmUiVQn3qkQn3sFNcRkcDh",
  "key42": "3LzReikC5nUDVwFwCsveduVwrCSGFtxgXSK6f9SMqaXupjgMqME7FzxUtx7D8cMoco6iqU2B24xArS76wtvQX7Qk",
  "key43": "5T9bk2mZXYn1CCbtagwpeNWxE87vS9QuC1N3WQQaErTY3CM2cZVfCkQtTuUtztW9pi6FjPxL22wHsRebc92wUYun",
  "key44": "3S9xwv4EfbDoGtptnLm8uAmZu413oJPoCv1dNvERCuqEoW7jekLd1TQ8XLw522LpCNWD5b5aJFa4QUcdqu2JzNys",
  "key45": "Eb4NAfhXyvPLKyWomrA55c5uDDWrBFiVmT9eBoz3bDujg3Rzw4tJbxbpZSbkMRSJAD6W6NstgHJ8BRVCAYMeAYY"
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
