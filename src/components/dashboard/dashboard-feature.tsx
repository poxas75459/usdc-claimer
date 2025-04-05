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
    "kZtJWA5kRhEtzV9zwv65ndHBFQGQS4x3sM5m2ta9vsuWniE2RqaLJFakrWU4R2Dhc9n8bJVxTDczTza9XAPPD2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "76djtsh5jsrzUQ2e6Wpat6zTFkVM2qjcRHfzPHRTH3Jo2hvjByoFJ5Nvbh3ya5aF47GfaGWGEc9BQ3J6WBiteno",
  "key1": "5Zc6LN8zCSJjok9rZgRQ5m5aeySVx1SKrycnxSrMGggBoJge2vhNVwyYaZmc3juhQPXf39M1CjE98uoYW2Xg3gaC",
  "key2": "5ekWCmipf2jmHgtNa1DHjSHRg2ujQJacLMNFpKCLuNmTz161NSScJLXeQNJ5VgVYnQCCVAhKPpm4AFP1anzsGHjn",
  "key3": "653AmcacMfot2wsoMUcggTMkPtaRjKdJT4mKMj1ZmKYSoDqD2xTZjCTzocm8iThqr9REYFQQsHnzNUkvMTypXw4L",
  "key4": "8cptSeqMz7UJC2dMSyz4BgBeGcApJseaMSLbs3BHe7uveek2nJEYpMUXXGfe64oiejsoaqBaaraNAwYZryuv64v",
  "key5": "2GHJzkJKQKKSLEsikSPoChPpQcEn6N6BhedKhPqcpDQm51Mza9w3FHePfG5d5G8QvkBGuDA1EHui4ddPYCw7UYAr",
  "key6": "36bDLwuKTNGra4pbxfnn5qF5G2ZnU2PgV4Wm8jXgrgVMt5PTcmewsqrG4oXYnaRc3HfRVm25MMPn1obpzr3batqz",
  "key7": "jKMQdRLWMgq4hp4rvPQa3bsn1XEyQdJK26ZjRHYuUgz6kqAuQHDa5ucfZEi3QfDaQA6rJxe21diZZP2AkTxr35f",
  "key8": "228Z23s5tffBou3xaT4rnRqJJYQHNgTLPs99U6Vd5hFzWFEqaJBB2q9fRcK7mZ9zom1GYnNiMVJPMRPP17NEv3EV",
  "key9": "3x741CQ9pXxgn1A3rmpR4YzstTQxfGv19oAkwg7Xig3fRQ2k74SJ5MLiGADPwbdYuYcjd8g6fnhZa5i49UYB5JbY",
  "key10": "2n6ffpvGiYT1XCX2aZRsABduoXNykmdwjid1e9P2pwJAq9DkkUnUL132qTRp8vVcZCqYZizic8nk5HFa7WomjMFZ",
  "key11": "ZpwuJczX2MZfTg4isz32DtA15BMTdAwAy8xAzQUcu4Ybo3izZJ5Kqj1VHkRtgwEhmNt2hSyaGDkiw3zvtWhdMZ2",
  "key12": "r6GbNSTHS5xdCS2H6BxT3fDcXVwX52jRh5DvAfi4bCPJiXwfPsD9zaXJCW25HegNZ7qCiPTxjE3krvGRrpHeBx8",
  "key13": "35LQtPq6ZMf4vEGo9hZ53RfXG3Jj2ZYrnRThxqQY7fGSFVzfZeAg15jtQk2Aes7B2y7HtpyxXnUJtkRRWYq26HeX",
  "key14": "64sDTQ7q1eBDYQRSJLAL9LVXFqM7RpfiFqCNBAhiT5j1ihrkXRMb3hGUaRyukPqESfoS1EojtjLqXAt3PS3VuP6U",
  "key15": "CPPw1H6xNt8TkuBzsoaaTTQNcvTEgCfgZbDJ1LvThiX14AVvRyvpawyzXeZmCcwLnMmkoqmxJExWFwvqdgUvzUV",
  "key16": "5JtxWgLR5Sq7mpTPTGA6NV9gYwwu5ssFsPiRLbmCwMpbqsjs4HXYWo1ntkPoE83i3GsDjT2kJpR9gVe5KUN2uBZL",
  "key17": "2KUZAcAPKkKB9X3AaaTUtKyXkuQQKQindVLQdLVoYAMg2QHFvDCwxL4opcsJv8ZSzN7GxnsVMX6L5A1RYkLTFQ6u",
  "key18": "44xC3VyG3GXvD8DLN8mBinJsxWurSXRB9q2JYEHAALqi2uqyTDRTY6sS7jASwLNCFU1GB5e1LZ9F9eN3aAoTbsAB",
  "key19": "2fMYs7JZmdpxWqtXFbmpYHHysXCX3T6xGEAx8r6gkevXdJkYFiP6XjPyp7JdoyZZk3XPQbioJ8zN2RRdZc62t1xz",
  "key20": "4dYK4oGRTyVtmExkcFLseDpKP9Ra6ppRx9zdHBsCTTNETfDzvAovYD5MewxMxYkghnFvYEs6pL6tZvYQc3MYyiHD",
  "key21": "38PFyo8UQGoHWHtAY7PSMbuXysddZ6PsboU8vWHLGsdry4MK6h1fpsXAu3iocb6BjEhSKsApngKFVzdbbAWdJsQU",
  "key22": "tL746gJnihwfZ2khk4BQpnX4S8qmVJMXdT7r3UWM4c2BRX1FDSD3MrWBbcSRKigyaNPAvf4P8W4dQ6Kay45PdDb",
  "key23": "548CXEHUuTjG8NeVq596P5Mqg3eiRUhDNMm9fR3KSfj1zsHjrSFcQH2TTWFw1jLZ9dBaSpwQPD2QmFJ9McTg7F4y",
  "key24": "4CZNUkfCxoSojUXyvhA8nC1vXHMf1XS7Np6c3PupXSnoGiYVcZ7oKbnQpHKAnZh16pkJByCPdUw5ZF5omMZ1Ptbk",
  "key25": "2a6mHHQzhZepP52sh9LmRy1D7mgxT2wucwkeZY6fvfhgmdUVvR7zBb7VqdLEv3aadddCb4R5t8JWSUxrKJdY3oMB",
  "key26": "2vs2smZQrwe6Z29JrnJS1V9Mzg1UJtfR9Lud37u3eA1NFxyjPQfnRuDhcfXizpnh7TEFWQ7xGZdHFxWj46sZosjX",
  "key27": "5t7Wa5sSQvnnBiDsRrKsX4yw4kexuqmPp17L8CxsDVQfTU8NbbkJhNrkcxfERiFoJYEJ6TK5dX4xjSobw4uFhfex",
  "key28": "3BAXZxcvmHJgYxwV34xEoyaDCs5W6N7Vq6SLrdc8KRGBUhWEzwUzkm8zDysz73DiUHZxLg7btBoPptcoM6hgMWJ7",
  "key29": "3vXkqfRWkJLZ8DfxkLQbkrn72n3mDHHBh7UMgADNwx2JLxrP78HcUqwUXuow4isWXwvhVwjiS6iz4KvPr3rD5Dyn",
  "key30": "4ksK5CARrk3WAWaCtgTTskZkk3WM6TQzx7asBf4t9fUxS3X7fd9QhGpy4v9vexBvrDJU2to2czReJnt7Cf7H1voo",
  "key31": "2P7D6FechSnmysZuju5CLv2z3dGDKfn2kDcEUpjQwo7KdC5EACNSVkX6Uyu64hNk9QhkcjmCFtJwE2jtpa5ydc4A",
  "key32": "TtM5Xjr36PdzcLmU3FALpWx9fvYt3u8erfwhvZcfq2jDubsz7EArMVHcakAwSjRmNjvjjaiJpXAA7SoHBU4n8wo",
  "key33": "59nfikfgBoV2Z4wNDaXtYyBW6waWaTVJ2aUCWaQw2zp58xHjdMR7TcESd2AMDoLXAfZ5iE5qCiMx4bhd1Nzx9FQV",
  "key34": "NBfx8JsospXYNUKh7UmNykCJ6fyN6k4uDewqa1HZDRWFujWNCxHVwAKDeS5NwzRCDVcX5qGka5LhpH4dUUBvL1L",
  "key35": "2WUdReoBmFdYvSrdpo36JsNfgWYAhsx5EY48HHd2Fa5Q6UfjmCDAU55ippiHLbvYiMBq9CYr49MkemTX4bj5fhAX",
  "key36": "44uDAgJrpqY9vKPYqRSnrXbYM8hvWqWEq6fouFHg1PFVAQ2iQCWX6Y9PYzTgc3D3QL16jyi4FnB8zFgS2jYADQDP",
  "key37": "XcZFxzzfoUm15av6CiabeQ1NBnZTeYChw5uuS7QUMaSfAymKaxhsDfZ556nDpNL8umNZz14Sf79jCMkQn6HzBxX",
  "key38": "4ym1c8r4Rqx2eQ7M6MCbXp9ZiYSjK5NA17eM9ttTErq81tNw3xjMRCVjSY4xXJ7qrjNH1J3THRMjWdwixXgh3MUP",
  "key39": "4R1Ms7dsax8S4p2VMnRjz147upp7bRMbGDb1x49JogF3ixpTYPGckR5YmBYNzPtXrhCrM2keeyQtS9YGfVEkJimM",
  "key40": "onomRhx9uSHezWqPSevtyoRTHqykaBuboHLrZ2fvYB1zbpK8ozTvSPvq4cC4ey6a8ZCgUGNjCWi247pkKwWfofj",
  "key41": "FngoSPodouKyFYXEDMMZq7wa7ykQsq7SuzuTkwtmgmy7UwG3izrGESmi9DqwdDyfKjAMVFEW2f3SPkUheT2VCST",
  "key42": "2XZESBL4zszDNrXo9yDfGANvsWPwHUXKXCfUkbPpmN26xMCXSMt7gfAFSFL6HjwyAeKKZb8iteiVXcfwwpAATUuG",
  "key43": "4Q3Bc5EJU6UXLcoXJn5e3JQYaT8hNC3TnzW7Cjiq9Da6j3NKtjJKHinJqMFVChzxJoxF4VdQzGk72KBBixneVHBB",
  "key44": "5VaXY9QAcnPaUMPCQfR186EYPEGBfdpNZmR1a37bPvC7r28MMnnQeRdBhn4HjcR3ALZgHcCPAoPy47D5vhfCYvts",
  "key45": "4TcbYcJYQKg3bBVeuoQPGq9jdcJrAPVSgqg4Vt6DXYBuEhpFhuib24Y5BdmB6cgLvMXTf5RWWxuQCmkwjVP9wuvp",
  "key46": "4Ka58SBNQVLpTmjf18UN9pHMyZVgraxsF6zynJaex1LFuDiwfByCPGxLJv3HyYqBmTKJeN96yU7qHJGTRCDHBTUE",
  "key47": "2qbUdd7tNnS9Dgdh1UVLo9xpACZh8Gc8r1TEMvbEeuZG3aDTbCg7zKXGsd31s7YRZavgnYnmjGG82aP7gHp4Uufb"
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
