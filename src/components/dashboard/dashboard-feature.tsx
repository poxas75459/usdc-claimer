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
    "339hdm8iDd8xChiywjoMAGiLSwjpbgYoh6ZKvbCLSTkrKTNkVAkMnU66SjLHNx6kvjktPFMFDm6nSczXM9vKfgQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27tGLUXFofqwocKeSE4UefGPjHJtHoCbUuMnhc6AqgBRVrkrxZCjQ3mnBTSHqXxgJJMok3MkYbvpsxJ4JAhNgZSU",
  "key1": "2tAvVbrDjGcuVAym1oPVGyLo85qfQ4wQX1ZGLZh5ZJe4vXqZpjgSWMyJmhk7fVEcUGughBtyJRcAf7xFkL2tg8zQ",
  "key2": "63Aht5n8oxF7mY33nxwjXbSiwY4CgPV9eN9dKsMZtQp21aJoUCY1H4x5t1TfGhThaQQD7F2fuehagdGR9QRJvQGh",
  "key3": "4fdLLA1nSi7KVZKQr6pXbWDu4Jne14gkfjbLYZodiaqiUv575RoxYVbC3CFU3SPkcLX2xvomCoJHDGRbeEr7biPP",
  "key4": "5XrAiB1g8SRkkMq6MHzE38tdiC9WHGjbwi5Qn3kJEAedNFdiMMm6oTD5auP3mMQKhBNZ7EtQpaLMd11meMtewMwM",
  "key5": "3JNNeysncB1vz3nFw4CPCKxFhskzfUxkwmDoE5NJVDt4B1ExJHKner7pmPa1dP2VZENA3WHsYFirigQJ3Y5BhMAg",
  "key6": "3Ku8gBaJySWBRxkb8Gcca2Voj29gTveRf7oTHWTvPutNnvmKy39uHooBcRqGb2oqMThqPhxcc3X42vUG4pUuzx9N",
  "key7": "HAvzxEtnUTzFRyNLvERtCJseHJNw9yeedYA7XPEgrH3FVV3WL9SPZBt6r59qG2PqgXQUGdJzVb38toVq6Z58YLH",
  "key8": "4ZFHiy6mBChVRXAsqCcAXQLbgL7m3mzzDzbBofYLjzSdoA41fwpTFkbCPqXPGVzBYhY2NziGVtBrfSQNoss898t6",
  "key9": "5VMhsSJtevRQi3p7AS1JNLC8NXPmiV2L8dLcHQqMeuLJKuDxrriJnShzuyrhh7aL4v1YmzD6tNdYBhRkKtq1Bvy1",
  "key10": "5HrYcBYMxh1FKbvuri9tEhAKHmXAYicnb2oqiF5n2aFETbtrNokNy87HkQnwop5gweuFFCotigYq6G2WprQeXBHE",
  "key11": "NL9aiHSgD6zfAJsFuqRmLLs2QBiK9voP8izbzPvdybnaDaojx2q3TtuTGgPuP3ZySJDfDb2YJGoA3DHqTjNvvXP",
  "key12": "5anWUgHECN5RHwPeLvg33igVFdBDh3RRK1fqY3A4zGeRvZn1U9MsZBXm9qdr9AafPWETqJYbsNPFtTHaPLrQATgA",
  "key13": "ubtWYSCwnVuqCxgVVN4JxMKK8NxWLumZQqPEiSRCeh3Y1b5hd1y9GTJwU5unXTXjizroCsxXJPn3HKGLx3hDkwq",
  "key14": "2FvXkk5WEv4puwqiujUxTeHrSbg8VucPXMzU5jdqjzf2bjabBkxyxAxmYEcNwCMDMb1e6c6NEeTJtYPAk1jYV6Ce",
  "key15": "4HnxDHT8nN11dBi8T3UmAks2mXZfcQvh8rETSZUjDv76JVLNc7iHnuUNvCyeuMLhdAr3X2DoB923kCSkxzxg3SQe",
  "key16": "2eAUb6GPE4maaNJKVSvQgTbLuLYTTiGFQ6VUHwUpJ11iCzTdzMd33ekaTfhj9DSp31MKxQf5LhMFeB2vq4b2rgHQ",
  "key17": "dmnvAfpgpM6m7TrUWZrPUyDEnuvRLsi59vu7P1KWh8Tm6MAtXCPz4tT25mHsHC4pseE4wASJ6PB5YuSLYHxiWCi",
  "key18": "4xxs1szJchGCTPtSy4AwyPSuqdivpxDqkT6t7cSCaAfoCHnZyM1UhN2pmr9JpePuzp745akhzobEouGtt69XaEqz",
  "key19": "kWuDbJndf779U8ochr6AuupY1Bxi5vW7GKDVZq9Zf7HRajaQzKeSyPcdZgErjz33TdJQWohqqBWkEckaiUfWpBh",
  "key20": "4uE11chLbgZWMmvfyA8aoCN2Su64PtE5X7JxPmPPDrQNCn2Q5GQRRoUXd1wY7QjLkbjQEfYXnKYyB6fGop34bfjK",
  "key21": "3DhXq84qtv8u2E7s8zSy9FZDX8Qi7VUgiA9HFkAnR4UzaP7cyNczP5zYyTxLdWynrZzugAPawVbDYc2oF1HM445L",
  "key22": "5hAz9PWtR9Ytyb928TPqUPFshiD3cp5zbFnaLaM2QBcyexG5EW3jhSt8iT3VcKis3T84tU5kBYAioVmyCvt25pJe",
  "key23": "JyXY9xTw9xJKDtThssV4tGU7JCJ7PiTonQ5nQ6cwR1sFX181Tguu9EkPW2qHDq42SwEsnveGKTj1gVRLnYMU3UD",
  "key24": "2J6cWaD7eWGNtA8FYhymf8SBeMA7RReHAzMPAReitapR8qECHTvaqhuvjaaR3VZjheW9wk9fbKTGDaSybjn4CXmu",
  "key25": "NG9fEoXSLt5tW4kS9DoP2ZbHRHXPb5SfUV9CQKjFSiFiY9Ecna6qxok3nP5uKpE2HeEdr4cEJXBQEX6ekqrQaMW",
  "key26": "55TMHcepAbRukDYeJM5jAw5NPMi8nX2HSJbv7iKpMkoyqKsFLhiYuMwWDEsnnUm3QUfnMqfThqCtQrGq2UcMdpK",
  "key27": "2ccgZdToo2mUBJBLnaHBNDGnb3haE6pbFFV9JVNZPCM3bzppYXrXS57XGAWPpWywmCRa3uCc4xKizur9d43djnAt",
  "key28": "3e8pTqeHEJr5qTWM69MoUQAVkecXhPsKt2ZDGRBjGBBw49CaHFS8NrvDa424xTpryZJTibeam8zQpMGNunpfU9db",
  "key29": "3ubXj39c9xmohP5ZJtmJg41n5zjMyDzgDBduFHbHRPfwurdm6A6Le2Lpngp2EJLsCrE5xA6gzx6zNqdgBvyiaj7i",
  "key30": "34fUbdAkgkdbG4tVQXr5eqCUve636aPkaVhAP8v4Hz3wgAXXoMm4nU9yHFrjxyZ37KMqo3L4MTpBeFHbfqm48i5i",
  "key31": "3rczu69LfJHKJiTGwhjL6HFUrzwTSgeQRG8BYyWoSbecii88kEj3eLFDvrFonqvRBBu6yoimdLoPPMeCU2pepR5H",
  "key32": "5QvgJtL4NM7nYurFWadFiDTysUHwXw8YgAGEqTucPMnTvsV6BWKaigifBjLKBrmMdQytHtKusnYYKVf3LNAum76v",
  "key33": "4C21YCqigCuiQz1ALo3mQs2HkYquqjynqTJworAatKeP5pdTJHGPaBWBLNKf9TW66cmuYNVBW1u9UrsmEwfRyA7W",
  "key34": "W6mttJHoxaGMvFr381NNtTss7dqALpEy5ioyv24Dp5ktc64PPmRzNBP6RvjmM2XvpQf2rRQhwdH2GgSwAq1Pd41",
  "key35": "5BG58JPDNz1JHZDnbzkP1XuCF1cn19ra5BrhyZtM53JShjCVCDnyqqcHG1AYqvyvP9f73kUEJPgMDuocK6i5ePPF",
  "key36": "4w9VhzJJV6FxvaDJt5nYLYJ1zFERjkkBsfiyrMsR8V1hvU82V9vBWrRYHgirahofhCiBqpz1gb5UFVgtYZnaLLEu",
  "key37": "2vRxztAGzCaffkCaVNFaQR7DJ2VhAye87oPRq2SBPALmZSPeBuRQg4xCv5SH8J7cZ7isE6Z9b9i2cvzhMx65PDGh"
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
