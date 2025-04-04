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
    "4F5Cron7h6Gx88fyM4TZWrFTQhMAC3vTkRZ4zBgvHh6HSHRHA8tEwD9eSoAeoH6iq1P7U8i9EfbbfXW3SZeysg5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F9QhazkySPVoXPNvHMATdMDNsqCCKgV1NvenhmonoxC5N3YVBWcJTC2AxckgwrEc7gDAenUH6ftoQs1LjSz4YWj",
  "key1": "pyRLmkTaoVze865jz7BmKEReDh2fQLSwWpDGHpb8UuqvSWJEq78wbCPh3Ao84HJVCxVekeHVrdwW4zQJNFtfWkQ",
  "key2": "D1PutB4pR7qD95934JqfhDE2UpDX8avzkSNjJhw7DDPS2Mh3MTmU4M2NudzSLYadeNG2fydo7MJd98HMReKfnqz",
  "key3": "42kCg6suHXwZgopcutwj11qcL7iWMWWpCcR4XdzsFHT2UnF8ZBfiaHFPd3RtL5qGBndofLCfMBz9xMHvuxKBsVSN",
  "key4": "5gbd8oBzhJ4x7fAZDM3H3wNVbvEF9owXTBfeFi9s93e48LK5PcGUeS6MwwrumsMmVyoZUgD5hmWR9ayr6RnPfVBf",
  "key5": "mSVuvfFCGycnCnxyTRZLoHdb8b3MoArLVpz7sYbGjRuCAw3F2wCzfg4rDm32durcVn6sEcmTXqeuPUHipxt8dwm",
  "key6": "2y4XadRpN7kAS5YhRgV6GUXnvfL1GERhcQgQLA4CZhDQTkrcU2jsQWnGjVaBKs93FVF2p49CEk1uwAZAcA1iEaZb",
  "key7": "2zUvbLWevsViV9Kr6BFj4RYmhQJnTXEcR4k6dNYp5xVEBSfHBbxWuhcnoLmXGkXLtqn7MEqQAsRKTZ3jkm1K2vnz",
  "key8": "2hg5VgLjKKu3ycRpU9E9dP8Ki9ME4VxuLEQF9wtwrhZLKbzLdvdFBuR7KzBcYdGCfDtnXq2Yitvn3qG5p75xGobC",
  "key9": "4bMjUMr73ocMgxfS4Z5DNNDHotxWkPQVBjHLWzqNAF4hravHYrBhShf4qRf6zro76bL3AQduk1f8VeKCxEPYxc8R",
  "key10": "64HJbRqLRjSNWBgyWN8D5QUgSBupcpUhGyQf5jMZkxu5MwNZUvXEniXxUXVdLX6PKEdRnEeTSwvAzSrJJppzQ59L",
  "key11": "4QEv7ENKEfjXE4TGPap7n6eaWcAA7VGszN3mwk8V52qpKvFTh7XribyNFH5w9CyYniFaAxrRER5CayCrGJTJL37P",
  "key12": "64xFvT2huAWLFNWzkVd1Zvo9iQ4LVKX1Pj8jqxWKxYLGdUwaqRoHDbPQneSwMYzdLMvMz2QucShYsPdXqg2eX87D",
  "key13": "65UMk1JoZSKaacJ2qGJBk216dzMNGZkkXafv3sHoqJC97PzcAsfwNhHYVojQP6heyFNXRfW6MS3vbZ2E2rt44LfT",
  "key14": "3dzgDBvwZu4jio1odfnNYYnCwS2P1dJXN6Yg2WnWXfAm5xykAebiiPH52k6XurynPvujE2M8ctbrcuZV9YgXsqo4",
  "key15": "34rXqpnoQ5Xw4w2AEH8H2oAbCTW8MVH4iJz5UUXN1LtrLSX9GnQNhvabLD5n4H46G82dZ4eo6BNn96Jsh1x71tM3",
  "key16": "3RqjsojmUe3vErNh64RjDcYMWUmVXdcgmo3jnxoe8rQaMmjkFGTEMDHMFyX65vegom8fDo3MWijeSM1NzbZNrrdK",
  "key17": "29nxbN6jo2mWmetxSEbYdugz3jxiA2W8M8kgCgopvcZkjbcV9tuTByVbJV4ZfXTs2uHmZ8h1D2Zjsjfdek5edsQ1",
  "key18": "5ZEJ7o4N8Yvkj5erJW8BrHydrXbxfvZirfuj6bQu4BBP4FrpQxUxDYKgWLq3mzP3aK3z64r5MHG4vVsWnS71MnXC",
  "key19": "5H5xEnsWLj9k5YQUbBAivQmcvSY4DwjMWEvyxkxKWutRvhcU1DKZqQTRkK44T8uWiVeJ1MruCJBVAQTDA8LY8SUG",
  "key20": "2x9C5vvFknx61p1p9VGxvJAhcV27oqno3w8VZXoJBxrncyc5H16N4TvmF87HURkGdzFMA6hSucRb8e5GZq8Px494",
  "key21": "5BYAkoz36BoyKqnbNc5vC6raq7Q44SSNUjyCAbKrKHm74uYLFvjFemQZEAvX4ArJML1hDGAztu4wzLHoj139g1Mt",
  "key22": "5CbRs5Kw2ukxkFaDBmJZFUhZ2sGidbBPJ9muzgCehFtDi6P4y2jzFrgUNZ9sdev5CYMAfdYHmvzJhSXEagp6Wcz5",
  "key23": "4m13zC2FrNpAx7dQCEZDW7eAggMzZoZnQajMcXmHRgB6znsMPKFvC1KLK4SfEm2c93jWDLmX2n2T8X1g6Z6tDamG",
  "key24": "3QCKttztiHn17G77GUpQwwHQoDMhBrKvaZ6aZYXrfp4YKFFJXwfXfy16RWGECHCPLdwbzYvYoTQURqSf7rZ833hJ",
  "key25": "2h6vNrLzjhR5yA2qYATXK4JKX4BzZCFbjP2LBXbQwzrPfy1dvZSrHr7F4Zfbmc9uaRY6KJLMZcNNYdsNQREpYb1Q",
  "key26": "3AxoYgRTAD9UPtX4XdDFfhybKcwRHbqyDDRYfzW5E9owv14SMnGeReDPwpAys8ZY34cNZ8C5QvmQkgqxqMb2AWUW",
  "key27": "5T9sgMfigEBbMzVgxpEEy45FMn99zQeUh1KdFg1YS65t1YB4zuzndUijm3hfVkJRCERXSuvkePkyecUfcsbKUDTr",
  "key28": "ZcZYDrctXTk2GZEgFmStA544dHGLQqCbvxC6wNGAaNnjTsTYAsWmnX86Gfg12xzA6CFesJidSPBtJgVzRmeaAQD",
  "key29": "W34WMC3oFL2rxiWuVX3h5p8ouPKCfR2HsAWGMm6be7HsweoQBTe8cDk1JS5fmiijwfDmtg9EudtBS5MawtjARbQ",
  "key30": "3zKk3aXRsu8i8TgNHEbC89F6pXmWdxUfTVg1YkE7YbL3TQdVZwfCLwb8NS6FJZDbh3JMiozGfVdNx6eADsqAHEfC",
  "key31": "3VPirGQJH4TmzENh14v3bec4W9NEaqyZ2Y8XL3TPQGcgiwTFdV2iCK7SM2FfxhqAc3JubmxQ3nVwxtNjhj3vuo3d"
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
