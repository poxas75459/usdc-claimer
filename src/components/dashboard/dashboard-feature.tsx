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
    "26hTL1JfT3jKKqDGczPhZtQjZ2Tk14eukNfv9WfGMxehunZzPet1hN1AdoKTx39VMek2FVxeV9c85gThGKuKtZoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9hjFUkL7riDfC61nQ3zzwdXX8ETEUwoqSm5dFci7CtpsehtfzSM3s3hZNmveGJSFHDRNj2rgH98eEXjUgzCLUhs",
  "key1": "3rjHvwg9LTJkiejrDWgEckFNSu4HYyoDbC7ktTbHmXndSY314iR4yuftKacACQdZSLUBVKYDMvRbkPggQRgo5tYz",
  "key2": "3euoiGMBm2qwmi6fqHqo6op4PQJxj7JUkjwKx1sqfs8fXLBDQeUTMnEyCFCgbdFNP4kMzk1yDrxEo31oDt1xMg9g",
  "key3": "2WjgEa57C3uW78DsfRc2wawf1dZW16mMNG5DkwJdvKLceNVEn3Yaj9S1xF8tVZSRqkxpiiuHdSYPt4vc58sRyyPQ",
  "key4": "4Hp6ATboFoi2jTuWgzLWfUZVpoxyY9bqhcFgqitLmTWrkXu9NSVeEwPDtBaRRMC7Bfe1P5KGcVZbfzNLzpHRFURD",
  "key5": "5mS7vjdD2tLiw4gUygCLfDgf1Z6S8EeoheTvBUsdixUBjHxLLfrbHmR4hw5bo3ZPPWQKADYqwc46uNcFzt1s5gtP",
  "key6": "G7BR3FGgcnQRFd3tXdCQqb3rGawJvFfkhN675kw6kccXUUx6ctziKxNr8exfosHopmFqk1bDhJVb8ZdofTtxhbh",
  "key7": "ATxfSZ9v3MMQtXG2NMReUPPkAv2WunwMyLbknoYKHGvdU2XyMgwHdMiRP2W8zcw1qu5spd2wMiM16FYwqACXKML",
  "key8": "3MFMX4wYoSLpkGyisUbCq2h5CwmBqLe2tSgsN6cc4NowwffdfjpVZSmR4FKnfEPRqiDB8gAj3brvcBgSaAqCksN4",
  "key9": "47Kt3brwF4JjVgDC9t1BJwVDWEhorTJER24ZQTyZ8sfBeQahEXi63ZtCzrcWmCavjau2p3wikQxtznMo9nnZLzQM",
  "key10": "5xSDmyB1qMzVDyZBay8J9n9aKvkBTjRjVMYEK2PvopWRyFWnAaheJs8NDGtixszij4GGYoaFxs2wuqoagTNp7PfK",
  "key11": "4e8FaxFUEGbp1ZTCjWaUnqSA4X35TAkRVt5qHH2gp4Qk1GTLq9UXZtYCYpEeZQBFZzrk4XG3Ue3Pk5udA3Jyrpgz",
  "key12": "R7H2fUgjjiGWXVHYxR3mbS8bSpdDc3CNj9tW7MsmG1g7sLD7YjArVRyGqhaKeqPyp1EvHvsUkafuFZ34BDBBEdx",
  "key13": "5xMWPdwQQL11KF9NzxTGNxkAdZyCwiLSfgN833gEwTGjFhNXQRgrJaLkd4tAF41MTM5wSVqsPYWzAgrZ6aGCWGpq",
  "key14": "5xLwLoB1uwpnog88ohiPm7GTy692Mut7p7Bep2VpHAVsBUXUr3zRzKEuXgmJW8orewzgEHs1ezeuUs9dkCHaiZ3r",
  "key15": "233A34u9ae1eSLNVp5UCPBm9599QAeehCZZsBgFGi8ctKH3WgzfyeQKUtnBTTTf3EbcEHaoDw5aTvrRZphp69VTi",
  "key16": "3gdJ2jJK1AwBPzraWStWSter28oFVhyCVQ4KtBzKHRpzDWMyoxNaJ7FbvxvHwaZgBRLvvCy2HCJdSPrmT1e8A4UE",
  "key17": "4cRTjEp5o9RWrWR356PfyLLJFyFkq9boEmboBhG6prjeo4fyg647QWiEekSkhJ36Hb2KZACx3dBv1KUPaUGFzRiK",
  "key18": "2RhwFVRybzsghmGt75yK1uWJen6NTqsZKrRRqxMnPvahnC59U2WPLtTx3nadakf7WfrWkHSMAYoMfCZYSQ3LT7pa",
  "key19": "aaaa53pAMtV3AY6pVhGQpBYWMAWtqHC7vKrgj82V4VgTMKcRegmW8aQLZYBgkFt987xyw8fEb9szHwWHmE56kdL",
  "key20": "5QoQ6x2SdrnUBu6RWjuUjhwomLtoQcuRzGmGxT9GCMYpDYLCDiRWzt18ck2Mijffvwaf5iyXtq7u9HogTcakdWnV",
  "key21": "5gGEyxwbheqbpgEAiy2K2ZqEcnoVvZJWegXZZHPyGh7u8fXYjH9KaF7sxQ192hAjxGXP4oUka3rNVyuLQCYwYo8P",
  "key22": "2tSnzRyj4evAyhRHCXZhJzfp62ugF5FQUfqgFDLgcnR42162Cy1jp1n6FhFRjLZ4oK7Msq2fR88pVgF4rcNnrqda",
  "key23": "4UhL9npsgi7v61VNdkE1pUV9maPbXUKP3udRY8c5THRUErn6XR9nkr55uFg3RkdA58Wrmxyni2tGvUeCjTHMQaXv",
  "key24": "4M9awV8ZzNjNcTs5RCSpSdgCqaTn72kHJ6soevRaVi8JwuKS74biFSVunZ5X2YWA1VCa8apmbQ3LekXfFFZcJFBo",
  "key25": "5ApDo1ZAdputLD7NBA1NuVRD74kzKu3GaXbjWMRtCkKb1aFWri7cPvAGiZzN7KFs29KbcmfYaWVLE1oJXbp3G1j8",
  "key26": "23DrTXMU5dTRWdiAGScLWGYsJqoyJQquJajVYxXGXPc8PUruP14141p7P8nKatnPe5QyJRfFnePWnhgLDxuPivzh",
  "key27": "CUKL58HmhbhBqWmW5ERd6er5DZEkVeDKy2F612h6fSNYqxcyEaswmDUdfFxX6KmtyDDokjz3uSbdrsYU1UdrJGE",
  "key28": "5GjQu9gUgp3WWDRKbBMbmuoU8SK7VBVo6TGiCdJuNMHReH6MNobP6Z2Ba3Vr9rFphsHESzMXj5U7YaxiX9UAEWb",
  "key29": "2BLfo44JN6GA7AesogiD2uJg87MVfW1xDSmzxewHfAuWDPu7Dqrp1oMNXhVPCoprwNjpZzJ9Vqb84FcL3vb2JtaG",
  "key30": "34gxZfNQa2VnWmHmxYCkc5L2UDsobra5ZUeMpfgZo1VgTu6LwN3d7NiDU2Gbuuj1nxB4SiPPvFnn55ZhLG4PSQH2",
  "key31": "2bYtZx5CRV19v9BFGtGHrPPJu8K1S29uEDDRo8jSdA2rPqS8PZ4CgEpujUem2v4u6eBUizGiBSc6vBem4K1H2q1i",
  "key32": "3JFxvYWA8ukbLuuZ1JVpuWUFZCZsWFbAzREtSph6p38mwBGNixzWRUxjjYeKprYoxTbgBL6xK8oj8DGN9UkX9tSd",
  "key33": "2X3RoJWNFXRcRJFZ7RjTjAigaWoH9tWR5JihFZdwwVHVfCVBrAgo41Qjs1bev2G7jM9UUovvVtppXsaC2LLBAtSX"
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
