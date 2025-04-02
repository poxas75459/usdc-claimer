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
    "5438j7TjhoKL3wr71ACmzrpKLSNDffGRngFm2SHhur9FZ6xQfGTfPj9u7uTrZ5RyQNei5px9bG9xfb7xx5dtYgNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LBavJeTEPDGrkDJM3qokFoX97b9VrPSFryAPhGRiFNKzxd5XiPsNT6kDUQukGLd5ZS1YQDk7VWyNj5QVBDJDNXo",
  "key1": "5kh56KF9PGAeM5a8M5cRpKBUUaNvx1BkAwVrE1oGDJqykeaLNy3vaFsNF5xW97R1npT1CSsJx4RiMxyqmhNLYi6m",
  "key2": "3z26eTvU8WWjBj1jA5tcfjXFCqKpxzRgterv56PRFXRkasALLMPQUCYyNgPky2B8na3VdmYz4CxwnXrBgrbEe5oe",
  "key3": "343fu1K6L858m448henx69KtNmhpi24qw1q8uEozAehYmo3GDq1m2bs7hHyU5Wb36WGGEQbo9jA1RgjtKhyhbi3V",
  "key4": "4Xcgy7j53NX887FT5zN2cbuWsdLDkaEZYzMnPr4kijCB9ztWU8QxXsNGGyZFWksz197N8z1r16iqursSxdhTEpJy",
  "key5": "mavW6zABVKcweo7yQ5yvmNXfHh1xS26rUAqp5FHwjeTrvCycXb1Fb9cLqCWYNmaTfHuWqxQx58u2NPFidQ35EtQ",
  "key6": "4nG9pKRjrwDNwDeNp9boirHNw7JQupbeGEq4PjfLfSzngw6ZW1wfQVeaZ5RemPhuPykZ47gPLeN71VS37jdBgErd",
  "key7": "QqZyPBFpMK5mwt3BSdZmfSbgtZp16tdyPmxSqZb5YTBQrXKMAfJTybtmerNWBjSFCm2Z9YD92ZVJHpDQ1MKVjTF",
  "key8": "5AZgkoDJRfQxNtAPQQrGbczyFufBmynxZ6odWCKp8GYKypkjNTLyhDmrjZ2eRKCyjpTGq5R3dUkXQZth935wmajQ",
  "key9": "DyQPtiehUqTei33EDcAZALMEcFLAq1ALyc6m7EJYBRBouQ1dzPdcJPgnqQ78eDrhGd9dR8NRU3t65Cft1Ei4MSA",
  "key10": "4oA6uFCboWGpm6YtTBJ3u9YcfcwvypxW1pihkRNXLEzyz9aZbWDuH6wZcgbJN2M6kzkmkHzy9JvaR9hq8juehm9r",
  "key11": "5A1faKePb7hmmMNkoQQZZz1Zj6dkhZCWwNLnSZGtTytTnwpyQwJLgyLB66LfyiRGsNVo7GjKXz1cLZS1LpVZot16",
  "key12": "3pShSB6LdKWpbD2ayk6U58E7bKrMAg6EG4UVfp8Vu9dVrZQwdJWoZo4UpqT1k2uDnAhbgDUvoBVN5MFCZ2PNkptv",
  "key13": "3VLAh2sPR29sfw4PcGMt9GpKaFpCHptSUbUaEAMjVSJi2cwZecjc4eZHgdCiELShy5JAnexWJgU2tkAGmwEiqiAz",
  "key14": "3F2PwGhaLAUJvK6xcBYbMiTn6ZqBAdCYruyfonknHGxiHW7fVM5Zg9HN62sdKpws9jbG2pKN9ESiqF9nGJ7hk59d",
  "key15": "4TuB9rYhuehrvYN82erKHc1g6VgSnw64TsNYbK3y9xK6aS1kBXeeYzUc1vaEBWTEArjTHrKEctk97CpQF6WyPMoy",
  "key16": "4A7hoZz81i6ipPWtandVZUUm1rdRP3tYc4Y5ixN24LhvUgD57iqxgt1AG1UkpQhts7VmURwfkDfhrYgPEpxgwKrh",
  "key17": "ugaXLbSUZSBGEaED6PKEoSPryQ22xza2DBbFkGuEnt8vTPdccXQjBmGyLVJDZc7DoF7beJbWdmaMSq4ePWmp95f",
  "key18": "43QUXRJuh9vr1KgwQ31HZyzXKVjtPwsJPWmwiZ1jw36iEYPGqGtjMxmWAVTByLeCMV6cCBeoFwfaAapXKfDq25Ax",
  "key19": "1utpn1nYXrcKV1R9s4KvQKVsTSFKDuUsMqZWMRQqDxGrWfHhTjmxrp34riRiuWfeNaJurbX7EsX1hgxBesgwhNV",
  "key20": "4sS673Eq5xy8usuixLxL6CQff1r7YJendqjnNqZRqqQdnU7eC9bCJQvxzHFkGFpg9cn1ehZmes94TJLDhvSJ3qjM",
  "key21": "mY5rRFf4Uz4wqQF6PtcEwNpjLPMp4KoUK4hhFyAQdjgaaXr92CMpEcG7vbfqtdNhKcdZyNSDsBbV8tbNRyEt57j",
  "key22": "cxdoYWJMYrYYFXZreMEY391LzYPfoXW1iyhJZ59P4Kyes5dsLn73BTtQ62pQY1qV2yiZqvK6w3gFPamurz56ybk",
  "key23": "ZqnuDKNybM3v5SxWEiGVSzSJNWqW3FCncfPiCWzvcbtRttv3n9ahthJuHvo2eNnXyZXqWCViKPENTdXimxa4pgr",
  "key24": "3JqSHQTUM7Hx7eSwPg9WWKtqmmrQJLCc21pK7oxFej5p8LAqi7o7HipNK2DHwh8ds6wxsfkmQBCR2br48aYLj9tf",
  "key25": "3uAbKtgr28R9CLDmyoYCTj4V1Y7UZUtLq7kbAFQ34q6Nd2NSorxWuZ7DQXxyrcJnz56GcTkFSEJYeh9vAUjR5ZxM",
  "key26": "2aCWdkwSv4bDLZyqzzDLYH7WgZuoezM9anE7JacthGuGM2tQ6gU5gGnQr8Jj5HfCazuyiBhRbSi1Fcu4KXxxMwu",
  "key27": "5Nrsdbq5KgVfEk6JsBWBBXAQfthpVy2CpuzWWbNLKKQMB7RUtv72sdySFJ4jMmUzjbV4f1WqQtncoQMDcaiKijiW",
  "key28": "5jAEqBHBYP1Bby7YAe5CTLPWZToRGwMwnpifFQkkaA6hiuX6NPhQUpGUehykrAPY98bQKDvizU14VHxQaQewMfnH",
  "key29": "4bN4prQ95QobauAswpTBb5UqDYfmn71txsSJErAfG1WjGd44LJjgMR9FLCCA2RKNZ84xUsQUyxLqxLN1yJYdc1DF",
  "key30": "26LY3gHi7fVivd7gNe1CyLurZnKTSYFS66wJuQnEjyFh3RNCKDi9WRFjPzj2s1D8bCpSiTRnAZp34NR1j63SBqfx",
  "key31": "64u29ejtxG9wbeubVWGNCrb15XvH8FGv1x3WrSxjSmaKSRicB7oPbjB4otskKCmmnLhGFHqjMp4hmPC5Y9BMqbPa",
  "key32": "3iFFx8tJF592hCSfvhcj613ZFo92QmYR8Mm5gE4roMSWtGuq5tHBxYWCygXfsto22sUsjVtPWoU44UC1D7TePaZ8",
  "key33": "4q8x7HhNHqRb3Qj8Np7VzoT2xk7sDoWBAFVJqMStgy6U3a2qPhDkjRCqcE3K2XjsXSYdwMSgNJn2dyUW9JgCtVAp"
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
