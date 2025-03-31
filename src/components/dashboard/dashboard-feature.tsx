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
    "5GaF5aopK5gjckDpuvuohQUwkNkauxjj8JQEsxz27vTYyoHUkmKYYem5jKC8vGaW3rSLKjq6Q6v4WqnpaitJbrAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPd33sfnUYajcqm7jF8zWidgmGeogRxqGrepbNa7WVrK5Gpf9DEEM47rsC3BFqvVm9TkMsC16DehuGCBKcwmZc7",
  "key1": "48Jp2SymWQ77ubc5xF8dAMAW479efuW6hj9KT8CU7FVxr75TveHTeq3pE5k36mqhhNpwgxnwysyjMtZ26Psuagxx",
  "key2": "4ui9gcAPyUn36mmnmoT3a7sXXaGB5MbKwsXCf9bqCZ5fK45bYjXrgEkPa1T2EdmJ5KWCJWNeMQa7g6T1xmHN2nhA",
  "key3": "5kSfbH1LjSFrmhFG29vFkEfH6xWsQpoeuS5v2X5x1P1i195F5W7fXjVyfwPpHP3fgAnTA1zYiaqzJzMJRY5Di9AN",
  "key4": "mvvVTJ6G4FR4KBVLawyKhX8PkMC7uCBqqeJc6y3JAXewjofZhuqdjQLaFUi3SrJg2h3NK6RsCacBPuh7ChWPcD9",
  "key5": "2Lq2hGGq6qfDGj5rHwjy82g5m8Wzh2h5GdUBS4WVcMfWaMoZBpJm8AqxkKi9QY1mopYtPgezK983LSx1GZcRcSkB",
  "key6": "5s5yyuTtoqMwxe27f3zLHMrgr1P7NXjAh7kgodsGZNXRR5XUC5stWbM4cpAvJ6rw3qFxcBFWc92chg7a5inkS4UG",
  "key7": "2sLUqPZyF8TgrkGva9cakA1qyGDPdqxSAW9z8vsGzPZRuRyJXg7BLnKHEotYuDitNg7WimhYcc6eeJb23SizZ1zq",
  "key8": "5nPY7H6rvaeg4hhbn44a8y7W6vDdz3eswUBU5FU6gFCnn5zdUrAFVrN6AmLAshg8duKYKXWKToWvuMmRy8cvTegN",
  "key9": "22j36wYekn3YrSM7JwYLg6SJaUDxMvSNfUGfDyzZFRz3YkuT3regC6FnUPCkiec7n7btTKQt1tAHKTzfMqybgSCH",
  "key10": "3P2u2bWzz2HLByH1y77yrtJqKdXjs1VznEwjeKp5iZSe32ohjkSbdgJoqPvfsmfkJqDUnvUhM2jEdZGnFYqX3uHg",
  "key11": "5PqaXuiJJSZiCNeQBje5y8n8nrRJBCNYnULQUMcx6dFqGBWKyQeUfDKC87J9y3cTynV8kSJcsct7CrYKupkHceTH",
  "key12": "2gV2Nd65FxMwzDGU79fVdj6PieyEgEYqtjJ5oMCwMkFho63pivrf5dpqGeiGW2yjinBz3C8dpTcy6F7JjaaRp4Yu",
  "key13": "2zs37fLkMyvDVhgWS6nzuQEXiyTuz9E1k6Ru7HxnA2392hT1WnS6sBL36wH9LkTZ5PjcSBsL36R3SfT8eKD7kYcT",
  "key14": "4PnRbbniCipkLrcTDtx3XiE9Zh8WEmy7xPScKaSQMRsTzPgAVwtrKMRVSjhAPePdpaC5wauQX9D7vSQsHBoQbDSM",
  "key15": "3fTaQQYbnpQY4ZEQH1eso3RhkQaAWnRbRB6dXoVB3nbcm4Z7DrVqhMgHyap8hhiXKA1n1tbZVW6FXC5ThThjjkzQ",
  "key16": "3RSV4Za85TNqhG54afsuLbm6tHttCxzXxVTxqzi3ZiP7f9GdUaaAXa7Y1oVF9Rh8MwpNQHmg3hcguapQ13miEK66",
  "key17": "5UuVWaMDBdqnxuR9Cc97VGt7xJmv6yimTU2wMa839Ps5qj9jn37n6SQxCC7rwBJCU9TcPLE1dyv2MAgazu49zpXn",
  "key18": "2MpMEeX79rBgDPkbcateNb841VhyQNeF8sjwoA5C4N5Sjy5bTb6gQd662B2W1oHnfP3HFUmtc1oMSy7mv5Phjy58",
  "key19": "3QgxRk41mfE1xDwwanCs1Jmj466zxTEpXccedXsdi6YDXYnEZ7946oP4ScJxMWTVAmErCZp6RGN94cM486bASNvA",
  "key20": "QKrRjhWYc8YmpvU31mSF48hBbryubMmuGJps6oKk6HEY3T7xS2iRRBsexj8UnxA4UamDJmYfDqvWC8tPoGDDMXL",
  "key21": "wpsvm8t9GVCtmVQDAxScY56eqFgqjW8fCHgvF9ivRMhAomwUjRZoN5fL4Yh4gMefN82Z7EUqQby286ygHnBy6xH",
  "key22": "2XykSmV9z4xe4AkDpFrQkGwPLtamVMQhc68d8Pi35qXYvt5dvSJEvhW1aXukfWpaiDj4eDgQpRkQkuSebX3ru1np",
  "key23": "hkGKBi3GGUvxtt5yPDvdXoBewiB77yhjex5a4S9PrC6vCP1U7hFWMMPxhhdDYAnsXVkEzyHegk6WQYNm3WyyeX4",
  "key24": "SEJn59G8fNdqddvbQfDK6U2tQFkUGyaNxpemw9u8mPBT7ZJQDCRE4fMcF1NxCxAqnudG52yHeLeu9z2zWJjxPAG",
  "key25": "5GRKuhgXvjR6yh71t92ZBuCcnus9SbFoYVTCqVewyejS7E1M7qNYL6haaRceP1zGJbVcbGd5T8EhmauDGCaXZ4HB",
  "key26": "2s4emx2fqhXZdXq1Fpxb7JATCPrxKq5qRX2G4BjnEvUr3PUk3ESGPvYZW2to8th62tebZpvWFo5vNP5MiMyubez3",
  "key27": "2ucPhU9G62ugZfnyeXDthhhMxfQoqbzyG4TRiHmrTUTubq6UG2xAhAkrjbeKRHzVZynMwzQFKQZpGQ1ak8KW9z5x",
  "key28": "5XEtqAqufTe6vLm1Pb88cnqjgNjVpAqrhCYXLrNgxw9L7gMoWRs1C7Fr44oRRg6SxSdUnasvgqudXprnytrvcab3",
  "key29": "3gJQpL6F877uLnpseh8gXSDQ9EdXXpPSrEMXG7nFjCyn76idS7f8XR42EyhPtNtR7oFjLewLzaRvs8Db7eR14PVd",
  "key30": "4UPBZPfH9XQbm9GuBC8hdqDwFi1Tui9aQjHZbLeSGwV2NQP7TPm9u8XdYfZsgbkJBakRUhmbq4LXMzxuM34UCG2v",
  "key31": "2JrUnc5TRKAvKdAzMz1J4EfM8H9dRjqU5KjG3ow8sv4VyKisaV1EqEQ1F6oktqHfN6m3sF2jdDMJbZjPywrC6JXp",
  "key32": "4bWEfagMZrCaggVcoLL6DpaZrUSaQSVxYrpc11caB3QXwQ4Bxpy3bDNBvXcAGnfVobwvXuZ94EYG6eu9Rj1tUfG1",
  "key33": "iZV76VLXUfwgGhxNQZA6xYZZ3FuQmh8VxJS3aNQj8TdqnZqqceu8RpmyZ72ZnoCoQmiJZPkXw1LRC9ieN7kzDvL",
  "key34": "5jYfjntwYfKKa9NjNV2UN9HF1BP2kafvywCP9b88rb1fuqBc7vWbkKAccn99RwMcSnTPPL78pH5zATMdRhwApukJ",
  "key35": "45tHQcCr245FwXn1JrkHU4QXf5tchYpo5k2f8xEVerV4WWEFTaVeWVnr1wQhyoT7oeWydjBRobDfVMemk7zy9wqN",
  "key36": "66BiD6SZ2XYVSPj2s8S6mLm8Smr5LFdcoPHVX5Nn9Yo3qn8q11Z5W1XVWeuSJFVgQWosKeJyVESqckGRy7AgRaHv",
  "key37": "3AR77c3zQTD4kdazyU3tfK2YkBxt8k4znowLFhDRnSEs8zJArYHQnENypmj6ETwLDcAAiWexWgVvG2oqdY9tk17N",
  "key38": "hDsmihz6Tj4JBPU1kLVQvyxjwoXzD2NcY8Mk9zp8GtJZ1t7sx1auK6NGDR6pvH5JvreLuyNo3QcB9jYk8dGXMHf",
  "key39": "5ZdgJCDqxMy21TawguVZ9nZRDemnk7jjEE5mpNFf4evvmCVtQbk9xo2ixBxcfZy1oiixuH7NT1bsDsQUvQcpSKm3",
  "key40": "3MpfTGnT1JbSfqFqo76UNFxH7QSJem5BVvS35vCWbrJo15U9dMEDW6dk6yHa6Z84sYXZkqbguujxFkiv5MGZ2xZ2",
  "key41": "5FZuzGFwtQzgixeBRwtid8AJPvPQfG5pRCNhVDeRRSKcG8MhgrFv6CegWdvLqESZo9dXq3fp3xE94U6hjP8Gxzuy",
  "key42": "b5NpSKArYLnEE7auwn1hnZ1E6EX8dJPbcKZynkq3tQJpiRqu9LvfN1eNhj5JtB7uqkNRpJVvEE6RrStMwirejVn",
  "key43": "2ueuPrCv7abusPNgXmQcT8GTLBpGCJaUvL4N15t892BKgbtfLM77gsXWbcwSfu6MiTNzQgt1j5QxpBRAyS1nCYNv",
  "key44": "2253aL4pYK6cXpQNSj2yoLueC7D8twjkJJXWppXoZsAccuhJhpQrph1kWJ3fX6s8XNryb9UPU9VXsHXprok16BvA",
  "key45": "4tXTy1jLpYEmZVQEhjV184C8pEtYGKoM6j3kNXCFCKkeihLjX5vhGeKhtjrH74jCxpxiRcuzvgPEhyZQneGvfdUq",
  "key46": "4q5SzV3mSXRMoSqFDpddBuxqtEcfRvDiWYGzd8h4UmQXNEMm1jsnrAfr4siQHWXwNFLbULyGpM7m9zmUfsAkFAEZ",
  "key47": "66Nb61vsRj5QFruM2itNfcGxYk4miCnTGYGn8TTuKfF31tj943fkDdGsSuDN8MXTQgsLHdj4Thja6vy2ShsrrGdi",
  "key48": "iPyocnA8jrcUNRwisntdJRUKvny2CirAqSuDE2AjBPM7ApfDg34n59e95evcSPXKXXuxvkPcy3iYEcRrk6DGPsp",
  "key49": "5y5c3Qbbmz2LzTykcaKajU8NGNdXAHg3aMSbiYM232c7GVNKioMhBojkYr3KGT367kHVwKKBbCqHzSdfcUsqhSmh"
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
