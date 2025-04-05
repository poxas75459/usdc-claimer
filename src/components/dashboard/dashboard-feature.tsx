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
    "3ChchFCaa4gKdpzzM4wQWVBgnfezJo1U8xF1PbnXsFKXYZKt7wyUzgKD92ymLATBMUNLoThTVLcrdwVmMjR2kgLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKBLkdJZ5TCyPUMvKXKsjU43ZzjmJQjpF2mbEaAKn7C56UVaugVTKtZDasGiKtNLXZ1VANnmi7QdEWGTTd6sawD",
  "key1": "5PVo21tgk81mXoshdmDvSPvaVXPdGpYkH1MrQxEgZX5F574f6TRSxWHuS1u8QTkE18UJNdZ3k9zLHwQVVuQyHbee",
  "key2": "G5gkwhkf3jJzviFUUV3v4T9KuXBR9MEUhAtrLphbYvgyzrPWHTB1bw4N8e3qwWvDHGcfUTVbgFhYwH1Pm1zcayi",
  "key3": "i9d6tFoi63LnPvAK6CWQYmcXDPYK68mCrnVmVVUy9eXr35ezg4rx6uai16iFVzArE2ntDufA6kvbqQsH6yd5KYR",
  "key4": "2nL718NKg3EhopoLkenxezChxZJVCuu3UWYB5an2NtJ6yNEG17HAqteEpctyk1qoN7NdvEgqTup7nxwApuTviKj2",
  "key5": "35Tj7KLXMdUT5nSFW13jU1pHcjfyytru4rjM4KE3XJupVS1aNpFTVQMfxGLtGjCJJzWtGtJzRcEjuxZqbZiebT8e",
  "key6": "bbHpP8PPo4mLxKYJfsaLA4Q9ziJm3E6TqDNBFzuTHgNPCmZyiea8Mu6chzZa5X4CGB5cDK9DVDud4YSkyNcfBxw",
  "key7": "kaHQq6x31YMZzzhWhopz95JwzjPwXrEDaEXPKAxbRUsqj5tGwzXX5fY9JvdBYvEZGfg3Vb1HBU8cq9rX2DXpFHs",
  "key8": "3DNMnqUoJmpnAeyE3xFNYWX73xUt7mGBPYrFSiSH7hN6SBm4Ndf1DdMok6dGatVHoGadfA4oCTNh45sorT4ibxia",
  "key9": "2yP7xLbA7wwve2CQHEVyHEZ1jUFvqSKBEq2H5tfrMfsjaW7WfWAdFkKVJoYsBbVnH1cLx1B9FQJ4rnUH2nMFNuYg",
  "key10": "26nZizqeg97ieruyUpBMoJhx131exo5qkpMpA7WkTeXnJXk6UsxeD8bGXnzrYtn8Q7Et79bVAVUvw7A5PwxRTgDj",
  "key11": "rcLT8aU2mTcVJbdh8WX5dTBzFZwavbeatr9cNTq6xGro7eeZJtKrebLxk4NqKvuFD8ErTbZhHX2irvVsT7XL8Ch",
  "key12": "58suALUPnNqgi7KsWGqp3KFJG4z4Bt9UGTQJS4SBh1n4udzFLXdSiyTaFciV9vprvreU8zCexhCjwH3FgmWDRCGK",
  "key13": "H9ig3A7uaqTLCHVqPX2ssyjxQMfoL1BGeZ8kkouWwjv9eJfWs3kcULy2inUeVMMqjqWYk2zwAsiShAhXsspmZiQ",
  "key14": "5ixThsePVjtv7ZgMmzJ9PXxFbrTFzrcRVdgLJgTuk7JpNDdkr1mbCS6vLfZZELyJapWyov176uytU3aB6K85Dy9P",
  "key15": "3TY9jKPFUTfwPZ3hghQ7dFDLtTfXbAT5s278C61Ln11SeBQmTw7XVBgDzvUxb5feJ3pdaien1fcTouYS4bU25c5t",
  "key16": "3jVGr9YCUkxtHmfLqLApaNQhycW3vYPc26kCkG8NqMxqSoU8KSWVYcCPStk7JcpMvP8zAPtjo5EPLuZwieLVccsC",
  "key17": "2PaoNngBGgHnRCQWpFW98UjPfiyCeFqvgx5ZwSASSqSSoWGtGxGqNCjUPeQu3XyDqKPjrkrYSqNqS1McAbDbnUJ1",
  "key18": "4d4Ah5wcTaMyxxDNPachfLQLcNmBzmLKjizZ738mpTd9dkCwPxyfrTKuhuhxoeUtoD7NHRwRKmvHboevAW1vzF13",
  "key19": "3eQpqMNb3bofzd195c1cfYGB8FekdbKHmQKm2YYb22xLh6ctrJG4ntT9tyeozkaDM6AoDYrXdKeqXtCecTeK2xU9",
  "key20": "3RakKqtbdBZwHxH8LFuQ2GftXRKtFgKTZqVBLMDYssf6PekzWCBegGNLSprQ6GaRM6fwpoSKwMEvrAZpEkW5LSnA",
  "key21": "LUdeLkGbnYqUwfWjJfX19w99o4UK4J4Q1Bo47jaShtiSxvDWzEnC8b9f91rmAmAHjjVomdUNFDAWBb8aXRwjsVM",
  "key22": "3fGHJNWRCq8BfGASVzi36vXgK1XtoVf3mX5i9SkJfN3RgyfwBRAHAXUMGRyMkA9g9oxzZ4zkxbx4t9D6RXB7QxAM",
  "key23": "3JjpCi9rxaEkUb4fuPYgaituqzG4fQwQN8Gbq9DTPLTQKMtb4uncc7cCGrcMAneJSaMahtw4YRbX4sRjGdDuX3iq",
  "key24": "iCFwKziso6Dxq1zstwMPu4YNtZSWaoxcnsJmZBtepC9LjkNNqDCMLZLNSKvR5Sn34qZthcmC9asq2GSQk55LdCu",
  "key25": "4fk1p2GWdEF1R1Lbu2Bb8U8sUsNLkRhVDzfu55JPk5nYQsGy4mEgh62prEdeQg7rrmBZNuQJhQneTUvTsgJ2Hruh",
  "key26": "5zeTg1e7UHc7ZuQomf8WqXh7M57R8rsLzZKktf4i1YhPDrTFfCyHmg7x6VtDGqMupkZSrMyirV4v4pc3VVSMiAGq",
  "key27": "bUMbpf6SW1CFM26gVakxWsmx12MYA3WMT4j7B4XfqrR1Liy97DU4q3ehzvCxpFL9WxW7Jc7or4QJy27qiG4jYZb"
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
