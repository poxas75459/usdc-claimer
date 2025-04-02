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
    "GUKFi9pMnxoLJAtLzMkDJTSjwZTje9CtaZXQj2NVkm4nb2QrtTmJ3RfbD9gGBCpEYuvx7cj2cTF9hoMEfPaAMG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5mnHFBotP9LD1fSQYNWNTw7r3CzgGYk5iPQXeQJajZ4RGBQgMY3TPDteXjeuh4H9CPFFzHYmj5RDgtyaBA9ZRc",
  "key1": "2Z16xXyZAPaJcFVN8ArKCA1QcjSdYxiSqX17bfD3MBmDS25wE5QocPJqNcTzR4ksj6ALUT4pV2oLR7zLKjm2SRxG",
  "key2": "5v7VR3KkFjxhPJFv2p1oEBGedKZNjtpphLs4qeeu2cPz1QrK9XiHifHtyAnXpsZpp4Yx4Vn4VRDqRdDnfPc4Jpxj",
  "key3": "4VuJNvMLxeeBnYNEgEUBP1vUt2egsSXhdy5g4Tvm1SYGBoPVXJVqDHHFDDz4HSsAJFyhSpUPKz22hLeftQcHqpk7",
  "key4": "4wdeYmJxqGZurhNdDW5CxabuN34cWU4ia1fmohictiT7PENLrYZyuz6FS42mXpT2LgyYKDRicUTvtV3XcTC6oYvK",
  "key5": "X4Jm11XA7rrvsyJ6ZD1fCpFr4CrN8uDQZg8x57eecEdCdaA1fLX8Wz1BEb515YSiJAGB76mRWJ2hjgXiZfnmQhx",
  "key6": "cySedb3LR61j8o98Mqka9HLsi91kfepupaFC97MQdwGujTbMmQKLnBBmJC6LTmNbbDTtWTGomJb1AYkbWWkkMgG",
  "key7": "6doR1GPHe45XFvi7tYjXMYoWqiNF4UdF1XS7gN2szWkbCn9s3UVZ3dx7NBcfttBu2zBNfP8hcmNMHrU6wdHjH4q",
  "key8": "zKM7ND675vHUkhoNgRZ3N5XusKtEXraXUbYqEJkJxkjbubqiRo8vzrh3QNm2UKkLavaFxbfzPsD9xhhqZyDJxz6",
  "key9": "5edQDHWApWiRQGrnzka1CDG6RZKfSzV1qkHJurBTGDYFTUEgPBS6vi7qJxf5HmgubhWenfiSVTd6xvmZSRwHfoSP",
  "key10": "2vRg3psCtWY7zmyj38755aEM4A7sWmrwb1zmdoZ1VcWeBgjMCuzApRogizD1qNeeqZ1WfTUhksYcQgY8it7BA866",
  "key11": "2JsqV6opopJnwm5dYn1d6Mmcf3EmZcJZETuk6shdCRDXY3mt5okHjMmqCvgFiMfPUGyjqUXY7m6L4EhaQF9pZDzT",
  "key12": "43EPh15U7FL6tcW5FE56Dm7xNnuFt1SoSZjMi9pKwrKk9j4vH7ozLutdZQ59JM74REHLnR5y8zsFC2RDPFni1epR",
  "key13": "5yaNDgiGVZBabHA1FBsUNc3ASKNrRn12eadXEW97wugS7PBuH8GtjoTqKPmX4sWFe2KQgCiNbMkPt4b51ghusTXF",
  "key14": "wkN1rovJhxq7HAZEhqRd1j3eYBz9cKtdkRqojyFPi7tZxJEt81GtyMJMpjUX7kREoAZRB66C3gNQ8fq3xeTP3ZS",
  "key15": "5HZKK8NELKoNqXMCKVg83k6wjwHX9QopSqvmQubDBquhwdkNAD3fMX4t8Zm79PV5VpTkninHUStDAdJL8wudNX2h",
  "key16": "3AqoLe7fGRuc8srjqMQm48FxPQcxjRYUtmmX2qH6pJaHpRFibq3sscwEVrni7xNsb6FFtgLsihb57msi3iGvUWxB",
  "key17": "5feuyrB588tB1Y8AsFgP58NZe4w435onDKbHRN6bguvig6wDRJ6TUhZxDNN3ukKu97YdoYhKmMeZdbZHxjtNyKhZ",
  "key18": "48wTnWRGt7rSvpHAUtfrp2JdHe4ueMJPzrx437uyQfx5dj8UrwN5Pf9einb9ipU961XgKmz3btfnUEpQpXk6keux",
  "key19": "2r3BEv655SsiK3vscuZDLXzwC3C6acfahARgJFCJkTBzSM7WaNVnVXCUWsNLmqier8Vd6MbzbctSQ4xphwvG3xu7",
  "key20": "2Nqi35K8uj5LR1hJaAw6fNiHAQsWdWFqYcziXDX6MCgcR5HdFbaM1m7b3X8N3JsMuLB5Rbn5RPgJVa4NSRwbyGZs",
  "key21": "2eRt1JiVYVDmfA5VQVyxCuYaqha72jYSrxc8zh2jbGXR4hrmgKp8PF9bhECsuQWAjn6vxxPiiY6HwRbicHu4fQxp",
  "key22": "2omAFG6QSeVtubrpiSZ4iDr9rdfjLsxQSNekYH2bAmNiqGjRZos2TWToLndsx5MhS3rbPGjwabCzH7BYqantx6Pt",
  "key23": "2ymREW2wvgx3eTCuCBxCRhdYYsJsEj4wTL89ss4aLWWFECqjoKviYkC6Vvhxj1nNSU5UXwuMHSMndfsLZ5vDwPSX",
  "key24": "3X1hFstT1xTdFaJiTkSRQV1bEFdRFNqzmu8bFv9192M4QXviFrgTswnXw2Uip18tnihNQbBZPfZEhgMazx2tDzWV",
  "key25": "2GrCxvJJmogb3PigYfqYZqBff1YXLodQdn63pxrChetd9k4EwpsMe8TefdPZWumBNcTUGfT35zNYUC1HxxjS1v5W",
  "key26": "3Y4657pfD7TUfk6ZsmC4Fm4X2Hx82ex5Nbo6nPGR7akMLU2xM2h3cQFFgqCL4aVM8awGMSUocF4kYeKYYHUB3qk",
  "key27": "9FpPkDJEfzwYpTw6rXwhnU4rWVq7r3oEpUqQ8XyZVEXdcCwh7whbHgcKtMrkojyVAZzY97VMzcrFmzrCcqQnXWX",
  "key28": "3aqd6XzLTxuJHhjBB7HvMkwLpK3efGtJkMUN4zdNDrLHqvAvA9kFfHnfHHJUhQ4dSsa56qG8QMjbWrnTxasLySuN",
  "key29": "2X3iVPFgguUYUBXKW5K4vKqYTatfM3GadJLnUUpFiyHW1wEfaaXscKECBxAWSGWgofVRU8TEfVTv5ZkRmJK9Tr6j",
  "key30": "3Mfhsw93MzpNuTLRNLMN2fhu7seeZ6mj6Ct8B5exRceUwNoL8SohGq3s6gCpXpXvLxmT5MTzdgs6VjZiFDsLwxzm",
  "key31": "2FHfRpAioQMwiwD2F2dbbbDdTYqotFHVmDmxUM7Vcf6ezR2hJv42ruN3zeVHBD9ihAdHccsGyYUJP3P4Wv4wkhxY",
  "key32": "26i4yxyGPJv4QStBS7A7WnTiyb3zuvtkdaaHHAN6nRb7EnPAw8LEM3JwHmhFn5iTSYoU4aUF7KfbuoVMeLjmDmh5",
  "key33": "4cJB8bngb8rzsrfvH1RJeLfQ4WiEwVq3PE3L4zkkH7NKdm59zw9Vcob4xzRnvp61Lx1uoWR4xDtNR6Zauat88n85",
  "key34": "3rbpJcJHC5Az5NSd2g35MWVEa6jfdSSXAN3dRqHmcfiyKJnPe2iWRftt5x45RD2FyD2Mc7883CD19JU6JAaJdi5G",
  "key35": "MtkmmZopaoSj9rqk25nGMAJbPRuBxbhbviZnFy3JXDq4Gh5s5TxKfBHnvrF3nkptKUHPHfgrMtx9Fce9cYatn7E",
  "key36": "5iz2Fp71R7mGvyHNBxP9qk6E36pP3uDMfnrJw4sSwtbeokJqVBJrKRiCrjbZeAg7f7A4N4QeBkZADrY2Lr7MjHFo",
  "key37": "5h7s1ywNfc455dN4jxz85gtLgjbSyp1D2g5UNm5otCk5j8u7XfXAUydNEUv1HRGde1EiPgRwyPYUiMoWtZv343rN",
  "key38": "29JerpnCnZrXn1EiNrWjFQoZhG28eBc4rxMMoHgLkNqGipcstu2oCY8e3bWg82xkZ9SjAY7ZmS5rhSsiB3Ln3Ls5",
  "key39": "64F97woRCvVuNiugFVZAfk7SmXtYvh56JhV9pEhoX7WUGAqMqZFgBwzcjwzeqWjcmhe3KvNt9kLiJbxbsvjt6p5v",
  "key40": "2rVWy9uoYevHLExUFJnGZdZTgJG35gUndwogwVKDsokFu9N2kHM3dvBrXiF8VddajbiZ8KkUnLsvQBMbFRGh3AK9",
  "key41": "5ZdY8pEdWtgX2DQkKyKwYRJ4A8fTPiwLopDwi5tjyFjVfuiMcfTtYyB9BfMHPyVhBhm9yngsDMpnxaoPfWDTxyiQ",
  "key42": "56eUxQtbuZKdnCrpKag7j7Wq5E4sFLaDcLUZhgSjRndWam4R4MYjRXvXCzhRM9KTkasHqudzD5fycWgFg9hXwhoJ",
  "key43": "64FCrin82jdbqD73AXEedStSib9AqXJh56kMyFxVsLRVJ4TMggPN164XpdCEf8a16NK5xNHTY3VKzqvpFG1RFk7i",
  "key44": "2bFjUgVs6mbcNtkrgDQLRTp63ZMJtopEEHDCmCMVo9dG5Lm5eTdvSFgfsyJuRSbBNReKKuwbcuz8N7QFoZYkXSHZ",
  "key45": "3oxoJbLtjBhXY9yKcSQNTFBN6M4ztTKwYEkPeMn57YPcvG3LmMYQ14LiphUheAWHQbD6HBuhjhXNvMhNZbwd9nNs"
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
