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
    "SAnhuAM64qDz6soqWa74SsgTN3tzw2zw6bvTXooif69VU71Vm8ofpZYJW7SAVwnwoRypLQReCj4kywZQuWmKDM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "epusntR3YmRaaPkne1WvH6irG4LQLFBpiPXy6HwAvYGPmU4i3ihh7indrMg2wHjZr26uDE4fmHdWXecYrpQtGEt",
  "key1": "59P2mV73WyATC9nSEiKgA51btaRTQPAFgmuVbTTGbAgEiJTeHeVeZY7Ec3NJiMwAw39XUwukMv4M8t42ytQwobuL",
  "key2": "2P8qHBUJPsmEjkGvwkoe8viAC8MyGJXWvd2k3apf7wJXrjkYNvMffQMhk5YrsHFGGhrYzQ2jyisyb6eoFT8S7HU8",
  "key3": "29KKfxSRSfozhMTRzCyRPRATdQMcPMXfA7BvVEQ7VWcqzMRAo3XnhAt42QXFw4fCWpHbTtEV4fVCqNBeWdbbEwhf",
  "key4": "3KhTNy3DUyZ6x24mUiLKKu4BgT9FYpAzw5ZE95aVW55GuvCM95NAuuqHZnPnGAwBGymhbTUGNaLAzyQoTsM4YT94",
  "key5": "4pcGBVaPnnc63dHj2XF61FJMBKCrJm9Hu9qTSTUQrT9d4gLQFt5VNf2fkgq9xZ7G9kHLsQWHEShiPXcaLBPZzh4t",
  "key6": "s44xnFjiuDGbhq5emVPxoysAXCb9R5ypAJvnXFbTpNExuedkAaeUVM3pZ3xeFR2yogdGsECkBCh2xVw1AB1wPVx",
  "key7": "NyERY6XhHYuNX7SNdTPWQMyovvTputBVRdTMRVYw8WLYzuVvkrp1fTynvG5skKjmDoTEVweTvFQFRm5YNktnF81",
  "key8": "2W8q1Q5rS8GyH6WyzDpb2uVr5bVi533BmhtDmXr9MPstaQ7RFYFcCTop1cS1353LEpWMyvRRgmJcY4TtXbTSoQer",
  "key9": "4YwvxsubFnvvZMw5DiYVFnKUHRryhQ59XiyY83zds3RjRvC1RqN8Zinjs8sCt5pvyiKscGz5mrfmdpFMB92pEcfg",
  "key10": "5gzp29e6ggahWGJiDmfirgMubgwgvtLLKTzVxqv4giXq2dHTgmsg6WFjXeTqhrXtoqbYLLuvFfxK2jTfHtSvwvT",
  "key11": "aTSFeeDUMh2R1opbr4ZWTu1KmiDLcXjWMPDEu7Q5vME7GZY3aJKQJXr8fXyRs6PzAssjCoLaAb7EvAszyWqmfQu",
  "key12": "56xAT7DXFjwB8k8pdtWvHQWWYREwnok95LCQUxmyRczymkBdYLuvh7vNvCnt3ZG9YrdgB8boMPb1HzCtpgY2qseb",
  "key13": "5ejkeqiRtQoKNDZKHxpqDY7G5Vp3jqYy682pDWdmyNVEygS2h8KWnUVuHn1KHeDPVMNiRr16GJ9e5idQWdmgacM7",
  "key14": "2vVhUXs8ZpQJLfx4tHR3eNyBdHEwLC7Hdtdk7K2msRkSJP8Z1ioUaHCJq5jWpcqFgYpahHwJek9JPEpSiYj5wx2Y",
  "key15": "27A5eXv5ixKdFx9AyV8gDHdaL9e7iouYJU8mzMAGHzQEMgPBshSyYMpkgC6TAfR2qYCK77aARjm5wLty6wfq3K8U",
  "key16": "5pJY3SaXqrTRyVz9qYaPC4MT4zKqC29UBRPvfXfq5FQ6fA9ec4dxWCDNG2iBSmXiwBHeXgYnWw56b9e2DMk53hL9",
  "key17": "2GNF4Ef8GNjk56b8AvjAeGJ3noggBr2G3vtoGTttjE4qVNkyrUwDqjA2tvHDw5HpgWLp58eVGseW2QGkdoph9HGJ",
  "key18": "2Nh5ctPjE4gXn9d2E8PXnLcpG4UgnvcExcoHGvt39yErKusCLq5D7BsHg1592tNUzEumx1tvw8RUrjDApF8B1CEH",
  "key19": "5aVmFBBeXqbshyavKH2XXkiBqYMGHajcSyHRfHmCmFdgD3KBNY6Pek7iVFiqKLWB7SXaoaDHfpWuKTPfGCgQheEX",
  "key20": "5RjjefyGuTYbZvarnLxxh2UDxZ1sjTkLvyU3YWSTH8F3xpBMmu44Ffd97u9zhC9skrrioKxTvQgtZHRTyBLwBbEq",
  "key21": "5VcbE8T9Cwo1Di4xXcY6xMDFGLCcgH9BLkXTL6kSE5sFCNe57x62ieM9NEsBmyDenfMFWfJbaGSSc6hbDQKchxeJ",
  "key22": "2ageW2kRG6doXmf7gcvLXiKRC418SqzNoDTFVJ23LxjsQ8mHVDF7ZFxMumfcWK55t4mnwxozSAAdAcjpmvo7cv1X",
  "key23": "3kU5tUpLLap7BVy4PzxV5jGgV66CEBoVGDm82u9j9wV9Va4xpfbPdHnaaFqLFfxhCq441xrfHiLqoxaJw9EgC2Dd",
  "key24": "3GS7PejhTfHdiQ8Ps71Nsi38FrtJvvZVSZAai2caiGLGdhMWeNFn1uBEH3HZMaUjyq5v9H69DbqPYq33CRdAfnaj",
  "key25": "4XmkcA1Krv9YPgE19PmmP7b19F5DEEAJzDsqcPesRxyufheQt2Mx1JkBuFzXSgEkxQLv3kXpLDgutayxUCtaRQP5",
  "key26": "5nPkhhwsv4qzg9LrWv5Hi8Kkcg9zaSPD78QAx8x5eQSZGEeykKgSiNRH8ogAJ7RrJ3LBTe5vnkDi1NuA7Ej8gBEM",
  "key27": "2V88r7d1jqxvYxpD2T95Tp4zwd41gegiiXm94FwS47YZvsFA2yL8NtguyABbECszNFmnDGyS7mLbFFK3BpZUZJyo",
  "key28": "UoaTDWmtgSm7q1e8h9unazQurxZLnUKQMaToASLmfQaB2t31by16idYwH5MKCvnPtLUZAhuvqDazuG62y1BLqGK",
  "key29": "3j63Nqf9ibKLfJvADWPmUn1a2q8BdHq3s9LUNteZarRkbYkNYjBnykhxHtErLBgbJp5R2u9pCseqPG35Jc4oqMzD",
  "key30": "5pZtvQZasNNxd135sVx9G91J4anKMRk2sCFybB7gs5YYH7LVYEgkWMCjgd7Cyoxsut6ALG1D13Dsx8fgFsC6K8H2",
  "key31": "4xJDRGn9Zw9tgvUjHHBbNhcw8NSEsXvmCJHsfo6o85ptnFzoYLHMYU5pAJTntsEJsYsjTZow2qXzLFUGg4kz1FtF",
  "key32": "27mKnvHgFTZcspYVNY8ZHNFDCeBzW7XhqW8rBv27yFC8VLyo2eudjQ7iC1iL5AhsCXScn9D5361bgMj2aL6pdLYC",
  "key33": "34w1GjkjELu8WVZgHazpCYsF2sWaqTpQMWJZ8eDtmViX44NRZDY4bGAj1fUBekqb4WQeTN2rXWz6mwkVVpfTyz9K",
  "key34": "5FU4GCxGavAq1RjT5gxbJhETcaH1VVafaUskjNCn88i86j4XksfjKGGZmPRMS3QKfXGDFbCWX7JGhAH1BWD1kP8o",
  "key35": "42xwZvexXDc8vMmg984n7h43bKLAtgtvxFykuC2PSHwG2vwrfhxiybG8NajkF5YT6wVZXPBWBjFhKmscn4jg8SUw",
  "key36": "2HareDwQ289bpgzgPNvC4w5Kifp81Z7VtKSpHCSLdKMFbDBho4UPofG4RNqGptQY99snpm1AHcuu5q4dtaRUNFPJ",
  "key37": "3if3G7FtwsJUnySZDD64PLJMx1RWMBfDutQpq7D2z7rqKkz9Y3613VNA68KZnAb3QSv5qsDDt85kc5pCdYLvW4ui",
  "key38": "5S1tR8tscNivLkeKWLrrsupSi53o3rz3rABKDaDDN3F8dC29Xk53crn9uGEJZ7jkRD2BkKVNRi3wEV9XCtMWhrHx",
  "key39": "UYbFwW7WoTe3o9CLeVsv7uVoARstzAetpeLFSQe6WCRPVLFtQJLpqKtFDbhmQKjAKrA1hDpxwb3EoQiJmAK9NbL",
  "key40": "s6C9yuuvPufz55jEMRZmG98LS7nvM5Eobpg1dDV3ViJcZhuovdCq5BDsuLYsSnUc5zJB1tTEXAhbVszpbFPdhGb",
  "key41": "3WhJWWyJ2Cona4rDtYTaSm67Tu2dnKi5MzhS4EhrtJoqaGraG9RWmZYshSTqL1MzJGiLxeqACMGYJ5r73y6Y5fMP",
  "key42": "5zwNLMcEnRxdD1on9Sagn1Yzbfi3AtoKbaNAXRCZ1ZDb3ujLzvRC5VzpESX7PMvrMojgqvGeus5FANW6hDSUzc27"
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