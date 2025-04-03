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
    "65DjZnGsBxxZLEoonYVVPkHLKLEA2G2N5CnZQxQaMGMaQUFrgTUGVnxN7iAfoEHncrLYsmxCqMBMFdVtpBhdyWj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zz2QL9G16xQAsE7m1htpk6zrpGMAYKf9d2aEmWZtJ4vKbe8J6faMKv3Edy21wHiE2G2imBjeCpjb2qvupaRnAA9",
  "key1": "3vxDLei4RDyPgx7u3i8AaP2CQNhpCcAUYxobR6S8TbHuFLy9ExrmWGVH1ZvjyxA36Nb1AJPfhfRkZL627LgTpjPy",
  "key2": "31Udxg2kvjqaayLZ59DwstjMph84C8XEsnGJdgUwnjadtj2iqiVp5PnUBQfThgZBmo5biEa7XVVEmLWQXhuptya7",
  "key3": "3TstLpic36fJ987mL8Fh7VFseugFKcanEUtwSpZerY2xLhfct9QZDemvRLxErWsiuNTYsXzgFpWotmBmfhx8g7JJ",
  "key4": "MAhb5eP41i1XLj8fyBqEchM6zAdgXK1WPcP4Xjcvd36iWxuTfjyRsJjP352Mtsg4N66rwjupEWmwTrndM7iJR5a",
  "key5": "4iZeMBwhFWHi7oEV6L16GrFeVEuMJuyrEPdtv5gcYZX9a4LmggxBBEz2M7QfpD9HxwCTccRXTeKneTrE4UddvdvJ",
  "key6": "4jA4hdTvsYeMmi53KjqBc95br4VDDnj76uYopbBmkAF7sbFAUb3oohfGAbMjrTChW2Hep9FDtfMCXvqxLKpdA1oJ",
  "key7": "bUPQM6hyBs2tof64Jo3Yobr3EZPsEXZkEikn4tJabBu9LMicU6vXa8CJ4X4roQNVjcpqmbDDN1G5YjD8oWtS71x",
  "key8": "2QTMX3wFcyvRma4FBEzA9J8ar3WcrVW3S1knWJbJ76756vfHaCBCubdt8gJqbbzniCtkjJXd1Wi3jQ9De4Rr9oUq",
  "key9": "47b887AwFrp4GnmUumVkzvbDSpBYc9BHf99sA7sehD25JdceBmi52govP8So6U9azXmgC2RuKT7SL39c12HWbeDn",
  "key10": "5ZgmxgXEdvwtNGQA5qyEe9WQteNBafpZudzf9F1tRrRtJTquEX7tS36avzKascnz17W5vgqkgnRFf24YsUxT2VRy",
  "key11": "5NMtwzsdjJEpHAzV4LdJeP4QtiVYm2zrimtBncdp7bncdeftFvt9vHRg5VYc1bKX85fvgvhKXoqBt3G5uNTmCYn2",
  "key12": "5vnx38eJqYmiMcXAWBqihAnWxVpPrCq7AYey2VLYbmeFwBbEyJiZ69hwktdtbm4tWmceDZcz5nonckrqS3Z7kqrD",
  "key13": "34bYeyiqD91fjoGbnK1EQvnRHiChbfJ3uE7cZUBXdopxmpRXqnpmXGEn3mM57mSUhNEABaXeiFpZrQMWwELALWsi",
  "key14": "2Ppjt5BXych6dYEdDDNbnaVCc1zMigvwhFAacXFJnmVyaRh9y3c2bhfGoHYQFpkXW2tADZ2NeQThnnisPkwMrqfP",
  "key15": "AsE9h9WtSNj95YzuLoZGcy4pjzLZvgQUfjvMidMwzZghd3Ln8qP5vAEdq9V1mi1Hcohj9AXVY4MFPh6Jyd219G5",
  "key16": "2vYvits7Q3pNThpe3Qc9cwPvniC3y9oHpKZWfGhA4yHSPioz4hU2XEvugJfo8iUxoHHUUhKDpUKx96iEQsNnBjqf",
  "key17": "kgVVVZT6nkChkMeeEEex66p7mQDEe95SBEV9ZvViWGcudNk9sF9zzED8kU8nurJsdJFvUQY68FsK8uxbtFwtJwt",
  "key18": "4bWonkSA5eQhYjsokjLBGiC1bBmVkRGjX9CXTgKtD2rS5YTfWs5m77YNoyaNmnNYt2BTPbEPK6XYbQUDLJLnf7ga",
  "key19": "5xGRZbWD4TZ4hn6VuDmu8W4ZDD8HdJFqMfiUBE4C15Mv8yi526Jo83rbgDSfND7t9xqKMvS2TMQ5e3y7kmz1u7EX",
  "key20": "3svRWWA1gwfxv9FWnDr8qDHssE8oPzyMecd5Y5jMbB4MQEPRXzvrNnGS4ptStphyLvwphNLSYCWp2J2ytksGV9ze",
  "key21": "2Lu55HWe4Nigo6aoQ9m3tjgXcFmUaopcHeTpp1K4cjxtf24ZjSmLcy96azUsiPyaorrefck41syussrs6874C7p3",
  "key22": "5n29p822KcHzq9HWcw8RyYQt2rhSwv6wAWALXYUXLxcYtP3C5vbF1LZigxmN1bBRHHf5D8F6oRZY2E7dyLf1GuxB",
  "key23": "2KgGYPgcJvimJhDjMBytjL7UfeCJFERGMeMPXrg1WMSavfTvWjQxMi7kLpjm4NYMpzzgVmqSey9WEJE2LwzpqDP8",
  "key24": "5eGCcRJAZJsaBjTyFy5tmoKmWfCPHoGvRmHCgUTvzpL1ZkdSzgZVtmUtusT25MBziCpamm4cSDMgRGw8wMtuJQW4",
  "key25": "2xtLyj7dtURHzH5FjqVW3rh6rfY2KccCuCPdcKSg2Rx2BRR3StEWAisxEE862bLrf9s7iYmQumpV8QvA384at3d1",
  "key26": "3dyhTnVcSGPK83aaf6bZRDEJibyYBFauo8wQCN6NsnZgAbucRjggXfAma9QD8K6Xbx2Bmzqqq9FePAVTEDouYmFm"
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
