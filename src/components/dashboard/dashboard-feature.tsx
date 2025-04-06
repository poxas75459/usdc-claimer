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
    "3WsuFQkBU6ZLEvpBQJ3UpfojbRsCMnYybdhUyEQZ3ZCYLyqt5i3TQVN5FRoaghrXKRUjMEdKgMZm7CjfERngsN5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fyUHW6N12RiETyqyrmGv6LZqixy6rVdyctDTF7LEgTGCyNAx71ikXFawwSSGgmf9gRfnaHBBXJrTQDiEYxd4EMK",
  "key1": "48dKUSRdzNz7RYnmNjsQU4i8MgqVpbNccvp1cBfH53jXUs74fWgJXv5j4K6UgiUT7C8iwfC5Z7zFE2foZLBpV54H",
  "key2": "4dAcD9YDe7b9Qw5KQYiHYQriPF2Zc3rM6T6iQi3RyAxvWcBe99gNVwMKDhRJZWXRbzZHdTcXYvu5MUMeBfQhysZW",
  "key3": "Pc1NRBt8jUy4TrHbnsocK8Un2aFV57rH9BZyvSWiTe8xKpHGZwxnkaNeDU8Hf1Uhc7tUhrutTj6DvFfQjKr5gtY",
  "key4": "3QDEQyTCkeG7x9X7veJLE3EFMkHzH76KGQrFwheetSrDqA4T9JgwgcjSxBSYig2xkciPGRYPg8TagigQxjg6kf3s",
  "key5": "mQN2UkDHM4jPHukgPJJqLmrLWkhaD9vHdAPV4gY5YQfximnUitFEM1ZQrXd4zLHTe9Xpo3qK5UafLXjMJuQH714",
  "key6": "3N6r6eyfuLuD85KEmZhph9EupJk3mDew1e4scgDfQwUK9YUZx8rizUkmgFmGRUMoQkJFm9aRmC9dK9EpwU7x2w2v",
  "key7": "5HjupUGEsudejHZjcEfBXSRXpBdQMxb4tz4pYojEYGz1xdqqG7YZjAgbYHPjgzVbCdpbEaqA8cZy1MX49HhQP6uN",
  "key8": "3kw2RarnptDy9qeAmNQUBdsGTjynCiy18pjGPdDsBq1nwcigUCyQBk8nZB1ggzm2pbQgYimZNKKb1Vg8gfLP5jtY",
  "key9": "5wXVtCSBRzwLZimbePaFKFSJzuetENcu643RGmxErpVwQsa4KDUG9hNDFp4oNkxeqLuW3BdBSZ32mcLGEVFr24MN",
  "key10": "4dxYZqkgXZfWx41yHPAoMK1wVEPmRWPakN3dqrAVoWffax77Qkh3AJT9P5bj4RRQ37CwknfvpMK8ZcF75jnswdzX",
  "key11": "3QzgSgGGkqxfCge7Z6dmYN2gBVPPqRrMmjx2TcusAdsbz9zcMhx6QEoZJ4wp94h42aVZsfkFs4Rdh7DQ3RzxHJwp",
  "key12": "3GDxG8f2qvaTZe2tZKtgBAffvE4JV7epzLsN2KRTgEa9GP7VUsvgXTvx4zMUYfFNYhf761d1JWmZMuh3e5kS2RZt",
  "key13": "219GWqW1S2DcTRCK1Kdpm8HWga2dN9erYbDxCn8GJRih31BHHw3to9wrUKLZRZ2eBu8CStgorXZefvDgC3RZBxso",
  "key14": "3HRhFNPPYATmicyuGRaRQYNU5APZcb9J9zjisBtb1VNkdcJ6zA5FMKnrSHViGLRJjgjD9t5VZgHPaW8c3YqtvgKt",
  "key15": "4Fffyfq9iXj2BMyFTprKR8gJQv3wdyvoGkJiHZS2rU7ZW4nbdBEykBYyYjFbvLDzuEVSnmFHgFfNaDu4jcLYFz2j",
  "key16": "5HrHhbf8z2dfe55Mp6fYgQP6SNjbHN7cZSBGo3x9tpCwrK4Sq3XqSsjfKnJsLGNfTBfuCZJ8UqCRvp5SxvGYg4QX",
  "key17": "CLknhTKkmsYFa5a7fakswbMGx2anwqyvY4Ph8Y8Xao221Pjej3W1JYEtJXomRau51sWEfDQ2XeHy9aQo1HNgkZR",
  "key18": "3mswtJZMpVUyHTboZNh6TRECtHcqTmSKwBr7H3cAYjfRvHbAxP44jixM7FtsN3nNX1DbqAt8hjw4iQTd3qP5C1Hi",
  "key19": "xAKM3jaX1cGGgQcea81LuAJRPtgwLEK7ucqj16FTHgrUPZGiP6dPCqwZkMhmMvizMpeP1Hkd6GXMT7J7JVYdsX2",
  "key20": "3Kiheu3xnGcp9dD98YMQ4wXo8jcGtFvP3ddBpooZsUbTu3SWfV28NSoRMA3rdsSpydu1CRJRMaub4adSFxsMcnXw",
  "key21": "4fEM4WJKPB5Sq7r6ZMpTqYjFzE8RT8keZ7UuXB7YFaYeR6mTcUjFWgfAVHwLBSiWAX4cvGcXqAUNxCQN2MxCJSmQ",
  "key22": "3C8vWqr5wxJC9pF51G32TEHWRkoDby8EFh7V99z2mAT8gTXi7wJT3qdNPByNaYDXwTy5tcJEwfCwsqj99Wyux1GZ",
  "key23": "2B9CxaF3yfLrEH1etBvqAeZeHNH4tgVJBMjHcFtJ46Xy8kzBroS3mE5vevHATjP8SVxMKwERtq78FH8GPHPsee9Y",
  "key24": "6CDqHwbC4GFKwPKZWrjVNmFQitLyoJsb5NLWaYsNnEZktzURaxCEqmp6AsBgsHB77nnobH4iiENzR4jVEbEBMxb",
  "key25": "4emiCRjiMZtFCfnexdgyg699nguEX5idQK7AwSNNAwAsRY84uvatLj2nake2HSRgvKugoCZUXEPG8XY6VUbEx93X",
  "key26": "2jD6vhDdFrQrDZZA5Hu5zuv44BqgMWP2DKgseSmoPhSyPesVDjAcTjQQt29JZZTSKC5MgPtuGu6fYAjJyuFoe5MW",
  "key27": "3UpbCugRaV1A9QBQAxGeUyy5RGZrk9RXeyF7ZvN8Dv9RgfJTrFoXKrpC5oTZZUuUTGagZPjgKWvvbyKTy5YyNEqK"
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
