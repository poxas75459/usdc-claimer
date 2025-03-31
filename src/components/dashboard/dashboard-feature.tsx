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
    "4xadfGg72eddT3jmyjwDK6n4you1fvQfQRTxTYyweNBTpZGk349qE5yPMCyytayqERdJatJoDKDDT37NHjRiBUMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sj5zypw4PLxrAihmzsKrbrV2TDs5FEwiM21VDM9Y1c4Sk7nmKfq46noKir6PBmwy5D6KEWurUPjUXzsMGiFUwvB",
  "key1": "2K6sf2huQfVBTVSv4vpqsj7j8HgkWgiJPJtgx6NL4W6gt58jfHgeq3j3tQ3GNX1LRLN2gtn5GhZUWoUB1f4Aeo49",
  "key2": "wAH4gV9GnitDMRfiH6E3nVP4d5m6o3srgAGJyZfhxVPD8nwxtYgoAZRCPk7x7i5JnAEai8Mv3Hdjyj6gnLcydmh",
  "key3": "3tHKUCcLsUeCTHAy6JLqmiYyNL7SSWMzW8K4fceF8TWqFE8vo9KWn8SWBosszCFLWjmNmwmUYgwx6Aj1vEqRuxrZ",
  "key4": "63gPAfjxyxeLMvmtLy894VzsbE4T6SM8u64pDxVd5K4U1QWc8PSTULYuUk3gKxaZWrAKFytWvGfWuupMewseq7Cx",
  "key5": "2BJu7YTM5PcRBVduzGuthhJ7kLLbtbXXSaubGAMp75UC9rEjYkhAqBrphAwbVVB23BgohJoxfYx2KMbdUmzyqq9q",
  "key6": "hoGd6kwKNYZN2dNMi1KC6nj37mDGGBtRRdiUcM9nSx3Mxk4NAb4r7RpFQKhBFcowX3sHWMVhvoCKFfytuw2aSRV",
  "key7": "3DUCcQ4gMzEoYZ3A8bYdJXpSwTwnjRUsxTD5yMUps7QVUBHH4dsauUE6wxtPcyeV4NSCH4BZPUwGp1gGHu3i93aS",
  "key8": "3jiGgkfJ73fuU4Eog1w3UofQELo2XQtzowSMKzUfUcXkG1y6Hcwgjn6bNMVeN9g7SqyfYpDZvTXHKmAch39Up4ou",
  "key9": "3RraAAmqSsPR4P6SkzRguMbhpwUJUbDx25Boewt9LnZD1V8d3mqsVUFM92J1TyDrFm6KjsFjj8h6f19hsVEpsWNY",
  "key10": "5qqwEL3FkpkRdeeuQLHSo9FT9w5Yfmi7TRAi45D6mTrhTaUfALVgRbNgBMnbhDrcHXvnXwGGDJ5v8tNgizZBczGf",
  "key11": "3ez2tnSu15eoovs9AoH8GoLrK9GpdcWqV16ueD6VuKy6EzT7xZbYxSHTGYXWAA6Ax63ZxzPsLbWcUEk4enTh35VS",
  "key12": "2gnpMu3VqsPGjv6pwpk8kLqNQTHuWGhsf6B85mECaKtd5HNGHHQRfdyVAjGribupwhBmEDdGb5ndqdbu49tWs5xi",
  "key13": "4FbonMiBkGzyFCHpuybc7PDC3cfnq61bUveSvXmaVGjimiik1YVwnSqdPUQtbr2ove6atAzkoVD7vXZAvFJD2yAW",
  "key14": "5qGynMAQGkqpyF84thmqSQWEKVDAKj7JhhrZpz3FXhcsvA5gXyXarBvMR6WY7kdNE21ZPV6KqhxubTuzwPtHag5A",
  "key15": "5dZ1cWfJRLUERAeiuJUGqXQRrf8UENv4X9VKWAjQnSZ63sPKkRFfNkKKFHZLdEsmrewZ3UABgMvWtKoqiMx3mwik",
  "key16": "3P1nssrSkURrZK1ECeQz814MvQZaGAdvaP8hNCMvXv4EPNcehBDkuRBmTYsZ5Gms9EeEZRf4hv4PdXQz2b1VELMA",
  "key17": "5Q8czm9nbp8qJLcFemAwFiLED81UQQH7A8JMDuKz1X4QVraPaUWJ7WqZ4eE4YBrerF3DXGaWKV4mnYXhC1H1MJw",
  "key18": "3est8VPuCKJ8XvLNfXpF8dbU9o9Tm5T23iJmbfkQkLZehoXXvVGVn6WSsJpknpr6qbtX9VwS81nf39f553avrq7K",
  "key19": "4b8xEXa9enRtDNuwe6E283wfmWDJEiW5xA1K6CLZiHgRtBQ35R1jsU8bD6s8yotViLqXCafgVgj7odNdDZ6QBm81",
  "key20": "441gXZLUropSP3NvkUQtZx7Np88Cc4UmroLR21UDCB6jVsQkBSn7GN1tUZ1q4xbNd5VRr5mgS95YX65FZVRFWoxG",
  "key21": "pe4CE5TphZzGFMioUofHLPKSQcUhqoAzpxPMxYZVVMrvbEnsBFJ7BVTZp3VfN93apWYz6DkDHja46712FNNEXQP",
  "key22": "3Mx9q7zXULdKbS2Mj7gp5fDXXWb9z8hQxXeB3g6dYZMTATV3frJjt8LxVR1AuuRCGSaZ76FcgkxmUYuFDtF49xqZ",
  "key23": "3GTpV19BPfvz5LiCuRAtF4DaSzBLXegexx6JLZT25tSEMKXvJ9PvyvX9mLxycxC1Z3ADTLbbHjgzEbRucfiHXFo",
  "key24": "2bypVY52eMbHt1EovKCWjpHTZj8nmi3kABjwWx4SmBTVq79RHu876MhoLk7XH5PJR8WfQ6m44cQRaUQgqi2EidSe",
  "key25": "23PvaebyAYmEbLUDuF84dnPpYKD21GpdYMt1Vz2TQKoSWJuw1QNHWKuDJPZiGjjYtGrBrxLMYvmbExzL7RzAya3u",
  "key26": "2yCwwMHTNirATDuVrDRqn72QexCUbaDpSURd7B5psrE2JjfFZQQsk98GhcYfyu5QxBRguKi2iQ17EaAoS5trzcg9",
  "key27": "rAwxbc4fksGdE2eaTMGd1pD8v2ZskS97u1N79iPv6TEWyTFjprv9yTwiMpRf5DCr2XFvaptereeabRE3Yf4fsn4",
  "key28": "3Vm9nLtB2Q9HegRZGzBZQFg6rtBhq95aDXDiJnuPXMYCJR8t16jm8qHqYrDhHAHJNdfn17ov1fwcWJDAMENLGrTe"
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
