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
    "4xh7q7u5hrwvxker3HLTUFgScAcMr1Lut7SsiDejMyc1DGH7t7jsgcgML7yxs1uToznrFV48Pd3Bo18SLQSAnJQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLVzr37qF2bQzZexkpJKKZdaD4QjrtWU5TMEu7RmyDT96LwZvna6FJzyzJHHLjqYbyYMpxX6tpS7axTDUXGN5Cm",
  "key1": "3dusHYKyjqwcSE9fr4peGRPQiYUYn1Hbn4H5FAhR1Tg1r97KAaCd54HPQHu81Wbm8cBGDk8WMpUgSeYt6ou66gNr",
  "key2": "4RKAteRK18vMpo9DoeDqi8eRaRRLWXnwgBQ5hf6PGKQaEM2XRjaD9AmxeKUFdU2MFY2hVbxkGi9qFop7eCCGQUfT",
  "key3": "2uu3F2266UMGBAR4zsnLY8CMKk8ev78eX593kvQn3Q3zVU8JCQSiYbV2dq9VKmALbMwMzdybhxh58wMiy5JMpfef",
  "key4": "4xCAGdGbgMazDVZyeGorJATYJWZ85KWHHkb55FpAhiZWB1wpR4X22mPyXogSQCFUeSGVVNTc6tPGB76SXKjw52G3",
  "key5": "iGCTqa3KqbrsToduLevDPPtPjmH3kpHn65VszbuCbvroPHdKvJCKBhxryK1pzURTc344iMyy6VwdG5XwegfE7YZ",
  "key6": "4a923CZQxkyWPaZPbDpW4Mcq6FVUZjnnh37nrbviq2zUMF9AwmS2efrRGrKGjHEvrVkZLqamSdWutd6ugvFqu8xN",
  "key7": "BA6wZYKwG8Fq12wqN1gGs5HG26PZPJMYeuJRwL7u8uCHoNTgk9vqSLVnZistjj2xYG3t16zLiUmarT2ReiMNMv6",
  "key8": "iTKSZhcsiZ27nw2V97vMvY4LfQrkgE3Ls4yvCiEWFGjJhqDsrsBZzEHMCgzFkbVYCHYFzKW1rarYD2SdTYgnyo7",
  "key9": "5dvNoASC8yDpq7VhpJAb348b8ACbWucHauTLBGJF39G6ihPcpk4KtnKKYeizw2SpXXPvv5M3nVu1yaJKibWHn4N1",
  "key10": "5NvN5PjTc3znMW1m9qCXe5d8eiXGeP5TUJiadgjJ9k4mvgBwbLe8xX4Fu6TZSzirMdm5NPGsCEMGiUTAwke9fNzo",
  "key11": "5vCRnPNTgsnFCSi1HGpaTDiQKABi4fJMDWZG4GNeSrEcUf29SH5dWiGtbtipN7jk43pj63fr5oP93x3MeAx2oYBN",
  "key12": "59bQXWBpHzMCiTPwNoq7Jn1p32U9Uwc7Ab9MFXBwzBWtR28qaVAowSwBF1ugXTsytuYt1fhGCgbPdsddyBu54Woi",
  "key13": "gGCYGNXkzSLYtNXpRmmUknv9qTkZsvEgT9QyoFxyz61pj5uGju1auyTnVinTuQ5FXM6cvCZbdQMfngHzacvrU21",
  "key14": "tj38E6ohzmJp4Xb51L1passwXNtomWvWNViDNDkiFzprSpDsiBwPLSJanG3EWMXKrmBioUud1iv8K951eg5xRVf",
  "key15": "93vQ9TBUDtSqr3SYypeZymWpXbWgQYn4gYqRCFwZh5ZFj2P32gJA3ApMecorTgHjkjzq8kdAdMr2Voz5QdVA4oi",
  "key16": "4XzE59CFVTXF4oFzQ3pzDeJU1JVbZi5Y2MTidMDHT5XG7jmrupRPiQ3udbzgJr9rhkUwdsyBTkyip2qZDVEuMyQ2",
  "key17": "2ymx5rHAwMxvPztWA1Qgz3V45MptctRgymgMPzHcLao1fH4Gndzh5bvtfHr6N7Cb68TfJQCuGaJFwtPJmW8QXFoV",
  "key18": "283ZyTyiWXh3KdDhLuZYdhVWFA6jxsX2TV7GdUPvDe9Uwki6nrko55MJHKvdzVbjetW1Uze4aJ7u8daswcfaixdb",
  "key19": "4to4kZ6WJJTnK3iuuUsDZpYJkzA17Gyu5ig6zUDUpmAtcA2wY8BXAsCKZE9tZcfibNJiWFxrhP2Vxib1EosQwjXK",
  "key20": "4vZvTdPorG1tF5ANfgkkspo49uD4FThmsXsL3xn8a6zgKmL6dWuR3H228Y1DYe2yoMotyunJNiayoyFSL53ZBvV1",
  "key21": "3VPgo4XHfydfPkKSqLG1aVcdojk24rFv7gDxVycwX1BW65e7sXLYVWKfK9Dem4zuESq23GBpkosmcLvxXWek79bY",
  "key22": "2YYPsgdwmHSY1tgCUZmm5MJ13MUHfEaprmAmBw1dXAf8qdftqVXu2UsHdzzJmoT3oUoJC5U9BFQ9BkHrTVUzQByw",
  "key23": "33D6CoBPQqCtitNP58DqxMRqkZtF1FUGBu23nx5X1HRti2jLQ18PBppu5vm5gVs24mSQkhdKaHGJkePo1pwvTGbE",
  "key24": "e7A8hHbm52Qng6e2kEPexAdGMKUrCWaWPiXb3bxF73p4QR5Nwu4455d6qXbAXB3CqeLvrg6VpLuYcduaE9p4uga",
  "key25": "5z3LAeEhdKZjDKeSBbofPqRGQ8qqm6UeMVjncZx5TYKtvgTDPgq6XqjXqveT3oeyvtgE1dqCuaVXgfNecPSdkaR",
  "key26": "Yk9jAQCmXNxmHV8xLYxPXT7KqnbkvhBnyAuCsXSXUP2BRrcke8uFhCbLR1fV1doPRSUCGXBLo67cfGgU9CFHXBm",
  "key27": "2bNsEHFJP4ZZeFP2cxBsUxJrMdrUBv9od2nVcJP13Zm5fVURy2g8qFBUekB3SHUrimwGhFh68QsraynK9nha3SjJ",
  "key28": "4hmcrq7NMZVPczgv3c3FbpmbsZ3GHKSaTXn977YZW7gNPCRfNWreqoJtL42M4b7GxBVrnntfm5JzPaWAQpLEPRib",
  "key29": "CAKHk7J9FnbLHe7KrHrJgfdgzTFzHpfetF1qVamzemYtJSafCxcL7h1Sopf2fnFMVxxcWtLZqUTNNREFTrPdoiZ",
  "key30": "4XpdCXticrZ7i8mBSF64Az6zcZvSBamqBJcekLBMjeJFchPETS3FQnDvcD5dUJ671TCExtUjJSdkcHeRoijTXdRN",
  "key31": "4t9ydcmU8vFiPpbf4mL7KuSAfvN9owdPL61yCh9nuKGm1GBiomA85oFdR2W6PKM22G7cu5Zbh72tzzaLGBim43gk"
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
