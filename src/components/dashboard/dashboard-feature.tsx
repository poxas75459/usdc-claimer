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
    "4q6YyNeMHPjGJVjvte6fTTq7Ei7kBvAg85bvohSy9rg48SyjDYSsYZcVZY95dyyAEHQB4Fkkzmjw4j61EpoBNExg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27UqaZ8rqaNYqSegEMiiSy1ub4BpYxzBMywtWRwd3n53BengxZjQyqnLmF7m3e9SjqsExEr4Dq3dxGmhbWkRhqPv",
  "key1": "NYuv9E2H6zPEtUru1CMu8oJuM7kB4aSTYa1eD1y7wVdwjy78ekJ2b45UmH1e7WUWKJWktomk3eAjWQXHJTQrvMK",
  "key2": "4TNkBvjDdGVvkUjzRPSuaNhTwRTDRWskKn6eNkuMoSJGHZWDRvcaARvkVhuKmtutFwcQ7CxRMy3sUX33nrsJi366",
  "key3": "YvvcjoAdcWbM55mfx9RJpwmamJmqjJFtAwWrAxbZKF79WSyob4WskTb6C5WdSy9tzFyk9Lqp6bfHjhdYLM9ihxB",
  "key4": "2Hm6zmAz8dqeK8Lx5BgeKWCh36aXrX4Tz1eDfQ5k1dwC8k6KGnjwzDuzvTzxtXZRUHtU2B7soo1F1rGLS9rgBPt8",
  "key5": "4jhvtb1EnWkctaYwD8h4SdL2Tws2jm12RL4LyH2ngVHgLfoJTKS6SLHqRpw6XErK1WHMpRN356ESk2BvXSUfNeEh",
  "key6": "2GSgXBX8Dn5qixvaASTMMQFkaPSyCgbj7WMkgjH41HG4kwb78yYy9G7DAbfgV4cW4yFVsQbHS4LRCgW46XK84xU3",
  "key7": "4nkSkroRTeNfU8r88qokbF2m3aFCTL4SVkhD9eVScnZKJyhPewHt6L5e7nmfGMsbTJYWwSxKYW8BzeKNrutTKKmv",
  "key8": "46BUSes75fr2hLR8qxDjDC8Yge6GGA39kpFQqUmvf9Q9TLE5EnKZ9F5iRPSmzdH6TXGxomnyf5dzQ7PZKP7uzWju",
  "key9": "3Lvzxf39CmWnSM3G5pkSKmthx1Mu36oy91oyGcvFM7Ru7C936NuRTJ2vF7HZWY7U1puQXtTEmFopADhf94YD3CTB",
  "key10": "48S7Ua7pBcJT2BN2V8vC1L3W8AF914P58yoW6gNvtBTq7gS8DwJcosgz3vSMCwYoVnpMeLgbb3gkHCkHQZVnQJfU",
  "key11": "5k7HHsdRjxTahKKiXaRRJoi2SyP6ydi2q5kbwuGADMkhWr8BLJbLRGM4r7dbpkwPo2XmAySiTHtAfRwaKjgU6U4P",
  "key12": "5QbcRP4BGEpnwvF1PPDdGjtGSQSmpYgAiihMw8nrT4AuFh2hqV6k75mgMEZV9P644Pzattu7xadUuVsdMtHmBhQj",
  "key13": "46tNhrCPshjt8NDweZnGRg4K2upGVpxjgcWWTFHGvUbJqX3XSunMh4VivSJSABMgRkvTinvAYdAMR1Vw8Lg4fG14",
  "key14": "E3TSvgRJdVoFGvG8Z1JdVt6wXS2GForUTsVMdBM7Y9azWyNDoYsXuZF1hFUGVdL3XEKuERv8iTwvcZCSbcmda1A",
  "key15": "3cKfCBxvSpC1dBsAqoeg7SjW47jgwuVEzjhByay6EsRhvGjKrzKT9SAbcc5QqvT6dtAtgerp3uKoFbojbgwd143C",
  "key16": "2jNhFHrmgCnm5edFLhrJEWNAk7APWJ9TbtNNQShdrG4cLDrnNNkYx2GqXJiR7JyCRaoehWcmDAVijK7ZiW5m3FHD",
  "key17": "5S3pLnQhkDsdhmVNZPDySGMFgNDZsUUSn4Aqbiz7kfiTy9Sr5w6KhoGSd4A7Nrm532CEcBJk48m2XzosrRZvg8vA",
  "key18": "3WbWTvu9uktq7qW6cNkMvSkjiRHC4D9t1vTU2T2onHC3AeSg4CsqoKcqKnem7VcLzFXYPG4SHfZih9hj8s2yrFRb",
  "key19": "3XTN4ynjSsJ5Ug3N7zceraUratdfoxKkQNpYAWGgQ8ahMSJVn38c84zPf4Jnfn3a1VPbSABfq9W6F2oGTV2SWPfz",
  "key20": "QcTyZLBnP7qwKLVAvoMfXqvkFVbJLTN9AFW2FfQW21LMAqanM6mEpRfuLkovYVMee18Ax27otS3JmygEzG2HGmt",
  "key21": "NPa2VAB8KyTaiczNxVy2WpPwoGDxFjvqYHbVWsDxhuneM6Bt25LV6f7cEv6LFRCyHnL9sejtEJsXxL5Du9SJa7y",
  "key22": "2MNsLVgkyYAzsj36fc43YcPZBEkpStQKmRDwSQT5xFnHJQBiPkRqPpaV7gq2veHajEx85roXUGkJMvD4X153gAzt",
  "key23": "2iFrxcPojW9HczXES4KpoNgWUAzQUiqdhnFkD5eu4ZuhxRPWbifgoTwWwKeYZjNzFTm2QnqTvt81aBRAcCEtE383",
  "key24": "4FewKFQmxvgjz52frE42kpPPH86C9QiAgb3ov84a5xKXDNDL5njNnhYJPPqbRErXpfCf2kBCkavqztyWuxY4xW9A",
  "key25": "4YnaLqiUMZRe64tyFaSQUQu68SMvSDH8Zb5bF4VRAo5SJXLHxKPj1zxpC3xR8tUTRgdH1LuiQB3oz6hypXgdV7Y1",
  "key26": "3YGVekKN7JFswzzjYpBbS81MUZB8yHjTirEWgqE3iiT6XmhoJwxfGK8H7Qo6h4WJoFURhjxs39Q9dPMDuidrkiNm",
  "key27": "44hJsXhVjkgZRLARYUUSznveFDxJZLLgQY9h9McX7kv4SDomCvNhcD2zGRDbnDFWnKn34sZNnKMJpHoECrDwjVbV",
  "key28": "2TcDmcTcVoEXJU86KzCHueeiZ5AyhjxQssUcYWt8VZfDWSznu2BoZhdqFbPLH8CvXvsq5PNXSsu6mYFnDDYp3kpz",
  "key29": "55wig9pxpyEsU7Ajz1L5T3NbrmxSfxi9zdrMQGyfu4gLbbo4638fdnrSYTvydgsZ8aG7BdcZTF4GxoDecK8YTwYt",
  "key30": "5iZQgDWFA4n5jYKntMKktekQSM8NUbPdQL3wpaFF4LjkYLrKTa65rQmURuATUuGUMCipbkkHSBT9MSrbhaNTY52H",
  "key31": "22PDudrh4kexGXs6RAdMg4WPqP1pYneediFjs7cjmsd3NKk918NoBKAoPw7EpGpNJMkgE2Ej1n6yT7WxNdD3175F",
  "key32": "5NniiYEhbEL28KQctFRCgmUjsbykeyWZcDDR3dXVqvhFoS5ZTEqWFQYGwRw9C17H26NtKRfSDHei8tvC3RnroXQC",
  "key33": "2ZhymecYErgSBxU6Dcgvok1JRQqJHc6ciDEkaefHDtuw4d4N1t5JKB1DT7XA1V1EuRErDEXEVTStnvLYjyQofCRU",
  "key34": "2nHKWSrfXrmRxUGnCYJ3em2soqbcoRg1dKzfh3Voaf5jWC1cg7frMBbSc3KQo982KcQB1M4Ta4TDMVGT2EFjN6UE",
  "key35": "3ND6K5oTfrvhmjCuEhCiZeZBk7H88kRQGmdn85uaV1ytUxb8xNQgvpf812TdZ9ScLx5FcqdN5BCWYEq6dk3r3EHy",
  "key36": "5NgQdkqbqoApUbJ3MkoAVeAPtFkqPNbG1q13xcpGTHyj6gANBwmkoF1wPLwXncfRuWLKhsz2JRtrNHrppXQKuVDw",
  "key37": "3xDVnsLxviaqptkQjh3CTHP6W67xHanfB5zJzpyU8NMUi2rCsZx2mh2nLwySLureSZ63RWaFgoLChuTSMQ3q8t5Q",
  "key38": "2eKgDc2AbASPCx8CDacrF521TsFknuZcWJVP7Nxhnz7jFff8Q7s6da5ud4foPvA5gmyVSVpQdP9kSkKXb9xj1f8r",
  "key39": "5zCrZdRurwKu919draMaHSeypU3vSZQKTmPKDqpegQhFexXiuzhAfz42arabv6ag3hLCCtWsYwiRWLz7bKUcGrK1",
  "key40": "37K26zpZ7cHxMNHMuEZXTgUXE2Ac3aticTNc9p1dikTcimVkvEbF9GqTxXXdpy7NErhwhJH4aQcnmxCckyaBAEPh",
  "key41": "5xKw7d7Uk2B6J9Jr9FCkmzCV76baYKajqN9UPWFxEAkGm1gkYWr7KuRVXKKep2gYHk7TY6EyhUwXoyriwZXqEs31",
  "key42": "PV423vh3pqyZgTDwoYmSRdQoGmub4S6grBuPnbNEMzRJZRZ9crGetGhkSzWnUQo8dqHH5CS9auPUrCjPYZyjfBX",
  "key43": "4G6mKyGuDPEzdbHJp9MJMR2zSRNZidS82GbG3VBMe823pMVX28METBcaXUcDv2iLebgFGLrmkAGwes8GLJLuvoFN",
  "key44": "59SxhXGVS7N2v83Hs3ChTNLhbtFB2hP4DTYofvyDh51S3oLY4i43WwKEasmUNVLSjSv8tK2bic1Ptg5685mmzxNg",
  "key45": "2rqwGZxfmFPeKw1Kn4R9AGrAuHZviYgrzQWoqny293iGUdmvgSCixkdCuBUsWj6ipj3A3cNCWtmezB95D8wDEy3x",
  "key46": "3iqvXfTCAcMsupJ9uhb5DmKFYFQ6ZreiFSatyLvb5wGq6avu2cYt7F9S6umNEbEhSLoF1yF9W9CExMa7Fe1hnbdw",
  "key47": "3QJxVd7qvYJitRrrGoZMeewPvnfSoebFgbxenuwkF7oz2x7Lktw2b5Qbu2ekGzshvWzeiKCb61R1wRnz2XpPiC99",
  "key48": "2fZnndKXXR3hcBUiek9wdWska5MWbPgGiW5vv5mqWA6x6exDXyjD6WXh2Dt5swTTt57QtCQc9YoAcqbX3cEbU2gu",
  "key49": "8BnZHZx2uc1TJJ279qPT2D2WNvLuKq6t6SDZ6Tivu5ycyo92pH2sU1WKN4bGeupSm6XP1u2q9y2bQgrGTi3LHuN"
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
