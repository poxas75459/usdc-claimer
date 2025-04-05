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
    "4nrwFCyTtD7Hm27gVqkGmRp7YrpFNtnkoSj4CUeJzSkYyHQFPDkLc34xrnbdExdFQevNmMpvEm2mAJZ9zk4ZRGYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nvRGCneLTA8NAtAdqeqHb5fE2iAicqtsSCuyDFtpm8QKn2cLNgUgneExo8o61RuLsA12v8GW326UdFUJozavqtV",
  "key1": "4VY7czDpHaiw5edPgV9tNLbaJkhrfekJJ56AW7tUzi7cPNycnUiJqKAxeXGfFNvbZjFS7zvK1SxrBS8nDNSvL8qa",
  "key2": "2ghWDwRhvoM4a45ajzjtPKG7CtN3A6zULttB17azjZucvEcYVyFSYe2oVxHV11WgGdN2QSAt7AKHbmQthze8hEx3",
  "key3": "2zWsxH6LkU85AWVQMd1rVXNxFFzwMEca2Nejiteb1fv2iSH6o7Cpy8hXstz8LqRmwRqofJdpDHqRWsBZWfssfKLt",
  "key4": "52wHpx5YqMdjo7dZLQRpfjkkK9mT2weSKULj3JqYzALaGJTJwQfPMLof5yRCXq6XNkVsZk9x5JdRTsAptyn7RbTp",
  "key5": "WidtuwsvUH5k8cn2RQKAvPqn5oiHsrY5HCZkva2pDwZ6rhv6eLf38vUq76N114Xmf8GE34mpUWerxDXJkesJpsS",
  "key6": "5Ba1p6sGenEx4M8VyZiWPnYRz6bjAA3yJa2QFPM3oL5bvuqmZ6juarCdZgE2i83udZqYcDi4Ui8ipUYnRaDvm13f",
  "key7": "3yq4Kq4RENc8eXJEhZwCbig7VUYy1E8ne9Town8q8YV2CFdA9o1or4dgugG7HW3kfyWSb5KBgEgRJFtB4gRUcsdC",
  "key8": "2VYuYk4ayhU37GVHSyty2XqES9KvyqdV6H8TsDNGvFqxf5nvsYZruuhzNpqxn3Rnz8hS8qeyPUMUDRbakDhNqErH",
  "key9": "Rxbw4rtMstMwbvybhFwTnfm8qBse8qY1LP3zZLhB5SrvPJk2EgUXFyK9XvD3pnMxDxN1kRLbXfAodbKH9MaN4Kh",
  "key10": "4dUEZqmayEAL3tpJDpsPTP71duRkqAQsBzynFmFPEVLfg9n7ocjKvNXb1gGe1KpLZdKE28rf2xz6oWuJrWZczHhu",
  "key11": "3LoUj6YFK3wAiGDf7162SVS8S7Z92rUDsZqLduxY9ALZGnzFMFyuwnhEgs77zePYfNBboazEusQ7p32JExQZEBkf",
  "key12": "FMEeGdGiL5Q1aCt1bi8T5R6s1Liq2ufcZNwW4P7Kyprw1gv2YjccqA5emrwABrdppywQiveYm594X1HhwWPExXv",
  "key13": "2DuAgHnpNZGhsbbGYm2LsAtoqrHUUyxcWXNpDSmjwi5e3PRf66JHgQQnNNxJumZiYxhfWBU9THoddYk23qjfjnzR",
  "key14": "yQRRhP2CE2mHoSaD2Hxz56WUUqCrXNJLaNC2TVrS8nhxwDogXBd6ePr2UvJxwSubsuV9WW7RWfSE7xdxYayQ8bf",
  "key15": "1QsuawX6BKUNX29ZZmebiXbhz5fuhMRnkVhqevBJmnLsaQpk7Gz4hBvrpHEC45D42GfggREsPWGzF4zx2PwPaHX",
  "key16": "5onFd3DPBB89Qi2E82uSnuR9BR8nRHyX5jLoe4WmBpFNE1nQ7dsyaY4uLKEW2HmXj6SubDMWov4EMWXsY2fc3YzU",
  "key17": "5baKgypyzEmyW2r2c6pgbnvcFrSB6UHxsYjHZQEd8Dws7omF8AfKBUowwNeDJuq1uPtnuwCvkNM1gqeoRKiJQBgd",
  "key18": "Tb3KK2UoB62SPhFxcGxWf84FwVYhLmNQ5S4MLPLb94BFgu9BRGvFJGZ47awtAvqLwi6wAR9DnpsxxqASCiwcV8t",
  "key19": "5jqGWCk4ChfmefyGD4KWye9xXV79VuvGx1V6pycLTzsztGrf2FWvPMvchXKHCNGPBb1DRhDgjBSRV4yBfhWRDEzh",
  "key20": "4DTjNeUoLwcFsSKRMLDaGa1mSkqpoePr5YF2qCFck37WUMuGu3XZ8g521s7jzjogJzweRntjXXcEMCgvCBVnawJr",
  "key21": "3ohG1Rg7QBWm9837kjvjWtzDdHjLZcyZjtjo3eaY6YscoynWVYG7SHchr5TKcuXH76TxGB58jLmynfrNA5QYdDNx",
  "key22": "2U7iAdPscqwUGHNzqjU5bqjFh11oAmJCC6GLwwVkqjyP1hLpNWm96UY6DtCj3GFHRs6c1faFqGxqdZf2jVzrmE5E",
  "key23": "2VjFrRkA8j1CDvAkuEY4EL39g84qF8GbwmszFMVBtj4L59R3GjgsojQXh29irLmGFHszhMQNtSo9i1LkVvUipzAb",
  "key24": "634a9Pn1y2wCR5kHVCh4hwthQ6Ub42prkKL5Q9CXThHqf6dZTMzCUoTCZ3eXVxQcveSiK8CZJQoSPZfMckgUpY7L"
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
