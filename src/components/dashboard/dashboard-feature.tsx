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
    "5X2i5gKy7hzp3osd7UrWw9ZnRCmTFL4AyyvgGLqLPsH3Pq75XMKkPptT6u9JeyKod9drNgHtHGUhQ9q3rtcUaWhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMQUz5mS54WENmYNXase13FA2ivePzeAt1jvU5rMwYLBFX4Sp8Dsryte8pezoUzoF2dy3EDSEvcf6fHuyCGaCFu",
  "key1": "4nptg9n7jaUgZShEr8JyZjALyuU9uVQ73AA5VW7E15xHiK8EebcS9vYLNuRWaEE34jXHG1jZjSz6kzFpJwCPPJVa",
  "key2": "159zYknfWazDmgd7PjVbmJWyJ45zq2kpx753ocRoGP5Tu6A3G6L4zKmBiifWdaSfmNTQtK3qXLwHqar4PNXxuBm",
  "key3": "r279PnsStW8keNBFnPPogaK2Tsmc8BCh3VGytsMNhpBBuZZ3pqPdBTDrXMGEtayniu9QUvwuS2UV95fdhBtJvmz",
  "key4": "UY3C68QxLb8kkESvWszqeSQypQKTpi4qnPaQhYjZAYGc5yGzz8mAmBoZb4StQJd78f8W2i97bmNZwgr82KZiToS",
  "key5": "2h2G9wDVXm5MJDvwJ4FmQvNmo8rz18ZMEqy5Th2izgtnHMJgeBVbeysXuf5pB7W4Mqc7ywiRWkZ8Vb7ov6xZ7VFV",
  "key6": "2LbPuaFUZhYrvsz5CBa6ENpmcuE8JanEQ69dvb2Fxrzp3oHNkxntRiNb6KjMcpvoTzkMrrvsSRVF4Gw4xLgSQAf8",
  "key7": "2op7qxA65HiiALHK93Qiyo771o4QYQcASvxsrqGbENQuYR3DnxK6zDRQZSJw1pCmZPBBysf2iUFbmrWkKWq4GW6X",
  "key8": "EFd5JeG2f4WhKzQFaSmkXfengXsDqjxTdcaW1xe3HuxAm6sF16nqri2vJfx982kvHPRvSoJyoBPFV5WhEV8Yygw",
  "key9": "XFDbscK46k2P8ac6fZJmhqkSZvLZVzACNVmciZ6TRHSsnJ4DtqnCbGru9j45Ny2ZLJHbXtD7cLVxp8XYQJpCGup",
  "key10": "4D8hC7J8NQFAjouxfRMhsAxi6tP6jwzuj6zRcV4cPH2oMzeYjhYBgCKMLWx7J4zuuS2iRW54DCwFbMt86QiNQz4z",
  "key11": "3XVRcWyZqJQu1TsqUnbR235n9CKbARJf1nMYs7ozdfxetcz6oVS7VgHqtRYNgxBYVCAqesiLyPdczVXd2ktL9CAU",
  "key12": "4jbWb5k9Z6GuPYK1YuMtLjLt9AbrVnLmkYJ6ygrybMLmaRqCus1jodJDKeYXfU2DdDW3uorXM6osT7KkQvBjBdqW",
  "key13": "46aY9gL4JRbbWZ1XLAi6PHKjxruGXEcp6kUSWf3QreTABZQPPXdJ5N2FyTwpriNWukEGhiBQNDeCNjLD3PwKHvMx",
  "key14": "3FtsgZi21czM36dRv4RUtBFctZdmp5Jpaawa13UWwDyxNYbbHAovbaadk67TvWC79h8ud8QYLRAyM2DogvbJc6Ag",
  "key15": "4KHN6gi5hZxavZPoTKwEKP1HvunHRRbbEa3WbDT8T26SebE3qMchTZuWAQqCRLJuPg86sJPCSVCSPVG3vSykegM3",
  "key16": "2SPe9sBXdhygUGUtFzz1drH29piTKkexJAJCApraBq8aMWGBkZXXm8ieaQJEfkXQUymJg7GcSFSY6r9wqwixvNUp",
  "key17": "4gRsTpdtfCnTF3cMk363TWTcGRVq8GvQv4GPPCsdtMhztdSDuJHrNRcAsE29G1xyc9kQbKKrLAK2eFFdjBJK3LCk",
  "key18": "aYNDdUn34ZsRJ8wghm75isaPia1wez8idhV7yBFcheFR8XN16NfCTd2dbJEjfHxss2i9pyW7QkHSmSh8bfjF6Pv",
  "key19": "kyPDkwHYvtGTA2RJqnhxmdtAcfLnwi2zLGM1ApgXaSUckDFhzjRvbPMQ6JFTWqc3rax41fC3e4iCYswE4yDe2aa",
  "key20": "45E1S9ds5Fgq5oTuGnKFQDRzVeMAGTtfwhnwUWDaRHUUgkvqVXjrCXCMrVaL1uT3pJCeZ5aPe49NZnM2QYMmpt6Y",
  "key21": "21b4QtSCKykCWrGceNpbsAcsSoajP9jGESqiPeTujYZ94f8jTaBXz7Y5Vnq6NqBw8uP4Sk1zCY3yc4Tkkoc7ftur",
  "key22": "gaVMDoZtziqMwiPDJuA2w2FwieE8hN4xCjf6FGSQjuEXP5zNXN1n8w12g59MmXtXYZe3X9gfgiB8STtzBfcYVnS",
  "key23": "4C2swyrdRyDWsuQNRjVBrnyEy51WwsaAnmtPypPvqT1DEFeF6YvfsZC6R1T9Fv57aKch2RFZCTb9YkmvSUoozLYN",
  "key24": "2CkZ9GLHH9m3PF3BVsRJQbCoJfWun4pvXTtjxz4pz3T8khxJBsTSsBh3HGtGN2r4FsDYrikBnaEdxLSxSg5oVyb8",
  "key25": "3HaKEqsUowTCvZthtDq644MRo7zz9DUC6Nf1Zg7jsnedhzfc2rWui7oVNyFezeKqwyTUCGyswVibMPyWJEsPWV4J",
  "key26": "3RTDk1upRDEfPkciRe3dhruky4VCBokYaWrxwqjk34EEvrsbKKEmCoFJXNa3jW3jBY7AxsZxFMG5MprdhJT2LeW3",
  "key27": "3HpBY9oEe4378MjRxi7MU4EVvwaeMvg9VzfwXfuUo4upMGGH9PDfN2kfjkkY8YJ7D566Ug4NuKR3Sq3UTbXbAZJY",
  "key28": "2ApuZHZnygafEK1275dkcbf1AkMxaRWtwGWPU4APLZ3EwDGDaT7TK4m9JzE5jqLmDgDnGrwi5WmeqLGvXNefFkpn",
  "key29": "2mNuSfMrcfjttMkEfEcStBCwxZU1u7MsVefDQ4mHatUAJNRXQqi3SzfnrR8Z1CJCexC386JEJjbYyQm38YPwU9cv",
  "key30": "52AfUCQDjyq7eYSeQ4H8AkXcQFhiPYaGnarqmkic734d272yDCkdw6TeY4i13m24UrFtpvkpGGvKkeBv9o93AN5z",
  "key31": "5bVJFcKYqM8TY8acxeH5ksCbR7MCYnjoGnv6CHQrFNWBpVYHjLCSNYaALK5ipyeghqYpYHPQ9s7cXj8wywN8oDr7",
  "key32": "3dv9ArZC75f5dc615VTFDkW6LhZoHSeJCbiwFcBdriKDdhaxQa7zPgAK6U7V4CszWwrrMgum2h5tFpsjZccjj2Q8",
  "key33": "4esSTE4naYFhfKazaHWHwPFpKmd2e6dzhbncpKqgnZtHQSmg5VwRjPgrvduRGKKqJYtj5wQfC1XUV17Ns8VDvJAN",
  "key34": "tWRobv1eg77zSE1U298RQ9FKaUzxWAWr5qtKzbnt8UZ1feEfMkML4FmWc3GhPQAs1tB2VXAFkFthQW9wscr9sJ8",
  "key35": "puvF7UFiBJnVZ65rzdaPudBnMGgHthJ7vT2u6PFUrkV5hAFnbswkv8k3kzhLXWhvWboLhaEUgqaBbVZ979RqAtY",
  "key36": "YTd8sJQ2B8rGBGqPsJkHDwctNiegZUr2fqebdiLBeu6uRJthbHbhXCQQN1DvHXkBTTXYh6CCr7ehhMtfgTymjXo",
  "key37": "2NDeQzCCr9eKqaLHQbb34pipF7hCLcn7dqjAmo81DwCQQc2Hq3pqNnVaoTEqdnufQaGdPnYeBZNJHqNNv2A6nuie",
  "key38": "28sK2x5aqQj4N1BMoRQfJuqfUsu1faCdE2nF73yvL4hrHNxzAWNLSs18SnKeFZKwf5mC5P6v9gdUjfxGenTimicR",
  "key39": "2cW6xizTX8p51c9ksP5U2xQWA1Ck7MDidWaSVBfnuwsSvpcncz8YiL1shvpP7Zf1Lmnm1Sh2sEGSvttBXYgWtx6f",
  "key40": "TmGY94FdWL6AXRKETweyiSC3JkUoDtX1uGBLTzAd3vBQEm1vjxJEHHHGQRiiZEvgAeU6jtux1cdyR5rYLZfVYFw",
  "key41": "5Nho5enZid4q2Qy35qTvtKvtYHGZfqR6NRtRDapmw62GWxpWCE4uDpQCsu3mpAPYt7zenKnd6QmSB6uCJ5Rb18wW"
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
