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
    "4vh6xH5vdbzcSAx2Rg66EK3iN2wZLdm3x36Q26aMnbPyhcofVvMeQzA42rz6NQMQXPFHAZ9ZTjvBVsLpY96gSP6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bEqKGzNNCJwLWUafmvJb5iGCFrdPBr8UR8jU7TvCayiPuPentcwoPo5z2cSJyrz2xomJDf9LUpcRrHMQdsHvUch",
  "key1": "5sqQZofRCynZy83RZmgPA2XnSEeGmCidUMyFmAWty4AMtBsvueKnrgdCp8Td65xPnwZSVBBB1EtXdJWUt13m6oJ7",
  "key2": "65n1kkeSGDBC5dCC1kTDUmrDpWU94PCGfNz4uJRB59RcnXWkARPsvZgkLMuMLF6J26Lkfpe788MwnkhbAJUZQTVQ",
  "key3": "5PVCpHgMuEJAPRtzAg3RTFL4zPBnX62Pabj74Mo7qiyXT6wxS4Qs2fRx2xW4NN8MfN3ezc4hqrqT9M525yqf5U2M",
  "key4": "24vjDvxb4CzWotgVoHwcnyXAPrzU311RCqNTgBzbe8W2uaudomLMX7qLk3ZeKeNFo3LaNdYBgdNLxKyCFyJCLRBb",
  "key5": "g5CWK24a9mXr5wvPEkPT4P9sYyDcmycjX3wsmDo6rx1YxniZL8UDqgfS9btyNFUExzfufr7kCwiLEqFyee9aPmn",
  "key6": "48nyq1JGX2FoPKbuDDw5SihTYDUTxW7h7rFAKBSa6tXy4EpcarVACDnJeBRSz7pJLtjVqMQ7zbGTzBg5ysgUdEva",
  "key7": "2SxGWoMW7thQM1CgW75xbfpEuhZNAGEJn1SxYF3wE9d3p6eq5dEupZSUHELm4y2GsywhQdUYB5LGffSgqb3GMJg",
  "key8": "2HRo72DtzXcRstzVM3q1x8QmvyaDkxDw9AHAoizQ8a58qFp3kEEkSwitHYAQkA3N9Pn1PZPs6NJ1z9pw1EPGN4jb",
  "key9": "2qvhC2smaks9BzJ3t8LUPRj6vLi7E543zTpr3DF7XixsKEo1m4bdeLRtPKLnWsSMV8Xc255uPPMHJBfQUpjBYadv",
  "key10": "5BDFw7YgaJCFJ2D1bw5N4rxv2MEN1h3aQNuJTNYuRPVv2VFyHxwwz468Xfp7t35T1e5DeafpojfGD5JzZrtbhnck",
  "key11": "tfRoLZrpR3uEJ77pZedNu1VbsrQFWibZ71aUxfEVyhdSvbktopDAac7B4pwRSEssTp88c9T49k8TZBz1WHoEyDA",
  "key12": "24cA5MnBjzjEMNKhsPUZe9yd6nxmrqTYJQSGdy6fGchQGb6qTGaSHgbHEoGDQbebaxu9GHNRARY4EV3iSEjMoSF6",
  "key13": "4F9Re3GdciUWbQXmYkDYjmAqs4qdMrk1tkDnCzX3wo4MsLnzapW1gfaxsWZjehnG9DhmMiUam7rfSq21v9sSB1NE",
  "key14": "2v7dmZsXn8PKTuq6EHmARTW2Q4TK9PuSddjCLC8io8qgp5ytSc3ofQKnHxwPRctZ5ZscwfxEjeNC3dnF2ZWr4nUG",
  "key15": "2KinwbRXYcztD2Sr9dLkWdFcYduNG9mZooUuXm7DyGkB3v6zk56pH58xcvuvQBJS5zy7dSuVqkyVuESUi83Qn2D1",
  "key16": "pnJQ1zipVyDRhngUhCfWb5yT8Y5dWc8vJrf5cBn3a8iXdfsYTGb5GQhF3fsbHmK4Abcnpqg9g9uhPsmQc1QavPz",
  "key17": "A4XqkKUVRfzYPoAw831mUcgMAC57fgBCugPGFBAjECfL2ieBABzE2e1qX68bazhLT9wpBPSp6gbTaydGPUwPPbM",
  "key18": "2LpmR7aAVMepgyMTAsHF9BWQG3XQ3U47b3En7x5KGpVEhqccZ2uFXJ8rhbJFPav7mTvEUtsbDoJKt4qmK3LAmv1L",
  "key19": "3boHVZxTZww8JAaLh4vvmZK2BWNV7SSGkMux898Dj8CUUX5WQTfMzTXncbptEDiC3vcNvjaAoGSLDtbdptPmWQZp",
  "key20": "3hmmuCBxrz9yhB9Yv3VjjTKgT4GpLgLP8pKsNp3TJCLnQnEuC87gt3BixksqsFCRs5na3C7WPtpkexv4hdB5eHGS",
  "key21": "42e67q26E86ttB4tiWBuEyQzUp8cwMzJvPtPbRGYnLB7c74c91CsCbmwaLjrHRuv2NeUEzhzdXbsjHry2sLFu8Su",
  "key22": "59U18qYM64MzRzKcxX6qiFQA7bRhraybKvauuw7atbBTf5eyKUzFsHLa1MWJa4w2egANpnNvcGsE8KKaZaeLdV6w",
  "key23": "62CMEJ8UZgCWDQT7THMUcfkroaLVhCfrw9xVxgZMbNXzdUR35eZNPmWweb372rBcpynCMsRwUcumqFfe48j8LsbG",
  "key24": "Ey9hEgmSENcz3NDRz9G8XVcznwUgirxYFwUab39fmWU7SwBo8qYAuiyqyAKKtaBkc7Sd53uEZ6NZDsv5HXSMgMA",
  "key25": "7MSKRU5QpyuufPpCanz4duMBjfEHZ2fgcAJeVBkpifS6H7GfZpeCgJEtNRk1kCL5jzPXMjtSPuXazTGca8XBbhY",
  "key26": "5upJz5MCR3gLzbpuSwWMWP1JNfd3epxU8w6fGiQnEL6JAcmXb98YZ8WECbPPpcswAkwpxeY523QY2MMBN4GqUTSy",
  "key27": "3Rm9Vooebg9mw8Kf5AdxNg498dJhBt2QW6kanvX85JFs1xWJwxMHLHyMsMrb9B3x3jU5rce8iZEgaoK9QzzLAKeF",
  "key28": "2Cbsu88keyGCJTiSNcvwUB3D6eTk2EwbJM7hnyfjFwtkFPxPm5Si7YVKTX5X7aAiamGhb7nV3zQyW9Nqo6WCS5G1",
  "key29": "ysBLKeJM4apEWBsy63qdJCo5rfHsV8iiQ5sjTMeCESByueQikJjsRTfoVKgCGsRNjvwDpovnCYKYJMSKfzagQE1",
  "key30": "2VkBX7GWQMkaUrb7rz7ZPMjvYLfFsVdcjyPu5pw8BCoayfBETRqr7fwWzUh41c1wgoJLzRHCSwauv4KMhAimuGww",
  "key31": "56TJkEMUMLoaNJrX1C1UhFwVJ53wD9h7YqfmGvyaVmZjCVk9AcLD9RSHcz9TZvbVe3un8LEeXxP8iUzrsMQ5GR9Z",
  "key32": "4BjH5HMFUpi8CoHRYzFkQZysL5ZXMtCjAvzDk3DoBonAphr6N5K7RnBdkB5KQTMoobSpuCa7gzK5BRxCiUtdqyUu",
  "key33": "5Mk6X8Q2GyeBmoTwaNUWahqEwdBRzbxorJQVUy8RYqY9mbX2W13ia3k5Z8JqQrbgoYgdeBWgFvD91mTanUiPZi5B",
  "key34": "46291FKUZ514wVK1168MgVfDMe2qrT1cq5WYAMaAMax55rwHMdSVKQaLFYs5kt6mnUc3weHRbkd3bPsA2K6b9Fde",
  "key35": "iYvqeZLu6EtbcZG9J9eFMsaWQvEWD2AeJj9ZRyFKn82VHZDhMgEZkJGDuTFqnTKZdKxkwFuNqz8zK62R8g8Db8G",
  "key36": "KFsmXZFVpkap19j697vcvSWTiinZN3PsqWifVorRURSNiNCyQNMDcrA6JWjkidvKNk7xCxb67bJPoCjUTEkHKco",
  "key37": "2LmoT7qXRjjkvPmJaBnRu9azMyaxfM36ZXnT473RCNoMLViBTjsryXXzy4njtb5p1oXEE8YrdknSxQHSycMumSm7",
  "key38": "5p2KsSKdZKTcPoSiLkBHF3sfpUikDSqWiYMNdPbkxvrFFVH2EdTCABoaKyLii53WA8XuzyatMkrJxpKG7e7qjwCg",
  "key39": "3WH8YhCAydtnaedfVsuwAe82h1v5pz54JyCXbyQkzsfGdm7kgRozaop7qD6CexVnWDekxyHyuGTpPsmz3ATN21KX",
  "key40": "2wkCTuRBwmiL9rscQXuCKHT3RVnLzLn2jCY6Bz6FfTQMeF76Vr5LZdG7RPJNz6TmnoW3Xpnr3nipvVZmhutaMwW3",
  "key41": "47zLFg4cTzVzicBsVrzhQkmLKPLhjXiuybXR1QKqneQbnhLUn5nQqzUzL2jhEVKUbuQDnCJmScqWyHuFhFBEytae"
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
