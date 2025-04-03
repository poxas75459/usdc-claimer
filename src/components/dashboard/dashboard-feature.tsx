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
    "2MRhDzfJmd4Upj591BQ3EAA9UWwDCUrsi1GmsNQ7NvSM6kk3E2TwygcW9BEaAMUbqiDUFvcvfh45xfFiiua17qo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EsZQGeov3LAAJayhMDwKYp5kucpF6kA7KXx5BdCsyYHpKvDLNoiauLhbpiqeM7FkULAQDo2P1sRJe8HcniuARhq",
  "key1": "2wTTihawxmrqn6sLDRuD8JEEXm6gHynuRsRmYjEZnqJKor8e6waHYN3bPmqcFvQfaknkfcior1wW5NQqAReY5AaF",
  "key2": "3ixRzaB5UCN4nUnSFrNsxPfcWAbHuf7PdRUNHoRKZxrVnwkXBEPaeNPmBBBov24PwLbUPoLsLvwFe1sjssjVhGUz",
  "key3": "4ACq56t2YtskKHPGyM4d46D2V4Y9FgfmXCtppVo9mkVchSoh5DcK5QFUUmGDDdkL9vzcUh8HST9Aok9Ut4bxJri1",
  "key4": "4oNiQ1qZNZyFexcJjCyijtPepsYjcaFu3HKNz4Q7vJokqgE4943WoQMprZrdo9BJUi8P5XaNqKpt9dYkqBw7nvXj",
  "key5": "3iiQVwNMNPpZ3nWGRp9PkkuEwY6JhCDYrS6dn5PAEui8ZZU3QtqHgZc1w5tSrA6qLFdvRt6Qkz65PgZnmdxgvdbF",
  "key6": "Zqfb2nfrPc248LmTVLwcLeLpBgd4QWoEfpxLHEUfqnS29GpyTv8YTcRvpLgydwu9CzabSQssfNCt2H5GkUCsEAM",
  "key7": "5AnDTcBVk9WoFeygNxaveaDL49dVbRYKm89iqCsetCZ49fv58iVDxo6UFbQPr15FLJCrsmvNYkv43Z63uZx95WiK",
  "key8": "YXbfA5QYYi3qdQMZ6GL2KW9UjeLReUAFPifd1wJGuwgCB82KxzHgkAqLc33kTfA9srjBHGtHa68xqqQeBGDCMm3",
  "key9": "4L6dkm8n6CLCAxX2CvGqKYNfRA2gUTsnm7D89sjG8QEdMnQSPL6J3mEDmXTUqxTGpRbWaw6KxUD4mzUFZPqB6pmK",
  "key10": "FrXJSgTkAzDGmjb9cDfMk8yxkzay5Xnvzn6UegT85p2XTk7zB49kBVwv6ZH619HoK8VkTvC2BRM6GW1jBZc74Qf",
  "key11": "38aZq3rvPdB6vdyu2dMLbsuNwqutbFopFezWB3qd1WQ6AfFwD1GbDqF71ghMNFUHWP58R8G3wykcRg9KTvbUAr1J",
  "key12": "3GvtHS2sitpLBmHgwmPTHuZcaqxp8dhxBH877CfEqacnVQFcAQvJxL4XEtimHDgm2aJx97ac1HdW33WmdKDAAX7B",
  "key13": "cgCw7CcabBpm3Qe1Vx6HmYXQhgHvBGCmvqM9fmxa886WsCHe77doc2XdZ8J66CZmc3ViyHUYtzTNL7mJ2w6XvJb",
  "key14": "km27zE3dxdqGiUWkY1qqKbw1wN1jarnbW6E11Tgakr1UtKmdAPJXUoUNnrnk1ttBme8pEt2DGFJy25MMrLjngXv",
  "key15": "jcNrhvCaAQ43y3AVshLfWp1L7Z3UNi4xoYFz1t1hWKSNiNBu2KZ5CW4wrtk3YLY6beL2Gr2C8gU4ucx7Acjrhag",
  "key16": "4qDcHquEJbhE2ktFDCRpztW1RcUceNQ9CdbNf7RWg3bHX7drpv84Yms8C7zgpkPm8vbGZhghJK7Q7praxQ3tUBD3",
  "key17": "5r3cbzawNUb2APek14e2Sk28SS8GZwyCwWPvu4o3gBPyhvsQxtsgSQ8Eqx95y11AwVX9HHKBVaLeZmoxQ8eqHfH9",
  "key18": "3H1wf7s7CVrqQ5WNkYHJLcw2qz2C7yGj4YiU8zqodrNApt574aWMWw3j5NXEY6eebew2BT5VjQxuBVpPL6qDwJB6",
  "key19": "4yqy7SZNrjWix5j6fS5jyrgY5A7pDNN1GHkEucCDUXDrLRHCBk8ZUurEKTExnM7m8pL6g7cUCoGR9FAhp65v6eD8",
  "key20": "3ZfgFeArvLkt5yumjMmETFXEExQrt4da6gCEEbmaSikGfUbdfPe7FkqbqNwM4XvkVDngcbKAg9b6qyjPnsiBKQ3Y",
  "key21": "4mNe7iY98VsNudWN8WjLoEceSDWD3p45FY4hLUk8TNq8cS1J5CubSEB4Gnks8TMYAFaVwQEPQo9CF1hpjdY3edk9",
  "key22": "3rqQK3p9EDdEGpnrChaR4LndzC67bLcBWfrA3BAop7oDg6rNKCoURz3y6AQNcyU4TDebcm3L5XXfgioqd4UbLFSn",
  "key23": "5gt68nyfSmyXNjMA8q8JztNfLHFtFuSaZfW8jBGvDUd78FyV6rNfiUfdiHVQTVaZ8rm8inY3nStD8aR28LjE7Yuf",
  "key24": "2exDhuXkxAr75iyefJEqFFZ45Nhg9NZ6nv7r4ThF88eSnU1Z7LvPcgRbhryUA69kyp9FDi3AQxNQTNijGUcrk9dn",
  "key25": "kxxFHZ8CV9xZj6tdUBg8DqCJAnHpTSBsr9NfdMSRFL8kT28sG3fxbUjDmdbZeBwc15wffKJXVxQvhDZBTDdcwTe",
  "key26": "W6gqzpDHfVXooR1wZpkijXcTtBSFtPkTZuwLB3mLoCmDDzvk3cMAyXYvAigKL3VE2ueX8Xegc8KpA9jMjeL1wpF",
  "key27": "sGQLRCpu4ngUy27x7djRftWA2ZD1yLWese6ggQu41LyRREzy3aKC2PmWqaU5wJbFz1MKokbJw3uKCneE6DcvE75"
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
