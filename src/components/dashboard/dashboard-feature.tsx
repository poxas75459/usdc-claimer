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
    "3GvmNZGPAwNzSDfkRxj88zMMpDWWnWjLLyAQNeAjpakW2S4TzgcyvManLMg4xw8vYMz5hRZoHj6nVWr2G7bA7Cgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSiAxo7D3rV5HPJR38x9CeDoWFtLyFFwxNqSj9emSKHPQMwgZQfjomGYGgTvE2CNkPr2MS1W3DWxydshUmF6Fea",
  "key1": "2nBr14KvzpenZ3pBeKVKV5EsvJXTBWVuyJ454qAX8LRnUn3ZZZjZHVPxdn2dZcoLd4wxSGmiWCV4hT2E1Bb2Aoic",
  "key2": "2B9BhUFDTrf2ikUQAr9UYrmTd2sLaFz1FepcAdBArDDfj3PgQx7gPqB4CUUuJu4aJbz1ZsDULkY3ugztAQRYtemt",
  "key3": "359zUmbN61EmzVZcU4vBMvsbhXaNHjA4XBEoATuNPziJZKY8WkEtXtKcU6N2Tc9L8iCVHWM9kv8xHXhxydL7Yr8g",
  "key4": "3zEom2EGbgbPXpqhLtrby8U9vNnzb2foWyMPZ7pLS3Q3GesFxGn1eME6RHG5VFqKCBxdQUDvzNrYoNmo6Fm4JWNC",
  "key5": "3Fy76tD9dGcZVeBnE1KLmimqqYQ7Qi6YFMTfmTxPsJGRrff5ZseBUWYK8KxbZt8GQzmbDQrRAx5Dit5GiURATwBp",
  "key6": "7MmDMRh5BonuHw897666FP72pjJCgA6Mttrkjcrrjr5bcArc6MfSjfs4Z2Ze29EDgoDaMSV1q9eLixZtvSjcz5J",
  "key7": "28S2KuKT1qFzkoWALDjo25229TQGX9w6fshiB1DxrZQLfo9pZokQFG64BD3hUnzGQh3rMb8PiHE32bpGm8ZbCLQg",
  "key8": "26XW5pAsJwpnX3FG5CZqUX6WYzA93Dhk34C9grmvyigkGpeugKrXiBD1e7VCASzifhZFgboxGAZqJ4vAqDu8CUAJ",
  "key9": "1e1ktv5JXV8xv3u5bRhqU9wYULVJ6U5XF4gh1ELMwjqY7pGGysWr3YxGHjZHinpJcske2bUqVUpiZGKqxK4QDF5",
  "key10": "2PEDLbxhAmPiKPBZed2RRuwDJzj8TSKyBasrzaFuXpcF8wqrZRj7T1ntoHmmc6HSh3JgMLCi6EbTvspHm67dUWoL",
  "key11": "4KdoM38Sdjw3hv7tCqJQzU87Lnb5UUNPh6uAnwDUkawcb4UVUunvWMoeu6ye45PPXNrPEwufJcrGPZ1tguZ75ZXK",
  "key12": "4etJpuX2KC4EpjLr6zFaAMzQGkYBWvBnYcVyYM4ajW4d9s35rET2s7w2zinf4jXDMw3mEU4GbWtT7ZMw9mCRBdv",
  "key13": "2LgrZYoL54Z6efzvUs3JZiKbatQqXRws3TqPrfSVfh6Jrjg815KUs3Dd9XbhJBNy2fwUzV8Nh3hVbLKtxMfvfZrR",
  "key14": "5DPLgxaXSRV8nRHF1PKdjVDdq7hnh4dg3QzzfH1WPRssKzpTpyN9bDGUHGDctSFX5hrad99Nbi5mpC78yDje2Cj7",
  "key15": "3XrgbmTyd3TQa4BhdWBq3UzvTnCoBvta3tFHeAE9AbJeyRySTzkdVNuX1jeEtsheY9pwuZCZx3wLXLHonwER47VD",
  "key16": "5MafJkN2qiLP3sWLzc5NKvNZHjff7s8c8TdAL27jC2mfMNCFRk3gNLesm8kAUGrCYNGrvyrkshvJjQAvpf6wq4SD",
  "key17": "126pTHcxKwjDKkza5p41SNE2Q6PzV6WrAvjnrRqAYvewdeFxfaC98R9YETJxQRRBZG2aSg9S6MLaPaQUTqckfafR",
  "key18": "5e75Qvb9h4zbvStkXK17gDtAyp5oZ65L4CZ3XDKwPHoEgeKdt2VMzcRDRLTUSu5TicziiTvHAUVJ7chnpUYBgG1H",
  "key19": "4Ugj5uR2qZqybNXwxtMbWjz4VQHkV3XwBumAVKivfd5tYaPetFv6DZVjrxNGr25NT3dFBNe7CReBQamCWSMLqgP4",
  "key20": "5oyqgWtHjFMgZpbnYg8E4ZzJQiMGCbyzidij78S2m8UqKhUFXSwLcBwcNT9NQDnjmKxbbXYpUEPtaxyAQ6QaNCto",
  "key21": "3nhdeAgAmfnkBWRWzPXNDAojY4RiBXCCuHiqyZmVmeMdHfyBsLfEkjyS373h6GnZr2V67Np6Qw2A5ki4gT8SU6Bs",
  "key22": "3hd42SJvkRD14vNp8EBuyxQmSsPJ6zwQr12PreqJjCEK8n6BUdZCNamwh8NLHhPCKutKypSzjo3y9AgLtUuNNqzx",
  "key23": "7sxJwNCNHaBXk47LV9QJmAnKSSPYbr9LcK2QxG54oaXdHwKFgkZ3Bargdb62r6sR9Nk46BE6DNGQZCX9sopGfT6",
  "key24": "24VtH76gn3LhoqdvNM9i1sSrxUnWkjQL6xW2DmBNYDwSqC4kbsgexC4kEeLKJB66XDFGzsJJaeJxcSyWARiPc7NJ",
  "key25": "42NkS9bsBAxatWGDx8pMcoy7hCJyxTjdyyu18W1H8HbeZdBy8fUexeEMbVssJtF9WvbuxUF3Q5fEMF7sgX4rqPxT",
  "key26": "2VzT9uNBY2W4EygNs4AbUe8iJJTyCynPqp9q3aZ33k1SNL9EfMc8Tx32T1KZB7ecvzvvW3qif8FEP3EgKq2pHP7p",
  "key27": "4waKumbgjN4ZWacGNGEpAWAhoJVEDPhGd5yXUfbkmQczZLUipoVCRmR48Kj4UXAisf2x1K5NpbB1EyzNcQuEnxzF",
  "key28": "3o99JANELUJiZTZad3bX9ZoMFxYsVF97b6sDKWaiT3kg1zE5tYSyzZdqutLgtDpoVVn1mN7JDgwUSevAPNREmdVv",
  "key29": "3WuSEZR6ohXhUQFyNyXneVbAqRUupXm3M9uuyu2LsCGtrnBY8skEPjsMBcLxsoUyzU4FNbnmNzj2UJGB5mJtwCdC",
  "key30": "2D97vQfMTWBaUevdBTQnWThnDHaseEbvvRVcFfMV6vwhYLhRPutNkZ6Yx1SDnHHzqdfSukXSby5zjHmGnEhamRQ4",
  "key31": "4at2oSiVC5hnjyLwKusxqyES4vyTGy6MAEsusEjUPgfNRhxj8L5hjU5c5BW2YPheeN6xU6oyrUmRhAs7r2mMnK1R",
  "key32": "2smE5Zdgej7QXv7TCgXFopfEgWGWzjX5zSGNvcAUWBnVsSMoma6vg4BmA1UHSCfzCSV9buZ26JY6VPUrpxA3hKun",
  "key33": "5i1pYrewgLtHCgUDfQFhkhFg5sBDi9D37G6n6Xytf68RF7BQ2Jo3vEkMfgJ1RKM7e3syaLcWdZnZzFbPXLu1UmQ6",
  "key34": "ktRJgrJLYX3ionpAzkHYRVwjk6n7GDXGDaHc1KbyaurZqvghrfHacC119FThCMwX5eSmt2Dc4vqXz9rNCCTPUcB",
  "key35": "hffnRe6F4v3ECuVCMxyVHgZ5chbhy2QZzpuKg14STcxXqvEJ9mpoFoWifG66mhnh6Mu28R4x6oxwU6WrQ8JRihU",
  "key36": "57XamSo3Hb9ATc9ro3megaTBFHLi8BTBB24gdTfJRPitK1eUiY96YuguyM6hQLqmXFMt6q96gFZFZHesqfvxjDVT"
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
