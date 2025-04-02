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
    "5GYcNakNJkB9jEfPPb2V44CAhkEAKqMYenwCaRyYTMus73xH6Nnzr6mo1fPVVVvBt9ocjmFxhAwMSu6yaF7PBa7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bHGsyWsVpM6SFPRN35TMcTBisQMv4XWyg8TRuKUzBfkeFniMnTwww4ipsEntYGiHzJMC241LTwtcFtkAPF65uD7",
  "key1": "3Qx9oGStN3KBwBgsNxY9BF5fiC9ieA98Hya4wJvwfUgHf3hesaZbN1ehU3URZs3HEtv2ciof9Fpx2JG8XQbdHs9S",
  "key2": "2U8CokdaLQj2Re2t6P21k2nnVTDF2spG6oxn3FparKx5cAUPokJu94jTh6dxEv3sXamBvuS58jisDGDhsHezoydw",
  "key3": "2DdrnNnR3zRiJsu3yNKRPVK1vkxzYWHgVERadNKNQWuRKH7ssKTdWo8bMd9mpPLkWpj1V92H3CJCAM9kiFTsnxsJ",
  "key4": "5P91mbraXni4qEuzBr6AEoVLkDs3TApbyAV4Q1ZyQssj5RYZcJPKNTNp365d8KjqNXUMubPfoa4umgjabwnzd4KD",
  "key5": "42Fq71UtXyk9wmvCDgYvDGQiJvyYHvQeDzeGCXaTyyJAuj4WkE8ind1fwnrEj8W1dVrZNpUG8UQLHgj4NiL3ajha",
  "key6": "2tFfUVadEEaws9ASoCaVmAnHSwTjEAf2civajrAnNc88b772pd6dvSjDvvyWJAcFdAw8s7eR1LfMqQJDbTtgkP1L",
  "key7": "3iVM8mrV6i8oWjX9YMuecK4scxmGPVHQ8UWUkecn3jkKqw367Wyaz352wb4e26PSNJkzqBYP2EXNxPyBNh9eyfxh",
  "key8": "2LUFV5YCggWjCGEEjkjsBWHeCYF26ypM7BW29MQQiwoGt3H4j3TkgUYDf9Zt4HKGLDhaSTZmKQCRHniZ4C3udtdj",
  "key9": "2zXbbuSKB2Er9572EhPif73vAsZkUZYJD4gMyS47Ec1Se8H8MKx1AXNXRyVsNTxMjrUn8LCg7QLPwXvtQwy3PjBL",
  "key10": "3XopDYoJr1Y4fAj65KtmEaAWtDwVJz3gyFsGsFuTSWTd4HWx7xqYKH1jbQpi9kcZmgD5y5BxKh6E9f3q49gmFP4X",
  "key11": "2DZHMfmxGnGKqsFqeM38E26o1GuKtr6ZCvB3w4DcEhwR2FpHrvRAByHtC1dnU4cMeorvnUTc7Fz3yLRiD3r4JuXM",
  "key12": "5mPprKRn1yULgqGxCZiZ4wBn6MFLbq6DwmL4mHdCvWtF7nQm2kXVDfsuFStggNJBNd9wfSgK91xT9uphRtj7ayme",
  "key13": "GdEPLTgxn3zLVXV9eMYBtrmcTeTb525NsFABADHaN8pwXxjVLSU8Ko5gKktjNmMps3e7XGvE5nh4cczYMD98T9s",
  "key14": "3dX11ar3KirQF2SGK187iymir8HuiunKmu5wYsWewJZAnBSsJ8NtLquDGbGtLXueKdvjQW1Tkffek7XMh1ddvFxd",
  "key15": "2xRHkPWuS8ShzArAnRf53fsYaQDUpzK34DaNPKHVKo1cFofwucpLDGhMJaDHn5yVELcYFH6Nd8QhG3kuQZCmMGEu",
  "key16": "2vGXXsVKayYMZDUAvJtY1DsYji8iooEFccpXx1JtuQYHKh7KT7ux3mt9ohZaVTRFFMHw9Ve3KXXwQsHFjbkQjjW",
  "key17": "tykK8Tnc1ZUuR8NT55EtyewQ3ndBosNBbftapzpjHkoqYz9sZPQjJ7sJUGiPVBMkTGEyLBEBjjGUAUiiw7f5FPE",
  "key18": "5moiKyZxGw3vFzY1rxFRoHLmZriNpa65sxcggys5E53bVgVDUZEbkbXt3ikQrb9rxcDA2tXRC1Ph9Rv7ToME3zxE",
  "key19": "aXZizvrRnTtXyhrs691PWACRs6aYzH29eaNf5Dqt8Ep1LTXRYoDXMRZkbq28jC8qY8Qx1AQD4NeSmr4n9VgkzCF",
  "key20": "2Vyhp3eKaxDaK3GPcc5YAENmVrKECb1VBsQDaz4Bq47EKvMUPQFpc4jjJCz6Xf4uf5M3FCh6zjY8ntjyKxAon5Hm",
  "key21": "YVPfJAoEriPgakA4QvBBBVETh8B7zoTbp3cSBPG6EZ3TUvSG1zcYoyPcUg7Xf9vJZP7K8cpNR36CrFoTjdUFtKQ",
  "key22": "5bHfPCZGhv52VoqwpSZw7khZWjVikhQ6pE7pvJR348mEfs4ZbJW4JiiK6g8SKd1ubpZxhLDJQt4m4BLboXpm6Z3k",
  "key23": "7fVd7c2LxeoJmMuqmmpAkWc8X7KrbqUSdbW6ur1WmdLvEoV6wk2QTp1Zct95T2mGqTU9e29hTpsHuNtNE7rbhce",
  "key24": "GY7sk8MeoM3dHuNfn3LrbS1PkBPKWCpuqmN2QXE9G4iz5HuMDPnkzbHdyxFkdJmaY3qcqmM1fX9UqRFVuVeAQpA",
  "key25": "32HKux2G4CaavR6bD3qEFAY5DevTXEiYQg3iw17oBCg1GaTwXHB6KZ8qaY1iDZCuBvaWpGCmrCxTgDBnnQHvqefG",
  "key26": "QoPx9ofDaUKzGjYQkty5MaNgZ1LGH31jy6CN9L4fyL4JH7eNTQGCwUrbkxJsJM9uZijTK3wge6yPKgC9QqTt4kw",
  "key27": "2qeUpkEtLhtrBNX26UQir6iQcBU1HvKirgCu1sJyQDQX2gHC2UEL8ntDwCM1xZJhy1qAhqvGMYWyBd4oxgfHdsSk",
  "key28": "2wFL1Um6TLjiViX2Q2sQoGbLDpXv4ySatTUZ5q5mHjrmiAYPNwpWrUmeYbxdg8rfPEhDSeeTmy7enHaouiS6kWi",
  "key29": "W5oHchefRFsHyHNBaHBaKKVybRo6NCykuJjiGibgLbH9SYhrcHXiAgujnvZQ5GqNesrt2b78xGTzWaq2TZFntDp",
  "key30": "4YdaipkTKL4fV6gxGd4VUwCqrRdYy3CeKUEdetUnQsjmaPkjb26FRrG3YDduM8UrfyCazHzrSjQ5ayk31K4DCPXi",
  "key31": "4grkriMT2PA4squEfnChm66PvgitGat3451P8oecqjoPPZvFeSJs4d5cTXdXbJpoBziZnfhGJKsozfjRouWsEzt8",
  "key32": "43LQbzWEQxv45bxdKhNSC8JU2sPN5FzjLoCcQZCrXtSXGFbrKptEw7fza2VEfPvmkUkUxnQtkUzEWxt9AqPfQmDn",
  "key33": "3ydTgcV3nbJUH92wMZHHh1RWyXUx6k4iFWZZuggborKmNqVHhnkHEwhy5REV1QdKSKVGBwkvnLWAkaT5hNKeEG4A",
  "key34": "44DZkRGdrbyhWVkTgCPjqjcW1NqmXwEqTeeCVK6NqJxTdKs1i2RiAUWYb66Phz3Z2BqX7QLh3pYpVVM8kDPLW5K2",
  "key35": "4Pn9vSvQizr7VQe4vG8aXsBB3P4TrbkfLyeHkGUKetk2EEGJi5CyhtUjDhXvjBWBJ74FrERbC5fiAMbLgZoQwoyb",
  "key36": "z7ZkKLwYkTpgtdAC6YQDVnhRRdsVNj5NEzdroMe5haBXchfrAJwZMMvfCKQqi4VGVYpHgcQheHeseJbMSJf9Qts",
  "key37": "3wpeSoB2UbomwVLtfXBSeuCcjkSQVeUVQ2WXTPE7znqdvScMpo7enxvgS7tUPVsrGMb6Cg8P82nb2qCdMiuYHWBq",
  "key38": "yFpqSrYVxtS5KSovNthgzWPmnFSTTT7Qk8AsPq3P2kxJ5hpzyKUrBFQH56dM4eZPGji3MyDFs9MKxUk6moZez54",
  "key39": "4fiQZN2av5hXJDEN5M1dbYdSCxK5PkQ9ehoMJPG8uEDCQPFoHQaGW1YgSB8CfcM7KXf1dF6uAiDUkNwzzQENuEfW",
  "key40": "3kRgDQTFR3sHdueFhimouYh8CruuwV9RJYuWnUfEfUUWB6NWneDtLSCWuiN1cRiD2pz9SSjDEggfvtyXShUcCtmA",
  "key41": "33sNGGEtVKGZ4p3H8BoR6HEcAtW5sfs9sscadi7GSRLjHCr89UENyLqVsAGxsdRBGcA1BcEDek9ZscTZv2jr3WBJ",
  "key42": "577pG1AsX8Bmoe4VWGtXs9tmqSCU3wWznAWMWevp35Urf8S9KkDLecW5udC4GeYJ1DiPF6fypZ5anEBhYJrbWMNR",
  "key43": "4WDbptG2CSar7WvE2ddyF72GajKeDNz2DHtPpu56xMbJdAJC2Xgy428wGcXdZQ3fmHYBfgoQj7JRuh9v13WD1ntp",
  "key44": "r78uJMyQMBZnK2vibAA8Bn4TLqAkceciCC29nDEfgAQz4YzXUkraBxaCjMzXz98Cwo27AMCH4u9eMzrV8fqimMv",
  "key45": "4j91qEgfUxRaGztNPjTnBHha1LYUZnQsrRmPmL1ZLbMK3LePxbCyG5N3CNr9FEmRNJrh9bJ1cfhwmsR77MFymVai",
  "key46": "273Wga4DAgMWiqWDi14mdaGQnf8g9i7T3vJbad8SmiJehvzEhHnvYYJJQefgUnCMKfttf2yTsBLweVRQDoMhBoeR",
  "key47": "2WATFnvtx8TrZDdhqnPhweWpRNGYWHhF3V6JobMFCC3NoWPZftL7yMZw7bmpqkWTLD8oejfn1n7f2o7LPu59xu14",
  "key48": "5Hbb73yXNRqc5H6dgnk5iVKjmGNNFmhdWkWdwzMspoPDjuiLAMvhqodyjbU36z2H2G2RvSU2r4abQdNVfjzZQKSa",
  "key49": "vxPh7T34r2zXJG7A5CMSXvnMWNM6NqCyivu3Qh8CVzib7Uxnpk9bmQonmYKAMd1iTzXYDiEyVnQQbNLi4qBu39j"
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
