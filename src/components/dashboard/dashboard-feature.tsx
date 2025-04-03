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
    "q5DpAkMkNFQiEVhUEE1v1XonDcTSvD6p1wVc8vXzGCSRh1CsN7t9sdrX9PjatNFpZdAib3fuax22pj5Tj3Y6Pcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TL3PGK79DbNX8NCaWRX171jvzC4xQm7q4b4CaCpLxnD3mqDJM9Xwk5fiFBs4NPfW52NSsWxRz8bbPohQ6DaFS4b",
  "key1": "5ymqLK4jFqX7iNwAXrcyX8CrFBmjT3khvt13kkNB9U3vpQXShBwsC7ZCwStkD6XA4D5neh14phLzA9xVzzWjCTCV",
  "key2": "46GhH1maMC3bVrGRL8PHytxzv3P4WNTAs6qBE3xavXgrTPLrrjSjNxwmFHx6E8ckcmR6rJ7TCrcmT9RNn3Qm5yiw",
  "key3": "3XpU2tVebj8zkAooCzWg9azDno4hZM5Fzf2CkMTZsgV92rnMLq7MbqtJg8xrSxjeCvFxTYD4vub84xN2e9Kf5B45",
  "key4": "4g8HDbugYNmMEhzd1cXfKjJE97iSCeDAWTqV3fWp7tpX9s8stEYW7dGLUxWmuByDP18cswuGitV6aqUKwHTzXPGH",
  "key5": "5EdE2mRNk8UpKvs3p87kizgHQMcPZVgWC6TvPzqbE6ZEDw3KkZE6jggdVyBCdWaMxqprBmYG2j7oVunrTAyhJ2B6",
  "key6": "4guWE6fp8UZ2cCj26nDn8jDKn2eS1Fpu3eXPCPDCjY6yJCwEXvUyDoPuLoAAYpRmGwFspJQBLuR2eTKc3671atuP",
  "key7": "4QR5m86TnQ594nKhjABYetnPiGDSogSNemZ6qpLFY4qXzyVXR4EJYUSyAQVn9fi1knQhdFQR1kk3xH7Y6Tiff9fE",
  "key8": "4kTzdZFXbjJiQmvHxmfzGSo3uwhSVC1PetgDJPzzb2EDLPiu1WWrbHmu1AhX4JaP9fDBv7k7FXYfWye4Y5V3tNGn",
  "key9": "3WYFuQPLn11KFK1Xmpk4iuRnRnRL41rs3j5s7bDSDnT6BW26A6ovFtzdEwao982DLzchxKB3kMGAu1TtejojbZUb",
  "key10": "RoAMitwGMU8AW6bvUL9pbBUvGtpBFFNimd4PdgSSGk8UAkUYs3uNjCz9WNq6rkoR39C45KSQyCF6sdpsTXfx6Jh",
  "key11": "4epjeWqMp89XU5BxSFSB8Rb72TdPkeCnERWfF1TJXgYbKcxNvGRNn9y4gAQqfzW8JNzFqQhaAyHsEvis7rkaL3QA",
  "key12": "3Ct5rRCeiPYi49GR4s1b4cZMDWTiM4JJf3yeqW9PhfADjhZYwKuM8vz1xRZLUxvf5UQFVb1rR2p4kapSscpEJwQg",
  "key13": "CdEZLRzvGmYE8Xg6N7vUbupfKhc9FMrpF3ziZHSDQwUsmYjSdFH8WLL7H91hR5hswQh47EdEMhPd8eGCcREApKj",
  "key14": "2gpy2rUTdfEG2iKGFcALokPF7tCiStwHAeeXF4R2CJqigc816hJQa3CMU9EDK7Mur8MGLbs6brHbo8AUMCRRpxxc",
  "key15": "5yX9fKs9PbnSMcefiweFa31bkRzjv7VG4JhNbWwjxPnmRu38a8oZkW3W3B4VWRF74Ce39iCf8kW6S6egF2sPeXfL",
  "key16": "5z3AVCJ3CbLV6rbxMHFU6H35ejL7hEAgZvdGWQg7qzoB4bV9XmVsbnTfjuKvK51pAhmBdAkzFEeYBsLidycfSxWX",
  "key17": "7XFr3VXs2SEHHBisXvDRFDSFCooQRV1DqFNf6Wg5DtdjmFvBthxXiEtYMSfSjQh4MfJ6ZZWuepoAxbYCSVMjsVy",
  "key18": "2pZAX41yMnAVZN3z1mnNKKySVuQFHwWuK3XwkTBRLio82bSvSeW2tG7YHwnZvQUGU9GX3ERDyqBQvwQivgngmhuh",
  "key19": "4eRNXpTszZkZUBgUmRxutbiBMCqaaLKbrFz3yee8RqsqgmbTqjXmk5a1Hv9ztUAJRgNUfdXHfUP4kiPyxkDrbdeG",
  "key20": "2qw1RMXjk3UuYbFe3yHucgyyNu5Bdx57qWMNgc7YhdJ8vWcrSjAQJxwV9RKxk8Y1FVVDaW5e1Lx5p1B3rQP2PT66",
  "key21": "fq3Hg1v3qsoBrSyEDFhGMra75qNk6abbptXcWmHewiVdSNPnpULpfzJQxVxQQBzA3FUxk6SoJ79NTuiPqXC9GG2",
  "key22": "X7R7huuz6XG6Edm7r6QryiqqqJhBrfM6GYa2F1nLcHiu2hLNNxGqgjb71p4nNBoM5qwUULPYRZKq6aQ1ZkrfQ3D",
  "key23": "66KBEKfGJ8GoXXNd8DDDBAyPkvyrn5s3HT1Ew5ioWYgtS4zMux1PmtDnJt6Cxgb9iSMw7WjxAm7cTGgYuuvyGTAb",
  "key24": "nyusoZCGnKJrnSh5H1CLDHMDNUei5ximfYiVb482NApVaUC2CYmfsRooKSbbtg589pZH2HSqJjq5FKt7Ab7wSn8",
  "key25": "3GACHV6tYP5rcuSwrT8UDVCFpZCwCc8sMoqZ7NR3V4gUCtni8231s1YfQy6nhZTH2Uzv6HoYUHhrWzkFqaJUF7SD",
  "key26": "HYuFkA4UL9JPj7vtGgZUh89f9V6pzz1GqhUxeMfuhW82hfVJPadafFwB6LiQ7REt5Nd7wTgtN377hqXhtfnu3Ao",
  "key27": "3KpKpPvm79GVUbGAeJxxYe8fbm7Fwo9Nx7WRvmoyBaccg1dWgHefpUaCwF5sJfhTWaR1USs7hNtvKWm7kwyPtP8E",
  "key28": "4rEPWhpBUmgDWNU7rNUjqShngjmoTnAeNzXotv5HwFPSy6LeBHzzU3hWXpuRSmgxVyC7TcfgTXeVEHNuv9vBFfEv",
  "key29": "3wSNPGcS6QdzuDykEmsf4jutRwft57orWg8jKuE4mLo5tuP3j6Dk42Y2aaM7g99Qvda6mRgNrsVGMeLcwfJnwhJY",
  "key30": "3uz53srEszuQzSLcgjAauMzFU9nRSmmXwSieJTQe6aiYGMjZTYq1xNZLFVe44K7rTgdpCqm4qfend8sHG3D1wKVz",
  "key31": "39yk4WHNMe87QJQ9ysgmBFnJQQgLH4qeY82A2KSaPNQCTujM9ihfuzjUhDVKpXB3RyfqBXCbxs9QAUUENXJ84kfV",
  "key32": "4E6F6s6pBmTKPBgPJtYzJ8zJqapyfMPJg4MYfUEgJbimvkGzeGHMMf6eVxccpmvg1fvrqwM25KLN7ATY8nrc8WU7"
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
