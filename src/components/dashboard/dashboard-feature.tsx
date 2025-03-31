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
    "5xGTjUnNcmH527FZszmzjVKrurtqgtZpQVz76zV59Hc39Kj3NqVPVM319eY1oJ9aM9dkEZs8ko4agqme2yuRcvaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1VtozXfa7VgpHriHwFYGgaQ5r7pLgdKg8W7MyAj62SPeAgCar4yHBgTW1oAn7GXSMThuhkjiZz2vxA2hAwVFB2",
  "key1": "5jSD9VxwBnRDcNUGKn3YnuiWK2UXN613ZHbmqX7wBKRfApwGs94GeyTKegEzoXU5s9d4mURC6zWH4vYDJ4RmibZa",
  "key2": "pUSPsz9BknaE8oqK7XaLvgMKwTq3G1h2qC12LFfdDPKzQSSov2yWXRm1vt7WdDTTsoYLanSLxnXudYKf9Uy7RQ2",
  "key3": "34Uv2a4HEcHWr7RjRg67MC2bsMgpUPyxaxfhQeXsLUAmWQy8mXCkb9xTxdmdNGHq5UmGHbX1sgJTSk7SmxRHxsA6",
  "key4": "62xNYLZi3rzyXkvNTjqGtDs1RXgzqkC5BWr48EXsR4sNkAT3uPNA25x9EfKVTqjAH8ArTtHKMnwTDKEN3dDbfkhT",
  "key5": "3vCiWF74kTVoJ5R8NVzJ3ZfdYHzbsAuhgQiDFSbfU4GNDFVaAP2LCGjfHXkYR9Z2FfsAu8hTn7y5udaQeQkr6rx7",
  "key6": "mU1AhsHLJCuuRG9UEgxFiBdqeFbawVC3StcDTRoQcN3ijGNAf1oMuPUuHCkHsxcegQu1QuxhzpWhCZJbq7aFC6j",
  "key7": "5ExePeKiDuLStEEsNawyJvjZBD6jxkeCNNSe5V2cGp5QPq1RZz6kFAqVou4dNEy4iLt6x7yPs1QUiQZHeguAr3EY",
  "key8": "4QY6qaYPAwnaFcBz5vzju31c37U9pqJHGWMUrXy3LTJoVWdo52CPcU2PnsMmut47BcFv238DrPhX6LW2mpaUZzzZ",
  "key9": "5pAnUDzYGtcYcQkj3WNsLc4R5PdtYenqCLWwUTkj9vMsvdL46yyE3ZPzrNaFwqckmT3sMc8s1zGNXZNVKkoXFNvG",
  "key10": "4F8YJquwrSMggHBbaWtFK48h4i46sQkGNcxsF5LoiYaoVtcTYMLgnsGrrwUSAXp68FNgS2dfzAZYq5CLUiNc164x",
  "key11": "3PZr9DcEyXXctMq48NmXrV22hE94BLcBDZAb1asFjhCmerbJJ6p4jhwVyBELaJBdxvKeaabfTmqJdU9JukGGGUEG",
  "key12": "2dfQeTashmFVQGjUPnKz5KmfXMouEBviyiiZGXgVHu1MrymWvwhJwPAtT99gE8opY5yorSy7UaMiRzSHH8Ctj2pf",
  "key13": "2XV5wavqTFEPHv6UANNYyTzccUBNqj3SEn9KNuX4MTS46hRyb2Zn94rX27PWNdR9hEiVPEHNhVMQot17Ym1LRBbS",
  "key14": "3dvqYA8bQuzMxqXWea2wwDHogysTgb3aWKcSFWgubbFY1jmTJBcdy5QWY9HdEjbrgNZTuAT2VcH6eX1oGVzU1hby",
  "key15": "5uCotA3usqckK9yy9ZxJ9cXZhYfz2AuyaUD3zm7FQoE6dC91FLGcevN5qAowKbKnPb4qVpMb257aDc7zzwpUGVnf",
  "key16": "5K8vW86DBfq6kjMH2nz2BJHqQEKsXUe3k6kxsRTdTWW88TEyif8U8uXpKsqyAyBvNTHDdXzHEBQQ29eE6dakFKXs",
  "key17": "Jdvo4pvUL5AjsKVKEadMKpigs8FYfGNi15Zn6x2sZJRfqBLWrATUHtdbAHdiwjFtG86TwNWbGCT2PhjLXNcaFdP",
  "key18": "2buEko8eHssmyXfGEg3yELDAWQYBLhZTuLH2W2hkfDo7MZQuhgxHnYJVJWUX3N1GggR9EqZSoWU9GhC1xCoAVt1f",
  "key19": "2i8ED2SuaBMw256iAJ7qUKtQAWAwwW78LpgE5sRe4sR1hvgWkZtQKdTCaspqaWixwYkkgUYcz7wdugbc9JjA4U9e",
  "key20": "Cd1ajrEsdBmZvzEHzMRbWQ6CGsd9wXBVjaPdycYALkUfBgEti2M5HyWqsbjV5Lysw1NBXcgJFriU1F43LSK8ZGz",
  "key21": "AV1Mc6UdjEs5DZsKKzhmoXp5vzhGWtUTFoaVWMUZX7Gh2RScFPsbst8XJVrpWfVG8NLmQeeZ1HDkyEHeo5aApJF",
  "key22": "4bUczbFaPn7XDXAzcZBWmbem9ZJ4Fku2TqEesuooVDs9Jn91vzZzu91YBGmF2xaHF9jfUBGsER14kS9ojqKtixMx",
  "key23": "4TEaEu1wE6tN2o4X8pvAGCCeAgAfhLLAKzQiAgMCd6c3X1NTAep5DXr15SbxNnbCgfmQp1Q2HT5xy2gQQqHbqFHp",
  "key24": "3khSnGfNn62kgfBTeE7WEhKmYfx11mRceNP6JhTZmkJ2gNvPhndQRP8opRaM2nbceMdYZ2sqD71L7m4kuyoEz9g4",
  "key25": "5m3qgFg8H8RXVTpC3Ay5FtePdvoVGR954TSErCKmaxBJdAe4ykSoVbHeeBuAtPk8LpKPNdJriyHAacyAZKCJ5njb",
  "key26": "4Bn8Apodg19APRruR6Nvf66SyNQwv7Hq8n8nPX7TWmYskMWqsKUtDwzd1DipNpi1J3dkyPPPWzzM41MnASCYnZw4",
  "key27": "3ZZVQu62wo4VKS9nEHcCsASX9A98mrRQ7cDghnstNznPsibrv7p3udNFof3ZmqvPwfkCZzys4fdT2eURiwe7QnrU",
  "key28": "5ZYHqH3xKREeXjc3mYhoLoKxSVHai97u83k2CUgjUY9jmr8ELJMv2DMRUT3FQS6iVNTH45699Xp74Asg1oCQP4pz",
  "key29": "43GNHfHiyJknGRM6uNFyfxYoCKJLp6utNSCEoW3FuX9xoZQ3EZvdD9GEp4VEFC1kXpEQPuzF8t94GUtfgTBDqSZp",
  "key30": "23tQbxjDxdBXPonKQFh1qRpaEijgqj3G47xTwM3oP8MjbcccAR8ZbPp5N5Wa8L41paQJVJX6nPP6JoZZvE61wm1d",
  "key31": "2MpuEiXwTDcJbG4kiYG2kTodonSKL4LgpmVcMN9rBgXrRiXoER5RNWQd7RvmGSUt4b35GquHxthPG3FhuKjpzon5",
  "key32": "2SZoVf5BjAwGVumMzZ6RbzP6Yc4Fsj3EqN8bzedAda195SQEp2MfRh7DrsCTrHuUkkGTj51eYJHfa7guDpC2tUss"
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
