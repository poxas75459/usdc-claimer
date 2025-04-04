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
    "3ERra1kNJVDrYS8X9eWDnrUCcqtmHCv9nbeh1EAeZu2WZtZS2RMPZApQNZ6Mo8awsvsKhyAVtNycAgJHA5b9pbhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rREWKFNbkEB9i8NDXCPbUJGSG7KrYfNmLAWn9L1MRzH57yW8UNVu9C1sTbT6EjkEyx8Jo83D12d1Nkoo6axoYRM",
  "key1": "9iHbBSdW1LbvprwmgjRPFait8Nc3cRht8wvjkPbwqXpxsLahv6vYXtWzW7vmK9dMejQvvtbyURWR7k6XAuvto9v",
  "key2": "5fVk5PzvcWiYaxgLjU1JbYJ1qmvAmQMY7Gn55BfFaX8MapFnmauNU7i5TdAMYETU3faEVzW9fbwWUkxM16ztQuF6",
  "key3": "i8YpeKPFgrc7Fbfiy8Htx1mACcwKM9s1inPyETD9x6VYJKBnCbfhN4VXhzk8fRdAvAr72G5mkB31HQ4R9gse98D",
  "key4": "2yT4EB72Ch7QqEhD1HqCmiMA7yLg2wRxrU57EcYw8p5av56NHRUgqnsZbbNuaL1NYvf7Dbox1Hnu1nCTLeRJboJa",
  "key5": "2GgzaPCRuqqoRr6jfw5uJGp19ssRRrFsjbhyFYAuYu9SEjfRcxkwAarq6C2mrZdYgsiftp12BBxvsVHtZDkZB53p",
  "key6": "3skSbLbcDB8zqdLpU7wrftc4YNEj2x5cZtdKQ3JSMbhZMrRRhN1NgjtyWvS6dGLYfPAq3HARoojqnD2ca3N6jp1C",
  "key7": "3WfVuaVsuZuyzvYbuqRuLxAnukEcnNyrewS7udjTbLVz6ZsWF67oRarT5MM3prqjPykgQrHiTe8PHY4J7eFEGtw2",
  "key8": "2wQLusH85wNuDvFoMdXZ3k5xDXz2QZjRDUMTs91MpDscxZXndjFxhDTqDhiPCPkTHqRec4dbQYFtoKvLq9z1kN8x",
  "key9": "nNvU3yQTxebxjQJxhvB5TAKKoEozDYA7BT69TLtVPWC44Ym2zySfprCzd7YgmxKsDjWdfpM6nRRVCTZuefvgHuN",
  "key10": "2hTirSYGdxhfJ7DsA6rQQiw9UunUc7hBVogikjv2KdhGxssanRRxZfqHhKe2JVrMcXq8HBNJrMxgjtkfmQ6sQvP3",
  "key11": "5GaztkpKxZd3m6TTxxKWzSFEjwdv5eXSRP1r5ANgjU9vnewg3kTtHHRZ6mzGLzn95rBcaikcsabx7xDDEM6hB2kM",
  "key12": "NeZhAqpzvJm1FvdysJkJfGzS9HBBFpJ5mqzQdXYoPsJejRZetZyEGTggPswjumksBR6EZEj5vcqugjWEotb2Xjx",
  "key13": "921FM5RkDsguVwpxa4CMA4kSZcpJDmcP2YkMgssT3yT3jPTggSK2uKWn7rrFurJ5F6qXMbWWS5WwSZWxnrxExe6",
  "key14": "59vNKhXw2SuPxjCmASc8Dvv7e1iuGWthySiwS5hK54ceLVqnrv4yozJgkrGCLtCU45b1YZXtnJoJ7AZQnsxxRAa",
  "key15": "2y4xp65i1km3hP9hPT2Y5rqFY1rgumrp4kLQiWqiXSys72Xxnw4TYUacgxhWJA2B8aY36fQJGZfwQwuYLzgNxXbk",
  "key16": "5FRti52WxtBoD5QXZpJmmWEkcQSLa2qPwGN36NPdfMEnzyqwkcipb7qpRWNkYAhyYjTT3wJBXr8kekbqedfBxx5U",
  "key17": "BLzcdh19n3g3Mf63f7YAzDdktrGUiMqRbaNsfShM6UR4KJuxxN7UBNDxE8it3NggELDJk1QAQKDENVchxPMs3M3",
  "key18": "35X27G8vv2PUAdG8VnYZGw5LJ6EAsDACRcKYRmBVTUd9NHwVxLDQ9NCHpTYdKi7oxNPaJ7d6YBWvRSrsuXo7yiGZ",
  "key19": "3ATN5mppP4KmJzRVpfVHsoMbsSjYFuhJviSDbqWyYQqssyKjPTAnBYdvUSu85v47KZhbCuoiB8dZLZnhqd1X68Re",
  "key20": "2VVxnXEs9fycTi7DX6Ge7p58rWPLuySwDCf5K3ojqQUG6FetdTzhRoqQV3Qdf839C83QSGu8YWKtaxQBgUzbfWpT",
  "key21": "3UBmGT8QbyGXYSogsqk9TxX24QuhGAnNwCA5FuAoqUzXYv8wt9gjBbU5ThZNkUER4LYrU5N5Mp7eWTYEX6wLaSe9",
  "key22": "5joYyBCR2x6JwVYtn4MW86N6AFQZutCizq8oVhtUrZWL99YcfgoX43ZP731X3mh3PuhJWWLeL4MMXW2Mu6ewXo9A",
  "key23": "5c2R4cuL36DsmAD1KyhoA32nKH7B6MDumtnMBMsLzekG8Meu9JYhtYG5cMTkf9REybMjtCJTrzMct8piEd7W8Z8V",
  "key24": "3odLMbnfEzmHtpv7HywbhgeE27Wk3ZJ2MaJ45aPLWeNYC6Yr2W5P2NKmosn3aXNUsXeX8GetvuX6yRgGHswmPxLo",
  "key25": "g78ghzMxhj8GMj3qZ2WEE39rh4PAajhbVPzA6Q4KTLC7YU9a2XAGYRT3ndMwHQXVwLAf7QrRtf58TyyoLsrisPM",
  "key26": "3EAvmJEo7qxfFbPx3YmAWu3XdF8fVpFSp4Zc1o58WoKE5yPoLNkXg3UBnn7PmoA1jMYUS8tEcG6e1DhdZF1qFfb6",
  "key27": "2gkmWS1ek7YHVAMKqdYggsB9Jz8Ryi5skwWWjcxagUPyTkmpFubjci6XYsnwxHCgvxmoWzWsUpR4L9828R2b2GB5",
  "key28": "4156SyRbyXMBKL4reovfot8JNtNc42cKbaz7TnKu9FiMuLfYiekhWtUjKDSDrW9q3Bzh69oFi7Jz71p8u4otXczt"
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
