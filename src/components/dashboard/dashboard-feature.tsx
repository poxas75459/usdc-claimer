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
    "3SmiEbfCvqygJAg2Bhzt1eisbvSL5y6nHo15rYJfLZ8vaTC442ythwLQEj9bCkQxEc5keY8r8Aht19haF7VoYGqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxJDyLgJfnAaprfsZH1trfKh3Kg4MPcaNLQts6Xt9HnWKn8NMg2jjsN9tNR9HoDj1uETCUuffaGsMbvFqSFshiD",
  "key1": "5GdH2FfzynzUWhFfMebWHf6YPFUDv1trhzy2sTHynnaQR5AGW4UPAXkB25wVYPwbVakiEmbBMtKp85ic1fjBkMQH",
  "key2": "4SataMpyGWx4kAbzscVRGNJ152hCjhc4dkvjf4pjDGtTpZk1fyHuXESvp2z6Uj6G9sAtMZSXeevRtqYaJwxHuLhK",
  "key3": "hxCxmAgcWjtUhpP3qpjQzJn83D3pJu2smxHi6rmmvwWnq65UqdmubU7bmx9HqrocXwXTJs2WSL4Mz3f1dMnXybd",
  "key4": "5nYBqBczNASo7uEBpbmRSEUbC8UYwSn3Lkpk1PZS9WFvsLv65KNqBgRzdtVrwagAWUP8ULRZ5m16DD7FhzTc8zqR",
  "key5": "65VKsd1Kk3ibF3CDjAADr3fsVYtqnChdGdZWapPcHFpZf8Yzif5QdbTgeskjtarsvYQvvmrQt3E6rh2AU7Ex7PfB",
  "key6": "4TcwA7UWqqLp4XQGWie7BCgD3GB9dnZQghkqEHo2RoaNhbTe2Ghj4FL3kQAGqDbNGmw7zGUebSdfnvfGSFnCv1gY",
  "key7": "uMYH25acds3QKcPUtGAo8rSXfpvsWmHEFeCWby4dJQnbwA2N3xwrF5hRX91CqzkBKuRj7FewzW5n3CoebJzjWpz",
  "key8": "5LLQesgCsBbU1ejRwzLsxSNm1YT8SBbzu4PkXoYSfCTCKCBDRgBqoYoPaJHANtwcreDuGNJY5MeieNj3G3cTmSSP",
  "key9": "5jqcsFFhu3EFCGVqLimQw8QxHbWTZi6NbFE7cQyQ1SDoStQX2WTJ5tUbdrkCSQMuSsrXnZbAv6ic3xWFBt99NbAJ",
  "key10": "4aTPmyJowgBpURFZCEQJ6pp9rrndrsTD9N7FTkWvZ6bRxon53ys4tziPK9Ghq4LuoVaThtgPBSh6YE3zHJg6wyst",
  "key11": "4noo2f6ruz9qxLm8koyC21E3tsvKRjstv783G37KUgpTuWzW1EEL6VXxkYVHAnr5LEqeVSJt9YgdsaJ9os7XJdHy",
  "key12": "2rWYMosqzmnVX7kxJEGZ8363gBTLdmzVcr5GCrjZnZte6V3JsdiqPNEZsdt2CXd4scy2dXqkPGJm5Qn4ZGxLLUto",
  "key13": "3NUDZZiPPWs1G8QaaQqyPvCC15CgXJuAnL47BQDshaSNn1DQmNsX4YVvAmVp1Kmr5E8CfH1FF2p8Hx6zhyDZDJra",
  "key14": "3PrT1jGbeB2t6VMkLYwjAQ126tUVNu9GT7xTuNVTUY4aU73wkDSvdgHwJrhwkGRjhKWVNER24ANx2F9pKKxmXNW8",
  "key15": "UFsEuyZVb1gHbFaQFpbCJFap42Mx2MZeLEFFLq5LDUugX4wMM4e4CbPsDFEEs228LeKDrokAoVr37ba7WtBwnWK",
  "key16": "2tuRF3Pw6uHUaJ5uyWWnR1wqzZ1ya3cmERJr31vhzpNL67VoXjhaNbzzdkvB14bF1AZw1Fvchh3wKztja6aNMnhk",
  "key17": "2NK8XUWzsVEaC9ToS3uhwx4FHFWBeAhu5JJD6QyG6eo5rzuXCq1dMN2euXXQ9kJ9fxiKR9Fz7bsQYYw5qBo5JA8E",
  "key18": "duS1RHTttENjAzY5KdMUgJh6zatGhPnMSKAFk4g4W8gJiphb9KeiZYHLKSV1qScMQtf3Yf55S4SSoMiHJVtBuga",
  "key19": "3qamFyWSSohcEsCrj1aDe1sNLCPWsAESDbasqbf6YCVTq2kW92V4cUVcUWEgdZgwZYRfHmKU4uVqXcbVydB83rS6",
  "key20": "2xGG8WyLGNVYpXtUjJ7cCkQj4dLVHHi3PAAkbsD2ZxnpcXxwkgcFGsFuQRQrbMtG3otBaoUY978G6XTxUQksPkyF",
  "key21": "wWwiBGEvYKohJXaH4soNR6BfAcoH14NcYtG8FYZfHQWUYHrgxeLS9jqvAWUjsMK5AMwxw5zLv43JNa7roANjGk3",
  "key22": "3o3weKyaM4MfbuKFtEzmMFdozzsU5tcYohrsYLeYAFJXowZQcS2uAMPc2mxinJezJK2YT1Kgr71Q7grffVeNdX8M",
  "key23": "Gr4YNeCtfJcrURHjfodvSVCCp7162E5w6hmnZk8WbV8mhpERAfJWkXdwG2iYiCjH5KUCUyUEYdk25CgEGuGBHCS",
  "key24": "4xD2T5co8xzjt5TbwYBf5o4TzgjHtvFvY5Vh7yfJqJphnhezRgHpFg84wZt4LgXohprvqWpPVkoiJYBGXyRXxika",
  "key25": "TrLXAQ5GspBPKumreaQp5W11MSRoNtTMfh1pRHh8ikndjgGngFXXTnWXEAVBcphtWhJx3aWHwBVcgDKXLhLCmmU",
  "key26": "CGinVohf3w92Lv97BnbTrPU1QXgygEz7gSwK3sxBckC5zAPB59TDF67qzy59s3q9CHdUZ4GpXk73s1bbikrqizk",
  "key27": "Y3qf6nkuA5F2sqdcZ5coV4kJjTTBM2S5FYU2V6HntitGDfgmfmLDXjajNePb4EJZS1mA9MkaPyeDuNWymwFxLg9",
  "key28": "3qtmRWc123EUvBSPk3UHzQSWRPq12hiKUCT74iWdvAHCh8cpnPXHXhBPMraN3NP9DTEt2etLcmg3z3cyYujgL7k8",
  "key29": "55VqJuwHgf1yUqM547Bg5Z6VuZw24h2Lnrt5ojrWYveH4LxV1dRnd52aSkwqdFEttCZqmS2anHGsjDBpDQxVUof1",
  "key30": "4eoWYuX6NAfZV9HsSgum39KoGgQD5Jnim7jajjxLV459Lwp6cGstufeWmafqpbw28om7wZGP63UGXLP7J6jdVbSH",
  "key31": "47PBA4YQpjPdxrwGGfUNXUhaQJRaU8p37fGwDkjXehJm38o1Pe2EnoKiGkVR25ubS3out68fY5YXYsCeKzr2YtJq",
  "key32": "HmB1ESZR3Vixi1fybEZA2yRuGnwUJzTG1UkH38vqTSA6XU6zUhadh8AtfLzctmBYVFP1FHkqSJMW3t8evrdrQZw",
  "key33": "JpfB6SqU3X5JuT1zvky3FF9SGVg5ksvJMfvUnLVYEwHuzgpTv4sEZxFrFWVm3L7QL3TC7ogay7vNwLWjxAtYJZn",
  "key34": "64kEcRj9NuXbt2cve5GAGvfzyJdmBnwcasqPDmNMhtSiPrRPdo7nnDp5sRMECLoH5zuMhzv66btVMHfu6ZW4x4sJ",
  "key35": "gbW3jyBKNBE7SHeW1xMvcseUwiYkS6P7xn1FWtGzaamBAb62q7gNNgBYrZpF4JF5ZsxoJjGdqAkhfVckFqegNbY",
  "key36": "5vnhdk7MHKGycPCKmb2i7ppLFwpsveDsbRzhQyC7YXDP2GFacPfGJdNxiokJAch4Ru9zavVgQoL6dkYtYGeLZMTc",
  "key37": "3uGqsgxqbotUdJ7AhgmaN5jZgvkJuMGarJsVsnP6sKcaYBRDFaKxZnna215rjWkHHhsRNF2uVL2DS664h7Aj6Aig",
  "key38": "5gt3vdQT9tW7X1vHAfBhkZM6y58Pqd1pschz4o4hooNnJEhNoJ92kbMBCyk2YkH1yjhh1bKMYMmjAgUTGdRDJmbx",
  "key39": "2UBG3prFft2RbvQRX8A8Djq6BEkeYTuP42VS1FcwpC5rujRoDKHxbSEyeL1NaxmeCpRjbSv3uXtny2EZJQHt4SXv",
  "key40": "67ECjoAArriFmtUQ457uk5PNh9M7cjBBMbdkgzGPZQp18DB97di6K2ZPTomfD5hc8NQdL23kNtUTHPdX2awCnXgj",
  "key41": "4vVav4VzBm2ppij8oECjFiXpLXakzPsPaY61eYWg7hWzMs1bBBXRS31GqDsSaZVFQb4c8ZirtdBqgt8VbxPbFbnn",
  "key42": "4XXTvR14jcpsvXj6VBgjHT3UYxE1eGyymsC7wsi5GVEDMVDcagLPBixX3x6XzK9K52JvRFHUfSrJrN1WJWDhbM13",
  "key43": "4vKRwMvVaY2zwjzjtC2Dk513FMeLdZaxwUxXiVTAQVKcujyue5vVjUDP3LYa9UtFfqK1GqFKzAw8GrqLHtws5QaK",
  "key44": "4H6W9BoyxE83cUWoiUZcgfEBcRjUzm3E9MBa1kuSW8b55rYVzsPUW8yLCQowovqMFbGWVJj4ihDnwuBs92dYQAwt",
  "key45": "2gWDSqbuHTF9KCiwUq27Dy23cKja7Dj9cQZV2t5MzRyvgDL2nnZmfy8wLtPAg4mfiaXDFACh9Uu59QG6HZFxHUQX"
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
