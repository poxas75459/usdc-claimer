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
    "5TrKkU4veQC9gRWBoxHehCzm6RcDVbcdhfB5HV88HtwXdFrMW7bfe9wpRJcnsbqdAvFZeuyEtjyxLKbLUSiBza14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T1QvYwYKEeCPFwJhjqicMvJRzSdFsomtW9SFvrLfscUGdEAmgXmcxVuEL4XwyBYpdhR2vZZgoguzF4z1zUavEXk",
  "key1": "26NhnqixaZfhYywALPzf18iyMZLWBZbXSDt8aEAqZrbxv99pRB1xCjGe8pofC6w8fjnjoZSVnQ5w17PESuBzyY2t",
  "key2": "3TtkCrWJZ9WEAoHxEC2qU7ZzSu2cDzGzG8qYpBNA5ex5pTshceA8wGA9khMVB1jXuKBcjSXSuPqXcWbymosf4t3x",
  "key3": "42A1jT6WrnNoYGoAEQJuJ3fFe89Q3Ct8ebyzZf3eHFPix5wXrtkibfn3HNRVrQSZZGygNLX3zTtPSFkBVX5yiiPH",
  "key4": "hMzRY5QVgjiidCaYdwKzuPbtxpDUBSpGZJE7ZxkeNYi2eSzr9VCU99BSDm668CFgmo5EjL8vnFXEdtCH1XpuY9P",
  "key5": "CLcUgMAiY9DCC1P7NuQk96QVzZwjfKcgSZz7UCokmCW7RAMz1MDzUdTB5f4PVLdQ6ZpCH6NfMRiy2YYhB8jW5is",
  "key6": "4V53PSe16VKur6dQMwRrhDKeRLFrPX1pRv2N8voqSEoZUKybmxkrsrwpxEZT1bo3ytUw8jFe7bkL7XUP7MxaGqzh",
  "key7": "3LBGhbDWKpoeEHdWmFEgf5s6zuzcJgxTAAQVMvpmEcz8vEu4YkZUPZYZofE3e7vEUUAJQh5c8aT67f6mifEcdxmt",
  "key8": "3peYzHgq7Nq2bDkdGTu9aGWCKFhpiv72gwCMHTKkaYyiq6HXiDcFqEQ6QzCZuRTCg97bxnmQLGW22CiE9RqDi2co",
  "key9": "5vnLwL2GHbHrNrvGCK9VyrMD9KqQHiaJLYHcZc8Kyu5NjJ8W1bWsvMdkFiVsB8b4kHYfLFwfyeZWbCiDf44ChLq6",
  "key10": "3xFBDESGzDVRTJHyWRgdS53SxV9itbLZto1YCU6yi45nms7MfBMjT5ARDMN18RwKoebjkQezKBWZ38xCndnEfYLL",
  "key11": "4Sqrbw3YYktySEWnduo5tKdFcnF8qRNAeEYoMk22EB1d13fvmqzJccJB7tr8Mvx1VkW4riuha7BnKAbeAtp8fJc",
  "key12": "xGaSrpVfu8WcQ2PCp1mxb5yXCazYH4jWeHbiHJkx2brG4m45ZeGMC3MxCqYHsLMqEYXS15ZVmR9gewtV6a7fttZ",
  "key13": "46XfkfJnw1TU2jn91TTrGrDJh6Cvq4DWR2ApPyJ9gaj3EgC3RQmvAX2C7Q92UCa3kXxFkJvboz8KecQkq6iXL7rq",
  "key14": "34EzJbzc8MZQMi3gsu5PMEBX9K1WCmmR9ZDrqMJrfMwFEmRS3id9n4e4vmo4zge2FdFEYLVH8818ucPLdMzTujW5",
  "key15": "CRBSU9LLe6Q5nqgmKWDX83EKkuRfm8WdDgB4kTkFrN4PhiKHCuX3VNEGhx71k5pKdqV4nULv6DoQVSvMbBoyDjM",
  "key16": "2ahiqziaaLKyJacPMghrETuajnkW83AGMTJ8SjXCEZxQkyi2T4JX72xx9J1irWDxTgfKTF78JCS3VyGqEuXnHRjv",
  "key17": "44CXtN69fRh1Ege4RFDuQtdJa5R6EkFReB4LHs7sxRim9VrETeXbTeU58sAE3wQWuDrCsaxLDMWhQA3q9X7ep6cE",
  "key18": "566mBdwv8GFJ7HFQj1cCBH4WKS1cJ5rn7xH5JV3JSGPNqYdLw6E8cHLWWFTzajfs5wjAHUz8CVEbnsMa6mSDvjVw",
  "key19": "2jDjwSPCWTktApWebavbwuws8W8NPnxmLr2X44tcQXPUGACuLrpaHmEoAbrVyx2XFRAfCsFecV6SbpD538XLfQou",
  "key20": "5BzuoMBUYvxuuAfkiEPfLXSEeuL6AcphtvriDecFMDpaQqSEhGKj2q3MXRYhkprZ5pkvd1nXufcYhKhoz6wXtr6V",
  "key21": "3FzxUeSoe5vRFUhXPeLNXfNj26DAPoVtGVAuVhW9dkUDLBPL4CAwF1qjRpoLU5xVUyDXjUqwxcXeSABsmSdduXKM",
  "key22": "3cfEAQEkGi2d3sE3w7c85FFWgGAEYD1V41zEyukWzvAguGHQpFeZL1q9w86kSQzhTX5xumyg3zJnEDhTVG7yTGyC",
  "key23": "34Jy9p7wg9uVHkdGCiUMVjQmQkygCoc3Kh6PN77AwuXBTRdCrLTgswfuyXAi8SYQqCdHyN49JhDDrHopDurQqQ7j",
  "key24": "5eYSGbyuhRPt8BTmQKVVeoqftaVNrHbjWLThUg1oexMRpH1zpV3eFAzCa2Qo1YQTD8LqDWYC8i8W41a6U21Mn3Ky",
  "key25": "3E9yReuxWnnQB2VDJpMQDormFNXukfMzaja7jqPcmKWtuGmPDsufkk6T4cDB83rCi6RoPkCwsnBDPVJekEofP8h7",
  "key26": "2vVgyVG7iCqxXHogoKF79oYS5vj7LzuPYmDubH2ibpSz71wPiMe4ffD5kbsJm9aD4Rd7jYiY97rmD9ZKpUaBS9vM",
  "key27": "5oqXiMtmjU32Ha86n4jcJwRihUenBJ23YcfmEbpT8amMFnWfupAx8JcqM6PjfGs3eevta2eGTqCtS47sKPUdzzU4",
  "key28": "ndgczcAhgysM9pHjUginavmSWXMYgpDjNxuyYrzK5Szui8zP7uBWHPkNziX6YJ4t1eZ69AFqbFzR4HkXENoKuj1",
  "key29": "56LF51R4oR8SxWoJAXKMEgwfQrykXXHYA83wqv9C77WQJrMaijqtFUoKYaZq3yhaB6qTiDTJC1j1fM28G1mMGjnM",
  "key30": "4ftXtfy9fkFmupew9QgSp99EVJonsQfccR9foTXaqfokH4hN669Cj6p6PBtbjqCJcMxftgNkVwH5Uw9YQwU1q22o",
  "key31": "3e9PHwZFmtKQXbUKFM59ovdjgyiFABErTBaFXjfTHcnpkcXkFKReQ3YcqGVDvYJzRV9H9stEvr8WPeK99cvjDZD2",
  "key32": "2TPgqWXNvUbiz7HE7usDAYSqUiPBb2wpEfV5ksfZo18QtkQXgJwvwwDCdgNULbEoW1CXuEpNY6pEv4ZcFSTjYwEC",
  "key33": "7c4Bkw9PJZTwc7TcSqFKnnpqMbaKhVNTgLfdecSaPunyFM2bim7tsUm3wgtBG5XSrnfrJGD5rDLs1f1DFG89AGs",
  "key34": "56CoXZ5aRnVXxoNSRb5ZXVxpkD2Q1qSvRnzF8JCZDUXmmSCvxM8PLKwU2Rk9USy7cp9ftQTEGuC2SvgGnJsKTZBu",
  "key35": "3TRJKCbAYGCR7d5Jo4B4Rs5ftF9eSPBmvxBrSdUtVL5x5aTBPEQ9MGG2bTHkFC96YJ5xd3BwTwByXMdzu7w7gUtT",
  "key36": "26gL1SYmehujiyYKJrLfNvUJbFR3FVTcHU4X6n3q9eniWfVRiDQAjZNCa1stUdmoqx4mi1axNCKeKTrY4nQmVBE3"
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