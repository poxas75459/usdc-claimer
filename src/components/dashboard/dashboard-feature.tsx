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
    "eU17C4HYQTxw4aJfneK8YRX7ptXzJMPaLGc47yHJXhssnWJpmxKNmPPNu6ijcSmAn9dApNMcZKaWkxr4pjvWkEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A98wtdzseD2V9VXBrJ19VAj8QeZwLY8m7D1Ck2GhAEABpPFMMbm8V9rtEqVue17d1SkRpdJe6sjETJkowpgPKJg",
  "key1": "2hi13jGK59wQGBwqobhBoYSGHThzHkC5ULLDH3dxQ9Er7uDmCwvFbJFy8q4ZjspKZXdE373qAsceNFD86AgsEVxs",
  "key2": "4cYHQMeNGDM742gzV4BYTiRotVQq5QLgMWcqP32gxir9ErEJujGUGGmTAY8kpUECaW4cwnMNJodz28cmxZL2S7tX",
  "key3": "2NqMnk1QgjokLGtzCz9XSQqfZgHSERv8YEuosQhcZgK6tGAS45GGzFag3xiommDp4bRkoYEjwPpQ8L2UA9FTCMwf",
  "key4": "4fR3rNmaEkBYGqxJinRfhdJuAJQzpPALva24UBChM2LEfwA6QE8gXgSaDg5HCdPcod7sKGUCDRunKUp9vRqZnqUa",
  "key5": "D74tgW7HayHe25TURh8KtTsQk5WCKych7nxepAtjWHBJu4uupzhQZYmraJhp2Rc1AWKJ9Mdn2KmMfBb8FXgrtUf",
  "key6": "4ajdWSGTUNShoDSs9o53pBKFpojGyGpWLtPpjHk78Yo3HtD1RkJj9Jkuki2NF9Dse2TeRgVzFDgJbgJ9bxy8eG4v",
  "key7": "2RwfuWyU3KDcBC6vkRWjetH1Y5abE8bv2Xa9huUVYnUGRkkQpZQDweLvBFKSEWm9wyCJdqk4DUHDpcMnHCxwH5om",
  "key8": "435dbVpma1278Dda3uwyvDvMot8qPGa88beFQFnfSQgLcoj5SvuBQVMn5FTwnBmfx28p9TW7J7t1ku9bnNN8VENb",
  "key9": "4pXojEZrDEsqqkJiumLr88eTSBXtAFg9JJoLZcyLkZerngWfEVqwmodwfTXXonNYyPjyFd2fVt5Ft4yEcmNweh6Z",
  "key10": "ywZZYRrXmiKuo2ufZe4XiM6AZbwqf2pam1c8CRHC42b5ogKcyHmgCHgrg9ZqQ597nmSm2pViqkTiF1L6TgXWXGM",
  "key11": "KocVuWSGjFresbKJyv3sCkNT1ZNrc8RhY1Fi23Qvg6eaCNHUQLDdvfqq1YjXTwAx3w1MF9Y4HsPyUoY6DJePtCJ",
  "key12": "SWW9mFHiQa7xVP29oG23H6pjzLWhWb3pnMEZi9KtCA3XV2pKBCZmr8bpfgurJG2Rwpmwq4yMFsD83hrb2GKnSuq",
  "key13": "2phnZosAo8TQFsKkZ4yszpgLqw1aey5PJ37jfdhz4sgoYaYRfT25QmND8xTeCfea85tWtjjrcJB7XEa4LMuDq1K1",
  "key14": "2hToLLJHRpF165UoCEwvHLNyRSDwjLfQv9e6kQY32CotxTJDNeVUu9QJWQ7QyufcRcsWSqPedEJ6e2EkFszH2Xao",
  "key15": "43WUAkJAwD8Gg68TjtDFgvp4UTHxokkuozg3DMF1iZzEAa7RFc7RNRrT29SNa9xbMXUnmDYew1NABkwk3mLJ1pRy",
  "key16": "4b9PfD7AJiKHNYH2ysVJdkbxB6BLmK2gxLxJnTaiDRGwpnFbjQoC2BhrEisCGUjEEFw9sfxuqLnRwKdFL9a7B9kC",
  "key17": "5nm4SHf7JdHhQcbF4ozU6xtTC7Bi6bmmiL2UxoymYqJqaUHkw8ZXwszCTRiL3y461M7nDVwm2eFebpTKZ9KM1GkD",
  "key18": "4CZYhbsYcSKiJ8YuerURZNoPGXDZXvJfWqa1gixYDvmwGTopK5cRYkndukNu98nj9qmE9pBi7AeymSzFjkJe8rWs",
  "key19": "3sittAcjady3mmi51cShR532shTWMn1kn8drha3tsHkT26DgkyXAuk7PnV2auSCMWcwbiByWSxr6x2vx2jUsxpPj",
  "key20": "5GYGw2sztoQdVj39VxQ5KvcZa1EFfw37mt2fKVtGAn8PEPXVrSAKAti4BK5wwiKpRrWRKXKdJAkxPibV1L1ssWT5",
  "key21": "3Pb8GCNhRh8xVmfJh9A9ChXUYnFVG3CFycQzHLqV7YsAuJFfaG4Nx1XjsS7wvaKcLUyKs8LYtfNrLQZjvPLXsNRM",
  "key22": "2JZ7iWjMr4sVDsZXePWPRkJGt92G7z1uXJJhD7W7euPJjMg2P5g9PYeVL26UAG8LhAbUaGnjr38Q11qeS2KndDfF",
  "key23": "3qT5NB5XMjgsJFPkfmEsyGAZEAZmqzpryVNcRTu9jZkt3Jm4rr6CkLSBQcj4Gqn25FNSEXVE3qr5vxwgQA8BeAu4",
  "key24": "26KGVJM1aQYx6L1eUxzqeGkVgGXrsikKZiKeh8QJshk7PPC8UGbMTvsMbKQPRywYw3rTyDqmfPWtY2y2RwK8Yu3V",
  "key25": "m9usYKpEsLPQpz6vegfbae7egNBdC6apwVekVsdsLTcGzP5MX6b2Wzg9WL7vJUZ5aqvah8sAXpF7TRwMYGsapVL",
  "key26": "4VsPqGcsoUAAb29rkxevdAs9Gk1zD2hYYxyTg6TimmmxzeGrR12QHnAEC7vuiRRTiPaL8iBerTLHCjNMemdx3CVR",
  "key27": "d66opEWopriDNGvhA15NVnZvDE5Zgwp7s78RPBKuH2QSnSZpu2BX4pskq12fESxQMAMURDwpkzGNJPYE5EwYp2y",
  "key28": "4TFM3Kz4AnxNM3y23XtGbMa6DNuWf59AK5pP2ZQ1z96PPA1eBQF68L8Xac6aeDsERALsiXcRznY9hLVNTuVMVnKG",
  "key29": "42JJdC4GQK3wyS9CFkftDF6FbWJynjEj4yyjUckm11KF2WWuMGHBd4JxA1wSZ29KjXq21F5pwgCsXCgxxFwsC2ZQ",
  "key30": "3cpUch5sp3C3eTX1qCbY7E7PEhT4a9zJCwGCDW6wxJHtk7ViwQoeYX25hTDrggdhsWwvCdfxofdfYh6h9bJAq5wT",
  "key31": "64ZL3HwP4G82oxCXkZrMxmnm4MXFh5Cyoinzn8mgr7UZHbLskj4UDHpz7FgqAFYhx7BmoDu9bdb4WPaSkV91xGVW",
  "key32": "2YMKpafjDmQR4hKwcMJCLoh6DiB4hMuWefB9id4c98oBADv81fJZxzeiLJsG1ARVajWrorekvgdhEku4YjoxA8HJ"
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
