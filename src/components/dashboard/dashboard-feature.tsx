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
    "2sZJq3N1d2G2LB9qyxKSTGJTXYzhLVpTUdXpev3TmDB2fQpUjTXCwPyRaeVkGMqzWDhu15917Fe1JRYjUoS66cXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tv5vtVhBwoKPVKJS78k2ruEX6VznHX1tB5aMcNtdLdJ24Mg9vzNp7zUVLXkRtiJqgamg5GPPw3jDWMFBaPHsjfg",
  "key1": "T35bkZHf2Z7k8fwSCfK28zGq4ofviK24zniK1r53cXthbSECPnYzS4Eg6hYVpzVBU1o5GYsyDoeFLNG5ko5bxv7",
  "key2": "UhUEWmCoLmGkfkB489cDgY7EAp8N6CuQ4KNWsE8pYnem8HkUsyNfjC2w8chV97qpSnNCYY1kV2oZ9WDhXGtwidA",
  "key3": "61Wb4qqTVgyggBuTGGDjMvX5pU41unVM5xEMdaGKjDYRvFvFno1YDd3qfNezHRQUqp2tmdHfMVcigXGDNNzUKGRo",
  "key4": "4An7Cw5srPeuSeyzqKhatxmk7ghHr4BtkstiXVBB9aX8uLK1qXKjhL5ibLAph3W5LehSPdCdZbFLh1DafTHt1W5T",
  "key5": "ggoUos9GBoDmLnDLVm7XczyxicJQXeK1TyMwV5oVD6kj9AaNYfQPF1BreDbcunsZ3KLFzziJR9qJGpx7gkrwzFb",
  "key6": "5WEUgBmtTsEkU9hkAtQZM6mMrDnTPWAWj1dTwdcNJbvtMoit7Hc2Mi56AwtDnaKYDy5F8xGCgxLxTPVMVkCf82jT",
  "key7": "4hvMiJ2uEiEtzFhy9hsPG1pWPcNqxaB3SLTM5xZzzLSBLzcFCFAuKQ8Rw3PXyTw37KgAksUMvf9T8EoyRBTZDSmm",
  "key8": "2YjLJrATusDuVvCPWudvzkFEdKkoBgzF7hB8etuFfhMTQxvHi1ZT7VQ8vsAvbcFrpUJmWiruuN5c8XuJE2eEJEac",
  "key9": "S3LpKomDBCKcc93nU9YgbcAwwS3ERb1cPxD69Qn6nMhM11Cht9piPU9BM4iQuGxdvuYUFCVaQh8w5SfWiy98gUk",
  "key10": "2TS5ex4oSbLsqxA1p6fcViQxw7jHrU6wpu3qqu8YM3HvQkbSjABkHwFXpGBeqtHBLVrKgGJFbzdk4Cn5HUWeb6mB",
  "key11": "27iWvie4crFPiTK82J1aghqemGr4ZDhCb6i6jtFSkFtQkDZyJdgBuEZ1NYbZ3dkXgoAP6Xyc2MkzND3o1sqRXWrZ",
  "key12": "WAof4buB5JZ589bKeugvABALmr3LTnBYzLM5BH4JCQs8UaZWyQV3Vhu6Ka11r6WLvoz6nSD8YQznYE6PnXq16n8",
  "key13": "4jJggo3dvwbVgDqq2A9XLQUWUXL1E5DRAyhES4TXtd2Vh6avzFS78AYB4qioqmzxFCKinKPmtzpNJS5L8csWdMPp",
  "key14": "2XQMuFKxEPVJSVpFutQrv4rihgQVSQUo86DDywpF7sTx6fipyL8rBPiuRG6m65dFpkEKCDZveCtdwHEaXTQsu93i",
  "key15": "4FYa9A8JxBLuwNkzSrXfkbvQR9NiWNd4m7i1Gacq4CPJqCS9VjXdZrHtY8Z7t5N39uh2cEwkapUsv7KLWc1jhxNJ",
  "key16": "2KnwhrGUVrbA9JvXyfeR2jcbdzkZSjK9518BAtE9TvrYMfP3q4gKb39Dfq6s8G9H3xux9gXyji61xja3dQekzdSV",
  "key17": "4vhNULddAcNGSv5kMpsoC6rzF9q6bUmd99PAHzWpZR4m8EP5xQSHUK3cuGRDe2q3dBaxUyyU8PnZ79dxYbYZEtNU",
  "key18": "5QHVc4C6UWuL6GsDfttcgfHghEbT7EEb6wxs8WcXCn4Sq2rRfC66DGpkXkYMwbVYhEehH6KGZo4f7KFeBbPKwYB8",
  "key19": "4TBUfHPntzJQkgfKjYyuoCPU28Snejzdac43sRD1r31p3s9Hed7xRii3GAx4jSoyhTRo3X3ukYptBxH2Lph8tjP8",
  "key20": "5AynyKjt1vpUXiNT1SxsdXu9f9FiynitMYLE7bcGozazMJMonFx3iW6vBbhQVnRhdihFh1Csa5E8uC4YRTHuhdcH",
  "key21": "5MyNt5ys5yDbDBujLyaGgvcVyVcR5ycmbSHW3g2yhVEf72h1beY1hm5GKL4L17RMPmSEJkp9RGZyXZbo1znkakBR",
  "key22": "2HLLQc15em95cKUWXm65Sj225hKmD1UbWAe38KL85oFb6pR6DTeYD72eRBtMyFpkGPWw7Qe1j5faogT3MD72fNx9",
  "key23": "3e12XRseQXxemXkDZPWV4YEaSj2e9g1y87YpitDkLpmsXhLrdT1RJMurPQ4HBVJeKwGPQx6MzefbTEjT8eZ2X53H",
  "key24": "2gSKyoC2KKPyruYXsFwJHYyJqQbdQxYwbxWECBHnniqYWF853hGhn5ffu85KD37TfULutjaCdYTFbUuacenG67QA",
  "key25": "3i78DDsNyKasWa2Q7MACHHmyFCpnHWNokqDyn6KgQEGbDpWY4XCmQXVk3bC5LNSttPUZfDxuwtQ6CZxaeADEUvWY",
  "key26": "2pwvYWXwnenCbvNqxr7MjhUbM3rQVdgSnpdviGmFpPjoqRmtoWLeq8okKJJWy2EnPZuwwxo5w8rqiaz1wS9MdHmQ",
  "key27": "2H5jqikizk6HiX9Do2jdxyKTTQSRSL6keoq83x7yncQ4Jt9zFgcHMaXbY8emd1h7epXye2yyf6ZtV2qqHaLYAL1Y",
  "key28": "3Ua29ThxKqdvEqXzKaC3Winao8JqwiGAPb4rR3vqUj69P8gHsekQhqaiYRHkCwiLjYP45TKSZQB28uCNKdecdbY4",
  "key29": "U31vtLdpkMdxXCxx47jeeDnGvBrez1Tkfu9frnRUptC4uEFaByNeFwFURtA2JrJNJWcGYHTAEy8TjPCotZ1LxS1",
  "key30": "UT3QR3ySD1ysTEdxWU26tyDYfezA683nGSYvKgDfRvgcJgNCYw1Kp9G9T9PGat8gWCTH6FpDSMUnSURzre71RoS",
  "key31": "3PiTUrF7BWzJEFTzEnM2b2WfH3dEKcdXpbCYw8mes3e9qcCagc77mzr8Mgm7Y6kC5bT1GYcsq4LLgNVvNW4WAsjh",
  "key32": "5DAcEFGzwthDiEhZimUjJ7RpuAceqCPNeSBDChmacLcSVEnwsAEVFPNZhBa9dZXAWi2mUxVMX74VRH4kYUhjCQ9T",
  "key33": "5MiDnVWLefwwJuCSBU7gADoaMoPGj9xRvBV4w5Qv8q1Ugjur1z7bXYcKh6qt2Z9NDfugwCtYSTBUTB5cHWXvPh2K",
  "key34": "5NmuVugB1qEgehcxB3k6JtuWhvh8t2uWoYdQgAobVpDC3iTrvQRBpp5AsjqaoZ8CkEKi9j8t1JcQxQwcBSW14EcN",
  "key35": "xgUF7jn8FsR72H5VzBTtC79SPau1CjLwVv37kBgnDDcZLAjxyvzK3q8JnfeEdj7oPALwnpAUM5rRuakfbVk1Azm",
  "key36": "5J344ZvrZ4TtbTNKvtsPrUxvFpLnsu4QqE5baFULUnfq4P86sP8JCPLjM9QfWWGFHEs9ETmgx6RxRQB3Fubd65an",
  "key37": "3YUr8R35efHawAeC8LLBezGvsLg3HbheReKhjTJqxrr3nEAszSZJEfGsbNwadDtpFKpFVTj11eBBDKpnPq4bCDeV",
  "key38": "3eGodhpNJLcYejwXDrxzsMQqpw6qjmMtq3BNTc6CZ6WtLWbVGnRwNsiVnk73pAUgLEZFQRiEm9KtcCRsCzQJUDi5",
  "key39": "3cv3R2iYJHVfULC4TZsRkFehobHKTC2yX2u83k6dPiNXehnrcbUJnwuxjZg3EEJ4t6zYqZ3ejFB3yN5SezWfyUfW",
  "key40": "5QQBqHihjpJ4KprkrtSkPjhz9VefBPcr2ic7tZu2s8ZuDvrxPMrcbQUELpsxyjbjS88d2rwwHNkRt9gnrqo5FQHJ"
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
