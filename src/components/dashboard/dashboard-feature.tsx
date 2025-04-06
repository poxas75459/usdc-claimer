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
    "3MvZ5dxWAkbPdjDbM4VyTAhoGVFxyTmE4AuQTZsZq8wdQVZqrY6k7XBBaZoeramRodY4EcVApwjyYfypdJPfrkzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asvRAmsWX5QzEM5ab3XBRu5tB7asxxmEsjAgmCwmQccaUX9ZujH7rhHJTcTbiVQcoNH8a54BFajrezNGXi5ZWLZ",
  "key1": "33fUwsZtXq9jX5AXU2HSPGc56e7U2FE88fDSsztACj4AkEHwH9Tx7n9UiukZMRUXmWrrNYftqUXp8Tqxy3WbS2fF",
  "key2": "59kYzuiWRF7DgycQFp1e8JTQHpnsqVKJUDxK6mMSZtvXfzkRoaNZFfq3QQEwuCJBUF7vndbSnJTMcQ3FWjv72cRw",
  "key3": "59ad2QBU3NwEabQnuSnJXyX72BXjy616vYa32arUU6WoySphbD5NiZYgX35x8m5PyBC6y8Shz6KNsxYcnEkTAojq",
  "key4": "Psxw8T7VcZNVxrkiJhKUeFJgrzMHbRb8EppU95Fpd6bf5KYQfHQmQRMBSticNikb3mGmjMUykwW4DYcqtVkhjmw",
  "key5": "3zeKbXuhTGLe8N38kbsiCGD6MnauVZNbn1uQPJ4ei1kxAtYTE9wousZ7oCTvcYeVASicqFxCoyzpJZPHBMvVYxGY",
  "key6": "5GiPRvkgVT8g1w1RQ76PQsjbhGvmFnXba8NgvKxbrWmsDvVQMUQ1TC1w3CtKhMRdqmSdLzzksR43KwAz4V219wSQ",
  "key7": "2qhXAV38T2DdMkTccH6saq4hvWssVsr8G268J81wsKaP9sQJJHR5kZtSgeGV7KEN1wsjP2XZsEMFXpfF2rzouwGu",
  "key8": "3RueR8wmckGKsUj2fQoYP1Xi4ryyfxmD8W3fksq9akgEBYxKXY1hEA8drfMFK2FdfU71eDJTXsehJz4pULzJPNMm",
  "key9": "415enDY9MChpgmbhi4tmaQ4B65yTy13utixGcVsJ1FxF1CcjMKJUXKMSfv67HR9V6TvkApusXbnNv1yB7f4RsRGw",
  "key10": "2HCZNmGk3W3bQKzwUnyKwo7wM9HdqpxkPC8gZpFMstQqWpdJMmxrZGBvSbPDwdLah85ELUxL21mHmCS2whs4L35Z",
  "key11": "21hcbHVKkHPCkDbKbQCffp8AMb3uHVVhBapUi1yotisSZwo3rm581VcdWzjoCuNJ4ZvytWnWD1rVxKd6Qa9Xc43V",
  "key12": "3iHaefczuQSE5JWMRJDGiN9r4BBUJ895aveiKp4WyraL9tEY9Pxv5wDAFBYDhco62qsHH6dYGLUcdmEkQV7ik7GQ",
  "key13": "gzXYYAWbZhZHVQD6bJPZQdJwG1127zXuWm7YEvum1Sop1BG2DjNxKJHqogYikQ2Msek1iUEcGHvii8dFPgbE8pb",
  "key14": "41zyoBpTLM6FrvMDf6SbJacfAdo9P8sFrW7aWPzxXwyHeYGnfoN9U4LP9dodBbjTjJvyE1s6e5JAuS2wp9rptTiY",
  "key15": "35Gr8ddJxvfZX9cDYeDTjSnHfJCDL3etLivaWyTJkh8NRKs5Aaw8AC28nEMFKhS3ZdczcDvxriRrdA4kiCVv43Gi",
  "key16": "67Zoj91EVcEKWXUcCrU7bCppLoxrEF9fmEJkrtUNRMCZm3RiFXpy81q4GPn1bEDgN5KGnue7jLyvgmRGjb8UBkwc",
  "key17": "HxxNxQmwNMw4GJdELTpHjfzUk5chpdzrrG64AXUEHFT7R5Wj3JFCDcjSjGhgWgqi1dxyEqfdBMW1vuGEAxEw2VE",
  "key18": "4D1kGEeuzdBuxMgRpz322BSfNHCDtRJi4XcSf2RkjEqA8ZmGf5TfYyYu3HFbehaz1R2BcWZQvA4LrrNXANtXGmQK",
  "key19": "6sqkckcam5embFUP9fR72XK6opdmZ1buKqGXuEfYDR5UEQpEtTfLrGMMn2HBnv3hfXojH7ia1teyWrjTRYaNedF",
  "key20": "5gczKsBgy7de7EZWUsoh7FUUfb12XgYPC8uKGBZEeMTS5A5MnWXUWyx78XJqXFSkT9R8CURPAELL9mgqERuHsN5k",
  "key21": "67Hjo53Vnq7TxT1mSMZnZaDSrYkAMQr6P4tbmEiquK7tuBgkvPrY9wKNai9neGvUVBc4LTEFVTbxic4vx1ifJVeC",
  "key22": "4R1Bt6c1dUxzWo14M7bhsC3XRgUiyFpC2Wen7EXzqhr4hXwEF4ui3tRoYHY123GWdXzGpmYqqVMHz7zzu5yCKQKX",
  "key23": "tRmKzkCC2KP3LV9w3J8hBdd7QRCvso16GQ3oQ8vVMju587Naf9aVmR3YxYE9gAtB4QiKeF6zrfi43mHagtKAMCa",
  "key24": "2uWajSnE8GENpbNVerXBAFXUdunq6s3yuA2W6CenGgJ3AqNi3TYVZ9ugnvtFykNPc7dRrzMVNb71CkigAQcns7xy",
  "key25": "5fu9JMzAq7iDVDSpPYSLFyQuFbbbjQhsHnQxgUjXNyVsukd2Gb8vK8umbwWxifndizz13DQ4HHDj4kvnfmdzkjYF",
  "key26": "41MPTbTw4i7RP18p7LiMUkqo5tWnS4BqfuGLfso4vFEBAbpwu4joF698CQCDorAWqPnZNJBLWqWLHSt55bZdBnpg",
  "key27": "3doPdwMmGF4JGNa3jTg8joxvGUyt87yL64W4wm9G7c6Dv2k2mbGhwv6TzjUTWroFhoSCayAhvF8Bo3HSy8JjXygn",
  "key28": "27WnVAeYyFbz1AyYGVS5hpkggSn5t2iHFsWGH7QndkMihEJx4LFjtWoZHB6uinDjXKD1o4QGKKiLr9S1RyNkcNDj"
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
