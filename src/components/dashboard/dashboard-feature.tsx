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
    "4F7ycSKVaTjwRDnRiaAZSApFmqEM2iif1j8UmLUEjpa8oRPW4JerYJQ6PKjk4xfLeKzCfyg6Qi6XyBzpv7LPqjDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTUbpzYSwDNVRAx4pRoE6uFHB4k9UkjTgRgjZVef7CHTLNjgGUziMcAniZa8k4JuwPKYenSu5VNNSPHaHTszNxk",
  "key1": "5G49PP914QPgSomqzhmetqHZVHWJGK9ZfqLx5CeyWD4chcqfv1UFkBi73643joJ36LjgSme9vkoRSoo4AfWd9ZjT",
  "key2": "2TLDgFGUiStA1w5ud8egukgMRxTEWXZmENApHwzFV2CPnbDNVmfh6tdLPKyxdrsXc3R2JovCenC91qcGkyQwCzsG",
  "key3": "4qJgc9jxmuBa2v4G585hPmFE93QcaMocMjvoUMtjhvtZWyE5q6RJ31jmdbW9zcsNavTdaE4wB2zQA6XHGayNSWdg",
  "key4": "4ffLMG4ZsNX51oC2ZcmNsAJKSBczGZRLeNbsFa7nP4ppfuNN4C4xfZ8YdLPUNHik1Rw8Sw99BuFeE8ffN5mcy37A",
  "key5": "4Jx1n3mUumjr5FH6jUW1TibuCZcngunWZsorHVJZAtysn1RYYhQKdeN4nidTSyRas8ttPTCbLUaRtvZ9oVxbLFYH",
  "key6": "4YzcCQvi9bV7kojHgNT845kNmXqAMYm12VR35etzRrYFW2PdvcEBTjq1pQcRm1bFDqafGxQZnY1gGdq3U5MjFkCM",
  "key7": "21ZHi8JYh2iMavrwox71VxCkM9iUBXz2jpUc5xiaxTWS6fZHcMW3XkohYJpWmytnBSo9hm2vFEHNTihyCqneM6ZN",
  "key8": "282BCHvh38nLTpjDHvfPjP7Y2Pmb7ufixJeeZNinszSrdgFGXDH7MNJyc1KJUKXDDdKWyksrhGdto1g2w8LsA3H8",
  "key9": "3pDBcD2DZghv6ixuSx4TFdEbhNTRhD5aziYozvnj2pRgUHW7SPAiv5rtB6CJnGSk9QuLJVGxcmp7DVrVUX5Mq5nD",
  "key10": "2zmJzUhRwEJwDMqsgsf7iNggrQrwK2biLrcDySGdNU7YdyuAD7k6EJyjob2czZsupkswAHerUazr1Pc4wYENWSGm",
  "key11": "58cpsycFUbYByXhjVFF3x6WAgaqtJKW56p9eokdF5YY7uYKYyiVVggcb8fYMnjFAxiWa3QycRnRuCDCVJGYZGchW",
  "key12": "wXEp1wuHTyFV6vgAr9HY1H6PhTifq8vNATMtPXTZzvMUeNAamrX1eB23R9n2HzAbeqeohXJ89vBZMS1k79jKTAP",
  "key13": "5SHNSPejDA4dnXbKmaUWPZZZimrfVVfEm6kNDiLLMhZj1Xo76xQFJ6w3WfejmgPX7p8Fo1GtadW7sUcV4gmDeSx6",
  "key14": "5XwkvsDbQBGMmafmMxj8PYHJazJGAEL1TxmPuAoLyUHibUrC8mDPYzYuSWnXgZycVtkMoSRRAaP9iUFzXaoSarJd",
  "key15": "HqScPnfiiXu9uccRiKyb3SEckar2jd3TjUtpoiAidDvkYb2t8HcRapEPa5UUx77GN2BLNzKr1UyYmGcRCJ1XXda",
  "key16": "5dxtdyP4YXAuEn59CbqcT4TBGJLtTV63euenRF5J92ySKaaXZq9k3f1BgLQE8XaoQsQHmEgq89HmS45hAZcmbqEH",
  "key17": "5PuKsBot8KMx5MqyqNkSH4A5WRYhNUSgWvgqnprH6RciEKmxbBRvcGkjiwfHMXeswyShE8x2pJ2SEUfbp3Qzwgua",
  "key18": "5qvFgj7RrMpRkokQUik98UmWBCAPVFd8MvLQZ4mMWRBPJASEYTiVbTBuJEjUSp36WwLHKsJStkYa1Zi9tm7JNVqx",
  "key19": "5Hk31eGEi5U4S3tAymhftCfDxVpYuuULBUSrx2UCxTZm44HYbcmvxs1GQgWwxu5djMqNNdLCMtZJsEvVis2i1Lqv",
  "key20": "4MwJvmfgs8CggMNugW4hncYt8jHUnztLNd1Wc2mtDoS4T4NPMQeiT8N8FbLcR6sjfdm13MpmZ8eeW8kkPYsKW19p",
  "key21": "4HUWUuuMaL8KjtU9Ji9FBzsp2Jc4AH9xWQ6H8CvkvwzgQBmNjZquRpvcpeiUHwfyQvp2AhZULMtkrL4zzGsaWBuP",
  "key22": "5iNkpQxn142JVxSmLc54mJoNvqjS9zABeKEwPqNUajnbXFtpEBBztuCyLGAqtFFxe9x5Ry7uWH7KQfY18Ftv6hHq",
  "key23": "3KYYgDckG4Aih8v4NDucZ4vjUupuoKLAfSrEG1oc1BsE7YaARUodLqhS1KCxBjyHKkjh72gT9X5SnoGC8Z84KePC",
  "key24": "52k9Mx31BsBY1AXL7AhmwoWNpEm5xSH59PiZF1LQvtrjwq6zR7RzQ5zsGkaVzVJ68UMuwELsst3r4m21G4goSCYd",
  "key25": "3YAxjt13ois3s4hgsGFsV1foJSwudHnSf9Hnkzxrxy7epyPEEEXZrviD41DCsWbBVzH8C3Kx4AoTrMbhdQnU2eua",
  "key26": "5R4XGHjHLtGcXs9Gf5qBKwNiZS6SbbeCrSo1aCvpscTJArkqHjajeG78fLM1pp2M1HZXVui6skAEpiD5VsBSoZoV",
  "key27": "4X4BJjHsFAKQ16QykUPKffYzR7jbuSnkkDDqNPh4Z9KDoGLwAHRy3eC5EXAJGyCJRQe556XCxAFQNCs145VGF3qk",
  "key28": "3C8YdZ5xvHNXrprFHppy8E1GwuMnuDPBoA2q5daAswoFNaN7qyHbuDNonAKu9QuXo2nb8ZpnkZUNureRiC9sCK1Q",
  "key29": "2S88AqKXuxzyL5cHoBEVYpR7SdffsCVNzSUqhKXNvn1CECh5k14QrijhktgBCgqQkYHstFZLPrxBQCpcjnkbdxhJ",
  "key30": "3hfBE8kEucUCtSX4APTzS9BMV9H1rNamf51ngVgv7A59a4KSNAKLRxqjEnuLNmFQwnPTqoEKnZk7vEeQQjmagaZn",
  "key31": "3Ji6wKd6Hj8hpCUKkuJBGUxjG999CFu7EMsgmx1uiJAC3MFcqmj8uH3weEjMoFakUpb55azKxUSaR1kgsoe69HxK",
  "key32": "5NUWyUr1mu4g2jja9PhEpjHqcMgFDwbKKvWiJDJKqZoJfuRQec7s17XTZvzp4FXXZzycPWxWbJ3JSNgwrXx9hrfb",
  "key33": "3NJpKxVBTy9diWJEJ3dN68KEsexA7TAFNnqSQFsrSEBF8cPbgGKDYq77qbGz35EnkB2rpJKXCbzimzRvSnBQR3Bz",
  "key34": "3tccCQBs7JyKL63D1BSLahMzuu1ENkcpqm5z2hQ94TCHkTK3dDQ9k8j6XARgby8PfFAZjkc8pEebAXK1G9ztkmXy",
  "key35": "p932pHbzwTjvZkxwZVnzBVw67ChXb4t5nsr8YgiC3SuZNp3dkLfyEj1PCce4CRvYLY4oeFTFj7Md3fwmhUFvNWH",
  "key36": "63kJy2hsh3Fo14pZddCb1W283u5rYWA7esU339JaqNb8fCrNTWjrvRqtB26bFRQKpbZ5Pq5bv2dRa5q4rhGy6whK",
  "key37": "341yDmvCQYjaT1ha5xr8wpujbjhrpasPva6Qk3fy1BKhsWvyeRGytVyQkhLpx5YHkBr9BMHB7jekPYXSkxPydGQ7"
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
