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
    "5wmK7sMQqLTwU6ZJyxnP79UD7gyFmgW2zDDqDdSnyJ6Kfdg7sukbN6t84wCwBxTEp8u12mAtYzF8euJKTm2MqcWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXght6GAqQuaN8mrtKjXyBM2PCwezFqRzveh9PTMEfrDfFNDPCRmgvVi9GhRUM9fr3CoBRgm4opeQy34D6CAaJd",
  "key1": "2ebDuSMWwYahTQTDKyLopr8M2zYEJ5q8CjrVCaFDJgQuyxhW4gLoTpSmELjpwiyMcS2vdatz3U4SrN9myzSuGqJE",
  "key2": "5HzMHBFDz5u92N5YCSoiZeoHuQGzRqET7QQ4hPaJrpry5ftGByNukt2oBgrD6Wrw7mCx9WFntfS7GNy8cAnohA7M",
  "key3": "5Cdg8VxUC8tniPbqxkVhCGwkbg8DfTpzsWvDbp4CaZ8HvsoquMqM9wu2Zn1ygqwECPx8N2Rry74Gjqb6TqiLr8a1",
  "key4": "58QUpUhBtCQK7UrAAx251GE8brZW4pNsQEe4KDJFDpUsRTjUgUNguMU16TkaKWXxUST4xHid9UeDPcoWs4Bb3U7m",
  "key5": "4Zq6fNcz1PAqL4Msrh4VcQGhdYJPmVL3YkrQnbqoBXMU3wYjsmFRzvZAKrBLgB8hxgfqbEcnJ1qJgfKmR6ZBab4g",
  "key6": "4HRpiXm46BGNhUGnBSjn7VwfXpPd4Cq28625EBxszvS87ZbQLXaRfrkisK7P79Wrqe3HnYBE3Bjt1skqh9dycbqx",
  "key7": "2tcLFxpYuLLjxMrYRSA9C5nbCy6r4w6Tbwxo754Ff4jn5dTF1yibpisn6S7VuwDE7cAu34TtGVhecYMHSPwz38bw",
  "key8": "2seiUpgNkdTF4fX2N52VeNqQPZvY5JNwmGa96T1jYFe2PPoJCZJULhXWtgniGEkjig4nBy84s4o3sAyDqW75jp3o",
  "key9": "5dnGehWjggHrZYMtGwD4RjbYBFhioZhegWnPFpnmoRcLy132kiyHa7ZXjChAN14EVDYPSBasoBX2riekHTdNJ62v",
  "key10": "5gsvRmuWLkinkcDDQxwGae313d2yVaSLTaatZdhe7asx5XAfK3GDwdZpDi37UcDe22Z5wCkyvpEZ1P1TqRB7mDRa",
  "key11": "4TFvdvryzDNVkqPrGjx8MWngdCJbx2SH3yxDD3C2mSpYKFzGstWfkBD3ownDU7sW3uX4KxdsVJEVXWLv4EUUKzET",
  "key12": "5MwTRhkRWYce1N6zQEbqTnX9YE7nxLTtV3MRyvzXrwKbziTmpGijVEP9ao7dR4Z6aDaMmftFLijcSAeS2CTsLwg4",
  "key13": "5n4oSeupnQ1w7nwA5jYNMdcgLcNQ2JoiNrSqZhECrYYfdfQiWD4HeVpAiaoUJHUGQy14VFfHAoyfr4dXLgdg1MeX",
  "key14": "2W1ccacWxzsFVV7JV9d3CSHBbSFejShV7LByDK2s1V2DJqvStjWQ2YthxusZfa8wAzxP7pMHmE519bZkBJHsPKZJ",
  "key15": "4iqHFqcf7C3X5Fukv96yEYdc8FCvuSbi3irHm19PgaW74NvEyyeY1DQRcjmVCBihtZSPikckevoqXuDB4dRevoRe",
  "key16": "UndFt6hwNNfbLb2CjvBwAMcRj1mAN4hWiki5a8LNjr4wHrHFNfuyZ2tcea7GUYwEWkzSkE8bDydA9sdWRzjFJFX",
  "key17": "4kh88VpoSqAeyWvbqkEfcQbYbj9uQ9x4wd9U49og8Pq1oWhc55x2BCJFbkACP3dpkyijFbFs81TimBDcw21e67uB",
  "key18": "WhjNnp3qSuZWHqyPYCvoFv3rWqbFnSQaJXKmD7KmzNKjaRcrWUa7YtFYPNxgyNEgjKEjV7dShfxvnmiERQ4tVC4",
  "key19": "NwpxBfTWtVLir1PAiQd756B6CnwSkYgtZmuKRta4Bro5sMcJ2SF3ZFFNDNmGrGyU7pw24Ujwf8LEZaghAcRosDu",
  "key20": "2hRumrtZE95bb9MgEjf1eKAfPWBYDCsHCH4wToTGn6XMgRGq4ZFea8scUHHL9caGfyVfMmopT3ahDSoXnBjuiJ4w",
  "key21": "2Ba6WbmmGAp4DeC2YcuL5ckkQX6d1J4s57xQ9p9cRpkjk9JyqBG26nCQcNZ1z63TCRYkoM13ro43iR1iQnct3dhF",
  "key22": "4j73tNiwBh6C6rW54BwB6ysLzvs5rgVV4J6rbfe5SWHRjMh2m4gpkmCsnuHbQA58jXKPB9Csj48TaELnYdHzVEn2",
  "key23": "64igm2NApsRaHvEyuP7p6bRb398UqQH3wgs4mnwQvv66c8LfiFdSa2cJuLRiF1oQUwKH9Mth9PJQHJpsumap1GvW",
  "key24": "5uk6w7D2D7mzQPDaR2NNvvxx8W67eSW7DYEbPMq1gBKhovqX3tai6SkQChURcuNZR9PgCUUUM298a9RgcLAFC6wa",
  "key25": "52fpd9HZVsLpTt4YZKcGr6WQ53zT4q2dSf7PorTQ8C8Fm3vPWTaaNYht8EvUwcteKWt5jc5nDxhL9TSHdqSZocDc",
  "key26": "4q6f95mqRN7QCEjNiMcq3FPBXfD5iZv2UnbNKqC9ga8rtRLQs4TJLKtXarn3eCyEVS6Bndjg2ZutPwt6d7Pq6spR",
  "key27": "4f5kmAMRYVUMXJ5C7xM1tdRh2qeunBumvpCLcPBezYkib8YLee4w1EyVeqUi7KJhhUnfTknz28CXb9tieDibKVNh",
  "key28": "2pRsatFJJWtNTv7Tc51y6ykAFTKRw7Gp92rAMJBh3HRgbDKpTDUkDPXDpo4zjr3dw62aZhRpzkhd4ohX2iK4cxrT",
  "key29": "3jVqosngqH4x9Sk2SHzzMeSmKwVMXFiHfUcuxiUFz2whJbYRZ62D2xcbJWjf57f4uGEmdHSzQZGmMG7qRpQbDrLd",
  "key30": "enQaMHvyfejMX8PYi8BExbp2ZJAcNPgrc4HCPiLtc64yYHdBJaoovoBkad3FpmdY9EJxkmKqgZCfaaQcmDreimx",
  "key31": "267UGwPAjAsa7ya4rXsGmg2LGKKqTWaaSLA933rhqiyXvcEqEFfh3yBr3UDWYxbrMNbTuvurARBMTM9eWc3k5pr9",
  "key32": "DTnBivGBSHNsd6zDRzozhAQ6VVYU1uWWC4SvwQSFNnbhoy6vHhbdpe6qgKZiK6khVUGWftTBokSbyDRCFguTX96"
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
