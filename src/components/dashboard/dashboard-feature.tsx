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
    "33wxXyHajBmdNXiJEdJVDaXNh8DN1s2JWChSMVsPguaRJQZeHFAvoFSSzHSz1XszKSQLzXpV8BsWMMCvBSPeWbJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sxsjaLuRf5JxTngnymyZiFVW1yFstpJSYUBy4rJeq5pSa6V16VeSVv4q4yFt7QuVgX3qwCWvM12a5KCyUtiesd6",
  "key1": "4CdbtdPdM6eFpqtVtAY41VAvSktHiLYDfV8qmFb5Ux1sd8vhuU5uhvjVbwqXnTrBywjMymFg1YLsjFULaBhQCR5",
  "key2": "83AM8m7tCebry52khg3NL5kqv6NWeA4WCmfy7T3EEfMZeSMJUmm9X5QiWzXov875z4Si7aHaRrrus5Q3wiSEm1T",
  "key3": "248G6kgq5oEohNnWfchcJtofiHS6VWyGSczoFKfgc7PqrYxNEXPBECT8UQ4w4gW9D6pWi6emerhCjvfCtugDyMrm",
  "key4": "4Dnw96n9yA5QXAX4d2CMkyCtELWg1aF8AfABimZ2p1NnLsth2bMJomPkVpK27BNKfH53WSUB6vDJckXk59nTdP7r",
  "key5": "5B665oERywtaomsYe2BJazp2BfBNR5GymSRPqsCBZpQL5TSowoX4yYHaZ8CbS4L6bp86eqAVaUaQ1kQy4Qvo8VqX",
  "key6": "2YtVmHKoH1GGShZVvQE7EcatenPB6biqjQc5h7SpwTsXhzrLkSWRC1v3hoAqNmAGaKACTuVoA7ejRsP68u9VP7qE",
  "key7": "J14y2axt6yM1WpiG9KFNBYzYfZFhQXgFNj4rvDJdepgq256dGuh8WXBFSF8Y7NtiMQYePddtgcaF2m9X42FQbhU",
  "key8": "4dXZYppwfRdu6pSZzJrqqgbqmximbkJRJuWadApqkp3ZLn7MJYpk9TQZNFNfqwVMUXFPifFsmfUetP2oeFKmiYgm",
  "key9": "5WMLAv5d6hANcZQWUCoi3tSvB5askftWEJuQ5ysZS9J4SpaB6u9b4uWqLmKutT1e8yGWcyvaCDVsWUXZWUbAWsGc",
  "key10": "4ASdAVnrTrhv3X4rmMUiTEg3T3KKkSZGt7rVKsAjzyRFQZUMtoUMVYadg9bF3Euu86PovqiXPo6k2mHTPDohQtFj",
  "key11": "4zhsNp2pHpDuRHyRyVV8Q9JA8GGDryBAonyTiAyTFGQPJzfkkE32c1coyeEB5TNMR2fYhERCogDeiNRjTwPgDB9p",
  "key12": "287W4AiFbgU53MCzLPXMviKSteFUkyaUeDbz4sugfSrKtFvqu79CRHvCTvcwwXjhGASdqxAub3j4rQpLLUxwZoNX",
  "key13": "5MYvVu1gVu6y6QjwU54jU3sZg7saLbm45TUtRZchWqof5q38m9qmfmUAvYcrASCme3QNdLh66CRk8XCpFprCjej3",
  "key14": "3NARUY3smJLTVBXXGMUk7GcVAe7fezBNxVBzzPuuTRX3JR7hFwuRuRBpaVEsbHjJC7WFcNytN5XkuR1M2bCypeBG",
  "key15": "4P5PScYo6vFuU5YtS6nxN6ke4MhET59sPYbTwtyUTKiLmjcdpy6vUThdK4zihVapRgWzdvwcM71s489VBN2Gqbc2",
  "key16": "Xts28n6B1mETV3ZQuzaikqNqeqG1qzm7njY4tRx6YAfQJapd27KWYfVNLXbcr8KJKpfzVZtLE2teafXVU1xccsy",
  "key17": "2kTDgtok3cUkvwJ27uTFhJqMxih3KWKmU3hzaxoAyZDVU4WdLTwWVXd3fViVLa1yihyjezjB7Fo3GaYmCVEjUBZj",
  "key18": "55HhwZ138oKjGw2w3VtgwJXyFjJ4kgRZTSFPiMKdgRaapgPnKnqT2CPexWG5fYQ41QAu6KFKVwaXuZnJiwTHstRn",
  "key19": "4Tg2izLQ8Zc3rNtMHBhKs9kv78wyeA26RVjpUDHamduQPcs59Kb8WiCo12rD7n2Ka6Tj8wGrzT4rhUUrSPpJGhux",
  "key20": "3wfaw8g8piiQMrRYoNVCwKEXpSKsaLuruEZAQzo9GhfLTmc3kw7oRnyvTt1G4SCWnaMnhu24fpBkMRk7WmRup5V6",
  "key21": "2kREDc8UScU1cKHCkLGWwbb7KLCQFpa7dKPASggzCcHcZ3g6hBDADCAcpv7xawiCh77K17gnTKBbWwFWDdXxPwqV",
  "key22": "49e8p3NEGRJeHmu3XcWBVKo3DCCbAEneLxNx39Tk5sXh6Z6wGBrJinKWGpQLDnU4SfaZNLyAcSh4BDHbmYZRo1EE",
  "key23": "2VyNRepZ24xX6iGToRPdBt4f8F3CAP7aVyUaZNPE945sneQerr7JCKQgdz3d8Rmo5eeLAp5uZDRr7ZZpN1NCy2Xi",
  "key24": "mxfpDA9sNnhoJCGwVatNXoogmMvBe2KKg29hvaPwYYa6vrvcMw4qUKk4cXUXFDscKFsHt8SRnKDCYrf72pftz8c",
  "key25": "4AXGn4QCyXQCcf7XeCkXVyuYyrjSmtsuCCNqdK2zMSHLz392bWKyiixky7pBrMuNh7oiy3NNyxR2u5E9KoSHsKk3",
  "key26": "4iahK89qvHM2rDVnwSXwJbHupAvc9q6DvsGqPdKrFKtkkuEK3iB8oV2jsKADccLM4dutYweZa4JwCeW4qMWyPv6h",
  "key27": "uRX2bweU7j8zdggvjQ23BgK5syA3yiwjymDgf3ff7iA1bjHSS4wwbPLsjKpEHVfECWQhUe5jEvMfbM7WKyz5Tav",
  "key28": "27prUSKY2hjkxPb6j4UBBUxEjLZfXjD9QHt3fS7nFPZeAjjvUm8i3d2vTuUi9ziTZCY2uJpwV7o2yVPfxyn4zm7k",
  "key29": "5WQ4rx3VpRmyxpPw7g3zWc6S5vSzfb3g6Z8XvF5aFuWLBzPfZ2ReHn75RY3yhMtA1SyN6VuMgDkFrB5dAJeq6QGY",
  "key30": "2RQnfqbuGs9pY9gSfAn1opre2MppBi1ZmwvT515oycguefzP4GBTMfEmm9SMfk3dxrpser8sjxUJungAmTgk4hbC",
  "key31": "2QAZGw2hAK4kaiZHg94yJ884zkWvgygwLUYsagHoQxZ9Dc3HwRTNyoSEn5nY2EkNGVh9M55u8UpUYxojTpmEJuiL",
  "key32": "3RmsdYfQ4SyVpVFJcKmZ1KTxYqgVv8f4EkPkvThDnFm9nBNAP9pz6u6VX9hWzq6v4U5WeNev1pSFoDzdXoDiDJSz",
  "key33": "2rL2YHGix4FwF7DEuW31yu3KqSyHy7guQovGmXsuRedqjMmT29SHWoH3FgYR3dRdFY5EzwPD5fJmwrgYjEtic9i3",
  "key34": "5HK1LFiUoWEpL17fp9p1rAxmRuo3HXVW7ek2aGWzVVPp9Zp1kMFMgXfMF2saQZTdGEZ417dyr8LYXEkhxf3j8MdQ",
  "key35": "igjqz5dg97CrGrz5mv8smhrHJSeaoF2CwF1gUVP8PAC5ZYUsY1n3ZtBEvmp2qdJaEKVm62yDAG881E8768Ty2ui",
  "key36": "4PicnpbgKkA22oZECKQDt2xJcVnqNP5oEwB7pEvDEPUQ752WyzCx6R9Em9UoHZ6J4LVvfFk1YdLtnkpa1RjS9YU2",
  "key37": "5naQ9mq2RUatrS8rE4GhDERJvUsodNAej1AHqgbhUx5Ev89USvLcDv8fKkwMokp8dRM4mkV3drAg7zka4fMGwj8k",
  "key38": "5JmbgXmSbNyj3kfEAvCozmGZHXc8PRB88d2EFbQyRJYJVedJzEArkPYBp2afjzCj6hLw2UrUcQoAkWw5zpxv2F2q",
  "key39": "2aRt7QWriraeeisJrh3TzxvoZykf4r2zJguptGSKE3gatSVnekRPkotP2wTLxaUrcJCAvztZmS73TpwipGHenRBL",
  "key40": "bZ9btYPKZ4ThN2W8ukGexkWLWR8Jm6yAaejReniDMGszw4gnLrpHzCY4KyvAuayWEVin1DzgaKctCWAZ7wYa7DS",
  "key41": "NfzSGM4UgMyYhPaBNmZwXCZRnAsRArEvve4ZySdszexmcLzpvSiQhZDHNZ85ev6X9eBD4rfJgNqgKquLusZ68KH",
  "key42": "9MjARYge1eamv4so9ynsFWpv19w1GXv4dgYvWagneAkdS3Ad9gFgbx1D9tikeSuW4DcCixtcqscV3ekdtcP7VjS"
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
