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
    "35oGB5ztrn6Wdj9Bc9TgJysbDM5Tatmn9pVEARp3n4MaiAMc4bmqPxEe9Rd6P41TbAxd6MMhbuQwZSGkhEC3H2E4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXK8NhYMrZbp4yd34J9XhvJRawAbAJrcF9mv1BidgPT8GbvabNCN6bZEDCWjzxgJNnBNsj5MWLRtFLbPvmSn2As",
  "key1": "KE1huvLxsJvtQzUiHa58Mj2B78aT41BJXuRKJn3xvhwPXCusai4mRRfbGxsdmR9vi7gx23D3B1kvTknMDXp8Sed",
  "key2": "1aJy58fWq93XCVrpkp7XqaMj69b9XiwVEij5dgshPZZBqqrSM1m3c5ZXeLECsxvfEHAvPZtehRf6Sj2j6XkcSge",
  "key3": "2nZ79r12CnRGE2U4qNGdbrMKUbjXus14AF4jMgkBJzyZJxfj22LL7qDzr6Y33jivb9fafjWBkPozXKaphiw9xn42",
  "key4": "5ic2JVuuFfmtbwNv5f2r3kpdFtAVLoAsUJW2Fwrm1zUmaTzFaZ4howf4chj6XaGcE6m35QyBQz6ZGkTBV2enZVyZ",
  "key5": "4kUuj9RGErv8poXaDzzKAL5KcThiGKbc3LkYjBvuk7HpfmjpimbZtKA53xnPa8oyC7GZH1Ucf9nSjT1LAtnepere",
  "key6": "2K7CGbLJ8qWHsH2XknK8VP8ANVv1jKDTXnjuAd8JkLp9CsnhQ8FvPXoYRpdm156nerXL2phMhVNSjdXkqezzsLLN",
  "key7": "5Gh2yjYDM4pxQpCvY49SqZibujMSzi2E6TdeHXsTZXRM6MH7WkSngcXfBWrrZHLbKqPdWXPYu8CNQwehfTswxGv2",
  "key8": "UiYRyo7Dw6bJyLB5gxsbuKzPnb6ucnhnJjZimfjTuc8m317Xvt9HM53G15c4iGDzUJaNubyEr5rBRdmouyQ51kK",
  "key9": "5yusCv7mCxoZGCY6NqfHkvhewSous5yGPFnQroATYMoyfc74HazENfWTs6nMUD4RYXVFWtfuJo9d8XfetM3AuEWE",
  "key10": "4DfBGgtw35tGtjFZgXpjtnK3SwT7bL4w73LM8vGrELxpuZuQQ94S1TZCnCmoUpeWwpLZzigSX9bBi9RtC1dorMmY",
  "key11": "4pTWN9vFwwWCqkYYZNeiFpTaWXSjrrx9hTu1rYothXf353SG1YD6Ng6P2JwA6CZCc7KBTfp7DR9TaA7CsRSnZPtj",
  "key12": "2WeJPX1tidzkyfd6wvE4Cvsajps3EzYSdFmCpN2LrTXgmdqePmcLbnpZ1tHoKUuz6ckDmzYgHmuWfSU1bdM94qSs",
  "key13": "hoYnvrxpg2NDK54SEKo64EEVBfFWDsmbaBcLs85PdqZ6BZXYTTgAvX27Dfp2fApDkFHD4oqYkTF1en6gJn8bC5E",
  "key14": "2BpsGnbi4d8hGuT1WC2ZykG2yfFTkpu4eG4Qt3hCrG1FGePJcwKkpKsbFmamLDSH6zRGYLizqnYvt8aLMGbvGFau",
  "key15": "611iJwmLrRRjm2LMfFmTsW7PDRcNP5sUtwhpacwvF2FA3Xem4HYH3Vgwj8w9P6aFMgi1HBqFS3BmJ7bVuBGVkgx6",
  "key16": "3XnBi7sPnnXEHTsDENj4zHyWvdNJV3w9CSs12KH1BiwRJrCbFGjkBi8EzHk27at4WctTZbggQbFjbEbCofNcNUfn",
  "key17": "3YinHLYjVu5wDy4FNLbeJvNJYSLmL98rQMqW24L6h6tRRMAcanp24UKE6WZ5hZoM4mo4xM9pHvDzZYNGuVTKFNRN",
  "key18": "5TUL7rhUh5cvbfGakzQytPH7SjiBHutuGEnivoEmDrt419WKjWxyUNWCP7p9Mw95CdngKaJYLZvAoTsHtYnU93Li",
  "key19": "onMNVtojLPxLgSS8bZXtNPXCc9AehWQm1X5viWefdMHxusZ3rEfmwFuCFkeCiqChrzdpJjd2z6wVWegJrk3djTp",
  "key20": "XBdAbq8SoBpCT2oV2m8ygJeGiGJXqTyXF6oQskVwo9cu2hqNjuRntrozxvp23s1bMDwnXkGEjBf8vqL29Q2qZgQ",
  "key21": "45zZrHDLNbiHiLcMkW2XVMEANK9zvq8RtKbqcRurjg4Y67nhyZ6o8s8fpUQkT5D7uqpqvg6qJUDTokbABJydun5Q",
  "key22": "2QoZ14Wte5gtHMHd6cvAPRJEP5fscoBKJy6MhoF3KMJfTMGkJ4LEPSdY7scm9u9hWr1AnmQkp7nC5SLCFCC2pQxY",
  "key23": "4bnj5cckR8vKiZfaFho218wVsNw2tyyRNSganx5XXoGNiwTRDRMZRUB6q1zkV1DxpVPXUmv9yZVikHon6dTh7THT",
  "key24": "yXVS6tfMJiCQmHhXRV2o3po7JTELARpqLKzHGaA1pRwrLtGVL1Q2yadPgzQLmNHosd1byWjfSjbtSEqqZS9tzaw",
  "key25": "4o8L9XtX7kwuQHd3oeusk1tEhMVe2zqJrPCdHgS6HJ5h7EQpgmQNLaPsPDNKdLQusBxikZ6SjgupcyAEgxdTR7PL",
  "key26": "66EAjTeKJ2YV8QYqkYm4F1SzHMERZP5CNHvQuuvr9cm1wEdapWSPvQWZrxiryPXRMA7FhBCzzEKdnKaFZChnZDGy",
  "key27": "DYKAegKNQq2Ry942RZaSsY7oTvUFjAiPpfJpFBAmaMKLQPkXdX5my5HMinxtQHAaYj7UKcp4G5YVumn85Fs2wMz",
  "key28": "5arTijmbF3DwjWTBiDJPJSQHu7Ev84cGjXzbWojwVc5TTfNkAMW8MbiocgdA9VnP8VmyiSL6roxREG1WiBVK9ht3",
  "key29": "2aXi7F7d1ENhDhJeYXokbSYjDUo5najKheBAQfvvsMatoN7ton8HETuQUY78bMmz3Le6XBh1tA3CidNXAVh2nCRs",
  "key30": "vnxsXnH4sTToTUVy2wE9T1j5wCoqqKvQv51NqNun3vvDYBXHzTYdNUhi1iG2MZQjYkKy8WLm2eMRtP8jKNyFZzd",
  "key31": "5iAuAkXE3Vur5qHZ8iH9baBVuQZ1141orNLcjc6Y71XBdtubxiMqu3wqGmmmHJRTT3xALoarPPzRajS13ucyPKjt",
  "key32": "5Zt7hpFuS4FaY8cGMQdUMab2kwdFQeirH6YnmLM7Tsp8iSUjNWTVS7oaETtvAVBEjRnrDHiB8h9iDqcEEc8HEX3Q",
  "key33": "61qmLDxFoLzyGYmBEyUrpFCfK9JZEUJ8xKSdDXLvvZtfkzTT3k77YgVodwhFuNvJR8kXjzuaYMV6ZEXMmR6q6Nai",
  "key34": "5Npu5gx6wh1iNw4HA1vssXwAFsLhP9V3Zfv5UfJPCJ9jxGGPGmyAsung43AeJui3hKeNBmbgH8yseo6VxP8MZPbe",
  "key35": "4q3L2tYjrfRcpvC5PJ3qGtW7y7P1FsoRer2fPt14jNndmVQghnSxbLmW1iZJCoG3YVaYikbd5vHsHB24btXqkFdS",
  "key36": "2KjimsoKTddvVW3tB1x1Xf88gcCYvKrHasAWPkjj4EdTXEDA2cGZcGe5xz3bgmfAHRXCUce5b9whUR82Ndis6twu",
  "key37": "3aeATogW5Bfw6QmDRamhzj6gKJcoD4iCWBVcneXLjLnFarg5tVArQ735r5FgrQ8VspBEw14DXgwAdpb8Zqhh2xwY",
  "key38": "5DXS8R2pnhShMTFuHRmCzwLM4LFCmLpx5Qa9131chE5cvQzVxuvwTovHWSxzFeVfZ58XhKxoC8zTcAYyNQaYcQwN",
  "key39": "31GjCSjSRo3f8DcyGVRX9qjBF3sQmxUjXoBGyoB2qR8NK6Er8QLxzpMArB3JhFCyxHdk2cFbubqUJDHiEw4Lk71b",
  "key40": "4gwv3p4qNt6gcPcdfGPDV3GDPXX8uUHkR5AnxDJohBkBD8Pcbz2ceW3bFv6mQtF6RVwYrrmJXvvwF5xU9uCTh2uj"
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
