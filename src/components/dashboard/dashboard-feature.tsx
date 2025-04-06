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
    "2gGSPvvnup37u6BQNiDrJMRZtCZLT5UGXXPmkdXaYv3gqbvmQUhAa1xQdwNZGALuSyMhfP8iFef3RnepK66GwD3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JhrBYKWEdyuer8teHTyLHop3wpFMm6E5gDKUXTeExpdN1F8x61wTaASnge18HLhYFAU577MafzRqfpNhjBYr3CJ",
  "key1": "4bPE1uJBK7Qm8TwjG7QKXpWXXAgABr7PxGGPvDf8nNWFZArafktpDXVX57jdkWub41sZth1izk1qMthxt6HjQThm",
  "key2": "4Q4DPsyc4JfttBxpFxtm8G8YKAca7BFRo5HvSFG6n5evxhfStF9aEtFWPUq8zDyJrfsdpWXFTWt4FaRaCYmGrvq4",
  "key3": "4wr2KJtF5MaJ99JaBpcxmMP6z7JEa2jZj5YWuc5JtzimAkZ2ZdVc9agrVN7fwS6DKDJVFFBCnfqoyqBKqTyv9USQ",
  "key4": "3NozzYxkVMpYmMwFVcvA7xF2V4Fh4r2xbtkehrXenQPnaDSdQqBVWRAk9DHCg2j1WE9izwHnEFRh1A8xtYt5bLpu",
  "key5": "4FNzpdLb5k2MCvLpQQuwLL1WZP1zLZoKFUC9ZchMFgZLtgGXoEm33DqU5HJuRhroVFoekAWGkfJp91y939Yd9RHL",
  "key6": "5wgU7ut7DUDUQQoo8yZHf9kLs2r1FZjw5gD6uPrtnp65VtHoSAyaK27rXa7NPciNSRixGoEgqWivZqpuvLCMmY1e",
  "key7": "63mzEDj1ZPCaArwrVJLLhnGgpGPCtmm7CjGbAh1FeG63DZdiBeMvkjT3Tscu4gGQxb2LzZxbxfpUMCvQLJX5RDov",
  "key8": "F7S4tzoQTbQmPYUZmxnAiD6F4hP7MrW7em1Jd1vU8GqjUZ8wEmPoJKTijhKz8u3XkmuGBDLXGe4kXLHud5Pgw34",
  "key9": "5Uh9q5LCjfuHQ13iYiCfSqRgofmz7WLv4aCGSRHs8CMA52ahfLiQtHejirL1vxcXXe2VaBd7PU7aXyRnhWYhczuz",
  "key10": "4q1e9JQwtK6W5jRWQVMbXuGRcXXuhxJ7LEcq1LoquZgB26Ykbg88MLMiGci2DR4p8DTRoadKZW1eRfnrRjQHr1QS",
  "key11": "47KkdBrCNwWiAKYt7eqEipbRaRgdR5H1ScFnvrtMzSyP3mNMKzGL2JiHSmemTSQhTAxtQpQZbYE8fteH4Q7VrbEz",
  "key12": "1iCJ6CUnJxhDMznNLt2AnNDMBMxKWKqjwLwQu5vGHxXmNEwWgvhtvKVXn1HuYttntLNDbKmkonvs2GK5ghWP1zP",
  "key13": "4WUgfUbLvwkT6JCvnYS8UtbES1f5MyGpqW9F3rnb8m6ttJDM5oGheBDCNXSYin3av1t3PD51VmSLAUnP6H7L2o7x",
  "key14": "2vkAnm2cHWRLEV4ApbT2Pjybindm7fJECNBBiTMJucNvDpjZpEv7nveyz5daY4KdAFnj8psErSb5vp3xBBAJbLid",
  "key15": "2Zfq3Gs5N6MhaErSydQ3LPgUSqSUa61E3QwAsvxUzzAL8Bmw3WuzSFUckAmGFLy6gSz9xqT3P15j7eR4xX2QCSRo",
  "key16": "3wpwWzob1sGFNt9iZvxAFj6kGD491dRgFRHjXfEAELgbcGo2C96Tqgo9LmKgkssFjdYAKKVTMCFDWiidNhA6YPBR",
  "key17": "5A7x6XS5bgN2xBFq2WPTTVEU1tJmtFz49UsK163yCtMUKKPAeT8Qbzuj2vceAyPYhCqZMpnFoGnzkktdE9r4jVA1",
  "key18": "5S8RGvocNLJ25q2y4JxV2ppF21hSjomqzyUZPN23DMxghpvB5EviBJyXzyKZUuNkS4xbsZhcQ137RjfmyVyqk9tA",
  "key19": "nkJhZKAAi1RgSL1LsGFBfYdzerAUQyDH1HLayuznQeUD6VBqqShVxJXaCzCYzxD6G8pCLuA9HMkvzpSSRtTDbaU",
  "key20": "5WGj8bnBRUFTdov6w3LtLYK7wiajvwhPyV68BW2mksyAFmMDQHRJ6bEfTRLULzZRy9gTM6wMpv9mFUKjVLHvmB63",
  "key21": "4wNPRaNhGByWFg137bwHi1Vx7hmeS4dFMVKvjhkWrnLyWfpNxMMZi4JWdtXjhbkXRNFyr82J8KJrhpTGcXVxE4A2",
  "key22": "658EfpSDNX4gLahTJfAoC8edpHwWCefh9QbbKH5GfJDLvTu7fmmnEzsA6GnJMEnGRLBnWyzJDyzYwsT49KLLfayN",
  "key23": "3YrDkpgkWyBavgnnYTorg395ZWiLMATRr2F1eMj3Yt5Fp28ENTAwtnnVAvrVFS4AzTjUG1A9A4cwk5Wu4DFqZVYb",
  "key24": "5K5vFHihofxnc3B3Vs3NsJzRPzyv1RAPGdv5zaikfVh2EDy91f6js3TiSEiza8Z1b5yTCpkG1Vn4vfjcjP3ibifz",
  "key25": "4P7ZC9iwodjUGZp3bD4ZFqMEm5Au6LG9MgyC7F3qXfWRX7uY4gHT72RTF7j7aSrDk7muC9iBhwAfofUwPKoFWvLG",
  "key26": "4bwEoKYkqtrn5gdGDwFB4yMyWzkNS6U8zvaiqh997LdSrBsN31cP7hwvCQX9segZ8z3iG3kvMVtV9NKwXD6EPGPq",
  "key27": "5DroWg5dq3uwNWwA3fqssoRkWLQfhc9xuMxeEem4awiF9R7gE7jCBzbasH5tKEEMWPomfkwFycE4zZ69VEECQMbs",
  "key28": "5sm7thdNEMvv12iqjGpj7Xe2ndbztt9dnmMUX1F2SZWmG4oG6i9t6VgXXZiK6ofAA9cWD9ZpNGCE1oYk84NdDuzg",
  "key29": "4mL44bZgdNjUczRc1fQXhSBkEZNrMt2CqXPyyYDqhcpchVmMPCBxVwc2PWc6wtbE91ywuCF1CNoTNuGwdzU1vkwE",
  "key30": "48UDb2L2jCxu5qJketoQTdTTLZfVg2a6phP4WWz1YEaDbV4RuDPv1Ynefc4rjnSvoNULm6eZdshm7rY265r7zJXQ",
  "key31": "2dMReWUTpUVfjyjjip6YYCq5whHKoWpjKxwrL2MiEnSExYaHfWKDA5NvmeFpUv6XAqpMT2G2fKC5B8v9CN6Mmo29",
  "key32": "eRR4vsdVjNqDsuwGc8fkmU6k4kXfSx9TyjyHEB4kyehRNwkUx2p2hhby69HekfyeMc5fKm8Zuk72NYdkyMXge3s",
  "key33": "32iWRxQQ795qfHyqjbnFi5j1Tit1JBtPHksFqdxuiSwZ1BfHutcEYrmS74AL8hcaQdYywRZbUnpEHkrH9kUMWXnf",
  "key34": "hAjt9Nmyszk93EExTx8VypaCRnPdFhRrGEynBLGLs9mLMWxxgFjQ8cVmQwAyvjioAnaQxWNGXEABtaeCEJHMYzV",
  "key35": "2HH1U7BM3CXyjsjG1uXWcj2aUCa3evjDMsNHVF4C6Ewv2f5AUCDbz5DgsT2zHXEeX3DySKzXKUqeajrxTakgASSw",
  "key36": "27efJLkXzttQDkqwdqF7YQqny7wWiAC3JaW5JdN6CnesGi9qEnW1G4w7pk2epEJ1C3RHuamRk9AieZtm5tbneMTN",
  "key37": "5uzGihUYtVyd5N9WBbv8CQngBq281dvHm445pLGgN76jtEGHqfJmTYMXG1nVPr5b9MYYadVkEYVVQXH8crefzPgp",
  "key38": "5STPcNW54Ky2f8hZ4sw4Wztrj6BKVBp3Yw33fm4C6yXU8xrBJqKQnJTpnpcf7acZa6QP7CZEVUp9bGemR69L7G74",
  "key39": "BbdXu5m1iS2dCKRjb2JZw724sWLZhsMvxCjcrAib4vP7jy8T69dMaMYBZbfxTdi1LEoUddpDgmRP1YkQahpEiJC",
  "key40": "2nMrNic7jfnA2SyqCnmwozkR1sPKFpWqw86bNwXnU6j3w4WXTFauYuf7Jpoma5c1uT25kyXsJjhEPFnbh2oJcmCP",
  "key41": "3mwqcKwbF9Z7NF5dB1QqUZuZXTVjUELePCX1KwCxBMzz2ErugwDTVGikrftr5EvnSSaSCXVtPFRk37f8yBna3nXk"
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
