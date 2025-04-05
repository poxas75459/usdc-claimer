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
    "Rixb7rjz5Y1kjNJkdrMuiU2NyDtQzZHKfM63ofFiSrMKQcBK9qokKuQPmhgNooNAjnKemrxe6ytnWp4BSWe85Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38bkbwkxUystZY8wWSAAepRdZgRcMouJ7axETPydmr65t23awtHDjcRDrLVDPemxsjDAQqY6RMAUKZdgBLAgfiq2",
  "key1": "3CREnDbZ64CiYKkjPqdfutqvzsttfccLcmeG9PkS887BcWTpE8UusKbWoKVVrAifVdw3CmnRwNQRYKN6DpXAN1b6",
  "key2": "2hU3A7e3XFcQhRPisCCFS2DxY7cjB91evGsqkseHCr9MrLsBaK4tAd5y83uQDzsjqqLGwyNju2KFUYHtAnP2wpzh",
  "key3": "5vcL6BVwsUJh3FaJ3ci2ReUnFAuQoCixZQdtCr2wnH4hx6QVK96oMoXRrRsaGhXfXANcLsYsqRbGjUiiLLUKWTeB",
  "key4": "5GS3JwwimRr57pC3bZu1wQTEoaD8jjgWqFnHX7K174NUZZUpiMiDTgJsk4S7SCQVXju1spRLXgNhL51fGJMVd8o8",
  "key5": "33Zec5UPtfgHSgG5GS5H5DF6bVxp4N2vyE2F8gSDWJWtmAgwMNvD6fay4siDwJM8LMt3KuR5Zmxmz1EERLsofaFb",
  "key6": "bz9BLxP3Q7HLuAFYeJkxzA2h7q4ua3Za8zSUceVuvwmQekmBC7eVMGh2hvPMdquAavFiyKYUWDKo8HAS1fDDtYN",
  "key7": "2NZ8Y93PfFQ3otTSvndk62PC1un7QXqLfF2V8mGKJkYHNGi3LY1ZsQruLbA5TtnLxVhfPhibU5Rv7QpeeW923sP7",
  "key8": "5NEA5z8Z3qvsGXPRXWWEzW25btcafAzZj59Uytb8FxePxeKJLVd65rdqnn3Bt9Wm8qjfqQc48gqqeWHhWgAYtK5",
  "key9": "5VNbcipkYYaMzHuX7ngkw4zHzkf6jdyiC79BFdrGtBWTYYbsAL2GvAWbnk8BsWDxr8cxmTTJAzmJ6kGYDAbyKPYs",
  "key10": "3c9zHeJgYJ1n9US6ahK85CcLV2qH4ahmWN6KzpYohDy4mHB67eg4SEeoTx3XsqkyEdsKVsTFEo75dR5U4wi312mh",
  "key11": "3o6DnDcHF2RVJeqcsiudyiZvNxTXArbs92mQTvrMPbidVoEwD8w3kFE4RBX2zwvYAd4yXX6RS3sUM39UhVC58Aam",
  "key12": "Na1MiTKkniAaTZq5C3fzvuRzTQ8DMQDSz4QCXgoLUU6b39jPAGBLc751M7M8hgmhitUt9VPGoGKLQdYX55f6C9Q",
  "key13": "4LNf6SaKGjzEZbtNUjoE4ftAF4dN5gGBEPCUkX1yDM1YFozFGM36WUn3CdMBsCXHVuvJknCkCNfWw69u2wKHDaX",
  "key14": "2TkPFUE5staSnX7ctFoPYMgC4WkpHdeBgduQGkecezHANv3Fo2wLTM3c4AYwbi5r8PcoHCpnvbFW4wWNrj3uFJ1p",
  "key15": "imHpiETGbTbLxs4o6GaoUoduzADZBJE1YtNGGVSkbC64x5xYwR8sGLimCTsWRzqgAgvnY34bTRL2jCC7pAsZrZX",
  "key16": "3pevm3jTwutS8NCMENcM2nmboZ1McrGrnz9DyEYPsH2EmH3UrdjMDoFtgvNpbiRSjsxKyq6hNRCvcvchFma1zTEb",
  "key17": "5ecQM5a17ZQhRs4wUZks5yPH8zu45fHP7oMUi2kZSvDwm7qcdXaC9AyL3AVBweKt42fj6jZDwPvMZXEqTxQkFwKM",
  "key18": "4HSxzw7CmrHruGD2te2Uwg376BoKCv8xyaf4WGnvFmLajoCtAdh7prVpRVhuGNezadTK4UdrSgXdbVd72zXjMQn3",
  "key19": "5y1wugSyk9ugCY7HsXMtx1sAd92baL7ZeaMe8cvV8Wved5UPWzScUUoUREbs4V4NbRgv24T4tiTn5wSiWth7yMvD",
  "key20": "2fyzFTp97WTYDpmPiidd93bXZHRx3STKF5QXphvhfvu7zzedcQcNC2T5MdbiauAmv4frzMk9r5psEZkyRqjnyNGR",
  "key21": "5KTHhwGtE34gSgAnpeoF1bLSfLeGq2FFVDi8uzE9goCPrsyQnpkfR1GvEtdgX7UHnSfoAfBXZ2fybNfmJXNCScrE",
  "key22": "2gCVqR6Jrqpxje3C8pHnqcMSFXpTEMhnyJfi3eZEYPGQSaceMd16KH6HACC8Gq89m99eQ97wZP4BbXZpQuWwr3Qz",
  "key23": "5MSYQNnxG8qTu2MB2RCA4saGhb5HxKFzyVNpdbWrwVP82zpxFDh8w2gyuPEf2Q86NyydYpZYQHNJFXmTvjpLbZGi",
  "key24": "3e5BWdP6JBjBnzGZnjrHzdojUxbGHHpbBPwf3KqAcYAhHRZiMe3MKLyTtYEci1riCBECj1pX4s9Qmg8fKxAF91Gv",
  "key25": "2gPmLhbVCH4X6aNBN2VNpkm4N6U8yg6aUQtLcxPbptMd8ngm5mfbCVawVpwseWD8rNEPcAh2W4Xq37cHvtLywN2M",
  "key26": "2Eg4mL2z4uB7iS4QvbXdZbVKJ34KbKPVRvh6EoZChoeFviiPuS2TRP8B3hEi5nsz9PdeK6hjaeNwyVKN2wqqpDe9",
  "key27": "Gq3d96kWjW457jHiZJomqJBBEmdVLqYrY17TZ6HCC1J6f9gM9KnjqEDCVdLj8a5QiCW8otpusg5fWxWLVjuscNo",
  "key28": "2KfczypUoLazeCrC66p1sRDMr5NuPUq4UEwqAao1YNZKMCWh1qveddzrr6JV2B46Uw9Z6FTHN86xXBP34wU5FchK",
  "key29": "6B8n5x5bBSNTuyTD8u9YQntJVhDbajAytoWYvEsgj4tRXnUCuXMfWqy7Tr7Uvm1e4J4iEVM7gYN35UUtLkuY5ju",
  "key30": "Sd8QzaDjhmmSX4fyWqVqPPiZkhm8Mio4cpv3iJ23L6Hw67vNvzTodgh2ozY83jSwo2xuMWxtBWCfkJdfgJjfUXH",
  "key31": "5bzDgSgVpMWGtzJp699xnC9mMsKKceZarZW6WaVcH2Kv1zZU261MCwJc6mTAcScwd5vDPtW8wXt8t1fjPXnfzhk3",
  "key32": "bdpYqmJ3vFKT71ADmqx3KKNxck4vZErWbqfsMvxLnc7CK4gkKp2tEJTZim9V4fLM7QK7rggfFuby67hAoB5uECr",
  "key33": "65fd3Kj5ftjzexMkN4spN2y1C4FyNwoXPmvF3P3Xv5PQNovhknBhkJVGFKBQszWrPGvZDmpdTeWRBuGUrdrb3QGt",
  "key34": "54o1PnXvswGvMCdZgjckJkg4cvoGDNVSj7Qw4qBw936kdwfEpUDK9uY7Ja26qfwoPRhQQ1Q6SWLpQoZsCfBL1dFK",
  "key35": "L5DoBniX3RjHiwSN1axKXjLfR7UKHv33hYgALrxY2xZabDAXBSeiRPMRMjspuazf91JLdK38QJheTY9yJ8YaFvc",
  "key36": "4hvUPHzoeCLiYEdMC52N4u8vvfnj6UEWGSkR1ANAVuMN2X5ZqXwFCQRo2McFULNRqE4nPdeij5qsWbkyWvTqnmoZ",
  "key37": "2A3ZmwW2ypQnZoxp4dNqiF2R1QG7MQFPuiqVDAmZCtY99qmFiA9ETFQ8z4yBy1dmHPabpYHPPe6izpXpb3tCDsSU",
  "key38": "DWmuimQfbfkBgSp7wd1E8TSSjcPzSdu97hS7b3WviMfrg2d2BfajZBgxmcfveLrbLdM2PL7KQsUbd6fsdyteRse",
  "key39": "2aFmCwzZ1UuA2Yp3cGgdZaeew12ZD2Rz2efGGBrm2h1zdrJQn64hqvApobU2jtzWL2MseEEDBp8ch7VRoSRNV6H2",
  "key40": "5bWzh4GoUQ9SyTQtDb5XL5FYRQnLgWXC8LkJdxqwnFv7PCAfgK82y3o63gTpP1UqFnMEy5Y4LvYU71yPKmadkEUW",
  "key41": "2xGeaQ2jHFXxJ8Pyj9ELmmcM1P4Y2oXqWQiLZ1YuPy2dc6qpHsPaVJKA4rAJYeC2jg3AQiZzs4R5zVQRJZZZLCMW",
  "key42": "3iTceNTqU6oSX9epN5iE9B5Q4pnXdvezwve68KkLD5vKP22M2EzkMbgXh3pVzSDe6zxCSWx1xA6wdrS7zabtaNHy",
  "key43": "46wuWcKL5kPyEJKPV3ehwKPXf32JSUKNQa9EUPN2baq5wGar1FN5bwmnGAihVHLQ3FbM4WaACbpPAdz8p3ssrQ6Z",
  "key44": "33DUjPtcTN6bfecs8YaqBCBwoGiSjBxFjT9wkRF8KQwYwVYLDevYhN2pMvoCVozWvJ887b8EkGQeC7uXotwp21CG",
  "key45": "4coLzPJ4R1m2rMRVgeqHabdwVDJ47eLiPAcMmjLw1MirQ8EsEYxf2cZLpPGiXZLmnDdp8U6aUxX1Ws5sk828gM7w",
  "key46": "5o3t359MfB7cTD7X3DEGRVpwEPkNMgBKLkFA57bGFFpqV73d31nij3kaoACQDhgGg4Uko2WnE5S4irv4wD3rA5P"
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
