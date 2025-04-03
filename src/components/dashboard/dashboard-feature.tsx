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
    "2eLdKGEpxSrSjVUGu9iTUAYm14E81grtEdWJJnVnxABuSfBcDhygPKvpdn3eeBrbt6mwJmfeVvV6KVJ6PQ3mMUgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4xCjK9Ko8DzFCDwargWEHc5PjENTfA3RoRYYszSoPLYR6kNtKqiBqgYB88QMyoQ3AL35aMgFhLMGpxWACHerVa",
  "key1": "4XpoHfkiURRXRjzKfuZjjnsXNZBihfiBvSbUqygb6YWyKr4UKwypbwnbzNxVWF7HfL7r3XwHSNh5ssyVRg1ezdX3",
  "key2": "yqsNt5sBmEphLFXEaGVSFxkZQZY2f4PDDEMfWh4JrVVNMEBZYYd4CNVCNytudztQf1ejJvA9uVjKA9W72jc3Tnr",
  "key3": "4CVQXzazzTWB9RMLuJs5P2iRjbhtnPZtqtpK4EtbfmqRKGPvxkfB9VoerKyjiBfCVrVyFjciNBh6uAcBLczafpfa",
  "key4": "2fpQcJgJWARPwG7sB4cs2X7uEGJi5QUfRTQyF9AQ4feCDF1U1m6UAY3k3brKQ89DPv8J7mWSmNMCr36SLFgAh5Wp",
  "key5": "3hyCcNJiKZJmw8pVbKHZw75RvGCyPSDHBoUDPJtZ9Ty4zrG7EUZUnRSZzbtkwov82o8Mx7D536bJ9zU7fZwoNHW4",
  "key6": "3qcQQT1AYWqEUeNdKEGj1YPETx2ef6MuryiJ5aKXPgSQSCsSzQEzMYnwTicrDFjP1ytftFJ2xY4gupt1RkNGQDzr",
  "key7": "2MDeaFadUUSXgkZ2yRNCLaGofTUcUFKuJR1FM3NNcnpAMvLPkvNL5h6RcGornQdGy1EUtpK5RHRi9GyEUPg1v6ZA",
  "key8": "2ta4NKb6zVz3oePqbXUQ2dxsHx7xGsYMyaxPeppB2LuEMNA799MrKsPvuSfMQV9e6dZ6u8Rvnt8Ab4zjt2Cu1Nzo",
  "key9": "QdDyJ1neVkrNXh2cu25L7t3uE3RvF1UBSwwgvynAD1uD5ujpAdZczPRapppCWzgAsnxgVvP5yMJY1QZ3cSkmWt3",
  "key10": "5KhY3Mm1G8tmiRuPjXQE1yWcaa2WUw46ak9BtiyKWEvogpKsKWM6WrtxDNwK1yfU3MynkF7nesuSof9DmoVY5Uf2",
  "key11": "4ExazPPZg3gpY8oBBv1ESqWXwRPAzcwfZ78f8Evfp4KRBqKTuCXXoaF7zUsry5DnvNbqgMwp1VDAMJfLxsWBcE5W",
  "key12": "3PR33Kpuy6pq6QQAiCVzJz8iConxneg4xzxUTWFVjJm6rPqfnUFQeiNjDEw8Ek1qZQLM9a9ciE2LiidC1Akg4QJQ",
  "key13": "4TEwd8TJGifBbK1LWMqcjcejKGpMSJbFaoMR455cuhsHpBZbKLeedYY94HkmkQZ1bgaKLBxmZyDjUbMDsYJ4Qchd",
  "key14": "57tWJ14EL3MSFWvLexSourkFJMwWnnFBEvmJ77HQ8BiBbTmvEvxeCTpU4BdLnFV31HGELN3SyQEAGhiox8wHbSVn",
  "key15": "2t392cEWTpe98ZCBC6p98VA1UfY3Kr2aUAkrgErUgN1kTtHsvtAubHKLC3XDfiy9S26dtyZWrB1T2KVNwDiUGzs",
  "key16": "53neBtSDTXA47zZFetpVUuutiGQwXp6iVGA9G6Q1VPHb9Fvx4RwyRgRq3j1fBdGmxHucaoPq9K7yWs3vcU45xtwH",
  "key17": "4DFKs22rJ4nGrGtQ3Eqte8jnugeArhDf33DakZ17bhhEXCgZs1X9VMTBJ9JKWVfRu7KTPgU6AYYCwf9pKvsYa8SA",
  "key18": "3L89MNd3evodfkHBgRr54uYfZqVoWmCRN9ghZfCUPXAibxoAnLugNDUoSCNdjxk9LLXxk8oAd61CyQmc5my8EoqM",
  "key19": "24F53AydPkjK3f7iffbL7p6GVwKyLoUvALRwXxbYokHh1sfymntueJXbCA74kvbPSSAPwrrDnLcVmvdoK6X93pz1",
  "key20": "oJp8NqMnSfJ2tBirRo2smbk6trnaHH1333NjkFLjU9XYHgCSxfN1TGwBTaP7ok7C8bJv7yd11jQ9Nz58WDTCkpu",
  "key21": "vE2ZpCfEbbBzfvGYRuofeZ7rqPJKHrHwwcMvrZEkYHnvikPqbJDtMzbDZS3btxtGARtvrPdfjH8BvCGfi9cbnRn",
  "key22": "4znWAsVrGirrtAxeJtutxEcLKdScd8TNUApw4X3kF7xHx3KmCbpJmLTx8DyEaGTdbNQBufFhRZ46fDZaa2Ttw1Qv",
  "key23": "KbanFBvPqEK5Cy6udYBexupJXPHaeaRWS7WF13XeoGRsZkrJeHn2m1AcD3y2weYmuTivBW1Z2EMMB2Ut5QFDAGK",
  "key24": "21BUXaVcmz8juTj6WxntjeCuyVRsyNkvnNMALGevn5QMxXaSMVVbdYCYvyUfGD2hFFtYbqnpLfTcmwSHGSqMxNfS",
  "key25": "2C6DPXaLRCExabXKurtiV6e371uv92HirnyRkc8edNAziysxSWkHEdoE9UfZuGB7WXd1T57dtuJ32C6AWXGaft8L",
  "key26": "2ocB9QHDt4agmSWmA4ZDgNX4FfJQoNNsR1PCSffRXgXeNmT2XAzCxthhiCwX5c1WCMGQMviSg4PrUjECm5d3G2BM",
  "key27": "hKrhYQxv12XHH3nLzBuVJKwde4NGEWn6qCnRCeQi761xSQw7tJu5aKWcfKE1jVokGCC1w9v3ZWHmcRkCnsQRCMT",
  "key28": "fC7roHj721AvHF8Bd8qDZsiHCsyFNKrj7S2ZgXiZLgem8WxmS9myZixvMa2TzpLq9GxpLXVV6jy8abrWtTgWezj",
  "key29": "4WWqdJg46WtmosA2ejoGVDFVcAHGDeN623KB6uRxxvFNtFng339isR79SyXMFsvnP5U147TQUS1rVwBoDyBCXNA9",
  "key30": "2Q5ddx2UJzMESkaH6eFGZr8VbrZQCgTdbNoFvu4UJrqaULFaZgdRaMX1m8Vp9aJLz4UsRPXYDb2thPfcQyxpR8Zu",
  "key31": "29wrwEKUQZ14LSGJknQZLBzT83FYbUmaqvZ91avh5F778m6JMdeZEwBFGy1wFidx2oaXoGYkcVycRcoQVor3cg1o",
  "key32": "3WJ19JWbqs7waRr3zqg4UFE9fBpvX5PfVj5GbQuto4gQYhvuJ7Zksozm9phMHvVHqgXLacwkekDxtcRM95pMevSu",
  "key33": "2Rhy4e8Suhz152qqXiBbKYmA7CcySJ1XCXkhEPsdpxeXmKxV6kvecPKZb5erKk6eW42m2eMaMLdsrAdsAR8kiNrL",
  "key34": "25RqkNnTBY2J7Rz85zbcx8dikAQMbx2NaPHi1HCEU4ZDiXr5MJ5tiD1ewXWiqqoqCcgzsX7sTZSveWgJFZ9nnuzA"
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
