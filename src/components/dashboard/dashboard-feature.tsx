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
    "3cSCx5jyqBz5gRptR6DommJk6kh2r9N9YtcyzitDk4nv7VLjoRkroVj7yu3mwTbJL37ykzwEdcyi6hJ92ytYys2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44GVW4WfvCmBZbNGaasjzaS6Ps8ygA1h5BtrYZqKJnszFxToztwST216aBZsAV8Wm2zLG3Bawu7D6humDEWqfZdF",
  "key1": "MmMsPuunMQq9Dcw7z1vnPg2CjVbnKy9ZeXL1RRrHdu9jiqjQWzMqRyNqDM3NgqvFKDPnCTeRgb8bmseZjJLRAuv",
  "key2": "4SvnR5s94vgPi6AGoDHJr9sYW7X4Y61gapEFBaV5uKKwhXMYRbmujGhJuKUTgusbaZJBvuAAxz4wR3hfNdRo4gsW",
  "key3": "cy17kLx84aDGHaqwD8gBN1F4MvyQNMzhQM8auasY1VQt1ZiEeWAY8FjD84cXD7md1NYQksyuJe7kd6JjcocLRXS",
  "key4": "2aagXayDGA5DtPbJLdKYLxZs4jHRnx4CWPf97ybgZQYKtL5gtqpXMb9QDFRsV4gCuRwozdupUx49KYKoSvzqzNft",
  "key5": "4KRo7MfbbA4DYE5FSneuuh1yTcqEV9YvssZj5WS7PVdsWdyqQpJPtNHoyhcHimyUjuN11hDg8DuVc2erQZwhmP6B",
  "key6": "3fm9NvtHed9xmxadf4xwFQHUCyEfcy3evFq8dVExB8n4meM6bcx3EE5adijooBZnJk3afqbgkpg96XnbmggyMVRD",
  "key7": "5j8jYeTiAgNLk5LJcJd6RiGTmApFgFFDnB5PwfxxuFKKcyGxTSz6gCbr2j94MxoP9S7YVXjYY7gBCJB7QAvJuecG",
  "key8": "Qp1KhET2NGHnFhgZ2p3DsaKrTdxCf5aNznzCCGY3UyJ6x1VCjaUg5CxkrLzYL8LgjLrtMeXB74LQW9VyiBPngn3",
  "key9": "4358zJkLwpfwodxVsqxrh5DrWe34YgKJff9dRQYxd3c6ph91BpzWsBGSncDhEv4zq8YChf1JVZkN8NnzhCuEWEhb",
  "key10": "4tGSXyLCnD2qGUuo6MToj4SannYLP4bdbNY2gmfA6yBvu3e7mGrLru5F8VHgYkDVUW6LqLfsWVajCc3csdQ7EQiP",
  "key11": "3KwzrpXcM28FYBYuVH8Mu9WU6aW3J3qLFd2rkSQN7xr18Y6Uem8mcLZFouucwzv2PfNBZ9KdEpzMTmQ2VatEsJuu",
  "key12": "44W2UTAg2NczQWBiJ7AF4JMBrdhqWDdrmMrikJrF2j7kVmm6CdyPZYvBbt6bnSsjA9X7TZnJEF4f3QWgHz76WGw8",
  "key13": "4JaXdPShA1wWWXiU8hJYCNJAihgYs46vPgHsJfaiARdsdLoerGV72j2ZRCzWEvXBMRE5kJJiH2AdB5w9gLvTKu67",
  "key14": "2HsApD3TGy4wQ5MtsCayZL5KfNW72W6WB3hoKkwm7UrqDo3oWMgdivf9mBNynUfZVGFstYVbAPaXAxVsoMjSxRor",
  "key15": "5mUDkM9MjTKkXypiWSEvyYixC3ezThP9eB4F75TcEgKoQAi1oAHmiUQRRE5RJp8Jjjq9nnsbzDbUwVSx5HRAGkeJ",
  "key16": "2CtiWWHJNQLT6B1Zb7UtzbEufjaBeDGzqs1iwPfNmmnDQKj7DnZ2TvEEkr6KjEVFh28g8dfderWnqwrff63AgJ89",
  "key17": "3Nbn46exydoYb2eFi7pA1vcoo8apZ5PFM6eYSn7ihWevv39k4m4UfDNL6wUvWZh6gnNrvWh7vHThaKRRHGZNauQV",
  "key18": "62dvmrp6VsCj6RMEtzfcR9zkiLBMLqcX3LKjjCRKxHakkhqtvxEcKcSGkh7CVdpg2F7XrvCNDhziKynity2idbY2",
  "key19": "5xeAEYMteVwJEoib6EiKc3Dc3kunivnoW6vDor9vvHwRRcASfeswQULQfUjx27XPW2vJVhCN7V6aWaSUzjfcbnNY",
  "key20": "5LF6cWX7TduX31pGUpxeCnefE4QukAzAPqFf6iAAnc8GPJvcgedDV8dkxFcFZ5LjFH7MB9MXUyxhYQh7zdmw8Ed8",
  "key21": "2LiWkkYCdG2mxGEHtdbvvfxfSHMduZEXUGFLNaXCpYVWWpWDyRXX48BEQfKMgqvS6m6Qxfa28MgRQEMnfx4SiMSZ",
  "key22": "5LoBMBnyqZsSs99eMkNRaJAV91he9zz3oFWwxc1TtQrNrNBjneeeUdvrDNC8uaaTxWXQWpSzZhYCTnw9GgHt9jfS",
  "key23": "5Z7jDokPK8sur2a8G75kX2Y1nYcHjVTGpxySrtjg72xeLCdc1cemAryJgYnS2dMcEHxpPKuDKWx9p5xh1aYQNq8t",
  "key24": "qZwiDteAcBuEBrRiUZsnYah1cgRKLoS3FUMcQZp8w1MdGemVnudzho857NbGYfx2WbMPtxDWPM5Qfj7rbryCvNe",
  "key25": "4eRg7xHrbVH7byszzeRrzX4HHgvfodViaVqfSB3EBRXetomzeNnrfmURN4n4HmxeW1dZdRe4ZGkLcmQuphsQUvo9",
  "key26": "2YzQQ73qPTjTQoHCW2m1ovZTtRjqwKCC7JPp4aga7agr5F2s9P8wvwBv6QoEqJxWFp9GanzuvvopyP5zMU381fRD",
  "key27": "32M4mnKVYf78UCKGwXwc6F3AGMVpbkHgV9ShsYQqseYfVz9K4KYmkoRNz64U98pDYZqVCphUthvEdqzXqjxwXqeC",
  "key28": "43ySmjXQnmHD2fTwKJ4GqMApcB83mFZVGk8qd5LEuDWUPxF8cKHYEr4sMcdQqHaJhqeQu8xLyZT7udAxFFRDcnG2",
  "key29": "2JjZQyLp7uJgibxbyjstQiUVcBdYSqRP8trkrWcXksCnRTQAjpu7RgeEcqUm5cqY7AYH9mZhj8QLq5grqKhRtDqD",
  "key30": "4kHYiatGRB7XLvN5vxhTP6D2ckkFu5WK2rgS6NAL2dTLNku3hvtESkHrKPXPdUHZtUmSE8zKgrMw3ZUvs8FGMvSb"
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
