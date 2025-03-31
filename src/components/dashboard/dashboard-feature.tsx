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
    "6cpLLwmVxh9y6ZEHVpSXZQMbUgx8w1LuWVchEZKHFVHxngM1wYfSe1a3F6asCaBBQR75AAUmkaXMD6FBLKdATQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37GHPUQuV1iQKJ7RW3q6Utd7Fqs9bWavHnFVctFHwShPaTipSGEQZikd8NUmjWqqdAfYU6pJH5DUTBK9Bmi36HDF",
  "key1": "4sGXKsD8UfCwDca1AUSgt8eieQVZijLmE1pR8pGzAcy43Dy6qP8BaPtZEykCc4rwnApmkwqqspBnqXQGz1LdG5Pg",
  "key2": "NbLc3q7Ys49Nfr2CofRrSxXyomGN9txPijiWqDbLSeLsew4FJADctDesTbUzWSwrHavVBingrbaKyGneDoAf3wr",
  "key3": "NRF9vxvHvsyabQKBoUiXf4BHy3LZsDNRvK839Tj4mhA9iKe2youC1tTPKmfz6gtN8Zp9zUjkx3GPtdb5Z7w4P63",
  "key4": "1NpWEK1UgjHYVQMvMMDV1wvpmqKUwPyv6NKxue9HE2G7CZwwNmn8g9j4MtV6x3Tv9zmYy7tS3LeFTfpbL9JrmnV",
  "key5": "46Z5MScnnEfoyXkuZQ7i393Q8E5pmxT41EGXozrEPtibMpfxhHFrpE5dDKgsbrZLosggE6yT5nt2ohJHEetdHG2Z",
  "key6": "6xzUQ7V7y9BSSynGJMCmDxxwfpEevGsuzvDcq7UPBKnn2M8qnj5VkHdffMgXHbbobQoMU7xfp93C6HTLR9w9xKN",
  "key7": "3GEVYsF3vx3Qwt4NqjAkVmGqJjuANTNLDgka4dee95b3fh5UbZx5poKJUB3dqvM4B4BL8q6RToSBDuyfKJ4XcTUX",
  "key8": "5NwfxJTej552zxgmfK2mEFQivT29Gx4X89P88Xkq1e3v78wBVNDtmVWZQydDACC4372BGBrNBedGEsmrpd64Eqn1",
  "key9": "5Yc9FgAX2SnZKBQs56wasYKWkNobRiMkTtgg1zLqBRN5VmfSL3xzea7gqNVBSmEa9vgcD7H1u75HXAtUTZZwcePr",
  "key10": "2jhD7Pos5fT3RXrjrd3wjxNnqMxbxD4KeznCWxFRiqGqfZLAtNYRzTAD1MhJcjDxanAGdrHptgrbFSoKD1tj2tSE",
  "key11": "45Eexf757RwPuEVXu2An18ruvtGGQPaeGjxU51HU2Q6tu4Px4ohkyPDo6p5pctpfqF8oJf9Ct8j6PyqZxBtUvgZX",
  "key12": "3dEr3EWZfHjaJeVbnhgoAzbgr1UT2PopFXoEsAKQvkGBKaeE63fNUQQWJVTkXfwYEkakhEkZvucFkV6puFRDGHY9",
  "key13": "5Sw9xufn6xtzsaMH89L7mZZzV7jQqbvpeuutosojCA8eQ8Jak9eE71VkL7xe7nw4YHkLJVyRseToMYNhHCr9rvvi",
  "key14": "2AVr4UaDofeRsKitYKoG4FZ9jSviKYV2YdPRtoeDBTHHmRe9JQtuAyDgCvSzkUYcbNo3mAAeUBeie1GEvipb9Qq3",
  "key15": "NptP8WzaMVo6Qi15Su8Rn7yETj7qs42TqV84g8BP81T8JWVixsgV52kpRYncX2V9QiQsYnctzU2vpkJnWjs1NBG",
  "key16": "2WAyiHfpizjm2o4GVrVMQy1Pk5jyrq8ife2FTdSCSPvdckwNGprNa3b1h1wSA76jVeuinnqLEqmLR8QaLkUcu1YS",
  "key17": "5zd6jCSbndHLELzF6BzJfeYcupFzFLkesKo5S48Vj4t4oJydd5RefF2HoaSz5av35BEfXktNZEjPjxfAE2sFQjty",
  "key18": "4PF6BTxP5jgGDe3YRn1kkVkmh1cKHj7hnmTsVeyhb36hZhNA2LLt8rAKtq1gioxhmRZRUGiKq8rAF4GE8ZWFZrqt",
  "key19": "5yP9WsY4xEE9bRCfrxknzWa7SwJivgcrduSbVKyjWn5c6gnYT12MUg8EhMdP8AHCcUK1GURfXRCB5eGUCxCidrqu",
  "key20": "5i9ELwKovVqrE8a4dvQ9y4ovwJzaPH22sgMLE8LnaE76ue9iDSAJ5ixb6tYCko9N9FtCQdBcEWPob33LbSHnM9c9",
  "key21": "4s2qGkTWEkzjU7s3njbPvR7Hq5uYaQKxVRfr9BWnarsCn5KURMe3zDVJHiGGKztHaYmkRVKtYQiAnfZRUxWixJck",
  "key22": "2bDF8VkcaRCXNVDu7xqrRqNwufPjpkm5Ws85o5hhuNY8aW7vTp2BBr8tCFWm1P3UVGKFXSwjZsZAzScFbfasfQfG",
  "key23": "4LuzSJhWM7J92tRLqiaqKxoaNECRopoUVgKyUYP3c7Y2ihkNe1DGUSRBhQGj8vntCJECJzoRMMaJfBFf7jk6C4m9",
  "key24": "3xqwBGRsqryyHm2kv3W4TbAmT7qqmptQc3nKgZ7TCKRiyCPx5sT4HKjRHBaFmxamSKYGQEdobugFUmzBGqMV7qLf",
  "key25": "4UXHvWzFU6mcNU3LEx8Q3qggYo83deMd3TGW9DsotzDBMEYoA3TeUJRUmx8HZhSPyFTSNwNoWqBGkQSxgoxuLXRy",
  "key26": "5ZakaAwrWdkstMwywjFLaRVfZtUNxLLCSH6h2Dgdp61jyQjkHjsTGxDHWAUifmy9FUfh2DsK59DujpvKzudNxJ6r",
  "key27": "aNkhQ8DE2S1NErCUC9txHEEvZxm3kQ7rtKUfKJRbKUZbpjvcH4gy149g1ifsM9jESb6BzD8PgJYLC8yXi55KDxs",
  "key28": "5s6Fi3uF5ALNPR6fp6CQjHGUBAZ6fp8biTzYsnr21ycLDndfDPvT7aXhe9Hhi31v8L1ZeuEy1YjSkHTsrhjCbch6",
  "key29": "dgSbxMj47njNE17WE4U25dCykvfsJweLKQA2VvhsFkDNVoWa1mg5Ghqb3u2kaUGDYVAzdukPHRVxyTbTYx66cWW",
  "key30": "4ZFLkGvcZarFvohSrcyMUrN7pkSnihPwXZ2WsDoqGdjZbaE95AbLwRqAvYSW9Nb6xSdwvdxErXozGyRiJ1dBzGMT",
  "key31": "59FtwK44djQ7kVdXhbGbc4oG3BC657Y8pA4gUMnGeHhDE6bEVzvZ5xAb45TrutTVgv6ws7omC4xkweXEQsqCfrTc",
  "key32": "2H9Gs4ax7MYzkQMXGgZKLzUKraM9EkTWFFbhzv6HRCQ8Qry2GNRjimJbZyeHSTB8aTVQ5aF1nwNDCJodfcTUBQp9",
  "key33": "kHN8V1HpBEmeCu9YrTQ9soJYamuLtaLp8hZFSr1fFj4cDMRnNGz5Kowp1LmXCx37LgGh9xLFq4j7ynD7bWiD7Z4",
  "key34": "3pGH5qm7KazcWR2gkiRWk3eC3XtRGFbesAt7aVQRbDHTeP5mF4YebanJLRNx3LkTf3dM3C2tjL6wYRJ9aK9XiYjr",
  "key35": "Bpe7qDTrtrMmu5k7NUScVq2z2sEyP3jMUkp9oS34zuyCoXDZwbKpW8XHKAKGs5UDcDHRnjAnieByYZzrJKdd6bM",
  "key36": "2Q5iGU3rkEF9zt8HWcm946GPRy3m2aDix4Vhw8rL91rTKntYtpYpmCmXWNfFdEobd7w7obPb9Kb963puvZimS2wV",
  "key37": "4z3JFNkqZA8oY3sjWiW5g7kuw6H71Kitng8v8upWRKAagDNbNLjHAR6M7AA4fbCNKy82z1LgeLvtYmgbd7gpUZyo",
  "key38": "4GZxs3krktqUJC6jtQWZ4gDnkzPE3KDB63fdZHVpXxPyE8Gkde8v7mkDMtM5NnbqNciN8BwYVNR76fxQ19m4Rax8",
  "key39": "xGp1uuEVEUn4c7cb86prRk8ziunfTY5UdmdmxHniZEnchRv5ACA9x6gFfH6BJCRgGMHMUd5QRxqkLmVDtAQtFi6",
  "key40": "2hXzZXEVbGGiTwaiTX91MVWMo388ZihjyQMC4fbhx7xBJe7F9qWTPYgGLkn6tZBGNqPAcnNVMRATDDSwa1PaR4TC"
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
