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
    "28o5QHTxe5aakvomFDz75Mcaq8HHGr3NU5YoTLkjEUGNJ3kBpUXVuqKGRCgCjRzuZtUmceCpLNL1H5JSX7LV13kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AGmwUnDXDA5sqbNXpcZCtUqqndrfT2UwpNQSGXWWwakg15bu9i9oDz6Hsd6yeRCMAcbPU8mPGE3a6Khv1NwVUiV",
  "key1": "4cK1W3XZcmwxy9oMfJ2b8zhbHekM9i7EEcs24jKW4M5g1jWdgaNAq5YDsqwrggALNP336Dzzu9LbKT42wfayf79p",
  "key2": "65kU38EMcSqWL2aomu7FPEKtVV5cZgiTwufFnavNB3sEMXumbBuaqK6C9fAPWpFDYuJEwGy2fPTJVworVp4R67tZ",
  "key3": "4ACnVDvtG4e2eqXWPyDiYLHBefK2sQFqXxEbieztjTeEjRfxJSjGro8kVGhU8URDaU38qx1ayGtzAhaVP9c8F9LP",
  "key4": "8eG8xqVetzZA2ary1g8SQo31fHxsFWy7BY5MYPzqbatj86QAGhgqRsbYvUZao6HooyGgUBcfNz3w8t2VaBwhR97",
  "key5": "4Jt9N29fX2gxsKK5N3E2b2CKFiHC9K5ACPiBkMHQmW58WLHptWEmUSn8dTyBsKGGE5BKmPhgygfhVbKX7QmvDJw5",
  "key6": "2VK34bVY2kqoevbTEUDGTGkCqme2dQ16u4htSaS71L7wDboPFhUxEVGMzVbJeqcVAJgo8Jf3k2L8PdjVJ5gPvUB9",
  "key7": "6KDn2PhPovQinNPpC4wvr3H1s168nXnK99XrjNSrenVHvyXBGthRSRiwM5NcX9Suk8yq5LqCVvwcNaqzGGSvPmN",
  "key8": "3xTRMYhjJEvDBvLPaH8spSaJ7CfeF82Maym9AF6UFDGbALuQTXqRgJjcJ3szbiC2NcDPgtv8unfr2SRTjooZ4RaM",
  "key9": "3CsSoidD2gXrY8nMRp1b7hL5xWpZmVv443p1rtw1zAm8yikWXBWXpt15maDzKEYuCyj5hWgDXDi9r8DiJJQNTiKz",
  "key10": "2pG8zkvxCFxrSYBeSXmSJitatxc2BCWzUz8tvkJAw7C81cADPNHwqZ8gEtDn3tykx4JtKH9QXCVedNdCmkBDxY4J",
  "key11": "3ymm8NdmAY8esh66ojFsLbYCrbAn9qXHf7pL77cwBm2DADzUkVAW6c2NZxdXj5UToYNnar59LbwU52oKJHoqmwWC",
  "key12": "3AyAsw9MLfsbKkvFnmcHkCwen2kvf41Y6DLJ482sYpq2J3kWiJExziqmywncSJGd3NnStbeiGbwrBC1FP5M5qP3N",
  "key13": "3KX9HU1qYEGFJDA3dHumnFwKiceYoxdCH872mc2JcEB5u7qaD6DjDBcQvANf91X14ptyGymgR6YvRXeUUB3S6GnQ",
  "key14": "3R8jDnSYcmjrcfPC7bWkBgefY7j4kGosoBer98nXVsC1iEguw6d7YZkRC7RGsE17zee3qsdSfg7usGVorrrrYJje",
  "key15": "4qDjjMskKFPeDriVzSKbhcFSZigVgJSevMRZmVBXRWU3BBNybustESQA32EdRp8xqy6tLUZ3yg8RiVpFkthfHg6w",
  "key16": "sDJaMs7kLeVvdbohTTMa8s3msir92vA9zzQZ9kbYkHxEpp3jicBzM3upND2SYNK5CyHkHvnWcwk2mpNnBSBrnsE",
  "key17": "463ubGgYZNtRkjmsJa2oye3z9RmvuKf4SwYFiB5UpqNf6soTMzCCjWcySShM7PBxcYcJjvnWjLChPsdzr8AUjDi6",
  "key18": "33s9GYmN81Mhp9L3r6hKkWcBVUicEYqNgUrKdj6bdu1DjLkbB31bGuJ5rVo8i1gvYpWzELmKkQgTiN1UE3T4Yj1f",
  "key19": "5AjhbRXa1Qhfh3Pa3u7A4UkJx7CLLPmVrzLs6hFDuguMVkJkHATpPp6nn1Qen9gjzdLGcvDt9fmFheMWjYoS6gRG",
  "key20": "3MCHphBeACeQ1HH7TChc6m1VYK8ZaCKaZedKvyeQ9AEFYGSJedcCLiSGi2zw6ARTHb8mfv8pga1AYMuGytbDYZzi",
  "key21": "5MBHq4tgppAiDr7tEBFEgrbzfz1E3TenimnfRx5jWy3N6ZgowvhsQTuZecqEAWmQ7XJyvCYtjVoP9W1HsZq3LSUb",
  "key22": "34onE4R6VanUQX3b8Q7dxU991WVEPmZ6tNutPbo9MSYbdDs2b2MXDLDJZt7qUBeQEUQsRM3mSuLYmhRwH2r5gBde",
  "key23": "4N8Hsfif2ghQhRRUEBkAZe1Do7cUehgciR6mcvdE5ZUf2JJXwa9kh2enUHYrk8RwmWCUiZYX69RBGRvZv5bwcvGE",
  "key24": "54MbLXKzqK5NspGXE9gsQksjgTCpvrF6EhBxoa7pnUmFT8PJ3Tev5jr4kMGvJZWD1pdg541y8PUQC4cXLvfjSnED",
  "key25": "4Mysn32PJKrraF88uLxaRmV8Jv2zHHS6ddiP5bgfEciEf8QgcoTwqwjSerx3XBFJVYTHfzLGsPk32x1Lwrapjuek",
  "key26": "5998urkKL8o1xHHdY3NjNZbixEw5BAJKqDPYD8RVoqifAyAkm1UUmmqZhPG6itwoAEj1f4iM14TiiKyNT71KzBiZ",
  "key27": "3m5Zkg5mJpJW7peVakGvR2osfzkfbf5CvNYnWgvXoA1iha1aHMDkUKPkQQk49TeNC9ywuT5EZRNiALwq9junPp8v",
  "key28": "5Dxy8RcG7h14zEQg1Q4VgqB92F3jFtAvvgj9xhpiFRD5jzVrKzGfEQDnKSDCSGv1knZJ8YmxaeZRoSMnxcpXmFwp"
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
