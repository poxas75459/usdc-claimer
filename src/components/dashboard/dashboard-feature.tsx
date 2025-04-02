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
    "vgcsKiBVW9h9YQLviFGuRyW8AoJJSemA24Tepn1hLTQrXXDDw7mXUdmWAtW2zTNDLMV2ZjGiFCquZyXqeecztWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RynetNEhLrD2nwmtBqTrGe5Kr1WP3Fj445jB1WfMYPfzTsMZww6b8AE43ZmyzKkfAvtTVjVWTZkNffFtpzo7j2",
  "key1": "54CPZzm5mJuCBbTWMbdEcTaLQ86w7sJEGmcZ8GjGJSP9bbJNZBPzqC9Con7NtTV3uF1AuxEMbGTw23hbFj9eFEUW",
  "key2": "3WC4ae6izfVdSCkkwzYDrYwf2uZ5wmtPrVKE3gUG24mpXwGSc64oynhGpnQpXEpmVN5dMfgPHM66xQgJR7MpzaJq",
  "key3": "42PM4QBBiS52fmHtFxs7nVNm4WK8WU43mnEXZUjnyKgdbi4kKviSjdHyNNWpCdXyCpPVeGQxyWd1Jdm2x4TKoBvA",
  "key4": "mx5SkarqiaticF24SjGxLjbteCDbhxrAAobDakRAo8jvmbiXNhLzFftZ2MwnDHtrEMyoEzsZQZ8T4jDUE2u97M3",
  "key5": "3FbZiin8BDjsiAZQjtQ5DYPnCiWXxAQ2kct3QmCx5sCU7neu2Qsbtt9ijrGqshK31VPMZ8oaxW8iei1pLp1v3j7f",
  "key6": "uAiUFUn1nzxw4Tvqrq8hLAkRFB3fRCA2LNh54THYXUcgDme5Uv2qYLje7DWueS2dKUxEN7p8pmDEn8K4HsnRtFm",
  "key7": "aKGdcopw22K8tqPUCoGddqMPsLAk9LEJx5BMc4PPoECthF4jZ51ApwQ4hrUKmrjLYY66XT76NfGJHHzx4SVxLJd",
  "key8": "496FnDDSDEQrsMqnMwy1VbWYzxZtgsna7JMuDPE7BCz452jjZWjcUTkJ7bMKqjoPBgyFeiyuvgnVm98aiveiqxg3",
  "key9": "WXHcnESxL5MQWz8u4TtRyFBc5UDoaW3dV9xNfCyVBAYZK1BhQ8wwi8ZAA4URFsVy3wVahrRXVzmHrq7qTpQBiHX",
  "key10": "2dTAUFKDHiCigM9vEZz6AQCFrXqm1Tkic7njEmzDYATDwSVjMphQPMRX5qhL8phPA54gnAMd8ECh6nLMPTswoNrn",
  "key11": "4DeGQ7yQL9VN1B1HjUEeaPdqQZATndUSrZo2rRkrznF6Kshwh2hGKrfs66fp5BHHNW9msjif2EEAWF9Errw1cc7n",
  "key12": "LCH6oPmjwgz76NxMEYEaMcSb67rMojzJtyi96LVuMesX9chMZaZ8ZEJRLHcaqd6gNRaxbHbnSDN5RyNganWTPb7",
  "key13": "5pXtE43sCo3u7HozPH5MGdzrozYHouor4cQWYpkTBuv8ebksGoX5Q4dyh3vFQnUgPRq514mkz3yneaGJEqWHajfg",
  "key14": "53KwfJuKZzeAAyajWuexirtWttceZvQeyf8jB1VEn5oxhjYA1tciHvh6pbt3cUQRR68L8QzyLt9UdkvT5KyfvPHS",
  "key15": "3uSBemnub5LuMnNysB1KSzsi3d4dwvpuCF4MEz7r7e54movQaMxiT79UJooLW7E5dmSdiwLXh7RBhCaS5gsUZ3y1",
  "key16": "5e6dGnoYzpAtf3qqj16HNurpLxZ12zJRBa8ib8WjzKRs4xRBjKAtxZAW5qeT7n1QrvoQSUEfyLgRVmogMGi65KmQ",
  "key17": "2QzoUcB8zqwqBcbd5y4BcjttcwynyQNY64cXHpa2wRipK8RCjprjqr73zKpJm68i2Jsz3NjEmi4LadJEwqW7ydhX",
  "key18": "3LU2mMfy8w8VxDqcEGj2BdVSMHXNkhVa8MtPnbd317bGgipb3AmgSJBoDHdQnQLhyvQtLxzHGm97oQs5mAibonSp",
  "key19": "25KDkL7EZS1MW4qqqrKJkesKtoR4rKXMEnPeG575qd7TpJw3CBBZ4v6BG5N2boJc1oGsZSsQHyEqPsfqAMQLnMbR",
  "key20": "2xmBhHNLUrztJDmx5dZQ2UceXMwqFo3Nstn7MTeswVCEiTRV65C68XTixy1AgxDawPvjyCSQmXqoTJgMELfDoq3v",
  "key21": "2P4HtMew8VhzEQTfKft2ziYBTdVMEz15mpGkThr2XtnTt9N1tf9UJzPE5f3z9hE8ssLgyBHC3mbpiriWmBSfUPTw",
  "key22": "2cyNu1SUQnGFjxkXiu2pYXQJFhvFiCV7FRbayhpduwtqbitoRK6CW9HEtaMvEnD2TJtb7diVb1YLboHgsiWdwBbA",
  "key23": "4vBTGPk6MdvLHiSM1vSNFTCkSzU6m8bJZBYxoFdvbfJEJ58suErRHLwqtUW2PtJcNrRNi3FautyoERZ3GwMK3CUi",
  "key24": "4yo1NMLm21BdyX2bvAsaLWjeZtR2QuYfZ4f76KpkYYFS2q233UxxkagCB2Mao3ELVxzWjHisHGJP9yd2LNLmEhHM",
  "key25": "jgufT5AFcY7gHsM3AMohMv8kEUoJS12PuZAMG59sZWRjLQxAQVsSsU9xvdQyhSEm8ZVvUXCCA5RhhT597fZ1NwU",
  "key26": "3rS8xCMLh3pwhEaZYqLGkUh6BmEBzmp9zGMgjR6C3mzn1CapuCFWMK5FyBWQzFTekjTkXjaHwSaFZVt9p4Ht1zij",
  "key27": "QEeTyfpVALGPUhMx5oiLMaHmwwUbDnFA7aYBcg5MiSNYkkZAuz1ZLaGK27oHNvC1SERA1BC9TrekHTcArX2vbyv",
  "key28": "5DrN5fwnEA9wKbhHbaokkFxgDPbi6mvNVydH4K2aGvjxVtBUS8Z5pMfC6g86f5fudCuDFn26ih2iAEyd4Hmu1XCD",
  "key29": "2iXx6jz7rcFpJjhBfosyuucfh4Tz8hqJYhzhxmYVv3NN2DthpwA5DK3ngUbf4avFiLwaZt9q3V7izpjZuYuBC4W3",
  "key30": "4pydvpKniAXkHEiXaXFXSyMxxgx6Ei5nGWKyGme3BeMkgSLJNqMoLxL7iW7n9emno1MESWSZpG77oarfMx2bhtQ9",
  "key31": "5sWcro6ZGdeqqFzSFviAvxT7NReTimq49WQMMbCM8w8Hmz8jPH9GhQYidKr3U3RDmPUVzcuEvbuWaCjM7YvCiqJS",
  "key32": "2CYAkBpKeQVjJmZuYWc2TDcRHmKCx5oiN3G9d4MpsytbiRnyDLT1Z9e4FXv6omT9daEEnBtU2c6pSydNG4edphEw",
  "key33": "5r2L11ZF8Pxt3GAUhwoExqgWKW987MAPeqeiVySJcFrRjjwcF6sBmgMFM9AsAZFsKsqkhNLqkdnFaLL3756h6GhD",
  "key34": "ZgEVDgCYt3GeRhcfz82wibPWK6ksVVqQ7EaKE42eEE3rU4GTeqbi3h7qwPborNuvPEFnNGi4k3h38SPw6Cz51Mg",
  "key35": "4qCbSazhA5BiJgBftTuEiRFsZMQi5DpMwF1pdeScFophSRUMzemHYrTW7nMTg83sLYAEQUMu6UekHjeQHR3WCQRw"
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
