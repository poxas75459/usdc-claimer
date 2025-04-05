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
    "4HDpoXnDoh4iZAwmgfojhxxHVLvngBQHiJVQqpviqhXzEjat5r5pSNBMp1Ydo3c5eBzdJr6Mva6gaK9C11P9KfP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ce32ZmPijUpv791wTWyAGHKbKxTtnAq7SuBjfuMB2iMb4DhBbsqgKTEzK4FRnVLv2uX9oHcxDba8pEnZpht45eb",
  "key1": "2YEf2jaHrPBLwt9HsGC6G7iPm8G65JjB49APG9q78xUpDVhPbFAXaP5uWc3cQSi9oMDztg2HagDSHeuG2vEiSSXv",
  "key2": "3DPHovdeNKFwStC6K9oh1Yngb8otk7PrkJ6SpWKp65hLtJcwpmuaSU7kuMCNnhhJJXwwHSzWWY4czYmd4ARgS8yk",
  "key3": "2jW4pz2DyknDoK36WKhpvgnScEMNCZBL2DnXHPFYTXrFpTUA8MEZ93sgiU8WXtFKLeANgoRGQ6xnaEhi4nzava5A",
  "key4": "63xwguyPjWRuEaEBcq6etzbB8WMZikb1EJJUup4ByYGx8L3woYX3Ce96RAMmL7MFqeuR6U9hH7svRbvnvWo1bqBp",
  "key5": "5jHMAjpV4yC3jjaQJSDeWaNzaPgahQtGS8xibhT55aie2X3MAKRYdB8WyHQVJNJvZ6r8VMre7HGJGELj1P9zwwQC",
  "key6": "2iyUuYYs2mYBQrrtNM35CEfQBda6gmSC6hvHG3o2oEfPhDyFSkeh8PPxEKJKtoSd8VtfrN4DNTHX3wS9h6J6xkPs",
  "key7": "2tGgEyLjB1TgNFL8EujTQrGabPeHwqT1xa9ZL4KyqXNYUELQfsYYwXSeRT1aB3ribiBq2kGfJSBABxk7rZeLTcwY",
  "key8": "CLqMt5jLzLpL7kmAZdH837Ee9wxugofap7Cc5aNKRhV1oPEn1CzcsQsakzxknfCjNw1mktstiVqyoygEgrwHcUA",
  "key9": "3ZmepAtwD2NETsohH9Cfy64iofHoxE8d7jipeMdAfNo6pvCC32roXpnWP1tYZ9b3vqBs86wGVfGFDu46HkcrNGGn",
  "key10": "4oBhFGLedxpL7wTuEjf6nXmNRAqkHb7oLss4wW725zXYJSjaS9ZeZv6udVdKBswmVqqQRsRaAeskZPZ69g1SK5fY",
  "key11": "2PwQkPQqUTgYqYCuM24mJNz1TH9w1RxF27s7LTyr2njBE5J2YiMC4PMxQeAdhFdSEs8X3ufGqSyc9dL83dZUAnwK",
  "key12": "3aS8RiFkEDmN7ufCqt2PSvSdydauASvLwnWZXGTaYCVcfPHaynjjooZfKkbNEGYmQeNhA53nL1H4QsfS7sXJLKw8",
  "key13": "5iyPUCiwfuLu3wNwfg5EWHE6RBg4Y8wpcALaHN3M9WxfCKnLLTgNBowrmxUptvnVmpQAwDfVm8agPbBHz8DzBLoT",
  "key14": "3PLH6F9rcudgG7nRzT82nQuGP7VRi4RsJhVJRjatsimgowMmp1YE5n5TPBWAsNFx2Hd26DVt3wr2tZajardxmgfA",
  "key15": "4aAwn1B9KW33rgJDz2Rbq95aZimcZzr6D4o1kfvfCaJaAHG48hbYvj1dy9PfYNbQfcYjwq5evpRGuv6AQiq5yr52",
  "key16": "3aUZ64PAiyQQ4Yd2NtUTEq4FvUJfdRxSNvm3RQgDDBy87MPSDxqeRYb7qJQn7JK21EYhicveM9eUZFLp1PWv7r92",
  "key17": "3WE1RUV1LXssRb6LJ4MQgQUgEjebu7g7RCcTLfWP9LmUkgNLeXASgwYYJUqh8YiHFgtHLJC1EWXePZSRNbzTjPDq",
  "key18": "2WVkeqDWf5DEmHW9zNQyiyxGfqPHSpWVgCWuFk3Ati52KJe2G7gU5uWgwnw31VA52ZSFrUVfVcPDMfJVj5hppw1F",
  "key19": "2Tt1ZDnMmrrnRT4RrLN8w1QAR2v9c9fr7XE9duKjEMW1F4kefUmcgj7XfURz4F3j4CzU8wiJnT14TYBbTVxL5x4W",
  "key20": "5YjasRKUY7rU6my64VotYSoyYAqKvN4YThwvcKHVHBKfCd4tK8bcPvbRxj6pcnmf8uH1ynSKNhRbqcKTX1qyTh1V",
  "key21": "4L2snivvXNiPf92BA7VmV6VpZZVFQXBfQSxw2jKH4SaSkaY2SWvbgYovbmygTjTuaLeKF4YNV7Zr83DcAPMfAjtQ",
  "key22": "5dvTsNpLJzZtDW83V83tgPueZfzYBinh3uHhaThgJPXi6iWT4FpczLsLUx7ctSV2a7n14xtT6L22QYmVhAC1krTf",
  "key23": "9M8nM7eJF9uajHtTUUiLHSteqpEdCS4kYhbYdsgXer1f1NzpyyiNEcL3La1iFYCb5TkHRvGnaZtQLhR3JakLgxr",
  "key24": "5VJMaRpEeT7GVsvwJ2qhSztcWxqHWi3yf27QvUKSYjJGLxUb6qAmRqNiFPQqmRsmmjHk8pBnDyXRgsrvMdYtunhz",
  "key25": "5GFHgtrsUn7VDNUMQd2Vk1GpwVHd9NxyFUx4H4f78Go6iJw1JMBX7YdgdUanqAxkkrpyXqzEuKc9weTR2m2HhmPS",
  "key26": "3qhVPTMaeW3CWTzE7nkVGdyZuNu7bMMD9zJiffD17yCRwaS7y7ZekXy3MppCNuNYHHnRfGA2Laz64xsNrS7pRzXH",
  "key27": "4NweZabQPNUtobuCxh7SeqqRqYQbMQbCzcKUnK9U1MJKQ3xKfr2uvY3eHweA5trj5Dek7piaZHMFrRh7mw3wnDUu",
  "key28": "ARCkZwzouVwuKAANXayFCNuhony7DZUfgf7aU9PnZDsyyFJbLJhiWKAQ34h4DN1spTqPvdrQR8Xy6s2V8J3eZLY",
  "key29": "2kqSLi3B1h93YXy2BNnZ2kFQXkjLmJPdvfjFGujdVcvaWNZGj1z2o2XiAogmb6VCpScczBqJew2Q1XDjb2nypqCk",
  "key30": "37gtLpTW1KKGJc7gxV6yFo1KxLxvocVJUBQLjoCNMks2iq9HdYEjvHPjbSf7zeUQNkWaJW7jME7SKXzje9r7ftRq",
  "key31": "UySKk8NgaTppUwAUsX6Cmpi6CZrgToT56ojjNctyCpWrYCumiKp1wDCMcnKD89h51oFbSA1UYckgx8VuAZrLirm",
  "key32": "PBdNRyyVkwAuazp9QvDsGJ4xvJiZdJNZJaR6Ruij4tq4nkxR9PU8jFFcvQqBz2ZVWohaePMUJpZSpkRHrVe3HXD",
  "key33": "36f5RqM9TYaayZoBLpnX5BFM2x5xZKzepcDHRmnMKThA1QodDHpKEhrQsELCG33m92sHA6BdcTcLrFLCwBFSeLJX",
  "key34": "3xQaodQRVSAmQJzZ3CLGDPG2Qcwvs3momQNperHmSyZHWNdZvd2MyL8fXUAVSVQ4LCVAN3gSfs6VnwWMixf36U3K",
  "key35": "2V4i3VGYAuqCtxyWP6pg5HB4m7A6mnfWtQ3tCpGXkxGF9KGZX6hERCMFwghPkjpj11F5F4bKLCGVw9kbnwmgYVNt",
  "key36": "ZG4gAvByD4gnLLthLfoR8qTFMbev9qFBiGnS2h7jngahYeid18MvHAHxBEfs5z8vWaHQ3y7uGegbxYsseN3QWx4",
  "key37": "mvJC5xSZ1FBaMxQvZDNMpbig2A44yZxpgdtka4D85gSK7FuNEeCvPsCUtfeTJnCpHxeUuqvR5LiTQsSpQQPgJzz",
  "key38": "3WYUuJqjYwuEZ9ZLyBJH4B4TrzBioUYLNq5HrznocQrVUPQ1dVPwYNZbggRTsMGCQ73VmvxQdmrFFRktUL4483RJ",
  "key39": "eCUmPy62E3zQMWtt8gmKSe79R5CxMeqY2D9tuuqWG2pfyeRDPJWespe3trynrgiEoFavDcyUHZ3UpGYUaKpGda2",
  "key40": "5ud1fnEH9fnWoxKBmFRGSUDM9va6qnwH5dYMZ4rYcdF89khy35DB1sdGB6xY9LSGJE6qQVYwjgAv1npYjV91eyt3",
  "key41": "3mcMwJsM3RTUJPwDjvBLvsTVpQ8ikU287m7EzzvBux7cawBguzrvTuijW6X4uRET1rVf1cPjS7AL7KZTMGgA4s1k",
  "key42": "3ggVW8R9q9AwEuPxRCgxjB29AMuENGw9LquN7hmKzTgeMk9bGdtUohLRmpH5vqk9dL8wTcnstM31eWzTYoicMjww",
  "key43": "5vUuVzzrCMVtxc7uNXTkpudFKDDipDrc5JXN49dWRUsQS32Nr5RYmzATXV4HbsSWzYLz7DN52KMcZ4sf74s4MLJN"
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
