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
    "47qTpoiA8UCG8e7RLY6xCk2UrV1MBhgsEKhbqoYDXoouNHvE67UyJgis3r2btrJ2NeLiDnfxtgma2xEdNbGnWtCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23WmGbXpi1z3t1r3otvhY7XUAnb6DPaBVeEyjTbmxoEUExYFscpdb2X41RU9KnDgpfuasMuA2NWsUXtecDZxecCC",
  "key1": "2VczA7f4YSPcSqvrih93sgt2vCHwU9B9kR4UJQPDQQcX4avkj3Jb3RZhEF39mDHbR2J1waLHgkoxsvaQm2sHbF6y",
  "key2": "aD44jnjtdJEL2s8PnUtfxD59Fewc9Vn5PM1QBKSukU6RneQmMrEBtrVthA3gh3kT8PCWohsuqDW3BmpxgD6VgUh",
  "key3": "UXmBvpbq8gf3E8TsqbHMXAFP8hvSPEsQmLup78YR3LscuwFkvTXSd7Kb3n7wLkUZPKgXs1mWsLajwJRYFaz22xe",
  "key4": "5v3GkQ9TVD5uwm9rw6raksjSCe6RehstqLNbS2hfhiDCDx2Tuw7AFgECortGHmam6ybt5NSEjUL8Y1spguUycWFi",
  "key5": "24EL1MZchLdLZjLvrWG8t9mr1ChHHVG5ne7nsinQ1iXJR56kmcMUJxDVjc4VK6D8iZuB14UN6ieBMCctr4DzFzJn",
  "key6": "3jv98jra6W2R2DsF7h329vzMqakMZfqfHMzz3CYmjFjDeW4VLZopMwaX3tvaMbfkEY9iZgYYFPeoqpCaWNkkmVzL",
  "key7": "2uCkKLmDktN7EzZpcdjUkvmT8mDoRmqv9aHCwNiwfoYJkWoQ41nTRr5eDodGTtCj8s3FZ9hmFVtVna19aGNTutrm",
  "key8": "4bhAEFo2b8mgf1ZYbnYFppWyDJa5WmCGGeTNBd8Xivt5W5BYDoFPWsMR2PSrfNofyUygNAmX7J6s8dRunbHZJFLV",
  "key9": "3jE6uZURE8pJQVjouJYCsZb2eozHGgyKwLNDBd8qVwwLrhgE8UE7TzsyijLsfPch7o1yPgECMB49k4AEbz8cG7L2",
  "key10": "4Ng1X7sCwxgmrbBSUYE6KwiGGwziCvbzCJVt6VHKYzgz2yi3ofHZ8RvNHVrBR859eFfvTUTvyzPdPYgRJzAFMAnv",
  "key11": "4Dqhdx96viNy5kLFLuUXwNkTswMa1qNQjrGfmoCkXKwumCVc52Y9VHLfwvdeieXQ3tKGhwx7iAD2nDMgrJLYpYfD",
  "key12": "5mBGH9gsZXu569HUTGBwExFjQ2F4YLdN4KmczxufXSv3danxiVQhjdf4hkq6gGr3AkDSiB7KvGjaG7K9soNwts3h",
  "key13": "56hkAsvXy5coTTa7kknoniN1KxZGeRHHhkjpTdNEsFXpeqptNvMnoXKKobcewGnk4EpF3EY5YXCkJnpcHhchLpvn",
  "key14": "jLyDaeKnPHfb5HkLhmCduoDwgtYGcacUYxB2HqSFhJsnCTmjF22bE1h3MdD6XCKeAU6PCQDEi1SHtJm2RsXAhSH",
  "key15": "2EBcGDwZPSuvfZqr11B3gZ4ri4twX8wMdiH2Qvk5qoadzDz5UnZy3Yi3FPMG4izVJS6QE9gcFSGsLsMyw6AVXa3F",
  "key16": "5NtYycfjVfKVYjE7HZXifeRmEtPQ7fKm3veVoEYjnNyXKzQaWStt55LHm1rsgerReP2rv7Ev5wz9HWF7md9X5KZ",
  "key17": "2yopHD3GbkuPu8Tb3aSCpSNW8AXDVyZx9uhhAofKwrBy3z6dKKmXApQDYaB3aTo8buj9itfg3L86YdYQji9ANV9y",
  "key18": "2ZgMXdHzMhU8aof9rbBwrxX17xTPaRHnAFW2uYS9UzF75h3vPvpdKaaPebQX6biPj1AZKPERs9aR3dxBbzvGCJnH",
  "key19": "64w6pKHji7RcGsBC7fPFyPWLoX7tSxVMCH6swMvMwH5K9o3TQiSTobjfEjav3KyWTj1cfK3JiHAZYxggQEypFrbU",
  "key20": "3nm1Y9yrJT2pkWKyX1AqyDWjMQuBAbUiaRrvEkmAjvR47ewPwc1RsWVFCcJFMLL9UnLSXoW9gKD1SsNycSotBj9x",
  "key21": "2wd4ephHAHjzZ6e2zdVTPikyt6UkNZch3he5drWbpXKyoDca4gDKyL24JcThSJninufFPhrTmMaqfeqheKJjn1eF",
  "key22": "5JzQ49CuZUr9db84S9acRqBTteZzLUxwk4Mdf8EkL7zebohYwyTJmkP3HzYrov5fGePRuPwwEbroSbhoUGZJk3M8",
  "key23": "5fMTiqcQbSMgtQPtJqxYBUy6mbixqkXE29bipN6JBz2WrLSjh95i9ATH9sZHyrrfvvT8FZ6WBcDaaqgGPYfTzRXs",
  "key24": "2qVLZYAeimjR1kYFDbwR8GsgHUTowZ8rHm6qgGTbcci5dSBdUymEBK9hdDzQxbtfF6eJWV2EzLEugWGPGxBGGLfT",
  "key25": "5kCKeMRgoaupgsNUxAUfAZ4n8ys2DJJ2mzGZHwNdsx7fWfrQnXcmSWYQqtDHzZRbmotogYPpKneEhZHz7D6DT9Le",
  "key26": "2qZAxEaw2CyX7PCLSroKbrN2yejvuGBgr7PcfGSpaQCC2MRfXj84sPK2JYz58mAbK7cegVqZHPC5zewQ96eRtBhW",
  "key27": "5q5GD7aDXyAzXdcc7tq6dpiX6UejXvZsxkvw4xyYw5Qh7ofVQ3YNKuqCeyZ2eDJzHztjuUrqQVFN2R1Hr6YZHBKy",
  "key28": "q9VJnKfZUGcZBKWrADCT2bFx17oDRAwPPK7tk6GmPmqvapCi1XbQ3azrAfQdFGhvz43jhEiSkrbx7GiLGkt6LFd",
  "key29": "5joBauLgfFpq9zhBxmm5VXbtNXaA7jPLAcgjPnscunNjx12NWhj1heBV4TdFivcr7VUNTvJbCb877td4pzSMxVMC",
  "key30": "krMoNXXqKaYP7g7YjdLLL2sPk4MstiWGzX4r4MpSpo96syiXcqjfdJKrurwC3qrdxyHuaU83wAMDsujs2LRP3bS",
  "key31": "2PArkrR3EoG8VnKxYP2Toc3WXg5neN1epgie2mCp55y5BnjChvcZ1DmULwPUacdph43YMH7eMzWzMCC49G1QmQXy",
  "key32": "3xmacsdMRqs3UFpWcsEMK6WVp4uztFHgMcWkdNR2am9AnWBmtKpyNDhjaQxaVGYYwShMVp1U9Dcyc4yvqnPzX1Mr",
  "key33": "2whNmrHXfezcTFZRwp51R824tRKyMZBtRPHDvdVCgwjCtHyix4tTFLYpiMCSn2hEig2NwMKikWaUouaMhF2fikwT",
  "key34": "3hd15ub94izFJ42Yqbdv2oPsTreEJutKQVxQw62LMh8GqkV8z9KVf664hJj4ccq5m9Vfk3xsd1ifvXVmmrEJcLKe",
  "key35": "3LEvq9w68HwpiZfpGqfD7uSuRRKH8jVRfBoG41iDrcJSdcLQtUzx1Y5kGV9CvZ12mfRV9wMHs4ZYHp3QAtYg9DkE",
  "key36": "Mkj9zuGP1ihgP3Uv8BSKUur3WhT7UPX3NBgDjPJStmvnjNfWn7Y4DeYbAs8UM12NAgGCvVFFnRZ8NdcsiHEg73Z",
  "key37": "4b14sUpdC61gvzJw5qQ5CSP7Try9FcKM3io5Q5TpVGGbZqBGvqRMbrjXLSgyMoUp4UDPERkShSEAeMqMc5Uh8Zg7"
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
