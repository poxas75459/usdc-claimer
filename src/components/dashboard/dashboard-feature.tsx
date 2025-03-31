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
    "2ajoiTK475LJ9tLC9csps85UUfpYaAAkZYBRzj3hbviDP4uJmAL9zaHqAHxvyzshfcaBVfrNnMQmfRSTaKVKCDyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3viFJcv1JS4fQ2PXyaqTpUDuRHURB7nk2ATzve1LdosX5GZd1qH61xU4wFu8b2CWTznHqM9AbaKpBhyNXkAbihyD",
  "key1": "4UVV3E6vjd2Y4t8YVxPSvDPCpuoKZ6MkZp818jbvb3fDeCESiajS4o882nG2AjsqpnYQJnT8ef9iK2sLNvPwnFEj",
  "key2": "5A1bCh98N45RewTzK599NTeNHJ16edYPeT4GLk5SiTjwomNz5zgHk42TzHsqr8f1PLCpbCrdKPGgXF1FyNn78crs",
  "key3": "ChppewpnnAvqTsqYWi8PB8Ryv7nUUrAUvZ8pstrrAVQVb8kGuY97a6dN4s4626sBXWGwiTE1ic9U8kHNkpEH3JR",
  "key4": "5Ci9oPXJKydo5DcBhKbtnZVnQBEHXKdT4vZ3mdZu2YAUuiD5gfg5AK3Cuq61dkceX3wKto1TPZPzLmD9rKNWxoai",
  "key5": "24Hk3CRFGqXhFT4Z9htUYAGfjaM3U9Uvg9DACjb3ekaqDVZCFr74sCVdbYfByyChb2zHzCpLJoyDdCsuZ4h26upj",
  "key6": "5pRAK8dCndg13kf8nRXngGq6oXNT3vX4QQgy1D2wsHEVKTveZu24QTJKWm4yHC7QACGPRXrkpSZ8KLkeSyRuaDR6",
  "key7": "pAE796R62BTfhcPxQHy2DtmT5cYWTqBg9HJ8M64gxxoMdVwt3BJLaf4GgMSAgPx7s4oaXEYErfxouCBXup1NoB9",
  "key8": "Ff4bgGmbbc1XLW674VpcdDmPSt3VjpMD9RrREDs1XsLhqKQcEqb5bodiCqYJFNNVHuH1CrjZwJ1m82YBrouY4Ng",
  "key9": "2R4PcKeR6mLyr3g1Kt8GrvNZfWTRhZcg6HFRH5d2tAGbifFp76H13u3cCHhkmDcLB8uc1AhnmYuMcSnS397fmchp",
  "key10": "2F9PqfnJc2jpvER5osmYTDm3SyeJc8DfihDQS1CDRtZVkGVHR7asEkdYvTF6VYURocu98qeY2L9sMB4UCUBcWaZZ",
  "key11": "3F5pN4AZ7buU4CGXWpSvoLuQYT9p1qdzpSbfuCGwc1BqN2FG6gxEZB1av5tS3CQ9sCtN4tZJ7SoQ3n3R5SbegtEc",
  "key12": "4fKijC9yPE1SGDLr6kqu4Dvo6z89kbnzVpkKipLbkb9NdHroFov95wCrBkEP3vxFVEHYcZmBf3Pk8iy4izB2YeD9",
  "key13": "ZQd2TmDjQt7nUeou2muN3aNkapiLcSzac71kUJFbwwCk1beqWKguQjBsunfQphN9rVmvTMvpximc3RRnoMU36tZ",
  "key14": "3NQ9vEhJJfr98kKeNUagVeYhcfv1yT1Cx5hpp4agRKA9U7e3aKxhH9ynz1ifTA2J6AvmEqYgM4BzZxJ1YpGkmS2u",
  "key15": "2m8Xhr57da14CEZKikizQW8w5WLQB6UEj7KjaL9SEUdNWyqfof4bP1mHmFCxmZ7aPPw3hu7iHeczjBcTToA9d2aj",
  "key16": "581q8p4at2YomyxFKtbv5acdygzfsm752ygbte6KvXGzPnMe3KPuAwUFfLQdLHEmRjQe9SBgiHR6A5LuWSHcd3aR",
  "key17": "4wf9WXAEvFye8xFjzRHjCSfAvfidPYqj1nj4EB9334PnGdRD86YLxM6hRV41ZHVnb3F15uuejcidC1qQ5EV3Ukob",
  "key18": "4oba4eY9UZBcgCDARJggXvs895sxFRAStkKpiPJvjCC6ztA6yZ4wUxL9umsTxJoUAE3EUAFmUBsndRsiyA7JZzqQ",
  "key19": "4vibWxWePHKLtB9q75nUrhxShx1VG2PebSqwpCNmMZUt4yp2sCUQQ4as1KK4BezztAH3yoitS7LUmsUqcesVP2Kp",
  "key20": "LS3GxcHmaMmBntztE3QCsPbu1pUYNHfwQnLgbYXficpMMMerVdZdU98bLApts8Bv4P7LUMgBG7rQ3jDkE5bTruT",
  "key21": "235bttEFH9Y7zUn6FFkbTqTyvASuqc7HNHZmc6kztbXYbxVP5BHZvt7bsQ3b5TeKiFFAD1YEv4BudXiURUaZdS8X",
  "key22": "57KGo5RiDJ4zobmZvZgYhQH7JGpmd468DZSEguYobFrfjwi9zBGaQWy6spAhCYw3VCnwJYiuJKX5HgompCqmbQu3",
  "key23": "5Ywjt6cmWjcNZq1qREXaepJzX2s7ahyyp8GshJ8QsVmHieAZLKPZk6uAv312PeWEkyvkj5SgBoV4wSWtYepo2vaL",
  "key24": "2wru1ZgPvuWUTy5ffEnVcur8uNTjya4zfYA6k9LBesWGBkqqrwiehjdk1rUkPwXfkhokHYbBPegG84MZX3n13eTG",
  "key25": "43iBF7Ffp5aVidPfFunym1oheKDJWFDxNt1f2YrWSPHWK37rkFvdD7GsEKoneDMmdWxZCgAY2NitCeJ3Si8GmCPx",
  "key26": "129ryfz3EEzVPvfNFbyUW1ZZUaSW4WqER3H1s8J4cqHwNAiwV2okKym8TwvBC4soTUHv31rfNco9xva3adLRfm7j",
  "key27": "5bwXvZsRVZUG9yU1h1GoyKrbYeVQf95EpLz99B9bxGsX6yjkkRnidfRChteswCqSmyav9ciw5tepEW7LbqnviJeN",
  "key28": "4SzkHcsuzUYkwAQM63snP9JL8XYCmWZU2ZdbnxU8EZhgRxcWPxQyUxud54ftwbt7myhZkWv3ctkiFEnE6b14d9fH",
  "key29": "4qxe9JX8yb5UGAQjikjFyQBvRxp7aEmcTdSTJvB5qGkoXGJPyVBXbWdkdUHrAs3nYdmKBdiV78Pi8oo6DmjM2SKx",
  "key30": "5Apf984Q5GN4VU3Y2wA4yqVaiyhVRRk6RhBxSLft1tUYhydxBewZy2Pt7YrYn8umF348hw9cut3D5ruYjgWy2VSG",
  "key31": "spUN5RZRmR1hLMBq6KL4HrNoXsL271u1GufGykKNFoj9rvodmRaEn8fsLi6BdRkPgFK5yyGg76NM7wTAi1SMmRJ",
  "key32": "5pHVCWRkcXtj6vsKnTPHoMz1n3FKxkPFFWbeDrpMhETJm9gwcbS4NwAm2hiLAuCvL2PHK6rnS62q1Q7obYmRmFDc",
  "key33": "3bZjvBawxSYtnaVyCKqJMFE4hzQR3nKbLvsFPC5EbSZX6fxZ8jgz9FqPc2pw15jGtdMGiBhTFKzfYFtpwHniCTPy",
  "key34": "4FU7RyhmCYkfJ1tRove4rvcwyjbuuE4FrgKL8L78DVUPJSP88fBtT1xPS8r1kknUay9pHiCr818neR88iFEPru8b",
  "key35": "5VgBZ64UmqXvP34zLuMEBSEZEVwJpQmL2dDa6bNoEQFy1RPUkXggShEf3cZY4EPNTb2uhynTeKYYHjv5UR3jRjqc"
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
