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
    "3zYGsNXQcotqknZ9VavyyUMraLhnBDKwYs9oXmxpGyonypczZVsMcMdX7tD4JnixkdZibEXoCtZ3WwM8JFsXheUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z2CjBqWzRJVvJsR785vJSFoPfzyi55BcPP9rscCTfQ6GEdrfg9gZMRxSFgYEg9UFHM5LMrThtoRt24DfAbreXPS",
  "key1": "5hnhncMY3U5WePq4wJ4FEL47aTSLT22J5zAR1WcAgMC1KpGYahZiJVaFigYqsnjL23B8TTJXySLdVCjx16vuWCaZ",
  "key2": "4WF4FUEhHNDg8uNnPCMXzb8GWuqQi8rb1XNYA6nFPTNK92ZwQpPfWckG3MDzmFcMfBtLSZf87N8FHd19y4cEjD6M",
  "key3": "2AqCpcDwgH9EoBAAV4w19dbbe7ZwS2gzBFSr7BbbkUE3cZBv4RNy6oFwCTEpp262wHuMNHbpr9KpuRhTHN3wcfHP",
  "key4": "4A1itCZ46A9LC5gnvxgMY9XkCEBeg58AxrCvsLs4rU3Bjhgv75Gme6rJzAdymNmwanBqV4MEmjtRwhb5jMkT8NkC",
  "key5": "5AEiEMU1iX4pkZBeQoKbQsxrjyURZRAwvimfWZW4qkkYc2zTdyEJQi7NqVrk2wc83vfEZSp4EXa1DdKDPZ1YrrSd",
  "key6": "4z2TkwBRNyNQ1vdfF7viKhG7kkpNgLpgpBzxoX4Xdgc52RqPJfim71FTahtWHG5bhhLhDFxrPYYmrhaDwworGhGL",
  "key7": "3sQiUixnvk3QzogrvHvVMHnFhRNmvExjVtCQxtCXUvAici1C2oQ6Rbe7bHJAcdbCxEQJyvQpZpxPybrTyZUsZDGx",
  "key8": "5S6ms35sLHKyvsKbtuNmod8qgN32iNWYgh5nNZTqhn5VSxysKqPC8ZZUR8TjRqCjaFLoP7yfrewGGzsZjhJ8z1t3",
  "key9": "3cEU7wkwBu58T5sKFHGYEyhXHUkeq4VyTHE5FpiiWEkV2fracA9H2h61SZpZkUFmBgqypYTuJgi1VAY2A7mDpZzr",
  "key10": "px8c2AV24gjkAGT5SDrYRXdeTj8ZywDusuxdb4xA4dvpfWja36cV6rFRTiuyGMrYCYTMfYqR1rkPfeJ4SFxqGRg",
  "key11": "2U7M7kchsK4GSjtebvvfRY1baLdb6xibHt3kUPgkNVoGht6WcvMBojh3nmeBawkEfuUWVpYtK5pRB329nZp8Q2JE",
  "key12": "pRSJBNB14VMMMQp3qTA97Es6G6MqEhPKbD2y6Zm7oSFrb1bN51u2qfN1u8XaGUM1BY9jymK1SQuvNVhKyuccJwT",
  "key13": "5ykuVWpf6NsFdGgcdThw1yaZm5NeJzkG13sJRbrsDD61gkytQu7Pst1g9cMfar1KF6kJXSWPR7GRq6fjWo8Hj5oc",
  "key14": "5Sj7fC58XPuCjdhwjiyZBh4pkHQBwC9P7JsPdJRP5ryNj2hKf9gf3PBKVku3Qd2ZgV1QvGeh3b6tnzBQkSmAkYDH",
  "key15": "iMrVhDug7MTqfnpiyxtzqLAC6V8CsJoC6GX45fzmhJBq2SoWL2bmteVBQGTgfjV3CtcpzrnDSU3yE1bqtfX8H14",
  "key16": "3QRFsBuuyN7KRmf7Jf1w3XXc2xPz1qTugwVcvXLgyPjER2JiaXNxVWTTTZN4vTwdwC5krsLUuhhgVLHtiGNvy3Te",
  "key17": "2u5t471mu5H9n1L7db7otaCWGbCuYsbxSMKMpMGgiQbRaSLGzPAEXda8tWhRw5WWtRJu5GhkDackCETsopt2m5hb",
  "key18": "5ibr8hmaEjDoGp6tV82hecBV1WpdkHGJZ5s9rQYVEokuitw8JsntvuBAzWhBFJ7UiwsQxkPLZfhKNSRL13ei8R94",
  "key19": "27KyRJBbsfoUgN8YV5SiHYTYsQRuAjh1N3nxF5k83fHog6LvoFpJyFgMpBRhXXAPsbxG1vghEZ3Pk8GwboBepZrg",
  "key20": "3ot4qkUy5BtpYWFKWBGkgDsZ4g1zArA6eHwzSf6LcMHjgo7wKy7go2dQz6aoh3deg1o1kyro4CNW6deXWRQU4mMo",
  "key21": "3Rj1e5CgFEnuhpY3pR76F45Daey2fbcfkF34xSDfGYh2Gx2tg5gwmGMEZUJqChfoK6Xf95gQ8WZeHdQBSpprN8RY",
  "key22": "5Yaab8pq1SaKnLiQzQUzgEsbLuDxKYmo471FxtgCzYXFNptywShnfPx1P9UPSH2T8Mm6RuyVCnMUugxSEnGVAoGN",
  "key23": "4RUPcJe1H2RhrURggVx5pDN13UYWbnczTHmq3GePcpghHmqKvHXFuarn4iZgyVp6aUqX88x6QG5TVTAoVhAiYFxE",
  "key24": "5oRqMWGgPjQdUEi9gz8swyYVCEZQaUJ9Wix9ryfo3GuiDxHWx5U2EHu9wvWvgDtrjunWsiKN94zDnesPF2itJKft",
  "key25": "38Ntu1cmtNbxUWJ2hzo7svduYVRnawC6b1R7Kn5xvBXM5uBLgeLsyG5grhTnYQY26GzcyajS6iQkbMaHeBaL3ckX",
  "key26": "5n9NfKSYTkmiLVrWp4ZZVW6e8QxAV7tP81qmMuu9Jnduo3xKzWT77PUgC7SzDWFRLx8tTQxst3qodjUMfa44D3dc",
  "key27": "48WqSeMqwQtVWfqTpZMGpwgCHsxM19P9qiosvhLyt31Mhj2fitWYBhndxmXtqLsXpBrsFquBcJmyjbWvVR5bnAm3",
  "key28": "MSemVxvTx34yUVwfz2MNtbwnmXYYddE3ZXd7WErV2WW4yp5XgXkc8K4ZFCs7eM6EEx7rLJY4VpZTLQebogN1WsS",
  "key29": "5eipyUqArekmogftCjtwDKSwr7Y1NXVPMXMxetyNraU2h99fmZiRjkszTau5bTs65qyK5VdWMB4ifCNwpQJ33Nuf",
  "key30": "3EjPBaUEz8FkKL7pSGTEHyFybwLZFtGD6Jf3hT84dhkrXxTxnvAwiDJzWJJt74usnNsBdEw86o8nbYbnB5hEa84s",
  "key31": "4dXy6rxQVuuCAmmybF3AmpiGvzq9jUNChPf57rRiEEjCsuYoDGVD2Sf8mVYrmCJEU41evAdKeCCxTVn9iJA5WsWZ",
  "key32": "66CFXV3z47FK9ofJBEnQcm7LkVXULvCmgaBa7mhPJinK2sF9yGnuZbZbH3AYRF6F1MGkmsYcxenL8dpTxNny3VHT",
  "key33": "2FiHFuuNBvnXsMPsRZk53bjVxJ5FiAgZT23VQZXyCh127CkfFcrBjxL1jKJG8GGqydum5Y28aKWBQiL3VTWK8qqg",
  "key34": "4z2k34g2FgcQWm5NRktxcoLFweZj3pcuxgWTsP8WC6y1KyEUMTpF5WwRcfvjXjrGp7roU2YspKvWWvtRxuJvLyUj",
  "key35": "F4uMdYKkEm582cpVsDcFEMK4CmqL6B9pGZdzU8Se9EkdG6XbTDwTt3WuGWkLpa6jCZjwPM6DN5GH3AX18W4MbDV",
  "key36": "621CJfSz6Z1KezFsfWDKMVvDSDPU2zbcKBtawLHwG8dXkGH7UCPU24Q1skmPk8jw6eFYfZ2XZ7PdT5xQHU6BHMxh",
  "key37": "2tdZ511E1FKaTKHUNZqQDgurFY6b3YtfetjynmENY51hkghzWmkLZb3uikV38P4pFbiWv1PLUU26FMsfrnYgbwj3",
  "key38": "3vraiYhzqY4rngTrfnYvmfs7PC6EmP636xP3wPgjV37wBBBHTBA8Dk5kNUnX3Sv6AHLF729yMnmr2dykVcoxbNrZ",
  "key39": "3gfRYvDFerFh9UHfcVZYLneWgNpTxEWgDd2tvvdjTSHuf96jkpYJqqeKxy21q3eCuGRPJ3FHu3EcjGFVgpwtAXuq",
  "key40": "2Zj2ugswn7TM4CH8NvCzGvU4H6yToKaeH28VhekXqbEy9mEuSF6k5E7ZzjdXvSDGKfAwgcXnfN5jP1KaGRZD6XyN",
  "key41": "rCWrUPJcsKpS3Cj3Qppd8uro7BqgkA4dpLvUw4uGQE8myRH7mD3QVxqySXByiYmye3M2TjBmgVbTEbamRrEymHE",
  "key42": "37cwTNc2ErDqtQzEPwQN4qfL5RpFtnAyoaETaFeAdFBzh5qC2R512iVrenYFAQvUKDjiZskyQiATdAHtPKvzeH4H"
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