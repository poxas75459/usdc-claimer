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
    "5mEPvZMdHJXTUWjgLC1w5WH7pSMb4qSd5vZRrjF6Ysis2RhnQUj5uQxBde8ZrEPkNKvBChqbiuDW3njysYEFpTUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZd1NF4hTNxUYh8eQ1vxp9yNPM58W89vmZWchcf21GA1EPpM1C1JY3FKZdsM7ZJZH9seBeL28kB1sR23usJXem",
  "key1": "48hwnsmfTKod3ZutpJx9yfNFzHHo13ttFtjQBibBVnCAxz5N4LT2MyM9RaRKjy7MbVkpNyPjFoT2cmTSz7Binp1J",
  "key2": "EPT1j5ut1oyiH7gPLL3KzPYc62w1pRWnzHdocjbPeuYVDgpSyvnS3uWZvy9nUFtGfMaERt5SQyat6iHKqMkggov",
  "key3": "621WFcTWrwGwgWx4VmipCN7B7XjDVYMd39GCeqRdYBFtji16QonRhBCgStddpSADDZzvzQ3Gk8o9aZ4L6QLHMUqt",
  "key4": "64rwsCV1xCqW4J1ZVLjDro8Q8uFySyfMQ2MWVT9Hu4frYusv3BuqP78hRvqv7UstBprpsH3dsBnWPFzKxZjvo5b5",
  "key5": "51pwz2dn4RjEpvvxYY53gWhvyZeoHbXMJtA1nD1XJYMNC5FsxjDiNocRshx9GnRKLdW8pGKPy7vNkJcE7wAvGncX",
  "key6": "3jPsD7bMG9ZhAB5w11gKqzXYU3M4GpEMdNEmu8RJetmsyWJafFz4D1hvDn3xVDtWjnNqDoTeH72hQ3RrvREX8jBv",
  "key7": "c2hSwHNYuhGEYJ4NMHRAJLztJaQYStpESAQHzDQ5WkEZAnzSxMsBNERJENswLVftu1WaU291XhJHiWq3PJavkpn",
  "key8": "3JsQyVLLYphpLWGgTaanKqGWQEm6rrNxvVCkCbs4Ddd2SfBnR5zAtuUgA63iuHs3obHFXnLdXPC4jdxm6KxqDxBF",
  "key9": "2RcNLsaGuY3dhmPnKtNicSeu3TVLQ7qAfdBg8A7KF4uzuEpA7eMx22NwuYBNVCG5sXwPgdCry14tmutHxNFncidR",
  "key10": "aF5t1qSHGfnqAyJvfHiHXtpVMjRSmNFDicbNoDvX7gDZKPMjo362CF7pvpQqdMadjz2veGMWNUQdtPgT5a4sz5A",
  "key11": "252oYZ13dc5hTrbvbA6dvKWCp4sSgSN45DK7zdNrmNor4bWkyZ9tKqbu6o3LzT3E4RwzVcf667dNEbXRgEbf4SoT",
  "key12": "4CAk7Fb7B6EmcvpTHY863eBwo8KhZsiE45GmZpuM5FXsr9zYbWxYNoV3JCLVWAdywSgrhhyswVGDCUCTcVyxa7gw",
  "key13": "7tRFRXvzg3XoyRX9PaAj4JGbPAZTdh3wkchKvbifMQVRyqPC4oA43eZWJugvHZEY2E1QEtC59FWmxVc19GygoF1",
  "key14": "2quje3fqiFi9fjza27Z93KaVkFhtWGwYcxmV7VSreRpwsSG55fJbCiCWewK4h8GSTdoDCbd4PghedqAHuVq5RTds",
  "key15": "2iaauGbKAwNbQJqDpg6xYFFwzv3FAo3AXNBpw87c45T2GC2oym3PDVjiECESvjZtmbuu5ByyoJrHpyWNwA43QkWA",
  "key16": "67YRMsCLdRauZ7ZSgucUwvH1ZBjomnFeoNunLi3X7npAyiQUJJsUhiE88oNVmC4JGuEdMSXiu5YGmT8xMzvfCm1y",
  "key17": "4pNctLehhYsTDJgcyWYQmKcL5FPhNaKbgUkxSdYX2EX9GurMCj2tixTCRSPRW3y9uoXYU5yh7msm8Uo1oqCdu77n",
  "key18": "4CeT4DuT94ZWGG1vKPYT1jYjStwW2r79T8iA2bqBXWgdPrFi8bSsuGc9r6p3sSy1GDfxc52CBjasnH7XVrn9fsqq",
  "key19": "4Uhof8vAnYtfoYsTJgSmrrF1Nh1hgQsCTbktMMgCFQUENGw8yH6aiE3sBdD1xztBCFTQ16qSGitkw9aihoDuw12J",
  "key20": "5B6HJDCmqpXhdCJLnWLDVDvNCdJwXbdKTxm7jKFQaf9y5n79amxrUHDz5ok7MvHKXkTSReuv7JGhg4P63BDgBXnW",
  "key21": "4StM1FcLq6e2gc5oxFzapVaDwXaU2itide8nhq45v9tbf1WJ1yhdi9wygjZZ5sW8Pp8JRypX5QyqtXajt47QNgb9",
  "key22": "TkaPBC4UEsP2Q6bRyMxPRJhC6FHNa1TNHxXiwnDhH6Eqn32b7oexc4LsjVg5LWfe2bzD12MjoqGPAiPKv8GePe9",
  "key23": "5cciTB7wSJTU4iP3xzRGL2PxB2ofkaxEae6qd3hY59xDfpstmST7GqyPpPghisMGsPbtVHz5XzTLTuqj2MT89cFz",
  "key24": "c9et3nkBU4Rjxtwi7Ss3AKs4pWAiNMbnGCeeVDB2xTfu9h4m2qxR6hQSwutpBQb79LiUiHA6Mj26ZxDaphxym24",
  "key25": "4tKuhbCwwr2VTfBwAm2tfQX3DNtCn8TMbNGfAkqmEnhACHVyQw9h7U8wqGuVoiRUo9b9BLpS5icXbF9sMd36xAC1",
  "key26": "3iF3uqR4ZjTsGM3xCAqezUxa522ntcBxwXmksv3WfvBTUzxeYRqRujDwmWHiBaVgsN5J3NUvp8wsRvt4htP2E6ZF",
  "key27": "4tCB3WfYyHddyASZBFS2LtfykjRiumLGVsQbpk2BqnYKmqTqMVPYLbPMo4vV3D3Gd4bWHBQrB8G4UPdaAHxGrZSs",
  "key28": "2gie8kGjQiowP8ZJoWxc1mehBv1KGEXkJa3jqt6jGiQTSV8rbADwNrtis7b7cHrP2VBQFzqyBY4G3HcZqydHbNZN",
  "key29": "2pBvmxbuDfHwkzBn7SkSvzTcKPSr3rMAUmHQFR1C8FNraLDBFvrckujjqyQf4TgY6NGGjSU2XCSwvWHWdgEGA2h8",
  "key30": "5MziNXZTjE4HfmTYAX1iCR3ibsB7Cn9Vcyj45Aqio3DvtQgfe1LQ9EBeTnUvtJvnN8YD1vjuXZcoT6ciYZpE3TtE",
  "key31": "3oFEUaehRJk8QoHkb9z1HVua9qPJD6Bigm9wdTfQoGADwRhARvxQpCFFG3Ca8c9rwUPwhistJBvTPFJim4LahhVA"
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
