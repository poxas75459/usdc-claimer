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
    "46QLtpSj2RbqUADV9AsyhaptZVd7dh9PxENiDZseEZvUWp1fMiQgH3Uy2GAeGXcErY5NvM9QbHeyNtVhLCE12Vhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLfDqcA5EpyoHrvdSdQzqWvgZm4bvnYZekeno5wBUbbMdT6FgsBpAfiWSaNf3x5B8NNma9rWHwRrspoKdjNsgdb",
  "key1": "8vSp7ZEV1EBM2NWTTTiXvJxPG5NZvNeFWeCz4ECh2Haqq2yA15uBcybkGBMSv6WYxVLvhN9Hsee1uNmMv69sXpT",
  "key2": "2qsDHgswQpU9vcTG3fjq1R6m7PWNpDAAL8dYsDrrnxhRtWgekbx4Px4M1SJZdkTy7myWpzWLNrqgGzCGqBXeg9ZB",
  "key3": "5Ff8CSPXisJtjmWhHBZkCBFEBgfavnMQeMkc6wZk1kpywnu2D2dX6e8PLWpnC8h3W28CcE2g2HPfQ4Lm4gkkZmwD",
  "key4": "3CzeHLU3VVzc4LXp55muApSU1npKTvYKwTXsv2JJtGL6kPLc8ACDkqQasX2quBEEXqjgWQpntStwT3YS1oDNs3k1",
  "key5": "2jwy873HW5BVZksLCoKh9dbnR8NB6biKxX8NVSpAZBot6YRCJRUE3EAsB6kmqUSptzTrVEwTKFNs7a8UnixHETrG",
  "key6": "3NcYtC5RAtQaYF9y7xWT48F1b7jM7v6HG6tVEZHRsbnVDa6Wyi1r2yxH2oQLxgKMZrwpyMvTMPtfqz8XqRks1hVJ",
  "key7": "3tYASRUDEPvB2AuYFCswf3Gh6inn1XyAMmeGnUGsaKjggVXTActmpseyVTAXa6MiqpvkzyVoMLwKNtHKfkuAE8u3",
  "key8": "5E17MCjpH9ndojYHKRBUSnkcTGvz2B9eCEcDSug2pn45oLA5epk9RQXb2oJj341jURo1r3s95kQf5PAsXUGrQZhk",
  "key9": "5Saj58k4bgLA6h4cBmbPUnHRGShuqDVcbJ16SZcgwEyJnMCrwa5pwMXw8HSGTE38SX87QuPUzJx6749BvR3R64gC",
  "key10": "5xMWQm3FSYMhbwU7qtaHPeKyw5bGjFhmT5QjrhnEvJvTujEuFwKK6wKgqUDkdpG29eqHRFZw5oJuPiyyCmBXzpHi",
  "key11": "3m4iQEyERdoDSy1L8aPNJoHzjxA5ZMuezrqvwpHpmFeiMm1FBWJXwjuJZ1qKQUVv2DtnuXDt35vAGDSYiVsWzv9Z",
  "key12": "3zsm7Wj2qZXArMJ8GDtpyzGPvLBCLqyBJvqvAiGAevyDLqF7wSTp8uLZBpuVt3cEAXmsUyjaUQED9H5DH7nSLKJZ",
  "key13": "54DXEkkTMUprC4pErMaxLHK9ks9eQap9B1UX4kD145F7XqXsZyw5aVvP54oroxVUED6LZgCqTg2gbbZX4YdtHPhG",
  "key14": "CMUwP9kwJ2d9SPqi3tbi2UfDQYfP9W15VepD2nqRpnis4vaBhh6ELFFCtEDRHrPjq1VB4A2U9wnwEWExSCnJ6uT",
  "key15": "2PHyKTacHqzMxR2FuECri3WZjwqKaHdfctChsHiAWeoPKeFwTzdvuZAY1L1BD8npU2ywrmEPGwGjZGLfweyziBJX",
  "key16": "YCisGt6uJragEJSTu4RzwRUeVAS5i6gc9zxMTEdVyDeFW2HRi3WzXdBeMvHypMHWyy8s1Gzb5hydGy4jXHadDGM",
  "key17": "5dCYpahPexJVa84bJ2jQ17QMHfcceSZDBmPmXbPacgHpKgggPtYx4mSsPi48xNAyWsedp9Gsuuym1YaX23VktzPh",
  "key18": "5oewEQBzgW8Sw7Er2bTVKFCwvEsMmHub282MG72n46HuLXuYdeuPdUWHQZVwajX5uV8B11H2A65TPNHZ51Lt3tgW",
  "key19": "4ZgEGGLtVHWxAX4msqgRKxh1RVHaCH8TeNJ24HwoMTR5yFwN6KvDP15bs3SpdKEzc4aKhLmJP13S3s4YF1mLkkCw",
  "key20": "4WKWdehjqyE7NGDS2c6f58NdkzhaXXVrZK7cxLKdVPPrdk6gGcisVCX1oDA8pZzhEd5NsFhDiPnXeZz6V9WPuX9T",
  "key21": "5Ua9sLhVioYrU3o1YBeSXBq1JNx4oGvdDM9vECNYkB7nhve2Jii65NcNwu282JuP7TQdsegdoJNE8V3eAw2cnAGy",
  "key22": "2nLivi6qX1PMyJeunw5r1jtVuVrdTSaFi4eSXgZYgTENXyEpZa5hnNypwT6dmJsHJnZU1GQWuFwtJkScSA2G7oV9",
  "key23": "2q3E5h7HNnUefc1DCRYN55HnD4i3K893xrbBX5KNMQmtVQWtrCsADV5q4aYxCbqi5gqHo3jGyMPfW7sMGgcRkmm4",
  "key24": "47tg2KFqqLvXTG1heosQ3apTkmK5muiKmAqLrx3WPHsJyybfHJe4S9xr2gfdrZNnsoe5k2kBbtZ8Zw6Q2EtpQJip",
  "key25": "62K5N154VcLEET9vaQtd6Bztz3vQ4yEjGcRkPQRifjxn4GpYojxhiQ33gnKYC4HLFx5qJWLrbcm5tWfYoiXSBYem",
  "key26": "3kDhbECaz3WrTwkRHeN5ZHG1mJrM6UiF997heycujBEKBHr7XD5ngrDDVmsovhCvTVue4tnski6nZFkLd6mCT1Tx",
  "key27": "sRRwSRjkXShMqfBkY2basVJspBRvqSALtUHxjsNk8RQzqTQapbc8Gg2j7fLydHeC2hHJ3G1zBtcCBJxW9NVNPX2",
  "key28": "5qe1yAqzVtLdZgR4VVetQQBvzW5dc7o2ySVfNfpfYXbnzRM5g1mcV4nwpRijcQB7RbboxXCqNbcGM7fD8LcetN7",
  "key29": "SBHyTBSPGG8WqvVfYwNeozho4atQDpmcM7N54gGLTjtPNig8m7GLJtbqP7aZun9oFb1JZVx35mqwywagHB3KrP6",
  "key30": "Zb3ibr3jNe9eKCBj1PZEdrHtKT74yFbx1Ma54ynBpfRH7j2SdfxFGsp8Ey5Q9RVmdwynebHXg5rrkLpwMiwrBXb",
  "key31": "n7u43srGFhmgHGAhdNYJxHLZwn67uDnmC4PtSt1DJ7yCscVw4s64EjPFevgxtfTZcRECZhhE9XXy3XZ4fUX7TrC",
  "key32": "TJjkaEF5b7iFJ7WtgAQCDQzXJwEMMekNtKFXtVvgRjmaGSweYwXnLN6CXCSCpk5cLfNitKcjtfuDUFcTcZn3agJ",
  "key33": "5VbEUYPegu8eqnAv4hGWPePE9Zn7wdbuv49VggBx1NwC4dHHDX5puSJTkudSCy9h1n6dhxZcauDs4tRFmWfremoe",
  "key34": "5GQZkA4769Q6vLtkH4RuTkiFxYMHqrMKwo5eZqS16ivogWUcsH4CGeMQvPUsxaF7rgBnygFepr4Z39vWteedvWwv",
  "key35": "2fqX2Jz5LDvYDqxyvf8Hpq4219S7whfv2zaikMYP4v9XYijqpcS2SmUC2oryeawfxHxMMz1zTnRA2Sw3joRDxXtz",
  "key36": "opAoHDbvMggu7W5ZMY8fDS6xansU4KFcM46fwktW4ywbqwNCkdTvxjAhcZ58K5k52xJzZ1yJrKSctT9Ny5GTVCi",
  "key37": "3DQaqXBduK85KLr35N4D3F3gwHPnjaKSdeb8ZZxzf4cewNDYCWAWyJn8MT2baM44NsKHzhzQ7NrcVZv8tBUi1xPH",
  "key38": "5EotZezRgBqw4kgGNeqjwxH5KAfHZ8DHKE24MmoMPPi8XiBy9piTaMfv7zn1M1WLTKujEGkh3Bussf5g4Qhq7FuN",
  "key39": "45TQD68hfx57VqEjLbwexHrrpWyaMmUSLsVkxRq3de1GxNWJdjVJBqb9XSZsLxAD8hwCv6NSSSvm2GeKzodt7Y5J",
  "key40": "cWE2azVtUYVNeCJosi1Z1EiK7RkDF4sr1Mr6pa28mZ26NXB8BozxwNidThUfTnkdPhspK2LAC6W4GDZqfD1dCit",
  "key41": "a7qfZVRW6Qb7gkBfr11Jm37WoZd1SMeDF8113sbwAEusDfuA2eKh5WkeKvs5tMfJigotjCWGXFxsPQUqrWKehB6",
  "key42": "5kWoBzRochPJUo6CU7YBgzdeopexHehDWYKUgxYTYmPj3qfBr1vmwR36WNLYdfoD21cBjSmXF35tvtEDEdAaZxLZ",
  "key43": "5paZW7zqrxDrpJ4U1t2ZEhHC7r6ZAUftmyR8RfkaPjpDpPZ5yBGTcBy9mHevyqsLssZ813kjp5idLiyu6MgFSkdw",
  "key44": "3wj2MhTMeKF1L5q8dP9PQnsMYGeKsduabxAY1c7JAm71VkmL4Gk1QKKa4ZSXCV3KpiEPBqV7janL7v5SqqYiiRbW"
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