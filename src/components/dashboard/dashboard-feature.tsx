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
    "2NhT49zQeL5VKcSMGcWCDfuPw2TXrMhYmYjndLiQg97Tv16fJBNCwyd2UF2MZtFyT41rid9tJShvXJ75oNPFosFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kxKVfieyU3Yg3mMHJmPDZdqjoe1sKbxjefjQTHUsVoFioJ8ePYkDEFqT12mxj8cfdZXicT9utqjrq4R91dNR8ke",
  "key1": "3LFS5pGPQZn8ArrhGPPMMmvg2x4Pp3UpfqptyR3cbz2nG4umQYSCgAXkJxbKZLNvdKXf32susMcCiztRSCWGd39A",
  "key2": "qUNa6YuaSgTuYSni1kfNa1ZeXzbSEFQjVCLRPujAa1eiab913iYuii4TBycC7ypKoHkyBLF1eLC3kvqVDGippNE",
  "key3": "4aNk3Ptr7F4K7nzCDZABopkwUcsNN9TcZUcwQNvr1BuK8HX93CjTuRSit1RJzpfXsSwM7c8gB6TzGubooLxZ4XBN",
  "key4": "ZnnREGwpH3npoY9Hxjx1TtqfUbXjiN3KrLAPjxB8eHSK8bwk9EHUxEKyzuXugcmCdrP7fxuthvuJdafDd8yNvhW",
  "key5": "3aAAkgFAug2cDDUEM34sWhTXmFS54CsfSSiKU4QvkfHXpZvG1Qc6HohPs1AuoeqMaLLQi7MzFSEUVeKxiMMWXF1u",
  "key6": "gzhJePggkBqaYsxAJHVVgdqH9EUTakhX68q43Eb8qkY9XKFrxGw9S8LjqF1b5nTWMxjkAoGADfcLTq5U8oRNYVg",
  "key7": "3HYsnoYd42x6Fsk75Cvjk1iBM9eCk66ABdSydML7zfLzUZ9wSzy5wtRQGPMEU2FxJkfdwGr7KEjQrfz63vbg4ZTN",
  "key8": "4ddXMu1SoA2wabc6JZswR561JLyUyBBKju52mpjs5t6cbRSkieyj5Y3S3ymZ1JiTv3nnyn2G52QGg72ZGfBz8S2H",
  "key9": "hdHCXeG7kNbPYb5ByZJE6x9UkMgofC5m7zmxDAr2a67por2YnkxYKNzBbRwctQ9uF7LinfN4PWV83xoAWPr5YNj",
  "key10": "XFRyMQ92dJCZwLDuv5Mm3D35UAwgQrqP3xHJCSg5mnq74rWntYiVetR1gEcPv3JtzCLmQ8mwr58tWm6SyDAKmtu",
  "key11": "5smcHTvMrvVgCiavYhJyvfUB16nE7trUUM892wnYat3bHynL447g4mgFPkhNJo5c3K4ZNzSzELjts4QVmJQBVvfd",
  "key12": "mJ9o8CsARh1fFkEpLY4Miv4sWFCLQquyJx8uDiHyKCm78tD9Lst5fSPXG3whMXLwpUkfkL2GdAbGcsKwdPdCjEN",
  "key13": "4VU3By7kSiGkGiJUkjpNe1LsYJ8tFXxGTmvM3245PugBZ9H6XzXa8WTLEG2kxyyVrkKh2ZMNa2bMpsNKY8sLc4qx",
  "key14": "4tN5Qv631dhpkj9noxfLie97gmF5RvDxNGhxvm3gjcHcjpt3moeD8dLDGjpnomVNLsvC3AqonGoGMzg2csqtnY3E",
  "key15": "2bgyTmvXB336hFyuaH3HNpTTRLQhzuSJXjrn3asAM5EaxdLWkH3xgkLU7oG4Ps3oTuYVWyAdr9JcSqZ1UGugJ25e",
  "key16": "2vzZZMJYGWXDVWuLcj5tAfe545bnGTSDMj8KobZZYZfTnFy6anGBj35WEbPyhPJ2ambqdizJNmhuVhvgJLBF8vA5",
  "key17": "6Ryuaa7BmUUQ5X7rhiWXPXBSzqNRpWN6qPnozh1TC5hNUAigsBqQ392nTonbw2hajh4g61w7yv6QF2gXG6cUAnH",
  "key18": "3iBfgvu5K7XUiKUiAaNze4bttN85vdWG2L2KAz1jfo9iqy1gqS32CWbWwE2eUqwvqp8RhpraJdHtKEq2YUgKPT2j",
  "key19": "63QJsztoyM6Pbd4LuTDPr2Ziywo5r7Uge77rSP3WnHqyRvjzoarDEqRLZEiEmNiiKWBQRwaiKrF3UmW33AWbqm5v",
  "key20": "2ycXeN2EK8yJk1AAGJ4ncUbhwgfximHPZnTpQskMpCQwP2ZahdQp1wyMSDmzWo8faXB7XNsnahfJMxSEL59duXEp",
  "key21": "2hCpMAdFqw91MreNy67VLdwTdC2HSZgg9c3N1nCcntXydDTQscuN5AvRmsQRVYcPfqshKEUXbYXBwKJ2JTA5C8Bp",
  "key22": "h89fj435DVs6ukiTDBpfczMGTFqvsrFKyNh8WWZq1nzKygheMS7Lzkf845gV3TxdqncBRCPX92tDMXoQnYmVah5",
  "key23": "2z7nC5F7D47QvAttgSZsChKzdiWNtW1KEYGW8pWfs8PbD3RvBfkvRvQfwoKH397CPbj2TPUm1aSDE5LRT26fCiBV",
  "key24": "2Zdg9XY7FESrL9oeNiAWmZRQmCjYxWERrBtJJTzwgiPmapz6f7PDxAnUV3Wgmyp3iWV5QMurfDPNJ62wUTBg8cJU",
  "key25": "3ZNJGz3njNSJLKoadPyefZL5ZhvBeVchjkrmscEnEPt9vhFuZnwcfP85JvodB66fu3ZWvR3x87ae6aoUxQtbbSU8",
  "key26": "5qweQVGzBVeJtLmqaC7Kut51fqm7UuUFGGwWonmKocDeFaFKwEM3aFettDq7Tyuj6FVtzcqgcu7khTQBNG4Bg6mb",
  "key27": "beW7YGBCpBiC6iCzKqwCbJpd6LuxeENUJhrr4EcFpYrRv1UBKcv82jG71w8XAbQSewjWJQarDFMP3MWksUeSd8B",
  "key28": "2UUEQY9ziteFtULEVgNBzuH5YdzHpoLBYsiT4ZkdUuMXMKtsVGzmUFr8eVyrLkvjbJx2ftWJciqLAbRmEgMkA1Zm",
  "key29": "2w2xRyyiA6SQQFiE3JrRsZXLPdLbcmSGYSTdC3QNrhHAZB1YixUNCaiFnjDbzufM5XwK5gHnYfJgnZSETZbKwTjS",
  "key30": "3uGAe89qUTfWaUs6BEnC5Bh5GbZahvKy4hBHSHD3cnr3oG8Gp3KeZ9AJ6uydU8tJd6fg5eApuYB7TVWCXbryqkP1",
  "key31": "3H1d2NwvPzADEzoNpKeFyZgVjLTtBz21TVK7CKUKjgPRTaAL7wKC5d3yQG5iEsBTNvdZdCDSoacd1XAzLeh8rZtu",
  "key32": "636T234nPX9QBWzhPiE3PWzntub7srWAdwh1PoTa5Ddee3iah2uDtXmfHPygdi1vJSbsX8eizcpjC9vS2xG92bG5",
  "key33": "niPrK2utJqQv9Qi9FRA2hqaZVaTkHLL54BuGqx9TuVw9v6CdKkx3EnRXNEDNF37dGh38TsG5Uni5NEVH4MX3Lrn",
  "key34": "5ZZtTNs4xJnpLPrL22wu99BA1La1KH7t7bFJBGse9mkRBqGKtcjGyFPJK5JnGAprJMijSBsFE5vgSkmEZmc8t6Fd",
  "key35": "63uUHbBzrJhuHx2EL7d38NPSF3Wkmhq3r5TJQDCBTSrXgJ7jAitgtGsZX4MYm7oH64bNcT2zafXvn8G237sKg4jB",
  "key36": "bneWTSu1q2K2U9q7tLzAoQwt3XDa6TVaMMf7FQd5dyYQEZRRsu7Rw3viWXSX4wdoqEhFWKipTgGpiHbLNLNeqaz",
  "key37": "m6FQzs4MZfGPqn1xRTkT77BuGABSTfJr6vTKyB2eHAWF6zsXwV3gPLPHWqAxM2pjvwpgm1z4RDmXXL5HsVNkWWE",
  "key38": "3pfSTELD9yHdxxr1X37Zx2SLivaNSMmNCn3MCuf86KM9UK9CQeNnX7vsLX9YyWg5vbeHos6fDHoxsi7goqGrwVwb",
  "key39": "Q44H6gu3LJeMruDwrT3keb5dMkbJZrSWAeZdYgyyW6FjxEV6QywCGenWuwo2y9kDkNXG1w4zcbD8uabWdhymsXK",
  "key40": "5E24bDejCJSDCSarjWWmss9Vjiq1oaL2LZNA4sBVBt1YHsd1nSFHCwmAygQ9hs3hpiaGBUtFShnSDBZkVShWJ6a7"
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
