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
    "uPAMjhf34UsV3CFxPaRjfx91Ka77c5bwXh1feG6dRZFciiRGLfCebe36zBZJqNPcfqzueHyVZXHnTPSH1TjAafU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58tR93zdocAdjPyrb2tbZieFTwF2AFfhi6Gi1y2sR6HjWSBNLEGav9zYmEyGyCPCSPgfFZPQrysEx3uVTJE3J2vA",
  "key1": "2cxW85dyxXbSvvi2U4NYD5wLLVs71ujrktzmg1vdRQfz68giHaxnDAFQbx9qCKEE2tz3JAaW5e1NB8fsSEg5DbpS",
  "key2": "5Xd5vkb1NE8Hn6VWyrpP9FK7VXr5J11srS3BF793PJNQjyEvEdtJGCbfxoLfVrhVeE21Dggm3KaSCgQfH6kht9kS",
  "key3": "4mzAtgXhW1UojQVQWHd5hRJpY6Us7yq6tKjCdNjodqgPiw6ptePrkmcB9uumAbJ8Yh5Tdj5nE1QBmiXmEiUs3BAz",
  "key4": "3iBg3isxtJpuxGrphQQSn5ZFk8fzC76mCsd6gH3ffcmMbp3CQiX9hJ9DVfyj7VtBS1dMfcu1qZmgcmVMEobGyRG4",
  "key5": "4La7cE3kYpWnQghGquFQWTWmtsqjo2ZU6sa9PgTRvhNQm9w7qKqBKs6jzFZ6aMe2pUtSF3FaPtNcbe4zDacwxssJ",
  "key6": "3cyotpvaMrQqwrdVAFDP6QmvWCkc7c57wqPrBh7jSPiotzKPbK2fgX7mz6tgSHLHqWfBsBjArPKwPmnC7pXWPEU2",
  "key7": "2A8fkckZunoDuCXPCmXigC13BEaqb5Xd5tHxCxtpXcbesVyfrkLptfFvfGdXwCdYhUCyjQTp53QuEiouzZEv1D5S",
  "key8": "NF6xLxEuXe4v8CR9nryStArRpez4chMbBwLbomxsCyL1qdaeDGd512CsAFia3NWpeKiEansaMLKuto6YdAdsWQD",
  "key9": "2TswoYLLMTWXjzN8ewHQLzVHKFA8ifdzBADjQ2EWeuQv2stuqdENoZuCZaANLZ4wZGsmRbSQdKp4VJbkhCu7MVvc",
  "key10": "5HWnk2Nr4UN472mpFkPNebydzxNxjGdSPhCp3TzP5cpMshb7vyx8VUk6N1TyXF983fJN5UHqmjepruDuyxi4xAG9",
  "key11": "3vUzvZ42azWg9XKLv3KLxFmNj8ed1S59ziQDzm4ZHDVRJBE61qELD4b8kr5xmDJgCPiRYxUnnB8jjad2EnakFvvx",
  "key12": "TYLLkfrd2K69dJd2eVS2G7b3kahdmFtBzFe9ihwwKqpe6BMZZ57tcmCf3Z4EciKLYfcbFStgaJGaB1v3QJwKgJd",
  "key13": "2Qh8JfwYx1rEiPYNT22rZsQCXMys7dxxXfq3CwhqVfhbsRhjjkhwcZ13YJRsJ4NBMkETdBo3uNnoxkC32xcTYf48",
  "key14": "4dj8pP3gH7Pt5xPbECa1RhjzCs2idH4EztPyLNuCgNKd78QdSGNfR2Ur5ZrqUmYqJC8JA7QeuQwFASxu5kyCUJ5P",
  "key15": "2AySoWScsbgs2eVo5MVmxv1ZpwdzH3KqhrqHmDTL8UmZSpoWYkVxzyHdLYB4eH4z9wBPTNobYY2EPK3JDP59sNeR",
  "key16": "4Z2PfmxoAtWcCeQVzfUwTsLiysz43Rkn4sndGkqaQv8yAZ48vRoCAsyAoDkCfxG6ygqVqAfWBjWTBWxYfRLqmvBQ",
  "key17": "62TyRjnSwuBvJ8G5ah4VjoFMLqH7t4EC72jKA2W3x2TLq3UNRyHaBNt8RgHk9ZoT28mEqeewFRKVMcEy6Gc1WPJQ",
  "key18": "4bo1foFU1t1i3SkYA6M4P5i6AAvfuwtdtiep27DSaFFaUMs3wNRbWXPQUy9uktqWhn3sZhpZMjSQBAUPpF63mnJB",
  "key19": "64DsnBKiCU4pzJX8hp796QGBsY3FvWFn5sJkmumZesV74RqBb72gSfHDZoqeKFwcfHzNmom7iQp5MNZDV8vEhZth",
  "key20": "4ekcEt7rGKzG4jorzBBHzXJ2qWdyUR5AhraTt3vbv7CjY9hjdDUx3Y9GJdqKQrPHyhESqreL2YYCdT7mNdZTwWxW",
  "key21": "GHrDAQ7ALLfc5s1p1rpWK9DcHCpQsJqUtafULXo5zeuh47UtQ6QHojRnVq7Ccj197rxar8QVsRYgnNEFX6iTz4C",
  "key22": "3QRNFfZ35YQb7dv7KVtDexBmW1nq8yfvoBtz7AXYTTvZruNQ1RgkcKEbkaKJgbsFMS6s7akszMig7Jiq3D1b1Gd9",
  "key23": "3Puc2jKLBfeVKJcVe9xeeGnvwL3taj41i77ffm3ACzaseGWFC9d6MQ22wde7RDfjxRvoRmmsjMoJpSyQmkMbLwZm",
  "key24": "2qYGesjHhChbJJy74kHpfSWEduiaUrmFC6mVbVDZR1BJQbi5fik2BzfVhE5GRZp7BpmoYrjtAePjuSXDD3obobXn",
  "key25": "3xHhoWfLfbVwwzxJacpTbMCgWRrZ8GCvR4bSx7WE5oLY9uHGgA48pbUaPpzgsSbtAkT7V2gxvumPzucX1ma2c9eT",
  "key26": "4Y3sa6vXk9E2a4fRqxrCM8DJWpE2xVcnsjGuSKiujZPsizks3xJ1tCUFpQ8SbXXDRSw3mfyWueb1F6wPLZYQHhkB",
  "key27": "5Z9bdepJdkxPewftVkAPLDUqUXaSbxxcNhcyyWymb3FmstgwoeLjpW8wTvn1q6AgsSVkfVbVVayu3zydYyuNxgbq"
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
