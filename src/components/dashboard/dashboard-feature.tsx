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
    "2daU2J2CRWMp6MUfgjz1nnTXkyGPJ9cQKLq3gcLWDoZccD62pVYPhxV3BGeRpFYnVueUnepmUbJHjSQFm1mqn9zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSYJ6A4XaTrUCRbsMD3G3Fibwa5PwGwDmpvLaY5c7aajv3bUkWJ7ahpdDxUqvKMLZ3odcfhTaWugDjygrQPdr3J",
  "key1": "21nsUGRQgU411wi2j32vba1S4S6Vw9aV6p9XiCfUMY3pchRwSwKw1XR4KY3c36NUq2VWAqDKfmGYGuBryFxrTQsz",
  "key2": "2myzZwtV8WHQqMGsdvLcnV4wfks4PxfowB5DGqR27SnLcR5GEd9RXDA6SPJPFvBPamChJjvfqkpCR8MFZrhnUzEr",
  "key3": "4mTQTQM93Zg126kUCPsLWwHRCb3hHVSDMvZYioP5VU2BzUxh8viBQ7kvpejvz966Y3fX3xRxU58kEf4TxWi8NcAP",
  "key4": "51nQN3AqeGnjug8BLJzuYx99uNqki1MbCAydGSmzZdTLUVreacAusjnvdBb7m45BzKGehsaFWDrFWKdtZs7mY96o",
  "key5": "ZSGCBUumhzCWyTwr6S6pk4pucdWgFQA5GTsPdUkzDHupGwzhBbPNRnJEn1Dd8WCC4fedPovUGgE1gXHWTQMAdVW",
  "key6": "5Angdy5a4z1qjAh83GKwtL4GY64gZAuZXXiJjvZtWzqRamye1neqNCE1fDN64m7pJzjWMU3cYvXkArusAX1kctua",
  "key7": "32t6nKntzgHNm1ABSJdvhqbQt7VMLGtLemXBTBtk5LAghdpTNhuLoXwPPkwc3Wochhex7rhAsGY17ZXvvdncdx2i",
  "key8": "poRJ7fW5BMiy2CCKRMWUEnrnobUL3vxBDmtZgBaTd7tb1G9TUTVgkMktth54PUhqmtN4KYfEeoNAGsWQB2Nc7dt",
  "key9": "3JKQ7TCUDZ6YpcmQDe27vbt6r3RsgUs3pHzwGvm2qSQR8vnsVa7q72DNSuDa5Ej6S4v4sZ6UWbLi6hArp3eHUzJN",
  "key10": "3HRkwpcNtxcJEgVEPXRQfCyKTkKuzHADp71S74RJrGp7QtoKRbYzeaLHno5vtQ122oXvDevBffXaPAHQDAXqDKEU",
  "key11": "5Kj9zLmkuNd7TW3v1nSpkXWsrtmAdbwEujLuDRnr2A1VgkHA1cq2YUP3XxsZgiKwDgJR45wMjLHpFjt88p2FmfeE",
  "key12": "NNsyrQHAEzc77pA82EZGrKLJ9p9ti2kaPKXjmpqwnqJHXFsDwvMuuF9XqfkL3igGY6FRuHGqoy4trVVDjPtxxSf",
  "key13": "426rjkyBRMVEumo69273yKzjiVA4YrM6QKqcPgV5Wi1TmWHnF29KcJ1qPC3y5aK8RZ7z8HmqMEfgWHbzGwnTD4yk",
  "key14": "5Pofd3Hfto2AfT8TmjN2cqmNLcLcfxEMN6b6sKtQLWwhNiFhQuXwneY86MRpDji3fq794qLsWuPkaUHWHnC5ArvE",
  "key15": "4qdGfcbRf2xUq2LV9K2NWeqVmkQcptncrH5JJrkcN5Yt97omzCyL8RQNgNuBQ1myjMGcARfRinndge8Jai7WeYz9",
  "key16": "4PKdcpVPTyEB73hGspXg73nUMqEBsMWSsdd9tJoMsFwKHQHRauLbYB6yG6KbKSM1qZjNue84ZdaiCmyoZ4QJPg9G",
  "key17": "3FhdpvdD6zve3P1YZArPwtMHTHt855RSfTFSBqGWaSRsz6sZGEWTBEkuChmcCakju6m5GB7tkpiBCikrzQAzEZiK",
  "key18": "3GhNsEjTnogKAmFg1TgKtjPB2hGCWyTZnuRTRP9KLrWXGMfLVcEKshisFvNfeEKEmJuELVGyPPJGEdF9nsde4BHf",
  "key19": "4JAL3EtDA2F5cW6VYPmpcEgRRrFiCieDYYm7552bZefRRNgFtQz4zherXqbV8BhhyjFVTmuJoDQ3S3J5AxfUZNfL",
  "key20": "5nE3xFgvaVQcdWTnTRZCteStutT2Eq5DXyChZV1B2t4xUytW5yUzuVZQ9CXKWZS5VMnbGRpGZK4eRvdHVvXuD138",
  "key21": "2WL7ZTibrE5a9i9NahNWqkRgsQRKJxiqTXkQZYNxUKzRWCjSxWa9Mx1WpnsAX6KgvPS3EH2zjcEdG2oboJSaFp1L",
  "key22": "jWLZXY3G2NEjzKpEdVXyLtjLGPybHQmiwxbfqHsTrS1SeGcfRpWYJXihCLhYyybEFjf55Z5NAsqQbteQBF2S6TP",
  "key23": "56CXS4dYjVArzSJdWfXUQutFZE2adtrySLhmFWexdKZdvGz6dEoTkTUikDTwr5Cvq6ARaxBx1GFnMVbKFWHr8Xvp",
  "key24": "4DTEtyKfZBWWRcf27waWkgaRfd5GptRJcRPJMitRTBdnmr9mzbPeZRkF4wF6xuVRrMYWnLP5bR9ERYEXoS2tH8at",
  "key25": "3wvfA33JTxGsbHf312sgbhMSeUvKyVbbNXW7kTb9abxQUzBrzLYFXBeNKF6x2rcienWBe71WcU4HA7GDRtPTbqQc",
  "key26": "APQHVyDSRLJ3rVUJRb22JjL1bZ3wCJ4agRkRvfLsnK1WbY2v4TRm7ffpuo8mfa4GG78Bru7wHbvP9Tm6JHrn4fk",
  "key27": "3DNLJD4EbQgNp5nqGmrtAipH2ZzfP2SkmJTcptxfJXEXMR8oV74mzGN8FALbFGsLCXNwnnWgt43b97wALrymFAgu",
  "key28": "5gz6U5wLQijrwyzwbqi3rAUiTsbxS3kUDcwPmuw9Hus7yGpuwXfDMC2G9s9veVCn6FxCT27mKFJimxMQKZRPQUhR",
  "key29": "2pVcUNw6Q9xnitNBbbhNpTjqmFhFu6dMRoXwcVFWDUhmAXCmN8Nf2yztv6tznCb9GgnmrCQe4gW1NnN1EcL4eRtc",
  "key30": "58nfWx7C9RbXPFaMzH25CxDB4nE6GW2fcRJraF5E8tMUZStNFVMsmi8MifmXy56jvzmfSUkfAn7xsj2LjZCcBVC9",
  "key31": "4NCtzGNJHGkorLm9Gf8QUwQrfLhdrttLKtc3DJKFsoLfmo7Tj5ocWVE3iWFiwbEwKt7VT986GEyLAz9F9AwLaX14",
  "key32": "5pkEDSLRXTeHsKVBAVxtdgMiBmwXcZLzNqq1eehKqdHn2XyfVWJLdGnWXKhEtSyvKDm2aDtLchVMuP3tD9XMAq8U",
  "key33": "XcLhSYg4ihtLG2Z9dB7b6JEqNnLPHkiTPrYj6TURDi8Mrc6s7VLRU3JRf4yLTcBWkHeBwsfqaYFENK1hfCcfuG4",
  "key34": "35DfQgSaTK7wYZHzdrXJ5mK3vAsb8Qsjyi19kVXtkMEU73Jr8ESmaUcqR1NtMFpfdhFKLh56sARSFopYJfrEt3G7",
  "key35": "2ghSDrUPmaL4yRqshV8aMX8MQ82aT9ug8f8T4LuwBHxPSpoPE4QecDPyE9nzg6pBmueB7udB8H6T6DGruGR1TzPz",
  "key36": "4xz74ApyAV7Fu5BMGLNze6jY3oGsH3ZXESxPtuqUEjNuuZkzSpnwyJJ5hwEdAvoK9zyjw5HRuYCVdWWTiTi7WbUm",
  "key37": "2GNnWqfRPuQNdmvRamARRWxxm3WYdVKaPECexDRwD9iZCtk1GWLKLBaiKRzk9Q1bztEtpgWZwM5XYhtdtFaYCsyy",
  "key38": "3CG2KtLERiHyGsZYaur29mW4pjzGCuZVXTsK5krgz9GfvkmeYwZUmn7HBKyBHJx7wkBeTu6g1BTAyLxc7Y8FXisE",
  "key39": "3sZbEgSkYa7gJG6Rr1BepJhGNCkFi15mJuGjT3aiHBQWMWrbgR6KbgcaThp52LanhovJ5pvJHfQP1xDUj1V26ud4",
  "key40": "GFG9LhckXdpTjbFNZLzbnwpD8FTsdMsiijM7MMSP2uG8neBXFSgUpTH4gbBqnaNxHdwdrPN65zvZQo6ma4gW4t3",
  "key41": "36u6sXFX1RVLbMMQwT5k4iRyFi8VgyTF8cBT9VVD286GFHEJ5fQj5yAbUhkDwVoHkGT5FKBqbZAWu68pxEczcmWa",
  "key42": "4pWQBYuP5ohVoX83C5wAfANsvWwHqJC7zSn42iNumyhTBb1uDDPV7djRNyrkELCDMYvTGzHwLNs1B7LNEbXP7Kt2"
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
