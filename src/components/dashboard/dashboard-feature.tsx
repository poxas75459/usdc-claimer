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
    "4nNafnY7XC744SzqD2wkTTGd65Xk25XLtWhW34364iFUsoggsECjt1BKuUkZnxtVgaFiSngNF3YXoyad8gQU6RKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TrhHQJ7WUttu45mHASLy6HaeduZ9HFsw6ASnfCzCer2cHTmb99dMFcLZGdHYKXFpVt8MGs58UpGPedjdYD4cJM",
  "key1": "636BpUCaLAHJqRsQnbx6nQry3Et6PWHNhUCpKbVoPUocLBZCSLSoF7E4ZDTQYMgeffDC5Myh7pge3wC7ctzEgMkJ",
  "key2": "mkn6hU9wxBNSqEKbip5y7kE8i6jri9e6RDfD4STGq9DkNan7aPgkYdq6eTsbMSUcHoCufZuSeHHsYjiqJraaoGr",
  "key3": "4zXaUG7762AMofjTD2mKyH8XaGHGMZrupSnyCbatSZLcWCrfEkfmKbXTUvJ8erMXTEE2LRfXamVcRNdgcWJUuip",
  "key4": "2drDfQfrNUwh7RM5vaK6ssS4i8J3ub4H5kcUSvtpL662gnKcf2uoLiRzWWDXA7CdhMXe7CHNwdafVVACV3DhWVGY",
  "key5": "wMGJLLtgFAwrzvW3vpuQTWb9bfVLYgXRdFL64tP45WjjZCnKw5DkmA83ACfkvyHu13WUwRYxCyZcynUwZXZQWC8",
  "key6": "3UM2riKpcKsghxBGTUkeaFqtrP9jMLYHPypBDemFz49Gspvd26utcXK7oiZEEZDwQMraLs4JwwNVW43KLjp3EarJ",
  "key7": "64QWmhCfqHhkbrai31oooNocQUtQmVxtGFGioW5kJ2nv21vmyXAiVoiJHfzhphRB1k2wB5ch1ersD8MgHdbNxk1L",
  "key8": "58RTktyEwhuZERUJDvwEKXrhEc8pwt6U81N6YnZevYCMzZA5GosPjUCnC8P32YaYjJZKFzeBFpm2DZ7Ez9o1UJEZ",
  "key9": "55UEerY4ovaC4UbMqHpgKDkswxzPgf5WJYoXi8Hou8z7gE5943bPn4HftNAj5yN7C7NipcACyGAyS4AsCHLRboKH",
  "key10": "2h742F6nMH3iBovYLAwWAwWGn3U5soLRjNLUHHRPig7ZKtrCvy5VJVLwa3GjEqpKYmcoF4QL226X8aVjXM7fMoHD",
  "key11": "bBqjPEaFoCL6xiW2umcHzGaADHaVaKY9yagRGsPLh375BsHkryQm39FA5q5EECrFVCJ9Nb19wCXGLoF7TtAKwLK",
  "key12": "2oAqJVtqqg2UjTCqKfsqyFsPVYjQfdCcAqJeLkMwZG5V44AjqwfVYPiwvA8WprKNVuAByYvZ81R4QjqtcEsFgwUh",
  "key13": "nAEzTKykhpWNPFMghzvo4j4mJWFAzexhrjGBHsVdwF63Z4haKiVsu3Txe9JJNq1W8QEpjCGistqopgoJ6aRbSmj",
  "key14": "4RkS7GnkmW6GySuSgMktUWKo5DEVHCotzQn4HxjaaBq6N9tJxcU9JufiWG8FaxDgwb6uwB9YPdcXD75ADegX9wda",
  "key15": "55mXkibFwjZqhiLTPy5FXmnULCw4YMWscnPghSK92QpAN9R4F7nzp8PUAkp123QSzf1v81VCWyd7UHgAcVuGsSrA",
  "key16": "ogR7StKqDeSCVaYk7fLuP47zgXQgsaQ7YhgM5Vn3HPn2kVTQoBgkQHBHpoeefdo2FacVLDz1392dFoWac4yhTEU",
  "key17": "4nQ5RtknUuLeubD1o8waortjonZGw9VzFgTte7WWxBE78ZeBX2bjJY3dhAoxJ7TNnNaMmGZJuSDmuqBFog3Mfpom",
  "key18": "2542XBgU9ypjY2BqHpwjoxf7Qfv6XyAkUXsHeg8Y9BoNw4ZAr3Mxt2SEhdGapdpmmjKBCJmoXW6ouzhDcNeK77of",
  "key19": "5EtU8C5BMshE3fb6c5ntg25rKADZYHfxCS9fVDfNH5vqESNkwy7VjmZAWJFxt3xKyhvzFWUoFrMkUD3VRUkK3mz4",
  "key20": "2VPjXCADy3P4KdghETcgBQw97C2EZtwEpLLXSJ38Yz7dZmmHm6Vut5zmZMwcKUrbt2Z34aqiB266oExHwRyZ45mK",
  "key21": "k4VgWT8BDuuQASyNiHUV87XtLSxNTytL6b7oZMh9ntbc1RxsdUMnEsU2cGiZnLEuJiwoxSR7GuRLsppv5g6cxUr",
  "key22": "3tqAszoQDbomQPsEQQFrLZbJccG4aMvaLqZHaHB7B8GJ9mUYdkmCYk5MVmVNyA7yq59iC5JEYfSKzSoBkR1jM2Rz",
  "key23": "5m3Hp8pNi4t76KWrCwW9BzX6pTyQMJgksbRYQ1Jj8pcNg3jcicnD8AjTsRTmZ4uqttM57192UYJx1K6QdKzs5Hod",
  "key24": "3JrQrZ2kL2miYxLMBiJMgSVv5eExGpe6KX3w54x38C2MZsaxCLmmvwwRJuiMZCUMn6N2ZNaeHhp2KPVt547HMNr4",
  "key25": "62zFWUwzbpcRY8EhmTmaCVaYdhUnwUnpsh9fSj2PUtDT9fdTNQbEp2xvgqogYKswXRGogB7CdDL8AraW3eSrSnfh"
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
