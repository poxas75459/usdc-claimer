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
    "5FXUHTCAPrapQ5znY594buLrWScXrSb1goU8T7ccw7Z3WynCNhjTzA9EkXVMeXAg8hcesUW3shFkuySXNuPJZ4HL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Toeo97hY3w1RFjnEPMYsDgKo5tbaCBcDAQXTnwcEKPrh3xgAGGW9UWmuxb3PeqKc8aFLK3SCftic4u7drNR44CU",
  "key1": "2B1swKLN6oniZ8RfJmQBuPFR7DbWkKkqHqFUbtfg8heGLLH9tE1SRFkbssrbkFnpJjn7p7w52nyh648w4ZXhkZ8t",
  "key2": "3xQ6wskKb7KBpASAsHPgbq7u6DX6KoWSByeh8usUUu6F6kQU9ZPRvVbGoBNTZoebxGyPSeVwsdZDWqrwZBiWACU9",
  "key3": "3qYzJPivg4T2qMEnuimiDZxMVjGSZ6aStyW9at34Xq1XwqF5jv5QvWsTxUbtEdu4nFa8BRY82DnuBn1FnNYvj4HK",
  "key4": "4p2hNg2E6dcnkyHToUQd1ZQYFAQBBWppSNS7Udc5JQsMF8nb2p2NVVSXNugoBXaCtYZvGc4Twb4jt8YbPzznAcwz",
  "key5": "5u113yr73vzKy1Xp2yfUwGCD12eoxAd6tYwPsifKnpX4o8p87NSaHp31SLNrMviHpKQDpX3smNisCJBSRqMDe3f",
  "key6": "iyJ5atAWQZ4H3GchxCNgmbXG8UtjL2NwRX5k5YR42K3DjPdfEQMvbZU2gzoH7qaDYDPdEKSHa8R2uaz7oByAjAV",
  "key7": "5XasmVEVgC2LQriSw7jzNxSscGVGokTBLWM4f4RMnpvrMwvGWyNkTNGwkTMZiN2nhJT8Mpzu2XP4QRy5aTzFYk7d",
  "key8": "nBHhVDQk4zknd85xhLENkRtCHYZqZtznj5r85F3w2MuHQH7tCHhN1RRwMU8PuuA19AsR6mZPLm76htrB2dsY8SQ",
  "key9": "21HBEqwh3cWkRue6GbRgACkUAuhBFiZm6AucBHbYYX55wvtwUmGWyarezr4rahZQKHraHLrZb8zE4mcjgj1ZXaT7",
  "key10": "37qBVWJZfkBcXFexKUnMLK8itdkNvnZPHf4c789E4YJNFbPHXPK9huRnENTbLDTDCbJQEn6SK8ouQfj24QeRxLU7",
  "key11": "5C3ETxECaZQ4jTVn7L8AJ91T8oHjEZPagZkZe44uzDM1xZPPsuTiU2XEVPRJo89vJvBQDfJvn7bqMAk49RXhnLiN",
  "key12": "5ZJL7mmLcKAhy1ALNaxpioQGM5MN5j4dqA9x4vHT9G4iLq393nSYp33MWULB78SrbVJPMokgNcQEWWrXvBHrFwBA",
  "key13": "4eRQQ7EsdMDyW2ZdKWQH6dojYT5J788PHkTS72M8B6knC4VBnV8d9hVWxYM2MXHYiAuwodDVfXgF4AAssEGULTz7",
  "key14": "4Nm1HXMoXFMFyVWxFwm11JNioHbt19GJiDPUUkBwmLbFxU4LubicM5dBVgLZh6xArgPnAWbrdkBtLoo9nV5i6Ec7",
  "key15": "4CMRaLToRRxAFdqdNaVsLP86AAaJBmo9uCNawpxxF3qob9CQX5UWg5aaQBnoRZy96Mk6Hsp125Fw6smCxAsUcabW",
  "key16": "5xkpjcudKYkWS4F8mXZVSetU4HhMt8pBQ4QqFS2nD7NZkAXnDYjRYDHbogBBEZY96cGVd5rMgDC11e9Pu6X2vhMQ",
  "key17": "TAq8wZSQgTeoPr4Jf3J97gtHzcv92uYbkhAxTuMNEHLS6xBkZ3HdzjCh33UYDje2K6YrY5cusaFNxfdDZYbAP7N",
  "key18": "4ZrzsfCUUgSETzFyW7CwJ2tzHBDY8K2ECGYB6Z3Zt2DcXouXLqXTD9bjYQj9VZK1B46UdopDoWqRsqejZs4TpSWv",
  "key19": "5NTnAtUHuMkkEzHoYnB1W3ZfDzBhYXKEMyTkDzxFXWq66BLMGujetzAZErRFqehzERGUBWSkq1NmGZ7ij9picSQj",
  "key20": "3UGRpRbRcW7ytR13DbDWUdHTBwXNsaoGbW3fMruwdrKrsEnPoBh9xbQPHsTHnKv2RFc7MPa7Zn2Mxdd5K4Tk68b9",
  "key21": "66o1jKP41SrYk1FKAPezDFExmbbcg7A85z9Ds1hH6CwPqqPH7gshnrQEhfif6uxSbkCTs556V49hX7m4RLb1Mg3L",
  "key22": "4sV4aTvAHSLvr5eMuZPeTFWAa2qNkwxY3BkyPupixN4NMPBT1dBbHdaoXT21RnCh53dUDNPjtr2tnpvhFjrPJCRe",
  "key23": "4pJitcaCGsxkBQCwe32hE1gjPyZeETuxcFRY7vXoA8SbfTkcq7pXjDkYAjB33w6BgMiBvuM8wWgtQm1U88vAH8Wv",
  "key24": "5SaSXvqKQcTynEE1vjbWycdBy3v1wn3YCABjAyeVQye4ES3cgWYgNwaRpmzrcajxJWBkYpdfPcDUoEdfntSANyza",
  "key25": "2jCJpvJsBF4uJsCK8s6QHwEKJeZhMSzm1kjvRZLopYXnsVgKVSyn3Tb1xVuDBnAywu6mZwv9z6RVWXfEt14qknAh",
  "key26": "4F3A76cR3DtHy89sfkV4Y5davi8sjtW8YaFZKrgBY3wMWeTfZoA3pCYjXhvqrpU9X6xqt8SakR9MTuTrrGWiQikJ",
  "key27": "4dSDzkZkQj5tbhMJmDGaPvgeYQJiwqkfGw2Q7D7Szbe2b29m2ANkP4tdv2FSGfiTem4W2EzZTE2d2cvFaECNQt6j",
  "key28": "2Ssuj6tZnFtJshdPnuJc9zdLac9QhMS5bCtRJqKSNZqn7mzw4EVqSeivZXYH5ezgDGoLRiixC53fch8ueVdnZ2Dm",
  "key29": "45Y2KPnQsnCG6GzJY4bXQBPMb8Y9vp5U3rJ1c8oQ5nR8AfSpRgLkSPBMSAXVfSJEioveVmAkoLjNrVVnE1WNumQm",
  "key30": "1Qc51DXJk7xDc4UgLcn1suN8dwnDiTviQTpNvobukCh3Xn4T7BBvD2y3jFuMqztL6pb1YfpRVLbmFEkbyKQGQZ3",
  "key31": "4qbEBHyffREqypySTHAmvFTZgPNVrAGR6z5CN1K5YjKxF8Euq4r5EMmwSSdiefnmyhV98oy8Li2nUtyfyyLxAkFQ",
  "key32": "5oPBLcJJLTsZThgG6a48QJmP3PvS8EmNMN1wxeHdDRKYFDaZ2mtWEGVt1JBJiqv3Q5VDD49f1tm6FmwKhL9yqPg4",
  "key33": "43FbfsdCkkbJ9XPHaFbHhqC8F8K8aaYipTejxzpDkQsMd8K2hStQFBbt2GptqQbZhTeiKMRSKTSUdGErrZDgvokt",
  "key34": "2wHd7XnCSwf4H1x1sKGp3VKXfLF8kUbpzYsMPuoys8ntDij4acrgV2PcVfiLDVXyp14WrNdfLWN4rQwjUTULCxot",
  "key35": "5JyrST7nD6CVWii1WBcEa3ZEJPLcam9DcvY9umhGyrt7ZQBHkrFf8rkDzeaz4Su2jvcpzsqr7pHnuVDoEZhoXZwd",
  "key36": "354dCEv8ztQMLFwkUzPujoofgoiEkYgsEiwShWWHvCGGBx3X554aVp8yDnw4vjzP5jhUsoUq2DX72VpSYy71fGRv",
  "key37": "2vXRZRSreE8C5qgxTSJpeHzx6ZZmQLbaUFCHphYfjxKSaE1rZapZrSADsjGPEXQvJkKhuxpzgp3HcHxsdbfR6aiG",
  "key38": "4VdR9xsLzU4VMB2e515VzBEcDmczeq877xMUZiSoJYskCBEKkjGfffxLrN7xanbxdGoyUfpRrhcbkJ4XMfRs6Er"
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
