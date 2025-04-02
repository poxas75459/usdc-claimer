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
    "5KUiSzZgeNp7Fh3itQgoHQXmkhKk1thT7kQg2Jmkb8jkZ478QN7KMGLCKWEX5PPgdqsgAjtAVb93xcQ9AvvVeqjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axBGDdmNSben7iWCKmNfFgXeryg5qbho6Kk2siWEJBRzAj6M9hS2AC43D9ng7E4YaBKFuqMu5Vcbd6aaiia6AEA",
  "key1": "fvN954wm1JFPY54GcoKroQMq3pRQsdgfxAhfoYqGB5NjxgQo4sTzPDfGPrZsMGxmzqv8SwPT8Sw8WxU6S4WRWpE",
  "key2": "3Dh6JwwpmkVn79dQZWqYAaU71Uvw7ZmCLn51JG1jMACbsQRMTzW2VSUcjwaM1TGE691pvPewg4Y6vf6SgSg25JRa",
  "key3": "2mmGdcVh7Eg9o4aSoJ5uSyozq9TZGeEyM4s4Cp8UgrEQ6rejxqGis1qnVydnKn9HVVNKADvexaeAi7ZZDWuiPXMS",
  "key4": "2y9hHPHmbApwFgV7kyLbP4gAq3PTSaNaj4US4v1GicLspgKmfiKR2qzpKTfFYnRsHUMKggbDPFuJWugBqB1EeaS6",
  "key5": "2wmcgEofUAJafgtf4wjrsKMmS17GQ3inTKZuQmDZ1br27A4Zivk4KRW4oxQP5ykmyTZj9EhRC1QsWRFdMQ8dzAMT",
  "key6": "4wUShS1DJY9DtvQQxMqLJi4bxhWtq29b8MpYVkuABk9CFHMLXCfCyk5NsZMHQHgmiHoKURt3kHAirdJgx1jss2HP",
  "key7": "39V3M5vNTN1b7WQLBGZLVeAW3aB9wbJXNuqzkCG7r3j6yfAHZCft6Xa7bjsTPjiyNRYpaQbSag2VpnAJxEDKG6ZQ",
  "key8": "2ztSR8qeokejGcj5Ac4qyL9aHTE3Mg822nCYsux9dVEDMHBT5CHoXs529UJwTyCP6uZEs1HESho3TkVrY4i3VpBp",
  "key9": "QS6hDYFPTWAEC519ny7bqZmZQaKWkA8BhoMm3RzxiiJFNnhta3nu4B7rXzvFd9z6iWzUtE35iNuCMd8DwPdm166",
  "key10": "2e5PqLbFicosNA88euPjcZLTwaj7bWQnp1y6Ny3RGhy2KqmPsVQbJxRcVwsHeu5uWBVdeq1jWibck5nrzPu9pqzB",
  "key11": "3YAs4EKFZmtCJSzbGr3yRwGvYxLXMFuQ29wFexsWAPAdzBtELStL78ouN2HFM9qxPizBnXEqbvz68KoPY3DqS52Z",
  "key12": "2nsK4LcPVKoKBQuSwZBWm8nSLD5i92EWbHyZQNBytAcK8qgLP6FimPApoWK7uhgsfsUGUV7PceAmwSB8VJuXJ6uL",
  "key13": "5wfhcL5MjCM7CffPQqVuXdvXuNzo5c787PZkcPGYfLNuoKaULhcuRwrt3ntMKsNBc8GDu3N8a5ZNHdhST8GLeoXN",
  "key14": "3SUWggKjkzVCgif8LbRqVMfqi7YSZVY6NKw8EVrafbhEjHVCT3dZuQGwQjBhJH2fR8soZ1Hk1MFxpBCRRkkEtXMr",
  "key15": "4y7PWh5FaM9SmsB1EztcbftVGYpyPwYGuDPvui5SXWVRApdjhQEzK2G9UcR25GTRqYPDausZ1umE1UpeDh2k74W7",
  "key16": "njCAmDenZq1HdcjoU5UovPngokFzjd1wvLaV6SXtomH1Uga1s9B51nda781vnHiNKQdAqmXUN2u8at7QMybpntT",
  "key17": "iqCy2WcY6qVEgy8GwjqLdnqoqRQ7Kw8oUQeq5Ta7eXbh2tduWFnVe9pincFjXoPJCnf1eMut8CqJsDMT7Y8aoZ4",
  "key18": "t81Qayj9KpFwHmLytiRKxe3rvWzWfDqpzzgzdiLD3DERVbspJwqY9MyGtSuFyqvWSc9RDJWZn61iynsY7HuRF1Y",
  "key19": "5ZFJBHQnpuaGNfhgChsGG9myXqoVirMuZr7iWnzhEPjxVnBKnF3xkZ2ojA3zcbrqPyNrPUYe1QqRRZZEd8nMzTm4",
  "key20": "3MUBNj8euurS8zopcPsDCB2kNCu1E5VqYb1GkqgarfgCxEv72zDEZih2U245XK7d6NGBLqECCyHgbYMDokFzLxsT",
  "key21": "2AjKsLoLYgNP48wmnWhSNEvz1ibHKpeYcD9A9mYEyTGZGbmJCWo7gighviNHEMjjBWx8Xpi6RdHMqvyWTyiCFdeD",
  "key22": "4P5qJW4Hx3zF3MYnaXseGhoNx3kkobj5rYPSEYYRpmSUX4sKv27VA6g9KXUxhjB3XNR4g4SmjyKCQJRuQ1PNKmWU",
  "key23": "2q71SsDJgorAJzFxsvCixbZUNo83KK5YTGSWG5REHEv4Ewhu76Gt9WobjmeWnr7BWm8evEoVSPCwqSYASuBz6ZEP",
  "key24": "2Ps3tzYc1SNQV68TqatNSxbRc1qZJQZoH82YcwpHFEn5VeCHX7JEdVRGgtFDYCUVWctY2Ek8wUx7nyVBEA4ZtYwr",
  "key25": "25Xqj5zN9LP4M9xoozSUoGQudnu9RnUFKx7PCoiycm4bhxE5bB893zoy1Q9B6CAb6qczUu58ScH4ccym3pjaevkp",
  "key26": "3vp9Sn2MPQfryWSn8vnW52QamqQcTw5cpGouuWaZ9DCkzjRYthcc9e888q3Wbv6jy4td2SqNjT8oMdygC831qNy5"
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
