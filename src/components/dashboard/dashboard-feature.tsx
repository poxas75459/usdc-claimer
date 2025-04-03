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
    "2Tnqc42TzF1jiiXJeQrbbWJdbKdRKMu7ANjKysfs3YxdFkiZoArVdsYofyKQHU3bjSN9Skho1da4TJLoBQ9mQjs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmgsdnU9uzqPa9niAwJGRQ6qRCXEDeCEBzu4AxZCGnmqGZBdiB3wutwevPmZXPKk9MMDCUxtFSAV6TpoLNnwgT4",
  "key1": "4xojsznivb95gywPxRtqzunmAEiA6zvG7HE3RcDXt46bVDViJAfUSgqRFJHa6k14dYFakiood9iSfivzcEkCLvAB",
  "key2": "4uqUqNoHmJ6mSoh96sYQAo7XFsMLMruCWTCmT76RzxjbqDJy1egM64kASjBRvsM6318m1g36xcP4V3hySxjrh1PV",
  "key3": "571w71iMjui7N651BdNpBzzBq8i8oxndJStgQJgcU7jHKSTPbHWCS6Tk7cqSkcmMuCfrrtTK5sYVoLH21s7qTWtf",
  "key4": "3xUYmu711CZpeng1Leatk6Wvhq7PKuzYnw8g4MANxTKUhS6sbiWy7UiN1yX2MJYsTQffWj22sBxx6i9cZHZ26Zis",
  "key5": "sBfHCwJAwEXW7zqmShigL6kSD1Rd5xVwADF8YaMMVF2zD7KskMajcUEfNGuDDwzDGP4eEyaiNf4gi2PsKkZhPcB",
  "key6": "4p6veKPSzxfkiP8tPpAY1GLyRtE8Zva62xNAoLmSY6MuRt1iMxp3nTq5PD2TpwxWPxJAsDg9sxbEjkomi5mwfER",
  "key7": "2NBcNN18R8XNFtPH4CRst6LxdEbLxE2cpiBLYg727SjfhLsy1stGXBAQE8VfxwHkXFWyvVpuKiYT8CmCqtCdebXr",
  "key8": "3SGWnjwsdJwZRXfQoL5XSZFtvy6gryDHMfLWYp2kz5T2yy5jhmMZwAHLhrshPyHujCyiYht3v6e5dAG17NZrxF46",
  "key9": "4N1mPyzed6PVRhvDxT9a2RDUzxqFKui5TyFe1SNKPhoPDvp76L9vcpTRDpgRPPufienY2dri5PZxV3dkeAkgmGA5",
  "key10": "9ddhAvw3rxR89vTAeFLJi5XDgM7gyC6ZkDpYhKwYCkSCcMSYtm3ZbLGLgdDfFSVYo8UADPRbdxGYq9QsdMNNt8Y",
  "key11": "3YRCwoEHK2AYnVu4mKoequy5pWsvN3DJTCDVgzkxQk524A4gmW4iW8EqzZCfD62PScYvnGm3Mz2fGTUpffHXUpeh",
  "key12": "56HCiAbp8QJEZLfc6o48hgWXBtiffR7xTZCMwXy45hsyXirCAMLmsRA1qBodkWQdFHeQfm14e9pUtg9A1JVYAVjG",
  "key13": "5Vj8zyswK3QZXc2ttNEzWsXw33sSE3BV6gQQn3kpD9uZJjpVpvjbwRW82Dw6xv3Yw74RqQjd2ivEZ3wBPYhP6CfM",
  "key14": "5RFRQCvRFSLT8UVQzxh39zwJ9xrsLMofATYxsMw48eNVPSPx4ca7sUNPYLDSBoWezD8rVFrFko8392mNJW4unJyZ",
  "key15": "3Ua5UyRMDuuZDSUqKtDxonySeb5DS8HF9Nt59MaRfHxQH2BAHEBrKP7gdZPRir16p1rM3YR6suN3WwD5cdsWhSNu",
  "key16": "3bVqnqiPWwSNw1fGB7xVrKuPJBKwPDYKN6XFebcwexNBGx7BEKsHD4tvVJ2u59BaeBpyH4D9R3crFFwaJnLVsaTv",
  "key17": "41U8L5Z21G4dCAeq2zkg5AJgarfFEYE2UmjjVa44jD7Hgo67C77eLVGjMHP9WhGsj5kMsUHMYv5oKwRpwRrfMdHk",
  "key18": "4YZKCjrSxdduwchTWkLBBfnTxQB2tqYLZePrsqr6bmTNk1D5jPGvgbmffZRFsB696Rj9GtsdDkyS7J44gVN3JSAw",
  "key19": "2acXXyHepoYU747mYpW7tL7ytYDud1RrFQCinRHEttqRHVaC3xVjub625gieu2zu3SDmjHukWfTTPk293Fg3wVfP",
  "key20": "5MWUfHsV1SPUEbkqseLHXkK3mGECRXAw4wk1cmySsQUGd3auVk3NwW75rm6CMHgrNXGxx9Jo2m6Y3UWM3fUuR8wT",
  "key21": "313Ym56niJWAjJQ67ffQraJMxaevUSe4jNLFWXQvxsE8e4f2fkB2ZUN745ZZw3zYVFaro2XXdK6pYc7Kb5zYB1QB",
  "key22": "ZZEQt4jpvY3EkU4rPtBUkPJmrhuBFpZ9nyvHR1vdyHbc8Yj8vpn8uyvEHwiNSAm47j9aCnho1eNs83T5dRr6iht",
  "key23": "3FMm6nC5bLK5iq6BbCrXVd5F47QaTg4ePJGjZFsnPg289NfouX5GT3pvRLF6MEUCzSTeGCMHZjzPkLFPyfPrDJ7D",
  "key24": "25EzfoDLY3M3Ff1ZK2j9UQ6tjhqi95BgCgDsdx4dX36sHGfU3y5p8hJpVN7LHB2CaEENZCRJTbRmkVwcVj5Qs4zN",
  "key25": "2x2xp7rQr12RBQW4R32PM4K4uLbuZukeYj2CP9RXpddGx2HEyiPapKozKNLefVB4apGVNiapk7jg6ou6sfF5dD8G",
  "key26": "2Z3Lbg39QVa4e8XT3UpHWxU9itgz1oyYsDecywG8KBoNjGeN7ecDzinYuBsh4C8CnJJhnsX1kqdCFP2y2DKAUgJ3",
  "key27": "2qf7W9AQvQLLPXVkYPwqLbMoekeq16rQ8uR97GCknvRJ5VRihqyqwsbXuq5RqepJhs67TaNobMRCc8Nbe8V3unMH",
  "key28": "63Zk3xpmVG3fojKedMo8TprHy7nDfkRiMKbAwxYdXNf42QF9n9XzvKHsxk4XvGQLEnMyHEbHby4NjQ2drvCeEEqo",
  "key29": "4FxKMYA9RQ9BDA5EVFWbHEc8XQXBQGBpVZ46heaxARAfTNgfoQ7CkffqUnfu8zx1cxRGK54KXTECtmvrbYMCfeN9",
  "key30": "4YUaofDgScnopyyTR881HmuKPgHVEFeZngKYftkYJsKRPw39Rb5zLckkXe1NfsZdb4eZUW3zWDPRAZh6ewFGPpid",
  "key31": "PJAeerDriUSH2XPv8zWDoqVSykLHjuQq9WsiK2xKPDhEM9NVxeEYy3CBweRJTk7wjR47MYj1zeU79MtkHp2GTz5",
  "key32": "BzLTfVTXa6My8iEdqbtrAZ9vACQZNvieUsdJDLUvMaz4TydvreWmfxNDQUny1PrMfUhHVi9coRjUVcReqSzcfbF",
  "key33": "4ye57zJ815d4wW7RhRq3pzVCbpY4tpVE5XDxLJhSSktLapSarDaciDasfpvmwmXAmQ5s8ZhfqNyqkcJ2rorKaVte",
  "key34": "4DJ3mxfE7XFjvVi4mpsL2SfP9tmxUm3TaEhEuY5fdcjaKe6oBVDKkTx7htLqw5NTpyTRjCfo4jzSxKZW21Q4ZZvg",
  "key35": "3896hJgRXnji9VeMqupZgeAMpr4gAbM4dVfY8GpZrZvbD5YKyAihrCqvLCVv6vMkgPVtbLZ5A9woY1ARzPCa224z",
  "key36": "5sRwiaYkG88cu3hDiPK8wd37G1roNGcU58JubxcSVUeQQuWr9oPLTEvRFW11a46w8qowikTp8ajPSfwmXRe3nXzz",
  "key37": "eayQVBeW1odePdmvULfGP2cSbLMuuY53jCrjwY7jijjQPqAD1gT3nejWfWcm38vDFqxrytJLXneXWiyaAgVJyPh",
  "key38": "4N5jzku8DVodU4DC59mLHtGRyUaK3HqbA17Z6RbJAw1X1pgdaevKsFvRyne6trGsMN5Sc1QM6tbf1jADZ43tNBWe",
  "key39": "5nJjvtMxEsgJYDpXDJew4JiZZnXNvqPktsBxKvajupkgbBQtPSjxN6Vqp6CaaawMmU1Sk1vf7vaq8EjZBC8P4pdo",
  "key40": "F8sGEwVfxwjzfovp5UtM2aVvZLUaCK6efor33H73qeZhGdc6JNU5gzkcWGXW3WbhxdWm64TcaZndUGz3QsHQAJ5",
  "key41": "2rUzSR9uX3idZEQnTYGbg3749wznpdNhbYmQd89KVFEacLDk1YmCRv9DXusyLT8rzJntwZVvDghM7Xcf9ikEofLe",
  "key42": "4h5MZFKyaTAZr77tLAVgdrmB3Sc6UjYoLy348QqQ2VBeJeD3SoU98gdkB94bcQ8foeeKe5kZauUDkc4HsxRCbgbY",
  "key43": "4u31wwRAkTfE1MSsvsjt2b4X6com6D4eMZcEP8jEJaSDDVXJaBhGi1H3kqhb7WjCDZ9Nb99BqfZWk5o7Li8LaCGz",
  "key44": "AjHhBK2T4iShoqks74Cev6L1dtqTP5SeAFrGZgYy9wqthrimBJnDTNeD4M7zrCJHgjKKyydhyx6wHEJNHfgtPEY",
  "key45": "2RAa4hfwcxM2t4ZbNoC5Nowa1xPz7eDhT2QHbhFofo4YztMikPvyxXXqj3ULrUYN8PDwvhx1GnK5hh232JjtTAtX",
  "key46": "5WtsPbd4WVTcaYDhDqT6QW21ovLrRCudF8KWuHWnifUVWGFQRpnNkRKEZEJb6th6e7buxh7YV4pQ7t4ptmoyFdZ8"
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
