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
    "5ffP2ki9CodDsb8ivt34wSc5ADWh3YDoWKZS8djZ26KcDzCvpMVh1uUe5dmn2fbpsnBTiEu1gZRy7rBaHK6CXsni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NXXmfMGSyWGUxmfi4rxvNT1AgYPEDtsvUEzzwJmvQTBrJh7RR2otUSeU1UfxNo3j5HMZVzZDL7tKnPz4SocTeEm",
  "key1": "4kQ2m3UpGnvLy4wP6gbHAaFwLyoCDzVqPfTvw5WR68yvEAuBUC5bM7SmMQSYF7hbNMCrGfUsvaGaXA6QkS5Rtmi9",
  "key2": "ggyc8f2nAPMEdbb7wNBkg4Mk7qKUvtTtFHLWyNQpbd52RUhBzKVUwUa6X7c4q73RcUkQQeiauxKPhCFqf2PyUNW",
  "key3": "44N6mcjWqCL5wfe7KExDrBdHkCs4FPEoyqZpihFXz1X22thEgVah9XYFvwU2gXHCXwwuTkaaNjXyj4v9ji83D8MV",
  "key4": "4SkMTtFVuzyZbCJYeyiAzmtZmiQd2QLYdDrLDzv9o7NRufYQNwo7woeD9fEsTsnaY8a3TUbHpZDfAid2LBpXe3a1",
  "key5": "2WNdo6x1TPwbvGDvzq3p9pyvU4MUGGmaK3k4Kh4eKCqTdadeC7gErFH9JCJAHNe1kTjgNjrw1YjeNAoHKrRSStPa",
  "key6": "VZsgx1KchrqUfPVX7xaCeCBxCtuM8CxdHN4Jczb71BFjah18i7wm3DnbRRJgSo3eqpZqxxFwZqeLcv52dWWNRaY",
  "key7": "3nZbU5mBDL4Ce9WBLQRFkXzddQWoWCtUiFnRBBowbXXM4cWMYwfc9yjWY4bM2pz67dxRkCwQ2ssftGGvgHoun4FU",
  "key8": "BvrVZp2dcyfy5YGYN4dem4QVXmCFY7SHhRzMNVC9ZwpMD5yuA71VDAV6VxUypMmQkJd8Gt61VbRuPPqTsQHL1GW",
  "key9": "YGFNvfUg4dew9TdqJmzfvtBGMGUvdFJaKk4k3GhLqBhPdosr2fvNA43HaBtZp5wgpue3DQrKECPwDiokbBFqauS",
  "key10": "3jkn1fHbPFMPz5S6Rk51jmtYnPLcAFxSYfkCZ7NYrdEomPSP5UUwpdS5fyyz7cqUvGsfBtM9CSc8yb9PTuGq3GZ8",
  "key11": "4of8C2WRCNd9LWTBMFfYrWYxbn88PTKt96LuMkm659CxkRToBDLFJmgczLDpSW6f94dc1vKGwmCsCd2eLLdbab4T",
  "key12": "5g4eo4fuxtAAKZnnFF7CiX7oxxcUsqbQvdS1M66bkrD6gVysGdKY9UJfprmm7hTHhu1qXzVUk8HKydq2SmR2xoMh",
  "key13": "3VE6Mp6eDsGjse5gSMVgHHChQ7rD4jP1ZK7QcEmDPZpDhsNzHjKVNjUhkqrW4BcZNgUDDxRwWtPmCumfBknaR4HN",
  "key14": "46UR7xodiYHL5Y8mPa8yDZBh4Vq2o6rxqJ3UgiYRcvkv5eimSEzUAFpMd7VVuSpk6ZEmmXXyTdJc8paCUKeyBkns",
  "key15": "3uHd3WFN69hzwaYeUKR6LAqEFCFMvGS7Xwj3xsQPrmwNvWeCtVXPxwHRRAR3dFt94jULApe1B8AfyxxHtjTNsyf8",
  "key16": "5AAjaRcsW1oAjYKEumwXEg82T51sRByPBgBsKs7hCd4MhqGcUZGYTB6bXSmEMgFYMNUEQ6XLk8qoJwKxPthyT7Uc",
  "key17": "5TeVvzbVXR7n2LxAQ6QzFoh7ynUyShVaAWA4i5jxPhT5ePkXFdZ2iXTPVrUmEN7Psn6viGeAqPozKTXyJLtgBr4a",
  "key18": "49uX23g2tu4bepkUjHUVwAbfsyXMvQxPgL5YuWPgizRZFTvHXSZYWZsy7DUeq1g8pJEfTN6RVMkukRjDeLG2NZ2D",
  "key19": "3AcLxPbtFrPTDiGRnPrxoMWLTyrkxBaEXPn7Yw5RPBseNE3wAcWPBtDhQJYiYCJmi2dwSUSriuXaeDW1AUfmF5YB",
  "key20": "5NzJTFwYmqKuP9CTfy4Z4BVicmsqh5P9chfFNiansaAX4K5nFFVWPZPBNUYn8yuxfXrruZEWkeDbvcfeVduofDyq",
  "key21": "3Xy2dHJhEFg776ppFiVPFJeRWMSJ7gCvRFztXHMTc91Ym8fJnGDZC9gTDHrfETWJiaVJ5VWkAU4amLEmrv3zv5S7",
  "key22": "bjNcmnZDWva5q9RMzgFLQsdQcVB1JQufMZV6q1u4H9SKEgJMtHSQx9RWRWh12KJswa7DBoBgFBEiUMyYapAwwkp",
  "key23": "3pepGyGw58EPH7qCfjjvGqcmDsVC1Twife1R4fAXbrk1pR6U1uec9UqjnspgHB89EDP722qm1xeKeu2ss1RTwmb3",
  "key24": "4uprrYn8HZznf6pB5GhzZeb2qcPNB4rwN8RuzUWGuMMDNa62qWjXQiHvXQBT4PGT3HCry3VkyHaaXfA7essagmAY",
  "key25": "3bPkBP7K9LLkeiEAcgD1Z6X8TJnZUrPGHAUVUbmb851ymhvESuA9fJY8zdEZ4j19X1UDUQW1y9Aec7hiATmcJRvf",
  "key26": "52wYGVmxmu3ZXMjaic8bCy5vFckkKYxDmUDHCA6Fyc9kGhjSpATKbf2Jba9kfUPKVBM3bH4J4jB9f2qnhADw8fpz",
  "key27": "59wkLGsBkmTFDdduxmZsNYdwuzBkbTy3WsyiWs8bNiQkqBCT4QqNTrvacZamHcfh1JeyPBHYpk9Vr2CNNzJmB6GU",
  "key28": "3wLUd2pRmjS2auG19EvgByFeLzwaPKBZFPp36fFLeXGJkZv3HYNoBT6QnAkzpWHiah6LkEPDgF2j1cBGaJq9bwmW",
  "key29": "4kdss7skT9YSNAqocpgLnCswysiB3eSFMuL7qp7XCTzxrF82NkeY6NUrGineM1ArSXcmG7bSxMFqZSmxw1GiDjX8",
  "key30": "eRsiGsZGXLaBEN3QvGrEMFGThxowAmrJoCpCyxRdBBZFj8o2CCNKpXoHK6ZebgviHa69ESXUYAUPih1coieg35j",
  "key31": "2FkhngZgvFPCGmGabFjR2ejuJUtyyc4uZ84R32SXHLXXdKMKszuj62mjQ7pwdM99Qz4GqSYs6P6H2c18B1uoMmXc",
  "key32": "Axs8ZnoDj52h1vJeJbf7tWAhhYM8pmtePoaJRMsHyNpeRomzovN2oKzx6XvMTwvAkH5u8YUkVoZP6u5E6kMQhvh"
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
