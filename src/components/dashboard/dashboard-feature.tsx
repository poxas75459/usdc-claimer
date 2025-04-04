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
    "52WCy9Vfv5odEDwSbj4uWMmzdCikaUTGDBKojmiMtrKhz16z29baV53MiCPJELLs2G9x6RwSDSTFAGeewbqpsKLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hu67yFeT2o28WTZv2VV8HQhB2kDm82LjwZkLviMcperwJS8dVNCJhxCJ96Jga2jwVQaPJL5fzgmRm8duGZbz3A9",
  "key1": "47WpGbAdQHck9EdS4nQeBzDybWyFToztiz7rDzMAzXbBDndGN7jnLnpj6jbrqFVPcY5ePUigLScETB1npVwMu8yi",
  "key2": "3sRYwusvejBn3UkGXb1d3KFZymesniHr2yX2XMcspCQXmkgEKziUvexVEZwU19idGhxg812QVoooZaH2n1vyywKe",
  "key3": "2pY8PtCFTNhfzRwFZ9WxFeijKQjdsAnm5Z7gSk6E79spQyPDya9Hk3hPXESdmvUTboF3wMSqNnNjZQuvejrGHAWZ",
  "key4": "4TmHgMfCPDQz7Wn4epm7dZEuynmDTAhnRYARyabNrFHo1cvXySU3BrsSAa5kNrdEmyF4dJZA75UDswuRecTkoAbk",
  "key5": "Kh8KkWFGbSKXbEXJAppgLLnpYLkY5PcRhzt1zcDE2HZ5WLWntUj5E7FuVukgLbLCik28wTbrT8djcYViSSm9Ken",
  "key6": "5JpvWFbs9A4var9rq4YNWwmrDVBFFfjJqrqRCrQaAchwwRDNdcLJeFTF9fY9dLiJF7uv7oY6MAX9iMuv7SaWgxDh",
  "key7": "5exy35GF55VSoLFM9J5LTqEt3vkZeFR5Pvp8iyvfzAh93zGanHDuNrWdmCntXYazZTw8uMueKpXnS3N9dz5xx6K6",
  "key8": "4F4WD8xN8gxhdDCtJr9d2qVqR9H6s1YXRqR8V4QG7eQ4X9DJCAJR4vJNWSBmtmE9RTHWWhb1iR3Jgm1CDsg68eS7",
  "key9": "7fkaMhK1GFzsdpizauSPvaDrg4AEp3BEXoMv6AiyBbxHzzqCAhAm53PE6tK6bP1PR5F1yTuUs4CutWhBPif3VJc",
  "key10": "2apLzxKygbED9eLFBxp1Pt4F37YiWAmVsKt2qeKqu928cgd7zQ8XsKjtatRtFWXfE8zmXRS31mw4Z4Qf7MmcFuRC",
  "key11": "PZ7vV5cMbLjjm5KfbfHRx4SV13ya2Xo2Jeb9gtazFKs4V7SGtKHSXMC6a91PUzSTCHV8yYsnMJunmwaTxCPSYoE",
  "key12": "5p2xCHsGzFQia7ezHLAVvAfwTHTmo7ycDDUWoyaDCntj2kjyAno3arM2VTDP1Aa5TG2j2vAGPRkJyP13nU1QSCAn",
  "key13": "hUNS7CVHn9ZLBTG5YsedjLBf4EP85duH9sZv7eCAnBnd22WqE6KaSssPEZhLd9Me338s3ezdxxVqr4RKmSHqZ1L",
  "key14": "24QBToV45UFfdKSb8ykNeQgabXGMYfsCMxCDxJqaPPMgnx2CiXsMDxFwQZAouU4La2hiDnXSHfNuMkto8kSnw71e",
  "key15": "5Ekjpi3EvvaXtJJENJaNfne3z5myyKyxHzn6FLpbSwGE3j8G4pXiRMWwVxwc5du4hphEvmTRKNChyWD1FaShQUZL",
  "key16": "2xVqRkVoyytR9R4GVs6sgiEwsxPAk7zZ2BY1C9imdPbnk8j8R6ygBpqYXYqZNW34D5DygFXA24KJ1mHioDA6FN7v",
  "key17": "sNxATBJ2VbF2uX7NESj4118iNrABCfzJQhjPowDyEkm8kHefknP2Bgi4m4JQVhdgnznoj3eyL1nvKMxavfowV9G",
  "key18": "a2tRNERK25FnD1t2vhBMAKNtbz3kWhab7u2iS6spPczTfM68X98vD3MAupDnZdoPCFwJ9kBNg9u7y3SzbtH8evR",
  "key19": "2VGR8RmrK8xKi4yDxvV78hWRXeTza3n4LkxfQzeTTeJAxpBfUTYJxqAWQ72mW2sh52AeP3TUn1KorP7wmQuY64vU",
  "key20": "4tsHhfj9CQsneGjotDXbADfy91kes6xZDzjeuLdJcLZyFiqUuTMTSMtpqDcjYQifAwVTBMEfkdbk25eTSskD5Jvt",
  "key21": "3WZWV8nxAwb6SbftBaMg653Ju6JaGVjpKFMq873y4AKWa78BQDdUzMbMVXiSTb7JmFLXPDk9UmGAwsvMMxLhduwX",
  "key22": "fpR9bCCQpGjeChuws5m9CMkPrMpPVSGE2QsCLHMS6KcVL4YYw7L5DWB2gJicHAWiGfkAd2hf6zSw4tWSutHpJbD",
  "key23": "4RoRftwjY6iGrDVG5Cp1VT1ShV2kYnhJGb2DcbiDtGi2rTnvGRUArrYnTMdPVmVikCXqQayQ5qJr1Mk5qCG7vmE7",
  "key24": "3tVS55PHUnSVBNwX1Licpq1st4TPXqT7eCip47dNwHjnwJgn9Pk84LxpShGVpLvGTbbxNGvwEgh964MxJvauL6UL",
  "key25": "4SLPpRCGUqgJG1MYA6vtfMiVACs9cuVsTcVPfDUf7NcuyYLeUJSbEvqXgvkYBzsfzQcwFAm4pTeAMZv1CuxQyePP",
  "key26": "5iAsj2tCk5VL2MQsRL6ZfjrBKZyt4hGTMvorqXSKXQqGYVR4sAvSgDDoXcZrLykxp4fSCw9tYUgdxauwhw2JKLLd",
  "key27": "2cWJv2ZAaq7UceXjtE1fVfZ3i2sBh2GQk5gmsQtMJKhVEwzTGDQRqJfWpGQozcDCKwKyQ1kSMwUCfH3ueThEvSMg",
  "key28": "4ezcvqgGxkmoQT6qZuVvYyh273SNZCqjePQ6z1LQbTDnaHJXtxSAk4BQvLPqyMJR8e9XUAMZyoVwAmF9M4g5dKHy",
  "key29": "254b94bubBVWovbJDPhtDbeip2L8opSXxjb4QCi94nBvxKW1SQUCBehFwZPNvjFJuGSwvqrZo1GZ8pMMRamBsKGS",
  "key30": "3AmAS3xj7eGeou8gzNtDrrt6rZahkG96ExV2fh6ZCWDMhaEB3VwFE7YoUHeE1bPy5D65WaqpG2gxgF4RszHoXhvj",
  "key31": "eUYciurafij4QoxRQAMs31PzDg22kKE5tG1ce4UV7EmjR5zJScQHCxQRSgbrqmsxNcsnBDXY187ZmgDyKnvq1mi",
  "key32": "5qyN2vRqwtTo34r3jCcuJ1kAyPeu24PZH37JKvG6VvxwoyzH1zNXbtPpFkjYQgb36A6VNEr6DxVLjmEiE1Mq3r7m",
  "key33": "4dqWQtQb5VmRMNrjnsWkULQrE6B6NEsL6wRpixq912wSeEEeBohcL9C3HegVCL8YZYY1nS2RTgbYvcmBGPgSTphP",
  "key34": "2NmiWbdbwnk3DYns9ihdLUJnyqy9YkhbbS3WDHgNQhManisyQA7MF1EaKj8XK6XGCYiivc7Rd7ALs6oXHSej1uxc",
  "key35": "3XkPZntpwrVVY2EfZX1TJZqV6maBTwxzxGvzwxuucG4eJCZfpivGZCsb94yaFyDck5X9it4AJ16etE7MzHKf2m7Y",
  "key36": "2snj8QS8Q5T822YRDpukeUzGcocZW1v32B5tjFSezo2e2cuWu6WFZxrhTBx2KDM12hGfmGaY1DVpa4raPpCVBg75",
  "key37": "2ACHtEYjjyPLubhrgGEYSyCRZjuPVRW9csv88Yo57du8xbK7mBhJET7KwwaugsVUbFmh6syBNarUWzjFFmHD8YMG",
  "key38": "x1n7KBtWoXNZy2VrEStrTW6SvrAAo4BYKdygB7FtfSPoWAymwx1Mb8jbRuYp52p6djSNHPc8WpPD3yrGrP1nuQU",
  "key39": "kWak3wZGGLtTX6QL71U37bxsuwywVB8xhtUqiNggVmsqwizgjV9b2Njx4Nfz5Yd9cbUPJSNhTXxPhTchh6QpwNx",
  "key40": "2m1z3ko5mbyhJAqibLWERTYycLSJ9uiyCdZDaHYgkEtpyLzU2tynSyzppXJu9BWkN7KHAuVf1aYaCQWVGQuySgh5",
  "key41": "4HCqSfZmrcHKM8xXXC86fm1EGZtTWDHfG8CDviNDTAfdg4rSXA8AETEhKWvx7mQ8MN9Pgsiz96zTiMmnL36cJZvG",
  "key42": "2YqRBuvArbWMyrQvjXkCo6GNVpvuL2C4bX6nUpJwzLSAbavBrt8zBF2V2LX6q6gGkb5UMMCMbSc41UvRRszwS8ZA",
  "key43": "3i2rJE4Jb5tCxJTkvEDVw1fLrDjcsMVy5JdqBmAxjAQ7DysiNDXq4fFD6xtsvxAfMAdRM8jNUUmDxRZirqrYx5AR"
};
// KEYS_END
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
