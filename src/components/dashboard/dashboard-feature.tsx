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
    "4rE2PikNMB3JkEnMg8rukJKniXncLZbyw2dZjxcNm5cWKwYhEUQ2BThmS6y33weSRWV3QoP3YncAnGhExPn8WudV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rktUot8AyHPS2sBN6s7CJAqkUWErd47eLWo5bK48wbFqXFoE5EtCTXYJbmcj6uTw13yx8hBzmNGRNN8xn61SJr5",
  "key1": "5V9peZ65wtbh66xiK8rASExkNLEhmfEtX431569MJNE2Mu2scHR7UXWeuKkUMcDESTo6RSohRH2RztT3zCFM7Qsz",
  "key2": "5rZoBWs1Die3sz6ihMKTVjVwautqyj2cFb6yWKJLo7WBKoTX8datRYvEkkS4XvQbLRFnngstVJ9GQ8Te9778wy8U",
  "key3": "27ds7RnnYzLWgvoFs72ZoZAKjiCpjaXpaAaa2QMTi2TcK6TPU9rYUsGPW6qjhqrn3iY6DFTT4qQKKL2rsNHaysye",
  "key4": "41bfeqr5u3dAjEZy9KyPWuPh5KxuiEBmYoffp79Zamb4ZXts5ZXmd9nTj5G6nbJ1zA5TPjAhi68EnvxSh6XiAAj3",
  "key5": "3XCMhwDTTAz1tneUSX9siYkFXJFDTukUiXqFgzoUWuYr4E7sjVD5ukP3Vv8vXF1gfCHw9prrtmtUfCf1parLXEtK",
  "key6": "56xqcdZjThNCV8Dwag9JDTPECSHUoU9Lby2KgrhYq4E6kFZ8JvWmu9wS1T5yC9VjftN8gJ8LvwcKj2jvNHMVrW67",
  "key7": "JxtKUKcz7v4TXBZyLUAYYoMuPFfE2mcsVgtCRrhcZZFV1Dos3TY8ECcpGetG2p5sHD58rYDwdNrHffZdyXN8Zh2",
  "key8": "MBsx4XoGWXe8gaZpX4ZAYGZUqUm3AQnNaSoU6eF2f11UhtPADH2ShYf6Qn3XKmZd873pWJ1uPEHFUTq3RCgYiHz",
  "key9": "3bzpF1FZ7mEvv2wHYSzvDkPhPCpnhNNYLjCgAwdffqbpmrCKrBnis7avXgmm7D3z4LFF8tVtFPrqyCLyVTmnRtpj",
  "key10": "4aTeZkdTaHsZu8LLZTsAeLjvbQxcbdsjnccYmqE4QH1ws9bcN1CxwymNi4SnWSYPsjR29xQ1swndhvuz9j4f7ZdU",
  "key11": "3V3JjfaJ9ZnmrgbroLXWccn2EHnUF46uZ4V5LAhJ68zhPzg7F67cCcZXTNhrzdcnngfR2NiTya1hxYKw3TQC7bQm",
  "key12": "5ZURNQ8UbLccUne3DrY9NJhv1aZNzEqvxsJKu9NJfPDXbSNWCtGcmmDvnKXrbSNBFNSjc8gumCM6E4SGbGUtfVn6",
  "key13": "4yVpWjERKDEVHrn7uUHmtJrrMtXTsq2TmN9N99uRpyiAszTQw6dtLUHwhDozrkcSX2aJdj7qXG7AkuE5Cr29fDXE",
  "key14": "2hWMUbPKHJmDmQ3iSU6VcLAsxiQc4kUF9cJdsMHft5TPdhg9xByVp5GvvteAZtKFUpDgMzgixaDBgcdzEfrQwSYn",
  "key15": "2FUxepgWW3x3NJ6MYjsvTS8yEfcrbzRGfbcXfQ6VZbz2zUjo27rmyQ5cNv1pZagYJBpVoVgmVBZRLfVShFPf6VVQ",
  "key16": "5Co1Gm5V41Ugzu4Jsx42sbq34XCr31XDui7qm6pwraaZZ1hbxnEvFoiLEiubxehXceDYypHrN4ZQ5S3eGvh6PXzS",
  "key17": "3myis3jzFxek6ygcLTTDC5YkpUxwg1r7jNNnDwxNM83nNtwidMRRyXo8tDLPBSzX2eHyXcpBYaMUVkpMJLGn682E",
  "key18": "4WyXUH6CzuMFFAfw3Hz2vMAthGBFfz9V9R9WLAGpazMvizUc2eJMBiXjWuGDQPZQrx85BJY3KK4f4YQT6Jtz5fxk",
  "key19": "4majZKxnz6Cx3yxDPxrVRwD5q56SZvSeiQrc3mnsqzQ9DwTmMd56nkG7PpUaKCJEkKC6b4ugKCKWJ83UDbHSh9GY",
  "key20": "42XgLd7n5tfsMQLev4EpBGNgi7sUBwSF9DSKDYLXFh185UiDd1Q4TA1zDf9j8JS3cb9DbwXGVA88gZScbEsejuAM",
  "key21": "5GdD8UsBoJbAHEH9LAEfYxmAcFhrrtbcKKv7haSe3TdkcsH6PQzreFo5tiL7bgSXRm8YgtnWhGBFLAMaDiZ1e55Y",
  "key22": "4rEQLcGd2dzZkxhBJSK75ZDrctybP99fqEnmjL6NcrA9HW4bt2T9h8P4puoBgro8UwESowNLSoxuaVhRVFiJY8vm",
  "key23": "4Ly88LuFKfW2xADjLKNDqqQwukrRJBjN8nTrAAiSGJtApEsR6dmLS5eT8wzmKbhR1hJShBpzKLUjas7r5ewzSwb7",
  "key24": "9xqukMHRK6hNqzzK6Y4XAnAmQqvUtyqwGvGYMRwFyrW14vY46y9wXQ8rqfwmRXPXd7MhZEaUasu6cdbrTFq72tV",
  "key25": "BYN9ozdJsrBhkq1kQCVHmMVZZPaFFQkQfbWbC9M8GXt7CRfwL6uCHtw4NBD4XCWFGUJf31WytChQGKZeXEpvGiG",
  "key26": "5KxYY228oRwCG6S39Qzxi6zM7aZsZwYKcEhzKEdLd5TjWbzixrwJ4BthFQoaWcwf2bQXMjZrHpqrhCkSuoQwiEAD",
  "key27": "2f1oDFeito3LCoAmyKJR2UACEnM7fA3uaWVgeKqq9RYuw1pnkAjZfor55yam5dDpnaPnbC4KFHKhrj4Qwvai9bBB",
  "key28": "5ifGqZNYoEVsUpmHPcAw93HNKy2nyB8j77P1Keo1kQjeFQri6GqqT3mYrKwKEiFcDheVRrmr6axW2fiLooaq7bJ9",
  "key29": "7261c49Yw8fKAtmhoJLW3y3kvbABcZoTrDKtceCc5N8bFroN3pk1z29zWvvHw21yVGFMSiDqvyGkdgrpB5JVXZg",
  "key30": "jcctsC2x6cPYry1DGvAdjReityben2xv46n4HgE3DrA6ZXTJKCz1xv3K77kriBnaHmiySh3JmXbK4rauaSjPEeM",
  "key31": "RDKxbGoPLopY4MUhNCSPGZjarSvh6hqdh5qBBYmXmfJ6xbDHBBLBLEjMrAJ3rp5wMhkw4Pr72KxqSGFo12SxX3v",
  "key32": "F14VMMkCSzvtWycEpgvRLbnH4UeKCvY1HALf7Co7tHjsVQTbEwjuHJvJKnUdqMzYLAHX1A9FqmRZGXUHQ4HMvCh",
  "key33": "2NbaxVs95U2fBnCMGtB3MBo61BRyHThV4TiH2sFzMvKpD75kNcwFjf5ksEzefuM2rHutRiwYWrCqbcaVoxzfpk6G",
  "key34": "2xRUv1SVgehf2tpBaDu2WgKkUKFxk2cBt4HViLkw91FgPjSwT3UwJhpoReAxK3ZGpP7ExVKkMusKgXQTG9LPekaF",
  "key35": "4xMk18o3d636ppg9MW6S6UpsuaSyb4UTFUrnzGNDChb2qbJX6rkm4QSPUzdTWQt3Tbvo7UiwmD6bjeh3ASBm3FBW",
  "key36": "1xS4uCNj3N8omKhRLdmKKcFaWSeodB6Hk3wSsaGNwUHnjAcAuEJFcdjjoSSJkfjCK9WEmHYMUZzXGS99bgBNqCM",
  "key37": "45Ku6gRbSitED686dugKypsXvr6ksUQXVYd3bw6AZSGVD4H8xsBqxwh1Thx9Stk9nxEuZWHcMGHjwX9EqnnbB3RD",
  "key38": "xamAmUKm8Z9eAMMiofkWrThaSbYpjTUgZ1SRpXbKbU1VJUry39h1Ph6tqWU1JRpSXwk7ytJJmrbiPD4wfwfsvaF",
  "key39": "2hX8Q4Hu9Lr4smf5y1pB5HNYUgiyLqjvbGtUURdC6DrojnykphLBG7NRpZZbfp5CohdEpUwCpUnzqSjfBoAydPRr",
  "key40": "43YeSNR7ucMCLCgu2sbdLsrfuJQC7TKSGXceapdjacbMguUmawBHEJQ9aK3tY7MfPF5ubnZoGFdBFvBPfmwRv6ER",
  "key41": "5Bdyu3Xy6sFBn2s25LaYszHAdSwJYbpkhhLyHBnL4AQ5H4ohmrydQzipeVjFU23M5aaW1AF6TMr3G3n3FYhEQpbm",
  "key42": "2prgJtLtpfrUwZWBBg9suitLte3enPWw55fPqEdXt4HJuACXVS4RvmTYxB7Yhu4rDk6snuVTs9q73Dc86cs9ixav",
  "key43": "5Rd2KYmkUQu83QJwzY9SDbh72i9L7AADssp2E8goE6hCAve6Fag9EtYVfCeydMXPXGwPVRcrXe2MgtAubKrsZtkb",
  "key44": "4fADqXB7VUdpQucvQ6N44hELvU9sRNEFrSuoXgAK57BDL8vAYeFjPFL4zDySMw9vLPfdt6pYsxzhUABYf5cHjwUF"
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