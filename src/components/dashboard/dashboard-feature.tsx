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
    "4KTH5rTKoMZi4HVGh7PAT31p9ERC7NRBVaoQQj93dJ1GYoekLU29co82hcoAdKkEjtBzfKjuEx92WNjHtd9USTaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F1r3aJHsAPqxn2xufDXLUF2oXXqwYVBD7Jxzb7wJSPcCgVKKUJf2nUJriJpSyiG8iVETrzEAM9hv3r9HwJt347J",
  "key1": "3iW2rDt7k3ztEF5cjwxukkvwvsa8RqmThbRaDJxpt9jraZBE8Zrw7SsFYP8gKXMiHGXAbs1SUd7xP7YKbYG1Q3PZ",
  "key2": "4A2w6jYch84w8hwDwvWttqF3ZnHodRWuGnHtR3eCxAzFYRwZhDrABqhrNZqgU5VAqbvHe2szCPCf4k9EiwZLWxS5",
  "key3": "2fcCmBG7BA7CbRhCx1iJmyf524Hm4AYBgmhcXyZgALHr4oJfTQwPZx5LgRPxCHav15HFA5WYgec4P8xNWCn7UfGB",
  "key4": "43jGFC4NjnmPYchBmyptLZApvqPpzX9LkQ5bNnV8HrLb8P8UaMw8Zv9MkMmdi8BHgzD8DjdisP23vkzaDUeKSrKi",
  "key5": "3a8a3K5a91hCBBqzMzSyR6z5Aq4KrwVpkgXGFBv9VEZXV4VU6XuSVgkDoXKk2wKTccrYe3E6gXgKrvt912F6fPH4",
  "key6": "2ci4gU8zTgPMhvVczQbo2GdaWYW7jAcHCUs3X3wXMPzTcHKNTY8PVFFHJZ59BdVcp62tPFjE7FfrjXH4fpRh5wHD",
  "key7": "3Ny2LUHK5M5BH3rJMcTAzoF4yehzJTZ5Pg64frfpUhWCobs8Cz1ZQWvSfncLisajftnm4rgff8gwTJaW1ccZDvhd",
  "key8": "PMqASx4iTFJHUiQ4wQUqmE3dMLLLRuNpJMvLiWAcNAMCdo8JwQCKaEYRPMiAJZazSj5QbTA9EcvaTzc4VZChCMS",
  "key9": "3uK5pWPuh259x8Ur4e4frgGcieuin9UsTfdpUakpD4RXZtpCP4oteX4XGEAzJbmaTyN8ByMfcGZqBdNs1sf3TAGJ",
  "key10": "5ykDfDvfkipmixRmCxYVdFqQHgjw7Bmv1HVQfuPM8hVEVrFEUCBjpMGctNKu4fyw3m6ciSiDx21zfqWLydhC4KSW",
  "key11": "3dkbwSEQkBv2rTkCGzwyY9yeo6cyyHX26JsunT2UNovidoUYM2k9DRR2ZLmhmVguj9vMHdkwyqSCBTnaYvqyCTgj",
  "key12": "5DdQTLzUnuAViMJoNi3b8bNJcFVvijXUzyFTLHZ385w4bHx1JKY3at9wcpAVe8JLMyzVmchBHxG5M8GvLhGGnmsi",
  "key13": "3XawmCzsiQBPFEwjPpDwWuCpWdm1vhczMdVaJWvasGyMEz1z6wbnTX5JG9QkrG17VrEEQnepTbVPhrbHiTNNy3fj",
  "key14": "37XpXSYYvA85p4CkpmgqsgvdqyuSbPG3j1tzWhkhPZPZ9twdMvcsx71tiZE9bNoKrxJgrEuyrWQtd4h8ixaotAAB",
  "key15": "2fBEDAs8txCkAGU3dNZTT83r6NWzGrcFPd8rPjM5uA1r5LGjNiYmYGH8uZEn11hmfJ87JLraPPXVygSA1uxnreqr",
  "key16": "3aHwkdDnbwrt7P5rmF7hjJDhihppF2wN9z6JYukVHLikXPwoDh5qDa4PrNPfSJ4PXAzSopqbipRKzcdXmREoHk2v",
  "key17": "37uUcWFfFp6p6DcHsJN3bw9KXjwq9qBbA4dNMUHmbjiQA4pUu5LUhkQx1qG78PBaZQEPgjbdMhf1kBkkeFNJj8jy",
  "key18": "4u4xzApqqoEMqH8QyxhJDR9Hk5Gd5Gxymtmq9VGTVRz8YVyroiUhyRxhorMpbwS52vdcf4unBFfXdKyfyNEemx1p",
  "key19": "4TpkeYGgKiLK1YwzVpqPLM66R7xsfNnWJai9XdfMj6h5iuxBiFVcVRcLnGxsaAh1sCYL2DVNDdRTkj8Wu2Q8w7PS",
  "key20": "37nHwLDfLYcGymyz65udszmYVC6Ds9nSqE9gMDZX1XQG9Fw558kFmJ8foTqqXgtT1dCiUEdEPMzxA6fmGzGQPCbR",
  "key21": "4Q5pcVGAR95Lfm76P7KU2fbbNEoQmGKFazJiHKuG1mfRitydSqc4q5CgrNDarGGqdMHfjXZLSRGCMnWk7WECMYB7",
  "key22": "3xa4UQcSXfho1bLtH3m3b4UvM73wg6Eu5HsPQosedU1pjXqfHg9DepupB26gsKejm3vUF7pJn1pqoG3uJT7iGCJd",
  "key23": "232SvSW4jvqwdyjitHyrj6xa9YKGyhvNt7iwE6pBpyt9bbCDXqzfGRRjfw2fdFbRynpnxDkPj9HCkTYarX8xveGk",
  "key24": "32M61jpiTTvFuUNaVqoYNfVzP82iQ8i2no393FSJUSU8SHEWiHh4oLFfE36xRyTGg8j37DhTSAAidQ25SyznJKEY",
  "key25": "EC8KfodemK6MGZ4KGqBmCtpdE3ByQy1WSaKqYPicZJTQmtwAo7D4Sxzn7yticNsUSonDMF6vtoyYJqq7KhtSdVw",
  "key26": "3FfHAYLnh7x1oPrPqD4DE2oAmKWbrDED5Spwb4pjXPUUTKVk6Dwg9F8t28XX6e34QpGicReXWJTKig8hSRkHBLNg",
  "key27": "4Nf4rzCnYmsQ9WHmFQiwY7FTjPxVGj2WVHWSUmp8BR9RUMuVXgA1vwm7UAm7SNmWEcprHFovvAEJ742s2QtS4Ncr"
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
