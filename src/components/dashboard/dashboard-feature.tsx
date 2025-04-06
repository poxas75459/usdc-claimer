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
    "3i4uZKaALRryofrQGGJgyTmiCia8q55WjMQ7pfegvWtoxUktshBFD6ZxAzkwXtkiK7rxFvSvKt8NSGkz9eZpxfcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hkgDnxvDFM5c1EHYTCcCCYnbdGqoEUKdtdZTCeutYAJfDJKwsoVFi6Q2mi3VSCrytFzADgCPKnaE86rKDgHTU8",
  "key1": "yy1nvBWyM97JHZbBx844hNZEgw6KtWLWedrwq5w7xZCVSGGomuBNaaP2rWLpJSuhkFa4EeS7Vjfn4EoCwb33Pej",
  "key2": "Np1jKzab9LiZLmFggyYs5PUiRb8vHuPq8jSeRbyjnXuVX5S6zfNBkoJAfRt2A4wBVxnRxpc28BKfsWADicS623p",
  "key3": "2haVGJ8CUfQEEArEH237AxunGGDLc7rv2hAgPaGsJk1pppe41whiwvMn3cKcR83RqvCGdqz27MpTzDDutjLhg7JV",
  "key4": "45k8k8E4ff91pXxgQ9NEj2M4C829FiWpiEtBD9QscUQwiihGz3KmS4o7LtDducgQXhUwrdzS6X9qM435UJLmrZXf",
  "key5": "4uu9Wk6XmpJnTHP3T5jkFZMdAw6HV1e7vap3kgoLfT9tz6mdHCZ2W5qr1FfmHGUuFuUZ5oWfSxgLc99CKrZJTfFz",
  "key6": "4EniX4DLMuxK1RYVdtSGTXoz75wvFXVnyPgHJtDbcuh3VH4GTaecr6uSw2yMGa4fpVbqtzaWTqu4vnRJF1AG6rec",
  "key7": "3V3833ubPfnDid5uxwG32yrxJGZEHTkNmdeXL8x5gTry85yYbrW6tgPSwjGctQfgkTPQD9A97neu4hkWQKwZrv2Y",
  "key8": "5nr8M6XnZQ5kFRbEY3vB56NcKqUPUfm4BthHpoBj9fXJXrfQTtGUCCPgByzFNCrBTMub1hJXqwRewE38fEQKrecd",
  "key9": "3Cer4vwDf14ePHSUbr9L48yqn712sibc9Hs4nuuDbYGDA5aEGSfD9h9ok3y1NR5voNZiNVSoNyFJUC7q4Fg3Psek",
  "key10": "EoQ4ZqaJ1MJLgifBDyseViBmGRHxTJHMh8VWdPiHTCXWBXS4UUHS2skm2KWa85kvrHF5WS2TE6twjDySqt6V4Fw",
  "key11": "4btKduYE6u5pjc6hAL3f95ERcVYRFCujJtTxEzqXM6uCh52Xbax8P18k8zCPsut2RsC2WgEStRi3xgYq8yaN42Tg",
  "key12": "2vxcaHp4XGLFcdCNCWkDQBRvgnX9YeSYyDtzpDLKqFJGeS5TgxeakywcYMQMaSSrRqrQg5XxQTLhBDPrSbLA4irb",
  "key13": "WpiTAaqMgp2b9MZx1XR8EZdZxLV5MdLtmEkMeg2UvisAgoTQT28McpzPfU1dv2AnuRK3EdqqwsTkpadvrRPR5De",
  "key14": "5HGX3PRwaBXnA6BhzdX33JKLbPgfXmgSibUSnzf2qPGkzqLWFUZxA5cWKRGeSWXeejFAqDf3XC8NqPFx7fwv6Mhk",
  "key15": "4jTpYrdC81UqH8NfAtdqRAby38nwsF1hDnjeZS8gTj88Zq72e4ZiFJwGbQ7UZNQJKs46JPG5YV4VQCvyDt6qWRo8",
  "key16": "k718BJhnjtZpzzdNfbFnVApKPeDgStbC9YhfNU9G6nFeAPxz8QibSqyaE4C3op1ZmVARX27Ahsy7ec8yE6HoTZt",
  "key17": "5LMCNRj1tX6t1ULoCCpBLQ3Wb2xkqUv67zLmSh7kPaabSdjEJ53Kkh2JVf2UKHbQQecSG3aJNE3gsMF2QtjDHRyK",
  "key18": "4GTYGUWZMctAL2FVKfAQCocLhhrUJtHFECJYYCtGksEzNmA7bBkoZ9ydBydeeAr9utuWfm4Pi25bLE71sW8D5RAq",
  "key19": "46ubaVgwfq1Cb5diRFRdFm2peKbpwDw9aBg6zYk4ivci8wuNdzpcnDiT4fJG5igUhckGm4gVDGJtiQ9WcerLakKg",
  "key20": "5rX59TGTEd6N9wuoJnCPRnJAfAv5caUW2sHLiU99XTDVcmLp2rNmvCn18uZLPJgg9EkfkGRmpdGFWHsbd3ZFMXY3",
  "key21": "27PbscxFwciHf3j6sNFbzkw2cnqY7Bb3A4e2bdcnYJfhLwrDh422i2bRoLirDps3fxZ4mpG9eYgcHooWWSQtRHu9",
  "key22": "5nXTfPSQnWxydCMKVd9xcgAKhTy4dXH9vws7BD2P24k8kZgEbxxpd6K2BeVwTre3p7viHjpDfV21SvUSpkHhTV14",
  "key23": "3eGGasDScyaMBpa4dW9CigRmKiCZKoarW92RREHwzD43Vr5Y56hHXTjveTDWdLg5WchmQ5RE2kukZGJTrAwxtkHi",
  "key24": "2cGfm4hAMGRpCuzgKHSUtdYDwUdxK4VM7SySta1yapmUcFRxpfecos6fw41hGzZa64Has6iszje4qA8CeKJSUfYV",
  "key25": "3j8Vx3DZbVhLKQbQZTvqDAvth63pB24YyS4pVcnzJYQQuNvZ4JufyZ9acgYpuTH1H8LME8i7tT4dYFG6f24yb6cc",
  "key26": "5ek3WHMYgrprJPmi6vHt2fKWGqGe5uCtY81hbzC8Qeee8nVvy1RdX3muRz1TJTKmKLmyCuqRETwqF2GQ5jzmSnFX",
  "key27": "5QrFELCjQB5oQAiSF5oww8HYmVofCiedn9GS2HdmZzhHX16JGS9EQRaEo3GANkhD7Ag7dKPjEoZYiBUVJGnbCmPz",
  "key28": "3wuQgfFv4sfJbKn1e8h2kzxkRCaVhYcs5xBuPUaYh923YAvBGnrbCxXuceeyWVncencu2JaTLhHSH763GsegdDrX",
  "key29": "2KzE5cPTghWjcdu6yqsPaxzLW5wCkJBQEbQbT5uEbPSwSHM14dbHzzQfEPvimzXpHPfDyJeasuHVaF21zzajCKAt",
  "key30": "5dXed4j4sFpthRNphL3jggxhnM6qKbgFsJjnoXBR6AZzUgB1m5RAP5Bcih3ugY6aAw4xKtZL7dwA4RWVEeEqWBHf",
  "key31": "Tct63Ju3qtT7K3E17snZajyd6oWxdEwXx8M1WuH9oyrmgEx5iYQYGRZsL35d9hdQwkePxXLwNJzh6E5NNGPmdLn",
  "key32": "5QhqQJqwHFzoWEvp7CTkkCc8nLC1wyXh2aALC3ZqBFHagKHN9zpkiE4jU1RE7XeCty1joSGgL5BaEgB7xAbhpNiU",
  "key33": "3BT5MjK5he5q46xNau1ntDif6xjbLFgx5QmRYVyRaqyatza6oivBaZ8rPnC3XuCKRJqtertQnQSg8Wr1htbGdhR5",
  "key34": "3pi9wRR4m5ATHLXgfKCAmAU21XVCFem4eUFx5kSNGm8rquJkUxxkVqPGguA4KqRqpyeiQvG2SfeRofzSpaJu44HQ",
  "key35": "YAmmjS3D1oi3TXwGugQD1vxcfocNv7tSJsUPnuRSqttHGsoEKXjmMQjeLzkEERT9Qv1RDFKxDCYpY4zSA3MfiNv",
  "key36": "4E56FhjHymf3isCattAG99cDY7XLHgrByP1mkM8rzZoxsfJ2jUazwdYmp2HJA8aDu5NALJi7WQfRHrEMKMwdjHzR",
  "key37": "Ccvpa1H24xioj4s4J4Uhy59RGWVqg7jUj1za8bKogDi3UJBUJFQ32yzU8eR69WDLyP1Zii433b7dh4dyNPeaxAU",
  "key38": "4VsHVTxjFaRgQ7H4xDCX23L1kpkDnsfDrCt83k9XiMUffSbj6wYRkmcXpAFHyJg4gYf645fqz6mTrGRYZTrewTNB",
  "key39": "57sZnwGFnreej3SNs3Eb1Wybgb9XutoE1KJsSDZnRkArMbZ5PYsh6gkEeumapo98LvDU7APqVLLmdADS2UionJEG",
  "key40": "52AzTqyh9E6iGYQLHMPQfU6XCq35PUhfJ39f4s56gKqhRvS3Nh96LyBHBHaws8BEvXPAoADu4Sn1cKoKEQHTaUgL"
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
