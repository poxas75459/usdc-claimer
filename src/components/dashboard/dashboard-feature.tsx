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
    "2cAnuGPZVewYRAG9NQVF4QBnHXVuTfW4iyhghHoCgjZ51VK1w9rbNNnub1RdjyUAfX8ocNqdW66Zofby7JFGW9Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o8s45yo8bnSU8tSqWemyXPUnf18xxTDLATJov1sed2a3gQGfRehygUW6T2RHiQZbNP1qu8uPthMNHGcmE72Z2Xg",
  "key1": "3raTFeALXi1XWZAr2o2G32UZfacrtABXFEzCbeSDZxeEnPwpMD4kGUyhFK1h2d2KEohHp35X6JZSfWzaT3A46cDE",
  "key2": "3Mnb7BSbzHzPmumYp5v5xyF8XJB26vGsuYDUi6f7UKxjMPjtws94fSe2Uxd2dNzPGmZ7ci8oWcpg8uEK19HGcfiE",
  "key3": "x9MnCYmmhgTX6D2SDfPkpFJpVLcGpimerp8mgggZ4iHfAfL4A3LNppjKzUvg2c1SVrnorJyNbuNmUBfsikDZaDm",
  "key4": "5PGvZKDDjqec2ECHrAFHDWUckqaZTFw3H2VyiVgFLtaaoLgUEoG6ArPu6GS78wmf3svGiQRLC8rai5mhgYMbFcBK",
  "key5": "ZgvQDzMbG1CXLCDbn8V8Qwh4Z7CUKZiAzx2KbsDvWiysC8JDKt6Riw7EhynBvv8josaRwm2nU4tK94kFow3SeBV",
  "key6": "4dApjrujvUhZiVMRC2A2DovM2jmthBujAGEKWKw7ffyPHa5m3DQ8R62rovDBKXiSgoKCHZ9iE3kjrjUbLPJsiEVy",
  "key7": "33MWH5aHNnD3n1vvm16XSP6ae5drS4CtRUTKsGXxUc4swLfUP8HBaGQsizNkUSVbpSmyoxpNBasB5vVtrfRobymJ",
  "key8": "3hEV8ejbijBEZCyaocD2H9ZMavsWDcFxpzH8dbMfQzspyy8djYXnn4gAa4JMfLceoPeMBxN3Dt7fEQ9gY5pj3tY6",
  "key9": "5M7heAzKVY8m8DFa1WRVjhdasGeAQQE4mAVBQ66Tu1u99MVb68M4TAr7VxTzEFvqftA3rAx3TGNmnnvBPTcsRinS",
  "key10": "DUuBakLoTZrTPsF5onGdStZ31tCByVEhTh8DffxS5nJt3cu9ew5brtECB1Lk5CdTE8Nv4FVjm4ZGD4NRBMmA5nu",
  "key11": "Vcyqin9H9Spz88saadkb7UwSq9BXEKjMdgqfhS99U6z2ufitnAhi8JAF51caB42jPCTo9ajGr4MbzHrYC8To3vU",
  "key12": "2WJFmzRGwCB7Nq371sTfrR3TC447yGxDQbWrPzgH4aNVmcmCd8SYhwuiEW9Zd9tiJjCh6icE1ptt9GPVZ24x5Fp2",
  "key13": "3DTZ9AZJM9hwChjEgfqvKXweu4m8sDWiT3ZJQT22iqD15pGFj1nvKBKziKu66MvRTvdowaSfB3Zri5uGAd5eTTuG",
  "key14": "2mXH38csMhFm7vLcCKC3ksRWdQJ4BYWYRdUZmkq6r2TeeStKw1SXybMLd9gn9P14d7FEHa7SYpRafH78SGnW1Mkt",
  "key15": "5b2UBKw9mvXDcKsovft8s33CVvW7vkSstjSc76L3TPUpijsNqwbgBeAqsUuK1LdUKchF8SsULF2zQHFN7SLzPUj7",
  "key16": "5bmGKPdxbC4qBm6pCKeoEXA8opQ3ww6jL1ds32kgXshkBDEjqTEnLFBJCTwch9b1uYyk7ceSSETDcqkX2F7zHEbz",
  "key17": "1Bkft6XQdAADfjFgghcAQ2YnPUQtBtFMxPvDaDw92PmkuSVKgKjYAVoxNB4qPRJ6VLmbxYj547ztDRPatUsTf55",
  "key18": "5Em5MfaxQxmhqSKnaFpSFpd1DdWiMf1mr2HJ1LrjkdRdUXss2vfPbYEstTKJrF2ZPJuuiuTCndEJKZTpsDNfr4oG",
  "key19": "48MphjNwnHzmjASc2LcZr4kQ9FDiKTVtpS8noQNZ27Fzu4gZnACRpoXqWAQHMFaVFhny4RSMH94EJA56q6ntDwpv",
  "key20": "5fzzkeEBsC2Jsfnkj6Tszq3Bg1wKwfueBs889KRHYYQejQoPyNRVVEuAue1bGvXy8WdcZFWF9w22NKjzV6cx2g4o",
  "key21": "3bAfhKVvMiYVzYdFw1DuvL1ZN5J2eaWmqWphEmNvrsGgQkw1rsKCWjPqGMskL6yaYXNh8FHtpae1g1LH3HSE39UD",
  "key22": "wSYAgexgtitqeESoDZy9qXNp2irunM1jxss3xhBLRCGYyuhsfz2Vs3EG65PsWHjhUjnmiHKZoMKuFXMSdpmSx1V",
  "key23": "53rRMcQj6oT24Wuy1xKE73VtZqRYWqM7u5b9A1V4foGjRwqVu17EVfNqyFQzemgCCAbCJ2EZtNbXV5eqzMg3Twto",
  "key24": "oZ7GKh6ATz2A3w4xQFRavuhWfVC1o7vjwGCmxQfrhFJuMvRzpdW4X1G6Xei7geKtMCf71YRGErLXr77ZS1x3eUx",
  "key25": "4sY1iBks2SGWKLMu7sc3QoG8Z1KYo7ENM1jUHPiX9kJVMh6ux3dDMKcTmQ1HKztHG7X9GAeHor7SDA5kjPcQB5wY",
  "key26": "iHpNQDbUv5u6VaiNidokYgLGrLK1pXV1Li7pV6eizrcmgJUougw7n8rtcgcbNBtVaR5B55yotAVsnGpRQhTJc2n",
  "key27": "4eX3JUy95S3C3Fm7ZTJfvKY9HUbN4hbD9M1QfweWPxAoP2jzfAKrdFSRPEZEiebadryksDJfPZdw212WZQ75WkAh",
  "key28": "5RZDw6GzbB5d9q7xRFjJZHbWURTzcLcq7w2rm4C7DGv1AZXSjFYwAhhqr6JeBDqQUF1k8R3c5CaHTUuBo2tTu8tp",
  "key29": "EG9moYUbNhBDGxLfrbNce6TR5b4thzKNVsXN4eLdXNPFGFFXyoZZzM4FyzXsXW6jZxqCcqtSSZQ19ZH25t4k1cM",
  "key30": "5WfZYKxTT1u1s47Jwgfi2uMcvGgKNY5qtM62cMD8VmePWyP5hp73eJ5GVvi3RwbKeBkYxahqAyU2VX7KAxQGedTr",
  "key31": "3i8LcLBQ6DxUrvjuYuGV1YmX9bFWsqjfnwLWJ6uAXYqp5GSUhikVbzn7QbWPEAwsqzQ2Q1zMhnnKQybxmpvp1mK8",
  "key32": "4NCaPbs4gK8FAdNVXGpK1RzoPbrwmTdmugZp5boCy5Dv9HSBKfBbwwkC8k58zgbfdDYiFEK13rR8qtJcTbfPrZHF",
  "key33": "4qR77qEH2B5r7DxYZyfhHyrS17qskfLiUqhdvxdjfjepvLjath7rz8Knh8SQJdmtMmtDRve53f34eRNd9HVTTkhG",
  "key34": "4s9hqBbdjGoXiVjtkxQ3UvqibsFCPj1gvRT9C8ZXbMKbEBgFymgTXEZpZ9jLM4hUSuKqQ4657ERbuVF6dfgVgiZC",
  "key35": "2fCgAiMW6UWqKhYeQ9UtVqEHHCbfFp5L45Nfb9X9tLDjAwqLaEKEqZrtc1geR615ZSXuLbdGHAvoRXrfmTQksKwM",
  "key36": "5UGCbMTXi4SdUbNkFULw5aeFGCFvDSgrNRV6ojhAC2tgjS2YANbMq5aXnk9wSBRH3SDxuG4qUEzTmwD9b7uTxxun",
  "key37": "45EHVMvYHUgmm7SYaSfqqYJ3XtNP8UDaaLBrhHUaaWb6cTX2hvXncCd9MGQRjtf7ghJGxVDWt3N5XVgrG2Kj4Fso",
  "key38": "594fwSiw2n7Zw7adHpYz4baJuigNNUXJGrcqARhMu5xLwkmu9HR4FcmysKYzJ4EZfZUN1Z6wRuvj4NaFjv3gsyDp",
  "key39": "5ZfKhJmEjV97ukVzUAZchbfSmwFRoL4rwdw2gog8Bfp34Zes9iNSbrVqtgenSu7V2fvG6qm3JD2Hck4K2R83FfKx",
  "key40": "349MMoy8aZ7HKBNV8mc65CtFs81y1EGn1Qyr6jccxCBphcy7sbn28oHLs4XzuHt1u1NUdHxxwcCSZw9uFKBiXp86",
  "key41": "5HKzuLUFqgqp7y8B2J5NpkZB6FJTXCxHFBAaMrqLCWYvKi9h7hQA897DztN5RaNAHVquA9meu5gXe7whviESJuLB",
  "key42": "32XTBhbe32YvNMN2k4ApjdLgJZXcQdMReGKEtGuiS7kb4b7twBc6xkHs5iB4FEXrscW1WQa5wezxftvaxz2ck6cD"
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
