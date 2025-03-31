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
    "3RnXEriXzu1P1VAmqLEBKjX11mRdRAE73cYN2HmS7Ws8DLQEs9UJA9dz9boPhGizCdpawcoSmtVNPoBdRYuGNT6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZQJcHcTtfeyB1g6AQicKehoSd56be8Bx3bJcaPVtG1xDvaHV9pGUho52fALexTYnn214wzD6pKpaaQZ1yfJ2Qp",
  "key1": "528CiKhWH9sPBigwC92uTGqm4zZELN7kqy41Cq62szL6J9YpzeZZgEhjJpEr2yCLGbKvcXF5xcgoF8WHJ8rTK4Zb",
  "key2": "4kKjmeNgDoT8rujzmZC8xTTEr8UMUf5ENmcWhpP3cmhvpXYtjh8T1bDohq1AMpwJsVLxA9Wpvx3LWJXHqHoa2CeM",
  "key3": "5PKAjGdBcJiw1FnAprKtm1sMD1WWM3ZvwchcYG7snJh9WUXrXCPDXi2LLSnEP4BPVT4avMK2YBNVHAp4R1fdHvrA",
  "key4": "AHiz1RFJB2u2Q6s66biPLDiH3HA8ZSQ5Pj47EymAmvbaVKh8ZqpSe33WRoAfEkbQnZgLGuVZpyu87wV8dQCvtAh",
  "key5": "4JnXbk2o29BBEPCYegH1DiSYPWNBSdzMvySiWnDQHXrAGePY9F5ZWpxbCHSDdxmDbgw4sxM41XeyhfaryrUmebUd",
  "key6": "3dobLVxJG5LTK4FMQRXj8iRnWqwUn8ALQFUe5xtkPQZJbCoKh8FE1pwXomWh1LfNeyHDpjU6FT8pPdHDe9yjtuns",
  "key7": "2WSUhiGD2cxQRMz1p8rGPmbyMqcDVDzBHR62HoePgrN8A19oASqCb1GtfwE8p122NBXf22Y5DWNxdjZjgeoAG9HV",
  "key8": "4VZxkCG6BgRC1K2yrLCFTXQXAdiy1fEKwgYQheodteuC732r1KRqxHdTPCyzZVDWZAed4qCsRzCS9KcQiq5ezNju",
  "key9": "3xbr1Nq7GqHSvh4ykc8xRNtdULMdtsM6WNXnti1HEnM44qTvjGywVQvrjybQPs44bxaundcxqzFB22X6RzTn5QAQ",
  "key10": "4SXwMdWzDXyKfV1QWVskhXJpJwZgJsP9Kx8kWtLxpXYBNyoQxggviXxzxG3Nhs5M98aFxHKybLH9fj64ASSYLUn6",
  "key11": "3129q4xk4cpcfrFsHskiwrPYGn1P5AZdnyPLwATfgfgZHE67bUich7f8DQ5FJvJf1RojiZVaEMR1c1gA4xuSEHkN",
  "key12": "4ScTmdDiRpGS7bNVcFB5tjK5A76orPmnafdVdtXDeiBGMKsEcB6diABipfgqRNBHN19cFq2zWtPcvHLbyAxBh3s5",
  "key13": "2HnAYmPYuyYFLcVnqrg4u82ShJJfsYkV1b1FNUuGgDuBtkiDsVqEpnQ5ayPKwdZydiyCEBkTAirpX83HXe7nxSq3",
  "key14": "53nMR2BoZxegjhegaf2egrXYkukzErBnHcVu1saE71eoToGwFATicYUsvsidTbgs2RtLgvN5kY97CX4vqTp41zVA",
  "key15": "4v1aUyB4KSGqwS61DRxBNCUVyWVF6NZtz4GVoXzXaQ7wW3HF1NgKRGWe4BXrAf95X771ckFuM5m1vQfLYwfxjPz6",
  "key16": "5YZZRVCV5hEmyA44rLnLE1g7G2GV5fYsLgfK2cZtLiG1Wm3QPcYqYuULkg3XJGruyaAARSiRAKtXAS93aFByCRS",
  "key17": "2qfm4hwd4cNBgpEWNsDyoEQsda4srUcQMHTosZytsJhoYYKmT6Ge49VVWK1Da1ucgqowfas38mhMwkFV1cQVyjda",
  "key18": "xUNuB22G9ZN88DknDJ1XPSPvaPA5pPUS3EXHETUkRprB7wrPUFd2vP1ek3wpf8zPaHSf88vqnNpnb4TSFcC4DVp",
  "key19": "KJXtmJ3oN8w733fh1CYBm3rcsLYtJW6ARuwDpgAEs2iSkKbVnrk5eX41MQw5wnuhUY3AoPQ9rVzrBh7kLR1wphq",
  "key20": "41mLTQEmxEQZRV5PAkxJg1TraL496SnXu3anurkxY7NmRmm6Bz1vYV1KsYP5bVDSqATyRBBYzX4NQ2hjcsCTH6Kg",
  "key21": "24dyxqfN8na5JzLrETjzbku38qjyeDSCTDPHX6Z1tPbneED82GD7woWourbj4KGqnJR85UCxRCxRm6R8VaGcPQXH",
  "key22": "5jqcpymXB6f6UVmFUeJuVpphV6ZiF6oKJ1oAJjXTGNoii9EuB9NZNQ1JZwcm2RZkrQJ7mN6pvke87DozFYjuJMLE",
  "key23": "4JxzWUVf2vBgq7VedXToKfGvEgdBfEnSkyheD9zqZyA1ejf6LQPSzsxNxGQCFf3BR4g2wZQ83m3sPe97xrcsi7nR",
  "key24": "2tPARfJLWyfppDYdmDJPXMKiRvyu14zNTfbdNZM4oH9prHNLj3Fmfdr4EymG9vR3VMbJHqqW1tfndiq9F8Ld67wR",
  "key25": "3Bxrg7DW2k8H1KSVPe3WZeK6wHyyTA6fgx5LbDZXosidLjvLSNmZBq5RuaEBrUe19WBFL74mmt7B7Yd1TCEStkX3",
  "key26": "54QUui87afWEL8C9HokSHp46gA2ef6fhKZwAUm3c2CKXJ7XpJVdTXzmeYNcSHuaQ43n2ePX1QcPdhBuei232RfDD",
  "key27": "51rQELaEU5RvxHhp1C7bXzY6L7665y3F5VhQkXxSr9vDuopQAfb7mYGobDGJR28Ri17k7EMsiT5qkXBeUhNQFmkV",
  "key28": "384PNcAutMwFuUqcfYpTy4dHs7a8HcCC3Zk5oHHe8UySwx6usGhjx3ckcc7ZzHPP2hWguSZooiLqe7LRMsNbXMFj",
  "key29": "5iJP54RfNtVgYY8hziQRa1jGEcV6xmhc9EEfqa7GjuCyagan8V3W5cigezWteWTQ9nMjgHFvFn3BtojnETHsTJfo",
  "key30": "51uHTQ3D3wqqXsDRa3vXmxud9AWvwWue8kjzQkqzVaUguW7mUGAf2oNTuCVEWbRumZvZui28pHGHtdmkHwGqgfhA",
  "key31": "2E9KpkaYg74TQ3CZJdcwhZqRdT1E9C8Mn4BvDz8EzzZ1TaSvG6FimekUcQJUZNRA5T7jshoUghP43UtzVwhMe4Rr",
  "key32": "4aBnx7JaMBvWaDemYLoaQREJBg5VnkXLnvtKbY5jUMk8uUj2UFjjXpXXqdLmHiYZ9Rn7A3ADsBxVtbpb4gP5tUd2"
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
