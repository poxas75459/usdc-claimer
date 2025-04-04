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
    "2QjFEM2PbHoW8YCkoVxkKTqF8Sgdb42VqjWYSc5ZFZ8JkVz6z2bHDQ8cfnHybtUfTYZ9XUWgBJJBvUCLf4Zxx76G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pzU2FgiqVUMB2utBAW7ZLiNZvfh4KXgHPMzQmowXmrb4TmpfJN2nG5q7GMPyuuQHVwZZmbEPQjpd4sBSw18RKcf",
  "key1": "4okP6ii1831zjjwYwvtjHbAuV42x89aBsWNQuMToHPBUrFYVsFPCsxe1JjCmLQ99Jok9v8LpHWNRm4CHafRuyADP",
  "key2": "43J7AazwxsUXvMxDLmezbFHNmumcF9epyoGox77rUpKiFeaHn5v4MHLxAWUtiNQiu9Enej73XKp97sGxR8hWWTgN",
  "key3": "3nJ3AWB4PZ5gvqrwfQPq6Qe1RqsqTxZqz9eNLXwzNJA2DuJYsPY9kKaMxrd7dvL7fuRLydHKxsZt3c46W3kTfYFx",
  "key4": "4UsiV14GeKk7yardM62WCTT9tai6TvUrFDHZH2HS4atwJhmXMKmbaMhKWhFByfuDV5QfGjbbQrHajdrTtQxvuwnm",
  "key5": "rd2DtLL3DpuMi5ZxTMfjWrgANnPCjhYA7wijGhDyLhaPBwrTVEzd86PD8y8dbNoHox6AXx6f8tgfHWEjYUGwHqq",
  "key6": "3vFfV3uZn4XxsJSWr55VpuhMarX3pyCr4hgL5MmxAUptXJp6LjoJhAP4HJHTswpFgvMo1SwnvYyFD7n2zSEKc7JP",
  "key7": "3M9yCaMqyRFYErP3bVaWTPuY6g8FELiUVLEFF29d8WHtscZ6Ze855BHr1gQwU1UWgFERufqoV4sanq5hPvtpxwTi",
  "key8": "277BWVE6vcov162KdHCFsrPY9rFCLHqj6o6ScagxLcjcKG5UK7rpH2ieP5neT8qUUGUfz8Mk2YhfsayLREoTh2pm",
  "key9": "n7SxedE24VK2j1YaWx9pzs3qqmZKfALwy6NhcwfiekMbRuq8eBV2SdbdbXtKHEhmkuE8JaVwGWXTYp85e1bvALG",
  "key10": "9rgZMiavC1G7Wp2zMTsaF69XWchV94GLYut1Vi74uWCWt6whwQKFzYu2GN8QgdCZC2e2Lirn13HvG85hPPhGmP5",
  "key11": "5V69jFoEs1ZwLg6ASYNiE2TqV158H4d5RyRpmBUqQU2XXRhqNfEUre8bpvHGNQf7D5yAx5UjMDVLHrVuaL8gT6Vg",
  "key12": "4ZDETScp4MRW7CKof9ZvYcxC47rWVEx789nczdZaeLqP8kHyQkMokP9TbP3oL12Tt1Ks7QRK11jDJLn5iPf3UQYZ",
  "key13": "pDyqjvVjc3hLuRAGEtSnusTdow35uECD7WgnNbP2kSWGveEKar17CkwCRXssqN9GMcZQTUY1cCCaXxRnrs2Lmze",
  "key14": "aN4aP1hrmUYeUCc6tXuMjGxnxzoYjncCSepCSx9GfY4VWGYMaJKSY1gwuTqVWfxr9XwQq8PEjatFwWTGYQkgQjK",
  "key15": "1e4FCFNkaMApQZt3DCU37M1sJhai2sJrweeZZ8U16nTWJsAZtZawkKsKEs62SFqMYxYzGU21B3y4dVpb8GyPPK2",
  "key16": "4WZbijxjLPm17bvHbaRogGUQKXkTUjy7qSKtf4rDEvS4LQR8Z6n7nFMKrbN1UVjqRRZ4M5bdM8BAtuh4zewRVqSY",
  "key17": "5Tgz8TiRSwLy4AC42GAUPvCiaEDXZVuB8J15PkaxQ5qwfY4sWCk4fiYsUCW13LcFBjp3QkYwHqEGYjctTr9Szagu",
  "key18": "4tdccpigkLfUGUn6y46unYxod2Mb3Gory6MW1gLfkUGgvdzzxTd3MboqCZFyf7eDQgPBykQvYYnS3XQUkH7MpTQ2",
  "key19": "X7xouQeeTZ4CXQtvX3pMQNzgm769UuwL7KvLq9uetiWYrDoUnaepBZv2kqbak73tYBuXX54Q1WD1TKke4n89R7A",
  "key20": "3foeC44g2yxcqaKgn83aZrQujweG6PUHe4bciumTPMW1kJQjFCNrSqH3MxMRFhUfB1h5h4p9e56pgRbnHHRqXsKj",
  "key21": "2uPXuKLVwKAWbJjYoLT1a1476SMZTXB4ti2HSCiz9nNjxQVUgCJCXcF1T1MQRTvv9FjgfpxPbC9QH5FX3VvrB3X6",
  "key22": "5xUdtnopiMBruPtZf8BKftp6oLC19nFVQD2oGtvMvb1LQ15wEhaV9hQn5EFMush27jSGwP6Z5nLiwMoWwu5rNnXy",
  "key23": "5VP9qKqj31EDEseVKoAcxzDBA7ST4sXUNuDr6VmM3K4kEcpkqG6Nwt5mtrTYS4SoK4YJoKTfyZZswdTmPFf7WvGf",
  "key24": "pGLEoEfRWEKu29WwCPRWXK79gRYutaPKmhi7E1yS16HW817EJw9WpJj2ZM2k6x4pdYiH8r72N7xFoAHNvj625xG",
  "key25": "2xAgm25VbzEeHKLJhRzkRhg1BvHb5TAxaJp72sq47ccUrQ1w1hVDcP5rDJMSCPpDfHeqHwsM4EWbfki6gWJpxHKg",
  "key26": "aRZPwCySn7TFEY4xd9txMatyfAE1Jb9e2sXqxkyFFec3g8XncKYuvLa3AxGGDCPmm7pWhKrEp6tpUhMdBF9qmGb",
  "key27": "5j6YMYsEwUrAiZ5ckru1uo4WnePdV62nK4sz2RDLTVqs2k9GEipnB6E2nCdVPzykH2YAkjG18LqL9ug7kFF7oBTB",
  "key28": "DYyDvbwegjmyTcVPCujmLv1ourKHdwyrK9TwY1n2hJhY8Gb4CuvjAUCYjKW8dgWUjRuRbQR1oaQTNqvM2x376W7",
  "key29": "4qQecQCBmv6tt7c3x82kUKS7Tya1ihPG8gRKa4aAdWSucpLAQXkW4wKJeMyR7kXAsTZXauR4v3ekHD73QxtyxbWA",
  "key30": "5h8AsjUp1bkmNFR8VCxmoCGtWQPxAhdDu4Dmxi9zZHJT2rtBWjpRSu4E9h4qunYosCW5UmNMPSbRNsug5bVMmi4q",
  "key31": "4PDAmedJJedvoPhTLwZtc7f5Z6DE8UFh3eZ12igxiuubFNB65PQ2eyxgh6UPrCHuLBX8EthwHo48wQW7d5sg4TBq",
  "key32": "2TMDYnRJzctmDU4Jh7nNws5DvRhenZiFZ5452A4U8jsgEpVEpdL7noLgK2dbhqsVjewPQ17UQJaJf9TskQ1qrtGK",
  "key33": "458BnwzLdVthzQDnbxgdqaLHpQy4bo3PHnJN6t5oQAFmqSBhfn5wUdJQ59CZNfsmXBsyL61c7GfSR4DbApF9SdV5",
  "key34": "4ELjwEBh3ipq3Yu2sxmr6bdXkwnbLyDvQ3RY6YnHuJDUryoerjXnc6vHsZzQo7JAiL8D1Qmx9iNEesM3j5tQtxum",
  "key35": "5o8dVjn63QzjRszbwqRBzoa41uH8A9fs2xgTHgVYurbmScWUxr2sMoP2jTCn4YUsN6i2KaXiZaNT4CsrsNKnP4Jg",
  "key36": "491Ki5fcru8CChe7vBgAuFsdRnRm5BtEF3LHPxbZBhYXMfuMtjVrixUpWaPkXGQ9BEKshTA7grZbkxDNkUgf9SbW",
  "key37": "sDwrWujjNPU2UC3tmHoVNohxabPGeqjBfFxdhqxzHHDsYACwnC7UeJ7vk1Sr429z1k6jVXwHwwbHCfRyjeFJudy",
  "key38": "1Uvw4VZBZJietbyibk1cPWKCCxdLPLetGbNQ8dQjnoXBeYTHniJY73TUX6djbnXuUYXT7jBJxJ8WMrEaVsQDjwq",
  "key39": "45KW2ZHyiQRs4V29bwpDKff7PWj89m69r2kTVAUpBM46y2JbFUibddZi3dbJdFBSynxz1rijdFUYg6LnoHTZUTsy",
  "key40": "241ZUMegpYisQj4Q2TCudD3PaK6XP1pu3ENuSiiM7kcv8Y5Jcp4gSrLiQLtM6NL2VJ5T6tkjkcZDSnH3oBu9wTKc",
  "key41": "5SEbyFPiBre4SS3kZjh42xGokxdY65edn5aNfAKztXHDKDMG4uBjNbiQj3WkYCq18BfYVc18G8PtwW2goQbEX8Sp",
  "key42": "3Ruhy88mqZbPF5e66SMYsW6kybrvr1svRZJcstjjsqD8tt1iuM3QDNs1wBBsn5LnNKwT4AM53Ch5FjSGWWcvxqiB"
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
