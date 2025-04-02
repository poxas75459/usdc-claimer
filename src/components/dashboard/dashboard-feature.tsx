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
    "4mizVUHe6STm9z577egyEdcKXnXbM5r4LJA4K33GTcYDVACMHBYZ53AG75wwWaDa7dRv1vpPDbypaXVWavBZYnuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mF6Nc8kSBS8NgjFNK3Q5Uqu7Aetfr3nVXArgvQXWYGNBxHD5DvsCLhwq2XgPzBi5YkiHY22mPM7gjkiVbVbpsT7",
  "key1": "5EgNWCSnUvheWpvdwhZpcexvjx6xK7pCZRwWyDt2wU5CaEBVg9wKXGsuvcmNwXXnYxzhGY2GNchj2BnysMxhWPUE",
  "key2": "4i56MhZAyktHzTjo8W5f3LuJ6Kh6jedLQ1YpZU3jvqXteX6TsQ77wNkhoyVNjQnMvjRPi1qQJdj2oLzMpAF2PKhF",
  "key3": "4S8s4o8b2hqrDP8nZSFVQLsPzFYdYE2e8TQwEAm4JiQyyRHhKRk7rs6afAKKVuR3fbF1vQJvRTDAG7Wmp1QKESzF",
  "key4": "3qHCJC3yrkk1A8E6cDz9LR2hkZFrQtsrbVCdD7SaZZPPnccxkT4Up1qbygEP9Yj7PQFwWJt7sy9dBDPqejUqvcWf",
  "key5": "FmEn3yKWhtnFUgz9uM7GvvUKXXTs4roMzueKdUU1bQTKFf1SmPHuiVPCyTAovxJMv2of1AeJuEAA5g85FtXxy6c",
  "key6": "3U6rfYD2rYb36RsLp26dXKiPpaf7dMGPuk1kJyxtwRmZW4CJCTYXx9vUcmxMVPK3LzhTvsbvoQK2PJero6SVwV24",
  "key7": "5YrAPuCc3c15o8mjvb79LSvFtHmdF1N1uZk6zRCkaYyJzXj7kYH6sb2qQ6H2cPoSme3KqQ8TeZkfLPNrTnhF7VLu",
  "key8": "t3gf9k9NJZgqJkCvvJDcyUxRUHvSid53utzAsGW4a6w8ZJW8XqJU2ggptyoCgHjX3yJFM1SvS6hvLCfzGDGk7gR",
  "key9": "5KQuZhLSqQYSGaHmnJANidkYfsqSarq5NSnNepoVBXmrmZXkyxwZNqStPKcCi3qYkMum7Lino26euZUPgJxY7eqz",
  "key10": "mKhzNQE3N82Tv92d9k32gm838UUpiqYCTAtpigsFxKyw4XkXGBc4Pm6eFELnN7T74UKjwLh73fYpdR9LGRbfiFB",
  "key11": "5d6nHBg1SLTL7vSDZPDY9Q7svuKgDopZZhetsDYk8vXuu8KFMnt7q3PVY78kBYuWLtxvuA9Aq51XPZjUufcVQ5xc",
  "key12": "5vqRdD6TdS3yVQ4PLvgLciPFH7Um8Voe55r72PQJRtoGPXAZxVnptCxLdHA7p2vbKWPhBo8XqfmAnp2B8RCS9uMW",
  "key13": "4nZWkeDeCs68M7K8iwPCcHZuah1RX1Y8USkuPYBxGJNgJZrm4vFv6LgYK2i3pnsVy7Hphx45HwV6VgeWfVqJxpPf",
  "key14": "5rkgLrkRazSMFaFzw8DDUbCGNaeD5Cco9mEkF23RpyijpcTvDdVBVRWGmQtX8RkRQjjECkyHVSQzLgHffF1SQmtL",
  "key15": "3amcfnEPXYNE8PoAc3hETxvShTvcE6zJjqNqeMAXzh2PrRLguzW5RTJUXELZXXgAhBWtkt6vPQe3nJnGErG1vA1L",
  "key16": "2LDxg2vZeQSRD7VsFPKAL5WtgW3cmz6Q5ZC8hYMQnMTrVSMo3diLzkyPoW3kUmis8XowWppTsfK9gYNsGwvsvLZf",
  "key17": "4EZ8WrE23u4yFz4oy9eEzHgisnicsFVoB9LxhRDRnVBHTQY8Bf2R8NvQzWQviT2gaXbMj3v13AFfy9z1B43KXzBj",
  "key18": "3cF96eQcpp5J7MaPhavgg8qh8PJjeyQiSLbpy1wRFHDfrEJXhAJt5LSJZE9bECX1LtssN89Q9jRi9HqhRkXKJGxd",
  "key19": "3ahZXwUetdpBZ7BdhGKwweGPFtDAh2W7UNng2mFpVZxjkk7CFgq2qVD7Tf7eJFwVjcZxogiMnKM3akuwGxc9PbvS",
  "key20": "5GWfAwRhVp1S9Bj7E1SF1iWh12k59TR7KkiWYgcvUFJZzVTwghHRkvL67hZCWK6SZzYmz7f3r4u4VCPxEMtvhtsd",
  "key21": "2sBVvicdQgjZXhvrdSVPscHewTMvPrXLST87ejhPtq1BdEjtBbPSvPAtZzWqfxrG2NBHwQQMQ3gYWqr6U4Dm8ih6",
  "key22": "tr1z55hLyiFpZaQJUf7MbrhBBLhcBCkaQmeWorG2VeVMCUuiNFdj63uUMDneMooaWXGAUSAHWpNC9sbFosDgaJq",
  "key23": "jgyB94aZG4PJE4RBcxcZnZsMSg96X3syJbPULH69FEf943setFCQp5kck1wjvKpwhaF2ydpKe8NoA4zC5TVpeGd",
  "key24": "3hAKDCJj9c1RwMDwP2NogQgaY6KuTey2dpGxWNQNRVEpZfXyEGHuC4mVxes7As3BwiSFuWKJQUjEh8jrgGZpaHN3",
  "key25": "4PgXwo9Jm1jeSLFQZRJF81muaEmW6SijniGHW7Eqdb6yp3nzmmV4ss8QXfsG3LWt8yBkEtM7Ed5ntyPKKMC8QDrv"
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
