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
    "5sBCzJhQhCKqzmjipGew8juvM9t8D4R652hm4V6euNyGLhQn61hjNnxAvAP5bedPtMeZ2QCsxbMGFMgXbCrfmnjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWLjx8EPA674uwkbgcMEoxoLnfbj2bXN4pU3KUeYaPyDhdALj2JvrC73MT8otgzZJNhBwAuXC1PD6qsst7fg1Vw",
  "key1": "3b5aqJaVqoDLQJ1SbJJAJCGUEMHi6P8XXZAou9pZgt9nR5Eozn3SLBbTRPqKmS6CH4yoq5BTS5Jn5Jf1P11Fd8iH",
  "key2": "5VRdLpoEstDFyY2x7dtoCoDx78Trx9kggeTQykkLFsQM1CSCV8aekGakgWb9QvxTexcPJtg4GpNGLeDMPF6UZLAj",
  "key3": "5Hx1YkrMB7KNBGRDQ4fYYnDvARv7FFVWJdwiFefWydUCMpAaHXguQD8nuaxrFRUvR9hx9n96swBNmAR5zncFpP47",
  "key4": "2y5j7VQvzyRg9LKCBSmDajnZGEj29bJBZSPpYzN7kqoDwYy7XM4iysWp6JFES4qeLrsJRQeF5tV965HiLTEkCiHB",
  "key5": "3V7zH5bVo5uGhcmX5N6ycxNWoZyFYmrEQnSabDLMcRAgPCJ97ca4bvv7qgmDrFfiv6Ts4QBeqYYPLYuZwSDH8PUh",
  "key6": "smQB1nTVQVetT3Mnt9erDbqBmhcUL84MkhnWSsN8wmpZ8ohMrxcZw99JFVRHivtgS9Hu6oR8vkzdf4Rm8jv6B9F",
  "key7": "3GodFvQ6RFKSB6KTHgkZk9awrrFE42tuBYWEmiXwn4hoD1mvKqZWp5hyfKFMqkvJEZEv32iuWb39PCCkZ13BSmKW",
  "key8": "4CCPETjF1WTRbtcqEo4LUR5eLSqjY8Fu9TmeqNgtGdugWeG33wdaUtMTtnhQSYw5D7PeZ4TRmvseZeUeFxt3b1Z6",
  "key9": "41zkEAmisec8gVPRiRQbNbEhseSo5sMEoZHvjr2Lw6M4hhZ5r6rzKDHii7kaUvJqYMaTjwuk69mDnjdVHaGNq9vm",
  "key10": "8gsukqDUnSD2XVRBwWuyhSsYw3KsGCqggzfvLzrd49oyHckto5sYF8VrwRXPsTHjidaghu4wefqw7EDWvbbTT72",
  "key11": "5yd9CABNNxLR54d7yHD2QkH4ak8TQK3wjem3T6VaodisyFes4aXTTQgqRPYHsM3BfzA9YrJdH5k2zSXXvtTBE7fA",
  "key12": "5wGYGSzW8F71XvqkNQ1GMWbkMv3yt3ETttdXm55Z9KNBfU5u5RBUYnMfqsNpNvZGqAEsxaqQ66X9yzEsHZHSbiPX",
  "key13": "5roskmTwsaekKMhaiBtngXpy7D768x7sFQVwat94RmoiZ3Ycv4r88Ah8ZbxcKn8p4S9SUYxABKTSmdwzrQLguAxy",
  "key14": "3wK573Zb1mdjwqKNwZccwecGCa4W2qRFSfD8h2MuvvtqUFbzKP5PqZRpWpBQuD2PFTcXWofYXnXD825jn1rvrYEN",
  "key15": "4eFb9QKe82KugoTEPNdeS3MJnBx2YJS8xZ1RAotum2CVTma2gFTZBa5WZBuNatJunKQCp7g1J76nTy76y3ooy7dx",
  "key16": "v44fbwwQEh2GMDNRoJig9RprNscaKGCmQaCo99ofHwHdjLxVFMuRYydRbzYmUicKbAWdYrNmM9vdVHQZkiMJU66",
  "key17": "NaFTZvYU1WpBqfgVRCqtqLEKzCP8modnvTmS6Pp633ujyqaVWJbdZXRTbLbMGypzjExPJtpMoF74PRXyksx8mLQ",
  "key18": "5qxeQCYTgFByvf4Y8ZEme9nnLRwiNWadY1rv5He5i8pyUDqsLaRMkis1Vie1u9fH265yXuZ7XqBtSCDYGF9xxPau",
  "key19": "4GmVGSZrpU9q5S8P3vPDVV7gQcjnpHP4MWEzVNY5hvWuwAjGk7MxHFEjDQRvi4QYyEXs2E62KqRMha4KSrLPFK3M",
  "key20": "WTjibyV3VBM1TzXvrobxCMxVqxgQeD1A1syh3J9dHRbVUEVX4itDAAdU4q51faGjGuEfphz5skRuhDAjHpqDSe8",
  "key21": "4t43VZ9qh6Vsnwp5PYuiU5Y6TyDJDwRSdyyBMxVpJqV7SquPWAJV3yNFZC8AQBFta2AsMQS8UvBh9CGQNZ8VtaAX",
  "key22": "3ozcnxa5u3A3Yn4Hzuj1eB3zwspPEBocS5VK5a2JYFXsmSAzqChPWbXxv36nSumWN12s4otaLgXyLyQjmeg4573Y",
  "key23": "2KAdYwN3FknUDKgFRsPgekrDHWRv4o8fVJTALe7ss3fgjqVrW954DgarNdiJf3d4LDMiS6LaiXSTXygU5DLf1jEk",
  "key24": "65qLkfgN8t5CcDEvDBSsp4sX5TRt9BanLEPzvUXn1K6sYoXpYRViozXxKBwVsaA5gHoSCa66sur721z7D6x69b2Z",
  "key25": "EdxLEhWUUfiXn2hYjyGuYgxy5JxehLzdVVuY2wTmPofNY23gkn6rzodKCPvLyBoj8q93jqbtsy9SfzHfpyKi9DF",
  "key26": "eZfFcifYgXQsQ3zyV9NMfX5KmP7TFo2A2aBeR9MQoCWLrUcVGjLWvRX44XxFGLCSSW7BCV5CcVwgdgHnjgkZw4n",
  "key27": "2fDtrzHPMLKMNcBZMroCfoNSsDeUCxieDm7FS4NyaARenWd437nK7R2577aojiAurbBHR2j3DHW8aGrt4g1z4WTk",
  "key28": "5B1guXKLH62mBVpPdB1u7kjLRkZnyujSSev63L4Lxu4VUuP8XKv2XiEQXJTFKJuGigzx4fLhhvz7d47dupjkhmBw",
  "key29": "35ptasyrEiRMSUQVX7jZcV3sU9QgmSpdwtbn47izwwNWHXWgVUKk6DhrvT2tqFUiWzu2EJT6jmFnTbGNiEZgQ44X",
  "key30": "K7LCgrKz7FvcXD47Hp5VYU5CPPoY73EuCTSJYGwoTVzjeNGsFuQvgLwz8qoZQTyjUVeGGVgdYFyNNv8387hisBT",
  "key31": "4ojHput2KPxHjPi4GMAiYK9R38hmSvzU8xjNvfc3F7BWjkQBzKCvNvd5FfdasZrwjD2bT9p2bEMy4ETMTv3g7YXo",
  "key32": "A6CPTWwBr375VJYMnpNKP3xUzYgSWC8H6PwYaGyt9g4fPWxxs4NgtwVgeWLggcAjSMoHHyez6wpE8j1kDU1kWXK"
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
