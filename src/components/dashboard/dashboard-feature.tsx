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
    "3TXXLrigkCvWcB5GoRKuPwfohvUYRgnTVeCTuc7tvXc2s42tvMNbx8J352c5o9MN29HujSQTJkPpKGsx249o3nfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WEfH9LbqzKEaQHx7g6iwLC9ha4gB53PDoLLUjudyNdb2PoSn6XeXevF283pjTqqBX4RSkojg3z8zQ7qeJLc9wT5",
  "key1": "2Moeoi6LpzSVSteNtJf5o6gj6drkPYtn6mNFjb5fy4vTy6yEHi5rwo5oXPwtnzHQpRAW81sLXMMZoUZ4MoZvkuTA",
  "key2": "A52vU95uvdbSu2MhjRmd1WwrGFomFhJgtpyh9QCFWzQWvfxyx1r8cbr758eZjy4iTAfnmU5X3FxTmiaSnnRjahz",
  "key3": "Kjiy4jxEVWCWU13KVWPRKZKZR9YddVrnjcHFYvNHJSioHsGMN6oKGYm7q9bx6SAwALcDBbSAJkwqcCdg9MFc5tk",
  "key4": "63hugfPZ6K4quYiLfzWFFgMv9ApZQn5vo397XqeobD9D1t523QjirZW2hywkGmxDwH5rbxWVRZSf3s6ucJj9FXBD",
  "key5": "5vo6ftd553kC7vHwf5t7vssfXcBsEYWxPNpcTrAgBMFHu8Ax6AmFRKMpqvw6GxhpkeqGjqBDWCmEuYFaUzGKRUi",
  "key6": "4Xxf4uRWK1fuMHgLyV6YNjHYpoSZBWe7R3XHnZCTxJgwxSoha8LRpK5Bjx34EGAxxngA8oPodzNxa5HSwuzQqgCQ",
  "key7": "5WM88br9XRqAh3zHMEJd8V82Jadz7AWR2Z521ZZaUdDnvTfAk7of6BS73HMsyUJrjqR6HmTTsYy6s1tqUPSNHYYe",
  "key8": "xUMA7e8y7scNQHFf31ys11VzpiEWvNSFVdoV1WpLXRGZUNiXmmKp95QCjYGEnxVskPoV99eahwmyNMWzZ5QZcoD",
  "key9": "2tU1umAKJorv8ZktsQaJQrfMBHrmniW2FhTLS2oD1A55rX9zqD62BBEAPrVn79te2XST8HmtRHE5HShyp8ufcC46",
  "key10": "3KFaK575YhpwuQ62TzZEkzUJQkScfx4JMsmKsn2YTeyYzuafK5rzgpLZhcAbMQZFubWLbo9FKfmfAUrFUvDkJ9Fs",
  "key11": "5mZ5Zcj8tZxCAqCfVZbf2SeVfc9NYMXuAWhNbBJsskWhbMmBMPJY49cGaphyCc6bvUg6hygNr3BkE3ymhDuxQvVe",
  "key12": "4k96CdH1Z6pfgxWohtVAf24zwQjUo2ybrW26VNABNTfxED1kJzAmvd5y87pjJcVYjzBws9tQi8SmhLqpWnwi6qJu",
  "key13": "2guTEX7UiD8LANZjskz2X6MtqhTpdkiHdgskFEbNZcrQXRAQmzuGK3oLLMfSXrTRo9ZSGoxp7y9KXdc7jRfRXh2A",
  "key14": "2gSRg6L7XyEguy9ZdXVv5T2MAco7EdXxoJnVZizdbtMEb5BZ5pqMFG6MjDUTuHgAoFL1Jv1Nmddb5Hh8rbZEGMoT",
  "key15": "4ZY9KrznudnpkcZqm2gqSuLotGiTsspE6m5Q5K9k3HQD38BD1sG25f1UtyEFKsPsAbMfppUDLxqBH1kjtzzC3LcJ",
  "key16": "42q2uWpc6zRTMoByw3dKCfnVd1LkqoQVMJKqMRXz3uRFRPBCiRoP2aNEXpXEW6Di1X6rmPcQWyZDJHC3MaDQ3ZUa",
  "key17": "3Emeq26Bbr45HzHqMBSuLTEFqZDFS7c23zpPAk9z8f8NTo3r4zzPK5LFAhtFKfYCfN4LBoGsNdAGY2Uanu2X1vcW",
  "key18": "UHRNzfFsdspQ9f4xD978iSQsx9TRmr742HXS65RuLa2rmRihRZjBNYqEdERaoZMK9gYCPJcx8KS1cRpm6ffahLz",
  "key19": "5wGwmbFkwwGzDESmrtKxQrqaBKP37GYJQCs9vsXRTQh1SjRbtLcqb6VhgxuvCNK1Yxt2egtShCaxXQm7du1kx5L7",
  "key20": "5wKpQ4Acrv2mna41pELAeSGENZJExHkmL61ApqnJ6uN3124HJhAKMDpDa2C54oBKabaXb8vUqcLf3dUNhpqJPAd9",
  "key21": "5VH65jGD9hjLizjFAhyFBytjkjcKrdWpqxa7M7EUfEyxW74cMghxnXg3wJnofGCnwgSu2ZK779DuSKL1c7fqHnbr",
  "key22": "54HMW9tsrwz6SqjwQKHebtjtM2t72sFuXhnGBJmdAjD49joQCdZdWTHX4gK4TbTkZNba1M7oRawWq3kFDuMLxiCJ",
  "key23": "3qQhTFcDonWRnzfR1eppv1eKQkPvb4Ca6LMjBBkk3xgyyqgtFckSfF48mZDtqoq8mZaEDxDAvv9RNYTUujHCGu4z",
  "key24": "2ZQbW7gcjH2mi7pMSppqkRAKQjZzm4EGDF7JNkFT5NEDiq7UC5VCUAHuyDmieUMzBtfzASDsgrWnkVGkCGyCV6xF",
  "key25": "46r6p1RTsW5EvySaJighGx7SCnvZSYr21rar6iyTi82EgiViX3ytHX83eCeFf14UR8ntRVLAPYX8WbPckwN9aSuC",
  "key26": "4heafoTALsQixAuu3E4ePHyp61qkGNLGuxcoNe9HQoTjXx6GhgKhd42d8AoBoy7cQEqz5q47NcFvHQVXguqGFzpc",
  "key27": "593XE9GVUbRYQy1Ar3WF3uNDaX3CykTrgzus7TQpVXHpjKX7BKkydc2HpjUisGqQrY3ZJqmh2guqhMuNPkqdd2Jd",
  "key28": "bM353UEW1moUwzjcbfYfWno3qGw9hrWuG5g5E675AS3m6HvXg57Ha4t59FRkogcjqqMEmHMUEk2YDSawrkntoFc",
  "key29": "3K1fShP2HBeZJVDkopW1qYHqMjD68nEVeQarMUgagdJTk1KBXFE6UPNxoGczqeUU98dwQFN6F5x418iFacHH1sz3",
  "key30": "365d9rX2wuXPUhmbDwXVuNw1wXwsGiznABiQuVMcRpPfL7WdjGATecr6jU771VBSpLW75ymX2BLz7zib1e25uiBu",
  "key31": "2QYZ7Fd6dFoB1YxAQMtUDw8xdbSfcpiHPHFGGg3eG6AKHRqLqARRFgbSqk7eDRMp8va1gUpYPSyTpwV1m9bkdh97",
  "key32": "2SyA4qcU9XDS2PkatYqpPqSRiAdLrnXNXBanV4F6aqaCWKg5vqc2bgGmAq5qMEzEYy4Kk4VskyMNGEfEYpez32cv",
  "key33": "AzZMaGTajkvFUDmtukxcFwdiRxEox3y598bwPiGannDij5LFTofQHXPgvupqWkWE3BV2CwJKaKRpehBKNeKMeP2",
  "key34": "7NwZ9CznhPqBi9UZHXYjMuuMSehGr7uKdcwnGpvTPTzy2EKfvuJBjdAhdwNWChEE2xHRceJbdgPrTAX1A7ZdmbW",
  "key35": "Vd7jmAkHuhdzT3VkXTi66vsrHVbbBhTYapSZFnWttZnG3d2Fah3bB3gaP4noyr77BKjjWi2snvGxct7Ycj2Qebr",
  "key36": "2gSoqgqqiiKskWpcmxsq9E1rhGoh7XTSR3MCvSkXMtaVR1zs8yb8kjpnznMuz5PHxYypFzUrCu9qQjyWvVSeGuuR",
  "key37": "2SCEAk5V9N97xJVwAGQcgoyf6cG8kKoomX8mHYGCU5NghUTZWkbM6aL9TGftGmDnNX8mFCTYJvxX9h62uXtN8uCx",
  "key38": "5BWs4VFqhejcCZ8UJvmDUSzRs1FSs6yuLARgPXpjNTRq4xWjVnSxSXBrpDADDP2nEQYqqPD99oSdcRYBxw9VwJY7",
  "key39": "4BtRGhh8SrUfMhAZMAoVafbfzktnpKSvDfp7gFNSXrAi6NfnUgKNx8Lbec73PU5HrWHnGQckLDotGRo1NSDo3WB9",
  "key40": "3KZAkuR9hpWgn9GL4h7m5qFScddfR6DjfYSaUrbBpYC71KwZnJBSAupSqpDdF7tKnUaaraS5Vc2osTnTQVpjEkpR",
  "key41": "3QNr7rKmr7eKFDN3YqzwHzKGbc6dU4ZdrRsBi95Cq6txgYqL7RFCBRy2tUe1vFjkRhRn1RAqVaiFGZTSxV9pDTDs",
  "key42": "3hymZV7yNBCTygqYHCHk5GEpBZxyWFQJ9PwEgyAk2AKKQNCCELY4FVhHSUPjZQHogyu34grqiHKjr3ZNHhjsa8Rz",
  "key43": "pwU7uiCsB7vypqB9k4Q4gLSKLBqH575jBya31uF3GfHvsJcwFvrYbDSngw4Zg26wbrfawy4apzVkD2Wk9yUtJfH",
  "key44": "2bnhVxCZKk64jfTLciEbJBJ7knyvGZkBsnXTxChQk83GNfj65ejDiBSN4iaCAfGhWf6iy7xEfjCisLrKw1SSzBYh",
  "key45": "DErKEsbDNReTRRLXnRyYc9vrvSfLq7cHpsvzVSTZ2nAmxAhEKno5LKQAawoio3qREAVTQhTfG6EYiBhkCBxDnbi"
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
