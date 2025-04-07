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
    "4vn8vrHRhcBg7ZvusrhXxA42ojT9GY1fzXedhviuZXyxEnambaXdWSbRmbCaHiEyphuqQMGdKdWnXRr7SBSdyPrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gcNw3kLesdAgHUzuyJMQLmJTyNhegPUU42sBh9vLT4vH86Kk49cXWsQt5xWbTarcSqvbSHAKqFg3ivKdzJoGzW5",
  "key1": "3HGyZLozeJJ6hTd6v6JbZfUpamnSakdRcQjUPUQXNRzjgcQJ1itKQJs2xHspzSMonDd7bLJ9XvjfsC6cw7DrFnxo",
  "key2": "39QiATs2NQ6uZELpDDMTTb7yyoYEvLAx63Ect1iSrWfBaQAe8qZsyUvKmwni9i8wdzwrGNkMcfmQnapH5Sq6kqVx",
  "key3": "63GyvPpraGAVCAt5597cXdGBoG468D25NhiMhrYdfkYdBVUdWxJj43XKFEBMXr42XuCSY9gSr2beMeJhNCAKbecd",
  "key4": "5bn4hmoHJN2B7VKodLo593H9RQqcuwkxRcHyspNtgpy6d72jNj6w6kon2e86xTR8LmkrQZCfoJ4cy4MzHxDgd9sd",
  "key5": "4TMrH12iJobAdqddAMWMuK7pdhmYWVPej4H9iyk8hk4qZgAS68WyRu6KPibV8Ln9z51S8KvF1eG7r6dF4sTsv8UV",
  "key6": "3Hnk7bpkRk1cZMg3z9nqnvvCPq5Ybwuxj7rZrwJHzA7JHE6ubXuKGTG8NTuC7Kg4VFydECniYUJGaW2C3EWbmL7X",
  "key7": "2oqR9Ee9rGSYErwqE2gihyFQ8k9dBHnPwTH9avVbnfG31QpLTh9kS86uisqpgD743KXGagurssudo7BAPSvmDDii",
  "key8": "5waUvVPis55FsZQjN9PWRJpBD8uhQRDB3yRhnfDveMYpj9qsyXx6JuHeWFSuzwe8DPEsoSr3yZtfeix8xCLCnZPh",
  "key9": "wR4bYmxNxBa8PD2KBBGzA4eHtwTs6MFJWTMCvsV62QfYuanEVUXfP4UWK1v3drwWkVJJNyDp7k3GEsb8V5DfNrM",
  "key10": "2Q7NKiuBzxap7JDAb6Xms87Q1hzAxfDvtSgZbmpipMukU5ZScNncWibZojv5uFWWDdzTsDvT573UAa6VWtrBHuyv",
  "key11": "fR226F1Vk6o4UXty4EHEJVZ41mfbDvXjvvpmyUKDfvRjFqhkXatEriX8Mp55kYa4ufnN8qzgxJMoacHo8667ARG",
  "key12": "4ZtnM7x5G5yv9W96fKjJDpTPpLx9rVksAH74rNG7fBtU3JW9P3YXM52FiXYVtzidLuAnJAkttBHF1o3bCKm2QVXv",
  "key13": "RrB7dhJzdTp1hteNwDTPDmK2DuhWxJTD72CwkDDjEnGC8DV99K8diNQ1QX2kzztNfJMWHDt7RwSkMmhjvaQUgu2",
  "key14": "5GHku6JSQfnmmbGit9ZdWEtL7M1GH9jg3JZUjo3Jv2gYKxQ3FQARBkC4qwzNRSn72YjEiQoTCEVvCLPP249ebyjj",
  "key15": "6hZPxjt8WLr7QLRYVd1XeJc723mNSK5YCAZuG9hzGNGDVjGuFfKQ3mfaLd7yVY925aW72MM7JY4z5cYeMoa4mAn",
  "key16": "3gGW5BZDDXCf61Zp22DVCoutkKRbHoMPqAaeE6RfDEuGetQCK33YLZaeGpmuPG27HYcge4QAbpCeGaieJnBYWDfz",
  "key17": "5cKbuQuvgTe9zv6KcxtYG8c6JbvxVZuwkjgSsqKmVAqPnj8Vq6DwbE4SVJYVVCGXMD6MWVmqyXGcrDu4ZWRcXzPt",
  "key18": "5VHA4g6sqyo41HygJ3AqTSyhND6erMhX7fQn4P9rSzy4hZwbB5jq64iVKH7rMPtu9HzfrfTLDerpLAuJ1ufPUgxM",
  "key19": "2L2L22BFRCeCfkUjr4Lya6wcKpr7RLR67Dz24WFtXpVKatGo6qtDy6Lnw61yJFFngcneuGvg6xv4gzYZ86T6ippo",
  "key20": "5nor8Nw9gSKXTmMxk6qcH6Ysdxw2eaiokmwrhdUiJxvcFoFtKQgwtKefuaugJd7vhWSy5LgiSfzewJbMFrwdmXe5",
  "key21": "3FZhTicGWgc5hiCMRY9yo5sWRynukM5wbFD8qG3c4PXBemU1FbfpYvHmPZDy1dbqeb7Fhw9sPPxTsUtzePD29Bct",
  "key22": "35SLS1ykmVYVAxNZz6dJgpt7EE6GWrhBHQ9NUJRnbQEAcAdBot6F8RWMGEs15WDtymqcNzHadVZVppeoEoLJdiq6",
  "key23": "2MJivvVRx2aG62CiXmxYGqLxVnFDp7GKeceR9DWuRErGsAWnVbBwE4vmhMDBdthbUti2mdwq5W7e8oSrdQnKbvVx",
  "key24": "etiAzcjo7GQvYRyr3dKctWa2XKuPEJjuwzG4N8uZXgkHnsG2Bu16Lei5yWpF7D5DRcbakE3VX3suAJeog2KBjBB",
  "key25": "5xhL38Ys85VnuvQNq2NnfgTCyQcsNUr4YJSB1RNEkTLU3Anq2s5bW9VAYz4xAzhJYhSc3yUHLpz9QiCnoThm2V26",
  "key26": "CQQt7UPiw7dJtV5FCMtLwFXPVoJs42wB7oJAUfQw8yUGXbZsiHaNY4d3xEt9SS88csmctR99shGi4TAftS86kgB",
  "key27": "3a2vLy7nDyNvcaBLMA3cdXo1bGXCT6yf4QFXfMgfj6PRmix9xqSPz9VRJoeuH9cacPtJbTrwWAMECGxCj1bTouEo",
  "key28": "2uuSodnJjcK73oNQryAxWUki7WpsGmpwx3gN3jQC3tRac98BQ3UE4womosUPb6Y2frnzsskfnp93pFKPgeUkFhth",
  "key29": "nUGfEp78hUtkcsg22LpVpFHVox3CumCYVJBaw3FxjSEYEzj3oHqxtfcqC2hQEoiYBSRuNGTyBLBt9ibVa7dAj6v",
  "key30": "5BSRnHiiDWWbEmCECAXv1hVh55snK9juRktwzMbgPzy6KJdqDE8YfVCNZZtyGWsZkvAi64YBFw8MpD8xFt9LMoMj",
  "key31": "Spgqx6Z3SxUa86jL4sqNiwz2oYmTRpH52KVhCNuE5anSXVudtfZiQeXiykxbwdJzqXh717Ud4NAC9anxA1gTDgT",
  "key32": "4kLtJaFC6STW84vjqRWYR43D8gmT169eJf1qrWSS1w8bjqy1TfMFE9gaN5jALgdKmri8v446rG9KY8yJP1CzfKMs",
  "key33": "46sZeCWBjP7cikuLiEpjdh41YZF1Ncio7rupiDCnYwfLL6kywBhn91MyZf8E3X7dXnuv83ctM7SX14kP9nBA3n5o",
  "key34": "FNfWgAo3qgAYoRrSJmEGTJ7GLx4uaBRoZq2qifK78XL7JDzCqEyYrq1uLuEpxzQgqxPbhyG8Mwarq1WD3j44fFy",
  "key35": "4q4cwnYmhnX4BcAXSagUJ42QYAewpPo871JxqExmxSDhUJztPsCoxJqGcUTmRkaAdDLpDjuh9ceZ2nHfxt2PhPu9",
  "key36": "ruVJGb3C7uMLJyvU8QcFzZPkn93r8eeR8sqa3UvhxdQrMKmDBeRiKvrTjonfvHxKFJwBGESENszBqWAG1VCE7oJ",
  "key37": "2CXzRXJrGxueaevC3vA5BfmF9FYHdtHG4WraDKctmiuPrdr6TZtRizcpKqd9y56Bte26FXGrLWcfE6j3i9VbGK1P",
  "key38": "QYBmXxWWwQUvP7FDcMUmNZ685orFMHqzugL6M2RqEF8cp4Aaq5wSgeahrXTr8meNNc7bdMseudyZT2fQkysAp7g",
  "key39": "3XBhuLNestPwkasV2b7xcTSnfRpU1yVtRaXzZkAfJmxdN8n9mAj2ypo1hAn8kgm1Dz1jUGNxfUNv16YSJxEWyxHL",
  "key40": "4i6zeuP5rcLHUHq1WgQjGKzrrGU2oTpBuwPYEzye7g4aXPGFx3cZPRvx7gW4FCw4scqQq3J6t2GzEmEx8Ljo9CxS",
  "key41": "4PUsGDhacsNqpgxrZNX9s9AxR5o3rbDfeSekgjB8B9T2SHYyo5f33VieyCn6BiRohLFHBcUKj6T5k7fneBrSUUUa",
  "key42": "2inGRPNit8BtuYKPgPMGnDCpkMcExCeXnQHJCMAcjJoroGCu4d2FR653PF2eNNm8qE71NuG3AXugBqNz54wGiEpM",
  "key43": "3bgrNuBVdt91vv371Ebz57NFJ8FfQ2dHQ6pPMDbeLub6VFxz55sUydSKkFqTBNAEMTkKTj8RV5QzTDKMnu6Tax3E",
  "key44": "2PhJ2W7WsX2veR1BfgcD3Kajms2eU65njpPypNrP7cBLRbFSXTna7YHRHLbbZdzLfgjD3rHut7DPZHUzzY4mqhAw",
  "key45": "5snSRZPhN4Tib2ZHn5Tu59GyPYdZwsn1nQxhpXs3XwmZ4YzTGgVy9zEAUSQEfPNbpgvz7NGNEy3sLPY9Wnmsnmpw",
  "key46": "3RtX6hfgccEtpQxQtGoDgXM65adpA4TAwRLbxqc9DgUiVbepeKG1bnhX6wGifi6ohDUshj5Wzzyh6g8yR86Wgbhp",
  "key47": "3Q38obGStcgHxuQkULNaJQxNDrkPPiMLbPkqX2vK2TRpecg14LURNxgpSpmvbp1sa3w1zGbQF6iphrBBfyLaPDq6",
  "key48": "5eFswXxn1K9tiPh6n2vDQjnK8qPuWMAxkatP48ehZEMDpMizz8uGqz4H5qSXYeHFuBweJj2WsxFYM9FxxTgWf1Zp",
  "key49": "2RZf2SuTCT3tBcGtpuFGfB7wpkCxZDT1kVNoHuSTMDTXv4s8FA5GhA8uk4AaF9G7XDo2ja3u8PGeNZqGNL4L57d4"
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
