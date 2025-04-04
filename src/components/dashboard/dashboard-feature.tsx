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
    "4KDnd6YvRhDKddaMxAqHXqZ6K2X6h62TS1PeoDgcDrwGgg9B4suiiZRumLfMLo7JNTwZ9a865uxyqpqdPBDXG2by"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRX8szYSZywUxHg9ULb92xYZ9QxCmp1b3MVhhCygNpMPR5YgswcBg7yPjnz2J7gHstS4ADwm6jGtcMNegznJyeK",
  "key1": "3ph4b39ja2ETfJqAZjSUvM7Rw7jN9rbW6AuuRBYpiQg3viTodnTZKkShtnhfiUi4CYy24jTQ79oeirwSTitGpaoJ",
  "key2": "gKD6y5Wds3CZSxaJvEhRpS6KNSYRKN3u2wmU9CajpE28a6ZHPT25QBQFcZKvUKBWGVuYhrrGjfkXAJ1CsHXMUTs",
  "key3": "36sHtUH6CFjb8i1Wa2TTjjUDKjXUq4zfVpu8Hy3FBghCApVf5NHHrVfXbWSCWJUaCGAUBT3wDGuW6R1CDtCYjRTc",
  "key4": "r8M2c9dSdLrtxrf6PqRCjzfw2oZxKRv9K9tpH6pYRAr1vUxrK2vD4u5j2ZNGS5pkCXYmacWWMXfPDRGwYzxhygB",
  "key5": "5Jjuj2ceYyvMXWdrmfGEdgzFTumbzBQveSTeU7LYQtNcQgcbzP7S5AYXTrswkDH526T6sfK6gBKsPJgoD2tLvzAn",
  "key6": "2EcE7srKGQGiKT4CP2842Y565jCQFE5NQRumCEgHqM615WuZAcsmBBs8rGMsAY7XXneqo9nrXkpjZdeP3cx1Yg69",
  "key7": "58nn8P3dnJ1VVmrAbQee66U6vBbWwhHP5Fyzj2KhpJhqGxWe6dniwhaeiRX5UoZrEq647xbAVSj7h1iYgfvPZ38H",
  "key8": "2vwyi5Zd3MkzHFuxk7zuXkU8skf2VFYgCea4hXR39XUgumYvPy8zXGCQG8CAbj4XJ9BgEKPGzZReowBXS1W3N4ok",
  "key9": "2sGp8fonnRXHXRu8y9LicJJYScLuy1r3vhaEp3UcYQxowoWXx1UmpW9eGS1D1JbXQzwKvxPjVj8Mo7maYMXFrHmc",
  "key10": "21m59S3dDpMEWgsNHSGW7rrQehfjucuBe8KbWDeStSs81d4yvoUJueFGiTm98gb4r7KVVCFctYatRaUwPkJNQWgu",
  "key11": "t7LmShDxsasjfVPmn6QtAD18XjoEbGb4DbbxHombvuPzASYUW1vDhApAVUS45pXXs5yxGesRRV7ao8Mzch1ECR7",
  "key12": "CtoSozpiBKzT8HuZgJ1ekm9pDHp3Yi7jQZCB2cT6hGWxHPNELamiXemEpiceD56Zdf7gPmqfRYC2cpd581BmEYa",
  "key13": "2PotX6wf8XiexCDd1SZ1HnL6S3vPtqzMnS1bvbSZ7AoQqQGiG3NeeTR1cDJaPcZGabh8mPbe5GP8nha92KKqUGMB",
  "key14": "3sxegHkseyrMeZtVhmmvBN9VAD5iZKenrpQLz67eQQtKT9vTZGWRDqkztWArbjfQfrFZR6NeYCkU93FyfcSobBL2",
  "key15": "46vCXUgjQpJdDiFLQUyZszBFZGaEpWiQYxVEfmBbKNdCGakJay8Jea3DpPgFVC53ezGH5MyaBdXR7PjpZqfch3uS",
  "key16": "49ZWa3eqke9rBVrudtzTqp9cDMoYAGUmUr97WGXQPifvLp4zcMRgvFCPVf5NRtDAAgJifXL65rm6X7PTt77bCdJB",
  "key17": "bfLFeXwTRkgSwtzNHCsTfL3XqjvehH8pdzUPbMDcpHWq2YxM7mJJnD6KmRYssdN4rCdvhEWBwWUbP8qH584udxC",
  "key18": "GGwxJCRm66zZHMtQnMZqf5taTEda7nkCaRxS6X6n2kEUzKWDYwK5mMhkbt6HPBV8DcDVapaGUgztVXp3vtCKNeW",
  "key19": "414U1NachVERsZHX5uZftBpkVuJGEY4Hk5BHsUQu4zUUpPhtToSo8mLo9FHjKvPEFxwZZnouY1b79mFrKAGWvLKF",
  "key20": "YEcQTtAuy2kZsoSBLvbWqPmcvmmdgBodsTP2eHbofJUgd5VcjSWQ4AdVWxguVcQbSNqfk5rSRwuNtUgjW4aQDg8",
  "key21": "4rnFerogbDTLggV23bbTy1JmQRrwYoSof2Tni8xpS9wikk5FZf5G92MQCNepkLEDoCsNncPXjQs1pPUVthCxsPZf",
  "key22": "P2EkTWVN2EVD8MJKBbZTsoBBs4PNU6YsSDNb69f9cLJ9f1HaZuU6mpMa196t86BSqL8SPQrdNbY7yGDMxw31rML",
  "key23": "3haRZ1XDDsfw3WP6YsfszzBYWbvvuCdxuBBbZZaSFPiv3auZVXMNxnz4FKTyqs9FUs7s2Ba16sygreAZFqYdn7Kb",
  "key24": "2snCUn1JhPPhgGbitXMj1UWV3LWund8VDKPpQC2fba6pkTebGTRsVatDYfkciQvJ1wwwYujskVoLMrtPWpYAz7Vm",
  "key25": "5hiaxP5N7uvmChPwDYJTDzEqJM5BCmd98Bfto3NvQjZwoXPqWyXomiVcehbHFCrD37Jn4WGVRdJvpieRcn3rwPcZ",
  "key26": "5aWhq3ZftrHGPpK82mBeydMxktNkVjzKw21odF2uQdXAFg3BPpXskatvtFPmbMiE9ZLiRGXNEQNRg88jBiZD9nQD",
  "key27": "2ArceVLANYCEi4yK7DjRRNBMQsyBVWvuU8zhwtnLAjWkimcUyX16LxLNyRBJyCeYvAowRW8c7p6nyHJjKoGzEG7z",
  "key28": "3rQAF3MFjJqUSP2X1LmiZQycKHbyy9f7h2a5jeeNqjSjNjKRNEkSjnFY7d5kddVX8EdudbNAnfxRKM8wELjoqQCw",
  "key29": "4y7ZJNsSfD8gjkFAWAv4eR91gV2hnamaCaxqrtPoKzCQsg4QzwytZWzgaCTqStaZquwznskhW4kXanNwddKESPAL",
  "key30": "41dvRSGE9gfdusbq8CeGAhPkUpLN1gXnrDpbLFEBF47doNzvss2PMb82BVX3Ff2YwYpUoSwtF7aTrxRApCpu8dvp",
  "key31": "4YdnDvXxokcC7AUXpSJNhscRirTVW57xCGgDuhqxNfciEkScGuStMXpwrscpAW6or7BNM5a7vt39JmnxDsX1xczn",
  "key32": "3yFq7tdRYL5WRX3XLfXUyZTSPJT2qjb7puDBw1ZDPSGRLnnZr4oFcaxctbLTVHDcNSuRsBP25ejN6pUxsPvsPCpt",
  "key33": "QjxrGkPBwH7dANsW6xVLVvZXh8PgJxcsWa3KbcT2h3jh4QauwLo5h5MU1n2QLh6WNWKotH3KRfLrM7c6zvtAVnv",
  "key34": "5VSMsfvkL5AHkpRcK5Kv8hamMtpCiwgHgz7AvvuQzWG2EmdxxNfnYWpGd2WRrpi5pPnXTPqsiGqC1j5PhNEHfC3S",
  "key35": "3ReMZTcPRUPiXZKG2kChX1uuJv8oxTbz1CXAzMddiMe1AR3WvULeexqbfWp2pmeuLrWKeSBiw97oa6vM3ABe3oMo"
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
