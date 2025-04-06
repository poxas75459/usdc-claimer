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
    "5ENN2KgBX5H2dqJ5xbec7BLjhznS6xShvFhzujak1usRM6chPdMnFxqjzUa7Q7nB2FyBVno4hSECT1GEnRfSgF35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwYzjpfrCxxRkZJynKY4gSSnvqryLES6LMV5CLfo2wGxeWFa8JW6WQj1K6LiecYEcXzSzh3JeZbpcAgTqxexxyk",
  "key1": "5NUbL5hpf5Dwb4s1rsQYW2w8mb5w1YteKDkyGu8WSFtpBeuaTtRtKAdzjwaZLLVYxSacU49mxc4tYrChy2atHSt2",
  "key2": "64D3iZ33P85v7y5Wu6xVToRGpRVr7r26FEBNXCNXzLGuAcQKefMWmcLdBFjr2zQesRqXn3EEy4SHAhfUCq3cpdTe",
  "key3": "5nRT8t3zcvTZt9ZaRvh3h4cyLsjxpN4eF56soqnVZ1Ynt5TCkuQkF8GUi3w33mE3zAupETw3QEwLScdaQhatz3Dv",
  "key4": "5YQXRPaG8wLJsLFWCD25rmvZGbJynKBcrN2ocky9CSaGrybFBj3a9sDt1aEc8Jbnzc8KuLndTFJaBBjBAKMHrHEc",
  "key5": "5yXmDzuKyXhES4gKoAGbf13qGiix53JLEPP5vCo3gy99AfxRox8TGh2tUfrvXK6mYJQqyFw8TVndk1KkfWFe2AJg",
  "key6": "2kp9bavWV8YhAY4mC3zGHZkWK3ik6brABD7ZmDbyXGYFFJWQtufeDCxiHtzozcFjP1NgF5LnX84EbdKCkMkL6Dwy",
  "key7": "4UGQsqX83RA3oGkSueCy8jLDs79YZ54pfWGSbepBgqEAoSBmWjsoSA2UYmEUqHcdsQZm2pEW7172MSKc2eHbJYT2",
  "key8": "q5eCYeByuaFDQUwUZP9oYDpF5bzvtwZ5ucvaT3HSP3jtE3Axe65obgqDzVRANC5c7YrU7XunL9WCwttpPY184k9",
  "key9": "2wRagW3MaNFYdsHPQYbBo4vTawZBuB8w9ugxe77kVNu1HNdZ6XGGcsjvetqLQcYxo5ZcGvuCL5CvGKbxnHUDZtfW",
  "key10": "5XwDQRewGDZdXrRG7PX1q6bk7iCLG3HjD6GXDe2KUcms7RyhHz19pTZP71t2p65eExfMfn1CL2f1TTvbNG3FCi7N",
  "key11": "4L8yq12J81Sdcp2PReJUYdzXZtjfmUoMJXsj7aLKaUqmJ1CvoN9P86p67B7PL6Nx1uLPvCpxfXryAPuqTpdWJ4KC",
  "key12": "UKYntQQKEDSobuCkNYxQD5VDiBnjann24bSfAAiq6c3FdGQ6pD1HqAF44NKezLmQ35qB7oMmegtYqaG7tqPJFhw",
  "key13": "cuyGRaXsUHEJnUHHUtKtcVkrn8YJS8TQUpTXf1qW52R4i9JFnFDZxshzJ5CWMWDQ8EEtYeUzpkthDHC49gmNM6S",
  "key14": "4MSyNQUPWSimM184i2RnUkXXgnEBsf83k7YE81phJHyTk9jaWdd4xg9sNyZeGXAhVcQUK7Wtxugep3jqSS54gXMV",
  "key15": "4beY87a9ohmtHVVTuzJ3VAVcHffQW9Gtu2uxHL91wjotjcPCMzE7HUpHJj6FmVVabWgv3XqspLo1LSTSGsgSGw3h",
  "key16": "3HMkPevKgxdAZSSX8EC22pGUcAyeoCf911cTeh2ugrjJwbfu8GTmpuwAqVyH7RbhfBhH87N5b2zzP9u2RwikRoAw",
  "key17": "5jf8rHWUoqZx3RocWvJKKHs2vMkGEL6Kcyfd4kMkS7rjMQqWJzshQ3W8cgrnm6Jk2yWp1szAbnBsY9UFTh9kacXS",
  "key18": "2RWqrZeMKe5NuEaoFj6U3YnPpisG8GyPBCU5PDd9BZrj1B6ZKsc8RLNrgaV2D7HJ326QU7B8EJ7dtxUyGGw7xwCu",
  "key19": "5NLBgY74aDMj236DGC8oTk9CvrqyFxx9cNxq6j6ooKosZPyY28TKFZjkc3Hc9eobiKiKtyESdjt3KFuRsNrXg1fo",
  "key20": "2NaMHokeuNWsMJz2M8Lvqp7EdusTYkHenEH8TkZQiTCdGcBBrKfA53N3FxW8CppyoaV7V1Gs3XHrr5eNb1G51cpL",
  "key21": "5GSj6etXhZ2FVyERawEfbNyWCu9wjNJ4H4XiuMZWfzU9TiCLPtokgCcgsmVccf7BzSdbAxmzSX9h1Hu3uin111ht",
  "key22": "3pFLxja54eRKvVU8FDimqRm4J2jDp6nYUvzJxuHRGrm66wCrVZpzF5yCpSHr5G94LThsZ3u6VEmFo3yEc57DGUd2",
  "key23": "61LTPFvMEiPrBWXWyemPLWb2wCttiTyNcyWAbMDkt9BnU53o5FAoFvk4frmw9g5m6rxVoQSTo1tE9VaPkDUKUfoy",
  "key24": "5rDeoLptxwQjMKSdL6v8ZvzaP9mjwCFtbFMPZ7aAPbqu2HnwrUq3NXTym181yFApTFFJZtMo6KVYU6TvZBeD15fT",
  "key25": "KDHhyEeqsA5gr6ADRrpzJFGF13NBdhx8FFVxwAjJSsVC5U2qoGabV67Ho3MtcyY5Xcj2WLGNxHSzbSHPPDBBR1Y",
  "key26": "V3181LFBGbBrxhkwYy2zRwCgjF3pH8PReTRyEUWztsuNf8JLNBP5Yaxihupp31JHoQYjhyDga2RSGsemGHKtAYn",
  "key27": "29x57wKbepsP7mUukBjP4jaN7esdGQHmxvqtPRaLRFTje3rtEGMBkNaa6K1KLe9iRxoPZ8yURekiH49BHEdC1WVj",
  "key28": "3eFJjbiGdmCXnhcg8wzUq8PYA55LzMUEDhzEN2VF6B4Jed2XS596jY9QXwUn6mJvqSg22EDueZXxJ2YNJmBBb58K",
  "key29": "2jyAs5SoCJFruzLWGhWVeQQHepa9EV4CkFapT8bDxGiLQ7y35DGnMSE6bRxkLmMajFNzwKLv2iu2SwCckhyj6Dwp",
  "key30": "4nkHy8TTm5MWeyDixu68ZkCuxSNyxfcUfbNkXLbgr9vf9rQ1QpR3wysyCoC6cpGwLRizSPRSQV4oMoWAaTo3rTS3",
  "key31": "428k8ps3BcGR7rfcGTU2NrVd6BxYVPhLThG7PLZJY7s9q3n27VgMqSDqeMiZEYFwrAcAJQQDSukXLEWpofYVXEf4",
  "key32": "31TQFeotHpCnFbggNttcpNrpjSnnLFSStxC2M4NL5QBAuz8y8EfSxiG1kMFMBoM1yu428PANi4JUv39Vr1i3dwje",
  "key33": "5SvhzvnbTdv7XbLQCxHYmCFmyZrbossvbXhFZGTRx5LRk9W7FLJSnQdrPvipd9X4KAMS1cvagWnn3vYZR6GmpwrB",
  "key34": "2dfDdacRT2xsxmKgxHXB39dHjVuojz6YuRqHXS8YnJsU1v4iVmzxar3mgNwikdtrxVrRStwbD8tZcd7pg1pU6XL3"
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
