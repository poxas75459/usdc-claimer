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
    "4bvKRbEWMR8HASmvx958weogskH27SJLbb8cDNnkrVryLV86QV3UJKKpsjSt9zisX25n9v4W8p5twJe5P4cgvMEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N9PBHWrhTLbRBajpizKyPQ2r4NxaobAAJHq4a5K94CV3Gd7UKUn3nQesstPi5HSLi53LmHLoD1pDTdmMWBVQ35K",
  "key1": "2X4DGzc82bv8UnRLbdemceKvvsdUdHaeSxFxxV5GpJ9obZLEPUC1cYxbPMaSULTcmvaWstncP6Xvp5tniifdGjq3",
  "key2": "z2gfAaRADTb3SYDkiS3FxDLDos8jLHnX4X89gvj6L5jjrSp6rWtk3TpW18tyKKXDdMNTSkgByPC3KXAjBx5ZqrQ",
  "key3": "4jxVBK1koXKmKVS6UuiHxoDsH8xScbDFbyKPftyh3eEY7gVpJgadjkCQ3Nz3PoaAfosXHPXhb4ebmSegUxY9gU8L",
  "key4": "us8XhjdcdfLzKcgyF3Z3wRjZHD6BRH25QoeUPkrhShgjJJEmVWAX8jgjNUPG3e2gZoXodQLcQtegBNbS8aFjNHv",
  "key5": "ktbuZehUv7ATKnVjMDJbGpXcUBMh7WUPjVMDE4JExaBAbCoVCyHZA7khTdkc53uZXVQrKFTncDtCv4vwRfjvTdT",
  "key6": "5tDWVeeDqcvQaey72KVrmPmYvqmYy8XKTqZhRQGRqjghp1aK7iMvezq7GSHFAvpYPKZrAQqy4vrtrgwdZfSWpBmx",
  "key7": "4KWYZBatJ4emSJBihVp42FZDCTBGdGBoffFuVg1UqXbgY5mXZbo8vawBGEQS4wHJj1oPV2QB8gUd9jg5ojQSSkUr",
  "key8": "2mr1GfTR48JLqddbkmXGyeNE5M4Pt39SWyrGchh1j1XpSoC3MjUgivCzndW92eXWd3oTktBsnU1yMjxUXQmqrHwV",
  "key9": "E27e3dF2YXSQZxhbG1GBCGxAGCajGrw2WhAqVrMYUBiWbsyiAUWptKBHWe1zk9guSa2WfutMpshrrjzK7uWC4V2",
  "key10": "3SBFsVbJtGFTrnj8p4M2mbhPZufJSxFQGGuJ1ho8KZJgmbqdoHFkUuwYinU1mTtRLXh7d3iW8iWqgQVqboHGewLE",
  "key11": "4BnUMUFtZMJUwmhgGsTAym52AWcnMpw93ffRWKPqDfRyfsHh2a2SFLMGNBg5p3ANR9cbF4oQAnqMK9tJnbVsT34G",
  "key12": "5RtviA7YbQVoNFnmR7e68he8kM3YW41gSqRGvkYBCQ7pWqdvBrRcc3xE1HYT7zt5WR5pZdk6JBkGKdZJrJWnP2wM",
  "key13": "2cGaaTTfrJ88SK3yJL8khSZNJm23jsa36G4Yu4MmvhR3bhNMxUY77NiwR4p9XxAEtwKPujJpW8ZGsBdDLK6U8frr",
  "key14": "5cCLN2vM9UCXaqMvVL861pNAH1YtvQ81HfuFMZikU82aduV8g7GEqrmuz6mLFLfyyQ5pdQfv8yzhKQrKJXSqVqsy",
  "key15": "4epiuq7uyNCkj9pXuF68ztoJ2ysKD6PSFt7Rn96qFntffdatCrhcSgVUnpwE6o46P8qeAhSd4yWVUoRnFzQQwpb2",
  "key16": "kUaTMKGNwfdXPW74BSjPQnWEPXGTvJAi7gFHqowCGms6Hnqhecpgt5LCFYjWiZX4zHmfKMZk5U5JUeNafirfKmD",
  "key17": "3nm75R9YSwEW3wpr5xAgUCwPbQHvCLBd8YzXFyddzKuQKFgN47SdXsM2JmuHRWt4v8mvCzD2b2Sy1Y7fAD2MfHzA",
  "key18": "5xGSL6d8Rxhmi2qsx2fh27RV8da3Wp1WuQFL8YdbLTdkw7wb9PN3CTHjRH2j5hSbHB7o5qi7E5LG1pRwHSJ4zFbm",
  "key19": "4bwWQ7Urcu3yH7YNicmqfcHiNgJ31Vy52Ttr8fqmBfkqb1JCNhSzYJZ5hjYu89YaGiALCi1tffgQSHDops8KsqBm",
  "key20": "3HLE31usGwwR3nayLELvhHGpNx1v9C77AGtwYNo4FpqZJQvoTPN7nthRaUdsf3scPNs4qvv729F58i2CzLscwdmY",
  "key21": "4arNNPW3fKqDzRaYfhbrwZKjHr4wpPif7YUVL644Mvvq3qdagw9kUha6MhZKjeFa3pfb2CAVg5npZ7AWUEZke2aH",
  "key22": "duJxBkDMA72dzFJi9fGRUuNXwv8tbaHwDAMWF7DY9axU65XUEuAToeDVgn1xHjC3Y7C4Z5njY8ZsWTpDD44vkqB",
  "key23": "2g1KWtbxw1rKeJQbsAZmkPW4UCBWS3GtouvmbJj4xQseWgb4GbfsxbAktdXW5PfRyfA5hxzmWBjVthwbJ5VyJEQF",
  "key24": "5NUhqeLsZiW9QdiBozrg71Fu4VoWvqQfh7sBsLN4XB9SdYoBEJ5XYphUyXwjX4kCr6k7UyXiZU2EhoVz9PHeWA24",
  "key25": "5RXaiGVHUdWDLGk4ngfVwGrbkSecKhN7dfGjGmxTyu92ntYtHPXuT81yh2kcgxtDhtvnSCC7VgJqaZ7CjrQZ9SUC",
  "key26": "3An33TQ6QyqA1dQoWPa6NAY9Cd59e9bsjWu5ipbf6ar3kJc9ZZh53NUF4qM4dG6qYUKFnNMJanE8Sj8oW2fdBkhX",
  "key27": "HSuAtjZ3yppAwuqqp8aWTMRdJxMNGfYxFcfLLkrYvCkhENgMvuSRgSc9YzYpaXSxqMwSXhhnkKMyyGKTNJ9gqZ5",
  "key28": "4RdqP6DtKgYAVAwMoWD8ZpPrAMmqYp646yMVwaJYAsuPfjvB2EHYbGfcbACmnYoArAwMAzoWV6uAQ5Zkd4c41hKP",
  "key29": "2yyzLM6PKpYmFJTCJj2ThBBLZEqtCSd15xveSbWq7NFzoHcnVyvpYJXxBz2Mp3piZkxnyFiWQfA8aWmRXcVSaghK",
  "key30": "4eX8y4e9LD55PgwDK4xoVvBFXZ91NtKGKqgi1R7srFppvsRzNfHm73xAwHeDGsx5bqgb5NnUnEzUuGJSnZ28h9on",
  "key31": "4KzZ2VioJ3jbg3uf1a65x2dY4J5JLGhqGpE2pPVmH25iQUoNtKqoPNLY1GNyd1JNpaTH9osVBjwrqaLyjXL9mJEt",
  "key32": "5LpfvSwhfzyAEZznS138915NFVAFtfhyupfSXLQsPukoaQoDPFkXitNDxDfqFwT54vBine8wGDX2pczhbfdTsD4P",
  "key33": "2yp71eiwZyad1pcGFw3rCGRv9day4KwndpYxAxH8pkgaP2Z84nz5TSy6kydNuKj116a9may29Yk9R6nrYFuzUhR6",
  "key34": "Rbw2n29wxrRwavGDaqa2Kef7ik96DGoWaE38AtcicwLfTosy43DCwiG5Uo5jxrvCoLoQLA1T7AqBwzGVB1FsXmi",
  "key35": "2KdM3co8Z9of4GiKMsZcdbGd9NuEU3pxwxrrdaRSQkh5i9LrbAFzmuQzZVU2qi7VwA1nBXhPxSQE9tCaey5rM9uY",
  "key36": "35dB8SfcCJhJM5yw4qcDtfPA78peD7tXUi2iV19ABmsgVJn6KGtPxgv7ifJ5CM95tupMLfLBtF6ZDwHwdxppVsuJ",
  "key37": "48FNZnQ8w6RWnZs1XajgTMitjMA55e5BBNwbiguq2m3tx3g3XDJ2zz9AHzaihCtgX3uhq5wkbnpyaEojqDMNHMz5",
  "key38": "24J5YbiUFAKKrTtyHCdnNwvY9PBT7Xg8j9xhr6wZGAVnrMUvMhxB11NE35nxMPhqcQH2azja3Q4qQzmhiyu4yDqL",
  "key39": "HQte7mjsA2Fmo3yXye4YbVvJLDDmhMHDd5QSLDwUMZ2h3uhVeArxGMgdqqPQRBaMM8nxUZGP68CketPEu4ioxfb"
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
