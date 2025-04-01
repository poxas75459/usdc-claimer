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
    "42ChzzcGH713tbxjUqFrUxuHvnt9Ab2TqmHj5JJHHQ9ErtGpmisKJy8jKCTJhmdH5LVTC9Y7EHEDyfqLNb9wFPJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kb3TgMpEMLPaMbcChakcd3hd4ZaN6k1YhATksjsb7QG8RCJJgK7rJwm6wmC5inuy2LcWsACArWHesgT4Vq6fYgM",
  "key1": "x1zNU9G7JUqNpTtsdwjBLky1S2EDBuTBTL3XERMQtttyeRqPaLpE1iPNhEEJ2RPwLq7reRoM6YhLhWwA43yWSdv",
  "key2": "3ssanppVNFNhceXPcn3e7YMqBX4bgCVgvBKSBCShxPWYtgmE58ddLULr2R4wq8eA55nN36MtwPVvsnUddiQ76er4",
  "key3": "4k2ToKaeakQn4HngP3YpYSPHVoJLoY2zfxDUSA4tCrmES99Haf8VrsVHGuXVcCsWUCoMRGL8iiad66mDwKpPo74P",
  "key4": "2kmGQZjLcsreCiNMFvhXuEnYhEstzEq5YrEkkDD4ye9NW6tEzPn7DrGVPvZP79ibkGKG1FL4ULYdCyUdwAtdWi4f",
  "key5": "3V326TfFa5naHWs8PWw3ZQZ2vS8pwaSFD4wK7NnoQ5fHLaLTc1bKiamk48rufiGvC8iQn2zhMe1my7n5PR3jaesA",
  "key6": "jWzWjYBJxiNuVkXtBh23JaQbC96mvDukmciP1xH26T7KsbWWBQ6wDjsMgjqfh7oNpKA7Duv3W4CKX3AEqEzyx3J",
  "key7": "bUzgBm59BtNmQDT5cxvtPbAAYRxMqdoVVJuzzzasWeHWCiffE4avED3WRtpETUfvutrJamLYrFMqhQVN6rSWewN",
  "key8": "2sw4dmFPm3rALrUDLoYcgrHmbRysGhtbApzqyjqVqXyjsRLpKjRDbqgB8WZerwM31WAK1SLRjp8rrYfRzCQr7iKW",
  "key9": "23CT4YPQdU5dhASWAGYx7YvJUPekMyhgpu9qs8P5WKvT6dqF523ZcP2c4pvMUuMBAxevxts1srmgM4Ripm6wYUBM",
  "key10": "2CpsMdMdq4AxugBFpZWNcTpfXebYJgLctALzhtP3YdVA3zSfCTPZWhA5gA92vuVcmc6UgkvrocyPrvJKzmfqfsc5",
  "key11": "5smpvmuiySsPPSSyFEfmqdSiQp5sTf5pXgHX8YvV88vt2ZUG1csV8L6E2uFwjZ2JKj6LHDnJyP5jU7ew7sYPcC5f",
  "key12": "eF3nkxfgpFhsw8yYtkEYsWxTgWVwEWRTgK3k6D3H6WJgLrbgWYvs3ndPsgEa4HttjyESbyQWqEoniGHNWxJRjnN",
  "key13": "2sQCPGwZUdVa8rbjGvcjeEcQjhjFcXBSGA35tHkSYzTWVrBff9vXueqVgFAYth4oFi2WFeoWgKaYDQQeZ9MkQG3N",
  "key14": "2qEDkLv7eazukaP3LThJLBVUm5ZqhRcxgvPBNmi48SmJDRFoQ7qDrH2YJVNQuALVwbUSfPdjVDFuJJoe5xj9WPrB",
  "key15": "4d2CpaepSdcaHD6RrocUUACFTiebKC4p262o6C3Y2KXGXLgPLE4ZVKXb1fxS3JJKmDa4dgkk6ZGSxXWT26dKKst9",
  "key16": "nzf8XrPKZhzxmns11jAtkiwUVJZGbWZCV6JJedSiif5ZG2zKDzB9JDM5gEtHDeZj6KwbHcgWHsBriHm9Whh9AKK",
  "key17": "51NgoQtQQvTHW6ZYD5uTpFTGuQisNZnTSZB3qgoSE4d5F79rxCFhwJJpDsyM7xJ4m1DjT5zUjE8WiMajkQKJ8gVu",
  "key18": "ordMRC1omF6yAVnJ1TSvXSiYaZJoKMEeREStPojf1q1DZw6azDuxJTwzSXjsHSTdC1A7A7gh6LXmR8Rq9CaVpgy",
  "key19": "zrkwLw9dzoYyUd7UUAKuLiuaHVKi8ETALSFmUgJxyT9qSLXfVkPRFFqkXsvxdv6xdwt94Cz4KpnpTrP7L4QEeAe",
  "key20": "2C4bKVZWwA96sLnLU1bgtHWnSTsKRufctVFz8uMbQdz1PPHnefvHHymjkz21buqznHmHV83UVCiADnem8BVRFWQh",
  "key21": "2FpEDm6ygffHsT5mDtodbvzoNFA3cSoeB3JJbycv78wUzwnrFLAQAKSgYCTUxQ4125B1cUhMCsfAgojBckukZnaj",
  "key22": "Zmb8wkmfowhzSRSY8vLESwHvgo2JriKpYU86yjEFz2cKeQDisXfedtfjPYAjP95GG9XPkCVeftjHkXVQ7VYub2m",
  "key23": "47Nag9tzZCX6ioXGc3HA8ksy28BGsAydnpMLhxZcVjH6dCmBMKGPMut2Vg6PBxHLPZkag4pQQX2Yxm9P6BRmTAAT",
  "key24": "7E3XKPQAwE8jcjddxjaNjp1WvqZ4q8tjDCAG9LibQATnW2s9LByBUT1we7qtSukysQSbVHDg1m5TyPfx82N9qMT",
  "key25": "4YosCJ6Vd8ARWoqrkQgTjKUzR8QGaMSZfogHJ2aiXCSsvjaLzSmCE33i3X9EhuXrcMQCSBx9YpUK5ivCAn3UVK5u",
  "key26": "p3sCMsdGNGAkk91hSgDcw3Ku83JQq1pt3gLBS9bgLRMbcjJGr1nMG5BLs1xVNB712GxPntSDSx5ULmz6W8gSwbA",
  "key27": "WDQVMWQTmxuWq6e7nMUkX2dKSYNS7v6rgyBn1a8TF2Y26WMji3AMxdEYUAhk7GqMCrH4Rp4ohJL7XR4Hd33rq27"
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
