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
    "25Hu1wbZnRPdgwqT9PNcKmbRCYa4ghgZ4YPbKq4HAp5i2jUHNYLVarQNR3E59kGczuwTnqAZEKwPFqr4SLFnYZ9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ubPjnDEr6RFn8Mti2jsGTGmLnSwzFvVnDHNdowzN2aR5oxsuETvsFkAZCMoqdroabrvb9y2b9QPmNfdq9j6meBW",
  "key1": "21SP41WoFsSKax4gj2a1UC2d5qvbFtYgQkNop3qgA3LbYJ8eMAsS7kudbKDCS8Gv65dKyxci4hjfChj4qsDS6qLw",
  "key2": "2a7WN39FeDUZ15JuwCuFiEJhzUqfpsyoJtsMzoaRSehUo3XwzYkQA1fViYVMNo6btBZasqxQ5WDhRNx7oHqURBLR",
  "key3": "3pd4oVeUzLQZVWUpB1LW6uvC4bd5uMFEQNy9ZysBxPcYm3fmrC5Nm9UU6UpQLpywXSovq8uRWX8UHwZshLRoWJC4",
  "key4": "3vdLknifN2XJBBjFDh2BZ5eddHCiJJdsvoFBZYckck84jN5aLNVNi8MqjMDKz37uYeNzQ71vCp8b59C82nnPjsfV",
  "key5": "GGGzc8RPzH731WdeyuioPFs9Mbv6Bgr6zZQhx83fnkxUeemMkAeDHhJUWtumr9oc39jj4fJWPMKLd7LZ61Xc9z5",
  "key6": "4wgjYHxZwvgH37seSWE4tNkcibCiqPvJJV282jUJcU6U9Sy2UBb8Yw8dDtWd9Zxr4VegSQwDj77w5Mgts8F3Vnkq",
  "key7": "5kPWEVw9vCrbT7yyqV9PsPeT5FNvk1He41NSgDVJzH3dHdkJRPiCRrbtQh9EnACSuFj1x4ZW6PT9QBe85855wPU2",
  "key8": "4vBYNJgChfQsh9SKLt4B8dqAr6btaypyPVxPPX93EC49EE81h2owUjEJJVALF549YwitKeCUxtUitoKhv4mZ9XFy",
  "key9": "mso9mjab2zDsREBR5jxP4TRAqT6ebk4bcN9pNnLwrWjjeZUagx8ZaRdv6EF8XR1z6mGQERokf5CSG5KAqLDaJ16",
  "key10": "5PPLpJ9yTLrTHK6MeCwmLAznAcrx4HwRPrCTQ4JfPuEQw9GuP4s5Moia4xiT4hJ3BcCvsCycHKK8uLEaipyaJB4F",
  "key11": "3zwfB8dvh2Z1mGL5nncMQVBN234dJHTLG6Y6jFGsj5Q8waHHniogfgCpyFmZoBRbsitNYnbtrvgtcVMoYGKJKT2i",
  "key12": "2wBTKSsAjVwZGzrx3h5sFzvguWrECHSRYoKzknyKr6UUv3YsijPiDHRThh9TNfNJEExFLV6ZLtjCmag1Fpv2wxiZ",
  "key13": "4xzeeALK3G5pBH18yays5J9S3qmEtbeHc9C8g4KW7WTxUnwjRYFJXwRXKE6vxpKmiABdH7zfxUbF3JdjUPynywPz",
  "key14": "4whf5KZusXLLvLHirM27NFjKKvzAGt7ER7mwyPmmSkSmwhrqDm2CPCcfsvSUgDjnnWvXSTFedYzzJiBNwbWCCQQ8",
  "key15": "3T1fArkEkVPA6PnBViKnSvjSp9SvQ2R7B8ugFsdVQwMQZGqZ5bjhhwcEeuR18XV4KSe9apnFwBgdCGszPe5DcTzM",
  "key16": "3XyvwAc3hnEQduGBpXVur2gqCVbJJG8oGhoz9tyyiE8YK2j994Sbtm6qUJ52aXUxf3yZVkBQKfoyQhtemoVeGspu",
  "key17": "4ZXwUEdrGTcF99MseSkH1wc1amFrkqAtmdVwfmRkqCoVbHifr3s51XecHdNX7ed1VRugDFYhYtHx7Nbw51KzzD1g",
  "key18": "5aoxz8MLkK4HnSUEtUdbXbT9eiLetPuCtwqQ8vjSdN1JWv44mcH9HRT5HcVy7zHuSsg92bW5GCDKu1cVr6NwhX8p",
  "key19": "4SmF3kzrXL1R6CAXeMhYznxELwZh1p2aEfWmCLo25vGeUZCG84un7iBxfUzTZUsaRbBoekFiaYTuQJBcFozVCCzs",
  "key20": "2zSVQgPbcJFrXf61BjUGoj2nZu1AqHRCkqYTw4N5nKMtBb756otJSDFo4zNJZk3YfQuDmGFayDS3bEPnvNVjf7yy",
  "key21": "2mAsjKr5b7D51SmMZYufMr8ncCcsFz6FywWap7JBsuuthv7yzQgL3FwjxoMYeaBmmJQ6n5H59ELuGqwhLbWHuZ6L",
  "key22": "2mik9uAy7SSLatuRbXrPejaD4nwVoS23DAzpMZGiec9C8LAG9ybK51ZiqsjbWcy6tkhSFy5a7bbhAhd9kPXVKbc7",
  "key23": "5mEqMAehXJUSByeyaDEM7FtG69i7cbGb8mJ7ZCSdUhW8joVLAxtvAUPaDPtK9Zkrh2Lekei2JDASgewgSHPGWxpD",
  "key24": "5ALquDKDPj3Tow28LhXmA7BPp7PUETyuss6LaBvpDwGDPWDtigYcb3sXfXsga6NmB5TWJHnsg8izPnGLnxEpFdGY",
  "key25": "CS8QYH7456geFCZuJhhTcAnveE8TwrQ4xyjSqSKefbL9fgegX8cDwho7kYKS2KkN56sy29doR346bicbgc9zzQh",
  "key26": "5ZwHk3Z1mPbQeHdCAxFdmbbgodhuWjnrmh7bATWCijvaprg3LiiQBYa3TjhtnSwNKof7USTtmP2UDWzVhDJnrnJ9",
  "key27": "kWZbR7ai1TD3GhowhNJX6nef6DSzkDge6wPpRYkT6YdSUAchUeptbEtGqEXaCEUeemTLhAYLBi9jkBz4rRYrDAf",
  "key28": "ad2cL7Ra1NgtycTBcyw1TuPv1N7sDwRtVmnjUABPT6aYoeuJP1WxZM1byRJUpTNwuRgvge4G1m6dxXgTWzV9H58",
  "key29": "4dKvYNZE5UAANaqpa8SXQx7ZXPdgotwxwWuUhnBik9RF8bQrQKTd6bUPdVAcc5rJxrExiL1oS692oyZHBYqY9Cqh",
  "key30": "3g9VNrig1q6ptBzb5qoGXFRUFWxUsbBhFaBAQqd4gmFGoUekm3aLSeCciBs92iF79Am2gUpGwBxT1DwCZvNPynSZ",
  "key31": "LEM2PcwZXcu9vDn68Cs7ZPZJYa3uxruDHtDuFH3oXxJDbW2gJzBA2EeaKKNHVyBZ2GqLFwbmpSNecf8UUgFWJpu",
  "key32": "2MpUqWnMFhZbKeg5YC7Z1gAw7ad8MsqVbmBXg1XHcRhjDUSy68DQX8Fbm16DqUduMJZRuKBbAgPuz5Em555JjDAH",
  "key33": "5tFVuyPBvxujQSgtjGwyHWtoZg4cXXNoTpAM4ukddfLuFHNfRbuNVmPvenh7qfxS2kTWvACEH7r4RkcjB2rLP1QW",
  "key34": "34mur3thH8Feth5JKYHnL5UMFuGPCWdVBaDhSgWD8yAgArNf6q72HeK8w135pHpj86CTWVns1vjR5t1JVHpUTZHV",
  "key35": "29W3Gr5XXRuCgL9h7nJAfRU7R4LSv3KhkLA3KFYQZKouRr2gqwBQmVCwmLbv1vBgHkG6fQzjuqCuH2zxZXLKby3v",
  "key36": "4ZbZx8xGBZWyY38DfudQpDm4ULAEWf6cwCnR5BTmP1HKfGLbw5ncWRqyixk1AJLKjmVpF6fJKpvj7b2rf8zX86d9"
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
