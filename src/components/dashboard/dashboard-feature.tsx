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
    "4Wjqzd7fPDtPrhuZDBpDfoHFq7xW5gyaoMfFgVFLDqboamWKtyYowzh5opfnyU4JzarWfMHYSUX4CR73diPcdQyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvrwA3QJmTuuiKdiZzbG4gRFx38DKTc5ENjaiJjc2BwDynCJYnFHXqjUFBitHgVcKq3Bv9ZeZdpz75ZrNhMiuqE",
  "key1": "B2brqVDHSqTn3UYxNi6Jir7gaF2mSchR5Gqujryyss64MwaxfLA7GESQ5vPAY8wYHdrzUvtnbdjXk5UmoRJEf63",
  "key2": "3zW2LsFkD5ZqvioR5PD49zNZgXdhgraXiRJMRPonms5Gt5RyxBHVGPJ5jmsH1e7uToido4QVNqbhfNR5NteK4XUg",
  "key3": "uLeQ4SZyVi1HjoRmiCEtWhpkMm8f5iz3TT2XvrSAXipV553K9YMdoSusehfJDrJVvtrC6vAnGhr4qfLEefXGe3R",
  "key4": "2S8pjxME6uFXuzzQTdhgu2uRgDZXjU63QzWmwj1s2G6e57bzq6sBqRPqYgfE5ounvCuVq7JE122RECphv8ZHcKNF",
  "key5": "3vpgVLtMSCczztr4YUqkF4pwWP49t39drtWRyDY8rYovsXn3foxKa3B5mnnZJCsBCRGoeKWc6Mx63kSfJsTe7fMv",
  "key6": "3LnbqtVqGXKLDVgb45buEMMPwwPfpg3dcvHJoGouKzFeAdGCMSyV2DWv2tt9c97fuPevMtjK8FDSQt1gpQEkbsv7",
  "key7": "677QyGpzp89FtjxA29JDEhjMPepiR11qrfA174uX44jbyeFBCQpvuheXGMcong4Dd564BBbvV9WusWhopUpHFmK4",
  "key8": "62KMw2Y6Np6iqTJKhxcEXWkoUL7tA75x2VZkUExtdgyctNgkSA4ALVG9PA6H8Y9ae4NXK53NVez875wMLX1Lt8eU",
  "key9": "3orYDmpoZaT4p3KNW4iF6Z43QqJKHfv1vnHVj9KvLmE2dCK4H3Lg8ainU6c5ajPZWioNzqHo7ahDpVCwWkNK9jrQ",
  "key10": "4DW2SaC4SsrrveeBUNGNZKb3GHjoS2W82ruJF7AwXbd4UuBn9mrwiaZqjYSbuDVYKe7qouoPXkykYzyDnLu65SwY",
  "key11": "5kEgwrGgG753QgFim9NhgYbD1LfeGHzEGPkHdC2LMfzhNYg9gkE41A9AN7HncAhrAp14MiqvZUJmqY7QMesAG4AE",
  "key12": "282qeCWF2m3R9qWwCDAuQTVvPZiKY7cdn4L7MbGKk9L89DHQLouwZEY71M5zkC76g7jyxottESzmUv4n967Q6HcF",
  "key13": "4XtJXHeHsgRqA5qdVRF5jtBthhFEtmjrHeSsXwyiac3VgkbwdTiRxcVi8mLbbmpeH7pLrHUS3nAjv1Lvqdgy4jVj",
  "key14": "2ugCYVpfay4rPbwKJqtXp58sVU4KWSYDFSpMSstvbNUgXdSgi14net56rcVHg5jRCFKgk1eVU6Ar2JkwCNRVT6H3",
  "key15": "3mS5b9fYcy6K4u3Bnm6A3zkGVpQbquzUxTL7jheJRPkqanKNGhjCnhYGpnEXrfbB71QAjThBZQy9wRhqNA7jutya",
  "key16": "NvQd7KPYcgNzPBXnwy8UDDEUwT31b6nPBpQTXqFBhZ8B1rnApYZaS12SuLz4YExrEB7u31ZuEsDYGiFJCNvM1CF",
  "key17": "4YonEWeeBNhoGgSuJdC1ttwjU841GeJj6Scs2mq8nHPHeBuejtmeFYNyTPUYjJb8sqcJ4k72shZWYBwtTSs2qZ7f",
  "key18": "4dbEtDY4c2qCLQFYHcQ89GrobJFa93k7FXzA8y8uKhU7qBknX4qJviCSYZkru4opY9AiHkWs7khfCtpq9HYyxzQD",
  "key19": "7onKcEqAaDfegdAvkboiT1acUUhN5T7hf9GEwnrH4c9x6DjiDiCSmnjWq6PKpoR4gQn6wdDxt5npEcjim6Bck8t",
  "key20": "3n95bnykdKnnn6t25V4t8WCdSp1hUBe4FiN1bE7Fi8YeMLvF1tNVnwrKA6KiXmixEDb6jSUJpdAeCyhAWxpVDcU9",
  "key21": "3VzBjDGn4edjeg4qsdukXJ8TXprkPLcW9NpuBF8phQHg21Zk2CSRVokT2GyVbPF4epKVSb6PJ7ieJsiTiYyfZtAD",
  "key22": "2wdQXv5A5rZQEh7aiKhQCKbmGsJonABsvzQhMJM7PZbFXDX3RjQxgW3XPfc4Q7qxDq4w5dJiYMVgDEkyUYV36Dbv",
  "key23": "57oPuE9aRCPYZPmiix9ZWC37KntDveM5mz5grQWSFU1HMu8sUEaSuJAvmkVppzTtVhdZU4uLrwPmXzgp41VsMFF8",
  "key24": "y6aTk83tchYNA4dEPAVMUmchMRvNV56n78arNzbRHJvWXHziwdbd4ZWndakhzagQJFmUfhPrtzd5qog4WvBAnzx",
  "key25": "2YEK4Mx5T4AQ5izKuiGdxZBk6sFkM53KgPXNKYdhmMrtx3PSZTPoCsFNHMRo9Nzs7xBZMXZ9XN3S9YcQrWEBPJoN",
  "key26": "64GX69z5kKT4vP58tcn4zdsCi8dvWAUAPoCgkQrv2fFq1uxPGwbogZanymLqWb7JMrh2C3j5Csyhp5565ZF3c3gS",
  "key27": "koEmhAukeFCvmmWPfdTALvybYgyukmazPy9GV1wu44XjBRnMG37BcKA1BuBuFuLVdLTSx7wqtCPCu6kQGriSbwr",
  "key28": "2eKjXH5voQYAZ7HUWmpTrpevEH518r4BnL2aZXCKh5w2HaACtiyUx2ygWXMLLW3sZgRFMnTGd2AMxfJxsAuuQaTd",
  "key29": "3WaWBMPh5NH8B7cD1y6m49XuSDHKcArZPopuBsjBACg7ZXBVn9jkEfEmXkTG1X31FwqbFrGpMyGdQu2vQ8FWZFNQ",
  "key30": "2zcHTgUbpuNGmvETjJFBH1JoiZoYaUAj2LtZMKabDU4mbdn64cnbhy68rUV2FWPLW3eCBobZJJa6LH6iKLADEo6z",
  "key31": "4JocyeMk1hrectsFwNmP3U3ms5wNXbvoKrvWKMQcENjAxbcX6gLyQfDggkVRc46oGK2q9Lu3xcsTFgzkKe3LN5cX",
  "key32": "2q8LYtYhieBTfJ7BfVV6vhC8S9SdUMCcCBCm1sxJr3FsnY5U39ftEgU2KcgrT1V9e9fAMRuC5mq3PpBqKHxXfQMW",
  "key33": "TX7qMr4Cnrv3x5Fmw2KASbSeTpU5R6dZ1cPJXgHYazCDzTMuFN6SmC2DXorgW9rwMTshnBpj2G6rs4oWxf45Hxf",
  "key34": "4iMU4zXQjFLKETZvKqasy7RjfkXHQAgXBd2QQKFcZ5xb9N13pcSf14H5bzMXmvmpBrxgTCQK6wdg7AS9kg4xkgcG",
  "key35": "CJyguoEfgjFtiW9Keybga8Kdozj5BNpao1LvkJwnM3ogQbHi7x765YZvqHaCwALcdXM1vmMF5Jr2FxXvi9QuZxo",
  "key36": "5icw3aBjVZyAhRgVCHn3g9j88PhgR7g7yiNmu1aWbh3EXuacbgARnua7U9U3HZFRYyRjQAkJm4kbDXMhsRQwuT64",
  "key37": "58Rg81Pnj6QSwRFNUwnx46FTWHoGeBkLbP9iU6ywnmGnoNLXCb5Fj8Z24Xe6HitY3uYM77q44bQ7ocbC5p5CZ51z",
  "key38": "dXLENfXDWpGqq2ZfxUbZCTYPkYJoxjfqY4fqYwM3FqgfnUdPAWVoXKeysuc4Lkye3FsWoHJyN47VfMA4z6Q49fx",
  "key39": "Ao1zASzaMZ2Kpi6ntvUa35KWz6JC1bmfAPxDUPfBce3NWC1nUT3VkCyZEYJXTpTD8qLJE5tPg1RUqTUTJWc6iZK",
  "key40": "xgC4oYkGAeGHLyteCtnykAkixmjupkqRDc9bH5opLgqqkwrSHpVZti2NvuWhfZAK64YXCtJsZ17ZLb7Akuh5CYw",
  "key41": "423qayyoEaeQiyx8chCBtZ579ForfrUV5pLyNemeUUNtRsTRF3MNHVyxVzu92HhDWYvFC479LkzWy7Ruakeqrt1K",
  "key42": "4xXtufuL1nXrzFGEosqJp8RYDvhBVzjpL2RyZGD8CdmeUwzXMW9NyhqEmyTUpW5hYCRXbkE6MQJFyx4NA1WSCAYq",
  "key43": "2EB6Xjy2FhdpZKS9G4JELanxbX6AxNZfp6eCUTmETwV8LXCVqHNd3rhbgmmJtXyA21fqZMk1pABBN54fheQG5Qki"
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
