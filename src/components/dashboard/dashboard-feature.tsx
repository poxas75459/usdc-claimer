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
    "kms9yVa6pHK7daQB2CrSDe693zx5oPNXnEKotjsDKY6D4onFZmKbzVsRR9YBcULBzpKuLTh9P15nFWg5kGXm9zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHcN6EvBbGjA8CPGaekcCmCMWkvqoW3QuPWEWZD1ZdUpFBe8Q99GpTKMcH233XKPRwx8vo4cwYHH2B9FNxLJdcV",
  "key1": "5aNWTfsaRv6Q1ejBr26T7mQKzuPzMUqqYxiYBAvqrYMpSPRShebfJcTK4YApFKBbWE43ymCELr5JTjFJidFEGCht",
  "key2": "3tQf5ZVUWN7cdrN4hEAYWLUbGcgHmEjzPbvaPsJYBXJty3v6yrVEooSdJ4Cggq4wm3C7jhvEerxrAJgVqWNoTa8r",
  "key3": "5Sjv7aHYckghUZ97JyuLYao9TxLEPQwwWc2bFr9wvYyNB2vYkeQLLK6C9DSjs1pijr7eLhTFyxbxz7bsMX2pmPr1",
  "key4": "vzFjuxdosyFoqwQEe5Vy4Dykjh2no6JSupJA4DaAXXX2RNRGBCocMa2X2S7pakYe13CkyAEcCjHiggYBqHehRsQ",
  "key5": "2g7zYSevyHeJhainBNfdPTYEEficeC2AH9a6Jvg3UwbXvhKxdntHGM2F8hb6BQWnsZC3bRZiJHVMJNpP7ZFMLnu3",
  "key6": "miX1dGHwEkgLtxZphE5SwXEavD6tMtbbsePQ2eQTUpNEWrpBQw2G5SiSHx5kemboueMZYXxGoCKxjday7EzJ4Dt",
  "key7": "2i6uVpijfpRzAkdf5zrtRSsPbeMA4JviG1CrjYBaBmwRFLGSsqia4pwb6P59PnxU9Dh5tkyLovSHMzoXxnEh6pDm",
  "key8": "47jmjXCuWHuv16ZvAeF6wLDvPkHdHHBAty8AzD2yC9wKtgKCj3HRiYGyBoGjAUChEf2roY6PYLLbyLcohugtzw9q",
  "key9": "32djJaiHWW4LQkapQABVKzPJsANxDymLE6VHsz85DYMdbc2q2bVSLBnTmf3Us8g68HjxxzDjp1wJJB9PvLGMh68f",
  "key10": "2ZK8a6fm18hiQVwp5k3VLWdUZ9gFLL69zqpzi23WXY7ovk18VSbEExSMNQ4YWEqyHUZNW2KTrYt3QpHVJcDZ3Mkq",
  "key11": "57pPW1YQfSxHBFTkkkcAosDsARUK7qihUjorJ9KXyuwar2p3Pvmms3Y7neW6X5nLp3huBCQbpmFdTb6xkaRzuQ7P",
  "key12": "kH81endCAr9sqrLv7eDUC52fc6vha17mafum6enMhU7HAxAt9exXjN425mdC1APebjW1E4Ltag7fdarzCPdgJHP",
  "key13": "4Y5SR7fKe3TVTFy3h93SLBn8wqBRt5RpoLrfLA4n1Cp4pCu67rMLuHuD8omRdzLAGoxGYVgZqCydGAjXTeQsxGnq",
  "key14": "aX482UFc72EX1mc5dA5UfjMAJzoqKm8hnZbPrB3PbUZjCzzvvxAJpYWZkZ7krA42gEgPqLSSSPQo5UReCHfNxj8",
  "key15": "2c9AefL5Nn1XakqxMZwsUcZpy27nF5u9KuvM8KQya6v2cCYGhCjJc1n4JehtfpT93xT9E5VuZ2YfsYYXet5U18Lr",
  "key16": "8kyn5j1165YwdocWw9GLyH5vCWK2DTURQWwnYg9gMtXKFb91vnf7Qwi48nChtzSgmWwt4pqJ3yYsAgw7EqNKDgZ",
  "key17": "5FxNnCfpCpJBjgqViJvNgLcgv4VE2wQsrRJSqyVTR1szo5vTjNULVZwDeWv5jC4fU3wmDPM5WSZrxMpFFMm2bhkH",
  "key18": "wt8RXXGrL6KSnRhzXsoDQApd2NjXCLDk5SmK3B94iUcYyVNDGeu8382VCZRwpDBGbDjQp3cJHKADSote6XjVanP",
  "key19": "4pvRT74Zr19wRCD19HHJ3ju5V4hgzJAxV5RtYbsxhPWDgdwjcqQsEqswPCygf8Lq1qNNuFhu63ohy2SaPV2mKnWB",
  "key20": "ee6cXFBmrRPpJY6VEEpzJjtjeTTyXE4Ss3Gtcjmyonzh8kkHunybggFWE2Z1ootqQKh2KgNTr7sPu7X1bhtipCZ",
  "key21": "3GcAk1GLcBrkpYkwTJkdHrudv2mqQT2w4MQziv3w6AxQEh1DvvuCzMK6hyjmrGqcXG6n4s233ZC3sL341P8SJeT1",
  "key22": "5uGLsx9VgbUZN2Z36WrLKGJCGm9jLrGjPVvqvgHqs6s2iJYP7U68TKR1aAymnGKgvu8k4uFEUia9SWqLSmw35bBS",
  "key23": "3ZXEABG2G3JkRz1rMp844TiUHYrmpuocLjS2F28h9azomsd5UUpmBBjWqGXEA91FfjVXLwoQFfHuUu3e3iqCCzHa",
  "key24": "2xQryzqiskBdbSACvNK3cxxRdCrW2uHLqBAbhtvQWxEpGca97XoyAtZ7FFmQkixv8tExCEVjcK4akrbhoMmYp8CZ",
  "key25": "5PF5ePgPPrWeZNP7WjeMzT4CauLT9NmfD5eDPWHM4dXUa2qzmtNsFSWYmDGVYQS12hEFoYoz31AchcVUJ5dA5N3M",
  "key26": "AUVgoGhLbeKDNd3Xc5C3f1mAKVr8kc6DehR1QQMozFjCyKTguUEi14yxa7H2i91pSCHKBqK3u5p46XZB5dJAwfu",
  "key27": "2rdVRUF44TTt5w9SPkt1XS3YMCwVQYPSvkX2Jbaji2Z4rdyNo5fb6MrxdZQeV7628z5bjzCgoKH7eDy1eeg4roWM",
  "key28": "4inUdWmYpXdTkDkEcrobqyexSA3UehL4Ep97WgyomotRg6zbiRp1L29KS4GchY3qwoPvAXvzioppx5WtqxZYTkgN",
  "key29": "2xzYQC58YvFR2XndSowXfAYKebii9q8FNds4GP6tmPW9KhTRbF6Cww44VtiJYEeKhxJVu1rsQKDMdeRT6EwJLCgJ",
  "key30": "4hMFLy7YWUQScQ5sFHBZxx1hVXDvJQBUkeSNS5mTYNDLeVRKawZQ8kuX5W9xdg8RGS47sy3aZigMUf6kpgUfLxGj",
  "key31": "47uojzVGZLKh5svtb9Y7yJNa1nH58Q4sX32feKTexYW2678UFeUieN5p9biRhtwGzgk6oKHGABS27M6iLABfk3NH",
  "key32": "616hhV1tTNiBuKgcKecCm9apt3aFKto4iKBTgdLnni1urYQFunHrjVZ7qjRH1VoBgFST7q81saenKkVPTBNLsKBs",
  "key33": "3qV561vY6jKqTJkdH5mMmooC5aikwnDZT15CxkffUtZfqHRhkQ9LQoFpEkKRG78ueeDwDUbmppSTTnK9VS12u2Zv",
  "key34": "5ptKVqH5V4z2JPzeGDXZaTA9k9V16GK4bRon3UspGQ5KyycbzDkEW62A9GHfzfd3XPJWZY9yqV2kmHinZUXeUrCd",
  "key35": "31MeM7aAjriUJpmgCq7gNmukfXjFn5ST7Tzhnu3efgqRMhemfyxPMnSMiMTzuHVNwCGRmSW4cUfZbSZTeaM7dXP4",
  "key36": "67QVHKeB5Fqwrg58vWaRZYJYcVuWNfX2UvpTgT5zwnKws4NtDtCJCsanrFeGqBEAf6Jfds3ardj6SkVbGoouCK1C",
  "key37": "3KthDrR5VmHzoLE1jZDpS3SZYaJ2VoGE8GLYD1JRXGFPAPipGpRqy88atQMv3DbY9RCdg2GAbxZLTMkGMkjs5Uyw",
  "key38": "5LJgyetdTnRB8hUZyNmSUfCPGRcAtYG9aR6c4TA4EDZD9UZwvq1WYuHfrsEb7kWHnquNEeAEBTBRS1wa5bRqLAbt",
  "key39": "oW7cxrFMRx2SerBSaoundXvtmCDp4HUvv2Snde86UcU4QKwdGc5EKfU9yeEzCmn3r7izMJ7SdFPqqQnTygVP8D2",
  "key40": "43jqAsQRucvkwjKWmmnxY1hGaPs2zUwyrah4QBiRz43SZiH4pcjhiHUfz6LuhMMgpyqGjGuZbQSTNanmMDx8RdQ",
  "key41": "3PSZQiNpTzAi6QBTzuirzpqffq8iJB7KKff9QECoe8j6EiUX3XUbVjDdYNi26KPzDq2JMjtouyppvA5fcriijvoL",
  "key42": "5BDnbPdwwKqRBavzpGi1JA4KewJZd3CwXfY8rc8omosUwj9DG72zG5K77FRF8vz5jgk4Pjq8zgCubC7LmUWQas5x",
  "key43": "PtX9JRVifFYxu3MKmPjiuXujBJojRBsi21KQDmhMWLRNvepUytZDenSriQ9jgfMS3D6hFNyYhqMz13CsFBzXZqQ",
  "key44": "27eBY1ghpCzXUgBDcm9oUzvkePFU12EGcC5ML6omE48pthnQHdJXnkFJb6Pp9Hewx5RHnQuM5GxKGXVqUEfTmoxJ",
  "key45": "3Wk1LZgcjWc2NAo3X57vLejQLQzx2uYYrYmqC9b12Jb919tzffvCQj5ALa6ijqKhTG4PSEwfhJsvLQur8u9GLgza",
  "key46": "1Mn1gR7Gad8PXGe3phtCYmmLLWt41Z1c3uPfjoH2rHVTkv8oG8W7XxBSKR1aKc8DFRiySTc3TAjRpVRmm14CLyk",
  "key47": "3UbJu3LjazKzfUMmcxYSw7SLEGjXYkCRz1je2U6zu7B2WfdkRJdTyLYTNcjN9VBXftoAeifU3UtUorfdCkKFMi5N",
  "key48": "BDbUJq9Bo2TqAYyvz7KAikbqfiptPrYG1SHcVppk6bU2MXA4gKWjFFptjzB9bXsHWvzDYDKJ2DQ9djnb7UqWdai"
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
