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
    "4Z4fdfNJAdQR7wnZrehz6iZXb3bC6kJScoP8atPYETdHRChhKcodMcfM66vz2YtB1bAcSxGonQSWW2wrwnuyiHf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57nS4DUmonGWjbj3pPqNzatbXDBcbhRMba7yGHei5eNGAdW964XLKD9aqMxB1it1KhSRmKpNjfL6M1pZxvwvpjBa",
  "key1": "RCrGWNKBAq1Hr78sLSmTPUuCWSbkEiuSrYqFo17yLBeauMx9ZDBVdvP1mg5vNVAEz5t5r2yzLbfwEGaos8d8g9r",
  "key2": "pQ1UMAHt6shzGphjXez4YNRw675pwo8ux2WCd8ku5uj9KVtbV53zLN58TuMGTnU6VxdksicCpJMQuugLcs8Vcdx",
  "key3": "3HdSXXa5LEZTX2VG6B83RdG3zbttsbKGo1hJA5eLFm77BZXDzesbeRSjBBHme19BGtbKBQe44zjaMhRRrj6BJKJw",
  "key4": "29SK7aCgruZiae5BcRkDtASBhPrbB22HrmWHLuPiHhvTC3GuopeHJ7rMfFzZwKe31eZBBJfV5XhLeHYUrkUCCXcH",
  "key5": "kZB6tTLeLfx9jJSNaRcEmFzFKPjekiohZeZH5qKbQAFM8KvcgGgQ9n9b4ec4Rm1f3HAeQ3mjyKUj6TfBt1aBivM",
  "key6": "3pdVkXKCcBiVtPHUcZbm5uSHDRhf5WZZSFX6DMSJA8mCwFWjeecbna56VFnJhftybQscS9FdTx8pWRDwEw4zj2W4",
  "key7": "4kLWe1TqSXzJNcZn3wpmNJqAohXz8rqtQTkT2c1yMSgASzEBPzjm42Db3jURTZNvG7way7b8rDmRii41rMBKwERY",
  "key8": "3iyrfyMxXKMUyTubZqj8Z8kC8wJZqw8J29rKgqEc1FHVK94dzLAszWyQChMb4oF9RzcWrK8dmHPtv4Ky27agqGwd",
  "key9": "2ho61ZghNY5rWT8pVdRVodEn6brJJV5qkyVpxbj6dYdSkYpj3SFpJbTRYg7pAJxPW7ruEyH3V4FLn6zMfXy2fmGW",
  "key10": "5eapCeMsB6ywJHFtqCLqdLpYF3SyqKWMvy5WPpp3nDX8umZpMCqugkYsRPG4hge9VFNwfM8A3dxwWcs8kLUvBcFr",
  "key11": "3HfNZGFM2PGgP8NKQ2Jgwns3YQbQPRszaLJrjGLhsC1mBDx2LDdEDHrPjPv9sqzYqS2LQ9VyWQkquorUBAYFc6ZP",
  "key12": "3W6B8f9MrmMYo14z9P7hUxBiARuxtssP5UhfwLn1615bxRvaCGpmStDBmbTPCcBXjYGwPQKY7HYJxM3eJavEkHuH",
  "key13": "4k4SU2NEoYjM8yqjAF4G6MkaXkHqThEEogiDu6mqsRqsT6RW2ALUVbfWvtvMv54BwPpyGt6Qohf3gmASN18BeGbd",
  "key14": "gPAFiKizWVadTeQ3s2pPMutnNuEbgr76KjUnLvFAhUdXsUEtMNovdcH1dXs6Kf8bKeDe3NfFRZ2KyPR6zeyar5S",
  "key15": "n4X5S1ovd8Z9KNZTDDjF4GAwY8wSv7tj7DUhj6PgLV9jAZHNPEkg52faTWKAat4HhEn8QJe7oqJuAK6raPY4TA3",
  "key16": "3BH39QEBniT91teqYkg4SoHu5BioroNXL6VVX22naLAEUnAfHaQ1QqFrNMoMyvAKygk8qdtAn7hjoSB7dZaLEU5r",
  "key17": "4igroUBdWPmnKcnd9Vjtq6t3HYTGsp41yk94HmjrMxa3u68SutaEEcKw6Enx8zuhd3DthRUa7cV6PvucEq8kvFDs",
  "key18": "2X4JxMAtRLjCcKuG4w5aitgxvzEkoHrBfab6AQRpsJrEbD8pcfaAryRxAfBK2Y2YKGXzTSM2oqNK4C2k6XDSfDip",
  "key19": "23WpX3X5i7hxkHpuX5PgU343RxZ4a9qzSkwSsFMkUHh347NzsmmPwYn5uidztpYwF2giire8wsfwr68ZThPaK2Rs",
  "key20": "2rXoUZxdHr85xhtNHJKLm5sd4SBAH6tYBtbZemBsntLCWctDyp8CW5oYnToJyLpMCW1XwyhYMazNbgNQf6sNAE9K",
  "key21": "5V2BiGfjagVoJbJTcrVUVTn2SFw9JqLSWrosFEWU9g8De5L3KkDUC9Z7yo7Ji1Lss941crDedznzQEW8HFjNknFM",
  "key22": "22wULhUEpbP1mUuCpFDuu7sRdgykjHXqY2N5HMLtrEootj9YLtSJJTyhnw986BTT6Qix9QY1NK3AQvPh66ABaPbk",
  "key23": "56Dj93nwp9zc6LL1F6zQGsoR5WgvCwdA1Mi1eaR8JXFED4aA6ZctvttWthLUWnQF1msqwyvKnvijFb5ncfSSyDei",
  "key24": "4Wge8ufQ7dojKPaTEkqXxJEQTjiXwcEkh4RJPohMeBLhxpnL6pQmjA1nbwizJYrw23RzLFXc1AJtcVwVUHC5rRnw",
  "key25": "BpvdaRYUAjQyFjLotN8KbAtpPiqHYDiuuFyTekL4Af5QUEHJcxoS9yrdFSwtgoXRewyn373LhW4S71sVhjcsByu",
  "key26": "4FBnWmTccVGXnE9zpMfs9B9aEnRA7k5eZ4YfSKkxK1frNh7AFXhHsTrdrxEKEUMwu3p5WWXwoVMbwchxFGFwArVi",
  "key27": "2mFF2e4cxhEfvGqxxQKAfFeMbFoHHiBnCoyjx5TRkiUJusMHzHEmHTNatGhHzDHzLrN82kH36xb7FoiVRczf3G7x",
  "key28": "3RXzS9RMRA3TC4Ty4uVGuFKZJyZWaPf664beAkauK75Ywxf49RV1FJUkXqZzS4ZKsBXu8biG58Zyy294jghfZQUy",
  "key29": "4oLGufnnKT4LdiZtxPob5iEhSRRbGusjbBKaUFJ8z1hWaLWFnSNNSWU29MjoFpCeeSRyezWRHTv1eNs8Qf3BHzm9",
  "key30": "3zHrsjCxpuS8WefbN4XGE2GKL9eiRrDamVPjMn2Mf4mHxrwYoviv86PW8GdEZrDMpt2uFnS4go8vv44pCTsFotDX",
  "key31": "2qkATSwodLWQkFhFczSycUfSXnw4bST5uPTZeqHGuQ4txHmSLcbZgQba16cBBtNCU4aUma7hLzHEL4LQcs6pgf7y",
  "key32": "3nKxPJuAvwwuFSmeNXnrcp2ynuCsQn24LDFPPCBpGpw1EjE4mU5U8B4t9HCcsTy2WNL4sgdwSPoBhZc2GvKZ8pTK",
  "key33": "4DVMYF17RgEQctuEJ4hyiars9e5hi9HcqVPiUJJXfsiLWWjz3mUGgCh9Q23LZwqo1EkL6SpBCnvNQnVzZEG87aBC",
  "key34": "4E9KirjT8AFo3eRcACUfQCBd2C5Xjd9xzgUUiitrgbwuy5ZZBdT7ubypGWXBjGL1rrG6SC9wfr6CM27mWxWCjEvY",
  "key35": "2nJiRu437MWmqNktpB2qmzYhH1DHXyneSdc1ZWzH7xv428E9abkN4F8qoqdpXLPKM29Mhi1wvwMpfgcRSb85DTTi",
  "key36": "5NicFDv2nYimBhxaPYYoKAiG4pVRWmc6ciYjQ9TDtLg3iRpXwJNqu4WLiz6kN2qnSLoTNHqt9FPVCwte7HtAuq8a",
  "key37": "64RuzA6yhTiTS3uxNavm2Q8G61kcP8PU8Cw8qMhw8gQfJDmjhtgazi3DZpfmTWMBehnS51xHPx1mJhpg6YbaxuJ4",
  "key38": "QWnF7HPCfRTV9V3LgDPx8CDMxaozPyH8QKnRDe6fwgzqrSG3wNPnnk9qLUSFBpaHvBTHrUj6LEvPUZVoReJMbiV",
  "key39": "2Thcb6Gwx4f3pQoczYqGUW4x61E2m9K4E1LgRjdBqSQGdZCi9FpD5TB3m1a68UJFj8p3FhTuMbbpfQQBpPWsHMYY",
  "key40": "4dEvhsa8gRdJNDfave4npDLVUYnReTD1cp9LwcuSsPvTs1YtsJ5Cxa1v2bCxBEGGQw6agefDjnQEXkFY1dkHpW13",
  "key41": "51v9ZUuoGr1Zz879gR8HAc4ydVdCZi2pyU4Xzm2p1rT5fvgSkVj12wQJmaeY2kbMKNovmyKs4TYUzVoYHTcJRSSa",
  "key42": "485zz5gtKeFBwRRTuktp6w6ZzmUmFtfYKnJ5WTpTPiCzppKv9yezW8Xjf5SBzMR68MzWMrFebZqkgp1U7iNuq6as",
  "key43": "qcwRUcrpvVSU8v7teoQeeUYdqyd64AUDkgHv9D1RrFTFoJ2oPzAbo6p77Q4r9aFd9GMJA5wZDnTwiwbs5Aux8Jy",
  "key44": "5kU8ornjLAbngRpmPyEApSxwsm7x1WUkNegFiELnAqLF3XRDnBa91DbeWHWw16iEgRtztyGjzEjkqAYXgjXAdHV3"
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
