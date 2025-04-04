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
    "4JdWKMSfFz9iSf493KsRoWCUdVFFV9j5GQ14w9GF6axERPbt5B7CMqyJYGC5KTXQ89W5RHi4GDEqQNbWyyXbT4wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9NcLn3E6QzZmKnRbR4H54jJyRCxowaKBgzGD79277XJCz6VraqgRWLREdfLpqE57ZU6xYaJVV8zBsLgHakGkbY",
  "key1": "5iPGjvgzf4WNWJBaz5VSGAwKWUk1gCMBZ7unqwpQj9iw7S9a3biKJiRiky4okJZ7NH3fR7epDUqQm111Mtn3RuvM",
  "key2": "2yxv9wNEDBkE7MSxgKX1tKacsYZWwTMpR5d8g3i4doy2gjjm5Kk4uWTeRcjscrzNhiMyHjiPUsJQ6Kd4a7QA2DsM",
  "key3": "5ysr1Ni8FS6QATijrizWpBges62sctBZw2X4qpAE7TD2FcfvWgbEVSa6HtQAnDxjzAvbZfGqLNzNGWG6bq2yqT8W",
  "key4": "36so9tXyqUaWWW9dCjLkwGNR9VvReQcntBiFkrAdHTBKgzqemfHv22vituXEtT1gFgMjYZ5TBA5hQ1vS8GVRrwBH",
  "key5": "53Duk6Svfe3hom9yzF1pgpQ5SZwmb3DTqGsFm68SBRc2JnzX3zQGB7RZfxyLpv9qoZXANUX7KRFTVyJoNDhKWBwt",
  "key6": "2CLtcGiqJJ8yi47pAK8cSbvQnynYyAXBrmjJH9uRJRmQLhqmTY4UQMVEZqMgzgf6ZLcKUWUh4xmAWTRMW7dkTyrw",
  "key7": "JnXrnhD2w8mRjBzSUahBf2b1pf97uX5oP5Un3ntYnDdM8iX5q6fKToPjuDrCWDNUqr3ccNG2FJzDDeCYcpyVQfH",
  "key8": "3tn2Zp6QMFJt8KX6qZiQheUSHsBoZQUZ7H4GMr8ym4xgbhPgN3jXTzMctfkg82dP8J14xhb9mtA64S7ffuxqkBSZ",
  "key9": "MFz58tXRPr8tcmPprjL4L1TdE3NJiFphnT1FEw7Rw2MHmvPN7ss5uFGC2jEVvcF73Ftnsj2WCPn7y5VJcLcQvTA",
  "key10": "21U3wNQYzLEc72bNDFkLL6vVrQ1tiGGfWvngoXfuqFHkvqYaJdUbjTnNz4rkgDDZscmVyQoKPVXsyzLSJn4Wskma",
  "key11": "2Wm5q3qoBPFvbPtRDEJitmb7PVeNQBKKzDtkVvvxnXy4H7vbcx27xM6WHG4MRFLrLMrxKBmhdWv9pbF7JV4NU7H",
  "key12": "3wSHNUk73NYQqLudRDRe6sfuSLYJEYoDAWnNbxzVmZkHDKuVHHgA6rMPaV9pz9YBq3weLznDCtLaHswGA5xANf1E",
  "key13": "5vNUjpT5r3gCBHiJF8mF7pY3D99iAtzhFDX4TFKZ3WPtebixFNCqrNrKMQUWgpNuqXUoaTx6tpE8fUoHWaQFTGEE",
  "key14": "4QrEE12tNGtFRYykHBxmiBoeYNMXRVgBoFRfSopoyktMTzbcLY3efgyJH1AuER3vrnDbir8wjhrLJ3Fb2zwhxN6Q",
  "key15": "4oxrsuZ8m616DcuXFPRMhPiQzPwuGVPS4mojt9gdGaoXnWhMqbt1rJzJvM1TAQhEi9QDAsQnnsBQK26tcbWDvf8s",
  "key16": "2NavEBmV74DHyrQXaHF1mL7thJhG72HL1eiY3Q8oJKNDrkDrMADwkSNvTvigHuJhJvkzBMWt6hAHSc8SuFk29KNJ",
  "key17": "3N9JV3MoFhvRwhkqx6aLanByoikaPCUvFKorAa4T1B7vW8JvG4KT2mX3PzDyj5vtpHJp4ZyfWzFc83XYsUKQ54vH",
  "key18": "3jXstCeBxJkDcSvDXQ1RxNgYvUcgm58NwVuUf67EUVpeFyGuPdxxp7RoePejQC9GLWWDUsQPGei8gmUMpw3Zossw",
  "key19": "5zop1jhDESrwN9FuD9CVyriQsaedgbuMza3Jg2oY3NHkwwYbPmxehUGxKk6XXpHPN4XQJ5Qb2EY8fxWLdoCi69HY",
  "key20": "sLo53MFSXgZPfDMNDJtuHmUBxVrcCsiedi24Zp3eJtYGwKfijtmQdXmwiYSJ1ehecoZRcRG14kDeEjp3v9tKwhb",
  "key21": "5qfTtvvXwtKQtoGRjWwM1r4yddg4dqJHxrm1heNSWzuNxjizFrwYkSrmzM9xwrGW87exa8hhpnUdX7rFE7n4jYr3",
  "key22": "5EuNRuyvDTbVonMHXKTE81BcQZAPYZhHeHhdYRQUSSfaRS9SRfbTivGFpg9tAu3jhZ8FNRVQd7xFueJYHcQxd3kR",
  "key23": "3kNNU3j7pQZRMneCcn4H8MnXu3WKLt7hG1AcR2Y2hZNna5uwCbLMijJzdhwKKMgPrjLu4e2YtFehFQYz4D7xpDmh",
  "key24": "5LL8hcB3VpohAn8kbu6JSvHDpF7PhK1CTPV4j5oYHHtmtTg1v84SWDNrmhnr9YGM1AH3ZTUmARMXBRWHgGCMZ6Fz",
  "key25": "38NgXGcJxMtQn68WicAxvmgm2T4X141cTg4qZjsgXcRVrUYDRj6nZL5nrGxehrbH4Y4rnGhs5LEFHPGjkvHLAEMu",
  "key26": "G46TaZqL2Q2oMTJ1jYg2kcCRYztpfvkteSUJhM3c5MyBCRUZcxzTVuskEzuzy1ighbHh76Mq8yMMPBBMRRTQJiq",
  "key27": "5ejbvkms3uhwmJdiNxYqXWoEPawXTuC1GoFNuhTgMXQv3Xnt8ehYC3WTpL7BK1FPBXNsb5Tk7kFvmztW2SeVnaGo",
  "key28": "3MuUT6ejWih5ECknCkHHnzVF8rdD7qPioQNoK5yEP69Gi1KPAUaCGy9GUyEkptto1MugNNrBmYV9dTkoXpKYoBYo",
  "key29": "49AcDUxVW5c7XxUaefqxkCiKyyojxcvk1nyzE5f7vQ8cBqinLj38ZfL9EY82wEtWdXrZkDsgVo4zGmFX1pvr914p",
  "key30": "N3A2xBpCpQ4RGQzkKJ8hnni62MLw4SgibrgA8837xjw4Nxk3rgGhwmtS867x2XyTLLA5QPUoNwqgYCQMWDwGsj5",
  "key31": "2HNZyPJXfFNp3AgwqDPbuRQbibyPLrBJbD5vC1WsrGSx2dg31YaHwz7jwnzQTqALvrtRBuzog1rs7RhztMXeMzXw",
  "key32": "HWgT29UjsP5TUx741kz5cc8mHjyk5jvNdVke3T9cqFoTS5i12LotdqYu2aPFR8gWizJ19SMAzrnzyW2djvcxrCB",
  "key33": "HFPJopkXTaD2XcfLm2yMEgEQnkWaWmqCRJKEbWH9cDhW742V9SpKmEAeGeewtQxve6ugqwEtaDKYtWyML3K5QNb",
  "key34": "33THFfmucSzxAA3hnzH2ycpKh9Nz55Jt3jNDW6unaVu6UsWo5ErpVzhAtDg8ZoeGLd7L4TJ4eYqJWt9TnijLqEN5",
  "key35": "2RPXXDC7DNe69v1aterYZQgwCY9C6RBXK9dmap5jBme4fVuA2dWRLUXWnWh4FGBcAraioUzymnF4cHhzcohR71mt",
  "key36": "66YbLuBcCHyx4Cn3zyZN2jW6DVu5Xs1hgcEqwXBtfsmipAXeWdNgEFemTiH37hmsgTHrELr2H9kvzm7KPm1nZP3u",
  "key37": "2ortRpQnq2oJZFJmjkjDogYLjdyxmPiki6iWLCadu6MsvnyVTu49sR2GiQrNm4y3e5tztFGYCrSm231gDVffWz2F"
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
