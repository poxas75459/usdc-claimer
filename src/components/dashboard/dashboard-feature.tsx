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
    "63s6ZxssYc4C687TuVLEEKtogWD8jUs1HevDKYLqaYTzdzJenxiwwUnpVWyEG132zHtBL8rKBhDXnCzyvKLzJ3Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YsmZPEDTCh5RwCPp1aFm4qAVX8gp6ResqrM6kpXG4K9wyDoF49tBCf2yGvPQx5CekG45R94gBhUQUHz24qzxRE4",
  "key1": "55ACQcb1Bx7ECurddJAeyHyJcPPkC3dCWY8m7JbXZ6DgHqhz2k6Amu5xZMSTkGEZN8i8hwu3xd7Seo56ZtRS6Y4V",
  "key2": "2Rbgb8M1YuyQJZNyJFMpjA82JWrMiyWBhzhB8obqPZnouN18i2zPX3RJyXzEWxsvdgyooo7i5gV8q7seTmGLp2jj",
  "key3": "58HXLVnmZeonMEkebG5MtkrHdqMNVRJ8dz4Cp7y9gnJrgqqm1NU7WMTZjV3FRrcAcUyYHBWt3FYaRyL1ZcFqAJtu",
  "key4": "3y9meWsBDQRVcTnU7Zd9H5deXdUJP2AJo6a9JxBnV5SnZNuUD1gtcAbBtbk3U3Xi3vaeFzsNpqrjrr8tG44gPd65",
  "key5": "SHK8wgAn9KyeDBWq64VfViAYLGoXn19Jqr93YJTm9GFTEcNQ4ZbRtQbgZCXXeW7GjTkZdj3fZDjXNMcswaViXQp",
  "key6": "QC7pdWVUWzjwRvWwoH3gLHY8EcczZhNQutgQVfDumw2AKUzn2eJbUHBfGWXGitPQXwFn8i61YKh5ZA4MaJPanoF",
  "key7": "B9vzuKuX1f4zNMSGd2VQqgvUuekUiRXkFbJghaoi4xCXdHezGdYb252XkLZQeyzggvwe6cfuhbHHTZGfxucbVb3",
  "key8": "2CsCunA4MuuCKdGt25ZyV9jeiGTDwyNbAUqx3GoqZZorZnEnFAkrEgE2PRg4d9JUie4CDSUNv4vk4TVhBDgch6cQ",
  "key9": "2Nbpm1TQfFFqXCyPVWyrad5CuQ5WBpqFg3tTFPZiMtM9BFUzdH51kccJvHj2Td8uA67hKVESRpo5SybNrrNHWZZy",
  "key10": "5yEEXe3KPnMcnaguUKExjwnCbwpyWUuq5W9RHXuJegZYEiroXTnjAoK9yaL3GVJ69FeyWvH8798XjDT4Zux7mYrW",
  "key11": "4trUy6DhJ82LJ6NWTPvKb1eRs39KKkypregz6FsdTsLFMekx4X7FNauYDjAronDGS8gnKPHyTbrjstkon9863s1K",
  "key12": "fRyXepLBbwddZ2Lq7yCh5owzR8HpV3zYW6myw2sWLhbndbxJpwK9wQCEbmE58Q1KpnGCBivQMWqnLKnmSJzRMXm",
  "key13": "5kC8fRvVWsfP9hRUSTo79ZkYbntfRYxV8FZxmFQJfZnLnugw9seyF2456Nk6PVueGZnecKZfTnJb6qnRywePVvYe",
  "key14": "4bi3tmZtKS5eViCajdQFPWEXqEW2eqWBr28WC6XtgygCGrUCV2ZuxXHEGYTjuSDYRxvCt8suYUoQNHu9zgzLdHtS",
  "key15": "2tbFdhMSJypWn2Lovb7XuabFnUMoBvQSkth9T7Lx4N2CoqxxwKdjFVtPpsAuJy5DWri9UY9x8qr334c27qksBVFb",
  "key16": "5XBfJyG4Ppqx798vZuDrakPno4soRbHLJPGeXq5dNPkNExED2DbCmvW23dfdWkh43zdRLAc9q7W6QQQhdVK3a1ro",
  "key17": "4u6Q3T9nsBdS4ypYCRsEM79o2oXxdYn5D7yFpg3LyPhuJLxJ45zV5ZKfd2UGc3MhQ6p5Tb73bA6QrukdSrwEsQ29",
  "key18": "3hnvPimkg1HAe4W7LctybjcxWMPzhJKtA9eydjxHNby4i7cFW6eHmJ7yX2TPjFQ1cQvJhSYiXsbXN3DLtwWSu1Hm",
  "key19": "2zoPtdUFY45SoYA5yVDdYkyNqcK8hiyCbn1ZL1gqcttgHDaBb4i9jxM7EomFNr9kmE4nuvz8eK9GeHL9amUGUHLi",
  "key20": "5ogUE4r8vs2r9N3KKpRVXwtEuWcndCyiCa2Gdx89oeK2sBkG1f77eaUPrbYD1WEne6JB94C1ELhfyrdcUxftkeEd",
  "key21": "3TpXNqQL6E6PUKcDTCTnVeeASh3ZzLD4CPiuzwjBybU25Yv8uTx5WLMupEhE2s5JuCyaNewASu1Jwbu6eBVqPnA8",
  "key22": "QKvCs5fZ6xDpht5972RHsmSEHC7WqpZpMu3YDunESMJA6bwZWiY5ZHtkSXVd8ASjbKXYDfNmNjyRke1pnzbWJQK",
  "key23": "4Qx5cGK16ozSu9DDNtxfnM5DWgHHNYNmUurzbvfDeW12wRctfE8pPASStAQwVSHyv5QwSuUytvFreEhe2Jib6eaX",
  "key24": "XhHTkVdvxZXZa6ktw2t2hhh6Hfg9ChJekFimYfUEMBpSyi3qKoSUacSeuqU2McAqHuXW74ooiM7Fj2YnjXkKtuk",
  "key25": "4f2eeR5MR46z6ioDdDyCZMBuZDgYCvFZ1gpkSsomGfUuyf5jdYByu3imrxxj7FVnY2jqK49yuzQw7HodxKqe2GHd",
  "key26": "5gdK2Q5181QRTVwkFSatifyWs3ThiWc5CNmG1wogaLbaGjWvdod17mWzVX6CuGnwNXF4ZAu7DoF5Gj6BddY7hN9t",
  "key27": "2o9dV2bKe2USiN8BanqHKgfVCxfaLwcsVM44AGVjYMEAsNZf17HvjXS6h71QUah4DUZj5azZJXS7t7dJzYz4jv6C",
  "key28": "3LVxfBRwSZ6xHm2FfocYqwt7Mn76TAY3bBmtS4866DAueyymR9KUbK8HmbvwgbGd5VdPwawqec412HV86geZ6nuj",
  "key29": "2PKNGnwRrhZU3Pgsye9ZdJQjvDfJfBRmdMfp3c8FMxnCpUM6dpYXoECCxMiUtRRcJHY5FjLhZu1rhXTCyeVaAbVu",
  "key30": "3j1VqzNot4818kTbCTU9FsaQgWtiSVbJhSRZgXFuWPbzbShjVUYWnDLM8fSX32HpTApqt5VvShZUGxXCDVKTD16A",
  "key31": "2rbQHxJm16xbRceR1fQrg3nmSuW1VJD62NmbZJkYhhBsUgv5QDFi3cQmHYtc9LRUzWtR6nhZUDtFLVE48F7erUpN",
  "key32": "59kd87dDQDqqDaFqkkXssYQnnxd51cUgJzTUcAnrWJqoBboLvrRK297dYf9XxQeTpW9es9QNvf8aKEeSYfXFF22W"
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
