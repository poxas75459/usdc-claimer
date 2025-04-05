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
    "55Lrp3TAJA1mDw9nJjH1kvHvKgvKVDTMjarM243c3Qn995X6xuRAqsXwfYAwHsEgCVXCrgsrWGd5X1yex1MBiook"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heEDK15Djn1XWLjLV2nU9kBKCzrPS9EaHEKEMNahyqpGriLfjSmtmiSj7oc4ehkSnpF21QVL3bgrefXoEEycPYN",
  "key1": "kg8o5BDoiPo6jPVfCAiVagu5apJvcqYhG5tcEemdN59Qu5TLnGD89bzCHSovWZEW4ygrTVSDCybnSiYhRYXbfDp",
  "key2": "KZ4U7ABqa3MQZiANZ8bz1iTqG98anWsYDys7TLHQpTkJ6mJz9r8tPTRL2KjPfRBDg455ic6S5DHAUqpD2aUYUS9",
  "key3": "5fburH2AGQe9R6XbvW5ZaT7Zro6uhXwLC95PQrhab7AhfknqtqH97Q7w5yPYPSdFyspp6m42qPFYPPW17b33BCdD",
  "key4": "4NFJ2Q9hiupFs6NUyCAo1UB67PN6aCjLF2RoJnbAYb3RTESnET1CsqRo4mqTjkKjKg2dHobu8MpJHrLVADByqdad",
  "key5": "5rJkmWk4BxhqAsJmQds1pwH8hhAnXboU8Nwd8tPktx4vx3Lgcmyqd4NEA6R4PLxGP83RCGZF6mVmiFAHxhyxEvAD",
  "key6": "4eXZU4QMHZeG4TtthCPCxWaGM82AdzJmgmfEW88B3aiFUH6r9kEU4puSw2qAj55NahmYYZZvLsYDjPAM6FykqGpG",
  "key7": "25YU1fDifDSUWkDBKeDw1c4iCoVVnoYsSTziRjtNCLfdfb2NfvspBrChTZpwp7FFRfQoqZWkCDmtWBY2pxjNC6qV",
  "key8": "5XyM2JZz1cVVGL2FqdcWpNTgMugqfz71maLKvcymbrStWr7peJrKbwGPCj7cVY38ENdN3taXgiAuUprfjM7T1Mj",
  "key9": "5odn4tUqkrxGHVB3ydRsdE75uEpZCufnMBaakYLDvpo1MnGNSxq4TRKmaK7xC5Lkt8yeugfLZfp7JnvK7d29Uo2d",
  "key10": "tFnjE8ecf1G8dTU4TyDr9KyFw82sWFFNStMoSpPw3Qzm3DpPyCbxm3AyCT9bRGB1RmzyN2647g5ay6AHrGH9ijU",
  "key11": "4ENaHybazRtm83BgyzYsPn6RPThwS4qfHwQDi6kavEkUYHNoVa2jcrh57vpcmqYU46W41B1vqUustRxKgCYPUZZW",
  "key12": "5yeBqeh2YmQqdTy11rdDYaowhfeYkMchDTBJiB7V8R98VvjN6hYovT1eLs5eKasAT8oVCwKajdjp1T3pFJckX33A",
  "key13": "66Kk3Pam5iS492ZfprsKMRW3b8o9hLnNAWHqvSANL1P2VV29EceRWM4Z4Z42qSj2BxAe1V9rtFdBofGz2oZQBuWB",
  "key14": "NY6q7ouKFrRo7EHuLMtRwA162jEgauG6d3yc5KPk9sKbRXRPbgXgTc6xwb6qaJgCkNKtsqEP5JrBhYT6RZYH95y",
  "key15": "2cwtYm27s2JXeEDZoffzuGJGAjb7mPQMEdfK2dCWdNEjo1kQQ4qpKyn1c3Y7y2QnY6Ao67SdGpCCvRm7QbbVXyRq",
  "key16": "UfU6H7VTos5UJ29cwcyn2sbdfuNigBj4398jcNUHdYVpqDLUvjyWBYRCMokucazyk42L9aEqFLXVqXnkU5n88qd",
  "key17": "xnstVmv7ABojXjacMcawhuMZtpcvaxr73Qk4Cd63UPbKPWV2tMm9rec5Mr2SfvDjNKDXeNPnLQWa2wn7bj8TQms",
  "key18": "3JJCbbh3X9NXL38DLJU3NU19RbWQcPn3rBaiGK6FZ3syC6spMATrdPpX7EDH4EySsHcuss1xWnaMYdGHwMt6rpKT",
  "key19": "3utnzpGPfKS7bhr2s1NJjToKYaHxrhkKeeekdSPXPKzFaQJZrPwjGeTcWcFx33eF7aNJx5rNeGsbV4Y524vCbUWe",
  "key20": "5bSTuFd6S9VPUsnVtwL47XmDMfQ8MPZCRwmWjwcNGLsZvhzWhATAQaJ1kS2WKotQvB94WxeN1bDrCu4W72BszyFv",
  "key21": "53vB2g19d9NBnonNz7pUmCWYzaMAGnbSaX3xonQaJyX1az9Ay4jvEBspjP6yBRrLiU9o8oNPA25a1xbaajouKFjX",
  "key22": "3us3CGFN61H7cVJnuVtsg7nqFJZosX1H3QWpxPPp2JLZPKDQvQT9rUZDJEahnhdcCAjXYxmSSBqoG6ikWZwBswMo",
  "key23": "5JvHUwf1kcmVQ7mXJAQjvPgGSfXK6wx2cuY527y98sT54SyTAJRMtMgUPEvDmpgjiB9JZuVC7oEYJWkxzwTApMMs",
  "key24": "H1XiB2YhnBjsFvnprFp4mYoGgkgd89QtYCEsrKr54tCH9CGrYzJuKwt3EHNM3AYFReB6GZ7RxA2ie61KEuNYiJN",
  "key25": "4v8yR7TM96rKAM2KxRTqzd3QbgCKC5NtzJd1YvD1V3Dd8UP1QGV4azjHpedbEJPrVeedrHbTygBkbvPraRJoFuWZ",
  "key26": "4sQxxiMxzfjjG5CWW17sZXSKPzb8azMyRFVmD1vmDTdjP1mUD9xyF1L6HoR5DuxAE48VBtz8P1byVHhzDVjMVgXP",
  "key27": "5yg8FUE67WpRx9AK7Gfui3PRDrY424XC5cAHUicQLLVJHKxB3MGXS6xK6b9f2z9ykei1xvhtaeSbYA55ftWU8Ltp",
  "key28": "5MJaZRfAAFnMzYAkGC4JMnKLQjRMFhb6pucC8urvmMEJdq6jXxbTLXqRkaz6sxPnrfw88U7WnFDhhbGhunYqYPrb",
  "key29": "43ixoxw1KCETtqtASVousxANvJFnQYPw8sE7wdJmdJgGao4a8Jiub5cSHE5NzCznbWDja2yukG9BV25NFRpLnvUx",
  "key30": "3oPeZt3rG7kSZ7VRHdBwaUMcUH7vhxfAfCuJBan8TpgETHPgErrwQKk4TwHK7XuqVe9fQgF9HGYNFbmvJvAwtnBB",
  "key31": "3vTgnp6dyvKXyPV1ZGUBsUmuhB7ih3CPTPiRZKpHyQmDHnwFaKHBsx41M5ZhzBAukkS6Syj8qGwKdAmF8YQRA8JY",
  "key32": "5pqqbNjoXsAn1txE9563GSv1uwyGFHf14GKUVoAzZJ33i4ejnpAvJTX9D7DDLFtiEoL3VK7gfpgG4Gi25bUEJeQJ",
  "key33": "5xYShzNgLa6gsfzKLvhUwXwShqUcCZXorzwbr9hmDRKQm48GfFoMUdoQGpnRMXUkvc6PeR7USeiNyk1LP9gDyEAQ",
  "key34": "2TdqMcQvGSgTjVd2XXvbHNM5QbwCzpjLqgPb7GFxFwRTkq9aGwJ61HdficmTKrXLSAbSBbrg39q1PMaSTwbXw7fs"
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
