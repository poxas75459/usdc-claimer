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
    "3hugBmdApf4yKskoqTm4zGK3HAqTxXZ4YifVg8RdncMMbuxYP2TYvB2Bi6vREq6SiVHJx6WFzjvWX1KFGuSrRfen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVHA5ajGwkRtHLUzN4r3mujGGT6t6jgRCDiXBCRk9QVoYwz14KcPuWEfWD8SMqJqrWx1pJz5q4W3RK8qdKawbBi",
  "key1": "22kpHMgvCcXphxe6qaL95p3wexiBNjHqkuYnPW5AswMGrsYhcdeqi9aupavzRv955Tw8Yneo4xG6uLBEHKme89Vy",
  "key2": "3GEKE58RhSCs2ykvYS4qrNp2JyTd2KGNX5MgS18sGrvoocCbsx1c4qeVfMms6RvAQv14aNvEqymCuSaXQ5MJsHRG",
  "key3": "5dgMqPaWAAUKFXJdBAvprgwvnqqcQLLGaLJRrLECx4fLfyQD8K4R8XKZQXqH7CaePpkHcygFHPUvn6VbEhTyYzh7",
  "key4": "2uCM1AM5sfCP8qxLhHJ1SwbqzE75MJ5giMFA1sZ4DpZTerREEvJJPbrGr8F1EUp5QT22dpuiwXqNvWeTTn7PWwu8",
  "key5": "25q3HHiGpd1Xktq1DNYK27xcwr1jLBbKhbJpJpTPMHPNJdxA7BHoQ4cuRShU8nNgf1xZtni8f3NCrTVpkVs6hC9a",
  "key6": "45M1H8inrmNbqQdypZ2zdrLHNdpa36yJNFGpKwofw6Rv4pqttsHRXDo2aDabprbi4YJTHV81yLCedGbfMAfoTbvR",
  "key7": "4URSAjzeqFfGzkv1539T8cv5mfpe6yY6LmmbzV4hvFJryHHbiN3RBN6oWaGAcZr5XoxuqxECH4b3yAo7u5NgYDuw",
  "key8": "v9of1BqkftgnzoiDCQCys4jyjimo77GhjbtXKUGjAueXZQe3ESCAw8tgosdnxizdMTwemWZvHC9HZgmrebaNEDf",
  "key9": "4Z2XGaqPPAK7RScj1DWCBTCxE9SZcmtQDjBWiRXCDXa9vrzJjCMhYYv9ZS4zTG5Gzu4gRsPcd5gC4QKo5xoPk1NU",
  "key10": "5ozKVHLdukfqMz2oL1XihenftP3CKJ65bP5cVfymnud7mGvJ5pXHZpTFE1j6b36nM3qGguxpczr9MycoTRpNKNwy",
  "key11": "3ReMUR68X3pJT77uGZLef2RtJZP9v8ooq7hhK6KheJHWwyYnSyV3u1bLjR1Tu4RbC5jMiaQ9kYHeQfYegvdpX1Vj",
  "key12": "35DhpZ8xLovVa5dxZf1bcmZdaehnJ3w5ALZtN7DWA9QH8P94MbsBt4M3gjejVvEqtfRJ85t8djJLQYwhodYk4Y1G",
  "key13": "66nDjLvQfqk8iVLhfJXAAmgVC66RD4Sc3QecRcY65zBnRxMqGmiSJ1FQRGnwd8gHsXwHwQAMuzn6LmgQ2nmkUqPS",
  "key14": "uApdXWndg5LHxvUKhYubu36iS2Zrq6uVarFfocLUeKFUFkd43uy23RqzzQJvevNzecE4b6bC2WUx1iT8HftYoD2",
  "key15": "54DLZRJadrvygtzpCA6zw2iAXMnvzKxdhKhBHSdvPcpYBgNetX4nEnwi1MWxYfr5oqaxUTsk1WZBMBKhVQ8PKCKC",
  "key16": "4b4d3YNjZwceG2dSmaPteKKKw9vg2strwnojkMXGSPfPBeMUKD2WhBxCVHCUS66vohecYnqVkyhgBw4DrrPjP1SZ",
  "key17": "5mAkMdNtyWpFPD9Yc5EjC4VMY3HTYnCpmfhrFuW3LRLgYMsTLGoUJGkosb2GyH7qDeNCShpdWhPPwFNtovniEthi",
  "key18": "3eNaDxZP6AZJG6Dq2Bkrwf1KDBvk9JWLbeU69cFpoioS9voUwse5tqag2nVm5emZekgMR5Q7HciXa9NJG3QJp1ot",
  "key19": "56Jdq91FNM7QMySEH8FnhJLnWEETgh2sbUrdpAK4HvCQpujq8H1GfLCynoyHjyWowt5pFWobfnkNG6upPrDo3t9h",
  "key20": "4toGFiNY9s8RfXbdAkep3Ef5nNXPZx9HAAwHnVUAACUrtWUTH4xE594UWePV2DVVQLCFB2EqnYFoVHXQkqsVaeyV",
  "key21": "2ktsR56NMjZJ44riFLqF89warURkuSrQASvrtPbeHDJnbjTh5mmb4d6uk6QsZpiAB5QCxn7a6Dq7Hfjvvt9irg3K",
  "key22": "3EgGscXDRiWjkLMyr2Pti52B5T7fz49xny47zDdPnBkv9j7AVfhkLhapsh7UEMGvzXZtgr89wx2h2YDx1PacyetG",
  "key23": "TWXwpGvqyaM7cx1qoN4TSwz9gS8KnrN8DbwZS4kkn8riaKaeLEGnUvtukxwDu1gU8XyFA1PuyGi31Rp46xuxbwc",
  "key24": "4924BvsYDLpputQmxqdYg48dLM3wKhmMKyNiwBp17F64tvHaBxt4K3PWpCTfYqJ8HNy5kDJX133LMofAwTQEwL4H",
  "key25": "2pcxbUrZ7EgTWCQmUTqGgkzQQXUNiFH1BRDkRqWsj9zf1pwyvJNCdQR8Tdj4Ww98ANWNZk2sjnntx3MBBygBTvXa",
  "key26": "2XKppLydymMqRqiLJW8XVe4rWn2sdXN74DqrUmH2qyndUXzP9sTfYnjK82RCYSF8ih44b8X13kJkM3taqzQcdKNY",
  "key27": "5T4iH7n2ZTQQ7FwmmaMta9rAYJewa5cDbzJrYAcCxhgDXXoA4RwTDGz7EMUg536S5DshF4hKM7Pr2TWtaoLvX3Fo",
  "key28": "5YptZ4wj9VQVu99ieBS8EAWpiRK73c6nQVvxLHAAYhyvoqqp3dtPxE6b362Um7z3EjbbkcAQYuuQjf2FYPDcnaCy",
  "key29": "5cPyU64ebJ5jxf5HXuYBmLcGzwR91UTFjzJD942vFTVYJMzP5EjVJea2s3iMR1Tb1gCQrUjskdWvdq7E4As6PWdN",
  "key30": "3qrGwykU3dMAQBrqVUiiBHoHUQegwCm3MKytFQDopV5Cx3qN6yS3JUJ1ZQyr8mCSmrMAh7gGPfug8GGmmTmA7sbV",
  "key31": "GuDbYM1PyNHx9aGfMX1hCHmC4xEjidt2TtTkvwcqF85bSuByzgN81yVuiS7UvtgCrfQjMXydEeyWHMxyAoRtmya",
  "key32": "4mtrzFNbxbKkVmMd9DdhpVqykWn3LRM78ZnctKyb6FKECMR8V2PHabLCjGZPQMSvTkBGAz4PKa28onkgYVSRUwrC",
  "key33": "eTftSkLQjzQFwHaRpHvZpttVLwZWW3fJGurdvc9iiJYf4jdyWf5riLeZXz6iF66BSGK2wQ4QQsUbShosWZzz9o7",
  "key34": "5J2gqVjJjF8LpC167xLjinYwm9CmaPJyKtEg4fDHaBJqRg823Ajcs6WhzZMYEe6Vvas1842szAzFMERw5FniovvQ",
  "key35": "N7ZW5J6Bk81etuMPFFEFcKCjwhkXP5BLWUCsiqJPvNxBbyQiNWsjhcZqZWjRtC6bxXch22hCkLmaUodNs1LmWRu",
  "key36": "8RbMrKE54eVYd3iKsShJ4qncqKLW7LzVvgsNzx2nxmfZ2ELa9HeYJaxhUB9qkxFJ2AmVNG9dF7VH5R2DneBA1bD",
  "key37": "Ceud7nUU3ESHQtrqVyG1ArjaavJnwDJ5UiASH7VCZUnQRYBY2CYurGigus3razVmMnccreuRA6CjiqYbZZUuFjN"
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
