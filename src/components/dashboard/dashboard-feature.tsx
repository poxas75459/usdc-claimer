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
    "3uDgdvPptVNHyx7WSnv6YBBxtREoPVAPTk48WV1Wm54FzNXML3z6YFbcVcTvquGN7GC8CuPWMN1rX2NUSjUFjriM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBV2EHX7CaR169nscJY6kWwnfEZCEbXvxa49R99hNUREb6sLHHEoCFr38iRY8YZTW6eA8qVzsrw9zSGdB7uTWgq",
  "key1": "5z2zn7yzz8tf4Naw4mxP6Af76QAh8quguAaatVNuWWW5vXDGcwbULBeXh3E5PkxK8qDX7wneEF8xHyQ6Fn9oHcGE",
  "key2": "sFknsSbPfA8RdgDGv1iX3erDCD86JyyBDEfniwSuz8W5fJ8U6ocD9pdJ5DsPffEqjmq3EqGi8141v14ncmfRR5z",
  "key3": "5S4ZPapx16bXG2VGdXnFVtKAs5kCXCkxF1kf8QFZ2KgJ4UGj6C7MNz8XkQmcZsJiKKyikLEi67Gj96EixWTVVFCf",
  "key4": "4KNsNwy61DFRL449PWzSgXqdbJSmZH8vKzSzfua1grLQ19q5E5AvwhAyW39sALiRUGWmPadti7Uree8hebukh8nG",
  "key5": "5WzseSRc2HBu9j8ETyRByuMsVviZa1YJ8Kqcub9yMHn4E4SZmBe8BLS1GskeJWA4c9yQhSBhTDAzsbeUc2q1Y3v2",
  "key6": "43FwfEfMmB5sGA35s3tzRJgRm9gdxKfd1x3jRMrabvpGC4reA6NHihF3CpmYZb3oPGUR3gFoUZKUcK373sqLStFT",
  "key7": "2PJs9kXwYKn9BmszTF1tB2Hmri2m8S8jovFK87qKACK1CNwMBq8z1Rb4LDZNsobZ3pFutbnXEUKmvneq4hFhyXjL",
  "key8": "5KKr6GezH51tuytHJ9TidYPDARmTjqu5CFRQPLYZ8uyH3NhaHHREtCWqktkXCYAnZSHGWPPKWUYms3WTt8Wc1J5V",
  "key9": "2xkJ54pBX6uhcp2x315wXMV9V4TsFqEMquDACtVh5kSeX6saG9wTzX61cTPzMKZVSbCELB1adsaH9FiarFwwxin6",
  "key10": "WaDYdnHKUJmc2NfQ7ciHjru5kv24EvbM5gAPfB756Mf1pWeA9iDViedL3cBxsvQySSRFKv9Gf5DHf6baf4sPfXP",
  "key11": "3QUqwekNNDaCuFAuXzQsFrVEvc5Rt2cKZ7puJHyavT4dj9WUgN1cGuSgSoMQKqcodYF7PWRLBf9J27PvbUjt6GFj",
  "key12": "4axUXB6ysdsDdw94NNZ4sXK71kceKPEXG8wRGzHpHtmeHeYSNruDPXCV6C6U7B9w4DuGKRqynzRnm5ncafPsL3eg",
  "key13": "5SpZhvFww6UdzFp6esd2Fmx62tiJ4YjmmQPiG6ZoYTghVFTAxCeyD9Yp8FjstLT2cmKSDZDxATkkgtZHEHwYtF7v",
  "key14": "3Hoz1ZY1d1p2D2t7Wd96hGE45GWD4G3gEhJrpxR5d1tn9BE7bWAnLk28B9fUwKZB4xYVrsDrFoz5vmPYLvfiywDw",
  "key15": "2p4adatm55oMXHYoisa4sedKCnwimTJuN3AXiVRLavm6dFQG8AnYYQ5HZUiYLEyfw8bVagXuv2gukekwMCWuFdm6",
  "key16": "5mGoPNr7G67N1kNQVR35CEUuUMZWnBTk4nZDiB1Aiqv7RfH3KzMV3F7cAuJLnZdKR5tVxt5D5ASSzehMRRMLV5FS",
  "key17": "2mHQmKBY1y4pJK2na8mTr26jHsXd6rR87XExid5Rew3j1Sfn5zzQVT4W6Kt1p6Bx5K9kzw8JzEXNRgdrdtwc5irA",
  "key18": "5BrLsRf53wVrg4uN9RBy6gmfw7PPhFV77b4hDgSvzo684VpXLdosgAEgF6vknPqLKDoFwV2q1dd3nix6gWqohdgf",
  "key19": "3qaEYgJJ2RULzXWauHHLNrrgAL7Yw46ytYYVQqs4TA2Khqr7A3u9fsBJGNpJbp5E7EnU83dXg3PGxbKzAeENRynk",
  "key20": "5zYNTXoVaugeHwSCvq5Beb9uFAAYkZgSDjWdmkv1TvL3RnmMjQrs5ohaYesoFAwjjE7x7hF9yT2TjUouCCZwNpAM",
  "key21": "QM69z3gpdFWGpGhcP6ezRaxZeoZm4r8nuww4hXj21FZ4e45TEE9rtwSavURqheL82TznTMJ1v1XVgcVTwfDpQpq",
  "key22": "4sCSYeLU3mSdkiexiuWoingWT3eMuJMDDXaULNYyrvYrcLZGQnbhLBdVTyYMX3SYogXi2p5fYpSSQJiPX1k4gywf",
  "key23": "3aja2uHzfUifCPbau3CKM2vNXH6kThWBKDSHrW262vQLehunNpTcM4VrZ5CuExpwBpCCWtJtgZw5h9s9mHeCd3e5",
  "key24": "YyoDNd5HSX7pfvn8PT6Hpi4G8fYHGtuQkkvQbWDayEL3JV9sk69RQbaB5SnCuDSbppNFSyRcuWaG1LCPSF83r67",
  "key25": "2Q8YE27pGUefJoWVsTMLFVyDywvmP9JQLD3awMPj2K8uWeU4p7wF8u2pZNwB1HANnBDDjaQkFHHzTeRyNLkZWD71",
  "key26": "3RhwQRirk5zxdKWzTGS7PwjynrUJnYro7obN6JVQgjmffTi4k5xVcvdMytUPG36Xzkjyc6VdPgjxg3YPcaiRJUWB",
  "key27": "2PfjhwLqMgzZJKBgtkvMN6ynL7URHVn3ZfeSyfucz6ux2nwWEemRAV19oSRKfXoj7yNRMdLTakHTSBTYzQmUMXxB",
  "key28": "2nMqgCWVsEeAT3mK1NhaYyKf7C8p9ibCqwd4FCEzGdjvf5mBoxCiQdYngREdQ34TbhnASFWdcrmSkS6rKAi7q2vh"
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
