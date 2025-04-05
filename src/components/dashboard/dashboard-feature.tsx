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
    "2JETZefk4pXP5ULWj6RuRctoXTKtFGYzCtQk9PgqmiHNPYebrb2HKyuHLYhU3uDQngPPHPHrSn41BsEBKKahcNGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BoaKro3662wsVv28kGZRWijEhT9i5y6iwRCUsv5noyEP34BniNxDhcZTLjPSrYG6LrBCWLN2tNsTCirVCgWWpT2",
  "key1": "2W7fK8ZFRfKbMYiXS6krTfznWrjexo5p5AMzwCXLiKdepr7ovrLofP69J1ia5KW7yiUim3UstPYcrjrNMPkLH7vR",
  "key2": "4PS2mHihMTYvc2hx1ZiTQJGQtEhvvyqtJi2jELnWnEyqKf2VxNfDnFtWoEYWUKCdVufXD1LBNHfQVS5u7EDYvfas",
  "key3": "dPryjYTKntBVdodUaGCkACazzveHFCVnQhKuSyRCahG5Ykj3dfbZcWu1dAjHru6o1ryehQHfiCLg28poqB3BFBZ",
  "key4": "4HPz7x7vNKdmVW4uNMW91gatbLXu8Lu5UKHz6mxbotrPzXnBDp1K1AZqzqE6cxufvc46S4zJA85UWDJxZofFCFb6",
  "key5": "4Eyg5FHPXSftJYA3n9pkHcVbeijRqHR3WFr8JW8JmwaWU7JD9z1uxRwD4LwwM47tGFXXx9tYrN4xmACkN7Wj2sdW",
  "key6": "3LFeWMBdkKWJy15yj32mYBNcev4JgLpDdGMrqtBHU21EfKSoZhv3MzEgVVzej1JwdVyuADYsCTuKkMH3yS8ehcUP",
  "key7": "zMrJyjAihTZciBUz9hDD7bqEzq1hAYTEmFJoBawVbP5VCyuXtgZhKvh3UmVAy8dfjoPx41DTH5smTQAjRau3hmV",
  "key8": "4y9U6H7Ho9pXiWy9J2YWLQwRwJXAyJZCfqPJiEAZwjRrJw8ntVChbnaYFGzJDmGYW9VJv96r591H4A2S4BXqtK4y",
  "key9": "2FVJiuXDkfjvmbtZU2D8KkmRaEwYtRWkzYMafp5YQFxvYRWjonpDs3ALGjVRrgvsWuEdYyf2gF2Ah4wy9PkuKuye",
  "key10": "3BPLXcYE7uAX2wCW1nCcewngaSpPwWQW7agdpeTPTJvWzcPVJcWDhDpKVneRzjzoYRe2r3PXGSpb5sKSY4psoyP5",
  "key11": "MQedVi6P8kEFVLGJLo36yyes9mFgNgipbixLTsSFMaXGYhfpQNy2J6M3uBEs6RUgGYFTMxRzi78ocB7DWN1CBKU",
  "key12": "nfDbxX6DnG1weLp4rhcYENvWG9iL4W7wf5VW1GjfVoY4keXjoTE2gEiZAyVXBBt9WJ3b9qBsA8thPNP98MsSpfR",
  "key13": "39BArxH6nsX2AzRja41qVR5roybGBGqmcMXoAXEirEREAJhpJrCph8SyViZHoBnaGjBThE8Q46kPTRp8eNvr7oFc",
  "key14": "5FA4SuVGyTrycn63xRhDerYibdzaPN4b3ag76ZTqVg4N59rRNLdViWzXe3T72eL9WFmdQkZJadjWr7y31yseL2ay",
  "key15": "3wziYD7A48MsNGiNMyMfq2cC8a75bUhrL4MjnAJabAFB4YzGXAtNs14jm1Xy3ndNvt4cS6Hged5JzRKVtQvVXAsS",
  "key16": "2KmkXxGzMeyC5h5vewTXGdwNAaJkSJojdhUk59T4x1LUBn5ZSBmu2tTJxZc3h4gi5EDWpJPfTzX4HUrmjjeg9FL4",
  "key17": "9vmWLkSkMzb8nQgt72p4rq2pnPKnK1Bi5CTKb8ekXFTa8qSdfcVpdJTGUzAV5LQrVAK3YZA2kPtHTxzSHtxMYsu",
  "key18": "4WWCQug7s1s2vZXyHWpCJrn8MCzxFJZNJ2vVoSYRnLfTmXASpRGrQdTVsTjcpfPtK2qHYwLBSHC9fhefu8ZYDvFU",
  "key19": "3RNFjQcHtfwLjkbK4gsFKwgFgjGh9kiGryheQsLCn8ziDGbMTT3qeeYidEcfBippjd3rDxdXUsgeUxWmeMRG8QEC",
  "key20": "664B7cd3WwxXfgqVd1gNstTjDUUUGjR947uKh3MAKUTDdi5keRmLiEb6ewiab4G9LVWPVHfbjejPxN1qCVtTXygN",
  "key21": "5HZR7sJnfSBuYy3X8Hci7MGH4yogMvfiWXZmfRWZXfNGoqLvd6z9utJ4U5e7VoJbwL6UGBnzaxTkg9m1NnqxHZNU",
  "key22": "24RKg6uD6YvHgwjDuQssrxFGFUSbYnzedYFiupjGWJm35m7pXzE51rqjoVAhxgZBcDmVbHWmBF2eS2A83P1yKsU5",
  "key23": "5dR9fLAJwW5DRWy9sG87gRggvCHFiVnED5mYWf12yKCF6Me73XRArmXj4k1X41wQmLbWEaqme3mXF3p7bcYwB3Ea",
  "key24": "5ambTKDH9rjNWsfXeXVKJhaWyHHj6VC5du23jtx18j97kNGeGJ6vjdmeLN8txCLk3LgNdPuECRpmVxFGd4ovgaQE",
  "key25": "4qqdWGoY9633Wwr9LB9zt9fJLcPBD8YyB4NkLHsUL8v8mvZj9c6FG918uQ2bKUwzuxEVRzVBxsQSjjbpCaTRnRdb",
  "key26": "2QksSXX7R1AyKup2PSeW2Di4XDHTFL9f7LfHc2PtJgHNhopDSctSV9yKibBybpwdxEEVGfWQuYUNqbe1gEJLA8fK"
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
