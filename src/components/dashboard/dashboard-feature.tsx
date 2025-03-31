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
    "2K5t9nwsjQHa2nshPMtMW3aA8SmMxpSxXkTxUkbeTJvUHC5ArPiSQVU8xFGCEMkS73bMERxrr63dHbi6rXRUQ4qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVdW8GQ8h9d57K6dntFC16fmcxarWBV89tLhxQdzqvHr2z8UNppqq5B7NpNsLbJgR8L58mg4mFjjs1iFpWoE8zS",
  "key1": "5KSW2PEJixUfRoZQERPP19zG9rrjrawhB1TxSgeypWeZLubaRSRs2A7yoRjJ5nqX9ueZPAjamZpdFLdvjXMLY5mX",
  "key2": "445jGQgWooG4CKaFBwfvGaL2i2Gb58mmwUfUCGAw58ZfuXAEYCY6e82DHbhc2pVSYRcE7CkmA1scBroFLJkLnZX8",
  "key3": "3FZB9SCWMY2RYK2dUXoWrGC2ZHPM6qTyeck7aseWaCButwsTxfQFhGYebmUnnEb2KkDYVouCvXxicAQV1XkmXqhm",
  "key4": "4ooU52QzqKGfsRJzr1xA1UNvCrnEMVJQFKFy6ckJg4mxP8qVfvkgb9f4YTQijQDqG9pAZxfBFSthrL94Nf3XNtEQ",
  "key5": "LauumWNBGDpMYbz68fB2adRTwoxYrqjG5J9rfseKGmmYNbXZ96dV9dn3u5oSsLyzt6S4s6HAeXwamV5SVr9sd2w",
  "key6": "ayJeinmEUHdqwYm7QXXY4pgarbaCtXF56csSJcBsqv6nH3U1PwJUkyHZaAt6e5UahVmRBSWGVBn19g3bKK3TLwA",
  "key7": "2JdtT9jTjBYLRWtZZobDNErQLqiJkTe3sSMqoyCWwyor8BPzzq6MZ1SPbp98dUmPxEnwwwThh9RkfcysNiy2tdUu",
  "key8": "2WT63yLinSLrXunvYW8JhLsceAb92KJ9iwi6URpQc2jCMPJ1vLQQztuBYJoHDvMMsuv6ZNDVbMLpeXyNEqjsw67J",
  "key9": "4XDbkEG3aRbfabQcq1fZLCzzg6K2XXh4wEFZJ2FMgydfGkP1YRcByvuvqouvWS2drycQcVNkpbYgXXu9V4HFJDaY",
  "key10": "4nqvu4Y3we9KvVsw9WgdR7bThKS7yGr2oA3RVdo3fTPkX2YAyi4WUBFw3JawA65tz4vBDoV8jw7ePA1UuAupFowF",
  "key11": "3qiQx8FXSMBbaftUie86DAooVVTYaiBEHZBcyRwXXSo6bKMUQxex2crKnJX9SrmrAP1tPHye3BB3oNbo2Zxr3gjn",
  "key12": "5GmHVraVSd81AWsXTuvgNk2tp4pWSVKdWB1Vb2C2WyT4hFLrcLA3cmaRKQajFkyP1fhgnvKcqKcedzUFhd6Ar8xa",
  "key13": "3BZYMtMGM7fwNkajvJVfDf2PVP7pGGSQxntkP8GCDcukXLKuw6anxARTbHE7MtPDmbTXsiAJhLnt1QWxqEPTsY9Y",
  "key14": "3ifoAKtxaYuAaYzJdCAqhpHa2DTrFDcqZsgXEaVbY7cR6knxFc9R1dxjexm5rAMWaFGjbpztcERorgpzGG4gWBGs",
  "key15": "gdBAMwG59656dxpVpA7nHqHu9WHNwPR94HvBCyiVmsvm95em41UsCP8FwW5zmq9kB1iSbE52XnNFUtZSGkhQ7tR",
  "key16": "QYFw4oyEPJWq1LHT6Epsk1H2nmucfBdSrKjDB4VFXEtEDhdgRX2SjK7zVCyVEcPSvYikReoddCkRLmLmDa3N2kM",
  "key17": "43ULMamNNdBmcdHLBhQsvHfgMtPDmDZPDeieSSs9stHjyjYaA7FxuAJHYadREWT1n92pNMaok3rLN5UzGyCJ95eh",
  "key18": "3ywzod28fjBeTyEdHp92CmcCxXXh61YrH5EHF1qCG7z4MCvNdZYdS4KRq3xDZokXAbvTBrRrkWsqF5UCMuJ4UhFQ",
  "key19": "21ssF9qE8HgozviqTS4S9Pxu5AU4zVK9p2x3rhyWgCzVs4GjXnJMdyLqvh6cXyT1rtTeZ9uMBn4WRrem72J2tdLQ",
  "key20": "5EoCZFr963xdHhLdbJdYavfLSGuMS23UhXpNJvFr9eWY6asDNvyvgvFNWGDcF9NGQixAsPAYoSBZkUdvqiTCmzv1",
  "key21": "3xB4esLBncTMdqLz8FjxAM7d5D7GWLDp4DwN4fx5VibTRrbxKYxSB6AhyF4BTXS2cAAgLVyU2c2YTbn9KJgDimKk",
  "key22": "zc2s2cRzWmza4nAmsuiuH8BZoqCx6Xe959jSTA1T1UaCTV1KLnHPhkr8YSWJf2XLNWev4HY9aNA9Z52H1cREwLr",
  "key23": "2WCZWr897LegFLcHSar1w2mQCdUxnazF9AAoR1iyu3e4UQRwVNpRwCrtHru2dHzG9Ti2m77xY8i2brLUMsw4JroY",
  "key24": "5LL8XrH97jtNSL2XoQB4nvZDW26wZe1VbPPDycKUqdhVhAcEsDnDkNsBrvXkhsNicMesBNSvtcuyvfMMaU71Takj",
  "key25": "3r2rU6jduUJtEGEsGwjx3fT2dRULZZZyoKq2rqQd1spHPBWiCpe5ahHKpfJJo7hkhet9wqwBZSmTLpXLf1buVGRt",
  "key26": "2tX4TNvcM8BSSuNth1VC8hLV6G8m8HFdCbJ1Qx7asgzdSMjKAvVLVL31epDiNCCGD9u5JmCkaaTGpCz626ym1jY",
  "key27": "bCewhTa4s7jNoDJb5y7jAbYi56Y3BktKAvAnJLHS1JXwNTieEYjoR4XX9bnWsEkQTWo3LaVwiUrpkC6pq843r7W",
  "key28": "3RPbfCjhyZvWP2gnWkdpYwdMwr1MKJhyejgh82QGFj88X8y8CJpoUgpVBzVx41uM8F6iMp1f4rpVVbxXVRSNXtJS",
  "key29": "Bv54pyn6w7XAgXGdXPScGGNq6aELZs7sZLJVbBnwsSMbJWd5qvvjQjQkUVXBYddF5N3UPtHbZeoyVVCfq1hLs9V",
  "key30": "5en9XRp9WuQnonPqqksbLFiyY7nVR8zStiCFBPnvCnnsrD8uSAHKk1mJH2DyKTFz1nW4ksjwiWCdCJ2DwS2PgoKn",
  "key31": "3etSUw5txmSvfKoG1ttYfsgMqiZ9uU42RuAThod3WBPPhdFcdnJHGimDgiZqS7uw77FBb9DGdzosLaYmq34ibQi2",
  "key32": "21nCgqJLuExTLbK8npJCMf3Xq7oWvo3oQz97Dyhy8V3dM9EMDpY9wjYVMbWAgi87pZNfqovWcd3icZDzVuNfe7Sg",
  "key33": "2NRNX7K9LnUydGteb59BqduwGDGuCf8xEPmHG3JSvAMmaWusy5AGZhitreefocTwNRb9NkJYCNTPhTdkCUZHBEhC",
  "key34": "5Tma8LCB9kpsfcz59WWUJLsZGpuGELN8Pb1pYqspwcJN3qTozNzQ2zsSeThJs9L9MxtMqBFzesxDSqFGugB3NaEG",
  "key35": "mf9jftu3F5xuEWA8XeEzuDRaYaJHAZbYr9y73SMvHe7eCzSbepAqCpZqcSq3yzwM9uLSZ2dVD7SCgawSNmWJCwB",
  "key36": "4pa4xZTGS3qCFyn7cVF6AW5pgLYUu8QYx42Y7Zv4gNMerKHz6arEditwfD72rWVxKPB84UyDv1qrVjnP8Ei3PCUp",
  "key37": "46r6zyoYD4hv6H5rroSTBGTdz7izgdZnZr7a59q1NyfHU6NYX1txMS7GRdFSHBz5CcaiVhVXMUXpGwmB3f7ps3Gv",
  "key38": "X6i3hQ3jBFn7mNBJXzabNCt3GdbBzHhMG9XHX9stzZoGc7uDbVgLrkwRqbbiERcw5oUW736kDLF9haUobVZcPKd",
  "key39": "2VNtHeoKLSVXNXgmQ9jPAgW8KERThtA9VLw8qAf8BdUzkgVUJmRQTtn4cXQoMRtzzVePeNAkNpVa6AZkrPYW2czX",
  "key40": "4PtawCiguwgbFhW9fqwAZ46WpScr9iuAR8mzmXahJs34wjeoqnZUgL5kqBySsVdhrgvmQjP65GdiKwep8oPcu5wS",
  "key41": "4PQH9oVpKsvuPtBuCzRgpDx9kMCBc19M5zwauAmAGt1ycXfkA2ZkMU9mj8T3UvSiMpX3duhPjox1Ce29BMt8AgFM",
  "key42": "2grwnzDDNLF9Dgk6p4v7zQpbyxmqcusVdrL6qr9yrYzE7GeqiRcgvVdEbAgjRUNqfSUr5nqPWSVU5ZtQBu46vwBF"
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
