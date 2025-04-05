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
    "TBXt6d7QiGByHDpr3ZwoSrSKZR2BZyoB3LXEnRY1xM2Qqq8nvhuEM7jZaVB4YU4AJihcemP4FciEo2yaGZHYqJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pKoHyVUAxZFU9567VMvh8EmhdHaDJ5hAgDs49GadBfP68hbNfKKQJtLHK12ue82yecNKHRLAC4yU9St4poXq3gy",
  "key1": "2czpXUDeiJCYkbrqupLhBTgdimFPgJBb4uPNVuL79TuKUssEYjen94wAD1ioavZ9rPyQbgqDEBTme7JEytxFqXgg",
  "key2": "5A8WGZBwsYciUdVqEF9VVCu4dcfLS8YAHdZb563gQ7DghZhzwAGuvxzWiwxsmnARf2ugzNpdKPfdckzYbxMGqJMu",
  "key3": "4vqCLaUcrrfvpCKrYzoXiGQVgcYytVsNXeMiYCMHmfDZYSb5G1YZsHKcoA3PE7Q4Y2mvgn92VnhtLqLgyRCNBKgS",
  "key4": "66Y1ipWY8Ep2LDZ3NrsXyg9ivUuUZvyr6nLVkDmWhDRAWHHZKF7nGHZ2SGraRcgnWyz1zXGsDSCSuLv9y9Qf2mvQ",
  "key5": "3svhy6pHKtYFQK2Csrf9Mab7cMRKjf5jj6fVdbwQWPNZQyX2dcUgAaQytrJVxzozzpFgMaPJ3WAVwesfgXdvScep",
  "key6": "5uUqJys2WPfNBwJtujjygLitnUZVDabmQx8rLfdxn5gTneZwaYFTdvLGrfFFYmdsQ1g64s7EjpZbjQWi6wPAHRTA",
  "key7": "4jRVEXt3NWXjRTbEp3utr27KeQ3sGqDMV23pHF1LvQphihwiWGHkhdP9vfwX3it9vJfQU4FJ98mFMCh3SoAJe8N3",
  "key8": "29khMMh2YLHg7NAt1QK9DMRTdF7vciXRVrEXucMwuxS8KgvH3c1tB5y4T4RftwZG9mJDAuGPXHgzYjxqVByKTVm3",
  "key9": "3dWDBWUoNEuBueppLzVAAApMRGT3EsMC6XRbdEMt8m7gttBmbkg2jZzzPfNoptUMZmRcAz63S6UEYvUnsLa5UWF1",
  "key10": "4hi2r8WiPNx6o3SgrqfQkPbo2R4NjetLAJWh4zM7vo41BmQjjSDTofTv1YAx9rZobsF17dhnTcLf9Q5Wote1zYGX",
  "key11": "3hZ6nt72StqUH5YCXsdaBdJzUQJuzbG8xBQPWp7kCqMUGKseabVR5jffbKedX2Vfu2BosG9A3ceBe6AK9iKXfFvd",
  "key12": "4QLkR9JhssJA2strzNZqEYQqEBVZDAt2GwNZ3EUww6HqrZp24FZa67HkXXrhM9yVjxCxKgaXaeubbHd2i4DLS2CM",
  "key13": "2F1E4kQ7AzTMh4NhLUGNKJZKnAfsZo1Vuiokkuzpu5cmCs51Vpwxod9G1JhZ5vLyq7ohtcMgxzFViB8sifcScRem",
  "key14": "4RHPD1BNV1ijgF1TYsZz5wJx4T1AdJ7QSKmfN2PrCWbTwFDr4aTTsbWT2Tyfz3x1tZbWzXktn217aP7W7LTDDYBJ",
  "key15": "3ZJGeRmuJizMibooMDa5JvDNdzAhRoaHci879bkB3KCxBSTYqTp4qcVRDEb9C7cgeRepo1udxQqx6JeeJ44YZfU6",
  "key16": "5WZLPqQUKDzm2J4Rzqy2hs4mzjv6E5egfFDxMgg6ZGrXXmTtXBUBto3g9cV1gDCtC67n9n8FntGx769BKPp7tqNS",
  "key17": "CDjTFmUERKX4gpHNArqfbXTtcJQU3rgFfoqCNJiVCXPMbmm11pQfwTE1dU7RyWDDrb33LMvj11SFmHVNyKrsKEW",
  "key18": "5fXBDZ8ofLBiqa47hQ1wdjFxXMXBr9mkbDAMKm8VnN28abJ5rmsewUJEF66Af4XTMmYXznBeAVKArA4G4TbiwjPP",
  "key19": "2pd3t2AcJPWGCmDhoFgNPK9DRpMD4UaM1TJyfKKL7Kb1JrcmvSvykhaVjSs8Mik2SnYVHUt1D7SoP5M86bbHa42g",
  "key20": "5fAqsMUQXcjy51CSqqNciLrdunprVgiBSfkY2GRZLGBUacbgRfsUTokcQEM6jbKvpeWZpHiJGqrXjV8KWV7t6TVw",
  "key21": "2HCbHNFijMb5WFNwSwrrUzEq4eQfC2sr2G5sW9mJPEkNvhNtHtPzy16TZtbdZ2g3pmqrtt9p2T5CkRDy2SaVgiMq",
  "key22": "2xUsX7YtEpZxukFfTu9mFTSWBeGEBkbehhyhPZMnnt5NfGCKgwBVFUqqwrZuy6GrB5orw2PTytjpCQdrdvdU2Hcm",
  "key23": "3pXjKs5Jfk98UsEbQnqPbzfRmcgsPkFE1uCf9Q5dp8DH5sxriiruocxE5ceBU7bkJ3V7vTF4UQ2Ttpdt3npwGo42",
  "key24": "3LZDyVogMJyJGg8NEQz94ii7BbSq3TgagvUXi9DzvLbNLQe6bJdka4ZskZEbf1PpVpAziVVU4HviiLNZNsdsMPyV"
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
