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
    "5wZxZNZ6eMsfXCFuD6mKU4cuDBMmogfYXutUWKqgjc52VguhD23cQ7Wrj6DCSrTwZrdKBga2sCRmpjdabQH5DsiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R323wfT2LXrcZcaq8ztnTA6FwfW5W6pgZHjD1xJtXp1r86qM7sayNtav55bKJ9YX6jNReX5La9uEa6J7NsA7w7f",
  "key1": "3oAst2UsSW7mZhMfEFbKzo1ssm2QNjEkrmZdiSHpXJLdqiSxonLUwr3mA3E2apzE4z8zhbVoMZ4sR4gHakBWfPy6",
  "key2": "414huXNsAeKC6AN5syZ1NgaqZcHodtr1Zsay1oaZkGas97rvNVEUTTWBVWNCiszWKqR1VDGhLY9uE2Wpd7rhyTba",
  "key3": "4m8eqgJNqEaJLxaiC4DZ5CPevWsvzZWKGNRxQvyRdwXRQEby5QDSAh6UgEapKDeVNxFphBa736TCYekaPudAanSr",
  "key4": "4cFryT392yJvWuyBvrtZvasavoZeKRXdBDYnDpmf9zcHqhaB4jpdaDmyWn3mpk8coFdz1NX7RXrk1LhE7SK815Hh",
  "key5": "2j3DUCN9y9jAZYumM8CkU5othTSA9Qiag4n2ngncvEufixRupigsiUQFKRDLoCvbxQQPTRK6wL3brTzFp4nkWZUN",
  "key6": "23bhftcuwRDuVvkqfwg4sTGZZaWGxegNFXTQHXFtGmiC6kMtsQqDGQHgMEQKzsNKudGoNmXozCtwGWPhhZhZ9DzG",
  "key7": "3wmtDxo1A1mbzp4cMyVnkAoAd8tZPmD2CZdkoX3vRjVLCzqkWGXsmYaFWnV99EJNPs67yJD4Gf6H4Lk4dWTKjadc",
  "key8": "5VsGoGAK3An4KuWz76xU4B7NiaeYynQkHoN4DUanoJJxSXL4xumAHFsGEtNrbeYrRK5rYxEZvFoduaK62oL4UidB",
  "key9": "43FrRCfpSk2sRX4eBynRSVn5Gda5F6cY6y7C85N2c5a79FmtdNsf5gEnGgUjX1T9y6jRLvwDP6Z8RYz6TEQXk7uz",
  "key10": "2V9XXCPn6cSuJYrE9BzSGsRaAxSsKYDybhS1N5MsKCoFHvFXxyJRHAXA4dMN15Z9Ti9Sd8aJ73nbgKFzCTNBaiHp",
  "key11": "5qutJqxmeUTjSJYphcDubV91g4ct4MxwkUXN57yFVWYntxaWDn8j4FH2zNXTzCAVj91bfBXYN8t3dm1dsKrFLhqA",
  "key12": "4BTjquFEa3L8wwbf9mShd2tA5Gcoc8iEuovB3rPW54ScBBGRJxtX53awUGBNcfQGnTnV1u2PMaL8WB5h2Uepuezb",
  "key13": "5DsqETGDSS9d3gi3fA5rj2cBLssm2Z464hL2KWtVrn96jRo5J88B5sULapL4PUvqEctrB4yMyjeso3rVpzUbaEoU",
  "key14": "48g4aEU1dNZvMisZ6sHHzsN5GMf8YS1QMkzFrZ1jqpouvXeucUBa8TMgXMv6pUaLrCdgb5tJ9bUnDdTWN9evHnKH",
  "key15": "2RRGkL8ZktAQfKEaPYMTb8wPpRSEe82imHJvPi71RLM3p9RTbYQPgAyAFcXDmj58fJosHsA9SBo9DcHMugos4hzk",
  "key16": "2Arc9jf9gQJfgmRLJFNheKKZD57Djzc9DDPSvoU186wsQ18XeBGKXt7SrMiJvkTiuejEGWPFPeXGxJyEpuiiQNzG",
  "key17": "2yN4cRarQV8RV1LeLZZdexu7yKMAHvp7MpEQiNkmFC4xv3s1wmLPpPRqfzZfnhjDNtBGaYHA9menCqEZAayRbtGa",
  "key18": "qbUkX77Shj6iatMYhqQXA7PnvwLn3gYGdiczE9kJGT9BaGDmQsita5eczZoh2En1xReLJvetH1ynZfSdU6NTvTg",
  "key19": "cAaLRgtb3fJgArcwX4QBvfeNGYAY24Kb7hdxCsfBJFrF37DAszJhCQExEcNTXHPzD2SJkW5sPWWdCzarLGZsG2V",
  "key20": "qgb1nbKKyzpnkftkMVY3GfcNkBekeK4h76puBMqGaB8vH6XbPWLfVhbQHK9QxMZjiHdRKdzex3iis27NEkUNvxy",
  "key21": "4xsKnNy2ned3tNFGrePPhrMyJ3nUJpLYgasWj2rx78v2aKdKrJhotNCEBYhtPtLBw3Cm1H59HLq8VMK7ZesTbAz6",
  "key22": "DJLEXsk52bLyz8YhM4BxQhdfVtuyQcNNaJYGb46NyeqxDyB6YjYvKDWv2i6j5rf2BTjnFumm1JYiyJwR67QtZWj",
  "key23": "2NGM35eYhjH6iqG8kNvy246mKqZX5kEK9Mi2vhNPCemHXysTHx8KgaMUuRKYrTAW3Rqu84EZwEZSPmNbKb7eJc1G",
  "key24": "5F2Re3UTk8dSvp6MrrMwfEBYQoYRS3HU6AymScCca1Yk5ddHzRieeUxpXdTdgB8KhP1UHomanXzWA2dne4rsrJnS",
  "key25": "5rTm6niV1xZ6ZDSkgabWpgFWb4qjmmaGVHpUiJTaNLE3so59Jg5VbKcexM29ofhX2BgiZnx4TR6NGV4FtVVUXTPE",
  "key26": "8YUkPnUPMfDV3txxYk9Eg4rpeunmZx8tbRjuQeDMxKREW8jwKtSSRHtYdjL8UWFL9UJqMY4Q1FkKAnZuRTiHoH1",
  "key27": "xqPhFahybqsbyN5f8NoWKmcFbZxkmDN66oeuFVmTUpJ1uDgGhwe7DJHcbiamQZyFr35HwPfjhJKtVSzKMnM8s7s",
  "key28": "JTbfKdy33A15YD1s5xAMJV7yxEe2Qn5N5H6be9D4eSYd96NHKYBkgBTb8qVMNpQjR3dKWjF44obren1fCEsspa2",
  "key29": "4yhKqLA5kzWE2r7Z8tZspdNEFhUuNsL75c5gy6nB1YfsvxvV3gg3H4CEUhob9BAk6CKjcGtdwwiyiADjH4noRsKJ",
  "key30": "5dhwRqBBNYUHXpiRwcSdzeNDwWxhehLiF4aspviA8fcHB47TVbDswJwg6JM3wXTvW2hRT4NL3SziHqHyWsgkeuLd",
  "key31": "4Y7Li1ykNSBNXqzHwJeCD5pHCzCwS9eMmesU2sPiwHfeSdNCPncNz2im1LfMY27izEFPWJDHFgf9KUBfTWU7cBtr",
  "key32": "4WFxQv6JRixyD6sAPR2eTMhsyvXRxtw53pj8VU7hLDdu5usYcmQ35h9zggwcCk9iGL9oCFeY6tdhSckobz63GzCp",
  "key33": "nq9RnG2aLaDQUgss8v6aEcvLAx7t53845Y8351vsnqgDdTuF4BnqG9jzt8uw7Fq9VXpKWzztnQQNMnKbCAbxJ8D",
  "key34": "75g1PhNP1Em4Dd4Z6r2fpjm1Ch9WUWCQ6bq3k27Lh7FWmphUrXebm3bqm8RDnR2kFMLCkfh6Xw2FxPwAB3iDeF8",
  "key35": "wYW97SR4MbyhzgXj7ZBtT7JMNeAkS48PAiiiQgAmdhyb9Ku9c5LhxWfBfdpgLfWzTb323d67t6oG2NCKFweTEwj",
  "key36": "3hsTaEyBbuFiG4ZsaVkJ25BdDDK9PbbdnZe9E5ParxoTEYLfu1oGBoT6Ym4c93vhFpEPe6Xi5BgwFQEktvQTMSr5",
  "key37": "2Bb3vX1J3UjGwzYokYqmUV2gSwMaWGtogW2Md4DCptABBsDXYXFB13KA5piAkW6U2uS3iQmHkPMGm784JnySp1PV",
  "key38": "KvoicjwGgq59tXbP3G1aZenUy8sybiBJKQqaNHS9KWCUrY6AqdDfkccUgtb5EHYNzTfZb4q3E5hhw1WceX2jHbv",
  "key39": "5v8juE1eUaGek1bjq5kWYiMTeNeBMDjc4kjDJgU5cGEsUfbtWqWhrWmCu1apnFjEoNCJMBGqd8YYis7Y5pWAKbPb",
  "key40": "Ru6zTKeR3LiDof4aWn5hE2KGXDJhrARSDsi1jNgTWcwHrA9jHKqnHUgNXrmRn1vvVTQXSChnjLLf3jYExZ9kNQ4",
  "key41": "3466mnSAuQ4D8UDBix5CTGZhxWRnRBEcjxTCDtd7joAvpBUWfveycbo4Qcpy8VufwRz2Qtmjc61xXtU1UCiCxn9",
  "key42": "5MsS2R9GwpcqhKnNrQ68AvNyAoLnYc1zjTyCMagWfJyGEGKr6je6GCXggnLs4L28QARQFfZZCiLVrxvoyck6tdjK"
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
