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
    "3xCgvMa2MpBUZG1kKi1qqmXwoT6B7EcmRHFjAknz5USvKnevGQQsfygcWo5Kt4aMTuDCYR79cW2nN1Qryys1UAvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BnrUYhPpuMHTQ4axXGnshEPQsrdjnf7mxeNLtiA5AoRakviTfSxNgjZdtbo1wiNgVNkCwqZsiPWsUFfgmPK3P95",
  "key1": "4FtrjXyGJ2svygtNtTC5DWH3TWZponr5CCiGmmR1WGfkGE5GKrpLiwJfq4xJTE68xKmNEPoAai8M6fjy5upYwtR3",
  "key2": "3VahkxfMtFXgGGaxLNhV1sqkWiqt4KTRV7M7psi3WkD13yhBGudrDnd8fW7QTWUrhgStpjNXJkAggeRw8KVP2PjT",
  "key3": "34pLCboaMr7hq1dMCC1HtUTVVzo8VXugUKjL5oBGP8vXadjm2QaokMp2C7Uv6Jg1Pb3ucDfGZbmbqYonBvB5AX6i",
  "key4": "5dtgvB3nNcRt3ErMLCGvoaRCGnan3yRZi65ybmAWGVGResetjLgwy3BLhr8ecDPLe3s1EoVBDs9EEZP72qJ5TmEN",
  "key5": "2XC8tEXqt1k5T6WS1hhizMzXoV4XbBsPBgzby8PYs4mZTgZwFtkLdos1tugd9BFouHSTPENshEhBnpKHcMAtAmuy",
  "key6": "1x6cNFbwmik4dVhjLvgjRjXNAfkMLkjLsjHum4q2oTZfd5jUDREUwkiQz5MegKwRFk2SqVuHJVcCAyit5cRGEmj",
  "key7": "t6C5WXQEiDRxeAHhVkVYpr6NuYMUy4MTP5U3QA7JSDkD6zNPauJ3LinAp1DpkwSMe1mSuWqfNtmR8Z7f1UtadBN",
  "key8": "5ZNsyfo3hkemTsBFYBu9rnXrzACmFhHzMNgmkR6akcvN8jDSFYhHRX8gFsKwKtn1WdzsgtHFzugQLjZWZ3RTSg1J",
  "key9": "4reNQ6eXoPQGcnbn3o12eNkxDZLAQ2NHBjrikxAx48Az3bWNhDy2DYVk4cDgh4W3gV6QQQCxaFoxeDpaQoDNDJRi",
  "key10": "5WBJ8XpUBZPcJMEtRzQ2Jn5aaxEwHJA9hXCRmqBzdTzXPyo6SHkTKpUm4EbaYAb4TfkvmRKAMKoybNzVvphHSaCa",
  "key11": "2EVygSEcSisoRVc8K5Fcn2JM46319SXsMTcMLoQCp8XA9Ld4kUkHv6fwLKHpycDxzUkHdEab7LX7A2Qwh7FwnhAh",
  "key12": "5hQ2rmqNJTk9GyuB2tKLvU3EJ6Kzbnho2VhRP4bLjLUZHjXf8J7KAEMbYLxSkrPHKVM36QdGJ7Zt1wytfGsDbfgo",
  "key13": "2q8zkQzjXWecJ5r12rqFD4cKwYakYM5GLVfTV8mHTEeKtmXzqK7hkxFunhK9PYfQudYspro6Eicj4c4DWpUnnsfQ",
  "key14": "4tjvgVRkgvgdGuNSDU6txcEXhp6E6EUdFGvQrQ7tUoXj7bHmNjeycPLgWyL7eufi8QPNwtTdacC4otFrKKBiAhW4",
  "key15": "3Vxu2L4tqBChd4F8WZmbbZZhxSX145xYtLszu9tcxGtyi7frNBNi4z8XcGdqEgde5hW4tREPucg4BEZnm724Z3NW",
  "key16": "1r32hZ8CY33RUDG6KwYM5eUM8QEEXkGu9nLgndh1jhWJNTmvEaWcDAAoMiPLW94ttyLzywpqjfhZj5FGPhR2r9q",
  "key17": "4WvChfTXMgwRM4uoJXVWqCndyo4nE2j2Fd7dHp87Q6wqHE1XWX7dNyq7eY5n9x9TGnyqGfLEQPc3ZBWZBHk5X6hB",
  "key18": "2UdhrKgKLJcLFBm4Uo98EVjRMJ8TUjkYpCLGBZPbF6RkAmZgquASuCeS4ep9znTAbJW2kEaWaBzr7nixxReqae8X",
  "key19": "k6YYjjyNGcbaJYdXENhtd3nwJ4HFhj2LEve3EhBV1mqo9zjkSvXuy58GMmWoG2Bhpo8KDn63XjEgv6Qa8P7bA4i",
  "key20": "4JCz4dzTMBz4d8PotfBHHsRKzkEUcdQhRBamvq7abEcLRHp9rDXrBBKGiiHYRgRx5QqSibL7cPehL117y9z27Jtn",
  "key21": "4nN9AmXniT6HhADfwxxQT2sRN64kxPyvFykVba7ZWHuxG5B3sFfdNRjYewwxHGksV2UBomTNiyYQRvJY7bkzJngW",
  "key22": "4o8MCc9zW8wXFDHFL1YHCfmFS8W36QQ2vWyf5CLTrWe8qSNevvYkjAVtJABFWkVCA6671kLiHFXKc7JPRM2sX4nR",
  "key23": "4qWXbB7vxsZLKfqLYubDsxmd2ZEkEqtQF9NZLYfN6ixUBveFPf5vAHUoiPpQce9VHRhsviQWtRnatQVAFJq6sQBi",
  "key24": "3VjRJhUH9mkuG53iRBaMEAFKZs5jxBsWX1mTjYBXGt7X7esFF5jLP9UTbi9FFJGhgvzsYRUdUTBXfB3tJsPWh7iL",
  "key25": "3WCJFdrFsoxnWFwuZjmwmFbnrzKAWHZXffLxbHP2th2z1mMwkG4YviDJ8hvnFCC3K5QFQHaPRHUidA5ZDPP8resK",
  "key26": "3jq7sMDpC9Eyy3icJgDxTnJo2W25CyUVnFJpiTuZW9rskmSiqiACy33XLSViaB4V92u6tshfYophiEEFABVNR2fn",
  "key27": "67kBSfeSWVo8YeVHpSzZMZX9CtJhjBaJWVdp9y8fYPNZXvZsf96P778kiBWgAUfgoSZwnPnKfmDBkQiBohynbJ2y",
  "key28": "2a4LU4z1F1qjvkgd5d8ivwNVH9hV1YhEYokiBX8qeLdoT6TTEVAPzVM4p4mq7EcKaY1JpfdDpARx9JbmwNwX1tp",
  "key29": "3X5dT3hrMLVJKk4ueu3LxmDffsrTGGHUFB5FJR3W1TF96cUJ5v7PXwmy7CdBaaMuCfmTpRLtEta2g5CwHhFxHLBK",
  "key30": "4Ubx1fsDs2QDzrPt5fuG7k4X1htjnpvUB6CTr9sjVbHidyh3LkMgADi3Ppb8bQABo6H7hBchx7RjJ5hEYRKSxrod",
  "key31": "3HGbedE1T35HMM3qrWGutXUvUnHW5Cz8v3urWv5uxZmorazWRAqYspJfELgutBcusBySXkdjAe8JbzHWUK65nyqH",
  "key32": "RvE7JSrY3KA4LHZwgbwCXKkPqEV5KtP6CnUYCLyGg5NVJ4yfwGxCEMvkCRMpmMSxLXUCWsqvZYRrLrGRNYQpNZM",
  "key33": "kLLXKPjTM9uDw9cGs9kS9yvdtQkQ2H9oWZT8YFaoYCvyHgAyK3o2Y5uFkZUAN15MxB223YS4XybCVJ9pw2aMNmu",
  "key34": "2sinM9DTejf4gni7pogbLNdbsP72CR7Ys71x8LWKrTECDuaqnmP4xu1kts911uBwerdGBZH7s3S6Vv1ntcEdx96f",
  "key35": "2jssAyYgDQLPboNFrM2oX417QhGFep5cfzHXfdNdWF2mgL65qVNVzseCpZbLf2nW8ttCtBEFg5kssLDUqrpdWjwZ",
  "key36": "5WL14Bv2xEu3BUAJ6SneHaaFpLgjSwDSccdtg6wqqAJj6kDE58aSbZfT12Rj4Tkqq1WJoL8Mm7GBHurxFXLGJcG8",
  "key37": "54NvcLvKNXEYBKrcnRdhPbqEpYPT6jpRQ2ZPGGm4JW3qQLy7d6j37KgadLWQ1bJtXms8U4hRqwV3WorsYGgKubJm",
  "key38": "hxa7UwgnEcp1PUgoQvnnsBDUEcpB4XDWLxn4ajKCA2jK4otBWCTR1uZZ47DgGaBhcyHwz26uatmHGXrGEbHXExU"
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
