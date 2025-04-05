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
    "iKHKeXtDH5m3Cc7uCtpPF8oFepB7uEUQyNMvLap1vWrWLGemwSN4775sR7hPKHMgiVajn2EAn8qaF9ju8baRTWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mihWjoANPHXD7svsyVuT9NcXXuV7F9JCGZSR34Vg3ysLxz55dc1acnQLnUsEoNFzrFfU9YgjurujM6Vsa4M8XWt",
  "key1": "5qwvBjajwmgiyYY6APosTuFPF3HSHKK4NYdpaHSs8hBr6A4UKuddNv1p73K8AjYF4A1mHmLt7dGQezvkDQadnHC2",
  "key2": "2tvN2nQdn85VqTgN53ZkWY5YEBnKNPL6C4k3gVAFzs7BW95N3mBG9mEfTTWYC2sKmXbTJrjHk5vedQUMvAZWVYPL",
  "key3": "5rkufdr752TpLdXuTJLatstXFW4UoQJvUphEyFR9NMxfBSmqMGYV2GTBQxWDMn7GYTp3mumZEwZyAAiNvZ8wnmxn",
  "key4": "3BmZ3RzKkdM2JHTfACfdUu4DpG67GRLKQMiYUiDudNbxxNSY7pZz73gr3Ad2Z9gKu3XcDSJaRTRMdQxFq6YsKQhS",
  "key5": "5REKTiB3Scg6Dg1eQ8wyjGEHo8azBs1vxc7pE7A1KtrLMgshafQAfhUz1hTJ8uR4GbKQGNr3RQ1d8AZoPr8VKXqf",
  "key6": "61x4xJmv5SpTcVLmyZEPccaUWeMAVCwJVzMN86jbdzWkQi1jiHhAayRCGQK3jeYEhDwqW3yJXUE4ujoK69R5Ergm",
  "key7": "BHsGUkBuA88UaCWVbdZW3khDJvxskdr8Zhr9gd1vkKe8peWiKu9t81LQKx1L4ddKMQmdABoYfc5RPX4rUBJF8Yc",
  "key8": "JScHTYX17Rpo2fSLdK1dYX5LwMNYGuhpJQ94funK4HqptHqk8BgSQdussLWo9rS9kbz7Mpw97VhCE6j2vnthSum",
  "key9": "4iAFLdZFNm8nq5d5PqqQVhSqGfj8AwTduTV6sddcNoczohXntiEwhvsVYbp5eNKMvdmqtiMj8hPKnD6d8FEdDSsL",
  "key10": "4KMVPrDsGBaueSS1uNv23voY2xxZHjHBNmf6Jq6UeejLMVZ7iDiMPJLQrpHjToRarsHTXz4Hn1gZMRpw3oyBrHPY",
  "key11": "Q6qwkP1e1uumnEE4HADnVwhu56cZP8AVQsnxJh7V6hVNMD8xsdCyxMfhDtMmFaSbCmjdG7C95wZswvRY3dCGZAs",
  "key12": "H2FszUQBYM1LmCfKDSPT2eD3k7p7QiDyPmgL1QZUwE3dordNp2aJTVjMF41pFoSUcLMBs63EraVE7HUSvmKQdDu",
  "key13": "6Dg2XX7m8rjJcy71P1cJgw348zcTfHBr4HuTUQF3UT1ZG2UX6LZqFsx6BYDeipGJWweKAAb2WL4u2w6SN4gWKWh",
  "key14": "3SM44Va62UbpWNdsE317FiEBVf3bsYF3BFKLkvu7ptgaAdgwiRVLpmxyBHtMwNaGGTcQdZGQ1pnipEaDMh2vF6hv",
  "key15": "3P14HnzsJG66wNWEMRoCrCArgVvN3cLbhDQFRM5PsBfgDPUivMu6BrH9hBBdC99MQaPkbdfiPZ6rsZpkVgaZJq2t",
  "key16": "2QfMJQSo3UZ5sowgZiMp1FnK6o96gvdaoZtvcwHybcBtzD4F2eJiozKqtJMQp7kbZrSoh2ynkf23tVUuY5WWy1cr",
  "key17": "56ZdF16RSSunnVss25ic2mtfrsueQKowCNnRLwzykRHpuEdsu8HC3oNSK442Lcpk4hr95M67uuPQJQF9ePXwsWem",
  "key18": "mAuQVePZAS2RT9PPD8wwfoL3iHavp6zvnRdXK5y4pz6TJFSqerZwYaHsjeWT6BGGgdREq1VtUdAKpGqKa7azfEK",
  "key19": "2UtTEFQRvwLg1ExwNWCTms6z5wAkYP5hRhHKuSAvagHZwV9kQmWDda8YAyJtx3Nyc86GT6bFNVh3Y7KRRjKMykuq",
  "key20": "ii3174FbCpqAEqQHDxqGtoep6tVRTAcMcGpJaPXAAQ77V1cofKy1tNDEGGB5oNNrN4B2Ux662jePDdQYiL4Cnga",
  "key21": "2gdm56Tv8rWdYQb8uJuTdGio6FVqw2vKtHDbPJ9rU1LCFN13gT6HcWrrGp7w4EfS3QPzVbVcmzjPWsuzZK5Fknu4",
  "key22": "ijBMF4TJZwXKMg7kSixVfmfuvRT3ADPBBjHVTw6qhF9twVmxxo5MD3ogur6V39USVnHw1PFhm1xT7E8h1mp7kx3",
  "key23": "4qx3pTSbQMwqYx1CTAGeYi28VC197tzGYKKgoyGyni2f4XatxSCkh79wKi4mQk8KMxHWiJnkWC2Z8tCdjAVYg2Rf",
  "key24": "avXnP2hehLW6EtsMqeNeACVT7pXuJYjPKveKXjUM1DEac9tjM8Uo8HbVMUPTFYTsyvyYUKTtbHPDcM9Lv7btTZe",
  "key25": "2fFX9uuyqD98EoJS5saT65pXS2Uh84Z491TZpA2z715NjCAc8eBT4LVAWhcuKkHTb8Sd8fcrhGbnwpkfMMVBT54h",
  "key26": "47RshQ8TFzmJDEU6chLPT8gmMbbcbjMhjUfb9zTCWGhh63TBoewrUvimRed7FQ3dBoeDkuwCuNWsQUqbHJBo8YFW",
  "key27": "QNQ42JKy69bPtRU1BRfrxuhFDXFaLBwqzoEdE325EY2WrGVC4ETGxdAsb2QrskUc6mhurEGZPrk6noXR6Kid8jg",
  "key28": "skLxnF9A6WVhqnogDYHaskdUiYdjLyxnbbUpUuKU3BBo2vqSXGHac1x7WAmdC56TF8T6qNX23kQe7kgAjA8JqVc",
  "key29": "5u78f15aXSRVzKTeBYaZgFs6zc13tDAmwkoRQJdjLtKMG6kVeiagnFuFytkFqWXaeWyJGF8z22qApAzDPQpTTqmU",
  "key30": "52Dp5zEneCRLokE9CDC7VUNCfCD8RUboWXrdL1669s7SGRdLAgpaoSXCab6EaSJWzqv8TaFm84QQnxoL8aeerEJa",
  "key31": "3KZzcf1Fqhx9iU97vGHumLA6YrGb1G3ixWB5XqofSYYNN2S1fxEtWtgKUpexNU4cPvKMUBwr2a5TsegCej7s5pKT",
  "key32": "36yPj3HSB8yjUcukz868LCQ7h5wsVVAco4ec3Vmb5at2AqqLecpyZkdQDrK8hikoaqFidqsK85QBaeHjSs1aV1H5",
  "key33": "55bYwKYo9x7vd9XnCmWtfAmaR1BqH9FR2b3DUNgLB67LBTy3M9Rvu5L2mF4XL6RB6xK6e6DyYr7i3Dz2bSoe1aLW",
  "key34": "65M4LbMZshX1X69R6uPr328fji5Ntg2owdMGDX5BWsiuicXGAfjdUB5cr1FeRveHyRGJ153B77sv8CxKajgPAaRx",
  "key35": "u66eghSMaBm6GAwDLwyirVmNJv8tRh47MN37zk5GvEm68qku1h1H8Pyu3ybimQrHzxN2iKTtKi9zMSfL6bXB4Ro",
  "key36": "5kmzrFFXdeYfgg7tVGtYRu4Eitc4b95oCutsJxL8zxFRWSwtPQVegbrVsTWN839RZuwGNMVPgSYxdTWSwFhvdXJN"
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
