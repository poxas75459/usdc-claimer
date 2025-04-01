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
    "4CdEnQjsJrQD6xkgqcLzmd8uJT4uD6WHWfnUwVsM5ASCuP8Zo1fkCGjfNHKnXZ6xJDQwPu3yChbEKjrYGsvvq4BF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixeK66ZpNdm5FnpB9cH7PTsfQKWawBkmVFipgxMZhQZdzEUhxDxvei2gk2LWrAZAo627nreVyGb35JDyEkomY3p",
  "key1": "5REwQTWbBK9R6MYDYCPSRJTWNisGd5f9Rz5VgvWER4QdBnmcvEtP6b23u1vsDjM1uRsZxJvm3ko4LdfnCMTqnYLK",
  "key2": "HYL86h1gHpJfQuo7pgVLfnCbtagqzj5grwUfbigeHr5UnQdn4RLVxKBM2RgVj281PfTmFKVRKLxSb5cqgyoS1YC",
  "key3": "3Q15fy2xaqetr2WTxwWgtFvibP99JyBKWiZeCdHpRjAfjkWqGcjRSVnprkv9vNv89HLzGq8tfQvLqczweTSA6myS",
  "key4": "4enLdzcwwkC8Xxe7pKq7G1ZrGEWnZPdgoD3FgLMR1KmrUWahazzfB66Dr7MPeU71xNfTZX9jwGvDuxFcuayRRRy8",
  "key5": "4C7jSzfn2nMUMVfLcEBatJ9BDvkuK1ruo69R72Z7uNksGC3LJL1Hrf1DxHqXkp2u23jHqDaTz5z3wK6uBhLDSMPh",
  "key6": "37DPnQ2E6Lmr73nKSqCJ4kU2U2iww57yCoh8qXn7F9kj61L2ViHXS1RUjcr5AD9vQJDXcGbquJiuaWxNDuCekb9p",
  "key7": "35CFvXXNDqhUt7m4izpve63HTkqc5QYSSGRvNki8n2xBuExdeTo639rN1E5sFkdMMvwYMjs7BneYLuonv7y6sRqi",
  "key8": "pF8xTnxrKLXLU1pUj7aWYnvG4RPgKbhmGU9XtHg6ecWUWsGXeZ8ZaKjqGn415gMGs6xsEkZoWuC52ziZxhEaRZQ",
  "key9": "4vxv4AYrzDCdNELihUcSxeQxANE7FajiqakqqE7wjE7CT3Fg4WcWxp9dGtPu8Exw4mU6Vibq8GkNJUzSRyUMxw3q",
  "key10": "2uHNREgV2fR84H5JVvno1b7uwuwbWgWxzmfmDEWkRp22xZK1Dvmoc6TJFMWsoAPDCLBHAoSmjyTrfJcTZTM94xom",
  "key11": "4hKjWZHsk2RSbq95kUyoFRVaNdewph2KEXiRTTcDf6jGXHBFKA1CHjycfjc5KkM566ABtbHh77i3J3uJesLGQ7PA",
  "key12": "5Nc5NpiSaKCBd5rP8S7igWsiGXUCZfNBt3DsztfgT9gQnxifTfTFZdwR9buPnEzbpjNvAGvW3eUMxQjao4uLjqSC",
  "key13": "52bcEzrbKEjVSR5n1nt8BN8UfPjXHTRB51FiEbuT4ukx7W4GxxuR24tAjopEY2FQLk9EUJt66hDG5AagdS576EVu",
  "key14": "3vSgsNoDjXBeEftJTBeMiRmXaq84dnwcHFoC9JKqBR3FwCfXqzJYFPo6EYLzP17rzCivE8g3ggAxFWQ9cxFVWfPR",
  "key15": "5yDfdoNBYZ7WX9Wf7ZrdRC4bnGBLrciYUTMSwYUQDsbL7TUtrxpws8kyEXF3WDc8DCUF5rvPpfnwJsT2NgEsD1oN",
  "key16": "2EKSRA6euCKjm8ejMYMHWH6TsjayXWRDHVmZvqvsMXj35bQcMj1k4168B2cfVZEz63VR3ij2eEZZhzTa7VkjEgMy",
  "key17": "PtLr7HRMjXf1Qcy37FtF515iDmq3wP4DT15Lr2SMq89AvfAVKUuSqHsqtMbbsPjQhDCA9s82iw6cLJJAgtytTqQ",
  "key18": "q5dLvG4APGadrZugFFjCCauxV5xJ3ZM2rEtiV7xo4FkKFPfFtrurpeEBuvAFGaC99g6TpqJWRswWeQDgfMZEhbe",
  "key19": "58jRhnYiHPABnxi95ZaiyPeWo6hJmC2zVaDavvAqdQJ3fBZ1ten2FSuNPEjSi6XUUvKoeAVGNzwpvBGVgKqsGss1",
  "key20": "4ATnRzUHVbYqLVgNuZJbbaZpLZunRe7bBPoW7dHxYFSXE9aK7LQH8bbN6m6hH6UcuBwmKzZE9VJyNtJXos7E2Ymi",
  "key21": "2wF2w8PX8cSp9Shhyd7uhhXvMFJKk8MfjpLRai6FZpHyCEHn4kLB3FZZJEKE6t6vr8e4zMTCk9Z6Coj2vRSyJp7e",
  "key22": "sVCgoszBLgjrdEACuHfEQTbnvKyh9n7ZQhCqA16nXCFhFTbPYusFuX9zYAHc1xS4VJ9ymEjiFJs3gEv3v5HKXuB",
  "key23": "5bXFuhPNWdDwUFPYpxPF8v3ZpaRQoHmPwQL4GMbqfoiTg382EVjJ21DxJqwLvzd1bTta278WvBCKaXCBuXdCU5mV",
  "key24": "HvT8Hu9cQk9FWoxF3xPpShQqjS48Gcg97xP18tyKFtGZAr46sHXvgaSHcrUm7W39qDo7cUAYbGNAFKKNhEkwb57",
  "key25": "5e4RoENew88dWLRp93uRvdfgPc8XGoHywwJoGz9V4rDaWqjKzq3GV1p3wbmsxVbxMVCabT1HowaEaJdTm5RmpPHj",
  "key26": "58ctWVAuG8TvVhGmf1YcAus4AfqAV3VphQjYtiZbZsgx3mxLRrqbFnGwhbnGik3XXmdPWKG2kCYTdhudMFZYFB58",
  "key27": "51C6ehNdbjQUGv9NXrBLVaXPnmL4mRcc4sUeEx8KnTUej4YV6cDsKtCP2L7qGRtinQNPvkZgiVxfSyRKdBRNKwD6",
  "key28": "5Nf8jZd1zLcKacHqCzPJ1fyLnxHnSttgAej5ZXmCeApwTFqUEiihLPYeDsDcK8GHkoewBTUuGMEfsGnubXpdx9g9",
  "key29": "5TAjdKYo1YESwYF8sd1X4TQTBJxv8x281SDNLSBSEmwa6E72WbHhi8Vy7MJKu2DKG3ZfKfBUzYg7XfaAVCW3Nh26",
  "key30": "28VQZXek7nGaFScmBE4g3EdgKEQ96SnhJCH7djwLxXNnjZj5eQuG5fW2BQskwp2A6342FJ63GRU17b5ij6QsPBdL"
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
