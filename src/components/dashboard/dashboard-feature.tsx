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
    "2NJnKUA5bLrBjQHqUgtx5LkTWMiWGryrw4KL5XRvz8fLgQFwd7QzsGuBzj57m9CmbvYTpXQNc5RbetjWb8oTNbW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPqxxENYn8NCSvpFTWMCynBcRCJHfgivSJJDfnEBRuBKyu3kkt5UGzqewiQT2vCTwqNcifnzPSxHbZR6Ksu9HXj",
  "key1": "3axEmkj2JhGqni5t6qAisPL8MwsGQ28V6e5TDQrCAgTcpqutsXSGUFj1j1kogjyLFrzHMRnC86U3barQ223ytYny",
  "key2": "3WR5huBDzjnWhxFpxkfHGH6T81P9qMhu8cobSHqxS13ynxLygcUJZQZC5fETgjgcqWWE2foSdwxrE4acejNFFopB",
  "key3": "3aWK46mbw44o4sFhvfLuz4BSShLuvdi1X3XDcVh3LrDWhYdHMcX5sHZvdpdBGHWNN4jyJZLFJ6sMaNSrBZZCGDhP",
  "key4": "2ipBmy2oWemoBoZy8dRtYGkujVJfiAGGeRt6qJPupH2bD6TvYhm8gGqyJNxRX24PpifBdgQsUWYS2jPm1fyEaXcz",
  "key5": "2bnrHAf59eBeojKZaEibX4krg6TZ1qKaZUoPk1hDrc4pot8tJ82ArepMw9bQnK9N9otpW4QE3hwz2bD9R3SFSqGu",
  "key6": "4D2Nmmtf116e48YF38WgGxMxnpcwVTR5BNxXgtK2ZUL8enaJaMFu2AdB1qbEKPuiUJkwemmBQHYkfomqgVxmcEDf",
  "key7": "2ERBKZfYY4EFCf6b2qy4wYXq94PtKxfW4EQ5epaXdpGCu9GuL9RXmbe6Nv5hweUjWKrwGPq3csujsPEmY2mR2Eew",
  "key8": "5eCduDoX1Eb8PEhNUzSDWae6oEyzi6FcpagxD163s476YCbXYMEXgWoUK7Z2YPDz8tSGCYQ6bHjiQc9DSmsBs5KM",
  "key9": "2G7eT5hWp1gYgFfL2NFxSyC2vQMyJ2FvWKj7UM4J19rig9zpJgDHBEvuZqCWfnE2zLrdqMJU7nnMEHsJ8YgjyLN1",
  "key10": "2FfdXP3Y76iB8921LGtSBAD1qb4NYe8dGFT5NfzKcYSyZqYdkHqrvDD9R7R5jkoqbaTtq4tpM8Z7nYfLLR3h2on6",
  "key11": "Jj4tBcD7LnwK6QiXEduhbCsXivfaYjqugA3H2cGzGM3LcwkCY9bP2tR4hp1Xmw7PMmEy9itw5RKZ6NQZzYGuuz5",
  "key12": "2oGYaP4DxYPFCT33Zryn8rmeaer7J2HbCbjRbRNco46AZbs65DsqaMQyMhTU3KgXUaxBQPXbCmxM1ve6wcGsY3DN",
  "key13": "38ADAEW1d27YPJ9Vb4fvgEiMB5UTGxFVycA4Rt5h3qan74syFQNFshMhGR8G5QE8GZqmPTJPXXYUKZtd229oD9gq",
  "key14": "TdFQv7zud2fEh9JximZ4FoQLq7iRUtnUC6XqAzhieshJGPGYTwkrU6nbLoSCjMEaGZdFXcqNdo6L5YXH26YtRWa",
  "key15": "23ZuJeEJ1ACCBSsvc5yuYcmUY4FGqcjPgpdprsQEKz97CrCKwhF8RZFFBoESLxmKA71E1ufLTakeGHHjg94phV9U",
  "key16": "4R3tjXtpB3FHyqpW8wook5HNSDRvkW54iaDv5BtG3xgPfk2yFrEGjq4d8D5diu3inidUaRNVKmoGyRtqxijdiiuc",
  "key17": "nRJcTAEB7cvcb1JdofybS1SrHmFt2mre5wmbK2yjeWkYRcnPJe7H8e1tdYL1zKwfjQWKpZsi1XVDSt6nySbq9JH",
  "key18": "4UqGzsyschvt7q7zxNw4XE1RU3hFdEkMvvDai2NfUtq6eYjaP9nT4fFsKEZhYFbZTWUNjFBJtEaP1kUngpKKPKu3",
  "key19": "36onEba2kpKK2SaTnjyHRviht2QmJSq18WzQbsEUDqyFuMv7ovSqg9CVV2ZqppKrZW8HT9ZYnqGroGgyzgnobbyF",
  "key20": "8nJ84kBrXKs1XiPNkmcQpdjQoso8sWH1aAuzfiN2dbYfMDLpKy1nnzxduSDpb6VtKvhafCxpn8QzYFftda8FtEY",
  "key21": "2xxQrjcRrU7JxK8asoL3iFMPqxQhNmcpr5MnxKY4Dq5skKj3jD5t4fy9uyPCG8yDPzWdrKvvjjAfc6mNmb2tUPtd",
  "key22": "2UKewhaYt3bV7x1otDCjQ7inesbfNXCFsV9snASpYMEbPEyPA1dyoGWZRQeEQyLdvDAopodBCy3CpeQnAwfYXmvs",
  "key23": "2girdJUsnh1mAsZM2Vi12HBcWBJBvKEGgnSQtXxTb55eWACAw5zMSNqVihdysJaD9AK6JTmxMMMA2M2KxR91A1mr",
  "key24": "odx5qDKqAvkhw3tsnySww3ZojXnQwhfHTZzahqeU6KMDfDJ1XGqowQ8GfKuhM3GTmpruW41o5i3iG586fJaq46y",
  "key25": "29S76fT1Yi1jDZnjWFz5Am81Qu19ADrw5zqGydBt1Lc2PesLaj3bG3vxPpfr5i63KUFUpq8khN8Li9hi6qVNhzW6",
  "key26": "678bm3rxxcAYHq4f92jbmrBUW7ir9pkzkGLVxLEPyok7j3g6y7njqaDiY5g5i5G3uMvLBa8RxYajPHfEPnEnp2dV",
  "key27": "3GjWiQ6EKjLe5AR9zgX5tNXJ16CmetTnKbxdQwegoDodrr7bWdFvEBP4xATtH8BmepZUvLZC9ToNJ66WepTjxMBB",
  "key28": "5Sqjx1SbkfwhaCWHsryW1e36JmBbNXosfqJnCVHqo1EsGZLjDkVdj81g9zLyevx268CSentiUrcFSNM6PkoV9Xgz",
  "key29": "4sAVDKudZTfFFdhVcfHxATuTbXN8MgENEt21JB8nVZHcHT9dSVbn9R1GyaGGanfHWKeFTKwsxaq4wxN3WUaRqdJ6",
  "key30": "4Mfjz72XSejF9ppkvSZn2UCLPoFwJPvrH5TdPDoHeuT6ZQsv2RSYPSkCKXSZc6xGBWUf6ejQhJ2Nis96zwtehpnE",
  "key31": "uT9ZBwqRRhv2p1GLasU9dKb1cGpS3Ed96bU4LKCdWjeLdPbAzmss1EJqcWbu7MSL2UPVQ8FKeBbh9EF8Nenb8JQ",
  "key32": "2sgXEvDs72z5RDJc1LDiSF1K5uMajE9Fy8BqrrZ4aT8gX48QTskddDHUXNT62TorhQnF5sL1NMz45T5Vh7zsgLsC",
  "key33": "5tZuhDFFztoi3sWDF1xVKy5bH1EgzkGFQVThrzBBVdQ9j5HreNaGqwB9Sx73hvCGs3xXRijkTLfLBcoexZf6tzGe",
  "key34": "3MkWs9qaka2CQpoJrbtGZxvavu2ACtEx5JGnaXT4y3dwH1da3ckkPkuiTXW3cyZ6oYYcAMtBtw9d6nVCCTRKSrAR",
  "key35": "3y6AuxLe7RiAEFuZxVtHCx6kTF6LwwkbMtBDfFpqG4fikxukrsb7MNwjS9wqktX7vrrySPH9j6bk5g51k1N4vw9M",
  "key36": "3kVA5h6qeM9V8Rzzx6oMAey1HZyGcWuPZMB5eUVfr7HxsNCmbscMpgtZNsfMUQi26wyhg4d7fqBCjwtPQJj84krA"
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
