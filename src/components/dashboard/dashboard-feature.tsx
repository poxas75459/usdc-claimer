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
    "5VLKiH8eNvPtX3s13AzYjDbdBK8Xiz6uPctFVmQs3THHhhKQpBYqDUNAsQYEgU7BhrQR5fPj9vwn31VoFyAcf29K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qb36kiDjfA7tCEhrHmSbN1Kp6fMNifDhUPmbrmL9C2rjMddKNyueRUC5J4bs7TcaDzVQoPTC8Uo66VJBAGE8Fo9",
  "key1": "3UwtFf5JnDiGmBB4PbyynacgHg4uKmxzVeZTrM2u9J3ieMHM2c9FCD6aqrGRnVuGH9mFZUm4jMnuqNkyY6wtBHFu",
  "key2": "64Tpv48mZTRuYNkUcCW4aLRxDBh7o5APbz86rVZS5uYGHFCfHUvCT1aNVr7W2F17E1jayumX6p6XN5koC5eD9mVg",
  "key3": "4UkoonUtVG4hiZZMUFwCMmmFko7brDFEvYngi3LrM1JzvHGsn8oQs6pcsABv7MS1vdEPaTj4JajTRjgnvRQDpXfa",
  "key4": "5wEpH99wFMcMK5GSMRT6cxUGQzhMpifcSTEJwfRYtL82j1R4d6QYoVH3BwZG4hNppuZoyYbEER9XPBs1ioVpAkvC",
  "key5": "5wdc2fW6wbTuYJgWoVrQfScn15vBr2pWVHwNNeBp5VvM49UEcwbzZ3yRo82MYDfdEeHg68jYXuPHEmptYXx2bKE7",
  "key6": "Wb8AEDNQMwBtamz3sLammbzom7kVyaZp4otRmQv8wGcayBvFgxsMDmsE1vT9g9pza69zmGPfp3So5Lt61fi88Yb",
  "key7": "5UtnK7W9uxnnmPEmJM2Ufr2fk3MC9u34THEyDUDZZYkE5udjV889od5QEsjbRCg6kPv4jg5tPR1grkUNeJGmJnZ1",
  "key8": "43vvUtNW3JJscUKziE9A28YTowbgV9KiCix7ziuvgJ9CeMZtY7GL2oeDzKzUb5sb1Yf39RJnuiYKPUDtF3dUgTdE",
  "key9": "2i8xx1zU2Ki895fkNJy133wnzFJNTND7t1LMZmoZGN5ATkic8txWx7AAjY7wrncUzNHJLTbvsrN6cipEsFbBp31w",
  "key10": "3p58jqrNy89KnD1whvaB1GpbmUujMkFWkfgx5E7HjeoztZ4oEX3A4Y6QVSncqxm3M1uCE7LGtFdW3rYY81EuNfMd",
  "key11": "2rDTTPfFxexEBTG5zrRW8gYADYsx8PaXbHMt4pxK82CJefXzda7t6RrdFumcMTaT8jcAm8sTo33vS6MCYT23vMAr",
  "key12": "uQ3ZLeptsQYhic7SF2WDW7ABpmMTu7NPGv5mzxifSG7UzbSQWSwZhT2T6keLhNCdnKrSNvFNvqBzGXp5UkSaidR",
  "key13": "4u3SRPkXkaDGoacxpzuBFzoPRz4PhvWhPSkHo4ML8SrZYycvnBdt56j8R4AL5qEmDTr2fqt9338nSMkXVoRzutvV",
  "key14": "3RRbgyxWdYrZ3XgSDozr9c8URNToD8N3y8zKB5R928swrq7hrgeH1jHa7h49CThKqp6cYk97DNatwPiZF6vLfWEq",
  "key15": "4KTAHt1suh2Ug67Jh9HeoiarRReRtXjxJymqjitdBm2L3nsrfVWN4DrMw7RPXfZfsZJFi4enHzxHpF8cH52SVuZK",
  "key16": "3ctkbywdWvihG16K32eBFEkx6r8xcrKnDvfL3dBZex87jccWB67JxafMdCcgMv3JC8wpobNcQPLnTHVWHCFioHYw",
  "key17": "2fuYhpvgCZo2ZtW386YRqAKKZbYDVMpfdHcHAUcx32SkbvyDy42E3yUrmzsauhR1aVjNq6ZuGRu6CRwpzdAXw7w5",
  "key18": "5DUdX5d8x1mFVxCqwDd1PRY2gkk5HsDCqA4m8mYb3xfvdBKzrZzFxahnrhTypwEkkAHWjZNiMJ6fjbepxzedDLEM",
  "key19": "Hz3S7y9BMvR12hejfKKuTmG4tU3m7yHbuvNYxuvVDDhBtMTnEb7qMSugQxPdFy6gXKaMUuGpZ3Bnw8GePsMFW9f",
  "key20": "myr9UtEf3uFRxbtQunSLvXCU58L6MZ9trJmbP18rvWga66budUjyow6gX7vDLxEAGvcevDB8WSqxqxtgaBQFY3F",
  "key21": "xxpHxbpNMYNznZN8Q5KiF2V5uNhSnDYuimUPZU5L19EEyEaY1Qu8CKbMZMhfjP3S6sHVfiyE7U7QWvfhGSHxENP",
  "key22": "4YRicvDegfSm5HQgPBNfqRR9Qf9GjAK6e1GRBQJKj6M1fGJjh8T7GWxkXB3Pc9zt1ZkGTxiVb78tHWsXSXMwyeB5",
  "key23": "556B62eFRDovtSo5QM5AafhD11Dokd7GncMcGke8bMhHoKgkycPuzRhEvtMqFDidnBCs6djnpncMd84eLjXZ5jvx",
  "key24": "2sVnMLK7EtyAKNASqHBdEwmaMjQWQHmCT74HeTtBF3aTSHjuTSMe4b1zbhLW6UsLR86KKTgLCcYMcSG7FJEJ8ycC",
  "key25": "3Ck3WMWkJBFpttTRnKN66gm2QG3ahKjGxXVHQcXYJiFDpzApyNHag5W2pGdMhguu2mUYxHXX5K6SDaPNu1ebNa5L",
  "key26": "2eSmPUxjFZhmMqwjBemgJZJkBXen3EFzYbx5xfBcWPNQeFjA8eG7YxNYPZQgMcXGvNw1bnwQQ3ABb2LDFVsictDZ",
  "key27": "5mGrs5CvvMr9U6eek2sEVrw1RHhudmWgnz4q5V2dRC2AZ5EChKcrgcDYgWmQrgTU69u8hqF8z7JdDkE7ntmutJzo",
  "key28": "5L6vtGyQVY4yFCZSZEj5Q5AZB3oj72FRW8mU5RUkoAhcit8UCjURVSt32vf6b4V18VKG3ej4aQCspk4FCtF1jHE1",
  "key29": "2uLKtyJYHsV4WPWMnSkmWGaVScN8zAXNogGStv1uYghhnxrmyjqdUWXJQcLbzCLVgRMSHb8cnSnCtScyx3Btunbh",
  "key30": "rPaN5G2YvQUFGxkBDs6RNrKNjEvkzUz6YxXXQpNzGyfUzHbzD7UyDB2AUqX45iwuSLb6MxxYZUF2FmUxV38NRmR",
  "key31": "Tq2T7sHj1ncxsEhs8CqZVgQaYvrwsPZpRUm34nyqrku8WnvsJDG93drJw3Nqj2zZJQee9QEZXXvBA4qAyUE5nTY",
  "key32": "42Fuoy6Y67bcA4bNtJgNC7JRbjcuV3Sxdk6iXHgXQeCfSyfwSQRYKb1BUH4t6KEWkMGNf923oGTsm8mXemkGWRcU",
  "key33": "5YQLv9ej7XrH4hi3ZdrGs8ZaBJU7XqVFtrazigVNgsqJa6sJ11kgkoYRA9DhQ5J7gvdtcC9HpKwedZtRtxtNSCHs",
  "key34": "2QUXWc9H4AxCJVszEPyQYCMKx8WZJnFtLZg9qj4MXWVojDFoZH6FnWy4i3PXB4W8L6aXbWrpnA9wKdtTg1YVeUfM",
  "key35": "627vgMiiKiyUvRGaBPwsm7R7xE98cPhfavz2YD5eCbVksqvbr9GuSx4Cwk76At8XKh9Q5LDFnN71f4v3z5vNvMqQ",
  "key36": "3tocF7DxpecKd377vXdzxxCWDGsfszisbx8okgCMyqWuKG2sQwVzEWEwpMf4RtxgceUFjXKUQ3HFaHEuHTnfjn4n",
  "key37": "5NxT3j8mgNbFRLijy7ZZvma7nARdMJz4QF1MUKG5sZ38smuDDGFSj4uNzsY8BPzXmAALd8NHDA4ZAkEkzTyQg4VT",
  "key38": "2C8Pky7bfiLw85iZUsnWbXkpfL6ZB58Vfiy8GpgXhQNEvnEBb4JupsD21rZ1TanpH7kshVgRVG9LwszzJUZcuusH",
  "key39": "3z1vjeMGw9WMUwovUacYSRrVTdkhC4GxSCt5pxWvgHkNbLJV9qcNCQntQ6d2WijMSX4YBq6ck9G2QF81gY2QTbSQ"
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
