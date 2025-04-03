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
    "5KZJanoyopLcAvsiZkGRU1RepSydnHPPvt6AaJNftJYBNYHSM5Xijuw4rPZKWjBXCq8w8kTTYzb6ngGih2WSREiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YVJeEt4rCnG6swyDMh6Aa6EuxArf52VMQC3ZJFJhMGcDA2RTVLDdSWCbwsuEgxtTP97HoJYSHougYVfMKKMbtUS",
  "key1": "3Tcp25mTvAW6sQZakn2cNik1fhcVdPRg9pXw4MDEXeziELwXgTbv58kxDuAU5H8ymu4jhijJpMWEWz4KfZT5CZJ3",
  "key2": "38YCvhvv7pKeA1xsCzjtZojvQWEKMJCBT6sec3LnzQBEh3SDmsLJr8WjM9FGet9DHLP5tsJPP5G6bNysiCBGw7VL",
  "key3": "4ZAPVp9cSbrNLn5piHA4VTiP7JpJ8rf9LKtdtPxrfDRMYTokgYSvLboHHEfQzNrRHc3VHA4GJ3khJAMai9U7s5Bm",
  "key4": "5af25DbbXbyAzMDaiCRphoBujzixxy7TUsM9aG5eyCtEgP4yWFcnUmAGPH7JiYASkhQ16vHgGNH2cRqtw3QgVZPe",
  "key5": "3zMUsaowWyCAvPFrNpJp8y4D311AAofJmFAi2s17tyhtk4tuyRZgdU7TD7gh4nxVC1zPHn2zfcKHE4a8uQvaRmSb",
  "key6": "5tujhFDvVyUMr7fPpN7YtCMKwME6nWd6adyeuDdhVm6ZAHV8BBgL4u3Q8H92hPnCxmJs2kWHcQxh16VSihGzAqPQ",
  "key7": "6nWtJ4Ykxk1jCK2LHwiytqW4ykLy4pAGwEHdmZtXNxJBBXkv7dNA2FYbcrPNZxSCYmpLgYkEdeXFqxcu3pcbkwS",
  "key8": "5wqGeeCAAcfGFHkyUBHddaKZs43y5sKRzXni5vtrqgZr78zCMrPsr8jKejEmczbvCQhfDWJQdvCiausBCrLzneBZ",
  "key9": "2taJVdtgrnL5kqpLdbSwcfobJFpECZLharYVZEtsfvxARDbGDL2dLtibz1ZdNg5AXqhzsmG7VDdTDT6zc7oVG4a",
  "key10": "5Rm42CcFuueKKUcdBRyxmRdiDrczfD1KyCSpQztpM1LkNL34Rgthoqn9v6V1ayTNntYU8zEvoWwCr6T1QAabWDcf",
  "key11": "5GK9eQqTKBhqfr1Feyn57CbqiceoU6v1X4vixTHF6Xi88vnWojASc7okHmAvheSGDoX4BMrZwMLGRVHmdLMZZ25e",
  "key12": "cF62keg3MfLmeqbFhPpgaGAcFKXBdgMHfQtLgmAWvqGhX6QuBSBGPWwQ6bjnEFY5SRrKX4Ag2vwmYRYFtzmmT2v",
  "key13": "2Qj7riLtLzQy9CYbHDwwHtgVYyYxpgjPRaqSxBi4BuCXJzDVcjbj4Ta2hoeMd8f58g9VEP4R5Vf58RJwxY9EGLjo",
  "key14": "5juXUmZ9utHBBtZWKfpsHGHsC3L4RYXsD2PmPavDHRi6LDynzkcLAYJCY1DmkH634CqPidYe2nyXKLmpLbWTRb7v",
  "key15": "5UL9ACph1X44JiybtRqE9MDvZ95uptmaeWq65ZjWVdzJKELaeXggNkMZzdNnCwxAaFCiycWPsBUgatNyGrcUQdFL",
  "key16": "4DqGbcKh1zvAbGGsyuSqiSBM4nxWXFWFpiJgpbatzgX8WUbUo6nRzSVBn9nLmxfKB9q3yJhEZ564JyM2fznwfuVg",
  "key17": "2hkYYc47z871ZQicKMNNiowA6uyWFkU2YfFdhAKjam5D1xChpxepYnVfth84odu2wzWtqYibCEB75h17JF2RDRcv",
  "key18": "5WR63seZMqjRKstA3mkwGhEbjVt6pYhr9xjTwDEGkyRTEGWZ2ZMwhcTD5nKDu2NzcUCd3pooFM2ujXD1emWx3KmC",
  "key19": "2MtMw7xqE97i4jrH6XEHSrtttaAYMQ14HgrZ6dHEiT9vVZSYXy5fqSdX61wufwM2jJZWS7tVV83ESq7Q2d8bDTjb",
  "key20": "5fPZrbDxVxwR45bGR9eDiccUKJfbfty8TRWu41CA98iWWh5NRo2QPd9vXAkMdJsZbDyGXpkUeGMKDw8y1R2k4Qbk",
  "key21": "5hqhqj2hoxbrEdZTJAScJXmzkp4X3M1iwz933Ku9prSgQ8CXVL5WJa3svQ6MGmSDAxhsghSGzXM8bDyB5gto5hQL",
  "key22": "5ad3RqvituD1nxA9AjHW2BVRwasCYcyND5v2gAqLssnCXee5UFWFi7uHv1BJt3HqZBDnfxCGqA8QFgszksCAphzP",
  "key23": "4sVtc8wcvAHw26oHwgQPsq4JopuiHXWt8yvMfM6UvDVM2PbReDsy5GM469hkkbzf1cWXfa4w3W53R39JKZsnTRez",
  "key24": "3S3DvceV4bo3KKJ5mHQ666RLBHZL4M29japL8qBtCBydFFf6w98P3cFrAoMSRNagujEHj3tEqHd8kVQy4Ry5PdMd",
  "key25": "5siZenVLbwKJLP1HvgWYMvREYhCmRKGpVGvoB46ZiKpW3JbMZsHFYiqePreLbau4UouVpjWoMM6t7Nk3j3AK93Vp",
  "key26": "5bBXyGgdgvNMJFPGWcpQHj1Ym5qgPBECcbN2RViE65mRGinboMDs8VLTZpaWqGwy14wEt9fTyjAfJgpegBKfSqQL",
  "key27": "3AZfErcDu3K7Eyoz8D7HG9oUWZMk7hp3SxMgcDdh3k2NW92y2QXibkzCph9FgXTVzqerh3wnqiGZ1MjvojzEULZp",
  "key28": "5XihjiyhV9NrJBAiMZ6rSrxDKhQaBYKp1ptYQhgkzcaPZfzDJnxBEHmWgnqeuWXP5Qw6VuVSwLqpWZwVhvyg1m4K",
  "key29": "4C1uJCX5khwkQ5T2jPobNcMqqRxQSXrQGZYD31HUpmNHK7mr8A8G7FpmtMUEnoGbTSZmmY7AtQmC8V5dfMDdnx3b",
  "key30": "2HMht5xqQNxMu6hTXo34VHuqd6UcAAg9ZEQSRWXzwvdLwq835vEwwerc1Ky7ovAfzKE8wRrai9GQFhqqVVgcYN8G",
  "key31": "4YkHthZde5Dkubt3Z8to3GHy3pxJ1hnVSCqxqkH4axT8aTxYUYTqwiFCxa9t9as2EgASESAWKW9Y9vkribyvPcgj"
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
