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
    "5rmsGxvS1giKcZSCa2SodwoiGNBrzymJ56Qgqsdyf5CPXj4dEqu6Aj2vSdW3YFC3nfbxwayv2ENqCMKCrTMPSiiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUXKNzU1bmauttxej8pinGHFLSvdXUz8vhfWTvpZRaDEPBvtCjELnVJJ3FVrGBZagHdiucmdKKSAHCPXVJhbRXi",
  "key1": "2T1tkQSnmAY271PXWiKS1pMeK32QQ4iLCcaNSVx9NkrxATQVNjJ2EzRJfh9CHUELkiDCS1nZScCXzTCNVWyNTVdk",
  "key2": "3fyz24MjayhNgaKHwUhHmGtVSAw7rbrGwnMCjb5AAsosnZd5zkw4Nwo8QR9a4j9yYGJ1uVK1DVUeKXjfSwa7BEFi",
  "key3": "5TmGZepiEgwZoUk7Hwm7KWqz6Y7j4xXmzGuZYYxPSuXAwnVMWgJnjnL8uXrBsr1VWNBJrQ91hMY58VXYVqXJwuR9",
  "key4": "3tEQvtpdhxwNGcQ1irr9q4fjhTTjudD2fPy4qrDfwpqwwU628MHsqFhttvYmQ1nqGGconZAYVhD5E3T1bjzAvVU1",
  "key5": "5vKK1yJNht4pnjcgVyADocAgoz3kWbSyQoUftGMrmnDa1kZ3qPeZ5TJbt6Y1jbyaKpyWtA1ydsMBkMsgbZMTxE5N",
  "key6": "zwSESV7V5prT46UaZuWRHCzh7D8MzPe8ELpn3QNtaCPUVtsCyzvnM9GGpntvACy4y9JZPuJJH952rrvD9UmdMuk",
  "key7": "3CmwT6MZoVFrH9S9RyS7FKXJEJ8jXAuL4t9d7k6zfq1N1eDpqjecva8asotWQn8gCoSGE4Drs7V8uP7rcKCRThg1",
  "key8": "45orqg6DsUFUdE5Apzxr7bFTBLd8iXrJrGDMcvy8TTKmRcnuoo6sJcCLS6SVexosT4sWL6dQbY38Gf2LGkbbXSVc",
  "key9": "49rwhSUF3PVyCvFN8YxZQ41om8QMGdQvPhLyDUN2igF7Bcf55BX2RKZWeimNU5eZpKn7gWAhsBh2wzzjR5gvXvM2",
  "key10": "4cJgq7PJMqBH7Q38LKgQ1bA468UhyFurK2QQ2z76KPy3HEBqQbaDqAk8Sgx27VaCbyZwEMRy1Wy4s4URSPitG48f",
  "key11": "3tkRsg2BQbYYkozMfdscuW4XCAu4C1ebXfxh7xpMvsff2cCKPCLQD1EqZEBQsE6FNbNeWpmmi54S2whzem4TvjiQ",
  "key12": "28bJMsnmBWCzuGA3t2uxQfRfwEwGoZiHF6Kt9V4rDNrB12TJk2cT9a4TRBhRLmNQbfGMoFCshuuPvvi6aKkwkxDc",
  "key13": "2dq5LKNovj1KvcnxmUG8L8cpDLoUimybFwLC3gewvyZtZQU2MVt4NXWAZqksH6Aydo1AjKJXgw3EkGCotFDtgRE1",
  "key14": "4xxPrWpsa4enhvzef2TYQXz7zUc9YSmuqo2fUKpQr4ZPvZdf2uT366DDGAsi5g1tFHpsRy1eMRYfjTFw7sGJmES7",
  "key15": "3czYxt9ydnU7howoLXaQrQXKzvFaJJp3MacBFZfmcHLLEDHJx8FZqQJ8Fg6TgxXeubrtZ3F7YQuLWvTw9sUfYRjt",
  "key16": "4iCnKbe4Wi6Sk5iJQjSSGWSaphye115SSm7bncE4rn2jwfJ3UySYseBt5LpfFcQMPxro2L1fdyTr2caisUfK9yQP",
  "key17": "4sCj8pB1VGcgmockEEFkBEA47rLxn6PHa3NpbD8MoY8aBtpf5PPWzvDZX8SbdjRGqo2LJQMrLGU9jWB2bS6Fuk8F",
  "key18": "4MrTVM2jFX2pyccppNrFUjBrpXrpEjYE6byHZFosjGiNhiQaCSaVEH5Q7xX1YN6Xu5Kf8rwfyikDq9ZJ3Q8p9SuY",
  "key19": "2HZ28Uvx3V8ksn5i7duxComXfe66EwvAw1HqxE36uNSvgRu9fevW4Rk58Nm4dCwCH5adJqYxiMK8GnRsvpdNT5EB",
  "key20": "45eDRLBP3xWE4UKnBkHzeBYJLbuZ6ihZr9vP1GZTtkk3y6dvWnqf6uWSURb1gE3eTX4A1wG5sSXcEBzDS7AVAzRr",
  "key21": "4cXTb68SKsh4af8iqAUjCcaLo2HxvvoRkVfyxefMkHZhN3JvnN54MwDozqz7JB2uVYL2MjS8TVZ79eo2N6jNHXgN",
  "key22": "e9bDWYnkm984UiDien4WJM5Ktx188paL5x2GN1REAMedJpVWfZdyWGMYWPhvHSWkNgktrnhwhZ15NuyEDd8FeyJ",
  "key23": "mjiRiTkfV7HaN38LnioPBLwCHML7oxw4EsehbVq3VkLLSW3T6LLV1D8jqu8ZCUkF38aXHbdQgZChRAYoV1qGFQ9",
  "key24": "5byZMNozLXawNAYoJ2vfFRdE9ZdmCmCZoD3TGDvWvNazuurngt6ZFhGbMLxMpmd4xHWGjXRnHBCo62eNEMsvQfZF",
  "key25": "4CgFyWp7Eft1avyUKX4HZqVonUZMrkopbgU1EaKywm5WgtFbm5kEAqh8W4hZ8eeFxaLHR7rJDYp4zaCXdEVDqdF8",
  "key26": "5ZnhzmuouuYHWcC6oq9GUz1yH5KWvecqRKRWtsMMbukXAoHrkhdm1sJPGMGayoEGHW1haNqmurWGCTzS8Z5koLxb",
  "key27": "PknVc1oWpgxgaZH7LDRG591K8jKCwFPiyiQJCc9kBhFnyN7dJAAcQHBfMNem9kamKHJj1D9cLJZqit1ijGEmRWD",
  "key28": "38wzjrnMpXHSqs4AtbzyqbWw2HZNXWSTyaTAiMF3tM1aj6oJNdVhKrNHBKjZgsCiajHebgCD1PzWWqxbH32SU31Q",
  "key29": "5Pa16rtwqxDtj5MsLxSvXHnBk3QJhWi4nPtPm8A94gUhN1EejJd1wy9KGUR1CWBC5sgUcW26xFy2CEwisBXbZJVi",
  "key30": "4s5MBpjcTK6NyM3Gw1wXTRAyLBe2gCVAsVVA7PBQYWjimSLKmuEKwLiS69hMms7T1db5ayyyWqWbuFqH8qopFySp",
  "key31": "37d2UZGBgE66L4Tehp4S5mwAH1NLkKa1VG9S98TscUQuwjQnsP6tWCmEsaq4TVwwRufo4tc8xxMLJ2FMCmzFZddf",
  "key32": "46ks4MPgQhdagD8LgFh3YjyGK2uXcmrnanAjY7Wu4aPUC81o6PVUdaU7WgBuC94qHrEtEifChWzyFhanhzT61GSv",
  "key33": "2xrw9C5DjG2LRnAaT6PqySZsY7i9ZkcZJkz6dCbJZgKrThgy9CtsSU6JqVunJPHfChd8M2pfSKtCw2NLd87dT5Vp",
  "key34": "3GGG9mjahvqwmS5jJqhw7zC4o4rSdRfafofBh16kvbwPwrmyqH7mYh5FepjHn68Cih5pz5GXArjAmRoR7E6xSvKn",
  "key35": "GiZc3o9YwnykDuCPmMrf4RYNdrEbudBeorvPir1fSY8ZJK3uZ8bcNgvYqvzCGqeqyfGrz5znRmPfsNVdfkKtPEs",
  "key36": "3ugDKRKjZCzxaG1rwFkRys2kiLbFSkHmdoxJMi4w95nvspv4YwvuuCrYjo8trsuF9AxiHAzY9ByD2TeXcegGtzBw",
  "key37": "2X7GoHBtjiHWpAhAWFJpFahiAyb66D1znssQzZEjkGKf86BiLs4bsJRUaSv5mxcZxwZ8M9cE6uy7ywFgfwxCheku",
  "key38": "3dVESD6EadtiDvdNmQpddNKMgfCuKXbEUsvju6jzvFfkCVFCLg2X5D5e3fHgPyVACKNg42hryh1mkeMH5LQgqv7m",
  "key39": "6563YPHf9CozBgx6tRUtn7CLPTQjPp2YJccpzzLqWa36WgUJxj5kkfwr9ZoKEuVR62T7bsCaS8RbkHHTjnGxKbvV",
  "key40": "2eURX16yMVVifVu5ThQjQ92gCCJJYZ1iW8pFEyMp5pEHYA9ctfGjAMXLGxowLXKJwmCh2XQtZ38ZVLHmFUP4N17d",
  "key41": "2GRiFmpdhjKtdmHR26zUH21ZE3Ve9Lg6X6rKLpBfzspkWdYT2C9DmjnYefxwFy4E8j2XBj7i7evrcx6aBwKviSsK",
  "key42": "3Wc2ZbE1BjEiZqhskiPGpKj7BjuiWi24AxSuweBE8JyXP3tVk9vPv9WoNqubcQz6uXbeSZicorV2iKHmNSQrG5EA",
  "key43": "5ovqoTpByx6QmdQwMKpANQNvANQJpcFC4AuD6M16XVvXFttBg1NcgiNWKkRMrNyFX9bxgbat1voWDubcuKHFTpxU",
  "key44": "3Xc778ocKXNLoCagvoxpuD3WUjdADPQQkGfP4vAg53vv9uvPmxG8ErUrjmGEE1VX39448ngJRzzTPrrhAoPW76s3",
  "key45": "3SLpSTWJ6Skd929y95DJpqRhivh9rQUyDgegxGiXWfvdk3hKTS6f14XScbbicn45Qhs9m9bnfExkKhCCRXWX8GJT",
  "key46": "51j7w9Udg2VH987arLrJiao9T4H6gCDXufPMnb1fPSpo9rVksRPjyGdh73v5sFfb55mPQ9d7qB3zDCFSMrnXw6Qb"
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