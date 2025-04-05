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
    "2sfze4ungaJyk8kjvwtV2u1pgD6zG4Kc8yLqtsp7pByWQHRYQ6v4fiitHNTrF9Mp8DeDBgCKF5NJK2zWmDGAQK37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYTbkZzvAS59baRm29BK5CvDtUqFgDivRoBUmrW6819wjGzwv25FVHsnhMktrDLAAxDFn19WEtACAvxRxc6pU4F",
  "key1": "4xbiFVjUEsUc2R991o6jWn6mS9wDmF6vXkiEPW8f5522nM55pYJfC5UU9Uvv59z9ocptnWwxLhdE8JSFvAwzrMUM",
  "key2": "5uSSQHSdQKptm2j4hYa2XctaWi5VCRvW3m4uwQfhgRwtLrSsHY48pvAXw6hApruZe5wdL4rkEbPKeWSgCDf7PGvQ",
  "key3": "ioB5PEoTB7nYi6TjTZMvBmJN1vugkSaXW8kUsywS9rgaCSPuP7gDZGQ8w4kfqrxocDYth8dFsdS38PugfRh75WN",
  "key4": "5u3iBrpWdXuEfXVpHs2QSfUBSzFe7KgKKh3MoxhyW2q92oXwoYrgAb6qUgtq9WRZurmRV3oMX3uRmJKDpTjQfYGJ",
  "key5": "2urNaYCND5hT3e66b4A4VD7CwE68HwNhyP9NDWtGN1yzHpz1o1Ctg1Aq1xenethhatQvPu5q9XrLNHh9RTYQR7nC",
  "key6": "nEar7M5CcUB5YJoVTbbtSBbhXT5qZ4nGcCdxmQLcG4UkdX2USixFXDzrxt9Kti9nDFtpvxhFjPw5DHqjBLKTH7A",
  "key7": "3JPrP3psgKA5P4iAutq3sbQrt4obaUFKFEKkJQxWy2vog3Nd44g3yr5CSZqLJa6XG7f9NLbZDMJnFvwNpwTmPwQm",
  "key8": "4f6NYZ1Q3rAUDmkhy9d1zYtcD9PbxMZFmV6hYsY3eYFc8s7D491N5cZMs2S3wnPNwxibXghZDhGtktomAiGYJC1H",
  "key9": "5eTnESDJdY1FEPi2VS9upaxW7Tv1Y9jpv1u8Gqpo3RaJRRjULuwjXBsvuSEaQBESdo5y3Q4i3q4uLSeRcsGsc5E1",
  "key10": "2ziQxDgiv2xDPBzGnznKB3k89ZHnQ3LBAMFF1Bov3gxsY3m8mUK3KXyHTSzrb6n3yCKBn6JT8CTUN7z55rZEGTyt",
  "key11": "2vupnkpgqnM4wyAabdYMkaVabXHcKsu52xNBjhYPze7f94fbBjwaYsWxPTE8jrNJSwtzWNq9KMJAS3mv5zYapTrz",
  "key12": "5AZj7vhcSv8YRHtgsFfm8eq4b5bKJFuqxUrmEBXS8rgQYYYPyQazzzvHBAqQxC9Q5epoAEL4dv5jZb8YNUC9p7Eh",
  "key13": "YRM34MX9aTV2DE9YMMbicnn5XBpu8GiJ4MuaMw9nVd2XPa1mShRiFm935qpedCnned25WYranKHS6dWwnbwjXY7",
  "key14": "41oHMAsfr4jT4Fg7LYi2VAyNuUc3F618k4QJ7hCKR16PFWdXx8M3MdxCqzna6Tg9nHqc31FFt5STS2CZsWvUd4Nx",
  "key15": "576NgtnmDZj7iTUJcM5CM4SyTc7dQjzNkMt2poQMXN37VYt1rf8GdHMAPXX2TdkQCZjnG8NqJKsqT9TjTVNAySun",
  "key16": "5WgKatXnWdFiBks15mwouWL2X4oBxoe1UyjyJDnXPA7kusxPVWDU6FQDxcQ42g1SXyfxios34YcAYPon5YDhJATd",
  "key17": "2eqtEqNfpRNkVe9YxLemE5nrJGHNKGf4RWBQf47uozYkDkJ3CrDXzqTvsa7ZUNV5d5vHkrbnpQaRYFJPhBS5yHrf",
  "key18": "2V9AUaNEXPqS8mjrFfvQTp3wndzUZJwVUH2Y4gjrjtEen9Vfovh691AfWsFinrgf9yLCU57L4B7WGwBD49Qcx5Ko",
  "key19": "XnfWmHhvppxfBLZxX4AFHHUtBEyaUW5kaew2N6WYMHNKZojuK4gcppWq8J7sWG3eG41CcmapLQpHcFQhbhmGNmm",
  "key20": "2iTJj79GqXqJjndZ8eB9tk9LUHUxDgMoeiv2AiHaXrnLYjufzSNJhXUyg7stBsR3h89bJkfaykWVZExMDEVBZ5AW",
  "key21": "476xSoNAoiWtX8H3oNsjabfsVQWsNxqYQscB1zjKqu1cjuzB2m7nZr6WkLgduxJ4YqtxiXVKQrUm1APAzHPs7uys",
  "key22": "4R7LJWQtwXUrKXA8DBRZSvGCTUzGBnBFRCzLrdAZi1XmzD4pCuSgD5vypQNQE6K3a9ns4VjamRNkKqZoQHRVLrcx",
  "key23": "kNwPvrXMydL7DByX1p7G7HgMC3trnicqT1n2CRpKo8KAaDfYHCJe6LUMBvyYs1BdJhGRMsixECxNfruWrtPfuiH",
  "key24": "5rvSyzukzEDYGo25RSzdt3GSUyJTcsyMVENYjvp8ZWZGFNLAyfL3qrcDkpjHvZbDBicBvvmKAh6TXH4Gib1K2Kry",
  "key25": "5meMro6caB3RUD13cnnV1ZWfdh4eezv1jzzssBTMtZG9VdbmGowMwwpprLwJiqkv8bcJiPYh4zsEMZtBvdpVcKw1"
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
