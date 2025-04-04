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
    "5B4oU3PVtoj6y5MhWvJrKBs8GhBM8445AHRpnkfApMuRhGCxFG2YDkyJ8ijAufiLvx18DdroMQXDJzTjyC6XYQm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jG4hKBLNxq9VyhQzU334xaT7RBWyCLZ2dcGRGLdNT1pUc6HchCWJxLBHNz14JVrq2n6gAak3bVR9cKraTzaGbYP",
  "key1": "5YCnU3ycVtFnnbi34ZHqgrDxikqzKXimPwJHsZqSbLPhNGmL5HtHeeqpnAwMJnpuKJMYdexUuAyrUd7rzpRevFYj",
  "key2": "cwmfARVAzWrDZHYXQBqmkVcNZNJ7g35pCSb8qiJ9YqTg5utC6R19pSHMTDqoKkdc9K9fyzggi6PBY3DvXth4fy4",
  "key3": "4pt2aMo2Zp81g2TDDkJxr5HPLBSqUaRTxSMRiVVsoraByzenRVE9hWLaFZpKghVRbVjs9S2B4sQV1L9D7pNRg6wT",
  "key4": "4qsF2y5cABzDDZ3U5dBsAwg9h6Bx2GC6KKTrham6fzs8BETMeqNAHPLXFppqrcCCV8gT3UWrfRiAqYF7RtTG7m5s",
  "key5": "w4MVQiBN4iJfy2PUVToN3FbTAKAJKtvegkwkon6kVWha1DXvTd8LuBzDqfgCpRdiz9ecihGuXRZxUkEXMzFAyzi",
  "key6": "4BovugmNRyNgQT6uRj9dQHmayvm5SnPuk86uA6FSfetXnm3fh9vhPDze5RyzMRjcrPf4LGpysYuRCV1HEjqvKe4f",
  "key7": "pZu4MakWLc3T8KNHXc64jqhK7gqYc8Qzcfjut7K392SjNUhdqvuZYTWzjF6Q6bQeSTt2jYqNsbYYtnYdwLerFcR",
  "key8": "4YvYamotbDAeuGN762qGHnGokemHCVXrcrQFCtcVc5naC3Z7Cj3rZxa6XfcmTUduwWMpJfJ3mivqxyWkiSnCseCU",
  "key9": "3DXPBnXzXqe7oDmqrU6QVCssXtDUhRZnKshD6tV4fETUdWQzPbscr7FrZPm2hwsnuLbwt8r547L8qmMoPEst3VFw",
  "key10": "395zTzFUduMcUHGy1bDHNekT78VVgyrdEcmhNPTWMgV4rXvm17HRLpxDNAX4LPtTTbMjCzVMFiDn2JYvHKk7rZXJ",
  "key11": "rHaPap9W4JSCYGxgGEzYQ8iXivEZ5FjRUE67vWtTt5NgzC2ADcMGmohZh36XcCCknmairYsZU3a1Y9Bp4w3cKJL",
  "key12": "533oiqF4oigxN3HVwQSSzTRHFi6T55Wa4172ZBiPVaoG6uvmhpYSKsE4tcoigmnYkmaRBJFQbLAaK6oSCjVLWD2f",
  "key13": "2rf3pbpPB13Cd54baEbneBQcDsNxDzjrfDpthSLoctYJKHZtyrJtqTf6n8hgZ3TGZgSRUob8CupMdewDdAqskXtm",
  "key14": "2vD2B4EbV2DNNqZ2CcsGsUWib4nRUetaiSPz9Axmm1kezHAfti9xvPe3HLWQ2rkrRpf488Ftq4jghD3kyzBjCs2q",
  "key15": "4QA8KLzJksbnmZM8d1ckekHkswM1YW7bzNvgummuywWnzoYSBHZerw7V1i8jEiurH6VydgUBdiQSr2Fvfs6FZ21z",
  "key16": "4pG461PjG46iEqGzER9Rb5TDwkHLizWWZyLz8CYVzkYGDegii3w5fgffNFncSyqPEeEz2zfNs6K1jerTffafqUEG",
  "key17": "KmJENzXpmzUT5EkSgPQ9FED3oBacPp7wgAnEmt1zungYy92UiMWqDd2FmHe9ArBMBacgDnVwQ9QibpdCyoC7r8t",
  "key18": "3QkA3dVSWoEudo5cgx68B8qAuU64UBSng4TTejMcrqFi7rvQaeDW6G5bZBTR2BCgNdC3MaGLwJzV8ofBdbjhVz51",
  "key19": "2pzUWgswtgByuq4HdU9UCZP2zG1eL1WBJn7beMDcGx4T61CPkPwi2pMASihwSm3fSepiJAsEceSWngcVyhCwteB8",
  "key20": "3cuif4FFa9oEZLXpYXS4v1LkTJ7tkxBuCX4ty9NSyM26FYhsQHCq5AKaLe9xqJW335NVABevBu6i5TjiaxhfmbAE",
  "key21": "5mfeJPYCHS5Sy3MzedkL4KkSV58XQZy6rqUspW6YBDasBhjzjyyh5vxS3LFm4wpt5WnkgFL412PBMQLBEUTTYnCd",
  "key22": "8T2owAKdVzr9WYFnjYJcYW5u1DsoBYHDf76K7oMHVxNV92piHYdgS1EED8LLF6pWwPu9zWh3spWa8dpLPm5mGh5",
  "key23": "2ziM1nbHVnAzW2ULpk3zTR6XTiupMiSb4guCtjd7FPzwWmyj8YtqKbXYShnwbksZMVGkJhQzsnit7vZg21MfkPEo",
  "key24": "3ufqr5RoD18GZ3bXWwTcHd8681CqFXgSTEcFdKYATfQmWbPn3KHuqU1pQ1fzUrwePZYFU8qy4Gt3FBhd4zXrfiV9",
  "key25": "E9RsazkANnJV93AXjMcAbpkJ3yKUarFbDEmKeyHPJGYbPnYM2k9UQU3g59smQ7ChkMKH4DrBS7A9B91bTGqezaJ",
  "key26": "61UW5rU4FKzNy38oxHCcsXy4vpJJdKmhcVrJr9daG63txkq2xa2cdAPAcSkrbFpAp6hQjksCMhdWceQRUzGdTGMb",
  "key27": "2eNbduYYDWk82iAKFnxuvfB8y2AdZ7C6vW4G1ott1kUqyaZF1a9xbprejLoi7tcksAuCQiT3QnAsABgVcDcMZVdB",
  "key28": "UN3n3kkZ8cqgnypna2bbssG6ak1KRkaXd6Wqtiby5MFoHBmyKKA1uPTMhz46J3iJeJyQdiBeN5bCoJDXXdAQvPx",
  "key29": "4eXf3THvt6e3ryZNyN6Tg6m27ZeadbSJJktSJtNHrj5aysBhCFvAEeEKUyb3qW6pjUCAYzF4H5NiS9P4ciBnktXh",
  "key30": "5D9PFDzyx1dyK37UMM1qzy6U1TfQhiahtgUM9XFu3o4zHwmyJUjCikZ5vw9nAei4B3PEULdW45B2Ft27rgGm4UCG",
  "key31": "UHeLF96Ak8Dy6Fxs4pxJ48Q6YLcvQJ3u9fKcP1kaUjvsV4nAqz9a5k81YeN2gjnJa2JKC1yR1tcA3PS69X8iP7d",
  "key32": "Gt6xvja9aq9wD3mVr6H48RknNxDN8vYDeg9v6ukHpLEYVr3zsXBMaH29jS2fcbwY451tzReSgWN5HWP6sqsET1A",
  "key33": "4gmXC51zQAGqo2jXgDwP4NAVWAEm941BGppNhvPBLAcCR9WNLBio837wdL7G7XH3RGzM6PAv9grLpppuTELJbusp",
  "key34": "3xqQY67dV8G4cJMVvYjsBuKXYLJiu7AFrCXdiYiu6NEz8PPZom6iPgRwMr3PstChVez7hvVoapuWDoj2EQaHh1hJ",
  "key35": "TQpZfkYD8dfBGBXSUdoqcx6xebUXEvXtRJW8pQD3us5hLprxwmkyKxw4VvLEBxhCeFxHihpBEhPWhwsqjmiED7M",
  "key36": "36WXHKfy6WBB1hrggABsYJtJAGviJTq6PDm261D3qKUTTEVfVcWkTuqQdsDmVuukixBWYuJrPN6n3p2LudhfiKuq",
  "key37": "67chwSV6aVmhq5Hr3e3G7nwZMyYHan8XRC1ScnY4BcSVBEQZEh7Atk9HGDqTZX4RDGqmY1gmJ1R3G1jsHeANU6fT",
  "key38": "4AGyE4EeDEvFeAgBgmFd2FQtcsLq1NMWFyujAsMVGA2aHV5HoqLHMN8gFj9YCnhDEBHE3QUzpWfP2RaGC262pxrh",
  "key39": "2Mt6Dx45Bh4aKJzbwALDKw21efMMSHEPmWAwJnsdbZcJiU1cMUjmkiz2jgN2Mt4dw3PgQirtsb21Ks8Fcsbs8Ezp"
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
