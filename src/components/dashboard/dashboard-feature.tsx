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
    "2tL9XNdZSU6rMMojPNBwmL8Eato4PBNv6snfXaE6VWRTML9HFKqSKiFUruCp6iryYDkiF6gjoKeaWUzcUc6LBEp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGegbN1fY1Xw5WKQhEhuZad2EMgm2SFcsRFt7udPcUKKwyw6NRrixSciNrYZ1mY9pX7rutDQgs1TNSXceTGyMBt",
  "key1": "U4z8FdDcKGQ8WTipYpyFUB4D7mz9wcDLzDL9N99ZBLyK8Uc3gnLBpSocus6MAtEbPB6oaNam2phfdD7yiaYTRsu",
  "key2": "4RvfF6b4fU72ctyLwXCQFJUMUNzYfSN1UnMv4ZR3Y2dZ9S3CEV3BugNEchqBz7AYHBtM1ERJtSvkcxkPTGwvwtSa",
  "key3": "uQaWjVeimUfASTVutsgqQgYckgGmFs5eyD48tEZ5M8XL6Zo5q5xuaQyuDT3S58raY1h3mdhf4ibcr93BRthpt8T",
  "key4": "2C5d4yp4SKBtsvNdV19tYuSZNaFnkS9BcMkdexTzRtc27DvMRLFgsCFb5DSJYPSvMDaD7oE2UkeZJoWQw56HCy55",
  "key5": "3DjpLRcfQHC3PAa3MCeum2GS8YfHYPJ7bQnfge1B4aWgtjzXawYcvpaPkVfYA81EvTjaUXVfSbNWLHFGAiPGRenm",
  "key6": "3wXExmZVohBwTk5ui3MdvH7BeZ5Ey6i69cjxFxxDw2m4dvxyEzMEbZWAZpziYBdZYCcgPWLFYJsPH9PzAJ9nXLfE",
  "key7": "3qWakFWM5nRrnimbQiZ8EZdaXRQdRsfNE6jANQDv7mLXV2tgk2G5t6TeUwxzesr5C7bhr5ZzFzmhJSLxGuZ11vwq",
  "key8": "3RR5W9HyA6GmFhVsiRQnFsSDap3JH4gcrDykJAZHPvkwKWeLnSwRFawzGGtmUkCr11Fd8avv83N11gT4dLm5CmMP",
  "key9": "3t8jgcafans39y8P3EkScQFqiAdLyophSjZ7H8syrX3V7diAXZXbGCaQLR8mm7Vbsn79CDhqHdvMYQCez7Yc4SHf",
  "key10": "3KsMScZKi3Lc7tZimiNznZd6Pw2WPhanNWtpSfc3UNCUDBe58rwiAxJfKMFKUekjS2yHDgATQXLAKKZ9z7ZLx2kx",
  "key11": "2sqwL6qunewU6mf4VfuDDBUvsFG4vz1aASSftHtYQBkKPerc4CzRh8HWUXwwk24wdnQFfMVHRhZk1XJJe8Vb6VkA",
  "key12": "2Ch5uUPsQQU1hhHd9Wa1bMLLYfxbgrK4GGUVEyS9R6gui7so2CS1Sg1c21BcGKcyKYB942sGLh3ynwGyXWN4nnjC",
  "key13": "47wTMzgC7eLzepVPkdugxgoAm27rFofhwzXCZktkM2TE7esEU93WfvbxDuW9JrdZZrz89vGyK5Msf8jcuJ1VoRyM",
  "key14": "4tHQqDoUKAeZHNstCBb3AEUKjJTUHZwRSRHv4qaiA11qEXf7zxUSZhjcsZeqBRjYsy9V7kHwANZ34mtLQfJVZ94K",
  "key15": "3BaJjueqMBvPzohn8XCwH7zvE4qNK64sHLC4Jud3HgNY2Dx2qg3sidM6o3ja3uDj82HRXBL7RwqAJ2HkUKuzgi6y",
  "key16": "2sPF7E7ivMNHvaGA1E7vugPzctv9vg9cmHnutz8mQWxgFnmsCCWwXyo6DrDstJEuygjA6Z4PMDXWqDpv5QyhU5nw",
  "key17": "htzQurAkCtUx8v9MNBQmbs1JUtng7dJfjgvcmNtz8KWXGUKYj7TeXC68dbqubnzE4PEdBeZdMAmKE8Xg8298te1",
  "key18": "5LG4mCHDXzZZ4JTj5aKPh3JvifQ616iW56XE5cN1qcVgrd276PJf1ju5Vvzwwtgv88kUwrDir48d9uG8tbZzb4VN",
  "key19": "337oQKdy74vBNWuPFtE7kpQ6bWhwrGJNLxrVSGPsebK4czMCmPz72kNGABfzApumGBf8WExAeFZ4gGZSJMtXC3eZ",
  "key20": "5TG8RzhwXohnjUZ3cVNbi2LkWaCNFiPzVN2tWX4TwiNQ7qcTUhbbdEPK1QnmEQG5j2y7zL26k67R2HeeJb2M69E8",
  "key21": "4pD2GRmoD8c17b4SGsmw2DoHEUeLCxihLSNdj14AqnD4eHiKhHRjEAM9GZrRBrsBoH7rxjPSzUy6kCBGQ6bV31NY",
  "key22": "4efVwdPS2JeziajJTp8YG1HLPR2CG5XJySP4ds3UEksFhZm6wNH5p5bsR7oDZ1x9qoxnF1gvZ1GGZkXocpZEtvS5",
  "key23": "2oYgZ7JMFJcSLTvz4nEatp3nPMKpx4zxVTatHaxLjFjHvZtZDESwtRKWBmcgde8aNry8NQsevUiHmGitbWsyTHEB",
  "key24": "2qV7zyfUCD4MUPzMrjHBhBQApJszsyAtmLKMX9zDLbV3yrmP4Kga3y9mbYV75jTT5iwdPuFEifZjuzC5dCe63dvu",
  "key25": "5ZYsXj2vSbceKFLptMX22NZnPbzB5XUgdnXQjifUzk6M55omymnejy86KkV25ueJ5nhYAgm1FkeAEU11Gk5BbV9q",
  "key26": "5569PkQKEtsEv2EWwvroB6jk923yZpJA3RH2opXCCLGFBe3tck9TkYRPhx8WEg2Sdq6gftcZPxuzPWS4jxzry7Wd",
  "key27": "3rExW9XbWYTh9ZkFw2PeNbTpgrdU6BprL7uh3U71VfGWmWHEmaZ9dj6MKozs6jdJYedpo1uqToSe5EnJZR3G1CmY",
  "key28": "2JxxXQGxkoc7ag5iVX41AKx3u2WmyUv9Lmc74kB2MqrXs2Nqrq1S2szuJZA8Vq5JyeUWTS2PFWciQdNiERyCazG9",
  "key29": "5zbY78sGgui4PNRuHGaqH5M6baH1XEG9gHD6zmLUFfmdvXWH6UJkjcjGEXaTEE7ReMnhVHzCfvQGDRZ1yUrh7g7h",
  "key30": "5TpWxGRmg7ScewcVoyY69ehuH4Cr31UZXuYexh9izGiYjsAfV1xT6x9N9znJzGbrgdP6Aq9uaESFnCDq4Nix3ojX",
  "key31": "zgNS4HjKVSxHmT27KtdXcUAnvXY1TghkvHyFd1rywhbd9e3AftHZJY5dkAJmL2BsxhfZA4z4F7fH7tEnunwzPEt",
  "key32": "4f4kVBkwh6f6kDUkEgCMn9Re6jPtCH2Ku5CPfffbFxtxtckbpdWPvXALKDNmybN9STkkyVYNAex1UMJiq5LrWCPY",
  "key33": "wMGfHmWMMHYcBJ8URHjhCB4VxUqaFyoDRDSBrcaiEFhdyHVMBTz5vjJdQizS9KRub6oLW851Z1HRLcLVufP5Qfz",
  "key34": "dq2AwaXWgvRL1KMigmvLcxwV6NfFizXufXvFnqAmipxC6coQziSSPkKmhDMfc4eKSErfkyxCbZBKx2vSqCw4y4H",
  "key35": "2KaCDjMSaNkkfrSKrCzWgz23LLUKVaBgqouC7J5bZdJDMcB4NvrRt5724i8uFRwcfkeSge7kkR4z32FT82CFCqa6",
  "key36": "evWrV2z4WchdiLYmeoqpofRfEtFS6rpcXWMxWVABF3m2nFU3kMdGfVUnv8GWiQK7Lii5AaxcghH4nV8C9XNj8N1",
  "key37": "2vPaRo2uUMoMdSvzmZgHW2YPZavvkXJsA6wPuQ9oSDVguiBW31hDzqAQDsa6usCGGQyY1gVdywhTWNckH5FTJ5Jc",
  "key38": "3DdWJu5jSsmhL6L879sn8joeA21hFEAiNqzMGE7PUDziFWN7GCDVKwBctk8mMWhtnavV7V85s47qE8UbyoVc58ZN",
  "key39": "4aLnSwXRdkH8dqhDUizT5NrTiFj44YPVE7QshxVtXD3vamFkGVYpGXoHBAt2vwW4sC6Tj15aFeW5FZRhLk1tJyaU"
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
