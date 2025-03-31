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
    "2AyngJkA25zk5HHEo3edwdXvar4Xk56Bi2D1V2roG3N17yZAHDMP9HhxSAC9JVyB4KHM5pSoFHArtutxmQZNB2ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jy34WmsjrSLC4mWKHBA4CV18uLMN7jcrLDjmiPt1e9a25XtBd9coeYjHRegw8Y9ZNb8wKqHSjg69NSEkm36Nzr1",
  "key1": "5ea4WXSbBf2YaMhA9T2JcFACSUeN4vagvsBKqvjTrjdjphAGyzYpTtofZuvg8SyPDoxK8bZkLVe8SxyB3qBqzX3D",
  "key2": "33hDb5TdA61AK5bHfJJPUXn4DqBBn5ufCTFR1DdN7d48zXWZyRywPLGrNMbAbLQ1MT3MdsQRo7owd4QeR1Pfh6jB",
  "key3": "47gQQSwwqVGYgLPg6GcSVBY5SYwojzeyfQkbd6466Bte1kAyC7NEtMPF9iDhpT3tPq9hZcn91b8b1cvD2tbDiGJ3",
  "key4": "m2sxqp6go6F9GZFbTezE9YNXMUeY4aAvsVmWLVdiT1JbZasNhtuBKDriqr8TzjyoTgcTREj7xc7GUPEpt9nUY9A",
  "key5": "4ZMh2xkbLgmfmMABd61H1MqpaFknvXstmG1HKiPWvZNgTobRYN2BLJMVsZcyN1YwrkAtvtk1peAw4hmTcuWBWaNZ",
  "key6": "5Tk1rS3kmMtbuNCZ4kpFsFYL6NzkpNqmF7NUt7u4vexDikN8n91v4a9o2qj3hXrvKDys2StFT7aUCvThNLrrBPeV",
  "key7": "5Z9QMAswi3VLbcQ42yHpHhbyyrvoRBw3S7b4AXYiAXCypTgxknvb6M4yKiJeyaAnomxZuaTMjzjSpPKGz6ogC9L5",
  "key8": "438LZ4AS82LMquHpgYdQerJedhhyf3TwzV25GV6a9pKNLZKmTZXA2ALcEaqkZD9YkTz29MA5DRqcffHrqby7qHvR",
  "key9": "5seEfHgX4GFvzyabpneU5whEWc55NykkT4a5b69yiHYzh3gakCpFenJ4o6mXwnkHdPbbH1yWHod5qgWLW8g3aBvn",
  "key10": "58qnrPm3JQMoQ2crrMVdgCdVuvoZ9YaGkKru2wAyhnrEuiujv9FRig6bWLXdcJ7V65947vdz3zdRQhy1K6GVqcZV",
  "key11": "4zPi6PhbBLKdhMvSrXGS9wFDZ4z6jxh9L5Phiznhnu3LGFRBrEnfe1oKsHFA5dDMdafrJT2VMAzcASR9EEHpvGEk",
  "key12": "47abDrCWJphr66U5RiBiYV4ZZr7VMntzQ7WDS8KFeejgfNzqs9FMifr5XmeTAhbRF2jwxvNkYX6XVEwF2QWSWiu5",
  "key13": "24hUUmrg5aMghENzA9FJ2bMNmM1hvDq2GDBt2aWApwT85yUhMaBntrmrPLVhwXopm7XvLjT88FWgWf8sFXvWXBxU",
  "key14": "4AzRiyAEWuuLa2gH7RadAeZYPsgYJKKPtjGN1rji2tajDCMLtxNYoZ9rTKpcDiMn45BWLFhnezS15BGsLSaEUWpQ",
  "key15": "48R4ZgwpwsbgiTVyvRzm1zfUApmM2NNPBxCPXjn6X2FojNhXWvbU6CHZzWhFwYmjZKEtfaAQPdGT6sf2Hnd9VgTM",
  "key16": "3PEFWqm4d6oYFvsA2qrd4XjRwx1XVFmKoNvW34nFrtEzC1AtgMX5ZWW6DV5nmLPVCPCLApCPFbfjeGdes96dSWk4",
  "key17": "4WDc4k85hXA1ShEtUi13SoNuXy1ZjmX5pjJDagxAHabg1WMSP9m2FUsqbeVHVZYjMdAr3hmxMi13zyXjqkfdYt6c",
  "key18": "2F7smNWhQhSA5n1MSsYn2EeFaPthtiTTg2BFd58SKyEHzvTzsm6Uuy6GipKhuF1uEVvQNgmWcq3wGKUxcca8EHnS",
  "key19": "4P6Y1EQRLLewg1z9X3yFh23kaGLXzD2jXLcXGkKSCJ3dh65hPCKu6tH5gFnGxYFHFVY3wjSojxCTcuhBvnNhZSAW",
  "key20": "3XWGmvsCuDnAENR7obkf822NJ6AqDoqBexMNVd2qfjbRuYK6KetvTDhgDCJmVEB27oTGDoyVTHc3zjfyBKohnCyM",
  "key21": "2Z5pPuo7cR29xpe6DkgUqnrNei3UwGohqcktvrtbdqjn5nUHnjYJeZFmiYNGFgTBw6L7HRrCiq731t4JkUTuPsi7",
  "key22": "2P9GnFeLnvrZempJkCQT3SDzrPMPERxPyKDNywe6zRzrdyNyBt5W9bYva6a1zfUSjhizFQqopYHkQcCaVE25bVtH",
  "key23": "4TpjueViQSRx9VK5fZotpU9TxkDGzCmnuAY9VQDgrsJoA1Xw6Th5A9WpsXCukCofvghYQgTD9uxKZt97n4oaTshg",
  "key24": "3EfWpU3Uhn2CCaN7BvKq2gtt7JTW8dtCX6sTHRXgmJVBf3gHmuHMJiZy3172homnRP5b4173Hm1oGRUuvcA6ggx2",
  "key25": "5nPV77duJ4MjvPuPS2pYcyWY5UXExmGAKJa3EPK7WH8zkhbPEwThDyQtvdNVMJE6WJQKPWZypkDnpVrvmFcjQP71",
  "key26": "4Gbyp8PMxqEGNaSDZGwMiAdRRGuQPUsgbDRhtxr83r3pnTAWnKDqf3sU9am4La3QMLPGp1y2uxQ2TLW8KE1c7HWB",
  "key27": "3McdAeAJ6SvUZGEa6fbjK5j6ViaXAUqq6Kk3QsXKqKB7fxbE9EW32u9u3vSSSfKcY63d8QoECdTAXykyh8iEFPC8",
  "key28": "5QKYL7E62pvBgMj5UUggHJ83V9Y2veTXPvLLyRHrUBfCSG5JybiM6LGc8QjARbRk51YpvVCxDwYQnAeacYKKqBzz",
  "key29": "3ovP8ZEAxvWog8T1K8ipzgcZcayBwcHxwCNqNK2SeCVVdK3H2tRetTcv37MP3rHQgaAmgHM6sarTdHtgZbrqyLft",
  "key30": "3QLNJj4iTFsWK93VR456viiZKeYB4jrftpRMxzNidYjkChZjb5KVbWGXJSwp8gJ7YECwnseK8sE3dcZWYHouNsdb",
  "key31": "4VCDje1257Cqg1kpK84rKYQU28mJD9timrkbbgi5sSXjHA1ijqHYHEV5rpcnnR7ZRx9sZcjnhWLSXCqnwpjx7VzA",
  "key32": "5aU3q3kJ6i53th2MiQXmvEc4pKMe9xgDJCdWVeAY9kCKe95Lc3cZKQhcMUciJTxm3WhQ234ygQrp1uGEsQUEfQSR",
  "key33": "3147BbNb9PT5f2CRakJYci8MBYYgT7GZEZyjFUWw4tzpXGPGGk3oU5rwzZeMtKegeJftUb2ma8jNW5JQtWNoLYro",
  "key34": "2JMorfNJp9wuVxB7irbLRPsimBhavHXqxgC8eqy6cocULuENtkfCR3z9vjtQNUEkTpqheKB5pBMypwrjbDwsM81B",
  "key35": "2YFTuGR6DkJf9yQFBreqTdThdXuBmJfrh76U9pjEtRgQ5oQ1WH54QSt3dj72fQq9RydAVtQLFTygFBubFwUQVje7",
  "key36": "3CeWhZ3du5yZ6dSLRUeGB4VL88BM1rzeU9Wp5R6dXN9N8XzrqMfaBiFkFsmK58Z3xbsWHieFkWFrd1SG6vzYGhGf"
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