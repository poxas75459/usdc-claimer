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
    "2xsvZqzVxxnyvAFV8c5KHHxMc4WAm4csiKXUUCWHov857sWw2Xm66ugj3tx81XsxiFtCzHSGq1y1ZaeT2KEbWEKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9S5VicqxCswxkhCRfxZXsXwnZR1vGS3ntEi9xj3sNCxinDVT6uLsFstD4vELGkptySLJrQ1TTvBpfMc5pZ5v7p",
  "key1": "4JVj7iFWX5rkbMwpqaEQ3ZQjqFe3T2RZaR9DkQiiDJmWJcJpvznxnCbRMTU5zz18gzx3jaBbgmYfsqnpcQ8Bo8xT",
  "key2": "33DMGVAKCcGyJVY81jUQVWhH93fQKGNhk91wBmSoLL9RDFQMQnLmcBKaLJ2auxWgJ9NPH9KmbpTsVooWuavDTCMY",
  "key3": "2v22dTviNfcqFWEh1oBLakn4N54b6hcpS6ZNPD4b1C2H7jWWuvWDCGaanC76yzSQnkTzsjoRQRmPSGnMfbWRTJGM",
  "key4": "4ctWx9S9tJScqMDgo6wS5v9MP15ccxTrZq2XF3gWBb5WYE4kmj15kHF1STzQANofwWHB22ivdjMdjNvwoGEbBDKf",
  "key5": "27NM297J4Q9UMHWRmrdn6eGLtdXnF2zs3deLeqehQdAUrfg4DENSMzLtcSct2DhA9PzFDGxMtHrXPrfX1SY5mpf3",
  "key6": "278wNsD789f4gGyn27d29Baiz2X33NGXySiW55xCKkuZpNqepwudHkPvJLigW6MBmwR8sMUigm3Whnf7A9fba6zX",
  "key7": "39msLG89hnDY7gXAkPD4bPbcJnEsAh3Epff2uBPifFcf4Lkz3YHWttSHrPntv9r8Q1211w2XYxNvpD8habLuQGJJ",
  "key8": "3UYHFzz7RSYnaatfhhhqn2q5vG9AbtKK8Nu9Gm8YoXUUHNzfqjAMd14EUrwjEdyNk7oLbeqNGM7Kiq3ezAmpeYTo",
  "key9": "4xA2smrrCbYYffwEYtdyUWtBskjuRuARqdjEejVGBjTvCViW3hXR19Ep4wRbi89YaZS6PUpgxQUoy9SHeSmWfsXh",
  "key10": "4BUHyoSGziSayZ2E3knPK2M4uNb1zDN7HgqZ4wJiDnoUR6p7rF848oB6dfVWKBBRAhcwzUE6YJZLCC5LBLDtoYDL",
  "key11": "mhu8xNwrXqoJzNGjBDxWzF6CoXMpZoP34dB9yCXkiRJ2soK3vwkbgqquimb5tCxVucVacM7BaFkuzdXBGcMcQPe",
  "key12": "5gBXT7Ho5BtA5DdkqqF411pkZqEvEro3iGTFoGjEE21zpWH7d2taazb1crwgoL4ig89sxJVHiUgVgJFN289bz5MM",
  "key13": "wE19xQhbZtaaoEB8yNtkRwMTiDujjXzRxrcQV4TDJmQjgvoEq3PQjEWWT5HeqSNPYygMefhuc35vvP5wP91HNix",
  "key14": "3Qee93SmN3gfSN7q864XA2PP41Sbg7xWCtDRXgggMUahy4qcS1r4vnSK7EdxppXzt4VmiPQ4c6GbKxSX9k5zRQHu",
  "key15": "2dnmQm9vs5xdaE3PFnwX15j3crmaLxZDhTnBTXjGPg1n55NWACPA8gHKMawfagT6zt4is1TpeMRFVei54yoWV3ky",
  "key16": "2dmKFZfoWn3X8f1xV6wbpwfvQaDkuTvQNR6K6aoRnRZVb1rP1fRpj5bqfdFk7veHbQT3N4pfiu2rcVc5x3vKPPJi",
  "key17": "46dxGokpUjHmDZmR4VQt43drrwmkdtDhuSNHFGxCMN8qM6GyPHLqf6sBbtzbioUJ2DgHR1osqiWiMxqs8dQZ4Btb",
  "key18": "4Hyt8cGkAhZdgskd3ZQnF5h6k4gvp2Ek2Qof3rDMym6BeqUS7QH3xg19iU9KYd1YYVjktmRVWXJqvtPexopsp6VJ",
  "key19": "2M63FvJAAW5CREcbSYDVYvc3xJ4uTYuqj3JxsFmxxPokoDLPqpALtc5Xbdwv5t8GAuywWmKh5Vyth9NA1o9exEGB",
  "key20": "53GiuMgd8a56ruhUvB6q4pifR8xwVwrXP5xRawkmzfBYUzaWdE3xvWrBSJTLRhAUDGysKUygXDEDRfwyACqdJxiJ",
  "key21": "494f5DABwcFygnFQt6zQpbaSToU89V2gqSeQsaAyhfMxPgk1tKaacjYCddRbQ1nHJTf4T3pjVPam8XDJLKyTMNMZ",
  "key22": "VkhrWJnyZEjG24VxTHn7TjNJ2wxtWjBwBP4b67yYLgGT7rpNF2uenQRPfhv6ZntgdarYCVkQ8MsUXYnz6gfNHbv",
  "key23": "3vmaMSe3Gz2UcHJe4YqGk1KTp5uzwgwsG5WJCQ77vfjJF9wEXD3Grg8pbXnkxqySHdXTh4Nh6AR3S6YAfwXJQS3r",
  "key24": "ypLjuh7Co9evELPfBEPGdTeWUeTkWo62KwXUJXoAviAGWk75KPX75RUh4vfXPbifZVEtonG9dRKuTrMTxnSVhBg",
  "key25": "2R6NKiNS9mqmo2HaytsYRyVU6pzTcRJUoVUQtx5jYmrNigzHkos4Q9rRygEJRfDF3SMZKEb7YFwAUGApNMjhiFaq",
  "key26": "5Av82tq172Xd2pGgr9SafnFxXUHBjutiPR2b2EASFmuZBgrsmBvTsxn8dVEPrWorqdbgKcwgp3h4VerUubQHGcJK",
  "key27": "DAoYv21xt7T9cEaWLJwAXqympqu2quQkCgA9igtdXjA5FJxpK4cPsXCa1kQJqvsdZKbmqqL4hbu7qaRPWF4SszH",
  "key28": "4g16c6AWKSwHMGRUevUkykow5E5borpkrMExwLKK5YioVnjeZf1kVBdf4wvso6LPt12jJZNXz7v33cuowMYNtRHg",
  "key29": "57rCdRgiVya2Phb3L1iwtkHWDGs7GxhqddF7FPWf9WYwctsVhntprFc3j5VfB2wg6HfB4DnNEjWKsE8CHFmJYHzh"
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
