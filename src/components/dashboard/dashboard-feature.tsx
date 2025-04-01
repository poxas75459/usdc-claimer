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
    "3GKtTAh13zWHEf3DEMeMdxcPNJZeNsw9nzfYYLBzoqtTrNQsyAuPtmjBVnwj7deAfS5yBNTAV6f6aGgGXuvZxWR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzLYQU8rNCLWNqo73NvpqyigkpqWgCPfXqoGBiY4rYNZtMyFJBWMeWtQpnqkRTeHdGaPiPewAbrBmQTsXEVGMq5",
  "key1": "5P7sNRDYQfNqWibBpWtL2LKLFa5v5xBqhS2Z5TMHZ8xQPiXqKgZnaPNjXi6dAvU8WVycRSRrAa1sqsjQDE2wdPdG",
  "key2": "5guuhNcX2WtFYrAqZ5JQfKJAT3dPeyBJLnZWwgbHTYvKcAHb8Z9Bq2VSECQBZ2X7sbXr5a7mZjhBnUu6cJS1zHGY",
  "key3": "4zxDw9KWLaPFLWc6Yep3RJ3uKb9fAR5p1QSgXaUVvbogR15tMytNuQbPRxqgy2UsHqhZ3o8KJmAp19dY1PGkvgJS",
  "key4": "3zxPsyeED5nUHs3xWjzdMswexkz3msGrJSmevN5vmq2FaKDs2AzA2us1fAGfdBosx1H7jZvKsseRJaPvM2ZjhFuP",
  "key5": "2XVtE4srqwCrsjgNaBYG9fLDn45REaE5AKcY3vLL1fnByVK39WCMdXsojhKXyCfovkCL41EjDMvz38oApzMS7Djb",
  "key6": "5MDUvwXDg4fys5Xo33wXHJPy9RFHdGzJsfHDUPmfeWyZ6nQj3EhAwsjZwrHo7ZYiQe4D2qVRAuiAhRqQxpMk4239",
  "key7": "2smLuBdLLYLsb1td6mjrPJvp9cNUJcoVq4X77gFoT6q57US9RGmBTeyLuXohvMHfzor5XnqP5sJHBfFw7eA6iQCJ",
  "key8": "4jUyeBSWLr9B8c3zsXHBXwhNKX9o7JRYEXXVD4Edg24vYGtAVvNiwyaxjZVRFqag4uSsdTfyAEH9heXcyDJG9BX8",
  "key9": "36XrkqiKbpymei3DzaakekStaLStMW85D9xReH3UJaEUAaLBxWM1jkCCKwXewxQdQieyVhS4TYv9K2xcgHTVkVDX",
  "key10": "38DBVxq9QdjmQHWZkGsJsD2f5c2YuHFg1Lds23epmuPckoYzYKsNjcN9iGbEgKLCgmDzSZBLXHvb81QfviU1Hv5j",
  "key11": "5cTfHYYJy6ZLjbbj5c2NoFmhCJfNbCvc45tW7deJgkv6ZyEATL2abUn7qQNrPCC1NxjvvJpeBffuhbz4TkShJQVE",
  "key12": "49oLZCmEXZ6jjtJhbujGiWZKiXmZ8FQkT2wRaE1zETMmCYWzntmswzsvKes92KrPcWhcmTE5hWb8qhtghZT682nZ",
  "key13": "54S3DEuK2TtVN1ixMzhqLbGcqW7DPCkm18Joq8gYamoEAkBGEh94xv62BGHWBPt7rFpuwuW11xwMNUdpYLw6QfBf",
  "key14": "32ycGfPx56M7anpyuVbjZJXQEDbFGsXxszVEv5nJ3kr3UcbdLKbfC2EntqA2WbFLHTLrGT7gpkEqUhCuit7gdSTY",
  "key15": "5ULAxTDScBuKdtnJVxi4jHBTJSmPWPF8a9K2b18iqoWjjVPk8kS74aNfGMhFRP62QKjF7J3roPHZYDnHTd4n9P4e",
  "key16": "316jAnaX8RRAs5GDfuib6sP11uj99NZqCpKP7XGDmovCzPm4jqVZokrtzyWpwpgpn4h6WcmTW8KAP6JBNwYMobWz",
  "key17": "4Mx5XVauEh7vCpkupJfX1YeedfU3CGtVcTwGZ2JEskdVhZW4ib7eMEdJfsC5KWoeMVtRcEe33wsnfVm5UNpk9qAf",
  "key18": "4FCFaBNinpHpWM3hdtuhhQ1Er2uZnr7hUVhcWK6xN5YaAH7noBLrAtEdyBMioCU6FRtehzEiRU5VU9JobeWYxAFg",
  "key19": "4UZ1aLtPcWMLJva6Mq9Lsw5BFrmoAmx1Fb3hsCEZ4wKseVu4msyyiTQekU3h7PdPiKxfhSWh9eDuNhDpiW7M7yb1",
  "key20": "4MJAb1VFiUdUBhmXrt3ZqsKsZQcC9UK3ec9asoP3Rro8HYenX3DZJADT8tVKgkyZzzRBuy1BG8yW6eiGmJVdQRb8",
  "key21": "h8PRzVb4KDaB8PdFHh89XNaSaYaGWGa9PJZh4pCTnf61sTiGE6DSRgHRDiJKrW6F9A6yjkGHeQM6F98h72r3gFn",
  "key22": "62svBvknaKGNMCB69pU37K3YBSNEDu3EctzxAXrsF9xFc9e6wq6myS2XzsPG2pv5vDGGZfJEoyWtBkYNsq2Gt4ks",
  "key23": "2u6gdA3apLVZ4YvWdVrvgLWkweB5w38z56LXAuebhBtYGUitE3MrL3cTsja46FQzfKikvRbnX3PUDKk1MMHAmvBY",
  "key24": "2sdhbbo1WXVeyq1accGEQJ1wb6mjkQQciZJ7xFFP9ZX9JmLChS25QZU7V75523XicLtDVaWG2YJgXmXTSbFutQFw",
  "key25": "4QKkbFPMzhSkiaXYuREMw6F31vbmGJnXpMjDaEGXHa5AMpQnkmr7LwSsx7JL8Qpw4aoug2TkVRshnhctDJeYFZ8M",
  "key26": "4vnno1EndRFBDdWZ59r6ofJ9DeGoHhpo9HMvMxxtywgsSE4d2AeMcZubBRZkDk98vTtyGumv8WnWbCoEkJKhaazQ",
  "key27": "6MZJX9viXo6Dtv2iyB4Peq19fDxs7ArtLfUX3PuvhtJmVQD5qo1HQuHPfBCqCX14hhQHzDCs9JToETtSwWYuR2M",
  "key28": "5QJXefTbvapPqXUmnxurZVDRxk88D1ncK7AyHwUcL1kDWq89N7ywpkoktSYGW8oCV8j5GquFdwed6PtoS37vpPrf",
  "key29": "2tAQYmR8aqBS3Ue8bE8D7V9FQckP9G4FNUeHPgsqNtJYvWEFGFFe9Shpscfe3Fg4W8KY9jnyr1iWWD3PCmdYZdac"
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
