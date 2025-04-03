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
    "2gV4TXagZsykUKPFsbwJAdL2CRYSYVvHXvgqbQVgiQoFs1U5GPUqKLLBx6TP5Ny5hdBYp7ws5437JNNencCSTe5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xDeLo8ue4mL8v6Bhxu2V1UWojojdy4EaEHu7h4Z9tqpuQfF5nDjBk2YtT12qsv21rnvJ23edj2BLWsToLoEkv7g",
  "key1": "5pH4Haq51cx62XQ3QQm6sQ4vKCEMTvx8P1Dv3RDkNAQXSeAypG7JLsxN1KY5jc6SSPFxA9U8SypDUMu9VC4xMGqA",
  "key2": "5yyu9J7XmM7YLkGy2HzyLHNwGrFADYoJxLEESdo5axQ1rBc8GaaVKWRg5axVJx9uNfMNJ3QWN2H66ih1wuqykj8d",
  "key3": "5XS8PUWHf4MnHFTiNr4FZ9dZXrggbsHVPXgDj2KjBFhrszRKK4TLfi9SZCCK2nTnrLt2TWehN6iUo79uj8Kyb5iz",
  "key4": "3WebKtJe4xvM8MhRvqa2eigP2jgtAKEaWM7PeoE838Dm4AwiLzvD5dxV1jUDKrcNeUaYDqiQkq4ACZCzLydxnZJ4",
  "key5": "3CscpjnViU3b9E3vBVwwuK3dwF3Lm5SFpZaVWczKm9eqL5qHuNLPsjnCy1qfHWAwN486uv3WNnB6rPUHskcaTZXp",
  "key6": "55h2Rk1xEzoRWsqdMttppyxRSvmbV4LUiX21BVpRraLCcBpRWfAL2KDZPaeakKbKFoK4NP4N5iRL1EjFsknm9jv2",
  "key7": "GE6rMbtqK7Qybya5qBXkZyJoQicKWFsnYf25xiymoCKxnZkN7PjvJTffLfCbmjjE3fEVo1CXNFsquusGy4iLMDW",
  "key8": "4udmQgMj7gREz7YszBs6qW1FHEqhFzEPHv97K93YsJ7UDoH8fCE8uq939KKmTxZQEnajDrh3JpNaLpjmm5211Kif",
  "key9": "4z2ubEFymy3kMQWKexGaanxzTGFRVPmHkmSXqREQADR9Mz4RUduZuJh1bY2jAwey4YwFHrYtEYyjooXjpfB1kpbm",
  "key10": "3JoLfhLteFk8FdjJJEX2P5No1wPfYDjdVVzw2mG1RsWhAqSfAYM8AweTp5yUDEsHsT3BU3wiphxF2BDAC61fDqEn",
  "key11": "3HBVZic9behFJG3AvKZoGZAPGzAQqjSAC6LgyniopFRQmQu2HP7C1P8GEiQQJHm6mA8rpnDdryhroSQLgT8K9grN",
  "key12": "3xybUkNeeWQbvtfQzYzXKYfS2FHqyyh3tQdtcmwifqxgebm1C4mwhEBikiSMMErTbERDBs44ggsMZRW11mN6Tg2q",
  "key13": "jwRWhLXRdehVrLkVnqcyUPZyhDaQ4PyDN1mVtEgq8aWby3Poi3XauMtEiEZupSLsukiwbSAzs7WkJ295ytbkD9F",
  "key14": "p1kqZtEV93zVpjnW75C2idxnwERHwp9kWKvcUEWKJ4yWZZrPqTzVCPupK56qn9wbT3Cj9fAETqgqzTrjXEm3n1D",
  "key15": "4U725pYiHsJs4zrrrma3pBJAfPsb5WHd7KNLz6ZWr7EsibqsDQizbwuBfjtGiw1vcHkubtU1Fue1hrrDHYpjmG53",
  "key16": "mN4wcUJvQo5WLTPyUuayeLvdoaMc25VXtyYbqR7ve13j2M5UN2gGsQSioAUv2MYDtQ6Tf3P1sX6jidPrhGh8yTw",
  "key17": "3RrEV71jrixLJKrkkKJiX7HWVxGwnnG9nY5e4mVRziMmBBVRP12kX62W6JgrAxSrNZaGo4iu4L2WDnQqoEsroZBD",
  "key18": "3TgHCCx9HaLWGZLgbz8Qd3DVG4jzDphbsTPGB9y1syS2eaMk8pcBLLqJcYWcrvmfhbHJi4jrYDL5UXCfan4MMiic",
  "key19": "3NHB1sNDJJxtBB35EmPwKKy82FSLhemH8xMx51J5sWzembHiBRdT2LJPHzvJk8GMM6poo4cZUFEsfok77uT561MQ",
  "key20": "3xczVmBFmZZrzkorDQ4KzqJH9V5p1dqBVqYXbYXBDs4GsST8PJpJ1zGXfWPnmu3t8RQWbvYKWYj4zhH9TNLeENy5",
  "key21": "46f2BPVCERiF3sf6WaCZ7HQT438cm8rohyfjeC274Waccfuo8DBRZP2KDk9iK1C9uFgxRqHa7iqqfqkknw7qP7T6",
  "key22": "5GHyvraWAo2g1rTseo7ZhngMM1DbM2URpS26f1GzrxxHPK18fDrMPAHvideY1xGp2g8gTKYgcjhRKhumiVJHWrxf",
  "key23": "Dcqg8QYQa8F1nApiUKVCUBrUavtdSkhKMy5MKYUddJX6c3Ukx31Kt7HeWiNCJkNmKvoRfmWDLwnAvatArxqNzNL",
  "key24": "4rohuAPjNNthMRUkJ1ivArZ2jUxcfHrRaPrWqoPQkL7HAqdKxQkSbFGk3561GuRkmMChubV22tyXsegzAZVxWLWJ"
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
