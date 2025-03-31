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
    "5xJvLQLTDCHSKp9RFFC3VbTTPvinW3m58qtLH7LD3AhJFLamFbjCeZpMccdypaR2diaidq8P6fCWQm4tzzdFV58Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPJ7nh2FuKPyqb4fVXKNS3JcJTdhQmzd17NueTkf2XL3w7LfwUWTKn8SzgNuCd8EbHF1GEGTpDxM2coWryK65zN",
  "key1": "2Bba9NCvthB4zMWftK4Sgh2wZq8GbGF3op7KociUbQVL1VMNFkEvtBz1BsTBY1P9biMV5njTSHSexYqtwy7UY35J",
  "key2": "52VMQFdKUERiR4fLreJWy5SZNunmZUVH55yck9jKCSgSRsxvBp6rY4irg3cKj3cpUN4KphEAxjK9bkcwULQ1ZjAp",
  "key3": "2xJwjzmHu9FkixkpxXcByv6pYGewv9szQbKCJXMnE3jyTVBVt9qJTiPs6RrQ2H8xotLp5pmTfTVz5cF5FMQrgGtt",
  "key4": "XKF6B143r41FA3e5kzDrmYKauYcgsaUiDXR9LpshTHUVUsZiufaxJYnseJr75PQm2uCTDFqv3kzJRm2EtAohCZG",
  "key5": "4GPcSCbH6UW4UAQPcmZk5Z1jYmY4Yd7GRApR5xFkVphnT6JKTLzDpLsUWFMYnSnt5RvE25VHW7xdE3TczwM6oZ9T",
  "key6": "2QxzjCpp5UeqD4GFLfDZgFybjW2ErmUA8sbqtMoC3AodAaiykHx3dSoKsudEnHgH2k7BgCNXLTgwiqSuBQ7afvKJ",
  "key7": "3CLZJCvvVwMRZJ38mGnRVrxoY7Bv7mnoTGU78pVwJ75p29L3QLRUkKVTkNv4vJLGCunnmJXgUnvLiLH87VipCYSj",
  "key8": "3MRfkD5UTEPmnYz7ZS72YjRKTiBwNordGVFDeus1fgX9ZNeXGpHMdBQwNrkY11si4qKtG2wWzzbD5RHnRfFXSd6t",
  "key9": "gRW78jqe3WP6RWALp89A2sJLSc9VhY3tTmYyrRh83ATzQKTMrsSf19ivEmF7DhQ5ZzzQyWawqUNi1vkJnM2eTd7",
  "key10": "3gruUrJj5u6oKW1VpZc1i11xpBNed2mo3cpKoBpP7y2bmZx9yoFi9UFUjFgraR4Ga8A9DTDjVboFCvoSYUVBLfF1",
  "key11": "3inXJVnA5b2RM9smwpBdtXvFPAZyhti1tZmqPyvwdoZzkGZjYpgvmTYDQPicjDGvZAFfKLJd51oZcpTC7fa5C8R1",
  "key12": "2vdBdQzT6LczQRhhuVNe9thVdxDgt7Wnqnc4WKqEhHzxk3Ehi9Tsm29Xqq6vLZ3tocxDrXzFea3xUDb1z1WEDcdu",
  "key13": "2NJseLTUUR9AF2muRJAdDmsb2WfRLhM1nEGSHcK4YVwoWR28Q1A9N9zc9bknYX4s7SNedq9LYDYFeGi5XYBza2oC",
  "key14": "5rdbV4WRmsrYWiMDPaK38qMUBmtu7DmrzeHXgGh8ooAyJGCHSTi737HEpVfrD4CmS6RvsztB77MkbPoFZ7cQMQUF",
  "key15": "3aTjG5NBhmN6zyp8ceDK2A2KGExppMtqE6y3zMSejK97kJuQE92hs4TMe9isJKybP5q79jausrbFF6gzBYxC1WZt",
  "key16": "5KyoEbDSGdroS5cUGvsbJiwBARqu8uNxPSZc2ViKmeSMkaoMux9thizGBWw5KRED4MvLYKCbJFmKNgfFbFnC1QgK",
  "key17": "284QTJ6fQWnMkvVy3JXrhj8xzb7CMSWQc4iLxbpwn73ZjBsELnDY88WoQx1zXrHUbSX8nyv34Dj4c3ndxAJrUEeC",
  "key18": "2vrLQoFAr4oJm2H76kb8QSaxEd2qXyqXS1KSrY3kn9VYwWYqZPaUnax5EY2fPLvjLz4EGvrf8MdBbk8VpHS2M175",
  "key19": "fS2fs2UpVg4obWWN1saxzrLeVqjC9CAcLHmKviTaQbxq6Z29GQe3eANXnf6aYdBNPU75xvvvhhMU92QYPsXRQR6",
  "key20": "2P95dq7EVGPcbNwSiagTiPdBSp4dRbmeqoAXsBSvhJUvKfJWfqd5uGNeSLNyJU625E5HFoEpx37FNDeHvdBdtce8",
  "key21": "25AFaE5ZXi52Y3GoRUPbXNwWgTgaFcvJpQX18SPtgS7EcfozTUQoAC3KGjAn8kPdVDDNo5sfQsXDu83yJtaRRBSp",
  "key22": "31hA4gieniQ8SHx5hipB4oBEnCSosk6M1b5xGFYKv1CKasfZFWmaAiEaowDAdZf5wuqt6fwCT66HqKV7H6WnQysy",
  "key23": "5zuKZvfZ6CzUQgCKSEBfLN6ynhAK512HeY6qXiN7owuT7EoiAZeAxGjpChKJ7B2i6ZbtMcXdLekf78JCVCDstjAg",
  "key24": "4PKPb6Chk7f3ipr3sVhhfkJT5p3NN8cyregzoePH1E3UM7CJNxMbvjBbP7FDEZUtUf5Uvuc4oLKpr8xr9PYwEQnx",
  "key25": "aDLiqk1HQeUMzdy6PKPLcVWTfqgegLJW6PsLXiEQCw7HnuWqdhzPR2wRswHLEMCYmjwH2pn4bA8QkzaA5repQx4",
  "key26": "4fYEhc6WEa8g289jbxbcvoujjZRtEmFwCyHiEJTQcGn5k3TXa79BqZACLk9NrqsYzTKLGZ7TQrpGLW2xn8WZoqr3",
  "key27": "5hwUrSX8EHMdvbQFrPVMyZYQmD9M4wQB4DUz7jRymx8XgF5fhJKjDGGEnnEuLkgV1gpVFV44662KVqRPbU674a6Q",
  "key28": "52Q2RJjDtSGgwtsYqEMvz9hwcfXvgp5tELm2sq6iCsy5XgJvGMMBaS1k6MZhHM1bHht1CVttD1s2kytGj4QJVYBP",
  "key29": "LwsVatttc9CFeYkrEcMYexLdUDKJuMJVCsE2eVjhTNNnDpwFCDqwKZHrQtzKAkhJD8T8tMJQCDUzXonKAGqs7ih",
  "key30": "Qhq5Gx8a8PbkAsACwpFw8Lk874RtESy3fLjxnDtTYgzgiRMvTso7y1Y2fgqnk6xGF1xrNUi61CTM9ee3zEQb6x9",
  "key31": "5zUhfE2ncTerTmqkDH7aXYYgcnmen1sZGda3oEDHi5ZqydTfu92M1a2z1iB5Hb8pESvftrrpVLBZRTMwbUZbVMQo",
  "key32": "3qA2Vcf5WXQPPFHEWMcQoysaBWqaf8iSqbaKNN9yX9cgWhRu4LwMQ4sm7Efz3PsKgbgTSaoMSRwBR5gRHpgFwzXB",
  "key33": "26JkSpRmTdVjNVfsWEBGixi2xD9cvxJHg8hHGTi2MHUYqJzLvoNGQMVBYkDrRsvpc2mFMD2CsLTXXtR8XoRv3DzU",
  "key34": "5EzoT8ujaRTQD6mdJ5jdtu4hUuYBR5B3R9DuE23Z1emZTwX4Qe5389zhdcTb6iVpbaDhcLVohaoBtxVjR53Yx7zT",
  "key35": "5v4aaCUztjV8xoYkCPEiusHt1osviVz36oLprp7c5Fh4fWorW4k7huQ6gHKPMm4MMK3oYERuUECC3U4gs6eQdQSn",
  "key36": "3GDMJHfZBHNMVScF2zHu6Pf5L87yMMPnpHgxC2yaLywvTYhbRWHXad7cVDzHRYJFY4W7amBc2tcQ9okJwNi6L6Zy"
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