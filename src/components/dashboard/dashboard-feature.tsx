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
    "xCD5Ajpd6fKm8cGQ2wpxD64mXxdmLGd6dwrYxJq3F7BsmKEStnwv4NeeRbz7NYaf9ete8bxgFo4oU6gBaUrXzYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55rTcbtEKzw5wpxkhgidMHKWwZoKzhd1UMGmbGjW2rspzEo44Q79uCH8gUHLoRQ7RkaxeyKheHSu6yqK9XDGZgnU",
  "key1": "3eiesWT7Kords8m463Uun3JfqWtEBvKa6HRGBKaP7NMFDsfKEvptnLNEZKXzdbaTD7ZH7XaDd2MYb6KyNM6Vd9e5",
  "key2": "5wjQGyhyG94UZ29WPN8u2GsET5xkWHndWvfTPDPRA7xz2LwLWpNvabm1ogvGJDS4nHko9S3yzfHF4eNw2GGHJQJ2",
  "key3": "XHad6eJrVBu6S3JUwM5KYXMEX2pP32AuxxAuhrHfPiEuJFhMivkvsfWshV7ZGbXVHejMedYr21nceaBitnjKBW9",
  "key4": "2AcApbeGVHWKZ4TXjpJTM9CCU8wy1PjdtY3QJ11oQeRsE6RudtCryunLXrkLeCnS7kYaCThfAGAQPYPu5RLgqNZK",
  "key5": "w7un8Fav7ZYoxmu6g4Ar42e8NX5LyxCKLkPVqYNVdhoznA8g81jeV4dDPxcbM6iAvqPZsNWsneUoLWCafMjBeMP",
  "key6": "fzwSUCZ1FobmPk6FFiBojHEky3ei59EHxP6GCsBPkh9FTN2DzbqyJRW6NmFbLcFZAoYFT6tgD7txw9EPnheaKUH",
  "key7": "qyoYJvyEfah79wvdhpUjgJ4vjGzTj41KH6aFLpXAsfCQgz8gaEXMzVsAt2SHLoAmbm1VhpEidKbp15BLEih59RD",
  "key8": "5fw93tEipH6dtMPHaC9SSLoivct6Unh6vBeGnYqZJ9EqjWp7Ety6EbdhQKzasWYED8X6bMLFnQk2DnMeZ13z6tMe",
  "key9": "zgB865JNpJqF4VoM9T6LL9vSEzWxNBWjSZKEJtp5SPBkJmKhuaCuNNqkeHjGMD872VMwqq4BvYYbMu7gwEkxEKD",
  "key10": "5XwYSDSHPo96ZHkcFJsJtPmCfXP4UUt68Q8mPiEgfRLEfeRVLuNJuZKmhNGEApBN3Yo7gkgnXofLowrLAzauNP41",
  "key11": "4mfZzCm6wWzb8DccaGYZjA3ZUF7MESDPXxA9nAdKuCe7MuFDRSXyokGDWR8LndaSAd13iLnZp23E2U8pQKAtrqij",
  "key12": "33nLJQjJ7LDignDBmveWqHsQQDJVGRSGJwyLogyUVnz9nBbeZG82gKhgahkMFzkn942f3m1p8UE2bHNHukakMtMb",
  "key13": "cU5GxMEm13NXZRpxWCvtCJn2NMxRXhZeSwZubptAJrxxGJ1GjqhtdVGLr2hpSXYznCBp6t3bSr43vZ81uZBZ7u8",
  "key14": "poNpfQxZasyZ6jRQjw31KVhaYGtWkaWxYAUZszTx46JrGWBgzQ7rBd9dpNcF6sqGbckymNGjppNRwmVA4HKgsAj",
  "key15": "5RKDBpaNSdYK5p9Na5Ue5UwuQhXVFNTm8ZfN4ezVNQrrsyzmirXJiefJqoP2RWw8yLM6juD157KwPfkyNZvVMxLJ",
  "key16": "aT79JU3n9rNijqL2E83mitSKe4fsXSqB84aL3sWv6iv8Y2boNCbptKo9guPmDFGSegRDzXwHpN1hYFCvi14naNV",
  "key17": "4S7m19jnNPYkkyaPMvczsaLbV6UCKJkDpS4rcZxdXUVDDDd9ZwygioyYSVMfuLWPUQVY4rJBjVbqdRb8LsoaGMNH",
  "key18": "dvfZnRYKwJ7EvbLo8NahnJksDMgV6MfppGaGZ6cLCoYy9uCvELPyo44amzBoUDWKQWWYLqyoxKzt42W8pwaahsU",
  "key19": "27Ugk98Gtv5qNUYdmbNiKMt3AhPUfBLxoAFtszryz5Vj7Sc1XhHknCffgYUww2fNdibkn64D4ozLmUrakyKdp7Bk",
  "key20": "2W7DYHekBsg2fFVwCPV1VZnc77XYNCb2BbBGVEk4yW6HJphsYRkwVP8pLTECsLHaVWntQtvQT6Tn2hkmCd6kUXSC",
  "key21": "3T7y4LpLjwmU5kSiJa99svvA1LBhwXPsx9keGY4AJi2ydvAeKCirXnxrtavPrwYoVSSZ9atzZ9SRNtZNDoKFvest",
  "key22": "526TYVCdHFZ4N9gQw61JAmuR6RD5TkZ987xihJx5NgzteqLFVLpbf4uWHSpfPKNsdnbNmZjSro5XCf2m3RoAGZ15",
  "key23": "2pnbGga8qx5wdDQuLYWLDyxBYXUdLNMQRnszmxuYnAd6RJPjCwhgF7cdQYzpgmbXvDDqyguhrYoJ5JgnQPsysEon",
  "key24": "3k8gabTGFwchdu2U3mfbfLwCGxffLJchajuyY2nMAWuvsezmcL7F6QYcA3fQoURYeUhPf1i6QmEffyMRJaGbfftc",
  "key25": "2qBTPJ58ZCbNHzLWmeTayeazggHZ7Dz2ADqcbXBB8h7eS5AHvvRRY2cEL6RJWJNtDYz2k4DS3aR7TZMREteDnCR4",
  "key26": "3834a6kjL8VNRDGYzyXzrN39dAmk3gvSe3724Bf2ggS3VVUugRHwYUfq4GERceB3BrxBSAhBb797r5CzLQ9Pa2sD",
  "key27": "5rTpDkJP9q35HfVYzuawo1HRGJLGy6rCndnr6oqH6nNu4kfWTyXFAkxTmaaHCzQDpJYwMev1r6vHcysSFpTooQoH",
  "key28": "obtjfZH2bLwvbAMSiGjeFAZanvRHjKRPA4ZxANUY1DFUXxrU4599hCkxf4YNeEeNBETaDF2FasXYXSmtvMwd1Mr"
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
