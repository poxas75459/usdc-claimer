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
    "3vk9Tfr8tNhCWFrCU9KdJs9222KnaSF9tcnRxvGLeHLg2qQkeh4xkAbn6Mxnnm5MwCvmxYcB9wPwj75juUxrY23h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YMdkHbPRRPmJSipSGfhn5T9MfVK3DiTKehPBqc91FJhaD6ew1TaPJaYYyz6XMb71eVcfYJ6s4rUnhupYJPnY1Ch",
  "key1": "27zK42oRjo66ZBwJHNeVSaNjUh8zoBZXTwcbEjjUD215PUnZ32SXSiRdbCNpdbU4zVnh3J2yr4WMo9spxEhvRV48",
  "key2": "3orkivASLtPppkbDdxZaZ1jb4YCH21cLC1TcKZihKZ7Q34b9VptDTPDa3s5ycse6GGBfgMW846Bf4VWQRrX1uGH4",
  "key3": "C1Lzn19kAyUy6idY6QWVPiKUEGwy65hTj5nEieUY8NdAYretAZ6uZ7KFnswsWEqtsszBytNfYAXgECPNkuqKcEK",
  "key4": "32SaiLiFy4mFag1uRzdJFdbeo6ciTW3eMYnnNohJLDcGM7BUfSAbce3EbXbKevArKy31uwqnDVag8B1F3NMUZirj",
  "key5": "63jCxVJ72V3gtPebZcJRupyCrMdYVBKB3LzhH1UDJV4Exa1ADvL2yeBczBiFERJJfCvrX2R2Ls2tSyTG2DwbgJHu",
  "key6": "3rTzZXa2PBjqRs25HUqRaYyjHnUzL2f89pGWjHttW73CxnrWH4c4wZu4BthTFzenZwaUR8uTVGDTX1RbA3brKhBh",
  "key7": "97XneFaUtVMRtHp9pV75yEH9xWcPdHwcWW2NuY6wLCuBEgXEStpkWgaeT3ToCrPupT4pptxWVcthHdGhD8eLs8j",
  "key8": "5p4QqvbnonfkYXpaKfgVWh5Y67su2Gs1btsJBMtfkXaQSCTK3KwyBT8cdS3aVfMjn21dkPZFA75L9ty3YPsBSTn3",
  "key9": "3caqqWopHP3HCDYo9zcyTtizZxpYMRbBowUvA25FhaFEUVyEsTv8EC79vS5H8qSDmfeXHiaij7mXW8tLaNEpsXvu",
  "key10": "4s7XiKB3J2Ca2h9VWVyks5ze2HTH8McyNShYjBo6vVv82hMXc1SdFzkA9QbLKtfKSzE2cxcpG9Z3fJkzpmTJsuU2",
  "key11": "9GXLABKfXAgeSLE66aTefyhf46grvrKfP7FcEQ5h8ri5Ly8Fs2QchLsztwTZti6j9Szp8dsNXEMU11MEoz1TCto",
  "key12": "5FkURiBKzwgnKUHzB7vVTsjMDN7Cj3MD2XBmKS4mU4XReeP8ufH2bgWyunYejEXYfoCTRLVycDq5MfEboGwJDqc1",
  "key13": "9Roordzr2wPrJLdLprCAqwSX5stoT39AJeubzNm6ySHPqUhgpeibnzs6fPSCUjLMRHCMDJoG7WXRcki9F96JrSb",
  "key14": "3o9Syjsyd4h4tiWRXQ5h5Scbo2X8jX42sBmxSycZ5ZpBt2TFWtCXHfaTCzt74tNyzZfEeKek9Crts4HwLz7kxYAL",
  "key15": "4yLRqkazdVMPtKSXbCHnvfzUVmiHML9HSjwLqaYmXmDX96E7ETk4CW2RjCrEEmfLFfg6ELm2iCUHeLtXyRbApo4U",
  "key16": "3YuprnecgRmxUFFuZwuuh1vbCmuRGKpfS8669Rxmuv1DyMmvcM8N4xFQiHJyjgVtsaogziDHRqPqcD4Aj9G8msYs",
  "key17": "5aNwZiuBAAgHzCdufSJAk3NievLjoTecKVsZyYuhdzTQCLbY87zL4ZEkAi55WuTAbWFugtwLZqPe61Eb2tCvCM5D",
  "key18": "4xs2FjsttLEBnMc3Z8dFy6SvJiCT9SBkybSL1uhbvaEE2wdSQjnneidW5adGxJ1vuzVHftnrLA2JkCiwQUhrG6j2",
  "key19": "5Bd7kUWouf9J2CfZmKdLfJNYobjKsp5mcGyKxZFGEbxRbWnmnJD9iw1tUMGFcDeX7ajZ4FrA6yjxpGBHujroUWQ",
  "key20": "cW2HAx9ZXnR8SV36knVgZ5JLv9y81K1XRpaoWCkkScDDukVAE8tSpjcgQg4iJj29Qgc6YYyK4yJXnhZR6h4pvxV",
  "key21": "3TG1sWD5CWTmL4RfJq5uwogX95S4srUaj1gM1pQTZ3DcWFD1XZM922zZhiYPZz8EfTUsvzNiBQujgtiQVREuEyUP",
  "key22": "3GDPsweaFJunovcRDaTmt9XH7ZfNZJtFCQnL7hELzi3MgNvosfXiLmacN5ZBu1C5sSnnXFrn2DwhyfCjvR43dqJ9",
  "key23": "66Ap2ekUn5Jd9UDcW5BTMprE9HDX2oBw4twyqykcmSmRcubwhhnuNBzR7pz9XkF37LAHaM8X2axRaHET6aWx1TaE",
  "key24": "5NMBNRgYuQrrCgcQQFhxvqWuFmJTAxbj7AWN14xsJUzztiEw7LCMxjHPErQGHZmLbutv1dHSP4kwWkrdZ6jcY9d4",
  "key25": "2D5muWxvYxTczMBboWSeoMonW5LqSR5XAyVUViPbpubL4qJfBYPm4tsybvmrXHceVhWEYDEUKbSYnHiNrwxnC6JZ",
  "key26": "3cCt3L2vEDsyxkuQfDggo4vnqAFkScVQmoDdNSt1JRPUPFMVaZ3XkANSs6eLvTfCfx7sLGS27c4rvz8w83aa1YSE",
  "key27": "4sw32pPqoodsheYAo6nzov5T2gS5bsaibEdzZM5YbPc1UUuoDybzPa9LmzeZ3HxS6CYCudknUevVmGG6AmUe7tvw",
  "key28": "4NjnB6DXK9wTE8cniP5EpKveQP5Neg4HHLbC3anJhk4xSLS8KGt2fY6CdzzZSZXc2ugrYphQGr59CBmuhbhBDX7Z",
  "key29": "EhbxUwQKQSMhtiEc8MqqHy1eAM2RRkr5UuXhuCcoZUb8XdbRc9ag8M9dXUK5TN3AsuyRo4oBCcR465zrLgrRCZA",
  "key30": "3zUzGL4ccnBKrQVfngNo6KW8bqA92gyi1yGXvofWHiCmhnRAsYeA648wxxg3V1gW1gWVvA3K7cohAaj3V13ewDjL",
  "key31": "5gETXbnaJsUR5Kd7udCfMVaDzD2YZvQqEqRhRowoCxdUx7wBnD8KPj3FW1w62N7Kt81edb4nCP7RaJ3UP8kXZbgr",
  "key32": "53wYFQFd7zP9TgYNAeZheHLDFFEMNeqKi3y8yUX9JRJVUmtr4dq8njoCua3K7SAWTdJFfbAxygHo2nqKYWWMZoZC"
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
