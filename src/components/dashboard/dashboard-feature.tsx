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
    "24CKeKqwLRExjmDpaiNRwhHKkA4hnhj6cuHoM45MABAo4Mmk7hhBa28NFpD7cEHDBGRFnGMBtCtHLsp9Gncy7JDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ubriSU9UfUHyiX6fDTogK1yb4PYZRXZUgSkqjMkmtUhVCE9XoRkZ7YFh1oLhsiE3rxHHmrFAEZQPhpsVTCfLEB9",
  "key1": "3LVbv8VAmdmB9Aeq1XehNYDhgi13GTvfVeHu7eGoZxHjuefoXQDfT9QrHF2jTtX5y8pNrioDtH35Mtb6b3wvGTTL",
  "key2": "7TLudE33vRAts9EWtoQtqc2rvnTzVHxTohJhekMbhERCGYYuYewg32hCyzxFJfKFLtyQnfLisfzsTyWkrt2dGmY",
  "key3": "3cVa3pP9PBEMEN9Xa8PDh5cHzu9nhfNZzzqXfZmwbk4kUzVLuiHZXd6d1wUh6R8iRNAiRFi4hhbATAGBBUBRm6qw",
  "key4": "XA7kKgKNC8WJRf9b8bpG4YKcLXz6hvCrsKUs8oqwqBiSPtvNmdf7aejw38SwxVyzXWTTVkGByDKchs9womNKtWq",
  "key5": "5rx9ZHS6fqJrYdsw9mYSRv7CEVD5rFvypbJdeG89pEjNYkZenq6ePnnaf39Dm8poWzAgXTt9baLHCDQU49mL33mB",
  "key6": "y8hgAijm1f7szyfmPMAJmio69MLdu5NerpVy4vb7BXHA2Z9bLbu2x24LcGd3iGfvz7cegn46k5mZ83XDhfXgHQD",
  "key7": "5fP84e6nZsPtx8x8sbxPyGV6g2x5g6kaEp6Fcok45k9sVr49MZpZgRw3iw4Y5gtcH3pKfVGTuf8RYfV38B82BvxU",
  "key8": "2uqsvxEyjvPkYUx6SZ6BvF4U5hdhRriTWaLCUXWoGhbbDutzZ1UZQ5dzEeStsvoAPWhxaJkXrdDp4V6gkFG7yDfs",
  "key9": "2UnScFmZjS5JdbkUcXQxhRhNEHN3imf9KZ4fqcEPRfbdeyefGtubDcrXSrp41VuvCWkE9YqHTPAJh4oV9JmZoebv",
  "key10": "4B4uZtz2ePG6H3m4fZyExYZNauCkEEBfJZKW7wYXiUGA4XDKw6F2JfBkLJChUaRRbEP12ewnHFmLVBkVkLuJFqbY",
  "key11": "LhW1XjV83HeJ2rVyuKpgH3ZcyMynqCTyEQHscCr3NGFr63fsTxrg6Y5HENHQtgPmvD8ReQPta9Q8QCaTvQefboj",
  "key12": "4Ta2EWy45phXkgWA9HC6b76ZbhAbrfXbWmmJdr1ZbkEWuprvr7ncBQrNkhji7RRbDaaG1t2ukd9UKVJqdVVkfNgM",
  "key13": "32kfpapAirzYGysahRo36mZtUHeadWRFbA3cKyXyfNnyxWNoEwwRmZFRaSxeJn2zbHDQuPqVuNc9inN6YBqFUhZf",
  "key14": "5yg8LMYRZSC9WmJZo9sJBfC7qsS5M2JYW946uCvdT7SwA5ogf3CrGsosqdoozZTS5ofmBrjbc4eKGFxg752LKjjR",
  "key15": "3yn2uKXFfFPVFiLHFyDrQF4wtMCu81dW65coLjjQhU1hLTwUQthCDEBRpGxZsbg94XncJWPeXQwjVVSUir5jiH7j",
  "key16": "4aWFawmpT15zUmrCXrFoDXFQdMznJnNFtHEAbBd9Eer8iUhNMxrcX2AokTuqL5Q5PuVmKAxqP5RYPpUBYAME2PnN",
  "key17": "2boVuXkU5EKGTUB8SL66HxEXDi9xBhiqTTkJdLSSfGPgnHTyxEZM1PFBbDS7veRRGHLSfh221yu4ansv5Q1vg34B",
  "key18": "39cjsrgCL6wptz3ckuECXbUFqXA6pLvgjbqtS7Mv8tFiSmL54SunDgAzvKDFEoirbT9LJinp99ztvvk3eg1LwyEm",
  "key19": "KWbhwXqLuCvfufaDRVkPRtF87mcVNXBc1TvWbKDzsoeQmUTXgEwMnmugkNSamvEfKr95G2LgRiwZHy3W7xAN837",
  "key20": "4ybXbyndyE1QAuLf7TLk97jo2BP8kPjzNzsVxvTRgA1YpR9qp8NJFEHoVV1wec68KtjjC9fhPUehivBNu7iBNwH9",
  "key21": "5eK67ts6UJBTpi7TLQLa4cizLkhvezqyVp9CDSdqKHcGGYSUFwWnyCYanqB5MQbGBGAfiXqwQ3ac9BzNYH8kHaQN",
  "key22": "4SMGn7a6QD64w7CWu5wtdyQZp2XHX4J9uMxCVerurtw2gUdFxKdUUsBSgMZiL6fUtNoDkaowV1P3eD72xEVLDrrG",
  "key23": "3zE2vihqTSb6pUpsTuayA4BpK12bHCbEPHnW7b6BnbT5E8kv5JaahCFBEsGfh7Qzjo74Dj65eAt3d3zRYvfb37B6",
  "key24": "2xXikZbS9BBKHcTqiGQ9GwagkFEbNmzEiz3aHRvJ8H2RXL3VYaaeAuH9pSiVvuSw6bsgdvwdThbxm8fDXgPjGHX",
  "key25": "5Kwju2vS3HWq6PuKfb7XgdPLYiJCKVSLNrsxJmrjSbd5GwimCgkchQaq2kiZBUzr1cFFYKTM6aPt48eYPC46BVyd",
  "key26": "2vuV2LEHCm8wZ5fZqPWNXSRva4pipkoME3LiRWeHqXH5ohSTrXTqXHqS5MhG7tBqN2cTTBCyEBDtDUpU8nn3cDgZ",
  "key27": "4s6igihNfHjpVwKbVJENGqqWRrHdCUn7zEMyVUt6pKCeuHQC2MstoZSm4QrrMJX25wMeGSfNzqTfaPxAQ7SaNqNf",
  "key28": "5ME2HuzGGrXLghP7xnHUnx6iuTwDi9eJaPnLDqLoZHCrxDN9dgTrp9gSAV2R2Pjn8kQdP78M4UG2T7tG3KoNEmsY",
  "key29": "5hqaWhpuPrUJTPD6JZiyHu3R2bJ4hvb8coVnuMcXFTNovXdqDWBCToHroCNVv5jfpiZu45DpJ2mnR4cJGXqamkvp",
  "key30": "25it1chnmCq4BBXyWGi7QByFYwKfuLRG7VsxvqpNe4dT93xhsxFNFhmyeTGK2m272izrNr7PfXXwp97qivzpXaED",
  "key31": "4kG82h4wbVkaPmLkESCGNnXjHnfXfR8xVsiUYTnbmhBFkxPmgVL8FUokNncmG9EbhHEr89Mho4MRWwz6Jd9TZzTD",
  "key32": "19x6u7UoYzjWfjgGZupuh1yS3P9bhJUK2EtL98zYgffGjDMRU1DFXwtVVbA711uLdGoMzgQJr1GmNzgyCx9rFfm",
  "key33": "5AXVKwF71EY9FZvAxP4nZ3tFobN5QatohpgfXUfQY1bekQLHQRWbHMf341bXkkwDkzgh2Ej3tCwhsN1tNwzfVCZb"
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