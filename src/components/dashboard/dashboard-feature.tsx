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
    "2AKCMAZgVrgscDhYQw5NjifY6taew8RYGc1JyVbqLmgeXboDgHP57bRFkMKVwE3J8VgTCzDMJkeYD19N4jd7BxT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qz4FHWC7R1GkXywrMpr3nqNnzieu68TH69nmLkJxomSEj3XB4L2pmRT5ZrLuNB2d6DNXuQn6D3etN4VdWAHSB6Q",
  "key1": "5FzkLehXw38N6c9DxyzPPaAsG2baagxNWMz9gS3uPYd7ykvEFMob5uDZ7sX584hBNbaJzAsbRrC5jLgLJLMLUACH",
  "key2": "2knsiR4j3nxTz3acATw6rT9hf87rErBoodStT6GbJbNptaPQ6WRBLzRHBHqMRasHndKiCqXaUYGXjuEKHxibfe1A",
  "key3": "LMdT4ohwzQEirA9QLRmKKj8LMykUABVnTGkyUC74bYCq1BHmn7Q6ycTKh9UmLk2g6kDD4nLXXz4NfpG9FXvMVS3",
  "key4": "3MmWhQJBR51AMFSehbeNhk71U7EuTpjwBBMYYP3fJDm181B7TEA3XcH1QeVcg5cnYsZUWXhFMaSFNmaqCBo7gyti",
  "key5": "2iTQcdGbbmNT6DermVmayuS5qJ8a77svzSqNwbSd6xdS7eN3coTChYSwP14mnkcYir4qLxDiNWe5TYsgdm6dWHUQ",
  "key6": "5ps1nPNhHPFHtEGU4eAf3n3mKJQ64HVd5KUK879ZfwpJifin9UL1WYUBUoy5yU74psw8bpgySf2FcYCKzUKu9XLM",
  "key7": "jWzk1d34UNMNUZcgqnEsp59xLG4KmP2ys9ffrWwzGSNQCcxDNSRmQ3PpV47UbxURJPNMeeFoJeVSfnAWQ28uijW",
  "key8": "4orx8cSJF6RhJYY8R9nJ3dMh1KRCkSm6SipqdL9txrZVAAodNVYEzgT64535d5NjjaKbC48ArAggS52Zy26NmFvL",
  "key9": "4AhdA9Mv3kkXEvxzorxCUDHAw4XKXdhE2TLY4SeaB46gzXRfGfbApUbRaRtEWJx6FN2rwhbbhre4JiMDbQ3uNXKX",
  "key10": "5G6NeiAzRSLZgVGEbRH4e4fMvxQYqojhmwuaGCycVkKStGKwywK2cGjmp5YfexxNu3KCuH3nJNYUHQWFmHqPEbq6",
  "key11": "46DkkZzGmKhDn2Xb95Uk3s7ahGqkRa8W4ReLfvs7UvyonVuP5SAHCsPoctbvVDWb6Q7StxFwaNdw6aFX7z8ocSX2",
  "key12": "NWUrVg2xDojoFmStt8QyNUXy2ycgTZhq3Vo5y49FxByYU3XhePkE6hTfKwsh2xgberaADmjwbDXfQSbJ68Y9cpW",
  "key13": "2ph2eEG4o8WEADxsbegkPnrEwS2f281C1sjaMGNw1oR4WWWFh1x6EVU7w236h1NS3XBrQRBwwt9ZMTwGsv4QP26u",
  "key14": "4p1KvgENFrqsMnrSUGjfS8ZoqFhu3YwUb3v7fLX4pQUx9tBuVqbDCSGHAK1RM8PMBRam5nFgJVvSdqHF1NrMS144",
  "key15": "2upqfSSdoC2ch494YwLXuSLstzWERdAxt23FVGUFVRFjvzZ6qRBN8o5rqoEKbkB5HReS6Eq5D1JwSf9T9pQa4EjQ",
  "key16": "AdXuBtHjiQzvVmfEtinRZEXcisV7sHbkXNkURQnAAHvWkXGBRZd5uWXrmTGy3LdDtdYkk22WidTT8xz9Jyb6HG8",
  "key17": "4DcdpTujtnN7mAdkbvpHksPPLqQ7KyGj1rhbnrCtDGVx6GQkRgMnNG3jCttVZDaUaTzoEWdPy3wjaiAaNRizrKHX",
  "key18": "5ZpxiZvmmHodVPi68Tiihb1jjoCWb6XxDXygpTHJsGPuSo8yE9iKomJXNiGaeYM7DcMT6AUuh2aAmYXZb8N2SowT",
  "key19": "3V1wARTUFaps2eisdvLFhiRs7kwyxt1bJWsgGPqS6y2kULRwfAxUXb9rHEj6QZxPRb5a2DHZXvCWWAZXfhazc13E",
  "key20": "2PpYCeyPcbYTxSwRdg3YZAeH3WVGqYDyJ7vrAG6S9rJ8HAJS2hLomWpFEEmuzbspbGJjFFcWESJ4xAC1Y5CtiRQ6",
  "key21": "659zMWEELEjeEN5TgfnVaAqeoi9CtpJdzGbwDfvV3v1kHZ1ifKq3NMZ6XmWBvG2qU35wUoW6AiwYaoWsRfRZJypr",
  "key22": "Ysyxcm8aCQ1HBcZbB7mHfu7skYBPS7LzJfqwQrqZxzxYuShxbFeuxq4mtbmEw7iWSiU7CraeRQoDfJq26JbijSg",
  "key23": "221YjSkuTLJ4YyL8YNj5UmN1x2Lxt8uWBRntMAdCs6eGbh9jhTAFegL5x8h6pmcQhUbfcPkSmXE6ZvfbUqjd9m19",
  "key24": "54Xbser1ggXFcFDX9ajUTc4C8bo2uzbkVwf3bukEk9juvR8RDLugf6cWLDUWGs8Y2yaXuBQfT54gpDrAmZDZiFs1",
  "key25": "5wtef2hrjksdkcYcGWyPJ5858qE81kv9x2KDmZzkBFFsRpXTfiwY9mbxjxupy24ML4Zu1FZHENR5XTdn7Cmcrncp",
  "key26": "4AqPjHziNc9mUsCvVY27rRTazZJbQU76vbVodfPhzCRhycFbkj1x3VEAbQprLV1k4zFfn6CnZazabsQonFhEmnBG",
  "key27": "5QoR2R3SHa2A9cv6ebGugKK1FUr36ovbLJ3phmRjpNFDc9NEcZrNhc3V5Nwf2ED5rXfo4FXBkmxRJBx4YP6wMett",
  "key28": "4v5E7L3xTaLSSgK3qDwhmP5BhXsyFzwfgUDvvf7AaWEyuRB5MGAWDHg4xaAhPQ86Uc8RPmeA8Ncw4jYbG5D3fQfC",
  "key29": "4tubTaGuKM6vodDXS2VksdTPxt3FruFJ1J9VEYEKjDnKB3TdpHytyvrtb6F7XyxrNK44VQXeDDNf9FmjKQwxoyCz",
  "key30": "4cqBZeq6nDRc6Jf32rKA97uSMhpuLDFrpk3EHHTs1eq6joGrZaC69JGaPpqmX7ybXyHEPY4GnpBsRALKvPf3hmz4",
  "key31": "3gxyEG91heafh2mqnUNuTKuMkezhPkcFyEq7aCcTuuVRZCFPzdW1py6anq2JsXTS9tZk7p5HoBCskHkBWJdh8MeJ",
  "key32": "3XwaXsQqPmT8TbGhnbn8dmxL5sB7PeEEGmqz75Ct9ZGf7yunUPCthXpFdLnFCunmce7Wi4SdsfTVT2gftHv7XDzQ",
  "key33": "37fV9EfjxLc2qGxCqd8Bg4UVRpX2HFZP3pX6hbX1bLekhWeebGapYjxinVyaksQtRuXtoE8q6E7ywvgw4a2btEAg",
  "key34": "2GvFaPT5LhvsD8bbTMupWERbWsBMy5EV97n9v9c78fPjKrx3ks5kEHRQdQhZrwBqDJfuLJ8eick2EeRBaPTcehYn",
  "key35": "4SGDkDn3P5rrXuXwVUR8SojMi9WRdsv59kjpXprp2Qq2b9C2Xsp3gmN8jdPK6vqk1Ypam4XVu1dfLcZaTQDjkb6w",
  "key36": "4NdATUrgbhXrseF2qu5w4N4k3bXZHcfdQJs8NQMPRDtiGtSbKf9KYZgrgWBqiw76Pkiehwrhyphz5TvFbPBPadA",
  "key37": "64CY3KyhPhMxtKNkS6RBf1hs6ekbeRbzFtsrhQWgLJwaaPrLKPSY8C1piCmeLk1i7C4H4X5CDUmrzJP7uqFzQM26",
  "key38": "53Akc4MasLfR91T1AB6pHquphRSUHC26uxMoaAJoCq1TL4Bc7TCuYqE3gqXP7eBKrMUwUpBhAvbx5WKrsHhxikDz",
  "key39": "4SP7RfFB1pFYK5eMDZm6exYD5s1Hr5qmgwg4meFB6ZWwG6y21yCdz7qHiuwMvyogZ2dyffn8dkdjjh9TXXxiTxMW",
  "key40": "5TeKJSgAxonhuhJ5wBQmy82HLLFsPvY9ZmcF6VcnKUdSsP3ubfHd2qZjLg4R6mWJqHTNbVGBqnjSTEKz6SzNscrv",
  "key41": "4GMpK1VkSVToYvwPvzXrqYiSN3r9tZDLqZVN1TyPcY45trHrm9yYEZfY1DXGuiMbN4MnUb4NsPyWyreDAQ27fdUK",
  "key42": "4F8fvwmAA6W8hSwgjHLDayT6HeDz5ZMx3WJzJwF7NgkgtEYwfHceY8xKQd9fAFhccLviR3unsmq7ZFf3L3SH1nY7",
  "key43": "4LSUwVe8g3VJqd73RCEBUDqmNcxEXKiK1JbjvEDvjHLiST1vLvwKEiMxjoRAyyQhHwMeoBVq3YGnSwWXDXp27QXv",
  "key44": "5fGS2m3QHDREdguPe3tXzoS9qAT5fVRTWedGSD5rqmPn5DRQe5uUTYaUm9nNj2zjSUUHNdZoVMLmzG9KZTjtnni1",
  "key45": "2HrbJU9KEFv2edFbANaFaCKoBURb2dZcAxxUN4UBkDqj9wXF9vKsVatf4GEvRrCzrpfpNPWy5bEiZjrZXkhmotfT",
  "key46": "3h8GtkWKqKgK3EjdzrKCojtrB5GFgiqLkYXoDCd4Zby4pQbsDcP6uxAphwX8dw7gMUxjx9oGuozRaMay4grSRFCJ"
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
