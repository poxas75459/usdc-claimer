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
    "2rH6KcVdbF6umZyCijXcAawuWWCd5JwP2pACtu8CaHu75BQQUx7xnzc6zzGfsMkusm48Y93kZRq1eNVd4a9oBb8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ofehgnTvRx4hhactUEHGZ4rZStMzYWUnxk6wR5BLTheaNyXxhNAxhSdpDikPzxoEwnFBJUon1diYjDoM3n2CRC4",
  "key1": "5BAJdkUTamCg56g76shPFMyHpS2wDy6x8XRvbSKSZ1vAmrv6dWWP6nFAmFmtfsMiMuSAsNJmVKBMnVU1bcTg7CxQ",
  "key2": "2YQrPa1DqZkj31GmNtratpU8mhJ14jXCbeS9ZFK3rjfpc6P4hGGAhYHthg4SyC69mCqqYb51jpw18iHhMiBjREhs",
  "key3": "5vDonDWPcfb5nRgTWgTockhXpTWy49naXvm4XSRREDHoocgfUYvLVEUA1mV1Rq8FjxxYZqKbYYMigB9VggPk8WTy",
  "key4": "mTtSnZFxBMBqU92RGhvxZhKkBFihB8xPfhzUb4rs7GNsbmFSPp2RfsghkwK9xmwmucLJDMsXMhPkjNmwx6hGDMA",
  "key5": "5d6cnjGaxDyHo6amHobAYL8J52bSFXoZKMhATmy82vcZWi9xkhgvj8FMtBsv4zpJAcLZ68C2WLmGA77BxcdRZuXd",
  "key6": "5HcLFknghzypEHF5tdU9Vcft5uMduDiwWeDwmAnKneNgZzCzNP7cMfADXfrURLwsdHLNFzcmXqtBYp1T2F8zu1jL",
  "key7": "5ZR9Xwt28ZUE11iAvVNksp1h8kwPXrA4U4QAraDfaSYe5aBFFgvZuskVqz7wNPnPi3ij2P6UHLT2mQJ6dwjzmUYb",
  "key8": "LfvjMhwbHSHHt65mhHEcFmYQsUWbH291mUsGVHyxYfY8VDWkeHr64CTacKHogz5zE9nFwjaY8Zv47571TLcLN8T",
  "key9": "5Wvibe9hVXxrdxEekwxY9qAd8BmBBcGrKq8tgbGLKV4uc3UtcYDawdrKERGwedFbjBNPHfnxBG4MuFDQ5kYQARqz",
  "key10": "47wo4zJjFTJyzBo8XjU3vBe6nbJCAHVWFSmAPovy63fjLiGnqBx9rNifGDVdkc5VSdfPhqv14wz38M3oXLEkJFvg",
  "key11": "3zj3yfSpNyBwX1viHgWSKiNxRJa6YxrxrPvM5K7821ugdW3oz9RK6PAviLbjVJubqPcDG6qwFfgR7ExFioK9HVKx",
  "key12": "XUGspepiEBSesD4KZjK4Bhxz3JnAiGud9LqdVGK1FNxLWoExkVU9MH1BtHGvx48ornwS8dAFLN8kDAHxdzgwdQf",
  "key13": "SAR4iFkRmKkP3co9jTi8edQALXPyjU2e3dcBodoQFBzDyLXYMzPg34tmjrUTMfZm5Me6SPUHC4uTiU6EAMiPDBo",
  "key14": "26npnKpWwpJiaAYtLqtWFTVJxsAb8VxT4T1mpiVxDL2oRDuT2PheFzDYfdXvLioAiD2hR1ztE5TdhBoeGZoDkrNx",
  "key15": "CnGKyweq1yrXeKSMoDeT8XN1xHbBHXYbAtN4cMeqD6Wr1K1ir4ts7cU7H8ocQHd5P4JaEM9QFnGW6vZQqbyeQqP",
  "key16": "65p9CakP8V32EgqDtE6tfdi3CuBs4sT9Uy7WaLWVEWmnRY4kzEi7Ha7TYeVipk9uaPQJMJQ3ZWyo6afff4n31SEZ",
  "key17": "2QCfhPfKaNtYKkYU4T62DNjroQ9goiSGVZY5wMKKRkLBi4gnWmxDTbNZWBGbTQUad6RdAf1Eft7MytJ1RyNwjJko",
  "key18": "2jCDwWWwJttGGubNyLJPtSbanDZVwKXTTdYDXzUh5yEmcm8VeDV8eMw4rADyj6y8dJ2daHTgSajbx9m8X32euvL",
  "key19": "5TiuyYKPK8tsmZ83XNsYAYREnBuWeGuVn3Fqo6FXgmDz7xP4SktxMEiwUhcQp9rCcEtyMm1uQvtWXYmDjMCAEiyu",
  "key20": "3V9U8uwUjPypuAoK4MADggmg45fpD1umS93d3hitqYHrhSHoJJ1T2Y7Ajjw2DhBnWUEGdWDQ1z8CS4WPvNac8JZ5",
  "key21": "4KMRGRNwANycdMVidbUuqLLXH5WRf7ncLzERWCzzpTVZXVFHtQoQ4Rr2F9TgzeSRBsYxetU6BRqzTpRvWyFQwAYu",
  "key22": "4jR5tgofxDQeKbL5dCZCnetazku66yp84rUB8vXx4W1A6uV1cEFjqUN7aie38yipw64J6xLZxk47qq4HqTD69H8",
  "key23": "66H1Gq1NWWMkL57eBTL2qy6jZdKmQV5XP1YZENYRi8rAhGyk6QG8CwLpbe8iymAHWBVHSDDKGpGw5tGt3isSnEd7",
  "key24": "5mSCkLWkL3WtsWbfZLFNytFi3T1XhCSk1H9kFPmzm41Ym7JsfXV72pxzi5MLkZDsyuvo8EmZJJcrymwFS3seqQxq"
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
