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
    "3SudCQnPk6bGjcu1t6g9bYBXzZDpJNeYbiWnMzgy3m1TfCEqHqLYA5DCKEPCBsvKp9c89WwYAK8nT2YkXaQr6sd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61F2LZGdUtS8fvWwqsfm9jyoVaCXreN1LWMg5hV3rQnJHEyE6ZWVUVuFbxGHSR7TrCY7QkaCy1NWeFghYX1pmkw",
  "key1": "5qfzvx4XGLaWsQpwvrogR9ufGWR1pjiN7Vg6CZK5qwfH1Cidu1tiW2qz2MiZ2sw6tDuNPNfCoUWDdMeVVBdkWd6R",
  "key2": "4MCsDibtK7Tj8rarEbidxEZrRgVXoSbA91tKpyTv5RebT1venGt62gHPSatiRotCf9h6BE9daqKrb4sE7JqdMo4",
  "key3": "5j96qxviSt18S4jd9KqSUrdGcQXTxHPiKYhxTd5JEasLjm1F8nXgcLMb5frjEX6L7V3hGSzmormvRXwBs8AA6aKm",
  "key4": "5bVVi9NBk5yFCGsPeBwdb21BoGM1hyE6GYpcJv98a4KtZ7kedTeBqzAvLdgwtHD85mhWUFmidhZi9CMK46kczBb6",
  "key5": "4xXqrpiiKfUYoxFagu6VbrF4fT2ZsfzU1NYdVvNzpdbSHf6H5f95nGtKmjnCtQqPBnJf9W8NZFdUtrdQ6vd7HmcJ",
  "key6": "5QXagRpfxEbvpjeUH4exR1v5P2rXS186HK6pHtQLpdQnjRBFZePV6tftPjj1Z44nrQvcvBqycZQJBoRvKNePjWF1",
  "key7": "4tv7KZhyVKmh9mDYKycxgwQ3DUEx5xpixgW26znodLgrjezGZamQnisBZifUFRaVoHFyNa6e9rTzP4aqAnyvnNYj",
  "key8": "azTC2wyxS1tsrXsAxMuJbDFbAmX83X1mKedWSfjKcS4RHM6jecjC8Qp1Yyp7q2s2JDDG1MoYzf2CrRmC8qWDXad",
  "key9": "2D7S2CMqsgYnHuyT8SaXgF5xUi4qaw35Y5LamGoExt4nGGCPS5Vnj1biT7ui5viuXqPnWarwwVhYbsLZ3wYH9koF",
  "key10": "95YcaV1DwZvw3ja9GHruojSURd9FSVHCGKFGoNtS7tSAHy2gxCJnwrH8FDA4uq1ckMnuhx2hDkC7BUZgozFWGMQ",
  "key11": "rFCjnCNXDgKazATj4rnkXMx3NdKFZRoVRTXzQvmaeJ8g2cGMwkbTH4aK2bNioRrx8KcQn6hH6R2roMuqSheep5M",
  "key12": "4Kh7XtpzYSPFHNEcGc9fKqGv2DAfiMvKXPDTPQMnM2UE5n5hFPoWQsv5MGfdvG4y2rV3tsL6zqjoJicXMfEMNHCe",
  "key13": "22jxpBgwCy4cUYVeNwGiw567k7ykvvka5yoAEpUJgpEEhkhARW8T5WH3jpA7s7M1NErirGn14BN8J3jSXQSeKErM",
  "key14": "Kb1rjD6FJ9WFL9Tu1YUET8pbwchYBGWi4xowP9tQsAHCvyztj6KecQBqo5N1zmnTchysPn6DytLnSjRFECBDfb2",
  "key15": "3zoYNhK1uaFuQJhKVhk47QZVXdtNAq8wTzgBFTLiC2XPoLJv7jbdQKACySSXmf8oXMkGpjj7UYrxccU6dzTAbrKB",
  "key16": "5m8dpesXtVPnKihQj31y2mZCxCGY6W81cs22wLt4qxum62ZzxoFEawPi4nsiXMjw8VbNEQFn23iFyXbneVz2UAUw",
  "key17": "2AbGLhitcqPkGXuJTtW7Vhp57rPidTneqD5EZPVECCE8VqTXZGmYjbE5bW6ngHza1VhiMg2z4FYXi4fmxdDsFjPM",
  "key18": "627YnRfX4Hr6HVs7PhdEVMXPS1VWBza9DZLYv7Y5KWfihgfxAKRT6Mxa8yiVZAT15YhihGXgw56WXpdgrCuDYftR",
  "key19": "2cDjboH9g7jngFeV9he3zqmtBSrhX1ofTR85k7B8hdVT5Gy8PvSMCchHosDRcTeEYm1RhoDmaaf9rwovTVBcwsU",
  "key20": "JhVYGo15SXskeGraLWiZdgLtFDBkdXT9A8fkDJmUKKnwCmCKQHMfacLSWF1EYuHDxj2YoYcvaPSRwBe9Gz7WLSG",
  "key21": "5Gc1BgGNavcK9YkQ7brE55nJLdCiGnx6EqrFHfWnutYd8j25UxwJTBAU9jSeU3jroskXK73j3svsZdE7xiBUaiJB",
  "key22": "32H5nVzXE6XB283NB6zvdNY7rAyYZBG2x6XZjBFqtZZtq1DpMYzSW8Mb2c8Ew1hBycHQoYVEYYXL2sfKRU7JxN5t",
  "key23": "5pRwCrY4VWuZFSey3b97i6TNuZRbPWt9rAUJSmeTraA2svoe7BCectWHh6a32KDt9eSKinvEfrxHVekqQsYBQYSD",
  "key24": "5rKZYavRziJq4PdnWRLTs4AgPtryQ1yAB8gAw62CRGf9dBFiPGHc2pqbLo5bEqcbRE7jsKbriCGg13rHgrPJGQLh",
  "key25": "3H9ZXHokeMeCME7VFFbB5vECqZPLENjuSxiB2SAZqFMkwDVd1uak3cvfQNonvbqf3xcKbhacvozHNQduLRvSkRjU",
  "key26": "4SRyZutCfmFNJgi4xXYhdLQhzBDNoTtR9nkN5XVvYaZYi2fAosMaLXfzo2T5GgTmU7FuG8KFFfAyeRH6Xbin1hLS",
  "key27": "4wdrooUJRyRnzKUrsGpUe2QZLSRUPX51R2K6esTVLaKJzqqWvAgP7zNgnFQieidr7oyLtyhG1vTdnEsyyHA4b51C"
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
