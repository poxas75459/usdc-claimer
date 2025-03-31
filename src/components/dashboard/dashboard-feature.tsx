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
    "52p81DvRtBW6cZLBYbwX9BC9hDPaEa695JGr2s65PYtZDut1m76VHF35K7LgjArStHQ87zDJMh4hD5zoXVFjToy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pc4RYz62GuZq9gPXYb9cRYfrWRjD6nvJHqgFtUfabncqLKWZUEZSLGGn67pyyh5fcbjTq3ubuQ1XGxRF8ZYtQWp",
  "key1": "4Gdhx511mmVKsGwsqKKchJzHQR1b7RWAPUhtyjnturn5XdD2qbPTmWn6C2zEhDUBMTiy63DSGFAiRxX3twHs2TwM",
  "key2": "5yj5nTnp2wiSYd1tMwxzDXJGVdb918SYGkUZ26ki96QFoj21DBHkQ1WJZ2DsRMUjWdz87BL8UC9DkA5MaPU5R1P9",
  "key3": "4uYqzzwKWmmTa3BNDAZecoqLnKEZP25oM8BiofnaZrTLHjBEmdvJFNPXqVPCk5b2NzCWwQyNpuYGhLdSLNsXxWZe",
  "key4": "3nkFjubYimgowTqadUCpRdkxrtkuQjp4NiN3cTeAQfTLBU7sqUNz8VHSBiGMPNCPVkK2y3SHrteTGYKbKCXJTt3d",
  "key5": "5ZAqmchfTnRsgMoXEhT2S9rYqYhppeDCmaf7Z1zNVZg9YZ3JHWPmZPz6mDYif5bkR49gWUEX8rsQXi5GxZTWLBuL",
  "key6": "sTNq8Hf79u5d5ciyrve5kfoui3rDc1197YrrK4dm18JJePHYSmJLmdLMbo5ePwZDp1bB3xizxRZqhiPmCFQZbmZ",
  "key7": "VRPcHN4j1p29hDozaJCPSgisrnrw1tJd3eqXyPqzWGh4NeNFh5NEsoSfF4pyzmisgk5qDeZv33NtTeTsefSjRJe",
  "key8": "4RhzybbPQAdkjdmnhFRvokX1uRvfWnhEysK6E6r9yK1Z6z3CL1EYggvCMVKQ8TP7qDTrEmCyGihRtwBxeBBCAhzc",
  "key9": "5XWPZbeK8KLFXovSPQGvdFrcr8YY5tWCvxeSB6HvaJzmtbWuJSwfak6oveBF1gMLfobjyaNaNVLuiPszPZyhzZwv",
  "key10": "aNP3dU9qKR3HH9jGv5Eg7ZAogJgMxt58bFdXrE4RPE8Hf1bRK9fBDkVjmLkMgVgtybaid1tAfvrbL6TDbf4Sk8y",
  "key11": "PEVSRgu8Gwjo2BvCfDNTFYretBmoojvq9bnyBSzR6YRKqGQfbAccUA2Gv21pmXQSRQSpNp4ydn2qF64XyshmRbt",
  "key12": "32JjXGBRz8EzKAPkEbPgRDBU4CWjj76yny89uxh9t8PSwiKPHjKbiNT3ugRtkibouWMQhhEZ9MSNbk4zqRuAPM7n",
  "key13": "3qxZfTXXawKjTuoaa6e1v8wLY5R4iYdvRSrjPxgDAysKTeS45ZGeTC2Uo9MZCZebjNxH9Mb3tkHGPWhSc5LphaN3",
  "key14": "2tjzQwyiGajx68udaCwibFXM3Nz8UfvS2EmQE4B4p4u1jsvP6XpobEwDniQAfNE9X9EmAE5sZgAednfEpNu6F75f",
  "key15": "3KpsjLfkCme4uBuJ7cSMi3FVHQ5f9mHc6hcJEH68YPZGcrDwTsbUaksRJj8rByTxmGVbArDT8tMDBA5UB5D38kZK",
  "key16": "3z11svye484LwpUze3pQKwqomcvBHNgAvMUstiTeuSQ7Mmk6HYBui4iLGr6eWNBDDBT9x1C2wZ4fRK9mUhBVPuhL",
  "key17": "5hyrryPBygS2dosYk7sEWiMjm8yUc8gBFSCJUvTXkq6oiJCrRTXmsGHx5xNwEK61b84ML3UREWyJtHnfbsoyhkLF",
  "key18": "5yQ3tkuxRTPf38S85dSU4jJRJJEhA6E4XhZDxaZ48FQvweWdgG6vGiykBTbMLf31deu43b8aJLRdPoaBWuGhUkiQ",
  "key19": "5AijfBCRRRYJQUrqaLH9ZMT36ruqxHqmcQLQhKJdreoqFF5uMyE6xoVJRpEi9u1ZdYYx9Ygr4vPR9dZLHtUrPJo7",
  "key20": "4D6UymK8UbYCYhUN7xeT4UG96RkXAkFjMNEPmxQdkHFoi4sFNFMuKc2HoCnYm4ZD2VJJGtTLoSvduMFJVmbtpHqj",
  "key21": "3KADNrcDuZzoZAuUSLbHcsf8RKKq1RXu61Xq9nVuLNMxU4wB6pBX56QmLTUgQjspxJSVRfTjJZoQMCTKNLLGfrtG",
  "key22": "5M9DASBmCQyzmT716GfdhM5aeB8T9gWo7waP93b3hmBtFPbnp1viSBqvJEjY1k4XPWg4DQS6zXcrA92PKkEgzpTy",
  "key23": "5WqjvF1UwpVeAgDSXamMUmHeKJYYhd8hKsTAaNBpcNtWicvSzPs4j3BCo4GspAtQRypaVo33dAiSVRYbDnVYYX9P",
  "key24": "DsFcG2dd86Hicdh4B6vnxk5jv5oLPxdSvQnSjwBmBdrFgZVs7QpgNvSo3iMdDhjcXWWb81F8EvbENZVsi4ufeNF",
  "key25": "4TBDi1Th9MxvnFwf2M5JfWHt9rc9Q4h8PoWCsYMnaGnWrxfgy91M6uUnbZ3d7whJfXqKVYB2agMaEZEKxqXXzyBd",
  "key26": "3S3tihk8QNfmRbb9x6AGfEHqKcBc57CAGodny2yBtprNWhzGj69bibsFdPbm7NSMJBuZM6zhjqFy5oZSDBnw2RMz",
  "key27": "2Ww8KJ7rCDsGYe1pLEfQ7Qq7NfuShQRnoZC6Rbq28bn2msEdM4dCo6TunEhk3NerSFEGa33jHVmHPsEUc2eZb9nu",
  "key28": "4LXP6PsyuaNxCWHD5diT6tgiaWCCG5nQRoB5KHNzywUYQdFKtdL4B3ozCcj3j21q9gF1sL9bG62RDiKvDRozCuCx",
  "key29": "mPMNU5twjHrpcuURcakUGJouN47RbdUTvnEfzh3YjVpBaHvmqrbQBJBthXN5EnkpeQD2kYpeRkoCPfXfTqQMWaM",
  "key30": "4DvdyfiwXVJNUgDWa4Y4ZUM3opKKw1sZxSNnqxnp3FrF4cREKBKiNMHN24CzoT84HTniSULLEXNUzNZxYHqDdQtv",
  "key31": "XTZmHuDhefxHiKEfWXG1ADLoQDKgeCMYuPfZJsfB7RhoLxHaUJ7gCCkuqwzng9EyWQhUWUbQZbguLrpny8Qe1jf",
  "key32": "5ZgSkCJwU7gsQ8eQx6H1AXRn3pCnhkbr2mMebLHAJ3JMG7SkGrEVgH7dCR6hNkNUSknRnoKYDJbcVmBcLEWJ9hiX",
  "key33": "4PkRsxp5UFPfokd9ZyvsEyE1M4G2gHAjN7kn91h129BSCK4KfZG3YNQ4F9PT1XwLuuRYR4qx29istWxeRHMPiwdD",
  "key34": "592z5EUno6VgeiXFjmHm4rnuztD9xcWxvdpcEVKvt69j1FsQvM9nVYWGBpP3349BKM9c39A7z7V4t2SFDSeYNZYV",
  "key35": "37LWJQTzLmTJVBzsbTh7awvjaeKwjZzAnRkc7WGATFcPbVLzhedvFBVrgbgHXY9kPn5oUxwXzrToqnazxTrVX6sP",
  "key36": "3Vxf8xTfrD68ghfeKEGmkddYVFUpCFw4k7xhmUd8BLHYA6RJKNnzWJvgoHHxZbgeBPeRZWcHhfFLotQQUKHoakrn",
  "key37": "4sHKvEiZ7HHcUWVz5NnfkMt4dJJz2Vb713bC5AjDCoHKzRHDYKBPAHjUBff9L8YfUCESMDeeX48B2ndLk7Ab2nuL",
  "key38": "41d5YVw6B9xMPqvCmF42V5HFawUC5Fcwctnty3a7LuJFYGPTGPnYrs7knmqCQQ9v4AXZd9DUWv9G8giiytdtFkaF",
  "key39": "2WdrbmwaAqSYBqDsKpTSG4pwEGq2yCZRJiLgH9PeD9BeAe4D4hoysVGPUYUFrHQPMx8tECSayxfCteooTHRG5wVS",
  "key40": "5HNyzJ3pgj6p3tioDv1nSt5zUEBz7rPiMwb195AWwkA2gpskwRvh4K4JA72D9U1LY6D7cTNiFMsKmVESd5g9Un7o",
  "key41": "HidEsdjQaEACK7rQ3E49QnSvYuHp8yabJz6iR3yiPLNj6BBLDdaj7o94TqxneRg5ZErqa8yBP4Mq9ENnoo8JnV7",
  "key42": "333uurtHq5J94j3aJZpY5jf9mRLMxUDjkrBeR9hwBXTcy8vDvkv8SHRdjWrR8XGdv2Lp4kpLPsEPmN7UUzFs7ms9",
  "key43": "4t2WvbpX81UC2djyiBCG9UbtxrheEavuTZpWfvDsaar2wxqPvbcTNMrbrsSnztG1FPW6uo46Kfc5ZY749MPf2gsY",
  "key44": "4ZdDQkzxu5P2tWZd1M6HXNXRAp9NmvFjEmGekP7EwTQzwPXfQ54aRhL9TksiufkCeMi7cWtAfqHHGG1JmkbXuwqM",
  "key45": "3hN3XtqUL9aX5FZMGPQkKz68undZAtV3v9DRUmJjDcxHSbFzd4AHbydUetQ9jLXeFZyC8M8rx1DkeRD9TA8un3ZN",
  "key46": "cKsC2HWAqgSgWvygGuxHzCwEuaLb3tT7cR61vqXbWMuFZmkABtafzBGPnarzB92aQ4dTwmb6ux1NBweAz4JzxfA"
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