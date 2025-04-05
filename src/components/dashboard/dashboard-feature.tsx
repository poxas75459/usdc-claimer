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
    "4PMScrzqhA97B5g84X9UPHZfCDdpKtJy9h6czmkxAewhGGzByux6STvoEXsJA253Ck38UHWtFqP6JFBzR5BDZqec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33SwPQcnmCQPGnqG14zvayEzz9cK1n8SisUTtsKqi84UuxaCq2HzCc22WtuXHWqWzvaEvLXEpr2gygd2pbNXuZBg",
  "key1": "5UbN2vWyaEiLcN6vgg4APKcxPTL1JBctaV2A4MztDzZiXENzaUzcn4vnuoDLWuhebPuR5kKonyxhTkMGW7EjD7wq",
  "key2": "3Y3zRtmJGnWjrcZ3ZJJwJG1sVGjeoYnx4U7MfccMHExbu4XMQ1MyZkABkR74c39fubXMFkVtx8yiY38hzq5ZNN22",
  "key3": "58XsWz2U9EiiVBpwSqKe6RkeD3JKq2ydjiVTxMGhJkbvnAGP84VZuSsMxZ5TCA1j4p1Nm9seDaPtNxTeXgPKJsao",
  "key4": "43LsvTEX7QAhusFN7BdKfWo38T5sTS1M7hm3MgfD5JatG87TzR49uxWLQ7BWuonY74d7DAxLjzh8KZhm7DwzrPcj",
  "key5": "5zeWSZPxhEQ7pF8fnKxXg7y6eu2Ug39rBcARgTaDneHcjhidXp1GHEpmnjJLw9RsV4hw9oWJmX4Djzw1PhyRPkeJ",
  "key6": "NwT4L7i4NsfXbnKBVGcSqC9FwRCGPtTPqXk8KxzCfi4CupaYuZ15aU5ZtTa9nuyZMnko3haZDwi17KrnHkY9JDX",
  "key7": "xPJAvvbpbGN7xyjixuZjBZhVRGXDAX1RUYgVDyD6ABWkcmz5BxSYiyaXVvNnoS3Hg9Fg8ka1DzmHe4shSiSnWL6",
  "key8": "KimmPNBtHa8pyLqgUFKrT4oW7iX5EcjTWpqJZEQSHHE217Dnf5JZyZEsbLCD3fcrgzGAPD93GYSQ5bfXQoMwGDs",
  "key9": "2tcDqzzN9eECN46R9D7zmq3dqW8TqYVSyBZKoSrrpTawPtC72vAuJ5TqQHYcRAZvtY1m3umnQdRexn2mMRoC4AKd",
  "key10": "4naHtL8PzTvGW2s3gvcSKrx6rsEbTTBLCBwf9JcDKHAdZ9n4BDczLQ1QDYhZNCZBnB1MhfqeF4HQk28Xpn6PoXyg",
  "key11": "4y8Bqmcsd1bUTaKufXgzHf1KDdjLe4XZvCdWMMZgNQ5nDWECMKZXk3U5rBpaJuZQukZnb9AzM2MRdFxeYF9T9Pgt",
  "key12": "iZnwbj8YtsZm1hgJS57VGQtFwutyhHfZeEe25ZFrTcyoxpjzB632DHao9pe5cWdo3H8qd4q4qkKGfEd5dCHM87u",
  "key13": "3JMb5V21BdRURMeNtgqATh9qDNTE9k26m5axNNSfuprfGr3nZkgfHxMSiFWfgx3NxMA3ho2ZNMxAtW7QF7BKk9tV",
  "key14": "37kCgAw5T4S2FZemNWVpb6AHGSkHHSvzcUiQhxWn4t1mgMCDWA1NS4CbfBvMW5nbguFDPURQgSfTaVtSQcYBuLMu",
  "key15": "5qsEFyfec3WU4Q4GHS8kTXPAQFa6fMG5xtiuGng5DLHACrdHa7a9v8HRAgtngeyfkjxn8G1F13AsjfdmGJ8ZfA5S",
  "key16": "533VgNkfJwycoVrrosxdR3DdC2DaU6wmpyDPPJQiNZJDwg76sFFA5MsrHvq2fr1ULiC9JHBDyA4AnBko8QExQqzd",
  "key17": "3JmzLRA8iZ2FpHv8sBiar4z95FwvF329rEZSThxhorxnGcEwvrU7QiW431kfZwugnZVW9bAkGMVjdJeTt8Lfo4Bx",
  "key18": "kc7uT93EgUWB3niVi7TyNhTHsMvMMCHwLM2roiFMNTa8qu9ixLtouCfGftwiRVyBA5RPtZabiHiTNC4qY7JuhUh",
  "key19": "5X14QpUWF61NDfyWgaz3WnDrqKGbYtuQtcHbcdDLxPEZ3Fymh3CJgXSzdVvbzahA3iBAT4FATJqjJE8dpenXs511",
  "key20": "U85Hgzd7dontnTiyorcYVazLg8zeD4GJDJWdzPGChtDYP2a6U3h8USMigkejhyMSbYcD2zByQALW3QizDG1e7UY",
  "key21": "5Lo2c8sQjudm7RtkFUA84sL2XkqFKsvbpmjcyDgSr1vicg2R4ZvVteEMGsBiTWL9CvC4jxa5sULsCtaRUo356Aud",
  "key22": "vAXCQwoB38aAiZgXYDJMwqT9Wqff3rDxvex5TWe2nMKEjXafiq7MC5E38NotYanroCeSHm7dHEbu8Z1iVHu1heY",
  "key23": "2AFJwKhpCxxNZjdrv3AbFY9yBfLwmei7zs2nF3oDKmRcDRaoY38QnYbASbGr16njMibNQutz8YkmPaSZ274ET5Ny",
  "key24": "5ptWkeQtnKLB1TFh5Ug6DAepCesZC4BfRpfntdAuEs7ZonMEyH29up7cn1YgA4KWkwex72daLcpGxB7a2qo7B7sJ",
  "key25": "5LMn2LVKGZWfzKDw2RegW2ETcgMcwe5i5uFNkzQDfHLP8c873AqzskB6CvXjTQoJSmBDMDDV3V2qcL6TLqWH9jKQ",
  "key26": "2idxzoZx1NhGTr6oUP4ycNf2hVTd4qSsXZ6VdBZD2i7oxtCz3tDJBopYq72ub7UEhQ9J5CAUHcWR4Ru6iA6Vr9V4",
  "key27": "nDDyMiPnKg6AQrxsqy69UiFLqvSNWoCJ4VHhcX2EeMDr4NhpeKDcpXBe5jJywPijeaiVELf5Q4DuZj2sZJqu4FP",
  "key28": "3CptR877FJknmTAmkgTnvZusBQLFZSVp27KUBLFYSFZdtTs5XA33byvXDzv7M3AsfiHo5GRJRwp9zhTjYs9dwRjL",
  "key29": "4qizgr6Krfcj2wctdaFbZWxFRgnrhi7fKM6EgVrkgjRg1vGrbNgjM9Mmm6ifvKwmYqbhYiUMJrpfu2BtdxHFWXLc",
  "key30": "5hRvtqcXkmDbZhxTjKaeJUi8DnWxeDZFZim7ALHckGHmN4p2e22o2c9xAwZB1ZXr9fYkgjpwRYdptDu2FapWAAKm",
  "key31": "3VXPhaqnFdBRiSSwx2mjGU6FwPXvU3stkyRjj1zH3JVSrXcRXS7gt7xHymBnDgp1g1CPJxvsWXXjen1wCXZqvR2y",
  "key32": "42phRtnPvuKuNWvJCrEnMskvLadPaKczSmJdgYZzZ5je4QwmQ5Ani5emddXkszqLHQakZQaepZQipQCxoCtUAQTW",
  "key33": "3aV5rKvtwcWi8j5rDo7U8PauDomqKBbhhtaHhaHiNv9ShHDWadXpAQ9ZvPqW8EoiuRMpLxq5w57kbtEv8asdMypD",
  "key34": "2n2ZY2RdgUpbzi5nRVfQSgZtc7HP5KFk57TWDubfDmfRg54pC8nhnoQCLDM1BMENUirbMxZhahePptBEiGvsc3u7",
  "key35": "2q9GvTHpaYfSyj9LSQd4HLc2UZoFf5vbMPQzo9BVufykQoJSv7CSWsX8TuY66vr3PrcuhjhiXXST6CrkiwEip6W1",
  "key36": "VfQZEYYsSagzgqZV5rCSgRJduXQPBbLnnbgzmmtBiR9brm18GMdYedoJHkosRAa25XAV1NcfwE5TUbDSHzzSr2a",
  "key37": "3RmK63M7petbPtEw33d4p5D2ySfL5vZcWxJUnuUQVZLP3KGMKCwgLGXzE7UrjcremKp1grPjYEifyrww9oD9pXpf",
  "key38": "3afRS5iNZ6Qxdgv7uEXH9XXfQa7MiSEWrc792rwBD54KKuVq7Hu8i6YGPJvAnnv44t51pj5K3YwjEaKqpvhAJWV",
  "key39": "4KSAPDRD8QPuvddfSpHvTa7eMmZaLnnGKXy8EkMsT7Vb6zapNYRmr9QNxzNMKvzKf5LUCvNTA7it9W1hp8GRrFE5",
  "key40": "3Dkp3BN3s1JmZKDmcfy131f8PEwGv8nnrh8ipRdXyTPipFefUdW5pGDoFfBhCzELCQWptDN4T615o5P3CkVmfkBm"
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
