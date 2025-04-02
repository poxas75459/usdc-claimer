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
    "2kkhaX3vtqQPr3LyaF6wdfqwADfPsp8RUHtVokiSAoNZKp9zvJAkrxEKQUQmTNuJodUZ3cCjJFqoauhcL3ZLx9vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GL8gQZ1r8CgDm7DFtqtBZVuJKZVUdwaAvFNjYhFtwnoqWXwKMAZAURVyceJEts7EmC834tyboqEy3KQCixCoc5n",
  "key1": "3FFGGWnxWtQrwyd2Zpv1FSg29fQ2yGMj1WzqsynxXtuFnoKx3YpTLbEqLV67UhJn7oCqmwBQKtyGARKyNSsAjn9c",
  "key2": "2WCk18LF1uk2126jpbjQbhk8uLzPduQqccK3cSAScqrFxy9Sf4o4FTA8VBwNZyrLSwDsHzaUtaajmsb4CxicAu87",
  "key3": "3wLbS1dkSEZvha8t1U9tL4rTK64GiPRaSyUYYAvHdUDx8Xjo1nTjJBP5pUWagabPJ7zk1c1TnEGniDi3rhZQpwoG",
  "key4": "3SKLMMkRPRYh5cTbjjXDF2hPfXTNmJEM9njvw78cadUD2S2zEZBVoHRERu3Ntq7TSQEJPbVm4BrCZKtqxAiYuXgY",
  "key5": "4TsavrDtu9XccncEjj2BfH4LR9MVQsh6VcbfFCy7LshCgb3D7jGdYnK5u1PCEjWznCmU4JTtUbMUagfc8Nc5UW3U",
  "key6": "5QCZYvS79FjmiL1C2HdH74B3etm8hwgr7zhaYZxvKzsm7ugvmv7iVTQLcfUbY863p5ZFtUaaUso7Q6DcinJoQ61w",
  "key7": "krkFU3HVpmoYjvdeDnSkBAF8TccYnicScj1BePSQibaDtN6W7qPQ2XPEjRXDs1KB95q315H4oHhYAFrrUjrLx2U",
  "key8": "3Z9mui2RrBqrDohn6kcv92KARrJ7HdRymH5sgYrJUqUpZtEufcLGGPmUrNR4WDx2ueEFC1dPLScqZ61AX5Q6uZ5K",
  "key9": "5DsS2Dbk3qaqcpbzRgb25fi1rvJ35bx3abexeYSthkyT2VAEYAJrwsfLpYmAo5N4MH6RH9VccN7Y92peyq2Qei9Q",
  "key10": "4RnwK5J6LKwRdAzHyCDCjfMSqjhEYmEhKJwvG1mqn1BmYDRKs8RUMyyGahXDfwfhjLK1hy2GvoSt1jxVENpniEhx",
  "key11": "65bA6CWxs13xxtQupk6uaiK514g3DyUFd57KoeA9ZSHug5ddpxftnZqDZGYHHx5993WsgCo1FcUZ2wK94oPsmqiU",
  "key12": "5bnxAi9VZEdTBYZcnoN5uNbmckMFwYeWJHKT6pqFm2vrMwuBbNfyasMXrgaQEkqiDQQEhWVtKQF6hMkYHsp55yWE",
  "key13": "4UxejpRjnh9SsbLGMWUyGSSJcsn95PnENrCK4MghURLvxwiv7Gg1dbPkMuJQZLm9rFoEMh7p6QsnrhxfSmaUak2P",
  "key14": "Msur5GzRNEooXf62bZQzTxgRG4vJhA8rWLA7cdE7SHfbQU67ik3cC978hHSUb3Z3mCXcimAu59TdzyE8CEc6QjY",
  "key15": "3nYBczRr8RsGXdJb7RpQ3sek5uj27D7zhs2FSV3c3iht7c4JFSvgZue7VFf9o2yAfnRVig1BKQbBp25CLVTUaxd2",
  "key16": "2uKLDAEZTydURc2TkTwXHKt6e86F7hMD8AR6u2Sj17Qkz7mXoLXEYmpxDxTPBTSErTJFaLvQBJDBWBpvcn8jaJ4A",
  "key17": "5yKPTcKeEH4FvvgCC1GZvCKFRdE7hrfXQrAxrSPDqGGGS3SyrbaVwMG7WGDSbEEefLz4SstUuhueoCun53gdAsRY",
  "key18": "4ZdvN2fWEjnafvQaiqUT7DiYoJkmKkYMn9sJmFprBN6HyuAhhbdJwM65A24TZWn9oCemASsigaoGG3YqPqhq8XYe",
  "key19": "T3KrMpSBwZYuaShMp2jeeKjx84MH2LTDnjzuqKN6GHmJVMCeG57XVH5nYJZXSs3EcMM773oHRs66GSsJapqAcvp",
  "key20": "3Pt1KK68exsGWuc31aZdQZnKqDbe9Eryto1kgj7nx4uWdy3CCZWF1CVFTj5GVnjrMcorjzrGyhYw2Wzk2qnkdZY2",
  "key21": "2M3qjAHaycXxxJmdXo647A6u1Z3yZxsgxJxHxeFh4EtGG8kots534aa12RxduffaNeNFE1SH1BSQQCuEiAX5TALK",
  "key22": "5hy3GkszTwsGEetKrbdd7CrA83eJLk4Z6mf53ZjFUmr9Zv1w4cELzzNFny7VkAXbhtmzixxNKDWr3muxZF5nqB2o",
  "key23": "297GfEYyhiXH1R8BPTpiJ1RvfM7jDtorgUQbmeKxtmYHiJExATLdBxpBQfFNagnmoDj4jZvV1PLnzoVJf4oyjtEQ",
  "key24": "5m1HL377zGZT9c92wk7mDnpYybQmZzBqwG3dV6NHJEkbZ7D8ikQ93x5PeAepRX9ZkHzUFuPT7RHgJevQCTzr5e3j",
  "key25": "BNioTNgqaf15xjHWaFbi1PCtumkstC1MKZgfyDTNDUy17Xg25gHB4D6JFgVw4gZ7XHeMzLGaTbe3FfRCemPrtcw",
  "key26": "3AJRv9ddfGBS4K4jRvWXgFiWxsJ4wxVvv37sk4yHy8ug4x9euLnSPhVxd6cBM9Ltdcak8TzfervNb943TW2itC3B",
  "key27": "8d1QcYYNqRA9rvHbfN5CwR83W7eLR3LYWJ1KoF5iVRHDSJcK6FbEqQx9xxdnCLfCv5DbqkDX5hfkYFmwmexTQG7",
  "key28": "5GatCVyr4c2mLdwBouPBN9BWb9CMbAXiBUY1ym92yzPFBiiNoerftUfUE4LhZkpZvfhyPF9Q1hQV4kZUktzLLyHd",
  "key29": "5YXbsoKZ7iKDXYuLY5amxWN3ogfErgC7cuHTSPdwquekx1XUkPKRitJVivrNPFh8H7VRDuAbpwPfAvQJ2pLiteZg",
  "key30": "3LFUkmEFt7FAVnfuKM59twNPFqc4tUxTVy657fBy6NzVmdziWNj81ogrusMEVCHiD7vcTpvtete9V6rz8o68VQf3",
  "key31": "2dUPZ14fkRYj6k36JePLNgLjXhsaoCjEM62CQWEgRSRB8dZXqKXNgzfpfUTJFhtseJFF74TyNXhQKVZc4Dii5tC1",
  "key32": "3CvCZkK1gg1N8W3MAVHJELN9hQwKVwWTSiCB5AiE9voVR4gtezrenKQXZDYjq5bq19YvpQ2JgmniXBJNUwjZhje6",
  "key33": "3EoX3YCuBKR6ZaBW3Hi8Zquv2PRG1mRoCqX24iEqLBYYiDHDg5qRLZoJsSTm46ak8QEn5zU5GqGZKNUEse2Tivaw",
  "key34": "22eCHLeQJ2As9MBWrF7NCZwJmfx5Dn12Hkv1Jk6YzdzushsrgAgpDf4JMc7z48VHg7DxVqpDhRGEZfiM6ymSioqd",
  "key35": "58niuvnJKvwKAE4vWe97rixgYCYpkjQiGYQPVFPrgHBCdF3qKozwn6WTnTb1ekeZQG77pzRNQDkKgVH2EtkTZm4F",
  "key36": "owW1FBwXev3JJu9kaK7jBJVyb3X3J8TrQepyGJuikVMFJ9VxcRWt263WHnsPa5A4aMYkSLCi7ANCYDW2czVRAKa",
  "key37": "2eGa6STJfaUD5Rt9x7f5RxYmatkRumWeCjbNaq8HHmhdH1RVN1KcLUYKPqBiDyXkTJFkrapTHmZjFGyTAP7BNh8p",
  "key38": "64xzhjKbaZfnhxSn8azU97nwXNbhuB1BMA8kYHWADLkgzSKsmsRzNWRJLGkPvaXqGStYz2Vm42STRqm5oM4BKuyD",
  "key39": "5jkrkJ2MQZpBjA66prffgVP8yoKLyd5noDBovpTd42aAe9tS7v1cqLHGLFPMbSGkBTkAvYvH3r2DtpUrLpnwit9k",
  "key40": "5FF6u7UnkkadskxgMDNPjW4zbbhhfpbXJs3iymfdjSCEJ6kz3i5M2v3chdJufhTkSHv6SGBsgN5jPfk19sdVoNeY",
  "key41": "26RgwV9bk89H11Giiw9c3oThzduohHwz74q2EsEhs2bEhdowdioNQhm3FivJyotUW2Er23Fkr3GqMpiQXsbNvoVp",
  "key42": "4sbwSGz6r9TDsaSHapRmYsvPE5eVF61R5nnkURXnjuPN9rRX6ui4FCbESkh45kK1XxsZYW1o2jhpAs8Q6JHBzYs2",
  "key43": "KfgU9xzqE2gK53CDyzwa8ADZySv21BQEEwRyH7BsWoGKJGnuoTu3vHJjRXnVPpEB5Xje6u1hw481B5zAQjdGNfR",
  "key44": "5qHrico6yEXSk31QP6syXRyAMzeDhgkMmXhKmgpUgiECJPio2iEVWtDCZUBeaGzioCLQUWJN2twsuc3Xg7fubb6p",
  "key45": "5uYFnHSCv9A9jrSegcu3xtkYkgVikpDRaVNU9EYLPeNrVSEmuZfTvbjM3qS5bbudyA2dX71FNtoYRDzAwmB38wCU"
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
