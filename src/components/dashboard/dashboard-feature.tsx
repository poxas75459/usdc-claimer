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
    "3u9B7jR8PW2itUtmmctWhPZTfgUCM2GfugnGXrusF7V2mDfWBNyz53aG5P1UwMy3deypbpzLMQt7Ja1hbwPJBzdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCHTDsYmSupY74EsyxiVNqP6NXccK3AhVXMFEhbmigVNXvYJTqMEfvakc2FRaLoUckAH3g3wGsHAxoc57RBsPVW",
  "key1": "22GE5tnZYTTT7AmfQ8ToFxdZHetXq7aVjAeQ14MVMaDUMBKqBqSztJU3JqngcWhH9pVmJ11XLsyFU8BPeTzEVH31",
  "key2": "34yyhzNw6qKHoi4EoZsgoXqHvd46f5MEPRK665LxLz49zpphZsdxqdMuJJQ7PbL4HceT25Wxt3coRKQ1ihtWiqRG",
  "key3": "y6fvVrJzRZGooAiSbZCu5HMDLyf2nC1m6q9p1xVeuc62914PKewyjdgJtLo8jQbFb5BBWXx3zEbZsVUa9x1qFp9",
  "key4": "3Rrg7SKuXzYLT13Ko9PzCoz4EfsS7r5E4Agi1ULNXJ6RKmrhSKmyN9N5HRj1Jzb9nivAkLcKNRVTWG2fi5cq5AP5",
  "key5": "DRh3Fo7u95MStpUpze8eZLks23W4spSefLSSimxmgfbuPmjKf3BTqxE6diKz1Kbr2VYXkAyaJGCAVPWk9WHiMLh",
  "key6": "4dvnmKhKqLUNtLiGmsdF2rndFmFqNTbUZF1CHxTrHQY8SwQ1uxK3MginMB8Lz4iV11f8DK5a3KmMNJzGPRGrf2gj",
  "key7": "HKsA2SD7kHzk58cHtxRmCYjS2LSdxrTKTg2jeEGCAoyV58J7QpS2jPajH2DvNqBtVidweKszkMkSQsqrkGyvTy6",
  "key8": "3XeNxuX7r95QKtrSztYAXcBeXhSC2iUjwWD6BTLPim8F9RGvneoTkgj1DJxrdp1mPqiYAXLpTRFSDcjxHJQxmJU3",
  "key9": "4SLTFyeDydbf9JKvRpYeUPWrSHbtLWuURYF3d65FyxW2DfjmK7MbWzsS49tX4B6XNmcrL2k9XqtXrZemYx3B4xa1",
  "key10": "bbGEr1xJGTDfc2nt7am9VrTqWwMk2k2FySjU77xoxCNqXCSGdaAzzrTbSYTxssc1H9iB26uFTSTgYxKLRyxryL3",
  "key11": "4jGdgDjAbM713Ht5h8v6Dn3XWhaSQHXXs3dUbBLHYxQZu4Ucf4BupkPC8mBaHesngjYiSHNNra6YUiYxRxXRMnka",
  "key12": "2HV3M7Pb5pKDAWuPXjEm45Qvozn5PnZQ5dHGwZJG2iL6MHt9qKsaFAdZoVM2gQzwAuZNa8PrGhpE3VYK8P9UFy1o",
  "key13": "4UNKm2yK1L9YMZTSXP9bUshPSivkGAQnVEk7uxXYWLjQUR5SV1JcPPiPcRwxeSwYpbZKYXGfq34qUCmLYZcBoeU3",
  "key14": "3RipvFmCczefmyhqxizMemt9SqYB643tzDb5xaCTkBLRqqnuDAJbRtSXFQfwtcJT5p17GRwbKzbCTKBnj3QZguDM",
  "key15": "SfgMizSu1pLtGFUzZgJL7jy5WXdjJJ5VJyHhUcKAPPXjULbZvi1sAahUacGrz7ZABGGiJ5vEB99Xr8MDKubsdQ3",
  "key16": "vJqpe3Ycr72CCE1vstVuFKuucxsPXp3bDroYAWuu5HujN3isfL9GL47MhJ44YXnmey36QUGGPFgbqZRoscW3wvi",
  "key17": "2V1HrJfx7wsaD9oFwhLaqzaWssbqEHJzGHZAdyy4qkbCNNGjNNL2x7ZGewJ8M31UPpGVWwLmLXqposuuoSLEbg22",
  "key18": "C8AeBLgi8ghBUYCChZRSHRwqbyaevfUJJeZpJAjwnfibN62hYcCcXkxfK9badBbTDBTRn2EQL6t26Rhpmeut7PL",
  "key19": "2AR6uJjFdEHRUsu8Z7Lw5XDQa7QhYroy3qNyY3UVcM8pefrijMAfhrPPLiUtcx7njTVjLuXcVtLYhwfheyNKHKJB",
  "key20": "54Rf1XqGZGAhqqZHudJf8m5K3scYn6P1fjk6r3JGyLmkazJFh4pkFMPMpkxHLw6qe51BJwh7Ma9BcWkDeo5rgY5X",
  "key21": "A3gJtxKF4HU51udpZJsBghRGQYwnbUnKP4jCiMo3FQpyjBtGKAuX5RX6UuLjjbXKwiBqwbotNCaUrXWSnehiJRC",
  "key22": "26xXdzMHyd8qjezXJvAnswypJFqoRcQpJHRsUbPWFQ1xV9DSS3ipb8BAF37kHfZQR7HaQEr1ZyoL2YpeyvhPWWig",
  "key23": "iHvCGca9BT2FhiFtKgwazusCargZwnFQf3FxZvjb9CmeKDiTUyJSidUZ9drwGq6REo5j9JhujjjTdVqYvFSBzdo",
  "key24": "iSpQAnMzh1FvMit6FEScrHu65iSASks3eWiJEXhKTqnjCtrLDBLAeNvtfkvpJDyxqrVyv99sMucMLdosfnu7Maj",
  "key25": "4ViR4GitCJi8jKbUcbBwGDVDF7hWZSKsbepimb5ZZ3AD6Nmtxrhme2gFwaRJGBr1PJXg4LwWwyMuFE1pgW15a9B1",
  "key26": "33V7j6wr63VCZiQ8aiCrfJNDWmDHBP2b6urr2j4m1ATQLzv7RtJ61ppUaJW9gT7H93634PuqtFnDCAUyeC3Wpcfs",
  "key27": "3GxsVWSeBzfrFqHKzJWUS2nzbuoZaWt88iRErT2KXdTPwJDqY2xowCUKkYfS338yWCCKXwm4PcUQ2ehTBZyXrtX8",
  "key28": "4PBA7E2EpNcgzNpdxd7ehYqY8qFpqd6tYKLrLzMGRJYKVdo5BK69sLrz7b2Z87EdjMRRv2apJAG2J8ScCg7V1vGH",
  "key29": "4WayC8Mc1f59tqTDwtAR7fkECVJ4QLWxXPgiqdc7nBu3WTXx9mopUX7ViZ8Ck1CmL5Zwi8jXGLn9WUMYTZCff3kK",
  "key30": "5ZQeo2hkrCsUPbCbuJ72pED7hZKjtKNVgLo3nHpU2bHqZFsGRhVwpYUaa5ak7MS92jXsQ49ySuvampTh7R3CLCBe",
  "key31": "4iWompVyLBT3kBqZv19XSS2YYpMpCadL5yWX8bVNhxavMJybrb6BQqW3Dk5BHdrwWTBdrCJiYdxRrCnnBW4tgrUq",
  "key32": "2kGcKGsWP5aFCSunavdbiKqDWyjv4kFdceTWqVL15TXHEyDjBzoeX7YSQ3FDxRzEkX5ZsVnC8mPvxz87AAqm4wpK",
  "key33": "2hB1KfUSxTwVrgEgwSv6A4G5Z4PMpxZWVMZLPFeSU1pNhmnPn19P4ssxPFuASHPqSh8tydNXyBWCujs3NojSrHai",
  "key34": "3yPCCf5JvrAn5NtqqWeoifw5Ad2GdegdaYFC3hBJTx8BNmqKa426xqLXc9UsLZ78tsuj7eBF47rZwcV5SsvASyrs",
  "key35": "6tyeLs2oywxAVmqtbmdxioVY7kEFF2cArvh7nioAbgrRZs9vWNndZXJjDeNnZcJvDycy6LNZs7PDHD4CcDQpBrv",
  "key36": "2pEPdh1uzBbGHQjCQ66KZtuppLF7FfXbsPRi8nNVDbw2Y1yyVw1UKTfrU194zjvXb7EKvduf4RNHo2kF68cg3BEr",
  "key37": "Tzzk3W6V1j6gZLgqRV4oUCPHhgxTSXogCnNdzKJKVivDQz2jDgDPJ6EYsvb2HCW6tyjFTuvp8En4fVBACmne1oc"
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
