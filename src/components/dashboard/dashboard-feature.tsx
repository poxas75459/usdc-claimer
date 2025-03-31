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
    "2bgRwL6D4BU23DUwPfxitXLbL9kWq32ZaJvGwGnZNhi5y9XhvDPz2NgHLr7XrGsyQBsYE71hw9MeWHD27XBAHMmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvNq7nST7ZGs2BmU6JaGnpk9sJRtLiHtpeACssCUPvJhH7hPw4C1mFpSbYuGtLu2cRdq82DuhsL7GKLbJuVzjo6",
  "key1": "5D5JA2v5X2GySJLWs1QtHFpidLqHBZtxjMvGgYGL65KJkErYS4rBMuWVC77j2Sc1jGZPGGwotmMq8qbD1gZv7264",
  "key2": "5BFBWYT4garYxu9VXNd8cg2CJE6LWD7DJ1bSNoe9ahqSmjPWYYuBhWm6KfmqCR64Ks5Ndtuu3BZoYKEcxsEbUj3w",
  "key3": "2k3HP4dvBcVUY34rHeRrxYnqWFxP5ArnUfYmVJCV97bEG9TLaDGYScGvLZzQgTeZCiknFhVato6LsePcyhSDY8QH",
  "key4": "CWZVM77y3PFuxaUQ7UUXHXVEL6D7LXA15MpevqoTQXs93B8QuAZTM9tNWQH5k928vLd1y7MqMcinXrAjbNCBkWE",
  "key5": "5UaWYRkwSmnhv69GVrKSuduNg3pNRKbJTt47mmtoGutdBvYWBnc8X1i1r6ZaEMvZ8dRoDAzA6LuptUcZrpyVUHaC",
  "key6": "3eHqRpjmsGz3JUFX7MuYqsS21ACvxhYoHNxr366DDfUpEsEJmS4ECYAAc3hwtxTGSPNZrjs8VxCBZnUUpSKkN7pk",
  "key7": "4uyQeu1k92eDDF4nDpfXeXVYfLoMRtgWFkn7s9tHb5RdGCvjTQeWu3YYg35ue3KNA8t6zXq3EQ7RgQL3CJeB3Kow",
  "key8": "5vAaarubu5HmrWRfHKLMTH5R2YdXhYqYijaA6VYYrdchn1oX7tgr27TCKmja9pm54134hKWUVfUjFu73GUuijEeL",
  "key9": "m9jvja92UmjicQfehhw7Cjx1dzgRkWvf5Lr4cgxUpRwsS4HcpZuiGuRYj4o3e6GYjnEJeVBTtSVagz6GdRHrS8N",
  "key10": "5pzcV65VmqdQe3odpMM2pyJhmhVJazmeTpdtjXEgzjf9KjJ7Etrb6J55kBMVax7Wk2oyYEPE5KBNgTCy24r9aYT9",
  "key11": "tscg9LkTdhLXX3g7UGssKYxtmWDnTFRSx2oWU5g5qQ9KS16fz9dVr7SmYCZevWzDxDdjHWdg6ygt7tSkSGjPann",
  "key12": "4hvyQK9xzrmFqfZ3ZfJhBPhSuTvHAbqLfnDWb9rMeZ2vokjk6fEw679BhE8pKphx3fWiaUW3UMkW8wKRTj2xLtoX",
  "key13": "4RRYyiisQGAoCyC9FN1rceq33GyU6EbsoxdyAqZecir6VcvbLvLyeqbCpGxjHtCWGvBP2LQg1gSDsKy3t2EDE78X",
  "key14": "4rodt1f3NMPNWUdsdQXv4mcRBkxW8zu49eiTJ6kWbJcUMmgCfnQMaDfLi9eHwUTUmdR2csL4Nh75FHZoiBEf6VF8",
  "key15": "vPj8VDmm2Yk3HHCQTJW7n9PY6VSvwLaWSNDvYVfPBA2wCEEWvjAzC6DxBNo98gQrfHh719Lc3FG7u4nrLvdTHAz",
  "key16": "3ofxvRV6Esnr53h5ZueoFdUC8cFHc4ScJb7WRvAvAxGtuX8G4MvxSuZ8kFCnAFJXJXja1dcUNLmNFajxwBR5ZcP",
  "key17": "4mFr5Wprr6aeRMMsb4bt7yDfxmzNKuuiW19VW5NQGtNCKrsZGW9cgAEFUF4pNm6n1e8payfSxM1mX6rxmPvyfox4",
  "key18": "5QNN3DcbgAa6gcGE6xPkfnaxGPo4mqhQLWTbBzGoUJaji4wtnz4RjX247PjrFEzjijkmNeyBTxf8EbgRhgxonkuX",
  "key19": "AupHngFis7w6tzmFodTSHXwoqL9o1mK66HLbnxbwGJ9A2qnEX71NkS79jDwyt2oGhRjobgrNYi2MsZ3eaihbbM3",
  "key20": "VGvLDn1iXvzfRVVUnW2uvyKenGwSgczg1ANjL2kvJHg2aDNadRACHfAqwMTrsRvQuehp9BnYtPdD6RdRBYJURGq",
  "key21": "4DLHZHswWEcmcxis3moPHuYeLRCRRacjYkyUVzQ7yAsPNcHXuKh2dmMDEBf2LmKSyejKXCLxvpLjDLmmAwHH3zNZ",
  "key22": "29ynzuSnoF23BkJ7CLeCy9m3yGR6MQfUMqXLceLaUVYLKaUUWHAXLm4SeHKVB8BGpHyxX7Sv84xtzskYV7FjtPhv",
  "key23": "4ZkCcQTqF4BwP9hQTeDH29NbpHNszHize3f9qvWDNNwt83LVSdZqXViidvLHBnn2wbfZu7QmATTbfdFesEfdiU6U",
  "key24": "5EEeEA1E61gVesmi7L7g54ooSCKp6oVnDtQUDP3H5TUK4e6d9yaNhKDZrq1EWjbwkrW3kcrn2yMPQVKJE1jBAvPM",
  "key25": "2Ntu1jbkReMbWhzLX4RCYwVzekb734siD2poadFppjqtd9yyyjWDGFqwmLXptojwAe59JnVsK2m6S8hh1WbQgtBx",
  "key26": "2AhXDSbqjtUcyBvL1re4hGXBAWwEaAZUan5m68W63DxKgmBFafA8Lx6oCCaXa72hLZGTL6mbTsK47PQ6XashXzBG",
  "key27": "2nLXKuDk1oPCeHQTJhMANGbVf6MREYS6VJaRJELhRcAeFnnoFNckihiF1sqiBqjR7WKyuafNnF1R1nph6dnBGcu8",
  "key28": "3HfVryWX3xVeA5AB95DcGAqycQEi54PSaTbYQytVhHGCwHPVsbjdyhNSrip78jNNoTPdkeypHFP1qBvjakUTZgSa",
  "key29": "3g2szpVgTZwnd5weugx8WaMZZjbrLnPPuTu6FJ8XyjDbGWxtEN9EQEfBedgV57CcHNLsFcVfamK5HAt3G4Vppvq6",
  "key30": "3FxWyYSAFRbqjae2nktyBTUrsWxj2oJRFxYXXRPmABVaXcB51HnDNScGfVCx34odPNkEhEwaQecLA2ZT9Fg2Nt5V",
  "key31": "325saBgBoWv3ErPVVrksx1bn7L2ieM3GBZxXX249A8xnLd5iX6C7t2NMmN8gHw9cKwU2FLvsrjRcWFtyFuMJVAzn",
  "key32": "3gv1qKbemncMcRJn7NQWd6g84nekGrVhfRPFqo2KVcp8KWkk3x8TCtAP4kFUjgjgWqN9yG8xcTwyYnEWVa99HALx",
  "key33": "3XTtQuza1DybUmdtr3ARasQD3RfqkH1Sf1vnh6A7QhK7EMPcqobMYkc4YtprTBnoci3ZKaQrdRpzaGBGuayXcZsj",
  "key34": "4m71MrDgRHBVhVFc9LNNBjJJBLoiDjU6iYpUuKzZ7MvdB6LEDcxh61jEm47FH4nKnAevyCY87T8gYPHMH1aQu2uJ",
  "key35": "46rdrb5eogQH7gssRPJA1XToXxxNTabmBy5cpycEvps4R2wyZv856cZf1k9MU6kPfs4UCBQ4utpCu598XwfBVinD",
  "key36": "yjoQfKUuh5KJ4G7wngDir7q2zyB8c1NLrm35ukkyMCxrFt2Zo1q97Ft4xcafRTFAsqzXHHMzDzFX44mQ2x8Sito",
  "key37": "5d6HmCF1TVtwkP3BdpdmQ4ULY9WnfTpYYZPbvskL2dyoFinE4J6CJnQzqFpNgjAXCgTfb1VYo5azHpXHyn4yaK9D",
  "key38": "5PAvjxiqgbv9XgU73BQaJhfTvdgiidMCWRRKnCY7WJ4MuYqakAFjSXJJXrxH1qLuGWD2gjr2VE79Kwr3aksnBwRJ",
  "key39": "5gpMN5MQDCSqBF6iBVTHmvAD7oPrmne6hCvJvfXPV3RAsrQa5jzZWrwoAjsXvWkrA3ZdswvRJsr2UsqxcERjEPRN",
  "key40": "2AFTKRskTWKibCzjZHH9f27jCzdVU7brcGScB8UqFdGXSy8YAiv6N2BV2RpmQnck5vAdqgdLL7bHSzwBgJg3Hur8",
  "key41": "vZry4XBSC2vZWqtbq9Gos1mZLo6cgrcdDbVva3XKp7CFZPxXxRsgG9YePpbpXMZcxXMHwXfbpUs9j2gE9xvvfN4",
  "key42": "5VeQfpc3vV8WJ1AEdugu7oNk1uZKvq4NXyaD6ARxNPxfq8RBsoKfyhFhZKpRzEVdHbhmZcifmPrwnWhNpM27UDpV",
  "key43": "283cKHmbUn7ZpkWzfuPpkoha8VXMgDNxC2HYVr1yNsADPmSR4dNMeAu7FAbXFaVs9mNMejYuZyZB6caoFbbeLks7"
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
