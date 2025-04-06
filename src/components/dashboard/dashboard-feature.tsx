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
    "3aHpixCMZPbiHdaCPJENDHsT38cJ5DqyH1T3orCSfi9Pj82PmLr5MqmKTgmKYjgT48KVVCZKyZvbYL8rKi4PQDUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNHUH7inhFPFWeDBH4oJ8WCS5W1dD3QBV46fCa7aVYT62vVezfdSAZkVGHjaHAztLKHSuVmKefWWHRQ2pAWHpqe",
  "key1": "61xJqCumZRVJHTeorenJKYWyoHNZT4AF4DMdLcfErswUzhC643XzWqDxe98xHKYxqwkYsnVNg1CWeeL8pJZ541N9",
  "key2": "NyTXx8DTMFLGQXwyMsuCjTwiwgTVSmNaNRkNGaSogJfY7b87bjXKe6hwpG4piUW1yx9qbkG6UbQSANWbo9QSGoE",
  "key3": "3Z9WD7UiYJ7H841Tu5RKJoBj8eJm77gtpVs5d4d53w1XRjXPWxKgM11tDyoF7UqEYwjJg35iDNqGuaMSGY957kcX",
  "key4": "3512U4p1HjJjfyz6qXxnQ4tLevm7wS9EP3aTRyBmrxWG2Sjga5jF8y2pyvtvNqM1kVYZhECLy19WzJ4NCUtAJASn",
  "key5": "34rKfArGYyJ1rC3f9dXM8sDPkgvDsvzy25kBxqYQfNWHVhmnYFGAXsMuaEf46XaEduuJG5RYoDU9r2CeXV45zL1C",
  "key6": "8eBXg5mWct3dD4PqT7oA8cFokwqqNRsExX6TDDT2NuAHJ1zzBinCBtjTRsYiQThfdxesV6fKUKcgiCtbEixDX35",
  "key7": "5zAna5eQ91qo75rpSJAAvLrixRuEz7QxKJDyRae7bZCFXmtwMWmPRAqSXqpDbPuegPuRLLgEaNebD3hcnnvKw2zg",
  "key8": "2jdYXy5M5Jhpe6bXQhemB7STocYL1TUk6VSdMa4kJSFNsvEfT7c8UPL5j3L8DRoqN1hGDNXurkxYPnZigayqicbh",
  "key9": "64tiPjKtKN5MSesYuhw6PCrLDaJkiUQgJarYHJhZSTocDJ1uc5pz1CSFSwdcRi4vfkQXFRnHRVAa7XCGVrF1KtjW",
  "key10": "5KnEZBsm5kxrCp8MCFnvJuoZ5LC8ywmLq4vJ685XWPqzvWJSNReDKyxSN2jzYtUYJe9hBiGKGDZtmYDHQtNaAMX3",
  "key11": "48nD1rENaQKuqp759LUxU7kr5UwZYNLRw8ygkw8BEjUohCRGauvjRpcuoqPxvmE1CehHj3GRNTG4dMmy3wYPrkWf",
  "key12": "3PkPqPjBVqzampUNP6SkgC35sxpN4Qk8Qgqw4C3vWjbK3qiHVzFPUnqe5ETEgezW1um84Nuy9uuz4biWrw47Rmco",
  "key13": "4odnYX1CziEPC6chmcAbo3fAgeDq3BbaXyEXzAynyfN7HTA8Ndxbye57KHhPnBfRiW8eZ4DdsCq28PMbLFPgyBJU",
  "key14": "2qkaYh1PWTbCpnXng9FJPKfw5or8Q4K9JWP1XjsiRUuRZiCvTet2CPaCv4P9GtghC1Z1Ndevd9F9Sxz1SBCr3Xcy",
  "key15": "T2pgPgTDP78XC2mNn7vjuwhAJ6gTKoP8VYRCh7Uph2hmUKj1fMhrcruhoqNdVKcJut9wzG7REmYhxWFi5ppTZsj",
  "key16": "26YmZcvfo6vpXJECRi8YfjdxRwK8wcCS6VuSM8iXakvMsWT8G2TGC2oiZ778bRb8mmUwYTTBzmYbZymNcew3HDue",
  "key17": "2ifiAU3VMdrA1Nrq17cQXVzB6fDZW1qvJfyNePHsJZwZ9ArdLzTpt3mQMgjEofMU7ugFxQK8XzT2uWg8XDHiwGei",
  "key18": "PTnGjB67PSQJS6vDpwcccTnRSpVHiHsAYe4aVY2MgrbB4VCSNq74vsUguxabYhXEBXCeUdpJHpJSgmZWydE7LqA",
  "key19": "4wefz2KJydNX7gFEE7kxvFGym7XW3wAqRSbcDbq36hNH82RsWBd1pDftZ5pVxrAKaJEnEpZDh4BayumXodFaMBS7",
  "key20": "3mcYaWHqpun6F123tWWbHyFkUJfaUHeTkeAMugvcDEvyKNySpe3Ex3KDPKd5t68ne3FvPiX4sK5kHXds4XwReogf",
  "key21": "45QwJQTC6tbo5odLLejF9E5UZGyyPAPHAnFF6d4LGpNLLqWLYKbXqkNikqEwKR3ucGxxhu189J3NKiMWNUXNWDck",
  "key22": "2R4vrwA7v8eHnoQC3G3kn9pphVF1Sh5feFHdiCVBsSSJwHYrStd1hWvJnbD7FUJyHSiYYVitp5F5zchJw6au2Jr",
  "key23": "2m9ZEJUpAdHbW6TKsnX3xHcAKAg54mujom26k7gwmbRcBkXXZF5TSB1eigiigxPDvSc4BBVz68PiMFUtTa7ZQcuy",
  "key24": "4vUXtthss1swV97LX1p8y9YDfyk3uW1UYbk8bGdxewCEcKDtsyFFEQgHuCV3Qh6MAAqJsn3sLgz3dHm14EAyXKBG",
  "key25": "5YX69zwwhCqqEGryMgSvxydPS78YVJeV4HY7oKcEpFMPG3ZuY453fZBhCRoHE43VaYdz5tv4mRBiB6WwWrH4Xext",
  "key26": "4MFr57ZpMHUuAJB6ZMT6qLZAbGU8L1Tgbmutjmvh9y8goAKUQydJj1jEDWjy6KM49Phqfs2JmD5e5yv4vJe6fzo1",
  "key27": "RfzVW7Hvj57ExxTyKS5zrPEFDdSJiXrK2mXfaRxW9njkF5LTFnBgSd3mvJDkbhFvKjz93jbEmvHUEF3EeSeCKtD",
  "key28": "HdT35MB3mPLNysNwdfZ3J81tFysHb7JLTvEQjonPdaAzq6Bu8bAP4ie6sfWvjvfYhcKxXzCMRtynox2xgq21jwB",
  "key29": "2nLJ4po8BytGkr8zfm7fhEaJWs2MhzTeiQY4tVFxTGFa4UNCvEwyTg4hzfUoVa4LWvAx7QGGE9GcEDgttSjkA8XK",
  "key30": "5mK2VXFvvJi6U58PkzgzaGJ5DpabMUoDyHWo7yjiiPyaXLH6s9C84Mj8fik3SJgVU86RUiHm87911S79t1E7omso",
  "key31": "2E4Fs81TD1HWez29Rabcu4gk846oCYdcephKPwCZUiCEm1jcJZf6KKCwaWgkg537bMPpjSofHCdD3oAh19ab7SzN"
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
