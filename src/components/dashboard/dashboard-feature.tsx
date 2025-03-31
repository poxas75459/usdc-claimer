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
    "4nw2tbFNKHAdDfTAFujqWyAuiwQqpSADwME9TptYfgtwDp6Fxyb3NHYouh33viPtQZJekgFsr3ghxy3sFR14qSQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YWfxEiekqpVUN3WyWShHDE4uMfaugEmGc4HxAiVJhZV9NYomY69y62a59QriDsYUHBegBQGzdi4TnkjA99Kx5w9",
  "key1": "5kPs2o4bgmyejPUJGdXscEApKLk6w6skfeSYfGAACJgZqBMueaDvrohtTU3C4Lb5DyjZ8wXPGsRAoet3VTGdRzAa",
  "key2": "3h6dQJ93pAssMWTKEDpMUzowfvtGQpio6ujWc3CH4Vw55kvBFZBtW4Sp2ks8Pdu2CySk1RSdcmeKVrHZtGJPJdYD",
  "key3": "4PYephwVpiUwS7Zg3mHaRrcfG6RX6mWweziRAScZEeAii3wx5ENyVkaUPNxqKhjk3kk4cdBQxMQbjmY9wBv3tCcF",
  "key4": "5n17bLFbnqevSjKZ6AZExFTSRww5xdka55qwChG5FN86qLu2mi54MEwVxL6NHnwZRKTozUuqhebLLcKCyosSQJyL",
  "key5": "2HC1bbv8Y2ZcBEzx9a4e7aXrBNLKSPX7urt8VkDY2fLaQtqBctXtVw2kvthng9AEG9ZpxupxQ8UiSP7g6L8zHCNr",
  "key6": "5i3xTHJt5bJMxyRrhXw8Ygk53KP7P75J3j5MGmh7Gn92Ks2XnBLw6k5T8AQ7WN2e8eoePNXNbwNZPY7bRyxpyyYu",
  "key7": "t3ihpGrgn4rGvvyNJA6zYmSDTKrZkByPiczbH7RrXWTwoNvapiMHQJXPGzUqx61NWafALfZHXQGfpaF9NzAQYkh",
  "key8": "jfUNvihHpJuwVvFuce8ZPpGztRBZGZ97HzcXUHN5HDrXMAMcuVwstgkVPHfWbqNoNGn8XEBDEC8syKagBfks4tf",
  "key9": "4h1MLyeJtTVdDp7UdiPoiGfU8wPHF4YEc5YvNyyozzDwS8Pt3dUUD8mhh1ENQmFMBWot9CS8cDa3aCtMJfCtbJQs",
  "key10": "3GZKAWQTtSnP121LDCFZvhn7En8hZwyX55Qi4idqM6NqrGbNch9tgiugAbk9q4R4TyQthFQDtyw5cL8Gd9eZo1F4",
  "key11": "2n1nMsPWDiGtt6xitJ95fcWDXAaj5hGBkBQ9QNV9DkSDh3JG3iXsXsUs63biEYP9kYBABtDW9QcfFRoNVWHb3uwf",
  "key12": "3G6QrMiSCuevxYsu2P6VJDLCKFNeLTQCJeywjmAEKBu2NdNY314hkHAsiaoLNC2e4wiBHcNsRecqWFw7Ck9cYjXk",
  "key13": "59bd7YizS4FGACmj4FCiiikVfVdsSM3Ti68wMRiPzM39yqK6gTRz8CzYqziP2ugH7PBDt1aNmc8NryXpXXtd2djD",
  "key14": "2jT8pRLN19oatXLTPuNmSUtsEFDSAU1iSTSV6cUnw4K3rM6B7hbf7h8AGv5Gh122q6Yjxyu5yfNGkHJHxNfddp4X",
  "key15": "5koNnGKw9sKSN86gmXCWrCmr6kyq2ybG1gczX3UGBX2hWCnk8DuuHQrPEGvkdf2Qync5rL5opi8DUJ8PmcLgWwjo",
  "key16": "5xjarNXPeF53nku1kf34YFSKUwMR5cXiMU6MCw9p4sR5xb9jkKF4jhrSffs6ZWBmcVBmSSGcm7P4r8fZrk3mo4et",
  "key17": "5Sb156EPqg1yN7VXEmm6S5RMmbGsYFyAunXZhFiwg5cPTzvxeU6n9DrXL4QrmFSB6E5DWv3EtsvZ9TtZ3aSAEvRU",
  "key18": "AUhCA6RcJtvNNGySYydYRregJ3iiCfvrQsT9ohpbMD7VahuqGC777rWHQ1jJbe51VCecGKmkGsP8sTCe7BJ9xfA",
  "key19": "5noLQq75U7di3dMo7ehwCMqm4R9Vj7ovBvY8ktFTYXRhk5L8imGtz27SipsrURVunuB3LqB2spe6DTpiZ9Yc8Ztf",
  "key20": "3pTdzA8VTKmDSiB1zJ7ExRBHFa9p2xEzwktoXz5npsyJdUktAfvPQSS3z9jhKfaT8pDmb7KaGgMSvuzJTFAEQJ7x",
  "key21": "2FL2WWwFtJohVPcJSjNL2FC6EE1SuoxdBUzhibCpfu87nP7FD4bQX7RT9VwBZehCoLmmb6ReC6juDmUWkLaCgMQS",
  "key22": "41ZCn2HG6w3JHsYiNpj2pTR12biiumDwwaRH7A8jiSNeyUQja8TKFs5VTdFWYdJVUFx5x99m7xm9vEhPoKnHEnZ9",
  "key23": "eFAkEKpfSeTkmtKRhxCCiF1UPTpL18mBHxEJ1fst9f4YKFtSzSdv3xo2eC8i8RRBfpnMd9fvxzMNF5HGcEHnNHz",
  "key24": "XkSve2C6KiDuG7gUpWDVAM1TpQF2bZwLHjaMgYp6PWabaB8LSTPyrJ2J3UKcWHdM2G7HMXPiEF4aJMk3sKt8qw8",
  "key25": "4Te2vKVVxYqUwtRVbZEooKXzyD8RGNCtWtkT7Mmzkh2qrnV9GyG1frHWroRL8qCKEPJkyRjhiioCEJtgSebfuGzi",
  "key26": "3sY9UKMa42DpTpGDKb7Zr4fZwBLQgb6LPKRWDMMoX7U4pgTKFidbjrBgMYy69ZtnkjLzweDVN4rraAc9ZcgP13Z",
  "key27": "5saj7WsZcQZxzPKrX4hRkRSUp2s8eVud8v9sVx7gaJnj3cEMowuPMyeFzXvxH5uSX55x2eE3nfYpbrkL1KN2goFK",
  "key28": "3E4dk47uDcBtA2cfTG1Aa1rcNygbiTWdGdFfh3NdLVNY5tgLANYX2LGEr1zzgCCpz4D61FCTyC4U52dDgXnPQYek",
  "key29": "37nwh6riy2ym72YAEZAmK8eXiQ6M9Zb2r6QiDtVpjeCBU33Vdt8RxgJT8N8XeohT28zeWdKDgjv5Xu92yLWnT6jm",
  "key30": "3VZ2kbRiJDZuTqBSTGJZHbpCWoC2tczyfEvuKcaNs4Zv7M5sHLWn1adwviUKbJnabhYB61q9DniubrPoZDeirNbe",
  "key31": "2RofZcX9jP1pjSNdZeG3qJWxpgEUKmD77dZw37b7aLhxN7EZERRQsxAQ4Qj4mVbHzPGnCAu2URXyCogu9CihE9qN",
  "key32": "2cz4DuccRwQFvJHY6y5K7yuqfAhd5wfwMSdwE6NWsKhvXf8zf8eXmn3UrxQzyhH6gFxAnJrZn84tiP1VQHtfn4GX",
  "key33": "k3UXZ7eTgHe4UT6LQ3C6xT9Kz8227KDva11rGCv5V9gtiUrSjq1LwBLj4udh3CvZeH2EjL5MP43wWoZn7CsJTmw",
  "key34": "127uC2aoyNs15wYeU8hWSaexeAVorqeRXbEsuXS7BBLJqgxZZaWaqnbGYUK8o4fVVXPK8NxKRLyK1mCQSzEfWgAU",
  "key35": "3sJzvkrMYaEff44Px8RBBjx68HdWr6iPDaaT6oceFG4t4zvdHj9ofkZqarcMCHnCGKxcaJ9eQqUwiVrsNzsoM15Y",
  "key36": "5T5jkAZ5ve6owDGqxnTKxDEPa3aX8BZ1FRC45Vj8ckywZt9b1qRthQMKcEg3La9dNR4gbYwpUsTzCEkPT85nCqzR",
  "key37": "32KxhDc5ZUhX6mQ1YC2KGxVr4gS6o5Q2ABap7MjAFfHfD3Gp7Fi7hNdEfFwMQTJ5HhcE9ZnNKP8xPbDAyfkdmHi5",
  "key38": "3B3VcVWVagTFzns9RMMFCGdQ2qUAWZ1XGP9K6wx9T5fpWXcsspYby87FUHToWXaNSQ3Yha6af9wLiTWhPjgc5KmZ",
  "key39": "4TMb5meFLFozx9YNL3AVc6kXUVXVGZFqx2tJwePXJrUqfv3uZD3CoR7H4mbnGbpURM46DqvTC9NLpYtZVZSbGox1",
  "key40": "3rUM3ZnNL5ir939yYBmJTjpziv2tGr48X6EXTwXz93rq4kgdhjnnvAVeptm3ndAqDrm3EbJWmZ6o47NE5RpZWoZ1",
  "key41": "5CwTucrVEycjxJihgVwykRpRAoKGJbFzBDDzajnDBB2oXsMieuNaLpMCWUEHpno1Y9tu6CU7HGtzTPTEXWNsAMHx",
  "key42": "2HJ7Me43jBhPG3sPLAG6G3PyNdtwkkC1wzKPbYUUp8Kt8277ywCE78HWhsAJLMCfWKgxaSoRKZcdtm8725YeX3i1",
  "key43": "3fhrocHDLLLHjcRX5vd1TuxqPCR6MeW9zzSRBHXcWJ4UrSnF9Zv7VZNrPndmFAocQBY64XfMUS6zwwVuYXLw1hN6",
  "key44": "4p8ke1Lkx81qfEx44Q36F9f3FvLXPzAHBSgZV4NbUvK3uSbXpHbaEKM9qtmsKHvEJDgR3kDNteKeG8eP4PjnMcxx",
  "key45": "xXNrP8JxFPTrVgAxRPBt5QJASCmQA5dcwpF62s97fRhYXPN5RgPf2JJRvrXkogr3fsNuWmN4DVCiRCb4AZtrkTx",
  "key46": "2qDqYxH74xqYZ9L8XckSR45KbvvdbHKvtb5PZgwsKuPCqykEYVCaNUWMxkzdUAKXrv3CUBzKrpmj9QHmTbVmWRXa"
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
