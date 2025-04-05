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
    "2FEHtHwxw3tFq92U9ZxNpFjwVJfe8C3aByZdChrh2ncpA2YsaMZ81XPrQzp1m5RBU6diHsHCPMpDKBWWmUwHbybQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nrfnNcbRnbWRPytTocmYiiTwVY4iUv9SXKFprvS7Z2gorbCm7VXvU7zjQU1qmc2rdiEjM49PCStvrMPzxVnVRFz",
  "key1": "3p29bid4s3Mh74FN8pUk5Lv6vkkY8ATbytrxtARGMgMnL7UZTYhdy5iBmAraRR5P4DrKSW4R1eCbWpfb2e3AsfDY",
  "key2": "2KTYHH2zefWVwf3UeHd7faMWGfvFNZLbB3KoAxwK2n6Nzc4q6D9sHC3DdKvJySJvHrgu5oxoskk3aoRVXbm7w4t4",
  "key3": "5X3uPmSRsmcgxWPitwEFvoonnkuae1FQrvgaYAyUhRXwwQdx3sWdhnxTFMLivSZgz898e5KCUutaJZnfw1xXvwmZ",
  "key4": "mDnYhQxMppgnDXTBDgcUXbEn3oyNDxataa8J24rQMMXcrikhgUueX9dxR3RPb3dynLReicnUPCcSqjJP78Fo5U3",
  "key5": "2KaXxMg22op5JCo3U9C5Z8Q5goo75xr8tDQK7yXZHqMLC7wLCV9QFNRh76DTG5BGc9F3VEbg7KaGrRbd51h8Y4rc",
  "key6": "KrbGA3DtmBRwQ2vL2SjZGRyGsRzd4izH9Xtu3RiDst9h5WodP7k7xUX7GUfd99Uz6JJNAz4w1LFJELz9joQ2TvS",
  "key7": "2w8thU4dU2QXgk3T3TNDJhTAxXN2ALcuEvRYf2ESwy5UB9RRKVCPVxcgBZFumhbso7UjSkXroxRK8HLGTnDTLm3k",
  "key8": "5ye9ihqM9HmZ3w4QocNu1CUi3zEiYCDrv317Kvk53mfK3rC8YdHYi4XhkSCffdBMp5rC8dsJnKpYY2bSkz9M4hmb",
  "key9": "62pCrc5xTBMeMMnaShHMrgN5kYZS4Mbh4iCq3oAHLyqyoxAfrNtA6iLTpNudwRgNQBs5Sji4Vu3i2syyfudugmPk",
  "key10": "3dszbFpn8DUKSxoLcu71suX7JcnH6A8Znh9Kg4sT9XExnWkREp5vnApCVFrq2jRqou4v9GkEwJCV93bZ7Rm2m5uK",
  "key11": "3qChuXAtDYMxs66o9CecZmFRUm6Ma2Luw9dMrH7eCGBguUCRAxd5o9RCaxe5w2SP68Q1qaQycYR2P1bcWvQgyW8W",
  "key12": "5o1Yk4ybvb5Vtk4oCZRZ5SGbcBeCXKdKXNBVVkw98zsPrkqGV4dpSMq1xgW8jxsLoy1o4fHCKvYkG7tt1LCuRWDK",
  "key13": "54BQrjEDTNaWmuvC3EG67dsfCj6kVME2pBbh2HgjM2W7Jzp3yNGJGzgjnEms6ogkxm56D4AAvRvNBKuDzV4GHWYa",
  "key14": "3DMEZHimsyC1W8vtLe5oFnbhWmV88bTjc2nuAJKwT7XH3E4dKziQWAwvfpPjg8V2SQWFriaiaHGdgP1wR1SsLGdV",
  "key15": "4cKVF5u4z14bUse9VdobPCUS8yVnhDcv2tTewTHnoGEqE6iFpQgcayXxm3Uch2pGFCHVd5cB58wxq5cfBzbw4Dad",
  "key16": "wWU1w4hxRUW6NZazJjDaSDDS4A5CGyrGsTokn7CwwoJRBUE2EeiD5tDBPH8adNtFbZJABGCSAJMKg9cN7vGDA4F",
  "key17": "3B38CTdB9pU8v4NLzpK8TAKA9fSsUcdgm2suHk1TzMn1GuaY6ypBUYpGQbwuqM3Ggq9nBygTkcjsRyZMkxYvGGWY",
  "key18": "22D6qBDXG72xkD7ZWQtjoStwMDdygMWxYeejHpaZVQdrsohBnBbRUqyUNHoQU6SfpCe46g6eLqJaNBvbdt4UJFcz",
  "key19": "619UUF3ywqct5MngYz6j4qztAtVrLEEqPLpabdqH6EopxkuSPzeW61cJPEVpXbvTSM6Kj4Sijt8vXQzMvVgVgStp",
  "key20": "4rMMSRrx1odp1eiLAeWWW1XMmVJijdruyZxo83W3WkuSQ1k3vjr3FVpBCdb8kpjCACKW3KPjkzTgvqMgJTZ6qLwv",
  "key21": "3sBNkSPHt9MmuEVR394FuobHwb96SU7AEj8eBDur1tjiVqfK6wukC724W8YaE5nSP8bpeaUgoDA2Py2PX9GoSs1C",
  "key22": "VGVbfKUAP1zDGkiMyLkAKdmnKGEcKKA8iCxYt7HwvDe2pvzu6pL9sjFCPBDtZj2BHFSPJoDoXiQVo3Q6RwrpGRy",
  "key23": "36oZJoQDPqhnVNXRRCynCYsfDP6qicAd87hpJrVScuZvgDwrpbtAnCMLQLbvKPNf79JkE4EmfHqkEDrkLoyLbnvy",
  "key24": "5vuEtNyuuAd5vMzdrTXC6Tr1yQuennbwznCHRv7nnbRwq3bvu8d53ccSSEjuvrwSrR5TkxZa3txhfZsfqPTX6Lrg",
  "key25": "3sJyChzzzMt2Vv9jnT4dmHwxL9qVvxEByEDPuGSZMJuMqXbm7Py45XH7Qq9GCDr1vpJ2Gm9kSnLdJeTxQfVfiWMB",
  "key26": "3yv5Lv1NmWcEgbv3QmGEpvTN6bTYKWW3t2gwfuLMDUDADA5zsF7Zde4pFD2aEH9hpmf96zbFEMMZ9rBSZdXuHzoa",
  "key27": "ghbeDP3fk9DMNiiPBuSDnwoMFnXC9yyYRvP7dpV7a42Xmwb5Kc62gmDLDo7fjwRRibGT3NSx4LR13xBBSTwsjoJ",
  "key28": "3TvE6eSoSzokUHQPvSHto2VoFAungNyKH4iFKnRqWv5CkQ28KCPHE8Mtb2e3FcaXZMpdikAVTufmpdKS81gRBMem",
  "key29": "3xZW8p9thphtUqN75mft4RvZFozQ9UbRX77mLAvmwHsTKAJKVzX9u4hT1ACZjBVseJZaf9Kb3zQnGjzBoXEdYGoN",
  "key30": "3grhRwdYkuU49jX5BBYiWP9WM1vnAgk7qjPTnNQjo1FW4iHS1Rv8BWJFKnwcfNTktjQE8onB4pFZSwLk2p1YCYgR",
  "key31": "PP9XhML9J8DTWyx7f6Vf2soxk14Lm5TCLvNSSRcvYQNgLswZUpFXnVC6jLGEsfYhr29ex39A2nHH1shkxFmu4KN",
  "key32": "3GpW15iQBqgcqEXWQ5ggKa6Rb3Dfp8v1qGjG8RnFgrkLxqfDNqMB9n82tYc3MHrkzbugPLicgkHhPqGLB4nySvCb",
  "key33": "4EMi7S2Ywda3LwaM4PXrcokLHhA7FHjuuirx7cnEMS4b4vvVxnEogPVvwWuRPbJVrVwtYtKakqo24cAwstyAnpto",
  "key34": "2a9Yv6EF5paC7G5fxzXhnahfm3UDQDNcWKk3VfkGHMvGZeGJrDuSPxqfngFqA4svwNvCox1PSUyBZ9NZ6oPCLS8p"
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
