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
    "t1sYSNKfz5Wi4ioMxJdR9wE1TFguRk76aykLLcnwcFTmoMkW1eSEyUgBVJP81BzBU7yfF3noyAfFQRMztEjtN9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTcqxDHAxpfvkfAH48ex9ZPtrhANi2RcEmjPSjJ3XaxGy4XcTtGkyqLicA1kx63pRLogXoC5xf7m6yT96ifX1fG",
  "key1": "3rSUffLYT53t5Xu5CGcQjp9Cf2G4SCVXpx5MBhsUjj5w1LTHzeAtaTHxoLaiECQCrmm6Y2mNvLvA7xfQUkfRdizX",
  "key2": "G9VKZVMpZD5sv8wCrjxJBCW3upLwp7AkK6VUGkZxfnnGMxmVRg8TfmGciq2NPVKTwW6M92xMaKiuKpCXWcTUXtZ",
  "key3": "4VXmkmBJmcDCij4JFc3BYGn2KSq3WGGrXZJd5K2ahbcPk2ir73pRUgdX5SYyZn9hGitQhWdPLTRQv7d3Uu6aA6Lj",
  "key4": "3PCATuqVVpLhVhd47tLqUgdpd1StRHDXjc9HDkyFo3P9dWQnC2PpyNvG2DNQQ1fYXZMH2BDLCDLpKuLykTXcZ2Ce",
  "key5": "5dBLcpYz6wUR776p1QKxkR7PN4EG89eoArKnWCYxmYHz3H3RmkEgj84dEVMpdT4HoBJRjMcVLqsj7dNBVtfKJJ87",
  "key6": "5pjbgzFzCMaZadNaKy52E4Lcsb3D4JjrzBkKdXzb8proD7WtrfoFYuGqTJWU87DcmiQVLyfYTEmGzbxN9c24urYd",
  "key7": "F2kMKyDUDZaSgoo8anfq6MMNpd79UJ6Tm6v4VsLm2SavwrHed5tiTyhanqrZiXeCbdbGNcysVp1edC9CQQDaawX",
  "key8": "25Na227Gq95Aw4rM2cK5nUdWHz5SA15p3AZCcuoefP7jhjyR4f5Z7CZpieNQv2ThPnzQVsj9ysdoAkFWiw8HhQRp",
  "key9": "3sjoJJaoiJg7eTm57uWy6ufPquRjkegCR71T4nRMUGahPzMN2w7JRgf912rHsmvFcLxZnJkMBNNYc2FzAarEWfyp",
  "key10": "4mLpC6Dy9iXboUReZkgLX9A1C5Lu5YFKSHqLCyyHLFCn4yjgv2QGZFgux8Hyi6MNwcF11gpWiG3onF2N9EQcTzMr",
  "key11": "4gax4WbcCWYMJyoufiqZuGHbXsRvqvh1JovXk2VDL55F5d2XwrPhngjpxx1DPKyijk1UgbaAdr1VeBhxQLgVDLDz",
  "key12": "5rJTYYYy3RnkR8n3QpTNXYpp6QeLouBtDSAWuFSGRUZuk5P2itfJYE3GwW333fLhNvBRsDoi9eRCGroHLyGe8AJj",
  "key13": "4vywZhjP2B9Tvpe49JzBnWTdfw5bmVwFTfJaDqMyUMPKjciL1ohDPjx3wbsPSFvKcmTnG6z1g93qEvre7GqtqQaY",
  "key14": "22oCQtLK7GPkwcvJYEXDy5cToxgJQrEeDzzhduQFWVdEfQBALa5G2mMCHQMrQE9n7JwxUo38Q6jcpb5rugukPHXY",
  "key15": "N1rNqC4j2w7ZhJ9PUAM3XCRGb1dJQ1XhNwfMwQ7GxBpcgXH6XKvMhXyqoy1U4he2pGoxAmfvkCVrbzWkKKh8CdF",
  "key16": "sdtikL5hyBSvDKTuhmRtFPihw2Dcmr94QD3Q9RxXsG72kPDDZ2hnhsVD1B4aMCeFzJopKsjfGhnPhgjpbmG3xQu",
  "key17": "JCMVXn3kfVjJvdvK1eJDePKJmhCfrPezX5ysf6PQM5gXCHVFSdcr1mR6jnBDGFMX4sHDJk2zo2DPjEVFtE3mLpZ",
  "key18": "2xabn1pM2hM36isKK3Zk8er95pjmVs5WiJuK9ZiTkvz9qQZm6sP4YEW8gXU8DxLofaG9BsDukpKm4UrkS4jXL6ff",
  "key19": "4X4GY9eVELaXb1TEofSDBQXGj5pNFF9SCRcR3RPfxG3y4AmDBCLneGeGbtkGTnjxjmjEdjS7udEdXTveLGZ25dJu",
  "key20": "xuYUjCLAJM9VH5dWYTSwYWV9DbzVeoDPEvgpcqhmirjjFmAjjJLhZ7RfZ3dYuVL88QFJvMZFA6pAkJLDMUmGGwd",
  "key21": "5fDG2vs8yPeeBCkPUcb4TfXVXNuvLC4W7YAe9y6HGnrbUFmXwHfMrUFcfyJyHHLqdPgMWS9gjnEeZ9seVutoSsVE",
  "key22": "2N99JiF3Sw9k4KchKBgT4qgKK4FcSmifwDcPsoNpjfUFQYgK4t8pUS34Y3RS8L8Gdgpc8RCxG77fUxAacjDq4czo",
  "key23": "4qzuFYxwfaomiwTwhta4jZrgfwH8vcUxsjSGuankovfxX96hjWf8wbBdDGLAU8iCcSecdWA9p4wHz2vMWAEu98xQ",
  "key24": "SP8ABrduRthQNNVZtzQ9D9rt4QUQ5Z4RNiaLdsPtk91RMwjBwurWFmyft46joiqCSYjABVRLHPSYRwdBqUFaSNr",
  "key25": "dtHBuYgD4V61J37QRX2gA7sRYN1dLGe9EFLVWcyDoscyzsTdaAZAnRzbJ2SLUzm3GMKWLxYZBdDnqm9YYF33saJ",
  "key26": "2TKF6yWL9XDXYS4wZwe8EhV2onmvzAHT7NBUmkE654k7dHvSb1VcJNfzDaFjFmZPnLWNm7eZH2HsaHx4GE5aG8uw",
  "key27": "V1EC4Az3bWaMcDdY3XhbvK3L9JvP8WeW6DAgDoVgTqr3jR7H2NJCe1npjEguQ5mYuSoxQpiVg16P2aGwbyL8ZH6",
  "key28": "P4q2vRtXLfk7CprRBUzPNeKbNjFaBDh9QEZyJCpA8jBbtrYWwJSE8YjmkTEj17oAcson1SALAUSdePiBLEFh264",
  "key29": "5WhDtEmedWgketQ8Jj4xYUseaGsRJiptRV8b8Sry7WV9Amaa3LwCciuziFQbXMj4aPxuoQG5D5rsPFCpe6Hz48yp",
  "key30": "5KzjmWsE6rd7JzwzYRCp4aoKj4WRQYwgZjadCAeGP5Aw4sqpvt7trkQ5aUdkhcFw3vk5hE8xZyAsHKMqMX1VhU3m",
  "key31": "3wPeXA7vdNyDEHKKA5huqtLbRbLkqQXgdtNjT8ybVAXVKDPWtKfTfWEDA5MdGdnP7VSK4wL7fPEWYH4JbysUq4fn",
  "key32": "2g9inqdPRM8cDJ7kWb286h3bRF7bZQR5UWocVURcduCWkziCGGU2vQGfw6Gucy44x1QxkbAEp2AQSj5ebfyLp1Jo",
  "key33": "EiEzni62xBGErgsxNM7nmJM2uEbxSCHbYcR3zqAP4WWvMAsbZCEQhLW6r8qy6GB2nwNP6rbtKmbW56gQGpm7BJ6"
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
