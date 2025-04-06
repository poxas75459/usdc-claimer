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
    "CvMwm1biU6Fg9SaHkxDHX4LnjwFCQUziCcokoPnEzei3Z6U9XUjrEocphcoVjBfW7ECVP3CFcQDP2ukiamdGJA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8GXPV53zJ5wDgCdcDZWSxoiXL3RPPj6pNZHbxfdRUAVtXZhRW54etAh2d1qeosGnM3tnrFUZEbbeyF1w9TMEcWL",
  "key1": "5dAr9JUxHCmUYwJta9qcpXw1vnZiTrhxygkSWec86UnecWc3wY2aKLJDqznJtcRGGKJfFXagEHyVazqgLmUKsbmP",
  "key2": "TCsfBPLcVsmhcKzuxvZA1SHrAv1LucxLQGXJ2ua6YYoQVRZSUvyQb4SCHtN6JgcFH2aaoQm7gzCf8AJiffSRcGM",
  "key3": "7YS7sxUThPytiDNdnA6FupTftep7muynjP6BuQV2m7qDGzqd927Diop1Tf8uJu4cQD1ox5kB4P8zwXQ6nv5TDdK",
  "key4": "34aPVV25VwenWPMnPsJGJxWRNDsKM8dSGJP37gSCxNb5497pdKL6YQYoXioY34pHYjxEWSYhY9rPoTKcfrpuEwdr",
  "key5": "39H2dpPjk1PhqmYrrgiHE59tHNee47w9oqjofDDZzAwrKtT2TUW91JkSdCmRXU4wsmNMtR8a2K1w4UmiRNQvc3wc",
  "key6": "SrX7HjHNeWN6SJrG2efMwGDuXvRKPgYWSngzWfxjHwxMuxgE6jb3wJCdE7mKe6eNZhuqq3uVmVMMAMo4HKE9NcP",
  "key7": "5aJjiNNarZ83P5yB7Jj1NVCSUWVhJa78riG2DXYJT7S1qSMQSLEzokjg44veXbk2ZUCX5oeCkr1FMzVFRXS8xApt",
  "key8": "3V7G9a2jSatpyago2d12A4U3f5Ky3oNN2NDCcRZs6WYEjnCDWJ6hynrpY4uY99fE9B1QknVRHSRo6oLuhGLBgEj7",
  "key9": "uu4dfoPoH1g7NqBLDnjjissMxYsk6pBhSuY8hHG3Bw5YZ3NU5zZFMfejiRXBiDBuCTMHNdSiTiR5gBVxDhPmyoe",
  "key10": "4PSYQ223fzpxVmG3gpKSRZVRRcaFpV9Bg3aukefFy4htZV59SA5m5EiBK5SgThipGaUuV6wEHQKfk2sJ5HioEbUR",
  "key11": "7BCyMm22xREY1Fp6aBgVnAeZhQWLLkhFV46vxqfiTGYueFEVohV7kKMMaCaZAt13LDQCgkBsr2Kstp4qdXsuffn",
  "key12": "2FvVjMtggxhQTkSmKhYi2Q5Qf7JQEQRguxDRLFmxHRLUWGy2TvHfy8FzRXf1pcP2pn9q3XJa4y3mPJFSWJjoZNNP",
  "key13": "5YqUZqjB8YcMdYifemcmdJfFZ7d99qzjLurtVb2eTkQUjkgSc5672V7nDV2niLTZyrkZ1C9the4xAKmHXhk3XgGa",
  "key14": "pPUSENehczD3rK6buo8SoFQcuSorqbS4a5GpG1WKoRwfxjsvrekhaWijoNcm8qFFqd1DdwLtFt1UkAaA7dFqGCp",
  "key15": "2QtCC6NkKS5czn6nRFibCxorAh7hFvh1tnEvpqjG4y9G9cLLq2CKJP62Zstkv4fZn6B3Rbmo93q55cVoLATpocqc",
  "key16": "5gbt4xWKVMeTCFAu8DN6Zps6DVf2ckoLrDVgfwGzNgq3Gyi39th4vH2k9hMGhm9T3rzFC7fYk3rge3PtCnDKFfLD",
  "key17": "m3hU35GgTRgaZCxqaJTfmJ4FXWurZBPFKJJevQxW4H7VQSpxYMi9a62eeRSPaoepwXn6NhwYXVs4wz9xFPTUEUV",
  "key18": "5Sq7qtVedP1BNwCTUEyxcEPaJYgkib5ATP5VfDHyEQ2ZMP18SYRrALQycGzVMbMyBFTYKx3KesC9QxMw3qLF6ZF9",
  "key19": "2T54DQiNvpHYuXuvb3R8so5N8ypidBhS14RhTt2CmvFAiqUmRMnMHr5rmKjskEtb518GdaZJDZrwfd6gUsicsB4M",
  "key20": "5UqYsoH6QdDHmQW6GVr7j7uAxRLGkQEVPppiF32j1DScWiqo32TLrht8b94AAmr7tj2ba4nzDbvLSAfZ62oRE86q",
  "key21": "WZNBkatprHSHVZHjgn2gYaMwFKc6nrWocL7kd1FGoqm6TUAVVasKWeMtrU4rZBUTPowA64QaHEoBavm6ya1ZikW",
  "key22": "4NJEsnHaPByxjpmSawiuxtsrBwo7ncNWR4NvQ8zBrbois4NFuTENuBCEvWKGBC1E6FoeyFA1LJvxd8fnL5TRB66t",
  "key23": "2eCVe7GNfzUsHKJGKF3ziXeTBBhDTABU8wKXxkeLAUcJJyzawbETiNUtXdWZC22Vofo7JXS1Yrn5tvmknktYovTC",
  "key24": "3brHcBuPwURX5XPWhLEtGngQnbg319W4FcB2pSJLGRT352TZYJU9ur93Z7zy3uhczGzFvh6CVQBjCSyuSfVPzQG7",
  "key25": "4GYnLHKf2mpuiFxxjXTTAWptv2q3h78KpPDUnMA8bfqxVoDszfH4B9uKeRpAqg45EB3DTzAfnoCy9PvZEZU3DHJP",
  "key26": "d7kp74NZGLhAf3nccSHqWcngrGDLAJbU5oh7X4inaqBKsSBJXEk6CmHaiziBiSFyGVawuD4BUTt5dy6SuCA9C9z",
  "key27": "2AtUkpnqY8yECEBaoAVZnMmVQ4gG6iQ2o4KEZHUEs1pSUk8Q71NFjQ7fj3ZcGTdGYGdPiAjujG5UetbRvjh8xcsq",
  "key28": "2p586j6kMK8aQeVeGsXwmubqJyBkqfTjRA94RhoQnEBh8bKaRRLBeeR1NnzFwWcXS58Mj3VZwP8988J8F1QqqTRz",
  "key29": "3DzyzTwqHmRMNwBCFZE7PcT9XiUzSbXhjyCpn4kQo9ayZACRurDLGGq59vLDjYzZFXt8KCNevVnVrRAMSvzYCEta",
  "key30": "sadhKaiTVSQCmQr9R5m2uxTTi8vEMBdU8JDa7Wd25hEv8LNuLbjrXYdE4eSZ15AgoQbHJMUqWhjQxio7XEugcEK",
  "key31": "2BFytQQkbQp5VjRiWJPhbxWWVsWMjCwDrhDmbUxaRCGT3gF4iRcoRKmBoAVXfyMGVUBGLTx4xpZHep5cz54qJeKc",
  "key32": "21UeckPSWtXyc6u2kJ8m9xaP2dp3fU5oaNW8zpTif5Mje4ZWd1YJb27LDHKXJLPPQrtfBrjZjrmJ9vX69LZbCFFT",
  "key33": "Uqz7dpUvujZoaMLHx1RR9GvBPzxoUnoqz6GdU5W9HtxHCH912MiPUBjZT2WFDYWrejMQgUve1EmBXznivKdTTpx",
  "key34": "5ZDEzM95bXWrvUrHknhFttf8KsFtWGAMoc3UcAFYNwtETAiMwpuQH79SCR119sTWvFrpjf1iMD4ZkrhiPzY6rK3Y",
  "key35": "3V4dfuWRuFfXQoA8h8eR2MFvzmzov5DfA44UZbSd1J8dr4ZHhQkWdkctWT3SWXXajAMpT7TCuZhr3A28quXumpec",
  "key36": "4t4EiX7YVs3MhKxiUfNPc4RKY5yEzN23UuwkqNEwLonZ3HP75YRtCgX7mZ4c4MhnF63S7vbP388Hb7CUJeie4T1f",
  "key37": "5vAeK9qxcHU9Hpe62c4WMdyfSHxh1tgcf5mxGUGZB8SZ5yEv5pASXcuPSHzpHCHpACfYT155NwifRewbt6GXDmN9",
  "key38": "5ymPJ5Njzgm1ZhJKCExzVpxYLQJ6uecYXQWMyHZGQFDud2GjkRwEoemor1nFa14gk7EqUSByyp65jXrNRVCCW6bD",
  "key39": "3K7akiWKku3ZUAGDcTvQPi3p5ZQS4eZzxLe96X7V4tQJgd7QQiWX6vGt9TqiFZvDpL3PhkQyE6U12o5q2gg28yJm",
  "key40": "66JbbKY3iQAXCbmiehKnnTNi9oh69QSay9t4eQiGXRxoAY4FJ4oVMY7fKM83Q4XDV3Ej6eBd66aqfSF6ff5wjGM5",
  "key41": "4L5hSoWbJysfUhe2Ks2efW9Xi9dndcG7dyKLtS8dM3BSKQpZs6Q6bFCEZvtx4FjsvF8sDYHLutJaETrH2erGQ4fD",
  "key42": "5jdqny4cb8Tc8iyr2MC9mkTbEHsoyhEptU1kNiSY8yZS9UvoZDS7PZdsRc7MuBSpWZYEN9vL4ayZHT6Gp19YEjM8",
  "key43": "3mseS5ytz4GZuumMVVpVhqEiFUADB3btbDrXDd6LZnSX9SdhiTiojPz1vS4PM3QhQKp4PihiYVdutbi2K5WipbB9",
  "key44": "3qZXqD8Jo8ZeMTwtsKw8PrcFTwXQintZAk6ni8UhoRxrKGmypVQ4D7pydJCojeZP6ea2cwV99JzQhQAfiUXFfAsa",
  "key45": "2yBykAhmTG89jFkUJdDq4TP74c19SR16w6ppgxpNYxtA6Pjz3D6b34BV54x8ATPvhm5W4RdE5dmwqSFX4cbPbjto",
  "key46": "4E2Y9Gr2FZuXV4TUtRNgt16WnHk9HunudTJfvvVoJjCjBzWCk3MqKoxenQ4evH2AnMA7nimMKgTrx2SoaCzdcpBQ",
  "key47": "5wLiKNA3rQHe1vVcj9M4hPQemaUiexBbaGG2Q2cJHsvuLDcXdfYWagGDtC8wUQ1GTFuPzjHFf8gtszXHDb5EpQ19",
  "key48": "HtT2H7xtJXWPk9jnzbkzJgRY5DzZEJfHdjZ3W8QgFGumMqxVWWVxewCcQXJSF2pEhfRc6SoT3mhGnfE8sLhcdNt",
  "key49": "YXsbQyDifZrnbJh3RdRL7LZCFE5DCJS9Njp8hAXbDppM5ZZXNiWHnHKkPFTyF4q4FSJEvoa2cMxWbnmLNx6Ec5Z"
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
