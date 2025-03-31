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
    "2mgSZrCjN4eSUZq4J41gMpAiXmwe2C3dYQR4V4U9EMeMgVs5nmDAXU34DXENRNSzRbu3uwXb5fKwCkunKZgjKn89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57GiD2n5aPdHzzKRChwShNVxLZxuUeUaLWyJZVt7yqgXJ1bCmXZV2tZy2Gs6VijE5b5M25qgy9REvMcnaPqXufVq",
  "key1": "fMs7ouS8StL1jqTxvpxogT8xPpspUtt94nD7QNV71H4SjqXS1bZDka8GJnczMHFRqcfd5YefMroLZrcYCNzWhb1",
  "key2": "4PC4h1Po7GRag12csBidtyhgJDBnnzCqTqi6ikUaPy56hXBMkmpiZJCYJA1nZVd4EsXpKxcaKZCeuVr56n83w9h3",
  "key3": "26GQvTbGnTVjy5smYhjXiVZHVJy9UxN2LDpixx5xNovUAsJcnLdYEsRqLwtgBt2gEHDEpEbRczRu2PGQsWbsxVg6",
  "key4": "4NHaM5yer2UjEULcrAMeZE7kAqTZDJ49KUoCE9jx7awHzF6ZRri6LCaTo5SaxYWu9PGfVtqPzYY7aJXcj1hkveSL",
  "key5": "5mJzPUziiEYFrEgFPGtw4SEcZEcyferLhh5eJ6PGUEbVRsCEBt8mEGGz7vCuByQXnerkh1c4HqN4uXx4XMxR5ogM",
  "key6": "5nKhgssdj4ENz4v5QGk3FyU57T1N7jsmTqqwpzPHaNZERzED7NLbnuFPn2yVfeRMxbfayYKCFmUy3RXkanLvNdCA",
  "key7": "3JWsuot3kBJ33zTbSEGvaw3Wh6CJf34gAQkVxBeSnK3YxwqgVoJps3aSbgBDtLcV7eAF8B5zEWnfdo5pSXzwh49j",
  "key8": "2QcNSsk6oEiYo7zFEq7EZ99ofvtM2CX6wFvn74WQWNdke8GuxLqGYzSXcGM3q6pwRvEnDs4DddtH9juxHfFKrbDc",
  "key9": "2rSt6vkKxFV2pi6MTRCku99CQeZMLe5wXJgyHWYBZo4BbnkowBW4qbnVqenxy5eHQw6kB4jFWw4hUujh8rvyiSyR",
  "key10": "EXqquTLMihonNgy4kd1r7uvBZ6nvD4Gg3es2hGiKMvmAvK5AAoHMtC1ZxVpbNhDNJKn52oDtRYWHWFSCRceANLy",
  "key11": "3NDa5hFQeZ3aDP1dpEWDwA1JRAJfjqVHKrzAnT2ASuKAVPo34D9YH4Ae2DSAMERGvug2HmWNXCNZhM167KdcnUz7",
  "key12": "5mE4wnEvawxXQQZYPrnSvfDZnjwXtU8CzLU5x3cRbnBUiQ4u8mjjQknUtV8voZE1zefVEytabLFX424C16RvsEKq",
  "key13": "P9LLQMuT4Y5GVWV7tdf2nSumjqK6ywZCzTZYsUt7weuJ84oZGHsQFjJ1gtpvdjX6TXs81wMMtAgsGXGroDBs7iL",
  "key14": "4r36VrS3t4uWa9fpVe1ZBMLB7hyFSUAxodb2ubYHduWQaTLaXBFNPVwfDphhcwdC11LbgBzH4iA5bdyoMFSRfwHw",
  "key15": "5EVDxFcktgNmDb3jaurMqEZmStUcvm9TYHQDLR5gF4jy6ucbVFnQVuzutePKwTpM4QMRdX2hNDCpSXkHKLNj2pv6",
  "key16": "614C7zg5gyQaQ6iSBwTE5RZPbmSr8TsZ8LdSposXNqJVPi1CoZLpCitM1qEw9W6Knv5jpsPHkV4qEFejmrfY8pbv",
  "key17": "32PWaRjCKaBWUen3qs9DNQRi3GCfCWpzx7ugqN5zFeN6PQtbtRyuKAwqHsbuwVLjTa7CZfrm8e1ksUppCVsFNFgS",
  "key18": "5AQQTbnQFpGtnaLz1RGDpuTxZHPt25yTbwbvz6cMDBvCKAcEZyc2WvRyxwGmPRtnQcM6B5nSmPm9adq1hVZUZrbX",
  "key19": "4QVB19L8rF8RPtRqVJzmtiNYNSaxbG1kYTGde2fdRdJLpx7DzZTQTU94vPwCiMoQp5KbSM4AxPqUQngeYAEyBt13",
  "key20": "65Cg7zbrtZ6Qm4wDvxmNTk9TqpQ8fYGbkYxsQZQy58tnbiMgz6frjuExHyDVzRbzSnR1FF6XScKSAMJRtzRVeQ9L",
  "key21": "5ojoVN3D6tynFqj9aXqHAaiVqw8P6bsR4gCfMM8vsqgAGGYGSJRmwfpChhAXC4TMK2KC49jA694CGfzk2GgqyQto",
  "key22": "62P5d2WYFvrnHEx5zeTd2jmxobjGmMsGHajbZo98EkUH9KE5rVvHoxEoC5arCv1V7nxCSp2kys3X37ra1kAEsX5X",
  "key23": "Zvbb6jTWPSKLKMhCFAmbwFwRsLG49krkYQu4TcpoFLPjvk3nYyyk6j5RQJ81ab6vXwWXPvfqumS8pToAuVWmHP4",
  "key24": "5cCQ6h2794uy4Yke491rRim6PnwgxfZn1XxnxmRc66QYKxfBz3wgkAFiwtKyXwKetBAVxbWvXshtDQx3SfD9bMhc",
  "key25": "uN4ms3UfYpK4KA1izUisvoxw5LEu3LUW9obBu2UEeEvZYqz4H3qkN2yLgbzYaMC34g4dx4essoDHgbZxQJpBAVz",
  "key26": "5RY2KSem6MuuuiBD65xNsnE6QHFseLVhpXQfjm9QCREXYVXrnbba65KYA59EZbEjSSpKxaxRcHFpuvrbSYHjseHx",
  "key27": "oRscTvTEzU2YkscLJtnKWTREKDn1J43bUe9sM79ZndM3onpT8wWdZniJpeSBHwD6jbDpnfrmWa34fEqzg15ZtQL",
  "key28": "5C3WDtQkDZHq4MNpzBp3Xsw89aNcgQLQMESrLyXWGMzWTkkLatkurrgBKdwejsV1ndtwFtRvBC4Ci3UMkXUdxCVG",
  "key29": "3VKmiguuJGwgm3Fy4BtGg6Cd4sKXboTEsLJN9xx6PmvjC13Xy2ZfmodyK4Sr5riKHzgC9A7K3tQBuAGWJX83b5cc",
  "key30": "3oxw8uQfRqMdsbhYtNEcJeNGSLcEGutNyJZnp1uKukyGQM6DkjoBJ4jCEtfGfCvygy9okLyqJhG7aAsEDmtedAxx",
  "key31": "3Z74UiWzWxXwWaovHNSZU9W9GaUG5zyEnyaNusUybpsaZcWsjdEV7s4wQrXkM29oSNMuS7rDCH5rL4Fs6DRnGEVw",
  "key32": "46PvRu5Ymz4hb1tH5fXL3vDb24NHDsVm89hKZdkETviUB7btbBfmqRSGeeboygZVzb1AvDJ3owDvTJUtiozLFS9K"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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