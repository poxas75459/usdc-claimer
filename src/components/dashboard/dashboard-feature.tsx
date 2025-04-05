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
    "3GCTcQhoZsPCRZDNYCkhgRbqZipfajZMcuH9h49sBDRHmTw5Kj3iTfv5acvBmr9p9upgSEkju9gYSzAVX1xJ8i5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z1KYAGjdG4XPFES57yCiMCAzz4S2oxxNSzCSvjk4iMA3cXQea5tJEUekLwQLQ6oBiQyAGWsQp6ki9rCk2B9SLqu",
  "key1": "2PNviJNRwbP5KiA15eEuznfjs5BCBpgyuCWob2Qgdoy9drCNcHCJ4qT28mSYxft7Wwoc1n4tqg1y4K7AVSqUcW8Y",
  "key2": "Pi5gpqrtJsdDV4hx5w6XzuEthf5zfJYwneBaw1j4ZbALniKDU1xESe2FMgDTUko1dskBoK8fTngh9SJNC6Y8bhq",
  "key3": "jYpTXGRR9KzGXdphfNDW4tRCEj2GycjUL1B354S8pKGaYz41XT1bHCSwgZeT6K4qd1NqEbBMiJhwgPE2DbFmbTr",
  "key4": "GBzweT43HRkDyR4vK63H1oTihGaGowyptqizS5pxQrib5DUVgQtzvL9CkFK5sxRni3qRszVQcTTGMT11r3j5RQF",
  "key5": "4JH2mFVmQXQK9RfMc3MbWPvV68yf5Qg9DuXfboJZrfQJDAeoCPK8qCcoPkMjGuFufMiFFUmAd7CySobDA7qWfbFp",
  "key6": "3Do2UpxkKwFTHdT8DQxXEkmY9xTgv6wjTJD3nFBpUVh1Y9ExLYrafru7y4Z7Z7RnXM5gYV27J4gbhDGZT5Q1DKXX",
  "key7": "6frYu7wx3mD3fGfQr3i52QXAW1RBaReeH2oXVAPYStkr2QXp8RJ6WDn1jsfPm4hZouuvCFNZJ2ckLVJwRe6V9ZT",
  "key8": "4HkQzynzyqCs5PJguHJ8rg7v46uxD85pYdKuRdUJXaXxd5jpASF4MKodJSVZZMeEddasRZE74RJ3Z2Eksx9BwfmY",
  "key9": "3eFHDCPUciAQRKPyo3AebzxERvaCspq5gGT9g1iNYLpg9FwVCQtC24dtwyqp2oR3gtgTW9MCc1iWCNspkic5QYfU",
  "key10": "4oo4iSwatk4tq6GJWt454z4pZhty7ckXaC1UMehhSy1L7dr3UQi78TtYT7M6VtzjEDC5eTqwdr4T9uy81WyeRwoc",
  "key11": "t8BjRQMBYNssK7B5ELUD29m9dJA4SxYypGrws5Dyq7hW9ZiHjUAYaJLmiLbQQ4m1t2959CzHL7N5DLrLKyCJCUL",
  "key12": "2Jcp2UFYkSfBxVGDs3oJ2XiCettgEzZ3RkzuDzGzMkprgigDxLTwriBk19aunvneX6zsAw2eJnmvwVgAuKMYx2DB",
  "key13": "4TDrPW8Tmewx565BVPJYZXJfmVovT8fUfEp18Se7qPQZ2vrw9xFoqtMnTC6Usm9q4XFbsunPQNiSDMq2motSK72e",
  "key14": "47inyPY4PrsUgLME2HWmAwpbqn8NZofkVvhXxa2qLeV7MS9R6ko2QmLhicutwcwarahvm1hdJWbUcvQiTKiNzYrj",
  "key15": "nXqXHyo9ByT5PNSuK3LfB9URm8BD4kCuzEMtq5Dbcmcub8bynddxZP54NYjSkTMN6h4ausNEVbC3z7Lef2kYDvU",
  "key16": "2T2Z65FHCNuKMKseHacisydMb82UiQdTdpN3gooayzZtR4xBs8qW6arf4ZJGshHDH9JjxzYNgEf8mVCRSH6HT4ZT",
  "key17": "5v4dXY16kgQ8ULzLEu8GTycMNyN7Vgo7pYszyEwF4x3KY1kYrXB5qx1tEXK9j3wJopcMHNR7vvBwCdWnzU9hh99d",
  "key18": "4oze1AqXH9KPvRSoNpvsNV3nU5nQZ2fzZcLbQ1cKaLagB3TjrpftARPT5Gs3bB6ikokEGztfe2sF7y9fwgDBCADU",
  "key19": "5Jn75dtCWMHvY36mR9iCu21SeMLdabrP9kjKrSZanAHpD3o3DDPrvoHBPz4AbRKvXy2o3gvdmNd8omf1oNAV11mU",
  "key20": "4PAwS8Ya65sZVpHVcLnwDJQvRwVtpWDdG4dJ8FEFzaoeywUYXqmYHZ6y4nGz2w54f8DDkNLdTL3Zx7Y6krEFBfF8",
  "key21": "2g3R6UGdJndvd8jUVKFvqXtfvjaeyAoLwMPrEtgri7Ki3fpCE9q5p6ySxfVGB92o6Re4KgV2mbhZARMs5f85kd8S",
  "key22": "5YaSuujnHFNb27ywyPJbd9NfLigsHsR27SRGZ5NWvjSXbCcg982XN7Hf1zGeA22fGfdBCt1vwo2chyQmuHPVVCKA",
  "key23": "VW27H9XefMVWjzAWaQW8Nc8MUqTVeMjueEnEzZ255XambAkjiF74RcUfhxv8AC41jKzBWnK4jq6JYgNfMYsidSa",
  "key24": "z3M2WJbwFQHjBxLaFQ3DCgM1YLgaGaL39QjhjssGojihFQLRKMYfk7L91UZmCU3aZcBAoitrGBcacoNnvrhn8VH",
  "key25": "4ZWUmDErWzcRwYXaWemBAr7FffDv1HHbUer28isvEHE2JQJ2Kb7JCoyiMu7gDbaV85S8zJqBLpuE9GhVYppMF8a7",
  "key26": "5o1StC7uexSQzNaGEi56Utpgp5GmD48L2wxHM5CAJqPNgyahVV2AXvRwhVc3D8sxvL2WLW4FenxbMuiTaaX5BQdC",
  "key27": "2DCv72sK3kfGXmPTq51H7Zw66h2Q1cHZ57q29nGYab484Dw8o1im9u9HreJxB67ajAAQbogjb5b6BmLDca51vVSV",
  "key28": "3nwk98fiie5v9FCA5ihUoXZRdJmrdUakyZiCVaFMSxMH69muXL6moUwFvekjgeY7BeqF4LkQWrx21x6stMqRLzBP",
  "key29": "cUMn7ZjWaAv5rdZi7cejJQ5oDepSdshgKF2K3nq1PsPFrd1zjSSbw964cKRk45JdXr9mikW3EHZegeCViUURnYM",
  "key30": "3c7UkQXd7z9FaQmkMZkar1nq2gbQ7E7GiNbRA979jqTZQHPvdHmCX7w6RE7J3gTkA6TxKMgVFJ4DFDbiV7rNEBVo",
  "key31": "5XNhNpn82vSizU6sSPeNZ3YWrsVFo1AY4XbhSjs7aXhon4w3e25FF7nWir3JvaszSzqfJi2jWGQDeBwkEAkccWqQ",
  "key32": "3YEpy1hQXATtzxNaTzEANtoEtnBuJu2Q5RAXQtPZEYyyKiTnaosyq7fvHNXx6G8Lgw1X81iULWZhLvPcx9YUwTRi",
  "key33": "2a87JDFYkrjy4fZUhgRJN6XLo4JgzNEgU862xgFZYmQjCcw3mtxYtQFog4z1Bydrqxxr3M66vTYwVwrjkBUtAYxY",
  "key34": "2kJDAbifo4K3DkWMd1rBJss9CHVSR7JNgR5HoyH95NUkbhGhf47PdvpuCkLEZbnzBbxxhUKwdYfAfA22pJXeTfBr",
  "key35": "4dSjXDGunvMdRx6L1KCWsbuMQDua18Sq2aMBgC9XytcX22MigQdEnLK6yu7y2NLyu4r9zx7KNLquKa1iPo7qQMgB",
  "key36": "2K1dZPucXHMcpvSD2J84QGHUt2TdfFP6BtLCDWTS7UR1Yf7LQh1ap8JihDhqqjH2M7qgzNjzpCyQcNYxb6L5y8Mw",
  "key37": "2rZYDdTG1hQDu8FNgwMA5in75eTjNh8qcAY4kiBuF3rzCxaYBZgC4C5h5sXJMXCsekoTiS6CyrG6eeG7nzeKHxd5"
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
