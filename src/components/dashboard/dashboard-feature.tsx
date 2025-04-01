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
    "3VMA7rvcyPA8w8NqtjKifkptdz71kE9ApfwWyNJPEvpyzv44sZbeqnPpEKaCeGry8BfBtMNCSbAtRgMyNPX3N2K6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258TANda2D2BWGgk7AERJnKrpqURKiEn3Ty24RWgJpdsnLYzWM9uCChH5ZkfAR4dFiBGnEMNGv1QPReiJh5PMJ4P",
  "key1": "25travPbtsA7UhEJNExPW4ZVKqzMEXRaP5ftkMURpQjRbjNkuy4ywUz1YFLYGF5XXG1MqGSW41npUP1hjEt6njji",
  "key2": "3D5Afj9wvB8UN2HD3VVr6QtvM6U19KKgbQmBn2WVpKM7Fb4jaewZ9AEBkpeqP3QZ4WaF2Z4YjhkdDjSnHTfPQWYV",
  "key3": "duHWG26Z8qHLDwTWpXtSzr76gJygWyw7X5Q21PiBo2YSRUzDrcmn2GyNs96zTW2XeoPeDedqSSyAyFQ7LzW4YXk",
  "key4": "SLB2rRCebgVr1JPGzpDt5qnNR4CkUsHWqh8evh92n24JqavsoV8oEhWg6E9rzFNsvKQPZk1dNWVVJPwG8p4EFfx",
  "key5": "4CESPSd2Scb8XdL8XBf4WMN9dGvLKm56rBPYGQL1p2MQErNjSec6niwssvZFt5htNGy4qPQREkdFHxHqdncVvL5w",
  "key6": "xTRfHCd8a4A24WvXpnS2yz4oq6WNUkvMN88SS2eSoQGkUgZY9ULrDP8bWLz3v3yLBK3Uxxj2HVVhCAiwpPFyVJN",
  "key7": "5WmoAYeecWU2etw9DLaA4VLrH9qvhd6fUgNsbvgMVNd6n7aGzym7aN51Ng7iazHpwJYFJai4DSM5otTdhgb7XCoe",
  "key8": "twYSnE3n2xiTMeWd5hh8tBNQP3UicRkScKRxJrimCr26u5rKyxwHv76zErexVuvC5nSYa8KBpfP2BmtDayCbmP9",
  "key9": "3XtUe12xMWA2McKSUop3he12qkbFfbjse81ijf4kHAyLEFMFmouWYno4gRmXmkmAjkxhcrzZ2qx17iR8rb8m4kG7",
  "key10": "63miFcPayNEpxxTSxCuEiYGrnkvfGqn21s8P26w7mfKPGqSFuwNQzeR3bmuC4A3zyvczqnFKvyT3e39o6kctrosW",
  "key11": "nRMmYEo3s2cYKgknZCaY84PveeecY13hKXFz72eoVm2ojbtbo7jaR813e9w4xyb3xkwEzh3Jz4aRupja9aoErDU",
  "key12": "4e1KkTEeVtLVEE38p7oKBhF7Etxk9q9FzbjfrgqmaKZw99GPHAd7KQwYb9Zghvfdu8mWC7FBfzkSU5jkQKh5frkm",
  "key13": "5wDdvCS25MnYeYw7brJmCFyxYfNRRkb7cMZqzkhycKhD7UpmTsH9avAyBAa4tdijEZcazef2WTCSvWdNdV6d1XQs",
  "key14": "5WAooSZoWbr7TeucLqW4gneeKKXymnSBE4AAsKCdkk51neLFwj6HFwbeKjLvCaFTuVmQfjbFNwb6tmXekgdLG1qa",
  "key15": "37ueENADduAAfihzeEhS5S6PSvHTLtB4eSeQXURTWrJ9JP2GLi1wJjuHE7gpoGoghXiNxmp62FoyUspwozCZTCrG",
  "key16": "3Er1ans4zG1374tBYfreHUPrgsEkWjoL8XsgSpjbEyyJUpdCWknkVNdXC2vbrSLngpSrxVKENH5aymj8EhGWMqv1",
  "key17": "4VR4Eaw4Eey2HkhsevDwqEp882tBeXSXEJ543AcoHNeLBKGCVVurqZFCSChqncXKVDUCpRb6H6WfLLWvatigFx9X",
  "key18": "hrm87Bzh4vatCM1JjA6MhAqniJdzwsaBmf4ek5Rj3gzfTUUrFUAbm5yXaZicHt4i4hyKwLongs7XY4EcZSisZnK",
  "key19": "2nV2jLNiosTiFaEsC8QNsggkBu2G5HuopwN2f5zHAA7CgtKzQnLxZk6BSbf7z8kWUMc7m7h3JQibtACid2Hj1sBz",
  "key20": "4YcG91Ko3kZGLUNvoRbAUKdBFh5768qDo1dfJzndRyPARKYps3ogJVfYPuFxn8NyYTB29H7jsKjZaDGUrcsP7HNJ",
  "key21": "GnkRZsbsCR4WqQabPJa4joo8ocgJyhoMWGB2tXtf2zWEyqFRVDV2htCTpecPpe8e92Gr9KUSgkRDbztx55D8qYN",
  "key22": "4LWqWEXmSu9HgPmczkqNBWeYs2Xy4bCpFvY5hLWKQU54MQLcnHXZ8MAZr8hBhymNqwdjr12PQUFBNpJ15JVLSqDZ",
  "key23": "MgWcL8fyTNaKLB4BiQ3wwZv3KUUHoMWrycWMBtwp4EvkfQUsv5xR6QvUcbiysyv191gCtuew7zjbMD5BHwAdzce",
  "key24": "33VTsKFZzBZFE1dzwttUpznqxYrsPDM3iVPUXvLmnkjUXUGe85QiXpEMjcorouG1KHf11jGaM6WXdR4ZRE71VsEU",
  "key25": "64o1FpER9YiMnHpiWAzcpeDcBuzVf28VxNyZdjFMRybHXDNEmqNSG13aVyHTD6KQsALVyx5YMcEbgEuK78N3KxSq",
  "key26": "KykFYgK5jMpibLHDKZtEdtNeCHyDN1grw4N8sK7xGQkk2TFdiQvTf6AXbedFry2KxJKT7GUksPKXHpWVssFHmY4",
  "key27": "5h3XEWwJhSyH3SeaVPusTnKUFZuVb8Ek16KtYmpDyY43evncp6zkeFEmnbm6Z8biF5QQHLXw1cjYmyWL4faUjg4L",
  "key28": "5PeMqYpTKtsESwGuiBPEpzKFY8gLxU2daaFLysXyTdGPW8B1uWaayoUd55o7HoGERcHDy2X6TmMCyW3E9FTWBpSc",
  "key29": "2NPmyVbf8XbBgNG67w43BY2tWvP14CdKtGhXrmAygySkgE1EcdjQCzxU8RLxLPn2yhpFKkbDYQVMv3LWN9u3NJY8",
  "key30": "45bKkyXnAnstq6mXshwu65on7CxP21vWdtnA9uVTysJMypscVdaxME5wDdjNREEPB6BxwP9e3s2Ps82TwZKHyvBV",
  "key31": "2BjDq7AF3BCsdUQVEnbRKbk1R2dV1rEtYC3zxTAUwaqEGZBH4yvpuAShv3VgsPQPznngu975Q8pzTtzgpAjAqyUt",
  "key32": "4YmT6MGH9vMAYTDx4yE88wVsPDkcRaAxvKvA1zhWjCsTyfApTPJVbnzhZzr9GnXmPGsSbDAeU6XRj5mVkmhYcyWM",
  "key33": "67XXTkbXS6MHHFM7odtBxqYSwXhbpTGfFLUorP48innoVwjV4eeopUhhSYdTHrge8un9yQpsg9ZzbRySw5ogCN5G",
  "key34": "2oJ8wXMT9BrxqJm6Qr9sdANrMPRuz9mMGbVF9tcjxiHj3MG75KDWDuan5ru8zKYWwxBXfL1CQ6YWhsesAD8E8TxW",
  "key35": "3xXLde41CkrrRjX4HRQKfTQAFtxTAyGYkf5TZAGkPBUmExyHvwVTeXGxyrdCmAXi2k7Yzz6YD5QAPpzfPGtUS6SF",
  "key36": "34jFpQja5n6mviixGyjMAHzuAgMC2s9V3CvifRMcjZdwu5atr6Zsvr9rTiz19bt2BKgG8oxze4Rs34ZV4P9eSufb",
  "key37": "2ocN9QDYRyRbHitCJAetEXgBYVfDujjbGoCMvWFMtaLCRXbMCKzKASfsGQyWWUFvnmB7yDhhDoAYE4cn32LLLRuC",
  "key38": "2jz9VHSgB3JKw8LUwZsjXT8gWAewicMy8sL6sAGZhtLBDijrQ13Sb3pRyB1AJsvutk7Y8XM9vfJ3JYovaMnBpU5Y",
  "key39": "u7FB2kfKx1ze98jcu5KCrzyur7k2honpVVGbj4t2qgQQqKzznMgbNnrjWbvGAw51T2oQR8TWUUAMPsBVRoH7ShU",
  "key40": "2CiECVV18EUpahHjFeVtdCGmHCWJjk31sZwUqd1QNJfEJgLZm83SCQxfpVJuT31vjYJD6CrRG8AEECJq5yYugiz8",
  "key41": "2j82HiLg6PFkAiQFehVUTooQ8fvcrWefYGASCA1ZRVCxALG2xmavYuKwMbo5Q97wJaAgibERSvRPojzbBLzZkgbP",
  "key42": "3HRR9zSBuLqKXVo9auQDAA1fzoEMTojX2MtWFx2r9BN5g5URohfusHpq9Ei6dfoD1UipEcb12mzE6VFznvYAChL1",
  "key43": "4GC4sHyBFSe6bNwGU85TjagYxbooEVAAs4rSLXDBhiDX4MBe7cApXFKaD6JqKMSd88ogJCWQ27R1nJfhCUGsT5qf",
  "key44": "2SHQdcMVYpxRx5UauCisFPWD5sAUz3skPKaaNTMEZEBB9SMkjur3ZYtdjyd6awhamN4TboWwtpB1wF5XQG2pp97d",
  "key45": "2e2K9vavqgUqHe29S42w2bFDQZa9iHurVEKsaJix9kF7iENWPQuakS123AHb7UmpAkQN2AG2Qjzcjyja4p49BY6G",
  "key46": "3M1wt6Kh6vNwXaCWFVPBQhas4dKy3szC7MqjB8i849NZnRokfyb1nmxSFpbbdjtTnsC7GrJnhVJRAXnBhAg47763",
  "key47": "5uEqR3dWTpVaEyzNsdnXHn5XRvejABfWnkHy8R4hWzUDBUFLgQKFaCQsA1iruzrRS5EBWjqDwPNMj9N1GDnJeAAq",
  "key48": "2fga4MhfwFZw6YR4QoaabVutQd9cBSyGEodv15278cW6bipT3XECRVHyXz5KfFSDqYmkh9rX6PbpHJEKNRK8Ns6P",
  "key49": "ptXw8LeaouL3yRDQRYoYS6kHFwrrB89fweV5nc7bp1sxo5M1xYdvrEzmHkHYrZPtAdD2YsqtCNKRd8wWg5cr69v"
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
