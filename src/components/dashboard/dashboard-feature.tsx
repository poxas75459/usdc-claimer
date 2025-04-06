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
    "2TQ1wNbHPEqRQ2LjWr85o2mhmuKohzPRCZLGbBnEWNN6W61adMYWs1BBbzaUzZnU6XBdr4bhQXK2V3PBumUx2Djk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SF46UbJQuNCXkqDvYcDYWswxWuzPtGGrww3Ke2uzYL5ixv5kuo9T1ZCKV8YCe9H2Vh3ZLXD9PW6D15cZCSXtHu",
  "key1": "5kexozKmRM3RwA2NiRLCVYUE5A2gNJUgv2gwbJ1qrZ6sxeDgYbnyVXfcv6ibtAY4jRiTmJ83yPWUZr3XFVWeuBiD",
  "key2": "5utDoqKE7gH9eQ9MsqJJMXJgaCExPBDe9K1CKx4X41WWJmQJ7EYqpK8K3f9esJdRUXkD8Ry8iLMvMJVTgDs6n4Bk",
  "key3": "5QvzYCbj68S7RbDxHKpHBzm5byW6L1kCRJd4wufQ9f3UAevRCwbo4kzkmNb3gVHhT4cv2Z1nQKVuHNvxMLD3n57J",
  "key4": "4Hv2nxjAJUH4AiC8wzw86xHBGauWsE7iws7Y1PtLvoaqXmmY81HTFZq22cVmWc31CP2FAp3TSCCddH82JzLAeGK4",
  "key5": "3jNGxZBxoVxjVwpfhYNmbLk2yzZcUsGn2fG4kxom1UrBfh1FDiw27tf2xTLoFgPeXZ8Y4SeUiQ51aExawkA1j526",
  "key6": "Qy21LnunVE1qGD61AHE844QKUzcY9MextMQqGoauPgt8bvA7fX7M5ibogSRnNSPHrgpGjjgrgTSv1XdHGjFjcVZ",
  "key7": "55HFmPh1j6YuMxZnC8prkvtGaC2q8PvdV2aAbE3GAHzD498XNR7qW1HNkd3e3QTxv78msAeV1J9HJMY5VzaQ5HtY",
  "key8": "KFAYAPjo5kShgD9HDGrsKCrXHrntxGbzhYciuJQ4ZYnYGBBS58nSEPHdhLXKfT6W5yHQePRAAG8M9GNiTfiJ1bj",
  "key9": "3urpvhouTafXHEGqbr8hCcXZojYePEBKLCM797VP8o98BSvhp58opGFX1NaBw3VbztTFPWQUiYFpr4wJdSD1cwRz",
  "key10": "2CjhwWVE27FLqFVuYNwcpjdaHyF2GVawBfiFLw8rabkQDx6JDsukAX84F8rScTVceyD5DcRPTZB6FAt7j5UnJueT",
  "key11": "2vFvYnH3vRKWwauPjLkN2PfHsambwadbkUaPyaEThAsFSQ83oxEorUwkJKNwsM57EquaVhpvJCxhKdyVRc5NfcGL",
  "key12": "mTVXm7nJMNwx6khb7wmGDwJFLfWHBMHkLgsA8cFo6LtCadVvM2z7H5q55szSp52YEzSZyeSNFyQ7AwfPaMoiyca",
  "key13": "2VgEcZjYjLBbghaPXXFLmyrQZ66JXQLb6ciWfRKQyDqr9AAkTXcuwvm6m3MGnp4GDXYwdJo74HmTyBZBTuho1yju",
  "key14": "38YieQwjdhaGGjcSeFyTZNEMsi9h9zgDEXkq6eFRj2aFqs1CtNjGTeo8SwkzEK72A8pCt5aHk341xzNstKDLcA9s",
  "key15": "Wp4QGmYiPLrRtruEwk89stUSrZhCNGF8Te8nfKHVVQDDBEtnB1proFWBNrApFuWY6YvjcetZdDnSmYx2bGakNWC",
  "key16": "5TvrUrfd28aDmjcaqDTi5Mz35A4Np1KC7W5NstcxZTRXh2EgXr5hHgjMbnnkMHFY6dQXtJgHzZqpvEVDJS6ngGAj",
  "key17": "4GGpuvLecD1Jyqbp5HdnQUgPktfhSwDB2cbJJ7A2bdNRhbuA14AKgpGiiGqtUUUshVXuTkDPJViJcE7JzmiX4Hut",
  "key18": "beKSJuXXNqMnjZMTMzmEj6ccBDyEEeHVCYAjR4ySvByoGVKwbQypFkrc7wZM5zgW4wbP17UuZ8NCLskB2tkKhuS",
  "key19": "4ZMKPKugZUfEvWN8tkCT1aQY3H46pqAuYxVJjDS5gmDEAYSTLh5NtWF6x76dDpG68cXkXDrHonDgTEXgnVZyp7LK",
  "key20": "3BRLtYktycMYGV9MobGkLYuNHXTLAuMW1nsUSEPZm1mbs3QkEJbczALogY2foFpbrveZbeJkEDumnQ3hBMJTLm28",
  "key21": "5Xqik3n9suED3CTSaeD1YpgazURs1ppGmKytT6viaDu8XQyk75KMW6uH24cJtvv5WN8kWus2X7feSs8rDPCDreNY",
  "key22": "K5SDMK9i6qeRsqSHb1uiXAFs1uifoESCXZwZbUiGR84CepYpoi6ZBcQXHJgE33gzZPKWRUwG7GjkGinN1gf75u1",
  "key23": "3gMjSRzvaBcMTyajnwtNR3yhsWfoECSBvVEPeP8MoNmAm61PoRs2CHsYLwHwy17haMX9JCzYfRxCpTAdZQDVpDaT",
  "key24": "2ZgrLae2N35y1PMdWEpbjXUc7gBW33Wys4uTrX8dWoJgLYJkimN8pPJK1oKMXS2p6VXGjW5rwDYHwFovPiWuL13m",
  "key25": "3XFBqdWWeZPUH3ETm2BbeSL1s4QwWxhf2PoVrmrUYV4gbQzkQYFaLUkm51qVCQpuXa7LriShUNVgyvQHwHt4Qz9W",
  "key26": "54N5QFBb6FcYsDSdouq9X7FG6iMg5L1wbj2fxHW1ds7Jrhnanc6shBpSsHp7Lyk2Nq3V2djb123TPvog9S1LJ1st",
  "key27": "gu56i2jDQNDgfwgmLbnsEwXuhBFf96CUwwPTei1YkJuTSavJYMueoQjnF34jJ9R6zwnwKc4MzShR8nYhNKwWHpE",
  "key28": "26ZyYQKZECmHZmBQmBNMyPeTXv6kezgP1RsFBdo1ymjxbvEPoJDcZBYvGxKfSJbt84sJgRormcu7DfFC5GuFZ3aC",
  "key29": "662t1VsvVQtJuTiah3iGFMNm3H4paeHoZ8hUEa2pg7fuUURFJxtFtevLTyR9SfUwhEpQdbs6U3ovgXYti1aQQNWM",
  "key30": "WndYqYHNs1sqZC5zfS5nPEsY7zYy1J6dQK3HdXAoHXqQXaicb6dGU1FH6J9e3vVXKux3q67G8zifeAe4aEArSTY",
  "key31": "4w9eWvMfySSt3HrtuGDPjoNcjQsFbXgRATmy6mhfpqY32ni3pQTmLGCsFHcFZgxQQCJQgV5s3Q74jgMMNSYLVKTx",
  "key32": "3kyCMs3UysjrGsUR58VMHybhjeWm5DVrKw3eqn4GsP6cfGUJ4ehTjmEPmjNdm6xXy4L6xhfoAFAnY34bo1SE6QZs",
  "key33": "3xE3vK3zjmbesJz66jJd8oFpwSvHQgpnpwbTdxBSun5SKGE1CcJyMmGsXBWPtDMEz6wQ5nrGDxqUjNxhurPAaoEp",
  "key34": "4wqTkryGFTiT1HcaSzr1i9mLYXFGzNRm7QTmedRWtXVuwMrQ43eghP4oBiQdGEcMQRebY9STGCjYXAUvKgMwtbnG",
  "key35": "3sCWqp4dkHn3xUtJMfXKWAysLPcphwwCAR2YHqZAN1pj3dLStKhxkRhWQC34WwJy7iuuATT72SJcSncmd72abQtn",
  "key36": "2q8wq4iTfKaYcTc6TFtuTUCfi6Mh9kJjndGVnSMB1P1itCB3AVzK79Zg96BD54UohAFytD8uTtkkNnrz6cJB8fXN",
  "key37": "5wCq92ugAEQh8Sho64gdgyAFHb7EbXWXaQGsD8kypnhYV7nYWtt2GWk3TyabktfvjizewdiFwDfGK3b678ZeN2Xa"
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
