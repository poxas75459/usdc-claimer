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
    "5pb14s9WMJLxXVEyyQUMPKc8xdEBw2ijXf3zcFNJM2jAzDhBmH3P1iawSrMWv4Z9cf3uRSovgnHfM5JG647CExKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MvpVKV9FNKK88ACyyW8aVK4Mts7KKPkN8FCNLuDrKGWY2XstSWVp8vCgBsQo3ZqtCCC2F8Bqd7NQ5JnsvK1UntH",
  "key1": "472EMuMB5pFG9rPrDUtBPk561E9jo3QVg2kmFhYLtact95FVxeayRmePy8pALSzGK4NRDydUjP87hDGiM2JTLRZ3",
  "key2": "4wGa6PLMVpXgPhs61dSxGZpkB6MY94EuFvovoBptmPZvF2Tc9pBMgxY8stHeHmcLTNELnRfgp1LLD7e5mAS7E4vt",
  "key3": "5pKScoQu1dWS1bcpoCKM6BtuuQoqfxE1g3MaP6RCFXwyf6siuyrM3myFXfYBMRTcAFhTpF3mTpbsDoBLxSm5feg8",
  "key4": "6yfMbnfWhgZa8WKCc2wTUrmUCdgCeACteL51Ln2xHTghmBe7EoUXV99noY6DcpVqBLiqEnfSSQvXFt5qNesxZnR",
  "key5": "CtpJiEyGdDbSX6WPoZZkYpRg8KZnWXocKFobzD46P8PGkbPV86FPSaeBe5YqyrAGWrkBwsov3zE3EmwvpjQrHaT",
  "key6": "43AXDHNvgiqTgngKW4hx4LSfMpxzna61T7CVrv55tP31MMtQyPUPXZVzvWBNLoDMZKZdd2ffr3Tt16kTNg9BTxkq",
  "key7": "66FKK7uq3an3yfwuRiamZxgwt6Nm77nJugTWwKKgLZip7v89ZsaYVxZEcd1NWn3swGqn73nC9PVEAhF8u1Tfi2ec",
  "key8": "2kQR57Dcv1pJQBhWCMpGsn72cCQ77fJkVx2k4dpiVNWDtBPjuTjCPBhr4P8HoBfeTR8FmdM4yrAMn1wnHeuzqBn5",
  "key9": "6xKPddH2sctkzXAv77qY22gwkFSBHqJqqbADtnpvfXnmN9yj6HgHzxne7xDaJXebEKojjtkcKgivKw7SvYYU5gg",
  "key10": "twmjohtvL3v4CLDRpm2eDTU35ZiiHMif741rjpjAzjQebtVuMkfjnFHQhHu9Pw1DSGTnnEHF5G9NfAs2uKaQ86S",
  "key11": "LwLWMai1Td1JDWDWRtNtD24aj1xdQhXHEGXwhZKByn8qCiK7TbRXZKDjecjD1KkzGWx5RZptx5dMdBCzBFzVTuM",
  "key12": "5JkASYLZf51aDAhpjWQtyhfAwP1bWnkdB7xmrhV8YhoWEdUt2QHAmcVKhCgw98c3yZq48CSVTPVHWyH7c9k6RyGD",
  "key13": "4argvsF5NRoy6f7cR1TGQHmqinGcFd4UjVgQKDW5CqisSXPyzShjNhV9meeSf57XsjHXBfnZZX8Nu54Dw9E9gFig",
  "key14": "3UiwhqSCw9ddcS3wPyD5hPfUnPHtgYZVEL6EigJPFupdp9ofMnaBDfvkDdW4rrubNPVLS7PK4VRC4sJcEpFzaio5",
  "key15": "CbFzqHH5sD1Rko6DbBzXgkSzvRrZGHKR7FqT7Uw4Z4eKjWdHtw35R1x8gEw9wY8C9XUnxB5RZJjdJokC8RiaZsS",
  "key16": "5b7Ee8HqVqisbzQkvGGHH98Jx1uanQHLwBtZGSjaK75mFqCK2WpbwfGtNtctv1eCY2VapfB4MLMMK6V7o3WYVAN2",
  "key17": "3fjQVDbMoaWLRGpUpQ4L2ZT8Sp6dMwxeeqdw5GL71L1g644Ken6Y4e3ACsGf8TgAhnd4G9Rk6QYSZuY1EfzBQADu",
  "key18": "9M24964W2hSoVYz3XeVQJF5yWA8iR1LGexJsbCNcMAx7exJVTjmS6J7SpWEQCaxVsfEAozZaHXSkKkK6XWvihkb",
  "key19": "2vErrjfoaWoYnR2PRGJb5rMNmRmcpuY1xCKqJKeHktv68pfE4gArfhMwu5bkqj5kAQBw1HxVwQ8n3w57J26SqGCz",
  "key20": "3NenBaWnSu1Vgsrr1RTEETXkX7e6RfHzWSYuFqkASJfT7cityE18pkH1AJZTcB8oToU86YJCjvxamsg7rmevz6d8",
  "key21": "3LAQLkxDszDsycQHhbWGKuJ3dfLz7jqiTseP3yXJqmVjDdx3QK2i1gYdJv1UxqAEYWWnc2txK5yy2GXjL4DrdKVV",
  "key22": "3k8uRDvtCPQtnvowY8kKiU3fk8LfTSz2znecHH2dShvPuaGaFCdd3wGdy9J1aXuDAuVVndpaSXxmkKqQ2CUojyfG",
  "key23": "5QchXNiFFdU3mPna2TLFrgKchtu2H3gWicwtnPUFuJFGQCGZteqNN8DMyrccVeuCPvnShjp2RGRMqwQWWFAeRTEC",
  "key24": "3uaDik79GUqR2cTkVtFKkytUyReFVtNEuLveWa2Z854gxxeBH1tWLwdSRGgkwbcM6Cv9WL6xdkTzEeG1BqwJh1Kn",
  "key25": "r4zDJ9XnfxEMBr5H6hydA4VnmQ9SNgpXEpWLJVw37rwrGae5qoq5uqcehCoaoz9DVTydCG5DFvxsyy49TvBoSyB",
  "key26": "5bk2w4B7im2Vpvjxub1dFS9PkgLMJqUaQCn2BvHd2Pkg6e7ZNcyMcans75jekmxEYMbUA3EhNVvU8CMJHrEVXfZQ",
  "key27": "3eq2Zi3pSdPFutGWS7JyaLJ9fB4ygg69sH41vJL2BZeUFaWctKJGaZuaZHdVXuAgpnsBnFunKjNfnUGKifTqZAAS",
  "key28": "i7FZrNmeYtyF4zNdP7LF5fcbsVSZ65Dw6TBFipDFQxc3NTeWt94NXAoSFrgKVo3Md1QL5pyNMMymxZdEbCYD4zj",
  "key29": "tLTGZoy94HX6P1b156i8w7z5aoZeWj6fi6aVWu6JGENrY48FhRJQnRpa8BdPJtSBVbeSdqY7LRsmZVF16L4sTa9",
  "key30": "DGA9xkFbJuVk52Syz1ZepMfiEg35iS2HtHbkJfxY2YEgqqNya13TaHH61eBq3pL3Ze5vnpifrnGHteUKPfhDu3N",
  "key31": "57M6LqzPeAsKqYGFT8mD8KpzJxC8vQgrKHbGsm4SwupMqqtcdBeToFgR37HGjvFG6i1NVZPozLuMyKNCgbNzp9Z7",
  "key32": "35gXh1whtibgeFkn6pxNeweCD6spgQrN3ZMUgnT6zQPUsWTf9GyzcivC67sP5yij2nsq5wdABDiAKJTV82FGoi68",
  "key33": "3JtfwDcMBBNFzBAWZh5Hhq9e4JETsiasTi8PTFyvnXpmQ6C7c4hHuQNrCvMSpB17AZuaEXwpn4FbqXF7By6PSS3z",
  "key34": "42KRuU5doEwUYQ3aYhXvPHZ9tYLe7KLE7xoRQxtGtiM6V1eHcPySfeSHtcUFTwNaUewztb5ERwQ8f3gBRrVqBi22",
  "key35": "5AqgwG5mjk1pUzYC3oxPYfadHxXsgm5HDg44jcun9wogHCV4gLd8shXFAeFbyMVS2nE7t52zD377sa1d9waYSoDC"
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
