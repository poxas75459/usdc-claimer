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
    "3DG7eWt7HGcyWjwNFyLwxc9DqfM2jc7N7eHSCNdmQ99dA1fkgKVDgdDK5CfvCSHcYfR8gwR2hdVgGei1FQkmvyVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDfohNThJeBsajzGUxFbPfmRAsA3hKvGDBDCkh8qujW7auh79hwSHEKD4qUgAfoq4UcxBmN97bBynqDgLXZL1mf",
  "key1": "4ozabYv4aaEWCGpNTjhcMaTtpwkikqcv35uq2bREaSMR61kqDirVjrkSSkKgtsfBHm35siVSLUPQfdoLvNHgQZ1R",
  "key2": "5fAzpEWDncuZ5D7GbpL8ExftEXKq67oCTb5QbG1A6rFdnieFxGyVEfppXxSwA7nXrvmxmq8uFMH3q4MEjAD99xaQ",
  "key3": "3nAPxq9NrZ49dsYjcXzNyMeq8ppM348DTBHLXEcN4gTqTfYdg5geCLM66g7MPDVP78QzV2iwpMPwPATsj9z6KBVN",
  "key4": "K4SnjEJgBZh21VTSBTaBnW99tx6tk5TBzcBfg3xEMitEsCs5c2v48Kq2r6CCALsRZS2oEmCNAmdkbChPNKwqF1S",
  "key5": "314uqPB4oZFwvi7yJjLnPUjtYckxTuFUwQnbEKN8F2zPorWED3iVX18tPpL4TjTscQbh4GM6K8b8AMtStuGKPLgn",
  "key6": "2mHZnfSaGJ32fCvbwuWJHuXRW37FQEuc3gydvji9gPT52jPpmZzMVpA8sCoKHMwMEbUAfotBxpUWeUdjswWqL7Yy",
  "key7": "59BawoWRqg7Ch7czKcgQ1HUAe8UC86d5mno6285uWSuqHyroxfavG9azsncgv6UugMKZKeYX9oiF2qWJ2Dm6kEGK",
  "key8": "5DRbrkisrSwxEGv9fYwWWe9eN4J9LPED413v8tcnwZjZH15VbcgtYsBHpsXAZ8UaCPLUH3PGTH2ntEAWS3Ah1kvn",
  "key9": "RH2y3ZnwK4zk65kRyVCVNrjhHcJ585AaFJwjUSyTvfjdxNZRy3CC75uQPfwpvnaHV5tzs763FAAqQSnG54njqG3",
  "key10": "2eR5nAENp7MfsVjs9E3GxzMABPD8JiFsHXMBtQkmG2kCxm7Q1XFCYdjeBJX7uD27bqnhKarKFQrnwxqYnDhU7zVH",
  "key11": "5QdFoNiPfCMEyFLRjbgNRtQBfudwC8Exvmc1kx9Zj9NeZeYH7CLVNPH6bZZ9Rzm9UKM6RFfTnXf8oPnNZP6HhjrH",
  "key12": "3d7dPRJsFWNWabafyqVR23bjms9i2ZQVtLFAuyTBpTLkpup5xWucBkFYJ1ejcXoXHp8nAd754iXrpZRsR56fAS4P",
  "key13": "3rPFgXsk4U96Yh2MvnAtwEsknJ2u8uBJ7b7v1iF5jTFiUbsGCDvhC3BvwJQNDp4oavc4G4YvdszNswuKkTR2VVuk",
  "key14": "5wsuZajyC8Bzps7YK74TrN4Zd2CAFoxAufts367XZqnYqPkrByeyjvW7Jyuf9ifnipSehFfaRaN1KZXRD63yFTXv",
  "key15": "5KJCuCzRqQf5Vo4xHjmRmDT6gkjHNxSuPtypb2Bx2b52P1RzbRcjJiYRohM7sMdmL3Pj8hnzttWtaG8qp1e6FrWf",
  "key16": "4Y8Eaz3DD1YMsACL8yVSJErNCDN8ZUT1i3ygebiTipDEzfch111aUFfxqGC3odPjF9tZwerGN1eCdhWBTg9i99Wp",
  "key17": "4qY4EubqxTaNCfvQo7wgZPFULUYRPKi6vFnSDvBGWqt4k5F22hdZo2YXG9bdHz5rqS5jQCJFkQWUFqf72KRRyVCo",
  "key18": "hfPGMgAceTokedYumXKQiPZcrV2ZvciRWgKHx2LsTp5Gtic8urHE1LcEDL9TqxQtZMdmWxFGNw4bYuESahGdPYh",
  "key19": "2Y7FaP6hXg4ggkjHW3MryVKhYBBcwAZt7e7wCR9ooxdyBPGq4FC38zGmKTCk6t1y1gApMqVNmvnLdi6dRavsirX6",
  "key20": "Q1g1wg4Mphk7ji2YUBSz6gsViPvq8ruB6F8rgL6PZrSBaEvXdASVSf2ucFw1v63XS5UtcxANx4XZgqCU3WudBKz",
  "key21": "4bhrmmAabjeZ5jwu9Znd41jjVue3axNbcqjiBF17PNtSdQZHUhu1Kn7wwo2VReWDA7HciLpFJaG3pubekJHGYY59",
  "key22": "5WMsJPaRPeXz9QAnyeerV94HDiYSwsUgGfEeDNp6SioPQaDH3DMbKuGDHcJwqTZwhLekE7AUdJx35wd8hfESaBCB",
  "key23": "2QqQMb3eyv1fJR1Msdzyv4woBtBpPwWmLrBzpMfx8B7N9jeafKvpkBesU8sGDunNtKAJJaWwuWvSe8MbkyHH3SqF",
  "key24": "TVXQsZr1K6GCUubZ5us7UATkFQuuh1u2k3qvPLJygqWYPk2jd9dYj15g5FCHAZrJ1nCfpAPzSnm4A7aMtfnSTob",
  "key25": "21CzBRHqTPWkaVwauL7SFav4Lvc6tJDzZaRW7YRK3RkzkSTZ3vrFBBaPqQ3kmuzj2e4t2iKzVH7mS59wiUGmU8jT",
  "key26": "2LahLXwbCNqjD2uvnrdpANoUi39ayfMeyufB7YtqivTGR2asxd2EHWhK3zzaJ1mHPsy2Z6BSifee3uJNSfF7DP6w",
  "key27": "2qN4v7h2WUdqxhUoALUVzg68TDbtXycTjuYNc7rrRmxPDQUG7aSgUfDqrRHwvT4vG4Wn1KAzq9idYLaQdswKuhvV",
  "key28": "yrcdfW1sjEccZPSn79Dmi4GEUFa3q77KzvC6e89eynC3CaaK2X6uYQXQo9dHS1mT57FVJrnhX2ojTfvN2i5yXNy",
  "key29": "SMStQDqXXpwjmaT81ZBTEWrbQaNwrzXg4pWDUTBp4epjgxK9qQdq64YfkrWadpTBLzLt7uc92ZsBXRsmxgUbuYS"
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
