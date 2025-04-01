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
    "53sUBvRSCpDqD8snPe3Hu9hPyvZufkuUQG5sdPfi3qEffUE2CXzThbRxuJaUTdPa2GwPT23eDpCuw16SGsiEvqS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDyceHSNe7UVRoVYFDUiHNREffeKqLCEWXG3YSQJsu2U9oHjDJ1oAScvwnphR3eUVvf56tR7TGXnoYp37yniJL7",
  "key1": "3G4oywjFKuqEcBMt5o9d1McvdbuBaiU26cG9r8wK4gk8TRZNqv6xdRsaX2jjT1Rq9w6dSjbXw6W16PhhQjwDhcJT",
  "key2": "4cRmJhU38HecJrGrniWthXqAGnnjNsr34gdyGnvKoehyLXL1ourfDW1cERyVjrC8GDwwa7VZwQ1cJbXvFDZToGCv",
  "key3": "5veFaxxuSQpxxZBAAe4Sj4dHBjavFASBHJXuzVBomEFsBeqcQzoEtih2pw11CHT23y5KiV298XfKesNcABij4b6L",
  "key4": "5ujMzD34tHnMSF2gcYuLfJC5MYdHVz6wuFxqMLtdsKBow1XeoFWHLeUHndGccgs1oCya3NdmhoBAgHN6PUDmZmPj",
  "key5": "3wnLfxzN3TRgg5NCtKEqtpTbXUvfK5bwAXENhTrpocUUSbNxAkeBAEpW9JyjoKRsF1RUR5qkXxwwVRpsKPkhCdii",
  "key6": "dEEA6ZKLsyuGyEQxTZacmCdjWjS6B7tC6qjSz2ZyzCkkTwsrVMWA2qU4cECPo1U3JqqPENJXxyn1AkPWX26Qaej",
  "key7": "xpKyy3jgTuQ5irQZnrKBAHKyft9YeSLQ65AcgPrjgJPAQruvnbnSrNPUNxgMBwSTagqm8dxj9S7YuLtfnRg85Jh",
  "key8": "655cyvS7YnPZFTpZGUCUqBM7End6eLFw4qiMvUkC3zCTzjAHkbP1gThpeCSLh1C3cd5U2Si7CX2eRjFVKL3HPR3h",
  "key9": "5VrkafL8mdkh57x2vJyCi4YV54876S4eiCiHGpuKdnmMcbFAtXJShkiZHRmoUR2oc1i3jFSHjQGPWck9n95TBExe",
  "key10": "3WLpEGaSbK98TKGz1aWCu3uBhppLfT8a1dmHiDqa4obby1DWzH4TcTDisqE23rsgY3LZjRQCMMH96EoHp5bSVqwD",
  "key11": "3aepyS28wEuB9mfUxjePVGMRkyDHG4AYGc4cZCrEZcXy3iE63Ytft4HsDYFMAH4RzcK5iv9mhaXD8uZchLpgcczy",
  "key12": "4PLPGVkGsXTQF9BKQFv519z4fqY7vM1ESpHvmLCemMj24itHG2CqujJZxGxPgVk9kjzsrLHuWn3fXoyiumHWEp7x",
  "key13": "2jNXTi8AefqK3uzosk7NzELLHJ55jypm6NFMSXWKAJcmE1KdTyP2aEFwMVNrMq1FTW2TGpLCWDqiFz7Q7h4kuACy",
  "key14": "5m9Epcb1W9uoB2SCqZMSTrFiLCNkRn8qCaRwSmVDDL2hwVRMcsf5jYfVqGkqMg5LZTZgdbbo3k5CKLKXvajMcsHv",
  "key15": "5Xc9PUtE2Pwd3ZfLQWTALxR2uMEvKDBfAv6v5YSvXEvJNQzSgsiWwjbh3RQMuYq1ikGjATgZ3NPTfa8pT7ZMKAd2",
  "key16": "558eS5fQeJSmDw3DXioyk22U5VpEsK3kharDKYinGzXvtaPJFhiBrb9sMWAhHMzb1F39QGFuRkpQp3VPHEF4R71f",
  "key17": "56XwGT8iyEGxCDBjwFrHXMZRMB8zEaZcD8UW9vL9HX2onBiemzcjAoxBYRhVF6xdWEn8paZVY4Ho1szibV8nSpiU",
  "key18": "3zwFkbgPBV9DM433or1GQmn4DRQVyasQgNVnLsvHb7x2UnqsPZZxCWcfvJcr6NbjF4hq8gqAQhQuwSBcT19tc89n",
  "key19": "5HYW7svSLtk2382EeZhbEP9zVFwTod2RS5agPSzhXt2GPmMHye7Kr1idTMTtmDxhb8vYdR4DqgnbzXKtBLe6xWXp",
  "key20": "2jCtH5hpLBy9YtBB2z1w33sByFSfEPAtR9YaGgUHe5mZ6JN4JPL6Q91qRvbYxLfqLi3hMspfK8Ci4K5q9HiTfWCZ",
  "key21": "ZmZTfqEW5o9QVgrnnVCYFFMNQTDjpLe2zqcHwSFwgkt7wnqEkHg25yvMLyfhsJ4VNZbMNGcz3Qgk8Qsi8avqfrx",
  "key22": "31W5TX7uCBkXqB1TfGsmzkMULZjXRXNuvkYKiDJ9E4cZKTKSBWUrWaKTx93LAM9tjemAWcchLDtdmFDsKuTs4jUp",
  "key23": "5vVdwHQxHNnCsGywrfx8KpGZhcF1GdAbx7z2q6avjSvKGWgviLXHs1NQtU7ugD9zAS5pRqZkodAVnvuzR9kGjqYX",
  "key24": "4Mi8Gn2SgbSb8PJc4Qkth43bm1SttYNGszVx7Sd636eyDuJPN7DUiAzXzpaqukFsD2ZC7ps7PWThiAG9MPHf9Cu2",
  "key25": "3tdiQBK8BETnUvY25cihhai2z3Sc5ktmpUigTuWyLHMH74McNmUnspGTbCP53TvyxbdfGzdJoCZdSdxYpPE3XMLC",
  "key26": "4QDzo8kDQJKG5acJ8dgCmc9qxdjW8verq5vXH5r9LtqwmGHXZ163re8jGfpnfLyjgYMH85JGgvbNT3jqmFPagsTx",
  "key27": "2GwZHsk5RzDnb1cG8boKG75dzkz9sViKWpwx8Lop8sVpihtDp8wxXeRm7fjUNyamBEdvNKkTndVYRvcPvUvjeewL"
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
