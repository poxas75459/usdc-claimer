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
    "5bKoYybZteEJKJeyNs8cT6GH29MvWEhsMBKcwvbzAdQPofKUhJSnKAF2oZTa8Xrx3D97Rnp3FuzJub3dBVbhpSiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkucN9zM6o5FGWe54WYGAR65R3X4mftAfo3Ck1wrgMSWeaKPunAfmnh9y4kvsWBgaLP78FkEQXnvHw6EVMz6zoJ",
  "key1": "5U3sQ4YAt8sBUCnGFG3MWQgtu8Eb6Mu5kyxUwicF6ETAyZrDhFZuzX13DSRB2sFD6TN424K6QYDU62SYDYzH734a",
  "key2": "5m86jkj8axxwig4aBDGEhjLCBrBdc2Fz35Jo1j4SQkGAfgSJRwYWH7WfYdMKvTHw7diJJUWYEszK1PEL26izVktF",
  "key3": "3ZAuBGFrPihouzGk2ALNQHWmhVvkboiHA7oAGVNMA1YBZirmGHe2unrFmKTdmRd27XVx1hq6XQeriZiekUC27pb7",
  "key4": "UDCU3FuzrL9fnHvBzg8bNwPKe1bHFtnMpT9Q8xfEmvNVeXFDkWU6mytpteEK8qYsLkyaQQZZK91Y8BD1wHhT2mr",
  "key5": "3Db31rqVVtus84AjZSFtkQndtrzXzjWk3gMtkxq8XuAcVRFg6oxbRiTS7huWUXkVF7Ex5N9XfbaoGgbt9Rukaye6",
  "key6": "3THRVWwEovzuKL39NZPyLUNB2kmPyBfwXQyRHD43anw9bPesHhk9Jk6ePM97aVyM5PEfbRzovS3ySvuZRPvTTZNP",
  "key7": "4Lw2mdivvAhu9xKibT4FtnMFQSwc54iCWKjmuWAXiteB683ASsvfDAGkjXo2936MCLYmZivnMhaiqBotpnxFk6gk",
  "key8": "2eLX4bZUVvzzPJbj9y5q3WU5u6D8yRcN8sBT4EzR7nAEi2FH9iaFHSEwbJXaoGb2291Xm6tHRM2kRPD1ME2e4L5x",
  "key9": "4qM94RD2Cio56Dt32978kXBi5tNrmwLp85JrKMBP9qSN9dEkHfvMb5XErxeUQX4M5LD3n4b83mJ7RyDTLU9zm8FG",
  "key10": "2xMz718fn9aQgLdE4Ffeg7ti5FXU2GLjS3yi3iWt6r6LTLB2o4Fy4bSdhu3ShFkEK3MpcRXFKW1y6vXBp6uUFJu4",
  "key11": "4L1c6ZBhz56Rg73faThDAs4JstocCSvbaza47UwtP7yGiU3cf2XMmc1UVWgjRNKXV4H54XShKsRMWyAnJPAkZgNu",
  "key12": "4VahwXmipBRyueA1ZtxvFW4qXSfvbzYXC7HrwEwFbYJWtDJj5eSffGc7tHrSstUJdjn8eyB9SezTPhskEL1wKbUt",
  "key13": "2EfhLDNMa8DNhm1vewXeJfJU5cQcvf6gu8xfDotht2UKqKSwwAKKctX4TALT1CTMCGTBNcpbqm7WLSrZDMg6Vy9y",
  "key14": "4MjYet68qDVXtsMA6jKYgb5exQyhVigjKgvcBJXR56yrzW7AyqdjXVWeNYpWJFqCTgeDcrJ2DGofpMVvDuBWWU6s",
  "key15": "3wATRs8NyWei5E6SdEix9PrLUkGuR9an5PJZQtbRqCTTFFQx5d27dxkVL7mxKPYjNdfTnNetZQqqUP2m9DuAFoVD",
  "key16": "2amgeJYvxDva22vs1CFy8URVRDHd6ai4VshrqKuXUcdFpGtwZbG1nnnhxamvtWEUfi8wUPrMwQmeJjh2TwQrHbiW",
  "key17": "4emJCbaMuURFGFJdyj3H8EnZShbrC6AkyewAwkTQwoS7sSbBrguEYBkZ3tHijt2BcyRKokwcHoCi7UbaV6EiEo15",
  "key18": "2QBZaAk4QM2uRyZyaJfLDK6xF3TcckgHLMc9dC2Y6NZvHzi6StTmp78WmvfqJyAfDwBCr17kdv3fAHqmr6QL9Dru",
  "key19": "3kuw3TGQx16XiRYcsK5rMAaQxHack8uHcE98j4Ad4Hb5ABZmHubJA9DzTfKtikSSr3YTBQ63FFTuKaVu7yT4RFKZ",
  "key20": "2zNXvHGzZLTD2phXrUQrZAfTgJHuzWrQ4rzmo4xsb1wouqKfaLQtYraeKHRq24bTA8RmeXHz5guHpVmQEXgoo9Fr",
  "key21": "3VQHFgNH8eCoBj2yvMwd4mbkMPDd11eokUA6xBhY8K7Z2ioybNb83sLe1jT3BQoAKoXzNTbpzfuyUgg7rvzFsHv8",
  "key22": "2Y9pdHjafFW4bxtpBCbze1rMgyXSPYwqU5Mvfh9qHfN1qqiouiyMxTjD1P2kJYtMCu8mKEPEcTu5mjc79uLsPYs9",
  "key23": "4yJ1ejE6c3XXjBDyTaGBMYM1Xk7WMZfHUZdK8TpmYBnTLknALN8hwCe65S2veQPkaTWarCC49sgcDZWCgPg2BQ8V",
  "key24": "5tDv8Kz6EkGksRFSYmmBuukRjk8MU3nV6UsAg8p5xnuYqt7ds3gqxgEB8YrBaERpLeyBXeymGE3b2tMpccdGCmVi",
  "key25": "4d6CeKCmFRorU2cf5UGHHhu4JCV9yrqYaRaK56d2YMaFyJ437hCFvnYSq9v9JP3Q4ofMLn2krQg66jAznFZnHeBa",
  "key26": "4m18iSx2RnzbDEftWnz9gG3J2rD5xtJZqasroavd8zgfuvdZ9itoBFXZ3LM1WSBSSSfb18NFzh1hGGQ91F2bvNcn",
  "key27": "4r1HyZyyLNgHBscAdyAbwG8FWLSmRNjEYfTXErHoxaJZdzUPBAjQRnbegQsXxGaSFSCf4ry13gHxyvVmUatXfzM7",
  "key28": "2kB5Nidr4gDExDRgjgKNaYordwL6d7LB9EotQLTsR4P5DAg9nt7BvXvgPMhyWxYnjhQgrz7bkxwdScZDUiC15v77",
  "key29": "3qm1TjeTgioCbbui6PxNZJN6beKGYznxPsRgoTXGtJcyvCzNkJWyyoMTWwG9SmxaKk9CAN7Rk2i2RQ5pnNmRNTHf",
  "key30": "3UoRX6s4RWD5hw14ZbrKANnQtbN1vPQDJxYVWHMwR8PC2k2jarVRzVXygJ3ZRxR1EBZWmHEhyipkKiiLptLZb9PC",
  "key31": "3fp7sBxjm5NqG1f5vCB7TzAq7MrE5mRpp9uyFs8aCNj9wKoUmMaTKdA5NNjAvf87B22NpYpynUXkmGSUFDfFz7vV",
  "key32": "3gfZRPz2FT7K6K8CgSrqLpfrKJ1rJeg8SXAnH2VUzQJ2nn5CHHSaSK7zZ2626Xp7wLL5kuW91ZmmuSm4gmKMY2Dw"
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
